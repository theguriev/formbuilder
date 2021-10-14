/* eslint-disable quotes */
import control from './control'
import settings from './settings'
import process from './process'

export default {
  data: {
    title: 'Columns',
    description: 'Add a block that displays content in multiple columns, then add whatever content blocks you’d like.',
    icon: {
      path: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM240 448H48c-8.837 0-16-7.163-16-16V96h208v352zm240-16c0 8.837-7.163 16-16 16H272V96h208v336z',
      viewBox: '0 0 512 512'
    },
    category: 'Layouts',
    name: control.name,
    control: control.name,
    settings: settings.name,
    mayHaveNested: true,
    value: {
      className: ''
    }
  },
  components: {
    control,
    settings
  },
  process
}
