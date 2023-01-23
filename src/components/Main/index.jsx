import './index.scss';
import * as React from 'react';
import StartPage from '../StartPage';
import BenefitsList from '../BenefitsList';
import CustomSwiper from '../CustomSwiper';
import MakeOrder from '../MakeOrder';
import Tiles from '../Tiles';
import { REVIEWS_LIST } from '../../data/data';

const Main = () => {
  return (
    <main className="main">
      <StartPage />
      <BenefitsList />
      <CustomSwiper data={REVIEWS_LIST} />
      <Tiles />
      <MakeOrder />
    </main>
  );
};

export default Main;
