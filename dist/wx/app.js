require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_router__ = __webpack_require__(47);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.mixin(__WEBPACK_IMPORTED_MODULE_2__mixins_router__["a" /* default */]); // 全局mixins

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(45)
}
var normalizeComponent = __webpack_require__(8)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a3f4666", Component.options)
  } else {
    hotAPI.reload("data-v-4a3f4666", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    setConfig: function setConfig() {
      global.mpvue.setStorageSync('configData', Object({"httpUrl":"https://www.apiopen.top","imgUrl":"www.img.cn","otherData":Object({})}));
      return global.mpvue.getStorageSync('configData');
    }
  },
  created: function created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    this.setConfig(); // 缓存配置数据

    var logs = void 0;
    if (global.mpvuePlatform === 'my') {
      logs = global.mpvue.getStorageSync({ key: 'logs' }).data || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync({
        key: 'logs',
        data: logs
      });
    } else {
      logs = global.mpvue.getStorageSync('logs') || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync('logs', logs);
    }
  },
  log: function log() {
    console.log('log at:' + Date.now());
  }
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      router: 'router--->全局mixins'
    };
  },

  methods: {
    // 跳转新页面  val路径  query参数 参数为一个对象  type跳转类型 默认page
    _goRouter: function _goRouter(val) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'page';

      var url = '';
      var newStr = '';
      // 构造参数
      if (query === null) {
        url = val;
      }
      if (query !== null) {
        var str = '';
        for (var v in query) {
          str = str + (v + '=' + query[v] + '&');
        }
        newStr = '?' + str.substring(0, str.length - 1); // 截取参数
        url = val + newStr;
      }
      if (type === 'page') {
        // 正常页面
        wx.navigateTo({
          url: url
        });
      }
      if (type === 'tab') {
        // 选项卡页面
        wx.switchTab({
          url: val
        });
      }
    },

    // 页面重定向
    _redirectRouter: function _redirectRouter(val) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var url = '';
      var newStr = '';
      // 构造参数
      if (query === null) {
        url = val;
      }
      if (query !== null) {
        var str = '';
        for (var v in query) {
          str = str + (v + '=' + query[v] + '&');
        }
        newStr = '?' + str.substring(0, str.length - 1); // 截取参数
        url = val + newStr;
      }
      wx.redirectTo({
        url: url
      });
    },

    // 页面返回
    _routerBack: function _routerBack() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      wx.navigateBack({
        delta: num
      });
    }
  },
  created: function created() {},
  mounted: function mounted() {}
});

/***/ })

},[42]);