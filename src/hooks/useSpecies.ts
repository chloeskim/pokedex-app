import axios, { type AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { type SpeciesResponse } from '../types';

const speciesApi = async (id: string) =>
  await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

const useSpecies = (id: string) =>
  useQuery<AxiosResponse<SpeciesResponse>, Error>(
    ['species', { id }],
    async () => await speciesApi(id),
  );

export default useSpecies;
