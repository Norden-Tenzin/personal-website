import React, { createRef } from "react";
import { Link } from "react-scroll";
import "./css/stylesheet.css";
import { Grid, Sticky, Form, GridColumn, Divider } from "semantic-ui-react";
import _ from "lodash";
import * as morse from "./morse";

// import Github from "./svg";
// import pic from "./assets/image.jpg";
import pdf from "./files/Norden-Tenzin-Resume.pdf";
import resumeIcon from "./assets/resume.svg";
import githubIcon from "./assets/github.svg";
import instagramIcon from "./assets/instagram_xray.svg";
import emailIcon from "./assets/email.svg";
import linkedinIcon from "./assets/linkedin_xray.svg";
import Route from "./Route";
import { ReactComponent as Logo } from "./assets/logo.svg";

// fonts
// import font from './font/Jiro.otf';

// intro test
// Computers have always
// facinated me, it felt like magic. So it was a no brainer as to what I wanted to study in.

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
      english: "",
      morse: "",
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    this.setState({ isDesktop: window.innerWidth > 1220 });
  };

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
    const isDesktop = this.state.isDesktop;
    return (
      <div className="wrapper">
        <img
          src={require("./assets/qr-code.png")}
          width="100"
          className="background-logo"
        />
        <div className="landing">
          <div className="intro" id="home">
            <div className="bar">
              <span className="bar-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </span>
            </div>
            <div className="header-container">
              <div className="header-logo">tn.</div>
              {/* <div className="header-links-container">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <h1 className="links">Projects</h1>
                </Link>
                <Link
                  activeClass="active"
                  to="morse"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <h1 className="links">Demo</h1>
                </Link>
              </div> */}
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
                <span style={{textDecoration: "line-through"}}> Hoboken, NJ.</span> 
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
                <h1 className="header-title">Morse Translator</h1>
                <div className="card">
                  {/* {window.innerWidth > 770 ? ( */}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
