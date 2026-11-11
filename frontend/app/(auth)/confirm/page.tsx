import { Suspense } from 'react';
import ConfirmView from './confirm-view';

function LoginPage({
  searchParams,
}: Pick<PageProps<'/confirm'>, 'searchParams'>) {
  return (
    <main className='w-full pt-20 bg-surface min-h-screen grid place-items-center'>
      <Suspense fallback={<div>Loading...</div>}>
        <ConfirmView searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

export default LoginPage;
