import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";
import CustomeTextInput from "../common/form/CustomeTextInput";
import { register } from "../api/auth";
import { ModalWrapper } from "../common/modals/modalWrapper";
import { useDispatch } from "react-redux";
import { closeModal } from "../common/modals/modalReducer";

const Register = () => {
  const dispatch = useDispatch();
  const user = {
    userName: "",
    email: "",
    password: "",
    confirmPassowrd: "",
  };
  const validationSchema = Yup.object({
    userName: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
  });

  return (
    <ModalWrapper size="mini" header="Register">
      <Formik
        initialValues={user}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await register(values);
            setSubmitting(false);
            toast.success("Registration succesfull");
            dispatch(closeModal());
          } catch (error) {
            toast.error(error.message);
            setSubmitting(false);
          }
        }}
        validationSchema={validationSchema}
      >
        {({ dirty, isSubmitting, isValid }) => (
          <Form className="ui form">
            <CustomeTextInput name="userName" placeholder="username" />
            <CustomeTextInput name="email" placeholder="email" />
            <CustomeTextInput
              name="password"
              placeholder="Password"
              type="password"
            />
            <CustomeTextInput
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
            />
            <Button
              disabled={isSubmitting || !dirty || !isValid}
              loading={isSubmitting}
              type="submit"
              floated="right"
              content="Submit"
              style={{ background: "#C21725", color: "#fff" }}
            />
            <Button
              onClick={() => dispatch(closeModal())}
              floated="right"
              basic
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
};

export default Register;
