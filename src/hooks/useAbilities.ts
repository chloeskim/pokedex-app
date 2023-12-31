import axios, { type AxiosResponse } from 'axios';
import { useQueries } from 'react-query';
import { type UseQueryResult } from 'react-query/types/react/types';
import { type Ability, type AbilityResponse } from '../types';

type ReturnType = AxiosResponse<AbilityResponse>;

const useAbilities = (
  abilities: Ability[],
): Array<UseQueryResult<ReturnType, Error>> => {
  const queries = abilities.map(({ ability }, idx) => ({
    queryKey: ['ability', idx],
    queryFn: async () => await axios.get(ability.url),
  }));

  return useQueries(queries) as Array<
    UseQueryResult<AxiosResponse<AbilityResponse>, Error>
  >;
};

export default useAbilities;
