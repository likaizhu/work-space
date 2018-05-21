import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config'
import store from './store'
import axios from 'axios'
import Loading from './components/loading'
import filters from './filters'
Object.keys(filters).forEach((key)=>Vue.filter(key,filters[key]));//过滤器生效
Vue.use(VueRouter)
Vue.use(Loading)

//拦截器
//axios的配置
axios.interceptors.request.use(function(config){
  //在请求发出之前进行一些操作
  store.dispatch('showLoading')
  return config;
},function(err){
  //Do something with request error
  return Promise.reject(error);
});

Vue.prototype.$http=axios;//把axios挂在Vue的实例上

axios.interceptors.response.use(function(res){
  //在这里对返回的数据进行处理
  store.dispatch('hideLoading')
  return res;
},function(err){
  //Do something with response error
  return Promise.reject(error);
})

const router=new VueRouter({
	routes:routerConfig,
	mode:'history',
	scrollBehavior:()=>({
		y:0
	})
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
