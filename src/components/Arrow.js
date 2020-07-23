import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import arrowLeft from "../images/Arrow_left.svg";
import arrowRight from "../images/Arrow_right.svg";

export const Arrow = (props) => {
  const { className, style, onClick, arrowDirection } = props;

  return (
    <ArrowContainer
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    >
      <img
        src={arrowDirection === "right" ? arrowLeft : arrowRight}
        alt={arrowDirection === "right" ? "Next" : "Previous"}
      />
    </ArrowContainer>
  );
};

Arrow.propTypes = {
  arrowDirection: PropTypes.string,
};

const ArrowContainer = styled.div`
  img {
    max-width: var(--arrowWidth);
    min-width: var(--arrowMinWidth);
    &:hover {
      opacity: var(--arrowHoverOpacity);
    }
  }
`;
