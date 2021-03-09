import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import HomePage from "../../features/home/HomePage";
import EventDetails from "../../features/events/eventDetails/eventDetails";
import EventForm from "../../EventForm/EventForm";
import Sandbox from "../../features/Sandbox/Sandbox";

function App() {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Switch>
                <Route
                  path={["/create", "/manage/:id"]}
                  render={(routeProps) => (
                    <EventForm key={routeProps.location.key} {...routeProps} />
                  )}
                />
                <Route path='/events/:id' component={EventDetails} />
                <Route path='/sandbox' component={Sandbox} />
                <Route
                  path='/events'
                  render={(routeProps) => <EventDashboard {...routeProps} />}
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
