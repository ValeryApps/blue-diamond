import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";
import { Button } from "semantic-ui-react";
import * as Yup from "yup"
import { ModalWrapper } from "../../common/modals/modalWrapper";
import { useDispatch, useSelector } from "react-redux";
import { addMember } from "../../api/member";
import CustomeTextInput from "../../common/form/CustomeTextInput";
import { closeModal } from "../../common/modals/modalReducer";
import CustomSelect from "../../common/form/CustomSelect";
 
const MemberForm = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state=>state.async)
  const member = {
    name: "",
    gender: "",
    position:""
  };
  const validationSchema = Yup.object({
    name:Yup.string().required(),
    gender:Yup.string().required(),
    position:Yup.string().required()
  })

  return (
    <ModalWrapper size="mini" header="Add Member">
            <Formik
              initialValues={member}
              onSubmit={ async (values) => {
                 // setLoading(true)
                try {
                  await addMember(values);
                  toast.success("Member added successful");
                 //setLoading(false)
                  dispatch(closeModal())
                } catch (error) {
                  //  setLoading(false)
                  // if(error.response.status===400);
                  toast.error(error.response.data);
                  dispatch(closeModal())
                }
              }}
              validationSchema = {validationSchema}
              >
                <Form className="ui form" >
                 <CustomeTextInput name="name" placeholder="name"/>
                 <CustomSelect name ="gender"/>
                 <CustomeTextInput name="position" placeholder="position"/>
                
                  <Button
                  loading={loading}
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

export default MemberForm;
