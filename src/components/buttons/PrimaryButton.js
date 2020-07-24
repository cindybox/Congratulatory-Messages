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
  /* edit variable values to adjust button appearance */
  /* base font is set to match p, change p font size in App.css to update font size */
  --topPaddingAtLargeScreen: 1.2em;
  --topPaddingAtSmallScreen: 1em;
  --sidePaddingAtLargeScreen: 3em;
  --sidePaddingAtSmallScreen: 2em;

  --buttonColor: var(--mainBlack, black);
  --buttonHoverColor: var(--mainGrey, grey);
  --buttonFontColor: var(--mainWhite, white);

  --textCase: uppercase;

  /* only change below when specifically needed */
  button {
    padding: var(--topPaddingAtSmallScreen) var(--sidePaddingAtSmallScreen);
    background: var(--buttonColor);
    color: var(--buttonFontColor);
    border: none;
    font-size: var(--pMinFontSize, 12px);
    text-transform: var(--textCase);
  }

  button:hover {
    background: var(--buttonHoverColor);
  }

  @media screen and (min-width: 480px) and (max-width: 1199px) {
    button {
      font-size: var(--pFontSize, 14px);
      padding: var(--topPaddingAtLargeScreen) var(--sidePaddingAtLargeScreen);
    }
  }
  @media screen and (min-width: 1200px) {
    button {
      font-size: var(--pMaxFontSize, 16px);
      padding: var(--topPaddingAtLargeScreen) var(--sidePaddingAtLargeScreen);
    }
  }
`;
