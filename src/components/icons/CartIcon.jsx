import * as React from 'react';

const CartIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31"
    height="30"
    fill="none"
    viewBox="0 0 31 30"
    className={props.className}
    {...props}
  >
    <path
      stroke="#FFF5EE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M26.6 16.072H9.07L6.929 5.357h21.428a1.07 1.07 0 0 1 1.05 1.265l-1.757 8.571a1.05 1.05 0 0 1-1.05.879M6.928 5.358l-.9-3.429a1.07 1.07 0 0 0-1.05-.857H1.57M9.07 16.072l.9 4.5a1.07 1.07 0 0 0 1.05.857h13.05"
    ></path>
    <path
      fill="#FFF5EE"
      stroke="#FFF5EE"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22.999 28.93a1.071 1.071 0 1 1 0-2.143 1.071 1.071 0 0 1 0 2.143M12.284 28.93a1.071 1.071 0 1 1 0-2.143 1.071 1.071 0 0 1 0 2.143"
    ></path>
  </svg>
);

export default CartIcon;
