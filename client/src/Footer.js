import React from 'react';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import './Footer.css';




const footer =() => { 
    
    return (
    <>
               <footer class="footer">
                   <div className='socialBox'>
                    <div>
                    <p > Join the Eggshells Family</p>
                    <ul>
                        <li >
                            <a href='/'  className='instagram social'>
                                <FaInstagram size="19.5px"/>
                            </a>
                        </li>
                        <li>
                            <a href='/' className='twitter social'>
                                <FaTwitterSquare size="19.5px"/>
                            </a>
                        </li>
                        <li>
                            <a href='/' className='facebook social'>
                                <FaFacebookSquare size="19.5px" />
                            </a>
                        </li>
                    </ul>
                </div> 
                <div classNmae="links">
                    <p>Quick links</p>
                    <ul className= "links">
                        <li>
                            Guide to childcare cost (add link)
                        </li>
                        <li>
                            Picking the right nursery for you (add link)
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="contact">
                        <li>
                            Contact Us
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Add your nusery to the Eggshells Website
                        </li>
                    </ul>
                </div>
                <p className="copyRight">
                    &copy;{new Date().getFullYear()} LB Desgins- All Rights Reservered</p>
                </div>
        </footer>
                </>
    )}
export default footer