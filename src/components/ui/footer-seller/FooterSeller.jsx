import SellItemBtn from '@/components/ui/sell-item-btn/SellItemBtn.jsx';
import style from './FooterSeller.module.scss';

const FooterSeller = () => {
  return (
    <div className={style.wrapper}>
      <p className={style.title}>Start selling today!</p>
      <p className={style.subtitle}>Join our marketplace and discover new opportunities for your business!</p>
      <ul className={style.list}>
        <li>Millions of buyers are waiting for your products;</li>
        <li>Increase sales and make more profit;</li>
        <li>User-friendly control panel and growth tools</li>
      </ul>
      <SellItemBtn />
    </div>
  );
};

export default FooterSeller;
