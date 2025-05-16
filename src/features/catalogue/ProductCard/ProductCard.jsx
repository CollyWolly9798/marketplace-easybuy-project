'use client';

import Image from 'next/image.js';
import { useState } from 'react';
import FavoriteBtn from '@/components/ui/favorite-btn/FavoriteBtn.jsx';
import StarRating from '@/components/ui/star-rating/StarRating.jsx';
import SmallCartIcon from '@/components/icons/SmallCartIcon.jsx';
import './ProductCard.scss';

export default function ProductCard({ isOnSale, image, title, brand, price, oldPrice, colors }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => setIsFavorite(prev => !prev);

  return (
    <div className='product-card'>
      <div className='img-wrapper'>
        {isOnSale && <div className='badge'>On Sale</div>}
        <Image src={image} alt={title} className='product-image' width={396} height={544} />
        <StarRating initialRating={3} />
      </div>
      <button className='favorite-btn' onClick={toggleFavorite}>
        <FavoriteBtn isFavorite={isFavorite} />
      </button>
      <div className='product-info'>
        <div className='price-section'>
          <span className='price'>${price.toFixed(2)}</span>
          {oldPrice && <span className='old-price'>${oldPrice.toFixed(2)}</span>}
        </div>
        <p className='product-title'>{title}</p>
        <p className='product-brand'>{brand}</p>

        <div className='colors'>
          {colors.map((color, idx) => (
            <span key={idx} className='color-dot' style={{ backgroundColor: color }}></span>
          ))}
        </div>
        <button className='add-to-cart'>
          <SmallCartIcon />
          <p className='add-to-cart-text'>Add to Cart</p>
        </button>
      </div>
    </div>
  );
}
