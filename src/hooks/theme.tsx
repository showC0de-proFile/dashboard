import React, { createContext, useState, useContext } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface IThemeContext {
    toggleTheme(): void;
    theme: ITheme;
}

interface ITheme {
    title: string;

    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        quartenary: string;          

        white: string;
        black: string;
        gray: string;
        grayLight: string;
        middleGray: string;

        colorTextButton: string;
        titleForm: string;

        success: string;
        info: string;
        warning: string;
    }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(() => {
        const themeSaved = localStorage.getItem('@dashboard:theme');

        if(themeSaved) {
            return JSON.parse(themeSaved);
        }else{
            return light;
        }
    });

    const toggleTheme = () => {
        if(theme.title === 'light'){
            setTheme(dark);
            localStorage.setItem('@dashboard:theme', JSON.stringify(dark));
        }else{
            setTheme(light);
            localStorage.setItem('@dashboard:theme', JSON.stringify(light));
        }
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);

    return context;
}


export { ThemeProvider, useTheme };
