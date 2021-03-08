import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import HomePage from "../../features/home/HomePage";
import EventDetails from "../../features/events/eventDetails/eventDetails";
import EventForm from "../../EventForm/EventForm";

function App() {
  // const [formOpen, setFormOpen] = useState(false);
  // const [selectedEvent, setOpenEditEvent] = useState(null);

  // function handleOpenEditEvent(event) {
  //   setOpenEditEvent(event)
  //   setFormOpen(true);
  // }
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar
            // setFormOpen={setFormOpen}
            // setOpenEditEvent={setOpenEditEvent}
            />
            <Container className='main'>
              <Switch>
                <Route
                  path={["/create", "/manage/:id"]}
                  component={EventForm}
                />
                <Route path='/events/:id' component={EventDetails} />
                <Route
                  path='/events'
                  render={(routeProps) => (
                    <EventDashboard
                      // selectedEvent={selectedEvent}
                      // formOpen={formOpen}
                      // setFormOpen={setFormOpen}
                      // setOpenEditEvent={handleOpenEditEvent}
                      {...routeProps}
                    />
                  )}
                />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
