import Image from 'next/image.js';
import './FavoritePromo.scss';

export default function FavoritePromo() {
  return (
    <section className='promo-banner'>
      <div className='promo-content'>
        <div className='promo-text'>
          <p className='promo-discount'>-30%</p>
          <Image src='/img/icons/puma-logo 1.svg' alt='Puma Logo' className='brand-logo' width={396} height={220} />
        </div>
        <div className='promo-image'>
          <Image src='/img/cross puma.png' alt='Puma Shoe' width={809} height={439} />
        </div>
      </div>
    </section>
  );
}
