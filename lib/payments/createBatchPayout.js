'use strict';
/**
 Create Batch Payout
 **/

class CreateBatchPayout {

  constructor() {
    this.path = '/v1/payments/payouts';
    this.verb = 'POST';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  prefer(prefer) {
    this.headers['Prefer'] = prefer;
    return this;
  }

  requestBody(batchPayout) {
    this.body = batchPayout;
    return this;
  }
}

module.exports = {CreateBatchPayout: CreateBatchPayout};
