import React from 'react';
import './Movie.css';

const Movie = (props) => {
    const {name, image, Release, Runtime} = props.movie;
    return (
        <div className='movies'>
            <img src={image} alt=''/>
            <h1>{name}</h1>
            <h1>{Release}</h1>
            <h1>{Runtime}</h1>
        </div>
    );
};

export default Movie;