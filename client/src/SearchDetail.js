import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'


const SearchDetails = ({match}) => {
 
  useEffect(() => {
    fetchResult();
  }, []);

  const [result, setResult] = useState({});
  

  const fetchResult =  async () => {
    const fetchResult = await fetch(`/api/info`)
    const result = await fetchResult.json();
    setResult(result)

  }
 
  return (
  <>
  <div>
    <h1>Results</h1>
        {/* <p>{address}</p>
      <p>{result.postcode}</p>
      <p>{result.writeUp}</p>
      <p>Ofstead Rating: {result.ofsteadRating}</p> */}
  </div>
    </>

  )};

export default SearchDetails

