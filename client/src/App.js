import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import ChildCareCost  from './Childcarecost';
import SignUpForm from './SignUp';
import NurserySearch from './Search';
import Footer from './Footer';
import ReviewForm from './ReviewForm';
import StarRating from './StarRating';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Guide from './Guide';

// let StarRating = NurserySearch.length ===0
// ? (null) 
// : StarRating

// let ReviewForm = NurserySearch.length ===0
// ? (null) 
// ? ReviewForm

function App() {
  return (
      <main>
          <Router>
          <Route exact path="/" render={() => (
            <React.Fragment>
            <HomePage />
            <NurserySearch />
            {/* <StarRating />
            <ReviewForm /> */}
            <Footer />
            </React.Fragment> 
        )}/>
           <Route exact path="/search" render={() => (
            <React.Fragment>
            <HomePage />
            <NurserySearch />
            <Footer />
            </React.Fragment> 
             )}/>
             <Route exact path="/signup" render={() => (
            <React.Fragment>
            <SignUpForm />
            <Footer />
            </React.Fragment> 
             )}/>
             <Route exact path="/childcarecost" render={() => (
            <React.Fragment>
           <ChildCareCost />
            <Footer />
            </React.Fragment> 
             )}/>
             <Route exact path="/signup" render={() => (
            <React.Fragment>
            <SignUpForm />
            <Footer />
            </React.Fragment> 
             )}/>
            <Route exact path="/guide" render={() => (
            <React.Fragment>
            <Guide />
            <Footer />
            </React.Fragment> 
             )}/>

          </Router>
      </main>
  )
}
 

   ReactDOM.render(<App />,document.getElementById('root'));

export default App;
