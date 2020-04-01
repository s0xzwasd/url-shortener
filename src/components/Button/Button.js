import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import fetchLink from "../../redux/actions/fetchLink";

const StyledButton = styled.button`
  cursor: pointer;
  padding: 5px 20px;
  font-family: inherit;
  font-size: var(--font-size-small);
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => (props.isLoading ? "var(--c-loader)" : "var(--c-primary)")};
  background-color: ${props => (props.isLoading ? "var(--c-loader)" : "var(--c-secondary)")};
  border: none;
`;

const Button = ({ isLoading, children, onClick }) => {
  return (
    <StyledButton isLoading={isLoading} type='button' onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
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
