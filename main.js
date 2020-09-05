import Vue from 'vue';

import { router, axios } from './config';
import mintUI from './mint-ui-components';
import globalComponents from './global-components';
import './assets/css/base.less'

import App from '../src/components/App';

//注册mint-ui组件
mintUI();
//注册axios的配置
axios();
//注册全局子组件
globalComponents();
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
