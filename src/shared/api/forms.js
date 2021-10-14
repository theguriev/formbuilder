import { post, del, get } from './request'

/**
 * Add one more form.
 *
 * @param {object} data Form data.
 *
 * @returns {Promise}
 */
export function add (data) {
  return post(
    'forms',
    {
      method: 'POST',
      body: JSON.stringify(data)
    }
  )
}

/**
 * Delete Forms.
 *
 * @param {object} ids Forms id's.
 *
 * @returns {Promise}
 */
export function delForms (ids) {
  return del(
    'forms',
    {
      method: 'DELETE',
      body: JSON.stringify(ids)
    }
  )
}

/**
 * Get forms.
 *
 * @returns {Promise}
 */
export function all () {
  return get('forms')
}
