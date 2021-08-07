import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

function Search() {
    return (
        <div className="search-wrapper">
            <div className="search-input">
                <SearchIcon />
                <input type="text" id="search" name="search" placeholder="Search for a country ..." />            
            </div>
            <select className="filter-select" name="region" id="region" placeholder="Filter by Region" >
                <option value="">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>      
        </div>
    )
}

export default Search
