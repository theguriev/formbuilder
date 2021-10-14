import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import FooterLogo from '@/builder/components/footer-logo'
import Templates from '@/builder/components/templates'
import IconBase from '@/builder/components/icon-base'
import FormConfirmation from '@/shared/components/fields/form-confirmation/'
import FormNotification from '@/shared/components/fields/form-notification/'
import '@/shared/mock'
import fieldsLoad from '@/shared/components/fields/load'
import '@/assets/css/variables.css'
import '@/assets/css/style.css'
import '@/assets/css/element.css'
import '@/assets/css/reset.css'
import '@/assets/css/builder.css'
import 'javascript-detect-element-resize'

fieldsLoad()

Vue.use(ElementUI, { locale })
Vue.use(VueCompositionApi)
Vue.config.productionTip = false

Vue.component('footer-logo', FooterLogo)
Vue.component('templates', Templates)
Vue.component('icon-base', IconBase)
Vue.component(FormConfirmation.data.name, FormConfirmation.components.control)
Vue.component(FormNotification.data.name, FormNotification.components.control)

const vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#beagl')

/** Important debug notifications */
window.bgl.notify = vue.$notify
