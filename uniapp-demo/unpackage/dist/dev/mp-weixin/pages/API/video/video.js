require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([73],{324:function(e,t,s){"use strict";var i=n(s(1)),a=n(s(325));function n(e){return e&&e.__esModule?e:{default:e}}new i.default(a.default).$mount()},325:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(327),a=s.n(i),n=s(328),o=!1;var u=function(e){o||s(326)},c=s(0)(a.a,n.a,u,null,null);c.options.__file="Users/gyl-dev/working/xiangliang/uniapp-demo/uniapp-demo/pages/API/video/video.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] video.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},326:function(e,t){},327:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var s=[["camera"],["album"],["camera","album"]];t.default={data:function(){return{title:"chooseVideo",sourceTypeIndex:2,sourceType:["拍摄","相册","拍摄或相册"],src:""}},onUnload:function(){this.src="",this.sourceTypeIndex=2,this.sourceType=["拍摄","相册","拍摄或相册"]},methods:{sourceTypeChange:function(e){this.sourceTypeIndex=e.target.value},chooseVideo:function(){var t=this;e.chooseVideo({sourceType:s[this.sourceTypeIndex],success:function(e){t.src=e.tempFilePath}})}}}}).call(t,s(2).default)},328:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",[s("page-head",{attrs:{title:e.title,mpcomid:"9qS-0"}}),e._v(" "),s("view",{staticClass:"page-body"},[s("view",{staticClass:"page-section"},[s("view",{staticClass:"uni-list"},[s("view",{staticClass:"uni-list-cell"},[e._m(0),e._v(" "),s("view",{staticClass:"uni-list-cell-right"},[s("picker",{attrs:{range:e.sourceType,value:e.sourceTypeIndex,eventid:"Xzt-0"},on:{change:e.sourceTypeChange}},[s("view",{staticClass:"uni-input"},[e._v(e._s(e.sourceType[e.sourceTypeIndex]))])])],1)])]),e._v(" "),s("view",{staticClass:"page-body-info"},[e.src?[s("video",{staticClass:"video",attrs:{src:e.src}})]:[s("view",{staticClass:"image-plus image-plus-nb",attrs:{eventid:"4pa-1"},on:{tap:e.chooseVideo}},[s("view",{staticClass:"image-plus-horizontal"}),e._v(" "),s("view",{staticClass:"image-plus-vertical"})]),e._v(" "),s("view",{staticClass:"image-plus-text"},[e._v("添加视频")])]],2)])])],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"uni-list-cell-left"},[t("view",{staticClass:"uni-label"},[this._v("视频来源")])])}]};t.a=a}},[324]);
//# sourceMappingURL=../../../.sourcemap/pages/API/video/video.js.map