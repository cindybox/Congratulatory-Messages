import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import arrow from "../../images/Arrow.svg";

export const Arrow = (props) => {
  const { className, style, onClick, arrowDirection } = props;

  return (
    <ArrowContainer
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    >
      <img src={arrow} />
    </ArrowContainer>
  );
};

Arrow.propTypes = {
  arrowDirection: PropTypes.string,
};

const ArrowContainer = styled.div`
  /* edit variable values to adjust arrow appearance */
  --arrowColor: var(--mainBlack);
  --arrowWidth: 5.6rem;
  --arrowMinWidth: 24px;
  --arrowHoverOpacity: 0.6;

  img {
    max-width: var(--arrowWidth);
    min-width: var(--arrowMinWidth);
    &:hover {
      opacity: var(--arrowHoverOpacity);
    }
  }
`;
