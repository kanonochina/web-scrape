(function(){var g=this;function k(a){return"string"==typeof a}
function l(a){a=a.split(".");for(var b=g,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function m(){}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
var q="closure_uid_"+(1E9*Math.random()>>>0),aa=0;function ba(a,b,c){return a.call.apply(a.bind,arguments)}
function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=ba:r=ca;return r.apply(null,arguments)}
function da(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function t(a,b){var c=a.split("."),d=g;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
;var u=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function v(a,b){return a<b?-1:a>b?1:0}
;var ea=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(k(a))return k(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=k(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function x(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null}
x.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};var y;a:{var z=g.navigator;if(z){var A=z.userAgent;if(A){y=A;break a}}y=""}function B(a){return-1!=y.indexOf(a)}
;function fa(a){g.setTimeout(function(){throw a;},0)}
var C;
function ha(){var a=g.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=r(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},
this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.l;c.l=null;a()}};
return function(a){d.next={l:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){g.setTimeout(a,0)}}
;function D(){this.b=this.a=null}
var F=new x(function(){return new E},function(a){a.reset()},100);
D.prototype.add=function(a,b){var c=F.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};
D.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function E(){this.next=this.b=this.a=null}
E.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
E.prototype.reset=function(){this.next=this.b=this.a=null};function ia(a){G||ja();H||(G(),H=!0);I.add(a,void 0)}
var G;function ja(){if(-1!=String(g.Promise).indexOf("[native code]")){var a=g.Promise.resolve(void 0);G=function(){a.then(ka)}}else G=function(){var a=ka;
"function"!=p(g.setImmediate)||g.Window&&g.Window.prototype&&!B("Edge")&&g.Window.prototype.setImmediate==g.setImmediate?(C||(C=ha()),C(a)):g.setImmediate(a)}}
var H=!1,I=new D;function ka(){for(var a;a=I.remove();){try{a.a.call(a.b)}catch(c){fa(c)}var b=F;b.g(a);b.b<b.f&&(b.b++,a.next=b.a,b.a=a)}H=!1}
;function J(){this.c=this.c;this.f=this.f}
J.prototype.c=!1;J.prototype.dispose=function(){this.c||(this.c=!0,this.i())};
J.prototype.i=function(){if(this.f)for(;this.f.length;)this.f.shift()()};function la(a,b){var c=ma;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))}
;var na=B("Opera"),K=B("Trident")||B("MSIE"),oa=B("Edge"),L=B("Gecko")&&!(-1!=y.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),pa=-1!=y.toLowerCase().indexOf("webkit")&&!B("Edge");function qa(){var a=g.document;return a?a.documentMode:void 0}
var M;a:{var N="",O=function(){var a=y;if(L)return/rv:([^\);]+)(\)|;)/.exec(a);if(oa)return/Edge\/([\d\.]+)/.exec(a);if(K)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(pa)return/WebKit\/(\S+)/.exec(a);if(na)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
O&&(N=O?O[1]:"");if(K){var P=qa();if(null!=P&&P>parseFloat(N)){M=String(P);break a}}M=N}var ra=M,ma={};
function sa(a){la(a,function(){for(var b=0,c=u(String(ra)).split("."),d=u(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",n=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];n=/(\d*)(\D*)(.*)/.exec(n)||["","","",""];if(0==h[0].length&&0==n[0].length)break;b=v(0==h[1].length?0:parseInt(h[1],10),0==n[1].length?0:parseInt(n[1],10))||v(0==h[2].length,0==n[2].length)||v(h[2],n[2]);h=h[3];n=n[3]}while(0==b)}return 0<=b})}
var ta;var ua=g.document;ta=ua&&K?qa()||("CSS1Compat"==ua.compatMode?parseInt(ra,10):5):void 0;var Q;if(!(Q=!L&&!K)){var R;if(R=K)R=9<=Number(ta);Q=R}Q||L&&sa("1.9.1");K&&sa("9");function S(){this.a="";this.b=va}
S.prototype.o=!0;S.prototype.m=function(){return this.a};
var va={};function T(){this.a="";this.b=wa}
T.prototype.o=!0;T.prototype.m=function(){return this.a};
var xa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,wa={};function ya(a){var b=new T;b.a=a;return b}
ya("about:blank");function za(a,b){a.src=b instanceof S&&b.constructor===S&&b.b===va?b.a:"type_error:TrustedResourceUrl"}
;function Aa(a){Ba();var b=new S;b.a=a;return b}
var Ba=m;function U(a){J.call(this);this.s=1;this.g=[];this.h=0;this.a=[];this.b={};this.u=!!a}
(function(){function a(){}
a.prototype=J.prototype;U.a=J.prototype;U.prototype=new a;U.prototype.constructor=U;U.b=function(a,c,d){for(var b=Array(arguments.length-2),f=2;f<arguments.length;f++)b[f-2]=arguments[f];return J.prototype[c].apply(a,b)}})();
U.prototype.subscribe=function(a,b,c){var d=this.b[a];d||(d=this.b[a]=[]);var e=this.s;this.a[e]=a;this.a[e+1]=b;this.a[e+2]=c;this.s=e+3;d.push(e);return e};
U.prototype.j=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.h)this.g.push(a),this.a[a+1]=m;else{if(c){var d=ea(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
U.prototype.v=function(a,b){var c=this.b[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var h=c[e];Ca(this.a[h+1],this.a[h+2],d)}else{this.h++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.a[h+1].apply(this.a[h+2],d)}finally{if(this.h--,0<this.g.length&&0==this.h)for(;c=this.g.pop();)this.j(c)}}return 0!=e}return!1};
function Ca(a,b,c){ia(function(){a.apply(b,c)})}
U.prototype.clear=function(a){if(a){var b=this.b[a];b&&(w(b,this.j,this),delete this.b[a])}else this.a.length=0,this.b={}};
U.prototype.i=function(){U.a.i.call(this);this.clear();this.g.length=0};var V=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",V);function W(a){var b=arguments;if(1<b.length)V[b[0]]=b[1];else{b=b[0];for(var c in b)V[c]=b[c]}}
function Da(a,b){return a in V?V[a]:b}
;function Ea(a){return a?a.dataset?a.dataset[Fa()]:a.getAttribute("data-loaded"):null}
var Ga={};function Fa(){return Ga.loaded||(Ga.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Ha(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ia(b)}}:a}
function Ia(a){var b=l("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=Da("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),W("ERRORS",b))}
;function Ja(a){"function"==p(a)&&(a=Ha(a));window.setTimeout(a,0)}
;var Ka=l("ytPubsubPubsubInstance")||new U;U.prototype.subscribe=U.prototype.subscribe;U.prototype.unsubscribeByKey=U.prototype.j;U.prototype.publish=U.prototype.v;U.prototype.clear=U.prototype.clear;t("ytPubsubPubsubInstance",Ka);var X=l("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",X);var Y=l("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",Y);var La=l("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",La);
function Ma(a,b){var c=Z();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){X[d]&&b.apply(window,c)};
try{La[a]?f():Ja(f)}catch(h){Ia(h)}},void 0);
X[d]=!0;Y[a]||(Y[a]=[]);Y[a].push(d)}}
function Na(a,b){var c=Z();c&&c.publish.apply(c,arguments)}
function Oa(a){var b=Z();if(b)if(b.clear(a),a)Pa(a);else for(var c in Y)Pa(c)}
function Z(){return l("ytPubsubPubsubInstance")}
function Pa(a){Y[a]&&(a=Y[a],w(a,function(a){X[a]&&delete X[a]}),a.length=0)}
;var Qa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Ra=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Sa(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Qa,""),c=c.replace(Ra,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ta(a,b)}
function Ta(a,b){var c=Ua(a),d=document.getElementById(c),e=d&&Ea(d),f=d&&!e;e?b&&b():(b&&(Ma(c,b),b[q]||(b[q]=++aa)),f||(d=Va(a,c,function(){if(!Ea(d)){var a=d;a&&(a.dataset?a.dataset[Fa()]="true":a.setAttribute("data-loaded","true"));Na(c);Ja(da(Oa,c))}})))}
function Va(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
za(d,Aa(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Ua(a){var b=document.createElement("a");a instanceof T||a instanceof T||(a=a.o?a.m():String(a),xa.test(a)||(a="about:invalid#zClosurez"),a=ya(a));b.href=a instanceof T&&a.constructor===T&&a.b===wa?a.a:"type_error:SafeUrl";b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");for(var c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"js-"+a}
;t("_gel",function(a){var b=document;return k(a)?b.getElementById(a):a});
t("yt.setConfig",W);t("yt.config.set",W);t("yt.www.notfound.init",function(){var a=Da("SBOX_JS_URL",void 0);a&&Sa(a,function(){try{l("yt.www.masthead.searchbox.init")()}catch(b){throw b.message+=' SboxUrl: "'+a+'"',b;}})});}).call(this);
