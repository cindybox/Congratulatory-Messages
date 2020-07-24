import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Card = (props) => (
  <StyledCard {...props} className="card">
    <h4>{props.message}</h4>
    <h4 className="card-divider" />
    <h6>{props.author}</h6>
  </StyledCard>
);

Card.propTypes = {
  message: PropTypes.string,
  author: PropTypes.string,
};

const StyledCard = styled.div`
  /* edit variable values to adjust card appearance*/
  --dividerColor: var(--mainBlack, black);
  --textGap: 3rem;
  --cardHoverGrow: 1.1;
  --cardBackground: rgba(255, 255, 255, 0.9);
  --shadowColor: rgba(0, 0, 0, 0.1);
  --textAlignment: left;
  padding: 6% 7% 10% 7%;

  background-color: var(--cardBackground);
  box-shadow: 3px 3px 8px 3px var(--shadowColor);
  text-align: var(--textAlignment);
  margin: var(--cardGap) 0;

  &:hover {
    cursor: pointer;
    transform: scale(var(--cardHoverGrow));
    transition: transform 0.4s linear;
  }

  .card-divider {
    width: 100%;
    height: var(--textGap);
    margin-bottom: var(--textGap);
    border-bottom: 1px solid var(--dividerColor);
  }
`;
