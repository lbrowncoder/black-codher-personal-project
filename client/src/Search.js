import React, { useState, useEffect } from "react";
import axios from "axios";

function NurserySearch() {
  const [nurseries, setNurseries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [filteredNurseries, setFilteredNurseries] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

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
    setHasSearched(true)
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
    return <p>Were finding the perfect match for you...</p>;
  }


  return (
    <>
      <div>
      <h1>Nursery List</h1>
      <p>Search by name</p>
      <input
        type="text"
        placeholder="Search Nurseries"
        onChange={e => setKeyword(e.target.value)}
      />
      <button onClick={onKeyword} >Search</button>

      {filteredNurseries.length && hasSearched(false) ? filteredNurseries.map((nursery, index) => (   
        <NurseryDetail key={index} {...nursery} /> ))
          :  <p>No results found</p>}
          {/* : null ? } */}

        
            </div>
            </>
  );
}
       

const NurseryDetail = (props) => {
  const { name } = props;
  const {address} = props;
  const {postcode} = props;
  const {writeUp} = props;
  const {ofsteadRating}= props;

  return (
    <>
        
      <p>{name}</p>
      <p>{address}</p>
      <p>{postcode}</p>
      <p>{writeUp}</p>
      <p>Ofstead Rating: {ofsteadRating}</p>
    </>
  );
};


export default NurserySearch
