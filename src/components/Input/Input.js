import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import fetchInput from "../../redux/actions/fetchInput";

const StyledInput = styled.input`
  font-family: inherit;
  font-size: var(--font-size-small);
  width: calc(80% - 100px);
  color: ${props => (props.isLoading ? "var(--c-loader)" : "var(--c-text-on-white)")};
  padding: 5px 15px;
  border: none;
  border-radius: 0;
  background-color: ${props => (props.isLoading ? "var(--c-loader)" : "var(--c-text)")};
`;

class Input extends Component {
  handleChange = e => {
    const { fetchData } = this.props;

    fetchData(e.target.value);
  };

  render() {
    const { value, isLoading, link, isLinkShortened } = this.props;

    const apiLink = "https://rel.ink/";

    if (link && isLinkShortened) {
      return <StyledInput isLoading={isLoading} autoFocus value={`${apiLink}${link.hashid}`} readOnly />;
    }

    return <StyledInput isLoading={isLoading} autoFocus value={value} onChange={this.handleChange} />;
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  link: PropTypes.node.isRequired,
  isLinkShortened: PropTypes.bool.isRequired,
  fetchData: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    value: state.handleValue.input,
    link: state.link.data,
    isLoading: state.app.loading,
    isLinkShortened: state.app.linkShortened,
  };
};

const mapDispatchToProps = {
  fetchData: fetchInput
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
