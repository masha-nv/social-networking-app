import React, { useState } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import EventForm from "../../../EventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../api/sampleData";

function EventDashboard({
  formOpen,
  setFormOpen,
  setOpenEditEvent,
  selectedEvent,
}) {
  const [events, setEvents] = useState(sampleData);
  function handleCreateEvent(event) {
    setEvents([...events, event]);
  }
  function handleEditEvent(updatedEvent) {
    setEvents([
      ...events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt)),
    ]);
  }
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
        {formOpen && (
          <EventForm
            onEditEvent={handleEditEvent}
            selectedEvent={selectedEvent}
            onCreateEvent={handleCreateEvent}
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            key={selectedEvent ? selectedEvent.id : null}
          />
        )}
      </GridColumn>
    </Grid>
  );
}

export default EventDashboard;
