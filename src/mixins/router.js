export default {
  data () {
    return {
      router: 'router--->全局mixins'
    }
  },
  methods: {
    // 跳转新页面  val路径  query参数 参数为一个对象  type跳转类型 默认page
    _goRouter (val, query = null, type = 'page') {
      let url = ''
      let newStr = ``
      // 构造参数
      if (query === null) {
        url = val
      }
      if (query !== null) {
        let str = ''
        for (let v in query) {
          str = str + `${v}=${query[v]}&`
        }
        newStr = `?${str.substring(0, str.length - 1)}` // 截取参数
        url = val + newStr
      }
      if (type === 'page') { // 正常页面
        wx.navigateTo({
          url
        })
      }
      if (type === 'tab') { // 选项卡页面
        wx.switchTab({
          url: val
        })
      }
    },
    // 页面重定向
    _redirectRouter (val, query = null) {
      let url = ''
      let newStr = ``
      // 构造参数
      if (query === null) {
        url = val
      }
      if (query !== null) {
        let str = ''
        for (let v in query) {
          str = str + `${v}=${query[v]}&`
        }
        newStr = `?${str.substring(0, str.length - 1)}` // 截取参数
        url = val + newStr
      }
      wx.redirectTo({
        url
      })
    },
    // 页面返回
    _routerBack (num = 1) {
      wx.navigateBack({
        delta: num
      })
    }
  },
  created () {},
  mounted () {}

}
