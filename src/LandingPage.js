//  js imports
import React, { useRef, useState, createRef } from "react";
import { Link } from "react-scroll";
import { Sticky } from "semantic-ui-react";
import _ from "lodash";
import * as morse from "./morse";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

// css imports
import "./css/stylesheet.css";
import "swiper/swiper.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

// assets imports
import pdf from "./files/Norden-Tenzin-Resume.pdf";
import resumeIcon from "./assets/resume.svg";
import githubIcon from "./assets/github.svg";
import instagramIcon from "./assets/instagram_xray.svg";
import emailIcon from "./assets/email.svg";
import linkedinIcon from "./assets/linkedin_xray.svg";
import Route from "./Route";
import { ReactComponent as Logo } from "./assets/logo.svg";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
      english: "",
      morse: "",
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  englishInput = (e) => {
    this.setState({ english: "" });
    this.setState({ morse: "" });
    let x = morse.eToM(e.target.value);
    this.setState({ english: e.target.value });
    this.setState({ morse: x });
  };

  morseInput = (e) => {
    this.setState({ english: "" });
    this.setState({ morse: "" });
    let x = morse.mToE(e.target.value);
    this.setState({ english: x });
    this.setState({ morse: e.target.value });
  };

  contextRef = createRef();
  render() {
    return (
      <div className="wrapper">
        {this.state.width >= 1500 ? (
          <img
            src={require("./assets/qr-code.png")}
            width="100"
            className="background-logo"
          />
        ) : (
          ""
        )}
        <span style={{ position: "absolute", top: "0px", right: "0px" }}>
          DEBUG: {this.state.width}
        </span>
        <div className="landing">
          <div className="intro" id="home">
            <a href="https://blacklivesmatter.com/"  className="bar">
              <span className="bar-content">Black Lives Matter</span>
            </a>
            <div className="header-container">
              <div className="header-logo">tn.</div>
            </div>
            <div className="para-wrapper">
              <h1 className="para-header">Hi!! I'm Tenzin Norden,</h1>
              <p className="paragraph">
                I'm a programmer, artist, gamer and an avid cook. A
                <span className="rutgers"> Rutgers </span>
                NB Alumni with a Bachelors of Science in Computer Science.
                Interested in all facets of programming.
                <br />
                Currently residing in
                <span style={{ textDecoration: "line-through" }}>
                  {" "}
                  Hoboken, NJ.
                </span>
                <span> Manali, HP</span>
              </p>
            </div>
            <div className="contact-container">
              <span className="contact-text">Contact me</span>
              <div className="icon-container">
                <a
                  href="https://github.com/Norden-Tenzin"
                  className="icon-link"
                >
                  <img src={githubIcon} className="icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tenzin-norden"
                  className="icon-link"
                >
                  <img src={linkedinIcon} className="icon" />
                </a>
                <a
                  href="https://www.instagram.com/nordten/"
                  className="icon-link"
                >
                  <img src={instagramIcon} className="icon" />
                </a>
              </div>
            </div>
          </div>

          {/* sticky header bar */}
          <div ref={this.contextRef}>
            <Sticky context={this.contextRef}>
              <div className="header-links-sticky-container" attached="top">
                <div className="header-links-sticky-item">
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-300}
                    duration={800}
                  >
                    <h1 className="links">Home</h1>
                  </Link>
                </div>
                <div className="header-links-sticky-item">
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={500}
                  >
                    <h1 className="links">Projects</h1>
                  </Link>
                </div>
                <div className="header-links-sticky-item">
                  <Link
                    activeClass="active"
                    to="morse"
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={500}
                  >
                    <h1 className="links">Demo</h1>
                  </Link>
                </div>
              </div>
            </Sticky>

            {/* project showcase page TODO*/}
            <div>
              <div className="my-projects" id="projects">
                <h1 className="header-title">My Projects</h1>
                <div className="container">
                  <div className="item">
                    <a
                      className="link-header"
                      href="https://github.com/Norden-Tenzin/440ArtificialIntelligence"
                    >
                      AI Projects
                    </a>
                    <p className="info">
                      Used python to create the algorithm for the AI. Worked on
                      multiple projects such as Colorizer, Maze Solver,
                      Minesweeper Solver and Helper, and more. These were all
                      School Projects for Intro to AI.
                    </p>
                  </div>
                  <div className="item">
                    <a
                      className="link-header"
                      href="https://github.com/Norden-Tenzin/multiplayer-chess-python"
                    >
                      Python Chess
                    </a>
                    <p className="info">
                      Playable multiplayer game of chess coded in python using
                      the pygame framework for the visuals like sprites and GUI.
                      For networking I used the Twisted framework.
                    </p>
                  </div>
                  <div className="item">
                    <a
                      className="link-header"
                      href="https://github.com/Norden-Tenzin/personal-website"
                    >
                      Personal Website
                    </a>
                    <p className="info">used React to build this website.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* morse code page */}
            <div>
              <div className="interactive" id="morse">
                <h1 className="header-title">Demo</h1>
                <div className="test">
                  <Swiper
                    effect={"coverflow"}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                    }}
                    loop={true}
                    pagination={true}
                    centeredSlides={true}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper"
                  >
                    <SwiperSlide className="swiper-slide">
                      <div className="card">
                        {/* {window.innerWidth > 770 ? ( */}
                        <h1 className="title">Morse Translator</h1>
                        <textarea
                          className="text-area"
                          id="english"
                          placeholder="English"
                          value={this.state.english}
                          onChange={this.englishInput}
                        />
                        <textarea
                          className="text-area"
                          id="morse"
                          placeholder="Morse"
                          value={this.state.morse}
                          onChange={this.morseInput}
                        />
                        {/* <h1 className="morse-helper-header">
                          (Valid) Morse Code Characters
                        </h1> */}
                        <p className="morse-helper-text">
                          A ".-", B "-...", C "-.-.", D "-..", E ".", F "..-.",
                          G "--.", H "....", I "..", J ".---", K "-.-", L
                          ".-..", M "--", N "-.", O "---", P ".--.", Q "--.-", R
                          ".-.", S "...", T "-", U "..-", V "...-", W ".--", X
                          "-..-", Y "-.--", Z "--..",
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src={require("./assets/qr-code.png")}
                        className="slide-content"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src={require("./assets/background.jpg")}
                        className="slide-content"
                      />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                      <img
                        src="http://swiperjs.com/demos/images/nature-1.jpg"
                        className="slide-content"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="http://swiperjs.com/demos/images/nature-1.jpg"
                        className="slide-content"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="http://swiperjs.com/demos/images/nature-1.jpg"
                        className="slide-content"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="http://swiperjs.com/demos/images/nature-1.jpg"
                        className="slide-content"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/* <div className="card">
                  <div className="text-area-holder">
                    <textarea
                      className="text-area"
                      id="english"
                      placeholder="English"
                      value={this.state.english}
                      onChange={this.englishInput}
                    />
                    <textarea
                      className="text-area"
                      id="morse"
                      placeholder="Morse"
                      value={this.state.morse}
                      onChange={this.morseInput}
                    />
                  </div>
                  <h1 className="morse-helper-header">
                    (Valid) Morse Code Characters
                  </h1>
                  <p className="morse-helper-text">
                    A ".-", B "-...", C "-.-.", D "-..", E ".", F "..-.", G
                    "--.", H "....", I "..", J ".---", K "-.-", L ".-..", M
                    "--", N "-.", O "---", P ".--.", Q "--.-", R ".-.", S "...",
                    T "-", U "..-", V "...-", W ".--", X "-..-", Y "-.--", Z
                    "--..",
                  </p>
                </div> */}
              </div>
            </div>

            <div className="footer"></div>
          </div>
        </div>
      </div>
    );
  }
}
