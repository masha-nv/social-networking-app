import React from "react";
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

const EventListItem = ({
  hostPhotoURL,
  attendees,
  title,
  date,
  venue,
  description,
  hostedBy,
}) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <ItemImage size='tiny' circular src={hostPhotoURL} />
            <ItemContent>
              <ItemHeader content={title} />
              <ItemDescription>Hosted by {hostedBy}</ItemDescription>
            </ItemContent>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {date}
          <Icon name='marker' /> {venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {attendees.map((attendee) => (
            <EventListAttendee {...attendee} key={attendee.id} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{description}</div>
        <Button color='teal' floated='right' content='View' />
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
