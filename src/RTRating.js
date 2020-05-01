import React from 'react';

function RTRating(props) {
// Checks if each is undefined, returns rating, and bar score if it isn't, returns N/A if it is undefined
    if (props.rating[0] === undefined) {
        return (
            <div className="ratingWrapper">
                <p>RT Rating:</p>
                <div></div>
                <h4 className="ratingNegative">N/A</h4>
            </div>
        )
    } else {
        return (
            <div className="ratingWrapper">
                <h5>RT Rating:</h5>
                <div className="rating">
                    <meter
                        min="0"
                        max="100"
                        optimum="100"
                        low="35"
                        high="70"
                        value={props.rating[0].Value.replace("%", "")}
                    />
                </div>
                <h4 className="ratingScore">{props.rating[0].Value.replace("%", "")/10}</h4>
            </div>
        )
    }
}

export default RTRating;