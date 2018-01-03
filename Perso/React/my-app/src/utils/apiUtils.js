import { hashHistory } from 'react-router';
import { ConfigConstants } from './config.js';
import * as GlobalConstants from './constants';
import { fetchGet } from './fetchUtils';

export function apiGet(request) {
  return new Promise(function (fulfill, reject) {

    let url = ConfigConstants.baseUrl + 'api/' + request;

    return fetchGet(url, getHeaders())
      .then((response) => {
        fulfill(response);
      }).catch((error) => {
        if(error.message === GlobalConstants.AUTH_ERROR) {
         
          apiGet(request).then((response) => {
            fulfill(response);
          });
        
        } else {
          if(error.status === 403) {
            hashHistory.push('/forbidden');
          } else {
            reject(error);
          }
        }
      });

  });
}

function getHeaders() {
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  return headers;
}

export function parseJSON(response) {
  return response.json();
}
