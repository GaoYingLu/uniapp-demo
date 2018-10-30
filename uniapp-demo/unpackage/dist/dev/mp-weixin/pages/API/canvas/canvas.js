require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([101],{239:function(e,t,n){"use strict";var o=i(n(1)),a=i(n(240));function i(e){return e&&e.__esModule?e:{default:e}}new o.default(a.default).$mount()},240:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(242),a=n.n(o),i=n(243),r=!1;var s=function(e){r||n(241)},l=n(0)(a.a,i.a,s,null,null);l.options.__file="Users/gyl-dev/working/xiangliang/uniapp-demo/uniapp-demo/pages/API/canvas/canvas.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] canvas.vue: functional components are not supported with templates, they should use render functions."),t.default=l.exports},241:function(e,t){},242:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=null;t.default={data:function(){return{title:"createContext",names:["rotate","scale","reset","translate","save","restore","drawImage","fillText","fill","stroke","clearRect","beginPath","closePath","moveTo","lineTo","rect","arc","quadraticCurveTo","bezierCurveTo","setFillStyle","setStrokeStyle","setGlobalAlpha","setShadow","setFontSize","setLineCap","setLineJoin","setLineWidth","setMiterLimit"]}},onReady:function(){n=e.createCanvasContext("canvas")},methods:{toTempFilePath:function(){e.canvasToTempFilePath({canvasId:"canvas",success:function(e){console.log(e.tempFilePath)},fail:function(e){console.error(JSON.stringify(e))}})},handleCanvasButton:function(e){this[e]()},rotate:function(){n.beginPath(),n.rotate(10*Math.PI/180),n.rect(225,75,20,10),n.fill(),n.draw()},scale:function(){n.beginPath(),n.rect(25,25,50,50),n.stroke(),n.scale(2,2),n.beginPath(),n.rect(25,25,50,50),n.stroke(),n.draw()},reset:function(){n.beginPath(),n.setFillStyle("#000000"),n.setStrokeStyle("#000000"),n.setFontSize(10),n.setGlobalAlpha(1),n.setShadow(0,0,0,"rgba(0, 0, 0, 0)"),n.setLineCap("butt"),n.setLineJoin("miter"),n.setLineWidth(1),n.setMiterLimit(10),n.draw()},translate:function(){n.beginPath(),n.rect(10,10,100,50),n.fill(),n.translate(70,70),n.beginPath(),n.fill(),n.draw()},save:function(){n.beginPath(),n.setStrokeStyle("#00ff00"),n.save(),n.scale(2,2),n.setStrokeStyle("#ff0000"),n.rect(0,0,100,100),n.stroke(),n.restore(),n.rect(0,0,50,50),n.stroke(),n.draw()},restore:function(){[3,2,1].forEach(function(e){n.beginPath(),n.save(),n.scale(e,e),n.rect(10,10,100,100),n.stroke(),n.restore()}),n.draw()},drawImage:function(){n.drawImage("../../../static/uni@2x.png",0,0),n.draw()},fillText:function(){n.setStrokeStyle("#ff0000"),n.beginPath(),n.moveTo(0,10),n.lineTo(300,10),n.stroke(),n.setFontSize(10),n.fillText("Hello World",0,30),n.setFontSize(20),n.fillText("Hello World",100,30),n.beginPath(),n.moveTo(0,30),n.lineTo(300,30),n.stroke(),n.draw()},fill:function(){n.beginPath(),n.rect(20,20,150,100),n.setStrokeStyle("#00ff00"),n.fill(),n.draw()},stroke:function(){n.beginPath(),n.moveTo(20,20),n.lineTo(20,100),n.lineTo(70,100),n.setStrokeStyle("#00ff00"),n.stroke(),n.draw()},clearRect:function(){n.setFillStyle("#ff0000"),n.beginPath(),n.rect(0,0,300,150),n.fill(),n.clearRect(20,20,100,50),n.draw()},beginPath:function(){n.beginPath(),n.setLineWidth(5),n.setStrokeStyle("#ff0000"),n.moveTo(0,75),n.lineTo(250,75),n.stroke(),n.beginPath(),n.setStrokeStyle("#0000ff"),n.moveTo(50,0),n.lineTo(150,130),n.stroke(),n.draw()},closePath:function(){n.beginPath(),n.setLineWidth(1),n.moveTo(20,20),n.lineTo(20,100),n.lineTo(70,100),n.closePath(),n.stroke(),n.draw()},moveTo:function(){n.beginPath(),n.moveTo(0,0),n.lineTo(300,150),n.stroke(),n.draw()},lineTo:function(){n.beginPath(),n.moveTo(20,20),n.lineTo(20,100),n.lineTo(70,100),n.stroke(),n.draw()},rect:function(){n.beginPath(),n.rect(20,20,150,100),n.stroke(),n.draw()},arc:function(){n.beginPath(),n.setLineWidth(2),n.arc(75,75,50,0,2*Math.PI,!0),n.moveTo(110,75),n.arc(75,75,35,0,Math.PI,!1),n.moveTo(65,65),n.arc(60,65,5,0,2*Math.PI,!0),n.moveTo(95,65),n.arc(90,65,5,0,2*Math.PI,!0),n.stroke(),n.draw()},quadraticCurveTo:function(){n.beginPath(),n.moveTo(20,20),n.quadraticCurveTo(20,100,200,20),n.stroke(),n.draw()},bezierCurveTo:function(){n.beginPath(),n.moveTo(20,20),n.bezierCurveTo(20,100,200,100,200,20),n.stroke(),n.draw()},setFillStyle:function(){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach(function(e,t){n.setFillStyle(e),n.beginPath(),n.rect(0+75*t,0,50,50),n.fill()}),n.draw()},setStrokeStyle:function(){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach(function(e,t){n.setStrokeStyle(e),n.beginPath(),n.rect(0+75*t,0,50,50),n.stroke()}),n.draw()},setGlobalAlpha:function(){n.setFillStyle("#000000"),[1,.5,.1].forEach(function(e,t){n.setGlobalAlpha(e),n.beginPath(),n.rect(0+75*t,0,50,50),n.fill()}),n.draw(),n.setGlobalAlpha(1)},setShadow:function(){n.beginPath(),n.setShadow(10,10,10,"rgba(0, 0, 0, 199)"),n.rect(10,10,100,100),n.fill(),n.draw()},setFontSize:function(){[10,20,30,40].forEach(function(e,t){n.setFontSize(e),n.fillText("Hello, world",20,20+40*t)}),n.draw()},setLineCap:function(){n.setLineWidth(10),["butt","round","square"].forEach(function(e,t){n.beginPath(),n.setLineCap(e),n.moveTo(20,20+20*t),n.lineTo(100,20+20*t),n.stroke()}),n.draw()},setLineJoin:function(){n.setLineWidth(10),["bevel","round","miter"].forEach(function(e,t){n.beginPath(),n.setLineJoin(e),n.moveTo(20+80*t,20),n.lineTo(100+80*t,50),n.lineTo(20+80*t,100),n.stroke()}),n.draw()},setLineWidth:function(){[2,4,6,8,10].forEach(function(e,t){n.beginPath(),n.setLineWidth(e),n.moveTo(20,20+20*t),n.lineTo(100,20+20*t),n.stroke()}),n.draw()},setMiterLimit:function(){n.setLineWidth(4),[2,4,6,8,10].forEach(function(e,t){n.beginPath(),n.setMiterLimit(e),n.moveTo(20+80*t,20),n.lineTo(100+80*t,50),n.lineTo(20+80*t,100),n.stroke()}),n.draw()}}}}).call(t,n(2).default)},243:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[n("page-head",{attrs:{title:e.title,mpcomid:"8XF-0"}}),e._v(" "),n("view",{staticClass:"page-body"},[n("view",{staticClass:"page-section"},[n("canvas",{staticClass:"canvas-element",attrs:{"canvas-id":"canvas"}}),e._v(" "),n("scroll-view",{staticClass:"canvas-buttons",attrs:{"scroll-y":"true"}},[e._l(e.names,function(t,o){return n("block",{key:o},[n("button",{staticClass:"canvas-button",attrs:{eventid:"8va-0-"+o},on:{tap:function(n){e.handleCanvasButton(t)}}},[e._v(e._s(t))])],1)}),e._v(" "),n("button",{staticClass:"canvas-button",attrs:{type:"primary",eventid:"9qI-1"},on:{tap:e.toTempFilePath}},[e._v("toTempFilePath")])],2)],1)])],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[]};t.a=a}},[239]);
//# sourceMappingURL=../../../.sourcemap/pages/API/canvas/canvas.js.map