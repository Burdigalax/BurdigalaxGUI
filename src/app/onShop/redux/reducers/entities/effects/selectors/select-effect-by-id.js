import { path } from "ramda";

export default (state, id) => path(["entities", "effects", "byId", id], state);
