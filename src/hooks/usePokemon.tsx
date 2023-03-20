import axios, { type AxiosResponse } from 'axios';
import { useQuery, type UseQueryResult } from 'react-query';
import { PokemonResponse } from '../types';

const pokemonApi = async (id?: string) =>
  await axios.get(`https://pokeapi.co/api/v2/pokemon/${id ?? ''}`, {
    params: { limit: 151 },
  });

const usePokemon = <T,>(
  id?: string,
): UseQueryResult<AxiosResponse<T>, Error> => {
  return useQuery(
    id != null ? ['pokemon', id] : 'pokemon',
    async () => await pokemonApi(id),
  );
};

export default usePokemon;
