require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{32:function(t,e,n){"use strict";var o=i(n(0)),r=i(n(33));function i(t){return t&&t.__esModule?t:{default:t}}new o.default(r.default).$mount()},33:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(35),r=n.n(o),i=n(36),u=!1;var s=function(t){u||n(34)},a=n(1)(r.a,i.a,s,null,null);a.options.__file="Users/gyl-dev/working/first-uniapp/first-uniapp2/pages/user/user.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] user.vue: functional components are not supported with templates, they should use render functions."),e.default=a.exports},34:function(t,e){},35:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=n(3);e.default={computed:o({},(0,r.mapState)(["hasLogin","forcedLogin"])),methods:o({},(0,r.mapMutations)(["logout"]),{bindLogin:function(){t.navigateTo({url:"../login/login"})},bindLogout:function(){this.logout(),this.forcedLogin&&t.reLaunch({url:"../login/login"})}})}}).call(e,n(2).default)},36:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"btn-row"},[t.hasLogin?t._e():n("button",{staticClass:"primary",attrs:{type:"primary",eventid:"nPd-0"},on:{tap:t.bindLogin}},[t._v("登录")]),t._v(" "),t.hasLogin?n("button",{attrs:{type:"default",eventid:"ElP-1"},on:{tap:t.bindLogout}},[t._v("退出登录")]):t._e()],1)])};o._withStripped=!0;var r={render:o,staticRenderFns:[]};e.a=r}},[32]);
//# sourceMappingURL=../../.sourcemap/pages/user/user.js.map