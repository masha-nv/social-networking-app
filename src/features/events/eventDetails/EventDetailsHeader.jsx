import React from "react";
import { Link } from "react-router-dom";
import { Segment, Image, Item, Button, Header } from "semantic-ui-react";
import { images } from "../../../api/categoryImages.js";
import { format } from "date-fns";
const EventDetailsHeader = ({ selectedEvent }) => {
  const eventImageStyle = {
    filter: "brightness(60%)",
  };

  const eventImageTextStyle = {
    position: "absolute",
    bottom: "5%",
    left: "5%",
    width: "100%",
    height: "auto",
    color: "white",
  };
  return (
    <Segment.Group>
      <Segment basic style={{ padding: "0" }}>
        <Image
          style={eventImageStyle}
          src={images[selectedEvent.category]}
          fluid
        />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size='huge'
                  content={selectedEvent.title}
                  style={{ color: "white" }}
                />
                <p>{format(selectedEvent.date, "MMMM, d yyyy h:mm a")}</p>
                <p>
                  Hosted by <strong>{selectedEvent.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached='bottom' clearing>
        <Button content='Cancel My Place' />
        <Button color='teal' content='JOIN THIS EVENT' />
        <Button
          as={Link}
          to={{ pathname: `/manage/${selectedEvent.id}`, state: selectedEvent }}
          color='orange'
          floated='right'
          content='Manage Event'
        />
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailsHeader;
