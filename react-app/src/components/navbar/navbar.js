import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import HamburgerMenu from "./hamburger.jsx";
import AuthService from "../auth/auth-service";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.service = new AuthService();
    this.state = { loggedInUser: null }
  }

  logoutUser = () => {
    this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
        this.props.getUser(null);
      })
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
              <img className='search-icon' src='../images/search_icon.svg' alt="search-icon" />
              <input className='search-input' />
            </div>
            <div className='vertical-line' />
            <Link to='#'>
              <div className='avatar' />
            </Link>
            {<Link to='/login' className='login'>Login</Link> && this.state.loggedInUser}
            <Link to='/signup' className='signup'>
              Signup
            </Link>
            <Link to='/'>
              <button onClick={() => this.logoutUser()}>Logout</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;
