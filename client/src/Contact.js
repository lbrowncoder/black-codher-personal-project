import React, { useState} from 'react';
import axios from 'axios';


const Contact = () => {
    let [name,setName] = useState('');
    let [ContactNumber,setContactNumber] = useState('');
    let [email,setEmail] = useState('');
    let [message, setmessage] = useState("");
    
    function handleContactSubmit(event) {
        event.preventDefault()
      console.log(name, ContactNumber, email)

    axios.post('/api/contact',{
        name: name,
        number: ContactNumber,
        email: email,
        message: message,
        })
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) { 
            console.log(error);
          });
    }
      
    return (
        <>
        <div>
            <p>Contact Us</p>
          <form onSubmit={(event) => handleContactSubmit(event)} className="form">
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Contact Number
                    <input  type="text" value={ContactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                </label>
                <label>
                    Email
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    message
                  <input type="text" value={message} onChange={(e) => setmessage(e.target.value)} />
                </label>
                <button type="submit">submit</button>
            </form>
        </div>
        </>
    )}
  
  
    export default Contact