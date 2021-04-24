import React, { createRef, Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
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
} from "semantic-ui-react";
import _ from "lodash";
//my import
import * as morse from "./morse";
import CFE from "./CoverflowEffect";
// import Github from "./svg";
import pic from "./assets/image.jpg";
import githubIcon from "./assets/github.svg";
import instagramIcon from "./assets/instagram.svg";
import emailIcon from "./assets/email.svg";
import linkedinIcon from "./assets/linkedin.svg";

export default class App extends React.Component {
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
                    <p>
                      <a href="https://tenzinnorden.com/">Link 1</a>
                    </p>
                    <p>
                      <a href="https://tenzinnorden.com/">Link 2</a>
                    </p>
                    <p>
                      <a href="https://tenzinnorden.com/">Link 3</a>
                    </p>
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
                  <div className="header_links_row">
                    <a className="header_link" href="https://tenzinnorden.com/">
                      Link 1
                    </a>
                    <a className="header_link" href="https://tenzinnorden.com/">
                      Link 1
                    </a>
                    <a className="header_link" href="https://tenzinnorden.com/">
                      Link 1
                    </a>
                  </div>
                </Grid.Row>
              </Grid>
            </div>
          )}

          <div className="introduction">
            <p className="paragraph">
              Hi!!,
              <br />
              I'm Tenzin Norden, a Computer Science student at Rutgers
              University currently in my senior year. planning to graduate in
              2021. Before coming to Rutgers I got my Associate of Science
              majoring in CS from Middlesex County College. In my spare time I
              like to work on web and mobile app development projects. Other
              than that i enjoy making digital art, playing Video games and
              cooking. <br />
              Currently residing in New Brunswick, NJ.
            </p>
            {/* <a href="https://tenzinnorden.com/" className="button_red">
              Contact me
            </a> */}

            <Grid>
              <Grid.Row padding>
                <GridColumn width="1">
                  <a href="https://github.com/Norden-Tenzin">
                    <img src={githubIcon} className="icon" />
                  </a>
                </GridColumn>
                <GridColumn width="1">
                  <a href="www.linkedin.com/in/tenzin-norden">
                    <img src={linkedinIcon} className="icon" />
                  </a>
                </GridColumn>
                <GridColumn width="1">
                  <a href="https://www.instagram.com/nordten/">
                    <img src={instagramIcon} className="icon" />
                  </a>
                </GridColumn>
                <GridColumn width="1">
                  <a href="mailto:tenzinnorden29@gmail.com">
                    <img src={emailIcon} className="icon" />
                  </a>
                </GridColumn>
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
                  <Grid.Column width={3}>
                    <Link
                      activeClass="active"
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <h1 className="links">My Projects</h1>
                    </Link>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Link
                      activeClass="active"
                      to="morse"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <h1 className="links">Morse Demo</h1>
                    </Link>
                  </Grid.Column>
                  <Grid.Column width={3}>
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
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </Sticky>

          {/* project showcase page */}
          <div>
            <div className="my_projects" id="projects">
              <h1 className="header_title">My Projects</h1>
              <CFE />
            </div>

            {/* morse code page */}
            <div className="interactive" id="morse">
              <h1 className="header_title"> Morse Translator</h1>
              <div className="card">
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
                <h1 className="morse_helper_header">Morse Code Alphabet</h1>
                <p className="morse_helper_text">
                  A ".-", B "-...", C "-.-.", D "-..", E ".", F "..-.", G "--.",
                  H "....", I "..", J ".---", K "-.-", L ".-..", M "--", N "-.",
                  O "---", P ".--.", Q "--.-", R ".-.", S "...", T "-", U "..-",
                  V "...-", W ".--", X "-..-", Y "-.--", Z "--..",
                </p>
              </div>
            </div>

            <div className="about_me" id="about">
              <h1 className="header_title">About Me</h1>
              <p>if you have any queestions please feel free to email me</p>
              <CFE />
            </div>

            {/* footer */}
            <div className="end">
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
                  <GridColumn>
                    <a href="mailto:tenzinnorden29@gmail.com">
                      <img src={emailIcon} className="icon" />
                    </a>
                  </GridColumn>
                </Grid.Row>
                <Grid.Row>
                  <h1 className="header_title">Thanks for visiting!! </h1>
                </Grid.Row>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
