require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('div', [_vm._v("wwwwwwww")]), _vm._v(" "), _c('p', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm._goRouter('/pages/A/main')
      }
    }
  }, [_vm._v("index")]), _vm._v(" "), _c('card', {
    attrs: {
      "text": _vm.testData.name,
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5db9529e", esExports)
  }
}

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(61);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5db9529e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(114);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(62)
}
var normalizeComponent = __webpack_require__(8)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5db9529e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5db9529e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/home/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5db9529e", Component.options)
  } else {
    hotAPI.reload("data-v-5db9529e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 62:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_tool__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_card__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_http_base__ = __webpack_require__(68);
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    card: __WEBPACK_IMPORTED_MODULE_1__components_card__["a" /* default */]
  },
  data: function data() {
    return {
      testData: {
        name: 'yangmi'
      }
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_tool__["a" /* default */]],
  methods: {},
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_2__api_http_base__["a" /* default */].get('/journalismApi').then(function (res) {
      console.log('-----------^^^^^------------邓紫棋res', res);
    });
  }
});

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_card_vue__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7ab43f35_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_card_vue__ = __webpack_require__(67);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(65)
}
var normalizeComponent = __webpack_require__(8)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7ab43f35_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_card_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ab43f35", Component.options)
  } else {
    hotAPI.reload("data-v-7ab43f35", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 65:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['text']
});

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', {
    staticClass: "card"
  }, [_vm._v(_vm._s(_vm.text))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7ab43f35", esExports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Http__ = __webpack_require__(69);



var base = function base() {
  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, base);
};

base.get = __WEBPACK_IMPORTED_MODULE_1__utils_Http__["a" /* default */].get.bind(__WEBPACK_IMPORTED_MODULE_1__utils_Http__["a" /* default */]);
base.put = __WEBPACK_IMPORTED_MODULE_1__utils_Http__["a" /* default */].put.bind(__WEBPACK_IMPORTED_MODULE_1__utils_Http__["a" /* default */]);
base.post = __WEBPACK_IMPORTED_MODULE_1__utils_Http__["a" /* default */].post.bind(__WEBPACK_IMPORTED_MODULE_1__utils_Http__["a" /* default */]);
base.delete = __WEBPACK_IMPORTED_MODULE_1__utils_Http__["a" /* default */].delete.bind(__WEBPACK_IMPORTED_MODULE_1__utils_Http__["a" /* default */]);
base.phpKey = {
  keysend: { // 发送参数-key
    pageKey: 'page', // 当前页码
    perPageKey: 'perPage' // 每页数据加载条数
  },
  keyback: { // ---获取的参数
    currentPageKey: 'currentPage', // 当前页码
    pageCountKey: 'pageCount', // 总页码
    totalKey: 'totalCount', // 总数据条数
    itemKey: 'item' // 数据集合
  }
  // java
};
base.javaKey = {
  keysend: {
    pageKey: 'page',
    perPageKey: 'pageSize'
  },
  keyback: {
    currentPageKey: 'currentPage',
    pageCountKey: 'pages',
    totalKey: 'total',
    itemKey: 'list'
  }
  // python
};
base.pythonKey = {
  keysend: {
    pageKey: 'page',
    perPageKey: 'perPage'
  },
  keyback: {
    currentPageKey: 'currentPage',
    pageCountKey: 'pages',
    totalKey: 'total',
    itemKey: 'list'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (base);

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);





// HTTP工具类
var Http = function () {
  function Http() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Http);
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Http, null, [{
    key: 'httpRequest',
    value: function httpRequest(method, url, data) {
      var _this = this;

      var contentType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'json';
      var loading = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

      // 网络请求提示
      var httpUrl = global.mpvue.getStorageSync('configData').httpUrl || '';
      return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        global.mpvue.request({
          url: httpUrl + url,
          method: method,
          data: data,
          header: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            'Accept': '*/*',
            'content-type': contentType === 'json' ? 'application/json' : 'application/x-www-form-urlencoded; charset=UTF-8'
          }, _this.createAuthHeader()),
          success: function success(res) {
            // 数据统一处理

            console.log('========>>>>>>>>>>>>>>>>>>>>>杨幂>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
            console.log(res);
            console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<杨幂<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<========');
            resolve(res);
          },
          fail: function fail(err) {
            // 错误信息捕捉
            reject(err);
          },
          complete: function complete(info) {
            // 关闭网络请求提示
          }
        });
      });
    }

    /**
     * 异常
     */

  }, {
    key: 'requestException',
    value: function requestException(res) {
      var error = {};
      error.statusCode = res.statusCode;
      var wxData = res.data;
      if (wxData) {
        error.code = wxData.code ? wxData.code : 'error';
        error.message = wxData.message ? wxData.message : '未知错误';
      }
      if (error.statusCode === 401) {
        console.log('401');
        global.mpvue.navigateTo({
          url: '/pages/login'
        });
      } else {}
      return error;
    }

    /**
     * 构造授权头部
     */

  }, {
    key: 'createAuthHeader',
    value: function createAuthHeader() {
      var token = global.mpvue.getStorageSync('token');
      var header = {};
      header['Authorization'] = token || 'no token';
      return header;
    }
  }, {
    key: 'get',
    value: function get(url, data) {
      var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'json';
      var loading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      return this.httpRequest('GET', url, data, contentType, loading);
    }
  }, {
    key: 'put',
    value: function put(url, data) {
      var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'json';
      var loading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      return this.httpRequest('PUT', url, data, contentType, loading);
    }
  }, {
    key: 'post',
    value: function post(url, data) {
      var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'json';
      var loading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      return this.httpRequest('POST', url, data, contentType, loading);
    }
  }, {
    key: 'patch',
    value: function patch(url, data) {
      var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'json';
      var loading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      return this.httpRequest('PATCH', url, data, contentType, loading);
    }
  }, {
    key: 'delete',
    value: function _delete(url, data) {
      var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'json';
      var loading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      return this.httpRequest('DELETE', url, data, contentType, loading);
    }
  }]);

  return Http;
}();

/* harmony default export */ __webpack_exports__["a"] = (Http);

/***/ })

},[60]);