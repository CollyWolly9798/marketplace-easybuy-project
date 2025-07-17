import Link from 'next/link';
import LikeIcon from '@/components/icons/LikeIcon';
import TouchIcon from '@/components/icons/TouchIcon';
import CartIcon from '@/components/icons/CartIcon';

const HeaderIcons = () => {
  return (
    <ul className="flex items-center gap-5">
      <li className="hidden lg:flex">
        <Link href="#">
          <LikeIcon className="transition duration-200 group/icon hover:fill-white2 focus:fill-white2" />
        </Link>
      </li>
      <li className="hidden lg:flex">
        <Link href="#">
          <TouchIcon className="transition duration-200 group/icon hover:fill-white2 focus:fill-white2" />
        </Link>
      </li>
      <li>
        <Link href="#">
          <CartIcon className="transition duration-200 group/icon hover:fill-white2 focus:fill-white2" />
        </Link>
      </li>
    </ul>
  );
};

export default HeaderIcons;
