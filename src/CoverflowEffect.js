import React from "react";
import Swiper from "react-id-swiper";
import pic from "./assets/image.jpg";
// import pic from "react-random-image";

import "swiper/swiper.scss";
import "./stylesheet.scss";

const CoverflowEffect = () => {
  const params = {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1800: {
        slidesPerView: 5,
        spaceBetween: 0
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      750: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  }

  return (
    <Swiper {...params}>
      <div className="swiper_card">
        <section className="card">
          <img src={pic} className="image" />
          <p className="header">header</p>
          <p className="detail">Some Text</p>
        </section>
      </div>
      <div className="swiper_card">
        <section className="card">
          <img src={pic} className="image" />
          <p className="header">header</p>
          <p className="detail">Some Text</p>
        </section>
      </div>
      <div className="swiper_card">
        <section className="card">
          <img src={pic} className="image" />
          <p className="header">header</p>
          <p className="detail">Some Text</p>
        </section>
      </div>
      <div className="swiper_card">
        <section className="card">
          <img src={pic} className="image" />
          <p className="header">header</p>
          <p className="detail">Some Text</p>
        </section>
      </div>
      <div className="swiper_card">
        <section className="card">
          <img src={pic} className="image" />
          <p className="header">header</p>
          <p className="detail">Some Text</p>
        </section>
      </div>
    </Swiper>
  );
};
export default CoverflowEffect;
