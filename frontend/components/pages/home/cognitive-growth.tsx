function CognitiveGrowth() {
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
      </div>
    </section>
  );
}

export default CognitiveGrowth;
