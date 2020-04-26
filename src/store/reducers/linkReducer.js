import { FETCH_LINK } from "../types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LINK:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
