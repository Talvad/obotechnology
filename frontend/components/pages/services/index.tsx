import {
  Archive,
  Award,
  BluetoothSearching,
  BookOpenCheck,
  BookOpenText,
  Bot,
  Boxes,
  BoxIcon,
  BriefcaseConveyorBelt,
  BuildingComplex,
  Calendar,
  CalendarDays,
  Check,
  Cpu,
  GraduationCap,
  GraphStar,
  Headset,
  LaptopMinimal,
  MoveDown,
  RobotArm,
  Route,
  SmartphoneUserRound,
  SquareTerminal,
  StarIcon,
  Terminal,
  TerminalSquare,
  TicketCheck,
  Trophy,
  Truck,
  UserCheck,
  Verified,
  VerifiedIcon,
  Zap,
} from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <main className='w-full pt-20 bg-surface min-h-screen'>
      <div className='flex flex-col w-full'>
        {/* {/* <!-- Atmospheric Subtle Backdrop Elements --> */}
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
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-600 to-secondary'>
                    Computational Thinking
                  </span>{' '}
                  Ecosystem
                </h1>
                <p className='font-body-lg text-body-lg text-slate-600 max-w-2xl mx-auto leading-relaxed'>
                  Bridging precision mechatronics hardware, browser-native
                  telemetry environments, and standards-certified educator
                  professional development into a unified institutional
                  platform.
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
                        Hot-swappable magnetic actuators, CAN-bus
                        microcontrollers, and impact-grade polycarbonates.
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
          {/* <!-- 2. Four Core Offerings Pillar Grid --> */}
          <section className='max-w-330 mx-auto px-margin-sm md:px-margin lg:px-margin-lg py-space-3xl'>
            <div className='space-y-space-xs pb-space-xl'>
              <span className='font-label-ui text-label-ui text-primary uppercase font-bold tracking-widest'>
                Architectural Pillars
              </span>
              <h2 className='font-headline-lg text-headline-lg text-slate-900 tracking-tight'>
                Engineered for Academic Mastery &amp; Industrial Realism
              </h2>
              <p className='font-body-md text-body-md text-slate-600 max-w-2xl'>
                Four interconnected modules engineered to carry learners from
                kindergarten spatial reasoning to ROS2 micro-robotics swarm
                synchronization.
              </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-gutter'>
              {/* <!-- Pillar 1: Hardware Modules --> */}
              <div className='group relative rounded-xl bg-white border border-slate-200 p-space-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden'>
                <div className='space-y-space-md'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-space-xs px-3 py-1 rounded-full bg-orange-50 text-primary border border-orange-200'>
                      <Cpu className='size-4' />

                      <span className='font-label-ui text-label-ui uppercase font-semibold'>
                        Pillar 01 // Hardware
                      </span>
                    </div>
                    <span className='font-label-ui text-label-ui text-slate-500 font-medium'>
                      K-12 to Higher Ed
                    </span>
                  </div>
                  <h3 className='font-headline-md text-headline-md text-slate-900 font-bold'>
                    Modular Robotics Platforms
                  </h3>
                  <p className='font-body-md text-body-md text-slate-600'>
                    Precision-tooled mechatronics kits engineered for repeatable
                    classroom assembly, industrial sensor integration, and
                    rugged longevity.
                  </p>
                  {/* <!-- Tiered Kits --> */}
                  <div className='grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs'>
                    <div className='p-space-md rounded-lg bg-slate-50 border border-slate-100 space-y-1'>
                      <span className='font-label-ui text-label-ui font-bold text-amber-700'>
                        Spark Platform
                      </span>
                      <p className='font-title-md text-title-md text-slate-900 font-bold'>
                        Grades K-5
                      </p>
                      <p className='font-body-sm text-body-sm text-slate-600'>
                        Tactile clip-on motors, inductive color sensors &amp;
                        magnetic wheel encoders.
                      </p>
                    </div>
                    <div className='p-space-md rounded-lg bg-slate-50 border border-slate-100 space-y-1'>
                      <span className='font-label-ui text-label-ui font-bold text-primary'>
                        Cortex-X
                      </span>
                      <p className='font-title-md text-title-md text-slate-900 font-bold'>
                        Grades 6-12
                      </p>
                      <p className='font-body-sm text-body-sm text-slate-600'>
                        6-DOF inverse kinematics, ultrasonic mesh array, ESP32
                        dual-core logic.
                      </p>
                    </div>
                    <div className='p-space-md rounded-lg bg-slate-50 border border-slate-100 space-y-1'>
                      <span className='font-label-ui text-label-ui font-bold text-secondary'>
                        Swarm Lab
                      </span>
                      <p className='font-title-md text-title-md text-slate-900 font-bold'>
                        University / ROS2
                      </p>
                      <p className='font-body-sm text-body-sm text-slate-600'>
                        UWB localization, lidar mapping payloads, dual camera
                        SLAM vision units.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Product Visual Placeholder --> */}
                <div className='mt-space-lg rounded-lg overflow-hidden bg-slate-100 h-52 relative border border-slate-200'>
                  <Image
                    className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500'
                    alt='Close up photography of modular mechatronic robotic chassis featuring black anodized aluminum plates, glowing orange indicator LEDs, brushless stepper motors, and precision wiring against an obsidian lab surface.'
                    src='/image/patented_magnetic_bus_arch.jpg'
                    fill
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent'></div>
                  <div className='absolute bottom-3 left-4 flex items-center gap-space-xs font-label-ui text-label-ui font-bold text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded'>
                    <span className='w-2 h-2 rounded-full bg-orange-500 animate-pulse'></span>
                    <span>PATENTED MAGNETIC BUS ARCHITECTURE</span>
                  </div>
                </div>
              </div>
              {/* <!-- Pillar 2: Turnkey STEAM Curriculum --> */}
              <div className='group relative rounded-xl bg-white border border-slate-200 p-space-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden'>
                <div className='space-y-space-md'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-space-xs px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200'>
                      <BookOpenText className='size-4' />
                      <span className='font-label-ui text-label-ui uppercase font-semibold'>
                        Pillar 02 // Pedagogy
                      </span>
                    </div>
                    <span className='font-label-ui text-label-ui text-slate-500 font-medium'>
                      36 Modular Units
                    </span>
                  </div>
                  <h3 className='font-headline-md text-headline-md text-slate-900 font-bold'>
                    Turnkey STEAM Curriculum Architecture
                  </h3>
                  <p className='font-body-md text-body-md text-slate-600'>
                    Standards-aligned pedagogical blueprints designed to convert
                    raw hardware exploration into measurable computational
                    thinking proficiency.
                  </p>
                  {/* <!-- Features List --> */}
                  <div className='space-y-space-sm pt-space-xs'>
                    <div className='flex items-start gap-space-md p-space-sm rounded-lg bg-slate-50 border border-slate-100'>
                      <BookOpenCheck className='size-5 text-amber-600 shrink-0 mt-0.5' />

                      <div>
                        <h4 className='font-title-md text-title-md text-slate-900 font-bold'>
                          36 Ready-to-Teach Scaffolds
                        </h4>
                        <p className='font-body-sm text-body-sm text-slate-600'>
                          Pacing guides, slide decks, and experiential challenge
                          prompts spanning physics, kinematics, and algorithmic
                          logic.
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-space-md p-space-sm rounded-lg bg-slate-50 border border-slate-100'>
                      <TicketCheck className='size-5 text-amber-600 shrink-0 mt-0.5' />
                      <div>
                        <h4 className='font-title-md text-title-md text-slate-900 font-bold'>
                          Interactive Workbooks &amp; Auto-Rubrics
                        </h4>
                        <p className='font-body-sm text-body-sm text-slate-600'>
                          Embedded self-grading quizzes, telemetry code
                          verification rubrics, and automated LMS grade-sync
                          pipelines.
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-space-md p-space-sm rounded-lg bg-slate-50 border border-slate-100'>
                      <UserCheck className='size-5 text-amber-600 shrink-0 mt-0.5' />

                      <div>
                        <h4 className='font-title-md text-title-md text-slate-900 font-bold'>
                          State Standard Crosswalk Maps
                        </h4>
                        <p className='font-body-sm text-body-sm text-slate-600'>
                          Direct matrix crosswalks for Texas TEKS, Florida
                          CPALMS, California NGSS, and national CSTA standards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-space-lg rounded-lg overflow-hidden bg-slate-100 h-52 relative border border-slate-200'>
                  <Image
                    className='object-cover object-center group-hover:scale-105 transition-transform duration-500'
                    alt='High tech classroom scene of high school students collaborating around a glowing robotic arm, holding digital tablet workbooks displaying code blocks and sensor readouts under modern atmospheric laboratory lighting.'
                    src='/image/full_teacher_slides.jpg'
                    fill
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent'></div>
                  <div className='absolute bottom-3 left-4 flex items-center gap-space-xs font-label-ui text-label-ui font-bold text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded'>
                    <span className='w-2 h-2 rounded-full bg-amber-400'></span>
                    <span>INCLUDES FULL TEACHER SLIDE PACKS &amp; QUIZZES</span>
                  </div>
                </div>
              </div>
              {/* <!-- Pillar 3: Obo Cloud Studio & Telemetry IDE --> */}
              <div className='group relative rounded-xl bg-white border border-slate-200 p-space-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden'>
                <div className='space-y-space-md'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-space-xs px-3 py-1 rounded-full bg-blue-50 text-secondary border border-blue-200'>
                      <TerminalSquare className='size-4' />

                      <span className='font-label-ui text-label-ui uppercase font-semibold'>
                        Pillar 03 // Software
                      </span>
                    </div>
                    <span className='font-label-ui text-label-ui text-slate-500 font-medium'>
                      Zero-Driver Deployment
                    </span>
                  </div>
                  <h3 className='font-headline-md text-headline-md text-slate-900 font-bold'>
                    Obo Cloud Studio &amp; Telemetry IDE
                  </h3>
                  <p className='font-body-md text-body-md text-slate-600'>
                    A unified browser development cockpit supporting
                    frictionless block-to-Python transitions, one-click firmware
                    sync, and real-time live telemetry feeds.
                  </p>
                  {/* <!-- Code Telemetry Visual Simulation --> */}
                  <div className='rounded-lg bg-slate-900 text-slate-100 p-space-md space-y-space-sm border border-slate-800 shadow-inner'>
                    <div className='flex items-center justify-between text-slate-400 font-label-code-sm text-label-code-sm'>
                      <div className='flex items-center gap-1.5'>
                        <span className='w-2 h-2 rounded-full bg-rose-500'></span>
                        <span className='w-2 h-2 rounded-full bg-amber-400'></span>
                        <span className='w-2 h-2 rounded-full bg-emerald-400'></span>
                        <span className='ml-2 font-mono text-slate-300'>
                          main_autonomous_patrol.py
                        </span>
                      </div>
                      <span className='text-blue-400 font-bold font-mono'>
                        LIVE TELEMETRY: 48Hz
                      </span>
                    </div>
                    <div className='bg-slate-950/80 rounded p-space-sm font-mono text-xs text-slate-300 space-y-1'>
                      <p>
                        <span className='text-blue-400'>from</span> obo_cortex
                        <span className='text-blue-400'>import</span> SwarmNode,
                        LidarScan
                      </p>
                      <p>
                        <span className='text-orange-400'>node</span> =
                        SwarmNode(band=
                        <span className='text-amber-300'>"5GHz"</span>,
                        fleet_id=
                        <span className='text-amber-300'>"ORBIT_04"</span>)
                      </p>
                      <p>
                        <span className='text-slate-500'>
                          # Subscribing to optical flow vector stream
                        </span>
                      </p>
                      <p>
                        <span className='text-blue-400'>while</span>
                        node.is_active():
                      </p>
                      <p className='pl-4 text-slate-200'>
                        distance = node.sensors.ultrasonic.read_mm()
                      </p>
                      <p className='pl-4 text-emerald-400'>
                        node.telemetry.emit_packet(distance, status="NOMINAL")
                      </p>
                    </div>
                    <div className='grid grid-cols-3 gap-space-xs text-center font-label-code-sm text-label-code-sm'>
                      <div className='bg-slate-800 py-1.5 rounded text-slate-300'>
                        IMU PITCH:
                        <span className='text-white font-bold'>+1.42°</span>
                      </div>
                      <div className='bg-slate-800 py-1.5 rounded text-slate-300'>
                        MOTOR PWM:
                        <span className='text-white font-bold'>88.4%</span>
                      </div>
                      <div className='bg-slate-800 py-1.5 rounded text-slate-300'>
                        VOLTAGE:{' '}
                        <span className='text-white font-bold'>11.8V</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-space-lg flex items-center justify-between text-body-sm text-slate-600 pt-space-xs'>
                  <span className='inline-flex items-center gap-1 text-secondary font-label-ui text-body-md font-semibold'>
                    <Zap className='size-5' />
                    Instant WebBluetooth Flashing
                  </span>
                  <span className='inline-flex items-center gap-1 text-slate-600 font-label-ui text-body-md font-semibold'>
                    <LaptopMinimal className='size-5' />
                    100% Chromebook Certified
                  </span>
                </div>
              </div>
              {/* <!-- Pillar 4: Educator Enablement & PD --> */}
              <div className='group relative rounded-xl bg-white border border-slate-200 p-space-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden'>
                <div className='space-y-space-md'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-space-xs px-3 py-1 rounded-full bg-blue-50 text-secondary border border-blue-200'>
                      <GraduationCap className='size-4' />

                      <span className='font-label-ui text-label-ui uppercase font-semibold'>
                        Pillar 04 // Enablement
                      </span>
                    </div>
                    <span className='font-label-ui text-label-ui text-slate-500 font-medium'>
                      CEU Certified
                    </span>
                  </div>
                  <h3 className='font-headline-md text-headline-md text-slate-900 font-bold'>
                    Educator Enablement &amp; Continuous Coaching
                  </h3>
                  <p className='font-body-md text-body-md text-slate-600'>
                    Hardware without confident educators remains on classroom
                    shelves. We deliver intensive immersion and all-year
                    pedagogical support.
                  </p>
                  <div className='space-y-space-sm pt-space-xs'>
                    <div className='flex items-start gap-space-md p-space-sm rounded-lg bg-slate-50 border border-slate-100'>
                      <div className='w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-secondary'>
                        <VerifiedIcon className='size-5' />
                      </div>
                      <div>
                        <h4 className='font-title-md text-title-md text-slate-900 font-bold'>
                          Accredited 16-Hour Intensive Workshops
                        </h4>
                        <p className='font-body-sm text-body-sm text-slate-600'>
                          Hands-on mechatronic debugging, computational
                          curriculum design, and classroom management
                          techniques.
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-space-md p-space-sm rounded-lg bg-slate-50 border border-slate-100'>
                      <div className='w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-secondary'>
                        <Headset className='size-5' />
                      </div>
                      <div>
                        <h4 className='font-title-md text-title-md text-slate-900 font-bold'>
                          Dedicated Campus Master Coaches
                        </h4>
                        <p className='font-body-sm text-body-sm text-slate-600'>
                          Bi-weekly virtual drop-in hours and asynchronous
                          lesson review for STEM lead teachers.
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-space-md p-space-sm rounded-lg bg-slate-50 border border-slate-100'>
                      <div className='w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-secondary'>
                        <Trophy className='size-5' />
                      </div>
                      <div>
                        <h4 className='font-title-md text-title-md text-slate-900 font-bold'>
                          Robotics League Tournament Playbooks
                        </h4>
                        <p className='font-body-sm text-body-sm text-slate-600'>
                          Complete frameworks for hosting intra-district
                          leagues, arena scoring rules, and regional hackathons.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-space-lg rounded-lg overflow-hidden bg-slate-100 h-52 relative border border-slate-200'>
                  <Image
                    className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500'
                    alt='Experienced female STEM educator coaching a group of smiling middle school teachers in an engineering workshop, demonstrating robotic circuit assembly on an obsidian work table.'
                    src='/image/retention_rate.jpg'
                    fill
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent'></div>
                  <div className='absolute bottom-3 left-4 flex items-center gap-space-xs font-label-ui text-label-ui font-bold text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded'>
                    <span className='w-2 h-2 rounded-full bg-blue-500'></span>
                    <span>
                      100% DISTRICT RETENTION RATE ACROSS 420+ SCHOOLS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- 3. Solution Pathways by Education Tier --> */}
          <section className='max-w-330 mx-auto px-margin-sm md:px-margin lg:px-margin-lg py-space-3xl'>
            <div className='text-center max-w-3xl mx-auto space-y-space-xs pb-space-2xl'>
              <span className='font-label-ui text-label-ui text-secondary font-bold uppercase tracking-widest'>
                Institutional Scaffolding
              </span>
              <h2 className='font-headline-lg text-headline-lg text-slate-900 tracking-tight'>
                Tailored Pathways Across Every Academic Grade
              </h2>
              <p className='font-body-md text-body-md text-slate-600'>
                Progression-engineered solutions addressing developmentally
                appropriate fine-motor control, conceptual depth, and
                computational rigor.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter'>
              {/* <!-- Tier 1: Elementary --> */}
              <div className='rounded-xl bg-white border border-slate-200 p-space-lg flex flex-col justify-between hover:shadow-md transition-all duration-300 shadow-sm'>
                <div className='space-y-space-md'>
                  <div className='w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700'>
                    <Bot className='size-7' />
                  </div>
                  <div>
                    <span className='font-label-ui text-label-ui text-amber-700 font-bold uppercase'>
                      Grades K - 5
                    </span>
                    <h3 className='font-headline-sm text-headline-sm text-slate-900 font-bold mt-1'>
                      Elementary Foundations
                    </h3>
                  </div>
                  <p className='font-body-sm text-body-sm text-slate-600'>
                    Tactile spatial logic, unplugged computing, and block-based
                    kinematics without screens or complex assembly barriers.
                  </p>
                  <ul className='space-y-space-xs font-body-sm text-body-sm text-slate-600'>
                    <li className='flex items-center gap-space-xs'>
                      <Check className='size-4 text-amber-600' />
                      Spark Kinesthetic Rover
                    </li>
                    <li className='flex items-center gap-space-xs'>
                      <Check className='size-4 text-amber-600' />
                      Color tile sequencing code
                    </li>
                    <li className='flex items-center gap-space-xs'>
                      <Check className='size-4 text-amber-600' />
                      12 Introductory story units
                    </li>
                  </ul>
                </div>
                <div className='pt-space-lg'>
                  <div className='p-space-sm rounded-lg bg-slate-50 border border-slate-100 text-slate-600 text-xs'>
                    <strong>Primary Metric:</strong> Spatial reasoning +
                    directional sequence literacy.
                  </div>
                </div>
              </div>
              {/* <!-- Tier 2: Middle & High --> */}
              <div className='rounded-xl bg-white border border-slate-200 p-space-lg flex flex-col justify-between hover:shadow-md transition-all duration-300 shadow-sm'>
                <div className='space-y-space-md'>
                  <div className='w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-primary'>
                    <GraphStar className='size-7' />
                  </div>
                  <div>
                    <span className='font-label-ui text-label-ui text-primary font-bold uppercase'>
                      Grades 6 - 12
                    </span>
                    <h3 className='font-headline-sm text-headline-sm text-slate-900 font-bold mt-1'>
                      Middle &amp; High School
                    </h3>
                  </div>
                  <p className='font-body-sm text-body-sm text-slate-600'>
                    Textual MicroPython, real-world multi-sensor fusion, and
                    team-based competition robotics challenge arenas.
                  </p>
                  <ul className='space-y-space-xs font-body-sm text-body-sm text-slate-600'>
                    <li className='flex items-center gap-space-xs'>
                      <Check className='size-4 text-primary' />
                      Cortex-X Modular Bots
                    </li>
                    <li className='flex items-center gap-space-xs'>
                      <Check className='size-4 text-primary' />
                      Dual Blockly &amp; Python IDE
                    </li>
                    <li className='flex items-center gap-space-xs'>
                      <Check className='size-4 text-primary' />
                      IMU &amp; Obstacle mesh tracking
                    </li>
                  </ul>
                </div>
                <div className='pt-space-lg'>
                  <div className='p-space-sm rounded-lg bg-slate-50 border border-slate-100 text-slate-600 text-xs'>
                    <strong>Primary Metric:</strong> Syntax translation &amp;
                    closed-loop PID control.
                  </div>
                </div>
              </div>
              {/* <!-- Tier 3: CTE & Vocational --> */}
              <div className='rounded-xl bg-white border border-slate-200 p-space-lg flex flex-col justify-between hover:shadow-md transition-all duration-300 shadow-sm'>
                <div className='space-y-space-md'>
                  <div className='w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-secondary'>
                    <BriefcaseConveyorBelt className='size-7' />
                  </div>
                  <div>
                    <span className='font-label-ui text-label-ui text-secondary font-bold uppercase'>
                      CTE &amp; Vocational
                    </span>
                    <h3 className='font-headline-sm text-headline-sm text-slate-900 font-bold mt-1'>
                      Industrial Mechatronics
                    </h3>
                  </div>
                  <p className='font-body-sm text-body-sm text-slate-600'>
                    Workforce-ready training with industrial kinematic arms,
                    ROS2 nodes, machine vision SLAM, and programmable logic.
                  </p>
                  <ul className='space-y-space-xs font-body-sm text-body-sm text-slate-600'>
                    <li className='flex items-center gap-space-xs'>
                      <Check className='size-4 text-secondary' />
                      6-DOF Industrial Arms
                    </li>
                    <li className='flex items-center gap-space-xs'>
                      <Check className='size-4 text-secondary' />
                      ROS2 Docker environments
                    </li>
                    <li className='flex items-center gap-space-xs'>
                      <Check className='size-4 text-secondary' />
                      Perkins V funding approved
                    </li>
                  </ul>
                </div>
                <div className='pt-space-lg'>
                  <div className='p-space-sm rounded-lg bg-slate-50 border border-slate-100 text-slate-600 text-xs'>
                    <strong>Primary Metric:</strong> Factory floor automation
                    &amp; kinematics certs.
                  </div>
                </div>
              </div>
              {/* <!-- Tier 4: District Deployments --> */}
              <div className='rounded-xl bg-white border border-slate-200 p-space-lg flex flex-col justify-between hover:shadow-md transition-all duration-300 shadow-sm'>
                <div className='space-y-space-md'>
                  <div className='w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800'>
                    <BuildingComplex className='size-7' />
                  </div>
                  <div>
                    <span className='font-label-ui text-label-ui text-slate-700 font-bold uppercase'>
                      District Enterprise
                    </span>
                    <h3 className='font-headline-sm text-headline-sm text-slate-900 font-bold mt-1'>
                      Multi-Campus Systems
                    </h3>
                  </div>
                  <p className='font-body-sm text-body-sm text-slate-600'>
                    Centralized device management MDM, SIS auto-rostering, and
                    single sign-on with Google Classroom and Canvas.
                  </p>
                  <ul className='space-y-space-xs font-body-sm text-body-sm text-slate-600'>
                    <li className='flex items-center gap-space-xs'>
                      <Check className='size-4 text-slate-700' />
                      OneRoster / Clever SSO
                    </li>
                    <li className='flex items-center gap-space-xs'>
                      <Check className='size-4 text-slate-700' />
                      Central fleet firmware pushes
                    </li>
                    <li className='flex items-center gap-space-xs'>
                      <Check className='size-4 text-slate-700' />
                      Equity audit reporting tool
                    </li>
                  </ul>
                </div>
                <div className='pt-space-lg'>
                  <div className='p-space-sm rounded-lg bg-slate-50 border border-slate-100 text-slate-600 text-xs'>
                    <strong>Primary Metric:</strong> Seamless IT rollout across
                    100+ schools.
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- 4. Turnkey Implementation Services Bento --> */}
          <section className='max-w-330 mx-auto px-margin-sm md:px-margin lg:px-margin-lg py-space-3xl'>
            <div className='rounded-2xl bg-white border border-slate-200 p-space-xl md:p-space-2xl shadow-sm'>
              <div className='flex flex-col lg:flex-row items-start justify-between gap-space-xl pb-space-2xl'>
                <div className='max-w-2xl space-y-space-xs'>
                  <span className='font-label-ui text-label-ui text-primary uppercase font-bold tracking-widest'>
                    White-Glove Rollout
                  </span>
                  <h2 className='font-headline-lg text-headline-lg text-slate-900 tracking-tight'>
                    Turnkey Implementation Services
                  </h2>
                  <p className='font-body-md text-body-md text-slate-600'>
                    We do not ship a palette of boxes and walk away. Our
                    engineering specialists oversee classroom deployment,
                    inventory architecture, and teacher onboarding from day one.
                  </p>
                </div>
                <div className='flex items-center gap-space-sm bg-slate-50 border border-slate-200 px-space-lg py-space-md rounded-xl shrink-0'>
                  <Truck className='size-8 text-primary' />

                  <div>
                    <p className='font-title-md text-title-md text-slate-900 font-bold'>
                      Direct-To-Room Delivery
                    </p>
                    <p className='font-body-sm text-body-sm text-slate-600'>
                      Numbered carts &amp; ready foam inserts
                    </p>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-gutter'>
                <div className='p-space-lg rounded-xl bg-slate-50 border border-slate-100 space-y-space-md'>
                  <div className='w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-primary'>
                    <SmartphoneUserRound className='size-6' />
                  </div>
                  <h3 className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                    On-Site Teacher PD Bootcamps
                  </h3>
                  <p className='font-body-sm text-body-sm text-slate-600'>
                    Full-day hands-on teacher immersions in your district labs.
                    Educators build real robots, write logic programs, and run
                    peer simulations.
                  </p>
                  <div className='text-xs font-label-ui text-label-ui text-slate-500 uppercase font-semibold pt-space-xs'>
                    Includes CEU Certificates for all staff
                  </div>
                </div>
                <div className='p-space-lg rounded-xl bg-slate-50 border border-slate-100 space-y-space-md'>
                  <div className='w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-secondary'>
                    <Archive className='size-6' />
                  </div>
                  <h3 className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                    Mobile Lab Carts &amp; Inventory RFID
                  </h3>
                  <p className='font-body-sm text-body-sm text-slate-600'>
                    Heavy-duty rolling carts with built-in UV sanitization,
                    multi-port fast charging, and RFID tag scanners that
                    automatically audit missing hardware.
                  </p>
                  <div className='text-xs font-label-ui text-label-ui text-slate-500 uppercase font-semibold pt-space-xs'>
                    Cuts inventory prep time by 85%
                  </div>
                </div>
                <div className='p-space-lg rounded-xl bg-slate-50 border border-slate-100 space-y-space-md'>
                  <div className='w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700'>
                    <Route className='size-6' />
                  </div>
                  <h3 className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                    Custom Standards Crosswalking
                  </h3>
                  <p className='font-body-sm text-body-sm text-slate-600'>
                    Our curriculum authors build bespoke alignment documents
                    matching your district's specific scope and sequence,
                    ensuring easy grant documentation.
                  </p>
                  <div className='text-xs font-label-ui text-label-ui text-slate-500 uppercase font-semibold pt-space-xs'>
                    Ready for Board Review Submissions
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- 5. Interactive Solution Calculator / Selector --> */}
          <section
            className='max-w-330 mx-auto px-margin-sm md:px-margin lg:px-margin-lg py-space-3xl'
            id='interactive-selector'
          >
            <div className='space-y-space-xs text-center max-w-2xl mx-auto pb-space-xl'>
              <span className='font-label-ui text-label-ui text-secondary uppercase font-bold tracking-widest'>
                Configuration Engine
              </span>
              <h2 className='font-headline-lg text-headline-lg text-slate-900 tracking-tight'>
                Interactive Solution Specifier
              </h2>
              <p className='font-body-md text-body-md text-slate-600'>
                Configure your student enrollment, grade level, and
                implementation scope to generate an instant institutional
                deployment blueprint.
              </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start'>
              {/* <!-- Controls Column --> */}
              <div className='lg:col-span-7 bg-white border border-slate-200 p-space-xl rounded-2xl shadow-sm space-y-space-lg'>
                {/* <!-- Select Target Grade Band --> */}
                <div className='space-y-space-sm'>
                  <label className='font-title-md text-title-md text-slate-900 block font-bold'>
                    Select Target Grade Tier
                  </label>
                  <div
                    className='grid grid-cols-3 gap-space-sm'
                    id='tierSelector'
                  >
                    <button
                      className='tier-btn active px-space-md py-space-sm rounded-lg bg-orange-50 border border-primary text-primary font-title-md text-title-md font-bold text-center transition-all shadow-sm'
                      data-tier='elem'
                      type='button'
                    >
                      Elementary (K-5)
                    </button>
                    <button
                      className='tier-btn px-space-md py-space-sm rounded-lg bg-slate-50 border border-slate-200 text-slate-600 font-title-md text-title-md font-medium text-center hover:bg-slate-100 transition-all'
                      data-tier='middle'
                      type='button'
                    >
                      Middle / High (6-12)
                    </button>
                    <button
                      className='tier-btn px-space-md py-space-sm rounded-lg bg-slate-50 border border-slate-200 text-slate-600 font-title-md text-title-md font-medium text-center hover:bg-slate-100 transition-all'
                      data-tier='cte'
                      type='button'
                    >
                      CTE / Collegiate
                    </button>
                  </div>
                </div>
                {/* <!-- Student Population Slider --> */}
                <div className='space-y-space-sm'>
                  <div className='flex items-center justify-between'>
                    <label className='font-title-md text-title-md text-slate-900 font-bold'>
                      Participating Students / Year
                    </label>
                    <span
                      className='font-headline-sm text-headline-sm text-primary font-bold'
                      id='studentCountLabel'
                    >
                      120 Students
                    </span>
                  </div>
                  <input
                    className='w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600'
                    id='studentSlider'
                    max='600'
                    min='30'
                    step='30'
                    type='range'
                    value='120'
                    readOnly
                  />
                  <div className='flex justify-between text-xs text-slate-500 font-label-ui'>
                    <span>Single Cohort (30)</span>
                    <span>Campus Wide (300)</span>
                    <span>District Cluster (600+)</span>
                  </div>
                </div>
                {/* <!-- Add-on Toggles --> */}
                <div className='space-y-space-sm pt-space-xs'>
                  <label className='font-title-md text-title-md text-slate-900 block font-bold'>
                    Select Implementation Inclusions
                  </label>
                  <div className='space-y-space-xs'>
                    <label className='flex items-center justify-between p-space-sm rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 cursor-pointer transition-colors'>
                      <div className='flex items-center gap-space-sm'>
                        <input
                          //   checked=''
                          className='w-4 h-4 rounded text-primary focus:ring-primary border-slate-300'
                          id='checkLabCart'
                          type='checkbox'
                        />
                        <span className='font-body-sm text-body-sm text-slate-800 font-medium'>
                          Mobile Heavy-Duty Lab Cart with Rapid UV Chargers
                        </span>
                      </div>
                      <span className='font-label-ui text-label-ui text-secondary font-bold'>
                        Recommended
                      </span>
                    </label>
                    <label className='flex items-center justify-between p-space-sm rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 cursor-pointer transition-colors'>
                      <div className='flex items-center gap-space-sm'>
                        <input
                          //   checked=''
                          className='w-4 h-4 rounded text-primary focus:ring-primary border-slate-300'
                          id='checkOnsitePD'
                          type='checkbox'
                        />
                        <span className='font-body-sm text-body-sm text-slate-800 font-medium'>
                          On-site Teacher PD Bootcamp (2-day onsite
                          certification)
                        </span>
                      </div>
                      <span className='font-label-ui text-label-ui text-amber-700 font-bold'>
                        Perkins V Match
                      </span>
                    </label>
                    <label className='flex items-center justify-between p-space-sm rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 cursor-pointer transition-colors'>
                      <div className='flex items-center gap-space-sm'>
                        <input
                          //   checked=''
                          className='w-4 h-4 rounded text-primary focus:ring-primary border-slate-300'
                          id='checkTelemetry'
                          type='checkbox'
                        />
                        <span className='font-body-sm text-body-sm text-slate-800 font-medium'>
                          Cloud Studio Enterprise LMS Auto-Rostering
                          (Clever/Canvas)
                        </span>
                      </div>
                      <span className='font-label-ui text-label-ui text-slate-500 font-medium'>
                        District Grade
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              {/* <!-- Live Estimate Specification Output --> */}
              <div className='lg:col-span-5 bg-white border border-slate-200 p-space-xl rounded-2xl shadow-sm flex flex-col justify-between space-y-space-lg'>
                <div className='space-y-space-md'>
                  <div className='flex items-center justify-between'>
                    <span className='font-label-ui text-label-ui uppercase text-primary font-bold tracking-wider'>
                      Solution Blueprint
                    </span>
                    <span className='flex items-center gap-1.5 text-xs text-slate-600 font-medium'>
                      <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse'></span>
                      Live Specs
                    </span>
                  </div>
                  <div className='space-y-1'>
                    <p
                      className='font-headline-sm text-headline-sm text-slate-900 font-bold'
                      id='specKitName'
                    >
                      Spark Platform STEM Lab
                    </p>
                    <p
                      className='font-body-sm text-body-sm text-slate-600'
                      id='specTargetDesc'
                    >
                      Complete kindergarten through 5th-grade experiential
                      computational logic package.
                    </p>
                  </div>
                  {/* <!-- Telemetry Spec Data Rows --> */}
                  <div className='space-y-space-xs font-body-sm text-body-sm pt-space-xs'>
                    <div className='flex items-center justify-between py-2 bg-slate-50 border border-slate-100 px-space-sm rounded'>
                      <span className='text-slate-600'>
                        Recommended Hardware Kits:
                      </span>
                      <span
                        className='font-title-md text-title-md text-slate-900 font-bold'
                        id='specKitQuantity'
                      >
                        15 Kits
                      </span>
                    </div>
                    <div className='flex items-center justify-between py-2 bg-slate-50 border border-slate-100 px-space-sm rounded'>
                      <span className='text-slate-600'>
                        Student Pair Ratio:
                      </span>
                      <span className='font-title-md text-title-md text-slate-900 font-bold'>
                        2 Students : 1 Kit
                      </span>
                    </div>
                    <div className='flex items-center justify-between py-2 bg-slate-50 border border-slate-100 px-space-sm rounded'>
                      <span className='text-slate-600'>Curriculum Access:</span>
                      <span
                        className='font-title-md text-title-md text-amber-700 font-bold'
                        id='specUnits'
                      >
                        12 Modular Units
                      </span>
                    </div>
                    <div className='flex items-center justify-between py-2 bg-slate-50 border border-slate-100 px-space-sm rounded'>
                      <span className='text-slate-600'>
                        Teacher Licenses Included:
                      </span>
                      <span
                        className='font-title-md text-title-md text-secondary font-bold'
                        id='specLicenses'
                      >
                        4 Educator Seats
                      </span>
                    </div>
                    <div className='flex items-center justify-between py-2 bg-slate-50 border border-slate-100 px-space-sm rounded'>
                      <span className='text-slate-600'>
                        Funding Eligibility:
                      </span>
                      <span className='font-label-ui text-label-ui font-semibold text-slate-800 bg-slate-200 px-2 py-0.5 rounded'>
                        ESSER / Title IV / Perkins
                      </span>
                    </div>
                  </div>
                  {/* <!-- Inline SVG Visualizer for Lab Scale --> */}
                  <div className='rounded-lg bg-slate-50 border border-slate-200 p-space-sm space-y-1'>
                    <span className='font-label-ui text-label-ui text-slate-500 font-semibold uppercase'>
                      Estimated Weekly Lab Utilization
                    </span>
                    <svg
                      className='w-full h-10 text-secondary'
                      fill='none'
                      viewBox='0 0 300 40'
                    >
                      <path
                        d='M0,35 Q30,10 60,25 T120,15 T180,30 T240,8 T300,20'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeWidth='2.5'
                      ></path>
                      <circle cx='240' cy='8' fill='#a33900' r='4.5'></circle>
                    </svg>
                  </div>
                </div>
                <div className='space-y-space-sm pt-space-md'>
                  <button
                    className='w-full py-space-md px-space-lg rounded-lg bg-primary text-white font-label-ui text-title-md font-bold hover:brightness-110 active:scale-95 transition-all text-center shadow-md'
                    type='button'
                  >
                    Download Institutional Formal Quote (.PDF)
                  </button>
                  <p className='font-label-ui text-label-ui text-slate-500 text-center font-medium'>
                    Institutional purchase orders and district Net-30 payment
                    terms supported.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- 6. Institutional Testimonial & Case Snapshot --> */}
          <section className='max-w-330 mx-auto px-margin-sm md:px-margin lg:px-margin-lg py-space-2xl'>
            <div className='rounded-2xl bg-white border border-slate-200 p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-xl shadow-sm'>
              <div className='space-y-space-md max-w-xl'>
                <div className='flex items-center gap-space-xs text-amber-500'>
                  <StarIcon className='size-5' />
                  <StarIcon className='size-5' />
                  <StarIcon className='size-5' />
                  <StarIcon className='size-5' />
                  <StarIcon className='size-5' />

                  <span className='font-label-ui text-label-ui text-slate-600 font-bold ml-2 uppercase'>
                    DISTRICT IMPACT CASE
                  </span>
                </div>
                <blockquote className='font-headline-sm text-headline-sm text-slate-900 italic font-medium leading-snug'>
                  "Prior to Obo, our robotics program sat in storage because
                  software installations failed on locked-down Chromebooks. The
                  WebBluetooth connectivity and pre-packaged slide units made
                  our CTE transition instantaneous."
                </blockquote>
                <div>
                  <p className='font-title-md text-title-md text-slate-900 font-bold'>
                    Dr. Arthur Vance
                  </p>
                  <p className='font-body-sm text-body-sm text-slate-600'>
                    Director of Career &amp; Technical Education, Metro Austin
                    ISD
                  </p>
                </div>
              </div>
              <div className='w-full md:w-80 rounded-xl bg-slate-50 border border-slate-200 p-space-lg space-y-space-sm shrink-0'>
                <p className='font-label-ui text-label-ui text-primary font-bold uppercase'>
                  METRO ISDs DEPLOYMENT NUMBERS
                </p>
                <div className='flex items-baseline justify-between border-b border-slate-200 pb-2'>
                  <span className='text-slate-600 font-body-sm text-body-sm'>
                    Active Campuses:
                  </span>
                  <span className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                    28 Schools
                  </span>
                </div>
                <div className='flex items-baseline justify-between border-b border-slate-200 pb-2'>
                  <span className='text-slate-600 font-body-sm text-body-sm'>
                    Certified Educators:
                  </span>
                  <span className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                    114 Staff
                  </span>
                </div>
                <div className='flex items-baseline justify-between'>
                  <span className='text-slate-600 font-body-sm text-body-sm'>
                    Student Submissions:
                  </span>
                  <span className='font-headline-sm text-headline-sm text-secondary font-bold'>
                    18,400+ Codes
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- 7. Call To Action Banner --> */}
          <section
            className='max-w-330 mx-auto px-margin-sm md:px-margin lg:px-margin-lg py-space-3xl'
            id='consultation-booking'
          >
            <div className='relative rounded-2xl bg-linear-to-r from-orange-50 via-white to-blue-50 border border-slate-200 p-space-xl md:p-space-3xl overflow-hidden shadow-sm'>
              <div className='absolute -right-20 -bottom-20 w-96 h-96 bg-orange-200/30 rounded-full blur-[100px] pointer-events-none'></div>
              <div className='absolute -left-20 -top-20 w-96 h-96 bg-blue-200/30 rounded-full blur-[100px] pointer-events-none'></div>
              <div className='relative z-10 flex flex-col lg:flex-row items-center justify-between gap-space-2xl text-center lg:text-left'>
                <div className='max-w-2xl space-y-space-md'>
                  <div className='inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-orange-100 text-primary font-label-ui text-label-ui uppercase font-bold tracking-wider border border-orange-200'>
                    <span className='w-2 h-2 rounded-full bg-primary animate-pulse'></span>
                    Academic Year Pilot Applications Open
                  </div>
                  <h2 className='font-display-lg text-display-lg text-slate-900 tracking-tight'>
                    Ready to Transform Your STEM Classrooms?
                  </h2>
                  <p className='font-body-lg text-body-lg text-slate-600'>
                    Schedule an institutional consultation with our curriculum
                    architects or request an evaluation sample kit mailed
                    directly to your district administration office.
                  </p>
                </div>
                <div className='flex flex-col sm:flex-row items-center gap-space-md w-full lg:w-auto shrink-0'>
                  <button
                    className='w-full sm:w-auto inline-flex items-center justify-center gap-space-xs font-label-ui text-title-md bg-primary text-white font-bold px-space-xl py-space-md rounded-lg shadow-md hover:brightness-110 active:scale-95 transition-all'
                    type='button'
                  >
                    <Calendar className='size-5' />

                    <span>Schedule Institutional Consultation</span>
                  </button>
                  <button
                    className='w-full sm:w-auto inline-flex items-center justify-center gap-space-xs font-label-ui text-title-md bg-white text-slate-800 hover:bg-slate-50 border border-slate-300 px-space-xl py-space-md rounded-lg shadow-sm transition-all'
                    type='button'
                  >
                    <BoxIcon className='size-5 text-primary' />

                    <span>Request Free Sample Kit</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- Interactive Specifier Client-Side Logic --> */}
      </div>
    </main>
  );
}
