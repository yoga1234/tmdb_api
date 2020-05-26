import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class Back extends Component {
  render() {
    return (
      <div className="container mt-5">        
        <Link to="/" type="button" className="btn btn-lg btn-outline-info">Go Back</Link>
      </div>
    )
  }
}

export default Back;