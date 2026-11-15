import Link from 'next/link'

import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary' | 'yellow' | 'transparent'
  className?: string
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex gap-1 items-center rounded-lg px-6 py-3 text-[14px] leading-[24px] font-bold justify-center'

  const variants = {
    primary: 'bg-primary text-white',
    secondary: 'border border-neutral-light bg-white text-text-primary',
    yellow: 'bg-accent text-text-primary',
    transparent: 'bg-transparent text-inherit',
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
