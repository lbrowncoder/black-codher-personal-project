import {React, useState } from 'react';
import LoginForm from './LoginForm';
import './Login.css'

const Login = () => {

const adminUser = {
    email: "admin@test.com",
    password: "admin"
    
}

const [user, setUser] = useState ({name: "", email: ""});
const [error, setError] = useState ("");

const Login = (details) => {
    console.log(details);

if (details.email == adminUser.email && details.password == adminUser.password) {
    console.log("Logged In");
    setUser({
        name: details.name,
        email: details.email
    });
} else {
    console.log("Details does not match");
    setError("Details does not match");
}
}


const logout = () => {
    setUser({name:"", email:""})
}

    return (
        <div className="login">
            {(user.email !="") ? (
                <div className="welcome">
           <h2>Welcome <span>{user.name}</span></h2>
           <p>See your favourite nursery</p>
           <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <LoginForm Login={Login} error={error}/>
    )}
    </div>
    );
}

export default Login
