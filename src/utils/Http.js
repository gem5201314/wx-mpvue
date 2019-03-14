
// HTTP工具类
export default class Http {
  static httpRequest (method, url, data, contentType = 'json', loading = true) {
    // 网络请求提示
    let httpUrl = mpvue.getStorageSync('configData').httpUrl || ''
    return new Promise((resolve, reject) => {
      mpvue.request({
        url: httpUrl + url,
        method: method,
        data,
        header: {
          'Accept': '*/*',
          'content-type': contentType === 'json' ? 'application/json' : 'application/x-www-form-urlencoded; charset=UTF-8',
          ...this.createAuthHeader()
        },
        success (res) {
          // 数据统一处理

          console.log('========>>>>>>>>>>>>>>>>>>>>>杨幂>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
          console.log(res)
          console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<杨幂<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<========')
          resolve(res)
        },
        fail (err) {
          // 错误信息捕捉
          reject(err)
        },
        complete (info) {
          // 关闭网络请求提示
        }
      })
    })
  }

  /**
   * 异常
   */
  static requestException (res) {
    const error = {}
    error.statusCode = res.statusCode
    const wxData = res.data
    if (wxData) {
      error.code = wxData.code ? wxData.code : 'error'
      error.message = wxData.message ? wxData.message : '未知错误'
    }
    if (error.statusCode === 401) {
      console.log('401')
      mpvue.navigateTo({
        url: '/pages/login'
      })
    } else {
    }
    return error
  }

  /**
   * 构造授权头部
   */
  static createAuthHeader () {
    const token = mpvue.getStorageSync('token')
    let header = {}
    header['Authorization'] = token || 'no token'
    return header
  }

  static get (url, data, contentType = 'json', loading = true) {
    return this.httpRequest('GET', url, data, contentType, loading)
  }

  static put (url, data, contentType = 'json', loading = true) {
    return this.httpRequest('PUT', url, data, contentType, loading)
  }

  static post (url, data, contentType = 'json', loading = true) {
    return this.httpRequest('POST', url, data, contentType, loading)
  }

  static patch (url, data, contentType = 'json', loading = true) {
    return this.httpRequest('PATCH', url, data, contentType, loading)
  }

  static delete (url, data, contentType = 'json', loading = true) {
    return this.httpRequest('DELETE', url, data, contentType, loading)
  }
}
