import { combineReducers } from "redux";
import { testReducer } from "../../features/Sandbox/testReducer";
import { eventReducer } from "../reducers/eventReducer";

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
});

export default rootReducer;
