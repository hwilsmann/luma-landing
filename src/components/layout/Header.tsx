'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Nav from '../ui/Nav'
import Button from '../ui/Button'

const nav = [
  { label: 'Courses', href: '#courses' },
  { label: 'For Teams', href: '#for-teams' },
  { label: 'Community', href: '#community' },
  { label: 'About', href: '#about' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <header className="bg-background border-neutral-light sticky top-0 z-21 border-b py-4">
      <div className="mx-auto max-w-284 px-4 lg:px-0">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" aria-label="Luma - Home">
            <Image
              src="/images/logo.svg"
              alt="Luma"
              width={54}
              height={17}
              priority
            />
          </Link>

          <div className="hidden lg:block">
            <Nav items={nav} />
          </div>

          <div className="hidden gap-3 lg:flex">
            <Button href="/log-in" variant="transparent">
              Log in
            </Button>

            <Button href="/start-learning" variant="primary">
              Start learning
            </Button>
          </div>

          <button
            type="button"
            className="flex items-center justify-center lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <span className="relative block h-3 w-5">
                <span className="bg-text-primary absolute top-1.5 left-0 h-[1.5px] w-5 rotate-45" />
                <span className="bg-text-primary absolute top-1.5 left-0 h-[1.5px] w-5 -rotate-45" />
              </span>
            ) : (
              <Image
                src="/images/hamburguer.svg"
                alt=""
                width={20}
                height={12}
              />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="flex flex-col gap-5 pt-6 lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <Button href="/log-in" variant="transparent">
                Log in
              </Button>

              <Button href="/start-learning" variant="primary">
                Start learning
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
