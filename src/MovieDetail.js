import React, { Component } from 'react';



class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=90ff126b1ec299be7e4b49625d1071a5&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    const { movie } =this.state;
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

export default MovieDetail;
