import {
  CREATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
  UPDATE_EVENT,
} from "../actions/actionTypes";

const initialState = { events: [] };

export function eventReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, action.event],
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((evt) => evt.id !== action.eventId),
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map((evt) =>
          evt.id === action.event.id ? action.event : evt
        ),
      };
    case FETCH_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
}
