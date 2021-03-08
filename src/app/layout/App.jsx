import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setOpenEditEvent] = useState(null);

  function handleOpenEditEvent(event) {
    setOpenEditEvent(event);
    setFormOpen(true);
  }
  return (
    <>
      <NavBar setFormOpen={setFormOpen} setOpenEditEvent={setOpenEditEvent} />
      <Container className='main'>
        <EventDashboard
          selectedEvent={selectedEvent}
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          setOpenEditEvent={handleOpenEditEvent}
        />
      </Container>
    </>
  );
}

export default App;
