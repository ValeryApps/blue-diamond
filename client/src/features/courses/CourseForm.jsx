import { Formik } from 'formik'
import React, { useState } from 'react'
import CustomeTextInput from '../common/form/CustomeTextInput'
import {ModalWrapper} from "../common/modals/modalWrapper"
import * as Yup from "yup";
import { addCourse } from '../api/course';
import { useDispatch } from 'react-redux';
import { addCourseAction } from '../store/course/courseAction';
import { Toast } from 'toastify';
import { Button } from 'semantic-ui-react';


const CourseForm = () => {
    const[loading, setLoading]=useState(false);
    const dispatch = useDispatch()

    const course = {
        title:"",
        category:"",
        intro:"",
        videoUrl:"",
        imageUrl:"",
        author:""
    }
    const validationSchema = Yup.object({
        title:Yup.string().required(),
        intro:Yup.string().required(),
        videoUrl:Yup.string().required(),
        tumbnailUrl:Yup.string().required(),
        author:Yup.string().required(),
    })
    return (
        <ModalWrapper size="mini" header="Add Course">
        <Formik initialValues={course} onSubmit={async(values)=>{
            setLoading(true)
            try {
                const resp = await addCourse(values);
            dispatch(addCourseAction(resp));
            Toast.sucess("Course added successfully")
            setLoading(false)
        } catch (error) {
                setLoading(false);
                Toast.error("There was an error");
            }
           
        }} validationSchema={validationSchema} >
            <Form className="ui form">
            <CustomeTextInput name="title" placeholder="Title"/>
            <Button loading={loading} type="submit" content="submit" primary/>
            </Form>
        </Formik>
        </ModalWrapper>
    )
}

export default CourseForm
