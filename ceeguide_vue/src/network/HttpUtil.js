import axios  from "axios";
import Cookies from 'js-cookie';
export function request(config){
  const instance = axios.create({
      baseURL:'https://cloud.gzgkzytb.cn',
      // baseURL:'http://localhost:8443',
      timeout: 10000, 
  });
  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['token'] = `${localStorage.getItem('token')}`;
    
    // 设置Cookie的SameSite属性为None，并启用Secure
    Cookies.set('token', localStorage.getItem('token'), { sameSite: 'None', secure: true });
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  
  return instance;
}





