import { post } from './request'

/**
 * Add one more form.
 *
 * @param {object} data Form data.
 *
 * @returns {Promise}
 */
export function send (data) {
  return post(
    'notification',
    {
      method: 'POST',
      body: JSON.stringify(data)
    }
  )
}
