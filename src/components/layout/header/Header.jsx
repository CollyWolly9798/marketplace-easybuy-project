'use client'

import Link from 'next/link';
import Logo from '@/components/ui/logo/Logo.jsx';
import DropdownBtn from '@/components/ui/dropdown-btn/DropdownBtn.jsx';
import SearchBox from '@/components/ui/search-box/SearchBox.jsx';
import HeaderIcons from '@/components/ui/header-icons/HeaderIcons.jsx';
import BurgerButton from '@/components/ui/burger-btn/BurgerBtn.tsx';
import { useSelector } from "react-redux";
import Auth from "@/features/auth/Auth";
import style from './Header.module.scss';
import SignUp from "@/features/auth/sign-up-btn/SignUp";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
      <header className={style.header}>
        <nav className={style.nav}>
          <BurgerButton />
          <Logo />
          <DropdownBtn />
          <Link className={style.sale} href='/sale'>
            Sale
          </Link>
          <SearchBox />
          <HeaderIcons />

          {isLoggedIn ? (
              <Link href="/profile">
                <button>Профіль</button>
              </Link>
          ) : (
              <SignUp />
          )}
        </nav>
      </header>
  );
};

export default Header;
