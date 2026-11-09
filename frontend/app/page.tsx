import CognitiveGrowth from './_components/pages/home/cognitive-growth';
import CtaBanner from './_components/pages/home/cta-banner';
import HomeHero from './_components/pages/home/hero';
import HomeParadigm from './_components/pages/home/home-paradigm';
import ProductEcosystem from './_components/pages/home/product-ecosystem';
import Testimonial from './_components/pages/home/testimonial';

export default function Home() {
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
