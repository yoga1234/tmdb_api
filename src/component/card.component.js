import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w185/';
    return (
      <div className="container">
      <h1>Popular Movies</h1>
      <div className="row justify-content-center">
        {this.props.MovieData.map((movie) => (
          <div className="col-sm-3 mb-3" key={movie.id}>
            <div className="card">
              <img src={IMAGE_URL + movie.poster_path} className="card-img-top" alt={movie.title + 'placeholder'} />
              <div className="card-body">
                <h5 className="card-title text-truncate">{movie.title}</h5>
                <p className="card-text text-truncate">{movie.overview}</p>
                <Link to="/single-page" className="btn btn-primary">Detail</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
  };
}

export default Card;