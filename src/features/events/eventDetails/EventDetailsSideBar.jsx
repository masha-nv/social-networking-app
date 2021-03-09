import React from "react";
import { Segment, Item } from "semantic-ui-react";

const EventDetailsSideBar = ({ attendees }) => {
  return (
    <>
      <Segment
        textAlign='center'
        style={{ border: "none" }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        {`${attendees.length} ${
          attendees.length > 1 ? "People" : "Person"
        } going`}
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          {attendees.map((attendee) => (
            <Item key={attendee.id} style={{ position: "relative" }}>
              <Item.Image
                size='tiny'
                src='https://semantic-ui.com/images/avatar/small/chris.jpg'
              />
              <Item.Content verticalAlign='middle'>
                <Item.Header as='h3'>
                  <span>{attendee.name}</span>
                </Item.Header>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </>
  );
};

export default EventDetailsSideBar;
