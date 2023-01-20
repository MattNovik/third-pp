import './index.scss';
import * as React from 'react';
import LongArrow from '../../assets/images/longArrow.png';
import BigImg from '../../assets/images/infoImgOne.png';
import Arrow from '../../assets/svg/arrow.svg';

const Tiles = () => {
  return (
    <div className="tiles">
      <div className="tiles__wrapper">
        <div className="tiles__item tiles__item--smallest-first">
          <h6 className="tiles__item-name">Качество</h6>
          <div className="tiles__item-dec"></div>
          <p className="tiles__item-text">Тройная проверка - гарантия успеха</p>
        </div>
        <div className="tiles__item tiles__item--smallest-second">
          <h6 className="tiles__item-name">Опыт</h6>
          <img src={LongArrow} className="tiles__item-dec" alt="longArrow" />
          <p className="tiles__item-text">Работаем более 18 лет - с 2004 г.</p>
        </div>
        <div className="tiles__item tiles__item--big-first">
          <h6 className="tiles__item-name">Надежность</h6>
          <img src={BigImg} className="tiles__item-dec" alt="longArrow" />
          <div className="tiles__item-arrow">
            <Arrow />
          </div>
          <p className="tiles__item-text">Сопровождаем вас до сдачи</p>
        </div>
        <div className="tiles__item tiles__item--big-second"></div>
        <div className="tiles__item tiles__item--small"></div>
        <div className="tiles__item tiles__item--biggest"></div>
      </div>
    </div>
  );
};

export default Tiles;
