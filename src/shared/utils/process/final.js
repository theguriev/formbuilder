export default function (field) {
  return {
    ...field,
    value: {
      ...field.value,
      final: field.value.multiple === true ? field.value.inputMultiple : field.value.input
    }
  }
}
