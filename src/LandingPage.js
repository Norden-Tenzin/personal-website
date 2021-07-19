import React, { createRef, Fragment } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
import { Link } from "react-scroll";
import "./stylesheet.scss";

import {
  Card,
  Icon,
  Image,
  Grid,
  Button,
  Sticky,
  Menu,
  Input,
  Segment,
  Form,
  TextArea,
  GridColumn,
  Label,
} from "semantic-ui-react";
import _ from "lodash";
//my import
import * as morse from "./morse";
import CFE from "./CoverflowEffect";

import Scroll from "./Scroll";
// import Github from "./svg";
import pic from "./assets/image.jpg";

import pdf from "./files/Norden-Tenzin-Resume.pdf";
import resumeIcon from "./assets/resume.svg";
import githubIcon from "./assets/github.svg";
import instagramIcon from "./assets/instagram.svg";
import emailIcon from "./assets/email.svg";
import linkedinIcon from "./assets/linkedin.svg";
import Route from "./Route";
import Project from "./Project";

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
    console.log(x);
    // console.log(this.state.morse);

    this.setState({ english: e.target.value });
    this.setState({ morse: x });
  };

  morseInput = (e) => {
    this.setState({ english: "" });
    this.setState({ morse: "" });

    let x = morse.mToE(e.target.value);
    console.log(x);
    // console.log(this.state.morse);

    this.setState({ english: x });
    this.setState({ morse: e.target.value });
  };

  contextRef = createRef();
  render() {
    const isDesktop = this.state.isDesktop;
    return (
      <div>
        <div className="landing" id="home">
          {isDesktop ? (
            <div className="header_holder">
              <Grid container columns={2}>
                <Grid.Column width={3}>
                  <h1 className="header_logo">tn.</h1>
                </Grid.Column>
                <Grid.Column width={3}>
                  <div className="header_links_col">
                    <Link
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-360}
                      duration={500}
                    >
                      <h1 className="links">Home</h1>
                    </Link>
                    <Link
                      activeClass="active"
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {/* <h1 className="links">Projects</h1>
                    </Link>
                    <Link
                      activeClass="active"
                      to="morse"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    > */}
                      <h1 className="links">Demo</h1>
                    </Link>
                    {/* <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <h1 className="links">About</h1>
                    </Link> */}
                  </div>
                </Grid.Column>
              </Grid>
            </div>
          ) : (
            <div className="header_holder--responsive">
              <Grid container>
                <Grid.Row style={{ padding: 0 }}>
                  <h1 className="header_logo">tn.</h1>
                </Grid.Row>
                <Grid.Row style={{ padding: 0 }}>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-360}
                    duration={500}
                  >
                    <h1 className="header_link">Home</h1>
                  </Link>
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {/* <h1 className="header_link">Projects</h1>
                  </Link>
                  <Link
                    activeClass="active"
                    to="morse"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  > */}
                    <h1 className="header_link">Demo</h1>
                  </Link>
                  {/* <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <h1 className="header_link">About</h1>
                    </Link> */}
                </Grid.Row>
              </Grid>
            </div>
          )}

          <div className="introduction">
            <p className="paragraph">
              Hi!!,
              <br />
              I'm Tenzin Norden, a Computer Science graduate from Rutgers
              University in May 2021. Before coming to Rutgers I got my
              Associate of Science majoring in CS from Middlesex County College.
              In my spare time I like to work on web and mobile app development
              projects. Other than that i enjoy making digital art and cooking.
              <br />
              Currently residing in Edison, NJ.
            </p>

            <Grid>
              <Grid.Row padding>
                <GridColumn width="1">
                  <a href="https://github.com/Norden-Tenzin">
                    <img src={githubIcon} className="icon" />
                  </a>
                </GridColumn>
                <GridColumn width="1">
                  <a href="https://www.linkedin.com/in/tenzin-norden">
                    <img src={linkedinIcon} className="icon" />
                  </a>
                </GridColumn>
                <GridColumn width="1">
                  <a href="https://www.instagram.com/nordten/">
                    <img src={instagramIcon} className="icon" />
                  </a>
                </GridColumn>
                <GridColumn width="1">
                  <a href={pdf}>
                    <img src={resumeIcon} className="icon" />
                  </a>
                </GridColumn>

                {/* <GridColumn width="1">
                  <a href="mailto:tenzinnorden29@gmail.com">
                    <img src={emailIcon} className="icon" />
                  </a>
                </GridColumn> */}
                {/* <GridColumn>
                    <p className="email">tenzinnorden29@gmail.com</p>
                </GridColumn> */}
              </Grid.Row>
            </Grid>
          </div>
        </div>

        {/* sticky header bar */}
        <div ref={this.contextRef}>
          <Sticky context={this.contextRef}>
            <div className="header_links_sticky" attached="top">
              <Grid>
                <Grid.Row centered>
                  <Grid.Column width={3}>
                    <Link
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-360}
                      duration={500}
                    >
                      <h1 className="links">Home</h1>
                    </Link>
                  </Grid.Column>
                  {/* <Grid.Column width={3}>
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
                  </Grid.Column> */}
                  <Grid.Column width={3}>
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
                  </Grid.Column>
                  {/* <Grid.Column width={3}>
                    <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <h1 className="links">Contact Me</h1>
                    </Link>
                  </Grid.Column> */}
                </Grid.Row>
              </Grid>
            </div>
          </Sticky>

          {/* project showcase page TODO*/}
          {/* <div>
            <div className="my_projects" id="projects">
              <h1 className="header_title">My Projects</h1>
              <Scroll />
            </div>
          </div> */}

          {/* morse code page */}
          <div>
            <div className="interactive" id="morse">
              <h1 className="header_title">Morse Translator</h1>
              <div className="card">
                {window.innerWidth > 770 ? (
                  <div className="text_area_holder">
                    <Form size="massive" unstackable>
                      <Form.Group widths="equal">
                        <textarea
                          className="text_area"
                          id="english"
                          placeholder="English"
                          value={this.state.english}
                          onChange={this.englishInput}
                        />
                        <textarea
                          className="text_area"
                          id="morse"
                          placeholder="Morse"
                          value={this.state.morse}
                          onChange={this.morseInput}
                        />
                      </Form.Group>
                    </Form>
                  </div>
                ) : (
                  <div className="text_area_holder_responsive">
                    <Form size="massive" unstackable>
                      <Form.Group widths="equal">
                        <textarea
                          className="text_area_responsive"
                          id="english"
                          placeholder="English"
                          value={this.state.english}
                          onChange={this.englishInput}
                        />
                        <textarea
                          className="text_area_responsive"
                          id="morse"
                          placeholder="Morse"
                          value={this.state.morse}
                          onChange={this.morseInput}
                        />
                      </Form.Group>
                    </Form>
                  </div>
                )}
                {window.innerWidth > 770 ? (
                  <h1 className="morse_helper_header">
                    (Valid) Morse Code Characters
                  </h1>
                ) : null}
                {window.innerWidth > 770 ? (
                  <p className="morse_helper_text">
                    A ".-", B "-...", C "-.-.", D "-..", E ".", F "..-.", G
                    "--.", H "....", I "..", J ".---", K "-.-", L ".-..", M
                    "--", N "-.", O "---", P ".--.", Q "--.-", R ".-.", S "...",
                    T "-", U "..-", V "...-", W ".--", X "-..-", Y "-.--", Z
                    "--..",
                  </p>
                ) : null}
              </div>
            </div>

            {/* About me page */}
            {/* <div className="about_me" id="about">
              <h1 className="header_title">About Me</h1>
              <CFE />
            </div> */}

            {/* footer */}

            {/* <div className="end">
              <Grid centered>
                <Grid.Row>
                  <GridColumn>
                    <a href="https://github.com/Norden-Tenzin">
                      <img src={githubIcon} className="icon" />
                    </a>
                  </GridColumn>
                  <GridColumn>
                    <a href="www.linkedin.com/in/tenzin-norden">
                      <img src={linkedinIcon} className="icon" />
                    </a>
                  </GridColumn>
                  <GridColumn>
                    <a href="https://www.instagram.com/nordten/">
                      <img src={instagramIcon} className="icon" />
                    </a>
                  </GridColumn>
                 
                </Grid.Row>
                <Grid.Row>
                  <h1 className="header_title">Thanks for visiting!! </h1>
                </Grid.Row>
              </Grid>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
