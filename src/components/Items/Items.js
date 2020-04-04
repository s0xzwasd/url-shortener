import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { connect } from "react-redux";

const StyledItems = styled.p`
  cursor: pointer;
  font-size: 14px;
`;

const Items = ({ items }) => {
  const listItems = items.map(item => (
    <CopyToClipboard text={item}>
      <StyledItems onClick={() => toast.success("Copied!", { className: "success-toast" })} key={item}>
        {item}
      </StyledItems>
    </CopyToClipboard>
  ));

  return <div>{listItems}</div>;
};

Items.propTypes = {
  items: PropTypes.node.isRequired
};

const mapStateToProps = state => {
  return {
    items: state.shortenedItems.links,
  };
};

export default connect(mapStateToProps)(Items);
