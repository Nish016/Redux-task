import counterReducer from "./counter";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counternumber: counterReducer,
});

export default allReducer;
