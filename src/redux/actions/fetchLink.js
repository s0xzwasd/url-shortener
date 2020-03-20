import { FETCH_LINK } from "../types";

export default function fetchLink(url) {
  return async dispatch => {
    const response = await fetch("https://rel.ink/api/links/", {
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
  };
}
