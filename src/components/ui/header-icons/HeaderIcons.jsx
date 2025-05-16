import Link from 'next/link';
import LikeIcon from '@/components/icons/LikeIcon';
import TouchIcon from '@/components/icons/TouchIcon';
import CartIcon from '@/components/icons/CartIcon';
import style from './HeaderIcons.module.scss';

const HeaderIcons = () => {
  return (
    <ul className={style.list}>
      <li>
        <Link href='#'>
          <LikeIcon className={style.icon} />
        </Link>
      </li>
      <li>
        <Link href='#'>
          <TouchIcon className={style.icon} />
        </Link>
      </li>
      <li>
        <Link href='#'>
          <CartIcon className={style.icon} />
        </Link>
      </li>
    </ul>
  );
};

export default HeaderIcons;
