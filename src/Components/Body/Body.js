import React from 'react';
import { useEffect, useState } from 'react';
import './Body.css'
import Movie from '../Movie/Movie'

const Body = () => {

    const [movies, setMovies] = useState([]);
    useEffect(() =>{
        fetch('movie-list.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    }, []);

    return (
        <div>
            <div className='body-container'>
                <div className='movies-container'>
                    {
                        movies.map(movie=> <Movie
                        key={movie.id}
                        movie={movie}
                        
                        ></Movie>)

                        
                    }
                </div>
                <div className='watclist-container'>
                    <h1>watchlish</h1>
                </div>
            </div>
        </div>
    );
};

export default Body;