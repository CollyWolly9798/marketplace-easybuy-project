import Link from 'next/link.js';
import Logo from '@/components/ui/logo/Logo.jsx';
import DropdownBtn from '@/components/ui/dropdown-btn/DropdownBtn.jsx';
import SearchBox from '@/components/ui/search-box/SearchBox.jsx';
import HeaderIcons from '@/components/ui/header-icons/HeaderIcons.jsx';
import SignUp from '@/features/auth/sign-up/SignUp.jsx';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Logo />
        <DropdownBtn />
        <Link className={style.sale} href='/sale'>
          Sale
        </Link>
        <SearchBox />
        <HeaderIcons />
        <SignUp />
      </nav>
    </header>
  );
};

export default Header;
