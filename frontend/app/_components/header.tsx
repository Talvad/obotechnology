import { ChevronDown, User } from 'lucide-react';

function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-surface-container-high shadow-sm'>
      <div className='h-20 max-w-330 mx-auto px-margin-sm md:px-margin lg:px-margin-lg flex items-center justify-between gap-gutter'>
        <div className='flex items-center gap-space-md shrink-0'>
          {/* <img
              alt='Obo Technology Logo'
              className='h-8 w-auto object-contain'
              src='https://lh3.googleusercontent.com/aida/AEtjO1XG7LU5QTjSlPanA21RMIwLY5HpKQ-Qq5NCg0zXg2SrTLjnEvEE304ik03J15mcnE-Y_3IwQ0zzG-KV3TBgCrPp7d9Mq1IP93osfjb8zU8tW6FNEw_uJncYpw3V7S1kiJN4WTKgMP2tiHhgiVf8f_BEz6-wVP8TAISjD3wKV6fky2dm9ks4vBwX7dRYOLVbL5rMIvobGsKlb3IXUMSiqwyL6_kX-V_XFVpc0wcNlwXKzA'
            /> */}
          <span className='font-headline-sm text-headline-sm text-text-primary tracking-tight font-bold'>
            Obo Technology
          </span>
        </div>
        <nav
          className='hidden xl:flex items-center gap-gutter'
          data-active-classes='bg-surface-container text-text-primary font-title-md rounded shadow-sm'
        >
          <a
            className='font-title-md text-body-md text-text-secondary hover:text-text-primary flex items-center gap-space-xs transition-colors py-space-xs px-space-sm rounded'
            data-path='products-and-services'
            href='#'
          >
            Products &amp; Services
            <ChevronDown className='size-4' />
          </a>
          <a
            className='font-title-md text-body-md text-text-secondary hover:text-text-primary flex items-center gap-space-xs transition-colors py-space-xs px-space-sm rounded'
            data-path='robotics'
            href='#'
          >
            Robotics
            <ChevronDown className='size-4' />
          </a>
          <a
            className='font-title-md text-body-md text-text-secondary hover:text-text-primary flex items-center gap-space-xs transition-colors py-space-xs px-space-sm rounded'
            data-path='curriculum-and-programs'
            href='#'
          >
            Curriculum &amp; Programs
            <ChevronDown className='size-4' />
          </a>
          <a
            className='font-title-md text-body-md text-text-secondary hover:text-text-primary transition-colors py-space-xs px-space-sm rounded'
            data-path='about-us'
            href='#'
          >
            About Us
          </a>
          <a
            className='font-title-md text-body-md text-text-secondary hover:text-text-primary transition-colors py-space-xs px-space-sm rounded'
            data-path='careers'
            href='#'
          >
            Careers
          </a>
        </nav>
        <div className='flex items-center gap-space-md shrink-0'>
          <a
            className='hidden sm:inline-flex items-center justify-center font-title-md text-body-md text-text-secondary hover:text-text-primary hover:bg-surface-container-high px-space-md py-space-sm rounded transition-all'
            data-path='login'
            href='#'
          >
            Portal Login
          </a>
          <a
            className='inline-flex items-center justify-center font-title-md text-body-md bg-primary text-on-primary font-bold px-space-lg py-space-sm rounded shadow-sm hover:brightness-110 active:scale-95 transition-all'
            data-path='request-demo'
            href='#'
          >
            Request Demo
          </a>
          <div className='w-8 h-8 rounded-full bg-surface-container-highest text-primary flex items-center justify-center shrink-0 border border-outline-variant'>
            <User className='size-4.5' />
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };
