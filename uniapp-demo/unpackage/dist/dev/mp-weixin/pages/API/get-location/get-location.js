require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([97],{334:function(t,e,o){"use strict";var a=i(o(1)),n=i(o(335));function i(t){return t&&t.__esModule?t:{default:t}}new a.default(n.default).$mount()},335:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(337),n=o.n(a),i=o(338),s=!1;var c=function(t){s||o(336)},l=o(0)(n.a,i.a,c,null,null);l.options.__file="Users/gyl-dev/working/xiangliang/uniapp-demo/uniapp-demo/pages/API/get-location/get-location.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] get-location.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},336:function(t,e){},337:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=o(7).formatLocation;e.default={data:function(){return{title:"getLocation",hasLocation:!1,location:{}}},methods:{getLocation:function(){var e=this;t.getLocation({success:function(t){e.hasLocation=!0,e.location=a(t.longitude,t.latitude)}})},clear:function(){this.hasLocation=!1}}}}).call(e,o(2).default)},338:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",[o("page-head",{attrs:{title:t.title,mpcomid:"4kT-0"}}),t._v(" "),o("view",{staticClass:"page-body"},[o("view",{staticClass:"page-section"},[o("view",{staticClass:"page-body-info"},[o("text",{staticClass:"page-body-text-small"},[t._v("当前位置经纬度")]),t._v(" "),!1===t.hasLocation?o("block",[o("text",{staticClass:"page-body-text"},[t._v("未获取")])]):t._e(),t._v(" "),!0===t.hasLocation?o("block",[o("view",{staticClass:"page-body-text-location"},[o("text",[t._v("E: "+t._s(t.location.longitude[0])+"°"+t._s(t.location.longitude[1])+"′")]),t._v(" "),o("text",[t._v("N: "+t._s(t.location.latitude[0])+"°"+t._s(t.location.latitude[1])+"′")])])]):t._e()],1),t._v(" "),o("view",{staticClass:"btn-area"},[o("button",{attrs:{type:"primary",eventid:"eif-0"},on:{tap:t.getLocation}},[t._v("获取位置")]),t._v(" "),o("button",{attrs:{eventid:"0QD-1"},on:{tap:t.clear}},[t._v("清空")])],1)])])],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n}},[334]);
//# sourceMappingURL=../../../.sourcemap/pages/API/get-location/get-location.js.map