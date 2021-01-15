import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const Contact = () => {

    const handleContact = (values, {setSubmitting, resetForm}) => {
        console.log("values", values)
      axios.post('/api/contacts', values)
          .then(response => {
            console.log("response", response.data);
            setSubmitting(false);
            resetForm()
         })
         window.location = '/submittedform'
        }



    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: '',
            }}
            onSubmit = {handleContact}
             validationSchema ={Yup.object().shape({
                name: Yup.string()
                .min(2, 'must be two charaters or more')
                .required('Required'),
                email: Yup.string()
                .email('Email is invalid')
                .required('Email is Required'),
                message: Yup.string()
                .min(6, 'Please submit the message')
                .required('Message is required'),
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
                    <h1>Contact</h1>
                <Form autoComplete="off">
                    <label htmlFor="name">name</label>
                        <Field type="text"  name="name" onBlur={handleBlur}  className={errors.name && touched.name && "error" } />
                            {errors.name && touched.name && (
                                <div className="input-feedback">{errors.name}</div>)}

                    <label htmlFor="email">Email</label>
                        <Field type="text" name="email" onBlur={handleBlur}  className={errors.email && touched.email && "error" } />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>)}

                    <label htmlFor="message">Message</label>
                         <Field type="message" name="message" onBlur={handleBlur}  className={errors.message && touched.message && "error" } />
                            {errors.message && touched.message && (
                                <div className="input-feedback">{errors.message}</div>)}

                    <button type="submit" disabled={isSubmitting} value='submit'>Contact</button>
                    <button type="reset">Reset</button>
                </Form>
            </div>
              )
            }}
                   </Formik>
    )}

export default Contact






// import React, { useState} from 'react';
// import axios from 'axios';
// import './Contact.css';
// import {Button} from "react-bootstrap";
// import { useHistory } from "react-router";


// const Contact = () => {
//     let [name,setName] = useState('');
//     let [ContactNumber,setContactNumber] = useState('');
//     let [email,setEmail] = useState('');
//     let [message, setmessage] = useState("");
//     const history = useHistory();

//     function handleContactSubmit(event) {
//         event.preventDefault();
//         history.push('/SubmittedForm');

//       axios.post(`/api/contact`,{
//         name:name,
//         ContactNumber: ContactNumber,
//         email: email,
//         message: message
//         })
//         .then(function (response) {
//           console.log(response);
//         })
//         .catch(function (error) { 
//           console.log(error);
//         });
//     }
      
    // return (
    //     <>
    //     <div>
    //       <h1>Contact Us</h1>
    //         <form onSubmit={(event) => handleContactSubmit(event)}>
    //             <label>
    //                 Name:
    //                 <input  type="text" value={name} onChange={(e) => setName(e.target.value)} />
    //             </label>
    //             <label >
    //                 Contact Number:
    //                 <input  type="text" value={ContactNumber} onChange={(e) => setContactNumber(e.target.value)} />
    //             </label>
    //             <label >
    //                 Email:
    //               <input  type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
    //             </label>
    //             <label>
    //                 Message:
    //               <input  type="text" value={message} onChange={(e) => setmessage(e.target.value)} />
    //             </label>
    //             <Button  onClick={handleContactSubmit} variant="btn btn-outline-dark"> Submit </Button>{' '}
    //         </form>
    //     </div>
    //     </>
    // )}
    
// }
  
//     export default Contact