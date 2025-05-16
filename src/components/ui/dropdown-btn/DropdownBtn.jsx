'use client';
import { useState } from 'react';
import styles from './DropdownBtn.module.scss';

const DropdownBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={toggleDropdown}>
        Catalogue
      </button>
      {isOpen && (
        <ul className={styles.dropdown}>
          <li>Filters</li>
          <li>Products</li>
          <li>Other</li>
          <li>Home</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownBtn;
