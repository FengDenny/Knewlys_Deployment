import { combineReducers } from "redux";
import authReducer from "./authReducer";
import resetReducer from "./resetReducer";

export default combineReducers({
  auth: authReducer,
  reset: resetReducer,
});
