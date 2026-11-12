import ApiError from '@/components/ui/api-error';
import { api } from '@/lib/api';
import { Me } from '@/lib/types';
import { Suspense } from 'react';
import UserAvatar from './user-avatar';

export default function UserInfo() {
  return (
    <Suspense fallback={<UserDataSkeleton />}>
      <UserData />
    </Suspense>
  );
}

function UserDataSkeleton() {
  return <section>Loading...</section>;
}
async function UserData() {
  const me = await api<Me>('/me');
  if (!me.ok) return <ApiError result={me} />;
  const name = me.data.name ?? me.data.email ?? '';
  return (
    <section className='py-10'>
      <h2 className='inline-block border-b mb-5'>Profile Information</h2>
      <div>
        <UserAvatar url={me.data.avatarUrl} name={name} />
        <div>
          <h3 className='font-semibold text-sm text-gray-600'>
            {me.data.name ?? '-'}
          </h3>
          <p className='font-light text-sm text-gray-600'>{me.data.email}</p>
        </div>
      </div>
    </section>
  );
}
