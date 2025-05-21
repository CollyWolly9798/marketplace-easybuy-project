'use client';

import { useState } from 'react';
import ProfileIcon from '@/components/icons/ProfileIcon.jsx';
import Modal from '@/components/ui/modal/Modal.tsx';
import Auth from '../Auth.jsx';
import style from './SignUp.module.scss';

const SignUp = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.wrapper}>
      <button className={style.btn} onClick={() => setOpen(true)}>
        <ProfileIcon className={style.icon} />
        Sign up
      </button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <Auth />
      </Modal>
    </div>
  );
};

export default SignUp;
