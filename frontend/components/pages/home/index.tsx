import CognitiveGrowth from './cognitive-growth';
import CtaBanner from './cta-banner';
import HomeHero from './hero';
import HomeParadigm from './home-paradigm';
import ProductEcosystem from './product-ecosystem';
import Testimonial from './testimonial';

export default function HomePage() {
  return (
    <main className='w-full pt-20 bg-surface min-h-screen'>
      <div className='flex flex-col w-full'>
        <HomeHero />
        <HomeParadigm />
        <ProductEcosystem />
        <CognitiveGrowth />
        <Testimonial />
        <CtaBanner />
      </div>
    </main>
  );
}
