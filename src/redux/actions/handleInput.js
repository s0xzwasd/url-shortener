import { HANDLE_INPUT } from "../types";

export default function handleInput(value) {
  return { type: HANDLE_INPUT, payload: value };
}
