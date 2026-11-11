import { ComponentProps } from 'react';

function Input({ className = '', ...props }: ComponentProps<'input'>) {
  return (
    <input
      className={` h-9 w-full px-space-md py-space-sm rounded bg-surface-container-low border border-surface-container text-text-primary font-body-sm text-base placeholder-text-tertiary focus:outline-none focus:ring-1 focus:ring-primary ${className}`}
      {...props}
    />
  );
}

export default Input;
