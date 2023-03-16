// Pokemon List
import React from 'react';
import styled from '@emotion/styled';
import PokemonList from '../components/PokemonList';

const Base = styled.div``;

const Title = styled.div``;

const Description = styled.div``;

const ImageWrapper = styled.div``;

const Image = styled.div``;

const MainPage: React.FC = () => {
  return (
    <Base>
      <Title>Pokédex</Title>
      <Description>
        The Pokédex provides information such as stats regarding the various
        species of Pokémon.
      </Description>
      <PokemonList />
      <ImageWrapper>
        <Image />
      </ImageWrapper>
    </Base>
  );
};

export default MainPage;
