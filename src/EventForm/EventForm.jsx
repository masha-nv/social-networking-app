import React from "react";
import { Button, Form, FormField, Segment } from "semantic-ui-react";

const EventForm = ({ setFormOpen }) => {
  return (
    <Segment clearing>
      <h1>Create new Event</h1>
      <Form>
        <FormField>
          <input type='text' placeholder='Name' />
        </FormField>
        <FormField>
          <input type='text' placeholder='Category' />
        </FormField>
        <FormField>
          <input type='text' placeholder='Description' />
        </FormField>
        <FormField>
          <input type='text' placeholder='City' />
        </FormField>
        <FormField>
          <input type='text' placeholder='Venue' />
        </FormField>
        <FormField>
          <input type='date' placeholder='Date' />
        </FormField>
        <Button content='Submit' type='submit' floated='right' positive />
        <Button
          onClick={() => setFormOpen(false)}
          content='Cancel'
          type='submit'
          floated='right'
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
