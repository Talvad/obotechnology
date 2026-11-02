function MissionStatement() {
  return (
    <section className='w-full py-space-3xl relative overflow-hidden bg-surface'>
      <div className='pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-fixed/40 blur-[120px]'></div>
      <div className='max-w-[1320px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg'>
        <div className='rounded-xl bg-white border border-surface-container-high p-space-xl md:p-space-2xl shadow-md relative overflow-hidden'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center'>
            <div className='lg:col-span-8 space-y-space-md'>
              <div className='inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-low text-primary font-label-caps text-label-caps uppercase border border-outline-variant'>
                <span className='material-symbols-outlined text-[14px]'>
                  psychology_alt
                </span>
                Pedagogical Paradigm
              </div>
              <h2 className='font-headline-lg text-headline-lg text-text-primary tracking-tight'>
                Bridging the Chasm Between Screen Play &amp; Deep Computational
                Mastery.
              </h2>
              <p className='font-body-lg text-body-lg text-text-secondary leading-relaxed'>
                Most digital learning isolates children into passive
                consumption. Obo Robotics returns tactile reality to young
                technologists: physical gears that mesh, circuit loops that
                pulse, and code scripts that actuate real-world machines.
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-sm'>
                <div className='p-space-sm rounded bg-surface-container-low border border-surface-container'>
                  <span className='font-headline-sm text-headline-sm text-electric-coral font-bold block'>
                    01
                  </span>
                  <span className='font-title-md text-title-md text-text-primary font-semibold block mt-1'>
                    Hardware Intuition
                  </span>
                  <p className='font-body-sm text-body-sm text-text-secondary mt-1'>
                    Grasping torque, sensory inputs, and mechanical friction
                    firsthand.
                  </p>
                </div>
                <div className='p-space-sm rounded bg-surface-container-low border border-surface-container'>
                  <span className='font-headline-sm text-headline-sm text-secondary font-bold block'>
                    02
                  </span>
                  <span className='font-title-md text-title-md text-text-primary font-semibold block mt-1'>
                    Resilient Debugging
                  </span>
                  <p className='font-body-sm text-body-sm text-text-secondary mt-1'>
                    Iterative problem-solving through live test-and-fail
                    physical loops.
                  </p>
                </div>
                <div className='p-space-sm rounded bg-surface-container-low border border-surface-container'>
                  <span className='font-headline-sm text-headline-sm text-glow-amber font-bold block'>
                    03
                  </span>
                  <span className='font-title-md text-title-md text-text-primary font-semibold block mt-1'>
                    Creative Autonomy
                  </span>
                  <p className='font-body-sm text-body-sm text-text-secondary mt-1'>
                    Designing custom rovers, bipedal walkers, and assistive
                    bots.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Interactive Radar / Micro SVG Data Visualizer --> */}
            <div className='lg:col-span-4 flex flex-col items-center justify-center p-space-lg rounded bg-surface-container-low border border-surface-container text-center shadow-inner'>
              <span className='font-label-caps text-label-caps text-text-tertiary uppercase tracking-wider mb-space-sm'>
                Cognitive Skill Distribution
              </span>
              {/* <!-- SVG Hexagonal Competency Matrix --> */}
              <div className='w-52 h-52 relative flex items-center justify-center'>
                <svg
                  className='w-full h-full text-surface-container-highest'
                  viewBox='0 0 100 100'
                >
                  <polygon
                    fill='none'
                    points='50,5 90,27 90,73 50,95 10,73 10,27'
                    stroke='currentColor'
                    stroke-width='1'
                  ></polygon>
                  <polygon
                    fill='none'
                    points='50,20 78,35 78,65 50,80 22,65 22,35'
                    stroke='currentColor'
                    stroke-width='0.8'
                  ></polygon>
                  {/* <!-- Active Polygon Fill --> */}
                  <polygon
                    fill='rgba(234, 88, 12, 0.18)'
                    points='50,12 84,32 75,70 50,88 20,68 18,32'
                    stroke='#ea580c'
                    stroke-width='2'
                  ></polygon>
                  <circle cx='50' cy='12' fill='#ea580c' r='3'></circle>
                  <circle cx='84' cy='32' fill='#0051d5' r='3'></circle>
                  <circle cx='75' cy='70' fill='#d97706' r='3'></circle>
                  <circle cx='50' cy='88' fill='#0051d5' r='3'></circle>
                  <circle cx='20' cy='68' fill='#ea580c' r='3'></circle>
                  <circle cx='18' cy='32' fill='#d97706' r='3'></circle>
                </svg>
                <div className='absolute text-center'>
                  <span className='font-headline-md text-headline-md text-text-primary font-bold block'>
                    4.9x
                  </span>
                  <span className='font-label-caps text-label-caps text-text-secondary'>
                    Spatial IQ
                  </span>
                </div>
              </div>
              <div className='mt-space-sm text-text-secondary font-body-sm text-body-sm'>
                Standardized pre- &amp; post-academic mechatronics cohort
                tracking.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { MissionStatement };
