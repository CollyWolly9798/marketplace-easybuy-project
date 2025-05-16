export default function FavoriteBtn({ isFavorite }) {
  return isFavorite ? (
    <svg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M18.0984 1.90318C16.2296 0.0322748 13.1996 0.0322746 11.3308 1.90318L10 3.23545L8.6692 1.90318C6.80039 0.0322764 3.77043 0.0322756 1.90161 1.90318C0.0327952 3.77408 0.0327954 6.80741 1.90161 8.67831L10 17.4643L18.0984 8.67831C19.9672 6.80741 19.9672 3.77408 18.0984 1.90318Z'
        fill='url(#paint0_linear_6125_3747)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_6125_3747'
          x1='10'
          y1='0.5'
          x2='10'
          y2='17.4643'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF7400' />
          <stop offset='1' stopColor='#DF4300' />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M18.0984 1.90318C16.2296 0.0322748 13.1996 0.0322746 11.3308 1.90318L10 3.23545L8.6692 1.90318C6.80039 0.0322764 3.77043 0.0322756 1.90161 1.90318C0.0327952 3.77408 0.0327954 6.80741 1.90161 8.67831L10 17.4643L18.0984 8.67831C19.9672 6.80741 19.9672 3.77408 18.0984 1.90318Z'
        stroke='url(#paint0_linear_6125_2424)'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_6125_2424'
          x1='10'
          y1='0.5'
          x2='10'
          y2='17.4643'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF7400' />
          <stop offset='1' stopColor='#DF4300' />
        </linearGradient>
      </defs>
    </svg>
  );
}
