import React from 'react';
import {Link} from 'react-router-dom';

function CountryThumbnail() {
    return (        
        <div className="country-thumbnail">
            <Link to="/fra" className="country-link">
                <img src="https://restcountries.eu/data/usa.svg " alt="USA" className="thumbnail-image"/>
                <div className="thumbnail-detail">
                    <h3 className="thumbnail-title">United States of America</h3>
                    <p>Population: 323,947,000</p>
                    <p>Region: Americas</p>
                    <p>Capital: Washington, D.C.</p>                    
                </div>
            </Link>
        </div>
    )
}

export default CountryThumbnail
