import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import homeMoney from "./images/homeMoney.jpg";
import homeGuide from "./images/homeGuide.jpg";
import './App.css';


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
      <h1>Welcome to Eggshells</h1>
      <Card border="dark" style={{ width: '18rem' }}>
      <Card.Header>Featured</Card.Header>
  <Card.Img variant="top" src={feature.profilePicture} alt="profilePicture" />
  <Card.Body clasName="card">
    <Card.Title>{feature.name}</Card.Title>
    <Card.Text>
    {feature.address}
    </Card.Text>
    <Card.Text className="writeup">
    {feature.writeUp}
    </Card.Text>
    <Button variant="primary">More Info</Button>
  </Card.Body>
</Card>

<Card border="dark" style={{ width: '18rem' }}>
<Card.Header>Featured</Card.Header>
  <Card.Img variant="top" src={feature2.profilePicture} alt="profilePicture" />
  <Card.Body >
    <Card.Title>{feature2.name}</Card.Title>
    <Card.Text>
    {feature2.address}
    </Card.Text>
    <Card.Text className="writeup">
    {feature2.writeUp}
    </Card.Text>
    <Button variant="primary">More Info</Button>
  </Card.Body>
</Card>
       </div>
       <div>
         <p>Check out the latest guides to help picking the perfect childcare provider a little bit easier.</p>
         <img className="homeGuide" src={homeGuide} alt="homeGuide" /> 
         <a href ="/guide">Our Guide to picking the right Childcare Provider</a>
         <img className="homeGuide" src={homeMoney} alt="homeMoney" /> 
         <a href ="/money">Help with Childcare Cost</a>
        
         

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
