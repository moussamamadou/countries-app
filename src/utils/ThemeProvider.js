import {createContext, useEffect, useState} from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({children}) => {

    const [themeDark, setThemeDark] = useState(false);

    // When the app is launch we check is a theme was previously selected and save in local storage
    useEffect(() => {
        if(localStorage.getItem('themeDark')){
            setThemeDark(JSON.parse(localStorage.getItem('themeDark')));
        }else{
            localStorage.setItem('themeDark', false);
        }
    }, []);    

    // If theme is updated we save in local storage
    useEffect(() => {
        localStorage.setItem('themeDark', themeDark);
    }, [themeDark]);

    const theme = {themeDark, setThemeDark};
    
    return (
        <ThemeContext.Provider value={theme}>
            <div className={`App ${theme.themeDark ? "dark" : "light"}`}>    
                {children}   
            </div>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;