import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
class HamburguerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Menu>
        <img src='../images/logo.svg' alt='cinex logotype' />
        <Link id='home' className='nav-hamburger' to='/'>
          Home
        </Link>
        <Link id='about' className='nav-hamburger' to='/about'>
          About
        </Link>
        <Link id='contact' className='nav-hamburger' to='/contact'>
          Contact
        </Link>
        <Link
          onClick={this.showSettings}
          className='nav-hamburger--small'
          to=''
        >
          Settings
        </Link>
      </Menu>
    );
  }
}
export default HamburguerMenu;
