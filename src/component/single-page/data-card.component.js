import React, { Component } from 'react';

class DataCard extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-4">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="placeholder goes here" />  
              </div>
              <div className="col-sm-8">
                <h3>Title will goes here</h3>
                <p className="lead">Tagline will goes here</p>
                <p className="text-muted">Genre, will, goes, here</p>
                <hr />
                <h5>Overview</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, natus praesentium aut ad nihil et voluptas numquam quos tempora eligendi, exercitationem, adipisci placeat? Molestiae ex voluptatem laboriosam placeat molestias id!</p>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="card text-center">
                      <div className="card-header">
                        Rating
                      </div>
                      <div className="card-body">
                        <div className="card-subtitle">
                          8.5
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
                          1.000.000
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
                          1999-99-99
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