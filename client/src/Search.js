import React, {useState, useEffect} from 'react';
import axios from 'axios';

const NurserySearch = () => {
        let [nameSearch,getNameSearch] = useState('');
        const [nurseries, setNurseryName] = useState('');
        const [keyword, setKeyword ] = useState('');
     
      
        function handleSearchSubmit(event) {
                event.preventDefault()
        
                axios.get(`/api/info/:name`) //or is it (`/api/info)
                        .then(res => {
                        const filteredResults = nurseries.filter(
                        nursery => nursery.name.includes(keyword));
                        console.log(res)
                        nameSearch(res.data)
                        })
                        .catch(err => {
                        console.log(err)
                        })
}

return (
        <>
                <div>
                  <form onSubmit={(event) => handleSearchSubmit(event)}>
                         <label>
                            Search
                            <input type="text" value={nurseries} onChange={(e) => setNurseryName(e.target.value)} />
                        </label>
                        <button type="submit" onClick={handleSearchSubmit}>Submit</button>
                </form>
                </div>
        </>
)}

export default NurserySearch



//    app.get(`/api/info`, async (req, res) => {
//     const  filteredResults = info.filter
//     (nursery => Info.name.includes(keyword));
//     return res.status(200).send(filteredResults)
//   })
 
// return (
//     <div>
//         <form onSubmit={handleSearchSubmit}>
//         <input type="text" placeholder="Keyword"value={keyword} onChange={(event)=>getNursery(event.target.value)}/>
//             <div>
//                 <p>Search Nuries Near You</p>
//                 <button>Search</button>   
//             </div>
//         </form>
//     </div>

//     )}
// }



