//1.引入对应模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from './../pages/Home/Home'
import Recommend from '../pages/Recommend/Recommend'
// import Chat from './../pages/Chat/Chat'
// import Me from './../pages/Me/Me'
// import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'
import MeSetting from '../pages/Me/MeSetting'
import MeDetail from '../pages/Me/MeDetail'

//路由组件懒加载
const Home = ()=> import("./../pages/Home/Home");
const Chat = ()=> import("./../pages/Chat/Chat");
const Me = ()=> import("./../pages/Me/Me");
const Search = ()=> import("./../pages/Search/Search");
// const Recommend = ()=> import("../pages/Recommend/Recommend");

//2.二级路由
import Hot from '../pages/Home/Children/Hot/Hot'
import Dress from './../pages/Home/Children/Dress'
import Box from './../pages/Home/Children/Box'
import Ele from './../pages/Home/Children/Ele'
import Food from './../pages/Home/Children/Food'
import General from './../pages/Home/Children/General'
import Man from './../pages/Home/Children/Man'
import Mbaby from './../pages/Home/Children/Mbaby'
import Shirt from './../pages/Home/Children/Shirt'

//2.声明使用
Vue.use(VueRouter);

//3.输出路由对象
export default new VueRouter({
  //3.1配置一级路由
  routes:[
    {
      path:'/home',
      component:Home,
      children:[
        //热门板块
        {path:'hot',component:Hot,meta:{showButtonTabBar:true}},
        {path:'dress',component:Dress},
        {path:'box',component:Box},
        {path:'ele',component:Ele},
        {path:'food',component:Food},
        {path:'general',component:General},
        {path:'man',component:Man},
        {path:'mbaby',component:Mbaby},
        {path:'shirt',component:Shirt},
        {path:'/home',redirect:'/home/hot'}
      ]
    },
    {
      path:'/recommend',
      component:Recommend,
      meta:{showButtonTabBar:true}
    },
    {
      path:'/chat',
      component:Chat,
      meta:{showButtonTabBar:true}
    },
    {
      path:'/me',
      component:Me,
      meta:{showButtonTabBar:true}
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/setting',
      component:MeSetting
    },
    {
      path:'/detail',
      component:MeDetail
    },
    {
      path:'/search',
      component:Search,
      meta:{showButtonTabBar:true}
    },
    {
      path:'/',
      redirect:'/home'
    },
  ]
});
