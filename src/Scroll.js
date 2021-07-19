import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
// import "./scroll.scss";
import "./stylesheet.scss";

import Card from "./Card";
import picture from "./assets/image.jpg";

const cardInfo = [
  {
    route: "/property",
    pic: picture,
    header: "header",
  },
  {
    route: "/property",
    pic: picture,
    header: "header",
  },
  {
    route: "/property",
    pic: picture,
    header: "header",
  },
];

// const list = [
//   { name: "item1" },
//   { name: "item2" },
//   { name: "item3" },
//   { name: "item4" },
//   { name: "item5" },
//   { name: "item6" },
//   { name: "item7" },
//   { name: "item8" },
//   { name: "item9" },
// ];

// One item component
// selected prop will be passed

// const MenuItem = ({ text, selected }) => {
//   return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
// };

// All items component
// Important! add unique key
export const Menu = (cardInfo, selected) =>
  cardInfo.map((e) => {
    // const { name } = el;
    return <Card header={e.header} pic={e.pic} />;
    // return <MenuItem text={name} key={name} selected={selected} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const selected = "item1";

export default class Scroll extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(cardInfo, selected);
  }

  state = {
    selected,
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}
