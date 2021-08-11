import React, {useState, useEffect}  from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import getCountryData from '../utils/CountriesAPI';
import LoopIcon from '@material-ui/icons/Loop';

function CountryPage() {
    const {code} = useParams();
    const history = useHistory();

    const [country, setCountry] = useState([]);
    const [topLevelDomain, setTopLevelDomain] = useState([]);
    const [currencies, setCurrencies] = useState('');
    const [languages, setLanguages] = useState('');
    const [borders, setBorders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCountry, setIsCountry] = useState(true);
    
    useEffect(() => {    
        getCountryData(code)
        .then(oneCountry => {
            try {
                let tempCurrency = '';
                let templanguage = '';
                const countryCleaned ={
                        'code' : oneCountry.alpha3Code,
                        'name' : oneCountry.name,
                        'population' : oneCountry.population,
                        'region' : oneCountry.region,
                        'capital': oneCountry.capital,
                        'flag' : oneCountry.flag,
                        'nativeName' : oneCountry.nativeName,
                        'subRegion' : oneCountry.subregion,
                    }; 
                oneCountry.currencies?.forEach((e,i) => {if(i > 0){tempCurrency += ', '; } tempCurrency += e.name;});            
                oneCountry.languages?.forEach((e,i) => {if (i > 0){templanguage += ', '; } templanguage += e.name;});
                 
                setTopLevelDomain(oneCountry.topLevelDomain?.toString());
                setBorders(oneCountry.borders);
                setCurrencies(tempCurrency);
                setLanguages(templanguage);
                setCountry(countryCleaned);
                setIsLoading(false);
            }catch{
                setIsLoading(false);
                setIsCountry(false);
            }
        });
    }, [code]);
    
    return (
        <main>
            <div className='container'>
                <div className='btn-container'>
                    <button onClick={() => {history.goBack()}} className='btn-previous'><ArrowBackIcon /> Back</button>
                </div>
                {isLoading ? 
                    <div className="is-loading"><LoopIcon/> </div>               
                    :
                    <div className='country-wrapper'>
                        { !isCountry ? 
                        <div className="no-country">👻 This country is a myth. 👽</div>
                        :
                        <>
                            <div className='country-image'>
                                <img src={`${country.flag}`} alt='France' />
                            </div>
                            <div className='country-details'>
                            <h2 className='country-title'>{country.name}</h2>
                            <div className='country-infos'>
                                <div className="info-first">
                                    <p >Native Name : <span>{country.nativeName}</span> <br /> </p>
                                    <p >Population : <span>{country.population?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span> <br /></p>
                                    <p >Region : <span>{country.region}</span> <br /></p>
                                    <p >Sub Region : <span>{country.subRegion}</span> <br /></p>
                                    <p >Capital : <span>{country.capital}</span> <br /></p>
                                </div>
                                <div className="info-second">
                                    <p >Top Level Domain : <span> {topLevelDomain}</span> <br /> </p>
                                    <p >Currencies:<span> {currencies}</span><br /> </p>
                                    <p >Languages:<span> {languages}</span>  <br /></p>
                                </div>
                            </div>
                            <div className='country-borders'>
                                <p> Border Countries : </p>
                                <div className="link-list">
                                    { 
                                        borders?.map((e,i) => (<Link className='country-link' key={i} to={`/${e}`} >{e}</Link>))
                                    }  
                                </div>
                                
                            </div> 
                        </div>
                        </>
                        }
                    </div>   
                }         
            </div>
        </main>
    )
}

export default CountryPage
