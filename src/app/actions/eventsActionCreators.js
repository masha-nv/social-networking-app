import { UPDATE_EVENT, CREATE_EVENT, DELETE_EVENT } from "./actionTypes";
import cuid from "cuid";

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
