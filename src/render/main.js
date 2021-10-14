import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import VueCustomElement from 'vue-custom-element'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import fieldsLoad from '@/shared/components/fields/load'
import Render from '@/render/components/render'
import '@/shared/mock'
import '@/assets/css/variables.css'
import '@/assets/css/style.css'
import '@/assets/css/element.css'
import '@/assets/css/reset.css'

fieldsLoad()

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(VueCompositionApi)
Vue.use(VueCustomElement)
Vue.customElement('bgl-render', Render)
