import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const LoginForm = ({ Login, error }) => {
 const [details, setDetails] = useState({ name: "", email: "" });

 const submitHandler = (e) => {
  e.preventDefault();
  Login(details);
 };

 // Only works with admin user- backend to be added later//

 return (
  <form classname='submit' onSubmit={submitHandler}>
   <div className='form-inner'>
    <h2 className='loginTitle'>Login</h2>
    {error !== "" ? <div className='error'>{error}</div> : ""}
    <div className='form-group'>
     <label htmlFor='name'>Name*</label>
     <input
      className='loginInput'
      type='text'
      name='name'
      placeholder='Name'
      id='name'
      onChange={(e) => setDetails({ ...details, name: e.target.value })}
      value={details.name}
     />
    </div>
    <div className='form-group'>
     <label htmlFor='email'>Email*</label>
     <input
      className='loginInput'
      type='email'
      email='email'
      placeholder='Email'
      id='email'
      onChange={(e) => setDetails({ ...details, email: e.target.value })}
      value={details.email}
     />
    </div>
    <div className='form-group'>
     <label htmlFor='password'>Password*</label>
     <input
      className='loginInput'
      type='password'
      password='password'
      placeholder='Password'
      id='password'
      onChange={(e) => setDetails({ ...details, password: e.target.value })}
      value={details.password}
     />
    </div>
    <input className='signSubmitLogin' type='Submit' value='login' />
    <p className='account'>
     Don't have an account?<NavLink to='/signup'> Sign up </NavLink> here
    </p>
   </div>
  </form>
 );
};

export default LoginForm;
