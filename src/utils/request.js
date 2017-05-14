/**
 * The root URL for the request API, set in ../../.env
 *
 * @return {string} The string set by the env var `REACT_APP_API_ROOT`
 */
const API_ROOT = process.env.REACT_APP_API_ROOT;

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object}       response A response from a network request
 *
 * @return {object|Error}          The parsed JSON from the request
 */
const parseJSON = (response) =>
  (response.status >= 200 && response.status < 300)
    ? response.status === 204 ? {} : response.json()
    : response.json().then(e => Promise.reject(e));

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} uri       The URI we want to request, appended to API_ROOT
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
const request =
  (uri, options) =>
    fetch(`${API_ROOT}/${uri}`, options)
      .then(parseJSON);

export default request;
