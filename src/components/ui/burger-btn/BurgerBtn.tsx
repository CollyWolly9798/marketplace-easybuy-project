import BurgerBtnIcon from '@/components/icons/mobile/BurgerBtnIcon';

const BurgerButton = () => {
  return (
    <div className="lg:hidden">
      <button type="button">
        <BurgerBtnIcon />
      </button>
    </div>
  );
};

export default BurgerButton;
