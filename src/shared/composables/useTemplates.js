import templates from '@/shared/static/templates'
import { add } from '@/shared/api/forms'

export default function (parent) {
  function redirect ({ id }) {
    parent.$router.push(`/builder/${id}`)
  }

  function choose (tmpl) {
    return add(tmpl)
      .then(res => res.data)
      .then(redirect)
  }

  return {
    choose,
    templates
  }
}
