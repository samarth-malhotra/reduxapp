import changeTheNumber from "./upDown";
import { combineReducers } from "redux";

/* we can add multiple reducers here */
const rootReducer = combineReducers({
  changeTheNumber,
});

export default rootReducer;
