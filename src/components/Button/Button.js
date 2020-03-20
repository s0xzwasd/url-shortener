import React from "react";
import { connect, useDispatch } from "react-redux";

import fetchRelink from "../../redux/actions/fetchRelink";
import fetchCleanuri from "../../redux/actions/fetchCleanuri";

const Button = ({ relink, cleanuri }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2>Relink</h2>
        <button type='button' onClick={() => dispatch(fetchRelink("https://stackoverflow.com/"))}>
          Button relink
        </button>
        {relink && (
          <div>
            <p>{`https://rel.ink/${relink.hashid}`}</p>
            <p>{relink.url}</p>
            <p>{relink.created_at}</p>
          </div>
        )}
      </div>
      <div>
        <h2>Cleanuri</h2>
        <button
          type='button'
          onClick={() =>
            dispatch(
              fetchCleanuri(
                "https://trello.com/c/LaayVfDs/7-us-7-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB-%D0%B4%D0%BB%D1%8F-cleanuri"
              )
            )
          }
        >
          Button cleanuri
        </button>
        {cleanuri && <p>{cleanuri.result_url}</p>}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    relink: state.relink.link,
    cleanuri: state.cleanuri.link
  };
};

export default connect(mapStateToProps)(Button);
