import React, { useState } from "react";

const Profile = () => {
 const [setUser] = useState({ name: "", email: "" });

 const logout = () => {
  setUser({ name: "", email: "" });
  window.location = "/";
 };
 return (
  <div>
   <div className='welcome'>
    <h2>
     Welcome
    </h2>
    <p>See your favourite childcare </p>
    <button  onClick={logout}>Log Out</button>
   </div>
  </div>
 );
};

export default Profile;
