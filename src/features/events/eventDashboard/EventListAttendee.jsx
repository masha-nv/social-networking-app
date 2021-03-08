import React from "react";
import { ListItem, Image } from "semantic-ui-react";

const EventListAttendee = ({ name, photoURL }) => {
  return (
    <ListItem>
      <Image size='mini' circular src={photoURL} />
    </ListItem>
  );
};

export default EventListAttendee;
