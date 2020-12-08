import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm';

// SERVICES
import userService from './services/userService';

function App() {
  const [info, setinfo] = useState(null);

  

           
  useEffect(() => {
    if (!info) {
      getinfo();
    }
  });

  const getinfo = async () => {
    let res = await userService.getAll();
    setinfo(res);
  };



  const renderInfo = (info) => {
    return (
      <>
      <li key={info._id}>
        <h2>
          {info.name} 
        </h2>
          <h3>
          {info.address}
        </h3>
        <p>{info.postcode}</p>
        <p> Ofstead Rating: {info.ofsteadRating}</p>
        <p>Opening Hours:{`${info.openingHours}`} </p>
        <p>Opening Times: {info.openingTimes}</p>
        <p>{info.writeUp}</p>
        <p>{`$info.firstAidTrained`}</p>
      </li>
      </>
    );
  };

  return (
    <div>
           <ReviewForm />
      <ul>
        {info && info.length > 0 ? (
          info.map((info) => renderInfo(info))
        ) : (
          <p>No info found</p>
        )}
      </ul>
    </div>

  );
}

export default App;
