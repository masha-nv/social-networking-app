import React from "react";
import EventListItem from "./EventListItem";

const EventList = ({ setOpenEditEvent, events, onDeleteEvent }) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          onDeleteEvent={onDeleteEvent}
          event={event}
          key={event.id}
          setOpenEditEvent={setOpenEditEvent}
        />
      ))}
    </>
  );
};

export default EventList;
