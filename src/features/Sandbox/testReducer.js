import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../../app/async/asyncReducer";
import { delay } from "../../utils/delay";
import { toast } from "react-toastify";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export function increment(amount) {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      await delay(1000);
      dispatch({
        type: INCREMENT,
        payload: amount,
      });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
}
export function decrement(amount) {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      await delay(1000);
      dispatch({
        type: DECREMENT,
        payload: amount,
      });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
      toast.dark(error);
    }
  };
}

const initialState = { data: 32 };

export function testReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        data: state.data + action.payload,
      };

    case DECREMENT:
      return {
        ...state,
        data: state.data - action.payload,
      };
    default:
      return state;
  }
}
