import React from 'react';
import CountryList from '../components/CountryList';
import Search from '../components/Search';

function HomePage() {

    return (
        <main>
            <div className="container">
                <Search />
                <CountryList/>
            </div>            
        </main>
    )
}

export default HomePage
