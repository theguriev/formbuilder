import control from './control'
import settings from './settings'
import process from './process'

export default {
  data: {
    title: 'Numbers',
    description: 'The Numbers field allows users to enter numeric values.',
    icon: {
      path: 'M634.79 149.58c-1.33-4.21-5.83-6.54-10.04-5.21L528 174.49V40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v144.45l-96 29.88V40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v184.3l-96 29.88V40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v224.15l-96 29.88V40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v263.99L5.58 337.12a8.005 8.005 0 0 0-5.21 10.04l4.84 15.25c1.33 4.21 5.83 6.54 10.04 5.21L112 337.51V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V327.54l96-29.88V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V287.7l96-29.88V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V247.85l96-29.88V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V208.01l106.42-33.13a8.005 8.005 0 0 0 5.21-10.04l-4.84-15.26z',
      viewBox: '0 0 640 512'
    },
    category: 'Standard fields',
    name: control.name,
    control: control.name,
    settings: settings.name,
    value: {
      label: 'Numbers',
      description: 'Here will be some description. Leave this field empty if you do not want to show description',
      required: false,
      input: 0,
      className: '',
      placeholder: '',
      max: 100,
      min: 0,
      step: 1
    }
  },
  components: {
    control,
    settings
  },
  process
}
