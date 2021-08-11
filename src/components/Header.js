import React, {useContext} from 'react'
import NightsStayIcon from '@material-ui/icons/NightsStay';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import {ThemeContext} from '../utils/ThemeProvider';
import {Link} from 'react-router-dom';


function Header({ darkTheme }) {
       // console.log( "Header", darkTheme);
    const theme = useContext(ThemeContext);

    const toggleTheme = () => {
        theme.setThemeDark(!theme.themeDark);
    }

    return (
        <header> 
            <div className="container">
                <Link to='/' className="header-title">Where in the world ?</Link>
                <div className="theme-toggle" onClick={toggleTheme}>
                    {theme.themeDark ? (
                        <><NightsStayIcon /> <span> Light Mode</span></>
                    ) : (
                        <><NightsStayOutlinedIcon /> <span> Dark Mode </span></>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
