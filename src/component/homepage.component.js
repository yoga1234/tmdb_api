import React, { Component, Fragment } from 'react';

import Header from './header.component';
import Card from './card.component';
import Pagination from './pagination.component';

const API_KEY = process.env.REACT_APP_API_KEY;

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.pageHandler = this.pageHandler.bind(this);
    this.updateCard = this.updateCard.bind(this);

    this.ENDPOINT_LIST_MOVIE = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
  }
  
  state = {
    movies: [],
    page: 1
  }
  
  pageHandler(page) {
    this.setState({
      page: this.state.page + page
    })
  }

  updateCard() {
    fetch(this.ENDPOINT_LIST_MOVIE+`&page=${this.state.page}`)
    .then(res => res.json())
    .then((data) => {
      this.setState({
        movies: data.results
      }, function() {
        console.log(this.state)
      })
    })
    .catch(console.log)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) {
      this.setState({
        movies: []
      })
      this.updateCard()
    }
  }

  componentDidMount(){
    this.setState({
      movies: []
    })
    this.updateCard()
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Card MovieData={this.state.movies} />
        <Pagination pageNumber={this.state.page} paging={this.pageHandler}/>
      </Fragment>
    )
  }
}

export default Homepage;