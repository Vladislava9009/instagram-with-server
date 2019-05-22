import { history } from './history-service';
import { FEED_ROUTE } from '../constants/routes';

import axios from 'axios';

class Api {
  login() {
    axios.get('http://localhost:8080/login').then((response) => {
      window.location.replace(response.data);
    });
  }
  loginCallback() {
    const code = window.location.href.split('=')[1];
    axios.post('http://localhost:8080/auth', { code }).then(() => {
      history.push(FEED_ROUTE);
    });
  }

  getPost = async () => {
    return axios.get('http://localhost:8080/feed').then((res) => {
      return res.data.photos;
    });
  };
}

export const ApiService = new Api();
