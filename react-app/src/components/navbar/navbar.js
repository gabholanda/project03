import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
// import HamburgerMenu from "./hamburger.jsx";
import AuthService from "../auth/auth-service";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.service = new AuthService();
    this.state = { loggedInUser: null };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
    });
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <>
          {/* <HamburguerMenu/> */}
          <div className='main-navbar'>
            <Link to='/' className='navbar-brand '>
              <img src='../images/logo.svg' alt='cinex logotype' />
            </Link>
            <div className='right-nav pc-show'>
              <div className='search-bar'>
                <img
                  className='search-icon'
                  src='../images/search_icon.svg'
                  alt='search-icon'
                />
                <input className='search-input' />
              </div>
              <div className='vertical-line' />
              <Link to='/usuario/perfil'>
                <div className='avatar' />
              </Link>
              <Link to='/'>
                <button className='logout'onClick={() => this.logoutUser()}>Logout</button>
              </Link>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          {/* <div className='mobile-show'>
            <HamburgerMenu />
          </div> */}
          <div className='main-navbar'>
            <Link to='/' className='navbar-brand '>
              <img src='../images/logo.svg' alt='cinex logotype' />
            </Link>
            <div className='right-nav pc-show'>
              <div className='search-bar'>
                <img
                  className='search-icon'
                  src='../images/search_icon.svg'
                  alt='search-icon'
                />
                <input className='search-input' />
              </div>
              <div className='vertical-line' />
              <Link to='#'>
                <div className='avatar' />
              </Link>
              <Link to='/login' className='login' style={{textDecoration:'none'}}>
                Login
              </Link>
              <Link to='/signup' className='signup' style={{textDecoration:'none'}}>
                Signup
              </Link>
            </div>
          </div>
        </>
      );
    }
  }
}
export default Navbar;
