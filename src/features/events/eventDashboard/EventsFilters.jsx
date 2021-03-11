import React from "react";
import { Header, Menu, MenuItem, Segment } from "semantic-ui-react";
import Calendar from "react-calendar";

const EventsFilters = () => {
  return (
    <>
      <Menu vertical>
        <Header content='Filters' icon='filter' color='teal' attached />
        <MenuItem content='All Events' />
        <MenuItem content="I'm going" />
        <MenuItem content="I'm hosting" />
      </Menu>
      <Menu vertical>
        <Header attached content='Select date' icon='calendar' color='teal' />
        <Calendar />
      </Menu>
    </>
  );
};

export default EventsFilters;
