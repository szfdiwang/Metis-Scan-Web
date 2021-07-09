import Vue from 'vue'
import {
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Message,
    Scrollbar,
    Input,
    Row,
    Col,
    Pagination,
    Select,
    Steps,
    step,
    Table,
    TableColumn,
    Tabs,
    TabPane,
    option,
    datePicker,
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)
const ary = [Menu, Submenu, MenuItem, MenuItemGroup, Scrollbar, Input, Row, Col, Pagination, Select, Table, Steps, step,
    TableColumn, Tabs, TabPane, option, datePicker
]
ary.forEach(component => Vue.use(component))
Vue.prototype.$message = Message