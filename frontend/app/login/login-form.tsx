'use client';
import { Button } from '../_components/ui/button';
import { Field, FieldLabel } from '../_components/ui/field';
import Input from '../_components/ui/input';
import { Password } from '../_components/ui/password';

import { useActionState } from 'react';
import { signIn } from '@/actions/auth';
import { FormState } from '@/actions/type';
const initialState: FormState = {
  success: false,
};

function LoginForm() {
  const [state, formAction, isPending] = useActionState(signIn, initialState);
  return (
    <form action={formAction}>
      {state.message && (
        <Field>
          <p
            className={`border font-medium p-2 rounded-md text-center text-sm
            ${
              state.success
                ? 'text-green-600 border-green-600 bg-green-600/10'
                : 'text-red-600 border-red-600 bg-red-600/10'
            }
          `}
          >
            {state.message}
          </p>
        </Field>
      )}
      <Field>
        <FieldLabel htmlFor='email'>E-mail</FieldLabel>
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='Enter your mail'
        />
      </Field>
      <Field>
        <FieldLabel htmlFor='password'>Password</FieldLabel>
        <Password
          id='password'
          name='password'
          placeholder='Enter you password'
        />
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
