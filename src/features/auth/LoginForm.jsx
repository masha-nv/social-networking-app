import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";
import MyTextField from "../../app/common/form/myTextField";
import { closeModal } from "../../app/common/modal/modalReducer";
import ModalWrapper from "../../app/common/modal/ModalWrapper";
import { signInUser } from "./authActions";

const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <ModalWrapper size='mini' header='Sign in'>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email().required(),
          password: Yup.string()
            .min(3, "Password should be at least 3 characters long")
            .max(
              12,
              "Password should be equal to or less than 12 characters long"
            )
            .required(),
        })}
        onSubmit={(values) => {
          dispatch(signInUser(values));
          dispatch(closeModal());
        }}
      >
        {({ dirty, isSubmitting, isValid }) => (
          <Form className='ui form'>
            <MyTextField placeholder='email' name='email' />
            <MyTextField placeholder='password' name='password' />
            <Button
              fluid
              loading={isSubmitting}
              content='Login'
              color='teal'
              disabled={isSubmitting || !dirty || !isValid}
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
};

export default LoginForm;
