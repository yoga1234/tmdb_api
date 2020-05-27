import React, { Component } from 'react';

class DataCard extends Component {

  render() {
    let movieData = this.props.movieSingle;
    const IMAGE_URL = "https://image.tmdb.org/t/p/w185"
    const genresItems = movieData.genres ? movieData.genres.map((genre) =>
      <span>{genre.name + " | "}</span>
    ) : [];

    return (
      <div className="container mt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-4">
                <img src={IMAGE_URL + movieData.poster_path} className="card-img-top" alt="placeholder goes here" />  
              </div>
              <div className="col-sm-8">
                <h3>{movieData.title}</h3>
                <p className="lead">{movieData.tagline}</p>
                <p className="text-muted">
                  {
                    genresItems
                  }
                </p>
                <hr />
                <h5>Overview</h5>
                <p>{movieData.overview}</p>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="card text-center">
                      <div className="card-header">
                        Rating
                      </div>
                      <div className="card-body">
                        <div className="card-subtitle">
                          {movieData.vote_average}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card text-center">
                      <div className="card-header">
                        Popularity
                      </div>
                      <div className="card-body">
                        <div className="card-subtitle">
                          {movieData.popularity}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card text-center">
                      <div className="card-header">
                        Release
                      </div>
                      <div className="card-body">
                        <div className="card-subtitle">
                          {movieData.release_date}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DataCard;