import { FETCH_CLEANURI } from "../types";

export default function fetchCleanuri(url) {
  return async dispatch => {
    const formData = new FormData();

    formData.append("url", url);

    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Origin": "*"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: formData
    }).then(res => res.json());

    dispatch({ type: FETCH_CLEANURI, payload: response });
  };
}
