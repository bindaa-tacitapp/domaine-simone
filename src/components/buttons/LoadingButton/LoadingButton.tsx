import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';
import {
  type buttonVariants,
  Button as DefaultButton,
} from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

const Button = ({
  children,
  disabled,
  isLoading,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    tooltip?: ReactNode;
  }) => (
  <DefaultButton {...props} disabled={disabled || isLoading}>
    {isLoading ? (
      <span className="flex items-center justify-center">
        <Spinner />
      </span>
    ) : (
      children
    )}
  </DefaultButton>
);

export { Button };
