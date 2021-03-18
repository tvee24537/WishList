import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className='NavbarContainer'>
      <NavLink to='/' className='NavbarLink'>Home</NavLink> 
      <NavLink to='/destinations' className='NavbarLink'>Destinations</NavLink> 
      <NavLink to='/destinations/granted' className='NavbarLink'>Granted Destinations</NavLink> 
      <NavLink to='/destinations/wait-list' className='NavbarLink'>Wait List</NavLink> 
    </div>
  );
};

export default NavBar;