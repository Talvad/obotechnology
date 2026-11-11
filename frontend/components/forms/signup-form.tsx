'use client';

import { useActionState } from 'react';
import { Button } from '../ui/button';
import { FormError, Field, FieldLabel, FieldError } from '../ui/field';
import Input from '../ui/input';
import { Password } from '../ui/password';
import { signupAction } from '@/actions/authActions';

function SignupForm() {
  const [state, formAction, isPending] = useActionState(
    signupAction,
    undefined,
  );
  return (
    <form action={formAction}>
      <FormError state={state} />
      <Field>
        <FieldLabel htmlFor='name'>Name</FieldLabel>
        <Input
          id='name'
          name='name'
          type='text'
          defaultValue={state?.values?.name}
          placeholder='Enter your name'
        />
        <FieldError errors={state?.fieldErrors?.name || []} />
      </Field>
      <Field>
        <FieldLabel htmlFor='email'>E-mail</FieldLabel>
        <Input
          id='email'
          name='email'
          type='email'
          defaultValue={state?.values?.email}
          placeholder='Enter your mail'
        />
        <FieldError errors={state?.fieldErrors?.email || []} />
      </Field>
      <Field>
        <FieldLabel htmlFor='password'>Password</FieldLabel>
        <Password
          id='password'
          name='password'
          placeholder='Enter you password'
        />
        <FieldError errors={state?.fieldErrors?.password || []} />
      </Field>
      <Field>
        <FieldLabel htmlFor='confirmPassword'>Confirm Password</FieldLabel>
        <Password
          id='confirmPassword'
          name='confirmPassword'
          placeholder='Confirm your password'
        />
        <FieldError errors={state?.fieldErrors?.confirmPassword || []} />
      </Field>
      <Field>
        <Button type='submit' className='w-full' disabled={isPending}>
          {isPending ? 'Creating Account...' : 'Create Account'}
        </Button>
      </Field>
    </form>
  );
}

export { SignupForm };
