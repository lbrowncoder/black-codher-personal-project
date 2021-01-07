import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, Redirect } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import './Navbar.css';
import { IconContext } from 'react-icons';
import * as VscIcons from 'react-icons/vsc';

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
 

  return (
    <>
      <IconContext.Provider value={{ color: '#8B008B' }}>
        <div className='navbar'>
        <VscIcons.VscThreeBars className='bars'size="2rem" onClick={showSidebar} />
          <Link to={{pathname: '#', state: {from: props.location}}} className='menu-bars' />   
          <Link to='/'>
          <AiIcons.AiFillHome size="2rem" />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to={{pathname: '#', state: {from: props.location}}}  className='menu-bars' />
                <AiIcons.AiOutlineClose />
            </li>
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;