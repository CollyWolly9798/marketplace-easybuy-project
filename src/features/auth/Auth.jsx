'use client';

import { useState } from 'react';
import SignUpForm from '@/features/auth/signup-form/SignUpForm.jsx';
import SignInForm from '@/features/auth/sign-in/SignInForm.jsx';
import style from './Auth.module.scss';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      {isLogin ? (
        <>
          <SignInForm />
          <div className={style.wrapper}>
            <p className={style.text}>Don't have an account?</p>
            <button className={style.btn} onClick={() => setIsLogin(false)}>
              Sing up
            </button>
          </div>
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
        </>
      )}
    </div>
  );
};

export default Auth;
