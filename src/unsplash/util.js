/**
 * Util and small wrapper function to process JSON object from Unsplash API
 */

import {UNSPLASH_BASE_URL, ACCESS_KEY} from './Constant';

export function clientID() {
  return 'client_id='+ ACCESS_KEY;
}

export function userHref(username) {
  return UNSPLASH_BASE_URL + '@' + username;
}