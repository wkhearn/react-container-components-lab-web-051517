// Code SearchableMovieReviewsContainer Here
import React from 'react'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '45d95bdcf76d45199a0b1d230e73b5b2'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSearchTerm = event => {
    event.preventDefault()
    this.setState({
      searchTerm: event.target.children[0].value
    })
    fetch(URL + this.state.searchTerm)
    .then(res => res.json())
    .then(res => this.setState({ reviews: res.results }))
  }

  componentWillMount(){
    fetch(URL)
    .then(res => res.json())
    .then(res => this.setState({ reviews: res.results }))
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSearchTerm}>
          <input type='text' id='searchTerm'/>
          <input type='submit' value='Submit'/>
        </form>
        <h2>Search for Movies from The NYT:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
