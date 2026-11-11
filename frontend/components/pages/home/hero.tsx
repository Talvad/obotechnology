import {
  Award,
  BluetoothSearching,
  Boxes,
  CalendarDays,
  MoveDown,
  RobotArm,
  SquareTerminal,
  Verified,
} from 'lucide-react';

function HomeHero() {
  return (
    <div className='relative w-full overflow-hidden'>
      <div className='absolute -top-40 left-1/4 w-155 h-155 bg-blue-100/60 rounded-full blur-[140px] pointer-events-none -z-10'></div>
      <div className='absolute top-128 right-10 w-135 h-135 bg-orange-100/60 rounded-full blur-[150px] pointer-events-none -z-10'></div>
      <div className='absolute top-352 left-12 w-120 h-120 bg-amber-50/70 rounded-full blur-[130px] pointer-events-none -z-10'></div>
      {/* <!-- 1. Hero Section --> */}
      <section className='max-w-330 mx-auto px-margin-sm md:px-margin lg:px-margin-lg pt-space-2xl pb-space-3xl'>
        <div className='flex flex-col items-center text-center max-w-4xl mx-auto space-y-space-lg'>
          {/* <!-- Funding & Standard Micro Badges --> */}
          <div className='flex flex-wrap items-center justify-center gap-space-sm'>
            <div className='inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-white text-secondary border border-blue-200 shadow-sm'>
              <Verified className='size-4 text-secondary' />

              <span className='font-label-ui text-label-ui uppercase tracking-wider font-semibold'>
                Perkins V &amp; Title I Eligible
              </span>
            </div>
            <div className='inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-white text-amber-700 border border-amber-200 shadow-sm'>
              <Boxes className='size-4 text-amber-600' />

              <span className='font-label-ui text-label-ui uppercase tracking-wider font-semibold'>
                NGSS &amp; CSTA Aligned
              </span>
            </div>
            <div className='inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-white text-primary border border-orange-200 shadow-sm'>
              <BluetoothSearching className='size-4 text-primary' />

              <span className='font-label-ui text-label-ui uppercase tracking-wider font-semibold'>
                Zero-Install WebBluetooth
              </span>
            </div>
          </div>
          {/* <!-- Hero Headline & Core Pitch --> */}
          <div className='space-y-space-md'>
            <h1 className='font-display-lg text-display-lg text-slate-900 tracking-tight'>
              The Complete Educational Robotics &amp;{' '}
              <span className='text-transparent bg-clip-text bg-linear-to-r from-primary via-orange-600 to-secondary'>
                Computational Thinking
              </span>{' '}
              Ecosystem
            </h1>
            <p className='font-body-lg text-body-lg text-slate-600 max-w-2xl mx-auto leading-relaxed'>
              Bridging precision mechatronics hardware, browser-native telemetry
              environments, and standards-certified educator professional
              development into a unified institutional platform.
            </p>
          </div>
          {/* <!-- Primary CTA Deck --> */}
          <div className='flex flex-wrap items-center justify-center gap-space-md pt-space-xs'>
            <a
              className='inline-flex items-center justify-center gap-space-xs font-label-ui text-title-md bg-primary text-white font-bold px-space-xl py-space-md rounded-lg shadow-md hover:brightness-110 active:scale-95 transition-all'
              href='#interactive-selector'
            >
              <span>Explore The Stack</span>
              <MoveDown className='size-5' />
            </a>
            <a
              className='inline-flex items-center justify-center gap-space-xs font-label-ui text-title-md bg-white text-slate-800 hover:bg-slate-50 border border-slate-300 px-space-xl py-space-md rounded-lg shadow-sm transition-all'
              href='#consultation-booking'
            >
              <CalendarDays className='size-5 text-secondary' />
              <span>Request Institutional Trial</span>
            </a>
          </div>
          {/* <!-- Hero Live Architecture Teaser Bento --> */}
          <div className='w-full pt-space-xl'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-gutter rounded-xl bg-white border border-slate-200 p-space-lg text-left shadow-md'>
              <div className='flex items-start gap-space-md p-space-md rounded-lg bg-slate-50 border border-slate-100'>
                <div className='w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0 text-primary'>
                  <RobotArm className='size-6' />
                </div>
                <div className='space-y-1'>
                  <p className='font-title-md text-title-md text-slate-900 font-bold'>
                    100% Modular Hardware
                  </p>
                  <p className='font-body-sm text-body-sm text-slate-600'>
                    Hot-swappable magnetic actuators, CAN-bus microcontrollers,
                    and impact-grade polycarbonates.
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-space-md p-space-md rounded-lg bg-slate-50 border border-slate-100'>
                <div className='w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 text-secondary'>
                  <SquareTerminal className='size-6' />
                </div>
                <div className='space-y-1'>
                  <p className='font-title-md text-title-md text-slate-900 font-bold'>
                    Cloud Studio &amp; Telemetry
                  </p>
                  <p className='font-body-sm text-body-sm text-slate-600'>
                    WebSerial compilation, live IMU graph visualizers, and
                    Chromebook zero-setup execution.
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-space-md p-space-md rounded-lg bg-slate-50 border border-slate-100'>
                <div className='w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 text-amber-700'>
                  <Award className='size-6' />
                </div>
                <div className='space-y-1'>
                  <p className='font-title-md text-title-md text-slate-900 font-bold'>
                    Tier-1 PD Accreditation
                  </p>
                  <p className='font-body-sm text-body-sm text-slate-600'>
                    State-approved CEU contact hours, certified lesson
                    masteries, and district mentoring retainers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeHero;
