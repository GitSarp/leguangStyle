(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods-list-goods-list"],{"00eb":function(t,e,i){"use strict";i.r(e);var r=i("3d0c"),s=i.n(r);for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=s.a},"09bc":function(t,e,i){"use strict";i.r(e);var r=i("253f"),s=i("00eb");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("8795");var o,a=i("f0c5"),c=Object(a["a"])(s["default"],r["b"],r["c"],!1,null,"097667b8",null,!1,r["a"],o);e["default"]=c.exports},"253f":function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"header",style:{position:t.headerPosition,top:t.headerTop}},[t.isEmpty(t.search)?t._e():i("v-uni-view",{staticClass:"input-box"},[i("v-uni-input",{attrs:{placeholder:"默认关键字","placeholder-style":"color:#c0c0c0;"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.reload()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),i("v-uni-view",{staticClass:"icon search"})],1),t._l(t.orderbyList,(function(e,r){return t.isEmpty(t.search)?t._e():i("v-uni-view",{key:r,staticClass:"target",class:[e.selected?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.select(r)}}},[t._v(t._s(e.text)),e.orderbyicon?i("v-uni-view",{staticClass:"icon",class:e.orderbyicon[e.orderby]}):t._e()],1)}))],2),i("v-uni-view",{staticClass:"place"}),t.isEmpty(t.search)?t._e():i("v-uni-view",{staticClass:"goods-list"},[i("v-uni-view",{staticClass:"product-list"},t._l(t.goodsList,(function(e,r){return i("v-uni-view",{key:r,staticClass:"product",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toGoods(e)}}},[i("v-uni-image",{attrs:{mode:"widthFix",src:e.pictUrl}}),i("v-uni-view",{staticClass:"name"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"price"},[t._v(t._s(e.zkFinalPrice))]),i("v-uni-view",{staticClass:"slogan"},[t._v(t._s(e.provcity))])],1)],1)})),1),i("v-uni-view",{staticClass:"loading-text"},[t._v(t._s(t.loadingText))])],1),t.isEmpty(t.materialId)?t._e():i("v-uni-view",{staticClass:"goods-list"},[i("v-uni-view",{staticClass:"product-list"},t._l(t.optGoodsList,(function(e,r){return i("v-uni-view",{key:r,staticClass:"product",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toGoods(e)}}},[i("v-uni-image",{attrs:{mode:"widthFix",src:e.pictUrl}}),i("v-uni-view",{staticClass:"name"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"price"},[t._v(t._s(e.zkFinalPrice))]),i("v-uni-view",{staticClass:"slogan"},[t._v("优惠券:"+t._s(e.couponAmount)+"￥")])],1)],1)})),1),i("v-uni-view",{staticClass:"loading-text"},[t._v(t._s(t.loadingText))])],1)],1)},n=[]},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},"3d0c":function(t,e,i){"use strict";var r=i("4ea4");i("99af"),i("4e82"),i("ac1f"),i("841c"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r(i("dab8")),n={data:function(){return{goodsList:[],optGoodsList:[],loadingText:"正在加载...",headerTop:"0px",headerPosition:"fixed",orderbyList:[{text:"销量",selected:!0,orderbyicon:!1,orderby:1,propertyName:"total_sales"},{text:"价格",selected:!1,orderbyicon:["sheng","jiang"],orderby:0,propertyName:"price"},{text:"好评",selected:!1,orderbyicon:!1,orderby:1,propertyName:"tk_total_sales"}],orderby:"sheng",search:"",materialId:"",pages:1,pageNo:1,pageSize:20,cid:"",isLoad:!1,sort:"total_sales_des"}},onLoad:function(t){var e=this;this.cid=t.cid;var i=this.isEmpty(t.search)?t.materialName:t.search;uni.setNavigationBarTitle({title:i}),this.search=t.search,this.materialId=t.materialId;var r=setInterval((function(){var t=document.getElementsByTagName("uni-page-head");t.length>0&&(e.headerTop=t[0].offsetHeight+"px",clearInterval(r))}),1);this.getGoodsList()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){var t=this;setTimeout((function(){t.reload(),uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){if(this.isLoad&&this.getGoodsList(),this.isLoad)return this.loadingText="到底了",!1;this.loadingText="正在加载...",this.setReachBottom()},methods:{reload:function(){this.getGoodsList(!0)},getGoodsList:function(t){var e=this;t&&(this.pageNo=1,this.goodsList=[]);var i=s.default.getHeader();this.isEmpty(this.search)?this.isEmpty(this.materialId)||uni.request({url:"/wechat/goods/optimus",header:i,data:{materialId:this.materialId,pageNo:this.pageNo},success:function(t){t=t.data,console.log(t),t.resultList&&t.resultList.length>0?(e.optGoodsList=e.optGoodsList.concat(t.resultList),e.pages=t.totalCount/e.pageSize,e.isLoad=!1):e.isLoad=!0}}):uni.request({url:"/wechat/goods/list",header:i,data:{qry:this.search,pageNo:this.pageNo,sort:this.sort},success:function(t){t=t.data,t.resultList&&t.resultList.length>0?(e.goodsList=e.goodsList.concat(t.resultList),e.pages=t.totalCount/e.pageSize,e.isLoad=!1):e.isLoad=!0}})},setReachBottom:function(){this.pageNo++,this.getGoodsList()},toGoods:function(t){var e=this.isEmpty(t.numIid)?t.itemId:t.numIid;this.getTpwdAndGo(t.title,t.couponShareUrl,e)},getTpwdAndGo:function(t,e,i){var r=s.default.getHeader();uni.request({url:"/wechat/goods/tpwd",header:r,data:{url:"https:"+e,text:t},success:function(t){uni.navigateTo({url:"../goods?numIid="+i+"&tpwd="+t.data})},fail:function(t){console.error("获取淘口令失败:"+t),uni.showToast({title:"宝贝暂时无法查看，请刷新后重试"})}})},isEmpty:function(t){return"undefined"==typeof t||null==t||""==t},select:function(t){this.orderbyList[t].text;if(this.orderbyList[t].orderbyicon){var e=0==this.orderbyList[t].orderby?"升序":"降序";this.orderbyList[t].selected&&(e=0==this.orderbyList[t].orderby?"降序":"升序",this.orderbyList[t].orderby=0==this.orderbyList[t].orderby?1:0),e}this.orderbyList[t].selected=!0;for(var i=this.orderbyList.length,r=0;r<i;r++)r!=t&&(this.orderbyList[r].selected=!1);var s=0==this.orderbyList[t].orderby?"_asc":"_des";this.sort=this.orderbyList[t].propertyName+s,this.reload()}}};e.default=n},4362:function(t,e,i){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=i("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"6aa5":function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__("c19f"),__webpack_require__("82da"),__webpack_require__("ace4"),__webpack_require__("d3b7"),__webpack_require__("ac1f"),__webpack_require__("25f0"),__webpack_require__("1276"),__webpack_require__("5cc6"),__webpack_require__("fb2c"),__webpack_require__("9a8c"),__webpack_require__("a975"),__webpack_require__("735e"),__webpack_require__("c1ac"),__webpack_require__("d139"),__webpack_require__("3a7b"),__webpack_require__("d5d6"),__webpack_require__("82f8"),__webpack_require__("e91f"),__webpack_require__("60bd"),__webpack_require__("5f96"),__webpack_require__("3280"),__webpack_require__("3fcc"),__webpack_require__("ca91"),__webpack_require__("25a1"),__webpack_require__("cd26"),__webpack_require__("3c5d"),__webpack_require__("2954"),__webpack_require__("649e"),__webpack_require__("219c"),__webpack_require__("170b"),__webpack_require__("b39a"),__webpack_require__("72f7"),function(){"use strict";function t(t){if(t)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o=__webpack_require__("3c35"),a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var b=function(e){return function(i){return new t(!0).update(i)[e]()}},v=function(){var e=b("hex");h&&(e=w(e)),e.create=function(){return new t},e.update=function(t){return e.create().update(t)};for(var i=0;i<c.length;++i){var r=c[i];e[r]=b(r)}return e},w=function w(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(s){if("string"==typeof s)return e.createHash("md5").update(s,"utf8").digest("hex");if(null===s||void 0===s)throw r;return s.constructor===ArrayBuffer&&(s=new Uint8Array(s)),Array.isArray(s)||ArrayBuffer.isView(s)||s.constructor===i?e.createHash("md5").update(new i(s)).digest("hex"):t(s)};return s};t.prototype.update=function(t){if(!this.finalized){var e,i=typeof t;if("string"!==i){if("object"!==i)throw r;if(null===t)throw r;if(a&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||a&&ArrayBuffer.isView(t)))throw r;e=!0}for(var s,n,o=0,c=t.length,u=this.blocks,d=this.buffer8;o<c;){if(this.hashed&&(this.hashed=!1,u[0]=u[16],u[16]=u[1]=u[2]=u[3]=u[4]=u[5]=u[6]=u[7]=u[8]=u[9]=u[10]=u[11]=u[12]=u[13]=u[14]=u[15]=0),e)if(a)for(n=this.start;o<c&&n<64;++o)d[n++]=t[o];else for(n=this.start;o<c&&n<64;++o)u[n>>2]|=t[o]<<y[3&n++];else if(a)for(n=this.start;o<c&&n<64;++o)(s=t.charCodeAt(o))<128?d[n++]=s:s<2048?(d[n++]=192|s>>6,d[n++]=128|63&s):s<55296||s>=57344?(d[n++]=224|s>>12,d[n++]=128|s>>6&63,d[n++]=128|63&s):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++o)),d[n++]=240|s>>18,d[n++]=128|s>>12&63,d[n++]=128|s>>6&63,d[n++]=128|63&s);else for(n=this.start;o<c&&n<64;++o)(s=t.charCodeAt(o))<128?u[n>>2]|=s<<y[3&n++]:s<2048?(u[n>>2]|=(192|s>>6)<<y[3&n++],u[n>>2]|=(128|63&s)<<y[3&n++]):s<55296||s>=57344?(u[n>>2]|=(224|s>>12)<<y[3&n++],u[n>>2]|=(128|s>>6&63)<<y[3&n++],u[n>>2]|=(128|63&s)<<y[3&n++]):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++o)),u[n>>2]|=(240|s>>18)<<y[3&n++],u[n>>2]|=(128|s>>12&63)<<y[3&n++],u[n>>2]|=(128|s>>6&63)<<y[3&n++],u[n>>2]|=(128|63&s)<<y[3&n++]);this.lastByteIndex=n,this.bytes+=n-this.start,n>=64?(this.start=n-64,this.hash(),this.hashed=!0):this.start=n}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=u[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var t,e,i,r,s,n,o=this.blocks;this.first?e=((e=((t=((t=o[0]-680876937)<<7|t>>>25)-271733879<<0)^(i=((i=(-271733879^(r=((r=(-1732584194^2004318071&t)+o[1]-117830708)<<12|r>>>20)+t<<0)&(-271733879^t))+o[2]-1126478375)<<17|i>>>15)+r<<0)&(r^t))+o[3]-1316259209)<<22|e>>>10)+i<<0:(t=this.h0,e=this.h1,i=this.h2,e=((e+=((t=((t+=((r=this.h3)^e&(i^r))+o[0]-680876936)<<7|t>>>25)+e<<0)^(i=((i+=(e^(r=((r+=(i^t&(e^i))+o[1]-389564586)<<12|r>>>20)+t<<0)&(t^e))+o[2]+606105819)<<17|i>>>15)+r<<0)&(r^t))+o[3]-1044525330)<<22|e>>>10)+i<<0),e=((e+=((t=((t+=(r^e&(i^r))+o[4]-176418897)<<7|t>>>25)+e<<0)^(i=((i+=(e^(r=((r+=(i^t&(e^i))+o[5]+1200080426)<<12|r>>>20)+t<<0)&(t^e))+o[6]-1473231341)<<17|i>>>15)+r<<0)&(r^t))+o[7]-45705983)<<22|e>>>10)+i<<0,e=((e+=((t=((t+=(r^e&(i^r))+o[8]+1770035416)<<7|t>>>25)+e<<0)^(i=((i+=(e^(r=((r+=(i^t&(e^i))+o[9]-1958414417)<<12|r>>>20)+t<<0)&(t^e))+o[10]-42063)<<17|i>>>15)+r<<0)&(r^t))+o[11]-1990404162)<<22|e>>>10)+i<<0,e=((e+=((t=((t+=(r^e&(i^r))+o[12]+1804603682)<<7|t>>>25)+e<<0)^(i=((i+=(e^(r=((r+=(i^t&(e^i))+o[13]-40341101)<<12|r>>>20)+t<<0)&(t^e))+o[14]-1502002290)<<17|i>>>15)+r<<0)&(r^t))+o[15]+1236535329)<<22|e>>>10)+i<<0,e=((e+=((r=((r+=(e^i&((t=((t+=(i^r&(e^i))+o[1]-165796510)<<5|t>>>27)+e<<0)^e))+o[6]-1069501632)<<9|r>>>23)+t<<0)^t&((i=((i+=(t^e&(r^t))+o[11]+643717713)<<14|i>>>18)+r<<0)^r))+o[0]-373897302)<<20|e>>>12)+i<<0,e=((e+=((r=((r+=(e^i&((t=((t+=(i^r&(e^i))+o[5]-701558691)<<5|t>>>27)+e<<0)^e))+o[10]+38016083)<<9|r>>>23)+t<<0)^t&((i=((i+=(t^e&(r^t))+o[15]-660478335)<<14|i>>>18)+r<<0)^r))+o[4]-405537848)<<20|e>>>12)+i<<0,e=((e+=((r=((r+=(e^i&((t=((t+=(i^r&(e^i))+o[9]+568446438)<<5|t>>>27)+e<<0)^e))+o[14]-1019803690)<<9|r>>>23)+t<<0)^t&((i=((i+=(t^e&(r^t))+o[3]-187363961)<<14|i>>>18)+r<<0)^r))+o[8]+1163531501)<<20|e>>>12)+i<<0,e=((e+=((r=((r+=(e^i&((t=((t+=(i^r&(e^i))+o[13]-1444681467)<<5|t>>>27)+e<<0)^e))+o[2]-51403784)<<9|r>>>23)+t<<0)^t&((i=((i+=(t^e&(r^t))+o[7]+1735328473)<<14|i>>>18)+r<<0)^r))+o[12]-1926607734)<<20|e>>>12)+i<<0,e=((e+=((n=(r=((r+=((s=e^i)^(t=((t+=(s^r)+o[5]-378558)<<4|t>>>28)+e<<0))+o[8]-2022574463)<<11|r>>>21)+t<<0)^t)^(i=((i+=(n^e)+o[11]+1839030562)<<16|i>>>16)+r<<0))+o[14]-35309556)<<23|e>>>9)+i<<0,e=((e+=((n=(r=((r+=((s=e^i)^(t=((t+=(s^r)+o[1]-1530992060)<<4|t>>>28)+e<<0))+o[4]+1272893353)<<11|r>>>21)+t<<0)^t)^(i=((i+=(n^e)+o[7]-155497632)<<16|i>>>16)+r<<0))+o[10]-1094730640)<<23|e>>>9)+i<<0,e=((e+=((n=(r=((r+=((s=e^i)^(t=((t+=(s^r)+o[13]+681279174)<<4|t>>>28)+e<<0))+o[0]-358537222)<<11|r>>>21)+t<<0)^t)^(i=((i+=(n^e)+o[3]-722521979)<<16|i>>>16)+r<<0))+o[6]+76029189)<<23|e>>>9)+i<<0,e=((e+=((n=(r=((r+=((s=e^i)^(t=((t+=(s^r)+o[9]-640364487)<<4|t>>>28)+e<<0))+o[12]-421815835)<<11|r>>>21)+t<<0)^t)^(i=((i+=(n^e)+o[15]+530742520)<<16|i>>>16)+r<<0))+o[2]-995338651)<<23|e>>>9)+i<<0,e=((e+=((r=((r+=(e^((t=((t+=(i^(e|~r))+o[0]-198630844)<<6|t>>>26)+e<<0)|~i))+o[7]+1126891415)<<10|r>>>22)+t<<0)^((i=((i+=(t^(r|~e))+o[14]-1416354905)<<15|i>>>17)+r<<0)|~t))+o[5]-57434055)<<21|e>>>11)+i<<0,e=((e+=((r=((r+=(e^((t=((t+=(i^(e|~r))+o[12]+1700485571)<<6|t>>>26)+e<<0)|~i))+o[3]-1894986606)<<10|r>>>22)+t<<0)^((i=((i+=(t^(r|~e))+o[10]-1051523)<<15|i>>>17)+r<<0)|~t))+o[1]-2054922799)<<21|e>>>11)+i<<0,e=((e+=((r=((r+=(e^((t=((t+=(i^(e|~r))+o[8]+1873313359)<<6|t>>>26)+e<<0)|~i))+o[15]-30611744)<<10|r>>>22)+t<<0)^((i=((i+=(t^(r|~e))+o[6]-1560198380)<<15|i>>>17)+r<<0)|~t))+o[13]+1309151649)<<21|e>>>11)+i<<0,e=((e+=((r=((r+=(e^((t=((t+=(i^(e|~r))+o[4]-145523070)<<6|t>>>26)+e<<0)|~i))+o[11]-1120210379)<<10|r>>>22)+t<<0)^((i=((i+=(t^(r|~e))+o[2]+718787259)<<15|i>>>17)+r<<0)|~t))+o[9]-343485551)<<21|e>>>11)+i<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=i-1732584194<<0,this.h3=r+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+i<<0,this.h3=this.h3+r<<0)},t.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,i=this.h2,r=this.h3;return n[t>>4&15]+n[15&t]+n[t>>12&15]+n[t>>8&15]+n[t>>20&15]+n[t>>16&15]+n[t>>28&15]+n[t>>24&15]+n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[i>>4&15]+n[15&i]+n[i>>12&15]+n[i>>8&15]+n[i>>20&15]+n[i>>16&15]+n[i>>28&15]+n[i>>24&15]+n[r>>4&15]+n[15&r]+n[r>>12&15]+n[r>>8&15]+n[r>>20&15]+n[r>>16&15]+n[r>>28&15]+n[r>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,i=this.h2,r=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var t,e,i,r="",s=this.array(),n=0;n<15;)t=s[n++],e=s[n++],i=s[n++],r+=p[t>>>2]+p[63&(t<<4|e>>>4)]+p[63&(e<<2|i>>>6)]+p[63&i];return t=s[n],r+(p[t>>>2]+p[t<<4&63]+"==")};var _=v();f?module.exports=_:(i.md5=_,o&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},"7c71":function(t,e,i){var r=i("f234");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var s=i("4f06").default;s("7a7b5b0d",r,!0,{sourceMap:!1,shadowMode:!1})},"82da":function(t,e,i){var r=i("23e7"),s=i("ebb5"),n=s.NATIVE_ARRAY_BUFFER_VIEWS;r({target:"ArrayBuffer",stat:!0,forced:!n},{isView:s.isView})},8795:function(t,e,i){"use strict";var r=i("7c71"),s=i.n(r);s.a},dab8:function(t,e,i){"use strict";var r=i("4ea4");i("a15b"),i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r(i("6aa5")),n=function(){for(var t=[],e="0123456789abcdef",i=0;i<36;i++)t[i]=e.substr(Math.floor(16*Math.random()),1);t[14]="4",t[19]=e.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-";var r=t.join("");return r},o=function(){var t="de729d188ca12d3ec0d705b118585caa",e="2c824b9e5022b97f4910ab56419101d4",i="1.0",r=parseInt((new Date).getTime()/1e3),o=n(),a=(0,s.default)(t+e+r+o+i);return{appId:t,timestamp:r,nonce:o,sign:a}},a={getHeader:o};e.default=a},df7c:function(t,e,i){(function(t){function i(t,e){for(var i=0,r=t.length-1;r>=0;r--){var s=t[r];"."===s?t.splice(r,1):".."===s?(t.splice(r,1),i++):i&&(t.splice(r,1),i--)}if(e)for(;i--;i)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,i=0,r=-1,s=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!s){i=e+1;break}}else-1===r&&(s=!1,r=e+1);return-1===r?"":t.slice(i,r)}function s(t,e){if(t.filter)return t.filter(e);for(var i=[],r=0;r<t.length;r++)e(t[r],r,t)&&i.push(t[r]);return i}e.resolve=function(){for(var e="",r=!1,n=arguments.length-1;n>=-1&&!r;n--){var o=n>=0?arguments[n]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=i(s(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===n(t,-1);return t=i(s(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(s(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,i){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var i=t.length-1;i>=0;i--)if(""!==t[i])break;return e>i?[]:t.slice(e,i-e+1)}t=e.resolve(t).substr(1),i=e.resolve(i).substr(1);for(var s=r(t.split("/")),n=r(i.split("/")),o=Math.min(s.length,n.length),a=o,c=0;c<o;c++)if(s[c]!==n[c]){a=c;break}var u=[];for(c=a;c<s.length;c++)u.push("..");return u=u.concat(n.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),i=47===e,r=-1,s=!0,n=t.length-1;n>=1;--n)if(e=t.charCodeAt(n),47===e){if(!s){r=n;break}}else s=!1;return-1===r?i?"/":".":i&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var i=r(t);return e&&i.substr(-1*e.length)===e&&(i=i.substr(0,i.length-e.length)),i},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,i=0,r=-1,s=!0,n=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(s=!1,r=o+1),46===a?-1===e?e=o:1!==n&&(n=1):-1!==e&&(n=-1);else if(!s){i=o+1;break}}return-1===e||-1===r||0===n||1===n&&e===r-1&&e===i+1?"":t.slice(e,r)};var n="b"==="ab".substr(-1)?function(t,e,i){return t.substr(e,i)}:function(t,e,i){return e<0&&(e=t.length+e),t.substr(e,i)}}).call(this,i("4362"))},f234:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.icon[data-v-097667b8]{font-size:%?26?%}.header[data-v-097667b8]{width:92%;padding:0 4%;height:%?79?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;position:fixed;top:0;z-index:10;background-color:#fff;border-bottom:solid %?1?% #eee}.header .target[data-v-097667b8]{width:20%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;margin-bottom:%?-2?%;color:#aaa}.header .target.on[data-v-097667b8]{color:#555;border-bottom:%?4?% solid #f06c7a;font-weight:600;font-size:%?30?%}.place[data-v-097667b8]{background-color:#fff;height:%?100?%}.goods-list .loading-text[data-v-097667b8]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?60?%;color:#979797;font-size:%?24?%}.goods-list .product-list[data-v-097667b8]{width:92%;padding:0 4% 3vw 4%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.goods-list .product-list .product[data-v-097667b8]{width:48%;-webkit-border-radius:%?20?%;border-radius:%?20?%;background-color:#fff;margin:0 0 %?15?% 0;-webkit-box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.1);box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.1)}.goods-list .product-list .product uni-image[data-v-097667b8]{width:100%;-webkit-border-radius:%?20?% %?20?% 0 0;border-radius:%?20?% %?20?% 0 0}.goods-list .product-list .product .name[data-v-097667b8]{width:92%;padding:%?10?% 4%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;text-align:justify;overflow:hidden;font-size:%?30?%}.goods-list .product-list .product .info[data-v-097667b8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;width:92%;padding:%?10?% 4% %?10?% 4%}.goods-list .product-list .product .info .price[data-v-097667b8]{color:#e65339;font-size:%?30?%;font-weight:600}.goods-list .product-list .product .info .slogan[data-v-097667b8]{color:#807c87;font-size:%?24?%}',""]),t.exports=e},fb2c:function(t,e,i){var r=i("74e8");r("Uint32",(function(t){return function(e,i,r){return t(this,e,i,r)}}))}}]);