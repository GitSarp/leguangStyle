(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-coupon-coupon"],{"20f5":function(t,i,e){"use strict";e.r(i);var a=e("c797"),n=e("7db8");for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);e("cb03");var s,o=e("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"38c17f87",null,!1,a["a"],s);i["default"]=c.exports},"730d":function(t,i,e){var a=e("f1ab");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("3bc98293",a,!0,{sourceMap:!1,shadowMode:!1})},"7db8":function(t,i,e){"use strict";e.r(i);var a=e("ffc2"),n=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);i["default"]=n.a},c797:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"tabr",style:{top:t.headerTop}},[e("v-uni-view",{class:{on:"valid"==t.typeClass},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchType("valid")}}},[t._v("可用("+t._s(t.couponValidList.length)+")")]),e("v-uni-view",{class:{on:"invalid"==t.typeClass},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchType("invalid")}}},[t._v("已失效")]),e("v-uni-view",{staticClass:"border",class:t.typeClass})],1),e("v-uni-view",{staticClass:"place"}),e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"sub-list valid",class:t.subState},[0==t.couponValidList.length?e("v-uni-view",{staticClass:"tis"},[t._v("没有数据~")]):t._e(),t._l(t.couponValidList,(function(i,a){return e("v-uni-view",{key:a,staticClass:"row"},[e("v-uni-view",{staticClass:"menu",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.deleteCoupon(i.id,t.couponValidList)}}},[e("v-uni-view",{staticClass:"icon shanchu"})],1),e("v-uni-view",{staticClass:"carrier",class:["valid"==t.typeClass?t.theIndex==a?"open":t.oldIndex==a?"close":"":""],on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.touchStart(a,i)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.touchMove(a,i)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.touchEnd(a,i)}}},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"term"},[t._v(t._s(i.termStart)+" ~ "+t._s(i.termEnd))]),e("v-uni-view",{staticClass:"gap-top"}),e("v-uni-view",{staticClass:"gap-bottom"})],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"ticket"},[e("v-uni-view",{staticClass:"num"},[t._v(t._s(i.ticket))]),e("v-uni-view",{staticClass:"unit"},[t._v("元")])],1),e("v-uni-view",{staticClass:"criteria"},[t._v(t._s(i.criteria))]),e("v-uni-view",{staticClass:"use"},[t._v("去使用")])],1)],1)],1)}))],2),e("v-uni-view",{staticClass:"sub-list invalid",class:t.subState},[0==t.couponinvalidList.length?e("v-uni-view",{staticClass:"tis"},[t._v("没有数据~")]):t._e(),t._l(t.couponinvalidList,(function(i,a){return e("v-uni-view",{key:a,staticClass:"row"},[e("v-uni-view",{staticClass:"menu",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.deleteCoupon(i.id,t.couponinvalidList)}}},[e("v-uni-view",{staticClass:"icon shanchu"})],1),e("v-uni-view",{staticClass:"carrier",class:["invalid"==t.typeClass?t.theIndex==a?"open":t.oldIndex==a?"close":"":""],on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.touchStart(a,i)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.touchMove(a,i)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.touchEnd(a,i)}}},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"term"},[t._v(t._s(i.termStart)+" ~ "+t._s(i.termEnd))]),e("v-uni-view",{staticClass:"icon shixiao"}),e("v-uni-view",{staticClass:"gap-top"}),e("v-uni-view",{staticClass:"gap-bottom"})],1),e("v-uni-view",{staticClass:"right invalid"},[e("v-uni-view",{staticClass:"ticket"},[e("v-uni-view",{staticClass:"num"},[t._v(t._s(i.ticket))]),e("v-uni-view",{staticClass:"unit"},[t._v("元")])],1),e("v-uni-view",{staticClass:"criteria"},[t._v(t._s(i.criteria))]),e("v-uni-view",{staticClass:"use"},[t._v("去查看")])],1)],1)],1)}))],2)],1)],1)},r=[]},cb03:function(t,i,e){"use strict";var a=e("730d"),n=e.n(a);n.a},f1ab:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-38c17f87]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}uni-page-body[data-v-38c17f87]{position:relative;background-color:#f5f5f5}.hidden[data-v-38c17f87]{display:none!important}.place[data-v-38c17f87]{width:100%;height:%?95?%}.tabr[data-v-38c17f87]{background-color:#fff;width:94%;height:%?95?%;padding:0 3%;border-bottom:solid %?1?% #dedede;position:fixed;top:0;z-index:10}.tabr uni-view[data-v-38c17f87]{width:50%;height:%?90?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;color:#999}.tabr .on[data-v-38c17f87]{color:#f06c7a}.tabr .border[data-v-38c17f87]{height:%?4?%;background-color:#f06c7a;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.tabr .border.invalid[data-v-38c17f87]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.list[data-v-38c17f87]{width:100%;display:block;position:relative}@-webkit-keyframes showValid-data-v-38c17f87{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes showValid-data-v-38c17f87{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes showInvalid-data-v-38c17f87{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@keyframes showInvalid-data-v-38c17f87{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}.sub-list[data-v-38c17f87]{width:100%;padding:%?20?% 0 %?120?% 0}.sub-list.invalid[data-v-38c17f87]{position:absolute;top:0;left:100%;display:none}.sub-list.showvalid[data-v-38c17f87]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-animation:showValid-data-v-38c17f87 .2s linear both;animation:showValid-data-v-38c17f87 .2s linear both}.sub-list.showinvalid[data-v-38c17f87]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-animation:showInvalid-data-v-38c17f87 .2s linear both;animation:showInvalid-data-v-38c17f87 .2s linear both}.sub-list .tis[data-v-38c17f87]{width:100%;height:%?60?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%}.sub-list .row[data-v-38c17f87]{width:92%;height:24vw;margin:%?20?% auto %?10?% auto;-webkit-border-radius:%?8?%;border-radius:%?8?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;overflow:hidden;z-index:4;border:0\r\n  /*\r\n\t\t<view class="carrier" :class="[theIndex==index?\'open\':oldIndex==index?\'close\':\'\']" @touchstart="touchStart(index,$event)" @touchmove="touchMove(index,$event)" @touchend="touchEnd(index,$event)">\r\n\t\t\t<view class="left">\r\n\t\t\t\t<view class="title">\r\n\t\t\t\t\t10元日常用品类\r\n\t\t\t\t</view>\r\n\t\t\t\t<view class="term">\r\n\t\t\t\t\t2019-04-01~2019-05-30\r\n\t\t\t\t</view>\r\n\t\t\t</view>\r\n\t\t\t<view class="right">\r\n\t\t\t\t<view class="ticket">\r\n\t\t\t\t\t<view class="num">\r\n\t\t\t\t\t\t10\r\n\t\t\t\t\t</view>\r\n\t\t\t\t\t<view class="unit">\r\n\t\t\t\t\t\t元\r\n\t\t\t\t\t</view>\r\n\t\t\t\t</view>\r\n\t\t\t\t<view class="criteria">\r\n\t\t\t\t\t满50使用\r\n\t\t\t\t</view>\r\n\t\t\t\t<view class="use">\r\n\t\t\t\t\t去使用\r\n\t\t\t\t</view>\r\n\t\t\t</view>\r\n\t\t</view>\r\n\t\t* \r\n\t\t* */}.sub-list .row .menu[data-v-38c17f87]{position:absolute;width:28%;height:100%;right:0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:red;color:#fff;z-index:2}.sub-list .row .menu .icon[data-v-38c17f87]{color:#fff;font-size:%?50?%}.sub-list .row .carrier[data-v-38c17f87]{background-color:#fff;position:absolute;width:100%;padding:0 0;height:100%;z-index:3;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}@-webkit-keyframes showMenu-data-v-38c17f87{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-28%);transform:translateX(-28%)}}@keyframes showMenu-data-v-38c17f87{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-28%);transform:translateX(-28%)}}@-webkit-keyframes closeMenu-data-v-38c17f87{0%{-webkit-transform:translateX(-28%);transform:translateX(-28%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes closeMenu-data-v-38c17f87{0%{-webkit-transform:translateX(-28%);transform:translateX(-28%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}.sub-list .row .carrier.open[data-v-38c17f87]{-webkit-animation:showMenu-data-v-38c17f87 .25s linear both;animation:showMenu-data-v-38c17f87 .25s linear both}.sub-list .row .carrier.close[data-v-38c17f87]{-webkit-animation:closeMenu-data-v-38c17f87 .15s linear both;animation:closeMenu-data-v-38c17f87 .15s linear both}.sub-list .row .carrier .left[data-v-38c17f87]{width:100%;position:relative}.sub-list .row .carrier .left .title[data-v-38c17f87]{padding-top:3vw;width:90%;margin:0 5%;font-size:%?36?%}.sub-list .row .carrier .left .term[data-v-38c17f87]{width:90%;margin:0 5%;font-size:%?26?%;color:#999}.sub-list .row .carrier .left .gap-top[data-v-38c17f87], .sub-list .row .carrier .left .gap-bottom[data-v-38c17f87]{position:absolute;width:%?20?%;height:%?20?%;right:%?-10?%;-webkit-border-radius:100%;border-radius:100%;background-color:#f5f5f5}.sub-list .row .carrier .left .gap-top[data-v-38c17f87]{top:%?-10?%}.sub-list .row .carrier .left .gap-bottom[data-v-38c17f87]{bottom:%?-10?%}.sub-list .row .carrier .left .shixiao[data-v-38c17f87]{position:absolute;right:%?20?%;font-size:%?150?%;z-index:6;color:hsla(0,0%,60%,.2)}.sub-list .row .carrier .right[data-v-38c17f87]{-webkit-flex-shrink:0;flex-shrink:0;width:28%;color:#fff;background:-webkit-gradient(linear,left top,right top,from(#ec625c),to(#ee827f));background:-webkit-linear-gradient(left,#ec625c,#ee827f);background:linear-gradient(90deg,#ec625c,#ee827f);-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.sub-list .row .carrier .right.invalid[data-v-38c17f87]{background:-webkit-gradient(linear,left top,right top,from(#aaa),to(#999));background:-webkit-linear-gradient(left,#aaa,#999);background:linear-gradient(90deg,#aaa,#999)}.sub-list .row .carrier .right.invalid .use[data-v-38c17f87]{color:#aaa}.sub-list .row .carrier .right .ticket[data-v-38c17f87], .sub-list .row .carrier .right .criteria[data-v-38c17f87]{width:100%}.sub-list .row .carrier .right .ticket[data-v-38c17f87]{padding-top:1vw;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;height:6vw}.sub-list .row .carrier .right .ticket .num[data-v-38c17f87]{font-size:%?42?%;font-weight:600}.sub-list .row .carrier .right .ticket .unit[data-v-38c17f87]{font-size:%?24?%}.sub-list .row .carrier .right .criteria[data-v-38c17f87]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.sub-list .row .carrier .right .use[data-v-38c17f87]{width:50%;height:%?40?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?24?%;background-color:#fff;color:#ee827f;-webkit-border-radius:%?40?%;border-radius:%?40?%;padding:0 %?10?%}body.?%PAGE?%[data-v-38c17f87]{background-color:#f5f5f5}',""]),t.exports=i},ffc2:function(t,i,e){"use strict";e("a434"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{couponValidList:[{id:1,title:"日常用品立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"满50使用"},{id:2,title:"家用电器立减100元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"100",criteria:"满500使用"},{id:3,title:"全场立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"无门槛"},{id:4,title:"全场立减50元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"50",criteria:"满1000使用"}],couponinvalidList:[{id:1,title:"日常用品立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"满50使用"},{id:2,title:"家用电器立减100元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"100",criteria:"满500使用"},{id:3,title:"全场立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"无门槛"},{id:4,title:"全场立减50元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"50",criteria:"满1000使用"}],headerTop:0,typeClass:"valid",subState:"",theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){},onPullDownRefresh:function(){setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onLoad:function(){var t=this,i=setInterval((function(){var e=document.getElementsByTagName("uni-page-head");e.length>0&&(t.headerTop=e[0].offsetHeight+"px",clearInterval(i))}),1)},methods:{switchType:function(t){var i=this;this.typeClass!=t&&(uni.pageScrollTo({scrollTop:0,duration:0}),this.typeClass=t,this.subState=""==this.typeClass?"":"show"+t,setTimeout((function(){i.oldIndex=null,i.theIndex=null,i.subState="valid"==i.typeClass?"":i.subState}),200))},touchStart:function(t,i){i.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[i.touches[0].pageX,i.touches[0].pageY])},touchMove:function(t,i){var e=this;if(i.touches.length>1)this.isStop=!0;else{var a=i.touches[0].pageX-this.initXY[0],n=i.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(a)<5||(Math.abs(n)>Math.abs(a)?this.isStop=!0:a<0?(this.theIndex=t,this.isStop=!0):a>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout((function(){e.oldIndex=null}),150)))}},touchEnd:function(t,i){this.isStop=!1},deleteCoupon:function(t,i){for(var e=i.length,a=0;a<e;a++)if(t==i[a].id){i.splice(a,1);break}this.oldIndex=null,this.theIndex=null},discard:function(){}}};i.default=a}}]);