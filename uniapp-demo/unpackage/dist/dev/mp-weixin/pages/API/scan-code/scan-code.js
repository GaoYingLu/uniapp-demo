require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([81],{284:function(e,t,n){"use strict";var s=i(n(1)),a=i(n(285));function i(e){return e&&e.__esModule?e:{default:e}}new s.default(a.default).$mount()},285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(287),a=n.n(s),i=n(288),o=!1;var u=function(e){o||n(286)},r=n(0)(a.a,i.a,u,null,null);r.options.__file="Users/gyl-dev/working/xiangliang/uniapp-demo/uniapp-demo/pages/API/scan-code/scan-code.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] scan-code.vue: functional components are not supported with templates, they should use render functions."),t.default=r.exports},286:function(e,t){},287:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{title:"scanCode",result:""}},onUnload:function(){this.result=""},methods:{scanCode:function(){var t=this;e.scanCode({success:function(e){t.result=e.result},fail:function(e){}})}}}}).call(t,n(2).default)},288:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[n("page-head",{attrs:{title:e.title,mpcomid:"4MX-0"}}),e._v(" "),n("view",{staticClass:"page-body"},[n("view",{staticClass:"page-section-title"},[e._v("扫码结果")]),e._v(" "),n("view",{staticClass:"uni-list"},[n("view",{staticClass:"uni-cell"},[n("view",{staticClass:"uni-input"},[e._v(e._s(e.result))])])]),e._v(" "),n("view",{staticClass:"btn-area"},[n("button",{attrs:{type:"primary",eventid:"4AB-0"},on:{tap:e.scanCode}},[e._v("扫一扫")])],1)])],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};t.a=a}},[284]);
//# sourceMappingURL=../../../.sourcemap/pages/API/scan-code/scan-code.js.map