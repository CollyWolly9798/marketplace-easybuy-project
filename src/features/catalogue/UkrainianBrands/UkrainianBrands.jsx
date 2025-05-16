import SmallCarousel from '../../../components/ui/small-carousel/SmallCarousel.tsx';
import UaPromo from '../UaPromo/UaPromo.jsx';
import './UkrainianBrands.scss';

const images = [
  '/img/ua-brands/brand-ua-1.png',
  '/img/ua-brands/brand-ua-2.png',
  '/img/ua-brands/brand-ua-3.png',
  '/img/ua-brands/brand-ua-4.png',
  '/img/ua-brands/brand-ua-1.png',
  '/img/ua-brands/brand-ua-2.png',
  '/img/ua-brands/brand-ua-3.png',
  '/img/ua-brands/brand-ua-4.png',
];

export default function UkrainianBrands() {
  return (
    <section className='section-container'>
      <div className='section-wrapper'>
        <h2 className='section-logo'>Ukrainian Brands</h2>
        <a className='section-link' href='#'>
          Shop now
          <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M13.6683 7.66217L10 7.66216C8.34315 7.66215 7 9.0053 7 10.6622L7 21.9997C7 23.6566 8.34315 24.9997 10 24.9997L21.3376 24.9997C22.9944 24.9997 24.3376 23.6566 24.3376 21.9997V18.3314M14.3351 17.6646L24.3376 7.66215M19.0029 7.66211L24.3375 7.67188L24.3375 12.9967'
              stroke='#104C9A'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </a>
      </div>
      <SmallCarousel images={images} />
      <UaPromo />
    </section>
  );
}
