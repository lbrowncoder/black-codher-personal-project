import React, { useState, useEffect } from 'react';
import axios from 'axios'


const ReviewForm = () => {
    const [name,setName] = useState('');
    const [ContactNumber,setContactNumber] = useState('');
    const [email,setEmail] = useState('');
    // const history = useHistory();
 
    function handleSubmit() {
      console.log(name, ContactNumber, email)
    //   history.push('/pages/ThankYou')
    axios.post('/api/review',{
        name: name,
        number: ContactNumber,
        email: email
        })
        .then(res=> {
            console.log(res);
        })
        .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
          <form onSubmit={() => handleSubmit()} className="form">
              <label>
                  Name:
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
              <label>
                  Contact Number
                <input  type="text" value={ContactNumber} onChange={(e) => setContactNumber(e.target.value)} />
              </label>
              <label>
                  Name:
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <button type="submit">Press ME!</button>

            </form>
        </div>
    )}
    
    export default ReviewForm