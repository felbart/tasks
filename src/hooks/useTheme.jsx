import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export default function ThemeContextProvider({ children }){
    
    const [theme, setTheme] = useState(localStorage.getItem("theme") !== 'dark' ? 'light' : 'dark');

    useEffect(() => {
        const root = window.document.documentElement;

        const removeOldTheme = theme === 'dark' ? 'light' : 'dark';

        root.classList.remove(removeOldTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);

    }, [theme]);

    return(

        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(){
    return useContext(ThemeContext);
}