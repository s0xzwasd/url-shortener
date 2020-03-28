import { FETCH_LINK } from "../types";
import { showLoader, hideLoader, showShortLink } from "./app";
import fetchInput from "./fetchInput";

const apiUrl = "https://rel.ink/api/links/";

export default function fetchLink(url) {
  return async dispatch => {
    dispatch(showLoader());
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        url
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const json = await response.json();
    dispatch({ type: FETCH_LINK, payload: json });
    dispatch(hideLoader());
    dispatch(showShortLink());
    dispatch(fetchInput(""));
  };
}
