import { FETCH_LINK } from "../types";

const initialState = {
  link: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LINK:
      return {
        ...state,
        link: action.payload
      };
    default:
      return state;
  }
};
