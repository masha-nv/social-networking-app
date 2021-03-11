const ASYNC_ACTION_START = "ASYNC_ACTION_START";
const ASYNC_ACTION_FINISH = "ASYNC_ACTION_FINISH";
const ASYNC_ACTION_ERROR = "ASYNC_ACTION_ERROR";

export function asyncActionStart() {
  return {
    type: ASYNC_ACTION_START,
  };
}
export function asyncActionFinish() {
  return {
    type: ASYNC_ACTION_FINISH,
  };
}
export function asyncActionError(payload) {
  return {
    type: ASYNC_ACTION_ERROR,
    payload,
  };
}

const initialState = {
  isLoading: false,
  error: null,
};

export function ayncReducer(state = initialState, action) {
  switch (action.type) {
    case ASYNC_ACTION_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ASYNC_ACTION_FINISH:
      return {
        ...state,
        isLoading: false,
      };
    case ASYNC_ACTION_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
