require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([42],{29:function(e,t,n){"use strict";var i=s(n(1)),a=s(n(30));function s(e){return e&&e.__esModule?e:{default:e}}new i.default(a.default).$mount()},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(32),a=n.n(i),s=n(33),o=!1;var l=function(e){o||n(31)},r=n(0)(a.a,s.a,l,null,null);r.options.__file="Users/gyl-dev/working/xiangliang/uniapp-demo/uniapp-demo/pages/tabBar/component/component.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] component.vue: functional components are not supported with templates, they should use render functions."),t.default=r.exports},31:function(e,t){},32:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{lists:[{id:"view",name:"视图容器",open:!1,pages:["view","scroll-view","swiper","movable-view"]},{id:"content",name:"基础内容",open:!1,pages:["text","rich-text","icon","progress"]},{id:"form",name:"表单组件",open:!1,pages:["button","checkbox","form","input","label","picker","picker-view","radio","slider","switch","textarea"]},{id:"nav",name:"导航",open:!1,pages:["navigator"]},{id:"media",name:"媒体组件",open:!1,pages:["image","audio","video"]},{id:"map",name:"地图",open:!1,pages:["map"]},{id:"web-view",name:"网页",open:!1,pages:["web-view"]}]}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/component/component"}},onNavigationBarButtonTap:function(t){e.navigateTo({url:"/platforms/app-plus/about/about"})},methods:{trigerCollapse:function(e){for(var t=0,n=this.lists.length;t<n;++t)this.lists[t].open=e===t&&!this.lists[t].open},goDetailPage:function(t){e.navigateTo({url:"/pages/component/"+t+"/"+t})}}}}).call(t,n(2).default)},33:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"index"},[e._m(0),e._v(" "),e._l(e.lists,function(t,i){return n("view",{key:i,staticClass:"uni-card"},[n("view",{staticClass:"uni-list"},[n("view",{staticClass:"uni-list-cell uni-collapse"},[n("view",{staticClass:"uni-list-cell-navigate uni-navigate-bottom",class:t.open?"uni-active":"",attrs:{"hover-class":"uni-list-cell-hover",eventid:"gqv-0-"+i},on:{click:function(t){e.trigerCollapse(i)}}},[e._v("\n\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t")]),e._v(" "),n("view",{staticClass:"uni-list uni-collapse",class:t.open?"uni-active":""},e._l(t.pages,function(t,a){return n("view",{key:a,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover",eventid:"CNp-1-"+i+"-"+a},on:{click:function(n){e.goDetailPage(t)}}},[n("view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[e._v(" "+e._s(t)+" ")])])}))])])])})],2)};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"index-hd"},[t("image",{staticClass:"index-logo",attrs:{src:"../../../static/componentIndex.png"}}),this._v(" "),t("view",{staticClass:"page-section-title"},[this._v("\n\t\t\t以下将展示uni-app官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见uni-app开发文档。\n\t\t")])])}]};t.a=a}},[29]);
//# sourceMappingURL=../../../.sourcemap/pages/tabBar/component/component.js.map