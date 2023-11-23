import React from "react";
import "./team.scss";
import Zoom from "../../images/zoom.svg";
import Test from "../../images/test.svg";

export default function Team() {
  return (
    <section className='team'>
      <h2 className='team__title'>САМАЯ СИЛЬНАЯ КОМАНДА РЕПРОДУКЦИИ В ЮФО</h2>
      <div className='carusel'></div>
      <div className='team__container'>
        <img
          src=''
          alt='doctor'
          className='team__img'
        />
        <div className='team__info'>
          <p className='team__name'></p>
          <p className='team__post'></p>
          <p className='team__proffesion'></p>
        </div>
      </div>
      <img
        src={Zoom}
        alt='zoom'
        className='team__circle-img'
      />
      <img
        src={Test}
        alt='pregnancy test'
        className='team__test'
      />
    </section>
  );
}
