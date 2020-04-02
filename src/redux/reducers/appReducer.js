import { ADD_NOTIFICATION, SHOW_LOADER, HIDE_LOADER, SHOW_SHORT_LINK, HIDE_SHORT_LINK } from "../types";

const initialState = {
  loading: false,
  linkVisisble: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return { ...state, message: action.payload };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_SHORT_LINK:
      return { ...state, linkVisisble: true };
    case HIDE_SHORT_LINK:
      return { ...state, linkVisisble: false };
    default:
      return state;
  }
};
