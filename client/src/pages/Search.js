import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useParams, useMatch} from 'react-router-dom'
import '../App.css';
import {Button} from "react-bootstrap";


const NurserySearch = ({NurserySearch}) => {
  const [nurseries, setNurseries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [filteredNurseries, setFilteredNurseries] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [result, setResult] = useState([]);
  
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/info`)
      
      .then((res) => {
        setNurseries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
      
  }, []);

  const onKeyword = () => {
    setHasSearched(false)
        setFilteredNurseries(
          nurseries.filter(nursery =>
            nursery.name.toLowerCase().includes(keyword.toLowerCase())
          )
        );
      };

//   useEffect(() => {
//     setFilteredNurseries(
//       nurseries.filter((nursery) =>
//         nursery.name.toLowerCase().includes(search.toLowerCase())
//       )
//     );
//   }, [search, nurseries]);

  if (loading) {
    return <p>Were finding the perfect match for you...</p>
  }


  return (
    <>
    <container className="searchBox">
      <div className="nurseryList"> 
      <h1>Search</h1>
      <p>Find the perfect Childcare Provider</p>
      <input
        type="text"
        placeholder="Search by Name"
        onChange={e => setKeyword(e.target.value)}
      />
      <Button onClick={onKeyword} variant="outline-primary"> Submit </Button>

      {filteredNurseries.length && setHasSearched ? filteredNurseries.map((nursery, index) => (     
        <NurseryDetail key={index} nursery={nursery} /> ))
          : <p>No results found</p>}
            </div>
            </container>
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

