import React from "react";
import "./program.scss";
import Zoom from "../../images/zoom-2.svg";
import Dummy from "../../images/dummy.svg";
export default function Program() {
  return (
    <section className='program'>
      <h2 className='program__title'>ПРОГРАММА ВЕБИНАРА</h2>
      <p className='program__date'>
        14 августа 2020 <br />
        <span>Youtube-канал «Клиника Екатерининская»</span>
      </p>
      <ul className='program__lists'>
        <li className='program__list'>
          <p className='program__text'>
            Начало вебинара в 14:00 Активную ссылку зарегистрированные участники
            получат за час до начала трансляции по e-mail и в sms
          </p>
        </li>

        <li className='program__list'>
          <ul className='program__lists-mini'>
            <li className='program__list-mini'>
              <p className='program__text'>Знакомство с центром репродукции</p>
            </li>
            <li className='program__list-mini'>
              <p className='program__text'>Развеиваем мифы об эко</p>
            </li>
          </ul>
        </li>

        <li className='program__list'>
          <ul className='program__lists-mini'>
            <li className='program__list-mini'>
              <p className='program__text'>
                Погружение в этапы эко со всеми специалистами центра
              </p>
            </li>
            <li className='program__list-mini'>
              <p className='program__text'>
                Отвечаем онлайн на вопросы зрителей
              </p>
            </li>
          </ul>
        </li>

        <li className='program__list'>
          <p className='program__text'>
            Розыгрыш <span>стандартной программы</span> эко центра репродукции и
            генетики клиники екатерининская
          </p>
        </li>
      </ul>
      <div className='program__btns'>
        <button className='program__register'>РЕГИСТРАЦИЯ</button>
        <button className='program__prize'>УСЛОВИЯ РОЗЫГРЫША</button>
      </div>
      <img
        src={Zoom}
        alt='zoom'
        className='program__circle-img'
      />
      <img
        src={Dummy}
        alt='dummy'
        className='program__dummy-img'
      />
    </section>
  );
}
