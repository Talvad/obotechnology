import {
  ArrowDown,
  BookOpenText,
  BriefcaseBusiness,
  BuildingComplex,
  CheckCheck,
  CirclePlay,
  Clock,
  Cog,
  Cpu,
  Earth,
  Flame,
  GraduationCap,
  Handshake,
  Heart,
  Infinity,
  MapPin,
  Quote,
  RobotArm,
  SlidersHorizontal,
  UserGroup,
  Verified,
} from 'lucide-react';
import Image from 'next/image';

const Careerspage = () => {
  return (
    <main className='w-full pt-20 bg-[#f8fafc] min-h-screen'>
      <div className='flex flex-col w-full'>
        {/*  <!-- Top Atmospheric Hero Section --> */}
        <section className='relative w-full overflow-hidden py-space-3xl px-margin-sm md:px-margin lg:px-margin-lg bg-white border-b border-slate-200'>
          {/* <!-- Ambient Backdrop Highlights --> */}
          <div className='absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-orange-100/60 blur-[120px] pointer-events-none'></div>
          <div className='absolute top-1/3 -right-20 w-120 h-120 rounded-full bg-blue-100/60 blur-[130px] pointer-events-none'></div>
          <div className='max-w-330 mx-auto relative z-10 flex flex-col gap-space-2xl'>
            {/* <!-- Eyebrow & Badging --> */}
            <div className='flex flex-wrap items-center gap-space-sm'>
              <span className='inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-orange-50 border border-orange-200 text-orange-700 font-label-caps text-xs tracking-wider uppercase font-semibold'>
                <span className='w-2 h-2 rounded-full bg-orange-600 animate-pulse'></span>
                Careers at Obo Technology
              </span>
              <span className='hidden sm:inline-flex text-slate-300 font-label-caps text-xs'>
                /
              </span>
              <span className='text-slate-500 font-label-caps text-xs tracking-widest uppercase'>
                Physical Computing • Robotics • Pedagogy
              </span>
            </div>
            {/* <!-- Hero Main Heading Layout --> */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-end'>
              <div className='lg:col-span-8 flex flex-col gap-space-md'>
                <h1 className='font-headline-hero text-4xl sm:text-5xl lg:text-[54px] lg:leading-15.5 text-slate-900 tracking-tight font-extrabold max-w-4xl'>
                  Build the future of{' '}
                  <span className='text-transparent bg-clip-text bg-linear-to-r from-orange-600 via-amber-600 to-blue-600'>
                    physical computing
                  </span>{' '}
                  and robotics education.
                </h1>
                <p className='font-body-lg text-lg text-slate-600 max-w-2xl leading-relaxed'>
                  Join our mission to empower the next generation of thinkers,
                  coders, and kinetic creators. We bridge industrial
                  mechatronics, tactile curriculum, and edge software to spark
                  lifelong discovery across global classrooms.
                </p>
              </div>
              {/* <!-- Quick Jump Button Box --> */}
              <div className='lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm'>
                <a
                  className='inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md rounded-lg bg-orange-600 text-white font-label-lg font-bold shadow-sm hover:bg-orange-500 active:scale-95 transition-all'
                  href='#open-positions'
                >
                  <span>Explore 6 Open Roles</span>
                  <ArrowDown className='size-5' />
                </a>
                <a
                  className='inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md rounded-lg bg-slate-100 text-slate-800 border border-slate-200 font-label-lg font-semibold hover:bg-slate-200 transition-all'
                  href='#life-at-obo'
                >
                  <span>Explore Life at Obo</span>
                  <CirclePlay className='size-5' />
                </a>
              </div>
            </div>
            {/* <!-- Impact Telemetry Metrics Strip --> */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter pt-space-xl'>
              <div className='p-space-lg rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between'>
                <div className='flex items-center justify-between text-slate-500'>
                  <span className='font-label-caps text-xs uppercase tracking-wider font-semibold'>
                    National Reach
                  </span>
                  <BuildingComplex className='size-5 text-blue-600' />
                </div>
                <div className='mt-space-md'>
                  <span className='font-headline-hero text-4xl lg:text-[44px] font-bold text-slate-900'>
                    350+
                  </span>
                  <p className='font-body-sm text-sm text-slate-600 mt-space-xs'>
                    Partner public districts &amp; technical academies
                  </p>
                </div>
              </div>
              <div className='p-space-lg rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between'>
                <div className='flex items-center justify-between text-slate-500'>
                  <span className='font-label-caps text-xs uppercase tracking-wider font-semibold'>
                    Student Engagement
                  </span>
                  <UserGroup className='size-5 text-orange-600' />
                </div>
                <div className='mt-space-md'>
                  <span className='font-headline-hero text-4xl lg:text-[44px] font-bold text-slate-900'>
                    50,000+
                  </span>
                  <p className='font-body-sm text-sm text-slate-600 mt-space-xs'>
                    Budding engineers learning robotics weekly
                  </p>
                </div>
              </div>
              <div className='p-space-lg rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between'>
                <div className='flex items-center justify-between text-slate-500'>
                  <span className='font-label-caps text-xs uppercase tracking-wider font-semibold'>
                    Mission Commitment
                  </span>
                  <Handshake className='size-5 text-amber-600' />
                </div>
                <div className='mt-space-md'>
                  <span className='font-headline-hero text-4xl lg:text-[44px] font-bold text-slate-900'>
                    100%
                  </span>
                  <p className='font-body-sm text-sm text-slate-600 mt-space-xs'>
                    Dedicated team commitment to Title-I STEM equity
                  </p>
                </div>
              </div>
              <div className='p-space-lg rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between'>
                <div className='flex items-center justify-between text-slate-500'>
                  <span className='font-label-caps text-xs uppercase tracking-wider font-semibold'>
                    Hardware Lab Stipend
                  </span>
                  <RobotArm className='size-5 text-orange-600' />
                </div>
                <div className='mt-space-md'>
                  <span className='font-headline-hero text-4xl lg:text-[44px] font-bold text-slate-900'>
                    $3,500
                  </span>
                  <p className='font-body-sm text-sm text-slate-600 mt-space-xs'>
                    Personal home lab gear budget upon onboarding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Core Perks & Engineering Culture Grid --> */}
        <section className='w-full py-space-3xl px-margin-sm md:px-margin lg:px-margin-lg bg-[#f8fafc] border-b border-slate-200 relative'>
          <div className='max-w-330 mx-auto flex flex-col gap-space-2xl'>
            {/* <!-- Section Header --> */}
            <div className='flex flex-col md:flex-row md:items-end justify-between gap-space-md'>
              <div className='max-w-2xl'>
                <span className='font-label-caps text-xs text-orange-700 uppercase tracking-widest font-bold'>
                  Why Work at Obo
                </span>
                <h2 className='font-headline-lg text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight mt-space-xs'>
                  Where tangible hardware meets radical pedagogical optimism.
                </h2>
              </div>
              <p className='font-body-md text-slate-600 max-w-md'>
                We combine the rapid execution of a Silicon Valley deep-tech
                studio with the empathetic pacing and care of dedicated
                educational reformers.
              </p>
            </div>
            {/* <!-- Bento-Style Value Cards --> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter'>
              {/* <!-- Value 1: Purpose-Driven Impact --> */}
              <div className='p-space-xl rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between'>
                <div className='w-12 h-12 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-space-lg'>
                  <GraduationCap className='size-4' />
                </div>
                <div className='flex flex-col gap-space-sm'>
                  <h3 className='font-headline-sm text-xl text-slate-900 font-bold'>
                    Purpose-Driven Impact
                  </h3>
                  <p className='font-body-md text-slate-600 leading-relaxed'>
                    Every pull request, injection molding iteration, and lesson
                    plan directly reaches classrooms. You see your work ignite
                    lightbulb moments in students who never imagined themselves
                    building robots.
                  </p>
                </div>
                <div className='mt-space-lg pt-space-md border-t border-slate-100 text-slate-500 font-label-caps text-xs uppercase tracking-wider flex items-center gap-space-xs font-semibold'>
                  <span>Direct Classroom Field Tests</span>
                  <CheckCheck className='size-4 text-emerald-600' />
                </div>
              </div>
              {/* <!-- Value 2: Hardware + Software --> */}
              <div className='p-space-xl rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between'>
                <div className='w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-space-lg'>
                  <Cpu className='size-7' />
                </div>
                <div className='flex flex-col gap-space-sm'>
                  <h3 className='font-headline-sm text-xl text-slate-900 font-bold'>
                    Cutting-Edge Hybrid Stack
                  </h3>
                  <p className='font-body-md text-slate-600 leading-relaxed'>
                    We hack across physical and digital bounds: ESP32-S3 boards,
                    low-latency WebBluetooth protocol stacks, real-time
                    kinematics simulators, and interactive browser compiler
                    toolchains.
                  </p>
                </div>
                <div className='mt-space-lg pt-space-md border-t border-slate-100 text-slate-500 font-label-caps text-xs uppercase tracking-wider flex items-center gap-space-xs font-semibold'>
                  <span>ESP32 • ROS2 • WebGL • Python</span>
                  <SlidersHorizontal className='size-4 text-blue-600' />
                </div>
              </div>
              {/* <!-- Value 3: Lab Stipend --> */}
              <div className='p-space-xl rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between'>
                <div className='w-12 h-12 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-space-lg'>
                  <RobotArm className='size-7' />
                </div>
                <div className='flex flex-col gap-space-sm'>
                  <h3 className='font-headline-sm text-xl text-slate-900 font-bold'>
                    Generous Lab &amp; Gear Stipend
                  </h3>
                  <p className='font-body-md text-slate-600 leading-relaxed'>
                    Every hire receives a high-speed Voron or Bambu 3D printer,
                    complete soldering station, full sensor component kit, and
                    unlimited filament so you can fabricate ideas freely from
                    home.
                  </p>
                </div>
                <div className='mt-space-lg pt-space-md border-t border-slate-100 text-slate-500 font-label-caps text-xs uppercase tracking-wider flex items-center gap-space-xs font-semibold'>
                  <span>$3,500 Setup + Annual Refills</span>
                  <Flame className='size-4 text-amber-600' />
                </div>
              </div>
              {/* <!-- Value 4: Flexible & Hybrid Culture --> */}
              <div className='p-space-xl rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between'>
                <div className='w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 mb-space-lg'>
                  <Earth className='size-7' />
                </div>
                <div className='flex flex-col gap-space-sm'>
                  <h3 className='font-headline-sm text-xl text-slate-900 font-bold'>
                    Async, Distributed First
                  </h3>
                  <p className='font-body-md text-slate-600 leading-relaxed'>
                    We value clarity of thought and documentation over nonstop
                    calendar sprawl. Enjoy flexible hours, core overlap
                    collaboration blocks, and zero penalty for deep
                    uninterrupted maker time.
                  </p>
                </div>
                <div className='mt-space-lg pt-space-md border-t border-slate-100 text-slate-500 font-label-caps text-xs uppercase tracking-wider flex items-center gap-space-xs font-semibold'>
                  <span>Remote-First with Regional Hubs</span>
                  <Clock className='size-4 text-slate-600' />
                </div>
              </div>
              {/* <!-- Value 5: Health & Wellness --> */}
              <div className='p-space-xl rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between'>
                <div className='w-12 h-12 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-space-lg'>
                  <Heart className='size-7' />
                </div>
                <div className='flex flex-col gap-space-sm'>
                  <h3 className='font-headline-sm text-xl text-slate-900 font-bold'>
                    Comprehensive Wellness &amp; Equity
                  </h3>
                  <p className='font-body-md text-slate-600 leading-relaxed'>
                    100% premium health coverage (Medical, Dental, Vision) for
                    you and dependents. Meaningful equity packages, 401(k)
                    matching, and parental leaves designed to support
                    sustainable life phases.
                  </p>
                </div>
                <div className='mt-space-lg pt-space-md border-t border-slate-100 text-slate-500 font-label-caps text-xs uppercase tracking-wider flex items-center gap-space-xs font-semibold'>
                  <span>Health • Equity • 401(k) Match</span>
                  <Verified className='size-4 text-rose-600' />
                </div>
              </div>
              {/* <!-- Value 6: Continuous Learning --> */}
              <div className='p-space-xl rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between'>
                <div className='w-12 h-12 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-space-lg'>
                  <BookOpenText className='size-7' />
                </div>
                <div className='flex flex-col gap-space-sm'>
                  <h3 className='font-headline-sm text-xl text-slate-900 font-bold'>
                    Continuous Learning Grants
                  </h3>
                  <p className='font-body-md text-slate-600 leading-relaxed'>
                    An annual $2,000 personal budget dedicated to robotics
                    conferences, IEEE memberships, embedded software
                    certifications, pedagogy courses, or books you choose to
                    master.
                  </p>
                </div>
                <div className='mt-space-lg pt-space-md border-t border-slate-100 text-slate-500 font-label-caps text-xs uppercase tracking-wider flex items-center gap-space-xs font-semibold'>
                  <span>Annual $2k Growth Budget</span>
                  <Cog className='size-4 text-orange-600' />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Open Positions Directory Section with Live Client-Side Filtering --> */}
        <section
          className='w-full py-space-3xl px-margin-sm md:px-margin lg:px-margin-lg bg-white border-b border-slate-200'
          id='open-positions'
        >
          <div className='max-w-330 mx-auto flex flex-col gap-space-2xl'>
            {/* <!-- Directory Heading & Controls --> */}
            <div className='flex flex-col gap-space-md'>
              <div className='flex items-center gap-space-xs text-orange-600 font-label-caps text-xs uppercase tracking-wider font-semibold'>
                <BriefcaseBusiness className='size-4' />

                <span>Live Opportunities</span>
              </div>
              <div className='flex flex-col md:flex-row md:items-end justify-between gap-space-lg'>
                <div>
                  <h2 className='font-headline-lg text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight'>
                    Open Positions
                  </h2>
                  <p className='font-body-md text-slate-600 mt-space-xs'>
                    Explore high-impact positions across engineering, pedagogy,
                    and field deployment.
                  </p>
                </div>
                <span
                  className='font-label-md text-sm text-slate-700 bg-slate-100 border border-slate-200 px-space-md py-space-xs rounded-lg font-semibold'
                  id='role-counter'
                >
                  Showing 6 Open Roles
                </span>
              </div>
              {/* <!-- Department Filter Tab Bar --> */}
              <div className='flex flex-wrap items-center gap-space-xs pt-space-md overflow-x-auto pb-space-xs'>
                <button
                  className='dept-filter-btn px-space-md py-space-sm rounded-lg font-label-md text-sm font-semibold bg-orange-600 text-white shadow-sm hover:bg-orange-500 transition-all'
                  // onclick="filterDepartment('all', this)"
                  type='button'
                >
                  All Departments
                </button>
                <button
                  className='dept-filter-btn px-space-md py-space-sm rounded-lg font-label-md text-sm font-semibold bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-900 hover:bg-slate-200 transition-all'
                  // onclick="filterDepartment('Engineering', this)"
                  type='button'
                >
                  Engineering
                </button>
                <button
                  className='dept-filter-btn px-space-md py-space-sm rounded-lg font-label-md text-sm font-semibold bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-900 hover:bg-slate-200 transition-all'
                  // onclick="filterDepartment('Curriculum &amp; Pedagogy', this)"
                  type='button'
                >
                  Curriculum &amp; Pedagogy
                </button>
                <button
                  className='dept-filter-btn px-space-md py-space-sm rounded-lg font-label-md text-sm font-semibold bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-900 hover:bg-slate-200 transition-all'
                  // onclick="filterDepartment('Product &amp; Hardware', this)"
                  type='button'
                >
                  Product &amp; Hardware
                </button>
                <button
                  className='dept-filter-btn px-space-md py-space-sm rounded-lg font-label-md text-sm font-semibold bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-900 hover:bg-slate-200 transition-all'
                  // onclick="filterDepartment('Sales &amp; Institutional', this)"
                  type='button'
                >
                  Sales &amp; Institutional Partnerships
                </button>
              </div>
            </div>
            {/* <!-- Job Roles Grid --> */}
            <div className='flex flex-col gap-space-md' id='roles-grid'>
              {/* <!-- Role 1 --> */}
              <div
                className='job-card p-space-xl rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg transition-all'
                data-department='Engineering'
              >
                <div className='flex flex-col gap-space-sm max-w-3xl'>
                  <div className='flex flex-wrap items-center gap-space-sm'>
                    <span className='px-space-sm py-space-xs rounded-full bg-orange-50 border border-orange-200 text-orange-700 font-label-caps text-xs uppercase font-bold'>
                      Engineering
                    </span>
                    <span className='px-space-sm py-space-xs rounded-full bg-slate-100 text-slate-700 font-label-caps text-xs uppercase font-medium'>
                      Senior Level
                    </span>
                    <span className='flex items-center gap-space-xs text-slate-500 font-body-sm text-sm'>
                      <MapPin className='size-4' />
                      Hybrid / Remote (US)
                    </span>
                  </div>
                  <h3 className='font-headline-sm text-xl text-slate-900 font-bold'>
                    Senior Embedded Firmware Engineer
                  </h3>
                  <p className='font-body-md text-slate-600 leading-relaxed'>
                    Architect real-time motor controller algorithms, dual-core
                    ESP32-S3 driver libraries, ROS2 communication bridges, and
                    MicroPython firmware execution sandboxes designed for safe
                    student execution.
                  </p>
                  <div className='flex flex-wrap gap-space-xs text-slate-600 font-label-caps text-xs'>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      C / C++
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      ESP-IDF
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      ROS2
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      MicroPython
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      BLE Stack
                    </span>
                  </div>
                </div>
                <div className='flex lg:flex-col items-center lg:items-end justify-between gap-space-md shrink-0'>
                  <span className='text-slate-700 font-body-sm text-sm font-semibold bg-slate-50 px-space-sm py-1 rounded border border-slate-200'>
                    $150k – $185k • Equity
                  </span>
                  <button
                    className='px-space-lg py-space-sm rounded-lg bg-orange-600 text-white font-label-md font-bold hover:bg-orange-500 active:scale-95 transition-all shadow-sm'
                    // onclick="
                    //   openApplicationModal('Senior Embedded Firmware Engineer')
                    // "
                    type='button'
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              {/* <!-- Role 2 --> */}
              <div
                className='job-card p-space-xl rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg transition-all'
                data-department='Curriculum &amp; Pedagogy'
              >
                <div className='flex flex-col gap-space-sm max-w-3xl'>
                  <div className='flex flex-wrap items-center gap-space-sm'>
                    <span className='px-space-sm py-space-xs rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-label-caps text-xs uppercase font-bold'>
                      Curriculum &amp; Pedagogy
                    </span>
                    <span className='px-space-sm py-space-xs rounded-full bg-slate-100 text-slate-700 font-label-caps text-xs uppercase font-medium'>
                      Lead Level
                    </span>
                    <span className='flex items-center gap-space-xs text-slate-500 font-body-sm text-sm'>
                      <MapPin className='size-4' />
                      San Francisco, CA / Remote
                    </span>
                  </div>
                  <h3 className='font-headline-sm text-xl text-slate-900 font-bold'>
                    Lead Robotics Curriculum Designer
                  </h3>
                  <p className='font-body-md text-slate-600 leading-relaxed'>
                    Author and direct inquiry-based K-12 physical computing
                    modules strictly aligned with Next Generation Science
                    Standards (NGSS) and CSTA frameworks. Translate complex
                    kinematics into joyful classroom explorations.
                  </p>
                  <div className='flex flex-wrap gap-space-xs text-slate-600 font-label-caps text-xs'>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      NGSS Alignment
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      Scaffolding
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      Teacher Rubrics
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      Blockly to Python
                    </span>
                  </div>
                </div>
                <div className='flex lg:flex-col items-center lg:items-end justify-between gap-space-md shrink-0'>
                  <span className='text-slate-700 font-body-sm text-sm font-semibold bg-slate-50 px-space-sm py-1 rounded border border-slate-200'>
                    $135k – $165k • Equity
                  </span>
                  <button
                    className='px-space-lg py-space-sm rounded-lg bg-orange-600 text-white font-label-md font-bold hover:bg-orange-500 active:scale-95 transition-all shadow-sm'
                    // onclick="
                    //   openApplicationModal('Lead Robotics Curriculum Designer')
                    // "
                    type='button'
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              {/* <!-- Role 3 --> */}
              <div
                className='job-card p-space-xl rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg transition-all'
                data-department='Product &amp; Hardware'
              >
                <div className='flex flex-col gap-space-sm max-w-3xl'>
                  <div className='flex flex-wrap items-center gap-space-sm'>
                    <span className='px-space-sm py-space-xs rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-label-caps text-xs uppercase font-bold'>
                      Product &amp; Hardware
                    </span>
                    <span className='px-space-sm py-space-xs rounded-full bg-slate-100 text-slate-700 font-label-caps text-xs uppercase font-medium'>
                      Mid-Senior
                    </span>
                    <span className='flex items-center gap-space-xs text-slate-500 font-body-sm text-sm'>
                      <MapPin className='size-4' />
                      Austin Hardware Studio, TX
                    </span>
                  </div>
                  <h3 className='font-headline-sm text-xl text-slate-900 font-bold'>
                    Educational Hardware Mechatronics Engineer
                  </h3>
                  <p className='font-body-md text-slate-600 leading-relaxed'>
                    Design indestructible, modular robotic linkages, magnetic
                    snap connectors, strain-relief chassis, and precision
                    planetary gear assemblies crafted to withstand everyday
                    classroom environments.
                  </p>
                  <div className='flex flex-wrap gap-space-xs text-slate-600 font-label-caps text-xs'>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      Fusion360 / SolidWorks
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      DFM Injection
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      Rapid Prototyping
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      BLDC Actuation
                    </span>
                  </div>
                </div>
                <div className='flex lg:flex-col items-center lg:items-end justify-between gap-space-md shrink-0'>
                  <span className='text-slate-700 font-body-sm text-sm font-semibold bg-slate-50 px-space-sm py-1 rounded border border-slate-200'>
                    $140k – $170k • Studio Lab
                  </span>
                  <button
                    className='px-space-lg py-space-sm rounded-lg bg-orange-600 text-white font-label-md font-bold hover:bg-orange-500 active:scale-95 transition-all shadow-sm'
                    // onclick="
                    //   openApplicationModal(
                    //     'Educational Hardware Mechatronics Engineer',
                    //   )
                    // "
                    type='button'
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              {/* <!-- Role 4 --> */}
              <div
                className='job-card p-space-xl rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg transition-all'
                data-department='Sales &amp; Institutional'
              >
                <div className='flex flex-col gap-space-sm max-w-3xl'>
                  <div className='flex flex-wrap items-center gap-space-sm'>
                    <span className='px-space-sm py-space-xs rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-label-caps text-xs uppercase font-bold'>
                      Sales &amp; Institutional
                    </span>
                    <span className='px-space-sm py-space-xs rounded-full bg-slate-100 text-slate-700 font-label-caps text-xs uppercase font-medium'>
                      Director / Lead
                    </span>
                    <span className='flex items-center gap-space-xs text-slate-500 font-body-sm text-sm'>
                      <MapPin className='size-4' />
                      East Coast Territory / Remote
                    </span>
                  </div>
                  <h3 className='font-headline-sm text-xl text-slate-900 font-bold'>
                    Institutional STEM Solutions Specialist
                  </h3>
                  <p className='font-body-md text-slate-600 leading-relaxed'>
                    Partner with county superintendents, university provosts,
                    and Title-I STEM directors to structure turnkey robotics lab
                    implementations, grant funding allocation models, and
                    multi-year adoptions.
                  </p>
                  <div className='flex flex-wrap gap-space-xs text-slate-600 font-label-caps text-xs'>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      K-12 Procurement
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      State Grants &amp; Title I
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      District Pilots
                    </span>
                  </div>
                </div>
                <div className='flex lg:flex-col items-center lg:items-end justify-between gap-space-md shrink-0'>
                  <span className='text-slate-700 font-body-sm text-sm font-semibold bg-slate-50 px-space-sm py-1 rounded border border-slate-200'>
                    $120k Base + Uncapped Comm.
                  </span>
                  <button
                    className='px-space-lg py-space-sm rounded-lg bg-orange-600 text-white font-label-md font-bold hover:bg-orange-500 active:scale-95 transition-all shadow-sm'
                    // onclick="
                    //   openApplicationModal(
                    //     'Institutional STEM Solutions Specialist',
                    //   )
                    // "
                    type='button'
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              {/* <!-- Role 5 --> */}
              <div
                className='job-card p-space-xl rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg transition-all'
                data-department='Engineering'
              >
                <div className='flex flex-col gap-space-sm max-w-3xl'>
                  <div className='flex flex-wrap items-center gap-space-sm'>
                    <span className='px-space-sm py-space-xs rounded-full bg-orange-50 border border-orange-200 text-orange-700 font-label-caps text-xs uppercase font-bold'>
                      Engineering
                    </span>
                    <span className='px-space-sm py-space-xs rounded-full bg-slate-100 text-slate-700 font-label-caps text-xs uppercase font-medium'>
                      Mid-Senior
                    </span>
                    <span className='flex items-center gap-space-xs text-slate-500 font-body-sm text-sm'>
                      <MapPin className='size-4' />
                      Fully Remote (US / Canada)
                    </span>
                  </div>
                  <h3 className='font-headline-sm text-xl text-slate-900 font-bold'>
                    Frontend Engineer (WebIDE &amp; WebGL Simulator)
                  </h3>
                  <p className='font-body-md text-slate-600 leading-relaxed'>
                    Engineer our browser-based robotics programming suite. You
                    will optimize real-time WebBluetooth device telemetry
                    pipelines and render 60fps 3D physical physics simulation
                    scenes using Three.js and WebAssembly.
                  </p>
                  <div className='flex flex-wrap gap-space-xs text-slate-600 font-label-caps text-xs'>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      TypeScript
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      Three.js
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      WebBluetooth API
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      WebAssembly
                    </span>
                  </div>
                </div>
                <div className='flex lg:flex-col items-center lg:items-end justify-between gap-space-md shrink-0'>
                  <span className='text-slate-700 font-body-sm text-sm font-semibold bg-slate-50 px-space-sm py-1 rounded border border-slate-200'>
                    $145k – $175k • Equity
                  </span>
                  <button
                    className='px-space-lg py-space-sm rounded-lg bg-orange-600 text-white font-label-md font-bold hover:bg-orange-500 active:scale-95 transition-all shadow-sm'
                    // onclick="openApplicationModal('Frontend Engineer (WebIDE)')"
                    type='button'
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              {/* <!-- Role 6 --> */}
              <div
                className='job-card p-space-xl rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg transition-all'
                data-department='Curriculum &amp; Pedagogy'
              >
                <div className='flex flex-col gap-space-sm max-w-3xl'>
                  <div className='flex flex-wrap items-center gap-space-sm'>
                    <span className='px-space-sm py-space-xs rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-label-caps text-xs uppercase font-bold'>
                      Curriculum &amp; Pedagogy
                    </span>
                    <span className='px-space-sm py-space-xs rounded-full bg-slate-100 text-slate-700 font-label-caps text-xs uppercase font-medium'>
                      Practitioner Lead
                    </span>
                    <span className='flex items-center gap-space-xs text-slate-500 font-body-sm text-sm'>
                      <MapPin className='size-4' />
                      Chicago, IL / Hybrid
                    </span>
                  </div>
                  <h3 className='font-headline-sm text-xl text-slate-900 font-bold'>
                    Teacher Professional Development Specialist
                  </h3>
                  <p className='font-body-md text-slate-600 leading-relaxed'>
                    Design engaging train-the-trainer workshops, mentor STEM
                    department chairs, and run interactive mechatronics
                    bootcamps that turn non-technical educators into confident
                    robotics mentors.
                  </p>
                  <div className='flex flex-wrap gap-space-xs text-slate-600 font-label-caps text-xs'>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      Coaching
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      Instructional Design
                    </span>
                    <span className='bg-slate-100 border border-slate-200 px-space-xs py-0.5 rounded'>
                      In-Service Training
                    </span>
                  </div>
                </div>
                <div className='flex lg:flex-col items-center lg:items-end justify-between gap-space-md shrink-0'>
                  <span className='text-slate-700 font-body-sm text-sm font-semibold bg-slate-50 px-space-sm py-1 rounded border border-slate-200'>
                    $115k – $140k • Travel Stipend
                  </span>
                  <button
                    className='px-space-lg py-space-sm rounded-lg bg-orange-600 text-white font-label-md font-bold hover:bg-orange-500 active:scale-95 transition-all shadow-sm'
                    // onclick="openApplicationModal('Teacher PD Specialist')"
                    type='button'
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- "Life at Obo" Culture Gallery & Quotes Section --> */}
        <section
          className='w-full py-space-3xl px-margin-sm md:px-margin lg:px-margin-lg bg-[#f8fafc] border-b border-slate-200'
          id='life-at-obo'
        >
          <div className='max-w-330 mx-auto flex flex-col gap-space-2xl'>
            {/* <!-- Section Intro --> */}
            <div className='flex flex-col gap-space-xs max-w-3xl'>
              <span className='font-label-caps text-xs text-orange-700 uppercase tracking-widest font-bold'>
                Life at Obo
              </span>
              <h2 className='font-headline-lg text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight'>
                Where engineers brainstorm with middle school teachers.
              </h2>
              <p className='font-body-md text-slate-600'>
                We test all firmware in actual classrooms, celebrate broken 3D
                prints as debugging discoveries, and value intellectual humility
                above all else.
              </p>
            </div>
            {/* <!-- Photo Mosaic Gallery --> */}
            <div className='grid grid-cols-1 md:grid-cols-12 gap-gutter'>
              <div className='md:col-span-8 overflow-hidden rounded-xl bg-white border border-slate-200 relative group h-80 lg:h-96 shadow-sm'>
                <Image
                  src={'/image/prototyping_studio.jpg'}
                  alt='An energetic modern robotics lab workshop with diverse mechatronics engineers and educators testing articulated orange robotic arms on lab tables surrounded by digital oscilloscopes and glowing monitors in deep moody blue and amber ambient light.'
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                />

                <div className='absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-space-lg'>
                  <div>
                    <span className='font-label-caps text-xs text-orange-400 uppercase font-semibold'>
                      Prototyping Studio • Austin
                    </span>
                    <p className='font-headline-sm text-lg text-white font-semibold'>
                      Testing modular magnetic motor assemblies with local
                      teachers.
                    </p>
                  </div>
                </div>
              </div>
              <div className='md:col-span-4 overflow-hidden rounded-xl bg-white border border-slate-200 relative group h-80 lg:h-96 shadow-sm'>
                <Image
                  src={'/image/kinematics_lab.jpg'}
                  alt='Close up shot of hands assembling an intricate multi-axis educational robotic gripper with transparent carbon fiber casings and embedded glowing LED status indicators in a tech development space.'
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                />

                <div className='absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-space-lg'>
                  <div>
                    <span className='font-label-caps text-xs text-amber-400 uppercase font-semibold'>
                      Kinematics Lab
                    </span>
                    <p className='font-body-md text-white font-semibold'>
                      Tuning torque thresholds for young students' hands.
                    </p>
                  </div>
                </div>
              </div>
              <div className='md:col-span-5 overflow-hidden rounded-xl bg-white border border-slate-200 relative group h-72 shadow-sm'>
                <Image
                  src={'/image/classroom_pilots.jpg'}
                  alt='Young high school students cheering around an autonomous robotic rover following a line maze floor path during a classroom pilot session with smiling curriculum instructors taking telemetry notes.'
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                />

                <div className='absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-space-lg'>
                  <div>
                    <span className='font-label-caps text-xs text-blue-400 uppercase font-semibold'>
                      Classroom Pilots
                    </span>
                    <p className='font-body-md text-white font-semibold'>
                      Field day with 8th graders evaluating our sensor fusion
                      kits.
                    </p>
                  </div>
                </div>
              </div>
              <div className='md:col-span-7 overflow-hidden rounded-xl bg-white border border-slate-200 relative group h-72 shadow-sm'>
                <Image
                  src={'/image/annual_maker_summit.jpg'}
                  alt='Remote distributed engineering team gathering around a whiteboard during an annual maker retreat, smiling while holding prototype circuit boards and custom robotic arm prototypes.'
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                />

                <div className='absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-space-lg'>
                  <div>
                    <span className='font-label-caps text-xs text-orange-400 uppercase font-semibold'>
                      Annual Maker Summit
                    </span>
                    <p className='font-body-md text-white font-semibold'>
                      Every team member brings a dream build to showcase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Testimonial Quotes Grid --> */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-gutter pt-space-md'>
              {/* <!-- Quote 1 --> */}
              <div className='p-space-xl rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between'>
                <div className='flex flex-col gap-space-md'>
                  <Quote className='size-9 text-orange-500' />

                  <p className='font-body-lg text-lg text-slate-800 italic leading-relaxed'>
                    "At previous tech companies, I spent years shaving
                    milliseconds off ad clicks. At Obo, I wrote the firmware
                    that enabled a 6th grader in Detroit to build her first
                    self-balancing robot. That emotional high is completely
                    unmatched."
                  </p>
                </div>
                <div className='flex items-center gap-space-md pt-space-lg border-t border-slate-100'>
                  <div className='w-12 h-12 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center font-headline-sm text-base font-bold text-orange-700'>
                    MK
                  </div>
                  <div>
                    <h4 className='font-label-lg text-slate-900 font-bold'>
                      Mateo Kowalski
                    </h4>
                    <p className='font-body-sm text-sm text-slate-500'>
                      Lead Embedded Firmware Architect • Ex-Autonomous Vehicle
                      Robotics
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Quote 2 --> */}
              <div className='p-space-xl rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between'>
                <div className='flex flex-col gap-space-md'>
                  <Quote className='size-9 text-blue-500' />

                  <p className='font-body-lg text-lg text-slate-800 italic leading-relaxed'>
                    "I taught public high school physics for nine years before
                    joining Obo. The engineering team treats pedagogical
                    feedback as a Tier 1 product requirement, not a marketing
                    afterthought. We build tools that honor how real teachers
                    teach."
                  </p>
                </div>
                <div className='flex items-center gap-space-md pt-space-lg border-t border-slate-100'>
                  <div className='w-12 h-12 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center font-headline-sm text-base font-bold text-blue-700'>
                    EL
                  </div>
                  <div>
                    <h4 className='font-label-lg text-slate-900 font-bold'>
                      Dr. Elena Lin
                    </h4>
                    <p className='font-body-sm text-sm text-slate-500'>
                      Director of Curriculum • Former Chicago Public Schools
                      Educator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- "Don't See Your Role?" General Application Callout --> */}
        <section className='w-full py-space-3xl px-margin-sm md:px-margin lg:px-margin-lg bg-white'>
          <div className='max-w-330 mx-auto'>
            <div className='p-space-2xl rounded-2xl bg-linear-to-br from-slate-50 via-white to-orange-50/40 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-space-2xl shadow-sm relative overflow-hidden'>
              {/* <!-- Glow Accent --> */}
              <div className='absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-orange-200/40 blur-[100px] pointer-events-none'></div>
              <div className='flex flex-col gap-space-md max-w-2xl relative z-10'>
                <span className='inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-amber-100 text-amber-800 border border-amber-200 font-label-caps text-xs uppercase tracking-wider self-start font-semibold'>
                  <Infinity className='size-4' />
                  General Fellowship &amp; Inquiries
                </span>
                <h2 className='font-headline-lg text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight'>
                  Don't see your exact role on the board?
                </h2>
                <p className='font-body-lg text-slate-600 leading-relaxed'>
                  We are always scouting exceptional hardware hackers, technical
                  writers, pedagogical researchers, and passionate robotics
                  mentors. Send us your portfolio, open-source repositories, or
                  syllabus ideas.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row lg:flex-col gap-space-md w-full lg:w-auto relative z-10 shrink-0'>
                <button
                  className='px-space-xl py-space-md rounded-lg bg-orange-600 text-white font-label-lg font-bold shadow-sm hover:bg-orange-500 active:scale-95 transition-all text-center'
                  // onclick="
                  //   openApplicationModal(
                  //     'General Maker &amp; Pedagogy Application',
                  //   )
                  // "
                  type='button'
                >
                  Submit Open Application
                </button>
                <a
                  className='px-space-xl py-space-md rounded-lg bg-white border border-slate-300 text-slate-800 font-label-lg font-semibold hover:bg-slate-50 shadow-sm transition-all text-center'
                  href='mailto:careers@obotechnology.com'
                >
                  Email Recruiting Directly
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Interactive Application Modal --> */}
        <div
          className='fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-margin-sm'
          id='application-modal'
        >
          <div className='bg-white max-w-xl w-full rounded-2xl shadow-2xl border border-slate-200 overflow-hidden p-space-xl flex flex-col gap-space-lg relative animate-in fade-in zoom-in-95 duration-200'>
            {/* <!-- Modal Header --> */}
            <div className='flex items-start justify-between'>
              <div>
                <span className='font-label-caps text-xs text-orange-600 uppercase tracking-wider font-semibold'>
                  Candidate Portal
                </span>
                <h3
                  className='font-headline-sm text-2xl text-slate-900 font-bold mt-space-xs'
                  id='modal-role-title'
                >
                  Apply for Position
                </h3>
              </div>
              <button
                className='w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors'
                // onclick="closeApplicationModal()"
                type='button'
              >
                <span className='material-symbols-outlined text-[20px]'>
                  close
                </span>
              </button>
            </div>
            {/* <!-- Application Form --> */}
            <form
              className='flex flex-col gap-space-md'
              id='role-application-form'
              // onsubmit="handleApplicationSubmit(event)"
            >
              <div className='flex flex-col gap-space-xs'>
                <label
                  className='font-label-md text-sm text-slate-700 font-medium'
                  htmlFor='applicant-name'
                >
                  Full Name
                </label>
                <input
                  className='w-full px-space-md py-space-sm rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-body-sm text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500'
                  id='applicant-name'
                  placeholder='Ada Lovelace'
                  // required=""
                  type='text'
                />
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-space-md'>
                <div className='flex flex-col gap-space-xs'>
                  <label
                    className='font-label-md text-sm text-slate-700 font-medium'
                    htmlFor='applicant-email'
                  >
                    Email Address
                  </label>
                  <input
                    className='w-full px-space-md py-space-sm rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-body-sm text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500'
                    id='applicant-email'
                    placeholder='ada@domain.edu'
                    required
                    type='email'
                  />
                </div>
                <div className='flex flex-col gap-space-xs'>
                  <label
                    className='font-label-md text-sm text-slate-700 font-medium'
                    htmlFor='applicant-links'
                  >
                    GitHub / Portfolio / LinkedIn
                  </label>
                  <input
                    className='w-full px-space-md py-space-sm rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-body-sm text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500'
                    id='applicant-links'
                    placeholder='https://github.com/...'
                    required
                    type='url'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-space-xs'>
                <label
                  className='font-label-md text-sm text-slate-700 font-medium'
                  htmlFor='applicant-note'
                >
                  What robotic or educational project are you proudest of?
                </label>
                <textarea
                  className='w-full px-space-md py-space-sm rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-body-sm text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500'
                  id='applicant-note'
                  placeholder='Tell us briefly about a mechatronics device you wired, or a classroom lesson you brought to life...'
                  required
                  // rows="3"
                ></textarea>
              </div>
              <div className='pt-space-xs flex items-center justify-end gap-space-md'>
                <button
                  className='px-space-md py-space-sm rounded-lg text-slate-600 hover:text-slate-900 font-label-md text-sm transition-colors font-medium'
                  // onclick="closeApplicationModal()"
                  type='button'
                >
                  Cancel
                </button>
                <button
                  className='px-space-xl py-space-sm rounded-lg bg-orange-600 text-white font-label-md font-bold hover:bg-orange-500 active:scale-95 transition-all shadow-sm'
                  type='submit'
                >
                  Submit Application
                </button>
              </div>
            </form>
            {/* <!-- Feedback Success State --> */}
            <div
              className='hidden flex-col items-center justify-center py-space-xl text-center gap-space-sm'
              id='modal-success'
            >
              <span className='w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-space-xs'>
                <span className='material-symbols-outlined text-[32px]'>
                  check_circle
                </span>
              </span>
              <h4 className='font-headline-sm text-2xl text-slate-900 font-bold'>
                Application Received!
              </h4>
              <p className='font-body-md text-slate-600 max-w-sm'>
                Thank you for applying. A talent partner from our robotics or
                pedagogy squad will review your submission within 3 business
                days.
              </p>
              <button
                className='mt-space-md px-space-lg py-space-sm rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-label-md text-sm hover:bg-slate-200 transition-colors font-semibold'
                // onclick="closeApplicationModal()"
                type='button'
              >
                Back to Careers
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Careerspage;
