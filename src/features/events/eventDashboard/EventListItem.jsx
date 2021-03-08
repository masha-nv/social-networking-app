import React from "react";
import { Link } from "react-router-dom";
import {
  Item,
  Segment,
  ItemImage,
  ItemContent,
  ItemHeader,
  ItemDescription,
  Icon,
  List,
  Button,
} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

const EventListItem = ({ event, setOpenEditEvent, onDeleteEvent }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <ItemImage size='tiny' circular src={event.hostPhotoURL} />
            <ItemContent>
              <ItemHeader content={event.title} />
              <ItemDescription>Hosted by {event.hostedBy}</ItemDescription>
            </ItemContent>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {event.date}
          <Icon name='marker' /> {event.venue} {event.city}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee {...attendee} key={attendee.id} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
          color='teal'
          floated='right'
          content='View'
          as={Link}
          to={`/events/${event.id}`}
          // onClick={() => setOpenEditEvent(event)}
        />
        <Button
          color='red'
          floated='right'
          content='Delete'
          onClick={() => onDeleteEvent(event.id)}
        />
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
