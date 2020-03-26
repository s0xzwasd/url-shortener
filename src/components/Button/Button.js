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
  color: ${props => (props.isLoading ? "#c4c4c4" : "#d8dad3")};
  background-color: ${props => (props.isLoading ? "#c4c4c4" : "#56666b")};
  border: none;
`;

const Button = ({ isLoading, children, fetchData, value }) => {
  return (
    <StyledButton isLoading={isLoading} type='button' onClick={() => fetchData(value)}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  fetchData: PropTypes.func,
  value: PropTypes.string
};

Button.defaultProps = {
  isLoading: false,
  fetchData: () => {},
  value: ""
};

const mapStateToProps = state => {
  return {
    value: state.value.value,
    isLoading: state.app.loading
  };
};

const mapDispatchToProps = {
  fetchData: fetchLink
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
