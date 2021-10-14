import control from './control'
import settings from './settings'
import process from './process'

export default {
  data: {
    title: 'Single line text',
    description: 'The Single Line Text field allows users to enter any characters into a standard sized input area.',
    icon: {
      path: 'M448 48v72a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V64H240v384h72a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h72V64H32v56a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V48a16 16 0 0 1 16-16h416a16 16 0 0 1 16 16z',
      viewBox: '0 0 448 512'
    },
    category: 'Standard fields',
    name: control.name,
    control: control.name,
    settings: settings.name,
    value: {
      label: 'Single line text',
      description: 'Here will be some description. Leave this field empty if you do not want to show description',
      required: false,
      placeholder: '',
      max: '',
      type: 'text',
      className: '',
      input: ''
    }
  },
  components: {
    control,
    settings
  },
  process
}
