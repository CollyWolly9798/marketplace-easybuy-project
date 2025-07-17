import FacebookIcon from '../../icons/FacebookIcon.jsx';
import InstagramIcon from '../../icons/InstagramIcon.jsx';
import TelegramIcon from '../../icons/TelegramIcon.jsx';
import YouTubeIcon from '../../icons/YouTubeIcon.jsx';
import Link from 'next/link.js';
import style from './SocialList.module.scss';

const SocialList = () => {
  return (
    <div className={style.wrapper}>
      <Link href="!#" className={style.icons}>
        <FacebookIcon />
      </Link>
      <Link href="!#" className={style.icons}>
        <InstagramIcon />
      </Link>
      <Link href="!#" className={style.icons}>
        <TelegramIcon />
      </Link>
      <Link href="!#" className={style.icons}>
        <YouTubeIcon />
      </Link>
    </div>
  );
};

export default SocialList;
