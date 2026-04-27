import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/libs/cn';

const buttonVariants = cva(
  cn(
    "group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-30 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    'cursor-pointer font-imbue uppercase',
  ),
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: cn(
          'gap-1.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
          'w-full h-10 px-5 text-xl',
          'sm:w-auto',
        ),
        icon: 'size-8',
        'icon-lg': 'size-9',
        'icon-sm': 'size-7 rounded-none',
        'icon-xs': "size-6 rounded-none [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-none px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
      },
      variant: {
        default: cn(
          'bg-black text-white [a]:hover:bg-primary-yellow hover:bg-white hover:text-black',
          'relative before:absolute before:content-[""] before:-top-1 before:-right-1 before:-bottom-1 before:-left-1 before:border-2 before:border-black',
        ),
        destructive: cn(
          'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',
          'relative before:absolute before:content-[""] before:-top-1 before:-right-1 before:-bottom-1 before:-left-1 before:border-2 before:border-destructive/10 hover:before:border-destructive/20',
        ),
        link: 'text-black underline-offset-4 hover:underline',
        secondary: cn(
          'text-black hover:text-white hover:bg-black aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
          'relative before:absolute before:content-[""] before:-top-1 before:-right-1 before:-bottom-1 before:-left-1 before:border-2 before:border-black',
        ),
      },
    },
  },
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      className={cn(buttonVariants({ className, size, variant }))}
      data-size={size}
      data-slot="button"
      data-variant={variant}
      {...props}
    />
  );
}

export { Button, buttonVariants };
