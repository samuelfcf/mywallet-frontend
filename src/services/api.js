import axios from "axios";

const BASE_URL = "http://localhost:4000";

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

const signUp = (req) => {
  const body = {
    name: req.name,
    email: req.email,
    password: req.password
  };

  return axios.post(`${BASE_URL}/sign-up`, body);
}

const logIn = (req) => {
  const body = {
    email: req.email,
    password: req.password
  }
  return axios.post(`${BASE_URL}/log-in`, body);
}

const logOut = (token) => {
  return axios.get(`${BASE_URL}/log-out`, getConfig(token));
}

const getTransactions = (id, token) => {
  return axios.get(`${BASE_URL}/user/${id}/transactions`, getConfig(token));
}

export {
  signUp,
  logIn,
  logOut,
  getTransactions
}