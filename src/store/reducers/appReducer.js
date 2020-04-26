import { HIDE_LOADER, HIDE_SHORT_LINK, SHOW_LOADER, SHOW_SHORT_LINK } from "../types";

const initialState = {
  loading: false,
  linkShortened: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_SHORT_LINK:
      return { ...state, linkShortened: true };
    case HIDE_SHORT_LINK:
      return { ...state, linkShortened: false };
    default:
      return state;
  }
};
