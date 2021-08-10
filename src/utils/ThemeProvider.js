import React, {useEffect, useState} from 'react';

export const ThemeContext = React.createContext(null);

export const ThemeProvider = ({children}) => {

    const [themeDark, setThemeDark] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('themeDark')){
            console.log("First Check for ThemeDark", themeDark);
            setThemeDark(localStorage.getItem('themeDark'));
        }else{
            console.log("First Check for ThemeDark", themeDark);
            localStorage.setItem('themeDark', themeDark);
        }
    }, []);    

    useEffect(() => {
        console.log("Update for ThemeDark", themeDark);
        localStorage.setItem('themeDark', themeDark);
    }, [themeDark]);

    const theme = {themeDark, setThemeDark};
    
    return (
        <ThemeContext.Provider value={theme}>
            <div className={themeDark ? "App dark" : "App light"}>
                {children}   
            </div>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;