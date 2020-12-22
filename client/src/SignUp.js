import React, { useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { FlareSharp } from '@material-ui/icons';
import {useForm} from "react-hook-form";


const SignUpForm = () => {
    let [name,setName] = useState('');
    let [ContactNumber,setContactNumber] = useState('');
    let [email,setEmail] = useState('');
    let [writeUp, setWriteUp] = useState('');
    let [firstAid, setFirstAid]= useState(''); 
    const [dropdown, setDropdown] = useState('');
    const [ofstead, setOfsted]= useState('');
    const [aid, setAid]= useState('');
    const [cctv, setCCTV]= useState('');
    const [bank, setBank]= useState('');
    const [address, setAddress]= useState('');
    const [thirty, setThirty] = useState('');
    const [two, setTwo] = useState('');
    const [three, setThree] = useState('');
    const [full, setFull] = useState('');
    const [half, setHalf] = useState('');
    const [day, setDay] = useState('');
    const [website, setWebsite] = useState('');
    const [hours, setHours] = useState('');


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
          <p>Please Answer the below questions</p>
                <label className='form-input'>
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
                <label>
                   Address
                  <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </label>
                <label>
                   Website
                  <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
                </label>
                <label>
                   Opening Hours
                  <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
                </label>
                <p>Ofstead Rating {ofstead}</p>
            <select value={ofstead} onChange={(e) => {setOfsted(e.target.value)}}>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Requires Improvement">Requires Improvement</option>
            <option value="Inadequate">Inadequate</option>
            <option value="N/A">N/A</option>
            </select>
            <p>All Staff First Aid: {aid}</p>
            <select value={aid} onChange={(e) => {setAid(e.target.value)}}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
            <p>CCTV: {cctv}</p>
            <select value={cctv} onChange={(e) => {setCCTV(e.target.value)}}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
            <p>Open Bank Holidays: {bank}</p>
            <select value={bank} onChange={(e) => {setBank(e.target.value)}}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
            <p>Offer 15 hours free to quailifying two year olds: {two}</p>
            <select value={two} onChange={(e) => {setTwo(e.target.value)}}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
            <p>Offer 15 hours free to quailifying three and four year olds: {three}</p>
            <select value={three} onChange={(e) => {setThree(e.target.value)}}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
            <p>Offer extra 15 hours free to quailifying three and four year olds: {thirty}</p>
            <select value={thirty} onChange={(e) => {setThirty(e.target.value)}}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
            <br />
            <label>
                   Full Time fee (5days)
                  <input type="text" value={full} onChange={(e) => setFull(e.target.value)} />
                </label>
                <label>
                   Full day fee
                  <input type="text" value={day} onChange={(e) => setDay(e.target.value)} />
                </label>
                <label>
                   Half Day fee 
                  <input type="text" value={half} onChange={(e) => setHalf(e.target.value)} />
                </label>
                <br />
                <label>
                  Upload images
                <input type="file" name="picture" /> 
                </label>
            </form>   
            <button type="submit">Submit</button>
        </div>
        </>
    )}
  
  
    export default SignUpForm


    