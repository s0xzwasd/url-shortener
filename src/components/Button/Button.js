import React from "react";
import { connect, useDispatch } from "react-redux";

import fetchLink from "../../redux/actions/fetchLink";

const Button = ({ syncLink }) => {
  const dispatch = useDispatch();

  return (
    <>
      <button type='button' onClick={() => dispatch(fetchLink("https://stackoverflow.com/"))}>
        Button
      </button>
      {syncLink && <p>{`https://rel.ink/${syncLink.hashid}`}</p>}
    </>
  );
};

const mapStateToProps = state => {
  return {
    syncLink: state.linkReducer.link
  };
};

export default connect(mapStateToProps)(Button);
