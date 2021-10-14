import control from './control'

export default {
  data: {
    name: control.name,
    control: control.name,
    parent: 0,
    id: 'k15rzi02.w4',
    value: {
      to: '{adminEmail}',
      subject: 'New Entry: {entryID}',
      fromName: '{formTitle}',
      fromEmail: '{adminEmail}',
      reply: '',
      message: `
# {formTitle}
<br>
{allFields}`
    }
  },
  components: {
    control
  }
}
