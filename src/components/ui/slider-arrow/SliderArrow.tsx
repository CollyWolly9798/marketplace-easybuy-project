'use client';

import React from 'react';
import clsx from 'clsx';

interface CarouselArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const CarouselArrow: React.FC<CarouselArrowProps> = ({
  direction,
  onClick,
  className,
  icon,
  ...rest
}) => {
  const positionClass = direction === 'left' ? '-left-[10%]' : '-right-[10%]';

  return (
    <button
      onClick={onClick}
      className={clsx(
        'hidden lg:flex items-center justify-center w-14 h-14 rounded-full',
        'bg-white2 shadow-md hover:scale-110 transition-transform duration-300',
        'absolute top-1/2 -translate-y-1/2 z-10',
        positionClass,
        className
      )}
      {...rest}
    >
      {icon}
    </button>
  );
};

export default CarouselArrow;
