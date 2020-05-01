import React from 'react';

function MTRating(props) {
// Checks if each is undefined, returns rating, and bar score if it isn't, returns N/A if it is undefined
    if (props.rating[0] === undefined) {
        return (
            <div className="ratingWrapper">
                <p>Metacritic Rating:</p>
                <div></div>
                <h4 className="ratingNegative">N/A</h4>
            </div>
        )
    } else {
        return (
            <div className="ratingWrapper">
                <h5>Metacritic Rating:</h5>
                <div className="rating">
                    <meter
                        min="0"
                        max="100"
                        optimum="100"
                        low="35"
                        high="70"
                        value={props.rating[0].Value.substring(0, 2)}
                    />
                </div>
                <h4 className="ratingScore">{props.rating[0].Value.substring(0, 2) / 10}</h4>
            </div>
        )
    }
}


export default MTRating;