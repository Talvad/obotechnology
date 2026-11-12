import { api } from '@/lib/api';
import { requireSession } from '@/lib/session';
import { Me } from '@/lib/types';
import Link from 'next/link';
import { Suspense } from 'react';
import { Button } from '../ui/button';
import { BriefcaseBusiness, GraduationCap, UserCog } from 'lucide-react';

export default function Privateheader() {
  return (
    <Suspense fallback={<LoadingHeader />}>
      <Header />
    </Suspense>
  );
}

const LoadingHeader = () => <section className='h-10 px-20'>Loading</section>;
const Header = async () => {
  const session = await requireSession();
  const me = await api<Me>('/me');
  const displayName = me.ok ? (me.data.name ?? me.data.email) : undefined;
  const isAdmin = session.groups.includes('admins');
  const isEmployee = session.groups.includes('employees');
  const isStudent = session.groups.includes('students');
  return (
    <section className='flex items-center justify-between border-b border-b-gray-200 px-20 py-2'>
      <nav className='flex gap-2'>
        {isAdmin ? (
          <Link href={'/admin/dashboard'}>
            <Button variant='outline' className='px-2!'>
              <UserCog className='size-4' />
            </Button>
          </Link>
        ) : null}
        {isAdmin || isEmployee ? (
          <Link href={'/employee/dashboard'}>
            <Button variant='outline' className='px-2!'>
              <BriefcaseBusiness className='size-4' />
            </Button>
          </Link>
        ) : null}
        {isAdmin || isStudent ? (
          <Link href={'/student/dashboard'}>
            <Button variant='outline' className='px-2!'>
              <GraduationCap className='size-4' />
            </Button>
          </Link>
        ) : null}
      </nav>
      <div>
        <Link
          href={'/user/profile'}
          className='text-gray-500 underline underline-offset-2 text-sm'
        >
          {displayName ?? 'Signed in'}
        </Link>
      </div>
    </section>
  );
};
