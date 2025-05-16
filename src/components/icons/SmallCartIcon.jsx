const SvgIcon = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='17'
    height='16'
    fill='none'
    viewBox='0 0 17 16'
    className={props.className}
    {...props}
  >
    <path
      stroke='#F8F9FB'
      strokeLinecap='round'
      strokeWidth='1.5'
      d='M2.45 2.52H13.79a1.5 1.5 0 0 1 1.47 1.799l-.419 2.054a1.5 1.5 0 0 1-1.315 1.192l-9.497.983M2.45 2.52 1.375.875M2.45 2.519l1.578 6.03m9.715 2.191H6.868c-1.335 0-2.502-.9-2.84-2.192m2.724 5.48c0 .606-.481 1.097-1.075 1.097S4.6 14.635 4.6 14.029s.482-1.096 1.076-1.096 1.075.49 1.075 1.096Zm6.99 0c0 .606-.48 1.097-1.075 1.097-.594 0-1.075-.49-1.075-1.096s.481-1.096 1.076-1.096c.593 0 1.075.49 1.075 1.096Z'
    ></path>
  </svg>
);

export default SvgIcon;
