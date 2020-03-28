import { SHOW_LOADER, HIDE_LOADER, SHOW_SHORT_LINK, HIDE_SHORT_LINK } from "../types";

export const showLoader = () => {
  return {
    type: SHOW_LOADER
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER
  };
};

export const showShortLink = () => {
  return {
    type: SHOW_SHORT_LINK
  };
};

export const hideShortLink = () => {
  return {
    type: HIDE_SHORT_LINK
  };
};
