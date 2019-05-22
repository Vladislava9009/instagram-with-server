const TOKEN = 'TOKEN';

class Storage {
  private storage = window.localStorage;

  public getToken() {
    const data = this.storage.getItem(TOKEN);
    return data ? JSON.parse(data) : null;
  }

  public saveToken(token: string) {
    this.storage.setItem(TOKEN, JSON.stringify(token));
  }

  public removeToken() {
    this.storage.removeItem(TOKEN);
  }
}

export const StorageService = new Storage();
