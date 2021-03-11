import {
  UPDATE_EVENT,
  CREATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
} from "./actionTypes";
import cuid from "cuid";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../async/asyncReducer";
import { fetchSampleData } from "../../api/mockApi";

export function addEvent(event) {
  return {
    type: CREATE_EVENT,
    event: {
      ...event,
      id: cuid(),
      attendees: [],
      hostPhotoURL: "https://semantic-ui.com/images/avatar2/small/patrick.png",
    },
  };
}

export function deleteEvent(eventId) {
  return {
    type: DELETE_EVENT,
    eventId,
  };
}

export function updateEvent(event) {
  return {
    type: UPDATE_EVENT,
    event,
  };
}

function fetchEvents(payload) {
  return {
    type: FETCH_EVENTS,
    payload,
  };
}

export function asyncFetchEvents() {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const events = await fetchSampleData();
      dispatch(fetchEvents(events));
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
}
