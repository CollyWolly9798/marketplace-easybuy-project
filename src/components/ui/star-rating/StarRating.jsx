'use client';
import { useState } from 'react';
import './StarRating.scss';

export default function StarRating(intialRating = 0) {
  const [rating, setRating] = useState(intialRating);
  const [hovered, setHovered] = useState(false);

  const handleClick = (index) => {
    setRating(index);
  };
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        return (
          <svg
            key={index}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={(hovered || rating) >= index ? '#df4300' : '#E0E0E0'}
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{ cursor: 'pointer' }}
          >
            <path d="M6.61502 1.82989C7.12741 0.597955 8.87259 0.597955 9.38498 1.82989L10.4254 4.33145C10.6414 4.85081 11.1299 5.20566 11.6905 5.25061L14.3912 5.46712C15.7212 5.57374 16.2605 7.23351 15.2472 8.10151L13.1896 9.86407C12.7624 10.23 12.5758 10.8042 12.7063 11.3513L13.335 13.9867C13.6445 15.2845 12.2327 16.3103 11.094 15.6148L8.78188 14.2026C8.30186 13.9094 7.69814 13.9094 7.21812 14.2026L4.90599 15.6148C3.76734 16.3103 2.35546 15.2845 2.66504 13.9867L3.29368 11.3513C3.42419 10.8042 3.23763 10.23 2.81045 9.86407L0.752842 8.10151C-0.260464 7.23351 0.278825 5.57374 1.60881 5.46712L4.30945 5.25061C4.87013 5.20566 5.35855 4.85081 5.57456 4.33145L6.61502 1.82989Z" />
          </svg>
        );
      })}
    </div>
  );
}
