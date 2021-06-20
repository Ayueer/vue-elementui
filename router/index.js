import Vue from "vue"
import Router from "vue-router"
import Content from "../components/Content"
import Login from "../views/Login"
import Main from "../views/Main"
import MemberList from "../views/MemberList"
import MemberLevel from "../views/MemberLevel"
import NotFound from"../views/NotFound" 
Vue.use(Router);
export default new Router({
  mode:"history",//去掉#号哈希
  routes: [{
      //路由跳转路径
      path: '/content',
      //路由名称
      name: 'Content',
      //组件名称
      component: Content
    },
    {//登录页
      //路由跳转路径
      path: '/login',
      //路由名称
      name: 'Login',
      //组件名称
      component: Login
    },
    {//首页
      path:'/home/:name',
      name:'Main',
      component:Main,
      //子内容页
      children:[{
        path:'/member/list',
        name:'MemberList',
        component: MemberList
      },
      {
        path:'/member/level/:id',
        name:'MemberLevel',
        component: MemberLevel,
        props:true
      }
      ]
    },
    {//重回首页，重定向
      path:'/goMain/:name',
      redirect:'/home/:name'
    },
    {//404
      path:"*",
      component:NotFound
    }
  ]
})
