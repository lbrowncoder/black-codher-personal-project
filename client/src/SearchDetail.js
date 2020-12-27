import React, { useState, useEffect } from "react";
import {Link, useLocation} from 'react-router-dom'
import NurserySearch from "./Search";
import {Card} from "react-bootstrap";
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as BiIcons from 'react-icons/bi';

const SearchDetails = () => {
  const location = useLocation();
  const {nurseries} = location.state


  // useEffect(() => {
  //   const {nurseries} = location.state
  // },[location])

  return (
  <>
  <div>
    <h1>Results</h1>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={nurseries.profilePicture} alt="profilePicture" />
  <Card.Body>
    <Card.Title>{nurseries.name} </Card.Title>
    <Card.Text>
    {nurseries.address} {nurseries.postcode}
    </Card.Text>
    <Card.Text>
    {nurseries.writeUp}
    </Card.Text>
  </Card.Body>
  </Card>  
  < FaIcons.FaPhone />
  <p>{nurseries.phone}</p>
  <HiIcons.HiOutlineMail />
    <p>{nurseries.email}</p>
    <BiIcons.BiPointer />
    <p>{nurseries.website}</p>
  </div>
  <h2>
    FAQ
    <p>Fees</p>
    {/* <p>{nurseries.fees}</p> */}
    <p>Opening Hours: {nurseries.openingHours}</p>
    <p>Opening times: {nurseries.openingTimes}</p>
    <p>Ofstead Rating: {nurseries.ofsteadRating}</p>
    <p>Read Ofstead Report: {nurseries.ofsteadLink}</p>
    <p>Open Bank Hoildays: {nurseries.openBankHoildays}</p>
    <p>Number of spaces: {nurseries.numberOfPlaces}</p>
    <p>Dietary Requirments Caterted for:  {nurseries.dietaryRequiremtsCatered}</p>
    <p>Age Range:  {nurseries.ageRange}</p>
    <p>Fifthteen Hours Free: {nurseries.fifteenoursFree}</p>
    <p>Thirty Hours Free: {nurseries.thirtyHoursFree}</p>
    
    

  </h2>
    </>
  )}


export default SearchDetails

