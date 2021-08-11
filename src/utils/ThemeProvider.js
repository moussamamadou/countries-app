import {createContext, useEffect, useState, useRef} from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({children}) => {

    const [themeDark, setThemeDark] = useState(false);
    const countBfrTrns= useRef(0)

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
        if(countBfrTrns.current === 2 ){
            transitions();
        }
         countBfrTrns.current+=1;
    }, [themeDark]);

    const transitions = () => {
        let x = document.getElementById('root');
         x.classList.remove("no-transition");
    }
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