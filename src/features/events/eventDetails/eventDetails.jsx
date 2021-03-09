import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetailsSideBar from "./EventDetailsSideBar";
import EventDetailsHeader from "./EventDetailsHeader";
import EventDetailsChat from "./EventDetailsChat";
import EventDetailsInfo from "./EventDetailsInfo";
import { useSelector } from "react-redux";

const EventDetails = (props) => {
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === props.match.params.id)
  );
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailsHeader selectedEvent={selectedEvent} />
        <EventDetailsInfo selectedEvent={selectedEvent} />
        <EventDetailsChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailsSideBar attendees={selectedEvent.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetails;
