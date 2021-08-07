import React from 'react';
import {Link, useParams} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function CountryPage() {
    const {code} = useParams();

    return (
        <div className='country-page'>
            <h1>{code}</h1>
            <div className='btn-container'>
                <button className='btn-previews'><ArrowBackIcon /> Back</button>
            </div>
            <div className='country-wrapper'>
                <div className='country-image'>
                    <img src='https://restcountries.eu/data/fra.svg' alt='France' />
                </div>
                <div className='country-details'>
                    <h1 className='country-title'></h1>
                    <div className='country-infos'>
                        <p >Native Name: </p>
                        <p >Population: </p>
                        <p >Region: </p>
                        <p >Sub Region: </p>
                        <p >Capital:  </p>
                        <p >Top Level Domain: </p>
                        <p >Currencies: </p>
                        <p >Languages: </p>
                    </div>
                    <div className='country-borders'>
                        <span> Border Countries : </span>
                        <Link to='' className='country-link'>France</Link>
                    </div> 
                </div>
            </div>            
        </div>
    )
}

export default CountryPage
