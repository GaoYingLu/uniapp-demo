require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([42],{39:function(e,t,a){"use strict";var n=i(a(1)),l=i(a(40));function i(e){return e&&e.__esModule?e:{default:e}}new n.default(l.default).$mount()},40:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(42),l=a.n(n),i=a(43),s=!1;var r=function(e){s||a(41)},u=a(0)(l.a,i.a,r,null,null);u.options.__file="Users/gyl-dev/working/xiangliang/uniapp-demo/uniapp-demo/pages/tabBar/template/template.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] template.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},41:function(e,t){},42:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{lists:[{name:"数字角标badge",url:"badge"},{name:"数字选择框number-box",url:"number-box"},{name:"弹出层popup",url:"popup"},{name:"多列选择picker",url:"mpvue-picker"},{id:"navbar",name:"顶部导航标题栏",open:!1,pages:[{name:"默认样式",url:"nav-default"},{name:"透明渐变样式",url:"nav-transparent"},{name:"导航栏带自定义按钮",url:"nav-button"},{name:"自定义导航栏组件(非原生)",url:"nav-bar"}]},{id:"tabbar",name:"顶部选项卡",url:"tabbar"},{name:"顶部分段器segment",url:"segmented-control"},{name:"抽屉侧滑菜单drawer",url:"drawer"},{name:"折叠面板",url:"accordion"},{id:"grid",name:"九宫格",open:!1,pages:[{name:"默认样式",url:"grid"},{name:"可左右滑动的九宫导航",url:"grid-pagination"}]},{name:"卡片视图",url:"cardview"},{id:"lists",name:"列表",open:!1,pages:[{name:"右侧带角标",url:"list-with-badges"},{name:"二级列表",url:"list-with-collapses"},{name:"三行列表",url:"list-triplex-row"}]},{name:"右侧索引列表indexList",url:"index-list"},{name:"图文列表",url:"media-list"},{name:"商品列表",url:"product-list"},{name:"加载更多load-more",url:"load-more"},{name:"懒加载lazy-load",open:!1,pages:[{name:"默认",url:"lazy-load"},{name:"自定义",url:"lazy-load-custom"}]},{name:"时间轴 timeline",url:"timeline"},{name:"ECharts图表",url:"echarts"},{name:"markdown富文本渲染",url:"mdparse"},{name:"手势图案锁屏",url:"gesture-lock"},{name:"列表到详情示例",url:"list2detail-list"},{name:"二维码生成",url:"qrcode"},{name:"图片裁剪",url:"crop"},{name:"markdown富文本编辑器",url:"md-editor"},{name:"侧边分类导航",url:"left-category"},{name:"步骤提示",url:"steps"},{name:"评论列表",url:"comments"},{name:"滚动公告",url:"scrollmsg"}]}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/template/template"}},onNavigationBarButtonTap:function(t){e.navigateTo({url:"/platforms/app-plus/about/about"})},methods:{trigerCollapse:function(e){for(var t=0,a=this.lists.length;t<a;++t)e===t?this.lists[t].pages?this.lists[t].open=!this.lists[e].open:this.goDetailPage(this.lists[t].url):this.lists[t].pages&&(this.lists[t].open=!1)},goDetailPage:function(t){var a=t.url?t.url:t,n=~a.indexOf("platform")?a:"/pages/template/"+a+"/"+a;e.navigateTo({url:n})}}}}).call(t,a(2).default)},43:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"index"},[e._m(0),e._v(" "),e._l(e.lists,function(t,n){return a("view",{key:n,staticClass:"uni-card"},[a("view",{staticClass:"uni-list"},[a("view",{staticClass:"uni-list-cell uni-collapse"},[a("view",{staticClass:"uni-list-cell-navigate",class:[t.open?"uni-active":"",t.pages?"uni-navigate-bottom":"uni-navigate-right"],attrs:{"hover-class":"uni-list-cell-hover",eventid:"3eD-0-"+n},on:{click:function(t){e.trigerCollapse(n)}}},[e._v("\n\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t")]),e._v(" "),t.pages?a("view",{staticClass:"uni-list uni-collapse",class:t.open?"uni-active":""},e._l(t.pages,function(t,l){return a("view",{key:l,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover",eventid:"9KN-1-"+n+"-"+l},on:{click:function(a){e.goDetailPage(t)}}},[a("view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[e._v(" "+e._s(t.name?t.name:t)+" ")])])})):e._e()])])])})],2)};n._withStripped=!0;var l={render:n,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"index-hd"},[t("image",{staticClass:"index-logo",attrs:{src:"../../../static/templateIndex.png"}}),this._v(" "),t("view",{staticClass:"page-section-title"},[this._v("以下是uni-app的部分模板示例，欢迎大家积极分享更多的模板，一起完善uni-app生态。")])])}]};t.a=l}},[39]);
//# sourceMappingURL=../../../.sourcemap/pages/tabBar/template/template.js.map