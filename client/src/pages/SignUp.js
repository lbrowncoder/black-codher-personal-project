import React, { useState} from 'react';
import axios from 'axios';
import './SignUp.css';
import {Button} from "react-bootstrap";

const SignUpForm = () => {
    let [name,setName] = useState('');
    let [ContactNumber,setContactNumber] = useState('');
    let [email,setEmail] = useState('');
    let [writeUp, setWriteUp] = useState('');
    // let [firstAid, setFirstAid]= useState(''); 
    // const [dropdown, setDropdown] = useState('');
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
    // const [hours, setHours] = useState('');


    function handleSignUpSubmit(event) {
        event.preventDefault()
      console.log(name, ContactNumber, email)

    axios.post('/api/review',{
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
          })
    }
      
    return (
        <>
            <h2>Please Submit The Details For Your Nursery</h2>
            <container className="container">
          <form onSubmit={(event) => handleSignUpSubmit(event)} className="form">
          <div className="box">
                <label className='nameText'>
                    Name:
                    <input className="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label className="contactText">
                    Contact Number:
                    <input  className="contact" type="text" value={ContactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                </label>
                <label className="emailText">
                    Email:
                  <input className="emailTwo" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Nursery information:
                  <input  className="writeUp" type="text" value={writeUp} onChange={(e) => setWriteUp(e.target.value)} />
                </label>
                <label className="addressText">
                   Address:
                  <input className="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </label>
                <label className="websiteText">
                   Website:
                  <input className="website" type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
                </label>
                </div>
                <p>Ofstead Rating: {ofstead}</p>
            <select className="inputBox" value={ofstead} onChange={(e) => {setOfsted(e.target.value)}}>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Requires Improvement">Requires Improvement</option>
            <option value="Inadequate">Inadequate</option>
            <option value="N/A">N/A</option>
            </select>
            <p>All Staff First Aid: {aid}</p>
            <select className="inputBox" value={aid} onChange={(e) => {setAid(e.target.value)}}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
            <p>CCTV: {cctv}</p>
            <select className="inputBox" value={cctv} onChange={(e) => {setCCTV(e.target.value)}}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
            <p>Open Bank Holidays: {bank}</p>
            <select className="inputBox" value={bank} onChange={(e) => {setBank(e.target.value)}}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
            <p>Offer 15 hours free to quailifying two year olds: {two}</p>
            <select className="inputBox" value={two} onChange={(e) => {setTwo(e.target.value)}}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
            <p>Offer 15 hours free to quailifying three and four year olds: {three}</p>
            <select className="inputBox" value={three} onChange={(e) => {setThree(e.target.value)}}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
            <p>Offer extra 15 hours free to quailifying three and four year olds: {thirty}</p>
            <select className="inputBox" value={thirty} onChange={(e) => {setThirty(e.target.value)}}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
            <br />
            <label className="label">
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
                <label className="uploadText">
                  Upload images
                <input className="upload" type="file" name="picture" /> 
                </label>
            </form>  
            </container> 
            <Button className="button" onClick={handleSignUpSubmit} variant="outline-primary"> Submit </Button>{' '}
        </>
    )}
    
  
  
    export default SignUpForm


    