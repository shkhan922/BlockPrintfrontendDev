import axios from "axios";

axios.defaults.baseURL = "https://bp-demo-bp.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch
  // setJwt
};
