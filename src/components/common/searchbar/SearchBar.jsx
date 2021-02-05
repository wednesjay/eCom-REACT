import React from 'react';

import './SearchBar.css'

function SearchBar () {
    return(
        <div id="searchWrapper">
            <input
                type="text"
                name="searchBar"
                id="searchBar"
                placeholder="SEARCH HERE"
            />
        </div>
    );
}

export default SearchBar;