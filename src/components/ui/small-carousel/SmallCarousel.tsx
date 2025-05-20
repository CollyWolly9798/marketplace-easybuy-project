'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrRightIcon from '@/components/icons/ArrRightIcon';
import ArrLeftIcon from '@/components/icons/ArrLeftIcon';
import { useRef } from 'react';
import Image from 'next/image';
import './SmallCarousel.scss';

interface SmallCarouselProps {
  images: string[];
  slidesToShow?: number;
  autoplaySpeed?: number;
  imageClassName?: string;
}

export default function SmallCarousel({
  images,
  slidesToShow = 6,
  autoplaySpeed = 2000,
  imageClassName,
}: SmallCarouselProps) {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed,
    cssEase: 'linear',
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className='small-carousel-wrapper'>
      <button className='small-carousel-button-prev' onClick={() => sliderRef.current?.slickPrev()}>
        <ArrLeftIcon />
      </button>
      <div className='slider-container'>
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <Image key={index} src={img} alt={`brand-${index}`} width={122} height={52} className={imageClassName} />
          ))}
        </Slider>
      </div>
      <button className='small-carousel-button-next' onClick={() => sliderRef.current?.slickNext()}>
        <ArrRightIcon />
      </button>
    </div>
  );
}
