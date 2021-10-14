import Vue from 'vue'
import SingleLineText from './single-line-text/'
import ParagraphText from './paragraph-text/'
import Dropdown from './dropdown/'
import MultipleChoice from './multiple-choice/'
import Hidden from './hidden/'
import Url from './url/'
import Numbers from './numbers/'
import Html from './html/'
import Rate from './rate/'
import Slider from './slider/'
import Calendar from './calendar/'
import Switcher from './switcher/'
import TimePicker from './time-picker/'
import DatePicker from './date-picker/'
import ColorPicker from './color-picker/'
import Columns from './columns/'
import SubmitButton from './submit-button/'
import Uploader from './uploader/'

/**
 * Load all fields
 */
export default function () {
  [
    SingleLineText,
    ParagraphText,
    Dropdown,
    MultipleChoice,
    Hidden,
    Url,
    Numbers,
    Html,
    Rate,
    Slider,
    Calendar,
    Switcher,
    TimePicker,
    DatePicker,
    ColorPicker,
    SubmitButton,
    Uploader,
    Columns
  ].forEach(
    ctrl => {
      Vue.component(ctrl.components.control.name, ctrl.components.control)
      Vue.component(ctrl.components.settings.name, ctrl.components.settings)
      window.bgl.fields.push(ctrl.data)
      window.bgl.process[ctrl.data.name] = ctrl.process
    }
  )
}
