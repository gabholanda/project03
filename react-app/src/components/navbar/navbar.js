import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import HamburgerMenu from "./hamburger.jsx";
class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className='mobile-show'>
          <HamburgerMenu />
        </div>
        <div className='main-navbar'>
          <Link to='/' className='navbar-brand '>
            <img src='../images/logo.svg' alt='cinex logotype' />
          </Link>
          <div className='right-nav pc-show'>
            <div className='search-bar'>
              <img className='search-icon' src='../images/search_icon.svg' />
              <input className='search-input' />
            </div>
            <div className='vertical-line' />
            <Link to='#'>
              <div className='avatar' />
            </Link>
            <Link to='/login' className='login'>
              Login
            </Link>
            <Link to='/signup' className='signup'>
              Signup
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;
