import React, {useState } from 'react';
import LoginForm from './LoginForm';

const Profile = () => {
    const [user, setUser] = useState ({name: "", email: ""});
    const [error, setError] = useState ("");

        const logout = () => {
            setUser({name:"", email:""})
            window.location = '/'
        }
            return (
                <div>
                    <div className="welcome">
                        <h2>Welcome <span>{user.name}</span></h2>
                        <p>See your favourite nursery</p>
                        <button onClick={logout}>Log Out</button>
                    </div>
                </div>
    )
}

export default Profile
