import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/resume'>Resume</Link>
    </nav>
  );
} 