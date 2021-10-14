import { chain } from 'lodash'
import final from '@/shared/utils/process/final'
import required from '@/shared/utils/process/required'

export default function (field) {
  return chain(field)
    .thru(final)
    .thru(required)
    .value()
}
