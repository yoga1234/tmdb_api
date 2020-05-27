import React, { Component } from 'react';

import Back from './single-page/back.component';
import DataCard from './single-page/data-card.component';

const API_KEY = process.env.REACT_APP_API_KEY;

class SingleComponent extends Component {
  
  state = {
    movieSingle: []
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    const ENDPOINT_SINGLE_MOVIE = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

    fetch(ENDPOINT_SINGLE_MOVIE)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          movieSingle: data
        })
      })
      .catch(console.log);
  }


  render() {
    return (
      <div>
        <Back />
        <DataCard movieSingle={this.state.movieSingle} />
      </div>
    )
  }
}

export default SingleComponent;