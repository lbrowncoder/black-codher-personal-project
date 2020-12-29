import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Container} from "react-bootstrap";
import homeMoney from "./images/homeMoney.jpg";
import homeGuide from "./images/homeGuide.jpg";
import './HomePage.css';
import NurserySearch from './Search';



const HomePage = () => {
const [feature, setFeature] = useState([]);
const [feature2, setFeature2] = useState([]);



const fetchData = () => {
  const feature1 = `/api/info/5fd893dddac81c0ee471fe92`;
  const feature2= `/api/info/5fd893dddac81c0ee471fe91`

  const getFeature1 = axios.get(feature1)
  const getFeature2 = axios.get(feature2)

  axios.all([getFeature1, getFeature2]).then (
    axios.spread((...allData) => {
      const allDataFeature = allData[0].data
      const getAllFeature1 = allData[1].data

     setFeature(allDataFeature)
     setFeature2(getAllFeature1)
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
      <h2>A Cracking Start To A Life Full Of Adventure</h2>
      <h3>The Newest UK Nursery review website</h3>
      <p>Nurseries Of The Week</p>
      <div className="cardOne">
      <Card border="dark" style={{ width: '18rem' }}>
      <Card.Header>Featured</Card.Header>
  <Card.Img variant="top" src={feature.profilePicture} alt="profilePicture" />
  <Card.Body clasName="card">
    <Card.Title>{feature.name}</Card.Title>
    <Card.Text>
    {feature.address}
    </Card.Text>
    <Card.Text className="writeup">
    Ofstead Rating: {feature.ofsteadRating}
    </Card.Text>
    <Button className="moreInfoBtn" variant="primary">More Info</Button>
  </Card.Body>
</Card>
</div>
<div>
<Card border="dark" style={{ width: '18rem' }}>
<Card.Header>Featured</Card.Header>
  <Card.Img variant="top" src={feature2.profilePicture} alt="profilePicture" />
  <Card.Body >
    <Card.Title>{feature2.name}</Card.Title>
    <Card.Text>
    {feature2.address}
    </Card.Text>
    <Card.Text className="writeup">
    Ofstead Rating: {feature2.ofsteadRating}
    </Card.Text>
    <Button className="moreInfoBtnTwo" variant="primary">More Info</Button>
  </Card.Body>
</Card>
</div>
<div>{NurserySearch}</div>
       </div>
       <div>
         <p className="checkOut">Check out the latest guides to make picking the perfect childcare provider a little bit easier.</p>
         <img className="homeGuide" src={homeGuide} alt="homeGuide" /> 
         <a href ="/guide" className="pick">Our Guide to picking the right Childcare Provider</a>
         <img className="homeGuide" src={homeMoney} alt="homeMoney" /> 
         <a href ="/money" className="helpCost">Help with Childcare Cost</a>
        </div>
        <div>
        <Container>
        <p>Search by Counties </p>
        <Row>
    <Col>
    <p>East Midlands</p>
            <ul>
              <li><a href ="/Search"> Derbyshire</a></li>
              <li><a href ="/Search"> Leicestershire</a></li>
              <li><a href ="/Search"> Northamptonshire</a></li>
              <li><a href ="/Search"> Nottinghamshire</a></li>
        </ul>
        </Col>
    <Col>
    <p>West Midlands</p>
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
    <p>London</p>
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



{/* <li key={info._id}>
        <h2>
          {info.nurseryName} 
        </h2>
          <h3>
          {info.address}
        </h3>
        <p>{info.postcode}</p>
        <p> Ofstead Rating: {info.ofsteadRating}</p>
        <p>Opening Hours:{`${info.openingHours}`} </p>
        <p>Opening Times: {info.openingTimes}</p>
      </li>
      </>
    );
  };

  return (
    <div>
        {info && info.length > 0 ? (
          info.map((info) => renderInfo(info))
        ) : (
          <p>No info found</p>
        )}
    </div>
     */}
