import { get, patch } from './request'

/**
 * Get one form.
 *
 * @param {number} id Form id.
 *
 * @returns {Promise}
 */
export function one (id) {
  return get(`form/${id}`)
}

/**
 * Save form.
 *
 * @param {number} id Form id.
 * @param {object} form Form data.
 *
 * @returns {Promise}
 */
export function save (id, form) {
  return patch(
    `form/${id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(form)
    }
  )
}
