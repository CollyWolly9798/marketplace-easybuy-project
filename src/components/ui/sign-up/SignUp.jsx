import ProfileIcon from '@/components/icons/ProfileIcon.jsx';
import style from './SignUp.module.scss';
import Link from 'next/link.js';

const SignUp = () => {
  return (
    <div className={style.wrapper}>
      <Link className={style.link} href='/signup'>
        <ProfileIcon className={style.icon} />
        Sign up
      </Link>
    </div>
  );
};

export default SignUp;
