(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-keep-keep"],{"1dca":function(t,e,a){"use strict";a.r(e);var i=a("9edf"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},2146:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"tabr",style:{top:t.headerTop}},[a("v-uni-view",{class:{on:"goods"==t.typeClass},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchType("goods")}}},[t._v("商品("+t._s(t.goodsList.length)+")")]),a("v-uni-view",{class:{on:"shop"==t.typeClass},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchType("shop")}}},[t._v("店铺("+t._s(t.shopList.length)+")")]),a("v-uni-view",{staticClass:"border",class:t.typeClass})],1),a("v-uni-view",{staticClass:"place"}),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"sub-list goods",class:t.subState},[0==t.goodsList.length?a("v-uni-view",{staticClass:"tis"},[t._v("没有数据~")]):t._e(),t._l(t.goodsList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"row"},[a("v-uni-view",{staticClass:"menu",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.deleteCoupon(e.id,t.goodsList)}}},[a("v-uni-view",{staticClass:"icon shanchu"})],1),a("v-uni-view",{staticClass:"carrier",class:["goods"==t.typeClass?t.theIndex==i?"open":t.oldIndex==i?"close":"":""],on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart(i,e)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchMove(i,e)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchEnd(i,e)}}},[a("v-uni-view",{staticClass:"goods-info",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toGoods(e)}}},[a("v-uni-view",{staticClass:"img"},[a("v-uni-image",{attrs:{src:e.img}})],1),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"price-number"},[a("v-uni-view",{staticClass:"keep-num"},[t._v("905人收藏")]),a("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(e.price))])],1)],1)],1)],1)],1)}))],2),a("v-uni-view",{staticClass:"sub-list shop",class:t.subState},[0==t.shopList.length?a("v-uni-view",{staticClass:"tis"},[t._v("没有数据~")]):t._e(),t._l(t.shopList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"row"},[a("v-uni-view",{staticClass:"menu",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.deleteCoupon(e.id,t.shopList)}}},[a("v-uni-view",{staticClass:"icon shanchu"})],1),a("v-uni-view",{staticClass:"carrier",class:["shop"==t.typeClass?t.theIndex==i?"open":t.oldIndex==i?"close":"":""],on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart(i,e)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchMove(i,e)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchEnd(i,e)}}},[a("v-uni-view",{staticClass:"left"},[a("v-uni-image",{attrs:{src:e.img}})],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))])],1)],1)],1)}))],2)],1)],1)},n=[]},"35e8":function(t,e,a){"use strict";a.r(e);var i=a("2146"),s=a("1dca");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("bece");var o,r=a("f0c5"),c=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"0c2a25ea",null,!1,i["a"],o);e["default"]=c.exports},"5c72":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-0c2a25ea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}uni-page-body[data-v-0c2a25ea]{position:relative;background-color:#f5f5f5}.hidden[data-v-0c2a25ea]{display:none!important}.place[data-v-0c2a25ea]{width:100%;height:%?95?%}.tabr[data-v-0c2a25ea]{background-color:#fff;width:94%;height:%?95?%;padding:0 3%;border-bottom:solid %?1?% #dedede;position:fixed;top:0;z-index:10}.tabr uni-view[data-v-0c2a25ea]{width:50%;height:%?90?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;color:#999}.tabr .on[data-v-0c2a25ea]{color:#f06c7a}.tabr .border[data-v-0c2a25ea]{height:%?4?%;background-color:#f06c7a;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.tabr .border.shop[data-v-0c2a25ea]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.list[data-v-0c2a25ea]{width:100%;display:block;position:relative}@-webkit-keyframes showGoods-data-v-0c2a25ea{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes showGoods-data-v-0c2a25ea{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes showShop-data-v-0c2a25ea{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@keyframes showShop-data-v-0c2a25ea{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}.sub-list[data-v-0c2a25ea]{width:100%;padding:%?20?% 0 %?120?% 0}.sub-list.shop[data-v-0c2a25ea]{position:absolute;top:0;left:100%;display:none}.sub-list.showgoods[data-v-0c2a25ea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-animation:showGoods-data-v-0c2a25ea .2s linear both;animation:showGoods-data-v-0c2a25ea .2s linear both}.sub-list.showshop[data-v-0c2a25ea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-animation:showShop-data-v-0c2a25ea .2s linear both;animation:showShop-data-v-0c2a25ea .2s linear both}.sub-list .tis[data-v-0c2a25ea]{width:100%;height:%?60?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%}.sub-list.shop .row[data-v-0c2a25ea]{height:20vw}.sub-list.shop .row .left[data-v-0c2a25ea]{width:20vw;height:20vw;padding-left:%?20?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.sub-list.shop .row .left uni-image[data-v-0c2a25ea]{width:18vw;height:18vw;-webkit-border-radius:100%;border-radius:100%}.sub-list.shop .row .right[data-v-0c2a25ea]{height:20vw;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%}.sub-list .row[data-v-0c2a25ea]{width:100%;height:30vw;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;overflow:hidden;border-bottom:solid %?1?% #dedede}.sub-list .row .menu[data-v-0c2a25ea]{position:absolute;width:28%;height:100%;right:0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:red;color:#fff;z-index:2}.sub-list .row .menu .icon[data-v-0c2a25ea]{color:#fff;font-size:%?50?%}.sub-list .row .carrier[data-v-0c2a25ea]{background-color:#fff;position:absolute;width:100%;padding:0 0;height:100%;z-index:3;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}@-webkit-keyframes showMenu-data-v-0c2a25ea{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-28%);transform:translateX(-28%)}}@keyframes showMenu-data-v-0c2a25ea{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-28%);transform:translateX(-28%)}}@-webkit-keyframes closeMenu-data-v-0c2a25ea{0%{-webkit-transform:translateX(-28%);transform:translateX(-28%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes closeMenu-data-v-0c2a25ea{0%{-webkit-transform:translateX(-28%);transform:translateX(-28%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}.sub-list .row .carrier.open[data-v-0c2a25ea]{-webkit-animation:showMenu-data-v-0c2a25ea .25s linear both;animation:showMenu-data-v-0c2a25ea .25s linear both}.sub-list .row .carrier.close[data-v-0c2a25ea]{-webkit-animation:closeMenu-data-v-0c2a25ea .15s linear both;animation:closeMenu-data-v-0c2a25ea .15s linear both}.sub-list .row .carrier .goods-info[data-v-0c2a25ea]{width:calc(100% - %?40?%);padding:%?20?%;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.sub-list .row .carrier .goods-info .img[data-v-0c2a25ea]{width:calc(30vw - %?40?%);height:calc(30vw - %?40?%);-webkit-border-radius:%?10?%;border-radius:%?10?%;overflow:hidden;-webkit-flex-shrink:0;flex-shrink:0;margin-right:%?20?%}.sub-list .row .carrier .goods-info .img uni-image[data-v-0c2a25ea]{width:calc(30vw - %?40?%);height:calc(30vw - %?40?%)}.sub-list .row .carrier .goods-info .info[data-v-0c2a25ea]{width:100%;height:calc(30vw - %?40?%);overflow:hidden;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:space-between;align-content:space-between;position:relative}.sub-list .row .carrier .goods-info .info .title[data-v-0c2a25ea]{width:100%;font-size:%?28?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.sub-list .row .carrier .goods-info .info .price-number[data-v-0c2a25ea]{width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline}.sub-list .row .carrier .goods-info .info .price-number .keep-num[data-v-0c2a25ea]{font-size:%?26?%;color:#999}.sub-list .row .carrier .goods-info .info .price-number .price[data-v-0c2a25ea]{font-size:%?30?%;color:#f06c7a}body.?%PAGE?%[data-v-0c2a25ea]{background-color:#f5f5f5}',""]),t.exports=e},"927f":function(t,e,a){var i=a("5c72");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("7ad6ef1c",i,!0,{sourceMap:!1,shadowMode:!1})},"9edf":function(t,e,a){"use strict";a("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{goodsList:[{id:1,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:2,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:3,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1}],shopList:[{id:1,name:"冰鲜专卖店",img:"/static/img/shop/1.jpg"},{id:2,name:"果蔬天下",img:"/static/img/shop/2.jpg"},{id:3,name:"办公耗材用品店",img:"/static/img/shop/3.jpg"},{id:4,name:"天天看好书",img:"/static/img/shop/4.jpg"}],headerTop:0,typeClass:"goods",subState:"",theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){},onPullDownRefresh:function(){setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onLoad:function(){var t=this,e=setInterval((function(){var a=document.getElementsByTagName("uni-page-head");a.length>0&&(t.headerTop=a[0].offsetHeight+"px",clearInterval(e))}),1)},methods:{switchType:function(t){var e=this;this.typeClass!=t&&(uni.pageScrollTo({scrollTop:0,duration:0}),this.typeClass=t,this.subState=""==this.typeClass?"":"show"+t,setTimeout((function(){e.oldIndex=null,e.theIndex=null,e.subState="goods"==e.typeClass?"":e.subState}),200))},touchStart:function(t,e){e.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},touchMove:function(t,e){var a=this;if(e.touches.length>1)this.isStop=!0;else{var i=e.touches[0].pageX-this.initXY[0],s=e.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(i)<5||(Math.abs(s)>Math.abs(i)?this.isStop=!0:i<0?(this.theIndex=t,this.isStop=!0):i>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout((function(){a.oldIndex=null}),150)))}},touchEnd:function(t,e){this.isStop=!1},deleteCoupon:function(t,e){for(var a=e.length,i=0;i<a;i++)if(t==e[i].id){e.splice(i,1);break}this.oldIndex=null,this.theIndex=null},discard:function(){}}};e.default=i},bece:function(t,e,a){"use strict";var i=a("927f"),s=a.n(i);s.a}}]);