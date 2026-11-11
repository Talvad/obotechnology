'use client';

import { useActionState } from 'react';
import { Button } from '../ui/button';
import { FormError, Field, FieldLabel, FieldError } from '../ui/field';
import Input from '../ui/input';
import { Password } from '../ui/password';
import { loginAction } from '@/actions/authActions';

function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, undefined);
  return (
    <form action={formAction}>
      <FormError state={state} />
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
        <Button type='submit' className='w-full' disabled={isPending}>
          {isPending ? 'Logging In...' : 'Login'}
        </Button>
      </Field>
    </form>
  );
}

export default LoginForm;
