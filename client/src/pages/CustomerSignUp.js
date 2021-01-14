import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './CustomerSignUp.css';

const Login = () => {

    const handleSignUp = (values, {setSubmitting, resetForm}) => {
        console.log("values", values)
      axios.post('/api/users', values)
        // axios({
        //     method: 'POST',
        //     url: `/api/users`,
        //     data: values,
        //     secure: false
        //   })
          .then(response => {
            console.log("response", response.data);
            setSubmitting(false);
            resetForm()
         })
         window.location = '/profile'
        }

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            onSubmit = {handleSignUp}
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
                confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Password Must Match')
                .required('Pssword is Required'),
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
                    <label htmlFor="name">name</label>
                        <Field type="text"  name="name" onBlur={handleBlur}  className={errors.name && touched.name && "error" } />
                            {errors.name && touched.name && (
                                <div className="input-feedback">{errors.name}</div>)}

                    <label htmlFor="email">Email</label>
                        <Field type="text" name="email" onBlur={handleBlur}  className={errors.email && touched.email && "error" } />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>)}

                    <label htmlFor="password">Password</label>
                         <Field type="password" name="password" onBlur={handleBlur}  className={errors.password && touched.password && "error" } />
                            {errors.password && touched.password && (
                                <div className="input-feedback">{errors.password}</div>)}

                    <label htmlFor="confirmPassword">Confirm Password</label>
                        <Field type="password" name="confirmPassword" onBlur={handleBlur}  className={errors.confirmPassword && touched.confirmPassword && "error" } />
                            {errors.confirmPassword && touched.confirmPassword && (
                                 <div className="input-feedback">{errors.name}</div>)}

                    <button type="submit" disabled={isSubmitting} value='submit'>Sign Up</button>
                    <button type="reset">Reset</button>
                </Form>
            </div>
              )
            }}
                   </Formik>
    )}

export default Login


// const handleSubmit = (values, event) => {
//     event.preventDefault();

//   axios.post(`/api/users`, values)
//   .then(response => console.log(response))
//   .catch(error => console.log(error))
// }

//     setName = (event)=> {
//         setName ({
//             name:event.target.value
//         })
//     }
//     setEmail = (event)=> {
//         setEmail ({
//             name:event.target.value
//         })
//     }

//     setPassword = (event)=> {
//         setPassword ({
//             name:event.target.value
//         })
//     }
//     setConfirmPassword = (event)=> {
//         setConfirmPassword ({
//             name:event.target.value
//         })
//     }

            {/* {formik => (
                <div>
                    <h1>Sign Up</h1>
                    {console.log(formik.values)}
                    <Form className="submit"onSubmit={handleSignUp}>
                        <Field label="Name" name="name" type="name"/>
                        <Field label="email" name="email" type="email"/>
                        <Field label="Password" name="password" type="password"/>
                        <Field label="confirm Password" name="confirmPassword" type="password"/>
                        <button  className="btn btn-dark mt-3" type="submit">Sign Up</button>
                        <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
} */}



