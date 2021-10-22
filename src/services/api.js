import axios from "axios";

const BASE_URL = "http://localhost:4000";

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

const signUp = async (req) => {
  const body = {
    name: req.name,
    email: req.email,
    password: req.password
  };

  return await axios.post(`${BASE_URL}/sign-up`, body);
}

export {
  signUp,
}