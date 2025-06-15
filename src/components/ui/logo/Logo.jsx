import Image from 'next/image';
import Link from 'next/link.js';
import style from './Logo.module.scss';
import LogoMobileIcon from '@/components/icons/mobile/LogoMobileIcon.tsx';

const Logo = () => {
  return (
    <>
      <Link className={style.mobile} href='/'>
        <LogoMobileIcon />
      </Link>
      <Link className={style.logo} href='/'>
        <Image src='/img/logo/logo.png' alt='easybuy logo' width={218} height={44} />
      </Link>
    </>
  );
};

export default Logo;
