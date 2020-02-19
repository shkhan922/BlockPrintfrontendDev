import http from "./httpService";

export const registerUser = (firstName, lastName, email, password) =>
  http.post("api/user/register", {
    firstName,
    lastName,
    email,
    password
  });

export const loginUser = (email, password) =>
  http.post("api/user/login", {
    email,
    password
  });
