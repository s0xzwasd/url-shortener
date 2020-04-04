import { HANDLE_INPUT } from "../types";

const fetchInput = (value) => ({ type: HANDLE_INPUT, payload: value });

export default fetchInput;
