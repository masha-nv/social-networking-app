import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Segment, Header } from "semantic-ui-react";
import { updateEvent, addEvent } from "../app/actions/eventsActionCreators";
import { Formik, Form } from "formik";
import * as yup from "yup";
import MyTextField from "../app/common/form/myTextField";
import MyTextArea from "../app/common/form/myTextArea";
import MySelectField from "../app/common/form/mySelectField";
import { categoryData } from "../api/categoryOptions";
import MyDateField from "../app/common/form/myDateField";

const EventForm = ({ location, history }) => {
  const dispatch = useDispatch();
  const selectedEvent = location.state;
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const formSchema = yup.object({
    title: yup.string().required("You must provide a title"),
    category: yup.string().required("Please provide category"),
    description: yup.string().required(),
    city: yup.string().required(),
    venue: yup.string().required(),
    date: yup.date().default(function () {
      return new Date();
    }),
  });

  return (
    <Segment clearing>
      <Formik
        validationSchema={formSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent(values))
            : dispatch(addEvent(values));
          history.push("/events");
        }}
      >
        {(props) => {
          const { dirty, isSubmitting, isValid } = props;
          console.log(props);

          return (
            <Form className='ui form'>
              <Header sub color='teal' content='Event Details' />
              <MyTextField placeholder='Event Title' name='title' />
              <MySelectField
                placeholder='Category'
                name='category'
                options={categoryData}
              />
              <MyTextArea
                placeholder='Description'
                name='description'
                rows='3'
              />
              <Header sub color='teal' content='Event Location Details' />
              <MyTextField placeholder='City' name='city' />
              <MyTextField placeholder='Venue' name='venue' />
              <MyDateField
                timeFormat='HH:mm'
                showTimeSelect
                timeCaption='time'
                dateFormat='MMMM d, yyyy h:mm a'
                placeholderText='Date'
                name='date'
              />
              <Button
                loading={isSubmitting}
                content='Submit'
                type='submit'
                floated='right'
                positive
                disabled={!dirty || !isValid || isSubmitting}
              />
              <Button
                disabled={isSubmitting}
                as={Link}
                to='/events'
                content='Cancel'
                type='submit'
                floated='right'
              />
            </Form>
          );
        }}
      </Formik>
    </Segment>
  );
};

export default EventForm;
