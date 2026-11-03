import {
  Archive,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  CloudCheck,
  Download,
  Eye,
  GraduationCap,
  Headset,
  LockKeyhole,
  Radio,
  ReceiptIndianRupee,
  RefreshCcw,
  RobotArm,
  Settings,
  ShieldCheck,
  SquareCode,
  SquareMenu,
  Star,
  StarHalf,
  Timer,
  Verified,
  Wifi,
  Zap,
} from 'lucide-react';
import Image from 'next/image';

const ProductsPage = () => {
  return (
    <main className='w-full pt-20 bg-background min-h-screen'>
      <div className='flex flex-col w-full'>
        {/*  <!-- Subtle Ambient Glow Orbs --> */}
        <div className='relative w-full overflow-hidden'>
          <div className='absolute -top-40 right-1/4 w-145 h-145 bg-blue-100/60 rounded-full blur-[140px] pointer-events-none -z-10'></div>
          <div className='absolute top-170 -left-32 w-125 h-125 bg-orange-100/50 rounded-full blur-[130px] pointer-events-none -z-10'></div>
          <div className='absolute top-[1800px] right-10 w-150 h-150 bg-amber-100/40 rounded-full blur-[160px] pointer-events-none -z-10'></div>
          {/* <!-- Section 1: Hero Spotlight --> */}
          <section className='max-w-330 mx-auto px-4 md:px-8 lg:px-12 pt-space-md pb-space-3xl'>
            {/* <!-- Breadcrumbs --> */}
            <nav
              aria-label='Breadcrumb'
              className='flex items-center gap-space-xs text-body-sm font-body-sm text-slate-500 mb-space-lg flex-wrap'
            >
              <a className='hover:text-slate-900 transition-colors' href='#'>
                Home
              </a>
              <ChevronRight className='size-4 text-salte-400' />

              <a className='hover:text-slate-900 transition-colors' href='#'>
                Products &amp; Services
              </a>
              <ChevronRight className='size-4 text-salte-400' />
              <a className='hover:text-slate-900 transition-colors' href='#'>
                Robotics Kits &amp; Hardware
              </a>
              <ChevronRight className='size-4 text-salte-400' />
              <span className='text-slate-900 font-medium'>
                Obo Cortex-X Modular Robotics Kit
              </span>
            </nav>
            {/* <!-- Grid: Left Info / Right Interactive Media --> */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start'>
              {/* <!-- Left Product Brief --> */}
              <div className='lg:col-span-6 flex flex-col space-y-space-lg'>
                {/* <!-- Institutional Badge & Meta --> */}
                <div className='flex flex-wrap items-center gap-space-sm'>
                  <span className='px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-primary-container font-label-code-sm uppercase tracking-wider font-semibold'>
                    Flagship Classroom &amp; Tournament Kit • Ages 11-18
                  </span>
                  <span className='px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-secondary font-label-code-sm uppercase tracking-wider flex items-center gap-1 font-semibold'>
                    <Verified className='size-3.5' />
                    NGSS &amp; STEAM Aligned
                  </span>
                </div>
                {/* <!-- Main Title & Pitch --> */}
                <div className='space-y-space-sm'>
                  <h1 className='font-headline-lg text-3xl sm:text-4xl lg:text-[44px] text-slate-900 tracking-tight font-bold leading-tight'>
                    Obo Cortex-X Modular Robotics Kit
                  </h1>
                  <p className='font-body-lg text-slate-600 leading-relaxed'>
                    Industrial-grade microcontrollers, multi-sensor telemetry,
                    and precision high-torque servos engineered to bridge visual
                    block logic with high-performance MicroPython and real-time
                    C++ mechatronics.
                  </p>
                </div>
                {/* <!-- Institutional Trust Rating Banner --> */}
                <div className='p-space-md rounded-xl bg-surface-container-lowest border border-border-subtle shadow-sm flex items-center gap-space-md flex-wrap'>
                  <div className='flex items-center text-amber-500'>
                    <Star className='size-5' />
                    <Star className='size-5' />
                    <Star className='size-5' />
                    <Star className='size-5' />
                    <StarHalf className='size-5' />
                  </div>
                  <div className='text-body-sm font-body-sm text-slate-900 font-semibold'>
                    4.9 / 5.0 Rating
                  </div>
                  <div className='text-body-sm font-body-sm text-slate-600'>
                    Adopted by 180+ School Districts, FIRST® Clubs &amp; STEM
                    Academies
                  </div>
                </div>
                {/* <!-- Pricing & Procurement Matrix --> */}
                <div className='p-space-lg rounded-xl bg-surface-container-lowest border border-border-subtle shadow-sm space-y-space-md'>
                  <div className='flex items-baseline justify-between flex-wrap gap-2'>
                    <div>
                      <span className='text-label-code-sm font-label-code-sm uppercase text-slate-500 block font-semibold'>
                        Standard Individual Kit
                      </span>
                      <span className='text-headline-md font-headline-md text-slate-900 font-bold'>
                        $349
                      </span>
                      <span className='text-body-sm font-body-sm text-slate-500'>
                        / unit
                      </span>
                    </div>
                    <div className='text-right'>
                      <span className='text-label-code-sm font-label-code-sm uppercase text-primary font-bold block'>
                        Classroom Bundle (10 Kits)
                      </span>
                      <span className='text-headline-md font-headline-md text-primary font-bold'>
                        $2,890
                      </span>
                      <span className='text-body-sm font-body-sm text-slate-500 block'>
                        Save $600 + Free Educator Hub
                      </span>
                    </div>
                  </div>
                  <div className='text-body-sm font-body-sm text-slate-600 pt-1 space-y-1'>
                    <p className='flex items-center gap-2'>
                      <CircleCheck className='size-5 text-primary' />
                      Classroom bundle includes 10-bay fast-charging dock,
                      educator hub, and 60+ spare chassis hardware parts.
                    </p>
                    <p className='flex items-center gap-2'>
                      <CircleCheck className='size-5 text-secondary' />
                      Eligible for Title I, Perkins V, and ESSER federal grant
                      allocations.
                    </p>
                  </div>
                  {/* <!-- Action CTAs --> */}
                  <div className='flex flex-col sm:flex-row gap-space-sm pt-space-xs'>
                    <a
                      className='inline-flex items-center justify-center gap-2 font-title-md text-sm font-bold bg-primary-container text-on-primary-container px-space-lg py-space-sm rounded-lg shadow-sm hover:brightness-105 active:scale-95 transition-all text-center'
                      href='#'
                    >
                      <ReceiptIndianRupee className='size-5' />
                      Request Institutional Quote
                    </a>
                    <a
                      className='inline-flex items-center justify-center gap-2 font-title-md text-sm font-semibold bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 px-space-md py-space-sm rounded-lg shadow-sm transition-all text-center'
                      href='#'
                    >
                      <Download className='size-5' />
                      Spec Sheet (PDF)
                    </a>
                    <a
                      className='inline-flex items-center justify-center gap-1 font-title-md text-sm font-semibold text-secondary hover:text-blue-800 px-space-sm py-space-sm rounded-lg transition-colors text-center'
                      href='#'
                    >
                      <span>Order Pilot Unit</span>
                      <ArrowRight className='size-4' />
                    </a>
                  </div>
                </div>
                {/* <!-- Fast Spec Badges Ribbon --> */}
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-space-sm pt-space-xs'>
                  <div className='p-space-sm rounded-lg bg-surface-container-lowest border border-border-subtle shadow-sm'>
                    <span className='text-label-code-sm font-label-code-sm uppercase text-slate-500 block'>
                      Processing Core
                    </span>
                    <span className='text-body-sm font-body-sm font-semibold text-slate-900'>
                      ESP32-S3 Dual-Core 240MHz
                    </span>
                  </div>
                  <div className='p-space-sm rounded-lg bg-surface-container-lowest border border-border-subtle shadow-sm'>
                    <span className='text-label-code-sm font-label-code-sm uppercase text-slate-500 block'>
                      Sensors Included
                    </span>
                    <span className='text-body-sm font-body-sm font-semibold text-slate-900'>
                      30+ Snap-Fit Modules
                    </span>
                  </div>
                  <div className='p-space-sm rounded-lg bg-surface-container-lowest border border-border-subtle shadow-sm'>
                    <span className='text-label-code-sm font-label-code-sm uppercase text-slate-500 block'>
                      Connectivity
                    </span>
                    <span className='text-body-sm font-body-sm font-semibold text-slate-900'>
                      WebBluetooth &amp; WiFi 6
                    </span>
                  </div>
                  <div className='p-space-sm rounded-lg bg-surface-container-lowest border border-border-subtle shadow-sm'>
                    <span className='text-label-code-sm font-label-code-sm uppercase text-slate-500 block'>
                      Actuators
                    </span>
                    <span className='text-body-sm font-body-sm font-semibold text-slate-900'>
                      6x 180° Metal Servos
                    </span>
                  </div>
                  <div className='p-space-sm rounded-lg bg-surface-container-lowest border border-border-subtle shadow-sm'>
                    <span className='text-label-code-sm font-label-code-sm uppercase text-slate-500 block'>
                      Runtime
                    </span>
                    <span className='text-body-sm font-body-sm font-semibold text-slate-900'>
                      8-Hour LiPo Swappable
                    </span>
                  </div>
                  <div className='p-space-sm rounded-lg bg-surface-container-lowest border border-border-subtle shadow-sm'>
                    <span className='text-label-code-sm font-label-code-sm uppercase text-slate-500 block'>
                      IDE Support
                    </span>
                    <span className='text-body-sm font-body-sm font-semibold text-slate-900'>
                      Blockly, Python, C++
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Right Product Media Showcase --> */}
              <div className='lg:col-span-6 flex flex-col space-y-space-md'>
                {/* <!-- Main Display Card --> */}
                <div className='relative w-full h-115 rounded-xl overflow-hidden bg-surface-container-lowest border border-border-subtle shadow-md group'>
                  <Image
                    className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                    alt='High-resolution studio photograph of Obo Cortex-X autonomous educational robotics rover with exposed carbon-fiber chassis, precision titanium metal servos, illuminated blue LED micro-controller board, front LiDAR scanner, and omnidirectional mecanum wheels on dark engineering slate background.'
                    fill
                    src={'/image/autonomous_omni_rover.jpg'}
                  />

                  <div className='absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-80 pointer-events-none'></div>
                  {/* <!-- Floating Sensor Telemetry Tag --> */}
                  <div className='absolute top-4 left-4 p-space-sm rounded-lg bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm flex items-center gap-2'>
                    <span className='w-2.5 h-2.5 rounded-full bg-primary-container animate-ping'></span>
                    <span className='font-label-code-sm text-label-code-sm uppercase tracking-wider text-slate-900 font-semibold'>
                      Vision Pipeline Active • 30 FPS
                    </span>
                  </div>
                  <div className='absolute bottom-4 left-4 right-4 flex items-center justify-between text-body-sm font-body-sm text-white bg-slate-950/75 backdrop-blur-md p-space-sm rounded-lg border border-white/10 shadow-sm'>
                    <div className='flex items-center gap-2'>
                      <RobotArm className='size-5 text-blue-400' />

                      <span className='font-medium' id='activeViewCaption'>
                        Configuration: Autonomous Omni-Rover with Edge AI Vision
                      </span>
                    </div>
                    <span className='font-label-code-sm text-label-code-sm text-slate-300'>
                      3D CAD VERIFIED
                    </span>
                  </div>
                </div>
                {/* <!-- Thumbnails Selector --> */}
                <div className='grid grid-cols-4 gap-space-sm'>
                  <button
                    className='thumbnail-btn active-thumb p-1.5 rounded-lg bg-surface-container-lowest border-2 border-primary-container shadow-sm text-left transition-all'
                    // onclick="updateHeroImage('autonomous', this)"
                  >
                    <div className='relative w-full h-20 rounded overflow-hidden bg-slate-100 mb-1.5 border border-slate-200'>
                      <Image
                        className=' object-cover'
                        alt='Close up photograph of autonomous rover chassis with mecanum wheels and integrated ultrasonic sensors mounted on dark anodized frame'
                        src={'/image/rover-mode.jpg'}
                        fill
                      />
                    </div>
                    <span className='block font-title-md text-xs text-slate-900 truncate font-semibold'>
                      Rover Mode
                    </span>
                    <span className='block font-label-code-sm text-[10px] text-slate-500'>
                      Mecanum 4WD
                    </span>
                  </button>
                  <button
                    className='thumbnail-btn p-1.5 rounded-lg bg-surface-container-lowest border border-border-subtle hover:border-slate-400 shadow-sm text-left transition-all'
                    // onclick="updateHeroImage('gripper', this)"
                  >
                    <div className='relative w-full h-20 rounded overflow-hidden bg-slate-100 mb-1.5 border border-slate-200'>
                      <Image
                        className='object-cover'
                        alt='High precision 4-axis robotic arm with pneumatic compliant mechanical gripper holding an orange precision calibration block in laboratory lighting'
                        src={'/image/kinematic-arm.jpg'}
                        fill
                      />
                    </div>
                    <span className='block font-title-md text-xs text-slate-900 truncate font-semibold'>
                      Kinematic Arm
                    </span>
                    <span className='block font-label-code-sm text-[10px] text-slate-500'>
                      4-DOF Gripper
                    </span>
                  </button>
                  <button
                    className='thumbnail-btn p-1.5 rounded-lg bg-surface-container-lowest border border-border-subtle hover:border-slate-400 shadow-sm text-left transition-all'
                    // onclick="updateHeroImage('mcu', this)"
                  >
                    <div className='relative w-full h-20 rounded overflow-hidden bg-slate-100 mb-1.5 border border-slate-200'>
                      <Image
                        className='object-cover'
                        alt='Macro photography of custom Obo Cortex electronic motherboard with ESP32-S3 microcontroller, gold contact pads, status LEDs, and magnetic snap ports'
                        src={'/image/core-mcu.jpg'}
                        fill
                      />
                    </div>
                    <span className='block font-title-md text-xs text-slate-900 truncate font-semibold'>
                      Core MCU
                    </span>
                    <span className='block font-label-code-sm text-[10px] text-slate-500'>
                      ESP32-S3 Dual
                    </span>
                  </button>
                  <button
                    className='thumbnail-btn p-1.5 rounded-lg bg-surface-container-lowest border border-border-subtle hover:border-slate-400 shadow-sm text-left transition-all'
                    // onclick="updateHeroImage('exploded', this)"
                  >
                    <div className='relative w-full h-20 rounded overflow-hidden bg-slate-100 mb-1.5 border border-slate-200'>
                      <Image
                        className='object-cover'
                        alt='Technical exploded diagram view showing all modular components of educational robotics kit separated in 3D isometric space against dark blueprint grid'
                        src={`/image/exploded_view.jpg`}
                        fill
                      />
                    </div>
                    <span className='block font-title-md text-xs text-slate-900 truncate font-semibold'>
                      Exploded View
                    </span>
                    <span className='block font-label-code-sm text-[10px] text-slate-500'>
                      Modular Parts
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Section 2: Interactive Hardware Anatomy & Architecture --> */}
          <section className='max-w-330 mx-auto px-4 md:px-8 lg:px-12 py-space-3xl'>
            <div className='flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl'>
              <div className='space-y-space-xs max-w-2xl'>
                <span className='font-label-code-sm uppercase tracking-wider block font-semibold text-primary'>
                  Modular Engineering Blueprint
                </span>
                <h2 className='font-headline-lg text-headline-lg text-slate-900 tracking-tight font-bold'>
                  Engineered for Resilient Hands-On Experimentation
                </h2>
                <p className='font-body-md text-body-md text-slate-600'>
                  Explore the four core hardware domains that elevate the
                  Cortex-X from a classroom toy to an industrial robotics
                  proving ground.
                </p>
              </div>
              <div className='p-space-sm rounded-lg bg-surface-container-lowest border border-border-subtle shadow-sm flex items-center gap-space-sm'>
                <Zap className='size-5 text-amber-500' />

                <span className='font-title-md text-sm text-slate-800 font-semibold'>
                  Magnetic Click-Lock System (Zero Wire Fatigue)
                </span>
              </div>
            </div>
            {/* <!-- 4 Architecture Cards --> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter'>
              {/* <!-- Module 1 --> */}
              <div className='p-space-lg rounded-xl bg-surface-container-lowest border border-border-subtle shadow-sm hover:border-orange-300 hover:shadow-md transition-all flex flex-col justify-between'>
                <div className='space-y-space-md'>
                  <div className='w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-primary-container'>
                    <Eye className='size-7' />
                  </div>
                  <div className='space-y-space-xs'>
                    <span className='font-label-code-sm text-slate-500 uppercase font-semibold'>
                      Subsystem 01
                    </span>
                    <h3 className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                      Neural &amp; Vision Core
                    </h3>
                    <p className='font-body-sm text-body-sm text-slate-600 leading-relaxed'>
                      Onboard 2MP AI camera module with integrated TensorFlow
                      Lite acceleration. Runs color tracking, AprilTag reading,
                      line following, and face detection locally without
                      internet latency.
                    </p>
                  </div>
                </div>
                <div className='mt-space-lg pt-space-md border-t border-slate-100 space-y-2'>
                  <div className='flex justify-between text-body-sm font-body-sm'>
                    <span className='text-slate-500'>Inference Speed</span>
                    <span className='text-slate-900 font-semibold'>
                      28 FPS Local
                    </span>
                  </div>
                  <div className='w-full bg-slate-100 h-1.5 rounded-full overflow-hidden'>
                    <div
                      className='bg-primary-container h-full rounded-full'
                      // style="width: 88%"
                    ></div>
                  </div>
                </div>
              </div>
              {/* <!-- Module 2 --> */}
              <div className='p-space-lg rounded-xl bg-surface-container-lowest border border-border-subtle shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between'>
                <div className='space-y-space-md'>
                  <div className='w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-secondary'>
                    <Radio className='size-7' />
                  </div>
                  <div className='space-y-space-xs'>
                    <span className='font-label-code-sm text-slate-500 uppercase font-semibold'>
                      Subsystem 02
                    </span>
                    <h3 className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                      Sensor Ecosystem
                    </h3>
                    <p className='font-body-sm text-body-sm text-slate-600 leading-relaxed'>
                      Ultrasonic distance telemetry, 9-DOF IMU gyroscopes, IR
                      arrays, and ambient light sensors connected via keyed
                      magnetic snap-fit cables that eliminate short-circuit
                      mistakes entirely.
                    </p>
                  </div>
                </div>
                <div className='mt-space-lg pt-space-md border-t border-slate-100 space-y-2'>
                  <div className='flex justify-between text-body-sm font-body-sm'>
                    <span className='text-slate-500'>
                      Connector Reliability
                    </span>
                    <span className='text-slate-900 font-semibold'>
                      10,000+ Cycles
                    </span>
                  </div>
                  <div className='w-full bg-slate-100 h-1.5 rounded-full overflow-hidden'>
                    <div
                      className='bg-secondary h-full rounded-full'
                      // style="width: 95%"
                    ></div>
                  </div>
                </div>
              </div>
              {/* <!-- Module 3 --> */}
              <div className='p-space-lg rounded-xl bg-surface-container-lowest border border-border-subtle shadow-sm hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between'>
                <div className='space-y-space-md'>
                  <div className='w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600'>
                    <Settings className='size-7' />
                  </div>
                  <div className='space-y-space-xs'>
                    <span className='font-label-code-sm text-slate-500 uppercase font-semibold'>
                      Subsystem 03
                    </span>
                    <h3 className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                      Actuation &amp; Mechanics
                    </h3>
                    <p className='font-body-sm text-body-sm text-slate-600 leading-relaxed'>
                      Hardened all-metal gearboxes, CNC-anodized aluminum
                      chassis rails, high-traction omnidirectional wheels, and
                      precision magnetic encoder servos rated for
                      tournament-grade torque.
                    </p>
                  </div>
                </div>
                <div className='mt-space-lg pt-space-md border-t border-slate-100 space-y-2'>
                  <div className='flex justify-between text-body-sm font-body-sm'>
                    <span className='text-slate-500'>Stall Torque Rating</span>
                    <span className='text-slate-900 font-semibold'>
                      4.8 kg·cm
                    </span>
                  </div>
                  <div className='w-full bg-slate-100 h-1.5 rounded-full overflow-hidden'>
                    <div
                      className='bg-amber-500 h-full rounded-full'
                      // style="width: 82%"
                    ></div>
                  </div>
                </div>
              </div>
              {/* <!-- Module 4 --> */}
              <div className='p-space-lg rounded-xl bg-surface-container-lowest border border-border-subtle shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between'>
                <div className='space-y-space-md'>
                  <div className='w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-secondary'>
                    <SquareCode className='size-7' />
                  </div>
                  <div className='space-y-space-xs'>
                    <span className='font-label-code-sm text-slate-500 uppercase font-semibold'>
                      Subsystem 04
                    </span>
                    <h3 className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                      Dual IDE &amp; Firmware
                    </h3>
                    <p className='font-body-sm text-body-sm text-slate-600 leading-relaxed'>
                      Zero-friction transition from drag-and-drop block coding
                      into production MicroPython and standard C++ toolchains.
                      Complete ROS2 (Robot Operating System) bridge for advanced
                      university labs.
                    </p>
                  </div>
                </div>
                <div className='mt-space-lg pt-space-md border-t border-slate-100 space-y-2'>
                  <div className='flex justify-between text-body-sm font-body-sm'>
                    <span className='text-slate-500'>Browser Flash Speed</span>
                    <span className='text-slate-900 font-semibold'>
                      &lt; 1.2 Seconds
                    </span>
                  </div>
                  <div className='w-full bg-slate-100 h-1.5 rounded-full overflow-hidden'>
                    <div
                      className='bg-secondary h-full rounded-full'
                      // style="width: 90%"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Section 3: Hardware Kits Family Catalog Matrix --> */}
          <section className='max-w-330 mx-auto px-4 md:px-8 lg:px-12 py-space-3xl'>
            <div className='text-center max-w-3xl mx-auto space-y-space-xs mb-space-2xl'>
              <span className='font-label-code-sm text-secondary uppercase tracking-wider block font-semibold'>
                Complete Hardware Lineup
              </span>
              <h2 className='font-headline-lg text-headline-lg text-slate-900 tracking-tight font-bold'>
                Robotics Platforms Built for Every Stage
              </h2>
              <p className='font-body-md text-body-md text-slate-600'>
                From foundational elementary logic to university-level swarming
                algorithms, discover modular STEM hardware crafted for
                longevity.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter'>
              {/* <!-- Kit 1: Spark --> */}
              <div className='p-space-lg rounded-xl bg-surface-container-lowest border border-border-subtle shadow-sm flex flex-col justify-between hover:shadow-md transition-all'>
                <div className='space-y-space-md'>
                  <div className='relative w-full h-44 rounded-lg overflow-hidden bg-slate-100 border border-slate-200'>
                    <Image
                      className='w-full h-full object-cover'
                      alt='Playful yet rugged colorful magnetic robotics block kit designed for early learners aged 6 to 10 with oversized gears, silicone wheels and friendly LED expression screen'
                      src={'/image/obo_spark_platform_product.jpg'}
                      fill
                    />
                  </div>
                  <div className='space-y-space-xs'>
                    <div className='flex items-center justify-between'>
                      <span className='font-label-code-sm text-slate-500 uppercase font-semibold'>
                        Ages 6-10 • Grade 1-5
                      </span>
                      <span className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                        $189
                      </span>
                    </div>
                    <h3 className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                      Obo Spark Platform
                    </h3>
                    <p className='font-body-sm text-body-sm text-slate-600 leading-relaxed'>
                      Tactile magnetic snap blocks, screen-free mission tiles,
                      and story-driven coding cards. Introduces sequential logic
                      without computer requirement.
                    </p>
                  </div>
                  <ul className='text-body-sm font-body-sm text-slate-600 space-y-1 pt-1'>
                    <li className='flex items-center gap-2'>
                      <Check className='size-4 text-secondary' />
                      24 Magnetic Smart Modules
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='size-4 text-secondary' />
                      Tactile Tile Reader Included
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='size-4 text-secondary' />
                      20 Story Mission Cards
                    </li>
                  </ul>
                </div>
                <div className='pt-space-lg'>
                  <a
                    className='w-full inline-flex items-center justify-center font-title-md text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 py-space-sm rounded-lg transition-all text-center border border-slate-200'
                    href='#'
                  >
                    View Spark Platform
                  </a>
                </div>
              </div>
              {/* <!-- Kit 2: Cortex-X (Featured) --> */}
              <div className='p-space-lg rounded-xl bg-surface-container-lowest border-2 border-primary-container shadow-lg flex flex-col justify-between relative transform -translate-y-2'>
                {/* <!-- Featured Badge --> */}
                <div className='absolute z-10 -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-code-sm font-bold uppercase tracking-wider shadow-sm'>
                  Most Popular in Secondary
                </div>
                <div className='space-y-space-md pt-2'>
                  <div className='relative w-full h-44 rounded-lg overflow-hidden bg-slate-100 border border-slate-200'>
                    <Image
                      className='object-cover'
                      alt='Futuristic black and electric orange modular educational robot with multi-jointed articulated arm and illuminated dual-core processor chassis'
                      src='/image/obo_cortex_x_product.jpg'
                      fill
                    />
                  </div>
                  <div className='space-y-space-xs'>
                    <div className='flex items-center justify-between'>
                      <span className='font-label-code-sm text-primary uppercase font-bold'>
                        Ages 11-16+ • Grade 6-12
                      </span>
                      <span className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                        $349
                      </span>
                    </div>
                    <h3 className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                      Obo Cortex-X
                    </h3>
                    <p className='font-body-sm text-body-sm text-slate-600 leading-relaxed'>
                      Flagship multi-purpose tournament and mechatronics lab
                      kit. AI Vision Camera, dual-core ESP32-S3, high-torque
                      smart servos, and 30+ modules.
                    </p>
                  </div>
                  <ul className='text-body-sm font-body-sm text-slate-600 space-y-1 pt-1'>
                    <li className='flex items-center gap-2'>
                      <Check className='size-4 text-primary' />
                      Dual Blockly &amp; MicroPython
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='size-4 text-primary' />
                      Neural AI Vision Unit
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='size-4 text-primary' />
                      36 Standard-Aligned Units
                    </li>
                  </ul>
                </div>
                <div className='pt-space-lg'>
                  <a
                    className='w-full inline-flex items-center justify-center font-title-md text-sm font-bold bg-primary-container text-on-primary-container py-space-sm rounded-lg shadow-sm hover:brightness-105 transition-all text-center'
                    href='#'
                  >
                    Configure Cortex-X
                  </a>
                </div>
              </div>
              {/* <!-- Kit 3: Swarm & Drone Lab --> */}
              <div className='p-space-lg rounded-xl bg-surface-container-lowest border border-border-subtle shadow-sm flex flex-col justify-between hover:shadow-md transition-all'>
                <div className='space-y-space-md'>
                  <div className='relative w-full h-44 rounded-lg overflow-hidden bg-slate-100 border border-slate-200'>
                    <Image
                      className=' object-cover'
                      alt='Duo setup of a carbon-fiber quadcopter drone and ground rover operating together in an educational research lab setting with optical positioning sensors'
                      src='/image/obo_swarm_drone_lab_product.jpg'
                      fill
                    />
                  </div>
                  <div className='space-y-space-xs'>
                    <div className='flex items-center justify-between'>
                      <span className='font-label-code-sm text-slate-500 uppercase font-semibold'>
                        Ages 14-18+ • University
                      </span>
                      <span className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                        $599
                      </span>
                    </div>
                    <h3 className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                      Obo Swarm &amp; Drone Lab
                    </h3>
                    <p className='font-body-sm text-body-sm text-slate-600 leading-relaxed'>
                      Autonomous drone and ground rover coordination kit.
                      ESP-NOW mesh networking, optical flow indoor hovering, and
                      native ROS2 communication nodes.
                    </p>
                  </div>
                  <ul className='text-body-sm font-body-sm text-slate-600 space-y-1 pt-1'>
                    <li className='flex items-center gap-2'>
                      <Check className='size-4 text-secondary' />
                      Multi-Agent Mesh Protocol
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='size-4 text-secondary' />
                      Optical Flow Stabilized Quad
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='size-4 text-secondary' />
                      ROS2 Humble Package Sync
                    </li>
                  </ul>
                </div>
                <div className='pt-space-lg'>
                  <a
                    className='w-full inline-flex items-center justify-center font-title-md text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 py-space-sm rounded-lg transition-all text-center border border-slate-200'
                    href='#'
                  >
                    View Swarm Lab
                  </a>
                </div>
              </div>
              {/* <!-- Kit 4: Classroom Parts Vault --> */}
              <div className='p-space-lg rounded-xl bg-surface-container-lowest border border-border-subtle shadow-sm flex flex-col justify-between hover:shadow-md transition-all'>
                <div className='space-y-space-md'>
                  <div className='relative h-44 rounded-lg overflow-hidden bg-slate-100 border border-slate-200'>
                    <Image
                      className='object-cover'
                      alt='Heavy duty classroom storage cart with organized clear compartmentalized pull-out drawers filled with replacement robotic gears, motors, wiring, and nuts'
                      src='/image/lab_infrastructure_product.jpg'
                      fill
                    />
                  </div>
                  <div className='space-y-space-xs'>
                    <div className='flex items-center justify-between'>
                      <span className='font-label-code-sm text-slate-500 uppercase font-semibold'>
                        Lab Infrastructure
                      </span>
                      <span className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                        $850
                      </span>
                    </div>
                    <h3 className='font-headline-sm text-headline-sm text-slate-900 font-bold'>
                      Parts &amp; Cart Vault
                    </h3>
                    <p className='font-body-sm text-body-sm text-slate-600 leading-relaxed'>
                      Heavy-duty rolling laboratory replenishment vault. Over
                      400 spare brackets, extra titanium servos, magnetic
                      cables, and dual-voltage charging hubs.
                    </p>
                  </div>
                  <ul className='text-body-sm font-body-sm text-slate-600 space-y-1 pt-1'>
                    <li className='flex items-center gap-2'>
                      <Check className='size-4 text-secondary' />
                      400+ Replacement Components
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='size-4 text-secondary' />
                      Lockable Mobile Cart
                    </li>
                    <li className='flex items-center gap-2'>
                      <Check className='size-4 text-secondary' />
                      12x Swappable Battery Modules
                    </li>
                  </ul>
                </div>
                <div className='pt-space-lg'>
                  <a
                    className='w-full inline-flex items-center justify-center font-title-md text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 py-space-sm rounded-lg transition-all text-center border border-slate-200'
                    href='#'
                  >
                    Explore Replenishment
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Section 4: Classroom Integration & Educator Benefits --> */}
          <section className='max-w-330 mx-auto px-4 md:px-8 lg:px-12 py-space-3xl'>
            <div className='p-space-xl md:p-space-2xl rounded-2xl bg-surface-container-lowest border border-border-subtle shadow-sm'>
              <div className='grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center'>
                <div className='lg:col-span-5 space-y-space-md'>
                  <span className='font-label-code-sm text-primary uppercase tracking-wider block font-semibold'>
                    Pedagogical Architecture
                  </span>
                  <h2 className='font-headline-lg text-headline-lg text-slate-900 tracking-tight font-bold'>
                    Why Educators &amp; Lab Directors Trust Obo
                  </h2>
                  <p className='font-body-md text-body-md text-slate-600 leading-relaxed'>
                    We eliminate common classroom pain points: no software
                    installations locked behind school IT firewalls, no delicate
                    components snapping mid-lesson, and fully turnkey curriculum
                    plans.
                  </p>
                  <div className='pt-space-sm space-y-space-md'>
                    <div className='flex items-start gap-space-sm'>
                      <div className='w-10 h-10 rounded-lg bg-blue-100 text-secondary flex items-center justify-center shrink-0'>
                        <CloudCheck className='size-6' />
                      </div>
                      <div>
                        <h4 className='font-title-md text-sm text-slate-900 font-bold'>
                          Zero-Install WebBluetooth IDE
                        </h4>
                        <p className='font-body-sm text-body-sm text-slate-600'>
                          Runs 100% inside Chrome, Edge, or Chromebooks.
                          One-click wireless sync without driver installs.
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-space-sm'>
                      <div className='w-10 h-10 rounded-lg bg-orange-100 text-primary-container flex items-center justify-center shrink-0'>
                        <SquareMenu className='size-6' />
                      </div>
                      <div>
                        <h4 className='font-title-md text-sm text-slate-900 font-bold'>
                          36 NGSS &amp; CSTA Mapped Units
                        </h4>
                        <p className='font-body-sm text-body-sm text-slate-600'>
                          Step-by-step teacher slides, student project rubrics,
                          and video engineering design challenges.
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-space-sm'>
                      <div className='w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0'>
                        <GraduationCap className='size-6' />
                      </div>
                      <div>
                        <h4 className='font-title-md text-sm text-slate-900 font-bold'>
                          4-Hour Certified PD Included
                        </h4>
                        <p className='font-body-sm text-body-sm text-slate-600'>
                          Every multi-pack includes live instructor onboarding
                          to ensure teachers feel confident on day one.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='lg:col-span-7'>
                  {/* <!-- Educational Workflow Data Visualization Graphic --> */}
                  <div className='rounded-xl bg-slate-50 border border-slate-200 p-space-lg shadow-sm space-y-space-md'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <span className='w-3 h-3 rounded-full bg-red-500'></span>
                        <span className='w-3 h-3 rounded-full bg-amber-500'></span>
                        <span className='w-3 h-3 rounded-full bg-blue-500'></span>
                        <span className='font-label-code-sm text-slate-500 ml-2 font-semibold'>
                          OBO TEACHER STUDIO // CLASSROOM METRICS
                        </span>
                      </div>
                      <span className='px-2 py-0.5 rounded bg-blue-100 text-secondary font-label-code-sm font-semibold'>
                        LIVE LAB SYNC
                      </span>
                    </div>
                    {/* <!-- Telemetry & Workflow Grid --> */}
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-2'>
                      <div className='p-space-md rounded-lg bg-white border border-slate-200 shadow-sm'>
                        <span className='font-label-code-sm text-slate-500 uppercase block font-semibold'>
                          Active Pods
                        </span>
                        <span className='font-headline-md text-headline-md text-slate-900 font-bold block mt-1'>
                          24 / 24
                        </span>
                        <span className='text-body-sm font-body-sm text-secondary flex items-center gap-1 mt-1 font-semibold'>
                          <Wifi className='size-3.5' />
                          100% Signal
                        </span>
                      </div>
                      <div className='p-space-md rounded-lg bg-white border border-slate-200 shadow-sm'>
                        <span className='font-label-code-sm text-slate-500 uppercase block font-semibold'>
                          Avg Setup Time
                        </span>
                        <span className='font-headline-md text-headline-md text-slate-900 font-bold block mt-1'>
                          3.5 min
                        </span>
                        <span className='text-body-sm font-body-sm text-primary flex items-center gap-1 mt-1 font-semibold'>
                          <Timer className='size-3.5' />
                          -75% vs rivals
                        </span>
                      </div>
                      <div className='p-space-md rounded-lg bg-white border border-slate-200 shadow-sm'>
                        <span className='font-label-code-sm text-slate-500 uppercase block font-semibold'>
                          Curriculum Path
                        </span>
                        <span className='font-headline-md text-headline-md text-slate-900 font-bold block mt-1'>
                          Unit 4: AI
                        </span>
                        <span className='text-body-sm font-body-sm text-slate-500 block mt-1'>
                          Computer Vision
                        </span>
                      </div>
                    </div>
                    {/* <!-- Inline SVG Infographic: Student Progression Curve --> */}
                    <div className='p-space-md rounded-lg bg-white border border-slate-200 shadow-sm'>
                      <div className='flex items-center justify-between mb-2'>
                        <span className='font-title-md text-sm text-slate-900 font-bold'>
                          Curriculum Mastery Progression Curve
                        </span>
                        <span className='font-label-code-sm text-slate-500'>
                          Grade 6 through AP Mechatronics
                        </span>
                      </div>
                      <div className='w-full h-32 flex items-end'>
                        <svg
                          className='w-full h-full text-secondary'
                          fill='none'
                          // preserveaspectratio="none"
                          viewBox='0 0 600 120'
                        >
                          <defs>
                            {/* <lineargradient
                              id="gradCurve"
                              x1="0%"
                              x2="0%"
                              y1="0%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                stop-color="#0051d5"
                                stop-opacity="0.25"
                              ></stop>
                              <stop
                                offset="100%"
                                stop-color="#0051d5"
                                stop-opacity="0.0"
                              ></stop>
                            </lineargradient> */}
                          </defs>
                          <path
                            d='M 0 100 Q 150 90 250 60 T 450 30 T 600 10 L 600 120 L 0 120 Z'
                            fill='url(#gradCurve)'
                          ></path>
                          <path
                            d='M 0 100 Q 150 90 250 60 T 450 30 T 600 10'
                            fill='none'
                            stroke='#0051d5'
                            strokeWidth='3'
                          ></path>
                          {/* <!-- Visual Nodes --> */}
                          <circle cx='0' cy='100' fill='#0051d5' r='5'></circle>
                          <circle
                            cx='250'
                            cy='60'
                            fill='#cc4900'
                            r='5'
                          ></circle>
                          <circle
                            cx='450'
                            cy='30'
                            fill='#d97706'
                            r='5'
                          ></circle>
                          <circle
                            cx='600'
                            cy='10'
                            fill='#a33900'
                            r='5'
                          ></circle>
                        </svg>
                      </div>
                      <div className='flex justify-between font-label-code-sm text-slate-500 mt-2'>
                        <span>Level 1: Visual Logic</span>
                        <span>Level 2: Telemetry &amp; Sensors</span>
                        <span>Level 3: MicroPython Motors</span>
                        <span>Level 4: ROS2 &amp; Vision</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Section 5: Technical Specifications Table --> */}
          <section className='max-w-330 mx-auto px-4 md:px-8 lg:px-12 py-space-3xl'>
            <div className='space-y-space-xs mb-space-xl'>
              <span className='font-label-code-sm text-primary uppercase tracking-wider block font-semibold'>
                Deep Technical Verification
              </span>
              <h2 className='font-headline-lg text-headline-lg text-slate-900 tracking-tight font-bold'>
                Obo Cortex-X Technical Specifications
              </h2>
              <p className='font-body-md text-body-md text-slate-600'>
                Full mechanical, electronic, and software compliance
                specifications for engineering educators and IT administrators.
              </p>
            </div>
            <div className='rounded-xl overflow-hidden bg-surface-container-lowest border border-border-subtle shadow-sm'>
              <div className='overflow-x-auto'>
                <table className='w-full text-left font-body-sm text-body-sm'>
                  <thead className='bg-slate-100 text-label-code-sm font-label-code-sm uppercase text-slate-700 border-b border-border-subtle'>
                    <tr>
                      <th className='px-space-lg py-space-md font-bold'>
                        Parameter Domain
                      </th>
                      <th className='px-space-lg py-space-md font-bold'>
                        Technical Detail / Architecture
                      </th>
                      <th className='px-space-lg py-space-md font-bold'>
                        Classroom Benefit
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-slate-200 text-slate-900'>
                    <tr className='hover:bg-slate-50 transition-colors'>
                      <td className='px-space-lg py-space-md font-semibold text-secondary'>
                        Central Microcontroller
                      </td>
                      <td className='px-space-lg py-space-md text-slate-800'>
                        Dual-Core Xtensa 32-bit LX7 @ 240MHz, 512KB SRAM, 8MB
                        PSRAM, 16MB SPI Flash
                      </td>
                      <td className='px-space-lg py-space-md text-slate-600'>
                        Instant compiling and onboard storage for multiple
                        autonomous algorithms without memory overflow.
                      </td>
                    </tr>
                    <tr className='hover:bg-slate-50 transition-colors'>
                      <td className='px-space-lg py-space-md font-semibold text-secondary'>
                        Wireless Protocols
                      </td>
                      <td className='px-space-lg py-space-md text-slate-800'>
                        Bluetooth 5.0 LE (WebBluetooth support) + Wi-Fi 802.11
                        b/g/n + ESP-NOW Mesh Protocol
                      </td>
                      <td className='px-space-lg py-space-md text-slate-600'>
                        Instant pairing from student laptops with zero
                        installation. Direct peer-to-peer robot communication.
                      </td>
                    </tr>
                    <tr className='hover:bg-slate-50 transition-colors'>
                      <td className='px-space-lg py-space-md font-semibold text-secondary'>
                        Battery &amp; Power Architecture
                      </td>
                      <td className='px-space-lg py-space-md text-slate-800'>
                        7.4V 3200mAh LiPo Quick-Release Cartridge with USB-C PD
                        Fast Charging (18W)
                      </td>
                      <td className='px-space-lg py-space-md text-slate-600'>
                        8-hour continuous runtime per charge. Swappable battery
                        packs eliminate downtime between periods.
                      </td>
                    </tr>
                    <tr className='hover:bg-slate-50 transition-colors'>
                      <td className='px-space-lg py-space-md font-semibold text-secondary'>
                        Actuators &amp; Drive System
                      </td>
                      <td className='px-space-lg py-space-md text-slate-800'>
                        6x Metal-Gear Digital Servos (180° rotation, 0.12s/60°
                        speed) + 2x High-Torque DC Encoders
                      </td>
                      <td className='px-space-lg py-space-md text-slate-600'>
                        Immunity to stripped plastic gears during rigorous
                        competition collisions.
                      </td>
                    </tr>
                    <tr className='hover:bg-slate-50 transition-colors'>
                      <td className='px-space-lg py-space-md font-semibold text-secondary'>
                        Sensor Bus Architecture
                      </td>
                      <td className='px-space-lg py-space-md text-slate-800'>
                        Foolproof 4-pin Magnetic Quick-Snap I2C / UART Bus with
                        reverse polarity protection
                      </td>
                      <td className='px-space-lg py-space-md text-slate-600'>
                        Students can swap sensors in under 2 seconds.
                        Inversion-proof plugs prevent burnt boards.
                      </td>
                    </tr>
                    <tr className='hover:bg-slate-50 transition-colors'>
                      <td className='px-space-lg py-space-md font-semibold text-secondary'>
                        Chassis Construction
                      </td>
                      <td className='px-space-lg py-space-md text-slate-800'>
                        CNC T6 Anodized Aluminum Skeleton Rails with
                        Shock-Absorbent Injection ABS shell
                      </td>
                      <td className='px-space-lg py-space-md text-slate-600'>
                        Drop-tested from 1.5 meters onto classroom linoleum with
                        zero mechanical distortion.
                      </td>
                    </tr>
                    <tr className='hover:bg-slate-50 transition-colors'>
                      <td className='px-space-lg py-space-md font-semibold text-secondary'>
                        Safety &amp; Compliance
                      </td>
                      <td className='px-space-lg py-space-md text-slate-800'>
                        FCC Part 15 Class B, CE-EMC, RoHS Lead-Free, UN38.3
                        Battery Certified, ASTM F963-17
                      </td>
                      <td className='px-space-lg py-space-md text-slate-600'>
                        Fully cleared for public school safety audits and air
                        shipping across North America and EU.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          {/* <!-- Section 6: Frequently Asked Questions (Accordion) --> */}
          <section className='max-w-330 mx-auto px-4 md:px-8 lg:px-12 py-space-3xl'>
            <div className='text-center max-w-2xl mx-auto space-y-space-xs mb-space-2xl'>
              <span className='font-label-code-sm text-secondary uppercase tracking-wider block font-semibold'>
                Procurement &amp; Implementation
              </span>
              <h2 className='font-headline-lg text-headline-lg text-slate-900 tracking-tight font-bold'>
                Frequently Asked Questions
              </h2>
              <p className='font-body-md text-body-md text-slate-600'>
                Everything district procurement officers, grant coordinators,
                and department heads need to know.
              </p>
            </div>
            <div className='max-w-3xl mx-auto space-y-space-md'>
              {/* <!-- FAQ Item 1 --> */}
              <div className='rounded-xl bg-surface-container-lowest border border-border-subtle overflow-hidden shadow-sm'>
                <button
                  className='w-full p-space-lg flex items-center justify-between text-left hover:bg-slate-50 transition-colors'
                  // onclick="toggleFaq('faq-1')"
                >
                  <span className='font-title-md text-base text-slate-900 font-semibold'>
                    Can we purchase Obo hardware through educational purchase
                    orders (POs) and vendor bids?
                  </span>
                  <ChevronDown className='text-secondary' />
                </button>
                <div
                  className='hidden px-space-lg pb-space-lg font-body-md text-body-md text-slate-600 border-t border-slate-100'
                  id='faq-1'
                >
                  Yes. Obo Technology is an approved statewide STEM vendor
                  across all 50 U.S. states and accepts standard school district
                  Purchase Orders (Net 30 terms). We also provide W-9 forms,
                  sole-source justification letters, and automated quotes for
                  board approval.
                </div>
              </div>
              {/* <!-- FAQ Item 2 --> */}
              <div className='rounded-xl bg-surface-container-lowest border border-border-subtle overflow-hidden shadow-sm'>
                <button
                  className='w-full p-space-lg flex items-center justify-between text-left hover:bg-slate-50 transition-colors'
                  // onclick="toggleFaq('faq-2')"
                >
                  <span className='font-title-md text-base text-slate-900 font-semibold'>
                    Does the Cortex-X require any software installs or IT
                    administrator permissions?
                  </span>
                  <ChevronDown className='text-secondary' />
                </button>
                <div
                  className='hidden px-space-lg pb-space-lg font-body-md text-body-md text-slate-600 border-t border-slate-100'
                  id='faq-2'
                >
                  None whatsoever. The Obo Studio web IDE runs completely
                  client-side in modern web browsers (Google Chrome, Microsoft
                  Edge, Safari). It pairs wirelessly using the standard
                  WebBluetooth protocol. No executable downloads, no local
                  driver installation, and no firewall exceptions required.
                </div>
              </div>
              {/* <!-- FAQ Item 3 --> */}
              <div className='rounded-xl bg-surface-container-lowest border border-border-subtle overflow-hidden shadow-sm'>
                <button
                  className='w-full p-space-lg flex items-center justify-between text-left hover:bg-slate-50 transition-colors'
                  // onclick="toggleFaq('faq-3')"
                >
                  <span className='font-title-md text-base text-slate-900 font-semibold'>
                    How does the curriculum integrate with state and national
                    science standards?
                  </span>
                  <ChevronDown className='text-secondary' />
                </button>
                <div
                  className='hidden px-space-lg pb-space-lg font-body-md text-body-md text-slate-600 border-t border-slate-100'
                  id='faq-3'
                >
                  All 36 project units are mapped line-by-line to NGSS (Next
                  Generation Science Standards - Engineering Design MS-ETS1
                  &amp; HS-ETS1), CSTA (Computer Science Teachers Association
                  standards), and ISTE student rubrics. Each unit includes
                  teacher answer keys, printable student lab sheets, and grading
                  rubrics.
                </div>
              </div>
              {/* <!-- FAQ Item 4 --> */}
              <div className='rounded-xl bg-surface-container-lowest border border-border-subtle overflow-hidden shadow-sm'>
                <button
                  className='w-full p-space-lg flex items-center justify-between text-left hover:bg-slate-50 transition-colors'
                  // onclick="toggleFaq('faq-4')"
                >
                  <span className='font-title-md text-base text-slate-900 font-semibold'>
                    What happens if a student loses a component or strips a
                    cable?
                  </span>
                  <ChevronDown className='text-secondary' />
                </button>
                <div
                  className='hidden px-space-lg pb-space-lg font-body-md text-body-md text-slate-600 border-t border-slate-100'
                  id='faq-4'
                >
                  Every Classroom Bundle includes an auxiliary 'Emergency
                  Spares' pack with extra servos, chassis rails, magnetic
                  connectors, and fasteners. Furthermore, our Education Support
                  portal allows verified institutions to order individual
                  replacement pieces with free shipping in 48 hours.
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Section 7: Final High-Conversion Institutional CTA Banner --> */}
          <section className='max-w-330 mx-auto px-4 md:px-8 lg:px-12 pt-space-2xl pb-space-3xl'>
            <div className='relative rounded-2xl overflow-hidden bg-linear-to-r from-orange-50 via-white to-blue-50 border border-slate-200 p-space-xl md:p-space-3xl shadow-md'>
              <div className='absolute -right-20 -bottom-20 w-96 h-96 bg-orange-200/40 rounded-full blur-[100px] pointer-events-none'></div>
              <div className='absolute -left-20 -top-20 w-80 h-80 bg-blue-200/40 rounded-full blur-[100px] pointer-events-none'></div>
              <div className='relative z-10 max-w-3xl space-y-space-md'>
                <span className='font-label-code-sm text-primary uppercase tracking-widest block font-bold'>
                  Empower Tomorrow's Engineers
                </span>
                <h2 className='font-headline-lg text-3xl sm:text-4xl lg:text-[44px] text-slate-900 tracking-tight font-bold'>
                  Transform Your District's STEM Lab Today
                </h2>
                <p className='font-body-lg text-slate-600 leading-relaxed'>
                  Reserve a complimentary 30-day classroom pilot kit for your
                  school, complete with sample mechatronics lesson plans and
                  direct technical support.
                </p>
                <div className='flex flex-col sm:flex-row items-center gap-space-md pt-space-md'>
                  <a
                    className='w-full sm:w-auto inline-flex items-center justify-center gap-2 font-title-md text-sm font-bold bg-primary-container text-on-primary-container px-space-xl py-space-md rounded-lg shadow-sm hover:brightness-105 active:scale-95 transition-all text-center'
                    href='#'
                  >
                    <Archive className='size-5' />
                    Book 30-Day Classroom Trial
                  </a>
                  <a
                    className='w-full sm:w-auto inline-flex items-center justify-center gap-2 font-title-md text-sm font-semibold bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 px-space-lg py-space-md rounded-lg shadow-sm transition-all text-center'
                    href='#'
                  >
                    <Headset className='size-5' />
                    Talk to an Education Specialist
                  </a>
                </div>
                <div className='flex items-center gap-space-lg text-body-sm font-body-sm text-slate-600 pt-space-sm flex-wrap'>
                  <div className='flex items-center gap-2'>
                    <ShieldCheck className='size-5 text-amber-500' />

                    <span>100% Free Shipping on Pilot Kits</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <LockKeyhole className='size-5 text-secondary' />

                    <span>EdTech Privacy &amp; COPPA Compliant</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <RefreshCcw className='size-5 text-primary' />

                    <span>3-Year Hardware Warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
