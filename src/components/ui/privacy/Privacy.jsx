import Link from 'next/link.js';
import CopyrightIcon from '../../icons/CopyrightIcon.jsx';
import style from './Privacy.module.scss';

const Privacy = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.text}>
        <CopyrightIcon />
        <p>Easybuy.2024</p>
        <p>All rights reserved</p>
      </div>
      <div className={style.link}>
        <Link href='!#' className={style.link}>
          Privacy Policy
        </Link>
        <Link href='!#' className={style.link}>
          User Agreement
        </Link>
      </div>
    </div>
  );
};

export default Privacy;
