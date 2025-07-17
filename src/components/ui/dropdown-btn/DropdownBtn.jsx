'use client';
import { useState } from 'react';

const DropdownBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="hidden lg:relative lg:block">
      <button className="btnHeader text-[32px] font-semibold" onClick={toggleDropdown}>
        Catalogue
      </button>
      {isOpen && (
        <ul className="absolute top-[100%] left-0 mt-2 bg-white border-solid border-gray-200 rounded-lg py-3 px-0 shadow-main z-50 text-black">
          <li className="py-2.5 px-[65px] cursor-pointer hover:bg-white">Filters</li>
          <li className="py-2.5 px-[65px] cursor-pointer hover:bg-white">Products</li>
          <li className="py-2.5 px-[65px] cursor-pointer hover:bg-white">Other</li>
          <li className="py-2.5 px-[65px] cursor-pointer hover:bg-white">Home</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownBtn;
