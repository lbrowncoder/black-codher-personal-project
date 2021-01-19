import React from 'react';
import {Formik, Form, Field, useField, FieldArray} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './CustomerSignUp.css';
import { Checkbox, FormControlLabel, Radio,Select, TextField, MenuItem, Switch } from '@material-ui/core';
import { Button } from 'react-bootstrap';

const SignUpForm = () => {

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
                ofsted: [{type: 'excellent', rating:"50", id: "" + Math.random() }],
                firstAid: '',
                CCTV: false,
                bankHoilday: false,
                fifteenHours: false,
                thirtyHours: false,
                fees: [{type: 'fullDay', price:"50", id: "" + Math.random() }],
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
                password: Yup.string()
                .min(6, 'Password must be atleast 6 charaters or more')
                .required('Pssword is Required'),
                contact: Yup.number()
                .min(11, 'Must be 11 digits long')
                .required('Required'),
                writeup: Yup.string()
                .min(10, 'Description can not be empty')
                .required('Required'),
                address: Yup.string()
                .min(2, 'Address can not be empty')
                .required('Required'),
                postcode: Yup.string()
                .min(2, 'postcode can not be empty')
                .required('Required'),
                website:  Yup.string()
                .url('Website is required')
                .required('Required'),
                ofsted: Yup.string()
                .min(2, 'Please enter rating')
                .required('Required'),
               firstAid: Yup.bool()
                .oneOf([true], 'Please Select')
                .required('Required'),
                CCTV: Yup.bool()
                .oneOf([true], 'Please Select')
                .required('Required'),
                bankHoilday: Yup.bool()
                .oneOf([true], 'Please Select')
                .required('Required'),
                fifteenHours: Yup.bool()
                .oneOf([true], 'Please Select')
                .required('Required'),
                thirtyHours: Yup.bool()
                .oneOf([true], 'Please Select')
                .required('Required'),
                fullTime: Yup.number()
                .min(2, 'Must be valid')
                .required('Required'),
                fullDay: Yup.number()
                .min(2, 'Must be valid')
                .required('Required'),
                halfDay: Yup.number()
                .min(2, 'Must be valid')
                .required('Required'),
                // fees: Yup.array()
                // .required('Required'),
                terms: Yup.bool()
                .test('true', 'Must Agree to terms', value => value === true)
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
                    <h1>Sign Up</h1>
                <Form autoComplete="off">
                  <MyTextField placeholder="Full Name" name='name' type='input' />
                  <MyTextField placeholder='Email'name='email' type='input' />
                   <MyTextField placeholder='Password 'name='password' type='password' />
                  <MyTextField placeholder='Contact' name='contact' type='input' />
                  <MyTextField placeholder='Website' name='website' type='input' /> 
                  <MyLargeTextField placeholder='Tell us about your Nursery' name='writeup' type='input' />
                  <MyLargeTextField placeholder='Address' name='address' type='input' />
                  <MyTextField placeholder='Postcode' name='postcode' type='input' />
                  <FieldArray name='fees'>
                    {(arrayHelper) =>(
                      <div>
                          <Button onClick={() => arrayHelper.push({
                              type: 'fullday',
                              price: '',
                              id: "" + Math.random()
                            })}>Add fee</Button>
                        {values.fees.map((fee, index ) => {
                          return (
                          <div key={fee.id}>
                            <TextField placeholder='price' name={`fees.${index}.price`} />
                            <Field name={`fees.${index}.type`} type='Select' as={Select}>
                              <MenuItem value='fullday'>Full Day</MenuItem>
                              <MenuItem value='halfday'>Half Day</MenuItem>
                              <MenuItem value='fullweek'>Full Week</MenuItem>
                            </Field>              
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </FieldArray>
                  <label htmlFor="ofsted">Please provide your Ofstea rating and date of the report</label>
                  <FieldArray name='ofsted'>
                    {(arrayHelper) =>(
                      <div>
                        {values.ofsted.map((ofstedRate, index ) => {
                          return (
                          <div key={ofstedRate.id}>
                            <TextField placeholder='Date of report' name={`ofsted.${index}.rating`} />
                            <Field name={`ofsted.${index}.type`} type='Select' as={Select}>
                              <MenuItem value='excellent'>Excellent</MenuItem>
                              <MenuItem value='good'>Good</MenuItem>
                              <MenuItem value='requiresImprovement'>Requires Improvement'</MenuItem>
                              <MenuItem value='inadequate'>Inadequate</MenuItem>
                              <MenuItem value='noReport'>No Report</MenuItem>
                            </Field>              
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </FieldArray>

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

                    <button type="submit">Submit</button>
                </Form>
            </div>
              )
            }}
      </Formik>
    )}

export default SignUpForm



// {
//     "name": "hi",
//     "email": "eiuhdi@hjo/.com",
//     "contact": "hi",
//     "postocde": "hi",
//     "address": "dfgd",
//     "writeup": "hi",
//     "password": "hi",
//     "website": "hi",
//     "firstAid": true,
//     "openingHours": "jdfjkd",
//     "openingTimes": "dkjgdnj",
//     "CCTV": true,
//      "ofsteadRating": "excellent",
//     "bankHoliday": true,
//      "fifteenHours": false,
//       "thirtyHours": true,
//     "fullTime": 23,
//     "fullDay": 45,
//     "halfday": 54,
//   "terms": true
// }

