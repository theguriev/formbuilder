import addErrors from './addErrors'

export default function (field) {
  if (field.value.input === '') {
    return addErrors(field, ['This field can not be empty.'])
  }
  return field
}
