import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import fetchLink from "../../redux/actions/fetchLink";

const StyledButton = styled.button`
  cursor: pointer;
  padding: 5px 20px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: #d8dad3;
  background-color: #56666b;
  border: none;
`;

const Button = ({ children, fetchData }) => {
  return (
    <StyledButton type='button' onClick={() => fetchData("https://stackoverflow.com/")}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fetchData: PropTypes.func
};

Button.defaultProps = {
  fetchData: () => {}
};

const mapStateToProps = state => {
  return {
    link: state.link.data
  };
};

const mapDispatchToProps = {
  fetchData: fetchLink
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
