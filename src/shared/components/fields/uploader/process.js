import { chain } from 'lodash'
import required from '@/shared/utils/process/required'

function preapreFinal (field) {
  return {
    ...field,
    value: {
      ...field.value,
      final: field.value.input.map(el => el.candidate).join(', ')
    }
  }
}

export default function (field) {
  return chain(field)
    .thru(preapreFinal)
    .thru(required)
    .value()
}
