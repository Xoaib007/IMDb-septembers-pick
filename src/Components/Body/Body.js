import React from 'react';
import { useEffect, useState } from 'react';
import './Body.css'
import Movie from '../Movie/Movie'
import Watchlist from '../Watclist/Watchlist';

const Body = () => {

    const addToWatchlist = (Movie) =>{
        console.log(Movie);
        const totalTime = [...watchlist , Movie];
        setWatchlist(totalTime)
    }

    const [movies, setMovies] = useState([]);
    const [watchlist, setWatchlist] = useState([]);

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
                        addToWatchlist={addToWatchlist}
                        ></Movie>)
                    }
                </div>
                <div className='watchlist-container'>
                    <Watchlist></Watchlist>
                    {/* <h1>watchlish</h1>
                    <p>selected movie {watchlist.length}</p> */}
                </div>
            </div>
        </div>
    );
};

export default Body;