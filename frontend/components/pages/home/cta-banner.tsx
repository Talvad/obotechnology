import { Check, Download, GraduationCap } from 'lucide-react';

function CtaBanner() {
  return (
    <section className='w-full pb-space-3xl pt-space-xl relative bg-surface'>
      <div className='max-w-[1320px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg'>
        <div className='relative rounded-xl bg-gradient-to-br from-white via-surface-container-low to-surface-container p-space-xl md:p-space-3xl border border-surface-container-high shadow-xl overflow-hidden'>
          {/* <!-- Ambient Orbit Ring Background Decoration --> */}
          <div className='pointer-events-none absolute -bottom-20 -right-20 w-[450px] h-[450px] rounded-full bg-primary-fixed/40 blur-[100px]'></div>
          <div className='pointer-events-none absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full bg-secondary-fixed/40 blur-[100px]'></div>
          <div className='relative z-10 max-w-3xl mx-auto text-center space-y-space-md'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-outline-variant text-primary font-label-caps text-label-caps uppercase shadow-sm'>
              Start Your Academic Transformation
            </div>
            <h2 className='font-headline-hero text-headline-hero text-text-primary tracking-tight leading-[1.1]'>
              Ready to Bring Next-Gen Robotics to Your Classroom?
            </h2>
            <p className='font-body-lg text-body-lg text-text-secondary max-w-xl mx-auto leading-relaxed'>
              Equip your students with the computational mindset, hardware
              intuition, and creative confidence they need to pioneer tomorrow.
            </p>
            {/* <!-- Action Container --> */}
            <div className='pt-space-md flex flex-col sm:flex-row items-center justify-center gap-space-md'>
              <a
                className='w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-4 rounded bg-primary text-on-primary font-headline-sm text-body-lg font-bold shadow-md hover:brightness-110 active:scale-95 transition-all'
                href='#'
              >
                <GraduationCap className='size-5' />
                Request School Demonstration
              </a>
              <a
                className='w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-4 rounded bg-white border border-surface-container-high text-text-primary hover:bg-surface-container-low font-headline-sm text-body-lg font-semibold shadow-sm transition-all'
                href='#'
              >
                <Download className='size-5' />
                Download Curriculum Guide (PDF)
              </a>
            </div>
            {/* <!-- Micro Confidence Guarantee --> */}
            <div className='pt-space-md flex items-center justify-center gap-space-lg text-text-secondary font-title-md text-body-sm'>
              <span className='flex items-center gap-1.5'>
                <Check className='size-4 text-primary' />
                30-Day Classroom Pilot Kits
              </span>
              <span className='flex items-center gap-1.5'>
                <Check className='size-4 text-primary' />
                Direct Teacher Grants Supported
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
