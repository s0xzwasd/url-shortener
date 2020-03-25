import { FETCH_INPUT } from "../types";

const initialState = {
  value: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INPUT:
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
};
