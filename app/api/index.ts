import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'http://swapi.dev/api',
});
