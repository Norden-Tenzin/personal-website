import React from "react";
// import pic from "./assets/image.jpg";
import "./css/stylesheet.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.header,
      pic: this.props.pic,
    };
  }

  render() {
    // const { data } = this.state;
    // console.log(this.state.pic)
    return (
      <section className="card">
        <img src={this.state.pic} className="image"/>
        <p className="header">{this.state.header}</p>
        {/* <p className="detail">Some Text</p> */}
      </section>
    );
  }
}
export default Card;
