import Privateheader from '@/components/shared/private-header';

export default function PrivateLayout({ children }: LayoutProps<'/'>) {
  return (
    <main className='w-full pt-20 bg-[#f8fafc] min-h-screen'>
      <Privateheader />
      <section className='px-20'>{children}</section>
    </main>
  );
}
