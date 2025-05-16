import LargeCarousel from '@/components/ui/large-carousel/LargeCarousel';
import { Slide } from '@/types/Slider';
import './Promo.scss';

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
    <section className='section-promo'>
      <LargeCarousel slides={slides} />
    </section>
  );
}
