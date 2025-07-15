import SmallCarousel from "@/components/ui/small-carousel/SmallCarousel.tsx";
import FavoritePromo from "@/features/home/FavoritePromo/FavoritePromo.jsx";
import LinkIcon from "@/components/icons/LinkIcon.jsx";
import Link from "next/link";

const images = [
  "/img/brands/levis-brand.png",
  "/img/brands/zara-brand.png",
  "/img/brands/levis-brand.png",
  "/img/brands/zara-brand.png",
  "/img/brands/levis-brand.png",
  "/img/brands/zara-brand.png",
  "/img/brands/levis-brand.png",
  "/img/brands/zara-brand.png",
  "/img/brands/levis-brand.png",
  "/img/brands/zara-brand.png",
];

export default function FavoriteBrandsNew() {
  return (
    <section className='section-container'>
      <div className="flex items-center justify-between mb-[24px] lg:mb-6 border-b border-dashed border-blue-500 text-blue-500">
        <h2 className=' lg:text-[40px]'>Favorite brands</h2>
        <Link className='relative inline-flex items-center gap-2 text-[32px] leading-[48px] text-blue-500 mb-6 transition-colors duration-300 ease-in-out hover:text-blue-600
         after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-700
         after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100
         after:transition-transform after:duration-300 after:ease-in-out ' href='#'>
          <span className="hidden md:inline">Shop now</span>
          <LinkIcon className="transition-transform duration-300 ease-in-out group-hover:translate-x-[5px]"/>
        </Link>
      </div>
      <SmallCarousel images={images} imageClassName='favorite-brand-image' />
      <FavoritePromo />
    </section>
  );
}
