import cuid from "cuid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormField, Segment, Header } from "semantic-ui-react";

const EventForm = ({
  setFormOpen,
  onEditEvent,
  onCreateEvent,
  selectedEvent,
  history,
}) => {
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };
  const [values, setValues] = useState(initialValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    selectedEvent
      ? onEditEvent({ ...selectedEvent, ...values })
      : onCreateEvent({
          ...values,
          id: cuid(),
          attendees: [],
          hostPhotoURL: "./assets/user.png",
        });
    setFormOpen(false);
  };
  const handleChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };
  const { title, category, description, city, venue, date } = values;
  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit Event" : "Create new Event"} />
      <Form onSubmit={handleSubmit}>
        <FormField>
          <input
            type='text'
            placeholder='Title'
            value={title}
            name='title'
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <input
            type='text'
            placeholder='Category'
            value={category}
            name='category'
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <input
            type='text'
            placeholder='Description'
            value={description}
            name='description'
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={city}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            value={venue}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <input
            type='date'
            placeholder='Date'
            name='date'
            value={date}
            onChange={handleChange}
          />
        </FormField>
        <Button content='Submit' type='submit' floated='right' positive />
        <Button
          as={Link}
          to='/events'
          content='Cancel'
          type='submit'
          floated='right'
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
