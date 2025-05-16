import Image from 'next/image.js';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='catalogue-container'>
        <section className='footer__main'>
          <div className='footer__head'>
            <div className='footer__logo'></div>
          </div>
          <div className='footer__columns'>
            <div className='footer__main-item navigation'>
              <div className='footer__columns column'>
                <ul>
                  <li>
                    <a href='!#'>Catalogue</a>
                  </li>
                  <li>
                    <a href='!#'>Contacts</a>
                  </li>
                  <li>
                    <a href='!#'>Sale</a>
                  </li>
                </ul>
              </div>
              <div className='footer__columns column'>
                <ul>
                  <li>
                    <a href='!#'>Delivery and payment</a>
                  </li>
                  <li>
                    <a href='!#'>Guarantee</a>
                  </li>
                  <li>
                    <a href='!#'>Product return</a>
                  </li>
                </ul>
              </div>
              <div className='footer__columns column'>
                <ul>
                  <li>
                    <a href='!#'>Support</a>
                  </li>
                  <li>
                    <a href='!#'>News</a>
                  </li>
                  <li>
                    <a href='!#'>Marketplace Guide</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='footer__main-item information'>
              <h2 className='footer__main-item title'>Start selling today!</h2>
              <h3 className='footer__main-item subtitle'>
                Join our marketplace and discover new opportunities for your business!
              </h3>
              <ul className='footer__main-item links'>
                <li>Millions of buyers are waiting for your products;</li>
                <li>Increase sales and make more profit;</li>
                <li>User-friendly control panel and growth tools;</li>
              </ul>
              <div className='footer__main-item btn'>
                <button className='footer__main-item button'>Sell Your Item</button>
              </div>
            </div>
          </div>

          <div className='footer__bottom'>
            <div className='footer__main-item icons'>
              <ul>
                <li>
                  <a href='!#'>
                    <Image src='/img/icons/facebook.svg' alt='facebook' width={32} height={32} />
                  </a>
                </li>
                <li>
                  <a href='!#'>
                    <Image src='img/icons/instagram.svg' alt='instagram' width={32} height={32} />
                  </a>
                </li>
                <li>
                  <a href='!#'>
                    <Image src='/img/icons/telegram.svg' alt='telegram' width={32} height={32} />
                  </a>
                </li>
                <li>
                  <a href='!#'>
                    <Image src='/img/icons/youtube.svg' alt='youtube' width={32} height={32} />
                  </a>
                </li>
              </ul>
            </div>
            <div className='footer__bottom texts'>
              <div className='footer__bottom text'>
                <Image
                  src='/img/icons/copyright.svg'
                  alt='copyright'
                  className='footer__bottom copyright'
                  width={18}
                  height={18}
                />
                <p className='footer__bottom text1'>Easybuy.2024</p>
                <p className='footer__bottom text2'>All rights reserved</p>
              </div>
              <div className='footer__bottom links'>
                <a href='!#' className='footer__bottom link'>
                  Privacy Policy
                </a>
                <a href='!#' className='footer__bottom link'>
                  User Agreement
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>

    // {/* <footer className={style.footer}>
    // <div className='catalogue-container'>
    //   <div className={style.logo}>
    //     <Logo />
    //   </div>
    //   <div className={style.seller_wrapper}>
    //     <div className={style.wrapper}>
    //       <FooterList />
    //       <FooterSeller />
    //       <SocialList className={style.icons} />
    //     </div>
    //   </div>
    // </div>
    // </footer> */}
  );
};

export default Footer;
