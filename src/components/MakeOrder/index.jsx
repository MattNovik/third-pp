import './index.scss';
import * as React from 'react';
import CustomForm from '../CustomForm';

const MakeOrder = () => {
  return (
    <section className="make-order">
      <div className="make-order__container">
        <div className="make-order__form-wrapper">
          <h2 className="make-order__title">
            Дарим скидку <span>до 15%</span> на первый заказ при регистрации:
          </h2>
          <CustomForm classname={'second-form'} />
        </div>
      </div>
    </section>
  );
};

export default MakeOrder;
