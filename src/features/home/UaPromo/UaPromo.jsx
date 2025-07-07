import Image from 'next/image.js';
import './UaPromo.scss';

export default function UaPromo() {
  return (
    <div className='ua-promo'>
      <div className='ua-overlay' />
      <div className='ua-content'>
        <h2 className='ua-title'>Christmas Sale</h2>
        <p className='ua-subtitle'>Up to -33%</p>
        <Image className='ua-img' src='/img/ua-bobo.png' alt='Bobo' width={1680} height={670} />
      </div>
    </div>
  );
}
