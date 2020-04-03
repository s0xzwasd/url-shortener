import { COLLECT_LINK } from "../types";

const collectLink = link => ({ type: COLLECT_LINK, payload: link });

export default collectLink;
