import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => (
  <div>
    <h3>{props.movie.title}</h3>
  </div>
);


export default Movie;



// static propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string.isRequired
//   }),
// }
