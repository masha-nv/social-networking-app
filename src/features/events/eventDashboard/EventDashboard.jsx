import React, { useState } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import { sampleData } from "../../../api/sampleData";

function EventDashboard({ setOpenEditEvent }) {
  const [events, setEvents] = useState(sampleData);
  // function handleCreateEvent(event) {
  //   setEvents([...events, event]);
  // }
  // function handleEditEvent(updatedEvent) {
  //   setEvents([
  //     ...events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt)),
  //   ]);
  // }
  function handleDeleteEvent(eventId) {
    setEvents(events.filter((evt) => evt.id !== eventId));
  }
  return (
    <Grid>
      <GridColumn width={10}>
        <EventList
          events={events}
          setOpenEditEvent={setOpenEditEvent}
          onDeleteEvent={handleDeleteEvent}
        />
      </GridColumn>
      <GridColumn width={6}>
        <h2>Event Filters</h2>
      </GridColumn>
    </Grid>
  );
}

export default EventDashboard;
