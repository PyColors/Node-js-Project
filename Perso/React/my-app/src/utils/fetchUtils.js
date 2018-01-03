import 'whatwg-fetch';
import * as GlobalConstants from './constants'

export function fetchGet(url, headers) {
  return new Promise(function (fulfill, reject) {

    return fetch(url, {
      method: 'GET',
      headers: headers
    }).then((response) => {

        // First premise gets the response information
        //console.log("GET Response Status: " + response.status);

        if(response.status === 200 || response.status === 201) {
          return parseJSON(response);
        } else if(response.status === 401) {
          // This code will force the error
          return parseJSON(response).then(err => { throw new GlobalException(response.status, GlobalConstants.AUTH_ERROR); });
        } else {
          return parseJSON(response).then(err => { throw new GlobalException(response.status, err); });
        }

    }).then((json) => {

      // Second premise gets the body data of the response
      
      fulfill(json);

    }).catch((error) => {
      // Catch gets the errors
      if (error.response === undefined) {
        reject(error);
      } else {
        error.status = error.response.status;
        error.statusText = error.response.statusText;
        error.response.text().then( (text) => {
          try {
            const json = JSON.parse(text);
            error.message = json.message;
          } catch (ex) {
            error.message = text;
          }
          reject(error);
        });
      }
    });

  });
}

function GlobalException(status, message) {
  this.status = status;
  this.message = message;
  this.type = "Exception";
}

function parseJSON(response) {
  return response.text().then(function(text) {
    return text ? JSON.parse(text) : {}
  })
}
