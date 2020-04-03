import { COLLECT_LINK } from "../types";

const initialState = {
  links: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COLLECT_LINK:
      return {
        ...state,
        links: state.links.concat(action.payload)
      };
    default:
      return state;
  }
};
