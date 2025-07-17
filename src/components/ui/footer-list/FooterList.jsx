import Link from 'next/link';
import style from './FooterList.module.scss';

const linkGroups = [
  ['Catalogue', 'Contacts', 'Sale'],
  ['Delivery and payment', 'Guarantee', 'Product return'],
  ['Support', 'News', 'Marketplace Guide'],
  ['User Agreement', 'Privacy Policy'],
];

const FooterList = () => {
  return (
    <div className={style.wrapper}>
      {linkGroups.map((group, groupI) => (
        <ul key={groupI} className={style.list}>
          {group.map((text, textI) => {
            const isMobileOnly = text === 'User Agreement' || text === 'Privacy Policy';
            return (
              <li key={textI} className={isMobileOnly ? style.mobile : undefined}>
                <Link href="!#" className={style.link}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
};

export default FooterList;
