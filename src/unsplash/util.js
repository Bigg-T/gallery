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

//--- Urls ---
// {"urls":
//       {
//         "raw": "https://images.unsplash.com/photo-1482702719637-b16d998b2d53?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjIyODQ5fQ&s=57d64f349c4a096c8da90479ec738555",
//         "full": "https://images.unsplash.com/photo-1482702719637-b16d998b2d53?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjIyODQ5fQ&s=4fa36b741e13e4a947760d2688c41b6f",
//         "regular": "https://images.unsplash.com/photo-1482702719637-b16d998b2d53?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIyODQ5fQ&s=871c0a8fece1db6f23dc2470973df291",
//         "small": "https://images.unsplash.com/photo-1482702719637-b16d998b2d53?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIyODQ5fQ&s=f460a2aabe38e6699039038a2667001c",
//         "thumb": "https://images.unsplash.com/photo-1482702719637-b16d998b2d53?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjIyODQ5fQ&s=5d185180b37b3ccf99901c26e3560b3d"
//       }
// }

export function getUrlFull(obj) {
  return obj.urls.full;
}

export function getUrlRegular(obj) {
  return obj.urls.regular;
}
export function getUrlSmall(obj) {
  return obj.urls.small;
}

export function getUrlThumb(obj) {
  return obj.urls.thumb;
}

export function getUrlCustom(obj) {
  return obj.urls.custom;
}

//--- User ---
// {user : {username: 'example'}}
export function getUserUsername(obj) {
  return obj.user.username;
}

//--- Error ---
export function getErrorMsg(obj) {
  // {errors: ["OAuth error: The access token is invalid"]}
  return obj.errors.join('\n');
}

//---Description ---
export function getDescription(obj) {
  return obj.description;
}