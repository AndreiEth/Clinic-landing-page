import React from "react";
import "./team.scss";
import Zoom from "../../images/zoom.svg";
import Test from "../../images/test.svg";
import Carusel from "../carusel/Carusel";
import Profile from "../../images/profile-photo.png";

export default function Team() {
  return (
    <section className='team'>
      <h2 className='team__title'>САМАЯ СИЛЬНАЯ КОМАНДА РЕПРОДУКЦИИ В ЮФО</h2>
      <Carusel />
      <div className='team__container'>
        <img
          src={Profile}
          alt='doctor'
          className='team__img'
        />
        <div className='team__info'>
          <p className='team__name'>
            Семенова <br />
            Надежда Андреевна
          </p>
          <p className='team__post'>
            Руководитель Центра Репродукции <br />и куратор онлайн встречи
          </p>
          <p className='team__proffesion'>
            Врач высшей категории, кандидат медицинских <br />
            наук, репродуктолог
            <br />
            <br />
            <br />
            Стаж работы – 12 лет
          </p>
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
