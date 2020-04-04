import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledButton = styled.button`
  cursor: pointer;
  padding: 5px 20px;
  font-family: inherit;
  font-size: var(--font-size-small);
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) => (props.isLoading ? "var(--c-loader)" : "var(--c-primary)")};
  background-color: ${(props) => (props.isLoading ? "var(--c-loader)" : "var(--c-secondary)")};
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
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    value: state.handleValue.input,
    isLoading: state.app.loading,
  };
};

export default connect(mapStateToProps)(Button);
