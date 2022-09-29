import React from 'react';
import './Movie.css';

const Movie = (props) => {
    const {name, image, Release, Runtime} = props.movie;
    return (
        <div>
        <div className='movie'>
            <div>
                <img className='image' src={image} alt=''></img>
            </div>
            
            <div className='movies-info'>
                <p className='movie-name'>{name}</p>
                <p className='movie-date'>Releasing {Release}</p>
                <p className='movie-runtime'>Runtime: {Runtime} min</p>
            </div>
            
            <button className='add-movie-btn'>
                <p>Add to watchlist</p>
            </button>
        </div>
        </div>
    );
};

export default Movie;