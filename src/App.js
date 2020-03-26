import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import HeaderTitle from "./components/HeaderTitle";
import Button from "./components/Button";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";

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

const App = () => (
  <>
    <GlobalStyle />
    <StyledApp>
      <HeaderTitle>
        Url shortener&nbsp;
        <span role='img' aria-label='Emoji: short url is cool!'>
          😎
        </span>
      </HeaderTitle>
      <Wrapper>
        <Input />
        <Button>Short link!</Button>
      </Wrapper>
    </StyledApp>
  </>
);

export default App;
