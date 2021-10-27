import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './General.css'
import { Link } from 'react-router-dom';

function General() {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=32f198a53386efa8a1a37bff795524f3')
        .then(res => {
            setItems(res.data.results)
        })
        .catch(err => {
            console.log(err);
        })
        
    }, [])

    const filtered = items.filter(item => {
        return item.original_title.toLowerCase().includes(search.toLowerCase())
    });

    return (
        <div className='container'>
            <div className='titleContainer'><h1>Top 20</h1></div>
            <div className='inputContainer'>
                <input type='text' className='searchInput' placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className='films'>
                {items && filtered.map(item => 
                    <Link to={`/details/${item.id}`} key={item.id}>
                        <div key={item.id} className='film'>
                            <div className="image"><img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} /></div>
                            <div className='title'>{item.original_title}</div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default General
