const sections = {
  orders: 'My Orders',
  cart: 'Cart',
  message: 'Message',
  wishlist: 'Wishlist',
  compare: 'Products to Compare',
  payment: 'Payment',
};

const SectionContent = ({ sectionKey, onBack }) => {
  return (
    <>
      <button onClick={onBack} className='mb-4 text-blue-700 hover:text-blue-900 transition flex items-center gap-2'>
        ← Back
      </button>
      <h2 className='text-xl font-bold text-blue-900 mb-4'>{sections[sectionKey]}</h2>

      <div className='text-blue-800 space-y-2'>
        <p>
          Content for: <strong>{sections[sectionKey]}</strong>
        </p>
        <p>example</p>
      </div>
    </>
  );
};

export default SectionContent;
