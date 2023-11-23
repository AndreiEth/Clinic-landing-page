import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import LOGO from "../../images/logo.svg";

export default function Header() {
  return (
    <header className='header'>
      <Link
        to='/'
        className='header__logo'
      ><img src={LOGO} alt="logo"/></Link>
      <h1 className="header__logo-text">Клиника Екатерининская</h1>
    </header>
  );
}
