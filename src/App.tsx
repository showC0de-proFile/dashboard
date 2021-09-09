import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import { useTheme } from './hooks/theme';

import Routes from './routes';

import { BrowserRouter } from 'react-router-dom'


const App: React.FC = () => {
    const {theme} = useTheme();
    
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyles />
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;