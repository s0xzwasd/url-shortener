import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { connect } from "react-redux";

import HeaderTitle from "./components/HeaderTitle";
import Button from "./components/Button";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";

import fetchLink from "./redux/actions/fetchLink";
import { hideShortLink } from "./redux/actions/app";

const GlobalStyle = createGlobalStyle`
  body {
    min-width: 320px;
    margin: 0;
    font-family: "Ubuntu", "Helvetica Neue", "Arial", sans-serif;
  }
`;

const StyledApp = styled.div`
  background-color: #1c1d21;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
  @media (max-width: 420px) {
    padding: 0 20px;
  }
`;

// TODO: add props validation
const App = ({ inputValue, isLoading, isLinkShortened, fetchLink, hideShortLink }) => {
  const renderEmoji = () => {
    if (isLinkShortened && !isLoading) {
      return "🎉";
    }
    if (!isLoading) {
      return "😎";
    }
    return "😴";
  };

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <HeaderTitle>
          Url shortener&nbsp;
          <span role='img' aria-label='Emoji: short url is cool!'>
            {renderEmoji()}
          </span>
        </HeaderTitle>
        <Wrapper>
          <Input />
          {!isLinkShortened ? (
            <Button onClick={() => fetchLink(inputValue)}>Short link!</Button>
          ) : (
            <>
              <Button>Copy</Button>
              <Button onClick={() => hideShortLink()}>New</Button>
            </>
          )}
        </Wrapper>
      </StyledApp>
    </>
  );
};

const mapStateToProps = state => {
  return {
    inputValue: state.value.value,
    isLoading: state.app.loading,
    isLinkShortened: state.app.linkVisisble
  };
};

const mapDispatchToProps = {
  fetchLink,
  hideShortLink
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
