import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../App.css";
import { NavLink } from "react-router-dom";

const Login = () => {
 const handleSignUp = (values, { setSubmitting, resetForm }) => {
  axios.post(`/api/users`, values)
  .then(() => {
    setSubmitting(false);
    resetForm();
  });
  window.location = "/profile";
 };

 return (
  <Formik
   initialValues={{
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
   }}
   onSubmit={handleSignUp}
   validationSchema={Yup.object().shape({
    name: Yup.string()
     .min(2, "must be two characters or more")
     .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string()
     .min(6, "Password must be atleast 6 characters or more")
     .required("Password is Required"),
    confirmPassword: Yup.string()
     .oneOf([Yup.ref("password"), null], "Password Must Match")
     .required("Password is Required"),
   })}
  >
   {props => {
    const {
     touched,
     errors,
     isSubmitting,
     handleBlur,
    } = props;

    return (
     <div>
      <h1 className="signTitle">Sign Up</h1>
      <Form className="customerForm" autoComplete="off">
       <label className="signLabel" htmlFor="name">
        Name*
       </label>
       <Field
        className="fieldInput"
        type="text"
        name="name"
        placeholder="Name"
        onBlur={handleBlur}
        className={errors.name && touched.name && "error"}
       />
       {errors.name && touched.name && (
        <div className="input-feedback">{errors.name}</div>
       )}

       <label className="signLabel" htmlFor="email">
        Email*
       </label>
       <Field
        type="text"
        name="email"
        onBlur={handleBlur}
        placeholder="Email"
        className={errors.email && touched.email && "error"}
       />
       {errors.email && touched.email && (
        <div className="input-feedback">{errors.email}</div>
       )}

       <label className="signLabel" htmlFor="password">
        Password*
       </label>
       <Field
        type="password"
        name="password"
        onBlur={handleBlur}
        placeholder="Password"
        className={errors.password && touched.password && "error"}
       />
       {errors.password && touched.password && (
        <div className="input-feedback">{errors.password}</div>
       )}
       <label className="signLabel" htmlFor="confirmPassword">
        Confirm Password*
       </label>
       <Field
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        onBlur={handleBlur}
        className={errors.confirmPassword && touched.confirmPassword && "error"}
       />
       {errors.confirmPassword && touched.confirmPassword && (
        <div className="input-feedback">{errors.name}</div>
       )}
       <div className="mainButton">
        <button
         className="signSubmit"
         type="submit"
         disabled={isSubmitting}
         value="submit"
        >
         Sign Up
        </button>
        <button className="resetSubmit" type="reset">
         Reset
        </button>
       </div>
       <p className="already">
        Already have an account?<NavLink to="/login"> Login </NavLink> here
       </p>
      </Form>
     </div>
    );
   }}
  </Formik>
 );
};

export default Login;
