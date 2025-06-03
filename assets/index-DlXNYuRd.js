const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-D8Gq82cf.js","assets/Home-BEYAwVZc.css","assets/Tasks-CTck_cJO.js","assets/Tasks-De8fVDKG.css","assets/Folders-BExpUHz5.js","assets/Folders-CYRofmE6.css","assets/Dashboard-DE2jECF_.js","assets/Dashboard-D0cECVNP.css","assets/SignIn-DU8Lc8E9.js","assets/SignIn-vviFU_5i.css","assets/SignUp-CpJi64jA.js","assets/SignUp-CrEc0M8t.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Mm={exports:{}},wu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zT;function rI(){if(zT)return wu;zT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return wu.Fragment=e,wu.jsx=t,wu.jsxs=t,wu}var HT;function aI(){return HT||(HT=1,Mm.exports=rI()),Mm.exports}var re=aI(),Pm={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FT;function oI(){if(FT)return Ce;FT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=T&&D[T]||D["@@iterator"],typeof D=="function"?D:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,F={};function U(D,ee,le){this.props=D,this.context=ee,this.refs=F,this.updater=le||N}U.prototype.isReactComponent={},U.prototype.setState=function(D,ee){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ee,"setState")},U.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Y(){}Y.prototype=U.prototype;function W(D,ee,le){this.props=D,this.context=ee,this.refs=F,this.updater=le||N}var te=W.prototype=new Y;te.constructor=W,I(te,U.prototype),te.isPureReactComponent=!0;var oe=Array.isArray,ce={H:null,A:null,T:null,S:null,V:null},Te=Object.prototype.hasOwnProperty;function x(D,ee,le,se,me,Oe){return le=Oe.ref,{$$typeof:n,type:D,key:ee,ref:le!==void 0?le:null,props:Oe}}function R(D,ee){return x(D.type,ee,void 0,void 0,void 0,D.props)}function b(D){return typeof D=="object"&&D!==null&&D.$$typeof===n}function k(D){var ee={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(le){return ee[le]})}var P=/\/+/g;function V(D,ee){return typeof D=="object"&&D!==null&&D.key!=null?k(""+D.key):ee.toString(36)}function O(){}function kt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(O,O):(D.status="pending",D.then(function(ee){D.status==="pending"&&(D.status="fulfilled",D.value=ee)},function(ee){D.status==="pending"&&(D.status="rejected",D.reason=ee)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ct(D,ee,le,se,me){var Oe=typeof D;(Oe==="undefined"||Oe==="boolean")&&(D=null);var we=!1;if(D===null)we=!0;else switch(Oe){case"bigint":case"string":case"number":we=!0;break;case"object":switch(D.$$typeof){case n:case e:we=!0;break;case y:return we=D._init,ct(we(D._payload),ee,le,se,me)}}if(we)return me=me(D),we=se===""?"."+V(D,0):se,oe(me)?(le="",we!=null&&(le=we.replace(P,"$&/")+"/"),ct(me,ee,le,"",function(mi){return mi})):me!=null&&(b(me)&&(me=R(me,le+(me.key==null||D&&D.key===me.key?"":(""+me.key).replace(P,"$&/")+"/")+we)),ee.push(me)),1;we=0;var Ht=se===""?".":se+":";if(oe(D))for(var rt=0;rt<D.length;rt++)se=D[rt],Oe=Ht+V(se,rt),we+=ct(se,ee,le,Oe,me);else if(rt=S(D),typeof rt=="function")for(D=rt.call(D),rt=0;!(se=D.next()).done;)se=se.value,Oe=Ht+V(se,rt++),we+=ct(se,ee,le,Oe,me);else if(Oe==="object"){if(typeof D.then=="function")return ct(kt(D),ee,le,se,me);throw ee=String(D),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return we}function $(D,ee,le){if(D==null)return D;var se=[],me=0;return ct(D,se,"","",function(Oe){return ee.call(le,Oe,me++)}),se}function ie(D){if(D._status===-1){var ee=D._result;ee=ee(),ee.then(function(le){(D._status===0||D._status===-1)&&(D._status=1,D._result=le)},function(le){(D._status===0||D._status===-1)&&(D._status=2,D._result=le)}),D._status===-1&&(D._status=0,D._result=ee)}if(D._status===1)return D._result.default;throw D._result}var de=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Le(){}return Ce.Children={map:$,forEach:function(D,ee,le){$(D,function(){ee.apply(this,arguments)},le)},count:function(D){var ee=0;return $(D,function(){ee++}),ee},toArray:function(D){return $(D,function(ee){return ee})||[]},only:function(D){if(!b(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ce.Component=U,Ce.Fragment=t,Ce.Profiler=a,Ce.PureComponent=W,Ce.StrictMode=s,Ce.Suspense=p,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ce,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(D){return ce.H.useMemoCache(D)}},Ce.cache=function(D){return function(){return D.apply(null,arguments)}},Ce.cloneElement=function(D,ee,le){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var se=I({},D.props),me=D.key,Oe=void 0;if(ee!=null)for(we in ee.ref!==void 0&&(Oe=void 0),ee.key!==void 0&&(me=""+ee.key),ee)!Te.call(ee,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&ee.ref===void 0||(se[we]=ee[we]);var we=arguments.length-2;if(we===1)se.children=le;else if(1<we){for(var Ht=Array(we),rt=0;rt<we;rt++)Ht[rt]=arguments[rt+2];se.children=Ht}return x(D.type,me,void 0,void 0,Oe,se)},Ce.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},Ce.createElement=function(D,ee,le){var se,me={},Oe=null;if(ee!=null)for(se in ee.key!==void 0&&(Oe=""+ee.key),ee)Te.call(ee,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(me[se]=ee[se]);var we=arguments.length-2;if(we===1)me.children=le;else if(1<we){for(var Ht=Array(we),rt=0;rt<we;rt++)Ht[rt]=arguments[rt+2];me.children=Ht}if(D&&D.defaultProps)for(se in we=D.defaultProps,we)me[se]===void 0&&(me[se]=we[se]);return x(D,Oe,void 0,void 0,null,me)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(D){return{$$typeof:d,render:D}},Ce.isValidElement=b,Ce.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:ie}},Ce.memo=function(D,ee){return{$$typeof:g,type:D,compare:ee===void 0?null:ee}},Ce.startTransition=function(D){var ee=ce.T,le={};ce.T=le;try{var se=D(),me=ce.S;me!==null&&me(le,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(Le,de)}catch(Oe){de(Oe)}finally{ce.T=ee}},Ce.unstable_useCacheRefresh=function(){return ce.H.useCacheRefresh()},Ce.use=function(D){return ce.H.use(D)},Ce.useActionState=function(D,ee,le){return ce.H.useActionState(D,ee,le)},Ce.useCallback=function(D,ee){return ce.H.useCallback(D,ee)},Ce.useContext=function(D){return ce.H.useContext(D)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(D,ee){return ce.H.useDeferredValue(D,ee)},Ce.useEffect=function(D,ee,le){var se=ce.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(D,ee)},Ce.useId=function(){return ce.H.useId()},Ce.useImperativeHandle=function(D,ee,le){return ce.H.useImperativeHandle(D,ee,le)},Ce.useInsertionEffect=function(D,ee){return ce.H.useInsertionEffect(D,ee)},Ce.useLayoutEffect=function(D,ee){return ce.H.useLayoutEffect(D,ee)},Ce.useMemo=function(D,ee){return ce.H.useMemo(D,ee)},Ce.useOptimistic=function(D,ee){return ce.H.useOptimistic(D,ee)},Ce.useReducer=function(D,ee,le){return ce.H.useReducer(D,ee,le)},Ce.useRef=function(D){return ce.H.useRef(D)},Ce.useState=function(D){return ce.H.useState(D)},Ce.useSyncExternalStore=function(D,ee,le){return ce.H.useSyncExternalStore(D,ee,le)},Ce.useTransition=function(){return ce.H.useTransition()},Ce.version="19.1.0",Ce}var jT;function Jg(){return jT||(jT=1,Pm.exports=oI()),Pm.exports}var K=Jg(),Lm={exports:{}},Ru={},Vm={exports:{}},Um={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qT;function lI(){return qT||(qT=1,function(n){function e($,ie){var de=$.length;$.push(ie);e:for(;0<de;){var Le=de-1>>>1,D=$[Le];if(0<a(D,ie))$[Le]=ie,$[de]=D,de=Le;else break e}}function t($){return $.length===0?null:$[0]}function s($){if($.length===0)return null;var ie=$[0],de=$.pop();if(de!==ie){$[0]=de;e:for(var Le=0,D=$.length,ee=D>>>1;Le<ee;){var le=2*(Le+1)-1,se=$[le],me=le+1,Oe=$[me];if(0>a(se,de))me<D&&0>a(Oe,se)?($[Le]=Oe,$[me]=de,Le=me):($[Le]=se,$[le]=de,Le=le);else if(me<D&&0>a(Oe,de))$[Le]=Oe,$[me]=de,Le=me;else break e}}return ie}function a($,ie){var de=$.sortIndex-ie.sortIndex;return de!==0?de:$.id-ie.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],y=1,T=null,S=3,N=!1,I=!1,F=!1,U=!1,Y=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function oe($){for(var ie=t(g);ie!==null;){if(ie.callback===null)s(g);else if(ie.startTime<=$)s(g),ie.sortIndex=ie.expirationTime,e(p,ie);else break;ie=t(g)}}function ce($){if(F=!1,oe($),!I)if(t(p)!==null)I=!0,Te||(Te=!0,V());else{var ie=t(g);ie!==null&&ct(ce,ie.startTime-$)}}var Te=!1,x=-1,R=5,b=-1;function k(){return U?!0:!(n.unstable_now()-b<R)}function P(){if(U=!1,Te){var $=n.unstable_now();b=$;var ie=!0;try{e:{I=!1,F&&(F=!1,W(x),x=-1),N=!0;var de=S;try{t:{for(oe($),T=t(p);T!==null&&!(T.expirationTime>$&&k());){var Le=T.callback;if(typeof Le=="function"){T.callback=null,S=T.priorityLevel;var D=Le(T.expirationTime<=$);if($=n.unstable_now(),typeof D=="function"){T.callback=D,oe($),ie=!0;break t}T===t(p)&&s(p),oe($)}else s(p);T=t(p)}if(T!==null)ie=!0;else{var ee=t(g);ee!==null&&ct(ce,ee.startTime-$),ie=!1}}break e}finally{T=null,S=de,N=!1}ie=void 0}}finally{ie?V():Te=!1}}}var V;if(typeof te=="function")V=function(){te(P)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,kt=O.port2;O.port1.onmessage=P,V=function(){kt.postMessage(null)}}else V=function(){Y(P,0)};function ct($,ie){x=Y(function(){$(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function($){$.callback=null},n.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<$?Math.floor(1e3/$):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function($){switch(S){case 1:case 2:case 3:var ie=3;break;default:ie=S}var de=S;S=ie;try{return $()}finally{S=de}},n.unstable_requestPaint=function(){U=!0},n.unstable_runWithPriority=function($,ie){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var de=S;S=$;try{return ie()}finally{S=de}},n.unstable_scheduleCallback=function($,ie,de){var Le=n.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?Le+de:Le):de=Le,$){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=de+D,$={id:y++,callback:ie,priorityLevel:$,startTime:de,expirationTime:D,sortIndex:-1},de>Le?($.sortIndex=de,e(g,$),t(p)===null&&$===t(g)&&(F?(W(x),x=-1):F=!0,ct(ce,de-Le))):($.sortIndex=D,e(p,$),I||N||(I=!0,Te||(Te=!0,V()))),$},n.unstable_shouldYield=k,n.unstable_wrapCallback=function($){var ie=S;return function(){var de=S;S=ie;try{return $.apply(this,arguments)}finally{S=de}}}}(Um)),Um}var GT;function uI(){return GT||(GT=1,Vm.exports=lI()),Vm.exports}var Bm={exports:{}},ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KT;function cI(){if(KT)return ln;KT=1;var n=Jg();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ln.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},ln.flushSync=function(p){var g=c.T,y=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=y,s.d.f()}},ln.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},ln.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},ln.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,N=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:S,fetchPriority:N}):y==="script"&&s.d.X(p,{crossOrigin:T,integrity:S,fetchPriority:N,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ln.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},ln.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ln.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},ln.requestFormReset=function(p){s.d.r(p)},ln.unstable_batchedUpdates=function(p,g){return p(g)},ln.useFormState=function(p,g,y){return c.H.useFormState(p,g,y)},ln.useFormStatus=function(){return c.H.useHostTransitionStatus()},ln.version="19.1.0",ln}var YT;function hI(){if(YT)return Bm.exports;YT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Bm.exports=cI(),Bm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $T;function fI(){if($T)return Ru;$T=1;var n=uI(),e=Jg(),t=hI();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,A=f.child;A;){if(A===o){E=!0,o=f,u=m;break}if(A===u){E=!0,u=f,o=m;break}A=A.sibling}if(!E){for(A=m.child;A;){if(A===o){E=!0,o=m,u=f;break}if(A===u){E=!0,u=m,o=f;break}A=A.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),W=Symbol.for("react.consumer"),te=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function V(i){return i===null||typeof i!="object"?null:(i=P&&i[P]||i["@@iterator"],typeof i=="function"?i:null)}var O=Symbol.for("react.client.reference");function kt(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===O?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case I:return"Fragment";case U:return"Profiler";case F:return"StrictMode";case ce:return"Suspense";case Te:return"SuspenseList";case b:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case N:return"Portal";case te:return(i.displayName||"Context")+".Provider";case W:return(i._context.displayName||"Context")+".Consumer";case oe:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case x:return r=i.displayName||null,r!==null?r:kt(i.type)||"Memo";case R:r=i._payload,i=i._init;try{return kt(i(r))}catch{}}return null}var ct=Array.isArray,$=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},Le=[],D=-1;function ee(i){return{current:i}}function le(i){0>D||(i.current=Le[D],Le[D]=null,D--)}function se(i,r){D++,Le[D]=i.current,i.current=r}var me=ee(null),Oe=ee(null),we=ee(null),Ht=ee(null);function rt(i,r){switch(se(we,r),se(Oe,i),se(me,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?pT(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=pT(r),i=mT(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}le(me),se(me,i)}function mi(){le(me),le(Oe),le(we)}function Ds(i){i.memoizedState!==null&&se(Ht,i);var r=me.current,o=mT(r,i.type);r!==o&&(se(Oe,i),se(me,o))}function Gi(i){Oe.current===i&&(le(me),le(Oe)),Ht.current===i&&(le(Ht),vu._currentValue=de)}var Pr=Object.prototype.hasOwnProperty,Lr=n.unstable_scheduleCallback,Vr=n.unstable_cancelCallback,gl=n.unstable_shouldYield,Oc=n.unstable_requestPaint,Hn=n.unstable_now,Md=n.unstable_getCurrentPriorityLevel,_l=n.unstable_ImmediatePriority,Ha=n.unstable_UserBlockingPriority,Ur=n.unstable_NormalPriority,Pd=n.unstable_LowPriority,Fa=n.unstable_IdlePriority,yl=n.log,Dc=n.unstable_setDisableYieldValue,_t=null,We=null;function In(i){if(typeof yl=="function"&&Dc(i),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(_t,i)}catch{}}var an=Math.clz32?Math.clz32:Br,kc=Math.log,Ld=Math.LN2;function Br(i){return i>>>=0,i===0?32:31-(kc(i)/Ld|0)|0}var zr=256,Hr=4194304;function si(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ja(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var A=u&134217727;return A!==0?(u=A&~m,u!==0?f=si(u):(E&=A,E!==0?f=si(E):o||(o=A&~i,o!==0&&(f=si(o))))):(A=u&~m,A!==0?f=si(A):E!==0?f=si(E):o||(o=u&~i,o!==0&&(f=si(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Fr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function vl(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function El(){var i=zr;return zr<<=1,(zr&4194048)===0&&(zr=256),i}function Tl(){var i=Hr;return Hr<<=1,(Hr&62914560)===0&&(Hr=4194304),i}function Ki(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function Yi(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Sl(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var A=i.entanglements,C=i.expirationTimes,H=i.hiddenUpdates;for(o=E&~o;0<o;){var Q=31-an(o),Z=1<<Q;A[Q]=0,C[Q]=-1;var j=H[Q];if(j!==null)for(H[Q]=null,Q=0;Q<j.length;Q++){var q=j[Q];q!==null&&(q.lane&=-536870913)}o&=~Z}u!==0&&gi(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function gi(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-an(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function Al(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-an(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function ks(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function qa(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function xs(){var i=ie.p;return i!==0?i:(i=window.event,i===void 0?32:MT(i.type))}function xc(i,r){var o=ie.p;try{return ie.p=i,r()}finally{ie.p=o}}var ht=Math.random().toString(36).slice(2),xt="__reactFiber$"+ht,Ct="__reactProps$"+ht,Fn="__reactContainer$"+ht,wl="__reactEvents$"+ht,Vd="__reactListeners$"+ht,Ms="__reactHandles$"+ht,Mc="__reactResources$"+ht,jr="__reactMarker$"+ht;function Ps(i){delete i[xt],delete i[Ct],delete i[wl],delete i[Vd],delete i[Ms]}function $i(i){var r=i[xt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Fn]||o[xt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=vT(i);i!==null;){if(o=i[xt])return o;i=vT(i)}return r}i=o,o=i.parentNode}return null}function _i(i){if(i=i[xt]||i[Fn]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function yi(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function gn(i){var r=i[Mc];return r||(r=i[Mc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function At(i){i[jr]=!0}var Rl=new Set,Ga={};function ri(i,r){Qi(i,r),Qi(i+"Capture",r)}function Qi(i,r){for(Ga[i]=r,i=0;i<r.length;i++)Rl.add(r[i])}var Pc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lc={},qr={};function Vc(i){return Pr.call(qr,i)?!0:Pr.call(Lc,i)?!1:Pc.test(i)?qr[i]=!0:(Lc[i]=!0,!1)}function Ls(i,r,o){if(Vc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function vi(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function Wt(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var Gr,Uc;function Wi(i){if(Gr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Gr=r&&r[1]||"",Uc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gr+i+Uc}var Ka=!1;function Ya(i,r){if(!i||Ka)return"";Ka=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(q){var j=q}Reflect.construct(i,[],Z)}else{try{Z.call()}catch(q){j=q}i.call(Z.prototype)}}else{try{throw Error()}catch(q){j=q}(Z=i())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(q){if(q&&j&&typeof q.stack=="string")return[q.stack,j.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],A=m[1];if(E&&A){var C=E.split(`
`),H=A.split(`
`);for(f=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;f<H.length&&!H[f].includes("DetermineComponentFrameRoot");)f++;if(u===C.length||f===H.length)for(u=C.length-1,f=H.length-1;1<=u&&0<=f&&C[u]!==H[f];)f--;for(;1<=u&&0<=f;u--,f--)if(C[u]!==H[f]){if(u!==1||f!==1)do if(u--,f--,0>f||C[u]!==H[f]){var Q=`
`+C[u].replace(" at new "," at ");return i.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",i.displayName)),Q}while(1<=u&&0<=f);break}}}finally{Ka=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?Wi(o):""}function bl(i){switch(i.tag){case 26:case 27:case 5:return Wi(i.type);case 16:return Wi("Lazy");case 13:return Wi("Suspense");case 19:return Wi("SuspenseList");case 0:case 15:return Ya(i.type,!1);case 11:return Ya(i.type.render,!1);case 1:return Ya(i.type,!0);case 31:return Wi("Activity");default:return""}}function $a(i){try{var r="";do r+=bl(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function _n(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Cl(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ud(i){var r=Cl(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function Qa(i){i._valueTracker||(i._valueTracker=Ud(i))}function Il(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=Cl(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function Kr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Bd=/[\n"\\]/g;function It(i){return i.replace(Bd,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Nn(i,r,o,u,f,m,E,A){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+_n(r)):i.value!==""+_n(r)&&(i.value=""+_n(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?Vs(i,E,_n(r)):o!=null?Vs(i,E,_n(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?i.name=""+_n(A):i.removeAttribute("name")}function Yr(i,r,o,u,f,m,E,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+_n(o):"",r=r!=null?""+_n(r):o,A||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=A?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function Vs(i,r,o){r==="number"&&Kr(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function Xi(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+_n(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function Je(i,r,o){if(r!=null&&(r=""+_n(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+_n(o):""}function $r(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(ct(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=_n(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function jn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var Qr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||Qr.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Nl(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Bc(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Bc(i,m,r[m])}function Ol(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wa(i){return Hd.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var Zi=null;function qn(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ji=null,es=null;function Dl(i){var r=_i(i);if(r&&(i=r.stateNode)){var o=i[Ct]||null;e:switch(i=r.stateNode,r.type){case"input":if(Nn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+It(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Ct]||null;if(!f)throw Error(s(90));Nn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Il(u)}break e;case"textarea":Je(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Xi(i,!!o.multiple,r,!1)}}}var Ei=!1;function zc(i,r,o){if(Ei)return i(r,o);Ei=!0;try{var u=i(r);return u}finally{if(Ei=!1,(Ji!==null||es!==null)&&(xh(),Ji&&(r=Ji,i=es,es=Ji=null,Dl(r),i)))for(r=0;r<i.length;r++)Dl(i[r])}}function Wr(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Ct]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gn=!1;if(ai)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Gn=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Gn=!1}var Ti=null,Us=null,ts=null;function kl(){if(ts)return ts;var i,r=Us,o=r.length,u,f="value"in Ti?Ti.value:Ti.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return ts=f.slice(i,1<u?1-u:void 0)}function Si(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Ai(){return!0}function xl(){return!1}function Ft(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(o=i[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ai:xl,this.isPropagationStopped=xl,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),r}var Ye={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xa=Ft(Ye),Zr=y({},Ye,{view:0,detail:0}),Hc=Ft(Zr),Za,Ja,wi,Jr=y({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:na,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==wi&&(wi&&i.type==="mousemove"?(Za=i.screenX-wi.screenX,Ja=i.screenY-wi.screenY):Ja=Za=0,wi=i),Za)},movementY:function(i){return"movementY"in i?i.movementY:Ja}}),Kn=Ft(Jr),Fc=y({},Jr,{dataTransfer:0}),Fd=Ft(Fc),ea=y({},Zr,{relatedTarget:0}),eo=Ft(ea),Ml=y({},Ye,{animationName:0,elapsedTime:0,pseudoElement:0}),to=Ft(Ml),jc=y({},Ye,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),no=Ft(jc),jd=y({},Ye,{data:0}),Pl=Ft(jd),ta={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ll(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=Gc[i])?!!r[i]:!1}function na(){return Ll}var Kc=y({},Zr,{key:function(i){if(i.key){var r=ta[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Si(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?qc[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:na,charCode:function(i){return i.type==="keypress"?Si(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Si(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),io=Ft(Kc),Yc=y({},Jr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vl=Ft(Yc),ns=y({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:na}),$c=Ft(ns),Qc=y({},Ye,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wc=Ft(Qc),Xc=y({},Jr,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),so=Ft(Xc),yn=y({},Ye,{newState:0,oldState:0}),Zc=Ft(yn),Jc=[9,13,27,32],Ri=ai&&"CompositionEvent"in window,h=null;ai&&"documentMode"in document&&(h=document.documentMode);var _=ai&&"TextEvent"in window&&!h,v=ai&&(!Ri||h&&8<h&&11>=h),w=" ",B=!1;function G(i,r){switch(i){case"keyup":return Jc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ae(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ue=!1;function Mt(i,r){switch(i){case"compositionend":return ae(r);case"keypress":return r.which!==32?null:(B=!0,w);case"textInput":return i=r.data,i===w&&B?null:i;default:return null}}function Be(i,r){if(Ue)return i==="compositionend"||!Ri&&G(i,r)?(i=kl(),ts=Us=Ti=null,Ue=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var jt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!jt[i.type]:r==="textarea"}function is(i,r,o,u){Ji?es?es.push(u):es=[u]:Ji=u,r=Bh(r,"onChange"),0<r.length&&(o=new Xa("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var Xt=null,bi=null;function Ul(i){uT(i,0)}function eh(i){var r=yi(i);if(Il(r))return i}function Oy(i,r){if(i==="change")return r}var Dy=!1;if(ai){var qd;if(ai){var Gd="oninput"in document;if(!Gd){var ky=document.createElement("div");ky.setAttribute("oninput","return;"),Gd=typeof ky.oninput=="function"}qd=Gd}else qd=!1;Dy=qd&&(!document.documentMode||9<document.documentMode)}function xy(){Xt&&(Xt.detachEvent("onpropertychange",My),bi=Xt=null)}function My(i){if(i.propertyName==="value"&&eh(bi)){var r=[];is(r,bi,i,qn(i)),zc(Ul,r)}}function PC(i,r,o){i==="focusin"?(xy(),Xt=r,bi=o,Xt.attachEvent("onpropertychange",My)):i==="focusout"&&xy()}function LC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return eh(bi)}function VC(i,r){if(i==="click")return eh(r)}function UC(i,r){if(i==="input"||i==="change")return eh(r)}function BC(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var On=typeof Object.is=="function"?Object.is:BC;function Bl(i,r){if(On(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Pr.call(r,f)||!On(i[f],r[f]))return!1}return!0}function Py(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Ly(i,r){var o=Py(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Py(o)}}function Vy(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?Vy(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function Uy(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Kr(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=Kr(i.document)}return r}function Kd(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var zC=ai&&"documentMode"in document&&11>=document.documentMode,ro=null,Yd=null,zl=null,$d=!1;function By(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$d||ro==null||ro!==Kr(u)||(u=ro,"selectionStart"in u&&Kd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),zl&&Bl(zl,u)||(zl=u,u=Bh(Yd,"onSelect"),0<u.length&&(r=new Xa("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=ro)))}function ia(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var ao={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionrun:ia("Transition","TransitionRun"),transitionstart:ia("Transition","TransitionStart"),transitioncancel:ia("Transition","TransitionCancel"),transitionend:ia("Transition","TransitionEnd")},Qd={},zy={};ai&&(zy=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function sa(i){if(Qd[i])return Qd[i];if(!ao[i])return i;var r=ao[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in zy)return Qd[i]=r[o];return i}var Hy=sa("animationend"),Fy=sa("animationiteration"),jy=sa("animationstart"),HC=sa("transitionrun"),FC=sa("transitionstart"),jC=sa("transitioncancel"),qy=sa("transitionend"),Gy=new Map,Wd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wd.push("scrollEnd");function oi(i,r){Gy.set(i,r),ri(r,[i])}var Ky=new WeakMap;function Yn(i,r){if(typeof i=="object"&&i!==null){var o=Ky.get(i);return o!==void 0?o:(r={value:i,source:r,stack:$a(r)},Ky.set(i,r),r)}return{value:i,source:r,stack:$a(r)}}var $n=[],oo=0,Xd=0;function th(){for(var i=oo,r=Xd=oo=0;r<i;){var o=$n[r];$n[r++]=null;var u=$n[r];$n[r++]=null;var f=$n[r];$n[r++]=null;var m=$n[r];if($n[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&Yy(o,f,m)}}function nh(i,r,o,u){$n[oo++]=i,$n[oo++]=r,$n[oo++]=o,$n[oo++]=u,Xd|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function Zd(i,r,o,u){return nh(i,r,o,u),ih(i)}function lo(i,r){return nh(i,null,null,r),ih(i)}function Yy(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-an(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function ih(i){if(50<hu)throw hu=0,sm=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var uo={};function qC(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(i,r,o,u){return new qC(i,r,o,u)}function Jd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function ss(i,r){var o=i.alternate;return o===null?(o=Dn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function $y(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function sh(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")Jd(i)&&(E=1);else if(typeof i=="string")E=K1(i,o,me.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case b:return i=Dn(31,o,r,f),i.elementType=b,i.lanes=m,i;case I:return ra(o.children,f,m,r);case F:E=8,f|=24;break;case U:return i=Dn(12,o,r,f|2),i.elementType=U,i.lanes=m,i;case ce:return i=Dn(13,o,r,f),i.elementType=ce,i.lanes=m,i;case Te:return i=Dn(19,o,r,f),i.elementType=Te,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Y:case te:E=10;break e;case W:E=9;break e;case oe:E=11;break e;case x:E=14;break e;case R:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=Dn(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function ra(i,r,o,u){return i=Dn(7,i,u,r),i.lanes=o,i}function ep(i,r,o){return i=Dn(6,i,null,r),i.lanes=o,i}function tp(i,r,o){return r=Dn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var co=[],ho=0,rh=null,ah=0,Qn=[],Wn=0,aa=null,rs=1,as="";function oa(i,r){co[ho++]=ah,co[ho++]=rh,rh=i,ah=r}function Qy(i,r,o){Qn[Wn++]=rs,Qn[Wn++]=as,Qn[Wn++]=aa,aa=i;var u=rs;i=as;var f=32-an(u)-1;u&=~(1<<f),o+=1;var m=32-an(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,rs=1<<32-an(r)+f|o<<f|u,as=m+i}else rs=1<<m|o<<f|u,as=i}function np(i){i.return!==null&&(oa(i,1),Qy(i,1,0))}function ip(i){for(;i===rh;)rh=co[--ho],co[ho]=null,ah=co[--ho],co[ho]=null;for(;i===aa;)aa=Qn[--Wn],Qn[Wn]=null,as=Qn[--Wn],Qn[Wn]=null,rs=Qn[--Wn],Qn[Wn]=null}var vn=null,yt=null,Ke=!1,la=null,Ci=!1,sp=Error(s(519));function ua(i){var r=Error(s(418,""));throw jl(Yn(r,i)),sp}function Wy(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[xt]=i,r[Ct]=u,o){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(o=0;o<du.length;o++)xe(du[o],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":xe("invalid",r),Yr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Qa(r);break;case"select":xe("invalid",r);break;case"textarea":xe("invalid",r),$r(r,u.value,u.defaultValue,u.children),Qa(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||dT(r.textContent,o)?(u.popover!=null&&(xe("beforetoggle",r),xe("toggle",r)),u.onScroll!=null&&xe("scroll",r),u.onScrollEnd!=null&&xe("scrollend",r),u.onClick!=null&&(r.onclick=zh),r=!0):r=!1,r||ua(i)}function Xy(i){for(vn=i.return;vn;)switch(vn.tag){case 5:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:vn=vn.return}}function Hl(i){if(i!==vn)return!1;if(!Ke)return Xy(i),Ke=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Em(i.type,i.memoizedProps)),o=!o),o&&yt&&ua(i),Xy(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){yt=ui(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}yt=null}}else r===27?(r=yt,er(i.type)?(i=wm,wm=null,yt=i):yt=r):yt=vn?ui(i.stateNode.nextSibling):null;return!0}function Fl(){yt=vn=null,Ke=!1}function Zy(){var i=la;return i!==null&&(Rn===null?Rn=i:Rn.push.apply(Rn,i),la=null),i}function jl(i){la===null?la=[i]:la.push(i)}var rp=ee(null),ca=null,os=null;function Bs(i,r,o){se(rp,r._currentValue),r._currentValue=o}function ls(i){i._currentValue=rp.current,le(rp)}function ap(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function op(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var C=0;C<r.length;C++)if(A.context===r[C]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),ap(m.return,o,i),u||(E=null);break e}m=A.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),ap(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function ql(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var A=f.type;On(f.pendingProps.value,E.value)||(i!==null?i.push(A):i=[A])}}else if(f===Ht.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(vu):i=[vu])}f=f.return}i!==null&&op(r,i,o,u),r.flags|=262144}function oh(i){for(i=i.firstContext;i!==null;){if(!On(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ha(i){ca=i,os=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function on(i){return Jy(ca,i)}function lh(i,r){return ca===null&&ha(i),Jy(i,r)}function Jy(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},os===null){if(i===null)throw Error(s(308));os=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else os=os.next=r;return o}var GC=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},KC=n.unstable_scheduleCallback,YC=n.unstable_NormalPriority,Lt={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lp(){return{controller:new GC,data:new Map,refCount:0}}function Gl(i){i.refCount--,i.refCount===0&&KC(YC,function(){i.controller.abort()})}var Kl=null,up=0,fo=0,po=null;function $C(i,r){if(Kl===null){var o=Kl=[];up=0,fo=hm(),po={status:"pending",value:void 0,then:function(u){o.push(u)}}}return up++,r.then(ev,ev),r}function ev(){if(--up===0&&Kl!==null){po!==null&&(po.status="fulfilled");var i=Kl;Kl=null,fo=0,po=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function QC(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var tv=$.S;$.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&$C(i,r),tv!==null&&tv(i,r)};var fa=ee(null);function cp(){var i=fa.current;return i!==null?i:at.pooledCache}function uh(i,r){r===null?se(fa,fa.current):se(fa,r.pool)}function nv(){var i=cp();return i===null?null:{parent:Lt._currentValue,pool:i}}var Yl=Error(s(460)),iv=Error(s(474)),ch=Error(s(542)),hp={then:function(){}};function sv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function hh(){}function rv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(hh,hh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,ov(i),i;default:if(typeof r.status=="string")r.then(hh,hh);else{if(i=at,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,ov(i),i}throw $l=r,Yl}}var $l=null;function av(){if($l===null)throw Error(s(459));var i=$l;return $l=null,i}function ov(i){if(i===Yl||i===ch)throw Error(s(483))}var zs=!1;function fp(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dp(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Hs(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Fs(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(Xe&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=ih(i),Yy(i,null,o),r}return nh(i,u,r,o),ih(i)}function Ql(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Al(i,o)}}function pp(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var mp=!1;function Wl(){if(mp){var i=po;if(i!==null)throw i}}function Xl(i,r,o,u){mp=!1;var f=i.updateQueue;zs=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var C=A,H=C.next;C.next=null,E===null?m=H:E.next=H,E=C;var Q=i.alternate;Q!==null&&(Q=Q.updateQueue,A=Q.lastBaseUpdate,A!==E&&(A===null?Q.firstBaseUpdate=H:A.next=H,Q.lastBaseUpdate=C))}if(m!==null){var Z=f.baseState;E=0,Q=H=C=null,A=m;do{var j=A.lane&-536870913,q=j!==A.lane;if(q?(ze&j)===j:(u&j)===j){j!==0&&j===fo&&(mp=!0),Q!==null&&(Q=Q.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Se=i,_e=A;j=r;var nt=o;switch(_e.tag){case 1:if(Se=_e.payload,typeof Se=="function"){Z=Se.call(nt,Z,j);break e}Z=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=_e.payload,j=typeof Se=="function"?Se.call(nt,Z,j):Se,j==null)break e;Z=y({},Z,j);break e;case 2:zs=!0}}j=A.callback,j!==null&&(i.flags|=64,q&&(i.flags|=8192),q=f.callbacks,q===null?f.callbacks=[j]:q.push(j))}else q={lane:j,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Q===null?(H=Q=q,C=Z):Q=Q.next=q,E|=j;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;q=A,A=q.next,q.next=null,f.lastBaseUpdate=q,f.shared.pending=null}}while(!0);Q===null&&(C=Z),f.baseState=C,f.firstBaseUpdate=H,f.lastBaseUpdate=Q,m===null&&(f.shared.lanes=0),Ws|=E,i.lanes=E,i.memoizedState=Z}}function lv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function uv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)lv(o[i],r)}var mo=ee(null),fh=ee(0);function cv(i,r){i=ms,se(fh,i),se(mo,r),ms=i|r.baseLanes}function gp(){se(fh,ms),se(mo,mo.current)}function _p(){ms=fh.current,le(mo),le(fh)}var js=0,Ie=null,et=null,Nt=null,dh=!1,go=!1,da=!1,ph=0,Zl=0,_o=null,WC=0;function wt(){throw Error(s(321))}function yp(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!On(i[o],r[o]))return!1;return!0}function vp(i,r,o,u,f,m){return js=m,Ie=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,$.H=i===null||i.memoizedState===null?Yv:$v,da=!1,m=o(u,f),da=!1,go&&(m=fv(r,o,u,f)),hv(i),m}function hv(i){$.H=Eh;var r=et!==null&&et.next!==null;if(js=0,Nt=et=Ie=null,dh=!1,Zl=0,_o=null,r)throw Error(s(300));i===null||qt||(i=i.dependencies,i!==null&&oh(i)&&(qt=!0))}function fv(i,r,o,u){Ie=i;var f=0;do{if(go&&(_o=null),Zl=0,go=!1,25<=f)throw Error(s(301));if(f+=1,Nt=et=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}$.H=i1,m=r(o,u)}while(go);return m}function XC(){var i=$.H,r=i.useState()[0];return r=typeof r.then=="function"?Jl(r):r,i=i.useState()[0],(et!==null?et.memoizedState:null)!==i&&(Ie.flags|=1024),r}function Ep(){var i=ph!==0;return ph=0,i}function Tp(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Sp(i){if(dh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}dh=!1}js=0,Nt=et=Ie=null,go=!1,Zl=ph=0,_o=null}function An(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?Ie.memoizedState=Nt=i:Nt=Nt.next=i,Nt}function Ot(){if(et===null){var i=Ie.alternate;i=i!==null?i.memoizedState:null}else i=et.next;var r=Nt===null?Ie.memoizedState:Nt.next;if(r!==null)Nt=r,et=i;else{if(i===null)throw Ie.alternate===null?Error(s(467)):Error(s(310));et=i,i={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},Nt===null?Ie.memoizedState=Nt=i:Nt=Nt.next=i}return Nt}function Ap(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jl(i){var r=Zl;return Zl+=1,_o===null&&(_o=[]),i=rv(_o,i,r),r=Ie,(Nt===null?r.memoizedState:Nt.next)===null&&(r=r.alternate,$.H=r===null||r.memoizedState===null?Yv:$v),i}function mh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Jl(i);if(i.$$typeof===te)return on(i)}throw Error(s(438,String(i)))}function wp(i){var r=null,o=Ie.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ie.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Ap(),Ie.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=k;return r.index++,o}function us(i,r){return typeof r=="function"?r(i):r}function gh(i){var r=Ot();return Rp(r,et,i)}function Rp(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var A=E=null,C=null,H=r,Q=!1;do{var Z=H.lane&-536870913;if(Z!==H.lane?(ze&Z)===Z:(js&Z)===Z){var j=H.revertLane;if(j===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),Z===fo&&(Q=!0);else if((js&j)===j){H=H.next,j===fo&&(Q=!0);continue}else Z={lane:0,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},C===null?(A=C=Z,E=m):C=C.next=Z,Ie.lanes|=j,Ws|=j;Z=H.action,da&&o(m,Z),m=H.hasEagerState?H.eagerState:o(m,Z)}else j={lane:Z,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},C===null?(A=C=j,E=m):C=C.next=j,Ie.lanes|=Z,Ws|=Z;H=H.next}while(H!==null&&H!==r);if(C===null?E=m:C.next=A,!On(m,i.memoizedState)&&(qt=!0,Q&&(o=po,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=C,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function bp(i){var r=Ot(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);On(m,r.memoizedState)||(qt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function dv(i,r,o){var u=Ie,f=Ot(),m=Ke;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!On((et||f).memoizedState,o);E&&(f.memoizedState=o,qt=!0),f=f.queue;var A=gv.bind(null,u,f,i);if(eu(2048,8,A,[i]),f.getSnapshot!==r||E||Nt!==null&&Nt.memoizedState.tag&1){if(u.flags|=2048,yo(9,_h(),mv.bind(null,u,f,o,r),null),at===null)throw Error(s(349));m||(js&124)!==0||pv(u,r,o)}return o}function pv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Ie.updateQueue,r===null?(r=Ap(),Ie.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function mv(i,r,o,u){r.value=o,r.getSnapshot=u,_v(r)&&yv(i)}function gv(i,r,o){return o(function(){_v(r)&&yv(i)})}function _v(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!On(i,o)}catch{return!0}}function yv(i){var r=lo(i,2);r!==null&&Ln(r,i,2)}function Cp(i){var r=An();if(typeof i=="function"){var o=i;if(i=o(),da){In(!0);try{o()}finally{In(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:i},r}function vv(i,r,o,u){return i.baseState=o,Rp(i,et,typeof u=="function"?u:us)}function ZC(i,r,o,u,f){if(vh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};$.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,Ev(r,m)):(m.next=o.next,r.pending=o.next=m)}}function Ev(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=$.T,E={};$.T=E;try{var A=o(f,u),C=$.S;C!==null&&C(E,A),Tv(i,r,A)}catch(H){Ip(i,r,H)}finally{$.T=m}}else try{m=o(f,u),Tv(i,r,m)}catch(H){Ip(i,r,H)}}function Tv(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Sv(i,r,u)},function(u){return Ip(i,r,u)}):Sv(i,r,o)}function Sv(i,r,o){r.status="fulfilled",r.value=o,Av(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,Ev(i,o)))}function Ip(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Av(r),r=r.next;while(r!==u)}i.action=null}function Av(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function wv(i,r){return r}function Rv(i,r){if(Ke){var o=at.formState;if(o!==null){e:{var u=Ie;if(Ke){if(yt){t:{for(var f=yt,m=Ci;f.nodeType!==8;){if(!m){f=null;break t}if(f=ui(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){yt=ui(f.nextSibling),u=f.data==="F!";break e}}ua(u)}u=!1}u&&(r=o[0])}}return o=An(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wv,lastRenderedState:r},o.queue=u,o=qv.bind(null,Ie,u),u.dispatch=o,u=Cp(!1),m=xp.bind(null,Ie,!1,u.queue),u=An(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=ZC.bind(null,Ie,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function bv(i){var r=Ot();return Cv(r,et,i)}function Cv(i,r,o){if(r=Rp(i,r,wv)[0],i=gh(us)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Jl(r)}catch(E){throw E===Yl?ch:E}else u=r;r=Ot();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(Ie.flags|=2048,yo(9,_h(),JC.bind(null,f,o),null)),[u,m,i]}function JC(i,r){i.action=r}function Iv(i){var r=Ot(),o=et;if(o!==null)return Cv(r,o,i);Ot(),r=r.memoizedState,o=Ot();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function yo(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=Ie.updateQueue,r===null&&(r=Ap(),Ie.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function _h(){return{destroy:void 0,resource:void 0}}function Nv(){return Ot().memoizedState}function yh(i,r,o,u){var f=An();u=u===void 0?null:u,Ie.flags|=i,f.memoizedState=yo(1|r,_h(),o,u)}function eu(i,r,o,u){var f=Ot();u=u===void 0?null:u;var m=f.memoizedState.inst;et!==null&&u!==null&&yp(u,et.memoizedState.deps)?f.memoizedState=yo(r,m,o,u):(Ie.flags|=i,f.memoizedState=yo(1|r,m,o,u))}function Ov(i,r){yh(8390656,8,i,r)}function Dv(i,r){eu(2048,8,i,r)}function kv(i,r){return eu(4,2,i,r)}function xv(i,r){return eu(4,4,i,r)}function Mv(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function Pv(i,r,o){o=o!=null?o.concat([i]):null,eu(4,4,Mv.bind(null,r,i),o)}function Np(){}function Lv(i,r){var o=Ot();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&yp(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function Vv(i,r){var o=Ot();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&yp(r,u[1]))return u[0];if(u=i(),da){In(!0);try{i()}finally{In(!1)}}return o.memoizedState=[u,r],u}function Op(i,r,o){return o===void 0||(js&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=zE(),Ie.lanes|=i,Ws|=i,o)}function Uv(i,r,o,u){return On(o,r)?o:mo.current!==null?(i=Op(i,o,u),On(i,r)||(qt=!0),i):(js&42)===0?(qt=!0,i.memoizedState=o):(i=zE(),Ie.lanes|=i,Ws|=i,r)}function Bv(i,r,o,u,f){var m=ie.p;ie.p=m!==0&&8>m?m:8;var E=$.T,A={};$.T=A,xp(i,!1,r,o);try{var C=f(),H=$.S;if(H!==null&&H(A,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Q=QC(C,u);tu(i,r,Q,Pn(i))}else tu(i,r,u,Pn(i))}catch(Z){tu(i,r,{then:function(){},status:"rejected",reason:Z},Pn())}finally{ie.p=m,$.T=E}}function e1(){}function Dp(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=zv(i).queue;Bv(i,f,r,de,o===null?e1:function(){return Hv(i),o(u)})}function zv(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:de},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function Hv(i){var r=zv(i).next.queue;tu(i,r,{},Pn())}function kp(){return on(vu)}function Fv(){return Ot().memoizedState}function jv(){return Ot().memoizedState}function t1(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=Pn();i=Hs(o);var u=Fs(r,i,o);u!==null&&(Ln(u,r,o),Ql(u,r,o)),r={cache:lp()},i.payload=r;return}r=r.return}}function n1(i,r,o){var u=Pn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},vh(i)?Gv(r,o):(o=Zd(i,r,o,u),o!==null&&(Ln(o,i,u),Kv(o,r,u)))}function qv(i,r,o){var u=Pn();tu(i,r,o,u)}function tu(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(vh(i))Gv(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,A=m(E,o);if(f.hasEagerState=!0,f.eagerState=A,On(A,E))return nh(i,r,f,0),at===null&&th(),!1}catch{}finally{}if(o=Zd(i,r,f,u),o!==null)return Ln(o,i,u),Kv(o,r,u),!0}return!1}function xp(i,r,o,u){if(u={lane:2,revertLane:hm(),action:u,hasEagerState:!1,eagerState:null,next:null},vh(i)){if(r)throw Error(s(479))}else r=Zd(i,o,u,2),r!==null&&Ln(r,i,2)}function vh(i){var r=i.alternate;return i===Ie||r!==null&&r===Ie}function Gv(i,r){go=dh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function Kv(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Al(i,o)}}var Eh={readContext:on,use:mh,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt},Yv={readContext:on,use:mh,useCallback:function(i,r){return An().memoizedState=[i,r===void 0?null:r],i},useContext:on,useEffect:Ov,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,yh(4194308,4,Mv.bind(null,r,i),o)},useLayoutEffect:function(i,r){return yh(4194308,4,i,r)},useInsertionEffect:function(i,r){yh(4,2,i,r)},useMemo:function(i,r){var o=An();r=r===void 0?null:r;var u=i();if(da){In(!0);try{i()}finally{In(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=An();if(o!==void 0){var f=o(r);if(da){In(!0);try{o(r)}finally{In(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=n1.bind(null,Ie,i),[u.memoizedState,i]},useRef:function(i){var r=An();return i={current:i},r.memoizedState=i},useState:function(i){i=Cp(i);var r=i.queue,o=qv.bind(null,Ie,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Np,useDeferredValue:function(i,r){var o=An();return Op(o,i,r)},useTransition:function(){var i=Cp(!1);return i=Bv.bind(null,Ie,i.queue,!0,!1),An().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Ie,f=An();if(Ke){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),at===null)throw Error(s(349));(ze&124)!==0||pv(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,Ov(gv.bind(null,u,m,i),[i]),u.flags|=2048,yo(9,_h(),mv.bind(null,u,m,o,r),null),o},useId:function(){var i=An(),r=at.identifierPrefix;if(Ke){var o=as,u=rs;o=(u&~(1<<32-an(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=ph++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=WC++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:kp,useFormState:Rv,useActionState:Rv,useOptimistic:function(i){var r=An();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=xp.bind(null,Ie,!0,o),o.dispatch=r,[i,r]},useMemoCache:wp,useCacheRefresh:function(){return An().memoizedState=t1.bind(null,Ie)}},$v={readContext:on,use:mh,useCallback:Lv,useContext:on,useEffect:Dv,useImperativeHandle:Pv,useInsertionEffect:kv,useLayoutEffect:xv,useMemo:Vv,useReducer:gh,useRef:Nv,useState:function(){return gh(us)},useDebugValue:Np,useDeferredValue:function(i,r){var o=Ot();return Uv(o,et.memoizedState,i,r)},useTransition:function(){var i=gh(us)[0],r=Ot().memoizedState;return[typeof i=="boolean"?i:Jl(i),r]},useSyncExternalStore:dv,useId:Fv,useHostTransitionStatus:kp,useFormState:bv,useActionState:bv,useOptimistic:function(i,r){var o=Ot();return vv(o,et,i,r)},useMemoCache:wp,useCacheRefresh:jv},i1={readContext:on,use:mh,useCallback:Lv,useContext:on,useEffect:Dv,useImperativeHandle:Pv,useInsertionEffect:kv,useLayoutEffect:xv,useMemo:Vv,useReducer:bp,useRef:Nv,useState:function(){return bp(us)},useDebugValue:Np,useDeferredValue:function(i,r){var o=Ot();return et===null?Op(o,i,r):Uv(o,et.memoizedState,i,r)},useTransition:function(){var i=bp(us)[0],r=Ot().memoizedState;return[typeof i=="boolean"?i:Jl(i),r]},useSyncExternalStore:dv,useId:Fv,useHostTransitionStatus:kp,useFormState:Iv,useActionState:Iv,useOptimistic:function(i,r){var o=Ot();return et!==null?vv(o,et,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:wp,useCacheRefresh:jv},vo=null,nu=0;function Th(i){var r=nu;return nu+=1,vo===null&&(vo=[]),rv(vo,i,r)}function iu(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Sh(i,r){throw r.$$typeof===T?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function Qv(i){var r=i._init;return r(i._payload)}function Wv(i){function r(L,M){if(i){var z=L.deletions;z===null?(L.deletions=[M],L.flags|=16):z.push(M)}}function o(L,M){if(!i)return null;for(;M!==null;)r(L,M),M=M.sibling;return null}function u(L){for(var M=new Map;L!==null;)L.key!==null?M.set(L.key,L):M.set(L.index,L),L=L.sibling;return M}function f(L,M){return L=ss(L,M),L.index=0,L.sibling=null,L}function m(L,M,z){return L.index=z,i?(z=L.alternate,z!==null?(z=z.index,z<M?(L.flags|=67108866,M):z):(L.flags|=67108866,M)):(L.flags|=1048576,M)}function E(L){return i&&L.alternate===null&&(L.flags|=67108866),L}function A(L,M,z,X){return M===null||M.tag!==6?(M=ep(z,L.mode,X),M.return=L,M):(M=f(M,z),M.return=L,M)}function C(L,M,z,X){var fe=z.type;return fe===I?Q(L,M,z.props.children,X,z.key):M!==null&&(M.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===R&&Qv(fe)===M.type)?(M=f(M,z.props),iu(M,z),M.return=L,M):(M=sh(z.type,z.key,z.props,null,L.mode,X),iu(M,z),M.return=L,M)}function H(L,M,z,X){return M===null||M.tag!==4||M.stateNode.containerInfo!==z.containerInfo||M.stateNode.implementation!==z.implementation?(M=tp(z,L.mode,X),M.return=L,M):(M=f(M,z.children||[]),M.return=L,M)}function Q(L,M,z,X,fe){return M===null||M.tag!==7?(M=ra(z,L.mode,X,fe),M.return=L,M):(M=f(M,z),M.return=L,M)}function Z(L,M,z){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=ep(""+M,L.mode,z),M.return=L,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return z=sh(M.type,M.key,M.props,null,L.mode,z),iu(z,M),z.return=L,z;case N:return M=tp(M,L.mode,z),M.return=L,M;case R:var X=M._init;return M=X(M._payload),Z(L,M,z)}if(ct(M)||V(M))return M=ra(M,L.mode,z,null),M.return=L,M;if(typeof M.then=="function")return Z(L,Th(M),z);if(M.$$typeof===te)return Z(L,lh(L,M),z);Sh(L,M)}return null}function j(L,M,z,X){var fe=M!==null?M.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return fe!==null?null:A(L,M,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return z.key===fe?C(L,M,z,X):null;case N:return z.key===fe?H(L,M,z,X):null;case R:return fe=z._init,z=fe(z._payload),j(L,M,z,X)}if(ct(z)||V(z))return fe!==null?null:Q(L,M,z,X,null);if(typeof z.then=="function")return j(L,M,Th(z),X);if(z.$$typeof===te)return j(L,M,lh(L,z),X);Sh(L,z)}return null}function q(L,M,z,X,fe){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return L=L.get(z)||null,A(M,L,""+X,fe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return L=L.get(X.key===null?z:X.key)||null,C(M,L,X,fe);case N:return L=L.get(X.key===null?z:X.key)||null,H(M,L,X,fe);case R:var De=X._init;return X=De(X._payload),q(L,M,z,X,fe)}if(ct(X)||V(X))return L=L.get(z)||null,Q(M,L,X,fe,null);if(typeof X.then=="function")return q(L,M,z,Th(X),fe);if(X.$$typeof===te)return q(L,M,z,lh(M,X),fe);Sh(M,X)}return null}function Se(L,M,z,X){for(var fe=null,De=null,pe=M,ve=M=0,Kt=null;pe!==null&&ve<z.length;ve++){pe.index>ve?(Kt=pe,pe=null):Kt=pe.sibling;var Ge=j(L,pe,z[ve],X);if(Ge===null){pe===null&&(pe=Kt);break}i&&pe&&Ge.alternate===null&&r(L,pe),M=m(Ge,M,ve),De===null?fe=Ge:De.sibling=Ge,De=Ge,pe=Kt}if(ve===z.length)return o(L,pe),Ke&&oa(L,ve),fe;if(pe===null){for(;ve<z.length;ve++)pe=Z(L,z[ve],X),pe!==null&&(M=m(pe,M,ve),De===null?fe=pe:De.sibling=pe,De=pe);return Ke&&oa(L,ve),fe}for(pe=u(pe);ve<z.length;ve++)Kt=q(pe,L,ve,z[ve],X),Kt!==null&&(i&&Kt.alternate!==null&&pe.delete(Kt.key===null?ve:Kt.key),M=m(Kt,M,ve),De===null?fe=Kt:De.sibling=Kt,De=Kt);return i&&pe.forEach(function(rr){return r(L,rr)}),Ke&&oa(L,ve),fe}function _e(L,M,z,X){if(z==null)throw Error(s(151));for(var fe=null,De=null,pe=M,ve=M=0,Kt=null,Ge=z.next();pe!==null&&!Ge.done;ve++,Ge=z.next()){pe.index>ve?(Kt=pe,pe=null):Kt=pe.sibling;var rr=j(L,pe,Ge.value,X);if(rr===null){pe===null&&(pe=Kt);break}i&&pe&&rr.alternate===null&&r(L,pe),M=m(rr,M,ve),De===null?fe=rr:De.sibling=rr,De=rr,pe=Kt}if(Ge.done)return o(L,pe),Ke&&oa(L,ve),fe;if(pe===null){for(;!Ge.done;ve++,Ge=z.next())Ge=Z(L,Ge.value,X),Ge!==null&&(M=m(Ge,M,ve),De===null?fe=Ge:De.sibling=Ge,De=Ge);return Ke&&oa(L,ve),fe}for(pe=u(pe);!Ge.done;ve++,Ge=z.next())Ge=q(pe,L,ve,Ge.value,X),Ge!==null&&(i&&Ge.alternate!==null&&pe.delete(Ge.key===null?ve:Ge.key),M=m(Ge,M,ve),De===null?fe=Ge:De.sibling=Ge,De=Ge);return i&&pe.forEach(function(sI){return r(L,sI)}),Ke&&oa(L,ve),fe}function nt(L,M,z,X){if(typeof z=="object"&&z!==null&&z.type===I&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case S:e:{for(var fe=z.key;M!==null;){if(M.key===fe){if(fe=z.type,fe===I){if(M.tag===7){o(L,M.sibling),X=f(M,z.props.children),X.return=L,L=X;break e}}else if(M.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===R&&Qv(fe)===M.type){o(L,M.sibling),X=f(M,z.props),iu(X,z),X.return=L,L=X;break e}o(L,M);break}else r(L,M);M=M.sibling}z.type===I?(X=ra(z.props.children,L.mode,X,z.key),X.return=L,L=X):(X=sh(z.type,z.key,z.props,null,L.mode,X),iu(X,z),X.return=L,L=X)}return E(L);case N:e:{for(fe=z.key;M!==null;){if(M.key===fe)if(M.tag===4&&M.stateNode.containerInfo===z.containerInfo&&M.stateNode.implementation===z.implementation){o(L,M.sibling),X=f(M,z.children||[]),X.return=L,L=X;break e}else{o(L,M);break}else r(L,M);M=M.sibling}X=tp(z,L.mode,X),X.return=L,L=X}return E(L);case R:return fe=z._init,z=fe(z._payload),nt(L,M,z,X)}if(ct(z))return Se(L,M,z,X);if(V(z)){if(fe=V(z),typeof fe!="function")throw Error(s(150));return z=fe.call(z),_e(L,M,z,X)}if(typeof z.then=="function")return nt(L,M,Th(z),X);if(z.$$typeof===te)return nt(L,M,lh(L,z),X);Sh(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,M!==null&&M.tag===6?(o(L,M.sibling),X=f(M,z),X.return=L,L=X):(o(L,M),X=ep(z,L.mode,X),X.return=L,L=X),E(L)):o(L,M)}return function(L,M,z,X){try{nu=0;var fe=nt(L,M,z,X);return vo=null,fe}catch(pe){if(pe===Yl||pe===ch)throw pe;var De=Dn(29,pe,null,L.mode);return De.lanes=X,De.return=L,De}finally{}}}var Eo=Wv(!0),Xv=Wv(!1),Xn=ee(null),Ii=null;function qs(i){var r=i.alternate;se(Vt,Vt.current&1),se(Xn,i),Ii===null&&(r===null||mo.current!==null||r.memoizedState!==null)&&(Ii=i)}function Zv(i){if(i.tag===22){if(se(Vt,Vt.current),se(Xn,i),Ii===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Ii=i)}}else Gs()}function Gs(){se(Vt,Vt.current),se(Xn,Xn.current)}function cs(i){le(Xn),Ii===i&&(Ii=null),le(Vt)}var Vt=ee(0);function Ah(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Am(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Mp(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:y({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Pp={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=Pn(),f=Hs(u);f.payload=r,o!=null&&(f.callback=o),r=Fs(i,f,u),r!==null&&(Ln(r,i,u),Ql(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=Pn(),f=Hs(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Fs(i,f,u),r!==null&&(Ln(r,i,u),Ql(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=Pn(),u=Hs(o);u.tag=2,r!=null&&(u.callback=r),r=Fs(i,u,o),r!==null&&(Ln(r,i,o),Ql(r,i,o))}};function Jv(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!Bl(o,u)||!Bl(f,m):!0}function eE(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&Pp.enqueueReplaceState(r,r.state,null)}function pa(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=y({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var wh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function tE(i){wh(i)}function nE(i){console.error(i)}function iE(i){wh(i)}function Rh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function sE(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Lp(i,r,o){return o=Hs(o),o.tag=3,o.payload={element:null},o.callback=function(){Rh(i,r)},o}function rE(i){return i=Hs(i),i.tag=3,i}function aE(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){sE(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){sE(r,o,u),typeof f!="function"&&(Xs===null?Xs=new Set([this]):Xs.add(this));var A=u.stack;this.componentDidCatch(u.value,{componentStack:A!==null?A:""})})}function s1(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&ql(r,o,f,!0),o=Xn.current,o!==null){switch(o.tag){case 13:return Ii===null?am():o.alternate===null&&vt===0&&(vt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===hp?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),lm(i,u,f)),!1;case 22:return o.flags|=65536,u===hp?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),lm(i,u,f)),!1}throw Error(s(435,o.tag))}return lm(i,u,f),am(),!1}if(Ke)return r=Xn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==sp&&(i=Error(s(422),{cause:u}),jl(Yn(i,o)))):(u!==sp&&(r=Error(s(423),{cause:u}),jl(Yn(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=Yn(u,o),f=Lp(i.stateNode,u,f),pp(i,f),vt!==4&&(vt=2)),!1;var m=Error(s(520),{cause:u});if(m=Yn(m,o),cu===null?cu=[m]:cu.push(m),vt!==4&&(vt=2),r===null)return!0;u=Yn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=Lp(o.stateNode,u,i),pp(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Xs===null||!Xs.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=rE(f),aE(f,i,o,u),pp(o,f),!1}o=o.return}while(o!==null);return!1}var oE=Error(s(461)),qt=!1;function Zt(i,r,o,u){r.child=i===null?Xv(r,null,o,u):Eo(r,i.child,o,u)}function lE(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var A in u)A!=="ref"&&(E[A]=u[A])}else E=u;return ha(r),u=vp(i,r,o,E,m,f),A=Ep(),i!==null&&!qt?(Tp(i,r,f),hs(i,r,f)):(Ke&&A&&np(r),r.flags|=1,Zt(i,r,u,f),r.child)}function uE(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!Jd(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,cE(i,r,m,u,f)):(i=sh(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!qp(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Bl,o(E,u)&&i.ref===r.ref)return hs(i,r,f)}return r.flags|=1,i=ss(m,u),i.ref=r.ref,i.return=r,r.child=i}function cE(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(Bl(m,u)&&i.ref===r.ref)if(qt=!1,r.pendingProps=u=m,qp(i,f))(i.flags&131072)!==0&&(qt=!0);else return r.lanes=i.lanes,hs(i,r,f)}return Vp(i,r,o,u,f)}function hE(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return fE(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&uh(r,m!==null?m.cachePool:null),m!==null?cv(r,m):gp(),Zv(r);else return r.lanes=r.childLanes=536870912,fE(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(uh(r,m.cachePool),cv(r,m),Gs(),r.memoizedState=null):(i!==null&&uh(r,null),gp(),Gs());return Zt(i,r,f,o),r.child}function fE(i,r,o,u){var f=cp();return f=f===null?null:{parent:Lt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&uh(r,null),gp(),Zv(r),i!==null&&ql(i,r,u,!0),null}function bh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function Vp(i,r,o,u,f){return ha(r),o=vp(i,r,o,u,void 0,f),u=Ep(),i!==null&&!qt?(Tp(i,r,f),hs(i,r,f)):(Ke&&u&&np(r),r.flags|=1,Zt(i,r,o,f),r.child)}function dE(i,r,o,u,f,m){return ha(r),r.updateQueue=null,o=fv(r,u,o,f),hv(i),u=Ep(),i!==null&&!qt?(Tp(i,r,m),hs(i,r,m)):(Ke&&u&&np(r),r.flags|=1,Zt(i,r,o,m),r.child)}function pE(i,r,o,u,f){if(ha(r),r.stateNode===null){var m=uo,E=o.contextType;typeof E=="object"&&E!==null&&(m=on(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Pp,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},fp(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?on(E):uo,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Mp(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Pp.enqueueReplaceState(m,m.state,null),Xl(r,u,m,f),Wl(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var A=r.memoizedProps,C=pa(o,A);m.props=C;var H=m.context,Q=o.contextType;E=uo,typeof Q=="object"&&Q!==null&&(E=on(Q));var Z=o.getDerivedStateFromProps;Q=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,Q||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||H!==E)&&eE(r,m,u,E),zs=!1;var j=r.memoizedState;m.state=j,Xl(r,u,m,f),Wl(),H=r.memoizedState,A||j!==H||zs?(typeof Z=="function"&&(Mp(r,o,Z,u),H=r.memoizedState),(C=zs||Jv(r,o,C,u,j,H,E))?(Q||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=H),m.props=u,m.state=H,m.context=E,u=C):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,dp(i,r),E=r.memoizedProps,Q=pa(o,E),m.props=Q,Z=r.pendingProps,j=m.context,H=o.contextType,C=uo,typeof H=="object"&&H!==null&&(C=on(H)),A=o.getDerivedStateFromProps,(H=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Z||j!==C)&&eE(r,m,u,C),zs=!1,j=r.memoizedState,m.state=j,Xl(r,u,m,f),Wl();var q=r.memoizedState;E!==Z||j!==q||zs||i!==null&&i.dependencies!==null&&oh(i.dependencies)?(typeof A=="function"&&(Mp(r,o,A,u),q=r.memoizedState),(Q=zs||Jv(r,o,Q,u,j,q,C)||i!==null&&i.dependencies!==null&&oh(i.dependencies))?(H||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,q,C),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,q,C)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&j===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&j===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=q),m.props=u,m.state=q,m.context=C,u=Q):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&j===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&j===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,bh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=Eo(r,i.child,null,f),r.child=Eo(r,null,o,f)):Zt(i,r,o,f),r.memoizedState=m.state,i=r.child):i=hs(i,r,f),i}function mE(i,r,o,u){return Fl(),r.flags|=256,Zt(i,r,o,u),r.child}var Up={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bp(i){return{baseLanes:i,cachePool:nv()}}function zp(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=Zn),i}function gE(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(Vt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(Ke){if(f?qs(r):Gs(),Ke){var A=yt,C;if(C=A){e:{for(C=A,A=Ci;C.nodeType!==8;){if(!A){A=null;break e}if(C=ui(C.nextSibling),C===null){A=null;break e}}A=C}A!==null?(r.memoizedState={dehydrated:A,treeContext:aa!==null?{id:rs,overflow:as}:null,retryLane:536870912,hydrationErrors:null},C=Dn(18,null,null,0),C.stateNode=A,C.return=r,r.child=C,vn=r,yt=null,C=!0):C=!1}C||ua(r)}if(A=r.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Am(A)?r.lanes=32:r.lanes=536870912,null;cs(r)}return A=u.children,u=u.fallback,f?(Gs(),f=r.mode,A=Ch({mode:"hidden",children:A},f),u=ra(u,f,o,null),A.return=r,u.return=r,A.sibling=u,r.child=A,f=r.child,f.memoizedState=Bp(o),f.childLanes=zp(i,E,o),r.memoizedState=Up,u):(qs(r),Hp(r,A))}if(C=i.memoizedState,C!==null&&(A=C.dehydrated,A!==null)){if(m)r.flags&256?(qs(r),r.flags&=-257,r=Fp(i,r,o)):r.memoizedState!==null?(Gs(),r.child=i.child,r.flags|=128,r=null):(Gs(),f=u.fallback,A=r.mode,u=Ch({mode:"visible",children:u.children},A),f=ra(f,A,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,Eo(r,i.child,null,o),u=r.child,u.memoizedState=Bp(o),u.childLanes=zp(i,E,o),r.memoizedState=Up,r=f);else if(qs(r),Am(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var H=E.dgst;E=H,u=Error(s(419)),u.stack="",u.digest=E,jl({value:u,source:null,stack:null}),r=Fp(i,r,o)}else if(qt||ql(i,r,o,!1),E=(o&i.childLanes)!==0,qt||E){if(E=at,E!==null&&(u=o&-o,u=(u&42)!==0?1:ks(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==C.retryLane))throw C.retryLane=u,lo(i,u),Ln(E,i,u),oE;A.data==="$?"||am(),r=Fp(i,r,o)}else A.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=C.treeContext,yt=ui(A.nextSibling),vn=r,Ke=!0,la=null,Ci=!1,i!==null&&(Qn[Wn++]=rs,Qn[Wn++]=as,Qn[Wn++]=aa,rs=i.id,as=i.overflow,aa=r),r=Hp(r,u.children),r.flags|=4096);return r}return f?(Gs(),f=u.fallback,A=r.mode,C=i.child,H=C.sibling,u=ss(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&65011712,H!==null?f=ss(H,f):(f=ra(f,A,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,A=i.child.memoizedState,A===null?A=Bp(o):(C=A.cachePool,C!==null?(H=Lt._currentValue,C=C.parent!==H?{parent:H,pool:H}:C):C=nv(),A={baseLanes:A.baseLanes|o,cachePool:C}),f.memoizedState=A,f.childLanes=zp(i,E,o),r.memoizedState=Up,u):(qs(r),o=i.child,i=o.sibling,o=ss(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function Hp(i,r){return r=Ch({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Ch(i,r){return i=Dn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function Fp(i,r,o){return Eo(r,i.child,null,o),i=Hp(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function _E(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),ap(i.return,r,o)}function jp(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function yE(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(Zt(i,r,u.children,o),u=Vt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&_E(i,o,r);else if(i.tag===19)_E(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(se(Vt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Ah(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),jp(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Ah(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}jp(r,!0,o,null,m);break;case"together":jp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function hs(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),Ws|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(ql(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=ss(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=ss(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function qp(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&oh(i)))}function r1(i,r,o){switch(r.tag){case 3:rt(r,r.stateNode.containerInfo),Bs(r,Lt,i.memoizedState.cache),Fl();break;case 27:case 5:Ds(r);break;case 4:rt(r,r.stateNode.containerInfo);break;case 10:Bs(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(qs(r),r.flags|=128,null):(o&r.child.childLanes)!==0?gE(i,r,o):(qs(r),i=hs(i,r,o),i!==null?i.sibling:null);qs(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(ql(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return yE(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(Vt,Vt.current),u)break;return null;case 22:case 23:return r.lanes=0,hE(i,r,o);case 24:Bs(r,Lt,i.memoizedState.cache)}return hs(i,r,o)}function vE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)qt=!0;else{if(!qp(i,o)&&(r.flags&128)===0)return qt=!1,r1(i,r,o);qt=(i.flags&131072)!==0}else qt=!1,Ke&&(r.flags&1048576)!==0&&Qy(r,ah,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")Jd(u)?(i=pa(u,i),r.tag=1,r=pE(null,r,u,i,o)):(r.tag=0,r=Vp(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===oe){r.tag=11,r=lE(null,r,u,i,o);break e}else if(f===x){r.tag=14,r=uE(null,r,u,i,o);break e}}throw r=kt(u)||u,Error(s(306,r,""))}}return r;case 0:return Vp(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=pa(u,r.pendingProps),pE(i,r,u,f,o);case 3:e:{if(rt(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,dp(i,r),Xl(r,u,null,o);var E=r.memoizedState;if(u=E.cache,Bs(r,Lt,u),u!==m.cache&&op(r,[Lt],o,!0),Wl(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=mE(i,r,u,o);break e}else if(u!==f){f=Yn(Error(s(424)),r),jl(f),r=mE(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(yt=ui(i.firstChild),vn=r,Ke=!0,la=null,Ci=!0,o=Xv(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Fl(),u===f){r=hs(i,r,o);break e}Zt(i,r,u,o)}r=r.child}return r;case 26:return bh(i,r),i===null?(o=AT(r.type,null,r.pendingProps,null))?r.memoizedState=o:Ke||(o=r.type,i=r.pendingProps,u=Hh(we.current).createElement(o),u[xt]=r,u[Ct]=i,en(u,o,i),At(u),r.stateNode=u):r.memoizedState=AT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Ds(r),i===null&&Ke&&(u=r.stateNode=ET(r.type,r.pendingProps,we.current),vn=r,Ci=!0,f=yt,er(r.type)?(wm=f,yt=ui(u.firstChild)):yt=f),Zt(i,r,r.pendingProps.children,o),bh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Ke&&((f=u=yt)&&(u=x1(u,r.type,r.pendingProps,Ci),u!==null?(r.stateNode=u,vn=r,yt=ui(u.firstChild),Ci=!1,f=!0):f=!1),f||ua(r)),Ds(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,Em(f,m)?u=null:E!==null&&Em(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=vp(i,r,XC,null,null,o),vu._currentValue=f),bh(i,r),Zt(i,r,u,o),r.child;case 6:return i===null&&Ke&&((i=o=yt)&&(o=M1(o,r.pendingProps,Ci),o!==null?(r.stateNode=o,vn=r,yt=null,i=!0):i=!1),i||ua(r)),null;case 13:return gE(i,r,o);case 4:return rt(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=Eo(r,null,u,o):Zt(i,r,u,o),r.child;case 11:return lE(i,r,r.type,r.pendingProps,o);case 7:return Zt(i,r,r.pendingProps,o),r.child;case 8:return Zt(i,r,r.pendingProps.children,o),r.child;case 12:return Zt(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Bs(r,r.type,u.value),Zt(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ha(r),f=on(f),u=u(f),r.flags|=1,Zt(i,r,u,o),r.child;case 14:return uE(i,r,r.type,r.pendingProps,o);case 15:return cE(i,r,r.type,r.pendingProps,o);case 19:return yE(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=Ch(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=ss(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return hE(i,r,o);case 24:return ha(r),u=on(Lt),i===null?(f=cp(),f===null&&(f=at,m=lp(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},fp(r),Bs(r,Lt,f)):((i.lanes&o)!==0&&(dp(i,r),Xl(r,null,null,o),Wl()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Bs(r,Lt,u)):(u=m.cache,Bs(r,Lt,u),u!==f.cache&&op(r,[Lt],o,!0))),Zt(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function fs(i){i.flags|=4}function EE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!IT(r)){if(r=Xn.current,r!==null&&((ze&4194048)===ze?Ii!==null:(ze&62914560)!==ze&&(ze&536870912)===0||r!==Ii))throw $l=hp,iv;i.flags|=8192}}function Ih(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Tl():536870912,i.lanes|=r,wo|=r)}function su(i,r){if(!Ke)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function dt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function a1(i,r,o){var u=r.pendingProps;switch(ip(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(r),null;case 1:return dt(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),ls(Lt),mi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Hl(r)?fs(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Zy())),dt(r),null;case 26:return o=r.memoizedState,i===null?(fs(r),o!==null?(dt(r),EE(r,o)):(dt(r),r.flags&=-16777217)):o?o!==i.memoizedState?(fs(r),dt(r),EE(r,o)):(dt(r),r.flags&=-16777217):(i.memoizedProps!==u&&fs(r),dt(r),r.flags&=-16777217),null;case 27:Gi(r),o=we.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&fs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return dt(r),null}i=me.current,Hl(r)?Wy(r):(i=ET(f,u,o),r.stateNode=i,fs(r))}return dt(r),null;case 5:if(Gi(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&fs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return dt(r),null}if(i=me.current,Hl(r))Wy(r);else{switch(f=Hh(we.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[xt]=r,i[Ct]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(en(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&fs(r)}}return dt(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&fs(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=we.current,Hl(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=vn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[xt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||dT(i.nodeValue,o)),i||ua(r)}else i=Hh(i).createTextNode(u),i[xt]=r,r.stateNode=i}return dt(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=Hl(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[xt]=r}else Fl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;dt(r),f=!1}else f=Zy(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(cs(r),r):(cs(r),null)}if(cs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),Ih(r,r.updateQueue),dt(r),null;case 4:return mi(),i===null&&mm(r.stateNode.containerInfo),dt(r),null;case 10:return ls(r.type),dt(r),null;case 19:if(le(Vt),f=r.memoizedState,f===null)return dt(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)su(f,!1);else{if(vt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Ah(i),m!==null){for(r.flags|=128,su(f,!1),i=m.updateQueue,r.updateQueue=i,Ih(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)$y(o,i),o=o.sibling;return se(Vt,Vt.current&1|2),r.child}i=i.sibling}f.tail!==null&&Hn()>Dh&&(r.flags|=128,u=!0,su(f,!1),r.lanes=4194304)}else{if(!u)if(i=Ah(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,Ih(r,i),su(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Ke)return dt(r),null}else 2*Hn()-f.renderingStartTime>Dh&&o!==536870912&&(r.flags|=128,u=!0,su(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Hn(),r.sibling=null,i=Vt.current,se(Vt,u?i&1|2:i&1),r):(dt(r),null);case 22:case 23:return cs(r),_p(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(dt(r),r.subtreeFlags&6&&(r.flags|=8192)):dt(r),o=r.updateQueue,o!==null&&Ih(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&le(fa),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),ls(Lt),dt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function o1(i,r){switch(ip(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return ls(Lt),mi(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Gi(r),null;case 13:if(cs(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Fl()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return le(Vt),null;case 4:return mi(),null;case 10:return ls(r.type),null;case 22:case 23:return cs(r),_p(),i!==null&&le(fa),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return ls(Lt),null;case 25:return null;default:return null}}function TE(i,r){switch(ip(r),r.tag){case 3:ls(Lt),mi();break;case 26:case 27:case 5:Gi(r);break;case 4:mi();break;case 13:cs(r);break;case 19:le(Vt);break;case 10:ls(r.type);break;case 22:case 23:cs(r),_p(),i!==null&&le(fa);break;case 24:ls(Lt)}}function ru(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(A){st(r,r.return,A)}}function Ks(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,f=r;var C=o,H=A;try{H()}catch(Q){st(f,C,Q)}}}u=u.next}while(u!==m)}}catch(Q){st(r,r.return,Q)}}function SE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{uv(r,o)}catch(u){st(i,i.return,u)}}}function AE(i,r,o){o.props=pa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){st(i,r,u)}}function au(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){st(i,r,f)}}function Ni(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){st(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){st(i,r,f)}else o.current=null}function wE(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){st(i,i.return,f)}}function Gp(i,r,o){try{var u=i.stateNode;I1(u,i.type,o,r),u[Ct]=r}catch(f){st(i,i.return,f)}}function RE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&er(i.type)||i.tag===4}function Kp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||RE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&er(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Yp(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=zh));else if(u!==4&&(u===27&&er(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(Yp(i,r,o),i=i.sibling;i!==null;)Yp(i,r,o),i=i.sibling}function Nh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&er(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Nh(i,r,o),i=i.sibling;i!==null;)Nh(i,r,o),i=i.sibling}function bE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);en(r,u,o),r[xt]=i,r[Ct]=o}catch(m){st(i,i.return,m)}}var ds=!1,Rt=!1,$p=!1,CE=typeof WeakSet=="function"?WeakSet:Set,Gt=null;function l1(i,r){if(i=i.containerInfo,ym=Yh,i=Uy(i),Kd(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,A=-1,C=-1,H=0,Q=0,Z=i,j=null;t:for(;;){for(var q;Z!==o||f!==0&&Z.nodeType!==3||(A=E+f),Z!==m||u!==0&&Z.nodeType!==3||(C=E+u),Z.nodeType===3&&(E+=Z.nodeValue.length),(q=Z.firstChild)!==null;)j=Z,Z=q;for(;;){if(Z===i)break t;if(j===o&&++H===f&&(A=E),j===m&&++Q===u&&(C=E),(q=Z.nextSibling)!==null)break;Z=j,j=Z.parentNode}Z=q}o=A===-1||C===-1?null:{start:A,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(vm={focusedElem:i,selectionRange:o},Yh=!1,Gt=r;Gt!==null;)if(r=Gt,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,Gt=i;else for(;Gt!==null;){switch(r=Gt,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Se=pa(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(Se,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(_e){st(o,o.return,_e)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Sm(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Sm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,Gt=i;break}Gt=r.return}}function IE(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Ys(i,o),u&4&&ru(5,o);break;case 1:if(Ys(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){st(o,o.return,E)}else{var f=pa(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){st(o,o.return,E)}}u&64&&SE(o),u&512&&au(o,o.return);break;case 3:if(Ys(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{uv(i,r)}catch(E){st(o,o.return,E)}}break;case 27:r===null&&u&4&&bE(o);case 26:case 5:Ys(i,o),r===null&&u&4&&wE(o),u&512&&au(o,o.return);break;case 12:Ys(i,o);break;case 13:Ys(i,o),u&4&&DE(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=_1.bind(null,o),P1(i,o))));break;case 22:if(u=o.memoizedState!==null||ds,!u){r=r!==null&&r.memoizedState!==null||Rt,f=ds;var m=Rt;ds=u,(Rt=r)&&!m?$s(i,o,(o.subtreeFlags&8772)!==0):Ys(i,o),ds=f,Rt=m}break;case 30:break;default:Ys(i,o)}}function NE(i){var r=i.alternate;r!==null&&(i.alternate=null,NE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Ps(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var ft=null,wn=!1;function ps(i,r,o){for(o=o.child;o!==null;)OE(i,r,o),o=o.sibling}function OE(i,r,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(_t,o)}catch{}switch(o.tag){case 26:Rt||Ni(o,r),ps(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Rt||Ni(o,r);var u=ft,f=wn;er(o.type)&&(ft=o.stateNode,wn=!1),ps(i,r,o),mu(o.stateNode),ft=u,wn=f;break;case 5:Rt||Ni(o,r);case 6:if(u=ft,f=wn,ft=null,ps(i,r,o),ft=u,wn=f,ft!==null)if(wn)try{(ft.nodeType===9?ft.body:ft.nodeName==="HTML"?ft.ownerDocument.body:ft).removeChild(o.stateNode)}catch(m){st(o,r,m)}else try{ft.removeChild(o.stateNode)}catch(m){st(o,r,m)}break;case 18:ft!==null&&(wn?(i=ft,yT(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Au(i)):yT(ft,o.stateNode));break;case 4:u=ft,f=wn,ft=o.stateNode.containerInfo,wn=!0,ps(i,r,o),ft=u,wn=f;break;case 0:case 11:case 14:case 15:Rt||Ks(2,o,r),Rt||Ks(4,o,r),ps(i,r,o);break;case 1:Rt||(Ni(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&AE(o,r,u)),ps(i,r,o);break;case 21:ps(i,r,o);break;case 22:Rt=(u=Rt)||o.memoizedState!==null,ps(i,r,o),Rt=u;break;default:ps(i,r,o)}}function DE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Au(i)}catch(o){st(r,r.return,o)}}function u1(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new CE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new CE),r;default:throw Error(s(435,i.tag))}}function Qp(i,r){var o=u1(i);r.forEach(function(u){var f=y1.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function kn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,A=E;e:for(;A!==null;){switch(A.tag){case 27:if(er(A.type)){ft=A.stateNode,wn=!1;break e}break;case 5:ft=A.stateNode,wn=!1;break e;case 3:case 4:ft=A.stateNode.containerInfo,wn=!0;break e}A=A.return}if(ft===null)throw Error(s(160));OE(m,E,f),ft=null,wn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)kE(r,i),r=r.sibling}var li=null;function kE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:kn(r,i),xn(i),u&4&&(Ks(3,i,i.return),ru(3,i),Ks(5,i,i.return));break;case 1:kn(r,i),xn(i),u&512&&(Rt||o===null||Ni(o,o.return)),u&64&&ds&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=li;if(kn(r,i),xn(i),u&512&&(Rt||o===null||Ni(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[jr]||m[xt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),en(m,u,o),m[xt]=i,At(m),u=m;break e;case"link":var E=bT("link","href",f).get(u+(o.href||""));if(E){for(var A=0;A<E.length;A++)if(m=E[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(A,1);break t}}m=f.createElement(u),en(m,u,o),f.head.appendChild(m);break;case"meta":if(E=bT("meta","content",f).get(u+(o.content||""))){for(A=0;A<E.length;A++)if(m=E[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(A,1);break t}}m=f.createElement(u),en(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[xt]=i,At(m),u=m}i.stateNode=u}else CT(f,i.type,i.stateNode);else i.stateNode=RT(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?CT(f,i.type,i.stateNode):RT(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&Gp(i,i.memoizedProps,o.memoizedProps)}break;case 27:kn(r,i),xn(i),u&512&&(Rt||o===null||Ni(o,o.return)),o!==null&&u&4&&Gp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(kn(r,i),xn(i),u&512&&(Rt||o===null||Ni(o,o.return)),i.flags&32){f=i.stateNode;try{jn(f,"")}catch(q){st(i,i.return,q)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,Gp(i,f,o!==null?o.memoizedProps:f)),u&1024&&($p=!0);break;case 6:if(kn(r,i),xn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(q){st(i,i.return,q)}}break;case 3:if(qh=null,f=li,li=Fh(r.containerInfo),kn(r,i),li=f,xn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Au(r.containerInfo)}catch(q){st(i,i.return,q)}$p&&($p=!1,xE(i));break;case 4:u=li,li=Fh(i.stateNode.containerInfo),kn(r,i),xn(i),li=u;break;case 12:kn(r,i),xn(i);break;case 13:kn(r,i),xn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(tm=Hn()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Qp(i,u)));break;case 22:f=i.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,H=ds,Q=Rt;if(ds=H||f,Rt=Q||C,kn(r,i),Rt=Q,ds=H,xn(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||C||ds||Rt||ma(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){C=o=r;try{if(m=C.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=C.stateNode;var Z=C.memoizedProps.style,j=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;A.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(q){st(C,C.return,q)}}}else if(r.tag===6){if(o===null){C=r;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(q){st(C,C.return,q)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Qp(i,o))));break;case 19:kn(r,i),xn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Qp(i,u)));break;case 30:break;case 21:break;default:kn(r,i),xn(i)}}function xn(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(RE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=Kp(i);Nh(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(jn(E,""),o.flags&=-33);var A=Kp(i);Nh(i,A,E);break;case 3:case 4:var C=o.stateNode.containerInfo,H=Kp(i);Yp(i,H,C);break;default:throw Error(s(161))}}catch(Q){st(i,i.return,Q)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function xE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;xE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function Ys(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)IE(i,r.alternate,r),r=r.sibling}function ma(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Ks(4,r,r.return),ma(r);break;case 1:Ni(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&AE(r,r.return,o),ma(r);break;case 27:mu(r.stateNode);case 26:case 5:Ni(r,r.return),ma(r);break;case 22:r.memoizedState===null&&ma(r);break;case 30:ma(r);break;default:ma(r)}i=i.sibling}}function $s(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:$s(f,m,o),ru(4,m);break;case 1:if($s(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(H){st(u,u.return,H)}if(u=m,f=u.updateQueue,f!==null){var A=u.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)lv(C[f],A)}catch(H){st(u,u.return,H)}}o&&E&64&&SE(m),au(m,m.return);break;case 27:bE(m);case 26:case 5:$s(f,m,o),o&&u===null&&E&4&&wE(m),au(m,m.return);break;case 12:$s(f,m,o);break;case 13:$s(f,m,o),o&&E&4&&DE(f,m);break;case 22:m.memoizedState===null&&$s(f,m,o),au(m,m.return);break;case 30:break;default:$s(f,m,o)}r=r.sibling}}function Wp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&Gl(o))}function Xp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Gl(i))}function Oi(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)ME(i,r,o,u),r=r.sibling}function ME(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Oi(i,r,o,u),f&2048&&ru(9,r);break;case 1:Oi(i,r,o,u);break;case 3:Oi(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Gl(i)));break;case 12:if(f&2048){Oi(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,A=m.onPostCommit;typeof A=="function"&&A(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){st(r,r.return,C)}}else Oi(i,r,o,u);break;case 13:Oi(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Oi(i,r,o,u):ou(i,r):m._visibility&2?Oi(i,r,o,u):(m._visibility|=2,To(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&Wp(E,r);break;case 24:Oi(i,r,o,u),f&2048&&Xp(r.alternate,r);break;default:Oi(i,r,o,u)}}function To(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,A=o,C=u,H=E.flags;switch(E.tag){case 0:case 11:case 15:To(m,E,A,C,f),ru(8,E);break;case 23:break;case 22:var Q=E.stateNode;E.memoizedState!==null?Q._visibility&2?To(m,E,A,C,f):ou(m,E):(Q._visibility|=2,To(m,E,A,C,f)),f&&H&2048&&Wp(E.alternate,E);break;case 24:To(m,E,A,C,f),f&&H&2048&&Xp(E.alternate,E);break;default:To(m,E,A,C,f)}r=r.sibling}}function ou(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:ou(o,u),f&2048&&Wp(u.alternate,u);break;case 24:ou(o,u),f&2048&&Xp(u.alternate,u);break;default:ou(o,u)}r=r.sibling}}var lu=8192;function So(i){if(i.subtreeFlags&lu)for(i=i.child;i!==null;)PE(i),i=i.sibling}function PE(i){switch(i.tag){case 26:So(i),i.flags&lu&&i.memoizedState!==null&&$1(li,i.memoizedState,i.memoizedProps);break;case 5:So(i);break;case 3:case 4:var r=li;li=Fh(i.stateNode.containerInfo),So(i),li=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=lu,lu=16777216,So(i),lu=r):So(i));break;default:So(i)}}function LE(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function uu(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Gt=u,UE(u,i)}LE(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)VE(i),i=i.sibling}function VE(i){switch(i.tag){case 0:case 11:case 15:uu(i),i.flags&2048&&Ks(9,i,i.return);break;case 3:uu(i);break;case 12:uu(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Oh(i)):uu(i);break;default:uu(i)}}function Oh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Gt=u,UE(u,i)}LE(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Ks(8,r,r.return),Oh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Oh(r));break;default:Oh(r)}i=i.sibling}}function UE(i,r){for(;Gt!==null;){var o=Gt;switch(o.tag){case 0:case 11:case 15:Ks(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Gl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Gt=u;else e:for(o=i;Gt!==null;){u=Gt;var f=u.sibling,m=u.return;if(NE(u),u===o){Gt=null;break e}if(f!==null){f.return=m,Gt=f;break e}Gt=m}}}var c1={getCacheForType:function(i){var r=on(Lt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},h1=typeof WeakMap=="function"?WeakMap:Map,Xe=0,at=null,ke=null,ze=0,Ze=0,Mn=null,Qs=!1,Ao=!1,Zp=!1,ms=0,vt=0,Ws=0,ga=0,Jp=0,Zn=0,wo=0,cu=null,Rn=null,em=!1,tm=0,Dh=1/0,kh=null,Xs=null,Jt=0,Zs=null,Ro=null,bo=0,nm=0,im=null,BE=null,hu=0,sm=null;function Pn(){if((Xe&2)!==0&&ze!==0)return ze&-ze;if($.T!==null){var i=fo;return i!==0?i:hm()}return xs()}function zE(){Zn===0&&(Zn=(ze&536870912)===0||Ke?El():536870912);var i=Xn.current;return i!==null&&(i.flags|=32),Zn}function Ln(i,r,o){(i===at&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)&&(Co(i,0),Js(i,ze,Zn,!1)),Yi(i,o),((Xe&2)===0||i!==at)&&(i===at&&((Xe&2)===0&&(ga|=o),vt===4&&Js(i,ze,Zn,!1)),Di(i))}function HE(i,r,o){if((Xe&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Fr(i,r),f=u?p1(i,r):om(i,r,!0),m=u;do{if(f===0){Ao&&!u&&Js(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!f1(o)){f=om(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var A=i;f=cu;var C=A.current.memoizedState.isDehydrated;if(C&&(Co(A,E).flags|=256),E=om(A,E,!1),E!==2){if(Zp&&!C){A.errorRecoveryDisabledLanes|=m,ga|=m,f=4;break e}m=Rn,Rn=f,m!==null&&(Rn===null?Rn=m:Rn.push.apply(Rn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){Co(i,0),Js(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Js(u,r,Zn,!Qs);break e;case 2:Rn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=tm+300-Hn(),10<f)){if(Js(u,r,Zn,!Qs),ja(u,0,!0)!==0)break e;u.timeoutHandle=gT(FE.bind(null,u,o,Rn,kh,em,r,Zn,ga,wo,Qs,m,2,-0,0),f);break e}FE(u,o,Rn,kh,em,r,Zn,ga,wo,Qs,m,0,-0,0)}}break}while(!0);Di(i)}function FE(i,r,o,u,f,m,E,A,C,H,Q,Z,j,q){if(i.timeoutHandle=-1,Z=r.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(yu={stylesheets:null,count:0,unsuspend:Y1},PE(r),Z=Q1(),Z!==null)){i.cancelPendingCommit=Z(QE.bind(null,i,r,m,o,u,f,E,A,C,Q,1,j,q)),Js(i,m,E,!H);return}QE(i,r,m,o,u,f,E,A,C)}function f1(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!On(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Js(i,r,o,u){r&=~Jp,r&=~ga,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-an(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&gi(i,o,r)}function xh(){return(Xe&6)===0?(fu(0),!1):!0}function rm(){if(ke!==null){if(Ze===0)var i=ke.return;else i=ke,os=ca=null,Sp(i),vo=null,nu=0,i=ke;for(;i!==null;)TE(i.alternate,i),i=i.return;ke=null}}function Co(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,O1(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),rm(),at=i,ke=o=ss(i.current,null),ze=r,Ze=0,Mn=null,Qs=!1,Ao=Fr(i,r),Zp=!1,wo=Zn=Jp=ga=Ws=vt=0,Rn=cu=null,em=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-an(u),m=1<<f;r|=i[f],u&=~m}return ms=r,th(),o}function jE(i,r){Ie=null,$.H=Eh,r===Yl||r===ch?(r=av(),Ze=3):r===iv?(r=av(),Ze=4):Ze=r===oE?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Mn=r,ke===null&&(vt=1,Rh(i,Yn(r,i.current)))}function qE(){var i=$.H;return $.H=Eh,i===null?Eh:i}function GE(){var i=$.A;return $.A=c1,i}function am(){vt=4,Qs||(ze&4194048)!==ze&&Xn.current!==null||(Ao=!0),(Ws&134217727)===0&&(ga&134217727)===0||at===null||Js(at,ze,Zn,!1)}function om(i,r,o){var u=Xe;Xe|=2;var f=qE(),m=GE();(at!==i||ze!==r)&&(kh=null,Co(i,r)),r=!1;var E=vt;e:do try{if(Ze!==0&&ke!==null){var A=ke,C=Mn;switch(Ze){case 8:rm(),E=6;break e;case 3:case 2:case 9:case 6:Xn.current===null&&(r=!0);var H=Ze;if(Ze=0,Mn=null,Io(i,A,C,H),o&&Ao){E=0;break e}break;default:H=Ze,Ze=0,Mn=null,Io(i,A,C,H)}}d1(),E=vt;break}catch(Q){jE(i,Q)}while(!0);return r&&i.shellSuspendCounter++,os=ca=null,Xe=u,$.H=f,$.A=m,ke===null&&(at=null,ze=0,th()),E}function d1(){for(;ke!==null;)KE(ke)}function p1(i,r){var o=Xe;Xe|=2;var u=qE(),f=GE();at!==i||ze!==r?(kh=null,Dh=Hn()+500,Co(i,r)):Ao=Fr(i,r);e:do try{if(Ze!==0&&ke!==null){r=ke;var m=Mn;t:switch(Ze){case 1:Ze=0,Mn=null,Io(i,r,m,1);break;case 2:case 9:if(sv(m)){Ze=0,Mn=null,YE(r);break}r=function(){Ze!==2&&Ze!==9||at!==i||(Ze=7),Di(i)},m.then(r,r);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:sv(m)?(Ze=0,Mn=null,YE(r)):(Ze=0,Mn=null,Io(i,r,m,7));break;case 5:var E=null;switch(ke.tag){case 26:E=ke.memoizedState;case 5:case 27:var A=ke;if(!E||IT(E)){Ze=0,Mn=null;var C=A.sibling;if(C!==null)ke=C;else{var H=A.return;H!==null?(ke=H,Mh(H)):ke=null}break t}}Ze=0,Mn=null,Io(i,r,m,5);break;case 6:Ze=0,Mn=null,Io(i,r,m,6);break;case 8:rm(),vt=6;break e;default:throw Error(s(462))}}m1();break}catch(Q){jE(i,Q)}while(!0);return os=ca=null,$.H=u,$.A=f,Xe=o,ke!==null?0:(at=null,ze=0,th(),vt)}function m1(){for(;ke!==null&&!gl();)KE(ke)}function KE(i){var r=vE(i.alternate,i,ms);i.memoizedProps=i.pendingProps,r===null?Mh(i):ke=r}function YE(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=dE(o,r,r.pendingProps,r.type,void 0,ze);break;case 11:r=dE(o,r,r.pendingProps,r.type.render,r.ref,ze);break;case 5:Sp(r);default:TE(o,r),r=ke=$y(r,ms),r=vE(o,r,ms)}i.memoizedProps=i.pendingProps,r===null?Mh(i):ke=r}function Io(i,r,o,u){os=ca=null,Sp(r),vo=null,nu=0;var f=r.return;try{if(s1(i,f,r,o,ze)){vt=1,Rh(i,Yn(o,i.current)),ke=null;return}}catch(m){if(f!==null)throw ke=f,m;vt=1,Rh(i,Yn(o,i.current)),ke=null;return}r.flags&32768?(Ke||u===1?i=!0:Ao||(ze&536870912)!==0?i=!1:(Qs=i=!0,(u===2||u===9||u===3||u===6)&&(u=Xn.current,u!==null&&u.tag===13&&(u.flags|=16384))),$E(r,i)):Mh(r)}function Mh(i){var r=i;do{if((r.flags&32768)!==0){$E(r,Qs);return}i=r.return;var o=a1(r.alternate,r,ms);if(o!==null){ke=o;return}if(r=r.sibling,r!==null){ke=r;return}ke=r=i}while(r!==null);vt===0&&(vt=5)}function $E(i,r){do{var o=o1(i.alternate,i);if(o!==null){o.flags&=32767,ke=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){ke=i;return}ke=i=o}while(i!==null);vt=6,ke=null}function QE(i,r,o,u,f,m,E,A,C){i.cancelPendingCommit=null;do Ph();while(Jt!==0);if((Xe&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=Xd,Sl(i,o,m,E,A,C),i===at&&(ke=at=null,ze=0),Ro=r,Zs=i,bo=o,nm=m,im=f,BE=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,v1(Ur,function(){return eT(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=$.T,$.T=null,f=ie.p,ie.p=2,E=Xe,Xe|=4;try{l1(i,r,o)}finally{Xe=E,ie.p=f,$.T=u}}Jt=1,WE(),XE(),ZE()}}function WE(){if(Jt===1){Jt=0;var i=Zs,r=Ro,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=$.T,$.T=null;var u=ie.p;ie.p=2;var f=Xe;Xe|=4;try{kE(r,i);var m=vm,E=Uy(i.containerInfo),A=m.focusedElem,C=m.selectionRange;if(E!==A&&A&&A.ownerDocument&&Vy(A.ownerDocument.documentElement,A)){if(C!==null&&Kd(A)){var H=C.start,Q=C.end;if(Q===void 0&&(Q=H),"selectionStart"in A)A.selectionStart=H,A.selectionEnd=Math.min(Q,A.value.length);else{var Z=A.ownerDocument||document,j=Z&&Z.defaultView||window;if(j.getSelection){var q=j.getSelection(),Se=A.textContent.length,_e=Math.min(C.start,Se),nt=C.end===void 0?_e:Math.min(C.end,Se);!q.extend&&_e>nt&&(E=nt,nt=_e,_e=E);var L=Ly(A,_e),M=Ly(A,nt);if(L&&M&&(q.rangeCount!==1||q.anchorNode!==L.node||q.anchorOffset!==L.offset||q.focusNode!==M.node||q.focusOffset!==M.offset)){var z=Z.createRange();z.setStart(L.node,L.offset),q.removeAllRanges(),_e>nt?(q.addRange(z),q.extend(M.node,M.offset)):(z.setEnd(M.node,M.offset),q.addRange(z))}}}}for(Z=[],q=A;q=q.parentNode;)q.nodeType===1&&Z.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Z.length;A++){var X=Z[A];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Yh=!!ym,vm=ym=null}finally{Xe=f,ie.p=u,$.T=o}}i.current=r,Jt=2}}function XE(){if(Jt===2){Jt=0;var i=Zs,r=Ro,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=$.T,$.T=null;var u=ie.p;ie.p=2;var f=Xe;Xe|=4;try{IE(i,r.alternate,r)}finally{Xe=f,ie.p=u,$.T=o}}Jt=3}}function ZE(){if(Jt===4||Jt===3){Jt=0,Oc();var i=Zs,r=Ro,o=bo,u=BE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Jt=5:(Jt=0,Ro=Zs=null,JE(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(Xs=null),qa(o),r=r.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(_t,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=$.T,f=ie.p,ie.p=2,$.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var A=u[E];m(A.value,{componentStack:A.stack})}}finally{$.T=r,ie.p=f}}(bo&3)!==0&&Ph(),Di(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===sm?hu++:(hu=0,sm=i):hu=0,fu(0)}}function JE(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,Gl(r)))}function Ph(i){return WE(),XE(),ZE(),eT()}function eT(){if(Jt!==5)return!1;var i=Zs,r=nm;nm=0;var o=qa(bo),u=$.T,f=ie.p;try{ie.p=32>o?32:o,$.T=null,o=im,im=null;var m=Zs,E=bo;if(Jt=0,Ro=Zs=null,bo=0,(Xe&6)!==0)throw Error(s(331));var A=Xe;if(Xe|=4,VE(m.current),ME(m,m.current,E,o),Xe=A,fu(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(_t,m)}catch{}return!0}finally{ie.p=f,$.T=u,JE(i,r)}}function tT(i,r,o){r=Yn(o,r),r=Lp(i.stateNode,r,2),i=Fs(i,r,2),i!==null&&(Yi(i,2),Di(i))}function st(i,r,o){if(i.tag===3)tT(i,i,o);else for(;r!==null;){if(r.tag===3){tT(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Xs===null||!Xs.has(u))){i=Yn(o,i),o=rE(2),u=Fs(r,o,2),u!==null&&(aE(o,u,r,i),Yi(u,2),Di(u));break}}r=r.return}}function lm(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new h1;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(Zp=!0,f.add(o),i=g1.bind(null,i,r,o),r.then(i,i))}function g1(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,at===i&&(ze&o)===o&&(vt===4||vt===3&&(ze&62914560)===ze&&300>Hn()-tm?(Xe&2)===0&&Co(i,0):Jp|=o,wo===ze&&(wo=0)),Di(i)}function nT(i,r){r===0&&(r=Tl()),i=lo(i,r),i!==null&&(Yi(i,r),Di(i))}function _1(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),nT(i,o)}function y1(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),nT(i,o)}function v1(i,r){return Lr(i,r)}var Lh=null,No=null,um=!1,Vh=!1,cm=!1,_a=0;function Di(i){i!==No&&i.next===null&&(No===null?Lh=No=i:No=No.next=i),Vh=!0,um||(um=!0,T1())}function fu(i,r){if(!cm&&Vh){cm=!0;do for(var o=!1,u=Lh;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,A=u.pingedLanes;m=(1<<31-an(42|i)+1)-1,m&=f&~(E&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,aT(u,m))}else m=ze,m=ja(u,u===at?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Fr(u,m)||(o=!0,aT(u,m));u=u.next}while(o);cm=!1}}function E1(){iT()}function iT(){Vh=um=!1;var i=0;_a!==0&&(N1()&&(i=_a),_a=0);for(var r=Hn(),o=null,u=Lh;u!==null;){var f=u.next,m=sT(u,r);m===0?(u.next=null,o===null?Lh=f:o.next=f,f===null&&(No=o)):(o=u,(i!==0||(m&3)!==0)&&(Vh=!0)),u=f}fu(i)}function sT(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-an(m),A=1<<E,C=f[E];C===-1?((A&o)===0||(A&u)!==0)&&(f[E]=vl(A,r)):C<=r&&(i.expiredLanes|=A),m&=~A}if(r=at,o=ze,o=ja(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&Vr(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Fr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&Vr(u),qa(o)){case 2:case 8:o=Ha;break;case 32:o=Ur;break;case 268435456:o=Fa;break;default:o=Ur}return u=rT.bind(null,i),o=Lr(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&Vr(u),i.callbackPriority=2,i.callbackNode=null,2}function rT(i,r){if(Jt!==0&&Jt!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Ph()&&i.callbackNode!==o)return null;var u=ze;return u=ja(i,i===at?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(HE(i,u,r),sT(i,Hn()),i.callbackNode!=null&&i.callbackNode===o?rT.bind(null,i):null)}function aT(i,r){if(Ph())return null;HE(i,r,!0)}function T1(){D1(function(){(Xe&6)!==0?Lr(_l,E1):iT()})}function hm(){return _a===0&&(_a=El()),_a}function oT(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Wa(""+i)}function lT(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function S1(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=oT((f[Ct]||null).action),E=u.submitter;E&&(r=(r=E[Ct]||null)?oT(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var A=new Xa("action","action",null,u,f);i.push({event:A,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(_a!==0){var C=E?lT(f,E):new FormData(f);Dp(o,{pending:!0,data:C,method:f.method,action:m},null,C)}}else typeof m=="function"&&(A.preventDefault(),C=E?lT(f,E):new FormData(f),Dp(o,{pending:!0,data:C,method:f.method,action:m},m,C))},currentTarget:f}]})}}for(var fm=0;fm<Wd.length;fm++){var dm=Wd[fm],A1=dm.toLowerCase(),w1=dm[0].toUpperCase()+dm.slice(1);oi(A1,"on"+w1)}oi(Hy,"onAnimationEnd"),oi(Fy,"onAnimationIteration"),oi(jy,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(HC,"onTransitionRun"),oi(FC,"onTransitionStart"),oi(jC,"onTransitionCancel"),oi(qy,"onTransitionEnd"),Qi("onMouseEnter",["mouseout","mouseover"]),Qi("onMouseLeave",["mouseout","mouseover"]),Qi("onPointerEnter",["pointerout","pointerover"]),Qi("onPointerLeave",["pointerout","pointerover"]),ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ri("onBeforeInput",["compositionend","keypress","textInput","paste"]),ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(du));function uT(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var A=u[E],C=A.instance,H=A.currentTarget;if(A=A.listener,C!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=H;try{m(f)}catch(Q){wh(Q)}f.currentTarget=null,m=C}else for(E=0;E<u.length;E++){if(A=u[E],C=A.instance,H=A.currentTarget,A=A.listener,C!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=H;try{m(f)}catch(Q){wh(Q)}f.currentTarget=null,m=C}}}}function xe(i,r){var o=r[wl];o===void 0&&(o=r[wl]=new Set);var u=i+"__bubble";o.has(u)||(cT(r,i,2,!1),o.add(u))}function pm(i,r,o){var u=0;r&&(u|=4),cT(o,i,u,r)}var Uh="_reactListening"+Math.random().toString(36).slice(2);function mm(i){if(!i[Uh]){i[Uh]=!0,Rl.forEach(function(o){o!=="selectionchange"&&(R1.has(o)||pm(o,!1,i),pm(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Uh]||(r[Uh]=!0,pm("selectionchange",!1,r))}}function cT(i,r,o,u){switch(MT(r)){case 2:var f=Z1;break;case 8:f=J1;break;default:f=Nm}o=f.bind(null,r,o,i),f=void 0,!Gn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function gm(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var A=u.stateNode.containerInfo;if(A===f)break;if(E===4)for(E=u.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;A!==null;){if(E=$i(A),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){u=m=E;continue e}A=A.parentNode}}u=u.return}zc(function(){var H=m,Q=qn(o),Z=[];e:{var j=Gy.get(i);if(j!==void 0){var q=Xa,Se=i;switch(i){case"keypress":if(Si(o)===0)break e;case"keydown":case"keyup":q=io;break;case"focusin":Se="focus",q=eo;break;case"focusout":Se="blur",q=eo;break;case"beforeblur":case"afterblur":q=eo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Kn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=$c;break;case Hy:case Fy:case jy:q=to;break;case qy:q=Wc;break;case"scroll":case"scrollend":q=Hc;break;case"wheel":q=so;break;case"copy":case"cut":case"paste":q=no;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Vl;break;case"toggle":case"beforetoggle":q=Zc}var _e=(r&4)!==0,nt=!_e&&(i==="scroll"||i==="scrollend"),L=_e?j!==null?j+"Capture":null:j;_e=[];for(var M=H,z;M!==null;){var X=M;if(z=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||z===null||L===null||(X=Wr(M,L),X!=null&&_e.push(pu(M,X,z))),nt)break;M=M.return}0<_e.length&&(j=new q(j,Se,null,o,Q),Z.push({event:j,listeners:_e}))}}if((r&7)===0){e:{if(j=i==="mouseover"||i==="pointerover",q=i==="mouseout"||i==="pointerout",j&&o!==Zi&&(Se=o.relatedTarget||o.fromElement)&&($i(Se)||Se[Fn]))break e;if((q||j)&&(j=Q.window===Q?Q:(j=Q.ownerDocument)?j.defaultView||j.parentWindow:window,q?(Se=o.relatedTarget||o.toElement,q=H,Se=Se?$i(Se):null,Se!==null&&(nt=l(Se),_e=Se.tag,Se!==nt||_e!==5&&_e!==27&&_e!==6)&&(Se=null)):(q=null,Se=H),q!==Se)){if(_e=Kn,X="onMouseLeave",L="onMouseEnter",M="mouse",(i==="pointerout"||i==="pointerover")&&(_e=Vl,X="onPointerLeave",L="onPointerEnter",M="pointer"),nt=q==null?j:yi(q),z=Se==null?j:yi(Se),j=new _e(X,M+"leave",q,o,Q),j.target=nt,j.relatedTarget=z,X=null,$i(Q)===H&&(_e=new _e(L,M+"enter",Se,o,Q),_e.target=z,_e.relatedTarget=nt,X=_e),nt=X,q&&Se)t:{for(_e=q,L=Se,M=0,z=_e;z;z=Oo(z))M++;for(z=0,X=L;X;X=Oo(X))z++;for(;0<M-z;)_e=Oo(_e),M--;for(;0<z-M;)L=Oo(L),z--;for(;M--;){if(_e===L||L!==null&&_e===L.alternate)break t;_e=Oo(_e),L=Oo(L)}_e=null}else _e=null;q!==null&&hT(Z,j,q,_e,!1),Se!==null&&nt!==null&&hT(Z,nt,Se,_e,!0)}}e:{if(j=H?yi(H):window,q=j.nodeName&&j.nodeName.toLowerCase(),q==="select"||q==="input"&&j.type==="file")var fe=Oy;else if(Pt(j))if(Dy)fe=UC;else{fe=LC;var De=PC}else q=j.nodeName,!q||q.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?H&&Ol(H.elementType)&&(fe=Oy):fe=VC;if(fe&&(fe=fe(i,H))){is(Z,fe,o,Q);break e}De&&De(i,j,H),i==="focusout"&&H&&j.type==="number"&&H.memoizedProps.value!=null&&Vs(j,"number",j.value)}switch(De=H?yi(H):window,i){case"focusin":(Pt(De)||De.contentEditable==="true")&&(ro=De,Yd=H,zl=null);break;case"focusout":zl=Yd=ro=null;break;case"mousedown":$d=!0;break;case"contextmenu":case"mouseup":case"dragend":$d=!1,By(Z,o,Q);break;case"selectionchange":if(zC)break;case"keydown":case"keyup":By(Z,o,Q)}var pe;if(Ri)e:{switch(i){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Ue?G(i,o)&&(ve="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(ve="onCompositionStart");ve&&(v&&o.locale!=="ko"&&(Ue||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ue&&(pe=kl()):(Ti=Q,Us="value"in Ti?Ti.value:Ti.textContent,Ue=!0)),De=Bh(H,ve),0<De.length&&(ve=new Pl(ve,i,null,o,Q),Z.push({event:ve,listeners:De}),pe?ve.data=pe:(pe=ae(o),pe!==null&&(ve.data=pe)))),(pe=_?Mt(i,o):Be(i,o))&&(ve=Bh(H,"onBeforeInput"),0<ve.length&&(De=new Pl("onBeforeInput","beforeinput",null,o,Q),Z.push({event:De,listeners:ve}),De.data=pe)),S1(Z,i,H,o,Q)}uT(Z,r)})}function pu(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Bh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Wr(i,o),f!=null&&u.unshift(pu(i,f,m)),f=Wr(i,r),f!=null&&u.push(pu(i,f,m))),i.tag===3)return u;i=i.return}return[]}function Oo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function hT(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var A=o,C=A.alternate,H=A.stateNode;if(A=A.tag,C!==null&&C===u)break;A!==5&&A!==26&&A!==27||H===null||(C=H,f?(H=Wr(o,m),H!=null&&E.unshift(pu(o,H,C))):f||(H=Wr(o,m),H!=null&&E.push(pu(o,H,C)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var b1=/\r\n?/g,C1=/\u0000|\uFFFD/g;function fT(i){return(typeof i=="string"?i:""+i).replace(b1,`
`).replace(C1,"")}function dT(i,r){return r=fT(r),fT(i)===r}function zh(){}function tt(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||jn(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&jn(i,""+u);break;case"className":vi(i,"class",u);break;case"tabIndex":vi(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":vi(i,o,u);break;case"style":Nl(i,u,m);break;case"data":if(r!=="object"){vi(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Wa(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&tt(i,r,"name",f.name,f,null),tt(i,r,"formEncType",f.formEncType,f,null),tt(i,r,"formMethod",f.formMethod,f,null),tt(i,r,"formTarget",f.formTarget,f,null)):(tt(i,r,"encType",f.encType,f,null),tt(i,r,"method",f.method,f,null),tt(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Wa(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=zh);break;case"onScroll":u!=null&&xe("scroll",i);break;case"onScrollEnd":u!=null&&xe("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=Wa(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":xe("beforetoggle",i),xe("toggle",i),Ls(i,"popover",u);break;case"xlinkActuate":Wt(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Wt(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Wt(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Wt(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Wt(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Wt(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Wt(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Wt(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Wt(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ls(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=zd.get(o)||o,Ls(i,o,u))}}function _m(i,r,o,u,f,m){switch(o){case"style":Nl(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?jn(i,u):(typeof u=="number"||typeof u=="bigint")&&jn(i,""+u);break;case"onScroll":u!=null&&xe("scroll",i);break;case"onScrollEnd":u!=null&&xe("scrollend",i);break;case"onClick":u!=null&&(i.onclick=zh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ga.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Ct]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):Ls(i,o,u)}}}function en(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",i),xe("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:tt(i,r,m,E,o,null)}}f&&tt(i,r,"srcSet",o.srcSet,o,null),u&&tt(i,r,"src",o.src,o,null);return;case"input":xe("invalid",i);var A=m=E=f=null,C=null,H=null;for(u in o)if(o.hasOwnProperty(u)){var Q=o[u];if(Q!=null)switch(u){case"name":f=Q;break;case"type":E=Q;break;case"checked":C=Q;break;case"defaultChecked":H=Q;break;case"value":m=Q;break;case"defaultValue":A=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,r));break;default:tt(i,r,u,Q,o,null)}}Yr(i,m,A,C,H,E,f,!1),Qa(i);return;case"select":xe("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":E=A;break;case"multiple":u=A;default:tt(i,r,f,A,o,null)}r=m,o=E,i.multiple=!!u,r!=null?Xi(i,!!u,r,!1):o!=null&&Xi(i,!!u,o,!0);return;case"textarea":xe("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(A=o[E],A!=null))switch(E){case"value":u=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:tt(i,r,E,A,o,null)}$r(i,u,f,m),Qa(i);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:tt(i,r,C,u,o,null)}return;case"dialog":xe("beforetoggle",i),xe("toggle",i),xe("cancel",i),xe("close",i);break;case"iframe":case"object":xe("load",i);break;case"video":case"audio":for(u=0;u<du.length;u++)xe(du[u],i);break;case"image":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"embed":case"source":case"link":xe("error",i),xe("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in o)if(o.hasOwnProperty(H)&&(u=o[H],u!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:tt(i,r,H,u,o,null)}return;default:if(Ol(r)){for(Q in o)o.hasOwnProperty(Q)&&(u=o[Q],u!==void 0&&_m(i,r,Q,u,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(u=o[A],u!=null&&tt(i,r,A,u,o,null))}function I1(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,A=null,C=null,H=null,Q=null;for(q in o){var Z=o[q];if(o.hasOwnProperty(q)&&Z!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":C=Z;default:u.hasOwnProperty(q)||tt(i,r,q,null,u,Z)}}for(var j in u){var q=u[j];if(Z=o[j],u.hasOwnProperty(j)&&(q!=null||Z!=null))switch(j){case"type":m=q;break;case"name":f=q;break;case"checked":H=q;break;case"defaultChecked":Q=q;break;case"value":E=q;break;case"defaultValue":A=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:q!==Z&&tt(i,r,j,q,u,Z)}}Nn(i,E,A,C,H,Q,m,f);return;case"select":q=E=A=j=null;for(m in o)if(C=o[m],o.hasOwnProperty(m)&&C!=null)switch(m){case"value":break;case"multiple":q=C;default:u.hasOwnProperty(m)||tt(i,r,m,null,u,C)}for(f in u)if(m=u[f],C=o[f],u.hasOwnProperty(f)&&(m!=null||C!=null))switch(f){case"value":j=m;break;case"defaultValue":A=m;break;case"multiple":E=m;default:m!==C&&tt(i,r,f,m,u,C)}r=A,o=E,u=q,j!=null?Xi(i,!!o,j,!1):!!u!=!!o&&(r!=null?Xi(i,!!o,r,!0):Xi(i,!!o,o?[]:"",!1));return;case"textarea":q=j=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!u.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:tt(i,r,A,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":j=f;break;case"defaultValue":q=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&tt(i,r,E,f,u,m)}Je(i,j,q);return;case"option":for(var Se in o)if(j=o[Se],o.hasOwnProperty(Se)&&j!=null&&!u.hasOwnProperty(Se))switch(Se){case"selected":i.selected=!1;break;default:tt(i,r,Se,null,u,j)}for(C in u)if(j=u[C],q=o[C],u.hasOwnProperty(C)&&j!==q&&(j!=null||q!=null))switch(C){case"selected":i.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:tt(i,r,C,j,u,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in o)j=o[_e],o.hasOwnProperty(_e)&&j!=null&&!u.hasOwnProperty(_e)&&tt(i,r,_e,null,u,j);for(H in u)if(j=u[H],q=o[H],u.hasOwnProperty(H)&&j!==q&&(j!=null||q!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,r));break;default:tt(i,r,H,j,u,q)}return;default:if(Ol(r)){for(var nt in o)j=o[nt],o.hasOwnProperty(nt)&&j!==void 0&&!u.hasOwnProperty(nt)&&_m(i,r,nt,void 0,u,j);for(Q in u)j=u[Q],q=o[Q],!u.hasOwnProperty(Q)||j===q||j===void 0&&q===void 0||_m(i,r,Q,j,u,q);return}}for(var L in o)j=o[L],o.hasOwnProperty(L)&&j!=null&&!u.hasOwnProperty(L)&&tt(i,r,L,null,u,j);for(Z in u)j=u[Z],q=o[Z],!u.hasOwnProperty(Z)||j===q||j==null&&q==null||tt(i,r,Z,j,u,q)}var ym=null,vm=null;function Hh(i){return i.nodeType===9?i:i.ownerDocument}function pT(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mT(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Em(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Tm=null;function N1(){var i=window.event;return i&&i.type==="popstate"?i===Tm?!1:(Tm=i,!0):(Tm=null,!1)}var gT=typeof setTimeout=="function"?setTimeout:void 0,O1=typeof clearTimeout=="function"?clearTimeout:void 0,_T=typeof Promise=="function"?Promise:void 0,D1=typeof queueMicrotask=="function"?queueMicrotask:typeof _T<"u"?function(i){return _T.resolve(null).then(i).catch(k1)}:gT;function k1(i){setTimeout(function(){throw i})}function er(i){return i==="head"}function yT(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&mu(E.documentElement),o&2&&mu(E.body),o&4)for(o=E.head,mu(o),E=o.firstChild;E;){var A=E.nextSibling,C=E.nodeName;E[jr]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=A}}if(f===0){i.removeChild(m),Au(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Au(r)}function Sm(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Sm(o),Ps(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function x1(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[jr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=ui(i.nextSibling),i===null)break}return null}function M1(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=ui(i.nextSibling),i===null))return null;return i}function Am(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function P1(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function ui(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var wm=null;function vT(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function ET(i,r,o){switch(r=Hh(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function mu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Ps(i)}var Jn=new Map,TT=new Set;function Fh(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var gs=ie.d;ie.d={f:L1,r:V1,D:U1,C:B1,L:z1,m:H1,X:j1,S:F1,M:q1};function L1(){var i=gs.f(),r=xh();return i||r}function V1(i){var r=_i(i);r!==null&&r.tag===5&&r.type==="form"?Hv(r):gs.r(i)}var Do=typeof document>"u"?null:document;function ST(i,r,o){var u=Do;if(u&&typeof r=="string"&&r){var f=It(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),TT.has(f)||(TT.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),en(r,"link",i),At(r),u.head.appendChild(r)))}}function U1(i){gs.D(i),ST("dns-prefetch",i,null)}function B1(i,r){gs.C(i,r),ST("preconnect",i,r)}function z1(i,r,o){gs.L(i,r,o);var u=Do;if(u&&i&&r){var f='link[rel="preload"][as="'+It(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+It(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+It(o.imageSizes)+'"]')):f+='[href="'+It(i)+'"]';var m=f;switch(r){case"style":m=ko(i);break;case"script":m=xo(i)}Jn.has(m)||(i=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),Jn.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(gu(m))||r==="script"&&u.querySelector(_u(m))||(r=u.createElement("link"),en(r,"link",i),At(r),u.head.appendChild(r)))}}function H1(i,r){gs.m(i,r);var o=Do;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+It(u)+'"][href="'+It(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=xo(i)}if(!Jn.has(m)&&(i=y({rel:"modulepreload",href:i},r),Jn.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(_u(m)))return}u=o.createElement("link"),en(u,"link",i),At(u),o.head.appendChild(u)}}}function F1(i,r,o){gs.S(i,r,o);var u=Do;if(u&&i){var f=gn(u).hoistableStyles,m=ko(i);r=r||"default";var E=f.get(m);if(!E){var A={loading:0,preload:null};if(E=u.querySelector(gu(m)))A.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":r},o),(o=Jn.get(m))&&Rm(i,o);var C=E=u.createElement("link");At(C),en(C,"link",i),C._p=new Promise(function(H,Q){C.onload=H,C.onerror=Q}),C.addEventListener("load",function(){A.loading|=1}),C.addEventListener("error",function(){A.loading|=2}),A.loading|=4,jh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:A},f.set(m,E)}}}function j1(i,r){gs.X(i,r);var o=Do;if(o&&i){var u=gn(o).hoistableScripts,f=xo(i),m=u.get(f);m||(m=o.querySelector(_u(f)),m||(i=y({src:i,async:!0},r),(r=Jn.get(f))&&bm(i,r),m=o.createElement("script"),At(m),en(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function q1(i,r){gs.M(i,r);var o=Do;if(o&&i){var u=gn(o).hoistableScripts,f=xo(i),m=u.get(f);m||(m=o.querySelector(_u(f)),m||(i=y({src:i,async:!0,type:"module"},r),(r=Jn.get(f))&&bm(i,r),m=o.createElement("script"),At(m),en(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function AT(i,r,o,u){var f=(f=we.current)?Fh(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=ko(o.href),o=gn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=ko(o.href);var m=gn(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(gu(i)))&&!m._p&&(E.instance=m,E.state.loading=5),Jn.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Jn.set(i,o),m||G1(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=xo(o),o=gn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function ko(i){return'href="'+It(i)+'"'}function gu(i){return'link[rel="stylesheet"]['+i+"]"}function wT(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function G1(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),en(r,"link",o),At(r),i.head.appendChild(r))}function xo(i){return'[src="'+It(i)+'"]'}function _u(i){return"script[async]"+i}function RT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+It(o.href)+'"]');if(u)return r.instance=u,At(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),At(u),en(u,"style",f),jh(u,o.precedence,i),r.instance=u;case"stylesheet":f=ko(o.href);var m=i.querySelector(gu(f));if(m)return r.state.loading|=4,r.instance=m,At(m),m;u=wT(o),(f=Jn.get(f))&&Rm(u,f),m=(i.ownerDocument||i).createElement("link"),At(m);var E=m;return E._p=new Promise(function(A,C){E.onload=A,E.onerror=C}),en(m,"link",u),r.state.loading|=4,jh(m,o.precedence,i),r.instance=m;case"script":return m=xo(o.src),(f=i.querySelector(_u(m)))?(r.instance=f,At(f),f):(u=o,(f=Jn.get(m))&&(u=y({},o),bm(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),At(f),en(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,jh(u,o.precedence,i));return r.instance}function jh(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var A=u[E];if(A.dataset.precedence===r)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Rm(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function bm(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var qh=null;function bT(i,r,o){if(qh===null){var u=new Map,f=qh=new Map;f.set(o,u)}else f=qh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[jr]||m[xt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var A=u.get(E);A?A.push(m):u.set(E,[m])}}return u}function CT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function K1(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function IT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var yu=null;function Y1(){}function $1(i,r,o){if(yu===null)throw Error(s(475));var u=yu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=ko(o.href),m=i.querySelector(gu(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=Gh.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,At(m);return}m=i.ownerDocument||i,o=wT(o),(f=Jn.get(f))&&Rm(o,f),m=m.createElement("link"),At(m);var E=m;E._p=new Promise(function(A,C){E.onload=A,E.onerror=C}),en(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=Gh.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function Q1(){if(yu===null)throw Error(s(475));var i=yu;return i.stylesheets&&i.count===0&&Cm(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&Cm(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function Gh(){if(this.count--,this.count===0){if(this.stylesheets)Cm(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Kh=null;function Cm(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Kh=new Map,r.forEach(W1,i),Kh=null,Gh.call(i))}function W1(i,r){if(!(r.state.loading&4)){var o=Kh.get(i);if(o)var u=o.get(null);else{o=new Map,Kh.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=Gh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var vu={$$typeof:te,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function X1(i,r,o,u,f,m,E,A){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.hiddenUpdates=Ki(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function NT(i,r,o,u,f,m,E,A,C,H,Q,Z){return i=new X1(i,r,o,E,A,C,H,Z),r=1,m===!0&&(r|=24),m=Dn(3,null,null,r),i.current=m,m.stateNode=i,r=lp(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},fp(m),i}function OT(i){return i?(i=uo,i):uo}function DT(i,r,o,u,f,m){f=OT(f),u.context===null?u.context=f:u.pendingContext=f,u=Hs(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Fs(i,u,r),o!==null&&(Ln(o,i,r),Ql(o,i,r))}function kT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Im(i,r){kT(i,r),(i=i.alternate)&&kT(i,r)}function xT(i){if(i.tag===13){var r=lo(i,67108864);r!==null&&Ln(r,i,67108864),Im(i,67108864)}}var Yh=!0;function Z1(i,r,o,u){var f=$.T;$.T=null;var m=ie.p;try{ie.p=2,Nm(i,r,o,u)}finally{ie.p=m,$.T=f}}function J1(i,r,o,u){var f=$.T;$.T=null;var m=ie.p;try{ie.p=8,Nm(i,r,o,u)}finally{ie.p=m,$.T=f}}function Nm(i,r,o,u){if(Yh){var f=Om(u);if(f===null)gm(i,r,u,$h,o),PT(i,u);else if(tI(f,i,r,o,u))u.stopPropagation();else if(PT(i,u),r&4&&-1<eI.indexOf(i)){for(;f!==null;){var m=_i(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=si(m.pendingLanes);if(E!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var C=1<<31-an(E);A.entanglements[1]|=C,E&=~C}Di(m),(Xe&6)===0&&(Dh=Hn()+500,fu(0))}}break;case 13:A=lo(m,2),A!==null&&Ln(A,m,2),xh(),Im(m,2)}if(m=Om(u),m===null&&gm(i,r,u,$h,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else gm(i,r,u,null,o)}}function Om(i){return i=qn(i),Dm(i)}var $h=null;function Dm(i){if($h=null,i=$i(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return $h=i,null}function MT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Md()){case _l:return 2;case Ha:return 8;case Ur:case Pd:return 32;case Fa:return 268435456;default:return 32}default:return 32}}var km=!1,tr=null,nr=null,ir=null,Eu=new Map,Tu=new Map,sr=[],eI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function PT(i,r){switch(i){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Eu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tu.delete(r.pointerId)}}function Su(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=_i(r),r!==null&&xT(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function tI(i,r,o,u,f){switch(r){case"focusin":return tr=Su(tr,i,r,o,u,f),!0;case"dragenter":return nr=Su(nr,i,r,o,u,f),!0;case"mouseover":return ir=Su(ir,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return Eu.set(m,Su(Eu.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Tu.set(m,Su(Tu.get(m)||null,i,r,o,u,f)),!0}return!1}function LT(i){var r=$i(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,xc(i.priority,function(){if(o.tag===13){var u=Pn();u=ks(u);var f=lo(o,u);f!==null&&Ln(f,o,u),Im(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Qh(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Om(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);Zi=u,o.target.dispatchEvent(u),Zi=null}else return r=_i(o),r!==null&&xT(r),i.blockedOn=o,!1;r.shift()}return!0}function VT(i,r,o){Qh(i)&&o.delete(r)}function nI(){km=!1,tr!==null&&Qh(tr)&&(tr=null),nr!==null&&Qh(nr)&&(nr=null),ir!==null&&Qh(ir)&&(ir=null),Eu.forEach(VT),Tu.forEach(VT)}function Wh(i,r){i.blockedOn===r&&(i.blockedOn=null,km||(km=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,nI)))}var Xh=null;function UT(i){Xh!==i&&(Xh=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Xh===i&&(Xh=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(Dm(u||o)===null)continue;break}var m=_i(o);m!==null&&(i.splice(r,3),r-=3,Dp(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Au(i){function r(C){return Wh(C,i)}tr!==null&&Wh(tr,i),nr!==null&&Wh(nr,i),ir!==null&&Wh(ir,i),Eu.forEach(r),Tu.forEach(r);for(var o=0;o<sr.length;o++){var u=sr[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<sr.length&&(o=sr[0],o.blockedOn===null);)LT(o),o.blockedOn===null&&sr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Ct]||null;if(typeof m=="function")E||UT(o);else if(E){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Ct]||null)A=E.formAction;else if(Dm(f)!==null)continue}else A=E.action;typeof A=="function"?o[u+1]=A:(o.splice(u,3),u-=3),UT(o)}}}function xm(i){this._internalRoot=i}Zh.prototype.render=xm.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Pn();DT(o,u,i,r,null,null)},Zh.prototype.unmount=xm.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;DT(i.current,2,null,i,null,null),xh(),r[Fn]=null}};function Zh(i){this._internalRoot=i}Zh.prototype.unstable_scheduleHydration=function(i){if(i){var r=xs();i={blockedOn:null,target:i,priority:r};for(var o=0;o<sr.length&&r!==0&&r<sr[o].priority;o++);sr.splice(o,0,i),o===0&&LT(i)}};var BT=e.version;if(BT!=="19.1.0")throw Error(s(527,BT,"19.1.0"));ie.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var iI={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{_t=Jh.inject(iI),We=Jh}catch{}}return Ru.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=tE,m=nE,E=iE,A=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks)),r=NT(i,1,!1,null,null,o,u,f,m,E,A,null),i[Fn]=r.current,mm(i),new xm(r)},Ru.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=tE,E=nE,A=iE,C=null,H=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(H=o.formState)),r=NT(i,1,!0,r,o??null,u,f,m,E,A,C,H),r.context=OT(null),o=r.current,u=Pn(),u=ks(u),f=Hs(u),f.callback=null,Fs(o,f,u),o=u,r.current.lanes=o,Yi(r,o),Di(r),i[Fn]=r.current,mm(i),new Zh(r)},Ru.version="19.1.0",Ru}var QT;function dI(){if(QT)return Lm.exports;QT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Lm.exports=fI(),Lm.exports}var pI=dI();const mI="modulepreload",gI=function(n){return"/AcadComponent/"+n},WT={},Ma=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){let c=function(g){return Promise.all(g.map(y=>Promise.resolve(y).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=c(t.map(g=>{if(g=gI(g),g in WT)return;WT[g]=!0;const y=g.endsWith(".css"),T=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${T}`))return;const S=document.createElement("link");if(S.rel=y?"stylesheet":mI,y||(S.as="script"),S.crossOrigin="",S.href=g,p&&S.setAttribute("nonce",p),document.head.appendChild(S),y)return new Promise((N,I)=>{S.addEventListener("load",N),S.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${g}`)))})}))}function l(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return a.then(c=>{for(const d of c||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})},_I="_navBarWrapper_1kl1r_71",yI="_left_1kl1r_105",vI="_title_1kl1r_113",EI="_mid_1kl1r_131",TI="_Links_1kl1r_143",SI="_content_1kl1r_161",AI="_ind_1kl1r_173",wI="_indicator_1kl1r_183",RI="_right_1kl1r_211",bI="_authButts_1kl1r_211",CI="_HamburgerButt_1kl1r_213",II="_signOut_1kl1r_277",NI="_sidebar_1kl1r_303",OI="_hideSideBar_1kl1r_313",DI="_signUp_1kl1r_455",kI="_indicated_1kl1r_615",xI="_indication_1kl1r_641",qe={navBarWrapper:_I,left:yI,title:vI,mid:EI,Links:TI,content:SI,ind:AI,indicator:wI,right:RI,authButts:bI,HamburgerButt:CI,signOut:II,sidebar:NI,hideSideBar:OI,signUp:DI,indicated:kI,indication:xI};var bu={},XT;function MI(){if(XT)return bu;XT=1,Object.defineProperty(bu,"__esModule",{value:!0}),bu.parse=c,bu.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function c(S,N){const I=new l,F=S.length;if(F<2)return I;const U=(N==null?void 0:N.decode)||y;let Y=0;do{const W=S.indexOf("=",Y);if(W===-1)break;const te=S.indexOf(";",Y),oe=te===-1?F:te;if(W>oe){Y=S.lastIndexOf(";",W-1)+1;continue}const ce=d(S,Y,W),Te=p(S,W,ce),x=S.slice(ce,Te);if(I[x]===void 0){let R=d(S,W+1,oe),b=p(S,oe,R);const k=U(S.slice(R,b));I[x]=k}Y=oe+1}while(Y<F);return I}function d(S,N,I){do{const F=S.charCodeAt(N);if(F!==32&&F!==9)return N}while(++N<I);return I}function p(S,N,I){for(;N>I;){const F=S.charCodeAt(--N);if(F!==32&&F!==9)return N+1}return I}function g(S,N,I){const F=(I==null?void 0:I.encode)||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const U=F(N);if(!e.test(U))throw new TypeError(`argument val is invalid: ${N}`);let Y=S+"="+U;if(!I)return Y;if(I.maxAge!==void 0){if(!Number.isInteger(I.maxAge))throw new TypeError(`option maxAge is invalid: ${I.maxAge}`);Y+="; Max-Age="+I.maxAge}if(I.domain){if(!t.test(I.domain))throw new TypeError(`option domain is invalid: ${I.domain}`);Y+="; Domain="+I.domain}if(I.path){if(!s.test(I.path))throw new TypeError(`option path is invalid: ${I.path}`);Y+="; Path="+I.path}if(I.expires){if(!T(I.expires)||!Number.isFinite(I.expires.valueOf()))throw new TypeError(`option expires is invalid: ${I.expires}`);Y+="; Expires="+I.expires.toUTCString()}if(I.httpOnly&&(Y+="; HttpOnly"),I.secure&&(Y+="; Secure"),I.partitioned&&(Y+="; Partitioned"),I.priority)switch(typeof I.priority=="string"?I.priority.toLowerCase():void 0){case"low":Y+="; Priority=Low";break;case"medium":Y+="; Priority=Medium";break;case"high":Y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${I.priority}`)}if(I.sameSite)switch(typeof I.sameSite=="string"?I.sameSite.toLowerCase():I.sameSite){case!0:case"strict":Y+="; SameSite=Strict";break;case"lax":Y+="; SameSite=Lax";break;case"none":Y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${I.sameSite}`)}return Y}function y(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function T(S){return a.call(S)==="[object Date]"}return bu}MI();var ZT="popstate";function PI(n={}){function e(s,a){let{pathname:l,search:c,hash:d}=s.location;return ug("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:Xu(a)}return VI(e,t,null,n)}function pt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function zi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function LI(){return Math.random().toString(36).substring(2,10)}function JT(n,e){return{usr:n.state,key:n.key,idx:e}}function ug(n,e,t=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?sl(e):e,state:t,key:e&&e.key||s||LI()}}function Xu({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function sl(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substring(s),n=n.substring(0,s)),n&&(e.pathname=n)}return e}function VI(n,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,d="POP",p=null,g=y();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function y(){return(c.state||{idx:null}).idx}function T(){d="POP";let U=y(),Y=U==null?null:U-g;g=U,p&&p({action:d,location:F.location,delta:Y})}function S(U,Y){d="PUSH";let W=ug(F.location,U,Y);g=y()+1;let te=JT(W,g),oe=F.createHref(W);try{c.pushState(te,"",oe)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;a.location.assign(oe)}l&&p&&p({action:d,location:F.location,delta:1})}function N(U,Y){d="REPLACE";let W=ug(F.location,U,Y);g=y();let te=JT(W,g),oe=F.createHref(W);c.replaceState(te,"",oe),l&&p&&p({action:d,location:F.location,delta:0})}function I(U){return UI(U)}let F={get action(){return d},get location(){return n(a,c)},listen(U){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(ZT,T),p=U,()=>{a.removeEventListener(ZT,T),p=null}},createHref(U){return e(a,U)},createURL:I,encodeLocation(U){let Y=I(U);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:S,replace:N,go(U){return c.go(U)}};return F}function UI(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),pt(t,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:Xu(n);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function _A(n,e,t="/"){return BI(n,e,t,!1)}function BI(n,e,t,s){let a=typeof e=="string"?sl(e):e,l=As(a.pathname||"/",t);if(l==null)return null;let c=yA(n);zI(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=XI(l);d=QI(c[p],g,s)}return d}function yA(n,e=[],t=[],s=""){let a=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(pt(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let g=Es([s,p.relativePath]),y=t.concat(p);l.children&&l.children.length>0&&(pt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),yA(l.children,e,y,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:YI(g,l.index),routesMeta:y})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let p of vA(l.path))a(l,c,p)}),e}function vA(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=vA(s.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function zI(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:$I(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var HI=/^:[\w-]+$/,FI=3,jI=2,qI=1,GI=10,KI=-2,e0=n=>n==="*";function YI(n,e){let t=n.split("/"),s=t.length;return t.some(e0)&&(s+=KI),e&&(s+=jI),t.filter(a=>!e0(a)).reduce((a,l)=>a+(HI.test(l)?FI:l===""?qI:GI),s)}function $I(n,e){return n.length===e.length&&n.slice(0,-1).every((s,a)=>s===e[a])?n[n.length-1]-e[e.length-1]:0}function QI(n,e,t=!1){let{routesMeta:s}=n,a={},l="/",c=[];for(let d=0;d<s.length;++d){let p=s[d],g=d===s.length-1,y=l==="/"?e:e.slice(l.length)||"/",T=wf({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},y),S=p.route;if(!T&&g&&t&&!s[s.length-1].route.index&&(T=wf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!T)return null;Object.assign(a,T.params),c.push({params:a,pathname:Es([l,T.pathname]),pathnameBase:tN(Es([l,T.pathnameBase])),route:S}),T.pathnameBase!=="/"&&(l=Es([l,T.pathnameBase]))}return c}function wf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=WI(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:s.reduce((g,{paramName:y,isOptional:T},S)=>{if(y==="*"){let I=d[S]||"";c=l.slice(0,l.length-I.length).replace(/(.)\/+$/,"$1")}const N=d[S];return T&&!N?g[y]=void 0:g[y]=(N||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:n}}function WI(n,e=!1,t=!0){zi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(s.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function XI(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zi(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function As(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}function ZI(n,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof n=="string"?sl(n):n;return{pathname:t?t.startsWith("/")?t:JI(t,e):e,search:nN(s),hash:iN(a)}}function JI(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function zm(n,e,t,s){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function eN(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function EA(n){let e=eN(n);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function TA(n,e,t,s=!1){let a;typeof n=="string"?a=sl(n):(a={...n},pt(!a.pathname||!a.pathname.includes("?"),zm("?","pathname","search",a)),pt(!a.pathname||!a.pathname.includes("#"),zm("#","pathname","hash",a)),pt(!a.search||!a.search.includes("#"),zm("#","search","hash",a)));let l=n===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!s&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),T-=1;a.pathname=S.join("/")}d=T>=0?e[T]:"/"}let p=ZI(a,d),g=c&&c!=="/"&&c.endsWith("/"),y=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(g||y)&&(p.pathname+="/"),p}var Es=n=>n.join("/").replace(/\/\/+/g,"/"),tN=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),nN=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,iN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function sN(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var SA=["POST","PUT","PATCH","DELETE"];new Set(SA);var rN=["GET",...SA];new Set(rN);var rl=K.createContext(null);rl.displayName="DataRouter";var td=K.createContext(null);td.displayName="DataRouterState";var AA=K.createContext({isTransitioning:!1});AA.displayName="ViewTransition";var aN=K.createContext(new Map);aN.displayName="Fetchers";var oN=K.createContext(null);oN.displayName="Await";var ji=K.createContext(null);ji.displayName="Navigation";var cc=K.createContext(null);cc.displayName="Location";var Ns=K.createContext({outlet:null,matches:[],isDataRoute:!1});Ns.displayName="Route";var e_=K.createContext(null);e_.displayName="RouteError";function lN(n,{relative:e}={}){pt(hc(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=K.useContext(ji),{hash:a,pathname:l,search:c}=fc(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Es([t,l])),s.createHref({pathname:d,search:c,hash:a})}function hc(){return K.useContext(cc)!=null}function Pa(){return pt(hc(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(cc).location}var wA="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function RA(n){K.useContext(ji).static||K.useLayoutEffect(n)}function bA(){let{isDataRoute:n}=K.useContext(Ns);return n?TN():uN()}function uN(){pt(hc(),"useNavigate() may be used only in the context of a <Router> component.");let n=K.useContext(rl),{basename:e,navigator:t}=K.useContext(ji),{matches:s}=K.useContext(Ns),{pathname:a}=Pa(),l=JSON.stringify(EA(s)),c=K.useRef(!1);return RA(()=>{c.current=!0}),K.useCallback((p,g={})=>{if(zi(c.current,wA),!c.current)return;if(typeof p=="number"){t.go(p);return}let y=TA(p,JSON.parse(l),a,g.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:Es([e,y.pathname])),(g.replace?t.replace:t.push)(y,g.state,g)},[e,t,l,a,n])}K.createContext(null);function fc(n,{relative:e}={}){let{matches:t}=K.useContext(Ns),{pathname:s}=Pa(),a=JSON.stringify(EA(t));return K.useMemo(()=>TA(n,JSON.parse(a),s,e==="path"),[n,a,s,e])}function cN(n,e){return CA(n,e)}function CA(n,e,t,s){var Y;pt(hc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=K.useContext(ji),{matches:l}=K.useContext(Ns),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",g=c?c.pathnameBase:"/",y=c&&c.route;{let W=y&&y.path||"";IA(p,!y||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let T=Pa(),S;if(e){let W=typeof e=="string"?sl(e):e;pt(g==="/"||((Y=W.pathname)==null?void 0:Y.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${W.pathname}" was given in the \`location\` prop.`),S=W}else S=T;let N=S.pathname||"/",I=N;if(g!=="/"){let W=g.replace(/^\//,"").split("/");I="/"+N.replace(/^\//,"").split("/").slice(W.length).join("/")}let F=_A(n,{pathname:I});zi(y||F!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),zi(F==null||F[F.length-1].route.element!==void 0||F[F.length-1].route.Component!==void 0||F[F.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let U=mN(F&&F.map(W=>Object.assign({},W,{params:Object.assign({},d,W.params),pathname:Es([g,a.encodeLocation?a.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?g:Es([g,a.encodeLocation?a.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),l,t,s);return e&&U?K.createElement(cc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},U):U}function hN(){let n=EN(),e=sN(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:l},"ErrorBoundary")," or"," ",K.createElement("code",{style:l},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),t?K.createElement("pre",{style:a},t):null,c)}var fN=K.createElement(hN,null),dN=class extends K.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?K.createElement(Ns.Provider,{value:this.props.routeContext},K.createElement(e_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function pN({routeContext:n,match:e,children:t}){let s=K.useContext(rl);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),K.createElement(Ns.Provider,{value:n},t)}function mN(n,e=[],t=null,s=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,l=t==null?void 0:t.errors;if(l!=null){let p=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);pt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:y,errors:T}=t,S=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||S){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,g,y)=>{let T,S=!1,N=null,I=null;t&&(T=l&&g.route.id?l[g.route.id]:void 0,N=g.route.errorElement||fN,c&&(d<0&&y===0?(IA("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,I=null):d===y&&(S=!0,I=g.route.hydrateFallbackElement||null)));let F=e.concat(a.slice(0,y+1)),U=()=>{let Y;return T?Y=N:S?Y=I:g.route.Component?Y=K.createElement(g.route.Component,null):g.route.element?Y=g.route.element:Y=p,K.createElement(pN,{match:g,routeContext:{outlet:p,matches:F,isDataRoute:t!=null},children:Y})};return t&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?K.createElement(dN,{location:t.location,revalidation:t.revalidation,component:N,error:T,children:U(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):U()},null)}function t_(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gN(n){let e=K.useContext(rl);return pt(e,t_(n)),e}function _N(n){let e=K.useContext(td);return pt(e,t_(n)),e}function yN(n){let e=K.useContext(Ns);return pt(e,t_(n)),e}function n_(n){let e=yN(n),t=e.matches[e.matches.length-1];return pt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function vN(){return n_("useRouteId")}function EN(){var s;let n=K.useContext(e_),e=_N("useRouteError"),t=n_("useRouteError");return n!==void 0?n:(s=e.errors)==null?void 0:s[t]}function TN(){let{router:n}=gN("useNavigate"),e=n_("useNavigate"),t=K.useRef(!1);return RA(()=>{t.current=!0}),K.useCallback(async(a,l={})=>{zi(t.current,wA),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...l}))},[n,e])}var t0={};function IA(n,e,t){!e&&!t0[n]&&(t0[n]=!0,zi(!1,t))}K.memo(SN);function SN({routes:n,future:e,state:t}){return CA(n,void 0,t,e)}function NA(n){pt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function AN({basename:n="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1}){pt(!hc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=K.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof t=="string"&&(t=sl(t));let{pathname:p="/",search:g="",hash:y="",state:T=null,key:S="default"}=t,N=K.useMemo(()=>{let I=As(p,c);return I==null?null:{location:{pathname:I,search:g,hash:y,state:T,key:S},navigationType:s}},[c,p,g,y,T,S,s]);return zi(N!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:K.createElement(ji.Provider,{value:d},K.createElement(cc.Provider,{children:e,value:N}))}function wN({children:n,location:e}){return cN(cg(n),e)}function cg(n,e=[]){let t=[];return K.Children.forEach(n,(s,a)=>{if(!K.isValidElement(s))return;let l=[...e,a];if(s.type===K.Fragment){t.push.apply(t,cg(s.props.children,l));return}pt(s.type===NA,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),pt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=cg(s.props.children,l)),t.push(c)}),t}var ff="get",df="application/x-www-form-urlencoded";function nd(n){return n!=null&&typeof n.tagName=="string"}function RN(n){return nd(n)&&n.tagName.toLowerCase()==="button"}function bN(n){return nd(n)&&n.tagName.toLowerCase()==="form"}function CN(n){return nd(n)&&n.tagName.toLowerCase()==="input"}function IN(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function NN(n,e){return n.button===0&&(!e||e==="_self")&&!IN(n)}var ef=null;function ON(){if(ef===null)try{new FormData(document.createElement("form"),0),ef=!1}catch{ef=!0}return ef}var DN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hm(n){return n!=null&&!DN.has(n)?(zi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${df}"`),null):n}function kN(n,e){let t,s,a,l,c;if(bN(n)){let d=n.getAttribute("action");s=d?As(d,e):null,t=n.getAttribute("method")||ff,a=Hm(n.getAttribute("enctype"))||df,l=new FormData(n)}else if(RN(n)||CN(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(s=p?As(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||ff,a=Hm(n.getAttribute("formenctype"))||Hm(d.getAttribute("enctype"))||df,l=new FormData(d,n),!ON()){let{name:g,type:y,value:T}=n;if(y==="image"){let S=g?`${g}.`:"";l.append(`${S}x`,"0"),l.append(`${S}y`,"0")}else g&&l.append(g,T)}}else{if(nd(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=ff,s=null,a=df,c=n}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}function i_(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function xN(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function MN(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function PN(n,e,t){let s=await Promise.all(n.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await xN(l,t);return c.links?c.links():[]}return[]}));return BN(s.flat(1).filter(MN).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function n0(n,e,t,s,a,l){let c=(p,g)=>t[g]?p.route.id!==t[g].route.id:!0,d=(p,g)=>{var y;return t[g].pathname!==p.pathname||((y=t[g].route.path)==null?void 0:y.endsWith("*"))&&t[g].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?e.filter((p,g)=>{var T;let y=s.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function LN(n,e,{includeHydrateFallback:t}={}){return VN(n.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function VN(n){return[...new Set(n)]}function UN(n){let e={},t=Object.keys(n).sort();for(let s of t)e[s]=n[s];return e}function BN(n,e){let t=new Set;return new Set(e),n.reduce((s,a)=>{let l=JSON.stringify(UN(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var zN=new Set([100,101,204,205]);function HN(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&As(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function OA(){let n=K.useContext(rl);return i_(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function FN(){let n=K.useContext(td);return i_(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var s_=K.createContext(void 0);s_.displayName="FrameworkContext";function DA(){let n=K.useContext(s_);return i_(n,"You must render this element inside a <HydratedRouter> element"),n}function jN(n,e){let t=K.useContext(s_),[s,a]=K.useState(!1),[l,c]=K.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:y,onTouchStart:T}=e,S=K.useRef(null);K.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let F=Y=>{Y.forEach(W=>{c(W.isIntersecting)})},U=new IntersectionObserver(F,{threshold:.5});return S.current&&U.observe(S.current),()=>{U.disconnect()}}},[n]),K.useEffect(()=>{if(s){let F=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(F)}}},[s]);let N=()=>{a(!0)},I=()=>{a(!1),c(!1)};return t?n!=="intent"?[l,S,{}]:[l,S,{onFocus:Cu(d,N),onBlur:Cu(p,I),onMouseEnter:Cu(g,N),onMouseLeave:Cu(y,I),onTouchStart:Cu(T,N)}]:[!1,S,{}]}function Cu(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function qN({page:n,...e}){let{router:t}=OA(),s=K.useMemo(()=>_A(t.routes,n,t.basename),[t.routes,n,t.basename]);return s?K.createElement(KN,{page:n,matches:s,...e}):null}function GN(n){let{manifest:e,routeModules:t}=DA(),[s,a]=K.useState([]);return K.useEffect(()=>{let l=!1;return PN(n,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[n,e,t]),s}function KN({page:n,matches:e,...t}){let s=Pa(),{manifest:a,routeModules:l}=DA(),{basename:c}=OA(),{loaderData:d,matches:p}=FN(),g=K.useMemo(()=>n0(n,e,p,a,s,"data"),[n,e,p,a,s]),y=K.useMemo(()=>n0(n,e,p,a,s,"assets"),[n,e,p,a,s]),T=K.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let I=new Set,F=!1;if(e.forEach(Y=>{var te;let W=a.routes[Y.route.id];!W||!W.hasLoader||(!g.some(oe=>oe.route.id===Y.route.id)&&Y.route.id in d&&((te=l[Y.route.id])!=null&&te.shouldRevalidate)||W.hasClientLoader?F=!0:I.add(Y.route.id))}),I.size===0)return[];let U=HN(n,c);return F&&I.size>0&&U.searchParams.set("_routes",e.filter(Y=>I.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[U.pathname+U.search]},[c,d,s,a,g,e,n,l]),S=K.useMemo(()=>LN(y,a),[y,a]),N=GN(y);return K.createElement(K.Fragment,null,T.map(I=>K.createElement("link",{key:I,rel:"prefetch",as:"fetch",href:I,...t})),S.map(I=>K.createElement("link",{key:I,rel:"modulepreload",href:I,...t})),N.map(({key:I,link:F})=>K.createElement("link",{key:I,...F})))}function YN(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var kA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{kA&&(window.__reactRouterVersion="7.6.1")}catch{}function $N({basename:n,children:e,window:t}){let s=K.useRef();s.current==null&&(s.current=PI({window:t,v5Compat:!0}));let a=s.current,[l,c]=K.useState({action:a.action,location:a.location}),d=K.useCallback(p=>{K.startTransition(()=>c(p))},[c]);return K.useLayoutEffect(()=>a.listen(d),[a,d]),K.createElement(AN,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:a})}var xA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pr=K.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:y,viewTransition:T,...S},N){let{basename:I}=K.useContext(ji),F=typeof g=="string"&&xA.test(g),U,Y=!1;if(typeof g=="string"&&F&&(U=g,kA))try{let b=new URL(window.location.href),k=g.startsWith("//")?new URL(b.protocol+g):new URL(g),P=As(k.pathname,I);k.origin===b.origin&&P!=null?g=P+k.search+k.hash:Y=!0}catch{zi(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let W=lN(g,{relative:a}),[te,oe,ce]=jN(s,S),Te=ZN(g,{replace:c,state:d,target:p,preventScrollReset:y,relative:a,viewTransition:T});function x(b){e&&e(b),b.defaultPrevented||Te(b)}let R=K.createElement("a",{...S,...ce,href:U||W,onClick:Y||l?e:x,ref:YN(N,oe),target:p,"data-discover":!F&&t==="render"?"true":void 0});return te&&!F?K.createElement(K.Fragment,null,R,K.createElement(qN,{page:W})):R});pr.displayName="Link";var QN=K.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...g},y){let T=fc(c,{relative:g.relative}),S=Pa(),N=K.useContext(td),{navigator:I,basename:F}=K.useContext(ji),U=N!=null&&iO(T)&&d===!0,Y=I.encodeLocation?I.encodeLocation(T).pathname:T.pathname,W=S.pathname,te=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;t||(W=W.toLowerCase(),te=te?te.toLowerCase():null,Y=Y.toLowerCase()),te&&F&&(te=As(te,F)||te);const oe=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let ce=W===Y||!a&&W.startsWith(Y)&&W.charAt(oe)==="/",Te=te!=null&&(te===Y||!a&&te.startsWith(Y)&&te.charAt(Y.length)==="/"),x={isActive:ce,isPending:Te,isTransitioning:U},R=ce?e:void 0,b;typeof s=="function"?b=s(x):b=[s,ce?"active":null,Te?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(x):l;return K.createElement(pr,{...g,"aria-current":R,className:b,ref:y,style:k,to:c,viewTransition:d},typeof p=="function"?p(x):p)});QN.displayName="NavLink";var WN=K.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=ff,action:d,onSubmit:p,relative:g,preventScrollReset:y,viewTransition:T,...S},N)=>{let I=tO(),F=nO(d,{relative:g}),U=c.toLowerCase()==="get"?"get":"post",Y=typeof d=="string"&&xA.test(d),W=te=>{if(p&&p(te),te.defaultPrevented)return;te.preventDefault();let oe=te.nativeEvent.submitter,ce=(oe==null?void 0:oe.getAttribute("formmethod"))||c;I(oe||te.currentTarget,{fetcherKey:e,method:ce,navigate:t,replace:a,state:l,relative:g,preventScrollReset:y,viewTransition:T})};return K.createElement("form",{ref:N,method:U,action:F,onSubmit:s?p:W,...S,"data-discover":!Y&&n==="render"?"true":void 0})});WN.displayName="Form";function XN(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function MA(n){let e=K.useContext(rl);return pt(e,XN(n)),e}function ZN(n,{target:e,replace:t,state:s,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=bA(),p=Pa(),g=fc(n,{relative:l});return K.useCallback(y=>{if(NN(y,e)){y.preventDefault();let T=t!==void 0?t:Xu(p)===Xu(g);d(n,{replace:T,state:s,preventScrollReset:a,relative:l,viewTransition:c})}},[p,d,g,t,s,e,n,a,l,c])}var JN=0,eO=()=>`__${String(++JN)}__`;function tO(){let{router:n}=MA("useSubmit"),{basename:e}=K.useContext(ji),t=vN();return K.useCallback(async(s,a={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=kN(s,e);if(a.navigate===!1){let y=a.fetcherKey||eO();await n.fetch(y,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function nO(n,{relative:e}={}){let{basename:t}=K.useContext(ji),s=K.useContext(Ns);pt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...fc(n||".",{relative:e})},c=Pa();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(y=>y==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let y=d.toString();l.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Es([t,l.pathname])),Xu(l)}function iO(n,e={}){let t=K.useContext(AA);pt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=MA("useViewTransitionState"),a=fc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=As(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=As(t.nextLocation.pathname,s)||t.nextLocation.pathname;return wf(a.pathname,c)!=null||wf(a.pathname,l)!=null}[...zN];const hg=({className:n,content:e,func:t,submit:s,icon:a,change:l,element:c})=>re.jsxs("button",{className:`${n}`,onSubmit:d=>{s(d)},onClick:()=>{t()},children:[a,e,c]}),sO=()=>{const n=bA(),{pages:e,setPages:t,user:s,setPrevPage:a,setHideSideBar:l,hideSideBar:c,setIsSigningOut:d,changes:p,setSaveChanges:g,prevPage:y}=K.useContext(Nc);function T(S,N){p&&e[1].ind?g(!0):(n(N),t(I=>I.map((F,U)=>U==S?{...F,ind:!0}:{...F,ind:!1})))}return re.jsxs(re.Fragment,{children:[re.jsxs("div",{className:qe.navBarWrapper,children:[re.jsxs("div",{className:qe.left,children:[re.jsx("img",{src:"./web-icon.png"}),re.jsx("h1",{className:qe.title,children:"Acad"})]}),re.jsx("div",{className:qe.mid,children:re.jsx("ul",{children:e==null?void 0:e.map((S,N)=>re.jsxs("li",{className:S.ind?`${qe.ind} ${qe.Links}`:`${qe.notInd} ${qe.Links}`,onClick:()=>{T(N,S.path),a(S.path)},children:[re.jsxs("span",{className:qe.content,children:[S.icon,S.name]}),re.jsx("span",{className:qe.indicator})]},S.name))})}),s!=null&&s.uid?re.jsxs("div",{className:qe.right,children:[re.jsx(pr,{to:"/AcadComponent/Dashboard",className:qe.Links,children:re.jsx("button",{className:qe.authButts,children:"Account"})}),re.jsx("button",{className:`${qe.authButts} ${qe.signOut}`,onClick:()=>{d(!0)},children:"Log Out"}),re.jsx("button",{className:qe.HamburgerButt,onClick:()=>{l(!1)},children:re.jsx("i",{className:"fa fa-list-ul"})})]}):re.jsxs("div",{className:qe.right,children:[re.jsx(pr,{to:"/AcadComponent/SignIn",className:qe.Links,children:re.jsx("button",{className:qe.authButts,children:"Sign In"})}),re.jsx(pr,{to:"/AcadComponent/SignUp",className:qe.Links,children:re.jsx("button",{className:`${qe.authButts} ${qe.signUp}`,children:"Sign Up"})}),re.jsx("button",{className:qe.HamburgerButt,onClick:()=>{l(!1)},children:re.jsx("i",{className:"fa fa-list-ul"})})]})]}),re.jsx("div",{className:c==!1?qe.sidebar:qe.hideSideBar,children:re.jsxs("ul",{className:c==!1?qe.NavLinks:qe.hideNavLinks,children:[re.jsx(hg,{className:qe.HamburgerButt,func:()=>{l(!c)},content:re.jsx("i",{className:"fa fa-list-ul"})}),e.map((S,N)=>re.jsxs("li",{to:S.path,onClick:()=>{T(S,N),a(S.path)},className:S.ind?`${qe.Links} ${qe.indicated}`:`${qe.Links} ${qe.notIndicated}`,children:[S.icon,re.jsxs("span",{children:[S.name,re.jsx("span",{className:qe.indication})]})]},S.path))]})})]})},rO="_loadingWrapper_c5yrr_15",aO="_loadingBar_c5yrr_49",i0={loadingWrapper:rO,loadingBar:aO},oO=()=>{const{loading:n}=K.useContext(Nc);if(n)return re.jsxs("div",{className:i0.loadingWrapper,children:[re.jsx("div",{className:i0.loadingBar}),"Loading..."]})},lO=()=>re.jsx("div",{children:"PageNotFound"}),uO=()=>{};var s0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=function(n,e){if(!n)throw al(e)},al=function(n){return new Error("Firebase Database ("+PA.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},cO=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},r_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,y=l>>2,T=(l&3)<<4|d>>4;let S=(d&15)<<2|g>>6,N=g&63;p||(N=64,c||(S=64)),s.push(t[y],t[T],t[S],t[N])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(LA(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):cO(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new hO;const S=l<<2|d>>4;if(s.push(S),g!==64){const N=d<<4&240|g>>2;if(s.push(N),T!==64){const I=g<<6&192|T;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VA=function(n){const e=LA(n);return r_.encodeByteArray(e,!0)},Rf=function(n){return VA(n).replace(/\./g,"")},bf=function(n){try{return r_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(n){return UA(void 0,n)}function UA(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!dO(t)||(n[t]=UA(n[t],e[t]));return n}function dO(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=()=>pO().__FIREBASE_DEFAULTS__,gO=()=>{if(typeof process>"u"||typeof s0>"u")return;const n=s0.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},_O=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bf(n[1]);return e&&JSON.parse(e)},id=()=>{try{return uO()||mO()||gO()||_O()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},BA=n=>{var e,t;return(t=(e=id())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},zA=n=>{const e=BA(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},HA=()=>{var n;return(n=id())===null||n===void 0?void 0:n.config},FA=n=>{var e;return(e=id())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(n){return n.endsWith(".cloudworkstations.dev")}async function o_(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Rf(JSON.stringify(t)),Rf(JSON.stringify(c)),""].join(".")}const zu={};function yO(){const n={prod:[],emulator:[]};for(const e of Object.keys(zu))zu[e]?n.emulator.push(e):n.prod.push(e);return n}function vO(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let r0=!1;function l_(n,e){if(typeof window>"u"||typeof document>"u"||!La(window.location.host)||zu[n]===e||zu[n]||r0)return;zu[n]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",l=yO().prod.length>0;function c(){const S=document.getElementById(s);S&&S.remove()}function d(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,N){S.setAttribute("width","24"),S.setAttribute("id",N),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{r0=!0,c()},S}function y(S,N){S.setAttribute("id",N),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=vO(s),N=t("text"),I=document.getElementById(N)||document.createElement("span"),F=t("learnmore"),U=document.getElementById(F)||document.createElement("a"),Y=t("preprendIcon"),W=document.getElementById(Y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const te=S.element;d(te),y(U,F);const oe=g();p(W,Y),te.append(W,I,U,oe),document.body.appendChild(te)}l?(I.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function u_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mn())}function EO(){var n;const e=(n=id())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SO(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function AO(){const n=mn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function wO(){return PA.NODE_ADMIN===!0}function RO(){return!EO()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bO(){try{return typeof indexedDB=="object"}catch{return!1}}function CO(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO="FirebaseError";class qi extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=IO,Object.setPrototypeOf(this,qi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dc.prototype.create)}}class dc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?NO(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new qi(a,d,s)}}function NO(n,e){return n.replace(OO,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const OO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n){return JSON.parse(n)}function nn(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=Zu(bf(l[0])||""),t=Zu(bf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},DO=function(n){const e=GA(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},kO=function(n){const e=GA(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Yo(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function fg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Cf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Er(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(a0(l)&&a0(c)){if(!Er(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function a0(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Mu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Pu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const S=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(S<<1|S>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,y;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):T<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const S=(a<<5|a>>>27)+g+p+y+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=S}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function MO(n,e){const t=new PO(n,e);return t.subscribe.bind(t)}class PO{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");LO(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Fm),a.error===void 0&&(a.error=Fm),a.complete===void 0&&(a.complete=Fm);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LO(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Fm(){}function VO(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,ue(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},sd=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n){return n&&n._delegate?n._delegate:n}class ws{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new a_;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HO(e))try{this.getOrInitializeService({instanceIdentifier:ya})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=ya){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ya){return this.instances.has(e)}getOptions(e=ya){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zO(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ya){return this.component?this.component.multipleInstances?e:ya:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zO(n){return n===ya?void 0:n}function HO(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new BO(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Me||(Me={}));const jO={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},qO=Me.INFO,GO={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},KO=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=GO[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rd{constructor(e){this.name=e,this._logLevel=qO,this._logHandler=KO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const YO=(n,e)=>e.some(t=>n instanceof t);let o0,l0;function $O(){return o0||(o0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QO(){return l0||(l0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const KA=new WeakMap,dg=new WeakMap,YA=new WeakMap,jm=new WeakMap,c_=new WeakMap;function WO(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(mr(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&KA.set(t,n)}).catch(()=>{}),c_.set(e,n),e}function XO(n){if(dg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});dg.set(n,e)}let pg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return dg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||YA.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ZO(n){pg=n(pg)}function JO(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(qm(this),e,...t);return YA.set(s,e.sort?e.sort():[e]),mr(s)}:QO().includes(n)?function(...e){return n.apply(qm(this),e),mr(KA.get(this))}:function(...e){return mr(n.apply(qm(this),e))}}function eD(n){return typeof n=="function"?JO(n):(n instanceof IDBTransaction&&XO(n),YO(n,$O())?new Proxy(n,pg):n)}function mr(n){if(n instanceof IDBRequest)return WO(n);if(jm.has(n))return jm.get(n);const e=eD(n);return e!==n&&(jm.set(n,e),c_.set(e,n)),e}const qm=n=>c_.get(n);function tD(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=mr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(mr(c.result),p.oldVersion,p.newVersion,mr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const nD=["get","getKey","getAll","getAllKeys","count"],iD=["put","add","delete","clear"],Gm=new Map;function u0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Gm.get(e))return Gm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=iD.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||nD.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return Gm.set(e,l),l}ZO(n=>({...n,get:(e,t,s)=>u0(e,t)||n.get(e,t,s),has:(e,t)=>!!u0(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rD(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function rD(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mg="@firebase/app",c0="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new rd("@firebase/app"),aD="@firebase/app-compat",oD="@firebase/analytics-compat",lD="@firebase/analytics",uD="@firebase/app-check-compat",cD="@firebase/app-check",hD="@firebase/auth",fD="@firebase/auth-compat",dD="@firebase/database",pD="@firebase/data-connect",mD="@firebase/database-compat",gD="@firebase/functions",_D="@firebase/functions-compat",yD="@firebase/installations",vD="@firebase/installations-compat",ED="@firebase/messaging",TD="@firebase/messaging-compat",SD="@firebase/performance",AD="@firebase/performance-compat",wD="@firebase/remote-config",RD="@firebase/remote-config-compat",bD="@firebase/storage",CD="@firebase/storage-compat",ID="@firebase/firestore",ND="@firebase/ai",OD="@firebase/firestore-compat",DD="firebase",kD="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="[DEFAULT]",xD={[mg]:"fire-core",[aD]:"fire-core-compat",[lD]:"fire-analytics",[oD]:"fire-analytics-compat",[cD]:"fire-app-check",[uD]:"fire-app-check-compat",[hD]:"fire-auth",[fD]:"fire-auth-compat",[dD]:"fire-rtdb",[pD]:"fire-data-connect",[mD]:"fire-rtdb-compat",[gD]:"fire-fn",[_D]:"fire-fn-compat",[yD]:"fire-iid",[vD]:"fire-iid-compat",[ED]:"fire-fcm",[TD]:"fire-fcm-compat",[SD]:"fire-perf",[AD]:"fire-perf-compat",[wD]:"fire-rc",[RD]:"fire-rc-compat",[bD]:"fire-gcs",[CD]:"fire-gcs-compat",[ID]:"fire-fst",[OD]:"fire-fst-compat",[ND]:"fire-vertex","fire-js":"fire-js",[DD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If=new Map,MD=new Map,_g=new Map;function h0(n,e){try{n.container.addComponent(e)}catch(t){Rs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Tr(n){const e=n.name;if(_g.has(e))return Rs.debug(`There were multiple attempts to register component ${e}.`),!1;_g.set(e,n);for(const t of If.values())h0(t,n);for(const t of MD.values())h0(t,n);return!0}function ad(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Tn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gr=new dc("app","Firebase",PD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ws("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=kD;function h_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:gg,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw gr.create("bad-app-name",{appName:String(a)});if(t||(t=HA()),!t)throw gr.create("no-options");const l=If.get(a);if(l){if(Er(t,l.options)&&Er(s,l.config))return l;throw gr.create("duplicate-app",{appName:a})}const c=new FO(a);for(const p of _g.values())c.addComponent(p);const d=new LD(t,s,c);return If.set(a,d),d}function f_(n=gg){const e=If.get(n);if(!e&&n===gg&&HA())return h_();if(!e)throw gr.create("no-app",{appName:n});return e}function ti(n,e,t){var s;let a=(s=xD[n])!==null&&s!==void 0?s:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rs.warn(d.join(" "));return}Tr(new ws(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD="firebase-heartbeat-database",UD=1,Ju="firebase-heartbeat-store";let Km=null;function $A(){return Km||(Km=tD(VD,UD,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ju)}catch(t){console.warn(t)}}}}).catch(n=>{throw gr.create("idb-open",{originalErrorMessage:n.message})})),Km}async function BD(n){try{const t=(await $A()).transaction(Ju),s=await t.objectStore(Ju).get(QA(n));return await t.done,s}catch(e){if(e instanceof qi)Rs.warn(e.message);else{const t=gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rs.warn(t.message)}}}async function f0(n,e){try{const s=(await $A()).transaction(Ju,"readwrite");await s.objectStore(Ju).put(e,QA(n)),await s.done}catch(t){if(t instanceof qi)Rs.warn(t.message);else{const s=gr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rs.warn(s.message)}}}function QA(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD=1024,HD=30;class FD{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qD(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=d0();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>HD){const c=GD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Rs.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=d0(),{heartbeatsToSend:s,unsentEntries:a}=jD(this._heartbeatsCache.heartbeats),l=Rf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Rs.warn(t),""}}}function d0(){return new Date().toISOString().substring(0,10)}function jD(n,e=zD){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),p0(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),p0(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class qD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bO()?CO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await BD(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return f0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return f0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function p0(n){return Rf(JSON.stringify({version:2,heartbeats:n})).length}function GD(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(n){Tr(new ws("platform-logger",e=>new sD(e),"PRIVATE")),Tr(new ws("heartbeat",e=>new FD(e),"PRIVATE")),ti(mg,c0,n),ti(mg,c0,"esm2017"),ti("fire-js","")}KD("");function d_(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(t[s[a]]=n[s[a]]);return t}function WA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YD=WA,XA=new dc("auth","Firebase",WA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new rd("@firebase/auth");function $D(n,...e){Nf.logLevel<=Me.WARN&&Nf.warn(`Auth (${Nr}): ${n}`,...e)}function pf(n,...e){Nf.logLevel<=Me.ERROR&&Nf.error(`Auth (${Nr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(n,...e){throw m_(n,...e)}function di(n,...e){return m_(n,...e)}function p_(n,e,t){const s=Object.assign(Object.assign({},YD()),{[e]:t});return new dc("auth","Firebase",s).create(e,{appName:n.name})}function Ts(n){return p_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function QD(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&ni(n,"argument-error"),p_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function m_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return XA.create(n,...e)}function Ee(n,e,...t){if(!n)throw m_(e,...t)}function _s(n){const e="INTERNAL ASSERTION FAILED: "+n;throw pf(e),new Error(e)}function bs(n,e){n||_s(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function WD(){return m0()==="http:"||m0()==="https:"}function m0(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WD()||SO()||"connection"in navigator)?navigator.onLine:!0}function ZD(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t){this.shortDelay=e,this.longDelay=t,bs(t>e,"Short delay should be less than long delay!"),this.isMobile=u_()||qA()}get(){return XD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(n,e){bs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_s("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_s("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_s("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],t2=new pc(3e4,6e4);function Or(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Dr(n,e,t,s,a={}){return JA(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=ol(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:p},l);return TO()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&La(n.emulatorConfig.host)&&(g.credentials="include"),ZA.fetch()(await ew(n,n.config.apiHost,t,d),g)})}async function JA(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},JD),e);try{const a=new i2(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw tf(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw tf(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw tf(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw tf(n,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw p_(n,y,g);ni(n,y)}}catch(a){if(a instanceof qi)throw a;ni(n,"network-request-failed",{message:String(a)})}}async function mc(n,e,t,s,a={}){const l=await Dr(n,e,t,s,a);return"mfaPendingCredential"in l&&ni(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function ew(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?g_(n.config,a):`${n.config.apiScheme}://${a}`;return e2.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function n2(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class i2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(di(this.auth,"network-request-failed")),t2.get())})}}function tf(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=di(n,e,s);return a.customData._tokenResponse=t,a}function g0(n){return n!==void 0&&n.enterprise!==void 0}class s2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return n2(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function r2(n,e){return Dr(n,"GET","/v2/recaptchaConfig",Or(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a2(n,e){return Dr(n,"POST","/v1/accounts:delete",e)}async function Of(n,e){return Dr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function o2(n,e=!1){const t=mt(n),s=await t.getIdToken(e),a=__(s);Ee(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:Hu(Ym(a.auth_time)),issuedAtTime:Hu(Ym(a.iat)),expirationTime:Hu(Ym(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Ym(n){return Number(n)*1e3}function __(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return pf("JWT malformed, contained fewer than 3 sections"),null;try{const a=bf(t);return a?JSON.parse(a):(pf("Failed to decode base64 JWT payload"),null)}catch(a){return pf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function _0(n){const e=__(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof qi&&l2(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function l2({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hu(this.lastLoginAt),this.creationTime=Hu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Df(n){var e;const t=n.auth,s=await n.getIdToken(),a=await ec(n,Of(t,{idToken:s}));Ee(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?tw(l.providerUserInfo):[],d=h2(n.providerData,c),p=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),y=p?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new vg(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(n,T)}async function c2(n){const e=mt(n);await Df(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function h2(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function tw(n){return n.map(e=>{var{providerId:t}=e,s=d_(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f2(n,e){const t=await JA(n,{},async()=>{const s=ol({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await ew(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",ZA.fetch()(c,{method:"POST",headers:d,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function d2(n,e){return Dr(n,"POST","/v2/accounts:revokeToken",Or(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=_0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await f2(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new Ho;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Ee(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ee(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ho,this.toJSON())}_performRefresh(){return _s("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class hi{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=d_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new u2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new vg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await ec(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return o2(this,e)}reload(){return c2(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new hi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Df(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(Ts(this.auth));const e=await this.getIdToken();return await ec(this,a2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,d,p,g,y;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,N=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,I=(c=t.photoURL)!==null&&c!==void 0?c:void 0,F=(d=t.tenantId)!==null&&d!==void 0?d:void 0,U=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,Y=(g=t.createdAt)!==null&&g!==void 0?g:void 0,W=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:te,emailVerified:oe,isAnonymous:ce,providerData:Te,stsTokenManager:x}=t;Ee(te&&x,e,"internal-error");const R=Ho.fromJSON(this.name,x);Ee(typeof te=="string",e,"internal-error"),ar(T,e.name),ar(S,e.name),Ee(typeof oe=="boolean",e,"internal-error"),Ee(typeof ce=="boolean",e,"internal-error"),ar(N,e.name),ar(I,e.name),ar(F,e.name),ar(U,e.name),ar(Y,e.name),ar(W,e.name);const b=new hi({uid:te,auth:e,email:S,emailVerified:oe,displayName:T,isAnonymous:ce,photoURL:I,phoneNumber:N,tenantId:F,stsTokenManager:R,createdAt:Y,lastLoginAt:W});return Te&&Array.isArray(Te)&&(b.providerData=Te.map(k=>Object.assign({},k))),U&&(b._redirectEventId=U),b}static async _fromIdTokenResponse(e,t,s=!1){const a=new Ho;a.updateFromServerResponse(t);const l=new hi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Df(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ee(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?tw(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new Ho;d.updateFromIdToken(s);const p=new hi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new vg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=new Map;function ys(n){bs(n instanceof Function,"Expected a class definition");let e=y0.get(n);return e?(bs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,y0.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nw.type="NONE";const v0=nw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(n,e,t){return`firebase:${n}:${e}:${t}`}class Fo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=mf(this.userKey,a.apiKey,l),this.fullPersistenceKey=mf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Of(this.auth,{idToken:e}).catch(()=>{});return t?hi._fromGetAccountInfoResponse(this.auth,t,e):null}return hi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Fo(ys(v0),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||ys(v0);const c=mf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const S=await Of(e,{idToken:y}).catch(()=>{});if(!S)break;T=await hi._fromGetAccountInfoResponse(e,S,y)}else T=hi._fromJSON(e,y);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Fo(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Fo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lw(e))return"Blackberry";if(uw(e))return"Webos";if(sw(e))return"Safari";if((e.includes("chrome/")||rw(e))&&!e.includes("edge/"))return"Chrome";if(ow(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function iw(n=mn()){return/firefox\//i.test(n)}function sw(n=mn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rw(n=mn()){return/crios\//i.test(n)}function aw(n=mn()){return/iemobile/i.test(n)}function ow(n=mn()){return/android/i.test(n)}function lw(n=mn()){return/blackberry/i.test(n)}function uw(n=mn()){return/webos/i.test(n)}function y_(n=mn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function p2(n=mn()){var e;return y_(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function m2(){return AO()&&document.documentMode===10}function cw(n=mn()){return y_(n)||ow(n)||uw(n)||lw(n)||/windows phone/i.test(n)||aw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(n,e=[]){let t;switch(n){case"Browser":t=E0(mn());break;case"Worker":t=`${E0(mn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Nr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _2(n,e={}){return Dr(n,"GET","/v2/passwordPolicy",Or(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=6;class v2{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:y2,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new T0(this),this.idTokenSubscription=new T0(this),this.beforeStateQueue=new g2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=XA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ys(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await Fo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Of(this,{idToken:e}),s=await hi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Tn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Df(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(Ts(this));const t=e?mt(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(Ts(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(Ts(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ys(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _2(this),t=new v2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new dc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await d2(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ys(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Fo.create(this,[ys(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&$D(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function kr(n){return mt(n)}class T0{constructor(e){this.auth=e,this.observer=null,this.addObserver=MO(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let od={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function T2(n){od=n}function fw(n){return od.loadJS(n)}function S2(){return od.recaptchaEnterpriseScript}function A2(){return od.gapiScript}function w2(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class R2{constructor(){this.enterprise=new b2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class b2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const C2="recaptcha-enterprise",dw="NO_RECAPTCHA";class I2{constructor(e){this.type=C2,this.auth=kr(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{r2(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new s2(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;g0(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(dw)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new R2().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(d=>{if(!t&&g0(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=S2();p.length!==0&&(p+=d),fw(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function S0(n,e,t,s=!1,a=!1){const l=new I2(n);let c;if(a)c=dw;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Eg(n,e,t,s,a){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await S0(n,e,t,t==="getOobCode");return s(n,c)}else return s(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await S0(n,e,t,t==="getOobCode");return s(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N2(n,e){const t=ad(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Er(l,e??{}))return a;ni(a,"already-initialized")}return t.initialize({options:e})}function O2(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ys);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function D2(n,e,t){const s=kr(n);Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=pw(e),{host:c,port:d}=k2(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ee(Er(g,s.config.emulator)&&Er(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,La(c)?(o_(`${l}//${c}${p}`),l_("Auth",!0)):x2()}function pw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function k2(n){const e=pw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:A0(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:A0(c)}}}function A0(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function x2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _s("not implemented")}_getIdTokenResponse(e){return _s("not implemented")}_linkToIdToken(e,t){return _s("not implemented")}_getReauthenticationResolver(e){return _s("not implemented")}}async function M2(n,e){return Dr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P2(n,e){return mc(n,"POST","/v1/accounts:signInWithPassword",Or(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(n,e){return mc(n,"POST","/v1/accounts:signInWithEmailLink",Or(n,e))}async function V2(n,e){return mc(n,"POST","/v1/accounts:signInWithEmailLink",Or(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends v_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new tc(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new tc(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eg(e,t,"signInWithPassword",P2);case"emailLink":return L2(e,{email:this._email,oobCode:this._password});default:ni(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eg(e,s,"signUpPassword",M2);case"emailLink":return V2(e,{idToken:t,email:this._email,oobCode:this._password});default:ni(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(n,e){return mc(n,"POST","/v1/accounts:signInWithIdp",Or(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2="http://localhost";class wa extends v_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ni("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=d_(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new wa(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return jo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,jo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jo(e,t)}buildRequest(){const e={requestUri:U2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ol(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function z2(n){const e=Mu(Pu(n)).link,t=e?Mu(Pu(e)).deep_link_id:null,s=Mu(Pu(n)).deep_link_id;return(s?Mu(Pu(s)).link:null)||s||t||e||n}class E_{constructor(e){var t,s,a,l,c,d;const p=Mu(Pu(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,y=(s=p.oobCode)!==null&&s!==void 0?s:null,T=B2((a=p.mode)!==null&&a!==void 0?a:null);Ee(g&&y&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=y,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=z2(e);try{return new E_(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.providerId=ll.PROVIDER_ID}static credential(e,t){return tc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=E_.parseLink(t);return Ee(s,"argument-error"),tc._fromEmailAndCode(e,s.code,s.tenantId)}}ll.PROVIDER_ID="password";ll.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ll.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends T_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends gc{constructor(){super("facebook.com")}static credential(e){return wa._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends gc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wa._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ur.credential(t,s)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends gc{constructor(){super("github.com")}static credential(e){return wa._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends gc{constructor(){super("twitter.com")}static credential(e,t){return wa._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return hr.credential(t,s)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H2(n,e){return mc(n,"POST","/v1/accounts:signUp",Or(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await hi._fromIdTokenResponse(e,s,a),c=w0(s);return new Ra({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=w0(s);return new Ra({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function w0(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf extends qi{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,kf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new kf(e,t,s,a)}}function mw(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?kf._fromErrorAndOperation(n,l,e,s):l})}async function F2(n,e,t=!1){const s=await ec(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ra._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(n,e,t=!1){const{auth:s}=n;if(Tn(s.app))return Promise.reject(Ts(s));const a="reauthenticate";try{const l=await ec(n,mw(s,a,e,n),t);Ee(l.idToken,s,"internal-error");const c=__(l.idToken);Ee(c,s,"internal-error");const{sub:d}=c;return Ee(n.uid===d,s,"user-mismatch"),Ra._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&ni(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(n,e,t=!1){if(Tn(n.app))return Promise.reject(Ts(n));const s="signIn",a=await mw(n,s,e),l=await Ra._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}async function q2(n,e){return gw(kr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _w(n){const e=kr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Z6(n,e,t){if(Tn(n.app))return Promise.reject(Ts(n));const s=kr(n),c=await Eg(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",H2).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&_w(n),p}),d=await Ra._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(d.user),d}function J6(n,e,t){return Tn(n.app)?Promise.reject(Ts(n)):q2(mt(n),ll.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&_w(n),s})}function G2(n,e,t,s){return mt(n).onIdTokenChanged(e,t,s)}function K2(n,e,t){return mt(n).beforeAuthStateChanged(e,t)}function Y2(n,e,t,s){return mt(n).onAuthStateChanged(e,t,s)}function $2(n){return mt(n).signOut()}const xf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xf,"1"),this.storage.removeItem(xf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2=1e3,W2=10;class vw extends yw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);m2()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,W2):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Q2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vw.type="LOCAL";const X2=vw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew extends yw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ew.type="SESSION";const Tw=Ew;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new ld(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await Z2(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ld.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=S_("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const S=T;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(){return window}function ek(n){Li().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(){return typeof Li().WorkerGlobalScope<"u"&&typeof Li().importScripts=="function"}async function tk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ik(){return Sw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw="firebaseLocalStorageDb",sk=1,Mf="firebaseLocalStorage",ww="fbase_key";class _c{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ud(n,e){return n.transaction([Mf],e?"readwrite":"readonly").objectStore(Mf)}function rk(){const n=indexedDB.deleteDatabase(Aw);return new _c(n).toPromise()}function Tg(){const n=indexedDB.open(Aw,sk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Mf,{keyPath:ww})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Mf)?e(s):(s.close(),await rk(),e(await Tg()))})})}async function R0(n,e,t){const s=ud(n,!0).put({[ww]:e,value:t});return new _c(s).toPromise()}async function ak(n,e){const t=ud(n,!1).get(e),s=await new _c(t).toPromise();return s===void 0?null:s.value}function b0(n,e){const t=ud(n,!0).delete(e);return new _c(t).toPromise()}const ok=800,lk=3;class Rw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>lk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ld._getInstance(ik()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await tk(),!this.activeServiceWorker)return;this.sender=new J2(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tg();return await R0(e,xf,"1"),await b0(e,xf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>R0(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>ak(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>b0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=ud(a,!1).getAll();return new _c(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ok)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rw.type="LOCAL";const uk=Rw;new pc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(n,e){return e?ys(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_ extends v_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ck(n){return gw(n.auth,new A_(n),n.bypassAuthState)}function hk(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),j2(t,new A_(n),n.bypassAuthState)}async function fk(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),F2(t,new A_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ck;case"linkViaPopup":case"linkViaRedirect":return fk;case"reauthViaPopup":case"reauthViaRedirect":return hk;default:ni(this.auth,"internal-error")}}resolve(e){bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=new pc(2e3,1e4);async function e3(n,e,t){if(Tn(n.app))return Promise.reject(di(n,"operation-not-supported-in-this-environment"));const s=kr(n);QD(n,e,T_);const a=bw(s,t);return new Ea(s,"signInViaPopup",e,a).executeNotNull()}class Ea extends Cw{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Ea.currentPopupAction&&Ea.currentPopupAction.cancel(),Ea.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){bs(this.filter.length===1,"Popup operations only handle one event");const e=S_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(di(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(di(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ea.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(di(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dk.get())};e()}}Ea.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk="pendingRedirect",gf=new Map;class mk extends Cw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=gf.get(this.auth._key());if(!e){try{const s=await gk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}gf.set(this.auth._key(),e)}return this.bypassAuthState||gf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gk(n,e){const t=vk(e),s=yk(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function _k(n,e){gf.set(n._key(),e)}function yk(n){return ys(n._redirectPersistence)}function vk(n){return mf(pk,n.config.apiKey,n.name)}async function Ek(n,e,t=!1){if(Tn(n.app))return Promise.reject(Ts(n));const s=kr(n),a=bw(s,e),c=await new mk(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=10*60*1e3;class Sk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ak(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Iw(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(di(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tk&&this.cachedEventUids.clear(),this.cachedEventUids.has(C0(e))}saveEventToCache(e){this.cachedEventUids.add(C0(e)),this.lastProcessedEventTime=Date.now()}}function C0(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Iw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ak(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Iw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(n,e={}){return Dr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bk=/^https?/;async function Ck(n){if(n.config.emulator)return;const{authorizedDomains:e}=await wk(n);for(const t of e)try{if(Ik(t))return}catch{}ni(n,"unauthorized-domain")}function Ik(n){const e=yg(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!bk.test(t))return!1;if(Rk.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=new pc(3e4,6e4);function I0(){const n=Li().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ok(n){return new Promise((e,t)=>{var s,a,l;function c(){I0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{I0(),t(di(n,"network-request-failed"))},timeout:Nk.get()})}if(!((a=(s=Li().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Li().gapi)===null||l===void 0)&&l.load)c();else{const d=w2("iframefcb");return Li()[d]=()=>{gapi.load?c():t(di(n,"network-request-failed"))},fw(`${A2()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw _f=null,e})}let _f=null;function Dk(n){return _f=_f||Ok(n),_f}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=new pc(5e3,15e3),xk="__/auth/iframe",Mk="emulator/auth/iframe",Pk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vk(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?g_(e,Mk):`https://${n.config.authDomain}/${xk}`,s={apiKey:e.apiKey,appName:n.name,v:Nr},a=Lk.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${ol(s).slice(1)}`}async function Uk(n){const e=await Dk(n),t=Li().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:Vk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pk,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=di(n,"network-request-failed"),d=Li().setTimeout(()=>{l(c)},kk.get());function p(){Li().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zk=500,Hk=600,Fk="_blank",jk="http://localhost";class N0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qk(n,e,t,s=zk,a=Hk){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p=Object.assign(Object.assign({},Bk),{width:s.toString(),height:a.toString(),top:l,left:c}),g=mn().toLowerCase();t&&(d=rw(g)?Fk:t),iw(g)&&(e=e||jk,p.scrollbars="yes");const y=Object.entries(p).reduce((S,[N,I])=>`${S}${N}=${I},`,"");if(p2(g)&&d!=="_self")return Gk(e||"",d),new N0(null);const T=window.open(e||"",d,y);Ee(T,n,"popup-blocked");try{T.focus()}catch{}return new N0(T)}function Gk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk="__/auth/handler",Yk="emulator/auth/handler",$k=encodeURIComponent("fac");async function O0(n,e,t,s,a,l){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Nr,eventId:a};if(e instanceof T_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",fg(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof gc){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),g=p?`#${$k}=${encodeURIComponent(p)}`:"";return`${Qk(n)}?${ol(d).slice(1)}${g}`}function Qk({config:n}){return n.emulator?g_(n,Yk):`https://${n.authDomain}/${Kk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="webStorageSupport";class Wk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tw,this._completeRedirectFn=Ek,this._overrideRedirectResult=_k}async _openPopup(e,t,s,a){var l;bs((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await O0(e,t,s,yg(),a);return qk(e,c,S_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await O0(e,t,s,yg(),a);return ek(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(bs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Uk(e),s=new Sk(e);return t.register("authEvent",a=>(Ee(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send($m,{type:$m},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[$m];c!==void 0&&t(!!c),ni(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ck(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cw()||sw()||y_()}}const Xk=Wk;var D0="@firebase/auth",k0="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ex(n){Tr(new ws("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Ee(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hw(n)},g=new E2(s,a,l,p);return O2(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Tr(new ws("auth-internal",e=>{const t=kr(e.getProvider("auth").getImmediate());return(s=>new Zk(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ti(D0,k0,Jk(n)),ti(D0,k0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=5*60,nx=FA("authIdTokenMaxAge")||tx;let x0=null;const ix=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>nx)return;const a=t==null?void 0:t.token;x0!==a&&(x0=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function sx(n=f_()){const e=ad(n,"auth");if(e.isInitialized())return e.getImmediate();const t=N2(n,{popupRedirectResolver:Xk,persistence:[uk,X2,Tw]}),s=FA("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=ix(l.toString());K2(t,c,()=>c(t.currentUser)),G2(t,d=>c(d))}}const a=BA("auth");return a&&D2(t,`http://${a}`),t}function rx(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}T2({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=di("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",rx().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ex("Browser");var ax="firebase",ox="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ti(ax,ox,"app");var M0={};const P0="@firebase/database",L0="1.0.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nw="";function lx(n){Nw=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Zu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Os(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ux(e)}}catch{}return new cx},Ta=Ow("localStorage"),hx=Ow("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=new rd("@firebase/database"),fx=function(){let n=1;return function(){return n++}}(),Dw=function(n){const e=UO(n),t=new xO;t.update(e);const s=t.digest();return r_.encodeByteArray(s)},yc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=yc.apply(null,s):typeof s=="object"?e+=nn(s):e+=s,e+=" "}return e};let Fu=null,V0=!0;const dx=function(n,e){ue(!0,"Can't turn on custom loggers persistently."),qo.logLevel=Me.VERBOSE,Fu=qo.log.bind(qo)},hn=function(...n){if(V0===!0&&(V0=!1,Fu===null&&hx.get("logging_enabled")===!0&&dx()),Fu){const e=yc.apply(null,n);Fu(e)}},vc=function(n){return function(...e){hn(n,...e)}},Sg=function(...n){const e="FIREBASE INTERNAL ERROR: "+yc(...n);qo.error(e)},ba=function(...n){const e=`FIREBASE FATAL ERROR: ${yc(...n)}`;throw qo.error(e),new Error(e)},Bn=function(...n){const e="FIREBASE WARNING: "+yc(...n);qo.warn(e)},px=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Bn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},kw=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},mx=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},$o="[MIN_NAME]",Ca="[MAX_NAME]",ul=function(n,e){if(n===e)return 0;if(n===$o||e===Ca)return-1;if(e===$o||n===Ca)return 1;{const t=U0(n),s=U0(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},gx=function(n,e){return n===e?0:n<e?-1:1},Iu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+nn(e))},w_=function(n){if(typeof n!="object"||n===null)return nn(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=nn(e[s]),t+=":",t+=w_(n[e[s]]);return t+="}",t},xw=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function ii(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Mw=function(n){ue(!kw(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let T="";for(p=0;p<64;p+=8){let S=parseInt(y.substr(p,8),2).toString(16);S.length===1&&(S="0"+S),T=T+S}return T.toLowerCase()},_x=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},vx=new RegExp("^-?(0*)\\d{1,10}$"),Ex=-2147483648,Tx=2147483647,U0=function(n){if(vx.test(n)){const e=Number(n);if(e>=Ex&&e<=Tx)return e}return null},Ec=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Bn("Exception was thrown by user callback.",t),e},Math.floor(0))}},Sx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ju=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Tn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Bn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(hn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Bn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="5",Pw="v",Lw="s",Vw="r",Uw="f",Bw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zw="ls",Hw="p",Ag="ac",Fw="websocket",jw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ta.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ta.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function bx(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function qw(n,e,t){ue(typeof e=="string","typeof type must == string"),ue(typeof t=="object","typeof params must == object");let s;if(e===Fw)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===jw)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bx(n)&&(t.ns=n.namespace);const a=[];return ii(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(){this.counters_={}}incrementCounter(e,t=1){Os(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return fO(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm={},Wm={};function b_(n){const e=n.toString();return Qm[e]||(Qm[e]=new Cx),Qm[e]}function Ix(n,e){const t=n.toString();return Wm[t]||(Wm[t]=e()),Wm[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Ec(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="start",Ox="close",Dx="pLPCommand",kx="pRTLPCB",Gw="id",Kw="pw",Yw="ser",xx="cb",Mx="seg",Px="ts",Lx="d",Vx="dframe",$w=1870,Qw=30,Ux=$w-Qw,Bx=25e3,zx=3e4;class Bo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vc(e),this.stats_=b_(t),this.urlFn=p=>(this.appCheckToken&&(p[Ag]=this.appCheckToken),qw(t,jw,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Nx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zx)),mx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new C_((...l)=>{const[c,d,p,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===B0)this.id=d,this.password=p;else if(c===Ox)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[B0]="t",s[Yw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[xx]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Pw]=R_,this.transportSessionId&&(s[Lw]=this.transportSessionId),this.lastSessionId&&(s[zw]=this.lastSessionId),this.applicationId&&(s[Hw]=this.applicationId),this.appCheckToken&&(s[Ag]=this.appCheckToken),typeof location<"u"&&location.hostname&&Bw.test(location.hostname)&&(s[Vw]=Uw);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bo.forceAllow_=!0}static forceDisallow(){Bo.forceDisallow_=!0}static isAvailable(){return Bo.forceAllow_?!0:!Bo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_x()&&!yx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=nn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=VA(t),a=xw(s,Ux);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Vx]="t",s[Gw]=e,s[Kw]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=nn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class C_{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fx(),window[Dx+this.uniqueCallbackIdentifier]=e,window[kx+this.uniqueCallbackIdentifier]=t,this.myIFrame=C_.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){hn("frame writing exception"),d.stack&&hn(d.stack),hn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||hn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Gw]=this.myID,e[Kw]=this.myPW,e[Yw]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Qw+s.length<=$w;){const c=this.pendingSegs.shift();s=s+"&"+Mx+a+"="+c.seg+"&"+Px+a+"="+c.ts+"&"+Lx+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(Bx)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{hn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=16384,Fx=45e3;let Pf=null;typeof MozWebSocket<"u"?Pf=MozWebSocket:typeof WebSocket<"u"&&(Pf=WebSocket);class ci{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vc(this.connId),this.stats_=b_(t),this.connURL=ci.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[Pw]=R_,typeof location<"u"&&location.hostname&&Bw.test(location.hostname)&&(c[Vw]=Uw),t&&(c[Lw]=t),s&&(c[zw]=s),a&&(c[Ag]=a),l&&(c[Hw]=l),qw(e,Fw,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ta.set("previous_websocket_failure",!0);try{let s;wO(),this.mySock=new Pf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){ci.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Pf!==null&&!ci.forceDisallow_}static previouslyFailed(){return Ta.isInMemoryStorage||Ta.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ta.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Zu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ue(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=nn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=xw(t,Hx);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Fx))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ci.responsesRequiredToBeHealthy=2;ci.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{static get ALL_TRANSPORTS(){return[Bo,ci]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ci&&ci.isAvailable();let s=t&&!ci.previouslyFailed();if(e.webSocketOnly&&(t||Bn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ci];else{const a=this.transports_=[];for(const l of nc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);nc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}nc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=6e4,qx=5e3,Gx=10*1024,Kx=100*1024,Xm="t",z0="d",Yx="s",H0="r",$x="e",F0="o",j0="a",q0="n",G0="p",Qx="h";class Wx{constructor(e,t,s,a,l,c,d,p,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vc("c:"+this.id+":"),this.transportManager_=new nc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=ju(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Kx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Gx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xm in e){const t=e[Xm];t===j0?this.upgradeIfSecondaryHealthy_():t===H0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===F0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Iu("t",e),s=Iu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:G0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:j0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:q0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Iu("t",e),s=Iu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Iu(Xm,e);if(z0 in e){const s=e[z0];if(t===Qx){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===q0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Yx?this.onConnectionShutdown_(s):t===H0?this.onReset_(s):t===$x?Sg("Server Error: "+s):t===F0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Sg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),R_!==s&&Bn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),ju(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ju(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:G0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ta.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.allowedEvents_=e,this.listeners_={},ue(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ue(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf extends Xw{static getInstance(){return new Lf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!u_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ue(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=32,Y0=768;class ut{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function it(){return new ut("")}function Fe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Sr(n){return n.pieces_.length-n.pieceNum_}function lt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ut(n.pieces_,e)}function Zw(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Xx(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Jw(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function eR(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ut(e,0)}function Qt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof ut)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new ut(t,0)}function Ve(n){return n.pieceNum_>=n.pieces_.length}function ei(n,e){const t=Fe(n),s=Fe(e);if(t===null)return e;if(t===s)return ei(lt(n),lt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function tR(n,e){if(Sr(n)!==Sr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function fi(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Sr(n)>Sr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Zx{constructor(e,t){this.errorPrefix_=t,this.parts_=Jw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=sd(this.parts_[s]);nR(this)}}function Jx(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=sd(e),nR(n)}function eM(n){const e=n.parts_.pop();n.byteLength_-=sd(e),n.parts_.length>0&&(n.byteLength_-=1)}function nR(n){if(n.byteLength_>Y0)throw new Error(n.errorPrefix_+"has a key path longer than "+Y0+" bytes ("+n.byteLength_+").");if(n.parts_.length>K0)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+K0+") or object contains a cycle "+va(n))}function va(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_ extends Xw{static getInstance(){return new I_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ue(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=1e3,tM=60*5*1e3,$0=30*1e3,nM=1.3,iM=3e4,sM="server_kill",Q0=3;class Ss extends Ww{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Ss.nextPersistentConnectionId_++,this.log_=vc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Nu,this.maxReconnectDelay_=tM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");I_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Lf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(nn(l)),ue(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new a_,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),ue(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ue(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;Ss.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Os(e,"w")){const s=Yo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Bn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=DO(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),ue(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nn(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Sg("Unrecognized action received from server: "+nn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ue(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>iM&&(this.reconnectDelay_=Nu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Ss.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){ue(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,S]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?hn("getToken() completed but was canceled"):(hn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=S&&S.token,d=new Wx(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,N=>{Bn(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(sM)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Bn(T),p())}}}interrupt(e){hn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){hn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fg(this.interruptReasons_)&&(this.reconnectDelay_=Nu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>w_(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new ut(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){hn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Q0&&(this.reconnectDelay_=$0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){hn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Q0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Nw.replace(/\./g,"-")]=1,u_()?e["framework.cordova"]=1:qA()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Lf.getInstance().currentlyOnline();return fg(this.interruptReasons_)&&e}}Ss.nextPersistentConnectionId_=0;Ss.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new je(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new je($o,e),a=new je($o,t);return this.compare(s,a)!==0}minPost(){return je.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nf;class iR extends cd{static get __EMPTY_NODE(){return nf}static set __EMPTY_NODE(e){nf=e}compare(e,t){return ul(e.name,t.name)}isDefinedOn(e){throw al("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return je.MIN}maxPost(){return new je(Ca,nf)}makePost(e,t){return ue(typeof e=="string","KeyIndex indexValue must always be a string."),new je(e,nf)}toString(){return".key"}}const Go=new iR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Vn=class Lu{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Lu.RED,this.left=a??xi.EMPTY_NODE,this.right=l??xi.EMPTY_NODE}copy(e,t,s,a,l){return new Lu(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return xi.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return xi.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Lu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Lu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Vn.RED=!0;Vn.BLACK=!1;class rM{copy(e,t,s,a,l){return this}insert(e,t,s){return new Vn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let xi=class yf{constructor(e,t=yf.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new yf(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Vn.BLACK,null,null))}remove(e){return new yf(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Vn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sf(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new sf(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new sf(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new sf(this.root_,null,this.comparator_,!0,e)}};xi.EMPTY_NODE=new rM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aM(n,e){return ul(n.name,e.name)}function N_(n,e){return ul(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wg;function oM(n){wg=n}const sR=function(n){return typeof n=="number"?"number:"+Mw(n):"string:"+n},rR=function(n){if(n.isLeafNode()){const e=n.val();ue(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Os(e,".sv"),"Priority must be a string or number.")}else ue(n===wg||n.isEmpty(),"priority of unexpected type.");ue(n===wg||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let W0;class Yt{static set __childrenNodeConstructor(e){W0=e}static get __childrenNodeConstructor(){return W0}constructor(e,t=Yt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ue(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),rR(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Yt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ve(e)?this:Fe(e)===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Yt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Fe(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(ue(s!==".priority"||Sr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Yt.__childrenNodeConstructor.EMPTY_NODE.updateChild(lt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sR(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Mw(this.value_):e+=this.value_,this.lazyHash_=Dw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Yt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Yt.__childrenNodeConstructor?-1:(ue(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Yt.VALUE_TYPE_ORDER.indexOf(t),l=Yt.VALUE_TYPE_ORDER.indexOf(s);return ue(a>=0,"Unknown leaf type: "+t),ue(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Yt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aR,oR;function lM(n){aR=n}function uM(n){oR=n}class cM extends cd{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?ul(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return je.MIN}maxPost(){return new je(Ca,new Yt("[PRIORITY-POST]",oR))}makePost(e,t){const s=aR(e);return new je(t,new Yt("[PRIORITY-POST]",s))}toString(){return".priority"}}const pn=new cM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM=Math.log(2);class fM{constructor(e){const t=l=>parseInt(Math.log(l)/hM,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vf=function(n,e,t,s){n.sort(e);const a=function(p,g){const y=g-p;let T,S;if(y===0)return null;if(y===1)return T=n[p],S=t?t(T):T,new Vn(S,T.node,Vn.BLACK,null,null);{const N=parseInt(y/2,10)+p,I=a(p,N),F=a(N+1,g);return T=n[N],S=t?t(T):T,new Vn(S,T.node,Vn.BLACK,I,F)}},l=function(p){let g=null,y=null,T=n.length;const S=function(I,F){const U=T-I,Y=T;T-=I;const W=a(U+1,Y),te=n[U],oe=t?t(te):te;N(new Vn(oe,te.node,F,null,W))},N=function(I){g?(g.left=I,g=I):(y=I,g=I)};for(let I=0;I<p.count;++I){const F=p.nextBitIsOne(),U=Math.pow(2,p.count-(I+1));F?S(U,Vn.BLACK):(S(U,Vn.BLACK),S(U,Vn.RED))}return y},c=new fM(n.length),d=l(c);return new xi(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zm;const Mo={};class vs{static get Default(){return ue(Mo&&pn,"ChildrenNode.ts has not been loaded"),Zm=Zm||new vs({".priority":Mo},{".priority":pn}),Zm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Yo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof xi?t:null}hasIndex(e){return Os(this.indexSet_,e.toString())}addIndex(e,t){ue(e!==Go,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(je.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=Vf(s,e.getCompare()):d=Mo;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const y=Object.assign({},this.indexes_);return y[p]=d,new vs(y,g)}addToIndexes(e,t){const s=Cf(this.indexes_,(a,l)=>{const c=Yo(this.indexSet_,l);if(ue(c,"Missing index implementation for "+l),a===Mo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(je.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),Vf(d,c.getCompare())}else return Mo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new je(e.name,d))),p.insert(e,e.node)}});return new vs(s,this.indexSet_)}removeFromIndexes(e,t){const s=Cf(this.indexes_,a=>{if(a===Mo)return a;{const l=t.get(e.name);return l?a.remove(new je(e.name,l)):a}});return new vs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou;class $e{static get EMPTY_NODE(){return Ou||(Ou=new $e(new xi(N_),null,vs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&rR(this.priorityNode_),this.children_.isEmpty()&&ue(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ou}updatePriority(e){return this.children_.isEmpty()?this:new $e(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ou:t}}getChild(e){const t=Fe(e);return t===null?this:this.getImmediateChild(t).getChild(lt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ue(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new je(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Ou:this.priorityNode_;return new $e(a,c,l)}}updateChild(e,t){const s=Fe(e);if(s===null)return t;{ue(Fe(e)!==".priority"||Sr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(lt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(pn,(c,d)=>{t[c]=d.val(e),s++,l&&$e.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+sR(this.getPriority().val())+":"),this.forEachChild(pn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":Dw(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new je(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new je(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new je(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,je.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,je.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Tc?-1:0}withIndex(e){if(e===Go||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new $e(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Go||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(pn),a=t.getIterator(pn);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Go?null:this.indexMap_.get(e.toString())}}$e.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dM extends $e{constructor(){super(new xi(N_),$e.EMPTY_NODE,vs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $e.EMPTY_NODE}isEmpty(){return!1}}const Tc=new dM;Object.defineProperties(je,{MIN:{value:new je($o,$e.EMPTY_NODE)},MAX:{value:new je(Ca,Tc)}});iR.__EMPTY_NODE=$e.EMPTY_NODE;Yt.__childrenNodeConstructor=$e;oM(Tc);uM(Tc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pM=!0;function fn(n,e=null){if(n===null)return $e.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ue(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Yt(t,fn(e))}if(!(n instanceof Array)&&pM){const t=[];let s=!1;if(ii(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=fn(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new je(c,p)))}}),t.length===0)return $e.EMPTY_NODE;const l=Vf(t,aM,c=>c.name,N_);if(s){const c=Vf(t,pn.getCompare());return new $e(l,fn(e),new vs({".priority":c},{".priority":pn}))}else return new $e(l,fn(e),vs.Default)}else{let t=$e.EMPTY_NODE;return ii(n,(s,a)=>{if(Os(n,s)&&s.substring(0,1)!=="."){const l=fn(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(fn(e))}}lM(fn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM extends cd{constructor(e){super(),this.indexPath_=e,ue(!Ve(e)&&Fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?ul(e.name,t.name):l}makePost(e,t){const s=fn(e),a=$e.EMPTY_NODE.updateChild(this.indexPath_,s);return new je(t,a)}maxPost(){const e=$e.EMPTY_NODE.updateChild(this.indexPath_,Tc);return new je(Ca,e)}toString(){return Jw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM extends cd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ul(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return je.MIN}maxPost(){return je.MAX}makePost(e,t){const s=fn(e);return new je(t,s)}toString(){return".value"}}const _M=new gM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yM(n){return{type:"value",snapshotNode:n}}function vM(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function EM(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function X0(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function TM(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ue(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ue(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$o}hasEnd(){return this.endSet_}getIndexEndValue(){return ue(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ue(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ca}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ue(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pn}copy(){const e=new O_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Z0(n){const e={};if(n.isDefault())return e;let t;if(n.index_===pn?t="$priority":n.index_===_M?t="$value":n.index_===Go?t="$key":(ue(n.index_ instanceof mM,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=nn(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=nn(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+nn(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=nn(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+nn(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function J0(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==pn&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf extends Ww{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ue(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=vc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=Uf.getListenId_(e,s),d={};this.listens_[c]=d;const p=Z0(e._queryParams);this.restRequest_(l+".json",p,(g,y)=>{let T=y;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),Yo(this.listens_,c)===d){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",a(S,null)}})}unlisten(e,t){const s=Uf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Z0(e._queryParams),s=e._path.toString(),a=new a_;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ol(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=Zu(d.responseText)}catch{Bn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&Bn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(){this.rootNode_=$e.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(){return{value:null,children:new Map}}function lR(n,e,t){if(Ve(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Fe(e);n.children.has(s)||n.children.set(s,Bf());const a=n.children.get(s);e=lt(e),lR(a,e,t)}}function Rg(n,e,t){n.value!==null?t(e,n.value):AM(n,(s,a)=>{const l=new ut(e.toString()+"/"+s);Rg(a,l,t)})}function AM(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ii(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=10*1e3,RM=30*1e3,bM=5*60*1e3;class CM{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new wM(e);const s=eS+(RM-eS)*Math.random();ju(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ii(e,(a,l)=>{l>0&&Os(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),ju(this.reportStats_.bind(this),Math.floor(Math.random()*2*bM))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Mi||(Mi={}));function uR(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function cR(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hR(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Mi.ACK_USER_WRITE,this.source=uR()}operationForChild(e){if(Ve(this.path)){if(this.affectedTree.value!=null)return ue(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ut(e));return new zf(it(),t,this.revert)}}else return ue(Fe(this.path)===e,"operationForChild called for unrelated child."),new zf(lt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Mi.OVERWRITE}operationForChild(e){return Ve(this.path)?new Ia(this.source,it(),this.snap.getImmediateChild(e)):new Ia(this.source,lt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Mi.MERGE}operationForChild(e){if(Ve(this.path)){const t=this.children.subtree(new ut(e));return t.isEmpty()?null:t.value?new Ia(this.source,it(),t.value):new ic(this.source,it(),t)}else return ue(Fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ic(this.source,lt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ve(e))return this.isFullyInitialized()&&!this.filtered_;const t=Fe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function IM(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(TM(c.childName,c.snapshotNode))}),Du(n,a,"child_removed",e,s,t),Du(n,a,"child_added",e,s,t),Du(n,a,"child_moved",l,s,t),Du(n,a,"child_changed",e,s,t),Du(n,a,"value",e,s,t),a}function Du(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>OM(n,d,p)),c.forEach(d=>{const p=NM(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function NM(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function OM(n,e,t){if(e.childName==null||t.childName==null)throw al("Should only compare child_ events.");const s=new je(e.childName,e.snapshotNode),a=new je(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(n,e){return{eventCache:n,serverCache:e}}function qu(n,e,t,s){return fR(new D_(e,t,s),n.serverCache)}function dR(n,e,t,s){return fR(n.eventCache,new D_(e,t,s))}function bg(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Na(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jm;const DM=()=>(Jm||(Jm=new xi(gx)),Jm);class ot{static fromObject(e){let t=new ot(null);return ii(e,(s,a)=>{t=t.set(new ut(s),a)}),t}constructor(e,t=DM()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:it(),value:this.value};if(Ve(e))return null;{const s=Fe(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(lt(e),t);return l!=null?{path:Qt(new ut(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ve(e))return this;{const t=Fe(e),s=this.children.get(t);return s!==null?s.subtree(lt(e)):new ot(null)}}set(e,t){if(Ve(e))return new ot(t,this.children);{const s=Fe(e),l=(this.children.get(s)||new ot(null)).set(lt(e),t),c=this.children.insert(s,l);return new ot(this.value,c)}}remove(e){if(Ve(e))return this.children.isEmpty()?new ot(null):new ot(null,this.children);{const t=Fe(e),s=this.children.get(t);if(s){const a=s.remove(lt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ot(null):new ot(this.value,l)}else return this}}get(e){if(Ve(e))return this.value;{const t=Fe(e),s=this.children.get(t);return s?s.get(lt(e)):null}}setTree(e,t){if(Ve(e))return t;{const s=Fe(e),l=(this.children.get(s)||new ot(null)).setTree(lt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new ot(this.value,c)}}fold(e){return this.fold_(it(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Qt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,it(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Ve(e))return null;{const l=Fe(e),c=this.children.get(l);return c?c.findOnPath_(lt(e),Qt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,it(),t)}foreachOnPath_(e,t,s){if(Ve(e))return this;{this.value&&s(t,this.value);const a=Fe(e),l=this.children.get(a);return l?l.foreachOnPath_(lt(e),Qt(t,a),s):new ot(null)}}foreach(e){this.foreach_(it(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Qt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.writeTree_=e}static empty(){return new pi(new ot(null))}}function Gu(n,e,t){if(Ve(e))return new pi(new ot(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=ei(a,e);return l=l.updateChild(c,t),new pi(n.writeTree_.set(a,l))}else{const a=new ot(t),l=n.writeTree_.setTree(e,a);return new pi(l)}}}function tS(n,e,t){let s=n;return ii(t,(a,l)=>{s=Gu(s,Qt(e,a),l)}),s}function nS(n,e){if(Ve(e))return pi.empty();{const t=n.writeTree_.setTree(e,new ot(null));return new pi(t)}}function Cg(n,e){return Va(n,e)!=null}function Va(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ei(t.path,e)):null}function iS(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(pn,(s,a)=>{e.push(new je(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new je(s,a.value))}),e}function _r(n,e){if(Ve(e))return n;{const t=Va(n,e);return t!=null?new pi(new ot(t)):new pi(n.writeTree_.subtree(e))}}function Ig(n){return n.writeTree_.isEmpty()}function Qo(n,e){return pR(it(),n.writeTree_,e)}function pR(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ue(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=pR(Qt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Qt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(n,e){return ER(e,n)}function kM(n,e,t,s,a){ue(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=Gu(n.visibleWrites,e,t)),n.lastWriteId=s}function xM(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function MM(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ue(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&PM(d,s.path)?a=!1:fi(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return LM(n),!0;if(s.snap)n.visibleWrites=nS(n.visibleWrites,s.path);else{const d=s.children;ii(d,p=>{n.visibleWrites=nS(n.visibleWrites,Qt(s.path,p))})}return!0}else return!1}function PM(n,e){if(n.snap)return fi(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&fi(Qt(n.path,t),e))return!0;return!1}function LM(n){n.visibleWrites=gR(n.allWrites,VM,it()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function VM(n){return n.visible}function gR(n,e,t){let s=pi.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)fi(t,c)?(d=ei(t,c),s=Gu(s,d,l.snap)):fi(c,t)&&(d=ei(c,t),s=Gu(s,it(),l.snap.getChild(d)));else if(l.children){if(fi(t,c))d=ei(t,c),s=tS(s,d,l.children);else if(fi(c,t))if(d=ei(c,t),Ve(d))s=tS(s,it(),l.children);else{const p=Yo(l.children,Fe(d));if(p){const g=p.getChild(lt(d));s=Gu(s,it(),g)}}}else throw al("WriteRecord should have .snap or .children")}}return s}function _R(n,e,t,s,a){if(!s&&!a){const l=Va(n.visibleWrites,e);if(l!=null)return l;{const c=_r(n.visibleWrites,e);if(Ig(c))return t;if(t==null&&!Cg(c,it()))return null;{const d=t||$e.EMPTY_NODE;return Qo(c,d)}}}else{const l=_r(n.visibleWrites,e);if(!a&&Ig(l))return t;if(!a&&t==null&&!Cg(l,it()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(fi(g.path,e)||fi(e,g.path))},d=gR(n.allWrites,c,e),p=t||$e.EMPTY_NODE;return Qo(d,p)}}}function UM(n,e,t){let s=$e.EMPTY_NODE;const a=Va(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(pn,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=_r(n.visibleWrites,e);return t.forEachChild(pn,(c,d)=>{const p=Qo(_r(l,new ut(c)),d);s=s.updateImmediateChild(c,p)}),iS(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=_r(n.visibleWrites,e);return iS(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function BM(n,e,t,s,a){ue(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Qt(e,t);if(Cg(n.visibleWrites,l))return null;{const c=_r(n.visibleWrites,l);return Ig(c)?a.getChild(t):Qo(c,a.getChild(t))}}function zM(n,e,t,s){const a=Qt(e,t),l=Va(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=_r(n.visibleWrites,a);return Qo(c,s.getNode().getImmediateChild(t))}else return null}function HM(n,e){return Va(n.visibleWrites,e)}function FM(n,e,t,s,a,l,c){let d;const p=_r(n.visibleWrites,e),g=Va(p,it());if(g!=null)d=g;else if(t!=null)d=Qo(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],T=c.getCompare(),S=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let N=S.getNext();for(;N&&y.length<a;)T(N,s)!==0&&y.push(N),N=S.getNext();return y}else return[]}function jM(){return{visibleWrites:pi.empty(),allWrites:[],lastWriteId:-1}}function Ng(n,e,t,s){return _R(n.writeTree,n.treePath,e,t,s)}function yR(n,e){return UM(n.writeTree,n.treePath,e)}function sS(n,e,t,s){return BM(n.writeTree,n.treePath,e,t,s)}function Hf(n,e){return HM(n.writeTree,Qt(n.treePath,e))}function qM(n,e,t,s,a,l){return FM(n.writeTree,n.treePath,e,t,s,a,l)}function k_(n,e,t){return zM(n.writeTree,n.treePath,e,t)}function vR(n,e){return ER(Qt(n.treePath,e),n.writeTree)}function ER(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;ue(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ue(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,X0(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,EM(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,vM(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,X0(s,e.snapshotNode,a.oldSnap));else throw al("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const TR=new KM;class x_{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new D_(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return k_(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Na(this.viewCache_),l=qM(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function YM(n,e){ue(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ue(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function $M(n,e,t,s,a){const l=new GM;let c,d;if(t.type===Mi.OVERWRITE){const g=t;g.source.fromUser?c=Og(n,e,g.path,g.snap,s,a,l):(ue(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Ve(g.path),c=Ff(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===Mi.MERGE){const g=t;g.source.fromUser?c=WM(n,e,g.path,g.children,s,a,l):(ue(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=Dg(n,e,g.path,g.children,s,a,d,l))}else if(t.type===Mi.ACK_USER_WRITE){const g=t;g.revert?c=JM(n,e,g.path,s,a,l):c=XM(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Mi.LISTEN_COMPLETE)c=ZM(n,e,t.path,s,l);else throw al("Unknown operation type: "+t.type);const p=l.getChanges();return QM(e,c,p),{viewCache:c,changes:p}}function QM(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=bg(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(yM(bg(e)))}}function SR(n,e,t,s,a,l){const c=e.eventCache;if(Hf(s,t)!=null)return e;{let d,p;if(Ve(t))if(ue(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Na(e),y=g instanceof $e?g:$e.EMPTY_NODE,T=yR(s,y);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=Ng(s,Na(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Fe(t);if(g===".priority"){ue(Sr(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const T=sS(s,t,y,p);T!=null?d=n.filter.updatePriority(y,T):d=c.getNode()}else{const y=lt(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const S=sS(s,t,c.getNode(),p);S!=null?T=c.getNode().getImmediateChild(g).updateChild(y,S):T=c.getNode().getImmediateChild(g)}else T=k_(s,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,y,a,l):d=c.getNode()}}return qu(e,d,c.isFullyInitialized()||Ve(t),n.filter.filtersNodes())}}function Ff(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const y=c?n.filter:n.filter.getIndexedFilter();if(Ve(t))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const N=p.getNode().updateChild(t,s);g=y.updateFullNode(p.getNode(),N,null)}else{const N=Fe(t);if(!p.isCompleteForPath(t)&&Sr(t)>1)return e;const I=lt(t),U=p.getNode().getImmediateChild(N).updateChild(I,s);N===".priority"?g=y.updatePriority(p.getNode(),U):g=y.updateChild(p.getNode(),N,U,I,TR,null)}const T=dR(e,g,p.isFullyInitialized()||Ve(t),y.filtersNodes()),S=new x_(a,T,l);return SR(n,T,t,a,S,d)}function Og(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const y=new x_(a,e,l);if(Ve(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=qu(e,g,!0,n.filter.filtersNodes());else{const T=Fe(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=qu(e,g,d.isFullyInitialized(),d.isFiltered());else{const S=lt(t),N=d.getNode().getImmediateChild(T);let I;if(Ve(S))I=s;else{const F=y.getCompleteChild(T);F!=null?Zw(S)===".priority"&&F.getChild(eR(S)).isEmpty()?I=F:I=F.updateChild(S,s):I=$e.EMPTY_NODE}if(N.equals(I))p=e;else{const F=n.filter.updateChild(d.getNode(),T,I,S,y,c);p=qu(e,F,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function rS(n,e){return n.eventCache.isCompleteForChild(e)}function WM(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const y=Qt(t,p);rS(e,Fe(y))&&(d=Og(n,d,y,g,a,l,c))}),s.foreach((p,g)=>{const y=Qt(t,p);rS(e,Fe(y))||(d=Og(n,d,y,g,a,l,c))}),d}function aS(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Dg(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Ve(t)?g=s:g=new ot(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((T,S)=>{if(y.hasChild(T)){const N=e.serverCache.getNode().getImmediateChild(T),I=aS(n,N,S);p=Ff(n,p,new ut(T),I,a,l,c,d)}}),g.children.inorderTraversal((T,S)=>{const N=!e.serverCache.isCompleteForChild(T)&&S.value===null;if(!y.hasChild(T)&&!N){const I=e.serverCache.getNode().getImmediateChild(T),F=aS(n,I,S);p=Ff(n,p,new ut(T),F,a,l,c,d)}}),p}function XM(n,e,t,s,a,l,c){if(Hf(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Ve(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return Ff(n,e,t,p.getNode().getChild(t),a,l,d,c);if(Ve(t)){let g=new ot(null);return p.getNode().forEachChild(Go,(y,T)=>{g=g.set(new ut(y),T)}),Dg(n,e,t,g,a,l,d,c)}else return e}else{let g=new ot(null);return s.foreach((y,T)=>{const S=Qt(t,y);p.isCompleteForPath(S)&&(g=g.set(y,p.getNode().getChild(S)))}),Dg(n,e,t,g,a,l,d,c)}}function ZM(n,e,t,s,a){const l=e.serverCache,c=dR(e,l.getNode(),l.isFullyInitialized()||Ve(t),l.isFiltered());return SR(n,c,t,s,TR,a)}function JM(n,e,t,s,a,l){let c;if(Hf(s,t)!=null)return e;{const d=new x_(s,e,a),p=e.eventCache.getNode();let g;if(Ve(t)||Fe(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Ng(s,Na(e));else{const T=e.serverCache.getNode();ue(T instanceof $e,"serverChildren would be complete if leaf node"),y=yR(s,T)}y=y,g=n.filter.updateFullNode(p,y,l)}else{const y=Fe(t);let T=k_(s,y,e.serverCache);T==null&&e.serverCache.isCompleteForChild(y)&&(T=p.getImmediateChild(y)),T!=null?g=n.filter.updateChild(p,y,T,lt(t),d,l):e.eventCache.getNode().hasChild(y)?g=n.filter.updateChild(p,y,$e.EMPTY_NODE,lt(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Ng(s,Na(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||Hf(s,it())!=null,qu(e,g,c,n.filter.filtersNodes())}}function eP(n,e){const t=Na(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ve(e)&&!t.getImmediateChild(Fe(e)).isEmpty())?t.getChild(e):null}function oS(n,e,t,s){e.type===Mi.MERGE&&e.source.queryId!==null&&(ue(Na(n.viewCache_),"We should always have a full cache before handling merges"),ue(bg(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=$M(n.processor_,a,e,t,s);return YM(n.processor_,l.viewCache),ue(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,tP(n,l.changes,l.viewCache.eventCache.getNode())}function tP(n,e,t,s){const a=n.eventRegistrations_;return IM(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lS;function nP(n){ue(!lS,"__referenceConstructor has already been defined"),lS=n}function M_(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return ue(l!=null,"SyncTree gave us an op for an invalid query."),oS(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(oS(c,e,t,s));return l}}function P_(n,e){let t=null;for(const s of n.views.values())t=t||eP(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uS;function iP(n){ue(!uS,"__referenceConstructor has already been defined"),uS=n}class cS{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ot(null),this.pendingWriteTree_=jM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sP(n,e,t,s,a){return kM(n.pendingWriteTree_,e,t,s,a),a?fd(n,new Ia(uR(),e,t)):[]}function zo(n,e,t=!1){const s=xM(n.pendingWriteTree_,e);if(MM(n.pendingWriteTree_,e)){let l=new ot(null);return s.snap!=null?l=l.set(it(),!0):ii(s.children,c=>{l=l.set(new ut(c),!0)}),fd(n,new zf(s.path,l,t))}else return[]}function hd(n,e,t){return fd(n,new Ia(cR(),e,t))}function rP(n,e,t){const s=ot.fromObject(t);return fd(n,new ic(cR(),e,s))}function aP(n,e,t,s){const a=bR(n,s);if(a!=null){const l=CR(a),c=l.path,d=l.queryId,p=ei(c,e),g=new Ia(hR(d),p,t);return IR(n,c,g)}else return[]}function oP(n,e,t,s){const a=bR(n,s);if(a){const l=CR(a),c=l.path,d=l.queryId,p=ei(c,e),g=ot.fromObject(t),y=new ic(hR(d),p,g);return IR(n,c,y)}else return[]}function AR(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=ei(c,e),g=P_(d,p);if(g)return g});return _R(a,e,l,t,!0)}function fd(n,e){return wR(e,n.syncPointTree_,null,mR(n.pendingWriteTree_,it()))}function wR(n,e,t,s){if(Ve(n.path))return RR(n,e,t,s);{const a=e.get(it());t==null&&a!=null&&(t=P_(a,it()));let l=[];const c=Fe(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,y=vR(s,c);l=l.concat(wR(d,p,g,y))}return a&&(l=l.concat(M_(a,n,s,t))),l}}function RR(n,e,t,s){const a=e.get(it());t==null&&a!=null&&(t=P_(a,it()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=vR(s,c),y=n.operationForChild(c);y&&(l=l.concat(RR(y,d,p,g)))}),a&&(l=l.concat(M_(a,n,s,t))),l}function bR(n,e){return n.tagToQueryMap.get(e)}function CR(n){const e=n.indexOf("$");return ue(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ut(n.substr(0,e))}}function IR(n,e,t){const s=n.syncPointTree_.get(e);ue(s,"Missing sync point for query tag that we're tracking");const a=mR(n.pendingWriteTree_,e);return M_(s,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new L_(t)}node(){return this.node_}}class V_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Qt(this.path_,e);return new V_(this.syncTree_,t)}node(){return AR(this.syncTree_,this.path_)}}const lP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},hS=function(n,e,t){if(!n||typeof n!="object")return n;if(ue(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return uP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return cP(n[".sv"],e);ue(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},uP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ue(!1,"Unexpected server value: "+n)}},cP=function(n,e,t){n.hasOwnProperty("increment")||ue(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&ue(!1,"Unexpected increment value: "+s);const a=e.node();if(ue(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},hP=function(n,e,t,s){return U_(e,new V_(t,n),s)},fP=function(n,e,t){return U_(n,new L_(e),t)};function U_(n,e,t){const s=n.getPriority().val(),a=hS(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=hS(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Yt(d,fn(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Yt(a))),c.forEachChild(pn,(d,p)=>{const g=U_(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function z_(n,e){let t=e instanceof ut?e:new ut(e),s=n,a=Fe(t);for(;a!==null;){const l=Yo(s.node.children,a)||{children:{},childCount:0};s=new B_(a,s,l),t=lt(t),a=Fe(t)}return s}function cl(n){return n.node.value}function NR(n,e){n.node.value=e,kg(n)}function OR(n){return n.node.childCount>0}function dP(n){return cl(n)===void 0&&!OR(n)}function dd(n,e){ii(n.node.children,(t,s)=>{e(new B_(t,n,s))})}function DR(n,e,t,s){t&&e(n),dd(n,a=>{DR(a,e,!0)})}function pP(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Sc(n){return new ut(n.parent===null?n.name:Sc(n.parent)+"/"+n.name)}function kg(n){n.parent!==null&&mP(n.parent,n.name,n)}function mP(n,e,t){const s=dP(t),a=Os(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,kg(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,kg(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=/[\[\].#$\/\u0000-\u001F\u007F]/,_P=/[\[\].#$\u0000-\u001F\u007F]/,eg=10*1024*1024,kR=function(n){return typeof n=="string"&&n.length!==0&&!gP.test(n)},yP=function(n){return typeof n=="string"&&n.length!==0&&!_P.test(n)},vP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yP(n)},xR=function(n,e,t){const s=t instanceof ut?new Zx(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+va(s));if(typeof e=="function")throw new Error(n+"contains a function "+va(s)+" with contents = "+e.toString());if(kw(e))throw new Error(n+"contains "+e.toString()+" "+va(s));if(typeof e=="string"&&e.length>eg/3&&sd(e)>eg)throw new Error(n+"contains a string greater than "+eg+" utf8 bytes "+va(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(ii(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!kR(c)))throw new Error(n+" contains an invalid key ("+c+") "+va(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Jx(s,c),xR(n,d,s),eM(s)}),a&&l)throw new Error(n+' contains ".value" child '+va(s)+" in addition to actual children.")}},EP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!kR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!vP(t))throw new Error(VO(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function SP(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!tR(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function Ua(n,e,t){SP(n,t),AP(n,s=>fi(s,e)||fi(e,s))}function AP(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(wP(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function wP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Fu&&hn("event: "+t.toString()),Ec(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP="repo_interrupt",bP=25;class CP{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bf(),this.transactionQueueTree_=new B_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function IP(n,e,t){if(n.stats_=b_(n.repoInfo_),n.forceRestClient_||Sx())n.server_=new Uf(n.repoInfo_,(s,a,l,c)=>{fS(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>dS(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nn(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ss(n.repoInfo_,e,(s,a,l,c)=>{fS(n,s,a,l,c)},s=>{dS(n,s)},s=>{OP(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Ix(n.repoInfo_,()=>new CM(n.stats_,n.server_)),n.infoData_=new SM,n.infoSyncTree_=new cS({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=hd(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),H_(n,"connected",!1),n.serverSyncTree_=new cS({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);Ua(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function NP(n){const t=n.infoData_.getNode(new ut(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function MR(n){return lP({timestamp:NP(n)})}function fS(n,e,t,s,a){n.dataUpdateCount++;const l=new ut(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=Cf(t,g=>fn(g));c=oP(n.serverSyncTree_,l,p,a)}else{const p=fn(t);c=aP(n.serverSyncTree_,l,p,a)}else if(s){const p=Cf(t,g=>fn(g));c=rP(n.serverSyncTree_,l,p)}else{const p=fn(t);c=hd(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=j_(n,l)),Ua(n.eventQueue_,d,c)}function dS(n,e){H_(n,"connected",e),e===!1&&kP(n)}function OP(n,e){ii(e,(t,s)=>{H_(n,t,s)})}function H_(n,e,t){const s=new ut("/.info/"+e),a=fn(t);n.infoData_.updateSnapshot(s,a);const l=hd(n.infoSyncTree_,s,a);Ua(n.eventQueue_,s,l)}function DP(n){return n.nextWriteId_++}function kP(n){PR(n,"onDisconnectEvents");const e=MR(n),t=Bf();Rg(n.onDisconnect_,it(),(a,l)=>{const c=hP(a,l,n.serverSyncTree_,e);lR(t,a,c)});let s=[];Rg(t,it(),(a,l)=>{s=s.concat(hd(n.serverSyncTree_,a,l));const c=LP(n,a);j_(n,c)}),n.onDisconnect_=Bf(),Ua(n.eventQueue_,it(),s)}function xP(n){n.persistentConnection_&&n.persistentConnection_.interrupt(RP)}function PR(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),hn(t,...e)}function LR(n,e,t){return AR(n.serverSyncTree_,e,t)||$e.EMPTY_NODE}function F_(n,e=n.transactionQueueTree_){if(e||pd(n,e),cl(e)){const t=UR(n,e);ue(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&MP(n,Sc(e),t)}else OR(e)&&dd(e,t=>{F_(n,t)})}function MP(n,e,t){const s=t.map(g=>g.currentWriteId),a=LR(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];ue(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=ei(e,y.path);l=l.updateChild(T,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{PR(n,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const T=[];for(let S=0;S<t.length;S++)t[S].status=2,y=y.concat(zo(n.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&T.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();pd(n,z_(n.transactionQueueTree_,e)),F_(n,n.transactionQueueTree_),Ua(n.eventQueue_,e,y);for(let S=0;S<T.length;S++)Ec(T[S])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Bn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}j_(n,e)}},c)}function j_(n,e){const t=VR(n,e),s=Sc(t),a=UR(n,t);return PP(n,a,s),s}function PP(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=ei(t,p.path);let y=!1,T;if(ue(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,T=p.abortReason,a=a.concat(zo(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=bP)y=!0,T="maxretry",a=a.concat(zo(n.serverSyncTree_,p.currentWriteId,!0));else{const S=LR(n,p.path,c);p.currentInputSnapshot=S;const N=e[d].update(S.val());if(N!==void 0){xR("transaction failed: Data returned ",N,p.path);let I=fn(N);typeof N=="object"&&N!=null&&Os(N,".priority")||(I=I.updatePriority(S.getPriority()));const U=p.currentWriteId,Y=MR(n),W=fP(I,S,Y);p.currentOutputSnapshotRaw=I,p.currentOutputSnapshotResolved=W,p.currentWriteId=DP(n),c.splice(c.indexOf(U),1),a=a.concat(sP(n.serverSyncTree_,p.path,W,p.currentWriteId,p.applyLocally)),a=a.concat(zo(n.serverSyncTree_,U,!0))}else y=!0,T="nodata",a=a.concat(zo(n.serverSyncTree_,p.currentWriteId,!0))}Ua(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,function(S){setTimeout(S,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}pd(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)Ec(s[d]);F_(n,n.transactionQueueTree_)}function VR(n,e){let t,s=n.transactionQueueTree_;for(t=Fe(e);t!==null&&cl(s)===void 0;)s=z_(s,t),e=lt(e),t=Fe(e);return s}function UR(n,e){const t=[];return BR(n,e,t),t.sort((s,a)=>s.order-a.order),t}function BR(n,e,t){const s=cl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);dd(e,a=>{BR(n,a,t)})}function pd(n,e){const t=cl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,NR(e,t.length>0?t:void 0)}dd(e,s=>{pd(n,s)})}function LP(n,e){const t=Sc(VR(n,e)),s=z_(n.transactionQueueTree_,e);return pP(s,a=>{tg(n,a)}),tg(n,s),DR(s,a=>{tg(n,a)}),t}function tg(n,e){const t=cl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(ue(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(ue(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(zo(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?NR(e,void 0):t.length=l+1,Ua(n.eventQueue_,Sc(e),a);for(let c=0;c<s.length;c++)Ec(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function UP(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Bn(`Invalid query segment '${t}' in query '${n}'`)}return e}const pS=function(n,e){const t=BP(n),s=t.namespace;t.domain==="firebase.com"&&ba(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ba("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||px();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Rx(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new ut(t.pathString)}},BP=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let y=n.indexOf("/");y===-1&&(y=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(y,T)),y<T&&(a=VP(n.substring(y,T)));const S=UP(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const N=e.slice(0,g);if(N.toLowerCase()==="localhost")t="localhost";else if(N.split(".").length<=2)t=N;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),t=e.substring(I+1),l=s}"ns"in S&&(l=S.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Ve(this._path)?null:Zw(this._path)}get ref(){return new hl(this._repo,this._path)}get _queryIdentifier(){const e=J0(this._queryParams),t=w_(e);return t==="{}"?"default":t}get _queryObject(){return J0(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof q_))return!1;const t=this._repo===e._repo,s=tR(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+Xx(this._path)}}class hl extends q_{constructor(e,t){super(e,t,new O_,!1)}get parent(){const e=eR(this._path);return e===null?null:new hl(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}nP(hl);iP(hl);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP="FIREBASE_DATABASE_EMULATOR_HOST",xg={};let HP=!1;function FP(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||ba("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),hn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=pS(l,a),d=c.repoInfo,p;typeof process<"u"&&M0&&(p=M0[zP]),p?(l=`http://${p}?ns=${d.namespace}`,c=pS(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new wx(n.name,n.options,e);EP("Invalid Firebase Database URL",c),Ve(c.path)||ba("Database URL must point to the root of a Firebase Database (not including a child path).");const y=qP(d,n,g,new Ax(n,t));return new GP(y,n)}function jP(n,e){const t=xg[e];(!t||t[n.key]!==n)&&ba(`Database ${e}(${n.repoInfo_}) has already been deleted.`),xP(n),delete t[n.key]}function qP(n,e,t,s){let a=xg[e.name];a||(a={},xg[e.name]=a);let l=a[n.toURLString()];return l&&ba("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new CP(n,HP,t,s),a[n.toURLString()]=l,l}class GP{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(IP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new hl(this._repo,it())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ba("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KP(n){lx(Nr),Tr(new ws("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return FP(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),ti(P0,L0,n),ti(P0,L0,"esm2017")}Ss.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ss.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};KP();var mS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yr,zR;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,R){function b(){}b.prototype=R.prototype,x.D=R.prototype,x.prototype=new b,x.prototype.constructor=x,x.C=function(k,P,V){for(var O=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)O[kt-2]=arguments[kt];return R.prototype[P].apply(k,O)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(x,R,b){b||(b=0);var k=Array(16);if(typeof R=="string")for(var P=0;16>P;++P)k[P]=R.charCodeAt(b++)|R.charCodeAt(b++)<<8|R.charCodeAt(b++)<<16|R.charCodeAt(b++)<<24;else for(P=0;16>P;++P)k[P]=R[b++]|R[b++]<<8|R[b++]<<16|R[b++]<<24;R=x.g[0],b=x.g[1],P=x.g[2];var V=x.g[3],O=R+(V^b&(P^V))+k[0]+3614090360&4294967295;R=b+(O<<7&4294967295|O>>>25),O=V+(P^R&(b^P))+k[1]+3905402710&4294967295,V=R+(O<<12&4294967295|O>>>20),O=P+(b^V&(R^b))+k[2]+606105819&4294967295,P=V+(O<<17&4294967295|O>>>15),O=b+(R^P&(V^R))+k[3]+3250441966&4294967295,b=P+(O<<22&4294967295|O>>>10),O=R+(V^b&(P^V))+k[4]+4118548399&4294967295,R=b+(O<<7&4294967295|O>>>25),O=V+(P^R&(b^P))+k[5]+1200080426&4294967295,V=R+(O<<12&4294967295|O>>>20),O=P+(b^V&(R^b))+k[6]+2821735955&4294967295,P=V+(O<<17&4294967295|O>>>15),O=b+(R^P&(V^R))+k[7]+4249261313&4294967295,b=P+(O<<22&4294967295|O>>>10),O=R+(V^b&(P^V))+k[8]+1770035416&4294967295,R=b+(O<<7&4294967295|O>>>25),O=V+(P^R&(b^P))+k[9]+2336552879&4294967295,V=R+(O<<12&4294967295|O>>>20),O=P+(b^V&(R^b))+k[10]+4294925233&4294967295,P=V+(O<<17&4294967295|O>>>15),O=b+(R^P&(V^R))+k[11]+2304563134&4294967295,b=P+(O<<22&4294967295|O>>>10),O=R+(V^b&(P^V))+k[12]+1804603682&4294967295,R=b+(O<<7&4294967295|O>>>25),O=V+(P^R&(b^P))+k[13]+4254626195&4294967295,V=R+(O<<12&4294967295|O>>>20),O=P+(b^V&(R^b))+k[14]+2792965006&4294967295,P=V+(O<<17&4294967295|O>>>15),O=b+(R^P&(V^R))+k[15]+1236535329&4294967295,b=P+(O<<22&4294967295|O>>>10),O=R+(P^V&(b^P))+k[1]+4129170786&4294967295,R=b+(O<<5&4294967295|O>>>27),O=V+(b^P&(R^b))+k[6]+3225465664&4294967295,V=R+(O<<9&4294967295|O>>>23),O=P+(R^b&(V^R))+k[11]+643717713&4294967295,P=V+(O<<14&4294967295|O>>>18),O=b+(V^R&(P^V))+k[0]+3921069994&4294967295,b=P+(O<<20&4294967295|O>>>12),O=R+(P^V&(b^P))+k[5]+3593408605&4294967295,R=b+(O<<5&4294967295|O>>>27),O=V+(b^P&(R^b))+k[10]+38016083&4294967295,V=R+(O<<9&4294967295|O>>>23),O=P+(R^b&(V^R))+k[15]+3634488961&4294967295,P=V+(O<<14&4294967295|O>>>18),O=b+(V^R&(P^V))+k[4]+3889429448&4294967295,b=P+(O<<20&4294967295|O>>>12),O=R+(P^V&(b^P))+k[9]+568446438&4294967295,R=b+(O<<5&4294967295|O>>>27),O=V+(b^P&(R^b))+k[14]+3275163606&4294967295,V=R+(O<<9&4294967295|O>>>23),O=P+(R^b&(V^R))+k[3]+4107603335&4294967295,P=V+(O<<14&4294967295|O>>>18),O=b+(V^R&(P^V))+k[8]+1163531501&4294967295,b=P+(O<<20&4294967295|O>>>12),O=R+(P^V&(b^P))+k[13]+2850285829&4294967295,R=b+(O<<5&4294967295|O>>>27),O=V+(b^P&(R^b))+k[2]+4243563512&4294967295,V=R+(O<<9&4294967295|O>>>23),O=P+(R^b&(V^R))+k[7]+1735328473&4294967295,P=V+(O<<14&4294967295|O>>>18),O=b+(V^R&(P^V))+k[12]+2368359562&4294967295,b=P+(O<<20&4294967295|O>>>12),O=R+(b^P^V)+k[5]+4294588738&4294967295,R=b+(O<<4&4294967295|O>>>28),O=V+(R^b^P)+k[8]+2272392833&4294967295,V=R+(O<<11&4294967295|O>>>21),O=P+(V^R^b)+k[11]+1839030562&4294967295,P=V+(O<<16&4294967295|O>>>16),O=b+(P^V^R)+k[14]+4259657740&4294967295,b=P+(O<<23&4294967295|O>>>9),O=R+(b^P^V)+k[1]+2763975236&4294967295,R=b+(O<<4&4294967295|O>>>28),O=V+(R^b^P)+k[4]+1272893353&4294967295,V=R+(O<<11&4294967295|O>>>21),O=P+(V^R^b)+k[7]+4139469664&4294967295,P=V+(O<<16&4294967295|O>>>16),O=b+(P^V^R)+k[10]+3200236656&4294967295,b=P+(O<<23&4294967295|O>>>9),O=R+(b^P^V)+k[13]+681279174&4294967295,R=b+(O<<4&4294967295|O>>>28),O=V+(R^b^P)+k[0]+3936430074&4294967295,V=R+(O<<11&4294967295|O>>>21),O=P+(V^R^b)+k[3]+3572445317&4294967295,P=V+(O<<16&4294967295|O>>>16),O=b+(P^V^R)+k[6]+76029189&4294967295,b=P+(O<<23&4294967295|O>>>9),O=R+(b^P^V)+k[9]+3654602809&4294967295,R=b+(O<<4&4294967295|O>>>28),O=V+(R^b^P)+k[12]+3873151461&4294967295,V=R+(O<<11&4294967295|O>>>21),O=P+(V^R^b)+k[15]+530742520&4294967295,P=V+(O<<16&4294967295|O>>>16),O=b+(P^V^R)+k[2]+3299628645&4294967295,b=P+(O<<23&4294967295|O>>>9),O=R+(P^(b|~V))+k[0]+4096336452&4294967295,R=b+(O<<6&4294967295|O>>>26),O=V+(b^(R|~P))+k[7]+1126891415&4294967295,V=R+(O<<10&4294967295|O>>>22),O=P+(R^(V|~b))+k[14]+2878612391&4294967295,P=V+(O<<15&4294967295|O>>>17),O=b+(V^(P|~R))+k[5]+4237533241&4294967295,b=P+(O<<21&4294967295|O>>>11),O=R+(P^(b|~V))+k[12]+1700485571&4294967295,R=b+(O<<6&4294967295|O>>>26),O=V+(b^(R|~P))+k[3]+2399980690&4294967295,V=R+(O<<10&4294967295|O>>>22),O=P+(R^(V|~b))+k[10]+4293915773&4294967295,P=V+(O<<15&4294967295|O>>>17),O=b+(V^(P|~R))+k[1]+2240044497&4294967295,b=P+(O<<21&4294967295|O>>>11),O=R+(P^(b|~V))+k[8]+1873313359&4294967295,R=b+(O<<6&4294967295|O>>>26),O=V+(b^(R|~P))+k[15]+4264355552&4294967295,V=R+(O<<10&4294967295|O>>>22),O=P+(R^(V|~b))+k[6]+2734768916&4294967295,P=V+(O<<15&4294967295|O>>>17),O=b+(V^(P|~R))+k[13]+1309151649&4294967295,b=P+(O<<21&4294967295|O>>>11),O=R+(P^(b|~V))+k[4]+4149444226&4294967295,R=b+(O<<6&4294967295|O>>>26),O=V+(b^(R|~P))+k[11]+3174756917&4294967295,V=R+(O<<10&4294967295|O>>>22),O=P+(R^(V|~b))+k[2]+718787259&4294967295,P=V+(O<<15&4294967295|O>>>17),O=b+(V^(P|~R))+k[9]+3951481745&4294967295,x.g[0]=x.g[0]+R&4294967295,x.g[1]=x.g[1]+(P+(O<<21&4294967295|O>>>11))&4294967295,x.g[2]=x.g[2]+P&4294967295,x.g[3]=x.g[3]+V&4294967295}s.prototype.u=function(x,R){R===void 0&&(R=x.length);for(var b=R-this.blockSize,k=this.B,P=this.h,V=0;V<R;){if(P==0)for(;V<=b;)a(this,x,V),V+=this.blockSize;if(typeof x=="string"){for(;V<R;)if(k[P++]=x.charCodeAt(V++),P==this.blockSize){a(this,k),P=0;break}}else for(;V<R;)if(k[P++]=x[V++],P==this.blockSize){a(this,k),P=0;break}}this.h=P,this.o+=R},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var R=1;R<x.length-8;++R)x[R]=0;var b=8*this.o;for(R=x.length-8;R<x.length;++R)x[R]=b&255,b/=256;for(this.u(x),x=Array(16),R=b=0;4>R;++R)for(var k=0;32>k;k+=8)x[b++]=this.g[R]>>>k&255;return x};function l(x,R){var b=d;return Object.prototype.hasOwnProperty.call(b,x)?b[x]:b[x]=R(x)}function c(x,R){this.h=R;for(var b=[],k=!0,P=x.length-1;0<=P;P--){var V=x[P]|0;k&&V==R||(b[P]=V,k=!1)}this.g=b}var d={};function p(x){return-128<=x&&128>x?l(x,function(R){return new c([R|0],0>R?-1:0)}):new c([x|0],0>x?-1:0)}function g(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return U(g(-x));for(var R=[],b=1,k=0;x>=b;k++)R[k]=x/b|0,b*=4294967296;return new c(R,0)}function y(x,R){if(x.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(x.charAt(0)=="-")return U(y(x.substring(1),R));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=g(Math.pow(R,8)),k=T,P=0;P<x.length;P+=8){var V=Math.min(8,x.length-P),O=parseInt(x.substring(P,P+V),R);8>V?(V=g(Math.pow(R,V)),k=k.j(V).add(g(O))):(k=k.j(b),k=k.add(g(O)))}return k}var T=p(0),S=p(1),N=p(16777216);n=c.prototype,n.m=function(){if(F(this))return-U(this).m();for(var x=0,R=1,b=0;b<this.g.length;b++){var k=this.i(b);x+=(0<=k?k:4294967296+k)*R,R*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(I(this))return"0";if(F(this))return"-"+U(this).toString(x);for(var R=g(Math.pow(x,6)),b=this,k="";;){var P=oe(b,R).g;b=Y(b,P.j(R));var V=((0<b.g.length?b.g[0]:b.h)>>>0).toString(x);if(b=P,I(b))return V+k;for(;6>V.length;)V="0"+V;k=V+k}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function I(x){if(x.h!=0)return!1;for(var R=0;R<x.g.length;R++)if(x.g[R]!=0)return!1;return!0}function F(x){return x.h==-1}n.l=function(x){return x=Y(this,x),F(x)?-1:I(x)?0:1};function U(x){for(var R=x.g.length,b=[],k=0;k<R;k++)b[k]=~x.g[k];return new c(b,~x.h).add(S)}n.abs=function(){return F(this)?U(this):this},n.add=function(x){for(var R=Math.max(this.g.length,x.g.length),b=[],k=0,P=0;P<=R;P++){var V=k+(this.i(P)&65535)+(x.i(P)&65535),O=(V>>>16)+(this.i(P)>>>16)+(x.i(P)>>>16);k=O>>>16,V&=65535,O&=65535,b[P]=O<<16|V}return new c(b,b[b.length-1]&-2147483648?-1:0)};function Y(x,R){return x.add(U(R))}n.j=function(x){if(I(this)||I(x))return T;if(F(this))return F(x)?U(this).j(U(x)):U(U(this).j(x));if(F(x))return U(this.j(U(x)));if(0>this.l(N)&&0>x.l(N))return g(this.m()*x.m());for(var R=this.g.length+x.g.length,b=[],k=0;k<2*R;k++)b[k]=0;for(k=0;k<this.g.length;k++)for(var P=0;P<x.g.length;P++){var V=this.i(k)>>>16,O=this.i(k)&65535,kt=x.i(P)>>>16,ct=x.i(P)&65535;b[2*k+2*P]+=O*ct,W(b,2*k+2*P),b[2*k+2*P+1]+=V*ct,W(b,2*k+2*P+1),b[2*k+2*P+1]+=O*kt,W(b,2*k+2*P+1),b[2*k+2*P+2]+=V*kt,W(b,2*k+2*P+2)}for(k=0;k<R;k++)b[k]=b[2*k+1]<<16|b[2*k];for(k=R;k<2*R;k++)b[k]=0;return new c(b,0)};function W(x,R){for(;(x[R]&65535)!=x[R];)x[R+1]+=x[R]>>>16,x[R]&=65535,R++}function te(x,R){this.g=x,this.h=R}function oe(x,R){if(I(R))throw Error("division by zero");if(I(x))return new te(T,T);if(F(x))return R=oe(U(x),R),new te(U(R.g),U(R.h));if(F(R))return R=oe(x,U(R)),new te(U(R.g),R.h);if(30<x.g.length){if(F(x)||F(R))throw Error("slowDivide_ only works with positive integers.");for(var b=S,k=R;0>=k.l(x);)b=ce(b),k=ce(k);var P=Te(b,1),V=Te(k,1);for(k=Te(k,2),b=Te(b,2);!I(k);){var O=V.add(k);0>=O.l(x)&&(P=P.add(b),V=O),k=Te(k,1),b=Te(b,1)}return R=Y(x,P.j(R)),new te(P,R)}for(P=T;0<=x.l(R);){for(b=Math.max(1,Math.floor(x.m()/R.m())),k=Math.ceil(Math.log(b)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),V=g(b),O=V.j(R);F(O)||0<O.l(x);)b-=k,V=g(b),O=V.j(R);I(V)&&(V=S),P=P.add(V),x=Y(x,O)}return new te(P,x)}n.A=function(x){return oe(this,x).h},n.and=function(x){for(var R=Math.max(this.g.length,x.g.length),b=[],k=0;k<R;k++)b[k]=this.i(k)&x.i(k);return new c(b,this.h&x.h)},n.or=function(x){for(var R=Math.max(this.g.length,x.g.length),b=[],k=0;k<R;k++)b[k]=this.i(k)|x.i(k);return new c(b,this.h|x.h)},n.xor=function(x){for(var R=Math.max(this.g.length,x.g.length),b=[],k=0;k<R;k++)b[k]=this.i(k)^x.i(k);return new c(b,this.h^x.h)};function ce(x){for(var R=x.g.length+1,b=[],k=0;k<R;k++)b[k]=x.i(k)<<1|x.i(k-1)>>>31;return new c(b,x.h)}function Te(x,R){var b=R>>5;R%=32;for(var k=x.g.length-b,P=[],V=0;V<k;V++)P[V]=0<R?x.i(V+b)>>>R|x.i(V+b+1)<<32-R:x.i(V+b);return new c(P,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,zR=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,yr=c}).apply(typeof mS<"u"?mS:typeof self<"u"?self:typeof window<"u"?window:{});var rf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var HR,Vu,FR,vf,Mg,jR,qR,GR;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof rf=="object"&&rf];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var w=0;w<h.length-1;w++){var B=h[w];if(!(B in v))break e;v=v[B]}h=h[h.length-1],w=v[h],_=_(w),_!=w&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,w=!1,B={next:function(){if(!w&&v<h.length){var G=v++;return{value:_(G,h[G]),done:!1}}return w=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,w),h.apply(_,B)}}return function(){return h.apply(_,arguments)}}function S(h,_,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,S.apply(null,arguments)}function N(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var w=v.slice();return w.push.apply(w,arguments),h.apply(this,w)}}function I(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(w,B,G){for(var ae=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)ae[Ue-2]=arguments[Ue];return _.prototype[B].apply(w,ae)}}function F(h){const _=h.length;if(0<_){const v=Array(_);for(let w=0;w<_;w++)v[w]=h[w];return v}return[]}function U(h,_){for(let v=1;v<arguments.length;v++){const w=arguments[v];if(p(w)){const B=h.length||0,G=w.length||0;h.length=B+G;for(let ae=0;ae<G;ae++)h[B+ae]=w[ae]}else h.push(w)}}class Y{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function W(h){return/^[\s\xa0]*$/.test(h)}function te(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function oe(h){return oe[" "](h),h}oe[" "]=function(){};var ce=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function Te(h,_,v){for(const w in h)_.call(v,h[w],w,h)}function x(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function R(h){const _={};for(const v in h)_[v]=h[v];return _}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(h,_){let v,w;for(let B=1;B<arguments.length;B++){w=arguments[B];for(v in w)h[v]=w[v];for(let G=0;G<b.length;G++)v=b[G],Object.prototype.hasOwnProperty.call(w,v)&&(h[v]=w[v])}}function P(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function V(h){d.setTimeout(()=>{throw h},0)}function O(){var h=Le;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class kt{constructor(){this.h=this.g=null}add(_,v){const w=ct.get();w.set(_,v),this.h?this.h.next=w:this.g=w,this.h=w}}var ct=new Y(()=>new $,h=>h.reset());class ${constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,de=!1,Le=new kt,D=()=>{const h=d.Promise.resolve(void 0);ie=()=>{h.then(ee)}};var ee=()=>{for(var h;h=O();){try{h.h.call(h.g)}catch(v){V(v)}var _=ct;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}de=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var me=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h}();function Oe(h,_){if(se.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,w=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ce){e:{try{oe(_.nodeName);var B=!0;break e}catch{}B=!1}B||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:we[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Oe.aa.h.call(this)}}I(Oe,se);var we={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Ht="closure_listenable_"+(1e6*Math.random()|0),rt=0;function mi(h,_,v,w,B){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!w,this.ha=B,this.key=++rt,this.da=this.fa=!1}function Ds(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Gi(h){this.src=h,this.g={},this.h=0}Gi.prototype.add=function(h,_,v,w,B){var G=h.toString();h=this.g[G],h||(h=this.g[G]=[],this.h++);var ae=Lr(h,_,w,B);return-1<ae?(_=h[ae],v||(_.fa=!1)):(_=new mi(_,this.src,G,!!w,B),_.fa=v,h.push(_)),_};function Pr(h,_){var v=_.type;if(v in h.g){var w=h.g[v],B=Array.prototype.indexOf.call(w,_,void 0),G;(G=0<=B)&&Array.prototype.splice.call(w,B,1),G&&(Ds(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Lr(h,_,v,w){for(var B=0;B<h.length;++B){var G=h[B];if(!G.da&&G.listener==_&&G.capture==!!v&&G.ha==w)return B}return-1}var Vr="closure_lm_"+(1e6*Math.random()|0),gl={};function Oc(h,_,v,w,B){if(Array.isArray(_)){for(var G=0;G<_.length;G++)Oc(h,_[G],v,w,B);return null}return v=Dc(v),h&&h[Ht]?h.K(_,v,g(w)?!!w.capture:!1,B):Hn(h,_,v,!1,w,B)}function Hn(h,_,v,w,B,G){if(!_)throw Error("Invalid event type");var ae=g(B)?!!B.capture:!!B,Ue=Fa(h);if(Ue||(h[Vr]=Ue=new Gi(h)),v=Ue.add(_,v,w,ae,G),v.proxy)return v;if(w=Md(),v.proxy=w,w.src=h,w.listener=v,h.addEventListener)me||(B=ae),B===void 0&&(B=!1),h.addEventListener(_.toString(),w,B);else if(h.attachEvent)h.attachEvent(Ur(_.toString()),w);else if(h.addListener&&h.removeListener)h.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Md(){function h(v){return _.call(h.src,h.listener,v)}const _=Pd;return h}function _l(h,_,v,w,B){if(Array.isArray(_))for(var G=0;G<_.length;G++)_l(h,_[G],v,w,B);else w=g(w)?!!w.capture:!!w,v=Dc(v),h&&h[Ht]?(h=h.i,_=String(_).toString(),_ in h.g&&(G=h.g[_],v=Lr(G,v,w,B),-1<v&&(Ds(G[v]),Array.prototype.splice.call(G,v,1),G.length==0&&(delete h.g[_],h.h--)))):h&&(h=Fa(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Lr(_,v,w,B)),(v=-1<h?_[h]:null)&&Ha(v))}function Ha(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Ht])Pr(_.i,h);else{var v=h.type,w=h.proxy;_.removeEventListener?_.removeEventListener(v,w,h.capture):_.detachEvent?_.detachEvent(Ur(v),w):_.addListener&&_.removeListener&&_.removeListener(w),(v=Fa(_))?(Pr(v,h),v.h==0&&(v.src=null,_[Vr]=null)):Ds(h)}}}function Ur(h){return h in gl?gl[h]:gl[h]="on"+h}function Pd(h,_){if(h.da)h=!0;else{_=new Oe(_,this);var v=h.listener,w=h.ha||h.src;h.fa&&Ha(h),h=v.call(w,_)}return h}function Fa(h){return h=h[Vr],h instanceof Gi?h:null}var yl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dc(h){return typeof h=="function"?h:(h[yl]||(h[yl]=function(_){return h.handleEvent(_)}),h[yl])}function _t(){le.call(this),this.i=new Gi(this),this.M=this,this.F=null}I(_t,le),_t.prototype[Ht]=!0,_t.prototype.removeEventListener=function(h,_,v,w){_l(this,h,_,v,w)};function We(h,_){var v,w=h.F;if(w)for(v=[];w;w=w.F)v.push(w);if(h=h.M,w=_.type||_,typeof _=="string")_=new se(_,h);else if(_ instanceof se)_.target=_.target||h;else{var B=_;_=new se(w,h),k(_,B)}if(B=!0,v)for(var G=v.length-1;0<=G;G--){var ae=_.g=v[G];B=In(ae,w,!0,_)&&B}if(ae=_.g=h,B=In(ae,w,!0,_)&&B,B=In(ae,w,!1,_)&&B,v)for(G=0;G<v.length;G++)ae=_.g=v[G],B=In(ae,w,!1,_)&&B}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],w=0;w<v.length;w++)Ds(v[w]);delete h.g[_],h.h--}}this.F=null},_t.prototype.K=function(h,_,v,w){return this.i.add(String(h),_,!1,v,w)},_t.prototype.L=function(h,_,v,w){return this.i.add(String(h),_,!0,v,w)};function In(h,_,v,w){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var B=!0,G=0;G<_.length;++G){var ae=_[G];if(ae&&!ae.da&&ae.capture==v){var Ue=ae.listener,Mt=ae.ha||ae.src;ae.fa&&Pr(h.i,ae),B=Ue.call(Mt,w)!==!1&&B}}return B&&!w.defaultPrevented}function an(h,_,v){if(typeof h=="function")v&&(h=S(h,v));else if(h&&typeof h.handleEvent=="function")h=S(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function kc(h){h.g=an(()=>{h.g=null,h.i&&(h.i=!1,kc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Ld extends le{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:kc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(h){le.call(this),this.h=h,this.g={}}I(Br,le);var zr=[];function Hr(h){Te(h.g,function(_,v){this.g.hasOwnProperty(v)&&Ha(_)},h),h.g={}}Br.prototype.N=function(){Br.aa.N.call(this),Hr(this)},Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var si=d.JSON.stringify,ja=d.JSON.parse,Fr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function vl(){}vl.prototype.h=null;function El(h){return h.h||(h.h=h.i())}function Tl(){}var Ki={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yi(){se.call(this,"d")}I(Yi,se);function Sl(){se.call(this,"c")}I(Sl,se);var gi={},Al=null;function ks(){return Al=Al||new _t}gi.La="serverreachability";function qa(h){se.call(this,gi.La,h)}I(qa,se);function xs(h){const _=ks();We(_,new qa(_))}gi.STAT_EVENT="statevent";function xc(h,_){se.call(this,gi.STAT_EVENT,h),this.stat=_}I(xc,se);function ht(h){const _=ks();We(_,new xc(_,h))}gi.Ma="timingevent";function xt(h,_){se.call(this,gi.Ma,h),this.size=_}I(xt,se);function Ct(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Fn(){this.g=!0}Fn.prototype.xa=function(){this.g=!1};function wl(h,_,v,w,B,G){h.info(function(){if(h.g)if(G)for(var ae="",Ue=G.split("&"),Mt=0;Mt<Ue.length;Mt++){var Be=Ue[Mt].split("=");if(1<Be.length){var jt=Be[0];Be=Be[1];var Pt=jt.split("_");ae=2<=Pt.length&&Pt[1]=="type"?ae+(jt+"="+Be+"&"):ae+(jt+"=redacted&")}}else ae=null;else ae=G;return"XMLHTTP REQ ("+w+") [attempt "+B+"]: "+_+`
`+v+`
`+ae})}function Vd(h,_,v,w,B,G,ae){h.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+B+"]: "+_+`
`+v+`
`+G+" "+ae})}function Ms(h,_,v,w){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+jr(h,v)+(w?" "+w:"")})}function Mc(h,_){h.info(function(){return"TIMEOUT: "+_})}Fn.prototype.info=function(){};function jr(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var w=v[h];if(!(2>w.length)){var B=w[1];if(Array.isArray(B)&&!(1>B.length)){var G=B[0];if(G!="noop"&&G!="stop"&&G!="close")for(var ae=1;ae<B.length;ae++)B[ae]=""}}}}return si(v)}catch{return _}}var Ps={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$i={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_i;function yi(){}I(yi,vl),yi.prototype.g=function(){return new XMLHttpRequest},yi.prototype.i=function(){return{}},_i=new yi;function gn(h,_,v,w){this.j=h,this.i=_,this.l=v,this.R=w||1,this.U=new Br(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new At}function At(){this.i=null,this.g="",this.h=!1}var Rl={},Ga={};function ri(h,_,v){h.L=1,h.v=$r(Nn(_)),h.m=v,h.P=!0,Qi(h,null)}function Qi(h,_){h.F=Date.now(),qr(h),h.A=Nn(h.v);var v=h.A,w=h.R;Array.isArray(w)||(w=[String(w)]),Dl(v.i,"t",w),h.C=0,v=h.j.J,h.h=new At,h.g=Wc(h.j,v?_:null,!h.m),0<h.O&&(h.M=new Ld(S(h.Y,h,h.g),h.O)),_=h.U,v=h.g,w=h.ca;var B="readystatechange";Array.isArray(B)||(B&&(zr[0]=B.toString()),B=zr);for(var G=0;G<B.length;G++){var ae=Oc(v,B[G],w||_.handleEvent,!1,_.h||_);if(!ae)break;_.g[ae.key]=ae}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),xs(),wl(h.i,h.u,h.A,h.l,h.R,h.m)}gn.prototype.ca=function(h){h=h.target;const _=this.M;_&&Kn(h)==3?_.j():this.Y(h)},gn.prototype.Y=function(h){try{if(h==this.g)e:{const Pt=Kn(this.g);var _=this.g.Ba();const is=this.g.Z();if(!(3>Pt)&&(Pt!=3||this.g&&(this.h.h||this.g.oa()||Fc(this.g)))){this.J||Pt!=4||_==7||(_==8||0>=is?xs(3):xs(2)),Ls(this);var v=this.g.Z();this.X=v;t:if(Pc(this)){var w=Fc(this.g);h="";var B=w.length,G=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wt(this),vi(this);var ae="";break t}this.h.i=new d.TextDecoder}for(_=0;_<B;_++)this.h.h=!0,h+=this.h.i.decode(w[_],{stream:!(G&&_==B-1)});w.length=0,this.h.g+=h,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=v==200,Vd(this.i,this.u,this.A,this.l,this.R,Pt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,Mt=this.g;if((Ue=Mt.g?Mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(Ue)){var Be=Ue;break t}}Be=null}if(v=Be)Ms(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gr(this,v);else{this.o=!1,this.s=3,ht(12),Wt(this),vi(this);break e}}if(this.P){v=!0;let Xt;for(;!this.J&&this.C<ae.length;)if(Xt=Lc(this,ae),Xt==Ga){Pt==4&&(this.s=4,ht(14),v=!1),Ms(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==Rl){this.s=4,ht(15),Ms(this.i,this.l,ae,"[Invalid Chunk]"),v=!1;break}else Ms(this.i,this.l,Xt,null),Gr(this,Xt);if(Pc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pt!=4||ae.length!=0||this.h.h||(this.s=1,ht(16),v=!1),this.o=this.o&&v,!v)Ms(this.i,this.l,ae,"[Invalid Chunked Response]"),Wt(this),vi(this);else if(0<ae.length&&!this.W){this.W=!0;var jt=this.j;jt.g==this&&jt.ba&&!jt.M&&(jt.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),na(jt),jt.M=!0,ht(11))}}else Ms(this.i,this.l,ae,null),Gr(this,ae);Pt==4&&Wt(this),this.o&&!this.J&&(Pt==4?Yc(this.j,this):(this.o=!1,qr(this)))}else Fd(this.g),v==400&&0<ae.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),Wt(this),vi(this)}}}catch{}finally{}};function Pc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Lc(h,_){var v=h.C,w=_.indexOf(`
`,v);return w==-1?Ga:(v=Number(_.substring(v,w)),isNaN(v)?Rl:(w+=1,w+v>_.length?Ga:(_=_.slice(w,w+v),h.C=w+v,_)))}gn.prototype.cancel=function(){this.J=!0,Wt(this)};function qr(h){h.S=Date.now()+h.I,Vc(h,h.I)}function Vc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Ct(S(h.ba,h),_)}function Ls(h){h.B&&(d.clearTimeout(h.B),h.B=null)}gn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Mc(this.i,this.A),this.L!=2&&(xs(),ht(17)),Wt(this),this.s=2,vi(this)):Vc(this,this.S-h)};function vi(h){h.j.G==0||h.J||Yc(h.j,h)}function Wt(h){Ls(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Hr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Gr(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||bl(v.h,h))){if(!h.K&&bl(v.h,h)&&v.G==3){try{var w=v.Da.g.parse(_)}catch{w=null}if(Array.isArray(w)&&w.length==3){var B=w;if(B[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)io(v),to(v);else break e;Ll(v),ht(18)}}else v.za=B[1],0<v.za-v.T&&37500>B[2]&&v.F&&v.v==0&&!v.C&&(v.C=Ct(S(v.Za,v),6e3));if(1>=Ya(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else ns(v,11)}else if((h.K||v.g==h)&&io(v),!W(_))for(B=v.Da.g.parse(_),_=0;_<B.length;_++){let Be=B[_];if(v.T=Be[0],Be=Be[1],v.G==2)if(Be[0]=="c"){v.K=Be[1],v.ia=Be[2];const jt=Be[3];jt!=null&&(v.la=jt,v.j.info("VER="+v.la));const Pt=Be[4];Pt!=null&&(v.Aa=Pt,v.j.info("SVER="+v.Aa));const is=Be[5];is!=null&&typeof is=="number"&&0<is&&(w=1.5*is,v.L=w,v.j.info("backChannelRequestTimeoutMs_="+w)),w=v;const Xt=h.g;if(Xt){const bi=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bi){var G=w.h;G.g||bi.indexOf("spdy")==-1&&bi.indexOf("quic")==-1&&bi.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&($a(G,G.h),G.h=null))}if(w.D){const Ul=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ul&&(w.ya=Ul,Je(w.I,w.D,Ul))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),w=v;var ae=h;if(w.qa=Qc(w,w.J?w.ia:null,w.W),ae.K){_n(w.h,ae);var Ue=ae,Mt=w.L;Mt&&(Ue.I=Mt),Ue.B&&(Ls(Ue),qr(Ue)),w.g=ae}else Gc(w);0<v.i.length&&no(v)}else Be[0]!="stop"&&Be[0]!="close"||ns(v,7);else v.G==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?ns(v,7):Ml(v):Be[0]!="noop"&&v.l&&v.l.ta(Be),v.v=0)}}xs(4)}catch{}}var Uc=class{constructor(h,_){this.g=h,this.map=_}};function Wi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ka(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Ya(h){return h.h?1:h.g?h.g.size:0}function bl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function $a(h,_){h.g?h.g.add(_):h.h=_}function _n(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Wi.prototype.cancel=function(){if(this.i=Cl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Cl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return F(h.i)}function Ud(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,w=0;w<v;w++)_.push(h[w]);return _}_=[],v=0;for(w in h)_[v++]=h[w];return _}function Qa(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const w in h)_[v++]=w;return _}}}function Il(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=Qa(h),w=Ud(h),B=w.length,G=0;G<B;G++)_.call(void 0,w[G],v&&v[G],h)}var Kr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bd(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var w=h[v].indexOf("="),B=null;if(0<=w){var G=h[v].substring(0,w);B=h[v].substring(w+1)}else G=h[v];_(G,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function It(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof It){this.h=h.h,Yr(this,h.j),this.o=h.o,this.g=h.g,Vs(this,h.s),this.l=h.l;var _=h.i,v=new Zi;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),Xi(this,v),this.m=h.m}else h&&(_=String(h).match(Kr))?(this.h=!1,Yr(this,_[1]||"",!0),this.o=jn(_[2]||""),this.g=jn(_[3]||"",!0),Vs(this,_[4]),this.l=jn(_[5]||"",!0),Xi(this,_[6]||"",!0),this.m=jn(_[7]||"")):(this.h=!1,this.i=new Zi(null,this.h))}It.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Qr(_,Nl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Qr(_,Nl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(Qr(v,v.charAt(0)=="/"?zd:Ol,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",Qr(v,Wa)),h.join("")};function Nn(h){return new It(h)}function Yr(h,_,v){h.j=v?jn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Vs(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Xi(h,_,v){_ instanceof Zi?(h.i=_,zc(h.i,h.h)):(v||(_=Qr(_,Hd)),h.i=new Zi(_,h.h))}function Je(h,_,v){h.i.set(_,v)}function $r(h){return Je(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function jn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Qr(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Bc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Bc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Nl=/[#\/\?@]/g,Ol=/[#\?:]/g,zd=/[#\?]/g,Hd=/[#\?@]/g,Wa=/#/g;function Zi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function qn(h){h.g||(h.g=new Map,h.h=0,h.i&&Bd(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=Zi.prototype,n.add=function(h,_){qn(this),this.i=null,h=Ei(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function Ji(h,_){qn(h),_=Ei(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function es(h,_){return qn(h),_=Ei(h,_),h.g.has(_)}n.forEach=function(h,_){qn(this),this.g.forEach(function(v,w){v.forEach(function(B){h.call(_,B,w,this)},this)},this)},n.na=function(){qn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let w=0;w<_.length;w++){const B=h[w];for(let G=0;G<B.length;G++)v.push(_[w])}return v},n.V=function(h){qn(this);let _=[];if(typeof h=="string")es(this,h)&&(_=_.concat(this.g.get(Ei(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return qn(this),this.i=null,h=Ei(this,h),es(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Dl(h,_,v){Ji(h,_),0<v.length&&(h.i=null,h.g.set(Ei(h,_),F(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var w=_[v];const G=encodeURIComponent(String(w)),ae=this.V(w);for(w=0;w<ae.length;w++){var B=G;ae[w]!==""&&(B+="="+encodeURIComponent(String(ae[w]))),h.push(B)}}return this.i=h.join("&")};function Ei(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function zc(h,_){_&&!h.j&&(qn(h),h.i=null,h.g.forEach(function(v,w){var B=w.toLowerCase();w!=B&&(Ji(this,w),Dl(this,B,v))},h)),h.j=_}function Wr(h,_){const v=new Fn;if(d.Image){const w=new Image;w.onload=N(Gn,v,"TestLoadImage: loaded",!0,_,w),w.onerror=N(Gn,v,"TestLoadImage: error",!1,_,w),w.onabort=N(Gn,v,"TestLoadImage: abort",!1,_,w),w.ontimeout=N(Gn,v,"TestLoadImage: timeout",!1,_,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=h}else _(!1)}function ai(h,_){const v=new Fn,w=new AbortController,B=setTimeout(()=>{w.abort(),Gn(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:w.signal}).then(G=>{clearTimeout(B),G.ok?Gn(v,"TestPingServer: ok",!0,_):Gn(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(B),Gn(v,"TestPingServer: error",!1,_)})}function Gn(h,_,v,w,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),w(v)}catch{}}function Xr(){this.g=new Fr}function Ti(h,_,v){const w=v||"";try{Il(h,function(B,G){let ae=B;g(B)&&(ae=si(B)),_.push(w+G+"="+encodeURIComponent(ae))})}catch(B){throw _.push(w+"type="+encodeURIComponent("_badmap")),B}}function Us(h){this.l=h.Ub||null,this.j=h.eb||!1}I(Us,vl),Us.prototype.g=function(){return new ts(this.l,this.j)},Us.prototype.i=function(h){return function(){return h}}({});function ts(h,_){_t.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(ts,_t),n=ts.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ai(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Si(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ai(this)),this.g&&(this.readyState=3,Ai(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function kl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Si(this):Ai(this),this.readyState==3&&kl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Si(this))},n.Qa=function(h){this.g&&(this.response=h,Si(this))},n.ga=function(){this.g&&Si(this)};function Si(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ai(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Ai(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function xl(h){let _="";return Te(h,function(v,w){_+=w,_+=":",_+=v,_+=`\r
`}),_}function Ft(h,_,v){e:{for(w in v){var w=!1;break e}w=!0}w||(v=xl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):Je(h,_,v))}function Ye(h){_t.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Ye,_t);var Xa=/^https?$/i,Zr=["POST","PUT"];n=Ye.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_i.g(),this.v=this.o?El(this.o):El(_i),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(G){Hc(this,G);return}if(h=v||"",v=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var B in w)v.set(B,w[B]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const G of w.keys())v.set(G,w.get(G));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(v.keys()).find(G=>G.toLowerCase()=="content-type"),B=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Zr,_,void 0))||w||B||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,ae]of v)this.g.setRequestHeader(G,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jr(this),this.u=!0,this.g.send(h),this.u=!1}catch(G){Hc(this,G)}};function Hc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Za(h),wi(h)}function Za(h){h.A||(h.A=!0,We(h,"complete"),We(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,We(this,"complete"),We(this,"abort"),wi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wi(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ja(this):this.bb())},n.bb=function(){Ja(this)};function Ja(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Kn(h)!=4||h.Z()!=2)){if(h.u&&Kn(h)==4)an(h.Ea,0,h);else if(We(h,"readystatechange"),Kn(h)==4){h.h=!1;try{const ae=h.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var w;if(w=ae===0){var B=String(h.D).match(Kr)[1]||null;!B&&d.self&&d.self.location&&(B=d.self.location.protocol.slice(0,-1)),w=!Xa.test(B?B.toLowerCase():"")}v=w}if(v)We(h,"complete"),We(h,"success");else{h.m=6;try{var G=2<Kn(h)?h.g.statusText:""}catch{G=""}h.l=G+" ["+h.Z()+"]",Za(h)}}finally{wi(h)}}}}function wi(h,_){if(h.g){Jr(h);const v=h.g,w=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||We(h,"ready");try{v.onreadystatechange=w}catch{}}}function Jr(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Kn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),ja(_)}};function Fc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Fd(h){const _={};h=(h.g&&2<=Kn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<h.length;w++){if(W(h[w]))continue;var v=P(h[w]);const B=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const G=_[B]||[];_[B]=G,G.push(v)}x(_,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ea(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function eo(h){this.Aa=0,this.i=[],this.j=new Fn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ea("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ea("baseRetryDelayMs",5e3,h),this.cb=ea("retryDelaySeedMs",1e4,h),this.Wa=ea("forwardChannelMaxRetries",2,h),this.wa=ea("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Wi(h&&h.concurrentRequestLimit),this.Da=new Xr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=eo.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,w){ht(0),this.W=h,this.H=_||{},v&&w!==void 0&&(this.H.OSID=v,this.H.OAID=w),this.F=this.X,this.I=Qc(this,null,this.W),no(this)};function Ml(h){if(jc(h),h.G==3){var _=h.U++,v=Nn(h.I);if(Je(v,"SID",h.K),Je(v,"RID",_),Je(v,"TYPE","terminate"),ta(h,v),_=new gn(h,h.j,_),_.L=2,_.v=$r(Nn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=Wc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),qr(_)}$c(h)}function to(h){h.g&&(na(h),h.g.cancel(),h.g=null)}function jc(h){to(h),h.u&&(d.clearTimeout(h.u),h.u=null),io(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function no(h){if(!Ka(h.h)&&!h.s){h.s=!0;var _=h.Ga;ie||D(),de||(ie(),de=!0),Le.add(_,h),h.B=0}}function jd(h,_){return Ya(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Ct(S(h.Ga,h,_),Vl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const B=new gn(this,this.j,h);let G=this.o;if(this.S&&(G?(G=R(G),k(G,this.S)):G=this.S),this.m!==null||this.O||(B.H=G,G=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var w=this.i[v];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(_+=w,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=qc(this,B,_),v=Nn(this.I),Je(v,"RID",h),Je(v,"CVER",22),this.D&&Je(v,"X-HTTP-Session-Id",this.D),ta(this,v),G&&(this.O?_="headers="+encodeURIComponent(String(xl(G)))+"&"+_:this.m&&Ft(v,this.m,G)),$a(this.h,B),this.Ua&&Je(v,"TYPE","init"),this.P?(Je(v,"$req",_),Je(v,"SID","null"),B.T=!0,ri(B,v,null)):ri(B,v,_),this.G=2}}else this.G==3&&(h?Pl(this,h):this.i.length==0||Ka(this.h)||Pl(this))};function Pl(h,_){var v;_?v=_.l:v=h.U++;const w=Nn(h.I);Je(w,"SID",h.K),Je(w,"RID",v),Je(w,"AID",h.T),ta(h,w),h.m&&h.o&&Ft(w,h.m,h.o),v=new gn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=qc(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),$a(h.h,v),ri(v,w,_)}function ta(h,_){h.H&&Te(h.H,function(v,w){Je(_,w,v)}),h.l&&Il({},function(v,w){Je(_,w,v)})}function qc(h,_,v){v=Math.min(h.i.length,v);var w=h.l?S(h.l.Na,h.l,h):null;e:{var B=h.i;let G=-1;for(;;){const ae=["count="+v];G==-1?0<v?(G=B[0].g,ae.push("ofs="+G)):G=0:ae.push("ofs="+G);let Ue=!0;for(let Mt=0;Mt<v;Mt++){let Be=B[Mt].g;const jt=B[Mt].map;if(Be-=G,0>Be)G=Math.max(0,B[Mt].g-100),Ue=!1;else try{Ti(jt,ae,"req"+Be+"_")}catch{w&&w(jt)}}if(Ue){w=ae.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,w}function Gc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ie||D(),de||(ie(),de=!0),Le.add(_,h),h.v=0}}function Ll(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Ct(S(h.Fa,h),Vl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Kc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Ct(S(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),to(this),Kc(this))};function na(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Kc(h){h.g=new gn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Nn(h.qa);Je(_,"RID","rpc"),Je(_,"SID",h.K),Je(_,"AID",h.T),Je(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Je(_,"TO",h.ja),Je(_,"TYPE","xmlhttp"),ta(h,_),h.m&&h.o&&Ft(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=$r(Nn(_)),v.m=null,v.P=!0,Qi(v,h)}n.Za=function(){this.C!=null&&(this.C=null,to(this),Ll(this),ht(19))};function io(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Yc(h,_){var v=null;if(h.g==_){io(h),na(h),h.g=null;var w=2}else if(bl(h.h,_))v=_.D,_n(h.h,_),w=1;else return;if(h.G!=0){if(_.o)if(w==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var B=h.B;w=ks(),We(w,new xt(w,v)),no(h)}else Gc(h);else if(B=_.s,B==3||B==0&&0<_.X||!(w==1&&jd(h,_)||w==2&&Ll(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),B){case 1:ns(h,5);break;case 4:ns(h,10);break;case 3:ns(h,6);break;default:ns(h,2)}}}function Vl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function ns(h,_){if(h.j.info("Error code "+_),_==2){var v=S(h.fb,h),w=h.Xa;const B=!w;w=new It(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Yr(w,"https"),$r(w),B?Wr(w.toString(),v):ai(w.toString(),v)}else ht(2);h.G=0,h.l&&h.l.sa(_),$c(h),jc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function $c(h){if(h.G=0,h.ka=[],h.l){const _=Cl(h.h);(_.length!=0||h.i.length!=0)&&(U(h.ka,_),U(h.ka,h.i),h.h.i.length=0,F(h.i),h.i.length=0),h.l.ra()}}function Qc(h,_,v){var w=v instanceof It?Nn(v):new It(v);if(w.g!="")_&&(w.g=_+"."+w.g),Vs(w,w.s);else{var B=d.location;w=B.protocol,_=_?_+"."+B.hostname:B.hostname,B=+B.port;var G=new It(null);w&&Yr(G,w),_&&(G.g=_),B&&Vs(G,B),v&&(G.l=v),w=G}return v=h.D,_=h.ya,v&&_&&Je(w,v,_),Je(w,"VER",h.la),ta(h,w),w}function Wc(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ye(new Us({eb:v})):new Ye(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xc(){}n=Xc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function so(){}so.prototype.g=function(h,_){return new yn(h,_)};function yn(h,_){_t.call(this),this.g=new eo(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!W(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!W(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ri(this)}I(yn,_t),yn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yn.prototype.close=function(){Ml(this.g)},yn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=si(h),h=v);_.i.push(new Uc(_.Ya++,h)),_.G==3&&no(_)},yn.prototype.N=function(){this.g.l=null,delete this.j,Ml(this.g),delete this.g,yn.aa.N.call(this)};function Zc(h){Yi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}I(Zc,Yi);function Jc(){Sl.call(this),this.status=1}I(Jc,Sl);function Ri(h){this.g=h}I(Ri,Xc),Ri.prototype.ua=function(){We(this.g,"a")},Ri.prototype.ta=function(h){We(this.g,new Zc(h))},Ri.prototype.sa=function(h){We(this.g,new Jc)},Ri.prototype.ra=function(){We(this.g,"b")},so.prototype.createWebChannel=so.prototype.g,yn.prototype.send=yn.prototype.o,yn.prototype.open=yn.prototype.m,yn.prototype.close=yn.prototype.close,GR=function(){return new so},qR=function(){return ks()},jR=gi,Mg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ps.NO_ERROR=0,Ps.TIMEOUT=8,Ps.HTTP_ERROR=6,vf=Ps,$i.COMPLETE="complete",FR=$i,Tl.EventType=Ki,Ki.OPEN="a",Ki.CLOSE="b",Ki.ERROR="c",Ki.MESSAGE="d",_t.prototype.listen=_t.prototype.K,Vu=Tl,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,HR=Ye}).apply(typeof rf<"u"?rf:typeof self<"u"?self:typeof window<"u"?window:{});const gS="@firebase/firestore",_S="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new rd("@firebase/firestore");function Po(){return Oa.logLevel}function he(n,...e){if(Oa.logLevel<=Me.DEBUG){const t=e.map(G_);Oa.debug(`Firestore (${fl}): ${n}`,...t)}}function Cs(n,...e){if(Oa.logLevel<=Me.ERROR){const t=e.map(G_);Oa.error(`Firestore (${fl}): ${n}`,...t)}}function Wo(n,...e){if(Oa.logLevel<=Me.WARN){const t=e.map(G_);Oa.warn(`Firestore (${fl}): ${n}`,...t)}}function G_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,KR(n,s,t)}function KR(n,e,t){let s=`FIRESTORE (${fl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Cs(s),new Error(s)}function Qe(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||KR(e,a,s)}function be(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends qi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(cn.UNAUTHENTICATED))}shutdown(){}}class $P{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class QP{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Qe(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new vr,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new vr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Qe(typeof s.accessToken=="string",31837,{l:s}),new YR(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string",2055,{h:e}),new cn(e)}}class WP{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class XP{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new WP(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZP{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Qe(this.o===void 0,3512);const s=l=>{l.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,he("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new yS(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Qe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new yS(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=JP(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Ne(n,e){return n<e?-1:n>e?1:0}function Pg(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),a=e.codePointAt(t);if(s!==a){if(s<128&&a<128)return Ne(s,a);{const l=$R(),c=eL(l.encode(vS(n,t)),l.encode(vS(e,t)));return c!==0?c:Ne(s,a)}}t+=s>65535?2:1}return Ne(n.length,e.length)}function vS(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function eL(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ne(n[t],e[t]);return Ne(n.length,e.length)}function Xo(n,e,t){return n.length===e.length&&n.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=-62135596800,TS=1e6;class Bt{static now(){return Bt.fromMillis(Date.now())}static fromDate(e){return Bt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*TS);return new Bt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ge(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ge(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ES)throw new ge(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/TS}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-ES;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Bt(0,0))}static max(){return new Re(new Bt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="__name__";class ki{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ae(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ae(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ki.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ki?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=ki.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ne(e.length,t.length)}static compareSegments(e,t){const s=ki.isNumericId(e),a=ki.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?ki.extractNumericId(e).compare(ki.extractNumericId(t)):Pg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yr.fromString(e.substring(4,e.length-2))}}class Et extends ki{construct(e,t,s){return new Et(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ge(ne.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new Et(t)}static emptyPath(){return new Et([])}}const tL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class sn extends ki{construct(e,t,s){return new sn(e,t,s)}static isValidIdentifier(e){return tL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===SS}static keyField(){return new sn([SS])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new ge(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ge(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ge(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new ge(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new sn(t)}static emptyPath(){return new sn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Et.fromString(e))}static fromName(e){return new ye(Et.fromString(e).popFirst(5))}static empty(){return new ye(Et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Et.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Et(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=-1;function nL(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=Re.fromTimestamp(s===1e9?new Bt(t+1,0):new Bt(t,s));return new Ar(a,ye.empty(),e)}function iL(n){return new Ar(n.readTime,n.key,sc)}class Ar{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ar(Re.min(),ye.empty(),sc)}static max(){return new Ar(Re.max(),ye.empty(),sc)}}function sL(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:Ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(n){if(n.code!==ne.FAILED_PRECONDITION||n.message!==rL)throw n;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof J?t:J.resolve(t)}catch(t){return J.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):J.reject(t)}static resolve(e){return new J((t,s)=>{t(e)})}static reject(e){return new J((t,s)=>{s(e)})}static waitFor(e){return new J((t,s)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},p=>s(p))}),c=!0,l===a&&t()})}static or(e){let t=J.resolve(!1);for(const s of e)t=t.next(a=>a?J.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new J((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next(y=>{c[g]=y,++d,d===l&&s(c)},y=>a(y))}})}static doWhile(e,t){return new J((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function oL(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function pl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}md.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=-1;function gd(n){return n==null}function jf(n){return n===0&&1/n==-1/0}function lL(n){return typeof n=="number"&&Number.isInteger(n)&&!jf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR="";function uL(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=AS(e)),e=cL(n.get(t),e);return AS(e)}function cL(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case WR:t+="";break;default:t+=l}}return t}function AS(n){return n+WR+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function xr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function XR(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t){this.comparator=e,this.root=t||tn.EMPTY}insert(e,t){return new gt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,tn.BLACK,null,null))}remove(e){return new gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new af(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new af(this.root,e,this.comparator,!1)}getReverseIterator(){return new af(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new af(this.root,e,this.comparator,!0)}}class af{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tn{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??tn.RED,this.left=a??tn.EMPTY,this.right=l??tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new tn(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return tn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return tn.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}}tn.EMPTY=null,tn.RED=!0,tn.BLACK=!1;tn.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new tn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.comparator=e,this.data=new gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new RS(this.data.getIterator())}getIteratorFrom(e){return new RS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof zt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new zt(this.comparator);return t.data=e,t}}class RS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.fields=e,e.sort(sn.comparator)}static empty(){return new Un([])}unionWith(e){let t=new zt(sn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new ZR("Invalid base64 string: "+l):l}}(e);return new rn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new rn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rn.EMPTY_BYTE_STRING=new rn("");const hL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wr(n){if(Qe(!!n,39018),typeof n=="string"){let e=0;const t=hL.exec(n);if(Qe(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:bt(n.seconds),nanos:bt(n.nanos)}}function bt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Rr(n){return typeof n=="string"?rn.fromBase64String(n):rn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="server_timestamp",eb="__type__",tb="__previous_value__",nb="__local_write_time__";function Y_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[eb])===null||t===void 0?void 0:t.stringValue)===JR}function _d(n){const e=n.mapValue.fields[tb];return Y_(e)?_d(e):e}function rc(n){const e=wr(n.mapValue.fields[nb].timestampValue);return new Bt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,t,s,a,l,c,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const qf="(default)";class ac{constructor(e,t){this.projectId=e,this.database=t||qf}static empty(){return new ac("","")}get isDefaultDatabase(){return this.database===qf}isEqual(e){return e instanceof ac&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="__type__",dL="__max__",of={mapValue:{}},sb="__vector__",Gf="value";function br(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Y_(n)?4:mL(n)?9007199254740991:pL(n)?10:11:Ae(28295,{value:n})}function Hi(n,e){if(n===e)return!0;const t=br(n);if(t!==br(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return rc(n).isEqual(rc(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=wr(a.timestampValue),d=wr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,l){return Rr(a.bytesValue).isEqual(Rr(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,l){return bt(a.geoPointValue.latitude)===bt(l.geoPointValue.latitude)&&bt(a.geoPointValue.longitude)===bt(l.geoPointValue.longitude)}(n,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return bt(a.integerValue)===bt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=bt(a.doubleValue),d=bt(l.doubleValue);return c===d?jf(c)===jf(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Xo(n.arrayValue.values||[],e.arrayValue.values||[],Hi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(wS(c)!==wS(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Hi(c[p],d[p])))return!1;return!0}(n,e);default:return Ae(52216,{left:n})}}function oc(n,e){return(n.values||[]).find(t=>Hi(t,e))!==void 0}function Zo(n,e){if(n===e)return 0;const t=br(n),s=br(e);if(t!==s)return Ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=bt(l.integerValue||l.doubleValue),p=bt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return bS(n.timestampValue,e.timestampValue);case 4:return bS(rc(n),rc(e));case 5:return Pg(n.stringValue,e.stringValue);case 6:return function(l,c){const d=Rr(l),p=Rr(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=Ne(d[g],p[g]);if(y!==0)return y}return Ne(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Ne(bt(l.latitude),bt(c.latitude));return d!==0?d:Ne(bt(l.longitude),bt(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return CS(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,g,y;const T=l.fields||{},S=c.fields||{},N=(d=T[Gf])===null||d===void 0?void 0:d.arrayValue,I=(p=S[Gf])===null||p===void 0?void 0:p.arrayValue,F=Ne(((g=N==null?void 0:N.values)===null||g===void 0?void 0:g.length)||0,((y=I==null?void 0:I.values)===null||y===void 0?void 0:y.length)||0);return F!==0?F:CS(N,I)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===of.mapValue&&c===of.mapValue)return 0;if(l===of.mapValue)return 1;if(c===of.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let T=0;T<p.length&&T<y.length;++T){const S=Pg(p[T],y[T]);if(S!==0)return S;const N=Zo(d[p[T]],g[y[T]]);if(N!==0)return N}return Ne(p.length,y.length)}(n.mapValue,e.mapValue);default:throw Ae(23264,{Pe:t})}}function bS(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ne(n,e);const t=wr(n),s=wr(e),a=Ne(t.seconds,s.seconds);return a!==0?a:Ne(t.nanos,s.nanos)}function CS(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=Zo(t[a],s[a]);if(l)return l}return Ne(t.length,s.length)}function Jo(n){return Lg(n)}function Lg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=wr(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Rr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ye.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Lg(l);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${Lg(t.fields[c])}`;return a+"}"}(n.mapValue):Ae(61005,{value:n})}function Ef(n){switch(br(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_d(n);return e?16+Ef(e):16;case 5:return 2*n.stringValue.length;case 6:return Rr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+Ef(l),0)}(n.arrayValue);case 10:case 11:return function(s){let a=0;return xr(s.fields,(l,c)=>{a+=l.length+Ef(c)}),a}(n.mapValue);default:throw Ae(13486,{value:n})}}function Vg(n){return!!n&&"integerValue"in n}function $_(n){return!!n&&"arrayValue"in n}function IS(n){return!!n&&"nullValue"in n}function NS(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Tf(n){return!!n&&"mapValue"in n}function pL(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ib])===null||t===void 0?void 0:t.stringValue)===sb}function Ku(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return xr(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ku(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ku(n.arrayValue.values[t]);return e}return Object.assign({},n)}function mL(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===dL}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.value=e}static empty(){return new Cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Tf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ku(t)}setAll(e){let t=sn.emptyPath(),s={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Ku(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Tf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Hi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Tf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){xr(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new Cn(Ku(this.value))}}function rb(n){const e=[];return xr(n.fields,(t,s)=>{const a=new sn([t]);if(Tf(s)){const l=rb(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new Un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new dn(e,0,Re.min(),Re.min(),Re.min(),Cn.empty(),0)}static newFoundDocument(e,t,s,a){return new dn(e,1,t,Re.min(),s,a,0)}static newNoDocument(e,t){return new dn(e,2,t,Re.min(),Re.min(),Cn.empty(),0)}static newUnknownDocument(e,t){return new dn(e,3,t,Re.min(),Re.min(),Cn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t){this.position=e,this.inclusive=t}}function OS(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=ye.comparator(ye.fromName(c.referenceValue),t.key):s=Zo(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function DS(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Hi(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t="asc"){this.field=e,this.dir=t}}function gL(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{}class Ut extends ab{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new yL(e,t,s):t==="array-contains"?new TL(e,s):t==="in"?new SL(e,s):t==="not-in"?new AL(e,s):t==="array-contains-any"?new wL(e,s):new Ut(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new vL(e,s):new EL(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Zo(t,this.value)):t!==null&&br(this.value)===br(t)&&this.matchesComparison(Zo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fi extends ab{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Fi(e,t)}matches(e){return ob(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function ob(n){return n.op==="and"}function lb(n){return _L(n)&&ob(n)}function _L(n){for(const e of n.filters)if(e instanceof Fi)return!1;return!0}function Ug(n){if(n instanceof Ut)return n.field.canonicalString()+n.op.toString()+Jo(n.value);if(lb(n))return n.filters.map(e=>Ug(e)).join(",");{const e=n.filters.map(t=>Ug(t)).join(",");return`${n.op}(${e})`}}function ub(n,e){return n instanceof Ut?function(s,a){return a instanceof Ut&&s.op===a.op&&s.field.isEqual(a.field)&&Hi(s.value,a.value)}(n,e):n instanceof Fi?function(s,a){return a instanceof Fi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,c,d)=>l&&ub(c,a.filters[d]),!0):!1}(n,e):void Ae(19439)}function cb(n){return n instanceof Ut?function(t){return`${t.field.canonicalString()} ${t.op} ${Jo(t.value)}`}(n):n instanceof Fi?function(t){return t.op.toString()+" {"+t.getFilters().map(cb).join(" ,")+"}"}(n):"Filter"}class yL extends Ut{constructor(e,t,s){super(e,t,s),this.key=ye.fromName(s.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class vL extends Ut{constructor(e,t){super(e,"in",t),this.keys=hb("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class EL extends Ut{constructor(e,t){super(e,"not-in",t),this.keys=hb("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function hb(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ye.fromName(s.referenceValue))}class TL extends Ut{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $_(t)&&oc(t.arrayValue,this.value)}}class SL extends Ut{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&oc(this.value.arrayValue,t)}}class AL extends Ut{constructor(e,t){super(e,"not-in",t)}matches(e){if(oc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!oc(this.value.arrayValue,t)}}class wL extends Ut{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>oc(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Ie=null}}function kS(n,e=null,t=[],s=[],a=null,l=null,c=null){return new RL(n,e,t,s,a,l,c)}function Q_(n){const e=be(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Ug(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),gd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Jo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Jo(s)).join(",")),e.Ie=t}return e.Ie}function W_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!gL(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ub(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!DS(n.startAt,e.startAt)&&DS(n.endAt,e.endAt)}function Bg(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function bL(n,e,t,s,a,l,c,d){return new yd(n,e,t,s,a,l,c,d)}function X_(n){return new yd(n)}function xS(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function CL(n){return n.collectionGroup!==null}function Yu(n){const e=be(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new zt(sn.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new Yf(l,s))}),t.has(sn.keyField().canonicalString())||e.Ee.push(new Yf(sn.keyField(),s))}return e.Ee}function Vi(n){const e=be(n);return e.de||(e.de=IL(e,Yu(n))),e.de}function IL(n,e){if(n.limitType==="F")return kS(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Yf(a.field,l)});const t=n.endAt?new Kf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Kf(n.startAt.position,n.startAt.inclusive):null;return kS(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function zg(n,e,t){return new yd(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function vd(n,e){return W_(Vi(n),Vi(e))&&n.limitType===e.limitType}function fb(n){return`${Q_(Vi(n))}|lt:${n.limitType}`}function Lo(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>cb(a)).join(", ")}]`),gd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>Jo(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>Jo(a)).join(",")),`Target(${s})`}(Vi(n))}; limitType=${n.limitType})`}function Ed(n,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ye.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(n,e)&&function(s,a){for(const l of Yu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(n,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(n,e)&&function(s,a){return!(s.startAt&&!function(c,d,p){const g=OS(c,d,p);return c.inclusive?g<=0:g<0}(s.startAt,Yu(s),a)||s.endAt&&!function(c,d,p){const g=OS(c,d,p);return c.inclusive?g>=0:g>0}(s.endAt,Yu(s),a))}(n,e)}function NL(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function db(n){return(e,t)=>{let s=!1;for(const a of Yu(n)){const l=OL(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function OL(n,e,t){const s=n.field.isKeyField()?ye.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?Zo(p,g):Ae(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Ae(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){xr(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return XR(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DL=new gt(ye.comparator);function Is(){return DL}const pb=new gt(ye.comparator);function Uu(...n){let e=pb;for(const t of n)e=e.insert(t.key,t);return e}function mb(n){let e=pb;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Sa(){return $u()}function gb(){return $u()}function $u(){return new Ba(n=>n.toString(),(n,e)=>n.isEqual(e))}const kL=new gt(ye.comparator),xL=new zt(ye.comparator);function Pe(...n){let e=xL;for(const t of n)e=e.add(t);return e}const ML=new zt(Ne);function PL(){return ML}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jf(e)?"-0":e}}function _b(n){return{integerValue:""+n}}function LL(n,e){return lL(e)?_b(e):Z_(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this._=void 0}}function VL(n,e,t){return n instanceof $f?function(a,l){const c={fields:{[eb]:{stringValue:JR},[nb]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&Y_(l)&&(l=_d(l)),l&&(c.fields[tb]=l),{mapValue:c}}(t,e):n instanceof el?vb(n,e):n instanceof lc?Eb(n,e):function(a,l){const c=yb(a,l),d=MS(c)+MS(a.Re);return Vg(c)&&Vg(a.Re)?_b(d):Z_(a.serializer,d)}(n,e)}function UL(n,e,t){return n instanceof el?vb(n,e):n instanceof lc?Eb(n,e):t}function yb(n,e){return n instanceof Qf?function(s){return Vg(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class $f extends Td{}class el extends Td{constructor(e){super(),this.elements=e}}function vb(n,e){const t=Tb(e);for(const s of n.elements)t.some(a=>Hi(a,s))||t.push(s);return{arrayValue:{values:t}}}class lc extends Td{constructor(e){super(),this.elements=e}}function Eb(n,e){let t=Tb(e);for(const s of n.elements)t=t.filter(a=>!Hi(a,s));return{arrayValue:{values:t}}}class Qf extends Td{constructor(e,t){super(),this.serializer=e,this.Re=t}}function MS(n){return bt(n.integerValue||n.doubleValue)}function Tb(n){return $_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e,t){this.field=e,this.transform=t}}function zL(n,e){return n.field.isEqual(e.field)&&function(s,a){return s instanceof el&&a instanceof el||s instanceof lc&&a instanceof lc?Xo(s.elements,a.elements,Hi):s instanceof Qf&&a instanceof Qf?Hi(s.Re,a.Re):s instanceof $f&&a instanceof $f}(n.transform,e.transform)}class HL{constructor(e,t){this.version=e,this.transformResults=t}}class Ui{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ui}static exists(e){return new Ui(void 0,e)}static updateTime(e){return new Ui(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Sd{}function Sb(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new wb(n.key,Ui.none()):new Ac(n.key,n.data,Ui.none());{const t=n.data,s=Cn.empty();let a=new zt(sn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Mr(n.key,s,new Un(a.toArray()),Ui.none())}}function FL(n,e,t){n instanceof Ac?function(a,l,c){const d=a.value.clone(),p=LS(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Mr?function(a,l,c){if(!Sf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=LS(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(Ab(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Qu(n,e,t,s){return n instanceof Ac?function(l,c,d,p){if(!Sf(l.precondition,c))return d;const g=l.value.clone(),y=VS(l.fieldTransforms,p,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,e,t,s):n instanceof Mr?function(l,c,d,p){if(!Sf(l.precondition,c))return d;const g=VS(l.fieldTransforms,p,c),y=c.data;return y.setAll(Ab(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,s):function(l,c,d){return Sf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function jL(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=yb(s.transform,a||null);l!=null&&(t===null&&(t=Cn.empty()),t.set(s.field,l))}return t||null}function PS(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Xo(s,a,(l,c)=>zL(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ac extends Sd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Mr extends Sd{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Ab(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function LS(n,e,t){const s=new Map;Qe(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,UL(c,d,t[a]))}return s}function VS(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,VL(l,c,e))}return s}class wb extends Sd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qL extends Sd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&FL(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Qu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Qu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=gb();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=Sb(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Re.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&Xo(this.mutations,e.mutations,(t,s)=>PS(t,s))&&Xo(this.baseMutations,e.baseMutations,(t,s)=>PS(t,s))}}class J_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){Qe(e.mutations.length===s.length,58842,{fe:e.mutations.length,ge:s.length});let a=function(){return kL}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new J_(e,t,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,He;function $L(n){switch(n){case ne.OK:return Ae(64938);case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0;default:return Ae(15467,{code:n})}}function Rb(n){if(n===void 0)return Cs("GRPC error has no .code"),ne.UNKNOWN;switch(n){case Dt.OK:return ne.OK;case Dt.CANCELLED:return ne.CANCELLED;case Dt.UNKNOWN:return ne.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return ne.INTERNAL;case Dt.UNAVAILABLE:return ne.UNAVAILABLE;case Dt.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case Dt.NOT_FOUND:return ne.NOT_FOUND;case Dt.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case Dt.ABORTED:return ne.ABORTED;case Dt.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case Dt.DATA_LOSS:return ne.DATA_LOSS;default:return Ae(39323,{code:n})}}(He=Dt||(Dt={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL=new yr([4294967295,4294967295],0);function US(n){const e=$R().encode(n),t=new zR;return t.update(e),new Uint8Array(t.digest())}function BS(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new yr([t,s],0),new yr([a,l],0)]}class ey{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Bu(`Invalid padding: ${t}`);if(s<0)throw new Bu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Bu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Bu(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=yr.fromNumber(this.pe)}we(e,t,s){let a=e.add(t.multiply(yr.fromNumber(s)));return a.compare(QL)===1&&(a=new yr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=US(e),[s,a]=BS(t);for(let l=0;l<this.hashCount;l++){const c=this.we(s,a,l);if(!this.Se(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new ey(l,a,t);return s.forEach(d=>c.insert(d)),c}insert(e){if(this.pe===0)return;const t=US(e),[s,a]=BS(t);for(let l=0;l<this.hashCount;l++){const c=this.we(s,a,l);this.be(c)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Bu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,wc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ad(Re.min(),a,new gt(Ne),Is(),Pe())}}class wc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new wc(s,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t,s,a){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=a}}class bb{constructor(e,t){this.targetId=e,this.Ce=t}}class Cb{constructor(e,t,s=rn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class zS{constructor(){this.Fe=0,this.Me=HS(),this.xe=rn.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Pe(),t=Pe(),s=Pe();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Ae(38017,{changeType:l})}}),new wc(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=HS()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Qe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class WL{constructor(e){this.ze=e,this.je=new Map,this.He=Is(),this.Je=lf(),this.Ye=lf(),this.Ze=new gt(Ne)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:Ae(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,s=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(Bg(l))if(s===0){const c=new ye(l.path);this.tt(t,c,dn.newNoDocument(c,Re.min()))}else Qe(s===1,20013,{expectedCount:s});else{const c=this.ut(t);if(c!==s){const d=this.ct(e),p=d?this.lt(d,e,c):1;if(p!==0){this.st(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Rr(s).toUint8Array()}catch(p){if(p instanceof ZR)return Wo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new ey(c,a,l)}catch(p){return Wo(p instanceof Bu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.pe===0?null:d}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let a=0;return s.forEach(l=>{const c=this.ze.Pt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,c)=>{const d=this._t(c);if(d){if(l.current&&Bg(d.target)){const p=new ye(d.target.path);this.Et(p).has(c)||this.dt(c,p)||this.tt(c,p,dn.newNoDocument(p,e))}l.Le&&(t.set(c,l.qe()),l.Qe())}});let s=Pe();this.Ye.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this._t(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(l))}),this.He.forEach((l,c)=>c.setReadTime(e));const a=new Ad(e,t,this.Ze,this.He,s);return this.He=Is(),this.Je=lf(),this.Ye=lf(),this.Ze=new gt(Ne),a}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new zS,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new zt(Ne),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new zt(Ne),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new zS),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function lf(){return new gt(ye.comparator)}function HS(){return new gt(ye.comparator)}const XL={asc:"ASCENDING",desc:"DESCENDING"},ZL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},JL={and:"AND",or:"OR"};class eV{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hg(n,e){return n.useProto3Json||gd(e)?e:{value:e}}function Wf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ib(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function tV(n,e){return Wf(n,e.toTimestamp())}function Bi(n){return Qe(!!n,49232),Re.fromTimestamp(function(t){const s=wr(t);return new Bt(s.seconds,s.nanos)}(n))}function ty(n,e){return Fg(n,e).canonicalString()}function Fg(n,e){const t=function(a){return new Et(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Nb(n){const e=Et.fromString(n);return Qe(Mb(e),10190,{key:e.toString()}),e}function jg(n,e){return ty(n.databaseId,e.path)}function ng(n,e){const t=Nb(e);if(t.get(1)!==n.databaseId.projectId)throw new ge(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ge(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(Db(t))}function Ob(n,e){return ty(n.databaseId,e)}function nV(n){const e=Nb(n);return e.length===4?Et.emptyPath():Db(e)}function qg(n){return new Et(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Db(n){return Qe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function FS(n,e,t){return{name:jg(n,e),fields:t.value.mapValue.fields}}function iV(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ae(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,y){return g.useProto3Json?(Qe(y===void 0||typeof y=="string",58123),rn.fromBase64String(y||"")):(Qe(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),rn.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const y=g.code===void 0?ne.UNKNOWN:Rb(g.code);return new ge(y,g.message||"")}(c);t=new Cb(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=ng(n,s.document.name),l=Bi(s.document.updateTime),c=s.document.createTime?Bi(s.document.createTime):Re.min(),d=new Cn({mapValue:{fields:s.document.fields}}),p=dn.newFoundDocument(a,l,c,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new Af(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=ng(n,s.document),l=s.readTime?Bi(s.readTime):Re.min(),c=dn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new Af([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=ng(n,s.document),l=s.removedTargetIds||[];t=new Af([],l,a,null)}else{if(!("filter"in e))return Ae(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new YL(a,l),d=s.targetId;t=new bb(d,c)}}return t}function sV(n,e){let t;if(e instanceof Ac)t={update:FS(n,e.key,e.value)};else if(e instanceof wb)t={delete:jg(n,e.key)};else if(e instanceof Mr)t={update:FS(n,e.key,e.data),updateMask:dV(e.fieldMask)};else{if(!(e instanceof qL))return Ae(16599,{ft:e.type});t={verify:jg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,c){const d=c.transform;if(d instanceof $f)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof el)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof lc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Qf)return{fieldPath:c.field.canonicalString(),increment:d.Re};throw Ae(20930,{transform:c.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:tV(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ae(27497)}(n,e.precondition)),t}function rV(n,e){return n&&n.length>0?(Qe(e!==void 0,14353),n.map(t=>function(a,l){let c=a.updateTime?Bi(a.updateTime):Bi(l);return c.isEqual(Re.min())&&(c=Bi(l)),new HL(c,a.transformResults||[])}(t,e))):[]}function aV(n,e){return{documents:[Ob(n,e.path)]}}function oV(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Ob(n,a);const l=function(g){if(g.length!==0)return xb(Fi.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(y=>function(S){return{field:Vo(S.field),direction:cV(S.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Hg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:t,parent:a}}function lV(n){let e=nV(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Qe(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(T){const S=kb(T);return S instanceof Fi&&lb(S)?S.getFilters():[S]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(S=>function(I){return new Yf(Uo(I.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(S))}(t.orderBy));let d=null;t.limit&&(d=function(T){let S;return S=typeof T=="object"?T.value:T,gd(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(T){const S=!!T.before,N=T.values||[];return new Kf(N,S)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const S=!T.before,N=T.values||[];return new Kf(N,S)}(t.endAt)),bL(e,a,c,l,d,"F",p,g)}function uV(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kb(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Uo(t.unaryFilter.field);return Ut.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Uo(t.unaryFilter.field);return Ut.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Uo(t.unaryFilter.field);return Ut.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Uo(t.unaryFilter.field);return Ut.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ut.create(Uo(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Fi.create(t.compositeFilter.filters.map(s=>kb(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}}(t.compositeFilter.op))}(n):Ae(30097,{filter:n})}function cV(n){return XL[n]}function hV(n){return ZL[n]}function fV(n){return JL[n]}function Vo(n){return{fieldPath:n.canonicalString()}}function Uo(n){return sn.fromServerFormat(n.fieldPath)}function xb(n){return n instanceof Ut?function(t){if(t.op==="=="){if(NS(t.value))return{unaryFilter:{field:Vo(t.field),op:"IS_NAN"}};if(IS(t.value))return{unaryFilter:{field:Vo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(NS(t.value))return{unaryFilter:{field:Vo(t.field),op:"IS_NOT_NAN"}};if(IS(t.value))return{unaryFilter:{field:Vo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vo(t.field),op:hV(t.op),value:t.value}}}(n):n instanceof Fi?function(t){const s=t.getFilters().map(a=>xb(a));return s.length===1?s[0]:{compositeFilter:{op:fV(t.op),filters:s}}}(n):Ae(54877,{filter:n})}function dV(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Mb(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,s,a,l=Re.min(),c=Re.min(),d=rn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(e){this.wt=e}}function mV(n){const e=lV({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?zg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{constructor(){this.Cn=new _V}addToCollectionParentIndex(e,t){return this.Cn.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(Ar.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(Ar.min())}updateCollectionGroup(e,t,s){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class _V{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new zt(Et.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new zt(Et.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Pb=41943040;class bn{static withCacheSize(e){return new bn(e,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn.DEFAULT_COLLECTION_PERCENTILE=10,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bn.DEFAULT=new bn(Pb,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bn.DISABLED=new bn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new tl(0)}static lr(){return new tl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="LruGarbageCollector",yV=1048576;function GS([n,e],[t,s]){const a=Ne(n,t);return a===0?Ne(e,s):a}class vV{constructor(e){this.Er=e,this.buffer=new zt(GS),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();GS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class EV{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){he(qS,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){pl(t)?he(qS,"Ignoring IndexedDB error during garbage collection: ",t):await dl(t)}await this.mr(3e5)})}}class TV{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return J.resolve(md.le);const s=new vV(t);return this.gr.forEachTarget(e,a=>s.Rr(a.sequenceNumber)).next(()=>this.gr.yr(e,a=>s.Rr(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(jS)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jS):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,a,l,c,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(s=T,d=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(g=Date.now(),Po()<=Me.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function SV(n,e){return new TV(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(){this.changes=new Ba(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?J.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RV{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&Qu(s.mutation,a,Un.empty(),Bt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Pe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Pe()){const a=Sa();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let c=Uu();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const s=Sa();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Pe()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,s,a){let l=Is();const c=$u(),d=function(){return $u()}();return t.forEach((p,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Mr)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),Qu(y.mutation,g,y.mutation.getFieldMask(),Bt.now())):c.set(g.key,Un.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,y)=>c.set(g,y)),t.forEach((g,y)=>{var T;return d.set(g,new wV(y,(T=c.get(g))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const s=$u();let a=new gt((c,d)=>c-d),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let y=s.get(p)||Un.empty();y=d.applyToLocalView(g,y),s.set(p,y);const T=(a.get(d.batchId)||Pe()).add(p);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,T=gb();y.forEach(S=>{if(!l.has(S)){const N=Sb(t.get(S),s.get(S));N!==null&&T.set(S,N),l=l.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return J.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(c){return ye.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):CL(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):J.resolve(Sa());let d=sc,p=l;return c.next(g=>J.forEach(g,(y,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(y)?J.resolve():this.remoteDocumentCache.getEntry(e,y).next(S=>{p=p.insert(y,S)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,Pe())).next(y=>({batchId:d,changes:mb(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(s=>{let a=Uu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Uu();return this.indexManager.getCollectionParents(e,l).next(d=>J.forEach(d,p=>{const g=function(T,S){return new yd(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next(y=>{y.forEach((T,S)=>{c=c.insert(T,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(c=>{l.forEach((p,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,dn.newInvalidDocument(y)))});let d=Uu();return c.forEach((p,g)=>{const y=l.get(p);y!==void 0&&Qu(y.mutation,g,Un.empty(),Bt.now()),Ed(t,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return J.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Bi(a.createTime)}}(t)),J.resolve()}getNamedQuery(e,t){return J.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(a){return{name:a.name,query:mV(a.bundledQuery),readTime:Bi(a.readTime)}}(t)),J.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{constructor(){this.overlays=new gt(ye.comparator),this.Qr=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Sa();return J.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.bt(e,t,l)}),J.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Qr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(s)),J.resolve()}getOverlaysForCollection(e,t,s){const a=Sa(),l=t.length+1,c=new ye(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return J.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new gt((g,y)=>g-y);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=Sa(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=Sa(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,y)=>d.set(g,y)),!(d.size()>=a)););return J.resolve(d)}bt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.Qr.get(a.largestBatchId).delete(s.key);this.Qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new KL(t,s));let l=this.Qr.get(t);l===void 0&&(l=Pe(),this.Qr.set(t,l)),this.Qr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(){this.sessionToken=rn.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.$r=new zt($t.Ur),this.Kr=new zt($t.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new $t(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new $t(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new ye(new Et([])),s=new $t(t,e),a=new $t(t,e+1),l=[];return this.Kr.forEachInRange([s,a],c=>{this.zr(c),l.push(c.key)}),l}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new ye(new Et([])),s=new $t(t,e),a=new $t(t,e+1);let l=Pe();return this.Kr.forEachInRange([s,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new $t(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class $t{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return ye.comparator(e.key,t.key)||Ne(e.Zr,t.Zr)}static Wr(e,t){return Ne(e.Zr,t.Zr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new zt($t.Ur)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new GL(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Xr=this.Xr.add(new $t(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(c)}lookupMutationBatch(e,t){return J.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ti(s),l=a<0?0:a;return J.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?K_:this.nr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new $t(t,0),a=new $t(t,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([s,a],c=>{const d=this.ei(c.Zr);l.push(d)}),J.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new zt(Ne);return t.forEach(a=>{const l=new $t(a,0),c=new $t(a,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,c],d=>{s=s.add(d.Zr)})}),J.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;ye.isDocumentKey(l)||(l=l.child(""));const c=new $t(new ye(l),0);let d=new zt(Ne);return this.Xr.forEachWhile(p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Zr)),!0)},c),J.resolve(this.ni(d))}ni(e){const t=[];return e.forEach(s=>{const a=this.ei(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){Qe(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return J.forEach(t.mutations,a=>{const l=new $t(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new $t(t,0),a=this.Xr.firstAfterOrEqual(s);return J.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(e){this.ii=e,this.docs=function(){return new gt(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return J.resolve(s?s.document.mutableCopy():dn.newInvalidDocument(t))}getEntries(e,t){let s=Is();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():dn.newInvalidDocument(a))}),J.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Is();const c=t.path,d=new ye(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||sL(iL(y),s)<=0||(a.has(y.key)||Ed(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return J.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Ae(9500)}si(e,t){return J.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new DV(this)}getSize(e){return J.resolve(this.size)}}class DV extends AV{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Br.addEntry(e,a)):this.Br.removeEntry(s)}),J.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(e){this.persistence=e,this.oi=new Ba(t=>Q_(t),W_),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this._i=0,this.ai=new ny,this.targetCount=0,this.ui=tl.cr()}forEachTarget(e,t){return this.oi.forEach((s,a)=>t(a)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),J.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new tl(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.Tr(t),J.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.oi.forEach((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.oi.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),J.waitFor(l).next(()=>a)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return J.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),J.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),J.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),J.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return J.resolve(s)}containsKey(e,t){return J.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,t){this.ci={},this.overlays={},this.li=new md(0),this.hi=!1,this.hi=!0,this.Pi=new IV,this.referenceDelegate=e(this),this.Ti=new kV(this),this.indexManager=new gV,this.remoteDocumentCache=function(a){return new OV(a)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new pV(t),this.Ei=new bV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new CV,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new NV(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){he("MemoryPersistence","Starting transaction:",e);const a=new xV(this.li.next());return this.referenceDelegate.di(),s(a).next(l=>this.referenceDelegate.Ai(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ri(e,t){return J.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class xV extends aL{constructor(e){super(),this.currentSequenceNumber=e}}class iy{constructor(e){this.persistence=e,this.Vi=new ny,this.mi=null}static fi(e){return new iy(e)}get gi(){if(this.mi)return this.mi;throw Ae(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),J.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),J.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(a=>this.gi.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.gi.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.gi,s=>{const a=ye.fromPath(s);return this.pi(e,a).next(l=>{l||t.removeEntry(a,Re.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return J.or([()=>J.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Xf{constructor(e,t){this.persistence=e,this.yi=new Ba(s=>uL(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=SV(this,t)}static fi(e,t){return new Xf(e,t)}di(){}Ai(e){return J.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}Sr(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return J.forEach(this.yi,(s,a)=>this.Dr(e,s,a).next(l=>l?J.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.si(e,c=>this.Dr(e,c,t).next(d=>{d||(s++,l.removeEntry(c,Re.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),J.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),J.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),J.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ef(e.data.value)),t}Dr(e,t,s){return J.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.yi.get(t);return J.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.ds=s,this.As=a}static Rs(e,t){let s=Pe(),a=Pe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new sy(e,t.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PV{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return RO()?8:oL(mn())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ws(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Ss(e,t,a,s).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new MV;return this.bs(e,t,c).next(d=>{if(l.result=d,this.fs)return this.Ds(e,t,c,d.size)})}).next(()=>l.result)}Ds(e,t,s,a){return s.documentReadCount<this.gs?(Po()<=Me.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",Lo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),J.resolve()):(Po()<=Me.DEBUG&&he("QueryEngine","Query:",Lo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ps*a?(Po()<=Me.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",Lo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vi(t))):J.resolve())}ws(e,t){if(xS(t))return J.resolve(null);let s=Vi(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=zg(t,null,"F"),s=Vi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const c=Pe(...l);return this.ys.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,s).next(p=>{const g=this.vs(t,d);return this.Cs(t,g,c,p.readTime)?this.ws(e,zg(t,null,"F")):this.Fs(e,g,t,p)}))})))}Ss(e,t,s,a){return xS(t)||a.isEqual(Re.min())?J.resolve(null):this.ys.getDocuments(e,s).next(l=>{const c=this.vs(t,l);return this.Cs(t,c,s,a)?J.resolve(null):(Po()<=Me.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Lo(t)),this.Fs(e,c,t,nL(a,sc)).next(d=>d))})}vs(e,t){let s=new zt(db(e));return t.forEach((a,l)=>{Ed(e,l)&&(s=s.add(l))}),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}bs(e,t,s){return Po()<=Me.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Lo(t)),this.ys.getDocumentsMatchingQuery(e,t,Ar.min(),s)}Fs(e,t,s,a){return this.ys.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="LocalStore",LV=3e8;class VV{constructor(e,t,s,a){this.persistence=e,this.Ms=t,this.serializer=a,this.xs=new gt(Ne),this.Os=new Ba(l=>Q_(l),W_),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RV(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function UV(n,e,t,s){return new VV(n,e,t,s)}async function Vb(n,e){const t=be(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const c=[],d=[];let p=Pe();for(const g of a){c.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(s,p).next(g=>({ks:g,removedBatchIds:c,addedBatchIds:d}))})})}function BV(n,e){const t=be(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),l=t.Bs.newChangeBuffer({trackRemovals:!0});return function(d,p,g,y){const T=g.batch,S=T.keys();let N=J.resolve();return S.forEach(I=>{N=N.next(()=>y.getEntry(p,I)).next(F=>{const U=g.docVersions.get(I);Qe(U!==null,48541),F.version.compareTo(U)<0&&(T.applyToRemoteDocument(F,g),F.isValidDocument()&&(F.setReadTime(g.commitVersion),y.addEntry(F)))})}),N.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let p=Pe();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function Ub(n){const e=be(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function zV(n,e){const t=be(n),s=e.snapshotVersion;let a=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});a=t.xs;const d=[];e.targetChanges.forEach((y,T)=>{const S=a.get(T);if(!S)return;d.push(t.Ti.removeMatchingKeys(l,y.removedDocuments,T).next(()=>t.Ti.addMatchingKeys(l,y.addedDocuments,T)));let N=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?N=N.withResumeToken(rn.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):y.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(y.resumeToken,s)),a=a.insert(T,N),function(F,U,Y){return F.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=LV?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(S,N,y)&&d.push(t.Ti.updateTargetData(l,N))});let p=Is(),g=Pe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),d.push(HV(l,c,e.documentUpdates).next(y=>{p=y.qs,g=y.Qs})),!s.isEqual(Re.min())){const y=t.Ti.getLastRemoteSnapshotVersion(l).next(T=>t.Ti.setTargetsMetadata(l,l.currentSequenceNumber,s));d.push(y)}return J.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(t.xs=a,l))}function HV(n,e,t){let s=Pe(),a=Pe();return t.forEach(l=>s=s.add(l)),e.getEntries(n,s).next(l=>{let c=Is();return t.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Re.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):he(ry,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{qs:c,Qs:a}})}function FV(n,e){const t=be(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=K_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function jV(n,e){const t=be(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.Ti.getTargetData(s,e).next(l=>l?(a=l,J.resolve(a)):t.Ti.allocateTargetId(s).next(c=>(a=new dr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.xs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function Gg(n,e,t){const s=be(n),a=s.xs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,c=>s.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!pl(c))throw c;he(ry,`Failed to update sequence numbers for target ${e}: ${c}`)}s.xs=s.xs.remove(e),s.Os.delete(a.target)}function KS(n,e,t){const s=be(n);let a=Re.min(),l=Pe();return s.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,y){const T=be(p),S=T.Os.get(y);return S!==void 0?J.resolve(T.xs.get(S)):T.Ti.getTargetData(g,y)}(s,c,Vi(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>s.Ms.getDocumentsMatchingQuery(c,e,t?a:Re.min(),t?l:Pe())).next(d=>(qV(s,NL(e),d),{documents:d,$s:l})))}function qV(n,e,t){let s=n.Ns.get(e)||Re.min();t.forEach((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),n.Ns.set(e,s)}class YS{constructor(){this.activeTargetIds=PL()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GV{constructor(){this.xo=new YS,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new YS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S="ConnectivityMonitor";class QS{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){he($S,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){he($S,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uf=null;function Kg(){return uf===null?uf=function(){return 268435456+Math.round(2147483648*Math.random())}():uf++,"0x"+uf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="RestConnection",YV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class $V{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${a}`,this.Go=this.databaseId.database===qf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}zo(e,t,s,a,l){const c=Kg(),d=this.jo(e,t.toUriEncodedString());he(ig,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,a,l);const{host:g}=new URL(d),y=La(g);return this.Jo(e,d,p,s,y).then(T=>(he(ig,`Received RPC '${e}' ${c}: `,T),T),T=>{throw Wo(ig,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T})}Yo(e,t,s,a,l,c){return this.zo(e,t,s,a,l)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}jo(e,t){const s=YV[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QV{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="WebChannelConnection";class WV extends $V{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=Kg();return new Promise((d,p)=>{const g=new HR;g.setWithCredentials(!0),g.listenOnce(FR.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case vf.NO_ERROR:const T=g.getResponseJson();he(un,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case vf.TIMEOUT:he(un,`RPC '${e}' ${c} timed out`),p(new ge(ne.DEADLINE_EXCEEDED,"Request time out"));break;case vf.HTTP_ERROR:const S=g.getStatus();if(he(un,`RPC '${e}' ${c} failed with status:`,S,"response text:",g.getResponseText()),S>0){let N=g.getResponseJson();Array.isArray(N)&&(N=N[0]);const I=N==null?void 0:N.error;if(I&&I.status&&I.message){const F=function(Y){const W=Y.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(W)>=0?W:ne.UNKNOWN}(I.status);p(new ge(F,I.message))}else p(new ge(ne.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ge(ne.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{he(un,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(a);he(un,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,s,15)})}T_(e,t,s){const a=Kg(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=GR(),d=qR(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const y=l.join("");he(un,`Creating RPC '${e}' stream ${a}: ${y}`,p);const T=c.createWebChannel(y,p);let S=!1,N=!1;const I=new QV({Zo:U=>{N?he(un,`Not sending because RPC '${e}' stream ${a} is closed:`,U):(S||(he(un,`Opening RPC '${e}' stream ${a} transport.`),T.open(),S=!0),he(un,`RPC '${e}' stream ${a} sending:`,U),T.send(U))},Xo:()=>T.close()}),F=(U,Y,W)=>{U.listen(Y,te=>{try{W(te)}catch(oe){setTimeout(()=>{throw oe},0)}})};return F(T,Vu.EventType.OPEN,()=>{N||(he(un,`RPC '${e}' stream ${a} transport opened.`),I.__())}),F(T,Vu.EventType.CLOSE,()=>{N||(N=!0,he(un,`RPC '${e}' stream ${a} transport closed`),I.u_())}),F(T,Vu.EventType.ERROR,U=>{N||(N=!0,Wo(un,`RPC '${e}' stream ${a} transport errored. Name:`,U.name,"Message:",U.message),I.u_(new ge(ne.UNAVAILABLE,"The operation could not be completed")))}),F(T,Vu.EventType.MESSAGE,U=>{var Y;if(!N){const W=U.data[0];Qe(!!W,16349);const te=W,oe=(te==null?void 0:te.error)||((Y=te[0])===null||Y===void 0?void 0:Y.error);if(oe){he(un,`RPC '${e}' stream ${a} received error:`,oe);const ce=oe.status;let Te=function(b){const k=Dt[b];if(k!==void 0)return Rb(k)}(ce),x=oe.message;Te===void 0&&(Te=ne.INTERNAL,x="Unknown error status: "+ce+" with message "+oe.message),N=!0,I.u_(new ge(Te,x)),T.close()}else he(un,`RPC '${e}' stream ${a} received:`,W),I.c_(W)}}),F(d,jR.STAT_EVENT,U=>{U.stat===Mg.PROXY?he(un,`RPC '${e}' stream ${a} detected buffering proxy`):U.stat===Mg.NOPROXY&&he(un,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{I.a_()},0),I}}function sg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(n){return new eV(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,t,s=1e3,a=1.5,l=6e4){this.xi=e,this.timerId=t,this.I_=s,this.E_=a,this.d_=l,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),s=Math.max(0,Date.now()-this.V_),a=Math.max(0,t-s);a>0&&he("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,a,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS="PersistentStream";class zb{constructor(e,t,s,a,l,c,d,p){this.xi=e,this.y_=s,this.w_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new Bb(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===ne.RESOURCE_EXHAUSTED?(Cs(t.toString()),Cs("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.S_===t&&this.K_(s,a)},s=>{e(()=>{const a=new ge(ne.UNKNOWN,"Fetching auth token failed: "+s.message);return this.W_(a)})})}K_(e,t){const s=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(a=>{s(()=>this.W_(a))}),this.stream.onMessage(a=>{s(()=>++this.v_==1?this.z_(a):this.onNext(a))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return he(WS,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(he(WS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XV extends zb{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=iV(this.serializer,e),s=function(l){if(!("targetChange"in l))return Re.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Re.min():c.readTime?Bi(c.readTime):Re.min()}(e);return this.listener.j_(t,s)}H_(e){const t={};t.database=qg(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=Bg(p)?{documents:aV(l,p)}:{query:oV(l,p).gt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=Ib(l,c.resumeToken);const g=Hg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Re.min())>0){d.readTime=Wf(l,c.snapshotVersion.toTimestamp());const g=Hg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const s=uV(this.serializer,e);s&&(t.labels=s),this.L_(t)}J_(e){const t={};t.database=qg(this.serializer),t.removeTarget=e,this.L_(t)}}class ZV extends zb{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return Qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=rV(e.writeResults,e.commitTime),s=Bi(e.commitTime);return this.listener.ea(s,t)}ta(){const e={};e.database=qg(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>sV(this.serializer,s))};this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV{}class e4 extends JV{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.na=!1}ra(){if(this.na)throw new ge(ne.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,a){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.zo(e,Fg(t,s),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ge(ne.UNKNOWN,l.toString())})}Yo(e,t,s,a,l){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Yo(e,Fg(t,s),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ge(ne.UNKNOWN,c.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class t4{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Cs(t),this.oa=!1):he("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="RemoteStore";class n4{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=l,this.Ea.No(c=>{s.enqueueAndForget(async()=>{za(this)&&(he(Da,"Restarting streams for network reachability change."),await async function(p){const g=be(p);g.Ta.add(4),await Rc(g),g.da.set("Unknown"),g.Ta.delete(4),await Rd(g)}(this))})}),this.da=new t4(s,a)}}async function Rd(n){if(za(n))for(const e of n.Ia)await e(!0)}async function Rc(n){for(const e of n.Ia)await e(!1)}function Hb(n,e){const t=be(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),uy(t)?ly(t):ml(t).M_()&&oy(t,e))}function ay(n,e){const t=be(n),s=ml(t);t.Pa.delete(e),s.M_()&&Fb(t,e),t.Pa.size===0&&(s.M_()?s.N_():za(t)&&t.da.set("Unknown"))}function oy(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ml(n).H_(e)}function Fb(n,e){n.Aa.Ke(e),ml(n).J_(e)}function ly(n){n.Aa=new WL({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),ml(n).start(),n.da._a()}function uy(n){return za(n)&&!ml(n).F_()&&n.Pa.size>0}function za(n){return be(n).Ta.size===0}function jb(n){n.Aa=void 0}async function i4(n){n.da.set("Online")}async function s4(n){n.Pa.forEach((e,t)=>{oy(n,e)})}async function r4(n,e){jb(n),uy(n)?(n.da.ca(e),ly(n)):n.da.set("Unknown")}async function a4(n,e,t){if(n.da.set("Online"),e instanceof Cb&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Pa.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Pa.delete(d),a.Aa.removeTarget(d))}(n,e)}catch(s){he(Da,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Zf(n,s)}else if(e instanceof Af?n.Aa.Xe(e):e instanceof bb?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(Re.min()))try{const s=await Ub(n.localStore);t.compareTo(s)>=0&&await function(l,c){const d=l.Aa.It(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Pa.get(g);y&&l.Pa.set(g,y.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const y=l.Pa.get(p);if(!y)return;l.Pa.set(p,y.withResumeToken(rn.EMPTY_BYTE_STRING,y.snapshotVersion)),Fb(l,p);const T=new dr(y.target,p,g,y.sequenceNumber);oy(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(s){he(Da,"Failed to raise snapshot:",s),await Zf(n,s)}}async function Zf(n,e,t){if(!pl(e))throw e;n.Ta.add(1),await Rc(n),n.da.set("Offline"),t||(t=()=>Ub(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{he(Da,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await Rd(n)})}function qb(n,e){return e().catch(t=>Zf(n,t,e))}async function bd(n){const e=be(n),t=Cr(e);let s=e.ha.length>0?e.ha[e.ha.length-1].batchId:K_;for(;o4(e);)try{const a=await FV(e.localStore,s);if(a===null){e.ha.length===0&&t.N_();break}s=a.batchId,l4(e,a)}catch(a){await Zf(e,a)}Gb(e)&&Kb(e)}function o4(n){return za(n)&&n.ha.length<10}function l4(n,e){n.ha.push(e);const t=Cr(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function Gb(n){return za(n)&&!Cr(n).F_()&&n.ha.length>0}function Kb(n){Cr(n).start()}async function u4(n){Cr(n).ta()}async function c4(n){const e=Cr(n);for(const t of n.ha)e.Z_(t.mutations)}async function h4(n,e,t){const s=n.ha.shift(),a=J_.from(s,e,t);await qb(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await bd(n)}async function f4(n,e){e&&Cr(n).Y_&&await async function(s,a){if(function(c){return $L(c)&&c!==ne.ABORTED}(a.code)){const l=s.ha.shift();Cr(s).O_(),await qb(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a)),await bd(s)}}(n,e),Gb(n)&&Kb(n)}async function XS(n,e){const t=be(n);t.asyncQueue.verifyOperationInProgress(),he(Da,"RemoteStore received new credentials");const s=za(t);t.Ta.add(3),await Rc(t),s&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await Rd(t)}async function d4(n,e){const t=be(n);e?(t.Ta.delete(2),await Rd(t)):e||(t.Ta.add(2),await Rc(t),t.da.set("Unknown"))}function ml(n){return n.Ra||(n.Ra=function(t,s,a){const l=be(t);return l.ra(),new XV(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{e_:i4.bind(null,n),n_:s4.bind(null,n),i_:r4.bind(null,n),j_:a4.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),uy(n)?ly(n):n.da.set("Unknown")):(await n.Ra.stop(),jb(n))})),n.Ra}function Cr(n){return n.Va||(n.Va=function(t,s,a){const l=be(t);return l.ra(),new ZV(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:u4.bind(null,n),i_:f4.bind(null,n),X_:c4.bind(null,n),ea:h4.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await bd(n)):(await n.Va.stop(),n.ha.length>0&&(he(Da,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new cy(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hy(n,e){if(Cs("AsyncQueue",`${e}: ${n}`),pl(n))return new ge(ne.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{static emptySet(e){return new Ko(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ye.comparator(t.key,s.key):(t,s)=>ye.comparator(t.key,s.key),this.keyedMap=Uu(),this.sortedSet=new gt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ko)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ko;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(){this.ma=new gt(ye.comparator)}track(e){const t=e.doc.key,s=this.ma.get(t);s?e.type!==0&&s.type===3?this.ma=this.ma.insert(t,e):e.type===3&&s.type!==1?this.ma=this.ma.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ma=this.ma.remove(t):e.type===1&&s.type===2?this.ma=this.ma.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):Ae(63341,{Vt:e,fa:s}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,s)=>{e.push(s)}),e}}class nl{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new nl(e,t,Ko.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class m4{constructor(){this.queries=JS(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,s){const a=be(t),l=a.queries;a.queries=JS(),l.forEach((c,d)=>{for(const p of d.ya)p.onError(s)})})(this,new ge(ne.ABORTED,"Firestore shutting down"))}}function JS(){return new Ba(n=>fb(n),vd)}async function g4(n,e){const t=be(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.wa()&&e.Sa()&&(s=2):(l=new p4,s=e.Sa()?0:1);try{switch(s){case 0:l.pa=await t.onListen(a,!0);break;case 1:l.pa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=hy(c,`Initialization of query '${Lo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.ya.push(e),e.Da(t.onlineState),l.pa&&e.va(l.pa)&&fy(t)}async function _4(n,e){const t=be(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.ya.indexOf(e);c>=0&&(l.ya.splice(c,1),l.ya.length===0?a=e.Sa()?0:1:!l.wa()&&e.Sa()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function y4(n,e){const t=be(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.ya)d.va(a)&&(s=!0);c.pa=a}}s&&fy(t)}function v4(n,e,t){const s=be(n),a=s.queries.get(e);if(a)for(const l of a.ya)l.onError(t);s.queries.delete(e)}function fy(n){n.ba.forEach(e=>{e.next()})}var Yg,eA;(eA=Yg||(Yg={})).Ca="default",eA.Cache="cache";class E4{constructor(e,t,s){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=s||{}}va(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new nl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const s=t!=="Offline";return(!this.options.La||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=nl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Yg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.key=e}}class $b{constructor(e){this.key=e}}class T4{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Pe(),this.mutatedKeys=Pe(),this.Ha=db(e),this.Ja=new Ko(this.Ha)}get Ya(){return this.Ga}Za(e,t){const s=t?t.Xa:new ZS,a=t?t.Ja:this.Ja;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,T)=>{const S=a.get(y),N=Ed(this.query,T)?T:null,I=!!S&&this.mutatedKeys.has(S.key),F=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let U=!1;S&&N?S.data.isEqual(N.data)?I!==F&&(s.track({type:3,doc:N}),U=!0):this.eu(S,N)||(s.track({type:2,doc:N}),U=!0,(p&&this.Ha(N,p)>0||g&&this.Ha(N,g)<0)&&(d=!0)):!S&&N?(s.track({type:0,doc:N}),U=!0):S&&!N&&(s.track({type:1,doc:S}),U=!0,(p||g)&&(d=!0)),U&&(N?(c=c.add(N),l=F?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{Ja:c,Xa:s,Cs:d,mutatedKeys:l}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const c=e.Xa.ga();c.sort((y,T)=>function(N,I){const F=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{Vt:U})}};return F(N)-F(I)}(y.type,T.type)||this.Ha(y.doc,T.doc)),this.tu(s),a=a!=null&&a;const d=t&&!a?this.nu():[],p=this.ja.size===0&&this.current&&!a?1:0,g=p!==this.za;return this.za=p,c.length!==0||g?{snapshot:new nl(this.query,e.Ja,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),ru:d}:{ru:d}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new ZS,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Pe(),this.Ja.forEach(s=>{this.iu(s.key)&&(this.ja=this.ja.add(s.key))});const t=[];return e.forEach(s=>{this.ja.has(s)||t.push(new $b(s))}),this.ja.forEach(s=>{e.has(s)||t.push(new Yb(s))}),t}su(e){this.Ga=e.$s,this.ja=Pe();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return nl.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const dy="SyncEngine";class S4{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class A4{constructor(e){this.key=e,this._u=!1}}class w4{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.au={},this.uu=new Ba(d=>fb(d),vd),this.cu=new Map,this.lu=new Set,this.hu=new gt(ye.comparator),this.Pu=new Map,this.Tu=new ny,this.Iu={},this.Eu=new Map,this.du=tl.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function R4(n,e,t=!0){const s=eC(n);let a;const l=s.uu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.ou()):a=await Qb(s,e,t,!0),a}async function b4(n,e){const t=eC(n);await Qb(t,e,!0,!1)}async function Qb(n,e,t,s){const a=await jV(n.localStore,Vi(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await C4(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&Hb(n.remoteStore,a),d}async function C4(n,e,t,s,a){n.Ru=(T,S,N)=>async function(F,U,Y,W){let te=U.view.Za(Y);te.Cs&&(te=await KS(F.localStore,U.query,!1).then(({documents:x})=>U.view.Za(x,te)));const oe=W&&W.targetChanges.get(U.targetId),ce=W&&W.targetMismatches.get(U.targetId)!=null,Te=U.view.applyChanges(te,F.isPrimaryClient,oe,ce);return nA(F,U.targetId,Te.ru),Te.snapshot}(n,T,S,N);const l=await KS(n.localStore,e,!0),c=new T4(e,l.$s),d=c.Za(l.documents),p=wc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);nA(n,t,g.ru);const y=new S4(e,t,c);return n.uu.set(e,y),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),g.snapshot}async function I4(n,e,t){const s=be(n),a=s.uu.get(e),l=s.cu.get(a.targetId);if(l.length>1)return s.cu.set(a.targetId,l.filter(c=>!vd(c,e))),void s.uu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Gg(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&ay(s.remoteStore,a.targetId),$g(s,a.targetId)}).catch(dl)):($g(s,a.targetId),await Gg(s.localStore,a.targetId,!0))}async function N4(n,e){const t=be(n),s=t.uu.get(e),a=t.cu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),ay(t.remoteStore,s.targetId))}async function O4(n,e,t){const s=V4(n);try{const a=await function(c,d){const p=be(c),g=Bt.now(),y=d.reduce((N,I)=>N.add(I.key),Pe());let T,S;return p.persistence.runTransaction("Locally write mutations","readwrite",N=>{let I=Is(),F=Pe();return p.Bs.getEntries(N,y).next(U=>{I=U,I.forEach((Y,W)=>{W.isValidDocument()||(F=F.add(Y))})}).next(()=>p.localDocuments.getOverlayedDocuments(N,I)).next(U=>{T=U;const Y=[];for(const W of d){const te=jL(W,T.get(W.key).overlayedDocument);te!=null&&Y.push(new Mr(W.key,te,rb(te.value.mapValue),Ui.exists(!0)))}return p.mutationQueue.addMutationBatch(N,g,Y,d)}).next(U=>{S=U;const Y=U.applyToLocalDocumentSet(T,F);return p.documentOverlayCache.saveOverlays(N,U.batchId,Y)})}).then(()=>({batchId:S.batchId,changes:mb(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let g=c.Iu[c.currentUser.toKey()];g||(g=new gt(Ne)),g=g.insert(d,p),c.Iu[c.currentUser.toKey()]=g}(s,a.batchId,t),await bc(s,a.changes),await bd(s.remoteStore)}catch(a){const l=hy(a,"Failed to persist write");t.reject(l)}}async function Wb(n,e){const t=be(n);try{const s=await zV(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Pu.get(l);c&&(Qe(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c._u=!0:a.modifiedDocuments.size>0?Qe(c._u,14607):a.removedDocuments.size>0&&(Qe(c._u,42227),c._u=!1))}),await bc(t,s,e)}catch(s){await dl(s)}}function tA(n,e,t){const s=be(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.uu.forEach((l,c)=>{const d=c.view.Da(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=be(c);p.onlineState=d;let g=!1;p.queries.forEach((y,T)=>{for(const S of T.ya)S.Da(d)&&(g=!0)}),g&&fy(p)}(s.eventManager,e),a.length&&s.au.j_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function D4(n,e,t){const s=be(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Pu.get(e),l=a&&a.key;if(l){let c=new gt(ye.comparator);c=c.insert(l,dn.newNoDocument(l,Re.min()));const d=Pe().add(l),p=new Ad(Re.min(),new Map,new gt(Ne),c,d);await Wb(s,p),s.hu=s.hu.remove(l),s.Pu.delete(e),py(s)}else await Gg(s.localStore,e,!1).then(()=>$g(s,e,t)).catch(dl)}async function k4(n,e){const t=be(n),s=e.batch.batchId;try{const a=await BV(t.localStore,e);Zb(t,s,null),Xb(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await bc(t,a)}catch(a){await dl(a)}}async function x4(n,e,t){const s=be(n);try{const a=await function(c,d){const p=be(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next(T=>(Qe(T!==null,37113),y=T.keys(),p.mutationQueue.removeMutationBatch(g,T))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>p.localDocuments.getDocuments(g,y))})}(s.localStore,e);Zb(s,e,t),Xb(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await bc(s,a)}catch(a){await dl(a)}}function Xb(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function Zb(n,e,t){const s=be(n);let a=s.Iu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Iu[s.currentUser.toKey()]=a}}function $g(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.cu.get(e))n.uu.delete(s),t&&n.au.Vu(s,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(s=>{n.Tu.containsKey(s)||Jb(n,s)})}function Jb(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(ay(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),py(n))}function nA(n,e,t){for(const s of t)s instanceof Yb?(n.Tu.addReference(s.key,e),M4(n,s)):s instanceof $b?(he(dy,"Document no longer in limbo: "+s.key),n.Tu.removeReference(s.key,e),n.Tu.containsKey(s.key)||Jb(n,s.key)):Ae(19791,{mu:s})}function M4(n,e){const t=e.key,s=t.path.canonicalString();n.hu.get(t)||n.lu.has(s)||(he(dy,"New document in limbo: "+t),n.lu.add(s),py(n))}function py(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new ye(Et.fromString(e)),s=n.du.next();n.Pu.set(s,new A4(t)),n.hu=n.hu.insert(t,s),Hb(n.remoteStore,new dr(Vi(X_(t.path)),s,"TargetPurposeLimboResolution",md.le))}}async function bc(n,e,t){const s=be(n),a=[],l=[],c=[];s.uu.isEmpty()||(s.uu.forEach((d,p)=>{c.push(s.Ru(p,e,t).then(g=>{var y;if((g||t)&&s.isPrimaryClient){const T=g?!g.fromCache:(y=t==null?void 0:t.targetChanges.get(p.targetId))===null||y===void 0?void 0:y.current;s.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(g){a.push(g);const T=sy.Rs(p.targetId,g);l.push(T)}}))}),await Promise.all(c),s.au.j_(a),await async function(p,g){const y=be(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>J.forEach(g,S=>J.forEach(S.ds,N=>y.persistence.referenceDelegate.addReference(T,S.targetId,N)).next(()=>J.forEach(S.As,N=>y.persistence.referenceDelegate.removeReference(T,S.targetId,N)))))}catch(T){if(!pl(T))throw T;he(ry,"Failed to update sequence numbers: "+T)}for(const T of g){const S=T.targetId;if(!T.fromCache){const N=y.xs.get(S),I=N.snapshotVersion,F=N.withLastLimboFreeSnapshotVersion(I);y.xs=y.xs.insert(S,F)}}}(s.localStore,l))}async function P4(n,e){const t=be(n);if(!t.currentUser.isEqual(e)){he(dy,"User change. New user:",e.toKey());const s=await Vb(t.localStore,e);t.currentUser=e,function(l,c){l.Eu.forEach(d=>{d.forEach(p=>{p.reject(new ge(ne.CANCELLED,c))})}),l.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await bc(t,s.ks)}}function L4(n,e){const t=be(n),s=t.Pu.get(e);if(s&&s._u)return Pe().add(s.key);{let a=Pe();const l=t.cu.get(e);if(!l)return a;for(const c of l){const d=t.uu.get(c);a=a.unionWith(d.view.Ya)}return a}}function eC(n){const e=be(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=L4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=D4.bind(null,e),e.au.j_=y4.bind(null,e.eventManager),e.au.Vu=v4.bind(null,e.eventManager),e}function V4(n){const e=be(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=k4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=x4.bind(null,e),e}class Jf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wd(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return UV(this.persistence,new PV,e.initialUser,this.serializer)}yu(e){return new Lb(iy.fi,this.serializer)}pu(e){return new GV}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jf.provider={build:()=>new Jf};class U4 extends Jf{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){Qe(this.persistence.referenceDelegate instanceof Xf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new EV(s,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?bn.withCacheSize(this.cacheSizeBytes):bn.DEFAULT;return new Lb(s=>Xf.fi(s,t),this.serializer)}}class Qg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>tA(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=P4.bind(null,this.syncEngine),await d4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new m4}()}createDatastore(e){const t=wd(e.databaseInfo.databaseId),s=function(l){return new WV(l)}(e.databaseInfo);return function(l,c,d,p){return new e4(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,c,d){return new n4(s,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>tA(this.syncEngine,t,0),function(){return QS.C()?new QS:new KV}())}createSyncEngine(e,t){return function(a,l,c,d,p,g,y){const T=new w4(a,l,c,d,p,g);return y&&(T.Au=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=be(a);he(Da,"RemoteStore shutting down."),l.Ta.add(5),await Rc(l),l.Ea.shutdown(),l.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Qg.provider={build:()=>new Qg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Cs("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="FirestoreClient";class z4{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=cn.UNAUTHENTICATED,this.clientId=QR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async c=>{he(Ir,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(he(Ir,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=hy(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function rg(n,e){n.asyncQueue.verifyOperationInProgress(),he(Ir,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async a=>{s.isEqual(a)||(await Vb(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function iA(n,e){n.asyncQueue.verifyOperationInProgress();const t=await H4(n);he(Ir,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>XS(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,a)=>XS(e.remoteStore,a)),n._onlineComponents=e}async function H4(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){he(Ir,"Using user provided OfflineComponentProvider");try{await rg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===ne.FAILED_PRECONDITION||a.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Wo("Error using user provided cache. Falling back to memory cache: "+t),await rg(n,new Jf)}}else he(Ir,"Using default OfflineComponentProvider"),await rg(n,new U4(void 0));return n._offlineComponents}async function tC(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(he(Ir,"Using user provided OnlineComponentProvider"),await iA(n,n._uninitializedComponentsProvider._online)):(he(Ir,"Using default OnlineComponentProvider"),await iA(n,new Qg))),n._onlineComponents}function F4(n){return tC(n).then(e=>e.syncEngine)}async function j4(n){const e=await tC(n),t=e.eventManager;return t.onListen=R4.bind(null,e.syncEngine),t.onUnlisten=I4.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=b4.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=N4.bind(null,e.syncEngine),t}function q4(n,e,t={}){const s=new vr;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const y=new B4({next:S=>{y.Cu(),c.enqueueAndForget(()=>_4(l,T));const N=S.docs.has(d);!N&&S.fromCache?g.reject(new ge(ne.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&S.fromCache&&p&&p.source==="server"?g.reject(new ge(ne.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),T=new E4(X_(d.path),y,{includeMetadataChanges:!0,La:!0});return g4(l,T)}(await j4(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(n,e,t){if(!t)throw new ge(ne.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function K4(n,e,t,s){if(e===!0&&s===!0)throw new ge(ne.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function rA(n){if(!ye.isDocumentKey(n))throw new ge(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function my(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ae(12329,{type:typeof n})}function ka(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ge(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=my(n);throw new ge(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC="firestore.googleapis.com",aA=!0;class oA{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ge(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iC,this.ssl=aA}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:aA;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Pb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<yV)throw new ge(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}K4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nC((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ge(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ge(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ge(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gy{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oA({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oA(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new YP;switch(s.type){case"firstParty":return new XP(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ge(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=sA.get(t);s&&(he("ComponentProvider","Removing Datastore"),sA.delete(t),s.terminate())}(this),Promise.resolve()}}function Y4(n,e,t,s={}){var a;n=ka(n,gy);const l=La(e),c=n._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;l&&(o_(`https://${p}`),l_("Firestore",!0)),c.host!==iC&&c.host!==p&&Wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:s});if(!Er(g,d)&&(n._setSettings(g),s.mockUserToken)){let y,T;if(typeof s.mockUserToken=="string")y=s.mockUserToken,T=cn.MOCK_USER;else{y=jA(s.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new ge(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new cn(S)}n._authCredentials=new $P(new YR(y,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new _y(this.firestore,e,this._query)}}class zn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new uc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zn(this.firestore,e,this._key)}}class uc extends _y{constructor(e,t,s){super(e,t,X_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zn(this.firestore,null,new ye(e))}withConverter(e){return new uc(this.firestore,e,this._path)}}function $4(n,e,...t){if(n=mt(n),arguments.length===1&&(e=QR.newId()),G4("doc","path",e),n instanceof gy){const s=Et.fromString(e,...t);return rA(s),new zn(n,null,new ye(s))}{if(!(n instanceof zn||n instanceof uc))throw new ge(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Et.fromString(e,...t));return rA(s),new zn(n.firestore,n instanceof uc?n.converter:null,new ye(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA="AsyncQueue";class uA{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new Bb(this,"async_queue_retry"),this.ec=()=>{const s=sg();s&&he(lA,"Visibility state changed to "+s.visibilityState),this.C_.p_()},this.tc=e;const t=sg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=sg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new vr;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!pl(e))throw e;he(lA,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(s=>{throw this.Ju=s,this.Yu=!1,Cs("INTERNAL UNHANDLED ERROR: ",cA(s)),s}).then(s=>(this.Yu=!1,s))));return this.tc=t,t}enqueueAfterDelay(e,t,s){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const a=cy.createAndSchedule(this,e,t,s,l=>this.oc(l));return this.Hu.push(a),a}nc(){this.Ju&&Ae(47125,{_c:cA(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function cA(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Cd extends gy{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new uA,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new uA(e),this._firestoreClient=void 0,await e}}}function Q4(n,e){const t=typeof n=="object"?n:f_(),s=typeof n=="string"?n:qf,a=ad(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=zA("firestore");l&&Y4(a,...l)}return a}function sC(n){if(n._terminated)throw new ge(ne.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||W4(n),n._firestoreClient}function W4(n){var e,t,s;const a=n._freezeSettings(),l=function(d,p,g,y){return new fL(d,p,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,nC(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new z4(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this._byteString=e}static fromBase64String(e){try{return new il(rn.fromBase64String(e))}catch(t){throw new ge(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new il(rn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ge(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ge(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ge(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X4=/^__.*__$/;class Z4{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Mr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ac(e,this.data,t,this.fieldTransforms)}}class rC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Mr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function aC(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{hc:n})}}class Od{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Pc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Od(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:s,Ec:!1});return a.dc(e),a}Ac(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:s,Ec:!1});return a.Pc(),a}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return ed(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(aC(this.hc)&&X4.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class J4{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||wd(e)}gc(e,t,s,a=!1){return new Od({hc:e,methodName:t,fc:s,path:sn.emptyPath(),Ec:!1,mc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oC(n){const e=n._freezeSettings(),t=wd(n._databaseId);return new J4(n._databaseId,!!e.ignoreUndefinedProperties,t)}function eU(n,e,t,s,a,l={}){const c=n.gc(l.merge||l.mergeFields?2:0,e,t,a);Ty("Data must be an object, but it was:",c,s);const d=lC(s,c);let p,g;if(l.merge)p=new Un(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const S=Wg(e,T,t);if(!c.contains(S))throw new ge(ne.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);cC(y,S)||y.push(S)}p=new Un(y),g=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,g=c.fieldTransforms;return new Z4(new Cn(d),p,g)}class Dd extends Nd{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dd}}function tU(n,e,t){return new Od({hc:3,fc:e.settings.fc,methodName:n._methodName,Ec:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ey extends Nd{constructor(e,t){super(e),this.yc=t}_toFieldTransform(e){const t=tU(this,e,!0),s=this.yc.map(l=>Cc(l,t)),a=new el(s);return new BL(e.path,a)}isEqual(e){return e instanceof Ey&&Er(this.yc,e.yc)}}function nU(n,e,t,s){const a=n.gc(1,e,t);Ty("Data must be an object, but it was:",a,s);const l=[],c=Cn.empty();xr(s,(p,g)=>{const y=Sy(e,p,t);g=mt(g);const T=a.Ac(y);if(g instanceof Dd)l.push(y);else{const S=Cc(g,T);S!=null&&(l.push(y),c.set(y,S))}});const d=new Un(l);return new rC(c,d,a.fieldTransforms)}function iU(n,e,t,s,a,l){const c=n.gc(1,e,t),d=[Wg(e,s,t)],p=[a];if(l.length%2!=0)throw new ge(ne.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)d.push(Wg(e,l[S])),p.push(l[S+1]);const g=[],y=Cn.empty();for(let S=d.length-1;S>=0;--S)if(!cC(g,d[S])){const N=d[S];let I=p[S];I=mt(I);const F=c.Ac(N);if(I instanceof Dd)g.push(N);else{const U=Cc(I,F);U!=null&&(g.push(N),y.set(N,U))}}const T=new Un(g);return new rC(y,T,c.fieldTransforms)}function Cc(n,e){if(uC(n=mt(n)))return Ty("Unsupported field value:",e,n),lC(n,e);if(n instanceof Nd)return function(s,a){if(!aC(a.hc))throw a.Vc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Vc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(s,a){const l=[];let c=0;for(const d of s){let p=Cc(d,a.Rc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(s,a){if((s=mt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return LL(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Bt.fromDate(s);return{timestampValue:Wf(a.serializer,l)}}if(s instanceof Bt){const l=new Bt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Wf(a.serializer,l)}}if(s instanceof yy)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof il)return{bytesValue:Ib(a.serializer,s._byteString)};if(s instanceof zn){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Vc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:ty(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof vy)return function(c,d){return{mapValue:{fields:{[ib]:{stringValue:sb},[Gf]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Vc("VectorValues must only contain numeric values.");return Z_(d.serializer,g)})}}}}}}(s,a);throw a.Vc(`Unsupported field value: ${my(s)}`)}(n,e)}function lC(n,e){const t={};return XR(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xr(n,(s,a)=>{const l=Cc(a,e.Ic(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function uC(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Bt||n instanceof yy||n instanceof il||n instanceof zn||n instanceof Nd||n instanceof vy)}function Ty(n,e,t){if(!uC(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const s=my(t);throw s==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+s)}}function Wg(n,e,t){if((e=mt(e))instanceof Id)return e._internalPath;if(typeof e=="string")return Sy(n,e);throw ed("Field path arguments must be of type string or ",n,!1,void 0,t)}const sU=new RegExp("[~\\*/\\[\\]]");function Sy(n,e,t){if(e.search(sU)>=0)throw ed(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Id(...e.split("."))._internalPath}catch{throw ed(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ed(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new ge(ne.INVALID_ARGUMENT,d+n+p)}function cC(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new zn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fC("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rU extends hC{data(){return super.data()}}function fC(n,e){return typeof e=="string"?Sy(n,e):e instanceof Id?e._internalPath:e._delegate._internalPath}class aU{convertValue(e,t="none"){switch(br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return bt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return xr(e,(a,l)=>{s[a]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[Gf].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(c=>bt(c.doubleValue));return new vy(l)}convertGeoPoint(e){return new yy(bt(e.latitude),bt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=_d(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(rc(e));default:return null}}convertTimestamp(e){const t=wr(e);return new Bt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Et.fromString(e);Qe(Mb(s),9688,{name:e});const a=new ac(s.get(1),s.get(3)),l=new ye(s.popFirst(5));return a.isEqual(t)||Cs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oU(n,e,t){let s;return s=n?n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lU{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dC extends hC{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new uU(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(fC("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class uU extends dC{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cU(n){n=ka(n,zn);const e=ka(n.firestore,Cd);return q4(sC(e),n._key).then(t=>fU(e,n,t))}class hU extends aU{constructor(e){super(),this.firestore=e}convertBytes(e){return new il(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new zn(this.firestore,null,t)}}function i3(n,e,t){n=ka(n,zn);const s=ka(n.firestore,Cd),a=oU(n.converter,e);return pC(s,[eU(oC(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Ui.none())])}function s3(n,e,t,...s){n=ka(n,zn);const a=ka(n.firestore,Cd),l=oC(a);let c;return c=typeof(e=mt(e))=="string"||e instanceof Id?iU(l,"updateDoc",n._key,e,t,s):nU(l,"updateDoc",n._key,e),pC(a,[c.toMutation(n._key,Ui.exists(!0))])}function pC(n,e){return function(s,a){const l=new vr;return s.asyncQueue.enqueueAndForget(async()=>O4(await F4(s),a,l)),l.promise}(sC(n),e)}function fU(n,e,t){const s=t.docs.get(e._key),a=new hU(n);return new dC(n,a,e._key,s,new lU(t.hasPendingWrites,t.fromCache),e.converter)}function r3(...n){return new Ey("arrayUnion",n)}(function(e,t=!0){(function(a){fl=a})(Nr),Tr(new ws("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new Cd(new QP(s.getProvider("auth-internal")),new ZP(c,s.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ge(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ac(g.options.projectId,y)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),ti(gS,_S,e),ti(gS,_S,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="firebasestorage.googleapis.com",gC="storageBucket",dU=2*60*1e3,pU=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends qi{constructor(e,t,s=0){super(ag(e),`Firebase Storage: ${t} (${ag(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,St.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ag(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Tt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Tt||(Tt={}));function ag(n){return"storage/"+n}function Ay(){const n="An unknown error occurred, please check the error payload for server response.";return new St(Tt.UNKNOWN,n)}function mU(n){return new St(Tt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function gU(n){return new St(Tt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _U(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new St(Tt.UNAUTHENTICATED,n)}function yU(){return new St(Tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function vU(n){return new St(Tt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function EU(){return new St(Tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function TU(){return new St(Tt.CANCELED,"User canceled the upload/download.")}function SU(n){return new St(Tt.INVALID_URL,"Invalid URL '"+n+"'.")}function AU(n){return new St(Tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function wU(){return new St(Tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+gC+"' property when initializing the app?")}function RU(){return new St(Tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function bU(){return new St(Tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function CU(n){return new St(Tt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Xg(n){return new St(Tt.INVALID_ARGUMENT,n)}function _C(){return new St(Tt.APP_DELETED,"The Firebase app was deleted.")}function IU(n){return new St(Tt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Wu(n,e){return new St(Tt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ku(n){throw new St(Tt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Sn.makeFromUrl(e,t)}catch{return new Sn(e,"")}if(s.path==="")return s;throw AU(e)}static makeFromUrl(e,t){let s=null;const a="([A-Za-z0-9.\\-_]+)";function l(oe){oe.path.charAt(oe.path.length-1)==="/"&&(oe.path_=oe.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+a+c,"i"),p={bucket:1,path:3};function g(oe){oe.path_=decodeURIComponent(oe.path)}const y="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",N=new RegExp(`^https?://${T}/${y}/b/${a}/o${S}`,"i"),I={bucket:1,path:3},F=t===mC?"(?:storage.googleapis.com|storage.cloud.google.com)":t,U="([^?#]*)",Y=new RegExp(`^https?://${F}/${a}/${U}`,"i"),te=[{regex:d,indices:p,postModify:l},{regex:N,indices:I,postModify:g},{regex:Y,indices:{bucket:1,path:2},postModify:g}];for(let oe=0;oe<te.length;oe++){const ce=te[oe],Te=ce.regex.exec(e);if(Te){const x=Te[ce.indices.bucket];let R=Te[ce.indices.path];R||(R=""),s=new Sn(x,R),ce.postModify(s);break}}if(s==null)throw SU(e);return s}}class NU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OU(n,e,t){let s=1,a=null,l=null,c=!1,d=0;function p(){return d===2}let g=!1;function y(...U){g||(g=!0,e.apply(null,U))}function T(U){a=setTimeout(()=>{a=null,n(N,p())},U)}function S(){l&&clearTimeout(l)}function N(U,...Y){if(g){S();return}if(U){S(),y.call(null,U,...Y);return}if(p()||c){S(),y.call(null,U,...Y);return}s<64&&(s*=2);let te;d===1?(d=2,te=0):te=(s+Math.random())*1e3,T(te)}let I=!1;function F(U){I||(I=!0,S(),!g&&(a!==null?(U||(d=2),clearTimeout(a),T(0)):U||(d=1)))}return T(0),l=setTimeout(()=>{c=!0,F(!0)},t),F}function DU(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kU(n){return n!==void 0}function xU(n){return typeof n=="object"&&!Array.isArray(n)}function wy(n){return typeof n=="string"||n instanceof String}function hA(n){return Ry()&&n instanceof Blob}function Ry(){return typeof Blob<"u"}function Zg(n,e,t,s){if(s<e)throw Xg(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Xg(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function yC(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const a=e(s)+"="+e(n[s]);t=t+a+"&"}return t=t.slice(0,-1),t}var Aa;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Aa||(Aa={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MU(n,e){const t=n>=500&&n<600,a=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||a||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PU{constructor(e,t,s,a,l,c,d,p,g,y,T,S=!0,N=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=a,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=y,this.connectionFactory_=T,this.retry=S,this.isUsingEmulator=N,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,F)=>{this.resolve_=I,this.reject_=F,this.start_()})}start_(){const e=(s,a)=>{if(a){s(!1,new cf(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===Aa.NO_ERROR,p=l.getStatus();if(!d||MU(p,this.additionalRetryCodes_)&&this.retry){const y=l.getErrorCode()===Aa.ABORT;s(!1,new cf(!1,null,y));return}const g=this.successCodes_.indexOf(p)!==-1;s(!0,new cf(g,l))})},t=(s,a)=>{const l=this.resolve_,c=this.reject_,d=a.connection;if(a.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());kU(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=Ay();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(a.canceled){const p=this.appDelete_?_C():TU();c(p)}else{const p=EU();c(p)}};this.canceled_?t(!1,new cf(!1,null,!0)):this.backoffId_=OU(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&DU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class cf{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function LU(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function VU(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function UU(n,e){e&&(n["X-Firebase-GMPID"]=e)}function BU(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function zU(n,e,t,s,a,l,c=!0,d=!1){const p=yC(n.urlParams),g=n.url+p,y=Object.assign({},n.headers);return UU(y,e),LU(y,t),VU(y,l),BU(y,s),new PU(g,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,a,c,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function FU(...n){const e=HU();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(Ry())return new Blob(n);throw new St(Tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function jU(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qU(n){if(typeof atob>"u")throw CU("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class og{constructor(e,t){this.data=e,this.contentType=t||null}}function GU(n,e){switch(n){case Pi.RAW:return new og(vC(e));case Pi.BASE64:case Pi.BASE64URL:return new og(EC(n,e));case Pi.DATA_URL:return new og(YU(e),$U(e))}throw Ay()}function vC(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=s,c=n.charCodeAt(++t);s=65536|(l&1023)<<10|c&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function KU(n){let e;try{e=decodeURIComponent(n)}catch{throw Wu(Pi.DATA_URL,"Malformed data URL.")}return vC(e)}function EC(n,e){switch(n){case Pi.BASE64:{const a=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(a||l)throw Wu(n,"Invalid character '"+(a?"-":"_")+"' found: is it base64url encoded?");break}case Pi.BASE64URL:{const a=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(a||l)throw Wu(n,"Invalid character '"+(a?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=qU(e)}catch(a){throw a.message.includes("polyfill")?a:Wu(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}class TC{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Wu(Pi.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=QU(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function YU(n){const e=new TC(n);return e.base64?EC(Pi.BASE64,e.rest):KU(e.rest)}function $U(n){return new TC(n).contentType}function QU(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){let s=0,a="";hA(e)?(this.data_=e,s=e.size,a=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=a}size(){return this.size_}type(){return this.type_}slice(e,t){if(hA(this.data_)){const s=this.data_,a=jU(s,e,t);return a===null?null:new fr(a)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new fr(s,!0)}}static getBlob(...e){if(Ry()){const t=e.map(s=>s instanceof fr?s.data_:s);return new fr(FU.apply(null,t))}else{const t=e.map(c=>wy(c)?GU(Pi.RAW,c).data:c.data_);let s=0;t.forEach(c=>{s+=c.byteLength});const a=new Uint8Array(s);let l=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)a[l++]=c[d]}),new fr(a,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n){let e;try{e=JSON.parse(n)}catch{return null}return xU(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WU(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function XU(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function SC(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZU(n,e){return e}class En{constructor(e,t,s,a){this.server=e,this.local=t||e,this.writable=!!s,this.xform=a||ZU}}let hf=null;function JU(n){return!wy(n)||n.length<2?n:SC(n)}function AC(){if(hf)return hf;const n=[];n.push(new En("bucket")),n.push(new En("generation")),n.push(new En("metageneration")),n.push(new En("name","fullPath",!0));function e(l,c){return JU(c)}const t=new En("name");t.xform=e,n.push(t);function s(l,c){return c!==void 0?Number(c):c}const a=new En("size");return a.xform=s,n.push(a),n.push(new En("timeCreated")),n.push(new En("updated")),n.push(new En("md5Hash",null,!0)),n.push(new En("cacheControl",null,!0)),n.push(new En("contentDisposition",null,!0)),n.push(new En("contentEncoding",null,!0)),n.push(new En("contentLanguage",null,!0)),n.push(new En("contentType",null,!0)),n.push(new En("metadata","customMetadata",!0)),hf=n,hf}function e6(n,e){function t(){const s=n.bucket,a=n.fullPath,l=new Sn(s,a);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function t6(n,e,t){const s={};s.type="file";const a=t.length;for(let l=0;l<a;l++){const c=t[l];s[c.local]=c.xform(s,e[c.server])}return e6(s,n),s}function wC(n,e,t){const s=by(e);return s===null?null:t6(n,s,t)}function n6(n,e,t,s){const a=by(e);if(a===null||!wy(a.downloadTokens))return null;const l=a.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(g=>{const y=n.bucket,T=n.fullPath,S="/b/"+c(y)+"/o/"+c(T),N=Ic(S,t,s),I=yC({alt:"media",token:g});return N+I})[0]}function i6(n,e){const t={},s=e.length;for(let a=0;a<s;a++){const l=e[a];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="prefixes",dA="items";function s6(n,e,t){const s={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[fA])for(const a of t[fA]){const l=a.replace(/\/$/,""),c=n._makeStorageReference(new Sn(e,l));s.prefixes.push(c)}if(t[dA])for(const a of t[dA]){const l=n._makeStorageReference(new Sn(e,a.name));s.items.push(l)}return s}function r6(n,e,t){const s=by(t);return s===null?null:s6(n,e,s)}class kd{constructor(e,t,s,a){this.url=e,this.method=t,this.handler=s,this.timeout=a,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(n){if(!n)throw Ay()}function a6(n,e){function t(s,a){const l=wC(n,a,e);return Cy(l!==null),l}return t}function o6(n,e){function t(s,a){const l=r6(n,e,a);return Cy(l!==null),l}return t}function l6(n,e){function t(s,a){const l=wC(n,a,e);return Cy(l!==null),n6(l,a,n.host,n._protocol)}return t}function Iy(n){function e(t,s){let a;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?a=yU():a=_U():t.getStatus()===402?a=gU(n.bucket):t.getStatus()===403?a=vU(n.path):a=s,a.status=t.getStatus(),a.serverResponse=s.serverResponse,a}return e}function RC(n){const e=Iy(n);function t(s,a){let l=e(s,a);return s.getStatus()===404&&(l=mU(n.path)),l.serverResponse=a.serverResponse,l}return t}function u6(n,e,t,s,a){const l={};e.isRoot?l.prefix="":l.prefix=e.path+"/",t.length>0&&(l.delimiter=t),s&&(l.pageToken=s),a&&(l.maxResults=a);const c=e.bucketOnlyServerUrl(),d=Ic(c,n.host,n._protocol),p="GET",g=n.maxOperationRetryTime,y=new kd(d,p,o6(n,e.bucket),g);return y.urlParams=l,y.errorHandler=Iy(e),y}function c6(n,e,t){const s=e.fullServerUrl(),a=Ic(s,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new kd(a,l,l6(n,t),c);return d.errorHandler=RC(e),d}function h6(n,e){const t=e.fullServerUrl(),s=Ic(t,n.host,n._protocol),a="DELETE",l=n.maxOperationRetryTime;function c(p,g){}const d=new kd(s,a,c,l);return d.successCodes=[200,204],d.errorHandler=RC(e),d}function f6(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function d6(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=f6(null,e)),s}function p6(n,e,t,s,a){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let te="";for(let oe=0;oe<2;oe++)te=te+Math.random().toString().slice(2);return te}const p=d();c["Content-Type"]="multipart/related; boundary="+p;const g=d6(e,s,a),y=i6(g,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+p+`\r
Content-Type: `+g.contentType+`\r
\r
`,S=`\r
--`+p+"--",N=fr.getBlob(T,s,S);if(N===null)throw RU();const I={name:g.fullPath},F=Ic(l,n.host,n._protocol),U="POST",Y=n.maxUploadRetryTime,W=new kd(F,U,a6(n,t),Y);return W.urlParams=I,W.headers=c,W.body=N.uploadData(),W.errorHandler=Iy(e),W}class m6{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Aa.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Aa.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Aa.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,a,l){if(this.sent_)throw ku("cannot .send() more than once");if(La(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const c in l)l.hasOwnProperty(c)&&this.xhr_.setRequestHeader(c,l[c].toString());return a!==void 0?this.xhr_.send(a):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ku("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ku("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ku("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ku("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class g6 extends m6{initXhr(){this.xhr_.responseType="text"}}function xd(){return new g6}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t){this._service=e,t instanceof Sn?this._location=t:this._location=Sn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new xa(e,t)}get root(){const e=new Sn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return SC(this._location.path)}get storage(){return this._service}get parent(){const e=WU(this._location.path);if(e===null)return null;const t=new Sn(this._location.bucket,e);return new xa(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw IU(e)}}function _6(n,e,t){n._throwIfRoot("uploadBytes");const s=p6(n.storage,n._location,AC(),new fr(e,!0),t);return n.storage.makeRequestWithTokens(s,xd).then(a=>({metadata:a,ref:n}))}function y6(n){const e={prefixes:[],items:[]};return bC(n,e).then(()=>e)}async function bC(n,e,t){const a=await v6(n,{pageToken:t});e.prefixes.push(...a.prefixes),e.items.push(...a.items),a.nextPageToken!=null&&await bC(n,e,a.nextPageToken)}function v6(n,e){e!=null&&typeof e.maxResults=="number"&&Zg("options.maxResults",1,1e3,e.maxResults);const t=e||{},s=u6(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(s,xd)}function E6(n){n._throwIfRoot("getDownloadURL");const e=c6(n.storage,n._location,AC());return n.storage.makeRequestWithTokens(e,xd).then(t=>{if(t===null)throw bU();return t})}function T6(n){n._throwIfRoot("deleteObject");const e=h6(n.storage,n._location);return n.storage.makeRequestWithTokens(e,xd)}function S6(n,e){const t=XU(n._location.path,e),s=new Sn(n._location.bucket,t);return new xa(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A6(n){return/^[A-Za-z]+:\/\//.test(n)}function w6(n,e){return new xa(n,e)}function CC(n,e){if(n instanceof Ny){const t=n;if(t._bucket==null)throw wU();const s=new xa(t,t._bucket);return e!=null?CC(s,e):s}else return e!==void 0?S6(n,e):n}function R6(n,e){if(e&&A6(e)){if(n instanceof Ny)return w6(n,e);throw Xg("To use ref(service, url), the first argument must be a Storage instance.")}else return CC(n,e)}function pA(n,e){const t=e==null?void 0:e[gC];return t==null?null:Sn.makeFromBucketSpec(t,n)}function b6(n,e,t,s={}){n.host=`${e}:${t}`;const a=La(e);a&&(o_(`https://${n.host}`),l_("Storage",!0)),n._isUsingEmulator=!0,n._protocol=a?"https":"http";const{mockUserToken:l}=s;l&&(n._overrideAuthToken=typeof l=="string"?l:jA(l,n.app.options.projectId))}class Ny{constructor(e,t,s,a,l,c=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=a,this._firebaseVersion=l,this._isUsingEmulator=c,this._bucket=null,this._host=mC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dU,this._maxUploadRetryTime=pU,this._requests=new Set,a!=null?this._bucket=Sn.makeFromBucketSpec(a,this._host):this._bucket=pA(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Sn.makeFromBucketSpec(this._url,e):this._bucket=pA(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xa(this,e)}_makeRequest(e,t,s,a,l=!0){if(this._deleted)return new NU(_C());{const c=zU(e,this._appId,s,a,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[s,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,a).getPromise()}}const mA="@firebase/storage",gA="0.13.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="storage";function a3(n,e,t){return n=mt(n),_6(n,e,t)}function o3(n){return n=mt(n),y6(n)}function l3(n){return n=mt(n),E6(n)}function u3(n){return n=mt(n),T6(n)}function c3(n,e){return n=mt(n),R6(n,e)}function C6(n=f_(),e){n=mt(n);const s=ad(n,IC).getImmediate({identifier:e}),a=zA("storage");return a&&I6(s,...a),s}function I6(n,e,t,s={}){b6(n,e,t,s)}function N6(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),a=n.getProvider("app-check-internal");return new Ny(t,s,a,e,Nr)}function O6(){Tr(new ws(IC,N6,"PUBLIC").setMultipleInstances(!0)),ti(mA,gA,""),ti(mA,gA,"esm2017")}O6();const D6={apiKey:"AIzaSyDWN5GCnrhUqKZlOt8Rxb0n748lhPf9B58",authDomain:"to-do-list-9cf11.firebaseapp.com",databaseURL:"https://to-do-list-9cf11-default-rtdb.firebaseio.com",projectId:"to-do-list-9cf11",storageBucket:"to-do-list-9cf11.firebasestorage.app",messagingSenderId:"44862500438",appId:"1:44862500438:web:ccb0f012d9c8e7cfe215f7",measurementId:"G-HB8NT8L1FD"},k6={apiKey:"AIzaSyC_SdildU9oD7BID8i4GdReOYM0_qlguN0",authDomain:"databased-react.firebaseapp.com",databaseURL:"https://databased-react-default-rtdb.firebaseio.com",projectId:"databased-react",storageBucket:"databased-react.appspot.com",messagingSenderId:"82890993147",appId:"1:82890993147:web:77b68d26108894eeeaef5e",measurementId:"G-Y0JTK4KL1P"},NC=h_(D6,"FIRST_APP"),x6=Q4(NC),OC=sx(NC),M6=h_(k6,"SECOND_APP"),h3=C6(M6),P6="_Signing_Out_Wrapper_1ge6g_3",L6="_Hide_Signing_Out_Wrapper_1ge6g_3",V6="_Signing_Out_Box_1ge6g_24",U6="_Top_1ge6g_38",B6="_Options_1ge6g_83",xu={Signing_Out_Wrapper:P6,Hide_Signing_Out_Wrapper:L6,Signing_Out_Box:V6,Top:U6,Options:B6},z6=()=>{const{isSigningOut:n,setIsSigningOut:e,setLoading:t,user:s,setUser:a,userData:l}=K.useContext(Nc),c=async()=>{t(!0);try{await $2(OC),a(null),t(!1),e(!1)}catch(d){t(!1),e(!1),console.log(d)}};if(n)return re.jsx("div",{className:n?xu.Signing_Out_Wrapper:xu.Hide_Signing_Out_Wrapper,children:re.jsxs("div",{className:xu.Signing_Out_Box,children:[re.jsxs("div",{className:xu.Top,children:[l!=null&&l.profPic?re.jsx("div",{style:{backgroundImage:`url(${l.profPic})`}}):re.jsx("i",{className:"fa fa-user"}),re.jsx("h3",{children:"Would You Like To Sign Out?"})]}),re.jsxs("div",{className:xu.Options,children:[re.jsx(hg,{content:"No",func:()=>{e(!1)}}),re.jsx(hg,{content:"Yes",func:()=>{c()}})]})]})})},H6="_makeUserSignInWrapper_k8p8e_1",F6="_hideMakeUserSignInWrapper_k8p8e_2",j6="_makeUserSignInBox_k8p8e_23",q6="_Images_k8p8e_48",G6="_Buttons_k8p8e_82",K6="_hidePromptButton_k8p8e_105",or={makeUserSignInWrapper:H6,hideMakeUserSignInWrapper:F6,makeUserSignInBox:j6,Images:q6,Buttons:G6,hidePromptButton:K6},Y6=()=>{const{showMakeUserSignIn:n,setShowMakeUserSignIn:e,setPage:t,user:s}=K.useContext(Nc);function a(){e(!1),t(1);let l=window.location.href;l.toLowerCase();let c=l.search("/Acad/");l=l.slice(0,c+6).concat("#Home"),window.location.href=l}return re.jsx(re.Fragment,{children:re.jsx("div",{className:n&&!s?or.makeUserSignInWrapper:or.hideMakeUserSignInWrapper,children:re.jsxs("div",{className:or.makeUserSignInBox,children:[re.jsx(pr,{className:or.hidePromptButton,to:"/AcadComponent/",onClick:()=>{a()},children:re.jsx("i",{className:"fa fa-close"})}),re.jsxs("div",{className:or.Images,children:[re.jsx("img",{src:"./cat.png"}),re.jsx("img",{src:"./!.png"})]}),re.jsx("h1",{children:"You're not Signed In !"}),re.jsx("p",{children:"Create an account, log in and get free access to the advanced To-Do List Web Application"}),re.jsxs("div",{className:or.Buttons,children:[re.jsx(pr,{className:or.Links,to:"/AcadComponent/SignUp",onClick:()=>{e(!1)},children:"Sign Up"}),re.jsx(pr,{className:or.Links,to:"/AcadComponent/SignIn",onClick:()=>{e(!1)},children:"Sign In"})]})]})})})},DC=K.lazy(()=>Ma(()=>import("./Home-D8Gq82cf.js"),__vite__mapDeps([0,1]))),kC=K.lazy(()=>Ma(()=>import("./Tasks-CTck_cJO.js"),__vite__mapDeps([2,3]))),xC=K.lazy(()=>Ma(()=>import("./Folders-BExpUHz5.js"),__vite__mapDeps([4,5]))),MC=K.lazy(()=>Ma(()=>import("./Contacts-CNd5Hqy0.js"),[])),$6=K.lazy(()=>Ma(()=>import("./Dashboard-DE2jECF_.js"),__vite__mapDeps([6,7]))),Q6=K.lazy(()=>Ma(()=>import("./SignIn-DU8Lc8E9.js"),__vite__mapDeps([8,9]))),W6=K.lazy(()=>Ma(()=>import("./SignUp-CpJi64jA.js"),__vite__mapDeps([10,11]))),lg=[{path:"/AcadComponent/",element:re.jsx(DC,{})},{path:"/AcadComponent/Tasks",element:re.jsx(kC,{})},{path:"/AcadComponent/Folders",element:re.jsx(xC,{})},{path:"/AcadComponent/Contacts",element:re.jsx(MC,{})},{path:"/AcadComponent/Dashboard",element:re.jsx($6,{})},{path:"/AcadComponent/SignIn",element:re.jsx(Q6,{})},{path:"/AcadComponent/SignUp",element:re.jsx(W6,{})},{path:"*",element:re.jsx(lO,{})}],Nc=K.createContext();function X6(){const[n,e]=K.useState(!1),[t,s]=K.useState(!1),[a,l]=K.useState(!1),[c,d]=K.useState(!1),[p,g]=K.useState(!1),[y,T]=K.useState(!1),[S,N]=K.useState(!1),[I,F]=K.useState(!1),[U,Y]=K.useState(!1),[W,te]=K.useState(""),[oe,ce]=K.useState(),[Te,x]=K.useState({}),[R,b]=K.useState([]),[k,P]=K.useState(),[V,O]=K.useState([{name:"Home",ind:!1,icon:re.jsx("span",{className:"material-icons",children:"home"}),page:re.jsx(DC,{}),path:"/AcadComponent/"},{name:"Tasks",ind:!1,icon:re.jsx("span",{className:"fa fa-book"}),page:re.jsx(kC,{}),path:"/AcadComponent/Tasks"},{name:"Folders",ind:!1,icon:re.jsx("span",{className:"material-icons",children:"folder"}),page:re.jsx(xC,{}),path:"/AcadComponent/Folders"},{name:"Contacts",ind:!1,icon:re.jsx("span",{className:"material-icons",children:"phone"}),page:re.jsx(MC,{}),path:"/AcadComponent/Contacts"}]);oe!=null&&oe.uid||Y2(OC,ie=>{(ie==null?void 0:ie.uid)!=null&&(ce(ie),kt(ie.uid))});const kt=async ie=>{const de=$4(x6,"Users",ie);try{const D=(await cU(de)).data();x(D)}catch(Le){console.log(Le.code)}},ct={showSignUp:n,setShowSignUp:e,showLogin:t,setShowLogin:s,showMakeUserSignIn:a,setShowMakeUserSignIn:l,hideSideBar:c,setHideSideBar:d,hideSaveChanges:p,setHideSaveChanges:g,loading:y,setLoading:T,isSigningOut:S,setIsSigningOut:N,continueAs:I,setContinueAs:F,saveChanges:U,setSaveChanges:Y,prevPage:W,setPrevPage:te,user:oe,setUser:ce,userData:Te,setUserData:x,tasksCache:R,setTasksCache:b,pages:V,setPages:O,changes:k,setChanges:P,pagination:ie=>{$(ie)}};function $(ie){console.log(ie),O((de,Le)=>de.map((D,ee)=>ie==ee?{...D,ind:!0}:{...D,ind:!1}))}return K.useEffect(()=>{P(JSON.parse(localStorage.getItem("Changes")))},[]),re.jsx(re.Fragment,{children:re.jsx(Nc.Provider,{value:ct,children:re.jsxs($N,{children:[re.jsx(sO,{}),re.jsx(wN,{children:lg==null?void 0:lg.map(ie=>re.jsx(NA,{path:ie.path,element:ie.element},ie.path))}),re.jsx(z6,{}),re.jsx(Y6,{}),re.jsx(oO,{})]})})})}pI.createRoot(document.getElementById("root")).render(re.jsx(K.StrictMode,{children:re.jsx(X6,{})}));export{hg as B,ur as G,pr as L,x6 as a,s3 as b,Nc as c,$4 as d,r3 as e,hI as f,cU as g,c3 as h,h3 as i,re as j,OC as k,o3 as l,l3 as m,a3 as n,u3 as o,e3 as p,Z6 as q,K as r,J6 as s,i3 as t,bA as u};
