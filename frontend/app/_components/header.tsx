import Link from 'next/link';
import { NavBar } from './navbar/nav-bar';
import MobileNavBar from './navbar/mobile-nav-bar';

function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-surface-container-high shadow-sm'>
      <div className='h-20 max-w-330 mx-auto px-4 sm:px-8 flex items-center justify-between gap-gutter'>
        <Link href={'/'}>
          <span className='font-headline-sm text-headline-sm text-text-primary tracking-tight font-bold'>
            Obo Technology
          </span>
        </Link>
        <NavBar />

        <div className='flex items-center gap-4 shrink-0'>
          <Link
            className='inline-flex items-center justify-center font-title-md text-body-md bg-primary text-on-primary font-bold px-space-lg py-space-sm rounded shadow-sm hover:brightness-110 active:scale-95 transition-all'
            href='/login'
          >
            Login
          </Link>
          <MobileNavBar />
        </div>
      </div>
    </header>
  );
}

export { Header };
