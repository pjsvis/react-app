import axios, { AxiosPromise } from 'axios';

const baseURL = 'https://api.github.com';

const fetchCurrentUser = (): AxiosPromise<any[]> => {
    const url = baseURL;
    return axios.get(url).then(response => response);
};

const fetchMembers = (repo: string): AxiosPromise<IMemberEntity[]> => {
    const url = `${baseURL}/orgs/${repo}/members`;
    return axios.get(url).then(response => response);
};

const fetchRepos = (repo: string): AxiosPromise<IMemberEntity[]> => {
    const url = `${baseURL}/orgs/${repo}/repos`;
    return axios.get(url).then(response => response);
};

// export default github;
export { fetchCurrentUser, fetchMembers, fetchRepos };
