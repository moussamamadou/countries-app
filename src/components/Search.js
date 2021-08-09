import React from 'react';
import Select from 'react-select';
import SearchIcon from '@material-ui/icons/Search';

const options = [
    {value: 'All', label: 'All'},
    {value: 'Africa', label: 'Africa'},
    {value: 'Americas', label: 'Americas'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];

function Search() {
    return (
        <div className="search-wrapper">
            <div className="search-input">
                <SearchIcon />
                <input type="text" id="search" name="search" placeholder="Search for a country ..." />            
            </div>
            <div className="search-filter">
        
                <Select options={options} placeholder="Filter by Region"  />  
            </div>
        </div>
    )
}

export default Search
