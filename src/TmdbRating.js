import React from 'react';



function TmdbRating(props) {
// Checks if each is undefined, returns rating, and bar score if it isn't, returns N/A if it is undefined
    if (props.rating === undefined || props.rating === 0) {
        return (
            <div className="ratingWrapper">
                <p>MoviesDB Rating:</p>
                <div></div>
                <h4 className="ratingNegative">N/A</h4>
            </div>
        )
    } else
        return (
            <div className="ratingWrapper">
                <h5>MoviesDB Rating:</h5>
                <div className="rating">
                    <meter
                        min="0"
                        max="100"
                        optimum="100"
                        low="35"
                        high="70"
                        value={props.rating * 10}
                    />
                </div>
                <h4 className="ratingScore">{props.rating}</h4>
            </div>
        )
}


export default TmdbRating;