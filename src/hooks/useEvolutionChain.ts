// Information about evolution
import axios, { type AxiosResponse } from 'axios';
import { useQuery, type UseQueryResult } from 'react-query';
import { type EvolutionChainResponse } from '../types';

const useEvolutionChain = (
  url?: string,
): UseQueryResult<AxiosResponse<EvolutionChainResponse>, Error> =>
  useQuery(['evolution', { url }], async () =>
    url != null ? await axios.get(url) : null,
  );

export default useEvolutionChain;
