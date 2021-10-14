(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-home-home"],{"0f1d":function(t,i,e){"use strict";var o=e("73bb"),a=e.n(o);a.a},"3c23":function(t,i,e){function o(t){this.key=t.key,this.requestConfig={key:t.key,s:"rsx",platform:"WXJS",appname:t.key,sdkversion:"1.2.0",logversion:"2.0"}}e("a15b"),e("acd8"),e("ac1f"),e("1276"),o.prototype.getWxLocation=function(t,i){wx.getLocation({type:"gcj02",success:function(t){var e=t.longitude+","+t.latitude;wx.setStorage({key:"userLocation",data:e}),i(e)},fail:function(e){wx.getStorage({key:"userLocation",success:function(t){t.data&&i(t.data)}}),t.fail({errCode:"0",errMsg:e.errMsg||""})}})},o.prototype.getRegeo=function(t){function i(i){var o=e.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:e.key,location:i,extensions:"all",s:o.s,platform:o.platform,appname:e.key,sdkversion:o.sdkversion,logversion:o.logversion},method:"GET",header:{"content-type":"application/json"},success:function(e){var o,a,s,n,r,c,d,l,p;e.data.status&&"1"==e.data.status?(o=e.data.regeocode,a=o.addressComponent,s=[],n="",o&&o.roads[0]&&o.roads[0].name&&(n=o.roads[0].name+"附近"),r=i.split(",")[0],c=i.split(",")[1],o.pois&&o.pois[0]&&(n=o.pois[0].name+"附近",d=o.pois[0].location,d&&(r=parseFloat(d.split(",")[0]),c=parseFloat(d.split(",")[1]))),a.provice&&s.push(a.provice),a.city&&s.push(a.city),a.district&&s.push(a.district),a.streetNumber&&a.streetNumber.street&&a.streetNumber.number?(s.push(a.streetNumber.street),s.push(a.streetNumber.number)):(l="",o&&o.roads[0]&&o.roads[0].name&&(l=o.roads[0].name),s.push(l)),s=s.join(""),p=[{iconPath:t.iconPath,width:t.iconWidth,height:t.iconHeight,name:s,desc:n,longitude:r,latitude:c,id:0,regeocodeData:o}],t.success(p)):t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(i){t.fail({errCode:"0",errMsg:i.errMsg||""})}})}var e=this;t.location?i(t.location):e.getWxLocation(t,(function(t){i(t)}))},o.prototype.getWeather=function(t){function i(i){var e="base";t.type&&"forecast"==t.type&&(e="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:o.key,city:i,extensions:e,s:a.s,platform:a.platform,appname:o.key,sdkversion:a.sdkversion,logversion:a.logversion},method:"GET",header:{"content-type":"application/json"},success:function(i){function e(t){var i={city:{text:"城市",data:t.city},weather:{text:"天气",data:t.weather},temperature:{text:"温度",data:t.temperature},winddirection:{text:"风向",data:t.winddirection+"风"},windpower:{text:"风力",data:t.windpower+"级"},humidity:{text:"湿度",data:t.humidity+"%"}};return i}var o,a;i.data.status&&"1"==i.data.status?i.data.lives?(o=i.data.lives,o&&o.length>0&&(o=o[0],a=e(o),a["liveData"]=o,t.success(a))):i.data.forecasts&&i.data.forecasts[0]&&t.success({forecast:i.data.forecasts[0]}):t.fail({errCode:i.data.infocode,errMsg:i.data.info})},fail:function(i){t.fail({errCode:"0",errMsg:i.errMsg||""})}})}function e(e){wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:o.key,location:e,extensions:"all",s:a.s,platform:a.platform,appname:o.key,sdkversion:a.sdkversion,logversion:a.logversion},method:"GET",header:{"content-type":"application/json"},success:function(e){var o,a;e.data.status&&"1"==e.data.status?(a=e.data.regeocode,a.addressComponent?o=a.addressComponent.adcode:a.aois&&a.aois.length>0&&(o=a.aois[0].adcode),i(o)):t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(i){t.fail({errCode:"0",errMsg:i.errMsg||""})}})}var o=this,a=o.requestConfig;t.city?i(t.city):o.getWxLocation(t,(function(t){e(t)}))},o.prototype.getPoiAround=function(t){function i(i){var a={key:e.key,location:i,s:o.s,platform:o.platform,appname:e.key,sdkversion:o.sdkversion,logversion:o.logversion};t.querytypes&&(a["types"]=t.querytypes),t.querykeywords&&(a["keywords"]=t.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:a,method:"GET",header:{"content-type":"application/json"},success:function(i){var e,o,a,s;if(i.data.status&&"1"==i.data.status){if(i=i.data,i&&i.pois){for(e=[],o=0;o<i.pois.length;o++)a=0==o?t.iconPathSelected:t.iconPath,e.push({latitude:parseFloat(i.pois[o].location.split(",")[1]),longitude:parseFloat(i.pois[o].location.split(",")[0]),iconPath:a,width:22,height:32,id:o,name:i.pois[o].name,address:i.pois[o].address});s={markers:e,poisData:i.pois},t.success(s)}}else t.fail({errCode:i.data.infocode,errMsg:i.data.info})},fail:function(i){t.fail({errCode:"0",errMsg:i.errMsg||""})}})}var e=this,o=e.requestConfig;t.location?i(t.location):e.getWxLocation(t,(function(t){i(t)}))},o.prototype.getStaticmap=function(t){function i(i){a.push("location="+i),t.zoom&&a.push("zoom="+t.zoom),t.size&&a.push("size="+t.size),t.scale&&a.push("scale="+t.scale),t.markers&&a.push("markers="+t.markers),t.labels&&a.push("labels="+t.labels),t.paths&&a.push("paths="+t.paths),t.traffic&&a.push("traffic="+t.traffic);var e=s+a.join("&");t.success({url:e})}var e,o=this,a=[],s="https://restapi.amap.com/v3/staticmap?";a.push("key="+o.key),e=o.requestConfig,a.push("s="+e.s),a.push("platform="+e.platform),a.push("appname="+e.appname),a.push("sdkversion="+e.sdkversion),a.push("logversion="+e.logversion),t.location?i(t.location):o.getWxLocation(t,(function(t){i(t)}))},o.prototype.getInputtips=function(t){var i=this,e=i.requestConfig,o={key:i.key,s:e.s,platform:e.platform,appname:i.key,sdkversion:e.sdkversion,logversion:e.logversion};t.location&&(o["location"]=t.location),t.keywords&&(o["keywords"]=t.keywords),t.type&&(o["type"]=t.type),t.city&&(o["city"]=t.city),t.citylimit&&(o["citylimit"]=t.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:o,method:"GET",header:{"content-type":"application/json"},success:function(i){i&&i.data&&i.data.tips&&t.success({tips:i.data.tips})},fail:function(i){t.fail({errCode:"0",errMsg:i.errMsg||""})}})},o.prototype.getDrivingRoute=function(t){var i=this,e=i.requestConfig,o={key:i.key,s:e.s,platform:e.platform,appname:i.key,sdkversion:e.sdkversion,logversion:e.logversion};t.origin&&(o["origin"]=t.origin),t.destination&&(o["destination"]=t.destination),t.strategy&&(o["strategy"]=t.strategy),t.waypoints&&(o["waypoints"]=t.waypoints),t.avoidpolygons&&(o["avoidpolygons"]=t.avoidpolygons),t.avoidroad&&(o["avoidroad"]=t.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:o,method:"GET",header:{"content-type":"application/json"},success:function(i){i&&i.data&&i.data.route&&t.success({paths:i.data.route.paths,taxi_cost:i.data.route.taxi_cost||""})},fail:function(i){t.fail({errCode:"0",errMsg:i.errMsg||""})}})},o.prototype.getWalkingRoute=function(t){var i=this,e=i.requestConfig,o={key:i.key,s:e.s,platform:e.platform,appname:i.key,sdkversion:e.sdkversion,logversion:e.logversion};t.origin&&(o["origin"]=t.origin),t.destination&&(o["destination"]=t.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:o,method:"GET",header:{"content-type":"application/json"},success:function(i){i&&i.data&&i.data.route&&t.success({paths:i.data.route.paths})},fail:function(i){t.fail({errCode:"0",errMsg:i.errMsg||""})}})},o.prototype.getTransitRoute=function(t){var i=this,e=i.requestConfig,o={key:i.key,s:e.s,platform:e.platform,appname:i.key,sdkversion:e.sdkversion,logversion:e.logversion};t.origin&&(o["origin"]=t.origin),t.destination&&(o["destination"]=t.destination),t.strategy&&(o["strategy"]=t.strategy),t.city&&(o["city"]=t.city),t.cityd&&(o["cityd"]=t.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:o,method:"GET",header:{"content-type":"application/json"},success:function(i){if(i&&i.data&&i.data.route){var e=i.data.route;t.success({distance:e.distance||"",taxi_cost:e.taxi_cost||"",transits:e.transits})}},fail:function(i){t.fail({errCode:"0",errMsg:i.errMsg||""})}})},o.prototype.getRidingRoute=function(t){var i=this,e=i.requestConfig,o={key:i.key,s:e.s,platform:e.platform,appname:i.key,sdkversion:e.sdkversion,logversion:e.logversion};t.origin&&(o["origin"]=t.origin),t.destination&&(o["destination"]=t.destination),wx.request({url:"https://restapi.amap.com/v4/direction/bicycling",data:o,method:"GET",header:{"content-type":"application/json"},success:function(i){i&&i.data&&i.data.data&&t.success({paths:i.data.data.paths})},fail:function(i){t.fail({errCode:"0",errMsg:i.errMsg||""})}})},t.exports.AMapWX=o},"3c54":function(t,i,e){"use strict";var o;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return o}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t.showHeader?e("v-uni-view",{staticClass:"status",style:{position:t.headerPosition,top:t.statusTop,opacity:t.afterHeaderOpacity}}):t._e(),t.showHeader?e("v-uni-view",{staticClass:"header",style:{position:t.headerPosition,top:t.headerTop,opacity:t.afterHeaderOpacity}},[e("v-uni-view",{staticClass:"addr"},[e("v-uni-view",{staticClass:"icon location"}),t._v(t._s(t.city))],1),e("v-uni-view",{staticClass:"input-box"},[e("v-uni-input",{attrs:{placeholder:"默认关键字","placeholder-style":"color:#c0c0c0;"},on:{confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.toSearch()}},model:{value:t.search,callback:function(i){t.search=i},expression:"search"}}),e("v-uni-view",{staticClass:"icon search"})],1),e("v-uni-view",{staticClass:"icon-btn"},[e("v-uni-view",{staticClass:"icon yuyin-home"}),e("v-uni-view",{staticClass:"icon tongzhi",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toMsg.apply(void 0,arguments)}}})],1)],1):t._e(),t.showHeader?e("v-uni-view",{staticClass:"place"}):t._e(),e("v-uni-view",{staticClass:"swiper"},[e("v-uni-view",{staticClass:"swiper-box"},[e("v-uni-swiper",{attrs:{circular:"true",autoplay:"true"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.swiperChange.apply(void 0,arguments)}}},t._l(t.swiperList,(function(i){return e("v-uni-swiper-item",{key:i.id},[e("v-uni-image",{attrs:{src:i.img},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSwiper(i)}}})],1)})),1),e("v-uni-view",{staticClass:"indicator"},t._l(t.swiperList,(function(i,o){return e("v-uni-view",{key:o,staticClass:"dots",class:[t.currentSwiper>=o?"on":""]})})),1)],1)],1),e("v-uni-view",{staticClass:"category-list"},t._l(t.categoryList,(function(i,o){return e("v-uni-view",{key:o,staticClass:"category",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCategory(i)}}},[e("v-uni-view",{staticClass:"img"},[e("v-uni-image",{attrs:{src:i.img}})],1),e("v-uni-view",{staticClass:"text"},[t._v(t._s(i.name))])],1)})),1),e("v-uni-view",{staticClass:"banner"},[e("v-uni-image",{attrs:{src:"/static/img/banner.jpg"}})],1),e("v-uni-view",{staticClass:"promotion"},[e("v-uni-view",{staticClass:"text"},[t._v("优惠专区")]),e("v-uni-view",{staticClass:"list"},t._l(t.Promotion,(function(i,o){return e("v-uni-view",{key:o,staticClass:"column",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPromotion(i)}}},[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(i.title))]),i.countdown?e("v-uni-view",{staticClass:"countdown"},[e("v-uni-view",[t._v(t._s(i.countdown.h))]),t._v(":"),e("v-uni-view",[t._v(t._s(i.countdown.m))]),t._v(":"),e("v-uni-view",[t._v(t._s(i.countdown.s))])],1):t._e()],1),e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"ad"},[t._v(t._s(i.ad))]),e("v-uni-view",{staticClass:"into"},[t._v("点击进入")])],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-image",{attrs:{src:i.img}})],1)],1)})),1)],1),e("v-uni-view",{staticClass:"goods-list"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-image",{attrs:{src:"/static/img/hua.png"}}),t._v("猜你喜欢"),e("v-uni-image",{attrs:{src:"/static/img/hua.png"}})],1),e("v-uni-view",{staticClass:"product-list"},t._l(t.productList,(function(i){return e("v-uni-view",{key:i.goods_id,staticClass:"product",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGoods(i)}}},[e("v-uni-image",{attrs:{mode:"widthFix",src:i.img}}),e("v-uni-view",{staticClass:"name"},[t._v(t._s(i.name))]),e("v-uni-view",{staticClass:"info"},[e("v-uni-view",{staticClass:"price"},[t._v(t._s(i.price))]),e("v-uni-view",{staticClass:"slogan"},[t._v(t._s(i.slogan))])],1)],1)})),1),e("v-uni-view",{staticClass:"loading-text"},[t._v(t._s(t.loadingText))])],1)],1)},s=[]},"6bf4":function(t,i,e){var o=e("24fb");i=o(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-0b9b0455]{position:relative;background-color:#fff}@font-face{font-family:HMfont-home;src:url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2")}.pullDown-effects[data-v-0b9b0455]{position:fixed;top:0;z-index:9;width:100%;height:36vw}.pullDown-effects uni-image[data-v-0b9b0455]{width:100%;height:36vw}.status[data-v-0b9b0455]{width:100%;height:0;position:fixed;z-index:10;background-color:#fff;top:0}.header[data-v-0b9b0455]{width:92%;padding:0 4%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;z-index:10;background-color:#fff}.header .addr[data-v-0b9b0455]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%}.header .addr .icon[data-v-0b9b0455]{height:%?60?%;margin-right:%?5?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?42?%;color:#ffc50a}.header .input-box[data-v-0b9b0455]{width:100%;height:%?60?%;background-color:#f5f5f5;-webkit-border-radius:%?30?%;border-radius:%?30?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header .input-box .icon[data-v-0b9b0455]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:0;right:0;width:%?60?%;height:%?60?%;font-size:%?34?%;color:silver}.header .input-box uni-input[data-v-0b9b0455]{padding-left:%?28?%;height:%?28?%;font-size:%?28?%}.header .icon-btn[data-v-0b9b0455]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex}.header .icon-btn .icon[data-v-0b9b0455]{width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?42?%}.place[data-v-0b9b0455]{background-color:#fff;height:%?100?%}.swiper[data-v-0b9b0455]{width:100%;margin-top:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.swiper .swiper-box[data-v-0b9b0455]{width:92%;height:30.7vw;overflow:hidden;-webkit-border-radius:%?15?%;border-radius:%?15?%;-webkit-box-shadow:%?0?% %?8?% %?25?% rgba(0,0,0,.2);box-shadow:%?0?% %?8?% %?25?% rgba(0,0,0,.2);position:relative;z-index:1}.swiper .swiper-box uni-swiper[data-v-0b9b0455]{width:100%;height:30.7vw}.swiper .swiper-box uni-swiper uni-swiper-item uni-image[data-v-0b9b0455]{width:100%;height:30.7vw}.swiper .swiper-box .indicator[data-v-0b9b0455]{position:absolute;bottom:%?20?%;left:%?20?%;background-color:hsla(0,0%,100%,.4);width:%?150?%;height:%?5?%;-webkit-border-radius:%?3?%;border-radius:%?3?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex}.swiper .swiper-box .indicator .dots[data-v-0b9b0455]{width:%?0?%;background-color:#fff;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.swiper .swiper-box .indicator .dots.on[data-v-0b9b0455]{width:33.33333%}.category-list[data-v-0b9b0455]{width:92%;margin:0 4%;padding:0 0 %?30?% 0;border-bottom:solid %?2?% #f6f6f6;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.category-list .category[data-v-0b9b0455]{width:25%;margin-top:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.category-list .category .img[data-v-0b9b0455]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.category-list .category .img uni-image[data-v-0b9b0455]{width:9vw;height:9vw}.category-list .category .text[data-v-0b9b0455]{margin-top:%?16?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?24?%;color:#3c3c3c}.banner[data-v-0b9b0455]{width:92%;margin:%?40?% 4%}.banner uni-image[data-v-0b9b0455]{width:100%;height:20vw;-webkit-border-radius:10vw;border-radius:10vw;-webkit-box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.3);box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.3)}.promotion[data-v-0b9b0455]{width:92%;margin:0 4%}.promotion .text[data-v-0b9b0455]{width:100%;height:%?60?%;font-size:%?34?%;font-weight:600;margin-top:%?-10?%}.promotion .list[data-v-0b9b0455]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.promotion .list .column[data-v-0b9b0455]{width:43%;padding:%?15?% 3%;background-color:#ebf9f9;-webkit-border-radius:%?10?%;border-radius:%?10?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.promotion .list .column .top[data-v-0b9b0455]{width:100%;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?5?%}.promotion .list .column .top .title[data-v-0b9b0455]{font-size:%?30?%}.promotion .list .column .top .countdown[data-v-0b9b0455]{margin-left:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;height:%?40?%;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?20?%}.promotion .list .column .top .countdown uni-view[data-v-0b9b0455]{height:%?30?%;background-color:#f06c7a;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff;-webkit-border-radius:%?4?%;border-radius:%?4?%;margin:0 %?4?%;padding:0 %?2?%}.promotion .list .column .left[data-v-0b9b0455]{width:50%;height:18.86vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:space-between;align-content:space-between}.promotion .list .column .left .ad[data-v-0b9b0455]{margin-top:%?5?%;width:100%;font-size:%?22?%;color:#acb0b0}.promotion .list .column .left .into[data-v-0b9b0455]{width:100%;font-size:%?24?%;color:#aaa;margin-bottom:%?5?%}.promotion .list .column .right[data-v-0b9b0455]{width:18.86vw;height:18.86vw}.promotion .list .column .right uni-image[data-v-0b9b0455]{width:18.86vw;height:18.86vw}.goods-list .title[data-v-0b9b0455]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;color:#f47825;font-size:%?30?%;margin-top:%?10?%}.goods-list .title uni-image[data-v-0b9b0455]{width:%?30?%;height:%?30?%}.goods-list .loading-text[data-v-0b9b0455]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?60?%;color:#979797;font-size:%?24?%}.goods-list .product-list[data-v-0b9b0455]{width:92%;padding:0 4% 3vw 4%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.goods-list .product-list .product[data-v-0b9b0455]{width:48%;-webkit-border-radius:%?20?%;border-radius:%?20?%;background-color:#fff;margin:0 0 %?15?% 0;-webkit-box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.1);box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.1)}.goods-list .product-list .product uni-image[data-v-0b9b0455]{width:100%;-webkit-border-radius:%?20?% %?20?% 0 0;border-radius:%?20?% %?20?% 0 0}.goods-list .product-list .product .name[data-v-0b9b0455]{width:92%;padding:%?10?% 4%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;text-align:justify;overflow:hidden;font-size:%?30?%}.goods-list .product-list .product .info[data-v-0b9b0455]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;width:92%;padding:%?10?% 4% %?10?% 4%}.goods-list .product-list .product .info .price[data-v-0b9b0455]{color:#e65339;font-size:%?30?%;font-weight:600}.goods-list .product-list .product .info .slogan[data-v-0b9b0455]{color:#807c87;font-size:%?24?%}body.?%PAGE?%[data-v-0b9b0455]{background-color:#fff}',""]),t.exports=i},"73bb":function(t,i,e){var o=e("6bf4");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("4f06").default;a("520f9b21",o,!0,{sourceMap:!1,shadowMode:!1})},"73bf":function(t,i,e){"use strict";e.r(i);var o=e("3c54"),a=e("daf9");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("0f1d");var n,r=e("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"0b9b0455",null,!1,o["a"],n);i["default"]=c.exports},ca7f:function(t,i,e){"use strict";var o=e("4ea4");e("e25e"),e("ac1f"),e("5319"),e("841c"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=o(e("3c23")),s={data:function(){return{search:"",showHeader:!0,afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,city:"北京",currentSwiper:0,swiperList:[{id:1,src:"https://mos.m.taobao.com/union/1212shishi2c_2C?pid=mm_1017490020_2163900486_111040950284",img:"/static/img/1.jpg"},{id:2,src:"url2",img:"/static/img/2.jpg"},{id:3,src:"url3",img:"/static/img/3.jpg"}],categoryList:[{id:1,name:"办公",img:"/static/img/category/1.png"},{id:2,name:"家电",img:"/static/img/category/2.png"},{id:3,name:"服饰",img:"/static/img/category/3.png"},{id:4,name:"日用",img:"/static/img/category/4.png"},{id:5,name:"蔬果",img:"/static/img/category/5.png"},{id:6,name:"运动",img:"/static/img/category/6.png"},{id:7,name:"书籍",img:"/static/img/category/7.png"},{id:8,name:"文具",img:"/static/img/category/8.png"}],Promotion:[],productList:[{goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:2,img:"/static/img/goods/p3.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:3,img:"/static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:4,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:5,img:"/static/img/goods/p6.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:6,img:"/static/img/goods/p7.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:7,img:"/static/img/goods/p8.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:8,img:"/static/img/goods/p9.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:9,img:"/static/img/goods/p10.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"}],loadingText:"正在加载..."}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){uni.showToast({title:"触发上拉加载"});var t=this.productList.length;if(t>=40)return this.loadingText="到底了",!1;for(var i=this.productList[t-1].goods_id,e=1;e<=10;e++){var o=i+e,a={goods_id:o,img:"/static/img/goods/p"+(o%10==0?10:o%10)+".jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"};this.productList.push(a)}},onLoad:function(){var t=this;this.amapPlugin=new a.default.AMapWX({key:"7c235a9ac4e25e482614c6b8eac6fd8e"}),this.amapPlugin.getRegeo({success:function(i){t.city=i[0].regeocodeData.addressComponent.city.replace(/市/g,"")}}),this.Timer(),this.loadPromotion()},methods:{loadPromotion:function(){for(var t=new Date,i=t.getFullYear(),e=t.getMonth()+1,o=t.getDate(),a=i+"/"+e+"/"+o+" 23:59:59",s=[{title:"天天特卖",ad:"天天特卖专区",img:"/static/img/s1.jpg",countdown:!1,materialId:"31362"},{title:"特惠商品",ad:"特惠商品专区",img:"/static/img/s2.jpg",countdown:!1,materialId:"4094"}],n=0;n<s.length;n++){var r=s[n];if(r.countdown){var c="00",d="00",l="00",p=new Date,u=new Date(a);if(!(p>=u)){var g=parseInt((u.getTime()-p.getTime())/1e3);c=parseInt(g/3600),d=parseInt(g%3600/60),l=g%60,c=c<10?"0"+c:c,d=d<10?"0"+d:d,l=l<10?"0"+l:l}s[n].countdown={h:c,m:d,s:l}}}this.Promotion=s},Timer:function(){var t=this;setInterval((function(){if(t.Promotion.length>0)for(var i=0;i<t.Promotion.length;i++){var e=t.Promotion[i];e.countdown&&(0==e.countdown.h&&0==e.countdown.m&&0==e.countdown.s||(e.countdown.s>0?(e.countdown.s--,e.countdown.s=e.countdown.s<10?"0"+e.countdown.s:e.countdown.s):e.countdown.m>0?(e.countdown.m--,e.countdown.m=e.countdown.m<10?"0"+e.countdown.m:e.countdown.m,e.countdown.s=59):e.countdown.h>0&&(e.countdown.h--,e.countdown.h=e.countdown.h<10?"0"+e.countdown.h:e.countdown.h,e.countdown.m=59,e.countdown.s=59),t.Promotion[i].countdown=e.countdown))}}),1e3)},toMsg:function(){uni.navigateTo({url:"../../msg/msg"})},toSearch:function(){uni.navigateTo({url:"../../goods/goods-list/goods-list?search="+this.search})},toSwiper:function(t){window.location.href=t.src},toCategory:function(t){uni.setStorageSync("catName",t.name),uni.navigateTo({url:"../../goods/goods-list/goods-list?cid="+t.id+"&search="+t.name})},toPromotion:function(t){uni.navigateTo({url:"../../goods/goods-list/goods-list?materialId="+t.materialId+"&materialName="+t.title})},toGoods:function(t){uni.showToast({title:"商品"+t.goods_id,icon:"none"}),uni.navigateTo({url:"../../goods/goods"})},swiperChange:function(t){this.currentSwiper=t.detail.current}}};i.default=s},daf9:function(t,i,e){"use strict";e.r(i);var o=e("ca7f"),a=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(i,t,(function(){return o[t]}))}(s);i["default"]=a.a}}]);