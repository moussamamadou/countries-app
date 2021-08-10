import React from 'react';
import {Link} from 'react-router-dom';

function CountryThumbnail({country}) {
    return (     
        <>   
            <div className="country-thumbnail">
                <Link to={`/${country.code}`} className="country-link">
                    <img src={`${country.flag}`} alt="USA" className="thumbnail-image"/>
                    <div className="thumbnail-detail">
                        <h3 className="thumbnail-title">{country.name}</h3>
                        <p>Population : <span>{country.population?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span> </p>
                        <p>Region : <span>{country.region}</span></p>
                        <p>Capital : <span>{country.capital}</span> </p>                    
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CountryThumbnail
