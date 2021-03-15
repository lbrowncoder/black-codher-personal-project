import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import "../App.css";
import { NavLink } from "react-router-dom";

const footer = ({ footer }) => {
 return (
  <>
   <footer class='footer'>
    <div class='container-fluid'>
     <div class='row'>
      <div class='column'>
       <p className='footerText'> Join the Eggshells Family</p>
       <ul className='footerListOne'>
        <li>
         <a href='/' className='instagram social'>
          <FaInstagram size='30px' />
         </a>
        </li>
        <li>
         <a href='/' className='twitter social'>
          <FaTwitterSquare size='30px' />
         </a>
        </li>
        <li>
         <a href='/' className='facebook social'>
          <FaFacebookSquare size='30px' />
         </a>
        </li>
       </ul>
      </div>
      <div class='column'>
       <p className='footerText'>Guides</p>
       <ul className='footerListTwo'>
        <li>
         <NavLink to='/cost'>Guide to childcare cost </NavLink>
        </li>
        <li>
         <NavLink to='/guide'> Picking the right nursery for you</NavLink>
        </li>
       </ul>
      </div>
      <div className='contactCol'>
       <ul className='footerListThree'>
        <p className='footerText'>Quick links</p>
        <li>
         <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
         <NavLink to='/about'>About</NavLink>
        </li>
        <li>
         <NavLink to='/signupform'>Register Your Nursery</NavLink>
        </li>
        <p className='copyRight'>
         &copy;{new Date().getFullYear()} LB Design- All Rights Reserved
        </p>
       </ul>
      </div>
     </div>
    </div>
   </footer>
  </>
 );
};

export default footer;
