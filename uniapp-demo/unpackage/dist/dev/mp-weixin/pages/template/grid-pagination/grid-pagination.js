require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([35],{585:function(t,i,e){"use strict";var s=r(e(1)),a=r(e(586));function r(t){return t&&t.__esModule?t:{default:t}}new s.default(a.default).$mount()},586:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(588),a=e.n(s),r=e(589),n=!1;var c=function(t){n||e(587)},u=e(0)(a.a,r.a,c,null,null);u.options.__file="Users/gyl-dev/working/xiangliang/uniapp-demo/uniapp-demo/pages/template/grid-pagination/grid-pagination.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] grid-pagination.vue: functional components are not supported with templates, they should use render functions."),i.default=u.exports},587:function(t,i){},588:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{title:"grid",grids:["../../../static/c1.png","../../../static/c2.png","../../../static/c3.png","../../../static/c4.png","../../../static/c5.png","../../../static/c6.png","../../../static/c7.png","../../../static/c8.png","../../../static/c9.png"],isCircular:!1}},methods:{switchChange:function(t){this.isCircular=t.detail.value}}}},589:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"page"},[e("page-head",{attrs:{title:t.title,mpcomid:"jUr-0"}}),t._v(" "),e("view",{staticClass:"uni-list"},[e("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[e("view",{staticClass:"uni-list-cell-db"},[t._v("循环")]),t._v(" "),e("switch",{attrs:{eventid:"U0o-0"},on:{change:t.switchChange}})])]),t._v(" "),e("swiper",{attrs:{"indicator-dots":!0,autoplay:!0,circular:t.isCircular}},[e("swiper-item",{attrs:{mpcomid:"PVo-1"}},[e("view",{staticClass:"uni-grid-9"},t._l(t.grids,function(i,s){return e("view",{key:s,staticClass:"uni-grid-9-item",class:s%3==2?"no-border-right":"",attrs:{"hover-class":"uni-grid-9-item-hover"}},[e("image",{staticClass:"uni-grid-9-image",attrs:{src:i}}),t._v(" "),e("text",{staticClass:"uni-grid-9-text"},[t._v("grid")])])}))]),t._v(" "),e("swiper-item",{attrs:{mpcomid:"9D3-2"}},[e("view",{staticClass:"uni-grid-9"},t._l(t.grids,function(i,s){return e("view",{key:s,staticClass:"uni-grid-9-item",class:s%3==2?"no-border-right":"",attrs:{"hover-class":"uni-grid-9-item-hover"}},[e("image",{staticClass:"uni-grid-9-image",attrs:{src:i}}),t._v(" "),e("text",{staticClass:"uni-grid-9-text"},[t._v("grid")])])}))]),t._v(" "),e("swiper-item",{attrs:{mpcomid:"1zx-3"}},[e("view",{staticClass:"uni-grid-9"},t._l(t.grids,function(i,s){return e("view",{key:s,staticClass:"uni-grid-9-item",class:s%3==2?"no-border-right":"",attrs:{"hover-class":"uni-grid-9-item-hover"}},[e("image",{staticClass:"uni-grid-9-image",attrs:{src:i}}),t._v(" "),e("text",{staticClass:"uni-grid-9-text"},[t._v("grid")])])}))])],1)],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};i.a=a}},[585]);
//# sourceMappingURL=../../../.sourcemap/pages/template/grid-pagination/grid-pagination.js.map