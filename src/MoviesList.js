import React, { Component } from 'react';
import Movie from './Movie';


class MoviesList extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=90ff126b1ec299be7e4b49625d1071a5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=');
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default MoviesList;
