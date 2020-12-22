import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useLocation} from 'react-router-dom'
import {useParams} from "react-router-dom";
import NurserySearch from "./Search";

const SearchDetails = () => {
  const location = useLocation();
  const {nurseries} = location.state

  // useEffect(() => {
  //   const {nurseries} = location.state
  // },[location])

  return (
  <>
  <div>
    <h1>Results</h1>
    <p>{nurseries.name}</p>
    <p>{nurseries.address}</p>
    <p>{nurseries.postcode}</p>
    <p>{nurseries.writeUp}</p>

  </div>
    </>
  )}

export default SearchDetails

