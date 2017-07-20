// Code MovieReviews Here
import React from 'react'

const Review = ({display_title, publication_date, headline, summary_short, link}) => {
  return (
    <div className="review">
      <h4 className="display_title">{display_title}</h4>
      <p className="publication_date">{publication_date}</p>
      <p className="headline">{headline}</p>
      <p className="summary_short">{summary_short}</p>
      <a className="link" href={link.url} target='_blank'>View Review</a>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return <div className="review-list">{reviews.map(Review)}</div>
}

// render() {
//     const reviews = this.state.reviews
//     return (
//       <div className="review-list">
//         <div className="review">
//         reviews.map(review => {
//           <h2 className="title">{props.display_title}</h2>
//           <p className="publication_date">{props.publication_date}</p>
//           <p className="headline">{props.headline}</p>
//           <p className="summary_short">{props.summary_short}</p>
//           <a className="link" href={props.link.url}>View Review</a>
//         })
//         </div>
//       </div>
//     )
//   }

MovieReviews.defaultProps = {reviews: []}


export default MovieReviews
