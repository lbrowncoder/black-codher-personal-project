import React, { useState} from 'react';
import axios from 'axios';


const SignUpForm = () => {
    let [name,setName] = useState('');
    let [ContactNumber,setContactNumber] = useState('');
    let [email,setEmail] = useState('');
    let [writeUp, setWriteUp] = useState("");
    let [firstAid, setFirstAid]= useState(true); 


    function handleSignUpSubmit(event) {
        event.preventDefault()
      console.log(name, ContactNumber, email)

    axios.post('/api/info',{
        name: name,
        number: ContactNumber,
        email: email,
        writeUp: writeUp,
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
            <p>Please submit the details for your Nursery</p>
          <form onSubmit={(event) => handleSignUpSubmit(event)} className="form">
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
                    Nursery information
                  <input type="text" value={writeUp} onChange={(e) => setWriteUp(e.target.value)} />
                </label>
                <button type="submit">submit</button>
            </form>
        </div>
        </>
    )}
  
  
    export default SignUpForm