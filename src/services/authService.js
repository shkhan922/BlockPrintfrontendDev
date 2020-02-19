import jwtDecode from "jwt-decode";

const tokenKey = "token";

export const getCurrentUser = (token = null) => {
  try {
    const jwt = localStorage.getItem(tokenKey) || token;
    // if (jwt === null || jwt === undefined) return null
    const jwtDecoded = jwtDecode(jwt);
    const currDate = new Date().getTime() / 1000;

    if (jwtDecoded.exp < currDate) {
      localStorage.clear();
      return null;
    }
    return jwtDecoded;
  } catch (ex) {
    // localStorage.clear()
    return null;
  }
};
