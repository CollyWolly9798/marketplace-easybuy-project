import BurgerBtn from '@/components/icons/mobile/BurgerBtnIcon';
import styles from './BurgerBtn.module.scss';

const BurgerButton = () => {
  return (
    <div className={styles.button}>
      <button type='button'>
        <BurgerBtn />
      </button>
    </div>
  );
};

export default BurgerButton;
