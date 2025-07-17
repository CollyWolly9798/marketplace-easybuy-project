const SearchIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="16"
    fill="none"
    viewBox="0 0 17 16"
    className={className}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.787 10.858a5.143 5.143 0 1 0 0-10.286 5.143 5.143 0 0 0 0 10.286"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.214 4.195a1.713 1.713 0 0 0-2.64-.263M1.072 15.43 7.45 9.634"
    />
  </svg>
);

export default SearchIcon;
