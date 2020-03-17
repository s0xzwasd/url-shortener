import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import logo from "./logo.svg";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const StyledApp = styled.div`
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

const App = () => (
  <>
    <GlobalStyle />
    <StyledApp>
      <StyledHeader>
        <StyledLogo src={logo} alt='logo' />
      </StyledHeader>
    </StyledApp>
  </>
);

export default App;
