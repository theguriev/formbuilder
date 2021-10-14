/**
 * Add default predefined options to request.
 * @param {object} options Reqeust options.
 *
 * @returns {string}
 */
export function addDefaultOptions (options) {
  const newOptions = {
    redirect: 'follow',
    mode: 'cors',
    referrer: 'no-referrer',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    ...options
  }

  if (window.beaglApp.nonce) {
    newOptions.headers['X-WP-Nonce'] = window.beaglApp.nonce
    newOptions.headers['credentials'] = 'include'
  }
  return newOptions
}

/**
 * Add base URL to route.
 * @param {string} url Route.
 *
 * @returns {string}
 */
export function addBaseURL (url, baseURL = window.beaglApp.ajaxUrl) {
  if (url.indexOf('http') === -1) {
    return baseURL + url
  }
  return url
}

/**
 * Handle HTTP request errors.
 * @param {object} response Response object.
 */
function handleErrors (response) {
  if (!response.ok) {
    window.bgl.notify({
      title: 'Error',
      message: response.data,
      type: 'error'
    })
    throw response
  }
  return response
}

/**
 * Handle JSON.
 * @param {object} response Response.
 */
function handleJSON (response) {
  return response
    .json()
    .then(
      data => {
        response.data = data.data
        return response
      }
    )
}

/**
 * Make a request.
 * @param {string} url Route path.
 * @param {object} options Request options.
 *
 * @returns {Promise}
 */
export function request (url, options) {
  return fetch(addBaseURL(url), addDefaultOptions(options))
    .then(handleJSON)
    .then(handleErrors)
}

/**
 * Make a PUT request.
 *
 * @param {string} url Route path.
 * @param {object} options Request options.
 *
 * @returns {Promise}
 */
export function put (url, options = Object.create(null)) {
  return request(url, { ...options, method: 'PUT' })
}

/**
 * Make a POST request.
 *
 * @param {string} url Route path.
 * @param {object} options Request options.
 *
 * @returns {Promise}
 */
export function post (url, options = Object.create(null)) {
  return request(url, { ...options, method: 'POST' })
}

/**
 * Make a PATCH request.
 *
 * @param {string} url Route path.
 * @param {object} options Request options.
 *
 * @returns {Promise}
 */
export function patch (url, options = Object.create(null)) {
  return request(url, { ...options, method: 'PATCH' })
}

/**
 * Make a DELETE request.
 *
 * @param {string} url Route path.
 * @param {object} options Request options.
 *
 * @returns {Promise}
 */
export function del (url, options = Object.create(null)) {
  return request(url, { ...options, method: 'DELETE' })
}

/**
 * Make a GET request.
 *
 * @param {string} url Route path.
 * @param {object} options Request options.
 *
 * @returns {Promise}
 */
export function get (url, options = Object.create(null)) {
  return request(url, { ...options, method: 'GET' })
}
