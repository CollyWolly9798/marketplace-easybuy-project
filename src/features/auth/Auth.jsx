'use client';

import { useState } from 'react';
import SignUpForm from '@/features/auth/signup-form/SignUpForm.jsx';
import SignInForm from '@/features/auth/sign-in/SignInForm.jsx';
// import SignWith from '@/components/ui/sign-with/SignWith.jsx';
// import GoogleAuthIcon from '@/components/icons/GoogleAuthIcon.jsx';
// import FacebookAuthIcon from '@/components/icons/FacebookAuthIcon.jsx';
// import AppleAuthIcon from '@/components/icons/AppleAuthIcon.jsx';

// const providers = [
//   { icon: GoogleAuthIcon, name: 'Google', href: '!#' },
//   { icon: FacebookAuthIcon, name: 'Facebook', href: '!#' },
//   { icon: AppleAuthIcon, name: 'Apple', href: '!#' },
// ];

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isLogin ? (
        <>
          <SignInForm />
          <div className="flex gap-3 justify-end ">
            <p className="text-[#08034b]">Don't have an account?</p>
            <button className="text-[#2080c0] underline" onClick={() => setIsLogin(false)}>
              Sing up
            </button>
          </div>
          {/*<SignWith providers={providers} />*/}
        </>
      ) : (
        <>
          <SignUpForm />
          <div className="flex gap-3 justify-end ">
            <p className="text-[#08034b]">Already have an account?</p>
            <button
              className="text-[#2080c0] underline lg:cursor-pointer"
              onClick={() => setIsLogin(true)}
            >
              Log in
            </button>
          </div>
          {/*<SignWith providers={providers} />*/}
        </>
      )}
    </>
  );
};

export default Auth;
