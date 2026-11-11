import { Button } from '@/components/ui/button';
import { dashboardPathFor } from '@/lib/roles';
import { getSession } from '@/lib/session';
import Link from 'next/link';
import { Suspense } from 'react';

export default function LoginBtn() {
  return (
    <Suspense fallback={<Login />}>
      <AsyncLogin />
    </Suspense>
  );
}

const Login = () => (
  <Link href='/login'>
    <Button>Login</Button>
  </Link>
);

const AsyncLogin = async () => {
  const session = await getSession();
  return (
    <>
      {session ? (
        <Link href={dashboardPathFor(session.groups)}>
          <Button>Dashborad</Button>
        </Link>
      ) : (
        <Login />
      )}
    </>
  );
};
