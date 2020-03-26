import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import fetchInput from "../../redux/actions/fetchInput";

const StyledInput = styled.input`
  color: #000000;
  padding: 5px 15px;
  border-radius: 0;
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
    const { value } = this.state;

    return <StyledInput autoFocus value={value} onChange={this.handleChange} />;
  }
}

Input.propTypes = {
  fetchData: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  fetchData: fetchInput
};

export default connect(null, mapDispatchToProps)(Input);
