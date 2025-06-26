const MenuItem = ({ icon, label, iconArr, onClick }) => {
  return (
    <div
      className='flex items-center gap-5 cursor-pointer hover:stroke-blue-900 hover:text-blue-900 transition'
      onClick={onClick}
    >
      <span>{icon}</span>
      <span className='text-[20px]'>{label}</span>
      <span className='flex-grow'></span>
      <span className='pr-2.5'>{iconArr}</span>
    </div>
  );
};

export default MenuItem;
