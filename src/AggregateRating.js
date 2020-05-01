import React from 'react';

function AggregateRating(props) {

// Format each rating from different website into a (?.?) value
const newIMDB = props.imdbRating.map((help) => {
    return props.imdbRating[0].Value.substring(0,3)
})
const finalIMDB=parseFloat(newIMDB[0])
const newRT = props.rtRating.map((help) => {
    return props.rtRating[0].Value.replace("%", "")/10
})
const finalRT=newRT[0]
const newMeta =props.mtRating.map((help) => {
    return props.mtRating[0].Value.substring(0, 2) / 10
})
const finalMeta=newMeta[0]

// Put all results into an Array
const results = [finalIMDB, finalRT, finalMeta, props.tmdbRating];
// remove all null, NaN values from the array
const filterResults = results.filter((defined) => {
    return (defined)
})
// Find aggregate number rounded to first decimal place
    const sum = filterResults.reduce((a, b) => a + b, 0);
    const aggregate = (sum / filterResults.length).toFixed(1)

    return (
        <div className="aggregate">
            <h3>{aggregate}</h3>
        </div>
   )
}

export default AggregateRating