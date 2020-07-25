import React, { Component } from "react";
import PropTypes from "prop-types";

import { CarouselContainer } from "../components/carousel/CarouselContainer";

class MainPage extends Component {
  static propTypes = {
    data: PropTypes.array,
  };

  render() {
    return (
      <div className="page main-page">
        <CarouselContainer messages={this.props.data[0]} />
        <CarouselContainer messages={this.props.data[1]} blueText />
      </div>
    );
  }
}

export default MainPage;
