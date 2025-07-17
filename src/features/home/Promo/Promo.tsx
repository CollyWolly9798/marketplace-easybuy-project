import { Slide } from '@/types/Slider';
import LargeSlider from '@/components/ui/large-slider/LargeSlider';

const slides: Slide[] = [
  {
    id: 1,
    image: '/img/banner.jpg',
    title: 'Big Holiday Sale',
    description: 'Up to -50%',
  },
  {
    id: 2,
    image: '/img/banner.jpg',
    title: 'New Arrivals',
    description: 'Check out our new collection',
  },
  {
    id: 3,
    image: '/img/banner.jpg',
    title: 'Clearance',
    description: 'Last chance items',
  },
];
export default function Promo() {
  return (
    <section className="pb-9 pt-6 lg:pt-[56px]">
      <LargeSlider slides={slides} />
    </section>
  );
}
