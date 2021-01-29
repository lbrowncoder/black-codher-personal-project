import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../App.css";
import { Checkbox, FormControlLabel, TextField, Switch } from "@material-ui/core";
import * as GrIcons from "react-icons/gr";
import * as IoIcons from "react-icons/io";

const SignUpForm = () => {
 const [ofsted, setOfsted] = useState("");
 const [fees, setFees] = useState([{ fullDay: "", halfDay: "", fullWeek: "" }]);

 const handleSubmit = (values, { setSubmitting, resetForm }) => {
  axios.post("/api/info", values).then(response => {
   console.log(values);
   setSubmitting(false);
   resetForm();
  });
  window.location = "/submittedform";
 };

 const handleChangeInput = (index, event) => {
  const values = [...fees];
  values[index][event.target.fullDay] = event.target.value;
  setFees(values);
 };

 const handleAddFees = () => {
  setFees([...fees, { fullDay: "", halfDay: "", fullWeek: "" }]);
 };

 const handleRemoveFees = index => {
  const values = [...fees];
  values.splice(index, 1);
  setFees(values);
 };

 const MyCheckbox = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Checkbox />} label={label} />;
 };

 const MyTextField = ({ placeholder, ...props }) => {
  const [field] = useField(props);
  return (
   <TextField
    placeholder={placeholder}
    {...field}
    id="filled-basic"
    variant="filled"
   />
  );
 };

 const MyLargeTextField = ({ placeholder, ...props }) => {
  const [field] = useField(props);
  return <TextField placeholder={placeholder} {...field} fullWidth />;
 };

 return (
  <Formik
   initialValues={{
    name: "",
    email: "",
    contact: "",
    writeup: "",
    continue: "",
    password: "",
    address: "",
    postcode: "",
    website: "",
    firstAid: "",
    CCTV: false,
    bankHoliday: false,
    fifteenHours: false,
    thirtyHours: false,
    terms: false,
   }}
   onSubmit={handleSubmit}
   validationSchema={Yup.object().shape({
    name: Yup.string()
     .min(2, "must be two characters or more")
     .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    contact: Yup.number()
     .min(11, "Must be 11 digits long")
     .required("Required"),
    writeup: Yup.string()
     .min(10, "Description can not be empty")
     .required("Required"),
   })}
  >
   {props => {
    const { touched, errors } = props;

    return (
     <div>
      <h1 className="signUp">Sign Up</h1>
      <Form autoComplete="off" className="registerForm">
       <MyTextField placeholder="Full Name*" name="name" type="input" />
       {errors.name && touched.name && (
        <div className="input-feedback">{errors.name}</div>
       )}
       <MyTextField placeholder="Email*" name="email" type="input" />
       {errors.email && touched.email && (
        <div className="input-feedback">{errors.email}</div>
       )}
       <MyTextField placeholder="Contact*" name="contact" type="input" />
       {errors.contact && touched.contact && (
        <div className="input-feedback">{errors.contact}</div>
       )}
       <MyTextField placeholder="Website*" name="website" type="input" />
       {errors.website && touched.website && (
        <div className="input-feedback">{errors.website}</div>
       )}
       <MyLargeTextField
        placeholder="Tell us about your Nursery*"
        name="writeup"
        type="input"
       />
       {errors.writeup && touched.writeup && (
        <div className="input-feedback">{errors.writeup}</div>
       )}
       <MyLargeTextField
        placeholder="Continued*"
        name="continue"
        type="input"
       />
       <MyLargeTextField placeholder="Address*" name="address" type="input" />
       <MyTextField placeholder="Postcode*" name="postcode" type="input" />
       <label className="provide" htmlFor="ofsted">
        Please provide your Ofstead rating and date of the report
       </label>
       <div className="container p-5">
        <select
         className="custom-select"
         onChange={e => {
          const selectedRating = e.target.value;
          setOfsted(selectedRating);
         }}
        >
         <option value="Excellent">Excellent</option>
         <option value="Good">Good</option>
         <option value="Requires Improvement">Requires Improvement</option>
         <option value="Inadequate">Inadequate</option>
        </select>
       </div>
       <p className="yourRating">Your ofsted rating: {ofsted}</p>
       <label>Fees</label>
       <p className='tellUs'>Please tell us how much you charge for a full day, half day and a full week</p>
       {fees.map((fee, index) => (
        <div key={index} className="feesInput">
           <TextField id="standard-size-small" label="Full/Half Day etc" size="small" />
         <TextField
          name="fullDay"
          variant="outlined"
          label="Amount"
          onChange={event => handleChangeInput(index, event)}
         />
         <div className='plus'>
         <GrIcons.GrFormAdd size="40px" onClick={() => handleAddFees()} />
         <IoIcons.IoMdRemove
          size="40px"
          onClick={() => handleRemoveFees(index)}
         />
         </div>
        </div>
       ))}
       <label htmlFor="firstAid">Are all staff first aid trained?</label>
       <MyCheckbox
        placeholder="yes"
        label="Yes"
        name="firstaid"
        type="firstaid"
        values="yes"
       />
       <MyCheckbox
        placeholder="no"
        label="No"
        name="firstaid"
        type="firstaid"
        values="no"
       />
       <label htmlFor="CCTV">Does your establishment have CCTV</label>
       <MyCheckbox
        placeholder="yes"
        label="Yes"
        name="CCTV"
        type="CCTV"
        values="yes"
       />
       <MyCheckbox
        placeholder="no"
        label="No"
        name="CCTV"
        type="CCTV"
        values="no"
       />
       <label htmlFor="bankHoliday">Are you open on Bank holidays?</label>
       <MyCheckbox
        placeholder="yes"
        label="Yes"
        name="bankHoliday"
        type="bankHoliday"
        values="yes"
       />
       <MyCheckbox
        placeholder="no"
        label="No"
        name="bankHoliday"
        type="bankHoliday"
        values="no"
       />
       <label htmlFor="fifthteenhours">
        Do you offer 15 Hours free for two year olds?
       </label>
       <MyCheckbox
        placeholder="yes"
        label="Yes"
        name="fifthteenhours"
        type="fifthteenhours"
        values="yes"
       />
       <MyCheckbox
        placeholder="no"
        label="No"
        name="fifthteenhours"
        type="fifthteenhours"
        values="no"
       />
       <label htmlFor="thirtyHours">
        Do you offer 30 Hours free for two year olds?
       </label>
       <MyCheckbox
        placeholder="yes"
        label="Yes"
        name="thirtyHours"
        type="thirtyHours"
        values="yes"
       />
       <MyCheckbox
        placeholder="no"
        label="No"
        name="thirtyHours"
        type="thirtyHours"
        values="no"
       />
       <label htmlFor="terms">Do you agree to our terms and conditions?</label>
       <FormControlLabel
        control={<Switch name="checkedB" color="primary" />}
        label="Yes"
       />
       <label className="uploadText">
        Upload images
        <input className="upload" type="file" name="picture" />
       </label>
       <button className="signSubmit" type="submit">
        Submit
       </button>
      </Form>
     </div>
    );
   }}
  </Formik>
 );
};

export default SignUpForm;
