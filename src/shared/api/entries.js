import { post, get, del } from './request'

/**
 * Add one more entry.
 *
 * @param {number} formId Form id.
 * @param {object} data Entry data.
 *
 * @returns {Promise}
 */
export function add (formId, data) {
  return post(
    `form/${formId}/entries`,
    {
      method: 'POST',
      body: JSON.stringify(data)
    }
  )
}
/**
 * Get all entries.
 *
 * @param {number} formId Form ID.
 *
 * @returns {Promise}
 */
export function all (formId) {
  return get(`form/${formId}/entries`)
}

/**
 * Delete entries.
 *
 * @param {object} ids Entries id's.
 *
 * @returns {Promise}
 */
export function delEntries (ids) {
  return del('entries', { body: JSON.stringify(ids) })
}
