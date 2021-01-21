import React, {useState} from 'react';
import '../App.css';
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
                            <label className='loginInput' htmlFor="name">Name:*</label>
                            <input type="text" name="name" placeholder='name' id="name" onChange={e => setDetails({...details, name:e.target.value})} value={details.name} />
                        </div>
                        <div className="form-group">
                            <label className='loginInput' htmlFor="email">Email:*</label>
                            <input type="email" email="email" placeholder='email' id="email" onChange={e => setDetails({...details, email:e.target.value})} value={details.email}  />
                        </div>
                        <div className="form-group">
                            <label className='loginInput' htmlFor="password">Password:*</label>
                            <input type="password" password="password" placeholder='password' id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password} />
                        </div>
                            <input className='signSubmit' type="Submit" value="login" />
                            <p>Dont have an account?<NavLink to='/signup'> Sign up </NavLink> here</p>
                    </div>
            </form>
        )
    }

export default LoginForm
