require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([86],{269:function(e,t,n){"use strict";var o=c(n(1)),a=c(n(270));function c(e){return e&&e.__esModule?e:{default:e}}new o.default(a.default).$mount()},270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(272),a=n.n(o),c=n(273),s=!1;var r=function(e){s||n(271)},i=n(0)(a.a,c.a,r,null,null);i.options.__file="Users/gyl-dev/working/xiangliang/uniapp-demo/uniapp-demo/pages/API/on-accelerometer-change/on-accelerometer-change.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] on-accelerometer-change.vue: functional components are not supported with templates, they should use render functions."),t.default=i.exports},271:function(e,t){},272:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{title:"onAccelerometerChange",value:""}},onUnload:function(){e.stopAccelerometer()},methods:{watchAcce:function(){var t=this;e.onAccelerometerChange(function(e){t.value="监听设备的加速度变化:\nX轴："+e.x.toFixed(2)+"\nY轴："+e.y.toFixed(2)+"\nZ轴："+e.z.toFixed(2)})},stopAcce:function(){e.stopAccelerometer()}}}}).call(t,n(2).default)},273:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[n("page-head",{attrs:{title:e.title,mpcomid:"K8z-0"}}),e._v(" "),n("view",{staticClass:"page-body"},[n("view",{staticClass:"page-section"},[n("view",{staticClass:"page-section-spacing"},[n("button",{attrs:{type:"primary",eventid:"o3F-0"},on:{tap:e.watchAcce}},[e._v("监听设备的加速度变化")]),e._v(" "),n("button",{attrs:{type:"primary",eventid:"m1l-1"},on:{tap:e.stopAcce}},[e._v("停止监听设备的加速度变化")])],1)]),e._v(" "),n("view",{staticClass:"page-section"},[n("view",{staticClass:"page-section-spacing"},[n("textarea",{attrs:{value:e.value}})])])])],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[]};t.a=a}},[269]);
//# sourceMappingURL=../../../.sourcemap/pages/API/on-accelerometer-change/on-accelerometer-change.js.map