import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '45d95bdcf76d45199a0b1d230e73b5b2';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      reviews: []
    }
  }

  componentWillMount(){
    fetch(URL)
    .then(resp => resp.json())
    .then(resp => this.setState({ reviews: resp.results }))
  }

  render(){
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews from The NYT:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
