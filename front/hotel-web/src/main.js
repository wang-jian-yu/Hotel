import Vue from 'vue'
import axios from 'axios'
import NProgress from 'nprogress'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
import './assets/css/maincss.css'
import './mock/index.js'
Vue.config.productionTip = false

//引入图片懒加载依赖
import VueLazyload from 'vue-lazyload'
//自定义选项
Vue.use(VueLazyload, {
  loading: require('./assets/loading.gif'),
  lazyComponent: true
})


//导入字体图标icon
import './assets/fonts/iconfont.css'
//导入全局样式
// import './assets/css/global.css'

//配置请求跟路径
axios.defaults.baseURL='http://www.ysqorz.top:8888/api/private/v1/'
//axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
// 在 request 拦截器中，展示进度条 NProgress.start()
axios.interceptors.request.use(config=>{
	  NProgress.start()
	config.headers.Authorization=window.sessionStorage.getItem('token')
	//	最后必须returnconfig 
	return  config;
})
// 在 response 拦截器中，隐藏进度条 NProgress.done()
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})
Vue.prototype.$http=axios  //这样所有组件就可以用过this. 发请求了



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

 