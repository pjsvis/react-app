import axios, { AxiosPromise } from 'axios';

const baseURL = 'https://api.github.com/orgs/lemoncode';

const fetchMembers = (): AxiosPromise<IMemberEntity[]> => {
  const url = `${baseURL}/members`;
  return axios.get(url).then(response => response);
};
