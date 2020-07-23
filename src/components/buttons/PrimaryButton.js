import React from "react";
import styled from "styled-components";
import { BasicButton } from "./BasicButton";

export const PrimaryButton = (props) => (
  <StyledPrimaryButton>
    <BasicButton>
      <p> {props.children}</p>
    </BasicButton>
  </StyledPrimaryButton>
);

const StyledPrimaryButton = styled.div`
  button {
    padding: 0 3rem;
    height: 5rem;
    background: var(--mainBlack);
    color: var(--mainWhite);
    border: none;
  }

  button:hover {
    background: var(--mainGrey);
  }

  button p {
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: var(--mainWhite);
    font-size: var(--buttonFontSize);
    line-height: 5rem;
  }
`;
