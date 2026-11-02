import { CheckCircle, Play } from 'lucide-react';

function LearningPathways() {
  return (
    <section className='w-full py-space-3xl bg-surface relative'>
      <div className='max-w-330 mx-auto px-margin-sm md:px-margin lg:px-margin-lg'>
        <div className='text-center max-w-3xl mx-auto mb-space-2xl space-y-space-xs'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-outline-variant text-primary font-label-caps text-label-caps uppercase shadow-sm'>
            Continuous Cognitive Growth
          </div>
          <h2 className='font-headline-lg text-headline-lg text-text-primary tracking-tight'>
            Progressive Robotics Learning Trajectory
          </h2>
          <p className='font-body-md text-body-md text-text-secondary'>
            From first tactile snap-blocks to deep neural vision navigation, our
            structured pathway guarantees no student gets left behind or bored.
          </p>
        </div>
        {/* <!-- Step-by-Step Flow Cards --> */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-gutter relative'>
          {/* <!-- Stage 1 --> */}
          <div className='relative p-space-xl rounded bg-white border border-surface-container-high shadow-md'>
            <div className='w-12 h-12 rounded bg-primary-fixed text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold mb-space-md'>
              1
            </div>
            <span className='font-label-caps text-label-caps text-primary uppercase tracking-wider block font-bold'>
              Foundational Stage
            </span>
            <h3 className='font-headline-sm text-headline-sm text-text-primary mt-1'>
              Block Logic &amp; Mechanics
            </h3>
            <p className='font-body-sm text-body-sm text-text-secondary mt-space-sm leading-relaxed'>
              Students learn core logic gates, sequential actions, loops, and
              mechanical advantage using gear trains and levers.
            </p>
            <div className='pt-space-lg flex flex-wrap gap-2'>
              <span className='px-2.5 py-1 rounded bg-surface-container-low border border-surface-container font-label-caps text-label-caps text-text-secondary'>
                Spatial Reasoning
              </span>
              <span className='px-2.5 py-1 rounded bg-surface-container-low border border-surface-container font-label-caps text-label-caps text-text-secondary'>
                Visual Syntax
              </span>
              <span className='px-2.5 py-1 rounded bg-surface-container-low border border-surface-container font-label-caps text-label-caps text-text-secondary'>
                Gear Ratios
              </span>
            </div>
          </div>
          {/* <!-- Stage 2 --> */}
          <div className='relative p-space-xl rounded bg-white border border-surface-container-high shadow-md'>
            <div className='w-12 h-12 rounded bg-secondary-fixed text-secondary flex items-center justify-center font-headline-sm text-headline-sm font-bold mb-space-md'>
              2
            </div>
            <span className='font-label-caps text-label-caps text-secondary uppercase tracking-wider block font-bold'>
              Explorer Stage
            </span>
            <h3 className='font-headline-sm text-headline-sm text-text-primary mt-1'>
              Sensors, Telemetry &amp; Python
            </h3>
            <p className='font-body-sm text-body-sm text-text-secondary mt-space-sm leading-relaxed'>
              Transitioning into textual syntax. Reading real-time analog
              infrared sensors, ultrasonic reflections, and servo PID loops.
            </p>
            <div className='pt-space-lg flex flex-wrap gap-2'>
              <span className='px-2.5 py-1 rounded bg-surface-container-low border border-surface-container font-label-caps text-label-caps text-text-secondary'>
                Python Scripting
              </span>
              <span className='px-2.5 py-1 rounded bg-surface-container-low border border-surface-container font-label-caps text-label-caps text-text-secondary'>
                Closed Loop Control
              </span>
              <span className='px-2.5 py-1 rounded bg-surface-container-low border border-surface-container font-label-caps text-label-caps text-text-secondary'>
                Serial Debugging
              </span>
            </div>
          </div>
          {/* <!-- Stage 3 --> */}
          <div className='relative p-space-xl rounded bg-white border border-surface-container-high shadow-md'>
            <div className='w-12 h-12 rounded bg-tertiary-fixed text-tertiary flex items-center justify-center font-headline-sm text-headline-sm font-bold mb-space-md'>
              3
            </div>
            <span className='font-label-caps text-label-caps text-glow-amber uppercase tracking-wider block font-bold'>
              Innovator Stage
            </span>
            <h3 className='font-headline-sm text-headline-sm text-text-primary mt-1'>
              AI Vision &amp; Swarm Robotics
            </h3>
            <p className='font-body-sm text-body-sm text-text-secondary mt-space-sm leading-relaxed'>
              Advanced mechatronic capstone projects. Integration with edge
              camera models, wireless mesh fleets, and multi-axis manipulators.
            </p>
            <div className='pt-space-lg flex flex-wrap gap-2'>
              <span className='px-2.5 py-1 rounded bg-surface-container-low border border-surface-container font-label-caps text-label-caps text-text-secondary'>
                Kinematics
              </span>
              <span className='px-2.5 py-1 rounded bg-surface-container-low border border-surface-container font-label-caps text-label-caps text-text-secondary'>
                Computer Vision
              </span>
              <span className='px-2.5 py-1 rounded bg-surface-container-low border border-surface-container font-label-caps text-label-caps text-text-secondary'>
                IoT Protocols
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Live Code & Hardware Simulation Preview Interactive Component --> */}
        <div className='mt-space-2xl rounded-xl bg-white border border-surface-container-high p-space-lg md:p-space-xl shadow-lg'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center'>
            <div className='lg:col-span-5 space-y-space-md'>
              <span className='font-label-caps text-label-caps text-primary uppercase tracking-wider block font-bold'>
                Classroom Console
              </span>
              <h3 className='font-headline-md text-headline-md text-text-primary'>
                Real-Time Code Sync from Screen directly to Servo.
              </h3>
              <p className='font-body-md text-body-md text-text-secondary leading-relaxed'>
                Our cloud IDE eliminates serial driver headaches. One click
                sends compiled MicroPython payloads via WebBluetooth to the Obo
                Cortex controller in 80 milliseconds.
              </p>
              <div className='space-y-space-xs pt-space-xs font-body-sm text-body-sm'>
                <div className='flex items-center gap-2 text-text-primary'>
                  <CheckCircle className='text-primary size-5' />

                  <span>
                    Web-Bluetooth wireless instantaneous firmware burn
                  </span>
                </div>
                <div className='flex items-center gap-2 text-text-primary'>
                  <CheckCircle className='text-primary size-5' />
                  <span>
                    Built-in dynamic simulator for at-home hybrid practice
                  </span>
                </div>
                <div className='flex items-center gap-2 text-text-primary'>
                  <CheckCircle className='text-primary size-5' />
                  <span>
                    Automated student mistake hints with pedagogical feedback
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- Code Window Mockup --> */}
            <div className='lg:col-span-7 rounded bg-slate-900 p-space-md shadow-xl font-label-code-md text-[13px] leading-relaxed overflow-hidden text-slate-100'>
              <div className='flex items-center justify-between pb-space-sm mb-space-sm bg-slate-800 -mx-space-md -mt-space-md px-space-md pt-space-xs border-b border-slate-700'>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-red-500'></div>
                  <div className='w-3 h-3 rounded-full bg-amber-500'></div>
                  <div className='w-3 h-3 rounded-full bg-green-500'></div>
                  <span className='font-label-caps text-label-caps text-slate-400 ml-2'>
                    autonomous_rover_loop.py
                  </span>
                </div>
                <span className='px-2 py-0.5 rounded bg-primary text-white text-[11px] font-bold'>
                  DEVICE CONNECTED
                </span>
              </div>
              <div className='text-slate-300 space-y-1'>
                <div>
                  <span className='text-sky-400'>from</span> obo_core
                  <span className='text-sky-400'>import</span> Rover,
                  UltrasonicSensor, MotorGroup
                </div>
                <div>
                  <span className='text-sky-400'>import</span> time
                </div>
                <div className='text-slate-500 py-1'>
                  # Initialize Cortex Hardware Bus
                </div>
                <div>
                  bot = Rover(port_left=
                  <span className='text-amber-300'>1</span>, port_right=
                  <span className='text-amber-300'>2</span>)
                </div>
                <div>
                  sonar = UltrasonicSensor(pin=
                  <span className='text-amber-300'>"D4"</span>)
                </div>
                <div className='py-1'></div>
                <div>
                  <span className='text-sky-400'>def</span>
                  <span className='text-teal-300'>avoid_obstacle_routine</span>
                  ():
                </div>
                <div className='pl-4'>
                  <span className='text-sky-400'>while</span>
                  <span className='text-amber-300'>True</span>:
                </div>
                <div className='pl-8'>distance = sonar.read_centimeters()</div>
                <div className='pl-8'>
                  <span className='text-sky-400'>if</span> distance &lt;
                  <span className='text-amber-300'>15.0</span>:
                </div>
                <div className='pl-12 text-orange-400'>bot.stop()</div>
                <div className='pl-12 text-orange-400'>
                  bot.pivot_degrees(
                  <span className='text-amber-300'>90</span>, speed=
                  <span className='text-amber-300'>0.4</span>)
                </div>
                <div className='pl-8'>
                  <span className='text-sky-400'>else</span>:
                </div>
                <div className='pl-12 text-emerald-400'>
                  bot.forward(speed=
                  <span className='text-amber-300'>0.7</span>)
                </div>
                <div className='pl-8'>
                  time.sleep_ms(<span className='text-amber-300'>20</span>)
                </div>
              </div>
              <div className='mt-space-md pt-space-xs flex items-center justify-between bg-slate-800/90 p-space-sm rounded'>
                <span className='text-slate-400 text-[12px] flex items-center gap-1.5'>
                  <span className='w-2 h-2 rounded-full bg-emerald-400'></span>
                  Ultrasonic Telemetry:
                  <strong className='text-white'>24.2 cm clear</strong>
                </span>
                <button className='px-space-md py-1 rounded bg-secondary text-on-secondary font-title-md text-body-sm font-bold hover:brightness-110 transition-all flex items-center gap-1'>
                  <Play className='size-4' />
                  Run on Bot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { LearningPathways };
