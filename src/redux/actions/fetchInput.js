import { FETCH_INPUT } from "../types";

const fetchInput = (value) => ({ type: FETCH_INPUT, payload: value });

export default fetchInput;
