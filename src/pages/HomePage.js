import React from 'react'
import CountryThumbnail from '../components/CountryThumbnail'
import Search from '../components/Search'

function HomePage() {
    return (
        <main>
            <div className="container">
                <Search />
                <div className="country-list">
                    <CountryThumbnail />
                </div>
            </div>            
        </main>
    )
}

export default HomePage
