import ConfirmForm from '@/components/forms/confirm-form';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import Link from 'next/link';

export default async function ConfirmView({
  searchParams,
}: Pick<PageProps<'/confirm'>, 'searchParams'>) {
  const { email } = await searchParams;
  return (
    <section className='min-w-1/3 py-10'>
      <Card>
        <CardHeader>
          <CardTitle>Confirm your Account</CardTitle>

          <CardDescription>
            {email
              ? `Enter the code we sent to ${email}`
              : 'Enter the code we sent to your email'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ConfirmForm email={email as string} />
        </CardContent>
        <CardFooter>
          <CardDescription className='text-center'>
            Didn't receive code?{' '}
            <Link href={'/signup'} className='underline underline-offset-2'>
              Resend code
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </section>
  );
}
