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

function LoginView() {
  return (
    <section className='min-w-1/3'>
      <Card>
        <CardHeader>
          <CardTitle>Login to your Account</CardTitle>
          <CardDescription>
            Enter the following information to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
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
              <Button type='submit' className='w-full'>
                Login
              </Button>
            </Field>
          </form>
        </CardContent>
        <CardFooter>
          <CardDescription className='text-center'>
            Don't have an account?{' '}
            <Link href={'/signup'} className='underline underline-offset-2'>
              Create new account
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </section>
  );
}

export default LoginView;
