import { FETCH_CLEANURI } from "../types";

export default function fetchCleanuri(url) {
  return async dispatch => {
    const formData = new FormData();

    formData.append("url", url);

    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      body: formData
    });
    const json = await response.json();
    dispatch({ type: FETCH_CLEANURI, payload: json });
  };
}
