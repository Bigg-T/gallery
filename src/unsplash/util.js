/**
 * Util and small wrapper function to process JSON object from Unsplash API
 */

import {UNSPLASH_BASE_URL, ACCESS_KEY} from './Constant';

/**
 * Generate a string.
 *
 * @returns {string} the client_id param for unsplash API auth
 */
export function clientID() {
  return 'client_id='+ ACCESS_KEY;
}

/**
 * Generate a URL to user.
 *
 * @param username the username on unsplash
 * @returns {string} link to user home page on unsplash
 */
export function userHref(username) {
  return UNSPLASH_BASE_URL + '@' + username;
}