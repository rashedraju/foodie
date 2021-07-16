import { createGlobalStyle } from 'styled-components';
import TitilliumWebBold from '../../assets/font/TitilliumWeb-Bold.ttf';
import TitilliumWebLight from '../../assets/font/TitilliumWeb-Light.ttf';
import TitilliumWebRegular from '../../assets/font/TitilliumWeb-Regular.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Titillium;
        src: url(${TitilliumWebRegular}) format("truetype");
    }
    @font-face {
        font-family: Titillium-bold;
        src: url(${TitilliumWebBold}) format("truetype");
    }
    @font-face {
        font-family: Titillium-light;
        src: url(${TitilliumWebLight}) format("truetype");
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    html {
        font-size: 100%;
    }

    body {
        font-family: Titillium;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        font-weight: 400;
        line-height: 1.7;
        color: ${({ theme }) => theme.color.dark};
    }

    button:focus,
    a:focus {
        outline: none;
    }

    button,
    button:focus,
    button:active,
    button:hover {
        box-shadow: none !important;
        border-radius: 0 !important;
        outline: none;
    }

    input {
        border: none !important;
        border-radius: none;
        box-shadow: ${({ theme }) => theme.shadow.sm}!important;
        &:focus,
        &:active {
            box-shadow: ${({ theme }) => theme.shadow.sm}!important;
            border: none;
        }
    }

    input{
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    a{
        color: ${({ theme }) => theme.color.primary}
    }
`;

export default GlobalStyle;
