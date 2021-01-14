import React, { useEffect } from "react";
import {useLocation} from 'react-router-dom'
import NurserySearch from "./Search";
import {Card} from "react-bootstrap";
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as BiIcons from 'react-icons/bi';
import './SearchDetail.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const SearchDetails = (props) => {
  
  let location = useLocation();
  let {nurseries} = location.state;
  // const images = [nurseries.pictures];
  // let fees = [nurseries.fees]

  useEffect(() => {
    const { history } = props;
    // const {nurseries} = location.state
  },[location])

  // const NextArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow next" onClick={onClick}>
  //       <FaArrowRight />
  //     </div>
  //   );
  // };

  // const PrevArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow prev" onClick={onClick}>
  //       <FaArrowLeft />
  //     </div>
  //   );
  // };

  return (
  <>
  <div>
    {/* <Navbar /> */}
    <h1>{nurseries.name}</h1>
    <Card className="card" style={{ width: '28rem', height:"45rem" }}>
    <AliceCarousel autoPlay 
    autoPlayInterval="2500"
    infinate={false} 
    disableAutoPlayOnAction={true}
    mouseTrackingEnable={true}
    fadeOutAnimation={true}>
    <img src={nurseries.profilePicture} alt="profilePicture" className="sliderimg"/>
    <img src={nurseries.pictures.imageOne} alt="pictureOne" className="sliderimg"/>
    <img src={nurseries.pictures.imageTwo} alt="pictureTwo" className="sliderimg"/>
    <img src={nurseries.pictures.imageThree} alt="pictureThree" className="sliderimg"/>
    <img src={nurseries.pictures.imageFour} alt="pictureFour" className="sliderimg"/>
    <img src={nurseries.pictures.imageFive} alt="pictureFive"className="sliderimg"/>
</AliceCarousel>
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
    </h2>
    <ul>
      Fees: 
    <li>Full time: {nurseries.fullTime}</li>
    <li> Full Day: {nurseries.fullDay}</li>
    <li>Half Day: {nurseries.halfDay}</li>
    
    </ul>
    <p className="details">Opening Hours: {nurseries.openingHours}</p>
    <p className="details">Opening times: {nurseries.openingTimes}</p>
    <p className="details">Ofstead Rating: {nurseries.ofsteadRating}</p>
    <p className="details"> Ofstead Report: <a className="details" href = {nurseries.ofsteadLink}> {nurseries.ofsteadLink}</a></p>
    <p className="details">Open Bank Hoildays: {nurseries.isOpenBankHolidays ? 'Yes' : 'No'}</p>
    <p className="details">Number of spaces: {nurseries.numberOfPlaces}</p>
    <p className="details">Dietary Requirments Caterted for:  {nurseries.isDietaryRequirementsCateredFor ? 'Yes' : 'No'}</p>
    <p className="details">Age Range:  {nurseries.ageRange}</p>
    <p className="details">Fifthteen Hours Free: {nurseries.isFifteenHoursFree ? 'Yes' : 'No'}</p>
    <p className="details">Thirty Hours Free: {nurseries.isThirtyHoursFree ? 'Yes' : 'No'}</p>
    <p className="details">All staff First  Aid Trained: {nurseries.isFirstAidTrained ? 'Yes' : 'No'}</p>

    </>
  )}


export default SearchDetails


