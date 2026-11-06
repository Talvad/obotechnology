import { ComponentProps } from 'react';

function Field({ className = '', ...props }: ComponentProps<'div'>) {
  return <div className={`py-2 ${className}`} {...props} />;
}

function FieldLabel({ className = '', ...props }: ComponentProps<'label'>) {
  return (
    <label
      className={`block mb-1 font-semibold text-xs text-gray-500 ${className}`}
      {...props}
    />
  );
}

function FieldDescription({ ...props }: ComponentProps<'p'>) {
  return <p {...props} />;
}
export { Field, FieldLabel, FieldDescription };
