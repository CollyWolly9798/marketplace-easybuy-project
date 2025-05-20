import SmallCarousel from '@/components/ui/small-carousel/SmallCarousel.tsx';
import FavoritePromo from '@/features/catalogue/FavoritePromo/FavoritePromo.jsx';
import LinkIcon from '@/components/icons/LinkIcon.jsx';
import './FavoriteBrands.scss';

const images = [
  '/img/brands/levis-brand.png',
  '/img/brands/zara-brand.png',
  '/img/brands/levis-brand.png',
  '/img/brands/zara-brand.png',
  '/img/brands/levis-brand.png',
  '/img/brands/zara-brand.png',
  '/img/brands/levis-brand.png',
  '/img/brands/zara-brand.png',
  '/img/brands/levis-brand.png',
  '/img/brands/zara-brand.png',
];

export default function FavoriteBrandsNew() {
  return (
    <section className='section-container'>
      <div className='section-wrapper'>
        <h2 className='section-logo'>Favorite brands</h2>
        <a className='section-link' href='#'>
          Shop now
          <LinkIcon />
        </a>
      </div>
      <SmallCarousel images={images} imageClassName='favorite-brand-image' />
      <FavoritePromo />
    </section>
  );
}
