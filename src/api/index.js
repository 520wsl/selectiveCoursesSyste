import axios from 'axios'
import qs from 'qs'


let toLogin = () => {
    MessageBox('提示', '您还没有登录，请先登录');
    router.push({ name: 'Hello' })
}
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 10000;

axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (res) {

        if (res.data && res.data.status == "401") {
            toLogin();
        }
        if (res && res.data && res.data.status != "200") {
            res.data.data = {

            };
        }
        return res;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default {
    get: (urlName = '', params = {}) => {
        return axios.get(
            urlName,
            {
                params: params
            }
        ).then((res) => {
            return res.data;
        })
    },
    post: (urlName = '', params = {}) => {
        return axios.get(
            urlName,
            qs.stringify(params)
        ).then((res) => {
            return res.data;
        })
    }
}