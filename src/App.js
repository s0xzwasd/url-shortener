import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import HeaderTitle from "./components/HeaderTitle";
import Button from "./components/Button";
import Input from "./components/Input";

const GlobalStyle = createGlobalStyle`
  body {
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
      <Button>Short link!</Button>
      <Input />
    </StyledApp>
  </>
);

export default App;
