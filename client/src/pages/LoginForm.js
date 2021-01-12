import React, {useState} from 'react';
import './Login.css';
import { NavLink} from 'react-router-dom';

const LoginForm = ({ Login, error}) => {
    const [details, setDetails] = useState ({name: "", email: ""});

    const submitHandler = (e) => {
        e.preventDefault();
        Login(details);
        
    }

    return (
      <form classname="submit" onSubmit={submitHandler}>
          <div className="form-inner">
              <h2>Login</h2>
              {(error !="") ? (<div className="error">{error}</div>) : ""}
              <div className="form-group">
                  <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" onChange={e => setDetails({...details, name:e.target.value})} value={details.name} />
              </div>
              <div className="form-group">
              <label htmlFor="email">email:</label>
              <input type="email" email="email" id="email" onChange={e => setDetails({...details, email:e.target.value})} value={details.email}  />
              </div>
              <div className="form-group">
              <label htmlFor="password">password:</label>
              <input type="password" password="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password} />
              </div>
              <input type="Submit" value="login" />
              <p>Dont have an account?<NavLink to='/signin'> sign up </NavLink> here</p>
          </div>
      </form>
    )
}

export default LoginForm
