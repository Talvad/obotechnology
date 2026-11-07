import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../_components/ui/card';
import LoginForm from './login-form';

function LoginView() {
  return (
    <section className='min-w-1/3 py-10'>
      <Card>
        <CardHeader>
          <CardTitle>Login to your Account</CardTitle>
          <CardDescription>
            Enter the following information to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
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
