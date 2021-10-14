/**
 * Prepare form to display.
 *
 * @param {Object} form Form data.
 */
import SubmitField from '../components/fields/submit-button/'
import FormConfirmation from '../components/fields/form-confirmation/'
import FormNotification from '../components/fields/form-notification/'

export function defaults (data) {
  return [{
    ...data,
    defaults: { ...data.value }
  }]
}

export default function (form) {
  const ret = {
    ...form,
    content: form.content || [],
    submit: form.submit || SubmitField.data,
    settings: form.settings || {
      className: ''
    }
  }
  if (Object.keys(ret.submit).length <= 0) {
    ret.submit = SubmitField.data
  }
  ret.settings.confirmations = ret.settings.confirmations || defaults(FormConfirmation.data)
  ret.settings.notifications = ret.settings.notifications || defaults(FormNotification.data)
  return ret
}
