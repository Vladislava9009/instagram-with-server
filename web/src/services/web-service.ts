import { StorageService } from './storage-service';
import { history } from './history-service';
import { FEED_ROUTE } from '../constants/routes';
import { CLIENT_ID, REDIRECT_URI } from '../constants/config';

const BASE_URL = 'https://api.instagram.com';

class Web {
  login() {
    const url = `${BASE_URL}/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`;
    window.location.replace(url);
  }

  loginCallback() {
    if (window.location.hash === '') {
      return;
    }
    const ACCESS_TOKEN = window.location.hash.split('=')[1];
    StorageService.saveToken(ACCESS_TOKEN);
    history.push(FEED_ROUTE);
  }

  getPost = async () => {
    const token = StorageService.getToken();
    if (!token) {
      this.login();
      return;
    }
    try {
      const response = await fetch(
        `${BASE_URL}/v1/users/self/media/recent/?access_token=${token}&count=20`
      );
      const { data } = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };
}

export const WebService = new Web();
