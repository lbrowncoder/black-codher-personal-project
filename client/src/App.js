import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm';
import StarRating from './StarRating';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NurserySearch from './Search';


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
           <Router>
           <Route exact path="/search" render={() => (
            <React.Fragment>
            <NurserySearch />
            </React.Fragment> 
        )}/>
        </Router>
      {/* <li key={info._id}>
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
        <StarRating  />
      </li> */}
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
