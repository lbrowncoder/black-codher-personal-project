import React, {useState} from 'react';
import {Formik, Form, Field, useField, FieldArray} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './CustomerSignUp.css';
import { Checkbox, FormControlLabel, Radio,Select, TextField, MenuItem, Switch } from '@material-ui/core';


const SignUpForm = () => {

  const [ofsted, setOfsted] = useState ("")
  const [fees, setFees] = useState ("")

    const handleSubmit = (values, {setSubmitting, resetForm}) => {
      axios.post('/api/info', values)
          .then(response => {
            console.log(values);
            setSubmitting(false);
            resetForm()
         })
         window.location = '/submittedform'
        };

        const MyCheckbox = ({label, ...props}) => {
          const [field] = useField(props);
          return <FormControlLabel {...field} control={<Checkbox />} label={label} />
        }

        const MyTextField = ({placeholder,...props}) => {
          const [field, meta] = useField(props);
          const errorText = meta.error && meta.touched ? meta.error : '';
          return (
            <TextField  placeholder={placeholder} {...field} helperText={errorText} id="filled-basic"  variant="filled" />
            // <TextField placeholder={placeholder} {...field} helperText={errorText} />
          )
        }

        const MyLargeTextField = ({placeholder,...props}) => {
          const [field, meta] = useField(props);
          const errorText = meta.error && meta.touched ? meta.error : '';
          return (
            <TextField placeholder={placeholder} {...field} helperText={errorText} fullWidth />
          )
        }        
 
        return (
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    contact: '',
                    writeup: '',
                    password: '',
                    address: '',
                    postcode: '',
                    website: '',
                    firstAid: '',
                    CCTV: false,
                    bankHoilday: false,
                    fifteenHours: false,
                    thirtyHours: false,
                    terms: false,
                }}
                onSubmit = {handleSubmit}
                validationSchema ={Yup.object().shape({
                    name: Yup.string()
                    .min(2, 'must be two charaters or more')
                    .required('Required'),
                    email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is Required'),
                        contact: Yup.number()
                    .min(11, 'Must be 11 digits long')
                    .required('Required'),
                    writeup: Yup.string()
                    .min(10, 'Description can not be empty')
                    .required('Required'),     
                  })}
            >
            {props => {
              const {
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleSubmit,
                  handleBlur,
                  onSubmit
              }  = props;

              return (
                <div>
                    <h1 className='signUp'>Sign Up</h1>
                  <Form autoComplete="off" className='registerForm'>
                    <MyTextField className='fullName' placeholder="Full Name*" name='name' type='input' />                    
                    <MyTextField placeholder='Email*'name='email' type='input' />
                    <TextField placeholder='Password* 'name='password' type='password' id="filled-basic"  variant="filled" />
                    <MyTextField placeholder='Contact*' name='contact' type='input' />
                    <MyTextField placeholder='Website*' name='website' type='input' /> 
                    <MyLargeTextField placeholder='Tell us about your Nursery*' name='writeup' type='input' />
                    <MyLargeTextField placeholder='Continued*' name='writeup' type='input' />
                    <MyLargeTextField placeholder='Address*' name='address' type='input' />
                    <MyTextField placeholder='Postcode*' name='postcode' type='input' />
                    <label className='provide' htmlFor="ofsted">Please provide your Ofstead rating and date of the report</label>
                  <div className='container p-5'>
                      <select className='custom-select'
                        onChange={(e) => {
                        const selectedRating = e.target.value;
                        setOfsted(selectedRating);
                        }}
                        >
                        <option value='Excellent'>Excellent</option>
                        <option value='Good'>Good</option>
                        <option value='Requires Improvement'>Requires Improvement</option>
                        <option value='Inadequate'>Inadequate</option>
                      </select>
                  </div>
                    <p className='yourRating'>Your ofsted rating: {ofsted}</p>
                      <label htmlFor="firstAid">Are all staff first aid trained?</label>
                        <MyCheckbox placeholder="yes" label="Yes" name='firstaid' type='firstaid' values='yes' />
                        <MyCheckbox placeholder="no" label="No" name='firstaid' type='firstaid' values='no' />
                      <label htmlFor="CCTV">Does your establishment have CCTV</label>
                        <MyCheckbox placeholder="yes" label="Yes" name='CCTV' type='CCTV' values='yes' />
                        <MyCheckbox placeholder="no" label="No" name='CCTV' type='CCTV' values='no' />
                      <label htmlFor="bankHoliday">Are you open on Bank holidays?</label>
                        <MyCheckbox placeholder="yes" label="Yes" name='bankHoliday' type='bankHoliday' values='yes' />
                        <MyCheckbox placeholder="no" label="No" name='bankHoliday' type='bankHoliday' values='no' />
                      <label htmlFor="fifteenhours">Do you offer 15 Hours free for two year olds?</label>
                        <MyCheckbox placeholder="yes" label="Yes" name='fifteenhours' type='fifteenhours' values='yes' />
                        <MyCheckbox placeholder="no" label="No" name='fifteenhours' type='fifteenhours' values='no' />   
                      <label htmlFor="thirtyHours">Do you offer 30 Hours free for two year olds?</label>
                        <MyCheckbox placeholder="yes" label="Yes" name='thirtyHours' type='thirtyHours' values='yes' />
                        <MyCheckbox placeholder="no" label="No" name='thirtyHours' type='thirtyHours' values='no' />   
                      <label htmlFor="terms">Do you agree to our terms and conditions?</label>
                    <FormControlLabel control={
                        <Switch name="checkedB" color="primary"/>} label="Yes"/>
                      <label className="uploadText">
                         Upload images
                        <input className="upload" type="file" name="picture" /> 
                      </label> 
                    <button className='signSubmit' type="submit">Submit</button>
                </Form>
            </div>
              )
            }}
      </Formik>
    )}

export default SignUpForm