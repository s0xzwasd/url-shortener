import { FETCH_RELINK } from "../types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RELINK:
      return {
        ...state,
        link: action.payload
      };
    default:
      return state;
  }
};
