// file handles the movement of the cards as well as hadding the correct
// data to the cards
import Route from "./Route";
import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import pic from "./assets/image.jpg";
import Card from "./Card";
import firebase from "./firebase";

import "swiper/swiper.scss";
import "./stylesheet.scss";

const cardInfo = [
  {
    route: "/property",
    pic: pic,
    header: "header",
  },
  {
    route: "/property",
    pic: pic,
    header: "header",
  },
  {
    route: "/property",
    pic: pic,
    header: "header",
  },
];

const CoverflowEffect = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("projects");

  const params = {
    // loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1800: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      750: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  const getProjects = () => {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProjects(items);
      setLoading(false);
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (loading) {
    // TODO add a loading card
    return <h1>Loading...</h1>;
  }

  projects.forEach(e => console.log(e)) 

  return (
    <Swiper {...params}>

      {projects.map((item, i) => (
        <a href={""+item.route}>
          {/* <div>
            {alert(typeof item.route)}
          </div> */}
          <div className="swiper_card">
            <Card header={item.header} pic={item.pic} />
          </div>
        </a>
      ))}
    </Swiper>
  );
};
export default CoverflowEffect;
