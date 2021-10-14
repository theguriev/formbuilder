import refToValue from '../composables/refToValue'

export default function (emit) {
  return data => emit('input', refToValue(data))
}
