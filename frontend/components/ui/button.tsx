import { ComponentProps } from 'react';
type ButtonVariant = 'default' | 'outline';
type ButtonProps = ComponentProps<'button'> & { variant?: ButtonVariant };
const classNames: Record<ButtonVariant, string> = {
  default:
    'inline-flex items-center justify-center font-title-md text-body-md bg-primary text-on-primary font-bold px-space-lg py-space-sm rounded shadow-sm hover:brightness-110 active:scale-95 transition-all',
  outline:
    'inline-flex items-center justify-center font-title-md text-body-md border border-primary  text-primary font-bold px-space-lg py-space-sm rounded shadow-sm hover:brightness-110 active:scale-95 transition-all',
};
function Button({
  variant = 'default',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`cursor-pointer ${classNames[variant]} ${className}`}
      {...props}
    />
  );
}

export { Button };
