import {
  Globe,
  MessagesCircle,
  SendHorizonal,
  SquareTerminal,
} from 'lucide-react';
import { Button } from '../ui/button';
import Input from '../ui/input';

function Footer() {
  return (
    <footer className='w-full bg-white text-text-secondary border-t border-surface-container'>
      <div className='max-w-330 mx-auto px-margin-sm md:px-margin lg:px-margin-lg pt-space-3xl pb-space-2xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-lg pb-space-2xl'>
          <div className='space-y-space-md'>
            <div className='flex items-center gap-space-sm'>
              {/* <img
                alt='Obo Technology Logo'
                className='h-8 w-auto object-contain'
                src='https://lh3.googleusercontent.com/aida/AEtjO1XG7LU5QTjSlPanA21RMIwLY5HpKQ-Qq5NCg0zXg2SrTLjnEvEE304ik03J15mcnE-Y_3IwQ0zzG-KV3TBgCrPp7d9Mq1IP93osfjb8zU8tW6FNEw_uJncYpw3V7S1kiJN4WTKgMP2tiHhgiVf8f_BEz6-wVP8TAISjD3wKV6fky2dm9ks4vBwX7dRYOLVbL5rMIvobGsKlb3IXUMSiqwyL6_kX-V_XFVpc0wcNlwXKzA'
              /> */}
              <span className='font-headline-sm text-headline-sm text-text-primary tracking-tight font-bold'>
                Obo Technology
              </span>
            </div>
            <p className='font-body-sm text-body-sm text-text-secondary leading-relaxed'>
              Engineering future-ready educational robotics, precision
              automation kits, and adaptive STEM curriculum architectures for
              institutes, classrooms, and makers globally.
            </p>
            <div className='flex items-center gap-space-sm pt-space-xs'>
              <a
                aria-label='Global Network'
                className='w-9 h-9 rounded bg-surface-container-low border border-surface-container flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-container transition-colors'
                href='#'
              >
                <Globe className='size-5' />
              </a>
              <a
                aria-label='Developer Hub'
                className='w-9 h-9 rounded bg-surface-container-low border border-surface-container flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-container transition-colors'
                href='#'
              >
                <SquareTerminal className='size-5' />
              </a>
              <a
                aria-label='Community Forum'
                className='w-9 h-9 rounded bg-surface-container-low border border-surface-container flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-container transition-colors'
                href='#'
              >
                <MessagesCircle className='size-5' />
              </a>
            </div>
          </div>
          <div className='space-y-space-md'>
            <h3 className='font-label-caps text-label-caps text-text-primary uppercase tracking-wider'>
              Solutions &amp; Platforms
            </h3>
            <ul className='space-y-space-sm font-body-sm text-body-sm'>
              <li>
                <a
                  className='text-text-secondary hover:text-primary transition-colors'
                  href='#'
                >
                  Autonomous Mobile Robotics
                </a>
              </li>
              <li>
                <a
                  className='text-text-secondary hover:text-primary transition-colors'
                  href='#'
                >
                  Kinematic Manipulator Arms
                </a>
              </li>
              <li>
                <a
                  className='text-text-secondary hover:text-primary transition-colors'
                  href='#'
                >
                  Sensor Fusion Core Kits
                </a>
              </li>
              <li>
                <a
                  className='text-text-secondary hover:text-primary transition-colors'
                  href='#'
                >
                  Microcontroller &amp; IoT Modules
                </a>
              </li>
              <li>
                <a
                  className='text-text-secondary hover:text-primary transition-colors'
                  href='#'
                >
                  Enterprise Training Hardware
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-space-md'>
            <h3 className='font-label-caps text-label-caps text-text-primary uppercase tracking-wider'>
              Curriculum &amp; Resources
            </h3>
            <ul className='space-y-space-sm font-body-sm text-body-sm'>
              <li>
                <a
                  className='text-text-secondary hover:text-primary transition-colors'
                  href='#'
                >
                  K-12 Robotic Foundations
                </a>
              </li>
              <li>
                <a
                  className='text-text-secondary hover:text-primary transition-colors'
                  href='#'
                >
                  University Mechatronics Syllabus
                </a>
              </li>
              <li>
                <a
                  className='text-text-secondary hover:text-primary transition-colors'
                  href='#'
                >
                  Teacher Guides &amp; Rubrics
                </a>
              </li>
              <li>
                <a
                  className='text-text-secondary hover:text-primary transition-colors'
                  href='#'
                >
                  Open Documentation &amp; SDK
                </a>
              </li>
              <li>
                <a
                  className='text-text-secondary hover:text-primary transition-colors'
                  href='#'
                >
                  Accreditation Pathways
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-space-md'>
            <h3 className='font-label-caps text-label-caps text-text-primary uppercase tracking-wider'>
              Stay Synchronized
            </h3>
            <p className='font-body-sm text-body-sm text-text-secondary'>
              Receive firmware releases, pedagogical whitepapers, and national
              STEM tournament invites.
            </p>
            <form className='space-y-space-sm'>
              <div className='flex items-center gap-space-xs'>
                <Input placeholder='educator@institution.edu' type='email' />
                <Button type='submit'>
                  <SendHorizonal className='size-5' />
                </Button>
              </div>
              <span className='font-label-caps text-label-caps text-text-tertiary block'>
                Zero spam. Opt-out anytime.
              </span>
            </form>
          </div>
        </div>
        <div className='pt-space-xl flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-text-secondary border-t border-surface-container'>
          <p>© 2026 Obo Technology. All rights reserved.</p>
          <div className='flex items-center gap-gutter'>
            <a className='hover:text-primary transition-colors' href='#'>
              Privacy Policy
            </a>
            <a className='hover:text-primary transition-colors' href='#'>
              Terms of Service
            </a>
            <a className='hover:text-primary transition-colors' href='#'>
              Security &amp; Compliance
            </a>
            <a className='hover:text-primary transition-colors' href='#'>
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
