import { SIGN_IN_USER, SIGN_OUT_USER } from "./authConstants";
const initialState = {
  isAuthenticated: false,
  currentUser: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: {
          email: action.payload.email,
          photoURL: action.payload.photoURL,
        },
      };

    case SIGN_OUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null,
      };
    default:
      return state;
  }
}
