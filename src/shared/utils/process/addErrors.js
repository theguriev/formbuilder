import { get, cloneDeep, chain } from 'lodash'

export default function (field, errors) {
  const newField = cloneDeep(field)
  newField.value.errors = chain(get(newField, 'value.errors', []))
    .concat(errors)
    .thru(
      errors => {
        if (errors.length > 0) {
          return errors
        }
        return undefined
      }
    )
    .value()
  return newField
}
