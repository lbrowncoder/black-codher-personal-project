import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = ({HomePage}) => {
  const [info, setinfo] = useState('');
const [feature, setFeature] = useState(null);


  // useEffect(() => {
  //   if (!info) {
  //     getinfo();
  //   }
  // });

  // const getinfo = async () => {
  //   let res = await userService.getAll();
  //   setinfo(res);
  // };

useEffect(async() => {
   await axios.get(`/api/info`, {
    params: {
      id:("5fd893dddac81c0ee471fe92"), 
      _id: ("5fd893dddac`81c0ee471fe91")
    }
  })
  .then (res => setFeature(res.data))

  .catch((err) => {
        console.log(err)
        })
})
console.log(info)

    return (
      <>
      <div>
      <h1>Welcome to Eggshells</h1>

        {/* <h2>
          {info.map}{info.id} 
          </h2> */}
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
