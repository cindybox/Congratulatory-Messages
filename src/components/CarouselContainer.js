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
  --dividerLineWidth: 1.2em;
  --dividerLineSize: 2px;
  --dividerLineColor: var(--mainBlack, black);
  --pageSidePadding: 3vw;
  --headlineTopPadding1: 0.8em;
  --headlineTopPadding2: 0.6em;
  /* rem is used here due to some default setting of the carousel npm' */
  --arrowTop: 15rem;

  /* base font is set to match p, change p font size in App.css to update font size */
  font-size: var(--h2MinFontSize);
  padding: var(--pageTop, 12rem) var(--pageSidePadding) 10vw
    var(--pageSidePadding);

  .quote-divider {
    margin: 0 auto;
    width: var(--dividerLineWidth);
    height: 1px;
    border-bottom: var(--dividerLineSize) solid var(--dividerLineColor);
  }

  .quote-container:focus {
    outline: none;
  }

  /* edit below side padding if changes are needed */
  .quote-container h2 {
    padding: ${(props) =>
      props.blueText
        ? "var(--headlineTopPadding1) 8vw var(--headlineTopPadding1) 8vw"
        : "var(--headlineTopPadding1) 13.1vw var(--headlineTopPadding1) 13.1vw"};
  }

  .quote-container h3 {
    padding: var(--headlineTopPadding1) 8vw var(--headlineTopPadding2) 8vw;
  }

  .slick-arrow {
    background: transparent !important;
    z-index: 2;
    top: var(--arrowTop);
  }

  .slick-arrow:before {
    content: "";
  }

  .slick-next {
    transform: rotate(180deg);
    right: 0;
  }

  .slick-prev {
    left: 0;
  }

  .slick-dots {
    position: relative;
    bottom: 0;
    margin-bottom: var(--headlineTopPadding2);
    font-size: 0;
  }

  .slick-dots li {
    margin: 0 1rem;
  }

  /* p size is used for the slick dots, change the p size */
  .slick-dots li button:before {
    font-size: var(--pMinFontSize, 12px);
  }

  @media screen and (max-width: 480px) {
    /* reduce the side padding on smaller screen */
    .quote-container h2 {
      padding-left: 10vw;
      padding-right: 10vw;
    }
  }

  @media screen and (min-width: 480px) and (max-width: 1199px) {
    font-size: var(--h2FontSize);
    .slick-dots li button:before {
      font-size: var(--pFontSize, 14px);
    }
  }

  @media screen and (min-width: 1200px) {
    font-size: var(--h2MaxFontSize);
    .slick-dots li button:before {
      font-size: var(--pMaxFontSize, 16px);
    }
  }
`;
