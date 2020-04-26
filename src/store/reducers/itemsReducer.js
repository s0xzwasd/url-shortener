import { COLLECT_LINK } from "../types";

const initialState = {
  links: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COLLECT_LINK:
      return {
        ...state,
        links:
          state.links.length < 5 ? state.links.concat(action.payload) : state.links.slice(1, 5).concat(action.payload),
      };
    default:
      return state;
  }
};
