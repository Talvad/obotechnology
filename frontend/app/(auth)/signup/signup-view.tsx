import Link from 'next/link';
import { SignupForm } from '@/components/forms/signup-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function SignupView() {
  return (
    <section className='min-w-1/3 py-10'>
      <Card>
        <CardHeader>
          <CardTitle>Create New Account</CardTitle>
          <CardDescription>
            Enter the following information to create your new account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
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
