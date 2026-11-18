import Image from 'next/image'
import Link from 'next/link'

const lists = [
  {
    title: 'Explore',
    links: [
      { label: 'Courses', href: '/courses' },
      { label: 'Categories', href: '/categories' },
      { label: 'Instructors', href: '/instructors' },
      { label: 'For Teams', href: '/teams' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Journal', href: '/journal' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Contact', href: '/contact' },
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-text-primary text-text-white-tertiary pt-12 pb-6 lg:pt-32">
      <div className="mx-auto max-w-284 px-5 lg:px-0">
        <div className="flex flex-col gap-10 lg:gap-32">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-[416px_repeat(3,minmax(0,1fr))] lg:gap-6">
            <div className="col-span-2 flex flex-col gap-3 lg:col-span-1">
              <Link href="/" aria-label="Luma - Home">
                <Image
                  src="/images/logo.svg"
                  alt="Luma"
                  width={54}
                  height={17}
                  className="brightness-0 invert"
                />
              </Link>

              <p className="text-[12px] leading-5 lg:text-[14px] lg:leading-6">
                Practical learning for curious
                <br />
                people.
              </p>
            </div>

            {lists.map((list) => (
              <nav
                key={list.title}
                aria-label={list.title}
                className="flex flex-col gap-3"
              >
                <h2 className="text-text-white-secondary text-[11px] leading-4 font-semibold tracking-[1.44px] uppercase lg:text-[12px]">
                  {list.title}
                </h2>

                <ul className="flex flex-col gap-2 lg:gap-3">
                  {list.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[12px] leading-5 hover:underline lg:text-[14px] lg:leading-6"
                        prefetch={false}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="border-neutral-light border-t pt-5 text-center lg:pt-6 lg:text-left">
            <p className="text-text-white-secondary text-[11px] leading-[19.5px] lg:text-[13px]">
              © {new Date().getFullYear()} Luma Learning
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
