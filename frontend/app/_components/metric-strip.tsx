import { CloudSync, SquareTerminal, TrendingUp, Trophy } from 'lucide-react';

function MetricStrip() {
  return (
    <section className='w-full bg-white border-y border-surface-container py-space-xl relative'>
      <div className='max-w-330 mx-auto px-margin-sm md:px-margin lg:px-margin-lg'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-gutter'>
          <div className='flex flex-col gap-1 p-space-md rounded bg-surface-container-lowest border border-surface-container shadow-sm hover:translate-y-[-2px] hover:shadow-md transition-all'>
            <div className='flex items-center justify-between text-text-tertiary'>
              <span className='font-label-caps text-label-caps uppercase tracking-wider'>
                Curriculum Scope
              </span>
              <SquareTerminal className='size-5 text-secondary' />
            </div>
            <div className='font-headline-lg text-headline-lg text-text-primary mt-1'>
              120+
            </div>
            <p className='font-body-sm text-body-sm text-text-secondary'>
              Progressive Hands-On Coding Challenges
            </p>
          </div>
          <div className='flex flex-col gap-1 p-space-md rounded bg-surface-container-lowest border border-surface-container shadow-sm hover:translate-y-[-2px] hover:shadow-md transition-all'>
            <div className='flex items-center justify-between text-text-tertiary'>
              <span className='font-label-caps text-label-caps uppercase tracking-wider'>
                Cognitive Impact
              </span>
              <TrendingUp className='size-5 text-amber-700' />
            </div>
            <div className='font-headline-lg text-headline-lg text-electric-coral mt-1'>
              94%
            </div>
            <p className='font-body-sm text-body-sm text-text-secondary'>
              Measured Growth in STEAM Curiosity
            </p>
          </div>
          <div className='flex flex-col gap-1 p-space-md rounded bg-surface-container-lowest border border-surface-container shadow-sm hover:translate-y-[-2px] hover:shadow-md transition-all'>
            <div className='flex items-center justify-between text-text-tertiary'>
              <span className='font-label-caps text-label-caps uppercase tracking-wider'>
                Championships
              </span>
              <Trophy className='size-5 text-amber-500' />
            </div>
            <div className='font-headline-lg text-headline-lg text-text-primary mt-1'>
              40+
            </div>
            <p className='font-body-sm text-body-sm text-text-secondary'>
              International Robotics Tournaments
            </p>
          </div>
          <div className='flex flex-col gap-1 p-space-md rounded bg-surface-container-lowest border border-surface-container shadow-sm hover:translate-y-[-2px] hover:shadow-md transition-all'>
            <div className='flex items-center justify-between text-text-tertiary'>
              <span className='font-label-caps text-label-caps uppercase tracking-wider'>
                Global Reach
              </span>
              <CloudSync className='size-5 text-secondary' />
            </div>
            <div className='font-headline-lg text-headline-lg text-secondary mt-1'>
              24 / 7
            </div>
            <p className='font-body-sm text-body-sm text-text-secondary'>
              Cloud Sandbox &amp; Simulator Access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { MetricStrip };
