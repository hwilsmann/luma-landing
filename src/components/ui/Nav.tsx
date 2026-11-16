import Link from 'next/link'

type NavItem = {
  label: string
  href: string
}

type NavProps = {
  items: NavItem[]
}

export default function Nav({ items }: NavProps) {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-wrap gap-6">
        {items.map((item) => (
          <li key={item.href}>
            {item.href.startsWith('#') ? (
              <a href={item.href} className="hover:text-primary">
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
