import './index.scss';
import * as React from 'react';
import CustomForm from '../CustomForm';
import { StaticImage } from 'gatsby-plugin-image';

const StartPage = () => {
  return (
    <div className="start-page">
      <div className="start-page__container">
        <div className="start-page__text-wrapper">
          <h1 className="start-page__title">
            Нужна{' '}
            <a href="#" className="start-page__title-link">
              помощь
            </a>{' '}
            с курсовой в Санкт-Петербурге?
          </h1>
          <div className="start-page__info-wrapper">
            <div className="start-page__info-block">
              <span className="start-page__info-block-name">
                Цена курсовой:
              </span>
              <span className="start-page__info-block-value">
                <span>от</span> 1600<span>Руб.</span>
              </span>
            </div>
            <div className="start-page__info-block">
              <span className="start-page__info-block-name">
                Срок исполнения:
              </span>
              <span className="start-page__info-block-value">
                1-7 <span>дней</span>
              </span>
            </div>
          </div>
        </div>
        <StaticImage
          className="start-page__main-image"
          src="../../assets/images/startImage.png"
          width={700}
          height={702}
          alt="stud-first"
        />
        <CustomForm classname={'first-form'} id={'orders'} />
      </div>
    </div>
  );
};

export default StartPage;
