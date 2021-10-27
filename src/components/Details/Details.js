import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'; 
import './Details.css'

function Details(props) {
    const history = useHistory();    
    const [item, setItem] = useState({});

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=32f198a53386efa8a1a37bff795524f3&language=en-US`)
        .then(res => {
            setItem(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    
    return (
        <div className='aboutFilm'>
            <div className='titleContainer'><h1>about film</h1></div>
            <div className='filmInfo'>
                <div className="filmTitle margin"><h2>{item.original_title}</h2></div>
                <div className='poster'>
                    <div className="filmImage"> <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} /> </div>
                    <div className='filmDetails'>
                        <div className="filmOverview">
                             <span className='strong'>Overview:</span> {item.overview} 
                        </div>
                        <div className="filmBudget margin">
                             <span className='strong'>Budget:</span> {item.budget}$ 
                        </div>
                        <div className="filmRelease margin">
                             <span className='strong'>Release:</span> {item.release_date}
                        </div>
                        <div className="filmRaiting margin">
                            <span className='strong'>Average raiting</span> {item.vote_average} 
                        </div>
                        <div className="filmLanguage margin">
                            <span className='strong'>Original language: </span> {item.original_language} 
                        </div>
                        <div className="filmHomePage margin">
                            <span className='strong'>Home page: </span> <a href={item.homepage}>{item.homepage}</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
