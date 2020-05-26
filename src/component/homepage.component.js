import React, { Component, Fragment } from 'react';

import Header from './header.component';
import Card from './card.component';
import Pagination from './pagination.component';

const API_KEY = process.env.REACT_APP_API_KEY;

class Homepage extends Component {

  state = {
    movies: []
  }

  componentDidMount(){
    const ENDPOINT = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    
    fetch(ENDPOINT)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          page: data.page
        })
      })
      .catch(console.log)
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Card MovieData={this.state.movies} />
        <Pagination pageNumber={this.state.page} />
      </Fragment>
    )
  }
}

export default Homepage;