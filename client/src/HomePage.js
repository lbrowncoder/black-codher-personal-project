import React, { useState, useEffect } from 'react';
import axios from 'axios';

// SERVICES
import userService from './services/userService';

function HomePage() {
  const [info, setinfo] = useState(null);

  // useEffect(() => {
  //   if (!info) {
  //     getinfo();
  //   }
  // });

  const getinfo = async () => {
    let res = await userService.getAll();
    setinfo(res);
  };

  // axios.get(/api/feature`)

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
