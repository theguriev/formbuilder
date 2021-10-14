import control from './control'
import settings from './settings'
import process from './process'

export default {
  data: {
    title: 'Paragprah text',
    description: 'The Paragraph Text field provides a larger box for users to enter text.',
    icon: {
      path: 'M440 32H224A160 160 0 0 0 64.35 202.65c5.5 85 79.91 149.35 165.13 149.35H256v120a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V64h64v408a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V64h56a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8zM256 320h-32a128 128 0 0 1 0-256h32z',
      viewBox: '0 0 448 512'
    },
    category: 'Standard fields',
    name: control.name,
    control: control.name,
    settings: settings.name,
    value: {
      label: 'Paragprah text',
      description: 'Here will be some description. Leave this field empty if you do not want to show description',
      required: false,
      input: '',
      className: '',
      placeholder: '',
      max: ''
    }
  },
  components: {
    control,
    settings
  },
  process
}
