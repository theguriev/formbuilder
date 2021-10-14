/* eslint-disable quotes */
import control from './control'
import settings from './settings'
import process from './process'

export default {
  data: {
    test: control,
    title: 'Dropdown',
    description: 'The Dropdown field contains a list of items that is displayed when users click on it, and allows users to choose an item from the list.',
    icon: {
      path: 'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352zm-200.5-96.4l-115-115.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L224 296l99.5-99.5c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17l-115 115.1c-4.8 4.5-12.4 4.5-17.1-.1z',
      viewBox: '0 0 448 512'
    },
    category: 'Standard fields',
    name: control.name,
    control: control.name,
    settings: settings.name,
    value: {
      label: 'Dropdown',
      description: 'Here will be some description. Leave this field empty if you do not want to show description',
      required: false,
      options: [
        {
          label: 'First',
          value: 'First'
        },
        {
          label: 'Second',
          value: 'Second'
        },
        {
          label: 'Third',
          value: 'Third'
        }
      ],
      clearable: true,
      multiple: false,
      collapseTags: true,
      input: '',
      inputMultiple: [],
      className: '',
      placeholder: ''
    }
  },
  components: {
    control,
    settings
  },
  process
}
