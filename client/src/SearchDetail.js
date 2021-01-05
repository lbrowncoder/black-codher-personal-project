import React, { useState, useEffect } from "react";
import {Link, useLocation, matchPath, withRouter, BrowserRouter} from 'react-router-dom'
import NurserySearch from "./Search";
import {Card} from "react-bootstrap";
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as BiIcons from 'react-icons/bi';
import './SearchDetail.css';
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const SearchDetails = ({SearchDetails}) => {
  let location = useLocation();
  let {nurseries} = location.state;
  const images = [nurseries.pictures];
  // let fees = [nurseries.fees]

  useEffect(() => {
    const {nurseries} = location.state
  },[location])

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
  <>
  <div>
    <h1>{nurseries.name}</h1>
    <Card className="card" style={{ width: '28rem', height:"45rem" }}>
  {/* <Card.Img variant="top" src={nurseries.profilePicture} alt="profilePicture" /> */}
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
  {/* <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={nurseries.pictures.imageOne} className="sliderimg"/>
      <img src={nurseries.pictures.imageTwo} className="sliderimg"/>
      <img src={nurseries.pictures.imageThree} className="sliderimg"/>
      <img src={nurseries.pictures.imageFour} className="sliderimg"/>
</AliceCarousel> */}
  <h2 className="faq">
    FAQ
    </h2>
    <p className="details">Fees:{nurseries.fees.forEach(fee => <div>{nurseries.fees}</div>)}</p>
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


