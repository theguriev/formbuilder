import { chain } from 'lodash'
import final from '@/shared/utils/process/final'

export default function (field) {
  return chain(field)
    .thru(final)
    .value()
}
