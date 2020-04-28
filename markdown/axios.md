
### 拦截器及数据转换处理

> 在@/axios/controller.js中，增加拦截器及transformData数据转换(状态码及错误信息处理)

### axios参数配置及优先级（依次覆盖， 均可配置转换器，请求头等，参数为axios配置）

> 在@/axios/index.js中，可使用Axios.create(defaultConfig)全局配置参数
> 在@/axios/axios.config.js中，给每种请求方式添加配置
> 在@/mixins/http.mixins.js中，sendHttpData解构params时可重新组装配置全局配置参数
> 调用sendHttpData时，可单独配置本次请求配置

### 请求示例

```
this.sendHttpData({
    // method（默认get）为自定义请求方式，真实请求方式为axios.config.js中配置为主
    method: 'postJson',
    // baseURL为接口地址，拼接在url之前（可用作接口代理字段）
    baseURL: '/',
    // url接口路径
    url: '/tableList',
    // params请求参数，get请求时默认拼接到url里，其他请求方式时，为请求体
    params: {
        userName: '',
        password: '123456'
    },
    // 发起请求到请求完成（失败/成功）时调起全局loading，默认为true（开启状态）
    loadingOverlay: true,
    // 请求失败/成功时toast信息，取值为false(默认为false，不作处理)/true(弹出接口返回信息)/string(使用此文案替换所有接口返回信息)
    successMessage: '请求成功',
    errorMessage: '请求失败',
    // 成功/失败回调，无success/error时不执行回掉；存在时，回掉接收请求数据res，可使用{code, message, success, result}进行解构
    success: (result) => {
        console.log('result111', result);
    },
    error: (error) => {
        console.log('errort111', error);
    }
});

```