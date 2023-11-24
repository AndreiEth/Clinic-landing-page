import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import LOGO from "../../images/logo.svg";
import useDevice from "../../hooks/device";

export default function Header() {
  const { isMobile } = useDevice();
  
  return (
    <header className='header'>
      <Link
        to='/'
        className='header__logo'
      >
        <img
          src={LOGO}
          alt='logo'
          className='header__logo'
        />
      </Link>

      {window.innerWidth === 1000 ? (
        <h1 className='header__logo-text'>
          Центр репродукции Клиники Екатерининская
        </h1>
      ) : (
        <h1 className='header__logo-text'>Клиники Екатерининская</h1>
      )}
    </header>
  );
}
