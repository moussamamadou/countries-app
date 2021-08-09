import React from 'react'
import NightsStayIcon from '@material-ui/icons/NightsStay';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';


function Header({ darkTheme }) {
        console.log( "Header", darkTheme);
    return (
        <header> 
            <div className="container">
                <h1 className="header-title">Where in the world ?</h1>
                <div className="theme-toggle">
                    {darkTheme ? (
                        <><NightsStayIcon /> <span> Dark Mode</span></>
                    ) : (
                        <><NightsStayOutlinedIcon /> <span> Light Mode </span></>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
