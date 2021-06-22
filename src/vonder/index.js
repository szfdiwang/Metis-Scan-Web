import Vue from 'vue'
import { Menu, Submenu, MenuItem, MenuItemGroup, Message, Select, Option, OptionGroup, Scrollbar } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)
const ary = [Menu, Submenu, MenuItem, MenuItemGroup, Select, Option, OptionGroup, Scrollbar]
ary.forEach(component => Vue.use(component))
Vue.prototype.$message = Message
