!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,a);r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mod-cover"},[n("div",{staticClass:"cover-box"},[n("ul",{staticClass:"cover-list"},t._l(t.bannerList,function(e){return n("li",{key:e.id,staticClass:"cover-item",class:e.classList,on:{touchmove:t.touchMove,touchend:t.touchEnd,touchstart:t.touchStart}},[n("div",{staticClass:"item-img",style:{"background-image":"url('"+e.previewUrl.replace(/^http:/,"https:")+"')"}})])}),0)])])};let a,o,i,s,l,c;r._withStripped=!0;var d={props:["list"],data(){return{container:[],len:this.list.length,index:0,num:3,curIndex:0,banners:[]}},computed:{bannerList(){return Array.from(this.banners).reverse()}},created(){this.container=[...this.list,...this.list],this.banners=this.container.slice(0,this.num),this.$emit("sildeBaner",this.banners[0])},methods:{slide(t){let e=this;this.curIndex=++this.index%this.len,this.banners[0].classList={},this.banners[0].classList[`remove${t}`]=!0,e.$set(e.banners,0,this.banners[0]),setTimeout(()=>{e.banners=e.container.slice(this.curIndex,this.curIndex+this.num),e.banners[0].classList={restore:!0,prepare:!0};for(let t=1;t<e.banners.length;t++)e.banners[t].classList={remove:!1,prepare:!0};this.$emit("sildeBaner",e.banners[0])},200)},slideLeft(){this.slide("Left")},slideRight(){this.slide("right")},touchStart({targetTouches:t}){1!==this.banners.length&&(l=a=t[0].clientX,c=o=t[0].clientY)},touchMove(t){1!==this.banners.length&&(i=t.targetTouches[0].clientX,s=t.targetTouches[0].clientY,Math.abs(s-c)<Math.abs(i-l)&&t.preventDefault(),c=s,l=i)},touchEnd(){1!==this.banners.length&&(Math.abs(l-a)>20&&Math.abs(l-a)>Math.abs(c-o)&&(l>a?this.slideRight():this.slideLeft()),a=o=i=s=l=c=void 0)}}};n(4);var b=function(t,e,n,r,a,o,i,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):a&&(l=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var b=c.beforeCreate;c.beforeCreate=b?[].concat(b,l):[l]}return{exports:t,options:c}}(d,r,[],!1,null,"b348b90e",null);b.options.__file="src/components/Poker.vue";e.a=b.exports},function(t,e,n){"use strict";n.r(e),function(t){var e=n(1);storiesOf("TEST|Example",t).addDecorator(addons.withNotes).add("banner",()=>({components:{Poker:e.a},template:'<poker :list="list" @sildeBaner="onSilde"/>',data:()=>({list:[{id:131741,name:"太空武士",previewUrl:"http://qzonestyle.gtimg.cn/qzone/space_item/cover/org/13/131741/1080x1080.jpg",tag:"",thumbUrl:"http://qzonestyle.gtimg.cn/qzone/space_item/cover/org/13/131741/188x188.jpg",traceinfo:"50_201341_1538823308_131741_100343_1_0.000000",type:2},{id:131617,name:"LettersF",previewUrl:"http://qzonestyle.gtimg.cn/qzone/space_item/cover/org/1/131617/1080x1080.jpg",tag:"红蓝 交替 平面 蔚蓝 思 抽象",thumbUrl:"http://qzonestyle.gtimg.cn/qzone/space_item/cover/org/1/131617/188x188.jpg",traceinfo:"50_201341_1538823308_131617_100343_2_0.000000",type:2},{id:131622,name:"LettersG",previewUrl:"http://qzonestyle.gtimg.cn/qzone/space_item/cover/org/6/131622/1080x1080.jpg",tag:"澄粉 汇聚 平面 玫红 思 抽象",thumbUrl:"http://qzonestyle.gtimg.cn/qzone/space_item/cover/org/6/131622/188x188.jpg",traceinfo:"50_201341_1538823308_131622_100343_3_0.000000",type:2}]}),methods:{onSilde(t){console.log(t.id)}}}),{notes:"由于pc端不支持touch事件，所以需要打开调试模式，切换到移动设备模式，然后刷新一下才能支持移动端的交互"})}.call(this,n(3)(t))},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,n){"use strict";var r=n(0);n.n(r).a},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,"\na[data-v-b348b90e], address[data-v-b348b90e], b[data-v-b348b90e], blockquote[data-v-b348b90e], body[data-v-b348b90e], div[data-v-b348b90e], em[data-v-b348b90e], fieldset[data-v-b348b90e], form[data-v-b348b90e], h1[data-v-b348b90e], h2[data-v-b348b90e], h3[data-v-b348b90e], h4[data-v-b348b90e], h5[data-v-b348b90e], h6[data-v-b348b90e], html[data-v-b348b90e], i[data-v-b348b90e], iframe[data-v-b348b90e], img[data-v-b348b90e], label[data-v-b348b90e], legend[data-v-b348b90e], li[data-v-b348b90e], ol[data-v-b348b90e], p[data-v-b348b90e], s[data-v-b348b90e], span[data-v-b348b90e], table[data-v-b348b90e], tbody[data-v-b348b90e], td[data-v-b348b90e], tfoot[data-v-b348b90e], th[data-v-b348b90e], thead[data-v-b348b90e], tr[data-v-b348b90e], ul[data-v-b348b90e] {\n    margin:0;\n    padding:0;\n    border:0;\n    font-weight:inherit;\n    font-style:inherit;\n    font-size:100%;\n    font-family:-apple-system\n}\nol[data-v-b348b90e], ul[data-v-b348b90e] {\n    list-style:none\n}\na img[data-v-b348b90e] {\n    border:none;\n    vertical-align:top\n}\na[data-v-b348b90e] {\n    text-decoration:none\n}\nbutton[data-v-b348b90e] {\n    overflow:visible;\n    padding:0;\n    margin:0;\n    border:0 none;\n    background-color:transparent;\n    font-family:inherit\n}\nbutton[data-v-b348b90e]::-moz-focus-inner {\n    padding:0\n}\ninput[data-v-b348b90e], textarea[data-v-b348b90e] {\n    background:0 0;\n    padding:0;\n    border-radius:0;\n    -webkit-appearance:none;\n    font-family:inherit\n}\ninput[type=password][data-v-b348b90e] {\n    -webkit-text-security:disc\n}\nbutton[data-v-b348b90e]:focus, input[data-v-b348b90e]:focus, textarea[data-v-b348b90e]:focus {\n    outline:0\n}\nbody[data-v-b348b90e] {\n    word-wrap:break-word\n}\n*[data-v-b348b90e] {\n    -webkit-tap-highlight-color:rgba(0, 0, 0, 0)\n}\n.hybrid[data-v-b348b90e] {\n    -webkit-user-select:none;\n    user-select:none\n}\n.hybrid a[data-v-b348b90e], .hybrid img[data-v-b348b90e] {\n    -webkit-touch-callout:none\n}\nbody[data-v-b348b90e] {\n    background:#1e1d23;\n    position:relative;\n    overflow:hidden\n}\nbody *[data-v-b348b90e] {\n    -webkit-touch-callout:none;\n    -webkit-user-select:none;\n    user-select:none\n}\n.mod-cover[data-v-b348b90e] {\n    position:relative;\n    -webkit-transform:translate3d(0, 0, 0);\n    transform:translate3d(0, 0, 0);\n    box-sizing:border-box;\n    margin:0 12px;\n    padding-top:0\n}\n.mod-cover .cover-box[data-v-b348b90e] {\n    box-sizing:border-box;\n    padding:12px 0;\n    position:relative;\n    width:100%;\n    top:0;\n    overflow:visible\n}\n.mod-cover .cover-box .cover-list[data-v-b348b90e] {\n    position:relative;\n    padding-top:74.64%;\n    -webkit-transition:all 1s;\n    transition:all 1s;\n    -webkit-transform:translate3d(0, 0, 0);\n    transform:translate3d(0, 0, 0)\n}\n.cover-item[data-v-b348b90e] {\n    -webkit-transition:all 1s;\n    transition:all 1s;\n    width:100%;\n    height:100%;\n    background-size:100% auto;\n    background-size:cover;\n    background-position:50%;\n    background-repeat:no-repeat;\n    overflow:hidden;\n    border-radius:4px;\n    position:absolute;\n    top:0;\n    opacity:0;\n    -webkit-transform:scale(.86) translateY(16px);\n    transform:scale(.86) translateY(16px);\n    -webkit-transform-origin:50% 100%;\n    transform-origin:50% 100%;\n    bottom:0\n}\n.cover-item[data-v-b348b90e]:nth-last-child(3) {\n    -webkit-transform:scale(.86) translateY(16px);\n    transform:scale(.86) translateY(16px);\n    -webkit-transform-origin:50% 100%;\n    transform-origin:50% 100%;\n    bottom:0;\n    top:auto;\n    z-index:1;\n    -webkit-transition:all .5s .8s;\n    transition:all .5s .8s;\n    opacity:.32;\n    border-radius:8px\n}\n.cover-item[data-v-b348b90e]:nth-last-child(2) {\n    -webkit-transform:scale(.94) translateY(8px);\n    transform:scale(.94) translateY(8px);\n    -webkit-transform-origin:50% 100%;\n    transform-origin:50% 100%;\n    bottom:0;\n    top:auto;\n    z-index:2;\n    -webkit-transition:all .5s .8s;\n    transition:all .5s .8s;\n    opacity:.64;\n    border-radius:5px\n}\n.cover-list .cover-item[data-v-b348b90e]:nth-last-child(1) {\n    z-index:9;\n    opacity:1;\n    -webkit-transform:scale(1) translateY(0);\n    transform:scale(1) translateY(0)\n}\n.cover-list .cover-item.prepare[data-v-b348b90e] {\n    -webkit-transition:all .8s;\n    transition:all .8s\n}\n.cover-list .cover-item.restore[data-v-b348b90e] {\n    -webkit-transition:all .8s;\n    transition:all .8s;\n    -webkit-transform:scale(1) translateY(0);\n    transform:scale(1) translateY(0);\n    opacity:1\n}\n.cover-list .cover-item.restore .item-info[data-v-b348b90e] {\n    opacity:1;\n    -webkit-transform:translateY(0);\n    transform:translateY(0)\n}\n.cover-list .cover-item.remove[data-v-b348b90e] {\n    -webkit-transition:all .5s;\n    transition:all .5s;\n    -webkit-transform:scale(1) translateY(0) translateX(-120%);\n    transform:scale(1) translateY(0) translateX(-120%)\n}\n.cover-list .cover-item.removeLeft[data-v-b348b90e] {\n    -webkit-transition:all .4s;\n    transition:all .4s;\n    -webkit-transform:scale(1) translateY(-80%) translateX(-120%) rotate(30deg);\n    transform:scale(1) translateY(-80%) translateX(-120%) rotate(30deg)\n}\n.cover-list .cover-item.removeright[data-v-b348b90e] {\n    -webkit-transition:all .4s;\n    transition:all .4s;\n    -webkit-transform:scale(1) translateY(-80%) translateX(120%) rotate(-30deg);\n    transform:scale(1) translateY(-80%) translateX(120%) rotate(-30deg)\n}\n.mod-cover .cover-box[data-v-b348b90e] {\n    overflow:hidden;\n    border-radius:4px\n}\n.mod-cover .cover-box .cover-list[data-v-b348b90e] {\n    -webkit-transform-origin:50% 0;\n    transform-origin:50% 0\n}\n.mod-cover .cover-box .cover-list .cover-item .item-img[data-v-b348b90e] {\n    position:absolute;\n    display:block;\n    width:100%;\n    height:100%;\n    background-size:cover;\n    top:0;\n    left:0;\n    -webkit-transform-origin:50% 100%;\n    transform-origin:50% 100%;\n    -webkit-transition:all 1s;\n    transition:all 1s;\n    overflow:hidden;\n    border-radius:4px\n}\n.link-stores[data-v-b348b90e] {\n    position:absolute;\n    font-size:16px;\n    color:#fff;\n    letter-spacing:0;\n    text-shadow:0 2px 3px rgba(0, 0, 0, .32);\n    z-index:9;\n    top:24px;\n    right:12px\n}\n.mod-operate[data-v-b348b90e] {\n    text-align:center;\n    font-size:0;\n    padding:16px 6px\n}\n.mod-operate .mod-btn[data-v-b348b90e] {\n    display:inline-block;\n    width:50%;\n    box-sizing:border-box;\n    padding:0 6px;\n    float:left\n}\n.mod-operate .mod-btn.large[data-v-b348b90e] {\n    width:100%\n}\n.mod-operate .op-btn[data-v-b348b90e] {\n    display:block;\n    width:100%;\n    height:40px;\n    font-size:16px;\n    color:#fff;\n    background:#656469;\n    font-weight:700;\n    border-radius:2px\n}\n.mod-operate .op-btn.btn-light[data-v-b348b90e] {\n    background:#ffe066;\n    color:#292422\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var a=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([a]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){var r,a,o={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),l=null,c=0,d=[],b=n(8);function f(t,e){for(var n=0;n<t.length;n++){var r=t[n],a=o[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(g(r.parts[i],e))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(g(r.parts[i],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function u(t,e){for(var n=[],r={},a=0;a<t.length;a++){var o=t[a],i=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function p(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),d.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=s(t.insertAt.before,n);n.insertBefore(e,a)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function h(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return m(e,t.attrs),p(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,a,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var i=c++;n=l||(l=h(e)),r=w.bind(null,n,i,!1),a=w.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,a=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&a;(e.convertToAbsoluteUrls||o)&&(r=b(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,e),a=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),a=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=u(t,e);return f(n,e),function(t){for(var r=[],a=0;a<n.length;a++){var i=n[a];(s=o[i.id]).refs--,r.push(s)}t&&f(u(t,e),e);for(a=0;a<r.length;a++){var s;if(0===(s=r[a]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var y,x=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function w(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var a,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}}]);