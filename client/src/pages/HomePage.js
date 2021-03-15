import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Col, Container } from "react-bootstrap";
import homeMoney from "../imagesMain/homeMoney.jpg";
import homeGuide from "../imagesMain/homeGuide.jpg";
import "../App.css";
import NurserySearch from "./Search";
import eggshells1 from "../imagesMain/eggshells1.jpg";

const HomePage = (props) => {
 const [feature1, setFeature1] = useState([]);
 const [feature2, setFeature2] = useState([]);
 const [feature3, setFeature3] = useState([]);

 const fetchData = () => {
  const feature1 = `/api/info/5ff59f32d72a5c222448f7ad`;
  const feature2 = `/api/info/5ff59f32d72a5c222448f7ae`;
  const feature3 = `/api/info/5ff59f32d72a5c222448f7af`;

  const getFeature1 = axios.get(feature1);
  const getFeature2 = axios.get(feature2);
  const getFeature3 = axios.get(feature3);

  axios.all([getFeature1, getFeature2, getFeature3]).then(
   axios.spread((...allData) => {
    const getAllFeature1 = allData[0].data;
    const getAllFeature2 = allData[1].data;
    const getAllFeature3 = allData[2].data;

    setFeature1(getAllFeature1);
    setFeature2(getAllFeature2);
    setFeature3(getAllFeature3);
   })
  );
 };

 useEffect(() => {
  fetchData();
 }, []);

 return (
  <>
   <div>
    <div className='mainLogo'>
     <h1 className='mainTitle'>Welcome to Eggshells</h1>
     <img className='shells' src={eggshells1} alt='eggshells' />
    </div>
    <h2 className='secondTitle'>
     A Cracking Start To A Life Full Of Adventure
    </h2>
    <h3 className='thirdTitle'>The Newest UK Nursery Review Website</h3>
    <div>
     {" "}
     <NurserySearch />
    </div>
    <p className='topRated'>Our Top Rated Nurseries This Week</p>
    <Container className='row'>
     <div className='cardOne'>
      <Card border='dark' style={{ width: "18rem", height: "29rem" }}>
       <Card.Header className='featured'>Featured</Card.Header>
       <Card.Img
        className='imagePic'
        variant='top'
        src={feature1.profilePicture}
        alt='profilePicture'
       />
       <Card.Body className='card'>
        <Card.Title className='titleCard'>{feature1.name}</Card.Title>
        <Card.Text className='titleCard'>{feature1.address}</Card.Text>
        <Card.Text className='writeup'>
         <p className='ofstedGrade'>Ofsted Rating: {feature1.ofstedRating}</p>
        </Card.Text>
        <a href='/search/{feature1}'>
         <Button className='moreInfoBtn' variant='primary'>
          More Info
         </Button>
        </a>
       </Card.Body>
      </Card>
     </div>
     <div className='cardTwo'>
      <Card border='dark' style={{ width: "18rem", height: "29rem" }}>
       <Card.Header className='featured'>Featured</Card.Header>
       <Card.Img
        className='imagePic'
        variant='top'
        src={feature2.profilePicture}
        alt='profilePicture'
       />
       <Card.Body>
        <Card.Title className='titleCard'>{feature2.name}</Card.Title>
        <Card.Text className='titleCard'>{feature2.address}</Card.Text>
        <Card.Text className='writeup'>
         <p className='ofstedGrade'>Ofsted Rating: {feature2.ofstedRating}</p>
        </Card.Text>
        <Button className='moreInfoBtnTwo' variant='primary'>
         More Info
        </Button>
       </Card.Body>
      </Card>
     </div>
     <div className='cardThree'>
      <Card border='dark' style={{ width: "18rem", height: "29rem" }}>
       <Card.Header className='featured'>Featured</Card.Header>
       <Card.Img
        className='imagePic'
        variant='top'
        src={feature3.profilePicture}
        alt='profilePicture'
       />
       <Card.Body>
        <Card.Title className='titleCard'>{feature3.name}</Card.Title>
        <Card.Text className='titleCard'>{feature3.address}</Card.Text>
        <Card.Text className='writeup'>
         <p className='ofstedGrade'>Ofsted Rating: {feature3.ofstedRating}</p>
        </Card.Text>
        <Button className='moreInfoBtnTwo' variant='primary'>
         More Info
        </Button>
       </Card.Body>
      </Card>
     </div>
    </Container>
   </div>
   <div>
    <p className='advice'>Nursery and Childcare Advice</p>
    <Col className='colGuide'>
     <a href='/guide'>
      <img className='homeGuide' src={homeGuide} alt='homeGuide' />{" "}
     </a>
     <a href='/guide' className='pick'>
      Our Guide to picking the right Childcare Provider
     </a>
    </Col>
    <Col className='colMoney'>
     <a href='/cost'>
      <img className='homeMoney' src={homeMoney} alt='homeMoney' />{" "}
     </a>
     <a href='/cost' className='pick'>
      Help with Childcare Cost
     </a>
    </Col>
   </div>
  </>
 );
};

export default HomePage;
