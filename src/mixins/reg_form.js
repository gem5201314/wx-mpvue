
export default {
  data () {
    return {
      name: 'mixin'
    }
  },
  created () {
  },
  methods: {
      //formREG 验证方式
      fromReg(value, regType) {
        let regIsOk = false
        switch (regType) {
          case '身份证':
            return /^[\d]{18}$/.test(value)
          case '姓名':
            return /^[\u4e00-\u9fa5]{2,4}$/.test(value.trim())
          case '电话':
            return /^[1][3,4,5,7,8][0-9]{9}$/.test(value)
          case '数组图片':
            return value.length >= 1
          case '非空':
            return /^[\d\D]{1,20}$/.test(value)
          case '验证码':
            return /^[\d]{6}$/.test(value)
          case '意见':
            return /^[\d\D]{5,}$/.test(value.trim())
          case '评论':
            return /^[\d\D]{1,}$/.test(value.trim())
          case '随意':
            return true
        }
        return regIsOk
      }
}
  }





