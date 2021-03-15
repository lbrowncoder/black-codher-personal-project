import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import ChildCareCost from "./pages/Childcarecost";
import SignUpForm from "./pages/SignUp";
import NurserySearch from "./pages/Search";
import Footer from "./pages/Footer";
import ReviewForm from "./pages/ReviewForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Guide from "./pages/Guide";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SearchDetail from "./pages/SearchDetail";
import SubmittedForm from "./pages/SubmittedForm";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import CustomerSignUp from "./pages/CustomerSignUp";

const App = () => {
 const [nurseryDetail, setNurseryDetail] = useState();

 return (
  <Router>
   <Switch>
    <Route
     exact
     path='/'
     render={() => (
      <React.Fragment>
       <ScrollToTop />
       <Navbar />
       <HomePage
        SearchDetail={SearchDetail}
        nurseryDetail={nurseryDetail}
        setNurseryDetail={setNurseryDetail}
       />
       <Footer />
      </React.Fragment>
     )}
    />
    <Route
     exact
     path='/search'
     render={() => (
      <React.Fragment>
       <ScrollToTop />
       <Navbar
        nurseryDetail={nurseryDetail}
        setNurseryDetail={setNurseryDetail}
       />
       <NurserySearch />
       <Footer />
      </React.Fragment>
     )}
    />
    <Route
     path='/search/:name'
     render={(props) => (
      <React.Fragment>
       <ScrollToTop />
       <Navbar />
       <SearchDetail />
       <Footer />
      </React.Fragment>
     )}
    />
    <Route
     exact
     path='/signupform'
     render={() => (
      <React.Fragment>
       <ScrollToTop />
       <Navbar />
       <SignUpForm />
       <Footer />
      </React.Fragment>
     )}
    />
    <Route
     exact
     path='/childcarecost'
     render={() => (
      <React.Fragment>
       <ScrollToTop />
       <Navbar />
       <ChildCareCost />
       <Footer />
      </React.Fragment>
     )}
    />
    <Route
     exact
     path='/guide'
     render={() => (
      <React.Fragment>
       <ScrollToTop />
       <Navbar />
       <Guide />
       <Footer />
      </React.Fragment>
     )}
    />
    <Route
     exact
     path='/about'
     render={() => (
      <React.Fragment>
       <ScrollToTop />
       <Navbar />
       <About />
       <Footer />
      </React.Fragment>
     )}
    />
    <Route
     exact
     path='/contact'
     render={() => (
      <React.Fragment>
       <ScrollToTop />
       <Navbar />
       <Contact />
       <Footer />
      </React.Fragment>
     )}
    />
    <Route
     exact
     path='/submittedForm'
     render={() => (
      <React.Fragment>
       <ScrollToTop />
       <Navbar />
       <SubmittedForm />
       <Footer />
      </React.Fragment>
     )}
    />
    <Route
     exact
     path='/cost'
     render={() => (
      <React.Fragment>
       <ScrollToTop />
       <Navbar />
       <ChildCareCost />
       <Footer />
      </React.Fragment>
     )}
    />
    <Route
     exact
     path='/guide'
     render={() => (
      <React.Fragment>
       <ScrollToTop />
       <Navbar />
       <Guide />
       <Footer />
      </React.Fragment>
     )}
    />
    <Route
     exact
     path='/reviewform'
     render={() => (
      <React.Fragment>
       <ScrollToTop />
       <Navbar />
       <ReviewForm />
       <Footer />
      </React.Fragment>
     )}
    />
    <Route
     exact
     path='/login'
     render={() => (
      <React.Fragment>
       <ScrollToTop />
       <Navbar />
       <Login />
       <Footer />
      </React.Fragment>
     )}
    />
    <Route
     exact
     path='/signup'
     render={() => (
      <React.Fragment>
       <ScrollToTop />
       <Navbar />
       <CustomerSignUp />
       <Footer />
      </React.Fragment>
     )}
    />
    <Route
     exact
     path='/profile'
     render={() => (
      <React.Fragment>
       <ScrollToTop />
       <Navbar />
       <Profile />
       <Footer />
      </React.Fragment>
     )}
    />
   </Switch>
  </Router>
 );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
