import React from 'react';
import {Link, useParams} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function CountryPage() {
    const {code} = useParams();

    return (
        <main>
            <div className='container'>
                <div className='btn-container'>
                    <Link to="/" className='btn-previous'><ArrowBackIcon /> Back</Link>
                </div>
                <div className='country-wrapper'>
                    <div className='country-image'>
                        <img src='https://restcountries.eu/data/fra.svg' alt='France' />
                    </div>
                    <div className='country-details'>
                        <h2 className='country-title'>FRANCE</h2>
                        <div className='country-infos'>
                            <div className="info-first">
                                <p >Native Name: <span>Lorem Impsum</span> <br /> </p>
                                <p >Population: <span>Lorem Impsum</span> <br /></p>
                                <p >Region: <span>Lorem Impsum</span> <br /></p>
                                <p >Sub Region: <span>Lorem Impsum</span> <br /></p>
                                <p >Capital: <span>Lorem Impsum</span> <br /> </p>
                            </div>
                            <div className="info-second">
                                <p >Top Level Domain:<span>Lorem Impsum</span> <br /> </p>
                                <p >Currencies:<span>Lorem Impsum</span> <br /> </p>
                                <p >Languages:<span>Lorem Impsum</span>  <br /></p>
                            </div>
                        </div>
                        <div className='country-borders'>
                            <p> Border Countries : </p>
                            <div className="link-list">
                                <Link to='' className='country-link'>France</Link>
                                <Link to='' className='country-link'>France</Link>
                                <Link to='' className='country-link'>France</Link>
                            </div>
                            
                        </div> 
                    </div>
                </div>            
            </div>
        </main>
    )
}

export default CountryPage
