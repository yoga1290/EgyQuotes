var check = window.location.href.match(/OAuth\/.*/) !== null;
if (check) {
    window.history.replaceState(null, null, '/#/');
}

check = window.location.href.match(/access_token=.+/) !== null;
if (check) {
    window.localStorage.setItem('access_token', window.location.search.replace("?access_token=", ""));
}/*
 AngularJS v1.3.0
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(S,X,u){'use strict';function y(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ra(b){if(null==b||Sa(b))return!1;var a=b.length;return b.nodeType===
ka&&a?!0:I(b)||B(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(F(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(B(b)||Ra(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function ic(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);
return a.sort()}function zd(b,a,c){for(var d=ic(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function jc(b){return function(a,c){b(c,a)}}function Ad(){return++hb}function kc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function E(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,k=f.length;g<k;g++){var h=f[g];b[h]=e[h]}}kc(b,a);return b}function ba(b){return parseInt(b,10)}function lc(b,a){return E(new (E(function(){},{prototype:b})),
a)}function A(){}function Ta(b){return b}function da(b){return function(){return b}}function w(b){return"undefined"===typeof b}function z(b){return"undefined"!==typeof b}function G(b){return null!==b&&"object"===typeof b}function I(b){return"string"===typeof b}function W(b){return"number"===typeof b}function ea(b){return"[object Date]"===Ia.call(b)}function F(b){return"function"===typeof b}function ib(b){return"[object RegExp]"===Ia.call(b)}function Sa(b){return b&&b.window===b}function Ua(b){return b&&
b.$evalAsync&&b.$watch}function Va(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Bd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function pa(b){return N(b.nodeName||b[0].nodeName)}function Wa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ca(b,a,c,d){if(Sa(b)||Ua(b))throw Xa("cpws");if(a){if(b===a)throw Xa("cpi");c=c||[];d=d||[];if(G(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(B(b))for(var f=
a.length=0;f<b.length;f++)e=Ca(b[f],null,c,d),G(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;B(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ca(b[f],null,c,d),G(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);kc(a,g)}}else if(a=b)B(b)?a=Ca(b,[],c,d):ea(b)?a=new Date(b.getTime()):ib(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):G(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ca(b,e,c,d));return a}function qa(b,
a){if(B(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(G(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function la(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(B(b)){if(!B(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!la(b[d],a[d]))return!1;return!0}}else{if(ea(b))return ea(a)?la(b.getTime(),a.getTime()):!1;if(ib(b)&&ib(a))return b.toString()==a.toString();
if(Ua(b)||Ua(a)||Sa(b)||Sa(a)||B(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!F(b[d])){if(!la(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==u&&!F(a[d]))return!1;return!0}return!1}function jb(b,a,c){return b.concat(Ya.call(a,c))}function nc(b,a){var c=2<arguments.length?Ya.call(arguments,2):[];return!F(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Ya.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?
a.apply(b,arguments):a.call(b)}}function Cd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=u:Sa(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":Ua(a)&&(c="$SCOPE");return c}function ra(b,a){return"undefined"===typeof b?u:JSON.stringify(b,Cd,a?"  ":null)}function oc(b){return I(b)?JSON.parse(b):b}function sa(b){b=D(b).clone();try{b.empty()}catch(a){}var c=D("<div>").append(b).html();try{return b[0].nodeType===kb?N(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+
N(b)})}catch(d){return N(c)}}function pc(b){try{return decodeURIComponent(b)}catch(a){}}function qc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=pc(c[0]),z(d)&&(b=z(c[1])?pc(c[1]):!0,Hb.call(a,d)?B(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Ib(b){var a=[];r(b,function(b,d){B(b)?r(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}function lb(b){return Da(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Dd(b,a){var c,d,e=mb.length;b=D(b);for(d=0;d<e;++d)if(c=mb[d]+a,I(c=b.attr(c)))return c;return null}function Ed(b,a){var c,d,e={};r(mb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(mb,function(a){a+="app";
var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Dd(c,"strict-di"),a(c,d?[d]:[],e))}function rc(b,a,c){G(c)||(c={});c=E({strictDi:!1},c);var d=function(){b=D(b);if(b.injector()){var d=b[0]===X?"document":sa(b);throw Xa("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");
d=Jb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;S&&e.test(S.name)&&(c.debugInfoEnabled=!0,S.name=S.name.replace(e,""));if(S&&!f.test(S.name))return d();S.name=S.name.replace(f,"");ta.resumeBootstrap=function(b){r(b,function(b){a.push(b)});d()}}function Fd(){S.name="NG_ENABLE_DEBUG_INFO!"+S.name;S.location.reload()}function Gd(b){return ta.element(b).injector().get("$$testability")}
function Kb(b,a){a=a||"_";return b.replace(Hd,function(b,d){return(d?a:"")+b.toLowerCase()})}function Id(){var b;sc||((ma=S.jQuery)&&ma.fn.on?(D=ma,E(ma.fn,{scope:Ja.scope,isolateScope:Ja.isolateScope,controller:Ja.controller,injector:Ja.injector,inheritedData:Ja.inheritedData}),b=ma.cleanData,ma.cleanData=function(a){var c;if(Lb)Lb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ma._data(e,"events"))&&c.$destroy&&ma(e).triggerHandler("$destroy");b(a)}):D=R,ta.element=D,sc=!0)}function Mb(b,a,c){if(!b)throw Xa("areq",
a||"?",c||"required");return b}function nb(b,a,c){c&&B(b)&&(b=b[b.length-1]);Mb(F(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ka(b,a){if("hasOwnProperty"===b)throw Xa("badname",a);}function tc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&F(b)?nc(e,b):b}function ob(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return D(c)}function wa(){return Object.create(null)}
function Jd(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=y("$injector"),d=y("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||y;return a(b,"module",function(){var b={};return function(f,g,k){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return n}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],p=a("$injector","invoke","push",d),n={_invokeQueue:b,_configBlocks:d,
_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:p,run:function(a){e.push(a);return this}};k&&p(k);return n})}})}function Kd(b){E(b,{bootstrap:rc,copy:Ca,extend:E,equals:la,
element:D,forEach:r,injector:Jb,noop:A,bind:nc,toJson:ra,fromJson:oc,identity:Ta,isUndefined:w,isDefined:z,isString:I,isFunction:F,isObject:G,isNumber:W,isElement:mc,isArray:B,version:Ld,isDate:ea,lowercase:N,uppercase:pb,callbacks:{counter:0},getTestability:Gd,$$minErr:y,$$csp:Za,reloadWithDebugInfo:Fd});$a=Jd(S);try{$a("ngLocale")}catch(a){$a("ngLocale",[]).provider("$locale",Md)}$a("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Nd});a.provider("$compile",uc).directive({a:Od,
input:vc,textarea:vc,form:Pd,script:Qd,select:Rd,style:Sd,option:Td,ngBind:Ud,ngBindHtml:Vd,ngBindTemplate:Wd,ngClass:Xd,ngClassEven:Yd,ngClassOdd:Zd,ngCloak:$d,ngController:ae,ngForm:be,ngHide:ce,ngIf:de,ngInclude:ee,ngInit:fe,ngNonBindable:ge,ngPluralize:he,ngRepeat:ie,ngShow:je,ngStyle:ke,ngSwitch:le,ngSwitchWhen:me,ngSwitchDefault:ne,ngOptions:oe,ngTransclude:pe,ngModel:qe,ngList:re,ngChange:se,pattern:wc,ngPattern:wc,required:xc,ngRequired:xc,minlength:yc,ngMinlength:yc,maxlength:zc,ngMaxlength:zc,
ngValue:te,ngModelOptions:ue}).directive({ngInclude:ve}).directive(qb).directive(Ac);a.provider({$anchorScroll:we,$animate:xe,$browser:ye,$cacheFactory:ze,$controller:Ae,$document:Be,$exceptionHandler:Ce,$filter:Bc,$interpolate:De,$interval:Ee,$http:Fe,$httpBackend:Ge,$location:He,$log:Ie,$parse:Je,$rootScope:Ke,$q:Le,$$q:Me,$sce:Ne,$sceDelegate:Oe,$sniffer:Pe,$templateCache:Qe,$templateRequest:Re,$$testability:Se,$timeout:Te,$window:Ue,$$rAF:Ve,$$asyncCallback:We})}])}function ab(b){return b.replace(Xe,
function(a,b,d,e){return e?d.toUpperCase():d}).replace(Ye,"Moz$1")}function Cc(b){b=b.nodeType;return b===ka||!b||9===b}function Dc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Nb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Ze.exec(b)||["",""])[1].toLowerCase();d=ha[d]||ha._default;c.innerHTML=d[1]+b.replace($e,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=jb(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
return e}function R(b){if(b instanceof R)return b;var a;I(b)&&(b=U(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Ob("nosel");return new R(b)}if(a){a=X;var c;b=(c=af.exec(b))?[a.createElement(c[1])]:(c=Dc(b,a))?c.childNodes:[]}Ec(this,b)}function Pb(b){return b.cloneNode(!0)}function rb(b,a){a||sb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)sb(c[d])}function Fc(b,a,c,d){if(z(d))throw Ob("offargs");var e=(d=tb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),
function(a){if(z(c)){var d=e[a];Wa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function sb(b,a){var c=b.ng339,d=c&&ub[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Fc(b)),delete ub[c],b.ng339=u))}function tb(b,a){var c=b.ng339,c=c&&ub[c];a&&!c&&(b.ng339=c=++bf,c=ub[c]={events:{},data:{},handle:u});return c}function Qb(b,a,c){if(Cc(b)){var d=z(c),e=!d&&a&&!G(a),
f=!a;b=(b=tb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];E(b,a)}}}function Rb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Sb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",U((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(a)+" "," ")))})}function Tb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
r(a.split(" "),function(a){a=U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",U(c))}}function Ec(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Gc(b,a){return vb(b,"$"+(a||"ngController")+"Controller")}function vb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=B(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=D.data(b,a[d]))!==u)return c;b=b.parentNode||
11===b.nodeType&&b.host}}function Hc(b){for(rb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Ic(b,a){a||rb(b);var c=b.parentNode;c&&c.removeChild(b)}function cf(b,a){a=a||S;if("complete"===a.document.readyState)a.setTimeout(b);else D(a).on("load",b)}function Jc(b,a){var c=wb[a.toLowerCase()];return c&&Kc[pa(b)]&&c}function df(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Lc[a]}function ef(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
a[e||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=qa(f));for(var h=0;h<g;h++)c.isImmediatePropagationStopped()||f[h].call(b,c)}};c.elem=b;return c}function La(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),
c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Ad)():c+":"+b}function bb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function ff(b){return(b=b.toString().replace(Mc,"").match(Nc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Ub(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw I(c)&&c||(c=b.name||ff(b)),Ea("strictdi",c);a=b.toString().replace(Mc,"");a=a.match(Nc);r(a[1].split(gf),
function(a){a.replace(hf,function(a,b,c){d.push(c)})})}b.$inject=d}}else B(b)?(a=b.length-1,nb(b[a],"fn"),d=b.slice(0,a)):nb(b,"fn",!0);return d}function Jb(b,a){function c(a){return function(b,c){if(G(b))r(b,jc(a));else return a(b,c)}}function d(a,b){Ka(a,"service");if(F(b)||B(b))b=p.instantiate(b);if(!b.$get)throw Ea("pget",a);return q[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,this,u,a);if(w(c))throw Ea("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,
b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{I(a)?(c=$a(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):F(a)?b.push(p.invoke(a)):B(a)?b.push(p.invoke(a)):nb(a,"module")}catch(e){throw B(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ea("modulerr",a,e.stack||e.message||e);}}});
return b}function k(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===h)throw Ea("cdep",a+" <- "+l.join(" <- "));return b[a]}try{return l.unshift(a),b[a]=h,b[a]=c(a)}catch(e){throw b[a]===h&&delete b[a],e;}finally{l.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[];g=Ub(b,a,g);var k,l,n;l=0;for(k=g.length;l<k;l++){n=g[l];if("string"!==typeof n)throw Ea("itkn",n);h.push(f&&f.hasOwnProperty(n)?f[n]:d(n))}B(b)&&(b=b[k]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,
b,c){var d=function(){};d.prototype=(B(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,c);return G(a)||F(a)?a:d},get:d,annotate:Ub,has:function(a){return q.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var h={},l=[],m=new bb([],!0),q={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,da(b),!1)}),constant:c(function(a,b){Ka(a,"constant");q[a]=b;n[a]=b}),decorator:function(a,b){var c=
p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},p=q.$injector=k(q,function(){throw Ea("unpr",l.join(" <- "));}),n={},s=n.$injector=k(n,function(a){var b=p.get(a+"Provider");return s.invoke(b.$get,b,u,a)});r(g(b),function(a){s.invoke(a||A)});return s}function we(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===
pa(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;F(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):W(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||cf(function(){d.$evalAsync(g)})});
return g}]}function We(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function jf(b,a,c,d){function e(a){try{a.apply(null,Ya.call(arguments,1))}finally{if(x--,0===x)for(;t.length;)try{t.pop()()}catch(b){c.error(b)}}}function f(a,b){(function xa(){r(T,function(a){a()});C=b(xa,a)})()}function g(){k();h()}function k(){M=b.history.state;M=w(M)?null:M;la(M,V)&&(M=V);V=M}function h(){if(H!==m.url()||P!==M)H=m.url(),P=M,r(O,function(a){a(m.url(),
M)})}function l(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,q=a[0],p=b.location,n=b.history,s=b.setTimeout,J=b.clearTimeout,v={};m.isMock=!1;var x=0,t=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){x++};m.notifyWhenNoOutstandingRequests=function(a){r(T,function(a){a()});0===x?a():t.push(a)};var T=[],C;m.addPollFn=function(a){w(C)&&f(100,s);T.push(a);return a};var M,P,H=p.href,Q=a.find("base"),aa=null;k();P=M;m.url=function(a,c,e){w(e)&&(e=null);
p!==b.location&&(p=b.location);n!==b.history&&(n=b.history);if(a){var f=P===e;if(H!==a||d.history&&!f){var g=H&&Fa(H)===Fa(a);H=a;P=e;!d.history||g&&f?(g||(aa=a),c?p.replace(a):p.href=a):(n[c?"replaceState":"pushState"](e,"",a),k(),P=M);return m}}else return aa||p.href.replace(/%27/g,"'")};m.state=function(){return M};var O=[],K=!1,V=null;m.onUrlChange=function(a){if(!K){if(d.history)D(b).on("popstate",g);D(b).on("hashchange",g);K=!0}O.push(a);return a};m.$$checkUrlChange=h;m.baseHref=function(){var a=
Q.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var ca={},Ma="",fa=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===u?q.cookie=encodeURIComponent(a)+"=;path="+fa+";expires=Thu, 01 Jan 1970 00:00:00 GMT":I(b)&&(d=(q.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+fa).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(q.cookie!==Ma)for(Ma=q.cookie,d=Ma.split("; "),ca={},f=0;f<d.length;f++)e=
d[f],g=e.indexOf("="),0<g&&(a=l(e.substring(0,g)),ca[a]===u&&(ca[a]=l(e.substring(g+1))));return ca}};m.defer=function(a,b){var c;x++;c=s(function(){delete v[c];e(a)},b||0);v[c]=!0;return c};m.defer.cancel=function(a){return v[a]?(delete v[a],J(a),e(A),!0):!1}}function ye(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new jf(b,d,a,c)}]}function ze(){this.$get=function(){function b(b,d){function e(a){a!=q&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,q),q=a,q.n=null)}function f(a,
b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw y("$cacheFactory")("iid",b);var g=0,k=E({},d,{id:b}),h={},l=d&&d.capacity||Number.MAX_VALUE,m={},q=null,p=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!w(b))return a in h||g++,h[a]=b,g>l&&this.remove(p.key),b},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==q&&(q=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}delete h[a];
g--},removeAll:function(){h={};g=0;m={};q=p=null},destroy:function(){m=k=h=null;delete a[b]},info:function(){return E({},k,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Qe(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function uc(b,a){function c(a,b){var c=/^\s*([@=&])(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw ia("iscp",b,e,a);d[e]={attrName:f[3]||e,mode:f[1],
optional:"?"===f[2]}});return d}var d={},e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,g=Bd("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,h=/^(on[a-z]+|formaction)$/;this.directive=function q(a,e){Ka(a,"directive");I(a)?(Mb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);F(h)?h={compile:da(h)}:!h.compile&&h.link&&(h.compile=da(h.link));
h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";G(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):r(a,jc(q));return this};this.aHrefSanitizationWhitelist=function(b){return z(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};
var l=!0;this.debugInfoEnabled=function(a){return z(a)?(l=a,this):l};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,J,v,x,t,T,C,M){function P(a,b){try{a.addClass(b)}catch(c){}}function H(a,b,c,d,e){a instanceof D||(a=D(a));r(a,function(b,c){b.nodeType==kb&&b.nodeValue.match(/\S+/)&&(a[c]=D(b).wrap("<span></span>").parent()[0])});var f=Q(a,b,a,c,d,e);H.$$addScopeClass(a);
var g=null;return function(b,c,d,e,h){Mb(b,"scope");g||(g=(h=h&&h[0])?"foreignobject"!==pa(h)&&h.toString().match(/SVG/)?"svg":"html":"html");h="html"!==g?D(S(g,D("<div>").append(a).html())):c?Ja.clone.call(a):a;if(d)for(var k in d)h.data("$"+k+"Controller",d[k].instance);H.$$addScopeInfo(h,b);c&&c(h,b);f&&f(b,h,h,e);return h}}function Q(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,p,n,t,s;if(q)for(s=Array(c.length),p=0;p<h.length;p+=3)f=h[p],s[f]=c[f];else s=c;p=0;for(n=h.length;p<n;)k=s[h[p++]],c=
h[p++],f=h[p++],c?(c.scope?(l=a.$new(),H.$$addScopeInfo(D(k),l)):l=a,t=c.transcludeOnThisElement?aa(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?aa(a,b):null,c(f,l,k,d,t)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,p,n,q,t=0;t<a.length;t++){k=new Xb;l=O(a[t],[],k,0===t?d:u,e);(f=l.length?ca(l,a[t],k,b,c,null,[],[],f):null)&&f.scope&&H.$$addScopeClass(k.$$element);k=f&&f.terminal||!(p=a[t].childNodes)||!p.length?null:Q(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&
f.transclude:b);if(f||k)h.push(t,f,k),n=!0,q=q||f;f=null}return n?g:null}function aa(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,f,c,g)}}function O(b,c,g,h,k){var l=g.$attr,p;switch(b.nodeType){case ka:fa(c,ua(pa(b)),"E",h,k);for(var n,t,s,v=b.attributes,J=0,T=v&&v.length;J<T;J++){var M=!1,C=!1;n=v[J];p=n.name;n=U(n.value);t=ua(p);if(s=ya.test(t))p=Kb(t.substr(6),"-");var H=t.replace(/(Start|End)$/,""),P;a:{var O=H;if(d.hasOwnProperty(O)){P=void 0;for(var O=
a.get(O+"Directive"),r=0,aa=O.length;r<aa;r++)if(P=O[r],P.multiElement){P=!0;break a}}P=!1}P&&t===H+"Start"&&(M=p,C=p.substr(0,p.length-5)+"end",p=p.substr(0,p.length-6));t=ua(p.toLowerCase());l[t]=p;if(s||!g.hasOwnProperty(t))g[t]=n,Jc(b,t)&&(g[t]=!0);R(b,c,n,t,s);fa(c,t,"A",h,k,M,C)}b=b.className;if(I(b)&&""!==b)for(;p=f.exec(b);)t=ua(p[2]),fa(c,t,"C",h,k)&&(g[t]=U(p[3])),b=b.substr(p.index+p[0].length);break;case kb:Y(c,b.nodeValue);break;case 8:try{if(p=e.exec(b.nodeValue))t=ua(p[1]),fa(c,t,"M",
h,k)&&(g[t]=U(p[2]))}catch(x){}}c.sort(y);return c}function K(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",b,c);a.nodeType==ka&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function V(a,b,c){return function(d,e,f,g,h){e=K(e[0],b,c);return a(d,e,f,g,h)}}function ca(a,d,e,f,g,h,l,q,t){function s(a,b,c,d){if(a){c&&(a=V(a,c,d));a.require=L.require;a.directiveName=ga;if(Q===L||L.$$isolateScope)a=
Z(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=V(b,c,d));b.require=L.require;b.directiveName=ga;if(Q===L||L.$$isolateScope)b=Z(b,{isolateScope:!0});q.push(b)}}function T(a,b,c,d){var e,f="data",g=!1,h=c,l;if(I(b)){if(l=b.match(k),b=b.substring(l[0].length),l[3]&&(l[1]?l[3]=null:l[1]=l[3]),"^"===l[1]?f="inheritedData":"^^"===l[1]&&(f="inheritedData",h=c.parent()),"?"===l[2]&&(g=!0),e=null,d&&"data"===f&&(e=d[b])&&(e=e.instance),e=e||h[f]("$"+b+"Controller"),!e&&!g)throw ia("ctreq",b,a);}else B(b)&&(e=
[],r(b,function(b){e.push(T(a,b,c,d))}));return e}function M(a,c,f,g,h){function k(a,b,c){var d;Ua(a)||(c=b,b=a,a=u);E&&(d=P);c||(c=E?O.parent():O);return h(a,b,d,c,Wb)}var n,t,s,C,P,xb,O,K;d===f?(K=e,O=e.$$element):(O=D(f),K=new Xb(O,e));Q&&(C=c.$new(!0));xb=h&&k;aa&&(x={},P={},r(aa,function(a){var b={$scope:a===Q||a.$$isolateScope?C:c,$element:O,$attrs:K,$transclude:xb};s=a.controller;"@"==s&&(s=K[a.name]);b=v(s,b,!0,a.controllerAs);P[a.name]=b;E||O.data("$"+a.name+"Controller",b.instance);x[a.name]=
b}));if(Q){H.$$addScopeInfo(O,C,!0,!(ca&&(ca===Q||ca===Q.$$originalDirective)));H.$$addScopeClass(O,!0);g=x&&x[Q.name];var V=C;g&&g.identifier&&!0===Q.bindToController&&(V=g.instance);r(C.$$isolateBindings=Q.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":K.$observe(e,function(a){V[d]=a});K.$$observers[e].$$scope=c;K[e]&&(V[d]=b(K[e])(c));break;case "=":if(f&&!K[e])break;h=J(K[e]);l=h.literal?la:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=
V[d]=h(c);throw ia("nonassign",K[e],Q.name);};g=V[d]=h(c);f=function(a){l(a,V[d])||(l(a,g)?k(c,a=V[d]):V[d]=a);return g=a};f.$stateful=!0;f=c.$watch(J(K[e],f),null,h.literal);C.$on("$destroy",f);break;case "&":h=J(K[e]),V[d]=function(a){return h(c,a)}}})}x&&(r(x,function(a){a()}),x=null);g=0;for(n=l.length;g<n;g++)t=l[g],$(t,t.isolateScope?C:c,O,K,t.require&&T(t.directiveName,t.require,O,P),xb);var Wb=c;Q&&(Q.template||null===Q.templateUrl)&&(Wb=C);a&&a(Wb,f.childNodes,u,h);for(g=q.length-1;0<=g;g--)t=
q[g],$(t,t.isolateScope?C:c,O,K,t.require&&T(t.directiveName,t.require,O,P),xb)}t=t||{};for(var C=-Number.MAX_VALUE,P,aa=t.controllerDirectives,x,Q=t.newIsolateScopeDirective,ca=t.templateDirective,fa=t.nonTlbTranscludeDirective,Na=!1,A=!1,E=t.hasElementTranscludeDirective,Y=e.$$element=D(d),L,ga,y,Ga=f,N,R=0,ya=a.length;R<ya;R++){L=a[R];var W=L.$$start,Vb=L.$$end;W&&(Y=K(d,W,Vb));y=u;if(C>L.priority)break;if(y=L.scope)L.templateUrl||(G(y)?(xa("new/isolated scope",Q||P,L,Y),Q=L):xa("new/isolated scope",
Q,L,Y)),P=P||L;ga=L.name;!L.templateUrl&&L.controller&&(y=L.controller,aa=aa||{},xa("'"+ga+"' controller",aa[ga],L,Y),aa[ga]=L);if(y=L.transclude)Na=!0,L.$$tlb||(xa("transclusion",fa,L,Y),fa=L),"element"==y?(E=!0,C=L.priority,y=Y,Y=e.$$element=D(X.createComment(" "+ga+": "+e[ga]+" ")),d=Y[0],yb(g,Ya.call(y,0),d),Ga=H(y,f,C,h&&h.name,{nonTlbTranscludeDirective:fa})):(y=D(Pb(d)).contents(),Y.empty(),Ga=H(y,f));if(L.template)if(A=!0,xa("template",ca,L,Y),ca=L,y=F(L.template)?L.template(Y,e):L.template,
y=Oc(y),L.replace){h=L;y=Nb.test(y)?Pc(S(L.templateNamespace,U(y))):[];d=y[0];if(1!=y.length||d.nodeType!==ka)throw ia("tplrt",ga,"");yb(g,Y,d);ya={$attr:{}};y=O(d,[],ya);var ba=a.splice(R+1,a.length-(R+1));Q&&Ma(y);a=a.concat(y).concat(ba);z(e,ya);ya=a.length}else Y.html(y);if(L.templateUrl)A=!0,xa("template",ca,L,Y),ca=L,L.replace&&(h=L),M=w(a.splice(R,a.length-R),Y,e,g,Na&&Ga,l,q,{controllerDirectives:aa,newIsolateScopeDirective:Q,templateDirective:ca,nonTlbTranscludeDirective:fa}),ya=a.length;
else if(L.compile)try{N=L.compile(Y,e,Ga),F(N)?s(null,N,W,Vb):N&&s(N.pre,N.post,W,Vb)}catch(kf){c(kf,sa(Y))}L.terminal&&(M.terminal=!0,C=Math.max(C,L.priority))}M.scope=P&&!0===P.scope;M.transcludeOnThisElement=Na;M.elementTranscludeOnThisElement=E;M.templateOnThisElement=A;M.transclude=Ga;t.hasElementTranscludeDirective=E;return M}function Ma(a){for(var b=0,c=a.length;b<c;b++)a[b]=lc(a[b],{$$isolateScope:!0})}function fa(b,e,f,g,h,k,l){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var p;e=
a.get(e+"Directive");for(var t=0,s=e.length;t<s;t++)try{p=e[t],(g===u||g>p.priority)&&-1!=p.restrict.indexOf(f)&&(k&&(p=lc(p,{$$start:k,$$end:l})),b.push(p),h=p)}catch(v){c(v)}}return h}function z(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(P(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+
";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function w(a,b,c,d,e,f,g,h){var k=[],l,p,n=b[0],t=a.shift(),q=E({},t,{templateUrl:null,transclude:null,replace:null,$$originalDirective:t}),v=F(t.templateUrl)?t.templateUrl(b,c):t.templateUrl,J=t.templateNamespace;b.empty();s(T.getTrustedResourceUrl(v)).then(function(s){var C,T;s=Oc(s);if(t.replace){s=Nb.test(s)?Pc(S(J,U(s))):[];C=s[0];if(1!=s.length||C.nodeType!==ka)throw ia("tplrt",t.name,v);s={$attr:{}};yb(d,b,C);var M=O(C,
[],s);G(t.scope)&&Ma(M);a=M.concat(a);z(c,s)}else C=n,b.html(s);a.unshift(q);l=ca(a,C,c,e,b,t,f,g,h);r(d,function(a,c){a==C&&(d[c]=b[0])});for(p=Q(b[0].childNodes,e);k.length;){s=k.shift();T=k.shift();var H=k.shift(),K=k.shift(),M=b[0];if(!s.$$destroyed){if(T!==n){var x=T.className;h.hasElementTranscludeDirective&&t.replace||(M=Pb(C));yb(H,D(T),M);P(D(M),x)}T=l.transcludeOnThisElement?aa(s,l.transclude,K):K;l(p,s,M,d,T)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?(k.push(b),k.push(c),
k.push(d),k.push(a)):(l.transcludeOnThisElement&&(a=aa(b,l.transclude,e)),l(p,b,c,d,a)))}}function y(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function xa(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,sa(d));}function Y(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&H.$$addBindingClass(a);return function(a,c){var e=c.parent();b||H.$$addBindingClass(e);H.$$addBindingInfo(e,d.expressions);a.$watch(d,
function(a){c[0].nodeValue=a})}}})}function S(a,b){a=N(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Ga(a,b){if("srcdoc"==b)return T.HTML;var c=pa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return T.RESOURCE_URL}function R(a,c,d,e,f){var k=b(d,!0);if(k){if("multiple"===e&&"select"===pa(a))throw ia("selmulti",sa(a));c.push({priority:100,compile:function(){return{pre:function(c,
d,l){d=l.$$observers||(l.$$observers={});if(h.test(e))throw ia("nodomevents");l[e]&&(k=b(l[e],!0,Ga(a,e),g[e]||f))&&(l[e]=k(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(k,function(a,b){"class"===e&&a!=b?l.$updateClass(a,b):l.$set(e,a)}))}}}})}}function yb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=
c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);D(c).data(D(d).data());ma?(Lb=!0,ma.cleanData([d])):delete D.cache[d[D.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],D(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return E(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,sa(d))}}var Xb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr=
{};this.$$element=a};Xb.prototype={$normalize:ua,$addClass:function(a){a&&0<a.length&&C.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&C.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Qc(a,b);c&&c.length&&C.addClass(this.$$element,c);(c=Qc(b,a))&&c.length&&C.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Jc(f,a),h=df(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=
e=Kb(a,"-"));g=pa(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=M(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=U(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var p=2*l,g=g+M(U(h[p]),!0),g=g+(" "+U(h[p+1]));h=U(h[2*l]).split(/\s/);g+=M(U(h[0]),!0);2===h.length&&(g+=" "+U(h[1]));this[a]=b=g}!1!==d&&(null===b||b===u?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&
r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=wa()),e=d[a]||(d[a]=[]);e.push(b);x.$evalAsync(function(){e.$$inter||b(c[a])});return function(){Wa(e,b)}}};var ga=b.startSymbol(),Na=b.endSymbol(),Oc="{{"==ga||"}}"==Na?Ta:function(a){return a.replace(/\{\{/g,ga).replace(/}}/g,Na)},ya=/^ngAttr[A-Z]/;H.$$addBindingInfo=l?function(a,b){var c=a.data("$binding")||[];B(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;H.$$addBindingClass=l?
function(a){P(a,"ng-binding")}:A;H.$$addScopeInfo=l?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;H.$$addScopeClass=l?function(a,b){P(a,b?"ng-isolate-scope":"ng-scope")}:A;return H}]}function ua(b){return ab(b.replace(lf,""))}function Qc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],k=0;k<e.length;k++)if(g==e[k])continue a;c+=(0<c.length?" ":"")+g}return c}function Pc(b){b=D(b);var a=b.length;if(1>=a)return b;for(;a--;)8===
b[a].nodeType&&mf.call(b,a,1);return b}function Ae(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ka(a,"controller");G(a)?E(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!G(a.$scope))throw y("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,k,h,l){var m,q,p;h=!0===h;l&&I(l)&&(p=l);I(g)&&(l=g.match(c),q=l[1],p=p||l[3],g=b.hasOwnProperty(q)?b[q]:tc(k.$scope,q,!0)||(a?tc(e,q,!0):u),nb(g,q,!0));
if(h)return h=function(){},h.prototype=(B(g)?g[g.length-1]:g).prototype,m=new h,p&&f(k,p,m,q||g.name),E(function(){d.invoke(g,m,k,q);return m},{instance:m,identifier:p});m=d.instantiate(g,k,q);p&&f(k,p,m,q||g.name);return m}}]}function Be(){this.$get=["$window",function(b){return D(b.document)}]}function Ce(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Rc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=N(U(b.substr(0,e)));
d=U(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Sc(b){var a=G(b)?b:u;return function(c){a||(a=Rc(b));return c?a[N(c)]||null:a}}function Tc(b,a,c){if(F(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function Fe(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d,e){if(I(d)){d=d.replace(c,"");var f=e("Content-Type");if(f&&0===f.indexOf("application/json")||b.test(d)&&a.test(d))d=
oc(d)}return d}],transformRequest:[function(a){return G(a)&&"[object File]"!==Ia.call(a)&&"[object Blob]"!==Ia.call(a)?ra(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:qa(d),put:qa(d),patch:qa(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=!1;this.useApplyAsync=function(a){return z(a)?(f=!!a,this):f};var g=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,q,p){function n(a){function b(a){var d=
E({},a);d.data=a.data?Tc(a.data,a.headers,c.transformResponse):a.data;a=a.status;return 200<=a&&300>a?d:q.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=E({},a.headers),d,f,b=E({},b.common,b[N(a.method)]);a:for(d in b){a=N(d);for(f in c)if(N(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){F(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);E(c,a);c.headers=d;c.method=pb(c.method);var f=
[function(a){d=a.headers;var c=Tc(a.data,Sc(d),a.transformRequest);w(c)&&r(d,function(a,b){"content-type"===N(b)&&delete d[b]});w(a.withCredentials)&&!w(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,c,d).then(b,b)},u],g=q.when(c);for(r(x,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),g=g.then(a,h)}g.success=function(a){g.then(function(b){a(b.data,
b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function s(c,g,l){function p(a,b,c,e){function g(){s(b,a,c,e)}O&&(200<=a&&300>a?O.put(V,[a,b,Rc(c),e]):O.remove(V));f?d.$applyAsync(g):(g(),d.$$phase||d.$apply())}function s(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?x.resolve:x.reject)({data:a,status:b,headers:Sc(d),config:c,statusText:e})}function H(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,
1)}var x=q.defer(),r=x.promise,O,K,V=J(c.url,c.params);n.pendingRequests.push(c);r.then(H,H);!c.cache&&!e.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(O=G(c.cache)?c.cache:G(e.cache)?e.cache:v);if(O)if(K=O.get(V),z(K)){if(K&&F(K.then))return K.then(H,H),K;B(K)?s(K[1],K[0],qa(K[2]),K[3]):s(K,200,{},"OK")}else O.put(V,r);w(K)&&((K=Uc(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:u)&&(l[c.xsrfHeaderName||e.xsrfHeaderName]=K),a(c.method,V,g,p,l,c.timeout,c.withCredentials,c.responseType));
return r}function J(a,b){if(!b)return a;var c=[];zd(b,function(a,b){null===a||w(a)||(B(a)||(a=[a]),r(a,function(a){G(a)&&(a=ea(a)?a.toISOString():ra(a));c.push(Da(b)+"="+Da(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var v=c("$http"),x=[];r(g,function(a){x.unshift(I(a)?p.get(a):p.invoke(a))});n.pendingRequests=[];(function(a){r(arguments,function(a){n[a]=function(b,c){return n(E(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){n[a]=
function(b,c,d){return n(E(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=e;return n}]}function nf(){return new S.XMLHttpRequest}function Ge(){this.$get=["$browser","$window","$document",function(b,a,c){return of(b,nf,b.defer,a.angular.callbacks,c[0])}]}function of(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);
f=null;var g=-1,n="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),n=a.type,g="error"===a.type?404:200);c&&c(g,n)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,k,h,l,m,q,p,n){function s(){x&&x();t&&t.abort()}function J(a,d,e,f,g){C&&c.cancel(C);x=t=null;a(d,e,f,g);b.$$completeOutstandingRequest(A)}b.$$incOutstandingRequestCount();k=k||b.url();if("jsonp"==N(e)){var v="_"+(d.counter++).toString(36);d[v]=function(a){d[v].data=
a;d[v].called=!0};var x=f(k.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){J(l,a,d[v].data,"",b);d[v]=A})}else{var t=a();t.open(e,k,!0);r(m,function(a,b){z(a)&&t.setRequestHeader(b,a)});t.onload=function(){var a=t.statusText||"",b="response"in t?t.response:t.responseText,c=1223===t.status?204:t.status;0===c&&(c=b?200:"file"==za(k).protocol?404:0);J(l,c,b,t.getAllResponseHeaders(),a)};e=function(){J(l,-1,null,null,"")};t.onerror=e;t.onabort=e;p&&(t.withCredentials=!0);if(n)try{t.responseType=
n}catch(T){if("json"!==n)throw T;}t.send(h||null)}if(0<q)var C=c(s,q);else q&&F(q.then)&&q.then(s)}}function De(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,n,s){function J(c){return c.replace(l,b).replace(m,a)}function v(a){try{var b;var c=n?e.getTrusted(n,a):e.valueOf(a);if(null==c)b="";else{switch(typeof c){case "string":break;
case "number":c=""+c;break;default:c=ra(c)}b=c}return b}catch(g){a=Yb("interr",f,g.toString()),d(a)}}s=!!s;for(var x,t,T=0,C=[],M=[],P=f.length,H=[],r=[];T<P;)if(-1!=(x=f.indexOf(b,T))&&-1!=(t=f.indexOf(a,x+k)))T!==x&&H.push(J(f.substring(T,x))),T=f.substring(x+k,t),C.push(T),M.push(c(T,v)),T=t+h,r.push(H.length),H.push("");else{T!==P&&H.push(J(f.substring(T)));break}if(n&&1<H.length)throw Yb("noconcat",f);if(!g||C.length){var u=function(a){for(var b=0,c=C.length;b<c;b++){if(s&&w(a[b]))return;H[r[b]]=
a[b]}return H.join("")};return E(function(a){var b=0,c=C.length,e=Array(c);try{for(;b<c;b++)e[b]=M[b](a);return u(e)}catch(g){a=Yb("interr",f,g.toString()),d(a)}},{exp:f,expressions:C,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(M,function(c,e){var f=u(c);F(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var k=b.length,h=a.length,l=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Ee(){this.$get=
["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,k,h,l){var m=a.setInterval,q=a.clearInterval,p=0,n=z(l)&&!l,s=(n?d:c).defer(),J=s.promise;h=z(h)?h:0;J.then(null,null,e);J.$$intervalId=m(function(){s.notify(p++);0<h&&p>=h&&(s.resolve(p),q(J.$$intervalId),delete f[J.$$intervalId]);n||b.$apply()},k);f[J.$$intervalId]=s;return J}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):
!1};return e}]}function Md(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",short:"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Zb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=lb(b[a]);return b.join("/")}function Vc(b,a,c){b=za(b,c);a.$$protocol=
b.protocol;a.$$host=b.hostname;a.$$port=ba(b.port)||pf[b.protocol]||null}function Wc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=za(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=qc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function va(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Fa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function $b(b){return b.substr(0,
Fa(b).lastIndexOf("/")+1)}function ac(b,a){this.$$html5=!0;a=a||"";var c=$b(b);Vc(b,this,b);this.$$parse=function(a){var e=va(c,a);if(!I(e))throw cb("ipthprfx",a,c);Wc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Ib(this.$$search),b=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Zb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=va(b,d))!==u?
(g=f,g=(f=va(a,f))!==u?c+(va("/",f)||f):b+g):(f=va(c,d))!==u?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function bc(b,a){var c=$b(b);Vc(b,this,b);this.$$parse=function(d){var e=va(b,d)||va(c,d),e="#"==e.charAt(0)?va(a,e):this.$$html5?e:"";if(!I(e))throw cb("ihshprfx",d,a);Wc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Ib(this.$$search),e=this.$$hash?
"#"+lb(this.$$hash):"";this.$$url=Zb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Fa(b)==Fa(a)?(this.$$parse(a),!0):!1}}function Xc(b,a){this.$$html5=!0;bc.apply(this,arguments);var c=$b(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Fa(d)?f=d:(g=va(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Ib(this.$$search),e=this.$$hash?"#"+lb(this.$$hash):
"";this.$$url=Zb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function zb(b){return function(){return this[b]}}function Yc(b,a){return function(c){if(w(c))return this[b];this[b]=a(c);this.$$compose();return this}}function He(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return Va(b)?(a.enabled=b,this):G(b)?(Va(b.enabled)&&(a.enabled=b.enabled),Va(b.requireBase)&&(a.requireBase=b.requireBase),Va(b.rewriteLinks)&&
(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a,b,c){var e=h.url(),f=h.$$state;try{d.url(a,b,c),h.$$state=d.state()}catch(g){throw h.url(e),h.$$state=f,g;}}function k(a,b){c.$broadcast("$locationChangeSuccess",h.absUrl(),a,h.$$state,b)}var h,l;l=d.baseHref();var m=d.url(),q;if(a.enabled){if(!l&&a.requireBase)throw cb("nobase");q=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(l||"/");l=e.history?ac:Xc}else q=Fa(m),
l=bc;h=new l(q,"#"+b);h.$$parseLinkUrl(m,m);h.$$state=d.state();var p=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&2!=b.which){for(var e=D(b.target);"a"!==pa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");G(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=za(g.animVal).href);p.test(g)||!g||e.attr("target")||b.isDefaultPrevented()||!h.$$parseLinkUrl(g,k)||(b.preventDefault(),h.absUrl()!=
d.url()&&(c.$apply(),S.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=m&&d.url(h.absUrl(),!0);var n=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=h.absUrl(),e=h.$$state;h.$$parse(a);h.$$state=b;c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented?(h.$$parse(d),h.$$state=e,g(d,!1,e)):(n=!1,k(d,e))});c.$$phase||c.$digest()});c.$watch(function(){var a=d.url(),b=d.state(),f=h.$$replace,l=a!==h.absUrl()||h.$$html5&&e.history&&b!==h.$$state;if(n||l)n=!1,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",
h.absUrl(),a,h.$$state,b).defaultPrevented?(h.$$parse(a),h.$$state=b):(l&&g(h.absUrl(),f,b===h.$$state?null:h.$$state),k(a,b))});h.$$replace=!1});return h}]}function Ie(){var b=!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||
{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(h){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function na(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw oa("isecfld",a);return b}function Aa(b,a){if(b){if(b.constructor===
b)throw oa("isecfn",a);if(b.window===b)throw oa("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw oa("isecdom",a);if(b===Object)throw oa("isecobj",a);}return b}function cc(b){return b.constant}function Oa(b,a,c,d){Aa(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=na(a.shift(),d);var g=Aa(b[e],d);g||(g={},b[e]=g);b=g}e=na(a.shift(),d);Aa(b[e],d);return b[e]=c}function Zc(b,a,c,d,e,f){na(b,f);na(a,f);na(c,f);na(d,f);na(e,f);return function(f,k){var h=k&&k.hasOwnProperty(b)?
k:f;if(null==h)return h;h=h[b];if(!a)return h;if(null==h)return u;h=h[a];if(!c)return h;if(null==h)return u;h=h[c];if(!d)return h;if(null==h)return u;h=h[d];return e?null==h?u:h=h[e]:h}}function $c(b,a,c){var d=ad[b];if(d)return d;var e=b.split("."),f=e.length;if(a.csp)d=6>f?Zc(e[0],e[1],e[2],e[3],e[4],c):function(a,b){var d=0,g;do g=Zc(e[d++],e[d++],e[d++],e[d++],e[d++],c)(a,b),b=u,a=g;while(d<f);return g};else{var g="";r(e,function(a,b){na(a,c);g+="if(s == null) return undefined;\ns="+(b?"s":'((l&&l.hasOwnProperty("'+
a+'"))?l:s)')+"."+a+";\n"});g+="return s;";a=new Function("s","l",g);a.toString=da(g);d=a}d.sharedGetter=!0;d.assign=function(a,c){return Oa(a,b,c,b)};return ad[b]=d}function Je(){var b=wa(),a={csp:!1};this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&
b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=a.valueOf(),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function k(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&b.valueOf());return h},b,c)}for(var l=[],m=0,q=e.length;m<q;m++)l[m]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&k.valueOf()}b&&(h=
d(a));return h},b,c)}function h(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;F(b)&&b.apply(this,arguments);z(a)&&d.$$postDigest(function(){z(f)&&e()})},c)}function l(a,b,c,d){function e(a){var b=!0;r(a,function(a){z(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;F(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){F(b)&&
b.apply(this,arguments);e()},c)}function q(a,b){if(!b)return a;var c=function(c,d){var e=a(c,d),f=b(e,c,d);return z(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==k?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=k,c.inputs=[a]);return c}a.csp=d.csp;return function(d,f){var g,J,v;switch(typeof d){case "string":return v=d=d.trim(),g=b[v],g||(":"===d.charAt(0)&&":"===d.charAt(1)&&(J=!0,d=d.substring(2)),g=new dc(a),g=(new db(g,c,a)).parse(d),g.constant?g.$$watchDelegate=m:J?(g=e(g),
g.$$watchDelegate=g.literal?l:h):g.inputs&&(g.$$watchDelegate=k),b[v]=g),q(g,f);case "function":return q(d,f);default:return q(A,f)}}}]}function Le(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return bd(function(a){b.$evalAsync(a)},a)}]}function Me(){this.$get=["$browser","$exceptionHandler",function(b,a){return bd(function(a){b.defer(a)},a)}]}function bd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state=
{status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{F(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var k=
y("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(k("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,
e;e=c(this,this.$$resolve,this.$$reject);try{if(G(b)||F(b))d=b&&b.then;F(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&
d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(F(b)?b(c):c)}catch(h){a(h)}}})}};var h=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{F(c)&&(d=c())}catch(e){return h(e,!1)}return d&&F(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},q=function n(a){if(!F(a))throw k("norslvr",a);if(!(this instanceof
n))return new n(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};q.defer=function(){return new g};q.reject=function(a){var b=new g;b.reject(a);return b.promise};q.when=m;q.all=function(a){var b=new g,c=0,d=B(a)?[]:{};r(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return q}function Ve(){this.$get=["$window","$timeout",function(b,
a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Ke(){var b=10,a=y("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler",
"$parse","$browser",function(e,f,g,k){function h(){this.$id=++hb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function l(b){if(s.$$phase)throw a("inprog",s.$$phase);s.$$phase=b}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function q(){}function p(){for(;x.length;)try{x.shift()()}catch(a){f(a)}d=
null}function n(){null===d&&(d=k.defer(function(){s.$apply(p)}))}h.prototype={constructor:h,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new h,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++hb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?
(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:q,get:e,exp:a,eq:!!d};c=null;F(b)||(h.fn=A);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Wa(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=
!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(G(e))if(Ra(e))for(f!==p&&(f=p,s=f.length=0,l++),a=e.length,s!==a&&(l++,f.length=s=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===
g||(l++,f[b]=g);else{f!==n&&(f=n={},s=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(s++,f[b]=g,l++));if(s>a)for(b in l++,f)e.hasOwnProperty(b)||(s--,delete f[b])}else f!==e&&(f=e,l++);return l}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),p=[],n={},q=!0,s=0;return this.$watch(m,function(){q?(q=!1,b(e,e,d)):b(e,h,d);if(k)if(G(e))if(Ra(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)Hb.call(e,
a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,h,m,n,r,Q=b,x,O=[],K,u,z;l("$digest");k.$$checkUrlChange();this===s&&null!==d&&(k.defer.cancel(d),p());c=null;do{r=!1;for(x=this;J.length;){try{z=J.shift(),z.scope.$eval(z.expression)}catch(y){f(y)}c=null}a:do{if(m=x.$$watchers)for(n=m.length;n--;)try{if(e=m[n])if((g=e.get(x))!==(h=e.last)&&!(e.eq?la(g,h):"number"===typeof g&&"number"===typeof h&&isNaN(g)&&isNaN(h)))r=!0,c=e,e.last=e.eq?Ca(g,null):g,e.fn(g,h===q?g:h,x),5>Q&&(K=4-Q,O[K]||(O[K]=
[]),u=F(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,u+="; newVal: "+ra(g)+"; oldVal: "+ra(h),O[K].push(u));else if(e===c){r=!1;break a}}catch(D){f(D)}if(!(m=x.$$childHead||x!==this&&x.$$nextSibling))for(;x!==this&&!(m=x.$$nextSibling);)x=x.$parent}while(x=m);if((r||J.length)&&!Q--)throw s.$$phase=null,a("infdig",b,ra(O));}while(r||J.length);for(s.$$phase=null;v.length;)try{v.shift()()}catch(A){f(A)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=
!0;if(this!==s){for(var b in this.$$listenerCount)m(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=function(){return A};this.$$listeners={};this.$parent=
this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){s.$$phase||J.length||k.defer(function(){J.length&&s.$digest()});J.push({scope:this,expression:a})},$$postDigest:function(a){v.push(a)},$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){f(b)}finally{s.$$phase=null;try{s.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&
x.push(b);n()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[c.indexOf(b)]=null;m(e,1,a)}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=jb([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;
l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(p){f(p)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=jb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var s=new h,J=s.$$asyncQueue=[],v=s.$$postDigestQueue=[],x=s.$$applyAsyncQueue=[];return s}]}function Nd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return z(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.$get=
function(){return function(c,d){var e=d?a:b,f;f=za(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function qf(b){if("self"===b)return b;if(I(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(ib(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function cd(b){var a=[];z(b)&&r(b,function(b){a.push(qf(b))});return a}function Oe(){this.SCE_CONTEXTS=
ja;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=cd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=cd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Uc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),k={};k[ja.HTML]=e(g);k[ja.CSS]=e(g);k[ja.URL]=e(g);k[ja.JS]=e(g);k[ja.RESOURCE_URL]=e(k[ja.URL]);return{trustAs:function(a,b){var c=k.hasOwnProperty(a)?k[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===u||""===e)return e;var g=k.hasOwnProperty(c)?k[c]:null;if(g&&e instanceof
g)return e.$$unwrapTrustedValue();if(c===ja.RESOURCE_URL){var g=za(e.toString()),q,p,n=!1;q=0;for(p=b.length;q<p;q++)if(d(b[q],g)){n=!0;break}if(n)for(q=0,p=a.length;q<p;q++)if(d(a[q],g)){n=!1;break}if(n)return e;throw Ba("insecurl",e.toString());}if(c===ja.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Ne(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$document","$parse","$sceDelegate",function(a,
c,d){if(b&&8>a[0].documentMode)throw Ba("iequirks");var e=qa(ja);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Ta);e.parseAs=function(a,b){var d=c(b);return d.literal&&d.constant?d:c(b,function(b){return e.getTrusted(a,b)})};var f=e.parseAs,g=e.getTrusted,k=e.trustAs;r(ja,function(a,b){var c=N(b);e[ab("parse_as_"+c)]=function(b){return f(a,b)};e[ab("get_trusted_"+c)]=function(b){return g(a,
b)};e[ab("trust_as_"+c)]=function(b){return k(a,b)}});return e}]}function Pe(){this.$get=["$window","$document",function(b,a){var c={},d=ba((/android (\d+)/.exec(N((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,k=/^(Moz|webkit|O|ms)(?=[A-Z])/,h=f.body&&f.body.style,l=!1,m=!1;if(h){for(var q in h)if(l=k.exec(q)){g=l[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in h&&"webkit");l=!!("transition"in h||g+"Transition"in h);m=!!("animation"in
h||g+"Animation"in h);!d||l&&m||(l=I(f.body.style.webkitTransition),m=I(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"==a&&9==Pa)return!1;if(w(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Za(),vendorPrefix:g,transitions:l,animations:m,android:d}}]}function Re(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){function g(){k.totalPendingRequests--;if(!f)throw ia("tpload",e);return c.reject()}
var k=d;k.totalPendingRequests++;return a.get(e,{cache:b}).then(function(a){a=a.data;if(!a||0===a.length)return g();k.totalPendingRequests--;b.put(e,a);return a},g)}d.totalPendingRequests=0;return d}]}function Se(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=ta.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+b+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=
d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(c?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Te(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,h,l){var m=z(l)&&
!l,q=(m?d:c).defer(),p=q.promise;h=a.defer(function(){try{q.resolve(f())}catch(a){q.reject(a),e(a)}finally{delete g[p.$$timeoutId]}m||b.$apply()},h);p.$$timeoutId=h;g[h]=q;return p}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function za(b,a){var c=b;Pa&&(Z.setAttribute("href",c),c=Z.href);Z.setAttribute("href",c);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):
"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Uc(b){b=I(b)?za(b):b;return b.protocol===dd.protocol&&b.host===dd.host}function Ue(){this.$get=da(S)}function Bc(b){function a(c,d){if(G(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
"Filter")}}];a("currency",ed);a("date",fd);a("filter",rf);a("json",sf);a("limitTo",tf);a("lowercase",uf);a("number",gd);a("orderBy",hd);a("uppercase",vf)}function rf(){return function(b,a,c){if(!B(b))return b;var d=typeof c,e=[];e.check=function(a,b){for(var c=0;c<e.length;c++)if(!e[c](a,b))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return ta.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Hb.call(a,d)&&c(a[d],
b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"===typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a=
{$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var k=b[g];e.check(k,g)&&d.push(k)}return d}}function ed(b){var a=b.NUMBER_FORMATS;return function(b,d,e){w(d)&&(d=a.CURRENCY_SYM);w(e)&&(e=2);return null==b?b:id(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function gd(b){var a=b.NUMBER_FORMATS;return function(b,
d){return null==b?b:id(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function id(b,a,c,d,e){if(!isFinite(b)||G(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",k="",h=[],l=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?(g="0",b=0):(k=g,l=!0)}if(l)0<e&&-1<b&&1>b&&(k=b.toFixed(e));else{g=(g.split(jd)[1]||"").length;w(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(jd);g=b[0];
b=b[1]||"";var m=0,q=a.lgSize,p=a.gSize;if(g.length>=q+p)for(m=g.length-q,l=0;l<m;l++)0===(m-l)%p&&0!==l&&(k+=c),k+=g.charAt(l);for(l=m;l<g.length;l++)0===(g.length-l)%q&&0!==l&&(k+=c),k+=g.charAt(l);for(;b.length<e;)b+="0";e&&"0"!==e&&(k+=d+b.substr(0,e))}h.push(f?a.negPre:a.posPre);h.push(k);h.push(f?a.negSuf:a.posSuf);return h.join("")}function Ab(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=
e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ab(e,a,d)}}function Bb(b,a){return function(c,d){var e=c["get"+b](),f=pb(a?"SHORT"+b:b);return d[f][e]}}function kd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function ld(b){return function(a){var c=kd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Ab(a,b)}}function fd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,k=b[8]?
a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ba(b[9]+b[10]),g=ba(b[9]+b[11]));k.call(a,ba(b[1]),ba(b[2])-1,ba(b[3]));f=ba(b[4]||0)-f;g=ba(b[5]||0)-g;k=ba(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",k=[],h,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;I(c)&&(c=wf.test(c)?ba(c):a(c));W(c)&&(c=new Date(c));
if(!ea(c))return c;for(;e;)(l=xf.exec(e))?(k=jb(k,l,1),e=k.pop()):(k.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(k,function(a){h=yf[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function sf(){return function(b){return ra(b,!0)}}function tf(){return function(b,a){W(b)&&(b=b.toString());if(!B(b)&&!I(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):ba(a);if(I(b))return a?0<=a?b.slice(0,a):
b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function hd(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ea(a)&&ea(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ra(a))return a;c=B(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=
!1,d=a||Ta;if(I(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],k=0;k<a.length;k++)g.push(a[k]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ha(b){F(b)&&(b={link:b});b.restrict=b.restrict||"AC";return da(b)}
function md(b,a,c,d,e){var f=this,g=[],k=f.$$parentForm=b.parent().controller("form")||Cb;f.$error={};f.$$success={};f.$pending=u;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;k.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ka(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,
b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});Wa(g,a)};nd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Wa(d,c),0===d.length&&delete a[b])},parentForm:k,$animate:d});f.$setDirty=function(){d.removeClass(b,Qa);d.addClass(b,Db);f.$dirty=
!0;f.$pristine=!1;k.$setDirty()};f.$setPristine=function(){d.setClass(b,Qa,Db+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;k.$setSubmitted()}}function ec(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function eb(b,a,c,d,e,f){a.prop("validity");var g=a[0].placeholder,k={},h=N(a[0].type);if(!e.android){var l=
!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;m()})}var m=function(b){if(!l){var e=a.val(),f=b&&b.type;Pa&&"input"===(b||k).type&&a[0].placeholder!==g?g=a[0].placeholder:("password"===h||c.ngTrim&&"false"===c.ngTrim||(e=U(e)),(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,f))}};if(e.hasEvent("input"))a.on("input",m);else{var q,p=function(a){q||(q=f.defer(function(){m(a);q=null}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&
19>b||37<=b&&40>=b||p(a)});if(e.hasEvent("paste"))a.on("paste cut",p)}a.on("change",m);d.$render=function(){a.val(d.$isEmpty(d.$modelValue)?"":d.$viewValue)}}function Eb(b,a){return function(c,d){var e,f;if(ea(c))return c;if(I(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(zf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/
1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function fb(b,a,c,d){return function(e,f,g,k,h,l,m){function q(a){return z(a)?ea(a)?a:c(a):u}od(e,f,g,k);eb(e,f,g,k,h,l);var p=k&&k.$options&&k.$options.timezone,n;k.$$parserName=b;k.$parsers.push(function(b){return k.$isEmpty(b)?null:a.test(b)?(b=c(b,n),"UTC"===p&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):u});k.$formatters.push(function(a){if(k.$isEmpty(a))n=
null;else{if(!ea(a))throw Fb("datefmt",a);if((n=a)&&"UTC"===p){var b=6E4*n.getTimezoneOffset();n=new Date(n.getTime()+b)}return m("date")(a,d,p)}return""});if(z(g.min)||g.ngMin){var s;k.$validators.min=function(a){return k.$isEmpty(a)||w(s)||c(a)>=s};g.$observe("min",function(a){s=q(a);k.$validate()})}if(z(g.max)||g.ngMax){var r;k.$validators.max=function(a){return k.$isEmpty(a)||w(r)||c(a)<=r};g.$observe("max",function(a){r=q(a);k.$validate()})}k.$isEmpty=function(a){return!a||a.getTime&&a.getTime()!==
a.getTime()}}}function od(b,a,c,d){(d.$$hasNativeValidators=G(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?u:b})}function pd(b,a,c,d,e){if(z(d)){b=b(d);if(!b.constant)throw y("ngModel")("constexpr",c,d);return b(a)}return e}function nd(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Kb(b,"-"):"";a(gb+b,!0===c);a(qd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,k=
b.unset,h=b.parentForm,l=b.$animate;f[qd]=!(f[gb]=e.hasClass(gb));d.$setValidity=function(b,e,f){e===u?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&k(d.$pending,b,f),rd(d.$pending)&&(d.$pending=u));Va(e)?e?(k(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),k(d.$$success,b,f)):(k(d.$error,b,f),k(d.$$success,b,f));d.$pending?(a(sd,!0),d.$valid=d.$invalid=u,c("",null)):(a(sd,!1),d.$valid=rd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?u:d.$error[b]?!1:
d.$$success[b]?!0:null;c(b,e);h.$setValidity(b,e,d)}}function rd(b){if(b)for(var a in b)return!1;return!0}function fc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!B(a)){if(I(a))return a.split(" ");if(G(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,k){function h(a,b){var c=g.data("$classCounts")||
{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===a||f.$index%2===a){var l=e(b||[]);if(!m){var n=h(l,1);k.$addClass(n)}else if(!la(b,m)){var s=e(m),n=d(l,s),l=d(s,l),n=h(n,1),l=h(l,-1);n&&n.length&&c.addClass(g,n);l&&l.length&&c.removeClass(g,l)}}m=qa(b)}var m;f.$watch(k[b],l,!0);k.$observe("class",function(a){l(f.$eval(k[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=
e(f.$eval(k[b]));g===a?(g=h(l,1),k.$addClass(g)):(g=h(l,-1),k.$removeClass(g))}})}}}]}var Af=/^\/(.+)\/([a-z]*)$/,N=function(b){return I(b)?b.toLowerCase():b},Hb=Object.prototype.hasOwnProperty,pb=function(b){return I(b)?b.toUpperCase():b},Pa,D,ma,Ya=[].slice,mf=[].splice,Bf=[].push,Ia=Object.prototype.toString,Xa=y("ng"),ta=S.angular||(S.angular={}),$a,hb=0;Pa=X.documentMode;A.$inject=[];Ta.$inject=[];var B=Array.isArray,U=function(b){return I(b)?b.trim():b},Za=function(){if(z(Za.isActive_))return Za.isActive_;
var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Za.isActive_=b},mb=["ng-","data-ng-","ng:","x-ng-"],Hd=/[A-Z]/g,sc=!1,Lb,ka=1,kb=3,Ld={full:"1.3.0",major:1,minor:3,dot:0,codeName:"superluminal-nudge"};R.expando="ng339";var ub=R.cache={},bf=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var Xe=/([\:\-\_]+(.))/g,Ye=/^moz([A-Z])/,Cf={mouseleave:"mouseout",mouseenter:"mouseover"},Ob=y("jqLite"),af=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,
Nb=/<|&#?\w+;/,Ze=/<([\w:]+)/,$e=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;ha.th=ha.td;var Ja=R.prototype={ready:function(b){function a(){c||(c=
!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(S).on("load",a),this.on("DOMContentLoaded",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?D(this[b]):D(this[this.length+b])},length:0,push:Bf,sort:[].sort,splice:[].splice},wb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){wb[N(b)]=b});var Kc={};r("input select option textarea button form details".split(" "),
function(b){Kc[b]=!0});var Lc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Qb,removeData:sb},function(b,a){R[a]=b});r({data:Qb,inheritedData:vb,scope:function(b){return D.data(b,"$scope")||vb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return D.data(b,"$isolateScope")||D.data(b,"$isolateScopeNoTemplate")},controller:Gc,injector:function(b){return vb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Rb,
css:function(b,a,c){a=ab(a);if(z(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=N(a);if(wb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||A).specified?d:u;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(w(b)){var d=a.nodeType;return d===ka||d===kb?a.textContent:""}a.textContent=
b}b.$dv="";return b}(),val:function(b,a){if(w(a)){if(b.multiple&&"select"===pa(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(w(a))return b.innerHTML;rb(b,!0);b.innerHTML=a},empty:Hc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Hc&&(2==b.length&&b!==Rb&&b!==Gc?a:d)===u){if(G(a)){for(e=0;e<g;e++)if(b===Qb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;
g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var k=b(this[f],a,d);e=e?e+k:k}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:sb,on:function a(c,d,e,f){if(z(f))throw Ob("onargs");if(Cc(c)){var g=tb(c,!0);f=g.events;var k=g.handle;k||(k=g.handle=ef(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],h=g.length;h--;){d=g[h];var l=f[d];l||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Cf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||k(a,d)}):"$destroy"!==d&&c.addEventListener(d,
k,!1),l=f[d]);l.push(e)}}},off:Fc,one:function(a,c,d){a=D(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;rb(a);r(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){a.nodeType===ka&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===ka||11===d){c=new R(c);for(var d=0,e=c.length;d<
e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===ka){var d=a.firstChild;r(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=D(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Ic,detach:function(a){Ic(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var k=c[f];e.insertBefore(k,d.nextSibling);d=k}},addClass:Tb,removeClass:Sb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=
d;w(f)&&(f=!Rb(a,c));(f?Tb:Sb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Pb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,k=tb(a);if(k=(k=k&&k.events)&&k[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:g,target:a},c.type&&(e=E(e,c)),c=qa(k),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,k=0,h=this.length;k<h;k++)w(g)?(g=a(this[k],c,e,f),z(g)&&(g=D(g))):Ec(g,a(this[k],c,e,f));return z(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});bb.prototype={put:function(a,
c){this[La(a,this.nextUid)]=c},get:function(a){return this[La(a,this.nextUid)]},remove:function(a){var c=this[a=La(a,this.nextUid)];delete this[a];return c}};var Nc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,gf=/,/,hf=/^\s*(_?)(\S+?)\1\s*$/,Mc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ea=y("$injector");Jb.$$annotate=Ub;var Df=y("$animate"),xe=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Df("notcsel",c);this.$$selectors[c.substr(1)]=e;
a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=wa();r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):
!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function k(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function h(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function l(a,c){if(ta.isObject(c)){var d=E(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){l(a,{from:c,to:d});return h()},enter:function(a,c,d,e){l(a,e);d?d.after(a):c.prepend(a);return h()},leave:function(a,c){a.remove();return h()},move:function(a,c,d,e){return this.enter(a,
c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=D(a);c=I(c)?c:B(c)?c.join(" "):"";r(a,function(a){Tb(a,c)});l(a,d);return h()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=D(a);c=I(c)?c:B(c)?c.join(" "):"";r(a,function(a){Sb(a,c)});l(a,d);return h()},setClass:function(a,c,d,e){var h=this,l=!1;a=D(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ta.extend(m.options||{},e)):
(m={classes:{},options:e},l=!0);e=m.classes;c=B(c)?c:c.split(" ");d=B(d)?d:d.split(" ");k(e,c,!0);k(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&h.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);l(a,e);return h()},enabled:A,cancel:A}}]}],ia=y("$compile");
uc.$inject=["$provide","$$sanitizeUriProvider"];var lf=/^(x[\:\-_]|data[\:\-_])/i,Yb=y("$interpolate"),Ef=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,pf={http:80,https:443,ftp:21},cb=y("$location"),Ff={$$html5:!1,$$replace:!1,absUrl:zb("$$absUrl"),url:function(a){if(w(a))return this.$$url;a=Ef.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:zb("$$protocol"),host:zb("$$host"),port:zb("$$port"),path:Yc("$$path",function(a){a=null!==
a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(I(a)||W(a))a=a.toString(),this.$$search=qc(a);else if(G(a))a=Ca(a,{}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw cb("isrcharg");break;default:w(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Yc("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
r([Xc,bc,ac],function(a){a.prototype=Object.create(Ff);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==ac||!this.$$html5)throw cb("nostate");this.$$state=w(c)?null:c;return this}});var oa=y("$parse"),Gf=Function.prototype.call,Hf=Function.prototype.apply,If=Function.prototype.bind,Gb=wa();r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;Gb[c]=a});Gb["this"]=
function(a){return a};Gb["this"].sharedGetter=!0;var gc=E(wa(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return z(d)?z(e)?d+e:d:z(e)?e:u},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(z(d)?d:0)-(z(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,
c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Jf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},dc=function(a){this.options=a};dc.prototype={constructor:dc,lex:function(a){this.text=a;this.index=0;this.ch=u;
for(this.tokens=[];this.index<this.text.length;)if(this.ch=this.text.charAt(this.index),this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch))this.index++;else{a=this.ch+this.peek();var c=a+this.peek(2),d=gc[this.ch],e=gc[a],f=gc[c];f?(this.tokens.push({index:this.index,
text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===
a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=z(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw oa("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=N(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==
d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this.text,c="",d=this.index,e,f,g,k;this.index<this.text.length;){k=this.text.charAt(this.index);if("."===k||this.isIdent(k)||this.isNumber(k))"."===
k&&(e=this.index),c+=k;else break;this.index++}e&&"."===c[c.length-1]&&(this.index--,c=c.slice(0,-1),e=c.lastIndexOf("."),-1===e&&(e=u));if(e)for(f=this.index;f<this.text.length;){k=this.text.charAt(f);if("("===k){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(k))f++;else break}this.tokens.push({index:d,text:c,fn:Gb[c]||$c(c,this.options,a)});g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;
for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Jf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};
var db=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};db.ZERO=E(function(){return 0},{sharedGetter:!0,constant:!0});db.prototype={constructor:db,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();
else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.constant&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw oa("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===
this.tokens.length)throw oa("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return E(function(d,e){return a(d,e,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,
c,d,e){return E(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.expect(),d=this.$filter(c.text),e,f;if(this.peek(":"))for(e=
[],f=[];this.expect(":");)e.push(this.expression());c=[a].concat(e||[]);return E(function(c,k){var h=a(c,k);if(f){f[0]=h;for(h=e.length;h--;)f[h+1]=e[h](c,k);return d.apply(u,f)}return d(h)},{constant:!d.$stateful&&c.every(cc),inputs:!d.$stateful&&c})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),
E(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c,d;if(d=this.expect("?")){c=this.assignment();if(d=this.expect(":")){var e=this.assignment();return E(function(d,g){return a(d,g)?c(d,g):e(d,g)},{constant:a.constant&&c.constant&&e.constant})}this.throwError("expected :",d)}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.fn,this.logicalAND(),!0);return a},logicalAND:function(){var a=this.equality(),
c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND(),!0);return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=
this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(db.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this.text,d=this.expect().text,e=$c(d,this.options,c);return E(function(c,d,k){return e(k||a(c,d))},{assign:function(e,g,k){(k=a(e,k))||a.assign(e,k={});return Oa(k,d,g,c)}})},objectIndex:function(a){var c=
this.text,d=this.expression();this.consume("]");return E(function(e,f){var g=a(e,f),k=d(e,f);na(k,c);return g?Aa(g[k],c):u},{assign:function(e,f,g){var k=na(d(e,g),c);(g=Aa(a(e,g),c))||a.assign(e,g={});return g[k]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,k){var h=c?c(g,k):g,l=a(g,k,h)||A;if(f)for(var m=d.length;m--;)f[m]=Aa(d[m](g,k),e);Aa(h,
e);if(l){if(l.constructor===l)throw oa("isecfn",e);if(l===Gf||l===Hf||l===If)throw oa("isecff",e);}h=l.apply?l.apply(h,f):l(f[0],f[1],f[2],f[3],f[4]);return Aa(h,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var c=this.expression();a.push(c)}while(this.expect(","))}this.consume("]");return E(function(c,e){for(var f=[],g=0,k=a.length;g<k;g++)f.push(a[g](c,e));return f},{literal:!0,constant:a.every(cc),inputs:a})},object:function(){var a=[],c=[];
if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect();a.push(d.string||d.text);this.consume(":");d=this.expression();c.push(d)}while(this.expect(","))}this.consume("}");return E(function(d,f){for(var g={},k=0,h=c.length;k<h;k++)g[a[k]]=c[k](d,f);return g},{literal:!0,constant:c.every(cc),inputs:c})}};var ad=wa(),Ba=y("$sce"),ja={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ia=y("$compile"),Z=X.createElement("a"),dd=za(S.location.href,!0);Bc.$inject=
["$provide"];ed.$inject=["$locale"];gd.$inject=["$locale"];var jd=".",yf={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Bb("Month"),MMM:Bb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Bb("Day"),EEE:Bb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=
-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ab(Math[0<a?"floor":"ceil"](a/60),2)+Ab(Math.abs(a%60),2))},ww:ld(2),w:ld(1)},xf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,wf=/^\-?\d+$/;fd.$inject=["$locale"];var uf=da(N),vf=da(pb);hd.$inject=["$parse"];var Od=da({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ia.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
a.preventDefault()})}}}),qb={};r(wb,function(a,c){if("multiple"!=a){var d=ua("ng-"+c);qb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(Lc,function(a,c){qb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Af))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=ua("ng-"+
a);qb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===Ia.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(k,c),Pa&&g&&e.prop(g,f[k])):"href"===a&&f.$set(k,null)})}}}});var Cb={$addControl:A,$$renameControl:function(a,c){a.$name=c},$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A,$setSubmitted:A};md.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var td=function(a){return["$timeout",
function(c){return{name:"form",restrict:a?"EAC":"E",controller:md,compile:function(a){a.addClass(Qa).addClass(gb);return{pre:function(a,d,g,k){if(!("action"in g)){var h=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault?c.preventDefault():c.returnValue=!1};d[0].addEventListener("submit",h,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",h,!1)},0,!1)})}var l=k.$$parentForm,m=k.$name;m&&(Oa(a,m,k,m),g.$observe(g.name?"name":"ngForm",
function(c){m!==c&&(Oa(a,m,u,m),m=c,Oa(a,m,k,m),l.$$renameControl(k,m))}));d.on("$destroy",function(){l.$removeControl(k);m&&Oa(a,m,u,m);E(k,Cb)})}}}}}]},Pd=td(),be=td(!0),zf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Kf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Lf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Mf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,ud=/^(\d{4})-(\d{2})-(\d{2})$/,
vd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,hc=/^(\d{4})-W(\d\d)$/,wd=/^(\d{4})-(\d\d)$/,xd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Nf=/(\s+|^)default(\s+|$)/,Fb=new y("ngModel"),yd={text:function(a,c,d,e,f,g){eb(a,c,d,e,f,g);ec(e)},date:fb("date",ud,Eb(ud,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":fb("datetimelocal",vd,Eb(vd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:fb("time",xd,Eb(xd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:fb("week",
hc,function(a,c){if(ea(a))return a;if(I(a)){hc.lastIndex=0;var d=hc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,k=0,h=0,l=kd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),k=c.getSeconds(),h=c.getMilliseconds());return new Date(e,0,l.getDate()+f,d,g,k,h)}}return NaN},"yyyy-Www"),month:fb("month",wd,Eb(wd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){od(a,c,d,e);eb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:Mf.test(a)?parseFloat(a):u});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!W(a))throw Fb("numfmt",
a);a=a.toString()}return a});if(d.min||d.ngMin){var k;e.$validators.min=function(a){return e.$isEmpty(a)||w(k)||a>=k};d.$observe("min",function(a){z(a)&&!W(a)&&(a=parseFloat(a,10));k=W(a)&&!isNaN(a)?a:u;e.$validate()})}if(d.max||d.ngMax){var h;e.$validators.max=function(a){return e.$isEmpty(a)||w(h)||a<=h};d.$observe("max",function(a){z(a)&&!W(a)&&(a=parseFloat(a,10));h=W(a)&&!isNaN(a)?a:u;e.$validate()})}},url:function(a,c,d,e,f,g){eb(a,c,d,e,f,g);ec(e);e.$$parserName="url";e.$validators.url=function(a){return e.$isEmpty(a)||
Kf.test(a)}},email:function(a,c,d,e,f,g){eb(a,c,d,e,f,g);ec(e);e.$$parserName="email";e.$validators.email=function(a){return e.$isEmpty(a)||Lf.test(a)}},radio:function(a,c,d,e){w(d.name)&&c.attr("name",++hb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,k,h){var l=pd(h,a,"ngTrueValue",d.ngTrueValue,!0),m=pd(h,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",
function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==l};e.$formatters.push(function(a){return la(a,l)});e.$parsers.push(function(a){return a?l:m})},hidden:A,button:A,submit:A,reset:A,file:A},vc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,k,h){h[0]&&(yd[N(k.type)]||yd.text)(f,g,k,h[0],c,a,d,e)}}}}],gb="ng-valid",qd="ng-invalid",Qa="ng-pristine",
Db="ng-dirty",sd="ng-pending",Of=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,k,h,l,m){this.$modelValue=this.$viewValue=Number.NaN;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=m(d.name||
"",!1)(a);var q=f(d.ngModel),p=null,n=this,s=function(){var c=q(a);n.$options&&n.$options.getterSetter&&F(c)&&(c=c());return c},J=function(c){var d;n.$options&&n.$options.getterSetter&&F(d=q(a))?d(n.$modelValue):q.assign(a,n.$modelValue)};this.$$setOptions=function(a){n.$options=a;if(!(q.assign||a&&a.getterSetter))throw Fb("nonassign",d.ngModel,sa(e));};this.$render=A;this.$isEmpty=function(a){return w(a)||""===a||null===a||a!==a};var v=e.inheritedData("$formController")||Cb,x=0;nd({ctrl:this,$element:e,
set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:v,$animate:g});this.$setPristine=function(){n.$dirty=!1;n.$pristine=!0;g.removeClass(e,Db);g.addClass(e,Qa)};this.$setUntouched=function(){n.$touched=!1;n.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){n.$touched=!0;n.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){k.cancel(p);n.$viewValue=n.$$lastCommittedViewValue;n.$render()};this.$validate=function(){W(n.$modelValue)&&
isNaN(n.$modelValue)||this.$$parseAndValidate()};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;r(n.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(r(n.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;r(n.$asyncValidators,function(f,g){var k=f(c,d);if(!k||!F(k.then))throw Fb("$asyncValidators",k);h(g,u);a.push(k.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?l.all(a).then(function(){k(e)},A):k(!0)}function h(a,c){m===x&&n.$setValidity(a,
c)}function k(a){m===x&&e(a)}x++;var m=x;(function(a){var c=n.$$parserName||"parse";if(a===u)h(c,null);else if(h(c,a),!a)return r(n.$validators,function(a,c){h(c,null)}),r(n.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():k(!1):k(!1)};this.$commitViewValue=function(){var a=n.$viewValue;k.cancel(p);if(n.$$lastCommittedViewValue!==a||""===a&&n.$$hasNativeValidators)n.$$lastCommittedViewValue=a,n.$pristine&&(n.$dirty=!0,n.$pristine=!1,g.removeClass(e,Qa),g.addClass(e,Db),v.$setDirty()),
this.$$parseAndValidate()};this.$$parseAndValidate=function(){var a=n.$$lastCommittedViewValue,c=a,d=w(c)?u:!0;if(d)for(var e=0;e<n.$parsers.length;e++)if(c=n.$parsers[e](c),w(c)){d=!1;break}W(n.$modelValue)&&isNaN(n.$modelValue)&&(n.$modelValue=s());var f=n.$modelValue,g=n.$options&&n.$options.allowInvalid;g&&(n.$modelValue=c,n.$modelValue!==f&&n.$$writeModelToScope());n.$$runValidators(d,c,a,function(a){g||(n.$modelValue=a?c:u,n.$modelValue!==f&&n.$$writeModelToScope())})};this.$$writeModelToScope=
function(){J(n.$modelValue);r(n.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){n.$viewValue=a;n.$options&&!n.$options.updateOnDefault||n.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=n.$options;e&&z(e.debounce)&&(e=e.debounce,W(e)?d=e:W(e[c])?d=e[c]:W(e["default"])&&(d=e["default"]));k.cancel(p);d?p=k(function(){n.$commitViewValue()},d):h.$$phase?n.$commitViewValue():a.$apply(function(){n.$commitViewValue()})};a.$watch(function(){var a=
s();if(a!==n.$modelValue){n.$modelValue=a;for(var c=n.$formatters,d=c.length,e=a;d--;)e=c[d](e);n.$viewValue!==e&&(n.$viewValue=n.$$lastCommittedViewValue=e,n.$render(),n.$$runValidators(u,a,e,A))}return a})}],qe=function(){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Of,priority:1,compile:function(a){a.addClass(Qa).addClass("ng-untouched").addClass(gb);return{pre:function(a,d,e,f){var g=f[0],k=f[1]||Cb;g.$$setOptions(f[2]&&f[2].$options);k.$addControl(g);e.$observe("name",
function(a){g.$name!==a&&k.$$renameControl(g,a)});a.$on("$destroy",function(){k.$removeControl(g)})},post:function(a,d,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)d.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});d.on("blur",function(d){g.$touched||a.$apply(function(){g.$setTouched()})})}}}}},se=da({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),xc=function(){return{restrict:"A",require:"?ngModel",
link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a){return!d.required||!e.$isEmpty(a)},d.$observe("required",function(){e.$validate()}))}}},wc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){I(a)&&0<a.length&&(a=new RegExp(a));if(a&&!a.test)throw y("ngPattern")("noregexp",g,a,sa(c));f=a||u;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||w(f)||f.test(a)}}}}},
zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("maxlength",function(a){f=ba(a)||0;e.$validate()});e.$validators.maxlength=function(a,c){return e.$isEmpty(a)||c.length<=f}}}}},yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=ba(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(a)||c.length>=f}}}}},re=function(){return{restrict:"A",priority:100,
require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,k=g?U(f):f;e.$parsers.push(function(a){if(!w(a)){var c=[];a&&r(a.split(k),function(a){a&&c.push(g?U(a):a)});return c}});e.$formatters.push(function(a){return B(a)?a.join(f):u});e.$isEmpty=function(a){return!a||!a.length}}}},Pf=/^(true|false|\d+)$/,te=function(){return{restrict:"A",priority:100,compile:function(a,c){return Pf.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,
c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ue=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==u?(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(Nf,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ud=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,
e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===u?"":a})}}}}],Wd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===u?"":a})}}}}],Vd=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),k=c(f.ngBindHtml,
function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(k,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Xd=fc("",!0),Zd=fc("Odd",0),Yd=fc("Even",1),$d=Ha({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),ae=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ac={},Qf={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=ua("ng-"+a);Ac[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var k=d(g[c]);return function(c,d){d.on(a,function(d){var f=function(){k(c,{$event:d})};Qf[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var de=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var k,h,l;c.$watch(e.ngIf,function(c){c?h||g(function(c,f){h=f;c[c.length++]=X.createComment(" end ngIf: "+
e.ngIf+" ");k={clone:c};a.enter(c,d.parent(),d)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=ob(k.clone),a.leave(l).then(function(){l=null}),k=null))})}}}],ee=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ta.noop,compile:function(f,g){var k=g.ngInclude||g.src,h=g.onload||"",l=g.autoscroll;return function(f,g,p,n,r){var u=0,v,x,t,y=function(){x&&(x.remove(),x=null);v&&(v.$destroy(),
v=null);t&&(d.leave(t).then(function(){x=null}),x=t,t=null)};f.$watch(e.parseAsResourceUrl(k),function(e){var k=function(){!z(l)||l&&!f.$eval(l)||c()},p=++u;e?(a(e,!0).then(function(a){if(p===u){var c=f.$new();n.template=a;a=r(c,function(a){y();d.enter(a,null,g).then(k)});v=c;t=a;v.$emit("$includeContentLoaded",e);f.$eval(h)}},function(){p===u&&(y(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(y(),n.template=null)})}}}}],ve=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Dc(f.template,X).childNodes)(c,function(a){d.append(a)},u,u,d)):(d.html(f.template),a(d.contents())(c))}}}],fe=Ha({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),ge=Ha({terminal:!0,priority:1E3}),he=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var k=g.count,h=g.$attr.when&&f.attr(g.$attr.when),l=g.offset||0,m=e.$eval(h)||
{},q={},p=c.startSymbol(),n=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(m[N(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});r(m,function(a,e){q[e]=c(a.replace(d,p+k+"-"+l+n))});e.$watch(function(){var c=parseFloat(e.$eval(k));if(isNaN(c))return"";c in m||(c=a.pluralCat(c-l));return q[c](e)},function(a){f.text(a)})}}}],ie=["$parse","$animate",function(a,c){var d=y("ngRepeat"),e=function(a,c,d,e,l,m,q){a[d]=e;l&&(a[l]=m);a.$index=c;a.$first=0===c;a.$last=c===
q-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var k=g.ngRepeat,h=X.createComment(" end ngRepeat: "+k+" "),l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw d("iexp",k);var m=l[1],q=l[2],p=l[3],n=l[4],l=m.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",m);var s=l[3]||l[1],J=
l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(p)))throw d("badident",p);var v,x,t,y,z={$id:La};n?v=a(n):(t=function(a,c){return La(c)},y=function(a){return a});return function(a,f,g,l,n){v&&(x=function(c,d,e){J&&(z[J]=c);z[s]=d;z.$index=e;return v(a,z)});var m=wa();a.$watchCollection(q,function(g){var l,q,z=f[0],H,v=wa(),C,Q,A,E,w,B,F;p&&(a[p]=g);if(Ra(g))w=g,q=x||t;else{q=x||y;w=[];for(F in g)g.hasOwnProperty(F)&&
"$"!=F.charAt(0)&&w.push(F);w.sort()}C=w.length;F=Array(C);for(l=0;l<C;l++)if(Q=g===w?l:w[l],A=g[Q],E=q(Q,A,l),m[E])B=m[E],delete m[E],v[E]=B,F[l]=B;else{if(v[E])throw r(F,function(a){a&&a.scope&&(m[a.id]=a)}),d("dupes",k,E,ra(A));F[l]={id:E,scope:u,clone:u};v[E]=!0}for(H in m){B=m[H];E=ob(B.clone);c.leave(E);if(E[0].parentNode)for(l=0,q=E.length;l<q;l++)E[l].$$NG_REMOVED=!0;B.scope.$destroy()}for(l=0;l<C;l++)if(Q=g===w?l:w[l],A=g[Q],B=F[l],B.scope){H=z;do H=H.nextSibling;while(H&&H.$$NG_REMOVED);
B.clone[0]!=H&&c.move(ob(B.clone),null,D(z));z=B.clone[B.clone.length-1];e(B.scope,l,s,A,J,Q,C)}else n(function(a,d){B.scope=d;var f=h.cloneNode(!1);a[a.length++]=f;c.enter(a,null,D(z));z=f;B.clone=a;v[B.id]=B;e(B.scope,l,s,A,J,Q,C)});m=v})}}}}],je=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ce=["$animate",function(a){return{restrict:"A",multiElement:!0,
link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ke=Ha(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),le=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],k=[],h=[],l=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,
e;d=0;for(e=h.length;d<e;++d)a.cancel(h[d]);d=h.length=0;for(e=l.length;d<e;++d){var s=ob(k[d].clone);l[d].$destroy();(h[d]=a.leave(s)).then(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=X.createComment(" end ngSwitchWhen: ");k.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],me=Ha({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=
e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),ne=Ha({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),pe=Ha({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw y("ngTransclude")("orphan",sa(c));f(function(a){c.empty();c.append(a)})}}),Qd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==
d.type&&a.put(d.id,c[0].text)}}}],Rf=y("ngOptions"),oe=da({restrict:"A",terminal:!0}),Rd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:A};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var h=this,l={},m=e,q;h.databound=d.ngModel;
h.init=function(a,c,d){m=a;q=d};h.addOption=function(c,d){Ka(c,'"option value"');l[c]=!0;m.$viewValue==c&&(a.val(c),q.parent()&&q.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};h.removeOption=function(a){this.hasOption(a)&&(delete l[a],m.$viewValue==a&&this.renderUnknownOption(a))};h.renderUnknownOption=function(c){c="? "+La(c)+" ?";q.val(c);a.prepend(q);a.val(c);q.prop("selected",!0)};h.hasOption=function(a){return l.hasOwnProperty(a)};c.$on("$destroy",function(){h.renderUnknownOption=
A})}],link:function(e,g,k,h){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(C.parent()&&C.remove(),c.val(a),""===a&&v.prop("selected",!0)):w(a)&&v?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){C.parent()&&C.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new bb(d.$viewValue);r(c.find("option"),function(c){c.selected=z(a.get(c.value))})};a.$watch(function(){la(e,d.$viewValue)||(e=qa(d.$viewValue),
d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function q(e,f,g){function h(a,c,d){N[A]=d;F&&(N[F]=c);return a(e,N)}function k(a){var c;if(n)if(G&&B(a)){c=new bb([]);for(var d=0;d<a.length;d++)c.put(h(G,null,a[d]),!0)}else c=new bb(a);else G&&(a=h(G,null,a));return function(d,e){var f;f=G?G:w?w:I;return n?z(c.remove(h(f,d,e))):a==h(f,d,e)}}function l(){x||(e.$$postDigest(q),x=!0)}function m(a,
c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function q(){x=!1;var a={"":[]},c=[""],d,l,s,u,v;s=g.$viewValue;u=P(e)||[];var A=F?ic(u):u,w,B,D,I,G,N={};I=k(s);v=!1;var S;for(G=0;D=A.length,G<D;G++){w=G;if(F&&(w=A[G],"$"===w.charAt(0)))continue;B=u[w];d=h(M,w,B)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=I(w,B);v=v||d;w=h(C,w,B);w=z(w)?w:"";l.push({id:F?A[G]:G,label:w,selected:d})}n||(y||null===s?a[""].unshift({id:"",label:"",selected:!v}):v||a[""].unshift({id:"?",label:"",selected:!0}));I=0;for(A=c.length;I<A;I++){d=
c[I];l=a[d];R.length<=I?(s={element:E.clone().attr("label",d),label:l.label},u=[s],R.push(u),f.append(s.element)):(u=R[I],s=u[0],s.label!=d&&s.element.attr("label",s.label=d));w=null;G=0;for(D=l.length;G<D;G++)d=l[G],(v=u[G+1])?(w=v.element,v.label!==d.label&&(m(N,v.label,!1),m(N,d.label,!0),w.text(v.label=d.label)),v.id!==d.id&&w.val(v.id=d.id),w[0].selected!==d.selected&&(w.prop("selected",v.selected=d.selected),Pa&&w.prop("selected",v.selected))):(""===d.id&&y?S=y:(S=t.clone()).val(d.id).prop("selected",
d.selected).attr("selected",d.selected).text(d.label),u.push(v={element:S,label:d.label,id:d.id,selected:d.selected}),m(N,d.label,!0),w?w.after(S):s.element.append(S),w=S);for(G++;u.length>G;)d=u.pop(),m(N,d.label,!1),d.element.remove();r(N,function(a,c){0<a?p.addOption(c):0>a&&p.removeOption(c)})}for(;R.length>I;)R.pop()[0].element.remove()}var v;if(!(v=s.match(d)))throw Rf("iexp",s,sa(f));var C=c(v[2]||v[1]),A=v[4]||v[6],D=/ as /.test(v[0])&&v[1],w=D?c(D):null,F=v[5],M=c(v[3]||""),I=c(v[2]?v[1]:
A),P=c(v[7]),G=v[8]?c(v[8]):null,R=[[{element:f,label:""}]],N={};y&&(a(y)(e),y.removeClass("ng-scope"),y.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=P(e)||[],c;if(n)c=[],r(f.val(),function(d){c.push("?"===d?u:""===d?null:h(w?w:I,d,a[d]))});else{var d=f.val();c="?"===d?u:""===d?null:h(w?w:I,d,a[d])}g.$setViewValue(c);q()})});g.$render=q;e.$watchCollection(P,l);e.$watchCollection(function(){var a=P(e),c;if(a&&B(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(C,
d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(C,d,a[d]));return c},l);n&&e.$watchCollection(function(){return g.$modelValue},l)}if(h[1]){var p=h[0];h=h[1];var n=k.multiple,s=k.ngOptions,y=!1,v,x=!1,t=D(X.createElement("option")),E=D(X.createElement("optgroup")),C=t.clone();k=0;for(var A=g.children(),F=A.length;k<F;k++)if(""===A[k].value){v=y=A.eq(k);break}p.init(h,y,C);n&&(h.$isEmpty=function(a){return!a||0===a.length});s?q(e,g,h):n?m(e,g,h):l(e,g,h,p)}}}}],Td=["$interpolate",function(a){var c=
{addOption:A,removeOption:A};return{restrict:"E",priority:100,compile:function(d,e){if(w(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var l=d.parent(),m=l.data("$selectController")||l.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Sd=da({restrict:"E",terminal:!1});S.angular.bootstrap?
console.log("WARNING: Tried to load angular more than once."):(Id(),Kd(ta),D(X).ready(function(){Ed(X,rc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.jade=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var nodes = require('./nodes');
var filters = require('./filters');
var doctypes = require('./doctypes');
var runtime = require('./runtime');
var utils = require('./utils');
var selfClosing = require('void-elements');
var parseJSExpression = require('character-parser').parseMax;
var constantinople = require('constantinople');

function isConstant(src) {
  return constantinople(src, {jade: runtime, 'jade_interp': undefined});
}
function toConstant(src) {
  return constantinople.toConstant(src, {jade: runtime, 'jade_interp': undefined});
}
function errorAtNode(node, error) {
  error.line = node.line;
  error.filename = node.filename;
  return error;
}

/**
 * Initialize `Compiler` with the given `node`.
 *
 * @param {Node} node
 * @param {Object} options
 * @api public
 */

var Compiler = module.exports = function Compiler(node, options) {
  this.options = options = options || {};
  this.node = node;
  this.hasCompiledDoctype = false;
  this.hasCompiledTag = false;
  this.pp = options.pretty || false;
  if (this.pp && typeof this.pp !== 'string') {
    this.pp = '  ';
  }
  this.debug = false !== options.compileDebug;
  this.indents = 0;
  this.parentIndents = 0;
  this.terse = false;
  this.mixins = {};
  this.dynamicMixins = false;
  if (options.doctype) this.setDoctype(options.doctype);
};

/**
 * Compiler prototype.
 */

Compiler.prototype = {

  /**
   * Compile parse tree to JavaScript.
   *
   * @api public
   */

  compile: function(){
    this.buf = [];
    if (this.pp) this.buf.push("var jade_indent = [];");
    this.lastBufferedIdx = -1;
    this.visit(this.node);
    if (!this.dynamicMixins) {
      // if there are no dynamic mixins we can remove any un-used mixins
      var mixinNames = Object.keys(this.mixins);
      for (var i = 0; i < mixinNames.length; i++) {
        var mixin = this.mixins[mixinNames[i]];
        if (!mixin.used) {
          for (var x = 0; x < mixin.instances.length; x++) {
            for (var y = mixin.instances[x].start; y < mixin.instances[x].end; y++) {
              this.buf[y] = '';
            }
          }
        }
      }
    }
    return this.buf.join('\n');
  },

  /**
   * Sets the default doctype `name`. Sets terse mode to `true` when
   * html 5 is used, causing self-closing tags to end with ">" vs "/>",
   * and boolean attributes are not mirrored.
   *
   * @param {string} name
   * @api public
   */

  setDoctype: function(name){
    this.doctype = doctypes[name.toLowerCase()] || '<!DOCTYPE ' + name + '>';
    this.terse = this.doctype.toLowerCase() == '<!doctype html>';
    this.xml = 0 == this.doctype.indexOf('<?xml');
  },

  /**
   * Buffer the given `str` exactly as is or with interpolation
   *
   * @param {String} str
   * @param {Boolean} interpolate
   * @api public
   */

  buffer: function (str, interpolate) {
    var self = this;
    if (interpolate) {
      var match = /(\\)?([#!]){((?:.|\n)*)$/.exec(str);
      if (match) {
        this.buffer(str.substr(0, match.index), false);
        if (match[1]) { // escape
          this.buffer(match[2] + '{', false);
          this.buffer(match[3], true);
          return;
        } else {
          var rest = match[3];
          var range = parseJSExpression(rest);
          var code = ('!' == match[2] ? '' : 'jade.escape') + "((jade_interp = " + range.src + ") == null ? '' : jade_interp)";
          this.bufferExpression(code);
          this.buffer(rest.substr(range.end + 1), true);
          return;
        }
      }
    }

    str = utils.stringify(str);
    str = str.substr(1, str.length - 2);

    if (this.lastBufferedIdx == this.buf.length) {
      if (this.lastBufferedType === 'code') this.lastBuffered += ' + "';
      this.lastBufferedType = 'text';
      this.lastBuffered += str;
      this.buf[this.lastBufferedIdx - 1] = 'buf.push(' + this.bufferStartChar + this.lastBuffered + '");'
    } else {
      this.buf.push('buf.push("' + str + '");');
      this.lastBufferedType = 'text';
      this.bufferStartChar = '"';
      this.lastBuffered = str;
      this.lastBufferedIdx = this.buf.length;
    }
  },

  /**
   * Buffer the given `src` so it is evaluated at run time
   *
   * @param {String} src
   * @api public
   */

  bufferExpression: function (src) {
    if (isConstant(src)) {
      return this.buffer(toConstant(src) + '', false)
    }
    if (this.lastBufferedIdx == this.buf.length) {
      if (this.lastBufferedType === 'text') this.lastBuffered += '"';
      this.lastBufferedType = 'code';
      this.lastBuffered += ' + (' + src + ')';
      this.buf[this.lastBufferedIdx - 1] = 'buf.push(' + this.bufferStartChar + this.lastBuffered + ');'
    } else {
      this.buf.push('buf.push(' + src + ');');
      this.lastBufferedType = 'code';
      this.bufferStartChar = '';
      this.lastBuffered = '(' + src + ')';
      this.lastBufferedIdx = this.buf.length;
    }
  },

  /**
   * Buffer an indent based on the current `indent`
   * property and an additional `offset`.
   *
   * @param {Number} offset
   * @param {Boolean} newline
   * @api public
   */

  prettyIndent: function(offset, newline){
    offset = offset || 0;
    newline = newline ? '\n' : '';
    this.buffer(newline + Array(this.indents + offset).join(this.pp));
    if (this.parentIndents)
      this.buf.push("buf.push.apply(buf, jade_indent);");
  },

  /**
   * Visit `node`.
   *
   * @param {Node} node
   * @api public
   */

  visit: function(node){
    var debug = this.debug;

    if (debug) {
      this.buf.push('jade_debug.unshift({ lineno: ' + node.line
        + ', filename: ' + (node.filename
          ? utils.stringify(node.filename)
          : 'jade_debug[0].filename')
        + ' });');
    }

    // Massive hack to fix our context
    // stack for - else[ if] etc
    if (false === node.debug && this.debug) {
      this.buf.pop();
      this.buf.pop();
    }

    this.visitNode(node);

    if (debug) this.buf.push('jade_debug.shift();');
  },

  /**
   * Visit `node`.
   *
   * @param {Node} node
   * @api public
   */

  visitNode: function(node){
    return this['visit' + node.type](node);
  },

  /**
   * Visit case `node`.
   *
   * @param {Literal} node
   * @api public
   */

  visitCase: function(node){
    var _ = this.withinCase;
    this.withinCase = true;
    this.buf.push('switch (' + node.expr + '){');
    this.visit(node.block);
    this.buf.push('}');
    this.withinCase = _;
  },

  /**
   * Visit when `node`.
   *
   * @param {Literal} node
   * @api public
   */

  visitWhen: function(node){
    if ('default' == node.expr) {
      this.buf.push('default:');
    } else {
      this.buf.push('case ' + node.expr + ':');
    }
    if (node.block) {
      this.visit(node.block);
      this.buf.push('  break;');
    }
  },

  /**
   * Visit literal `node`.
   *
   * @param {Literal} node
   * @api public
   */

  visitLiteral: function(node){
    this.buffer(node.str);
  },

  /**
   * Visit all nodes in `block`.
   *
   * @param {Block} block
   * @api public
   */

  visitBlock: function(block){
    var len = block.nodes.length
      , escape = this.escape
      , pp = this.pp

    // Pretty print multi-line text
    if (pp && len > 1 && !escape && block.nodes[0].isText && block.nodes[1].isText)
      this.prettyIndent(1, true);

    for (var i = 0; i < len; ++i) {
      // Pretty print text
      if (pp && i > 0 && !escape && block.nodes[i].isText && block.nodes[i-1].isText)
        this.prettyIndent(1, false);

      this.visit(block.nodes[i]);
      // Multiple text nodes are separated by newlines
      if (block.nodes[i+1] && block.nodes[i].isText && block.nodes[i+1].isText)
        this.buffer('\n');
    }
  },

  /**
   * Visit a mixin's `block` keyword.
   *
   * @param {MixinBlock} block
   * @api public
   */

  visitMixinBlock: function(block){
    if (this.pp) this.buf.push("jade_indent.push('" + Array(this.indents + 1).join(this.pp) + "');");
    this.buf.push('block && block();');
    if (this.pp) this.buf.push("jade_indent.pop();");
  },

  /**
   * Visit `doctype`. Sets terse mode to `true` when html 5
   * is used, causing self-closing tags to end with ">" vs "/>",
   * and boolean attributes are not mirrored.
   *
   * @param {Doctype} doctype
   * @api public
   */

  visitDoctype: function(doctype){
    if (doctype && (doctype.val || !this.doctype)) {
      this.setDoctype(doctype.val || 'default');
    }

    if (this.doctype) this.buffer(this.doctype);
    this.hasCompiledDoctype = true;
  },

  /**
   * Visit `mixin`, generating a function that
   * may be called within the template.
   *
   * @param {Mixin} mixin
   * @api public
   */

  visitMixin: function(mixin){
    var name = 'jade_mixins[';
    var args = mixin.args || '';
    var block = mixin.block;
    var attrs = mixin.attrs;
    var attrsBlocks = mixin.attributeBlocks;
    var pp = this.pp;
    var dynamic = mixin.name[0]==='#';
    var key = mixin.name;
    if (dynamic) this.dynamicMixins = true;
    name += (dynamic ? mixin.name.substr(2,mixin.name.length-3):'"'+mixin.name+'"')+']';

    this.mixins[key] = this.mixins[key] || {used: false, instances: []};
    if (mixin.call) {
      this.mixins[key].used = true;
      if (pp) this.buf.push("jade_indent.push('" + Array(this.indents + 1).join(pp) + "');")
      if (block || attrs.length || attrsBlocks.length) {

        this.buf.push(name + '.call({');

        if (block) {
          this.buf.push('block: function(){');

          // Render block with no indents, dynamically added when rendered
          this.parentIndents++;
          var _indents = this.indents;
          this.indents = 0;
          this.visit(mixin.block);
          this.indents = _indents;
          this.parentIndents--;

          if (attrs.length || attrsBlocks.length) {
            this.buf.push('},');
          } else {
            this.buf.push('}');
          }
        }

        if (attrsBlocks.length) {
          if (attrs.length) {
            var val = this.attrs(attrs);
            attrsBlocks.unshift(val);
          }
          this.buf.push('attributes: jade.merge([' + attrsBlocks.join(',') + '])');
        } else if (attrs.length) {
          var val = this.attrs(attrs);
          this.buf.push('attributes: ' + val);
        }

        if (args) {
          this.buf.push('}, ' + args + ');');
        } else {
          this.buf.push('});');
        }

      } else {
        this.buf.push(name + '(' + args + ');');
      }
      if (pp) this.buf.push("jade_indent.pop();")
    } else {
      var mixin_start = this.buf.length;
      args = args ? args.split(',') : [];
      var rest;
      if (args.length && /^\.\.\./.test(args[args.length - 1].trim())) {
        rest = args.pop().trim().replace(/^\.\.\./, '');
      }
      this.buf.push(name + ' = function(' + args.join(',') + '){');
      this.buf.push('var block = (this && this.block), attributes = (this && this.attributes) || {};');
      if (rest) {
        this.buf.push('var ' + rest + ' = [];');
        this.buf.push('for (jade_interp = ' + args.length + '; jade_interp < arguments.length; jade_interp++) {');
        this.buf.push('  ' + rest + '.push(arguments[jade_interp]);');
        this.buf.push('}');
      }
      this.parentIndents++;
      this.visit(block);
      this.parentIndents--;
      this.buf.push('};');
      var mixin_end = this.buf.length;
      this.mixins[key].instances.push({start: mixin_start, end: mixin_end});
    }
  },

  /**
   * Visit `tag` buffering tag markup, generating
   * attributes, visiting the `tag`'s code and block.
   *
   * @param {Tag} tag
   * @api public
   */

  visitTag: function(tag){
    this.indents++;
    var name = tag.name
      , pp = this.pp
      , self = this;

    function bufferName() {
      if (tag.buffer) self.bufferExpression(name);
      else self.buffer(name);
    }

    if ('pre' == tag.name) this.escape = true;

    if (!this.hasCompiledTag) {
      if (!this.hasCompiledDoctype && 'html' == name) {
        this.visitDoctype();
      }
      this.hasCompiledTag = true;
    }

    // pretty print
    if (pp && !tag.isInline())
      this.prettyIndent(0, true);

    if (tag.selfClosing || (!this.xml && selfClosing.indexOf(tag.name) !== -1)) {
      this.buffer('<');
      bufferName();
      this.visitAttributes(tag.attrs, tag.attributeBlocks);
      this.terse
        ? this.buffer('>')
        : this.buffer('/>');
      // if it is non-empty throw an error
      if (tag.block &&
          !(tag.block.type === 'Block' && tag.block.nodes.length === 0) &&
          tag.block.nodes.some(function (tag) {
            return tag.type !== 'Text' || !/^\s*$/.test(tag.val)
          })) {
        throw errorAtNode(tag, new Error(name + ' is self closing and should not have content.'));
      }
    } else {
      // Optimize attributes buffering
      this.buffer('<');
      bufferName();
      this.visitAttributes(tag.attrs, tag.attributeBlocks);
      this.buffer('>');
      if (tag.code) this.visitCode(tag.code);
      this.visit(tag.block);

      // pretty print
      if (pp && !tag.isInline() && 'pre' != tag.name && !tag.canInline())
        this.prettyIndent(0, true);

      this.buffer('</');
      bufferName();
      this.buffer('>');
    }

    if ('pre' == tag.name) this.escape = false;

    this.indents--;
  },

  /**
   * Visit `filter`, throwing when the filter does not exist.
   *
   * @param {Filter} filter
   * @api public
   */

  visitFilter: function(filter){
    var text = filter.block.nodes.map(
      function(node){ return node.val; }
    ).join('\n');
    filter.attrs.filename = this.options.filename;
    try {
      this.buffer(filters(filter.name, text, filter.attrs), true);
    } catch (err) {
      throw errorAtNode(filter, err);
    }
  },

  /**
   * Visit `text` node.
   *
   * @param {Text} text
   * @api public
   */

  visitText: function(text){
    this.buffer(text.val, true);
  },

  /**
   * Visit a `comment`, only buffering when the buffer flag is set.
   *
   * @param {Comment} comment
   * @api public
   */

  visitComment: function(comment){
    if (!comment.buffer) return;
    if (this.pp) this.prettyIndent(1, true);
    this.buffer('<!--' + comment.val + '-->');
  },

  /**
   * Visit a `BlockComment`.
   *
   * @param {Comment} comment
   * @api public
   */

  visitBlockComment: function(comment){
    if (!comment.buffer) return;
    if (this.pp) this.prettyIndent(1, true);
    this.buffer('<!--' + comment.val);
    this.visit(comment.block);
    if (this.pp) this.prettyIndent(1, true);
    this.buffer('-->');
  },

  /**
   * Visit `code`, respecting buffer / escape flags.
   * If the code is followed by a block, wrap it in
   * a self-calling function.
   *
   * @param {Code} code
   * @api public
   */

  visitCode: function(code){
    // Wrap code blocks with {}.
    // we only wrap unbuffered code blocks ATM
    // since they are usually flow control

    // Buffer code
    if (code.buffer) {
      var val = code.val.trim();
      val = 'null == (jade_interp = '+val+') ? "" : jade_interp';
      if (code.escape) val = 'jade.escape(' + val + ')';
      this.bufferExpression(val);
    } else {
      this.buf.push(code.val);
    }

    // Block support
    if (code.block) {
      if (!code.buffer) this.buf.push('{');
      this.visit(code.block);
      if (!code.buffer) this.buf.push('}');
    }
  },

  /**
   * Visit `each` block.
   *
   * @param {Each} each
   * @api public
   */

  visitEach: function(each){
    this.buf.push(''
      + '// iterate ' + each.obj + '\n'
      + ';(function(){\n'
      + '  var $$obj = ' + each.obj + ';\n'
      + '  if (\'number\' == typeof $$obj.length) {\n');

    if (each.alternative) {
      this.buf.push('  if ($$obj.length) {');
    }

    this.buf.push(''
      + '    for (var ' + each.key + ' = 0, $$l = $$obj.length; ' + each.key + ' < $$l; ' + each.key + '++) {\n'
      + '      var ' + each.val + ' = $$obj[' + each.key + '];\n');

    this.visit(each.block);

    this.buf.push('    }\n');

    if (each.alternative) {
      this.buf.push('  } else {');
      this.visit(each.alternative);
      this.buf.push('  }');
    }

    this.buf.push(''
      + '  } else {\n'
      + '    var $$l = 0;\n'
      + '    for (var ' + each.key + ' in $$obj) {\n'
      + '      $$l++;'
      + '      var ' + each.val + ' = $$obj[' + each.key + '];\n');

    this.visit(each.block);

    this.buf.push('    }\n');
    if (each.alternative) {
      this.buf.push('    if ($$l === 0) {');
      this.visit(each.alternative);
      this.buf.push('    }');
    }
    this.buf.push('  }\n}).call(this);\n');
  },

  /**
   * Visit `attrs`.
   *
   * @param {Array} attrs
   * @api public
   */

  visitAttributes: function(attrs, attributeBlocks){
    if (attributeBlocks.length) {
      if (attrs.length) {
        var val = this.attrs(attrs);
        attributeBlocks.unshift(val);
      }
      this.bufferExpression('jade.attrs(jade.merge([' + attributeBlocks.join(',') + ']), ' + utils.stringify(this.terse) + ')');
    } else if (attrs.length) {
      this.attrs(attrs, true);
    }
  },

  /**
   * Compile attributes.
   */

  attrs: function(attrs, buffer){
    var buf = [];
    var classes = [];
    var classEscaping = [];

    attrs.forEach(function(attr){
      var key = attr.name;
      var escaped = attr.escaped;

      if (key === 'class') {
        classes.push(attr.val);
        classEscaping.push(attr.escaped);
      } else if (isConstant(attr.val)) {
        if (buffer) {
          this.buffer(runtime.attr(key, toConstant(attr.val), escaped, this.terse));
        } else {
          var val = toConstant(attr.val);
          if (key === 'style') val = runtime.style(val);
          if (escaped && !(key.indexOf('data') === 0 && typeof val !== 'string')) {
            val = runtime.escape(val);
          }
          buf.push(utils.stringify(key) + ': ' + utils.stringify(val));
        }
      } else {
        if (buffer) {
          this.bufferExpression('jade.attr("' + key + '", ' + attr.val + ', ' + utils.stringify(escaped) + ', ' + utils.stringify(this.terse) + ')');
        } else {
          var val = attr.val;
          if (key === 'style') {
            val = 'jade.style(' + val + ')';
          }
          if (escaped && !(key.indexOf('data') === 0)) {
            val = 'jade.escape(' + val + ')';
          } else if (escaped) {
            val = '(typeof (jade_interp = ' + val + ') == "string" ? jade.escape(jade_interp) : jade_interp)';
          }
          buf.push(utils.stringify(key) + ': ' + val);
        }
      }
    }.bind(this));
    if (buffer) {
      if (classes.every(isConstant)) {
        this.buffer(runtime.cls(classes.map(toConstant), classEscaping));
      } else {
        this.bufferExpression('jade.cls([' + classes.join(',') + '], ' + utils.stringify(classEscaping) + ')');
      }
    } else if (classes.length) {
      if (classes.every(isConstant)) {
        classes = utils.stringify(runtime.joinClasses(classes.map(toConstant).map(runtime.joinClasses).map(function (cls, i) {
          return classEscaping[i] ? runtime.escape(cls) : cls;
        })));
      } else {
        classes = '(jade_interp = ' + utils.stringify(classEscaping) + ',' +
          ' jade.joinClasses([' + classes.join(',') + '].map(jade.joinClasses).map(function (cls, i) {' +
          '   return jade_interp[i] ? jade.escape(cls) : cls' +
          ' }))' +
          ')';
      }
      if (classes.length)
        buf.push('"class": ' + classes);
    }
    return '{' + buf.join(',') + '}';
  }
};

},{"./doctypes":2,"./filters":3,"./nodes":16,"./runtime":24,"./utils":25,"character-parser":29,"constantinople":30,"void-elements":34}],2:[function(require,module,exports){
'use strict';

module.exports = {
    'default': '<!DOCTYPE html>'
  , 'xml': '<?xml version="1.0" encoding="utf-8" ?>'
  , 'transitional': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'
  , 'strict': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'
  , 'frameset': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">'
  , '1.1': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">'
  , 'basic': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">'
  , 'mobile': '<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">'
};
},{}],3:[function(require,module,exports){
'use strict';

module.exports = filter;
function filter(name, str, options) {
  if (typeof filter[name] === 'function') {
    return filter[name](str, options);
  } else {
    throw new Error('unknown filter ":' + name + '"');
  }
}

},{}],4:[function(require,module,exports){
'use strict';

/*!
 * Jade
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var Parser = require('./parser')
  , Lexer = require('./lexer')
  , Compiler = require('./compiler')
  , runtime = require('./runtime')
  , addWith = require('with')
  , fs = require('fs')
  , utils = require('./utils');

/**
 * Expose self closing tags.
 */

exports.selfClosing = require('void-elements');

/**
 * Default supported doctypes.
 */

exports.doctypes = require('./doctypes');

/**
 * Text filters.
 */

exports.filters = require('./filters');

/**
 * Utilities.
 */

exports.utils = require('./utils');

/**
 * Expose `Compiler`.
 */

exports.Compiler = Compiler;

/**
 * Expose `Parser`.
 */

exports.Parser = Parser;

/**
 * Expose `Lexer`.
 */

exports.Lexer = Lexer;

/**
 * Nodes.
 */

exports.nodes = require('./nodes');

/**
 * Jade runtime helpers.
 */

exports.runtime = runtime;

/**
 * Template function cache.
 */

exports.cache = {};

/**
 * Parse the given `str` of jade and return a function body.
 *
 * @param {String} str
 * @param {Object} options
 * @return {Object}
 * @api private
 */

function parse(str, options){

  if (options.lexer) {
    console.warn('Using `lexer` as a local in render() is deprecated and '
               + 'will be interpreted as an option in Jade 2.0.0');
  }

  // Parse
  var parser = new (options.parser || Parser)(str, options.filename, options);
  var tokens;
  try {
    // Parse
    tokens = parser.parse();
  } catch (err) {
    parser = parser.context();
    runtime.rethrow(err, parser.filename, parser.lexer.lineno, parser.input);
  }

  // Compile
  var compiler = new (options.compiler || Compiler)(tokens, options);
  var js;
  try {
    js = compiler.compile();
  } catch (err) {
    if (err.line && (err.filename || !options.filename)) {
      runtime.rethrow(err, err.filename, err.line, parser.input);
    } else {
      if (err instanceof Error) {
        err.message += '\n\nPlease report this entire error and stack trace to https://github.com/jadejs/jade/issues';
      }
      throw err;
    }
  }

  // Debug compiler
  if (options.debug) {
    console.error('\nCompiled Function:\n\n\u001b[90m%s\u001b[0m', js.replace(/^/gm, '  '));
  }

  var globals = [];

  if (options.globals) {
    globals = options.globals.slice();
  }

  globals.push('jade');
  globals.push('jade_mixins');
  globals.push('jade_interp');
  globals.push('jade_debug');
  globals.push('buf');

  var body = ''
    + 'var buf = [];\n'
    + 'var jade_mixins = {};\n'
    + 'var jade_interp;\n'
    + (options.self
      ? 'var self = locals || {};\n' + js
      : addWith('locals || {}', '\n' + js, globals)) + ';'
    + 'return buf.join("");';
  return {body: body, dependencies: parser.dependencies};
}

/**
 * Compile a `Function` representation of the given jade `str`.
 *
 * Options:
 *
 *   - `compileDebug` when `false` debugging code is stripped from the compiled
       template, when it is explicitly `true`, the source code is included in
       the compiled template for better accuracy.
 *   - `filename` used to improve errors when `compileDebug` is not `false` and to resolve imports/extends
 *
 * @param {String} str
 * @param {Options} options
 * @return {Function}
 * @api public
 */

exports.compile = function(str, options){
  var options = options || {}
    , filename = options.filename
      ? utils.stringify(options.filename)
      : 'undefined'
    , fn;

  str = String(str);

  var parsed = parse(str, options);
  if (options.compileDebug !== false) {
    fn = [
        'var jade_debug = [{ lineno: 1, filename: ' + filename + ' }];'
      , 'try {'
      , parsed.body
      , '} catch (err) {'
      , '  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno' + (options.compileDebug === true ? ',' + utils.stringify(str) : '') + ');'
      , '}'
    ].join('\n');
  } else {
    fn = parsed.body;
  }
  fn = new Function('locals, jade', fn)
  var res = function(locals){ return fn(locals, Object.create(runtime)) };
  if (options.client) {
    res.toString = function () {
      var err = new Error('The `client` option is deprecated, use the `jade.compileClient` method instead');
      err.name = 'Warning';
      console.error(err.stack || err.message);
      return exports.compileClient(str, options);
    };
  }
  res.dependencies = parsed.dependencies;
  return res;
};

/**
 * Compile a JavaScript source representation of the given jade `str`.
 *
 * Options:
 *
 *   - `compileDebug` When it is `true`, the source code is included in
 *     the compiled template for better error messages.
 *   - `filename` used to improve errors when `compileDebug` is not `true` and to resolve imports/extends
 *   - `name` the name of the resulting function (defaults to "template")
 *
 * @param {String} str
 * @param {Options} options
 * @return {String}
 * @api public
 */

exports.compileClient = function(str, options){
  var options = options || {};
  var name = options.name || 'template';
  var filename = options.filename ? utils.stringify(options.filename) : 'undefined';
  var fn;

  str = String(str);

  if (options.compileDebug) {
    options.compileDebug = true;
    fn = [
        'var jade_debug = [{ lineno: 1, filename: ' + filename + ' }];'
      , 'try {'
      , parse(str, options).body
      , '} catch (err) {'
      , '  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ' + utils.stringify(str) + ');'
      , '}'
    ].join('\n');
  } else {
    options.compileDebug = false;
    fn = parse(str, options).body;
  }

  return 'function ' + name + '(locals) {\n' + fn + '\n}';
};

/**
 * Compile a `Function` representation of the given jade file.
 *
 * Options:
 *
 *   - `compileDebug` when `false` debugging code is stripped from the compiled
       template, when it is explicitly `true`, the source code is included in
       the compiled template for better accuracy.
 *
 * @param {String} path
 * @param {Options} options
 * @return {Function}
 * @api public
 */
exports.compileFile = function (path, options) {
  options = options || {};

  var key = path + ':string';

  options.filename = path;
  var str = options.cache
    ? exports.cache[key] || (exports.cache[key] = fs.readFileSync(path, 'utf8'))
    : fs.readFileSync(path, 'utf8');

  return options.cache
    ? exports.cache[path] || (exports.cache[path] = exports.compile(str, options))
    : exports.compile(str, options);
};

/**
 * Render the given `str` of jade.
 *
 * Options:
 *
 *   - `cache` enable template caching
 *   - `filename` filename required for `include` / `extends` and caching
 *
 * @param {String} str
 * @param {Object|Function} options or fn
 * @param {Function|undefined} fn
 * @returns {String}
 * @api public
 */

exports.render = function(str, options, fn){
  // support callback API
  if ('function' == typeof options) {
    fn = options, options = undefined;
  }
  if (typeof fn === 'function') {
    var res
    try {
      res = exports.render(str, options);
    } catch (ex) {
      return fn(ex);
    }
    return fn(null, res);
  }

  options = options || {};

  // cache requires .filename
  if (options.cache && !options.filename) {
    throw new Error('the "filename" option is required for caching');
  }

  var path = options.filename;
  var tmpl = options.cache
    ? exports.cache[path] || (exports.cache[path] = exports.compile(str, options))
    : exports.compile(str, options);
  return tmpl(options);
};

/**
 * Render a Jade file at the given `path`.
 *
 * @param {String} path
 * @param {Object|Function} options or callback
 * @param {Function|undefined} fn
 * @returns {String}
 * @api public
 */

exports.renderFile = function(path, options, fn){
  // support callback API
  if ('function' == typeof options) {
    fn = options, options = undefined;
  }
  if (typeof fn === 'function') {
    var res
    try {
      res = exports.renderFile(path, options);
    } catch (ex) {
      return fn(ex);
    }
    return fn(null, res);
  }

  options = options || {};

  var key = path + ':string';

  options.filename = path;
  var str = options.cache
    ? exports.cache[key] || (exports.cache[key] = fs.readFileSync(path, 'utf8'))
    : fs.readFileSync(path, 'utf8');
  return exports.render(str, options);
};


/**
 * Compile a Jade file at the given `path` for use on the client.
 *
 * @param {String} path
 * @param {Object} options
 * @returns {String}
 * @api public
 */

exports.compileFileClient = function(path, options){
  options = options || {};

  var key = path + ':string';

  options.filename = path;
  var str = options.cache
    ? exports.cache[key] || (exports.cache[key] = fs.readFileSync(path, 'utf8'))
    : fs.readFileSync(path, 'utf8');

  return exports.compileClient(str, options);
};

/**
 * Express support.
 */

exports.__express = exports.renderFile;

},{"./compiler":1,"./doctypes":2,"./filters":3,"./lexer":6,"./nodes":16,"./parser":23,"./runtime":24,"./utils":25,"fs":26,"void-elements":34,"with":35}],5:[function(require,module,exports){
'use strict';

module.exports = [
    'a'
  , 'abbr'
  , 'acronym'
  , 'b'
  , 'br'
  , 'code'
  , 'em'
  , 'font'
  , 'i'
  , 'img'
  , 'ins'
  , 'kbd'
  , 'map'
  , 'samp'
  , 'small'
  , 'span'
  , 'strong'
  , 'sub'
  , 'sup'
];
},{}],6:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var characterParser = require('character-parser');


/**
 * Initialize `Lexer` with the given `str`.
 *
 * @param {String} str
 * @param {String} filename
 * @api private
 */

var Lexer = module.exports = function Lexer(str, filename) {
  this.input = str.replace(/\r\n|\r/g, '\n');
  this.filename = filename;
  this.deferredTokens = [];
  this.lastIndents = 0;
  this.lineno = 1;
  this.stash = [];
  this.indentStack = [];
  this.indentRe = null;
  this.pipeless = false;
};


function assertExpression(exp) {
  //this verifies that a JavaScript expression is valid
  Function('', 'return (' + exp + ')');
}
function assertNestingCorrect(exp) {
  //this verifies that code is properly nested, but allows
  //invalid JavaScript such as the contents of `attributes`
  var res = characterParser(exp)
  if (res.isNesting()) {
    throw new Error('Nesting must match on expression `' + exp + '`')
  }
}

/**
 * Lexer prototype.
 */

Lexer.prototype = {

  /**
   * Construct a token with the given `type` and `val`.
   *
   * @param {String} type
   * @param {String} val
   * @return {Object}
   * @api private
   */

  tok: function(type, val){
    return {
        type: type
      , line: this.lineno
      , val: val
    }
  },

  /**
   * Consume the given `len` of input.
   *
   * @param {Number} len
   * @api private
   */

  consume: function(len){
    this.input = this.input.substr(len);
  },

  /**
   * Scan for `type` with the given `regexp`.
   *
   * @param {String} type
   * @param {RegExp} regexp
   * @return {Object}
   * @api private
   */

  scan: function(regexp, type){
    var captures;
    if (captures = regexp.exec(this.input)) {
      this.consume(captures[0].length);
      return this.tok(type, captures[1]);
    }
  },

  /**
   * Defer the given `tok`.
   *
   * @param {Object} tok
   * @api private
   */

  defer: function(tok){
    this.deferredTokens.push(tok);
  },

  /**
   * Lookahead `n` tokens.
   *
   * @param {Number} n
   * @return {Object}
   * @api private
   */

  lookahead: function(n){
    var fetch = n - this.stash.length;
    while (fetch-- > 0) this.stash.push(this.next());
    return this.stash[--n];
  },

  /**
   * Return the indexOf `(` or `{` or `[` / `)` or `}` or `]` delimiters.
   *
   * @return {Number}
   * @api private
   */

  bracketExpression: function(skip){
    skip = skip || 0;
    var start = this.input[skip];
    if (start != '(' && start != '{' && start != '[') throw new Error('unrecognized start character');
    var end = ({'(': ')', '{': '}', '[': ']'})[start];
    var range = characterParser.parseMax(this.input, {start: skip + 1});
    if (this.input[range.end] !== end) throw new Error('start character ' + start + ' does not match end character ' + this.input[range.end]);
    return range;
  },

  /**
   * Stashed token.
   */

  stashed: function() {
    return this.stash.length
      && this.stash.shift();
  },

  /**
   * Deferred token.
   */

  deferred: function() {
    return this.deferredTokens.length
      && this.deferredTokens.shift();
  },

  /**
   * end-of-source.
   */

  eos: function() {
    if (this.input.length) return;
    if (this.indentStack.length) {
      this.indentStack.shift();
      return this.tok('outdent');
    } else {
      return this.tok('eos');
    }
  },

  /**
   * Blank line.
   */

  blank: function() {
    var captures;
    if (captures = /^\n *\n/.exec(this.input)) {
      this.consume(captures[0].length - 1);
      ++this.lineno;
      if (this.pipeless) return this.tok('text', '');
      return this.next();
    }
  },

  /**
   * Comment.
   */

  comment: function() {
    var captures;
    if (captures = /^\/\/(-)?([^\n]*)/.exec(this.input)) {
      this.consume(captures[0].length);
      var tok = this.tok('comment', captures[2]);
      tok.buffer = '-' != captures[1];
      this.pipeless = true;
      return tok;
    }
  },

  /**
   * Interpolated tag.
   */

  interpolation: function() {
    if (/^#\{/.test(this.input)) {
      var match;
      try {
        match = this.bracketExpression(1);
      } catch (ex) {
        return;//not an interpolation expression, just an unmatched open interpolation
      }

      this.consume(match.end + 1);
      return this.tok('interpolation', match.src);
    }
  },

  /**
   * Tag.
   */

  tag: function() {
    var captures;
    if (captures = /^(\w[-:\w]*)(\/?)/.exec(this.input)) {
      this.consume(captures[0].length);
      var tok, name = captures[1];
      if (':' == name[name.length - 1]) {
        name = name.slice(0, -1);
        tok = this.tok('tag', name);
        this.defer(this.tok(':'));
        while (' ' == this.input[0]) this.input = this.input.substr(1);
      } else {
        tok = this.tok('tag', name);
      }
      tok.selfClosing = !!captures[2];
      return tok;
    }
  },

  /**
   * Filter.
   */

  filter: function() {
    var tok = this.scan(/^:([\w\-]+)/, 'filter');
    if (tok) {
      this.pipeless = true;
      return tok;
    }
  },

  /**
   * Doctype.
   */

  doctype: function() {
    if (this.scan(/^!!! *([^\n]+)?/, 'doctype')) {
      throw new Error('`!!!` is deprecated, you must now use `doctype`');
    }
    var node = this.scan(/^(?:doctype) *([^\n]+)?/, 'doctype');
    if (node && node.val && node.val.trim() === '5') {
      throw new Error('`doctype 5` is deprecated, you must now use `doctype html`');
    }
    return node;
  },

  /**
   * Id.
   */

  id: function() {
    return this.scan(/^#([\w-]+)/, 'id');
  },

  /**
   * Class.
   */

  className: function() {
    return this.scan(/^\.([\w-]+)/, 'class');
  },

  /**
   * Text.
   */

  text: function() {
    return this.scan(/^(?:\| ?| )([^\n]+)/, 'text') ||
      this.scan(/^\|?( )/, 'text') ||
      this.scan(/^(<[^\n]*)/, 'text');
  },

  textFail: function () {
    var tok;
    if (tok = this.scan(/^([^\.\n][^\n]+)/, 'text')) {
      console.warn('Warning: missing space before text for line ' + this.lineno +
          ' of jade file "' + this.filename + '"');
      return tok;
    }
  },

  /**
   * Dot.
   */

  dot: function() {
    var match;
    if (match = this.scan(/^\./, 'dot')) {
      this.pipeless = true;
      return match;
    }
  },

  /**
   * Extends.
   */

  "extends": function() {
    return this.scan(/^extends? +([^\n]+)/, 'extends');
  },

  /**
   * Block prepend.
   */

  prepend: function() {
    var captures;
    if (captures = /^prepend +([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var mode = 'prepend'
        , name = captures[1]
        , tok = this.tok('block', name);
      tok.mode = mode;
      return tok;
    }
  },

  /**
   * Block append.
   */

  append: function() {
    var captures;
    if (captures = /^append +([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var mode = 'append'
        , name = captures[1]
        , tok = this.tok('block', name);
      tok.mode = mode;
      return tok;
    }
  },

  /**
   * Block.
   */

  block: function() {
    var captures;
    if (captures = /^block\b *(?:(prepend|append) +)?([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var mode = captures[1] || 'replace'
        , name = captures[2]
        , tok = this.tok('block', name);

      tok.mode = mode;
      return tok;
    }
  },

  /**
   * Mixin Block.
   */

  mixinBlock: function() {
    var captures;
    if (captures = /^block[ \t]*(\n|$)/.exec(this.input)) {
      this.consume(captures[0].length - captures[1].length);
      return this.tok('mixin-block');
    }
  },

  /**
   * Yield.
   */

  'yield': function() {
    return this.scan(/^yield */, 'yield');
  },

  /**
   * Include.
   */

  include: function() {
    return this.scan(/^include +([^\n]+)/, 'include');
  },

  /**
   * Include with filter
   */

  includeFiltered: function() {
    var captures;
    if (captures = /^include:([\w\-]+)([\( ])/.exec(this.input)) {
      this.consume(captures[0].length - 1);
      var filter = captures[1];
      var attrs = captures[2] === '(' ? this.attrs() : null;
      if (!(captures[2] === ' ' || this.input[0] === ' ')) {
        throw new Error('expected space after include:filter but got ' + utils.stringify(this.input[0]));
      }
      captures = /^ *([^\n]+)/.exec(this.input);
      if (!captures || captures[1].trim() === '') {
        throw new Error('missing path for include:filter');
      }
      this.consume(captures[0].length);
      var path = captures[1];
      var tok = this.tok('include', path);
      tok.filter = filter;
      tok.attrs = attrs;
      return tok;
    }
  },

  /**
   * Case.
   */

  "case": function() {
    return this.scan(/^case +([^\n]+)/, 'case');
  },

  /**
   * When.
   */

  when: function() {
    return this.scan(/^when +([^:\n]+)/, 'when');
  },

  /**
   * Default.
   */

  "default": function() {
    return this.scan(/^default */, 'default');
  },

  /**
   * Call mixin.
   */

  call: function(){

    var tok, captures;
    if (captures = /^\+(\s*)(([-\w]+)|(#\{))/.exec(this.input)) {
      // try to consume simple or interpolated call
      if (captures[3]) {
        // simple call
        this.consume(captures[0].length);
        tok = this.tok('call', captures[3]);
      } else {
        // interpolated call
        var match;
        try {
          match = this.bracketExpression(2 + captures[1].length);
        } catch (ex) {
          return;//not an interpolation expression, just an unmatched open interpolation
        }
        this.consume(match.end + 1);
        assertExpression(match.src);
        tok = this.tok('call', '#{'+match.src+'}');
      }

      // Check for args (not attributes)
      if (captures = /^ *\(/.exec(this.input)) {
        try {
          var range = this.bracketExpression(captures[0].length - 1);
          if (!/^\s*[-\w]+ *=/.test(range.src)) { // not attributes
            this.consume(range.end + 1);
            tok.args = range.src;
          }
        } catch (ex) {
          //not a bracket expcetion, just unmatched open parens
        }
        if (tok.args) {
          assertExpression('[' + tok.args + ']');
        }
      }

      return tok;
    }
  },

  /**
   * Mixin.
   */

  mixin: function(){
    var captures;
    if (captures = /^mixin +([-\w]+)(?: *\((.*)\))? */.exec(this.input)) {
      this.consume(captures[0].length);
      var tok = this.tok('mixin', captures[1]);
      tok.args = captures[2];
      return tok;
    }
  },

  /**
   * Conditional.
   */

  conditional: function() {
    var captures;
    if (captures = /^(if|unless|else if|else)\b([^\n]*)/.exec(this.input)) {
      this.consume(captures[0].length);
      var type = captures[1]
      var js = captures[2];
      var isIf = false;
      var isElse = false;

      switch (type) {
        case 'if':
          assertExpression(js)
          js = 'if (' + js + ')';
          isIf = true;
          break;
        case 'unless':
          assertExpression(js)
          js = 'if (!(' + js + '))';
          isIf = true;
          break;
        case 'else if':
          assertExpression(js)
          js = 'else if (' + js + ')';
          isIf = true;
          isElse = true;
          break;
        case 'else':
          if (js && js.trim()) {
            throw new Error('`else` cannot have a condition, perhaps you meant `else if`');
          }
          js = 'else';
          isElse = true;
          break;
      }
      var tok = this.tok('code', js);
      tok.isElse = isElse;
      tok.isIf = isIf;
      tok.requiresBlock = true;
      return tok;
    }
  },

  /**
   * While.
   */

  "while": function() {
    var captures;
    if (captures = /^while +([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      assertExpression(captures[1])
      var tok = this.tok('code', 'while (' + captures[1] + ')');
      tok.requiresBlock = true;
      return tok;
    }
  },

  /**
   * Each.
   */

  each: function() {
    var captures;
    if (captures = /^(?:- *)?(?:each|for) +([a-zA-Z_$][\w$]*)(?: *, *([a-zA-Z_$][\w$]*))? * in *([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var tok = this.tok('each', captures[1]);
      tok.key = captures[2] || '$index';
      assertExpression(captures[3])
      tok.code = captures[3];
      return tok;
    }
  },

  /**
   * Code.
   */

  code: function() {
    var captures;
    if (captures = /^(!?=|-)[ \t]*([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var flags = captures[1];
      captures[1] = captures[2];
      var tok = this.tok('code', captures[1]);
      tok.escape = flags.charAt(0) === '=';
      tok.buffer = flags.charAt(0) === '=' || flags.charAt(1) === '=';
      if (tok.buffer) assertExpression(captures[1])
      return tok;
    }
  },

  /**
   * Attributes.
   */

  attrs: function() {
    if ('(' == this.input.charAt(0)) {
      var index = this.bracketExpression().end
        , str = this.input.substr(1, index-1)
        , tok = this.tok('attrs');

      assertNestingCorrect(str);

      var quote = '';
      var interpolate = function (attr) {
        return attr.replace(/(\\)?#\{(.+)/g, function(_, escape, expr){
          if (escape) return _;
          try {
            var range = characterParser.parseMax(expr);
            if (expr[range.end] !== '}') return _.substr(0, 2) + interpolate(_.substr(2));
            assertExpression(range.src)
            return quote + " + (" + range.src + ") + " + quote + interpolate(expr.substr(range.end + 1));
          } catch (ex) {
            return _.substr(0, 2) + interpolate(_.substr(2));
          }
        });
      }

      this.consume(index + 1);
      tok.attrs = [];

      var escapedAttr = true
      var key = '';
      var val = '';
      var interpolatable = '';
      var state = characterParser.defaultState();
      var loc = 'key';
      var isEndOfAttribute = function (i) {
        if (key.trim() === '') return false;
        if (i === str.length) return true;
        if (loc === 'key') {
          if (str[i] === ' ' || str[i] === '\n') {
            for (var x = i; x < str.length; x++) {
              if (str[x] != ' ' && str[x] != '\n') {
                if (str[x] === '=' || str[x] === '!' || str[x] === ',') return false;
                else return true;
              }
            }
          }
          return str[i] === ','
        } else if (loc === 'value' && !state.isNesting()) {
          try {
            assertExpression(val);
            if (str[i] === ' ' || str[i] === '\n') {
              for (var x = i; x < str.length; x++) {
                if (str[x] != ' ' && str[x] != '\n') {
                  if (characterParser.isPunctuator(str[x]) && str[x] != '"' && str[x] != "'") return false;
                  else return true;
                }
              }
            }
            return str[i] === ',';
          } catch (ex) {
            return false;
          }
        }
      }

      this.lineno += str.split("\n").length - 1;

      for (var i = 0; i <= str.length; i++) {
        if (isEndOfAttribute(i)) {
          val = val.trim();
          if (val) assertExpression(val)
          key = key.trim();
          key = key.replace(/^['"]|['"]$/g, '');
          tok.attrs.push({
            name: key,
            val: '' == val ? true : val,
            escaped: escapedAttr
          });
          key = val = '';
          loc = 'key';
          escapedAttr = false;
        } else {
          switch (loc) {
            case 'key-char':
              if (str[i] === quote) {
                loc = 'key';
                if (i + 1 < str.length && [' ', ',', '!', '=', '\n'].indexOf(str[i + 1]) === -1)
                  throw new Error('Unexpected character ' + str[i + 1] + ' expected ` `, `\\n`, `,`, `!` or `=`');
              } else {
                key += str[i];
              }
              break;
            case 'key':
              if (key === '' && (str[i] === '"' || str[i] === "'")) {
                loc = 'key-char';
                quote = str[i];
              } else if (str[i] === '!' || str[i] === '=') {
                escapedAttr = str[i] !== '!';
                if (str[i] === '!') i++;
                if (str[i] !== '=') throw new Error('Unexpected character ' + str[i] + ' expected `=`');
                loc = 'value';
                state = characterParser.defaultState();
              } else {
                key += str[i]
              }
              break;
            case 'value':
              state = characterParser.parseChar(str[i], state);
              if (state.isString()) {
                loc = 'string';
                quote = str[i];
                interpolatable = str[i];
              } else {
                val += str[i];
              }
              break;
            case 'string':
              state = characterParser.parseChar(str[i], state);
              interpolatable += str[i];
              if (!state.isString()) {
                loc = 'value';
                val += interpolate(interpolatable);
              }
              break;
          }
        }
      }

      if ('/' == this.input.charAt(0)) {
        this.consume(1);
        tok.selfClosing = true;
      }

      return tok;
    }
  },

  /**
   * &attributes block
   */
  attributesBlock: function () {
    var captures;
    if (/^&attributes\b/.test(this.input)) {
      this.consume(11);
      var args = this.bracketExpression();
      this.consume(args.end + 1);
      return this.tok('&attributes', args.src);
    }
  },

  /**
   * Indent | Outdent | Newline.
   */

  indent: function() {
    var captures, re;

    // established regexp
    if (this.indentRe) {
      captures = this.indentRe.exec(this.input);
    // determine regexp
    } else {
      // tabs
      re = /^\n(\t*) */;
      captures = re.exec(this.input);

      // spaces
      if (captures && !captures[1].length) {
        re = /^\n( *)/;
        captures = re.exec(this.input);
      }

      // established
      if (captures && captures[1].length) this.indentRe = re;
    }

    if (captures) {
      var tok
        , indents = captures[1].length;

      ++this.lineno;
      this.consume(indents + 1);

      if (' ' == this.input[0] || '\t' == this.input[0]) {
        throw new Error('Invalid indentation, you can use tabs or spaces but not both');
      }

      // blank line
      if ('\n' == this.input[0]) {
        this.pipeless = false;
        return this.tok('newline');
      }

      // outdent
      if (this.indentStack.length && indents < this.indentStack[0]) {
        while (this.indentStack.length && this.indentStack[0] > indents) {
          this.stash.push(this.tok('outdent'));
          this.indentStack.shift();
        }
        tok = this.stash.pop();
      // indent
      } else if (indents && indents != this.indentStack[0]) {
        this.indentStack.unshift(indents);
        tok = this.tok('indent', indents);
      // newline
      } else {
        tok = this.tok('newline');
      }

      this.pipeless = false;
      return tok;
    }
  },

  /**
   * Pipe-less text consumed only when
   * pipeless is true;
   */

  pipelessText: function() {
    if (!this.pipeless) return;
    var captures, re;

    // established regexp
    if (this.indentRe) {
      captures = this.indentRe.exec(this.input);
    // determine regexp
    } else {
      // tabs
      re = /^\n(\t*) */;
      captures = re.exec(this.input);

      // spaces
      if (captures && !captures[1].length) {
        re = /^\n( *)/;
        captures = re.exec(this.input);
      }

      // established
      if (captures && captures[1].length) this.indentRe = re;
    }

    var indents = captures && captures[1].length;
    if (indents && (this.indentStack.length === 0 || indents > this.indentStack[0])) {
      var indent = captures[1];
      var line;
      var tokens = [];
      var isMatch;
      do {
        // text has `\n` as a prefix
        var i = this.input.substr(1).indexOf('\n');
        if (-1 == i) i = this.input.length - 1;
        var str = this.input.substr(1, i);
        isMatch = str.substr(0, indent.length) === indent || !str.trim();
        if (isMatch) {
          // consume test along with `\n` prefix if match
          this.consume(str.length + 1);
          tokens.push(str.substr(indent.length));
        }
      } while(this.input.length && isMatch);
      while (this.input.length === 0 && tokens[tokens.length - 1] === '') tokens.pop();
      return this.tok('pipeless-text', tokens);
    }
  },

  /**
   * ':'
   */

  colon: function() {
    return this.scan(/^: */, ':');
  },

  fail: function () {
    throw new Error('unexpected text ' + this.input.substr(0, 5));
  },

  /**
   * Return the next token object, or those
   * previously stashed by lookahead.
   *
   * @return {Object}
   * @api private
   */

  advance: function(){
    return this.stashed()
      || this.next();
  },

  /**
   * Return the next token object.
   *
   * @return {Object}
   * @api private
   */

  next: function() {
    return this.deferred()
      || this.blank()
      || this.eos()
      || this.pipelessText()
      || this.yield()
      || this.doctype()
      || this.interpolation()
      || this["case"]()
      || this.when()
      || this["default"]()
      || this["extends"]()
      || this.append()
      || this.prepend()
      || this.block()
      || this.mixinBlock()
      || this.include()
      || this.includeFiltered()
      || this.mixin()
      || this.call()
      || this.conditional()
      || this.each()
      || this["while"]()
      || this.tag()
      || this.filter()
      || this.code()
      || this.id()
      || this.className()
      || this.attrs()
      || this.attributesBlock()
      || this.indent()
      || this.text()
      || this.comment()
      || this.colon()
      || this.dot()
      || this.textFail()
      || this.fail();
  }
};

},{"./utils":25,"character-parser":29}],7:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a `Attrs` node.
 *
 * @api public
 */

var Attrs = module.exports = function Attrs() {
  this.attributeNames = [];
  this.attrs = [];
  this.attributeBlocks = [];
};

// Inherit from `Node`.
Attrs.prototype = Object.create(Node.prototype);
Attrs.prototype.constructor = Attrs;

Attrs.prototype.type = 'Attrs';

/**
 * Set attribute `name` to `val`, keep in mind these become
 * part of a raw js object literal, so to quote a value you must
 * '"quote me"', otherwise or example 'user.name' is literal JavaScript.
 *
 * @param {String} name
 * @param {String} val
 * @param {Boolean} escaped
 * @return {Tag} for chaining
 * @api public
 */

Attrs.prototype.setAttribute = function(name, val, escaped){
  if (name !== 'class' && this.attributeNames.indexOf(name) !== -1) {
    throw new Error('Duplicate attribute "' + name + '" is not allowed.');
  }
  this.attributeNames.push(name);
  this.attrs.push({ name: name, val: val, escaped: escaped });
  return this;
};

/**
 * Remove attribute `name` when present.
 *
 * @param {String} name
 * @api public
 */

Attrs.prototype.removeAttribute = function(name){
  var err = new Error('attrs.removeAttribute is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);

  for (var i = 0, len = this.attrs.length; i < len; ++i) {
    if (this.attrs[i] && this.attrs[i].name == name) {
      delete this.attrs[i];
    }
  }
};

/**
 * Get attribute value by `name`.
 *
 * @param {String} name
 * @return {String}
 * @api public
 */

Attrs.prototype.getAttribute = function(name){
  var err = new Error('attrs.getAttribute is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);

  for (var i = 0, len = this.attrs.length; i < len; ++i) {
    if (this.attrs[i] && this.attrs[i].name == name) {
      return this.attrs[i].val;
    }
  }
};

Attrs.prototype.addAttributes = function (src) {
  this.attributeBlocks.push(src);
};

},{"./node":20}],8:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a `BlockComment` with the given `block`.
 *
 * @param {String} val
 * @param {Block} block
 * @param {Boolean} buffer
 * @api public
 */

var BlockComment = module.exports = function BlockComment(val, block, buffer) {
  this.block = block;
  this.val = val;
  this.buffer = buffer;
};

// Inherit from `Node`.
BlockComment.prototype = Object.create(Node.prototype);
BlockComment.prototype.constructor = BlockComment;

BlockComment.prototype.type = 'BlockComment';

},{"./node":20}],9:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a new `Block` with an optional `node`.
 *
 * @param {Node} node
 * @api public
 */

var Block = module.exports = function Block(node){
  this.nodes = [];
  if (node) this.push(node);
};

// Inherit from `Node`.
Block.prototype = Object.create(Node.prototype);
Block.prototype.constructor = Block;

Block.prototype.type = 'Block';

/**
 * Block flag.
 */

Block.prototype.isBlock = true;

/**
 * Replace the nodes in `other` with the nodes
 * in `this` block.
 *
 * @param {Block} other
 * @api private
 */

Block.prototype.replace = function(other){
  var err = new Error('block.replace is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);

  other.nodes = this.nodes;
};

/**
 * Push the given `node`.
 *
 * @param {Node} node
 * @return {Number}
 * @api public
 */

Block.prototype.push = function(node){
  return this.nodes.push(node);
};

/**
 * Check if this block is empty.
 *
 * @return {Boolean}
 * @api public
 */

Block.prototype.isEmpty = function(){
  return 0 == this.nodes.length;
};

/**
 * Unshift the given `node`.
 *
 * @param {Node} node
 * @return {Number}
 * @api public
 */

Block.prototype.unshift = function(node){
  return this.nodes.unshift(node);
};

/**
 * Return the "last" block, or the first `yield` node.
 *
 * @return {Block}
 * @api private
 */

Block.prototype.includeBlock = function(){
  var ret = this
    , node;

  for (var i = 0, len = this.nodes.length; i < len; ++i) {
    node = this.nodes[i];
    if (node.yield) return node;
    else if (node.textOnly) continue;
    else if (node.includeBlock) ret = node.includeBlock();
    else if (node.block && !node.block.isEmpty()) ret = node.block.includeBlock();
    if (ret.yield) return ret;
  }

  return ret;
};

/**
 * Return a clone of this block.
 *
 * @return {Block}
 * @api private
 */

Block.prototype.clone = function(){
  var err = new Error('block.clone is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);

  var clone = new Block;
  for (var i = 0, len = this.nodes.length; i < len; ++i) {
    clone.push(this.nodes[i].clone());
  }
  return clone;
};

},{"./node":20}],10:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a new `Case` with `expr`.
 *
 * @param {String} expr
 * @api public
 */

var Case = exports = module.exports = function Case(expr, block){
  this.expr = expr;
  this.block = block;
};

// Inherit from `Node`.
Case.prototype = Object.create(Node.prototype);
Case.prototype.constructor = Case;

Case.prototype.type = 'Case';

var When = exports.When = function When(expr, block){
  this.expr = expr;
  this.block = block;
  this.debug = false;
};

// Inherit from `Node`.
When.prototype = Object.create(Node.prototype);
When.prototype.constructor = When;

When.prototype.type = 'When';

},{"./node":20}],11:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a `Code` node with the given code `val`.
 * Code may also be optionally buffered and escaped.
 *
 * @param {String} val
 * @param {Boolean} buffer
 * @param {Boolean} escape
 * @api public
 */

var Code = module.exports = function Code(val, buffer, escape) {
  this.val = val;
  this.buffer = buffer;
  this.escape = escape;
  if (val.match(/^ *else/)) this.debug = false;
};

// Inherit from `Node`.
Code.prototype = Object.create(Node.prototype);
Code.prototype.constructor = Code;

Code.prototype.type = 'Code'; // prevent the minifiers removing this
},{"./node":20}],12:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a `Comment` with the given `val`, optionally `buffer`,
 * otherwise the comment may render in the output.
 *
 * @param {String} val
 * @param {Boolean} buffer
 * @api public
 */

var Comment = module.exports = function Comment(val, buffer) {
  this.val = val;
  this.buffer = buffer;
};

// Inherit from `Node`.
Comment.prototype = Object.create(Node.prototype);
Comment.prototype.constructor = Comment;

Comment.prototype.type = 'Comment';

},{"./node":20}],13:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a `Doctype` with the given `val`. 
 *
 * @param {String} val
 * @api public
 */

var Doctype = module.exports = function Doctype(val) {
  this.val = val;
};

// Inherit from `Node`.
Doctype.prototype = Object.create(Node.prototype);
Doctype.prototype.constructor = Doctype;

Doctype.prototype.type = 'Doctype';

},{"./node":20}],14:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize an `Each` node, representing iteration
 *
 * @param {String} obj
 * @param {String} val
 * @param {String} key
 * @param {Block} block
 * @api public
 */

var Each = module.exports = function Each(obj, val, key, block) {
  this.obj = obj;
  this.val = val;
  this.key = key;
  this.block = block;
};

// Inherit from `Node`.
Each.prototype = Object.create(Node.prototype);
Each.prototype.constructor = Each;

Each.prototype.type = 'Each';

},{"./node":20}],15:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a `Filter` node with the given
 * filter `name` and `block`.
 *
 * @param {String} name
 * @param {Block|Node} block
 * @api public
 */

var Filter = module.exports = function Filter(name, block, attrs) {
  this.name = name;
  this.block = block;
  this.attrs = attrs;
};

// Inherit from `Node`.
Filter.prototype = Object.create(Node.prototype);
Filter.prototype.constructor = Filter;

Filter.prototype.type = 'Filter';

},{"./node":20}],16:[function(require,module,exports){
'use strict';

exports.Node = require('./node');
exports.Tag = require('./tag');
exports.Code = require('./code');
exports.Each = require('./each');
exports.Case = require('./case');
exports.Text = require('./text');
exports.Block = require('./block');
exports.MixinBlock = require('./mixin-block');
exports.Mixin = require('./mixin');
exports.Filter = require('./filter');
exports.Comment = require('./comment');
exports.Literal = require('./literal');
exports.BlockComment = require('./block-comment');
exports.Doctype = require('./doctype');

},{"./block":9,"./block-comment":8,"./case":10,"./code":11,"./comment":12,"./doctype":13,"./each":14,"./filter":15,"./literal":17,"./mixin":19,"./mixin-block":18,"./node":20,"./tag":21,"./text":22}],17:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a `Literal` node with the given `str.
 *
 * @param {String} str
 * @api public
 */

var Literal = module.exports = function Literal(str) {
  this.str = str;
};

// Inherit from `Node`.
Literal.prototype = Object.create(Node.prototype);
Literal.prototype.constructor = Literal;

Literal.prototype.type = 'Literal';

},{"./node":20}],18:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a new `Block` with an optional `node`.
 *
 * @param {Node} node
 * @api public
 */

var MixinBlock = module.exports = function MixinBlock(){};

// Inherit from `Node`.
MixinBlock.prototype = Object.create(Node.prototype);
MixinBlock.prototype.constructor = MixinBlock;

MixinBlock.prototype.type = 'MixinBlock';

},{"./node":20}],19:[function(require,module,exports){
'use strict';

var Attrs = require('./attrs');

/**
 * Initialize a new `Mixin` with `name` and `block`.
 *
 * @param {String} name
 * @param {String} args
 * @param {Block} block
 * @api public
 */

var Mixin = module.exports = function Mixin(name, args, block, call){
  Attrs.call(this);
  this.name = name;
  this.args = args;
  this.block = block;
  this.call = call;
};

// Inherit from `Attrs`.
Mixin.prototype = Object.create(Attrs.prototype);
Mixin.prototype.constructor = Mixin;

Mixin.prototype.type = 'Mixin';

},{"./attrs":7}],20:[function(require,module,exports){
'use strict';

var Node = module.exports = function Node(){};

/**
 * Clone this node (return itself)
 *
 * @return {Node}
 * @api private
 */

Node.prototype.clone = function(){
  var err = new Error('node.clone is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);
  return this;
};

Node.prototype.type = '';

},{}],21:[function(require,module,exports){
'use strict';

var Attrs = require('./attrs');
var Block = require('./block');
var inlineTags = require('../inline-tags');

/**
 * Initialize a `Tag` node with the given tag `name` and optional `block`.
 *
 * @param {String} name
 * @param {Block} block
 * @api public
 */

var Tag = module.exports = function Tag(name, block) {
  Attrs.call(this);
  this.name = name;
  this.block = block || new Block;
};

// Inherit from `Attrs`.
Tag.prototype = Object.create(Attrs.prototype);
Tag.prototype.constructor = Tag;

Tag.prototype.type = 'Tag';

/**
 * Clone this tag.
 *
 * @return {Tag}
 * @api private
 */

Tag.prototype.clone = function(){
  var err = new Error('tag.clone is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);

  var clone = new Tag(this.name, this.block.clone());
  clone.line = this.line;
  clone.attrs = this.attrs;
  clone.textOnly = this.textOnly;
  return clone;
};

/**
 * Check if this tag is an inline tag.
 *
 * @return {Boolean}
 * @api private
 */

Tag.prototype.isInline = function(){
  return ~inlineTags.indexOf(this.name);
};

/**
 * Check if this tag's contents can be inlined.  Used for pretty printing.
 *
 * @return {Boolean}
 * @api private
 */

Tag.prototype.canInline = function(){
  var nodes = this.block.nodes;

  function isInline(node){
    // Recurse if the node is a block
    if (node.isBlock) return node.nodes.every(isInline);
    return node.isText || (node.isInline && node.isInline());
  }

  // Empty tag
  if (!nodes.length) return true;

  // Text-only or inline-only tag
  if (1 == nodes.length) return isInline(nodes[0]);

  // Multi-line inline-only tag
  if (this.block.nodes.every(isInline)) {
    for (var i = 1, len = nodes.length; i < len; ++i) {
      if (nodes[i-1].isText && nodes[i].isText)
        return false;
    }
    return true;
  }

  // Mixed tag
  return false;
};

},{"../inline-tags":5,"./attrs":7,"./block":9}],22:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a `Text` node with optional `line`.
 *
 * @param {String} line
 * @api public
 */

var Text = module.exports = function Text(line) {
  this.val = line;
};

// Inherit from `Node`.
Text.prototype = Object.create(Node.prototype);
Text.prototype.constructor = Text;

Text.prototype.type = 'Text';

/**
 * Flag as text.
 */

Text.prototype.isText = true;
},{"./node":20}],23:[function(require,module,exports){
'use strict';

var Lexer = require('./lexer');
var nodes = require('./nodes');
var utils = require('./utils');
var filters = require('./filters');
var path = require('path');
var constantinople = require('constantinople');
var parseJSExpression = require('character-parser').parseMax;
var extname = path.extname;

/**
 * Initialize `Parser` with the given input `str` and `filename`.
 *
 * @param {String} str
 * @param {String} filename
 * @param {Object} options
 * @api public
 */

var Parser = exports = module.exports = function Parser(str, filename, options){
  //Strip any UTF-8 BOM off of the start of `str`, if it exists.
  this.input = str.replace(/^\uFEFF/, '');
  this.lexer = new Lexer(this.input, filename);
  this.filename = filename;
  this.blocks = {};
  this.mixins = {};
  this.options = options;
  this.contexts = [this];
  this.inMixin = false;
  this.dependencies = [];
  this.inBlock = 0;
};

/**
 * Parser prototype.
 */

Parser.prototype = {

  /**
   * Save original constructor
   */

  constructor: Parser,

  /**
   * Push `parser` onto the context stack,
   * or pop and return a `Parser`.
   */

  context: function(parser){
    if (parser) {
      this.contexts.push(parser);
    } else {
      return this.contexts.pop();
    }
  },

  /**
   * Return the next token object.
   *
   * @return {Object}
   * @api private
   */

  advance: function(){
    return this.lexer.advance();
  },

  /**
   * Single token lookahead.
   *
   * @return {Object}
   * @api private
   */

  peek: function() {
    return this.lookahead(1);
  },

  /**
   * Return lexer lineno.
   *
   * @return {Number}
   * @api private
   */

  line: function() {
    return this.lexer.lineno;
  },

  /**
   * `n` token lookahead.
   *
   * @param {Number} n
   * @return {Object}
   * @api private
   */

  lookahead: function(n){
    return this.lexer.lookahead(n);
  },

  /**
   * Parse input returning a string of js for evaluation.
   *
   * @return {String}
   * @api public
   */

  parse: function(){
    var block = new nodes.Block, parser;
    block.line = 0;
    block.filename = this.filename;

    while ('eos' != this.peek().type) {
      if ('newline' == this.peek().type) {
        this.advance();
      } else {
        var next = this.peek();
        var expr = this.parseExpr();
        expr.filename = expr.filename || this.filename;
        expr.line = next.line;
        block.push(expr);
      }
    }

    if (parser = this.extending) {
      this.context(parser);
      var ast = parser.parse();
      this.context();

      // hoist mixins
      for (var name in this.mixins)
        ast.unshift(this.mixins[name]);
      return ast;
    }

    if (!this.extending && !this.included && Object.keys(this.blocks).length){
      var blocks = [];
      utils.walkAST(block, function (node) {
        if (node.type === 'Block' && node.name) {
          blocks.push(node.name);
        }
      });
      Object.keys(this.blocks).forEach(function (name) {
        if (blocks.indexOf(name) === -1 && !this.blocks[name].isSubBlock) {
          console.warn('Warning: Unexpected block "'
                       + name
                       + '" '
                       + ' on line '
                       + this.blocks[name].line
                       + ' of '
                       + (this.blocks[name].filename)
                       + '. This block is never used. This warning will be an error in v2.0.0');
        }
      }.bind(this));
    }

    return block;
  },

  /**
   * Expect the given type, or throw an exception.
   *
   * @param {String} type
   * @api private
   */

  expect: function(type){
    if (this.peek().type === type) {
      return this.advance();
    } else {
      throw new Error('expected "' + type + '", but got "' + this.peek().type + '"');
    }
  },

  /**
   * Accept the given `type`.
   *
   * @param {String} type
   * @api private
   */

  accept: function(type){
    if (this.peek().type === type) {
      return this.advance();
    }
  },

  /**
   *   tag
   * | doctype
   * | mixin
   * | include
   * | filter
   * | comment
   * | text
   * | each
   * | code
   * | yield
   * | id
   * | class
   * | interpolation
   */

  parseExpr: function(){
    switch (this.peek().type) {
      case 'tag':
        return this.parseTag();
      case 'mixin':
        return this.parseMixin();
      case 'block':
        return this.parseBlock();
      case 'mixin-block':
        return this.parseMixinBlock();
      case 'case':
        return this.parseCase();
      case 'extends':
        return this.parseExtends();
      case 'include':
        return this.parseInclude();
      case 'doctype':
        return this.parseDoctype();
      case 'filter':
        return this.parseFilter();
      case 'comment':
        return this.parseComment();
      case 'text':
        return this.parseText();
      case 'each':
        return this.parseEach();
      case 'code':
        return this.parseCode();
      case 'call':
        return this.parseCall();
      case 'interpolation':
        return this.parseInterpolation();
      case 'yield':
        this.advance();
        var block = new nodes.Block;
        block.yield = true;
        return block;
      case 'id':
      case 'class':
        var tok = this.advance();
        this.lexer.defer(this.lexer.tok('tag', 'div'));
        this.lexer.defer(tok);
        return this.parseExpr();
      default:
        throw new Error('unexpected token "' + this.peek().type + '"');
    }
  },

  /**
   * Text
   */

  parseText: function(){
    var tok = this.expect('text');
    var tokens = this.parseInlineTagsInText(tok.val);
    if (tokens.length === 1) return tokens[0];
    var node = new nodes.Block;
    for (var i = 0; i < tokens.length; i++) {
      node.push(tokens[i]);
    };
    return node;
  },

  /**
   *   ':' expr
   * | block
   */

  parseBlockExpansion: function(){
    if (':' == this.peek().type) {
      this.advance();
      return new nodes.Block(this.parseExpr());
    } else {
      return this.block();
    }
  },

  /**
   * case
   */

  parseCase: function(){
    var val = this.expect('case').val;
    var node = new nodes.Case(val);
    node.line = this.line();

    var block = new nodes.Block;
    block.line = this.line();
    block.filename = this.filename;
    this.expect('indent');
    while ('outdent' != this.peek().type) {
      switch (this.peek().type) {
        case 'newline':
          this.advance();
          break;
        case 'when':
          block.push(this.parseWhen());
          break;
        case 'default':
          block.push(this.parseDefault());
          break;
        default:
          throw new Error('Unexpected token "' + this.peek().type
                          + '", expected "when", "default" or "newline"');
      }
    }
    this.expect('outdent');

    node.block = block;

    return node;
  },

  /**
   * when
   */

  parseWhen: function(){
    var val = this.expect('when').val;
    if (this.peek().type !== 'newline')
      return new nodes.Case.When(val, this.parseBlockExpansion());
    else
      return new nodes.Case.When(val);
  },

  /**
   * default
   */

  parseDefault: function(){
    this.expect('default');
    return new nodes.Case.When('default', this.parseBlockExpansion());
  },

  /**
   * code
   */

  parseCode: function(afterIf){
    var tok = this.expect('code');
    var node = new nodes.Code(tok.val, tok.buffer, tok.escape);
    var block;
    node.line = this.line();

    // throw an error if an else does not have an if
    if (tok.isElse && !tok.hasIf) {
      throw new Error('Unexpected else without if');
    }

    // handle block
    block = 'indent' == this.peek().type;
    if (block) {
      node.block = this.block();
    }

    // handle missing block
    if (tok.requiresBlock && !block) {
      node.block = new nodes.Block();
    }

    // mark presense of if for future elses
    if (tok.isIf && this.peek().isElse) {
      this.peek().hasIf = true;
    } else if (tok.isIf && this.peek().type === 'newline' && this.lookahead(2).isElse) {
      this.lookahead(2).hasIf = true;
    }

    return node;
  },

  /**
   * comment
   */

  parseComment: function(){
    var tok = this.expect('comment');
    var node;

    var block;
    if (block = this.parseTextBlock()) {
      node = new nodes.BlockComment(tok.val, block, tok.buffer);
    } else {
      node = new nodes.Comment(tok.val, tok.buffer);
    }

    node.line = this.line();
    return node;
  },

  /**
   * doctype
   */

  parseDoctype: function(){
    var tok = this.expect('doctype');
    var node = new nodes.Doctype(tok.val);
    node.line = this.line();
    return node;
  },

  /**
   * filter attrs? text-block
   */

  parseFilter: function(){
    var tok = this.expect('filter');
    var attrs = this.accept('attrs');
    var block;

    block = this.parseTextBlock() || new nodes.Block();

    var options = {};
    if (attrs) {
      attrs.attrs.forEach(function (attribute) {
        options[attribute.name] = constantinople.toConstant(attribute.val);
      });
    }

    var node = new nodes.Filter(tok.val, block, options);
    node.line = this.line();
    return node;
  },

  /**
   * each block
   */

  parseEach: function(){
    var tok = this.expect('each');
    var node = new nodes.Each(tok.code, tok.val, tok.key);
    node.line = this.line();
    node.block = this.block();
    if (this.peek().type == 'code' && this.peek().val == 'else') {
      this.advance();
      node.alternative = this.block();
    }
    return node;
  },

  /**
   * Resolves a path relative to the template for use in
   * includes and extends
   *
   * @param {String}  path
   * @param {String}  purpose  Used in error messages.
   * @return {String}
   * @api private
   */

  resolvePath: function (path, purpose) {
    var p = require('path');
    var dirname = p.dirname;
    var basename = p.basename;
    var join = p.join;

    if (path[0] !== '/' && !this.filename)
      throw new Error('the "filename" option is required to use "' + purpose + '" with "relative" paths');

    if (path[0] === '/' && !this.options.basedir)
      throw new Error('the "basedir" option is required to use "' + purpose + '" with "absolute" paths');

    path = join(path[0] === '/' ? this.options.basedir : dirname(this.filename), path);

    if (basename(path).indexOf('.') === -1) path += '.jade';

    return path;
  },

  /**
   * 'extends' name
   */

  parseExtends: function(){
    var fs = require('fs');

    var path = this.resolvePath(this.expect('extends').val.trim(), 'extends');
    if ('.jade' != path.substr(-5)) path += '.jade';

    this.dependencies.push(path);
    var str = fs.readFileSync(path, 'utf8');
    var parser = new this.constructor(str, path, this.options);
    parser.dependencies = this.dependencies;

    parser.blocks = this.blocks;
    parser.included = this.included;
    parser.contexts = this.contexts;
    this.extending = parser;

    // TODO: null node
    return new nodes.Literal('');
  },

  /**
   * 'block' name block
   */

  parseBlock: function(){
    var block = this.expect('block');
    var mode = block.mode;
    var name = block.val.trim();

    var line = block.line;

    this.inBlock++;
    block = 'indent' == this.peek().type
      ? this.block()
      : new nodes.Block(new nodes.Literal(''));
    this.inBlock--;
    block.name = name;
    block.line = line;

    var prev = this.blocks[name] || {prepended: [], appended: []}
    if (prev.mode === 'replace') return this.blocks[name] = prev;

    var allNodes = prev.prepended.concat(block.nodes).concat(prev.appended);

    switch (mode) {
      case 'append':
        prev.appended = prev.parser === this ?
                        prev.appended.concat(block.nodes) :
                        block.nodes.concat(prev.appended);
        break;
      case 'prepend':
        prev.prepended = prev.parser === this ?
                         block.nodes.concat(prev.prepended) :
                         prev.prepended.concat(block.nodes);
        break;
    }
    block.nodes = allNodes;
    block.appended = prev.appended;
    block.prepended = prev.prepended;
    block.mode = mode;
    block.parser = this;

    block.isSubBlock = this.inBlock > 0;

    return this.blocks[name] = block;
  },

  parseMixinBlock: function () {
    var block = this.expect('mixin-block');
    if (!this.inMixin) {
      throw new Error('Anonymous blocks are not allowed unless they are part of a mixin.');
    }
    return new nodes.MixinBlock();
  },

  /**
   * include block?
   */

  parseInclude: function(){
    var fs = require('fs');
    var tok = this.expect('include');

    var path = this.resolvePath(tok.val.trim(), 'include');
    this.dependencies.push(path);
    // has-filter
    if (tok.filter) {
      var str = fs.readFileSync(path, 'utf8').replace(/\r/g, '');
      var options = {filename: path};
      if (tok.attrs) {
        tok.attrs.attrs.forEach(function (attribute) {
          options[attribute.name] = constantinople.toConstant(attribute.val);
        });
      }
      str = filters(tok.filter, str, options);
      return new nodes.Literal(str);
    }

    // non-jade
    if ('.jade' != path.substr(-5)) {
      var str = fs.readFileSync(path, 'utf8').replace(/\r/g, '');
      return new nodes.Literal(str);
    }

    var str = fs.readFileSync(path, 'utf8');
    var parser = new this.constructor(str, path, this.options);
    parser.dependencies = this.dependencies;

    parser.blocks = utils.merge({}, this.blocks);
    parser.included = true;

    parser.mixins = this.mixins;

    this.context(parser);
    var ast = parser.parse();
    this.context();
    ast.filename = path;

    if ('indent' == this.peek().type) {
      ast.includeBlock().push(this.block());
    }

    return ast;
  },

  /**
   * call ident block
   */

  parseCall: function(){
    var tok = this.expect('call');
    var name = tok.val;
    var args = tok.args;
    var mixin = new nodes.Mixin(name, args, new nodes.Block, true);

    this.tag(mixin);
    if (mixin.code) {
      mixin.block.push(mixin.code);
      mixin.code = null;
    }
    if (mixin.block.isEmpty()) mixin.block = null;
    return mixin;
  },

  /**
   * mixin block
   */

  parseMixin: function(){
    var tok = this.expect('mixin');
    var name = tok.val;
    var args = tok.args;
    var mixin;

    // definition
    if ('indent' == this.peek().type) {
      this.inMixin = true;
      mixin = new nodes.Mixin(name, args, this.block(), false);
      this.mixins[name] = mixin;
      this.inMixin = false;
      return mixin;
    // call
    } else {
      return new nodes.Mixin(name, args, null, true);
    }
  },

  parseInlineTagsInText: function (str) {
    var line = this.line();

    var match = /(\\)?#\[((?:.|\n)*)$/.exec(str);
    if (match) {
      if (match[1]) { // escape
        var text = new nodes.Text(str.substr(0, match.index) + '#[');
        text.line = line;
        var rest = this.parseInlineTagsInText(match[2]);
        if (rest[0].type === 'Text') {
          text.val += rest[0].val;
          rest.shift();
        }
        return [text].concat(rest);
      } else {
        var text = new nodes.Text(str.substr(0, match.index));
        text.line = line;
        var buffer = [text];
        var rest = match[2];
        var range = parseJSExpression(rest);
        var inner = new Parser(range.src, this.filename, this.options);
        buffer.push(inner.parse());
        return buffer.concat(this.parseInlineTagsInText(rest.substr(range.end + 1)));
      }
    } else {
      var text = new nodes.Text(str);
      text.line = line;
      return [text];
    }
  },

  /**
   * indent (text | newline)* outdent
   */

  parseTextBlock: function(){
    var block = new nodes.Block;
    block.line = this.line();
    var body = this.peek();
    if (body.type !== 'pipeless-text') return;
    this.advance();
    block.nodes = body.val.reduce(function (accumulator, text) {
      return accumulator.concat(this.parseInlineTagsInText(text));
    }.bind(this), []);
    return block;
  },

  /**
   * indent expr* outdent
   */

  block: function(){
    var block = new nodes.Block;
    block.line = this.line();
    block.filename = this.filename;
    this.expect('indent');
    while ('outdent' != this.peek().type) {
      if ('newline' == this.peek().type) {
        this.advance();
      } else {
        var expr = this.parseExpr();
        expr.filename = this.filename;
        block.push(expr);
      }
    }
    this.expect('outdent');
    return block;
  },

  /**
   * interpolation (attrs | class | id)* (text | code | ':')? newline* block?
   */

  parseInterpolation: function(){
    var tok = this.advance();
    var tag = new nodes.Tag(tok.val);
    tag.buffer = true;
    return this.tag(tag);
  },

  /**
   * tag (attrs | class | id)* (text | code | ':')? newline* block?
   */

  parseTag: function(){
    var tok = this.advance();
    var tag = new nodes.Tag(tok.val);

    tag.selfClosing = tok.selfClosing;

    return this.tag(tag);
  },

  /**
   * Parse tag.
   */

  tag: function(tag){
    tag.line = this.line();

    var seenAttrs = false;
    // (attrs | class | id)*
    out:
      while (true) {
        switch (this.peek().type) {
          case 'id':
          case 'class':
            var tok = this.advance();
            tag.setAttribute(tok.type, "'" + tok.val + "'");
            continue;
          case 'attrs':
            if (seenAttrs) {
              console.warn(this.filename + ', line ' + this.peek().line + ':\nYou should not have jade tags with multiple attributes.');
            }
            seenAttrs = true;
            var tok = this.advance();
            var attrs = tok.attrs;

            if (tok.selfClosing) tag.selfClosing = true;

            for (var i = 0; i < attrs.length; i++) {
              tag.setAttribute(attrs[i].name, attrs[i].val, attrs[i].escaped);
            }
            continue;
          case '&attributes':
            var tok = this.advance();
            tag.addAttributes(tok.val);
            break;
          default:
            break out;
        }
      }

    // check immediate '.'
    if ('dot' == this.peek().type) {
      tag.textOnly = true;
      this.advance();
    }

    // (text | code | ':')?
    switch (this.peek().type) {
      case 'text':
        tag.block.push(this.parseText());
        break;
      case 'code':
        tag.code = this.parseCode();
        break;
      case ':':
        this.advance();
        tag.block = new nodes.Block;
        tag.block.push(this.parseExpr());
        break;
      case 'newline':
      case 'indent':
      case 'outdent':
      case 'eos':
      case 'pipeless-text':
        break;
      default:
        throw new Error('Unexpected token `' + this.peek().type + '` expected `text`, `code`, `:`, `newline` or `eos`')
    }

    // newline*
    while ('newline' == this.peek().type) this.advance();

    // block?
    if (tag.textOnly) {
      tag.block = this.parseTextBlock() || new nodes.Block();
    } else if ('indent' == this.peek().type) {
      var block = this.block();
      for (var i = 0, len = block.nodes.length; i < len; ++i) {
        tag.block.push(block.nodes[i]);
      }
    }

    return tag;
  }
};

},{"./filters":3,"./lexer":6,"./nodes":16,"./utils":25,"character-parser":29,"constantinople":30,"fs":26,"path":27}],24:[function(require,module,exports){
'use strict';

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = merge(attrs, a[i]);
    }
    return attrs;
  }
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    a['class'] = ac.concat(bc).filter(nulls);
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {*} val
 * @return {Boolean}
 * @api private
 */

function nulls(val) {
  return val != null && val !== '';
}

/**
 * join array as classes.
 *
 * @param {*} val
 * @return {String}
 */
exports.joinClasses = joinClasses;
function joinClasses(val) {
  return (Array.isArray(val) ? val.map(joinClasses) :
    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
    [val]).filter(nulls).join(' ');
}

/**
 * Render the given classes.
 *
 * @param {Array} classes
 * @param {Array.<Boolean>} escaped
 * @return {String}
 */
exports.cls = function cls(classes, escaped) {
  var buf = [];
  for (var i = 0; i < classes.length; i++) {
    if (escaped && escaped[i]) {
      buf.push(exports.escape(joinClasses([classes[i]])));
    } else {
      buf.push(joinClasses(classes[i]));
    }
  }
  var text = joinClasses(buf);
  if (text.length) {
    return ' class="' + text + '"';
  } else {
    return '';
  }
};


exports.style = function (val) {
  if (val && typeof val === 'object') {
    return Object.keys(val).map(function (style) {
      return style + ':' + val[style];
    }).join(';');
  } else {
    return val;
  }
};
/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = function attr(key, val, escaped, terse) {
  if (key === 'style') {
    val = exports.style(val);
  }
  if ('boolean' == typeof val || null == val) {
    if (val) {
      return ' ' + (terse ? key : key + '="' + key + '"');
    } else {
      return '';
    }
  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
    if (JSON.stringify(val).indexOf('&') !== -1) {
      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
                   'will be escaped to `&amp;`');
    };
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will eliminate the double quotes around dates in ' +
                   'ISO form after 2.0.0');
    }
    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
  } else if (escaped) {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + exports.escape(val) + '"';
  } else {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + val + '"';
  }
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 */
exports.attrs = function attrs(obj, terse){
  var buf = [];

  var keys = Object.keys(obj);

  if (keys.length) {
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('class' == key) {
        if (val = joinClasses(val)) {
          buf.push(' ' + key + '="' + val + '"');
        }
      } else {
        buf.push(exports.attr(key, val, false, terse));
      }
    }
  }

  return buf.join('');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

exports.escape = function escape(html){
  var result = String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  if (result === '' + html) return html;
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || require('fs').readFileSync(filename, 'utf8')
  } catch (ex) {
    rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

},{"fs":26}],25:[function(require,module,exports){
'use strict';

/**
 * Merge `b` into `a`.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object}
 * @api public
 */

exports.merge = function(a, b) {
  for (var key in b) a[key] = b[key];
  return a;
};

exports.stringify = function(str) {
  return JSON.stringify(str)
             .replace(/\u2028/g, '\\u2028')
             .replace(/\u2029/g, '\\u2029');
};

exports.walkAST = function walkAST(ast, before, after) {
  before && before(ast);
  switch (ast.type) {
    case 'Block':
      ast.nodes.forEach(function (node) {
        walkAST(node, before, after);
      });
      break;
    case 'Case':
    case 'Each':
    case 'Mixin':
    case 'Tag':
    case 'When':
    case 'Code':
      ast.block && walkAST(ast.block, before, after);
      break;
    case 'Attrs':
    case 'BlockComment':
    case 'Comment':
    case 'Doctype':
    case 'Filter':
    case 'Literal':
    case 'MixinBlock':
    case 'Text':
      break;
    default:
      throw new Error('Unexpected node type ' + ast.type);
      break;
  }
  after && after(ast);
};

},{}],26:[function(require,module,exports){

},{}],27:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":28}],28:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canMutationObserver = typeof window !== 'undefined'
    && window.MutationObserver;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    var queue = [];

    if (canMutationObserver) {
        var hiddenDiv = document.createElement("div");
        var observer = new MutationObserver(function () {
            var queueList = queue.slice();
            queue.length = 0;
            queueList.forEach(function (fn) {
                fn();
            });
        });

        observer.observe(hiddenDiv, { attributes: true });

        return function nextTick(fn) {
            if (!queue.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            queue.push(fn);
        };
    }

    if (canPost) {
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],29:[function(require,module,exports){
exports = (module.exports = parse);
exports.parse = parse;
function parse(src, state, options) {
  options = options || {};
  state = state || exports.defaultState();
  var start = options.start || 0;
  var end = options.end || src.length;
  var index = start;
  while (index < end) {
    if (state.roundDepth < 0 || state.curlyDepth < 0 || state.squareDepth < 0) {
      throw new SyntaxError('Mismatched Bracket: ' + src[index - 1]);
    }
    exports.parseChar(src[index++], state);
  }
  return state;
}

exports.parseMax = parseMax;
function parseMax(src, options) {
  options = options || {};
  var start = options.start || 0;
  var index = start;
  var state = exports.defaultState();
  while (state.roundDepth >= 0 && state.curlyDepth >= 0 && state.squareDepth >= 0) {
    if (index >= src.length) {
      throw new Error('The end of the string was reached with no closing bracket found.');
    }
    exports.parseChar(src[index++], state);
  }
  var end = index - 1;
  return {
    start: start,
    end: end,
    src: src.substring(start, end)
  };
}

exports.parseUntil = parseUntil;
function parseUntil(src, delimiter, options) {
  options = options || {};
  var includeLineComment = options.includeLineComment || false;
  var start = options.start || 0;
  var index = start;
  var state = exports.defaultState();
  while (state.isString() || state.regexp || state.blockComment ||
         (!includeLineComment && state.lineComment) || !startsWith(src, delimiter, index)) {
    exports.parseChar(src[index++], state);
  }
  var end = index;
  return {
    start: start,
    end: end,
    src: src.substring(start, end)
  };
}


exports.parseChar = parseChar;
function parseChar(character, state) {
  if (character.length !== 1) throw new Error('Character must be a string of length 1');
  state = state || exports.defaultState();
  state.src = state.src || '';
  state.src += character;
  var wasComment = state.blockComment || state.lineComment;
  var lastChar = state.history ? state.history[0] : '';

  if (state.regexpStart) {
    if (character === '/' || character == '*') {
      state.regexp = false;
    }
    state.regexpStart = false;
  }
  if (state.lineComment) {
    if (character === '\n') {
      state.lineComment = false;
    }
  } else if (state.blockComment) {
    if (state.lastChar === '*' && character === '/') {
      state.blockComment = false;
    }
  } else if (state.singleQuote) {
    if (character === '\'' && !state.escaped) {
      state.singleQuote = false;
    } else if (character === '\\' && !state.escaped) {
      state.escaped = true;
    } else {
      state.escaped = false;
    }
  } else if (state.doubleQuote) {
    if (character === '"' && !state.escaped) {
      state.doubleQuote = false;
    } else if (character === '\\' && !state.escaped) {
      state.escaped = true;
    } else {
      state.escaped = false;
    }
  } else if (state.regexp) {
    if (character === '/' && !state.escaped) {
      state.regexp = false;
    } else if (character === '\\' && !state.escaped) {
      state.escaped = true;
    } else {
      state.escaped = false;
    }
  } else if (lastChar === '/' && character === '/') {
    state.history = state.history.substr(1);
    state.lineComment = true;
  } else if (lastChar === '/' && character === '*') {
    state.history = state.history.substr(1);
    state.blockComment = true;
  } else if (character === '/' && isRegexp(state.history)) {
    state.regexp = true;
    state.regexpStart = true;
  } else if (character === '\'') {
    state.singleQuote = true;
  } else if (character === '"') {
    state.doubleQuote = true;
  } else if (character === '(') {
    state.roundDepth++;
  } else if (character === ')') {
    state.roundDepth--;
  } else if (character === '{') {
    state.curlyDepth++;
  } else if (character === '}') {
    state.curlyDepth--;
  } else if (character === '[') {
    state.squareDepth++;
  } else if (character === ']') {
    state.squareDepth--;
  }
  if (!state.blockComment && !state.lineComment && !wasComment) state.history = character + state.history;
  state.lastChar = character; // store last character for ending block comments
  return state;
}

exports.defaultState = function () { return new State() };
function State() {
  this.lineComment = false;
  this.blockComment = false;

  this.singleQuote = false;
  this.doubleQuote = false;
  this.regexp = false;

  this.escaped = false;

  this.roundDepth = 0;
  this.curlyDepth = 0;
  this.squareDepth = 0;

  this.history = ''
  this.lastChar = ''
}
State.prototype.isString = function () {
  return this.singleQuote || this.doubleQuote;
}
State.prototype.isComment = function () {
  return this.lineComment || this.blockComment;
}
State.prototype.isNesting = function () {
  return this.isString() || this.isComment() || this.regexp || this.roundDepth > 0 || this.curlyDepth > 0 || this.squareDepth > 0
}

function startsWith(str, start, i) {
  return str.substr(i || 0, start.length) === start;
}

exports.isPunctuator = isPunctuator
function isPunctuator(c) {
  if (!c) return true; // the start of a string is a punctuator
  var code = c.charCodeAt(0)

  switch (code) {
    case 46:   // . dot
    case 40:   // ( open bracket
    case 41:   // ) close bracket
    case 59:   // ; semicolon
    case 44:   // , comma
    case 123:  // { open curly brace
    case 125:  // } close curly brace
    case 91:   // [
    case 93:   // ]
    case 58:   // :
    case 63:   // ?
    case 126:  // ~
    case 37:   // %
    case 38:   // &
    case 42:   // *:
    case 43:   // +
    case 45:   // -
    case 47:   // /
    case 60:   // <
    case 62:   // >
    case 94:   // ^
    case 124:  // |
    case 33:   // !
    case 61:   // =
      return true;
    default:
      return false;
  }
}
exports.isKeyword = isKeyword
function isKeyword(id) {
  return (id === 'if') || (id === 'in') || (id === 'do') || (id === 'var') || (id === 'for') || (id === 'new') ||
         (id === 'try') || (id === 'let') || (id === 'this') || (id === 'else') || (id === 'case') ||
         (id === 'void') || (id === 'with') || (id === 'enum') || (id === 'while') || (id === 'break') || (id === 'catch') ||
         (id === 'throw') || (id === 'const') || (id === 'yield') || (id === 'class') || (id === 'super') ||
         (id === 'return') || (id === 'typeof') || (id === 'delete') || (id === 'switch') || (id === 'export') ||
         (id === 'import') || (id === 'default') || (id === 'finally') || (id === 'extends') || (id === 'function') ||
         (id === 'continue') || (id === 'debugger') || (id === 'package') || (id === 'private') || (id === 'interface') ||
         (id === 'instanceof') || (id === 'implements') || (id === 'protected') || (id === 'public') || (id === 'static') ||
         (id === 'yield') || (id === 'let');
}

function isRegexp(history) {
  //could be start of regexp or divide sign

  history = history.replace(/^\s*/, '');

  //unless its an `if`, `while`, `for` or `with` it's a divide, so we assume it's a divide
  if (history[0] === ')') return false;
  //unless it's a function expression, it's a regexp, so we assume it's a regexp
  if (history[0] === '}') return true;
  //any punctuation means it's a regexp
  if (isPunctuator(history[0])) return true;
  //if the last thing was a keyword then it must be a regexp (e.g. `typeof /foo/`)
  if (/^\w+\b/.test(history) && isKeyword(/^\w+\b/.exec(history)[0].split('').reverse().join(''))) return true;

  return false;
}

},{}],30:[function(require,module,exports){
'use strict'

var detect = require('acorn-globals');

var lastSRC = '(null)';
var lastRes = true;
var lastConstants = undefined;

module.exports = isConstant;
function isConstant(src, constants) {
  src = '(' + src + ')';
  if (lastSRC === src && lastConstants === constants) return lastRes;
  lastSRC = src;
  lastConstants = constants;
  try {
    isExpression(src);
    return lastRes = (detect(src).filter(function (key) {
      return !constants || !(key.name in constants);
    }).length === 0);
  } catch (ex) {
    return lastRes = false;
  }
}
isConstant.isConstant = isConstant;

isConstant.toConstant = toConstant;
function toConstant(src, constants) {
  if (!isConstant(src, constants)) throw new Error(JSON.stringify(src) + ' is not constant.');
  return Function(Object.keys(constants || {}).join(','), 'return (' + src + ')').apply(null, Object.keys(constants || {}).map(function (key) {
    return constants[key];
  }));
}

function isExpression(src) {
  try {
    eval('throw "STOP"; (function () { return (' + src + '); })()');
    return false;
  }
  catch (err) {
    return err === 'STOP';
  }
}

},{"acorn-globals":31}],31:[function(require,module,exports){
'use strict';

var acorn = require('acorn');
var walk = require('acorn/util/walk');

function isScope(node) {
  return node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration' || node.type === 'Program';
}
function isBlockScope(node) {
  return node.type === 'BlockStatement' || isScope(node);
}

function declaresArguments(node) {
  return node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration' || node.type === 'ArrowFunction';
}
function declaresThis(node) {
  return node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration';
}

module.exports = findGlobals;
function findGlobals(source) {
  var globals = [];
  var ast = typeof source === 'string' ? acorn.parse(source, { ecmaVersion: 6, allowReturnOutsideFunction: true }) : source;
  if (!(ast && typeof ast === 'object' && ast.type === 'Program')) {
    throw new TypeError('Source must be either a string of JavaScript or an acorn AST');
  }
  var declareFunction = function (node) {
    var fn = node;
    fn.locals = fn.locals || {};
    node.params.forEach(function (node) {
      fn.locals[node.name] = true;
    });
    if (node.id) {
      fn.locals[node.id.name] = true;
    }
  }
  walk.ancestor(ast, {
    'VariableDeclaration': function (node, parents) {
      var parent = null;
      for (var i = parents.length - 1; i >= 0 && parent === null; i--) {
        if (node.kind === 'var' ? isScope(parents[i]) : isBlockScope(parents[i])) {
          parent = parents[i];
        }
      }
      parent.locals = parent.locals || {};
      node.declarations.forEach(function (declaration) {
        parent.locals[declaration.id.name] = true;
      });
    },
    'FunctionDeclaration': function (node, parents) {
      var parent = null;
      for (var i = parents.length - 2; i >= 0 && parent === null; i--) {
        if (isScope(parents[i])) {
          parent = parents[i];
        }
      }
      parent.locals = parent.locals || {};
      parent.locals[node.id.name] = true;
      declareFunction(node);
    },
    'Function': declareFunction,
    'TryStatement': function (node) {
      node.handler.body.locals = node.handler.body.locals || {};
      node.handler.body.locals[node.handler.param.name] = true;
    }
  });
  walk.ancestor(ast, {
    'Identifier': function (node, parents) {
      var name = node.name;
      if (name === 'undefined') return;
      for (var i = 0; i < parents.length; i++) {
        if (name === 'arguments' && declaresArguments(parents[i])) {
          return;
        }
        if (parents[i].locals && name in parents[i].locals) {
          return;
        }
      }
      node.parents = parents;
      globals.push(node);
    },
    ThisExpression: function (node, parents) {
      for (var i = 0; i < parents.length; i++) {
        if (declaresThis(parents[i])) {
          return;
        }
      }
      node.parents = parents;
      globals.push(node);
    }
  });
  var groupedGlobals = {};
  globals.forEach(function (node) {
    groupedGlobals[node.name] = (groupedGlobals[node.name] || []);
    groupedGlobals[node.name].push(node);
  });
  return Object.keys(groupedGlobals).sort().map(function (name) {
    return {name: name, nodes: groupedGlobals[name]};
  });
}

},{"acorn":32,"acorn/util/walk":33}],32:[function(require,module,exports){
// Acorn is a tiny, fast JavaScript parser written in JavaScript.
//
// Acorn was written by Marijn Haverbeke and various contributors and
// released under an MIT license. The Unicode regexps (for identifiers
// and whitespace) were taken from [Esprima](http://esprima.org) by
// Ariya Hidayat.
//
// Git repositories for Acorn are available at
//
//     http://marijnhaverbeke.nl/git/acorn
//     https://github.com/marijnh/acorn.git
//
// Please use the [github bug tracker][ghbt] to report issues.
//
// [ghbt]: https://github.com/marijnh/acorn/issues
//
// This file defines the main parser interface. The library also comes
// with a [error-tolerant parser][dammit] and an
// [abstract syntax tree walker][walk], defined in other files.
//
// [dammit]: acorn_loose.js
// [walk]: util/walk.js

(function(root, mod) {
  if (typeof exports == "object" && typeof module == "object") return mod(exports); // CommonJS
  if (typeof define == "function" && define.amd) return define(["exports"], mod); // AMD
  mod(root.acorn || (root.acorn = {})); // Plain browser env
})(this, function(exports) {
  "use strict";

  exports.version = "0.8.0";

  // The main exported interface (under `self.acorn` when in the
  // browser) is a `parse` function that takes a code string and
  // returns an abstract syntax tree as specified by [Mozilla parser
  // API][api], with the caveat that inline XML is not recognized.
  //
  // [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

  var options, input, inputLen, sourceFile;

  exports.parse = function(inpt, opts) {
    input = String(inpt); inputLen = input.length;
    setOptions(opts);
    initTokenState();
    return parseTopLevel(options.program);
  };

  // A second optional argument can be given to further configure
  // the parser process. These options are recognized:

  var defaultOptions = exports.defaultOptions = {
    // `ecmaVersion` indicates the ECMAScript version to parse. Must
    // be either 3, or 5, or 6. This influences support for strict
    // mode, the set of reserved words, support for getters and
    // setters and other features.
    ecmaVersion: 5,
    // Turn on `strictSemicolons` to prevent the parser from doing
    // automatic semicolon insertion.
    strictSemicolons: false,
    // When `allowTrailingCommas` is false, the parser will not allow
    // trailing commas in array and object literals.
    allowTrailingCommas: true,
    // By default, reserved words are not enforced. Enable
    // `forbidReserved` to enforce them. When this option has the
    // value "everywhere", reserved words and keywords can also not be
    // used as property names.
    forbidReserved: false,
    // When enabled, a return at the top level is not considered an
    // error.
    allowReturnOutsideFunction: false,
    // When `locations` is on, `loc` properties holding objects with
    // `start` and `end` properties in `{line, column}` form (with
    // line being 1-based and column 0-based) will be attached to the
    // nodes.
    locations: false,
    // A function can be passed as `onToken` option, which will
    // cause Acorn to call that function with object in the same
    // format as tokenize() returns. Note that you are not
    // allowed to call the parser from the callback—that will
    // corrupt its internal state.
    onToken: null,
    // A function can be passed as `onComment` option, which will
    // cause Acorn to call that function with `(block, text, start,
    // end)` parameters whenever a comment is skipped. `block` is a
    // boolean indicating whether this is a block (`/* */`) comment,
    // `text` is the content of the comment, and `start` and `end` are
    // character offsets that denote the start and end of the comment.
    // When the `locations` option is on, two more parameters are
    // passed, the full `{line, column}` locations of the start and
    // end of the comments. Note that you are not allowed to call the
    // parser from the callback—that will corrupt its internal state.
    onComment: null,
    // Nodes have their start and end characters offsets recorded in
    // `start` and `end` properties (directly on the node, rather than
    // the `loc` object, which holds line/column data. To also add a
    // [semi-standardized][range] `range` property holding a `[start,
    // end]` array with the same numbers, set the `ranges` option to
    // `true`.
    //
    // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
    ranges: false,
    // It is possible to parse multiple files into a single AST by
    // passing the tree produced by parsing the first file as
    // `program` option in subsequent parses. This will add the
    // toplevel forms of the parsed file to the `Program` (top) node
    // of an existing parse tree.
    program: null,
    // When `locations` is on, you can pass this to record the source
    // file in every node's `loc` object.
    sourceFile: null,
    // This value, if given, is stored in every node, whether
    // `locations` is on or off.
    directSourceFile: null
  };

  var isArray = function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };

  function setOptions(opts) {
    options = opts || {};
    for (var opt in defaultOptions) if (!has(options, opt))
      options[opt] = defaultOptions[opt];
    sourceFile = options.sourceFile || null;
    if (isArray(options.onToken)) {
      var tokens = options.onToken;
      options.onToken = function (token) {
        tokens.push(token);
      };
    }
    if (isArray(options.onComment)) {
      var comments = options.onComment;
      options.onComment = function (block, text, start, end, startLoc, endLoc) {
        var comment = {
          type: block ? 'Block' : 'Line',
          value: text,
          start: start,
          end: end
        };
        if (options.locations) {
          comment.loc = new SourceLocation();
          comment.loc.start = startLoc;
          comment.loc.end = endLoc;
        }
        if (options.ranges)
          comment.range = [start, end];
        comments.push(comment);
      };
    }
    isKeyword = options.ecmaVersion >= 6 ? isEcma6Keyword : isEcma5AndLessKeyword;
  }

  // The `getLineInfo` function is mostly useful when the
  // `locations` option is off (for performance reasons) and you
  // want to find the line/column position for a given character
  // offset. `input` should be the code string that the offset refers
  // into.

  var getLineInfo = exports.getLineInfo = function(input, offset) {
    for (var line = 1, cur = 0;;) {
      lineBreak.lastIndex = cur;
      var match = lineBreak.exec(input);
      if (match && match.index < offset) {
        ++line;
        cur = match.index + match[0].length;
      } else break;
    }
    return {line: line, column: offset - cur};
  };

  function Token() {
    this.type = tokType;
    this.value = tokVal;
    this.start = tokStart;
    this.end = tokEnd;
    if (options.locations) {
      this.loc = new SourceLocation();
      this.loc.end = tokEndLoc;
      // TODO: remove in next major release
      this.startLoc = tokStartLoc;
      this.endLoc = tokEndLoc;
    }
    if (options.ranges)
      this.range = [tokStart, tokEnd];
  }

  exports.Token = Token;

  // Acorn is organized as a tokenizer and a recursive-descent parser.
  // The `tokenize` export provides an interface to the tokenizer.
  // Because the tokenizer is optimized for being efficiently used by
  // the Acorn parser itself, this interface is somewhat crude and not
  // very modular. Performing another parse or call to `tokenize` will
  // reset the internal state, and invalidate existing tokenizers.

  exports.tokenize = function(inpt, opts) {
    input = String(inpt); inputLen = input.length;
    setOptions(opts);
    initTokenState();

    function getToken(forceRegexp) {
      lastEnd = tokEnd;
      readToken(forceRegexp);
      return new Token();
    }
    getToken.jumpTo = function(pos, reAllowed) {
      tokPos = pos;
      if (options.locations) {
        tokCurLine = 1;
        tokLineStart = lineBreak.lastIndex = 0;
        var match;
        while ((match = lineBreak.exec(input)) && match.index < pos) {
          ++tokCurLine;
          tokLineStart = match.index + match[0].length;
        }
      }
      tokRegexpAllowed = reAllowed;
      skipSpace();
    };
    return getToken;
  };

  // State is kept in (closure-)global variables. We already saw the
  // `options`, `input`, and `inputLen` variables above.

  // The current position of the tokenizer in the input.

  var tokPos;

  // The start and end offsets of the current token.

  var tokStart, tokEnd;

  // When `options.locations` is true, these hold objects
  // containing the tokens start and end line/column pairs.

  var tokStartLoc, tokEndLoc;

  // The type and value of the current token. Token types are objects,
  // named by variables against which they can be compared, and
  // holding properties that describe them (indicating, for example,
  // the precedence of an infix operator, and the original name of a
  // keyword token). The kind of value that's held in `tokVal` depends
  // on the type of the token. For literals, it is the literal value,
  // for operators, the operator name, and so on.

  var tokType, tokVal;

  // Internal state for the tokenizer. To distinguish between division
  // operators and regular expressions, it remembers whether the last
  // token was one that is allowed to be followed by an expression.
  // (If it is, a slash is probably a regexp, if it isn't it's a
  // division operator. See the `parseStatement` function for a
  // caveat.)

  var tokRegexpAllowed;

  // When `options.locations` is true, these are used to keep
  // track of the current line, and know when a new line has been
  // entered.

  var tokCurLine, tokLineStart;

  // These store the position of the previous token, which is useful
  // when finishing a node and assigning its `end` position.

  var lastStart, lastEnd, lastEndLoc;

  // This is the parser's state. `inFunction` is used to reject
  // `return` statements outside of functions, `inGenerator` to
  // reject `yield`s outside of generators, `labels` to verify
  // that `break` and `continue` have somewhere to jump to, and
  // `strict` indicates whether strict mode is on.

  var inFunction, inGenerator, labels, strict;

  // This counter is used for checking that arrow expressions did
  // not contain nested parentheses in argument list.

  var metParenL;

  // This is used by parser for detecting if it's inside ES6
  // Template String. If it is, it should treat '$' as prefix before
  // '{expression}' and everything else as string literals.

  var inTemplate;

  // This function is used to raise exceptions on parse errors. It
  // takes an offset integer (into the current `input`) to indicate
  // the location of the error, attaches the position to the end
  // of the error message, and then raises a `SyntaxError` with that
  // message.

  function raise(pos, message) {
    var loc = getLineInfo(input, pos);
    message += " (" + loc.line + ":" + loc.column + ")";
    var err = new SyntaxError(message);
    err.pos = pos; err.loc = loc; err.raisedAt = tokPos;
    throw err;
  }

  // Reused empty array added for node fields that are always empty.

  var empty = [];

  // ## Token types

  // The assignment of fine-grained, information-carrying type objects
  // allows the tokenizer to store the information it has about a
  // token in a way that is very cheap for the parser to look up.

  // All token type variables start with an underscore, to make them
  // easy to recognize.

  // These are the general types. The `type` property is only used to
  // make them recognizeable when debugging.

  var _num = {type: "num"}, _regexp = {type: "regexp"}, _string = {type: "string"};
  var _name = {type: "name"}, _eof = {type: "eof"};

  // Keyword tokens. The `keyword` property (also used in keyword-like
  // operators) indicates that the token originated from an
  // identifier-like word, which is used when parsing property names.
  //
  // The `beforeExpr` property is used to disambiguate between regular
  // expressions and divisions. It is set on all token types that can
  // be followed by an expression (thus, a slash after them would be a
  // regular expression).
  //
  // `isLoop` marks a keyword as starting a loop, which is important
  // to know when parsing a label, in order to allow or disallow
  // continue jumps to that label.

  var _break = {keyword: "break"}, _case = {keyword: "case", beforeExpr: true}, _catch = {keyword: "catch"};
  var _continue = {keyword: "continue"}, _debugger = {keyword: "debugger"}, _default = {keyword: "default"};
  var _do = {keyword: "do", isLoop: true}, _else = {keyword: "else", beforeExpr: true};
  var _finally = {keyword: "finally"}, _for = {keyword: "for", isLoop: true}, _function = {keyword: "function"};
  var _if = {keyword: "if"}, _return = {keyword: "return", beforeExpr: true}, _switch = {keyword: "switch"};
  var _throw = {keyword: "throw", beforeExpr: true}, _try = {keyword: "try"}, _var = {keyword: "var"};
  var _let = {keyword: "let"}, _const = {keyword: "const"};
  var _while = {keyword: "while", isLoop: true}, _with = {keyword: "with"}, _new = {keyword: "new", beforeExpr: true};
  var _this = {keyword: "this"};
  var _class = {keyword: "class"}, _extends = {keyword: "extends", beforeExpr: true};
  var _export = {keyword: "export"}, _import = {keyword: "import"};
  var _yield = {keyword: "yield", beforeExpr: true};

  // The keywords that denote values.

  var _null = {keyword: "null", atomValue: null}, _true = {keyword: "true", atomValue: true};
  var _false = {keyword: "false", atomValue: false};

  // Some keywords are treated as regular operators. `in` sometimes
  // (when parsing `for`) needs to be tested against specifically, so
  // we assign a variable name to it for quick comparing.

  var _in = {keyword: "in", binop: 7, beforeExpr: true};

  // Map keyword names to token types.

  var keywordTypes = {"break": _break, "case": _case, "catch": _catch,
                      "continue": _continue, "debugger": _debugger, "default": _default,
                      "do": _do, "else": _else, "finally": _finally, "for": _for,
                      "function": _function, "if": _if, "return": _return, "switch": _switch,
                      "throw": _throw, "try": _try, "var": _var, "let": _let, "const": _const,
                      "while": _while, "with": _with,
                      "null": _null, "true": _true, "false": _false, "new": _new, "in": _in,
                      "instanceof": {keyword: "instanceof", binop: 7, beforeExpr: true}, "this": _this,
                      "typeof": {keyword: "typeof", prefix: true, beforeExpr: true},
                      "void": {keyword: "void", prefix: true, beforeExpr: true},
                      "delete": {keyword: "delete", prefix: true, beforeExpr: true},
                      "class": _class, "extends": _extends,
                      "export": _export, "import": _import, "yield": _yield};

  // Punctuation token types. Again, the `type` property is purely for debugging.

  var _bracketL = {type: "[", beforeExpr: true}, _bracketR = {type: "]"}, _braceL = {type: "{", beforeExpr: true};
  var _braceR = {type: "}"}, _parenL = {type: "(", beforeExpr: true}, _parenR = {type: ")"};
  var _comma = {type: ",", beforeExpr: true}, _semi = {type: ";", beforeExpr: true};
  var _colon = {type: ":", beforeExpr: true}, _dot = {type: "."}, _ellipsis = {type: "..."}, _question = {type: "?", beforeExpr: true};
  var _arrow = {type: "=>", beforeExpr: true}, _bquote = {type: "`"}, _dollarBraceL = {type: "${", beforeExpr: true};

  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator. `isUpdate` specifies that the node produced by
  // the operator should be of type UpdateExpression rather than
  // simply UnaryExpression (`++` and `--`).
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.

  var _slash = {binop: 10, beforeExpr: true}, _eq = {isAssign: true, beforeExpr: true};
  var _assign = {isAssign: true, beforeExpr: true};
  var _incDec = {postfix: true, prefix: true, isUpdate: true}, _prefix = {prefix: true, beforeExpr: true};
  var _logicalOR = {binop: 1, beforeExpr: true};
  var _logicalAND = {binop: 2, beforeExpr: true};
  var _bitwiseOR = {binop: 3, beforeExpr: true};
  var _bitwiseXOR = {binop: 4, beforeExpr: true};
  var _bitwiseAND = {binop: 5, beforeExpr: true};
  var _equality = {binop: 6, beforeExpr: true};
  var _relational = {binop: 7, beforeExpr: true};
  var _bitShift = {binop: 8, beforeExpr: true};
  var _plusMin = {binop: 9, prefix: true, beforeExpr: true};
  var _modulo = {binop: 10, beforeExpr: true};

  // '*' may be multiply or have special meaning in ES6
  var _star = {binop: 10, beforeExpr: true};

  // Provide access to the token types for external users of the
  // tokenizer.

  exports.tokTypes = {bracketL: _bracketL, bracketR: _bracketR, braceL: _braceL, braceR: _braceR,
                      parenL: _parenL, parenR: _parenR, comma: _comma, semi: _semi, colon: _colon,
                      dot: _dot, ellipsis: _ellipsis, question: _question, slash: _slash, eq: _eq,
                      name: _name, eof: _eof, num: _num, regexp: _regexp, string: _string,
                      arrow: _arrow, bquote: _bquote, dollarBraceL: _dollarBraceL};
  for (var kw in keywordTypes) exports.tokTypes["_" + kw] = keywordTypes[kw];

  // This is a trick taken from Esprima. It turns out that, on
  // non-Chrome browsers, to check whether a string is in a set, a
  // predicate containing a big ugly `switch` statement is faster than
  // a regular expression, and on Chrome the two are about on par.
  // This function uses `eval` (non-lexical) to produce such a
  // predicate from a space-separated string of words.
  //
  // It starts by sorting the words by length.

  function makePredicate(words) {
    words = words.split(" ");
    var f = "", cats = [];
    out: for (var i = 0; i < words.length; ++i) {
      for (var j = 0; j < cats.length; ++j)
        if (cats[j][0].length == words[i].length) {
          cats[j].push(words[i]);
          continue out;
        }
      cats.push([words[i]]);
    }
    function compareTo(arr) {
      if (arr.length == 1) return f += "return str === " + JSON.stringify(arr[0]) + ";";
      f += "switch(str){";
      for (var i = 0; i < arr.length; ++i) f += "case " + JSON.stringify(arr[i]) + ":";
      f += "return true}return false;";
    }

    // When there are more than three length categories, an outer
    // switch first dispatches on the lengths, to save on comparisons.

    if (cats.length > 3) {
      cats.sort(function(a, b) {return b.length - a.length;});
      f += "switch(str.length){";
      for (var i = 0; i < cats.length; ++i) {
        var cat = cats[i];
        f += "case " + cat[0].length + ":";
        compareTo(cat);
      }
      f += "}";

    // Otherwise, simply generate a flat `switch` statement.

    } else {
      compareTo(words);
    }
    return new Function("str", f);
  }

  // The ECMAScript 3 reserved word list.

  var isReservedWord3 = makePredicate("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile");

  // ECMAScript 5 reserved words.

  var isReservedWord5 = makePredicate("class enum extends super const export import");

  // The additional reserved words in strict mode.

  var isStrictReservedWord = makePredicate("implements interface let package private protected public static yield");

  // The forbidden variable names in strict mode.

  var isStrictBadIdWord = makePredicate("eval arguments");

  // And the keywords.

  var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";

  var isEcma5AndLessKeyword = makePredicate(ecma5AndLessKeywords);

  var isEcma6Keyword = makePredicate(ecma5AndLessKeywords + " let const class extends export import yield");

  var isKeyword = isEcma5AndLessKeyword;

  // ## Character categories

  // Big ugly regular expressions that match characters in the
  // whitespace, identifier, and identifier-start categories. These
  // are only applied when a character is found to actually have a
  // code point above 128.
  // Generated by `tools/generate-identifier-regex.js`.

  var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
  var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
  var nonASCIIidentifierChars = "\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19B0-\u19C0\u19C8\u19C9\u19D0-\u19D9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F1\uA900-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
  var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
  var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

  // Whether a single character denotes a newline.

  var newline = /[\n\r\u2028\u2029]/;

  // Matches a whole line break (where CRLF is considered a single
  // line break). Used to count lines.

  var lineBreak = /\r\n|[\n\r\u2028\u2029]/g;

  // Test whether a given character code starts an identifier.

  var isIdentifierStart = exports.isIdentifierStart = function(code) {
    if (code < 65) return code === 36;
    if (code < 91) return true;
    if (code < 97) return code === 95;
    if (code < 123)return true;
    return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
  };

  // Test whether a given character is part of an identifier.

  var isIdentifierChar = exports.isIdentifierChar = function(code) {
    if (code < 48) return code === 36;
    if (code < 58) return true;
    if (code < 65) return false;
    if (code < 91) return true;
    if (code < 97) return code === 95;
    if (code < 123)return true;
    return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
  };

  // ## Tokenizer

  // These are used when `options.locations` is on, for the
  // `tokStartLoc` and `tokEndLoc` properties.

  function Position() {
    this.line = tokCurLine;
    this.column = tokPos - tokLineStart;
  }

  // Reset the token state. Used at the start of a parse.

  function initTokenState() {
    tokCurLine = 1;
    tokPos = tokLineStart = 0;
    tokRegexpAllowed = true;
    metParenL = 0;
    inTemplate = false;
    skipSpace();
  }

  // Called at the end of every token. Sets `tokEnd`, `tokVal`, and
  // `tokRegexpAllowed`, and skips the space after the token, so that
  // the next one's `tokStart` will point at the right position.

  function finishToken(type, val, shouldSkipSpace) {
    tokEnd = tokPos;
    if (options.locations) tokEndLoc = new Position;
    tokType = type;
    if (shouldSkipSpace !== false) skipSpace();
    tokVal = val;
    tokRegexpAllowed = type.beforeExpr;
    if (options.onToken) {
      options.onToken(new Token());
    }
  }

  function skipBlockComment() {
    var startLoc = options.onComment && options.locations && new Position;
    var start = tokPos, end = input.indexOf("*/", tokPos += 2);
    if (end === -1) raise(tokPos - 2, "Unterminated comment");
    tokPos = end + 2;
    if (options.locations) {
      lineBreak.lastIndex = start;
      var match;
      while ((match = lineBreak.exec(input)) && match.index < tokPos) {
        ++tokCurLine;
        tokLineStart = match.index + match[0].length;
      }
    }
    if (options.onComment)
      options.onComment(true, input.slice(start + 2, end), start, tokPos,
                        startLoc, options.locations && new Position);
  }

  function skipLineComment(startSkip) {
    var start = tokPos;
    var startLoc = options.onComment && options.locations && new Position;
    var ch = input.charCodeAt(tokPos+=startSkip);
    while (tokPos < inputLen && ch !== 10 && ch !== 13 && ch !== 8232 && ch !== 8233) {
      ++tokPos;
      ch = input.charCodeAt(tokPos);
    }
    if (options.onComment)
      options.onComment(false, input.slice(start + startSkip, tokPos), start, tokPos,
                        startLoc, options.locations && new Position);
  }

  // Called at the start of the parse and after every token. Skips
  // whitespace and comments, and.

  function skipSpace() {
    while (tokPos < inputLen) {
      var ch = input.charCodeAt(tokPos);
      if (ch === 32) { // ' '
        ++tokPos;
      } else if (ch === 13) {
        ++tokPos;
        var next = input.charCodeAt(tokPos);
        if (next === 10) {
          ++tokPos;
        }
        if (options.locations) {
          ++tokCurLine;
          tokLineStart = tokPos;
        }
      } else if (ch === 10 || ch === 8232 || ch === 8233) {
        ++tokPos;
        if (options.locations) {
          ++tokCurLine;
          tokLineStart = tokPos;
        }
      } else if (ch > 8 && ch < 14) {
        ++tokPos;
      } else if (ch === 47) { // '/'
        var next = input.charCodeAt(tokPos + 1);
        if (next === 42) { // '*'
          skipBlockComment();
        } else if (next === 47) { // '/'
          skipLineComment(2);
        } else break;
      } else if (ch === 160) { // '\xa0'
        ++tokPos;
      } else if (ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
        ++tokPos;
      } else {
        break;
      }
    }
  }

  // ### Token reading

  // This is the function that is called to fetch the next token. It
  // is somewhat obscure, because it works in character codes rather
  // than characters, and because operator parsing has been inlined
  // into it.
  //
  // All in the name of speed.
  //
  // The `forceRegexp` parameter is used in the one case where the
  // `tokRegexpAllowed` trick does not work. See `parseStatement`.

  function readToken_dot() {
    var next = input.charCodeAt(tokPos + 1);
    if (next >= 48 && next <= 57) return readNumber(true);
    var next2 = input.charCodeAt(tokPos + 2);
    if (options.ecmaVersion >= 6 && next === 46 && next2 === 46) { // 46 = dot '.'
      tokPos += 3;
      return finishToken(_ellipsis);
    } else {
      ++tokPos;
      return finishToken(_dot);
    }
  }

  function readToken_slash() { // '/'
    var next = input.charCodeAt(tokPos + 1);
    if (tokRegexpAllowed) {++tokPos; return readRegexp();}
    if (next === 61) return finishOp(_assign, 2);
    return finishOp(_slash, 1);
  }

  function readToken_mult_modulo(code) { // '%*'
    var next = input.charCodeAt(tokPos + 1);
    if (next === 61) return finishOp(_assign, 2);
    return finishOp(code === 42 ? _star : _modulo, 1);
  }

  function readToken_pipe_amp(code) { // '|&'
    var next = input.charCodeAt(tokPos + 1);
    if (next === code) return finishOp(code === 124 ? _logicalOR : _logicalAND, 2);
    if (next === 61) return finishOp(_assign, 2);
    return finishOp(code === 124 ? _bitwiseOR : _bitwiseAND, 1);
  }

  function readToken_caret() { // '^'
    var next = input.charCodeAt(tokPos + 1);
    if (next === 61) return finishOp(_assign, 2);
    return finishOp(_bitwiseXOR, 1);
  }

  function readToken_plus_min(code) { // '+-'
    var next = input.charCodeAt(tokPos + 1);
    if (next === code) {
      if (next == 45 && input.charCodeAt(tokPos + 2) == 62 &&
          newline.test(input.slice(lastEnd, tokPos))) {
        // A `-->` line comment
        skipLineComment(3);
        skipSpace();
        return readToken();
      }
      return finishOp(_incDec, 2);
    }
    if (next === 61) return finishOp(_assign, 2);
    return finishOp(_plusMin, 1);
  }

  function readToken_lt_gt(code) { // '<>'
    var next = input.charCodeAt(tokPos + 1);
    var size = 1;
    if (next === code) {
      size = code === 62 && input.charCodeAt(tokPos + 2) === 62 ? 3 : 2;
      if (input.charCodeAt(tokPos + size) === 61) return finishOp(_assign, size + 1);
      return finishOp(_bitShift, size);
    }
    if (next == 33 && code == 60 && input.charCodeAt(tokPos + 2) == 45 &&
        input.charCodeAt(tokPos + 3) == 45) {
      // `<!--`, an XML-style comment that should be interpreted as a line comment
      skipLineComment(4);
      skipSpace();
      return readToken();
    }
    if (next === 61)
      size = input.charCodeAt(tokPos + 2) === 61 ? 3 : 2;
    return finishOp(_relational, size);
  }

  function readToken_eq_excl(code) { // '=!', '=>'
    var next = input.charCodeAt(tokPos + 1);
    if (next === 61) return finishOp(_equality, input.charCodeAt(tokPos + 2) === 61 ? 3 : 2);
    if (code === 61 && next === 62 && options.ecmaVersion >= 6) { // '=>'
      tokPos += 2;
      return finishToken(_arrow);
    }
    return finishOp(code === 61 ? _eq : _prefix, 1);
  }

  // Get token inside ES6 template (special rules work there).

  function getTemplateToken(code) {
    // '`' and '${' have special meanings, but they should follow
    // string (can be empty)
    if (tokType === _string) {
      if (code === 96) { // '`'
        ++tokPos;
        return finishToken(_bquote);
      } else
      if (code === 36 && input.charCodeAt(tokPos + 1) === 123) { // '${'
        tokPos += 2;
        return finishToken(_dollarBraceL);
      }
    }

    if (code === 125) { // '}'
      ++tokPos;
      return finishToken(_braceR, undefined, false);
    }

    // anything else is considered string literal
    return readTmplString();
  }

  function getTokenFromCode(code) {
    switch (code) {
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
    case 46: // '.'
      return readToken_dot();

    // Punctuation tokens.
    case 40: ++tokPos; return finishToken(_parenL);
    case 41: ++tokPos; return finishToken(_parenR);
    case 59: ++tokPos; return finishToken(_semi);
    case 44: ++tokPos; return finishToken(_comma);
    case 91: ++tokPos; return finishToken(_bracketL);
    case 93: ++tokPos; return finishToken(_bracketR);
    case 123: ++tokPos; return finishToken(_braceL);
    case 125: ++tokPos; return finishToken(_braceR);
    case 58: ++tokPos; return finishToken(_colon);
    case 63: ++tokPos; return finishToken(_question);

    case 96: // '`'
      if (options.ecmaVersion >= 6) {
        ++tokPos;
        return finishToken(_bquote, undefined, false);
      }

    case 48: // '0'
      var next = input.charCodeAt(tokPos + 1);
      if (next === 120 || next === 88) return readRadixNumber(16); // '0x', '0X' - hex number
      if (options.ecmaVersion >= 6) {
        if (next === 111 || next === 79) return readRadixNumber(8); // '0o', '0O' - octal number
        if (next === 98 || next === 66) return readRadixNumber(2); // '0b', '0B' - binary number
      }
    // Anything else beginning with a digit is an integer, octal
    // number, or float.
    case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: // 1-9
      return readNumber(false);

    // Quotes produce strings.
    case 34: case 39: // '"', "'"
      return readString(code);

    // Operators are parsed inline in tiny state machines. '=' (61) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.

    case 47: // '/'
      return readToken_slash();

    case 37: case 42: // '%*'
      return readToken_mult_modulo(code);

    case 124: case 38: // '|&'
      return readToken_pipe_amp(code);

    case 94: // '^'
      return readToken_caret();

    case 43: case 45: // '+-'
      return readToken_plus_min(code);

    case 60: case 62: // '<>'
      return readToken_lt_gt(code);

    case 61: case 33: // '=!'
      return readToken_eq_excl(code);

    case 126: // '~'
      return finishOp(_prefix, 1);
    }

    return false;
  }

  function readToken(forceRegexp) {
    if (!forceRegexp) tokStart = tokPos;
    else tokPos = tokStart + 1;
    if (options.locations) tokStartLoc = new Position;
    if (forceRegexp) return readRegexp();
    if (tokPos >= inputLen) return finishToken(_eof);

    var code = input.charCodeAt(tokPos);

    if (inTemplate) return getTemplateToken(code);

    // Identifier or keyword. '\uXXXX' sequences are allowed in
    // identifiers, so '\' also dispatches to that.
    if (isIdentifierStart(code) || code === 92 /* '\' */) return readWord();

    var tok = getTokenFromCode(code);

    if (tok === false) {
      // If we are here, we either found a non-ASCII identifier
      // character, or something that's entirely disallowed.
      var ch = String.fromCharCode(code);
      if (ch === "\\" || nonASCIIidentifierStart.test(ch)) return readWord();
      raise(tokPos, "Unexpected character '" + ch + "'");
    }
    return tok;
  }

  function finishOp(type, size) {
    var str = input.slice(tokPos, tokPos + size);
    tokPos += size;
    finishToken(type, str);
  }

  // Parse a regular expression. Some context-awareness is necessary,
  // since a '/' inside a '[]' set does not end the expression.

  function readRegexp() {
    var content = "", escaped, inClass, start = tokPos;
    for (;;) {
      if (tokPos >= inputLen) raise(start, "Unterminated regular expression");
      var ch = input.charAt(tokPos);
      if (newline.test(ch)) raise(start, "Unterminated regular expression");
      if (!escaped) {
        if (ch === "[") inClass = true;
        else if (ch === "]" && inClass) inClass = false;
        else if (ch === "/" && !inClass) break;
        escaped = ch === "\\";
      } else escaped = false;
      ++tokPos;
    }
    var content = input.slice(start, tokPos);
    ++tokPos;
    // Need to use `readWord1` because '\uXXXX' sequences are allowed
    // here (don't ask).
    var mods = readWord1();
    if (mods && !/^[gmsiy]*$/.test(mods)) raise(start, "Invalid regular expression flag");
    try {
      var value = new RegExp(content, mods);
    } catch (e) {
      if (e instanceof SyntaxError) raise(start, "Error parsing regular expression: " + e.message);
      raise(e);
    }
    return finishToken(_regexp, value);
  }

  // Read an integer in the given radix. Return null if zero digits
  // were read, the integer value otherwise. When `len` is given, this
  // will return `null` unless the integer has exactly `len` digits.

  function readInt(radix, len) {
    var start = tokPos, total = 0;
    for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
      var code = input.charCodeAt(tokPos), val;
      if (code >= 97) val = code - 97 + 10; // a
      else if (code >= 65) val = code - 65 + 10; // A
      else if (code >= 48 && code <= 57) val = code - 48; // 0-9
      else val = Infinity;
      if (val >= radix) break;
      ++tokPos;
      total = total * radix + val;
    }
    if (tokPos === start || len != null && tokPos - start !== len) return null;

    return total;
  }

  function readRadixNumber(radix) {
    tokPos += 2; // 0x
    var val = readInt(radix);
    if (val == null) raise(tokStart + 2, "Expected number in radix " + radix);
    if (isIdentifierStart(input.charCodeAt(tokPos))) raise(tokPos, "Identifier directly after number");
    return finishToken(_num, val);
  }

  // Read an integer, octal integer, or floating-point number.

  function readNumber(startsWithDot) {
    var start = tokPos, isFloat = false, octal = input.charCodeAt(tokPos) === 48;
    if (!startsWithDot && readInt(10) === null) raise(start, "Invalid number");
    if (input.charCodeAt(tokPos) === 46) {
      ++tokPos;
      readInt(10);
      isFloat = true;
    }
    var next = input.charCodeAt(tokPos);
    if (next === 69 || next === 101) { // 'eE'
      next = input.charCodeAt(++tokPos);
      if (next === 43 || next === 45) ++tokPos; // '+-'
      if (readInt(10) === null) raise(start, "Invalid number");
      isFloat = true;
    }
    if (isIdentifierStart(input.charCodeAt(tokPos))) raise(tokPos, "Identifier directly after number");

    var str = input.slice(start, tokPos), val;
    if (isFloat) val = parseFloat(str);
    else if (!octal || str.length === 1) val = parseInt(str, 10);
    else if (/[89]/.test(str) || strict) raise(start, "Invalid number");
    else val = parseInt(str, 8);
    return finishToken(_num, val);
  }

  // Read a string value, interpreting backslash-escapes.

  function readCodePoint() {
    var ch = input.charCodeAt(tokPos), code;

    if (ch === 123) {
      if (options.ecmaVersion < 6) unexpected();
      ++tokPos;
      code = readHexChar(input.indexOf('}', tokPos) - tokPos);
      ++tokPos;
      if (code > 0x10FFFF) unexpected();
    } else {
      code = readHexChar(4);
    }

    // UTF-16 Encoding
    if (code <= 0xFFFF) {
      return String.fromCharCode(code);
    }
    var cu1 = ((code - 0x10000) >> 10) + 0xD800;
    var cu2 = ((code - 0x10000) & 1023) + 0xDC00;
    return String.fromCharCode(cu1, cu2);
  }

  function readString(quote) {
    ++tokPos;
    var out = "";
    for (;;) {
      if (tokPos >= inputLen) raise(tokStart, "Unterminated string constant");
      var ch = input.charCodeAt(tokPos);
      if (ch === quote) {
        ++tokPos;
        return finishToken(_string, out);
      }
      if (ch === 92) { // '\'
        out += readEscapedChar();
      } else {
        ++tokPos;
        if (newline.test(String.fromCharCode(ch))) {
          raise(tokStart, "Unterminated string constant");
        }
        out += String.fromCharCode(ch); // '\'
      }
    }
  }

  function readTmplString() {
    var out = "";
    for (;;) {
      if (tokPos >= inputLen) raise(tokStart, "Unterminated string constant");
      var ch = input.charCodeAt(tokPos);
      if (ch === 96 || ch === 36 && input.charCodeAt(tokPos + 1) === 123) // '`', '${'
        return finishToken(_string, out);
      if (ch === 92) { // '\'
        out += readEscapedChar();
      } else {
        ++tokPos;
        if (newline.test(String.fromCharCode(ch))) {
          if (ch === 13 && input.charCodeAt(tokPos) === 10) {
            ++tokPos;
            ch = 10;
          }
          if (options.locations) {
            ++tokCurLine;
            tokLineStart = tokPos;
          }
        }
        out += String.fromCharCode(ch); // '\'
      }
    }
  }

  // Used to read escaped characters

  function readEscapedChar() {
    var ch = input.charCodeAt(++tokPos);
    var octal = /^[0-7]+/.exec(input.slice(tokPos, tokPos + 3));
    if (octal) octal = octal[0];
    while (octal && parseInt(octal, 8) > 255) octal = octal.slice(0, -1);
    if (octal === "0") octal = null;
    ++tokPos;
    if (octal) {
      if (strict) raise(tokPos - 2, "Octal literal in strict mode");
      tokPos += octal.length - 1;
      return String.fromCharCode(parseInt(octal, 8));
    } else {
      switch (ch) {
        case 110: return "\n"; // 'n' -> '\n'
        case 114: return "\r"; // 'r' -> '\r'
        case 120: return String.fromCharCode(readHexChar(2)); // 'x'
        case 117: return readCodePoint(); // 'u'
        case 85: return String.fromCharCode(readHexChar(8)); // 'U'
        case 116: return "\t"; // 't' -> '\t'
        case 98: return "\b"; // 'b' -> '\b'
        case 118: return "\u000b"; // 'v' -> '\u000b'
        case 102: return "\f"; // 'f' -> '\f'
        case 48: return "\0"; // 0 -> '\0'
        case 13: if (input.charCodeAt(tokPos) === 10) ++tokPos; // '\r\n'
        case 10: // ' \n'
          if (options.locations) { tokLineStart = tokPos; ++tokCurLine; }
          return "";
        default: return String.fromCharCode(ch);
      }
    }
  }

  // Used to read character escape sequences ('\x', '\u', '\U').

  function readHexChar(len) {
    var n = readInt(16, len);
    if (n === null) raise(tokStart, "Bad character escape sequence");
    return n;
  }

  // Used to signal to callers of `readWord1` whether the word
  // contained any escape sequences. This is needed because words with
  // escape sequences must not be interpreted as keywords.

  var containsEsc;

  // Read an identifier, and return it as a string. Sets `containsEsc`
  // to whether the word contained a '\u' escape.
  //
  // Only builds up the word character-by-character when it actually
  // containeds an escape, as a micro-optimization.

  function readWord1() {
    containsEsc = false;
    var word, first = true, start = tokPos;
    for (;;) {
      var ch = input.charCodeAt(tokPos);
      if (isIdentifierChar(ch)) {
        if (containsEsc) word += input.charAt(tokPos);
        ++tokPos;
      } else if (ch === 92) { // "\"
        if (!containsEsc) word = input.slice(start, tokPos);
        containsEsc = true;
        if (input.charCodeAt(++tokPos) != 117) // "u"
          raise(tokPos, "Expecting Unicode escape sequence \\uXXXX");
        ++tokPos;
        var esc = readHexChar(4);
        var escStr = String.fromCharCode(esc);
        if (!escStr) raise(tokPos - 1, "Invalid Unicode escape");
        if (!(first ? isIdentifierStart(esc) : isIdentifierChar(esc)))
          raise(tokPos - 4, "Invalid Unicode escape");
        word += escStr;
      } else {
        break;
      }
      first = false;
    }
    return containsEsc ? word : input.slice(start, tokPos);
  }

  // Read an identifier or keyword token. Will check for reserved
  // words when necessary.

  function readWord() {
    var word = readWord1();
    var type = _name;
    if (!containsEsc && isKeyword(word))
      type = keywordTypes[word];
    return finishToken(type, word);
  }

  // ## Parser

  // A recursive descent parser operates by defining functions for all
  // syntactic elements, and recursively calling those, each function
  // advancing the input stream and returning an AST node. Precedence
  // of constructs (for example, the fact that `!x[1]` means `!(x[1])`
  // instead of `(!x)[1]` is handled by the fact that the parser
  // function that parses unary prefix operators is called first, and
  // in turn calls the function that parses `[]` subscripts — that
  // way, it'll receive the node for `x[1]` already parsed, and wraps
  // *that* in the unary operator node.
  //
  // Acorn uses an [operator precedence parser][opp] to handle binary
  // operator precedence, because it is much more compact than using
  // the technique outlined above, which uses different, nesting
  // functions to specify precedence, for all of the ten binary
  // precedence levels that JavaScript defines.
  //
  // [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser

  // ### Parser utilities

  // Continue to the next token.

  function next() {
    lastStart = tokStart;
    lastEnd = tokEnd;
    lastEndLoc = tokEndLoc;
    readToken();
  }

  // Enter strict mode. Re-reads the next token to please pedantic
  // tests ("use strict"; 010; -- should fail).

  function setStrict(strct) {
    strict = strct;
    tokPos = tokStart;
    if (options.locations) {
      while (tokPos < tokLineStart) {
        tokLineStart = input.lastIndexOf("\n", tokLineStart - 2) + 1;
        --tokCurLine;
      }
    }
    skipSpace();
    readToken();
  }

  // Start an AST node, attaching a start offset.

  function Node() {
    this.type = null;
    this.start = tokStart;
    this.end = null;
  }

  exports.Node = Node;

  function SourceLocation() {
    this.start = tokStartLoc;
    this.end = null;
    if (sourceFile !== null) this.source = sourceFile;
  }

  function startNode() {
    var node = new Node();
    if (options.locations)
      node.loc = new SourceLocation();
    if (options.directSourceFile)
      node.sourceFile = options.directSourceFile;
    if (options.ranges)
      node.range = [tokStart, 0];
    return node;
  }

  // Start a node whose start offset information should be based on
  // the start of another node. For example, a binary operator node is
  // only started after its left-hand side has already been parsed.

  function startNodeFrom(other) {
    var node = new Node();
    node.start = other.start;
    if (options.locations) {
      node.loc = new SourceLocation();
      node.loc.start = other.loc.start;
    }
    if (options.ranges)
      node.range = [other.range[0], 0];

    return node;
  }

  // Finish an AST node, adding `type` and `end` properties.

  function finishNode(node, type) {
    node.type = type;
    node.end = lastEnd;
    if (options.locations)
      node.loc.end = lastEndLoc;
    if (options.ranges)
      node.range[1] = lastEnd;
    return node;
  }

  // Test whether a statement node is the string literal `"use strict"`.

  function isUseStrict(stmt) {
    return options.ecmaVersion >= 5 && stmt.type === "ExpressionStatement" &&
      stmt.expression.type === "Literal" && stmt.expression.value === "use strict";
  }

  // Predicate that tests whether the next token is of the given
  // type, and if yes, consumes it as a side effect.

  function eat(type) {
    if (tokType === type) {
      next();
      return true;
    } else {
      return false;
    }
  }

  // Test whether a semicolon can be inserted at the current position.

  function canInsertSemicolon() {
    return !options.strictSemicolons &&
      (tokType === _eof || tokType === _braceR || newline.test(input.slice(lastEnd, tokStart)));
  }

  // Consume a semicolon, or, failing that, see if we are allowed to
  // pretend that there is a semicolon at this position.

  function semicolon() {
    if (!eat(_semi) && !canInsertSemicolon()) unexpected();
  }

  // Expect a token of a given type. If found, consume it, otherwise,
  // raise an unexpected token error.

  function expect(type) {
    eat(type) || unexpected();
  }

  // Raise an unexpected token error.

  function unexpected(pos) {
    raise(pos != null ? pos : tokStart, "Unexpected token");
  }

  // Checks if hash object has a property.

  function has(obj, propName) {
    return Object.prototype.hasOwnProperty.call(obj, propName);
  }
  // Convert existing expression atom to assignable pattern
  // if possible.

  function toAssignable(node, allowSpread, checkType) {
    if (options.ecmaVersion >= 6 && node) {
      switch (node.type) {
        case "Identifier":
        case "MemberExpression":
          break;

        case "ObjectExpression":
          node.type = "ObjectPattern";
          for (var i = 0; i < node.properties.length; i++) {
            var prop = node.properties[i];
            if (prop.kind !== "init") unexpected(prop.key.start);
            toAssignable(prop.value, false, checkType);
          }
          break;

        case "ArrayExpression":
          node.type = "ArrayPattern";
          for (var i = 0, lastI = node.elements.length - 1; i <= lastI; i++) {
            toAssignable(node.elements[i], i === lastI, checkType);
          }
          break;

        case "SpreadElement":
          if (allowSpread) {
            toAssignable(node.argument, false, checkType);
            checkSpreadAssign(node.argument);
          } else {
            unexpected(node.start);
          }
          break;

        default:
          if (checkType) unexpected(node.start);
      }
    }
    return node;
  }

  // Checks if node can be assignable spread argument.

  function checkSpreadAssign(node) {
    if (node.type !== "Identifier" && node.type !== "ArrayPattern")
      unexpected(node.start);
  }

  // Verify that argument names are not repeated, and it does not
  // try to bind the words `eval` or `arguments`.

  function checkFunctionParam(param, nameHash) {
    switch (param.type) {
      case "Identifier":
        if (isStrictReservedWord(param.name) || isStrictBadIdWord(param.name))
          raise(param.start, "Defining '" + param.name + "' in strict mode");
        if (has(nameHash, param.name))
          raise(param.start, "Argument name clash in strict mode");
        nameHash[param.name] = true;
        break;

      case "ObjectPattern":
        for (var i = 0; i < param.properties.length; i++)
          checkFunctionParam(param.properties[i].value, nameHash);
        break;

      case "ArrayPattern":
        for (var i = 0; i < param.elements.length; i++)
          checkFunctionParam(param.elements[i], nameHash);
        break;
    }
  }

  // Check if property name clashes with already added.
  // Object/class getters and setters are not allowed to clash —
  // either with each other or with an init property — and in
  // strict mode, init properties are also not allowed to be repeated.

  function checkPropClash(prop, propHash) {
    if (prop.computed) return;
    var key = prop.key, name;
    switch (key.type) {
      case "Identifier": name = key.name; break;
      case "Literal": name = String(key.value); break;
      default: return;
    }
    var kind = prop.kind || "init", other;
    if (has(propHash, name)) {
      other = propHash[name];
      var isGetSet = kind !== "init";
      if ((strict || isGetSet) && other[kind] || !(isGetSet ^ other.init))
        raise(key.start, "Redefinition of property");
    } else {
      other = propHash[name] = {
        init: false,
        get: false,
        set: false
      };
    }
    other[kind] = true;
  }

  // Verify that a node is an lval — something that can be assigned
  // to.

  function checkLVal(expr, isBinding) {
    switch (expr.type) {
      case "Identifier":
        if (strict && (isStrictBadIdWord(expr.name) || isStrictReservedWord(expr.name)))
          raise(expr.start, isBinding
            ? "Binding " + expr.name + " in strict mode"
            : "Assigning to " + expr.name + " in strict mode"
          );
        break;

      case "MemberExpression":
        if (!isBinding) break;

      case "ObjectPattern":
        for (var i = 0; i < expr.properties.length; i++)
          checkLVal(expr.properties[i].value, isBinding);
        break;

      case "ArrayPattern":
        for (var i = 0; i < expr.elements.length; i++) {
          var elem = expr.elements[i];
          if (elem) checkLVal(elem, isBinding);
        }
        break;

      case "SpreadElement":
        break;

      default:
        raise(expr.start, "Assigning to rvalue");
    }
  }

  // ### Statement parsing

  // Parse a program. Initializes the parser, reads any number of
  // statements, and wraps them in a Program node.  Optionally takes a
  // `program` argument.  If present, the statements will be appended
  // to its body instead of creating a new node.

  function parseTopLevel(program) {
    lastStart = lastEnd = tokPos;
    if (options.locations) lastEndLoc = new Position;
    inFunction = inGenerator = strict = null;
    labels = [];
    readToken();

    var node = program || startNode(), first = true;
    if (!program) node.body = [];
    while (tokType !== _eof) {
      var stmt = parseStatement();
      node.body.push(stmt);
      if (first && isUseStrict(stmt)) setStrict(true);
      first = false;
    }
    return finishNode(node, "Program");
  }

  var loopLabel = {kind: "loop"}, switchLabel = {kind: "switch"};

  // Parse a single statement.
  //
  // If expecting a statement and finding a slash operator, parse a
  // regular expression literal. This is to handle cases like
  // `if (foo) /blah/.exec(foo);`, where looking at the previous token
  // does not help.

  function parseStatement() {
    if (tokType === _slash || tokType === _assign && tokVal == "/=")
      readToken(true);

    var starttype = tokType, node = startNode();

    // Most types of statements are recognized by the keyword they
    // start with. Many are trivial to parse, some require a bit of
    // complexity.

    switch (starttype) {
    case _break: case _continue: return parseBreakContinueStatement(node, starttype.keyword);
    case _debugger: return parseDebuggerStatement(node);
    case _do: return parseDoStatement(node);
    case _for: return parseForStatement(node);
    case _function: return parseFunctionStatement(node);
    case _class: return parseClass(node, true);
    case _if: return parseIfStatement(node);
    case _return: return parseReturnStatement(node);
    case _switch: return parseSwitchStatement(node);
    case _throw: return parseThrowStatement(node);
    case _try: return parseTryStatement(node);
    case _var: case _let: case _const: return parseVarStatement(node, starttype.keyword);
    case _while: return parseWhileStatement(node);
    case _with: return parseWithStatement(node);
    case _braceL: return parseBlock(); // no point creating a function for this
    case _semi: return parseEmptyStatement(node);
    case _export: return parseExport(node);
    case _import: return parseImport(node);

      // If the statement does not start with a statement keyword or a
      // brace, it's an ExpressionStatement or LabeledStatement. We
      // simply start parsing an expression, and afterwards, if the
      // next token is a colon and the expression was a simple
      // Identifier node, we switch to interpreting it as a label.
    default:
      var maybeName = tokVal, expr = parseExpression();
      if (starttype === _name && expr.type === "Identifier" && eat(_colon))
        return parseLabeledStatement(node, maybeName, expr);
      else return parseExpressionStatement(node, expr);
    }
  }

  function parseBreakContinueStatement(node, keyword) {
    var isBreak = keyword == "break";
    next();
    if (eat(_semi) || canInsertSemicolon()) node.label = null;
    else if (tokType !== _name) unexpected();
    else {
      node.label = parseIdent();
      semicolon();
    }

    // Verify that there is an actual destination to break or
    // continue to.
    for (var i = 0; i < labels.length; ++i) {
      var lab = labels[i];
      if (node.label == null || lab.name === node.label.name) {
        if (lab.kind != null && (isBreak || lab.kind === "loop")) break;
        if (node.label && isBreak) break;
      }
    }
    if (i === labels.length) raise(node.start, "Unsyntactic " + keyword);
    return finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
  }

  function parseDebuggerStatement(node) {
    next();
    semicolon();
    return finishNode(node, "DebuggerStatement");
  }

  function parseDoStatement(node) {
    next();
    labels.push(loopLabel);
    node.body = parseStatement();
    labels.pop();
    expect(_while);
    node.test = parseParenExpression();
    semicolon();
    return finishNode(node, "DoWhileStatement");
  }

  // Disambiguating between a `for` and a `for`/`in` or `for`/`of`
  // loop is non-trivial. Basically, we have to parse the init `var`
  // statement or expression, disallowing the `in` operator (see
  // the second parameter to `parseExpression`), and then check
  // whether the next token is `in` or `of`. When there is no init
  // part (semicolon immediately after the opening parenthesis), it
  // is a regular `for` loop.

  function parseForStatement(node) {
    next();
    labels.push(loopLabel);
    expect(_parenL);
    if (tokType === _semi) return parseFor(node, null);
    if (tokType === _var || tokType === _let) {
      var init = startNode(), varKind = tokType.keyword, isLet = tokType === _let;
      next();
      parseVar(init, true, varKind);
      finishNode(init, "VariableDeclaration");
      if ((tokType === _in || (tokType === _name && tokVal === "of")) && init.declarations.length === 1 &&
          !(isLet && init.declarations[0].init))
        return parseForIn(node, init);
      return parseFor(node, init);
    }
    var init = parseExpression(false, true);
    if (tokType === _in || (tokType === _name && tokVal === "of")) {
      checkLVal(init);
      return parseForIn(node, init);
    }
    return parseFor(node, init);
  }

  function parseFunctionStatement(node) {
    next();
    return parseFunction(node, true);
  }

  function parseIfStatement(node) {
    next();
    node.test = parseParenExpression();
    node.consequent = parseStatement();
    node.alternate = eat(_else) ? parseStatement() : null;
    return finishNode(node, "IfStatement");
  }

  function parseReturnStatement(node) {
    if (!inFunction && !options.allowReturnOutsideFunction)
      raise(tokStart, "'return' outside of function");
    next();

    // In `return` (and `break`/`continue`), the keywords with
    // optional arguments, we eagerly look for a semicolon or the
    // possibility to insert one.

    if (eat(_semi) || canInsertSemicolon()) node.argument = null;
    else { node.argument = parseExpression(); semicolon(); }
    return finishNode(node, "ReturnStatement");
  }

  function parseSwitchStatement(node) {
    next();
    node.discriminant = parseParenExpression();
    node.cases = [];
    expect(_braceL);
    labels.push(switchLabel);

    // Statements under must be grouped (by label) in SwitchCase
    // nodes. `cur` is used to keep the node that we are currently
    // adding statements to.

    for (var cur, sawDefault; tokType != _braceR;) {
      if (tokType === _case || tokType === _default) {
        var isCase = tokType === _case;
        if (cur) finishNode(cur, "SwitchCase");
        node.cases.push(cur = startNode());
        cur.consequent = [];
        next();
        if (isCase) cur.test = parseExpression();
        else {
          if (sawDefault) raise(lastStart, "Multiple default clauses"); sawDefault = true;
          cur.test = null;
        }
        expect(_colon);
      } else {
        if (!cur) unexpected();
        cur.consequent.push(parseStatement());
      }
    }
    if (cur) finishNode(cur, "SwitchCase");
    next(); // Closing brace
    labels.pop();
    return finishNode(node, "SwitchStatement");
  }

  function parseThrowStatement(node) {
    next();
    if (newline.test(input.slice(lastEnd, tokStart)))
      raise(lastEnd, "Illegal newline after throw");
    node.argument = parseExpression();
    semicolon();
    return finishNode(node, "ThrowStatement");
  }

  function parseTryStatement(node) {
    next();
    node.block = parseBlock();
    node.handler = null;
    if (tokType === _catch) {
      var clause = startNode();
      next();
      expect(_parenL);
      clause.param = parseIdent();
      if (strict && isStrictBadIdWord(clause.param.name))
        raise(clause.param.start, "Binding " + clause.param.name + " in strict mode");
      expect(_parenR);
      clause.guard = null;
      clause.body = parseBlock();
      node.handler = finishNode(clause, "CatchClause");
    }
    node.guardedHandlers = empty;
    node.finalizer = eat(_finally) ? parseBlock() : null;
    if (!node.handler && !node.finalizer)
      raise(node.start, "Missing catch or finally clause");
    return finishNode(node, "TryStatement");
  }

  function parseVarStatement(node, kind) {
    next();
    parseVar(node, false, kind);
    semicolon();
    return finishNode(node, "VariableDeclaration");
  }

  function parseWhileStatement(node) {
    next();
    node.test = parseParenExpression();
    labels.push(loopLabel);
    node.body = parseStatement();
    labels.pop();
    return finishNode(node, "WhileStatement");
  }

  function parseWithStatement(node) {
    if (strict) raise(tokStart, "'with' in strict mode");
    next();
    node.object = parseParenExpression();
    node.body = parseStatement();
    return finishNode(node, "WithStatement");
  }

  function parseEmptyStatement(node) {
    next();
    return finishNode(node, "EmptyStatement");
  }

  function parseLabeledStatement(node, maybeName, expr) {
    for (var i = 0; i < labels.length; ++i)
      if (labels[i].name === maybeName) raise(expr.start, "Label '" + maybeName + "' is already declared");
    var kind = tokType.isLoop ? "loop" : tokType === _switch ? "switch" : null;
    labels.push({name: maybeName, kind: kind});
    node.body = parseStatement();
    labels.pop();
    node.label = expr;
    return finishNode(node, "LabeledStatement");
  }

  function parseExpressionStatement(node, expr) {
    node.expression = expr;
    semicolon();
    return finishNode(node, "ExpressionStatement");
  }

  // Used for constructs like `switch` and `if` that insist on
  // parentheses around their expression.

  function parseParenExpression() {
    expect(_parenL);
    var val = parseExpression();
    expect(_parenR);
    return val;
  }

  // Parse a semicolon-enclosed block of statements, handling `"use
  // strict"` declarations when `allowStrict` is true (used for
  // function bodies).

  function parseBlock(allowStrict) {
    var node = startNode(), first = true, strict = false, oldStrict;
    node.body = [];
    expect(_braceL);
    while (!eat(_braceR)) {
      var stmt = parseStatement();
      node.body.push(stmt);
      if (first && allowStrict && isUseStrict(stmt)) {
        oldStrict = strict;
        setStrict(strict = true);
      }
      first = false;
    }
    if (strict && !oldStrict) setStrict(false);
    return finishNode(node, "BlockStatement");
  }

  // Parse a regular `for` loop. The disambiguation code in
  // `parseStatement` will already have parsed the init statement or
  // expression.

  function parseFor(node, init) {
    node.init = init;
    expect(_semi);
    node.test = tokType === _semi ? null : parseExpression();
    expect(_semi);
    node.update = tokType === _parenR ? null : parseExpression();
    expect(_parenR);
    node.body = parseStatement();
    labels.pop();
    return finishNode(node, "ForStatement");
  }

  // Parse a `for`/`in` and `for`/`of` loop, which are almost
  // same from parser's perspective.

  function parseForIn(node, init) {
    var type = tokType === _in ? "ForInStatement" : "ForOfStatement";
    next();
    node.left = init;
    node.right = parseExpression();
    expect(_parenR);
    node.body = parseStatement();
    labels.pop();
    return finishNode(node, type);
  }

  // Parse a list of variable declarations.

  function parseVar(node, noIn, kind) {
    node.declarations = [];
    node.kind = kind;
    for (;;) {
      var decl = startNode();
      decl.id = options.ecmaVersion >= 6 ? toAssignable(parseExprAtom()) : parseIdent();
      checkLVal(decl.id, true);
      decl.init = eat(_eq) ? parseExpression(true, noIn) : (kind === _const.keyword ? unexpected() : null);
      node.declarations.push(finishNode(decl, "VariableDeclarator"));
      if (!eat(_comma)) break;
    }
    return node;
  }

  // ### Expression parsing

  // These nest, from the most general expression type at the top to
  // 'atomic', nondivisible expression types at the bottom. Most of
  // the functions will simply let the function(s) below them parse,
  // and, *if* the syntactic construct they handle is present, wrap
  // the AST node that the inner parser gave them in another node.

  // Parse a full expression. The arguments are used to forbid comma
  // sequences (in argument lists, array literals, or object literals)
  // or the `in` operator (in for loops initalization expressions).

  function parseExpression(noComma, noIn) {
    var expr = parseMaybeAssign(noIn);
    if (!noComma && tokType === _comma) {
      var node = startNodeFrom(expr);
      node.expressions = [expr];
      while (eat(_comma)) node.expressions.push(parseMaybeAssign(noIn));
      return finishNode(node, "SequenceExpression");
    }
    return expr;
  }

  // Parse an assignment expression. This includes applications of
  // operators like `+=`.

  function parseMaybeAssign(noIn) {
    var left = parseMaybeConditional(noIn);
    if (tokType.isAssign) {
      var node = startNodeFrom(left);
      node.operator = tokVal;
      node.left = tokType === _eq ? toAssignable(left) : left;
      checkLVal(left);
      next();
      node.right = parseMaybeAssign(noIn);
      return finishNode(node, "AssignmentExpression");
    }
    return left;
  }

  // Parse a ternary conditional (`?:`) operator.

  function parseMaybeConditional(noIn) {
    var expr = parseExprOps(noIn);
    if (eat(_question)) {
      var node = startNodeFrom(expr);
      node.test = expr;
      node.consequent = parseExpression(true);
      expect(_colon);
      node.alternate = parseExpression(true, noIn);
      return finishNode(node, "ConditionalExpression");
    }
    return expr;
  }

  // Start the precedence parser.

  function parseExprOps(noIn) {
    return parseExprOp(parseMaybeUnary(), -1, noIn);
  }

  // Parse binary operators with the operator precedence parsing
  // algorithm. `left` is the left-hand side of the operator.
  // `minPrec` provides context that allows the function to stop and
  // defer further parser to one of its callers when it encounters an
  // operator that has a lower precedence than the set it is parsing.

  function parseExprOp(left, minPrec, noIn) {
    var prec = tokType.binop;
    if (prec != null && (!noIn || tokType !== _in)) {
      if (prec > minPrec) {
        var node = startNodeFrom(left);
        node.left = left;
        node.operator = tokVal;
        var op = tokType;
        next();
        node.right = parseExprOp(parseMaybeUnary(), prec, noIn);
        var exprNode = finishNode(node, (op === _logicalOR || op === _logicalAND) ? "LogicalExpression" : "BinaryExpression");
        return parseExprOp(exprNode, minPrec, noIn);
      }
    }
    return left;
  }

  // Parse unary operators, both prefix and postfix.

  function parseMaybeUnary() {
    if (tokType.prefix) {
      var node = startNode(), update = tokType.isUpdate;
      node.operator = tokVal;
      node.prefix = true;
      tokRegexpAllowed = true;
      next();
      node.argument = parseMaybeUnary();
      if (update) checkLVal(node.argument);
      else if (strict && node.operator === "delete" &&
               node.argument.type === "Identifier")
        raise(node.start, "Deleting local variable in strict mode");
      return finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
    }
    var expr = parseExprSubscripts();
    while (tokType.postfix && !canInsertSemicolon()) {
      var node = startNodeFrom(expr);
      node.operator = tokVal;
      node.prefix = false;
      node.argument = expr;
      checkLVal(expr);
      next();
      expr = finishNode(node, "UpdateExpression");
    }
    return expr;
  }

  // Parse call, dot, and `[]`-subscript expressions.

  function parseExprSubscripts() {
    return parseSubscripts(parseExprAtom());
  }

  function parseSubscripts(base, noCalls) {
    if (eat(_dot)) {
      var node = startNodeFrom(base);
      node.object = base;
      node.property = parseIdent(true);
      node.computed = false;
      return parseSubscripts(finishNode(node, "MemberExpression"), noCalls);
    } else if (eat(_bracketL)) {
      var node = startNodeFrom(base);
      node.object = base;
      node.property = parseExpression();
      node.computed = true;
      expect(_bracketR);
      return parseSubscripts(finishNode(node, "MemberExpression"), noCalls);
    } else if (!noCalls && eat(_parenL)) {
      var node = startNodeFrom(base);
      node.callee = base;
      node.arguments = parseExprList(_parenR, false);
      return parseSubscripts(finishNode(node, "CallExpression"), noCalls);
    } else if (tokType === _bquote) {
      var node = startNodeFrom(base);
      node.tag = base;
      node.quasi = parseTemplate();
      return parseSubscripts(finishNode(node, "TaggedTemplateExpression"), noCalls);
    } return base;
  }

  // Parse an atomic expression — either a single token that is an
  // expression, an expression started by a keyword like `function` or
  // `new`, or an expression wrapped in punctuation like `()`, `[]`,
  // or `{}`.

  function parseExprAtom() {
    switch (tokType) {
    case _this:
      var node = startNode();
      next();
      return finishNode(node, "ThisExpression");

    case _yield:
      if (inGenerator) return parseYield();

    case _name:
      var id = parseIdent(tokType !== _name);
      if (eat(_arrow)) {
        return parseArrowExpression(startNodeFrom(id), [id]);
      }
      return id;

    case _num: case _string: case _regexp:
      var node = startNode();
      node.value = tokVal;
      node.raw = input.slice(tokStart, tokEnd);
      next();
      return finishNode(node, "Literal");

    case _null: case _true: case _false:
      var node = startNode();
      node.value = tokType.atomValue;
      node.raw = tokType.keyword;
      next();
      return finishNode(node, "Literal");

    case _parenL:
      var tokStartLoc1 = tokStartLoc, tokStart1 = tokStart, val, exprList;
      next();
      // check whether this is generator comprehension or regular expression
      if (options.ecmaVersion >= 6 && tokType === _for) {
        val = parseComprehension(startNode(), true);
      } else {
        var oldParenL = ++metParenL;
        if (tokType !== _parenR) {
          val = parseExpression();
          exprList = val.type === "SequenceExpression" ? val.expressions : [val];
        } else {
          exprList = [];
        }
        expect(_parenR);
        // if '=>' follows '(...)', convert contents to arguments
        if (metParenL === oldParenL && eat(_arrow)) {
          val = parseArrowExpression(startNode(), exprList);
        } else {
          // forbid '()' before everything but '=>'
          if (!val) unexpected(lastStart);
          // forbid '...' in sequence expressions
          if (options.ecmaVersion >= 6) {
            for (var i = 0; i < exprList.length; i++) {
              if (exprList[i].type === "SpreadElement") unexpected();
            }
          }
        }
      }
      val.start = tokStart1;
      val.end = lastEnd;
      if (options.locations) {
        val.loc.start = tokStartLoc1;
        val.loc.end = lastEndLoc;
      }
      if (options.ranges) {
        val.range = [tokStart1, lastEnd];
      }
      return val;

    case _bracketL:
      var node = startNode();
      next();
      // check whether this is array comprehension or regular array
      if (options.ecmaVersion >= 6 && tokType === _for) {
        return parseComprehension(node, false);
      }
      node.elements = parseExprList(_bracketR, true, true);
      return finishNode(node, "ArrayExpression");

    case _braceL:
      return parseObj();

    case _function:
      var node = startNode();
      next();
      return parseFunction(node, false);

    case _class:
      return parseClass(startNode(), false);

    case _new:
      return parseNew();

    case _ellipsis:
      return parseSpread();

    case _bquote:
      return parseTemplate();

    default:
      unexpected();
    }
  }

  // New's precedence is slightly tricky. It must allow its argument
  // to be a `[]` or dot subscript expression, but not a call — at
  // least, not without wrapping it in parentheses. Thus, it uses the

  function parseNew() {
    var node = startNode();
    next();
    node.callee = parseSubscripts(parseExprAtom(), true);
    if (eat(_parenL)) node.arguments = parseExprList(_parenR, false);
    else node.arguments = empty;
    return finishNode(node, "NewExpression");
  }

  // Parse spread element '...expr'

  function parseSpread() {
    var node = startNode();
    next();
    node.argument = parseExpression(true);
    return finishNode(node, "SpreadElement");
  }

  // Parse template expression.

  function parseTemplate() {
    var node = startNode();
    node.expressions = [];
    node.quasis = [];
    inTemplate = true;
    next();
    for (;;) {
      var elem = startNode();
      elem.value = {cooked: tokVal, raw: input.slice(tokStart, tokEnd)};
      elem.tail = false;
      next();
      node.quasis.push(finishNode(elem, "TemplateElement"));
      if (eat(_bquote)) { // '`', end of template
        elem.tail = true;
        break;
      }
      inTemplate = false;
      expect(_dollarBraceL);
      node.expressions.push(parseExpression());
      inTemplate = true;
      expect(_braceR);
    }
    inTemplate = false;
    return finishNode(node, "TemplateLiteral");
  }

  // Parse an object literal.

  function parseObj() {
    var node = startNode(), first = true, propHash = {};
    node.properties = [];
    next();
    while (!eat(_braceR)) {
      if (!first) {
        expect(_comma);
        if (options.allowTrailingCommas && eat(_braceR)) break;
      } else first = false;

      var prop = startNode(), isGenerator;
      if (options.ecmaVersion >= 6) {
        prop.method = false;
        prop.shorthand = false;
        isGenerator = eat(_star);
      }
      parsePropertyName(prop);
      if (eat(_colon)) {
        prop.value = parseExpression(true);
        prop.kind = "init";
      } else if (options.ecmaVersion >= 6 && tokType === _parenL) {
        prop.kind = "init";
        prop.method = true;
        prop.value = parseMethod(isGenerator);
      } else if (options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" &&
                 (prop.key.name === "get" || prop.key.name === "set")) {
        if (isGenerator) unexpected();
        prop.kind = prop.key.name;
        parsePropertyName(prop);
        prop.value = parseMethod(false);
      } else if (options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
        prop.kind = "init";
        prop.value = prop.key;
        prop.shorthand = true;
      } else unexpected();

      checkPropClash(prop, propHash);
      node.properties.push(finishNode(prop, "Property"));
    }
    return finishNode(node, "ObjectExpression");
  }

  function parsePropertyName(prop) {
    if (options.ecmaVersion >= 6) {
      if (eat(_bracketL)) {
        prop.computed = true;
        prop.key = parseExpression();
        expect(_bracketR);
        return;
      } else {
        prop.computed = false;
      }
    }
    prop.key = (tokType === _num || tokType === _string) ? parseExprAtom() : parseIdent(true);
  }

  // Initialize empty function node.

  function initFunction(node) {
    node.id = null;
    node.params = [];
    if (options.ecmaVersion >= 6) {
      node.defaults = [];
      node.rest = null;
      node.generator = false;
    }
  }

  // Parse a function declaration or literal (depending on the
  // `isStatement` parameter).

  function parseFunction(node, isStatement, allowExpressionBody) {
    initFunction(node);
    if (options.ecmaVersion >= 6) {
      node.generator = eat(_star);
    }
    if (isStatement || tokType === _name) {
      node.id = parseIdent();
    }
    parseFunctionParams(node);
    parseFunctionBody(node, allowExpressionBody);
    return finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
  }

  // Parse object or class method.

  function parseMethod(isGenerator) {
    var node = startNode();
    initFunction(node);
    parseFunctionParams(node);
    var allowExpressionBody;
    if (options.ecmaVersion >= 6) {
      node.generator = isGenerator;
      allowExpressionBody = true;
    } else {
      allowExpressionBody = false;
    }
    parseFunctionBody(node, allowExpressionBody);
    return finishNode(node, "FunctionExpression");
  }

  // Parse arrow function expression with given parameters.

  function parseArrowExpression(node, params) {
    initFunction(node);

    var defaults = node.defaults, hasDefaults = false;

    for (var i = 0, lastI = params.length - 1; i <= lastI; i++) {
      var param = params[i];

      if (param.type === "AssignmentExpression" && param.operator === "=") {
        hasDefaults = true;
        params[i] = param.left;
        defaults.push(param.right);
      } else {
        toAssignable(param, i === lastI, true);
        defaults.push(null);
        if (param.type === "SpreadElement") {
          params.length--;
          node.rest = param.argument;
          break;
        }
      }
    }

    node.params = params;
    if (!hasDefaults) node.defaults = [];

    parseFunctionBody(node, true);
    return finishNode(node, "ArrowFunctionExpression");
  }

  // Parse function parameters.

  function parseFunctionParams(node) {
    var defaults = [], hasDefaults = false;

    expect(_parenL);
    for (;;) {
      if (eat(_parenR)) {
        break;
      } else if (options.ecmaVersion >= 6 && eat(_ellipsis)) {
        node.rest = toAssignable(parseExprAtom(), false, true);
        checkSpreadAssign(node.rest);
        expect(_parenR);
        break;
      } else {
        node.params.push(options.ecmaVersion >= 6 ? toAssignable(parseExprAtom(), false, true) : parseIdent());
        if (options.ecmaVersion >= 6 && tokType === _eq) {
          next();
          hasDefaults = true;
          defaults.push(parseExpression(true));
        }
        if (!eat(_comma)) {
          expect(_parenR);
          break;
        }
      }
    }

    if (hasDefaults) node.defaults = defaults;
  }

  // Parse function body and check parameters.

  function parseFunctionBody(node, allowExpression) {
    var isExpression = allowExpression && tokType !== _braceL;

    if (isExpression) {
      node.body = parseExpression(true);
      node.expression = true;
    } else {
      // Start a new scope with regard to labels and the `inFunction`
      // flag (restore them to their old value afterwards).
      var oldInFunc = inFunction, oldInGen = inGenerator, oldLabels = labels;
      inFunction = true; inGenerator = node.generator; labels = [];
      node.body = parseBlock(true);
      node.expression = false;
      inFunction = oldInFunc; inGenerator = oldInGen; labels = oldLabels;
    }

    // If this is a strict mode function, verify that argument names
    // are not repeated, and it does not try to bind the words `eval`
    // or `arguments`.
    if (strict || !isExpression && node.body.body.length && isUseStrict(node.body.body[0])) {
      var nameHash = {};
      if (node.id)
        checkFunctionParam(node.id, {});
      for (var i = 0; i < node.params.length; i++)
        checkFunctionParam(node.params[i], nameHash);
      if (node.rest)
        checkFunctionParam(node.rest, nameHash);
    }
  }

  // Parse a class declaration or literal (depending on the
  // `isStatement` parameter).

  function parseClass(node, isStatement) {
    next();
    node.id = tokType === _name ? parseIdent() : isStatement ? unexpected() : null;
    node.superClass = eat(_extends) ? parseExpression() : null;
    var classBody = startNode(), methodHash = {}, staticMethodHash = {};
    classBody.body = [];
    expect(_braceL);
    while (!eat(_braceR)) {
      var method = startNode();
      if (tokType === _name && tokVal === "static") {
        next();
        method['static'] = true;
      } else {
        method['static'] = false;
      }
      var isGenerator = eat(_star);
      parsePropertyName(method);
      if (tokType === _name && !method.computed && method.key.type === "Identifier" &&
          (method.key.name === "get" || method.key.name === "set")) {
        if (isGenerator) unexpected();
        method.kind = method.key.name;
        parsePropertyName(method);
      } else {
        method.kind = "";
      }
      method.value = parseMethod(isGenerator);
      checkPropClash(method, method['static'] ? staticMethodHash : methodHash);
      classBody.body.push(finishNode(method, "MethodDefinition"));
      eat(_semi);
    }
    node.body = finishNode(classBody, "ClassBody");
    return finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
  }

  // Parses a comma-separated list of expressions, and returns them as
  // an array. `close` is the token type that ends the list, and
  // `allowEmpty` can be turned on to allow subsequent commas with
  // nothing in between them to be parsed as `null` (which is needed
  // for array literals).

  function parseExprList(close, allowTrailingComma, allowEmpty) {
    var elts = [], first = true;
    while (!eat(close)) {
      if (!first) {
        expect(_comma);
        if (allowTrailingComma && options.allowTrailingCommas && eat(close)) break;
      } else first = false;

      if (allowEmpty && tokType === _comma) elts.push(null);
      else elts.push(parseExpression(true));
    }
    return elts;
  }

  // Parse the next token as an identifier. If `liberal` is true (used
  // when parsing properties), it will also convert keywords into
  // identifiers.

  function parseIdent(liberal) {
    var node = startNode();
    if (liberal && options.forbidReserved == "everywhere") liberal = false;
    if (tokType === _name) {
      if (!liberal &&
          (options.forbidReserved &&
           (options.ecmaVersion === 3 ? isReservedWord3 : isReservedWord5)(tokVal) ||
           strict && isStrictReservedWord(tokVal)) &&
          input.slice(tokStart, tokEnd).indexOf("\\") == -1)
        raise(tokStart, "The keyword '" + tokVal + "' is reserved");
      node.name = tokVal;
    } else if (liberal && tokType.keyword) {
      node.name = tokType.keyword;
    } else {
      unexpected();
    }
    tokRegexpAllowed = false;
    next();
    return finishNode(node, "Identifier");
  }

  // Parses module export declaration.

  function parseExport(node) {
    next();
    // export var|const|let|function|class ...;
    if (tokType === _var || tokType === _const || tokType === _let || tokType === _function || tokType === _class) {
      node.declaration = parseStatement();
      node['default'] = false;
      node.specifiers = null;
      node.source = null;
    } else
    // export default ...;
    if (eat(_default)) {
      node.declaration = parseExpression(true);
      node['default'] = true;
      node.specifiers = null;
      node.source = null;
      semicolon();
    } else {
      // export * from '...'
      // export { x, y as z } [from '...']
      var isBatch = tokType === _star;
      node.declaration = null;
      node['default'] = false;
      node.specifiers = parseExportSpecifiers();
      if (tokType === _name && tokVal === "from") {
        next();
        node.source = tokType === _string ? parseExprAtom() : unexpected();
      } else {
        if (isBatch) unexpected();
        node.source = null;
      }
    }
    return finishNode(node, "ExportDeclaration");
  }

  // Parses a comma-separated list of module exports.

  function parseExportSpecifiers() {
    var nodes = [], first = true;
    if (tokType === _star) {
      // export * from '...'
      var node = startNode();
      next();
      nodes.push(finishNode(node, "ExportBatchSpecifier"));
    } else {
      // export { x, y as z } [from '...']
      expect(_braceL);
      while (!eat(_braceR)) {
        if (!first) {
          expect(_comma);
          if (options.allowTrailingCommas && eat(_braceR)) break;
        } else first = false;

        var node = startNode();
        node.id = parseIdent();
        if (tokType === _name && tokVal === "as") {
          next();
          node.name = parseIdent(true);
        } else {
          node.name = null;
        }
        nodes.push(finishNode(node, "ExportSpecifier"));
      }
    }
    return nodes;
  }

  // Parses import declaration.

  function parseImport(node) {
    next();
    // import '...';
    if (tokType === _string) {
      node.specifiers = [];
      node.source = parseExprAtom();
      node.kind = "";
    } else {
      node.specifiers = parseImportSpecifiers();
      if (tokType !== _name || tokVal !== "from") unexpected();
      next();
      node.source = tokType === _string ? parseExprAtom() : unexpected();
      // only for backward compatibility with Esprima's AST
      // (it doesn't support mixed default + named yet)
      node.kind = node.specifiers[0]['default'] ? "default" : "named";
    }
    return finishNode(node, "ImportDeclaration");
  }

  // Parses a comma-separated list of module imports.

  function parseImportSpecifiers() {
    var nodes = [], first = true;
    if (tokType === _star) {
      var node = startNode();
      next();
      if (tokType !== _name || tokVal !== "as") unexpected();
      next();
      node.name = parseIdent();
      checkLVal(node.name, true);
      nodes.push(finishNode(node, "ImportBatchSpecifier"));
      return nodes;
    }
    if (tokType === _name) {
      // import defaultObj, { x, y as z } from '...'
      var node = startNode();
      node.id = parseIdent();
      checkLVal(node.id, true);
      node.name = null;
      node['default'] = true;
      nodes.push(finishNode(node, "ImportSpecifier"));
      if (!eat(_comma)) return nodes;
    }
    expect(_braceL);
    while (!eat(_braceR)) {
      if (!first) {
        expect(_comma);
        if (options.allowTrailingCommas && eat(_braceR)) break;
      } else first = false;

      var node = startNode();
      node.id = parseIdent(true);
      if (tokType === _name && tokVal === "as") {
        next();
        node.name = parseIdent();
      } else {
        node.name = null;
      }
      checkLVal(node.name || node.id, true);
      node['default'] = false;
      nodes.push(finishNode(node, "ImportSpecifier"));
    }
    return nodes;
  }

  // Parses yield expression inside generator.

  function parseYield() {
    var node = startNode();
    next();
    if (eat(_semi) || canInsertSemicolon()) {
      node.delegate = false;
      node.argument = null;
    } else {
      node.delegate = eat(_star);
      node.argument = parseExpression(true);
    }
    return finishNode(node, "YieldExpression");
  }

  // Parses array and generator comprehensions.

  function parseComprehension(node, isGenerator) {
    node.blocks = [];
    while (tokType === _for) {
      var block = startNode();
      next();
      expect(_parenL);
      block.left = toAssignable(parseExprAtom());
      checkLVal(block.left, true);
      if (tokType !== _name || tokVal !== "of") unexpected();
      next();
      // `of` property is here for compatibility with Esprima's AST
      // which also supports deprecated [for (... in ...) expr]
      block.of = true;
      block.right = parseExpression();
      expect(_parenR);
      node.blocks.push(finishNode(block, "ComprehensionBlock"));
    }
    node.filter = eat(_if) ? parseParenExpression() : null;
    node.body = parseExpression();
    expect(isGenerator ? _parenR : _bracketR);
    node.generator = isGenerator;
    return finishNode(node, "ComprehensionExpression");
  }

});

},{}],33:[function(require,module,exports){
// AST walker module for Mozilla Parser API compatible trees

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") return mod(exports); // CommonJS
  if (typeof define == "function" && define.amd) return define(["exports"], mod); // AMD
  mod((this.acorn || (this.acorn = {})).walk = {}); // Plain browser env
})(function(exports) {
  "use strict";

  // A simple walk is one where you simply specify callbacks to be
  // called on specific nodes. The last two arguments are optional. A
  // simple use would be
  //
  //     walk.simple(myTree, {
  //         Expression: function(node) { ... }
  //     });
  //
  // to do something with all expressions. All Parser API node types
  // can be used to identify node types, as well as Expression,
  // Statement, and ScopeBody, which denote categories of nodes.
  //
  // The base argument can be used to pass a custom (recursive)
  // walker, and state can be used to give this walked an initial
  // state.
  exports.simple = function(node, visitors, base, state) {
    if (!base) base = exports.base;
    function c(node, st, override) {
      var type = override || node.type, found = visitors[type];
      base[type](node, st, c);
      if (found) found(node, st);
    }
    c(node, state);
  };

  // An ancestor walk builds up an array of ancestor nodes (including
  // the current node) and passes them to the callback as the state parameter.
  exports.ancestor = function(node, visitors, base, state) {
    if (!base) base = exports.base;
    if (!state) state = [];
    function c(node, st, override) {
      var type = override || node.type, found = visitors[type];
      if (node != st[st.length - 1]) {
        st = st.slice();
        st.push(node);
      }
      base[type](node, st, c);
      if (found) found(node, st);
    }
    c(node, state);
  };

  // A recursive walk is one where your functions override the default
  // walkers. They can modify and replace the state parameter that's
  // threaded through the walk, and can opt how and whether to walk
  // their child nodes (by calling their third argument on these
  // nodes).
  exports.recursive = function(node, state, funcs, base) {
    var visitor = funcs ? exports.make(funcs, base) : base;
    function c(node, st, override) {
      visitor[override || node.type](node, st, c);
    }
    c(node, state);
  };

  function makeTest(test) {
    if (typeof test == "string")
      return function(type) { return type == test; };
    else if (!test)
      return function() { return true; };
    else
      return test;
  }

  function Found(node, state) { this.node = node; this.state = state; }

  // Find a node with a given start, end, and type (all are optional,
  // null can be used as wildcard). Returns a {node, state} object, or
  // undefined when it doesn't find a matching node.
  exports.findNodeAt = function(node, start, end, test, base, state) {
    test = makeTest(test);
    try {
      if (!base) base = exports.base;
      var c = function(node, st, override) {
        var type = override || node.type;
        if ((start == null || node.start <= start) &&
            (end == null || node.end >= end))
          base[type](node, st, c);
        if (test(type, node) &&
            (start == null || node.start == start) &&
            (end == null || node.end == end))
          throw new Found(node, st);
      };
      c(node, state);
    } catch (e) {
      if (e instanceof Found) return e;
      throw e;
    }
  };

  // Find the innermost node of a given type that contains the given
  // position. Interface similar to findNodeAt.
  exports.findNodeAround = function(node, pos, test, base, state) {
    test = makeTest(test);
    try {
      if (!base) base = exports.base;
      var c = function(node, st, override) {
        var type = override || node.type;
        if (node.start > pos || node.end < pos) return;
        base[type](node, st, c);
        if (test(type, node)) throw new Found(node, st);
      };
      c(node, state);
    } catch (e) {
      if (e instanceof Found) return e;
      throw e;
    }
  };

  // Find the outermost matching node after a given position.
  exports.findNodeAfter = function(node, pos, test, base, state) {
    test = makeTest(test);
    try {
      if (!base) base = exports.base;
      var c = function(node, st, override) {
        if (node.end < pos) return;
        var type = override || node.type;
        if (node.start >= pos && test(type, node)) throw new Found(node, st);
        base[type](node, st, c);
      };
      c(node, state);
    } catch (e) {
      if (e instanceof Found) return e;
      throw e;
    }
  };

  // Find the outermost matching node before a given position.
  exports.findNodeBefore = function(node, pos, test, base, state) {
    test = makeTest(test);
    if (!base) base = exports.base;
    var max;
    var c = function(node, st, override) {
      if (node.start > pos) return;
      var type = override || node.type;
      if (node.end <= pos && (!max || max.node.end < node.end) && test(type, node))
        max = new Found(node, st);
      base[type](node, st, c);
    };
    c(node, state);
    return max;
  };

  // Used to create a custom walker. Will fill in all missing node
  // type properties with the defaults.
  exports.make = function(funcs, base) {
    if (!base) base = exports.base;
    var visitor = {};
    for (var type in base) visitor[type] = base[type];
    for (var type in funcs) visitor[type] = funcs[type];
    return visitor;
  };

  function skipThrough(node, st, c) { c(node, st); }
  function ignore(_node, _st, _c) {}

  // Node walkers.

  var base = exports.base = {};
  base.Program = base.BlockStatement = function(node, st, c) {
    for (var i = 0; i < node.body.length; ++i)
      c(node.body[i], st, "Statement");
  };
  base.Statement = skipThrough;
  base.EmptyStatement = ignore;
  base.ExpressionStatement = function(node, st, c) {
    c(node.expression, st, "Expression");
  };
  base.IfStatement = function(node, st, c) {
    c(node.test, st, "Expression");
    c(node.consequent, st, "Statement");
    if (node.alternate) c(node.alternate, st, "Statement");
  };
  base.LabeledStatement = function(node, st, c) {
    c(node.body, st, "Statement");
  };
  base.BreakStatement = base.ContinueStatement = ignore;
  base.WithStatement = function(node, st, c) {
    c(node.object, st, "Expression");
    c(node.body, st, "Statement");
  };
  base.SwitchStatement = function(node, st, c) {
    c(node.discriminant, st, "Expression");
    for (var i = 0; i < node.cases.length; ++i) {
      var cs = node.cases[i];
      if (cs.test) c(cs.test, st, "Expression");
      for (var j = 0; j < cs.consequent.length; ++j)
        c(cs.consequent[j], st, "Statement");
    }
  };
  base.ReturnStatement = base.YieldExpression = function(node, st, c) {
    if (node.argument) c(node.argument, st, "Expression");
  };
  base.ThrowStatement = base.SpreadElement = function(node, st, c) {
    c(node.argument, st, "Expression");
  };
  base.TryStatement = function(node, st, c) {
    c(node.block, st, "Statement");
    if (node.handler) c(node.handler.body, st, "ScopeBody");
    if (node.finalizer) c(node.finalizer, st, "Statement");
  };
  base.WhileStatement = function(node, st, c) {
    c(node.test, st, "Expression");
    c(node.body, st, "Statement");
  };
  base.DoWhileStatement = base.WhileStatement;
  base.ForStatement = function(node, st, c) {
    if (node.init) c(node.init, st, "ForInit");
    if (node.test) c(node.test, st, "Expression");
    if (node.update) c(node.update, st, "Expression");
    c(node.body, st, "Statement");
  };
  base.ForInStatement = base.ForOfStatement = function(node, st, c) {
    c(node.left, st, "ForInit");
    c(node.right, st, "Expression");
    c(node.body, st, "Statement");
  };
  base.ForInit = function(node, st, c) {
    if (node.type == "VariableDeclaration") c(node, st);
    else c(node, st, "Expression");
  };
  base.DebuggerStatement = ignore;

  base.FunctionDeclaration = function(node, st, c) {
    c(node, st, "Function");
  };
  base.VariableDeclaration = function(node, st, c) {
    for (var i = 0; i < node.declarations.length; ++i) {
      var decl = node.declarations[i];
      if (decl.init) c(decl.init, st, "Expression");
    }
  };

  base.Function = function(node, st, c) {
    c(node.body, st, "ScopeBody");
  };
  base.ScopeBody = function(node, st, c) {
    c(node, st, "Statement");
  };

  base.Expression = skipThrough;
  base.ThisExpression = ignore;
  base.ArrayExpression = function(node, st, c) {
    for (var i = 0; i < node.elements.length; ++i) {
      var elt = node.elements[i];
      if (elt) c(elt, st, "Expression");
    }
  };
  base.ObjectExpression = function(node, st, c) {
    for (var i = 0; i < node.properties.length; ++i)
      c(node.properties[i], st);
  };
  base.FunctionExpression = base.ArrowFunctionExpression = base.FunctionDeclaration;
  base.SequenceExpression = base.TemplateLiteral = function(node, st, c) {
    for (var i = 0; i < node.expressions.length; ++i)
      c(node.expressions[i], st, "Expression");
  };
  base.UnaryExpression = base.UpdateExpression = function(node, st, c) {
    c(node.argument, st, "Expression");
  };
  base.BinaryExpression = base.AssignmentExpression = base.LogicalExpression = function(node, st, c) {
    c(node.left, st, "Expression");
    c(node.right, st, "Expression");
  };
  base.ConditionalExpression = function(node, st, c) {
    c(node.test, st, "Expression");
    c(node.consequent, st, "Expression");
    c(node.alternate, st, "Expression");
  };
  base.NewExpression = base.CallExpression = function(node, st, c) {
    c(node.callee, st, "Expression");
    if (node.arguments) for (var i = 0; i < node.arguments.length; ++i)
      c(node.arguments[i], st, "Expression");
  };
  base.MemberExpression = function(node, st, c) {
    c(node.object, st, "Expression");
    if (node.computed) c(node.property, st, "Expression");
  };
  base.Identifier = base.Literal = base.ExportDeclaration = base.ImportDeclaration = ignore;

  base.TaggedTemplateExpression = function(node, st, c) {
    c(node.tag, st, "Expression");
    c(node.quasi, st);
  };
  base.ClassDeclaration = base.ClassExpression = function(node, st, c) {
    if (node.superClass) c(node.superClass, st, "Expression");
    for (var i = 0; i < node.body.body.length; i++)
      c(node.body.body[i], st);
  };
  base.MethodDefinition = base.Property = function(node, st, c) {
    if (node.computed) c(node.key, st, "Expression");
    c(node.value, st, "Expression");
  };
  base.ComprehensionExpression = function(node, st, c) {
    for (var i = 0; i < node.blocks.length; i++)
      c(node.blocks[i].right, st, "Expression");
    c(node.body, st, "Expression");
  };

  // A custom walker that keeps track of the scope chain and the
  // variables defined in it.
  function makeScope(prev, isCatch) {
    return {vars: Object.create(null), prev: prev, isCatch: isCatch};
  }
  function normalScope(scope) {
    while (scope.isCatch) scope = scope.prev;
    return scope;
  }
  exports.scopeVisitor = exports.make({
    Function: function(node, scope, c) {
      var inner = makeScope(scope);
      for (var i = 0; i < node.params.length; ++i)
        inner.vars[node.params[i].name] = {type: "argument", node: node.params[i]};
      if (node.id) {
        var decl = node.type == "FunctionDeclaration";
        (decl ? normalScope(scope) : inner).vars[node.id.name] =
          {type: decl ? "function" : "function name", node: node.id};
      }
      c(node.body, inner, "ScopeBody");
    },
    TryStatement: function(node, scope, c) {
      c(node.block, scope, "Statement");
      if (node.handler) {
        var inner = makeScope(scope, true);
        inner.vars[node.handler.param.name] = {type: "catch clause", node: node.handler.param};
        c(node.handler.body, inner, "ScopeBody");
      }
      if (node.finalizer) c(node.finalizer, scope, "Statement");
    },
    VariableDeclaration: function(node, scope, c) {
      var target = normalScope(scope);
      for (var i = 0; i < node.declarations.length; ++i) {
        var decl = node.declarations[i];
        target.vars[decl.id.name] = {type: "var", node: decl.id};
        if (decl.init) c(decl.init, scope, "Expression");
      }
    }
  });

});

},{}],34:[function(require,module,exports){
/**
 * This file automatically generated from `build.js`.
 * Do not manually edit.
 */

module.exports = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "menuitem",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];

},{}],35:[function(require,module,exports){
'use strict';

var detect = require('acorn-globals');
var acorn = require('acorn');
var walk = require('acorn/util/walk');

module.exports = addWith

/**
 * Mimic `with` as far as possible but at compile time
 *
 * @param {String} obj The object part of a with expression
 * @param {String} src The body of the with expression
 * @param {Array.<String>} exclude A list of variable names to explicitly exclude
 */
function addWith(obj, src, exclude) {
  obj = obj + ''
  src = src + ''
  exclude = exclude || []
  exclude = exclude.concat(detect(obj).map(function (global) { return global.name; }))
  var vars = detect(src).map(function (global) { return global.name; })
    .filter(function (v) {
      return exclude.indexOf(v) === -1
    })

  if (vars.length === 0) return src

  var declareLocal = ''
  var local = 'locals_for_with'
  var result = 'result_of_with'
  if (/^[a-zA-Z0-9$_]+$/.test(obj)) {
    local = obj
  } else {
    while (vars.indexOf(local) != -1 || exclude.indexOf(local) != -1) {
      local += '_'
    }
    declareLocal = 'var ' + local + ' = (' + obj + ')'
  }
  while (vars.indexOf(result) != -1 || exclude.indexOf(result) != -1) {
    result += '_'
  }

  var inputVars = vars.map(function (v) {
    return JSON.stringify(v) + ' in ' + local + '?' +
      local + '.' + v + ':' +
      'typeof ' + v + '!=="undefined"?' + v + ':undefined'
  })

  src = '(function (' + vars.join(', ') + ') {' +
    src +
    '}.call(this' + inputVars.map(function (v) { return ',' + v; }).join('') + '))'

  return ';' + declareLocal + ';' + unwrapReturns(src, result) + ';'
}

/**
 * Take a self calling function, and unwrap it such that return inside the function
 * results in return outside the function
 *
 * @param {String} src    Some JavaScript code representing a self-calling function
 * @param {String} result A temporary variable to store the result in
 */
function unwrapReturns(src, result) {
  var originalSource = src
  var hasReturn = false
  var ast = acorn.parse(src, {ecmaVersion: 6})
  var ref
  src = src.split('')

  // get a reference to the function that was inserted to add an inner context
  if ((ref = ast.body).length !== 1
   || (ref = ref[0]).type !== 'ExpressionStatement'
   || (ref = ref.expression).type !== 'CallExpression'
   || (ref = ref.callee).type !== 'MemberExpression' || ref.computed !== false || ref.property.name !== 'call'
   || (ref = ref.object).type !== 'FunctionExpression')
    throw new Error('AST does not seem to represent a self-calling function')
  var fn = ref

  walk.recursive(ast, null, {
    Function: function (node, st, c) {
      if (node === fn) {
        c(node.body, st, "ScopeBody");
      }
    },
    ReturnStatement: function (node) {
      hasReturn = true
      replace(node, 'return {value: ' + source(node.argument) + '};');
    }
  });
  function source(node) {
    return src.slice(node.start, node.end).join('')
  }
  function replace(node, str) {
    for (var i = node.start; i < node.end; i++) {
      src[i] = ''
    }
    src[node.start] = str
  }
  if (!hasReturn) return originalSource
  else return 'var ' + result + '=' + src.join('') + ';if (' + result + ') return ' + result + '.value'
}

},{"acorn":37,"acorn-globals":36,"acorn/util/walk":38}],36:[function(require,module,exports){
module.exports=require(31)
},{"/Users/forbeslindesay/GitHub/jade/node_modules/constantinople/node_modules/acorn-globals/index.js":31,"acorn":37,"acorn/util/walk":38}],37:[function(require,module,exports){
module.exports=require(32)
},{"/Users/forbeslindesay/GitHub/jade/node_modules/constantinople/node_modules/acorn-globals/node_modules/acorn/acorn.js":32}],38:[function(require,module,exports){
module.exports=require(33)
},{"/Users/forbeslindesay/GitHub/jade/node_modules/constantinople/node_modules/acorn-globals/node_modules/acorn/util/walk.js":33}]},{},[4])(4)
});/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
/**
 * @license AngularJS v1.5.0-rc.1
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngRoute
 * @description
 *
 * # ngRoute
 *
 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 *
 * <div doc-module-components="ngRoute"></div>
 */
 /* global -ngRouteModule */
var ngRouteModule = angular.module('ngRoute', ['ng']).
                        provider('$route', $RouteProvider),
    $routeMinErr = angular.$$minErr('ngRoute');

/**
 * @ngdoc provider
 * @name $routeProvider
 *
 * @description
 *
 * Used for configuring routes.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 * ## Dependencies
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 */
function $RouteProvider() {
  function inherit(parent, extra) {
    return angular.extend(Object.create(parent), extra);
  }

  var routes = {};

  /**
   * @ngdoc method
   * @name $routeProvider#when
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain named groups starting with a colon and ending with a star:
   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
   *
   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
   *
   *    * `color: brown`
   *    * `largecode: code/with/slashes`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` â€“ `{(string|function()=}` â€“ Controller fn that should be associated with
   *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
   *    - `controllerAs` â€“ `{string=}` â€“ An identifier name for a reference to the controller.
   *      If present, the controller will be published to scope under the `controllerAs` name.
   *    - `template` â€“ `{string=|function()=}` â€“ html template as a string or a function that
   *      returns an html template as a string which should be used by {@link
   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `templateUrl` â€“ `{string=|function()=}` â€“ path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the router
   *      will wait for them all to be resolved or one to be rejected before the controller is
   *      instantiated.
   *      If all the promises are resolved successfully, the values of the resolved promises are
   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
   *      fired. If any of the promises are rejected the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired.
   *      For easier access to the resolved dependencies from the template, the `resolve` map will
   *      be available on the scope of the route, under `$resolve` (by default) or a custom name
   *      specified by the `resolveAs` property (see below). This can be particularly useful, when
   *      working with {@link angular.Module#component components} as route templates.<br />
   *      <div class="alert alert-warning">
   *        **Note:** If your scope already contains a property with this name, it will be hidden
   *        or overwritten. Make sure, you specify an appropriate name for this property, that
   *        does not collide with other properties on the scope.
   *      </div>
   *      The map object is:
   *
   *      - `key` â€“ `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is
   *        resolved before its value is injected into the controller. Be aware that
   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
   *
   *    - `resolveAs` - `{string=}` - The name under which the `resolve` map will be available on
   *      the scope of the route. If omitted, defaults to `$resolve`.
   *
   *    - `redirectTo` â€“ `{(string|function())=}` â€“ value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.path()` and `$location.search()`.
   *
   *    - `[reloadOnSearch=true]` - `{boolean=}` - reload route when only `$location.search()`
   *      or `$location.hash()` changes.
   *
   *      If the option is set to `false` and url in the browser changes, then
   *      `$routeUpdate` event is broadcasted on the root scope.
   *
   *    - `[caseInsensitiveMatch=false]` - `{boolean=}` - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    //copy original route object to preserve params inherited from proto chain
    var routeCopy = angular.copy(route);
    if (angular.isUndefined(routeCopy.reloadOnSearch)) {
      routeCopy.reloadOnSearch = true;
    }
    if (angular.isUndefined(routeCopy.caseInsensitiveMatch)) {
      routeCopy.caseInsensitiveMatch = this.caseInsensitiveMatch;
    }
    routes[path] = angular.extend(
      routeCopy,
      path && pathRegExp(path, routeCopy)
    );

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length - 1] == '/')
            ? path.substr(0, path.length - 1)
            : path + '/';

      routes[redirectPath] = angular.extend(
        {redirectTo: path},
        pathRegExp(redirectPath, routeCopy)
      );
    }

    return this;
  };

  /**
   * @ngdoc property
   * @name $routeProvider#caseInsensitiveMatch
   * @description
   *
   * A boolean property indicating if routes defined
   * using this provider should be matched using a case insensitive
   * algorithm. Defaults to `false`.
   */
  this.caseInsensitiveMatch = false;

   /**
    * @param path {string} path
    * @param opts {Object} options
    * @return {?Object}
    *
    * @description
    * Normalizes the given path, returning a regular expression
    * and the original path.
    *
    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
    */
  function pathRegExp(path, opts) {
    var insensitive = opts.caseInsensitiveMatch,
        ret = {
          originalPath: path,
          regexp: path
        },
        keys = ret.keys = [];

    path = path
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option) {
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([\/$\*])/g, '\\$1');

    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
    return ret;
  }

  /**
   * @ngdoc method
   * @name $routeProvider#otherwise
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object|string} params Mapping information to be assigned to `$route.current`.
   * If called with a string, the value maps to `redirectTo`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    if (typeof params === 'string') {
      params = {redirectTo: params};
    }
    this.when(null, params);
    return this;
  };


  this.$get = ['$rootScope',
               '$location',
               '$routeParams',
               '$q',
               '$injector',
               '$templateRequest',
               '$sce',
      function($rootScope, $location, $routeParams, $q, $injector, $templateRequest, $sce) {

    /**
     * @ngdoc service
     * @name $route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as defined in the route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     *     The `locals` will be assigned to the route scope's `$resolve` property. You can override
     *     the property name, using `resolveAs` in the route definition. See
     *     {@link ngRoute.$routeProvider $routeProvider} for more info.
     *
     * @property {Object} routes Object with all route configuration Objects as its properties.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the
     * {@link ngRoute.directive:ngView `ngView`} directive and the
     * {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
     * This example shows how changing the URL hash causes the `$route` to match a route against the
     * URL, and the `ngView` pulls in the partial.
     *
     * <example name="$route-service" module="ngRouteExample"
     *          deps="angular-route.js" fixBase="true">
     *   <file name="index.html">
     *     <div ng-controller="MainController">
     *       Choose:
     *       <a href="Book/Moby">Moby</a> |
     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     *       <a href="Book/Gatsby">Gatsby</a> |
     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
     *
     *       <div ng-view></div>
     *
     *       <hr />
     *
     *       <pre>$location.path() = {{$location.path()}}</pre>
     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
     *       <pre>$route.current.params = {{$route.current.params}}</pre>
     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
     *       <pre>$routeParams = {{$routeParams}}</pre>
     *     </div>
     *   </file>
     *
     *   <file name="book.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *   </file>
     *
     *   <file name="chapter.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *     Chapter Id: {{params.chapterId}}
     *   </file>
     *
     *   <file name="script.js">
     *     angular.module('ngRouteExample', ['ngRoute'])
     *
     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
     *
     *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = "BookController";
     *          $scope.params = $routeParams;
     *      })
     *
     *      .controller('ChapterController', function($scope, $routeParams) {
     *          $scope.name = "ChapterController";
     *          $scope.params = $routeParams;
     *      })
     *
     *     .config(function($routeProvider, $locationProvider) {
     *       $routeProvider
     *        .when('/Book/:bookId', {
     *         templateUrl: 'book.html',
     *         controller: 'BookController',
     *         resolve: {
     *           // I will cause a 1 second delay
     *           delay: function($q, $timeout) {
     *             var delay = $q.defer();
     *             $timeout(delay.resolve, 1000);
     *             return delay.promise;
     *           }
     *         }
     *       })
     *       .when('/Book/:bookId/ch/:chapterId', {
     *         templateUrl: 'chapter.html',
     *         controller: 'ChapterController'
     *       });
     *
     *       // configure html5 to get links working on jsfiddle
     *       $locationProvider.html5Mode(true);
     *     });
     *
     *   </file>
     *
     *   <file name="protractor.js" type="protractor">
     *     it('should load and compile correct template', function() {
     *       element(by.linkText('Moby: Ch1')).click();
     *       var content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: ChapterController/);
     *       expect(content).toMatch(/Book Id\: Moby/);
     *       expect(content).toMatch(/Chapter Id\: 1/);
     *
     *       element(by.partialLinkText('Scarlet')).click();
     *
     *       content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: BookController/);
     *       expect(content).toMatch(/Book Id\: Scarlet/);
     *     });
     *   </file>
     * </example>
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeStart
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occur.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * The route change (and the `$location` change that triggered it) can be prevented
     * by calling `preventDefault` method of the event. See {@link ng.$rootScope.Scope#$on}
     * for more details about event object.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeSuccess
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route change has happened successfully.
     * The `resolve` dependencies are now available in the `current.locals` property.
     *
     * {@link ngRoute.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is
     * first route entered.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeError
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if any of the resolve promises are rejected.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
     */

    /**
     * @ngdoc event
     * @name $route#$routeUpdate
     * @eventType broadcast on root scope
     * @description
     * The `reloadOnSearch` property has been set to false, and we are reusing the same
     * instance of the Controller.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current/previous route information.
     */

    var forceReload = false,
        preparedRoute,
        preparedRouteIsUpdateOnly,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name $route#reload
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ngRoute.directive:ngView ngView}
           * creates new scope and reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;
            $rootScope.$evalAsync(function() {
              // Don't support cancellation of a reload for now...
              prepareRoute();
              commitRoute();
            });
          },

          /**
           * @ngdoc method
           * @name $route#updateParams
           *
           * @description
           * Causes `$route` service to update the current URL, replacing
           * current route parameters with those specified in `newParams`.
           * Provided property names that match the route's path segment
           * definitions will be interpolated into the location's path, while
           * remaining properties will be treated as query params.
           *
           * @param {!Object<string, string>} newParams mapping of URL parameter names to values
           */
          updateParams: function(newParams) {
            if (this.current && this.current.$$route) {
              newParams = angular.extend({}, this.current.params, newParams);
              $location.path(interpolate(this.current.$$route.originalPath, newParams));
              // interpolate modifies newParams, only query params are left
              $location.search(newParams);
            } else {
              throw $routeMinErr('norout', 'Tried updating route when with no current route');
            }
          }
        };

    $rootScope.$on('$locationChangeStart', prepareRoute);
    $rootScope.$on('$locationChangeSuccess', commitRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param route {Object} route regexp to match the url against
     * @return {?Object}
     *
     * @description
     * Check if the route matches the current url.
     *
     * Inspired by match in
     * visionmedia/express/lib/router/router.js.
     */
    function switchRouteMatcher(on, route) {
      var keys = route.keys,
          params = {};

      if (!route.regexp) return null;

      var m = route.regexp.exec(on);
      if (!m) return null;

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];

        var val = m[i];

        if (key && val) {
          params[key.name] = val;
        }
      }
      return params;
    }

    function prepareRoute($locationEvent) {
      var lastRoute = $route.current;

      preparedRoute = parseRoute();
      preparedRouteIsUpdateOnly = preparedRoute && lastRoute && preparedRoute.$$route === lastRoute.$$route
          && angular.equals(preparedRoute.pathParams, lastRoute.pathParams)
          && !preparedRoute.reloadOnSearch && !forceReload;

      if (!preparedRouteIsUpdateOnly && (lastRoute || preparedRoute)) {
        if ($rootScope.$broadcast('$routeChangeStart', preparedRoute, lastRoute).defaultPrevented) {
          if ($locationEvent) {
            $locationEvent.preventDefault();
          }
        }
      }
    }

    function commitRoute() {
      var lastRoute = $route.current;
      var nextRoute = preparedRoute;

      if (preparedRouteIsUpdateOnly) {
        lastRoute.params = nextRoute.params;
        angular.copy(lastRoute.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', lastRoute);
      } else if (nextRoute || lastRoute) {
        forceReload = false;
        $route.current = nextRoute;
        if (nextRoute) {
          if (nextRoute.redirectTo) {
            if (angular.isString(nextRoute.redirectTo)) {
              $location.path(interpolate(nextRoute.redirectTo, nextRoute.params)).search(nextRoute.params)
                       .replace();
            } else {
              $location.url(nextRoute.redirectTo(nextRoute.pathParams, $location.path(), $location.search()))
                       .replace();
            }
          }
        }

        $q.when(nextRoute).
          then(function() {
            if (nextRoute) {
              var locals = angular.extend({}, nextRoute.resolve),
                  template, templateUrl;

              angular.forEach(locals, function(value, key) {
                locals[key] = angular.isString(value) ?
                    $injector.get(value) : $injector.invoke(value, null, null, key);
              });

              if (angular.isDefined(template = nextRoute.template)) {
                if (angular.isFunction(template)) {
                  template = template(nextRoute.params);
                }
              } else if (angular.isDefined(templateUrl = nextRoute.templateUrl)) {
                if (angular.isFunction(templateUrl)) {
                  templateUrl = templateUrl(nextRoute.params);
                }
                if (angular.isDefined(templateUrl)) {
                  nextRoute.loadedTemplateUrl = $sce.valueOf(templateUrl);
                  template = $templateRequest(templateUrl);
                }
              }
              if (angular.isDefined(template)) {
                locals['$template'] = template;
              }
              return $q.all(locals);
            }
          }).
          then(function(locals) {
            // after route change
            if (nextRoute == $route.current) {
              if (nextRoute) {
                nextRoute.locals = locals;
                angular.copy(nextRoute.params, $routeParams);
              }
              $rootScope.$broadcast('$routeChangeSuccess', nextRoute, lastRoute);
            }
          }, function(error) {
            if (nextRoute == $route.current) {
              $rootScope.$broadcast('$routeChangeError', nextRoute, lastRoute, error);
            }
          });
      }
    }


    /**
     * @returns {Object} the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @returns {string} interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      angular.forEach((string || '').split(':'), function(segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(?:[?*])?(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


/**
 * @ngdoc service
 * @name $routeParams
 * @requires $route
 *
 * @description
 * The `$routeParams` service allows you to retrieve the current set of route parameters.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * The route parameters are a combination of {@link ng.$location `$location`}'s
 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
 * Instead you can use `$route.current.params` to access the new route's parameters.
 *
 * @example
 * ```js
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
 * ```
 */
function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);
ngRouteModule.directive('ngView', ngViewFillContentFactory);


/**
 * @ngdoc directive
 * @name ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * enter - animation is used to bring new content into the browser.
 * leave - animation is used to animate existing content away.
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @param {string=} onload Expression to evaluate whenever the view updates.
 *
 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
 *                    as an expression yields a truthy value.
 * @example
    <example name="ngView-directive" module="ngViewExample"
             deps="angular-route.js;angular-animate.js"
             animations="true" fixBase="true">
      <file name="index.html">
        <div ng-controller="MainCtrl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="view-animate-container">
            <div ng-view class="view-animate"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .view-animate-container {
          position:relative;
          height:100px!important;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .view-animate {
          padding:10px;
        }

        .view-animate.ng-enter, .view-animate.ng-leave {
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .view-animate.ng-enter {
          left:100%;
        }
        .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
        .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
          .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              $locationProvider.html5Mode(true);
          }])
          .controller('MainCtrl', ['$route', '$routeParams', '$location',
            function($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
          .controller('BookCtrl', ['$routeParams', function($routeParams) {
            this.name = "BookCtrl";
            this.params = $routeParams;
          }])
          .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
            this.name = "ChapterCtrl";
            this.params = $routeParams;
          }]);

      </file>

      <file name="protractor.js" type="protractor">
        it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: ChapterCtrl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: BookCtrl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ngView#$viewContentLoaded
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
function ngViewFactory($route, $anchorScroll, $animate) {
  return {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    link: function(scope, $element, attr, ctrl, $transclude) {
        var currentScope,
            currentElement,
            previousLeaveAnimation,
            autoScrollExp = attr.autoscroll,
            onloadExp = attr.onload || '';

        scope.$on('$routeChangeSuccess', update);
        update();

        function cleanupLastView() {
          if (previousLeaveAnimation) {
            $animate.cancel(previousLeaveAnimation);
            previousLeaveAnimation = null;
          }

          if (currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if (currentElement) {
            previousLeaveAnimation = $animate.leave(currentElement);
            previousLeaveAnimation.then(function() {
              previousLeaveAnimation = null;
            });
            currentElement = null;
          }
        }

        function update() {
          var locals = $route.current && $route.current.locals,
              template = locals && locals.$template;

          if (angular.isDefined(template)) {
            var newScope = scope.$new();
            var current = $route.current;

            // Note: This will also link all children of ng-view that were contained in the original
            // html. If that content contains controllers, ... they could pollute/change the scope.
            // However, using ng-view on an element with additional content does not make sense...
            // Note: We can't remove them in the cloneAttchFn of $transclude as that
            // function is called before linking the content, which would apply child
            // directives to non existing elements.
            var clone = $transclude(newScope, function(clone) {
              $animate.enter(clone, null, currentElement || $element).then(function onNgViewEnter() {
                if (angular.isDefined(autoScrollExp)
                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                  $anchorScroll();
                }
              });
              cleanupLastView();
            });

            currentElement = clone;
            currentScope = current.scope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          } else {
            cleanupLastView();
          }
        }
    }
  };
}

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
function ngViewFillContentFactory($compile, $controller, $route) {
  return {
    restrict: 'ECA',
    priority: -400,
    link: function(scope, $element) {
      var current = $route.current,
          locals = current.locals;

      $element.html(locals.$template);

      var link = $compile($element.contents());

      if (current.controller) {
        locals.$scope = scope;
        var controller = $controller(current.controller, locals);
        if (current.controllerAs) {
          scope[current.controllerAs] = controller;
        }
        $element.data('$ngControllerController', controller);
        $element.children().data('$ngControllerController', controller);
      }
      scope[current.resolveAs || '$resolve'] = locals;

      link(scope);
    }
  };
}


})(window, window.angular);/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') { throw new Error('Bootstrap\'s JavaScript requires jQuery') }

/* ========================================================================
 * Bootstrap: transition.js v3.2.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.2.0'

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.2.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.2.0'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    $el[val](data[state] == null ? this.options[state] : data[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    Plugin.call($btn, 'toggle')
    e.preventDefault()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.2.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element).on('keydown.bs.carousel', $.proxy(this.keydown, this))
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.2.0'

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  }

  Carousel.prototype.keydown = function (e) {
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.2.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.2.0'

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      Plugin.call(actives, 'hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var href
    var $this   = $(this)
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.2.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.2.0'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.trigger('focus')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options        = options
    this.$body          = $(document.body)
    this.$element       = $(element)
    this.$backdrop      =
    this.isShown        = null
    this.scrollbarWidth = 0

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.2.0'

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.$body.addClass('modal-open')

    this.setScrollbar()
    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.$body.removeClass('modal-open')

    this.resetScrollbar()
    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(150) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  Modal.prototype.checkScrollbar = function () {
    if (document.body.clientWidth >= window.innerWidth) return
    this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '')
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.2.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.2.0'

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(document.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $parent      = this.$element.parent()
        var parentDim    = this.getPosition($parent)

        placement = placement == 'bottom' && pos.top   + pos.height       + actualHeight - parentDim.scroll > parentDim.height ? 'top'    :
                    placement == 'top'    && pos.top   - parentDim.scroll - actualHeight < 0                                   ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth      > parentDim.width                                    ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth      < parentDim.left                                     ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var arrowDelta          = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowPosition       = delta.left ? 'left'        : 'top'
    var arrowOffsetPosition = delta.left ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    this.$element.removeAttr('aria-describedby')

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element
    var el     = $element[0]
    var isBody = el.tagName == 'BODY'
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : null, {
      scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
      width:  isBody ? $(window).width()  : $element.outerWidth(),
      height: isBody ? $(window).height() : $element.outerHeight()
    }, isBody ? { top: 0, left: 0 } : $element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.2.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.2.0'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').empty()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.2.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var process  = $.proxy(this.process, this)

    this.$body          = $('body')
    this.$scrollElement = $(element).is('body') ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', process)
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.2.0'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = 'offset'
    var offsetBase   = 0

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.offsets = []
    this.targets = []
    this.scrollHeight = this.getScrollHeight()

    var self     = this

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.2.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.2.0'

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.2.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.2.0'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin != null) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - this.$element.height() - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);
/*!
 * Datepicker for Bootstrap v1.6.1 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(a){return function(){return this[a].apply(this,arguments)}}function g(a){return a&&!isNaN(a.getTime())}function h(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function i(b){var c={};if(q[b]||(b=b.split("-")[0],q[b])){var d=q[b];return a.each(p,function(a,b){b in d&&(c[b]=d[b])}),c}}var j=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;d>c;c++)if(this[c].valueOf()===b)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new j;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),k=function(b,c){a(b).data("datepicker",this),this._process_options(c),this.dates=new j,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=this.element.hasClass("date")?this.element.find(".add-on, .input-group-addon, .btn"):!1,this.hasInput=this.component&&this.inputField.length,this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=a(r.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(a,b){return parseInt(b)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted),this.setDatesDisabled(this.o.datesDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};k.prototype={constructor:k,_resolveViewName:function(a,c){return 0===a||"days"===a||"month"===a?0:1===a||"months"===a||"year"===a?1:2===a||"years"===a||"decade"===a?2:3===a||"decades"===a||"century"===a?3:4===a||"centuries"===a||"millennium"===a?4:c===b?!1:c},_check_template:function(c){try{if(c===b||""===c)return!1;if((c.match(/[<>]/g)||[]).length<=0)return!0;var d=a(c);return d.length>0}catch(e){return!1}},_process_options:function(b){this._o=a.extend({},this._o,b);var e=this.o=a.extend({},this._o),f=e.language;q[f]||(f=f.split("-")[0],q[f]||(f=o.language)),e.language=f,e.startView=this._resolveViewName(e.startView,0),e.minViewMode=this._resolveViewName(e.minViewMode,0),e.maxViewMode=this._resolveViewName(e.maxViewMode,4),e.startView=Math.min(e.startView,e.maxViewMode),e.startView=Math.max(e.startView,e.minViewMode),e.multidate!==!0&&(e.multidate=Number(e.multidate)||!1,e.multidate!==!1&&(e.multidate=Math.max(0,e.multidate))),e.multidateSeparator=String(e.multidateSeparator),e.weekStart%=7,e.weekEnd=(e.weekStart+6)%7;var g=r.parseFormat(e.format);e.startDate!==-(1/0)&&(e.startDate?e.startDate instanceof Date?e.startDate=this._local_to_utc(this._zero_time(e.startDate)):e.startDate=r.parseDate(e.startDate,g,e.language,e.assumeNearbyYear):e.startDate=-(1/0)),e.endDate!==1/0&&(e.endDate?e.endDate instanceof Date?e.endDate=this._local_to_utc(this._zero_time(e.endDate)):e.endDate=r.parseDate(e.endDate,g,e.language,e.assumeNearbyYear):e.endDate=1/0),e.daysOfWeekDisabled=e.daysOfWeekDisabled||[],a.isArray(e.daysOfWeekDisabled)||(e.daysOfWeekDisabled=e.daysOfWeekDisabled.split(/[,\s]*/)),e.daysOfWeekDisabled=a.map(e.daysOfWeekDisabled,function(a){return parseInt(a,10)}),e.daysOfWeekHighlighted=e.daysOfWeekHighlighted||[],a.isArray(e.daysOfWeekHighlighted)||(e.daysOfWeekHighlighted=e.daysOfWeekHighlighted.split(/[,\s]*/)),e.daysOfWeekHighlighted=a.map(e.daysOfWeekHighlighted,function(a){return parseInt(a,10)}),e.datesDisabled=e.datesDisabled||[],a.isArray(e.datesDisabled)||(e.datesDisabled=[e.datesDisabled]),e.datesDisabled=a.map(e.datesDisabled,function(a){return r.parseDate(a,g,e.language,e.assumeNearbyYear)});var h=String(e.orientation).toLowerCase().split(/\s+/g),i=e.orientation.toLowerCase();if(h=a.grep(h,function(a){return/^auto|left|right|top|bottom$/.test(a)}),e.orientation={x:"auto",y:"auto"},i&&"auto"!==i)if(1===h.length)switch(h[0]){case"top":case"bottom":e.orientation.y=h[0];break;case"left":case"right":e.orientation.x=h[0]}else i=a.grep(h,function(a){return/^left|right$/.test(a)}),e.orientation.x=i[0]||"auto",i=a.grep(h,function(a){return/^top|bottom$/.test(a)}),e.orientation.y=i[0]||"auto";else;if(e.defaultViewDate){var j=e.defaultViewDate.year||(new Date).getFullYear(),k=e.defaultViewDate.month||0,l=e.defaultViewDate.day||1;e.defaultViewDate=c(j,k,l)}else e.defaultViewDate=d()},_events:[],_secondaryEvents:[],_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:a.proxy(this.keydown,this),paste:a.proxy(this.paste,this)};this.o.showOnFocus===!0&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.hasInput?this._events=[[this.inputField,b],[this.component,{click:a.proxy(this.show,this)}]]:this._events=[[this.element,{click:a.proxy(this.show,this),keydown:a.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":a.proxy(function(a){this.update(a.date)},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{mousedown:a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return r.formatDate(c,b,this.o.language)},this)})},show:function(){return this.inputField.prop("disabled")||this.inputField.prop("readonly")&&this.o.enableOnReadonly===!1?void 0:(this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this)},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(b){var c;if(b.originalEvent.clipboardData&&b.originalEvent.clipboardData.types&&-1!==a.inArray("text/plain",b.originalEvent.clipboardData.types))c=b.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;c=window.clipboardData.getData("Text")}this.setDate(c),this.update(),b.preventDefault()},_utc_to_local:function(a){return a&&new Date(a.getTime()+6e4*a.getTimezoneOffset())},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()))},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return"undefined"!=typeof a?new Date(a):null},clearDates:function(){this.inputField&&this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,a.map(b,this._utc_to_local)),this._trigger("changeDate"),this.setValue(),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),remove:f("destroy"),setValue:function(){var a=this.getFormattedDate();return this.inputField.val(a),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return r.formatDate(a,c,d)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekHighlighted:function(a){return this._process_options({daysOfWeekHighlighted:a}),this.update(),this},setDatesDisabled:function(a){this._process_options({datesDisabled:a}),this.update(),this.updateNavArrows()},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=10,e=a(this.o.container),f=e.width(),g="body"===this.o.container?a(document).scrollTop():e.scrollTop(),h=e.offset(),i=[];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==b&&i.push(parseInt(b))});var j=Math.max.apply(Math,i)+this.o.zIndexOffset,k=this.component?this.component.parent().offset():this.element.offset(),l=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),m=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),n=k.left-h.left,o=k.top-h.top;"body"!==this.o.container&&(o+=g),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(n-=b-m)):k.left<0?(this.picker.addClass("datepicker-orient-left"),n-=k.left-d):n+b>f?(this.picker.addClass("datepicker-orient-right"),n+=m-b):this.picker.addClass("datepicker-orient-left");var p,q=this.o.orientation.y;if("auto"===q&&(p=-g+o-c,q=0>p?"bottom":"top"),this.picker.addClass("datepicker-orient-"+q),"top"===q?o-=c+parseInt(this.picker.css("padding-top")):o+=l,this.o.rtl){var r=f-(n+m);this.picker.css({top:o,right:r,zIndex:j})}else this.picker.css({top:o,left:n,zIndex:j});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.inputField.val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return r.parseDate(a,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),c=a.grep(c,a.proxy(function(a){return!this.dateWithinRange(a)||!a},this),!0),this.dates.replace(c),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate,d?this.setValue():c.length&&String(b)!==String(this.dates)&&this._trigger("changeDate"),!this.dates.length&&b.length&&this._trigger("clearDate"),this.fill(),this.element.change(),this},fillDow:function(){var b=this.o.weekStart,c="<tr>";for(this.o.calendarWeeks&&(this.picker.find(".datepicker-days .datepicker-switch").attr("colspan",function(a,b){return parseInt(b)+1}),c+='<th class="cw">&#160;</th>');b<this.o.weekStart+7;)c+='<th class="dow',a.inArray(b,this.o.daysOfWeekDisabled)>-1&&(c+=" disabled"),c+='">'+q[this.o.language].daysMin[b++%7]+"</th>";c+="</tr>",this.picker.find(".datepicker-days thead").append(c)},fillMonths:function(){for(var a=this._utc_to_local(this.viewDate),b="",c=0;12>c;){var d=a&&a.getMonth()===c?" focused":"";b+='<span class="month'+d+'">'+q[this.o.language].monthsShort[c++]+"</span>"}this.picker.find(".datepicker-months td").html(b)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],d=this.viewDate.getUTCFullYear(),e=this.viewDate.getUTCMonth(),f=new Date;return b.getUTCFullYear()<d||b.getUTCFullYear()===d&&b.getUTCMonth()<e?c.push("old"):(b.getUTCFullYear()>d||b.getUTCFullYear()===d&&b.getUTCMonth()>e)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&b.getUTCFullYear()===f.getFullYear()&&b.getUTCMonth()===f.getMonth()&&b.getUTCDate()===f.getDate()&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),this.dateWithinRange(b)||c.push("disabled"),this.dateIsDisabled(b)&&c.push("disabled","disabled-date"),-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekHighlighted)&&c.push("highlighted"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected"),b.valueOf()===this.range[0]&&c.push("range-start"),b.valueOf()===this.range[this.range.length-1]&&c.push("range-end")),c},_fill_yearsView:function(c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;for(k="",l=this.picker.find(c),m=parseInt(g/e,10)*e,o=parseInt(h/f,10)*f,p=parseInt(i/f,10)*f,n=a.map(this.dates,function(a){return parseInt(a.getUTCFullYear()/f,10)*f}),l.find(".datepicker-switch").text(m+"-"+(m+9*f)),q=m-f,r=-1;11>r;r+=1)s=[d],t=null,-1===r?s.push("old"):10===r&&s.push("new"),-1!==a.inArray(q,n)&&s.push("active"),(o>q||q>p)&&s.push("disabled"),q===this.viewDate.getFullYear()&&s.push("focused"),j!==a.noop&&(u=j(new Date(q,0,1)),u===b?u={}:"boolean"==typeof u?u={enabled:u}:"string"==typeof u&&(u={classes:u}),u.enabled===!1&&s.push("disabled"),u.classes&&(s=s.concat(u.classes.split(/\s+/))),u.tooltip&&(t=u.tooltip)),k+='<span class="'+s.join(" ")+'"'+(t?' title="'+t+'"':"")+">"+q+"</span>",q+=f;l.find("td").html(k)},fill:function(){var d,e,f=new Date(this.viewDate),g=f.getUTCFullYear(),h=f.getUTCMonth(),i=this.o.startDate!==-(1/0)?this.o.startDate.getUTCFullYear():-(1/0),j=this.o.startDate!==-(1/0)?this.o.startDate.getUTCMonth():-(1/0),k=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,m=q[this.o.language].today||q.en.today||"",n=q[this.o.language].clear||q.en.clear||"",o=q[this.o.language].titleFormat||q.en.titleFormat;if(!isNaN(g)&&!isNaN(h)){this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f,o,this.o.language)),this.picker.find("tfoot .today").text(m).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot .clear").text(n).toggle(this.o.clearBtn!==!1),this.picker.find("thead .datepicker-title").text(this.o.title).toggle(""!==this.o.title),this.updateNavArrows(),this.fillMonths();var p=c(g,h-1,28),s=r.getDaysInMonth(p.getUTCFullYear(),p.getUTCMonth());p.setUTCDate(s),p.setUTCDate(s-(p.getUTCDay()-this.o.weekStart+7)%7);var t=new Date(p);p.getUTCFullYear()<100&&t.setUTCFullYear(p.getUTCFullYear()),t.setUTCDate(t.getUTCDate()+42),t=t.valueOf();for(var u,v=[];p.valueOf()<t;){if(p.getUTCDay()===this.o.weekStart&&(v.push("<tr>"),this.o.calendarWeeks)){var w=new Date(+p+(this.o.weekStart-p.getUTCDay()-7)%7*864e5),x=new Date(Number(w)+(11-w.getUTCDay())%7*864e5),y=new Date(Number(y=c(x.getUTCFullYear(),0,1))+(11-y.getUTCDay())%7*864e5),z=(x-y)/864e5/7+1;v.push('<td class="cw">'+z+"</td>")}u=this.getClassNames(p),u.push("day"),this.o.beforeShowDay!==a.noop&&(e=this.o.beforeShowDay(this._utc_to_local(p)),e===b?e={}:"boolean"==typeof e?e={enabled:e}:"string"==typeof e&&(e={classes:e}),e.enabled===!1&&u.push("disabled"),e.classes&&(u=u.concat(e.classes.split(/\s+/))),e.tooltip&&(d=e.tooltip)),u=a.unique(u),v.push('<td class="'+u.join(" ")+'"'+(d?' title="'+d+'"':"")+">"+p.getUTCDate()+"</td>"),d=null,p.getUTCDay()===this.o.weekEnd&&v.push("</tr>"),p.setUTCDate(p.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(v.join(""));var A=q[this.o.language].monthsTitle||q.en.monthsTitle||"Months",B=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?A:g).end().find("span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===g&&B.eq(b.getUTCMonth()).addClass("active")}),(i>g||g>k)&&B.addClass("disabled"),g===i&&B.slice(0,j).addClass("disabled"),g===k&&B.slice(l+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var C=this;a.each(B,function(c,d){var e=new Date(g,c,1),f=C.o.beforeShowMonth(e);f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),f.enabled!==!1||a(d).hasClass("disabled")||a(d).addClass("disabled"),f.classes&&a(d).addClass(f.classes),f.tooltip&&a(d).prop("title",f.tooltip)})}this._fill_yearsView(".datepicker-years","year",10,1,g,i,k,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,10,g,i,k,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,100,g,i,k,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var a=new Date(this.viewDate),b=a.getUTCFullYear(),c=a.getUTCMonth();switch(this.viewMode){case 0:this.o.startDate!==-(1/0)&&b<=this.o.startDate.getUTCFullYear()&&c<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&b>=this.o.endDate.getUTCFullYear()&&c>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:case 3:case 4:this.o.startDate!==-(1/0)&&b<=this.o.startDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&b>=this.o.endDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}}},click:function(b){b.preventDefault(),b.stopPropagation();var e,f,g,h,i,j,k;e=a(b.target),e.hasClass("datepicker-switch")&&this.showMode(1);var l=e.closest(".prev, .next");l.length>0&&(f=r.modes[this.viewMode].navStep*(l.hasClass("prev")?-1:1),0===this.viewMode?(this.viewDate=this.moveMonth(this.viewDate,f),this._trigger("changeMonth",this.viewDate)):(this.viewDate=this.moveYear(this.viewDate,f),1===this.viewMode&&this._trigger("changeYear",this.viewDate)),this.fill()),e.hasClass("today")&&!e.hasClass("day")&&(this.showMode(-2),this._setDate(d(),"linked"===this.o.todayBtn?null:"view")),e.hasClass("clear")&&this.clearDates(),e.hasClass("disabled")||(e.hasClass("day")&&(g=parseInt(e.text(),10)||1,h=this.viewDate.getUTCFullYear(),i=this.viewDate.getUTCMonth(),e.hasClass("old")&&(0===i?(i=11,h-=1,j=!0,k=!0):(i-=1,j=!0)),e.hasClass("new")&&(11===i?(i=0,h+=1,j=!0,k=!0):(i+=1,j=!0)),this._setDate(c(h,i,g)),k&&this._trigger("changeYear",this.viewDate),j&&this._trigger("changeMonth",this.viewDate)),e.hasClass("month")&&(this.viewDate.setUTCDate(1),g=1,i=e.parent().find("span").index(e),h=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(i),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode?(this._setDate(c(h,i,g)),this.showMode()):this.showMode(-1),this.fill()),(e.hasClass("year")||e.hasClass("decade")||e.hasClass("century"))&&(this.viewDate.setUTCDate(1),g=1,i=0,h=parseInt(e.text(),10)||0,this.viewDate.setUTCFullYear(h),e.hasClass("year")&&(this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(c(h,i,g))),e.hasClass("decade")&&(this._trigger("changeDecade",this.viewDate),3===this.o.minViewMode&&this._setDate(c(h,i,g))),e.hasClass("century")&&(this._trigger("changeCentury",this.viewDate),4===this.o.minViewMode&&this._setDate(c(h,i,g))),this.showMode(-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&a(this._focused_from).focus(),delete this._focused_from},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):this.o.multidate===!1?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),b&&"view"!==b||(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate"),this.inputField&&this.inputField.change(),!this.o.autoclose||b&&"date"!==b||this.hide()},moveDay:function(a,b){var c=new Date(a);return c.setUTCDate(a.getUTCDate()+b),c},moveWeek:function(a,b){return this.moveDay(a,7*b)},moveMonth:function(a,b){if(!g(a))return this.o.defaultViewDate;if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),h=e.getUTCMonth(),i=Math.abs(b);if(b=b>0?1:-1,1===i)d=-1===b?function(){return e.getUTCMonth()===h}:function(){return e.getUTCMonth()!==c},c=h+b,e.setUTCMonth(c),(0>c||c>11)&&(c=(c+12)%12);else{for(var j=0;i>j;j++)e=this.moveMonth(e,b);c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!==e.getUTCMonth()}}for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},moveAvailableDate:function(a,b,c){do{if(a=this[c](a,b),!this.dateWithinRange(a))return!1;c="moveDay"}while(this.dateIsDisabled(a));return a},weekOfDateIsDisabled:function(b){return-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(b){return this.weekOfDateIsDisabled(b)||a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void((40===a.keyCode||27===a.keyCode)&&(this.show(),a.stopPropagation()));var b,c,d=!1,e=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault(),a.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;b=37===a.keyCode||38===a.keyCode?-1:1,0===this.viewMode?a.ctrlKey?(c=this.moveAvailableDate(e,b,"moveYear"),c&&this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveAvailableDate(e,b,"moveMonth"),c&&this._trigger("changeMonth",this.viewDate)):37===a.keyCode||39===a.keyCode?c=this.moveAvailableDate(e,b,"moveDay"):this.weekOfDateIsDisabled(e)||(c=this.moveAvailableDate(e,b,"moveWeek")):1===this.viewMode?((38===a.keyCode||40===a.keyCode)&&(b=4*b),c=this.moveAvailableDate(e,b,"moveMonth")):2===this.viewMode&&((38===a.keyCode||40===a.keyCode)&&(b=4*b),c=this.moveAvailableDate(e,b,"moveYear")),c&&(this.focusDate=this.viewDate=c,this.setValue(),this.fill(),a.preventDefault());break;case 13:if(!this.o.forceParse)break;e=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(e),d=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),a.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}d&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField&&this.inputField.change())},showMode:function(a){a&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,this.viewMode+a))),this.picker.children("div").hide().filter(".datepicker-"+r.modes[this.viewMode].clsName).show(),this.updateNavArrows()}};var l=function(b,c){a(b).data("datepicker",this),this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,n.call(a(this.inputs),c).on("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a(b).data("datepicker")}),this.updateDates()};l.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},dateUpdated:function(b){if(!this.updating){this.updating=!0;var c=a(b.target).data("datepicker");if("undefined"!=typeof c){var d=c.getUTCDate(),e=a.inArray(b.target,this.inputs),f=e-1,g=e+1,h=this.inputs.length;if(-1!==e){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b.setUTCDate(d)}),d<this.dates[f])for(;f>=0&&d<this.dates[f];)this.pickers[f--].setUTCDate(d);else if(d>this.dates[g])for(;h>g&&d>this.dates[g];)this.pickers[g++].setUTCDate(d);this.updateDates(),delete this.updating}}}},remove:function(){a.map(this.pickers,function(a){a.remove()}),delete this.element.data().datepicker}};var m=a.fn.datepicker,n=function(c){var d=Array.apply(null,arguments);d.shift();var e;if(this.each(function(){var b=a(this),f=b.data("datepicker"),g="object"==typeof c&&c;if(!f){var j=h(this,"date"),m=a.extend({},o,j,g),n=i(m.language),p=a.extend({},o,n,j,g);b.hasClass("input-daterange")||p.inputs?(a.extend(p,{inputs:p.inputs||b.find("input").toArray()}),f=new l(this,p)):f=new k(this,p),b.data("datepicker",f)}"string"==typeof c&&"function"==typeof f[c]&&(e=f[c].apply(f,d))}),e===b||e instanceof k||e instanceof l)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+c+" function)");return e};a.fn.datepicker=n;var o=a.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,beforeShowYear:a.noop,beforeShowDecade:a.noop,beforeShowCentury:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-(1/0),startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&laquo;",rightArrow:"&raquo;"}},p=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=k;var q=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},r={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10},{clsName:"decades",navFnc:"FullDecade",navStep:100},{clsName:"centuries",navFnc:"FullCentury",navStep:1e3}],isLeapYear:function(a){return a%4===0&&a%100!==0||a%400===0},getDaysInMonth:function(a,b){return[31,r.isLeapYear(a)?29:28,31,30,31,30,31,31,30,31,30,31][b]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(a){if("function"==typeof a.toValue&&"function"==typeof a.toDisplay)return a;var b=a.replace(this.validParts,"\x00").split("\x00"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(e,f,g,h){function i(a,b){return b===!0&&(b=10),100>a&&(a+=2e3,a>(new Date).getFullYear()+b&&(a-=100)),a}function j(){var a=this.slice(0,s[n].length),b=s[n].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!e)return b;if(e instanceof Date)return e;if("string"==typeof f&&(f=r.parseFormat(f)),f.toValue)return f.toValue(e,f,g);var l,m,n,o,p=/([\-+]\d+)([dmwy])/,s=e.match(/([\-+]\d+)([dmwy])/g),t={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},u={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e)){for(e=new Date,n=0;n<s.length;n++)l=p.exec(s[n]),m=parseInt(l[1]),o=t[l[2]],e=k.prototype[o](e,m);return c(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}if("undefined"!=typeof u[e]&&(e=u[e],s=e.match(/([\-+]\d+)([dmwy])/g),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e))){for(e=new Date,n=0;n<s.length;n++)l=p.exec(s[n]),m=parseInt(l[1]),o=t[l[2]],e=k.prototype[o](e,m);return c(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}s=e&&e.match(this.nonpunctuation)||[],e=new Date;var v,w,x={},y=["yyyy","yy","M","MM","m","mm","d","dd"],z={yyyy:function(a,b){return a.setUTCFullYear(h?i(b,h):b)},yy:function(a,b){return a.setUTCFullYear(h?i(b,h):b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;0>b;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};z.M=z.MM=z.mm=z.m,z.dd=z.d,e=d();var A=f.parts.slice();if(s.length!==A.length&&(A=a(A).filter(function(b,c){return-1!==a.inArray(c,y)}).toArray()),s.length===A.length){var B;for(n=0,B=A.length;B>n;n++){if(v=parseInt(s[n],10),l=A[n],isNaN(v))switch(l){case"MM":w=a(q[g].months).filter(j),v=a.inArray(w[0],q[g].months)+1;break;case"M":w=a(q[g].monthsShort).filter(j),v=a.inArray(w[0],q[g].monthsShort)+1}x[l]=v}var C,D;for(n=0;n<y.length;n++)D=y[n],D in x&&!isNaN(x[D])&&(C=new Date(e),z[D](C,x[D]),isNaN(C)||(e=C))}return e},formatDate:function(b,c,d){if(!b)return"";if("string"==typeof c&&(c=r.parseFormat(c)),c.toDisplay)return c.toDisplay(b,c,d);
var e={d:b.getUTCDate(),D:q[d].daysShort[b.getUTCDay()],DD:q[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:q[d].monthsShort[b.getUTCMonth()],MM:q[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;h>=g;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};r.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+r.headTemplate+"<tbody></tbody>"+r.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=r,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=m,this},a.fn.datepicker.version="1.6.1",a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),n.call(c,"show"))}),a(function(){n.call(a('[data-provide="datepicker-inline"]'))})});var app=angular.module('app',['ngRoute']);
app
    .directive('jade',['$compile', function($compile){
	return{
	    transclude: true,
	    template: '<div ng-transclude></div>',
	    restrict: 'E',
	    link: function(scope, element){
		element
		    .after(
			$compile(
			    jade
				.render(
				    element.html(),
				    {pretty:'\t'}
				)
			)(scope)
		    )
		    .remove();
	    }
	};
    }]);
app.config(['$routeProvider','$httpProvider', function($routeProvider, $httpProvider){
	$routeProvider
	.when('/', {
	    controller: 'gridCtrl'
	})
	.when('/browse', {
	    templateUrl: '/browse.html',
	    controller: 'BrowseCtrl'
	})
	.when('/search', {
	    controller: 'SearchCtrl',
	    templateUrl: '/search2.html'
	})
	.when('/search/:query', {
	    controller: 'SearchCtrl',
	    templateUrl: '/search2.html'
	})
	.when('/ResponseDialog/:status', {
	    templateUrl: '/ErrorDialog.html'
	})
	.when('/quote/:quoteId', {
	    templateUrl: '/video.html',
	    controller: 'videoCtrl'
	})
	.when('/s=:s', {
	    templateUrl: '/video.html',
	    controller: 'videoCtrl'
	})
	.when('/v=:v', {
	    templateUrl: '/video.html',
	    controller: 'videoCtrl'
	})
	.when('/new/:videoId', {
	    templateUrl: '/video.html',
	    controller: 'videoCtrl'
	})
	.when('/story?:story', {
	    templateUrl: '/video.html',
	    controller: 'videoCtrl'
	})
	.when('/settings', {
	    templateUrl: '/settings.html',
	    controller: 'SettingsCtrl'
	})
	.when('/error/:code', {
	    templateUrl: '/error.html',
	    controller: 'AlertCtrl'
	})
  .when('/WatchLater', {
	    templateUrl: '/WatchLater.html',
	    controller: 'WatchLaterCtrl'
	})
  .when('/Favorites', {
	    templateUrl: '/Playlist.html',
	    controller: 'PlaylistCtrl'
	})
	.when('/favorites', {
	    templateUrl: '/favorites.html',
	    controller: 'FavoritesCtrl'
	})
  .otherwise('/');
}])
.config(['$httpProvider', function($httpProvider) {

  // var access_token = document.cookie.match(/access_token=(.*)(\;*)/);
  // if (access_token.length > 0) {
  //   $httpProvider.defaults.headers.common = {
  //   	'Authorization': 'Bearer ' + access_token[1]
  //   };
  // }

  // see https://docs.angularjs.org/api/ng/service/$http
  $httpProvider.interceptors.push(['$q', function($q) {
    return {
      // optional method
      'request': function(config) {
        // same domain only:
        if (config.url.indexOf('/') === 0) {
          if (config.headers['Authentication'] !== undefined) {
            window.localStorage.setItem('access_token', config.headers['Authentication']);
          }


          if (window.localStorage.getItem('access_token') !== undefined && window.localStorage.getItem('access_token') !== null) {
            config.headers['Authorization'] = 'Bearer ' + window.localStorage.getItem('access_token');
            if (config.param) {
                config.param['access_token'] = window.localStorage.getItem('access_token');
            } else {
                config.param = { access_token: window.localStorage.getItem('access_token') };
            }
          }
          else {
            // fallback to cookies:
            window.document.cookie.split(';').map(function(cookie) {
               cookie = cookie.split('=');
               if (cookie[0].indexOf('access_token') > -1) {
                 config.headers['Authorization'] = 'Bearer ' + cookie[1];
                 if (config.param) {
                     config.param['access_token'] = cookie[1];
                 } else {
                     config.param = { access_token: cookie[1]};
                 }
                 window.localStorage.setItem('access_token', cookie[1]);
               }
            });
          }
        }

        return config;
      },

      // optional method
     'requestError': function(rejection) {
        // do something on error
        return $q.reject(rejection);
      },



      // optional method
      'response': function(response) {
        // do something on success
        return response;
      },

      // optional method
     'responseError': function(rejection) {
       console.log(rejection);
       if (rejection.status === 401) {
         window.localStorage.removeItem('access_token');
         document.cookie = 'access_token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
//TODO: login page
//	 window.location.href = '/';
       }
        // do something on error
        return $q.reject(rejection);
      }
    };
  }]);
}]);

app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function() {
	$(document).scrollTop(0);
    });
}]);
app
    .controller('AlertCtrl',['$scope', '$routeParams',function($scope, $routeParams){
	$scope.$parent.show = true;
	$scope.$routeParams = $routeParams;
}]);var Base64 = {

// private property
_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

// public method for encoding
encode : function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output +
        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

    }

    return output;
},

// public method for decoding
decode : function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

        enc1 = this._keyStr.indexOf(input.charAt(i++));
        enc2 = this._keyStr.indexOf(input.charAt(i++));
        enc3 = this._keyStr.indexOf(input.charAt(i++));
        enc4 = this._keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

    }

    output = Base64._utf8_decode(output);

    return output;

},

// private method for UTF-8 encoding
_utf8_encode : function (string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

        var c = string.charCodeAt(n);

        if (c < 128) {
            utftext += String.fromCharCode(c);
        }
        else if((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }

    }

    return utftext;
},

// private method for UTF-8 decoding
_utf8_decode : function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while ( i < utftext.length ) {

        c = utftext.charCodeAt(i);

        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        }
        else if((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i+1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        }
        else {
            c2 = utftext.charCodeAt(i+1);
            c3 = utftext.charCodeAt(i+2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }

    }

    return string;
},

//yoga1290:
download:function(Text,filename){
    var dataURI="data:application/txt;charset=utf-16le;base64,"+Base64.encode(Text);
    var link = document.createElement('a');
        link.download = filename;
        link.href = dataURI;
        link.click();
}

};app
    .controller('BrowseCtrl',['$scope', 'VideoSvc', 'ChannelSvc',
      function($scope, VideoSvc, ChannelSvc) {

	$scope.startDay = -1;
	$scope.startMonth = -1;
	$scope.startYear = -1;

	$scope.endDay = -1;
	$scope.endMonth = -1;
	$scope.endYear = -1;

	$scope.URL = '';
	$scope.channels = [];
	$scope.result = [];
	$scope.pageToken = undefined;
	$scope.query = '';

	$scope.days = [];
	for(var i=1;i<=31;i++)
	    $scope.days.push(i);

	$scope.months = [];
	for(var i=1;i<=12;i++)
	    $scope.months.push(i);

	$scope.years = [];
	for(var i=new Date().getFullYear();i>=2000;i--)
	    $scope.years.push(i);

	ChannelSvc.list(0,50).success(function(channels) {
	    $scope.channels = channels;
	});



	$scope.submit = function(pageToken) {
	    if(!pageToken) {
		$scope.result = [];
	    }
	    var startUnixTime = new Date(0);
		startUnixTime.setDate($scope.startDay);
		startUnixTime.setMonth($scope.startMonth);
		startUnixTime.setFullYear($scope.startYear);
		startUnixTime = startUnixTime.getTime();


	    var endUnixTime = new Date(0);
		endUnixTime.setDate($scope.endDay);
		endUnixTime.setMonth($scope.endMonth);
		endUnixTime.setFullYear($scope.endYear);
		endUnixTime = endUnixTime.getTime();

	    var callback = function(response) {
		$scope.pageToken = response.nextPageToken;
		angular.forEach(response.items, function(item) {
		    $scope.result.push({
			title: item.snippet.title,
			videoId: item.id.videoId,
			thumbnail: item.snippet.thumbnails.high.url
		    });
		});
	    };

	    var videoId = $scope.URL.match(/(?:v\=)+(.*)|(?:youtu\.be\/)+(.*)|(?:channel\/)(.*)/);
	    if(videoId !== null) {
		var i = 1;
		if(videoId[i]===undefined) i=2;
		if(videoId[i]!==undefined) {
		    VideoSvc.getChannelId(videoId[i]).success(function(response) {
			var channelId = response.items[0].snippet.channelId;
			VideoSvc.findByChannelIdAndTime(channelId, startUnixTime, endUnixTime).success(callback);
		    });
		} else {
		    VideoSvc.findByChannelIdAndTime(videoId[3], startUnixTime, endUnixTime, $scope.query, pageToken).success(callback);
		}
	    }
	};

	$scope.onClick = function(video) {
	    window.open('https://videoquotes.herokuapp.com/#/new/' + video.videoId, '_target')
	};


}]);
app.service('ChannelSvc',['$http','$q',function($http,$q) {
	
	this.list = function(offset,limit) {
	    return $http.get('/channel/list',{params:{offset:offset,limit:limit}});
	};
	
	var _findByChannelId = {};
	this.findByChannelId = function(channelId) {
	    if(_findByChannelId[channelId] !== undefined)
		return _findByChannelId[channelId];
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/channel/findByChannelId', {params:{channelId:channelId},timeout:canceller.promise})
		.success(function(response){
		    asyncTask.resolve(response);
		})
		.error(function(reason){
		    _findByChannelId[channelId] = undefined;
		    asyncTask.reject(reason);
		});
	    asyncTask.promise.abort=function(){
		canceller.resolve();
	    };
	    asyncTask.promise.success=function(cb){
		asyncTask.promise.then(cb,function(){});
		return asyncTask.promise;
	    };
	    asyncTask.promise.error=function(cb){
		asyncTask.promise.then(function(){},cb);
		return asyncTask.promise;
	    };
	    asyncTask.promise.finally=function(cb){
		asyncTask.promise.then(cb,cb);
		return asyncTask.promise;
	    };
	    return _findByChannelId[channelId] = asyncTask.promise;
	};
	
	this.insert = function(channelId) {
	    return $http.get('/channel/insert', {params: {
		    id:channelId
	    }});
	};
	
	

	var _searchByName = {};
	this.searchByName = function(name, page, size) {
	    if(_searchByName[name] !== undefined)
		return _searchByName[name];
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/channel/searchByName',{params:{name:name, page:page, size:size},timeout:canceller.promise})
		.success(function(response){
		    asyncTask.resolve(response);
		})
		.error(function(reason){
//		    _isVerified[name] = undefined;
		    asyncTask.reject(reason);
		});
	    asyncTask.promise.abort=function(){
		canceller.resolve();
	    };
	    asyncTask.promise.success=function(cb){
		asyncTask.promise.then(cb,function(){});
		return asyncTask.promise;
	    };
	    asyncTask.promise.error=function(cb){
		asyncTask.promise.then(function(){},cb);
		return asyncTask.promise;
	    };
	    asyncTask.promise.finally=function(cb){
		asyncTask.promise.then(cb,cb);
		return asyncTask.promise;
	    };
	    return _searchByName[name] = asyncTask.promise;
	};
    }]);var config={};

config.BASE_URL='https://videoquotes.herokuapp.com';
config.OAuth={};
config.OAuth.facebook={};
config.OAuth.facebook.APP_ID='504291066443321';
config.OAuth.facebook.REDIRECT_URI=config.BASE_URL+'/OAuth/facebook/';
config.OAuth.facebook.login='https://www.facebook.com/dialog/oauth?client_id='+config.OAuth.facebook.APP_ID+'&redirect_uri='+config.OAuth.facebook.REDIRECT_URI+'&scope=email&state=/index';
app.constant('YTKey', 'AIzaSyB4a9Vy_HoHuSFNIT8XUunQii_nla4YQvs');app
    .controller('dashCtrl',['$scope', '$rootScope','QuoteSvc','VideoSvc','ChannelSvc','Favorites', '$location',
function($scope,$rootScope,QuoteSvc,VideoSvc,ChannelSvc, Favorites, $location) {
	$scope.Favorites = Favorites;
	$scope.page = -1;
	$scope.isAuthenticated=false;
	$scope.login=function(){
	    location.href=config.OAuth.facebook.login;
	};
	
	$scope.topLikedQuotes=[];
	$scope.topLikesPage=5;
	$scope.loadTopLikes=function(){
	    QuoteAnalyticsSvc.findByTopLikes($scope.topLikedQuotes.length,$scope.topLikesPage)
		    .success(function(quoteAny){
			
			angular.forEach(quoteAny,function(o,i){
			    QuoteSvc.findById(o.quoteId)
			    .success(function(quote){
				quote.likes=o.likes;
				$scope.topLikedQuotes.push(quote);
			    });
			});
			    
		    });
	};
	$scope.topSharesQuotes=[];
	$scope.topSharesPage=5;
	$scope.loadTopShares=function(){
	    QuoteAnalyticsSvc.findByTopShares($scope.topSharesQuotes.length,$scope.topSharesPage)
		    .success(function(quoteAny){
			
			angular.forEach(quoteAny,function(o,i){
			    QuoteSvc.findById(o.quoteId)
			    .success(function(quote){
				quote.shares=o.shares;
				$scope.topSharesQuotes.push(quote);
			    });
			});
			
		    });
	};
//	$scope.loadTopShares();
	
	$scope.videoURL='';
	$scope.onVideoURLChange = function() {
	    var videoId = $scope.videoURL.match(/(?:v\=)+(.*)|(?:youtu\.be\/)+(.*)|(?:channel\/)(.*)/);
	    if(videoId !== null) {
		var i = 1;
		if(videoId[i]===undefined) i++;
		if(videoId[i]!==undefined)  $location.path("/new/" + videoId[i]);
	    } else {
		    $location.path('/search').search('query', $scope.videoURL);
		
	    }
	    $scope.videoURL = '';
	};
	
	$scope.channels=[];
	$scope.loadChannels=function(){
	    ChannelSvc.list(0,100).success(function(channels){
		angular.forEach(channels,function(channel,i){
		    VideoSvc.getChannelData(channel.channelId)
			.success(function(data){
//			    $scope.channels.push(data.items[0].snippet.thumbnails.default.url);
			});
		});
	    });
	};
	$scope.loadChannels();
	$scope.openQuote = function(quote) {
	    location.href = '#/quote/'+quote.id;
	};
	
    }]);
    app.run(['$location', function($location) {
    $(document).click(function(e) {
	if (e.target.className.toUpperCase()==='OVERLAY') {
		$location.path('/');
		window.location.href = $location.absUrl();
	}
    });
}]);app
.directive('quote', function() {
    return {
	restrict: 'E',
	scope: {
	    quote: '=quote'
	},
	templateUrl: 'directives/quote.html'
    };
})
.directive('errorDialog', function() {
      return {
  	restrict: 'E',
  	scope: {
  	    // response: '=response'
  	},
    controller: ['$scope', 'ResponseDialog', function($scope, ResponseDialog) {
      $scope.response = ResponseDialog;
    }],
  	templateUrl: 'directives/errorDialog.html'
      };
  })
  .directive('addToPlaylist', function() {
      return {
  	restrict: 'E',
  	scope: {
        quote: '=quote'
  	},
    controller: 'PlaylistMenuCtrl',
  	templateUrl: 'directives/addToPlaylist.html'
      };
  })
  .directive('quoteEditor', function() {
        return {
    	restrict: 'E',
    	scope: {
        // 'onDecreasePlaybackRate': '&',
        // 'onIncreasePlaybackRate': '&',
        // 'onPause': '&',
        // 'onStartTimeChange': '&',
        // 'onEndTimeChange': '&',
        // 'onSelectAuthor': '&',
        // 'onSave': '&',
        //TODO: YTPlayer is not accessable here?
        'YTPlayer': '=',
        'startTime': '=',
        'endTime': '=',
        'authorName': '=',
        'quote': '='
    	},
      controller: 'QuoteEditorCtrl',
    	templateUrl: 'directives/quoteEditor.html'
        };
    })
    .directive('quoteReaction', function() {
        return {
        restrict: 'E',
        scope: {
        'quote': '='
        },
        controller: 'QuoteReactionCtrl',
        templateUrl: 'directives/quoteReaction.html'
        };
    });
app
    .service('facebookSvc',['$http',function($http){
	this.getUserPicture=function(){
	    var chain=
		$http.get('https://graph.facebook.com/me?fields=id,picture.width(1000)&access_token='+localStorage.getItem('access_token'));
	    return chain;
	};
    }]);app.service('Favorites', function() {
    var _this = this;
    
    this.list = {};
    
    if( localStorage.getItem('Favorites') !== undefined && localStorage.getItem('Favorites') !== null)
	this.list = JSON.parse( localStorage.getItem('Favorites') );
    var save = function(){
	localStorage.setItem('Favorites', JSON.stringify(_this.list) );
    };
    
    this.add = function(quote) {
	_this.list[quote.id] = quote;
	save();
    };
    
    this.isFavorites = function(quote) {
	    return (quote && _this.list[quote.id] !== undefined && _this.list[quote.id] !== null);
    };
    
    this.remove = function(quote) {
	var nList = {};
	for(var i in _this.list)
	    if(i !== quote.id)
		nList[i] = _this.list[i];
	_this.list = nList;
	save();
    };
    
});(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-78502732-1', 'auto');


app.run(['$rootScope', '$location', function($rootScope, $location) {
	$rootScope.$on('$routeChangeSuccess', function() {
	    ga('set', 'page', $location.path());
	    ga('send', 'pageview');
	});
}]);

app.config(['$httpProvider', function($httpProvider) {
	
    $httpProvider.interceptors.push(['$q', function($q) {
	var self={};
	return self={
	    requestTime: {},
	    // optional method
	    'request': function(config) {
		self.requestTime[config.url] = new Date().getTime();
	      return config;
	    },

	    // optional method
	   'requestError': function(rejection) {
	      // do something on error
	      self.requestTime[rejection.config.url] -= new Date().getTime();
	      ga('send', 'timing', rejection.config.url, self.requestTime[rejection.config.url]*-1);
	      return $q.reject(rejection);
	    },



	    // optional method
	    'response': function(response) {
		self.requestTime[response.config.url] -= new Date().getTime();
	      ga('send', 'timing', response.config.url, self.requestTime[response.config.url]*-1);
	      
	      return response;
	    },

	    // optional method
	   'responseError': function(rejection) {
	       self.requestTime[rejection.config.url] -= new Date().getTime();
	      ga('send', 'timing', rejection.config.url, self.requestTime[rejection.config.url]*-1);
	      return $q.reject(rejection);
	    }
	};
    }]);
}]);app.controller('gridCtrl',
	    ['$scope', '$location', 'QuoteSvc','TagSvc','PersonSvc','VideoSvc','$timeout','$routeParams', 'UserSvc',
	    function(sp, $location, QuoteSvc,TagSvc,PersonSvc,VideoSvc,to,$routeParams, UserSvc){
		    sp.quotes=[];

//		    var onload=(function(){
//			if(location.href.indexOf("access_token=")>0) {
//			    localStorage.setItem('access_token',location.href.substring(location.href.indexOf("access_token=")+13,location.href.indexOf('&expires')));
//			}
//		    }());

		    sp.onQuoteClick=function(quote) {
    			$location.path('/quote/' + quote.id);
		    };

		    var tags=[],personId=[];
		    if($routeParams.tags !== undefined) {
			angular.forEach($routeParams.tags.split(','), function(tag){
			    tags.push(tag);
			});
		    }
		    if($routeParams.personId !== undefined) {
			angular.forEach($routeParams.personId.split(','), function(person){
			    personId.push(person);
			});
		    }
		    if(tags.length >0 || personId.length>0) {
                sp.search.selected.people = personId;
                sp.search.selected.tags = tags;
		    }

		    sp.search=(function(sp){
			var self={};
			return self={
				field:'',
				result:[],
				backClick:true,
				isHidden:function(){
				    return ( self.backClick);
				},
				selected:{
				    people:{},
				    tags:{}
				},
				tags:[],
				people:[],
				lastReq:null,
				lastPersonReq:null,
				query:function(){
				    if(self.field.length<=0) return;

				    self.tags=[];
				    self.people=[];

				    if(self.lastReq!==null) self.lastReq.abort();
				    self.lastReq=
					TagSvc
					.find(self.field)
					.success(function(response){
					    self.tags=response;
					});
				    self.people=[];
				    if(self.lastPersonReq!==null) self.lastPersonReq.abort();
				    self.lastPersonReq=
				    PersonSvc
					.findByName(self.field)
					.success(function(response){
					    self.people=response;
					});

//					sp.$emit('QuoteGridCtrl.query', 0, 10, '', {}, 'airedTime', false);
				},
				selectTag:function(tag){
				    if(self.selected.tags[tag] === true)
					self.selected.tags[tag] = false;
				    else self.selected.tags[tag] = true;
				    self.search();
				},
				selectPerson:function(person){
				    if(self.selected.people[person] === true)
					self.selected.people[person] = false;
				    else self.selected.people[person] = true;
				    self.search();
				},
				search:function(){
				    // TODO: #?tags=..&people=..
				    var tags=[],personId=[];
				    angular.forEach(self.selected.tags, function(isSelected,tag) {
					if(isSelected)
					    tags.push(tag);
				    });
				    angular.forEach(self.selected.people, function(isSelected,person) {
					if(isSelected)
					    personId.push(person);
				    });
				    //TODO
//				    sp.$emit('QuoteGridCtrl.query', 0, 10, '', {}, 'airedTime', false);
//				    sp.quoteLoader.setQuery(tags,personId);
				}
			};
		    }(sp));

		    sp.parseInt = parseInt;
		    sp.to2Digit=function(x){
			x=parseInt(x)+'';
			while(x.length<2)
			    x+='0'+x;
			return x;
		    };
		    sp.stopPropagation=function(e){
			e.stopPropagation();
		    };
		    sp.show = false;
		    sp.childClick = false;
		    sp.parentClick = true;
		    sp.overlayClick=function(){
			sp.parentClick=true;
			sp.show=!(!sp.childClick && sp.parentClick);
			sp.childClick=sp.parentClick=false;
		    };
		    sp.click=function(){
			sp.childClick=true;
		    };

		    sp.getChannelLogoByVideoId = function(videoId) {
			var url={url:''};
			console.log(videoId);
			VideoSvc.getChannelId(videoId).success(function(response){
			    if (response.items.length > 0)
			    VideoSvc.getChannelData(response.items[0].snippet.channelId).success(function(data){
				url = {url: data.items[0].snippet.thumbnails.default.url};
			    });
			});
			return url.url;
		    };



		    UserSvc.getUser().success(function(response) {
                sp.user = response;
            });

            UserSvc.getPicture().success(function(pictureURL) {
                sp.picture = pictureURL;
            });
    }]);
app
    .controller('MenuCtrl',['$scope','$location','TagSvc', 'ChannelSvc','VideoSvc',
function($scope, $location, TagSvc, ChannelSvc, VideoSvc) {

    $scope.isRouteEquals = function(route) {
      return $location.path() === route;
    };

    $scope.goToRoute = function(route) {
      $location.path(route);
    };

    $scope.login=function(){
  	    window.location.href = config.OAuth.facebook.login;
  	};
    }]);
app
.service('PageLoader', [function() {
    this.count = 0;
}])
.controller('PageLoaderCtrl', ['$scope', 'PageLoader', function($scope, PageLoader) {
    $scope.PageLoader = PageLoader;
}])
.directive('pageLoader', function() {
    return {
      controller: 'PageLoaderCtrl',
	    templateUrl: 'page-loader.html'
    };
})
.config(['$httpProvider', function($httpProvider) {
	
    $httpProvider.interceptors.push(['$q','PageLoader', function($q, PageLoader) {
	var self={};
	return self={
	    count:0,
	    changeLoader:function(){
//		if(PageLoader.count==0)
//		    stickingEffect.scan();
	    },
	    // optional method
	    'request': function(config) {
		PageLoader.count++;
		self.changeLoader();
	      // do something on success
	      return config;
	    },

	    // optional method
	   'requestError': function(rejection) {
	      // do something on error
	      PageLoader.count--;
	      self.changeLoader();
	      //TODO:
	      return $q.reject(rejection);
	    },



	    // optional method
	    'response': function(response) {
		PageLoader.count--;
		self.changeLoader();
	      // do something on success
	      
	      return response;
	    },

	    // optional method
	   'responseError': function(rejection) {
	       PageLoader.count--;
//	       window.location.href ="/#/error/123";
	       self.changeLoader();
	      // do something on error
//	      if(rejection.status>=400)
//		  window.location.href ="/#/error/"+rejection.status;
	      return $q.reject(rejection);
	    }
	};
    }]);
}]);app.service('PersonSvc',['$http','$q', function($http,$q) {
	var _findByName = {};
	this.findByName = function(name) {
	    if(_findByName[name] !== undefined)
		return _findByName[name];

	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/person/find',{params:{name:name},timeout:canceller.promise})
		.success(function(response){
		    asyncTask.resolve(response);
		})
		.error(function(reason){
		    _findByName[name] = undefined;
		    asyncTask.reject(reason);
		});
	    asyncTask.promise.abort=function(){
		canceller.resolve();
	    };
	    asyncTask.promise.success=function(cb){
		asyncTask.promise.then(cb,function(){});
		return asyncTask.promise;
	    };
	    asyncTask.promise.error=function(cb){
		asyncTask.promise.then(function(){},cb);
		return asyncTask.promise;
	    };
	    asyncTask.promise.finally=function(cb){
		asyncTask.promise.then(cb,cb);
		return asyncTask.promise;
	    };
	    _findByName[name] = asyncTask.promise;
	    return asyncTask.promise;
	};

	var _findById = {};
    this.findById = function(id) {
        if(_findById[name] !== undefined)
        return _findById[name];

        var asyncTask = $q.defer();
        var canceller=$q.defer();
        $http
        .get('/person/findById',{params:{id:id}, timeout:canceller.promise})
        .success(function(response){
            asyncTask.resolve(response);
        })
        .error(function(reason){
            _findById[id] = undefined;
            asyncTask.reject(reason);
        });
        asyncTask.promise.abort=function(){
        canceller.resolve();
        };
        asyncTask.promise.success=function(cb){
            asyncTask.promise.then(cb,function(){});
            return asyncTask.promise;
        };
        asyncTask.promise.error=function(cb){
            asyncTask.promise.then(function(){},cb);
            _findById[id] = undefined;
            return asyncTask.promise;
        };
        asyncTask.promise.finally=function(cb){
        asyncTask.promise.then(cb,cb);
            return asyncTask.promise;
        };
        _findById[id] = asyncTask.promise;
        return asyncTask.promise;
    };
	
	this.insert=function(name){
	    var chain=
		    $http.post('/person','',{params:{
			    name:name
			}
		    });
	    return chain;
	};
    }]);app
    .controller('PlaylistCtrl',['$scope', '$location','Favorites', 'YTPlayer',
function($scope, $location, Favorites, YTPlayer) {

    $scope.playlist = [];
    $scope.YTPlayer = YTPlayer;
    for (var k in Favorites.list) {
	$scope.playlist.push(Favorites.list[k]);
    }
    
    var save = function() {
	//TODO
	var nList = {};
	$scope.playlist.forEach(function(quote) {
	    nList[quote.id] = quote;
	});
	Favorites.list = nList;
	localStorage.setItem('Favorites', JSON.stringify(nList) );
	$scope.YTPlayer.init('playlist-video');
	$scope.YTPlayer.playQuotes($scope.playlist);
    };
    
    $scope.onQuoteClick=function(quote) {
	$location.path( '/quote/' + quote.id );
    };
    
    $scope.swapeUp = function($index) {
	var quote = $scope.playlist.splice($index, 1)[0];
	if ($index <= 0) {
	    $index = $scope.playlist.length + 1;
	}
	$scope.playlist.splice($index-1, 0, quote);
	save();
    };
    
    $scope.swapeDown = function($index) {
	var quote = $scope.playlist.splice($index, 1)[0];
	if ($index + 1 < $scope.playlist.length) {
	    $scope.playlist.splice($index+1, 0, quote);
	}
	save();
    };
    
    $scope.delete = function($index) {
	$scope.playlist.splice($index, 1);
	    save();
    };

}]);
app
    .controller('PlaylistMenuCtrl',['$scope', 'VideoSvc', 'ChannelSvc', 'PlaylistSvc',
      function($scope, VideoSvc, ChannelSvc, PlaylistSvc) {

        $scope.query = '';
        $scope.list = [];

        var lastReq = {abort: function(){}};
        $scope.onchange = function(name, quote) {
//            lastReq.abort();
            lastReq=
                PlaylistSvc.searchByName(name, quote.id)
                .success(function(response) {
                    $scope.list = response;
                });
        };

        $scope.newPlaylist = function(quote) {
           PlaylistSvc.insert($scope.query, [quote]);
        };

        $scope.addPlaylist = function(playlist, quote) {
            PlaylistSvc.update(playlist.id, playlist.name, playlist.quotes.append(quote) );
        };

}]);
app.service('PlaylistSvc',['$http','$q',function($http,$q) {
	
	this.list = function(offset,limit) {
	    return $http.get('/channel/list',{params:{offset:offset,limit:limit}});
	};
	
	var _searchByName = {};
	this.searchByName = function(name, quoteId) {
	    if(_searchByName[name] !== undefined)
		return _searchByName[name];
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/playlist', {params:{name:name, quoteId: quoteId},timeout:canceller.promise})
		.success(function(response){
		    asyncTask.resolve(response);
		})
		.error(function(reason){
		    _searchByName[name] = undefined;
		    asyncTask.reject(reason);
		});
	    asyncTask.promise.abort=function(){
		canceller.resolve();
	    };
	    asyncTask.promise.success=function(cb){
		asyncTask.promise.then(cb,function(){});
		return asyncTask.promise;
	    };
	    asyncTask.promise.error=function(cb){
		asyncTask.promise.then(function(){},cb);
		return asyncTask.promise;
	    };
	    asyncTask.promise.finally=function(cb){
		asyncTask.promise.then(cb,cb);
		return asyncTask.promise;
	    };
	    //TODO: memoize by quoteId & name now?
//	    _searchByName[name] = asyncTask.promise;
	    return asyncTask.promise;
	};
	
	this.insert = function(name, quotes) {
	    return $http.post('/playlist', {name: name, quotes: quotes} );
	};

	this.update = function(id, name, quotes) {
        return $http.put('/playlist', {name: name, quotes: quotes}, {params: {id: id}} );
    };
	
    }]);app.controller('QuoteEditorCtrl', ['$scope', 'PersonSvc', 'VideoSvc', 'QuoteSvc', '$interval',  function($scope, PersonSvc, VideoSvc, QuoteSvc, $interval) {


	$scope.authorName = '';
	$scope.suggestedAuthors = [];
	var selectedAuthorId = null;
	$scope.quote = '';
	var videoPlaybackRate = 1;
	$scope.onIncreasePlaybackRate = function() {
	    videoPlaybackRate *= 2;
	    $scope.YTPlayer.setPlaybackRate(videoPlaybackRate);
	};
	$scope.onPause = function() {
        if ($scope.YTPlayer.getPlayer().getPlayerState() === YT.PlayerState.PLAYING) {
            $scope.YTPlayer.getPlayer().pauseVideo();
        } else {
            $scope.YTPlayer.getPlayer().playVideo();
        }
    };
    $scope.rewind10 = function() {
//        $scope.YTPlayer.getPlayer().seekTo(time2sec($scope.startTime));
    };
	$scope.onDecreasePlaybackRate = function() {
	    videoPlaybackRate /= 2;
	    $scope.YTPlayer.setPlaybackRate(videoPlaybackRate);
	};
	$scope.startTime = '';
	$scope.endTime = '';

	var currentTime = 0;
	var updateCurrentTime = $interval(function() {
		if ($scope.isRecording) {
		   currentTime = parseInt($scope.YTPlayer.getPlayer().getCurrentTime());
		   if ($scope.YTPlayer.getPlayer().getPlayerState() === YT.PlayerState.PLAYING) {
		       $scope.endTime = parseInt(currentTime / 60) + ':' + (currentTime%60);
		   }
		}
	    }, 1000);
	$scope.$on('$destroy', function currentTimeDismissed() {
	    $interval.cancel(updateCurrentTime);
	});

	$scope.isRecording = false;
	$scope.record = function() {
	    currentTime = parseInt($scope.YTPlayer.getPlayer().getCurrentTime());
	    $scope.startTime = $scope.endTime = parseInt(currentTime / 60) + ':' + (currentTime%60);
	    $scope.isRecording = true;
	};

	$scope.showQuoteDialog = function() {
        $scope.isRecording = true;
        $scope.showEdit = !$scope.showEdit;
        currentTime = parseInt($scope.YTPlayer.getPlayer().getCurrentTime());
        $scope.startTime = $scope.endTime = parseInt(currentTime / 60) + ':' + (currentTime%60);
    };

	$scope.onSave = function() {
	    var personId = $scope.authorName;
	    if (selectedAuthorId !== null) {
		    personId = selectedAuthorId;
	    }

	    QuoteSvc.insert({
            videoId: $scope.YTPlayer.getPlayer().getVideoData().video_id,
            personId: personId,
            quote: $scope.quote.quote,
            start: time2sec($scope.startTime),
            end: time2sec($scope.endTime)
	    });
	};

	$scope.onStartTimeChange = function() {
	    $scope.startTime = formatTime($scope.startTime);
	    $scope.YTPlayer.getPlayer().seekTo(time2sec($scope.startTime));
	    $scope.isRecording = true;
	    $scope.YTPlayer.getPlayer().playVideo();
	};
	$scope.onEndTimeChange = function() {
	    $scope.isRecording = false;
	    $scope.endTime = formatTime($scope.endTime);
	    $scope.YTPlayer.getPlayer().seekTo(time2sec($scope.endTime));
	};

	$scope.onAuthorNameChange = function() {
	    PersonSvc
		    .findByName($scope.authorName)
		    .success(function(response) {
			$scope.suggestedAuthors = response;
		    });
	};
	$scope.onSelectAuthor = function(author) {
	    $scope.authorName = author.name;
	    selectedAuthorId = author.id;
	    $scope.suggestedAuthors = [];
	};

	function time2sec(time) {
	    time = time.split(':');
	    return parseInt(time[0] * 60) + parseInt(time[1]);
	}
	function formatTime(text) {
	    var digits = '';
	    var s = text.split(':').join('');

	    for (var i = 3; i >= 0; i--) {
		if (i === 1) {
		    digits += ':';
		}
		if (s.length-i > 0) {
		    if('0' <= s[s.length-i-1] && s[s.length-i-1] <= '9') {
			digits += s[s.length-i-1];
		    }
		} else {
		    digits += '0';
		}
	    }
	    return digits;
	}
}]);
app.controller('QuoteGridCtrl', ['$scope', '$location', 'QuoteSvc', 'VideoSvc', 'PersonSvc', '$rootScope',
    function($scope, $location, QuoteSvc, VideoSvc, PersonSvc, $rootScope) {
	
	var fadeIndex = 0;
	function animate() {
	    fadeIndex++;
	    fadeIndex%=2;
	    $($('#dash-field #overlay .fadeToggle').get(fadeIndex)).fadeIn(2000);
	    window.setTimeout(function() {
		$($('#dash-field #overlay .fadeToggle').get(fadeIndex)).fadeOut(2000);
		window.setTimeout(animate, 3000);
	    }, 2000);
	    
	}
	animate();
	
	var searchDTO = {
	    page: 0,
	    size:  10,
	    tags:   [],
	    channelIds: [],
	    start: 0,
	    end: new Date().getTime(),
	    personIds: []
	};
	$scope.getChannelLogo = function(channelId) {
	    VideoSvc.getChannelData(channelId);
	};
	var offsetIndexToIncreament = 0;
	var page = 10;
	function searchCallback(response) {
	    angular.forEach(response, function(quote, i) {

		    VideoSvc.getChannelId(quote.video.id).success(function(response) {
			quote.thumbnail = response.items[0].snippet.thumbnails.high.url;
			VideoSvc.getChannelData(response.items[0].snippet.channelId).success(function(data) {
			    if (data.items.length === 0 ) {
				console.error('No thumbnails for channelId#', response.items[0].snippet.channelId);
			    } else {
				quote.logo = data.items[0].snippet.thumbnails.high.url;
				$scope.items.push(quote);
			    }
			});
		    });

		});
	    if (response.length > 0) {
		    searchDTO.page++;
	    }
	    isBusy = false;
	}
	function loadMore() {
	    if (isBusy) return;
	    
	    isBusy = true;
	    QuoteSvc.search(searchDTO).success(searchCallback);
	}
	
	$scope.totalItems = 0;
	$scope.pageItems = 20;
	$scope.items = [];
	$scope.selected = [];
	
	var hasNext = true;
	var isBusy = false;
	
	var callback = function(response) {
		
		$scope.totalItems = response.total;

		if(response.length==0)
		{
		    hasNext = false;
		    return;
		} else
		    hasNext = true;
		angular.forEach(response.data, function(quote, i) {

		    VideoSvc.getChannelId(quote.videoId).success(function(response) {
			quote.thumbnail = response.items[0].snippet.thumbnails.high.url;
			VideoSvc.getChannelData(response.items[0].snippet.channelId).success(function(data){
			    quote.logo = data.items[0].snippet.thumbnails.high.url;
			    $scope.items.push(quote);
			});
		    });

		});
		isBusy = false;
	};
	
	

	$scope.onSelectedChange = function() {

	};
	var searchObj = {
	    currentPage: 0,
	    pageItems: $scope.pageItems,
	    filterByFields: {},
	    mandatoryFilters: {}
	};
	$scope.orderByReverse = false;
	$scope.isGlobal = true;
	$scope.query = function(currentPage, pageItems, filterBy, filterByFields, orderBy, orderByReverse) {
		var isGlobal = false;
		if(filterBy!==null && filterBy!==undefined && filterBy.length>0)
			isGlobal=true;
		searchObj = {
			currentPage:currentPage,
			pageItems:pageItems,
			orderBy:orderBy
		};
		if(isGlobal)
			searchObj.filterByFields = {
                
                personId: filterBy,
                quote: filterBy
			};
		else
			searchObj.filterByFields = {
				
                personId: filterByFields['personId'],
                quote: filterByFields['quote']
			};
		//TODO: searchObj.mandatoryFilters = {};
		$scope.orderByReverse = orderByReverse;
		$scope.isGlobal = isGlobal;
		$scope.items = [];
		isBusy = true;
		QuoteSvc.trNgGrid(searchObj,orderByReverse,isGlobal).success(callback);
	};


	$scope.channelData = {};
	function updateChannelData() {
    	$scope.channelData = {};
    	if (!$location.search().channelIds) return;
	    var channelIds = $location.search().channelIds.split(',');
	    angular.forEach(channelIds, function(channelId) {
            VideoSvc.getChannelData(channelId)
                .success(function(response) {
                    response.thumbnail = response.items[0].snippet.thumbnails.default.url;
                    $scope.channelData[channelId] = response;
                });
        });
	}
	updateChannelData();

	$scope.authorsData = [];
    function updateAuthorsData() {
        $scope.authorsData = [];
        if (!$location.search().personId) return;
        var personIds = $location.search().personId.split(',');
        angular.forEach(personIds, function(personId) {
            PersonSvc.findById(personId).success(function(response) {
                $scope.authorsData.push(response.name);
            });
        });
    }
    updateAuthorsData();

	$rootScope.$on('QuoteGridCtrl.query', function (event, tags, channelIds, personIds, start, end) {
	    searchDTO = {
            page: 0,
            size:  10,
            tags:   tags,
            channelIds: channelIds,
            start: start,
            end: end,
            personIds: personIds
        };
	    $scope.items = [];
	    if (channelIds && channelIds.length>0) {
	        updateChannelData();
	    }
	    if (personIds && personIds.length>0) {
	        updateAuthorsData();
	    }
	    if (tags && tags.length>0) {
	    }
	    QuoteSvc.search(searchDTO).success(searchCallback);
	});
	
	var init = function() {
		var tmp=
			$('<div>')
			.css('top','0px')
			.css('visibility','hidden')
			.css('height','100%')
			.appendTo('body');
		var h = window.screen.height || tmp.height();
			tmp.css('display','none').remove();
		$(document).scroll(function() {

			var H=$(document).height()-100;
			var s=$('body').scrollTop();
			if(s+h>=H && !isBusy)
			    loadMore();
		});
	};
	init();
	isBusy = true;
	QuoteSvc.search(searchDTO).success(searchCallback);
}]);
app.controller('QuoteReactionCtrl', ['$scope', '$routeParams', 'ReactionSvc', function($scope, $routeParams, ReactionSvc) {
    $scope.selectReaction = function(reaction) {
	ReactionSvc
	    .insert($routeParams.quoteId, reaction)
	    .success(function(response) {
		updateReactions();
	    });
    };
    $scope.reactions = [];
    function updateReactions() {
        if (!$routeParams.quoteId) return;
        ReactionSvc
            .findByQuoteId($routeParams.quoteId)
            .success(function(response) {
            console.log(response);
            //TODO:
                $scope.reactions = {};
            angular.forEach(response, function(reaction) {
              if ($scope.reactions[reaction.reaction] === undefined) {
                $scope.reactions[reaction.reaction] = [reaction];
              } else {
                $scope.reactions[reaction.reaction].push(reaction);
              }
            });
            console.log('reactions:',reaction);
            });
    }
    updateReactions();
}]);app.service('QuoteSvc',['$http','$q', function($http,$q){
	/*
	 {
		offsets: {
		    tag: 0,
		    video: 0,
		    person: 0
		},
		limit:  limit,
		tags:   tags,
		channelIds: channelIds,
		start: start,
		end: end,
		personIds: personIds
	}
	 */
	this.search = function(searchDTO) {
	    return $http.post('/Quote/search', searchDTO);
	};
	this.trNgGrid = function(searchObj, isASC, isGlobal) {
	    if(searchObj.mandatoryFilters===undefined) {
		searchObj.mandatoryFilters={};
	    }

	    var chain=
		    $http
			.post('/Quote/trNgGrid',searchObj,{params:{isASC:isASC,isGlobal:isGlobal}});
	    return chain;
	};
	this.insert=function(quote){
	    var chain=
		    $http.post('/Quote/insert', quote);
	    return chain;
	};
	this.count = function() {
	    var chain=
		$http.get('/Quote/count');
	    return chain;
	};
	this.list=function(offset,limit){
	    var chain=
		$http.get('/Quote/list',{params:{offset:offset,limit:limit}});
	    return chain;
	};
	var _findById = {};
	this.findById=function(quoteId){
	    if(_findById[quoteId] !== undefined)
		return _findById[quoteId];
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		$http.get('/Quote?id='+quoteId,{timeout:canceller.promise})
		.success(function(response){
		    asyncTask.resolve(response);
		})
		.error(function(reason){
		    _findById[quoteId] = undefined;
		    asyncTask.reject(reason);
		});
	    asyncTask.promise.abort=function(){
		canceller.resolve();
	    };
	    asyncTask.promise.success=function(cb){
		asyncTask.promise.then(cb,function(){});
		return asyncTask.promise;
	    };
	    asyncTask.promise.error=function(cb){
		asyncTask.promise.then(function(){},cb);
		return asyncTask.promise;
	    };
	    asyncTask.promise.finally=function(cb){
		asyncTask.promise.then(cb,cb);
		return asyncTask.promise;
	    };
	    return _findById[quoteId] = asyncTask.promise;
	};
    }]);app.service('ReactionSvc',['$http','$q',function($http, $q) {
	
	this.list = function(offset,limit) {
	    return $http.get('/channel/list',{params:{offset:offset,limit:limit}});
	};
	
	var _findByQuoteId = {};
	this.findByQuoteId = function(quoteId) {
	    if(_findByQuoteId[quoteId] !== undefined)
		return _findByQuoteId[quoteId];
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/reaction/findByQuoteId', {params:{quoteId:quoteId},timeout:canceller.promise})
		.success(function(response){
		    asyncTask.resolve(response);
		})
		.error(function(reason){
		    _findByQuoteId[quoteId] = undefined;
		    asyncTask.reject(reason);
		});
	    asyncTask.promise.abort=function(){
		canceller.resolve();
	    };
	    asyncTask.promise.success=function(cb){
		asyncTask.promise.then(cb,function(){});
		return asyncTask.promise;
	    };
	    asyncTask.promise.error=function(cb){
		asyncTask.promise.then(function(){},cb);
		return asyncTask.promise;
	    };
	    asyncTask.promise.finally=function(cb){
		asyncTask.promise.then(cb,cb);
		return asyncTask.promise;
	    };
	    return _findByQuoteId[quoteId] = asyncTask.promise;
	};
	
	this.insert = function(quoteId, reaction) {
	    return $http.post('/reaction', {}, {params: {
		    reaction: reaction,
		    quoteId: quoteId
	    }});
	};
	
    }]);app.service('ResponseDialog', [function(){
    this.statusText = '';
    this.status = 0;
    this.config = {}; // in case of starting new request
    var _this = this;
    this.isVisible = false;
    this.show = function() {
        _this.isVisible = true;
    };
}]);

app.config(['$httpProvider', function($httpProvider) {
	
    $httpProvider.interceptors.push(['$q','ResponseDialog', function($q, ResponseDialog) {
	var self={};
	return self={
	    count:0,
	    // optional method
	    'request': function(config) {
	      return config;
	    },

	    // optional method
	   'requestError': function(rejection) {
	      // do something on error
//	      ResponseDialog.message = rejection.config.
	      //TODO:
	      ResponseDialog.statusText = rejection.statusText;
	      ResponseDialog.status = rejection.status;
	      ResponseDialog.config = rejection.config;
	      ResponseDialog.show();
	      return $q.reject(rejection);
	    },



	    // optional method
	    'response': function(response) {
	      // do something on success
//	      ResponseDialog.statusText = response.statusText;
//	      ResponseDialog.status = response.status;
//	      ResponseDialog.config = response.config;
//	      ResponseDialog.show = true;
	      return response;
	    },

	    // optional method
	   'responseError': function(rejection) {
	       console.log(rejection);
	       ResponseDialog.statusText = rejection.statusText;
	       ResponseDialog.status = rejection.status;
	       ResponseDialog.config = rejection.config;
	       var ignoredPath = {};
	       ignoredPath['/person/find'] = 
	       ignoredPath['/tagName/searchByTag'] =
	       ignoredPath['/channel/searchByName'] = true;
	       if (!ignoredPath[rejection.config.url]) {
		    ResponseDialog.show();
	       }
	      return $q.reject(rejection);
	    }
	};
    }]);
}]);app.controller('SearchCtrl', ['$scope', '$location', 'TagSvc', 'TagNameSvc', 'PersonSvc', 'ChannelSvc', 'VideoSvc',
    function($scope, $location, TagSvc, TagNameSvc, PersonSvc, ChannelSvc, VideoSvc) {
		
	$scope.field = $location.search().query;
	$scope.result = [];
	$scope.selected = {
	    people:{},
	    channels: {},
	    tags:{}
	};
	
	$scope.tags = [];
	var _tags = {abort: function(){}};
	var queryTagName = function(tagName) {
	    _tags.abort();
	    _tags = 
		TagNameSvc.searchByTag(tagName).success(function(tagNames) {
		    $scope.tags = tagNames;
		});
	};
	
	$scope.people = [];
	var _people = {abort: function(){}};
	var queryPeople = function(name) {
	    _people.abort();
	    _people = 
		PersonSvc.findByName(name).success(function(people) {
		    $scope.people = people;
		});
	};
	
	$scope.channels = [];
	var _channels = {abort: function(){}};
	var queryChannels = function(channelName, offset, limit) {
	    _channels.abort();
	    _channels =
		ChannelSvc.searchByName(channelName, offset, limit).success(function(channels) {
		    $scope.channels = [];
		    angular.forEach(channels, function(channel) {
			VideoSvc
			    .getChannelData(channel.id)
			    .success(function(response) {
				channel.logo = response.items[0].snippet.thumbnails.default.url;
				$scope.channels.push(channel);
			    });
			
		    });
		});
	};
	
	
	$scope.query = function() {
	    if($scope.field.length<=0) return;

	    queryChannels($scope.field);
	    queryTagName($scope.field);
	    queryPeople($scope.field);
	};
	
	$scope.selectTag = function(tag) {
	    if($scope.selected.tags[tag] === true)
		$scope.selected.tags[tag] = false;
	    else $scope.selected.tags[tag] = true;
	    $scope.search();
	};
	$scope.selectChannel = function(channelId) {
	    if($scope.selected.channels[channelId] === true)
		$scope.selected.channels[channelId] = false;
	    else $scope.selected.channels[channelId] = true;
	    $scope.search();
	};
	
	
	$scope.selectPerson = function(person) {
	    if($scope.selected.people[person] === true)
		$scope.selected.people[person] = false;
	    else $scope.selected.people[person] = true;
	    $scope.search();
	};
	$scope.search = function() {
	    // TODO: #?tags=..&people=..
//	    console.log($('#startTime').datepicker('getDate').getTime());
//	    console.log($('#endTime').datepicker('getDate').getTime());
	    var tags=[], personId=[], channelIds = [];
	    if ($location.search().channelIds && $location.search().channelIds.split) {
            channelIds = $location.search().channelIds.split(',');
        }
        if ($location.search().personId && $location.search().personId.split) {
            personId = $location.search().personId.split(',');
        }
	    angular.forEach($scope.selected.tags, function(isSelected,tag) {
		if (isSelected) {
		    tags.push(tag);
		}
	    });
	    angular.forEach($scope.selected.people, function(isSelected,person) {
		if (isSelected) {
		    personId.push(person);
		}
	    });
	    angular.forEach($scope.selected.channels, function(isSelected, channelId) {
		if (isSelected) {
		    channelIds.push(channelId);
		}
	    });
	    //TODO: start/end time?
	    console.log($location.search().channelIds);

	    var startTime = 0;
        if( $('#startTime').datepicker('getDate')) {
            startTime = $('#startTime').datepicker('getDate').getTime();
        }

        var endTime = new Date().getTime();
        if( $('#endTime').datepicker('getDate')) {
            endTime = $('#endTime').datepicker('getDate').getTime();
        }
	    $location
	        .search('channelIds', channelIds.join(',') )
	        .search('personId', personId.join(',') )
	        .search('startTime', startTime)
	        .search('endTime', endTime)
//	        .search('query', $scope.field)
	        ;
	    $scope.$emit('QuoteGridCtrl.query', tags, channelIds, personId, startTime, endTime );
	};
	$('input#query').focus();
			
}]);app
    .controller('SettingsCtrl',['$scope','QuoteSvc','TagSvc', 'ChannelSvc','VideoSvc',
function($scope,QuoteSvc,TagSvc, ChannelSvc, VideoSvc) {
	$scope.downloaded = 0;
	$scope.$parent.show = true;
	$scope.exportProgress = 0;
	
	$scope.export=function(){
	    $scope.$parent.click();
	    $scope.exportProgress = 0;
	    QuoteSvc.count().success(function(count){
		var exported = [];
		var total = parseInt(count);
		var page = 10;
		var load = function(o) {
		    $scope.exportProgress = parseInt( o*100 / total );
		    if(o >= total)
			Base64.download(JSON.stringify(exported),'quotes.json');
		    else
			QuoteSvc.list(o, page).success(function(response){
			    angular.forEach(response,function(quote,i){
				TagSvc.findByQuoteId(quote.id).success(function(tags){
				    quote.tags=tags;
				    exported.push(quote);

				})
				.finally(function(){
				    if(i === response.length-1) load(o+1);
				});
				
			    });
			})
		};
		load(0);
	    });
	    
	};
	
	$scope.exportCSV=function(){
	    $scope.$parent.click();
	    $scope.exportProgress = 0;
	    QuoteSvc.count().success(function(count){
		var exported = 'quote , personId , videoId , start , end , tags , youtube \n';
		var total = parseInt(count);
		var page = 10;
		var load = function(o) {
		    $scope.exportProgress = parseInt( o*100 / total );
		    if(o >= total)
			Base64.download(exported,'quotes.csv');
		    else
			QuoteSvc.list(o,Math.min(total-o,page)).success(function(response){
			    angular.forEach(response,function(quote,i){
				
				TagSvc.findByQuoteId(quote.key).success(function(tags){
				    
				    var tmp = '';
				    angular.forEach(tags,function(tag){
					tmp += ' #'+ tag.tag;
				    });
				    
				    exported += ''+quote.quote+' , '
					    + quote.personId +' , '
					    +quote.videoId+' , '
					    +parseInt(quote.start)+' , '
					    +parseInt(quote.end)+' , '
					    +tmp+' , '
					    +'https://youtu.be/'+quote.videoId+'?t='+parseInt(quote.start)+'s \n';

				})
				.finally(function(){
				    if(i === response.length-1) load(o+page);
				});
				
			    });
		    })
		};
		load(0);
	    });
	    
	};
	
	$scope.insertChannelByVideoURL = function(videoURL) {
	    var videoId = $scope.videoURL.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?)(?:ebc=[\w|\s|\w|-]*\&v=|v=|\/)([^\s]+)+/);
	    if(videoId !== null) {
		VideoSvc.getChannelId(videoId[1]).success(function(response) {
		    ChannelSvc.insert(response.items[0].snippet.channelId);
		});
	    }
	};
    }]);$(document).scroll(function(e) {
	var t = $(document).scrollTop();
	var sel = -1;
	$('.section').each(function(i, section) {
		if($(section).offset().top < t) {
			sel = i;
		}
	});
	//if(sel<0) return;

	$('.stickable').each(function(i, stickable) {
		if(i==sel) $(stickable).addClass('stick');
		else $(stickable).removeClass('stick');
	});
});
app.service('TagNameSvc',['$http','$q', 
    function($http, $q){
	var _searchByTag = {};
	this.searchByTag = function(tag) {
	    var asyncTask = $q.defer();
	    asyncTask.promise.abort=function(){};
	    if(_searchByTag[tag] !== undefined)
		return _searchByTag[tag];
	    else {
		var canceller=$q.defer();
		$http
		    .get('/tagName/searchByTag', {params:{tag:tag},timeout:canceller.promise})
		    .success(function(response) {
			asyncTask.resolve(response);
		    })
		    .error(function(reason) {
			_searchByTag[tag] = undefined;
			asyncTask.reject(reason);
		    });
		asyncTask.promise.abort = function() {
		    canceller.resolve();
		};
	    }
	    asyncTask.promise.success = function(cb) {
		asyncTask.promise.then(cb,function(){});
		return asyncTask.promise;
	    };
	    asyncTask.promise.error = function(cb) {
		asyncTask.promise.then(function(){},cb);
		return asyncTask.promise;
	    };
	    asyncTask.promise.finally = function(cb) {
		asyncTask.promise.then(cb,cb);
		return asyncTask.promise;
	    };
	    _searchByTag[tag] = asyncTask.promise;
	    return asyncTask.promise;
	};

    }]);app.service('TagSvc',['$http','$q', function($http,$q){
	var _find = {};
	this.find=function(tag) {
	    var asyncTask = $q.defer();
	    asyncTask.promise.abort=function(){};
	    if(_find[tag] !== undefined)
		asyncTask.resolve(_find[tag]);
	    else {
		var canceller=$q.defer();
		$http
		    .get('/tag/find',{params:{tag:tag},timeout:canceller.promise})
		    .success(function(response){
			asyncTask.resolve(response);
		    })
		    .error(function(reason){
			_find[tag] = undefined;
			asyncTask.reject(reason);
		    });
		asyncTask.promise.abort=function(){
		    canceller.resolve();
		};
	    }
	    asyncTask.promise.success=function(cb){
		asyncTask.promise.then(cb,function(){});
		return asyncTask.promise;
	    };
	    asyncTask.promise.error=function(cb){
		asyncTask.promise.then(function(){},cb);
		return asyncTask.promise;
	    };
	    asyncTask.promise.finally=function(cb){
		asyncTask.promise.then(cb,cb);
		return asyncTask.promise;
	    };
	    return asyncTask.promise;
	};
	
	var _findQuoteIdByTag = {};
	this.findQuoteIdByTag=function(tag) {
	    var asyncTask = $q.defer();
	    asyncTask.promise.abort=function(){};
	    if(_findQuoteIdByTag[tag] !== undefined)
		asyncTask.resolve(_find[tag]);
	    else {
		var canceller=$q.defer();
		//TODO:
		$http
		    .get('/tag/find',{params:{tag:tag},timeout:canceller.promise})
		    .success(function(response){
			asyncTask.resolve(response);
		    })
		    .error(function(reason){
			_findQuoteIdByTag[tag] = undefined;
			asyncTask.reject(reason);
		    });
		asyncTask.promise.abort=function(){
		    canceller.resolve();
		};
	    }
	    asyncTask.promise.success=function(cb){
		asyncTask.promise.then(cb,function(){});
		return asyncTask.promise;
	    };
	    asyncTask.promise.error=function(cb){
		asyncTask.promise.then(function(){},cb);
		return asyncTask.promise;
	    };
	    asyncTask.promise.finally=function(cb){
		asyncTask.promise.then(cb,cb);
		return asyncTask.promise;
	    };
	    return asyncTask.promise;
	};
	
	
	this.insert=function(tag,quoteId){
	    var chain=
		$http
		    .post('/tag/insert','',{params:{tag:tag,quoteId:quoteId}});
	    return chain;
	};
	
	var _findByQuoteId = {};
	this.findByQuoteId=function(quoteId){
	    if(_findByQuoteId[quoteId] !== undefined)
		return _findByQuoteId[quoteId];
	    
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/tag/findByQuoteId',{params:{quoteId:quoteId},timeout:canceller.promise})
		.success(function(response){
		    asyncTask.resolve(response);
		})
		.error(function(reason){
		    _findByQuoteId[quoteId] = undefined;
		    asyncTask.reject(reason);
		});
	    asyncTask.promise.abort=function(){
		canceller.resolve();
	    };
	    asyncTask.promise.success=function(cb){
		asyncTask.promise.then(cb,function(){});
		return asyncTask.promise;
	    };
	    asyncTask.promise.error=function(cb){
		asyncTask.promise.then(function(){},cb);
		return asyncTask.promise;
	    };
	    asyncTask.promise.finally=function(cb){
		asyncTask.promise.then(cb,cb);
		return asyncTask.promise;
	    };
	    return _findByQuoteId[quoteId] = asyncTask.promise;
	};
    }]);app.run(['$rootScope', '$http', function($rootScope, $http) {

    $http.get('/locale/en.json')
	.success(function(translation) {
	    $rootScope.translation = translation;
    });
    
}]);
app
    .service('UserSvc',['$http',function($http) {

        this.getUser = function() {
            var chain=
                $http.get('/user');
            return chain;
        };

        this.getPicture = function() {
            var chain=
                $http.get('/user/picture');
            return chain;
        };
    }]);app
    .controller('videoCtrl',
	    ['$scope', '$location', 'QuoteSvc','TagSvc','PersonSvc','VideoSvc','ChannelSvc','$timeout','$routeParams','YTPlayer','Favorites', 'WatchLater', 'ReactionSvc',
	    function(sp, $location, QuoteSvc,TagSvc,PersonSvc,VideoSvc,ChannelSvc,to,$routeParams, YTPlayer, Favorites, WatchLater, ReactionSvc){

    sp.YTPlayer = YTPlayer;
    sp.YTPlayer.init('video');

    sp.openQuote = function(quote) {
	$location.path('/quote/' + quote.id);
    };

    sp.tagger=(function(TagSvc){
	var self={};
	return self={
	    tagNameQuery:'',
	    tagName:[],
	    selectedTags:{},
	    lastReq:{abort:function(){}},
	    findByTagName:function(tagName){
		self.lastReq.abort();
		self.lastReq=
		    TagSvc.find(self.tagNameQuery)
			.success(function(response){
			    self.tagNames=response;
			    if(response.length==0)
				self.tagNames=[{key:{name:self.tagNameQuery}}];
			});
	    },
	    selectTag:function(tag){
//				    if(self.selectedTags[tag.key.name]!==true)
//				    {
//					self.selectedTags[tag.key.name]=true;
		    TagSvc.insert(tag.key.name,YTPlayer.playlist[0].key);
//				    }
		//TODO: remove tag
//				    else if(self.selectedTags[tag.key.name]!==undefined)
//					self.selectedTags[tag.key.name]=false;
	    }
	};
    }(TagSvc));
    sp.Favorites = Favorites;
    sp.WatchLater = WatchLater;

    sp.quotes = [];
    function getVideoQuotes(video) {
	angular.forEach(video.quotes, function(quoteId) {
	    QuoteSvc
		.findById(quoteId)
		.success(function(quote) {
		    sp.quotes.push(quote);
		});
	});
    }

    sp.$routeParams = $routeParams;
    if($routeParams.quoteId !== undefined) {
	QuoteSvc.findById($routeParams.quoteId)
	    .success(function(quote) {

		TagSvc
		    .findByQuoteId($routeParams.quoteId)
		    .success(function(tags) {
			quote.tags = tags;
			sp.quote = quote;
			YTPlayer.playQuotes([quote]);
		    });

		VideoSvc
		    .findById(quote.video.id)
		    .success(getVideoQuotes);
	    });
    } else if($routeParams.videoId !== undefined) {
	VideoSvc.getChannelId($routeParams.videoId)
	    .success(function(response){
console.log('getChannelId:', response);
		ChannelSvc.findByChannelId(response.items[0].snippet.channelId)
		.success(function() {
		    //TODO: check response?
		    YTPlayer.playlist=[];
		    YTPlayer.load($routeParams.videoId);
		});

	    });
    } else if($routeParams.story !== undefined) {
	YTPlayer.playQuotes($routeParams.story.split(','));
    }
}]);
app.service('VideoSvc',['$http', '$q', 'YTKey', function($http, $q, YTKey){
	var _findById = {};
	this.findById=function(videoId){
	    if(_findById[videoId] !== undefined)
		return _findById[videoId];
	    
	    var asyncTask = $q.defer();
	    var canceller=$q.defer();
	    $http
		.get('/api/video',{params:{id:videoId},timeout:canceller.promise})
		.success(function(response){
		    asyncTask.resolve(response);
		})
		.error(function(reason){
		    _findById[videoId] = undefined;
		    asyncTask.reject(reason);
		});
	    asyncTask.promise.abort=function(){
		canceller.resolve();
	    };
	    asyncTask.promise.success=function(cb){
		asyncTask.promise.then(cb,function(){});
		return asyncTask.promise;
	    };
	    asyncTask.promise.error=function(cb){
		asyncTask.promise.then(function(){},cb);
		return asyncTask.promise;
	    };
	    asyncTask.promise.finally=function(cb){
		asyncTask.promise.then(cb,cb);
		return asyncTask.promise;
	    };
	    return _findById[videoId] = asyncTask.promise;
	};
	
	var _getChannelData = {};
	this.getChannelData=function(channelId){
	    if(_getChannelData[channelId] !== undefined)
		return _getChannelData[channelId];
	    
	    var asyncTask = $q.defer();
	    var chain=
		    $http.get('https://www.googleapis.com/youtube/v3/channels?part=snippet&key='+YTKey+'&id='+channelId)
		    .success(function(response){
			asyncTask.resolve(response);
		    })
		    .error(function(reason){
			_getChannelData[channelId] = undefined;
			asyncTask.reject(reason);
		    });
	    asyncTask.promise.success=function(cb){
		asyncTask.promise.then(cb,function(){});
		return asyncTask.promise;
	    };
	    asyncTask.promise.error=function(cb){
		asyncTask.promise.then(function(){},cb);
		return asyncTask.promise;
	    };
	    asyncTask.promise.finally=function(cb){
		asyncTask.promise.then(cb,cb);
		return asyncTask.promise;
	    };
	    
	    _getChannelData[channelId] = asyncTask.promise;
	    
	    return asyncTask.promise;
	};
	
	var _getChannelId = {};
	this.getChannelId=function(videoId){
	    if(_getChannelId[videoId] !== undefined)
		return _getChannelId[videoId];
	    var asyncTask = $q.defer();
	    
	    var chain=
		    $http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&key='+YTKey+'&id='+videoId)
		    .success(function(response){
			asyncTask.resolve(response);
		    })
		    .error(function(reason){
			_getChannelId[videoId] = undefined;
			asyncTask.reject(reason);
		    });
	    asyncTask.promise.success=function(cb){
		asyncTask.promise.then(cb,function(){});
		return asyncTask.promise;
	    };
	    asyncTask.promise.error=function(cb){
		asyncTask.promise.then(function(){},cb);
		return asyncTask.promise;
	    };
	    asyncTask.promise.finally=function(cb){
		asyncTask.promise.then(cb,cb);
		return asyncTask.promise;
	    };
	    
	    _getChannelId[videoId] = asyncTask.promise;
	    return _getChannelId[videoId];
	};
	
	// see https://developers.google.com/youtube/v3/docs/search/list#parameters
	this.findByChannelIdAndTime = function(channelId, start, end, q, pageToken) {
	    return $http.get('https://www.googleapis.com/youtube/v3/search', { params: {
			    key: YTKey,
			    part: 'snippet',
			    channelId: channelId,
			    publishedAfter: new Date(start).toISOString(),
			    publishedBefore: new Date(end).toISOString(),
			    q: q,
			    pageToken: pageToken
		    }});
    };
}]);app.service('WatchLater', function() {
    var _this = this;
    
    this.list = {};
    
    if( localStorage.getItem('WatchLater') !== undefined && localStorage.getItem('WatchLater') !== null)
	this.list = JSON.parse( localStorage.getItem('WatchLater') );
    var save = function(){
	localStorage.setItem('WatchLater', JSON.stringify(_this.list) );
    };
    
    this.add = function(videoId) {
	_this.list[videoId] = videoId;
	save();
    };
    
    this.isListed = function(videoId) {
	return (_this.list[videoId] !== undefined && _this.list[videoId] !== null);
    };
    
    this.remove = function(videoId) {
	var nList = {};
	for(var i in _this.list)
	    if(i !== videoId)
		nList[i] = _this.list[i];
	_this.list = nList;
	save();
    };
    
});app
    .controller('WatchLaterCtrl',['$scope', '$location', 'WatchLater', 'VideoSvc',
    function($scope, $location, WatchLater, VideoSvc){
	$scope.WatchLater = WatchLater;
	
	$scope.videos = {};
	angular.forEach(WatchLater.list, function(obj, videoId) {
	    VideoSvc.getChannelId(videoId).success(function(videoData) {
		$scope.videos[videoId] = {
		    thumbnail: videoData.items[0].snippet.thumbnails.high.url,
		    title: videoData.items[0].snippet.title
		};
	    });
	});
	
	$scope.onclick = function(videoId) {
	    $location.path('#/new/' + videoId);
	};
	
}]);app.factory('YTPlayer', ['$timeout', YTPlayer]);

function YTPlayer(to) {
    
    var _this = this;
    var playlist = [];
    var currentPlayingIndex = 0;
    var elementId = 'video';
    var player = null;
    var needProgressUpdate = false;
    var _onStateChange = function(){};
	
    return {
	init: init,
	load: load,
	playQuotes: playQuotes,
	onload: onload,
	getPlayer: getPlayer,
	setPlaybackRate: setPlaybackRate,
	getCurrentTime: getCurrentTime,
	getDuration: getDuration
    };
	    
	    var _then = function() {};
	    function then(cb) {
		_then = then;
	    }
	    
	    function init(id) {
		elementId = id;
		return _this;
	    }
	    
	    function getVideoId() {
		return videoId;// player.getVideoData().video_id;
	    }
	    function getPlayer() {
		return player;
	    }
	    function setPlaybackRate(x) {
		player.setPlaybackRate(x);
	    }
	    function getCurrentTime() {
//		console.log(player);
		this.getPlayer().getCurrentTime();
	    }
	    function getDuration() {
		player.getDuration();
	    }
	    
	    function playQuotes(quotes) {
		
		playlist = quotes;
		currentPlayingIndex=0;
		load(quotes[0].video.id,quotes[0].start,quotes[0].end);
	    };
	    
	    var onReady = function(event) {};
	    var onStateChange = function(event) {
		if(event.data===YT.PlayerState.PLAYING && needProgressUpdate)
		{
		    needProgressUpdate=false;
		    duration = player.getDuration();
		}
		if(event.data===YT.PlayerState.ENDED
			&& currentPlayingIndex+1 < playlist.length)
		{
			currentPlayingIndex++;
			load(
				playlist[currentPlayingIndex].videoId,
				playlist[currentPlayingIndex].start,
				playlist[currentPlayingIndex].end
			);
		}
	    };
	    var _onload = function(){};
	    function onload(Fn){
		if(Fn!==undefined) {
		    _onload = Fn;
		} else {
		    _onload();
		}
	    }
	    
	    function load(videoId, start, end) {
		    console.log('YTPlayer.load...', videoId, start, end);
		    needProgressUpdate=true;
		video.execAfterReady(function(){
		    to(function(){
			_onload();
		    });
		    console.log('YTPlayer.load', videoId, start, end);
		    var param={'autoplay': 1,'suggestedQuality': 'small','videoId': videoId,'suggestedQuality': 'small','origin':config.BASE_URL};
		    var playerVars={ 'autoplay': 1,'videoId': videoId,'suggestedQuality': 'small','origin':config.BASE_URL};
		    if((location.href.indexOf('#e=')>-1))
			    playerVars.end=param.endSeconds=parseInt(
				    location.href.substring(
				    location.href.indexOf('e=')+2,
				    location.href.indexOf('s=')) );
		    if((location.href.indexOf('s=')>-1))
			    playerVars.start=param.startSeconds=parseInt(
				    location.href.substring(
				    location.href.indexOf('s=')+2,
				    location.href.indexOf('v=')) );
		    if(start!==undefined)
			    playerVars.start=param.startSeconds=parseInt(start);
		    if(end!==undefined)
			    playerVars.end=param.endSeconds=parseInt(end);


		    if(player===null || player===undefined)
			    player=new YT.Player(elementId, {
				height: '390',
				width: '640',
				videoId: videoId,
				playerVars: playerVars,
				events: {
				  'onReady': onReady,
				  'onStateChange': onStateChange
				}
			    });
		    else
		    {
//			_this.player.loadVideoById(param);
			player = new YT.Player(elementId, {
				height: '390',
				width: '640',
				videoId: videoId,
				playerVars: playerVars,
				events: {
				  'onReady': onReady,
				  'onStateChange': onStateChange
				}
			    });
		    }
		});
	    }
	    
//	    return this;
    }
    
var video = {
    isReady:false,
    q:[],
    execAfterReady:function(x){
	if(x!==undefined) {
	    video.q.push(x);
	}
	if(video.isReady) {
	    while(video.q.length>0) {
		video.q.pop()();
	    }
	}
    }
};
function onYouTubeIframeAPIReady(){
	video.isReady = true;
	video.execAfterReady();
};