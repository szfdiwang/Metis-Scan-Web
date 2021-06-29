import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementLocale from 'element-ui/lib/locale'
import en from './en'
import zh from './zh'

Vue.use(VueI18n)
var browserLanguage
// 判断浏览器默认语言 在切换后存入
// eslint-disable-next-line space-before-function-paren
const identifyLanguage = function () {
  const language = navigator.language || window.navigator.browserLanguage
  console.log('language', language)
  if (language) {
    browserLanguage = language.toLowerCase().substr(0, 2)
    console.log('browserLanguage', browserLanguage)
  }
}
identifyLanguage()
const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || browserLanguage,
  messages: {
    zh,
    en
  },
  silentTranslationWarn: true
})
ElementLocale.i18n((key, value) => i18n.t(key, value))
export default i18n