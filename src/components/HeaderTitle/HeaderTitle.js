import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeader = styled.h1`
  text-transform: uppercase;
  color: var(--c-primary);
  font-size: var(--font-size-large);
  font-weight: 400;

  @media (max-width: 420px) {
    font-size: var(--font-size-medium);
  }
`;

const HeaderTitle = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

HeaderTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderTitle;
