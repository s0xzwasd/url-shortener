import { toast } from "react-toastify";

import { FETCH_LINK } from "../types";
import { showLoader, hideLoader, showShortLink } from "./app";
import fetchInput from "./fetchInput";

const apiUrl = "https://rel.ink/api/links/";

export default function fetchLink(url) {
  return async dispatch => {
    const currentUrl = url;

    const matchUrlRegExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,})/g;

    if (currentUrl === "") {
      return toast.warn("Enter a value for the job.", { className: "success-toast" });
    }

    if (!currentUrl.match(matchUrlRegExp)) {
      return toast.warn("Please enter a valid link.", { className: "success-toast" });
    }

    dispatch(showLoader());

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        url: currentUrl
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    if (!response.ok) {
      dispatch(hideLoader());
      throw new Error(toast.warn("Something went wrong, try again.", { className: "success-toast" }));
    }

    const json = await response.json();

    dispatch({ type: FETCH_LINK, payload: json });
    dispatch(hideLoader());
    dispatch(showShortLink());
    dispatch(fetchInput(""));

    return toast.success("Link successfully shortened!", { className: "success-toast" });
  };
}
