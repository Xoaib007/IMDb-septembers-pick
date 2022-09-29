import React, { useState } from 'react';
import './Watchlist.css';

const Watchlist = (props) => {
    const [numbers, setNumbers]= useState([]);

    const {watchlist} = props;
    const target = {a:3, b:5, c:9, d:0};

    let total=0;
    for(const movie of watchlist){
        total= total + movie.Runtime;
    };
    console.log(watchlist)
    localStorage.setItem('number', numbers);
    
    return (
        <div className='watchlist'>
            <div className='name'>
               <h3>Shoaib Rehman</h3>
                <h5>Dhaka,Bangladesh</h5> 
                <h5>Total Movie watched : 178</h5>
            </div>

            <div className='time-spent'>
                <h3>Total time watched<br/><br/> this month: {total} min</h3>
            </div>

            <div  className='target'>
                <h3>Wants to watch</h3>
                <ul>
                    <button onClick={()=> setNumbers(3)}>{target.a}</button>
                    <button onClick={()=> setNumbers(5)}>{target.b}</button>
                    <button onClick={()=> setNumbers(9)}>{target.c}</button>
                    <button onClick={()=> setNumbers(0)}>{target.d}</button>
                </ul>
                <h3>{localStorage.getItem('number')} movie will I watch this month</h3>
            </div>
        </div>
    );
};

export default Watchlist;