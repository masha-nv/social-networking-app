import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetailsSideBar from "./EventDetailsSideBar";
import EventDetailsHeader from "./EventDetailsHeader";
import EventDetailsChat from "./EventDetailsChat";
import EventDetailsInfo from "./EventDetailsInfo";

const EventDetails = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailsHeader />
        <EventDetailsInfo />
        <EventDetailsChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailsSideBar />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetails;
