'use client';

import { useState } from 'react';

import ProfileIcon from '@/components/icons/ProfileIcon.jsx';
import Modal from '@/components/ui/modal/Modal';
import Auth from '@/features/auth/Auth';

const SignUp = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="hidden lg:flex btnHeader text-base " onClick={() => setOpen(true)}>
        <ProfileIcon className="mr-4" />
        Sign up
      </button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <Auth />
      </Modal>
    </>
  );
};

export default SignUp;
