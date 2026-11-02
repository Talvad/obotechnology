import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Cog,
  GraduationCap,
  Zap,
} from 'lucide-react';

function Hero() {
  return (
    <section className='relative w-full overflow-hidden pb-space-3xl pt-space-xl'>
      {/* {/* <!-- Atmospheric Ambient Glows & Grid Pattern --> */}
      <div className='pointer-events-none absolute -top-32 -left-20 h-145 w-145 rounded-full bg-secondary-fixed/40 blur-[130px]'></div>
      <div className='pointer-events-none absolute top-1/4 right-0 h-160 w-160 rounded-full bg-primary-fixed/50 blur-[140px]'></div>
      <div className='pointer-events-none absolute bottom-0 left-1/3 h-105 w-105 rounded-full bg-tertiary-fixed/40 blur-[110px]'></div>
      <div className='max-w-330 mx-auto px-margin-sm md:px-margin lg:px-margin-lg'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center'>
          {/* {/* <!-- Left Column: Copy & CTAs --> */}
          <div className='lg:col-span-7 space-y-space-lg relative z-10'>
            {/* {/* <!-- Eyebrow Pill --> */}
            <div className='inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-white border border-outline-variant shadow-sm'>
              <span className='w-2 h-2 rounded-full bg-amber-400 animate-ping'></span>
              <span className='w-2 h-2 rounded-full bg-amber-400 -ml-3'></span>
              <span className='font-label-caps text-label-caps text-primary tracking-wider uppercase'>
                Next-Gen STEAM &amp; Computational Robotics Education
              </span>
            </div>
            {/* {/* <!-- Bold Dynamic Headline --> */}
            <h1 className='font-headline-hero text-headline-hero text-text-primary tracking-tight leading-[1.08]'>
              Empowering the{' '}
              <span className='bg-linear-to-r from-primary via-primary-container to-amber-300 bg-clip-text text-transparent'>
                Next Generation
              </span>{' '}
              of Thinkers &amp; Creators.
            </h1>
            {/* <!-- Verbatim Mission Quote --> */}
            <p className='font-body-lg text-body-lg text-text-secondary max-w-2xl leading-relaxed'>
              <span className='text-text-primary font-semibold'>
                Obo Robotics
              </span>
              focused to educate and provide access to the next generation
              children to enhance thinking and creativity mindset.
            </p>
            {/* <!-- Primary & Secondary Actions --> */}
            <div className='flex flex-wrap items-center gap-space-md pt-space-xs'>
              <a
                className='inline-flex items-center justify-center gap-space-xs px-space-xl py-3.5 rounded bg-primary text-on-primary font-headline-sm text-body-lg font-bold shadow-md hover:brightness-110 active:scale-95 transition-all'
                href='#explore'
              >
                Learn More
                <ArrowRight className='size-4' />
              </a>
              <a
                className='inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded bg-white border border-surface-container-high text-secondary hover:text-text-primary hover:bg-surface-container-low font-headline-sm text-body-lg font-semibold shadow-sm transition-all'
                href='#kits'
              >
                <Bot className='size-5' />
                Explore Robotics Kits
              </a>
            </div>
            {/* <!-- Quick Proof Point Micro-Bar --> */}
            <div className='pt-space-md flex flex-wrap items-center gap-x-space-xl gap-y-space-sm font-title-md text-body-sm text-text-secondary'>
              <div className='flex items-center gap-2'>
                <BadgeCheck className='text-amber-800 size-5' />
                <span>STEAM Accredited Curricula</span>
              </div>
              <div className='flex items-center gap-2'>
                <GraduationCap className='size-5 text-secondary' />

                <span>350+ Partner Academies</span>
              </div>
              <div className='flex items-center gap-2'>
                <Zap className='size-5 text-orange-500' />
                <span>Hardware + Code Sync</span>
              </div>
            </div>
          </div>
          {/* <!-- Right Column: Visual Showcase & Orbital Composition Inspired by Brand Motif --> */}
          <div className='lg:col-span-5 relative'>
            {/* <!-- Orbital Swirl Graphic (CSS/SVG) Echoing Original Logo Geometry --> */}
            <div className='relative mx-auto max-w-120 lg:max-w-none'>
              {/* <!-- Backdrop Radial Halo --> */}
              <div className='absolute -inset-4 rounded-3xl bg-linear-to-tr from-primary-fixed/60 via-secondary-fixed/40 to-tertiary-fixed/30 blur-2xl'></div>
              {/* <!-- Elevated Card Frame --> */}
              <div className='relative rounded-xl bg-white border border-surface-container-high p-space-md shadow-xl overflow-hidden'>
                {/* <!-- Orbital Ring Silhouette Overlay --> */}
                <svg
                  className='absolute -right-16 -top-16 w-72 h-72 text-primary/10 pointer-events-none'
                  fill='none'
                  // viewbox="0 0 200 200"
                >
                  <circle
                    cx='100'
                    cy='100'
                    r='78'
                    stroke='currentColor'
                    strokeDasharray='6 6'
                    strokeWidth='2'
                  ></circle>
                  <ellipse
                    cx='100'
                    cy='100'
                    rx='90'
                    ry='34'
                    stroke='currentColor'
                    stroke-width='3'
                    transform='rotate(-28 100 100)'
                  ></ellipse>
                  <circle cx='152' cy='72' fill='#a33900' r='5'></circle>
                </svg>
                {/* <!-- Image with Dynamic Asymmetric Shape --> */}
                <div className='relative w-full h-90 rounded-lg overflow-hidden shadow-inner group'>
                  <img
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                    data-alt='Excited young elementary and middle school students collaborating around an orange modular robotics chassis, high-fiving their teacher in a high-tech modern classroom bathed in dark obsidian surfaces and neon blue ambient LED lighting. Precision mechatronic components, glowing sensors, and laptops with code editors on the wooden desks.'
                    src='https://lh3.googleusercontent.com/aida-public/AB6AXuAy-76nvJChOFfdfw7pbIIwSiv6qAs3I6QyH4FBHgHQnrdGqVyeVhppsgr_XwVcZ-AE8Oei5q9sY7aFIcdoaiItYZ3FqfTOOUbH7ntvQO18s4ivnR5FZ4SbUk5MVjD5s_qWso19qwlH93UZCdFPm05PoMXmdBkqcUbukWVCW61kB2Tkb4hY1YYSSYT28Zw-lyQPRUWi-lau5DyFxsaIt9Tf7PVZAIbSjweEfb7oechh'
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent'></div>
                  {/* <!-- Floating In-Image Badge --> */}
                  <div className='absolute top-space-md left-space-md px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm flex items-center gap-2'>
                    <span className='w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse'></span>
                    <span className='font-label-caps text-label-caps text-text-primary uppercase tracking-wide'>
                      Live Firmware v3.4 Active
                    </span>
                  </div>
                  <div className='absolute bottom-space-md left-space-md right-space-md flex items-end justify-between'>
                    <div>
                      <span className='font-label-caps text-label-caps text-primary-fixed uppercase tracking-wider block'>
                        Signature Kit
                      </span>
                      <h3 className='font-headline-sm text-headline-sm text-white'>
                        Obo Spark Core-X
                      </h3>
                    </div>
                    <span className='px-space-sm py-1 rounded bg-secondary text-on-secondary font-title-md text-body-sm font-bold'>
                      Age 8-14
                    </span>
                  </div>
                </div>
                {/* <!-- Live Telemetry / Mini Analytics Row Inside Glass Panel --> */}
                <div className='mt-space-md grid grid-cols-3 gap-space-sm text-center'>
                  <div className='p-space-sm rounded bg-surface-container-low border border-surface-container'>
                    <div className='font-headline-md text-headline-md text-text-primary font-extrabold'>
                      50k+
                    </div>
                    <div className='font-label-caps text-label-caps text-text-secondary uppercase'>
                      Students
                    </div>
                  </div>
                  <div className='p-space-sm rounded bg-surface-container-low border border-surface-container'>
                    <div className='font-headline-md text-headline-md text-amber-400 font-extrabold'>
                      98%
                    </div>
                    <div className='font-label-caps text-label-caps text-text-secondary uppercase'>
                      Retention
                    </div>
                  </div>
                  <div className='p-space-sm rounded bg-surface-container-low border border-surface-container'>
                    <div className='font-headline-md text-headline-md text-orange-500 font-extrabold'>
                      350+
                    </div>
                    <div className='font-label-caps text-label-caps text-text-secondary uppercase'>
                      Districts
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Overlapping Floating Micro-Widget --> */}
              <div className='-mt-6 -ml-6 relative z-20 max-w-65 p-space-sm rounded-lg bg-white border border-surface-container-high shadow-lg flex items-center gap-3'>
                <div className='w-10 h-10 rounded bg-primary-fixed flex items-center justify-center shrink-0'>
                  <Cog className='text-primary size-5' />
                </div>
                <div className='min-w-0'>
                  <div className='font-title-md text-body-sm text-text-primary font-bold truncate'>
                    Algorithmic Mindset
                  </div>
                  <div className='font-body-sm text-body-sm text-text-secondary text-[12px] truncate'>
                    Kinematic logic enabled
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
