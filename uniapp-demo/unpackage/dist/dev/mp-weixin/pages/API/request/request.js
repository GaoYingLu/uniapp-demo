require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([81],{294:function(e,t,n){"use strict";var s=a(n(1)),o=a(n(295));function a(e){return e&&e.__esModule?e:{default:e}}new s.default(o.default).$mount()},295:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(297),o=n.n(s),a=n(298),i=!1;var u=function(e){i||n(296)},r=n(0)(o.a,a.a,u,null,null);r.options.__file="Users/gyl-dev/working/xiangliang/uniapp-demo/uniapp-demo/pages/API/request/request.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] request.vue: functional components are not supported with templates, they should use render functions."),t.default=r.exports},296:function(e,t){},297:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});t.default={data:function(){return{title:"request",loading:!1}},methods:{makeRequest:function(){var t=this;this.loading=!0,e.request({url:"https://service.dcloud.net.cn/ajax/echo/text?name=uni-app",data:{noncestr:Date.now()},success:function(t){e.showToast({title:"请求成功",icon:"success",mask:!0,duration:2e3}),console.log("request success",t)},fail:function(t){console.log("request fail",t),e.showModal({content:t.errMsg,showCancel:!1})},complete:function(){t.loading=!1}})}}}}).call(t,n(2).default)},298:function(e,t,n){"use strict";var s=function(){var e=this.$createElement,t=this._self._c||e;return t("view",[t("page-head",{attrs:{title:this.title,mpcomid:"ddo-0"}}),this._v(" "),t("view",{staticClass:"page-body"},[this._m(0),this._v(" "),t("view",{staticClass:"btn-area"},[t("button",{attrs:{type:"primary",loading:this.loading,eventid:"yuA-0"},on:{tap:this.makeRequest}},[this._v("request")])],1)])],1)};s._withStripped=!0;var o={render:s,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"page-body-wording"},[t("text",{staticClass:"page-body-text"},[this._v("\n\t\t\t\t点击向服务器发起请求\n\t\t\t")])])}]};t.a=o}},[294]);
//# sourceMappingURL=../../../.sourcemap/pages/API/request/request.js.map