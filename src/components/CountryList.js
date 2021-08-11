import React, {useState, useEffect, useRef, useContext} from 'react';
import getCountryData from '../utils/CountriesAPI';
import CountryThumbnail from '../components/CountryThumbnail';
import {SearchContext} from '../utils/SearchProvider';
import LoopIcon from '@material-ui/icons/Loop';

function CountryList() {
    let countriesUnfiltered = useRef([]);
    const [countries, setCountries] = useState([]);
    const {searchInput, filterInput} = useContext(SearchContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {   
        if(localStorage.getItem('countries')){
            countriesUnfiltered.current = [...JSON.parse(localStorage.getItem('countries'))];
            setCountries(JSON.parse(localStorage.getItem('countries')));
            setIsLoading(false);
        } else{
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
                countriesUnfiltered.current = [...allCountryCleaned];
                setCountries(allCountryCleaned);
                localStorage.setItem('countries', JSON.stringify(allCountryCleaned));
                setIsLoading(false);
    
            });
        }
    }, []);
    useEffect(() => {
        
            let tempCountries = countriesUnfiltered.current.filter( c => {
                if (c.name.toLowerCase().includes(searchInput.toLowerCase())) {
                    if(filterInput === '' || filterInput ==='All'){
                        return true;
                    }else{
                        if(c.region === filterInput){
                            return true;
                        }else{
                            return false;
                        }
                    }
                }else {
                    return false;
                }
            })
            setCountries(tempCountries);

    }, [searchInput, filterInput]);
    
    return (
        <div className="country-list">
            {   isLoading ? 
                    <div className="is-loading"><LoopIcon/> </div>               
                    :
                    countries.length === 0 ? <div className="no-country"> '👩🏻‍💻 Try again. You might find it 👨🏻‍💻'</div> : countries?.map(country => (<CountryThumbnail  country={country} key={country.code}/>))
            }
        </div>                   
        
    )
}

export default CountryList
