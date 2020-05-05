import React from 'react';
import './search.style.css';

export const Search = ({ placeholder, evHandle }) => (
    <div className="search-container">
        <input
            className="search"
            type="search" 
            placeholder={ placeholder }
            onChange={ evHandle }>
        </input>
        
    </div>
)