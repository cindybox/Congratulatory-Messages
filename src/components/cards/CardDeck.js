import React from "react";
import { Card } from "./Card";
import Masonry from "react-masonry-css";
import styled from "styled-components";
import PropTypes from "prop-types";

export const CardDeck = (props) => {
  //set up media break point
  const breakpointColumnsObj = { default: 3, 700: 2, 500: 1 };
  return (
    <StyledCardDeck>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="mansonry-container"
        columnClassName="mansonry-column"
      >
        {props.allQuotes.map((quote, i) => (
          <Card
            key={i + 1}
            message={quote.message}
            author={quote.attribution.split(",")[0].replace(/\n/, ", ")}
          />
        ))}
      </Masonry>
    </StyledCardDeck>
  );
};

CardDeck.propTypes = {
  allQuotes: PropTypes.array,
};

const StyledCardDeck = styled.div`
  .mansonry-container {
    margin-top: 3rem;
    display: flex;
    width: auto;
  }
  .mansonry-column {
    padding-left: 4rem;
    background-clip: padding-box;
  }
`;
