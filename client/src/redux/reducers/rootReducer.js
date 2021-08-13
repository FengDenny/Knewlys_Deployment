import { combineReducers } from "redux";
import authReducer from "./authReducer";
import resetReducer from "./resetReducer";
import footerReducer from "./footerReducer";
import postReducer from "./postReducer";

export default combineReducers({
  auth: authReducer,
  reset: resetReducer,
  footer: footerReducer,
  post: postReducer,
});
