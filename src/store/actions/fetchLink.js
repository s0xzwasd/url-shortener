import { toast } from "react-toastify";

import { FETCH_LINK } from "../types";
import { collectLink, showLoader, hideLoader, showShortLink } from "./app";
import handleInput from "./handleInput";

const apiBase = "https://rel.ink/";
const apiUrl = `${apiBase}api/links/`;

export default function fetchLink(url) {
  return async (dispatch) => {
    let currentUrl = url;
    const protocolPrefix = "https://";
    const matchUrlRegExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,})/g;
    const mathUrlWithoutProtocol = /^[a-zA-Z]+:\/\//;

    if (currentUrl === "") {
      return toast.warn("Enter a value for the job.", { className: "toast-custom" });
    }

    if (!currentUrl.match(mathUrlWithoutProtocol)) {
      currentUrl = `${protocolPrefix}${currentUrl}`;
    }

    if (!currentUrl.match(matchUrlRegExp)) {
      return toast.warn("Please enter a valid link.", { className: "toast-custom" });
    }

    dispatch(showLoader());

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        url: currentUrl,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      dispatch(hideLoader());
      throw new Error(toast.warn("Something went wrong, try again.", { className: "toast-custom" }));
    }

    const json = await response.json();

    dispatch({ type: FETCH_LINK, payload: json });
    dispatch(hideLoader());
    dispatch(showShortLink());
    dispatch(handleInput(""));
    dispatch(collectLink(`${apiBase}${json.hashid}`));

    return toast.success("Link successfully shortened!", { className: "toast-custom" });
  };
}
