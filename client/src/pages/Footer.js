import React from 'react';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import './Footer.css';
import { NavLink} from 'react-router-dom';

const footer =({footer}) => { 
    
    return (
        <>
            <footer class="footer">
                <div className='socialBox'>
                    <div>
                        <p> Join the Eggshells Family</p>
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
                                    <NavLink to="/cost">Guide to childcare cost </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/guide"> Picking the right nursery for you</NavLink>
                                </li>
                            </ul>
                    </div>
                    <div>
                        <ul className="contact">
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signupform">Register Your Nursery</NavLink>
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