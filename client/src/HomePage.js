import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import userService from './services/userService';

const HomePage = ({HomePage}) => {
  const [info, setinfo] = useState('');
const [feature, setFeature] = useState(null);
const [loading, setLoading] = useState(false);

// useEffect(() => {
//   setLoading(true);

  // useEffect(() => {
  //   if (!feature) {
  //     getfeature();
  //   }
  // });
  

useEffect(async() => {
  let url = `/api/info/5fd893dddac81c0ee471fe92` 
   await axios.get( url, {})
  // .then (res => setFeature(res.data))
  .then (res => console.log(res.data))

  .catch((err) => {
        console.log(err)
        })
})
console.log(info)

    return (
      <>
      <div>
      <h1>Welcome to Eggshells</h1>
  
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
