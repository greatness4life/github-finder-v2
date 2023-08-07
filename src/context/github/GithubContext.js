import { createContext, useReducer } from "react";
import GithubReducer from "../GithubReducer";
const GithubContext = createContext();

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    repos: [],
    user: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Get Search results

  // const searchUser = async (text) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     q: text,
  //   });
  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const { items } = await response.json();

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: items,
  //   });
  // };

  // Set Loading FUNCTION
  // const setLoading = () =>
  //   dispatch({
  //     type: "SET_LOADING",
  //   });

  // const clearUsers = () =>
  //   dispatch({
  //     type: "CLEAR_USERS",
  //   });

  // Get Single User Profile

  // const getUser = async (login) => {
  //   setLoading();

  //   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   if (response.status === 404) {
  //     window.location = "/notfound";
  //   } else {
  //     const data = await response.json();

  //     dispatch({
  //       type: "GET_USER",
  //       payload: data,
  //     });
  //   }
  // };

  // // Get User Repos
  // const getUserRepos = async (login) => {
  //   setLoading();
  //   const params = new URLSearchParams({
  //     sort: "created",
  //     per_page: 10,
  //   });
  //   const response = await fetch(
  //     `${GITHUB_URL}/users/${login}/repos?${params}`,
  //     {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   // console.log("from repo" + data);
  //   dispatch({
  //     type: "GET_REPOS",
  //     payload: data,
  //   });
  // };

  return (
    <GithubContext.Provider
      value={{
        // Do this but a bit tedious
        // users: state.users,
        // user: state.user,
        // repos: state.repos,
        // loading: state.loading,

        // Pass all the state values using spread operator
        ...state,
        dispatch,
        // clearUsers,
        // searchUser,
        // getUser,
        // getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
