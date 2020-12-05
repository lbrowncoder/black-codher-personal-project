import React, { useState, useEffect } from 'react';

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
      <li key={info._id}>
        <h3>
          {`${info.name} 
          ${info.address}`}
        </h3>
        <p>{info.postcode}</p>
      </li>
    );
  };

  return (
    <div>
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
