import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import HamburgerMenu from './hamburguer'

class Navbar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
        <div className='mobile-show'><HamburgerMenu /></div>
        <div className='main-navbar'>
          <Link to='#' className="navbar-brand ">
            <img src="../images/logo.svg" alt="cinex logotype" />
          </Link>

          <div className='right-nav pc-show'>
            <div className='search-bar'>
              <img className='search-icon' src='../images/search_icon.svg' />
              <input className='search-input'></input>
            </div>

            <div className='vertical-line'></div>
            <Link to='#'>
              <div className='avatar'></div>
            </Link>

            <Link to='#' className='login'>Login</Link>
            <Link to='#' className='signup'>Signup</Link>

          </div>
        </div>

      </>


    )

  }
}

export default Navbar;
