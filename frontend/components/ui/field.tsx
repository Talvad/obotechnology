import { FormState } from '@/lib/types';
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

function FieldError({ errors }: { errors: string[] }) {
  if (errors.length === 0) return null;
  const uniquErrors = [...new Set(errors)];
  return (
    <ul className='ml-4 flex list-disc flex-col gap-1 text-xs font-normal text-red-500 py-1'>
      {uniquErrors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  );
}

function FormError({ state }: { state: FormState }) {
  if (state?.error)
    return (
      <Field>
        <p
          className={`border font-medium p-2 rounded-md text-center text-sm text-red-600 border-red-600 bg-red-600/10`}
        >
          {state.error}
        </p>
      </Field>
    );
  if (state?.message)
    return (
      <Field>
        <p
          className={`border font-medium p-2 rounded-md text-center text-sm text-green-600 border-green-600 bg-green-600/10`}
        >
          {state.message}
        </p>
      </Field>
    );
}

export { Field, FieldLabel, FieldDescription, FieldError, FormError };
