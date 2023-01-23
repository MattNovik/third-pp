import './index.scss';
import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const CustomForm = ({ classname, id }) => {
  const formik = useFormik({
    initialValues: {
      theme: '',
      email: '',
      agreeament: true,
    },
    /* validateOnChange: false, */
    validationSchema: Yup.object().shape(
      /*       theme: Yup.string().required('Заполните это поле'),
      email: Yup.string().email('Введите email').required('Заполните это поле'), */
      {
        theme: Yup.string().when('email', {
          is: (email) => !email || email.length === 0,
          then: Yup.string().required('Одно из полей должно быть заполнено'),
        }),
        email: Yup.string().when('theme', {
          is: (theme) => !theme || theme.length === 0,
          then: Yup.string().required('Одно из полей должно быть заполнено'),
        }),
        agreeament: Yup.bool().oneOf([true], 's'),
      },
      ['theme', 'email']
    ),
    onSubmit: (values, action) => {
      let formData = new FormData();
      formData.append('theme', values.theme);
      formData.append('email', values.email);
      formData.append('partnerId', document.querySelector('.partnerId').value);
      axios
        .post(
          'https://dev.studservis.ru/wp-content/themes/studservice/ajax/createOrder.php',
          formData,
          {
            auth: {
              username: 'admin',
              password: 'zde3jnm4HTD.gbq@amv',
            },
          }
        )
        .then((response) => {
          console.log(response);
          if (
            typeof response.link !== 'undefined' &&
            response.link.length > 0
          ) {
            return (window.location.href = response.link);
          }
          if (response.order_id && response.action === 'userIsset') {
            return (window.location.href =
              'https://studservis-lk.ru/' +
              'orders/newOrder/id=' +
              response.order_id +
              '/new/');
          } else {
            return (window.location.href = 'https://studservis-lk.ru/');
          }
        })
        .catch((error) => console.log('error'));
    },
  });

  return (
    <form
      className={classname ? 'custom-form ' + classname : 'custom-form'}
      onSubmit={formik.handleSubmit}
      id={id ? id : 'form'}
    >
      <p className="custom-form__title">Рассчитайте точную цену:</p>
      <div className="custom-form__inputs-wrapper">
        <input
          type="text"
          name="theme"
          className={
            formik.errors.theme
              ? 'custom-form__input error'
              : 'custom-form__input'
          }
          value={formik.values.theme}
          onChange={formik.handleChange}
          placeholder="Введите тему работы "
        />
        <input
          type="text"
          name="email"
          className={
            formik.errors.email
              ? 'custom-form__input error'
              : 'custom-form__input'
          }
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder={'Введите Email'}
        />
        <input
          type="hidden"
          name="partnerId"
          className="partnerId"
          value="#PARTNER_ID_VALUE#"
        />
        <button type="submit" className="custom-form__button">
          ПРОДОЛЖИТЬ
        </button>
      </div>
      <input
        name="agreeament"
        defaultChecked={formik.values.agreeament}
        onChange={formik.handleChange}
        className={
          formik.errors.agreeament
            ? 'custom-form__input-agreeament visibility-hidden error'
            : 'custom-form__input-agreeament visibility-hidden'
        }
        id={classname ? 'agreeament' + classname : 'agreeament'}
        type="checkbox"
      />
      <label htmlFor={classname ? 'agreeament' + classname : 'agreeament'}>
        Нажимая кнопку "Узнать стоимость", вы соглашаетесь с{' '}
        <a href="#some">политикой конфиденциальности</a>
      </label>
    </form>
  );
};

export default CustomForm;
