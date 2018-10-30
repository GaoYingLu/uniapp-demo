require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([13],{579:function(t,e,i){"use strict";var a=s(i(1)),l=s(i(580));function s(t){return t&&t.__esModule?t:{default:t}}new a.default(l.default).$mount()},580:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(582),l=i.n(a),s=i(584),n=!1;var o=function(t){n||i(581)},r=i(0)(l.a,s.a,o,null,null);r.options.__file="Users/gyl-dev/working/xiangliang/uniapp-demo/uniapp-demo/pages/template/index-list/index-list.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index-list.vue: functional components are not supported with templates, they should use render functions."),e.default=r.exports},581:function(t,e){},582:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=i(583);e.default={data:function(){return{title:"grid",lists:a.list,touchmove:!1,touchmoveIndex:-1,itemHeight:0,winHeight:0,scrollViewId:"A"}},onLoad:function(){var e=t.getSystemInfoSync().windowHeight;this.itemHeight=e/26,this.winHeight=e},methods:{touchStart:function(t){this.touchmove=!0;var e=t.touches[0].pageY,i=Math.floor(e/this.itemHeight);this.scrollViewId=this.lists[i].letter,this.touchmoveIndex=i},touchMove:function(t){var e=t.touches[0].pageY,i=Math.floor(e/this.itemHeight);this.scrollViewId=this.lists[i].letter,this.touchmoveIndex=i},touchEnd:function(){this.touchmove=!1,this.touchmoveIndex=-1},touchCancel:function(){this.touchmove=!1,this.touchmoveIndex=-1}}}}).call(e,i(2).default)},583:function(t,e,i){"use strict";t.exports={list:[{letter:"A",data:["阿克苏机场","阿拉山口机场","阿勒泰机场","阿里昆莎机场","安庆天柱山机场","澳门国际机场"]},{letter:"B",data:["保山机场","包头机场","北海福成机场","北京南苑机场","北京首都国际机场"]},{letter:"C",data:["长白山机场","长春龙嘉国际机场","常德桃花源机场","昌都邦达机场","长沙黄花国际机场","长治王村机场","常州奔牛机场","成都双流国际机场","赤峰机场"]},{letter:"D",data:["大理机场","大连周水子国际机场","大庆萨尔图机场","大同东王庄机场","达州河市机场","丹东浪头机场","德宏芒市机场","迪庆香格里拉机场","东营机场","敦煌机场"]},{letter:"E",data:["鄂尔多斯机场","恩施许家坪机场","二连浩特赛乌苏国际机场"]},{letter:"F",data:["阜阳西关机场","福州长乐国际机场"]},{letter:"G",data:["赣州黄金机场","格尔木机场","固原六盘山机场","广元盘龙机场","广州白云国际机场","桂林两江国际机场","贵阳龙洞堡国际机场"]},{letter:"H",data:["哈尔滨太平国际机场","哈密机场","海口美兰国际机场","海拉尔东山国际机场","邯郸机场","汉中机场","杭州萧山国际机场","合肥骆岗国际机场","和田机场","黑河机场","呼和浩特白塔国际机场","淮安涟水机场","黄山屯溪国际机场"]},{letter:"I",data:[]},{letter:"J",data:["济南遥墙国际机场","济宁曲阜机场","鸡西兴凯湖机场","佳木斯东郊机场","嘉峪关机场","锦州小岭子机场","景德镇机场","井冈山机场","九江庐山机场","九寨黄龙机场"]},{letter:"K",data:["喀什机场","克拉玛依机场","库车龟兹机场","库尔勒机场","昆明巫家坝国际机场"]},{letter:"L",data:["拉萨贡嘎机场","兰州中川机场","丽江三义机场","黎平机场","连云港白塔埠机场","临沧机场","临沂机场","林芝米林机场","柳州白莲机场","龙岩冠豸山机场","泸州蓝田机场","洛阳北郊机场"]},{letter:"M",data:["满洲里西郊机场","绵阳南郊机场","漠河古莲机场","牡丹江海浪机场"]},{letter:"N",data:["南昌昌北国际机场","南充高坪机场","南京禄口国际机场","南宁吴圩机场","南通兴东机场","南阳姜营机场","宁波栎社国际机场"]},{letter:"O",data:[]},{letter:"P",data:["普洱思茅机场"]},{letter:"Q",data:["齐齐哈尔三家子机场","秦皇岛山海关机场","青岛流亭国际机场","衢州机场","泉州晋江机场"]},{letter:"R",data:["日喀则和平机场"]},{letter:"S",data:["三亚凤凰国际机场","汕头外砂机场","上海虹桥国际机场","上海浦东国际机场","深圳宝安国际机场","沈阳桃仙国际机场","石家庄正定国际机场","苏南硕放国际机场"]},{letter:"T",data:["塔城机场","太原武宿国际机场","台州路桥机场 (黄岩机场)","唐山三女河机场","腾冲驼峰机场","天津滨海国际机场","通辽机场","铜仁凤凰机场"]},{letter:"U",data:[]},{letter:"V",data:[]},{letter:"W",data:["万州五桥机场","潍坊机场","威海大水泊机场","文山普者黑机场","温州永强国际机场","乌海机场","武汉天河国际机场","乌兰浩特机场","乌鲁木齐地窝堡国际机场","武夷山机场","梧州长洲岛机场"]},{letter:"X",data:["西安咸阳国际机场","西昌青山机场","锡林浩特机场","西宁曹家堡机场","西双版纳嘎洒机场","厦门高崎国际机场","香港国际机场","襄阳刘集机场","兴义机场","徐州观音机场"]},{letter:"Y",data:["延安二十里堡机场","盐城机场","延吉朝阳川机场","烟台莱山国际机场","宜宾菜坝机场","宜昌三峡机场","伊春林都机场","伊宁机场","义乌机场","银川河东机场","永州零陵机场","榆林榆阳机场","玉树巴塘机场","运城张孝机场"]},{letter:"Z",data:["湛江机场","昭通机场","郑州新郑国际机场","芷江机场","重庆江北国际机场","中卫香山机场","舟山朱家尖机场","珠海三灶机场"]}]}},584:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"page"},[i("scroll-view",{staticClass:"scrollList",style:{height:t.winHeight+"px;"},attrs:{"scroll-y":"","scroll-into-view":t.scrollViewId}},[i("view",{staticClass:"uni-list"},t._l(t.lists,function(e,a){return e.data[0]?i("block",{key:a},[i("view",{staticClass:"uni-list-cell-divider",attrs:{id:e.letter}},[t._v("\n\t\t\t\t\t"+t._s(e.letter)+"\n\t\t\t\t")]),t._v(" "),t._l(e.data,function(a,l){return i("view",{key:l,staticClass:"uni-list-cell",class:e.data.length-1==l?"uni-list-cell-last":"",attrs:{"hover-class":"uni-list-cell-hover"}},[i("view",{staticClass:"uni-list-cell-navigate"},[t._v("\n\t\t\t\t\t\t"+t._s(a)+"\n\t\t\t\t\t")])])})],2):t._e()}))]),t._v(" "),i("view",{staticClass:"uni-indexed-list-bar",class:t.touchmove?"active":"",style:{height:t.winHeight+"px;"},attrs:{eventid:"p27-0"},on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd,touchcancel:t.touchCancel}},t._l(t.lists,function(e,a){return i("text",{key:a,staticClass:"uni-indexed-list-text",class:t.touchmoveIndex==a?"active":"",style:{heigth:t.itemHeight+"px",lineHeight:t.itemHeight+"px"}},[t._v(t._s(e.letter))])})),t._v(" "),t.touchmove?i("view",{staticClass:"uni-indexed-list-alert"},[t._v("\n\t\t"+t._s(t.lists[t.touchmoveIndex].letter)+"\n\t")]):t._e()],1)};a._withStripped=!0;var l={render:a,staticRenderFns:[]};e.a=l}},[579]);
//# sourceMappingURL=../../../.sourcemap/pages/template/index-list/index-list.js.map