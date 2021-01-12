
import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';


const Login = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('')
 
        
    const validate =Yup.object({
    fullName: Yup.string()
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
    })
    
    return (
        <Formik
            initialValues={{
                fullName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            
        >
            {formik => (
                <div>
                    <h1>Sign Up</h1>
                    {console.log(formik.values)}
                    <Form className="submit">

                        <TextField label="Name" name="fullName" type="text"/>
                        <TextField label="email" name="email" type="email"/>
                        <TextField label="Password" name="password" type="password"/>
                        <TextField label="confirm Password" name="confirmPassword" type="password"/>
                        <button className="btn btn-dark mt-3" type="submit">Sign Up</button>
                        <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default Login
