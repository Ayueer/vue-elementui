// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
//引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入axios
import axios from 'axios'
//引入vuex
import Vuex from 'vuex'
//引入store
import store from "./store"
//使用Vue-Router
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.prototype.axios = axios;
Vue.use(Vuex);
Vue.config.productionTip = false

//路由跳转之前
router.beforeEach((to,from,next)=>{
  let isLogin = sessionStorage.getItem("isLogin");
  //注销
  if(to.path=="/logout"){
    sessionStorage.clear();
    next({path:'/login'});
  }else if(to.path=="/login"){
    if(isLogin!=null){
      next({path:'/home/admin'})
    }
  }else if(isLogin == null){
    next({path:'/login'});
  }
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
