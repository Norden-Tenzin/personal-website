import React from "react";
import Swiper from "react-id-swiper";
import pic from "./assets/image.jpg";
import "./stylesheet.scss";
// import 'swiper/swiper.scss';


const CoverflowEffect = () => {
//   const params = {
//     effect="coverflow",
//     grabCursor={true},
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   };

  return (
    <Swiper
        effect="none"
        grabCursor="true"
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
        }}
        slidesPerView={3}
        >
      <div
        className="swiper-slide"
        style={{backgroundImage:"url(http://lorempixel.com/600/600/nature/1)"}}
      ></div>
      <div
        className="swiper-slide"
        style={{backgroundImage:"url(http://lorempixel.com/600/600/nature/1)"}}
      ></div>
      <div
        className="swiper-slide"
        style={{backgroundImage:"url(http://lorempixel.com/600/600/nature/1)"}}
      ></div>
      <div
        className="swiper-slide"
        style={{backgroundImage:"url(http://lorempixel.com/600/600/nature/1)"}}
      ></div>
      <div
        className="swiper-slide"
        style={{backgroundImage:"url(http://lorempixel.com/600/600/nature/1)"}}
      ></div>
    </Swiper>
  );
};
export default CoverflowEffect;
