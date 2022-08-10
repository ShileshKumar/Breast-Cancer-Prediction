(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=da(this);function r(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function w(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype}
function qa(){this.u=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.v=0;this.H=this.j=null}
function ra(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
qa.prototype.A=function(a){this.i=a};
function sa(a,b){a.j={Ma:b,Qa:!0};a.h=a.v||a.m}
qa.prototype.return=function(a){this.j={return:a};this.h=this.m};
function x(a,b,c){a.h=c;return{value:b}}
qa.prototype.o=function(a){this.h=a};
function ta(a,b,c){a.v=b;void 0!=c&&(a.m=c)}
function ua(a){a.v=0;var b=a.j.Ma;a.j=null;return b}
function va(a){a.H=[a.j];a.v=0;a.m=0}
function wa(a){var b=a.H.splice(0)[0];(b=a.j=a.j||b)?b.Qa?a.h=a.v||a.m:void 0!=b.o&&a.m<b.o?(a.h=b.o,a.j=null):a.h=a.m:a.h=0}
function xa(a){this.h=new qa;this.i=a}
function ya(a,b){ra(a.h);var c=a.h.l;if(c)return za(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Aa(a)}
function za(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.l=null,sa(a.h,g),Aa(a)}a.h.l=null;d.call(a.h,f);return Aa(a)}
function Aa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,sa(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Qa)throw b.Ma;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ba(a){this.next=function(b){ra(a.h);a.h.l?b=za(a,a.h.l.next,b,a.h.A):(a.h.A(b),b=Aa(a));return b};
this.throw=function(b){ra(a.h);a.h.l?b=za(a,a.h.l["throw"],b,a.h.A):(sa(a.h,b),b=Aa(a));return b};
this.return=function(b){return ya(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ca(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function z(a){return Ca(new Ba(new xa(a)))}
r("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.ya),reject:g(this.m)}};
b.prototype.ya=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.cb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ka(g):this.v(g)}};
b.prototype.ka=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.eb(h,g):this.v(g)};
b.prototype.m=function(g){this.A(2,g)};
b.prototype.v=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.bb();this.H()};
b.prototype.bb=function(){var g=this;e(function(){if(g.O()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.O=function(){if(this.u)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.H=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.cb=function(g){var h=this.l();g.ma(h.resolve,h.reject)};
b.prototype.eb=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(u,p){return"function"==typeof u?function(v){try{l(u(v))}catch(A){n(A)}}:p}
var l,n,q=new b(function(u,p){l=u;n=p});
this.ma(k(g,l),k(h,n));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ma=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=t(g),n=l.next();!n.done;n=l.next())d(n.value).ma(h,k)})};
b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,n){function q(v){return function(A){u[v]=A;p--;0==p&&l(u)}}
var u=[],p=0;do u.push(void 0),p++,d(k.value).ma(q(u.length-1),n),k=h.next();while(!k.done)})};
return b});
function Da(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
r("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Da(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Da(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Da(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Da(k,g)&&Da(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Da(k,g)&&Da(k[g],this.h)?delete k[g][this.h]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ha(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&Da(h.data_,l))for(h=0;h<n.length;h++){var q=n[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:n,index:h,entry:q}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ea(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ea(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ea(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Object.setPrototypeOf",function(a){return a||oa});
var Fa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Da(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||Fa});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
r("Set",function(a){function b(c){this.h=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Da(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ea(this,b,"includes").indexOf(b,c||0)}});
var B=this||self;function C(a,b){a=a.split(".");b=b||B;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ha(){}
function Ia(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ja(a){var b=Ia(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ka(a){return Object.prototype.hasOwnProperty.call(a,La)&&a[La]||(a[La]=++Ma)}
var La="closure_uid_"+(1E9*Math.random()>>>0),Ma=0;function Na(a,b,c){return a.call.apply(a.bind,arguments)}
function Oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Pa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Pa=Na:Pa=Oa;return Pa.apply(null,arguments)}
function E(a,b){a=a.split(".");var c=B;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function F(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Kb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Qa(a){return a}
;function Ra(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ra);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.gb=b)}
F(Ra,Error);Ra.prototype.name="CustomError";function Sa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Ta(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ua=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Va=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Wa(a,b){b=Ua(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Xa(a){return Array.prototype.concat.apply([],arguments)}
function Ya(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Za(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ja(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function $a(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function bb(a){var b=cb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function db(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function eb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=eb(a[c]);return b}
var fb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<fb.length;f++)c=fb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var hb;function ib(a,b){this.h=a===jb&&b||""}
ib.prototype.ga=!0;ib.prototype.fa=function(){return this.h};
function kb(a){return new ib(jb,a)}
var jb={};kb("");var lb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function mb(a,b){if(b)a=a.replace(nb,"&amp;").replace(ob,"&lt;").replace(pb,"&gt;").replace(qb,"&quot;").replace(rb,"&#39;").replace(sb,"&#0;");else{if(!tb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(nb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ob,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(pb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(qb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(rb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(sb,"&#0;"))}return a}
var nb=/&/g,ob=/</g,pb=/>/g,qb=/"/g,rb=/'/g,sb=/\x00/g,tb=/[\x00&<>"']/;function ub(a,b){this.h=b===vb?a:""}
m=ub.prototype;m.ga=!0;m.fa=function(){return this.h.toString()};
m.Pa=!0;m.Na=function(){return 1};
m.toString=function(){return this.h.toString()};
var wb=RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',"i"),xb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,yb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,vb={},zb=new ub("about:invalid#zClosurez",vb);var Ab;a:{var Bb=B.navigator;if(Bb){var Cb=Bb.userAgent;if(Cb){Ab=Cb;break a}}Ab=""}function H(a){return-1!=Ab.indexOf(a)}
;function Db(){return(H("Chrome")||H("CriOS"))&&!H("Edge")}
;var Eb={};function Fb(a,b,c){this.h=c===Eb?a:"";this.i=b;this.ga=this.Pa=!0}
Fb.prototype.Na=function(){return this.i};
Fb.prototype.fa=function(){return this.h.toString()};
Fb.prototype.toString=function(){return this.h.toString()};
function Gb(a,b){if(void 0===hb){var c=null;var d=B.trustedTypes;if(d&&d.createPolicy){try{c=d.createPolicy("goog#html",{createHTML:Qa,createScript:Qa,createScriptURL:Qa})}catch(e){B.console&&B.console.error(e.message)}hb=c}else hb=c}a=(c=hb)?c.createHTML(a):a;return new Fb(a,b,Eb)}
;var Hb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ib(a){return a?decodeURI(a):a}
function Jb(a){return Ib(a.match(Hb)[3]||null)}
function Kb(a){var b=a.match(Hb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Lb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Lb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Mb(a){var b=[],c;for(c in a)Lb(c,a[c],b);return b.join("&")}
var Nb=/#|$/;function Ob(a,b){var c=a.search(Nb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function Pb(a){B.setTimeout(function(){throw a;},0)}
;var Qb="symbol"===typeof Symbol(),Rb=Symbol("INTERNAL_ARRAY_STATE");function Sb(a){if(!Array.isArray(a))return a;Object.isFrozen(a)||(Qb?a[Rb]|=1:void 0!==a.h?a.h|=1:Object.defineProperties(a,{h:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a}
;function Tb(){return H("iPhone")&&!H("iPod")&&!H("iPad")}
;function Ub(a){Ub[" "](a);return a}
Ub[" "]=Ha;var Vb=H("Opera"),Wb=H("Trident")||H("MSIE"),Xb=H("Edge"),Yb=H("Gecko")&&!(-1!=Ab.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),Zb=-1!=Ab.toLowerCase().indexOf("webkit")&&!H("Edge");function $b(){var a=B.document;return a?a.documentMode:void 0}
var ac;a:{var bc="",cc=function(){var a=Ab;if(Yb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Xb)return/Edge\/([\d\.]+)/.exec(a);if(Wb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Zb)return/WebKit\/(\S+)/.exec(a);if(Vb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
cc&&(bc=cc?cc[1]:"");if(Wb){var dc=$b();if(null!=dc&&dc>parseFloat(bc)){ac=String(dc);break a}}ac=bc}var ec=ac,fc;if(B.document&&Wb){var gc=$b();fc=gc?gc:parseInt(ec,10)||void 0}else fc=void 0;var hc=fc;var ic=Tb()||H("iPod"),jc=H("iPad");!H("Android")||Db();Db();var kc=H("Safari")&&!(Db()||H("Coast")||H("Opera")||H("Edge")||H("Edg/")||H("OPR")||H("Firefox")||H("FxiOS")||H("Silk")||H("Android"))&&!(Tb()||H("iPad")||H("iPod"));var lc={},mc=null;
function nc(a,b){Ja(a);void 0===b&&(b=0);if(!mc){mc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));lc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===mc[h]&&(mc[h]=g)}}}b=lc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var oc="function"===typeof Uint8Array;function pc(a){return null!==a&&"object"===typeof a&&a.constructor===Object}
function qc(a,b){if(null!=a)return Array.isArray(a)||pc(a)?rc(a,b):b(a)}
function rc(a,b){if(Array.isArray(a)){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=qc(a[d],b);if(a){var e;Qb?e=a[Rb]:e=a.h;a=null==e?0:e}else a=0;a&1&&Sb(c);return c}e={};for(c in a)e[c]=qc(a[c],b);return e}
function sc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":return oc&&null!=a&&a instanceof Uint8Array?nc(a):a;default:return a}}
function tc(a){return oc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function uc(a,b){this.i=a;this.j=b;this.h={};this.l=!0;if(0<this.i.length){for(a=0;a<this.i.length;a++){b=this.i[a];var c=b[0];this.h[c.toString()]=new vc(c,b[1])}this.l=!0}}
m=uc.prototype;m.isFrozen=function(){return!1};
m.toJSON=function(){var a=this.N();return rc(a,sc)};
m.N=function(){if(this.l){if(this.j){var a=this.h,b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b].h;c&&c.N()}}}else{this.i.length=0;a=wc(this);a.sort();for(b=0;b<a.length;b++){c=this.h[a[b]];var d=c.h;d&&d.N();this.i.push([c.key,c.value])}this.l=!0}return this.i};
m.clear=function(){this.h={};this.l=!1};
m.entries=function(){var a=[],b=wc(this);b.sort();for(var c=0;c<b.length;c++){var d=this.h[b[c]];a.push([d.key,xc(this,d)])}return new yc(a)};
m.keys=function(){var a=[],b=wc(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.h[b[c]].key);return new yc(a)};
m.values=function(){var a=[],b=wc(this);b.sort();for(var c=0;c<b.length;c++)a.push(xc(this,this.h[b[c]]));return new yc(a)};
m.forEach=function(a,b){var c=wc(this);c.sort();for(var d=0;d<c.length;d++){var e=this.h[c[d]];a.call(b,xc(this,e),e.key,this)}};
m.set=function(a,b){var c=new vc(a);this.j?(c.h=b,c.value=b.N()):c.value=b;this.h[a.toString()]=c;this.l=!1;return this};
function xc(a,b){return a.j?(b.h||(b.h=new a.j(b.value),a.isFrozen()&&null(b.h)),b.h):b.value}
m.get=function(a){if(a=this.h[a.toString()])return xc(this,a)};
m.has=function(a){return a.toString()in this.h};
function wc(a){a=a.h;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}
uc.prototype[Symbol.iterator]=function(){return this.entries()};
function vc(a,b){this.key=a;this.value=b;this.h=void 0}
function yc(a){this.i=0;this.h=a}
yc.prototype.next=function(){return this.i<this.h.length?{done:!1,value:this.h[this.i++]}:{done:!0,value:void 0}};
yc.prototype[Symbol.iterator]=function(){return this};var zc;function Ac(a,b,c){var d=zc;zc=null;a||(a=d);d=this.constructor.Ob;a||(a=d?[d]:[]);this.l=(d?0:-1)-(this.constructor.Nb||0);this.h=null;this.i=a;a:{d=this.i.length;a=d-1;if(d&&(d=this.i[a],pc(d))){this.m=a-this.l;this.j=d;break a}void 0!==b&&-1<b?(this.m=Math.max(b,a+1-this.l),this.j=null):this.m=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.m?(a+=this.l,(d=this.i[a])?Sb(d):this.i[a]=Bc):(Cc(this),(d=this.j[a])?Sb(d):this.j[a]=Bc)}
var Bc=Object.freeze(Sb([]));function Cc(a){var b=a.m+a.l;a.i[b]||(a.j=a.i[b]={})}
function Dc(a,b,c){return-1===b?null:(void 0===c?0:c)||b>=a.m?a.j?a.j[b]:void 0:a.i[b+a.l]}
function Ec(a,b,c){a.h||(a.h={});if(b in a.h)return a.h[b];var d=Dc(a,b);d||(d=Sb([]),Fc(a,b,d));c=new uc(d,c);return a.h[b]=c}
function Fc(a,b,c,d){(void 0===d?0:d)||b>=a.m?(Cc(a),a.j[b]=c):a.i[b+a.l]=c}
function Gc(a,b,c,d){if(-1===c)return null;a.h||(a.h={});a.h[c]||(d=Dc(a,c,void 0===d?!1:d))&&(a.h[c]=new b(d));return a.h[c]}
function Hc(a,b,c){a.h||(a.h={});var d=a.h[c];if(!d){var e=void 0===e?!1:e;d=Dc(a,c,e);null==d&&(d=Bc);d===Bc&&(d=Sb([]),Fc(a,c,d,e));e=d;d=[];for(var f=0;f<e.length;f++)d[f]=new b(e[f]);a.h[c]=d}return d}
Ac.prototype.toJSON=function(){var a=this.N();return rc(a,sc)};
Ac.prototype.N=function(){if(this.h)for(var a in this.h){var b=this.h[a];if(Array.isArray(b))for(var c=0;c<b.length;c++)b[c]&&b[c].N();else b&&b.N()}return this.i};
Ac.prototype.toString=function(){return this.N().toString()};
Ac.prototype.clone=function(){var a=this.constructor,b=rc(this.N(),tc);zc=b;a=new a(b);zc=null;Ic(a,this);return a};
function Ic(a,b){b.v&&(a.v=b.v.slice());var c=b.h;if(c){b=b.j;var d={},e;for(e in c){var f=c[e];if(f){var g=!(!b||!b[e]),h=+e;if(Array.isArray(f)){if(f.length)for(g=Hc(a,f[0].constructor,h),h=0;h<Math.min(g.length,f.length);h++)Ic(g[h],f[h])}else f instanceof uc?f.j&&(d.xa=Ec(a,h,f.j),f.forEach(function(k){return function(l,n){return Ic(k.xa.get(n),l)}}(d))):(g=Gc(a,f.constructor,h,g))&&Ic(g,f)}d={xa:d.xa}}}}
;var Jc=window;kb("csi.gstatic.com");kb("googleads.g.doubleclick.net");kb("pagead2.googlesyndication.com");kb("partner.googleadservices.com");kb("pubads.g.doubleclick.net");kb("securepubads.g.doubleclick.net");kb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
function Kc(a,b){this.width=a;this.height=b}
m=Kc.prototype;m.clone=function(){return new Kc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Lc(a,b){$a(b,function(c,d){c&&"object"==typeof c&&c.ga&&(c=c.fa());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Mc.hasOwnProperty(d)?a.setAttribute(Mc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Mc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Nc(a,b,c){var d=arguments,e=document,f=d[1],g=Oc(e,String(d[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):Lc(g,f));2<d.length&&Pc(e,g,d);return g}
function Pc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ja(f)||D(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(D(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}G(g?Ya(f):f,d)}}}
function Oc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Qc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Rc(a){var b=Sc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Tc(){var a=[];Rc(function(b){a.push(b)});
return a}
var Sc={xb:"allow-forms",yb:"allow-modals",zb:"allow-orientation-lock",Ab:"allow-pointer-lock",Bb:"allow-popups",Cb:"allow-popups-to-escape-sandbox",Db:"allow-presentation",Eb:"allow-same-origin",Fb:"allow-scripts",Gb:"allow-top-navigation",Hb:"allow-top-navigation-by-user-activation"},Uc=Ta(function(){return Tc()});
function Vc(){var a=Wc(),b={};G(Uc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Wc(){var a=void 0===a?document:a;var b="IFRAME";"application/xhtml+xml"===(null==a?void 0:a.contentType)&&(b=b.toLowerCase());return a.createElement(b)}
;var Xc=(new Date).getTime();function Yc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Zc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(q){for(var u=g,p=0;64>p;p+=4)u[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=u[p-3]^u[p-8]^u[p-14]^u[p-16],u[p]=(q<<1|q>>>31)&4294967295;q=e[0];var v=e[1],A=e[2],y=e[3],I=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var L=y^v&(A^y);var ca=1518500249}else L=v^A^y,ca=1859775393;else 60>p?(L=v&A|y&(v|A),ca=2400959708):(L=v^A^y,ca=3395469782);L=((q<<5|q>>>27)&4294967295)+L+I+ca+u[p]&4294967295;I=y;y=A;A=(v<<30|v>>>2)&4294967295;v=q;q=L}e[0]=e[0]+q&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+A&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+I&4294967295}
function c(q,u){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],v=0,A=q.length;v<A;++v)p.push(q.charCodeAt(v));q=p}u||(u=q.length);p=0;if(0==l)for(;p+64<u;)b(q.slice(p,p+64)),p+=64,n+=64;for(;p<u;)if(f[l++]=q[p++],n++,64==l)for(l=0,b(f);p+64<u;)b(q.slice(p,p+64)),p+=64,n+=64}
function d(){var q=[],u=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=u&255,u>>>=8;b(f);for(p=u=0;5>p;p++)for(var v=24;0<=v;v-=8)q[u++]=e[p]>>v&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,ib:function(){for(var q=d(),u="",p=0;p<q.length;p++)u+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return u}}}
;function $c(a,b,c){var d=String(B.location.href);return d&&a&&b?[b,ad(Yc(d),a,c||null)].join(" "):null}
function ad(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),bd(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=bd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function bd(a){var b=Zc();b.update(a);return b.ib().toLowerCase()}
;var cd={};function dd(a){this.h=a||{cookie:""}}
m=dd.prototype;m.isEnabled=function(){if(!B.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ba:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Rb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ba}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=lb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ba:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=lb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ed=new dd("undefined"==typeof document?null:document);function fd(a){return!!cd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function gd(a,b,c,d){(a=B[a])||(a=(new dd(document)).get(b));return a?$c(a,c,d):null}
function hd(a){var b=void 0===b?!1:b;var c=Yc(String(B.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=B.__SAPISID||B.__APISID||B.__3PSAPISID||B.__OVERRIDE_SID;fd(e)&&(f=f||B.__1PSAPISID);if(f)e=!0;else{var g=new dd(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");fd(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,e||(e=new dd(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?$c(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&fd(b)&&((b=gd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=gd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function id(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function jd(){this.l=this.l;this.v=this.v}
jd.prototype.l=!1;jd.prototype.dispose=function(){this.l||(this.l=!0,this.ea())};
jd.prototype.ea=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function kd(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
kd.prototype.stopPropagation=function(){this.j=!0};
kd.prototype.preventDefault=function(){this.defaultPrevented=!0};function ld(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=md(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,nd[c])c=nd[c];else{c=String(c);if(!nd[c]){var f=/function\s+([^\(]+)/m.exec(c);nd[c]=f?f[1]:"[Anonymous]"}c=nd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function md(a,b){b||(b={});b[od(a)]=!0;var c=a.stack||"";(a=a.gb)&&!b[od(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=md(a,b));return c}
function od(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var nd={};var pd=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",Ha,b),B.removeEventListener("test",Ha,b)}catch(c){}return a}();function qd(a,b){kd.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
F(qd,kd);var rd={2:"touch",3:"pen",4:"mouse"};
qd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Yb){a:{try{Ub(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:rd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&qd.M.preventDefault.call(this)};
qd.prototype.stopPropagation=function(){qd.M.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
qd.prototype.preventDefault=function(){qd.M.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var sd="closure_listenable_"+(1E6*Math.random()|0);var td=0;function ud(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.qa=e;this.key=++td;this.ha=this.la=!1}
function vd(a){a.ha=!0;a.listener=null;a.proxy=null;a.src=null;a.qa=null}
;function wd(a){this.src=a;this.listeners={};this.h=0}
wd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=xd(a,b,d,e);-1<g?(b=a[g],c||(b.la=!1)):(b=new ud(b,this.src,f,!!d,e),b.la=c,a.push(b));return b};
wd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=xd(e,b,c,d);return-1<b?(vd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function yd(a,b){var c=b.type;c in a.listeners&&Wa(a.listeners[c],b)&&(vd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function xd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ha&&f.listener==b&&f.capture==!!c&&f.qa==d)return e}return-1}
;var zd="closure_lm_"+(1E6*Math.random()|0),Ad={},Bd=0;function Cd(a,b,c,d,e){if(d&&d.once)Dd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Cd(a,b[f],c,d,e);else c=Ed(c),a&&a[sd]?a.Y(b,c,D(d)?!!d.capture:!!d,e):Fd(a,b,c,!1,d,e)}
function Fd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=Gd(a);h||(a[zd]=h=new wd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Hd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)pd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Id(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Bd++}}
function Hd(){function a(c){return b.call(a.src,a.listener,c)}
var b=Jd;return a}
function Dd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Dd(a,b[f],c,d,e);else c=Ed(c),a&&a[sd]?a.h.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):Fd(a,b,c,!0,d,e)}
function Kd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Kd(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=Ed(c),a&&a[sd])?a.h.remove(String(b),c,d,e):a&&(a=Gd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=xd(b,c,d,e)),(c=-1<a?b[a]:null)&&Ld(c))}
function Ld(a){if("number"!==typeof a&&a&&!a.ha){var b=a.src;if(b&&b[sd])yd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Id(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Bd--;(c=Gd(b))?(yd(c,a),0==c.h&&(c.src=null,b[zd]=null)):vd(a)}}}
function Id(a){return a in Ad?Ad[a]:Ad[a]="on"+a}
function Jd(a,b){if(a.ha)a=!0;else{b=new qd(b,this);var c=a.listener,d=a.qa||a.src;a.la&&Ld(a);a=c.call(d,b)}return a}
function Gd(a){a=a[zd];return a instanceof wd?a:null}
var Md="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ed(a){if("function"===typeof a)return a;a[Md]||(a[Md]=function(b){return a.handleEvent(b)});
return a[Md]}
;function J(){jd.call(this);this.h=new wd(this);this.ya=this;this.H=null}
F(J,jd);J.prototype[sd]=!0;J.prototype.addEventListener=function(a,b,c,d){Cd(this,a,b,c,d)};
J.prototype.removeEventListener=function(a,b,c,d){Kd(this,a,b,c,d)};
function Nd(a,b){var c=a.H;if(c){var d=[];for(var e=1;c;c=c.H)d.push(c),++e}a=a.ya;c=b.type||b;"string"===typeof b?b=new kd(b,a):b instanceof kd?b.target=b.target||a:(e=b,b=new kd(c,a),gb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Od(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Od(g,c,!0,b)&&e,b.j||(e=Od(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Od(g,c,!1,b)&&e}
J.prototype.ea=function(){J.M.ea.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,vd(d[e]);delete a.listeners[c];a.h--}}this.H=null};
J.prototype.Y=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
function Od(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ha&&g.capture==c){var h=g.listener,k=g.qa||g.src;g.la&&yd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Pd(a){var b,c;J.call(this);var d=this;this.A=this.j=0;this.J=null!==a&&void 0!==a?a:{K:function(e,f){return setTimeout(e,f)},
X:clearTimeout};this.i=null!==(c=null===(b=window.navigator)||void 0===b?void 0:b.onLine)&&void 0!==c?c:!0;this.m=function(){return z(function(e){return x(e,Qd(d),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||Rd(this)}
w(Pd,J);Pd.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.J.X(this.A);delete Pd.h};
Pd.prototype.D=function(){return this.i};
function Rd(a){a.A=a.J.K(function(){var b;return z(function(c){if(1==c.h)return a.i?(null===(b=window.navigator)||void 0===b?0:b.onLine)?c.o(3):x(c,Qd(a),3):x(c,Qd(a),3);Rd(a);c.h=0})},3E4)}
function Qd(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f;return z(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,ta(g,2,3),d&&(a.j=a.J.K(function(){d.abort()},b||2E4)),x(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:va(g);a.u=void 0;a.j&&(a.J.X(a.j),a.j=0);f!==a.i&&(a.i=f,a.i?Nd(a,"networkstatus-online"):Nd(a,"networkstatus-offline"));c(f);wa(g);break;case 2:ua(g),f=!1,g.o(3)}})})}
;function Sd(){this.data_=[];this.h=-1}
Sd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
Sd.prototype.get=function(a){return!!this.data_[a]};
function Td(a){-1==a.h&&(a.h=Va(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Ud(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Ud.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Vd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Wd;
function Xd(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=Oc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Pa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ja;c.Ja=null;e()}};
return function(e){d.next={Ja:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function Yd(){this.i=this.h=null}
Yd.prototype.add=function(a,b){var c=Zd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Yd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Zd=new Ud(function(){return new $d},function(a){return a.reset()});
function $d(){this.next=this.scope=this.h=null}
$d.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
$d.prototype.reset=function(){this.next=this.scope=this.h=null};function ae(a,b){be||ce();de||(be(),de=!0);ee.add(a,b)}
var be;function ce(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);be=function(){a.then(fe)}}else be=function(){var b=fe;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!H("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(Wd||(Wd=Xd()),Wd(b)):B.setImmediate(b)}}
var de=!1,ee=new Yd;function fe(){for(var a;a=ee.remove();){try{a.h.call(a.scope)}catch(b){Pb(b)}Vd(Zd,a)}de=!1}
;function ge(a,b){this.h=a[B.Symbol.iterator]();this.i=b;this.j=0}
ge.prototype[Symbol.iterator]=function(){return this};
ge.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function he(a,b){return new ge(a,b)}
;function ie(){this.blockSize=-1}
;function je(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.v=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
F(je,ie);je.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function ke(a,b,c){c||(c=0);var d=a.v;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
je.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)ke(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){ke(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){ke(this,e);f=0;break}}this.i=f;this.l+=b}};
je.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;ke(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};var le="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function me(){}
me.prototype.R=function(){throw le;};
me.prototype.next=function(){return ne};
var ne={done:!0,value:void 0};me.prototype.I=function(){return this};function oe(a){if(a instanceof pe||a instanceof qe||a instanceof re)return a;if("function"==typeof a.R)return new pe(function(){return se(a)});
if("function"==typeof a[Symbol.iterator])return new pe(function(){return a[Symbol.iterator]()});
if("function"==typeof a.I)return new pe(function(){return se(a.I())});
throw Error("Not an iterator or iterable.");}
function se(a){if(!(a instanceof me))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.R();break}catch(d){if(d!==le)throw d;b=!0}return{value:c,done:b}}}}
function pe(a){this.i=a}
pe.prototype.I=function(){return new qe(this.i())};
pe.prototype[Symbol.iterator]=function(){return new re(this.i())};
pe.prototype.h=function(){return new re(this.i())};
function qe(a){this.i=a}
w(qe,me);qe.prototype.R=function(){var a=this.i.next();if(a.done)throw le;return a.value};
qe.prototype[Symbol.iterator]=function(){return new re(this.i)};
qe.prototype.h=function(){return new re(this.i)};
function re(a){pe.call(this,function(){return a});
this.j=a}
w(re,pe);re.prototype.next=function(){return this.j.next()};function te(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof te)for(c=ue(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function ue(a){ve(a);return a.h.concat()}
m=te.prototype;m.has=function(a){return we(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||xe;ve(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function xe(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.j=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return we(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&ve(this),!0):!1};
function ve(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];we(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],we(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return we(this.i,a)?this.i[a]:b};
m.set=function(a,b){we(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
m.forEach=function(a,b){for(var c=ue(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new te(this)};
m.keys=function(){return oe(this.I(!0)).h()};
m.values=function(){return oe(this.I(!1)).h()};
m.entries=function(){var a=this;return he(this.keys(),function(b){return[b,a.get(b)]})};
m.I=function(a){ve(this);var b=0,c=this.j,d=this,e=new me;e.R=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw le;var f=d.h[b++];return a?f:d.i[f]};
return e};
function we(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var ye=B.JSON.stringify;function ze(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.v=!1;if(a!=Ha)try{var b=this;a.call(void 0,function(c){Ae(b,2,c)},function(c){Ae(b,3,c)})}catch(c){Ae(this,3,c)}}
function Be(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Be.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Ce=new Ud(function(){return new Be},function(a){a.reset()});
function De(a,b,c){var d=Ce.get();d.i=a;d.onRejected=b;d.context=c;return d}
ze.prototype.then=function(a,b,c){return Ee(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
ze.prototype.$goog_Thenable=!0;ze.prototype.cancel=function(a){if(0==this.h){var b=new Fe(a);ae(function(){Ge(this,b)},this)}};
function Ge(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Ge(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):He(c),Ie(c,e,3,b)))}a.j=null}else Ae(a,3,b)}
function Je(a,b){a.i||2!=a.h&&3!=a.h||Ke(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Ee(a,b,c,d){var e=De(null,null,null);e.h=new ze(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Fe?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Je(a,e);return e.h}
ze.prototype.H=function(a){this.h=0;Ae(this,2,a)};
ze.prototype.O=function(a){this.h=0;Ae(this,3,a)};
function Ae(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.H,f=a.O;if(d instanceof ze){Je(d,De(e||Ha,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(D(d))try{var k=d.then;if("function"===typeof k){Le(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.h=b,a.j=null,Ke(a),3!=b||c instanceof Fe||Me(a,c))}}
function Le(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ke(a){a.v||(a.v=!0,ae(a.A,a))}
function He(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
ze.prototype.A=function(){for(var a;a=He(this);)Ie(this,a,this.h,this.u);this.v=!1};
function Ie(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Ne(b,c,d);else try{b.j?b.i.call(b.context):Ne(b,c,d)}catch(e){Oe.call(null,e)}Vd(Ce,b)}
function Ne(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Me(a,b){a.m=!0;ae(function(){a.m&&Oe.call(null,b)})}
var Oe=Pb;function Fe(a){Ra.call(this,a)}
F(Fe,Ra);Fe.prototype.name="cancel";function K(a){jd.call(this);this.u=1;this.j=[];this.m=0;this.h=[];this.i={};this.A=!!a}
F(K,jd);m=K.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
function Pe(a,b,c){var d=Qe;if(a=d.i[a]){var e=d.h;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.ja(a)}}
m.ja=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.m?(this.j.push(a),this.h[a+1]=Ha):(c&&Wa(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.ca=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Re(this.h[g+1],this.h[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.l;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.m--,0<this.j.length&&0==this.m)for(;c=this.j.pop();)this.ja(c)}}return 0!=e}return!1};
function Re(a,b,c){ae(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.ja,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.ea=function(){K.M.ea.call(this);this.clear();this.j.length=0};function Se(a){this.h=a}
Se.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,ye(b))};
Se.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Se.prototype.remove=function(a){this.h.remove(a)};function Te(a){this.h=a}
F(Te,Se);function Ue(a){this.data=a}
function Ve(a){return void 0===a||a instanceof Ue?a:new Ue(a)}
Te.prototype.set=function(a,b){Te.M.set.call(this,a,Ve(b))};
Te.prototype.i=function(a){a=Te.M.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Te.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function We(a){this.h=a}
F(We,Te);We.prototype.set=function(a,b,c){if(b=Ve(b)){if(c){if(c<Date.now()){We.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}We.M.set.call(this,a,b)};
We.prototype.i=function(a){var b=We.M.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())We.prototype.remove.call(this,a);else return b}};function Xe(){}
;function Ye(){}
F(Ye,Xe);Ye.prototype[Symbol.iterator]=function(){return oe(this.I(!0)).h()};
Ye.prototype.clear=function(){var a=Array.from(this);a=t(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ze(a){this.h=a}
F(Ze,Ye);m=Ze.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.I=function(a){var b=0,c=this.h,d=new me;d.R=function(){if(b>=c.length)throw le;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function $e(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
F($e,Ze);function af(a,b){this.i=a;this.h=null;var c;if(c=Wb)c=!(9<=Number(hc));if(c){bf||(bf=new te);this.h=bf.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),bf.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
F(af,Ye);var cf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},bf=null;function df(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return cf[b]})}
m=af.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(df(a),b);ef(this)};
m.get=function(a){a=this.h.getAttribute(df(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(df(a));ef(this)};
m.I=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new me;d.R=function(){if(b>=c.length)throw le;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ef(this)};
function ef(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ff(a,b){this.i=a;this.h=b+"::"}
F(ff,Ye);ff.prototype.set=function(a,b){this.i.set(this.h+a,b)};
ff.prototype.get=function(a){return this.i.get(this.h+a)};
ff.prototype.remove=function(a){this.i.remove(this.h+a)};
ff.prototype.I=function(a){var b=this.i.I(!0),c=this,d=new me;d.R=function(){for(var e=b.R();e.substr(0,c.h.length)!=c.h;)e=b.R();return a?e.substr(c.h.length):c.i.get(e)};
return d};function gf(a){Ac.call(this,a)}
w(gf,Ac);var hf,jf,kf,lf=B.window,mf=(null===(hf=null===lf||void 0===lf?void 0:lf.yt)||void 0===hf?void 0:hf.config_)||(null===(jf=null===lf||void 0===lf?void 0:lf.ytcfg)||void 0===jf?void 0:jf.data_)||{},nf=(null===(kf=null===lf||void 0===lf?void 0:lf.ytcfg)||void 0===kf?void 0:kf.obfuscatedData_)||[];new gf(nf);E("yt.config_",mf);E("yt.configJspb_",nf);function of(a){for(var b=0;b<arguments.length;++b);b=arguments;1<b.length?mf[b[0]]=b[1]:1===b.length&&Object.assign(mf,b[0])}
function M(a,b){return a in mf?mf[a]:b}
function pf(){return M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0)}
;var qf=[];function rf(a){qf.forEach(function(b){return b(a)})}
function sf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){tf(b)}}:a}
function tf(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=M("ERRORS",[]),e.push([a,"ERROR",b,c,d]),of("ERRORS",e));rf(a)}
function uf(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=M("ERRORS",[]),e.push([a,"WARNING",b,c,d]),of("ERRORS",e))}
;var vf=0;E("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++vf});var wf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function xf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in wf||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
xf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
xf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
xf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var cb=B.ytEventsEventsListeners||{};E("ytEventsEventsListeners",cb);var yf=B.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",yf);
function zf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return bb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&db(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Af(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in cb){var c=cb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Bf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete cb[b]}}))}
var Bf=Ta(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Cf(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=zf(a,b,c,d);if(!e){e=++yf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new xf(h);if(!Qc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new xf(h);
h.currentTarget=a;return c.call(a,h)};
g=sf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Bf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);cb[e]=[a,b,c,g,d]}}}
;function Df(a,b){"function"===typeof a&&(a=sf(a));return window.setTimeout(a,b)}
function Ef(a){"function"===typeof a&&(a=sf(a));return window.setInterval(a,250)}
;var Ff=/^[\w.]*$/,Gf={q:!0,search_query:!0};function Hf(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=If(f[0]||""),h=If(f[1]||"");g in c?Array.isArray(c[g])?Za(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var k=q,l=f[0],n=String(Hf);k.args=[{key:l,value:f[1],query:a,method:Jf==n?"unchanged":n}];Gf.hasOwnProperty(l)||uf(k)}}return c}
var Jf=String(Hf);function Kf(a){var b=[];$a(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Lf(a){"?"==a.charAt(0)&&(a=a.substr(1));return Hf(a,"&")}
function Mf(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Lf(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Mb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Nf(a){if(!b)var b=window.location.href;var c=a.match(Hb)[1]||null,d=Jb(a);c&&d?(a=a.match(Hb),b=b.match(Hb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Jb(b)==d&&(Number(b.match(Hb)[4]||null)||null)==(Number(a.match(Hb)[4]||null)||null):!0;return a}
function If(a){return a&&a.match(Ff)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function N(a){a=Of(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Pf(a,b){a=Of(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Of(a){var b=M("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:M("EXPERIMENT_FLAGS",{})[a]}
;var Qf={appSettingsCaptured:!0,foregroundHeartbeat:!0,foregroundHeartbeatScreenAssociated:!0,screenCreated:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},Rf={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,
tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,
tvhtml5ApiTest:!0};function Sf(){}
function Tf(a,b){return Uf(a,0,b)}
Sf.prototype.K=function(a,b){return Uf(a,1,b)};function Vf(){Sf.apply(this,arguments)}
w(Vf,Sf);function Wf(){Vf.h||(Vf.h=new Vf);return Vf.h}
function Uf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Df(a,c||0)}
Vf.prototype.X=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Vf.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};var Xf=Wf();function Yf(a){var b=Zf;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Xc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(pa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Jc:g;try{var h=g.history.length}catch(pa){h=0}e.u_his=h;var k;e.u_h=null==(k=Jc.screen)?void 0:k.height;var l;e.u_w=null==(l=Jc.screen)?void 0:l.width;var n;e.u_ah=null==(n=Jc.screen)?void 0:n.availHeight;var q;e.u_aw=
null==(q=Jc.screen)?void 0:q.availWidth;var u;e.u_cd=null==(u=Jc.screen)?void 0:u.colorDepth}catch(pa){}h=b.h;try{var p=h.screenX;var v=h.screenY}catch(pa){}try{var A=h.outerWidth;var y=h.outerHeight}catch(pa){}try{var I=h.innerWidth;var L=h.innerHeight}catch(pa){}try{var ca=h.screenLeft;var Yi=h.screenTop}catch(pa){}try{I=h.innerWidth,L=h.innerHeight}catch(pa){}try{var Zi=h.screen.availWidth;var $i=h.screen.availTop}catch(pa){}p=[ca,Yi,p,v,Zi,$i,A,y,I,L];v=b.h.top;try{var ab=(v||window).document,
Y="CSS1Compat"==ab.compatMode?ab.documentElement:ab.body;var ea=(new Kc(Y.clientWidth,Y.clientHeight)).round()}catch(pa){ea=new Kc(-12245933,-12245933)}ab=ea;ea={};Y=new Sd;B.SVGElement&&B.document.createElementNS&&Y.set(0);v=Vc();v["allow-top-navigation-by-user-activation"]&&Y.set(1);v["allow-popups-to-escape-sandbox"]&&Y.set(2);B.crypto&&B.crypto.subtle&&Y.set(3);B.TextDecoder&&B.TextEncoder&&Y.set(4);Y=Td(Y);ea.bc=Y;ea.bih=ab.height;ea.biw=ab.width;ea.brdim=p.join();b=b.i;b=(ea.vis={visible:1,
hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ea.wgl=!!Jc.WebGLRenderingContext,ea);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Zf=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Kf(Yf(a))});Date.now();var $f="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function ag(){if(!$f)return null;var a=$f();return"open"in a?a:null}
;var bg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},cg="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia("client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" "))),dg=!1;
function eg(a,b){b=void 0===b?{}:b;var c=Nf(a),d=N("web_ajax_ignore_global_headers_if_set"),e;for(e in bg){var f=M(bg[e]);!f||!c&&Jb(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!Jb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Jb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Jb(a))b["X-YouTube-Ad-Signals"]=Kf(Yf(void 0));return b}
function fg(a){var b=window.location.search,c=Jb(a);N("debug_handle_relative_url_for_query_forward_killswitch")||c||!Nf(a)||(c=document.location.hostname);var d=Ib(a.match(Hb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Lf(b),f={};G(cg,function(g){e[g]&&(f[g]=e[g])});
return Mf(a,f||{},!1)}
function gg(a,b){var c=b.format||"JSON";a=hg(a,b);var d=ig(a,b),e=!1,f=jg(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var n=null,q=400<=k.status&&500>k.status,u=500<=k.status&&600>k.status;if(l||q||u)n=kg(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=
!!n}n=n||{};q=b.context||B;l?b.onSuccess&&b.onSuccess.call(q,k,n):b.onError&&b.onError.call(q,k,n);b.onFinish&&b.onFinish.call(q,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Df(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function hg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=M("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=Mf(a,b||{},!0);return a}
function ig(a,b){var c=M("XSRF_FIELD_NAME",void 0),d=M("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=M("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Jb(a)&&!b.withCredentials&&Jb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Lf(e),gb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Mb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=
!1;break a}f=!0}a=!f}!dg&&a&&"POST"!=b.method&&(dg=!0,tf(Error("AJAX request with postData should use POST")));return e}
function kg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,uf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?lg(a):null)e={},G(a.getElementsByTagName("*"),function(g){e[g.tagName]=mg(g)})}d&&ng(e);
return e}
function ng(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;kb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=Gb(a[b],null);a[c]=d}else ng(a[b])}}
function lg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function mg(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function jg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&sf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ag();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;N("debug_forward_web_query_parameters")&&(a=fg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=eg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var og=ic||jc;function pg(a){var b=Ab;return b?0<=b.toLowerCase().indexOf(a):!1}
;var qg={},rg=0;
function sg(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!pg("cobalt"))a&&(a instanceof ub||(a="object"==typeof a&&a.ga?a.fa():String(a),yb.test(a)?a=new ub(a,vb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(xb))&&wb.test(b[1])?new ub(a,vb):null)),a=a||zb,a instanceof ub&&a.constructor===ub?a=a.h:(Ia(a),a="type_error:SafeUrl"),"about:invalid#zClosurez"===a||a.startsWith("data")?a="":(a instanceof Fb||(b="object"==typeof a,c=null,b&&a.Pa&&(c=a.Na()),a=Gb(mb(b&&a.ga?a.fa():String(a)),c)),a instanceof
Fb&&a.constructor===Fb?a=a.h:(Ia(a),a="type_error:SafeHtml"),a=encodeURIComponent(String(ye(a.toString())))),/^[\s\xa0]*$/.test(a)||(a=Nc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a)));else if(e)jg(a,b,"POST",e,d);else if(M("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)jg(a,b,"GET","",d);else{b:{try{var f=new Sa({url:a});if(f.j&&f.i||f.l){var g=Ib(a.match(Hb)[5]||null);var h=!(!g||!g.endsWith("/aclk")||
"1"!==Ob(a,"ri"));break b}}catch(k){}h=!1}h?tg(a)?(b&&b(),c=!0):c=!1:c=!1;c||ug(a,b)}}
function vg(){var a=void 0===a?"":a;tg("/generate_204",a)||sg("/generate_204",void 0,void 0,void 0,a)}
function tg(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function ug(a,b){var c=new Image,d=""+rg++;qg[d]=c;c.onload=c.onerror=function(){b&&qg[d]&&b();delete qg[d]};
c.src=a}
;var wg=B.ytPubsubPubsubInstance||new K,xg=B.ytPubsubPubsubSubscribedKeys||{},yg=B.ytPubsubPubsubTopicToKeys||{},zg=B.ytPubsubPubsubIsSynchronous||{};K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.ja;K.prototype.publish=K.prototype.ca;K.prototype.clear=K.prototype.clear;E("ytPubsubPubsubInstance",wg);E("ytPubsubPubsubTopicToKeys",yg);E("ytPubsubPubsubIsSynchronous",zg);E("ytPubsubPubsubSubscribedKeys",xg);var Ag=window,O=Ag.ytcsi&&Ag.ytcsi.now?Ag.ytcsi.now:Ag.performance&&Ag.performance.timing&&Ag.performance.now&&Ag.performance.timing.navigationStart?function(){return Ag.performance.timing.navigationStart+Ag.performance.now()}:function(){return(new Date).getTime()};var Bg=Pf("initial_gel_batch_timeout",2E3),Cg=Math.pow(2,16)-1,Dg=void 0,Eg=0,Fg=0,Gg=0,Hg=!0,Ig=B.ytLoggingTransportGELQueue_||new Map;E("ytLoggingTransportGELQueue_",Ig);var Jg=B.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Jg);
function Kg(a,b){if("log_event"===a.endpoint){var c="";a.oa?c="visitorOnlyApprovedKey":a.P&&(Jg[a.P.token]=Lg(a.P),c=a.P.token);var d=Ig.get(c)||[];Ig.set(c,d);d.push(a.payload);b&&(Dg=new b);a=Pf("tvhtml5_logging_max_batch")||Pf("web_logging_max_batch")||100;b=O();d.length>=a?Mg({writeThenSend:!0},N("flush_only_full_queue")?c:void 0):10<=b-Gg&&(Ng(),Gg=b)}}
function Og(a,b){if("log_event"===a.endpoint){var c="";a.oa?c="visitorOnlyApprovedKey":a.P&&(Jg[a.P.token]=Lg(a.P),c=a.P.token);var d=new Map;d.set(c,[a.payload]);b&&(Dg=new b);return new ze(function(e){Dg&&Dg.isReady()?Pg(d,e,{bypassNetworkless:!0},!0):e()})}}
function Mg(a,b){a=void 0===a?{}:a;new ze(function(c){window.clearTimeout(Eg);window.clearTimeout(Fg);Fg=0;if(Dg&&Dg.isReady())if(void 0!==b){var d=new Map,e=Ig.get(b)||[];d.set(b,e);Pg(d,c,a);Ig.delete(b)}else Pg(Ig,c,a),Ig.clear();else Ng(),c()})}
function Ng(){N("web_gel_timeout_cap")&&!Fg&&(Fg=Df(function(){Mg({writeThenSend:!0})},6E4));
window.clearTimeout(Eg);var a=M("LOGGING_BATCH_TIMEOUT",Pf("web_gel_debounce_ms",1E4));N("shorten_initial_gel_batch_timeout")&&Hg&&(a=Bg);Eg=Df(function(){Mg({writeThenSend:!0})},a)}
function Pg(a,b,c,d){var e=Dg;c=void 0===c?{}:c;var f=Math.round(O()),g=a.size;a=t(a);for(var h=a.next();!h.done;h=a.next()){var k=t(h.value);h=k.next().value;var l=k=k.next().value;k=eb({context:Qg(e.config_||Rg())});k.events=l;(l=Jg[h])&&Sg(k,h,l);delete Jg[h];h="visitorOnlyApprovedKey"===h;Tg(k,f,h);N("always_send_and_write")&&(c.writeThenSend=!1);N("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&vg();Ug(e,"log_event",k,{retry:!0,onSuccess:function(){g--;
g||b()},
onError:function(){g--;g||b()},
Sa:c,oa:h,Lb:!!d});Hg=!1}}
function Tg(a,b,c){a.requestTimeMs=String(b);N("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=M("EVENT_ID",void 0))&&((c=M("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*Cg/2)),c++,c>Cg&&(c=1),of("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Sg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Lg(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var Vg=B.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Vg);function Wg(){if(!B.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return B.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":B.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":B.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":B.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;E("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var Xg={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Yg={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Zg(){var a=B.navigator;return a?a.connection:void 0}
;function $g(){return"INNERTUBE_API_KEY"in mf&&"INNERTUBE_API_VERSION"in mf}
function Rg(){return{innertubeApiKey:M("INNERTUBE_API_KEY",void 0),innertubeApiVersion:M("INNERTUBE_API_VERSION",void 0),kb:M("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),lb:M("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),nb:M("INNERTUBE_CONTEXT_HL",void 0),mb:M("INNERTUBE_CONTEXT_GL",void 0),ob:M("INNERTUBE_HOST_OVERRIDE",void 0)||"",qb:!!M("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),pb:!!M("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:M("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Qg(a){var b={client:{hl:a.nb,gl:a.mb,clientName:a.lb,clientVersion:a.innertubeContextClientVersion,configInfo:a.kb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=B.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=M("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=M("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=M("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===
d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=Wg()}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!N("music_web_display_mode_killswitch")){var h;b.client.Ra=null!=(h=b.client.Ra)?h:{};b.client.Ra.webDisplayMode=Wg()}var k;if(N("web_log_memory_total_kbytes")&&(null==(k=B.navigator)?
0:k.deviceMemory)){var l;h=null==(l=B.navigator)?void 0:l.deviceMemory;b.client.memoryTotalKbytes=""+1E6*h}a.appInstallData&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);M("DELEGATED_SESSION_ID")&&!N("pageid_as_header_web")&&(b.user={onBehalfOfUser:M("DELEGATED_SESSION_ID")});a:{if(l=Zg()){a=Xg[l.type||"unknown"]||"CONN_UNKNOWN";l=Xg[l.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==l&&(a=l);if("CONN_UNKNOWN"!==
a)break a;if("CONN_UNKNOWN"!==l){a=l;break a}}a=void 0}a&&(b.client.connectionType=a);N("web_log_effective_connection_type")&&(a=Zg(),a=null!==a&&void 0!==a&&a.effectiveType?Yg.hasOwnProperty(a.effectiveType)?Yg[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;l=a.assign;h=b.client;k={};g=t(Object.entries(Lf(M("DEVICE",""))));for(f=g.next();!f.done;f=g.next())e=t(f.value),f=e.next().value,e=e.next().value,"cbrand"===f?k.deviceMake=e:"cmodel"===
f?k.deviceModel=e:"cbr"===f?k.browserName=e:"cbrver"===f?k.browserVersion=e:"cos"===f?k.osName=e:"cosver"===f?k.osVersion=e:"cplatform"===f&&(k.platform=e);b.client=l.call(a,h,k);return b}
function ah(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||M("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Jb||M("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Ib:b=hd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=M("SESSION_INDEX",0),N("pageid_as_header_web")&&(d["X-Goog-PageId"]=M("DELEGATED_SESSION_ID")));return d}
;function bh(a){a=Object.assign({},a);delete a.Authorization;var b=hd();if(b){var c=new je;c.update(M("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=nc(c.digest(),3)}return a}
;function ch(a){var b=new $e;(b=b.isAvailable()?a?new ff(b,a):b:null)||(a=new af(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new We(a):null;this.i=document.domain||window.location.hostname}
ch.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ye(b))}catch(f){return}else e=escape(b);b=this.i;ed.set(""+a,e,{Ba:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
ch.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=ed.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ch.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;ed.remove(""+a,"/",void 0===b?"youtube.com":b)};var dh;function eh(){dh||(dh=new ch("yt.innertube"));return dh}
function fh(a,b,c,d){if(d)return null;d=eh().get("nextId",!0)||1;var e=eh().get("requests",!0)||{};e[d]={method:a,request:b,authState:bh(c),requestTime:Math.round(O())};eh().set("nextId",d+1,86400,!0);eh().set("requests",e,86400,!0);return d}
function gh(a){var b=eh().get("requests",!0)||{};delete b[a];eh().set("requests",b,86400,!0)}
function hh(a){var b=eh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(O())-d.requestTime)){var e=d.authState,f=bh(ah(!1));db(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(O())),Ug(a,d.method,e,{}));delete b[c]}}eh().set("requests",b,86400,!0)}}
;var ih=function(){var a;return function(){a||(a=new ch("ytidb"));return a}}();
function jh(){var a;return null===(a=ih())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var kh=[],lh=!1;function mh(a){lh||(kh.push({type:"ERROR",payload:a}),10<kh.length&&kh.shift())}
function nh(a,b){lh||(kh.push({type:"EVENT",eventType:a,payload:b}),10<kh.length&&kh.shift())}
;function oh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(ia(c))}
w(oh,Error);function ph(){try{return qh(),!0}catch(a){return!1}}
function qh(){if(void 0!==M("DATASYNC_ID",void 0))return M("DATASYNC_ID",void 0);throw new oh("Datasync ID not set","unknown");}
;function rh(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function sh(a){return a.substr(0,a.indexOf(":"))||a}
;var P={},th=(P.AUTH_INVALID="No user identifier specified.",P.EXPLICIT_ABORT="Transaction was explicitly aborted.",P.IDB_NOT_SUPPORTED="IndexedDB is not supported.",P.MISSING_INDEX="Index not created.",P.MISSING_OBJECT_STORE="Object store not created.",P.DB_DELETED_BY_MISSING_OBJECT_STORE="Database is deleted because an expected object store was not created.",P.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",P.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",P.QUOTA_MAYBE_EXCEEDED=
"The current transaction may have failed because of exceeding quota limitations.",P.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",P.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",P),Q={},uh=(Q.AUTH_INVALID="ERROR",Q.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Q.EXPLICIT_ABORT="IGNORED",Q.IDB_NOT_SUPPORTED="ERROR",Q.MISSING_INDEX="WARNING",Q.MISSING_OBJECT_STORE="ERROR",Q.DB_DELETED_BY_MISSING_OBJECT_STORE="WARNING",Q.QUOTA_EXCEEDED=
"WARNING",Q.QUOTA_MAYBE_EXCEEDED="WARNING",Q.UNKNOWN_ABORT="WARNING",Q.INCOMPATIBLE_DB_VERSION="WARNING",Q),R={},vh=(R.AUTH_INVALID=!1,R.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,R.EXPLICIT_ABORT=!1,R.IDB_NOT_SUPPORTED=!1,R.MISSING_INDEX=!1,R.MISSING_OBJECT_STORE=!1,R.DB_DELETED_BY_MISSING_OBJECT_STORE=!1,R.QUOTA_EXCEEDED=!1,R.QUOTA_MAYBE_EXCEEDED=!0,R.UNKNOWN_ABORT=!0,R.INCOMPATIBLE_DB_VERSION=!1,R);
function S(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?th[a]:c;d=void 0===d?uh[a]:d;e=void 0===e?vh[a]:e;oh.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,S.prototype)}
w(S,oh);function wh(a){S.call(this,"MISSING_OBJECT_STORE",{sb:a},th.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,wh.prototype)}
w(wh,S);function xh(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,xh.prototype)}
w(xh,Error);var yh=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function zh(a,b,c,d){b=sh(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof S)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new S("QUOTA_EXCEEDED",a);if(kc&&"UnknownError"===e.name)return new S("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof xh)return new S("MISSING_INDEX",Object.assign(Object.assign({},a),{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&yh.some(function(f){return e.message.includes(f)}))return new S("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new S("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign(Object.assign({},a),{name:"IdbError",Qb:e.name})];e.level="WARNING";return e}
function Ah(a,b,c){var d=jh();return new S("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null===d||void 0===d?void 0:d.hasSucceededOnce}})}
;function Bh(a){if(!a)throw Error();throw a;}
function Ch(a){return a}
function Dh(a){this.h=a}
function T(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=t(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=t(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
T.all=function(a){return new T(new Dh(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={Z:0};f.Z<a.length;f={Z:f.Z},++f.Z)Eh(T.resolve(a[f.Z]).then(function(g){return function(h){d[g.Z]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
T.resolve=function(a){return new T(new Dh(function(b,c){a instanceof T?a.then(b,c):b(a)}))};
T.reject=function(a){return new T(new Dh(function(b,c){c(a)}))};
T.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Ch,e=null!==b&&void 0!==b?b:Bh;return new T(new Dh(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Fh(c,c,d,f,g)}),c.onRejected.push(function(){Gh(c,c,e,f,g)})):"FULFILLED"===c.state.status?Fh(c,c,d,f,g):"REJECTED"===c.state.status&&Gh(c,c,e,f,g)}))};
function Eh(a,b){a.then(void 0,b)}
function Fh(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof T?Hh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Gh(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof T?Hh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Hh(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof T?Hh(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ih(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Jh(a){return new Promise(function(b,c){Ih(a,b,c)})}
function U(a){return new T(new Dh(function(b,c){Ih(a,b,c)}))}
;function Kh(a,b){return new T(new Dh(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Lh(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(O());this.i=!1}
m=Lh.prototype;m.add=function(a,b,c){return V(this,[a],{mode:"readwrite",G:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return V(this,[a],{mode:"readwrite",G:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return V(this,[a],{mode:"readonly",G:!0},function(c){return c.objectStore(a).count(b)})};
function Mh(a,b,c){a=a.h.createObjectStore(b,c);return new Nh(a)}
m.delete=function(a,b){return V(this,[a],{mode:"readwrite",G:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return V(this,[a],{mode:"readonly",G:!0},function(c){return c.objectStore(a).get(b)})};
function Oh(a,b){return V(a,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(c){c=c.objectStore("LogsRequestsStore");return U(c.h.put(b,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function V(a,b,c,d){var e,f,g,h,k,l,n,q,u,p,v,A;return z(function(y){switch(y.h){case 1:var I={mode:"readonly",G:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?I.mode=c:Object.assign(I,c);e=I;a.transactionCount++;f=e.G?3:1;g=0;case 2:if(h){y.o(3);break}g++;k=Math.round(O());ta(y,4);l=a.h.transaction(b,e.mode);I=new Ph(l);I=Qh(I,d);return x(y,I,6);case 6:return n=y.i,q=Math.round(O()),Rh(a,k,q,g,void 0,b.join(),e),y.return(n);case 4:u=ua(y);p=Math.round(O());v=zh(u,a.h.name,b.join(),a.h.version);
if((A=v instanceof S&&!v.h)||g>=f)Rh(a,k,p,g,v,b.join(),e),h=v;y.o(2);break;case 3:return y.return(Promise.reject(h))}})}
function Rh(a,b,c,d,e,f,g){b=c-b;e?(e instanceof S&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&nh("QUOTA_EXCEEDED",{dbName:sh(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof S&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),nh("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Sh(a,!1,d,f,b,g.tag),mh(e)):Sh(a,!0,d,f,b,g.tag)}
function Sh(a,b,c,d,e,f){nh("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Nh(a){this.h=a}
m=Nh.prototype;m.add=function(a,b){return U(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return U(this.h.clear()).then(function(){})};
m.count=function(a){return U(this.h.count(a))};
function Th(a,b){return Uh(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Th(this,a):U(this.h.delete(a))};
m.get=function(a){return U(this.h.get(a))};
m.index=function(a){try{return new Vh(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new xh(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function Uh(a,b,c){a=a.h.openCursor(b.query,b.direction);return Wh(a).then(function(d){return Kh(d,c)})}
function Ph(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=S;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Qh(a,b){var c=new Promise(function(d,e){try{Eh(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return t(d).next().value})}
Ph.prototype.abort=function(){this.h.abort();this.i=!0;throw new S("EXPLICIT_ABORT");};
Ph.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new Nh(a),this.j.set(a,b));return b};
function Vh(a){this.h=a}
m=Vh.prototype;m.count=function(a){return U(this.h.count(a))};
m.delete=function(a){return Xh(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return U(this.h.get(a))};
m.getKey=function(a){return U(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function Xh(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Wh(a).then(function(d){return Kh(d,c)})}
function Yh(a,b){this.request=a;this.cursor=b}
function Wh(a){return U(a).then(function(b){return b?new Yh(a,b):null})}
m=Yh.prototype;m.advance=function(a){this.cursor.advance(a);return Wh(this.request)};
m.continue=function(a){this.cursor.continue(a);return Wh(this.request)};
m.delete=function(){return U(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.update=function(a){return U(this.cursor.update(a))};function Zh(a,b,c){return new Promise(function(d,e){function f(){u||(u=new Lh(g.result,{closed:q}));return u}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.vb,n=c.upgrade,q=c.closed,u;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&nh("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:sh(a)});var v=f(),A=new Ph(g.transaction);
n&&n(v,function(y){return p.oldVersion<y&&p.newVersion>=y},A);
A.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){nh("IDB_UNEXPECTEDLY_CLOSED",{dbName:sh(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function $h(a,b,c){c=void 0===c?{}:c;return Zh(a,b,c)}
function ai(a,b){b=void 0===b?{}:b;var c,d,e;return z(function(f){c=self.indexedDB.deleteDatabase(a);d=b;(e=d.blocked)&&c.addEventListener("blocked",function(){e()});
return x(f,Jh(c),0)})}
;function bi(a,b){this.name=a;this.options=b;this.l=!0;this.j=!1}
bi.prototype.i=function(a,b,c){c=void 0===c?{}:c;return $h(a,b,c)};
bi.prototype.delete=function(a){a=void 0===a?{}:a;return ai(this.name,a)};
function ci(a,b){return new S("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function di(a,b){if(!b)throw Ah("openWithToken",sh(a.name));return a.open()}
bi.prototype.open=function(){function a(){var f,g,h,k,l,n,q,u;return z(function(p){switch(p.h){case 1:return h=null!==(f=Error().stack)&&void 0!==f?f:"",ta(p,2),x(p,c.i(c.name,c.options.version,e),4);case 4:k=p.i;a:{var v=c.options;for(var A=t(Object.keys(v.sa)),y=A.next();!y.done;y=A.next()){y=y.value;var I=v.sa[y],L=void 0===I.ub?Number.MAX_VALUE:I.ub;if(k.h.version>=I.za&&!(k.h.version>=L)&&!k.h.objectStoreNames.contains(y)){v=y;break a}}v=void 0}l=v;if(void 0===l){p.o(5);break}if(c.j){p.o(6);
break}c.j=!0;return x(p,c.delete(),7);case 7:return mh(new S("DB_DELETED_BY_MISSING_OBJECT_STORE",{dbName:c.name,sb:l})),p.return(a());case 6:throw new wh(l);case 5:return p.return(k);case 2:n=ua(p);if(n instanceof DOMException?"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){p.o(8);break}return x(p,c.i(c.name,void 0,
Object.assign(Object.assign({},e),{upgrade:void 0})),9);case 9:q=p.i;u=q.h.version;if(void 0!==c.options.version&&u>c.options.version+1)throw q.close(),c.l=!1,ci(c,u);return p.return(q);case 8:throw b(),n instanceof Error&&!N("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+h.substring(h.indexOf("\n")+1)),zh(n,c.name,"",null!==(g=c.options.version)&&void 0!==g?g:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw ci(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,vb:b,upgrade:this.options.upgrade};return this.h=d=a()};var ei=new bi("YtIdbMeta",{sa:{databases:{za:1}},upgrade:function(a,b){b(1)&&Mh(a,"databases",{keyPath:"actualName"})}});
function fi(a,b){var c;return z(function(d){if(1==d.h)return x(d,di(ei,b),2);c=d.i;return d.return(V(c,["databases"],{G:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return U(f.h.put(a,void 0)).then(function(){})})}))})}
function gi(a,b){var c;return z(function(d){if(1==d.h)return a?x(d,di(ei,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function hi(a,b){var c,d;return z(function(e){return 1==e.h?(c=[],x(e,di(ei,b),2)):3!=e.h?(d=e.i,x(e,V(d,["databases"],{G:!0,mode:"readonly"},function(f){c.length=0;return Uh(f.objectStore("databases"),{},function(g){a(g.cursor.value)&&c.push(g.cursor.value);return g.continue()})}),3)):e.return(c)})}
function ii(a){return hi(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var ji,ki=new function(){}(new function(){});
function li(){var a,b,c;return z(function(d){switch(d.h){case 1:a=jh();if(null===a||void 0===a?0:a.hasSucceededOnce)return d.return(!0);var e;if(e=og)e=/WebKit\/([0-9]+)/.exec(Ab),e=!!(e&&600<=parseInt(e[1],10));e&&(e=/WebKit\/([0-9]+)/.exec(Ab),e=!(e&&602<=parseInt(e[1],10)));if(e||Xb)return d.return(!1);try{if(b=self,!(b.indexedDB&&b.IDBIndex&&b.IDBKeyRange&&b.IDBObjectStore))return d.return(!1)}catch(f){return d.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return d.return(!1);
ta(d,2);c={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return x(d,fi(c,ki),4);case 4:return x(d,gi("yt-idb-test-do-not-use",ki),5);case 5:return d.return(!0);case 2:return ua(d),d.return(!1)}})}
function mi(){if(void 0!==ji)return ji;lh=!0;return ji=li().then(function(a){lh=!1;var b,c;null!==(b=ih())&&void 0!==b&&b.h&&(b=jh(),b={hasSucceededOnce:(null===b||void 0===b?void 0:b.hasSucceededOnce)||a},null===(c=ih())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0));return a})}
function ni(){return C("ytglobal.idbToken_")||void 0}
function oi(){var a=ni();return a?Promise.resolve(a):mi().then(function(b){(b=b?ki:void 0)&&E("ytglobal.idbToken_",b);return b})}
;new function(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};function pi(a){if(!ph())throw a=new S("AUTH_INVALID",{dbName:a}),mh(a),a;var b=qh();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function qi(a,b,c,d){var e,f,g,h,k,l;return z(function(n){switch(n.h){case 1:return f=null!==(e=Error().stack)&&void 0!==e?e:"",x(n,oi(),2);case 2:g=n.i;if(!g)throw h=Ah("openDbImpl",a,b),N("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),mh(h),h;rh(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:pi(a);ta(n,3);return x(n,fi(k,g),5);case 5:return x(n,$h(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=ua(n),ta(n,7),x(n,gi(k.actualName,
g),9);case 9:n.h=8;n.v=0;break;case 7:ua(n);case 8:throw l;}})}
function ri(a,b,c){c=void 0===c?{}:c;return qi(a,b,!1,c)}
function si(a,b,c){c=void 0===c?{}:c;return qi(a,b,!0,c)}
function ti(a,b){b=void 0===b?{}:b;var c,d;return z(function(e){if(1==e.h)return x(e,oi(),2);if(3!=e.h){c=e.i;if(!c)return e.return();rh(a);d=pi(a);return x(e,ai(d.actualName,b),3)}return x(e,gi(d.actualName,c),0)})}
function ui(a,b,c){a=a.map(function(d){return z(function(e){return 1==e.h?x(e,ai(d.actualName,b),2):x(e,gi(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function vi(){var a=void 0===a?{}:a;var b,c;return z(function(d){if(1==d.h)return x(d,oi(),2);if(3!=d.h){b=d.i;if(!b)return d.return();rh("LogsDatabaseV2");return x(d,ii(b),3)}c=d.i;return x(d,ui(c,a,b),0)})}
function wi(a,b){b=void 0===b?{}:b;var c;return z(function(d){if(1==d.h)return x(d,oi(),2);if(3!=d.h){c=d.i;if(!c)return d.return();rh(a);return x(d,ai(a,b),3)}return x(d,gi(a,c),0)})}
;function xi(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.ba=function(){};
this.now=Date.now;this.da=!1;this.Za=null!==(b=a.Za)&&void 0!==b?b:100;this.Xa=null!==(c=a.Xa)&&void 0!==c?c:1;this.Va=null!==(d=a.Va)&&void 0!==d?d:2592E6;this.Ua=null!==(e=a.Ua)&&void 0!==e?e:12E4;this.Wa=null!==(f=a.Wa)&&void 0!==f?f:5E3;this.s=null!==(g=a.s)&&void 0!==g?g:void 0;this.pa=!!a.pa;this.na=null!==(h=a.na)&&void 0!==h?h:.1;this.va=null!==(k=a.va)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.ba&&(this.ba=a.ba);a.da&&(this.da=a.da);this.B=a.B;this.J=a.J;this.C=a.C;
this.F=a.F;this.S=a.S;this.Ea=a.Ea;this.Da=a.Da;this.s&&(!this.B||this.B("networkless_logging"))&&yi(this)}
function yi(a){z(function(b){if(!a.s||a.da)return b.return();zi(a);a.F.D()&&a.ia();a.F.Y(a.Ea,a.ia.bind(a));a.F.Y(a.Da,a.Ia.bind(a));a.h=!0;return a.pa&&Math.random()<=a.na?x(b,a.C.hb(a.s),0):b.o(0)})}
m=xi.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.s&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.C.set(d,this.s).then(function(e){d.id=e;c.F.D()&&Ai(c,d)}).catch(function(e){Ai(c,d);
Bi(c,e)})}else this.S(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.s&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.B&&this.B("nwl_skip_retry")&&(e.skipRetry=c);if(this.F.D()){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return z(function(k){if(1==k.h)return x(k,d.C.set(e,d.s).catch(function(l){Bi(d,l)}),2);
f(g,h);k.h=0})}}this.S(a,b,e.skipRetry)}else this.C.set(e,this.s).catch(function(g){d.S(a,b,e.skipRetry);
Bi(d,g)})}else this.S(a,b,this.B&&this.B("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.s&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.C.aa(d.id,c.s):e=!0;c.F.W&&c.B&&c.B("vss_network_hint")&&c.F.W(!0);f(g,h)};
this.S(d.url,d.options);this.C.set(d,this.s).then(function(g){d.id=g;e&&c.C.aa(d.id,c.s)}).catch(function(g){Bi(c,g)})}else this.S(a,b)};
m.ia=function(){var a=this;if(!this.s)throw Ah("throttleSend");this.i||(this.i=this.J.K(function(){var b;return z(function(c){if(1==c.h)return x(c,a.C.Oa("NEW",a.s),2);if(3!=c.h)return b=c.i,b?x(c,Ai(a,b),3):(a.Ia(),c.return());a.i&&(a.i=0,a.ia());c.h=0})},this.Za))};
m.Ia=function(){this.J.X(this.i);this.i=0};
function Ai(a,b){var c,d;return z(function(e){switch(e.h){case 1:if(!a.s)throw c=Ah("immediateSend"),c;if(void 0===b.id){e.o(2);break}return x(e,a.C.rb(b.id,a.s),3);case 3:(d=e.i)?b=d:a.ba(Error("The request cannot be found in the database."));case 2:if(Ci(a,b,a.Va)){e.o(4);break}a.ba(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.o(5);break}return x(e,a.C.aa(b.id,a.s),5);case 5:return e.return();case 4:b.skipRetry||(b=Di(a,b));if(!b){e.o(0);break}if(!b.skipRetry||
void 0===b.id){e.o(8);break}return x(e,a.C.aa(b.id,a.s),8);case 8:a.S(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Di(a,b){if(!a.s)throw Ah("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g;return z(function(h){switch(h.h){case 1:g=Ei(f);if(!(a.B&&a.B("nwl_consider_error_code")&&g||a.B&&!a.B("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.va)){h.o(2);break}if(!a.F.T){h.o(3);break}return x(h,a.F.T(),3);case 3:if(a.F.D()){h.o(2);break}c(e,f);if(!a.B||!a.B("nwl_consider_error_code")||void 0===(null===b||void 0===b?void 0:b.id)){h.o(6);break}return x(h,a.C.Fa(b.id,a.s,!1),6);case 6:return h.return();case 2:if(a.B&&a.B("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.va)return h.return();a.potentialEsfErrorCounter++;if(void 0===(null===b||void 0===b?void 0:b.id)){h.o(8);break}return b.sendCount<a.Xa?x(h,a.C.Fa(b.id,a.s),12):x(h,a.C.aa(b.id,a.s),8);case 12:a.J.K(function(){a.F.D()&&a.ia()},a.Wa);
case 8:c(e,f),h.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return z(function(g){if(1==g.h)return void 0===(null===b||void 0===b?void 0:b.id)?g.o(2):x(g,a.C.aa(b.id,a.s),2);a.F.W&&a.B&&a.B("vss_network_hint")&&a.F.W(!0);d(e,f);g.h=0})};
return b}
function Ci(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function zi(a){if(!a.s)throw Ah("retryQueuedRequests");a.C.Oa("QUEUED",a.s).then(function(b){b&&!Ci(a,b,a.Ua)?a.J.K(function(){return z(function(c){if(1==c.h)return void 0===b.id?c.o(2):x(c,a.C.Fa(b.id,a.s),2);zi(a);c.h=0})}):a.F.D()&&a.ia()})}
function Bi(a,b){a.ab&&!a.F.D()?a.ab(b):a.handleError(b)}
function Ei(a){var b;return(a=null===(b=null===a||void 0===a?void 0:a.error)||void 0===b?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var Fi=C("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.ja;K.prototype.publish=K.prototype.ca;K.prototype.clear=K.prototype.clear;E("ytPubsub2Pubsub2Instance",Fi);E("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);function Gi(a,b){bi.call(this,a,b);this.options=b;rh(a)}
w(Gi,bi);function Hi(a,b){var c;return function(){c||(c=new Gi(a,b));return c}}
Gi.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ga?si:ri)(a,b,Object.assign({},c))};
Gi.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ga?wi:ti)(this.name,a)};
function Ii(a,b){return Hi(a,b)}
;var Ji;
function Ki(){if(Ji)return Ji();var a={};Ji=Ii("LogsDatabaseV2",{sa:(a.LogsRequestsStore={za:2},a),Ga:!1,upgrade:function(b,c,d){c(2)&&Mh(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Ji()}
;function Li(a){return di(Ki(),a)}
function Mi(a,b){var c,d,e,f;return z(function(g){if(1==g.h)return c={startTime:O(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},x(g,Li(b),2);if(3!=g.h)return d=g.i,e=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:M("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),x(g,Oh(d,e),3);f=g.i;c.wb=O();Ni(c);return g.return(f)})}
function Oi(a,b){var c,d,e,f,g,h,k;return z(function(l){if(1==l.h)return c={startTime:O(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},x(l,Li(b),2);if(3!=l.h)return d=l.i,e=M("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,O()],h=IDBKeyRange.bound(f,g),k=void 0,x(l,V(d,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(n){return Xh(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(q){q.cursor.value&&(k=q.cursor.value,"NEW"===a&&(k.status="QUEUED",
q.update(k)))})}),3);
c.wb=O();Ni(c);return l.return(k)})}
function Pi(a,b){var c;return z(function(d){if(1==d.h)return x(d,Li(b),2);c=d.i;return d.return(V(c,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",U(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Qi(a,b,c){c=void 0===c?!0:c;var d;return z(function(e){if(1==e.h)return x(e,Li(b),2);d=e.i;return e.return(V(d,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),U(g.h.put(h,void 0)).then(function(){return h})):T.resolve(void 0)})}))})}
function Ri(a,b){var c;return z(function(d){if(1==d.h)return x(d,Li(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Si(a){var b,c;return z(function(d){if(1==d.h)return x(d,Li(a),2);b=d.i;c=O()-2592E6;return x(d,V(b,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(e){return Uh(e.objectStore("LogsRequestsStore"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ti(){z(function(a){return x(a,vi(),0)})}
function Ni(a){if(!N("nwl_csi_killswitch")&&.01>=Math.random()){var b=C("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Ui={},Vi=Ii("ServiceWorkerLogsDatabase",{sa:(Ui.SWHealthLog={za:1},Ui),Ga:!0,upgrade:function(a,b){b(1)&&Mh(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Wi(a){return di(Vi(),a)}
function Xi(a){var b,c;z(function(d){if(1==d.h)return x(d,Wi(a),2);b=d.i;c=O()-2592E6;return x(d,V(b,["SWHealthLog"],{mode:"readwrite",G:!0},function(e){return Uh(e.objectStore("SWHealthLog"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function aj(a){var b;return z(function(c){if(1==c.h)return x(c,Wi(a),2);b=c.i;return x(c,b.clear("SWHealthLog"),0)})}
;var bj;function cj(){bj||(bj=new ch("yt.offline"));return bj}
function dj(a){if(N("offline_error_handling")){var b=cj().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);cj().set("errors",b,2592E3,!0)}}
function ej(){if(N("offline_error_handling")){var a=cj().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new oh(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;tf(c)}cj().set("errors",{},2592E3,!0)}}}
;var fj=Pf("network_polling_interval",3E4);function W(){J.call(this);this.O=0;this.ka=this.m=!1;this.j=this.Aa();N("use_shared_nsm")?(Pd.h||(Pd.h=new Pd(Xf)),this.i=Pd.h):(gj(this),hj(this))}
w(W,J);function ij(){if(!W.h){var a=C("yt.networkStatusManager.instance")||new W;E("yt.networkStatusManager.instance",a);W.h=a}return W.h}
m=W.prototype;m.D=function(){var a;return N("use_shared_nsm")&&this.i?null===(a=this.i)||void 0===a?void 0:a.D():this.j};
m.W=function(a){var b;N("use_shared_nsm")&&this.i?null===(b=this.i)||void 0===b?void 0:b.i=a:a!==this.j&&(this.j=a)};
m.tb=function(a){!N("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.O||jj(this))};
m.Aa=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.jb=function(){this.ka=!0};
m.Y=function(a,b){return N("use_shared_nsm")&&this.i?this.i.Y(a,b):J.prototype.Y.call(this,a,b)};
function hj(a){window.addEventListener("online",function(){return z(function(b){if(1==b.h)return x(b,a.T(),2);a.ka&&ej();b.h=0})})}
function gj(a){window.addEventListener("offline",function(){return z(function(b){return x(b,a.T(),0)})})}
function jj(a){a.O=Tf(function(){return z(function(b){if(1==b.h)return a.j?a.Aa()||!a.m?b.o(3):x(b,a.T(),3):x(b,a.T(),3);jj(a);b.h=0})},fj)}
m.T=function(a){var b=this;return N("use_shared_nsm")&&this.i?Qd(this.i,a):this.u?this.u:this.u=new Promise(function(c){var d,e,f;return z(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,ta(g,2,3),d&&(b.A=Xf.K(function(){d.abort()},a||2E4)),x(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:va(g);b.u=void 0;b.A&&Xf.X(b.A);f!==b.j&&(b.j=f,b.j&&b.m?Nd(b,"ytnetworkstatus-online"):b.m&&Nd(b,"ytnetworkstatus-offline"));c(f);wa(g);break;case 2:ua(g),f=!1,g.o(3)}})})};
W.prototype.sendNetworkCheckRequest=W.prototype.T;W.prototype.listen=W.prototype.Y;W.prototype.enableErrorFlushing=W.prototype.jb;W.prototype.getWindowStatus=W.prototype.Aa;W.prototype.monitorNetworkStatusChange=W.prototype.tb;W.prototype.networkStatusHint=W.prototype.W;W.prototype.isNetworkAvailable=W.prototype.D;W.getInstance=ij;function kj(a){a=void 0===a?{}:a;J.call(this);var b=this;this.j=this.O=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";N("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.i=ij();var c=C("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.La);a.ra&&!N("use_shared_nsm")&&(c=C("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=C("yt.networkStatusManager.instance.listen").bind(this.i))a.wa?
(this.wa=a.wa,c(this.u,function(){lj(b,"publicytnetworkstatus-online");N("use_shared_nsm")&&a.ra&&ej()}),c(this.m,function(){lj(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){Nd(b,"publicytnetworkstatus-online");
N("use_shared_nsm")&&a.ra&&ej()}),c(this.m,function(){Nd(b,"publicytnetworkstatus-offline")}))}
w(kj,J);kj.prototype.D=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.i);return a?a():!0};
kj.prototype.W=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
kj.prototype.T=function(a){var b=this,c;return z(function(d){return(c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i))?d.return(c(a)):d.return(!0)})};
function lj(a,b){a.wa?a.j?(Xf.X(a.O),a.O=Xf.K(function(){a.A!==b&&(Nd(a,b),a.A=b,a.j=O())},a.wa-(O()-a.j))):(Nd(a,b),a.A=b,a.j=O()):Nd(a,b)}
;var mj=0,nj=0,oj,pj=B.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:nj};E("ytNetworklessLoggingInitializationOptions",pj);function qj(a,b){function c(d){var e=rj().D();if(!sj()||!d||e&&N("vss_networkless_bypass_write"))tj(a,b);else{var f={url:a,options:b,timestamp:O(),status:"NEW",sendCount:0};Mi(f,d).then(function(g){f.id=g;rj().D()&&uj(f)}).catch(function(g){uj(f);
rj().D()?tf(g):dj(g)})}}
b=void 0===b?{}:b;N("skip_is_supported_killswitch")?oi().then(function(d){c(d)}):c(ni())}
function vj(a,b){function c(d){if(sj()&&d){var e={url:a,options:b,timestamp:O(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?Ri(e.id,d):f=!0;N("vss_network_hint")&&rj().W(!0);g(h,k)};
tj(e.url,e.options);Mi(e,d).then(function(h){e.id=h;f&&Ri(e.id,d)}).catch(function(h){rj().D()?tf(h):dj(h)})}else tj(a,b)}
b=void 0===b?{}:b;N("skip_is_supported_killswitch")?oi().then(function(d){c(d)}):c(ni())}
function wj(){var a=ni();if(!a)throw Ah("throttleSend");mj||(mj=Xf.K(function(){var b;return z(function(c){if(1==c.h)return x(c,Oi("NEW",a),2);if(3!=c.h)return b=c.i,b?x(c,uj(b),3):(Xf.X(mj),mj=0,c.return());mj&&(mj=0,wj());c.h=0})},100))}
function uj(a){var b,c,d;return z(function(e){switch(e.h){case 1:b=ni();if(!b)throw c=Ah("immediateSend"),c;if(void 0===a.id){e.o(2);break}return x(e,Pi(a.id,b),3);case 3:(d=e.i)?a=d:uf(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=O()-f)){e.o(4);break}uf(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.o(5);break}return x(e,Ri(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=xj(a));f=a;var g,h;if(null===
(h=null===(g=null===f||void 0===f?void 0:f.options)||void 0===g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(O());a=f;if(!a){e.o(0);break}if(!a.skipRetry||void 0===a.id){e.o(8);break}return x(e,Ri(a.id,b),8);case 8:tj(a.url,a.options,!!a.skipRetry),e.h=0}})}
function xj(a){var b=ni();if(!b)throw Ah("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g;return z(function(h){switch(h.h){case 1:g=Ei(f);if(!(N("nwl_consider_error_code")&&g||!N("nwl_consider_error_code")&&yj()<=Pf("potential_esf_error_limit",10))){h.o(2);break}return x(h,rj().T(),3);case 3:if(rj().D()){h.o(2);break}c(e,f);if(!N("nwl_consider_error_code")||void 0===(null===a||void 0===a?void 0:a.id)){h.o(5);break}return x(h,Qi(a.id,b,!1),5);case 5:return h.return();case 2:if(N("nwl_consider_error_code")&&!g&&yj()>Pf("potential_esf_error_limit",10))return h.return();
C("ytNetworklessLoggingInitializationOptions")&&pj.potentialEsfErrorCounter++;nj++;if(void 0===(null===a||void 0===a?void 0:a.id)){h.o(7);break}return 1>a.sendCount?x(h,Qi(a.id,b),11):x(h,Ri(a.id,b),7);case 11:Xf.K(function(){rj().D()&&wj()},5E3);
case 7:c(e,f),h.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return z(function(g){if(1==g.h)return void 0===(null===a||void 0===a?void 0:a.id)?g.o(2):x(g,Ri(a.id,b),2);N("vss_network_hint")&&rj().W(!0);d(e,f);g.h=0})};
return a}
function rj(){oj||(oj=new kj({ra:!0,La:!0}));return oj}
function tj(a,b,c){c&&0===Object.keys(b).length?sg(a):gg(a,b)}
function sj(){return C("ytNetworklessLoggingInitializationOptions")?pj.isNwlInitialized:!1}
function yj(){return C("ytNetworklessLoggingInitializationOptions")?pj.potentialEsfErrorCounter:nj}
;function zj(){xi.call(this,{C:{hb:Si,aa:Ri,Oa:Oi,rb:Pi,Fa:Qi,set:Mi},F:new kj({ra:!0,La:!0}),handleError:tf,ba:uf,S:Aj,now:O,ab:dj,J:Wf(),Ea:"publicytnetworkstatus-online",Da:"publicytnetworkstatus-offline",pa:!0,na:.1,va:Pf("potential_esf_error_limit",10),B:N,da:!ph()});this.pa&&Math.random()<=this.na&&this.s&&Xi(this.s);N("networkless_immediately_drop_sw_health_store")&&Bj(this);N("networkless_immediately_drop_all_requests")&&Ti();wi("LogsDatabaseV2")}
w(zj,xi);function Cj(){var a=C("yt.networklessRequestController.instance");a||(a=new zj,E("yt.networklessRequestController.instance",a),N("networkless_logging")&&oi().then(function(b){a.s=b;yi(a)}));
return a}
zj.prototype.writeThenSend=function(a,b){b||(b={});ph()||(this.h=!1);xi.prototype.writeThenSend.call(this,a,b)};
zj.prototype.sendThenWrite=function(a,b,c){b||(b={});ph()||(this.h=!1);xi.prototype.sendThenWrite.call(this,a,b,c)};
zj.prototype.sendAndWrite=function(a,b){b||(b={});ph()||(this.h=!1);xi.prototype.sendAndWrite.call(this,a,b)};
function Bj(a){var b;z(function(c){if(!a.s)throw b=Ah("clearSWHealthLogsDb"),b;return c.return(aj(a.s).catch(function(d){a.handleError(d)}))})}
function Aj(a,b,c){var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(O());c&&0===Object.keys(b).length?sg(a):gg(a,b)}
;function Dj(a){var b=this;this.config_=null;a?this.config_=a:$g()&&(this.config_=Rg());Tf(function(){hh(b)},5E3)}
Dj.prototype.isReady=function(){!this.config_&&$g()&&(this.config_=Rg());return!!this.config_};
function Ug(a,b,c,d){function e(v){v=void 0===v?!1:v;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(v||N("skip_ls_gel_retry")||(A=fh(b,c,l,k)),A)){var y=g.onSuccess,I=g.onFetchSuccess;g.onSuccess=function(L,ca){gh(A);y(L,ca)};
c.onFetchSuccess=function(L,ca){gh(A);I(L,ca)}}try{v&&d.retry&&!d.Sa.bypassNetworkless?(g.method="POST",d.Sa.writeThenSend?N("use_new_nwl")?Cj().writeThenSend(p,g):qj(p,g):N("use_new_nwl")?Cj().sendAndWrite(p,g):vj(p,g)):(g.method="POST",g.postParams||(g.postParams={}),gg(p,g))}catch(L){if("InvalidAccessError"==L.name)A&&(gh(A),A=0),uf(Error("An extension is blocking network request."));
else throw L;}A&&Tf(function(){hh(a)},5E3)}
!M("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&uf(new oh("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new oh("innertube xhrclient not ready",b,c,d);tf(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(v,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,A){if(d.onError)d.onError(A)},
onFetchError:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.config_.ob)&&(h=f);var k=a.config_.qb||!1,l=ah(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,q={alt:"json"},u=a.config_.pb&&f;N("omit_innertube_api_key_for_bearer_auth_header")&&(u=u&&f.startsWith("Bearer"));u||(q.key=a.config_.innertubeApiKey);var p=Mf(""+h+n,q||{},!0);N("use_new_nwl")||sj()?mi().then(function(v){e(v)}):e(!1)}
;function Ej(a,b){var c=void 0===c?{}:c;var d=Dj;M("ytLoggingEventsDefaultDisabled",!1)&&Dj==Dj&&(d=null);a:{c=void 0===c?{}:c;if(N("lr_drop_other_and_business_payloads")){if(Rf[a]||Qf[a])break a}else if(N("lr_drop_other_payloads")&&Rf[a])break a;var e={},f=Math.round(c.timestamp||O());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=C("_lact",window);a=null==a?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};N("log_sequence_info_on_gel_web")&&c.Ya&&
(a=e.context,b=c.Ya,Vg[b]=b in Vg?Vg[b]+1:0,a.sequence={index:Vg[b],groupKey:b},c.Mb&&delete Vg[c.Ya]);(c.Sb?Og:Kg)({endpoint:"log_event",payload:e,P:c.P,oa:c.oa},d)}}
;var Fj=[{Ca:function(a){return"Cannot read property '"+a.key+"'"},
ta:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ca:function(a){return"Cannot call '"+a.key+"'"},
ta:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ca:function(a){return a.key+" is not defined"},
ta:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Hj={V:[],U:[{fb:Gj,weight:500}]};function Gj(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Ij(){this.U=[];this.V=[]}
var Jj;function Kj(){if(!Jj){var a=Jj=new Ij;a.V.length=0;a.U.length=0;Hj.V&&a.V.push.apply(a.V,Hj.V);Hj.U&&a.U.push.apply(a.U,Hj.U)}return Jj}
;var Lj=new K;function Mj(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Nj(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Nj(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Nj(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Nj(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Oj(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Pj(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Mj(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Pj(e+".ve",f,g,h):0;d+=g;d+=Pj(e,a[e],b,c);if(500<d)break}}else c[b]=Qj(a),d+=c[b].length;else c[b]=Qj(a),d+=c[b].length;return d}
function Pj(a,b,c,d){c+="."+a;a=Qj(b);d[c]=a;return c.length+a.length}
function Qj(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Rj=new Set,Sj=0,Tj=0,Uj=0,Vj=[],Wj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];var Xj={};function Yj(a){return Xj[a]||(Xj[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Zj={},ak=[],Qe=new K,bk={};function ck(){for(var a=t(ak),b=a.next();!b.done;b=a.next())b=b.value,b()}
function dk(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Yj(b)]:a.getAttribute("data-"+b):null;return c}
function ek(a,b){for(var c=1;c<arguments.length;++c);Qe.ca.apply(Qe,arguments)}
;function fk(a){this.h=a||{};a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function X(a,b){a=[a.h,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function gk(a,b,c){hk||(hk={},Cf(window,"message",function(d){a:{if(d.origin===X(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=hk[e.id])d.u=!0,d.u&&(G(d.v,d.sendMessage,d),d.v.length=0),d.Ha(e)}e=void 0}return e}));
hk[c]=b}
var hk=null;function Z(a,b,c){this.m=this.h=this.i=null;this.j=0;this.u=!1;this.v=[];this.l=null;this.H={};if(!a)throw Error("YouTube player element ID required.");this.id=Ka(this);this.A=c;this.setup(a,b)}
m=Z.prototype;m.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
m.getIframe=function(){return this.h};
m.Ha=function(a){ik(this,a.event,a)};
m.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);jk(this,a);return this};
function kk(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.A===b[0]&&jk(a,c)}}
m.destroy=function(){this.h&&this.h.id&&(Zj[this.h.id]=null);(0,id)(this.l);if(this.m){var a=this.h,b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);hk&&(hk[this.id]=null);this.i=null;a=this.h;for(var c in cb)cb[c][0]==a&&Af(c);this.m=this.h=null};
m.Ka=function(){return{}};
function lk(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.sendMessage(b):a.v.push(b)}
function ik(a,b,c){a.l.l||(c={target:a,data:c},a.l.ca(b,c),ek(a.A+"."+b,c))}
function mk(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+X(a.i,"title"));(b=X(a.i,"width"))&&c.setAttribute("width",b.toString());(b=X(a.i,"height"))&&c.setAttribute("height",
b.toString());var g=a.Ka();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&G(["debugjs","debugcss"],function(h){var k=Ob(window.location.href,h);null!==k&&(g[h]=k)});
window.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(window.yt_embedsTokenValue),delete window.yt_embedsTokenValue);c.src=X(a.i,"host")+("/embed/"+X(a.i,"videoId"))+"?"+Mb(g);return c}
m.Ta=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function nk(a){gk(a.i,a,a.id);a.j=Ef(a.Ta.bind(a));Cf(a.h,"load",function(){window.clearInterval(a.j);a.j=Ef(a.Ta.bind(a))})}
m.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Kb(a.src):"https://www.youtube.com"),this.i=new fk(b),c||(b=mk(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Ka(this.h)),Zj[this.h.id]=this,window.postMessage){this.l=new K;nk(this);b=X(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in bk)bk.hasOwnProperty(e)&&
kk(this,e)}};
function jk(a,b){a.H[b]||(a.H[b]=!0,lk(a,"addEventListener",[b]))}
m.sendMessage=function(a){a.id=this.id;a.channel="widget";a=ye(a);var b=[Kb(this.h.src||"").replace("http:","https:")];if(this.h.contentWindow)for(var c=0;c<b.length;c++)try{this.h.contentWindow.postMessage(a,b[c])}catch(y){if(y.name&&"SyntaxError"===y.name){if(!(y.message&&0<y.message.indexOf("target origin ''"))){var d=void 0,e=y;d=void 0===d?{}:d;d.name=M("INNERTUBE_CONTEXT_CLIENT_NAME",1);d.version=M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var f=d||{};d="WARNING";d=void 0===d?"ERROR":d;if(e){e.hasOwnProperty("level")&&
e.level&&(d=e.level);if(N("console_log_js_exceptions")){var g=e,h=[];h.push("Name: "+g.name);h.push("Message: "+g.message);g.hasOwnProperty("params")&&h.push("Error Params: "+JSON.stringify(g.params));g.hasOwnProperty("args")&&h.push("Error args: "+JSON.stringify(g.args));h.push("File name: "+g.fileName);h.push("Stacktrace: "+g.stack);window.console.log(h.join("\n"),g)}if(!(5<=Sj)){g=void 0;var k=f,l=ld(e);f=l.message||"Unknown Error";h=l.name||"UnknownError";var n=l.stack||e.i||"Not available";if(n.startsWith(h+
": "+f)){var q=n.split("\n");q.shift();n=q.join("\n")}q=l.lineNumber||"Not available";l=l.fileName||"Not available";var u=0;if(e.hasOwnProperty("args")&&e.args&&e.args.length)for(g=0;g<e.args.length&&!(u=Oj(e.args[g],"params."+g,k,u),500<=u);g++);else if(e.hasOwnProperty("params")&&e.params){var p=e.params;if("object"===typeof e.params)for(g in p){if(p[g]){var v="params."+g,A=Qj(p[g]);k[v]=A;u+=v.length+A.length;if(500<u)break}}else k.params=Qj(p)}if(Vj.length)for(g=0;g<Vj.length&&!(u=Oj(Vj[g],"params.context."+
g,k,u),500<=u);g++);navigator.vendor&&!k.hasOwnProperty("vendor")&&(k["device.vendor"]=navigator.vendor);g={message:f,name:h,lineNumber:q,fileName:l,stack:n,params:k,sampleWeight:1};f=Number(e.columnNumber);isNaN(f)||(g.lineNumber=g.lineNumber+":"+f);if("IGNORED"===e.level)e=0;else a:{e=Kj();f=t(e.V);for(h=f.next();!h.done;h=f.next())if(h=h.value,g.message&&g.message.match(h.Pb)){e=h.weight;break a}e=t(e.U);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.fb(g)){e=f.weight;break a}e=1}g.sampleWeight=
e;e=g;g=t(Fj);for(f=g.next();!f.done;f=g.next())if(f=f.value,f.ta[e.name])for(q=t(f.ta[e.name]),h=q.next();!h.done;h=q.next())if(l=h.value,h=e.message.match(l.regexp)){e.params["params.error.original"]=h[0];q=l.groups;l={};for(n=0;n<q.length;n++)l[q[n]]=h[n+1],e.params["params.error."+q[n]]=h[n+1];e.message=f.Ca(l);break}e.params||(e.params={});g=Kj();e.params["params.errorServiceSignature"]="msg="+g.V.length+"&cb="+g.U.length;e.params["params.serviceWorker"]="false";B.document&&B.document.querySelectorAll&&
(e.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));kb("sample").constructor!==ib&&(e.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(e);if(0!==e.sampleWeight&&!Rj.has(e.message)){"ERROR"===d?(Lj.ca("handleError",e),N("record_app_crashed_web")&&0===Uj&&1===e.sampleWeight&&(Uj++,Ej("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Tj++):"WARNING"===d&&Lj.ca("handleWarning",e);if(N("kevlar_gel_error_routing")){g=
d;h=e;b:{f=t(Wj);for(q=f.next();!q.done;q=f.next())if(pg(q.value.toLowerCase())){f=!0;break b}f=!1}if(f)f=void 0;else{q={stackTrace:h.stack};h.fileName&&(q.filename=h.fileName);f=h.lineNumber&&h.lineNumber.split?h.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(q.lineNumber=Number(f[0]),q.columnNumber=Number(f[1])):q.lineNumber=Number(f[0]));f={level:"ERROR_LEVEL_UNKNOWN",message:h.message,errorClassName:h.name,sampleWeight:h.sampleWeight};
"ERROR"===g?f.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(f.level="ERROR_LEVEL_WARNNING");q={isObfuscated:!0,browserStackInfo:q};l={pageUrl:window.location.href,kvPairs:[]};M("FEXP_EXPERIMENTS")&&(l.experimentIds=M("FEXP_EXPERIMENTS"));n=pf();k=(k=mf.EXPERIMENT_FLAGS)?k.web_disable_gel_stp_ecatcher_killswitch:void 0;if(!k&&n)for(u=t(Object.keys(n)),k=u.next();!k.done;k=u.next())k=k.value,l.kvPairs.push({key:k,value:String(n[k])});if(h=h.params)for(n=t(Object.keys(h)),k=n.next();!k.done;k=n.next())k=
k.value,l.kvPairs.push({key:"client."+k,value:String(h[k])});h=M("SERVER_NAME",void 0);n=M("SERVER_VERSION",void 0);h&&n&&(l.kvPairs.push({key:"server.name",value:h}),l.kvPairs.push({key:"server.version",value:n}));f={errorMetadata:l,stackTrace:q,logMessage:f}}f&&(Ej("clientError",f),("ERROR"===g||N("errors_flush_gel_always_killswitch"))&&Mg())}if(!N("suppress_error_204_logging")){f=e;g=f.params||{};d={urlParams:{a:"logerror",t:"jserror",type:f.name,msg:f.message.substr(0,250),line:f.lineNumber,level:d,
"client.name":g.name},postParams:{url:M("PAGE_NAME",window.location.href),file:f.fileName},method:"POST"};g.version&&(d["client.version"]=g.version);if(d.postParams){f.stack&&(d.postParams.stack=f.stack);f=t(Object.keys(g));for(h=f.next();!h.done;h=f.next())h=h.value,d.postParams["client."+h]=g[h];if(g=pf())for(f=t(Object.keys(g)),h=f.next();!h.done;h=f.next())h=h.value,d.postParams[h]=g[h];g=M("SERVER_NAME",void 0);f=M("SERVER_VERSION",void 0);g&&f&&(d.postParams["server.name"]=g,d.postParams["server.version"]=
f)}gg(M("ECATCHER_REPORT_HOST","")+"/error_204",d)}try{Rj.add(e.message)}catch(I){}Sj++}}}}}else throw y;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function ok(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function pk(a){return 0===a.search("get")||0===a.search("is")}
;function qk(a,b){Z.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.L={};this.playerInfo={}}
w(qk,Z);m=qk.prototype;m.Ka=function(){var a=X(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=X(this.i,"embedConfig")){if(D(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
m.Ha=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(D(a))for(var c in a)a.hasOwnProperty(c)&&(this.L[c]=a[c]);break;case "infoDelivery":rk(this,a);break;case "initialDelivery":D(a)&&(window.clearInterval(this.j),this.playerInfo={},this.L={},sk(this,a.apiInterface),rk(this,a));break;default:ik(this,b,a)}};
function rk(a,b){if(D(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function sk(a,b){G(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:ok(c)?this[c]=function(){this.playerInfo={};
this.L={};lk(this,c,arguments);return this}:pk(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){lk(this,c,arguments);
return this})},a)}
m.getVideoEmbedCode=function(){var a=X(this.i,"host")+("/embed/"+X(this.i,"videoId")),b=Number(X(this.i,"width")),c=Number(X(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);a=mb(a,void 0);return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
m.getOptions=function(a){return this.L.namespaces?a?this.L[a]?this.L[a].options||[]:[]:this.L.namespaces||[]:[]};
m.getOption=function(a,b){if(this.L.namespaces&&a&&b&&this.L[a])return this.L[a][b]};
function tk(a){if("iframe"!==a.tagName.toLowerCase()){var b=dk(a,"videoid");b&&(b={videoId:b,width:dk(a,"width"),height:dk(a,"height")},new qk(a,b))}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return Zj[a]});
E("YT.scan",ck);E("YT.subscribe",function(a,b,c){Qe.subscribe(a,b,c);bk[a]=!0;for(var d in Zj)Zj.hasOwnProperty(d)&&kk(Zj[d],a)});
E("YT.unsubscribe",function(a,b,c){Pe(a,b,c)});
E("YT.Player",qk);Z.prototype.destroy=Z.prototype.destroy;Z.prototype.setSize=Z.prototype.setSize;Z.prototype.getIframe=Z.prototype.getIframe;Z.prototype.addEventListener=Z.prototype.addEventListener;qk.prototype.getVideoEmbedCode=qk.prototype.getVideoEmbedCode;qk.prototype.getOptions=qk.prototype.getOptions;qk.prototype.getOption=qk.prototype.getOption;
ak.push(function(a){var b=a;b||(b=document);a=Ya(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=Ua(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=Ya(b);G(Xa(a,b),tk)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||ck();var uk=B.onYTReady;uk&&uk();var vk=B.onYouTubeIframeAPIReady;vk&&vk();var wk=B.onYouTubePlayerAPIReady;wk&&wk();}).call(this);
