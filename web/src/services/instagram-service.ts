import { StorageService } from './storage-service';
import { history } from './history-service';
import { LOGIN_ROUTE } from '../constants/routes';
import { WebService } from './web-service';
import { ApiService } from './api-service';
import { FLOW } from '../constants/config';

const LOGOUT_URL = 'https://instagram.com/accounts/logout/';
const service = FLOW === 'WEB' ? WebService : ApiService;

class Instagram {
  login() {
    service.login();
  }
  loginCallback() {
    service.loginCallback();
  }

  getPost = async () => {
    return service.getPost();
  };

  logout() {
    window.open(LOGOUT_URL);
    StorageService.removeToken();
    history.push(LOGIN_ROUTE);
  }
}

export const InstagramService = new Instagram();
