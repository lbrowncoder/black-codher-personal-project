import React, { useEffect } from "react";
import {useLocation} from 'react-router-dom'
import NurserySearch from "./Search";
import {Card, Container, Col, Row} from "react-bootstrap";
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as BiIcons from 'react-icons/bi';
import './SearchDetail.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";



const SearchDetails = (props) => {
  
  let location = useLocation();
  let {nurseries} = location.state;

  useEffect(() => {
    const { history } = props;
    const {nurseries} = location.state
  },[location])

  return (
  <>
  <div>
    <h1 className='header'>{nurseries.name}</h1>
    <Container>
  <Row className='row'>
    <Col xs={6} md={6}>
    <AliceCarousel autoPlay 
    autoPlayInterval="2500"
    infinate={false} 
    disableAutoPlayOnAction={true}
    mouseTrackingEnable={true}
    fadeOutAnimation={true}>
    <img src={nurseries.profilePicture} className='pic' alt="profilePicture" />
    <img src={nurseries.pictures.imageOne} className='pic'  alt="pictureOne" />
    <img src={nurseries.pictures.imageTwo} className='pic'alt="pictureTwo" />
    <img src={nurseries.pictures.imageThree} className='pic' alt="pictureThree" />
    <img src={nurseries.pictures.imageFour} className='pic' alt="pictureFour" />
    <img src={nurseries.pictures.imageFive} className='pic' alt="pictureFive"/>
</AliceCarousel>
<p className='address'>{nurseries.address} </p>
<p className='postcode'>{nurseries.postcode}</p>

    </Col>
    <Col xs={4} md={4}>
     <p className='writeUp'>{nurseries.writeUp}</p>
    </Col>
  </Row>
</Container>


    
    

  <Container className='contact'>
  <FaIcons.FaPhone className='phone' />
  <a className="phone" href="tel:{nurseries.phone}">{nurseries.phone}</a>
  <HiIcons.HiOutlineMail className='email'  />
  <a className="email" href = {nurseries.email}>{nurseries.email}</a>
    <BiIcons.BiPointer className='website' />
    <a className="website" href = {nurseries.website}>{nurseries.website}</a>
    </Container>
  </div>
  <div>
    </div>
  <h2>
    FAQ
    </h2>
    <ul>
      Fees: 
    <li>Full time: {nurseries.fullTime}</li>
    <li> Full Day: {nurseries.fullDay}</li>
    <li>Half Day: {nurseries.halfDay}</li>
    
    </ul>
    <p>Opening Hours: {nurseries.openingHours}</p>
    <p>Opening times: {nurseries.openingTimes}</p>
    <p>Ofsted Rating: {nurseries.ofstedRating}</p>
    <p> Ofsted Report: <a href = {nurseries.ofstedLink}> {nurseries.ofstedLink}</a></p>
    <p>Open Bank Hoildays: {nurseries.isOpenBankHolidays ? 'Yes' : 'No'}</p>
    <p>Number of spaces: {nurseries.numberOfPlaces}</p>
    <p>Dietary Requirments Caterted for:  {nurseries.isDietaryRequirementsCateredFor ? 'Yes' : 'No'}</p>
    <p>Age Range:  {nurseries.ageRange}</p>
    <p>Fifthteen Hours Free: {nurseries.isFifteenHoursFree ? 'Yes' : 'No'}</p>
    <p>Thirty Hours Free: {nurseries.isThirtyHoursFree ? 'Yes' : 'No'}</p>
    <p>All staff First  Aid Trained: {nurseries.isFirstAidTrained ? 'Yes' : 'No'}</p>

    </>
  )}

export default SearchDetails