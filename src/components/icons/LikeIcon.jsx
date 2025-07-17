const LikeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31"
    height="26"
    viewBox="0 0 31 26"
    className={props.className}
    {...props}
  >
    <path
      fill="#FFF5EE"
      stroke="#FFF5EE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15.5 24.68 3.671 13.964c-6.428-6.429 3.022-18.772 11.83-8.786 8.806-9.986 18.213 2.4 11.828 8.786z"
    />
  </svg>
);

export default LikeIcon;
