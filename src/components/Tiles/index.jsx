import './index.scss';
import * as React from 'react';
import LongArrow from '../../assets/images/longArrow.png';
import SmallArrow from '../../assets/svg/smalLArrow.svg';
import LongArrowSecond from '../../assets/images/longArrowBG.png';
import BigImg from '../../assets/images/infoImgOne.png';
import BigImgSecond from '../../assets/images/infoImgTwo.png';
import Clock from '../../assets/images/clock.png';
import Arrow from '../../assets/svg/arrow.svg';
import Wave from '../../assets/svg/wave.svg';

const Tiles = () => {
  return (
    <div className="tiles" id="whyWe">
      <div className="tiles__wrapper">
        <div className="tiles__item tiles__item--smallest-first">
          <h6 className="tiles__item-name">Качество</h6>
          <div className="tiles__item-dec"></div>
          <p className="tiles__item-text">Тройная проверка - гарантия успеха</p>
        </div>
        <div className="tiles__item tiles__item--smallest-second">
          <h6 className="tiles__item-name">Опыт</h6>
          <img src={LongArrow} className="tiles__item-dec" alt="longArrow" />
          <p className="tiles__item-text">
            Работаем более 18 лет - с&nbsp;2004&nbsp;г.
          </p>
        </div>
        <div className="tiles__item tiles__item--big-first">
          <h6 className="tiles__item-name">Надежность</h6>
          <img src={BigImg} className="tiles__item-dec" alt="woomen stud" />
          <div className="tiles__item-arrow">
            <Arrow />
          </div>
          <p className="tiles__item-text">Сопровождаем вас до сдачи</p>
        </div>
        <div className="tiles__item tiles__item--big-second">
          <h6 className="tiles__item-name">Пунктуальность</h6>
          <img src={Clock} className="tiles__item-dec" alt="clock" />
          <div className="tiles__item-waves">
            <Wave />
            <Wave />
          </div>
          <p className="tiles__item-text">
            Персональный менеджер контролирует соблюдение сроков
          </p>
        </div>
        <div className="tiles__item tiles__item--small">
          <h6 className="tiles__item-name">Договор</h6>
          <img
            src={LongArrowSecond}
            className="tiles__item-dec"
            alt="longArrow"
          />
          <p className="tiles__item-text">
            Официальный договор и&nbsp;кассовый чек - всё по закону{' '}
          </p>
        </div>
        <div className="tiles__item tiles__item--biggest">
          <h6 className="tiles__item-name">Поддержка</h6>
          <img
            src={BigImgSecond}
            className="tiles__item-dec"
            alt="woomen stud sec"
          />
          <SmallArrow className="tiles__item-arrow" />
          <p className="tiles__item-text">
            Круглосуточная служба ответит на любые вопросы
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
