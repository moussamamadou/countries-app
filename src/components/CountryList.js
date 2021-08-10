import React, {useState, useEffect} from 'react';
import getCountryData from '../utils/CountriesAPI';
import CountryThumbnail from '../components/CountryThumbnail';

function CountryList() {
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {    
        getCountryData()
        .then(allCountry => {
            const allCountryCleaned = allCountry.map( country => {
                const tempCountry = {
                    'code' : country.alpha3Code,
                    'name' : country.name,
                    'population' : country.population,
                    'region' : country.region,
                    'capital': country.capital,
                    'flag' : country.flag
                };
                return tempCountry;
            });
            console.log(allCountry);
            setCountries(allCountryCleaned);
        });
    }, []);
    
    return (
        <div className="country-list">
            { 
                countries?.map(country => (<CountryThumbnail  country={country} key={country.code}/>))
            }                    
        </div>
    )
}

export default CountryList
