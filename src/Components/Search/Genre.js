import React from 'react';

function Genre(props) {
    const finalArray = []
    // First API call provided genre ids, use it to compare and get values using an index provided by second API call
    props.genre.map((genre) => {
        props.genreIndex.genres.map((genreIndex) => {
            if (genre === genreIndex.id) {
               finalArray.push(genreIndex.name)
            }
          return null
        });
        return null
    });
    // Split array into strings and add a comma and space between each
    const finalGenre = finalArray.join(', ')
    return (
      <div>
        <h5 className="genreType">{finalGenre}</h5>
      </div>
    )    
}

export default Genre;