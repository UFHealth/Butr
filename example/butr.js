!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("butr",[],n):"object"==typeof exports?exports.butr=n():t.butr=n()}(window,function(){return(e={},o.m=r=[function(r,t,n){(function(t){function n(t){return t&&t.Math==Math&&t}r.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n(26))},function(t,n,r){var e=r(2);t.exports=!e(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(1),o=r(15),i=r(10);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(11),o=r(12);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(0),o=r(5);t.exports=function(n,r){try{o(e,n,r)}catch(t){e[n]=r}return r}},function(t,n,r){var e=r(1),o=r(9),i=r(10),u=r(6),c=r(13),f=r(3),a=r(14),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(27),i="".split;t.exports=e(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var o=r(4);t.exports=function(t,n){if(!o(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!o(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!o(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!o(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(1),o=r(2),i=r(28);t.exports=!e&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(1),o=r(14),i=r(16),u=r(13),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(18),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(0),o=r(7),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},function(t,n){t.exports={}},function(t,n,r){var u=r(3),c=r(6),f=r(41).indexOf,a=r(19);t.exports=function(t,n){var r,e=c(t),o=0,i=[];for(r in e)!u(a,r)&&u(e,r)&&i.push(r);for(;n.length>o;)u(e,r=n[o++])&&(~f(i,r)||i.push(r));return i}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?e:r)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(25),o=r(45);e({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(t,n,r){var s=r(0),p=r(8).f,l=r(5),v=r(29),y=r(7),b=r(36),d=r(44);t.exports=function(t,n){var r,e,o,i,u,c=t.target,f=t.global,a=t.stat;if(r=f?s:a?s[c]||y(c,{}):(s[c]||{}).prototype)for(e in n){if(i=n[e],o=t.noTargetGet?(u=p(r,e))&&u.value:r[e],!d(f?e:c+(a?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;b(i,o)}(t.sham||o&&o.sham)&&l(i,"sham",!0),v(r,e,i,t)}}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(0),o=r(4),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,r){var c=r(0),f=r(5),a=r(3),s=r(7),e=r(17),o=r(30),i=o.get,p=o.enforce,l=String(String).split("String");(t.exports=function(t,n,r,e){var o=!!e&&!!e.unsafe,i=!!e&&!!e.enumerable,u=!!e&&!!e.noTargetGet;"function"==typeof r&&("string"!=typeof n||a(r,"name")||f(r,"name",n),p(r).source=l.join("string"==typeof n?n:"")),t!==c?(o?!u&&t[n]&&(i=!0):delete t[n],i?t[n]=r:f(t,n,r)):i?t[n]=r:s(n,r)})(Function.prototype,"toString",function(){return"function"==typeof this&&i(this).source||e(this)})},function(t,n,r){var e,o,i,u=r(31),c=r(0),f=r(4),a=r(5),s=r(3),p=r(32),l=r(19),v=c.WeakMap;if(u){var y=new v,b=y.get,d=y.has,g=y.set;e=function(t,n){return g.call(y,t,n),n},o=function(t){return b.call(y,t)||{}},i=function(t){return d.call(y,t)}}else{var h=p("state");l[h]=!0,e=function(t,n){return a(t,h,n),n},o=function(t){return s(t,h)?t[h]:{}},i=function(t){return s(t,h)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(r){return function(t){var n;if(!f(t)||(n=o(t)).type!==r)throw TypeError("Incompatible receiver, "+r+" required");return n}}}},function(t,n,r){var e=r(0),o=r(17),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,r){var e=r(33),o=r(35),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,r){var e=r(34),o=r(18);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.2",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var c=r(3),f=r(37),a=r(8),s=r(15);t.exports=function(t,n){for(var r=f(n),e=s.f,o=a.f,i=0;i<r.length;i++){var u=r[i];c(t,u)||e(t,u,o(n,u))}}},function(t,n,r){var e=r(38),o=r(40),i=r(23),u=r(16);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){function e(t){return"function"==typeof t?t:void 0}var o=r(39),i=r(0);t.exports=function(t,n){return arguments.length<2?e(o[t])||e(i[t]):o[t]&&o[t][n]||i[t]&&i[t][n]}},function(t,n,r){var e=r(0);t.exports=e},function(t,n,r){var e=r(20),o=r(22).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){function e(c){return function(t,n,r){var e,o=f(t),i=a(o.length),u=s(r,i);if(c&&n!=n){for(;u<i;)if((e=o[u++])!=e)return!0}else for(;u<i;u++)if((c||u in o)&&o[u]===n)return c||u||0;return!c&&-1}}var f=r(6),a=r(42),s=r(43);t.exports={includes:e(!0),indexOf:e(!1)}},function(t,n,r){var e=r(21),o=Math.min;t.exports=function(t){return 0<t?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(21),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n,r){function e(t,n){var r=c[u(t)];return r==a||r!=f&&("function"==typeof n?o(n):!!n)}var o=r(2),i=/#|\.prototype\./,u=e.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=e.data={},f=e.NATIVE="N",a=e.POLYFILL="P";t.exports=e},function(t,n,r){"use strict";var l=r(1),e=r(2),v=r(46),y=r(23),b=r(9),d=r(47),g=r(11),o=Object.assign,i=Object.defineProperty;t.exports=!o||e(function(){if(l&&1!==o({b:1},o(i({},"a",{enumerable:!0,get:function(){i(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=o({},t)[r]||v(o({},n)).join("")!=e})?function(t,n){for(var r=d(t),e=arguments.length,o=1,i=y.f,u=b.f;o<e;)for(var c,f=g(arguments[o++]),a=i?v(f).concat(i(f)):v(f),s=a.length,p=0;p<s;)c=a[p++],l&&!u.call(f,c)||(r[c]=f[c]);return r}:o},function(t,n,r){var e=r(20),o=r(22);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(12);t.exports=function(t){return Object(e(t))}},function(t,n,r){"use strict";r.r(n);r(24);var e={animating:!1,settings:{}},o={target:0,direction:"y",keepHash:!0,speed:1,afterTo:null,scrollOffset:0,olClass:"Butr__Sidebar__List",liClass:"Butr__Sidebar__Item",aClass:"Butr__Sidebar__Link",scrollingElement:null,duration:320,markerClass:"Butr__Marker",activeClass:"Butr__Sidebar__Link--active",distanceTop:0,topBuffer:0,avoid:null,avoidBuffer:0,mediaQuery:!1};window.Butr={init:function(t){e.settings=Object.assign({},o,t)}}}],o.c=e,o.d=function(t,n,r){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)o.d(r,e,function(t){return n[t]}.bind(null,e));return r},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=48)).default;function o(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return r[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}var r,e});