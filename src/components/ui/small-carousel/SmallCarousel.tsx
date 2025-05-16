'use client';

import Slider from 'react-slick';
import './SmallCarousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import Image from 'next/image';

interface SmallCarouselProps {
  images: string[];
  slidesToShow?: number;
  autoplaySpeed?: number;
}

export default function SmallCarousel({ images, slidesToShow = 6, autoplaySpeed = 2000 }: SmallCarouselProps) {
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
        <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M31.667 16.8517L21.8486 26.7472C21.5191 27.0794 21.334 27.5299 21.334 27.9997C21.334 28.4694 21.5191 28.9199 21.8486 29.2521L31.667 39.1477C31.9128 39.3953 32.2259 39.564 32.5668 39.6323C32.9077 39.7006 33.2611 39.6656 33.5822 39.5315C33.9034 39.3975 34.1778 39.1705 34.371 38.8792C34.5641 38.588 34.6672 38.2455 34.6673 37.8952V18.1041C34.6672 17.7538 34.5641 17.4114 34.371 17.1201C34.1778 16.8289 33.9034 16.6019 33.5822 16.4678C33.2611 16.3338 32.9077 16.2987 32.5668 16.367C32.2259 16.4353 31.9128 16.604 31.667 16.8517Z'
            fill='#1F487E'
          />
        </svg>
      </button>
      <div className='slider-container'>
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <Image key={index} src={img} alt={`brand-${index}`} width={122} height={52} />
          ))}
        </Slider>
      </div>
      <button className='small-carousel-button-next' onClick={() => sliderRef.current?.slickNext()}>
        <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M24.3343 39.1477L34.1527 29.2521C34.4822 28.9199 34.6673 28.4694 34.6673 27.9997C34.6673 27.5299 34.4822 27.0794 34.1527 26.7472L24.3343 16.8517C24.0885 16.604 23.7754 16.4353 23.4345 16.367C23.0936 16.2987 22.7402 16.3338 22.4191 16.4678C22.0979 16.6019 21.8235 16.8289 21.6303 17.1201C21.4372 17.4114 21.3341 17.7538 21.334 18.1041V37.8952C21.3341 38.2455 21.4372 38.588 21.6303 38.8792C21.8235 39.1705 22.0979 39.3975 22.4191 39.5315C22.7402 39.6656 23.0936 39.7006 23.4345 39.6323C23.7754 39.564 24.0885 39.3953 24.3343 39.1477Z'
            fill='#1F487E'
          />
        </svg>
      </button>
    </div>
  );
}
