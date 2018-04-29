/**
 * Created by IvanCai on 2017/4/19.
 */
import  axios from 'axios'
import utils from './dk-utils'
import {apiDomain} from '../../configs/enviroment'

const dkAxios = axios.create({
  baseURL: apiDomain,
  headers:{
    token:utils.getCookie("projectName_token")
  },
  timeout: 10000, //设置超时时间
})
dkAxios.interceptors.request.use(function (config) {
  config.headers={token:utils.getCookie("pagerbox_token")}
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


dkAxios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  let {status, data} = error.response
  switch (status) {
    case 401:
      vm.$router.push('/login')
          break
    case 412:
      vm.$router.push('/login')
      break
    default:
      return Promise.reject(data);
  }
});
export default dkAxios
