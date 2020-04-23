import Axios from 'axios';
import AxiosConfig from './axios.config';
// import Qs from 'qs'
import {
  controllerRequestSuccess,
  controllerRequestError,
  controllerResponseSuccess,
  controllerResponseError
} from './controller';

let instance = Axios.create({
  baseURL: 'instance'
});

instance.interceptors.request.use(config => controllerRequestSuccess(config), error => controllerRequestError(error));
instance.interceptors.response.use(data => controllerResponseSuccess(data), error => controllerResponseError(error));

// instance.defaults.paramsSerializer = (params) => {
//   return Qs.stringify(params)
// }
// instance.defaults.timeout = 5000
// instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'
// instance.defaults.headers.common['TK-token'] = 'TK_TOKEN'

export default class CreateRequest {
  constructor(requestParams = {}) {
    this.config = requestParams;
  }
  send(requestParams = {}) {
    const { method = 'get', params = {}, ...configs } = requestParams;
    // 根据method决定params是否在请求体中
    const requestBody = method === 'get' ? { params } : { data: params };
    // 配置参数/传入参数合并
    const resultParams = Object.assign({}, AxiosConfig[method], configs, requestBody);

    return instance.request(resultParams);
  }
}
