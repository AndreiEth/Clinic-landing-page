import React from "react";
import PresentS from "../../images/present-s.svg";
import PresentL from "../../images/present-l.svg";
import "./discount.scss";

export default function Discount() {
  return (
    <section className='discount'>
      <div className='discount__content'>
        <h2 className='discount__title'>10 УЧАСТНИКАМ ВЕБИНАРА</h2>
        <p className='discount__percent'>-5%</p>
        <p className='discount__info'>
          на все услуги Центра Репродукции и генетики до конца 2020 года
        </p>
      </div>
      <div className='discount__images'>
        <img
          src={PresentS}
          alt='present'
          className='discount__image-s'
        />
        <img
          src={PresentL}
          alt='present'
          className='discount__image-l'
        />
      </div>
      <div className='discount__content'>
        <h2 className='discount__title'>3 ПОБЕДИТЕЛЯ</h2>
        <p className='discount__percent'>-25%</p>
        <p className='discount__info'>
          на стандартную программу ЭКО в Центре Репродукции и генетики Клиники
          Екатерининская до конца 2020 года
        </p>
      </div>
    </section>
  );
}
