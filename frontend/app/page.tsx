import { CoreProduct } from './_components/core-product';
import CtaBanner from './_components/cta-banner';
import { Hero } from './_components/hero';
import { LearningPathways } from './_components/learning-pathways';
import { MetricStrip } from './_components/metric-strip';
import { MissionStatement } from './_components/mission-statement';
import { Testimonial } from './_components/testimonial';

export default function Home() {
  return (
    <>
      <main className='w-full pt-20 bg-surface min-h-screen'>
        <div className='flex flex-col w-full'>
          <Hero />

          {/* <!-- IMPACT & METRICS DASHBOARD STRIP --> */}
          <MetricStrip />
          {/* <!-- PROBLEM & MISSION STATEMENT BANNER --> */}
          <MissionStatement />
          {/* <!-- CORE PRODUCTS & SERVICES GRID --> */}
          <CoreProduct />
          {/* <!-- INTERACTIVE CURRICULUM & LEARNING PATHWAYS --> */}
          <LearningPathways />
          {/* <!-- TESTIMONIALS & SCHOOL STORIES --> */}
          <Testimonial />
          {/* <!-- FINAL HIGH-CONVERSION CTA BANNER --> */}
          <CtaBanner />
        </div>
      </main>
    </>
  );
}
