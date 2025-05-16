const TouchIcon = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='25'
    height='29'
    fill='none'
    viewBox='0 0 25 29'
    className={props.className}
    {...props}
  >
    <path
      fill='#FFF5EE'
      d='M9.285 28.929v-11.25a2.679 2.679 0 0 1 5.357 0v5.892h4.286a4.286 4.286 0 0 1 4.286 4.286v1.072'
    ></path>
    <path
      stroke='#FFF5EE'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M9.285 28.929v-11.25A2.68 2.68 0 0 1 11.964 15a2.68 2.68 0 0 1 2.678 2.679v5.892h4.286a4.286 4.286 0 0 1 4.286 4.286v1.072'
    ></path>
    <path
      stroke='#FFF5EE'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M4.764 18.45a10.178 10.178 0 1 1 14.4 0'
    ></path>
  </svg>
);

export default TouchIcon;
