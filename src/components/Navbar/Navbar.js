import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className='navbar'>
      <Link to='/resume'>
        <a href='*' id='resume-btn'>Resume</a>
      </Link>
      <Link to='/'>
        <a href='*' id='home-btn'>Home</a>
      </Link>
      <p id='tagline'>"Dont wait to be great to start, <br />but start so you can become great."</p>
    </nav>
  );
} 