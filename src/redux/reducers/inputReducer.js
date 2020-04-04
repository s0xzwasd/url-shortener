import { HANDLE_INPUT } from "../types";

const initialState = {
  input: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_INPUT:
      return {
        ...state,
        input: action.payload
      };
    default:
      return state;
  }
};
