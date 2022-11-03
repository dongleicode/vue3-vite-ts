import axios from "axios";
import {
    Dialog,
    Toast
} from 'vant';

const Api = axios.create({
    //   baseURL: process.env.VUE_APP_API_BASE, // 域名配置，可添加变量配置文件定义
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    //   withCredentials: true, // 跨域请求时是否需要使用凭证
    timeout: 30000, // 请求超时时间
});


Api.interceptors.request.use((config) => {
  // 预处理请求的信息
  //添加请求头token
  config.headers['Content-Type'] = "application/x-www-form-urlencoded;charset=utf-8";
//   config.headers['Access-Control-Allow-Origin'] = "*";

  // 自定义全局加载图标
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
  });
  return config
}, (error) => {
  // 预处理请求有异常error时抛出错误
  return Promise.reject(error)
})
 

Api.interceptors.response.use((response) => {
  // 预处理相应的数据
  Toast.clear();
  return response
}, (error) => {
    console.log("error====",error)

  Toast.clear();
  const status = error.response.status;
  // 错误返回 状态码验证
  switch (status) {
    case 404:
        Dialog.alert({
          title: '温馨提示',
          message: '404：请求接口地址不存在'
        })
      break;
    case 500:
        Dialog.alert({
          title: '温馨提示',
          message: '500：服务器异常，请稍后重试'
        })
      break;
    case 801:
        Dialog.alert({
          title: '温馨提示',
          message: '801：参数签名错误，请核对'
        })
      break;
    case 504:
      Dialog.alert({
        title: '温馨提示',
        message: '504：网关超时'
      })
      break;
    case 901:
        Dialog.alert({
          title: '温馨提示',
          message: '901：登录超时,请重新登录'
        }).then(() => {
          // on close
        });
      break;
      default:
          Dialog.alert({
            title: '温馨提示',
            message: JSON.stringify(error),
          })
      break;
  }
  return Promise.reject(error)
})  


export default async function request(options) {
  try {
    const response = await axios(options);
    const { data, error } = handleResponse(response);
    if (error) {
      throw error;
    } else {
      return { response, data };
    }
  } catch (error) {
    throw error;
  }
}


function handleResponse(response) {
  const { data } = response.data;
  return { data };
}

