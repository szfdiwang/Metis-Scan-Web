import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from 'echarts'
import './assets/css/index.scss'
import i18n from './i18n'
import mixin from '@/mixin/mixin'
import './vonder'
import 'element-ui/lib/theme-chalk/index.css'
import * as filters from './filters'
import * as dayjs from 'dayjs'

Object.keys(filters).map(key => {
  Vue.filter(key, filters[key])
})

Vue.mixin(mixin)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$day = dayjs

function setHtmlFontSize() {
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  const htmlDom = document.getElementsByTagName('html')[0]
  htmlDom.style.fontSize = htmlWidth / 19.2 + 'px'
}
setHtmlFontSize()
// eslint-disable-next-line space-before-function-paren
window.onresize = function () {
  setHtmlFontSize()
}

window.vm = new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')