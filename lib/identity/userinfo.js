'use strict';

/**
 Shows details for a captured payment, by ID.
 **/

class UserInfo {

  constructor(accessToken) {
    this.path = '/v1/identity/oauth2/userinfo';
    this.verb = 'GET';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    };
  }
}

module.exports = {UserInfo: UserInfo};
