import styled from 'styled-components';
import HeroBGImage from 'assets/img/header.jpg';

export const StyledHero = styled.section`
    position: relative;
    max-height: 85vh;
    margin-bottom: 2rem;
    padding: 1rem 0.5rem;
`;

export const StyledHeroBG = styled.div`
    width: 30%;
    height: 100%;
    z-index: -999;
    position: absolute;
    top: 0;
    right: 0;
    background-image: url(${HeroBGImage});
    background-size: cover;
    background-position: left;
`;

export const StyledHeroContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledHeroText = styled.h1`
    max-width: 70%;
    word-wrap: break-word;
    margin: 0;
    padding: 2rem 1rem;
    color: #333;
`;
