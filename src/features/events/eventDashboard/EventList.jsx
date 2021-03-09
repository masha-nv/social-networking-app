import React from "react";
import { useSelector } from "react-redux";
import EventListItem from "./EventListItem";

const EventList = () => {
  const { events } = useSelector((state) => state.event);
  return (
    <>
      {events.map((event) => (
        <EventListItem event={event} key={event.id} />
      ))}
    </>
  );
};

export default EventList;
