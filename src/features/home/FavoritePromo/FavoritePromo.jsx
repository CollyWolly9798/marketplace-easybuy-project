import Image from 'next/image.js';
import PumaIcon from '@/components/icons/PumaIcon.jsx';
import './FavoritePromo.scss';

export default function FavoritePromo() {
  return (
    <section className='bg-white rounded-3xl shadow lg:rounded-none'>
      <div className='flex  justify-between items-center flex-wrap p-6 lg:py-[77px] lg:px-[143px]'>
        <div className='flex flex-col '>
          <p className='text-[56px] text-center bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-zen lg:text-[160px]'>-30%</p>
          <PumaIcon />
        </div>
        <div >
          <Image src='/img/cross puma.png' alt='Puma Shoe' width={809} height={439} />
        </div>
      </div>
    </section>
  );
}
