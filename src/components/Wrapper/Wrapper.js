import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledWrapper = styled.section`
  padding: 15px 20px;
  background-color: #d8dad3;
  border-radius: 5px;
`;

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default Wrapper;
