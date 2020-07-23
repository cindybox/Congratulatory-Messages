import React, { Component } from "react";
import PropTypes from "prop-types";

import { CarouselContainer } from "../components/CarouselContainer";
import { PageBackground } from "./PageBackground";

class MainPage extends Component {
  static propTypes = {
    data: PropTypes.array,
  };

  render() {
    return (
      <div className="page main-page">
        <PageBackground />
        <CarouselContainer messages={this.props.data[0]} />
        <CarouselContainer messages={this.props.data[1]} blueText />
      </div>
    );
  }
}

export default MainPage;
