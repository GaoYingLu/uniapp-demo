require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([75],{254:function(t,e,a){"use strict";var o=n(a(1)),s=n(a(255));function n(t){return t&&t.__esModule?t:{default:t}}new o.default(s.default).$mount()},255:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(257),s=a.n(o),n=a(258),i=!1;var u=function(t){i||a(256)},l=a(0)(s.a,n.a,u,null,null);l.options.__file="Users/gyl-dev/working/xiangliang/uniapp-demo/uniapp-demo/pages/API/toast/toast.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] toast.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},256:function(t,e){},257:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{title:"toast"}},methods:{toast1Tap:function(){t.showToast({title:"默认"})},toast2Tap:function(){t.showToast({title:"duration 3000",duration:3e3})},toast3Tap:function(){t.showToast({title:"loading",icon:"loading",duration:5e3})},toast4Tap:function(){t.showToast({title:"logo",image:"../../../static/uni@2x.png"})},hideToast:function(){t.hideToast()}}}}).call(e,a(2).default)},258:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("page-head",{attrs:{title:t.title,mpcomid:"J6p-0"}}),t._v(" "),a("view",{staticClass:"page-body"},[a("view",{staticClass:"btn-area"},[a("view",{staticClass:"body-view"},[a("button",{attrs:{type:"default",eventid:"XsL-0"},on:{tap:t.toast1Tap}},[t._v("点击弹出默认toast")])],1),t._v(" "),a("view",{staticClass:"body-view"},[a("button",{attrs:{type:"default",eventid:"6cE-1"},on:{tap:t.toast2Tap}},[t._v("点击弹出设置duration的toast")])],1),t._v(" "),a("view",{staticClass:"body-view"},[a("button",{attrs:{type:"default",eventid:"UIU-2"},on:{tap:t.toast3Tap}},[t._v("点击弹出显示loading的toast")])],1),t._v(" "),a("view",{staticClass:"body-view"},[a("button",{attrs:{type:"default",eventid:"pi7-3"},on:{tap:t.toast4Tap}},[t._v("点击弹出显示自定义图片的toast")])],1),t._v(" "),a("view",{staticClass:"body-view"},[a("button",{attrs:{type:"default",eventid:"6ww-4"},on:{tap:t.hideToast}},[t._v("点击隐藏toast")])],1)])])],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s}},[254]);
//# sourceMappingURL=../../../.sourcemap/pages/API/toast/toast.js.map