/*
  Function to fetch portfolios from roach backend api
*/
import config from 'config';

// set api endpoint from config
const api = `${config.API_BASE_URL}/api/portfolio`;

export const fetchPortfolios = async (strategy, weights) => {
  // endpoints
  const endpoints = {
    roach: `${api}/roach/?strategy=${strategy}`,
    benchmark: `${api}/benchmark/?weights=${weights.join(',')}`,
  };

  // fetch from enpoints
  const roachRes = await fetch(endpoints.roach);
  if (!roachRes.ok) throw new Error(roachRes.statusText);

  const benchmarkRes = await fetch(endpoints.benchmark);
  if (!benchmarkRes.ok) throw new Error(benchmarkRes.statusText);

  const roach = await roachRes.json();
  const benchmark = await benchmarkRes.json();

  console.log(
    'fetched lengths',
    JSON.parse(roach.value).results.returns.length,
    JSON.parse(benchmark.value).results.returns.length
  );

  // return portfolios data
  return {
    roach,
    benchmark,
  };
};
