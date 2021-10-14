import { chain } from 'lodash'
import final from '@/shared/utils/process/final'
import empty from '@/shared/utils/process/empty'

export default function (field) {
  return chain(field)
    .thru(empty)
    .thru(final)
    .value()
}
