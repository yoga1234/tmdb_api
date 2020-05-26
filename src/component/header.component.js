import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">The only movie database</h1>
          <p className="lead">Find your movie detail here and it is FREE!!  </p>
        </div>
      </div>
    )
  }
}

export default Header;