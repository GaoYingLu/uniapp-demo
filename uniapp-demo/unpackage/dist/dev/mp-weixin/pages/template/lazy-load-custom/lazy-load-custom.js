require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([34],{623:function(t,e,i){"use strict";var s=a(i(1)),n=a(i(624));function a(t){return t&&t.__esModule?t:{default:t}}new s.default(n.default).$mount()},624:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(626),n=i.n(s),a=i(627),o=!1;var l=function(t){o||i(625)},u=i(0)(n.a,a.a,l,null,null);u.options.__file="Users/gyl-dev/working/xiangliang/uniapp-demo/uniapp-demo/pages/template/lazy-load-custom/lazy-load-custom.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] lazy-load-custom.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},625:function(t,e){},626:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){for(var t=["shuijiao","muwu","cbd"],e=[],i=0;i<20;i++)e.push({src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/"+t[i%3]+".jpg",show:!1,loaded:!1});return{windowHeight:0,defaultSrc:"../../../static/60x60.png",list:e,show:!1}},methods:{load:function(){var e=this;t.createSelectorQuery().selectAll(".lazy").boundingClientRect(function(t){t.forEach(function(t,i){t.top<=e.windowHeight&&(e.list[t.dataset.index].show=!0)})}).exec()},onLoad:function(t){this.list[t.target.dataset.index].loaded=!0}},onLoad:function(){this.windowHeight=t.getSystemInfoSync().windowHeight},onShow:function(){var t=this;this.show||(this.show=!0,setTimeout(function(){t.load()},100))},onPageScroll:function(){this.load()}}}).call(e,i(2).default)},627:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[t._m(0),t._v(" "),i("view",{staticClass:"uni-list"},t._l(t.list,function(e,s){return i("view",{key:s,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[i("view",{staticClass:"uni-media-list"},[i("view",{staticClass:"uni-media-list-logo"},[i("image",{staticClass:"image",class:{lazy:!e.show},attrs:{"data-index":s,src:e.show?e.src:"",eventid:"OPE-0-"+s},on:{load:t.onLoad}}),t._v(" "),i("image",{staticClass:"image defaul",class:{loaded:e.loaded},attrs:{src:t.defaultSrc}})]),t._v(" "),t._m(1,!0)])])}))])};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"content"},[e("view",{staticClass:"title"},[this._v("延迟加载的理念：页面初始化时，暂不加载处于屏幕可见区域之外的图片。该方案会有如下几大好处：")]),this._v(" "),e("view",{staticClass:"ul"},[e("view",[this._v("加快页面渲染速度")]),this._v(" "),e("view",[this._v("提升页面滚动性能")]),this._v(" "),e("view",[this._v("默认不下载屏幕外的图片，减少网络流量")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-media-list-body"},[e("view",{staticClass:"uni-media-list-text-top"},[this._v("主标题")]),this._v(" "),e("view",{staticClass:"uni-media-list-text-bottom uni-ellipsis"},[this._v("列表二级标题")])])}]};e.a=n}},[623]);
//# sourceMappingURL=../../../.sourcemap/pages/template/lazy-load-custom/lazy-load-custom.js.map