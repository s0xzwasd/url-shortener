import { FETCH_LINK } from "../types";
import { showLoader, hideLoader, showShortLink } from "./app";
import fetchInput from "./fetchInput";

const apiUrl = "https://rel.ink/api/links/";

export default function fetchLink(url) {
  return async dispatch => {
    dispatch(showLoader());

    let currentUrl = url;

    const matchUrlRegExp = /^(http[s]:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    if (!currentUrl.match(matchUrlRegExp)) {
      currentUrl =  `https://${currentUrl}`;
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        url: currentUrl
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
