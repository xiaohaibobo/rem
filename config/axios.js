import Vue from 'vue';
import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:8888/api/';
Axios.defaults.timeout = 3000;

const axios = () => {
    Axios.interceptors.request.use(Options => {
        //数据开始请求时显示loading图标
        Vue.prototype.$indicator.open({
            text: 'Loading...',
            spinnerType: 'fading-circle'
        })
        return options;
    });
    Axios.interceptors.response.use(Options => {
        //数据响应成功后干掉loading图标
        Vue.prototype.$indicator.close();
        return options;
    });
    Vue.prototype.$axios = Axios;
}
export default axios;