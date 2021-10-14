import control from './control'
import settings from './settings'
import process from './process'

export default {
  data: {
    title: 'Switcher',
    description: 'Switcher is used for switching between two opposing states.',
    icon: {
      path: 'M384 96c88.426 0 160 71.561 160 160 0 88.426-71.561 160-160 160H192c-88.426 0-160-71.561-160-160 0-88.425 71.561-160 160-160h192m0-32H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zm0 304c61.856 0 112-50.144 112-112s-50.144-112-112-112-112 50.144-112 112c0 28.404 10.574 54.339 27.999 74.082C320.522 353.335 350.548 368 384 368z',
      viewBox: '0 0 576 512'
    },
    category: 'Fancy fields',
    name: control.name,
    control: control.name,
    settings: settings.name,
    value: {
      label: 'Switcher',
      description: 'Here will be some description. Leave this field empty if you do not want to show description',
      input: '',
      className: '',
      activeColor: '#13ce66',
      inactiveColor: '#ff4949',
      activeText: '',
      inactiveText: ''
    }
  },
  components: {
    control,
    settings
  },
  process
}
