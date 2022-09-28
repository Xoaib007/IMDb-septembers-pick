import React from 'react';
import Movies from './Movies/Movies'
import './Body.css'

const Body = () => {
    return (
        <div>
            <div className='body-container'>
                <div className='movies-container'>
                    <Movies></Movies>
                </div>
                <div className='watclist-container'>

                </div>
            </div>
        </div>
    );
};

export default Body;