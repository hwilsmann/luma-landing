import Link from 'next/link'

const categories = [
  {
    title: 'Product Design',
    description: 'Turn complex problems into clear, useful experiences.',
    href: '/categories/product-design',
  },
  {
    title: 'Technology',
    description:
      'Build a stronger understanding of the tools shaping digital products.',
    href: '/categories/technology',
  },
  {
    title: 'Business',
    description:
      'Develop practical skills for better decisions and stronger teams.',
    href: '/categories/business',
  },
  {
    title: 'Creative',
    description: 'Explore new ways to communicate, create and tell stories.',
    href: '/categories/creative',
  },
]

export default function Categories() {
  return (
    <section className="py-16 lg:py-32">
      <div className="mx-auto max-w-284 px-5 lg:px-0">
        <div className="flex flex-col gap-8 lg:gap-16">
          <div className="flex max-w-140 flex-col gap-4 lg:gap-8">
            <span className="text-primary text-[12px] leading-4 font-semibold tracking-[1.44px] uppercase">
              Find your next skill
            </span>

            <h2 className="text-text-primary font-jakarta text-[28px] leading-8 font-extrabold tracking-[-0.7px] lg:text-[48px] lg:leading-14 lg:tracking-[-1.2px]">
              Learn something worth knowing.
            </h2>

            <p className="text-[14px] leading-5 lg:text-[18px] lg:leading-7">
              Short, practical courses designed around skills you can put to
              work immediately.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3 lg:grid-cols-4 lg:gap-6">
            {categories.map((category, index) => (
              <li key={category.href}>
                <Link
                  href={category.href}
                  className="border-neutral-light hover:bg-surface group flex h-full flex-col items-start justify-between gap-5 rounded-2xl border p-5 transition-colors duration-350 lg:gap-7 lg:p-7"
                  prefetch={false}
                >
                  <div className="flex flex-col items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="bg-surface text-primary group-hover:bg-primary rounded-md px-2 py-1 text-[12px] leading-4 font-semibold tracking-[1.44px] transition-colors duration-350 group-hover:text-white"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3 className="text-text-primary font-jakarta text-[16px] leading-6 font-bold lg:text-[20px] lg:leading-8">
                      {category.title}
                    </h3>

                    <p className="text-[12px] leading-4.5 lg:text-[14px] lg:leading-6">
                      {category.description}
                    </p>
                  </div>

                  <span className="text-text-primary flex items-center gap-1 text-[12px] leading-5 font-bold lg:text-[14px] lg:leading-6">
                    Explore <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
