import qs from 'qs'
import Axios from 'axios'

export default (context, inject) => {

    let axios = new Object();

    axios.post = function (url, data) {
        return Axios({
            method: 'post',
            url: url,
            // withCredentials: true,
            data: qs.stringify(data)
        });
    }

    axios.get = Axios.get;


    //全局请求拦截
    Axios.interceptors.response.use(response => {
        return response;
    }, error => {
        return Promise.reject(error);
    });

    //将axios注入服务端的环境()
    context.$axios = axios;


    //同时向 context, Vue, Vuex注入axios
    //这里在asyncData({app}) 中 使用 app.$axios 也可以用
    //但是这写法好难看，所以就有了上面的一句代码
    inject('axios', axios);

}