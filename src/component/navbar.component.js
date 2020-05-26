import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand mb-0 h1">MovieDB</Link>
        </div>
      </nav>
    )
  }
}

export default Navbar;