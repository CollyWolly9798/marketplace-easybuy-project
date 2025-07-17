'use client';

import Link from 'next/link';
import Logo from '@/components/ui/logo/Logo.jsx';
import DropdownBtn from '@/components/ui/dropdown-btn/DropdownBtn.jsx';
import SearchBox from '@/components/ui/search-box/SearchBox.jsx';
import HeaderIcons from '@/components/ui/header-icons/HeaderIcons.jsx';
import BurgerButton from '@/components/ui/burger-btn/BurgerBtn.tsx';
import { useSelector } from 'react-redux';
import SignUp from '@/features/auth/sign-up-btn/SignUp';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <header className="bg-main shadow-main border4 border-solid border-[#5e7ea6] ">
      <nav className="w-full flex items-center justify-between py-5 py-0 container">
        <BurgerButton />
        <Logo />
        <DropdownBtn />
        <Link className="hidden lg:block btnHeader text-[32px]" href="/sale">
          Sale
        </Link>
        <SearchBox />
        <HeaderIcons />

        {isLoggedIn ? (
          <Link className="hidden lg:block " href="/profile">
            <p className="w-16 h-16 rounded-[50%] bg-white flex items-center justify-center text-xl">
              P
            </p>
          </Link>
        ) : (
          <SignUp />
        )}
      </nav>
    </header>
  );
};

export default Header;
