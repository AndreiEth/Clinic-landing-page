import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom';
import VK from '../../images/vk.svg';
import Inst from '../../images/inst.svg';
import Facebook from '../../images/facebook.svg';
import Youtube from '../../images/youtube.svg';

export default function Footer() {
	return (
    <footer className='footer'>
      <div className='footer__socials'>
        <Link to='https://vk.com/'>
          <img
            src={VK}
            alt='vk'
            className='footer__img'
          />
        </Link>
        <Link
          to='https://www.instagram.com'
        >
          <img
            src={Inst}
            alt='instagram'
            className='footer__img'
          />
        </Link>
        <Link to='https://facebook.com/'>
          <img
            src={Facebook}
            alt='facebook'
            className='footer__img'
          />
        </Link>
        <Link to='https://youtube.com/'>
          <img
            src={Youtube}
            alt='youtube'
            className='footer__img'
          />
        </Link>
      </div>
      <p className='footer__years'>© 2008 - 2023 «Клиника Екатерининская»</p>
    </footer>
  );
}
