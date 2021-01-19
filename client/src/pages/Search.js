import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import '../App.css';
import {Button,Container} from "react-bootstrap";
import EggshellsHomepage from "../imagesMain/EggshellsHomepage.svg";

const NurserySearch = ({NurserySearch}) => {
  const [nurseries, setNurseries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [filteredNurseries, setFilteredNurseries] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [result, setResult] = useState([]);
  
  useEffect(() => {

    axios
      .get(`/api/info`)
      .then((res) => {
        setNurseries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(nurseries)

  const onKeyword = () => {
            setFilteredNurseries(
          nurseries.filter(nursery =>
            nursery.name.toLowerCase().includes(keyword.toLowerCase())
          )
        );

if (loading) {
    return 
    <p>Were finding the perfect match for you...</p>
  }
};

  return (
    <>
    <Container className="searchBox">
      <div className="nurseryList"> 
      <h1 className='search'>Search</h1>
      <p className='perfect'>Find the perfect Childcare Provider</p>
      <input
      className='searchContainer'
        type="text"
        placeholder="Search by Name"
        onChange={e => setKeyword(e.target.value)}
      />
      <Button onClick={onKeyword} variant="outline-primary"> Submit </Button>

      {filteredNurseries.length && setHasSearched ? filteredNurseries.map((nursery, index) => (     
        <NurseryDetail key={index} nursery={nursery} /> ))
          : 
          <p>No results found</p>
        }
            </div>
            </Container>
            </>

  )};

  const NurseryDetail = (props) => {
      const { name } = props.nursery;
      return (
        <>
        <ul>
          <li key={props.key}>
          <Link to={{pathname:`/search/${name}`,
          state:{nurseries:props.nursery},}}>{name}</Link>
          </li>
          </ul>
          </>
      )
        }

export default NurserySearch

