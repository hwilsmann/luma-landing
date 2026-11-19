import Image from 'next/image'

const steps = [
  {
    image: '/images/s1.svg',
    title: 'Choose your focus',
    description:
      'Find courses based on the skill you want to build, not endless content categories.',
  },
  {
    image: '/images/s2.svg',
    title: 'Learn from experience',
    description:
      'Follow concise lessons created by professionals who use these skills.',
  },
  {
    image: '/images/s3.svg',
    title: 'Put it into practice',
    description:
      'Every course includes practical exercises designed to turn knowledge into action.',
  },
]

export default function HowItWorks() {
  return (
    <section id="for-teams" className="bg-background py-16 lg:py-32">
      <div className="mx-auto max-w-284 px-5 lg:px-0">
        <div className="flex flex-col gap-8 lg:gap-32">
          <div className="flex flex-col items-center gap-4 lg:gap-8">
            <span className="text-primary text-[12px] leading-4 font-semibold tracking-[1.44px] uppercase">
              How Luma works
            </span>

            <h2 className="text-text-primary font-jakarta text-center text-[28px] leading-8 font-extrabold tracking-[-0.7px] lg:text-[48px] lg:leading-14 lg:tracking-[-1.2px]">
              Less browsing. More learning.
            </h2>
          </div>

          <ol className="before:bg-neutral-light relative grid grid-cols-1 gap-8 before:absolute before:top-7 before:bottom-7 before:left-7 before:w-px before:content-[''] lg:grid-cols-3 lg:gap-16 lg:before:top-7 lg:before:right-auto lg:before:bottom-auto lg:before:left-0 lg:before:h-px lg:before:w-[calc((100%-128px)*2/3+128px)]">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative flex flex-col items-start gap-4 lg:gap-8"
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={56}
                  height={56}
                  className="relative z-1"
                />

                <div className="bg-background relative z-1 flex flex-col gap-2 py-8 lg:gap-3 lg:bg-transparent lg:py-0">
                  <span className="text-[12px] leading-4 font-semibold tracking-[1.44px] uppercase">
                    Step {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className="text-text-primary font-jakarta text-[16px] leading-6 font-bold lg:text-[20px] lg:leading-8">
                    {step.title}
                  </h3>

                  <p className="text-[12px] leading-4.5 lg:text-[16px] lg:leading-7">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
