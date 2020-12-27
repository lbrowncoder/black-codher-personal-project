import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import ChildCareCost  from './Childcarecost';
import SignUpForm from './SignUp';
import NurserySearch from './Search';
import Footer from './Footer';
import ReviewForm from './ReviewForm';
import StarRating from './StarRating';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Guide from './Guide';
import Navbar from './Navbar';
import NotFound from './NotFound';
import About from './About';
import Contact from './Contact';
import SearchDetails from './SearchDetail';


// let StarRating = NurserySearch.length ===0
// ? (null) 
// : StarRating

// let ReviewForm = NurserySearch.length ===0
// ? (null) 
// ? ReviewForm

const App = () => {
  return (
          <Router>
             <Switch>
          <Route exact path="/" render={() => (
            <React.Fragment>
            <Navbar />
            <HomePage />
            <NurserySearch />
            <Footer />
            </React.Fragment> 
        )}/>
           <Route exact path="/search" render={() => (
            <React.Fragment>
            <Navbar />
            <NurserySearch />
            <Footer />
            </React.Fragment> 
        )}/>
            <Route exact path="/search/:name" render={() => (
            <React.Fragment>
            <Navbar />
            <SearchDetails />
            <Footer />
            </React.Fragment> 
        )}/>
             <Route exact path="/signup" render={() => (
            <React.Fragment>
            <Navbar />
            <SignUpForm />
            <Footer />
            </React.Fragment> 
             )}/>
             <Route exact path="/childcarecost" render={() => (
            <React.Fragment>
            <Navbar />
           <ChildCareCost />
            <Footer />
            </React.Fragment> 
             )}/>
            <Route exact path="/guide" render={() => (
            <React.Fragment>
            <Navbar />
            <Guide />
            <Footer />
            </React.Fragment> 
             )}/>
            <Route exact path="/about" render={() => (
            <React.Fragment>
            <Navbar />
            <About />
            <Footer />
            </React.Fragment> 
             )}/>
            <Route exact path="/contact" render={() => (
            <React.Fragment>
            <Navbar />
            <Contact />
            <Footer />
            </React.Fragment> 
             )}/>
            <Route exact path="/cost" render={() => (
            <React.Fragment>
            <Navbar />
            <ChildCareCost />
            <Footer />
            </React.Fragment> 
             )}/>
               <Route exact path="/guide" render={() => (
            <React.Fragment>
            <Navbar />
            <Guide />
            <Footer />
            </React.Fragment> 
             )}/>
            <Route exact path="/reviewform" render={() => (
            <React.Fragment>
            <Navbar />
            <ReviewForm />
            <StarRating />
            <Footer />
            </React.Fragment> 
             )}/>
</Switch>

          </Router>
  )
}
 

   ReactDOM.render(<App />,document.getElementById('root'));

export default App;
