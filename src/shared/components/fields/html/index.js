import control from './control'
import settings from './settings'
import process from './process'

export default {
  data: {
    title: 'HTML',
    description: 'The HTML field is useful for including custom valid HTML code on the form. This can be used for inserting text blocks, links, icons, or images.',
    icon: {
      path: 'M228.5 511.8l-25-7.1c-3.2-.9-5-4.2-4.1-7.4L340.1 4.4c.9-3.2 4.2-5 7.4-4.1l25 7.1c3.2.9 5 4.2 4.1 7.4L235.9 507.6c-.9 3.2-4.3 5.1-7.4 4.2zm-75.6-125.3l18.5-20.9c1.9-2.1 1.6-5.3-.5-7.1L49.9 256l121-102.5c2.1-1.8 2.4-5 .5-7.1l-18.5-20.9c-1.8-2.1-5-2.3-7.1-.4L1.7 252.3c-2.3 2-2.3 5.5 0 7.5L145.8 387c2.1 1.8 5.3 1.6 7.1-.5zm277.3.4l144.1-127.2c2.3-2 2.3-5.5 0-7.5L430.2 125.1c-2.1-1.8-5.2-1.6-7.1.4l-18.5 20.9c-1.9 2.1-1.6 5.3.5 7.1l121 102.5-121 102.5c-2.1 1.8-2.4 5-.5 7.1l18.5 20.9c1.8 2.1 5 2.3 7.1.4z',
      viewBox: '0 0 576 512'
    },
    category: 'Fancy fields',
    name: control.name,
    control: control.name,
    settings: settings.name,
    value: {
      description: 'Contents of this field are not displayed in the admin area.',
      input: '',
      className: ''
    }
  },
  components: {
    control,
    settings
  },
  process
}
