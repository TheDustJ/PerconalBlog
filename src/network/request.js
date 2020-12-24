import axios from 'axios';

export function request(config) {
  // 1、创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 10000
  });

  // 2、请求拦截器,在发送网络请求之前，对请求数据做一些判断
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  });

  // 3、响应拦截器，对相应结果进行处理
  instance.interceptors.response.use(res => {
    // 响应结果处理完，必须要return
    return res.data;
  }, err => {
    console.log(err);
  });
  // 网络请求，
  return instance(config);
}
