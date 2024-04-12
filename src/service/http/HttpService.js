import axios from 'axios';
import {API_BASE_URL} from 'react-native-dotenv';

const httpService = axios.create({
  baseURL: 'http://localhost:3000/to-do/v1/',
  //   timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpService;
