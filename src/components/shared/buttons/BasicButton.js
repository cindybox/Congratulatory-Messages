import React from "react";
import styled from "styled-components";

export const BasicButton = (props) => (
  <StyledBasicButton>{props.children}</StyledBasicButton>
);

const StyledBasicButton = styled.button`
  outline: none;
  button:focus {
    outline: none;
  }
`;
