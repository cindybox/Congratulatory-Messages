import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { CardDeck } from "../components/cards/CardDeck";
import { PrimaryButton } from "../components/shared/buttons/PrimaryButton";
import { Link } from "react-router-dom";

const MessagePage = (props) => {
  const allQuotes = props.data.map((d) => d.quotes).flat();
  return (
    <MessageContainer {...props} className="page message-page">
      <h5 className="bold-text page-title">all messages</h5>
      <Link to="/">
        <PrimaryButton>Go Back</PrimaryButton>
      </Link>
      <CardDeck allQuotes={allQuotes}></CardDeck>
      <Link to="/">
        <PrimaryButton>Go Back</PrimaryButton>
      </Link>
    </MessageContainer>
  );
};

MessagePage.propTypes = {
  data: PropTypes.array,
};

const MessageContainer = styled.div`
  --messagePageSidePadding: 10%;
  padding: var(--pageTop) var(--messagePageSidePadding);

  h5 {
    padding-bottom: 2rem;
  }
`;

export default MessagePage;
