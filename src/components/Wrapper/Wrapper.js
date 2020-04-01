import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledWrapper = styled.section`
  min-width: 510px;
  padding: 15px 10px;
  background-color: var(--c-primary);
  border-radius: 5px;
`;

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default Wrapper;
