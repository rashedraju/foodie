import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = {
    color: {
        primary: '#d60e64',
        secondary: '#6c757d',
        light: '#f7f7f7',
        dark: '#343A40',
        white: '#fff',
        danger: '#e21212',
    },
    border: {
        primary: '1px solid #d60e64',
        primaryBig: '0.3rem solid #d60e64',
        dark: '1px solid #343A40',
        danger: '1px solid #e21212',
        light: '1px solid #eee',
    },
    shadow: {
        sm: '1px 1px 5px #ced4da',
        md: '0 2px 16px 0 rgba(0, 0, 0, 0.08)',
    },
};

const ThemeProvider = ({ children }) => (
    <StyledThemeProvider theme={theme}> {children} </StyledThemeProvider>
);

export default ThemeProvider;
