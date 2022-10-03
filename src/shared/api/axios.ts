import axios from 'axios';

const Axios = axios.create({
  baseURL: `https://dummyapi.io/data/v1/`,
  headers: {
    //not hide in env, cause repo is private
    'app-id': '633ad902c4435b1d45c59c39'
  }
});


export default Axios;