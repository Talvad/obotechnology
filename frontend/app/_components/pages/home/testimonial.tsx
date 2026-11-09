import { Star } from 'lucide-react';

function Testimonial() {
  return (
    <section className='w-full py-space-3xl relative bg-white border-t border-surface-container'>
      <div className='max-w-330 mx-auto px-margin-sm md:px-margin lg:px-margin-lg'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl'>
          <div className='space-y-space-xs max-w-2xl'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-low text-primary font-label-caps text-label-caps uppercase border border-outline-variant'>
              Voices from Classrooms
            </div>
            <h2 className='font-headline-lg text-headline-lg text-text-primary tracking-tight'>
              How Educators Are Transforming Thinking Mindsets.
            </h2>
            <p className='font-body-md text-body-md text-text-secondary'>
              Hear from academic leaders and instructors who scaled hands-on
              robotics with Obo Technology.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-gutter'>
          {/* <!-- Story 1 --> */}
          <div className='rounded bg-surface-container-lowest border border-surface-container-high p-space-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow'>
            <div className='space-y-space-md'>
              <div className='flex items-center gap-1 text-amber-400'>
                <Star className='size-4' />
                <Star className='size-4' />
                <Star className='size-4' />
                <Star className='size-4' />
                <Star className='size-4' />
              </div>
              <p className='font-body-md text-body-md text-text-secondary leading-relaxed italic'>
                “Our 5th graders used to dread coding sessions when it was only
                screen-based turtle graphics. The moment we deployed Obo Spark
                kits, their collaborative energy skyrocketed. They debug because
                they want to see their rover navigate the maze.”
              </p>
            </div>
            <div className='pt-space-lg flex items-center gap-3 border-t border-surface-container mt-space-md'>
              <div className='w-11 h-11 rounded bg-primary-fixed flex items-center justify-center font-headline-sm text-headline-sm font-bold text-primary'>
                M
              </div>
              <div>
                <div className='font-title-md text-body-md text-text-primary font-bold'>
                  Marcus Vance
                </div>
                <div className='font-body-sm text-body-sm text-text-secondary'>
                  District STEM Coordinator, Seattle Academies
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Story 2 --> */}
          <div className='rounded bg-surface-container-lowest border border-surface-container-high p-space-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow'>
            <div className='space-y-space-md'>
              <div className='flex items-center gap-1 text-amber-400'>
                <Star className='size-4' />
                <Star className='size-4' />
                <Star className='size-4' />
                <Star className='size-4' />
                <Star className='size-4' />
              </div>
              <p className='font-body-md text-body-md text-text-secondary leading-relaxed italic'>
                “The teacher enablement training from Obo was what separated
                them from just another toy distributor. In two afternoons, my
                non-engineering educators felt confident guiding 40 students
                through kinematic arm assemblies.”
              </p>
            </div>
            <div className='pt-space-lg flex items-center gap-3 border-t border-surface-container mt-space-md'>
              <div className='w-11 h-11 rounded bg-secondary-fixed flex items-center justify-center font-headline-sm text-headline-sm font-bold text-secondary'>
                E
              </div>
              <div>
                <div className='font-title-md text-body-md text-text-primary font-bold'>
                  Dr. Elena Rostova
                </div>
                <div className='font-body-sm text-body-sm text-text-secondary'>
                  Head of School, Innovation Prep
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Story 3 --> */}
          <div className='rounded bg-surface-container-lowest border border-surface-container-high p-space-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow'>
            <div className='space-y-space-md'>
              <div className='flex items-center gap-1 text-amber-400'>
                <Star className='size-4' />
                <Star className='size-4' />
                <Star className='size-4' />
                <Star className='size-4' />
                <Star className='size-4' />
              </div>
              <p className='font-body-md text-body-md text-text-secondary leading-relaxed italic'>
                “Before Obo Robotics, I thought coding was boring math tests.
                Now I built an automated trash collector that sorts aluminum
                using light sensors. I want to be a roboticist for clean
                oceans!”
              </p>
            </div>
            <div className='pt-space-lg flex items-center gap-3 border-t border-surface-container mt-space-md'>
              <div className='w-11 h-11 rounded bg-tertiary-fixed flex items-center justify-center font-headline-sm text-headline-sm font-bold text-glow-amber'>
                A
              </div>
              <div>
                <div className='font-title-md text-body-md text-text-primary font-bold'>
                  Aria K., Age 12
                </div>
                <div className='font-body-sm text-body-sm text-text-secondary'>
                  State Robotics Tournament Finalist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
