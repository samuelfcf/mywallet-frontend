import axios from "axios";

const BASE_URL = "https://mywallet-backendd.herokuapp.com/";

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

const postTransactions = (req, id, token) => {
  const body = {
    value: parseFloat(req.value),
    description: req.description,
    inflow: req.inflow,
    date: req.date,
  }

  return axios.post(`${BASE_URL}/user/${id}/transactions`, body, getConfig(token));
}

export {
  signUp,
  logIn,
  logOut,
  getTransactions,
  postTransactions
}