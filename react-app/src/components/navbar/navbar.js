import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);

  }


  
  render() {
      return (
        <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to > <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma" width="112" height="28" /></Link>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" />
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </div>
        </nav>
        </div>
      )

  }
}

export default Navbar;
