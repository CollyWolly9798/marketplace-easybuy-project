import React from 'react';

const SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 19"
    fill="none"
    width="30"
    height="19"
    {...props}
  >
    <path
      stroke="#FFF5EE"
      strokeLinecap="round"
      strokeWidth="2"
      d="M11.563 1.063h16.5m-26.125 16.5h16.5m-16.5-8.25h26.125"
    />
  </svg>
);

export default SvgIcon;
