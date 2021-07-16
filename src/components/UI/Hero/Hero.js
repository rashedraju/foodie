import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { StyledHero, StyledHeroBG, StyledHeroContent, StyledHeroText } from './styled';

const hero = (props) => (
    <StyledHero>
        <StyledHeroBG />
        <StyledHeroContent>
            <StyledHeroText>It&apos;s the food you love, delivered.</StyledHeroText>
            <SearchBar queryChange={props.queryChange} />
        </StyledHeroContent>
    </StyledHero>
);

export default hero;
