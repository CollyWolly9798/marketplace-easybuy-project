import Image from 'next/image.js';
import PumaIcon from '@/components/icons/PumaIcon.jsx';
import './FavoritePromo.scss';

export default function FavoritePromo() {
  return (
    <section className='promo-banner'>
      <div className='promo-content'>
        <div className='promo-text'>
          <p className='promo-discount'>-30%</p>
          <PumaIcon />
        </div>
        <div className='promo-image'>
          <Image src='/img/cross puma.png' alt='Puma Shoe' width={809} height={439} />
        </div>
      </div>
    </section>
  );
}
