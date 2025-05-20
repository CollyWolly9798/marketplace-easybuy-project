import SmallCarousel from '../../../components/ui/small-carousel/SmallCarousel.tsx';
import UaPromo from '../UaPromo/UaPromo.jsx';
import LinkIcon from '@/components/icons/LinkIcon.jsx';
import './UkrainianBrands.scss';

const images = [
  '/img/ua-brands/x-store.png',
  '/img/ua-brands/ricky-hype.png',
  '/img/ua-brands/black-limit.png',
  '/img/ua-brands/norba.png',
  '/img/ua-brands/x-store.png',
  '/img/ua-brands/ricky-hype.png',
  '/img/ua-brands/black-limit.png',
  '/img/ua-brands/norba.png',
];

export default function UkrainianBrands() {
  return (
    <section className='section-container'>
      <div className='section-wrapper'>
        <h2 className='section-logo'>Ukrainian Brands</h2>
        <a className='section-link' href='#'>
          Shop now
          <LinkIcon />
        </a>
      </div>
      <SmallCarousel images={images} />
      <UaPromo />
    </section>
  );
}
