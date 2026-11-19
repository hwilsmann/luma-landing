import Image from 'next/image'

import Button from '../ui/Button'

const details = ['8 lessons', '2h 40min', 'Intermediate']

export default function FeaturedCourse() {
  return (
    <section id="courses" className="bg-primary py-8 text-white lg:py-32">
      <div className="mx-auto max-w-284 px-4 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[538px_minmax(0,1fr)] lg:gap-16">
          <div className="relative">
            <div className="bg-accent text-text-primary absolute -top-2.5 -left-2 z-20 rounded-lg px-3 py-1.5 text-[10px] font-semibold tracking-[1.2px] whitespace-nowrap uppercase lg:-top-3.75 lg:-left-3.75 lg:px-4 lg:py-2 lg:text-[12px] lg:tracking-[1.44px]">
              Featured Course
            </div>

            <Image
              src="/images/featured-course.webp"
              alt="Product design course — student working on interface designs"
              width={538}
              height={408}
              className="h-auto w-full rounded-2xl object-cover lg:h-102 lg:w-134.5"
            />
          </div>

          <div className="flex flex-col gap-5 lg:gap-8">
            <span className="text-[12px] leading-4 font-semibold tracking-[1.44px] uppercase">
              Most popular this month
            </span>

            <h2 className="font-jakarta text-[28px] leading-8 font-extrabold tracking-[-0.7px] lg:text-[48px] lg:leading-14 lg:tracking-[-1.2px]">
              Designing products people understand.
            </h2>

            <p className="text-[13px] leading-5 lg:text-[16px] lg:leading-7">
              Learn how to turn complex workflows into simple, intentional
              product experiences through research, structure and thoughtful
              interaction design.
            </p>

            <p className="text-[13px] leading-5 lg:text-[16px] lg:leading-7">
              with <span>Maya Chen</span> · Senior Product Designer
            </p>

            <ul className="flex flex-wrap gap-2 lg:gap-3">
              {details.map((detail) => (
                <li
                  key={detail}
                  className="rounded-lg border px-3 py-1 text-[12px] leading-6 lg:px-3.5 lg:py-1.5 lg:text-[14px] lg:leading-7"
                >
                  {detail}
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
              <Button href="/courses" variant="yellow">
                View course
              </Button>

              <Button href="/how-it-works" variant="transparent">
                Browse all courses <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
