import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import {
	Form,
	FormItem,
	Input,
	Message,
    RadioGroup,
    Radio,
    Button,
	Container,
	Header,
	Aside,
	Main,
	Menu,
    Submenu ,
	MenuItemGroup,
	MenuItem,
	Breadcrumb,
	BreadcrumbItem,
	Card,
	Row,
	Col,
    Link,
	Table,
	TableColumn,
	Switch,
	Tooltip,
	Pagination,
	Dialog,
	MessageBox,
	Tag,
	Tree,
	Select,
	Option,
	Cascader,
	Alert,
	Tabs,
	TabPane,
	Steps,
	Step,
	CheckboxGroup,
	Checkbox,
	Upload
} from 'element-ui' //弹框提示组件    所有组件都能合并


Vue.use(RadioGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Row)
Vue.use(Radio)
Vue.use(Button)
Vue.use(Link)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
// Vue.use(Breadcrumb)
// Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Col)
// Vue.use(Table)
// Vue.use(TableColumn)
// Vue.use(Switch)
// Vue.use(Tooltip)
// Vue.use(Pagination)
// Vue.use(Dialog)
// Vue.use(Select)
// Vue.use(Tree)
// Vue.use(Option)
// Vue.use(Tag)
// Vue.use(Cascader)
// Vue.use(Alert)
// Vue.use(Tabs)
// Vue.use(TabPane)
// Vue.use(Steps)
// Vue.use(Step)
// Vue.use(CheckboxGroup)
// Vue.use(Checkbox)
// Vue.use(Upload)


Vue.prototype.$message = Message //挂载到全局  所有组件可以使用
Vue.prototype.$confirm = MessageBox.confirm //挂载到全局  所有组件可以使用
