import React, {useContext} from 'react';
import Select from 'react-select';
import SearchIcon from '@material-ui/icons/Search';
import { SearchContext } from '../utils/SearchProvider';

const options = [
    {value: 'All', label: 'All'},
    {value: 'Africa', label: 'Africa'},
    {value: 'Americas', label: 'Americas'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];

function Search() {
    const {searchInput, setSearchInput, setFilterInput} = useContext(SearchContext);
    return (
        <div className="search-wrapper">

            <div className="search-input">
                <SearchIcon />
                <input 
                    type="text" 
                    id="search" 
                    name="search" 
                    placeholder="Search for a country ..." 
                    value ={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                />          
            </div>
            <div className="search-filter">          
                <Select 
                    options={options} 
                    placeholder="Filter by Region"
                    onChange={e => setFilterInput(e.value)} 
                />   
            </div>
        </div>
    )
}

export default Search
