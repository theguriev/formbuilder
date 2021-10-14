import { post, get, del } from './request'

/**
 * Add one more upload.
 *
 * @param {number} formId Form id.
 * @param {object} data Upload data.
 *
 * @returns {Promise}
 */
export function add (formId, data) {
  return post(
    `form/${formId}/uploads`,
    {
      method: 'POST',
      body: JSON.stringify(data)
    }
  )
}
/**
 * Get all uploads.
 *
 * @param {number} formId Form ID.
 *
 * @returns {Promise}
 */
export function all (formId) {
  return get(`form/${formId}/uploads`)
}

/**
 * Delete uploads.
 *
 * @param {object} ids Uploads id's.
 *
 * @returns {Promise}
 */
export function delUploads (ids) {
  return del('uploads', { body: JSON.stringify(ids) })
}
