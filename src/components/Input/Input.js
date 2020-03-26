import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import fetchInput from "../../redux/actions/fetchInput";

const StyledInput = styled.input`
  font-family: inherit;
  font-size: 14px;
  width: calc(80% - 125px);
  color: ${props => (props.isLoading ? "#c4c4c4" : "#000000")};
  padding: 5px 15px;
  border: none;
  border-radius: 0;
  background-color: ${props => (props.isLoading ? "#c4c4c4" : "#ffffff")};
`;

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    const { fetchData } = this.props;

    this.setState({ value: e.target.value });

    fetchData(e.target.value);
  };

  render() {
    const { isLoading, link } = this.props;
    const { value } = this.state;

    if (link) {
      return <StyledInput isLoading={isLoading} autoFocus value={`https://rel.ink/${link.hashid}`} readOnly />;
    }

    return <StyledInput isLoading={isLoading} autoFocus value={value} onChange={this.handleChange} />;
  }
}

Input.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  link: PropTypes.node,
  fetchData: PropTypes.func.isRequired
};

Input.defaultProps = {
  link: ""
};

const mapStateToProps = state => {
  return {
    link: state.link.data,
    isLoading: state.app.loading
  };
};

const mapDispatchToProps = {
  fetchData: fetchInput
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
