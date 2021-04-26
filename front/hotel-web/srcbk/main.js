import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
import './assets/css/maincss.css'
Vue.config.productionTip = false

//引入图片懒加载依赖
import VueLazyload from 'vue-lazyload'
//自定义选项
Vue.use(VueLazyload, {
  loading: require('./assets/loading.gif'),
  lazyComponent: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
/*
{
  "id": 500,
  "rid": 0,
  "username": "admin",
  "mobile": "",
  "email": "",
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUwMCwicmlkIjowLCJpYXQiOjE2MTkxNDA0MTQsImV4cCI6MTYxOTIyNjgxNH0.puyFA4h2PjAq6qwNN3kHmmDVw3Jp3ztvLAtdo5Y2sNM"
} */