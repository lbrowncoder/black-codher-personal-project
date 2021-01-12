import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm';
import StarRating from './StarRating';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NurserySearch from './Search';
import Footer from './Footer';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import ChildCareCost  from './pages/Childcarecost';
import SignUpForm from './SignUp';


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
           <Route exact path="/" render={() => (
            <React.Fragment>
            <Footer />
            </React.Fragment> 
        )}/>
            <Route exact path="/cost" render={() => (
            <React.Fragment>
            <Footer />
            </React.Fragment> 
        )}/>
        </Router>
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
        <StarRating  />
      </li> */}
      </>
    );
  };

  // return (
  //   <div>
            {/* <Header /> */}
           {/* <ReviewForm />
           <SignUpForm />
           <StarRating />
           <HomePage /> */}
          
           {/* <ChildCareCost /> */}
{/*         
           <NurserySearch /> */}
           {/* <Footer /> */}
      {/* <ul>
        {info && info.length > 0 ? (
          info.map((info) => renderInfo(info))
        ) : (
          <p>No info found</p>
        )} */}
      {/* </ul> */}
    // </div>
    

  // );
}

ReactDOM.render(<App />,document.getElementById('root'));

export default App;



const Nursery = (props) => {
    let {name, address, postcode, profilePicture, ofstedRating, website, writeUp, phone,email, fees} = props.info

const NuseryList = (props) => {
    return (
        <div>
            {props.info.map(book => (
               <>
                <nursery key={info.id} StarRating={StarRating} NurserySearch={props.NurserySearch} />
              </>
            ))}
        </div>
     