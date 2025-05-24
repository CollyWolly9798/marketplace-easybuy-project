'use client';

import { useState } from 'react';
import SignUpForm from '@/features/auth/signup-form/SignUpForm.jsx';
import SignInForm from '@/features/auth/sign-in/SignInForm.jsx';
import SignWith from '@/components/ui/sign-with/SignWith.jsx';
import GoogleAuthIcon from '@/components/icons/GoogleAuthIcon.jsx';
import FacebookAuthIcon from '@/components/icons/FacebookAuthIcon.jsx';
import AppleAuthIcon from '@/components/icons/AppleAuthIcon.jsx';
import style from './Auth.module.scss';

const providers = [
  { icon: GoogleAuthIcon, name: 'Google', href: '!#' },
  { icon: FacebookAuthIcon, name: 'Facebook', href: '!#' },
  { icon: AppleAuthIcon, name: 'Apple', href: '!#' },
];

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className={style.container}>
      {isLogin ? (
        <>
          <SignInForm />
          <div className={style.wrapper}>
            <p className={style.text}>Don't have an account?</p>
            <button className={style.btn} onClick={() => setIsLogin(false)}>
              Sing up
            </button>
          </div>
          <SignWith providers={providers} />
        </>
      ) : (
        <>
          <SignUpForm />
          <div className={style.wrapper}>
            <p className={style.text}>Already have an account?</p>
            <button className={style.btn} onClick={() => setIsLogin(true)}>
              Log in
            </button>
          </div>
          <SignWith providers={providers} />
        </>
      )}
    </div>
  );
};

export default Auth;
