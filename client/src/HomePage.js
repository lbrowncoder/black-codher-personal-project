import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useLocation} from 'react-router-dom';

const HomePage = () => {
  const [info, setinfo] = useState('');
const [feature, setFeature] = useState([]);
const [feature2, setFeature2] = useState([]);
const [loading, setLoading] = useState(false);
const [url, setUrl] = useState([]);

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
       <p>{feature.name}</p>
       <p>{feature.address}</p>
       <p>{feature.writeUp}</p>
       <p>{feature2.name}</p>
       <p>{feature2.address}</p>
       <p>{feature2.writeUp}</p>
  
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
