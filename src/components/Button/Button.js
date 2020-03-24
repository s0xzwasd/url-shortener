import React from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";

import fetchLink from "../../redux/actions/fetchLink";

const Button = ({ link }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2>Relink</h2>
        <button type='button' onClick={() => dispatch(fetchLink("https://stackoverflow.com/"))}>
          Button relink
        </button>
        {link && (
          <div>
            <p>{`https://rel.ink/${link.hashid}`}</p>
            <p>{link.url}</p>
            <p>{link.created_at}</p>
          </div>
        )}
      </div>
    </>
  );
};

Button.propTypes = {
  link: PropTypes.shape({
    hashid: PropTypes.string,
    url: PropTypes.string,
    created_at: PropTypes.string
  })
};

Button.defaultProps = {
  link: {
    hashid: "",
    url: "",
    created_at: ""
  }
};

const mapStateToProps = state => {
  return {
    link: state.link.link
  };
};

export default connect(mapStateToProps)(Button);
