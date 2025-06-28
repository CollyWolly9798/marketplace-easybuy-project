import PersonalData from '@/features/buyer/panel/sections/PersonalData.jsx';
import Orders from '@/features/buyer/panel/sections/Orders.jsx';
import Cart from '@/features/buyer/panel/sections/Cart.jsx';
import Message from '@/features/buyer/panel/sections/Message.jsx';
import Wishlist from '@/features/buyer/panel/sections/Wishlist.jsx';
import Product from '@/features/buyer/panel/sections/Products.jsx';
import Payment from '@/features/buyer/panel/sections/Payment.jsx';
import Setting from '@/features/buyer/panel/sections/Setting.jsx';
import Help from '@/features/buyer/panel/sections/Help.jsx';
import LeftArrIcon from '@/components/icons/mobile/LeftArrIcon.jsx';

const sections = {
  personalData: { label: 'Personal data', component: PersonalData },
  orders: { label: 'My orders', component: Orders },
  cart: { label: 'Cart', component: Cart },
  message: { label: 'Message', component: Message },
  wishlist: { label: 'Wishlist', component: Wishlist },
  product: { label: 'Products to compare', component: Product },
  payment: { label: 'Payment', component: Payment },
  setting: { label: 'Settings', component: Setting },
  help: { label: 'Help', component: Help },
};

const SectionContent = ({ sectionKey, onBack }) => {
  const SectionComponent = sections[sectionKey]?.component;

  return (
    <div className='max-w-[343px] mx-auto'>
      <button onClick={onBack} className='w-full mb-4 flex items-center justify-center gap-2 relative'>
        <div className='absolute left-0 top-1/2 -translate-y-1/2'>
          <LeftArrIcon />
        </div>
        <h2 className='text-xl font-bold text-blue-900 '>{sections[sectionKey]?.label || 'Section'}</h2>
      </button>

      <div className='p-4'>{SectionComponent ? <SectionComponent /> : <div>Section not found</div>}</div>
    </div>
  );
};

export default SectionContent;
