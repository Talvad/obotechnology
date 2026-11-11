import {
  BuildingComplex,
  CalendarCheck,
  ChevronRight,
  CloudOff,
  Download,
  Handshake,
  House,
  Landmark,
  Lock,
  LockKeyhole,
  Minus,
  Package2,
  Plug,
  Plus,
  Receipt,
  RobotArm,
  ShieldCheck,
  SmartphoneUserRound,
  Sparkles,
  SquareCheckBig,
  Star,
  Tag,
  Truck,
  User,
  Verified,
  Video,
} from 'lucide-react';
import Image from 'next/image';

export default function RequestDemoPage() {
  return (
    <main className='w-full pt-20 bg-slate-50 min-h-screen'>
      <div className='flex flex-col w-full'>
        <div className='relative w-full overflow-hidden'>
          <div className='absolute -top-40 -left-40 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none'></div>
          <div className='absolute top-1/3 -right-40 w-125 h-125 rounded-full bg-primary/5 blur-[150px] pointer-events-none'></div>
          <div className='absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none'></div>
          <div className='max-w-330 mx-auto px-4 md:px-8 lg:px-12 pt-10 pb-16 relative z-10'>
            <section className='space-y-4 mb-10'>
              <div className='flex flex-wrap items-center gap-2 text-slate-500 text-xs'>
                <a
                  className='font-label-ui text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1'
                  data-path='home'
                  href='#'
                >
                  <House className='size-4' />
                  Portal
                </a>
                <ChevronRight className='size-3.5' />

                <span className='font-label-ui text-slate-600'>
                  Procurement Engine
                </span>
                <ChevronRight className='size-3.5' />
                <span className='font-label-ui uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full font-semibold'>
                  District Pilot &amp; Quote v4.2
                </span>
              </div>
              <div className='flex flex-col lg:flex-row lg:items-end justify-between gap-6'>
                <div className='space-y-2 max-w-3xl'>
                  <div className='flex items-center gap-2 text-primary font-label-ui tracking-wider uppercase font-semibold text-xs'>
                    <span className='inline-block w-2 h-2 rounded-full bg-primary animate-ping'></span>
                    Institutional Tier Access // 30-Day Physical Evaluation
                    Guarantee
                  </div>
                  <h1 className='font-headline-lg text-slate-900 tracking-tight text-3xl sm:text-4xl font-bold'>
                    Institutional Robotics Procurement &amp; Classroom Pilot
                  </h1>
                  <p className='font-body-lg text-slate-600 leading-relaxed'>
                    Equip your STEM labs with modular kinematic rovers,
                    ROS2-enabled quad-copters, and turnkey standards-aligned
                    mechatronics curricula. Calculate district discounts
                    instantly or lock an official 60-day price quote.
                  </p>
                </div>
                <div className='flex flex-wrap items-center gap-2 shrink-0'>
                  <div className='flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm'>
                    <ShieldCheck className='size-4 text-secondary' />

                    <span className='font-label-ui text-slate-700'>
                      FERPA / COPPA Compliant
                    </span>
                  </div>
                  <div className='flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm'>
                    <Landmark className='size-4 text-amber-600' />

                    <span className='font-label-ui text-slate-700'>
                      Title I &amp; Perkins V Eligible
                    </span>
                  </div>
                  <div className='flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm'>
                    <SquareCheckBig className='size-4 text-primary' />

                    <span className='font-label-ui text-slate-700'>
                      Sole Source &amp; W-9 Ready
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
              <div className='lg:col-span-8 space-y-8'>
                <div className='bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center justify-between gap-4'>
                  <div className='flex items-center gap-3 flex-1'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-headline-sm text-sm font-bold shrink-0'>
                      1
                    </div>
                    <div className='min-w-0'>
                      <span className='font-label-ui text-slate-400 uppercase text-[11px] block tracking-wider'>
                        Phase 1
                      </span>
                      <span className='font-title-md text-slate-900 block truncate'>
                        Institutional Profile
                      </span>
                    </div>
                  </div>
                  <div className='w-8 h-0.5 bg-slate-200 shrink-0 hidden sm:block'></div>
                  <div className='flex items-center gap-3 flex-1'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-headline-sm text-sm font-bold shrink-0'>
                      2
                    </div>
                    <div className='min-w-0'>
                      <span className='font-label-ui text-slate-400 uppercase text-[11px] block tracking-wider'>
                        Phase 2
                      </span>
                      <span className='font-title-md text-slate-900 block truncate'>
                        Hardware &amp; Bundles
                      </span>
                    </div>
                  </div>
                  <div className='w-8 h-0.5 bg-slate-200 shrink-0 hidden sm:block'></div>
                  <div className='flex items-center gap-3 flex-1'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-400 font-headline-sm text-sm font-bold shrink-0'>
                      3
                    </div>
                    <div className='min-w-0'>
                      <span className='font-label-ui text-slate-400 uppercase text-[11px] block tracking-wider'>
                        Phase 3
                      </span>
                      <span className='font-title-md text-slate-600 block truncate'>
                        Pilot Logistics
                      </span>
                    </div>
                  </div>
                </div>
                <form
                  className='space-y-8'
                  id='procurement-form'
                  // onsubmit="event.preventDefault()"
                >
                  <section className='bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden'>
                    <div className='flex items-center justify-between border-b border-slate-100 pb-4'>
                      <div className='space-y-1'>
                        <div className='flex items-center gap-2'>
                          <BuildingComplex className='text-primary size-6' />

                          <h2 className='font-headline-sm text-slate-900 text-xl font-bold'>
                            Step 1: District &amp; Academy Verification
                          </h2>
                        </div>
                        <p className='font-body-sm text-slate-500'>
                          Official institutional email unlocks tier-3 tax
                          exemption and complimentary pilot shipping.
                        </p>
                      </div>
                      <span className='font-label-ui uppercase tracking-wider text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded text-xs font-semibold'>
                        Required
                      </span>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div className='space-y-1.5'>
                        <label
                          className='font-label-ui text-slate-700 text-xs uppercase tracking-wide block'
                          htmlFor='inst-name'
                        >
                          School / District / Academy Name *
                        </label>
                        <input
                          className='w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-body-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors'
                          id='inst-name'
                          placeholder='e.g. Austin Independent School District'
                          required
                          type='text'
                        />
                      </div>
                      <div className='space-y-1.5'>
                        <label
                          className='font-label-ui text-slate-700 text-xs uppercase tracking-wide block'
                          htmlFor='inst-role'
                        >
                          Professional Title &amp; Role *
                        </label>
                        <select
                          className='w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors'
                          id='inst-role'
                          required
                        >
                          <option disabled value=''>
                            Select institutional title
                          </option>
                          <option value='district-stem'>
                            District STEM / CTE Coordinator
                          </option>
                          <option value='lab-director'>
                            FabLab / Robotics Lab Director
                          </option>
                          <option value='superintendent'>
                            Superintendent / Assistant Superintendent
                          </option>
                          <option value='curriculum-dir'>
                            Director of Curriculum &amp; Instruction
                          </option>
                          <option value='higher-ed-dean'>
                            Higher Ed Dean / Mechatronics Faculty
                          </option>
                          <option value='stem-lead'>
                            K-12 Robotics Team Lead / Head Coach
                          </option>
                          <option value='procurement-officer'>
                            Purchasing Agent / Procurement Officer
                          </option>
                        </select>
                      </div>
                      <div className='space-y-1.5'>
                        <label
                          className='font-label-ui text-slate-700 text-xs uppercase tracking-wide block'
                          htmlFor='work-email'
                        >
                          Institutional Email (.edu / .k12 / district domain) *
                        </label>
                        <input
                          className='w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-body-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors'
                          id='work-email'
                          placeholder='coordinator@district.k12.tx.us'
                          required
                          type='email'
                        />
                      </div>
                      <div className='space-y-1.5'>
                        <label
                          className='font-label-ui text-slate-700 text-xs uppercase tracking-wide block'
                          htmlFor='phone-number'
                        >
                          Direct Direct Extension / Cell *
                        </label>
                        <input
                          className='w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-body-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors'
                          id='phone-number'
                          placeholder='+1 (512) 890-4100'
                          required
                          type='tel'
                        />
                      </div>
                      <div className='space-y-1.5'>
                        <label
                          className='font-label-ui text-slate-700 text-xs uppercase tracking-wide block'
                          htmlFor='zip-code'
                        >
                          State / Zip / Postal Code *
                        </label>
                        <input
                          className='w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-body-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors'
                          id='zip-code'
                          placeholder='78701'
                          required
                          type='text'
                        />
                      </div>
                      <div className='space-y-1.5'>
                        <label
                          className='font-label-ui text-slate-700 text-xs uppercase tracking-wide block'
                          htmlFor='student-reach'
                        >
                          Anticipated Student Reach *
                        </label>
                        <select
                          className='w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors'
                          id='student-reach'
                          required
                        >
                          <option disabled value=''>
                            Target annual student cohort
                          </option>
                          <option value='pilot'>
                            Single Classroom Pilot (&lt; 30 students)
                          </option>
                          <option value='single-school'>
                            Single School Expansion (50 – 250 students)
                          </option>
                          <option value='multi-school'>
                            Cluster / Multi-School (250 – 1,000 students)
                          </option>
                          <option value='district-wide'>
                            District-Wide Deployment (1,000+ students)
                          </option>
                        </select>
                      </div>
                    </div>
                  </section>
                  <section className='bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-6'>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4'>
                      <div>
                        <div className='flex items-center gap-2'>
                          <RobotArm className='text-secondary size-6' />

                          <h2 className='font-headline-sm text-slate-900 text-xl font-bold'>
                            Step 2: Hardware Fleet &amp; Lab Configuration
                          </h2>
                        </div>
                        <p className='font-body-sm text-slate-500'>
                          Quantities automatically apply district volume
                          brackets (10-packs bundle discounts included).
                        </p>
                      </div>
                      <div className='inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full text-secondary font-label-ui uppercase text-[11px] font-semibold'>
                        <Sparkles className='size-4' />
                        Auto-Calculating PO Subtotal
                      </div>
                    </div>
                    <div className='space-y-4'>
                      <div className='bg-slate-50 border border-slate-200/90 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all'>
                        <div className='flex items-center gap-4 flex-1'>
                          <div className='w-16 h-16 rounded-lg bg-white border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center relative'>
                            <Image
                              src={'/image/obo_spark_platform.jpg'}
                              alt='Close up of Obo Spark robotics starter kit with neon orange mechanical tracks, modular chassis, transparent sensory microcontroller shield, and precision servo gears on obsidian surface.'
                              fill
                              className='object-cover'
                            />

                            <div className='absolute bottom-0 inset-x-0 h-1 bg-primary'></div>
                          </div>
                          <div className='space-y-1'>
                            <div className='flex items-center gap-2'>
                              <h3 className='font-headline-sm text-slate-900 text-base font-bold'>
                                Obo Spark Platform
                              </h3>
                              <span className='font-label-ui text-[11px] bg-slate-200/70 text-slate-700 px-2 py-0.5 rounded-full font-medium'>
                                Elementary / Mid Starter
                              </span>
                            </div>
                            <p className='font-body-sm text-slate-600'>
                              Magnetic snap-together motor pods, dual ultrasonic
                              sensors, Scratch/Blockly visual IDE &amp; Python 3
                              switchable firmware.
                            </p>
                            <div className='font-label-code-md text-primary font-semibold'>
                              $189
                              <span className='text-slate-500 font-body-sm font-normal'>
                                / unit
                              </span>
                              <span className='text-slate-300 mx-1.5 font-normal'>
                                |
                              </span>
                              <span className='text-slate-900 font-bold'>
                                $1,690
                              </span>
                              <span className='text-slate-500 font-body-sm font-normal'>
                                / 10-Pack Class Bundle
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center gap-2 self-end md:self-center shrink-0'>
                          <button
                            className='w-9 h-9 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors shadow-sm'
                            // onclick="adjustQty('qty-spark', -1)"
                            type='button'
                          >
                            <Minus className='size-5' />
                          </button>
                          <input
                            className='w-16 text-center py-1.5 bg-white border border-slate-300 text-slate-900 font-headline-sm text-base font-bold rounded-lg focus:outline-none focus:border-primary shadow-sm'
                            id='qty-spark'
                            // min='0'
                            // onchange="calculateQuote()"
                            type='number'
                            // value='10'
                          />
                          <button
                            className='w-9 h-9 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors shadow-sm'
                            // onclick="adjustQty('qty-spark', 1)"
                            type='button'
                          >
                            <Plus className='size-5' />
                          </button>
                        </div>
                      </div>
                      <div className='bg-slate-50 border border-slate-200/90 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all relative overflow-hidden'>
                        <div className='absolute top-0 right-0 w-32 h-1 bg-linear-to-r from-transparent via-primary to-transparent'></div>
                        <div className='flex items-center gap-4 flex-1'>
                          <div className='w-16 h-16 rounded-lg bg-white border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center relative'>
                            <Image
                              src={'/image/obo_cortex_x_modular.jpg'}
                              alt='High precision black and anodized red aluminum robotic manipulator chassis with six-axis freedom, LiDAR micro sensor, and brushless stepper motors for academic laboratory research.'
                              fill
                              className='object-cover'
                            />

                            <div className='absolute bottom-0 inset-x-0 h-1 bg-secondary'></div>
                          </div>
                          <div className='space-y-1'>
                            <div className='flex items-center gap-2'>
                              <h3 className='font-headline-sm text-slate-900 text-base font-bold'>
                                Obo Cortex-X Modular
                              </h3>
                              <span className='font-label-ui text-[11px] bg-orange-100 text-primary border border-orange-200 px-2 py-0.5 rounded-full font-semibold'>
                                District Flagship
                              </span>
                            </div>
                            <p className='font-body-sm text-slate-600'>
                              Advanced 4WD omni-directional drivebase, 3-DoF
                              kinematic arm, edge AI camera, on-board ESP32-S3 +
                              Raspberry Pi CM4 carrier.
                            </p>
                            <div className='font-label-code-md text-secondary font-semibold'>
                              $349
                              <span className='text-slate-500 font-body-sm font-normal'>
                                / unit
                              </span>
                              <span className='text-slate-300 mx-1.5 font-normal'>
                                |
                              </span>
                              <span className='text-slate-900 font-bold'>
                                $2,890
                              </span>
                              <span className='text-slate-500 font-body-sm font-normal'>
                                / 10-Pack with Educator Hub
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center gap-2 self-end md:self-center shrink-0'>
                          <button
                            className='w-9 h-9 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors shadow-sm'
                            // onclick="adjustQty('qty-cortex', -1)"
                            type='button'
                          >
                            <Minus className='size-5' />
                          </button>
                          <input
                            className='w-16 text-center py-1.5 bg-white border border-slate-300 text-slate-900 font-headline-sm text-base font-bold rounded-lg focus:outline-none focus:border-primary shadow-sm'
                            id='qty-cortex'
                            min='0'
                            // onchange="calculateQuote()"
                            type='number'
                            // value='10'
                          />
                          <button
                            className='w-9 h-9 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors shadow-sm'
                            // onclick="adjustQty('qty-cortex', 1)"
                            type='button'
                          >
                            <Plus className='size-5' />
                          </button>
                        </div>
                      </div>
                      <div className='bg-slate-50 border border-slate-200/90 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all'>
                        <div className='flex items-center gap-4 flex-1'>
                          <div className='w-16 h-16 rounded-lg bg-white border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center relative'>
                            <Image
                              src={'/image/obo_swarm_drone_lab.jpg'}
                              alt='Enclosed caged autonomous indoor STEM micro-drone showing fiber propeller guards, optical flow positioning sensor, and telemetry communications module in a dark lab setting.'
                              fill
                              className='object-cover'
                            />

                            <div className='absolute bottom-0 inset-x-0 h-1 bg-amber-500'></div>
                          </div>
                          <div className='space-y-1'>
                            <div className='flex items-center gap-2'>
                              <h3 className='font-headline-sm text-slate-900 text-base font-bold'>
                                Obo Swarm &amp; Drone Lab
                              </h3>
                              <span className='font-label-ui text-[11px] bg-slate-200/70 text-slate-700 px-2 py-0.5 rounded-full font-medium'>
                                Secondary &amp; Higher-Ed
                              </span>
                            </div>
                            <p className='font-body-sm text-slate-600'>
                              Fully caged collision-tolerant micro-drones,
                              optical flow localization, ROS2 Galactic nodes,
                              and swarm formation Python algorithms.
                            </p>
                            <div className='font-label-code-md text-amber-600 font-semibold'>
                              $599
                              <span className='text-slate-500 font-body-sm font-normal'>
                                / unit
                              </span>
                              <span className='text-slate-300 mx-1.5 font-normal'>
                                |
                              </span>
                              <span className='text-slate-900 font-bold'>
                                $4,990
                              </span>
                              <span className='text-slate-500 font-body-sm font-normal'>
                                / 10-Pack Lab Station
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center gap-2 self-end md:self-center shrink-0'>
                          <button
                            className='w-9 h-9 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors shadow-sm'
                            // onclick="adjustQty('qty-drone', -1)"
                            type='button'
                          >
                            <Minus className='size-5' />
                          </button>
                          <input
                            className='w-16 text-center py-1.5 bg-white border border-slate-300 text-slate-900 font-headline-sm text-base font-bold rounded-lg focus:outline-none focus:border-primary shadow-sm'
                            id='qty-drone'
                            min='0'
                            // onchange="calculateQuote()"
                            type='number'
                            // value='0'
                          />
                          <button
                            className='w-9 h-9 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors shadow-sm'
                            // onclick="adjustQty('qty-drone', 1)"
                            type='button'
                          >
                            <Plus className='size-5' />
                          </button>
                        </div>
                      </div>
                      <div className='bg-slate-50 border border-slate-200/90 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all'>
                        <div className='flex items-center gap-4 flex-1'>
                          <div className='w-16 h-16 rounded-lg bg-white border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center text-slate-500'>
                            <Plug className='size-8 text-slate-400' />
                          </div>
                          <div className='space-y-1'>
                            <div className='flex items-center gap-2'>
                              <h3 className='font-headline-sm text-slate-900 text-base font-bold'>
                                Mobile Cart Vault &amp; Fast-Charging Hub
                              </h3>
                              <span className='font-label-ui text-[11px] bg-slate-200/70 text-slate-700 px-2 py-0.5 rounded-full font-medium'>
                                Heavy Duty Steel
                              </span>
                            </div>
                            <p className='font-body-sm text-slate-600'>
                              Secures up to 24 modular robots + tablet slots.
                              Smart surge-managed 65W GaN distribution, numeric
                              padlock lock, non-marking casters.
                            </p>
                            <div className='font-label-code-md text-slate-900 font-bold'>
                              $850
                              <span className='text-slate-500 font-body-sm font-normal'>
                                / unit
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center gap-2 self-end md:self-center shrink-0'>
                          <button
                            className='w-9 h-9 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors shadow-sm'
                            // onclick="adjustQty('qty-cart', -1)"
                            type='button'
                          >
                            <Minus className='size-5' />
                          </button>
                          <input
                            className='w-16 text-center py-1.5 bg-white border border-slate-300 text-slate-900 font-headline-sm text-base font-bold rounded-lg focus:outline-none focus:border-primary shadow-sm'
                            id='qty-cart'
                            min='0'
                            // onchange="calculateQuote()"
                            type='number'
                            // value='1'
                          />
                          <button
                            className='w-9 h-9 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors shadow-sm'
                            // onclick="adjustQty('qty-cart', 1)"
                            type='button'
                          >
                            <Plus className='size-5' />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='space-y-2 pt-2'>
                      <span className='font-label-ui text-slate-600 uppercase tracking-wider text-xs font-semibold block'>
                        Institutional Accreditation &amp; Teacher Enablement
                      </span>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <label className='flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 cursor-pointer transition-all select-none'>
                          <input
                            className='mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer'
                            id='add-pd'
                            // onchange="calculateQuote()"
                            type='checkbox'
                          />
                          <div className='space-y-0.5'>
                            <div className='flex items-center justify-between gap-2'>
                              <span className='font-title-md text-slate-900 text-sm'>
                                Certified Teacher PD (4-Hr Workshop)
                              </span>
                              <span className='font-label-ui text-[11px] text-primary bg-orange-50 border border-orange-200 px-2 py-0.5 rounded font-semibold whitespace-nowrap'>
                                FREE (10+ Kits)
                              </span>
                            </div>
                            <p className='font-body-sm text-slate-500 leading-normal'>
                              Interactive virtual or on-site coaching with
                              mechatronics curriculum specialists. Standard val:
                              $950.
                            </p>
                          </div>
                        </label>
                        <label className='flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 cursor-pointer transition-all select-none'>
                          <input
                            className='mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer'
                            id='add-cloud'
                            // onchange="calculateQuote()"
                            type='checkbox'
                          />
                          <div className='space-y-0.5'>
                            <div className='flex items-center justify-between gap-2'>
                              <span className='font-title-md text-slate-900 text-sm'>
                                Obo Cloud LMS &amp; Telemetry Hub
                              </span>
                              <span className='font-label-ui text-[11px] text-secondary bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-semibold whitespace-nowrap'>
                                INCLUDED 1ST YR
                              </span>
                            </div>
                            <p className='font-body-sm text-slate-500 leading-normal'>
                              Classroom code sync, automated grading rubrics,
                              CSTA &amp; NGSS alignment tracker.
                            </p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </section>
                  <section className='bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-6'>
                    <div className='flex items-center justify-between border-b border-slate-100 pb-4'>
                      <div>
                        <div className='flex items-center gap-2'>
                          <CalendarCheck className='size-6 text-amber-600' />

                          <h2 className='font-headline-sm text-slate-900 text-xl font-bold'>
                            Step 3: Evaluation Logistics &amp; PO Preferences
                          </h2>
                        </div>
                        <p className='font-body-sm text-slate-500'>
                          Choose how your curriculum committee or lab committee
                          will evaluate Obo Technology.
                        </p>
                      </div>
                      <span className='font-label-ui uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded text-xs font-semibold'>
                        No Obligation
                      </span>
                    </div>
                    <div className='space-y-4'>
                      <div>
                        <label className='font-label-ui text-slate-700 text-xs uppercase tracking-wide block mb-3'>
                          Preferred Evaluation Delivery Mode *
                        </label>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                          <label className='relative flex flex-col p-4 rounded-xl bg-slate-50 border-2 border-primary/60 cursor-pointer hover:bg-white transition-all'>
                            <input
                              className='sr-only peer'
                              name='demo-mode'
                              type='radio'
                              value='physical-pilot'
                            />
                            <div className='relative z-10 space-y-2'>
                              <div className='w-8 h-8 rounded-lg bg-orange-100 text-primary flex items-center justify-center'>
                                <Package2 className='size-5' />
                              </div>
                              <div>
                                <span className='font-title-md text-slate-900 block font-semibold'>
                                  30-Day Classroom Kit
                                </span>
                                <span className='font-body-sm text-slate-600 block mt-1'>
                                  Shipped directly to campus with prepaid return
                                  airbill if not retained.
                                </span>
                              </div>
                              <div className='pt-2'>
                                <span className='font-label-ui text-primary uppercase font-bold tracking-wide text-xs'>
                                  Free for verified schools
                                </span>
                              </div>
                            </div>
                          </label>
                          <label className='relative flex flex-col p-4 rounded-xl bg-slate-50 border-2 border-transparent hover:border-slate-300 cursor-pointer hover:bg-white transition-all'>
                            <input
                              className='sr-only peer'
                              name='demo-mode'
                              type='radio'
                              value='virtual-teardown'
                            />
                            <div className='relative z-10 space-y-2'>
                              <div className='w-8 h-8 rounded-lg bg-blue-100 text-secondary flex items-center justify-center'>
                                <Video className='size-5' />
                              </div>
                              <div>
                                <span className='font-title-md text-slate-900 block font-semibold'>
                                  Live 30-Min Walkthrough
                                </span>
                                <span className='font-body-sm text-slate-600 block mt-1'>
                                  Screen-to-screen hardware breakdown with lead
                                  curriculum engineer.
                                </span>
                              </div>
                              <div className='pt-2'>
                                <span className='font-label-ui text-secondary uppercase font-bold tracking-wide text-xs'>
                                  Fastest (Same Week)
                                </span>
                              </div>
                            </div>
                          </label>
                          <label className='relative flex flex-col p-4 rounded-xl bg-slate-50 border-2 border-transparent hover:border-slate-300 cursor-pointer hover:bg-white transition-all'>
                            <input
                              className='sr-only peer'
                              name='demo-mode'
                              type='radio'
                              value='onsite-workshop'
                            />
                            <div className='relative z-10 space-y-2'>
                              <div className='w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center'>
                                <SmartphoneUserRound className='size-5' />
                              </div>
                              <div>
                                <span className='font-title-md text-slate-900 block font-semibold'>
                                  On-Site Lab Workshop
                                </span>
                                <span className='font-body-sm text-slate-600 block mt-1'>
                                  District-wide demonstration for STEM
                                  committees and academic leaders.
                                </span>
                              </div>
                              <div className='pt-2'>
                                <span className='font-label-ui text-amber-700 uppercase font-bold tracking-wide text-xs'>
                                  For 10+ Campus Orders
                                </span>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-1'>
                        <div className='space-y-1.5'>
                          <label
                            className='font-label-ui text-slate-700 text-xs uppercase tracking-wide block'
                            htmlFor='target-term'
                          >
                            Target Deployment Term *
                          </label>
                          <select
                            className='w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors'
                            id='target-term'
                            required
                          >
                            <option value='immediate'>
                              Immediate / Current Quarter
                            </option>
                            <option value='upcoming-fall'>
                              Upcoming Fall Semester (Aug/Sept)
                            </option>
                            <option value='upcoming-spring'>
                              Upcoming Spring Semester (Jan)
                            </option>
                            <option value='grant-fy2526'>
                              Fiscal Year Grant Window Planning (FY 2025-2026)
                            </option>
                            <option value='exploratory'>
                              Exploratory / Committee Review Only
                            </option>
                          </select>
                        </div>
                        <div className='space-y-1.5'>
                          <label
                            className='font-label-ui text-slate-700 text-xs uppercase tracking-wide block'
                            htmlFor='payment-channel'
                          >
                            Planned Procurement Instrument *
                          </label>
                          <select
                            className='w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors'
                            id='payment-channel'
                            required
                          >
                            <option value='po'>
                              Standard District Purchase Order (Net 30 / Net 60)
                            </option>
                            <option value='p-card'>
                              School Institutional Credit Card (P-Card)
                            </option>
                            <option value='grant'>
                              Direct Perkins V / Title I / State STEM Grant
                            </option>
                            <option value='rfp'>
                              Formal Public RFP / Sealed Bid Required
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className='space-y-1.5'>
                        <label
                          className='font-label-ui text-slate-700 text-xs uppercase tracking-wide block'
                          htmlFor='special-instructions'
                        >
                          Curriculum Standards or Specific Mechatronics Focus
                          (Optional)
                        </label>
                        <textarea
                          className='w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-body-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none'
                          id='special-instructions'
                          placeholder='e.g. Preparing 8th grade students for FIRST Tech Challenge; need alignment with Texas TEKS mechatronics standards.'
                          // rows="2"
                        ></textarea>
                      </div>
                    </div>
                  </section>
                </form>
              </div>
              <div className='lg:col-span-4 space-y-4 lg:sticky lg:top-24'>
                <div className='bg-white border-2 border-orange-200/90 rounded-xl p-6 shadow-md relative overflow-hidden'>
                  <div className='absolute -top-16 -right-16 w-36 h-36 rounded-full bg-primary/10 blur-2xl pointer-events-none'></div>
                  <div className='flex items-center justify-between pb-4 border-b border-slate-100'>
                    <div className='space-y-0.5'>
                      <span className='font-label-ui uppercase tracking-wider text-slate-500 text-[11px] font-semibold'>
                        Real-Time Estimator
                      </span>
                      <h3 className='font-headline-sm text-slate-900 text-lg font-bold'>
                        Formal Pilot Quotation
                      </h3>
                    </div>
                    <div className='w-9 h-9 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-primary'>
                      <Receipt className='size-6' />
                    </div>
                  </div>
                  <div className='space-y-2.5 py-4 bg-slate-50 border border-slate-200/70 rounded-lg px-4 my-4'>
                    <div className='flex items-center justify-between font-body-sm text-slate-600'>
                      <span>
                        Obo Spark Starters (
                        <span id='summary-spark-qty'>10</span>x)
                      </span>
                      <span
                        className='text-slate-900 font-semibold'
                        id='summary-spark-cost'
                      >
                        $1,690.00
                      </span>
                    </div>
                    <div className='flex items-center justify-between font-body-sm text-slate-600'>
                      <span>
                        Obo Cortex-X Hubs (
                        <span id='summary-cortex-qty'>10</span>x)
                      </span>
                      <span
                        className='text-slate-900 font-semibold'
                        id='summary-cortex-cost'
                      >
                        $2,890.00
                      </span>
                    </div>
                    <div
                      className='flex items-center justify-between font-body-sm text-slate-600'
                      id='summary-drone-row'
                      // style="display: none"
                    >
                      <span>
                        Obo Swarm Drones (<span id='summary-drone-qty'>0</span>
                        x)
                      </span>
                      <span
                        className='text-slate-900 font-semibold'
                        id='summary-drone-cost'
                      >
                        $0.00
                      </span>
                    </div>
                    <div
                      className='flex items-center justify-between font-body-sm text-slate-600'
                      id='summary-cart-row'
                    >
                      <span>
                        Mobile Cart Vault (<span id='summary-cart-qty'>1</span>
                        x)
                      </span>
                      <span
                        className='text-slate-900 font-semibold'
                        id='summary-cart-cost'
                      >
                        $850.00
                      </span>
                    </div>
                    <div className='pt-2 mt-2 border-t border-slate-200 space-y-1.5'>
                      <div className='flex items-center justify-between font-body-sm'>
                        <span className='text-slate-600'>
                          Teacher PD Package
                        </span>
                        <span
                          className='text-primary font-semibold text-xs bg-orange-100/80 px-2 py-0.5 rounded'
                          id='summary-pd-status'
                        >
                          COMPLIMENTARY
                        </span>
                      </div>
                      <div className='flex items-center justify-between font-body-sm'>
                        <span className='text-slate-600'>
                          LMS Cloud License (1-Yr)
                        </span>
                        <span
                          className='text-secondary font-semibold text-xs bg-blue-100/80 px-2 py-0.5 rounded'
                          id='summary-cloud-status'
                        >
                          INCLUDED
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='space-y-1.5 border-b border-slate-100 pb-4'>
                    <div className='flex items-center justify-between font-body-sm text-slate-500'>
                      <span>Hardware List Total</span>
                      <span
                        className='line-through font-mono'
                        id='summary-retail-total'
                      >
                        $6,230.00
                      </span>
                    </div>
                    <div className='flex items-center justify-between font-body-sm text-primary font-medium'>
                      <span className='flex items-center gap-1'>
                        <Tag className='size-4' />
                        District Volume Savings (15%)
                      </span>
                      <span
                        className='font-mono font-bold'
                        id='summary-discount'
                      >
                        -$800.00
                      </span>
                    </div>
                    <div className='flex items-center justify-between font-body-sm text-slate-600'>
                      <span>Pilot Logistics &amp; Freight</span>
                      <span className='text-slate-900 font-semibold'>
                        Free Expedited
                      </span>
                    </div>
                  </div>
                  <div className='pt-4 pb-2 flex items-end justify-between'>
                    <div>
                      <span className='font-label-ui uppercase tracking-wider text-slate-400 block text-[11px] font-bold'>
                        Locked PO Total
                      </span>
                      <span className='font-body-sm text-slate-500'>
                        Tax-Exempt Standard
                      </span>
                    </div>
                    <div className='text-right'>
                      <span
                        className='font-headline-lg text-3xl font-bold text-slate-900 block'
                        id='summary-final-total'
                      >
                        $5,430.00
                      </span>
                      <span className='font-label-ui text-primary font-semibold text-xs'>
                        Price locked 60 calendar days
                      </span>
                    </div>
                  </div>
                  <div className='space-y-2.5 pt-4'>
                    <button
                      className='w-full py-2.5 px-4 rounded-lg bg-primary hover:bg-primary-container text-white font-label-ui text-sm font-bold shadow hover:shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2'
                      // onclick="handleQuoteSubmit()"
                      type='button'
                    >
                      <Verified className='size-5' />
                      Submit Quote &amp; Request 30-Day Pilot
                    </button>
                    <button
                      className='w-full py-2 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-label-ui text-xs font-semibold transition-all flex items-center justify-center gap-2'
                      // onclick="triggerPDFDownload()"
                      type='button'
                    >
                      <Download className='size-5 text-slate-600' />
                      Download Official Formal PDF Estimate
                    </button>
                    <div className='flex items-center justify-center gap-1 pt-1'>
                      <a
                        className='font-label-ui text-slate-500 hover:text-slate-800 underline flex items-center gap-1 text-[11px]'
                        href='#'
                      >
                        <Download className='size-3.5' />
                        W-9 Tax Form
                      </a>
                      <span className='text-slate-300'>•</span>
                      <a
                        className='font-label-ui text-slate-500 hover:text-slate-800 underline flex items-center gap-1 text-[11px]'
                        href='#'
                      >
                        <Download className='size-3.5' />
                        Sole Source Affidavit
                      </a>
                      <span className='text-slate-300'>•</span>
                      <a
                        className='font-label-ui text-slate-500 hover:text-slate-800 underline flex items-center gap-1 text-[11px]'
                        href='#'
                      >
                        <Download className='size-3.5' />
                        Vendor Packet
                      </a>
                    </div>
                  </div>
                  <div className='mt-5 pt-4 border-t border-slate-200/80 bg-slate-50 rounded-lg p-3.5 space-y-2'>
                    <div className='flex items-center gap-3'>
                      <div className='grid place-items-center w-10 h-10 rounded-full border border-slate-300 overflow-hidden shrink-0 relative bg-white'>
                        <User className='size-4' />
                      </div>
                      <div>
                        <span className='font-title-md text-slate-900 text-xs block font-bold'>
                          Dr. Marcus Vance, Ph.D.
                        </span>
                        <span className='font-label-ui text-secondary text-[11px] block font-semibold'>
                          Institutional STEM Concierge
                        </span>
                      </div>
                    </div>
                    <p className='font-body-sm text-slate-600 text-xs leading-snug'>
                      "Direct support for district grant alignments, standard
                      crosswalks, and board-level mechatronics proposals."
                    </p>
                    <div className='flex items-center justify-between text-slate-500 font-label-ui text-[11px] pt-1'>
                      <span className='flex items-center gap-1 text-emerald-700 font-medium'>
                        <span className='w-1.5 h-1.5 rounded-full bg-emerald-600'></span>
                        Response window: &lt; 4 Hours
                      </span>
                      <a
                        className='hover:text-primary underline font-medium'
                        href='mailto:stem-procure@obotechnology.com'
                      >
                        Direct Contact
                      </a>
                    </div>
                  </div>
                </div>
                <div className='bg-white border border-slate-200 rounded-xl p-4 space-y-2 shadow-sm'>
                  <span className='font-label-ui uppercase text-slate-400 tracking-wider block text-[11px] font-bold'>
                    District Security &amp; Compliance Protocol
                  </span>
                  <div className='grid grid-cols-2 gap-2 font-label-ui text-slate-700 text-[11px]'>
                    <div className='flex items-center gap-1.5 bg-slate-50 border border-slate-200 p-2 rounded'>
                      <LockKeyhole className='size-4 text-secondary' />
                      SOC2 Type II
                    </div>
                    <div className='flex items-center gap-1.5 bg-slate-50 border border-slate-200 p-2 rounded'>
                      <CloudOff className='size-4 text-primary' />
                      Zero PII Harvested
                    </div>
                    <div className='flex items-center gap-1.5 bg-slate-50 border border-slate-200 p-2 rounded'>
                      <Truck className='size-4 text-amber-600' />
                      Pre-Inspected Units
                    </div>
                    <div className='flex items-center gap-1.5 bg-slate-50 border border-slate-200 p-2 rounded'>
                      <Handshake className='size-4 text-secondary' />
                      Direct Vendor Master
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className='mt-16 pt-12 space-y-8 border-t border-slate-200'>
              <div className='text-center max-w-2xl mx-auto space-y-2'>
                <span className='font-label-ui uppercase tracking-widest text-primary font-bold text-xs'>
                  Field Verified Implementations
                </span>
                <h2 className='font-headline-lg text-slate-900 text-3xl font-bold'>
                  Trusted by 180+ Public Districts, Academies, and Universities
                </h2>
                <p className='font-body-md text-slate-600'>
                  From rural middle school magnet labs to Tier-1 mechatronics
                  departments, Obo robotics kits operate on campus day one with
                  zero IT friction.
                </p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='bg-white border border-slate-200 rounded-xl p-6 space-y-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow'>
                  <div className='space-y-3'>
                    <div className='flex items-center gap-1 text-amber-500'>
                      <Star className='size-4' />
                      <Star className='size-4' />
                      <Star className='size-4' />
                      <Star className='size-4' />
                      <Star className='size-4' />
                    </div>
                    <p className='font-body-sm text-slate-700 leading-relaxed italic'>
                      "Our district purchase order cleared in 48 hours with
                      Obo's pre-filled sole source packet. The 30-day classroom
                      kit let our CTE committee test real hardware durability
                      before committing Perkins V dollars."
                    </p>
                  </div>
                  <div className='pt-2 flex items-center gap-3 border-t border-slate-100'>
                    <div className='w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-xs'>
                      DL
                    </div>
                    <div>
                      <span className='font-title-md text-slate-900 text-sm block font-semibold'>
                        Dr. Lena Alvarez
                      </span>
                      <span className='font-label-ui text-slate-500 text-xs block'>
                        CTE Director, Lone Star School District
                      </span>
                    </div>
                  </div>
                </div>
                <div className='bg-white border border-slate-200 rounded-xl p-6 space-y-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow'>
                  <div className='space-y-3'>
                    <div className='flex items-center gap-1 text-amber-500'>
                      <Star className='size-4' />
                      <Star className='size-4' />
                      <Star className='size-4' />
                      <Star className='size-4' />
                      <Star className='size-4' />
                    </div>
                    <p className='font-body-sm text-slate-700 leading-relaxed italic'>
                      "Cortex-X solved our bridge between block coding and
                      serious ROS2 robot kinematics. Having replacement servos
                      in the mobile cart hub took away teacher panic
                      completely."
                    </p>
                  </div>
                  <div className='pt-2 flex items-center gap-3 border-t border-slate-100'>
                    <div className='w-9 h-9 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center font-bold text-secondary text-xs'>
                      RM
                    </div>
                    <div>
                      <span className='font-title-md text-slate-900 text-sm block font-semibold'>
                        Robert MacIntyre
                      </span>
                      <span className='font-label-ui text-slate-500 text-xs block'>
                        STEM Chair &amp; FIRST Coach, Apex Academy
                      </span>
                    </div>
                  </div>
                </div>
                <div className='bg-white border border-slate-200 rounded-xl p-6 space-y-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow'>
                  <div className='space-y-3'>
                    <div className='flex items-center gap-1 text-amber-500'>
                      <Star className='size-4' />
                      <Star className='size-4' />
                      <Star className='size-4' />
                      <Star className='size-4' />
                      <Star className='size-4' />
                    </div>
                    <p className='font-body-sm text-slate-700 leading-relaxed italic'>
                      "The 4-hour teacher professional development accredited 14
                      educators in our district. We deployed 60 Cortex-X units
                      across three campuses without a single tech support
                      escalation."
                    </p>
                  </div>
                  <div className='pt-2 flex items-center gap-3 border-t border-slate-100'>
                    <div className='w-9 h-9 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center font-bold text-amber-800 text-xs'>
                      SS
                    </div>
                    <div>
                      <span className='font-title-md text-slate-900 text-sm block font-semibold'>
                        Sarah Sundaram
                      </span>
                      <span className='font-label-ui text-slate-500 text-xs block'>
                        Assistant Superintendent of Curriculum, Tri-County
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-white border border-slate-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 text-slate-500 shadow-sm'>
                <span className='font-label-ui uppercase tracking-wider text-slate-700 text-xs font-bold'>
                  Official Consortium Integrations:
                </span>
                <div className='flex flex-wrap items-center gap-6 font-label-ui text-xs text-slate-600'>
                  <span className='hover:text-slate-900 transition-colors'>
                    FIRST Robotics Certified
                  </span>
                  <span className='hover:text-slate-900 transition-colors'>
                    CSTA Standard Mapped
                  </span>
                  <span className='hover:text-slate-900 transition-colors'>
                    NGSS MS-ETS1 / HS-ETS1
                  </span>
                  <span className='hover:text-slate-900 transition-colors'>
                    Perkins V Section 134
                  </span>
                  <span className='hover:text-slate-900 transition-colors'>
                    ROS2 Academic Partner
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* <div
          className='fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 transition-opacity duration-300'
          id='confirmation-modal'
        >
          <div className='bg-white max-w-lg w-full rounded-xl p-6 sm:p-8 space-y-4 shadow-2xl relative border border-slate-200'>
            <div className='w-12 h-12 rounded-full bg-orange-100 text-primary flex items-center justify-center mx-auto'>
              <span className='material-symbols-outlined text-[28px]'>
                mark_email_read
              </span>
            </div>
            <div className='text-center space-y-1'>
              <h3 className='font-headline-md text-slate-900 text-xl font-bold'>
                Pilot Reservation Initialized
              </h3>
              <p className='font-body-sm text-slate-600' id='modal-feedback'>
                Your quote document &amp; formal PO confirmation have been
                queued. A verification link has been sent to your institutional
                email.
              </p>
            </div>
            <div className='bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-1.5 text-left font-body-sm text-xs'>
              <div className='flex justify-between text-slate-600'>
                <span>Quote Tracking ID:</span>
                <span
                  className='text-secondary font-mono font-bold'
                  id='modal-quote-id'
                >
                  OBO-2026-DIST-8492
                </span>
              </div>
              <div className='flex justify-between text-slate-600'>
                <span>Price Lock Validity:</span>
                <span className='text-slate-900 font-semibold'>
                  60 Days (Guaranteed)
                </span>
              </div>
              <div className='flex justify-between text-slate-600'>
                <span>Assigned Advisor:</span>
                <span className='text-slate-900 font-semibold'>
                  Dr. Marcus Vance, Ph.D.
                </span>
              </div>
            </div>
            <div className='pt-2 space-y-2'>
              <button
                className='w-full py-2.5 rounded-lg bg-primary hover:bg-primary-container text-white font-label-ui text-sm font-bold shadow transition-all'
                // onclick="closeConfirmationModal()"
                type='button'
              >
                Return to Institutional Dashboard
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
