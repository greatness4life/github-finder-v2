import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const accessLink = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});
// Get Search results

export const searchUser = async (text) => {
  const params = new URLSearchParams({
    q: text,
    per_page: 100,
    // page: `${page * 20 - 20}`,
  });

  const response = await accessLink.get(`/search/users?${params}`);
  return response.data.items;
};

//  GET USER AND REPOS

export const getUserWithRepos = async (login) => {
  const [user, repos] = await Promise.all([
    accessLink.get(`/users/${login}`),
    accessLink.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};

// Using Fecth API

// export const searchUser = async (text) => {
//   const params = new URLSearchParams({
//     q: text,
//   });

//  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   const { items } = await response.json();

//   return items;
// };

// Get Single User

// export const getUser = async (login) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   if (response.status === 404) {
//     window.location = "/notfound";
//   } else {
//     const data = await response.json();

//     return data;
//   }
// };
// // Get User Repos

// export const getUserRepos = async (login) => {
//   const params = new URLSearchParams({
//     sort: "created",
//     per_page: 10,
//   });
//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });
//   const data = await response.json();
//   // console.log("from repo" + data);
//   return data;
// };
