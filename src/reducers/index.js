import changeTheNumber from "./upDown";
import { combineReducers } from "redux";

/* we can add multiple reducers here */
const reducers = combineReducers({
  changeTheNumber,
});

export default reducers;
