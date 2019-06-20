import Vue from 'vue'
import App from './App'
import LyTab from 'ly-tab'
import store from './store/index'
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';

//配置字体图标
import "@/common/css/style.css"

//配置mint-ui
import {Actionsheet} from 'mint-ui'
Vue.component(Actionsheet.name,Actionsheet);
import {DatetimePicker} from 'mint-ui'
Vue.component(DatetimePicker.name,DatetimePicker);

Vue.use(LyTab);
//配置图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.png'

Vue.use(VueLazyload, {
  loading: loading,
})

//引入路由器
import router from './router/index'
new Vue({
  el:'#app',
  router,
  store,
  render:h=>h(App)
});
