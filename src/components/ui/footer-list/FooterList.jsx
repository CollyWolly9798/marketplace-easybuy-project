import Link from 'next/link';
import style from './FooterList.module.scss';

const FooterList = () => {
  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        <li>
          <Link href='!#' className={style.link}>
            Catalogue
          </Link>
        </li>
        <li>
          <Link href='!#' className={style.link}>
            Contacts
          </Link>
        </li>
        <li>
          <Link href='!#' className={style.link}>
            Sale
          </Link>
        </li>
      </ul>
      <ul className={style.list}>
        <li>
          <Link href='!#' className={style.link}>
            Delivery and payment
          </Link>
        </li>
        <li>
          <Link href='!#' className={style.link}>
            Guarantee
          </Link>
        </li>
        <li>
          <Link href='!#' className={style.link}>
            Product return
          </Link>
        </li>
      </ul>
      <ul className={style.list}>
        <li>
          <Link href='!#' className={style.link}>
            Support
          </Link>
        </li>
        <li>
          <Link href='!#' className={style.link}>
            News
          </Link>
        </li>
        <li>
          <Link href='!#' className={style.link}>
            Marketplace Guide
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterList;
