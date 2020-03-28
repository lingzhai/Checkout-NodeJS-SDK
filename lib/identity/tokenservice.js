'use strict';

/**
 get access token from authorization code
 **/

class TokenService {

  constructor(authorizationCode, basicAuth) {
    this.path = '/v1/identity/openidconnect/tokenservice';
    this.verb = 'POST';
    this.body = 'grant_type=authorization_code&code=' + authorizationCode;
    console.log('--inside paypal TokenService authorizationCode=',authorizationCode);
    this.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': basicAuth
    };
  }
}

module.exports = {TokenService: TokenService};
