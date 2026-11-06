import Link from 'next/link';
import { Button } from '../_components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../_components/ui/card';
import { Field, FieldLabel } from '../_components/ui/field';
import Input from '../_components/ui/input';
import { Password } from '../_components/ui/password';

function SignupView() {
  return (
    <section className='min-w-1/3'>
      <Card>
        <CardHeader>
          <CardTitle>Create New Account</CardTitle>
          <CardDescription>
            Enter the following information to create your new account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <Field>
              <FieldLabel htmlFor='name'>Name</FieldLabel>
              <Input
                id='name'
                name='name'
                type='text'
                placeholder='Enter your name'
              />
            </Field>
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
              <FieldLabel htmlFor='confirmPassword'>
                Confirm Password
              </FieldLabel>
              <Password
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Confirm your password'
              />
            </Field>
            <Field>
              <Button type='submit' className='w-full'>
                Create Account
              </Button>
            </Field>
          </form>
        </CardContent>
        <CardFooter>
          <CardDescription className='text-center'>
            Already have an account?{' '}
            <Link href={'/login'} className='underline underline-offset-2'>
              Login to your account
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </section>
  );
}

export { SignupView };
