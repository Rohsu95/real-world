import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;

export const getUser = async (token) => {
  try {
    const res = await axios({
      method: "get",
      url: `${url}/api/users`,
      headers: { Authorization: `Bearer${token}` },
    });

    return res;
  } catch (err) {}
};

export const login = async (data) => {
  try {
    const res = await axios({
      method: "post",
      data,
      headers: { "Content-Type": "application/json" },
      url: `${url}/api/users/login`,
    });

    return res;
  } catch (e) {
    return e;
  }
};