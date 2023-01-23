import './index.scss';
import 'swiper/css';
import * as React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowLong from '../../assets/svg/arrowLong.svg';
import { StaticImage } from 'gatsby-plugin-image';

const CustomSwiper = ({ data }) => {
  return (
    <section className="custom-swiper" id="reviews">
      <div className="custom-swiper__container">
        <Swiper
          modules={[Navigation, Pagination]}
          autoHeight={true}
          grabCursor={true}
          loop={true}
          className="custom-swiper__wrapper"
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          onSlideChange={() => console.log('slide change')}
          /* onSwiper={(swiper) => console.log(swiper)} */
        >
          <div className="custom-swiper__buttons">
            <button className="swiper-button-prev" type="button">
              <ArrowLong />
            </button>
            <button className="swiper-button-next" type="button">
              <ArrowLong />
            </button>
          </div>
          {data && data.length
            ? data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="custom-swiper__item-wrapper">
                    <div className="custom-swiper__avatar-wrapper">
                      {index === 0 ? (
                        <StaticImage
                          src={'../../assets/images/reviewFirst.jpg'}
                          className="custom-swiper__avatar-img"
                          alt="avatar"
                          width={279}
                          height={400}
                        />
                      ) : index === 3 ? (
                        <StaticImage
                          src={'../../assets/images/reviewSecond.jpg'}
                          className="custom-swiper__avatar-img"
                          alt="avatar"
                          width={279}
                          height={400}
                        />
                      ) : index === 4 ? (
                        <StaticImage
                          src={'../../assets/images/reviewThird.jpg'}
                          className="custom-swiper__avatar-img"
                          alt="avatar"
                          width={279}
                          height={400}
                        />
                      ) : index === 2 ? (
                        <StaticImage
                          src={'../../assets/images/reviewFourth.jpg'}
                          className="custom-swiper__avatar-img"
                          alt="avatar"
                          width={279}
                          height={400}
                        />
                      ) : index === 1 ? (
                        <StaticImage
                          src={'../../assets/images/reviewFirth.jpg'}
                          className="custom-swiper__avatar-img"
                          alt="avatar"
                          width={279}
                          height={400}
                        />
                      ) : (
                        <StaticImage
                          src={'../../assets/images/reviewFirst.jpg'}
                          className="custom-swiper__avatar-img"
                          alt="avatar"
                          width={279}
                          height={400}
                        />
                      )}
                    </div>
                    <div className="custom-swiper__avatar-text-wrapper">
                      <p className="custom-swiper__avatar-name">{item.name}</p>
                      <p className="custom-swiper__item-text">{item.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomSwiper;
