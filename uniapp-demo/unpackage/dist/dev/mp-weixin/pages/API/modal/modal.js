require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([90],{249:function(t,e,n){"use strict";var o=i(n(1)),a=i(n(250));function i(t){return t&&t.__esModule?t:{default:t}}new o.default(a.default).$mount()},250:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(252),a=n.n(o),i=n(253),l=!1;var s=function(t){l||n(251)},u=n(0)(a.a,i.a,s,null,null);u.options.__file="Users/gyl-dev/working/xiangliang/uniapp-demo/uniapp-demo/pages/API/modal/modal.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] modal.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},251:function(t,e){},252:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{title:"modal",modalHidden:!0,modalHidden2:!0}},methods:{modalTap:function(e){t.showModal({title:"弹窗标题",content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",showCancel:!1,confirmText:"确定"})},noTitlemodalTap:function(e){t.showModal({content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",confirmText:"确定",cancelText:"取消"})}}}}).call(e,n(2).default)},253:function(t,e,n){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("page-head",{attrs:{title:this.title,mpcomid:"h66-0"}}),this._v(" "),e("view",{staticClass:"page-body"},[e("view",{staticClass:"btn-area"},[e("button",{attrs:{type:"default",eventid:"n5p-0"},on:{tap:this.modalTap}},[this._v("有标题的modal")]),this._v(" "),e("button",{attrs:{type:"default",eventid:"qT7-1"},on:{tap:this.noTitlemodalTap}},[this._v("无标题的modal")])],1)])],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a}},[249]);
//# sourceMappingURL=../../../.sourcemap/pages/API/modal/modal.js.map