import { combineReducers } from "redux";
import { authReducer } from "../../features/auth/authReducer";
import { testReducer } from "../../features/Sandbox/testReducer";
import { modalReducer } from "../common/modal/modalReducer";
import { eventReducer } from "../reducers/eventReducer";

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
  modal: modalReducer,
  auth: authReducer,
});

export default rootReducer;
