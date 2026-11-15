import Image from 'next/image'

import Button from '../ui/Button'

const avatars = ['/images/a1.jpg', '/images/a2.jpg', '/images/a3.jpg']

export default function Hero() {
  return (
    <section className="bg-background pt-4 pb-10 lg:py-32">
      <div className="mx-auto max-w-[1136px] px-4 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_500px] lg:gap-16">
          <div className="order-2 flex flex-col gap-4 lg:order-1 lg:gap-8">
            <span className="text-primary text-[12px] leading-4 font-semibold tracking-[1.44px] uppercase">
              Learn at your own pace
            </span>

            <h1 className="text-text-primary font-jakarta text-[30px] leading-[33px] font-extrabold tracking-[-0.8px] lg:text-[64px] lg:leading-[70px] lg:tracking-[-1.6px]">
              Build skills that actually move you forward.
            </h1>

            <p className="text-[14px] leading-5 lg:text-[18px] lg:leading-7">
              Practical courses taught by people who do the work every day.
              Learn design, technology, business and more — one focused lesson
              at a time.
            </p>

            <div className="flex flex-col gap-3 lg:flex-row">
              <Button href="/courses" variant="primary">
                Explore courses
              </Button>

              <Button href="/how-it-works" variant="secondary">
                See how it works
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2" aria-hidden="true">
                {avatars.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={32}
                    height={32}
                    className="border-background h-8 w-8 rounded-full border-2 object-cover"
                  />
                ))}
              </div>

              <p className="text-[12px] leading-5 lg:text-[14px] lg:leading-6">
                <strong className="text-text-primary font-bold">
                  Trusted by 24,000+
                </strong>{' '}
                learners
              </p>
            </div>
          </div>

          <div className="relative order-1 mx-auto w-[346px] max-w-full lg:order-2 lg:mx-0 lg:w-[500px]">
            <div className="text-text-primary absolute top-4 left-[-8px] z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[12px] leading-6 shadow-[0px_4px_24px_0px_#0000001A] sm:px-6 sm:text-[14px] lg:left-[-22px]">
              <span className="bg-surface text-primary rounded-md p-1 text-[14px] leading-6 font-bold">
                120+
              </span>
              expert-led courses
            </div>

            <div className="text-text-primary absolute right-[-8px] bottom-4 z-20 flex items-center gap-2 rounded-xl bg-white px-3 py-3 text-[12px] leading-6 shadow-[0px_4px_24px_0px_#0000001A] sm:gap-3 sm:px-4 sm:text-[14px] lg:right-[-55px]">
              <div className="flex items-center gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src="/images/star.svg"
                    alt=""
                    width={10}
                    height={10}
                    className="h-[9.63px] w-[10px]"
                  />
                ))}
              </div>

              <span>4.9 avg rating</span>
            </div>

            <div
              aria-hidden="true"
              className="absolute top-6 left-[215px] z-0 h-[342px] w-[89px] rounded-2xl bg-orange-200 lg:left-[450px] lg:h-[468px]"
            />

            <div
              aria-hidden="true"
              className="absolute top-[310px] left-[-10px] z-0 size-[70px] rounded-full bg-indigo-100 lg:top-[403px] lg:left-[-44.8px] lg:size-[106px]"
            />

            <Image
              src="/images/hero.jpg"
              alt="Person focused on learning at their laptop"
              width={500}
              height={520}
              preload
              className="relative z-10 mx-auto h-[380px] w-[346px] max-w-full rounded-2xl object-cover lg:mx-0 lg:h-[520px] lg:w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
