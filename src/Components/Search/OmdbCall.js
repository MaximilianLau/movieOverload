import React, { Component } from 'react';
import axios from 'axios';
import ImdbRating from './ImdbRating.js'
import RTRating from './RTRating.js'
import MTRating from './MTRating.js'
import AggregateRating from './AggregateRating.js'

const API_KEY_EACH = process.env.REACT_APP_OMDB_API_KEY;

class OmdbCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingsArray:[],
      imDB:[],
      rottenTomatoes:[],
      metaCritic:[],
      tmdb: props.tmDBRating,
    }
  }

// Get More Ratings from another Database searching from the Titles that were based down from the parent Component
  componentDidMount() {
    const url = `https://www.omdbapi.com/?apikey=${API_KEY_EACH}=${this.props.moreRatings}`;
    axios({
      method: 'GET',
      url: url,
      dataType: 'json',
    }).then((results) => {
      const ratingCheck = results.data.Ratings;
        this.setState({
          ratingsArray: results.data.Ratings,
          year: results.Year
        })
      // Check if the Rating was valid, or an empty array
      if (ratingCheck !== undefined) {
      // Grab each Rotten Tomatoes score from the query
        const imDB = ratingCheck.filter((IMDB) => {
          return IMDB.Source === "Internet Movie Database"
        })  
      // Grab each IMDB score from the query
        const rT = ratingCheck.filter((rottenTomatoes) => {
          return rottenTomatoes.Source === "Rotten Tomatoes"
        })
      // Grab each Metacritic score from the query
        const mT = ratingCheck.filter((metaCritic) => {
          return metaCritic.Source === "Metacritic"
        })  
      // Set each individual from each website to State so that each child will have their own set of values 
        this.setState({
          imDB: imDB,
          rottenTomatoes: rT,
          metaCritic: mT
        })
      }
     })
    }

  render() {
    return (
      <div>
        <ImdbRating rating={this.state.imDB}/>
        <RTRating rating={this.state.rottenTomatoes}/>
        <MTRating rating={this.state.metaCritic}/>
        <AggregateRating  imdbRating={this.state.imDB} rtRating={this.state.rottenTomatoes} mtRating={this.state.metaCritic} tmdbRating={this.state.tmdb}/>
      </div>
    )
  }
}

export default OmdbCall;