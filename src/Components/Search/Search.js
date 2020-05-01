import React, { Component } from 'react';
import axios from 'axios';
import OmdbCall from './OmdbCall.js'
import Image from './Image.js'
import TmdbRating from './TmdbRating.js'
import PopularityRating from './PopularityRating.js'
import { RiSearchEyeLine } from 'react-icons/ri'
import Fade from 'react-reveal/Fade';
import Genre from './Genre.js';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      userInput: '',
      userSubmit:'',
      moviesArray:[],
      genreArray:[]
    }
  }
  // Submit adds function into state submit, resets user input, and then calls api with the submitted query
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
    userSubmit: this.state.userInput
    })
    if (this.state.userInput !== "") {
      this.setState({
        userInput: ''
      }, () => this.performSearch()) 
    }
  }

  // Axios API call for Movie Information. Saves it to this.state.moviesArray
  performSearch = () =>{
      const url = `https://api.themoviedb.org/3/search/movie?api_key=4e34e370c74f17cdb9f681afc05efa93&query=${this.state.userSubmit}&page=1`;
    axios ({
    method: 'GET',
    url: url,
    dataType: 'json',
     }).then((results) => {
    this.setState({
      moviesArray: results.data.results
    })
  })
  // Second Axios API call to get a genre Index because the main API only gives a number for genre value. Saves it into this.state.genreArray
      axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/genre/movie/list?api_key=4e34e370c74f17cdb9f681afc05efa93&language=en-US`,
        dataType: 'json',
      }).then((results2) => {
        this.setState({
          genreArray: results2.data
        })
      })
  }
  
  handleUserInput = (event) => { 
    //Stores user-input form the search bar into this.state.userInput
    this.setState({
      userInput: event.target.value,
    })
  }
  render() {
    return (
      <>
        <div className="wrapper">
          <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="movieName" className="visuallyHidden">enter movie name:</label>
            <input type="text" id="movieName" name="movieName" placeholder="OVER here!" value={this.state.userInput}
            onChange={this.handleUserInput}/> 
            <button type="submit" id="movieButton"><RiSearchEyeLine /></button>
          </form>
        </div>

          <ul className="movieResults">
          {this.state.moviesArray.map((moviesList) => {
            return (
              <Fade bottom key={moviesList.id}>
              <li className="movieEach">
              <Image image={moviesList.backdrop_path} title={moviesList.original_title}/>
                <div>
                <h2>{moviesList.original_title.toUpperCase()} 
                ({ moviesList.release_date === undefined 
                ? <p>N/A</p>
                 : moviesList.release_date.substring(0, 4)}) </h2>
                  <Genre genre={moviesList.genre_ids} genreIndex={this.state.genreArray}/>
                  <PopularityRating popularity={moviesList.popularity}/>
                  <TmdbRating rating= {moviesList.vote_average}/>
                  <OmdbCall moreRatings={moviesList.original_title} tmDBRating={moviesList.vote_average}/>
                </div>
              </li>
              </Fade>
            )
          })}
        </ul>
      </>
    )
  }
}


export default Search;