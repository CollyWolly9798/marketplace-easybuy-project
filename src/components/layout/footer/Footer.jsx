import FooterList from '@/components/ui/footer-list/FooterList.jsx';
import FooterSeller from '@/components/ui/footer-seller/FooterSeller.jsx';
import SocialList from '@/components/ui/social-list/SocialList.jsx';
import Privacy from '@/components/ui/privacy/Privacy.jsx';
import LogoFooter from '@/components/ui/logo-footer/LogoFooter.jsx';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.logo}>
          <LogoFooter />
        </div>
        <div className={style.wrapper}>
          <FooterList />
          <FooterSeller />
        </div>
        <div className={style.social}>
          <SocialList />
          <Privacy />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
