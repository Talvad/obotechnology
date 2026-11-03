import Link from 'next/link';
import { NavBar } from './navbar/nav-bar';

function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-surface-container-high shadow-sm'>
      <div className='h-20 max-w-330 mx-auto px-margin-sm md:px-margin lg:px-margin-lg flex items-center justify-between gap-gutter'>
        <Link href={'/'}>
          <span className='font-headline-sm text-headline-sm text-text-primary tracking-tight font-bold'>
            Obo Technology
          </span>
        </Link>
        <NavBar />

        <div className='flex items-center gap-space-md shrink-0'>
          {/* <a
            className='hidden sm:inline-flex items-center justify-center font-title-md text-body-md text-text-secondary hover:text-text-primary hover:bg-surface-container-high px-space-md py-space-sm rounded transition-all'
            data-path='login'
            href='#'
          >
            Portal Login
          </a> */}
          <Link
            className='inline-flex items-center justify-center font-title-md text-body-md bg-primary text-on-primary font-bold px-space-lg py-space-sm rounded shadow-sm hover:brightness-110 active:scale-95 transition-all'
            href='/request-demo'
          >
            Request Demo
          </Link>
          {/* <div className='w-8 h-8 rounded-full bg-surface-container-highest text-primary flex items-center justify-center shrink-0 border border-outline-variant'>
            <User className='size-4.5' />
          </div> */}
        </div>
      </div>
    </header>
  );
}

export { Header };
