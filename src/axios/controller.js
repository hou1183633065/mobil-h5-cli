// 处理请求配置成功
export function controllerRequestSuccess(config) {
  return config
}

// 处理请求配置失败
export function controllerRequestError(error) {
  return Promise.reject(error)
}

// 处理成功响应体
export function controllerResponseSuccess(responseData) {
  const response = responseData.data

  // const { url = '' } = data.config || {}
  // url.includes('oauth/token')
  return {
    code: response.code ?? 500,
    success: response.success ?? false,
    message: response.message ?? '',
    result: response.data ?? {}
  }
}

// 处理失败响应体
export function controllerResponseError(error) {
  const { status = 500, message = '' } = error?.response?.data ?? {}

  return Promise.reject({
    code: status,
    success: false,
    message: message,
    result: null
  })
}

// 状态码及消息处理
export function transformData(response) {
  let {
    code,
    result,
    message,
    success
  } = response
  if (!code) {
    resolve({
      success: true,
      result,
      code: 200,
      message: ''
    })
  }
  code = Number(code || 500)
  switch (code) {
      case 500:
        message = '服务器异常, 请联系我们！'
        break
  }
  // success为false、字符串false、undefined、null、''等的全部转为false
  // success = success === "false" || !success ? false : true
  resolve({
    success: !!(code === 200 && success),
    result,
    code,
    message
  })
}
