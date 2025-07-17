'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Slide } from '@/types/Slider';
import React from 'react';
import Image from 'next/image';
import ArrRightIcon from '@/components/icons/ArrRightIcon';
import ArrLeftIcon from '@/components/icons/ArrLeftIcon';

export interface LargeSliderProps {
  slides: Slide[];
}

export default function LargeSlider({ slides }: LargeSliderProps) {
  return (
    <div className="relative w-full max-w-[343px] h-[200px] md:max-w-[1680px] md:h-[670px] mx-auto">
      <Swiper
        slidesPerView={1}
        loop
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
          renderBullet: (index, className) => `<span class="${className} custom-bullet"></span>`,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full h-full rounded-2xl md:rounded-none"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[200px] md:h-[670px] ">
              <Image src={slide.image} alt={slide.title} fill className="object-cover" priority />

              <div className="absolute inset-0 flex items-end justify-end">
                <div className="w-full md:w-[600px] h-full bg-gradient-to-l from-black/80 to-transparent p-4 md:p-12 flex flex-col justify-center text-white text-end">
                  <h3 className="font-bold text-xl md:text-6xl leading-tight md:mb-4">
                    {slide.title}
                  </h3>
                  <p className="text-sm md:text-3xl">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="custom-pagination hidden md:flex absolute bottom-4 left-0 right-0 justify-center z-10 gap-2 md:gap-4" />

        <div className="custom-prev hidden md:flex absolute bottom-[72px] left-6 w-[56px] h-[56px] rounded-full bg-white justify-center items-center z-10 cursor-pointer">
          <ArrLeftIcon />
        </div>
        <div className="custom-next hidden md:flex absolute bottom-[72px] right-6 w-[56px] h-[56px] rounded-full bg-white justify-center items-center z-10 cursor-pointer">
          <ArrRightIcon />
        </div>
      </Swiper>
    </div>
  );
}
