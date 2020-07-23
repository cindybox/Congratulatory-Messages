import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Card = (props) => (
  <StyledCard {...props} className="card">
    <h4>{props.message}</h4>
    <div className="card-divider" />
    <h6>{props.author}</h6>
  </StyledCard>
);

Card.propTypes = {
  message: PropTypes.string,
  author: PropTypes.string,
};

const StyledCard = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 3px 3px 8px 3px rgba(0, 0, 0, 0.1);
  padding: 6% 7% 10% 7%;
  text-align: left;
  height: auto;
  margin: 4rem 0;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.4s linear;
  }

  .card-divider {
    width: 100%;
    height: 3rem;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--mainBlack);
  }
`;
