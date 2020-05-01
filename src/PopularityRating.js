import React from 'react';

function PopularityRating(props) {
    return (
        // Displays popularity based on TMDB aggregate 
        <div className="popularityWrapper">
            <p>Popularity:</p>
            <h4 className="popularityScore">{props.popularity}</h4>
        </div>
    )
}


export default PopularityRating;