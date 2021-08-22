import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";
import CustomeTextInput from "../../common/form/CustomeTextInput";
import { ModalWrapper } from "../../common/modals/modalWrapper";
import { useDispatch } from "react-redux";
import { closeModal } from "../../common/modals/modalReducer";
import { addStudent } from "../../api/student";
import { addStudentAction } from "../../store/student/studentReducer";

const StudentForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const student = {
    name: "",
    gender: "",
    level: "",
    isMember: false,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    gender: Yup.string().required(),
    level: Yup.string().required(),
  });

  return (
    <ModalWrapper size="mini" header="Add Student">
      <Formik
        initialValues={student}
        onSubmit={async (values) => {
          setLoading(true);
          try {
            const res = await addStudent(values);
            dispatch(addStudentAction(res.data));
            toast.success("Student added successful");
            setLoading(false);
            dispatch(closeModal());
          } catch (error) {
            setLoading(false);
            if (error.response.status === 400);
            toast.error(error.response.data);
            dispatch(closeModal());
          }
        }}
        validationSchema={validationSchema}
      >
        <Form className="ui form">
          <CustomeTextInput name="name" placeholder="name" />
          <CustomeTextInput name="gender" placeholder="gender" />
          <CustomeTextInput name="level" placeholder="position" type="number" />
          <Button
            loading={loading}
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
      </Formik>
    </ModalWrapper>
  );
};

export default StudentForm;
