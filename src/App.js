import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie.js';


const movies =[{
    id: 1,
    title: 'Star Wars',
    desc: 'A friggin movie about space, n yetis, n aliens, n stuff'
  }, {
    id:2,
    title: 'Usual Suspects',
    desc: 'Damn it, Kevin Spacey! We loved you! :('
  }, {
    id: 3,
    title: 'The Red Cliff',
    desc: 'A Kung Fu epic based on a historical legend.'
  }
];

class App extends Component {
  async componentDidMount() {
    try{
      const res = await fetch();
      const movies = await res.json();
      this.setState({
        movies: movies.results
      })

    } catch(e) {
      console.log(e);
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.desc}/>)}
      </div>
    );
  }
}

export default App;
