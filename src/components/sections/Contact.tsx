import Image from 'next/image'

import Button from '../ui/Button'

export default function Contact() {
  return (
    <section id="about" className="py-12 lg:py-32">
      <div className="mx-auto max-w-284 px-5 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_540px] lg:gap-16">
          <div className="flex flex-col gap-4 lg:gap-8">
            <span className="text-primary text-[12px] leading-4 font-semibold tracking-[1.44px] uppercase">
              Contact
            </span>

            <h2 className="text-text-primary font-jakarta text-[20px] leading-6 font-extrabold tracking-[-0.5px] lg:text-[48px] lg:leading-14 lg:tracking-[-1.2px]">
              Get in touch
            </h2>

            <p className="text-[12px] leading-4.5 lg:text-[18px] lg:leading-7">
              Have a question? We’re here to help. Whether you’re looking for
              the right course, learning with your team or interested in
              teaching with Luma, we’d love to hear from you.
            </p>

            <div className="flex flex-col gap-3">
              <div className="bg-background flex items-center gap-3 rounded-xl p-4 lg:p-7">
                <Image
                  src="/images/email.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-cover"
                />

                <div className="flex flex-col gap-1">
                  <span className="text-text-primary text-[12px] lg:text-[14px]">
                    Email
                  </span>

                  <a
                    className="text-primary text-[12px] hover:underline lg:text-[14px]"
                    href="mailto:contact@luma.com"
                  >
                    contact@luma.com
                  </a>
                </div>
              </div>

              <div className="bg-background flex items-center gap-3 rounded-xl p-4 lg:p-7">
                <Image
                  src="/images/time.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-cover"
                />

                <div className="flex flex-col gap-1">
                  <span className="text-text-primary text-[12px] lg:text-[14px]">
                    Response Time
                  </span>

                  <span className="text-[12px] lg:text-[14px]">
                    Up to 24 hours on business days
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form className="border-neutral-light flex flex-col gap-5 rounded-2xl border p-5 shadow-[0px_12px_32px_0px_#171B2C0A] lg:gap-7 lg:p-7">
            <div className="flex flex-col gap-1">
              <h3 className="text-text-primary font-jakarta text-[16px] leading-6 font-bold lg:text-[20px] lg:leading-8">
                Contact us
              </h3>

              <p className="text-[12px] leading-4.5 lg:text-[14px] lg:leading-6">
                Fill out the fields and we will get in touch.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-text-primary text-[12px] leading-5 font-bold lg:text-[14px] lg:leading-6"
              >
                Full name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="border-neutral-light bg-background focus:border-primary h-10 rounded-lg border px-4 py-2 text-[12px] leading-5 transition-colors duration-350 focus-visible:outline-none lg:h-12 lg:py-3 lg:text-[14px] lg:leading-6"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-text-primary text-[12px] leading-5 font-bold lg:text-[14px] lg:leading-6"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="border-neutral-light bg-background focus:border-primary h-10 rounded-lg border px-4 py-2 text-[12px] leading-5 transition-colors duration-350 focus-visible:outline-none lg:h-12 lg:py-3 lg:text-[14px] lg:leading-6"
                placeholder="youremail@example.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-text-primary text-[12px] leading-5 font-bold lg:text-[14px] lg:leading-6"
              >
                Your question
              </label>

              <textarea
                id="message"
                name="message"
                required
                className="border-neutral-light bg-background focus:border-primary h-22.5 resize-none rounded-lg border px-4 py-3 text-[12px] leading-5 transition-colors duration-350 focus-visible:outline-none lg:h-30 lg:text-[14px] lg:leading-6"
                placeholder="Tell us how we can help..."
              />
            </div>

            <Button type="submit" variant="primary">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
