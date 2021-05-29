import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";
import { Button } from "semantic-ui-react";
import * as Yup from "yup"
import CustomeTextInput from "../common/form/CustomeTextInput";
import { register } from "../api/auth";
import { ModalWrapper } from "../common/modals/modalWrapper";
import { useDispatch } from "react-redux";
import { closeModal } from "../common/modals/modalReducer";
 
const Register = ({ history }) => {
  const dispatch = useDispatch();
  const user = {
    userName: "",
    email: "",
    password: "",
    confirmPassowrd:""
  };
  const validationSchema = Yup.object({
    userName:Yup.string().required(),
    email:Yup.string().required(),
    password:Yup.string().required(),
    confirmPassword:Yup.string().required()
  })

  return (
    <ModalWrapper size="mini" header="Register">
            <Formik
              initialValues={user}
              onSubmit={ async (values) => {
                console.log(values);
                try {
               await register(values);
                  toast.success("Registration successful");
                  dispatch(closeModal());
                  history.push("/login");
                } catch (error) {
                  if(error.response.status===400)
                  toast.error(error.response.data);
                }
              }}
              validationSchema = {validationSchema}
              >
                <Form className="ui form" >
                 <CustomeTextInput name="userName" placeholder="username"/>
                 <CustomeTextInput name="email" placeholder="email"/>
                 <CustomeTextInput name="password" placeholder="Password" type="password"/>
                 <CustomeTextInput name="confirmPassword" placeholder="Confirm Password" type="password"/>
                  <Button
                    type="submit"
                    floated="right"
                    content="Submit"
                    style={{background:"#C21725", color:"#fff"}}
                    />
                  <Button
                  onClick={()=>dispatch(closeModal())}
                    floated="right"
                    basic
                    content="Cancel"
                    />
                </Form>
            </Formik>
</ModalWrapper>
      
  );
};

export default Register;
