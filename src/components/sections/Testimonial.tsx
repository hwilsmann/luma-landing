import Image from 'next/image'

const stats = [
  {
    title: '24K+',
    description: 'active learners',
  },
  {
    title: '120+',
    description: 'expert-led courses',
  },
  {
    title: '92%',
    description: 'complete their first course',
  },
]

export default function Testimonial() {
  return (
    <section className="py-12 lg:py-32">
      <div className="mx-auto max-w-284 px-5 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_401px] lg:gap-16">
          <blockquote className="flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col gap-3">
              <Image
                src="/images/symbol.svg"
                alt="Symbol"
                width={24}
                height={22}
              />

              <h2 className="text-text-primary font-jakarta text-[16px] leading-6 font-semibold tracking-[-0.3px] lg:text-[30px] lg:leading-11 lg:tracking-[-0.75px]">
                The lessons are short enough to fit into my week, but detailed
                enough that I actually leave with something I can use.
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src="/images/p1.webp"
                alt="Person 1"
                width={48}
                height={48}
                className="h-8 w-8 rounded-full object-cover lg:h-12 lg:w-12"
              />

              <div className="flex flex-col gap-1 text-[11px] lg:text-[14px]">
                <strong className="text-text-primary text-[12px] font-bold lg:text-[16px]">
                  Alex Morgan
                </strong>

                <span>Product Manager</span>
              </div>
            </div>
          </blockquote>

          <div className="border-neutral-light border-t pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
            <ul className="grid grid-cols-3 gap-3 lg:flex lg:flex-col lg:gap-6">
              {stats.map((stat) => (
                <li
                  key={stat.description}
                  className="flex min-w-0 flex-col gap-1"
                >
                  <strong className="font-jakarta text-primary text-[28px] leading-8.5 font-extrabold tracking-[-0.8px] lg:text-[64px] lg:leading-17.5 lg:tracking-[-1.6px]">
                    {stat.title}
                  </strong>

                  <span className="text-[9px] leading-3.25 lg:text-[14px] lg:leading-6">
                    {stat.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
