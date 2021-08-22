import { Form, Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import { Button } from "semantic-ui-react";
import { login } from "../api/auth";
import CustomeTextInput from "../common/form/CustomeTextInput";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/auth/authAction";
import { ModalWrapper } from "../common/modals/modalWrapper";
import { closeModal } from "../common/modals/modalReducer";

const Login = () => {
  const dispatch = useDispatch();
  const user = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required(),
  });
  return (
    <ModalWrapper size="mini" header="Login">
      <Formik
        initialValues={user}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await login(values);
            localStorage.setItem("user", JSON.stringify(response.data));
            dispatch(loginAction(response.data));
            setSubmitting(false);
            dispatch(closeModal());
          } catch (error) {
            setSubmitting(false);
            toast.error("Invalid email or password");
          }
        }}
        validationSchema={validationSchema}
      >
        {({ isValid, dirty, isSubmitting }) => (
          <Form className="ui form">
            <CustomeTextInput name="email" placeholder="email" />
            <CustomeTextInput
              name="password"
              placeholder="Password"
              type="password"
            />
            <Button
              type="submit"
              floated="right"
              style={{ background: "#C21725", color: "#fff" }}
              content="Submit"
              loading={isSubmitting}
              disabled={isSubmitting || !isValid || !dirty}
            />
            <Button
              onClick={() => {
                dispatch(closeModal());
              }}
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

export default Login;
