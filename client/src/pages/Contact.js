import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../App.css";
import { Container } from "react-bootstrap";

const Contact = () => {
 const handleContact = (values, { setSubmitting, resetForm }) => {
  axios.post("/api/contacts", values).then((response) => {
   console.log("response", response.data);
   setSubmitting(false);
   resetForm();
  });
  window.location = "/submittedform";
 };

 return (
  <Formik
   initialValues={{
    name: "",
    email: "",
    message: "",
   }}
   onSubmit={handleContact}
   validationSchema={Yup.object().shape({
    name: Yup.string()
     .min(2, "must be two charaters or more")
     .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    message: Yup.string()
     .min(6, "Please submit the message")
     .required("Message is required"),
   })}
  >
   {(props) => {
    const {
     values,
     touched,
     errors,
     isSubmitting,
     // handleChange,
     // handleSubmit,
     handleBlur,
     // onSubmit
    } = props;

    return (
     <Container>
      <h1 className='contactTitle'>Contact</h1>
      <Form className='contactForm' autoComplete='off'>
       <div className='fields'>
        <label className='contactInfo' htmlFor='Contactname'>
         Name:*
        </label>
        <Field
         className='contactInput'
         style={{ width: "50%" }}
         placeholder='Name'
         type='text'
         name='name'
         onBlur={handleBlur}
         className={errors.name && touched.name && "error"}
        />
        {errors.name && touched.name && (
         <div className='input-feedback'>{errors.name}</div>
        )}
        <label className='contactInfo' htmlFor='email'>
         Email:*
        </label>
        <Field
         className='contactInput'
         style={{ width: "50%" }}
         placeholder='Email'
         type='text'
         name='email'
         onBlur={handleBlur}
         className={errors.email && touched.email && "error"}
        />
        {errors.email && touched.email && (
         <div className='input-feedback'>{errors.email}</div>
        )}
        <label className='contactInfo' htmlFor='message'>
         Message:*
        </label>
        <Field
         className='contactField'
         style={{ width: "50%" }}
         type='message'
         placeholder='Message'
         name='message'
         onBlur={handleBlur}
         className={errors.message && touched.message && "error"}
        />
        {errors.message && touched.message && (
         <div className='input-feedback'>{errors.message}</div>
        )}
       </div>
       <div className='mainButtonContact'>
        <button
         className='signSubmitContact'
         type='submit'
         disabled={isSubmitting}
         value='submit'
        >
         Contact
        </button>
        <button className='resetSubmitContact' type='reset'>
         Reset
        </button>
       </div>
      </Form>
     </Container>
    );
   }}
  </Formik>
 );
};

export default Contact;
