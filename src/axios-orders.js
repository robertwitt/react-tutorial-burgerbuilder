import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-2f3b6.firebaseio.com/'
});

export default instance;
