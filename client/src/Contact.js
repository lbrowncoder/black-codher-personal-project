import React, { useState} from 'react';
import axios from 'axios';
import './Contact.css';
import {Button} from "react-bootstrap";
import { useHistory } from "react-router";

const Contact = () => {
    let [name,setName] = useState('');
    let [ContactNumber,setContactNumber] = useState('');
    let [email,setEmail] = useState('');
    let [message, setmessage] = useState("");
    const history = useHistory();

    function handleContactSubmit(event) {
        event.preventDefault();
        history.push('/SubmittedForm');
      console.log(name, ContactNumber, email)

      axios.post(`/api/contact`,{
        name:name,
        ContactNumber: ContactNumber,
        email: email,
        message: message
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
            <h1 className="contactUs">Contact Us</h1>
          <form onSubmit={(event) => handleContactSubmit(event)} className="form">
                <label className="nameContact">
                    Name:
                    <input className="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label className="contactText">
                    Contact Number:
                    <input className="contact" type="text" value={ContactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                </label>
                <label className="emailText">
                    Email:
                  <input  className="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label className="messageText">
                    Message:
                  <input className="message" type="text" value={message} onChange={(e) => setmessage(e.target.value)} />
                </label>
                <Button className="contactButton" onClick={handleContactSubmit} variant="btn btn-outline-dark"> Submit </Button>{' '}
            </form>
        </div>
        </>
    )}
    
  
  
    export default Contact