'use strict';

/**
 Shows details for a captured payment, by ID.
 **/

class UserInfo {

  constructor(accessToken) {
    this.path = '/v1/identity/oauth2/userinfo?schema=paypalv1.1';
    this.verb = 'GET';
    this.body = null;
    console.log('--inside paypal UserInfo accessToken=',accessToken);
    this.headers = {
      'Content-Type': 'application/json'
    };
  }
}

module.exports = {UserInfo: UserInfo};
