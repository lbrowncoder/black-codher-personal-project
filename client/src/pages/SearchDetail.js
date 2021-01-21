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
import ShowMoreText from 'react-show-more-text';
import '../App.css';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as bsIcons from "react-icons/bs";

const SearchDetails = (props) => {
  
  let location = useLocation();
  let {nurseries} = location.state;

  useEffect(() => {
    const { history } = props;
    const {nurseries} = location.state
  },[location])

  return (
        <>
          <h1 className='header'>{nurseries.name}</h1>
            <div className='socialMedia'>
              <a href='/' className='instagram-two social'>
                <FaInstagram size="30px"/>
              </a>
              <a href='/' className='twitter-two social'>
                  <FaTwitterSquare size="30px"/>
              </a>
              <a href='/' className='facebook-two social'>
                  <FaFacebookSquare size="30px" />
              </a>
              <div className='score'>
                <p className='nine'>9.3</p>
                <p className='ten'>out of 10</p>
            </div>
          <Container className='contact'>
            <FaIcons.FaPhone className='phone' size="25px" />
            <a className="phone" href="tel:{nurseries.phone}">{nurseries.phone}</a>
            <HiIcons.HiOutlineMail className='email' size="25px" />
            <a className="email" href = {nurseries.email} target="_blank">{nurseries.email}</a>
            <BiIcons.BiPointer className='website' size="25px" />
            <a className="website" href = {nurseries.website} target="_blank">{nurseries.website}</a>
          </Container>
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
                <ShowMoreText
                      lines={7}
                      more='Show more'
                      less='Show less'
                      className='content-css'
                      anchorClass='my-anchor-css-class'
                      expanded={false}
                      width={300}
                      className='writeUp'
                      id="about"
                      >{nurseries.writeUp}</ShowMoreText>
              {/* <p className='writeUp'>{nurseries.writeUp}</p> */}
              </Col>
            </Row>
          </Container>
        </div>
          <p className='reveiw'>Read the latest reviews on this childcare provider</p>
          <p className='soon'>...Coming Soon</p>
          <p className='example'>Example</p>
          <p className='great'>Great nursery - our son has been attending for 2 years. All the staff are so helpful and supportive and my son has really developed into a confident and independent boy. Most importantly, he really enjoys going to nursery and always looks forward to it.</p>
          <p className='reviewer'>Review from R P (Father of Child) published on 12 January 2021</p>
        <div>
          <AiIcons.AiFillStar className='starExample'size="1.8rem"/>
          <AiIcons.AiFillStar size="1.8rem"/>
          <AiIcons.AiFillStar  size="1.8rem"/>
          <AiIcons.AiFillStar  size="1.8rem"/>
          <bsIcons.BsStarHalf  size="1.6rem"/>
        </div>
        <h2 className='faq'>
          FAQ
        </h2>
          <ul className='feesMain'>
              Fees: 
            <li className='fees' id= "fees">Full time: {nurseries.fullTime}</li>
            <li className='fees'> Full Day: {nurseries.fullDay}</li>
            <li className='fees'>Half Day: {nurseries.halfDay}</li>
          </ul>
          <p className='questions'>Opening Hours: {nurseries.openingHours}</p>
          <p className='questions'>Opening times: {nurseries.openingTimes}</p>
          <p className='questions'>Ofsted Rating: {nurseries.ofstedRating}</p>
          <p className='questions'> Ofsted Report: <a href = {nurseries.ofstedLink} target="_blank"> {nurseries.ofstedLink}</a></p>
          <p className='questions'>Open Bank Hoildays: {nurseries.isOpenBankHolidays ? 'Yes' : 'No'}</p>
          <p className='questions'>Number of spaces: {nurseries.numberOfPlaces}</p>
          <p className='questions'>Dietary Requirments Caterted for:  {nurseries.isDietaryRequirementsCateredFor ? 'Yes' : 'No'}</p>
          <p className='questions'>Age Range:  {nurseries.ageRange}</p>
          <p className='questions'>Fifthteen Hours Free: {nurseries.isFifteenHoursFree ? 'Yes' : 'No'}</p>
          <p className='questions'>Thirty Hours Free: {nurseries.isThirtyHoursFree ? 'Yes' : 'No'}</p>
          <p className='questions'>All staff First  Aid Trained: {nurseries.isFirstAidTrained ? 'Yes' : 'No'}</p>
        </>
      )}

export default SearchDetails