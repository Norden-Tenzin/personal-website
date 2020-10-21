import React, { createRef } from "react";
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
} from "semantic-ui-react";
import _ from "lodash";
import pic from "./assets/image.jpg";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
      headNavHeight: 0,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    let height = this.divElement.clientHeight
    this.updateHeadNavHeight(height)
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    this.setState({ isDesktop: window.innerWidth > 1220 });
  };
  updateHeadNavHeight = (height) => {
    this.setState({ headNavHeight: height});
  }

  contextRef = createRef();
  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div>
        <div style={{ height: "97vh"}}>
          {this.state.headNavHeight}
          {isDesktop ? (
            <div ref={(divElement) => { this.divElement = divElement } } className="header_holder">
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
            <div ref={(divElement) => { this.divElement = divElement }} className="header_holder header_holder--responsive">
              <Grid container>
                <Grid.Row>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="https://tenzinnorden.com/" className="button">
              Contact me
            </a>
          </div>
        </div>
        <div ref={this.contextRef}>
          <Sticky context={this.contextRef}>
            <div className="header_links_sticky" attached="top">
              <Grid centered>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <a href="https://tenzinnorden.com/">Link 1</a>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <a href="https://tenzinnorden.com/">Link 2</a>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <a href="https://tenzinnorden.com/">Link 3</a>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <a href="https://tenzinnorden.com/">Link 4</a>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </Sticky>
          <div>
            <div style={{ height: "97vh", backgroundColor: "#b3f542" }}>
              <h1 className="header_title">my projects</h1>
              <Grid centered>
                <Grid.Row>
                  <Grid.Column>
                    <section className="card">
                      <img src={pic} className="image" />
                      <p className="header">header</p>
                      <p className="detail">Some Text</p>
                    </section>
                  </Grid.Column>
                  <Grid.Column>
                    <section className="card">
                      <img src={pic} className="image" />
                      <p className="header">header</p>
                      <p className="detail">Some Text</p>
                    </section>
                  </Grid.Column>
                  <Grid.Column>
                    <section className="card">
                      <img src={pic} className="image" />
                      <p className="header">header</p>
                      <p className="detail">Some Text</p>
                    </section>
                  </Grid.Column>
                  <Grid.Column>
                    <section className="card">
                      <img src={pic} className="image" />
                      <p className="header">header</p>
                      <p className="detail">Some Text</p>
                    </section>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            <div
              style={{ height: "97vh", backgroundColor: "#fcba03" }}
              className="interactive"
            >
              <section className="card">
                <header className="header_title">Interactive element</header>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
