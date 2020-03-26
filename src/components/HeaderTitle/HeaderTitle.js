import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeader = styled.h1`
  text-transform: uppercase;
  color: #d8dad3;
  font-size: 48px;
  font-weight: 400;
`;

const HeaderTitle = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

HeaderTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeaderTitle;
