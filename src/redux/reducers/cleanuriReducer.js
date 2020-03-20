import { FETCH_CLEANURI } from "../types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLEANURI:
      return {
        ...state,
        link: action.payload
      };
    default:
      return state;
  }
};
