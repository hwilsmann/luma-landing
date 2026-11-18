import Image from 'next/image'

import Button from '../ui/Button'

export default function People() {
  return (
    <section id="community" className="bg-background py-12 lg:py-32">
      <div className="mx-auto max-w-284 px-5 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_535px] lg:gap-16">
          <div className="flex flex-col items-start gap-4 lg:gap-8">
            <span className="text-primary text-[12px] leading-4 font-semibold tracking-[1.44px] uppercase">
              The people
            </span>

            <h2 className="text-text-primary font-jakarta text-[20px] leading-6 font-extrabold tracking-[-0.5px] lg:text-[48px] lg:leading-14 lg:tracking-[-1.2px]">
              Meet international students & teachers
            </h2>

            <p className="text-[12px] leading-4.5 lg:text-[18px] lg:leading-7">
              Practical courses taught by people who do the work every day.
              Learn design, technology, business and more — one focused lesson
              at a time.
            </p>

            <Button href="/explore-teachers-and-students" variant="secondary">
              Explore teachers and students
            </Button>
          </div>

          <Image
            src="/images/people.png"
            alt="International students and teachers"
            width={535}
            height={530}
            priority
            className="h-auto w-full object-cover lg:h-132.5 lg:w-133.75"
          />
        </div>
      </div>
    </section>
  )
}
