/**
 * Search query object - Process JSON. (To be Improve)
 */
import axios from 'axios';
import {UNSPLASH_BASE_API} from './Constant'
import {clientID} from './util';

export default class Search {
  constructor(count, query) {
    this.promise = this.getSearch(count, query);
  }

  /**
   * Request images from Unsplash API based on user input.
   *
   * @param count {int} the number of pictures wanted GET
   * @param query {string} the string use to query from API
   * @returns {any}
   */
  getSearch(count, query) {
    // search/photos?page=1&per_page=25&query=office
    let get = ('search/photos?page=1&orientation=squarish&per_page='
    + count + '&query=' + query);
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