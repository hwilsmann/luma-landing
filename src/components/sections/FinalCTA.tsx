import Image from 'next/image'

import Button from '../ui/Button'

const avatars = [
  '/images/a1.webp',
  '/images/a2.webp',
  '/images/a3.webp',
  '/images/a1.webp',
]

export default function FinalCTA() {
  return (
    <section className="bg-[#FFF1C2] bg-[url('/images/final-cta-bg.webp')] bg-cover bg-center bg-no-repeat py-10 lg:py-32">
      <div className="mx-auto max-w-284 px-5 lg:px-0">
        <div className="flex flex-col items-center gap-8 lg:gap-16">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2" aria-hidden="true">
                {avatars.map((src, index) => (
                  <Image
                    key={`${src}-${index}`}
                    src={src}
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="border-accent h-8 w-8 rounded-full border-2 object-cover lg:h-10 lg:w-10"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 text-center lg:gap-3">
            <h2 className="text-text-primary font-jakarta text-[20px] leading-6 font-extrabold tracking-[-0.5px] lg:text-[56px] lg:leading-16 lg:tracking-[-1.4px]">
              What will you learn next?
            </h2>

            <p className="text-[12px] leading-4.5 lg:text-[18px] lg:leading-7">
              Start with one course. Build from there.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 lg:w-auto lg:flex-row">
            <Button href="/courses" variant="primary">
              Explore all courses
            </Button>

            <Button href="/join-luma" variant="secondary">
              Join Luma
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
