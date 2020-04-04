import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;

const StyledItems = styled.a`
  display: inline-block;
  margin: 10px 0;
  cursor: pointer;
  font-size: 14px;
`;

const Items = ({ items }) => {
  const listItems = items.map((item) => (
    <CopyToClipboard key={uuidv4()} text={item}>
      <StyledItems onClick={() => toast.success("Copied!", { className: "toast-custom" })}>{item}</StyledItems>
    </CopyToClipboard>
  ));

  return <StyledSection>{listItems}</StyledSection>;
};

Items.propTypes = {
  items: PropTypes.node.isRequired,
};

const mapStateToProps = (state) => {
  return {
    items: state.shortenedItems.links,
  };
};

export default connect(mapStateToProps)(Items);
