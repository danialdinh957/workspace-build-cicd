import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils'

const buttonVariants = cva(
  cn(
    'pkg-cursor-pointer pkg-transition pkg-shadow-none pkg-outline-0',
    '[box-shadow:unset] [outline:unset]',
  ),
  {
    variants: {
      variant: {
        primary: cn(
          'pkg-bg-primary pkg-text-black hover:pkg-bg-primary-700 pkg-border pkg-border-red-500',
        ),
        secondary:
          'pkg-bg-secondary pkg-text-primary hover:pkg-bg-secondary-700',
      },
      size: {
        sm: 'pkg-px-3 pkg-py-1.5 pkg-text-[16px] pkg-rounded',
        md: 'pkg-px-4 pkg-py-2 pkg-text-[18px] pkg-rounded-md',
        lg: 'pkg-px-5 pkg-py-2.5 pkg-text-[20px] pkg-rounded-lg',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
    },
  },
)

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button
        type="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
        ref={ref}
      />
    )
  },
)

Button.displayName = 'Button'

export default Button
