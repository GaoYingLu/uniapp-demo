require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([73],{314:function(t,e,a){"use strict";var i=o(a(1)),s=o(a(315));function o(t){return t&&t.__esModule?t:{default:t}}new i.default(s.default).$mount()},315:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(317),s=a.n(i),o=a(318),n=!1;var r=function(t){n||a(316)},c=a(0)(s.a,o.a,r,null,null);c.options.__file="Users/gyl-dev/working/xiangliang/uniapp-demo/uniapp-demo/pages/API/voice/voice.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] voice.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},316:function(t,e){},317:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=a(7),s=null,o=null,n=null,r=null;e.default={data:function(){return{title:"start/stopRecord、play/stopVoice",recording:!1,playing:!1,hasRecord:!1,tempFilePath:"",recordTime:0,playTime:0,formatedRecordTime:"00:00:00",formatedPlayTime:"00:00:00"}},onUnload:function(){this.end()},onLoad:function(){var e=this;(r=t.createInnerAudioContext()).onEnded(function(){clearInterval(s);console.log("play voice finished"),e.playing=!1,e.formatedPlayTime=i.formatTime(0),e.playTime=0}),(n=t.getRecorderManager()).onStart(function(){console.log("recorder start")}),n.onStop(function(t){r.src=t.tempFilePath,e.hasRecord=!0,e.recording=!1})},methods:{startRecord:function(){var t=this;this.recording=!0,o=setInterval(function(){t.recordTime+=1,t.formatedRecordTime=i.formatTime(t.recordTime)},1e3),n.start()},stopRecord:function(){n.stop(),clearInterval(o)},playVoice:function(){var t=this;s=setInterval(function(){t.playing=!0,t.playTime+=1,t.formatedPlayTime=i.formatTime(t.playTime)},1e3),r.play()},stopVoice:function(){clearInterval(s),this.playing=!1,this.formatedPlayTime=i.formatTime(0),this.playTime=0,r.stop()},end:function(){r.stop(),n.stop(),clearInterval(o),clearInterval(s),this.recording=!1,this.playing=!1,this.hasRecord=!1,this.playTime=0,this.recordTime=0,this.formatedRecordTime="00:00:00",this.formatedRecordTime="00:00:00"},clear:function(){this.end()}}}}).call(e,a(2).default)},318:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("page-head",{attrs:{title:t.title,mpcomid:"uGp-0"}}),t._v(" "),a("view",{staticClass:"page-body"},[a("view",{staticClass:"page-section"},[!1===t.recording&&!1===t.playing&&!1===t.hasRecord?a("block",[a("view",{staticClass:"page-body-time"},[a("text",{staticClass:"time-big"},[t._v(t._s(t.formatedRecordTime))])]),t._v(" "),a("view",{staticClass:"page-body-buttons"},[a("view",{staticClass:"page-body-button"}),t._v(" "),a("view",{staticClass:"page-body-button",attrs:{eventid:"u0w-0"},on:{tap:t.startRecord}},[a("image",{attrs:{src:"../../../static/record.png"}})]),t._v(" "),a("view",{staticClass:"page-body-button"})])]):t._e(),t._v(" "),!0===t.recording?a("block",[a("view",{staticClass:"page-body-time"},[a("text",{staticClass:"time-big"},[t._v(t._s(t.formatedRecordTime))])]),t._v(" "),a("view",{staticClass:"page-body-buttons"},[a("view",{staticClass:"page-body-button"}),t._v(" "),a("view",{staticClass:"page-body-button",attrs:{eventid:"fb8-1"},on:{tap:t.stopRecord}},[a("view",{staticClass:"button-stop-record"})]),t._v(" "),a("view",{staticClass:"page-body-button"})])]):t._e(),t._v(" "),!0===t.hasRecord&&!1===t.playing?a("block",[a("view",{staticClass:"page-body-time"},[a("text",{staticClass:"time-big"},[t._v(t._s(t.formatedPlayTime))]),t._v(" "),a("text",{staticClass:"time-small"},[t._v(t._s(t.formatedRecordTime))])]),t._v(" "),a("view",{staticClass:"page-body-buttons"},[a("view",{staticClass:"page-body-button"}),t._v(" "),a("view",{staticClass:"page-body-button",attrs:{eventid:"4Ub-2"},on:{tap:t.playVoice}},[a("image",{attrs:{src:"../../../static/play.png"}})]),t._v(" "),a("view",{staticClass:"page-body-button",attrs:{eventid:"pcK-3"},on:{tap:t.clear}},[a("image",{attrs:{src:"../../../static/trash.png"}})])])]):t._e(),t._v(" "),!0===t.hasRecord&&!0===t.playing?a("block",[a("view",{staticClass:"page-body-time"},[a("text",{staticClass:"time-big"},[t._v(t._s(t.formatedPlayTime))]),t._v(" "),a("text",{staticClass:"time-small"},[t._v(t._s(t.formatedRecordTime))])]),t._v(" "),a("view",{staticClass:"page-body-buttons"},[a("view",{staticClass:"page-body-button",attrs:{eventid:"MNW-4"},on:{tap:t.stopVoice}},[a("image",{attrs:{src:"../../../static/stop.png"}})]),t._v(" "),a("view",{staticClass:"page-body-button",attrs:{eventid:"S8z-5"},on:{tap:t.clear}},[a("image",{attrs:{src:"../../../static/trash.png"}})])])]):t._e()],1)])],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s}},[314]);
//# sourceMappingURL=../../../.sourcemap/pages/API/voice/voice.js.map