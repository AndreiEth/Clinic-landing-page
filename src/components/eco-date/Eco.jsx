import React from "react";
import "./eco-date.scss";
import ECO from "../../images/eco.svg";
import EcoProsto from "../../images/eco-prosto.svg";
import useDevice from "../../hooks/device";

export default function Eco() {
  const { isMobile } = useDevice();

  return (
    <section className='eco'>
      <img
        src={ECO}
        alt='eco'
        className='eco__image'
      />
      <div className='eco__container'>
        <p className='eco__date'>14 Августа в 14:00</p>
        {isMobile ? <p className='eco__mobile-text'>ЭТАПЫ ЭКО</p> : <></>}
        <h2 className='eco__title'>
          ОНЛАЙН ЗНАКОМСТВО С КОМАНДОЙ ЭКО <br />
          ВМЕСТЕ С РЕПРОДУКТОЛОГОМ
        </h2>
        <p className='eco__description'>
          В прямом эфире мы пройдем через все этапы ЭКО вместе с действующей
          командой Клиники Екатерининская.
        </p>
        <img
          src={EcoProsto}
          alt='eco-prosto'
          className='eco__promo'
        />
        <button className='eco__btn'>
          {isMobile ? "РЕГИСТРАЦИЯ" : "ХОЧУ ВЫИГРАТЬ"}
        </button>
      </div>
    </section>
  );
}
