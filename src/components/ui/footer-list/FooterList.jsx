import Link from 'next/link';
import style from './FooterList.module.scss';

const linkGroups = [
  ['Catalogue', 'Contacts', 'Sale'],
  ['Delivery and payment', 'Guarantee', 'Product return'],
  ['Support', 'News', 'Marketplace Guide'],
];

const FooterList = () => {
  return (
    <div className={style.wrapper}>
      {linkGroups.map((group, groupI) => (
        <ul key={groupI} className={style.list}>
          {group.map((text, textI) => (
            <li key={textI}>
              <Link href='!#' className={style.link}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default FooterList;
