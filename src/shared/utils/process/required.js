import addErrors from './addErrors'

export default function (field) {
  const { value } = field
  if (value.required === true) {
    const conditions = [
      typeof (value.final) === 'string' && value.final === '',
      value.final instanceof Array && value.final.length === 0
    ]
    if (conditions.some(el => el)) {
      return addErrors(field, ['This field is required.'])
    }
  }
  return field
}
