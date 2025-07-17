import Image from 'next/image';
import Link from 'next/link.js';
import LogoMobileIcon from '@/components/icons/mobile/LogoMobileIcon.tsx';

const Logo = () => {
  return (
    <>
      <Link className="lg:hidden" href="/">
        <LogoMobileIcon />
      </Link>
      <Link className="hidden lg:block" href="/">
        <Image src="/img/logo/logo.png" alt="easybuy logo" width={218} height={44} />
      </Link>
    </>
  );
};

export default Logo;
