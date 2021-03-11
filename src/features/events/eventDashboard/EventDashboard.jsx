import React from "react";
import { useSelector } from "react-redux";
import { Grid, GridColumn } from "semantic-ui-react";
import Loading from "../../../app/layout/Loading";
import EventList from "./EventList";
import EventsFilters from "./EventsFilters";
import EventListItemPlaceholder from "./EventsListItemPlaceholder";

function EventDashboard() {
  const { events } = useSelector((state) => state.event);
  return events.length ? (
    <Grid>
      <GridColumn width={10}>
        <EventList />
      </GridColumn>
      <GridColumn width={6}>
        <EventsFilters />
      </GridColumn>
    </Grid>
  ) : (
    <>
      <EventListItemPlaceholder />
      <EventListItemPlaceholder />
    </>
  );
}

export default EventDashboard;
