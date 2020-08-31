import axios from 'axios';
import lscache from 'lscache';
import md5 from 'md5';

class AppApi {
  // instance;
  constructor() {
    this.instance = axios.create();
    lscache.flush();
  }

  call(action, method, data, fromCache) {
    fromCache = fromCache === true ? true : false;

    let url =
      'http://dummy.restapiexample.com/api/v1' + (action[0] === '/' ? '' : '/') + action;
    let keyCache = null;

    let request = {
      method: method,
      url: url,
    };

    if (method === 'GET') {
      request.params = data;
      keyCache = md5(url + JSON.stringify(data));
    } else {
      request.data = data;
    }

    return new Promise((resolve, reject) => {
      if (fromCache === true && keyCache && lscache.get(keyCache)) {
        resolve(lscache.get(keyCache));
      } else {
        this.instance
          .request(request)
          .then((result) => {
            if (fromCache === true && keyCache) {
              lscache.set(keyCache, result, 5);
            }
            resolve(result);
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  }

  //  All Employees
  getAllEmployees(data) {
    return this.call('/employees', 'GET', data);
  }
}

const appApi = new AppApi();

export default appApi;
