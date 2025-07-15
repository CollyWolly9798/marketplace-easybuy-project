'use client';
import React from "react";
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import CloseBtnIcon from '@/components/icons/CloseBtnIcon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  //   Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  //   Scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className='fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 lg:backdrop-blur-sm' onClick={onClose}>
      <div className='relative bg-white rounded-2xl p-6 shadow-xl w-[90%] max-w-[500px] lg:max-w-[600px]' onClick={e => e.stopPropagation()}>
        <button className='absolute top-4 right-4 w-6 h-6 text-gray-500 hover:text-red-500 transition-colors' onClick={onClose}>
          <CloseBtnIcon />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
