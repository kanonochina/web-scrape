(function(){var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ca;
if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;da=fa.a;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ca;
function ia(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.K=b.prototype}
var ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ka="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ma(){ma=function(){};
ka.Symbol||(ka.Symbol=na)}
var na=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function oa(){ma();var a=ka.Symbol.iterator;a||(a=ka.Symbol.iterator=ka.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return pa(this)}});
oa=function(){}}
function pa(a){var b=0;return qa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function qa(a){oa();a={next:a};a[ka.Symbol.iterator]=function(){return this};
return a}
function ra(a){oa();var b=a[Symbol.iterator];return b?b.call(a):pa(a)}
function sa(a,b){if(b){for(var c=ka,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}}
sa("String.prototype.endsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var b=this+"";a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
function ta(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ua=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
sa("Reflect.construct",function(){return ua});
sa("WeakMap",function(a){function b(a){this.j=(f+=Math.random()+1).toString();if(a){ma();oa();a=ra(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){ta(a,e)||ja(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(n){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!ta(a,e))throw Error("WeakMap key fail: "+a);a[e][this.j]=b;return this};
b.prototype.get=function(a){return ta(a,e)?a[e][this.j]:void 0};
b.prototype.has=function(a){return ta(a,e)&&ta(a[e],this.j)};
b.prototype["delete"]=function(a){return ta(a,e)&&ta(a[e],this.j)?delete a[e][this.j]:!1};
return b});
sa("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.j;return qa(function(){if(c){for(;c.head!=a.j;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++h,f.set(b,c)):c="p_"+b;var d=a.l[c];if(d&&ta(a.l,c))for(var e=0;e<d.length;e++){var k=d[e];if(b!==b&&k.key!==k.key||b===k.key)return{id:c,list:d,index:e,ja:k}}return{id:c,list:d,index:-1,ja:void 0}}
function e(a){this.l={};this.j=b();this.size=0;if(a){a=ra(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(ra([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(F){return!1}}())return a;
ma();oa();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.l[c.id]=[]);c.ja?c.ja.value=b:(c.ja={next:this.j,previous:this.j.previous,head:this.j,key:a,value:b},c.list.push(c.ja),this.j.previous.next=c.ja,this.j.previous=c.ja,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.ja&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.l[a.id],a.ja.previous.next=a.ja.next,a.ja.next.previous=a.ja.previous,a.ja.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.l={};this.j=this.j.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).ja};
e.prototype.get=function(a){return(a=d(this,a).ja)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var h=0;return e});
sa("Set",function(a){function b(a){this.j=new Map;if(a){a=ra(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.j.size}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(ra([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(h){return!1}}())return a;
ma();oa();b.prototype.add=function(a){this.j.set(a,a);this.size=this.j.size;return this};
b.prototype["delete"]=function(a){a=this.j["delete"](a);this.size=this.j.size;return a};
b.prototype.clear=function(){this.j.clear();this.size=0};
b.prototype.has=function(a){return this.j.has(a)};
b.prototype.entries=function(){return this.j.entries()};
b.prototype.values=function(){return this.j.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.j.forEach(function(d){return a.call(b,d,d,c)})};
return b});
sa("Array.from",function(a){return a?a:function(a,c,d){oa();c=null!=c?c:function(a){return a};
var b=[],f=a[Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var h=0;h<f;h++)b.push(c.call(d,a[h]))}return b}});
sa("Promise",function(a){function b(a){this.j=0;this.w=void 0;this.l=[];var b=this.A();try{a(b.resolve,b.reject)}catch(l){b.reject(l)}}
function c(){this.j=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.l=function(a){null==this.j&&(this.j=[],this.A());this.j.push(a)};
c.prototype.A=function(){var a=this;this.w(function(){a.C()})};
var e=ka.setTimeout;c.prototype.w=function(a){e(a,0)};
c.prototype.C=function(){for(;this.j&&this.j.length;){var a=this.j;this.j=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(n){this.B(n)}}}this.j=null};
c.prototype.B=function(a){this.w(function(){throw a;})};
b.prototype.A=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.F),reject:a(this.B)}};
b.prototype.F=function(a){if(a===this)this.B(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.M(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.H(a):this.C(a)}};
b.prototype.H=function(a){var b=void 0;try{b=a.then}catch(l){this.B(l);return}"function"==typeof b?this.O(b,a):this.C(a)};
b.prototype.B=function(a){this.G(2,a)};
b.prototype.C=function(a){this.G(1,a)};
b.prototype.G=function(a,b){if(0!=this.j)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.j);this.j=a;this.w=b;this.J()};
b.prototype.J=function(){if(null!=this.l){for(var a=this.l,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.l=null}};
var f=new c;b.prototype.M=function(a){var b=this.A();a.Ob(b.resolve,b.reject)};
b.prototype.O=function(a,b){var c=this.A();try{a.call(b,c.resolve,c.reject)}catch(n){c.reject(n)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(Ra){f(Ra)}}:b}
var e,f,h=new b(function(a,b){e=a;f=b});
this.Ob(d(a,e),d(c,f));return h};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Ob=function(a,b){function c(){switch(d.j){case 1:a(d.w);break;case 2:b(d.w);break;default:throw Error("Unexpected state: "+d.j);}}
var d=this;null==this.l?f.l(c):this.l.push(function(){f.l(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=ra(a),f=e.next();!f.done;f=e.next())d(f.value).Ob(b,c)})};
b.all=function(a){var c=ra(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){h[b]=c;k--;0==k&&a(h)}}
var h=[],k=0;do h.push(void 0),k++,d(e.value).Ob(f(h.length-1),b),e=c.next();while(!e.done)})};
return b});
var va=va||{},m=this;function p(a){return void 0!==a}
function q(a){return"string"==typeof a}
function xa(a){return"number"==typeof a}
function r(a,b,c){a=a.split(".");c=c||m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function t(a,b){for(var c=a.split("."),d=b||m,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ya(){}
function za(a){a.ka=void 0;a.getInstance=function(){return a.ka?a.ka:a.ka=new a}}
function Aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Ba(a){return"array"==Aa(a)}
function Ca(a){var b=Aa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Da(a){return"function"==Aa(a)}
function Ea(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Fa(a){return a[Ga]||(a[Ga]=++Ha)}
var Ga="closure_uid_"+(1E9*Math.random()>>>0),Ha=0;function Ia(a,b,c){return a.call.apply(a.bind,arguments)}
function Ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function u(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u=Ia:u=Ka;return u.apply(null,arguments)}
function La(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function Ma(a,b){for(var c in b)a[c]=b[c]}
var v=Date.now||function(){return+new Date};
function x(a,b){function c(){}
c.prototype=b.prototype;a.K=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Rj=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function Na(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);return a?parseInt(a[1],10):0}
function Oa(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))}
var Pa=Oa("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",Qa=Oa("loadCastFramework")||Oa("loadCastApplicationFramework");function Sa(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null}
var Ta=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"],Ua=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],Xa=50<=Na()?Ua.concat(Ta):Ta.concat(Ua);function Ya(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}}
function Za(a){if(a>=Xa.length)$a();else{var b=Xa[a],c="chrome-extension://"+b+Pa;0<=Ta.indexOf(b)?Ya(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,ab(c,$a)):Za(a+1)}):ab(c,function(){Za(a+1)})}}
function ab(a,b,c){var d=document.createElement("script");d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)}
function bb(a){return 0<=window.navigator.userAgent.indexOf(a)}
function $a(){var a=Sa();a&&a(!1,"No cast extension found")}
function cb(){if(Qa){var a=2,b=Sa(),c=function(){a--;0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;ab("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",$a,c)}}
function db(){if(bb("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;if(a){cb();a({command:"cast.sender.init"});return}}if(!window.chrome||bb("Edge"))$a();else if(cb(),bb("Android")&&bb("Chrome/")&&window.navigator.presentation){a="";var b=Na();55<=b?a="55":50<=b&&(a="50");ab("//www.gstatic.com/eureka/clank"+a+Pa,$a)}else Za(0)}
;var eb=document,fb=window;function gb(){var a=hb(fb),b=ib();this.A=a;this.j=b;this.oa=this.w=fb;this.B=-1;this.C=!1;this.G="";this.l=0}
;function jb(a){if(Error.captureStackTrace)Error.captureStackTrace(this,jb);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
x(jb,Error);jb.prototype.name="CustomError";var kb;function lb(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}
function mb(a){return/^[\s\xa0]*$/.test(a)}
var nb=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ob(a){return encodeURIComponent(String(a))}
function pb(a){return decodeURIComponent(a.replace(/\+/g," "))}
function qb(a){if(!sb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(tb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ub,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(vb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(wb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(xb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(yb,"&#0;"));return a}
var tb=/&/g,ub=/</g,vb=/>/g,wb=/"/g,xb=/'/g,yb=/\x00/g,sb=/[\x00&<>"']/;function zb(a){return-1!=a.indexOf("&")?"document"in m?Ab(a):Bb(a):a}
function Ab(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var c=m.document.createElement("div");return a.replace(Cb,function(a,e){var d=b[a];if(d)return d;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(d=String.fromCharCode(h))}d||(c.innerHTML=a+" ",d=c.firstChild.nodeValue.slice(0,-1));return b[a]=d})}
function Bb(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var b=Number("0"+c.substr(1));if(!isNaN(b))return String.fromCharCode(b)}return a}})}
var Cb=/&([^;\s<&]+);?/g,Db={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Eb={"'":"\\'"},Fb=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function Gb(a){a=p(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return Fb("0",Math.max(0,2-b))+a}
function Hb(a){return null==a?"":String(a)}
function Ib(a,b){for(var c=0,d=nb(String(a)).split("."),e=nb(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var k=d[h]||"",l=e[h]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==k[0].length&&0==l[0].length)break;c=Jb(0==k[1].length?0:parseInt(k[1],10),0==l[1].length?0:parseInt(l[1],10))||Jb(0==k[2].length,0==l[2].length)||Jb(k[2],l[2]);k=k[3];l=l[3]}while(0==c)}return c}
function Jb(a,b){return a<b?-1:a>b?1:0}
function Kb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Lb(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function Mb(a){var b=q(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var Nb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ob=Array.prototype.lastIndexOf?function(a,b,c){return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;
0>c&&(c=Math.max(0,a.length+c));if(q(a))return q(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1},y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Pb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=q(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},Qb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},Rb=Array.prototype.reduce?function(a,b,c,d){d&&(b=u(b,d));
return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
y(a,function(c,h){e=b.call(d,e,c,h,a)});
return e},Sb=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},Tb=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Ub(a,b,c){b=Vb(a,b,c);return 0>b?null:q(a)?a.charAt(b):a[b]}
function Vb(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function Wb(a,b){a:{var c=q(a)?a.split(""):a;for(var d=a.length-1;0<=d;d--)if(d in c&&b.call(void 0,c[d],d,a)){c=d;break a}c=-1}return 0>c?null:q(a)?a.charAt(c):a[c]}
function Xb(a,b){return 0<=Nb(a,b)}
function Yb(a,b){Xb(a,b)||a.push(b)}
function Zb(a,b){var c=Nb(a,b),d;(d=0<=c)&&$b(a,c);return d}
function $b(a,b){Array.prototype.splice.call(a,b,1)}
function ac(a,b){var c=Vb(a,b,void 0);0<=c&&$b(a,c)}
function bc(a){return Array.prototype.concat.apply([],arguments)}
function cc(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function dc(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ca(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function ec(a,b,c,d){return Array.prototype.splice.apply(a,fc(arguments,1))}
function fc(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function gc(a,b){if(!Ca(a)||!Ca(b)||a.length!=b.length)return!1;for(var c=a.length,d=hc,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0}
function ic(a,b){return a>b?1:a<b?-1:0}
function hc(a,b){return a===b}
function jc(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Ba(d))for(var e=0;e<d.length;e+=8192)for(var f=jc.apply(null,fc(d,e,e+8192)),h=0;h<f.length;h++)b.push(f[h]);else b.push(d)}return b}
function kc(a){for(var b=Math.random,c=a.length-1;0<c;c--){var d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}}
;function lc(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function mc(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function nc(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}
function oc(a){var b=0,c;for(c in a)b++;return b}
function pc(a,b){return qc(a,b)}
function rc(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function sc(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function tc(a,b){return null!==a&&b in a}
function qc(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function uc(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c}
function wc(a){for(var b in a)return!1;return!0}
function xc(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function yc(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function zc(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Ac(a){var b=Aa(a);if("object"==b||"array"==b){if(Da(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Ac(a[c]);return b}return a}
var Bc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cc(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Bc.length;f++)c=Bc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function Dc(a){var b=arguments.length;if(1==b&&Ba(arguments[0]))return Dc.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var Ec={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};function Fc(){this.j="";this.l=Gc}
Fc.prototype.Ka=!0;Fc.prototype.za=function(){return this.j};
Fc.prototype.toString=function(){return"Const{"+this.j+"}"};
function Hc(a){return a instanceof Fc&&a.constructor===Fc&&a.l===Gc?a.j:"type_error:Const"}
var Gc={};function Ic(a){var b=new Fc;b.j=a;return b}
Ic("");var Jc=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),Kc=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");function Lc(){this.j="";this.l=Mc}
Lc.prototype.Ka=!0;Lc.prototype.za=function(){return this.j};
Lc.prototype.Lc=!0;Lc.prototype.Ab=function(){return 1};
function Nc(a){if(a instanceof Lc&&a.constructor===Lc&&a.l===Mc)return a.j;Aa(a);return"type_error:TrustedResourceUrl"}
var Mc={};function Oc(a){var b=new Lc;b.j=a;return b}
;function Pc(){this.j="";this.l=Qc}
Pc.prototype.Ka=!0;Pc.prototype.za=function(){return this.j};
Pc.prototype.Lc=!0;Pc.prototype.Ab=function(){return 1};
function Rc(a){if(a instanceof Pc&&a.constructor===Pc&&a.l===Qc)return a.j;Aa(a);return"type_error:SafeUrl"}
var Sc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Tc(a){if(a instanceof Pc)return a;a=a.Ka?a.za():String(a);Sc.test(a)||(a="about:invalid#zClosurez");return Uc(a)}
function Vc(a){if(a instanceof Pc)return a;a=a.Ka?a.za():String(a);Sc.test(a)||(a="about:invalid#zClosurez");return Uc(a)}
var Qc={};function Uc(a){var b=new Pc;b.j=a;return b}
Uc("about:blank");function Wc(){this.j="";this.l=Xc}
Wc.prototype.Ka=!0;var Xc={};Wc.prototype.za=function(){return this.j};
function Yc(a){var b=new Wc;b.j=a;return b}
var Zc=Yc("");function $c(a){if(a instanceof Pc)a='url("'+Rc(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';else if(a instanceof Fc)a=Hc(a);else{a=String(a);var b=a.replace(dd,"$1").replace(ed,"url");if(b=fd.test(b)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c}a=b?gd(a):"zClosurez"}return a}
var fd=/^[-,."'%_!# a-zA-Z0-9]+$/,ed=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),dd=RegExp("\\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-0-9a-z.%, ]+\\)","g");function gd(a){return a.replace(ed,function(a,c,d,e){var b="";d=d.replace(/^(['"])(.*)\1$/,function(a,c,d){b=c;return d});
a=Tc(d).za();return c+b+a+b+e})}
;var hd;a:{var id=m.navigator;if(id){var jd=id.userAgent;if(jd){hd=jd;break a}}hd=""}function A(a){return-1!=hd.indexOf(a)}
function kd(a){for(var b=RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g"),c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c}
;function ld(){return A("Trident")||A("MSIE")}
function md(){return A("Safari")&&!(nd()||A("Coast")||A("Opera")||A("Edge")||A("Silk")||A("Android"))}
function nd(){return(A("Chrome")||A("CriOS"))&&!A("Edge")}
function od(){return A("Android")&&!(nd()||A("Firefox")||A("Opera")||A("Silk"))}
function pd(){function a(a){a=Ub(a,d);return c[a]||""}
var b=hd;if(ld())return qd(b);b=kd(b);var c={};y(b,function(a){c[a[0]]=a[1]});
var d=La(tc,c);return A("Opera")?a(["Version","Opera"]):A("Edge")?a(["Edge"]):nd()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""}
function qd(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b}
;function rd(){this.j="";this.w=sd;this.l=null}
rd.prototype.Lc=!0;rd.prototype.Ab=function(){return this.l};
rd.prototype.Ka=!0;rd.prototype.za=function(){return this.j};
function td(a){if(a instanceof rd&&a.constructor===rd&&a.w===sd)return a.j;Aa(a);return"type_error:SafeHtml"}
var ud=/^[a-zA-Z0-9-]+$/,vd={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},wd={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};
function xd(a,b,c){var d=String(a);if(!ud.test(d))throw Error("Invalid tag name <"+d+">.");if(d.toUpperCase()in wd)throw Error("Tag name <"+d+"> is not allowed for SafeHtml.");a=String(a);d=null;var e="<"+a,f="";if(b)for(F in b){if(!ud.test(F))throw Error('Invalid attribute name "'+F+'".');var h=b[F];if(null!=h){var k=a;var l=F;var n=h;if(n instanceof Fc)n=Hc(n);else if("style"==l.toLowerCase()){h=void 0;k=n;if(!Ea(k))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+
typeof k+" given: "+k);if(!(k instanceof Wc)){n="";for(h in k){if(!/^[-_a-zA-Z0-9]+$/.test(h))throw Error("Name allows only [-_a-zA-Z0-9], got: "+h);var w=k[h];null!=w&&(w=Ba(w)?Qb(w,$c).join(" "):$c(w),n+=h+":"+w+";")}k=n?Yc(n):Zc}k instanceof Wc&&k.constructor===Wc&&k.l===Xc?h=k.j:(Aa(k),h="type_error:SafeStyle");n=h}else{if(/^on/i.test(l))throw Error('Attribute "'+l+'" requires goog.string.Const value, "'+n+'" given.');if(l.toLowerCase()in vd)if(n instanceof Lc)n=Nc(n);else if(n instanceof Pc)n=
Rc(n);else if(q(n))n=Tc(n).za();else throw Error('Attribute "'+l+'" on tag "'+k+'" requires goog.html.SafeUrl, goog.string.Const, or string, value "'+n+'" given.');}n.Ka&&(n=n.za());l=l+'="'+qb(String(n))+'"';f+=" "+l}}var F=e+f;null!=c?Ba(c)||(c=[c]):c=[];!0===Ec[a.toLowerCase()]?F+=">":(c=yd(c),F+=">"+td(c)+"</"+a+">",d=c.Ab());(b=b&&b.dir)&&(/^(ltr|rtl|auto)$/i.test(b)?d=0:d=null);return zd(F,d)}
function yd(a){function b(a){if(Ba(a))y(a,b);else{if(a instanceof rd)var e=a;else e=null,a.Lc&&(e=a.Ab()),a=qb(a.Ka?a.za():String(a)),e=zd(a,e);d+=td(e);e=e.Ab();0==c?c=e:0!=e&&c!=e&&(c=null)}}
var c=0,d="";y(arguments,b);return zd(d,c)}
var sd={};function zd(a,b){var c=new rd;c.j=a;c.l=b;return c}
zd("<!DOCTYPE html>",0);var Ad=zd("",0),Bd=zd("<br>",0);function Cd(a,b){a.innerHTML=td(b)}
function Dd(a,b){var c=b instanceof Pc?b:Vc(b);a.href=Rc(c)}
function Ed(a,b){a.src=Nc(b)}
function Fd(a,b){var c=b instanceof Pc?b:Vc(b);a.href=Rc(c)}
;function Gd(a){Hd();return zd(a,null)}
function Jd(a){Hd();return Oc(a)}
var Hd=ya;function Kd(a){Kd[" "](a);return a}
Kd[" "]=ya;function Ld(a,b){try{return Kd(a[b]),!0}catch(c){}return!1}
function Md(a,b){var c=Nd;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function Od(a){try{return!!a&&null!=a.location.href&&Ld(a,"foo")}catch(b){return!1}}
function Pd(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}
function Qd(){var a=[];Pd(Rd,function(b){a.push(b)});
return a}
function Sd(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c}
;function Td(){return A("iPhone")&&!A("iPod")&&!A("iPad")}
function Ud(){return Td()||A("iPad")||A("iPod")}
;var Vd=A("Opera"),B=ld(),Wd=A("Edge"),Xd=Wd||B,Yd=A("Gecko")&&!(-1!=hd.toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),Zd=-1!=hd.toLowerCase().indexOf("webkit")&&!A("Edge"),$d=A("Macintosh"),ae=A("Windows"),be=A("Android"),ce=Td(),de=A("iPad"),ee=A("iPod"),fe=Ud();function ge(){var a=m.document;return a?a.documentMode:void 0}
var he;a:{var ie="",je=function(){var a=hd;if(Yd)return/rv:([^\);]+)(\)|;)/.exec(a);if(Wd)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Zd)return/WebKit\/(\S+)/.exec(a);if(Vd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
je&&(ie=je?je[1]:"");if(B){var ke=ge();if(null!=ke&&ke>parseFloat(ie)){he=String(ke);break a}}he=ie}var le=he,Nd={};function me(a){return Md(a,function(){return 0<=Ib(le,a)})}
function ne(a){return Number(oe)>=a}
var pe;var qe=m.document;pe=qe&&B?ge()||("CSS1Compat"==qe.compatMode?parseInt(le,10):5):void 0;var oe=pe;var re=!B||ne(9),se=!Yd&&!B||B&&ne(9)||Yd&&me("1.9.1"),te=B&&!me("9"),ue=B||Vd||Zd;function ve(a,b){return zd(b,null)}
;function we(a,b,c){return a+c*(b-a)}
;function De(a,b){this.x=p(a)?a:0;this.y=p(b)?b:0}
g=De.prototype;g.clone=function(){return new De(this.x,this.y)};
g.equals=function(a){return a instanceof De&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Ee(a,b){return new De(a.x-b.x,a.y-b.y)}
g.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.translate=function(a,b){a instanceof De?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),xa(b)&&(this.y+=b));return this};function Fe(a,b){this.width=a;this.height=b}
g=Fe.prototype;g.clone=function(){return new Fe(this.width,this.height)};
g.qf=function(){return this.width*this.height};
g.aspectRatio=function(){return this.width/this.height};
g.isEmpty=function(){return!this.qf()};
g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ge(a){return a?new He(Ie(a)):kb||(kb=new He)}
function C(a){return q(a)?document.getElementById(a):a}
function Je(a){var b=document;return q(a)?b.getElementById(a):a}
function Ke(a,b,c){return Le(document,a,b,c)}
function Me(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Le(document,"*",a,b)}
function D(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:d=Ne("*",a,b);return d||null}
function Le(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,h;h=a[f];f++)b==h.nodeName&&(d[e++]=h);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;h=a[f];f++)b=h.className,"function"==typeof b.split&&Xb(b.split(/\s+/),c)&&(d[e++]=h);d.length=e;return d}return a}
function Ne(a,b,c){var d=document,e=c||d,f=a&&"*"!=a?String(a).toUpperCase():"";return e.querySelectorAll&&e.querySelector&&(f||b)?e.querySelector(f+(b?"."+b:"")):Le(d,a,b,c)[0]||null}
function Oe(a,b){lc(b,function(b,d){b&&b.Ka&&(b=b.za());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Pe.hasOwnProperty(d)?a.setAttribute(Pe[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Pe={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Qe(a){a=a.document;a=Re(a)?a.documentElement:a.body;return new Fe(a.clientWidth,a.clientHeight)}
function Se(a){var b=Te(a);a=Ue(a);return B&&me("10")&&a.pageYOffset!=b.scrollTop?new De(b.scrollLeft,b.scrollTop):new De(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Te(a){return a.scrollingElement?a.scrollingElement:!Zd&&Re(a)?a.documentElement:a.body||a.documentElement}
function Ue(a){return a.parentWindow||a.defaultView}
function Ve(a,b,c){var d=arguments,e=document,f=String(d[0]),h=d[1];if(!re&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',qb(h.name),'"');if(h.type){f.push(' type="',qb(h.type),'"');var k={};Cc(k,h);delete k.type;h=k}f.push(">");f=f.join("")}f=e.createElement(f);h&&(q(h)?f.className=h:Ba(h)?f.className=h.join(" "):Oe(f,h));2<d.length&&We(e,f,d,2);return f}
function We(a,b,c,d){function e(c){c&&b.appendChild(q(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!Ca(f)||Ea(f)&&0<f.nodeType?e(f):y(Xe(f)?cc(f):f,e)}}
function Ye(a,b){return a.createElement(String(b))}
function Ze(a){var b=document,c=Ye(b,"DIV");B?(Cd(c,yd(Bd,a)),c.removeChild(c.firstChild)):Cd(c,a);if(1==c.childNodes.length)c=c.removeChild(c.firstChild);else{for(a=b.createDocumentFragment();c.firstChild;)a.appendChild(c.firstChild);c=a}return c}
function Re(a){return"CSS1Compat"==a.compatMode}
function $e(a,b){We(Ie(a),a,arguments,1)}
function af(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function bf(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function cf(a){return se&&void 0!=a.children?a.children:Pb(a.childNodes,function(a){return 1==a.nodeType})}
function df(a){return p(a.firstElementChild)?a.firstElementChild:ef(a.firstChild,!0)}
function ef(a,b){for(;a&&1!=a.nodeType;)a=b?a.nextSibling:a.previousSibling;return a}
function ff(a){return Ea(a)&&1==a.nodeType}
function gf(a){var b;if(ue&&!(B&&me("9")&&!me("10")&&m.SVGElement&&a instanceof m.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return ff(b)?b:null}
function hf(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Ie(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function jf(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else af(a),a.appendChild(Ie(a).createTextNode(String(b)))}
function kf(a,b){var c=[];return lf(a,b,c,!0)?c[0]:void 0}
function lf(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||lf(a,b,c,d))return!0;a=a.nextSibling}return!1}
var mf={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},nf={IMG:" ",BR:"\n"};function of(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!pf(a)||qf(a)):pf(a)&&qf(a))&&B){var c;!Da(a.getBoundingClientRect)||B&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function pf(a){return B&&!me("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function qf(a){a=a.tabIndex;return xa(a)&&0<=a&&32768>a}
function rf(a){if(te&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];sf(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");te||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function sf(a,b,c){if(!(a.nodeName in mf))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in nf)b.push(nf[a.nodeName]);else for(a=a.firstChild;a;)sf(a,b,c),a=a.nextSibling}
function Xe(a){if(a&&"number"==typeof a.length){if(Ea(a))return"function"==typeof a.item||"string"==typeof a.item;if(Da(a))return"function"==typeof a.item}return!1}
function tf(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return uf(a,function(a){return(!e||a.nodeName==e)&&(!c||q(a.className)&&Xb(a.className.split(/\s+/),c))},!0,d)}
function E(a,b){return tf(a,null,b,void 0)}
function uf(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function He(a){this.j=a||m.document||document}
g=He.prototype;g.Dc=function(a){return q(a)?this.j.getElementById(a):a};
g.getElementsByTagName=function(a,b){return(b||this.j).getElementsByTagName(String(a))};
g.createElement=function(a){return Ye(this.j,a)};
g.appendChild=function(a,b){a.appendChild(b)};
g.isElement=ff;g.contains=hf;function vf(){return Zd?"Webkit":Yd?"Moz":B?"ms":Vd?"O":null}
function wf(){return Zd?"-webkit":Yd?"-moz":B?"-ms":Vd?"-o":null}
;function xf(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
g=xf.prototype;g.getHeight=function(){return this.bottom-this.top};
g.clone=function(){return new xf(this.top,this.right,this.bottom,this.left)};
g.contains=function(a){return Bf(this,a)};
function Bf(a,b){return a&&b?b instanceof xf?b.left>=a.left&&b.right<=a.right&&b.top>=a.top&&b.bottom<=a.bottom:b.x>=a.left&&b.x<=a.right&&b.y>=a.top&&b.y<=a.bottom:!1}
function Cf(a,b){return a.left<=b.right&&b.left<=a.right&&a.top<=b.bottom&&b.top<=a.bottom}
g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
g.translate=function(a,b){a instanceof De?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,xa(b)&&(this.top+=b,this.bottom+=b));return this};function Df(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
g=Df.prototype;g.clone=function(){return new Df(this.left,this.top,this.width,this.height)};
g.contains=function(a){return a instanceof De?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.translate=function(a,b){a instanceof De?(this.left+=a.x,this.top+=a.y):(this.left+=a,xa(b)&&(this.top+=b));return this};function Ef(a,b,c){if(q(b))(b=Ff(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Ff(c,d);f&&(c.style[f]=e)}}
var Gf={};function Ff(a,b){var c=Gf[b];if(!c){var d=Lb(b);c=d;void 0===a.style[d]&&(d=vf()+Mb(d),void 0!==a.style[d]&&(c=d));Gf[b]=c}return c}
function Hf(a,b){var c=Ie(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function If(a,b){return Hf(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Jf(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}B&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Kf(a){if(B&&!ne(8))return a.offsetParent;var b=Ie(a),c=If(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=If(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Lf(a){for(var b=new xf(0,Infinity,Infinity,0),c=Ge(a),d=c.j.body,e=c.j.documentElement,f=Te(c.j);a=Kf(a);)if(!(B&&0==a.clientWidth||Zd&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=If(a,"overflow")){var h=Mf(a),k=new De(a.clientLeft,a.clientTop);h.x+=k.x;h.y+=k.y;b.top=Math.max(b.top,h.y);b.right=Math.min(b.right,h.x+a.clientWidth);b.bottom=Math.min(b.bottom,h.y+a.clientHeight);b.left=Math.max(b.left,h.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);
c=Qe(Ue(c.j)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Mf(a){var b=Ie(a),c=new De(0,0);var d=b?Ie(b):document;d=!B||ne(9)||Re(Ge(d).j)?d.documentElement:d.body;if(a==d)return c;a=Jf(a);b=Se(Ge(b).j);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Nf(a){return Mf(a).x}
function Of(a){a=Jf(a);return new De(a.left,a.top)}
function Pf(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Qf(a){var b=Rf;if("none"!=If(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Rf(a){var b=a.offsetWidth,c=a.offsetHeight,d=Zd&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new Fe(b,c):(a=Jf(a),new Fe(a.right-a.left,a.bottom-a.top))}
function Sf(a){var b=Mf(a);a=Qf(a);return new Df(b.x,b.y,a.width,a.height)}
function Tf(a){return"rtl"==If(a,"direction")}
function Uf(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Vf(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Uf(a,c):0}
var Wf={thin:2,medium:4,thick:6};function Xf(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Wf?Wf[c]:Uf(a,c)}
;function Yf(){return function(){return""}}
function Zf(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function $f(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)}
function ag(a,b,c){a.removeEventListener?a.removeEventListener(b,c,void 0):a.detachEvent&&a.detachEvent("on"+b,c)}
;var bg={"AMP-CAROUSEL":"ac","AMP-FX-FLYING-CARPET":"fc","AMP-LIGHTBOX":"lb","AMP-STICKY-AD":"sa"};function cg(a){a=a||m;var b=a.context;if(!b)try{b=a.parent.context}catch(c){}try{if(b&&"pageViewId"in b&&"canonicalUrl"in b)return b}catch(c){}return null}
;function dg(a,b){m.google_image_requests||(m.google_image_requests=[]);var c=m.document.createElement("img");if(b){var d=function(a){b(a);ag(c,"load",d);ag(c,"error",d)};
$f(c,"load",d);$f(c,"error",d)}c.src=a;m.google_image_requests.push(c)}
;var eg=Object.prototype.hasOwnProperty;function fg(a,b){return typeof a===b}
function gg(a,b){for(var c in a)eg.call(a,c)&&b.call(void 0,a[c],c,a)}
function hg(a){return!(!a||!a.call)&&fg(a,"function")}
function ig(a,b){for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])}
function jg(a,b){if(a.filter)return a.filter(b,void 0);for(var c=[],d=0;d<a.length;d++)b.call(void 0,a[d],d,a)&&c.push(a[d]);return c}
function kg(a,b){var c=b.slice(-1),d="?"===c||"#"===c?"":"&",e=[b];gg(a,function(a,b){if(a||0===a||!1===a)fg(a,"boolean")&&(a=a?1:0),ig(e,d,b,"=",encodeURIComponent(String(a))),d="&"});
return e.join("")}
function lg(){var a=void 0===a?fb:a;try{return a.history.length}catch(b){return 0}}
function mg(a){a=a.google_unique_id;return fg(a,"number")?a:0}
function ng(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=lg();a.u_java=!!fb.navigator&&!fg(fb.navigator.javaEnabled,"unknown")&&!!fb.navigator.javaEnabled&&fb.navigator.javaEnabled();fb.screen&&(a.u_h=fb.screen.height,a.u_w=fb.screen.width,a.u_ah=fb.screen.availHeight,a.u_aw=fb.screen.availWidth,a.u_cd=fb.screen.colorDepth);fb.navigator&&fb.navigator.plugins&&(a.u_nplug=fb.navigator.plugins.length);fb.navigator&&fb.navigator.mimeTypes&&(a.u_nmime=fb.navigator.mimeTypes.length)}
function og(a){return!!a.google_async_iframe_id}
var pg=og(window),qg=pg&&window.parent||window;function ib(){if(pg&&!Od(qg)){var a="."+eb.domain;try{for(;2<a.split(".").length&&!Od(qg);)eb.domain=a=a.substr(a.indexOf(".")+1),qg=window.parent}catch(b){}Od(qg)||(qg=window)}return qg}
var rg=/(^| )adsbygoogle($| )/;
function sg(){var a,b=window.ActiveXObject;if(navigator.plugins&&navigator.mimeTypes.length){if((a=navigator.plugins["Shockwave Flash"])&&a.description)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else{if(navigator.userAgent&&0<=navigator.userAgent.indexOf("Windows CE")){var c=3;for(a=1;a;)try{a=new b("ShockwaveFlash.ShockwaveFlash."+(c+1)),c++}catch(d){a=null}return c.toString()}if(ld()){a=null;try{a=new b("ShockwaveFlash.ShockwaveFlash.7")}catch(d){c=0;try{a=new b("ShockwaveFlash.ShockwaveFlash.6"),
c=6,a.AllowScriptAccess="always"}catch(e){if(6===c)return c.toString()}try{a=new b("ShockwaveFlash.ShockwaveFlash")}catch(e){}}if(a)return c=a.GetVariable("$version").split(" ")[1],c.replace(/,/g,".")}}return"0"}
function tg(a){var b=a.google_ad_format;return b?0<b.indexOf("_0ads"):"html"!==a.google_ad_output&&0<a.google_num_radlinks}
function hb(a){a=a.top;return Od(a)?a:null}
;var G={},ug=(G.google_ad_channel="channel",G.google_ad_type="ad_type",G.google_ad_format="format",G.google_color_bg="color_bg",G.google_color_border="color_border",G.google_color_link="color_link",G.google_color_text="color_text",G.google_color_url="color_url",G.google_page_url="url",G.google_allow_expandable_ads="ea",G.google_ad_section="region",G.google_cpm="cpm",G.google_encoding="oe",G.google_safe="adsafe",G.google_flash_version="flash",G.google_font_face="f",G.google_font_size="fs",G.google_hints=
"hints",G.google_ad_host="host",G.google_ad_host_channel="h_ch",G.google_ad_host_tier_id="ht_id",G.google_kw_type="kw_type",G.google_kw="kw",G.google_contents="contents",G.google_targeting="targeting",G.google_adtest="adtest",G.google_alternate_color="alt_color",G.google_alternate_ad_url="alternate_ad_url",G.google_cust_age="cust_age",G.google_cust_ch="cust_ch",G.google_cust_gender="cust_gender",G.google_cust_interests="cust_interests",G.google_cust_job="cust_job",G.google_cust_l="cust_l",G.google_cust_lh=
"cust_lh",G.google_cust_u_url="cust_u_url",G.google_cust_id="cust_id",G.google_language="hl",G.google_city="gcs",G.google_country="gl",G.google_region="gr",G.google_available_width="avail_w",G.google_content_recommendation_columns_num="cr_col",G.google_content_recommendation_rows_num="cr_row",G.google_content_recommendation_ui_type="crui",G.google_color_line="color_line",G.google_disable_video_autoplay="disable_video_autoplay",G.google_full_width_responsive_allowed="fwr",G.google_pgb_reactive="pra",
G.google_resizing_allowed="rs",G.google_resizing_height="rh",G.google_resizing_width="rw",G.google_responsive_formats="resp_fmts",G.google_safe_for_responsive_override="sfro",G.google_video_doc_id="video_doc_id",G.google_video_product_type="video_product_type",G.google_webgl_support="wgl",G),H={},vg=(H.google_ad_block="ad_block",H.google_ad_client="client",H.google_ad_output="output",H.google_ad_callback="callback",H.google_ad_height="h",H.google_ad_resize="twa",H.google_ad_slot="slotname",H.google_ad_unit_key=
"adk",H.google_ad_dom_fingerprint="adf",H.google_ad_width="w",H.google_analytics_url_parameters="aup",H.google_captcha_token="captok",H.google_content_recommendation_ui_type="crui",H.google_content_recommendation_columns_num="cr_col",H.google_content_recommendation_rows_num="cr_row",H.google_ctr_threshold="ctr_t",H.google_cust_criteria="cust_params",H.google_full_width_responsive="fwr_optout",H.google_fwr_non_expansion_reason="fwrn",H.google_image_size="image_size",H.google_last_modified_time="lmt",
H.google_loeid="loeid",H.google_max_num_ads="num_ads",H.google_max_radlink_len="max_radlink_len",H.google_mtl="mtl",H.google_native_settings_key="nsk",H.google_enable_content_recommendations="ecr",H.google_infinite_scroll_slot_type="ifsl",H.google_num_radlinks="num_radlinks",H.google_num_radlinks_per_unit="num_radlinks_per_unit",H.google_pucrd="pucrd",H.google_reactive_plaf="plaf",H.google_reactive_plat="plat",H.google_reactive_fba="fba",H.google_reactive_sra_channels="plach",H.google_responsive_auto_format=
"rafmt",H.google_rl_dest_url="rl_dest_url",H.google_rl_filtering="rl_filtering",H.google_rl_mode="rl_mode",H.google_rt="rt",H.google_source_type="src_type",H.google_sui="sui",H.google_tag_for_child_directed_treatment="tfcd",H.google_tag_origin="to",H.google_tfs="tfs",H),wg={},xg=(wg.google_core_dbp="dbp",wg.google_lact="lact",wg.google_only_pyv_ads="pyv",wg.google_scs="scs",wg.google_video_url_to_fetch="durl",wg.google_yt_pt="yt_pt",wg.google_yt_up="yt_up",wg);function yg(a){var b=a.oa;null==b.google_ad_output&&(b.google_ad_output="html");b.google_ad_client=String(b.google_ad_client);null!=b.google_ad_slot&&(b.google_ad_slot=String(b.google_ad_slot));var c;(c=b.google_ad_client)?(c=c.toLowerCase())&&"ca-"!=c.substring(0,3)&&(c="ca-"+c):c="";b.google_ad_client=c;if(null==b.google_flash_version){try{var d=sg()}catch(e){d="0"}b.google_flash_version=d}b.google_webgl_support=!!fb.WebGLRenderingContext;b.google_ad_section=b.google_ad_section||b.google_ad_region||
"";b.google_country=b.google_country||b.google_gl||"";d=(new Date).getTime();Ba(b.google_color_bg)&&(b.google_color_bg=zg(a,b.google_color_bg,d));Ba(b.google_color_text)&&(b.google_color_text=zg(a,b.google_color_text,d));Ba(b.google_color_link)&&(b.google_color_link=zg(a,b.google_color_link,d));Ba(b.google_color_url)&&(b.google_color_url=zg(a,b.google_color_url,d));Ba(b.google_color_border)&&(b.google_color_border=zg(a,b.google_color_border,d));Ba(b.google_color_line)&&(b.google_color_line=zg(a,b.google_color_line,
d))}
function Ag(){var a=window;gg(ug,function(b,c){a[c]=null});
gg(vg,function(b,c){a[c]=null});
gg(xg,function(b,c){a[c]=null});
a.google_container_id=null;a.google_enable_async=null;a.google_eids=null;a.google_page_location=null;a.google_referrer_url=null;a.google_ad_region=null;a.google_gl=null;a.google_loader_used=null;a.google_loader_features_used=null}
function zg(a,b,c){a.l|=2;return b[c%b.length]}
;var Bg={wi:1,xi:2,Di:8,oj:9,mj:16,Ni:25,ci:26,ai:27,Zi:30,Hi:32},Cg={Wh:{name:"adFormat",Ga:xa},Vh:{name:"adClient",Ga:/^[a-z0-9-]+$/i},Xh:{name:"adTest",Ga:/^on$/i},lj:{name:"reqSrc",Ga:xa},cj:{name:"pubVars",Ga:null},AD_KEY:{name:"adKey",Ga:xa}},Dg=[{name:"google_ad_channel",Ga:{pe:/^[a-z0-9_-]+$/i,Xd:!0}},{name:"google_reactive_sra_index",Ga:{pe:xa,Xd:!0}},{name:"google_ad_unit_key",Ga:{pe:xa,Xd:!0}}];var Eg=A("Firefox"),Fg=Td()||A("iPod"),Gg=A("iPad"),Hg=od(),Ig=nd(),Jg=md()&&!Ud();function Kg(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c}
;var Lg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Mg(a){return a?decodeURI(a):a}
function Ng(a){return Mg(a.match(Lg)[3]||null)}
function Og(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var h=c[d].substring(0,e);f=c[d].substring(e+1)}else h=c[d];b(h,f?pb(f):"")}}
function Pg(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function Qg(a,b,c){if(Ba(b))for(var d=0;d<b.length;d++)Qg(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+ob(b)))}
function Rg(a,b){for(var c=[],d=b||0;d<a.length;d+=2)Qg(a[d],a[d+1],c);return c.join("&")}
function Sg(a){var b=[],c;for(c in a)Qg(c,a[c],b);return b.join("&")}
function Tg(a,b){var c=2==arguments.length?Rg(arguments[1],0):Rg(arguments,1);return Pg(a,c)}
function Ug(a,b){var c=Sg(b);return Pg(a,c)}
function Vg(a,b,c){for(;0<=(b=a.indexOf("lact",b))&&b<c;){var d=a.charCodeAt(b-1);if(38==d||63==d)if(d=a.charCodeAt(b+4),!d||61==d||38==d||35==d)return b;b+=5}return-1}
var Wg=/#|$/,Xg=/[?&]($|#)/;function Yg(a){for(var b=Zg(),c=a.search(Wg),d=0,e,f=[];0<=(e=Vg(a,d,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.substr(d));a=f.join("").replace(Xg,"$1");b=null!=b?"="+ob(b):"";return Pg(a,"lact"+b)}
;function $g(a){if(a=/[-\w]+\.[-\w]+$/.exec(a))switch(Kb(a[0].toLowerCase())){case 1967261364:return 0;case 3147493546:return 1;case 1567346461:return 2;case 2183041838:return 3;case 763236279:return 4;case 1342279801:return 5;case 526831769:return 6;case 352806002:return 7;case 2755048925:return 8;case 3306848407:return 9;case 2207000920:return 10;case 484037040:return 11;case 3506871055:return 12;case 672143848:return 13;case 2528751226:return 14;case 2744854768:return 15;case 3703278665:return 16;
case 2014749173:return 17;case 133063824:return 18;case 2749334602:return 19;case 3131239845:return 20;case 2074086763:return 21;case 795772493:return 22;case 290857819:return 23;case 3035947606:return 24;case 2983138003:return 25;case 2197138676:return 26;case 4216016165:return 27;case 239803524:return 28;case 975993579:return 29;case 1794940339:return 30;case 1314429186:return 31;case 1643618937:return 32;case 497159982:return 33}return-1}
function ah(a){if(!a.length)return 0;for(var b=[],c=0;33>=c;c++)b[c]=0;for(c=a.length-1;0<=c;c--){var d=$g(a[c]);0<=d&&(b[33-d]=1)}return parseInt(b.join(""),2)}
;var bh=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function ch(a,b){this.j=a;this.l=b}
function dh(a,b,c){this.url=a;this.rb=b;this.Ld=!!c;this.depth=xa(void 0)?void 0:null}
function eh(a){a=(this.l=a||m)||m;this.w=a.top==a?1:Od(a.top)?2:3;3!=this.w&&Date.parse(m.top.document.lastModified);this.j=fh(this.l)}
function gh(a){for(var b=[],c=Math.min(a.j.length,27),d=1;d<c;d++)a.j[d]&&a.j[d].url&&(b[d-1]=a.j[d].url);return hh(a,b.reverse())}
function yh(a){var b=a.l.document&&a.l.document.scripts?a.l.document.scripts:[];if(!b)return 0;for(var c=[],d=b.length-1;0<=d&&26>c.length;)b[d].src&&c.unshift(b[d].src),d--;return hh(a,c)}
function hh(a,b){for(var c,d=0,e=(c=a.j[Math.max(a.j.length-1,0)].url||null)&&Ng(c),f=Math.min(b.length,26),h=0;h<f;h++)if(c=null!=b[h]&&Ng(b[h])||"",d*=4,c)if(e&&c==e)d+=3;else{a:{var k=b[h];for(var l=[/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|(\/.*))/i,/^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|(\/.*))/i,/^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|(\/.*))/i,/^https?:\/\/(tpc|pagead2).googlesyndication\.com(:\d+)?($|(\/.*))/i,/^https?:\/\/www.googletagservices\.com(:\d+)?($|(\/.*))/i],
n=0;n<l.length;++n)if(l[n].test(k)){k=!0;break a}k=!1}k?d+=2:c&&0<=$g(c)&&(d+=1)}return d}
function zh(a){a=a.j;for(var b=[],c=a.length-1;0<c;c--){var d=a[c];d&&null!=d.url&&b.push(Ng(d.url))}return ah(b)}
function Ah(a){a=a.l.document&&a.l.document.scripts?a.l.document.scripts:[];if(!a)return 0;for(var b=[],c=a.length-1;0<=c;c--){var d=a[c];d&&null!=d.src&&b.push(Ng(d.src))}return ah(b)}
function fh(a){var b=a||m,c=[],d=null;do{var e=b;if(Od(e)){var f=e.location.href;d=e.document&&e.document.referrer||null}else f=d,d=null;c.push(new dh(f||"",e));try{b=e.parent}catch(h){b=null}}while(b&&e!=b);b=0;for(e=c.length-1;b<=e;++b)c[b].depth=e-b;e=a||m;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==c.length-1)for(b=1;b<c.length;++b)a=c[b],a.url||(a.url=e.location.ancestorOrigins[b-1]||"",a.Ld=!0);return c}
;function Bh(a,b,c,d,e){this.C=c||4E3;this.w=a||"&";this.G=b||",$";this.A=p(d)?d:"trn";this.H=e||null;this.B=!1;this.l={};this.J=0;this.j=[]}
function Ch(a,b){var c={};c[a]=b;return[c]}
function Dh(a,b,c,d,e){var f=[];Pd(a,function(a,k){var h=Eh(a,b,c,d,e);h&&f.push(k+"="+h)});
return f.join(b)}
function Eh(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],h=0;h<a.length;h++)f.push(Eh(a[h],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Dh(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}
function Fh(a,b,c,d){a.j.push(b);a.l[b]=Ch(c,d)}
function Gh(a,b,c,d){b=b+"//"+c+d;var e=Hh(a)-d.length-0;if(0>e)return"";a.j.sort(function(a,b){return a-b});
d=null;c="";for(var f=0;f<a.j.length;f++)for(var h=a.j[f],k=a.l[h],l=0;l<k.length;l++){if(!e){d=null==d?h:d;break}var n=Dh(k[l],a.w,a.G);if(n){n=c+n;if(e>=n.length){e-=n.length;b+=n;c=a.w;break}else a.B&&(c=e,n[c-1]==a.w&&--c,b+=n.substr(0,c),c=a.w,e=0);d=null==d?h:d}}f="";a.A&&null!=d&&(f=c+a.A+"="+(a.H||d));return b+f+""}
function Hh(a){if(!a.A)return a.C;var b=1,c;for(c in a.l)b=c.length>b?c.length:b;return a.C-a.A.length-b-a.w.length-1}
;function Ih(a,b,c,d,e,f){if((d?a.B:Math.random())<(e||a.j))try{if(c instanceof Bh)var h=c;else h=new Bh,Pd(c,function(a,b){var c=h,d=c.J++,e=Ch(b,a);c.j.push(d);c.l[d]=e});
var k=Gh(h,a.A,a.l,a.w+b+"&");k&&("undefined"===typeof f?dg(k,void 0):dg(k,f))}catch(l){}}
;var Jh=null;function Kh(a){this.j={};this.l={};a=a||[];for(var b=0,c=a.length;b<c;++b)this.l[a[b]]=""}
function Lh(){var a=Mh(),b=new Kh;Pd(a.j,function(a,d){b.j[d]=a});
Pd(a.l,function(a,d){b.l[d]=a});
return b}
function Nh(a,b){return a.l.hasOwnProperty(b)?a.l[b]:""}
function Oh(a){var b=[];Pd(a.j,function(a,d){b.push(d)});
Pd(a.l,function(a){""!=a&&b.push(a)});
return b}
;function Ph(){var a=m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):v()}
function Qh(){var a=m.performance;return a&&a.now?a.now():null}
;function Rh(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;var Sh=m.performance,Th=!!(Sh&&Sh.mark&&Sh.measure&&Sh.clearMarks),Uh=Zf(function(){var a;if(a=Th){if(null===Jh){Jh="";try{var b=m.top.location.hash;if(b){var c=b.match(/\bdeid=([\d,]+)/);Jh=c?c[1]:""}}catch(d){}}a=Jh;a=!!a.indexOf&&0<=a.indexOf("1337")}return a});
function Vh(a,b){this.events=[];this.l=b||m;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue,c=b.google_measure_js_timing);this.j=Uh()||(null!=c?c:Math.random()<a)}
function Wh(a){a&&Uh()&&(Sh.clearMarks("goog_"+a.uniqueId+"_start"),Sh.clearMarks("goog_"+a.uniqueId+"_end"))}
Vh.prototype.start=function(a,b){if(!this.j)return null;var c=Qh()||Ph();c=new Rh(a,b,c);var d="goog_"+c.uniqueId+"_start";Uh()&&Sh.mark(d);return c};
Vh.prototype.end=function(a){if(this.j&&xa(a.value)){var b=Qh()||Ph();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";Uh()&&Sh.mark(b);this.j&&this.events.push(a)}};function Xh(a,b,c,d){this.A=a;this.C=b;this.l=c;this.B=this.w;this.j=void 0===d?null:d}
function Yh(a,b,c){try{if(a.j&&a.j.j){var d=a.j.start(b.toString(),3);var e=c();a.j.end(d)}else e=c()}catch(h){c=a.l;try{Wh(d);var f=Zh(h);c=a.B.call(a,b,f,void 0,void 0)}catch(k){a.w(217,k)}if(!c)throw h;}return e}
function $h(a,b){var c=ai;return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];return Yh(c,a,function(){return b.apply(void 0,e)})}}
Xh.prototype.w=function(a,b,c,d,e){e=e||this.C;try{var f=new Bh;f.B=!0;Fh(f,1,"context",a);b.error&&b.meta&&b.id||(b=Zh(b));b.msg&&Fh(f,2,"msg",b.msg.substring(0,512));b.file&&Fh(f,3,"file",b.file);0<b.line&&Fh(f,4,"line",b.line);var h=b.meta||{};if(d)try{d(h)}catch(ba){}b=[h];f.j.push(5);f.l[5]=b;var k=fh(),l=new dh(m.location.href,m,!1);b=null;var n=k.length-1;for(d=n;0<=d;--d){var w=k[d];!b&&bh.test(w.url)&&(b=w);if(w.url&&!w.Ld){l=w;break}}w=null;var F=k.length&&k[n].url;0!=l.depth&&F&&(w=k[n]);
var W=new ch(l,w);W.l&&Fh(f,6,"top",W.l.url||"");Fh(f,7,"url",W.j.url||"");Ih(this.A,e,f,!1,c)}catch(ba){try{Ih(this.A,e,{context:"ecmserr",rctx:a,msg:bi(ba),url:W.j.url},!1,c)}catch(la){}}return this.l};
function Zh(a){return new ci(bi(a),a.fileName,a.lineNumber)}
function bi(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b}
function ci(a,b,c){Kg.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})}
ia(ci,Kg);var di,ai,ei=ib(),fi=new Vh(1,ei);function gi(){ei.google_measure_js_timing||(fi.j=!1,fi.events!=fi.l.google_js_reporting_queue&&(Uh()&&y(fi.events,Wh),fi.events.length=0))}
di=new function(){var a=void 0===a?fb:a;this.A="http:"===a.location.protocol?"http:":"https:";this.l="pagead2.googlesyndication.com";this.w="/pagead/gen_204?id=";this.j=.01;this.B=Math.random()};
ai=new Xh(di,"jserror",!0,fi);"complete"==ei.document.readyState?gi():fi.j&&$f(ei,"load",function(){gi()});
function hi(a,b){return $h(a,b)}
;var ii=null;function ji(a,b){for(var c=0,d=a,e=0;a&&a!=a.parent;)if(a=a.parent,e++,Od(a))d=a,c=e;else if(b)break;return{rb:d,level:c}}
function ki(){ii||(ii=ji(m,!0).rb);return ii}
;function li(a,b){gg(b,function(b,d){a[d]=b})}
function mi(a){var b=a.location.href;if(a==a.top)return{url:b,Nc:!0};var c=!1,d=a.document;d&&d.referrer&&(b=d.referrer,a.parent==a.top&&(c=!0));(a=a.location.ancestorOrigins)&&(a=a[a.length-1])&&-1==b.indexOf(a)&&(c=!1,b=a);return{url:b,Nc:c}}
;var ni={google:1,googlegroups:1,gmail:1,googlemail:1,googleimages:1,googleprint:1},oi=/(corp|borg)\.google\.com:\d+$/;
function pi(a){var b=a.google_page_location||a.google_page_url;"EMPTY"==b&&(b=a.google_page_url);if(!b)return!1;a=b.toString();0==a.indexOf("http://")?a=a.substring(7,a.length):0==a.indexOf("https://")&&(a=a.substring(8,a.length));b=a.indexOf("/");-1==b&&(b=a.length);a=a.substring(0,b);if(oi.test(a))return!1;a=a.split(".");b=!1;3<=a.length&&(b=a[a.length-3]in ni);2<=a.length&&(b=b||a[a.length-2]in ni);return b}
;function qi(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function ri(a){a=String(a);if(qi(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function si(a){return(new ti(void 0)).Sc(a)}
function ti(a){this.j=a}
ti.prototype.Sc=function(a){var b=[];ui(this,a,b);return b.join("")};
function ui(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Ba(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],ui(a,a.j?a.j.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),vi(d,c),c.push(":"),ui(a,a.j?a.j.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":vi(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var wi={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},xi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function vi(a,b){b.push('"',a.replace(xi,function(a){var b=wi[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),wi[a]=b);return b}),'"')}
;function yi(a){Da(a)}
;function zi(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body)||{}}
function Ai(a){var b=zi(a).clientWidth;a=a.innerWidth;return b&&a?b/a:0}
function Bi(a){a=a.google_reactive_ad_format;return qc(Bg,a)?""+a:null}
function Ci(a){return a.top!=a?512:0}
function Di(a,b){var c=zi(a).clientWidth;return c?!b&&420<c?32768:320>c?65536:0:16384}
function Ei(a){return(a=Ai(a))?1.05<a?262144:.95>a?524288:0:131072}
;(function(a){function b(a){a.Ga&&(c[a.name]=a.Ga)}
var c={msg_type:/^[a-zA-Z0-9_-]+$/};gg(Cg,b);for(var d=0;d<Dg.length;d++)b(Dg[d]);for(d=0;d<a.length;d++)b(a[d]);return new yi(c)})([]);var Fi={},Gi=(Fi.google_server_side_slot_resize=1,Fi.google_server_side_expand_anchor=4,Fi);function Hi(a){var b=0;gg(Gi,function(c,d){Ii(a,d)&&(b=c)});
return b}
function Ji(a){return a?(a=a.hash)&&a.indexOf?a:"":""}
function Ii(a,b){if(!a)return!1;var c=a.hash;if(!c||!c.indexOf)return!1;if(-1!=c.indexOf(b))return!0;var d=Ki(b);return"go"!=d&&-1!=c.indexOf(d)?!0:!1}
function Ki(a){var b="";gg(a.split("_"),function(a){b+=a.substr(0,2)});
return b}
;function Li(){this.w={};this.j={};this.l={}}
function Mi(a){a.google_reactive_ads_global_state||(a.google_reactive_ads_global_state=new Li);return a.google_reactive_ads_global_state}
;function Ni(a){Kh.call(this,a);this.dfltBktExt=this.j;this.lrsExt=this.l}
x(Ni,Kh);function Oi(){this.S={}}
function Pi(){if(Qi)return Qi;var a=Ri(),b=a.google_persistent_state_async;return null!=b&&"object"==typeof b&&null!=b.S&&"object"==typeof b.S?Qi=b:a.google_persistent_state_async=Qi=new Oi}
function Si(a,b,c){b=Ti[b]||"google_ps_"+b;a=a.S;var d=a[b];return void 0===d?a[b]=c:d}
function Ui(a,b,c){return a.S[Ti[b]||"google_ps_"+b]=c}
function Ri(){var a;(a=cg())?(a=a.master,a=Od(a)?a:null):a=null;return a||ib()}
var Qi=null,Vi={},Ti=(Vi[8]="google_prev_ad_formats_by_region",Vi[9]="google_prev_ad_slotnames_by_region",Vi);var Rd={Fi:5,vi:7,Mi:17,oi:19,gi:41,ri:48,ij:55,Yh:59,fj:62,Vi:67,aj:69,yi:70,Ti:75,hj:77,Fj:79,Mj:80,jj:82,kj:83,wj:86,Wi:87,nj:88,ii:89,Xi:90,Hj:97,Ci:98,Ui:99,Oi:101,zi:102,pi:103,Uh:104,Gi:106,Ij:107,Bi:108,gj:109},Wi=null;function Xi(a){try{return!!a&&Kd(!0)}catch(b){return!1}}
function Yi(){if(Xi(Wi))return!0;var a=Pi();if(a=Si(a,3,null)){if(a&&a.dfltBktExt&&a.lrsExt){var b=new Ni;b.j=a.dfltBktExt;b.dfltBktExt=b.j;b.l=a.lrsExt;b.lrsExt=b.l;a=b}else a=null;a||(a=new Ni,b={context:"ps::gpes::cf",url:ib().location.href},Ih(di,"jserror",b,!1,void 0,void 0))}return Xi(a)?(Wi=a,!0):!1}
function Mh(){if(Yi())return Wi;var a=Pi(),b=new Ni(Qd());return Wi=Ui(a,3,b)}
var Zi=null;function $i(){Zi||(Zi=Lh());return Zi}
var aj={ji:"618018085",gf:"618018086"},bj={};function cj(a){a=void 0===a?$i():a;return jg(Oh(a),function(a){return!!bj[a]})}
function dj(a){a=void 0===a?$i():a;return jg(Oh(a),function(a){return!bj[a]})}
;function ej(a,b){var c=Bi(b);if(c){if("32"==c)return 1;if("30"==c)return 0}a:{for(c=ib();c&&Od(c);){if(c.name&&-1!=c.name.indexOf("google_ifsl_cifr")){c=!0;break a}if(c.parent==c)break;c=c.parent}c=!1}if(c)return 3;if(!Od(a))return 0;c=Mi(a);return c.l[32]?2:c.l[30]?4:0}
;function fj(a,b){var c;c||(c="https");m.location&&"https:"==m.location.protocol&&"http"==c&&(c="https");return[c,"://",a,b].join("")}
;function gj(a,b,c){this.B=c;this.w=a;this.A=b;this.l=0;this.j=null}
gj.prototype.get=function(){if(0<this.l){this.l--;var a=this.j;this.j=a.next;a.next=null}else a=this.w();return a};
function hj(a,b){a.A(b);a.l<a.B&&(a.l++,b.next=a.j,a.j=b)}
;function ij(a){m.setTimeout(function(){throw a;},0)}
var jj;
function kj(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!A("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=u(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!ld()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.nd;c.nd=null;a()}};
return function(a){d.next={nd:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function lj(){this.l=this.j=null}
var nj=new gj(function(){return new mj},function(a){a.reset()},100);
lj.prototype.add=function(a,b){var c=nj.get();c.set(a,b);this.l?this.l.next=c:this.j=c;this.l=c};
lj.prototype.remove=function(){var a=null;this.j&&(a=this.j,this.j=this.j.next,this.j||(this.l=null),a.next=null);return a};
function mj(){this.next=this.scope=this.ya=null}
mj.prototype.set=function(a,b){this.ya=a;this.scope=b;this.next=null};
mj.prototype.reset=function(){this.next=this.scope=this.ya=null};function oj(a,b){pj||qj();rj||(pj(),rj=!0);sj.add(a,b)}
var pj;function qj(){if(-1!=String(m.Promise).indexOf("[native code]")){var a=m.Promise.resolve(void 0);pj=function(){a.then(tj)}}else pj=function(){var a=tj;
!Da(m.setImmediate)||m.Window&&m.Window.prototype&&!A("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(jj||(jj=kj()),jj(a)):m.setImmediate(a)}}
var rj=!1,sj=new lj;function tj(){for(var a;a=sj.remove();){try{a.ya.call(a.scope)}catch(b){ij(b)}hj(nj,a)}rj=!1}
;function uj(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function vj(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function wj(a,b){this.j=0;this.G=void 0;this.A=this.l=this.w=null;this.B=this.C=!1;if(a!=ya)try{var c=this;a.call(b,function(a){xj(c,2,a)},function(a){xj(c,3,a)})}catch(d){xj(this,3,d)}}
function yj(){this.next=this.context=this.l=this.w=this.j=null;this.A=!1}
yj.prototype.reset=function(){this.context=this.l=this.w=this.j=null;this.A=!1};
var zj=new gj(function(){return new yj},function(a){a.reset()},100);
function Aj(a,b,c){var d=zj.get();d.w=a;d.l=b;d.context=c;return d}
function Bj(a){if(a instanceof wj)return a;var b=new wj(ya);xj(b,2,a);return b}
function Uj(a,b,c){Vj(a,b,c,null)||oj(La(b,a))}
function Wj(a){return new wj(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},h=function(a){c(a)},k=0,l;k<a.length;k++)l=a[k],Uj(l,La(f,k),h);
else b(e)})}
wj.prototype.then=function(a,b,c){return Xj(this,Da(a)?a:null,Da(b)?b:null,c)};
uj(wj);wj.prototype.cancel=function(a){0==this.j&&oj(function(){var b=new Yj(a);Zj(this,b)},this)};
function Zj(a,b){if(0==a.j)if(a.w){var c=a.w;if(c.l){for(var d=0,e=null,f=null,h=c.l;h&&(h.A||(d++,h.j==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.j&&1==d?Zj(c,b):(f?(d=f,d.next==c.A&&(c.A=d),d.next=d.next.next):ak(c),bk(c,e,3,b)))}a.w=null}else xj(a,3,b)}
function ck(a,b){a.l||2!=a.j&&3!=a.j||dk(a);a.A?a.A.next=b:a.l=b;a.A=b}
function Xj(a,b,c,d){var e=Aj(null,null,null);e.j=new wj(function(a,h){e.w=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){h(n)}}:a;
e.l=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Yj?h(b):a(e)}catch(n){h(n)}}:h});
e.j.w=a;ck(a,e);return e.j}
wj.prototype.H=function(a){this.j=0;xj(this,2,a)};
wj.prototype.F=function(a){this.j=0;xj(this,3,a)};
function xj(a,b,c){0==a.j&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.j=1,Vj(c,a.H,a.F,a)||(a.G=c,a.j=b,a.w=null,dk(a),3!=b||c instanceof Yj||ek(a,c)))}
function Vj(a,b,c,d){if(a instanceof wj)return ck(a,Aj(b||ya,c||null,d)),!0;if(vj(a))return a.then(b,c,d),!0;if(Ea(a))try{var e=a.then;if(Da(e))return fk(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function fk(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function h(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,h,f)}catch(l){f(l)}}
function dk(a){a.C||(a.C=!0,oj(a.J,a))}
function ak(a){var b=null;a.l&&(b=a.l,a.l=b.next,b.next=null);a.l||(a.A=null);return b}
wj.prototype.J=function(){for(var a;a=ak(this);)bk(this,a,this.j,this.G);this.C=!1};
function bk(a,b,c,d){if(3==c&&b.l&&!b.A)for(;a&&a.B;a=a.w)a.B=!1;if(b.j)b.j.w=null,gk(b,c,d);else try{b.A?b.w.call(b.context):gk(b,c,d)}catch(e){hk.call(null,e)}hj(zj,b)}
function gk(a,b,c){2==b?a.w.call(a.context,c):a.l&&a.l.call(a.context,c)}
function ek(a,b){a.B=!0;oj(function(){a.B&&hk.call(null,b)})}
var hk=ij;function Yj(a){jb.call(this,a)}
x(Yj,jb);Yj.prototype.name="cancel";function ik(a,b,c){switch(c){case 1:case 2:b=0;try{b|=Ci(a);var d="20040066"===Nh($i(),80),e=Math.min(a.screen.width||0,a.screen.height||0);b|=e?!d&&420<e?4096:320>e?8192:0:2048;var f=a.navigator.userAgent;var h=/Firefox/.test(f)||/Android 2/.test(f)||/iPhone OS [34]_/.test(f)||/Windows Phone (?:OS )?[67]/.test(f)?1048576:0;b|=h}catch(n){b|=32}d=0;try{d|=a.innerHeight>=a.innerWidth?0:8,d|=Di(a,"20040066"===Nh($i(),80)),d|=Ei(a)}catch(n){d|=32}if(e=2==c)a:{e=a.document;f=a.innerWidth;h=[];for(var k=
0;3>k;k++)for(var l=0;3>l;l++)h.push({x:l/2*f-0,y:k/2*65-0});for(f=0;f<h.length;f++)if((k=e.elementFromPoint(h[f].x,h[f].y))&&"fixed"==If(k,"position")){e=!0;break a}e=!1}if(e)d|=16777216;else{if(c=2==c)c=Math.max(0,(zi(a).offsetHeight||0)-zi(a).clientHeight)<=a.innerHeight+65;c&&(d|=1024)}return!(b|d);case 8:c=0;try{c|=Ci(a),c|=/Android 2/.test(a.navigator.userAgent)?1048576:0,c|=pi(b)?16:0}catch(n){c|=32}b=0;try{"828064251"===Nh($i(),75)&&"zoom"in Ye(document,"SPAN").style||(b|=Ei(a),b|=Di(a)),
b|=a.innerHeight>=a.innerWidth?0:8}catch(n){b|=32}if(c=0==(c|b))Mi(a),c=!0;return c;case 9:c=0;try{c|=Ci(a),c|=Ei(a),c|=Di(a),c|=a.innerHeight>=a.innerWidth?0:8,c|=pi(b)?16:0,c|=/Android 2/.test(a.navigator.userAgent)?1048576:0}catch(n){c|=32}if(c=!c)Mi(a),c=!0;return c;case 25:c=0;try{c|=Ci(a),c|=a.getComputedStyle?0:2097152,c|=Di(a)}catch(n){c|=32}return 0==c&&!!Mi(a).w[25];case 32:if(c=!!Mi(a).w[32]){c=0;try{c|=Ci(a)}catch(n){c|=32}c=0==c}return c;case 30:c=0;try{c|=Ci(a),c|=a.getComputedStyle?
0:2097152}catch(n){c|=32}return 0==c;case 26:c=0;try{c|=Ci(a),c|=a.getComputedStyle?0:2097152,c|=a.document.querySelectorAll&&a.document.querySelector?0:4194304,c|=Di(a)}catch(n){c|=32}return 0==c&&!!Mi(a).w[26];case 27:c=0;try{c|=Ci(a),c|=a.getComputedStyle?0:2097152,c|=Di(a,!0)}catch(n){c|=32}return!c&&!!Mi(a).w[27];default:return!1}}
function jk(a,b){var c=b.google_reactive_ad_format;if(!qc(Bg,c))return!1;var d=hb(a);if(!d||!ik(d,b,c))return!1;d=Mi(d);var e=d.j?(e=d.j[c])?27==c?3<=e:1<=e:!1:!1;if(e)return!1;d.j[c]||(d.j[c]=0);d.j[c]++;return!0}
;var kk="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_layout google_ad_layout_key google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_ama google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_columns_num google_content_recommendation_rows_num google_content_recommendation_ui_type google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_eids google_enable_content_recommendations google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_full_width_responsive_allowed google_full_width_responsive gfwrow gfwroml gfwromr gfwroz gfwrnh google_fwr_non_expansion_reason google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_native_ad_template google_native_settings_key google_num_radlinks google_num_radlinks_per_unit google_only_pyv_ads google_override_format google_page_url google_pgb_reactive google_pucrd google_referrer_url google_region google_resizing_allowed google_resizing_height google_resizing_width google_responsive_formats google_responsive_auto_format google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_scs google_source_type google_sui google_tag_for_child_directed_treatment google_tag_origin google_targeting google_tfs google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_yt_pt google_yt_up".split(" ");
function lk(a){return(a=a.innerText||a.innerHTML)&&(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/))&&/google_ad_client/.test(a[1])?a[1]:null}
function mk(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+|\s+$/g,"").replace(/\s*(\r?\n)+\s*/g,";"),(a=a.match(/^\x3c!--+(.*?)(?:--+>)?$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i))&&/google_ad_client/.test(a[1]))return a[1];return null}
function nk(a){try{a:{var b=a.document.getElementsByTagName("script"),c=a.navigator&&a.navigator.userAgent||"",d;if(!(d=/appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(c))){var e;if(e=/i(phone|pad|pod)/i.test(c)){var f;if(f=/applewebkit/i.test(c)&&!/version|safari/i.test(c)){var h=void 0===h?fb:h;try{var k=!(!h.navigator.th&&!h.top.navigator.th)}catch(ba){k=!1}f=!k}e=f}d=e}c=d?lk:mk;for(var l=
b.length-1;0<=l;l--){var n=b[l];if(!n.google_parsed_script){n.google_parsed_script=!0;var w=c(n);if(w){var F=w;break a}}}F=null}}catch(ba){return!1}if(!F)return!1;try{b=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;l={};for(var W;W=b.exec(F);)l[W[1]]=ok(W[2]);pk(l,a)}catch(ba){return!1}return!!a.google_ad_client}
function ok(a){switch(a){case "true":return!0;case "false":return!1;case "null":return null;case "undefined":break;default:try{var b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){var c=parseFloat(a);return c===c?c:void 0}}catch(d){}}}
function pk(a,b){for(var c=0;c<kk.length;c++){var d=kk[c];null==b[d]&&null!=a[d]&&(b[d]=a[d])}}
;var qk={};function rk(){}
rk.prototype.j=null;function sk(a){var b;(b=a.j)||(b={},tk(a)&&(b[0]=!0,b[1]=!0),b=a.j=b);return b}
;var uk;function vk(){}
x(vk,rk);function wk(a){return(a=tk(a))?new ActiveXObject(a):new XMLHttpRequest}
function tk(a){if(!a.l&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.l=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.l}
uk=new vk;var xk=navigator;function yk(){try{return xk.javaEnabled()}catch(a){return!1}}
function zk(a){var b=1,c;if(void 0!=a&&""!=a)for(b=0,c=a.length-1;0<=c;c--){var d=a.charCodeAt(c);b=(b<<6&268435455)+d+(d<<14);d=b&266338304;b=0!=d?b^d>>21:b}return b}
function Ak(a,b){if(!a||"none"==a)return 1;a=String(a);"auto"==a&&(a=b,"www."==a.substring(0,4)&&(a=a.substring(4,a.length)));return zk(a.toLowerCase())}
var Bk=/^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,Ck=/^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,Dk=/^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;var Ek=Zd&&"srcdoc"in document.createElement("iframe"),Fk=Yd||Zd||B&&me(11);function Gk(){var a=0;m.SVGElement&&m.document.createElementNS&&(a|=1);return a}
;new yi({notify:/^expandable-xpc-ready$/});function Hk(){this.J=this.J;this.G=this.G}
Hk.prototype.J=!1;Hk.prototype.T=function(){return this.J};
Hk.prototype.dispose=function(){this.J||(this.J=!0,this.N())};
function Ik(a,b){a.J?p(void 0)?b.call(void 0):b():(a.G||(a.G=[]),a.G.push(p(void 0)?u(b,void 0):b))}
Hk.prototype.N=function(){if(this.G)for(;this.G.length;)this.G.shift()()};
function Jk(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Kk(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.webkitVisibilityState||a.mozVisibilityState||a.visibilityState||""]||0}
;var Lk={},Mk=null;Lk.le=0;Lk.nt=2;Lk.Fr=3;Lk.Po=5;Lk.me=1;Lk.om=4;function Nk(a){Lk.e=-1;Lk.i=6;Lk.n=7;Lk.t=8;if(!Mk){var b=[];Pd(Lk,function(a,c){b[a+1]=c});
var c=b.join(""),d=a&&a[c];Mk=d&&function(b,c){return d.call(a,b,c)}}return Mk}
;var Ok=function(){if(ae){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(hd))?a[1]:"0"}return $d?(a=/10[_.][0-9_.]+/,(a=a.exec(hd))?a[0].replace(/_/g,"."):"10"):be?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(hd))?a[1]:""):ce||de||ee?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(hd))?a[1].replace(/_/g,"."):""):""}();var Pk=null;function Qk(a){this.A=[];this.l=a||window;this.j=0;this.w=null;this.B=0}
var Rk;g=Qk.prototype;g.yf=function(a,b){0!=this.j||0!=this.A.length||b&&b!=window?this.xd(a,b):(this.j=2,this.we(new Sk(a,window)))};
g.xd=function(a,b){this.A.push(new Sk(a,b||this.l));Tk(this)};
g.ih=function(a){this.j=1;if(a){var b=hi(188,u(this.te,this,!0));this.w=this.l.setTimeout(b,a)}};
g.te=function(a){a&&++this.B;1==this.j&&(null!=this.w&&(this.l.clearTimeout(this.w),this.w=null),this.j=0);Tk(this)};
g.uh=function(){return!(!window||!Array)};
g.Ef=function(){return this.B};
function Tk(a){var b=hi(189,u(a.wh,a));a.l.setTimeout(b,0)}
g.wh=function(){if(0==this.j&&this.A.length){var a=this.A.shift();this.j=2;var b=hi(190,u(this.we,this,a));a.rb.setTimeout(b,0);Tk(this)}};
g.we=function(a){this.j=0;a.ya()};
function Uk(a){try{return a.sz()}catch(b){return!1}}
Qk.prototype.nq=Qk.prototype.yf;Qk.prototype.nqa=Qk.prototype.xd;Qk.prototype.al=Qk.prototype.ih;Qk.prototype.rl=Qk.prototype.te;Qk.prototype.sz=Qk.prototype.uh;Qk.prototype.tc=Qk.prototype.Ef;function Sk(a,b){this.ya=a;this.rb=b}
;var Vk=(new Date).getTime();var Wk={"image-top":0,"image-middle":1,"image-side":2,"text-only":3,"in-article":4};function Xk(a,b,c){a-=b;return a>=(void 0===c?1E5:c)?"M":0<=a?a:"-M"}
;qb("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");var Yk=/^\.google\.(com?\.)?[a-z]{2,3}$/,Zk=/\.(cn|com\.bi|do|sl)$/,$k=m,al,bl;function cl(){$k=m;al=$k.googleToken=$k.googleToken||{};var a=v();al[1]&&al[3]>a&&0<al[2]||(al[1]="",al[2]=-1,al[3]=-1,al[4]="",al[6]="");bl=$k.googleIMState=$k.googleIMState||{};a=bl[1];Yk.test(a)&&!Zk.test(a)||(bl[1]=".google.com");Ba(bl[5])||(bl[5]=[]);"boolean"==typeof bl[6]||(bl[6]=!1);Ba(bl[7])||(bl[7]=[]);xa(bl[8])||(bl[8]=0)}
;Kd("script");function dl(a){var b=ib();if(b.google_pub_config)return b.google_pub_config[a];b.google_pub_config={};var c=null;try{(c=b.localStorage.getItem("google_pub_config"))&&(b.google_pub_config[a]=JSON.parse(c))}catch(d){}return b.google_pub_config[a]}
function el(a){if(a=dl(a))a.hk=!0}
function fl(){return"20040051"==Nh($i(),69)}
function gl(a,b){if(Nh($i(),69))var c=!!a.google_reactive_ads_config&&(b||fl());else Nh($i(),48)?(c=og(a)?1==mg(a):!mg(a))&&!(c=b)&&(c=Nh($i(),48),c=!!c&&"453848292"==c||fl()):c=!1;return c}
function hl(a){if(!Pk)a:{var b=[m.top];var c=[];for(var d=0,e;e=b[d++];){c.push(e);try{if(e.frames)for(var f=e.frames.length,h=0;h<f&&1024>b.length;++h)b.push(e.frames[h])}catch(l){}}for(b=0;b<c.length;b++)try{var k=c[b].frames.google_esf;if(k){Pk=k;break a}}catch(l){}Pk=null}c=Pk;try{return og(a)&&"1"!=a.google_tag_for_child_directed_treatment&&c&&(Ek||Fk)&&"20"===a.google_iframing?gl(a,!1):!1}catch(l){}return!1}
;function il(a){var b=$i(),c=a.oa.google_loeid;if(q(c)){a.l|=4096;c=c.split(",");for(var d=0;d<c.length;d++){var e=c[d];""!=e&&(b.j[e]=!0);e=c[d];bj[e]=e}}c=a.oa.google_eids;if(Ba(c)&&0!==c.length)for(a.l|=64,a=0;a<c.length;a++)q(c[a])&&(d=c[a],""!=d&&(b.j[d]=!0))}
;function jl(a,b){try{return a.document&&!a.document.body?new Fe(-1,-1):(void 0===b?0:b)?(new Fe(a.innerWidth,a.innerHeight)).round():Qe(a||window).round()}catch(c){return new Fe(-12245933,-12245933)}}
;function kl(a,b){this.l=b&&b.l?b.l:[];this.w=b&&b.w?b.w:0;this.A=b?b.A:"";this.j=b&&b.j?b.j:[];if(b){var c;for(c=0;c<this.l.length;++c)this.l[c].push("true");for(c=0;c<this.j.length;++c)this.j[c].j=!0}}
kl.prototype.Ec=function(){return window&&Math.random&&navigator?this.w:-1};
function ll(){var a=ib(),b=a.__google_ad_urls;if(!b)return a.__google_ad_urls=new kl;try{if(0<=b.Ec())return b}catch(c){}try{return a.__google_ad_urls=new kl(0,b)}catch(c){return a.__google_ad_urls=new kl}}
r("Goog_AdSense_getAdAdapterInstance",ll,void 0);r("Goog_AdSense_OsdAdapter",kl,void 0);function ml(){}
ml.prototype.Ec=function(){return-1};ai.l=!0;function nl(a,b,c,d,e){var f={};f.context=a;f.msg=b.substring(0,512);c&&(f.file=c);0<d&&(f.line=d.toString());f.sw=1;ol(f,e);return!0}
function ol(a,b,c){try{if(Math.random()<(b||.01)){var d="https://pagead2.googlesyndication.com/pagead/gen_204?id=jserror"+pl(a);d=d.substring(0,2E3);var e=m.fetch(d,{mode:"no-cors"});c&&e.then(c,c)}}catch(f){}}
function pl(a){var b="";Object.getOwnPropertyNames(a).forEach(function(c){var d=a[c];if(0===d||d)b+="&"+c+"="+encodeURIComponent(String(d))});
return b}
;var ql="adsafe channel client description_url durl google_ad_channel h h_ch iu kfa page_slots prev_ius prev_slotnames slotname tfcd video_url_to_fetch w".split(" ");
function rl(a){var b=!0;try{var c=a()}catch(h){try{var d=bi(h);a="";h.fileName&&(a=h.fileName);var e=-1;h.lineNumber&&(e=h.lineNumber);b=nl("cache_key.js",d,a,e)}catch(k){d=k;try{var f=bi(d);a="";d.fileName&&(a=d.fileName);e=-1;d.lineNumber&&(e=d.lineNumber);nl("pAR",f,a,e,void 0)}catch(l){ol({context:"mRE",msg:l.toString()+"\n"+(l.stack||""),sw:1},void 0,void 0)}}if(!b)throw h;}finally{}return c?String(c):""}
function sl(a){a=a.url;return Ng(q(a)?a:"")||""}
function tl(a,b){y(ql,function(c){var d=a[c];if(d||0===d||!1===d)"boolean"==typeof d&&(d=Number(d)),b(c,d)})}
function ul(a){return rl(function(){var b={};tl(a,function(a,c){return b[a]=c});
b.domain=sl(a);var c=Sg(b);return String(Sd(c))})}
;var vl=Zf(function(){if(B)return me("10.0");var a=Ye(document,"DIV"),b=wf(),c={transition:"opacity 1s linear"};b&&(c[b+"-transition"]="opacity 1s linear");Cd(a,xd("div",{style:c}));a=a.firstChild;b=a.style[Lb("transition")];return""!=("undefined"!==typeof b?b:a.style[Ff(a,"transition")]||"")});for(var wl="margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),xl=0;xl<wl.length;xl++);wl="margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");for(xl=0;xl<wl.length;xl++);function yl(a){try{var b=a.screenX;var c=a.screenY}catch(k){}try{var d=a.outerWidth;var e=a.outerHeight}catch(k){}try{var f=a.innerWidth;var h=a.innerHeight}catch(k){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,f,h]}
;var zl=/^blogger$/,Al=/^wordpress(.|\s|$)/i,Bl=/^joomla!/i,Cl=/\/wp-content\//;
function Dl(a){for(var b=a.getElementsByTagName("meta"),c=b.length,d=0;d<c;++d){var e=b[d];if("generator"==e.getAttribute("name")&&e.hasAttribute("content")){e=e.getAttribute("content");if(zl.test(e))return 1;if(Al.test(e))return 2;if(Bl.test(e))return 3}}a=a.getElementsByTagName("link");b=a.length;for(c=0;c<b;++c)if(d=a[c],"stylesheet"==d.getAttribute("rel")&&d.hasAttribute("href")&&(d=d.getAttribute("href"),Cl.test(d)))return 2;return 0}
;function El(a,b){Ih(di,"slotctx",a,!0,void 0===b?.01:b,void 0)}
var Fl=/PyvSearchDelayed/;function Gl(a){return"33895333"===Nh($i(),19)&&"html"===a.google_ad_output}
function Hl(){var a=new gb;var b=a.oa;if(xa(b.google_reactive_sra_index)){var c="RS-"+b.google_reactive_sra_index+"-",d={};b.google_ad_url=kg((d.adk=b.google_ad_unit_key,d.client=b.google_ad_client,d),fj("googleads.g.doubleclick.net",["/pagead/html/r20100101/r20100101/zrt_lookup.html#",c?encodeURIComponent(c):""].join("")));Il(b,Pi());Jl(b);var e=!0}else{var f=a.w,h=ib().document,k={},l;var n=ji(f,!1).rb;var w=mi(n);b:{var F=ib(),W=f.google_ad_width||F.google_ad_width,ba=f.google_ad_height||F.google_ad_height;
if(F&&F.top==F)var la=!1;else{var Ra=h.documentElement;if(W&&ba){var wa=1,Id=1;F.innerHeight?(wa=F.innerWidth,Id=F.innerHeight):Ra&&Ra.clientHeight?(wa=Ra.clientWidth,Id=Ra.clientHeight):h.body&&(wa=h.body.clientWidth,Id=h.body.clientHeight);if(Id>2*ba||wa>2*W){la=!1;break b}}la=!0}}var Cj=l=la,aF=w.Nc,sn=ib(),Dj=sn.top==sn?0:Od(sn.top)?1:2,yf=4;Cj||1!=Dj?Cj||2!=Dj?Cj&&1==Dj?yf=7:Cj&&2==Dj&&(yf=8):yf=6:yf=5;aF&&(yf|=16);var bF=""+yf;var tn=n,un=l,vn=!!f.google_page_url;k.google_iframing=bF;if(!vn&&
"ad.yieldmanager.com"==h.domain){for(var ih=h.URL.substring(h.URL.lastIndexOf("http"));-1<ih.indexOf("%");)try{ih=decodeURIComponent(ih)}catch(vc){break}f.google_page_url=ih;vn=!!ih}vn?(k.google_page_url=f.google_page_url,k.google_page_location=(un?h.referrer:h.URL)||"EMPTY"):(un&&Od(f.top)&&h.referrer&&f.top.document.referrer===h.referrer?k.google_page_url=f.top.document.URL:k.google_page_url=un?h.referrer:h.URL,k.google_page_location=null);b:{if(h.URL==k.google_page_url)try{var pu=Date.parse(h.lastModified)/
1E3;break b}catch(vc){}pu=null}k.google_last_modified_time=pu;if(tn==tn.top)var qu=tn.document.referrer;else{var ru=cg();qu=(ru?ru.referrer:null)||""}k.google_referrer_url=qu;li(f,k);if(Jl(b)&&(5==b.google_pgb_reactive&&b.google_reactive_ads_config||b.google_reactive_ads_config||!Bi(b)||16==b.google_reactive_ad_format||jk(a.j,b))){var su=pi(b)?"pagead2.googlesyndication.com":"googleads.g.doubleclick.net",z={},tu=a.oa;Kl(a,z);tu.idp&&(cl(),z.adsid=al[1],cl(),z.pucrd=al[6]);var Va=a.oa;z.dt=Vk;og(Va)&&
Va.google_bpp&&(z.bpp=Va.google_bpp);var uu,dF=ib();b:{var eF=ib();try{var zf=eF.performance;if(zf&&zf.timing&&zf.now){var vu=zf.timing.navigationStart+Math.round(zf.now())-zf.timing.domLoading;break b}}catch(vc){}vu=null}var wu=vu;(uu=wu?Xk(wu,dF.Date.now()-Vk,1E6):null)&&(z.bdt=uu);var xu=Va.google_iframe_start_time;if(xa(xu)){Va.google_iframe_start_time=null;var yu=Xk(xu,Vk)}else yu=null;var zu=yu;null!=zu&&(z.fdt=zu);z.idt=Xk(Vk,Vk);z.shv="r20100101";z.cbv="/r20100101".replace("/","");/^\w{1,3}$/.test(Va.google_loader_used)&&
(z.saldr=Va.google_loader_used);var wn=cg(a.j);if(wn){z.is_amp=1;var xn=wn||cg();z.amp_v=xn&&xn.mode?+xn.mode.version||null:null;var yn=wn||cg();if(yn&&yn.container){for(var Au=yn.container.split(","),Bu=[],zn=0;zn<Au.length;zn++)Bu.push(bg[Au[zn]]||"x");var Cu=Bu.join()}else Cu=null;var Du=Cu;Du&&(z.act=Du)}var xe=Pi(),Eu=Si(xe,8,{}),Ej=Va.google_ad_section;Eu[Ej]&&(z.prev_fmts=Eu[Ej]);var Fu=Si(xe,9,{});Fu[Ej]&&(z.prev_slotnames=Fu[Ej].toLowerCase());Il(Va,xe);var Gu=Si(xe,15,0);0<Gu&&(z.nras=""+
Gu);var Hu=ib(),Iu=cg(Hu);if(Iu){var Fj=Iu||cg();if(Fj){var Ju=Fj.pageViewId;q(Fj.clientId)&&(Ju+=Fj.clientId.replace(/\D/g,"").substr(0,6));var Ku=Ju}else Ku=null;var Lu=+Ku}else{var Mu=ji(Hu,!1).rb,An=Mu.google_global_correlator;An||(Mu.google_global_correlator=An=1+Math.floor(Math.random()*Math.pow(2,43)));Lu=An}z.correlator=Si(xe,7,Lu);$i().j["21060549"]&&(z.rume=1);if(Va.google_ad_channel){for(var Nu=Si(xe,10,{}),Ou="",Qu=Va.google_ad_channel.split(Ll),Bn=0;Bn<Qu.length;Bn++){var Cn=Qu[Bn];Nu[Cn]?
Ou+=Cn+"+":Nu[Cn]=!0}z.pv_ch=Ou}if(Va.google_ad_host_channel){for(var Gj=Si(xe,11,[]),Ru=Va.google_ad_host_channel.split("|"),Hj=-1,Dn=[],ad=0;ad<Ru.length;ad++){var Su=Ru[ad].split(Ll);Gj[ad]||(Gj[ad]={});for(var jh="",En=0;En<Su.length;En++){var Ij=Su[En];""!==Ij&&(Gj[ad][Ij]?jh+="+"+Ij:Gj[ad][Ij]=!0)}jh=jh.slice(1);Dn[ad]=jh;""!==jh&&(Hj=ad)}var Fn="";if(-1<Hj){for(var Gn=0;Gn<Hj;Gn++)Fn+=Dn[Gn]+"|";Fn+=Dn[Hj]}z.pv_h_ch=Fn}z.frm=Va.google_iframing;var Hn=a.j.document,Tu="";try{Tu=Hn.cookie}catch(vc){}var Uu=
Hn.domain,kh=Tu,Jj=a.j.screen,fF=Hn.referrer,gF=lg();if(cg())var Vu=ib().gaGlobal||{};else{var In=Math.round((new Date).getTime()/1E3),Jn=Va.google_analytics_domain_name,Kj="undefined"==typeof Jn?Ak("auto",Uu):Ak(Jn,Uu),hF=-1<kh.indexOf("__utma="+Kj+"."),iF=-1<kh.indexOf("__utmb="+Kj),Kn;if(!(Kn=Ri().gaGlobal)){var jF={};Kn=Ri().gaGlobal=jF}var Wa=Kn,Wu=!1;if(hF){var Ln=kh.split("__utma="+Kj+".")[1].split(";")[0].split(".");iF?Wa.sid=Ln[3]+"":Wa.sid||(Wa.sid=In+"");Wa.vid=Ln[0]+"."+Ln[1];Wa.from_cookie=
!0}else{Wa.sid||(Wa.sid=In+"");if(!Wa.vid){Wu=!0;var kF=Math.round(2147483647*Math.random()),Xu=gF,Yu,ye=[xk.appName,xk.version,xk.language?xk.language:xk.browserLanguage,xk.platform,xk.userAgent,yk()?1:0].join("");if(Jj)ye+=Jj.width+"x"+Jj.height+Jj.colorDepth;else if(m.java&&m.java.sf){var Zu=m.java.sf.Gj.Vj().Wj();ye+=Zu.screen.width+"x"+Zu.screen.height}ye=ye+kh+(fF||"");for(Yu=ye.length;0<Xu;)ye+=Xu--^Yu++;Wa.vid=(kF^zk(ye)&2147483647)+"."+In}Wa.from_cookie=!1}if(!Wa.cid){c:{var Af=Jn,$u=999;
Af&&(Af=0==Af.indexOf(".")?Af.substr(1):Af,$u=(""+Af).split(".").length);for(var av,bv=999,Lj=kh.split(";"),lh=0;lh<Lj.length;lh++){var Mj=Bk.exec(Lj[lh])||Ck.exec(Lj[lh])||Dk.exec(Lj[lh]);if(Mj){var Mn=Mj[1]||0;if(Mn==$u){var cv=Mj[2];break c}Mn<bv&&(bv=Mn,av=Mj[2])}}cv=av}var mh=cv;Wu&&mh&&-1!=mh.search(/^\d+\.\d+$/)?Wa.vid=mh:mh!=Wa.vid&&(Wa.cid=mh)}Wa.dh=Kj;Wa.hid||(Wa.hid=Math.round(2147483647*Math.random()));Vu=Wa}var nh=Vu;z.ga_vid=nh.vid;z.ga_sid=nh.sid;z.ga_hid=nh.hid;z.ga_fc=nh.from_cookie;
z.ga_cid=nh.cid;z.ga_wpids=Va.google_analytics_uacct;var dv=Va.google_ad_client;try{var ev=ki(),Nj=ev.google_prev_clients;Nj||(Nj=ev.google_prev_clients={});if(dv in Nj)var Nn=1;else Nj[dv]=!0,Nn=2}catch(vc){Nn=0}z.pv=Nn;var oh=a.w,ph=new eh(oh);oh.location&&oh.location.ancestorOrigins&&(z.iag=gh(ph));z.icsg=yh(ph);var fv=ph.j[0].depth;0<fv&&(z.nhd=fv);z.dssz=oh.document.scripts?oh.document.scripts.length:0;z.mdo=zh(ph);z.mso=Ah(ph);var On=Va.google_ad_layout;On&&0<=Wk[On]&&(z.rplot=Wk[On]);ng(z);
var Oj,Pn=cg(),Qn=((Oj=Pn&&Pn.initialIntersection?Pn.initialIntersection:null)&&Ea(Oj.rootBounds)?new Fe(Oj.rootBounds.width,Oj.rootBounds.height):null)||jl(a.j.top);Qn&&(z.biw=Qn.width,z.bih=Qn.height);var gv=a.j;if(gv.top!=gv){var Rn=jl(a.j);Rn&&(z.isw=Rn.width,z.ish=Rn.height)}var ze=a.j;if(null!==ze&&ze!=ze.top){var Pj=[ze.document.URL];ze.name&&Pj.push(ze.name);var hv=jl(ze,!1);Pj.push(hv.width.toString());Pj.push(hv.height.toString());var iv=Sd(Pj.join(""))}else iv=0;var jv=iv;0!==jv&&(z.ifk=
jv.toString());ib()==window.top&&(z.abxe=1);Ml(a,z);b:switch(Nh($i(),103)){case "188690902":case "188690904":if(!ld()||0<=Ib(pd(),10))var kv=ll();else{var lv=ib(),mv=lv.__google_ad_urls;kv=mv?mv:lv.__google_ad_urls=new ml}var nv=kv;break b;default:nv=ll()}var ov=nv.Ec();ov&&(z.oid=ov);var Ja=a.oa,rb=a.w,qh=a.j,Ae=ki(),pv="22307207"!=Nh($i(),109)||fl()||!!Bi(Ja),Sn;if(!(Sn=!pv)){var qv=zi(Ae).clientWidth||0;Sn=320<=qv&&420>=qv&&.05>Math.abs(Ai(Ae)-1)}Sn||(z.nmo=1);if(Ae.outerWidth&&pv){var rv=Ae.outerWidth/
Ae.document.documentElement.clientWidth;.02<Math.abs(rv-1)&&(z.zm=String(rv).substring(0,4))}z.ref=Ja.google_referrer_url;z.loc=Ja.google_page_location;var rh=mi(Ae),mF=$i();z.url||z.loc||!rh.url||(z.url=rh.url,rh.Nc||(z.usrc=1));var Tn,sv=Ja.google_ad_output,nF=tg(Ja),oF=(!sv||"html"==sv)&&!nF;if(!(Tn="33895335"==Nh($i(),59)&&oF||Gl(Ja))){var pF=Ja.google_ad_channel;Tn="ca-pub-6219811747049371"===Ja.google_ad_client&&Fl.test(pF)}Tn&&(z.d_imp="1");rh.url!=(z.loc||z.url)&&(z.top=rh.url);Ja.google_async_rrc&&
(z.rr=Ja.google_async_rrc);z.rx=0;var tv;if(Rk&&Uk(Rk))var uv=Rk;else{var Un=ki(),bd=Un.google_jobrunner;uv=bd&&(fg(bd,"object")||fg(bd,"function"))&&Uk(bd)&&hg(bd.nq)&&hg(bd.nqa)&&hg(bd.al)&&hg(bd.rl)?Rk=bd:Un.google_jobrunner=Rk=new Qk(Un)}var vv=uv;(tv=hg(vv.tc)?vv.tc():null)&&(z.jtc=tv);0<=a.B&&(z.eae=a.B);var wv=a.A;wv&&Mi(wv);var Be=hb(qh);if(Be&&rb.google_ad_resizable&&!rb.google_reactive_ad_format&&Be.navigator&&/iPhone|iPod|iPad|Android|BlackBerry/.test(Be.navigator.userAgent)&&Be.top==Be){var xv=
Be.document.getElementById(rb.google_async_iframe_id);if(xv){for(var sh=xv.parentElement;sh&&!rg.test(sh.className);)sh=sh.parentElement;var yv=sh}else yv=null;var Vn=yv;if(Vn){var Wn=Mi(Be);Wn.l[16]||(Wn.l[16]=[]);var qF=Wn.l[16];var Xn={};null==rb.google_ad_client&&nk(rb)&&(Xn.google_loader_features_used=2048);pk(rb,Xn);qF.push({dk:Vn,oa:Xn,offsetWidth:Vn.offsetWidth})}}if(!tg(Ja)){var th=rb.document,zv="";if(th.documentMode){var Ce=th.createElement("IFRAME");Ce.frameBorder=0;Ce.style.height=0;
Ce.style.width=0;Ce.style.position="absolute";if(th.body){th.body.appendChild(Ce);try{var Qj=Ce.contentWindow.document;Qj.open();Qj.write("<!DOCTYPE html>");Qj.close();zv+=Qj.documentMode}catch(vc){}th.body.removeChild(Ce)}}z.docm=zv}z.brdim=yl(qh).join();var rF=aj.gf;var sF=Nh($i(),67)===rF;var uh=0;!p(m.postMessage)&&(uh|=1);if(sF){var Av=cg(rb);Av&&Av.Sj&&(uh|=256);xa(rb.screenX)&&xa(rb.l)&&xa(rb.outerWidth)&&(uh|=512);Da(Nk(rb&&rb.document))&&(uh|=1024)}var Bv=uh;0<Bv&&(z.osd=Bv);var Yn=Kk(qh.document),
Cv=Kk(rb.document);z.vis=Yn;Yn!==Cv&&El({type:"vis",pub:Yn,cur:Cv,eq:rb.parent==qh});var Zn=dl(Ja.google_ad_client);if(Zn&&Zn.sraConfigs){var Dv=Zn.sraConfigs;var Ev=Dv["2"]&&Dv["2"].sraEnabled?"t":"f"}else Ev="u";z.ppjl=Ev;if("html"===(Ja.google_ad_output||"html")&&!Bi(Ja)){b:{var vh=Number(Ja.google_ad_width),wh=Number(Ja.google_ad_height);if(!(0<vh&&0<wh)){c:{try{var $n=String(Ja.google_ad_format);if($n&&$n.match){var ao=$n.match(/(\d+)x(\d+)/i);if(ao){var Fv=parseInt(ao[1],10),Gv=parseInt(ao[2],
10);if(0<Fv&&0<Gv){var Hv={width:Fv,height:Gv};break c}}}}catch(vc){}Hv=null}var bo=Hv;if(!bo){var Iv=null;break b}vh=0<vh?vh:bo.width;wh=0<wh?wh:bo.height}Iv={width:vh,height:wh}}var co=Iv;if(co){var Jv=0;b:{try{var Kv=Ja.google_async_iframe_id,Lv=ib().document;if(Kv)var Mv=Lv.getElementById(Kv);else{var Nv=Lv.getElementsByTagName("script"),Ov=Nv[Nv.length-1];Mv=Ov&&Ov.parentNode||null}var Pv=Mv;if(Pv){for(var xh=[],Rj=Pv,tF=0,uF=v();100>=++tF&&50>v()-uF&&(Rj=Nl(Rj));)1===Rj.nodeType&&xh.push(Rj);
c:{for(var eo=0;eo<xh.length;eo++){d:{var cd=xh[eo];try{if(cd.parentNode&&0<cd.offsetWidth&&0<cd.offsetHeight&&cd.style&&"none"!==cd.style.display&&"hidden"!==cd.style.visibility&&(!cd.style.opacity||0!==Number(cd.style.opacity))){var Qv=cd.getBoundingClientRect();var Rv=0<Qv.right&&0<Qv.bottom;break d}}catch(vc){}Rv=!1}if(!Rv){var Sv=!1;break c}}Sv=!0}if(Sv){c:{for(var wF=v(),xF=/^html|body$/i,yF=/^fixed/i,fo=0;fo<xh.length&&50>v()-wF;fo++){var Sj=xh[fo];if(!xF.test(Sj.tagName)&&yF.test(Sj.style.position||
If(Sj,"position"))){var go=Sj;break c}}go=null}break b}}}catch(vc){}go=null}var ho=go;ho&&ho.offsetWidth*ho.offsetHeight<=4*co.width*co.height&&(Jv=1);z.pfx=Jv}}var Tj=qh.location,zF=Ja.google_ad_slot;if(Tj){var io=Hi(Tj);b:{var AF=Ji(Tj);try{var Tv=AF.match(/\bpfofmt=([\w]+)/);var Uv=Tv&&Tv[1]||null;break b}catch(vc){}Uv=null}var jo=Uv;b:{var BF=Ji(Tj);try{var Vv=BF.match(/\bpfoslot=([\d]+)/);var Wv=Vv&&Vv[1]||null;break b}catch(vc){}Wv=null}var Xv=Wv;0>=io||!(io!=Gi.google_server_side_slot_resize||
jo&&Xv&&Xv==zF)||(z.pfo=io,z.adtest="on",jo&&(z.pfofmt=jo))}if("26835106"===Nh(mF,41)&&a.A){try{var Yv=a.A.document.getElementsByTagName("head")[0];var Zv=Yv?Dl(Yv):0}catch(vc){Zv=0}var $v=Zv;0!==$v&&(z.cms=$v)}var aw=ej(Ae,Ja);0!=aw&&(z.ifsl=aw);z.fu=a.l;z.bc=Gk();tu.idp&&(cl(),z.jar=al[4]);z.url&&0==String(z.url).lastIndexOf("https:",0)&&nd()&&0<=Ib(pd(),57)&&(z.osw_key=ul(z));var CF=b.google_ad_channel,bw="/pagead/ads?";"ca-pub-6219811747049371"===b.google_ad_client&&Ol.test(CF)&&(bw="/pagead/lopri?");
var ko=fj(su,bw),lo;if(lo=!Gl(a.oa)){var cw=a.oa;lo=(!cw.google_ad_output||"html"===cw.google_ad_output)&&3===Kk(a.j.document)}lo&&(a.C=!0,a.G=ko,ko=fj(su,"/pagead/blank.gif#?"));b.google_ad_url=kg(z,ko+"");e=!0}else e=!1}return e}
function Il(a,b){var c=Si(b,8,{}),d=Si(b,9,{}),e=a.google_ad_section,f=a.google_ad_format,h=a.google_ad_slot;f?c[e]=c[e]?c[e]+(","+f):f:h&&(d[e]=d[e]?d[e]+(","+h):h)}
function Kl(a,b){var c=a.oa;gg(vg,function(a,e){b[a]=c[e]});
gg(ug,function(a,e){b[a]=c[e]});
gg(xg,function(a,e){b[a]=c[e]});
Bi(c)&&(b.fa=Bi(c));gl(c,!0)&&(hl(c)?(el(c.google_ad_client),b.srr=1):b.srr=0)}
var Ol=/YtLoPri/;function Nl(a){try{if(a.parentNode)return a.parentNode}catch(e){return null}if(9===a.nodeType)a:{try{var b=a?Ue(a):window;if(b){var c=b.frameElement;if(c&&Od(b.parent)){var d=c;break a}}}catch(e){}d=null}else d=null;return d}
function Jl(a){var b=Pi(),c=a.google_ad_section;Bi(a)&&Ui(b,15,Si(b,15,0)+1);if(tg(a)){if(3<Ui(b,5,Si(b,5,0)+1))return!1}else if(100<Ui(b,6,Si(b,6,0)+1)-Si(b,15,0)&&""==c)return!1;return!0}
function Ml(a,b){var c=$i();b.eid=dj(c).join();b.loeid=cj(c).join();if(.01>Math.random()){var d=function(a,b){y(a,function(a){c.j[a]||b.push(a)})},e=[],f=a.oa.google_loeid;
q(f)&&d(f.split(","),e);f=[];var h=a.oa.google_eids;Ba(h)&&d(h,f);(0<f.length||0<e.length)&&El({type:"eids",neids:f.join(","),nloeids:e.join(","),ldr:a.oa.google_loader_used},1)}}
var Ll=/[+, ]/;function Pl(a){this.j=a;a.then(u(function(){},this))}
function Ql(a,b,c){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];e=Rl(a,b).then(function(a){return a.apply(null,d)});
return new Pl(e)}
var Sl={};function Rl(a,b){var c=Sl[b];if(c)return c;c=(c=t(b))?Bj(c):(new wj(function(b,c){var d=(new He(document)).createElement("SCRIPT");d.async=!0;Ed(d,Oc(Hc(a)));d.onload=d.onreadystatechange=function(){d.readyState&&"loaded"!=d.readyState&&"complete"!=d.readyState||b()};
d.onerror=c;(document.head||document.getElementsByTagName("head")[0]).appendChild(d)})).then(function(){var c=t(b);
if(!c)throw Error("Failed to load "+b+" from "+a);return c});
return Sl[b]=c}
function Tl(a,b,c){a.j.then(function(a){var d=a[b];if(!d)throw Error("Method not found: "+b);return d.apply(a,c)})}
;function Ul(a){this.j=a}
function Vl(a,b){var c=b||{};c={apiKey:c.Pj||c.apiKey,environment:c.Tj||c.environment,helpCenterPath:c.Xj||c.helpCenterPath,locale:c.locale||c.locale||"en".replace(/-/g,"_"),productData:c.ck||c.productData,receiverUri:c.ek||c.receiverUri,renderApiUri:c.gk||c.renderApiUri,theme:c.theme||c.theme,window:c.window||c.window};c=Ql(Wl,"help.service.Lazy.create",a,c);return new Ul(c)}
var Wl=Ic("https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");Ul.prototype.w=function(a){Tl(this.j,"startFeedback",arguments)};
Ul.prototype.A=function(a){Tl(this.j,"startHelp",arguments)};
Ul.prototype.l=function(a){Tl(this.j,"loadChatSupport",arguments)};function Xl(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Yl=window,Zl=document,$l=Yl.location;function am(){}
var bm=/\[native code\]/;function cm(a,b,c){return a[b]=a[b]||c}
function dm(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function em(){var a;if((a=Object.create)&&bm.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var fm=cm(Yl,"gapi",{});var gm;gm=cm(Yl,"___jsl",em());cm(gm,"I",0);cm(gm,"hel",10);function hm(){var a=$l.href;if(gm.dpo)var b=gm.h;else{b=gm.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function im(a){var b=cm(gm,"PQ",[]);gm.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function jm(a){return cm(cm(gm,"H",em()),a,em())}
;function km(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=n=0}
function b(a){for(var b=h,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],k=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var n=k^d&(f^k);var w=1518500249}else n=d^f^k,w=1859775393;else 60>c?(n=d&f|k&(d|f),w=2400959708):(n=d^f^k,w=3395469782);n=((a<<5|a>>>27)&4294967295)+n+l+w+b[c]&4294967295;l=k;k=f;f=(d<<30|d>>>2)&4294967295;d=a;a=n}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+k&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,h=a.length;e<h;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==n)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[n++]=a[d++],w++,64==n)for(n=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>n?c(k,56-n):c(k,64-(n-56));for(var h=63;56<=h;h--)f[h]=d&255,d>>>=8;b(f);for(h=d=0;5>h;h++)for(var l=24;0<=l;l-=8)a[d++]=e[h]>>l&255;return a}
for(var e=[],f=[],h=[],k=[128],l=1;64>l;++l)k[l]=0;var n,w;a();return{reset:a,update:c,digest:d,vf:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function lm(a,b,c){var d=[],e=[];if(1==(Ba(c)?2:1))return e=[b,a],y(d,function(a){e.push(a)}),mm(e.join(" "));
var f=[],h=[];y(c,function(a){h.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];y(d,function(a){e.push(a)});
a=mm(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")}
function mm(a){var b=km();b.update(a);return b.vf().toLowerCase()}
;function nm(a){this.j=a||{cookie:""}}
g=nm.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
g.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(v()+1E3*c)).toUTCString();this.j.cookie=a+"="+b+e+d+c+f};
g.get=function(a,b){for(var c=a+"=",d=(this.j.cookie||"").split(";"),e=0,f;e<d.length;e++){f=nb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
g.Fa=function(){return om(this).keys};
g.pa=function(){return om(this).values};
g.isEmpty=function(){return!this.j.cookie};
g.clear=function(){for(var a=om(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function om(a){a=(a.j.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=nb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var pm=new nm("undefined"==typeof document?null:document);pm.l=3950;function qm(){var a=[],b=Xl(String(m.location.href)),c=m.__OVERRIDE_SID;null==c&&(c=(new nm(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?m.__SAPISID:m.__APISID,null==b&&(b=(new nm(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(m.location.href);return d&&b&&c?[c,lm(Xl(d),b,a||null)].join(" "):null}return null}
;var rm=cm(gm,"perf",em());cm(rm,"g",em());var sm=cm(rm,"i",em());cm(rm,"r",[]);em();em();function tm(a,b,c){b&&0<b.length&&(b=um(b),c&&0<c.length&&(b+="___"+um(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=cm(sm,"_p",em()),cm(b,c,em())[a]=(new Date).getTime(),b=rm.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function um(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var vm=em(),wm=[];function xm(a){throw Error("Bad hint"+(a?": "+a:""));}
wm.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?gm[b]=cm(gm,b,[]).concat(c):cm(gm,b,c)}if(b=a.u)a=cm(gm,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var ym=/^(\/[a-zA-Z0-9_\-]+)+$/,zm=[/\/amp\//,/\/amp$/,/^\/amp$/],Am=/^[a-zA-Z0-9\-_\.,!]+$/,Bm=/^gapi\.loaded_[0-9]+$/,Cm=/^[a-zA-Z0-9,._-]+$/;function Dm(a,b,c,d){var e=a.split(";"),f=e.shift(),h=vm[f],k=null;h?k=h(e,b,c,d):xm("no hint processor for: "+f);k||xm("failed to generate load url");b=k;c=b.match(Em);(d=b.match(Fm))&&1===d.length&&Gm.test(b)&&c&&1===c.length||xm("failed sanity: "+a);return k}
function Hm(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Im(a);Bm.test(c)||xm("invalid_callback");b=Jm(b);d=d&&d.length?Jm(d):null;return[encodeURIComponent(a.hh).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.fd?"/am="+e(a.fd):"",a.se?"/rs="+e(a.se):"",a.Ye?"/t="+e(a.Ye):"","/cb=",e(c)].join("")}
function Im(a){"/"!==a.charAt(0)&&xm("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))xm("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),h=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&h&&k&&(a[h]=a[h]||k)}b="/"+c.join("/");ym.test(b)||xm("invalid_prefix");c=0;for(d=zm.length;c<d;++c)zm[c].test(b)&&xm("invalid_prefix");c=Km(a,
"k",!0);d=Km(a,"am");e=Km(a,"rs");a=Km(a,"t");return{hh:b,version:c,fd:d,se:e,Ye:a}}
function Jm(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Cm.test(e)&&b.push(e)}return b.join(",")}
function Km(a,b,c){a=a[b];!a&&c&&xm("missing: "+b);if(a){if(Am.test(a))return a;xm("invalid: "+b)}return null}
var Gm=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Fm=/\/cb=/g,Em=/\/\//g;function Lm(){var a=hm();if(!a)throw Error("Bad hint");return a}
vm.m=function(a,b,c,d){(a=a[0])||xm("missing_hint");return"https://apis.google.com"+Hm(a,b,c,d)};
var Mm=decodeURI("%73cript"),Nm=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Om(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function Pm(){var a=gm.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(Nm)?a:gm.nonce=null;var b=cm(gm,"us",[]);if(!b||!b.length)return gm.nonce=null;for(var c=Zl.getElementsByTagName(Mm),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var h=0,k=b.length;h<k&&b[h]!==f.src;++h);if(h!==k&&a&&a===String(a)&&a.match(Nm))return gm.nonce=a}}return null}
function Qm(a){if("loading"!=Zl.readyState)Rm(a);else{var b=Pm(),c="";null!==b&&(c=' nonce="'+b+'"');Zl.write("<"+Mm+' src="'+encodeURI(a)+'"'+c+"></"+Mm+">")}}
function Rm(a){var b=Zl.createElement(Mm);b.setAttribute("src",a);a=Pm();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Zl.getElementsByTagName(Mm)[0])?a.parentNode.insertBefore(b,a):(Zl.head||Zl.body||Zl.documentElement).appendChild(b)}
function Sm(a,b){var c=b&&b._c;if(c)for(var d=0;d<wm.length;d++){var e=wm[d][0],f=wm[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Tm(a,b,c){Um(function(){var c=b===hm()?cm(fm,"_",em()):em();c=cm(jm(b),"_",c);a(c)},c)}
function Vm(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Sm(a,c);var d=a?a.split(":"):[],e=c.h||Lm(),f=cm(gm,"ah",em());if(f["::"]&&d.length){for(var h=[],k=null;k=d.shift();){var l=k.split(".");l=f[k]||f[l[1]&&"ns:"+l[0]||""]||e;var n=h.length&&h[h.length-1]||null,w=n;n&&n.hint==l||(w={hint:l,features:[]},h.push(w));w.features.push(k)}var F=h.length;if(1<F){var W=c.callback;W&&(c.callback=function(){0==--F&&W()})}for(;d=h.shift();)Wm(d.features,c,d.hint)}else Wm(d||[],c,e)}
function Wm(a,b,c){function d(a,b){if(F)return 0;Yl.clearTimeout(w);W.push.apply(W,la);var d=((fm||{}).config||{}).update;d?d(f):f&&cm(gm,"cu",[]).push(f);if(b){tm("me0",a,ba);try{Tm(b,c,n)}finally{tm("me1",a,ba)}}return 1}
a=dm(a)||[];var e=b.callback,f=b.config,h=b.timeout,k=b.ontimeout,l=b.onerror,n=void 0;"function"==typeof l&&(n=l);var w=null,F=!1;if(h&&!k||!h&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";l=cm(jm(c),"r",[]).sort();var W=cm(jm(c),"L",[]).sort(),ba=[].concat(l);0<h&&(w=Yl.setTimeout(function(){F=!0;k()},h));
var la=Om(a,W);if(la.length){la=Om(a,l);var Ra=cm(gm,"CP",[]),wa=Ra.length;Ra[wa]=function(a){function b(){var a=Ra[wa+1];a&&a()}
function c(b){Ra[wa]=null;d(la,a)&&im(function(){e&&e();b()})}
if(!a)return 0;tm("ml1",la,ba);0<wa&&Ra[wa-1]?Ra[wa]=function(){c(b)}:c(b)};
if(la.length){var Id="loaded_"+gm.I++;fm[Id]=function(a){Ra[wa](a);fm[Id]=null};
a=Dm(c,la,"gapi."+Id,l);l.push.apply(l,la);tm("ml0",la,ba);b.sync||Yl.___gapisync?Qm(a):Rm(a)}else Ra[wa](am)}else d(la)&&e&&e()}
function Um(a,b){if(gm.hee&&0<gm.hel)try{return a()}catch(c){b&&b(c),gm.hel--,Vm("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
fm.load=function(a,b){return Um(function(){return Vm(a,b)})};Dc("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function Xm(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.j=!1;this.ue=!0}
Xm.prototype.stopPropagation=function(){this.j=!0};
Xm.prototype.preventDefault=function(){this.defaultPrevented=!0;this.ue=!1};var Ym=!B||ne(9),Zm=B&&!me("9");!Zd||me("528");Yd&&me("1.9b")||B&&me("8")||Vd&&me("9.5")||Zd&&me("528");Yd&&!me("8")||B&&me("9");var $m=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
m.addEventListener("test",ya,b);m.removeEventListener("test",ya,b);return a}();var an=B?"focusin":"DOMFocusIn",bn=B?"focusout":"DOMFocusOut",cn;cn=Zd?"webkitTransitionEnd":Vd?"otransitionend":"transitionend";function dn(a,b){Xm.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;a&&this.init(a,b)}
x(dn,Xm);var en={2:"touch",3:"pen",4:"mouse"};
dn.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?Yd&&(Ld(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=q(a.pointerType)?a.pointerType:en[a.pointerType]||"";this.state=a.state;this.l=a;a.defaultPrevented&&this.preventDefault()};
dn.prototype.stopPropagation=function(){dn.K.stopPropagation.call(this);this.l.stopPropagation?this.l.stopPropagation():this.l.cancelBubble=!0};
dn.prototype.preventDefault=function(){dn.K.preventDefault.call(this);var a=this.l;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Zm)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var fn="closure_listenable_"+(1E6*Math.random()|0);function gn(a){return!(!a||!a[fn])}
var hn=0;function jn(a,b,c,d,e){this.listener=a;this.j=null;this.src=b;this.type=c;this.capture=!!d;this.Yb=e;this.key=++hn;this.mb=this.Nb=!1}
function kn(a){a.mb=!0;a.listener=null;a.j=null;a.src=null;a.Yb=null}
;function ln(a){this.src=a;this.listeners={};this.j=0}
ln.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.j++);var h=mn(a,b,d,e);-1<h?(b=a[h],c||(b.Nb=!1)):(b=new jn(b,this.src,f,!!d,e),b.Nb=c,a.push(b));return b};
ln.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=mn(e,b,c,d);return-1<b?(kn(e[b]),$b(e,b),0==e.length&&(delete this.listeners[a],this.j--),!0):!1};
function nn(a,b){var c=b.type;c in a.listeners&&Zb(a.listeners[c],b)&&(kn(b),0==a.listeners[c].length&&(delete a.listeners[c],a.j--))}
function on(a,b,c,d,e){a=a.listeners[b.toString()];b=-1;a&&(b=mn(a,c,d,e));return-1<b?a[b]:null}
function mn(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.mb&&f.listener==b&&f.capture==!!c&&f.Yb==d)return e}return-1}
;var pn="closure_lm_"+(1E6*Math.random()|0),qn={},rn=0;function mo(a,b,c,d,e){if(d&&d.once)return no(a,b,c,d,e);if(Ba(b)){for(var f=0;f<b.length;f++)mo(a,b[f],c,d,e);return null}c=oo(c);return gn(a)?a.Eb(b,c,Ea(d)?!!d.capture:!!d,e):po(a,b,c,!1,d,e)}
function po(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=Ea(e)?!!e.capture:!!e,k=qo(a);k||(a[pn]=k=new ln(a));c=k.add(b,c,d,h,f);if(c.j)return c;d=ro();c.j=d;d.src=a;d.listener=c;if(a.addEventListener)$m||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(so(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");rn++;return c}
function ro(){var a=to,b=Ym?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function no(a,b,c,d,e){if(Ba(b)){for(var f=0;f<b.length;f++)no(a,b[f],c,d,e);return null}c=oo(c);return gn(a)?a.w.add(String(b),c,!0,Ea(d)?!!d.capture:!!d,e):po(a,b,c,!0,d,e)}
function uo(a,b,c,d,e){if(Ba(b))for(var f=0;f<b.length;f++)uo(a,b[f],c,d,e);else d=Ea(d)?!!d.capture:!!d,c=oo(c),gn(a)?a.oc(b,c,d,e):a&&(a=qo(a))&&(b=on(a,b,c,d,e))&&vo(b)}
function vo(a){if(!xa(a)&&a&&!a.mb){var b=a.src;if(gn(b))nn(b.w,a);else{var c=a.type,d=a.j;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(so(c),d);rn--;(c=qo(b))?(nn(c,a),0==c.j&&(c.src=null,b[pn]=null)):kn(a)}}}
function so(a){return a in qn?qn[a]:qn[a]="on"+a}
function wo(a,b,c,d){var e=!0;if(a=qo(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.mb&&(f=xo(f,d),e=e&&!1!==f)}return e}
function xo(a,b){var c=a.listener,d=a.Yb||a.src;a.Nb&&vo(a);return c.call(d,b)}
function to(a,b){if(a.mb)return!0;if(!Ym){var c=b||t("window.event"),d=new dn(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var h=c.length-1;!d.j&&0<=h;h--){d.currentTarget=c[h];var k=wo(c[h],f,!0,d);e=e&&k}for(h=0;!d.j&&h<c.length;h++)d.currentTarget=c[h],k=wo(c[h],f,!1,d),e=e&&k}return e}return xo(a,new dn(b,this))}
function qo(a){a=a[pn];return a instanceof ln?a:null}
var yo="__closure_events_fn_"+(1E9*Math.random()>>>0);function oo(a){if(Da(a))return a;a[yo]||(a[yo]=function(b){return a.handleEvent(b)});
return a[yo]}
;function zo(){Hk.call(this);this.w=new ln(this);this.Ta=this;this.U=null}
x(zo,Hk);zo.prototype[fn]=!0;g=zo.prototype;g.Vc=function(a){this.U=a};
g.addEventListener=function(a,b,c,d){mo(this,a,b,c,d)};
g.removeEventListener=function(a,b,c,d){uo(this,a,b,c,d)};
function Ao(a,b){var c=a.U;if(c){var d=[];for(var e=1;c;c=c.U)d.push(c),++e}c=a.Ta;e=b;var f=e.type||e;if(q(e))e=new Xm(e,c);else if(e instanceof Xm)e.target=e.target||c;else{var h=e;e=new Xm(f,c);Cc(e,h)}h=!0;if(d)for(var k=d.length-1;!e.j&&0<=k;k--){var l=e.currentTarget=d[k];h=Bo(l,f,!0,e)&&h}e.j||(l=e.currentTarget=c,h=Bo(l,f,!0,e)&&h,e.j||(h=Bo(l,f,!1,e)&&h));if(d)for(k=0;!e.j&&k<d.length;k++)l=e.currentTarget=d[k],h=Bo(l,f,!1,e)&&h}
g.N=function(){zo.K.N.call(this);if(this.w){var a=this.w,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,kn(d[e]);delete a.listeners[c];a.j--}}this.U=null};
g.Eb=function(a,b,c,d){return this.w.add(String(a),b,!1,c,d)};
g.oc=function(a,b,c,d){return this.w.remove(String(a),b,c,d)};
function Bo(a,b,c,d){b=a.w.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.mb&&h.capture==c){var k=h.listener,l=h.Yb||h.src;h.Nb&&nn(a.w,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.ue}
;function Co(a,b){zo.call(this);this.l=a||1;this.j=b||m;this.A=u(this.Ff,this);this.B=v()}
x(Co,zo);g=Co.prototype;g.enabled=!1;g.ua=null;g.setInterval=function(a){this.l=a;this.ua&&this.enabled?(this.stop(),this.start()):this.ua&&this.stop()};
g.Ff=function(){if(this.enabled){var a=v()-this.B;0<a&&a<.8*this.l?this.ua=this.j.setTimeout(this.A,this.l-a):(this.ua&&(this.j.clearTimeout(this.ua),this.ua=null),Ao(this,"tick"),this.enabled&&(this.ua=this.j.setTimeout(this.A,this.l),this.B=v()))}};
g.start=function(){this.enabled=!0;this.ua||(this.ua=this.j.setTimeout(this.A,this.l),this.B=v())};
g.stop=function(){this.enabled=!1;this.ua&&(this.j.clearTimeout(this.ua),this.ua=null)};
g.N=function(){Co.K.N.call(this);this.stop();delete this.j};
function Do(a,b,c){if(Da(a))c&&(a=u(a,c));else if(a&&"function"==typeof a.handleEvent)a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:m.setTimeout(a,b||0)}
;function Eo(a,b,c){Hk.call(this);this.j=a;this.A=b||0;this.l=c;this.w=u(this.Cd,this)}
x(Eo,Hk);g=Eo.prototype;g.Bb=0;g.N=function(){Eo.K.N.call(this);this.stop();delete this.j;delete this.l};
g.start=function(a){this.stop();this.Bb=Do(this.w,p(a)?a:this.A)};
g.stop=function(){this.isActive()&&m.clearTimeout(this.Bb);this.Bb=0};
g.isActive=function(){return 0!=this.Bb};
g.Cd=function(){this.Bb=0;this.j&&this.j.call(this.l)};function Fo(a,b,c){Hk.call(this);this.A=null!=c?u(a,c):a;this.w=b;this.l=u(this.Wg,this);this.j=[]}
x(Fo,Hk);g=Fo.prototype;g.nb=!1;g.Hb=0;g.Za=null;g.Gf=function(a){this.j=arguments;this.Za||this.Hb?this.nb=!0:Go(this)};
g.stop=function(){this.Za&&(m.clearTimeout(this.Za),this.Za=null,this.nb=!1,this.j=[])};
g.pause=function(){this.Hb++};
g.resume=function(){this.Hb--;this.Hb||!this.nb||this.Za||(this.nb=!1,Go(this))};
g.N=function(){Fo.K.N.call(this);this.stop()};
g.Wg=function(){this.Za=null;this.nb&&!this.Hb&&(this.nb=!1,Go(this))};
function Go(a){a.Za=Do(a.l,a.w);a.A.apply(null,a.j)}
;var Ho={ti:["BC","AD"],si:["Before Christ","Anno Domini"],Ri:"JFMAMJJASOND".split(""),yj:"JFMAMJJASOND".split(""),Pi:"January February March April May June July August September October November December".split(" "),xj:"January February March April May June July August September October November December".split(" "),qj:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Aj:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Kj:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Cj:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),sj:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Bj:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Si:"SMTWTFS".split(""),zj:"SMTWTFS".split(""),rj:["Q1","Q2","Q3","Q4"],dj:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Zh:["AM","PM"],mi:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],Ej:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],ni:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],hf:6,Lj:[5,6],jf:5},Io=Ho;
Io=Ho;function Jo(a,b,c){xa(a)?(this.date=Ko(a,b||0,c||1),Lo(this,c||1)):Ea(a)?(this.date=Ko(a.getFullYear(),a.getMonth(),a.getDate()),Lo(this,a.getDate())):(this.date=new Date(v()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Lo(this,a))}
function Ko(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
g=Jo.prototype;g.Sb=Io.hf;g.Ub=Io.jf;g.clone=function(){var a=new Jo(this.date);a.Sb=this.Sb;a.Ub=this.Ub;return a};
g.getFullYear=function(){return this.date.getFullYear()};
g.getMonth=function(){return this.date.getMonth()};
g.getDate=function(){return this.date.getDate()};
g.getTime=function(){return this.date.getTime()};
function Mo(a){a=a.date.getTimezoneOffset();if(0==a)a="Z";else{var b=Math.abs(a)/60,c=Math.floor(b);b=60*(b-c);a=(0<a?"-":"+")+Gb(c)+":"+Gb(b)}return a}
g.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.add=function(a){if(a.B||a.w){var b=this.getMonth()+a.w+12*a.B,c=this.getFullYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.date.setDate(1);this.date.setFullYear(c);this.date.setMonth(b);this.date.setDate(d)}a.days&&(a=new Date((new Date(this.getFullYear(),this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.date.setDate(1),this.date.setFullYear(a.getFullYear()),
this.date.setMonth(a.getMonth()),this.date.setDate(a.getDate()),Lo(this,a.getDate()))};
g.mc=function(a,b){return[this.getFullYear(),Gb(this.getMonth()+1),Gb(this.getDate())].join(a?"-":"")+(b?Mo(this):"")};
g.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.toString=function(){return this.mc()};
function Lo(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
g.valueOf=function(){return this.date.valueOf()};
function No(a,b,c,d,e,f,h){this.date=xa(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,h||0):new Date(a&&a.getTime?a.getTime():v())}
x(No,Jo);g=No.prototype;g.add=function(a){Jo.prototype.add.call(this,a);a.j&&this.date.setUTCHours(this.date.getUTCHours()+a.j);a.l&&this.date.setUTCMinutes(this.date.getUTCMinutes()+a.l);a.A&&this.date.setUTCSeconds(this.date.getUTCSeconds()+a.A)};
g.mc=function(a,b){var c=Jo.prototype.mc.call(this,a);return a?c+" "+Gb(this.date.getHours())+":"+Gb(this.date.getMinutes())+":"+Gb(this.date.getSeconds())+(b?Mo(this):""):c+"T"+Gb(this.date.getHours())+Gb(this.date.getMinutes())+Gb(this.date.getSeconds())+(b?Mo(this):"")};
g.equals=function(a){return this.getTime()==a.getTime()};
g.toString=function(){return this.mc()};
g.clone=function(){var a=new No(this.date);a.Sb=this.Sb;a.Ub=this.Ub;return a};function Oo(a){if(a.classList)return a.classList;a=a.className;return q(a)&&a.match(/\S+/g)||[]}
function I(a,b){return a.classList?a.classList.contains(b):Xb(Oo(a),b)}
function J(a,b){a.classList?a.classList.add(b):I(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Po(a,b){if(a.classList)y(b,function(b){J(a,b)});
else{var c={};y(Oo(a),function(a){c[a]=!0});
y(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function K(a,b){a.classList?a.classList.remove(b):I(a,b)&&(a.className=Pb(Oo(a),function(a){return a!=b}).join(" "))}
function Qo(a,b){a.classList?y(b,function(b){K(a,b)}):a.className=Pb(Oo(a),function(a){return!Xb(b,a)}).join(" ")}
function Ro(a,b,c){c?J(a,b):K(a,b)}
function So(a,b,c){I(a,b)&&(K(a,b),J(a,c))}
function To(a,b){var c=!I(a,b);Ro(a,b,c);return c}
;var Uo=!B&&!md();function Vo(a,b){if(/-[a-z]/.test(b))return null;if(Uo&&a.dataset){if(od()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var Wo="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Xo(){}
Xo.prototype.next=function(){throw Wo;};
Xo.prototype.gb=function(){return this};
function Yo(a){if(a instanceof Xo)return a;if("function"==typeof a.gb)return a.gb(!1);if(Ca(a)){var b=0,c=new Xo;c.next=function(){for(;;){if(b>=a.length)throw Wo;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Zo(a,b,c){if(Ca(a))try{y(a,b,c)}catch(d){if(d!==Wo)throw d;}else{a=Yo(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Wo)throw d;}}}
function $o(a){if(Ca(a))return cc(a);a=Yo(a);var b=[];Zo(a,function(a){b.push(a)});
return b}
;function ap(a,b){this.l={};this.j=[];this.Sa=this.w=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof ap?(c=a.Fa(),d=a.pa()):(c=sc(a),d=rc(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}
g=ap.prototype;g.pa=function(){bp(this);for(var a=[],b=0;b<this.j.length;b++)a.push(this.l[this.j[b]]);return a};
g.Fa=function(){bp(this);return this.j.concat()};
g.equals=function(a,b){if(this===a)return!0;if(this.w!=a.w)return!1;var c=b||cp;bp(this);for(var d,e=0;d=this.j[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function cp(a,b){return a===b}
g.isEmpty=function(){return 0==this.w};
g.clear=function(){this.l={};this.Sa=this.w=this.j.length=0};
g.remove=function(a){return dp(this.l,a)?(delete this.l[a],this.w--,this.Sa++,this.j.length>2*this.w&&bp(this),!0):!1};
function bp(a){if(a.w!=a.j.length){for(var b=0,c=0;b<a.j.length;){var d=a.j[b];dp(a.l,d)&&(a.j[c++]=d);b++}a.j.length=c}if(a.w!=a.j.length){var e={};for(c=b=0;b<a.j.length;)d=a.j[b],dp(e,d)||(a.j[c++]=d,e[d]=1),b++;a.j.length=c}}
g.get=function(a,b){return dp(this.l,a)?this.l[a]:b};
g.set=function(a,b){dp(this.l,a)||(this.w++,this.j.push(a),this.Sa++);this.l[a]=b};
g.forEach=function(a,b){for(var c=this.Fa(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.clone=function(){return new ap(this)};
g.gb=function(a){bp(this);var b=0,c=this.Sa,d=this,e=new Xo;e.next=function(){if(c!=d.Sa)throw Error("The map has changed since the iterator was created");if(b>=d.j.length)throw Wo;var e=d.j[b++];return a?e:d.l[e]};
return e};
function dp(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function ep(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function fp(a){var b=a.type;switch(q(b)&&b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null;default:return null!=a.value?a.value:null}}
;function gp(a){Hk.call(this);this.l=a;this.j={}}
x(gp,Hk);var hp=[];gp.prototype.Eb=function(a,b,c,d){Ba(b)||(b&&(hp[0]=b.toString()),b=hp);for(var e=0;e<b.length;e++){var f=mo(a,b[e],c||this.handleEvent,d||!1,this.l||this);if(!f)break;this.j[f.key]=f}return this};
gp.prototype.oc=function(a,b,c,d,e){if(Ba(b))for(var f=0;f<b.length;f++)this.oc(a,b[f],c,d,e);else c=c||this.handleEvent,d=Ea(d)?!!d.capture:!!d,e=e||this.l||this,c=oo(c),d=!!d,b=gn(a)?on(a.w,String(b),c,d,e):a?(a=qo(a))?on(a,b,c,d,e):null:null,b&&(vo(b),delete this.j[b.key]);return this};
function ip(a){lc(a.j,function(a,c){this.j.hasOwnProperty(c)&&vo(a)},a);
a.j={}}
gp.prototype.N=function(){gp.K.N.call(this);ip(this)};
gp.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function jp(a){return zb(nb(a.replace(kp,function(a,c){return lp.test(c)?"":" "}).replace(/[\t\n ]+/g," ")))}
var lp=/^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i,kp=/<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;function mp(a){if(m.JSON)try{return m.JSON.parse(a)}catch(b){}return ri(a)}
;function np(a,b){this.j=a;this.l=b}
np.prototype.stringify=function(a){return m.JSON.stringify(a,this.j)};
np.prototype.parse=function(a){return m.JSON.parse(a,this.l)};function op(a,b,c,d,e,f,h,k){this.j=a;this.B=b;this.w=c;this.C=d;this.A=e;this.G=f;this.l=h;this.J=k}
op.prototype.clone=function(){return new op(this.j,this.B,this.w,this.C,this.A,this.G,this.l,this.J)};
op.prototype.equals=function(a){return this.j==a.j&&this.B==a.B&&this.w==a.w&&this.C==a.C&&this.A==a.A&&this.G==a.G&&this.l==a.l&&this.J==a.J};
function pp(a,b){if(0==b)return a.j;if(1==b)return a.l;var c=we(a.j,a.w,b),d=we(a.w,a.A,b),e=we(a.A,a.l,b);c=we(c,d,b);d=we(d,e,b);return we(c,d,b)}
function qp(a,b){var c=(b-a.j)/(a.l-a.j);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=pp(a,c);var k=(pp(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(k))break;else f<b?d=c:e=c,c-=(f-b)/k}for(h=0;1E-6<Math.abs(f-b)&&8>h;h++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=pp(a,c);return c}
function rp(a,b){var c=qp(a,b);if(0==c)c=a.B;else if(1==c)c=a.J;else{var d=we(a.B,a.C,c),e=we(a.C,a.G,c),f=we(a.G,a.J,c);d=we(d,e,c);e=we(e,f,c);c=we(d,e,c)}return c}
;function sp(a,b,c,d,e){this.j=a;this.w=c;this.J=d;this.G=e||1;this.B=45E3;this.A=new gp(this);this.l=new Co;this.l.setInterval(250)}
g=sp.prototype;g.ab=null;g.Ca=!1;g.qb=null;g.Zc=null;g.Ib=null;g.ob=null;g.Ma=null;g.Qa=null;g.eb=null;g.ea=null;g.Kb=0;g.Da=null;g.uc=null;g.bb=null;g.Db=-1;g.ye=!0;g.Ua=!1;g.Kc=0;g.jc=null;var tp={},up={};g=sp.prototype;g.setTimeout=function(a){this.B=a};
function vp(a,b,c){a.ob=1;a.Ma=wp(b.clone());a.eb=c;a.C=!0;xp(a,null)}
function yp(a,b,c,d,e){a.ob=1;a.Ma=wp(b.clone());a.eb=null;a.C=c;e&&(a.ye=!1);xp(a,d)}
function xp(a,b){a.Ib=v();zp(a);a.Qa=a.Ma.clone();Ap(a.Qa,"t",a.G);a.Kb=0;a.ea=a.j.Cc(a.j.Jb()?b:null);0<a.Kc&&(a.jc=new Fo(u(a.Ge,a,a.ea),a.Kc));a.A.Eb(a.ea,"readystatechange",a.lh);var c=a.ab?zc(a.ab):{};a.eb?(a.uc="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.ea.send(a.Qa,a.uc,a.eb,c)):(a.uc="GET",a.ye&&!Zd&&(c.Connection="close"),a.ea.send(a.Qa,a.uc,null,c));a.j.Ba(1)}
g.lh=function(a){a=a.target;var b=this.jc;b&&3==Bp(a)?b.Gf():this.Ge(a)};
g.Ge=function(a){try{if(a==this.ea)a:{var b=Bp(this.ea),c=this.ea.B,d=this.ea.getStatus();if(B&&!ne(10)||Zd&&!me("420+")){if(4>b)break a}else if(3>b||3==b&&!Vd&&!Cp(this.ea))break a;this.Ua||4!=b||7==c||(8==c||0>=d?this.j.Ba(3):this.j.Ba(2));Dp(this);var e=this.ea.getStatus();this.Db=e;var f=Cp(this.ea);(this.Ca=200==e)?(4==b&&Ep(this),this.C?(Fp(this,b,f),Vd&&this.Ca&&3==b&&(this.A.Eb(this.l,"tick",this.jh),this.l.start())):Gp(this,f),this.Ca&&!this.Ua&&(4==b?this.j.dc(this):(this.Ca=!1,zp(this)))):
(this.bb=400==e&&0<f.indexOf("Unknown SID")?3:0,Hp(),Ep(this),Ip(this))}}catch(h){}finally{}};
function Fp(a,b,c){for(var d=!0;!a.Ua&&a.Kb<c.length;){var e=Jp(a,c);if(e==up){4==b&&(a.bb=4,Hp(),d=!1);break}else if(e==tp){a.bb=4;Hp();d=!1;break}else Gp(a,e)}4==b&&0==c.length&&(a.bb=1,Hp(),d=!1);a.Ca=a.Ca&&d;d||(Ep(a),Ip(a))}
g.jh=function(){var a=Bp(this.ea),b=Cp(this.ea);this.Kb<b.length&&(Dp(this),Fp(this,a,b),this.Ca&&4!=a&&zp(this))};
function Jp(a,b){var c=a.Kb,d=b.indexOf("\n",c);if(-1==d)return up;c=Number(b.substring(c,d));if(isNaN(c))return tp;d+=1;if(d+c>b.length)return up;var e=b.substr(d,c);a.Kb=d+c;return e}
function Kp(a,b){a.Ib=v();zp(a);var c=b?window.location.hostname:"";a.Qa=a.Ma.clone();Lp(a.Qa,"DOMAIN",c);Lp(a.Qa,"t",a.G);try{a.Da=new ActiveXObject("htmlfile")}catch(n){Ep(a);a.bb=7;Hp();Ip(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e+="\\x3c";else if(">"==h)e+="\\x3e";else{var k=h;if(k in Eb)h=Eb[k];else if(k in Db)h=Eb[k]=Db[k];else{var l=k.charCodeAt(0);if(31<l&&127>l)h=k;else{if(256>l){if(h="\\x",16>l||256<l)h+="0"}else h="\\u",4096>l&&
(h+="0");h+=l.toString(16).toUpperCase()}h=Eb[k]=h}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=ve(Ic("b/12014412"),d);a.Da.open();a.Da.write(td(c));a.Da.close();a.Da.parentWindow.m=u(a.Zg,a);a.Da.parentWindow.d=u(a.je,a,!0);a.Da.parentWindow.rpcClose=u(a.je,a,!1);c=a.Da.createElement("DIV");a.Da.parentWindow.document.body.appendChild(c);d=Tc(a.Qa.toString());d=qb(Rc(d));d=ve(Ic("b/12014412"),'<iframe src="'+d+'"></iframe>');Cd(c,d);a.j.Ba(1)}
g.Zg=function(a){Mp(u(this.Yg,this,a),0)};
g.Yg=function(a){this.Ua||(Dp(this),Gp(this,a),zp(this))};
g.je=function(a){Mp(u(this.Xg,this,a),0)};
g.Xg=function(a){this.Ua||(Ep(this),this.Ca=a,this.j.dc(this),this.j.Ba(4))};
g.cancel=function(){this.Ua=!0;Ep(this)};
function zp(a){a.Zc=v()+a.B;Np(a,a.B)}
function Np(a,b){if(null!=a.qb)throw Error("WatchDog timer not null");a.qb=Mp(u(a.eh,a),b)}
function Dp(a){a.qb&&(m.clearTimeout(a.qb),a.qb=null)}
g.eh=function(){this.qb=null;var a=v();0<=a-this.Zc?(2!=this.ob&&this.j.Ba(3),Ep(this),this.bb=2,Hp(),Ip(this)):Np(this,this.Zc-a)};
function Ip(a){a.j.Kd()||a.Ua||a.j.dc(a)}
function Ep(a){Dp(a);Jk(a.jc);a.jc=null;a.l.stop();ip(a.A);if(a.ea){var b=a.ea;a.ea=null;b.abort();b.dispose()}a.Da&&(a.Da=null)}
function Gp(a,b){try{a.j.ee(a,b),a.j.Ba(4)}catch(c){}}
;function Op(a){if(a.pa&&"function"==typeof a.pa)return a.pa();if(q(a))return a.split("");if(Ca(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return rc(a)}
function Pp(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(Ca(a)||q(a))y(a,b,c);else{if(a.Fa&&"function"==typeof a.Fa)var d=a.Fa();else if(a.pa&&"function"==typeof a.pa)d=void 0;else if(Ca(a)||q(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=sc(a);e=Op(a);f=e.length;for(var h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}}
;function Qp(a,b){this.w=this.J=this.A="";this.G=null;this.B=this.j="";this.C=!1;var c;a instanceof Qp?(this.C=p(b)?b:a.C,Rp(this,a.A),this.J=a.J,Sp(this,a.w),Tp(this,a.G),this.j=a.j,Up(this,a.l.clone()),this.B=a.B):a&&(c=String(a).match(Lg))?(this.C=!!b,Rp(this,c[1]||"",!0),this.J=Vp(c[2]||""),Sp(this,c[3]||"",!0),Tp(this,c[4]),this.j=Vp(c[5]||"",!0),Up(this,c[6]||"",!0),this.B=Vp(c[7]||"")):(this.C=!!b,this.l=new Wp(null,0,this.C))}
Qp.prototype.toString=function(){var a=[],b=this.A;b&&a.push(Xp(b,Yp,!0),":");var c=this.w;if(c||"file"==b)a.push("//"),(b=this.J)&&a.push(Xp(b,Yp,!0),"@"),a.push(ob(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.G,null!=c&&a.push(":",String(c));if(c=this.j)this.w&&"/"!=c.charAt(0)&&a.push("/"),a.push(Xp(c,"/"==c.charAt(0)?Zp:$p,!0));(c=this.l.toString())&&a.push("?",c);(c=this.B)&&a.push("#",Xp(c,aq));return a.join("")};
Qp.prototype.resolve=function(a){var b=this.clone(),c=!!a.A;c?Rp(b,a.A):c=!!a.J;c?b.J=a.J:c=!!a.w;c?Sp(b,a.w):c=null!=a.G;var d=a.j;if(c)Tp(b,a.G);else if(c=!!a.j){if("/"!=d.charAt(0))if(this.w&&!this.j)d="/"+d;else{var e=b.j.lastIndexOf("/");-1!=e&&(d=b.j.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.j=d:c=""!==a.l.toString();c?Up(b,a.l.clone()):c=!!a.B;c&&(b.B=a.B);return b};
Qp.prototype.clone=function(){return new Qp(this)};
function Rp(a,b,c){a.A=c?Vp(b,!0):b;a.A&&(a.A=a.A.replace(/:$/,""))}
function Sp(a,b,c){a.w=c?Vp(b,!0):b}
function Tp(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.G=b}else a.G=null}
function Up(a,b,c){b instanceof Wp?(a.l=b,bq(a.l,a.C)):(c||(b=Xp(b,cq)),a.l=new Wp(b,0,a.C))}
function Lp(a,b,c){a.l.set(b,c)}
function Ap(a,b,c){Ba(c)||(c=[String(c)]);dq(a.l,b,c)}
function wp(a){Lp(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^v()).toString(36));return a}
function eq(a){return a instanceof Qp?a.clone():new Qp(a,void 0)}
function fq(a,b,c,d){var e=new Qp(null,void 0);a&&Rp(e,a);b&&Sp(e,b);c&&Tp(e,c);d&&(e.j=d);return e}
function Vp(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Xp(a,b,c){return q(a)?(a=encodeURI(a).replace(b,gq),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function gq(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Yp=/[#\/\?@]/g,$p=/[#\?:]/g,Zp=/[#\?]/g,cq=/[#\?@]/g,aq=/#/g;function Wp(a,b,c){this.l=this.j=null;this.w=a||null;this.A=!!c}
function hq(a){a.j||(a.j=new ap,a.l=0,a.w&&Og(a.w,function(b,c){a.add(pb(b),c)}))}
g=Wp.prototype;g.add=function(a,b){hq(this);this.w=null;a=iq(this,a);var c=this.j.get(a);c||this.j.set(a,c=[]);c.push(b);this.l=this.l+1;return this};
g.remove=function(a){hq(this);a=iq(this,a);return dp(this.j.l,a)?(this.w=null,this.l=this.l-this.j.get(a).length,this.j.remove(a)):!1};
g.clear=function(){this.j=this.w=null;this.l=0};
g.isEmpty=function(){hq(this);return 0==this.l};
function jq(a,b){hq(a);b=iq(a,b);return dp(a.j.l,b)}
g.forEach=function(a,b){hq(this);this.j.forEach(function(c,d){y(c,function(c){a.call(b,c,d,this)},this)},this)};
g.Fa=function(){hq(this);for(var a=this.j.pa(),b=this.j.Fa(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.pa=function(a){hq(this);var b=[];if(q(a))jq(this,a)&&(b=bc(b,this.j.get(iq(this,a))));else{a=this.j.pa();for(var c=0;c<a.length;c++)b=bc(b,a[c])}return b};
g.set=function(a,b){hq(this);this.w=null;a=iq(this,a);jq(this,a)&&(this.l=this.l-this.j.get(a).length);this.j.set(a,[b]);this.l=this.l+1;return this};
g.get=function(a,b){var c=a?this.pa(a):[];return 0<c.length?String(c[0]):b};
function dq(a,b,c){a.remove(b);0<c.length&&(a.w=null,a.j.set(iq(a,b),cc(c)),a.l=a.l+c.length)}
g.toString=function(){if(this.w)return this.w;if(!this.j)return"";for(var a=[],b=this.j.Fa(),c=0;c<b.length;c++){var d=b[c],e=ob(d);d=this.pa(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+ob(d[f]));a.push(h)}}return this.w=a.join("&")};
g.clone=function(){var a=new Wp;a.w=this.w;this.j&&(a.j=this.j.clone(),a.l=this.l);return a};
function iq(a,b){var c=String(b);a.A&&(c=c.toLowerCase());return c}
function bq(a,b){b&&!a.A&&(hq(a),a.w=null,a.j.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(this.remove(b),dq(this,c,a))},a));
a.A=b}
g.extend=function(a){for(var b=0;b<arguments.length;b++)Pp(arguments[b],function(a,b){this.add(b,a)},this)};function kq(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;lq(a,b,function(e){e?c(!0):m.setTimeout(function(){kq(a,b,c,d,f)},f)})}}
function lq(a,b,c){var d=new Image;d.onload=function(){try{mq(d),c(!0)}catch(e){}};
d.onerror=function(){try{mq(d),c(!1)}catch(e){}};
d.onabort=function(){try{mq(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{mq(d),c(!1)}catch(e){}};
m.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function mq(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function nq(a){this.j=a;this.l=new np}
g=nq.prototype;g.Ic=null;g.sa=null;g.kc=!1;g.Ce=null;g.Tb=null;g.Oc=null;g.Jc=null;g.va=null;g.Ja=-1;g.Cb=null;g.wb=null;g.connect=function(a){this.Jc=a;a=oq(this.j,null,this.Jc);Hp();this.Ce=v();var b=this.j.H;null!=b?(this.Cb=b[0],(this.wb=b[1])?(this.va=1,pq(this)):(this.va=2,qq(this))):(Ap(a,"MODE","init"),this.sa=new sp(this,0,void 0,void 0,void 0),this.sa.ab=this.Ic,yp(this.sa,a,!1,null,!0),this.va=0)};
function pq(a){var b=oq(a.j,a.wb,"/mail/images/cleardot.gif");wp(b);kq(b.toString(),5E3,u(a.uf,a),3,2E3);a.Ba(1)}
g.uf=function(a){if(a)this.va=2,qq(this);else{Hp();var b=this.j;b.Aa=b.Na.Ja;rq(b,9)}a&&this.Ba(2)};
function qq(a){var b=a.j.F;if(null!=b)Hp(),b?(Hp(),sq(a.j,a,!1)):(Hp(),sq(a.j,a,!0));else if(a.sa=new sp(a,0,void 0,void 0,void 0),a.sa.ab=a.Ic,b=a.j,b=oq(b,b.Jb()?a.Cb:null,a.Jc),Hp(),!B||ne(10))Ap(b,"TYPE","xmlhttp"),yp(a.sa,b,!1,a.Cb,!1);else{Ap(b,"TYPE","html");var c=a.sa;a=!!a.Cb;c.ob=3;c.Ma=wp(b.clone());Kp(c,a)}}
g.Cc=function(a){return this.j.Cc(a)};
g.abort=function(){this.sa&&(this.sa.cancel(),this.sa=null);this.Ja=-1};
g.Kd=function(){return!1};
g.ee=function(a,b){this.Ja=a.Db;if(0==this.va)if(b){try{var c=this.l.parse(b)}catch(d){c=this.j;c.Aa=this.Ja;rq(c,2);return}this.Cb=c[0];this.wb=c[1]}else c=this.j,c.Aa=this.Ja,rq(c,2);else if(2==this.va)if(this.kc)Hp(),this.Oc=v();else if("11111"==b){if(Hp(),this.kc=!0,this.Tb=v(),c=this.Tb-this.Ce,!B||ne(10)||500>c)this.Ja=200,this.sa.cancel(),Hp(),sq(this.j,this,!0)}else Hp(),this.Tb=this.Oc=v(),this.kc=!1};
g.dc=function(){this.Ja=this.sa.Db;if(this.sa.Ca)0==this.va?this.wb?(this.va=1,pq(this)):(this.va=2,qq(this)):2==this.va&&((!B||ne(10)?!this.kc:200>this.Oc-this.Tb)?(Hp(),sq(this.j,this,!1)):(Hp(),sq(this.j,this,!0)));else{0==this.va?Hp():2==this.va&&Hp();var a=this.j;a.Aa=this.Ja;rq(a,2)}};
g.Jb=function(){return this.j.Jb()};
g.isActive=function(){return this.j.isActive()};
g.Ba=function(a){this.j.Ba(a)};function tq(a){zo.call(this);this.headers=new ap;this.W=a||null;this.l=!1;this.O=this.j=null;this.da="";this.B=0;this.C="";this.A=this.aa=this.H=this.Z=!1;this.M=0;this.F=null;this.Ha="";this.ga=this.ia=!1}
x(tq,zo);var uq=/^https?$/i,vq=["POST","PUT"];g=tq.prototype;
g.send=function(a,b,c,d){if(this.j)throw Error("[goog.net.XhrIo] Object is active with another request="+this.da+"; newUri="+a);b=b?b.toUpperCase():"GET";this.da=a;this.C="";this.B=0;this.Z=!1;this.l=!0;this.j=this.W?wk(this.W):wk(uk);this.O=this.W?sk(this.W):sk(uk);this.j.onreadystatechange=u(this.de,this);try{this.getStatus(),this.aa=!0,this.j.open(b,String(a),!0),this.aa=!1}catch(f){this.getStatus();wq(this,f);return}a=c||"";var e=this.headers.clone();d&&Pp(d,function(a,b){e.set(b,a)});
d=Ub(e.Fa(),xq);c=m.FormData&&a instanceof m.FormData;!Xb(vq,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.j.setRequestHeader(b,a)},this);
this.Ha&&(this.j.responseType=this.Ha);"withCredentials"in this.j&&this.j.withCredentials!==this.ia&&(this.j.withCredentials=this.ia);try{yq(this),0<this.M&&(this.ga=zq(this.j),this.getStatus(),this.ga?(this.j.timeout=this.M,this.j.ontimeout=u(this.Dd,this)):this.F=Do(this.Dd,this.M,this)),this.getStatus(),this.H=!0,this.j.send(a),this.H=!1}catch(f){this.getStatus(),wq(this,f)}};
function zq(a){return B&&me(9)&&xa(a.timeout)&&p(a.ontimeout)}
function xq(a){return"content-type"==a.toLowerCase()}
g.Dd=function(){"undefined"!=typeof va&&this.j&&(this.C="Timed out after "+this.M+"ms, aborting",this.B=8,this.getStatus(),Ao(this,"timeout"),this.abort(8))};
function wq(a,b){a.l=!1;a.j&&(a.A=!0,a.j.abort(),a.A=!1);a.C=b;a.B=5;Aq(a);Bq(a)}
function Aq(a){a.Z||(a.Z=!0,Ao(a,"complete"),Ao(a,"error"))}
g.abort=function(a){this.j&&this.l&&(this.getStatus(),this.l=!1,this.A=!0,this.j.abort(),this.A=!1,this.B=a||7,Ao(this,"complete"),Ao(this,"abort"),Bq(this))};
g.N=function(){this.j&&(this.l&&(this.l=!1,this.A=!0,this.j.abort(),this.A=!1),Bq(this,!0));tq.K.N.call(this)};
g.de=function(){this.T()||(this.aa||this.H||this.A?Cq(this):this.Qg())};
g.Qg=function(){Cq(this)};
function Cq(a){if(a.l&&"undefined"!=typeof va)if(a.O[1]&&4==Bp(a)&&2==a.getStatus())a.getStatus();else if(a.H&&4==Bp(a))Do(a.de,0,a);else if(Ao(a,"readystatechange"),4==Bp(a)){a.getStatus();a.l=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.da).match(Lg)[1]||null;if(!f&&m.self&&m.self.location){var h=m.self.location.protocol;f=h.substr(0,h.length-1)}e=!uq.test(f?
f.toLowerCase():"")}d=e}if(d)Ao(a,"complete"),Ao(a,"success");else{a.B=6;try{var k=2<Bp(a)?a.j.statusText:""}catch(l){k=""}a.C=k+" ["+a.getStatus()+"]";Aq(a)}}finally{Bq(a)}}}
function Bq(a,b){if(a.j){yq(a);var c=a.j,d=a.O[0]?ya:null;a.j=null;a.O=null;b||Ao(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function yq(a){a.j&&a.ga&&(a.j.ontimeout=null);a.F&&(m.clearTimeout(a.F),a.F=null)}
g.isActive=function(){return!!this.j};
function Bp(a){return a.j?a.j.readyState:0}
g.getStatus=function(){try{return 2<Bp(this)?this.j.status:-1}catch(a){return-1}};
function Cp(a){try{return a.j?a.j.responseText:""}catch(b){return""}}
;function Dq(a,b,c,d){this.J=a||null;this.j=1;this.l=[];this.A=[];this.B=new np;this.H=b||null;this.F=null!=c?c:null;this.C=d||!1}
function Eq(a,b){this.l=a;this.j=b;this.context=null}
g=Dq.prototype;g.xb=null;g.la=null;g.ba=null;g.Hc=null;g.Wb=null;g.kd=null;g.Xb=null;g.Fb=0;g.pg=0;g.ha=null;g.Oa=null;g.Ia=null;g.Xa=null;g.Na=null;g.sc=null;g.jb=-1;g.Nd=-1;g.Aa=-1;g.yb=0;g.hb=0;g.Va=8;var Fq=new zo;function Gq(a){Xm.call(this,"statevent",a)}
x(Gq,Xm);function Hq(a,b){Xm.call(this,"timingevent",a);this.size=b}
x(Hq,Xm);function Iq(a){Xm.call(this,"serverreachability",a)}
x(Iq,Xm);g=Dq.prototype;g.connect=function(a,b,c,d,e){Hp();this.Hc=b;this.xb=c||{};d&&p(e)&&(this.xb.OSID=d,this.xb.OAID=e);this.C?(Mp(u(this.wd,this,a),100),Jq(this)):this.wd(a)};
function Kq(a){Lq(a);if(3==a.j){var b=a.Fb++,c=a.Wb.clone();Lp(c,"SID",a.w);Lp(c,"RID",b);Lp(c,"TYPE","terminate");Mq(a,c);b=new sp(a,0,a.w,b,void 0);b.ob=2;b.Ma=wp(c.clone());(new Image).src=b.Ma;b.Ib=v();zp(b)}Nq(a)}
g.wd=function(a){this.Na=new nq(this);this.Na.Ic=null;this.Na.l=this.B;this.Na.connect(a)};
function Jq(a){a.zf(1,0);a.Wb=oq(a,null,a.Hc);Oq(a)}
function Lq(a){a.Na&&(a.Na.abort(),a.Na=null);a.ba&&(a.ba.cancel(),a.ba=null);a.Ia&&(m.clearTimeout(a.Ia),a.Ia=null);Pq(a);a.la&&(a.la.cancel(),a.la=null);a.Oa&&(m.clearTimeout(a.Oa),a.Oa=null)}
function Qq(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");a.l.push(new Eq(a.pg++,b));2!=a.j&&3!=a.j||Oq(a)}
g.Kd=function(){return 0==this.j};
function Oq(a){a.la||a.Oa||(a.Oa=Mp(u(a.ie,a),0),a.yb=0)}
g.ie=function(a){this.Oa=null;Rq(this,a)};
function Rq(a,b){if(1==a.j){if(!b){a.Fb=Math.floor(1E5*Math.random());var c=a.Fb++,d=new sp(a,0,"",c,void 0);d.ab=null;var e=Sq(a),f=a.Wb.clone();Lp(f,"RID",c);a.J&&Lp(f,"CVER",a.J);Mq(a,f);vp(d,f,e);a.la=d;a.j=2}}else 3==a.j&&(b?Tq(a,b):0==a.l.length||a.la||Tq(a))}
function Tq(a,b){if(b)if(6<a.Va){a.l=a.A.concat(a.l);a.A.length=0;var c=a.Fb-1;var d=Sq(a)}else c=b.J,d=b.eb;else c=a.Fb++,d=Sq(a);var e=a.Wb.clone();Lp(e,"SID",a.w);Lp(e,"RID",c);Lp(e,"AID",a.jb);Mq(a,e);c=new sp(a,0,a.w,c,a.yb+1);c.ab=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.la=c;vp(c,e,d)}
function Mq(a,b){if(a.ha){var c=a.ha.Ad(a);c&&lc(c,function(a,c){Lp(b,c,a)})}}
function Sq(a){var b=Math.min(a.l.length,1E3),c=["count="+b];if(6<a.Va&&0<b){var d=a.l[0].l;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.l[e].l,h=a.l[e].j;f=6>=a.Va?e:f-d;try{lc(h,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.A=a.A.concat(a.l.splice(0,b));
return c.join("&")}
function Uq(a){a.ba||a.Ia||(a.G=1,a.Ia=Mp(u(a.he,a),0),a.hb=0)}
function Vq(a){if(a.ba||a.Ia||3<=a.hb)return!1;a.G++;a.Ia=Mp(u(a.he,a),Wq(a,a.hb));a.hb++;return!0}
g.he=function(){this.Ia=null;this.ba=new sp(this,0,this.w,"rpc",this.G);this.ba.ab=null;this.ba.Kc=0;var a=this.kd.clone();Lp(a,"RID","rpc");Lp(a,"SID",this.w);Lp(a,"CI",this.sc?"0":"1");Lp(a,"AID",this.jb);Mq(this,a);if(!B||ne(10))Lp(a,"TYPE","xmlhttp"),yp(this.ba,a,!0,this.Xb,!1);else{Lp(a,"TYPE","html");var b=this.ba,c=!!this.Xb;b.ob=3;b.Ma=wp(a.clone());Kp(b,c)}};
function sq(a,b,c){a.sc=c;a.Aa=b.Ja;a.C||Jq(a)}
g.ee=function(a,b){if(0!=this.j&&(this.ba==a||this.la==a))if(this.Aa=a.Db,this.la==a&&3==this.j)if(7<this.Va){try{var c=this.B.parse(b)}catch(f){c=null}if(Ba(c)&&3==c.length)if(0==c[0])a:{if(!this.Ia){if(this.ba)if(this.ba.Ib+3E3<this.la.Ib)Pq(this),this.ba.cancel(),this.ba=null;else break a;Vq(this);Hp()}}else this.Nd=c[1],0<this.Nd-this.jb&&37500>c[2]&&this.sc&&0==this.hb&&!this.Xa&&(this.Xa=Mp(u(this.sg,this),6E3));else rq(this,11)}else b!=qk.li.j&&rq(this,11);else if(this.ba==a&&Pq(this),!mb(b)){c=
this.B.parse(b);Ba(c);for(var d=0;d<c.length;d++){var e=c[d];this.jb=e[0];e=e[1];2==this.j?"c"==e[0]?(this.w=e[1],this.Xb=e[2],e=e[3],null!=e?this.Va=e:this.Va=6,this.j=3,this.ha&&this.ha.qd(this),this.kd=oq(this,this.Jb()?this.Xb:null,this.Hc),Uq(this)):"stop"==e[0]&&rq(this,7):3==this.j&&("stop"==e[0]?rq(this,7):"noop"!=e[0]&&this.ha&&this.ha.pd(this,e),this.hb=0)}}};
g.sg=function(){null!=this.Xa&&(this.Xa=null,this.ba.cancel(),this.ba=null,Vq(this),Hp())};
function Pq(a){null!=a.Xa&&(m.clearTimeout(a.Xa),a.Xa=null)}
g.dc=function(a){if(this.ba==a){Pq(this);this.ba=null;var b=2}else if(this.la==a)this.la=null,b=1;else return;this.Aa=a.Db;if(0!=this.j)if(a.Ca)1==b?(v(),Ao(Fq,new Hq(Fq,a.eb?a.eb.length:0)),Oq(this),this.A.length=0):Uq(this);else{var c=a.bb,d;if(!(d=3==c||7==c||0==c&&0<this.Aa)){if(d=1==b)this.la||this.Oa||1==this.j||2<=this.yb?d=!1:(this.Oa=Mp(u(this.ie,this,a),Wq(this,this.yb)),this.yb++,d=!0);d=!(d||2==b&&Vq(this))}if(d)switch(c){case 1:rq(this,5);break;case 4:rq(this,10);break;case 3:rq(this,
6);break;case 7:rq(this,12);break;default:rq(this,2)}}};
function Wq(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
g.zf=function(a){if(!Xb(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
function rq(a,b){if(2==b||9==b){var c=null;a.ha&&(c=null);var d=u(a.vh,a);c||(c=new Qp("//www.google.com/images/cleardot.gif"),wp(c));lq(c.toString(),1E4,d)}else Hp();Xq(a,b)}
g.vh=function(a){a?Hp():(Hp(),Xq(this,8))};
function Xq(a,b){a.j=0;a.ha&&a.ha.od(a,b);Nq(a);Lq(a)}
function Nq(a){a.j=0;a.Aa=-1;if(a.ha)if(0==a.A.length&&0==a.l.length)a.ha.Ac(a);else{var b=cc(a.A),c=cc(a.l);a.A.length=0;a.l.length=0;a.ha.Ac(a,b,c)}}
function oq(a,b,c){var d=eq(c);if(""!=d.w)b&&Sp(d,b+"."+d.w),Tp(d,d.G);else{var e=window.location;d=fq(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c)}a.xb&&lc(a.xb,function(a,b){Lp(d,b,a)});
Lp(d,"VER",a.Va);Mq(a,d);return d}
g.Cc=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new tq;a.ia=!1;return a};
g.isActive=function(){return!!this.ha&&this.ha.isActive(this)};
function Mp(a,b){if(!Da(a))throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){a()},b)}
g.Ba=function(){Ao(Fq,new Iq(Fq))};
function Hp(){Ao(Fq,new Gq(Fq))}
g.Jb=function(){return!(!B||ne(10))};
function Yq(){}
g=Yq.prototype;g.qd=function(){};
g.pd=function(){};
g.od=function(){};
g.Ac=function(){};
g.Ad=function(){return{}};
g.isActive=function(){return!0};function Zq(a){return(a=a.exec(hd))?a[1]:""}
var $q=function(){if(Eg)return Zq(/Firefox\/([0-9.]+)/);if(B||Wd||Vd)return le;if(Ig)return Ud()?Zq(/CriOS\/([0-9.]+)/):Zq(/Chrome\/([0-9.]+)/);if(Jg&&!Ud())return Zq(/Version\/([0-9.]+)/);if(Fg||Gg){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(hd);if(a)return a[1]+"."+a[2]}else if(Hg)return(a=Zq(/Android\s+([0-9.]+)/))?a:Zq(/Version\/([0-9.]+)/);return""}();
function ar(a){return 0<=Ib($q,a)}
;function br(a,b,c,d,e,f,h){var k;if(k=c.offsetParent){var l="HTML"==k.tagName||"BODY"==k.tagName;if(!l||"static"!=If(k,"position")){var n=Mf(k);if(!l){l=Tf(k);var w;if(w=l){w=Jg&&ar(10);var F;if(F=fe)F=0<=Ib(Ok,10);w=Yd||w||F}l=w?-k.scrollLeft:!l||Xd&&me("8")||"visible"==If(k,"overflowX")?k.scrollLeft:k.scrollWidth-k.clientWidth-k.scrollLeft;n=Ee(n,new De(l,k.scrollTop))}}}k=n||new De;n=Sf(a);if(l=Lf(a)){var W=new Df(l.left,l.top,l.right-l.left,l.bottom-l.top);l=Math.max(n.left,W.left);w=Math.min(n.left+
n.width,W.left+W.width);l<=w&&(F=Math.max(n.top,W.top),W=Math.min(n.top+n.height,W.top+W.height),F<=W&&(n.left=l,n.top=F,n.width=w-l,n.height=W-F))}l=Ge(a);F=Ge(c);if(l.j!=F.j){w=l.j.body;F=Ue(F.j);W=new De(0,0);var ba=(ba=Ie(w))?Ue(ba):window;if(Ld(ba,"parent")){var la=w;do{var Ra=ba==F?Mf(la):Of(la);W.x+=Ra.x;W.y+=Ra.y}while(ba&&ba!=F&&ba!=ba.parent&&(la=ba.frameElement)&&(ba=ba.parent))}w=Ee(W,Mf(w));!B||ne(9)||Re(l.j)||(w=Ee(w,Se(l.j)));n.left+=w.x;n.top+=w.y}a=cr(a,b);b=n.left;a&4?b+=n.width:
a&2&&(b+=n.width/2);b=new De(b,n.top+(a&1?n.height:0));b=Ee(b,k);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var wa;h&&(wa=Lf(c))&&(wa.top-=k.y,wa.right-=k.x,wa.bottom-=k.y,wa.left-=k.x);return dr(b,c,d,f,wa,h,void 0)}
function dr(a,b,c,d,e,f,h){a=a.clone();var k=cr(b,c);c=Qf(b);h=h?h.clone():c.clone();a=a.clone();h=h.clone();var l=0;if(d||0!=k)k&4?a.x-=h.width+(d?d.right:0):k&2?a.x-=h.width/2:d&&(a.x+=d.left),k&1?a.y-=h.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;k=h;l=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,l|=1);if(f&16){var n=d.x;d.x<e.left&&(d.x=e.left,l|=4);d.x+k.width>e.right&&(k.width=Math.min(e.right-d.x,
n+k.width-e.left),k.width=Math.max(k.width,0),l|=4)}d.x+k.width>e.right&&f&1&&(d.x=Math.max(e.right-k.width,e.left),l|=1);f&2&&(l|=(d.x<e.left?16:0)|(d.x+k.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,l|=2);f&32&&(n=d.y,d.y<e.top&&(d.y=e.top,l|=8),d.y+k.height>e.bottom&&(k.height=Math.min(e.bottom-d.y,n+k.height-e.top),k.height=Math.max(k.height,0),l|=8));d.y+k.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-k.height,e.top),l|=2);f&8&&(l|=(d.y<e.top?64:0)|(d.y+k.height>e.bottom?128:0));e=l}else e=
256;l=e}f=new Df(0,0,0,0);f.left=a.x;f.top=a.y;f.width=h.width;f.height=h.height;e=l;if(e&496)return e;a=new De(f.left,f.top);a instanceof De?(h=a.x,a=a.y):(h=a,a=void 0);b.style.left=Pf(h,!1);b.style.top=Pf(a,!1);h=new Fe(f.width,f.height);c==h||c&&h&&c.width==h.width&&c.height==h.height||(c=h,a=Re(Ge(Ie(b)).j),!B||me("10")||a&&me("8")?(b=b.style,Yd?b.MozBoxSizing="border-box":Zd?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,0)+
"px"):(h=b.style,a?(B?(a=Vf(b,"paddingLeft"),f=Vf(b,"paddingRight"),d=Vf(b,"paddingTop"),k=Vf(b,"paddingBottom"),a=new xf(d,f,k,a)):(a=Hf(b,"paddingLeft"),f=Hf(b,"paddingRight"),d=Hf(b,"paddingTop"),k=Hf(b,"paddingBottom"),a=new xf(parseFloat(d),parseFloat(f),parseFloat(k),parseFloat(a))),B&&!ne(9)?(f=Xf(b,"borderLeft"),d=Xf(b,"borderRight"),k=Xf(b,"borderTop"),b=Xf(b,"borderBottom"),b=new xf(k,d,b,f)):(f=Hf(b,"borderLeftWidth"),d=Hf(b,"borderRightWidth"),k=Hf(b,"borderTopWidth"),b=Hf(b,"borderBottomWidth"),
b=new xf(parseFloat(k),parseFloat(d),parseFloat(b),parseFloat(f))),h.pixelWidth=c.width-b.left-a.left-a.right-b.right,h.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(h.pixelWidth=c.width,h.pixelHeight=c.height)));return e}
function cr(a,b){return(b&8&&Tf(a)?b^4:b)&-9}
;function er(a){Hk.call(this);this.B=1;this.w=[];this.A=0;this.j=[];this.l={};this.C=!!a}
x(er,Hk);g=er.prototype;g.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.B;this.j[e]=a;this.j[e+1]=b;this.j[e+2]=c;this.B=e+3;d.push(e);return e};
function fr(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.wa(d),b.apply(void 0,arguments))},a)}
function gr(a,b,c,d){if(b=a.l[b]){var e=a.j;if(b=Ub(b,function(a){return e[a+1]==c&&e[a+2]==d}))return a.wa(b)}return!1}
g.wa=function(a){var b=this.j[a];if(b){var c=this.l[b];0!=this.A?(this.w.push(a),this.j[a+1]=ya):(c&&Zb(c,a),delete this.j[a],delete this.j[a+1],delete this.j[a+2])}return!!b};
g.ma=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.C)for(e=0;e<c.length;e++){var h=c[e];hr(this.j[h+1],this.j[h+2],d)}else{this.A++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.j[h+1].apply(this.j[h+2],d)}finally{if(this.A--,0<this.w.length&&0==this.A)for(;c=this.w.pop();)this.wa(c)}}return 0!=e}return!1};
function hr(a,b,c){oj(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.l[a];b&&(y(b,this.wa,this),delete this.l[a])}else this.j.length=0,this.l={}};
function ir(a,b){if(b){var c=a.l[b];return c?c.length:0}c=0;for(var d in a.l)c+=ir(a,d);return c}
g.N=function(){er.K.N.call(this);this.clear();this.w.length=0};function jr(a){this.j=a}
jr.prototype.set=function(a,b){p(b)?this.j.set(a,si(b)):this.j.remove(a)};
jr.prototype.get=function(a){try{var b=this.j.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
jr.prototype.remove=function(a){this.j.remove(a)};function kr(a){this.j=a}
x(kr,jr);function lr(a){this.data=a}
function mr(a){return!p(a)||a instanceof lr?a:new lr(a)}
kr.prototype.set=function(a,b){kr.K.set.call(this,a,mr(b))};
kr.prototype.l=function(a){a=kr.K.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
kr.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function nr(a){this.j=a}
x(nr,kr);function or(a){var b=a.creation;a=a.expiration;return!!a&&a<v()||!!b&&b>v()}
nr.prototype.set=function(a,b,c){if(b=mr(b)){if(c){if(c<v()){nr.prototype.remove.call(this,a);return}b.expiration=c}b.creation=v()}nr.K.set.call(this,a,b)};
nr.prototype.l=function(a,b){var c=nr.K.l.call(this,a);if(c)if(!b&&or(c))nr.prototype.remove.call(this,a);else return c};function pr(a){this.j=a}
x(pr,nr);function qr(a,b){var c=[];Zo(b,function(a){try{var b=pr.prototype.l.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(b)?or(b)&&c.push(a):c.push(a)},a);
return c}
function rr(a,b){var c=qr(a,b);y(c,function(a){pr.prototype.remove.call(this,a)},a)}
;function sr(){}
;function tr(){}
x(tr,sr);tr.prototype.clear=function(){var a=$o(this.gb(!0)),b=this;y(a,function(a){b.remove(a)})};function ur(a){this.j=a}
x(ur,tr);g=ur.prototype;g.isAvailable=function(){if(!this.j)return!1;try{return this.j.setItem("__sak","1"),this.j.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.j.setItem(a,b)}catch(c){if(0==this.j.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.j.getItem(a);if(!q(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.j.removeItem(a)};
g.gb=function(a){var b=0,c=this.j,d=new Xo;d.next=function(){if(b>=c.length)throw Wo;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!q(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.j.clear()};
g.key=function(a){return this.j.key(a)};function vr(){var a=null;try{a=window.localStorage||null}catch(b){}this.j=a}
x(vr,ur);function wr(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.j=a}
x(wr,ur);function xr(){this.j=[];this.l=[]}
g=xr.prototype;g.isEmpty=function(){return 0==this.j.length&&0==this.l.length};
g.clear=function(){this.j=[];this.l=[]};
g.contains=function(a){return Xb(this.j,a)||Xb(this.l,a)};
g.remove=function(a){var b=this.j;var c=Ob(b,a);0<=c?($b(b,c),b=!0):b=!1;return b||Zb(this.l,a)};
g.pa=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.l.length;for(b=0;b<c;++b)a.push(this.l[b]);return a};function yr(){}
za(yr);yr.prototype.j=0;function zr(a){zo.call(this);this.C=a||Ge();this.da=null;this.ib=!1;this.l=null;this.A=void 0;this.B=this.M=this.O=null;this.ga=!1}
x(zr,zo);g=zr.prototype;g.ag=yr.getInstance();g.getId=function(){return this.da||(this.da=":"+(this.ag.j++).toString(36))};
g.Dc=function(){return this.l};
g.Vc=function(a){if(this.O&&this.O!=a)throw Error("Method not supported");zr.K.Vc.call(this,a)};
g.Rb=function(){this.ib=!0;Ar(this,function(a){!a.ib&&a.Dc()&&a.Rb()})};
g.Ya=function(){Ar(this,function(a){a.ib&&a.Ya()});
this.A&&ip(this.A);this.ib=!1};
g.N=function(){this.ib&&this.Ya();this.A&&(this.A.dispose(),delete this.A);Ar(this,function(a){a.dispose()});
!this.ga&&this.l&&bf(this.l);this.O=this.l=this.B=this.M=null;zr.K.N.call(this)};
function Ar(a,b){a.M&&y(a.M,b,void 0)}
g.removeChild=function(a,b){if(a){var c=q(a)?a:a.getId();if(this.B&&c){var d=this.B;d=(null!==d&&c in d?d[c]:void 0)||null}else d=null;a=d;if(c&&a){d=this.B;c in d&&delete d[c];Zb(this.M,a);b&&(a.Ya(),a.l&&bf(a.l));c=a;if(null==c)throw Error("Unable to set parent component");c.O=null;zr.K.Vc.call(c,null)}}if(!a)throw Error("Child is not in parent component");return a};var Br=!1,Cr="";function Dr(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Br=!0,a.description)){Cr=Dr(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Br=!0;Cr="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Br=!(!a||!a.enabledPlugin))){Cr=Dr(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Br=!0;Cr=Dr(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Br=!0;Cr="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Br=!0,Cr=Dr(b.GetVariable("$version"))}catch(c){}})();
var Er=Cr;var Fr=/^[\w+/]+[=]{0,2}$/;function Gr(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||m,e=d.document,f;a:{if((f=(d||m).document.querySelector("script[nonce]"))&&(f=f.nonce||f.getAttribute("nonce"))&&Fr.test(f))break a;f=void 0}f&&(a.nonce=f);if("help"==a.flow){var h=t("document.location.href",d);!a.helpCenterContext&&h&&(a.helpCenterContext=h.substring(0,1200));h=!0;if(b&&JSON&&JSON.stringify){var k=JSON.stringify(b);(h=1200>=k.length)&&(a.psdJson=k)}h||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=
b;c=a.serverUri||"//www.google.com/tools/feedback";if(h=d.GOOGLE_FEEDBACK_START)h.apply(d,b);else{d=c+"/load.js?";for(var l in a)b=a[l],null!=b&&!Ea(b)&&(d+=encodeURIComponent(l)+"="+encodeURIComponent(b)+"&");a=Ge(e).createElement("SCRIPT");f&&a.setAttribute("nonce",f);Ed(a,Jd(d));e.body.appendChild(a)}}
r("userfeedback.api.startFeedback",Gr,void 0);r("userfeedback.api.isBrowserSupportedForGenie",function(){return Hr()},void 0);
function Hr(){return B?ar("8"):Eg?ar("15"):Jg?ar("5"):Ig||Wd}
r("userfeedback.api.isBrowserSupportedForHelp",Hr,void 0);function Ir(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var Jr=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Kr=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};r("yt.config_",Kr,void 0);function Lr(a){Ir(Kr,arguments)}
function L(a,b){return a in Kr?Kr[a]:b}
;v();function Mr(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Nr(b)}}:a}
function Nr(a,b,c,d,e){var f=t("yt.logging.errors.log");f?f(a,b,c,d,e):(f=L("ERRORS",[]),f.push([a,b,c,d,e]),Lr("ERRORS",f))}
;var Or=p(XMLHttpRequest)?function(){return new XMLHttpRequest}:p(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Pr(){if(!Or)return null;var a=Or();return"open"in a?a:null}
;function M(a,b){Da(a)&&(a=Mr(a));return window.setTimeout(a,b)}
function Qr(a,b){Da(a)&&(a=Mr(a));return window.setInterval(a,b)}
function N(a){window.clearTimeout(a)}
function Rr(a){window.clearInterval(a)}
;function Sr(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=pb(e[0]||"");e=pb(e[1]||"");f in b?Ba(b[f])?dc(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Tr(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Sr(1<a.length?a[1]:a[0])):{}}
function Ur(a,b){var c=b||{},d=a.split("#",2);var e=d[0];d=1<d.length?"#"+d[1]:"";var f=e.split("?",2);e=f[0];f=Sr(f[1]||"");for(var h in c)f[h]=c[h];return Ug(e,f)+d}
function Vr(){var a=Ng(Wr);return null===a?null:a.split(".").reverse()}
;var Xr={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Yr=!1;
function Zr(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Lg)[1]||null,e=Ng(a);d&&e?(d=c,c=a.match(Lg),d=d.match(Lg),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Ng(c)==e&&(Number(c.match(Lg)[4]||null)||null)==(Number(a.match(Lg)[4]||null)||null):!0;for(var f in Xr){if((e=d=L(Xr[f]))&&!(e=c)){e=f;var h=L("CORS_HEADER_WHITELIST")||{},k=Ng(a);e=k?(h=h[k])?Xb(h,e):!1:!0}e&&(b[f]=d)}return b}
function $r(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=as(a,b);var d=bs(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&N(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||m;c?b.R&&b.R.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.qa&&b.qa.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.ae&&0<b.timeout&&(f=M(function(){e||(e=!0,N(f),b.ae.call(b.context||m))},b.timeout))}else cs(a,b)}
function cs(a,b){var c=b.format||"JSON";a=as(a,b);var d=bs(a,b),e=!1,f,h=ds(a,function(a){if(!e){e=!0;f&&N(f);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=!0;break a;default:d=!1}var h=null;if(d||400<=a.status&&500>a.status)h=es(c,a,b.Wa);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(h&&h.return_code,10);break a;case "RAW":d=!0;break a}d=!!h}h=h||{};var k=b.context||m;d?b.R&&b.R.call(k,a,h):b.onError&&
b.onError.call(k,a,h);b.qa&&b.qa.call(k,a,h)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.cb&&0<b.timeout&&(f=M(function(){e||(e=!0,h.abort(),N(f),b.cb.call(b.context||m,h))},b.timeout));
return h}
function as(a,b){b.Yj&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME",void 0),d=b.xa;d&&(d[c]&&delete d[c],a=Ur(a,d));return a}
function bs(a,b){var c=L("XSRF_FIELD_NAME",void 0),d=L("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.V,h=L("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.Uj||Ng(a)&&!b.withCredentials&&Ng(a)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.V&&b.V[h]||(f||(f={}),f[c]=d);f&&q(e)&&(e=Sr(e),Cc(e,f),e=b.ne&&"JSON"==b.ne?JSON.stringify(e):Sg(e));f=e||f&&!wc(f);!Yr&&f&&"POST"!=b.method&&(Yr=!0,Nr(Error("AJAX request with postData should use POST")));
return e}
function es(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?fs(b):null)d={},y(b.getElementsByTagName("*"),function(a){d[a.tagName]=gs(a)})}c&&hs(d);
return d}
function hs(a){if(Ea(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=ve(Ic("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):hs(a[b])}}
function fs(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function gs(a){var b="";y(a.childNodes,function(a){b+=a.nodeValue});
return b}
function is(a,b){if(!a)return null;var c=a.getElementsByTagName(b);return c&&0<c.length?gs(c[0]):null}
var js=fs;function ds(a,b,c,d,e,f,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Mr(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Pr();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;l.open(c,a,!0);f&&(l.responseType=f);h&&(l.withCredentials=!0);c="POST"==c;if(e=Zr(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var ks={},ls=0;function ms(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=hd,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=Ve("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),Ie(a).body.appendChild(a)):e?ds(a,b,"POST",e,d):L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?ds(a,b,"GET","",d):ns(a,b))}
function ns(a,b){var c=new Image,d=""+ls++;ks[d]=c;c.onload=c.onerror=function(){b&&ks[d]&&b();delete ks[d]};
c.src=a}
;var os=0,ps=Zd?"webkit":Yd?"moz":B?"ms":Vd?"o":"";function qs(a){var b=a.__yt_uid_key;b||(b=rs(),a.__yt_uid_key=b);return b}
function ss(a){var b=a.cloneNode(!1);"TR"==b.tagName||"SELECT"==b.tagName?y(a.childNodes,function(a){b.appendChild(ss(a))}):b.innerHTML=a.innerHTML;
return b}
function ts(a,b){a=C(a);b=C(b);return!!uf(a,function(a){return a===b},!0,void 0)}
function us(a,b){var c=Ke(a,null,b);return c.length?c[0]:null}
function vs(){var a=document,b;Sb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function ws(){Ro(document.body,"hide-players",!1);y(Me("preserve-players"),function(a){K(a,"preserve-players")})}
var rs=t("ytDomDomGetNextId")||function(){return++os};
r("ytDomDomGetNextId",rs,void 0);var xs={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ys(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in xs||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.j=a.pageX;this.l=a.pageY}}
function zs(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.j=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.l=a.clientY+b}}
ys.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ys.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ys.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var As=t("ytEventsEventsListeners")||{};r("ytEventsEventsListeners",As,void 0);var Bs=t("ytEventsEventsCounter")||{count:0};r("ytEventsEventsCounter",Bs,void 0);
function Cs(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return uc(As,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function O(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Cs(a,b,c,d);if(e)return e;e=++Bs.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(d){d=new ys(d);if(!uf(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new ys(b);
b.currentTarget=a;return c.call(a,b)};
h=Mr(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,h,d)):a.attachEvent("on"+b,h);As[e]=[a,b,c,h,d];return e}
function Ds(a,b,c,d){var e=a||document;return O(e,b,function(a){var b=uf(a.target,function(a){return a===e||d(a)},!0);
b&&b!==e&&!b.disabled&&(a.currentTarget=b,c.call(b,a))})}
function P(a){a&&("string"==typeof a&&(a=[a]),y(a,function(a){if(a in As){var b=As[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete As[a]}}))}
function Es(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function Fs(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()}
function Gs(a,b,c,d){return Ds(a,b,c,function(a){return I(a,d)})}
function Hs(a,b){if(document.createEvent){var c=document.createEvent("HTMLEvents");c.initEvent(b,!0,!0);a.dispatchEvent(c)}else c=document.createEventObject(),a.fireEvent("on"+b,c)}
function Is(a,b,c){var d=O(a,b,function(){P(d);c.apply(a,arguments)},!1)}
function Js(a){for(var b in As)As[b][0]==a&&P(b)}
;function Ks(a){return L("EXPERIMENT_FLAGS",{})[a]}
;var Ls=/^https?:\/\/([^.]*\.moatads\.com\/|e[0-9]+\.yt\.srs\.doubleverify\.com|pagead2\.googlesyndication\.com\/pagead\/gen_204\?id=yt3p&sr=1&|pm\.adsafeprotected\.com\/youtube|pm\.test-adsafeprotected\.com\/youtube|youtube[0-9]+\.moatpixel\.com\/)/,Ms=/^https?:\/\/(www\.google\.com\/pagead\/sul|www\.google\.com\/pagead\/xsul|www\.youtube\.com\/pagead\/psul|www\.youtube\.com\/pagead\/slav|www\.youtube\.com\/pagead\/sul)/,Ns=/^https?.*#ocr$|^https?:\/\/(aksecure\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|secure\-..\.imrworldwide\.com\/)/;function Os(a,b,c,d){!a&&(void 0===c?0:c)&&Nr(Error("Player URL validator detects invalid url. "+(void 0===d?"":d)+": "+b),"WARNING",void 0,void 0,void 0);return a}
function Ps(a){var b=void 0===b?!1:b;if(!(b=Os(Ls.test(a),a,b,"Active View 3rd Party Integration URL"))){var c=void 0===c?!1:c;b=Os(Ms.test(a),a,c,"Google/YouTube Brand Lift URL")}if(!(c=b)){var d=void 0===d?!1:d;c=Os(Ns.test(a),a,d,"Nielsen OCR URL")}return c}
;function Qs(a,b,c){this.l=a;this.A=b;this.w=c;this.j=void 0}
function Rs(a){var b={};void 0!==a.l?b.trackingParams=a.l:(b.veType=a.A,null!=a.w&&(b.veCounter=a.w),null!=a.j&&(b.elementIndex=a.j));return b}
;function Ss(a,b,c){var d=c&&0<c?c:0;c=d?v()+1E3*d:0;if((d=d?Ts:Us)&&window.JSON){q(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function Vs(a){if(!Us&&!Ts||!window.JSON)return null;try{var b=Us.get(a)}catch(c){}if(!q(b))try{b=Ts.get(a)}catch(c){}if(!q(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b}
function Ws(a){try{Us&&Us.remove(a),Ts&&Ts.remove(a)}catch(b){}}
function Xs(){if(Ts){var a=Ts;rr(a,a.j.gb(!0))}}
var Ts,Ys=new vr;Ts=Ys.isAvailable()?new pr(Ys):null;var Us,Zs=new wr;Us=Zs.isAvailable()?new pr(Zs):null;function $s(){var a=L("client-screen-nonce")||L("EVENT_ID");return a?a:null}
;function at(a,b,c,d,e,f){pm.set(""+a,b,c,d,void 0===e?"youtube.com":e,void 0===f?!1:f)}
function bt(a,b){return pm.get(""+a,b)}
function ct(a,b,c){return pm.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
;function dt(a,b,c){var d=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Ng(window.location.href);e&&d.push(e);e=Ng(a);if(Xb(d,e)||!e&&0==a.lastIndexOf("/",0))if(Ks("autoescape_tempdata_url")&&(d=document.createElement("a"),Dd(d,a),a=d.href),a){e=a.match(Lg);a=e[5];d=e[6];e=e[7];var f="";a&&(f+=a);d&&(f+="?"+d);e&&(f+="#"+e);a=f;d=a.indexOf("#");if(a=0>d?a:a.substr(0,d)){if(b.itct||b.ved)b.csn=b.csn||$s();c?(c=parseInt(c,10),isFinite(c)&&0<c&&(a="ST-"+Kb(a).toString(36),d=b?Sg(b):"",at(a,d,c||5,"/"),et(b))):
(c="ST-"+Kb(a).toString(36),a=b?Sg(b):"",at(c,a,5,"/"),et(b))}}}
function et(a){if(a){a=a.itct||a.ved;var b=t("yt.logging.screen.storeParentElement");a&&b&&b(new Qs(a))}}
;var ft={},gt=0;
function ht(a,b,c,d,e,f){f=f||{};f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=gt)){e=a.stacktrace;c=a.columnNumber;d=t("window.location.href");if(q(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var h=!1;try{var k=a.lineNumber||a.line||"Not available"}catch(F){k="Not available",h=!0}try{var l=
a.fileName||a.filename||a.sourceURL||m.$googDebugFname||d}catch(F){l="Not available",h=!0}a=!h&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:k,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;k=a.lineNumber.toString();isNaN(k)||isNaN(c)||(k=k+":"+c);if(!(ft[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=e;k={xa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),
line:k,level:void 0===b?"ERROR":b,"client.name":f.name},V:{url:L("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(k["client.version"]=f.version);l&&(k.V.stack=l);for(var n in f)k.V["client."+n]=f[n];if(n=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var w in n)k.V[w]=n[w];cs("/error_204",k);ft[a.message]=!0;gt++}}}
;var it={bi:"atp",vj:"ska",ej:"que",Qi:"mus",uj:"sus"};var jt=t("ytPubsubPubsubInstance")||new er;er.prototype.subscribe=er.prototype.subscribe;er.prototype.unsubscribeByKey=er.prototype.wa;er.prototype.publish=er.prototype.ma;er.prototype.clear=er.prototype.clear;r("ytPubsubPubsubInstance",jt,void 0);var kt=t("ytPubsubPubsubSubscribedKeys")||{};r("ytPubsubPubsubSubscribedKeys",kt,void 0);var lt=t("ytPubsubPubsubTopicToKeys")||{};r("ytPubsubPubsubTopicToKeys",lt,void 0);var mt=t("ytPubsubPubsubIsSynchronous")||{};r("ytPubsubPubsubIsSynchronous",mt,void 0);
function Q(a,b,c){var d=nt();if(d){var e=d.subscribe(a,function(){var d=arguments;var h=function(){kt[e]&&b.apply(c||window,d)};
try{mt[a]?h():M(h,0)}catch(k){Nr(k)}},c);
kt[e]=!0;lt[a]||(lt[a]=[]);lt[a].push(e);return e}return 0}
function ot(a,b,c){var d=Q(a,function(a){b.apply(c,arguments);pt(d)},c)}
function pt(a){var b=nt();b&&(xa(a)?a=[a]:q(a)&&(a=[parseInt(a,10)]),y(a,function(a){b.unsubscribeByKey(a);delete kt[a]}))}
function R(a,b){var c=nt();return c?c.publish.apply(c,arguments):!1}
function qt(a,b){mt[a]=!0;var c=nt();c=c?c.publish.apply(c,arguments):!1;mt[a]=!1;return c}
function rt(a){var b=nt();if(b)if(b.clear(a),a)st(a);else for(var c in lt)st(c)}
function nt(){return t("ytPubsubPubsubInstance")}
function st(a){lt[a]&&(a=lt[a],y(a,function(a){kt[a]&&delete kt[a]}),a.length=0)}
;var tt={log_event:"events",log_interaction:"interactions"},ut=Object.create(null);ut.log_event="GENERIC_EVENT_LOGGING";ut.log_interaction="INTERACTION_LOGGING";var vt={},wt={},xt=0,zt=t("ytLoggingTransportLogPayloadsQueue_")||{};r("ytLoggingTransportLogPayloadsQueue_",zt,void 0);var At=t("ytLoggingTransportTokensToCttTargetIds_")||{};r("ytLoggingTransportTokensToCttTargetIds_",At,void 0);var Bt=t("ytLoggingTransportDispatchedStats_")||{};r("ytLoggingTransportDispatchedStats_",Bt,void 0);
var Ct=t("ytLoggingTransportCapturedTime_")||{};r("ytytLoggingTransportCapturedTime_",Ct,void 0);
function Dt(){N(xt);if(!wc(zt)){for(var a in zt){var b=vt[a];if(!b){var c=wt[a];if(!c)continue;b=new c;vt[a]=b}c=void 0;var d=a,e=b,f=tt[d],h=Bt[d]||{};Bt[d]=h;b=Math.round(Jr());for(c in zt[d]){var k=e.j;k={client:{hl:k.gg,gl:k.fg,clientName:k.eg,clientVersion:k.innertubeContextClientVersion}};L("DELEGATED_SESSION_ID")&&(k.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});k={context:k};k[f]=Et(d,c);h.dispatchedEventCount=h.dispatchedEventCount||0;h.dispatchedEventCount+=k[f].length;k.requestTimeMs=
b;var l=At[c];if(l)a:{var n=k,w=c;if(l.videoId)var F="VIDEO";else if(l.playlistId)F="PLAYLIST";else break a;n.credentialTransferTokenTargetId=l;n.context=n.context||{};n.context.user=n.context.user||{};n.context.user.credentialTransferTokens=[{token:w,scope:F}]}delete At[c];Ft(e,d,k)}c=h;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete zt[a]}wc(zt)||
Gt()}}
function Ht(){var a=[],b;for(b in zt){var c=Bt[b]||{};Bt[b]=c;for(var d in zt[b]){var e=Et(b,d);c.storedEventsCount=c.storedEventsCount||0;c.storedEventsCount+=e.length}}d=Math.round(Jr());for(b in Bt)c=Bt[b],b in ut?c.eventType=ut[b]:c.eventType="UNKNOWN_TYPE",e=Ct[b],c.metricIntervalMs=e?d-e:d-NaN,a.push(c),Ct[b]=d,delete Bt[b];return a}
function Gt(){N(xt);xt=M(Dt,L("LOGGING_BATCH_TIMEOUT",1E4))}
function Et(a,b){b||(b="");zt[a]=zt[a]||{};zt[a][b]=zt[a][b]||[];return zt[a][b]}
;function It(){if(null==t("_lact",window)){var a=parseInt(L("LACT"),10);a=isFinite(a)?v()-Math.max(a,0):-1;r("_lact",a,window);r("_fact",a,window);-1==a&&Jt();O(document,"keydown",Jt);O(document,"keyup",Jt);O(document,"mousedown",Jt);O(document,"mouseup",Jt);Q("page-mouse",Jt);Q("page-scroll",Jt);Q("page-resize",Jt)}}
function Jt(){null==t("_lact",window)&&It();var a=v();r("_lact",a,window);-1==t("_fact",window)&&r("_fact",a,window);(a=t("ytglobal.ytUtilActivityCallback_"))&&a()}
function Zg(){var a=t("_lact",window);return null==a?-1:Math.max(v()-a,0)}
;function Kt(a,b,c,d){var e=Lt,f={};f.eventTimeMs=Math.round(c||Jr());f[a]=b;f.context={lastActivityMs:String(c?-1:Zg())};wt.log_event=e;d?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),At[d.token]=a,d=Et("log_event",d.token)):d=Et("log_event");d.push(f);d.length>=(Number(Ks("web_logging_max_batch")||0)||20)?Dt():Gt()}
;function Mt(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function Lt(a){this.j=a||{innertubeApiKey:L("INNERTUBE_API_KEY",void 0),innertubeApiVersion:L("INNERTUBE_API_VERSION",void 0),eg:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),gg:L("INNERTUBE_CONTEXT_HL",void 0),fg:L("INNERTUBE_CONTEXT_GL",void 0),hg:L("INNERTUBE_HOST_OVERRIDE",void 0)||""}}
function Ft(a,b,c){var d={};!L("VISITOR_DATA")&&.01>Math.random()&&Nr(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":L("VISITOR_DATA","")},method:"POST",V:c,ne:"JSON",cb:function(){d.cb()},
ae:d.cb,R:function(a,b){d.R&&d.R(b)},
bk:function(a){d.R&&d.R(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
ak:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=qm();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=L("SESSION_INDEX",0));var h="",k=a.j.hg;k&&(h=k);f&&!h&&(e.headers["x-origin"]=window.location.origin);a=""+h+Mt(a.j.innertubeApiVersion,b,c)+"?alt=json&key="+a.j.innertubeApiKey;Ks("use_fetch_for_op_xhr")?$r(a,e):(e.method="POST",e.V||(e.V={}),cs(a,e))}
;function Nt(){Ks("log_web_meta")&&Ht().forEach(function(a){Kt("delayedEventMetricCaptured",a,void 0,void 0)})}
;function Ot(a,b,c){isNaN(c)&&(c=void 0);var d=t("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):M(a,c||0)}
function Pt(a){if(!isNaN(a)){var b=t("yt.scheduler.instance.cancelJob");b?b(a):N(a)}}
;var Qt=t("ytLoggingLatencyUsageStats_")||{};r("ytLoggingLatencyUsageStats_",Qt,void 0);var Rt=0;function St(a,b){var c=Object.keys(a).join("");Tt("info_"+c+"_"+b)||(a.clientActionNonce=b,Kt("latencyActionInfo",a,void 0,void 0))}
function Tt(a){Qt[a]=Qt[a]||{count:0};var b=Qt[a];b.count++;b.time=Jr();Rt||(Rt=Ot(Ut,0,5E3));return 10<b.count?(11==b.count&&ht(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function Ut(){var a=Jr(),b;for(b in Qt)6E4<a-Qt[b].time&&delete Qt[b];Rt=0}
;function Vt(a,b){this.version=a;this.args=b}
function Wt(a,b){if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!a.Sa){var c=new a;a.Sa=c.version}var d=a.Sa}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{return Reflect.construct(a,cc(b.args))}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
Vt.prototype.Sc=function(){return{version:this.version,args:this.args}};function Xt(a,b){this.topic=a;this.Pb=b}
Xt.prototype.toString=function(){return this.topic};var Yt=t("ytPubsub2Pubsub2Instance")||new er;er.prototype.subscribe=er.prototype.subscribe;er.prototype.unsubscribeByKey=er.prototype.wa;er.prototype.publish=er.prototype.ma;er.prototype.clear=er.prototype.clear;r("ytPubsub2Pubsub2Instance",Yt,void 0);var Zt=t("ytPubsub2Pubsub2SubscribedKeys")||{};r("ytPubsub2Pubsub2SubscribedKeys",Zt,void 0);var $t=t("ytPubsub2Pubsub2TopicToKeys")||{};r("ytPubsub2Pubsub2TopicToKeys",$t,void 0);var au=t("ytPubsub2Pubsub2IsAsync")||{};
r("ytPubsub2Pubsub2IsAsync",au,void 0);r("ytPubsub2Pubsub2SkipSubKey",null,void 0);function bu(a,b){var c=cu();return c?c.publish.call(c,a.toString(),a,b):!1}
function du(a,b,c){var d=cu();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,h){var f=t("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(Zt[e])try{if(h&&a instanceof Xt&&a!=d)try{h=Wt(a.Pb,h)}catch(l){throw l.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+l.message,l;}b.call(c||window,h)}catch(l){Nr(l)}},au[a.toString()]?t("yt.scheduler.instance")?Ot(f,1,void 0):M(f,0):f())});
Zt[e]=!0;$t[a.toString()]||($t[a.toString()]=[]);$t[a.toString()].push(e);return e}
function eu(a){var b=cu();b&&(xa(a)&&(a=[a]),y(a,function(a){b.unsubscribeByKey(a);delete Zt[a]}))}
function cu(){return t("ytPubsub2Pubsub2Instance")}
;function fu(){var a=L("TIMING_TICK_EXPIRATION");a||(a={},Lr("TIMING_TICK_EXPIRATION",a));return a}
function gu(){var a=fu(),b;for(b in a)Pt(a[b]);Lr("TIMING_TICK_EXPIRATION",{})}
;function hu(a,b){Vt.call(this,1,arguments)}
ia(hu,Vt);function iu(a,b){Vt.call(this,1,arguments)}
ia(iu,Vt);var ju=new Xt("aft-recorded",hu),ku=new Xt("timing-sent",iu);var lu=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};var mu=v().toString();
function nu(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=v();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(mu)for(a=1,b=0;b<mu.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^mu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ou={vc:!0},Pu={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},dw={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",
yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",plid:"videoId",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},ew="ap c cver ei srt yt_fss yt_li ba vpil vpni vpst yt_eil pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
fw={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",
video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR"},
gw="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),hw=!1;function iw(a){jw(a);kw();lw(!1,a);a||(L("TIMING_ACTION")&&Lr("PREVIOUS_ACTION",L("TIMING_ACTION")),Lr("TIMING_ACTION",""))}
function S(a,b,c){if(!b&&"_"!=a[0]){var d=a;lu.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),lu.mark(d))}d=mw(c);var e=b||Jr();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;d=fu();if(e=d[a])Pt(e),d[a]=0;nw(c)["tick_"+a]=b;c||b||Jr();Ks("csi_on_gel")?(d=ow(c),"_start"==a?Tt("baseline_"+d)||Kt("latencyActionBaselined",{clientActionNonce:d},b,void 0):Tt("tick_"+a+"_"+d)||Kt("latencyActionTicked",{tickName:a,clientActionNonce:d},b,void 0),a=!0):a=!1;a||pw(!1,c)}
function qw(a,b,c){var d=rw(c)[a]=b;nw(c)["info_"+a]=d;if(Ks("csi_on_gel"))if(a in dw){b={};a=dw[a];Xb(gw,a)&&(d=!!d);a=a.split(".");for(var e=b,f=0;f<a.length-1;f++)e[a[f]]=e[a[f]]||{},e=e[a[f]];b[a[a.length-1]]=d;c=ow(c);St(b,c)}else Xb(ew,a)||Nr(Error("Unknown label "+a+" logged with GEL CSI."))}
function sw(a){var b=rw(void 0);return a in b}
function tw(a){var b=mw(a);if(b.aft)return b.aft;a=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function pw(a,b){if(!uw(b)){var c=L((b||"")+"TIMING_ACTION",void 0),d=mw(b);if(t("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=tw(b)))if(Ks("tighter_critical_section")&&!hw&&(bu(ju,new hu(Math.round(c-d._start),b)),hw=!0),a||b)vw(b);else{c=!0;var e=L("TIMING_WAIT",[]);if(e.length)for(var f=0,h=e.length;f<h;++f)if(!(e[f]in d)){c=!1;break}c&&vw(b)}}}
function ww(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=ps+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1}
function vw(a){gu();if(!Ks("csi_on_gel")){var b=mw(a),c=rw(a),d=b._start,e;for(e in b)if(0==e.lastIndexOf("_",0)&&Ba(b[e])){var f=e.slice(1);if(f in ou){var h=Qb(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=h.join()}delete b[e]}f=!!c.ap;if(h=t("ytglobal.timingReportbuilder_")){if(h=h(b,c,a))xw(h,f),iw(a)}else{var k=L("CSI_SERVICE_NAME","youtube");h={v:2,s:k,action:L((a||"")+"TIMING_ACTION",void 0)};var l=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var n=window.location.protocol+t("ytplayer.config.assets.js");(n=lu.getEntriesByName?lu.getEntriesByName(n)[0]:null)?c.h5jse=Math.round(c.h5jse-n.responseEnd):delete c.h5jse}b.aft=tw(a);yw(a)&&"youtube"==k&&(qw("yt_lt","hot_bg",a),k=b.vc,n=b.pbs,
delete b.aft,c.aft=Math.round(n-k));for(var w in c)"_"!=w.charAt(0)&&(h[w]=c[w]);b.ps=Jr();c={};w=[];for(e in b)"_"!=e.charAt(0)&&(k=Math.round(b[e]-d),c[e]=k,w.push(e+"."+k));h.rt=w.join(",");(b=t("ytdebug.logTiming"))&&b(h,c);xw(h,f,a);bu(ku,new iu(c.aft+(l||0),a))}}}
var kw=u(lu.clearResourceTimings||lu.webkitClearResourceTimings||lu.mozClearResourceTimings||lu.msClearResourceTimings||lu.oClearResourceTimings||ya,lu);function zw(a){return Math.round(lu.timing.navigationStart+a)}
function Aw(){var a=window.location.protocol,b=lu.getEntriesByType("resource"),c=Ub(b,function(b){return 0==b.name.indexOf(a+"//fonts.googleapis.com/css?family=")});
b=Pb(b,function(b){return 0==b.name.indexOf(a+"//fonts.gstatic.com/s/")});
b=Rb(b,function(a,b){return b.duration>a.duration?b:a},{duration:0});
c&&0<c.startTime&&0<c.responseEnd&&(S("wfcs",zw(c.startTime)),S("wfce",zw(c.responseEnd)));b&&0<b.startTime&&0<b.responseEnd&&(S("wffs",zw(b.startTime)),S("wffe",zw(b.responseEnd)))}
function Bw(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=lu.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,S("rsf_"+b,d+Math.round(c.fetchStart)),S("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(sw("rc")||qw("rc",""),0===c.transferSize))?!0:!1:!1}
function xw(a,b,c){if(Ks("debug_csi_data")){var d=t("yt.timing.csiData");d||(d=[],r("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||ms(a,void 0,void 0,void 0,f)}catch(h){ms(a,void 0,void 0,void 0,f)}}else ms(a);lw(!0,c)}
function ow(a){var b=Cw(a).nonce;b||(b=nu(),Cw(a).nonce=b);return b}
function mw(a){return Cw(a).tick}
function rw(a){return Cw(a).info}
function nw(a){a=Cw(a);"gel"in a||(a.gel={});return a.gel}
function Cw(a){return t("ytcsi."+(a||"")+"data_")||jw(a)}
function jw(a){var b={tick:{},info:{}};r("ytcsi."+(a||"")+"data_",b,void 0);return b}
function uw(a){return!!t("yt.timing."+(a||"")+"pingSent_")}
function lw(a,b){r("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function yw(a){var b=mw(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==rw(a).yt_pvis}
;function Dw(a){this.w=void 0===a?null:a;this.l=0;this.j=null}
Dw.prototype.then=function(a,b,c){return this.w?this.w.then(a,b,c):1===this.l&&a?(a=a.call(c,this.j),vj(a)||(b=new Dw,a=void 0===a?null:a,b.l=1,b.j=void 0===a?null:a,a=b),a):2===this.l&&b?(a=b.call(c,this.j),vj(a)||(b=new Dw,a=void 0===a?null:a,b.l=2,b.j=void 0===a?null:a,a=b),a):this};
Dw.prototype.getValue=function(){return this.j};
uj(Dw);function Ew(){var a={};a.dt=Vk;a.flash=Er||"0";a:{try{var b=window.top.location.href}catch(c){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}a=(a.frm=b,a);ng(a);return a}
function Fw(){var a=yl(window),b=jl(window.top),c={};return c.bc=Gk(),c.bih=b.height,c.biw=b.width,c.brdim=a.join(),c.vis=Kk(eb),c.wgl=!!fb.WebGLRenderingContext,c}
function Gw(){var a=new eh(fb),b=a.j[0].depth,c={};c=(c.dssz=eb.scripts?eb.scripts.length:0,c.icsg=yh(a),c.mdo=zh(a),c.mso=Ah(a),c);fb.location&&fb.location.ancestorOrigins&&(c.iag=gh(a));0<b&&(c.nhd=b);return c}
;function Hw(a,b,c,d){Hk.call(this);this.B=a;this.l=b;this.O=c;this.A=d;this.w=Ve("DIV",{"class":"ads-mute-button"});jf(this.w,String.fromCharCode(215));this.j=Ve("DIV");Cd(this.j,Iw(this));this.C=D("ads-mute-undo",this.j);O(this.w,"click",u(this.H,this));this.B.firstElementChild.appendChild(this.w);a=sc(this.l.mute_survey);kc(a);y(a,function(a){var b=Ve("INPUT",{"class":"yt-uix-form-input-radio",type:"radio"}),c=Ve("SPAN",{"class":"yt-uix-form-input-radio-element"});b=Ve("SPAN",{"class":"yt-uix-form-input-radio-container"},
b,c);b=Ve("LABEL","ads-mute-option",b,a);O(b,"click",u(this.F,this,this.l.mute_survey[a]));this.j.firstChild.appendChild(b)},this);
O(this.j,"click",Fs);O(this.C,"click",u(this.M,this));ot("dispose",this.dispose,this)}
x(Hw,Hk);function Iw(a){var b=a.l.mute_gone||Ad,c=a.l.mute_question||Ad;a=a.l.mute_undo||Ad;return xd("div",{"class":"ads-mute-survey"},yd(xd("span",{"class":"ads-mute-check"}),xd("b",{},b)," ",c,xd("div",{"class":"ads-mute-undo"},a)))}
Hw.prototype.N=function(){y(Me("ads-mute-option",this.j),function(a){Js(a)});
Js(this.w);bf(this.w);Js(this.j);bf(this.j);Js(this.C)};
Hw.prototype.H=function(a){a.stopPropagation();a.preventDefault();this.A&&ms(this.l.mute_url);this.B.firstElementChild.appendChild(this.j);J(gf(this.j),"contains-mute-survey")};
Hw.prototype.M=function(a){a.stopPropagation();a.preventDefault();this.l.mute_undo_url&&this.A&&ms(this.l.mute_undo_url);K(gf(this.j),"contains-mute-survey");bf(this.j)};
Hw.prototype.F=function(a,b){b.stopPropagation();b.preventDefault();this.A&&ms(a);bf(this.B);this.O();this.dispose()};var Jw="",Kw=[],Lw="";function Mw(a,b){var c=a.media_template_data;(c=Ba(c)?Ub(c,function(a){return!!a.imageUrl}):null)?(Lw=c.videoId,c={video_id:c.videoId,
ad_type:"watch_related",headline:zb(a.line1),image_url:c.imageUrl,description1:zb(a.line2),description2:zb(a.line3),channel_title:c.channelName,visible_url:zb(a.visible_url)},Jw=zb(a.url),(new Qp(Jw)).l.get("adurl"),mb(Hb(a.creative_view_url))||Kw.push(Nw(zb(a.creative_view_url))),mb(Hb(a.p_creative_view_url))||Kw.push(Nw(zb(a.p_creative_view_url))),mb(Hb(a.engaged_view_url))||Nw(zb(a.engaged_view_url)),mb(Hb(a.p_engaged_view_url))||Nw(zb(a.p_engaged_view_url)),mb(Hb(a.videoplaytime_25_url))||Nw(zb(a.videoplaytime_25_url)),
mb(Hb(a.p_videoplaytime_25_url))||Nw(zb(a.p_videoplaytime_25_url)),mb(Hb(a.videoplaytime_50_url))||Nw(zb(a.videoplaytime_50_url)),mb(Hb(a.p_videoplaytime_50_url))||Nw(zb(a.p_videoplaytime_50_url)),mb(Hb(a.videoplaytime_75_url))||Nw(zb(a.videoplaytime_75_url)),mb(Hb(a.p_videoplaytime_75_url))||Nw(zb(a.p_videoplaytime_75_url)),mb(Hb(a.videoplaytime_100_url))||Nw(zb(a.videoplaytime_100_url)),mb(Hb(a.p_videoplaytime_100_url))||Nw(zb(a.p_videoplaytime_100_url)),cs("/pyv?"+Sg(c),{format:"XML",R:function(a,
c){b&&b(a,c)},
onError:function(){Ow()},
Wa:!0})):Ow()}
function Pw(a){S("parc");0==a.length?Ow():Mw(a[0],function(b,c){var d=c.html_content,e=C(window.pyv_related_box_id||"watch-related");if(e){var f=e.innerHTML;d&&0!=f.indexOf(td(d))&&e.insertBefore(Ze(d),e.firstChild);if(d=C("pyv-watch-related-dest-url"))e=!L("PYV_DISABLE_MUTE")&&a[0].mute_url&&a[0].mute_survey,d.setAttribute("href",Jw),e&&(d=gf(d),J(d,"contains-mute-button"),new Hw(d,a[0],ya,!0));S("parn");Qw();y(Kw,function(a){ms(a,void 0,Ps(a))})}})}
window.j=function(a){Pw(a)};
function Rw(a){if(!a||mb(a.responseText))Ow();else try{eval(a.responseText)}catch(b){throw Ow(),b;}}
function Sw(){var a={};return a.dff="times new roman",a.dfs="16",a.ppjl="u",a.rsz="||n|",a}
function Qw(){var a={ad_id:"",ad_sys:"",ad_v:Lw,break_type:6,content_v:L("VIDEO_ID",void 0),cpn:(t("yt.www.watch.player.getClientPlaybackNonce")||Yf())(),device:"1",devicever:"html5",ei:L("GET_PLAYER_EVENT_ID",void 0),el:"detailpage",event:2,format:"2_6",mt:"0",ns:1,slot_pos:"0",ver:"2.0",wt:(new Date).getTime()};a=Ug("/api/stats/ads",a);ms(a,void 0,Ps(a))}
function Ow(){var a=L("TIMING_WAIT",[]);Zb(a,"parn")&&(Lr("TIMING_WAIT",a),pw())}
function Nw(a){if("https:"==window.location.protocol){var b=new Qp(a);if("https"==b.A)return a;Rp(b,"https");return b.toString()}return a}
;function Tw(a,b,c){a&&(a.dataset?a.dataset[Uw(b)]=String(c):a.setAttribute("data-"+b,c))}
function T(a,b){return a?a.dataset?a.dataset[Uw(b)]:a.getAttribute("data-"+b):null}
function Vw(a,b){a&&(a.dataset?delete a.dataset[Uw(b)]:a.removeAttribute("data-"+b))}
var Ww={};function Uw(a){return Ww[a]||(Ww[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var Xw=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Yw=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Zw(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Xw,""),c=c.replace(Yw,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b);return null}return $w(a,b)}
function $w(a,b){var c=ax(a),d=document.getElementById(c),e=d&&T(d,"loaded"),f=d&&!e;if(e)return b&&b(),d;if(b){e=Q(c,b);var h=""+Fa(b);bx[h]=e}return f?d:d=cx(a,c,function(){T(d,"loaded")||(Tw(d,"loaded","true"),R(c),M(La(rt,c),0))})}
function cx(a,b,c){var d=Ye(document,"SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Ed(d,Jd(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function ax(a){var b=document.createElement("a");Dd(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Kb(a)}
var bx={};function dx(a,b,c){ms("/gen_204?"+("a="+a+(b?"&"+b:"")),c)}
;function ex(a){this.w=1E3/a;this.l=null;this.j=[]}
var fx=new ex(24);ex.prototype.A=function(){for(var a=v(),b=this.j.length-1;0<=b;b--)gx(this.j[b],a)&&hx(this,b)};
ex.prototype.add=function(a){this.j.push(a);this.l||(this.l=Qr(u(this.A,this),this.w))};
ex.prototype.remove=function(a){a=Nb(this.j,a);0<=a&&hx(this,a)};
function hx(a,b){$b(a.j,b);a.j.length||(Rr(a.l),delete a.l)}
;function ix(a,b){this.j=new op(0,0,a.x,a.y,b.x,b.y,1,1)}
function jx(a){return a}
var kx=new ix({x:.25,y:.1},{x:.25,y:1});function lx(a){return rp(kx.j,a)}
var mx=new ix({x:.42,y:0},{x:1,y:1});function nx(a){return rp(mx.j,a)}
var ox=new ix({x:0,y:0},{x:.58,y:1});function px(a){return rp(ox.j,a)}
var qx=new ix({x:.42,y:0},{x:.58,y:1});function rx(a){return rp(qx.j,a)}
function sx(a){switch(a){case "linear":return jx;case "ease-in":return nx;case "ease-out":return px;case "ease-in-out":return rx;default:return lx}}
;function tx(a,b){var c=b||{};this.el=a;this.duration=c.duration||.25;this.cc=c.qa||null;this.Yc=c.Yc||"ease";this.setup(c);c.Zj||this.play()}
tx.prototype.setup=function(){};function ux(a,b){this.l=this.j=0;this.w=fx;this.G=null;tx.call(this,a,b)}
x(ux,tx);ux.prototype.setup=function(a){this.j=0;this.w=a.loop||fx;this.G=sx(this.Yc)};
ux.prototype.play=function(){this.l=v();gx(this,this.l);this.w.add(this)};
ux.prototype.pause=function(){this.w.remove(this)};
function gx(a,b){var c=1E3*a.duration;a.j=Math.min(a.j+(b-a.l),c);a.l=b;var d=a.G(a.j/c);d=a.C-(a.C-a.B)*d;a.A?a.el.style.filter="alpha(opacity="+Math.floor(100*d)+")":a.el.style.opacity=d;if(c=a.j>=c)a.qa(),a.cc&&M(u(a.cc,m,a),0);return c}
ux.prototype.qa=function(){};function vx(a){a=a||{};this.url=a.url||"";this.args=a.args||zc(wx);this.assets=a.assets||{};this.attrs=a.attrs||zc(xx);this.params=a.params||zc(yx);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var wx={enablejsapi:1},xx={},yx={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function zx(a){a instanceof vx||(a=new vx(a));return a}
vx.prototype.clone=function(){var a=new vx,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Aa(c)?a[b]=zc(c):a[b]=c}return a};function Ax(){return!1}
function Bx(){return null}
;function Cx(){return parseInt(L("DCLKSTAT",0),10)}
;function Dx(a,b,c,d){b=void 0===b?{}:b;c=void 0===c?"":c;d=void 0===d?window:d;Fd(d.location,Ug(a,b)+c)}
function Ex(a,b){b&&dt(a,b);(window.ytspf||{}).enabled?spf.navigate(a):Dx(a)}
function Fx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));b&&dt(a,b);if(c)return!1;Ex(a);return!0}
;r("yt.abuse.botguardInitialized",t("yt.abuse.botguardInitialized")||Ax,void 0);r("yt.abuse.invokeBotguard",t("yt.abuse.invokeBotguard")||Bx,void 0);r("yt.abuse.dclkstatus.checkDclkStatus",t("yt.abuse.dclkstatus.checkDclkStatus")||Cx,void 0);r("yt.player.exports.navigate",t("yt.player.exports.navigate")||Fx,void 0);r("yt.util.activity.init",t("yt.util.activity.init")||It,void 0);r("yt.util.activity.getTimeSinceActive",t("yt.util.activity.getTimeSinceActive")||Zg,void 0);
r("yt.util.activity.setTimestamp",t("yt.util.activity.setTimestamp")||Jt,void 0);function Gx(){Hk.call(this);this.j=[]}
ia(Gx,Hk);Gx.prototype.oc=function(a){for(var b=0;b<this.j.length;b++)if(this.j[b]==a){this.j.splice(b,1);a.target.removeEventListener(a.name,a.zc);break}};
Gx.prototype.N=function(){for(;this.j.length;){var a=this.j.pop();a.target.removeEventListener(a.name,a.zc)}Hk.prototype.N.call(this)};var Hx=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Ix(a,b){a=a||"";if(window.spf){var c=a.match(Hx);spf.style.load(a,c?c[1]:"",b);return null}return Jx(a,b)}
function Jx(a,b){var c=Kx(a),d=document.getElementById(c),e=d&&T(d,"loaded"),f=d&&!e;if(e)return b&&b(),d;b&&(Q(c,b),Fa(b));return f?d:d=Lx(a,c,function(){T(d,"loaded")||(Tw(d,"loaded","true"),R(c),M(La(rt,c),0))})}
function Lx(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Jd(a);d.rel="stylesheet";d.href=Nc(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Kx(a){var b=Ye(document,"A");Ic("This URL is never added to the DOM");a=Uc(a);Dd(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Kb(b)}
;var Mx={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Nx;var Ox=hd;Ox=Ox.toLowerCase();if(-1!=Ox.indexOf("android")){var Px=Ox.match(/android\D*(\d\.\d)[^;|\)]*[;\)]/);if(Px)Nx=parseFloat(Px[1]);else{var Qx=Ox.match("("+sc(Mx).join("|")+")");Nx=Qx?Mx[Qx[0]]:0}}else Nx=void 0;var Rx=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Sx=['audio/mp4; codecs="mp4a.40.2"'];function Tx(a,b){Hk.call(this);this.C=this.ia=a;this.U=b;this.H=!1;this.l={};this.da=this.O=null;this.F=new er;Ik(this,La(Jk,this.F));this.A={};this.Z=this.ga=this.w=this.vb=this.j=null;this.W=!1;this.B=this.M=null;this.Ha={};this.xc=["onReady"];this.Ta=null;this.Lb=NaN;this.aa={};Ux(this);this.Mb("WATCH_LATER_VIDEO_ADDED",u(this.Ng,this));this.Mb("WATCH_LATER_VIDEO_REMOVED",u(this.Og,this));this.Mb("onAdAnnounce",u(this.nf,this));this.yc=new Gx;Ik(this,La(Jk,this.yc))}
ia(Tx,Hk);g=Tx.prototype;g.getId=function(){return this.U};
g.Pc=function(a,b){if(!this.T()){this.vb=a;this.j=a.clone();this.w=this.j.attrs.id||this.w;"video-player"==this.w&&(this.w=this.U,this.j.attrs.id=this.U);this.C.id==this.w&&(this.w+="-player",this.j.attrs.id=this.w);this.j.args.enablejsapi="1";this.j.args.playerapiid=this.U;this.ga||(this.ga=Vx(this,this.j.args.jsapicallback||"onYouTubePlayerReady"));this.j.args.jsapicallback=null;var c=this.j.attrs.width;c&&(this.C.style.width=Pf(Number(c)||c,!0));if(c=this.j.attrs.height)this.C.style.height=Pf(Number(c)||
c,!0);if(!this.T()){if(!b&&!p(this.j.disable.html5)){c=!0;void 0!=this.j.args.deviceHasDisplay&&(c=this.j.args.deviceHasDisplay);if(2.2==Nx)var d=!0;else{a:{var e=c;c=t("yt.player.utils.videoElement_");c||(c=Ye(document,"VIDEO"),r("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType){e=e?Rx:Sx;for(var f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}}d="fmt.noneavailable"}catch(h){d="html5.missingapi"}}d=!d}d=d&&(Wx(this)||this.j.assets.js);this.j.disable.html5=!d;d||(this.j.args.html5_unavailable=
"1")}Xx(this)}this.H&&Yx(this)}};
g.Bf=function(){return this.vb};
function Yx(a){a.j.loaded||(a.j.loaded=!0,"0"!=a.j.args.autoplay?a.l.loadVideoByPlayerVars(a.j.args):a.l.cueVideoByPlayerVars(a.j.args))}
function Wx(a){var b=!0,c=Zx(a);c&&a.j&&(a=a.j,b=T(c,"version")==a.assets.js);return b&&!!t("yt.player.Application.create")}
function Xx(a){if(!a.W){var b=Wx(a);if(b&&"html5"==(Zx(a)?"html5":null))a.Z="html5",a.H||a.ic();else if($x(a),a.Z="html5",b&&a.B)a.ia.appendChild(a.B),a.ic();else{a.j.loaded=!0;var c=!1;a.M=u(function(){c=!0;var a=this.j.clone();t("yt.player.Application.create")(this.ia,a);this.ic()},a);
a.W=!0;b?a.M():(Zw(a.j.assets.js,a.M),Ix(a.j.assets.css),ay(a)&&!c&&r("yt.player.Application.create",null,void 0))}}}
function Zx(a){var b=C(a.w);!b&&a.C&&a.C.querySelector&&(b=a.C.querySelector("#"+a.w));return b}
g.ic=function(){if(!this.T()){var a=Zx(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b){if(this.W=!1,!a.isNotServable||!a.isNotServable(this.j.args.video_id)){Ux(this);this.H=!0;a=Zx(this);a.addEventListener&&(this.O=by(this,a,"addEventListener"));a.removeEventListener&&(this.da=by(this,a,"removeEventListener"));b=a.getApiInterface();b=b.concat(a.getInternalApiInterface());for(var c=0;c<b.length;c++){var d=b[c];this.l[d]||(this.l[d]=by(this,a,d))}for(var e in this.A)this.O(e,
this.A[e]);Yx(this);this.ga&&this.ga(this.l);this.F.ma("onReady",this.l)}}else this.Lb=M(u(this.ic,this),50)}};
function by(a,b,c){var d=b[c];return function(){try{return a.Ta=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Ta=e,Nr(e,"WARNING"))}}}
function Ux(a){a.H=!1;if(a.da)for(var b in a.A)a.da(b,a.A[b]);for(var c in a.aa)N(parseInt(c,10));a.aa={};a.O=null;a.da=null;for(var d in a.l)a.l[d]=null;a.l.addEventListener=u(a.Mb,a);a.l.removeEventListener=u(a.nh,a);a.l.destroy=u(a.dispose,a);a.l.getLastError=u(a.Cf,a);a.l.getPlayerType=u(a.Df,a);a.l.getCurrentVideoConfig=u(a.Bf,a);a.l.loadNewVideoConfig=u(a.Pc,a);a.l.isReady=u(a.ng,a)}
g.ng=function(){return this.H};
g.Mb=function(a,b){if(!this.T()){var c=Vx(this,b);if(c){if(!Xb(this.xc,a)&&!this.A[a]){var d=cy(this,a);this.O&&this.O(a,d)}this.F.subscribe(a,c);"onReady"==a&&this.H&&M(La(c,this.l),0)}}};
g.nh=function(a,b){if(!this.T()){var c=Vx(this,b);c&&gr(this.F,a,c)}};
function Vx(a,b){var c=b;if("string"==typeof b){if(a.Ha[b])return a.Ha[b];c=function(){var a=t(b);a&&a.apply(m,arguments)};
a.Ha[b]=c}return c?c:null}
function cy(a,b){var c="ytPlayer"+b+a.U,d=u(function(a){if("html5"==(Zx(this)?"html5":null)){var c=this.j&&this.j.args&&this.j.args.fflags;if(c&&0>c.indexOf("use_html5_player_event_timeout=true")){this.F.ma(b,a);return}}var d=M(u(function(){if(!this.T()){this.F.ma(b,a);var c=this.aa,e=String(d);e in c&&delete c[e]}},this),0);
xc(this.aa,String(d))},a);
a.A[b]=c;m[c]=d;return c}
g.nf=function(a){R("a11y-announce",a)};
g.Ng=function(a){R("WATCH_LATER_VIDEO_ADDED",a)};
g.Og=function(a){R("WATCH_LATER_VIDEO_REMOVED",a)};
g.Df=function(){return this.Z||(Zx(this)?"html5":null)};
g.Cf=function(){return this.Ta};
function $x(a){S("dcp");a.cancel();Ux(a);a.Z=null;a.j&&(a.j.loaded=!1);var b=Zx(a);"html5"==(Zx(a)?"html5":null)&&(Wx(a)||!ay(a)?a.B=b:(b&&b.destroy&&b.destroy(),a.B=null));af(a.ia)}
g.cancel=function(){if(this.M){var a=this.M;this.j.assets.js&&a&&(a=""+Fa(a),(a=bx[a])&&pt(a))}N(this.Lb);this.W=!1};
g.N=function(){$x(this);if(this.B&&this.j&&this.B.destroy)try{this.B.destroy()}catch(b){Nr(b)}this.Ha=null;for(var a in this.A)m[this.A[a]]=null;this.vb=this.j=this.l=null;delete this.ia;delete this.C;Hk.prototype.N.call(this)};
function ay(a){return a.j&&a.j.args&&a.j.args.fflags?-1!=a.j.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var dy={},ey="player_uid_"+(1E9*Math.random()>>>0);function fy(a){delete dy[a.getId()]}
function gy(){var a;if(a=document.getElementById("player-api")){var b=ey+"_"+Fa(a),c=dy[b];c||(c=new Tx(a,b),dy[b]=c);a=c.l}else a=null;return a}
;var hy="",iy="",jy=!1;function ky(a,b){a||(a="");b||(b=!1);var c=C("watch-channel-brand-div");c&&Ro(c,"collapsible",b);if(c=C("google_companion_ad_div"))c.innerHTML=a}
function ly(a){var b=Math.round(1E4*Math.random());return['<iframe src="',a,'" name="ifr_300x250ad',b,'" id="ifr_300x250ad',b,'" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join("")}
function my(a){return!!a.match("/ad_companion.*render=video_wall_companion")}
function ny(a,b){var c=250;"video"==a&&(c=60);var d=decodeURIComponent(b);ky(['<iframe name="fw_ad" id="fw_ad" ','width="300" height="'+c+'" ','marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'].join(""));var e=C("fw_ad");if(e){e=e.contentWindow?e.contentWindow:e.contentDocument&&e.contentDocument.document?e.contentDocument.document:e.contentDocument;var f=navigator.userAgent.toLowerCase();c=-1!=f.indexOf("msie");f=-1!=f.indexOf("opera");e.document.open();
e.document.write(d);c||f?M(function(){e.document.close()},7500):e.document.close()}}
function oy(){window.google_ad_output="html";window.google_ad_height="250";window.google_ad_format="300x250_as";window.google_container_id="google_companion_ad_div"}
function py(){var a=document.getElementById("google_companion_ad_div");if(a&&(a=a.firstElementChild)){"DIV"==a.nodeName&&(a=a.firstElementChild);try{var b=encodeURIComponent(hy)+","+encodeURIComponent(iy);a.contentWindow.postMessage(b,"*");a.width=370;a.height=null!=hy?210:185}catch(c){}}}
function qy(){var a=document.getElementById("movie_player");a&&a.pauseVideo()}
function ry(a){if(!jy&&a)if(Ks("remove_yt_uds")){jy=!0;window.google_ad_client=a.afv_vars.google_ad_client;window.google_page_url=a.afv_vars.google_page_url;window.google_page_location=window.location.href;var b=a.afc_vars,c;for(c in b){var d=b[c];if("no_initial_ads"==c&&d){Ag();return}if("format"!=c||mb(Hb(d)))if("loeid"!=c||mb(Hb(d))){var e="google_"+c;(ug[e]||vg[e]||xg[e])&&(window[e]=d)}else window.google_loeid=Hb(d);else if(d=Hb(d),e=d.match(/(\d+)x(\d+)/))window.google_ad_width=e[1],window.google_ad_height=
e[2],window.google_ad_format=d}b=new gb;yg(b);il(b);window.google_loader_used="yt";Hl()&&sy();Ag()}else(b=t("google.ads.Ad"))?(jy=!0,new b(a.afv_vars.google_ad_client,"google_companion_ad_div",a.afc_vars)):M(function(){ry(a)},200)}
function sy(){var a=C("google_companion_ad_div");if(null!=a){var b=Ve("IFRAME",{width:window.google_ad_width,height:window.google_ad_height,frameBorder:0,marginWidth:0,marginHeight:0,vpsace:0,hspace:0,allowTransparency:"true",scrolling:"no",src:window.google_ad_url,style:{visibility:"visible"}});a.appendChild(b)}}
var ty=[];r("yt.www.watch.ads.setAdId",function(a){window.ad_debug=a},void 0);
r("yt.www.watch.ads.setCompanion",ky,void 0);r("yt.www.watch.ads.showForcedMpu",function(a){var b=ly(a);a=my(a);ky(b,a)},void 0);
r("yt.www.watch.ads.setGutSlotSizes",function(){},void 0);
r("yt.www.watch.ads.handleSetCompanion",function(a){a=a.replace(";dc_seed=",";kmyd=watch-channel-brand-div;dc_seed=");var b=ly(a);a=my(a);ky(b,a)},void 0);
r("yt.www.watch.ads.handleSetCompanionForFreewheel",ny,void 0);r("yt.www.watch.ads.handleSetAfvCompanionVars",oy,void 0);r("yt.www.watch.ads.companionSetupComplete",py,void 0);r("yt.www.watch.ads.pauseVideo",qy,void 0);r("yt.www.watch.ads.loadAfc",ry,void 0);r("yt.www.watch.ads.isAfcAdVisible",function(){var a=C("google_companion_ad_div");return a?(a=df(a))&&"IFRAME"==a.tagName?-1!=a.src.indexOf("youtube.com%2Fad_frame"):!1:!1},void 0);
r("yt.www.watch.ads.checkInit",function(){},void 0);
r("yt.www.watch.ads.initVideoWallCompanionListeners",function(a,b){hy=a;iy=b;window.addEventListener("message",function(a){"companion-setup-complete"==a.data?py():"pause-video"==a.data&&qy()},!1)},void 0);
r("yt.www.watch.ads.getGlobals",function(){return ty},void 0);
r("window.google_ad_request_done",window.j,void 0);r("yt.www.ads.pyv.pyvWatchAfcCallback",Pw,void 0);r("yt.www.ads.pyv.loadPyvAjax",function(a){var b=Ew();Ma(b,Fw());Ks("desktop_pyv_on_watch_missing_params")&&(Ma(b,Sw()),Ma(b,Gw()));a=Ug(a,b);Ks("desktop_pyv_on_watch_override_lact")&&(a=Yg(a));cs(a,{format:"RAW",R:Rw,onError:function(){Ow()},
withCredentials:!0});S("parq")},void 0);
r("yt.www.watch.ads.restrictioncookie.spr",function(a){ms(a+"mac_204?action_fcts=1");return!0},void 0);
r("yt.www.watch.ads.isPromotionShelfSlotExist",function(){return null!=C("promotion-shelf")},void 0);
r("yt.www.watch.ads.promotionShelfClear",function(){var a=C("promotion-shelf");a&&(J(a,"hid"),af(a))},void 0);
r("yt.www.watch.ads.promotionShelfShow",function(a){var b=C("promotion-shelf");b&&(b.appendChild(a),K(b,"hid"))},void 0);
r("setFreewheelCompanion",ny,void 0);r("setAfvCompanionVars",oy,void 0);var uy=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};r("yt.msgs_",uy,void 0);function vy(a){Ir(uy,arguments)}
function wy(a,b,c){b=void 0===b?{}:b;a=(a=a in uy?uy[a]:c)||"";c={};for(var d in b)c.hc=d,a=a.replace(new RegExp("\\$"+c.hc,"gi"),function(a){return function(){return b[a.hc]}}(c)),c={hc:c.hc};
return a}
function xy(a){Ir(uy,arguments)}
;function yy(a,b){(a=C(a))&&a.style&&(a.style.display=b?"":"none",Ro(a,"hid",!b))}
function zy(a){return(a=C(a))?"none"!=a.style.display&&!I(a,"hid"):!1}
function Ay(a){if(a=C(a))zy(a)?(a.style.display="none",J(a,"hid")):(a.style.display="",K(a,"hid"))}
function By(a){y(arguments,function(a){!Ca(a)||a instanceof Element?yy(a,!0):y(a,function(a){By(a)})})}
function Cy(a){y(arguments,function(a){!Ca(a)||a instanceof Element?yy(a,!1):y(a,function(a){Cy(a)})})}
function Dy(a){y(arguments,function(a){Ca(a)?y(a,function(a){Dy(a)}):Ay(a)})}
var Ey={};function Fy(a){if(a in Ey)return Ey[a];var b;if((b=document.body.style)&&a in b)b=a;else{var c=vf();c?(c=c.toLowerCase(),c+=Mb(a),b=!p(b)||c in b?c:null):b=null}return Ey[a]=b}
function Gy(a){if(!vl()||!a)return null;var b=Fy("transitionProperty");b=Hf(a,b);var c=Fy("transitionDuration");a=Hf(a,c);if(!b||!a)return null;var d={},e=b.split(",");y(a.split(","),function(a,b){var c=e[b].trim();c&&(d[c]=-1<a.indexOf("ms")?parseInt(a,10):Math.round(1E3*parseFloat(a)))});
return d}
;var Hy={},Iy="ontouchstart"in document;function Jy(a,b,c){b in Hy||(Hy[b]=new er);Hy[b].subscribe(a,c)}
function Ky(a,b,c){if(b in Hy){var d=Hy[b];gr(d,a,c);0>=ir(d)&&(d.dispose(),delete Hy[b])}}
function Ly(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return uf(c,function(a){return I(a,b)},!0,d)}
function My(a){var b="mouseover"==a.type&&"mouseenter"in Hy||"mouseout"==a.type&&"mouseleave"in Hy,c=a.type in Hy||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=Hy[b];for(var d in c.l){var e=Ly(b,d,a.target);e&&!uf(a.relatedTarget,function(a){return a==e},!0)&&c.ma(d,e,b,a)}}if(b=Hy[a.type])for(d in b.l)(e=Ly(a.type,d,a.target))&&b.ma(d,e,a.type,a)}}
O(document,"blur",My,!0);O(document,"change",My,!0);O(document,"click",My);O(document,"focus",My,!0);O(document,"mouseover",My);O(document,"mouseout",My);O(document,"mousedown",My);O(document,"keydown",My);O(document,"keyup",My);O(document,"keypress",My);O(document,"cut",My);O(document,"paste",My);Iy&&(O(document,"touchstart",My),O(document,"touchend",My),O(document,"touchcancel",My));function U(a){this.B=a;this.G={};this.F=[];this.H=[]}
g=U.prototype;g.Y=function(a){return E(a,V(this))};
function V(a,b){return"yt-uix"+(a.B?"-"+a.B:"")+(b?"-"+b:"")}
g.unregister=function(){pt(this.F);this.F.length=0;eu(this.H);this.H.length=0};
g.init=ya;g.dispose=ya;g.na=function(a,b,c){this.F.push(Q(a,b,c||this))};
function Ny(a,b,c){a.H.push(du(b,c,a))}
function X(a,b,c,d){d=V(a,d);var e=u(c,a);Jy(d,b,e);a.G[c]=e}
function Y(a,b,c,d){Ky(V(a,d),b,a.G[c]);delete a.G[c]}
g.Ea=function(a,b,c){var d=this.D(a,b);if(d&&(d=t(d))){var e=fc(arguments,2);ec(e,0,0,a);d.apply(null,e)}};
g.D=function(a,b){return T(a,b)};
function Oy(a,b){Tw(a,"tooltip-text",b)}
function Py(a,b,c){return D(V(a,b),c)}
;function Qy(){U.call(this,"button");this.j=null;this.w=[];this.l={}}
x(Qy,U);za(Qy);g=Qy.prototype;g.register=function(){X(this,"click",this.Le);X(this,"keydown",this.Md);X(this,"keypress",this.Me);this.na("page-scroll",this.Uf)};
g.unregister=function(){Y(this,"click",this.Le);Y(this,"keydown",this.Md);Y(this,"keypress",this.Me);Ry(this);this.l={};Qy.K.unregister.call(this)};
g.Le=function(a){a&&!a.disabled&&(Sy(this,a),this.click(a))};
g.Md=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=Ty(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=kf(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.mg;else"table"==e&&(f=this.lg);f&&Uy(this,a,b,c,u(f,this))}}};
g.Uf=function(){var a=this.l;if(0!=oc(a))for(var b in a){var c=a[b],d=Vy(this,c);if(void 0==d||void 0==c)break;Wy(this,d,c,!0)}};
function Uy(a,b,c,d,e){var f=zy(c),h=9==d.keyCode;h||32==d.keyCode||13==d.keyCode?(d=Xy(a,c))?(b=df(d),"a"==b.tagName.toLowerCase()?Dx(b.href):Hs(b,"click")):h&&Yy(a,b):f?27==d.keyCode?(Xy(a,c),Yy(a,b)):e(b,c,d):(a=I(b,V(a,"reverse"))?38:40,d.keyCode==a&&(Hs(b,"click"),d.preventDefault()))}
g.Me=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=Ty(this,a),zy(a)&&c.preventDefault())};
function Xy(a,b){var c=V(a,"menu-item-highlight"),d=D(c,b);d&&K(d,c);return d}
function Zy(a,b,c){J(c,V(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=V(a,"item-id-"+Fa(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
g.lg=function(a,b,c){var d=Xy(this,b);if(d){var e=us("table",b);b=Ke("td",null,e);d=$y(d,b,Ke("td",null,us("tr",e)).length,c);-1!=d&&(Zy(this,a,b[d]),c.preventDefault())}};
g.mg=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Xy(this,b);d&&(b=Pb(Ke("li",null,b),zy),Zy(this,a,b[$y(d,b,1,c)]),c.preventDefault())}};
function $y(a,b,c,d){var e=b.length;a=Nb(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function az(a,b){var c=b.iframeMask;c||(c=document.createElement("iframe"),c.src='javascript:""',c.className=V(a,"menu-mask"),Cy(c),b.iframeMask=c);return c}
function Wy(a,b,c,d){var e=E(b,V(a,"group")),f=!!a.D(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var h=8,k=Sf(b);if(I(b,V(a,"reverse"))){f=8;h=9;k=k.top+"px";try{c.style.maxHeight=k}catch(w){}}I(b,"flip")&&(I(b,V(a,"reverse"))?(f=12,h=13):(f=13,h=12));var l;a.D(b,"button-has-sibling-menu")?l=Kf(e):a.D(b,"button-menu-root-container")&&(l=bz(a,b));B&&!me("8")&&(l=null);if(l){var n=Sf(l);n=new xf(-n.top,n.left,n.top,-n.left)}l=new De(0,1);I(b,V(a,"center-menu"))&&(l.x-=Math.round((Qf(c).width-Qf(b).width)/
2));d&&(l.y+=Se(document).y);if(a=az(a,b))b=Qf(c),a.style.width=b.width+"px",a.style.height=b.height+"px",br(e,f,a,h,l,n,197),d&&Ef(a,"position","fixed");br(e,f,c,h,l,n,197)}
function bz(a,b){if(a.D(b,"button-menu-root-container")){var c=a.D(b,"button-menu-root-container");return E(b,c)}return document.body}
g.Oe=function(a){if(a){var b=Ty(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.D(a,"button-has-sibling-menu")?c=a.parentNode:c=bz(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=az(this,a);d&&c.appendChild(d);(c=!!this.D(a,"button-menu-fixed"))&&(this.l[qs(a).toString()]=b);Wy(this,a,b,c);qt("yt-uix-button-menu-before-show",a,b);By(b);d&&By(d);
this.Ea(a,"button-menu-action",!0);J(a,V(this,"active"));b=u(this.Ne,this,a,!1);d=u(this.Ne,this,a,!0);c=u(this.yh,this,a,void 0);this.j&&Ty(this,this.j)==Ty(this,a)||Ry(this);R("yt-uix-button-menu-show",a);P(this.w);this.w=[O(document,"click",d),O(document,"contextmenu",b),O(window,"resize",c)];this.j=a}}};
function Yy(a,b){if(b){var c=Ty(a,b);if(c){a.j=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Cy(c);a.Ea(b,"button-menu-action",!1);var d=az(a,b),e=qs(c).toString();delete a.l[e];M(function(){d&&d.parentNode&&(Cy(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=E(b,V(a,"group"));
var f=[V(a,"active")];e&&f.push(V(a,"group-active"));Qo(b,f);R("yt-uix-button-menu-hide",b);P(a.w);a.w.length=0}}
g.yh=function(a,b){var c=Ty(this,a);if(c){b&&(b instanceof rd?Cd(c,b):jf(c,b));var d=!!this.D(a,"button-menu-fixed");Wy(this,a,c,d)}};
function Vy(a,b){return E(b.activeButtonNode||b.parentNode,V(a))}
g.Ne=function(a,b,c){c=Es(c);var d=E(c,V(this));if(d){d=Ty(this,d);var e=Ty(this,a);if(d==e)return}d=E(c,V(this,"menu"));e=d==Ty(this,a);var f=I(c,V(this,"menu-item")),h=I(c,V(this,"menu-close"));if(!d||e&&(f||h))Yy(this,a),d&&b&&this.D(a,"button-menu-indicate-selected")&&((a=D(V(this,"content"),a))&&jf(a,rf(c)),cz(this,d,c))};
function cz(a,b,c){var d=V(a,"menu-item-selected");y(Me(d,b),function(a){K(a,d)});
J(c.parentNode,d)}
function Ty(a,b){if(!b.widgetMenu){var c=a.D(b,"button-menu-id");c=c&&C(c);var d=V(a,"menu");c?Po(c,[d,V(a,"menu-external")]):c=D(d,b);b.widgetMenu=c}return b.widgetMenu}
g.isToggled=function(a){return I(a,V(this,"toggled"))};
function Sy(a,b){if(a.D(b,"button-toggle")){var c=E(b,V(a,"group")),d=V(a,"toggled"),e=I(b,d);if(c&&a.D(c,"button-toggle-group")){var f=a.D(c,"button-toggle-group");y(Me(V(a),c),function(a){a!=b||"optional"==f&&e?(K(a,d),a.removeAttribute("aria-pressed")):(J(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),To(b,d)}}
g.click=function(a){if(Ty(this,a)){var b=Ty(this,a);if(b){var c=Vy(this,b);c&&c!=a?(Yy(this,c),M(u(this.Oe,this,a),1)):zy(b)?Yy(this,a):this.Oe(a)}a.focus()}this.Ea(a,"button-action")};
function Ry(a){a.j&&Yy(a,a.j)}
;function dz(a){U.call(this,a);this.w=null}
x(dz,U);g=dz.prototype;g.Y=function(a){var b=U.prototype.Y.call(this,a);return b?b:a};
g.register=function(){this.na("yt-uix-kbd-nav-move-out-done",this.hide)};
g.dispose=function(){ez(this);dz.K.dispose.call(this)};
g.D=function(a,b){var c=dz.K.D.call(this,a,b);return c?c:(c=dz.K.D.call(this,a,"card-config"))&&(c=t(c))&&c[b]?c[b]:null};
g.show=function(a){var b=this.Y(a);if(b){J(b,V(this,"active"));var c=fz(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;gz(this,a,c);var d=V(this,"card-visible"),e=this.D(a,"card-delegate-show")&&this.D(b,"card-action");this.Ea(b,"card-action",a);this.w=a;Cy(c);M(u(function(){e||(By(c),R("yt-uix-card-show",b,a,c));hz(c);J(c,d);R("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function fz(a,b,c){var d=c||b,e=V(a,"card");c=iz(a,d);var f=C(V(a,"card")+qs(d));if(f)return a=D(V(a,"card-body"),f),hf(a,c)||(bf(c),a.appendChild(c)),f;f=document.createElement("div");f.id=V(a,"card")+qs(d);f.className=e;(d=a.D(d,"card-class"))&&Po(f,d.split(/\s+/));d=document.createElement("div");d.className=V(a,"card-border");b=a.D(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var h=document.createElement("div");
h.className=V(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;bf(c);h.appendChild(c);d.appendChild(a);d.appendChild(h);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function gz(a,b,c){var d=a.D(b,"orientation")||"horizontal";var e=D(V(a,"anchor"),b)||b;var f=a.D(b,"position"),h=!!a.D(b,"force-position"),k=a.D(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==f;if(n&&l){var w=13;var F=8}else n&&!l?(w=12,F=9):!n&&l?(w=9,F=12):(w=8,F=13);var W=Tf(document.body);f=Tf(b);W!=f&&(w^=4);if(d){f=b.offsetHeight/2-12;var ba=new De(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,ba=new De(b.offsetWidth+6,-12);var la=
Qf(c);f=Math.min(f,(d?la.height:la.width)-24-6);6>f&&(f=6,d?ba.y+=12-b.offsetHeight/2:ba.x+=12-b.offsetWidth/2);la=null;h||(la=10);b=V(a,"card-flip");a=V(a,"card-reverse");Ro(c,b,n);Ro(c,a,l);la=br(e,w,c,F,ba,null,la);!h&&la&&(la&48&&(n=!n,w^=4,F^=4),la&192&&(l=!l,w^=1,F^=1),Ro(c,b,n),Ro(c,a,l),br(e,w,c,F,ba));k&&(e=parseInt(c.style.top,10),h=Se(document).y,Ef(c,"position","fixed"),Ef(c,"top",e-h+"px"));W&&(c.style.right="",e=Sf(c),e.left=e.left||parseInt(c.style.left,10),h=Qe(window),c.style.left=
"",c.style.right=h.width-e.left-e.width+"px");e=D("yt-uix-card-body-arrow",c);h=D("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!W&&n||W&&!n?"left":"right";e.setAttribute("style","");h.setAttribute("style","");e.style[d]=f+"px";h.style[d]=f+"px";l=D("yt-uix-card-arrow",c);n=D("yt-uix-card-arrow-background",c);l&&n&&(c="right"==d?Qf(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")}
g.hide=function(a){if(a=this.Y(a)){var b=C(V(this,"card")+qs(a));b&&(K(a,V(this,"active")),K(b,V(this,"card-visible")),Cy(b),this.w=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(bf(b.cardMask),b.cardMask=null))}};
function ez(a){a.w&&a.hide(a.w)}
g.xh=function(a,b){var c=this.Y(a);if(c){if(b){var d=iz(this,c);if(!d)return;b instanceof rd?Cd(d,b):jf(d,b)}I(c,V(this,"active"))&&(c=fz(this,a,c),gz(this,a,c),By(c),hz(c))}};
g.isActive=function(a){return(a=this.Y(a))?I(a,V(this,"active")):!1};
function iz(a,b){var c=b.cardContentNode;if(!c){var d=V(a,"content"),e=V(a,"card-content");(c=(c=a.D(b,"card-id"))?C(c):D(d,b))||(c=document.createElement("div"));var f=c;K(f,d);J(f,e);b.cardContentNode=c}return c}
function hz(a){var b=a.cardMask;b||(b=document.createElement("iframe"),b.src='javascript:""',Po(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function jz(){U.call(this,"kbd-nav")}
var kz;x(jz,U);za(jz);g=jz.prototype;g.register=function(){X(this,"keydown",this.Pe);this.na("yt-uix-kbd-nav-move-in",this.Vd);this.na("yt-uix-kbd-nav-move-in-to",this.og);this.na("yt-uix-kbd-move-next",this.Wd);this.na("yt-uix-kbd-nav-move-to",this.Vb)};
g.unregister=function(){Y(this,"keydown",this.Pe);P(kz)};
g.Pe=function(a,b,c){var d=c.keyCode;if(a=E(a,V(this)))switch(d){case 13:case 32:this.Vd(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Vo(a,"kbdNavMoveOut");!c;){c=E(a.parentElement,V(this));if(!c)break a;c=Vo(c,"kbdNavMoveOut")}c=C(c);this.Vb(c);R("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&I(a,V(this,"list")))switch(d){case 40:this.Wd(b,a);break;case 38:d=document.activeElement==a,a=lz(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),mz(this,a[b]))}c.preventDefault()}};
g.Vd=function(a){var b=Vo(a,"kbdNavMoveIn");b=C(b);nz(this,a,b);this.Vb(b)};
g.og=function(a){a:{var b=document;try{var c=b&&b.activeElement;break a}catch(d){}c=null}nz(this,c,a);this.Vb(a)};
g.Vb=function(a){if(a)if(of(a))a.focus();else{var b=kf(a,function(a){return ff(a)?of(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function nz(a,b,c){if(b&&c)if(J(c,V(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Uo&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
g.Wd=function(a,b){var c=document.activeElement==b,d=lz(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),mz(this,d[c]))};
function mz(a,b){if(b){var c=tf(b,"LI");c&&(J(c,V(a,"highlight")),kz=O(b,"blur",u(function(a){K(a,V(this,"highlight"));P(kz)},a,c)))}}
function lz(a){if("UL"!=a.tagName.toUpperCase())return[];a=Pb(cf(a),function(a){return"LI"==a.tagName.toUpperCase()});
return Pb(Qb(a,function(a){return zy(a)?kf(a,function(a){return ff(a)?of(a):!1}):!1}),function(a){return!!a})}
;function oz(){U.call(this,"menu");this.l=this.j=null;this.w={};this.C={};this.A=null}
x(oz,U);za(oz);function pz(a){var b=oz.getInstance();if(I(a,V(b)))return a;var c=b.Y(a);return c?c:E(a,V(b,"content"))==b.j?b.l:null}
g=oz.prototype;g.register=function(){X(this,"click",this.Qe);X(this,"mouseenter",this.Qf);this.na("page-scroll",this.Lh);this.na("yt-uix-kbd-nav-move-out-done",function(a){a=this.Y(a);qz(this,a)});
this.A=new er};
g.unregister=function(){Y(this,"click",this.Qe);this.l=this.j=null;P(jc(rc(this.w)));this.w={};lc(this.C,function(a){bf(a)},this);
this.C={};Jk(this.A);this.A=null;oz.K.unregister.call(this)};
g.Qe=function(a,b,c){a&&(b=rz(this,a),!b.disabled&&ts(c.target,b)&&sz(this,a))};
g.Qf=function(a,b,c){a&&I(a,V(this,"hover"))&&(b=rz(this,a),ts(c.target,b)&&sz(this,a,!0))};
g.Lh=function(){this.j&&this.l&&tz(this,this.l,this.j)};
function tz(a,b,c){var d=uz(a,b);if(d){var e=Qf(c);if(e instanceof Fe){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Pf(e,!0);d.style.height=Pf(f,!0)}c==a.j&&(e=9,f=8,I(b,V(a,"reversed"))&&(e^=1,f^=1),I(b,V(a,"flipped"))&&(e^=4,f^=4),a=new De(0,1),d&&br(b,e,d,f,a,null,197),br(b,e,c,f,a,null,197))}
function sz(a,b,c){vz(a,b)&&!c?qz(a,b):(wz(a,b),!a.j||ts(b,a.j)?a.Re(b):fr(a.A,u(a.Re,a,b)))}
g.Re=function(a){if(a){var b=xz(this,a);if(b){qt("yt-uix-menu-before-show",a,b);if(this.j)ts(a,this.j)||qz(this,this.l);else{this.l=a;this.j=b;I(a,V(this,"sibling-content"))||(bf(b),document.body.appendChild(b));var c=rz(this,a).offsetWidth-2;b.style.minWidth=c+"px"}(c=uz(this,a))&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);K(b,V(this,"content-hidden"));tz(this,a,b);Po(rz(this,a),[V(this,"trigger-selected"),"yt-uix-button-toggled"]);R("yt-uix-menu-show",a);yz(b);zz(this,a);R("yt-uix-kbd-nav-move-in-to",
b);var d=u(this.Mh,this,a),e=u(this.jg,this,a);c=Fa(a).toString();this.w[c]=[O(b,"click",e),O(document,"click",d)];I(a,V(this,"indicate-selected"))&&(d=u(this.kg,this,a),this.w[c].push(O(b,"click",d)));I(a,V(this,"hover"))&&(a=u(this.Rf,this,a),this.w[c].push(O(document,"mousemove",a)))}}};
g.Rf=function(a,b){var c=Es(b);if(c){var d=rz(this,a);ts(c,d)||Az(this,c)||Bz(this,a)}};
g.Mh=function(a,b){var c=Es(b);if(c){if(Az(this,c)){var d=E(c,V(this,"content")),e=tf(c,"LI");e&&d&&hf(d,e)&&qt("yt-uix-menu-item-clicked",c);c=E(c,V(this,"close-on-select"));if(!c)return;d=pz(c)}qz(this,d||a)}};
function wz(a,b){if(b){var c=E(b,V(a,"content"));c&&y(Me(V(a),c),function(a){!ts(a,b)&&vz(this,a)&&Bz(this,a)},a)}}
function qz(a,b){if(b){var c=[];c.push(b);var d=xz(a,b);d&&(d=Me(V(a),d),d=cc(d),c=c.concat(d),y(c,function(a){vz(this,a)&&Bz(this,a)},a))}}
function Bz(a,b){if(b){var c=xz(a,b);Qo(rz(a,b),[V(a,"trigger-selected"),"yt-uix-button-toggled"]);J(c,V(a,"content-hidden"));var d=xz(a,b);d&&Oe(d,{"aria-expanded":"false"});(d=uz(a,b))&&d.parentNode&&bf(d);c&&c==a.j&&(a.l.appendChild(c),a.j=null,a.l=null,a.A&&a.A.ma("ROOT_MENU_REMOVED"));R("yt-uix-menu-hide",b);c=Fa(b).toString();P(a.w[c]);delete a.w[c]}}
g.jg=function(a,b){var c=Es(b);c&&Cz(this,a,c)};
g.kg=function(a,b){var c=Es(b);if(c){var d=rz(this,a);if(d&&(c=tf(c,"LI")))if(c=rf(c).trim(),d.hasChildNodes()){var e=Qy.getInstance();(d=D(V(e,"content"),d))&&jf(d,c)}else jf(d,c)}};
function zz(a,b){var c=xz(a,b);if(c){y(c.children,function(a){"LI"==a.tagName&&Oe(a,{role:"menuitem"})});
Oe(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Fa(c),c.id=d);(c=rz(a,b))&&Oe(c,{"aria-controls":d})}}
function Cz(a,b,c){var d=xz(a,b);d&&I(b,V(a,"checked"))&&(a=tf(c,"LI"))&&(a=D("yt-ui-menu-item-checked-hid",a))&&(y(Me("yt-ui-menu-item-checked",d),function(a){So(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),So(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function vz(a,b){var c=xz(a,b);return c?!I(c,V(a,"content-hidden")):!1}
function yz(a){y(Ke("UL",null,a),function(a){a.tabIndex=0;var b=jz.getInstance();Po(a,[V(b),V(b,"list")])})}
function xz(a,b){var c=T(b,"menu-content-id");return c&&(c=C(c))?(Po(c,[V(a,"content"),V(a,"content-external")]),c):b==a.l?a.j:D(V(a,"content"),b)}
function uz(a,b){var c=Fa(b).toString(),d=a.C[c];if(!d){d=Ye(document,"IFRAME");d.src='javascript:""';var e=[V(a,"mask")];y(Oo(b),function(a){e.push(a+"-mask")});
Po(d,e);a.C[c]=d}return d||null}
function rz(a,b){return D(V(a,"trigger"),b)}
function Az(a,b){return ts(b,a.j)||ts(b,a.l)}
;function Dz(){dz.call(this,"clickcard");this.j={};this.l={}}
x(Dz,dz);za(Dz);g=Dz.prototype;g.register=function(){Dz.K.register.call(this);X(this,"click",this.ud,"target");X(this,"click",this.rd,"close")};
g.unregister=function(){Dz.K.unregister.call(this);Y(this,"click",this.ud,"target");Y(this,"click",this.rd,"close");for(var a in this.j)P(this.j[a]);this.j={};for(a in this.l)P(this.l[a]);this.l={}};
g.ud=function(a,b,c){c.preventDefault();b=tf(c.target,"button");b&&b.disabled||(a=(b=this.D(a,"card-target"))?Je(b):a,b=this.Y(a),this.D(b,"disabled")||(I(b,V(this,"active"))?(this.hide(a),K(b,V(this,"active"))):(this.show(a),J(b,V(this,"active")))))};
g.show=function(a){Dz.K.show.call(this,a);var b=this.Y(a),c=Fa(a).toString();if(!T(b,"click-outside-persists")){if(this.j[c])return;b=O(document,"click",u(this.vd,this,a));var d=O(window,"blur",u(this.vd,this,a));this.j[c]=[b,d]}a=O(window,"resize",u(this.xh,this,a,void 0));this.l[c]=a};
g.hide=function(a){Dz.K.hide.call(this,a);a=Fa(a).toString();var b=this.j[a];b&&(P(b),this.j[a]=null);if(b=this.l[a])P(b),delete this.l[a]};
g.vd=function(a,b){var c="yt-uix"+(this.B?"-"+this.B:"")+"-card",d=null;b.target&&(d=E(b.target,c)||E(pz(b.target),c));(d=d||E(document.activeElement,c)||E(pz(document.activeElement),c))||this.hide(a)};
g.rd=function(a){(a=E(a,V(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Ez(){dz.call(this,"hovercard")}
x(Ez,dz);za(Ez);g=Ez.prototype;g.register=function(){X(this,"mouseenter",this.Pd,"target");X(this,"mouseleave",this.Rd,"target");X(this,"mouseenter",this.Qd,"card");X(this,"mouseleave",this.Sd,"card")};
g.unregister=function(){Y(this,"mouseenter",this.Pd,"target");Y(this,"mouseleave",this.Rd,"target");Y(this,"mouseenter",this.Qd,"card");Y(this,"mouseleave",this.Sd,"card")};
g.Pd=function(a){if(Fz!=a){Fz&&(this.hide(Fz),Fz=null);var b=u(this.show,this,a),c=parseInt(this.D(a,"delay-show"),10);b=M(b,-1<c?c:200);Tw(a,"card-timer",b.toString());Fz=a;a.alt&&(Tw(a,"card-alt",a.alt),a.alt="");a.title&&(Tw(a,"card-title",a.title),a.title="")}};
g.Rd=function(a){var b=parseInt(this.D(a,"card-timer"),10);N(b);this.Y(a).isCardHidable=!0;b=parseInt(this.D(a,"delay-hide"),10);b=-1<b?b:200;M(u(this.Zf,this,a),b);if(b=this.D(a,"card-alt"))a.alt=b;if(b=this.D(a,"card-title"))a.title=b};
g.Zf=function(a){this.Y(a).isCardHidable&&(this.hide(a),Fz=null)};
g.Qd=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
g.Sd=function(a){a&&this.hide(a.cardTargetNode)};
var Fz=null;function Gz(a,b,c,d,e,f){this.j=a;this.J=null;this.w=D("yt-dialog-fg",this.j)||this.j;if(a=D("yt-dialog-title",this.w)){var h="yt-dialog-title-"+Fa(this.w);a.setAttribute("id",h);this.w.setAttribute("aria-labelledby",h)}this.w.setAttribute("tabindex","-1");this.O=D("yt-dialog-focus-trap",this.j);this.U=!1;this.A=new er;this.H=[];this.H.push(Gs(this.j,"click",u(this.Cg,this),"yt-dialog-dismiss"));this.H.push(O(this.O,"focus",u(this.Af,this),!0));Hz(this,"content");this.W=b;this.da=c;this.Z=d;this.M=
e;this.ia=f;this.F=this.G=this.B=null}
var Iz={LOADING:"loading",hi:"content",Nj:"working"};function Jz(a,b,c){a.T()||a.A.subscribe((c?"pre-":"post-")+"all",b)}
function Hz(a,b){var c=D("yt-dialog-fg-content",a.j),d=[];lc(Iz,function(a){d.push("yt-dialog-show-"+a)});
Qo(c,d);J(c,"yt-dialog-show-"+b)}
g=Gz.prototype;
g.show=function(a){if(!this.T()){this.J=document.activeElement;if(!this.Z){this.l||(this.l=C("yt-dialog-bg"),this.l||(this.l=Ye(document,"div"),this.l.id="yt-dialog-bg",this.l.className="yt-dialog-bg",document.body.appendChild(this.l)));var b=window,c=b.document;var d=0;if(c){d=c.body;var e=c.documentElement;if(e&&d)if(b=Qe(b).height,Re(c)&&e.scrollHeight)d=e.scrollHeight!=b?e.scrollHeight:e.offsetHeight;else{c=e.scrollHeight;var f=e.offsetHeight;e.clientHeight!=f&&(c=d.scrollHeight,f=d.offsetHeight);
d=c>b?c>f?c:f:c<f?c:f}else d=0}this.l.style.height=d+"px";By(this.l)}this.Jd();d=Kz(this);Lz(d);this.B=O(document,"keydown",u(this.ig,this));d=this.j;e=Q("player-added",this.Jd,this);Tw(d,"player-ready-pubsub-key",e);this.da&&(this.G=O(document,"click",u(this.gh,this)));By(this.j);this.w.setAttribute("tabindex","0");Mz(this);this.M||J(document.body,"yt-dialog-active");Ry(Qy.getInstance());ez(Dz.getInstance());ez(Ez.getInstance());this.F=a;R("yt-ui-dialog-show-complete",this)}};
function Nz(){return Sb(Me("yt-dialog"),function(a){return zy(a)})}
g.Jd=function(){if(!this.ia){var a=this.j;Ro(document.body,"hide-players",!0);a&&Ro(a,"preserve-players",!0)}};
function Kz(a){var b=Ke("iframe",null,a.j);y(b,function(a){var b=T(a,"onload");b&&(b=t(b))&&O(a,"load",b);if(b=T(a,"src"))a.src=b},a);
return cc(b)}
function Lz(a){y(document.getElementsByTagName("iframe"),function(b){-1==Nb(a,b)&&J(b,"iframe-hid")})}
function Oz(){y(Me("iframe-hid"),function(a){K(a,"iframe-hid")})}
g.Cg=function(a){a=a.currentTarget;a.disabled||(a=T(a,"action")||"",this.dismiss(a))};
g.dismiss=function(a){if(!this.T()){this.A.ma("pre-all");this.A.ma("pre-"+a);Cy(this.j);ez(Dz.getInstance());ez(Ez.getInstance());this.w.setAttribute("tabindex","-1");Nz()||(Cy(this.l),this.M||K(document.body,"yt-dialog-active"),ws(),Oz());this.B&&(P(this.B),this.B=null);this.G&&(P(this.G),this.G=null);var b=this.j;if(b){var c=T(b,"player-ready-pubsub-key");c&&(pt(c),Vw(b,"player-ready-pubsub-key"))}this.A.ma("post-all");R("yt-ui-dialog-hide-complete",this);"cancel"==a&&R("yt-ui-dialog-cancelled",
this);this.A&&this.A.ma("post-"+a);this.F=null;this.J&&this.J.focus()}};
g.setTitle=function(a){jf(D("yt-dialog-title",this.j),a)};
g.ig=function(a){M(u(function(){this.W||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&I(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
g.gh=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
g.T=function(){return this.U};
g.dispose=function(){zy(this.j)&&this.dismiss("dispose");P(this.H);this.H.length=0;M(u(function(){this.J=null},this),0);
this.O=this.w=null;this.A.dispose();this.A=null;this.U=!0};
g.Af=function(a){a.stopPropagation();Mz(this)};
function Mz(a){M(u(function(){this.w&&this.w.focus()},a),0)}
r("yt.ui.Dialog",Gz,void 0);function Pz(a){zr.call(this,a);this.aa=[];this.ia=[]}
x(Pz,zr);function Qz(a,b,c,d,e,f){b=Gs(f||a.Dc(),b,u(d,e||a),c);a.aa.push(b)}
Pz.prototype.Ya=function(){y(this.aa,P);pt(this.ia);Pz.K.Ya.call(this)};
Pz.prototype.na=function(a,b,c){a=Q(a,u(b,c||this));this.ia.push(a)};function Rz(){U.call(this,"form-input")}
x(Rz,U);za(Rz);g=Rz.prototype;
g.register=function(){B&&!me(9)&&(X(this,"click",this.Pa,"checkbox"),X(this,"keypressed",this.Pa,"checkbox"),X(this,"click",this.lc,"radio"),X(this,"keypressed",this.lc,"radio"));B&&!me(10)&&X(this,"click",this.Gd,"placeholder");X(this,"change",this.Pa,"checkbox");X(this,"blur",this.md,"select-element");X(this,"change",this.Ra,"select-element");X(this,"keyup",this.Ra,"select-element");X(this,"focus",this.zd,"select-element");X(this,"keyup",this.lb,"text");X(this,"keyup",this.lb,"textarea");X(this,
"keyup",this.lb,"bidi");X(this,"click",this.Vf,"reset")};
g.unregister=function(){B&&!me(9)&&(Y(this,"click",this.Pa,"checkbox"),Y(this,"keypressed",this.Pa,"checkbox"),Y(this,"click",this.lc,"radio"),Y(this,"keypressed",this.lc,"radio"));B&&!me(10)&&Y(this,"click",this.Gd,"placeholder");Y(this,"change",this.Pa,"checkbox");Y(this,"blur",this.md,"select-element");Y(this,"change",this.Ra,"select-element");Y(this,"keyup",this.Ra,"select-element");Y(this,"focus",this.zd,"select-element");Y(this,"keyup",this.lb,"text");Y(this,"keyup",this.lb,"textarea");Y(this,
"keyup",this.lb,"bidi");Rz.K.unregister.call(this)};
g.Pa=function(a){var b=E(a,V(this,"checkbox-container"));a.checked&&I(b,"partial")&&(a.checked=!1,a.indeterminate=!1,K(b,"partial"));Ro(b,"checked",a.checked)};
g.mh=function(a){var b=E(a,V(this,"radio-container"));b&&Ro(b,"checked",a.checked)};
g.lc=function(){Sz()};
g.lb=function(a){var b=a.value;Kc.test(b)?a.dir="rtl":Jc.test(b)?a.dir="ltr":a.removeAttribute("dir");B&&!me(10)&&(b=E(a,V(this,"container")))&&Ro(b,V(this,"non-empty"),!!a.value)};
g.Gd=function(a){(a=E(a,V(this,"container")))&&(a=Py(this,"text",a)||Py(this,"textarea",a))&&a.focus()};
g.zd=function(a){var b=E(a,V(this,"select"));J(b,"focused");this.Ra(a)};
g.md=function(a){var b=E(a,V(this,"select"));K(b,"focused");this.Ra(a)};
g.Ra=function(a){var b=E(a,V(this,"select")),c=D(V(this,"select-value"),b),d=Tz(a);if(d)for(""!=c.innerHTML&&d.innerHTML!=c.innerHTML&&this.Ea(a,"onchange-callback"),d=ss(d),af(c);0<d.childNodes.length;)c.appendChild(d.childNodes[0]);Ro(b,V(this,"select-disabled"),a.disabled)};
g.Vf=function(){var a=Rz.getInstance();y(Me(V(a,"checkbox")),a.Pa,a);Sz();Uz()};
function Tz(a){return a.options[Math.max(a.selectedIndex,0)]}
function Vz(a,b){a.checked=b;Rz.getInstance().Pa(a)}
function Sz(){var a=Rz.getInstance();y(Me(V(a,"radio")),a.mh,a)}
function Uz(){var a=Rz.getInstance();y(Me(V(a,"select-element")),a.Ra,a)}
function Wz(){var a;return(a=(Xz||document).querySelector('input[type="radio"][name="overlay-confirmation-preferences-update-frequency"]:checked'))?a.value:null}
;function Yz(a){Pz.call(this);this.Z=this.F=this.H=this.ca=null;this.W=a;this.j=this.La=this.oe=null}
x(Yz,Pz);function Zz(a){if("radio"==a.type)return a=E(a,"option-selectable-item-renderer-radio-container"),D("option-selectable-item-renderer-confirm-dialog",a);a=Tz(a);return C(a?a.value||a.text:null)}
function $z(a){a=tf(a,"LI");return D("option-item-supported-renderers-sub-options",a)}
g=Yz.prototype;g.Dg=function(a){a=a.target;Uz();if(this.j){K(this.j,"option-selectable-item-renderer-radio-selected");var b=$z(this.j);b&&Cy(b)}this.j=a;J(this.j,"option-selectable-item-renderer-radio-selected");(a=$z(this.j))?(By(a),a=D("yt-uix-form-input-select-element",a),a=!!T(Tz(a),"disable-submit"),this.La.disabled=a):this.La.disabled=!1};
function aA(a){if(a.H&&a.F){var b={flagging_action:a.H};cs(a.F,{format:"JSON",method:"POST",Wa:!0,R:u(function(a,b){b.feedback_text&&(this.oe=b.feedback_text);if(b.html_content){var c=Ze(b.html_content);if(this.ca){var d=this.ca,h=d.parentNode;h&&h.replaceChild(c,d)}else document.body.appendChild(c);c=new Gz(C("flagging-response-message-dialog"),!1,!0);Jz(c,u(this.gc,this),!0);c.show()}else this.gc()},a),
onError:u(function(){this.La.disabled=!1},a),
V:b})}else bA(a)}
function bA(a){if(a.Z){var b={feedback_tokens:a.Z};cs("/feed_change_ajax?action_give_feedback=1",{format:"JSON",method:"POST",Wa:!0,R:u(function(a,b){if(b.feedback_responses){var c=new Gz(this.ca,!1,!0);Jz(c,u(this.gc,this),!0);c.dismiss("close");cA(this,b)}else this.gc()},a),
onError:u(function(){this.La.disabled=!1},a),
V:b})}}
function cA(a,b){var c=D("service-endpoint-replace-enclosing-action-notification",a.W);var d=a.W;var e=E(d,"yt-lockup"),f=E(d,"feed-item-container");if(e){var h=D("yt-lockup-notifications-container",e);d=D("yt-lockup-dismissable",e)}else if(f)h=D("feed-item-dismissal-notices",f),d=D("feed-item-dismissable",f);else return;h&&c&&(af(h),$e(h,c));var k;h&&(k=function(){By(h);c&&By(c)});
d?dA(d,k):k&&k();R("yt-dom-content-change",e||f);e=document.createElement("div");b.feedback_responses.length?(k=b.feedback_responses[0].follow_up_confirmation_html,Cd(e,k)):e.innerHTML="Thanks for the report";e.className="follow-up-confirmation hid";k=D("replace-enclosing-action-options",c);c.insertBefore(e,c.firstChild);c.removeChild(k);e=D("replace-enclosing-action-message",c);J(e,"hid");e=D("follow-up-confirmation",c);K(e,"hid")}
function dA(a,b){Cy(a);b&&b();R("yt-dom-content-change",a)}
g.Eg=function(){this.La.disabled=!0;this.F=T(this.j,"flag-url");this.H=T(this.j,"flag-action");this.Z=T(this.j,"feedback-token");var a=Zz(this.j),b=$z(this.j);b&&(a=D("yt-uix-form-input-select-element",b),a=Zz(a));if(a){if(this.ca){b=this.ca;var c=b.parentNode;c&&c.replaceChild(a,b)}else document.body.appendChild(a);b=new Gz(a,!1,!0);Qz(this,"click","option-selectable-item-renderer-confirm-button",this.Bg,null,a);b.show()}else aA(this)};
g.Bg=function(a){var b=E(a.target,"option-selectable-item-renderer-confirm-button");a=T(b,"url");var c=T(b,"flag-action");b=T(b,"flag-url");a&&window.open(a,Kb(a).toString(36));c&&b&&(this.H=c,this.F=b);aA(this)};
g.gc=function(){R("commentreported",this.W,this.oe)};
g.vg=function(a){a=!!T(Tz(a.target),"disable-submit");this.La.disabled=a};
g.Rb=function(){Yz.K.Rb.call(this);this.La=this.l?D("options-renderer-submit-button",this.l||this.C.j):null;this.ca=E(this.La,"yt-dialog");Qz(this,"click","options-renderer-submit-button",this.Eg);Qz(this,"click","option-selectable-item-renderer-radio",this.Dg);Qz(this,"change","yt-uix-form-input-select-element",this.vg)};
g.Ya=function(){this.W=this.j=this.La=this.ca=null;Yz.K.Ya.call(this)};function eA(a){Gz.call(this,a,!1,!0);this.ga=C("report-form-modal-renderer");this.C=null;this.j=a}
x(eA,Gz);eA.prototype.aa=function(){this.dismiss("close")};
eA.prototype.show=function(a){eA.K.show.call(this,a);this.C=new Yz(this.F);a=D("yt-dialog-fg-content",this.j);var b=this.C;if(b.ib)throw Error("Component already rendered");if(a){b.ga=!0;var c=Ie(a);b.C&&b.C.j==c||(b.C=Ge(a));b.l=a;b.Rb()}else throw Error("Invalid element to decorate");ot("yt-ui-dialog-hide-complete",u(this.aa,this))};
eA.prototype.dismiss=function(a){eA.K.dismiss.call(this,a);this.C&&(this.C=null);bf(this.ga)};function fA(){U.call(this,"report-thumb-wrap");this.j=null;this.l=!1}
ia(fA,U);fA.prototype.register=function(){X(this,"click",this.w)};
fA.prototype.unregister=function(){Y(this,"click",this.w);U.prototype.unregister.call(this)};
fA.prototype.w=function(a){var b=pz(a);b=E(b,"yt-lockup");this.j=Ve("DIV",{"class":"video-renderer-abuse"});var c=Ve("DIV",{"class":"video-renderer-abuse-content"});this.j.appendChild(c);b.appendChild(this.j);gA(this,df(this.j),a,b);By(this.j)};
function gA(a,b,c,d){if(!a.l){var e=T(c,"url");(c=T(c,"params"))&&e&&(c={params:c},a.l=!0,cs(e,{format:"JSON",method:"POST",Wa:!0,R:function(c,e){a.l=!1;if(!C("report-form-modal-renderer")){var f=Ze(e.html_content);b.appendChild(f);f=D("yt-dialog",C("report-form-modal-renderer"));(new eA(f)).show(d)}},
onError:function(){a.l=!1},
V:c}))}}
za(fA);function hA(){U.call(this,"overlay");this.A=this.l=this.w=this.j=null}
x(hA,U);za(hA);g=hA.prototype;g.register=function(){X(this,"click",this.Xc,"target");X(this,"click",this.hide,"close");iA(this)};
g.unregister=function(){hA.K.unregister.call(this);Y(this,"click",this.Xc,"target");Y(this,"click",this.hide,"close");this.A&&(pt(this.A),this.A=null);this.l&&(P(this.l),this.l=null)};
g.Xc=function(a){if(!this.j||!zy(this.j.j)){var b=this.Y(a);a=jA(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.D(b,"disable-shortcuts")||!1,d=!!this.D(b,"disable-outside-click-dismiss")||!1;this.j=new Gz(a,c);this.w=b;var e=D("yt-dialog-fg",a);if(e){var f=this.D(b,"overlay-class")||"",h=this.D(b,"overlay-style")||"default",k=this.D(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(V(this,h));f.push(V(this,k));Po(e,f)}this.j.show();R("yt-uix-kbd-nav-move-to",e||a);iA(this);c||
d||(c=u(function(a){I(a.target,"yt-dialog-base")&&kA(this)},this),a=D("yt-dialog-base",a),this.l=O(a,"click",c));
this.Ea(b,"overlay-shown");R("yt-uix-overlay-shown",b)}}};
function iA(a){a.A||(a.A=Q("yt-uix-overlay-hide",lA));a.j&&Jz(a.j,function(){var a=hA.getInstance();a.w=null;a.j.dispose();a.j=null})}
function kA(a){if(a.j){var b=a.w;a.j.dismiss("overlayhide");b&&a.Ea(b,"overlay-hidden");a.w=null;a.l&&(P(a.l),a.l=null);a.j=null}}
function jA(a,b){var c;if(a)if(c=D("yt-dialog",a)){var d=C("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=E(b,"yt-dialog"));return c}
function mA(){var a=hA.getInstance();if(a.w)a=D("yt-dialog-fg-content",a.w.overlayContentNode);else a:{if(a=Me("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=E(a[b],"yt-dialog");if(zy(c)){a=a[b];break a}}a=null}return a}
g.hide=function(a){a&&a.disabled||R("yt-uix-overlay-hide")};
function lA(){kA(hA.getInstance())}
g.show=function(a){this.Xc(a)};function nA(){U.call(this,"char-counter")}
x(nA,U);za(nA);nA.prototype.register=function(){X(this,"keydown",this.j,"input");X(this,"paste",this.j,"input");X(this,"cut",this.j,"input");X(this,"blur",this.j,"input")};
nA.prototype.unregister=function(){Y(this,"keydown",this.j,"input");Y(this,"paste",this.j,"input");Y(this,"cut",this.j,"input");Y(this,"blur",this.j,"input")};
nA.prototype.j=function(a){var b=this.Y(a);if(b){var c="true"==this.D(b,"count-char-by-size"),d=parseInt(this.D(b,"char-limit"),10);isNaN(d)||0>=d||M(u(function(){var e="true"==this.D(b,"use-plaintext-length");oA(a,c,e);var f=parseInt(this.D(b,"warn-at-chars-remaining"),10);isNaN(f)&&(f=0);var h=d-pA(a,c,e);Ro(b,V(this,"maxed-out"),h<f);Ro(b,V(this,"maxed-out-singular"),1==Math.abs(h));"true"==this.D(b,"maxed-out-as-positive")&&(h=Math.abs(h));y(Me(V(this,"remaining"),b),function(a){jf(a,h)})},this),
0)}};
function oA(a,b,c){var d=parseInt(a.getAttribute("maxlength"),10);if(!isNaN(d)){var e=pA(a,b,c);if(b){if(e>d){b=a.value;c=b.length;var f=0;d=e-d;e="";do{e+=b[c-f];var h=unescape(encodeURIComponent(e)).length;f++}while(h<d);a.value=a.value.substring(0,c-f)}}else e>d&&(a.value=a.value.substring(0,d))}}
function pA(a,b,c){a=a.value;c&&(a=jp(a));return b?unescape(encodeURIComponent(a)).length:a.length}
;function qA(){U.call(this,"close")}
x(qA,U);za(qA);qA.prototype.register=function(){X(this,"click",this.j)};
qA.prototype.unregister=function(){Y(this,"click",this.j)};
qA.prototype.j=function(a){var b,c=this.D(a,"close-parent-class"),d=this.D(a,"close-parent-id");d?b=C(d):c&&(b=E(a,c));b&&(Cy(b),c=this.D(a,"close-focus-target-id"))&&(c=C(c))&&(d=Qy.getInstance(),d.isToggled(c)&&Sy(d,c),c.focus());this.Ea(a,"close-callback",b)};function rA(){U.call(this,"expander")}
x(rA,U);za(rA);rA.prototype.register=function(){X(this,"click",this.j,"head");X(this,"keypress",this.l,"head")};
rA.prototype.unregister=function(){Y(this,"click",this.j,"head");Y(this,"keypress",this.l,"head")};
rA.prototype.j=function(a){sA(this,a)};
rA.prototype.l=function(a,b,c){c&&13==c.keyCode&&sA(this,a)};
function sA(a,b){var c=a.Y(b);if(c){c&&(of(c)||Oe(c,{tabIndex:"0"}),c.focus());To(c,V(a,"collapsed"));var d=!I(c,V(a,"collapsed"));R("yt-uix-expander-toggle",c,d);R("yt-dom-content-change",c);a.Ea(c,"expander-action")}}
;function tA(){U.call(this,"languagepicker");this.j={}}
x(tA,U);za(tA);g=tA.prototype;g.register=function(){X(this,"click",this.Fd,"menu-item");X(this,"keyup",this.xe,"search-input");X(this,"keydown",this.Id,"search-input");X(this,"blur",this.Hd,"search-input");X(this,"focus",this.Ed);this.na("yt-uix-button-menu-before-show",this.Pf);this.na("yt-uix-button-menu-hide",this.Of)};
g.unregister=function(){Y(this,"click",this.Fd,"menu-item");Y(this,"keyup",this.xe,"search-input");Y(this,"keydown",this.Id,"search-input");Y(this,"blur",this.Hd,"search-input");Y(this,"focus",this.Ed);P(rc(this.j));this.j={};tA.K.unregister.call(this)};
g.Pf=function(a){if(I(a,"yt-languagepicker-button")){var b=Fa(a);a=O(a,"keydown",u(this.Kf,this));this.j[b]=a}};
g.Of=function(a){I(a,"yt-languagepicker-button")&&(a=Fa(a),P(this.j[a]),delete this.j[a])};
function uA(a,b){return Tb(b,function(b){return!Tb(a,function(a){return 0!=a.lastIndexOf(b,0)})})}
function vA(a,b,c){y(a,function(a){var d=Vo(a,"value"),f=wA(a);yy(a,d!=c&&f&&uA(f,b))})}
function wA(a){if("undefined"===typeof a.j){var b=Vo(a,"searchTerms");b?(a.j=[],y(b.split(";"),function(b){dc(a.j,xA(b))})):a.j=xA(rf(a))}return a.j}
function xA(a){return a.toLowerCase().match(/[^ \(\)\[\]]+/g)||[]}
function yA(a,b){var c=Qy.getInstance(),d=Vy(c,a);Xy(c,a);Zy(c,d,b)}
g.xe=function(a){var b=this.Y(a),c=Py(this,"search-result",b),d=xA(a.value);if(d){var e=cf(c);a=Vo(b,"fallbackOption");vA(e,d,a);d=Ub(e,zy);a=c.querySelector('li[data-value="'+a+'"]');yy(c,!(!d&&!a));d?yA(b,d):a&&(By(a),yA(b,a))}else yy(c,!1)};
g.Id=function(a,b,c){b=Qy.getInstance();a=this.Y(a);var d=Vy(b,a);switch(c.keyCode){case 13:case 9:(b=Xy(b,a))&&Hs(df(b),"click");c.preventDefault();break;case 27:Xy(b,a);Yy(b,d);c.preventDefault();break;case 38:case 40:d.focus(),c.preventDefault()}};
g.Fd=function(a){var b=Vo(a,"value"),c=this.Y(a),d=Vo(c,"languagepickerInputId");d=C(d);d.value=b;Hs(d,"change");(d=Py(this,"suggestions",c))&&!d.querySelector('li[data-value="'+b+'"]')&&((b=Py(this,"selected",c))&&bf(b),a=a.cloneNode(!0),J(a,V(this,"selected")),d.insertBefore(a,d.childNodes[0]||null))};
function zA(a,b){var c=Qy.getInstance(),d=a.Y(b);Vy(c,d).focus()}
g.Hd=function(a){zA(this,a)};
g.Ed=function(a,b,c){"INPUT"!=c.target.tagName&&zA(this,a)};
g.Kf=function(a){if(38!=a.keyCode&&40!=a.keyCode){var b=a.target,c=Qy.getInstance();b=Ty(c,b);b=Py(this,"search-input",b);13!=a.keyCode&&9!=a.keyCode&&32!=a.keyCode&&(b.value="");b.focus()}};var AA;function BA(){if(!p(AA)){var a=document.createElement("div");p(a.style.MozTransition)?AA="Moz":p(a.style.WebkitTransition)?AA="Webkit":p(a.style.j)?AA="O":AA=null}return AA}
;function CA(a,b){tx.call(this,a,b)}
x(CA,tx);function DA(a,b,c){b=BA()+b;a.el.style[b]=c}
CA.prototype.play=function(){this.el.style.opacity=this.l;M(u(function(){DA(this,"TransitionTimingFunction",this.Yc);DA(this,"TransitionDuration",this.duration+"s");DA(this,"TransitionProperty","opacity");Is(this.el,Zd?"webkitTransitionEnd":Vd?"oTransitionEnd":"transitionend",u(function(){DA(this,"TransitionTimingFunction","");DA(this,"TransitionDuration","");DA(this,"TransitionProperty","");this.cc&&this.cc(this)},this));
this.el.style.opacity=this.j},this),20)};function EA(a,b){this.C=1;this.B=0;this.A=!1;ux.call(this,a,b)}
x(EA,ux);EA.prototype.setup=function(a){var b=parseFloat(a.start),c=parseFloat(a.end);this.C=isNaN(b)?1:b;this.B=isNaN(c)?0:c;this.A=!p(this.el.style.opacity);EA.K.setup.call(this,a)};
EA.prototype.qa=function(){this.A&&1==this.B&&(this.el.style.filter="")};
function FA(a,b){this.l=1;this.j=0;tx.call(this,a,b)}
x(FA,CA);FA.prototype.setup=function(a){var b=parseFloat(a.start),c=parseFloat(a.end);this.l=isNaN(b)?1:b;this.j=isNaN(c)?0:c;FA.K.setup.call(this,a)};function GA(a,b,c){var d={duration:.5};d.start=b;d.end=c;BA()?new FA(a,d):new EA(a,d)}
;function HA(a,b){y(b,function(b){Kt("visualElementHidden",{csn:a,ve:Rs(b),eventType:16})})}
;function IA(){U.call(this,"mouseover-img-wrap");this.A=this.j=!1;this.J=this.C=this.l=-1;this.w=""}
x(IA,U);za(IA);var JA=0,KA=0;g=IA.prototype;g.register=function(){X(this,"mouseover",this.tb);X(this,an,this.tb);X(this,"focus",this.tb);X(this,"mouseout",this.sb);X(this,bn,this.sb);X(this,"blur",this.sb);X(this,"click",this.Se);X(this,"mousedown",this.Td)};
g.unregister=function(){N(JA);N(KA);Y(this,"mouseover",this.tb);Y(this,an,this.tb);Y(this,"focus",this.tb);Y(this,"mouseout",this.sb);Y(this,bn,this.sb);Y(this,"blur",this.sb);Y(this,"click",this.Se);Y(this,"mousedown",this.Td);IA.K.unregister.call(this)};
function LA(a){a=a.getElementsByTagName("img");return 0<a.length?a[0]:null}
function MA(a){return(a=a.match(/\/([a-zA-Z0-9_-]{11})\//))?a[1]:""}
function NA(a,b){if(a.A){var c={isMovingThumbnail:a.j};if(a.j&&0<a.l){var d=a.J-a.C;0<a.C&&0<d&&(c.movingThumbnailLoadingDurationMs=Math.round(d));c.durationHoveredMs=Math.round(Jr()-a.l)}a.w&&(c.videoId=a.w);d=$s();var e=T(b,"visibility-tracking");d&&e&&(c={thumbnailHoveredData:c},d={csn:d,ve:Rs(new Qs(e)),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_HOVER"},c&&(d.clientData=c),Kt("visualElementGestured",d));a.A=!1;a.j=!1;a.l=-1;a.C=-1;a.J=-1;a.w=""}}
function OA(a,b){var c=a.D(b,"mouseover-src");return Ve("IMG",{"class":"mouseover-img",src:c,width:b.width,height:b.height})}
function PA(a){return D("mouseover-img",a)}
function QA(a,b,c){120!=b.naturalWidth?(a.l=Jr(),a.J=Jr(),JA=M(a.Yf,2500),GA(b,0,1)):c&&GA(c,0,1)}
g.Yf=function(a){N(JA);JA=0;var b=PA(a);b&&(GA(b,1,0),(a=RA(a))&&GA(a,0,1))};
function SA(){var a=Ve("DIV",{"class":"mouseover-play"}),b=document.createElementNS("http://www.w3.org/2000/svg","svg");b.setAttribute("width","48px");b.setAttribute("height","48px");b.setAttribute("viewBox","0 0 24 24");b.setAttribute("fill","#fff");var c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","M8 5v14l11-7z");b.appendChild(c);a.appendChild(b);return a}
function RA(a){return D("mouseover-play",a)}
function TA(a){return"none"!=(Hf(a,"display")||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display)}
g.Td=function(a){N(KA);KA=0;if((a=PA(a))&&!a.complete){var b=Vc("");a.src=Rc(b);a.onload=null;N(JA);JA=0}};
g.tb=function(a){var b=LA(a);if(b){var c=this.D(b,"mouseover-src"),d=RA(a),e=PA(a);if(!d||c&&!e)c?(this.j=!0,this.w=MA(c)):(this.j=!1,b.src&&(this.w=MA(b.src))),d||(d=SA(),b.parentNode.appendChild(d)),N(KA),KA=0,this.A=!1,KA=M(function(){this.C=Jr();this.A=!0;d&&!c&&GA(d,0,1);c&&!e&&(e=OA(this,b),b.parentNode.appendChild(e),e.complete?QA(this,e,d):e.onload=function(){QA(this,e,d)}.bind(this))}.bind(this),150)}};
g.sb=function(a){var b=LA(a);if(null!=b){var c=this.D(b,"mouseover-src");b=this.D(b,"mouseover-log");var d=RA(a),e=PA(a);if(d&&!TA(d)||c&&e&&!TA(e))N(KA),KA=0,d&&d.parentNode.removeChild(d),e&&(e.onload=null,e.complete&&120!=e.naturalWidth||(this.l=0),N(JA),JA=0,c=Vc(""),e.src=Rc(c),e.parentNode.removeChild(e)),b&&NA(this,E(a,"yt-lockup-video"))}};
g.Se=function(a){var b=LA(a);null!=b&&this.D(b,"mouseover-log")&&NA(this,E(a,"yt-lockup-video"))};function UA(){U.call(this,"redirect-link")}
x(UA,U);za(UA);UA.prototype.register=function(){X(this,"click",this.j)};
UA.prototype.unregister=function(){Y(this,"click",this.j)};
UA.prototype.j=function(a){if(!T(a,"redirect-href-updated")){Tw(a,"redirect-href-updated","true");var b=L("XSRF_REDIRECT_TOKEN");if(b){var c={};c.q=a.href;c.redir_token=b;Dd(a,Ug("/redirect",c))}}};function VA(){U.call(this,"scroller");this.j={}}
x(VA,U);za(VA);g=VA.prototype;g.register=function(){X(this,"mouseenter",this.Ud);X(this,"mouseleave",this.Zb)};
g.unregister=function(){Y(this,"mouseenter",this.Ud);Y(this,"mouseleave",this.Zb);for(var a in this.j)this.Zb(this.j[a]);this.j={};VA.K.unregister.call(this)};
g.dispose=function(){for(var a in this.j)this.Zb(this.j[a]);this.j={}};
g.Ud=function(a){var b=O(a,"mousewheel",u(this.Sf,this,a));Tw(a,"scroller-mousewheel-listener",b);b=O(a,"scroll",u(this.Nh,this,a));Tw(a,"scroller-scroll-listener",b);a&&(b=Fa(a).toString(),this.j[b]=a)};
g.Zb=function(a){var b=this.D(a,"scroller-mousewheel-listener")||"";Tw(a,"scroller-mousewheel-listener","");var c=this.D(a,"scroller-scroll-listener")||"";Tw(a,"scroller-scroll-listener","");P(b);P(c);Tw(a,"scroller-scroll-listener","");a&&(a=Fa(a).toString(),delete this.j[a])};
g.Sf=function(a,b){var c=b||window.event;var d=0;"MozMousePixelScroll"==c.type?d=0==(c.axis==c.HORIZONTAL_AXIS)?c.detail:0:window.opera?d=c.detail:d=0==c.wheelDelta%120?"WebkitTransform"in document.documentElement.style?window.chrome&&0==navigator.platform.indexOf("Mac")?c.wheelDeltaY/-30:c.wheelDeltaY/-1.2:c.wheelDelta/-1.6:c.wheelDeltaY/-3;if(c=d)d=a.scrollTop,a.scrollTop+=c,d==a.scrollTop&&this.D(a,"scroller-allow-pagescroll")||b.preventDefault()};
g.Nh=function(a){this.Ea(a,"scroll-action");R("yt-dom-content-change",a)};function WA(){U.call(this,"sessionlink")}
x(WA,U);za(WA);WA.prototype.register=function(){X(this,"mousedown",this.j);X(this,"click",this.j)};
WA.prototype.unregister=function(){Y(this,"mousedown",this.j);Y(this,"click",this.j)};
WA.prototype.j=function(a){XA(a)};
function XA(a){var b;if(b=T(a,"sessionlink-target")||a.href||""){var c=T(a,"sessionlink")||"";c=Sr(c);(a=parseInt(T(a,"sessionlink-lifetime"),10))?dt(b,c,a):dt(b,c)}}
;function YA(a){U.call(this,a||"slider");this.l=0;this.j=null}
x(YA,U);za(YA);g=YA.prototype;g.register=function(){X(this,"click",this.td,"prev");X(this,"click",this.sd,"next");X(this,"keyup",this.be,"item");this.j=O(window,"resize",u(this.Tf,this));this.na("yt-uix-expander-toggle",this.pc)};
g.unregister=function(){Y(this,"click",this.td,"prev");Y(this,"click",this.sd,"next");Y(this,"click",this.be,"item");P(this.j);YA.K.unregister.call(this)};
g.pc=function(){y(Me(V(this)),function(a){ZA(this,a)},this)};
g.Tf=function(){N(this.l);this.l=M(u(this.pc,this),200)};
function $A(a,b,c){var d=a.Y(b);if(!I(d,V(a,"is-moving"))){b=Py(a,"list",d);var e=Py(a,"body",d),f=cc(Me(V(a,"item"),d));if(f){var h=f[0];if("forward"==c){var k=aB(d,e,f);c=p(k.nextElementSibling)?k.nextElementSibling:ef(k.nextSibling,!0);if(!c)return;k=bB(a,c,e,f);h=c}else if("back"==c){k=cB(d,e,f);c=p(k.previousElementSibling)?k.previousElementSibling:ef(k.previousSibling,!1);if(!c)return;k=dB(a,c,e,f);h=c}J(d,V(a,"is-moving"));Tf(d)?b.style.right=(parseInt(b.style.right,10)||0)-k+"px":b.style.left=
(parseInt(b.style.left,10)||0)+k+"px";var l=M(u(a.qe,a,d,h),510);Is(b,cn,u(function(a){N(l);this.qe(d,a)},a,h))}}}
g.sd=function(a){$A(this,a,"forward")};
g.td=function(a){$A(this,a,"back")};
g.be=function(a){(a=this.Y(a))&&R("yt-dom-content-change",a)};
function cB(a,b,c){return Tf(a)?eB(a,b,c):fB(a,b,c)}
function aB(a,b,c){return Tf(a)?fB(a,b,c):eB(a,b,c)}
function fB(a,b,c){function d(a){return Nf(a)>e-1}
var e=Nf(b);return Tf(a)?Wb(c,d):Ub(c,d)}
function eB(a,b,c){function d(a){a=Nf(a)+a.offsetWidth;return e>a-1}
var e=Nf(b)+b.offsetWidth;return Tf(a)?Ub(c,d):Wb(c,d)}
function dB(a,b,c,d){var e=a.Y(b);var f=Nf(c);var h=f+c.offsetWidth,k=Nf(b);b=k+b.offsetWidth;var l=d[0];d=Nf(l);l=d+l.offsetWidth;Tf(e)?(c=a.Fc(e,c)-k,f=h-l):(c=a.Gc(e,c)-b,f-=d);Ro(e,V(a,"at-tail"),!1);if(Math.abs(c)+1<Math.abs(f))return c;Ro(e,V(a,"at-head"),!0);return f}
function bB(a,b,c,d){var e=a.Y(b);var f=Nf(c);var h=f+c.offsetWidth,k=Nf(b);b=k+b.offsetWidth;var l=d[d.length-1];d=Nf(l);l=d+l.offsetWidth;Tf(e)?(c=a.Gc(e,c)-b,f-=d):(c=a.Fc(e,c)-k,f=h-l);Ro(e,V(a,"at-head"),!1);if(Math.abs(c)+1<Math.abs(f))return c;Ro(e,V(a,"at-tail"),!0);return f}
g.Fc=function(a,b){return Nf(b)};
g.Gc=function(a,b){return Nf(b)+b.offsetWidth};
g.qe=function(a,b){a&&(K(a,V(this,"is-moving")),ZA(this,a),R("yt-uix-slider-slide-shown",b),R("yt-dom-content-change",a))};
function ZA(a,b){var c=Py(a,"body",b),d=cc(Me(V(a,"item"),b));if(d&&d.length){var e=cB(b,c,d);c=aB(b,c,d);e=e==d[0];d=c==d[d.length-1]}else e=d=!0;Ro(b,V(a,"at-head"),e);Ro(b,V(a,"at-tail"),d);if(a.D(b,"disable-slider-buttons")){if(c=Py(a,"prev",b))c.disabled=e;if(e=Py(a,"next",b))e.disabled=d}}
;function gB(){U.call(this,"tabs")}
x(gB,U);za(gB);gB.prototype.register=function(){X(this,"click",this.j,"tab");X(this,"keydown",this.l,"tab")};
gB.prototype.unregister=function(){Y(this,"click",this.j,"tab");Y(this,"keydown",this.l,"tab");gB.K.unregister.call(this)};
gB.prototype.j=function(a){if(!I(a,"disabled")){var b=this.Y(a),c=V(this,"selected"),d=this.D(b,"uix-tabs-selected-extra-class");if(b=D(c,b)){var e=hB(this,b);K(b,c);d&&K(b,d);Cy(e)}b=hB(this,a);J(a,c);d&&J(a,d);By(b);R("yt-uix-tabs-after-shown",a,b)}};
gB.prototype.l=function(a,b,c){13==c.keyCode&&this.j(a)};
function hB(a,b){var c=a.D(b,"uix-tabs-target-id");return C(c)}
;function iB(){U.call(this,"tile")}
x(iB,U);za(iB);iB.prototype.register=function(){X(this,"click",this.j)};
iB.prototype.unregister=function(){Y(this,"click",this.j)};
iB.prototype.j=function(a,b,c){tf(c.target,"a")||tf(c.target,"button")||!(a=D(V(this,"link"),a))||(B&&!me(9)?a.click():(I(a,"yt-uix-sessionlink")&&XA(a),I(a,"spf-link")?Ex(a.href):Dx(a.href)))};function jB(){var a=vs();return a?a:null}
;function kB(){U.call(this,"tooltip");this.j=0;this.l={}}
x(kB,U);za(kB);g=kB.prototype;g.register=function(){X(this,"mouseover",this.wc);X(this,"mouseout",this.fb);X(this,"focus",this.yd);X(this,"blur",this.ld);X(this,"click",this.fb);X(this,"touchstart",this.De);X(this,"touchend",this.nc);X(this,"touchcancel",this.nc)};
g.unregister=function(){Y(this,"mouseover",this.wc);Y(this,"mouseout",this.fb);Y(this,"focus",this.yd);Y(this,"blur",this.ld);Y(this,"click",this.fb);Y(this,"touchstart",this.De);Y(this,"touchend",this.nc);Y(this,"touchcancel",this.nc);this.dispose();kB.K.unregister.call(this)};
g.dispose=function(){for(var a in this.l)this.fb(this.l[a]);this.l={}};
g.wc=function(a){if(!(this.j&&1E3>v()-this.j)){var b=parseInt(this.D(a,"tooltip-hide-timer"),10);b&&(Vw(a,"tooltip-hide-timer"),N(b));b=u(function(){lB(this,a);Vw(a,"tooltip-show-timer")},this);
var c=parseInt(this.D(a,"tooltip-show-delay"),10)||0;b=M(b,c);Tw(a,"tooltip-show-timer",b.toString());a.title&&(Oy(a,mB(this,a)),a.title="");b=Fa(a).toString();this.l[b]=a}};
g.fb=function(a){var b=parseInt(this.D(a,"tooltip-show-timer"),10);b&&(N(b),Vw(a,"tooltip-show-timer"));b=u(function(){if(a){var b=C(nB(this,a));b&&(oB(b),bf(b),Vw(a,"content-id"));b=C(nB(this,a,"arialabel"));bf(b)}Vw(a,"tooltip-hide-timer")},this);
b=M(b,50);Tw(a,"tooltip-hide-timer",b.toString());if(b=this.D(a,"tooltip-text"))a.title=b;b=Fa(a).toString();delete this.l[b]};
g.yd=function(a){this.j=0;this.wc(a)};
g.ld=function(a){this.j=0;this.fb(a)};
g.De=function(a,b,c){c.changedTouches&&(this.j=0,(a=Ly(b,V(this),c.changedTouches[0].target))&&this.wc(a))};
g.nc=function(a,b,c){c.changedTouches&&(this.j=v(),(a=Ly(b,V(this),c.changedTouches[0].target))&&this.fb(a))};
function pB(a,b,c){Oy(b,c);a=a.D(b,"content-id");(a=C(a))&&jf(a,c)}
function mB(a,b){return a.D(b,"tooltip-text")||b.title}
function lB(a,b){if(b){var c=mB(a,b);if(c){var d=C(nB(a,b));if(!d){d=document.createElement("div");d.id=nB(a,b);d.className=V(a,"tip");var e=document.createElement("div");e.className=V(a,"tip-body");var f=document.createElement("div");f.className=V(a,"tip-arrow");var h=document.createElement("div");h.setAttribute("aria-hidden","true");h.className=V(a,"tip-content");var k=qB(a,b),l=nB(a,b,"content");h.id=l;Tw(b,"content-id",l);e.appendChild(h);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);
var n=rf(b);l=nB(a,b,"arialabel");f=document.createElement("div");J(f,V(a,"arialabel"));f.id=l;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+n:n+" "+c;jf(f,n);b.setAttribute("aria-labelledby",l);l=jB()||document.body;l.appendChild(f);l.appendChild(d);pB(a,b,c);(c=parseInt(a.D(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",J(h,V(a,"normal-wrap")));h=I(b,V(a,"reverse"));rB(a,b,d,e,k,h)||rB(a,b,d,e,k,!h);var w=V(a,"tip-visible");
M(function(){J(d,w)},0)}}}}
function rB(a,b,c,d,e,f){Ro(c,V(a,"tip-reverse"),f);var h=0;f&&(h=1);var k=Qf(b);f=new De((k.width-10)/2,f?k.height:0);var l=Mf(b);dr(new De(l.x+f.x,l.y+f.y),c,h);f=Qe(window);if(1==c.nodeType)var n=Of(c);else c=c.changedTouches?c.changedTouches[0]:c,n=new De(c.clientX,c.clientY);c=Qf(d);var w=Math.floor(c.width/2);h=!!(f.height<n.y+k.height);k=!!(n.y<k.height);l=!!(n.x<w);f=!!(f.width<n.x+w);n=(c.width+3)/-2- -5;a=a.D(b,"force-tooltip-direction");if("left"==a||l)n=-5;else if("right"==a||f)n=20-c.width-
3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||k)}
function nB(a,b,c){a=V(a)+qs(b);c&&(a+="-"+c);return a}
function qB(a,b){var c=null;ae&&I(b,V(a,"masked"))&&((c=C("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),By(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=V(a,"tip-mask")));return c}
function oB(a){var b=C("yt-uix-tooltip-shared-mask"),c=b&&uf(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Cy(b),document.body.appendChild(b))}
;var sB=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};r("yt.uix.widgets_",sB,void 0);function tB(a){a=a.getInstance();var b=V(a);b in sB||(a.register(),a.na("yt-uix-init-"+b,a.init),a.na("yt-uix-dispose-"+b,a.dispose),sB[b]=a)}
;function uB(){this.w=[]}
g=uB.prototype;g.Zd=function(){};
g.dispose=function(){this.w&&(P(this.w),this.w=[]);this.Zd()};
function vB(a,b,c,d,e){a.w.push(Gs(b,c,u(d,a),e))}
g.Eb=function(a,b,c,d){this.w.push(O(a,b,u(c,d||this)))};
g.redirect=function(a){Dx(a)};
function wB(a,b){if(!b)return!1;var c=b.redirect_url;if(!c)try{var d=js(b);c=is(d,"redirect_url")}catch(e){c=null}if(!c)return!1;a.redirect(c);return!0}
g.ac=function(){};
g.qg=function(a,b,c){(c=JSON.parse(c.responseText))&&(a&&wB(this,c)||b&&b.call(this,c))};
function xB(a,b,c,d,e,f,h){a={format:b,method:"POST",onError:h||u(a.ac,a),qa:void 0,R:f,V:e||{},xa:d||{},Wa:!0};cs(c,a)}
;function yB(){this.w=[];this.G=this.C="";this.H=null;this.J=this.A=!1;this.F=null;this.O=this.M=""}
x(yB,uB);g=yB.prototype;g.Yd=function(){};
g.close=function(a){this.J=!1;this.j.dismiss(a||"close");this.dispose()};
g.create=function(a,b,c,d){this.J&&(b&&(this.H=b),c&&(this.F=c),a&&!this.A?this.qh({},d):this.Bc())};
g.open=function(a,b,c,d,e,f,h,k,l){this.C=a;this.M=b;if(this.B=C(this.C+"-lb")){(a=gy())&&a.pauseVideo&&a.pauseVideo();if(this.A)this.reset();else{this.j=new Gz(this.B,k);try{this.j.setTitle("")}catch(n){}}zB(this,"loading");this.j.show();this.J=!0}d&&this.create(e,f,h,l)};
g.reset=function(){this.A&&AB(this)};
function BB(a,b){Jz(a.j,b)}
g.qh=function(a,b,c,d,e){arguments.length&&zB(this,e||"loading");var f=a||{};this.H&&(f.feature=this.H);this.F&&(f.next=this.F);xB(this,"XML",this.M,f,b||{},u(this.rg,this,c),d)};
function zB(a,b){switch(b){case "content":Hz(a.j,"content");break;case "loading":Hz(a.j,"loading");break;case "working":Hz(a.j,"working")}}
function AB(a,b){if(a.A){var c=b||a.O;if(c){if(a.G){var d=a.ca;K(d,a.G);J(d,c)}else J(a.ca,c);a.G=c}}}
g.Bc=function(a,b){a&&Cd(C(this.C+"-dialog"),a);if(b)try{this.j.setTitle(b)}catch(d){}this.ca=D("yt-dialog-fg",this.B);var c=D("yt-pd-params",this.B);this.O=T(c,"start-page")||"";vB(this,this.ca,"click",this.Fg,"yt-pd-close");vB(this,this.ca,"click",this.Ag,"yt-pd-setclass");vB(this,this.ca,"click",this.Mg,"yt-pd-setpage");this.Yd();zB(this,"content");this.A=!0;AB(this)};
g.Fg=function(){this.close("cancel")};
g.Ag=function(a){a=E(a.target,"yt-pd-setclass");var b=T(a,"off");b&&Ro(this.ca,b,!1);(a=T(a,"on"))&&Ro(this.ca,a,!0)};
g.Mg=function(a){a=E(a.target,"yt-pd-setpage");(a=T(a,"state-container-id"))&&AB(this,a)};
g.ac=function(a){yB.K.ac.call(this,a);this.close()};
g.rg=function(a,b,c){var d=js(b);if(d){var e=is(d,"not_eligible"),f=is(d,"error_message");e||f?this.ac(b):wB(this,b)||(c=c.html_content||void 0,d=is(d,"title")||void 0,a?a(b,u(this.Bc,this,c,d)):this.Bc(c,d))}};function CB(){this.w=[];this.J=this.C=null;this.G=this.A=!1}
x(CB,uB);g=CB.prototype;g.Qc=function(){};
g.fc=function(){};
g.init=function(a,b,c,d,e){this.C=a||null;this.J=b||null;c?d&&e&&(vB(this,d,"mousedown",this.Ue,e),vB(this,d,"click",this.Be,e)):(this.Ue(),this.Be())};
g.Qb=function(a,b){(q(a)?t(a+".init"):a.init).apply(this,Array.prototype.slice.call(arguments,1))};
g.Ue=function(a){this.A||(this.C&&Ix(this.C),this.J&&Zw(this.J,u(function(){(this.A=!0,this.G)&&this.fc(a)},this)))};
g.Be=function(a){this.Qc(a);this.G=!0;this.A&&this.G&&this.fc(a)};var DB={};function EB(a){var b=Fa(a),c=DB[b];c||(c=new a,DB[b]=c);return c}
;function FB(){CB.call(this);this.B=null}
x(FB,CB);FB.prototype.Qc=function(a){a&&(this.B=T(a.currentTarget,"pageid"))};
FB.prototype.fc=function(){this.Qb("yt.www.account.AddNewChannelDialog",this.B)};function GB(){CB.call(this);this.l=this.j=null;this.F=!1}
x(GB,CB);function HB(a,b){var c=EB(GB);b&&(c.j=b);c.init(L("CREATE_CHANNEL_CSS_URL",void 0),L("CREATE_CHANNEL_JS_URL",void 0),!a,C("body-container"),"create-channel-lightbox")}
GB.prototype.Qc=function(a){this.j||(a&&(a=T(a.currentTarget,"upsell"),"settings"==a||"upload"==a||"playlist"==a||"guide"==a||"comment"==a||"message"==a||"captions"==a||"live_chat"==a)&&(this.j=a),this.j||(this.j="default"))};
GB.prototype.fc=function(){switch(this.j){case "settings":this.l="/profile";break;case "guide":this.l=L("CREATE_CHANNEL_NEXT_URL_GUIDE",void 0);break;case "upload":this.l=L("CREATE_CHANNEL_NEXT_URL_UPLOAD",void 0);break;default:this.l=document.location.href}L("CREATE_CHANNEL_NEXT_URL")&&(this.l=L("CREATE_CHANNEL_NEXT_URL",void 0));if(L("CREATE_CHANNEL_USERNAME_MODE"))this.Qb("yt.www.account.CreateChannelDialog",this.H,this.j,this.l);else if(!this.F){this.F=!0;var a=u(this.qg,this,!1,this.M||null);
xB(this,"JSON","/create_channel_ajax",{action_get_type:1},{},a)}};
GB.prototype.H=function(){var a=L("CREATE_CHANNEL_NEXT_URL",void 0);a&&("/"==a?Dx(a):window.history.back())};
GB.prototype.M=function(a){this.F=!1;if(a.open_generic_dialog)IB(this);else if("success"in a&&a.success)switch(a.type){case 15:case 17:case 18:this.Qb("yt.www.account.CreateCoreIdChannelDialog",this.H,this.j,this.l);break;case 8:Dx("/oops");break;case 5:Dx("/create_channel?action_blocked_misc=1");break;default:this.Qb("yt.www.account.CreateChannelDialog",this.H,this.j,this.l)}else"redirect_url"in a&&a.redirect_url?Dx(a.redirect_url):Dx("/oops")};
function IB(a){var b=EB(yB),c=a.l;c&&(-1<c.indexOf("create_channel")||-1<c.indexOf("upload")||-1<c.indexOf("profile"))&&(c="/");b.open("create-channel-identity","/create_channel_ajax","create_channel_ajax",!0,!0,a.j,c);c&&BB(b,function(){Dx(c)})}
;var JB,KB,LB,MB,NB=[],OB=!1,PB=!1,QB=[];function RB(){var a=C("body-container");NB.push(Gs(a,"mousedown",SB,"link-gplus-lightbox"));NB.push(Gs(a,"click",TB,"link-gplus-lightbox"));QB.push(Q("LINK-GPLUS-LOADER-DISMISS",UB));QB.push(Q("LINK-GPLUS-LOADER-CANCEL",VB));QB.push(Q("LINK-GPLUS-LOADER-GOTO-CONTENT-STATE",WB));QB.push(Q("LINK-GPLUS-LOADER-GOTO-WORKING-STATE",XB));QB.push(Q("LINK-GPLUS-LOADER-SET-WAIT-CURSOR",YB));QB.push(Q("LINK-GPLUS-LOADER-SHOW-DIALOG",ZB))}
function UB(){PB=!0;KB.dismiss("cancel")}
function VB(){KB.dismiss("cancel")}
function WB(){Hz(KB,"content")}
function XB(){Hz(KB,"working")}
function YB(a){a?document.body.style.cursor="wait":"wait"==document.body.style.cursor&&(document.body.style.cursor="default")}
function SB(){if(!C("link-gplus-css")){Zw(L("LINK_GPLUS_JS_URL",void 0),$B);var a=Jd(L("LINK_GPLUS_CSS_URL",void 0)),b=Ke("head")[0],c=Ve("LINK",{id:"link-gplus-css"});c.rel="stylesheet";c.href=Nc(a);b.insertBefore(c,b.childNodes[0]||null)}}
function $B(){OB=!0;JB&&OB&&aC()}
function TB(a){var b=E(a.target,"link-gplus-lightbox");LB=I(b,"ignore-opt-out");MB=T(b,"upsell");a.preventDefault();bC()}
function bC(){if(!KB){var a=C("link-gplus-lb");if(!a)return;KB=new Gz(a,!0)}PB?"upload"==MB&&Dx("/upload"):(JB=!0,YB(!0),SB(),OB&&aC())}
function aC(){var a="";if("upload"==MB)a="/upload";else if("settings"==MB)a="/account";else if("fans"==MB)a="/audience";else if("active_signin"==MB||"channel"==MB||"comment"==MB||"plus_page"==MB)a=L("LINK_GPLUS_NEXT_URL");t("yt.www.account.LinkGplusDialog.fetchAndShow")(MB,a,LB)}
function cC(a){RB();SB();if(a)LB=!0,MB=a;else if(LB=!1,MB="signin",(a=L("ID_MERGE_FEATURE_TYPE"))&&(MB=a),"channel"==a||"settings"==a)LB=!0;bC()}
function ZB(){Hz(KB,"content");KB.show();var a=D("yt-dialog-fg",C("link-gplus-lb")),b;if(b=C(a)){var c=0,d=0;if(b.offsetParent){do c+=b.offsetLeft,d+=b.offsetTop;while(b=b.offsetParent)}b=new De(c,d)}else b=null;a.style.position="fixed";a.style.top="95px";b.x&&(a.style.left=b.x+"px")}
;function dC(a,b){if(vl()){var c=Gy(a),d=0,e=wf()+"-opacity";c&&(c.opacity||c[e])&&(d=c.opacity||c[e]);var f=M(function(){P(h);b.call(a)},d+100),h=O(a,cn,function(c){c.target==a&&"opacity"==c.propertyName&&(P(h),N(f),b.call(a))})}else M(function(){b.call(a)},0)}
;var eC=rc({SUCCESS:"yt-alert-success",ERROR:"yt-alert-error",Jj:"yt-alert-warn",INFO:"yt-alert-info",bj:"yt-alert-promo"});function fC(a,b,c){if(c){y(Me("yt-alert",c),function(a){dC(a,function(){a.parentNode&&a.parentNode.removeChild(a)});
J(a,"yt-alert-fading")});
b.removeAttribute("id");Qo(b,eC);J(b,"yt-alert-success");var d=D("yt-alert-message",b),e=D("yt-alert-content",b);(d||e).innerHTML=a;c.appendChild(b);By(b)}}
;function gC(a,b){this.j=new Gz(a,!0);this.B=b;this.A=this.l=this.C=""}
var hC=[],iC=[],jC=null;function kC(a,b,c,d){var e=C("feed-privacy-lb");e&&(jC=new gC(e,a),jC.C=b||"",jC.l=c||"",jC.A=d||"",a=jC,Ix(L("FEED_PRIVACY_CSS_URL",void 0)),lC(a,null,{channel_id:a.l,setting_type:a.B,playlist_id:a.A,video_id:a.C}))}
function mC(a){kC("SUBSCRIPTIONS",void 0,a)}
function nC(a){kC("LIKES",a)}
function oC(a){kC("FAVORITES",a)}
function pC(a,b){kC("PLAYLISTS",a,void 0,b)}
function qC(a){kC("LIKE_PLAYLISTS",void 0,void 0,a)}
gC.prototype.dismiss=function(){this.j.dismiss("cancel")};
function lC(a,b,c){a={method:"POST",format:"XML",xa:b||{},V:c||{},Wa:!0,R:u(a.G,a),onError:u(a.J,a)};cs("/feed_privacy_ajax",a)}
gC.prototype.G=function(a,b){var c=js(a),d=is(c,"invalid_request"),e=is(c,"missing_setting_type"),f=is(c,"already_seen_dialog");if(!(d||e||f))if(d=C("feed-privacy-dialog"),e=gy(),c=is(c,"success_message")){f=C("alerts");var h=td(b.alert_template_html);h=h.replace(/^[\s\xa0]+/,"");var k=String(h.substr(0,3)).toLowerCase();0==("<tr"<k?-1:"<tr"==k?0:1)?(h=Ze(Gd("<table><tbody>"+h+"</tbody></table>")),h=us("tr",h)):(k=document.createElement("div"),k.innerHTML=h,h=df(k));fC(c,h,f);Js(d);window.scroll(0,
0);this.dismiss();e&&e.playVideo&&e.playVideo()}else e&&e.pauseVideo&&e.pauseVideo(),Cd(d,b.html_content),iC.push(Gs(d,"click",u(this.w,this,!1),"make-activity-public-button")),iC.push(Gs(d,"click",u(this.w,this,!0),"make-activity-private-button")),R("yt-dom-content-change",d),Hz(this.j,"content"),this.j.show()};
gC.prototype.J=function(){this.dismiss()};
gC.prototype.w=function(a){var b={};b[a?"action_make_private":"action_make_public"]="1";a={setting_type:this.B};Hz(this.j,"working");lC(this,b,a)};function rC(){yB.call(this);this.l=[];Ix(L("IDENTITY_PROMPT_CSS_URL",void 0))}
x(rC,yB);g=rC.prototype;g.Yd=function(){this.l.push(Gs(this.ca,"click",u(this.Lf,this),"identity-prompt-account-list-item"));this.l.push(Gs(this.ca,"click",u(this.Xf,this),"specialized-identity-prompt-account-item"));this.l.push(Gs(this.ca,"click",u(this.If,this),"authuser-mismatch-identity-prompt-account-item"))};
g.Zd=function(){P(this.l);this.l.length=0};
g.Lf=function(a){var b=C("identity-prompt-form");a=Ke("input",void 0,a.currentTarget);b&&b.action&&a&&1==a.length&&(b.action=Ur(b.action,{pageId:a[0].value}));var c=C("identity-prompt-confirm-button");c?c.disabled=!1:b&&a&&1==a.length&&(a[0].checked=!0,b.submit())};
g.Xf=function(a){a=T(a.currentTarget,"switch-url");C("dont_ask_again").checked&&(a+="&dont_ask_again=on");Dx(a)};
g.If=function(a){a=T(a.currentTarget,"switch-url");Dx(a)};function sC(a){this.l=a;this.j=null;a=tC(this.l);a=lb("__%s__","("+a.join("|")+")");this.j=new RegExp(a,"g");this.w={}}
var uC=/__([a-z]+(?:_[a-z]+)*)__/g;function tC(a){var b=[],c={};a.replace(uC,function(a,e){e in c||(c[e]=!0,b.push(e))});
return b}
function vC(a,b){var c=u(function(a,c){return b[c]||this.w[c]||""},a);
return a.l.replace(a.j,c)}
;function wC(a){a.o=L("CREATOR_CONTEXT","U");return a}
;function xC(){this.C=null;this.j=[];this.promo=null;this.B="";this.l=null;this.W=Je("mcn-affiliate-agreement-overlay-template");var a=C(this.W).innerHTML;a=a.replace(/^\s*(\x3c!--\s*)?/,"");a=a.replace(/(\s*--\x3e)?\s*$/,"");this.U=new sC(a);this.w=!1}
x(xC,Hk);xC.prototype.init=function(a,b,c){this.promo=a;this.B=b;this.l=c;this.j.push(O(this.promo,"click",u(this.aa,this)));this.j.push(Gs(this.l,"click",u(this.Z,this),this.B));this.j.push(Gs(this.l,"click",u(this.H,this),"yt-uix-overlay-close"));a=mA();this.j.push(Gs(a,"click",u(this.H,this),"yt-dialog-close"));this.j.push(Gs(this.l,"click",u(this.M,this),"mcn-affiliate-agreement-checkbox"));this.j.push(Gs(this.l,"change",u(this.M,this),"commerce-creator-signup-text-fields"))};
xC.prototype.H=ya;xC.prototype.M=function(){var a=Je("agreement-checkbox-1"),b=Je("agreement-checkbox-2"),c=Je("agreement-checkbox-3"),d=!0;this.w&&(d=I(Je("sign-contract-form"),"ng-valid"));D(this.B,void 0).disabled=!(a.checked&&b.checked&&c.checked&&d)};
function yC(a,b,c,d,e){b=wC({action_load_agreement:1,is_modal:b});cs("/account_mcn_affiliate_monetization_ajax",{method:"POST",xa:b,context:a,R:u(function(a,b){this.C=b.contract_tags;this.w="user_contact_info_form"in b;c(b);this.w&&(angular.module("mcnAffiliateAgreement",[]),angular.bootstrap(document,["mcnAffiliateAgreement"]))},a),
onError:u(function(){this.C=null;d()},a),
qa:function(){e()}})}
function zC(){var a=qb(Je("full_name").value),b=qb(Je("title").value),c=qb(Je("email_address").value),d=qb(Je("phone_number").value),e=qb(Je("company_name").value);return{full_name:a,title:b,email_address:c,phone_number:d,company_name:e}}
function AC(a,b,c){Je("agreement-checkbox-1").disabled=!0;Je("agreement-checkbox-2").disabled=!0;Je("agreement-checkbox-3").disabled=!0;var d=wC({action_sign_up:1}),e={contract_tags:a.C.join(),has_commerce_feature:a.w,receive_emails:Je("agreement-email-yes").checked};if(a.w){var f=zC();Cc(e,f)}cs("/account_mcn_affiliate_monetization_ajax",{method:"POST",xa:d,V:e,context:a,R:u(function(){b()},a),
onError:u(function(){c()},a)})}
xC.prototype.N=function(){P(this.j);this.j.length=0;xC.K.N.call(this)};function BC(a){xC.call(this);var b=Je("mcn-affiliate-signup-button");this.init(b,"mcn-affiliate-sign-agreement-button",Je("mcn-affiliate-agreement"));this.F=a;this.A=!1;if(L("SHOW_MCNA_YPE_MODAL")){this.A=!0;a=L("MCNA_YPE_CONTRACT_CSS_URL",void 0);var c=L("ACCOUNT_MONETIZATION_CSS_URL",void 0);Ix(L("MCNA_YPE_COMMERCE_CREATOR_CSS_URL",void 0));Ix(a);Ix(c);Zw(L("ANGULAR_JS",void 0));b.click()}}
x(BC,xC);
BC.prototype.aa=function(a){a.preventDefault();a.stopPropagation();var b=a.currentTarget;b.disabled=!0;yC(this,this.A,u(function(b){a.currentTarget.disabled=!1;var c=a.currentTarget;hA.getInstance().show(c);c=mA();D("yt-dialog-content",c).innerHTML=vC(this.U,{agreements_title:b.agreements_title,agreements_disclaimer:b.agreements_disclaimer,agreements:b.agreements,review_disclaimer:b.review_disclaimer,underage_message:b.underage_message,agreements_action_buttons:b.agreements_action_buttons,user_contact_info_form:b.user_contact_info_form});
a.currentTarget.disabled=!0},this),function(){By(Je("mcn-affiliate-promo-error-msg"))},function(){b.disabled=!1})};
BC.prototype.Z=function(a){a.preventDefault();a.stopPropagation();a=a.currentTarget;a.disabled||(a.disabled=!0,this.A||(Je("agreement-close-button").disabled=!0),AC(this,u(this.O,this),function(){hA.getInstance().hide();By(Je("mcn-affiliate-promo-error-msg"))}))};
BC.prototype.H=function(){this.A&&cs("/account_mcn_affiliate_monetization_ajax",{method:"POST",xa:wC({action_ask_me_later:1}),context:this})};
BC.prototype.O=function(){this.F?Dx(this.F):(hA.getInstance().hide(),yy(this.promo,!1))};var CC=t("ytglobal.prefsUserPrefsPrefs_")||{};r("ytglobal.prefsUserPrefsPrefs_",CC,void 0);function DC(){this.j=L("ALT_PREF_COOKIE_NAME","PREF");var a=bt(this.j);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(CC[d]=c.toString())}}}
DC.prototype.get=function(a,b){EC(a);FC(a);var c=void 0!==CC[a]?CC[a].toString():null;return null!=c?c:b?b:""};
DC.prototype.set=function(a,b){EC(a);FC(a);if(null==b)throw Error("ExpectedNotNull");CC[a]=b.toString()};
DC.prototype.remove=function(a){EC(a);FC(a);delete CC[a]};
function GC(a){a=a.j;var b=[],c;for(c in CC)b.push(c+"="+encodeURIComponent(String(CC[c])));at(a,b.join("&"),63072E3,"/")}
DC.prototype.clear=function(){for(var a in CC)delete CC[a]};
function FC(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function EC(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function HC(a){a=void 0!==CC[a]?CC[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
za(DC);function IC(a,b){Hk.call(this);this.l=a;this.B=b;this.j=null;this.w=C("page");this.j=O(C("premium-yva-close"),"click",u(this.Fe,this));var c=this.l;DC.getInstance().get("HIDDEN_MASTHEAD_ID")==c||J(this.w,"masthead-ad-expanded");this.A=O(window,"message",u(this.Hf,this))}
x(IC,Hk);var JC=/^https?:\/\/(ad.doubleclick|s0.2mdn).net$/;g=IC.prototype;g.Hf=function(a){a&&a.origin&&JC.test(a.origin)&&"creative2yt_requestClose"==a.data&&this.Te()};
g.N=function(){IC.K.N.call(this);P(this.j);P(this.A);this.A=this.j=null};
g.Te=function(){Cy("ad_creative_1");R("ads-masthead-hide");R("yt-dom-content-change");this.B&&Cy("ad_creative_collapse_btn_1");By("ad_creative_expand_btn_1");K(this.w,"masthead-ad-expanded");KC(this.l);dx("homepage_collapse_masthead_ad",void 0,void 0)};
g.Fe=function(){By("ad_creative_expand_btn_1");bf(C("premium-yva"));bf(C("video-masthead"));R("yt-dom-content-change");KC(this.l)};
g.zh=function(){var a=document.getElementById("premium-yva");K(a,"premium-yva-unexpanded");J(a,"premium-yva-expanded")};
g.Ah=function(){var a=document.getElementById("premium-yva");K(a,"premium-yva-expanded");J(a,"premium-yva-unexpanded")};
function KC(a){var b=DC.getInstance();b.set("HIDDEN_MASTHEAD_ID",a);GC(b)}
g.rf=function(){Cy("premium-yva");K(C("premium-yva"),"premium-yva-unexpanded")};
g.Oh=function(){var a=DC.getInstance();a.set("HIDDEN_MASTHEAD_ID",!1);GC(a);dx("homepage_expand_masthead_ad",void 0,void 0);Dx(document.location.href)};function LC(){YA.call(this,"shelfslider")}
x(LC,YA);za(LC);LC.prototype.Fc=function(a){a=Tf(a)?Py(this,"next",a):Py(this,"prev",a);return window.matchMedia&&0<=document.body.className.indexOf("exp-responsive")&&(void 0).matches?Nf(a)+a.offsetWidth-NaN:Nf(a)+a.offsetWidth};
LC.prototype.Gc=function(a){a=Tf(a)?Py(this,"prev",a):Py(this,"next",a);return window.matchMedia&&0<=document.body.className.indexOf("exp-responsive")&&(void 0).matches?Nf(a)+void 0:Nf(a)};var MC=!1,NC=!1;function OC(a,b){var c=b;c=void 0===c?{}:c;Da(c)&&(c={callback:c});c._c&&c._c.jsl&&c._c.jsl.h||Cc(c,{_c:{jsl:{h:L("GAPI_HINT_PARAMS",void 0)}}});b=c;(b.gapiHintOverride||L("GAPI_HINT_OVERRIDE"))&&(c=Tr(document.location.href).gapi_jsh)&&Cc(b,{_c:{jsl:{h:c}}});Vm(a,b)}
;var PC=[],QC={},RC=[],SC=!1;function TC(){RC.push(Q("player-ad-start",UC));PC.push(Gs(document.body,"click",VC,"yt-google-help-link"))}
function VC(a){a.preventDefault();var b=T(a.currentTarget,"ghelp-anchor")||a.currentTarget,c=T(a.currentTarget,"ghelp-tracking-param")||"";b=document.getElementById(b);var d=a.currentTarget,e=L("GOOGLE_HELP_CONTEXT",void 0);a=L("GOOGLE_HELP_PRODUCT_ID",void 0)||T(a.currentTarget,"feedback-product-id");d=!!T(d,"load-chat-support");WC(b,a,e,L("GOOGLE_HELP_PRODUCT_DATA"),d,!1,c)}
function XC(a,b){var c=L("FEEDBACK_LOCALE_LANGUAGE"),d=QC;Cc(d,L("FEEDBACK_LOCALE_EXTRAS",{}));a&&Cc(d,a);try{var e=gy();e&&e.pauseVideo&&e.pauseVideo();e&&(d.playback_id=e.getVideoData().cpn,e.getLastError&&(d.api_error=e.getLastError()))}catch(f){}b&&Cc(d,{trackingParam:b});return{helpCenterPath:"/youtube",locale:c,productData:d}}
function YC(){var a=L("SESSION_INDEX"),b=L("FEEDBACK_BUCKET_ID"),c={abuseLink:"https://support.google.com/youtube/bin/answer.py?answer=140536",customZIndex:"2000000005"};Ks("gfeedback_for_signed_out_users_enabled")&&(c.allowNonLoggedInFeedback=!0);a&&(c.authuser=a+"");b&&(c.bucket=b);return c}
function ZC(a,b,c,d){a={context:b,anchor:a,enableSendFeedback:c?!1:!0,defaultHelpArticleId:d};Cc(a,YC());return a}
function WC(a,b,c,d,e,f,h,k){var l=(b||"59")+"",n=XC(d,h),w=ZC(a,c,f,k),F=e||!!Ks("web_always_load_chat_support");OC("client",function(){var a=Vl(l,n);if(F&&!SC)try{a.l(w),SC=!0}catch(ba){}a.A(w)});
return!1}
function $C(){(B?ar("7"):Eg?ar("3.6"):Jg?ar("5"):Ig||Wd)||y(Me("reportbug"),function(a){yy(a,!1)})}
function UC(){var a=C("movie_player");if(a&&a.currentAdInformation){var b={};try{b=a.currentAdInformation()}catch(c){}a=b;a.adIds&&(QC.ad_ids=a.adIds.join());a.adSystems&&(QC.ad_systems=a.adSystems.join())}}
;var aD,bD=[];function cD(a){dD("keyboard");27!=a.keyCode||a.event&&!1===a.event.returnValue||!document.activeElement||document.activeElement.blur()}
function eD(){dD("mouse")}
function dD(a){aD!==a&&(aD=a,P(bD),bD.length=0,"keyboard"==aD?(fD(!0),bD=[O(window,"click",eD),O(window,"mousemove",eD)]):"mouse"==aD&&(fD(!1),bD=[O(window,"keydown",cD)]))}
function fD(a){Ro(document.documentElement,"no-focus-outline",!a)}
;function gD(a){var b=["guide"];b=hD(b);if(b.length){var c=a||{};c.frags=b.join(",");a=L("XSRF_FIELD_NAME",void 0);var d=L("XSRF_TOKEN",void 0),e="/watch_fragments_ajax";Ks("use_watch_fragments2")&&(e="/watch_fragments2_ajax");c=Ug(e,c);e={};e[a]=d;e.client_url=window.location.href;a=Sg(e);iD.push(spf.load(c,{method:"POST",postData:a,onDone:function(){if(Xb(b,"guide")){var a=t("yt.www.guide.setup");a&&a(!1);a=L("GUIDE_SELECTED_ITEM",void 0);var c=t("yt.www.guide.selectGuideItem");c&&c(a);R("appbar-guide-delay-load")}R("yt-www-pageFrameCssNotifications-load")}}));
jD=bc(jD,b)}}
function kD(){var a=Tr(window.location.href);a.tr="nonwatch";gD(a)}
function hD(a){return Pb(a,function(a){return!Xb(jD,a)})}
var iD=[],jD=[],lD=[];function mD(){return t("gapi.iframes.getContext")()}
;function nD(a){if(Ca(a))return oD(a);if(Ea(a)&&!Da(a)&&!(Ea(a)&&0<a.nodeType))return pD(a);try{return m.JSON.stringify(a),a}catch(b){}}
function pD(a){return nc(a,function(a){return nD(a)})}
function oD(a){return Qb(a,function(a){return nD(a)})}
;function qD(a){Vt.call(this,1,arguments);this.j=a}
x(qD,Vt);function rD(a){Vt.call(this,1,arguments);this.j=a}
x(rD,Vt);function sD(a,b,c){Vt.call(this,3,arguments);this.w=a;this.j=b;this.l=null!=c?!!c:null}
x(sD,Vt);function tD(a,b){Vt.call(this,1,arguments);this.button=a;this.j=b}
x(tD,Vt);function uD(a,b,c,d,e){Vt.call(this,2,arguments);this.l=a;this.j=b;this.A=c||null;this.w=d||null;this.source=e||null}
x(uD,Vt);function vD(a,b,c){Vt.call(this,1,arguments);this.j=a;this.l=b}
x(vD,Vt);function wD(a,b,c,d,e,f,h){Vt.call(this,1,arguments);this.l=a;this.B=b;this.j=c;this.C=d||null;this.A=e||null;this.w=f||null;this.source=h||null}
x(wD,Vt);
var xD=new Xt("subscription-batch-subscribe",qD),yD=new Xt("subscription-batch-unsubscribe",qD),zD=new Xt("subscription-show-pref-overlay",tD),AD=new Xt("subscription-subscribe",uD),BD=new Xt("subscription-subscribe-loading",rD),CD=new Xt("subscription-subscribe-loaded",rD),DD=new Xt("subscription-subscribe-success",vD),ED=new Xt("subscription-subscribe-external",uD),FD=new Xt("subscription-unsubscribe",wD),GD=new Xt("subscription-unsubscirbe-loading",rD),HD=new Xt("subscription-unsubscribe-loaded",rD),
ID=new Xt("subscription-unsubscribe-success",rD),JD=new Xt("subscription-external-unsubscribe",wD),KD=new Xt("subscription-enable-ypc",rD),LD=new Xt("subscription-disable-ypc",rD),MD=new Xt("subscription-prefs",sD),ND=new Xt("subscription-prefs-success",sD),OD=new Xt("subscription-prefs-failure",sD);var PD="http://www.youtube.com https://www.youtube.com https://plus.google.com https://plus.googleapis.com https://plus.sandbox.google.com https://plusone.google.com https://plusone.sandbox.google.com https://apis.google.com https://apis.sandbox.google.com https://web-ppg.corp.google.com https://web-green-qa.youtube.com https://web-release-qa.youtube.com".split(" "),QD=[BD,CD,DD,GD,HD,ID,ED,JD],RD=[BD,CD,DD,GD,HD,ID,KD,LD];function SD(a,b){this.l={};this.w=a;this.j=b;var c=u(this.A,this),d=this.j;var e=e||mD();e.addOnConnectHandler("ytsubscribe",c,["ytapi"],d)}
SD.prototype.dispose=function(){var a=a||mD();a.removeOnConnectHandler("ytsubscribe")};
SD.prototype.A=function(a,b){var c=b.id;this.l[c]=a;var d={iframe:a,role:"yt"};var e=e||mD();e.connectIframes(d);c=u(this.B,this,c);a.registerWasClosed(c,this.j);a.register("msg-youtube-pubsub",this.w,this.j)};
SD.prototype.B=function(a){delete this.l[a]};
SD.prototype.send=function(a,b){lc(this.l,function(c){c.send(a,b,void 0,this.j)},this)};function TD(){this.j=null;this.l=[]}
za(TD);g=TD.prototype;g.init=function(){if(L("UNIVERSAL_HOVERCARDS")){var a=u(this.Ph,this),b=L("LOGGED_IN"),c=L("SESSION_INDEX",void 0),d=L("DELEGATED_SESSION_ID",void 0),e={callback:a,"googleapis.config":{signedIn:b},iframes:{card:{url:L("GAPI_HOST",void 0)+"/:session_prefix:_/hovercard/internalcard?p=36&hl="+L("GAPI_LOCALE",void 0)}}};b&&(c&&(e["googleapis.config"].sessionIndex=c),d&&(e["googleapis.config"].sessionDelegate=d));OC("card:gapi.iframes",{callback:a,config:e})}};
g.dispose=function(){this.j&&(this.j.dispose(),this.j=null);eu(this.l);this.l.length=0;var a=t("gapi.card.unwatch");a&&a()};
g.Ph=function(){var a=t("gapi.config.update");if(a){var b=(Mg(window.location.href.match(Lg)[5]||null)||"/").split("/");a("card/source","youtube"+(b[1]?"."+b[1]:""));a("card/hoverDelay",450);a("card/loadDelay",250);a("card/closeDelay",200);a("card/usegapi",1);a("card",{p:36})}(a=t("gapi.card.watch"))&&a();UD(this)};
function UD(a){var b=t("gapi.iframes.makeWhiteListIframesFilter")(PD),c=u(a.Kg,a);a.j=new SD(c,b);y(RD,function(a){this.l.push(du(a,La(this.kh,a),this))},a)}
g.Kg=function(a){if("pubsub2"==a.eventType){var b=Ub(QD,function(b){return b.toString()==a.topicString}),c=a.serializedData;
if(b&&(!b.Pb||c)){if(b.Pb)try{var d=Wt(b.Pb,c)}catch(e){return}bu(b,d)}}};
g.kh=function(a,b){if(this.j){var c=b?b.Sc():null;c={eventType:"pubsub2",topicString:a.toString(),serializedData:nD(c)};this.j.send("cmd-youtube-pubsub",c)}};function VD(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&ms(c.data.follow_on_url)}}
;function WD(a,b,c){XD("add_to_watch_later_list",a,b,c)}
function YD(a){XD("delete_from_watch_later_list",a,void 0,void 0)}
function XD(a,b,c,d){cs(c?c+"playlist_video_ajax?action_"+a+"=1":"/playlist_video_ajax?action_"+a+"=1",{method:"POST",xa:{feature:b.feature||null,authuser:b.Qj||null,pageid:b.pageId||null},V:{video_ids:b.videoIds||null,source_playlist_id:b.sourcePlaylistId||null,full_list_id:b.fullListId||null,delete_from_playlists:b.fk||null,add_to_playlists:b.Oj||null,plid:L("PLAYBACK_ID")||null},context:b.context,onError:b.onError,R:function(a,c){var d=c.result;d&&d.actions&&VD(d.actions);b.R.call(this,a,c)},
qa:b.qa,withCredentials:!!d})}
;var ZD=[],$D="";function aE(){Jy("addto-watch-later-button","click",bE);Jy("addto-watch-later-button-success","click",cE);Jy("addto-watch-later-button-remove","click",dE);Jy("addto-watch-later-button-sign-in","click",eE);var a=C("shared-addto-watch-later-login");ZD.push(Gs(a,"click",fE,"sign-in-link"));ZD.push(Gs(a,bn,gE,"sign-in-link"))}
function eE(a){$D=T(a,"video-ids");var b=D("sign-in-link",C("shared-addto-watch-later-login"));b&&(J(a,"addto-wl-focused"),M(function(){b.focus()},0))}
function gE(){var a=D("addto-wl-focused");a&&(K(a,"addto-wl-focused"),M(function(){a.focus()},0))}
function fE(a){var b=Ur("/addto_ajax",{action_redirect_to_signin_with_add:1,video_ids:$D,next_url:document.location}),c=Ye(document,"form");c.action=b;c.method="POST";b=Ye(document,"input");b.type="hidden";b.name=L("XSRF_FIELD_NAME",void 0);b.value=L("XSRF_TOKEN",void 0);c.appendChild(b);document.body.appendChild(c);c.submit();a.preventDefault()}
function bE(a){So(a,"addto-watch-later-button","addto-watch-later-button-loading");Oe(a,{"aria-pressed":"true"});var b=T(a,"video-ids");WD({videoIds:b,R:function(c,d){var e=d.list_id;hE(e,b,a);R("playlist-addto",b,e)},
onError:function(c,d){6==d.return_code?hE(d.list_id,b,a):iE(a,d)}})}
function cE(a){So(a,"addto-watch-later-button-success","addto-watch-later-button-loading");var b=T(a,"video-ids");YD({videoIds:b,R:function(){So(a,"addto-watch-later-button-loading","addto-watch-later-button");var b=wy("ADDTO_WATCH_LATER");pB(kB.getInstance(),a,b);R("WATCH_LATER_VIDEO_REMOVED")},
onError:function(b,d){iE(a,d)}})}
function dE(a){var b=T(a,"video-ids");YD({videoIds:b,R:function(b,d){R("WATCH_LATER_VIDEO_REMOVED",a,d.result.video_count)},
onError:function(b,d){iE(a,d)}})}
function hE(a,b,c){So(c,"addto-watch-later-button-loading","addto-watch-later-button-success");var d=wy("ADDTO_WATCH_LATER_ADDED");pB(kB.getInstance(),c,d);R("WATCH_LATER_VIDEO_ADDED",a,b.split(","))}
function iE(a,b){So(a,"addto-watch-later-button-loading","addto-watch-later-button-error");var c=b.error_message||wy("ADDTO_WATCH_LATER_ERROR");pB(kB.getInstance(),a,c)}
;function jE(a){this.U=a;this.j=null;this.A=0;this.C=null;this.B=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.w=0;this.F=O(window,"mousemove",u(this.M,this));this.O=Qr(u(this.H,this),25)}
x(jE,Hk);jE.prototype.M=function(a){p(a.j)||zs(a);var b=a.j;p(a.l)||zs(a);this.j=new De(b,a.l)};
jE.prototype.H=function(){if(this.j){var a=Jr();if(0!=this.A){var b=this.C,c=this.j,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.A);this.l[this.w]=.5<Math.abs((d-this.B)/this.B)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.U();this.B=d}this.A=a;this.C=this.j;this.w=(this.w+1)%4}};
jE.prototype.N=function(){Rr(this.O);P(this.F)};function kE(a){if(!lE||a)lE=Qe(window);return lE}
function mE(){return nE=Se(document)}
function oE(){pE||(pE=Ot(qE,1,100))}
function qE(){pE=0;qt("page-mouse",rE.j||new De)}
function sE(){tE||(tE=Ot(uE,1,200))}
function uE(){tE=0;var a=kE(!0);qt("page-resize",a)}
function vE(){wE||(wE=Ot(xE,1,200))}
function xE(){wE=0;var a=mE();qt("page-scroll",a)}
var lE=null,nE=null,yE=[],rE=null,pE=0,tE=0,wE=0;var zE,AE,BE,CE,DE,EE,FE=0,GE=!1;function HE(){GE||(t("yt.www.page.visibilitymonitor").dispose(),AE={},BE={},zE={},CE={},EE=[],DE=IE(),EE.push(Q("page-resize",JE)),EE.push(Q("page-scroll",KE)),EE.push(Q("yt-dom-content-change",LE)),GE=!0,ME(!0))}
function NE(){GE&&(pt(EE),OE(),AE={},BE={},zE={},CE={},EE.length=0,DE=null,GE=!1)}
function JE(){DE=IE();LE()}
function KE(){DE=IE();PE()}
function IE(){var a=mE(),b=kE();return new xf(a.y,a.x+b.width-1,a.y+b.height-1,a.x)}
function QE(a){var b=qs(a),c=zE[b];if(c)return c;c=O(a,"scroll",RE);return c=zE[b]={el:a,ph:c,pb:null}}
function OE(){lc(zE,function(a,b){var c=zE[b];c&&P(c.ph);delete zE[b]})}
function RE(a){LE(a.target)}
function SE(a,b){var c=[qs(a),b.complete];if(b.transform){var d=b.transform;c.push(d.top,d.right,d.bottom,d.left)}return c.join(":")}
function TE(a,b){var c;b?c=a:c=gf(a);return c?(c=E(c,"yt-viewport"))?QE(c):null:null}
function UE(a,b){if(a.pb&&!b)return a.pb;var c=VE(a.el),d=TE(a.el);d&&(d=UE(d,b),c=WE(c,d));return a.pb=c}
function VE(a){var b=Mf(a);a=new Fe(a.offsetWidth,a.offsetHeight);return new xf(b.y,b.x+a.width-1,b.y+a.height-1,b.x)}
function WE(a){var b=[],c=[],d=[],e=[];y(arguments,function(a){b.push(a.top);c.push(a.right);d.push(a.bottom);e.push(a.left)});
var f=Math.max.apply(Math,b),h=Math.min.apply(Math,c),k=Math.min.apply(Math,d),l=Math.max.apply(Math,e);return f>k||l>h?new xf(0,0,0,0):new xf(f,h,k,l)}
function XE(a,b){var c=DE,d=VE(a);if(b.transform){var e=b.transform;Ea(e)?(d.top-=e.top,d.right+=e.right,d.bottom+=e.bottom,d.left-=e.left):(d.top-=e,d.right+=Number(void 0),d.bottom+=Number(void 0),d.left-=Number(void 0))}var f;b.complete?f=Bf:f=Cf;if(!f.call(xf,c,d))return!1;e=TE(a);if(!e)return!0;UE(e);c=WE(c,e.pb);return f.call(xf,c,d)}
function YE(a,b,c){var d=SE(a,c);b.hasOwnProperty(d)||(b[d]=XE(a,c));return b[d]}
function ZE(a,b,c){a=SE(a,c);if(!!CE[a]!=b)return b?"visible":"hidden"}
function $E(a,b){lc(AE,function(c){if(c&&(!b||hf(b,c.el))){var d=YE(c.el,a,c.options);(d=ZE(c.el,d,c.options))&&d==c.type&&M(La(c.ya,c.el),0)}})}
function cF(a,b){lc(BE,function(c){if(c&&(!b||hf(c.el,b)||hf(b,c.el))){var d=c.filter(c.el);if(d&&d.length){var e=[],f=[],h=[];y(d,function(b){var d=YE(b,a,c.options);d?f.push(b):h.push(b);(d=ZE(b,d,c.options))&&d==c.type&&e.push(b)});
e.length&&M(La(c.ya,e,f,h),0)}}})}
function PE(a){var b={};$E(b,a);cF(b,a);Cc(CE,b)}
function lF(a,b,c,d){return uc(AE,function(e){return e.el==a&&e.type==b&&e.ya==c&&yc(e.options,d)})}
function vF(a,b,c,d,e){return uc(BE,function(f){return f.el==a&&f.type==b&&f.ya==c&&f.className==d&&yc(f.options,e)})}
function DF(a,b){y(Me("yt-viewport",b),a)}
function EF(a){DF(function(a){QE(a)},a);
ff(a)&&TE(a,!0)}
function FF(a,b){lc(zE,function(c){b&&!hf(b,c.el)||b==c.el||a(c)})}
function GF(a){var b=UE(a,!0);a=a.pb;return!(a==b||a&&b&&a.top==b.top&&a.right==b.right&&a.bottom==b.bottom&&a.left==b.left)}
function LE(a){if(GE){var b;if(a)for(b=TE(a,!0);b&&GF(b);)b=TE(a);FF(function(a){delete a.pb},b?b.el:a);
PE(a)}}
function HF(a,b){if(!GE)throw Error("yt.www.page.visibilitymonitor is not initialized.");return XE(a,b||{})}
function IF(a,b,c,d){if(!GE)return"";d=d||{transform:void 0,complete:void 0};var e=lF(a,b,c,d);if(e)return e;EF(a);e=++FE+"";AE[e]={el:a,type:b,ya:c,options:d};return e}
function JF(a,b,c,d,e){if(!GE)return"";a=a||document;e=e||{transform:void 0,complete:void 0};var f=vF(a,b,c,d,e);if(f)return f;EF(a);f=++FE+"";BE[f]={el:a,type:b,ya:c,filter:function(a){return Me(d,a)},
className:d,options:e};return f}
function KF(a){GE&&(delete AE[a],delete BE[a])}
function ME(a){var b=t("yt.www.page.visibilitymonitor");if(a||!b)r("yt.www.page.visibilitymonitor.States.VISIBLE","visible",void 0),r("yt.www.page.visibilitymonitor.States.HIDDEN","hidden",void 0),r("yt.www.page.visibilitymonitor.init",HE,void 0),r("yt.www.page.visibilitymonitor.dispose",NE,void 0),r("yt.www.page.visibilitymonitor.refresh",LE,void 0),r("yt.www.page.visibilitymonitor.isVisible",HF,void 0),r("yt.www.page.visibilitymonitor.listen",IF,void 0),r("yt.www.page.visibilitymonitor.delegateByClass",
JF,void 0),r("yt.www.page.visibilitymonitor.unlistenByKey",KF,void 0)}
ME(!1);function LF(){(function(){try{for(var a=this;a.parent!=a;){if("$"==a.frameElement.src)throw Error("odd");a=a.parent}if(null!=a.frameElement)throw Error("busted");}catch(b){document.close(),document.open(),window.open("/","_top"),Fd(top.location,"/")}})()}
function MF(a){"block"==a.responseText&&LF()}
if(window!=window.top){var Wr=document.referrer;if(window.parent!=window.top)LF();else{var NF=Vr();if(null===NF?0:"com"==NF[0]&&NF[1].match(/^youtube(?:-nocookie)?$/))LF();else{var OF=Vr();if(!(null===OF?0:"google"==OF[1]||"google"==OF[2]&&("au"==OF[0]&&"com"==OF[1]||"uk"==OF[0]&&"co"==OF[1]))){var PF={location:encodeURIComponent(Wr),self:encodeURIComponent(window.location.href),user_agent:encodeURIComponent(navigator.userAgent)};cs("/roger_rabbit",{format:"RAW",method:"POST",xa:PF,R:MF})}}}};var Xz,QF=[],RF=[],SF=null,TF=null;function UF(a){SF=a.j;TF=a.l}
function VF(){if(SF){var a=Ub(Me("overlay-confirmation-preferences-update-frequency",Xz),function(a){return a.value==SF});
a&&(a.checked=!0,Sz())}(a=D("receive-post-updates-checkbox",Xz))&&null!==TF&&Vz(a,TF)}
function WF(){return D("receive-post-updates-checkbox",Xz)}
function XF(){var a=WF();a&&!a.disabled&&(TF=a.checked)}
function YF(){var a=WF();a&&("receive-no-updates"==Wz()?(Vz(a,!1),a.disabled=!0):(a.disabled=!1,null===TF||Vz(a,TF)))}
function ZF(a){a=E(a.currentTarget,"overlay-confirmation-content");var b=D("updates-frequency-menu",a);b&&(b.disabled=!D("receive-all-updates",a).checked)}
function $F(a){var b=a.currentTarget;a=T(b,"frequency");var c=Qy.getInstance();b=E(b,V(c,"menu"));c=Qy.getInstance();b=Vy(c,b);T(b,"frequency")!=a&&Tw(b,"frequency",a)}
function aG(a){a=gf(a);a=D("subscription-preferences-overlay-container",a);return D("yt-dialog",a)}
function bG(a){Xz||(Xz=aG(a.button));cG(!0);hA.getInstance().show(Xz);var b={};b.c=a.j;cs("/subscription_ajax?action_get_subscription_preferences_overlay=1",{method:"POST",V:b,Wa:!0,R:function(a,b){var c=b.content_html;cG(!1);var d=D("subscription-preferences-overlay-content",Xz);Cd(d,c);c=mA();d=D("overlay-confirmation-save-button",c);P(RF);RF.length=0;RF.push(O(d,"click",dG),Gs(c,"click",ZF,"receive-all-updates"),Gs(c,"keypressed",ZF,"receive-all-updates"),Gs(c,"click",XF,"receive-post-updates"),
Gs(c,"keypressed",XF,"receive-post-updates"),Gs(c,"click",YF,"overlay-confirmation-preferences-update-frequency"),Gs(c,"keypressed",YF,"overlay-confirmation-preferences-update-frequency"),Gs(document.body,"click",$F,"updates-frequency-choice"));SF=Wz();TF=(c=WF())?c.checked:null},
onError:function(){hA.getInstance().hide()}})}
function cG(a){var b=Xz,c=D("subscription-preferences-overlay-loading",b);b=D("subscription-preferences-overlay-content",b);yy(c,a);yy(b,!a)}
function dG(a){var b=E(a.currentTarget,"yt-dialog-fg");if(b){a=T(a.currentTarget,"channel-external-id");var c=Wz(),d=WF();if(c)a=new sD(a,c,d?d.checked:null);else{c=D("receive-all-updates",b);var e=D("updates-frequency-menu",b);b=!1;var f=!e||I(e,"hidden");f||"occasionally"!=T(e,"frequency")||(b=!0);e="receive-highlight-updates";c.checked&&!b?e="receive-all-updates":f||c.checked||(e="receive-no-updates");a=new sD(a,e,d?d.checked:null)}bu(MD,a);hA.getInstance().hide()}}
;function eG(a,b){Vt.call(this,1,arguments);this.container=a;this.offerId=b||null}
x(eG,Vt);function fG(a){Vt.call(this,1,arguments);this.zc=a}
x(fG,Vt);function gG(a,b){Vt.call(this,2,arguments);this.l=a;this.j=b}
x(gG,Vt);function hG(a,b,c,d){Vt.call(this,1,arguments);this.j=b;this.l=c||null;this.itemId=d||null}
x(hG,Vt);function iG(a,b){Vt.call(this,1,arguments);this.l=a;this.j=b||null}
x(iG,Vt);function jG(a){Vt.call(this,1,arguments);this.j=a}
x(jG,Vt);var kG=new Xt("ypc-init-purchase-for-container",eG),lG=new Xt("ypc-core-load",fG),mG=new Xt("ypc-guide-sync-success",gG),nG=new Xt("ypc-purchase-success",hG),oG=new Xt("ypc-subscription-cancel",jG),pG=new Xt("ypc-subscription-cancel-success",iG),qG=new Xt("ypc-init-subscription",jG);var rG=!1,sG=[];function tG(a){a.j?rG?bu(ED,a):bu(lG,new fG(function(){bu(qG,new jG(a.j))})):uG(a.l,a.A,a.w,a.source)}
function vG(a){a.j?rG?bu(JD,a):bu(lG,new fG(function(){bu(oG,new jG(a.j))})):wG(a.l,a.B,a.A,a.w,a.source)}
function xG(a){yG(cc(a.j))}
function zG(a){AG(cc(a.j))}
function BG(a){CG(a.w,a.j,a.l)}
function DG(a){var b=a.itemId,c=a.j.subscriptionId;b&&c&&bu(DD,new vD(b,c,a.j.channelInfo))}
function EG(a){var b=a.j;lc(a.l,function(a,d){bu(DD,new vD(d,a,b[d]))})}
function FG(a){bu(ID,new rD(a.l.itemId));a.j&&a.j.length&&(GG(a.j,ID),GG(a.j,KD))}
function uG(a,b,c,d){var e=new rD(a);bu(BD,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=L("PLAYBACK_ID"))&&(c.plid=d);(d=L("EVENT_ID"))&&(c.ei=d);b&&HG(b,c);cs("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",xa:f,V:c,R:function(b,c){var d=c.response;bu(DD,new vD(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&R("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&VD(d.actions)},
qa:function(){bu(CD,e)}})}
function wG(a,b,c,d,e){var f=new rD(a);bu(GD,f);var h={};h.c=a;d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=L("PLAYBACK_ID"))&&(d.plid=a);(a=L("EVENT_ID"))&&(d.ei=a);c&&HG(c,d);cs("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",xa:h,V:d,R:function(a,b){var c=b.response;bu(ID,f);c.actions&&VD(c.actions)},
qa:function(){bu(HD,f)}})}
function CG(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new sD(a,b,c);cs("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",V:d,onError:function(){bu(OD,e)},
R:function(){bu(ND,e)}})}}
function yG(a){if(a.length){var b=ec(a,0,40);bu("subscription-batch-subscribe-loading");GG(b,BD);var c={};c.a=b.join(",");var d=function(){bu("subscription-batch-subscribe-loaded");GG(b,CD)};
cs("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",V:c,R:function(c,f){d();var e=f.response,k=e.id;if(Ba(k)&&k.length==b.length){var l=e.channel_info_map;y(k,function(a,c){var d=b[c];bu(DD,new vD(d,a,l[d]))});
a.length?yG(a):bu("subscription-batch-subscribe-finished")}},
onError:function(){d();bu("subscription-batch-subscribe-failure")}})}}
function AG(a){if(a.length){var b=ec(a,0,40);bu("subscription-batch-unsubscribe-loading");GG(b,GD);var c={};c.c=b.join(",");var d=function(){bu("subscription-batch-unsubscribe-loaded");GG(b,HD)};
cs("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",V:c,R:function(){d();GG(b,ID);a.length&&AG(a)},
onError:function(){d()}})}}
function GG(a,b){y(a,function(a){bu(b,new rD(a))})}
function HG(a,b){var c=Sr(a);Ma(b,c)}
;var IG={},JG=[];function KG(a){a=E(a,"yt-uix-button-subscription-container");a=D("unsubscribe-confirmation-overlay-container",a);return D("yt-dialog",a)}
function LG(a,b){P(JG);JG.length=0;IG[b]||(IG[b]=KG(a));hA.getInstance().show(IG[b]);var c=mA();return new wj(function(a){JG.push(Gs(c,"click",function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function MG(a){for(var b=0,c=a.length;b<c;b++){var d;if(d=Ne("IMG",null,a[b])){var e=T(d,"thumb");e&&(d.src=e,Vw(d,"thumb"))}}}
;function NG(){var a=L("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!L("SESSION_INDEX")&&!L("LOGGED_IN"))}
;function OG(){U.call(this,"simple-thumb-wrap")}
var PG,QG;x(OG,U);za(OG);var RG="",SG=/__VIDEO_ID__/g;OG.prototype.register=function(){if(RG=L("WATCH_LATER_BUTTON",void 0))PG=L("WATCH_QUEUE_BUTTON",void 0),QG=L("WATCH_QUEUE_MENU",void 0),X(this,"mouseover",this.j),X(this,an,this.j),X(this,"focus",this.j)};
OG.prototype.unregister=function(){Y(this,"mouseover",this.j);Y(this,an,this.j);Y(this,"focus",this.j);OG.K.unregister.call(this);QG=PG=RG=""};
OG.prototype.j=function(a){var b=NG(),c=E(a,"thumb-wrapper");if(!(c&&(b?D("addto-watch-later-button",c):D("addto-watch-later-button-sign-in",c)))){var d=this.D(a,"vid");b=RG.replace(SG,d);c=PG.replace(SG,d);d=QG.replace(SG,d);var e=E(a,"thumb-wrapper");e.appendChild(Ze(Gd(b)));e.appendChild(Ze(Gd(d)));e.appendChild(Ze(Gd(c)));(a=E(a,"video-list-item"))&&K(a,"show-video-time")}};function TG(a){var b=UG();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Q("LOGGED_IN",function(b){pt(L("LOGGED_IN_PUBSUB_KEY",void 0));Lr("LOGGED_IN",!0);a(b)});
Lr("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function UG(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=Tg(a,"mode","subscribe");a=Tg("/signin?context=popup","next",a);return a=Tg(a,"feature","sub_button")}
r("yt.pubsub.publish",R,void 0);function VG(){U.call(this,"subscription-button")}
x(VG,U);za(VG);VG.prototype.register=function(){X(this,"click",this.ad);Ny(this,BD,this.ce);Ny(this,CD,this.Ve);Ny(this,DD,this.Rh);Ny(this,GD,this.ce);Ny(this,HD,this.Ve);Ny(this,ID,this.ah);Ny(this,KD,this.Jg);Ny(this,LD,this.Ig)};
VG.prototype.unregister=function(){Y(this,"click",this.ad);VG.K.unregister.call(this)};
var WG={bd:"hover-enabled",Ze:"yt-uix-button-subscribe",af:"yt-uix-button-subscribed",di:"ypc-enabled",bf:"yt-uix-button-subscription-container",cf:"yt-subscription-button-disabled-mask-container"},XG={fi:"channel-external-id",df:"subscriber-count-show-when-subscribed",ef:"subscriber-count-tooltip",ff:"subscriber-count-title",Ei:"href",Ji:"insecure",cd:"is-subscribed",Yi:"parent-url",pj:"clicktracking",kf:"show-unsub-confirm-dialog",tj:"show-unsub-confirm-time-frame",lf:"style-type",dd:"subscribed-timestamp",
ed:"subscription-id",Dj:"target",mf:"ypc-enabled"};g=VG.prototype;g.ad=function(a){var b=this.D(a,"href"),c=this.D(a,"insecure"),d=NG();c=c&&!0;if(b)a=this.D(a,"target")||"_self",window.open(b,a);else if(!c)if(d){b=this.zb(a);d=this.D(a,"clicktracking");c=YG(this,a);var e=this.D(a,"parent-url");if(this.D(a,"is-subscribed")){var f=this.D(a,"subscription-id"),h=new wD(b,f,c,a,d,e);ZG(this,a)?LG(a,b).then(function(){bu(FD,h)}):bu(FD,h)}else bu(AD,new uD(b,c,d,e))}else $G(this,a)};
g.ce=function(a){this.ub(a.j,this.ze,!0)};
g.Ve=function(a){this.ub(a.j,this.ze,!1)};
g.Rh=function(a){this.ub(a.j,this.Ae,!0,a.l)};
g.ah=function(a){this.ub(a.j,this.Ae,!1)};
g.Jg=function(a){this.ub(a.j,this.xf)};
g.Ig=function(a){this.ub(a.j,this.wf)};
g.Ae=function(a,b,c){b?(Tw(a,XG.cd,"true"),c&&Tw(a,XG.ed,c),this.D(a,XG.kf)&&(b=new No,Tw(a,XG.dd,(b.getTime()/1E3).toString()))):(Vw(a,XG.cd),Vw(a,XG.dd),Vw(a,XG.ed));aH(this,a)};
g.zb=function(a){return this.D(a,"channel-external-id")};
function YG(a,b){if(!a.D(b,"ypc-enabled"))return null;var c=a.D(b,"ypc-item-type"),d=a.D(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
g.ze=function(a,b){var c=E(a,WG.bf);Ro(c,WG.cf,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function aH(a,b){var c=a.D(b,XG.lf),d=!!a.D(b,"is-subscribed");c="-"+c;var e=WG.af+c;Ro(b,WG.Ze+c,!d);Ro(b,e,d);a.D(b,XG.ef)&&!a.D(b,XG.df)&&(c=V(kB.getInstance()),Ro(b,c,!d),b.title=d?"":a.D(b,XG.ff));d?M(function(){J(b,WG.bd)},1E3):K(b,WG.bd)}
g.xf=function(a){var b=!!this.D(a,"ypc-item-type"),c=!!this.D(a,"ypc-item-id");!this.D(a,"ypc-enabled")&&b&&c&&(J(a,"ypc-enabled"),Tw(a,XG.mf,"true"))};
g.wf=function(a){this.D(a,"ypc-enabled")&&(K(a,"ypc-enabled"),Vw(a,"ypc-enabled"))};
function bH(a,b){return Pb(Me(V(a)),function(a){return b==this.zb(a)},a)}
g.Qh=function(a,b,c){var d=fc(arguments,2);y(a,function(a){b.apply(this,bc(a,d))},this)};
g.ub=function(a,b,c){var d=bH(this,a);this.Qh.apply(this,bc([d],fc(arguments,1)))};
function $G(a,b){var c=u(function(a){a.discoverable_subscriptions&&Lr("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.ad(b)},a);
TG(c)}
function ZG(a,b){if(!a.D(b,"show-unsub-confirm-dialog"))return!1;var c=a.D(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.D(b,"subscribed-timestamp"),10),(new No).getTime()<1E3*(c+600))?!0:!1}
;function cH(){U.call(this,"subscription-preferences-button")}
x(cH,U);za(cH);cH.prototype.register=function(){X(this,"click",this.Xe);Ny(this,DD,this.Th);Ny(this,ND,this.bh)};
cH.prototype.unregister=function(){Y(this,"click",this.Xe);cH.K.unregister.call(this)};
var dH={"receive-all-updates":"yt-uix-subscription-notifications-all","receive-highlight-updates":"yt-uix-subscription-notifications-highlights","receive-no-updates":"yt-uix-subscription-notifications-none"};g=cH.prototype;g.Xe=function(a){var b=this.zb(a);bu(zD,new tD(a,b))};
g.Ee=function(a,b){Qo(a,["yt-uix-subscription-notifications-all","yt-uix-subscription-notifications-highlights","yt-uix-subscription-notifications-none"]);J(a,b)};
g.bh=function(a){this.We(a.w,this.Ee,dH[a.j])};
g.Th=function(a){this.We(a.j,this.Ee,"yt-uix-subscription-notifications-highlights")};
g.zb=function(a){return this.D(a,"channel-external-id")};
g.We=function(a,b,c){var d=eH(this,a);this.Sh.apply(this,bc([d],fc(arguments,1)))};
function eH(a,b){return Pb(Me(V(a)),function(a){return b==this.zb(a)},a)}
g.Sh=function(a,b,c){var d=fc(arguments,2);y(a,function(a){b.apply(this,bc(a,d))},this)};var fH=nu(),gH=0,hH=null;var iH=0,jH=0,kH=[],lH=[],mH=0,nH={},oH={},qH=new Eo(pH,1E3);function rH(){mH++;var a=Qe(window),b=new Df(0,0,a.width,a.height);qw("vph",a.height);qw("vpw",a.width);S("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;qH.start();for(var f=0;f<c;f++){var h=a[f];if(sH(h,b)){var k=tH(h);k.then(uH);d.push(k);kH.push(k);h.loadTime||(e=!1)}}e&&qw("yt_eil",1);qw("vpni",d.length);S("vpcc");b=Wj(d).then(vH);Xj(b,null,wH,void 0);b.then(xH);kH.push(b);return b}
function xH(){qH.stop()}
function wH(){S("vpr")}
function sH(a,b){for(var c=a,d=[];c!=document.body;){var e=qs(c);if(e in nH)return!0;if(e in oH)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return oH[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return oH[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)nH[d[c]]=!0;return!0}
function vH(a){var b=Qe(window);b=new Df(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;sH(a[d].cg,b)&&c<f&&(c=f)}return c}
function tH(a){var b=mH;return new wj(function(c,d){var e={cg:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){mH!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},lH.push(a))})}
function uH(a){qH.start();qw("vpil",++iH);a=a.time;jH<a&&(jH=a,S("lim",a))}
function pH(){S("vptl",jH);S("vpl",jH)}
function yH(){kH.forEach(function(a){a.cancel()});
jH=iH=kH.length=0;nH={};oH={};lH.forEach(function(a){a.slt=void 0});
lH.length=0}
;function zH(){S("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){S("cpt");R("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?(S("cpt"),R("on_cpt_tick",(new Date).getTime())):setTimeout(function(){S("cpt");
R("on_cpt_tick",(new Date).getTime())},0);
AH();L("CSI_VIEWPORT")&&(BH=rH(),BH.then(function(a){S("vpl",a);BH=null},function(){}))}
function AH(){CH("init");var a=L("PAGE_NAME",void 0);a&&CH("init-"+a)}
var BH=null;function CH(a){t("yt.scheduler.instance")?DH.push(Ot(La(qt,a),1,0)):R(a)}
var DH=[];var EH;function FH(){if(!EH){var a=C("watch-queue");if(!a)return[];EH=D("watch-queue-items-list",a)}if(!EH)return[];var b=[];a=cf(EH);y(a,function(a){(a=T(a,"video-id"))&&b.push(a)});
return b}
;function GH(a){this.port=this.domain="";this.j="/api/lounge";this.l=!0;a=a||document.location.href;var b=Number(a.match(Lg)[4]||null)||"";b&&(this.port=":"+b);this.domain=Ng(a)||"";a=hd;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Ib(a,"10.0")&&(this.l=!1))}
function HH(a,b){var c=a.j;if(p(void 0)?0:a.l)c="https://"+a.domain+a.port+a.j;return Ug(c+b,{})}
function IH(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,R:La(a.A,d,!0),onError:La(a.w,e),cb:La(a.B,e)};c&&(a.V=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return cs(b,a)}
GH.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
GH.prototype.w=function(a,b){a(Error("Request error: "+b.status))};
GH.prototype.B=function(a){a(Error("request timed out"))};var JH=v(),KH=null,LH=Array(50),MH=-1,NH=!1;function OH(){var a=PH;QH();KH.push(a);RH(KH)}
function SH(a,b){QH();var c=KH,d=TH(a,String(b));0==c.length?UH(d):(RH(c),y(c,function(a){a(d)}))}
function QH(){KH||(KH=t("yt.mdx.remote.debug.handlers_")||[],r("yt.mdx.remote.debug.handlers_",KH,void 0))}
function UH(a){var b=(MH+1)%50;MH=b;LH[b]=a;NH||(NH=49==b)}
function RH(a){var b=LH;if(b[0]){var c=MH,d=NH?c:-1;do{d=(d+1)%50;var e=b[d];y(a,function(a){a(e)})}while(d!=c);
LH=Array(50);MH=-1;NH=!1}}
function TH(a,b){var c=(v()-JH)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function VH(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function WH(a,b){return!!b&&(a.id==b||a.uuid==b)}
function XH(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function YH(a){return new VH(a)}
function ZH(a){return Ba(a)?Qb(a,YH):[]}
function $H(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function aI(a){return Ba(a)?"["+Qb(a,$H).join(",")+"]":"null"}
;function bI(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function cI(a,b){return Ub(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})}
function dI(a,b){return Ub(a,function(a){return WH(a,b)})}
;function eI(){Hk.call(this);this.H=new er;Ik(this,La(Jk,this.H))}
x(eI,Hk);eI.prototype.subscribe=function(a,b,c){return this.T()?0:this.H.subscribe(a,b,c)};
eI.prototype.Od=function(a,b,c){return this.T()?!1:gr(this.H,a,b,c)};
eI.prototype.wa=function(a){return this.T()?!1:this.H.wa(a)};
eI.prototype.L=function(a,b){return this.T()?!1:this.H.ma.apply(this.H,arguments)};function fI(a){eI.call(this);this.F=a;this.j=[]}
x(fI,eI);fI.prototype.ta=function(){return this.j};
fI.prototype.contains=function(a){return!!cI(this.j,a)};
fI.prototype.get=function(a){return a?dI(this.j,a):null};
function gI(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.j.push(b);return!0}
function hI(a,b){var c=a.j.length!=b.length;a.j=Pb(a.j,function(a){return!!cI(b,a)});
for(var d=0,e=b.length;d<e;d++)c=gI(a,b[d])||c;return c}
function iI(a,b){var c=a.j.length;a.j=Pb(a.j,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.j.length<c}
fI.prototype.info=function(a){SH(this.F,a)};function jI(a,b,c,d){eI.call(this);this.F=a;this.C=b;this.A=c;this.B=d;this.w=0;this.j=null;this.l=NaN}
x(jI,eI);var kI=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=jI.prototype;g.start=function(){!this.j&&isNaN(this.l)&&this.ke()};
g.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.l)||(N(this.l),this.l=NaN)};
g.N=function(){this.stop();jI.K.N.call(this)};
g.ke=function(){this.l=NaN;this.j=cs(HH(this.F,"/pairing/get_screen"),{method:"POST",V:{pairing_code:this.C},timeout:5E3,R:u(this.Dh,this),onError:u(this.Ch,this),cb:u(this.Eh,this)})};
g.Dh=function(a,b){this.j=null;var c=b.screen||{};c.dialId=this.A;c.name=this.B;this.L("pairingComplete",new VH(c))};
g.Ch=function(a){this.j=null;a.status&&404==a.status?this.w>=kI.length?this.L("pairingFailed",Error("DIAL polling timed out")):(a=kI[this.w],this.l=M(u(this.ke,this),a),this.w++):this.L("pairingFailed",Error("Server error "+a.status))};
g.Eh=function(){this.j=null;this.L("pairingFailed",Error("Server not responding"))};function lI(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.w=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new ap;this.j=this.l="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",mI(this,a.capabilities||""),nI(this,a.experiments||""),this.l=
a.remoteControllerUrl||"",this.j=a.localChannelEncryptionKey||"")}
lI.prototype.copy=function(){var a=new lI({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.w=this.w;a.l=this.l;a.j=this.j;return a};
lI.prototype.equals=function(a){return a?this.id==a.id:!1};
function mI(a,b){a.capabilities.clear();Pb(b.split(","),La(pc,it)).forEach(function(b){a.capabilities.add(b)})}
function nI(a,b){a.experiments.clear();b.split(",").forEach(function(b){a.experiments.add(b)})}
;var oI;function pI(){var a=qI(),b=rI();if(sI()){var c=a;var d=0;for(var e=c.length,f;d<e;){var h=d+e>>1;var k=ic(b,c[h]);0<k?d=h+1:(e=h,f=!k)}d=f?d:~d;0>d&&ec(c,-(d+1),0,b)}a=tI(a);if(0==a.length)try{ct("remote_sid")}catch(l){}else try{at("remote_sid",a.join(","),-1,"/")}catch(l){}}
function qI(){var a=Vs("yt-remote-connected-devices")||[];a.sort(ic);return a}
function tI(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return Qb(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function uI(a){Ss("yt-remote-connected-devices",a,86400)}
function rI(){if(vI)return vI;var a=Vs("yt-remote-device-id");a||(a=bI(),Ss("yt-remote-device-id",a,31536E3));for(var b=qI(),c=1,d=a;Xb(b,d);)c++,d=a+"#"+c;return vI=d}
function wI(){return Vs("yt-remote-session-browser-channel")}
function sI(){return Vs("yt-remote-session-screen-id")}
function xI(a){5<a.length&&(a=a.slice(a.length-5));var b=Qb(yI(),function(a){return a.loungeToken}),c=Qb(a,function(a){return a.loungeToken});
Tb(c,function(a){return!Xb(b,a)})&&zI();
Ss("yt-remote-local-screens",a,31536E3)}
function yI(){return Vs("yt-remote-local-screens")||[]}
function zI(){Ss("yt-remote-lounge-token-expiration",!0,86400)}
function AI(a,b){Ss("yt-remote-session-browser-channel",a);Ss("yt-remote-session-screen-id",b);var c=qI(),d=rI();Xb(c,d)||c.push(d);uI(c);pI()}
function BI(a){a||(Ws("yt-remote-session-screen-id"),Ws("yt-remote-session-video-id"));pI();a=qI();Zb(a,rI());uI(a)}
function CI(){if(!oI){var a=new vr;(a=a.isAvailable()?a:null)&&(oI=new jr(a))}return oI?!!oI.get("yt-remote-use-staging-server"):!1}
var vI="";function DI(a){fI.call(this,"LocalScreenService");this.w=a;this.l=NaN;EI(this);this.info("Initializing with "+aI(this.j))}
x(DI,fI);g=DI.prototype;g.start=function(){EI(this)&&this.L("screenChange");!Vs("yt-remote-lounge-token-expiration")&&FI(this);N(this.l);this.l=M(u(this.start,this),1E4)};
g.add=function(a,b){EI(this);gI(this,a);GI(this,!1);this.L("screenChange");b(a);a.token||FI(this)};
g.remove=function(a,b){var c=EI(this);iI(this,a)&&(GI(this,!1),c=!0);b(a);c&&this.L("screenChange")};
g.qc=function(a,b,c,d){var e=EI(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,GI(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.L("screenChange")};
g.N=function(){N(this.l);DI.K.N.call(this)};
function FI(a){if(a.j.length){var b=Qb(a.j,function(a){return a.id}),c=HH(a.w,"/pairing/get_lounge_token_batch");
IH(a.w,c,{screen_ids:b.join(",")},u(a.Nf,a),u(a.Mf,a))}}
g.Nf=function(a){EI(this);var b=this.j.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}GI(this,!b);b&&SH(this.F,"Missed "+b+" lounge tokens.")};
g.Mf=function(a){SH(this.F,"Requesting lounge tokens failed: "+a)};
function EI(a){var b=ZH(yI());b=Pb(b,function(a){return!a.uuid});
return hI(a,b)}
function GI(a,b){xI(Qb(a.j,XH));b&&zI()}
;function HI(a,b){eI.call(this);this.C=b;var c=Vs("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,h=e.length;f<h;++f){var k=e[f].id;d[k]=Xb(c,k)}this.j=d;this.B=a;this.w=this.A=NaN;this.l=null;II("Initialized with "+si(this.j))}
x(HI,eI);g=HI.prototype;g.start=function(){var a=parseInt(Vs("yt-remote-fast-check-period")||"0",10);(this.A=v()-144E5<a?0:a)?JI(this):(this.A=v()+3E5,Ss("yt-remote-fast-check-period",this.A),this.Rc())};
g.isEmpty=function(){return wc(this.j)};
g.update=function(){II("Updating availability on schedule.");var a=this.C(),b=mc(this.j,function(b,d){return b&&!!dI(a,d)},this);
KI(this,b)};
function LI(a,b,c){var d=HH(a.B,"/pairing/get_screen_availability");IH(a.B,d,{lounge_token:b.token},u(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),u(function(){c(!1)},a))}
g.N=function(){N(this.w);this.w=NaN;this.l&&(this.l.abort(),this.l=null);HI.K.N.call(this)};
function KI(a,b){a:if(oc(b)!=oc(a.j))var c=!1;else{c=sc(b);for(var d=0,e=c.length;d<e;++d)if(!a.j[c[d]]){c=!1;break a}c=!0}c||(II("Updated online screens: "+si(a.j)),a.j=b,a.L("screenChange"));MI(a)}
function JI(a){isNaN(a.w)||N(a.w);a.w=M(u(a.Rc,a),0<a.A&&a.A<v()?2E4:1E4)}
g.Rc=function(){N(this.w);this.w=NaN;this.l&&this.l.abort();var a=NI(this);if(oc(a)){var b=HH(this.B,"/pairing/get_screen_availability");this.l=IH(this.B,b,{lounge_token:sc(a).join(",")},u(this.Ug,this,a),u(this.Tg,this))}else KI(this,{}),JI(this)};
g.Ug=function(a,b){this.l=null;var c=sc(NI(this));if(gc(c,sc(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;KI(this,d);JI(this)}else this.X("Changing Screen set during request."),this.Rc()};
g.Tg=function(a){this.X("Screen availability failed: "+a);this.l=null;JI(this)};
function II(a){SH("OnlineScreenService",a)}
g.X=function(a){SH("OnlineScreenService",a)};
function NI(a){var b={};y(a.C(),function(a){a.token?b[a.token]=a.id:this.X("Requesting availability of screen w/o lounge token.")});
return b}
function MI(a){a=sc(mc(a.j,function(a){return a}));
a.sort(ic);a.length?Ss("yt-remote-online-screen-ids",a.join(","),60):Ws("yt-remote-online-screen-ids")}
;function OI(a){fI.call(this,"ScreenService");this.C=a;this.l=this.w=null;this.A=[];this.B={};PI(this)}
x(OI,fI);g=OI.prototype;g.start=function(){this.w.start();this.l.start();this.j.length&&(this.L("screenChange"),this.l.isEmpty()||this.L("onlineScreenChange"))};
g.add=function(a,b,c){this.w.add(a,b,c)};
g.remove=function(a,b,c){this.w.remove(a,b,c);this.l.update()};
g.qc=function(a,b,c,d){this.w.contains(a)?this.w.qc(a,b,c,d):(a="Updating name of unknown screen: "+a.name,SH(this.F,a),d(Error(a)))};
g.ta=function(a){return a?this.j:bc(this.j,Pb(this.A,function(a){return!this.contains(a)},this))};
g.He=function(){return Pb(this.ta(!0),function(a){return!!this.l.j[a.id]},this)};
function QI(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.B[b]);var h=a.ta();if(h=(c?dI(h,c):null)||dI(h,b)){h.uuid=b;var k=RI(a,h);LI(a.l,k,function(a){e(a?k:null)})}else c?SI(a,c,u(function(a){var f=RI(this,new VH({name:d,
screenId:c,loungeToken:a,dialId:b||""}));LI(this.l,f,function(a){e(a?f:null)})},a),f):e(null)}
g.Ie=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new jI(this.C,a,b,c);f.subscribe("pairingComplete",u(function(a){Jk(f);d(RI(this,a))},this));
f.subscribe("pairingFailed",function(a){Jk(f);e(a)});
f.start();return u(f.stop,f)};
function TI(a,b){for(var c=0,d=a.j.length;c<d;++c)if(a.j[c].name==b)return a.j[c];return null}
g.Gh=function(a,b,c,d){cs(HH(this.C,"/pairing/get_screen"),{method:"POST",V:{pairing_code:a},timeout:5E3,R:u(function(a,d){var e=new VH(d.screen||{});if(!e.name||TI(this,e.name)){a:{var f=e.name;for(var l=2,n=b(f,l);TI(this,n);){l++;if(20<l)break a;n=b(f,l)}f=n}e.name=f}c(RI(this,e))},this),
onError:u(function(a){d(Error("pairing request failed: "+a.status))},this),
cb:u(function(){d(Error("pairing request timed out."))},this)})};
g.N=function(){Jk(this.w);Jk(this.l);OI.K.N.call(this)};
function SI(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={V:{screen_ids:b},method:"POST",context:a,R:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
cs(HH(a.C,"/pairing/get_lounge_token_batch"),e)}
function UI(a){a.j=a.w.ta();var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.j.length;b<d;++b){var e=a.j[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+aI(a.j))}
g.Wf=function(){UI(this);this.L("screenChange");this.l.update()};
function PI(a){VI(a);a.w=new DI(a.C);a.w.subscribe("screenChange",u(a.Wf,a));UI(a);a.A=ZH(Vs("yt-remote-automatic-screen-cache")||[]);VI(a);a.info("Initializing automatic screens: "+aI(a.A));a.l=new HI(a.C,u(a.ta,a,!0));a.l.subscribe("screenChange",u(function(){this.L("onlineScreenChange")},a))}
function RI(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=dI(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),Ss("yt-remote-automatic-screen-cache",Qb(a.A,XH)));VI(a);a.B[b.uuid]=b.id;Ss("yt-remote-device-id-map",a.B,31536E3);return b}
function VI(a){a.B=Vs("yt-remote-device-id-map")||{}}
OI.prototype.dispose=OI.prototype.dispose;function WI(a,b,c){eI.call(this);this.Z=c;this.O=a;this.j=b;this.w=null}
x(WI,eI);g=WI.prototype;g.ec=function(a){this.w=a;this.L("sessionScreen",this.w)};
g.ra=function(a){this.T()||(a&&XI(this,""+a),this.w=null,this.L("sessionScreen",null))};
g.info=function(a){SH(this.Z,a)};
function XI(a,b){SH(a.Z,b)}
g.Ke=function(){return null};
g.Uc=function(a){var b=this.j;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,u(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),u(function(){XI(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.N=function(){this.Uc("");WI.K.N.call(this)};function YI(a,b){WI.call(this,a,b,"CastSession");this.l=null;this.A=0;this.C=u(this.Hh,this);this.B=u(this.fh,this);this.A=M(u(function(){ZI(this,null)},this),12E4)}
x(YI,WI);g=YI.prototype;g.Tc=function(a){if(this.l){if(this.l==a)return;XI(this,"Overriding cast sesison with new session object");this.l.removeUpdateListener(this.C);this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.l=a;this.l.addUpdateListener(this.C);this.l.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);$I(this)};
g.kb=function(a){this.info("launchWithParams no-op for Cast: "+si(a))};
g.stop=function(){this.l?this.l.stop(u(function(){this.ra()},this),u(function(){this.ra(Error("Failed to stop receiver app."))},this)):this.ra(Error("Stopping cast device witout session."))};
g.Uc=ya;g.N=function(){this.info("disposeInternal");N(this.A);this.A=0;this.l&&(this.l.removeUpdateListener(this.C),this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.l=null;YI.K.N.call(this)};
function $I(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+si(void 0));var b={type:"getMdxSessionStatus"};a.l?a.l.sendMessage("urn:x-cast:com.google.youtube.mdx",b,ya,u(function(){XI(this,"Failed to send message: getMdxSessionStatus.")},a)):XI(a,"Sending yt message without session: "+si(b))}
g.fh=function(a,b){if(!this.T())if(b){var c=mp(b);if(c){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+si(c));switch(d){case "mdxSessionStatus":ZI(this,c.screenId);break;default:XI(this,"Unknown youtube message: "+d)}}else XI(this,"Unable to parse message.")}else XI(this,"No data in message.")};
function ZI(a,b){N(a.A);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.w||a.w.id!=b){var c=u(a.ec,a),d=u(a.ra,a);a.Bd(b,c,d,5)}}else a.ra(Error("Waiting for session status timed out."))}
g.Bd=function(a,b,c,d){QI(this.O,this.j.label,a,this.j.friendlyName,u(function(e){e?b(e):0<=d?(XI(this,"Screen "+a+" appears to be offline. "+d+" retries left."),M(u(this.Bd,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.Ke=function(){return this.l};
g.Hh=function(a){this.T()||a||(XI(this,"Cast session died."),this.ra())};function aJ(a,b,c){WI.call(this,a,b,"DialSession");this.A=this.M=null;this.U="";this.aa=c;this.B=null;this.F=ya;this.C=NaN;this.W=u(this.Kh,this);this.l=ya}
x(aJ,WI);g=aJ.prototype;g.Tc=function(a){this.A=a;this.A.addUpdateListener(this.W)};
g.kb=function(a){this.B=a;this.F()};
g.stop=function(){this.l();this.l=ya;N(this.C);this.A?this.A.stop(u(this.ra,this,null),u(this.ra,this,"Failed to stop DIAL device.")):this.ra()};
g.N=function(){this.l();this.l=ya;N(this.C);this.A&&this.A.removeUpdateListener(this.W);this.A=null;aJ.K.N.call(this)};
function bJ(a){a.l=a.O.Ie(a.U,a.j.label,a.j.friendlyName,u(function(a){this.l=ya;this.ec(a)},a),u(function(a){this.l=ya;
this.ra(a)},a))}
g.Kh=function(a){this.T()||a||(XI(this,"DIAL session died."),this.l(),this.l=ya,this.ra())};
function cJ(a){var b={};b.pairingCode=a.U;b.theme=a.aa;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}CI()&&(b.env_useStageMdx=1);return Sg(b)}
g.Mc=function(a){this.U=bI();if(this.B){var b=new chrome.cast.DialLaunchResponse(!0,cJ(this));a(b);bJ(this)}else this.F=u(function(){N(this.C);this.F=ya;this.C=NaN;var b=new chrome.cast.DialLaunchResponse(!0,cJ(this));a(b);bJ(this)},this),this.C=M(u(function(){this.F()},this),100)};
g.dg=function(a,b){QI(this.O,this.M.receiver.label,a,this.j.friendlyName,u(function(a){a&&a.token?(this.ec(a),b(new chrome.cast.DialLaunchResponse(!1))):this.Mc(b)},this),u(function(a){XI(this,"Failed to get DIAL screen: "+a);
this.Mc(b)},this))};function dJ(a,b){WI.call(this,a,b,"ManualSession");this.l=M(u(this.kb,this,null),150)}
x(dJ,WI);dJ.prototype.stop=function(){this.ra()};
dJ.prototype.Tc=ya;dJ.prototype.kb=function(){N(this.l);this.l=NaN;var a=dI(this.O.ta(),this.j.label);a?this.ec(a):this.ra(Error("No such screen"))};
dJ.prototype.N=function(){N(this.l);this.l=NaN;dJ.K.N.call(this)};function eJ(a,b,c,d){eI.call(this);this.l=a;this.F=b||"233637DE";this.C=c||"cl";this.M=d||!1;this.j=null;this.B=!1;this.w=[];this.A=u(this.Rg,this)}
x(eJ,eI);g=eJ.prototype;
g.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.F);this.M||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new chrome.cast.ApiConfig(c,u(this.fe,this),u(this.Sg,this),d,e);c.customDialLaunchCallback=u(this.Hg,this);chrome.cast.initialize(c,u(function(){this.T()||(chrome.cast.addReceiverActionListener(this.A),
OH(),this.l.subscribe("onlineScreenChange",u(this.Je,this)),this.w=fJ(this),chrome.cast.setCustomReceivers(this.w,ya,u(function(a){this.X("Failed to set initial custom receivers: "+si(a))},this)),this.L("yt-remote-cast2-availability-change",gJ(this)),b(!0))},this),u(function(a){this.X("Failed to initialize API: "+si(a));
b(!1)},this))};
g.rh=function(a,b){hJ("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.w;if(!a||c&&c.id!=a)hJ("Unsetting old screen status: "+this.j.j.friendlyName),iJ(this,null)}if(a&&b){if(!this.j){c=dI(this.l.ta(),a);if(!c){hJ("setConnectedScreenStatus: Unknown screen.");return}var d=jJ(this,c);d||(hJ("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.w.push(d),chrome.cast.setCustomReceivers(this.w,
ya,u(function(a){this.X("Failed to set initial custom receivers: "+si(a))},this)));
hJ("setConnectedScreenStatus: new active receiver: "+d.friendlyName);iJ(this,new dJ(this.l,d),!0)}this.j.Uc(b)}else hJ("setConnectedScreenStatus: no screen.")};
function jJ(a,b){return b?Ub(a.w,function(a){return WH(b,a.label)},a):null}
g.sh=function(a){this.T()?this.X("Setting connection data on disposed cast v2"):this.j?this.j.kb(a):this.X("Setting connection data without a session")};
g.Jh=function(){this.T()?this.X("Stopping session on disposed cast v2"):this.j?(this.j.stop(),iJ(this,null)):hJ("Stopping non-existing session")};
g.requestSession=function(){chrome.cast.requestSession(u(this.fe,this),u(this.Vg,this))};
g.N=function(){this.l.Od("onlineScreenChange",u(this.Je,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.A);Zb(t("yt.mdx.remote.debug.handlers_")||[],PH);Jk(this.j);eJ.K.N.call(this)};
function hJ(a){SH("Controller",a)}
g.X=function(a){SH("Controller",a)};
function PH(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function gJ(a){return a.B||!!a.w.length||!!a.j}
function iJ(a,b,c){b!=a.j&&(Jk(a.j),(a.j=b)?(c?a.L("yt-remote-cast2-receiver-resumed",b.j):a.L("yt-remote-cast2-receiver-selected",b.j),b.subscribe("sessionScreen",u(a.ge,a,b)),b.w?a.L("yt-remote-cast2-session-change",b.w):c&&a.j.kb(null)):a.L("yt-remote-cast2-session-change",null))}
g.ge=function(a,b){this.j==a&&(b||iJ(this,null),this.L("yt-remote-cast2-session-change",b))};
g.Rg=function(a,b){if(!this.T())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),hJ("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.j.label!=a.label)hJ("onReceiverAction_: Stopping active receiver: "+this.j.j.friendlyName),this.j.stop();else{hJ("onReceiverAction_: Casting to active receiver.");this.j.w&&this.L("yt-remote-cast2-session-change",this.j.w);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:iJ(this,
new dJ(this.l,a));break;case chrome.cast.ReceiverType.DIAL:iJ(this,new aJ(this.l,a,this.C));break;case chrome.cast.ReceiverType.CAST:iJ(this,new YI(this.l,a));break;default:this.X("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.j.label==a.label?this.j.stop():this.X("Stopping receiver w/o session: "+a.friendlyName)}else this.X("onReceiverAction_ called without receiver.")};
g.Hg=function(a){if(this.T())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.X("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.j:null;if(!c||c.label!=b.label)return this.X("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.w)return hJ("Reselecting dial screen."),
this.L("yt-remote-cast2-session-change",this.j.w),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.X('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);iJ(this,new aJ(this.l,b,this.C))}b=this.j;b.M=a;return b.M.appState==chrome.cast.DialAppState.RUNNING?new Promise(u(b.dg,b,(b.M.extraData||{}).screenId||null)):new Promise(u(b.Mc,b))};
g.fe=function(a){if(!this.T()){hJ("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(b.receiverType==chrome.cast.ReceiverType.CAST)hJ("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),iJ(this,new YI(this.l,b),!0);else{this.X("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.j.j,d=dI(this.l.ta(),c.label);d&&WH(d,b.label)&&c.receiverType!=
chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(hJ("onSessionEstablished_: manual to cast session change "+b.friendlyName),Jk(this.j),this.j=new YI(this.l,b),this.j.subscribe("sessionScreen",u(this.ge,this,this.j)),this.j.kb(null));this.j.Tc(a)}}};
g.Ih=function(){return this.j?this.j.Ke():null};
g.Vg=function(a){this.T()||(this.X("Failed to estabilish a session: "+si(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&iJ(this,null))};
g.Sg=function(a){hJ("Receiver availability updated: "+a);if(!this.T()){var b=gJ(this);this.B=a==chrome.cast.ReceiverAvailability.AVAILABLE;gJ(this)!=b&&this.L("yt-remote-cast2-availability-change",gJ(this))}};
function fJ(a){var b=a.l.He(),c=a.j&&a.j.j;a=Qb(b,function(a){c&&WH(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=jJ(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new chrome.cast.Receiver(b,a.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
g.Je=function(){this.T()||(this.w=fJ(this),hJ("Updating custom receivers: "+si(this.w)),chrome.cast.setCustomReceivers(this.w,ya,u(function(){this.X("Failed to set custom receivers.")},this)),this.L("yt-remote-cast2-availability-change",gJ(this)))};
eJ.prototype.setLaunchParams=eJ.prototype.sh;eJ.prototype.setConnectedScreenStatus=eJ.prototype.rh;eJ.prototype.stopSession=eJ.prototype.Jh;eJ.prototype.getCastSession=eJ.prototype.Ih;eJ.prototype.requestSession=eJ.prototype.requestSession;eJ.prototype.init=eJ.prototype.init;eJ.prototype.dispose=eJ.prototype.dispose;function kJ(a,b,c,d,e,f){lJ()?nJ(a,d,e,f)&&(oJ(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?pJ(b):(window.__onGCastApiAvailable=function(a,c){a?pJ(b):(qJ("Failed to load cast API: "+c),rJ(!1),oJ(!1),Ws("yt-remote-cast-available"),Ws("yt-remote-cast-receiver"),sJ(),b(!1))},c?Zw("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):db())):mJ("Cannot initialize because not running Chrome")}
function sJ(){mJ("dispose");var a=tJ();a&&a.dispose();r("yt.mdx.remote.cloudview.instance_",null,void 0);uJ(!1);pt(vJ);vJ.length=0}
function wJ(){mJ("clearCurrentReceiver");Ws("yt-remote-cast-receiver")}
function xJ(){return Vs("yt-remote-cast-installed")?tJ()?tJ().getCastSession():(qJ("getCastSelector: Cast is not initialized."),null):(qJ("getCastSelector: Cast API is not installed!"),null)}
function yJ(a,b){zJ()?tJ().setConnectedScreenStatus(a,b):qJ("setConnectedScreenStatus called before ready.")}
function lJ(){var a=0<=hd.search(/ (CrMo|Chrome|CriOS)\//);return Ig||a}
function nJ(a,b,c,d){var e=!1;tJ()||(a=new eJ(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){Ss("yt-remote-cast-available",a);qt("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){mJ("onReceiverSelected: "+a.friendlyName);
Ss("yt-remote-cast-receiver",a);qt("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){mJ("onReceiverResumed: "+a.friendlyName);
Ss("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){mJ("onSessionChange: "+$H(a));
a||Ws("yt-remote-cast-receiver");qt("yt-remote-cast2-session-change",a)}),r("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
mJ("cloudview.createSingleton_: "+e);return e}
function tJ(){return t("yt.mdx.remote.cloudview.instance_")}
function pJ(a){rJ(!0);oJ(!1);tJ().init(!1,function(b){b?(uJ(!0),R("yt-remote-cast2-api-ready")):(qJ("Failed to initialize cast API."),rJ(!1),Ws("yt-remote-cast-available"),Ws("yt-remote-cast-receiver"),sJ());a(b)})}
function mJ(a){SH("cloudview",a)}
function qJ(a){SH("cloudview",a)}
function rJ(a){mJ("setCastInstalled_ "+a);Ss("yt-remote-cast-installed",a)}
function zJ(){return!!t("yt.mdx.remote.cloudview.apiReady_")}
function uJ(a){mJ("setApiReady_ "+a);r("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function oJ(a){r("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var vJ=[];function AJ(a,b){this.action=a;this.params=b||{}}
;function BJ(a,b){Hk.call(this);this.l=new Eo(this.A,0,this);Ik(this,La(Jk,this.l));this.w=this.j=0;if(Da(a))b&&(a=u(a,b));else if(a&&Da(a.handleEvent))a=u(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a;CJ(this)}
x(BJ,Hk);BJ.prototype.A=function(){500<this.j&&24E4>2*this.j&&(this.j*=2);this.B();this.w&&this.start()};
BJ.prototype.start=function(){var a=this.l,b=this.j;a.isActive()||a.start(b);this.w=v()+this.j};
BJ.prototype.stop=function(){this.l.stop();this.w=0};
BJ.prototype.isActive=function(){return this.l.isActive()};
function CJ(a){a.l.stop();a.j=5E3+2E4*Math.random()}
;function DJ(a,b,c){this.M=a;this.C=b;this.w=new er;this.l=new BJ(this.Bh,this);this.j=null;this.F=!1;this.B=null;this.H="";this.J=this.A=0;this.G=[];this.O=c||!1}
x(DJ,Yq);g=DJ.prototype;g.subscribe=function(a,b,c){return this.w.subscribe(a,b,c)};
g.Od=function(a,b,c){return gr(this.w,a,b,c)};
g.wa=function(a){return this.w.wa(a)};
g.L=function(a,b){return this.w.ma.apply(this.w,arguments)};
g.dispose=function(){this.F||(this.F=!0,Jk(this.w),EJ(this),Jk(this.l),this.l=null)};
g.T=function(){return this.F};
function FJ(a){return{firstTestResults:[""],secondTestResults:!a.j.sc,sessionId:a.j.w,arrayId:a.j.jb}}
g.connect=function(a,b,c){if(!this.j||2!=this.j.j){this.H="";this.l.stop();this.B=a||null;this.A=b||0;a=this.M+"/test";b=this.M+"/bind";var d=new Dq("1",c?c.firstTestResults:null,c?c.secondTestResults:null,this.O),e=this.j;e&&(e.ha=null);d.ha=this;this.j=d;e?this.j.connect(a,b,this.C,e.w,e.jb):c?this.j.connect(a,b,this.C,c.sessionId,c.arrayId):this.j.connect(a,b,this.C)}};
function EJ(a,b){a.J=b||0;a.l.stop();a.j&&(3==a.j.j&&Rq(a.j),Kq(a.j));a.J=0}
g.sendMessage=function(a,b){var c={_sc:a};b&&Cc(c,b);this.l.isActive()||2==(this.j?this.j.j:0)?this.G.push(c):GJ(this)&&Qq(this.j,c)};
g.qd=function(){CJ(this.l);this.B=null;this.A=0;if(this.G.length){var a=this.G;this.G=[];for(var b=0,c=a.length;b<c;++b)Qq(this.j,a[b])}this.L("handlerOpened")};
g.od=function(a,b){var c=2==b&&401==this.j.Aa;if(4!=b&&!c){if(6==b||410==this.j.Aa)c=this.l,c.l.stop(),c.j=500;this.l.start()}this.L("handlerError",b)};
g.Ac=function(a,b,c){if(!this.l.isActive())this.L("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].j;d&&this.G.push(d)}};
g.Ad=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.J&&(a.ui=""+this.J);this.B&&Cc(a,this.B);return a};
g.pd=function(a,b){"S"==b[0]?this.H=b[1]:"gracefulReconnect"==b[0]?(CJ(this.l),this.l.start(),Kq(this.j)):this.L("handlerMessage",new AJ(b[0],b[1]))};
function GJ(a){return!!a.j&&3==a.j.j}
function HJ(a,b){(a.C.loungeIdToken=b)||a.l.stop()}
g.Bh=function(){this.l.isActive();var a=this.j,b=0;a.ba&&b++;a.la&&b++;0!=b?this.l.start():this.connect(this.B,this.A)};function IJ(a){this.index=-1;this.videoId=this.listId="";this.volume=this.j=-1;this.muted=!1;this.audioTrackId=null;this.A=this.w=0;this.l=null;this.hasNext=this.C=!1;this.J=this.B=this.H=this.F=0;this.G=NaN;this.reset(a)}
function JJ(a){a.audioTrackId=null;a.l=null;a.j=-1;a.C=!1;a.hasNext=!1;a.w=0;a.A=v();a.F=0;a.H=0;a.B=0;a.J=0;a.G=NaN}
IJ.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";JJ(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.j=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.l=a.trackData,this.C=a.hasPrevious,this.hasNext=a.hasNext,this.w=a.playerTime,this.A=a.playerTimeAt,this.F=a.seekableStart,this.H=a.seekableEnd,this.B=a.duration,this.J=a.loadedTime,this.G=a.liveIngestionTime)};
function KJ(a,b){a.w=b;a.A=v()}
function LJ(a){switch(a.j){case 1:case 1081:return(v()-a.A)/1E3+a.w;case -1E3:return 0}return a.w}
function MJ(a){var b={};b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.j;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=Ac(a.l);b.hasPrevious=a.C;b.hasNext=a.hasNext;b.playerTime=a.w;b.playerTimeAt=a.A;b.seekableStart=a.F;b.seekableEnd=a.H;b.duration=a.B;b.loadedTime=a.J;b.liveIngestionTime=a.G;return b}
IJ.prototype.clone=function(){return new IJ(MJ(this))};function NJ(a,b){eI.call(this);this.j=0;this.A=a;this.C=[];this.B=new xr;this.l=this.w=null;this.O=u(this.ug,this);this.F=u(this.Gb,this);this.M=u(this.tg,this);this.U=u(this.Gg,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Wc,this),OJ(this))):c=3;0!=c&&(b?this.Wc(c):M(u(function(){this.Wc(c)},this),0));
var d=xJ();d&&PJ(this,d);this.subscribe("yt-remote-cast2-session-change",this.U)}
x(NJ,eI);function QJ(a){return new IJ(a.A.getPlayerContextData())}
g=NJ.prototype;g.play=function(){1==this.j?(this.w?this.w.play(null,ya,RJ(this,"play")):SJ(this,"play"),TJ(this,1,LJ(QJ(this))),this.L("remotePlayerChange")):UJ(this,this.play)};
g.pause=function(){1==this.j?(this.w?this.w.pause(null,ya,RJ(this,"pause")):SJ(this,"pause"),TJ(this,2,LJ(QJ(this))),this.L("remotePlayerChange")):UJ(this,this.pause)};
g.stop=function(){if(1==this.j){this.w?this.w.stop(null,ya,RJ(this,"stopVideo")):SJ(this,"stopVideo");var a=QJ(this);a.index=-1;a.videoId="";JJ(a);VJ(this,a);this.L("remotePlayerChange")}else UJ(this,this.stop)};
g.setVolume=function(a,b){if(1==this.j){var c=QJ(this);if(this.l){if(c.volume!=a){var d=Math.round(a)/100;this.l.setReceiverVolumeLevel(d,u(function(){WJ("set receiver volume: "+d)},this),u(function(){this.X("failed to set receiver volume.")},this))}c.muted!=b&&this.l.setReceiverMuted(b,u(function(){WJ("set receiver muted: "+b)},this),u(function(){this.X("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);SJ(this,"setVolume",e)}c.muted=b;c.volume=a;VJ(this,c)}else UJ(this,La(this.setVolume,a,b))};
g.hd=function(a){1==this.j?SJ(this,"addVideo",{videoId:a}):UJ(this,La(this.hd,a))};
g.gd=function(a){1==this.j?SJ(this,"addVideos",{listId:a}):UJ(this,La(this.gd,a))};
g.jd=function(a){0==a.length?this.X("Ignore add videos request due to empty list"):1==this.j?SJ(this,"addVideos",{videoIds:a.join(",")}):UJ(this,La(this.jd,a))};
g.re=function(a){1==this.j?SJ(this,"removeVideo",{videoId:a}):UJ(this,La(this.re,a))};
g.dispose=function(){if(3!=this.j){var a=this.j;this.j=3;this.L("proxyStateChange",a,this.j)}NJ.K.dispose.call(this)};
g.N=function(){XJ(this);this.A=null;this.B.clear();PJ(this,null);NJ.K.N.call(this)};
function OJ(a){y("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.C.push(this.A.subscribe(a,La(this.Pg,a),this))},a)}
function XJ(a){y(a.C,function(a){this.A.unsubscribeByKey(a)},a);
a.C.length=0}
function UJ(a,b){var c=a.B;50>c.j.length+c.l.length&&a.B.l.push(b)}
function TJ(a,b,c){var d=QJ(a);KJ(d,c);-1E3!=d.j&&(d.j=b);VJ(a,d)}
function SJ(a,b,c){a.A.sendMessage(b,c)}
function VJ(a,b){XJ(a);a.A.setPlayerContextData(MJ(b));OJ(a)}
g.Wc=function(a){if((a!=this.j||2==a)&&3!=this.j&&0!=a){var b=this.j;this.j=a;this.L("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,0==b.j.length&&(b.j=b.l,b.j.reverse(),b.l=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
g.Pg=function(a,b){this.L(a,b)};
function PJ(a,b){a.l&&(a.l.removeUpdateListener(a.O),a.l.removeMediaListener(a.F),a.Gb(null));a.l=b;a.l&&(WJ("Setting cast session: "+a.l.sessionId),a.l.addUpdateListener(a.O),a.l.addMediaListener(a.F),a.l.media.length&&a.Gb(a.l.media[0]))}
g.ug=function(a){if(!a)this.Gb(null),PJ(this,null);else if(this.l.receiver.volume){a=this.l.receiver.volume;var b=QJ(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)WJ("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,VJ(this,b)}};
g.Gb=function(a){WJ("Cast media: "+!!a);this.w&&this.w.removeUpdateListener(this.M);if(this.w=a)this.w.addUpdateListener(this.M),YJ(this),this.L("remotePlayerChange")};
function YJ(a){var b=a.w.media,c=a.w.customData;if(b&&c){var d=QJ(a);b.contentId!=d.videoId&&WJ("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.j=c.playerState;KJ(d,a.w.getEstimatedTime());VJ(a,d)}else WJ("No cast media video. Ignoring state update.")}
g.tg=function(a){a?(YJ(this),this.L("remotePlayerChange")):this.Gb(null)};
g.Gg=function(){var a=xJ();a&&PJ(this,a)};
function WJ(a){SH("CP",a)}
g.X=function(a){SH("CP",a)};
function RJ(a,b){return u(function(a){this.X("Failed to "+b+" with cast v2 channel. Error code: "+a.code);a.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.X("Retrying "+b+" using MDx browser channel."),SJ(this,b,void 0))},a)}
;function Z(a,b,c){eI.call(this);this.B=NaN;this.da=!1;this.U=this.O=this.Z=this.aa=NaN;this.W=[];this.A=this.F=this.w=this.P=this.j=null;this.pf=a;this.W.push(O(window,"beforeunload",u(this.Jf,this)));this.l=[];this.P=new IJ;this.ia=b.id;this.j=ZJ(this,c);this.j.subscribe("handlerOpened",this.zg,this);this.j.subscribe("handlerClosed",this.wg,this);this.j.subscribe("handlerError",this.xg,this);this.j.subscribe("handlerMessage",this.yg,this);HJ(this.j,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.P.videoId;sI()&&Ss("yt-remote-session-video-id",a)},this)}
x(Z,eI);g=Z.prototype;
g.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,h=b.index,k={videoId:d},l=b.currentTime;p(l)&&(k.currentTime=5>=l?0:l);e&&(k.playerParams=e);f&&(k.clickTrackingParams=f);c&&(k.listId=c);p(h)&&(k.currentIndex=h);c&&(this.P.listId=c);this.P.videoId=d;this.P.index=h||0;this.P.state=3;KJ(this.P,l);this.A="UNSUPPORTED";$J("Connecting with setPlaylist and params: "+si(k));this.j.connect({method:"setPlaylist",params:si(k)},a,wI())}else $J("Connecting without params"),this.j.connect({},
a,wI());aK(this)};
g.dispose=function(){this.T()||(this.L("beforeDispose"),bK(this,3));Z.K.dispose.call(this)};
g.N=function(){cK(this);dK(this);eK(this);N(this.O);this.O=NaN;N(this.U);this.U=NaN;this.w=null;P(this.W);this.W.length=0;this.j.dispose();Z.K.N.call(this);this.A=this.F=this.l=this.P=this.j=null};
function $J(a){SH("conn",a)}
g.Jf=function(){this.C(2)};
function ZJ(a,b){return new DJ(HH(a.pf,"/bc"),b)}
function bK(a,b){a.L("proxyStateChange",b)}
function aK(a){a.B=M(u(function(){$J("Connecting timeout");this.C(1)},a),2E4)}
function cK(a){N(a.B);a.B=NaN}
function eK(a){N(a.aa);a.aa=NaN}
function fK(a){dK(a);a.Z=M(u(function(){gK(this,"getNowPlaying")},a),2E4)}
function dK(a){N(a.Z);a.Z=NaN}
g.zg=function(){$J("Channel opened");this.da&&(this.da=!1,eK(this),this.aa=M(u(function(){$J("Timing out waiting for a screen.");this.C(1)},this),15E3));
AI(FJ(this.j),this.ia)};
g.wg=function(){$J("Channel closed");isNaN(this.B)?BI(!0):BI();this.dispose()};
g.xg=function(a){BI();isNaN(this.M())?($J("Channel error: "+a+" without reconnection"),this.dispose()):(this.da=!0,$J("Channel error: "+a+" with reconnection in "+this.M()+" ms"),bK(this,2))};
function hK(a,b){b&&(cK(a),eK(a));b==(GJ(a.j)&&isNaN(a.B))?b&&(bK(a,1),gK(a,"getSubtitlesTrack")):b?(a.ga()&&a.P.reset(),bK(a,1),gK(a,"getNowPlaying"),iK(a)):a.C(1)}
function jK(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.P.videoId&&(wc(b.params)?a.P.l=null:a.P.l=b.params,a.L("remotePlayerChange"))}
function kK(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.P.listId=b.params.listId||a.P.listId;var e=a.P,f=e.videoId;e.videoId=c;e.index=d;c!=f&&JJ(e);a.L("remoteQueueChange")}
function lK(a,b){b.params=b.params||{};kK(a,b);mK(a,b);a.L("autoplayDismissed")}
function mK(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);KJ(a.P,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.P.j&&(c=-1E3);a.P.j=c;c=Number(b.params.loadedTime);a.P.J=isNaN(c)?0:c;c=Number(b.params.duration);a.P.B=isNaN(c)?0:c;a.P.G=Number(b.params.liveIngestionTime);c=a.P;var d=Number(b.params.seekableStartTime),e=Number(b.params.seekableEndTime);c.F=isNaN(d)?0:d;c.H=isNaN(e)?0:e;1==a.P.j?fK(a):dK(a);a.L("remotePlayerChange")}
function nK(a,b){if(-1E3!=a.P.j){var c=1085;switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.P.j=c;c=parseInt(b.params.currentTime,10);KJ(a.P,isNaN(c)?0:c);a.L("remotePlayerChange")}}
function oK(a,b){var c="true"==b.params.muted;a.P.volume=parseInt(b.params.volume,10);a.P.muted=c;a.L("remotePlayerChange")}
function pK(a,b){a.F=b.params.videoId;a.L("nowAutoplaying",parseInt(b.params.timeout,10))}
function qK(a,b){var c="true"==b.params.hasNext;a.P.C="true"==b.params.hasPrevious;a.P.hasNext=c;a.L("previousNextChange")}
g.yg=function(a){a.params?$J("Received: action="+a.action+", params="+si(a.params)):$J("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=mp(a.params.devices);this.l=Qb(a,function(a){return new lI(a)});
a=!!Ub(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
hK(this,a);break;case "loungeScreenDisconnected":ac(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
hK(this,!1);break;case "remoteConnected":var b=new lI(mp(a.params.device));Ub(this.l,function(a){return a.equals(b)})||Yb(this.l,b);
break;case "remoteDisconnected":b=new lI(mp(a.params.device));ac(this.l,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":kK(this,a);break;case "nowPlaying":lK(this,a);break;case "onStateChange":mK(this,a);break;case "onAdStateChange":nK(this,a);break;case "onVolumeChanged":oK(this,a);break;case "onSubtitlesTrackChanged":jK(this,a);break;case "nowAutoplaying":pK(this,a);break;case "autoplayDismissed":this.L("autoplayDismissed");break;case "autoplayUpNext":this.F=a.params.videoId||null;this.L("autoplayUpNext",this.F);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.L("autoplayModeChange",this.A);"DISABLED"==this.A&&this.L("autoplayDismissed");break;case "onHasPreviousNextChanged":qK(this,a);break;case "requestAssistedSignIn":this.L("assistedSignInRequested",a.params.authCode);break;default:$J("Unrecognized action: "+a.action)}};
g.oh=function(){if(this.w){var a=this.w;this.w=null;this.P.videoId!=a&&gK(this,"getNowPlaying")}};
Z.prototype.subscribe=Z.prototype.subscribe;Z.prototype.unsubscribeByKey=Z.prototype.wa;Z.prototype.Lb=function(){var a=3;this.T()||(a=0,isNaN(this.M())?GJ(this.j)&&isNaN(this.B)&&(a=1):a=2);return a};
Z.prototype.getProxyState=Z.prototype.Lb;Z.prototype.C=function(a){$J("Disconnecting with "+a);cK(this);this.L("beforeDisconnect",a);1==a&&BI();EJ(this.j,a);this.dispose()};
Z.prototype.disconnect=Z.prototype.C;Z.prototype.vb=function(){var a=this.P;if(this.w){var b=a=this.P.clone(),c=this.w,d=a.index,e=b.videoId;b.videoId=c;b.index=d;c!=e&&JJ(b)}return MJ(a)};
Z.prototype.getPlayerContextData=Z.prototype.vb;Z.prototype.yc=function(a){var b=new IJ(a);b.videoId&&b.videoId!=this.P.videoId&&(this.w=b.videoId,N(this.O),this.O=M(u(this.oh,this),5E3));var c=[];this.P.listId==b.listId&&this.P.videoId==b.videoId&&this.P.index==b.index||c.push("remoteQueueChange");this.P.j==b.j&&this.P.volume==b.volume&&this.P.muted==b.muted&&LJ(this.P)==LJ(b)&&si(this.P.l)==si(b.l)||c.push("remotePlayerChange");this.P.reset(a);y(c,function(a){this.L(a)},this)};
Z.prototype.setPlayerContextData=Z.prototype.yc;Z.prototype.ga=function(){var a=this.j.C.id,b=Ub(this.l,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Z.prototype.getOtherConnectedRemoteId=Z.prototype.ga;Z.prototype.M=function(){var a=this.j;return a.l.isActive()?a.l.w-v():NaN};
Z.prototype.getReconnectTimeout=Z.prototype.M;Z.prototype.Ha=function(){return this.A||"UNSUPPORTED"};
Z.prototype.getAutoplayMode=Z.prototype.Ha;Z.prototype.Ta=function(){return this.F||""};
Z.prototype.getAutoplayVideoId=Z.prototype.Ta;Z.prototype.tf=function(){if(!isNaN(this.M())){var a=this.j.l,b=a.l;b.stop();b.Cd();a.start()}};
Z.prototype.reconnect=Z.prototype.tf;function iK(a){N(a.U);a.U=M(u(a.C,a,1),864E5)}
function gK(a,b,c){c?$J("Sending: action="+b+", params="+si(c)):$J("Sending: action="+b);a.j.sendMessage(b,c)}
Z.prototype.xc=function(a,b){gK(this,a,b);iK(this)};
Z.prototype.sendMessage=Z.prototype.xc;function rK(a){fI.call(this,"ScreenServiceProxy");this.ka=a;this.l=[];this.l.push(this.ka.$_s("screenChange",u(this.Fh,this)));this.l.push(this.ka.$_s("onlineScreenChange",u(this.Lg,this)))}
x(rK,fI);g=rK.prototype;g.ta=function(a){return this.ka.$_gs(a)};
g.contains=function(a){return!!this.ka.$_c(a)};
g.get=function(a){return this.ka.$_g(a)};
g.start=function(){this.ka.$_st()};
g.add=function(a,b,c){this.ka.$_a(a,b,c)};
g.remove=function(a,b,c){this.ka.$_r(a,b,c)};
g.qc=function(a,b,c,d){this.ka.$_un(a,b,c,d)};
g.N=function(){for(var a=0,b=this.l.length;a<b;++a)this.ka.$_ubk(this.l[a]);this.l.length=0;this.ka=null;rK.K.N.call(this)};
g.Fh=function(){this.L("screenChange")};
g.Lg=function(){this.L("onlineScreenChange")};
OI.prototype.$_st=OI.prototype.start;OI.prototype.$_gspc=OI.prototype.Gh;OI.prototype.$_gsppc=OI.prototype.Ie;OI.prototype.$_c=OI.prototype.contains;OI.prototype.$_g=OI.prototype.get;OI.prototype.$_a=OI.prototype.add;OI.prototype.$_un=OI.prototype.qc;OI.prototype.$_r=OI.prototype.remove;OI.prototype.$_gs=OI.prototype.ta;OI.prototype.$_gos=OI.prototype.He;OI.prototype.$_s=OI.prototype.subscribe;OI.prototype.$_ubk=OI.prototype.wa;function sK(){var a=L("MDX_CONFIG")||a;Xs();pI();tK||(tK=new GH(a?a.loungeApiHost:void 0),CI()&&(tK.j="/api/loungedev"));uK||(uK=t("yt.mdx.remote.deferredProxies_")||[],r("yt.mdx.remote.deferredProxies_",uK,void 0));vK();var b=wK();if(!b){var c=new OI(tK);r("yt.mdx.remote.screenService_",c,void 0);b=wK();var d=!1,e=void 0,f=void 0,h=!1;a&&(d=!!a.loadCastApiSetupScript,e=a.appId,f=a.theme,h=!!a.disableDial);kJ(c,function(a){a?xK()&&yJ(xK(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){qt("yt-remote-receiver-availability-change")})},
d,e,f,h)}a&&!t("yt.mdx.remote.initialized_")&&(r("yt.mdx.remote.initialized_",!0,void 0),yK("Initializing: "+si(a)),zK.push(Q("yt-remote-cast2-availability-change",function(){qt("yt-remote-receiver-availability-change")})),zK.push(Q("yt-remote-cast2-receiver-selected",function(){AK();
qt("yt-remote-auto-connect","cast-selector-receiver")})),zK.push(Q("yt-remote-cast2-receiver-resumed",function(){qt("yt-remote-receiver-resumed","cast-selector-receiver")})),zK.push(Q("yt-remote-cast2-session-change",BK)),zK.push(Q("yt-remote-connection-change",function(a){a?yJ(xK(),"YouTube TV"):CK()||(yJ(null,null),wJ())})),d=DK(),a.isAuto&&(d.id+="#dial"),Ks("desktop_enable_autoplay")&&(d.capabilities=["atp"]),d.name=a.device,d.app=a.app,(f=a.theme)&&(d.theme=f),yK(" -- with channel params: "+
si(d)),EK(d),b.start(),xK()||FK())}
function GK(){pt(zK);zK.length=0;Jk(HK);HK=null;uK&&(y(uK,function(a){a(null)}),uK.length=0,uK=null,r("yt.mdx.remote.deferredProxies_",null,void 0));
tK=null}
function IK(){var a=xK();if(!a)return null;var b=wK().ta();return dI(b,a)}
function BK(a){yK("remote.onCastSessionChange_: "+$H(a));if(a){var b=IK();b&&b.id==a.id?yJ(b.id,"YouTube TV"):(b&&JK(),KK(a,1))}else LK()&&JK()}
function JK(){zJ()?tJ().stopSession():qJ("stopSession called before API ready.");var a=LK();a&&(a.disconnect(1),MK(null))}
function NK(){var a=LK();return a&&3!=a.getProxyState()?new NJ(LK(),void 0):null}
function yK(a){SH("remote",a)}
function wK(){if(!HK){var a=t("yt.mdx.remote.screenService_");HK=a?new rK(a):null}return HK}
function xK(){return t("yt.mdx.remote.currentScreenId_")}
function OK(a){r("yt.mdx.remote.currentScreenId_",a,void 0)}
function AK(){r("yt.mdx.remote.connectData_",null,void 0)}
function LK(){return t("yt.mdx.remote.connection_")}
function MK(a){var b=LK();AK();a||OK("");r("yt.mdx.remote.connection_",a,void 0);uK&&(y(uK,function(b){b(a)}),uK.length=0);
b&&!a?qt("yt-remote-connection-change",!1):!b&&a&&qt("yt-remote-connection-change",!0)}
function CK(){var a=sI();if(!a)return null;var b=wK().ta();return dI(b,a)}
function KK(a,b){IK()&&IK();OK(a.id);var c=new Z(tK,a,DK());c.connect(b,t("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(a){qt("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){LK()&&MK(null)});
MK(c)}
function FK(){var a=CK();a?(yK("Resume connection to: "+$H(a)),KK(a,0)):(BI(),wJ(),yK("Skipping connecting because no session screen found."))}
var tK=null,uK=null,HK=null;function vK(){var a=DK();if(wc(a)){a=rI();var b=Vs("yt-remote-session-name")||"",c=Vs("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};r("yt.mdx.remote.channelParams_",a,void 0)}}
function DK(){return t("yt.mdx.remote.channelParams_")||{}}
function EK(a){a?(Ss("yt-remote-session-app",a.app),Ss("yt-remote-session-name",a.name)):(Ws("yt-remote-session-app"),Ws("yt-remote-session-name"));r("yt.mdx.remote.channelParams_",a,void 0)}
var zK=[];var PK;function QK(a,b){this.type=a;this.videoIds=b||[]}
function RK(a,b){cs("/watch_queue_ajax",{method:"POST",xa:{action_check_playability:1},V:{video_ids:a.join(",")},R:function(a,d){d&&Ba(d)?b(d):b([])},
onError:function(){b([])}})}
function SK(a,b,c){RK(q(a)?[a]:a,function(d){0==d.length?c&&c():q(a)?TK(a,b,c):TK(d,b,c)})}
function TK(a,b,c){var d="";q(a)&&(d=a,a=[d]);var e=new QK(0,a);PK?UK(function(){d?PK.hd(d):PK.jd(a)},e,b,c):VK(e,{action_add_to_watch_queue:1},a,b,c)}
function WK(a,b,c){q(a)&&(a=[a]);var d=new QK(1,a);PK?UK(function(){y(a,function(a){PK.re(a)})},d,b,c):VK(d,{action_remove_from_watch_queue:1},a,b,c)}
function XK(a,b,c){var d=new QK(2);PK?UK(function(){PK.gd(a)},d,b,c):c&&M(function(){c("Not implemented")},0)}
function YK(a,b){var c=new QK(2);PK?UK(function(){},c,a,b):b&&M(function(){b("Not implemented")},0)}
function ZK(a){PK=a;PK.subscribe("remoteQueueChange",function(){R("queue-change",new QK(2))})}
function $K(){var a=NK();Jk(PK);PK=null;a?ZK(a):R("queue-change",new QK(2))}
function UK(a,b,c,d){PK&&1==PK.j?(a.call(m),c&&M(function(){c()},0),p(b)&&R("queue-change",b)):d&&M(function(){d()},0)}
function VK(a,b,c,d,e){cs("/watch_queue_ajax",{method:"POST",xa:b,V:{list:"WQ",video_ids:c.join(",")},R:function(){d&&d();R("queue-change",a)},
onError:function(){e&&e()}})}
var aL=[];function bL(a,b){var c=L("RESUME_COOKIE_NAME",void 0);if(c){var d=bt(c,"").split(",");d=Pb(d,function(b){return 0!=b.indexOf(a)&&!!b.length});
4<=d.length&&d.shift();d.push(a+":"+b);at(c,d.join(","),1814400,"/")}}
function cL(a){var b=L("RESUME_COOKIE_NAME",void 0);if(b){var c=bt(b,"").split(",");c=Pb(c,function(b){return 0!=b.indexOf(a)});
0==c.length?ct(b):at(b,c.join(","),1814400,"/")}}
;function dL(){sK();aL.push(Q("yt-remote-connection-change",$K));var a=NK();a&&ZK(a);Jy("addto-watch-queue-button","click",eL);Jy("addto-tv-queue-button","click",eL);Jy("addto-watch-queue-button-success","click",fL);Jy("addto-watch-queue-menu-choice","click",gL);hL.push(Q("watch-queue-update",iL));iL()}
function jL(a){return"tv-queue"==T(a,"style")?"addto-tv-queue-button":"addto-watch-queue-button"}
function eL(a){var b=jL(a);So(a,b,"addto-watch-queue-button-loading");var c=T(a,"video-ids"),d=T(a,"list-id"),e=mB(kB.getInstance(),a);d?XK(d,function(){kL(a)},function(c){lL(a,b,e,c)}):SK(c,function(){kL(a)},function(c){lL(a,b,e,c)})}
function gL(a){var b=T(a,"action");mL(a,nL[b])}
function fL(a){So(a,"addto-watch-queue-button-success","addto-watch-queue-button-loading");var b=T(a,"video-ids"),c=T(a,"list-id"),d=mB(kB.getInstance(),a);c?YK(function(){oL(a)},function(b){lL(a,"addto-watch-queue-button-success",d,b)}):WK(b,function(){oL(a)},function(b){lL(a,"addto-watch-queue-button-success",d,b)})}
function kL(a){So(a,"addto-watch-queue-button-loading","addto-watch-queue-button-success");var b=wy("ADDTO_WATCH_QUEUE_ADDED");pB(kB.getInstance(),a,b);T(a,"list-id")?R("watch-queue-addto-playlist-added"):R("watch-queue-addto-video-added")}
function oL(a){var b=jL(a);So(a,"addto-watch-queue-button-loading",b);b="addto-watch-queue-button"==b?wy("ADDTO_WATCH_QUEUE"):wy("ADDTO_TV_QUEUE");pB(kB.getInstance(),a,b);T(a,"list-id")?R("watch-queue-addto-playlist-removed"):R("watch-queue-addto-video-removed")}
function lL(a,b,c,d){So(a,"addto-watch-queue-button-loading","addto-watch-queue-button-error");d=d||wy("ADDTO_WATCH_QUEUE_ERROR");pB(kB.getInstance(),a,d);M(function(){So(a,"addto-watch-queue-button-error",b);pB(kB.getInstance(),a,c)},5E3)}
function mL(a,b){var c=T(a,"video-ids");c&&(q(c)&&(c=[c]),RK(c,function(d){d.length==c.length&&b(a)}))}
function iL(){var a=FH();if(!gc(pL,a)){pL=a;var b={};y(pL,function(a){b[a]=!0});
y(Me("addto-queue-button"),function(a){var c=T(a,"video-ids");if(c&&q(c)){var e=jL(a);b[c]?(So(a,e,"addto-watch-queue-button-success"),c=wy("ADDTO_WATCH_QUEUE_ADDED")):(So(a,"addto-watch-queue-button-success",e),c="addto-watch-queue-button"==e?wy("ADDTO_WATCH_QUEUE"):wy("ADDTO_TV_QUEUE"));pB(kB.getInstance(),a,c)}})}}
var nL={"play-next":function(a){var b=T(a,"list-id");a=T(a,"video-ids");b?R("watch-queue-addto-playlist-play-next",b,a):R("watch-queue-addto-video-play-next",a)},
"play-now":function(a){var b=T(a,"list-id");a=T(a,"video-ids");b?R("watch-queue-addto-playlist-play-now",b,a):R("watch-queue-addto-video-play-now",a)}},hL=[],pL=[];var qL=[];var rL=[],sL=!1;function tL(a){var b=L("YPC_LOADER_CSS",void 0),c=L("YPC_LOADER_JS",void 0);sL&&(c="www/ypc_core");rL.length||(rL.push(new wj(function(a){Ix(b,a)})),rL.push(new wj(function(a){Zw(c,a)})));
Wj(rL).then(function(){a&&a()})}
;function uL(a,b,c,d,e){if(NG())tL(function(){t("yt.www.ypc.checkout.showYpcOverlay")(a,b,c,d,e)});
else{var f={ypc_it:a,ypc_ii:b,ypc_ft:c};d&&(f.ypc_irp=d);e&&(f.ypc_cc=e);f=vL(f);Dx(f)}}
function wL(a){if(NG())tL(function(){t("yt.www.ypc.checkout.showPrepurchaseOverlay")(a)});
else{var b=vL({});Dx(b)}}
function xL(a,b){if(NG())tL(function(){t("yt.www.ypc.checkout.showYpcOverlayForInnertubeRequestParams")(a,b)});
else{var c=vL({ypc_ft:a,ypc_irp:b});Dx(c)}}
function yL(a,b,c){NG()?tL(function(){t("yt.www.ypc.checkout.offerpurchaser.purchaseOffer")(a,c)}):(b=vL(b),Dx(b))}
function zL(a,b){if(NG())tL(function(){t("yt.www.ypc.subscription.openUnsubscribeOverlay")(a,b)});
else throw Error("Unsubscribe triggered when user not signed in.");}
function vL(a){a=Ur(window.location.href,a);var b=L("YPC_SIGNIN_URL",void 0),c=Tr(b)["continue"];c=Ur(c,{next:a});return Ur(b,{"continue":c})}
;function AL(a,b,c,d,e,f,h,k,l,n,w){a={config:{couponCode:e,fromPurchaseIds:f,flowType:d},itemData:{itemId:c,itemType:b},offerData:{offerId:a}};if(h||k)b={},h&&(b.jwt=h),k&&(b.encryptedPurchaseParams=k),a.walletPrefetchdata=b;l&&(a.innertubeRequestParams=l);n&&(a.transactionAction=n);w&&(a.transactionParams=w);return a}
function BL(a,b){if(!a)return null;var c=T(a,"ypc-item-type"),d=T(a,"ypc-item-id"),e=T(a,"ypc-offer-id"),f=T(a,"coupon-code"),h=T(a,"ypc-from-purchase-ids"),k=T(a,"ypc-offer-jwt"),l=T(a,"ypc-offer-encrypted-purchase-params"),n=T(a,"ypc-irp"),w=T(a,"ypc-transaction-action"),F=T(a,"ypc-transaction-params");return AL(e,c,d,b,f,h,k,l,n,w,F)}
function CL(a){var b=a.itemData.itemId,c=a.config.flowType,d=a.offerData?a.offerData.offerId:null,e=a.innertubeRequestParams,f=a.transactionAction,h={};h.ypc_it=a.itemData.itemType;h.ypc_ii=b;h.ypc_ft=c;e&&(h.ypc_irp=e);d&&(h.ypc_oi=d);f&&(h.ypc_ta=f);return h}
;var DL=[],EL=[];function FL(a){if(a=a.currentTarget)GL(a),(a=T(a,"ytr-prepurchase-html"))&&wL(zb(a))}
function HL(a){var b=a.currentTarget;b&&(GL(b),a=T(b,"ypc-transaction-action"),(b=BL(b,"D"))?((a="start_payment"==a)&&IL("inline-offer-button-click",b.itemData),yL(b,CL(b),a),setTimeout(Dt,0)):Nr(Error("ypc-offer-button does not contain purchaseFlowData.")))}
function JL(a){(a=a.currentTarget)&&KL(a)}
function LL(a){tL(a.zc)}
function ML(a){IL("container-button-click-attempt");var b=D("ypc-checkout-button",a.container);(a=D("ytr-purchase-button",a.container))?(b=I(a,"ypc-offer-button"),(a.href||b)&&a.click()):b&&KL(b)}
function NL(a){var b=a.j;a=b.itemId;var c=b.itemType;b=b.flowType;IL("paid-subscribe-button-click",{itemType:c,itemId:a});uL(c,a,b)}
function KL(a){var b=T(a,"ypc-item-type"),c=T(a,"ypc-item-id"),d=T(a,"ypc-flow-type");a=T(a,"ypc-irp")||void 0;NG()?IL("purchase-button-click",{itemId:c,itemType:b}):IL("signin-button-click");uL(b,c,d,a)}
function OL(a){var b=a.currentTarget;a=T(b,"ypc-item-type");b=T(b,"ypc-item-id");a&&b&&(IL("unsubscribe-button-click",{itemId:b,itemType:a}),zL(a,b))}
function PL(a){var b=a.j;a=b.itemType;b=b.itemId;IL("paid-unsubscribe-button-click",{itemType:a,itemId:b});zL(a,b)}
function IL(a,b){var c={};Cc(c,{label:a,pageName:L("PAGE_NAME")});b&&Cc(c,b);c=Sg(c);dx("ypc-checkout",c,void 0)}
function GL(a){var b;I(a,"yt-unlimited-more-offer-button")?b="YTO_GTM_2_BUTTON_CLICK_DATA":I(a,"ypc-offer-button")&&(b="YTO_GTM_1_BUTTON_CLICK_DATA");b&&(a=L(b,""))&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(a))}
function QL(a){a=a.currentTarget;var b=T(a,"tab-id");if(b){for(var c=Me("offer-module-tab-content"),d=0;d<c.length;d++)c[d].classList.remove("active-tab");c=Me("offer-module-tab");for(d=0;d<c.length;d++)c[d].classList.remove("active-tab");C(b).classList.add("active-tab");a.classList.add("active-tab")}}
function RL(a){if(a=a.currentTarget){GL(a);var b=BL(a,"U");b?(tL(function(){t("yt.www.ypc.checkout.offerpurchaser.completeTransaction")(b)}),setTimeout(Dt,0)):Nr(Error("ypc-complete-transaction-button does not contain purchaseFlowData"))}}
;var SL=B&&8<=document.documentMode||Yd&&me("1.9.2")||Zd&&me("532.1"),TL=B&&!SL;function UL(a,b,c){this.A=this.w=this.j=null;this.l=a;this.C=TL?b:null;this.J=c||window;this.B=this.J.location;this.H=this.B.href.split("#")[0];this.G=u(this.M,this)}
UL.prototype.F=function(a,b){this.w&&(P(this.w),delete this.w);this.A&&(Rr(this.A),delete this.A);if(a){this.j=VL(this);if(TL){var c=this.C.contentWindow.document.body;c&&c.innerHTML||WL(this,this.j)}b||this.l(this.j);SL?this.w=O(this.J,"hashchange",this.G):this.A=Qr(this.G,200)}};
UL.prototype.M=function(){if(TL){var a=(a=this.C.contentWindow.document.body)?pb(rf(a).substring(1)):"";a!=this.j?(this.j=a,XL(this,a),this.l(a)):(a=VL(this),a!=this.j&&(this.j=a,WL(this,a),this.l(a)))}else a=VL(this),a!=this.j&&(this.j=a,this.l(a))};
function VL(a){a=a.B.href;var b=a.indexOf("#");return 0>b?"":a.substring(b+1)}
function XL(a,b){var c=a.H+"#"+b,d=a.B.href;d!=c&&d+"#"!=c&&Fd(a.B,c)}
function WL(a,b){var c=a.C.contentWindow.document,d=c.body?c.body.innerHTML:"",e="#"+ob(b);d!=e&&(d=yd(xd("title",{},window.document.title||""),xd("body")),c.open("text/html"),c.write(td(d)),jf(c.body,e),c.close())}
UL.prototype.add=function(a,b,c){this.j=""+a;TL&&WL(this,a);XL(this,a);c||this.l(this.j)};function YL(a,b){this.B=this.C=this.j=null;this.w=a;this.A=b||window;this.l=this.A.location;this.G=u(this.J,this)}
YL.prototype.H=function(a,b){this.B&&(P(this.B),delete this.B);this.C&&(Rr(this.C),delete this.C);a&&ZL&&(this.j=this.l.href,b||this.w(this.j),this.B=O(this.A,"popstate",this.G))};
YL.prototype.J=function(a){var b=this.l.href;if((a=a.state)||b!=this.j)this.j=b,this.w(b,a)};
YL.prototype.add=function(a,b,c){if(a||b)a=a||this.l.href,this.A.history.pushState(b,"",a),this.j=a,c||this.w(a,b)};
YL.prototype.replace=function(a,b,c){if(a||b)a=a||this.l.href,this.A.history.replaceState(b,"",a),this.j=a,c||this.w(a,b)};
var ZL=!!window.history.pushState&&(!Zd||Zd&&me("534.11"));function $L(){var a=aM("state");a.setEnabled.call(a,!0,!0)}
function bM(a){var b=null,c=aM();b=b||window.history&&window.history.state;c.replace.call(c,a,b,!0)}
function aM(a){var b=t("ytglobal.HistoryHistoryInstance");b||("state"==(void 0===a?"hash":a)?(b=new YL(cM),YL.prototype.setEnabled=YL.prototype.H,YL.prototype.add=YL.prototype.add,YL.prototype.replace=YL.prototype.replace):(b=new UL(cM,C("legacy-history-iframe")),UL.prototype.setEnabled=UL.prototype.F,UL.prototype.add=UL.prototype.add,UL.prototype.replace=UL.prototype.add),r("ytglobal.HistoryHistoryInstance",b,void 0));return b}
function cM(a,b){R("navigate",a,b)}
;var dM={ki:"ypc_cc",Ai:"ypc_ft",Ii:"ypc_irp",Ki:"ypc_ii",Li:"ypc_it"};function eM(){var a=Tr(window.location.href);if(ZL){lc(dM,function(b){b in a&&delete a[b]});
var b=Ug(window.location.href.split("?",2)[0],a);$L();bM(b)}}
;function fM(a){sL=!!a;D("ypc-delayedloader-target")&&tL();a=Tr(window.location.href);var b=a.ypc_it,c=a.ypc_ii,d=a.ypc_ft||"D",e=a.ypc_oi,f=a.ypc_irp,h=a.ypc_cc,k=a.ypc_ta;"channel"==L("PAGE_NAME")&&"fan_fund"in a&&(d="T",b="U",c=L("CHANNEL_ID",void 0));"channel"==L("PAGE_NAME")&&"ypc_cc"in a&&(b="U",c=L("CHANNEL_ID",void 0));if(f||c&&b)eM(),"start_payment"==k?(a=AL(e,b,c,d,h,null,"","",f,k),yL(a,CL(a),!0)):c&&b?uL(b,c,d,f,h):xL(d,f);DL.push(Gs(document.body,"click",JL,"ypc-checkout-button"),Gs(document.body,
"click",HL,"ypc-offer-button"),Gs(document.body,"click",RL,"ypc-complete-transaction-button"),Gs(document.body,"click",FL,"ytr-pre-purchase-button"),Gs(document.documentElement,"click",OL,"ypc-unsubscribe-link"),Gs(document.documentElement,"click",OL,"ypc-unsubscribe-button"),Gs(document.documentElement,"click",QL,"offer-module-tab"));EL.push(du(lG,LL),du(kG,ML),du(qG,NL),du(oG,PL))}
;window.onload=function(){zH()};
window.onunload=function(){L("TIMING_REPORT_ON_UNLOAD")&&pw(!0);a:if(!uw(void 0)){if(!Ks("send_empty_timing")){var a=L("CSI_SERVICE_NAME","youtube");if(!L("TIMING_ACTION",void 0)||!a)break a}S("aa",void 0,void 0);qw("ap",1,void 0);qw("yt_fss","u",void 0);if(Ks("enable_csi_abandonment_info")&&!sw("yt_lt")){a=L("TIMING_INFO",{});for(var b in a)qw(b,a[b]);qw("is_nav",1);(b=$s())&&qw("csn",b);(b=L("PREVIOUS_ACTION",void 0))&&qw("pa",b);a=rw();a.p=L("CLIENT_PROTOCOL")||"unknown";a.t=L("CLIENT_TRANSPORT")||
"unknown";window.navigator&&window.navigator.sendBeacon&&qw("ba",1);qw("yt_vis",ww());if("cold"==a.yt_lt){b=lu.timing||{};b.navigationStart&&(S("srt",b.responseStart),1!=a.prerender&&(a=b.navigationStart,qw("yt_sts","n",void 0),S("_start",a,void 0)));b:if(b.msFirstPaint)a=Math.max(0,b.msFirstPaint);else{if(a=window.chrome)if(a=a.loadTimes,Da(a)){a=a();var c=1E3*Math.min(a.requestTime||Infinity,a.startLoadTime||Infinity);c=Infinity===c?0:b.navigationStart-c;a=Math.max(0,Math.round(1E3*a.firstPaintTime+
c)||0);break b}a=0}0<a&&S("fpt",a);S("nreqs",b.requestStart,void 0);S("nress",b.responseStart,void 0);S("nrese",b.responseEnd,void 0);0<b.redirectEnd-b.redirectStart&&(S("nrs",b.redirectStart,void 0),S("nre",b.redirectEnd,void 0));0<b.domainLookupEnd-b.domainLookupStart&&(S("ndnss",b.domainLookupStart,void 0),S("ndnse",b.domainLookupEnd,void 0));0<b.connectEnd-b.connectStart&&(S("ntcps",b.connectStart,void 0),S("ntcpe",b.connectEnd,void 0));b.secureConnectionStart>=b.navigationStart&&0<b.connectEnd-
b.secureConnectionStart&&(S("nstcps",b.secureConnectionStart,void 0),S("ntcpe",b.connectEnd,void 0));lu.getEntriesByType&&Aw();b=[];if(document.querySelector&&lu&&lu.getEntriesByName)for(var d in Pu)a=Pu[d],Bw(d,a)&&b.push(a);b.length&&qw("rc",b.join(","))}Ks("csi_on_gel")&&(d={},d.actionType=fw[L("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",b=ow(),St(d,b))}vw(void 0)}d=-1;hH&&(d=Math.round(Jr()-hH));b=String;a=t("_fact",window);a=null==a||-1==a?-1:Math.max(v()-a,0);d={firstActivityMs:b(a),
clientDocumentNonce:fH,index:String(gH),lastEventDeltaMs:String(d),trigger:"FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"};Kt("foregroundHeartbeat",d,void 0,void 0);r("_fact",-1,window);gH++;hH=Jr();Ks("log_web_screen_end")&&(d=(d=L("ROOT_VE_TYPE",void 0))?new Qs(void 0,d,void 0):null,(b=$s())&&d&&HA(b,[d]));Nt();Dt();d=DH;b=0;for(a=d.length;b<a;b++)Pt(d[b]);DH.length=0;yH();BH&&(BH.cancel(),BH=null);(d=L("PAGE_NAME",void 0))&&qt("dispose-"+d);qt("dispose");qt("pageunload")};
window.onerror=function(a,b,c,d,e){var f=!1,h;if((h=(h=Kr.EXPERIMENT_FLAGS)?h.log_window_onerror_fraction:void 0)&&Math.random()<h)f=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(0<h[k].src.indexOf("/debug-")){f=!0;break}}f&&(e||(q(a)?f=a:ErrorEvent&&a instanceof ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),a=Error(f),a.name="UnhandledWindowError",e=a,e.message=f,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:
e.columnNumber=d),Nr(e))};
window.yt=window.yt||{};r("_gel",C,void 0);r("_hasclass",I,void 0);r("_addclass",J,void 0);r("_removeclass",K,void 0);r("_toggleclass",To,void 0);r("_showdiv",By,void 0);r("_hidediv",Cy,void 0);r("_ajax",ds,void 0);r("yt.style.show",By,void 0);r("yt.style.hide",Cy,void 0);r("goog.bind",u,void 0);r("goog.dom.getElementByClass",D,void 0);r("goog.dom.getElementsByTagNameAndClass",Ke,void 0);r("goog.dom.getFirstElementChild",df,void 0);r("goog.array.forEach",y,void 0);r("goog.array.indexOf",Nb,void 0);
r("goog.array.contains",Xb,void 0);r("yt.setConfig",Lr,void 0);r("yt.config.set",Lr,void 0);r("yt.getConfig",L,void 0);r("yt.config.get",L,void 0);r("yt.logging.errors.log",ht,void 0);r("yt.setTimeout",M,void 0);r("yt.setInterval",Qr,void 0);r("yt.clearTimeout",N,void 0);r("yt.clearInterval",Rr,void 0);r("yt.timers.setTimeout",M,void 0);r("yt.timers.setInterval",Qr,void 0);r("yt.timers.clearTimeout",N,void 0);r("yt.timers.clearInterval",Rr,void 0);r("yt.setMsg",vy,void 0);r("yt.setGoogMsg",xy,void 0);
r("yt.getMsg",wy,void 0);r("yt.msgs.set",vy,void 0);r("yt.msgs.setGoog",xy,void 0);r("yt.msgs.get",wy,void 0);r("yt.events.listen",O,void 0);r("yt.events.unlisten",function(a,b,c,d){(a=Cs(a,b,c,!(void 0===d||!d)))&&P(a)},void 0);
r("yt.events.stopPropagation",Fs,void 0);r("yt.events.preventDefault",function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault();return!1},void 0);
r("yt.events.getTarget",Es,void 0);r("yt.events.clear",function(){for(var a in As)P(a)},void 0);
r("yt.events.Event",ys,void 0);ys.prototype.preventDefault=ys.prototype.preventDefault;ys.prototype.stopPropagation=ys.prototype.stopPropagation;r("yt.pubsub.subscribe",Q,void 0);r("yt.pubsub.unsubscribeByKey",pt,void 0);r("yt.pubsub.publish",R,void 0);r("yt.pubsub2.publish",bu,void 0);
Q("init",function(){rE=new jE(oE);yE.push(O(window,"resize",sE));yE.push(O(window,"scroll",vE));J(document.body,"page-loaded");var a=DC.getInstance(),b=!!((HC("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;document.body&&I(document.body,"exp-invert-logo")&&(c&&!I(document.body,"inverted-hdpi")?J(document.body,"inverted-hdpi"):!c&&I(document.body,"inverted-hdpi")&&K(document.body,"inverted-hdpi"));if(b!=c){b="f"+(Math.floor(119/31)+1);var d=HC(b)||0;d=c?d|67108864:d&-67108865;
0==d?delete CC[b]:(c=d.toString(16),CC[b]=c.toString());GC(a)}});
Q("dispose",Xs);Q("init",Xs);dD("keyboard");r("yt.uix.FormInput.selectOnChangeActionIE",function(a){Rz.getInstance().Ra(a)},void 0);
Q("init",function(){Uz()});
r("goog.i18n.bidi.setDirAttribute",function(a,b){var c=b.value,d="";Kc.test(c)?d="rtl":Kc.test(c)||(d="ltr");b.dir=d},void 0);
r("yt.style.toggle",Dy,void 0);r("yt.style.setDisplayed",yy,void 0);r("yt.style.isDisplayed",zy,void 0);r("yt.style.setVisible",function(a,b){if(a=C(a))a.style.visibility=b?"visible":"hidden"},void 0);
r("yt.net.ajax.sendWithOptionsFromUncompiled",function(a,b){return cs(a,{format:b.format,method:b.method,postBody:b.postBody,R:b.onSuccess})},void 0);
r("yt.net.ajax.ResponseFormat.JSON","JSON",void 0);r("yt.net.ajax.ResponseFormat.RAW","RAW",void 0);r("yt.net.ajax.ResponseFormat.LEGACY_XML","XML",void 0);r("yt.net.ajax.getRootNode",js,void 0);r("yt.net.ajax.getNodeValue",is,void 0);r("yt.net.scriptloader.load",Zw,void 0);r("yt.net.styleloader.load",Ix,void 0);
r("goog.dom.forms.getFormDataString",function(a){for(var b=[],c=a.elements,d,e=0;d=c[e];e++)if(d.form==a&&!d.disabled&&"FIELDSET"!=d.tagName){var f=d.name;switch(d.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":d=fp(d);if(null!=d)for(var h,k=0;h=d[k];k++)ep(b,f,h);break;default:h=fp(d),null!=h&&ep(b,f,h)}}c=a.getElementsByTagName("INPUT");for(e=0;d=c[e];e++)d.form==a&&"image"==d.type.toLowerCase()&&(f=d.name,ep(b,f,d.value),ep(b,f+".x","0"),ep(b,
f+".y","0"));return b.join("&")},void 0);
r("yt.uri.buildQueryData",Sg,void 0);r("yt.uri.appendQueryData",Ug,void 0);r("yt.www.feedback.init",TC,void 0);r("yt.www.feedback.start",function(a,b){try{var c=(a||"59")+"",d=XC(b),e=YC();Ks("gfeedback_for_signed_out_users_enabled")?(e.productId=c,e.locale=d.locale,e.helpCenterPath=d.helpCenterPath,Gr(e,d.productData)):Vl(c,d).w(e);return!1}catch(f){return!0}},void 0);
r("yt.www.feedback.startHelp",WC,void 0);r("yt.www.feedback.displayLink",$C,void 0);Q("init",TC);Q("init",$C);Q("dispose",function(){pt(RC);P(PC);RC.length=0;PC.length=0;QC={}});
r("yt.net.cookies.set",at,void 0);r("yt.net.cookies.get",bt,void 0);r("yt.net.cookies.remove",ct,void 0);r("yt.window.redirect",Dx,void 0);
r("yt.window.popup",function(a,b){b=void 0===b?{}:b;b.target=b.target||"YouTube";b.width=b.width||"600";b.height=b.height||"600";var c;(c=b)||(c={});var d=window;var e=a instanceof Pc?a:Tc("undefined"!=typeof a.href?a.href:String(a));var f=c.target||a.target,h=[],k;for(k in c)switch(k){case "width":case "height":case "top":case "left":h.push(k+"="+c[k]);break;case "target":case "noopener":case "noreferrer":break;default:h.push(k+"="+(c[k]?1:0))}h=h.join(",");Ud()&&d.navigator&&d.navigator.standalone&&
f&&"_self"!=f?(h=d.document.createElement("A"),Dd(h,e),h.setAttribute("target",f),c.noreferrer&&h.setAttribute("rel","noreferrer"),c=document.createEvent("MouseEvent"),c.initMouseEvent("click",!0,!0,d,1),h.dispatchEvent(c),d={}):c.noreferrer?(d=d.open("",f,h),c=Rc(e),d&&(Xd&&-1!=c.indexOf(";")&&(c="'"+c.replace(/'/g,"%27")+"'"),d.opener=null,Ic("b/12014412, meta tag with sanitized URL"),c=ve(0,'<META HTTP-EQUIV="refresh" content="0; url='+qb(c)+'">'),d.document.write(td(c)),d.document.close())):(d=
d.open(Rc(e),f,h))&&c.noopener&&(d.opener=null);c=d;if(!c)return null;c.opener||(c.opener=window);c.focus();return c},void 0);
r("yt.window.navigate",Ex,void 0);Q("init",function(){YA.getInstance().pc();LC.getInstance().pc()});
Q("init",function(){var a=!!D("guide-module-loading");window.spf&&spf.load&&a&&(L("GUIDE_DELAY_LOAD")||kD(),lD.push(Q("appbar-show-guide",kD)))});
tB(Qy);tB(nA);tB(Dz);tB(qA);tB(rA);tB(Rz);tB(Ez);tB(jz);tB(tA);tB(oz);tB(IA);tB(fA);tB(hA);tB(UA);tB(VA);tB(WA);tB(OG);tB(LC);tB(YA);tB(VG);tB(cH);tB(gB);tB(iB);tB(kB);r("yt.player.instances.create",function(a,b){a=q(a)?Je(a):a;b=zx(b);var c=ey+"_"+Fa(a),d=dy[c];if(d)return d.Pc(b),d.l;d=new Tx(a,c);dy[c]=d;R("player-added",d.l);Ik(d,La(fy,d));M(function(){d.Pc(b)},0);
return d.l},void 0);
r("yt.www.watch.player.seekTo",function(){},void 0);
r("yt.www.watch.player.saveResumeOffset",function(a){var b;(b=L("PAGE_NAME"))&&"watch"!=b?(Nr(Error("getPlayer called on "+b),"WARNING"),b=null):b=gy();if(b&&b.isReady()){a&&Lr("RESUME_COOKIE_NAME",a);a=L("VIDEO_ID",void 0);var c=b.getDuration();b=Math.floor(b.getCurrentTime());0==c||120>=b||b+120>=c?cL(a):bL(a,Math.floor(b))}},void 0);
r("yt.www.lists.data.addto.saveToWatchLater",WD,void 0);r("yt.www.lists.addtowatchlater.init",aE,void 0);Q("init",aE);Q("dispose",function(){Ky("addto-watch-later-button","click",bE);Ky("addto-watch-later-button-success","click",cE);Ky("addto-watch-later-button-remove","click",dE);Ky("addto-watch-later-button-sign-in","click",eE);P(ZD);ZD=[]});
r("yt.www.watchqueue.addtowatchqueue.init",dL,void 0);Q("init",dL);Q("dispose",function(){pt(hL);hL.length=0;pL=[];Ky("addto-watch-queue-button","click",eL);Ky("addto-tv-queue-button","click",eL);Ky("addto-watch-queue-button-success","click",fL);Ky("addto-watch-queue-menu-choice","click",gL);Jk(PK);PK=null;pt(aL);aL.length=0;GK()});
r("yt.dom.datasets.get",T,void 0);r("yt.dom.datasets.set",Tw,void 0);var gM=Q("init",function(){HE();t("yt.www.page.visibilitymonitor.delegateByClass")(null,t("yt.www.page.visibilitymonitor.States.VISIBLE"),MG,"yt-thumb");t("yt.www.page.visibilitymonitor.delegateByClass")(null,t("yt.www.page.visibilitymonitor.States.VISIBLE"),MG,"yt-uix-simple-thumb-wrap");t("yt.www.page.visibilitymonitor.refresh")();S("tdl");pt(gM)});
Q("init",function(){for(var a=0;a<document.forms.length;a++){for(var b=!1,c=0;c<qL.length;c++)document.forms[a].name==qL[c]&&(b=!0);c=document.forms[a];if("post"==c.method.toLowerCase()&&0==b){b=!1;for(var d=0;d<c.elements.length;d++)c.elements[d].name==L("XSRF_FIELD_NAME")&&(b=!0);b||(b=L("XSRF_TOKEN"),d=document.createElement("input"),d.setAttribute("name",L("XSRF_FIELD_NAME")),d.setAttribute("type","hidden"),d.setAttribute("value",b),c.appendChild(d))}}});
r("yt.www.ads.MastheadAd",IC,void 0);IC.prototype.autoCollapsePremiumYva=IC.prototype.rf;IC.prototype.collapse_ad=IC.prototype.Te;IC.prototype.expand_ad=IC.prototype.Oh;IC.prototype.userCollapsePremiumYva=IC.prototype.Fe;IC.prototype.userExpandPremiumYva=IC.prototype.zh;IC.prototype.userUnexpandPremiumYva=IC.prototype.Ah;r("yt.www.feed.ui.ads.workaroundIE",function(a){!NC&&MC&&(NC=!0,M(function(){a.focus()},0))},void 0);
r("yt.www.feed.ui.ads.workaroundLoad",function(){MC=!0},void 0);
r("yt.www.feed.ui.ads.writeAdsContentToIframe",function(a,b){var c=C(a);c&&(c=c.contentDocument||c.contentWindow.document,c.open(),c.write("<!DOCTYPE html><html><head></head><body>"+b+"</body></html>"),B||c.close())},void 0);
r("yt.net.ping.send",ms,void 0);r("yt.tracking.doubleclick.trackActivity",function(a,b,c){a=("https:"==document.location.protocol?"https://":"http://")+"fls.doubleclick.net/activityi;src="+ob(L("DBLCLK_ADVERTISER_ID"))+";type="+ob(a)+";cat="+ob(b);c&&!c.ord&&(a+=";ord=1");for(var d in c)a+=";"+ob(d)+"="+ob(c[d]);a+=";num="+v();c=Ye(document,"iframe");c.src=a;c.style.display="none";document.body.appendChild(c)},void 0);
r("yt.tracking.track",function(a,b,c){dx(a,b,c)},void 0);
r("yt.tracking.resolution",function(){var a="CSS1Compat"==document.compatMode?document.documentElement:document.body;a=Sg({a:"resolution",width:screen.width,height:screen.height,depth:screen.colorDepth,pixel_ratio:window.devicePixelRatio||1,win_width:a.clientWidth,win_height:a.clientHeight});ms("/gen_204?"+a,void 0)},void 0);
r("yt.tracking.share",function(a,b,c,d,e,f){var h={};b&&(h.v=b);c&&(h.list=c);d&&(h.url=d);a={name:a,locale:e,feature:f};for(var k in h)a[k]=h[k];h=Ug("/sharing_services",a);ms(h)},void 0);
r("yt.www.subscription.autoaction.continueAction",function(a,b,c){bu(AD,new uD(a,{itemType:b,itemId:c}))},void 0);
Q("init",function(a){rG=!!a;sG.push(du(AD,tG),du(FD,vG));rG||sG.push(du(ED,tG),du(JD,vG),du(xD,xG),du(yD,zG),du(MD,BG),du(nG,DG),du(pG,FG),du(mG,EG))});
Q("init",function(){QF.push(du(zD,bG),du(OD,VF),du(ND,UF))});
Q("dispose",function(){eu(QF);QF.length=0;P(RF);RF.length=0;Xz&&(bf(Xz),Xz=null)});
Q("init",function(){});
Q("dispose",function(){P(JG);JG.length=0;Object.keys(IG).forEach(function(a){bf(IG[a])});
IG={}});
Q("init",function(){L("CREATE_CHANNEL_LIGHTBOX")&&HB();L("FEED_PRIVACY_LIGHTBOX_ENABLED")&&(hC.push(Q("SHOW-FEED-PRIVACY-FAVORITE-DIALOG",oC)),hC.push(Q("SHOW-FEED-PRIVACY-LIKE-DIALOG",nC)),hC.push(Q("SHOW-FEED-PRIVACY-ADD-TO-PLAYLIST-DIALOG",pC)),hC.push(Q("SHOW-FEED-PRIVACY-LIKE-PLAYLIST-DIALOG",qC)),hC.push(Q("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",mC)));if(L("SHOW_IDENTITY_PROMPT_LIGHTBOX")){var a=EB(rC);var b=L("IDENTITY_PROMPT_NEXT_URL",document.location.href),c=L("IDENTITY_PROMPT_AUTHUSER",void 0),
d=L("IDENTITY_PROMPT_PAGEID",void 0),e={};c&&(e.authuser=c);d&&(e.pageid=d);a.open("identity-prompt","/identity_prompt_ajax","identity_prompt_ajax",!0,!0,void 0,b,!0,e)}L("LINK_GPLUS_LIGHTBOX_ENABLED")&&RB();L("SHOW_MCNA_YPE_MODAL")&&new BC("")});
Q("dispose",function(){L("LINK_GPLUS_LIGHTBOX_ENABLED")&&(pt(QB),QB.length=0,P(NB),NB.length=0,JB=!1)});
r("yt.www.account.AddNewChannelLoader.init",function(){var a=EB(FB);a.B=L("ADD_NEW_CHANNEL_PAGE_ID",void 0)||null;a.init(L("ADD_NEW_CHANNEL_CSS_URL",void 0),L("ADD_NEW_CHANNEL_JS_URL",void 0),!a.B,C("body-container"),"add-secondary-channel")},void 0);
r("yt.www.account.CreateChannelLoader.show",function(a){HB(!0,a)},void 0);
r("yt.www.account.LinkGplusLoader.cancel",VB,void 0);r("yt.www.account.LinkGplusLoader.dismiss",UB,void 0);r("yt.www.account.LinkGplusLoader.show",cC,void 0);r("yt.www.account.LinkGplusLoader.showOnce",function(){cC();pt(L("PUBSUB_INIT_KEY",void 0))},void 0);
Q("init",fM);r("yt.www.ypc.bootstrap.init",fM,void 0);var hM=Q("init",function(){L("PAGEFRAME_JS")&&Zw(L("PAGEFRAME_JS",void 0),function(){t("ytbin.www.pageframe.setup")()});
pt(hM)});
Q("init",function(){TD.getInstance().init()});}).call(this);
