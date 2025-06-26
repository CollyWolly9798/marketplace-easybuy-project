import Image from 'next/image.js';
import MenuItem from '@/features/buyer/panel/MenuItem.jsx';
import ProfileIcon from '@/components/icons/mobile/ProfileIcon.jsx';
import OrderIcon from '@/components/icons/mobile/OrderIcon.jsx';
import CartIcon from '@/components/icons/mobile/CartIcon.jsx';
import MessageIcon from '@/components/icons/mobile/MessageIcon.jsx';
import WishListIcon from '@/components/icons/mobile/WishListIcon.jsx';
import CompareIcon from '@/components/icons/mobile/CompareIcon.jsx';
import PaymentIcon from '@/components/icons/mobile/PaymentIcon.jsx';
import RightArrIcon from '@/components/icons/mobile/RightArrIcon.jsx';

const sections = {
  personal: { label: 'Personal data', icon: <ProfileIcon /> },
  orders: { label: 'My Orders', icon: <OrderIcon /> },
  cart: { label: 'Cart', icon: <CartIcon /> },
  message: { label: 'Message', icon: <MessageIcon /> },
  wishlist: { label: 'Wishlist', icon: <WishListIcon /> },
  compare: { label: 'Products to Compare', icon: <CompareIcon /> },
  payment: { label: 'Payment', icon: <PaymentIcon /> },
};

const Menu = ({ setActiveSection }) => {
  return (
    <>
      <div className='flex items-center justify-center gap-6 mb-5'>
        <Image src='/img/avatar.png' alt='Avatar' width={48} height={48} className='rounded-full object-cover' />
        <div>
          <h2 className='font-bold text-2xl text-blue-800'>Anthony Hopkins</h2>
        </div>
      </div>

      <nav className='flex flex-col gap-6 text-gray-500 pl-7'>
        {Object.entries(sections).map(([key, { label, icon }]) => (
          <MenuItem
            key={key}
            icon={icon}
            label={label}
            iconArr={<RightArrIcon />}
            onClick={() => setActiveSection(key)}
          />
        ))}
      </nav>

      <div className='mt-3 border-t pt-5 text-gray-500 space-y-2 mb-4.5'>
        <p className='text-gray-500 text-[20px] pl-7  hover:text-blue-900 transition'>Settings</p>
        <p className='text-gray-500 text-[20px] pl-7  hover:text-blue-900 transition'>Help Center</p>
      </div>

      <button className='flex mx-auto py-3 px-12 border border-blue-800 text-blue-800 rounded-lg hover:bg-blue-50 transition'>
        Log out
      </button>
    </>
  );
};

export default Menu;
