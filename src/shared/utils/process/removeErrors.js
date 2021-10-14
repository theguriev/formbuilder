import { cloneDeep } from 'lodash'

export default function (field) {
  const newField = cloneDeep(field)
  newField.value.errors = undefined
  return newField
}
