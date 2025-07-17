import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LogoFooter = () => {
  return (
    <Link href="/">
      <Image src="/img/logo/logo.png" alt="easybuy logo" width={218} height={44} />
    </Link>
  );
};

export default LogoFooter;
