require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([69],{169:function(t,a,e){"use strict";var n=i(e(1)),s=i(e(170));function i(t){return t&&t.__esModule?t:{default:t}}new n.default(s.default).$mount()},170:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(172),s=e.n(n),i=e(173),o=!1;var c=function(t){o||e(171)},r=e(0)(s.a,i.a,c,null,null);r.options.__file="Users/gyl-dev/working/xiangliang/uniapp-demo/uniapp-demo/pages/component/canvas/canvas.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] canvas.vue: functional components are not supported with templates, they should use render functions."),a.default=r.exports},171:function(t,a){},172:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0});var e=null,n=null;a.default={data:function(){return{title:"canvas",screenWidth:t.getSystemInfoSync().windowWidth,canvasWidth:0,position:{x:150,y:150,vx:2,vy:2}}},onReady:function(){e=t.createCanvasContext("canvas"),this.canvasWidth=this.screenWidth/750*610,this.position={x:this.canvasWidth/2,y:this.canvasWidth/2,vx:2,vy:2},this.drawBall(),n=setInterval(this.drawBall,17)},onUnload:function(){clearInterval(n),this.position={x:0,y:0,vx:0,vy:0}},methods:{drawBall:function(){var t=this.position;function a(t,a){e.beginPath(0),e.arc(t,a,5,0,2*Math.PI),e.setFillStyle("#1aad19"),e.setStrokeStyle("rgba(1,1,1,0)"),e.fill(),e.stroke()}t.x+=t.vx,t.y+=t.vy,t.x>=this.canvasWidth&&(t.vx=-2),t.x<=7&&(t.vx=2),t.y>=this.canvasWidth&&(t.vy=-2),t.y<=7&&(t.vy=2),a(t.x,this.canvasWidth/2),a(this.canvasWidth/2,t.y),a(this.canvasWidth-t.x,this.canvasWidth/2),a(this.canvasWidth/2,this.canvasWidth-t.y),a(t.x,t.y),a(this.canvasWidth-t.x,this.canvasWidth-t.y),a(t.x,this.canvasWidth-t.y),a(this.canvasWidth-t.x,t.y),e.draw()}}}}).call(a,e(2).default)},173:function(t,a,e){"use strict";var n=function(){var t=this.$createElement,a=this._self._c||t;return a("view",[a("page-head",{attrs:{title:this.title,mpcomid:"O2w-0"}}),this._v(" "),this._m(0)],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("view",{staticClass:"page-body"},[a("view",{staticClass:"page-body-wrapper"},[a("canvas",{staticClass:"canvas",attrs:{"canvas-id":"canvas"}})])])}]};a.a=s}},[169]);
//# sourceMappingURL=../../../.sourcemap/pages/component/canvas/canvas.js.map