// Pokemon List
import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import PokemonList from '../components/PokemonList';
import SearchForm from '../components/SearchForm';

const Base = styled.div`
  padding: 12px 18px;
  overflow: hidden;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: #ffcb05;
  font-family: 'Kanit', sans-serif;
  -webkit-text-stroke: 2px #2a75bb;
  text-shadow: 2px 2px 8px #3c5aa6;
  font-weight: 900;
`;

const Description = styled.small`
  color: #6b7280;
  padding: 0;
  margin: 16px 0 0 0;
  display: block;
`;

const ImageWrapper = styled.div`
  position: fixed;
  width: 288px;
  height: 288px;
  top: 0;
  right: 0;
  opacity: 0.4;
  transform: translate(96px, -96px);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const MainPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Base>
      <Title>Pokédex</Title>
      <Description>
        The Pokédex provides information such as stats regarding the various
        species of Pokémon.
      </Description>
      <SearchForm onChange={handleSearchTermChange} />
      <PokemonList searchTerm={searchTerm} />
      <ImageWrapper>
        <Image src="/assets/pocketball.svg" />
      </ImageWrapper>
    </Base>
  );
};

export default MainPage;
