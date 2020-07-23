import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PageBackground } from "./PageBackground";
import { CardDeck } from "../components/cards/CardDeck";
import { PrimaryButton } from "../components/buttons/PrimaryButton";
import { Link } from "react-router-dom";

const MessagePage = (props) => {
  const allQuotes = props.data.map((d) => d.quotes).flat();
  return (
    <MessageContainer {...props} className="page message-page">
      <PageBackground />
      <h5 className="bold-text">all messages</h5>
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
  padding: 10rem var(--messagePageSidePadding);

  h5 {
    padding-bottom: 2rem;
  }
`;

export default MessagePage;
