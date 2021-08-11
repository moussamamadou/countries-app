import React from 'react';
import CountryList from '../components/CountryList';
import Search from '../components/Search';
import SearchProvider from '../utils/SearchProvider';

function HomePage() {

    return (
        <main>
            <div className="container">
                <SearchProvider>
                    <Search />
                    <CountryList/>
                </SearchProvider>
            </div>            
        </main>
    )
}

export default HomePage
