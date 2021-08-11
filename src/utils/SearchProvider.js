import {createContext, useState} from 'react';

export const SearchContext = createContext(null)
function SearchProvider({children}) {
    const [searchInput, setSearchInput] = useState('');
    const [filterInput, setFilterInput] = useState('');
    const search = {searchInput, setSearchInput, filterInput, setFilterInput};
    return (
        <SearchContext.Provider value={search}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider
