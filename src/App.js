import React from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import { connect } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";

import HeaderTitle from "./components/HeaderTitle";
import Button from "./components/Button";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";

import fetchLink from "./redux/actions/fetchLink";
import { hideShortLink } from "./redux/actions/app";

const GlobalStyle = createGlobalStyle`
  :root {
    --c-primary: #d8dad3;
    --c-secondary: #56666b;
    --c-accent: #1c1d21;
    --c-loader: #c4c4c4;
    --c-text-on-white: #000000;
    --c-text: #ffffff;

    --font-size-small: 14px;
    --font-size-medium: 36px;
    --font-size-large: 48px;
  }

  body {
    min-width: 320px;
    margin: 0;
    font-family: "Ubuntu", "Helvetica Neue", "Arial", sans-serif;
  }
`;

const StyledApp = styled.div`
  background-color: var(--c-accent);
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

const StyledWrapper = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

const App = ({ inputValue, isLoading, isLinkShortened, fetchData, hideLink, link }) => {
  const renderEmoji = () => {
    if (isLinkShortened && !isLoading) {
      return "🎉";
    }
    if (!isLoading) {
      return "😎";
    }
    return "😴";
  };

  const apiLink = "https://rel.ink/";

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
            <Button onClick={() => fetchData(inputValue)}>Short link!</Button>
          ) : (
            <>
              <CopyToClipboard text={`${apiLink}${link.hashid}`}>
                <Button>Copy</Button>
              </CopyToClipboard>
              <StyledWrapper>
                <Button onClick={() => hideLink()}>New</Button>
              </StyledWrapper>
            </>
          )}
        </Wrapper>
      </StyledApp>
    </>
  );
};

App.propTypes = {
  inputValue: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLinkShortened: PropTypes.bool.isRequired,
  fetchData: PropTypes.func.isRequired,
  hideLink: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    link: state.link.data,
    inputValue: state.value.value,
    isLoading: state.app.loading,
    isLinkShortened: state.app.linkVisisble
  };
};

const mapDispatchToProps = {
  fetchData: fetchLink,
  hideLink: hideShortLink
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
