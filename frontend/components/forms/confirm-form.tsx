'use client';

import { useActionState } from 'react';
import { Button } from '../ui/button';
import {
  FormError,
  Field,
  FieldLabel,
  FieldError,
  FieldDescription,
} from '../ui/field';
import Input from '../ui/input';
import { confirmAction } from '@/actions/auth';

export default function ConfirmForm({ email }: { email?: string }) {
  const [state, formAction, isPending] = useActionState(
    confirmAction,
    undefined,
  );
  return (
    <form action={formAction}>
      <FormError state={state} />
      <Field>
        <FieldLabel htmlFor='email'>E-mail</FieldLabel>
        <Input
          id='email'
          name='email'
          type='email'
          defaultValue={state?.values?.email ?? email}
          placeholder='Enter your mail'
        />
        <FieldError errors={state?.fieldErrors?.email || []} />
      </Field>
      <Field>
        <FieldLabel htmlFor='code'>Verification Code</FieldLabel>
        <Input
          id='code'
          name='code'
          type='text'
          placeholder='Enter your code'
        />
        <FieldError errors={state?.fieldErrors?.code || []} />
      </Field>

      <Field>
        <Button type='submit' className='w-full' disabled={isPending}>
          {isPending ? 'Confirming...' : 'Confirm'}
        </Button>
      </Field>
    </form>
  );
}
