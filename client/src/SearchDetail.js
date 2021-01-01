import React, { useState, useEffect } from "react";
import {Link, useLocation} from 'react-router-dom'
import NurserySearch from "./Search";
import {Card} from "react-bootstrap";
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as BiIcons from 'react-icons/bi';
import './SearchDetail.css';

const SearchDetails = ({SearchDetails}) => {
  const location = useLocation();
  const {nurseries} = location.state;



  // useEffect(() => {
  //   const {nurseries} = location.state
  // },[location])

  return (
  <>
  <div>
    <h1>Results</h1>
    <Card className="card" style={{ width: '26rem', height:"29rem" }}>
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
  <container className="icons">
  < FaIcons.FaPhone className="searchPhone" size={40}/>
  <a className="infoText" href="tel:{nurseries.phone}">{nurseries.phone}</a>
  <br />
  <HiIcons.HiOutlineMail className="searchEmail"size={42} />
  <a className="infoText" href = {nurseries.email}>{nurseries.email}</a>
  <br />
    <BiIcons.BiPointer className="searchWebsite"size={42} />
    <a className="infoText" href = {nurseries.website}>{nurseries.website}</a>
    </container>
  </div>
  <h2 className="faq">
    FAQ
    <p className="details">Fees:</p>
    {/* <p>{nurseries.fees}</p> */}
    <p className="details">Opening Hours: {nurseries.openingHours}</p>
    <p className="details">Opening times: {nurseries.openingTimes}</p>
    <p className="details">Ofstead Rating: {nurseries.ofsteadRating}</p>
    <p className="details"> Ofstead Report: <a className="details" href = {nurseries.ofsteadLink}> {nurseries.ofsteadLink}</a></p>
    <p className="details">Open Bank Hoildays: {nurseries.openBankHoildays.toString()}</p>
    <p className="details">Number of spaces: {nurseries.numberOfPlaces}</p>
    <p className="details">Dietary Requirments Caterted for:  {nurseries.dietaryRequiremtsCatered}</p>
    <p className="details">Age Range:  {nurseries.ageRange}</p>
    <p className="details">Fifthteen Hours Free: {nurseries.fifteenoursFree}</p>
    <p className="details">Thirty Hours Free: {nurseries.thirtyHoursFree}</p>
    <p className="details">First Aid Trained: {nurseries.firstAidTrained}</p>
    
    

  </h2>
    </>
  )}


export default SearchDetails

