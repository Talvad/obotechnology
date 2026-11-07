'use client';
import { Button } from '../_components/ui/button';
import {
  Field,
  FieldError,
  FieldLabel,
  FormError,
} from '../_components/ui/field';
import Input from '../_components/ui/input';
import { Password } from '../_components/ui/password';
import { useActionState } from 'react';
import { signUp } from '@/actions/auth';
import { FormState } from '@/actions/type';
const initialState: FormState = {
  success: false,
};
function SignupForm() {
  const [state, formAction, isPending] = useActionState(signUp, initialState);
  return (
    <form action={formAction}>
      <FormError {...state} />
      <Field>
        <FieldLabel htmlFor='name'>Name</FieldLabel>
        <Input
          id='name'
          name='name'
          type='text'
          placeholder='Enter your name'
        />
        <FieldError errors={state.errors?.name || []} />
      </Field>
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
        <FieldLabel htmlFor='confirmPassword'>Confirm Password</FieldLabel>
        <Password
          id='confirmPassword'
          name='confirmPassword'
          placeholder='Confirm your password'
        />
        <FieldError errors={state.errors?.confirmPassword || []} />
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
