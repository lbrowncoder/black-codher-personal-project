import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Container} from "react-bootstrap";
import homeMoney from "./imagesMain/homeMoney.jpg";
import homeGuide from "./imagesMain/homeGuide.jpg";
import './HomePage.css';
import NurserySearch from './Search';



const HomePage = (props) => {
const [feature1, setFeature1] = useState([]);
const [feature2, setFeature2] = useState([]);
const [feature3, setFeature3] = useState([]);


const fetchData = () => {
  const feature1 = `/api/info/5ff59f32d72a5c222448f7ad`;
  const feature2= `/api/info/5ff59f32d72a5c222448f7ae`;
  const feature3= `/api/info/5ff59f32d72a5c222448f7af`


  const getFeature1 = axios.get(feature1)
  const getFeature2 = axios.get(feature2)
  const getFeature3 = axios.get(feature3)

  axios.all([getFeature1, getFeature2, getFeature3]).then (
    axios.spread((...allData) => {
      const getAllFeature1 = allData[0].data
      const getAllFeature2 = allData[1].data
      const getAllFeature3 = allData[2].data

     setFeature1(getAllFeature1)
     setFeature2(getAllFeature2)
     setFeature3(getAllFeature3)
    })
  )
}

useEffect(() =>{
  fetchData()
}, [])

  // let url = `/api/info/5fd893dddac81c0ee471fe92` 
  //  await axios.get( url, {})
  // .then (res => console.log(res.data))
  // .catch((err) => {
  //       console.log(err)
  //       })
 
    return (
      <>
      <div>
      <h1 className="mainTitle">Welcome to Eggshells</h1>
      <h2 className="secondTitle">A Cracking Start To A Life Full Of Adventure</h2>
      <h3 className="thirdTitle">The Newest UK Nursery review website</h3>
      <div><NurserySearch nurseryDetail={props.nurseryDetail} setNurseryDetail={props.setNurseryDetail}/></div>
      <p className="topRated">Our Top Rated Nurseries This Week</p>
      <container className="row">
      <div className="cardOne">
      <Card border="dark" style={{ width: '18rem', height:"29rem" }}>
      <Card.Header className="featured">Featured</Card.Header>
  <Card.Img className="imagePic" variant="top" src={feature1.profilePicture} alt="profilePicture" />
  <Card.Body clasName="card">
    <Card.Title  className="titleCard">{feature1.name}</Card.Title>
    <Card.Text  className="titleCard">
    {feature1.address}
    </Card.Text>
    <Card.Text className="writeup">
    Ofstead Rating: {feature1.ofsteadRating}
    </Card.Text>
    <Button className="moreInfoBtn" variant="primary">More Info</Button>
  </Card.Body>
</Card>
</div>
<div className="cardTwo">
<Card border="dark" style={{ width: '18rem', height:"29rem" }}>
<Card.Header className="featured">Featured</Card.Header>
  <Card.Img className="imagePic" variant="top" src={feature2.profilePicture} alt="profilePicture" />
  <Card.Body >
    <Card.Title className="titleCard">{feature2.name}</Card.Title>
    <Card.Text className="titleCard">
    {feature2.address}
    </Card.Text>
    <Card.Text className="writeup">
    Ofstead Rating: {feature2.ofsteadRating}
    </Card.Text>
    <Button className="moreInfoBtnTwo" variant="primary">More Info</Button>
  </Card.Body>
</Card>
</div>
<div  className="cardThree">
<Card border="dark" style={{ width: '18rem', height:"29rem" }}>
<Card.Header className="featured">Featured</Card.Header>
  <Card.Img className="imagePic" variant="top" src={feature3.profilePicture} alt="profilePicture" />
  <Card.Body >
    <Card.Title className="titleCard">{feature3.name}</Card.Title>
    <Card.Text  className="titleCard">
    {feature3.address}
    </Card.Text>
    <Card.Text className="writeup">
    Ofstead Rating: {feature3.ofsteadRating}
    </Card.Text>
    <Button className="moreInfoBtnTwo" variant="primary">More Info</Button>
  </Card.Body>
</Card>
</div>
</container>
       </div>
       <div>
         <img className="homeGuide" src={homeGuide} alt="homeGuide" /> 
         <a href ="/guide" className="pick">Our Guide to picking the right Childcare Provider</a>
         <img className="homeGuide" src={homeMoney} alt="homeMoney" /> 
         <a href ="/money" className="helpCost">Help with Childcare Cost</a>
        </div>
        <div className="counties">
        <Container>
        <p className="searchBy">Search by Counties </p>
        <Row>
    <Col>
    <p className="regions">East Midlands</p>
            <ul>
              <li><a href ="/Search"> Derbyshire</a></li>
              <li><a href ="/Search"> Leicestershire</a></li>
              <li><a href ="/Search"> Northamptonshire</a></li>
              <li><a href ="/Search"> Nottinghamshire</a></li>
        </ul>
        </Col>
    <Col>
    <p className="regions">West Midlands</p>
            <ul>
              <li><a href ="/Search"> Herefordshire</a></li>
              <li><a href ="/Search"> Shropshire</a></li>
              <li><a href ="/Search"> Staffordshire</a></li>
              <li><a href ="/Search"> Warwickshire</a></li>
              <li><a href ="/Search"> West Midlands</a></li>
              <li><a href ="/Search"> Worcestershire</a></li>
        </ul>
        </Col>
    <Col>
    <p className="regions">London</p>
            <ul>
              <li><a href ="/Search"> Barking & Dagenham Borough</a></li>
              <li><a href ="/Search"> Barnet Borough</a></li>
              <li><a href ="/Search"> Camden Borough</a></li>
              <li><a href ="/Search"> Croydon Borough</a></li>
              <li><a href ="/Search"> Ealing Borough</a></li>
              <li><a href ="/Search"> Hackney Borough</a></li>
              <li><a href ="/Search"> Hammersmith & Fulham Borough</a></li>
              <li><a href ="/Search"> Kensington & Chelsea Borough</a></li>
        </ul>
    </Col>
  </Row>
</Container>
        </div>
       </>
      
  );
}

export default HomePage
