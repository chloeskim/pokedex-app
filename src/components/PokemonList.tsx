import React from 'react';
import styled from '@emotion/styled/macro';
import usePokemon from './../hooks/usePokemon';
import { type ListResponse } from './../types/index';
import { Link } from 'react-router-dom';

const Base = styled.div`
  margin-top: 24px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ListItem = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  box-shadow: 6px 4px 14px 5px rgba(0, 0, 0, 0.21);
  border-radius: 12px;
  margin-top: 18px;
`;

const Image = styled.img``;

const Name = styled.p`
  margin: 0;
  padding: 0 0 0 12px;
  flex: 1 1 100%;
  color: #374151;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 500;
`;

const Index = styled.p`
  position: absolute;
  margin: 0;
  padding: 0;
  right: 16px;
  font-size: 24px;
  font-weight: bold;
  color: #d1d5db;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 180px);
`;

const Loading = styled.img``;

// Ref:https://github.com/PokeAPI/sprites
const getImageUrl = (index: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

const PokemonList: React.FC = () => {
  const { isLoading, isError, data } = usePokemon<ListResponse>();
  const formatNumbering = (index: number): string => {
    return `#${String(index).padStart(3, '0')}`;
  };

  return (
    <Base>
      {isLoading || isError ? (
        <LoadingWrapper>
          <Loading src="/loading.gif" alt="loading" />
        </LoadingWrapper>
      ) : (
        <List>
          {data?.data.results.map((pokemon, idx) => (
            <StyledLink to={`/${idx + 1}`} key={pokemon.name}>
              <ListItem>
                <Image src={getImageUrl(idx + 1)} />
                <Name>{pokemon.name}</Name>
                <Index>{formatNumbering(idx + 1)}</Index>
              </ListItem>
            </StyledLink>
          ))}
        </List>
      )}
    </Base>
  );
};

export default PokemonList;
