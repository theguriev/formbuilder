import control from './control'
import settings from './settings'
import process from './process'

export default {
  data: {
    title: 'Number slider',
    description: 'The Number slider field provides a posibilty to choose a number between certain range values.',
    icon: {
      path: 'M496 72H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v24H16C7.2 72 0 79.2 0 88v16c0 8.8 7.2 16 16 16h208v24c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-24h208c8.8 0 16-7.2 16-16V88c0-8.8-7.2-16-16-16zm0 320H160v-24c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v24H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h80v24c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-24h336c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm0-160h-80v-24c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v24H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h336v24c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-24h80c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z',
      viewBox: '0 0 512 512'
    },
    category: 'Fancy fields',
    name: control.name,
    control: control.name,
    settings: settings.name,
    value: {
      label: 'Number slider',
      description: 'Here will be some description. Leave this field empty if you do not want to show description',
      input: 0,
      inputMultiple: [1, 2],
      className: '',
      step: 1,
      min: 0,
      max: 10,
      showStops: true,
      multiple: false,
      showInput: false
    }
  },
  components: {
    control,
    settings
  },
  process
}
