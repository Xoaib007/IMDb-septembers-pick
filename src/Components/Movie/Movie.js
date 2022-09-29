import React from 'react';
import './Movie.css';

const Movie = (props) => {
    const {name, image, Release, Runtime} = props.movie;
    return (
        <div className='movies'>
            <img src={image} alt=''/>
        </div>
    );
};

export default Movie;