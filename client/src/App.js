import React, { useState} from 'react';
import HomePage from './HomePage';
import ChildCareCost  from './Childcarecost';
import SignUpForm from './SignUp';
import NurserySearch from './Search';
import Footer from './Footer';
import ReviewForm from './ReviewForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Guide from './Guide';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import SearchDetail from './SearchDetail';
import SubmittedForm from './SubmittedForm';
import SearchDetails from './SearchDetail';



const App = () => {
   const [nurseryDetail, setNurseryDetail] = useState();


  return (
          <Router>
             <Switch>
          <Route exact path="/" render={() => (
            <React.Fragment>
            <Navbar />
            <HomePage SearchDetail={SearchDetail} nurseryDetail={nurseryDetail} setNurseryDetail={setNurseryDetail} />
            {/* <NurserySearch /> */}
            <Footer />
            </React.Fragment> 
        )}/>
           <Route exact path="/search" render={() => (
            <React.Fragment>
            <Navbar nurseryDetail={nurseryDetail} setNurseryDetail={setNurseryDetail} />
            <NurserySearch />
            <Footer />
            </React.Fragment> 
        )}/>
            <Route 
            path="/search/:id" render={(props) => (
               <React.Fragment>
               <Navbar />
               <SearchDetail />
               <Footer />
               </React.Fragment>
            )} />
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
            <Route exact path="/submittedForm" render={() => (
            <React.Fragment>
            <Navbar />
            <SubmittedForm />
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
            <Footer />
            </React.Fragment> 
             )}/>
</Switch>

          </Router>
  )
}
 

   ReactDOM.render(<App />,document.getElementById('root'));

export default App;
