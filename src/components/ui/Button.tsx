import Link from 'next/link'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'yellow' | 'transparent'
  className?: string
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex gap-1 items-center border rounded-lg px-6 py-3 text-[14px] leading-[24px] font-bold justify-center cursor-pointer'

  const variants = {
    primary:
      'border-primary bg-primary text-white hover:bg-transparent hover:text-primary transition-colors duration-350',
    secondary:
      'border-neutral-light bg-white text-text-primary hover:border-primary hover:text-primary transition-colors duration-350',
    yellow:
      'border-accent bg-accent text-text-primary hover:bg-transparent hover:text-accent transition-colors duration-350',
    transparent:
      'bg-transparent text-inherit border-transparent hover:opacity-75 transition-opacity duration-350',
  }

  const styles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={styles}>
      {children}
    </button>
  )
}
