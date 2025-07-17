import FavoritePromo from '@/features/home/FavoritePromo/FavoritePromo.jsx';
import LinkIcon from '@/components/icons/LinkIcon.jsx';
import Link from 'next/link';
import SmallSlider from '@/components/ui/small-slider/SmallSlider';

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
    <section className="section-container">
      <div className="flex items-center justify-between mb-[24px] lg:mb-[72px] border-b border-dashed ">
        <h2 className="font-dm font-bold lg:text-[40px]">Favorite brands</h2>
        <Link
          className='relative inline-flex items-center gap-2 text-[32px] leading-[48px]  transition-colors duration-300 ease-in-out hover:text-blue-600
         after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-700
         after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100
         after:transition-transform after:duration-300 after:ease-in-out '
          href="#"
        >
          <span className="hidden md:inline text-4xl">Shop now</span>
          <LinkIcon className="transition-transform duration-300 ease-in-out group-hover:translate-x-[5px]" />
        </Link>
      </div>
      <SmallSlider images={images} isFixedSize={true} />
      <FavoritePromo />
    </section>
  );
}
