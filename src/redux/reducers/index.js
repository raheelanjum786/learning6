import { combineReducers } from "redux";
import blogReducer from "./blogReducers";

const rootReducers = combineReducers({
  blogs: blogReducer,
});
export default rootReducers;
