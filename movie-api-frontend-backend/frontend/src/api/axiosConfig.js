import axios from "axios";

export default axios.create({
  // baseURL: process.env.REACT_APP_BASEURL, // the url of the backend server
  baseURL:"http://localhost:5001"

});
