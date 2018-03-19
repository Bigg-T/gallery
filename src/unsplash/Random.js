/**
 * Random get request. (To be Improve)
 */

import axios from 'axios';
import {UNSPLASH_BASE_API, ACCESS_KEY} from './Constant'
import {clientID} from './util';

export default class Random {
  constructor(count) {
    this.promise = this.getRandom(count);
  }

  /**
   * Request random images from Unsplash API.
   *
   * @param count {int} the number of pictures wanted GET
   * @returns {Promise} axios JSON wrapped in a Promise
   */
  getRandom(count) {
    let h = 500;
    let w = 500;
    let get = ('photos/random?count=' + count + '&h=' + h + '&w=' + w);
    let URL = UNSPLASH_BASE_API + get + '&' + clientID();
    return axios.get(URL);
  }

  /**
   *
   * @returns {Promise|*}
   */
  getPromise() {
    return this.promise;
  }
}

