import React, { createRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";

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
        <div className="landing">
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
          <div className="para">
            <p>
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
            </Grid>
          </div>
        </div>
        <div ref={this.contextRef}>
          <Sticky context={this.contextRef}>
            <div className="header_links_sticky" attached="top">
              <Grid centered>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <a href="https://tenzinnorden.com/">Home</a>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <a href="https://tenzinnorden.com/">My Projects</a>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <a href="https://tenzinnorden.com/">Morse Demo</a>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <a href="https://tenzinnorden.com/">Contact Me</a>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </Sticky>
          <div>
            <div className="my_projects">
              <h1 className="header_title">my projects</h1>
              <Grid centered>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <section className="card">
                      <img src={pic} className="image" />
                      <p className="header">header</p>
                      <p className="detail">Some Text</p>
                    </section>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <section className="card">
                      <img src={pic} className="image" />
                      <p className="header">header</p>
                      <p className="detail">Some Text</p>
                    </section>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <section className="card">
                      <img src={pic} className="image" />
                      <p className="header">header</p>
                      <p className="detail">Some Text</p>
                    </section>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <section className="card">
                      <img src={pic} className="image" />
                      <p className="header">header</p>
                      <p className="detail">Some Text</p>
                    </section>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            <div className="interactive">
              <div className="card">
                <h1 className="header_title">
                  English to Morse and back translator
                </h1>
                <div className="text_area_holder">
                  <Form size="massive">
                    <TextArea
                      className="text_area"
                      id="english"
                      placeholder="English"
                      value={this.state.english}
                      onChange={this.englishInput}
                    />
                    <TextArea
                      className="text_area"
                      id="morse"
                      placeholder="Morse"
                      value={this.state.morse}
                      onChange={this.morseInput}
                    />
                  </Form>
                </div>
              </div>
            </div>
            <div className="contact_me">
              <div className="card">
                <h1 className="header_title">About Me</h1>
                <p>if you have any queestions please feel free to email me</p>
                
                <CFE/>
                
              </div>
            </div>
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
