import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Arrow } from "./Arrow";
import { PrimaryButton } from "./buttons/PrimaryButton";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export const CarouselContainer = (props) => {
  const { section_title, quotes } = props.messages ? props.messages : {};

  //set up the slider
  const settings = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow arrowDirection="right" />,
    prevArrow: <Arrow arrowDirection="left" />,
  };

  const renderSlider = () => (
    <Fragment>
      {section_title !== undefined && quotes !== undefined ? (
        <Slider {...settings}>
          {quotes.map((quote) => (
            <div className="quote-container">
              <h2 className={`${props.blueText && "blue-text"}`}>
                {quote.message}
              </h2>
              <div className="quote-divider" />
              <h3>{quote.attribution.split(",")[0].replace(/\n/, ", ")}</h3>
            </div>
          ))}
        </Slider>
      ) : (
        <div></div>
      )}
    </Fragment>
  );

  return (
    <CarouselStyleContainer className="carousel-container" {...props}>
      <h5 className="carousel-title bold-text">{section_title}</h5>
      {renderSlider()}
      <Link to="/messages">
        <PrimaryButton>View All</PrimaryButton>
      </Link>
    </CarouselStyleContainer>
  );
};

CarouselContainer.propTypes = {
  section_title: PropTypes.string,
  quotes: PropTypes.array,
};

const CarouselStyleContainer = styled.div`
  padding: var(--pageTop) var(--pageSidePadding) 10vw var(--pageSidePadding);

  .quote-divider {
    margin: 0 auto;
    width: var(--dividerLineWidth);
    height: 1rem;
    border-bottom: var(--dividerLineSize) solid var(--dividerLineColor);
  }

  .quote-container:focus {
    outline: none;
  }

  .quote-container h2 {
    padding: ${(props) =>
      props.blueText
        ? "calc(0.8*var(--h2FontSize)) var(--quoteSidePaddingBlue) calc(0.8*var(--h2FontSize)) var(--quoteSidePaddingBlue)"
        : "calc(0.8*var(--h2FontSize)) var(--quoteSidePaddingRegular)calc(0.8*var(--h2FontSize)) var(--quoteSidePaddingRegular)"};
  }

  .quote-container h3 {
    padding: calc(0.8 * var(--h2FontSize)) 8vw calc(0.6 * var(--h2FontSize)) 8vw;
  }

  .slick-arrow {
    background: transparent !important;
    z-index: 2;
    top: calc(2.5 * var(--h2FontSize));
  }

  .slick-arrow:before {
    content: "";
  }

  .slick-next {
    right: max(calc(var(--arrowWidth) - 20px), 0px);
  }

  .slick-prev {
    left: 0;
  }

  .slick-dots {
    position: relative;
    bottom: 0;
    padding-bottom: calc(0.6 * var(--h2FontSize));
  }

  .slick-dots li {
    margin: 0 1rem;
  }

  .slick-dots li button:before {
    font-size: max(1.6rem, 12px);
  }
`;
