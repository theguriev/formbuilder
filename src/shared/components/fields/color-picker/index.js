import control from './control'
import settings from './settings'
import process from './process'

export default {
  data: {
    title: 'Color picker',
    description: 'ColorPicker is a color selector supporting multiple color formats.',
    icon: {
      path: 'M112 264c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm32-112c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM256 0c-16.9 0-34.2 1.6-51.7 5C104.9 24.4 24.8 104.3 5.2 203.4-29.4 378.5 116.4 512 239.5 512c8.3 0 16.5-.6 24.6-1.9 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.6 113.9 397.1 0 256 0zm191.1 288h-79.7c-35.3 0-67.4 17.9-85.7 47.8-18.2 29.7-19.6 66-3.7 97.2 4.9 9.6 4.8 21.6-.1 31.3-2.4 4.6-7.9 12.6-18.7 14.3-6.3 1-12.9 1.5-19.7 1.5-54.6 0-114.1-31.3-155.5-81.6-44-53.6-60.9-120.6-47.4-188.7 17.1-86.6 87-156.2 173.9-173.2 15.2-3 30.5-4.5 45.5-4.5 123.1 0 223.6 99.9 224 222.6 0 18.3-14.8 33.3-32.9 33.3zM368 136c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM240 88c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z',
      viewBox: '0 0 512 512'
    },
    category: 'Fancy fields',
    name: control.name,
    control: control.name,
    settings: settings.name,
    value: {
      label: 'Color picker',
      description: 'Here will be some description. Leave this field empty if you do not want to show description',
      required: false,
      input: null,
      className: ''
    }
  },
  components: {
    control,
    settings
  },
  process
}
