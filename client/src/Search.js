import React, {useState, useEffect} from 'react';
import axios from 'axios';

const NurserySearch = () => {
    let [nameSearch,getNameSearch] = useState([]);

    function handleSearchSubmit(event) {
        event.preventDefault ();

        axios.get("api/blogs/" + this.state.pageIndex + "/10").then(res => {
            res.filter(function(author) {
              return author.firstName === this.state.query;
            });
          });
    }
    useEffect(() => {
    

return (
    <>
    <div>
        <form onSubmit={handleSearchSubmit}>
            <div className="allSearch">
                <p className="searchText">Search by Author or Title</p>
                <div className="searchTabel">
    </div>
    </>



export default NurserySearch