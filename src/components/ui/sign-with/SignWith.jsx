import Link from 'next/link';
import ArrRAuth from '@/components/icons/ArrRAuth.jsx';
import style from './SignWith.module.scss';

const SignWith = ({ providers }) => {
  return (
    <div>
      <p className={style.text}>Or</p>
      <ul className={style.list}>
        {providers.map(({ icon: Icon, name, href }, index) => (
          <li key={index}>
            <Link href={href}>
              <button className={style.btn} type="button" disabled>
                <Icon />
                <p className={style.company}>{name}</p>
                <ArrRAuth />
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SignWith;
