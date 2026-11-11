'use client';

import { useActionState } from 'react';
import { signIn } from '@/actions/auth';
import { FormState } from '@/actions/type';
import { Button } from '../ui/button';
import { FormError, Field, FieldLabel, FieldError } from '../ui/field';
import Input from '../ui/input';
import { Password } from '../ui/password';
const initialState: FormState = {
  success: false,
};

function LoginForm() {
  const [state, formAction, isPending] = useActionState(signIn, initialState);
  return (
    <form action={formAction}>
      <FormError {...state} />

      <Field>
        <FieldLabel htmlFor='email'>E-mail</FieldLabel>
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='Enter your mail'
        />
        <FieldError errors={state.errors?.email || []} />
      </Field>
      <Field>
        <FieldLabel htmlFor='password'>Password</FieldLabel>
        <Password
          id='password'
          name='password'
          placeholder='Enter you password'
        />
        <FieldError errors={state.errors?.password || []} />
      </Field>

      <Field>
        <Button type='submit' className='w-full' disabled={isPending}>
          {isPending ? 'Logging In...' : 'Login'}
        </Button>
      </Field>
    </form>
  );
}

export default LoginForm;
