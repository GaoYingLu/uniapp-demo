require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([23],{471:function(t,e,a){"use strict";var n=i(a(1)),s=i(a(472));function i(t){return t&&t.__esModule?t:{default:t}}new n.default(s.default).$mount()},472:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(474),s=a.n(n),i=a(475),o=!1;var u=function(t){o||a(473)},l=a(0)(s.a,i.a,u,null,null);l.options.__file="Users/gyl-dev/working/xiangliang/uniapp-demo/uniapp-demo/pages/template/nav-default/nav-default.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] nav-default.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},473:function(t,e){},474:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{title:"nav-default",hasSetText:!1,hasSetBg:!1}},methods:{setText:function(){this.hasSetText=!this.hasSetText,t.setNavigationBarTitle({title:this.hasSetText?"Hello uni-app":"默认导航栏"})},setBg:function(){this.hasSetBg=!this.hasSetBg,t.setNavigationBarColor({frontColor:this.hasSetBg?"#ffffff":"#000000",backgroundColor:this.hasSetBg?"#007AFF":"#F8F8F8"})}}}}).call(e,a(2).default)},475:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"page"},[a("page-head",{attrs:{title:t.title,mpcomid:"7cI-0"}}),t._v(" "),a("view",{staticClass:"page-body"},[a("view",{staticClass:"page-section-title"},[t._v("\n\t\t\t本页标题栏是uni-app的默认配置，开发者可在pages.json里配置文字内容及标题颜色，也可通过api接口将其改变。\n\t\t")]),t._v(" "),a("view",{staticClass:"page-body-buttons"},[a("button",{attrs:{type:"default",eventid:"ZVi-0"},on:{click:t.setText}},[t._v("改变标题栏文字")]),t._v(" "),a("button",{attrs:{type:"default",eventid:"L1b-1"},on:{click:t.setBg}},[t._v("改变标题栏颜色")])],1)])],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s}},[471]);
//# sourceMappingURL=../../../.sourcemap/pages/template/nav-default/nav-default.js.map