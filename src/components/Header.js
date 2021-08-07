import React from 'react'
import NightsStayIcon from '@material-ui/icons/NightsStay';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';


function Header() {
    return (
        <header> 
           <div className="header-title">Where in the world?</div>
           <div className="theme-toggle">
               {darkTheme ? (
                   <><NightsStayIcon /> Dark Mode</>
               ) : (
                   <><NightsStayOutlinedIcon /> Light Mode</>
               )}
           </div>
        </header>
    )
}

export default Header
