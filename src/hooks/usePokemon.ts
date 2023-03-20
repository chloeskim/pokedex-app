import axios, { type AxiosResponse } from 'axios';
import { useQuery, useQueries, type UseQueryResult } from 'react-query';
import { type PokemonResponse } from '../types';

const pokemonApi = async (id?: string) =>
  await axios.get(`https://pokeapi.co/api/v2/pokemon/${id ?? ''}`, {
    params: { limit: 151 },
  });

const usePokemon = <T>(
  id?: string,
): UseQueryResult<AxiosResponse<T>, Error> => {
  return useQuery(
    id != null ? ['pokemon', id] : 'pokemon',
    async () => await pokemonApi(id),
  );
};

export const usePokemonQueries = (
  names: string[],
): Array<UseQueryResult<AxiosResponse<PokemonResponse>, Error>> => {
  const queries = names.map((name, idx) => ({
    queryKey: ['evolution', `${name}_${idx}`],
    queryFn: async () => await pokemonApi(name),
  }));
  return useQueries(queries) as Array<
    UseQueryResult<AxiosResponse<PokemonResponse>, Error>
  >;
};

export default usePokemon;
