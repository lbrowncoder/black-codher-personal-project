import React, {useState } from 'react';
import LoginForm from './LoginForm';
import '../App.css'

const Login = () => {

        const adminUser = {
            email: "admin@test.com",
            password: "admin" 
        }

        const [user, setUser] = useState ({name: "", email: ""});
        const [error, setError] = useState ("");

        const Login = (details) => {

            if (details.email === adminUser.email && details.password === adminUser.password) {
                console.log("Logged In");
                    setUser({
                    name: details.name,
                    email: details.email
                });
                window.location = '/profile'
            } else {
                console.log("Details does not match");
                setError("Details does not match");
            }
               
            }

                return (
                    <div className="login">
                        {(user.email !="") ? (
                            <div className="welcome">
                    </div>
                ) : (
                    <LoginForm Login={Login} error={error}/>
                )}
                </div>
                );
            }

export default Login
