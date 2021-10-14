import { get, patch } from './request'

/**
 * Get one entry.
 *
 * @param {number} id Form id.
 *
 * @returns {Promise}
 */
export function one (id) {
  return get(`entry/${id}`)
}

/**
 * Save entry.
 *
 * @param {number} id Form id.
 * @param {object} entry Form data.
 *
 * @returns {Promise}
 */
export function save (id, entry) {
  return patch(
    `entry/${id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(entry)
    }
  )
}
