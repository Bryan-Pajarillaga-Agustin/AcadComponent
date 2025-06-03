const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-Md9ngyRk.js","assets/Home-BEYAwVZc.css","assets/Tasks-D60NyUag.js","assets/Tasks-CshlCajz.css","assets/Folders-BsxaAS-Q.js","assets/Folders-CYRofmE6.css","assets/SignIn-BoR45Arc.js","assets/SignIn-vviFU_5i.css","assets/SignUp-C24LRbzW.js","assets/SignUp-CrEc0M8t.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Rm={exports:{}},vu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ST;function I1(){if(ST)return vu;ST=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return vu.Fragment=e,vu.jsx=t,vu.jsxs=t,vu}var AT;function N1(){return AT||(AT=1,Rm.exports=I1()),Rm.exports}var se=N1(),bm={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wT;function O1(){if(wT)return Ce;wT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=T&&D[T]||D["@@iterator"],typeof D=="function"?D:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,H={};function B(D,ee,oe){this.props=D,this.context=ee,this.refs=H,this.updater=oe||O}B.prototype.isReactComponent={},B.prototype.setState=function(D,ee){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ee,"setState")},B.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Q(){}Q.prototype=B.prototype;function X(D,ee,oe){this.props=D,this.context=ee,this.refs=H,this.updater=oe||O}var te=X.prototype=new Q;te.constructor=X,I(te,B.prototype),te.isPureReactComponent=!0;var ue=Array.isArray,ce={H:null,A:null,T:null,S:null,V:null},Ee=Object.prototype.hasOwnProperty;function M(D,ee,oe,ie,me,Oe){return oe=Oe.ref,{$$typeof:n,type:D,key:ee,ref:oe!==void 0?oe:null,props:Oe}}function R(D,ee){return M(D.type,ee,void 0,void 0,void 0,D.props)}function b(D){return typeof D=="object"&&D!==null&&D.$$typeof===n}function k(D){var ee={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(oe){return ee[oe]})}var x=/\/+/g;function V(D,ee){return typeof D=="object"&&D!==null&&D.key!=null?k(""+D.key):ee.toString(36)}function N(){}function Nt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(N,N):(D.status="pending",D.then(function(ee){D.status==="pending"&&(D.status="fulfilled",D.value=ee)},function(ee){D.status==="pending"&&(D.status="rejected",D.reason=ee)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ct(D,ee,oe,ie,me){var Oe=typeof D;(Oe==="undefined"||Oe==="boolean")&&(D=null);var we=!1;if(D===null)we=!0;else switch(Oe){case"bigint":case"string":case"number":we=!0;break;case"object":switch(D.$$typeof){case n:case e:we=!0;break;case y:return we=D._init,ct(we(D._payload),ee,oe,ie,me)}}if(we)return me=me(D),we=ie===""?"."+V(D,0):ie,ue(me)?(oe="",we!=null&&(oe=we.replace(x,"$&/")+"/"),ct(me,ee,oe,"",function(fi){return fi})):me!=null&&(b(me)&&(me=R(me,oe+(me.key==null||D&&D.key===me.key?"":(""+me.key).replace(x,"$&/")+"/")+we)),ee.push(me)),1;we=0;var Ut=ie===""?".":ie+":";if(ue(D))for(var rt=0;rt<D.length;rt++)ie=D[rt],Oe=Ut+V(ie,rt),we+=ct(ie,ee,oe,Oe,me);else if(rt=S(D),typeof rt=="function")for(D=rt.call(D),rt=0;!(ie=D.next()).done;)ie=ie.value,Oe=Ut+V(ie,rt++),we+=ct(ie,ee,oe,Oe,me);else if(Oe==="object"){if(typeof D.then=="function")return ct(Nt(D),ee,oe,ie,me);throw ee=String(D),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return we}function G(D,ee,oe){if(D==null)return D;var ie=[],me=0;return ct(D,ie,"","",function(Oe){return ee.call(oe,Oe,me++)}),ie}function ae(D){if(D._status===-1){var ee=D._result;ee=ee(),ee.then(function(oe){(D._status===0||D._status===-1)&&(D._status=1,D._result=oe)},function(oe){(D._status===0||D._status===-1)&&(D._status=2,D._result=oe)}),D._status===-1&&(D._status=0,D._result=ee)}if(D._status===1)return D._result.default;throw D._result}var de=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function xe(){}return Ce.Children={map:G,forEach:function(D,ee,oe){G(D,function(){ee.apply(this,arguments)},oe)},count:function(D){var ee=0;return G(D,function(){ee++}),ee},toArray:function(D){return G(D,function(ee){return ee})||[]},only:function(D){if(!b(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ce.Component=B,Ce.Fragment=t,Ce.Profiler=a,Ce.PureComponent=X,Ce.StrictMode=s,Ce.Suspense=p,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ce,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(D){return ce.H.useMemoCache(D)}},Ce.cache=function(D){return function(){return D.apply(null,arguments)}},Ce.cloneElement=function(D,ee,oe){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ie=I({},D.props),me=D.key,Oe=void 0;if(ee!=null)for(we in ee.ref!==void 0&&(Oe=void 0),ee.key!==void 0&&(me=""+ee.key),ee)!Ee.call(ee,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&ee.ref===void 0||(ie[we]=ee[we]);var we=arguments.length-2;if(we===1)ie.children=oe;else if(1<we){for(var Ut=Array(we),rt=0;rt<we;rt++)Ut[rt]=arguments[rt+2];ie.children=Ut}return M(D.type,me,void 0,void 0,Oe,ie)},Ce.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},Ce.createElement=function(D,ee,oe){var ie,me={},Oe=null;if(ee!=null)for(ie in ee.key!==void 0&&(Oe=""+ee.key),ee)Ee.call(ee,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(me[ie]=ee[ie]);var we=arguments.length-2;if(we===1)me.children=oe;else if(1<we){for(var Ut=Array(we),rt=0;rt<we;rt++)Ut[rt]=arguments[rt+2];me.children=Ut}if(D&&D.defaultProps)for(ie in we=D.defaultProps,we)me[ie]===void 0&&(me[ie]=we[ie]);return M(D,Oe,void 0,void 0,null,me)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(D){return{$$typeof:d,render:D}},Ce.isValidElement=b,Ce.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:ae}},Ce.memo=function(D,ee){return{$$typeof:g,type:D,compare:ee===void 0?null:ee}},Ce.startTransition=function(D){var ee=ce.T,oe={};ce.T=oe;try{var ie=D(),me=ce.S;me!==null&&me(oe,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(xe,de)}catch(Oe){de(Oe)}finally{ce.T=ee}},Ce.unstable_useCacheRefresh=function(){return ce.H.useCacheRefresh()},Ce.use=function(D){return ce.H.use(D)},Ce.useActionState=function(D,ee,oe){return ce.H.useActionState(D,ee,oe)},Ce.useCallback=function(D,ee){return ce.H.useCallback(D,ee)},Ce.useContext=function(D){return ce.H.useContext(D)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(D,ee){return ce.H.useDeferredValue(D,ee)},Ce.useEffect=function(D,ee,oe){var ie=ce.H;if(typeof oe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(D,ee)},Ce.useId=function(){return ce.H.useId()},Ce.useImperativeHandle=function(D,ee,oe){return ce.H.useImperativeHandle(D,ee,oe)},Ce.useInsertionEffect=function(D,ee){return ce.H.useInsertionEffect(D,ee)},Ce.useLayoutEffect=function(D,ee){return ce.H.useLayoutEffect(D,ee)},Ce.useMemo=function(D,ee){return ce.H.useMemo(D,ee)},Ce.useOptimistic=function(D,ee){return ce.H.useOptimistic(D,ee)},Ce.useReducer=function(D,ee,oe){return ce.H.useReducer(D,ee,oe)},Ce.useRef=function(D){return ce.H.useRef(D)},Ce.useState=function(D){return ce.H.useState(D)},Ce.useSyncExternalStore=function(D,ee,oe){return ce.H.useSyncExternalStore(D,ee,oe)},Ce.useTransition=function(){return ce.H.useTransition()},Ce.version="19.1.0",Ce}var RT;function Fg(){return RT||(RT=1,bm.exports=O1()),bm.exports}var Y=Fg(),Cm={exports:{}},Eu={},Im={exports:{}},Nm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bT;function D1(){return bT||(bT=1,function(n){function e(G,ae){var de=G.length;G.push(ae);e:for(;0<de;){var xe=de-1>>>1,D=G[xe];if(0<a(D,ae))G[xe]=ae,G[de]=D,de=xe;else break e}}function t(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var ae=G[0],de=G.pop();if(de!==ae){G[0]=de;e:for(var xe=0,D=G.length,ee=D>>>1;xe<ee;){var oe=2*(xe+1)-1,ie=G[oe],me=oe+1,Oe=G[me];if(0>a(ie,de))me<D&&0>a(Oe,ie)?(G[xe]=Oe,G[me]=de,xe=me):(G[xe]=ie,G[oe]=de,xe=oe);else if(me<D&&0>a(Oe,de))G[xe]=Oe,G[me]=de,xe=me;else break e}}return ae}function a(G,ae){var de=G.sortIndex-ae.sortIndex;return de!==0?de:G.id-ae.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],y=1,T=null,S=3,O=!1,I=!1,H=!1,B=!1,Q=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function ue(G){for(var ae=t(g);ae!==null;){if(ae.callback===null)s(g);else if(ae.startTime<=G)s(g),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=t(g)}}function ce(G){if(H=!1,ue(G),!I)if(t(p)!==null)I=!0,Ee||(Ee=!0,V());else{var ae=t(g);ae!==null&&ct(ce,ae.startTime-G)}}var Ee=!1,M=-1,R=5,b=-1;function k(){return B?!0:!(n.unstable_now()-b<R)}function x(){if(B=!1,Ee){var G=n.unstable_now();b=G;var ae=!0;try{e:{I=!1,H&&(H=!1,X(M),M=-1),O=!0;var de=S;try{t:{for(ue(G),T=t(p);T!==null&&!(T.expirationTime>G&&k());){var xe=T.callback;if(typeof xe=="function"){T.callback=null,S=T.priorityLevel;var D=xe(T.expirationTime<=G);if(G=n.unstable_now(),typeof D=="function"){T.callback=D,ue(G),ae=!0;break t}T===t(p)&&s(p),ue(G)}else s(p);T=t(p)}if(T!==null)ae=!0;else{var ee=t(g);ee!==null&&ct(ce,ee.startTime-G),ae=!1}}break e}finally{T=null,S=de,O=!1}ae=void 0}}finally{ae?V():Ee=!1}}}var V;if(typeof te=="function")V=function(){te(x)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,Nt=N.port2;N.port1.onmessage=x,V=function(){Nt.postMessage(null)}}else V=function(){Q(x,0)};function ct(G,ae){M=Q(function(){G(n.unstable_now())},ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(G){switch(S){case 1:case 2:case 3:var ae=3;break;default:ae=S}var de=S;S=ae;try{return G()}finally{S=de}},n.unstable_requestPaint=function(){B=!0},n.unstable_runWithPriority=function(G,ae){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var de=S;S=G;try{return ae()}finally{S=de}},n.unstable_scheduleCallback=function(G,ae,de){var xe=n.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?xe+de:xe):de=xe,G){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=de+D,G={id:y++,callback:ae,priorityLevel:G,startTime:de,expirationTime:D,sortIndex:-1},de>xe?(G.sortIndex=de,e(g,G),t(p)===null&&G===t(g)&&(H?(X(M),M=-1):H=!0,ct(ce,de-xe))):(G.sortIndex=D,e(p,G),I||O||(I=!0,Ee||(Ee=!0,V()))),G},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(G){var ae=S;return function(){var de=S;S=ae;try{return G.apply(this,arguments)}finally{S=de}}}}(Nm)),Nm}var CT;function k1(){return CT||(CT=1,Im.exports=D1()),Im.exports}var Om={exports:{}},an={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IT;function M1(){if(IT)return an;IT=1;var n=Fg();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return an.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,an.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},an.flushSync=function(p){var g=c.T,y=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=y,s.d.f()}},an.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},an.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},an.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,O=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:S,fetchPriority:O}):y==="script"&&s.d.X(p,{crossOrigin:T,integrity:S,fetchPriority:O,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},an.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},an.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},an.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},an.requestFormReset=function(p){s.d.r(p)},an.unstable_batchedUpdates=function(p,g){return p(g)},an.useFormState=function(p,g,y){return c.H.useFormState(p,g,y)},an.useFormStatus=function(){return c.H.useHostTransitionStatus()},an.version="19.1.0",an}var NT;function P1(){if(NT)return Om.exports;NT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Om.exports=M1(),Om.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OT;function x1(){if(OT)return Eu;OT=1;var n=k1(),e=Fg(),t=P1();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,A=f.child;A;){if(A===o){E=!0,o=f,u=m;break}if(A===u){E=!0,u=f,o=m;break}A=A.sibling}if(!E){for(A=m.child;A;){if(A===o){E=!0,o=m,u=f;break}if(A===u){E=!0,u=m,o=f;break}A=A.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),te=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),x=Symbol.iterator;function V(i){return i===null||typeof i!="object"?null:(i=x&&i[x]||i["@@iterator"],typeof i=="function"?i:null)}var N=Symbol.for("react.client.reference");function Nt(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===N?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case I:return"Fragment";case B:return"Profiler";case H:return"StrictMode";case ce:return"Suspense";case Ee:return"SuspenseList";case b:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case O:return"Portal";case te:return(i.displayName||"Context")+".Provider";case X:return(i._context.displayName||"Context")+".Consumer";case ue:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case M:return r=i.displayName||null,r!==null?r:Nt(i.type)||"Memo";case R:r=i._payload,i=i._init;try{return Nt(i(r))}catch{}}return null}var ct=Array.isArray,G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},xe=[],D=-1;function ee(i){return{current:i}}function oe(i){0>D||(i.current=xe[D],xe[D]=null,D--)}function ie(i,r){D++,xe[D]=i.current,i.current=r}var me=ee(null),Oe=ee(null),we=ee(null),Ut=ee(null);function rt(i,r){switch(ie(we,r),ie(Oe,i),ie(me,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?WE(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=WE(r),i=XE(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}oe(me),ie(me,i)}function fi(){oe(me),oe(Oe),oe(we)}function Os(i){i.memoizedState!==null&&ie(Ut,i);var r=me.current,o=XE(r,i.type);r!==o&&(ie(Oe,i),ie(me,o))}function ji(i){Oe.current===i&&(oe(me),oe(Oe)),Ut.current===i&&(oe(Ut),pu._currentValue=de)}var kr=Object.prototype.hasOwnProperty,Mr=n.unstable_scheduleCallback,Pr=n.unstable_cancelCallback,hl=n.unstable_shouldYield,Sc=n.unstable_requestPaint,Vn=n.unstable_now,Rd=n.unstable_getCurrentPriorityLevel,fl=n.unstable_ImmediatePriority,xa=n.unstable_UserBlockingPriority,xr=n.unstable_NormalPriority,bd=n.unstable_LowPriority,La=n.unstable_IdlePriority,dl=n.log,Ac=n.unstable_setDisableYieldValue,gt=null,We=null;function wn(i){if(typeof dl=="function"&&Ac(i),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(gt,i)}catch{}}var sn=Math.clz32?Math.clz32:Lr,wc=Math.log,Cd=Math.LN2;function Lr(i){return i>>>=0,i===0?32:31-(wc(i)/Cd|0)|0}var Vr=256,Ur=4194304;function ei(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Va(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var A=u&134217727;return A!==0?(u=A&~m,u!==0?f=ei(u):(E&=A,E!==0?f=ei(E):o||(o=A&~i,o!==0&&(f=ei(o))))):(A=u&~m,A!==0?f=ei(A):E!==0?f=ei(E):o||(o=u&~i,o!==0&&(f=ei(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Br(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function pl(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ml(){var i=Vr;return Vr<<=1,(Vr&4194048)===0&&(Vr=256),i}function gl(){var i=Ur;return Ur<<=1,(Ur&62914560)===0&&(Ur=4194304),i}function qi(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function Gi(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function _l(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var A=i.entanglements,C=i.expirationTimes,F=i.hiddenUpdates;for(o=E&~o;0<o;){var $=31-sn(o),Z=1<<$;A[$]=0,C[$]=-1;var j=F[$];if(j!==null)for(F[$]=null,$=0;$<j.length;$++){var q=j[$];q!==null&&(q.lane&=-536870913)}o&=~Z}u!==0&&di(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function di(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-sn(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function yl(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-sn(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function Ds(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Ua(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function ks(){var i=ae.p;return i!==0?i:(i=window.event,i===void 0?32:gT(i.type))}function Rc(i,r){var o=ae.p;try{return ae.p=i,r()}finally{ae.p=o}}var ht=Math.random().toString(36).slice(2),Ot="__reactFiber$"+ht,wt="__reactProps$"+ht,Un="__reactContainer$"+ht,vl="__reactEvents$"+ht,Id="__reactListeners$"+ht,Ms="__reactHandles$"+ht,bc="__reactResources$"+ht,zr="__reactMarker$"+ht;function Ps(i){delete i[Ot],delete i[wt],delete i[vl],delete i[Id],delete i[Ms]}function Ki(i){var r=i[Ot];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Un]||o[Ot]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=tT(i);i!==null;){if(o=i[Ot])return o;i=tT(i)}return r}i=o,o=i.parentNode}return null}function pi(i){if(i=i[Ot]||i[Un]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function mi(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function pn(i){var r=i[bc];return r||(r=i[bc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Et(i){i[zr]=!0}var El=new Set,Ba={};function ti(i,r){Yi(i,r),Yi(i+"Capture",r)}function Yi(i,r){for(Ba[i]=r,i=0;i<r.length;i++)El.add(r[i])}var Cc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ic={},Fr={};function Nc(i){return kr.call(Fr,i)?!0:kr.call(Ic,i)?!1:Cc.test(i)?Fr[i]=!0:(Ic[i]=!0,!1)}function xs(i,r,o){if(Nc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function gi(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function Qt(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var Hr,Oc;function Qi(i){if(Hr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Hr=r&&r[1]||"",Oc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hr+i+Oc}var za=!1;function Fa(i,r){if(!i||za)return"";za=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(q){var j=q}Reflect.construct(i,[],Z)}else{try{Z.call()}catch(q){j=q}i.call(Z.prototype)}}else{try{throw Error()}catch(q){j=q}(Z=i())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(q){if(q&&j&&typeof q.stack=="string")return[q.stack,j.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],A=m[1];if(E&&A){var C=E.split(`
`),F=A.split(`
`);for(f=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;f<F.length&&!F[f].includes("DetermineComponentFrameRoot");)f++;if(u===C.length||f===F.length)for(u=C.length-1,f=F.length-1;1<=u&&0<=f&&C[u]!==F[f];)f--;for(;1<=u&&0<=f;u--,f--)if(C[u]!==F[f]){if(u!==1||f!==1)do if(u--,f--,0>f||C[u]!==F[f]){var $=`
`+C[u].replace(" at new "," at ");return i.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",i.displayName)),$}while(1<=u&&0<=f);break}}}finally{za=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?Qi(o):""}function Tl(i){switch(i.tag){case 26:case 27:case 5:return Qi(i.type);case 16:return Qi("Lazy");case 13:return Qi("Suspense");case 19:return Qi("SuspenseList");case 0:case 15:return Fa(i.type,!1);case 11:return Fa(i.type.render,!1);case 1:return Fa(i.type,!0);case 31:return Qi("Activity");default:return""}}function Ha(i){try{var r="";do r+=Tl(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function mn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Sl(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Nd(i){var r=Sl(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function ja(i){i._valueTracker||(i._valueTracker=Nd(i))}function Al(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=Sl(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function jr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Od=/[\n"\\]/g;function Rt(i){return i.replace(Od,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Rn(i,r,o,u,f,m,E,A){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+mn(r)):i.value!==""+mn(r)&&(i.value=""+mn(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?Ls(i,E,mn(r)):o!=null?Ls(i,E,mn(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?i.name=""+mn(A):i.removeAttribute("name")}function qr(i,r,o,u,f,m,E,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+mn(o):"",r=r!=null?""+mn(r):o,A||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=A?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function Ls(i,r,o){r==="number"&&jr(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function $i(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+mn(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function Je(i,r,o){if(r!=null&&(r=""+mn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+mn(o):""}function Gr(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(ct(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=mn(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function Bn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var Kr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||Kr.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function wl(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Dc(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Dc(i,m,r[m])}function Rl(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qa(i){return kd.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var Wi=null;function zn(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Xi=null,Zi=null;function bl(i){var r=pi(i);if(r&&(i=r.stateNode)){var o=i[wt]||null;e:switch(i=r.stateNode,r.type){case"input":if(Rn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Rt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[wt]||null;if(!f)throw Error(s(90));Rn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Al(u)}break e;case"textarea":Je(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&$i(i,!!o.multiple,r,!1)}}}var _i=!1;function kc(i,r,o){if(_i)return i(r,o);_i=!0;try{var u=i(r);return u}finally{if(_i=!1,(Xi!==null||Zi!==null)&&(Rh(),Xi&&(r=Xi,i=Zi,Zi=Xi=null,bl(r),i)))for(r=0;r<i.length;r++)bl(i[r])}}function Yr(i,r){var o=i.stateNode;if(o===null)return null;var u=o[wt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fn=!1;if(ni)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Fn=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Fn=!1}var yi=null,Vs=null,Ji=null;function Cl(){if(Ji)return Ji;var i,r=Vs,o=r.length,u,f="value"in yi?yi.value:yi.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return Ji=f.slice(i,1<u?1-u:void 0)}function vi(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Ei(){return!0}function Il(){return!1}function Bt(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(o=i[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ei:Il,this.isPropagationStopped=Il,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ei)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ei)},persist:function(){},isPersistent:Ei}),r}var Ye={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ga=Bt(Ye),$r=y({},Ye,{view:0,detail:0}),Mc=Bt($r),Ka,Ya,Ti,Wr=y({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ti&&(Ti&&i.type==="mousemove"?(Ka=i.screenX-Ti.screenX,Ya=i.screenY-Ti.screenY):Ya=Ka=0,Ti=i),Ka)},movementY:function(i){return"movementY"in i?i.movementY:Ya}}),Hn=Bt(Wr),Pc=y({},Wr,{dataTransfer:0}),Md=Bt(Pc),Xr=y({},$r,{relatedTarget:0}),Qa=Bt(Xr),Nl=y({},Ye,{animationName:0,elapsedTime:0,pseudoElement:0}),$a=Bt(Nl),xc=y({},Ye,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Wa=Bt(xc),Pd=y({},Ye,{data:0}),Ol=Bt(Pd),Zr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dl(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=Vc[i])?!!r[i]:!1}function Jr(){return Dl}var Uc=y({},$r,{key:function(i){if(i.key){var r=Zr[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=vi(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Lc[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jr,charCode:function(i){return i.type==="keypress"?vi(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?vi(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Xa=Bt(Uc),Bc=y({},Wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kl=Bt(Bc),es=y({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jr}),zc=Bt(es),Fc=y({},Ye,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hc=Bt(Fc),jc=y({},Wr,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Za=Bt(jc),gn=y({},Ye,{newState:0,oldState:0}),qc=Bt(gn),Gc=[9,13,27,32],Si=ni&&"CompositionEvent"in window,h=null;ni&&"documentMode"in document&&(h=document.documentMode);var _=ni&&"TextEvent"in window&&!h,v=ni&&(!Si||h&&8<h&&11>=h),w=" ",U=!1;function K(i,r){switch(i){case"keyup":return Gc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function re(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ue=!1;function Dt(i,r){switch(i){case"compositionend":return re(r);case"keypress":return r.which!==32?null:(U=!0,w);case"textInput":return i=r.data,i===w&&U?null:i;default:return null}}function Be(i,r){if(Ue)return i==="compositionend"||!Si&&K(i,r)?(i=Cl(),Ji=Vs=yi=null,Ue=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var zt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!zt[i.type]:r==="textarea"}function ts(i,r,o,u){Xi?Zi?Zi.push(u):Zi=[u]:Xi=u,r=Dh(r,"onChange"),0<r.length&&(o=new Ga("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var $t=null,Ai=null;function Ml(i){GE(i,0)}function Kc(i){var r=mi(i);if(Al(r))return i}function fy(i,r){if(i==="change")return r}var dy=!1;if(ni){var xd;if(ni){var Ld="oninput"in document;if(!Ld){var py=document.createElement("div");py.setAttribute("oninput","return;"),Ld=typeof py.oninput=="function"}xd=Ld}else xd=!1;dy=xd&&(!document.documentMode||9<document.documentMode)}function my(){$t&&($t.detachEvent("onpropertychange",gy),Ai=$t=null)}function gy(i){if(i.propertyName==="value"&&Kc(Ai)){var r=[];ts(r,Ai,i,zn(i)),kc(Ml,r)}}function sC(i,r,o){i==="focusin"?(my(),$t=r,Ai=o,$t.attachEvent("onpropertychange",gy)):i==="focusout"&&my()}function rC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Kc(Ai)}function aC(i,r){if(i==="click")return Kc(r)}function oC(i,r){if(i==="input"||i==="change")return Kc(r)}function lC(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var bn=typeof Object.is=="function"?Object.is:lC;function Pl(i,r){if(bn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!kr.call(r,f)||!bn(i[f],r[f]))return!1}return!0}function _y(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function yy(i,r){var o=_y(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=_y(o)}}function vy(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?vy(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function Ey(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=jr(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=jr(i.document)}return r}function Vd(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var uC=ni&&"documentMode"in document&&11>=document.documentMode,Ja=null,Ud=null,xl=null,Bd=!1;function Ty(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Bd||Ja==null||Ja!==jr(u)||(u=Ja,"selectionStart"in u&&Vd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),xl&&Pl(xl,u)||(xl=u,u=Dh(Ud,"onSelect"),0<u.length&&(r=new Ga("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=Ja)))}function ea(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var eo={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionrun:ea("Transition","TransitionRun"),transitionstart:ea("Transition","TransitionStart"),transitioncancel:ea("Transition","TransitionCancel"),transitionend:ea("Transition","TransitionEnd")},zd={},Sy={};ni&&(Sy=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function ta(i){if(zd[i])return zd[i];if(!eo[i])return i;var r=eo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in Sy)return zd[i]=r[o];return i}var Ay=ta("animationend"),wy=ta("animationiteration"),Ry=ta("animationstart"),cC=ta("transitionrun"),hC=ta("transitionstart"),fC=ta("transitioncancel"),by=ta("transitionend"),Cy=new Map,Fd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fd.push("scrollEnd");function ii(i,r){Cy.set(i,r),ti(r,[i])}var Iy=new WeakMap;function jn(i,r){if(typeof i=="object"&&i!==null){var o=Iy.get(i);return o!==void 0?o:(r={value:i,source:r,stack:Ha(r)},Iy.set(i,r),r)}return{value:i,source:r,stack:Ha(r)}}var qn=[],to=0,Hd=0;function Yc(){for(var i=to,r=Hd=to=0;r<i;){var o=qn[r];qn[r++]=null;var u=qn[r];qn[r++]=null;var f=qn[r];qn[r++]=null;var m=qn[r];if(qn[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&Ny(o,f,m)}}function Qc(i,r,o,u){qn[to++]=i,qn[to++]=r,qn[to++]=o,qn[to++]=u,Hd|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function jd(i,r,o,u){return Qc(i,r,o,u),$c(i)}function no(i,r){return Qc(i,null,null,r),$c(i)}function Ny(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-sn(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function $c(i){if(50<au)throw au=0,$p=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var io={};function dC(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(i,r,o,u){return new dC(i,r,o,u)}function qd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function ns(i,r){var o=i.alternate;return o===null?(o=Cn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Oy(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function Wc(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")qd(i)&&(E=1);else if(typeof i=="string")E=m1(i,o,me.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case b:return i=Cn(31,o,r,f),i.elementType=b,i.lanes=m,i;case I:return na(o.children,f,m,r);case H:E=8,f|=24;break;case B:return i=Cn(12,o,r,f|2),i.elementType=B,i.lanes=m,i;case ce:return i=Cn(13,o,r,f),i.elementType=ce,i.lanes=m,i;case Ee:return i=Cn(19,o,r,f),i.elementType=Ee,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Q:case te:E=10;break e;case X:E=9;break e;case ue:E=11;break e;case M:E=14;break e;case R:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=Cn(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function na(i,r,o,u){return i=Cn(7,i,u,r),i.lanes=o,i}function Gd(i,r,o){return i=Cn(6,i,null,r),i.lanes=o,i}function Kd(i,r,o){return r=Cn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var so=[],ro=0,Xc=null,Zc=0,Gn=[],Kn=0,ia=null,is=1,ss="";function sa(i,r){so[ro++]=Zc,so[ro++]=Xc,Xc=i,Zc=r}function Dy(i,r,o){Gn[Kn++]=is,Gn[Kn++]=ss,Gn[Kn++]=ia,ia=i;var u=is;i=ss;var f=32-sn(u)-1;u&=~(1<<f),o+=1;var m=32-sn(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,is=1<<32-sn(r)+f|o<<f|u,ss=m+i}else is=1<<m|o<<f|u,ss=i}function Yd(i){i.return!==null&&(sa(i,1),Dy(i,1,0))}function Qd(i){for(;i===Xc;)Xc=so[--ro],so[ro]=null,Zc=so[--ro],so[ro]=null;for(;i===ia;)ia=Gn[--Kn],Gn[Kn]=null,ss=Gn[--Kn],Gn[Kn]=null,is=Gn[--Kn],Gn[Kn]=null}var _n=null,_t=null,Ke=!1,ra=null,wi=!1,$d=Error(s(519));function aa(i){var r=Error(s(418,""));throw Ul(jn(r,i)),$d}function ky(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[Ot]=i,r[wt]=u,o){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(o=0;o<lu.length;o++)Me(lu[o],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":Me("invalid",r),qr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),ja(r);break;case"select":Me("invalid",r);break;case"textarea":Me("invalid",r),Gr(r,u.value,u.defaultValue,u.children),ja(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||$E(r.textContent,o)?(u.popover!=null&&(Me("beforetoggle",r),Me("toggle",r)),u.onScroll!=null&&Me("scroll",r),u.onScrollEnd!=null&&Me("scrollend",r),u.onClick!=null&&(r.onclick=kh),r=!0):r=!1,r||aa(i)}function My(i){for(_n=i.return;_n;)switch(_n.tag){case 5:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:_n=_n.return}}function Ll(i){if(i!==_n)return!1;if(!Ke)return My(i),Ke=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||hm(i.type,i.memoizedProps)),o=!o),o&&_t&&aa(i),My(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){_t=ri(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}_t=null}}else r===27?(r=_t,Js(i.type)?(i=mm,mm=null,_t=i):_t=r):_t=_n?ri(i.stateNode.nextSibling):null;return!0}function Vl(){_t=_n=null,Ke=!1}function Py(){var i=ra;return i!==null&&(Tn===null?Tn=i:Tn.push.apply(Tn,i),ra=null),i}function Ul(i){ra===null?ra=[i]:ra.push(i)}var Wd=ee(null),oa=null,rs=null;function Us(i,r,o){ie(Wd,r._currentValue),r._currentValue=o}function as(i){i._currentValue=Wd.current,oe(Wd)}function Xd(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function Zd(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var C=0;C<r.length;C++)if(A.context===r[C]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),Xd(m.return,o,i),u||(E=null);break e}m=A.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),Xd(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Bl(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var A=f.type;bn(f.pendingProps.value,E.value)||(i!==null?i.push(A):i=[A])}}else if(f===Ut.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(pu):i=[pu])}f=f.return}i!==null&&Zd(r,i,o,u),r.flags|=262144}function Jc(i){for(i=i.firstContext;i!==null;){if(!bn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function la(i){oa=i,rs=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function rn(i){return xy(oa,i)}function eh(i,r){return oa===null&&la(i),xy(i,r)}function xy(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},rs===null){if(i===null)throw Error(s(308));rs=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else rs=rs.next=r;return o}var pC=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},mC=n.unstable_scheduleCallback,gC=n.unstable_NormalPriority,Mt={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jd(){return{controller:new pC,data:new Map,refCount:0}}function zl(i){i.refCount--,i.refCount===0&&mC(gC,function(){i.controller.abort()})}var Fl=null,ep=0,ao=0,oo=null;function _C(i,r){if(Fl===null){var o=Fl=[];ep=0,ao=nm(),oo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return ep++,r.then(Ly,Ly),r}function Ly(){if(--ep===0&&Fl!==null){oo!==null&&(oo.status="fulfilled");var i=Fl;Fl=null,ao=0,oo=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function yC(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Vy=G.S;G.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&_C(i,r),Vy!==null&&Vy(i,r)};var ua=ee(null);function tp(){var i=ua.current;return i!==null?i:at.pooledCache}function th(i,r){r===null?ie(ua,ua.current):ie(ua,r.pool)}function Uy(){var i=tp();return i===null?null:{parent:Mt._currentValue,pool:i}}var Hl=Error(s(460)),By=Error(s(474)),nh=Error(s(542)),np={then:function(){}};function zy(i){return i=i.status,i==="fulfilled"||i==="rejected"}function ih(){}function Fy(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(ih,ih),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,jy(i),i;default:if(typeof r.status=="string")r.then(ih,ih);else{if(i=at,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,jy(i),i}throw jl=r,Hl}}var jl=null;function Hy(){if(jl===null)throw Error(s(459));var i=jl;return jl=null,i}function jy(i){if(i===Hl||i===nh)throw Error(s(483))}var Bs=!1;function ip(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sp(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function zs(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Fs(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(Xe&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=$c(i),Ny(i,null,o),r}return Qc(i,u,r,o),$c(i)}function ql(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,yl(i,o)}}function rp(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var ap=!1;function Gl(){if(ap){var i=oo;if(i!==null)throw i}}function Kl(i,r,o,u){ap=!1;var f=i.updateQueue;Bs=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var C=A,F=C.next;C.next=null,E===null?m=F:E.next=F,E=C;var $=i.alternate;$!==null&&($=$.updateQueue,A=$.lastBaseUpdate,A!==E&&(A===null?$.firstBaseUpdate=F:A.next=F,$.lastBaseUpdate=C))}if(m!==null){var Z=f.baseState;E=0,$=F=C=null,A=m;do{var j=A.lane&-536870913,q=j!==A.lane;if(q?(ze&j)===j:(u&j)===j){j!==0&&j===ao&&(ap=!0),$!==null&&($=$.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Se=i,_e=A;j=r;var nt=o;switch(_e.tag){case 1:if(Se=_e.payload,typeof Se=="function"){Z=Se.call(nt,Z,j);break e}Z=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=_e.payload,j=typeof Se=="function"?Se.call(nt,Z,j):Se,j==null)break e;Z=y({},Z,j);break e;case 2:Bs=!0}}j=A.callback,j!==null&&(i.flags|=64,q&&(i.flags|=8192),q=f.callbacks,q===null?f.callbacks=[j]:q.push(j))}else q={lane:j,tag:A.tag,payload:A.payload,callback:A.callback,next:null},$===null?(F=$=q,C=Z):$=$.next=q,E|=j;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;q=A,A=q.next,q.next=null,f.lastBaseUpdate=q,f.shared.pending=null}}while(!0);$===null&&(C=Z),f.baseState=C,f.firstBaseUpdate=F,f.lastBaseUpdate=$,m===null&&(f.shared.lanes=0),$s|=E,i.lanes=E,i.memoizedState=Z}}function qy(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Gy(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)qy(o[i],r)}var lo=ee(null),sh=ee(0);function Ky(i,r){i=ds,ie(sh,i),ie(lo,r),ds=i|r.baseLanes}function op(){ie(sh,ds),ie(lo,lo.current)}function lp(){ds=sh.current,oe(lo),oe(sh)}var Hs=0,Ie=null,et=null,bt=null,rh=!1,uo=!1,ca=!1,ah=0,Yl=0,co=null,vC=0;function Tt(){throw Error(s(321))}function up(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!bn(i[o],r[o]))return!1;return!0}function cp(i,r,o,u,f,m){return Hs=m,Ie=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,G.H=i===null||i.memoizedState===null?Nv:Ov,ca=!1,m=o(u,f),ca=!1,uo&&(m=Qy(r,o,u,f)),Yy(i),m}function Yy(i){G.H=fh;var r=et!==null&&et.next!==null;if(Hs=0,bt=et=Ie=null,rh=!1,Yl=0,co=null,r)throw Error(s(300));i===null||Ft||(i=i.dependencies,i!==null&&Jc(i)&&(Ft=!0))}function Qy(i,r,o,u){Ie=i;var f=0;do{if(uo&&(co=null),Yl=0,uo=!1,25<=f)throw Error(s(301));if(f+=1,bt=et=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}G.H=bC,m=r(o,u)}while(uo);return m}function EC(){var i=G.H,r=i.useState()[0];return r=typeof r.then=="function"?Ql(r):r,i=i.useState()[0],(et!==null?et.memoizedState:null)!==i&&(Ie.flags|=1024),r}function hp(){var i=ah!==0;return ah=0,i}function fp(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function dp(i){if(rh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}rh=!1}Hs=0,bt=et=Ie=null,uo=!1,Yl=ah=0,co=null}function vn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?Ie.memoizedState=bt=i:bt=bt.next=i,bt}function Ct(){if(et===null){var i=Ie.alternate;i=i!==null?i.memoizedState:null}else i=et.next;var r=bt===null?Ie.memoizedState:bt.next;if(r!==null)bt=r,et=i;else{if(i===null)throw Ie.alternate===null?Error(s(467)):Error(s(310));et=i,i={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},bt===null?Ie.memoizedState=bt=i:bt=bt.next=i}return bt}function pp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ql(i){var r=Yl;return Yl+=1,co===null&&(co=[]),i=Fy(co,i,r),r=Ie,(bt===null?r.memoizedState:bt.next)===null&&(r=r.alternate,G.H=r===null||r.memoizedState===null?Nv:Ov),i}function oh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Ql(i);if(i.$$typeof===te)return rn(i)}throw Error(s(438,String(i)))}function mp(i){var r=null,o=Ie.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ie.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=pp(),Ie.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=k;return r.index++,o}function os(i,r){return typeof r=="function"?r(i):r}function lh(i){var r=Ct();return gp(r,et,i)}function gp(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var A=E=null,C=null,F=r,$=!1;do{var Z=F.lane&-536870913;if(Z!==F.lane?(ze&Z)===Z:(Hs&Z)===Z){var j=F.revertLane;if(j===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),Z===ao&&($=!0);else if((Hs&j)===j){F=F.next,j===ao&&($=!0);continue}else Z={lane:0,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},C===null?(A=C=Z,E=m):C=C.next=Z,Ie.lanes|=j,$s|=j;Z=F.action,ca&&o(m,Z),m=F.hasEagerState?F.eagerState:o(m,Z)}else j={lane:Z,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},C===null?(A=C=j,E=m):C=C.next=j,Ie.lanes|=Z,$s|=Z;F=F.next}while(F!==null&&F!==r);if(C===null?E=m:C.next=A,!bn(m,i.memoizedState)&&(Ft=!0,$&&(o=oo,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=C,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function _p(i){var r=Ct(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);bn(m,r.memoizedState)||(Ft=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function $y(i,r,o){var u=Ie,f=Ct(),m=Ke;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!bn((et||f).memoizedState,o);E&&(f.memoizedState=o,Ft=!0),f=f.queue;var A=Zy.bind(null,u,f,i);if($l(2048,8,A,[i]),f.getSnapshot!==r||E||bt!==null&&bt.memoizedState.tag&1){if(u.flags|=2048,ho(9,uh(),Xy.bind(null,u,f,o,r),null),at===null)throw Error(s(349));m||(Hs&124)!==0||Wy(u,r,o)}return o}function Wy(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Ie.updateQueue,r===null?(r=pp(),Ie.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Xy(i,r,o,u){r.value=o,r.getSnapshot=u,Jy(r)&&ev(i)}function Zy(i,r,o){return o(function(){Jy(r)&&ev(i)})}function Jy(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!bn(i,o)}catch{return!0}}function ev(i){var r=no(i,2);r!==null&&kn(r,i,2)}function yp(i){var r=vn();if(typeof i=="function"){var o=i;if(i=o(),ca){wn(!0);try{o()}finally{wn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:i},r}function tv(i,r,o,u){return i.baseState=o,gp(i,et,typeof u=="function"?u:os)}function TC(i,r,o,u,f){if(hh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};G.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,nv(r,m)):(m.next=o.next,r.pending=o.next=m)}}function nv(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=G.T,E={};G.T=E;try{var A=o(f,u),C=G.S;C!==null&&C(E,A),iv(i,r,A)}catch(F){vp(i,r,F)}finally{G.T=m}}else try{m=o(f,u),iv(i,r,m)}catch(F){vp(i,r,F)}}function iv(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){sv(i,r,u)},function(u){return vp(i,r,u)}):sv(i,r,o)}function sv(i,r,o){r.status="fulfilled",r.value=o,rv(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,nv(i,o)))}function vp(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,rv(r),r=r.next;while(r!==u)}i.action=null}function rv(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function av(i,r){return r}function ov(i,r){if(Ke){var o=at.formState;if(o!==null){e:{var u=Ie;if(Ke){if(_t){t:{for(var f=_t,m=wi;f.nodeType!==8;){if(!m){f=null;break t}if(f=ri(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){_t=ri(f.nextSibling),u=f.data==="F!";break e}}aa(u)}u=!1}u&&(r=o[0])}}return o=vn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:av,lastRenderedState:r},o.queue=u,o=bv.bind(null,Ie,u),u.dispatch=o,u=yp(!1),m=wp.bind(null,Ie,!1,u.queue),u=vn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=TC.bind(null,Ie,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function lv(i){var r=Ct();return uv(r,et,i)}function uv(i,r,o){if(r=gp(i,r,av)[0],i=lh(os)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Ql(r)}catch(E){throw E===Hl?nh:E}else u=r;r=Ct();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(Ie.flags|=2048,ho(9,uh(),SC.bind(null,f,o),null)),[u,m,i]}function SC(i,r){i.action=r}function cv(i){var r=Ct(),o=et;if(o!==null)return uv(r,o,i);Ct(),r=r.memoizedState,o=Ct();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function ho(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=Ie.updateQueue,r===null&&(r=pp(),Ie.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function uh(){return{destroy:void 0,resource:void 0}}function hv(){return Ct().memoizedState}function ch(i,r,o,u){var f=vn();u=u===void 0?null:u,Ie.flags|=i,f.memoizedState=ho(1|r,uh(),o,u)}function $l(i,r,o,u){var f=Ct();u=u===void 0?null:u;var m=f.memoizedState.inst;et!==null&&u!==null&&up(u,et.memoizedState.deps)?f.memoizedState=ho(r,m,o,u):(Ie.flags|=i,f.memoizedState=ho(1|r,m,o,u))}function fv(i,r){ch(8390656,8,i,r)}function dv(i,r){$l(2048,8,i,r)}function pv(i,r){return $l(4,2,i,r)}function mv(i,r){return $l(4,4,i,r)}function gv(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function _v(i,r,o){o=o!=null?o.concat([i]):null,$l(4,4,gv.bind(null,r,i),o)}function Ep(){}function yv(i,r){var o=Ct();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&up(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function vv(i,r){var o=Ct();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&up(r,u[1]))return u[0];if(u=i(),ca){wn(!0);try{i()}finally{wn(!1)}}return o.memoizedState=[u,r],u}function Tp(i,r,o){return o===void 0||(Hs&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=SE(),Ie.lanes|=i,$s|=i,o)}function Ev(i,r,o,u){return bn(o,r)?o:lo.current!==null?(i=Tp(i,o,u),bn(i,r)||(Ft=!0),i):(Hs&42)===0?(Ft=!0,i.memoizedState=o):(i=SE(),Ie.lanes|=i,$s|=i,r)}function Tv(i,r,o,u,f){var m=ae.p;ae.p=m!==0&&8>m?m:8;var E=G.T,A={};G.T=A,wp(i,!1,r,o);try{var C=f(),F=G.S;if(F!==null&&F(A,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var $=yC(C,u);Wl(i,r,$,Dn(i))}else Wl(i,r,u,Dn(i))}catch(Z){Wl(i,r,{then:function(){},status:"rejected",reason:Z},Dn())}finally{ae.p=m,G.T=E}}function AC(){}function Sp(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=Sv(i).queue;Tv(i,f,r,de,o===null?AC:function(){return Av(i),o(u)})}function Sv(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:de},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function Av(i){var r=Sv(i).next.queue;Wl(i,r,{},Dn())}function Ap(){return rn(pu)}function wv(){return Ct().memoizedState}function Rv(){return Ct().memoizedState}function wC(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=Dn();i=zs(o);var u=Fs(r,i,o);u!==null&&(kn(u,r,o),ql(u,r,o)),r={cache:Jd()},i.payload=r;return}r=r.return}}function RC(i,r,o){var u=Dn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},hh(i)?Cv(r,o):(o=jd(i,r,o,u),o!==null&&(kn(o,i,u),Iv(o,r,u)))}function bv(i,r,o){var u=Dn();Wl(i,r,o,u)}function Wl(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(hh(i))Cv(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,A=m(E,o);if(f.hasEagerState=!0,f.eagerState=A,bn(A,E))return Qc(i,r,f,0),at===null&&Yc(),!1}catch{}finally{}if(o=jd(i,r,f,u),o!==null)return kn(o,i,u),Iv(o,r,u),!0}return!1}function wp(i,r,o,u){if(u={lane:2,revertLane:nm(),action:u,hasEagerState:!1,eagerState:null,next:null},hh(i)){if(r)throw Error(s(479))}else r=jd(i,o,u,2),r!==null&&kn(r,i,2)}function hh(i){var r=i.alternate;return i===Ie||r!==null&&r===Ie}function Cv(i,r){uo=rh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function Iv(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,yl(i,o)}}var fh={readContext:rn,use:oh,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useLayoutEffect:Tt,useInsertionEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useSyncExternalStore:Tt,useId:Tt,useHostTransitionStatus:Tt,useFormState:Tt,useActionState:Tt,useOptimistic:Tt,useMemoCache:Tt,useCacheRefresh:Tt},Nv={readContext:rn,use:oh,useCallback:function(i,r){return vn().memoizedState=[i,r===void 0?null:r],i},useContext:rn,useEffect:fv,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,ch(4194308,4,gv.bind(null,r,i),o)},useLayoutEffect:function(i,r){return ch(4194308,4,i,r)},useInsertionEffect:function(i,r){ch(4,2,i,r)},useMemo:function(i,r){var o=vn();r=r===void 0?null:r;var u=i();if(ca){wn(!0);try{i()}finally{wn(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=vn();if(o!==void 0){var f=o(r);if(ca){wn(!0);try{o(r)}finally{wn(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=RC.bind(null,Ie,i),[u.memoizedState,i]},useRef:function(i){var r=vn();return i={current:i},r.memoizedState=i},useState:function(i){i=yp(i);var r=i.queue,o=bv.bind(null,Ie,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Ep,useDeferredValue:function(i,r){var o=vn();return Tp(o,i,r)},useTransition:function(){var i=yp(!1);return i=Tv.bind(null,Ie,i.queue,!0,!1),vn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Ie,f=vn();if(Ke){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),at===null)throw Error(s(349));(ze&124)!==0||Wy(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,fv(Zy.bind(null,u,m,i),[i]),u.flags|=2048,ho(9,uh(),Xy.bind(null,u,m,o,r),null),o},useId:function(){var i=vn(),r=at.identifierPrefix;if(Ke){var o=ss,u=is;o=(u&~(1<<32-sn(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=ah++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=vC++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:Ap,useFormState:ov,useActionState:ov,useOptimistic:function(i){var r=vn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=wp.bind(null,Ie,!0,o),o.dispatch=r,[i,r]},useMemoCache:mp,useCacheRefresh:function(){return vn().memoizedState=wC.bind(null,Ie)}},Ov={readContext:rn,use:oh,useCallback:yv,useContext:rn,useEffect:dv,useImperativeHandle:_v,useInsertionEffect:pv,useLayoutEffect:mv,useMemo:vv,useReducer:lh,useRef:hv,useState:function(){return lh(os)},useDebugValue:Ep,useDeferredValue:function(i,r){var o=Ct();return Ev(o,et.memoizedState,i,r)},useTransition:function(){var i=lh(os)[0],r=Ct().memoizedState;return[typeof i=="boolean"?i:Ql(i),r]},useSyncExternalStore:$y,useId:wv,useHostTransitionStatus:Ap,useFormState:lv,useActionState:lv,useOptimistic:function(i,r){var o=Ct();return tv(o,et,i,r)},useMemoCache:mp,useCacheRefresh:Rv},bC={readContext:rn,use:oh,useCallback:yv,useContext:rn,useEffect:dv,useImperativeHandle:_v,useInsertionEffect:pv,useLayoutEffect:mv,useMemo:vv,useReducer:_p,useRef:hv,useState:function(){return _p(os)},useDebugValue:Ep,useDeferredValue:function(i,r){var o=Ct();return et===null?Tp(o,i,r):Ev(o,et.memoizedState,i,r)},useTransition:function(){var i=_p(os)[0],r=Ct().memoizedState;return[typeof i=="boolean"?i:Ql(i),r]},useSyncExternalStore:$y,useId:wv,useHostTransitionStatus:Ap,useFormState:cv,useActionState:cv,useOptimistic:function(i,r){var o=Ct();return et!==null?tv(o,et,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:mp,useCacheRefresh:Rv},fo=null,Xl=0;function dh(i){var r=Xl;return Xl+=1,fo===null&&(fo=[]),Fy(fo,i,r)}function Zl(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function ph(i,r){throw r.$$typeof===T?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function Dv(i){var r=i._init;return r(i._payload)}function kv(i){function r(L,P){if(i){var z=L.deletions;z===null?(L.deletions=[P],L.flags|=16):z.push(P)}}function o(L,P){if(!i)return null;for(;P!==null;)r(L,P),P=P.sibling;return null}function u(L){for(var P=new Map;L!==null;)L.key!==null?P.set(L.key,L):P.set(L.index,L),L=L.sibling;return P}function f(L,P){return L=ns(L,P),L.index=0,L.sibling=null,L}function m(L,P,z){return L.index=z,i?(z=L.alternate,z!==null?(z=z.index,z<P?(L.flags|=67108866,P):z):(L.flags|=67108866,P)):(L.flags|=1048576,P)}function E(L){return i&&L.alternate===null&&(L.flags|=67108866),L}function A(L,P,z,W){return P===null||P.tag!==6?(P=Gd(z,L.mode,W),P.return=L,P):(P=f(P,z),P.return=L,P)}function C(L,P,z,W){var fe=z.type;return fe===I?$(L,P,z.props.children,W,z.key):P!==null&&(P.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===R&&Dv(fe)===P.type)?(P=f(P,z.props),Zl(P,z),P.return=L,P):(P=Wc(z.type,z.key,z.props,null,L.mode,W),Zl(P,z),P.return=L,P)}function F(L,P,z,W){return P===null||P.tag!==4||P.stateNode.containerInfo!==z.containerInfo||P.stateNode.implementation!==z.implementation?(P=Kd(z,L.mode,W),P.return=L,P):(P=f(P,z.children||[]),P.return=L,P)}function $(L,P,z,W,fe){return P===null||P.tag!==7?(P=na(z,L.mode,W,fe),P.return=L,P):(P=f(P,z),P.return=L,P)}function Z(L,P,z){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Gd(""+P,L.mode,z),P.return=L,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case S:return z=Wc(P.type,P.key,P.props,null,L.mode,z),Zl(z,P),z.return=L,z;case O:return P=Kd(P,L.mode,z),P.return=L,P;case R:var W=P._init;return P=W(P._payload),Z(L,P,z)}if(ct(P)||V(P))return P=na(P,L.mode,z,null),P.return=L,P;if(typeof P.then=="function")return Z(L,dh(P),z);if(P.$$typeof===te)return Z(L,eh(L,P),z);ph(L,P)}return null}function j(L,P,z,W){var fe=P!==null?P.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return fe!==null?null:A(L,P,""+z,W);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return z.key===fe?C(L,P,z,W):null;case O:return z.key===fe?F(L,P,z,W):null;case R:return fe=z._init,z=fe(z._payload),j(L,P,z,W)}if(ct(z)||V(z))return fe!==null?null:$(L,P,z,W,null);if(typeof z.then=="function")return j(L,P,dh(z),W);if(z.$$typeof===te)return j(L,P,eh(L,z),W);ph(L,z)}return null}function q(L,P,z,W,fe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return L=L.get(z)||null,A(P,L,""+W,fe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return L=L.get(W.key===null?z:W.key)||null,C(P,L,W,fe);case O:return L=L.get(W.key===null?z:W.key)||null,F(P,L,W,fe);case R:var De=W._init;return W=De(W._payload),q(L,P,z,W,fe)}if(ct(W)||V(W))return L=L.get(z)||null,$(P,L,W,fe,null);if(typeof W.then=="function")return q(L,P,z,dh(W),fe);if(W.$$typeof===te)return q(L,P,z,eh(P,W),fe);ph(P,W)}return null}function Se(L,P,z,W){for(var fe=null,De=null,pe=P,ve=P=0,jt=null;pe!==null&&ve<z.length;ve++){pe.index>ve?(jt=pe,pe=null):jt=pe.sibling;var Ge=j(L,pe,z[ve],W);if(Ge===null){pe===null&&(pe=jt);break}i&&pe&&Ge.alternate===null&&r(L,pe),P=m(Ge,P,ve),De===null?fe=Ge:De.sibling=Ge,De=Ge,pe=jt}if(ve===z.length)return o(L,pe),Ke&&sa(L,ve),fe;if(pe===null){for(;ve<z.length;ve++)pe=Z(L,z[ve],W),pe!==null&&(P=m(pe,P,ve),De===null?fe=pe:De.sibling=pe,De=pe);return Ke&&sa(L,ve),fe}for(pe=u(pe);ve<z.length;ve++)jt=q(pe,L,ve,z[ve],W),jt!==null&&(i&&jt.alternate!==null&&pe.delete(jt.key===null?ve:jt.key),P=m(jt,P,ve),De===null?fe=jt:De.sibling=jt,De=jt);return i&&pe.forEach(function(sr){return r(L,sr)}),Ke&&sa(L,ve),fe}function _e(L,P,z,W){if(z==null)throw Error(s(151));for(var fe=null,De=null,pe=P,ve=P=0,jt=null,Ge=z.next();pe!==null&&!Ge.done;ve++,Ge=z.next()){pe.index>ve?(jt=pe,pe=null):jt=pe.sibling;var sr=j(L,pe,Ge.value,W);if(sr===null){pe===null&&(pe=jt);break}i&&pe&&sr.alternate===null&&r(L,pe),P=m(sr,P,ve),De===null?fe=sr:De.sibling=sr,De=sr,pe=jt}if(Ge.done)return o(L,pe),Ke&&sa(L,ve),fe;if(pe===null){for(;!Ge.done;ve++,Ge=z.next())Ge=Z(L,Ge.value,W),Ge!==null&&(P=m(Ge,P,ve),De===null?fe=Ge:De.sibling=Ge,De=Ge);return Ke&&sa(L,ve),fe}for(pe=u(pe);!Ge.done;ve++,Ge=z.next())Ge=q(pe,L,ve,Ge.value,W),Ge!==null&&(i&&Ge.alternate!==null&&pe.delete(Ge.key===null?ve:Ge.key),P=m(Ge,P,ve),De===null?fe=Ge:De.sibling=Ge,De=Ge);return i&&pe.forEach(function(C1){return r(L,C1)}),Ke&&sa(L,ve),fe}function nt(L,P,z,W){if(typeof z=="object"&&z!==null&&z.type===I&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case S:e:{for(var fe=z.key;P!==null;){if(P.key===fe){if(fe=z.type,fe===I){if(P.tag===7){o(L,P.sibling),W=f(P,z.props.children),W.return=L,L=W;break e}}else if(P.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===R&&Dv(fe)===P.type){o(L,P.sibling),W=f(P,z.props),Zl(W,z),W.return=L,L=W;break e}o(L,P);break}else r(L,P);P=P.sibling}z.type===I?(W=na(z.props.children,L.mode,W,z.key),W.return=L,L=W):(W=Wc(z.type,z.key,z.props,null,L.mode,W),Zl(W,z),W.return=L,L=W)}return E(L);case O:e:{for(fe=z.key;P!==null;){if(P.key===fe)if(P.tag===4&&P.stateNode.containerInfo===z.containerInfo&&P.stateNode.implementation===z.implementation){o(L,P.sibling),W=f(P,z.children||[]),W.return=L,L=W;break e}else{o(L,P);break}else r(L,P);P=P.sibling}W=Kd(z,L.mode,W),W.return=L,L=W}return E(L);case R:return fe=z._init,z=fe(z._payload),nt(L,P,z,W)}if(ct(z))return Se(L,P,z,W);if(V(z)){if(fe=V(z),typeof fe!="function")throw Error(s(150));return z=fe.call(z),_e(L,P,z,W)}if(typeof z.then=="function")return nt(L,P,dh(z),W);if(z.$$typeof===te)return nt(L,P,eh(L,z),W);ph(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,P!==null&&P.tag===6?(o(L,P.sibling),W=f(P,z),W.return=L,L=W):(o(L,P),W=Gd(z,L.mode,W),W.return=L,L=W),E(L)):o(L,P)}return function(L,P,z,W){try{Xl=0;var fe=nt(L,P,z,W);return fo=null,fe}catch(pe){if(pe===Hl||pe===nh)throw pe;var De=Cn(29,pe,null,L.mode);return De.lanes=W,De.return=L,De}finally{}}}var po=kv(!0),Mv=kv(!1),Yn=ee(null),Ri=null;function js(i){var r=i.alternate;ie(Pt,Pt.current&1),ie(Yn,i),Ri===null&&(r===null||lo.current!==null||r.memoizedState!==null)&&(Ri=i)}function Pv(i){if(i.tag===22){if(ie(Pt,Pt.current),ie(Yn,i),Ri===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Ri=i)}}else qs()}function qs(){ie(Pt,Pt.current),ie(Yn,Yn.current)}function ls(i){oe(Yn),Ri===i&&(Ri=null),oe(Pt)}var Pt=ee(0);function mh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||pm(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Rp(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:y({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var bp={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=Dn(),f=zs(u);f.payload=r,o!=null&&(f.callback=o),r=Fs(i,f,u),r!==null&&(kn(r,i,u),ql(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=Dn(),f=zs(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Fs(i,f,u),r!==null&&(kn(r,i,u),ql(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=Dn(),u=zs(o);u.tag=2,r!=null&&(u.callback=r),r=Fs(i,u,o),r!==null&&(kn(r,i,o),ql(r,i,o))}};function xv(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!Pl(o,u)||!Pl(f,m):!0}function Lv(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&bp.enqueueReplaceState(r,r.state,null)}function ha(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=y({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var gh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function Vv(i){gh(i)}function Uv(i){console.error(i)}function Bv(i){gh(i)}function _h(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function zv(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Cp(i,r,o){return o=zs(o),o.tag=3,o.payload={element:null},o.callback=function(){_h(i,r)},o}function Fv(i){return i=zs(i),i.tag=3,i}function Hv(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){zv(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){zv(r,o,u),typeof f!="function"&&(Ws===null?Ws=new Set([this]):Ws.add(this));var A=u.stack;this.componentDidCatch(u.value,{componentStack:A!==null?A:""})})}function CC(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Bl(r,o,f,!0),o=Yn.current,o!==null){switch(o.tag){case 13:return Ri===null?Xp():o.alternate===null&&yt===0&&(yt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===np?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Jp(i,u,f)),!1;case 22:return o.flags|=65536,u===np?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Jp(i,u,f)),!1}throw Error(s(435,o.tag))}return Jp(i,u,f),Xp(),!1}if(Ke)return r=Yn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==$d&&(i=Error(s(422),{cause:u}),Ul(jn(i,o)))):(u!==$d&&(r=Error(s(423),{cause:u}),Ul(jn(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=jn(u,o),f=Cp(i.stateNode,u,f),rp(i,f),yt!==4&&(yt=2)),!1;var m=Error(s(520),{cause:u});if(m=jn(m,o),ru===null?ru=[m]:ru.push(m),yt!==4&&(yt=2),r===null)return!0;u=jn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=Cp(o.stateNode,u,i),rp(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ws===null||!Ws.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Fv(f),Hv(f,i,o,u),rp(o,f),!1}o=o.return}while(o!==null);return!1}var jv=Error(s(461)),Ft=!1;function Wt(i,r,o,u){r.child=i===null?Mv(r,null,o,u):po(r,i.child,o,u)}function qv(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var A in u)A!=="ref"&&(E[A]=u[A])}else E=u;return la(r),u=cp(i,r,o,E,m,f),A=hp(),i!==null&&!Ft?(fp(i,r,f),us(i,r,f)):(Ke&&A&&Yd(r),r.flags|=1,Wt(i,r,u,f),r.child)}function Gv(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!qd(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,Kv(i,r,m,u,f)):(i=Wc(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!xp(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Pl,o(E,u)&&i.ref===r.ref)return us(i,r,f)}return r.flags|=1,i=ns(m,u),i.ref=r.ref,i.return=r,r.child=i}function Kv(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(Pl(m,u)&&i.ref===r.ref)if(Ft=!1,r.pendingProps=u=m,xp(i,f))(i.flags&131072)!==0&&(Ft=!0);else return r.lanes=i.lanes,us(i,r,f)}return Ip(i,r,o,u,f)}function Yv(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return Qv(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&th(r,m!==null?m.cachePool:null),m!==null?Ky(r,m):op(),Pv(r);else return r.lanes=r.childLanes=536870912,Qv(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(th(r,m.cachePool),Ky(r,m),qs(),r.memoizedState=null):(i!==null&&th(r,null),op(),qs());return Wt(i,r,f,o),r.child}function Qv(i,r,o,u){var f=tp();return f=f===null?null:{parent:Mt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&th(r,null),op(),Pv(r),i!==null&&Bl(i,r,u,!0),null}function yh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function Ip(i,r,o,u,f){return la(r),o=cp(i,r,o,u,void 0,f),u=hp(),i!==null&&!Ft?(fp(i,r,f),us(i,r,f)):(Ke&&u&&Yd(r),r.flags|=1,Wt(i,r,o,f),r.child)}function $v(i,r,o,u,f,m){return la(r),r.updateQueue=null,o=Qy(r,u,o,f),Yy(i),u=hp(),i!==null&&!Ft?(fp(i,r,m),us(i,r,m)):(Ke&&u&&Yd(r),r.flags|=1,Wt(i,r,o,m),r.child)}function Wv(i,r,o,u,f){if(la(r),r.stateNode===null){var m=io,E=o.contextType;typeof E=="object"&&E!==null&&(m=rn(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=bp,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},ip(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?rn(E):io,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Rp(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&bp.enqueueReplaceState(m,m.state,null),Kl(r,u,m,f),Gl(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var A=r.memoizedProps,C=ha(o,A);m.props=C;var F=m.context,$=o.contextType;E=io,typeof $=="object"&&$!==null&&(E=rn($));var Z=o.getDerivedStateFromProps;$=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,$||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||F!==E)&&Lv(r,m,u,E),Bs=!1;var j=r.memoizedState;m.state=j,Kl(r,u,m,f),Gl(),F=r.memoizedState,A||j!==F||Bs?(typeof Z=="function"&&(Rp(r,o,Z,u),F=r.memoizedState),(C=Bs||xv(r,o,C,u,j,F,E))?($||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=F),m.props=u,m.state=F,m.context=E,u=C):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,sp(i,r),E=r.memoizedProps,$=ha(o,E),m.props=$,Z=r.pendingProps,j=m.context,F=o.contextType,C=io,typeof F=="object"&&F!==null&&(C=rn(F)),A=o.getDerivedStateFromProps,(F=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Z||j!==C)&&Lv(r,m,u,C),Bs=!1,j=r.memoizedState,m.state=j,Kl(r,u,m,f),Gl();var q=r.memoizedState;E!==Z||j!==q||Bs||i!==null&&i.dependencies!==null&&Jc(i.dependencies)?(typeof A=="function"&&(Rp(r,o,A,u),q=r.memoizedState),($=Bs||xv(r,o,$,u,j,q,C)||i!==null&&i.dependencies!==null&&Jc(i.dependencies))?(F||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,q,C),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,q,C)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&j===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&j===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=q),m.props=u,m.state=q,m.context=C,u=$):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&j===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&j===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,yh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=po(r,i.child,null,f),r.child=po(r,null,o,f)):Wt(i,r,o,f),r.memoizedState=m.state,i=r.child):i=us(i,r,f),i}function Xv(i,r,o,u){return Vl(),r.flags|=256,Wt(i,r,o,u),r.child}var Np={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Op(i){return{baseLanes:i,cachePool:Uy()}}function Dp(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=Qn),i}function Zv(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(Pt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(Ke){if(f?js(r):qs(),Ke){var A=_t,C;if(C=A){e:{for(C=A,A=wi;C.nodeType!==8;){if(!A){A=null;break e}if(C=ri(C.nextSibling),C===null){A=null;break e}}A=C}A!==null?(r.memoizedState={dehydrated:A,treeContext:ia!==null?{id:is,overflow:ss}:null,retryLane:536870912,hydrationErrors:null},C=Cn(18,null,null,0),C.stateNode=A,C.return=r,r.child=C,_n=r,_t=null,C=!0):C=!1}C||aa(r)}if(A=r.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return pm(A)?r.lanes=32:r.lanes=536870912,null;ls(r)}return A=u.children,u=u.fallback,f?(qs(),f=r.mode,A=vh({mode:"hidden",children:A},f),u=na(u,f,o,null),A.return=r,u.return=r,A.sibling=u,r.child=A,f=r.child,f.memoizedState=Op(o),f.childLanes=Dp(i,E,o),r.memoizedState=Np,u):(js(r),kp(r,A))}if(C=i.memoizedState,C!==null&&(A=C.dehydrated,A!==null)){if(m)r.flags&256?(js(r),r.flags&=-257,r=Mp(i,r,o)):r.memoizedState!==null?(qs(),r.child=i.child,r.flags|=128,r=null):(qs(),f=u.fallback,A=r.mode,u=vh({mode:"visible",children:u.children},A),f=na(f,A,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,po(r,i.child,null,o),u=r.child,u.memoizedState=Op(o),u.childLanes=Dp(i,E,o),r.memoizedState=Np,r=f);else if(js(r),pm(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var F=E.dgst;E=F,u=Error(s(419)),u.stack="",u.digest=E,Ul({value:u,source:null,stack:null}),r=Mp(i,r,o)}else if(Ft||Bl(i,r,o,!1),E=(o&i.childLanes)!==0,Ft||E){if(E=at,E!==null&&(u=o&-o,u=(u&42)!==0?1:Ds(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==C.retryLane))throw C.retryLane=u,no(i,u),kn(E,i,u),jv;A.data==="$?"||Xp(),r=Mp(i,r,o)}else A.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=C.treeContext,_t=ri(A.nextSibling),_n=r,Ke=!0,ra=null,wi=!1,i!==null&&(Gn[Kn++]=is,Gn[Kn++]=ss,Gn[Kn++]=ia,is=i.id,ss=i.overflow,ia=r),r=kp(r,u.children),r.flags|=4096);return r}return f?(qs(),f=u.fallback,A=r.mode,C=i.child,F=C.sibling,u=ns(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&65011712,F!==null?f=ns(F,f):(f=na(f,A,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,A=i.child.memoizedState,A===null?A=Op(o):(C=A.cachePool,C!==null?(F=Mt._currentValue,C=C.parent!==F?{parent:F,pool:F}:C):C=Uy(),A={baseLanes:A.baseLanes|o,cachePool:C}),f.memoizedState=A,f.childLanes=Dp(i,E,o),r.memoizedState=Np,u):(js(r),o=i.child,i=o.sibling,o=ns(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function kp(i,r){return r=vh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function vh(i,r){return i=Cn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function Mp(i,r,o){return po(r,i.child,null,o),i=kp(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function Jv(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),Xd(i.return,r,o)}function Pp(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function eE(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(Wt(i,r,u.children,o),u=Pt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Jv(i,o,r);else if(i.tag===19)Jv(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(ie(Pt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&mh(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),Pp(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&mh(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}Pp(r,!0,o,null,m);break;case"together":Pp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function us(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),$s|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(Bl(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=ns(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=ns(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function xp(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&Jc(i)))}function IC(i,r,o){switch(r.tag){case 3:rt(r,r.stateNode.containerInfo),Us(r,Mt,i.memoizedState.cache),Vl();break;case 27:case 5:Os(r);break;case 4:rt(r,r.stateNode.containerInfo);break;case 10:Us(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(js(r),r.flags|=128,null):(o&r.child.childLanes)!==0?Zv(i,r,o):(js(r),i=us(i,r,o),i!==null?i.sibling:null);js(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Bl(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return eE(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(Pt,Pt.current),u)break;return null;case 22:case 23:return r.lanes=0,Yv(i,r,o);case 24:Us(r,Mt,i.memoizedState.cache)}return us(i,r,o)}function tE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Ft=!0;else{if(!xp(i,o)&&(r.flags&128)===0)return Ft=!1,IC(i,r,o);Ft=(i.flags&131072)!==0}else Ft=!1,Ke&&(r.flags&1048576)!==0&&Dy(r,Zc,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")qd(u)?(i=ha(u,i),r.tag=1,r=Wv(null,r,u,i,o)):(r.tag=0,r=Ip(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===ue){r.tag=11,r=qv(null,r,u,i,o);break e}else if(f===M){r.tag=14,r=Gv(null,r,u,i,o);break e}}throw r=Nt(u)||u,Error(s(306,r,""))}}return r;case 0:return Ip(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=ha(u,r.pendingProps),Wv(i,r,u,f,o);case 3:e:{if(rt(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,sp(i,r),Kl(r,u,null,o);var E=r.memoizedState;if(u=E.cache,Us(r,Mt,u),u!==m.cache&&Zd(r,[Mt],o,!0),Gl(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=Xv(i,r,u,o);break e}else if(u!==f){f=jn(Error(s(424)),r),Ul(f),r=Xv(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(_t=ri(i.firstChild),_n=r,Ke=!0,ra=null,wi=!0,o=Mv(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Vl(),u===f){r=us(i,r,o);break e}Wt(i,r,u,o)}r=r.child}return r;case 26:return yh(i,r),i===null?(o=rT(r.type,null,r.pendingProps,null))?r.memoizedState=o:Ke||(o=r.type,i=r.pendingProps,u=Mh(we.current).createElement(o),u[Ot]=r,u[wt]=i,Zt(u,o,i),Et(u),r.stateNode=u):r.memoizedState=rT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Os(r),i===null&&Ke&&(u=r.stateNode=nT(r.type,r.pendingProps,we.current),_n=r,wi=!0,f=_t,Js(r.type)?(mm=f,_t=ri(u.firstChild)):_t=f),Wt(i,r,r.pendingProps.children,o),yh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Ke&&((f=u=_t)&&(u=n1(u,r.type,r.pendingProps,wi),u!==null?(r.stateNode=u,_n=r,_t=ri(u.firstChild),wi=!1,f=!0):f=!1),f||aa(r)),Os(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,hm(f,m)?u=null:E!==null&&hm(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=cp(i,r,EC,null,null,o),pu._currentValue=f),yh(i,r),Wt(i,r,u,o),r.child;case 6:return i===null&&Ke&&((i=o=_t)&&(o=i1(o,r.pendingProps,wi),o!==null?(r.stateNode=o,_n=r,_t=null,i=!0):i=!1),i||aa(r)),null;case 13:return Zv(i,r,o);case 4:return rt(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=po(r,null,u,o):Wt(i,r,u,o),r.child;case 11:return qv(i,r,r.type,r.pendingProps,o);case 7:return Wt(i,r,r.pendingProps,o),r.child;case 8:return Wt(i,r,r.pendingProps.children,o),r.child;case 12:return Wt(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Us(r,r.type,u.value),Wt(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,la(r),f=rn(f),u=u(f),r.flags|=1,Wt(i,r,u,o),r.child;case 14:return Gv(i,r,r.type,r.pendingProps,o);case 15:return Kv(i,r,r.type,r.pendingProps,o);case 19:return eE(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=vh(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=ns(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return Yv(i,r,o);case 24:return la(r),u=rn(Mt),i===null?(f=tp(),f===null&&(f=at,m=Jd(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},ip(r),Us(r,Mt,f)):((i.lanes&o)!==0&&(sp(i,r),Kl(r,null,null,o),Gl()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Us(r,Mt,u)):(u=m.cache,Us(r,Mt,u),u!==f.cache&&Zd(r,[Mt],o,!0))),Wt(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function cs(i){i.flags|=4}function nE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!cT(r)){if(r=Yn.current,r!==null&&((ze&4194048)===ze?Ri!==null:(ze&62914560)!==ze&&(ze&536870912)===0||r!==Ri))throw jl=np,By;i.flags|=8192}}function Eh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?gl():536870912,i.lanes|=r,yo|=r)}function Jl(i,r){if(!Ke)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function dt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function NC(i,r,o){var u=r.pendingProps;switch(Qd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(r),null;case 1:return dt(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),as(Mt),fi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Ll(r)?cs(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Py())),dt(r),null;case 26:return o=r.memoizedState,i===null?(cs(r),o!==null?(dt(r),nE(r,o)):(dt(r),r.flags&=-16777217)):o?o!==i.memoizedState?(cs(r),dt(r),nE(r,o)):(dt(r),r.flags&=-16777217):(i.memoizedProps!==u&&cs(r),dt(r),r.flags&=-16777217),null;case 27:ji(r),o=we.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&cs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return dt(r),null}i=me.current,Ll(r)?ky(r):(i=nT(f,u,o),r.stateNode=i,cs(r))}return dt(r),null;case 5:if(ji(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&cs(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return dt(r),null}if(i=me.current,Ll(r))ky(r);else{switch(f=Mh(we.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[Ot]=r,i[wt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(Zt(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&cs(r)}}return dt(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&cs(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=we.current,Ll(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=_n,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[Ot]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||$E(i.nodeValue,o)),i||aa(r)}else i=Mh(i).createTextNode(u),i[Ot]=r,r.stateNode=i}return dt(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=Ll(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Ot]=r}else Vl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;dt(r),f=!1}else f=Py(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(ls(r),r):(ls(r),null)}if(ls(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),Eh(r,r.updateQueue),dt(r),null;case 4:return fi(),i===null&&am(r.stateNode.containerInfo),dt(r),null;case 10:return as(r.type),dt(r),null;case 19:if(oe(Pt),f=r.memoizedState,f===null)return dt(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)Jl(f,!1);else{if(yt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=mh(i),m!==null){for(r.flags|=128,Jl(f,!1),i=m.updateQueue,r.updateQueue=i,Eh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)Oy(o,i),o=o.sibling;return ie(Pt,Pt.current&1|2),r.child}i=i.sibling}f.tail!==null&&Vn()>Ah&&(r.flags|=128,u=!0,Jl(f,!1),r.lanes=4194304)}else{if(!u)if(i=mh(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,Eh(r,i),Jl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Ke)return dt(r),null}else 2*Vn()-f.renderingStartTime>Ah&&o!==536870912&&(r.flags|=128,u=!0,Jl(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Vn(),r.sibling=null,i=Pt.current,ie(Pt,u?i&1|2:i&1),r):(dt(r),null);case 22:case 23:return ls(r),lp(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(dt(r),r.subtreeFlags&6&&(r.flags|=8192)):dt(r),o=r.updateQueue,o!==null&&Eh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&oe(ua),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),as(Mt),dt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function OC(i,r){switch(Qd(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return as(Mt),fi(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return ji(r),null;case 13:if(ls(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Vl()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return oe(Pt),null;case 4:return fi(),null;case 10:return as(r.type),null;case 22:case 23:return ls(r),lp(),i!==null&&oe(ua),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return as(Mt),null;case 25:return null;default:return null}}function iE(i,r){switch(Qd(r),r.tag){case 3:as(Mt),fi();break;case 26:case 27:case 5:ji(r);break;case 4:fi();break;case 13:ls(r);break;case 19:oe(Pt);break;case 10:as(r.type);break;case 22:case 23:ls(r),lp(),i!==null&&oe(ua);break;case 24:as(Mt)}}function eu(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(A){st(r,r.return,A)}}function Gs(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,f=r;var C=o,F=A;try{F()}catch($){st(f,C,$)}}}u=u.next}while(u!==m)}}catch($){st(r,r.return,$)}}function sE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Gy(r,o)}catch(u){st(i,i.return,u)}}}function rE(i,r,o){o.props=ha(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){st(i,r,u)}}function tu(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){st(i,r,f)}}function bi(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){st(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){st(i,r,f)}else o.current=null}function aE(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){st(i,i.return,f)}}function Lp(i,r,o){try{var u=i.stateNode;XC(u,i.type,o,r),u[wt]=r}catch(f){st(i,i.return,f)}}function oE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Js(i.type)||i.tag===4}function Vp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||oE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Js(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Up(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=kh));else if(u!==4&&(u===27&&Js(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(Up(i,r,o),i=i.sibling;i!==null;)Up(i,r,o),i=i.sibling}function Th(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&Js(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Th(i,r,o),i=i.sibling;i!==null;)Th(i,r,o),i=i.sibling}function lE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);Zt(r,u,o),r[Ot]=i,r[wt]=o}catch(m){st(i,i.return,m)}}var hs=!1,St=!1,Bp=!1,uE=typeof WeakSet=="function"?WeakSet:Set,Ht=null;function DC(i,r){if(i=i.containerInfo,um=Bh,i=Ey(i),Vd(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,A=-1,C=-1,F=0,$=0,Z=i,j=null;t:for(;;){for(var q;Z!==o||f!==0&&Z.nodeType!==3||(A=E+f),Z!==m||u!==0&&Z.nodeType!==3||(C=E+u),Z.nodeType===3&&(E+=Z.nodeValue.length),(q=Z.firstChild)!==null;)j=Z,Z=q;for(;;){if(Z===i)break t;if(j===o&&++F===f&&(A=E),j===m&&++$===u&&(C=E),(q=Z.nextSibling)!==null)break;Z=j,j=Z.parentNode}Z=q}o=A===-1||C===-1?null:{start:A,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(cm={focusedElem:i,selectionRange:o},Bh=!1,Ht=r;Ht!==null;)if(r=Ht,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,Ht=i;else for(;Ht!==null;){switch(r=Ht,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Se=ha(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(Se,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(_e){st(o,o.return,_e)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)dm(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":dm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,Ht=i;break}Ht=r.return}}function cE(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Ks(i,o),u&4&&eu(5,o);break;case 1:if(Ks(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){st(o,o.return,E)}else{var f=ha(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){st(o,o.return,E)}}u&64&&sE(o),u&512&&tu(o,o.return);break;case 3:if(Ks(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Gy(i,r)}catch(E){st(o,o.return,E)}}break;case 27:r===null&&u&4&&lE(o);case 26:case 5:Ks(i,o),r===null&&u&4&&aE(o),u&512&&tu(o,o.return);break;case 12:Ks(i,o);break;case 13:Ks(i,o),u&4&&dE(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=zC.bind(null,o),s1(i,o))));break;case 22:if(u=o.memoizedState!==null||hs,!u){r=r!==null&&r.memoizedState!==null||St,f=hs;var m=St;hs=u,(St=r)&&!m?Ys(i,o,(o.subtreeFlags&8772)!==0):Ks(i,o),hs=f,St=m}break;case 30:break;default:Ks(i,o)}}function hE(i){var r=i.alternate;r!==null&&(i.alternate=null,hE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Ps(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var ft=null,En=!1;function fs(i,r,o){for(o=o.child;o!==null;)fE(i,r,o),o=o.sibling}function fE(i,r,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(gt,o)}catch{}switch(o.tag){case 26:St||bi(o,r),fs(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:St||bi(o,r);var u=ft,f=En;Js(o.type)&&(ft=o.stateNode,En=!1),fs(i,r,o),cu(o.stateNode),ft=u,En=f;break;case 5:St||bi(o,r);case 6:if(u=ft,f=En,ft=null,fs(i,r,o),ft=u,En=f,ft!==null)if(En)try{(ft.nodeType===9?ft.body:ft.nodeName==="HTML"?ft.ownerDocument.body:ft).removeChild(o.stateNode)}catch(m){st(o,r,m)}else try{ft.removeChild(o.stateNode)}catch(m){st(o,r,m)}break;case 18:ft!==null&&(En?(i=ft,eT(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),yu(i)):eT(ft,o.stateNode));break;case 4:u=ft,f=En,ft=o.stateNode.containerInfo,En=!0,fs(i,r,o),ft=u,En=f;break;case 0:case 11:case 14:case 15:St||Gs(2,o,r),St||Gs(4,o,r),fs(i,r,o);break;case 1:St||(bi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&rE(o,r,u)),fs(i,r,o);break;case 21:fs(i,r,o);break;case 22:St=(u=St)||o.memoizedState!==null,fs(i,r,o),St=u;break;default:fs(i,r,o)}}function dE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{yu(i)}catch(o){st(r,r.return,o)}}function kC(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new uE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new uE),r;default:throw Error(s(435,i.tag))}}function zp(i,r){var o=kC(i);r.forEach(function(u){var f=FC.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function In(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,A=E;e:for(;A!==null;){switch(A.tag){case 27:if(Js(A.type)){ft=A.stateNode,En=!1;break e}break;case 5:ft=A.stateNode,En=!1;break e;case 3:case 4:ft=A.stateNode.containerInfo,En=!0;break e}A=A.return}if(ft===null)throw Error(s(160));fE(m,E,f),ft=null,En=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)pE(r,i),r=r.sibling}var si=null;function pE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:In(r,i),Nn(i),u&4&&(Gs(3,i,i.return),eu(3,i),Gs(5,i,i.return));break;case 1:In(r,i),Nn(i),u&512&&(St||o===null||bi(o,o.return)),u&64&&hs&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=si;if(In(r,i),Nn(i),u&512&&(St||o===null||bi(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[zr]||m[Ot]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),Zt(m,u,o),m[Ot]=i,Et(m),u=m;break e;case"link":var E=lT("link","href",f).get(u+(o.href||""));if(E){for(var A=0;A<E.length;A++)if(m=E[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(A,1);break t}}m=f.createElement(u),Zt(m,u,o),f.head.appendChild(m);break;case"meta":if(E=lT("meta","content",f).get(u+(o.content||""))){for(A=0;A<E.length;A++)if(m=E[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(A,1);break t}}m=f.createElement(u),Zt(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Ot]=i,Et(m),u=m}i.stateNode=u}else uT(f,i.type,i.stateNode);else i.stateNode=oT(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?uT(f,i.type,i.stateNode):oT(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&Lp(i,i.memoizedProps,o.memoizedProps)}break;case 27:In(r,i),Nn(i),u&512&&(St||o===null||bi(o,o.return)),o!==null&&u&4&&Lp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(In(r,i),Nn(i),u&512&&(St||o===null||bi(o,o.return)),i.flags&32){f=i.stateNode;try{Bn(f,"")}catch(q){st(i,i.return,q)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,Lp(i,f,o!==null?o.memoizedProps:f)),u&1024&&(Bp=!0);break;case 6:if(In(r,i),Nn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(q){st(i,i.return,q)}}break;case 3:if(Lh=null,f=si,si=Ph(r.containerInfo),In(r,i),si=f,Nn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{yu(r.containerInfo)}catch(q){st(i,i.return,q)}Bp&&(Bp=!1,mE(i));break;case 4:u=si,si=Ph(i.stateNode.containerInfo),In(r,i),Nn(i),si=u;break;case 12:In(r,i),Nn(i);break;case 13:In(r,i),Nn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Kp=Vn()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,zp(i,u)));break;case 22:f=i.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,F=hs,$=St;if(hs=F||f,St=$||C,In(r,i),St=$,hs=F,Nn(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||C||hs||St||fa(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){C=o=r;try{if(m=C.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=C.stateNode;var Z=C.memoizedProps.style,j=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;A.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(q){st(C,C.return,q)}}}else if(r.tag===6){if(o===null){C=r;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(q){st(C,C.return,q)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,zp(i,o))));break;case 19:In(r,i),Nn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,zp(i,u)));break;case 30:break;case 21:break;default:In(r,i),Nn(i)}}function Nn(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(oE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=Vp(i);Th(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(Bn(E,""),o.flags&=-33);var A=Vp(i);Th(i,A,E);break;case 3:case 4:var C=o.stateNode.containerInfo,F=Vp(i);Up(i,F,C);break;default:throw Error(s(161))}}catch($){st(i,i.return,$)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function mE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;mE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function Ks(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)cE(i,r.alternate,r),r=r.sibling}function fa(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Gs(4,r,r.return),fa(r);break;case 1:bi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&rE(r,r.return,o),fa(r);break;case 27:cu(r.stateNode);case 26:case 5:bi(r,r.return),fa(r);break;case 22:r.memoizedState===null&&fa(r);break;case 30:fa(r);break;default:fa(r)}i=i.sibling}}function Ys(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:Ys(f,m,o),eu(4,m);break;case 1:if(Ys(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(F){st(u,u.return,F)}if(u=m,f=u.updateQueue,f!==null){var A=u.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)qy(C[f],A)}catch(F){st(u,u.return,F)}}o&&E&64&&sE(m),tu(m,m.return);break;case 27:lE(m);case 26:case 5:Ys(f,m,o),o&&u===null&&E&4&&aE(m),tu(m,m.return);break;case 12:Ys(f,m,o);break;case 13:Ys(f,m,o),o&&E&4&&dE(f,m);break;case 22:m.memoizedState===null&&Ys(f,m,o),tu(m,m.return);break;case 30:break;default:Ys(f,m,o)}r=r.sibling}}function Fp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&zl(o))}function Hp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&zl(i))}function Ci(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)gE(i,r,o,u),r=r.sibling}function gE(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Ci(i,r,o,u),f&2048&&eu(9,r);break;case 1:Ci(i,r,o,u);break;case 3:Ci(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&zl(i)));break;case 12:if(f&2048){Ci(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,A=m.onPostCommit;typeof A=="function"&&A(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){st(r,r.return,C)}}else Ci(i,r,o,u);break;case 13:Ci(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Ci(i,r,o,u):nu(i,r):m._visibility&2?Ci(i,r,o,u):(m._visibility|=2,mo(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&Fp(E,r);break;case 24:Ci(i,r,o,u),f&2048&&Hp(r.alternate,r);break;default:Ci(i,r,o,u)}}function mo(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,A=o,C=u,F=E.flags;switch(E.tag){case 0:case 11:case 15:mo(m,E,A,C,f),eu(8,E);break;case 23:break;case 22:var $=E.stateNode;E.memoizedState!==null?$._visibility&2?mo(m,E,A,C,f):nu(m,E):($._visibility|=2,mo(m,E,A,C,f)),f&&F&2048&&Fp(E.alternate,E);break;case 24:mo(m,E,A,C,f),f&&F&2048&&Hp(E.alternate,E);break;default:mo(m,E,A,C,f)}r=r.sibling}}function nu(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:nu(o,u),f&2048&&Fp(u.alternate,u);break;case 24:nu(o,u),f&2048&&Hp(u.alternate,u);break;default:nu(o,u)}r=r.sibling}}var iu=8192;function go(i){if(i.subtreeFlags&iu)for(i=i.child;i!==null;)_E(i),i=i.sibling}function _E(i){switch(i.tag){case 26:go(i),i.flags&iu&&i.memoizedState!==null&&_1(si,i.memoizedState,i.memoizedProps);break;case 5:go(i);break;case 3:case 4:var r=si;si=Ph(i.stateNode.containerInfo),go(i),si=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=iu,iu=16777216,go(i),iu=r):go(i));break;default:go(i)}}function yE(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function su(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Ht=u,EE(u,i)}yE(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)vE(i),i=i.sibling}function vE(i){switch(i.tag){case 0:case 11:case 15:su(i),i.flags&2048&&Gs(9,i,i.return);break;case 3:su(i);break;case 12:su(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Sh(i)):su(i);break;default:su(i)}}function Sh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Ht=u,EE(u,i)}yE(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Gs(8,r,r.return),Sh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Sh(r));break;default:Sh(r)}i=i.sibling}}function EE(i,r){for(;Ht!==null;){var o=Ht;switch(o.tag){case 0:case 11:case 15:Gs(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:zl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Ht=u;else e:for(o=i;Ht!==null;){u=Ht;var f=u.sibling,m=u.return;if(hE(u),u===o){Ht=null;break e}if(f!==null){f.return=m,Ht=f;break e}Ht=m}}}var MC={getCacheForType:function(i){var r=rn(Mt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},PC=typeof WeakMap=="function"?WeakMap:Map,Xe=0,at=null,ke=null,ze=0,Ze=0,On=null,Qs=!1,_o=!1,jp=!1,ds=0,yt=0,$s=0,da=0,qp=0,Qn=0,yo=0,ru=null,Tn=null,Gp=!1,Kp=0,Ah=1/0,wh=null,Ws=null,Xt=0,Xs=null,vo=null,Eo=0,Yp=0,Qp=null,TE=null,au=0,$p=null;function Dn(){if((Xe&2)!==0&&ze!==0)return ze&-ze;if(G.T!==null){var i=ao;return i!==0?i:nm()}return ks()}function SE(){Qn===0&&(Qn=(ze&536870912)===0||Ke?ml():536870912);var i=Yn.current;return i!==null&&(i.flags|=32),Qn}function kn(i,r,o){(i===at&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)&&(To(i,0),Zs(i,ze,Qn,!1)),Gi(i,o),((Xe&2)===0||i!==at)&&(i===at&&((Xe&2)===0&&(da|=o),yt===4&&Zs(i,ze,Qn,!1)),Ii(i))}function AE(i,r,o){if((Xe&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Br(i,r),f=u?VC(i,r):Zp(i,r,!0),m=u;do{if(f===0){_o&&!u&&Zs(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!xC(o)){f=Zp(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var A=i;f=ru;var C=A.current.memoizedState.isDehydrated;if(C&&(To(A,E).flags|=256),E=Zp(A,E,!1),E!==2){if(jp&&!C){A.errorRecoveryDisabledLanes|=m,da|=m,f=4;break e}m=Tn,Tn=f,m!==null&&(Tn===null?Tn=m:Tn.push.apply(Tn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){To(i,0),Zs(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Zs(u,r,Qn,!Qs);break e;case 2:Tn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=Kp+300-Vn(),10<f)){if(Zs(u,r,Qn,!Qs),Va(u,0,!0)!==0)break e;u.timeoutHandle=ZE(wE.bind(null,u,o,Tn,wh,Gp,r,Qn,da,yo,Qs,m,2,-0,0),f);break e}wE(u,o,Tn,wh,Gp,r,Qn,da,yo,Qs,m,0,-0,0)}}break}while(!0);Ii(i)}function wE(i,r,o,u,f,m,E,A,C,F,$,Z,j,q){if(i.timeoutHandle=-1,Z=r.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(du={stylesheets:null,count:0,unsuspend:g1},_E(r),Z=y1(),Z!==null)){i.cancelPendingCommit=Z(DE.bind(null,i,r,m,o,u,f,E,A,C,$,1,j,q)),Zs(i,m,E,!F);return}DE(i,r,m,o,u,f,E,A,C)}function xC(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!bn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Zs(i,r,o,u){r&=~qp,r&=~da,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-sn(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&di(i,o,r)}function Rh(){return(Xe&6)===0?(ou(0),!1):!0}function Wp(){if(ke!==null){if(Ze===0)var i=ke.return;else i=ke,rs=oa=null,dp(i),fo=null,Xl=0,i=ke;for(;i!==null;)iE(i.alternate,i),i=i.return;ke=null}}function To(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,JC(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),Wp(),at=i,ke=o=ns(i.current,null),ze=r,Ze=0,On=null,Qs=!1,_o=Br(i,r),jp=!1,yo=Qn=qp=da=$s=yt=0,Tn=ru=null,Gp=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-sn(u),m=1<<f;r|=i[f],u&=~m}return ds=r,Yc(),o}function RE(i,r){Ie=null,G.H=fh,r===Hl||r===nh?(r=Hy(),Ze=3):r===By?(r=Hy(),Ze=4):Ze=r===jv?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,On=r,ke===null&&(yt=1,_h(i,jn(r,i.current)))}function bE(){var i=G.H;return G.H=fh,i===null?fh:i}function CE(){var i=G.A;return G.A=MC,i}function Xp(){yt=4,Qs||(ze&4194048)!==ze&&Yn.current!==null||(_o=!0),($s&134217727)===0&&(da&134217727)===0||at===null||Zs(at,ze,Qn,!1)}function Zp(i,r,o){var u=Xe;Xe|=2;var f=bE(),m=CE();(at!==i||ze!==r)&&(wh=null,To(i,r)),r=!1;var E=yt;e:do try{if(Ze!==0&&ke!==null){var A=ke,C=On;switch(Ze){case 8:Wp(),E=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(r=!0);var F=Ze;if(Ze=0,On=null,So(i,A,C,F),o&&_o){E=0;break e}break;default:F=Ze,Ze=0,On=null,So(i,A,C,F)}}LC(),E=yt;break}catch($){RE(i,$)}while(!0);return r&&i.shellSuspendCounter++,rs=oa=null,Xe=u,G.H=f,G.A=m,ke===null&&(at=null,ze=0,Yc()),E}function LC(){for(;ke!==null;)IE(ke)}function VC(i,r){var o=Xe;Xe|=2;var u=bE(),f=CE();at!==i||ze!==r?(wh=null,Ah=Vn()+500,To(i,r)):_o=Br(i,r);e:do try{if(Ze!==0&&ke!==null){r=ke;var m=On;t:switch(Ze){case 1:Ze=0,On=null,So(i,r,m,1);break;case 2:case 9:if(zy(m)){Ze=0,On=null,NE(r);break}r=function(){Ze!==2&&Ze!==9||at!==i||(Ze=7),Ii(i)},m.then(r,r);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:zy(m)?(Ze=0,On=null,NE(r)):(Ze=0,On=null,So(i,r,m,7));break;case 5:var E=null;switch(ke.tag){case 26:E=ke.memoizedState;case 5:case 27:var A=ke;if(!E||cT(E)){Ze=0,On=null;var C=A.sibling;if(C!==null)ke=C;else{var F=A.return;F!==null?(ke=F,bh(F)):ke=null}break t}}Ze=0,On=null,So(i,r,m,5);break;case 6:Ze=0,On=null,So(i,r,m,6);break;case 8:Wp(),yt=6;break e;default:throw Error(s(462))}}UC();break}catch($){RE(i,$)}while(!0);return rs=oa=null,G.H=u,G.A=f,Xe=o,ke!==null?0:(at=null,ze=0,Yc(),yt)}function UC(){for(;ke!==null&&!hl();)IE(ke)}function IE(i){var r=tE(i.alternate,i,ds);i.memoizedProps=i.pendingProps,r===null?bh(i):ke=r}function NE(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=$v(o,r,r.pendingProps,r.type,void 0,ze);break;case 11:r=$v(o,r,r.pendingProps,r.type.render,r.ref,ze);break;case 5:dp(r);default:iE(o,r),r=ke=Oy(r,ds),r=tE(o,r,ds)}i.memoizedProps=i.pendingProps,r===null?bh(i):ke=r}function So(i,r,o,u){rs=oa=null,dp(r),fo=null,Xl=0;var f=r.return;try{if(CC(i,f,r,o,ze)){yt=1,_h(i,jn(o,i.current)),ke=null;return}}catch(m){if(f!==null)throw ke=f,m;yt=1,_h(i,jn(o,i.current)),ke=null;return}r.flags&32768?(Ke||u===1?i=!0:_o||(ze&536870912)!==0?i=!1:(Qs=i=!0,(u===2||u===9||u===3||u===6)&&(u=Yn.current,u!==null&&u.tag===13&&(u.flags|=16384))),OE(r,i)):bh(r)}function bh(i){var r=i;do{if((r.flags&32768)!==0){OE(r,Qs);return}i=r.return;var o=NC(r.alternate,r,ds);if(o!==null){ke=o;return}if(r=r.sibling,r!==null){ke=r;return}ke=r=i}while(r!==null);yt===0&&(yt=5)}function OE(i,r){do{var o=OC(i.alternate,i);if(o!==null){o.flags&=32767,ke=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){ke=i;return}ke=i=o}while(i!==null);yt=6,ke=null}function DE(i,r,o,u,f,m,E,A,C){i.cancelPendingCommit=null;do Ch();while(Xt!==0);if((Xe&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=Hd,_l(i,o,m,E,A,C),i===at&&(ke=at=null,ze=0),vo=r,Xs=i,Eo=o,Yp=m,Qp=f,TE=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,HC(xr,function(){return LE(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=G.T,G.T=null,f=ae.p,ae.p=2,E=Xe,Xe|=4;try{DC(i,r,o)}finally{Xe=E,ae.p=f,G.T=u}}Xt=1,kE(),ME(),PE()}}function kE(){if(Xt===1){Xt=0;var i=Xs,r=vo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=G.T,G.T=null;var u=ae.p;ae.p=2;var f=Xe;Xe|=4;try{pE(r,i);var m=cm,E=Ey(i.containerInfo),A=m.focusedElem,C=m.selectionRange;if(E!==A&&A&&A.ownerDocument&&vy(A.ownerDocument.documentElement,A)){if(C!==null&&Vd(A)){var F=C.start,$=C.end;if($===void 0&&($=F),"selectionStart"in A)A.selectionStart=F,A.selectionEnd=Math.min($,A.value.length);else{var Z=A.ownerDocument||document,j=Z&&Z.defaultView||window;if(j.getSelection){var q=j.getSelection(),Se=A.textContent.length,_e=Math.min(C.start,Se),nt=C.end===void 0?_e:Math.min(C.end,Se);!q.extend&&_e>nt&&(E=nt,nt=_e,_e=E);var L=yy(A,_e),P=yy(A,nt);if(L&&P&&(q.rangeCount!==1||q.anchorNode!==L.node||q.anchorOffset!==L.offset||q.focusNode!==P.node||q.focusOffset!==P.offset)){var z=Z.createRange();z.setStart(L.node,L.offset),q.removeAllRanges(),_e>nt?(q.addRange(z),q.extend(P.node,P.offset)):(z.setEnd(P.node,P.offset),q.addRange(z))}}}}for(Z=[],q=A;q=q.parentNode;)q.nodeType===1&&Z.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Z.length;A++){var W=Z[A];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}Bh=!!um,cm=um=null}finally{Xe=f,ae.p=u,G.T=o}}i.current=r,Xt=2}}function ME(){if(Xt===2){Xt=0;var i=Xs,r=vo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=G.T,G.T=null;var u=ae.p;ae.p=2;var f=Xe;Xe|=4;try{cE(i,r.alternate,r)}finally{Xe=f,ae.p=u,G.T=o}}Xt=3}}function PE(){if(Xt===4||Xt===3){Xt=0,Sc();var i=Xs,r=vo,o=Eo,u=TE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Xt=5:(Xt=0,vo=Xs=null,xE(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(Ws=null),Ua(o),r=r.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(gt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=G.T,f=ae.p,ae.p=2,G.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var A=u[E];m(A.value,{componentStack:A.stack})}}finally{G.T=r,ae.p=f}}(Eo&3)!==0&&Ch(),Ii(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===$p?au++:(au=0,$p=i):au=0,ou(0)}}function xE(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,zl(r)))}function Ch(i){return kE(),ME(),PE(),LE()}function LE(){if(Xt!==5)return!1;var i=Xs,r=Yp;Yp=0;var o=Ua(Eo),u=G.T,f=ae.p;try{ae.p=32>o?32:o,G.T=null,o=Qp,Qp=null;var m=Xs,E=Eo;if(Xt=0,vo=Xs=null,Eo=0,(Xe&6)!==0)throw Error(s(331));var A=Xe;if(Xe|=4,vE(m.current),gE(m,m.current,E,o),Xe=A,ou(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(gt,m)}catch{}return!0}finally{ae.p=f,G.T=u,xE(i,r)}}function VE(i,r,o){r=jn(o,r),r=Cp(i.stateNode,r,2),i=Fs(i,r,2),i!==null&&(Gi(i,2),Ii(i))}function st(i,r,o){if(i.tag===3)VE(i,i,o);else for(;r!==null;){if(r.tag===3){VE(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ws===null||!Ws.has(u))){i=jn(o,i),o=Fv(2),u=Fs(r,o,2),u!==null&&(Hv(o,u,r,i),Gi(u,2),Ii(u));break}}r=r.return}}function Jp(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new PC;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(jp=!0,f.add(o),i=BC.bind(null,i,r,o),r.then(i,i))}function BC(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,at===i&&(ze&o)===o&&(yt===4||yt===3&&(ze&62914560)===ze&&300>Vn()-Kp?(Xe&2)===0&&To(i,0):qp|=o,yo===ze&&(yo=0)),Ii(i)}function UE(i,r){r===0&&(r=gl()),i=no(i,r),i!==null&&(Gi(i,r),Ii(i))}function zC(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),UE(i,o)}function FC(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),UE(i,o)}function HC(i,r){return Mr(i,r)}var Ih=null,Ao=null,em=!1,Nh=!1,tm=!1,pa=0;function Ii(i){i!==Ao&&i.next===null&&(Ao===null?Ih=Ao=i:Ao=Ao.next=i),Nh=!0,em||(em=!0,qC())}function ou(i,r){if(!tm&&Nh){tm=!0;do for(var o=!1,u=Ih;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,A=u.pingedLanes;m=(1<<31-sn(42|i)+1)-1,m&=f&~(E&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,HE(u,m))}else m=ze,m=Va(u,u===at?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Br(u,m)||(o=!0,HE(u,m));u=u.next}while(o);tm=!1}}function jC(){BE()}function BE(){Nh=em=!1;var i=0;pa!==0&&(ZC()&&(i=pa),pa=0);for(var r=Vn(),o=null,u=Ih;u!==null;){var f=u.next,m=zE(u,r);m===0?(u.next=null,o===null?Ih=f:o.next=f,f===null&&(Ao=o)):(o=u,(i!==0||(m&3)!==0)&&(Nh=!0)),u=f}ou(i)}function zE(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-sn(m),A=1<<E,C=f[E];C===-1?((A&o)===0||(A&u)!==0)&&(f[E]=pl(A,r)):C<=r&&(i.expiredLanes|=A),m&=~A}if(r=at,o=ze,o=Va(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&Pr(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Br(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&Pr(u),Ua(o)){case 2:case 8:o=xa;break;case 32:o=xr;break;case 268435456:o=La;break;default:o=xr}return u=FE.bind(null,i),o=Mr(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&Pr(u),i.callbackPriority=2,i.callbackNode=null,2}function FE(i,r){if(Xt!==0&&Xt!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Ch()&&i.callbackNode!==o)return null;var u=ze;return u=Va(i,i===at?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(AE(i,u,r),zE(i,Vn()),i.callbackNode!=null&&i.callbackNode===o?FE.bind(null,i):null)}function HE(i,r){if(Ch())return null;AE(i,r,!0)}function qC(){e1(function(){(Xe&6)!==0?Mr(fl,jC):BE()})}function nm(){return pa===0&&(pa=ml()),pa}function jE(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:qa(""+i)}function qE(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function GC(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=jE((f[wt]||null).action),E=u.submitter;E&&(r=(r=E[wt]||null)?jE(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var A=new Ga("action","action",null,u,f);i.push({event:A,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(pa!==0){var C=E?qE(f,E):new FormData(f);Sp(o,{pending:!0,data:C,method:f.method,action:m},null,C)}}else typeof m=="function"&&(A.preventDefault(),C=E?qE(f,E):new FormData(f),Sp(o,{pending:!0,data:C,method:f.method,action:m},m,C))},currentTarget:f}]})}}for(var im=0;im<Fd.length;im++){var sm=Fd[im],KC=sm.toLowerCase(),YC=sm[0].toUpperCase()+sm.slice(1);ii(KC,"on"+YC)}ii(Ay,"onAnimationEnd"),ii(wy,"onAnimationIteration"),ii(Ry,"onAnimationStart"),ii("dblclick","onDoubleClick"),ii("focusin","onFocus"),ii("focusout","onBlur"),ii(cC,"onTransitionRun"),ii(hC,"onTransitionStart"),ii(fC,"onTransitionCancel"),ii(by,"onTransitionEnd"),Yi("onMouseEnter",["mouseout","mouseover"]),Yi("onMouseLeave",["mouseout","mouseover"]),Yi("onPointerEnter",["pointerout","pointerover"]),Yi("onPointerLeave",["pointerout","pointerover"]),ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ti("onBeforeInput",["compositionend","keypress","textInput","paste"]),ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lu));function GE(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var A=u[E],C=A.instance,F=A.currentTarget;if(A=A.listener,C!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=F;try{m(f)}catch($){gh($)}f.currentTarget=null,m=C}else for(E=0;E<u.length;E++){if(A=u[E],C=A.instance,F=A.currentTarget,A=A.listener,C!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=F;try{m(f)}catch($){gh($)}f.currentTarget=null,m=C}}}}function Me(i,r){var o=r[vl];o===void 0&&(o=r[vl]=new Set);var u=i+"__bubble";o.has(u)||(KE(r,i,2,!1),o.add(u))}function rm(i,r,o){var u=0;r&&(u|=4),KE(o,i,u,r)}var Oh="_reactListening"+Math.random().toString(36).slice(2);function am(i){if(!i[Oh]){i[Oh]=!0,El.forEach(function(o){o!=="selectionchange"&&(QC.has(o)||rm(o,!1,i),rm(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Oh]||(r[Oh]=!0,rm("selectionchange",!1,r))}}function KE(i,r,o,u){switch(gT(r)){case 2:var f=T1;break;case 8:f=S1;break;default:f=Em}o=f.bind(null,r,o,i),f=void 0,!Fn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function om(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var A=u.stateNode.containerInfo;if(A===f)break;if(E===4)for(E=u.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;A!==null;){if(E=Ki(A),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){u=m=E;continue e}A=A.parentNode}}u=u.return}kc(function(){var F=m,$=zn(o),Z=[];e:{var j=Cy.get(i);if(j!==void 0){var q=Ga,Se=i;switch(i){case"keypress":if(vi(o)===0)break e;case"keydown":case"keyup":q=Xa;break;case"focusin":Se="focus",q=Qa;break;case"focusout":Se="blur",q=Qa;break;case"beforeblur":case"afterblur":q=Qa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=zc;break;case Ay:case wy:case Ry:q=$a;break;case by:q=Hc;break;case"scroll":case"scrollend":q=Mc;break;case"wheel":q=Za;break;case"copy":case"cut":case"paste":q=Wa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=kl;break;case"toggle":case"beforetoggle":q=qc}var _e=(r&4)!==0,nt=!_e&&(i==="scroll"||i==="scrollend"),L=_e?j!==null?j+"Capture":null:j;_e=[];for(var P=F,z;P!==null;){var W=P;if(z=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||z===null||L===null||(W=Yr(P,L),W!=null&&_e.push(uu(P,W,z))),nt)break;P=P.return}0<_e.length&&(j=new q(j,Se,null,o,$),Z.push({event:j,listeners:_e}))}}if((r&7)===0){e:{if(j=i==="mouseover"||i==="pointerover",q=i==="mouseout"||i==="pointerout",j&&o!==Wi&&(Se=o.relatedTarget||o.fromElement)&&(Ki(Se)||Se[Un]))break e;if((q||j)&&(j=$.window===$?$:(j=$.ownerDocument)?j.defaultView||j.parentWindow:window,q?(Se=o.relatedTarget||o.toElement,q=F,Se=Se?Ki(Se):null,Se!==null&&(nt=l(Se),_e=Se.tag,Se!==nt||_e!==5&&_e!==27&&_e!==6)&&(Se=null)):(q=null,Se=F),q!==Se)){if(_e=Hn,W="onMouseLeave",L="onMouseEnter",P="mouse",(i==="pointerout"||i==="pointerover")&&(_e=kl,W="onPointerLeave",L="onPointerEnter",P="pointer"),nt=q==null?j:mi(q),z=Se==null?j:mi(Se),j=new _e(W,P+"leave",q,o,$),j.target=nt,j.relatedTarget=z,W=null,Ki($)===F&&(_e=new _e(L,P+"enter",Se,o,$),_e.target=z,_e.relatedTarget=nt,W=_e),nt=W,q&&Se)t:{for(_e=q,L=Se,P=0,z=_e;z;z=wo(z))P++;for(z=0,W=L;W;W=wo(W))z++;for(;0<P-z;)_e=wo(_e),P--;for(;0<z-P;)L=wo(L),z--;for(;P--;){if(_e===L||L!==null&&_e===L.alternate)break t;_e=wo(_e),L=wo(L)}_e=null}else _e=null;q!==null&&YE(Z,j,q,_e,!1),Se!==null&&nt!==null&&YE(Z,nt,Se,_e,!0)}}e:{if(j=F?mi(F):window,q=j.nodeName&&j.nodeName.toLowerCase(),q==="select"||q==="input"&&j.type==="file")var fe=fy;else if(kt(j))if(dy)fe=oC;else{fe=rC;var De=sC}else q=j.nodeName,!q||q.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?F&&Rl(F.elementType)&&(fe=fy):fe=aC;if(fe&&(fe=fe(i,F))){ts(Z,fe,o,$);break e}De&&De(i,j,F),i==="focusout"&&F&&j.type==="number"&&F.memoizedProps.value!=null&&Ls(j,"number",j.value)}switch(De=F?mi(F):window,i){case"focusin":(kt(De)||De.contentEditable==="true")&&(Ja=De,Ud=F,xl=null);break;case"focusout":xl=Ud=Ja=null;break;case"mousedown":Bd=!0;break;case"contextmenu":case"mouseup":case"dragend":Bd=!1,Ty(Z,o,$);break;case"selectionchange":if(uC)break;case"keydown":case"keyup":Ty(Z,o,$)}var pe;if(Si)e:{switch(i){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Ue?K(i,o)&&(ve="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(ve="onCompositionStart");ve&&(v&&o.locale!=="ko"&&(Ue||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ue&&(pe=Cl()):(yi=$,Vs="value"in yi?yi.value:yi.textContent,Ue=!0)),De=Dh(F,ve),0<De.length&&(ve=new Ol(ve,i,null,o,$),Z.push({event:ve,listeners:De}),pe?ve.data=pe:(pe=re(o),pe!==null&&(ve.data=pe)))),(pe=_?Dt(i,o):Be(i,o))&&(ve=Dh(F,"onBeforeInput"),0<ve.length&&(De=new Ol("onBeforeInput","beforeinput",null,o,$),Z.push({event:De,listeners:ve}),De.data=pe)),GC(Z,i,F,o,$)}GE(Z,r)})}function uu(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Dh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Yr(i,o),f!=null&&u.unshift(uu(i,f,m)),f=Yr(i,r),f!=null&&u.push(uu(i,f,m))),i.tag===3)return u;i=i.return}return[]}function wo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function YE(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var A=o,C=A.alternate,F=A.stateNode;if(A=A.tag,C!==null&&C===u)break;A!==5&&A!==26&&A!==27||F===null||(C=F,f?(F=Yr(o,m),F!=null&&E.unshift(uu(o,F,C))):f||(F=Yr(o,m),F!=null&&E.push(uu(o,F,C)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var $C=/\r\n?/g,WC=/\u0000|\uFFFD/g;function QE(i){return(typeof i=="string"?i:""+i).replace($C,`
`).replace(WC,"")}function $E(i,r){return r=QE(r),QE(i)===r}function kh(){}function tt(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Bn(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Bn(i,""+u);break;case"className":gi(i,"class",u);break;case"tabIndex":gi(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":gi(i,o,u);break;case"style":wl(i,u,m);break;case"data":if(r!=="object"){gi(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=qa(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&tt(i,r,"name",f.name,f,null),tt(i,r,"formEncType",f.formEncType,f,null),tt(i,r,"formMethod",f.formMethod,f,null),tt(i,r,"formTarget",f.formTarget,f,null)):(tt(i,r,"encType",f.encType,f,null),tt(i,r,"method",f.method,f,null),tt(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=qa(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=kh);break;case"onScroll":u!=null&&Me("scroll",i);break;case"onScrollEnd":u!=null&&Me("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=qa(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":Me("beforetoggle",i),Me("toggle",i),xs(i,"popover",u);break;case"xlinkActuate":Qt(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Qt(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Qt(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Qt(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Qt(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Qt(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Qt(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Qt(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Qt(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":xs(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Dd.get(o)||o,xs(i,o,u))}}function lm(i,r,o,u,f,m){switch(o){case"style":wl(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?Bn(i,u):(typeof u=="number"||typeof u=="bigint")&&Bn(i,""+u);break;case"onScroll":u!=null&&Me("scroll",i);break;case"onScrollEnd":u!=null&&Me("scrollend",i);break;case"onClick":u!=null&&(i.onclick=kh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ba.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[wt]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):xs(i,o,u)}}}function Zt(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",i),Me("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:tt(i,r,m,E,o,null)}}f&&tt(i,r,"srcSet",o.srcSet,o,null),u&&tt(i,r,"src",o.src,o,null);return;case"input":Me("invalid",i);var A=m=E=f=null,C=null,F=null;for(u in o)if(o.hasOwnProperty(u)){var $=o[u];if($!=null)switch(u){case"name":f=$;break;case"type":E=$;break;case"checked":C=$;break;case"defaultChecked":F=$;break;case"value":m=$;break;case"defaultValue":A=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,r));break;default:tt(i,r,u,$,o,null)}}qr(i,m,A,C,F,E,f,!1),ja(i);return;case"select":Me("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":E=A;break;case"multiple":u=A;default:tt(i,r,f,A,o,null)}r=m,o=E,i.multiple=!!u,r!=null?$i(i,!!u,r,!1):o!=null&&$i(i,!!u,o,!0);return;case"textarea":Me("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(A=o[E],A!=null))switch(E){case"value":u=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:tt(i,r,E,A,o,null)}Gr(i,u,f,m),ja(i);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:tt(i,r,C,u,o,null)}return;case"dialog":Me("beforetoggle",i),Me("toggle",i),Me("cancel",i),Me("close",i);break;case"iframe":case"object":Me("load",i);break;case"video":case"audio":for(u=0;u<lu.length;u++)Me(lu[u],i);break;case"image":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"embed":case"source":case"link":Me("error",i),Me("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in o)if(o.hasOwnProperty(F)&&(u=o[F],u!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:tt(i,r,F,u,o,null)}return;default:if(Rl(r)){for($ in o)o.hasOwnProperty($)&&(u=o[$],u!==void 0&&lm(i,r,$,u,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(u=o[A],u!=null&&tt(i,r,A,u,o,null))}function XC(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,A=null,C=null,F=null,$=null;for(q in o){var Z=o[q];if(o.hasOwnProperty(q)&&Z!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":C=Z;default:u.hasOwnProperty(q)||tt(i,r,q,null,u,Z)}}for(var j in u){var q=u[j];if(Z=o[j],u.hasOwnProperty(j)&&(q!=null||Z!=null))switch(j){case"type":m=q;break;case"name":f=q;break;case"checked":F=q;break;case"defaultChecked":$=q;break;case"value":E=q;break;case"defaultValue":A=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:q!==Z&&tt(i,r,j,q,u,Z)}}Rn(i,E,A,C,F,$,m,f);return;case"select":q=E=A=j=null;for(m in o)if(C=o[m],o.hasOwnProperty(m)&&C!=null)switch(m){case"value":break;case"multiple":q=C;default:u.hasOwnProperty(m)||tt(i,r,m,null,u,C)}for(f in u)if(m=u[f],C=o[f],u.hasOwnProperty(f)&&(m!=null||C!=null))switch(f){case"value":j=m;break;case"defaultValue":A=m;break;case"multiple":E=m;default:m!==C&&tt(i,r,f,m,u,C)}r=A,o=E,u=q,j!=null?$i(i,!!o,j,!1):!!u!=!!o&&(r!=null?$i(i,!!o,r,!0):$i(i,!!o,o?[]:"",!1));return;case"textarea":q=j=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!u.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:tt(i,r,A,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":j=f;break;case"defaultValue":q=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&tt(i,r,E,f,u,m)}Je(i,j,q);return;case"option":for(var Se in o)if(j=o[Se],o.hasOwnProperty(Se)&&j!=null&&!u.hasOwnProperty(Se))switch(Se){case"selected":i.selected=!1;break;default:tt(i,r,Se,null,u,j)}for(C in u)if(j=u[C],q=o[C],u.hasOwnProperty(C)&&j!==q&&(j!=null||q!=null))switch(C){case"selected":i.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:tt(i,r,C,j,u,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in o)j=o[_e],o.hasOwnProperty(_e)&&j!=null&&!u.hasOwnProperty(_e)&&tt(i,r,_e,null,u,j);for(F in u)if(j=u[F],q=o[F],u.hasOwnProperty(F)&&j!==q&&(j!=null||q!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,r));break;default:tt(i,r,F,j,u,q)}return;default:if(Rl(r)){for(var nt in o)j=o[nt],o.hasOwnProperty(nt)&&j!==void 0&&!u.hasOwnProperty(nt)&&lm(i,r,nt,void 0,u,j);for($ in u)j=u[$],q=o[$],!u.hasOwnProperty($)||j===q||j===void 0&&q===void 0||lm(i,r,$,j,u,q);return}}for(var L in o)j=o[L],o.hasOwnProperty(L)&&j!=null&&!u.hasOwnProperty(L)&&tt(i,r,L,null,u,j);for(Z in u)j=u[Z],q=o[Z],!u.hasOwnProperty(Z)||j===q||j==null&&q==null||tt(i,r,Z,j,u,q)}var um=null,cm=null;function Mh(i){return i.nodeType===9?i:i.ownerDocument}function WE(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function XE(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function hm(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var fm=null;function ZC(){var i=window.event;return i&&i.type==="popstate"?i===fm?!1:(fm=i,!0):(fm=null,!1)}var ZE=typeof setTimeout=="function"?setTimeout:void 0,JC=typeof clearTimeout=="function"?clearTimeout:void 0,JE=typeof Promise=="function"?Promise:void 0,e1=typeof queueMicrotask=="function"?queueMicrotask:typeof JE<"u"?function(i){return JE.resolve(null).then(i).catch(t1)}:ZE;function t1(i){setTimeout(function(){throw i})}function Js(i){return i==="head"}function eT(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&cu(E.documentElement),o&2&&cu(E.body),o&4)for(o=E.head,cu(o),E=o.firstChild;E;){var A=E.nextSibling,C=E.nodeName;E[zr]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=A}}if(f===0){i.removeChild(m),yu(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);yu(r)}function dm(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":dm(o),Ps(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function n1(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[zr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=ri(i.nextSibling),i===null)break}return null}function i1(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=ri(i.nextSibling),i===null))return null;return i}function pm(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function s1(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function ri(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var mm=null;function tT(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function nT(i,r,o){switch(r=Mh(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function cu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Ps(i)}var $n=new Map,iT=new Set;function Ph(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var ps=ae.d;ae.d={f:r1,r:a1,D:o1,C:l1,L:u1,m:c1,X:f1,S:h1,M:d1};function r1(){var i=ps.f(),r=Rh();return i||r}function a1(i){var r=pi(i);r!==null&&r.tag===5&&r.type==="form"?Av(r):ps.r(i)}var Ro=typeof document>"u"?null:document;function sT(i,r,o){var u=Ro;if(u&&typeof r=="string"&&r){var f=Rt(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),iT.has(f)||(iT.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),Zt(r,"link",i),Et(r),u.head.appendChild(r)))}}function o1(i){ps.D(i),sT("dns-prefetch",i,null)}function l1(i,r){ps.C(i,r),sT("preconnect",i,r)}function u1(i,r,o){ps.L(i,r,o);var u=Ro;if(u&&i&&r){var f='link[rel="preload"][as="'+Rt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Rt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Rt(o.imageSizes)+'"]')):f+='[href="'+Rt(i)+'"]';var m=f;switch(r){case"style":m=bo(i);break;case"script":m=Co(i)}$n.has(m)||(i=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),$n.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(hu(m))||r==="script"&&u.querySelector(fu(m))||(r=u.createElement("link"),Zt(r,"link",i),Et(r),u.head.appendChild(r)))}}function c1(i,r){ps.m(i,r);var o=Ro;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Rt(u)+'"][href="'+Rt(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Co(i)}if(!$n.has(m)&&(i=y({rel:"modulepreload",href:i},r),$n.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(fu(m)))return}u=o.createElement("link"),Zt(u,"link",i),Et(u),o.head.appendChild(u)}}}function h1(i,r,o){ps.S(i,r,o);var u=Ro;if(u&&i){var f=pn(u).hoistableStyles,m=bo(i);r=r||"default";var E=f.get(m);if(!E){var A={loading:0,preload:null};if(E=u.querySelector(hu(m)))A.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":r},o),(o=$n.get(m))&&gm(i,o);var C=E=u.createElement("link");Et(C),Zt(C,"link",i),C._p=new Promise(function(F,$){C.onload=F,C.onerror=$}),C.addEventListener("load",function(){A.loading|=1}),C.addEventListener("error",function(){A.loading|=2}),A.loading|=4,xh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:A},f.set(m,E)}}}function f1(i,r){ps.X(i,r);var o=Ro;if(o&&i){var u=pn(o).hoistableScripts,f=Co(i),m=u.get(f);m||(m=o.querySelector(fu(f)),m||(i=y({src:i,async:!0},r),(r=$n.get(f))&&_m(i,r),m=o.createElement("script"),Et(m),Zt(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function d1(i,r){ps.M(i,r);var o=Ro;if(o&&i){var u=pn(o).hoistableScripts,f=Co(i),m=u.get(f);m||(m=o.querySelector(fu(f)),m||(i=y({src:i,async:!0,type:"module"},r),(r=$n.get(f))&&_m(i,r),m=o.createElement("script"),Et(m),Zt(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function rT(i,r,o,u){var f=(f=we.current)?Ph(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=bo(o.href),o=pn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=bo(o.href);var m=pn(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(hu(i)))&&!m._p&&(E.instance=m,E.state.loading=5),$n.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},$n.set(i,o),m||p1(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Co(o),o=pn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function bo(i){return'href="'+Rt(i)+'"'}function hu(i){return'link[rel="stylesheet"]['+i+"]"}function aT(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function p1(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),Zt(r,"link",o),Et(r),i.head.appendChild(r))}function Co(i){return'[src="'+Rt(i)+'"]'}function fu(i){return"script[async]"+i}function oT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+Rt(o.href)+'"]');if(u)return r.instance=u,Et(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),Et(u),Zt(u,"style",f),xh(u,o.precedence,i),r.instance=u;case"stylesheet":f=bo(o.href);var m=i.querySelector(hu(f));if(m)return r.state.loading|=4,r.instance=m,Et(m),m;u=aT(o),(f=$n.get(f))&&gm(u,f),m=(i.ownerDocument||i).createElement("link"),Et(m);var E=m;return E._p=new Promise(function(A,C){E.onload=A,E.onerror=C}),Zt(m,"link",u),r.state.loading|=4,xh(m,o.precedence,i),r.instance=m;case"script":return m=Co(o.src),(f=i.querySelector(fu(m)))?(r.instance=f,Et(f),f):(u=o,(f=$n.get(m))&&(u=y({},o),_m(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),Et(f),Zt(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,xh(u,o.precedence,i));return r.instance}function xh(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var A=u[E];if(A.dataset.precedence===r)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function gm(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function _m(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var Lh=null;function lT(i,r,o){if(Lh===null){var u=new Map,f=Lh=new Map;f.set(o,u)}else f=Lh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[zr]||m[Ot]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var A=u.get(E);A?A.push(m):u.set(E,[m])}}return u}function uT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function m1(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function cT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var du=null;function g1(){}function _1(i,r,o){if(du===null)throw Error(s(475));var u=du;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=bo(o.href),m=i.querySelector(hu(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=Vh.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,Et(m);return}m=i.ownerDocument||i,o=aT(o),(f=$n.get(f))&&gm(o,f),m=m.createElement("link"),Et(m);var E=m;E._p=new Promise(function(A,C){E.onload=A,E.onerror=C}),Zt(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=Vh.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function y1(){if(du===null)throw Error(s(475));var i=du;return i.stylesheets&&i.count===0&&ym(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&ym(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function Vh(){if(this.count--,this.count===0){if(this.stylesheets)ym(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Uh=null;function ym(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Uh=new Map,r.forEach(v1,i),Uh=null,Vh.call(i))}function v1(i,r){if(!(r.state.loading&4)){var o=Uh.get(i);if(o)var u=o.get(null);else{o=new Map,Uh.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=Vh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var pu={$$typeof:te,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function E1(i,r,o,u,f,m,E,A){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qi(0),this.hiddenUpdates=qi(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function hT(i,r,o,u,f,m,E,A,C,F,$,Z){return i=new E1(i,r,o,E,A,C,F,Z),r=1,m===!0&&(r|=24),m=Cn(3,null,null,r),i.current=m,m.stateNode=i,r=Jd(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},ip(m),i}function fT(i){return i?(i=io,i):io}function dT(i,r,o,u,f,m){f=fT(f),u.context===null?u.context=f:u.pendingContext=f,u=zs(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Fs(i,u,r),o!==null&&(kn(o,i,r),ql(o,i,r))}function pT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function vm(i,r){pT(i,r),(i=i.alternate)&&pT(i,r)}function mT(i){if(i.tag===13){var r=no(i,67108864);r!==null&&kn(r,i,67108864),vm(i,67108864)}}var Bh=!0;function T1(i,r,o,u){var f=G.T;G.T=null;var m=ae.p;try{ae.p=2,Em(i,r,o,u)}finally{ae.p=m,G.T=f}}function S1(i,r,o,u){var f=G.T;G.T=null;var m=ae.p;try{ae.p=8,Em(i,r,o,u)}finally{ae.p=m,G.T=f}}function Em(i,r,o,u){if(Bh){var f=Tm(u);if(f===null)om(i,r,u,zh,o),_T(i,u);else if(w1(f,i,r,o,u))u.stopPropagation();else if(_T(i,u),r&4&&-1<A1.indexOf(i)){for(;f!==null;){var m=pi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=ei(m.pendingLanes);if(E!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var C=1<<31-sn(E);A.entanglements[1]|=C,E&=~C}Ii(m),(Xe&6)===0&&(Ah=Vn()+500,ou(0))}}break;case 13:A=no(m,2),A!==null&&kn(A,m,2),Rh(),vm(m,2)}if(m=Tm(u),m===null&&om(i,r,u,zh,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else om(i,r,u,null,o)}}function Tm(i){return i=zn(i),Sm(i)}var zh=null;function Sm(i){if(zh=null,i=Ki(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return zh=i,null}function gT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rd()){case fl:return 2;case xa:return 8;case xr:case bd:return 32;case La:return 268435456;default:return 32}default:return 32}}var Am=!1,er=null,tr=null,nr=null,mu=new Map,gu=new Map,ir=[],A1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _T(i,r){switch(i){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":mu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":gu.delete(r.pointerId)}}function _u(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=pi(r),r!==null&&mT(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function w1(i,r,o,u,f){switch(r){case"focusin":return er=_u(er,i,r,o,u,f),!0;case"dragenter":return tr=_u(tr,i,r,o,u,f),!0;case"mouseover":return nr=_u(nr,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return mu.set(m,_u(mu.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,gu.set(m,_u(gu.get(m)||null,i,r,o,u,f)),!0}return!1}function yT(i){var r=Ki(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Rc(i.priority,function(){if(o.tag===13){var u=Dn();u=Ds(u);var f=no(o,u);f!==null&&kn(f,o,u),vm(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Fh(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Tm(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);Wi=u,o.target.dispatchEvent(u),Wi=null}else return r=pi(o),r!==null&&mT(r),i.blockedOn=o,!1;r.shift()}return!0}function vT(i,r,o){Fh(i)&&o.delete(r)}function R1(){Am=!1,er!==null&&Fh(er)&&(er=null),tr!==null&&Fh(tr)&&(tr=null),nr!==null&&Fh(nr)&&(nr=null),mu.forEach(vT),gu.forEach(vT)}function Hh(i,r){i.blockedOn===r&&(i.blockedOn=null,Am||(Am=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,R1)))}var jh=null;function ET(i){jh!==i&&(jh=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){jh===i&&(jh=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(Sm(u||o)===null)continue;break}var m=pi(o);m!==null&&(i.splice(r,3),r-=3,Sp(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function yu(i){function r(C){return Hh(C,i)}er!==null&&Hh(er,i),tr!==null&&Hh(tr,i),nr!==null&&Hh(nr,i),mu.forEach(r),gu.forEach(r);for(var o=0;o<ir.length;o++){var u=ir[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<ir.length&&(o=ir[0],o.blockedOn===null);)yT(o),o.blockedOn===null&&ir.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[wt]||null;if(typeof m=="function")E||ET(o);else if(E){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[wt]||null)A=E.formAction;else if(Sm(f)!==null)continue}else A=E.action;typeof A=="function"?o[u+1]=A:(o.splice(u,3),u-=3),ET(o)}}}function wm(i){this._internalRoot=i}qh.prototype.render=wm.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Dn();dT(o,u,i,r,null,null)},qh.prototype.unmount=wm.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;dT(i.current,2,null,i,null,null),Rh(),r[Un]=null}};function qh(i){this._internalRoot=i}qh.prototype.unstable_scheduleHydration=function(i){if(i){var r=ks();i={blockedOn:null,target:i,priority:r};for(var o=0;o<ir.length&&r!==0&&r<ir[o].priority;o++);ir.splice(o,0,i),o===0&&yT(i)}};var TT=e.version;if(TT!=="19.1.0")throw Error(s(527,TT,"19.1.0"));ae.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var b1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gh.isDisabled&&Gh.supportsFiber)try{gt=Gh.inject(b1),We=Gh}catch{}}return Eu.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=Vv,m=Uv,E=Bv,A=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks)),r=hT(i,1,!1,null,null,o,u,f,m,E,A,null),i[Un]=r.current,am(i),new wm(r)},Eu.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=Vv,E=Uv,A=Bv,C=null,F=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(F=o.formState)),r=hT(i,1,!0,r,o??null,u,f,m,E,A,C,F),r.context=fT(null),o=r.current,u=Dn(),u=Ds(u),f=zs(u),f.callback=null,Fs(o,f,u),o=u,r.current.lanes=o,Gi(r,o),Ii(r),i[Un]=r.current,am(i),new qh(r)},Eu.version="19.1.0",Eu}var DT;function L1(){if(DT)return Cm.exports;DT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Cm.exports=x1(),Cm.exports}var V1=L1();const U1="modulepreload",B1=function(n){return"/AcadComponent/"+n},kT={},Na=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){let c=function(g){return Promise.all(g.map(y=>Promise.resolve(y).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=c(t.map(g=>{if(g=B1(g),g in kT)return;kT[g]=!0;const y=g.endsWith(".css"),T=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${T}`))return;const S=document.createElement("link");if(S.rel=y?"stylesheet":U1,y||(S.as="script"),S.crossOrigin="",S.href=g,p&&S.setAttribute("nonce",p),document.head.appendChild(S),y)return new Promise((O,I)=>{S.addEventListener("load",O),S.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${g}`)))})}))}function l(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return a.then(c=>{for(const d of c||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})},z1="_navBarWrapper_1kl1r_71",F1="_left_1kl1r_105",H1="_title_1kl1r_113",j1="_mid_1kl1r_131",q1="_Links_1kl1r_143",G1="_content_1kl1r_161",K1="_ind_1kl1r_173",Y1="_indicator_1kl1r_183",Q1="_right_1kl1r_211",$1="_authButts_1kl1r_211",W1="_HamburgerButt_1kl1r_213",X1="_signOut_1kl1r_277",Z1="_sidebar_1kl1r_303",J1="_hideSideBar_1kl1r_313",eI="_signUp_1kl1r_455",tI="_indicated_1kl1r_615",nI="_indication_1kl1r_641",qe={navBarWrapper:z1,left:F1,title:H1,mid:j1,Links:q1,content:G1,ind:K1,indicator:Y1,right:Q1,authButts:$1,HamburgerButt:W1,signOut:X1,sidebar:Z1,hideSideBar:J1,signUp:eI,indicated:tI,indication:nI};var Tu={},MT;function iI(){if(MT)return Tu;MT=1,Object.defineProperty(Tu,"__esModule",{value:!0}),Tu.parse=c,Tu.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function c(S,O){const I=new l,H=S.length;if(H<2)return I;const B=(O==null?void 0:O.decode)||y;let Q=0;do{const X=S.indexOf("=",Q);if(X===-1)break;const te=S.indexOf(";",Q),ue=te===-1?H:te;if(X>ue){Q=S.lastIndexOf(";",X-1)+1;continue}const ce=d(S,Q,X),Ee=p(S,X,ce),M=S.slice(ce,Ee);if(I[M]===void 0){let R=d(S,X+1,ue),b=p(S,ue,R);const k=B(S.slice(R,b));I[M]=k}Q=ue+1}while(Q<H);return I}function d(S,O,I){do{const H=S.charCodeAt(O);if(H!==32&&H!==9)return O}while(++O<I);return I}function p(S,O,I){for(;O>I;){const H=S.charCodeAt(--O);if(H!==32&&H!==9)return O+1}return I}function g(S,O,I){const H=(I==null?void 0:I.encode)||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const B=H(O);if(!e.test(B))throw new TypeError(`argument val is invalid: ${O}`);let Q=S+"="+B;if(!I)return Q;if(I.maxAge!==void 0){if(!Number.isInteger(I.maxAge))throw new TypeError(`option maxAge is invalid: ${I.maxAge}`);Q+="; Max-Age="+I.maxAge}if(I.domain){if(!t.test(I.domain))throw new TypeError(`option domain is invalid: ${I.domain}`);Q+="; Domain="+I.domain}if(I.path){if(!s.test(I.path))throw new TypeError(`option path is invalid: ${I.path}`);Q+="; Path="+I.path}if(I.expires){if(!T(I.expires)||!Number.isFinite(I.expires.valueOf()))throw new TypeError(`option expires is invalid: ${I.expires}`);Q+="; Expires="+I.expires.toUTCString()}if(I.httpOnly&&(Q+="; HttpOnly"),I.secure&&(Q+="; Secure"),I.partitioned&&(Q+="; Partitioned"),I.priority)switch(typeof I.priority=="string"?I.priority.toLowerCase():void 0){case"low":Q+="; Priority=Low";break;case"medium":Q+="; Priority=Medium";break;case"high":Q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${I.priority}`)}if(I.sameSite)switch(typeof I.sameSite=="string"?I.sameSite.toLowerCase():I.sameSite){case!0:case"strict":Q+="; SameSite=Strict";break;case"lax":Q+="; SameSite=Lax";break;case"none":Q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${I.sameSite}`)}return Q}function y(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function T(S){return a.call(S)==="[object Date]"}return Tu}iI();var PT="popstate";function sI(n={}){function e(s,a){let{pathname:l,search:c,hash:d}=s.location;return Jm("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:qu(a)}return aI(e,t,null,n)}function pt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Li(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rI(){return Math.random().toString(36).substring(2,10)}function xT(n,e){return{usr:n.state,key:n.key,idx:e}}function Jm(n,e,t=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Zo(e):e,state:t,key:e&&e.key||s||rI()}}function qu({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Zo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substring(s),n=n.substring(0,s)),n&&(e.pathname=n)}return e}function aI(n,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,d="POP",p=null,g=y();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function y(){return(c.state||{idx:null}).idx}function T(){d="POP";let B=y(),Q=B==null?null:B-g;g=B,p&&p({action:d,location:H.location,delta:Q})}function S(B,Q){d="PUSH";let X=Jm(H.location,B,Q);g=y()+1;let te=xT(X,g),ue=H.createHref(X);try{c.pushState(te,"",ue)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;a.location.assign(ue)}l&&p&&p({action:d,location:H.location,delta:1})}function O(B,Q){d="REPLACE";let X=Jm(H.location,B,Q);g=y();let te=xT(X,g),ue=H.createHref(X);c.replaceState(te,"",ue),l&&p&&p({action:d,location:H.location,delta:0})}function I(B){return oI(B)}let H={get action(){return d},get location(){return n(a,c)},listen(B){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(PT,T),p=B,()=>{a.removeEventListener(PT,T),p=null}},createHref(B){return e(a,B)},createURL:I,encodeLocation(B){let Q=I(B);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:S,replace:O,go(B){return c.go(B)}};return H}function oI(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),pt(t,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:qu(n);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function ZS(n,e,t="/"){return lI(n,e,t,!1)}function lI(n,e,t,s){let a=typeof e=="string"?Zo(e):e,l=Ss(a.pathname||"/",t);if(l==null)return null;let c=JS(n);uI(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=EI(l);d=yI(c[p],g,s)}return d}function JS(n,e=[],t=[],s=""){let a=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(pt(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let g=vs([s,p.relativePath]),y=t.concat(p);l.children&&l.children.length>0&&(pt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),JS(l.children,e,y,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:gI(g,l.index),routesMeta:y})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let p of eA(l.path))a(l,c,p)}),e}function eA(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=eA(s.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function uI(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:_I(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var cI=/^:[\w-]+$/,hI=3,fI=2,dI=1,pI=10,mI=-2,LT=n=>n==="*";function gI(n,e){let t=n.split("/"),s=t.length;return t.some(LT)&&(s+=mI),e&&(s+=fI),t.filter(a=>!LT(a)).reduce((a,l)=>a+(cI.test(l)?hI:l===""?dI:pI),s)}function _I(n,e){return n.length===e.length&&n.slice(0,-1).every((s,a)=>s===e[a])?n[n.length-1]-e[e.length-1]:0}function yI(n,e,t=!1){let{routesMeta:s}=n,a={},l="/",c=[];for(let d=0;d<s.length;++d){let p=s[d],g=d===s.length-1,y=l==="/"?e:e.slice(l.length)||"/",T=mf({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},y),S=p.route;if(!T&&g&&t&&!s[s.length-1].route.index&&(T=mf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!T)return null;Object.assign(a,T.params),c.push({params:a,pathname:vs([l,T.pathname]),pathnameBase:wI(vs([l,T.pathnameBase])),route:S}),T.pathnameBase!=="/"&&(l=vs([l,T.pathnameBase]))}return c}function mf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=vI(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:s.reduce((g,{paramName:y,isOptional:T},S)=>{if(y==="*"){let I=d[S]||"";c=l.slice(0,l.length-I.length).replace(/(.)\/+$/,"$1")}const O=d[S];return T&&!O?g[y]=void 0:g[y]=(O||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:n}}function vI(n,e=!1,t=!0){Li(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(s.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function EI(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Li(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ss(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}function TI(n,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof n=="string"?Zo(n):n;return{pathname:t?t.startsWith("/")?t:SI(t,e):e,search:RI(s),hash:bI(a)}}function SI(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Dm(n,e,t,s){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function AI(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function tA(n){let e=AI(n);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function nA(n,e,t,s=!1){let a;typeof n=="string"?a=Zo(n):(a={...n},pt(!a.pathname||!a.pathname.includes("?"),Dm("?","pathname","search",a)),pt(!a.pathname||!a.pathname.includes("#"),Dm("#","pathname","hash",a)),pt(!a.search||!a.search.includes("#"),Dm("#","search","hash",a)));let l=n===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!s&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),T-=1;a.pathname=S.join("/")}d=T>=0?e[T]:"/"}let p=TI(a,d),g=c&&c!=="/"&&c.endsWith("/"),y=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(g||y)&&(p.pathname+="/"),p}var vs=n=>n.join("/").replace(/\/\/+/g,"/"),wI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),RI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,bI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function CI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var iA=["POST","PUT","PATCH","DELETE"];new Set(iA);var II=["GET",...iA];new Set(II);var Jo=Y.createContext(null);Jo.displayName="DataRouter";var Qf=Y.createContext(null);Qf.displayName="DataRouterState";var sA=Y.createContext({isTransitioning:!1});sA.displayName="ViewTransition";var NI=Y.createContext(new Map);NI.displayName="Fetchers";var OI=Y.createContext(null);OI.displayName="Await";var zi=Y.createContext(null);zi.displayName="Navigation";var ic=Y.createContext(null);ic.displayName="Location";var Is=Y.createContext({outlet:null,matches:[],isDataRoute:!1});Is.displayName="Route";var Hg=Y.createContext(null);Hg.displayName="RouteError";function DI(n,{relative:e}={}){pt(sc(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=Y.useContext(zi),{hash:a,pathname:l,search:c}=rc(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:vs([t,l])),s.createHref({pathname:d,search:c,hash:a})}function sc(){return Y.useContext(ic)!=null}function Oa(){return pt(sc(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(ic).location}var rA="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function aA(n){Y.useContext(zi).static||Y.useLayoutEffect(n)}function jg(){let{isDataRoute:n}=Y.useContext(Is);return n?qI():kI()}function kI(){pt(sc(),"useNavigate() may be used only in the context of a <Router> component.");let n=Y.useContext(Jo),{basename:e,navigator:t}=Y.useContext(zi),{matches:s}=Y.useContext(Is),{pathname:a}=Oa(),l=JSON.stringify(tA(s)),c=Y.useRef(!1);return aA(()=>{c.current=!0}),Y.useCallback((p,g={})=>{if(Li(c.current,rA),!c.current)return;if(typeof p=="number"){t.go(p);return}let y=nA(p,JSON.parse(l),a,g.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:vs([e,y.pathname])),(g.replace?t.replace:t.push)(y,g.state,g)},[e,t,l,a,n])}Y.createContext(null);function rc(n,{relative:e}={}){let{matches:t}=Y.useContext(Is),{pathname:s}=Oa(),a=JSON.stringify(tA(t));return Y.useMemo(()=>nA(n,JSON.parse(a),s,e==="path"),[n,a,s,e])}function MI(n,e){return oA(n,e)}function oA(n,e,t,s){var Q;pt(sc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=Y.useContext(zi),{matches:l}=Y.useContext(Is),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",g=c?c.pathnameBase:"/",y=c&&c.route;{let X=y&&y.path||"";lA(p,!y||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let T=Oa(),S;if(e){let X=typeof e=="string"?Zo(e):e;pt(g==="/"||((Q=X.pathname)==null?void 0:Q.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${X.pathname}" was given in the \`location\` prop.`),S=X}else S=T;let O=S.pathname||"/",I=O;if(g!=="/"){let X=g.replace(/^\//,"").split("/");I="/"+O.replace(/^\//,"").split("/").slice(X.length).join("/")}let H=ZS(n,{pathname:I});Li(y||H!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Li(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=UI(H&&H.map(X=>Object.assign({},X,{params:Object.assign({},d,X.params),pathname:vs([g,a.encodeLocation?a.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?g:vs([g,a.encodeLocation?a.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),l,t,s);return e&&B?Y.createElement(ic.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},B):B}function PI(){let n=jI(),e=CI(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:l},"ErrorBoundary")," or"," ",Y.createElement("code",{style:l},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:a},t):null,c)}var xI=Y.createElement(PI,null),LI=class extends Y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?Y.createElement(Is.Provider,{value:this.props.routeContext},Y.createElement(Hg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function VI({routeContext:n,match:e,children:t}){let s=Y.useContext(Jo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),Y.createElement(Is.Provider,{value:n},t)}function UI(n,e=[],t=null,s=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,l=t==null?void 0:t.errors;if(l!=null){let p=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);pt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:y,errors:T}=t,S=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||S){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,g,y)=>{let T,S=!1,O=null,I=null;t&&(T=l&&g.route.id?l[g.route.id]:void 0,O=g.route.errorElement||xI,c&&(d<0&&y===0?(lA("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,I=null):d===y&&(S=!0,I=g.route.hydrateFallbackElement||null)));let H=e.concat(a.slice(0,y+1)),B=()=>{let Q;return T?Q=O:S?Q=I:g.route.Component?Q=Y.createElement(g.route.Component,null):g.route.element?Q=g.route.element:Q=p,Y.createElement(VI,{match:g,routeContext:{outlet:p,matches:H,isDataRoute:t!=null},children:Q})};return t&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?Y.createElement(LI,{location:t.location,revalidation:t.revalidation,component:O,error:T,children:B(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):B()},null)}function qg(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function BI(n){let e=Y.useContext(Jo);return pt(e,qg(n)),e}function zI(n){let e=Y.useContext(Qf);return pt(e,qg(n)),e}function FI(n){let e=Y.useContext(Is);return pt(e,qg(n)),e}function Gg(n){let e=FI(n),t=e.matches[e.matches.length-1];return pt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function HI(){return Gg("useRouteId")}function jI(){var s;let n=Y.useContext(Hg),e=zI("useRouteError"),t=Gg("useRouteError");return n!==void 0?n:(s=e.errors)==null?void 0:s[t]}function qI(){let{router:n}=BI("useNavigate"),e=Gg("useNavigate"),t=Y.useRef(!1);return aA(()=>{t.current=!0}),Y.useCallback(async(a,l={})=>{Li(t.current,rA),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...l}))},[n,e])}var VT={};function lA(n,e,t){!e&&!VT[n]&&(VT[n]=!0,Li(!1,t))}Y.memo(GI);function GI({routes:n,future:e,state:t}){return oA(n,void 0,t,e)}function uA(n){pt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function KI({basename:n="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1}){pt(!sc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=Y.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof t=="string"&&(t=Zo(t));let{pathname:p="/",search:g="",hash:y="",state:T=null,key:S="default"}=t,O=Y.useMemo(()=>{let I=Ss(p,c);return I==null?null:{location:{pathname:I,search:g,hash:y,state:T,key:S},navigationType:s}},[c,p,g,y,T,S,s]);return Li(O!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:Y.createElement(zi.Provider,{value:d},Y.createElement(ic.Provider,{children:e,value:O}))}function YI({children:n,location:e}){return MI(eg(n),e)}function eg(n,e=[]){let t=[];return Y.Children.forEach(n,(s,a)=>{if(!Y.isValidElement(s))return;let l=[...e,a];if(s.type===Y.Fragment){t.push.apply(t,eg(s.props.children,l));return}pt(s.type===uA,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),pt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=eg(s.props.children,l)),t.push(c)}),t}var nf="get",sf="application/x-www-form-urlencoded";function $f(n){return n!=null&&typeof n.tagName=="string"}function QI(n){return $f(n)&&n.tagName.toLowerCase()==="button"}function $I(n){return $f(n)&&n.tagName.toLowerCase()==="form"}function WI(n){return $f(n)&&n.tagName.toLowerCase()==="input"}function XI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ZI(n,e){return n.button===0&&(!e||e==="_self")&&!XI(n)}var Kh=null;function JI(){if(Kh===null)try{new FormData(document.createElement("form"),0),Kh=!1}catch{Kh=!0}return Kh}var eN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function km(n){return n!=null&&!eN.has(n)?(Li(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sf}"`),null):n}function tN(n,e){let t,s,a,l,c;if($I(n)){let d=n.getAttribute("action");s=d?Ss(d,e):null,t=n.getAttribute("method")||nf,a=km(n.getAttribute("enctype"))||sf,l=new FormData(n)}else if(QI(n)||WI(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(s=p?Ss(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||nf,a=km(n.getAttribute("formenctype"))||km(d.getAttribute("enctype"))||sf,l=new FormData(d,n),!JI()){let{name:g,type:y,value:T}=n;if(y==="image"){let S=g?`${g}.`:"";l.append(`${S}x`,"0"),l.append(`${S}y`,"0")}else g&&l.append(g,T)}}else{if($f(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=nf,s=null,a=sf,c=n}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}function Kg(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function nN(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iN(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function sN(n,e,t){let s=await Promise.all(n.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await nN(l,t);return c.links?c.links():[]}return[]}));return lN(s.flat(1).filter(iN).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function UT(n,e,t,s,a,l){let c=(p,g)=>t[g]?p.route.id!==t[g].route.id:!0,d=(p,g)=>{var y;return t[g].pathname!==p.pathname||((y=t[g].route.path)==null?void 0:y.endsWith("*"))&&t[g].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?e.filter((p,g)=>{var T;let y=s.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function rN(n,e,{includeHydrateFallback:t}={}){return aN(n.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function aN(n){return[...new Set(n)]}function oN(n){let e={},t=Object.keys(n).sort();for(let s of t)e[s]=n[s];return e}function lN(n,e){let t=new Set;return new Set(e),n.reduce((s,a)=>{let l=JSON.stringify(oN(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var uN=new Set([100,101,204,205]);function cN(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Ss(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function cA(){let n=Y.useContext(Jo);return Kg(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function hN(){let n=Y.useContext(Qf);return Kg(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Yg=Y.createContext(void 0);Yg.displayName="FrameworkContext";function hA(){let n=Y.useContext(Yg);return Kg(n,"You must render this element inside a <HydratedRouter> element"),n}function fN(n,e){let t=Y.useContext(Yg),[s,a]=Y.useState(!1),[l,c]=Y.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:y,onTouchStart:T}=e,S=Y.useRef(null);Y.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let H=Q=>{Q.forEach(X=>{c(X.isIntersecting)})},B=new IntersectionObserver(H,{threshold:.5});return S.current&&B.observe(S.current),()=>{B.disconnect()}}},[n]),Y.useEffect(()=>{if(s){let H=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(H)}}},[s]);let O=()=>{a(!0)},I=()=>{a(!1),c(!1)};return t?n!=="intent"?[l,S,{}]:[l,S,{onFocus:Su(d,O),onBlur:Su(p,I),onMouseEnter:Su(g,O),onMouseLeave:Su(y,I),onTouchStart:Su(T,O)}]:[!1,S,{}]}function Su(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function dN({page:n,...e}){let{router:t}=cA(),s=Y.useMemo(()=>ZS(t.routes,n,t.basename),[t.routes,n,t.basename]);return s?Y.createElement(mN,{page:n,matches:s,...e}):null}function pN(n){let{manifest:e,routeModules:t}=hA(),[s,a]=Y.useState([]);return Y.useEffect(()=>{let l=!1;return sN(n,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[n,e,t]),s}function mN({page:n,matches:e,...t}){let s=Oa(),{manifest:a,routeModules:l}=hA(),{basename:c}=cA(),{loaderData:d,matches:p}=hN(),g=Y.useMemo(()=>UT(n,e,p,a,s,"data"),[n,e,p,a,s]),y=Y.useMemo(()=>UT(n,e,p,a,s,"assets"),[n,e,p,a,s]),T=Y.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let I=new Set,H=!1;if(e.forEach(Q=>{var te;let X=a.routes[Q.route.id];!X||!X.hasLoader||(!g.some(ue=>ue.route.id===Q.route.id)&&Q.route.id in d&&((te=l[Q.route.id])!=null&&te.shouldRevalidate)||X.hasClientLoader?H=!0:I.add(Q.route.id))}),I.size===0)return[];let B=cN(n,c);return H&&I.size>0&&B.searchParams.set("_routes",e.filter(Q=>I.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[B.pathname+B.search]},[c,d,s,a,g,e,n,l]),S=Y.useMemo(()=>rN(y,a),[y,a]),O=pN(y);return Y.createElement(Y.Fragment,null,T.map(I=>Y.createElement("link",{key:I,rel:"prefetch",as:"fetch",href:I,...t})),S.map(I=>Y.createElement("link",{key:I,rel:"modulepreload",href:I,...t})),O.map(({key:I,link:H})=>Y.createElement("link",{key:I,...H})))}function gN(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var fA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{fA&&(window.__reactRouterVersion="7.6.1")}catch{}function _N({basename:n,children:e,window:t}){let s=Y.useRef();s.current==null&&(s.current=sI({window:t,v5Compat:!0}));let a=s.current,[l,c]=Y.useState({action:a.action,location:a.location}),d=Y.useCallback(p=>{Y.startTransition(()=>c(p))},[c]);return Y.useLayoutEffect(()=>a.listen(d),[a,d]),Y.createElement(KI,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:a})}var dA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ms=Y.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:y,viewTransition:T,...S},O){let{basename:I}=Y.useContext(zi),H=typeof g=="string"&&dA.test(g),B,Q=!1;if(typeof g=="string"&&H&&(B=g,fA))try{let b=new URL(window.location.href),k=g.startsWith("//")?new URL(b.protocol+g):new URL(g),x=Ss(k.pathname,I);k.origin===b.origin&&x!=null?g=x+k.search+k.hash:Q=!0}catch{Li(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=DI(g,{relative:a}),[te,ue,ce]=fN(s,S),Ee=TN(g,{replace:c,state:d,target:p,preventScrollReset:y,relative:a,viewTransition:T});function M(b){e&&e(b),b.defaultPrevented||Ee(b)}let R=Y.createElement("a",{...S,...ce,href:B||X,onClick:Q||l?e:M,ref:gN(O,ue),target:p,"data-discover":!H&&t==="render"?"true":void 0});return te&&!H?Y.createElement(Y.Fragment,null,R,Y.createElement(dN,{page:X})):R});ms.displayName="Link";var yN=Y.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...g},y){let T=rc(c,{relative:g.relative}),S=Oa(),O=Y.useContext(Qf),{navigator:I,basename:H}=Y.useContext(zi),B=O!=null&&bN(T)&&d===!0,Q=I.encodeLocation?I.encodeLocation(T).pathname:T.pathname,X=S.pathname,te=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;t||(X=X.toLowerCase(),te=te?te.toLowerCase():null,Q=Q.toLowerCase()),te&&H&&(te=Ss(te,H)||te);const ue=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let ce=X===Q||!a&&X.startsWith(Q)&&X.charAt(ue)==="/",Ee=te!=null&&(te===Q||!a&&te.startsWith(Q)&&te.charAt(Q.length)==="/"),M={isActive:ce,isPending:Ee,isTransitioning:B},R=ce?e:void 0,b;typeof s=="function"?b=s(M):b=[s,ce?"active":null,Ee?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(M):l;return Y.createElement(ms,{...g,"aria-current":R,className:b,ref:y,style:k,to:c,viewTransition:d},typeof p=="function"?p(M):p)});yN.displayName="NavLink";var vN=Y.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=nf,action:d,onSubmit:p,relative:g,preventScrollReset:y,viewTransition:T,...S},O)=>{let I=wN(),H=RN(d,{relative:g}),B=c.toLowerCase()==="get"?"get":"post",Q=typeof d=="string"&&dA.test(d),X=te=>{if(p&&p(te),te.defaultPrevented)return;te.preventDefault();let ue=te.nativeEvent.submitter,ce=(ue==null?void 0:ue.getAttribute("formmethod"))||c;I(ue||te.currentTarget,{fetcherKey:e,method:ce,navigate:t,replace:a,state:l,relative:g,preventScrollReset:y,viewTransition:T})};return Y.createElement("form",{ref:O,method:B,action:H,onSubmit:s?p:X,...S,"data-discover":!Q&&n==="render"?"true":void 0})});vN.displayName="Form";function EN(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pA(n){let e=Y.useContext(Jo);return pt(e,EN(n)),e}function TN(n,{target:e,replace:t,state:s,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=jg(),p=Oa(),g=rc(n,{relative:l});return Y.useCallback(y=>{if(ZI(y,e)){y.preventDefault();let T=t!==void 0?t:qu(p)===qu(g);d(n,{replace:T,state:s,preventScrollReset:a,relative:l,viewTransition:c})}},[p,d,g,t,s,e,n,a,l,c])}var SN=0,AN=()=>`__${String(++SN)}__`;function wN(){let{router:n}=pA("useSubmit"),{basename:e}=Y.useContext(zi),t=HI();return Y.useCallback(async(s,a={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=tN(s,e);if(a.navigate===!1){let y=a.fetcherKey||AN();await n.fetch(y,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function RN(n,{relative:e}={}){let{basename:t}=Y.useContext(zi),s=Y.useContext(Is);pt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...rc(n||".",{relative:e})},c=Oa();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(y=>y==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let y=d.toString();l.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:vs([t,l.pathname])),qu(l)}function bN(n,e={}){let t=Y.useContext(sA);pt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=pA("useViewTransitionState"),a=rc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ss(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Ss(t.nextLocation.pathname,s)||t.nextLocation.pathname;return mf(a.pathname,c)!=null||mf(a.pathname,l)!=null}[...uN];const tg=({className:n,content:e,func:t,submit:s,icon:a,change:l,element:c})=>se.jsxs("button",{className:`${n}`,onSubmit:d=>{s(d)},onClick:()=>{t()},children:[a,e,c]}),CN=()=>{const{pages:n,setPages:e,user:t,setPrevPage:s,setHideSideBar:a,hideSideBar:l,setIsSigningOut:c,changes:d,setSaveChanges:p}=Y.useContext(Tc);jg();function g(y){d&&prevPage=="/AcadComponent/Tasks"?p(!0):e(T=>T.map((S,O)=>O==y?{...S,ind:!0}:{...S,ind:!1}))}return Y.useEffect(()=>{console.log(l)},[l]),se.jsxs(se.Fragment,{children:[se.jsxs("div",{className:qe.navBarWrapper,children:[se.jsxs("div",{className:qe.left,children:[se.jsx("img",{src:"./web-icon.png"}),se.jsx("h1",{className:qe.title,children:"Acad"})]}),se.jsx("div",{className:qe.mid,children:se.jsx("ul",{children:n==null?void 0:n.map((y,T)=>se.jsxs("li",{to:y.path,className:y.ind?`${qe.ind} ${qe.Links}`:`${qe.notInd} ${qe.Links}`,onClick:()=>{g(T),s(y.path)},children:[se.jsxs("span",{className:qe.content,children:[y.icon,y.name]}),se.jsx("span",{className:qe.indicator})]},y.name))})}),t!=null&&t.uid?se.jsxs("div",{className:qe.right,children:[se.jsx(ms,{to:"/AcadComponent/Dashboard",className:qe.Links,children:se.jsx("button",{className:qe.authButts,children:"Account"})}),se.jsx("button",{className:`${qe.authButts} ${qe.signOut}`,onClick:()=>{c(!0)},children:"Log Out"}),se.jsx("button",{className:qe.HamburgerButt,onClick:()=>{a(!1)},children:se.jsx("i",{className:"fa fa-list-ul"})})]}):se.jsxs("div",{className:qe.right,children:[se.jsx(ms,{to:"/AcadComponent/SignIn",className:qe.Links,children:se.jsx("button",{className:qe.authButts,children:"Sign In"})}),se.jsx(ms,{to:"/AcadComponent/SignUp",className:qe.Links,children:se.jsx("button",{className:`${qe.authButts} ${qe.signUp}`,children:"Sign Up"})}),se.jsx("button",{className:qe.HamburgerButt,onClick:()=>{a(!1)},children:se.jsx("i",{className:"fa fa-list-ul"})})]})]}),se.jsx("div",{className:l==!1?qe.sidebar:qe.hideSideBar,children:se.jsxs("ul",{className:l==!1?qe.NavLinks:qe.hideNavLinks,children:[se.jsx(tg,{className:qe.HamburgerButt,func:()=>{a(!l)},content:se.jsx("i",{className:"fa fa-list-ul"})}),n.map((y,T)=>se.jsxs(ms,{to:y.path,onClick:()=>{g(y),s(y.path)},className:y.ind?`${qe.Links} ${qe.indicated}`:`${qe.Links} ${qe.notIndicated}`,children:[y.icon,se.jsxs("span",{children:[y.name,se.jsx("span",{className:qe.indication})]})]},y.path))]})})]})},IN="_loadingWrapper_c5yrr_15",NN="_loadingBar_c5yrr_49",BT={loadingWrapper:IN,loadingBar:NN},ON=()=>{const{loading:n}=Y.useContext(Tc);if(n)return se.jsxs("div",{className:BT.loadingWrapper,children:[se.jsx("div",{className:BT.loadingBar}),"Loading..."]})},DN=()=>se.jsx("div",{children:"PageNotFound"}),kN=()=>{};var zT={};/**
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
 */const mA={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const le=function(n,e){if(!n)throw el(e)},el=function(n){return new Error("Firebase Database ("+mA.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const gA=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},MN=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Qg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,y=l>>2,T=(l&3)<<4|d>>4;let S=(d&15)<<2|g>>6,O=g&63;p||(O=64,c||(S=64)),s.push(t[y],t[T],t[S],t[O])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(gA(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):MN(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new PN;const S=l<<2|d>>4;if(s.push(S),g!==64){const O=d<<4&240|g>>2;if(s.push(O),T!==64){const I=g<<6&192|T;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class PN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _A=function(n){const e=gA(n);return Qg.encodeByteArray(e,!0)},gf=function(n){return _A(n).replace(/\./g,"")},_f=function(n){try{return Qg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xN(n){return yA(void 0,n)}function yA(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!LN(t)||(n[t]=yA(n[t],e[t]));return n}function LN(n){return n!=="__proto__"}/**
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
 */function VN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UN=()=>VN().__FIREBASE_DEFAULTS__,BN=()=>{if(typeof process>"u"||typeof zT>"u")return;const n=zT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zN=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_f(n[1]);return e&&JSON.parse(e)},Wf=()=>{try{return kN()||UN()||BN()||zN()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},vA=n=>{var e,t;return(t=(e=Wf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},EA=n=>{const e=vA(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},TA=()=>{var n;return(n=Wf())===null||n===void 0?void 0:n.config},SA=n=>{var e;return(e=Wf())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class $g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function tl(n){return n.endsWith(".cloudworkstations.dev")}async function Wg(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function AA(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[gf(JSON.stringify(t)),gf(JSON.stringify(c)),""].join(".")}const Pu={};function FN(){const n={prod:[],emulator:[]};for(const e of Object.keys(Pu))Pu[e]?n.emulator.push(e):n.prod.push(e);return n}function HN(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let FT=!1;function Xg(n,e){if(typeof window>"u"||typeof document>"u"||!tl(window.location.host)||Pu[n]===e||Pu[n]||FT)return;Pu[n]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",l=FN().prod.length>0;function c(){const S=document.getElementById(s);S&&S.remove()}function d(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,O){S.setAttribute("width","24"),S.setAttribute("id",O),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{FT=!0,c()},S}function y(S,O){S.setAttribute("id",O),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=HN(s),O=t("text"),I=document.getElementById(O)||document.createElement("span"),H=t("learnmore"),B=document.getElementById(H)||document.createElement("a"),Q=t("preprendIcon"),X=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const te=S.element;d(te),y(B,H);const ue=g();p(X,Q),te.append(X,I,B,ue),document.body.appendChild(te)}l?(I.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(X.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function jN(){var n;const e=(n=Wf())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GN(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function wA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KN(){const n=dn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function YN(){return mA.NODE_ADMIN===!0}function QN(){return!jN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $N(){try{return typeof indexedDB=="object"}catch{return!1}}function WN(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const XN="FirebaseError";class Fi extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=XN,Object.setPrototypeOf(this,Fi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ac.prototype.create)}}class ac{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?ZN(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Fi(a,d,s)}}function ZN(n,e){return n.replace(JN,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const JN=/\{\$([^}]+)}/g;/**
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
 */function Gu(n){return JSON.parse(n)}function en(n){return JSON.stringify(n)}/**
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
 */const RA=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=Gu(_f(l[0])||""),t=Gu(_f(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},eO=function(n){const e=RA(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},tO=function(n){const e=RA(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ns(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Fo(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ng(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function yf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function _r(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(HT(l)&&HT(c)){if(!_r(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function HT(n){return n!==null&&typeof n=="object"}/**
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
 */function nl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Iu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Nu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class nO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const S=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(S<<1|S>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,y;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):T<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const S=(a<<5|a>>>27)+g+p+y+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=S}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function iO(n,e){const t=new sO(n,e);return t.subscribe.bind(t)}class sO{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");rO(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Mm),a.error===void 0&&(a.error=Mm),a.complete===void 0&&(a.complete=Mm);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rO(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Mm(){}function aO(n,e){return`${n} failed: ${e} argument `}/**
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
 */const oO=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,le(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Xf=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Yt(n){return n&&n._delegate?n._delegate:n}class As{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ma="[DEFAULT]";/**
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
 */class lO{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new $g;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cO(e))try{this.getOrInitializeService({instanceIdentifier:ma})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=ma){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ma){return this.instances.has(e)}getOptions(e=ma){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uO(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ma){return this.component?this.component.multipleInstances?e:ma:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uO(n){return n===ma?void 0:n}function cO(n){return n.instantiationMode==="EAGER"}/**
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
 */class hO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lO(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const fO={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},dO=Pe.INFO,pO={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},mO=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=pO[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zf{constructor(e){this.name=e,this._logLevel=dO,this._logHandler=mO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const gO=(n,e)=>e.some(t=>n instanceof t);let jT,qT;function _O(){return jT||(jT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yO(){return qT||(qT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bA=new WeakMap,ig=new WeakMap,CA=new WeakMap,Pm=new WeakMap,Jg=new WeakMap;function vO(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(fr(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&bA.set(t,n)}).catch(()=>{}),Jg.set(e,n),e}function EO(n){if(ig.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});ig.set(n,e)}let sg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ig.get(n);if(e==="objectStoreNames")return n.objectStoreNames||CA.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function TO(n){sg=n(sg)}function SO(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(xm(this),e,...t);return CA.set(s,e.sort?e.sort():[e]),fr(s)}:yO().includes(n)?function(...e){return n.apply(xm(this),e),fr(bA.get(this))}:function(...e){return fr(n.apply(xm(this),e))}}function AO(n){return typeof n=="function"?SO(n):(n instanceof IDBTransaction&&EO(n),gO(n,_O())?new Proxy(n,sg):n)}function fr(n){if(n instanceof IDBRequest)return vO(n);if(Pm.has(n))return Pm.get(n);const e=AO(n);return e!==n&&(Pm.set(n,e),Jg.set(e,n)),e}const xm=n=>Jg.get(n);function wO(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=fr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(fr(c.result),p.oldVersion,p.newVersion,fr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const RO=["get","getKey","getAll","getAllKeys","count"],bO=["put","add","delete","clear"],Lm=new Map;function GT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Lm.get(e))return Lm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=bO.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||RO.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return Lm.set(e,l),l}TO(n=>({...n,get:(e,t,s)=>GT(e,t)||n.get(e,t,s),has:(e,t)=>!!GT(e,t)||n.has(e,t)}));/**
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
 */class CO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(IO(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function IO(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rg="@firebase/app",KT="0.13.0";/**
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
 */const ws=new Zf("@firebase/app"),NO="@firebase/app-compat",OO="@firebase/analytics-compat",DO="@firebase/analytics",kO="@firebase/app-check-compat",MO="@firebase/app-check",PO="@firebase/auth",xO="@firebase/auth-compat",LO="@firebase/database",VO="@firebase/data-connect",UO="@firebase/database-compat",BO="@firebase/functions",zO="@firebase/functions-compat",FO="@firebase/installations",HO="@firebase/installations-compat",jO="@firebase/messaging",qO="@firebase/messaging-compat",GO="@firebase/performance",KO="@firebase/performance-compat",YO="@firebase/remote-config",QO="@firebase/remote-config-compat",$O="@firebase/storage",WO="@firebase/storage-compat",XO="@firebase/firestore",ZO="@firebase/ai",JO="@firebase/firestore-compat",eD="firebase",tD="11.8.0";/**
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
 */const ag="[DEFAULT]",nD={[rg]:"fire-core",[NO]:"fire-core-compat",[DO]:"fire-analytics",[OO]:"fire-analytics-compat",[MO]:"fire-app-check",[kO]:"fire-app-check-compat",[PO]:"fire-auth",[xO]:"fire-auth-compat",[LO]:"fire-rtdb",[VO]:"fire-data-connect",[UO]:"fire-rtdb-compat",[BO]:"fire-fn",[zO]:"fire-fn-compat",[FO]:"fire-iid",[HO]:"fire-iid-compat",[jO]:"fire-fcm",[qO]:"fire-fcm-compat",[GO]:"fire-perf",[KO]:"fire-perf-compat",[YO]:"fire-rc",[QO]:"fire-rc-compat",[$O]:"fire-gcs",[WO]:"fire-gcs-compat",[XO]:"fire-fst",[JO]:"fire-fst-compat",[ZO]:"fire-vertex","fire-js":"fire-js",[eD]:"fire-js-all"};/**
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
 */const vf=new Map,iD=new Map,og=new Map;function YT(n,e){try{n.container.addComponent(e)}catch(t){ws.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function yr(n){const e=n.name;if(og.has(e))return ws.debug(`There were multiple attempts to register component ${e}.`),!1;og.set(e,n);for(const t of vf.values())YT(t,n);for(const t of iD.values())YT(t,n);return!0}function Jf(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function yn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const sD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new ac("app","Firebase",sD);/**
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
 */class rD{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new As("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
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
 */const br=tD;function e_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ag,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw dr.create("bad-app-name",{appName:String(a)});if(t||(t=TA()),!t)throw dr.create("no-options");const l=vf.get(a);if(l){if(_r(t,l.options)&&_r(s,l.config))return l;throw dr.create("duplicate-app",{appName:a})}const c=new hO(a);for(const p of og.values())c.addComponent(p);const d=new rD(t,s,c);return vf.set(a,d),d}function t_(n=ag){const e=vf.get(n);if(!e&&n===ag&&TA())return e_();if(!e)throw dr.create("no-app",{appName:n});return e}function Xn(n,e,t){var s;let a=(s=nD[n])!==null&&s!==void 0?s:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ws.warn(d.join(" "));return}yr(new As(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const aD="firebase-heartbeat-database",oD=1,Ku="firebase-heartbeat-store";let Vm=null;function IA(){return Vm||(Vm=wO(aD,oD,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ku)}catch(t){console.warn(t)}}}}).catch(n=>{throw dr.create("idb-open",{originalErrorMessage:n.message})})),Vm}async function lD(n){try{const t=(await IA()).transaction(Ku),s=await t.objectStore(Ku).get(NA(n));return await t.done,s}catch(e){if(e instanceof Fi)ws.warn(e.message);else{const t=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ws.warn(t.message)}}}async function QT(n,e){try{const s=(await IA()).transaction(Ku,"readwrite");await s.objectStore(Ku).put(e,NA(n)),await s.done}catch(t){if(t instanceof Fi)ws.warn(t.message);else{const s=dr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ws.warn(s.message)}}}function NA(n){return`${n.name}!${n.options.appId}`}/**
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
 */const uD=1024,cD=30;class hD{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dD(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=$T();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>cD){const c=pD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ws.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$T(),{heartbeatsToSend:s,unsentEntries:a}=fD(this._heartbeatsCache.heartbeats),l=gf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return ws.warn(t),""}}}function $T(){return new Date().toISOString().substring(0,10)}function fD(n,e=uD){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),WT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),WT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class dD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $N()?WN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lD(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return QT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return QT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function WT(n){return gf(JSON.stringify({version:2,heartbeats:n})).length}function pD(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function mD(n){yr(new As("platform-logger",e=>new CO(e),"PRIVATE")),yr(new As("heartbeat",e=>new hD(e),"PRIVATE")),Xn(rg,KT,n),Xn(rg,KT,"esm2017"),Xn("fire-js","")}mD("");function n_(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(t[s[a]]=n[s[a]]);return t}function OA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gD=OA,DA=new ac("auth","Firebase",OA());/**
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
 */const Ef=new Zf("@firebase/auth");function _D(n,...e){Ef.logLevel<=Pe.WARN&&Ef.warn(`Auth (${br}): ${n}`,...e)}function rf(n,...e){Ef.logLevel<=Pe.ERROR&&Ef.error(`Auth (${br}): ${n}`,...e)}/**
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
 */function Zn(n,...e){throw s_(n,...e)}function ci(n,...e){return s_(n,...e)}function i_(n,e,t){const s=Object.assign(Object.assign({},gD()),{[e]:t});return new ac("auth","Firebase",s).create(e,{appName:n.name})}function Es(n){return i_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yD(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Zn(n,"argument-error"),i_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function s_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return DA.create(n,...e)}function Te(n,e,...t){if(!n)throw s_(e,...t)}function gs(n){const e="INTERNAL ASSERTION FAILED: "+n;throw rf(e),new Error(e)}function Rs(n,e){n||gs(e)}/**
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
 */function lg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function vD(){return XT()==="http:"||XT()==="https:"}function XT(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ED(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vD()||GN()||"connection"in navigator)?navigator.onLine:!0}function TD(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class oc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rs(t>e,"Short delay should be less than long delay!"),this.isMobile=Zg()||wA()}get(){return ED()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function r_(n,e){Rs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class kA{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const AD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wD=new oc(3e4,6e4);function Cr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ir(n,e,t,s,a={}){return MA(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=nl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:p},l);return qN()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&tl(n.emulatorConfig.host)&&(g.credentials="include"),kA.fetch()(await PA(n,n.config.apiHost,t,d),g)})}async function MA(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},SD),e);try{const a=new bD(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Yh(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yh(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Yh(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Yh(n,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw i_(n,y,g);Zn(n,y)}}catch(a){if(a instanceof Fi)throw a;Zn(n,"network-request-failed",{message:String(a)})}}async function lc(n,e,t,s,a={}){const l=await Ir(n,e,t,s,a);return"mfaPendingCredential"in l&&Zn(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function PA(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?r_(n.config,a):`${n.config.apiScheme}://${a}`;return AD.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function RD(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ci(this.auth,"network-request-failed")),wD.get())})}}function Yh(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=ci(n,e,s);return a.customData._tokenResponse=t,a}function ZT(n){return n!==void 0&&n.enterprise!==void 0}class CD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return RD(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ID(n,e){return Ir(n,"GET","/v2/recaptchaConfig",Cr(n,e))}/**
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
 */async function ND(n,e){return Ir(n,"POST","/v1/accounts:delete",e)}async function Tf(n,e){return Ir(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function xu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OD(n,e=!1){const t=Yt(n),s=await t.getIdToken(e),a=a_(s);Te(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:xu(Um(a.auth_time)),issuedAtTime:xu(Um(a.iat)),expirationTime:xu(Um(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Um(n){return Number(n)*1e3}function a_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return rf("JWT malformed, contained fewer than 3 sections"),null;try{const a=_f(t);return a?JSON.parse(a):(rf("Failed to decode base64 JWT payload"),null)}catch(a){return rf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function JT(n){const e=a_(n);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yu(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Fi&&DD(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function DD({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class kD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ug{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xu(this.lastLoginAt),this.creationTime=xu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Sf(n){var e;const t=n.auth,s=await n.getIdToken(),a=await Yu(n,Tf(t,{idToken:s}));Te(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?xA(l.providerUserInfo):[],d=PD(n.providerData,c),p=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),y=p?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new ug(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(n,T)}async function MD(n){const e=Yt(n);await Sf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PD(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function xA(n){return n.map(e=>{var{providerId:t}=e,s=n_(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function xD(n,e){const t=await MA(n,{},async()=>{const s=nl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await PA(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",kA.fetch()(c,{method:"POST",headers:d,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function LD(n,e){return Ir(n,"POST","/v2/accounts:revokeToken",Cr(n,e))}/**
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
 */class xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):JT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=JT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await xD(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new xo;return s&&(Te(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Te(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Te(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xo,this.toJSON())}_performRefresh(){return gs("not implemented")}}/**
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
 */function rr(n,e){Te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class oi{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=n_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new ug(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Yu(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return OD(this,e)}reload(){return MD(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new oi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Sf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(Es(this.auth));const e=await this.getIdToken();return await Yu(this,ND(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,d,p,g,y;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,O=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,I=(c=t.photoURL)!==null&&c!==void 0?c:void 0,H=(d=t.tenantId)!==null&&d!==void 0?d:void 0,B=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,Q=(g=t.createdAt)!==null&&g!==void 0?g:void 0,X=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:te,emailVerified:ue,isAnonymous:ce,providerData:Ee,stsTokenManager:M}=t;Te(te&&M,e,"internal-error");const R=xo.fromJSON(this.name,M);Te(typeof te=="string",e,"internal-error"),rr(T,e.name),rr(S,e.name),Te(typeof ue=="boolean",e,"internal-error"),Te(typeof ce=="boolean",e,"internal-error"),rr(O,e.name),rr(I,e.name),rr(H,e.name),rr(B,e.name),rr(Q,e.name),rr(X,e.name);const b=new oi({uid:te,auth:e,email:S,emailVerified:ue,displayName:T,isAnonymous:ce,photoURL:I,phoneNumber:O,tenantId:H,stsTokenManager:R,createdAt:Q,lastLoginAt:X});return Ee&&Array.isArray(Ee)&&(b.providerData=Ee.map(k=>Object.assign({},k))),B&&(b._redirectEventId=B),b}static async _fromIdTokenResponse(e,t,s=!1){const a=new xo;a.updateFromServerResponse(t);const l=new oi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Sf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Te(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?xA(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new xo;d.updateFromIdToken(s);const p=new oi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new ug(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
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
 */const e0=new Map;function _s(n){Rs(n instanceof Function,"Expected a class definition");let e=e0.get(n);return e?(Rs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,e0.set(n,e),e)}/**
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
 */class LA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}LA.type="NONE";const t0=LA;/**
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
 */function af(n,e,t){return`firebase:${n}:${e}:${t}`}class Lo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=af(this.userKey,a.apiKey,l),this.fullPersistenceKey=af("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Tf(this.auth,{idToken:e}).catch(()=>{});return t?oi._fromGetAccountInfoResponse(this.auth,t,e):null}return oi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Lo(_s(t0),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||_s(t0);const c=af(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const S=await Tf(e,{idToken:y}).catch(()=>{});if(!S)break;T=await oi._fromGetAccountInfoResponse(e,S,y)}else T=oi._fromJSON(e,y);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Lo(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Lo(l,e,s))}}/**
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
 */function n0(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(HA(e))return"Blackberry";if(jA(e))return"Webos";if(UA(e))return"Safari";if((e.includes("chrome/")||BA(e))&&!e.includes("edge/"))return"Chrome";if(FA(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function VA(n=dn()){return/firefox\//i.test(n)}function UA(n=dn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function BA(n=dn()){return/crios\//i.test(n)}function zA(n=dn()){return/iemobile/i.test(n)}function FA(n=dn()){return/android/i.test(n)}function HA(n=dn()){return/blackberry/i.test(n)}function jA(n=dn()){return/webos/i.test(n)}function o_(n=dn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function VD(n=dn()){var e;return o_(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function UD(){return KN()&&document.documentMode===10}function qA(n=dn()){return o_(n)||FA(n)||jA(n)||HA(n)||/windows phone/i.test(n)||zA(n)}/**
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
 */function GA(n,e=[]){let t;switch(n){case"Browser":t=n0(dn());break;case"Worker":t=`${n0(dn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${br}/${s}`}/**
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
 */class BD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function zD(n,e={}){return Ir(n,"GET","/v2/passwordPolicy",Cr(n,e))}/**
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
 */const FD=6;class HD{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:FD,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class jD{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new i0(this),this.idTokenSubscription=new i0(this),this.beforeStateQueue=new BD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=DA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_s(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await Lo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Tf(this,{idToken:e}),s=await oi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(yn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Sf(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject(Es(this));const t=e?Yt(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(Es(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject(Es(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_s(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zD(this),t=new HD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ac("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await LD(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_s(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await Lo.create(this,[_s(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=GA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&_D(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Nr(n){return Yt(n)}class i0{constructor(e){this.auth=e,this.observer=null,this.addObserver=iO(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ed={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qD(n){ed=n}function KA(n){return ed.loadJS(n)}function GD(){return ed.recaptchaEnterpriseScript}function KD(){return ed.gapiScript}function YD(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class QD{constructor(){this.enterprise=new $D}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class $D{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const WD="recaptcha-enterprise",YA="NO_RECAPTCHA";class XD{constructor(e){this.type=WD,this.auth=Nr(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{ID(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new CD(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;ZT(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(YA)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new QD().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(d=>{if(!t&&ZT(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=GD();p.length!==0&&(p+=d),KA(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function s0(n,e,t,s=!1,a=!1){const l=new XD(n);let c;if(a)c=YA;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function cg(n,e,t,s,a){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await s0(n,e,t,t==="getOobCode");return s(n,c)}else return s(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await s0(n,e,t,t==="getOobCode");return s(n,d)}else return Promise.reject(c)})}/**
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
 */function ZD(n,e){const t=Jf(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(_r(l,e??{}))return a;Zn(a,"already-initialized")}return t.initialize({options:e})}function JD(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(_s);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function e2(n,e,t){const s=Nr(n);Te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=QA(e),{host:c,port:d}=t2(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Te(_r(g,s.config.emulator)&&_r(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,tl(c)?(Wg(`${l}//${c}${p}`),Xg("Auth",!0)):n2()}function QA(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function t2(n){const e=QA(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:r0(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:r0(c)}}}function r0(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function n2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class l_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gs("not implemented")}_getIdTokenResponse(e){return gs("not implemented")}_linkToIdToken(e,t){return gs("not implemented")}_getReauthenticationResolver(e){return gs("not implemented")}}async function i2(n,e){return Ir(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function s2(n,e){return lc(n,"POST","/v1/accounts:signInWithPassword",Cr(n,e))}/**
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
 */async function r2(n,e){return lc(n,"POST","/v1/accounts:signInWithEmailLink",Cr(n,e))}async function a2(n,e){return lc(n,"POST","/v1/accounts:signInWithEmailLink",Cr(n,e))}/**
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
 */class Qu extends l_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Qu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Qu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cg(e,t,"signInWithPassword",s2);case"emailLink":return r2(e,{email:this._email,oobCode:this._password});default:Zn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cg(e,s,"signUpPassword",i2);case"emailLink":return a2(e,{idToken:t,email:this._email,oobCode:this._password});default:Zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vo(n,e){return lc(n,"POST","/v1/accounts:signInWithIdp",Cr(n,e))}/**
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
 */const o2="http://localhost";class Ea extends l_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ea(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=n_(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new Ea(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Vo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Vo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vo(e,t)}buildRequest(){const e={requestUri:o2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=nl(t)}return e}}/**
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
 */function l2(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function u2(n){const e=Iu(Nu(n)).link,t=e?Iu(Nu(e)).deep_link_id:null,s=Iu(Nu(n)).deep_link_id;return(s?Iu(Nu(s)).link:null)||s||t||e||n}class u_{constructor(e){var t,s,a,l,c,d;const p=Iu(Nu(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,y=(s=p.oobCode)!==null&&s!==void 0?s:null,T=l2((a=p.mode)!==null&&a!==void 0?a:null);Te(g&&y&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=y,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=u2(e);try{return new u_(t)}catch{return null}}}/**
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
 */class il{constructor(){this.providerId=il.PROVIDER_ID}static credential(e,t){return Qu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=u_.parseLink(t);return Te(s,"argument-error"),Qu._fromEmailAndCode(e,s.code,s.tenantId)}}il.PROVIDER_ID="password";il.EMAIL_PASSWORD_SIGN_IN_METHOD="password";il.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class c_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class uc extends c_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class or extends uc{constructor(){super("facebook.com")}static credential(e){return Ea._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
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
 */class lr extends uc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ea._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return lr.credential(t,s)}catch{return null}}}lr.GOOGLE_SIGN_IN_METHOD="google.com";lr.PROVIDER_ID="google.com";/**
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
 */class ur extends uc{constructor(){super("github.com")}static credential(e){return Ea._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
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
 */class cr extends uc{constructor(){super("twitter.com")}static credential(e,t){return Ea._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return cr.credential(t,s)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
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
 */async function c2(n,e){return lc(n,"POST","/v1/accounts:signUp",Cr(n,e))}/**
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
 */class Ta{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await oi._fromIdTokenResponse(e,s,a),c=a0(s);return new Ta({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=a0(s);return new Ta({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function a0(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Af extends Fi{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Af.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Af(e,t,s,a)}}function $A(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Af._fromErrorAndOperation(n,l,e,s):l})}async function h2(n,e,t=!1){const s=await Yu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ta._forOperation(n,"link",s)}/**
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
 */async function f2(n,e,t=!1){const{auth:s}=n;if(yn(s.app))return Promise.reject(Es(s));const a="reauthenticate";try{const l=await Yu(n,$A(s,a,e,n),t);Te(l.idToken,s,"internal-error");const c=a_(l.idToken);Te(c,s,"internal-error");const{sub:d}=c;return Te(n.uid===d,s,"user-mismatch"),Ta._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Zn(s,"user-mismatch"),l}}/**
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
 */async function WA(n,e,t=!1){if(yn(n.app))return Promise.reject(Es(n));const s="signIn",a=await $A(n,s,e),l=await Ta._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}async function d2(n,e){return WA(Nr(n),e)}/**
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
 */async function XA(n){const e=Nr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kU(n,e,t){if(yn(n.app))return Promise.reject(Es(n));const s=Nr(n),c=await cg(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",c2).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&XA(n),p}),d=await Ta._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(d.user),d}function MU(n,e,t){return yn(n.app)?Promise.reject(Es(n)):d2(Yt(n),il.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&XA(n),s})}function p2(n,e,t,s){return Yt(n).onIdTokenChanged(e,t,s)}function m2(n,e,t){return Yt(n).beforeAuthStateChanged(e,t)}function g2(n,e,t,s){return Yt(n).onAuthStateChanged(e,t,s)}function _2(n){return Yt(n).signOut()}const wf="__sak";/**
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
 */class ZA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wf,"1"),this.storage.removeItem(wf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const y2=1e3,v2=10;class JA extends ZA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);UD()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,v2):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},y2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}JA.type="LOCAL";const E2=JA;/**
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
 */class ew extends ZA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ew.type="SESSION";const tw=ew;/**
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
 */function T2(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class td{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new td(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await T2(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}td.receivers=[];/**
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
 */function h_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class S2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=h_("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const S=T;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function ki(){return window}function A2(n){ki().location.href=n}/**
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
 */function nw(){return typeof ki().WorkerGlobalScope<"u"&&typeof ki().importScripts=="function"}async function w2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function R2(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function b2(){return nw()?self:null}/**
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
 */const iw="firebaseLocalStorageDb",C2=1,Rf="firebaseLocalStorage",sw="fbase_key";class cc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nd(n,e){return n.transaction([Rf],e?"readwrite":"readonly").objectStore(Rf)}function I2(){const n=indexedDB.deleteDatabase(iw);return new cc(n).toPromise()}function hg(){const n=indexedDB.open(iw,C2);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Rf,{keyPath:sw})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Rf)?e(s):(s.close(),await I2(),e(await hg()))})})}async function o0(n,e,t){const s=nd(n,!0).put({[sw]:e,value:t});return new cc(s).toPromise()}async function N2(n,e){const t=nd(n,!1).get(e),s=await new cc(t).toPromise();return s===void 0?null:s.value}function l0(n,e){const t=nd(n,!0).delete(e);return new cc(t).toPromise()}const O2=800,D2=3;class rw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>D2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=td._getInstance(b2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await w2(),!this.activeServiceWorker)return;this.sender=new S2(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||R2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hg();return await o0(e,wf,"1"),await l0(e,wf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>o0(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>N2(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>l0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=nd(a,!1).getAll();return new cc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),O2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rw.type="LOCAL";const k2=rw;new oc(3e4,6e4);/**
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
 */function aw(n,e){return e?_s(e):(Te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class f_ extends l_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function M2(n){return WA(n.auth,new f_(n),n.bypassAuthState)}function P2(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),f2(t,new f_(n),n.bypassAuthState)}async function x2(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),h2(t,new f_(n),n.bypassAuthState)}/**
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
 */class ow{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M2;case"linkViaPopup":case"linkViaRedirect":return x2;case"reauthViaPopup":case"reauthViaRedirect":return P2;default:Zn(this.auth,"internal-error")}}resolve(e){Rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const L2=new oc(2e3,1e4);async function PU(n,e,t){if(yn(n.app))return Promise.reject(ci(n,"operation-not-supported-in-this-environment"));const s=Nr(n);yD(n,e,c_);const a=aw(s,t);return new _a(s,"signInViaPopup",e,a).executeNotNull()}class _a extends ow{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,_a.currentPopupAction&&_a.currentPopupAction.cancel(),_a.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Rs(this.filter.length===1,"Popup operations only handle one event");const e=h_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ci(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ci(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_a.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ci(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,L2.get())};e()}}_a.currentPopupAction=null;/**
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
 */const V2="pendingRedirect",of=new Map;class U2 extends ow{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=of.get(this.auth._key());if(!e){try{const s=await B2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}of.set(this.auth._key(),e)}return this.bypassAuthState||of.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function B2(n,e){const t=H2(e),s=F2(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function z2(n,e){of.set(n._key(),e)}function F2(n){return _s(n._redirectPersistence)}function H2(n){return af(V2,n.config.apiKey,n.name)}async function j2(n,e,t=!1){if(yn(n.app))return Promise.reject(Es(n));const s=Nr(n),a=aw(s,e),c=await new U2(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const q2=10*60*1e3;class G2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!K2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!lw(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(ci(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=q2&&this.cachedEventUids.clear(),this.cachedEventUids.has(u0(e))}saveEventToCache(e){this.cachedEventUids.add(u0(e)),this.lastProcessedEventTime=Date.now()}}function u0(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function lw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function K2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lw(n);default:return!1}}/**
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
 */async function Y2(n,e={}){return Ir(n,"GET","/v1/projects",e)}/**
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
 */const Q2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$2=/^https?/;async function W2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Y2(n);for(const t of e)try{if(X2(t))return}catch{}Zn(n,"unauthorized-domain")}function X2(n){const e=lg(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!$2.test(t))return!1;if(Q2.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const Z2=new oc(3e4,6e4);function c0(){const n=ki().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function J2(n){return new Promise((e,t)=>{var s,a,l;function c(){c0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{c0(),t(ci(n,"network-request-failed"))},timeout:Z2.get()})}if(!((a=(s=ki().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=ki().gapi)===null||l===void 0)&&l.load)c();else{const d=YD("iframefcb");return ki()[d]=()=>{gapi.load?c():t(ci(n,"network-request-failed"))},KA(`${KD()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw lf=null,e})}let lf=null;function ek(n){return lf=lf||J2(n),lf}/**
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
 */const tk=new oc(5e3,15e3),nk="__/auth/iframe",ik="emulator/auth/iframe",sk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ak(n){const e=n.config;Te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?r_(e,ik):`https://${n.config.authDomain}/${nk}`,s={apiKey:e.apiKey,appName:n.name,v:br},a=rk.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${nl(s).slice(1)}`}async function ok(n){const e=await ek(n),t=ki().gapi;return Te(t,n,"internal-error"),e.open({where:document.body,url:ak(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sk,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=ci(n,"network-request-failed"),d=ki().setTimeout(()=>{l(c)},tk.get());function p(){ki().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const lk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uk=500,ck=600,hk="_blank",fk="http://localhost";class h0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dk(n,e,t,s=uk,a=ck){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p=Object.assign(Object.assign({},lk),{width:s.toString(),height:a.toString(),top:l,left:c}),g=dn().toLowerCase();t&&(d=BA(g)?hk:t),VA(g)&&(e=e||fk,p.scrollbars="yes");const y=Object.entries(p).reduce((S,[O,I])=>`${S}${O}=${I},`,"");if(VD(g)&&d!=="_self")return pk(e||"",d),new h0(null);const T=window.open(e||"",d,y);Te(T,n,"popup-blocked");try{T.focus()}catch{}return new h0(T)}function pk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const mk="__/auth/handler",gk="emulator/auth/handler",_k=encodeURIComponent("fac");async function f0(n,e,t,s,a,l){Te(n.config.authDomain,n,"auth-domain-config-required"),Te(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:br,eventId:a};if(e instanceof c_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",ng(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof uc){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),g=p?`#${_k}=${encodeURIComponent(p)}`:"";return`${yk(n)}?${nl(d).slice(1)}${g}`}function yk({config:n}){return n.emulator?r_(n,gk):`https://${n.authDomain}/${mk}`}/**
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
 */const Bm="webStorageSupport";class vk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tw,this._completeRedirectFn=j2,this._overrideRedirectResult=z2}async _openPopup(e,t,s,a){var l;Rs((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await f0(e,t,s,lg(),a);return dk(e,c,h_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await f0(e,t,s,lg(),a);return A2(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Rs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await ok(e),s=new G2(e);return t.register("authEvent",a=>(Te(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bm,{type:Bm},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[Bm];c!==void 0&&t(!!c),Zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=W2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qA()||UA()||o_()}}const Ek=vk;var d0="@firebase/auth",p0="1.10.6";/**
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
 */class Tk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Sk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ak(n){yr(new As("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Te(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:GA(n)},g=new jD(s,a,l,p);return JD(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),yr(new As("auth-internal",e=>{const t=Nr(e.getProvider("auth").getImmediate());return(s=>new Tk(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(d0,p0,Sk(n)),Xn(d0,p0,"esm2017")}/**
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
 */const wk=5*60,Rk=SA("authIdTokenMaxAge")||wk;let m0=null;const bk=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Rk)return;const a=t==null?void 0:t.token;m0!==a&&(m0=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Ck(n=t_()){const e=Jf(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ZD(n,{popupRedirectResolver:Ek,persistence:[k2,E2,tw]}),s=SA("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=bk(l.toString());m2(t,c,()=>c(t.currentUser)),p2(t,d=>c(d))}}const a=vA("auth");return a&&e2(t,`http://${a}`),t}function Ik(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}qD({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=ci("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",Ik().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ak("Browser");var Nk="firebase",Ok="11.8.1";/**
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
 */Xn(Nk,Ok,"app");var g0={};const _0="@firebase/database",y0="1.0.19";/**
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
 */let uw="";function Dk(n){uw=n}/**
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
 */class kk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),en(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Gu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Mk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ns(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const cw=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kk(e)}}catch{}return new Mk},ya=cw("localStorage"),Pk=cw("sessionStorage");/**
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
 */const Uo=new Zf("@firebase/database"),xk=function(){let n=1;return function(){return n++}}(),hw=function(n){const e=oO(n),t=new nO;t.update(e);const s=t.digest();return Qg.encodeByteArray(s)},hc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=hc.apply(null,s):typeof s=="object"?e+=en(s):e+=s,e+=" "}return e};let Lu=null,v0=!0;const Lk=function(n,e){le(!0,"Can't turn on custom loggers persistently."),Uo.logLevel=Pe.VERBOSE,Lu=Uo.log.bind(Uo)},un=function(...n){if(v0===!0&&(v0=!1,Lu===null&&Pk.get("logging_enabled")===!0&&Lk()),Lu){const e=hc.apply(null,n);Lu(e)}},fc=function(n){return function(...e){un(n,...e)}},fg=function(...n){const e="FIREBASE INTERNAL ERROR: "+hc(...n);Uo.error(e)},Sa=function(...n){const e=`FIREBASE FATAL ERROR: ${hc(...n)}`;throw Uo.error(e),new Error(e)},xn=function(...n){const e="FIREBASE WARNING: "+hc(...n);Uo.warn(e)},Vk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fw=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Uk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ho="[MIN_NAME]",Aa="[MAX_NAME]",sl=function(n,e){if(n===e)return 0;if(n===Ho||e===Aa)return-1;if(e===Ho||n===Aa)return 1;{const t=E0(n),s=E0(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Bk=function(n,e){return n===e?0:n<e?-1:1},Au=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+en(e))},d_=function(n){if(typeof n!="object"||n===null)return en(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=en(e[s]),t+=":",t+=d_(n[e[s]]);return t+="}",t},dw=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function Jn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const pw=function(n){le(!fw(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let T="";for(p=0;p<64;p+=8){let S=parseInt(y.substr(p,8),2).toString(16);S.length===1&&(S="0"+S),T=T+S}return T.toLowerCase()},zk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Fk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Hk=new RegExp("^-?(0*)\\d{1,10}$"),jk=-2147483648,qk=2147483647,E0=function(n){if(Hk.test(n)){const e=Number(n);if(e>=jk&&e<=qk)return e}return null},dc=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw xn("Exception was thrown by user callback.",t),e},Math.floor(0))}},Gk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Kk{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,yn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){xn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Yk{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(un("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xn(e)}}/**
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
 */const p_="5",mw="v",gw="s",_w="r",yw="f",vw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ew="ls",Tw="p",dg="ac",Sw="websocket",Aw="long_polling";/**
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
 */class Qk{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ya.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ya.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function $k(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ww(n,e,t){le(typeof e=="string","typeof type must == string"),le(typeof t=="object","typeof params must == object");let s;if(e===Sw)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Aw)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$k(n)&&(t.ns=n.namespace);const a=[];return Jn(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
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
 */class Wk{constructor(){this.counters_={}}incrementCounter(e,t=1){Ns(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return xN(this.counters_)}}/**
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
 */const zm={},Fm={};function m_(n){const e=n.toString();return zm[e]||(zm[e]=new Wk),zm[e]}function Xk(n,e){const t=n.toString();return Fm[t]||(Fm[t]=e()),Fm[t]}/**
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
 */class Zk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&dc(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const T0="start",Jk="close",eM="pLPCommand",tM="pRTLPCB",Rw="id",bw="pw",Cw="ser",nM="cb",iM="seg",sM="ts",rM="d",aM="dframe",Iw=1870,Nw=30,oM=Iw-Nw,lM=25e3,uM=3e4;class Mo{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fc(e),this.stats_=m_(t),this.urlFn=p=>(this.appCheckToken&&(p[dg]=this.appCheckToken),ww(t,Aw,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Zk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(uM)),Uk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new g_((...l)=>{const[c,d,p,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===T0)this.id=d,this.password=p;else if(c===Jk)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[T0]="t",s[Cw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[nM]=this.scriptTagHolder.uniqueCallbackIdentifier),s[mw]=p_,this.transportSessionId&&(s[gw]=this.transportSessionId),this.lastSessionId&&(s[Ew]=this.lastSessionId),this.applicationId&&(s[Tw]=this.applicationId),this.appCheckToken&&(s[dg]=this.appCheckToken),typeof location<"u"&&location.hostname&&vw.test(location.hostname)&&(s[_w]=yw);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mo.forceAllow_=!0}static forceDisallow(){Mo.forceDisallow_=!0}static isAvailable(){return Mo.forceAllow_?!0:!Mo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zk()&&!Fk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=en(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=_A(t),a=dw(s,oM);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[aM]="t",s[Rw]=e,s[bw]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=en(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class g_{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=xk(),window[eM+this.uniqueCallbackIdentifier]=e,window[tM+this.uniqueCallbackIdentifier]=t,this.myIFrame=g_.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){un("frame writing exception"),d.stack&&un(d.stack),un(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||un("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Rw]=this.myID,e[bw]=this.myPW,e[Cw]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Nw+s.length<=Iw;){const c=this.pendingSegs.shift();s=s+"&"+iM+a+"="+c.seg+"&"+sM+a+"="+c.ts+"&"+rM+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(lM)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{un("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const cM=16384,hM=45e3;let bf=null;typeof MozWebSocket<"u"?bf=MozWebSocket:typeof WebSocket<"u"&&(bf=WebSocket);class ai{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fc(this.connId),this.stats_=m_(t),this.connURL=ai.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[mw]=p_,typeof location<"u"&&location.hostname&&vw.test(location.hostname)&&(c[_w]=yw),t&&(c[gw]=t),s&&(c[Ew]=s),a&&(c[dg]=a),l&&(c[Tw]=l),ww(e,Sw,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ya.set("previous_websocket_failure",!0);try{let s;YN(),this.mySock=new bf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){ai.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&bf!==null&&!ai.forceDisallow_}static previouslyFailed(){return ya.isInMemoryStorage||ya.get("previous_websocket_failure")===!0}markConnectionHealthy(){ya.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Gu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(le(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=en(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=dw(t,cM);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(hM))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ai.responsesRequiredToBeHealthy=2;ai.healthyTimeout=3e4;/**
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
 */class $u{static get ALL_TRANSPORTS(){return[Mo,ai]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ai&&ai.isAvailable();let s=t&&!ai.previouslyFailed();if(e.webSocketOnly&&(t||xn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ai];else{const a=this.transports_=[];for(const l of $u.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);$u.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$u.globalTransportInitialized_=!1;/**
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
 */const fM=6e4,dM=5e3,pM=10*1024,mM=100*1024,Hm="t",S0="d",gM="s",A0="r",_M="e",w0="o",R0="a",b0="n",C0="p",yM="h";class vM{constructor(e,t,s,a,l,c,d,p,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fc("c:"+this.id+":"),this.transportManager_=new $u(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Vu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>mM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>pM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Hm in e){const t=e[Hm];t===R0?this.upgradeIfSecondaryHealthy_():t===A0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===w0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Au("t",e),s=Au("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:C0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:R0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:b0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Au("t",e),s=Au("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Au(Hm,e);if(S0 in e){const s=e[S0];if(t===yM){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===b0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===gM?this.onConnectionShutdown_(s):t===A0?this.onReset_(s):t===_M?fg("Server Error: "+s):t===w0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),p_!==s&&xn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Vu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:C0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ya.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ow{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Dw{constructor(e){this.allowedEvents_=e,this.listeners_={},le(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){le(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Cf extends Dw{static getInstance(){return new Cf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return le(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const I0=32,N0=768;class ut{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function it(){return new ut("")}function He(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function vr(n){return n.pieces_.length-n.pieceNum_}function lt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ut(n.pieces_,e)}function kw(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function EM(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Mw(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Pw(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ut(e,0)}function Kt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof ut)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new ut(t,0)}function Ve(n){return n.pieceNum_>=n.pieces_.length}function Wn(n,e){const t=He(n),s=He(e);if(t===null)return e;if(t===s)return Wn(lt(n),lt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function xw(n,e){if(vr(n)!==vr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function li(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(vr(n)>vr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class TM{constructor(e,t){this.errorPrefix_=t,this.parts_=Mw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Xf(this.parts_[s]);Lw(this)}}function SM(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Xf(e),Lw(n)}function AM(n){const e=n.parts_.pop();n.byteLength_-=Xf(e),n.parts_.length>0&&(n.byteLength_-=1)}function Lw(n){if(n.byteLength_>N0)throw new Error(n.errorPrefix_+"has a key path longer than "+N0+" bytes ("+n.byteLength_+").");if(n.parts_.length>I0)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+I0+") or object contains a cycle "+ga(n))}function ga(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class __ extends Dw{static getInstance(){return new __}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return le(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const wu=1e3,wM=60*5*1e3,O0=30*1e3,RM=1.3,bM=3e4,CM="server_kill",D0=3;class Ts extends Ow{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Ts.nextPersistentConnectionId_++,this.log_=fc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wu,this.maxReconnectDelay_=wM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");__.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Cf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(en(l)),le(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new $g,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),le(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;Ts.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ns(e,"w")){const s=Fo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();xn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||tO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=O0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=eO(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+en(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):fg("Unrecognized action received from server: "+en(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){le(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bM&&(this.reconnectDelay_=wu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*RM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Ts.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){le(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,S]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?un("getToken() completed but was canceled"):(un("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=S&&S.token,d=new vM(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,O=>{xn(O+" ("+this.repoInfo_.toString()+")"),this.interrupt(CM)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&xn(T),p())}}}interrupt(e){un("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){un("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ng(this.interruptReasons_)&&(this.reconnectDelay_=wu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>d_(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new ut(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){un("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=D0&&(this.reconnectDelay_=O0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){un("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=D0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+uw.replace(/\./g,"-")]=1,Zg()?e["framework.cordova"]=1:wA()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Cf.getInstance().currentlyOnline();return ng(this.interruptReasons_)&&e}}Ts.nextPersistentConnectionId_=0;Ts.nextConnectionId_=0;/**
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
 */class id{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new je(Ho,e),a=new je(Ho,t);return this.compare(s,a)!==0}minPost(){return je.MIN}}/**
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
 */let Qh;class Vw extends id{static get __EMPTY_NODE(){return Qh}static set __EMPTY_NODE(e){Qh=e}compare(e,t){return sl(e.name,t.name)}isDefinedOn(e){throw el("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return je.MIN}maxPost(){return new je(Aa,Qh)}makePost(e,t){return le(typeof e=="string","KeyIndex indexValue must always be a string."),new je(e,Qh)}toString(){return".key"}}const Bo=new Vw;/**
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
 */let $h=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Mn=class Ou{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Ou.RED,this.left=a??Oi.EMPTY_NODE,this.right=l??Oi.EMPTY_NODE}copy(e,t,s,a,l){return new Ou(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oi.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Oi.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ou.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ou.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Mn.RED=!0;Mn.BLACK=!1;class IM{copy(e,t,s,a,l){return this}insert(e,t,s){return new Mn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Oi=class uf{constructor(e,t=uf.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new uf(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Mn.BLACK,null,null))}remove(e){return new uf(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Mn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $h(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new $h(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new $h(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new $h(this.root_,null,this.comparator_,!0,e)}};Oi.EMPTY_NODE=new IM;/**
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
 */function NM(n,e){return sl(n.name,e.name)}function y_(n,e){return sl(n,e)}/**
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
 */let pg;function OM(n){pg=n}const Uw=function(n){return typeof n=="number"?"number:"+pw(n):"string:"+n},Bw=function(n){if(n.isLeafNode()){const e=n.val();le(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ns(e,".sv"),"Priority must be a string or number.")}else le(n===pg||n.isEmpty(),"priority of unexpected type.");le(n===pg||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let k0;class qt{static set __childrenNodeConstructor(e){k0=e}static get __childrenNodeConstructor(){return k0}constructor(e,t=qt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,le(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bw(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ve(e)?this:He(e)===".priority"?this.priorityNode_:qt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:qt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=He(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(le(s!==".priority"||vr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,qt.__childrenNodeConstructor.EMPTY_NODE.updateChild(lt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uw(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=pw(this.value_):e+=this.value_,this.lazyHash_=hw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qt.__childrenNodeConstructor?-1:(le(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=qt.VALUE_TYPE_ORDER.indexOf(t),l=qt.VALUE_TYPE_ORDER.indexOf(s);return le(a>=0,"Unknown leaf type: "+t),le(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}qt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let zw,Fw;function DM(n){zw=n}function kM(n){Fw=n}class MM extends id{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?sl(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return je.MIN}maxPost(){return new je(Aa,new qt("[PRIORITY-POST]",Fw))}makePost(e,t){const s=zw(e);return new je(t,new qt("[PRIORITY-POST]",s))}toString(){return".priority"}}const fn=new MM;/**
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
 */const PM=Math.log(2);class xM{constructor(e){const t=l=>parseInt(Math.log(l)/PM,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const If=function(n,e,t,s){n.sort(e);const a=function(p,g){const y=g-p;let T,S;if(y===0)return null;if(y===1)return T=n[p],S=t?t(T):T,new Mn(S,T.node,Mn.BLACK,null,null);{const O=parseInt(y/2,10)+p,I=a(p,O),H=a(O+1,g);return T=n[O],S=t?t(T):T,new Mn(S,T.node,Mn.BLACK,I,H)}},l=function(p){let g=null,y=null,T=n.length;const S=function(I,H){const B=T-I,Q=T;T-=I;const X=a(B+1,Q),te=n[B],ue=t?t(te):te;O(new Mn(ue,te.node,H,null,X))},O=function(I){g?(g.left=I,g=I):(y=I,g=I)};for(let I=0;I<p.count;++I){const H=p.nextBitIsOne(),B=Math.pow(2,p.count-(I+1));H?S(B,Mn.BLACK):(S(B,Mn.BLACK),S(B,Mn.RED))}return y},c=new xM(n.length),d=l(c);return new Oi(s||e,d)};/**
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
 */let jm;const Io={};class ys{static get Default(){return le(Io&&fn,"ChildrenNode.ts has not been loaded"),jm=jm||new ys({".priority":Io},{".priority":fn}),jm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Fo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Oi?t:null}hasIndex(e){return Ns(this.indexSet_,e.toString())}addIndex(e,t){le(e!==Bo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(je.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=If(s,e.getCompare()):d=Io;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const y=Object.assign({},this.indexes_);return y[p]=d,new ys(y,g)}addToIndexes(e,t){const s=yf(this.indexes_,(a,l)=>{const c=Fo(this.indexSet_,l);if(le(c,"Missing index implementation for "+l),a===Io)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(je.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),If(d,c.getCompare())}else return Io;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new je(e.name,d))),p.insert(e,e.node)}});return new ys(s,this.indexSet_)}removeFromIndexes(e,t){const s=yf(this.indexes_,a=>{if(a===Io)return a;{const l=t.get(e.name);return l?a.remove(new je(e.name,l)):a}});return new ys(s,this.indexSet_)}}/**
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
 */let Ru;class Qe{static get EMPTY_NODE(){return Ru||(Ru=new Qe(new Oi(y_),null,ys.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Bw(this.priorityNode_),this.children_.isEmpty()&&le(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ru}updatePriority(e){return this.children_.isEmpty()?this:new Qe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ru:t}}getChild(e){const t=He(e);return t===null?this:this.getImmediateChild(t).getChild(lt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(le(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new je(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Ru:this.priorityNode_;return new Qe(a,c,l)}}updateChild(e,t){const s=He(e);if(s===null)return t;{le(He(e)!==".priority"||vr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(lt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(fn,(c,d)=>{t[c]=d.val(e),s++,l&&Qe.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uw(this.getPriority().val())+":"),this.forEachChild(fn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":hw(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new je(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new je(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new je(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,je.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,je.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===pc?-1:0}withIndex(e){if(e===Bo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Qe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Bo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(fn),a=t.getIterator(fn);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Bo?null:this.indexMap_.get(e.toString())}}Qe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class LM extends Qe{constructor(){super(new Oi(y_),Qe.EMPTY_NODE,ys.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Qe.EMPTY_NODE}isEmpty(){return!1}}const pc=new LM;Object.defineProperties(je,{MIN:{value:new je(Ho,Qe.EMPTY_NODE)},MAX:{value:new je(Aa,pc)}});Vw.__EMPTY_NODE=Qe.EMPTY_NODE;qt.__childrenNodeConstructor=Qe;OM(pc);kM(pc);/**
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
 */const VM=!0;function cn(n,e=null){if(n===null)return Qe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),le(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new qt(t,cn(e))}if(!(n instanceof Array)&&VM){const t=[];let s=!1;if(Jn(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=cn(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new je(c,p)))}}),t.length===0)return Qe.EMPTY_NODE;const l=If(t,NM,c=>c.name,y_);if(s){const c=If(t,fn.getCompare());return new Qe(l,cn(e),new ys({".priority":c},{".priority":fn}))}else return new Qe(l,cn(e),ys.Default)}else{let t=Qe.EMPTY_NODE;return Jn(n,(s,a)=>{if(Ns(n,s)&&s.substring(0,1)!=="."){const l=cn(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(cn(e))}}DM(cn);/**
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
 */class UM extends id{constructor(e){super(),this.indexPath_=e,le(!Ve(e)&&He(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?sl(e.name,t.name):l}makePost(e,t){const s=cn(e),a=Qe.EMPTY_NODE.updateChild(this.indexPath_,s);return new je(t,a)}maxPost(){const e=Qe.EMPTY_NODE.updateChild(this.indexPath_,pc);return new je(Aa,e)}toString(){return Mw(this.indexPath_,0).join("/")}}/**
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
 */class BM extends id{compare(e,t){const s=e.node.compareTo(t.node);return s===0?sl(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return je.MIN}maxPost(){return je.MAX}makePost(e,t){const s=cn(e);return new je(t,s)}toString(){return".value"}}const zM=new BM;/**
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
 */function FM(n){return{type:"value",snapshotNode:n}}function HM(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function jM(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function M0(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function qM(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class v_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return le(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return le(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ho}hasEnd(){return this.endSet_}getIndexEndValue(){return le(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return le(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Aa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return le(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fn}copy(){const e=new v_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function P0(n){const e={};if(n.isDefault())return e;let t;if(n.index_===fn?t="$priority":n.index_===zM?t="$value":n.index_===Bo?t="$key":(le(n.index_ instanceof UM,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=en(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=en(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+en(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=en(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+en(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function x0(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==fn&&(e.i=n.index_.toString()),e}/**
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
 */class Nf extends Ow{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(le(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=fc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=Nf.getListenId_(e,s),d={};this.listens_[c]=d;const p=P0(e._queryParams);this.restRequest_(l+".json",p,(g,y)=>{let T=y;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),Fo(this.listens_,c)===d){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",a(S,null)}})}unlisten(e,t){const s=Nf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=P0(e._queryParams),s=e._path.toString(),a=new $g;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+nl(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=Gu(d.responseText)}catch{xn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&xn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
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
 */class GM{constructor(){this.rootNode_=Qe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Of(){return{value:null,children:new Map}}function Hw(n,e,t){if(Ve(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=He(e);n.children.has(s)||n.children.set(s,Of());const a=n.children.get(s);e=lt(e),Hw(a,e,t)}}function mg(n,e,t){n.value!==null?t(e,n.value):KM(n,(s,a)=>{const l=new ut(e.toString()+"/"+s);mg(a,l,t)})}function KM(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class YM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Jn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
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
 */const L0=10*1e3,QM=30*1e3,$M=5*60*1e3;class WM{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new YM(e);const s=L0+(QM-L0)*Math.random();Vu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Jn(e,(a,l)=>{l>0&&Ns(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Vu(this.reportStats_.bind(this),Math.floor(Math.random()*2*$M))}}/**
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
 */var Di;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Di||(Di={}));function jw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gw(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Df{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Di.ACK_USER_WRITE,this.source=jw()}operationForChild(e){if(Ve(this.path)){if(this.affectedTree.value!=null)return le(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ut(e));return new Df(it(),t,this.revert)}}else return le(He(this.path)===e,"operationForChild called for unrelated child."),new Df(lt(this.path),this.affectedTree,this.revert)}}/**
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
 */class wa{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Di.OVERWRITE}operationForChild(e){return Ve(this.path)?new wa(this.source,it(),this.snap.getImmediateChild(e)):new wa(this.source,lt(this.path),this.snap)}}/**
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
 */class Wu{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Di.MERGE}operationForChild(e){if(Ve(this.path)){const t=this.children.subtree(new ut(e));return t.isEmpty()?null:t.value?new wa(this.source,it(),t.value):new Wu(this.source,it(),t)}else return le(He(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wu(this.source,lt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class E_{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ve(e))return this.isFullyInitialized()&&!this.filtered_;const t=He(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function XM(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(qM(c.childName,c.snapshotNode))}),bu(n,a,"child_removed",e,s,t),bu(n,a,"child_added",e,s,t),bu(n,a,"child_moved",l,s,t),bu(n,a,"child_changed",e,s,t),bu(n,a,"value",e,s,t),a}function bu(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>JM(n,d,p)),c.forEach(d=>{const p=ZM(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function ZM(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function JM(n,e,t){if(e.childName==null||t.childName==null)throw el("Should only compare child_ events.");const s=new je(e.childName,e.snapshotNode),a=new je(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
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
 */function Kw(n,e){return{eventCache:n,serverCache:e}}function Uu(n,e,t,s){return Kw(new E_(e,t,s),n.serverCache)}function Yw(n,e,t,s){return Kw(n.eventCache,new E_(e,t,s))}function gg(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ra(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let qm;const eP=()=>(qm||(qm=new Oi(Bk)),qm);class ot{static fromObject(e){let t=new ot(null);return Jn(e,(s,a)=>{t=t.set(new ut(s),a)}),t}constructor(e,t=eP()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:it(),value:this.value};if(Ve(e))return null;{const s=He(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(lt(e),t);return l!=null?{path:Kt(new ut(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ve(e))return this;{const t=He(e),s=this.children.get(t);return s!==null?s.subtree(lt(e)):new ot(null)}}set(e,t){if(Ve(e))return new ot(t,this.children);{const s=He(e),l=(this.children.get(s)||new ot(null)).set(lt(e),t),c=this.children.insert(s,l);return new ot(this.value,c)}}remove(e){if(Ve(e))return this.children.isEmpty()?new ot(null):new ot(null,this.children);{const t=He(e),s=this.children.get(t);if(s){const a=s.remove(lt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ot(null):new ot(this.value,l)}else return this}}get(e){if(Ve(e))return this.value;{const t=He(e),s=this.children.get(t);return s?s.get(lt(e)):null}}setTree(e,t){if(Ve(e))return t;{const s=He(e),l=(this.children.get(s)||new ot(null)).setTree(lt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new ot(this.value,c)}}fold(e){return this.fold_(it(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Kt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,it(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Ve(e))return null;{const l=He(e),c=this.children.get(l);return c?c.findOnPath_(lt(e),Kt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,it(),t)}foreachOnPath_(e,t,s){if(Ve(e))return this;{this.value&&s(t,this.value);const a=He(e),l=this.children.get(a);return l?l.foreachOnPath_(lt(e),Kt(t,a),s):new ot(null)}}foreach(e){this.foreach_(it(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Kt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class hi{constructor(e){this.writeTree_=e}static empty(){return new hi(new ot(null))}}function Bu(n,e,t){if(Ve(e))return new hi(new ot(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=Wn(a,e);return l=l.updateChild(c,t),new hi(n.writeTree_.set(a,l))}else{const a=new ot(t),l=n.writeTree_.setTree(e,a);return new hi(l)}}}function V0(n,e,t){let s=n;return Jn(t,(a,l)=>{s=Bu(s,Kt(e,a),l)}),s}function U0(n,e){if(Ve(e))return hi.empty();{const t=n.writeTree_.setTree(e,new ot(null));return new hi(t)}}function _g(n,e){return Da(n,e)!=null}function Da(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Wn(t.path,e)):null}function B0(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(fn,(s,a)=>{e.push(new je(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new je(s,a.value))}),e}function pr(n,e){if(Ve(e))return n;{const t=Da(n,e);return t!=null?new hi(new ot(t)):new hi(n.writeTree_.subtree(e))}}function yg(n){return n.writeTree_.isEmpty()}function jo(n,e){return Qw(it(),n.writeTree_,e)}function Qw(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(le(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=Qw(Kt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Kt(n,".priority"),s)),t}}/**
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
 */function $w(n,e){return eR(e,n)}function tP(n,e,t,s,a){le(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=Bu(n.visibleWrites,e,t)),n.lastWriteId=s}function nP(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function iP(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);le(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&sP(d,s.path)?a=!1:li(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return rP(n),!0;if(s.snap)n.visibleWrites=U0(n.visibleWrites,s.path);else{const d=s.children;Jn(d,p=>{n.visibleWrites=U0(n.visibleWrites,Kt(s.path,p))})}return!0}else return!1}function sP(n,e){if(n.snap)return li(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&li(Kt(n.path,t),e))return!0;return!1}function rP(n){n.visibleWrites=Ww(n.allWrites,aP,it()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function aP(n){return n.visible}function Ww(n,e,t){let s=hi.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)li(t,c)?(d=Wn(t,c),s=Bu(s,d,l.snap)):li(c,t)&&(d=Wn(c,t),s=Bu(s,it(),l.snap.getChild(d)));else if(l.children){if(li(t,c))d=Wn(t,c),s=V0(s,d,l.children);else if(li(c,t))if(d=Wn(c,t),Ve(d))s=V0(s,it(),l.children);else{const p=Fo(l.children,He(d));if(p){const g=p.getChild(lt(d));s=Bu(s,it(),g)}}}else throw el("WriteRecord should have .snap or .children")}}return s}function Xw(n,e,t,s,a){if(!s&&!a){const l=Da(n.visibleWrites,e);if(l!=null)return l;{const c=pr(n.visibleWrites,e);if(yg(c))return t;if(t==null&&!_g(c,it()))return null;{const d=t||Qe.EMPTY_NODE;return jo(c,d)}}}else{const l=pr(n.visibleWrites,e);if(!a&&yg(l))return t;if(!a&&t==null&&!_g(l,it()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(li(g.path,e)||li(e,g.path))},d=Ww(n.allWrites,c,e),p=t||Qe.EMPTY_NODE;return jo(d,p)}}}function oP(n,e,t){let s=Qe.EMPTY_NODE;const a=Da(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(fn,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=pr(n.visibleWrites,e);return t.forEachChild(fn,(c,d)=>{const p=jo(pr(l,new ut(c)),d);s=s.updateImmediateChild(c,p)}),B0(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=pr(n.visibleWrites,e);return B0(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function lP(n,e,t,s,a){le(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Kt(e,t);if(_g(n.visibleWrites,l))return null;{const c=pr(n.visibleWrites,l);return yg(c)?a.getChild(t):jo(c,a.getChild(t))}}function uP(n,e,t,s){const a=Kt(e,t),l=Da(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=pr(n.visibleWrites,a);return jo(c,s.getNode().getImmediateChild(t))}else return null}function cP(n,e){return Da(n.visibleWrites,e)}function hP(n,e,t,s,a,l,c){let d;const p=pr(n.visibleWrites,e),g=Da(p,it());if(g!=null)d=g;else if(t!=null)d=jo(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],T=c.getCompare(),S=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let O=S.getNext();for(;O&&y.length<a;)T(O,s)!==0&&y.push(O),O=S.getNext();return y}else return[]}function fP(){return{visibleWrites:hi.empty(),allWrites:[],lastWriteId:-1}}function vg(n,e,t,s){return Xw(n.writeTree,n.treePath,e,t,s)}function Zw(n,e){return oP(n.writeTree,n.treePath,e)}function z0(n,e,t,s){return lP(n.writeTree,n.treePath,e,t,s)}function kf(n,e){return cP(n.writeTree,Kt(n.treePath,e))}function dP(n,e,t,s,a,l){return hP(n.writeTree,n.treePath,e,t,s,a,l)}function T_(n,e,t){return uP(n.writeTree,n.treePath,e,t)}function Jw(n,e){return eR(Kt(n.treePath,e),n.writeTree)}function eR(n,e){return{treePath:n,writeTree:e}}/**
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
 */class pP{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;le(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),le(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,M0(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,jM(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,HM(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,M0(s,e.snapshotNode,a.oldSnap));else throw el("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class mP{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const tR=new mP;class S_{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new E_(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return T_(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ra(this.viewCache_),l=dP(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function gP(n,e){le(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),le(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function _P(n,e,t,s,a){const l=new pP;let c,d;if(t.type===Di.OVERWRITE){const g=t;g.source.fromUser?c=Eg(n,e,g.path,g.snap,s,a,l):(le(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Ve(g.path),c=Mf(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===Di.MERGE){const g=t;g.source.fromUser?c=vP(n,e,g.path,g.children,s,a,l):(le(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=Tg(n,e,g.path,g.children,s,a,d,l))}else if(t.type===Di.ACK_USER_WRITE){const g=t;g.revert?c=SP(n,e,g.path,s,a,l):c=EP(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Di.LISTEN_COMPLETE)c=TP(n,e,t.path,s,l);else throw el("Unknown operation type: "+t.type);const p=l.getChanges();return yP(e,c,p),{viewCache:c,changes:p}}function yP(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=gg(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(FM(gg(e)))}}function nR(n,e,t,s,a,l){const c=e.eventCache;if(kf(s,t)!=null)return e;{let d,p;if(Ve(t))if(le(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ra(e),y=g instanceof Qe?g:Qe.EMPTY_NODE,T=Zw(s,y);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=vg(s,Ra(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=He(t);if(g===".priority"){le(vr(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const T=z0(s,t,y,p);T!=null?d=n.filter.updatePriority(y,T):d=c.getNode()}else{const y=lt(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const S=z0(s,t,c.getNode(),p);S!=null?T=c.getNode().getImmediateChild(g).updateChild(y,S):T=c.getNode().getImmediateChild(g)}else T=T_(s,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,y,a,l):d=c.getNode()}}return Uu(e,d,c.isFullyInitialized()||Ve(t),n.filter.filtersNodes())}}function Mf(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const y=c?n.filter:n.filter.getIndexedFilter();if(Ve(t))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const O=p.getNode().updateChild(t,s);g=y.updateFullNode(p.getNode(),O,null)}else{const O=He(t);if(!p.isCompleteForPath(t)&&vr(t)>1)return e;const I=lt(t),B=p.getNode().getImmediateChild(O).updateChild(I,s);O===".priority"?g=y.updatePriority(p.getNode(),B):g=y.updateChild(p.getNode(),O,B,I,tR,null)}const T=Yw(e,g,p.isFullyInitialized()||Ve(t),y.filtersNodes()),S=new S_(a,T,l);return nR(n,T,t,a,S,d)}function Eg(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const y=new S_(a,e,l);if(Ve(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Uu(e,g,!0,n.filter.filtersNodes());else{const T=He(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=Uu(e,g,d.isFullyInitialized(),d.isFiltered());else{const S=lt(t),O=d.getNode().getImmediateChild(T);let I;if(Ve(S))I=s;else{const H=y.getCompleteChild(T);H!=null?kw(S)===".priority"&&H.getChild(Pw(S)).isEmpty()?I=H:I=H.updateChild(S,s):I=Qe.EMPTY_NODE}if(O.equals(I))p=e;else{const H=n.filter.updateChild(d.getNode(),T,I,S,y,c);p=Uu(e,H,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function F0(n,e){return n.eventCache.isCompleteForChild(e)}function vP(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const y=Kt(t,p);F0(e,He(y))&&(d=Eg(n,d,y,g,a,l,c))}),s.foreach((p,g)=>{const y=Kt(t,p);F0(e,He(y))||(d=Eg(n,d,y,g,a,l,c))}),d}function H0(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Tg(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Ve(t)?g=s:g=new ot(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((T,S)=>{if(y.hasChild(T)){const O=e.serverCache.getNode().getImmediateChild(T),I=H0(n,O,S);p=Mf(n,p,new ut(T),I,a,l,c,d)}}),g.children.inorderTraversal((T,S)=>{const O=!e.serverCache.isCompleteForChild(T)&&S.value===null;if(!y.hasChild(T)&&!O){const I=e.serverCache.getNode().getImmediateChild(T),H=H0(n,I,S);p=Mf(n,p,new ut(T),H,a,l,c,d)}}),p}function EP(n,e,t,s,a,l,c){if(kf(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Ve(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return Mf(n,e,t,p.getNode().getChild(t),a,l,d,c);if(Ve(t)){let g=new ot(null);return p.getNode().forEachChild(Bo,(y,T)=>{g=g.set(new ut(y),T)}),Tg(n,e,t,g,a,l,d,c)}else return e}else{let g=new ot(null);return s.foreach((y,T)=>{const S=Kt(t,y);p.isCompleteForPath(S)&&(g=g.set(y,p.getNode().getChild(S)))}),Tg(n,e,t,g,a,l,d,c)}}function TP(n,e,t,s,a){const l=e.serverCache,c=Yw(e,l.getNode(),l.isFullyInitialized()||Ve(t),l.isFiltered());return nR(n,c,t,s,tR,a)}function SP(n,e,t,s,a,l){let c;if(kf(s,t)!=null)return e;{const d=new S_(s,e,a),p=e.eventCache.getNode();let g;if(Ve(t)||He(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=vg(s,Ra(e));else{const T=e.serverCache.getNode();le(T instanceof Qe,"serverChildren would be complete if leaf node"),y=Zw(s,T)}y=y,g=n.filter.updateFullNode(p,y,l)}else{const y=He(t);let T=T_(s,y,e.serverCache);T==null&&e.serverCache.isCompleteForChild(y)&&(T=p.getImmediateChild(y)),T!=null?g=n.filter.updateChild(p,y,T,lt(t),d,l):e.eventCache.getNode().hasChild(y)?g=n.filter.updateChild(p,y,Qe.EMPTY_NODE,lt(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=vg(s,Ra(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||kf(s,it())!=null,Uu(e,g,c,n.filter.filtersNodes())}}function AP(n,e){const t=Ra(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ve(e)&&!t.getImmediateChild(He(e)).isEmpty())?t.getChild(e):null}function j0(n,e,t,s){e.type===Di.MERGE&&e.source.queryId!==null&&(le(Ra(n.viewCache_),"We should always have a full cache before handling merges"),le(gg(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=_P(n.processor_,a,e,t,s);return gP(n.processor_,l.viewCache),le(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,wP(n,l.changes,l.viewCache.eventCache.getNode())}function wP(n,e,t,s){const a=n.eventRegistrations_;return XM(n.eventGenerator_,e,t,a)}/**
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
 */let q0;function RP(n){le(!q0,"__referenceConstructor has already been defined"),q0=n}function A_(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return le(l!=null,"SyncTree gave us an op for an invalid query."),j0(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(j0(c,e,t,s));return l}}function w_(n,e){let t=null;for(const s of n.views.values())t=t||AP(s,e);return t}/**
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
 */let G0;function bP(n){le(!G0,"__referenceConstructor has already been defined"),G0=n}class K0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ot(null),this.pendingWriteTree_=fP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function CP(n,e,t,s,a){return tP(n.pendingWriteTree_,e,t,s,a),a?rd(n,new wa(jw(),e,t)):[]}function Po(n,e,t=!1){const s=nP(n.pendingWriteTree_,e);if(iP(n.pendingWriteTree_,e)){let l=new ot(null);return s.snap!=null?l=l.set(it(),!0):Jn(s.children,c=>{l=l.set(new ut(c),!0)}),rd(n,new Df(s.path,l,t))}else return[]}function sd(n,e,t){return rd(n,new wa(qw(),e,t))}function IP(n,e,t){const s=ot.fromObject(t);return rd(n,new Wu(qw(),e,s))}function NP(n,e,t,s){const a=aR(n,s);if(a!=null){const l=oR(a),c=l.path,d=l.queryId,p=Wn(c,e),g=new wa(Gw(d),p,t);return lR(n,c,g)}else return[]}function OP(n,e,t,s){const a=aR(n,s);if(a){const l=oR(a),c=l.path,d=l.queryId,p=Wn(c,e),g=ot.fromObject(t),y=new Wu(Gw(d),p,g);return lR(n,c,y)}else return[]}function iR(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=Wn(c,e),g=w_(d,p);if(g)return g});return Xw(a,e,l,t,!0)}function rd(n,e){return sR(e,n.syncPointTree_,null,$w(n.pendingWriteTree_,it()))}function sR(n,e,t,s){if(Ve(n.path))return rR(n,e,t,s);{const a=e.get(it());t==null&&a!=null&&(t=w_(a,it()));let l=[];const c=He(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,y=Jw(s,c);l=l.concat(sR(d,p,g,y))}return a&&(l=l.concat(A_(a,n,s,t))),l}}function rR(n,e,t,s){const a=e.get(it());t==null&&a!=null&&(t=w_(a,it()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=Jw(s,c),y=n.operationForChild(c);y&&(l=l.concat(rR(y,d,p,g)))}),a&&(l=l.concat(A_(a,n,s,t))),l}function aR(n,e){return n.tagToQueryMap.get(e)}function oR(n){const e=n.indexOf("$");return le(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ut(n.substr(0,e))}}function lR(n,e,t){const s=n.syncPointTree_.get(e);le(s,"Missing sync point for query tag that we're tracking");const a=$w(n.pendingWriteTree_,e);return A_(s,t,a,null)}/**
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
 */class R_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new R_(t)}node(){return this.node_}}class b_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Kt(this.path_,e);return new b_(this.syncTree_,t)}node(){return iR(this.syncTree_,this.path_)}}const DP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Y0=function(n,e,t){if(!n||typeof n!="object")return n;if(le(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return kP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return MP(n[".sv"],e);le(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},kP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:le(!1,"Unexpected server value: "+n)}},MP=function(n,e,t){n.hasOwnProperty("increment")||le(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&le(!1,"Unexpected increment value: "+s);const a=e.node();if(le(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},PP=function(n,e,t,s){return C_(e,new b_(t,n),s)},xP=function(n,e,t){return C_(n,new R_(e),t)};function C_(n,e,t){const s=n.getPriority().val(),a=Y0(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=Y0(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new qt(d,cn(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new qt(a))),c.forEachChild(fn,(d,p)=>{const g=C_(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
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
 */class I_{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function N_(n,e){let t=e instanceof ut?e:new ut(e),s=n,a=He(t);for(;a!==null;){const l=Fo(s.node.children,a)||{children:{},childCount:0};s=new I_(a,s,l),t=lt(t),a=He(t)}return s}function rl(n){return n.node.value}function uR(n,e){n.node.value=e,Sg(n)}function cR(n){return n.node.childCount>0}function LP(n){return rl(n)===void 0&&!cR(n)}function ad(n,e){Jn(n.node.children,(t,s)=>{e(new I_(t,n,s))})}function hR(n,e,t,s){t&&e(n),ad(n,a=>{hR(a,e,!0)})}function VP(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function mc(n){return new ut(n.parent===null?n.name:mc(n.parent)+"/"+n.name)}function Sg(n){n.parent!==null&&UP(n.parent,n.name,n)}function UP(n,e,t){const s=LP(t),a=Ns(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,Sg(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,Sg(n))}/**
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
 */const BP=/[\[\].#$\/\u0000-\u001F\u007F]/,zP=/[\[\].#$\u0000-\u001F\u007F]/,Gm=10*1024*1024,fR=function(n){return typeof n=="string"&&n.length!==0&&!BP.test(n)},FP=function(n){return typeof n=="string"&&n.length!==0&&!zP.test(n)},HP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),FP(n)},dR=function(n,e,t){const s=t instanceof ut?new TM(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ga(s));if(typeof e=="function")throw new Error(n+"contains a function "+ga(s)+" with contents = "+e.toString());if(fw(e))throw new Error(n+"contains "+e.toString()+" "+ga(s));if(typeof e=="string"&&e.length>Gm/3&&Xf(e)>Gm)throw new Error(n+"contains a string greater than "+Gm+" utf8 bytes "+ga(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Jn(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!fR(c)))throw new Error(n+" contains an invalid key ("+c+") "+ga(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);SM(s,c),dR(n,d,s),AM(s)}),a&&l)throw new Error(n+' contains ".value" child '+ga(s)+" in addition to actual children.")}},jP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!HP(t))throw new Error(aO(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class qP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function GP(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!xw(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function ka(n,e,t){GP(n,t),KP(n,s=>li(s,e)||li(e,s))}function KP(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(YP(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function YP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Lu&&un("event: "+t.toString()),dc(s)}}}/**
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
 */const QP="repo_interrupt",$P=25;class WP{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Of(),this.transactionQueueTree_=new I_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function XP(n,e,t){if(n.stats_=m_(n.repoInfo_),n.forceRestClient_||Gk())n.server_=new Nf(n.repoInfo_,(s,a,l,c)=>{Q0(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>$0(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{en(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ts(n.repoInfo_,e,(s,a,l,c)=>{Q0(n,s,a,l,c)},s=>{$0(n,s)},s=>{JP(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Xk(n.repoInfo_,()=>new WM(n.stats_,n.server_)),n.infoData_=new GM,n.infoSyncTree_=new K0({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=sd(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),O_(n,"connected",!1),n.serverSyncTree_=new K0({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);ka(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function ZP(n){const t=n.infoData_.getNode(new ut(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function pR(n){return DP({timestamp:ZP(n)})}function Q0(n,e,t,s,a){n.dataUpdateCount++;const l=new ut(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=yf(t,g=>cn(g));c=OP(n.serverSyncTree_,l,p,a)}else{const p=cn(t);c=NP(n.serverSyncTree_,l,p,a)}else if(s){const p=yf(t,g=>cn(g));c=IP(n.serverSyncTree_,l,p)}else{const p=cn(t);c=sd(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=k_(n,l)),ka(n.eventQueue_,d,c)}function $0(n,e){O_(n,"connected",e),e===!1&&tx(n)}function JP(n,e){Jn(e,(t,s)=>{O_(n,t,s)})}function O_(n,e,t){const s=new ut("/.info/"+e),a=cn(t);n.infoData_.updateSnapshot(s,a);const l=sd(n.infoSyncTree_,s,a);ka(n.eventQueue_,s,l)}function ex(n){return n.nextWriteId_++}function tx(n){mR(n,"onDisconnectEvents");const e=pR(n),t=Of();mg(n.onDisconnect_,it(),(a,l)=>{const c=PP(a,l,n.serverSyncTree_,e);Hw(t,a,c)});let s=[];mg(t,it(),(a,l)=>{s=s.concat(sd(n.serverSyncTree_,a,l));const c=rx(n,a);k_(n,c)}),n.onDisconnect_=Of(),ka(n.eventQueue_,it(),s)}function nx(n){n.persistentConnection_&&n.persistentConnection_.interrupt(QP)}function mR(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),un(t,...e)}function gR(n,e,t){return iR(n.serverSyncTree_,e,t)||Qe.EMPTY_NODE}function D_(n,e=n.transactionQueueTree_){if(e||od(n,e),rl(e)){const t=yR(n,e);le(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&ix(n,mc(e),t)}else cR(e)&&ad(e,t=>{D_(n,t)})}function ix(n,e,t){const s=t.map(g=>g.currentWriteId),a=gR(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];le(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=Wn(e,y.path);l=l.updateChild(T,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{mR(n,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const T=[];for(let S=0;S<t.length;S++)t[S].status=2,y=y.concat(Po(n.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&T.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();od(n,N_(n.transactionQueueTree_,e)),D_(n,n.transactionQueueTree_),ka(n.eventQueue_,e,y);for(let S=0;S<T.length;S++)dc(T[S])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{xn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}k_(n,e)}},c)}function k_(n,e){const t=_R(n,e),s=mc(t),a=yR(n,t);return sx(n,a,s),s}function sx(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=Wn(t,p.path);let y=!1,T;if(le(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,T=p.abortReason,a=a.concat(Po(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=$P)y=!0,T="maxretry",a=a.concat(Po(n.serverSyncTree_,p.currentWriteId,!0));else{const S=gR(n,p.path,c);p.currentInputSnapshot=S;const O=e[d].update(S.val());if(O!==void 0){dR("transaction failed: Data returned ",O,p.path);let I=cn(O);typeof O=="object"&&O!=null&&Ns(O,".priority")||(I=I.updatePriority(S.getPriority()));const B=p.currentWriteId,Q=pR(n),X=xP(I,S,Q);p.currentOutputSnapshotRaw=I,p.currentOutputSnapshotResolved=X,p.currentWriteId=ex(n),c.splice(c.indexOf(B),1),a=a.concat(CP(n.serverSyncTree_,p.path,X,p.currentWriteId,p.applyLocally)),a=a.concat(Po(n.serverSyncTree_,B,!0))}else y=!0,T="nodata",a=a.concat(Po(n.serverSyncTree_,p.currentWriteId,!0))}ka(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,function(S){setTimeout(S,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}od(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)dc(s[d]);D_(n,n.transactionQueueTree_)}function _R(n,e){let t,s=n.transactionQueueTree_;for(t=He(e);t!==null&&rl(s)===void 0;)s=N_(s,t),e=lt(e),t=He(e);return s}function yR(n,e){const t=[];return vR(n,e,t),t.sort((s,a)=>s.order-a.order),t}function vR(n,e,t){const s=rl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);ad(e,a=>{vR(n,a,t)})}function od(n,e){const t=rl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,uR(e,t.length>0?t:void 0)}ad(e,s=>{od(n,s)})}function rx(n,e){const t=mc(_R(n,e)),s=N_(n.transactionQueueTree_,e);return VP(s,a=>{Km(n,a)}),Km(n,s),hR(s,a=>{Km(n,a)}),t}function Km(n,e){const t=rl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(le(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(le(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Po(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?uR(e,void 0):t.length=l+1,ka(n.eventQueue_,mc(e),a);for(let c=0;c<s.length;c++)dc(s[c])}}/**
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
 */function ax(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function ox(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):xn(`Invalid query segment '${t}' in query '${n}'`)}return e}const W0=function(n,e){const t=lx(n),s=t.namespace;t.domain==="firebase.com"&&Sa(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Sa("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Vk();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Qk(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new ut(t.pathString)}},lx=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let y=n.indexOf("/");y===-1&&(y=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(y,T)),y<T&&(a=ax(n.substring(y,T)));const S=ox(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const O=e.slice(0,g);if(O.toLowerCase()==="localhost")t="localhost";else if(O.split(".").length<=2)t=O;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),t=e.substring(I+1),l=s}"ns"in S&&(l=S.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
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
 */class M_{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Ve(this._path)?null:kw(this._path)}get ref(){return new al(this._repo,this._path)}get _queryIdentifier(){const e=x0(this._queryParams),t=d_(e);return t==="{}"?"default":t}get _queryObject(){return x0(this._queryParams)}isEqual(e){if(e=Yt(e),!(e instanceof M_))return!1;const t=this._repo===e._repo,s=xw(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+EM(this._path)}}class al extends M_{constructor(e,t){super(e,t,new v_,!1)}get parent(){const e=Pw(this._path);return e===null?null:new al(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}RP(al);bP(al);/**
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
 */const ux="FIREBASE_DATABASE_EMULATOR_HOST",Ag={};let cx=!1;function hx(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Sa("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),un("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=W0(l,a),d=c.repoInfo,p;typeof process<"u"&&g0&&(p=g0[ux]),p?(l=`http://${p}?ns=${d.namespace}`,c=W0(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new Yk(n.name,n.options,e);jP("Invalid Firebase Database URL",c),Ve(c.path)||Sa("Database URL must point to the root of a Firebase Database (not including a child path).");const y=dx(d,n,g,new Kk(n,t));return new px(y,n)}function fx(n,e){const t=Ag[e];(!t||t[n.key]!==n)&&Sa(`Database ${e}(${n.repoInfo_}) has already been deleted.`),nx(n),delete t[n.key]}function dx(n,e,t,s){let a=Ag[e.name];a||(a={},Ag[e.name]=a);let l=a[n.toURLString()];return l&&Sa("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new WP(n,cx,t,s),a[n.toURLString()]=l,l}class px{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(XP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new al(this._repo,it())),this._rootInternal}_delete(){return this._rootInternal!==null&&(fx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Sa("Cannot call "+e+" on a deleted database.")}}/**
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
 */function mx(n){Dk(br),yr(new As("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return hx(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Xn(_0,y0,n),Xn(_0,y0,"esm2017")}Ts.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ts.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};mx();var X0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mr,ER;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,R){function b(){}b.prototype=R.prototype,M.D=R.prototype,M.prototype=new b,M.prototype.constructor=M,M.C=function(k,x,V){for(var N=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)N[Nt-2]=arguments[Nt];return R.prototype[x].apply(k,N)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(M,R,b){b||(b=0);var k=Array(16);if(typeof R=="string")for(var x=0;16>x;++x)k[x]=R.charCodeAt(b++)|R.charCodeAt(b++)<<8|R.charCodeAt(b++)<<16|R.charCodeAt(b++)<<24;else for(x=0;16>x;++x)k[x]=R[b++]|R[b++]<<8|R[b++]<<16|R[b++]<<24;R=M.g[0],b=M.g[1],x=M.g[2];var V=M.g[3],N=R+(V^b&(x^V))+k[0]+3614090360&4294967295;R=b+(N<<7&4294967295|N>>>25),N=V+(x^R&(b^x))+k[1]+3905402710&4294967295,V=R+(N<<12&4294967295|N>>>20),N=x+(b^V&(R^b))+k[2]+606105819&4294967295,x=V+(N<<17&4294967295|N>>>15),N=b+(R^x&(V^R))+k[3]+3250441966&4294967295,b=x+(N<<22&4294967295|N>>>10),N=R+(V^b&(x^V))+k[4]+4118548399&4294967295,R=b+(N<<7&4294967295|N>>>25),N=V+(x^R&(b^x))+k[5]+1200080426&4294967295,V=R+(N<<12&4294967295|N>>>20),N=x+(b^V&(R^b))+k[6]+2821735955&4294967295,x=V+(N<<17&4294967295|N>>>15),N=b+(R^x&(V^R))+k[7]+4249261313&4294967295,b=x+(N<<22&4294967295|N>>>10),N=R+(V^b&(x^V))+k[8]+1770035416&4294967295,R=b+(N<<7&4294967295|N>>>25),N=V+(x^R&(b^x))+k[9]+2336552879&4294967295,V=R+(N<<12&4294967295|N>>>20),N=x+(b^V&(R^b))+k[10]+4294925233&4294967295,x=V+(N<<17&4294967295|N>>>15),N=b+(R^x&(V^R))+k[11]+2304563134&4294967295,b=x+(N<<22&4294967295|N>>>10),N=R+(V^b&(x^V))+k[12]+1804603682&4294967295,R=b+(N<<7&4294967295|N>>>25),N=V+(x^R&(b^x))+k[13]+4254626195&4294967295,V=R+(N<<12&4294967295|N>>>20),N=x+(b^V&(R^b))+k[14]+2792965006&4294967295,x=V+(N<<17&4294967295|N>>>15),N=b+(R^x&(V^R))+k[15]+1236535329&4294967295,b=x+(N<<22&4294967295|N>>>10),N=R+(x^V&(b^x))+k[1]+4129170786&4294967295,R=b+(N<<5&4294967295|N>>>27),N=V+(b^x&(R^b))+k[6]+3225465664&4294967295,V=R+(N<<9&4294967295|N>>>23),N=x+(R^b&(V^R))+k[11]+643717713&4294967295,x=V+(N<<14&4294967295|N>>>18),N=b+(V^R&(x^V))+k[0]+3921069994&4294967295,b=x+(N<<20&4294967295|N>>>12),N=R+(x^V&(b^x))+k[5]+3593408605&4294967295,R=b+(N<<5&4294967295|N>>>27),N=V+(b^x&(R^b))+k[10]+38016083&4294967295,V=R+(N<<9&4294967295|N>>>23),N=x+(R^b&(V^R))+k[15]+3634488961&4294967295,x=V+(N<<14&4294967295|N>>>18),N=b+(V^R&(x^V))+k[4]+3889429448&4294967295,b=x+(N<<20&4294967295|N>>>12),N=R+(x^V&(b^x))+k[9]+568446438&4294967295,R=b+(N<<5&4294967295|N>>>27),N=V+(b^x&(R^b))+k[14]+3275163606&4294967295,V=R+(N<<9&4294967295|N>>>23),N=x+(R^b&(V^R))+k[3]+4107603335&4294967295,x=V+(N<<14&4294967295|N>>>18),N=b+(V^R&(x^V))+k[8]+1163531501&4294967295,b=x+(N<<20&4294967295|N>>>12),N=R+(x^V&(b^x))+k[13]+2850285829&4294967295,R=b+(N<<5&4294967295|N>>>27),N=V+(b^x&(R^b))+k[2]+4243563512&4294967295,V=R+(N<<9&4294967295|N>>>23),N=x+(R^b&(V^R))+k[7]+1735328473&4294967295,x=V+(N<<14&4294967295|N>>>18),N=b+(V^R&(x^V))+k[12]+2368359562&4294967295,b=x+(N<<20&4294967295|N>>>12),N=R+(b^x^V)+k[5]+4294588738&4294967295,R=b+(N<<4&4294967295|N>>>28),N=V+(R^b^x)+k[8]+2272392833&4294967295,V=R+(N<<11&4294967295|N>>>21),N=x+(V^R^b)+k[11]+1839030562&4294967295,x=V+(N<<16&4294967295|N>>>16),N=b+(x^V^R)+k[14]+4259657740&4294967295,b=x+(N<<23&4294967295|N>>>9),N=R+(b^x^V)+k[1]+2763975236&4294967295,R=b+(N<<4&4294967295|N>>>28),N=V+(R^b^x)+k[4]+1272893353&4294967295,V=R+(N<<11&4294967295|N>>>21),N=x+(V^R^b)+k[7]+4139469664&4294967295,x=V+(N<<16&4294967295|N>>>16),N=b+(x^V^R)+k[10]+3200236656&4294967295,b=x+(N<<23&4294967295|N>>>9),N=R+(b^x^V)+k[13]+681279174&4294967295,R=b+(N<<4&4294967295|N>>>28),N=V+(R^b^x)+k[0]+3936430074&4294967295,V=R+(N<<11&4294967295|N>>>21),N=x+(V^R^b)+k[3]+3572445317&4294967295,x=V+(N<<16&4294967295|N>>>16),N=b+(x^V^R)+k[6]+76029189&4294967295,b=x+(N<<23&4294967295|N>>>9),N=R+(b^x^V)+k[9]+3654602809&4294967295,R=b+(N<<4&4294967295|N>>>28),N=V+(R^b^x)+k[12]+3873151461&4294967295,V=R+(N<<11&4294967295|N>>>21),N=x+(V^R^b)+k[15]+530742520&4294967295,x=V+(N<<16&4294967295|N>>>16),N=b+(x^V^R)+k[2]+3299628645&4294967295,b=x+(N<<23&4294967295|N>>>9),N=R+(x^(b|~V))+k[0]+4096336452&4294967295,R=b+(N<<6&4294967295|N>>>26),N=V+(b^(R|~x))+k[7]+1126891415&4294967295,V=R+(N<<10&4294967295|N>>>22),N=x+(R^(V|~b))+k[14]+2878612391&4294967295,x=V+(N<<15&4294967295|N>>>17),N=b+(V^(x|~R))+k[5]+4237533241&4294967295,b=x+(N<<21&4294967295|N>>>11),N=R+(x^(b|~V))+k[12]+1700485571&4294967295,R=b+(N<<6&4294967295|N>>>26),N=V+(b^(R|~x))+k[3]+2399980690&4294967295,V=R+(N<<10&4294967295|N>>>22),N=x+(R^(V|~b))+k[10]+4293915773&4294967295,x=V+(N<<15&4294967295|N>>>17),N=b+(V^(x|~R))+k[1]+2240044497&4294967295,b=x+(N<<21&4294967295|N>>>11),N=R+(x^(b|~V))+k[8]+1873313359&4294967295,R=b+(N<<6&4294967295|N>>>26),N=V+(b^(R|~x))+k[15]+4264355552&4294967295,V=R+(N<<10&4294967295|N>>>22),N=x+(R^(V|~b))+k[6]+2734768916&4294967295,x=V+(N<<15&4294967295|N>>>17),N=b+(V^(x|~R))+k[13]+1309151649&4294967295,b=x+(N<<21&4294967295|N>>>11),N=R+(x^(b|~V))+k[4]+4149444226&4294967295,R=b+(N<<6&4294967295|N>>>26),N=V+(b^(R|~x))+k[11]+3174756917&4294967295,V=R+(N<<10&4294967295|N>>>22),N=x+(R^(V|~b))+k[2]+718787259&4294967295,x=V+(N<<15&4294967295|N>>>17),N=b+(V^(x|~R))+k[9]+3951481745&4294967295,M.g[0]=M.g[0]+R&4294967295,M.g[1]=M.g[1]+(x+(N<<21&4294967295|N>>>11))&4294967295,M.g[2]=M.g[2]+x&4294967295,M.g[3]=M.g[3]+V&4294967295}s.prototype.u=function(M,R){R===void 0&&(R=M.length);for(var b=R-this.blockSize,k=this.B,x=this.h,V=0;V<R;){if(x==0)for(;V<=b;)a(this,M,V),V+=this.blockSize;if(typeof M=="string"){for(;V<R;)if(k[x++]=M.charCodeAt(V++),x==this.blockSize){a(this,k),x=0;break}}else for(;V<R;)if(k[x++]=M[V++],x==this.blockSize){a(this,k),x=0;break}}this.h=x,this.o+=R},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var R=1;R<M.length-8;++R)M[R]=0;var b=8*this.o;for(R=M.length-8;R<M.length;++R)M[R]=b&255,b/=256;for(this.u(M),M=Array(16),R=b=0;4>R;++R)for(var k=0;32>k;k+=8)M[b++]=this.g[R]>>>k&255;return M};function l(M,R){var b=d;return Object.prototype.hasOwnProperty.call(b,M)?b[M]:b[M]=R(M)}function c(M,R){this.h=R;for(var b=[],k=!0,x=M.length-1;0<=x;x--){var V=M[x]|0;k&&V==R||(b[x]=V,k=!1)}this.g=b}var d={};function p(M){return-128<=M&&128>M?l(M,function(R){return new c([R|0],0>R?-1:0)}):new c([M|0],0>M?-1:0)}function g(M){if(isNaN(M)||!isFinite(M))return T;if(0>M)return B(g(-M));for(var R=[],b=1,k=0;M>=b;k++)R[k]=M/b|0,b*=4294967296;return new c(R,0)}function y(M,R){if(M.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(M.charAt(0)=="-")return B(y(M.substring(1),R));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=g(Math.pow(R,8)),k=T,x=0;x<M.length;x+=8){var V=Math.min(8,M.length-x),N=parseInt(M.substring(x,x+V),R);8>V?(V=g(Math.pow(R,V)),k=k.j(V).add(g(N))):(k=k.j(b),k=k.add(g(N)))}return k}var T=p(0),S=p(1),O=p(16777216);n=c.prototype,n.m=function(){if(H(this))return-B(this).m();for(var M=0,R=1,b=0;b<this.g.length;b++){var k=this.i(b);M+=(0<=k?k:4294967296+k)*R,R*=4294967296}return M},n.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(I(this))return"0";if(H(this))return"-"+B(this).toString(M);for(var R=g(Math.pow(M,6)),b=this,k="";;){var x=ue(b,R).g;b=Q(b,x.j(R));var V=((0<b.g.length?b.g[0]:b.h)>>>0).toString(M);if(b=x,I(b))return V+k;for(;6>V.length;)V="0"+V;k=V+k}},n.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function I(M){if(M.h!=0)return!1;for(var R=0;R<M.g.length;R++)if(M.g[R]!=0)return!1;return!0}function H(M){return M.h==-1}n.l=function(M){return M=Q(this,M),H(M)?-1:I(M)?0:1};function B(M){for(var R=M.g.length,b=[],k=0;k<R;k++)b[k]=~M.g[k];return new c(b,~M.h).add(S)}n.abs=function(){return H(this)?B(this):this},n.add=function(M){for(var R=Math.max(this.g.length,M.g.length),b=[],k=0,x=0;x<=R;x++){var V=k+(this.i(x)&65535)+(M.i(x)&65535),N=(V>>>16)+(this.i(x)>>>16)+(M.i(x)>>>16);k=N>>>16,V&=65535,N&=65535,b[x]=N<<16|V}return new c(b,b[b.length-1]&-2147483648?-1:0)};function Q(M,R){return M.add(B(R))}n.j=function(M){if(I(this)||I(M))return T;if(H(this))return H(M)?B(this).j(B(M)):B(B(this).j(M));if(H(M))return B(this.j(B(M)));if(0>this.l(O)&&0>M.l(O))return g(this.m()*M.m());for(var R=this.g.length+M.g.length,b=[],k=0;k<2*R;k++)b[k]=0;for(k=0;k<this.g.length;k++)for(var x=0;x<M.g.length;x++){var V=this.i(k)>>>16,N=this.i(k)&65535,Nt=M.i(x)>>>16,ct=M.i(x)&65535;b[2*k+2*x]+=N*ct,X(b,2*k+2*x),b[2*k+2*x+1]+=V*ct,X(b,2*k+2*x+1),b[2*k+2*x+1]+=N*Nt,X(b,2*k+2*x+1),b[2*k+2*x+2]+=V*Nt,X(b,2*k+2*x+2)}for(k=0;k<R;k++)b[k]=b[2*k+1]<<16|b[2*k];for(k=R;k<2*R;k++)b[k]=0;return new c(b,0)};function X(M,R){for(;(M[R]&65535)!=M[R];)M[R+1]+=M[R]>>>16,M[R]&=65535,R++}function te(M,R){this.g=M,this.h=R}function ue(M,R){if(I(R))throw Error("division by zero");if(I(M))return new te(T,T);if(H(M))return R=ue(B(M),R),new te(B(R.g),B(R.h));if(H(R))return R=ue(M,B(R)),new te(B(R.g),R.h);if(30<M.g.length){if(H(M)||H(R))throw Error("slowDivide_ only works with positive integers.");for(var b=S,k=R;0>=k.l(M);)b=ce(b),k=ce(k);var x=Ee(b,1),V=Ee(k,1);for(k=Ee(k,2),b=Ee(b,2);!I(k);){var N=V.add(k);0>=N.l(M)&&(x=x.add(b),V=N),k=Ee(k,1),b=Ee(b,1)}return R=Q(M,x.j(R)),new te(x,R)}for(x=T;0<=M.l(R);){for(b=Math.max(1,Math.floor(M.m()/R.m())),k=Math.ceil(Math.log(b)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),V=g(b),N=V.j(R);H(N)||0<N.l(M);)b-=k,V=g(b),N=V.j(R);I(V)&&(V=S),x=x.add(V),M=Q(M,N)}return new te(x,M)}n.A=function(M){return ue(this,M).h},n.and=function(M){for(var R=Math.max(this.g.length,M.g.length),b=[],k=0;k<R;k++)b[k]=this.i(k)&M.i(k);return new c(b,this.h&M.h)},n.or=function(M){for(var R=Math.max(this.g.length,M.g.length),b=[],k=0;k<R;k++)b[k]=this.i(k)|M.i(k);return new c(b,this.h|M.h)},n.xor=function(M){for(var R=Math.max(this.g.length,M.g.length),b=[],k=0;k<R;k++)b[k]=this.i(k)^M.i(k);return new c(b,this.h^M.h)};function ce(M){for(var R=M.g.length+1,b=[],k=0;k<R;k++)b[k]=M.i(k)<<1|M.i(k-1)>>>31;return new c(b,M.h)}function Ee(M,R){var b=R>>5;R%=32;for(var k=M.g.length-b,x=[],V=0;V<k;V++)x[V]=0<R?M.i(V+b)>>>R|M.i(V+b+1)<<32-R:M.i(V+b);return new c(x,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,ER=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,mr=c}).apply(typeof X0<"u"?X0:typeof self<"u"?self:typeof window<"u"?window:{});var Wh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var TR,Du,SR,cf,wg,AR,wR,RR;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wh=="object"&&Wh];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var w=0;w<h.length-1;w++){var U=h[w];if(!(U in v))break e;v=v[U]}h=h[h.length-1],w=v[h],_=_(w),_!=w&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,w=!1,U={next:function(){if(!w&&v<h.length){var K=v++;return{value:_(K,h[K]),done:!1}}return w=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,w),h.apply(_,U)}}return function(){return h.apply(_,arguments)}}function S(h,_,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,S.apply(null,arguments)}function O(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var w=v.slice();return w.push.apply(w,arguments),h.apply(this,w)}}function I(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(w,U,K){for(var re=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)re[Ue-2]=arguments[Ue];return _.prototype[U].apply(w,re)}}function H(h){const _=h.length;if(0<_){const v=Array(_);for(let w=0;w<_;w++)v[w]=h[w];return v}return[]}function B(h,_){for(let v=1;v<arguments.length;v++){const w=arguments[v];if(p(w)){const U=h.length||0,K=w.length||0;h.length=U+K;for(let re=0;re<K;re++)h[U+re]=w[re]}else h.push(w)}}class Q{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function X(h){return/^[\s\xa0]*$/.test(h)}function te(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function ue(h){return ue[" "](h),h}ue[" "]=function(){};var ce=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function Ee(h,_,v){for(const w in h)_.call(v,h[w],w,h)}function M(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function R(h){const _={};for(const v in h)_[v]=h[v];return _}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(h,_){let v,w;for(let U=1;U<arguments.length;U++){w=arguments[U];for(v in w)h[v]=w[v];for(let K=0;K<b.length;K++)v=b[K],Object.prototype.hasOwnProperty.call(w,v)&&(h[v]=w[v])}}function x(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function V(h){d.setTimeout(()=>{throw h},0)}function N(){var h=xe;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Nt{constructor(){this.h=this.g=null}add(_,v){const w=ct.get();w.set(_,v),this.h?this.h.next=w:this.g=w,this.h=w}}var ct=new Q(()=>new G,h=>h.reset());class G{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,de=!1,xe=new Nt,D=()=>{const h=d.Promise.resolve(void 0);ae=()=>{h.then(ee)}};var ee=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(v){V(v)}var _=ct;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}de=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var me=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h}();function Oe(h,_){if(ie.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,w=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ce){e:{try{ue(_.nodeName);var U=!0;break e}catch{}U=!1}U||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:we[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Oe.aa.h.call(this)}}I(Oe,ie);var we={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Ut="closure_listenable_"+(1e6*Math.random()|0),rt=0;function fi(h,_,v,w,U){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!w,this.ha=U,this.key=++rt,this.da=this.fa=!1}function Os(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function ji(h){this.src=h,this.g={},this.h=0}ji.prototype.add=function(h,_,v,w,U){var K=h.toString();h=this.g[K],h||(h=this.g[K]=[],this.h++);var re=Mr(h,_,w,U);return-1<re?(_=h[re],v||(_.fa=!1)):(_=new fi(_,this.src,K,!!w,U),_.fa=v,h.push(_)),_};function kr(h,_){var v=_.type;if(v in h.g){var w=h.g[v],U=Array.prototype.indexOf.call(w,_,void 0),K;(K=0<=U)&&Array.prototype.splice.call(w,U,1),K&&(Os(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Mr(h,_,v,w){for(var U=0;U<h.length;++U){var K=h[U];if(!K.da&&K.listener==_&&K.capture==!!v&&K.ha==w)return U}return-1}var Pr="closure_lm_"+(1e6*Math.random()|0),hl={};function Sc(h,_,v,w,U){if(Array.isArray(_)){for(var K=0;K<_.length;K++)Sc(h,_[K],v,w,U);return null}return v=Ac(v),h&&h[Ut]?h.K(_,v,g(w)?!!w.capture:!1,U):Vn(h,_,v,!1,w,U)}function Vn(h,_,v,w,U,K){if(!_)throw Error("Invalid event type");var re=g(U)?!!U.capture:!!U,Ue=La(h);if(Ue||(h[Pr]=Ue=new ji(h)),v=Ue.add(_,v,w,re,K),v.proxy)return v;if(w=Rd(),v.proxy=w,w.src=h,w.listener=v,h.addEventListener)me||(U=re),U===void 0&&(U=!1),h.addEventListener(_.toString(),w,U);else if(h.attachEvent)h.attachEvent(xr(_.toString()),w);else if(h.addListener&&h.removeListener)h.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Rd(){function h(v){return _.call(h.src,h.listener,v)}const _=bd;return h}function fl(h,_,v,w,U){if(Array.isArray(_))for(var K=0;K<_.length;K++)fl(h,_[K],v,w,U);else w=g(w)?!!w.capture:!!w,v=Ac(v),h&&h[Ut]?(h=h.i,_=String(_).toString(),_ in h.g&&(K=h.g[_],v=Mr(K,v,w,U),-1<v&&(Os(K[v]),Array.prototype.splice.call(K,v,1),K.length==0&&(delete h.g[_],h.h--)))):h&&(h=La(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Mr(_,v,w,U)),(v=-1<h?_[h]:null)&&xa(v))}function xa(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Ut])kr(_.i,h);else{var v=h.type,w=h.proxy;_.removeEventListener?_.removeEventListener(v,w,h.capture):_.detachEvent?_.detachEvent(xr(v),w):_.addListener&&_.removeListener&&_.removeListener(w),(v=La(_))?(kr(v,h),v.h==0&&(v.src=null,_[Pr]=null)):Os(h)}}}function xr(h){return h in hl?hl[h]:hl[h]="on"+h}function bd(h,_){if(h.da)h=!0;else{_=new Oe(_,this);var v=h.listener,w=h.ha||h.src;h.fa&&xa(h),h=v.call(w,_)}return h}function La(h){return h=h[Pr],h instanceof ji?h:null}var dl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ac(h){return typeof h=="function"?h:(h[dl]||(h[dl]=function(_){return h.handleEvent(_)}),h[dl])}function gt(){oe.call(this),this.i=new ji(this),this.M=this,this.F=null}I(gt,oe),gt.prototype[Ut]=!0,gt.prototype.removeEventListener=function(h,_,v,w){fl(this,h,_,v,w)};function We(h,_){var v,w=h.F;if(w)for(v=[];w;w=w.F)v.push(w);if(h=h.M,w=_.type||_,typeof _=="string")_=new ie(_,h);else if(_ instanceof ie)_.target=_.target||h;else{var U=_;_=new ie(w,h),k(_,U)}if(U=!0,v)for(var K=v.length-1;0<=K;K--){var re=_.g=v[K];U=wn(re,w,!0,_)&&U}if(re=_.g=h,U=wn(re,w,!0,_)&&U,U=wn(re,w,!1,_)&&U,v)for(K=0;K<v.length;K++)re=_.g=v[K],U=wn(re,w,!1,_)&&U}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],w=0;w<v.length;w++)Os(v[w]);delete h.g[_],h.h--}}this.F=null},gt.prototype.K=function(h,_,v,w){return this.i.add(String(h),_,!1,v,w)},gt.prototype.L=function(h,_,v,w){return this.i.add(String(h),_,!0,v,w)};function wn(h,_,v,w){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var U=!0,K=0;K<_.length;++K){var re=_[K];if(re&&!re.da&&re.capture==v){var Ue=re.listener,Dt=re.ha||re.src;re.fa&&kr(h.i,re),U=Ue.call(Dt,w)!==!1&&U}}return U&&!w.defaultPrevented}function sn(h,_,v){if(typeof h=="function")v&&(h=S(h,v));else if(h&&typeof h.handleEvent=="function")h=S(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function wc(h){h.g=sn(()=>{h.g=null,h.i&&(h.i=!1,wc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Cd extends oe{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:wc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lr(h){oe.call(this),this.h=h,this.g={}}I(Lr,oe);var Vr=[];function Ur(h){Ee(h.g,function(_,v){this.g.hasOwnProperty(v)&&xa(_)},h),h.g={}}Lr.prototype.N=function(){Lr.aa.N.call(this),Ur(this)},Lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ei=d.JSON.stringify,Va=d.JSON.parse,Br=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function pl(){}pl.prototype.h=null;function ml(h){return h.h||(h.h=h.i())}function gl(){}var qi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gi(){ie.call(this,"d")}I(Gi,ie);function _l(){ie.call(this,"c")}I(_l,ie);var di={},yl=null;function Ds(){return yl=yl||new gt}di.La="serverreachability";function Ua(h){ie.call(this,di.La,h)}I(Ua,ie);function ks(h){const _=Ds();We(_,new Ua(_))}di.STAT_EVENT="statevent";function Rc(h,_){ie.call(this,di.STAT_EVENT,h),this.stat=_}I(Rc,ie);function ht(h){const _=Ds();We(_,new Rc(_,h))}di.Ma="timingevent";function Ot(h,_){ie.call(this,di.Ma,h),this.size=_}I(Ot,ie);function wt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Un(){this.g=!0}Un.prototype.xa=function(){this.g=!1};function vl(h,_,v,w,U,K){h.info(function(){if(h.g)if(K)for(var re="",Ue=K.split("&"),Dt=0;Dt<Ue.length;Dt++){var Be=Ue[Dt].split("=");if(1<Be.length){var zt=Be[0];Be=Be[1];var kt=zt.split("_");re=2<=kt.length&&kt[1]=="type"?re+(zt+"="+Be+"&"):re+(zt+"=redacted&")}}else re=null;else re=K;return"XMLHTTP REQ ("+w+") [attempt "+U+"]: "+_+`
`+v+`
`+re})}function Id(h,_,v,w,U,K,re){h.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+U+"]: "+_+`
`+v+`
`+K+" "+re})}function Ms(h,_,v,w){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+zr(h,v)+(w?" "+w:"")})}function bc(h,_){h.info(function(){return"TIMEOUT: "+_})}Un.prototype.info=function(){};function zr(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var w=v[h];if(!(2>w.length)){var U=w[1];if(Array.isArray(U)&&!(1>U.length)){var K=U[0];if(K!="noop"&&K!="stop"&&K!="close")for(var re=1;re<U.length;re++)U[re]=""}}}}return ei(v)}catch{return _}}var Ps={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ki={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pi;function mi(){}I(mi,pl),mi.prototype.g=function(){return new XMLHttpRequest},mi.prototype.i=function(){return{}},pi=new mi;function pn(h,_,v,w){this.j=h,this.i=_,this.l=v,this.R=w||1,this.U=new Lr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Et}function Et(){this.i=null,this.g="",this.h=!1}var El={},Ba={};function ti(h,_,v){h.L=1,h.v=Gr(Rn(_)),h.m=v,h.P=!0,Yi(h,null)}function Yi(h,_){h.F=Date.now(),Fr(h),h.A=Rn(h.v);var v=h.A,w=h.R;Array.isArray(w)||(w=[String(w)]),bl(v.i,"t",w),h.C=0,v=h.j.J,h.h=new Et,h.g=Hc(h.j,v?_:null,!h.m),0<h.O&&(h.M=new Cd(S(h.Y,h,h.g),h.O)),_=h.U,v=h.g,w=h.ca;var U="readystatechange";Array.isArray(U)||(U&&(Vr[0]=U.toString()),U=Vr);for(var K=0;K<U.length;K++){var re=Sc(v,U[K],w||_.handleEvent,!1,_.h||_);if(!re)break;_.g[re.key]=re}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),ks(),vl(h.i,h.u,h.A,h.l,h.R,h.m)}pn.prototype.ca=function(h){h=h.target;const _=this.M;_&&Hn(h)==3?_.j():this.Y(h)},pn.prototype.Y=function(h){try{if(h==this.g)e:{const kt=Hn(this.g);var _=this.g.Ba();const ts=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||Pc(this.g)))){this.J||kt!=4||_==7||(_==8||0>=ts?ks(3):ks(2)),xs(this);var v=this.g.Z();this.X=v;t:if(Cc(this)){var w=Pc(this.g);h="";var U=w.length,K=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),gi(this);var re="";break t}this.h.i=new d.TextDecoder}for(_=0;_<U;_++)this.h.h=!0,h+=this.h.i.decode(w[_],{stream:!(K&&_==U-1)});w.length=0,this.h.g+=h,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=v==200,Id(this.i,this.u,this.A,this.l,this.R,kt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,Dt=this.g;if((Ue=Dt.g?Dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(Ue)){var Be=Ue;break t}}Be=null}if(v=Be)Ms(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hr(this,v);else{this.o=!1,this.s=3,ht(12),Qt(this),gi(this);break e}}if(this.P){v=!0;let $t;for(;!this.J&&this.C<re.length;)if($t=Ic(this,re),$t==Ba){kt==4&&(this.s=4,ht(14),v=!1),Ms(this.i,this.l,null,"[Incomplete Response]");break}else if($t==El){this.s=4,ht(15),Ms(this.i,this.l,re,"[Invalid Chunk]"),v=!1;break}else Ms(this.i,this.l,$t,null),Hr(this,$t);if(Cc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||re.length!=0||this.h.h||(this.s=1,ht(16),v=!1),this.o=this.o&&v,!v)Ms(this.i,this.l,re,"[Invalid Chunked Response]"),Qt(this),gi(this);else if(0<re.length&&!this.W){this.W=!0;var zt=this.j;zt.g==this&&zt.ba&&!zt.M&&(zt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Jr(zt),zt.M=!0,ht(11))}}else Ms(this.i,this.l,re,null),Hr(this,re);kt==4&&Qt(this),this.o&&!this.J&&(kt==4?Bc(this.j,this):(this.o=!1,Fr(this)))}else Md(this.g),v==400&&0<re.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),Qt(this),gi(this)}}}catch{}finally{}};function Cc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Ic(h,_){var v=h.C,w=_.indexOf(`
`,v);return w==-1?Ba:(v=Number(_.substring(v,w)),isNaN(v)?El:(w+=1,w+v>_.length?Ba:(_=_.slice(w,w+v),h.C=w+v,_)))}pn.prototype.cancel=function(){this.J=!0,Qt(this)};function Fr(h){h.S=Date.now()+h.I,Nc(h,h.I)}function Nc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=wt(S(h.ba,h),_)}function xs(h){h.B&&(d.clearTimeout(h.B),h.B=null)}pn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(bc(this.i,this.A),this.L!=2&&(ks(),ht(17)),Qt(this),this.s=2,gi(this)):Nc(this,this.S-h)};function gi(h){h.j.G==0||h.J||Bc(h.j,h)}function Qt(h){xs(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Ur(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Hr(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Tl(v.h,h))){if(!h.K&&Tl(v.h,h)&&v.G==3){try{var w=v.Da.g.parse(_)}catch{w=null}if(Array.isArray(w)&&w.length==3){var U=w;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)Xa(v),$a(v);else break e;Dl(v),ht(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=wt(S(v.Za,v),6e3));if(1>=Fa(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else es(v,11)}else if((h.K||v.g==h)&&Xa(v),!X(_))for(U=v.Da.g.parse(_),_=0;_<U.length;_++){let Be=U[_];if(v.T=Be[0],Be=Be[1],v.G==2)if(Be[0]=="c"){v.K=Be[1],v.ia=Be[2];const zt=Be[3];zt!=null&&(v.la=zt,v.j.info("VER="+v.la));const kt=Be[4];kt!=null&&(v.Aa=kt,v.j.info("SVER="+v.Aa));const ts=Be[5];ts!=null&&typeof ts=="number"&&0<ts&&(w=1.5*ts,v.L=w,v.j.info("backChannelRequestTimeoutMs_="+w)),w=v;const $t=h.g;if($t){const Ai=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ai){var K=w.h;K.g||Ai.indexOf("spdy")==-1&&Ai.indexOf("quic")==-1&&Ai.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(Ha(K,K.h),K.h=null))}if(w.D){const Ml=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;Ml&&(w.ya=Ml,Je(w.I,w.D,Ml))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),w=v;var re=h;if(w.qa=Fc(w,w.J?w.ia:null,w.W),re.K){mn(w.h,re);var Ue=re,Dt=w.L;Dt&&(Ue.I=Dt),Ue.B&&(xs(Ue),Fr(Ue)),w.g=re}else Vc(w);0<v.i.length&&Wa(v)}else Be[0]!="stop"&&Be[0]!="close"||es(v,7);else v.G==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?es(v,7):Nl(v):Be[0]!="noop"&&v.l&&v.l.ta(Be),v.v=0)}}ks(4)}catch{}}var Oc=class{constructor(h,_){this.g=h,this.map=_}};function Qi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function za(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Fa(h){return h.h?1:h.g?h.g.size:0}function Tl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Ha(h,_){h.g?h.g.add(_):h.h=_}function mn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Qi.prototype.cancel=function(){if(this.i=Sl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Sl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return H(h.i)}function Nd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,w=0;w<v;w++)_.push(h[w]);return _}_=[],v=0;for(w in h)_[v++]=h[w];return _}function ja(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const w in h)_[v++]=w;return _}}}function Al(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=ja(h),w=Nd(h),U=w.length,K=0;K<U;K++)_.call(void 0,w[K],v&&v[K],h)}var jr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Od(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var w=h[v].indexOf("="),U=null;if(0<=w){var K=h[v].substring(0,w);U=h[v].substring(w+1)}else K=h[v];_(K,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Rt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Rt){this.h=h.h,qr(this,h.j),this.o=h.o,this.g=h.g,Ls(this,h.s),this.l=h.l;var _=h.i,v=new Wi;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),$i(this,v),this.m=h.m}else h&&(_=String(h).match(jr))?(this.h=!1,qr(this,_[1]||"",!0),this.o=Bn(_[2]||""),this.g=Bn(_[3]||"",!0),Ls(this,_[4]),this.l=Bn(_[5]||"",!0),$i(this,_[6]||"",!0),this.m=Bn(_[7]||"")):(this.h=!1,this.i=new Wi(null,this.h))}Rt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Kr(_,wl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Kr(_,wl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(Kr(v,v.charAt(0)=="/"?Dd:Rl,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",Kr(v,qa)),h.join("")};function Rn(h){return new Rt(h)}function qr(h,_,v){h.j=v?Bn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Ls(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function $i(h,_,v){_ instanceof Wi?(h.i=_,kc(h.i,h.h)):(v||(_=Kr(_,kd)),h.i=new Wi(_,h.h))}function Je(h,_,v){h.i.set(_,v)}function Gr(h){return Je(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Bn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Kr(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Dc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Dc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var wl=/[#\/\?@]/g,Rl=/[#\?:]/g,Dd=/[#\?]/g,kd=/[#\?@]/g,qa=/#/g;function Wi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function zn(h){h.g||(h.g=new Map,h.h=0,h.i&&Od(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=Wi.prototype,n.add=function(h,_){zn(this),this.i=null,h=_i(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function Xi(h,_){zn(h),_=_i(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Zi(h,_){return zn(h),_=_i(h,_),h.g.has(_)}n.forEach=function(h,_){zn(this),this.g.forEach(function(v,w){v.forEach(function(U){h.call(_,U,w,this)},this)},this)},n.na=function(){zn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let w=0;w<_.length;w++){const U=h[w];for(let K=0;K<U.length;K++)v.push(_[w])}return v},n.V=function(h){zn(this);let _=[];if(typeof h=="string")Zi(this,h)&&(_=_.concat(this.g.get(_i(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return zn(this),this.i=null,h=_i(this,h),Zi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function bl(h,_,v){Xi(h,_),0<v.length&&(h.i=null,h.g.set(_i(h,_),H(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var w=_[v];const K=encodeURIComponent(String(w)),re=this.V(w);for(w=0;w<re.length;w++){var U=K;re[w]!==""&&(U+="="+encodeURIComponent(String(re[w]))),h.push(U)}}return this.i=h.join("&")};function _i(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function kc(h,_){_&&!h.j&&(zn(h),h.i=null,h.g.forEach(function(v,w){var U=w.toLowerCase();w!=U&&(Xi(this,w),bl(this,U,v))},h)),h.j=_}function Yr(h,_){const v=new Un;if(d.Image){const w=new Image;w.onload=O(Fn,v,"TestLoadImage: loaded",!0,_,w),w.onerror=O(Fn,v,"TestLoadImage: error",!1,_,w),w.onabort=O(Fn,v,"TestLoadImage: abort",!1,_,w),w.ontimeout=O(Fn,v,"TestLoadImage: timeout",!1,_,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=h}else _(!1)}function ni(h,_){const v=new Un,w=new AbortController,U=setTimeout(()=>{w.abort(),Fn(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:w.signal}).then(K=>{clearTimeout(U),K.ok?Fn(v,"TestPingServer: ok",!0,_):Fn(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(U),Fn(v,"TestPingServer: error",!1,_)})}function Fn(h,_,v,w,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),w(v)}catch{}}function Qr(){this.g=new Br}function yi(h,_,v){const w=v||"";try{Al(h,function(U,K){let re=U;g(U)&&(re=ei(U)),_.push(w+K+"="+encodeURIComponent(re))})}catch(U){throw _.push(w+"type="+encodeURIComponent("_badmap")),U}}function Vs(h){this.l=h.Ub||null,this.j=h.eb||!1}I(Vs,pl),Vs.prototype.g=function(){return new Ji(this.l,this.j)},Vs.prototype.i=function(h){return function(){return h}}({});function Ji(h,_){gt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Ji,gt),n=Ji.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ei(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ei(this)),this.g&&(this.readyState=3,Ei(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?vi(this):Ei(this),this.readyState==3&&Cl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,vi(this))},n.Qa=function(h){this.g&&(this.response=h,vi(this))},n.ga=function(){this.g&&vi(this)};function vi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ei(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Ei(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Il(h){let _="";return Ee(h,function(v,w){_+=w,_+=":",_+=v,_+=`\r
`}),_}function Bt(h,_,v){e:{for(w in v){var w=!1;break e}w=!0}w||(v=Il(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):Je(h,_,v))}function Ye(h){gt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Ye,gt);var Ga=/^https?$/i,$r=["POST","PUT"];n=Ye.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pi.g(),this.v=this.o?ml(this.o):ml(pi),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(K){Mc(this,K);return}if(h=v||"",v=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var U in w)v.set(U,w[U]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const K of w.keys())v.set(K,w.get(K));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(v.keys()).find(K=>K.toLowerCase()=="content-type"),U=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call($r,_,void 0))||w||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,re]of v)this.g.setRequestHeader(K,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wr(this),this.u=!0,this.g.send(h),this.u=!1}catch(K){Mc(this,K)}};function Mc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Ka(h),Ti(h)}function Ka(h){h.A||(h.A=!0,We(h,"complete"),We(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,We(this,"complete"),We(this,"abort"),Ti(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ti(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ya(this):this.bb())},n.bb=function(){Ya(this)};function Ya(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Hn(h)!=4||h.Z()!=2)){if(h.u&&Hn(h)==4)sn(h.Ea,0,h);else if(We(h,"readystatechange"),Hn(h)==4){h.h=!1;try{const re=h.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var w;if(w=re===0){var U=String(h.D).match(jr)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),w=!Ga.test(U?U.toLowerCase():"")}v=w}if(v)We(h,"complete"),We(h,"success");else{h.m=6;try{var K=2<Hn(h)?h.g.statusText:""}catch{K=""}h.l=K+" ["+h.Z()+"]",Ka(h)}}finally{Ti(h)}}}}function Ti(h,_){if(h.g){Wr(h);const v=h.g,w=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||We(h,"ready");try{v.onreadystatechange=w}catch{}}}function Wr(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Hn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Va(_)}};function Pc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Md(h){const _={};h=(h.g&&2<=Hn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<h.length;w++){if(X(h[w]))continue;var v=x(h[w]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const K=_[U]||[];_[U]=K,K.push(v)}M(_,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xr(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function Qa(h){this.Aa=0,this.i=[],this.j=new Un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xr("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xr("baseRetryDelayMs",5e3,h),this.cb=Xr("retryDelaySeedMs",1e4,h),this.Wa=Xr("forwardChannelMaxRetries",2,h),this.wa=Xr("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Qi(h&&h.concurrentRequestLimit),this.Da=new Qr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Qa.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,w){ht(0),this.W=h,this.H=_||{},v&&w!==void 0&&(this.H.OSID=v,this.H.OAID=w),this.F=this.X,this.I=Fc(this,null,this.W),Wa(this)};function Nl(h){if(xc(h),h.G==3){var _=h.U++,v=Rn(h.I);if(Je(v,"SID",h.K),Je(v,"RID",_),Je(v,"TYPE","terminate"),Zr(h,v),_=new pn(h,h.j,_),_.L=2,_.v=Gr(Rn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=Hc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Fr(_)}zc(h)}function $a(h){h.g&&(Jr(h),h.g.cancel(),h.g=null)}function xc(h){$a(h),h.u&&(d.clearTimeout(h.u),h.u=null),Xa(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Wa(h){if(!za(h.h)&&!h.s){h.s=!0;var _=h.Ga;ae||D(),de||(ae(),de=!0),xe.add(_,h),h.B=0}}function Pd(h,_){return Fa(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=wt(S(h.Ga,h,_),kl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const U=new pn(this,this.j,h);let K=this.o;if(this.S&&(K?(K=R(K),k(K,this.S)):K=this.S),this.m!==null||this.O||(U.H=K,K=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var w=this.i[v];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(_+=w,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=Lc(this,U,_),v=Rn(this.I),Je(v,"RID",h),Je(v,"CVER",22),this.D&&Je(v,"X-HTTP-Session-Id",this.D),Zr(this,v),K&&(this.O?_="headers="+encodeURIComponent(String(Il(K)))+"&"+_:this.m&&Bt(v,this.m,K)),Ha(this.h,U),this.Ua&&Je(v,"TYPE","init"),this.P?(Je(v,"$req",_),Je(v,"SID","null"),U.T=!0,ti(U,v,null)):ti(U,v,_),this.G=2}}else this.G==3&&(h?Ol(this,h):this.i.length==0||za(this.h)||Ol(this))};function Ol(h,_){var v;_?v=_.l:v=h.U++;const w=Rn(h.I);Je(w,"SID",h.K),Je(w,"RID",v),Je(w,"AID",h.T),Zr(h,w),h.m&&h.o&&Bt(w,h.m,h.o),v=new pn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Lc(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Ha(h.h,v),ti(v,w,_)}function Zr(h,_){h.H&&Ee(h.H,function(v,w){Je(_,w,v)}),h.l&&Al({},function(v,w){Je(_,w,v)})}function Lc(h,_,v){v=Math.min(h.i.length,v);var w=h.l?S(h.l.Na,h.l,h):null;e:{var U=h.i;let K=-1;for(;;){const re=["count="+v];K==-1?0<v?(K=U[0].g,re.push("ofs="+K)):K=0:re.push("ofs="+K);let Ue=!0;for(let Dt=0;Dt<v;Dt++){let Be=U[Dt].g;const zt=U[Dt].map;if(Be-=K,0>Be)K=Math.max(0,U[Dt].g-100),Ue=!1;else try{yi(zt,re,"req"+Be+"_")}catch{w&&w(zt)}}if(Ue){w=re.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,w}function Vc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ae||D(),de||(ae(),de=!0),xe.add(_,h),h.v=0}}function Dl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=wt(S(h.Fa,h),kl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Uc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=wt(S(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),$a(this),Uc(this))};function Jr(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Uc(h){h.g=new pn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Rn(h.qa);Je(_,"RID","rpc"),Je(_,"SID",h.K),Je(_,"AID",h.T),Je(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Je(_,"TO",h.ja),Je(_,"TYPE","xmlhttp"),Zr(h,_),h.m&&h.o&&Bt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=Gr(Rn(_)),v.m=null,v.P=!0,Yi(v,h)}n.Za=function(){this.C!=null&&(this.C=null,$a(this),Dl(this),ht(19))};function Xa(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Bc(h,_){var v=null;if(h.g==_){Xa(h),Jr(h),h.g=null;var w=2}else if(Tl(h.h,_))v=_.D,mn(h.h,_),w=1;else return;if(h.G!=0){if(_.o)if(w==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var U=h.B;w=Ds(),We(w,new Ot(w,v)),Wa(h)}else Vc(h);else if(U=_.s,U==3||U==0&&0<_.X||!(w==1&&Pd(h,_)||w==2&&Dl(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),U){case 1:es(h,5);break;case 4:es(h,10);break;case 3:es(h,6);break;default:es(h,2)}}}function kl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function es(h,_){if(h.j.info("Error code "+_),_==2){var v=S(h.fb,h),w=h.Xa;const U=!w;w=new Rt(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||qr(w,"https"),Gr(w),U?Yr(w.toString(),v):ni(w.toString(),v)}else ht(2);h.G=0,h.l&&h.l.sa(_),zc(h),xc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function zc(h){if(h.G=0,h.ka=[],h.l){const _=Sl(h.h);(_.length!=0||h.i.length!=0)&&(B(h.ka,_),B(h.ka,h.i),h.h.i.length=0,H(h.i),h.i.length=0),h.l.ra()}}function Fc(h,_,v){var w=v instanceof Rt?Rn(v):new Rt(v);if(w.g!="")_&&(w.g=_+"."+w.g),Ls(w,w.s);else{var U=d.location;w=U.protocol,_=_?_+"."+U.hostname:U.hostname,U=+U.port;var K=new Rt(null);w&&qr(K,w),_&&(K.g=_),U&&Ls(K,U),v&&(K.l=v),w=K}return v=h.D,_=h.ya,v&&_&&Je(w,v,_),Je(w,"VER",h.la),Zr(h,w),w}function Hc(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ye(new Vs({eb:v})):new Ye(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function jc(){}n=jc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Za(){}Za.prototype.g=function(h,_){return new gn(h,_)};function gn(h,_){gt.call(this),this.g=new Qa(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!X(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!X(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Si(this)}I(gn,gt),gn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gn.prototype.close=function(){Nl(this.g)},gn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=ei(h),h=v);_.i.push(new Oc(_.Ya++,h)),_.G==3&&Wa(_)},gn.prototype.N=function(){this.g.l=null,delete this.j,Nl(this.g),delete this.g,gn.aa.N.call(this)};function qc(h){Gi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}I(qc,Gi);function Gc(){_l.call(this),this.status=1}I(Gc,_l);function Si(h){this.g=h}I(Si,jc),Si.prototype.ua=function(){We(this.g,"a")},Si.prototype.ta=function(h){We(this.g,new qc(h))},Si.prototype.sa=function(h){We(this.g,new Gc)},Si.prototype.ra=function(){We(this.g,"b")},Za.prototype.createWebChannel=Za.prototype.g,gn.prototype.send=gn.prototype.o,gn.prototype.open=gn.prototype.m,gn.prototype.close=gn.prototype.close,RR=function(){return new Za},wR=function(){return Ds()},AR=di,wg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ps.NO_ERROR=0,Ps.TIMEOUT=8,Ps.HTTP_ERROR=6,cf=Ps,Ki.COMPLETE="complete",SR=Ki,gl.EventType=qi,qi.OPEN="a",qi.CLOSE="b",qi.ERROR="c",qi.MESSAGE="d",gt.prototype.listen=gt.prototype.K,Du=gl,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,TR=Ye}).apply(typeof Wh<"u"?Wh:typeof self<"u"?self:typeof window<"u"?window:{});const Z0="@firebase/firestore",J0="4.7.16";/**
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
 */class ln{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ln.UNAUTHENTICATED=new ln(null),ln.GOOGLE_CREDENTIALS=new ln("google-credentials-uid"),ln.FIRST_PARTY=new ln("first-party-uid"),ln.MOCK_USER=new ln("mock-user");/**
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
 */let ol="11.8.1";/**
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
 */const ba=new Zf("@firebase/firestore");function No(){return ba.logLevel}function he(n,...e){if(ba.logLevel<=Pe.DEBUG){const t=e.map(P_);ba.debug(`Firestore (${ol}): ${n}`,...t)}}function bs(n,...e){if(ba.logLevel<=Pe.ERROR){const t=e.map(P_);ba.error(`Firestore (${ol}): ${n}`,...t)}}function qo(n,...e){if(ba.logLevel<=Pe.WARN){const t=e.map(P_);ba.warn(`Firestore (${ol}): ${n}`,...t)}}function P_(n){if(typeof n=="string")return n;try{/**
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
 */function Ae(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,bR(n,s,t)}function bR(n,e,t){let s=`FIRESTORE (${ol}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw bs(s),new Error(s)}function $e(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||bR(e,a,s)}function be(n,e){return n}/**
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
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends Fi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class CR{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ln.UNAUTHENTICATED))}shutdown(){}}class _x{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class yx{constructor(e){this.t=e,this.currentUser=ln.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$e(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new gr,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new gr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($e(typeof s.accessToken=="string",31837,{l:s}),new CR(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string",2055,{h:e}),new ln(e)}}class vx{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=ln.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ex{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new vx(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ln.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tx{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$e(this.o===void 0,3512);const s=l=>{l.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,he("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new eS(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?($e(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new eS(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Sx(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function IR(){return new TextEncoder}/**
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
 */class NR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=Sx(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Ne(n,e){return n<e?-1:n>e?1:0}function Rg(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),a=e.codePointAt(t);if(s!==a){if(s<128&&a<128)return Ne(s,a);{const l=IR(),c=Ax(l.encode(tS(n,t)),l.encode(tS(e,t)));return c!==0?c:Ne(s,a)}}t+=s>65535?2:1}return Ne(n.length,e.length)}function tS(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Ax(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ne(n[t],e[t]);return Ne(n.length,e.length)}function Go(n,e,t){return n.length===e.length&&n.every((s,a)=>t(s,e[a]))}/**
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
 */const nS=-62135596800,iS=1e6;class Lt{static now(){return Lt.fromMillis(Date.now())}static fromDate(e){return Lt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*iS);return new Lt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ge(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ge(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<nS)throw new ge(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/iS}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-nS;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Lt(0,0))}static max(){return new Re(new Lt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const sS="__name__";class Ni{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ae(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ae(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ni.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ni?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Ni.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ne(e.length,t.length)}static compareSegments(e,t){const s=Ni.isNumericId(e),a=Ni.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Ni.extractNumericId(e).compare(Ni.extractNumericId(t)):Rg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mr.fromString(e.substring(4,e.length-2))}}class vt extends Ni{construct(e,t,s){return new vt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ge(ne.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new vt(t)}static emptyPath(){return new vt([])}}const wx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tn extends Ni{construct(e,t,s){return new tn(e,t,s)}static isValidIdentifier(e){return wx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sS}static keyField(){return new tn([sS])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new ge(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ge(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ge(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new ge(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tn(t)}static emptyPath(){return new tn([])}}/**
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
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(vt.fromString(e))}static fromName(e){return new ye(vt.fromString(e).popFirst(5))}static empty(){return new ye(vt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&vt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return vt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new vt(e.slice()))}}/**
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
 */const Xu=-1;function Rx(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=Re.fromTimestamp(s===1e9?new Lt(t+1,0):new Lt(t,s));return new Er(a,ye.empty(),e)}function bx(n){return new Er(n.readTime,n.key,Xu)}class Er{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Er(Re.min(),ye.empty(),Xu)}static max(){return new Er(Re.max(),ye.empty(),Xu)}}function Cx(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:Ne(n.largestBatchId,e.largestBatchId))}/**
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
 */const Ix="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ll(n){if(n.code!==ne.FAILED_PRECONDITION||n.message!==Ix)throw n;he("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof J?t:J.resolve(t)}catch(t){return J.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):J.reject(t)}static resolve(e){return new J((t,s)=>{t(e)})}static reject(e){return new J((t,s)=>{s(e)})}static waitFor(e){return new J((t,s)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},p=>s(p))}),c=!0,l===a&&t()})}static or(e){let t=J.resolve(!1);for(const s of e)t=t.next(a=>a?J.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new J((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next(y=>{c[g]=y,++d,d===l&&s(c)},y=>a(y))}})}static doWhile(e,t){return new J((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function Ox(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ul(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ld{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}ld.le=-1;/**
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
 */const x_=-1;function ud(n){return n==null}function Pf(n){return n===0&&1/n==-1/0}function Dx(n){return typeof n=="number"&&Number.isInteger(n)&&!Pf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const OR="";function kx(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=rS(e)),e=Mx(n.get(t),e);return rS(e)}function Mx(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case OR:t+="";break;default:t+=l}}return t}function rS(n){return n+OR+""}/**
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
 */function aS(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Or(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function DR(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class mt{constructor(e,t){this.comparator=e,this.root=t||Jt.EMPTY}insert(e,t){return new mt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Jt.BLACK,null,null))}remove(e){return new mt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xh(this.root,e,this.comparator,!0)}}class Xh{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jt{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Jt.RED,this.left=a??Jt.EMPTY,this.right=l??Jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Jt(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Jt.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}}Jt.EMPTY=null,Jt.RED=!0,Jt.BLACK=!1;Jt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Jt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Vt{constructor(e){this.comparator=e,this.data=new mt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new oS(this.data.getIterator())}getIteratorFrom(e){return new oS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Vt(this.comparator);return t.data=e,t}}class oS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pn{constructor(e){this.fields=e,e.sort(tn.comparator)}static empty(){return new Pn([])}unionWith(e){let t=new Vt(tn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Go(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class kR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new kR("Invalid base64 string: "+l):l}}(e);return new nn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new nn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nn.EMPTY_BYTE_STRING=new nn("");const Px=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(n){if($e(!!n,39018),typeof n=="string"){let e=0;const t=Px.exec(n);if($e(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:At(n.seconds),nanos:At(n.nanos)}}function At(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Sr(n){return typeof n=="string"?nn.fromBase64String(n):nn.fromUint8Array(n)}/**
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
 */const MR="server_timestamp",PR="__type__",xR="__previous_value__",LR="__local_write_time__";function L_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[PR])===null||t===void 0?void 0:t.stringValue)===MR}function cd(n){const e=n.mapValue.fields[xR];return L_(e)?cd(e):e}function Zu(n){const e=Tr(n.mapValue.fields[LR].timestampValue);return new Lt(e.seconds,e.nanos)}/**
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
 */class xx{constructor(e,t,s,a,l,c,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const xf="(default)";class Ju{constructor(e,t){this.projectId=e,this.database=t||xf}static empty(){return new Ju("","")}get isDefaultDatabase(){return this.database===xf}isEqual(e){return e instanceof Ju&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const VR="__type__",Lx="__max__",Zh={mapValue:{}},UR="__vector__",Lf="value";function Ar(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?L_(n)?4:Ux(n)?9007199254740991:Vx(n)?10:11:Ae(28295,{value:n})}function Vi(n,e){if(n===e)return!0;const t=Ar(n);if(t!==Ar(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Zu(n).isEqual(Zu(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Tr(a.timestampValue),d=Tr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,l){return Sr(a.bytesValue).isEqual(Sr(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,l){return At(a.geoPointValue.latitude)===At(l.geoPointValue.latitude)&&At(a.geoPointValue.longitude)===At(l.geoPointValue.longitude)}(n,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return At(a.integerValue)===At(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=At(a.doubleValue),d=At(l.doubleValue);return c===d?Pf(c)===Pf(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Go(n.arrayValue.values||[],e.arrayValue.values||[],Vi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(aS(c)!==aS(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Vi(c[p],d[p])))return!1;return!0}(n,e);default:return Ae(52216,{left:n})}}function ec(n,e){return(n.values||[]).find(t=>Vi(t,e))!==void 0}function Ko(n,e){if(n===e)return 0;const t=Ar(n),s=Ar(e);if(t!==s)return Ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=At(l.integerValue||l.doubleValue),p=At(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return lS(n.timestampValue,e.timestampValue);case 4:return lS(Zu(n),Zu(e));case 5:return Rg(n.stringValue,e.stringValue);case 6:return function(l,c){const d=Sr(l),p=Sr(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=Ne(d[g],p[g]);if(y!==0)return y}return Ne(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Ne(At(l.latitude),At(c.latitude));return d!==0?d:Ne(At(l.longitude),At(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return uS(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,g,y;const T=l.fields||{},S=c.fields||{},O=(d=T[Lf])===null||d===void 0?void 0:d.arrayValue,I=(p=S[Lf])===null||p===void 0?void 0:p.arrayValue,H=Ne(((g=O==null?void 0:O.values)===null||g===void 0?void 0:g.length)||0,((y=I==null?void 0:I.values)===null||y===void 0?void 0:y.length)||0);return H!==0?H:uS(O,I)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===Zh.mapValue&&c===Zh.mapValue)return 0;if(l===Zh.mapValue)return 1;if(c===Zh.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let T=0;T<p.length&&T<y.length;++T){const S=Rg(p[T],y[T]);if(S!==0)return S;const O=Ko(d[p[T]],g[y[T]]);if(O!==0)return O}return Ne(p.length,y.length)}(n.mapValue,e.mapValue);default:throw Ae(23264,{Pe:t})}}function lS(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ne(n,e);const t=Tr(n),s=Tr(e),a=Ne(t.seconds,s.seconds);return a!==0?a:Ne(t.nanos,s.nanos)}function uS(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=Ko(t[a],s[a]);if(l)return l}return Ne(t.length,s.length)}function Yo(n){return bg(n)}function bg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Tr(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Sr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ye.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=bg(l);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${bg(t.fields[c])}`;return a+"}"}(n.mapValue):Ae(61005,{value:n})}function hf(n){switch(Ar(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cd(n);return e?16+hf(e):16;case 5:return 2*n.stringValue.length;case 6:return Sr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+hf(l),0)}(n.arrayValue);case 10:case 11:return function(s){let a=0;return Or(s.fields,(l,c)=>{a+=l.length+hf(c)}),a}(n.mapValue);default:throw Ae(13486,{value:n})}}function Cg(n){return!!n&&"integerValue"in n}function V_(n){return!!n&&"arrayValue"in n}function cS(n){return!!n&&"nullValue"in n}function hS(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ff(n){return!!n&&"mapValue"in n}function Vx(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[VR])===null||t===void 0?void 0:t.stringValue)===UR}function zu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Or(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=zu(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Ux(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Lx}/**
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
 */class An{constructor(e){this.value=e}static empty(){return new An({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ff(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zu(t)}setAll(e){let t=tn.emptyPath(),s={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=zu(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());ff(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Vi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];ff(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Or(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new An(zu(this.value))}}function BR(n){const e=[];return Or(n.fields,(t,s)=>{const a=new tn([t]);if(ff(s)){const l=BR(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new Pn(e)}/**
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
 */class hn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new hn(e,0,Re.min(),Re.min(),Re.min(),An.empty(),0)}static newFoundDocument(e,t,s,a){return new hn(e,1,t,Re.min(),s,a,0)}static newNoDocument(e,t){return new hn(e,2,t,Re.min(),Re.min(),An.empty(),0)}static newUnknownDocument(e,t){return new hn(e,3,t,Re.min(),Re.min(),An.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=An.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=An.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof hn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vf{constructor(e,t){this.position=e,this.inclusive=t}}function fS(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=ye.comparator(ye.fromName(c.referenceValue),t.key):s=Ko(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function dS(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Vi(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Uf{constructor(e,t="asc"){this.field=e,this.dir=t}}function Bx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class zR{}class xt extends zR{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Fx(e,t,s):t==="array-contains"?new qx(e,s):t==="in"?new Gx(e,s):t==="not-in"?new Kx(e,s):t==="array-contains-any"?new Yx(e,s):new xt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Hx(e,s):new jx(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ko(t,this.value)):t!==null&&Ar(this.value)===Ar(t)&&this.matchesComparison(Ko(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ui extends zR{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Ui(e,t)}matches(e){return FR(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function FR(n){return n.op==="and"}function HR(n){return zx(n)&&FR(n)}function zx(n){for(const e of n.filters)if(e instanceof Ui)return!1;return!0}function Ig(n){if(n instanceof xt)return n.field.canonicalString()+n.op.toString()+Yo(n.value);if(HR(n))return n.filters.map(e=>Ig(e)).join(",");{const e=n.filters.map(t=>Ig(t)).join(",");return`${n.op}(${e})`}}function jR(n,e){return n instanceof xt?function(s,a){return a instanceof xt&&s.op===a.op&&s.field.isEqual(a.field)&&Vi(s.value,a.value)}(n,e):n instanceof Ui?function(s,a){return a instanceof Ui&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,c,d)=>l&&jR(c,a.filters[d]),!0):!1}(n,e):void Ae(19439)}function qR(n){return n instanceof xt?function(t){return`${t.field.canonicalString()} ${t.op} ${Yo(t.value)}`}(n):n instanceof Ui?function(t){return t.op.toString()+" {"+t.getFilters().map(qR).join(" ,")+"}"}(n):"Filter"}class Fx extends xt{constructor(e,t,s){super(e,t,s),this.key=ye.fromName(s.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class Hx extends xt{constructor(e,t){super(e,"in",t),this.keys=GR("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class jx extends xt{constructor(e,t){super(e,"not-in",t),this.keys=GR("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function GR(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ye.fromName(s.referenceValue))}class qx extends xt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return V_(t)&&ec(t.arrayValue,this.value)}}class Gx extends xt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ec(this.value.arrayValue,t)}}class Kx extends xt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ec(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ec(this.value.arrayValue,t)}}class Yx extends xt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!V_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ec(this.value.arrayValue,s))}}/**
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
 */class Qx{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Ie=null}}function pS(n,e=null,t=[],s=[],a=null,l=null,c=null){return new Qx(n,e,t,s,a,l,c)}function U_(n){const e=be(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Ig(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),ud(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Yo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Yo(s)).join(",")),e.Ie=t}return e.Ie}function B_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Bx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!jR(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!dS(n.startAt,e.startAt)&&dS(n.endAt,e.endAt)}function Ng(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class hd{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function $x(n,e,t,s,a,l,c,d){return new hd(n,e,t,s,a,l,c,d)}function z_(n){return new hd(n)}function mS(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Wx(n){return n.collectionGroup!==null}function Fu(n){const e=be(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Vt(tn.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new Uf(l,s))}),t.has(tn.keyField().canonicalString())||e.Ee.push(new Uf(tn.keyField(),s))}return e.Ee}function Mi(n){const e=be(n);return e.de||(e.de=Xx(e,Fu(n))),e.de}function Xx(n,e){if(n.limitType==="F")return pS(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Uf(a.field,l)});const t=n.endAt?new Vf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Vf(n.startAt.position,n.startAt.inclusive):null;return pS(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Og(n,e,t){return new hd(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function fd(n,e){return B_(Mi(n),Mi(e))&&n.limitType===e.limitType}function KR(n){return`${U_(Mi(n))}|lt:${n.limitType}`}function Oo(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>qR(a)).join(", ")}]`),ud(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>Yo(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>Yo(a)).join(",")),`Target(${s})`}(Mi(n))}; limitType=${n.limitType})`}function dd(n,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ye.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(n,e)&&function(s,a){for(const l of Fu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(n,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(n,e)&&function(s,a){return!(s.startAt&&!function(c,d,p){const g=fS(c,d,p);return c.inclusive?g<=0:g<0}(s.startAt,Fu(s),a)||s.endAt&&!function(c,d,p){const g=fS(c,d,p);return c.inclusive?g>=0:g>0}(s.endAt,Fu(s),a))}(n,e)}function Zx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function YR(n){return(e,t)=>{let s=!1;for(const a of Fu(n)){const l=Jx(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function Jx(n,e,t){const s=n.field.isKeyField()?ye.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?Ko(p,g):Ae(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Ae(19790,{direction:n.dir})}}/**
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
 */class Ma{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Or(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return DR(this.inner)}size(){return this.innerSize}}/**
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
 */const eL=new mt(ye.comparator);function Cs(){return eL}const QR=new mt(ye.comparator);function ku(...n){let e=QR;for(const t of n)e=e.insert(t.key,t);return e}function $R(n){let e=QR;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function va(){return Hu()}function WR(){return Hu()}function Hu(){return new Ma(n=>n.toString(),(n,e)=>n.isEqual(e))}const tL=new mt(ye.comparator),nL=new Vt(ye.comparator);function Le(...n){let e=nL;for(const t of n)e=e.add(t);return e}const iL=new Vt(Ne);function sL(){return iL}/**
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
 */function F_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pf(e)?"-0":e}}function XR(n){return{integerValue:""+n}}function rL(n,e){return Dx(e)?XR(e):F_(n,e)}/**
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
 */class pd{constructor(){this._=void 0}}function aL(n,e,t){return n instanceof Bf?function(a,l){const c={fields:{[PR]:{stringValue:MR},[LR]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&L_(l)&&(l=cd(l)),l&&(c.fields[xR]=l),{mapValue:c}}(t,e):n instanceof Qo?JR(n,e):n instanceof tc?eb(n,e):function(a,l){const c=ZR(a,l),d=gS(c)+gS(a.Re);return Cg(c)&&Cg(a.Re)?XR(d):F_(a.serializer,d)}(n,e)}function oL(n,e,t){return n instanceof Qo?JR(n,e):n instanceof tc?eb(n,e):t}function ZR(n,e){return n instanceof zf?function(s){return Cg(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class Bf extends pd{}class Qo extends pd{constructor(e){super(),this.elements=e}}function JR(n,e){const t=tb(e);for(const s of n.elements)t.some(a=>Vi(a,s))||t.push(s);return{arrayValue:{values:t}}}class tc extends pd{constructor(e){super(),this.elements=e}}function eb(n,e){let t=tb(e);for(const s of n.elements)t=t.filter(a=>!Vi(a,s));return{arrayValue:{values:t}}}class zf extends pd{constructor(e,t){super(),this.serializer=e,this.Re=t}}function gS(n){return At(n.integerValue||n.doubleValue)}function tb(n){return V_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class lL{constructor(e,t){this.field=e,this.transform=t}}function uL(n,e){return n.field.isEqual(e.field)&&function(s,a){return s instanceof Qo&&a instanceof Qo||s instanceof tc&&a instanceof tc?Go(s.elements,a.elements,Vi):s instanceof zf&&a instanceof zf?Vi(s.Re,a.Re):s instanceof Bf&&a instanceof Bf}(n.transform,e.transform)}class cL{constructor(e,t){this.version=e,this.transformResults=t}}class Pi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Pi}static exists(e){return new Pi(void 0,e)}static updateTime(e){return new Pi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function df(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class md{}function nb(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new sb(n.key,Pi.none()):new gc(n.key,n.data,Pi.none());{const t=n.data,s=An.empty();let a=new Vt(tn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Dr(n.key,s,new Pn(a.toArray()),Pi.none())}}function hL(n,e,t){n instanceof gc?function(a,l,c){const d=a.value.clone(),p=yS(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Dr?function(a,l,c){if(!df(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=yS(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(ib(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function ju(n,e,t,s){return n instanceof gc?function(l,c,d,p){if(!df(l.precondition,c))return d;const g=l.value.clone(),y=vS(l.fieldTransforms,p,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,e,t,s):n instanceof Dr?function(l,c,d,p){if(!df(l.precondition,c))return d;const g=vS(l.fieldTransforms,p,c),y=c.data;return y.setAll(ib(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,s):function(l,c,d){return df(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function fL(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=ZR(s.transform,a||null);l!=null&&(t===null&&(t=An.empty()),t.set(s.field,l))}return t||null}function _S(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Go(s,a,(l,c)=>uL(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class gc extends md{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Dr extends md{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function ib(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function yS(n,e,t){const s=new Map;$e(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,oL(c,d,t[a]))}return s}function vS(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,aL(l,c,e))}return s}class sb extends md{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dL extends md{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pL{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&hL(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ju(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ju(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=WR();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=nb(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Re.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&Go(this.mutations,e.mutations,(t,s)=>_S(t,s))&&Go(this.baseMutations,e.baseMutations,(t,s)=>_S(t,s))}}class H_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){$e(e.mutations.length===s.length,58842,{fe:e.mutations.length,ge:s.length});let a=function(){return tL}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new H_(e,t,s,a)}}/**
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
 */class mL{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gL{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var It,Fe;function _L(n){switch(n){case ne.OK:return Ae(64938);case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0;default:return Ae(15467,{code:n})}}function rb(n){if(n===void 0)return bs("GRPC error has no .code"),ne.UNKNOWN;switch(n){case It.OK:return ne.OK;case It.CANCELLED:return ne.CANCELLED;case It.UNKNOWN:return ne.UNKNOWN;case It.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case It.INTERNAL:return ne.INTERNAL;case It.UNAVAILABLE:return ne.UNAVAILABLE;case It.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case It.NOT_FOUND:return ne.NOT_FOUND;case It.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case It.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case It.ABORTED:return ne.ABORTED;case It.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case It.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case It.DATA_LOSS:return ne.DATA_LOSS;default:return Ae(39323,{code:n})}}(Fe=It||(It={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const yL=new mr([4294967295,4294967295],0);function ES(n){const e=IR().encode(n),t=new ER;return t.update(e),new Uint8Array(t.digest())}function TS(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new mr([t,s],0),new mr([a,l],0)]}class j_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Mu(`Invalid padding: ${t}`);if(s<0)throw new Mu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Mu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Mu(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=mr.fromNumber(this.pe)}we(e,t,s){let a=e.add(t.multiply(mr.fromNumber(s)));return a.compare(yL)===1&&(a=new mr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=ES(e),[s,a]=TS(t);for(let l=0;l<this.hashCount;l++){const c=this.we(s,a,l);if(!this.Se(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new j_(l,a,t);return s.forEach(d=>c.insert(d)),c}insert(e){if(this.pe===0)return;const t=ES(e),[s,a]=TS(t);for(let l=0;l<this.hashCount;l++){const c=this.we(s,a,l);this.be(c)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Mu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class gd{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,_c.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new gd(Re.min(),a,new mt(Ne),Cs(),Le())}}class _c{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new _c(s,t,Le(),Le(),Le())}}/**
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
 */class pf{constructor(e,t,s,a){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=a}}class ab{constructor(e,t){this.targetId=e,this.Ce=t}}class ob{constructor(e,t,s=nn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class SS{constructor(){this.Fe=0,this.Me=AS(),this.xe=nn.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Le(),t=Le(),s=Le();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Ae(38017,{changeType:l})}}),new _c(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=AS()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,$e(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class vL{constructor(e){this.ze=e,this.je=new Map,this.He=Cs(),this.Je=Jh(),this.Ye=Jh(),this.Ze=new mt(Ne)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:Ae(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,s=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(Ng(l))if(s===0){const c=new ye(l.path);this.tt(t,c,hn.newNoDocument(c,Re.min()))}else $e(s===1,20013,{expectedCount:s});else{const c=this.ut(t);if(c!==s){const d=this.ct(e),p=d?this.lt(d,e,c):1;if(p!==0){this.st(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Sr(s).toUint8Array()}catch(p){if(p instanceof kR)return qo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new j_(c,a,l)}catch(p){return qo(p instanceof Mu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.pe===0?null:d}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let a=0;return s.forEach(l=>{const c=this.ze.Pt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,c)=>{const d=this._t(c);if(d){if(l.current&&Ng(d.target)){const p=new ye(d.target.path);this.Et(p).has(c)||this.dt(c,p)||this.tt(c,p,hn.newNoDocument(p,e))}l.Le&&(t.set(c,l.qe()),l.Qe())}});let s=Le();this.Ye.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this._t(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(l))}),this.He.forEach((l,c)=>c.setReadTime(e));const a=new gd(e,t,this.Ze,this.He,s);return this.He=Cs(),this.Je=Jh(),this.Ye=Jh(),this.Ze=new mt(Ne),a}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new SS,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Vt(Ne),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Vt(Ne),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new SS),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Jh(){return new mt(ye.comparator)}function AS(){return new mt(ye.comparator)}const EL={asc:"ASCENDING",desc:"DESCENDING"},TL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SL={and:"AND",or:"OR"};class AL{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Dg(n,e){return n.useProto3Json||ud(e)?e:{value:e}}function Ff(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lb(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function wL(n,e){return Ff(n,e.toTimestamp())}function xi(n){return $e(!!n,49232),Re.fromTimestamp(function(t){const s=Tr(t);return new Lt(s.seconds,s.nanos)}(n))}function q_(n,e){return kg(n,e).canonicalString()}function kg(n,e){const t=function(a){return new vt(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ub(n){const e=vt.fromString(n);return $e(pb(e),10190,{key:e.toString()}),e}function Mg(n,e){return q_(n.databaseId,e.path)}function Ym(n,e){const t=ub(e);if(t.get(1)!==n.databaseId.projectId)throw new ge(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ge(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(hb(t))}function cb(n,e){return q_(n.databaseId,e)}function RL(n){const e=ub(n);return e.length===4?vt.emptyPath():hb(e)}function Pg(n){return new vt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function hb(n){return $e(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function wS(n,e,t){return{name:Mg(n,e),fields:t.value.mapValue.fields}}function bL(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ae(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,y){return g.useProto3Json?($e(y===void 0||typeof y=="string",58123),nn.fromBase64String(y||"")):($e(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),nn.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const y=g.code===void 0?ne.UNKNOWN:rb(g.code);return new ge(y,g.message||"")}(c);t=new ob(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=Ym(n,s.document.name),l=xi(s.document.updateTime),c=s.document.createTime?xi(s.document.createTime):Re.min(),d=new An({mapValue:{fields:s.document.fields}}),p=hn.newFoundDocument(a,l,c,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new pf(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=Ym(n,s.document),l=s.readTime?xi(s.readTime):Re.min(),c=hn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new pf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=Ym(n,s.document),l=s.removedTargetIds||[];t=new pf([],l,a,null)}else{if(!("filter"in e))return Ae(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new gL(a,l),d=s.targetId;t=new ab(d,c)}}return t}function CL(n,e){let t;if(e instanceof gc)t={update:wS(n,e.key,e.value)};else if(e instanceof sb)t={delete:Mg(n,e.key)};else if(e instanceof Dr)t={update:wS(n,e.key,e.data),updateMask:LL(e.fieldMask)};else{if(!(e instanceof dL))return Ae(16599,{ft:e.type});t={verify:Mg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,c){const d=c.transform;if(d instanceof Bf)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Qo)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof tc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof zf)return{fieldPath:c.field.canonicalString(),increment:d.Re};throw Ae(20930,{transform:c.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:wL(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ae(27497)}(n,e.precondition)),t}function IL(n,e){return n&&n.length>0?($e(e!==void 0,14353),n.map(t=>function(a,l){let c=a.updateTime?xi(a.updateTime):xi(l);return c.isEqual(Re.min())&&(c=xi(l)),new cL(c,a.transformResults||[])}(t,e))):[]}function NL(n,e){return{documents:[cb(n,e.path)]}}function OL(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=cb(n,a);const l=function(g){if(g.length!==0)return db(Ui.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(y=>function(S){return{field:Do(S.field),direction:ML(S.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Dg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:t,parent:a}}function DL(n){let e=RL(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){$e(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(T){const S=fb(T);return S instanceof Ui&&HR(S)?S.getFilters():[S]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(S=>function(I){return new Uf(ko(I.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(S))}(t.orderBy));let d=null;t.limit&&(d=function(T){let S;return S=typeof T=="object"?T.value:T,ud(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(T){const S=!!T.before,O=T.values||[];return new Vf(O,S)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const S=!T.before,O=T.values||[];return new Vf(O,S)}(t.endAt)),$x(e,a,c,l,d,"F",p,g)}function kL(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function fb(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ko(t.unaryFilter.field);return xt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=ko(t.unaryFilter.field);return xt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ko(t.unaryFilter.field);return xt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=ko(t.unaryFilter.field);return xt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}}(n):n.fieldFilter!==void 0?function(t){return xt.create(ko(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ui.create(t.compositeFilter.filters.map(s=>fb(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}}(t.compositeFilter.op))}(n):Ae(30097,{filter:n})}function ML(n){return EL[n]}function PL(n){return TL[n]}function xL(n){return SL[n]}function Do(n){return{fieldPath:n.canonicalString()}}function ko(n){return tn.fromServerFormat(n.fieldPath)}function db(n){return n instanceof xt?function(t){if(t.op==="=="){if(hS(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NAN"}};if(cS(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(hS(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NAN"}};if(cS(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Do(t.field),op:PL(t.op),value:t.value}}}(n):n instanceof Ui?function(t){const s=t.getFilters().map(a=>db(a));return s.length===1?s[0]:{compositeFilter:{op:xL(t.op),filters:s}}}(n):Ae(54877,{filter:n})}function LL(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pb(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class hr{constructor(e,t,s,a,l=Re.min(),c=Re.min(),d=nn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class VL{constructor(e){this.wt=e}}function UL(n){const e=DL({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Og(e,e.limit,"L"):e}/**
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
 */class BL{constructor(){this.Cn=new zL}addToCollectionParentIndex(e,t){return this.Cn.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(Er.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(Er.min())}updateCollectionGroup(e,t,s){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class zL{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Vt(vt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Vt(vt.comparator)).toArray()}}/**
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
 */const RS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},mb=41943040;class Sn{static withCacheSize(e){return new Sn(e,Sn.DEFAULT_COLLECTION_PERCENTILE,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Sn.DEFAULT_COLLECTION_PERCENTILE=10,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Sn.DEFAULT=new Sn(mb,Sn.DEFAULT_COLLECTION_PERCENTILE,Sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Sn.DISABLED=new Sn(-1,0,0);/**
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
 */class $o{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new $o(0)}static lr(){return new $o(-1)}}/**
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
 */const bS="LruGarbageCollector",FL=1048576;function CS([n,e],[t,s]){const a=Ne(n,t);return a===0?Ne(e,s):a}class HL{constructor(e){this.Er=e,this.buffer=new Vt(CS),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();CS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class jL{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){he(bS,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ul(t)?he(bS,"Ignoring IndexedDB error during garbage collection: ",t):await ll(t)}await this.mr(3e5)})}}class qL{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return J.resolve(ld.le);const s=new HL(t);return this.gr.forEachTarget(e,a=>s.Rr(a.sequenceNumber)).next(()=>this.gr.yr(e,a=>s.Rr(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(RS)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),RS):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,a,l,c,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(s=T,d=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(g=Date.now(),No()<=Pe.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function GL(n,e){return new qL(n,e)}/**
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
 */class KL{constructor(){this.changes=new Ma(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,hn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?J.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class YL{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class QL{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&ju(s.mutation,a,Pn.empty(),Lt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Le()){const a=va();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let c=ku();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const s=va();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Le()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,s,a){let l=Cs();const c=Hu(),d=function(){return Hu()}();return t.forEach((p,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Dr)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),ju(y.mutation,g,y.mutation.getFieldMask(),Lt.now())):c.set(g.key,Pn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,y)=>c.set(g,y)),t.forEach((g,y)=>{var T;return d.set(g,new YL(y,(T=c.get(g))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const s=Hu();let a=new mt((c,d)=>c-d),l=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let y=s.get(p)||Pn.empty();y=d.applyToLocalView(g,y),s.set(p,y);const T=(a.get(d.batchId)||Le()).add(p);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,T=WR();y.forEach(S=>{if(!l.has(S)){const O=nb(t.get(S),s.get(S));O!==null&&T.set(S,O),l=l.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return J.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(c){return ye.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Wx(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):J.resolve(va());let d=Xu,p=l;return c.next(g=>J.forEach(g,(y,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(y)?J.resolve():this.remoteDocumentCache.getEntry(e,y).next(S=>{p=p.insert(y,S)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,Le())).next(y=>({batchId:d,changes:$R(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(s=>{let a=ku();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=ku();return this.indexManager.getCollectionParents(e,l).next(d=>J.forEach(d,p=>{const g=function(T,S){return new hd(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next(y=>{y.forEach((T,S)=>{c=c.insert(T,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(c=>{l.forEach((p,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,hn.newInvalidDocument(y)))});let d=ku();return c.forEach((p,g)=>{const y=l.get(p);y!==void 0&&ju(y.mutation,g,Pn.empty(),Lt.now()),dd(t,g)&&(d=d.insert(p,g))}),d})}}/**
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
 */class $L{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return J.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:xi(a.createTime)}}(t)),J.resolve()}getNamedQuery(e,t){return J.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(a){return{name:a.name,query:UL(a.bundledQuery),readTime:xi(a.readTime)}}(t)),J.resolve()}}/**
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
 */class WL{constructor(){this.overlays=new mt(ye.comparator),this.Qr=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){const s=va();return J.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.bt(e,t,l)}),J.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Qr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(s)),J.resolve()}getOverlaysForCollection(e,t,s){const a=va(),l=t.length+1,c=new ye(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return J.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new mt((g,y)=>g-y);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=va(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=va(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,y)=>d.set(g,y)),!(d.size()>=a)););return J.resolve(d)}bt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.Qr.get(a.largestBatchId).delete(s.key);this.Qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new mL(t,s));let l=this.Qr.get(t);l===void 0&&(l=Le(),this.Qr.set(t,l)),this.Qr.set(t,l.add(s.key))}}/**
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
 */class XL{constructor(){this.sessionToken=nn.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}}/**
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
 */class G_{constructor(){this.$r=new Vt(Gt.Ur),this.Kr=new Vt(Gt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new Gt(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new Gt(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new ye(new vt([])),s=new Gt(t,e),a=new Gt(t,e+1),l=[];return this.Kr.forEachInRange([s,a],c=>{this.zr(c),l.push(c.key)}),l}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new ye(new vt([])),s=new Gt(t,e),a=new Gt(t,e+1);let l=Le();return this.Kr.forEachInRange([s,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new Gt(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Gt{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return ye.comparator(e.key,t.key)||Ne(e.Zr,t.Zr)}static Wr(e,t){return Ne(e.Zr,t.Zr)||ye.comparator(e.key,t.key)}}/**
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
 */class ZL{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Vt(Gt.Ur)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new pL(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Xr=this.Xr.add(new Gt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(c)}lookupMutationBatch(e,t){return J.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ti(s),l=a<0?0:a;return J.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?x_:this.nr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Gt(t,0),a=new Gt(t,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([s,a],c=>{const d=this.ei(c.Zr);l.push(d)}),J.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Vt(Ne);return t.forEach(a=>{const l=new Gt(a,0),c=new Gt(a,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,c],d=>{s=s.add(d.Zr)})}),J.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;ye.isDocumentKey(l)||(l=l.child(""));const c=new Gt(new ye(l),0);let d=new Vt(Ne);return this.Xr.forEachWhile(p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Zr)),!0)},c),J.resolve(this.ni(d))}ni(e){const t=[];return e.forEach(s=>{const a=this.ei(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){$e(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return J.forEach(t.mutations,a=>{const l=new Gt(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new Gt(t,0),a=this.Xr.firstAfterOrEqual(s);return J.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class JL{constructor(e){this.ii=e,this.docs=function(){return new mt(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return J.resolve(s?s.document.mutableCopy():hn.newInvalidDocument(t))}getEntries(e,t){let s=Cs();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():hn.newInvalidDocument(a))}),J.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Cs();const c=t.path,d=new ye(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||Cx(bx(y),s)<=0||(a.has(y.key)||dd(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return J.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Ae(9500)}si(e,t){return J.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new eV(this)}getSize(e){return J.resolve(this.size)}}class eV extends KL{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Br.addEntry(e,a)):this.Br.removeEntry(s)}),J.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class tV{constructor(e){this.persistence=e,this.oi=new Ma(t=>U_(t),B_),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this._i=0,this.ai=new G_,this.targetCount=0,this.ui=$o.cr()}forEachTarget(e,t){return this.oi.forEach((s,a)=>t(a)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),J.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new $o(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.Tr(t),J.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.oi.forEach((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.oi.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),J.waitFor(l).next(()=>a)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return J.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),J.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),J.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),J.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return J.resolve(s)}containsKey(e,t){return J.resolve(this.ai.containsKey(t))}}/**
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
 */class gb{constructor(e,t){this.ci={},this.overlays={},this.li=new ld(0),this.hi=!1,this.hi=!0,this.Pi=new XL,this.referenceDelegate=e(this),this.Ti=new tV(this),this.indexManager=new BL,this.remoteDocumentCache=function(a){return new JL(a)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new VL(t),this.Ei=new $L(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new WL,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new ZL(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){he("MemoryPersistence","Starting transaction:",e);const a=new nV(this.li.next());return this.referenceDelegate.di(),s(a).next(l=>this.referenceDelegate.Ai(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ri(e,t){return J.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class nV extends Nx{constructor(e){super(),this.currentSequenceNumber=e}}class K_{constructor(e){this.persistence=e,this.Vi=new G_,this.mi=null}static fi(e){return new K_(e)}get gi(){if(this.mi)return this.mi;throw Ae(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),J.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),J.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(a=>this.gi.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.gi.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.gi,s=>{const a=ye.fromPath(s);return this.pi(e,a).next(l=>{l||t.removeEntry(a,Re.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return J.or([()=>J.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Hf{constructor(e,t){this.persistence=e,this.yi=new Ma(s=>kx(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=GL(this,t)}static fi(e,t){return new Hf(e,t)}di(){}Ai(e){return J.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}Sr(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return J.forEach(this.yi,(s,a)=>this.Dr(e,s,a).next(l=>l?J.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.si(e,c=>this.Dr(e,c,t).next(d=>{d||(s++,l.removeEntry(c,Re.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),J.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),J.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),J.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=hf(e.data.value)),t}Dr(e,t,s){return J.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.yi.get(t);return J.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Y_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.ds=s,this.As=a}static Rs(e,t){let s=Le(),a=Le();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new Y_(e,t.fromCache,s,a)}}/**
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
 */class iV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class sV{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return QN()?8:Ox(dn())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ws(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Ss(e,t,a,s).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new iV;return this.bs(e,t,c).next(d=>{if(l.result=d,this.fs)return this.Ds(e,t,c,d.size)})}).next(()=>l.result)}Ds(e,t,s,a){return s.documentReadCount<this.gs?(No()<=Pe.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",Oo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),J.resolve()):(No()<=Pe.DEBUG&&he("QueryEngine","Query:",Oo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ps*a?(No()<=Pe.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",Oo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mi(t))):J.resolve())}ws(e,t){if(mS(t))return J.resolve(null);let s=Mi(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Og(t,null,"F"),s=Mi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const c=Le(...l);return this.ys.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,s).next(p=>{const g=this.vs(t,d);return this.Cs(t,g,c,p.readTime)?this.ws(e,Og(t,null,"F")):this.Fs(e,g,t,p)}))})))}Ss(e,t,s,a){return mS(t)||a.isEqual(Re.min())?J.resolve(null):this.ys.getDocuments(e,s).next(l=>{const c=this.vs(t,l);return this.Cs(t,c,s,a)?J.resolve(null):(No()<=Pe.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Oo(t)),this.Fs(e,c,t,Rx(a,Xu)).next(d=>d))})}vs(e,t){let s=new Vt(YR(e));return t.forEach((a,l)=>{dd(e,l)&&(s=s.add(l))}),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}bs(e,t,s){return No()<=Pe.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Oo(t)),this.ys.getDocumentsMatchingQuery(e,t,Er.min(),s)}Fs(e,t,s,a){return this.ys.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */const Q_="LocalStore",rV=3e8;class aV{constructor(e,t,s,a){this.persistence=e,this.Ms=t,this.serializer=a,this.xs=new mt(Ne),this.Os=new Ma(l=>U_(l),B_),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QL(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function oV(n,e,t,s){return new aV(n,e,t,s)}async function _b(n,e){const t=be(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const c=[],d=[];let p=Le();for(const g of a){c.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(s,p).next(g=>({ks:g,removedBatchIds:c,addedBatchIds:d}))})})}function lV(n,e){const t=be(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),l=t.Bs.newChangeBuffer({trackRemovals:!0});return function(d,p,g,y){const T=g.batch,S=T.keys();let O=J.resolve();return S.forEach(I=>{O=O.next(()=>y.getEntry(p,I)).next(H=>{const B=g.docVersions.get(I);$e(B!==null,48541),H.version.compareTo(B)<0&&(T.applyToRemoteDocument(H,g),H.isValidDocument()&&(H.setReadTime(g.commitVersion),y.addEntry(H)))})}),O.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let p=Le();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function yb(n){const e=be(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function uV(n,e){const t=be(n),s=e.snapshotVersion;let a=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});a=t.xs;const d=[];e.targetChanges.forEach((y,T)=>{const S=a.get(T);if(!S)return;d.push(t.Ti.removeMatchingKeys(l,y.removedDocuments,T).next(()=>t.Ti.addMatchingKeys(l,y.addedDocuments,T)));let O=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?O=O.withResumeToken(nn.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):y.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(y.resumeToken,s)),a=a.insert(T,O),function(H,B,Q){return H.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=rV?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0}(S,O,y)&&d.push(t.Ti.updateTargetData(l,O))});let p=Cs(),g=Le();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),d.push(cV(l,c,e.documentUpdates).next(y=>{p=y.qs,g=y.Qs})),!s.isEqual(Re.min())){const y=t.Ti.getLastRemoteSnapshotVersion(l).next(T=>t.Ti.setTargetsMetadata(l,l.currentSequenceNumber,s));d.push(y)}return J.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(t.xs=a,l))}function cV(n,e,t){let s=Le(),a=Le();return t.forEach(l=>s=s.add(l)),e.getEntries(n,s).next(l=>{let c=Cs();return t.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Re.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):he(Q_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{qs:c,Qs:a}})}function hV(n,e){const t=be(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=x_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function fV(n,e){const t=be(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.Ti.getTargetData(s,e).next(l=>l?(a=l,J.resolve(a)):t.Ti.allocateTargetId(s).next(c=>(a=new hr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.xs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function xg(n,e,t){const s=be(n),a=s.xs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,c=>s.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!ul(c))throw c;he(Q_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.xs=s.xs.remove(e),s.Os.delete(a.target)}function IS(n,e,t){const s=be(n);let a=Re.min(),l=Le();return s.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,y){const T=be(p),S=T.Os.get(y);return S!==void 0?J.resolve(T.xs.get(S)):T.Ti.getTargetData(g,y)}(s,c,Mi(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>s.Ms.getDocumentsMatchingQuery(c,e,t?a:Re.min(),t?l:Le())).next(d=>(dV(s,Zx(e),d),{documents:d,$s:l})))}function dV(n,e,t){let s=n.Ns.get(e)||Re.min();t.forEach((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),n.Ns.set(e,s)}class NS{constructor(){this.activeTargetIds=sL()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pV{constructor(){this.xo=new NS,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new NS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mV{No(e){}shutdown(){}}/**
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
 */const OS="ConnectivityMonitor";class DS{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){he(OS,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){he(OS,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ef=null;function Lg(){return ef===null?ef=function(){return 268435456+Math.round(2147483648*Math.random())}():ef++,"0x"+ef.toString(16)}/**
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
 */const Qm="RestConnection",gV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _V{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${a}`,this.Go=this.databaseId.database===xf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}zo(e,t,s,a,l){const c=Lg(),d=this.jo(e,t.toUriEncodedString());he(Qm,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,a,l);const{host:g}=new URL(d),y=tl(g);return this.Jo(e,d,p,s,y).then(T=>(he(Qm,`Received RPC '${e}' ${c}: `,T),T),T=>{throw qo(Qm,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T})}Yo(e,t,s,a,l,c){return this.zo(e,t,s,a,l)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ol}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}jo(e,t){const s=gV[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
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
 */class yV{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const on="WebChannelConnection";class vV extends _V{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=Lg();return new Promise((d,p)=>{const g=new TR;g.setWithCredentials(!0),g.listenOnce(SR.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case cf.NO_ERROR:const T=g.getResponseJson();he(on,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case cf.TIMEOUT:he(on,`RPC '${e}' ${c} timed out`),p(new ge(ne.DEADLINE_EXCEEDED,"Request time out"));break;case cf.HTTP_ERROR:const S=g.getStatus();if(he(on,`RPC '${e}' ${c} failed with status:`,S,"response text:",g.getResponseText()),S>0){let O=g.getResponseJson();Array.isArray(O)&&(O=O[0]);const I=O==null?void 0:O.error;if(I&&I.status&&I.message){const H=function(Q){const X=Q.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(X)>=0?X:ne.UNKNOWN}(I.status);p(new ge(H,I.message))}else p(new ge(ne.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ge(ne.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{he(on,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(a);he(on,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,s,15)})}T_(e,t,s){const a=Lg(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=RR(),d=wR(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const y=l.join("");he(on,`Creating RPC '${e}' stream ${a}: ${y}`,p);const T=c.createWebChannel(y,p);let S=!1,O=!1;const I=new yV({Zo:B=>{O?he(on,`Not sending because RPC '${e}' stream ${a} is closed:`,B):(S||(he(on,`Opening RPC '${e}' stream ${a} transport.`),T.open(),S=!0),he(on,`RPC '${e}' stream ${a} sending:`,B),T.send(B))},Xo:()=>T.close()}),H=(B,Q,X)=>{B.listen(Q,te=>{try{X(te)}catch(ue){setTimeout(()=>{throw ue},0)}})};return H(T,Du.EventType.OPEN,()=>{O||(he(on,`RPC '${e}' stream ${a} transport opened.`),I.__())}),H(T,Du.EventType.CLOSE,()=>{O||(O=!0,he(on,`RPC '${e}' stream ${a} transport closed`),I.u_())}),H(T,Du.EventType.ERROR,B=>{O||(O=!0,qo(on,`RPC '${e}' stream ${a} transport errored. Name:`,B.name,"Message:",B.message),I.u_(new ge(ne.UNAVAILABLE,"The operation could not be completed")))}),H(T,Du.EventType.MESSAGE,B=>{var Q;if(!O){const X=B.data[0];$e(!!X,16349);const te=X,ue=(te==null?void 0:te.error)||((Q=te[0])===null||Q===void 0?void 0:Q.error);if(ue){he(on,`RPC '${e}' stream ${a} received error:`,ue);const ce=ue.status;let Ee=function(b){const k=It[b];if(k!==void 0)return rb(k)}(ce),M=ue.message;Ee===void 0&&(Ee=ne.INTERNAL,M="Unknown error status: "+ce+" with message "+ue.message),O=!0,I.u_(new ge(Ee,M)),T.close()}else he(on,`RPC '${e}' stream ${a} received:`,X),I.c_(X)}}),H(d,AR.STAT_EVENT,B=>{B.stat===wg.PROXY?he(on,`RPC '${e}' stream ${a} detected buffering proxy`):B.stat===wg.NOPROXY&&he(on,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{I.a_()},0),I}}function $m(){return typeof document<"u"?document:null}/**
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
 */function _d(n){return new AL(n,!0)}/**
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
 */class vb{constructor(e,t,s=1e3,a=1.5,l=6e4){this.xi=e,this.timerId=t,this.I_=s,this.E_=a,this.d_=l,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),s=Math.max(0,Date.now()-this.V_),a=Math.max(0,t-s);a>0&&he("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,a,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const kS="PersistentStream";class Eb{constructor(e,t,s,a,l,c,d,p){this.xi=e,this.y_=s,this.w_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new vb(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===ne.RESOURCE_EXHAUSTED?(bs(t.toString()),bs("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.S_===t&&this.K_(s,a)},s=>{e(()=>{const a=new ge(ne.UNKNOWN,"Fetching auth token failed: "+s.message);return this.W_(a)})})}K_(e,t){const s=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(a=>{s(()=>this.W_(a))}),this.stream.onMessage(a=>{s(()=>++this.v_==1?this.z_(a):this.onNext(a))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return he(kS,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(he(kS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EV extends Eb{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=bL(this.serializer,e),s=function(l){if(!("targetChange"in l))return Re.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Re.min():c.readTime?xi(c.readTime):Re.min()}(e);return this.listener.j_(t,s)}H_(e){const t={};t.database=Pg(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=Ng(p)?{documents:NL(l,p)}:{query:OL(l,p).gt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=lb(l,c.resumeToken);const g=Dg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Re.min())>0){d.readTime=Ff(l,c.snapshotVersion.toTimestamp());const g=Dg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const s=kL(this.serializer,e);s&&(t.labels=s),this.L_(t)}J_(e){const t={};t.database=Pg(this.serializer),t.removeTarget=e,this.L_(t)}}class TV extends Eb{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return $e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){$e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=IL(e.writeResults,e.commitTime),s=xi(e.commitTime);return this.listener.ea(s,t)}ta(){const e={};e.database=Pg(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>CL(this.serializer,s))};this.L_(t)}}/**
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
 */class SV{}class AV extends SV{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.na=!1}ra(){if(this.na)throw new ge(ne.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,a){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.zo(e,kg(t,s),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ge(ne.UNKNOWN,l.toString())})}Yo(e,t,s,a,l){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Yo(e,kg(t,s),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ge(ne.UNKNOWN,c.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class wV{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(bs(t),this.oa=!1):he("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const Ca="RemoteStore";class RV{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=l,this.Ea.No(c=>{s.enqueueAndForget(async()=>{Pa(this)&&(he(Ca,"Restarting streams for network reachability change."),await async function(p){const g=be(p);g.Ta.add(4),await yc(g),g.da.set("Unknown"),g.Ta.delete(4),await yd(g)}(this))})}),this.da=new wV(s,a)}}async function yd(n){if(Pa(n))for(const e of n.Ia)await e(!0)}async function yc(n){for(const e of n.Ia)await e(!1)}function Tb(n,e){const t=be(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),Z_(t)?X_(t):cl(t).M_()&&W_(t,e))}function $_(n,e){const t=be(n),s=cl(t);t.Pa.delete(e),s.M_()&&Sb(t,e),t.Pa.size===0&&(s.M_()?s.N_():Pa(t)&&t.da.set("Unknown"))}function W_(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}cl(n).H_(e)}function Sb(n,e){n.Aa.Ke(e),cl(n).J_(e)}function X_(n){n.Aa=new vL({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),cl(n).start(),n.da._a()}function Z_(n){return Pa(n)&&!cl(n).F_()&&n.Pa.size>0}function Pa(n){return be(n).Ta.size===0}function Ab(n){n.Aa=void 0}async function bV(n){n.da.set("Online")}async function CV(n){n.Pa.forEach((e,t)=>{W_(n,e)})}async function IV(n,e){Ab(n),Z_(n)?(n.da.ca(e),X_(n)):n.da.set("Unknown")}async function NV(n,e,t){if(n.da.set("Online"),e instanceof ob&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Pa.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Pa.delete(d),a.Aa.removeTarget(d))}(n,e)}catch(s){he(Ca,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await jf(n,s)}else if(e instanceof pf?n.Aa.Xe(e):e instanceof ab?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(Re.min()))try{const s=await yb(n.localStore);t.compareTo(s)>=0&&await function(l,c){const d=l.Aa.It(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Pa.get(g);y&&l.Pa.set(g,y.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const y=l.Pa.get(p);if(!y)return;l.Pa.set(p,y.withResumeToken(nn.EMPTY_BYTE_STRING,y.snapshotVersion)),Sb(l,p);const T=new hr(y.target,p,g,y.sequenceNumber);W_(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(s){he(Ca,"Failed to raise snapshot:",s),await jf(n,s)}}async function jf(n,e,t){if(!ul(e))throw e;n.Ta.add(1),await yc(n),n.da.set("Offline"),t||(t=()=>yb(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{he(Ca,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await yd(n)})}function wb(n,e){return e().catch(t=>jf(n,t,e))}async function vd(n){const e=be(n),t=wr(e);let s=e.ha.length>0?e.ha[e.ha.length-1].batchId:x_;for(;OV(e);)try{const a=await hV(e.localStore,s);if(a===null){e.ha.length===0&&t.N_();break}s=a.batchId,DV(e,a)}catch(a){await jf(e,a)}Rb(e)&&bb(e)}function OV(n){return Pa(n)&&n.ha.length<10}function DV(n,e){n.ha.push(e);const t=wr(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function Rb(n){return Pa(n)&&!wr(n).F_()&&n.ha.length>0}function bb(n){wr(n).start()}async function kV(n){wr(n).ta()}async function MV(n){const e=wr(n);for(const t of n.ha)e.Z_(t.mutations)}async function PV(n,e,t){const s=n.ha.shift(),a=H_.from(s,e,t);await wb(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await vd(n)}async function xV(n,e){e&&wr(n).Y_&&await async function(s,a){if(function(c){return _L(c)&&c!==ne.ABORTED}(a.code)){const l=s.ha.shift();wr(s).O_(),await wb(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a)),await vd(s)}}(n,e),Rb(n)&&bb(n)}async function MS(n,e){const t=be(n);t.asyncQueue.verifyOperationInProgress(),he(Ca,"RemoteStore received new credentials");const s=Pa(t);t.Ta.add(3),await yc(t),s&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await yd(t)}async function LV(n,e){const t=be(n);e?(t.Ta.delete(2),await yd(t)):e||(t.Ta.add(2),await yc(t),t.da.set("Unknown"))}function cl(n){return n.Ra||(n.Ra=function(t,s,a){const l=be(t);return l.ra(),new EV(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{e_:bV.bind(null,n),n_:CV.bind(null,n),i_:IV.bind(null,n),j_:NV.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),Z_(n)?X_(n):n.da.set("Unknown")):(await n.Ra.stop(),Ab(n))})),n.Ra}function wr(n){return n.Va||(n.Va=function(t,s,a){const l=be(t);return l.ra(),new TV(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:kV.bind(null,n),i_:xV.bind(null,n),X_:MV.bind(null,n),ea:PV.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await vd(n)):(await n.Va.stop(),n.ha.length>0&&(he(Ca,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
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
 */class J_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new J_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ey(n,e){if(bs("AsyncQueue",`${e}: ${n}`),ul(n))return new ge(ne.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class zo{static emptySet(e){return new zo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ye.comparator(t.key,s.key):(t,s)=>ye.comparator(t.key,s.key),this.keyedMap=ku(),this.sortedSet=new mt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new zo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class PS{constructor(){this.ma=new mt(ye.comparator)}track(e){const t=e.doc.key,s=this.ma.get(t);s?e.type!==0&&s.type===3?this.ma=this.ma.insert(t,e):e.type===3&&s.type!==1?this.ma=this.ma.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ma=this.ma.remove(t):e.type===1&&s.type===2?this.ma=this.ma.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):Ae(63341,{Vt:e,fa:s}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,s)=>{e.push(s)}),e}}class Wo{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new Wo(e,t,zo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
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
 */class VV{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class UV{constructor(){this.queries=xS(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,s){const a=be(t),l=a.queries;a.queries=xS(),l.forEach((c,d)=>{for(const p of d.ya)p.onError(s)})})(this,new ge(ne.ABORTED,"Firestore shutting down"))}}function xS(){return new Ma(n=>KR(n),fd)}async function BV(n,e){const t=be(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.wa()&&e.Sa()&&(s=2):(l=new VV,s=e.Sa()?0:1);try{switch(s){case 0:l.pa=await t.onListen(a,!0);break;case 1:l.pa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=ey(c,`Initialization of query '${Oo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.ya.push(e),e.Da(t.onlineState),l.pa&&e.va(l.pa)&&ty(t)}async function zV(n,e){const t=be(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.ya.indexOf(e);c>=0&&(l.ya.splice(c,1),l.ya.length===0?a=e.Sa()?0:1:!l.wa()&&e.Sa()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function FV(n,e){const t=be(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.ya)d.va(a)&&(s=!0);c.pa=a}}s&&ty(t)}function HV(n,e,t){const s=be(n),a=s.queries.get(e);if(a)for(const l of a.ya)l.onError(t);s.queries.delete(e)}function ty(n){n.ba.forEach(e=>{e.next()})}var Vg,LS;(LS=Vg||(Vg={})).Ca="default",LS.Cache="cache";class jV{constructor(e,t,s){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=s||{}}va(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new Wo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const s=t!=="Offline";return(!this.options.La||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=Wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Vg.Cache}}/**
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
 */class Cb{constructor(e){this.key=e}}class Ib{constructor(e){this.key=e}}class qV{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Le(),this.mutatedKeys=Le(),this.Ha=YR(e),this.Ja=new zo(this.Ha)}get Ya(){return this.Ga}Za(e,t){const s=t?t.Xa:new PS,a=t?t.Ja:this.Ja;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,T)=>{const S=a.get(y),O=dd(this.query,T)?T:null,I=!!S&&this.mutatedKeys.has(S.key),H=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let B=!1;S&&O?S.data.isEqual(O.data)?I!==H&&(s.track({type:3,doc:O}),B=!0):this.eu(S,O)||(s.track({type:2,doc:O}),B=!0,(p&&this.Ha(O,p)>0||g&&this.Ha(O,g)<0)&&(d=!0)):!S&&O?(s.track({type:0,doc:O}),B=!0):S&&!O&&(s.track({type:1,doc:S}),B=!0,(p||g)&&(d=!0)),B&&(O?(c=c.add(O),l=H?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{Ja:c,Xa:s,Cs:d,mutatedKeys:l}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const c=e.Xa.ga();c.sort((y,T)=>function(O,I){const H=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{Vt:B})}};return H(O)-H(I)}(y.type,T.type)||this.Ha(y.doc,T.doc)),this.tu(s),a=a!=null&&a;const d=t&&!a?this.nu():[],p=this.ja.size===0&&this.current&&!a?1:0,g=p!==this.za;return this.za=p,c.length!==0||g?{snapshot:new Wo(this.query,e.Ja,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),ru:d}:{ru:d}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new PS,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Le(),this.Ja.forEach(s=>{this.iu(s.key)&&(this.ja=this.ja.add(s.key))});const t=[];return e.forEach(s=>{this.ja.has(s)||t.push(new Ib(s))}),this.ja.forEach(s=>{e.has(s)||t.push(new Cb(s))}),t}su(e){this.Ga=e.$s,this.ja=Le();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return Wo.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const ny="SyncEngine";class GV{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class KV{constructor(e){this.key=e,this._u=!1}}class YV{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.au={},this.uu=new Ma(d=>KR(d),fd),this.cu=new Map,this.lu=new Set,this.hu=new mt(ye.comparator),this.Pu=new Map,this.Tu=new G_,this.Iu={},this.Eu=new Map,this.du=$o.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function QV(n,e,t=!0){const s=Pb(n);let a;const l=s.uu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.ou()):a=await Nb(s,e,t,!0),a}async function $V(n,e){const t=Pb(n);await Nb(t,e,!0,!1)}async function Nb(n,e,t,s){const a=await fV(n.localStore,Mi(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await WV(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&Tb(n.remoteStore,a),d}async function WV(n,e,t,s,a){n.Ru=(T,S,O)=>async function(H,B,Q,X){let te=B.view.Za(Q);te.Cs&&(te=await IS(H.localStore,B.query,!1).then(({documents:M})=>B.view.Za(M,te)));const ue=X&&X.targetChanges.get(B.targetId),ce=X&&X.targetMismatches.get(B.targetId)!=null,Ee=B.view.applyChanges(te,H.isPrimaryClient,ue,ce);return US(H,B.targetId,Ee.ru),Ee.snapshot}(n,T,S,O);const l=await IS(n.localStore,e,!0),c=new qV(e,l.$s),d=c.Za(l.documents),p=_c.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);US(n,t,g.ru);const y=new GV(e,t,c);return n.uu.set(e,y),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),g.snapshot}async function XV(n,e,t){const s=be(n),a=s.uu.get(e),l=s.cu.get(a.targetId);if(l.length>1)return s.cu.set(a.targetId,l.filter(c=>!fd(c,e))),void s.uu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await xg(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&$_(s.remoteStore,a.targetId),Ug(s,a.targetId)}).catch(ll)):(Ug(s,a.targetId),await xg(s.localStore,a.targetId,!0))}async function ZV(n,e){const t=be(n),s=t.uu.get(e),a=t.cu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),$_(t.remoteStore,s.targetId))}async function JV(n,e,t){const s=a4(n);try{const a=await function(c,d){const p=be(c),g=Lt.now(),y=d.reduce((O,I)=>O.add(I.key),Le());let T,S;return p.persistence.runTransaction("Locally write mutations","readwrite",O=>{let I=Cs(),H=Le();return p.Bs.getEntries(O,y).next(B=>{I=B,I.forEach((Q,X)=>{X.isValidDocument()||(H=H.add(Q))})}).next(()=>p.localDocuments.getOverlayedDocuments(O,I)).next(B=>{T=B;const Q=[];for(const X of d){const te=fL(X,T.get(X.key).overlayedDocument);te!=null&&Q.push(new Dr(X.key,te,BR(te.value.mapValue),Pi.exists(!0)))}return p.mutationQueue.addMutationBatch(O,g,Q,d)}).next(B=>{S=B;const Q=B.applyToLocalDocumentSet(T,H);return p.documentOverlayCache.saveOverlays(O,B.batchId,Q)})}).then(()=>({batchId:S.batchId,changes:$R(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let g=c.Iu[c.currentUser.toKey()];g||(g=new mt(Ne)),g=g.insert(d,p),c.Iu[c.currentUser.toKey()]=g}(s,a.batchId,t),await vc(s,a.changes),await vd(s.remoteStore)}catch(a){const l=ey(a,"Failed to persist write");t.reject(l)}}async function Ob(n,e){const t=be(n);try{const s=await uV(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Pu.get(l);c&&($e(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c._u=!0:a.modifiedDocuments.size>0?$e(c._u,14607):a.removedDocuments.size>0&&($e(c._u,42227),c._u=!1))}),await vc(t,s,e)}catch(s){await ll(s)}}function VS(n,e,t){const s=be(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.uu.forEach((l,c)=>{const d=c.view.Da(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=be(c);p.onlineState=d;let g=!1;p.queries.forEach((y,T)=>{for(const S of T.ya)S.Da(d)&&(g=!0)}),g&&ty(p)}(s.eventManager,e),a.length&&s.au.j_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function e4(n,e,t){const s=be(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Pu.get(e),l=a&&a.key;if(l){let c=new mt(ye.comparator);c=c.insert(l,hn.newNoDocument(l,Re.min()));const d=Le().add(l),p=new gd(Re.min(),new Map,new mt(Ne),c,d);await Ob(s,p),s.hu=s.hu.remove(l),s.Pu.delete(e),iy(s)}else await xg(s.localStore,e,!1).then(()=>Ug(s,e,t)).catch(ll)}async function t4(n,e){const t=be(n),s=e.batch.batchId;try{const a=await lV(t.localStore,e);kb(t,s,null),Db(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await vc(t,a)}catch(a){await ll(a)}}async function n4(n,e,t){const s=be(n);try{const a=await function(c,d){const p=be(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next(T=>($e(T!==null,37113),y=T.keys(),p.mutationQueue.removeMutationBatch(g,T))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>p.localDocuments.getDocuments(g,y))})}(s.localStore,e);kb(s,e,t),Db(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await vc(s,a)}catch(a){await ll(a)}}function Db(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function kb(n,e,t){const s=be(n);let a=s.Iu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Iu[s.currentUser.toKey()]=a}}function Ug(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.cu.get(e))n.uu.delete(s),t&&n.au.Vu(s,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(s=>{n.Tu.containsKey(s)||Mb(n,s)})}function Mb(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&($_(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),iy(n))}function US(n,e,t){for(const s of t)s instanceof Cb?(n.Tu.addReference(s.key,e),i4(n,s)):s instanceof Ib?(he(ny,"Document no longer in limbo: "+s.key),n.Tu.removeReference(s.key,e),n.Tu.containsKey(s.key)||Mb(n,s.key)):Ae(19791,{mu:s})}function i4(n,e){const t=e.key,s=t.path.canonicalString();n.hu.get(t)||n.lu.has(s)||(he(ny,"New document in limbo: "+t),n.lu.add(s),iy(n))}function iy(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new ye(vt.fromString(e)),s=n.du.next();n.Pu.set(s,new KV(t)),n.hu=n.hu.insert(t,s),Tb(n.remoteStore,new hr(Mi(z_(t.path)),s,"TargetPurposeLimboResolution",ld.le))}}async function vc(n,e,t){const s=be(n),a=[],l=[],c=[];s.uu.isEmpty()||(s.uu.forEach((d,p)=>{c.push(s.Ru(p,e,t).then(g=>{var y;if((g||t)&&s.isPrimaryClient){const T=g?!g.fromCache:(y=t==null?void 0:t.targetChanges.get(p.targetId))===null||y===void 0?void 0:y.current;s.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(g){a.push(g);const T=Y_.Rs(p.targetId,g);l.push(T)}}))}),await Promise.all(c),s.au.j_(a),await async function(p,g){const y=be(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>J.forEach(g,S=>J.forEach(S.ds,O=>y.persistence.referenceDelegate.addReference(T,S.targetId,O)).next(()=>J.forEach(S.As,O=>y.persistence.referenceDelegate.removeReference(T,S.targetId,O)))))}catch(T){if(!ul(T))throw T;he(Q_,"Failed to update sequence numbers: "+T)}for(const T of g){const S=T.targetId;if(!T.fromCache){const O=y.xs.get(S),I=O.snapshotVersion,H=O.withLastLimboFreeSnapshotVersion(I);y.xs=y.xs.insert(S,H)}}}(s.localStore,l))}async function s4(n,e){const t=be(n);if(!t.currentUser.isEqual(e)){he(ny,"User change. New user:",e.toKey());const s=await _b(t.localStore,e);t.currentUser=e,function(l,c){l.Eu.forEach(d=>{d.forEach(p=>{p.reject(new ge(ne.CANCELLED,c))})}),l.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await vc(t,s.ks)}}function r4(n,e){const t=be(n),s=t.Pu.get(e);if(s&&s._u)return Le().add(s.key);{let a=Le();const l=t.cu.get(e);if(!l)return a;for(const c of l){const d=t.uu.get(c);a=a.unionWith(d.view.Ya)}return a}}function Pb(n){const e=be(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ob.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=r4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=e4.bind(null,e),e.au.j_=FV.bind(null,e.eventManager),e.au.Vu=HV.bind(null,e.eventManager),e}function a4(n){const e=be(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=t4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=n4.bind(null,e),e}class qf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_d(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return oV(this.persistence,new sV,e.initialUser,this.serializer)}yu(e){return new gb(K_.fi,this.serializer)}pu(e){return new pV}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qf.provider={build:()=>new qf};class o4 extends qf{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){$e(this.persistence.referenceDelegate instanceof Hf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new jL(s,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?Sn.withCacheSize(this.cacheSizeBytes):Sn.DEFAULT;return new gb(s=>Hf.fi(s,t),this.serializer)}}class Bg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>VS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=s4.bind(null,this.syncEngine),await LV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new UV}()}createDatastore(e){const t=_d(e.databaseInfo.databaseId),s=function(l){return new vV(l)}(e.databaseInfo);return function(l,c,d,p){return new AV(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,c,d){return new RV(s,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>VS(this.syncEngine,t,0),function(){return DS.C()?new DS:new mV}())}createSyncEngine(e,t){return function(a,l,c,d,p,g,y){const T=new YV(a,l,c,d,p,g);return y&&(T.Au=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=be(a);he(Ca,"RemoteStore shutting down."),l.Ta.add(5),await yc(l),l.Ea.shutdown(),l.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Bg.provider={build:()=>new Bg};/**
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
 */class l4{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):bs("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Rr="FirestoreClient";class u4{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=ln.UNAUTHENTICATED,this.clientId=NR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async c=>{he(Rr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(he(Rr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ey(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Wm(n,e){n.asyncQueue.verifyOperationInProgress(),he(Rr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async a=>{s.isEqual(a)||(await _b(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function BS(n,e){n.asyncQueue.verifyOperationInProgress();const t=await c4(n);he(Rr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>MS(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,a)=>MS(e.remoteStore,a)),n._onlineComponents=e}async function c4(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){he(Rr,"Using user provided OfflineComponentProvider");try{await Wm(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===ne.FAILED_PRECONDITION||a.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;qo("Error using user provided cache. Falling back to memory cache: "+t),await Wm(n,new qf)}}else he(Rr,"Using default OfflineComponentProvider"),await Wm(n,new o4(void 0));return n._offlineComponents}async function xb(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(he(Rr,"Using user provided OnlineComponentProvider"),await BS(n,n._uninitializedComponentsProvider._online)):(he(Rr,"Using default OnlineComponentProvider"),await BS(n,new Bg))),n._onlineComponents}function h4(n){return xb(n).then(e=>e.syncEngine)}async function f4(n){const e=await xb(n),t=e.eventManager;return t.onListen=QV.bind(null,e.syncEngine),t.onUnlisten=XV.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=$V.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ZV.bind(null,e.syncEngine),t}function d4(n,e,t={}){const s=new gr;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const y=new l4({next:S=>{y.Cu(),c.enqueueAndForget(()=>zV(l,T));const O=S.docs.has(d);!O&&S.fromCache?g.reject(new ge(ne.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&S.fromCache&&p&&p.source==="server"?g.reject(new ge(ne.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),T=new jV(z_(d.path),y,{includeMetadataChanges:!0,La:!0});return BV(l,T)}(await f4(n),n.asyncQueue,e,t,s)),s.promise}/**
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
 */function Lb(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const zS=new Map;/**
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
 */function p4(n,e,t){if(!t)throw new ge(ne.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function m4(n,e,t,s){if(e===!0&&s===!0)throw new ge(ne.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function FS(n){if(!ye.isDocumentKey(n))throw new ge(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sy(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ae(12329,{type:typeof n})}function Ia(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ge(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=sy(n);throw new ge(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const Vb="firestore.googleapis.com",HS=!0;class jS{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ge(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vb,this.ssl=HS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:HS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=mb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<FL)throw new ge(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}m4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ge(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ge(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ge(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ry{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new gx;switch(s.type){case"firstParty":return new Ex(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ge(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=zS.get(t);s&&(he("ComponentProvider","Removing Datastore"),zS.delete(t),s.terminate())}(this),Promise.resolve()}}function g4(n,e,t,s={}){var a;n=Ia(n,ry);const l=tl(e),c=n._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;l&&(Wg(`https://${p}`),Xg("Firestore",!0)),c.host!==Vb&&c.host!==p&&qo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:s});if(!_r(g,d)&&(n._setSettings(g),s.mockUserToken)){let y,T;if(typeof s.mockUserToken=="string")y=s.mockUserToken,T=ln.MOCK_USER;else{y=AA(s.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new ge(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new ln(S)}n._authCredentials=new _x(new CR(y,T))}}/**
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
 */class ay{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ay(this.firestore,e,this._query)}}class Ln{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ln(this.firestore,e,this._key)}}class nc extends ay{constructor(e,t,s){super(e,t,z_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ln(this.firestore,null,new ye(e))}withConverter(e){return new nc(this.firestore,e,this._path)}}function _4(n,e,...t){if(n=Yt(n),arguments.length===1&&(e=NR.newId()),p4("doc","path",e),n instanceof ry){const s=vt.fromString(e,...t);return FS(s),new Ln(n,null,new ye(s))}{if(!(n instanceof Ln||n instanceof nc))throw new ge(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(vt.fromString(e,...t));return FS(s),new Ln(n.firestore,n instanceof nc?n.converter:null,new ye(s))}}/**
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
 */const qS="AsyncQueue";class GS{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new vb(this,"async_queue_retry"),this.ec=()=>{const s=$m();s&&he(qS,"Visibility state changed to "+s.visibilityState),this.C_.p_()},this.tc=e;const t=$m();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=$m();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new gr;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!ul(e))throw e;he(qS,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(s=>{throw this.Ju=s,this.Yu=!1,bs("INTERNAL UNHANDLED ERROR: ",KS(s)),s}).then(s=>(this.Yu=!1,s))));return this.tc=t,t}enqueueAfterDelay(e,t,s){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const a=J_.createAndSchedule(this,e,t,s,l=>this.oc(l));return this.Hu.push(a),a}nc(){this.Ju&&Ae(47125,{_c:KS(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function KS(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ed extends ry{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new GS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new GS(e),this._firestoreClient=void 0,await e}}}function y4(n,e){const t=typeof n=="object"?n:t_(),s=typeof n=="string"?n:xf,a=Jf(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=EA("firestore");l&&g4(a,...l)}return a}function Ub(n){if(n._terminated)throw new ge(ne.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||v4(n),n._firestoreClient}function v4(n){var e,t,s;const a=n._freezeSettings(),l=function(d,p,g,y){return new xx(d,p,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,Lb(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new u4(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class Xo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xo(nn.fromBase64String(e))}catch(t){throw new ge(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xo(nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Td{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ge(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Sd{constructor(e){this._methodName=e}}/**
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
 */class oy{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ge(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ge(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
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
 */class ly{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const E4=/^__.*__$/;class T4{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,t,this.fieldTransforms):new gc(e,this.data,t,this.fieldTransforms)}}class Bb{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Dr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function zb(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{hc:n})}}class Ad{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Pc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Ad(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:s,Ec:!1});return a.dc(e),a}Ac(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:s,Ec:!1});return a.Pc(),a}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Gf(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(zb(this.hc)&&E4.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class S4{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||_d(e)}gc(e,t,s,a=!1){return new Ad({hc:e,methodName:t,fc:s,path:tn.emptyPath(),Ec:!1,mc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fb(n){const e=n._freezeSettings(),t=_d(n._databaseId);return new S4(n._databaseId,!!e.ignoreUndefinedProperties,t)}function A4(n,e,t,s,a,l={}){const c=n.gc(l.merge||l.mergeFields?2:0,e,t,a);cy("Data must be an object, but it was:",c,s);const d=Hb(s,c);let p,g;if(l.merge)p=new Pn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const S=zg(e,T,t);if(!c.contains(S))throw new ge(ne.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);qb(y,S)||y.push(S)}p=new Pn(y),g=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,g=c.fieldTransforms;return new T4(new An(d),p,g)}class wd extends Sd{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wd}}function w4(n,e,t){return new Ad({hc:3,fc:e.settings.fc,methodName:n._methodName,Ec:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class uy extends Sd{constructor(e,t){super(e),this.yc=t}_toFieldTransform(e){const t=w4(this,e,!0),s=this.yc.map(l=>Ec(l,t)),a=new Qo(s);return new lL(e.path,a)}isEqual(e){return e instanceof uy&&_r(this.yc,e.yc)}}function R4(n,e,t,s){const a=n.gc(1,e,t);cy("Data must be an object, but it was:",a,s);const l=[],c=An.empty();Or(s,(p,g)=>{const y=hy(e,p,t);g=Yt(g);const T=a.Ac(y);if(g instanceof wd)l.push(y);else{const S=Ec(g,T);S!=null&&(l.push(y),c.set(y,S))}});const d=new Pn(l);return new Bb(c,d,a.fieldTransforms)}function b4(n,e,t,s,a,l){const c=n.gc(1,e,t),d=[zg(e,s,t)],p=[a];if(l.length%2!=0)throw new ge(ne.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)d.push(zg(e,l[S])),p.push(l[S+1]);const g=[],y=An.empty();for(let S=d.length-1;S>=0;--S)if(!qb(g,d[S])){const O=d[S];let I=p[S];I=Yt(I);const H=c.Ac(O);if(I instanceof wd)g.push(O);else{const B=Ec(I,H);B!=null&&(g.push(O),y.set(O,B))}}const T=new Pn(g);return new Bb(y,T,c.fieldTransforms)}function Ec(n,e){if(jb(n=Yt(n)))return cy("Unsupported field value:",e,n),Hb(n,e);if(n instanceof Sd)return function(s,a){if(!zb(a.hc))throw a.Vc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Vc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(s,a){const l=[];let c=0;for(const d of s){let p=Ec(d,a.Rc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(s,a){if((s=Yt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return rL(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Lt.fromDate(s);return{timestampValue:Ff(a.serializer,l)}}if(s instanceof Lt){const l=new Lt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ff(a.serializer,l)}}if(s instanceof oy)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Xo)return{bytesValue:lb(a.serializer,s._byteString)};if(s instanceof Ln){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Vc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:q_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof ly)return function(c,d){return{mapValue:{fields:{[VR]:{stringValue:UR},[Lf]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Vc("VectorValues must only contain numeric values.");return F_(d.serializer,g)})}}}}}}(s,a);throw a.Vc(`Unsupported field value: ${sy(s)}`)}(n,e)}function Hb(n,e){const t={};return DR(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Or(n,(s,a)=>{const l=Ec(a,e.Ic(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function jb(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Lt||n instanceof oy||n instanceof Xo||n instanceof Ln||n instanceof Sd||n instanceof ly)}function cy(n,e,t){if(!jb(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const s=sy(t);throw s==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+s)}}function zg(n,e,t){if((e=Yt(e))instanceof Td)return e._internalPath;if(typeof e=="string")return hy(n,e);throw Gf("Field path arguments must be of type string or ",n,!1,void 0,t)}const C4=new RegExp("[~\\*/\\[\\]]");function hy(n,e,t){if(e.search(C4)>=0)throw Gf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Td(...e.split("."))._internalPath}catch{throw Gf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gf(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new ge(ne.INVALID_ARGUMENT,d+n+p)}function qb(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Gb{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new I4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Kb("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class I4 extends Gb{data(){return super.data()}}function Kb(n,e){return typeof e=="string"?hy(n,e):e instanceof Td?e._internalPath:e._delegate._internalPath}class N4{convertValue(e,t="none"){switch(Ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return At(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Or(e,(a,l)=>{s[a]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[Lf].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(c=>At(c.doubleValue));return new ly(l)}convertGeoPoint(e){return new oy(At(e.latitude),At(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=cd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Zu(e));default:return null}}convertTimestamp(e){const t=Tr(e);return new Lt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=vt.fromString(e);$e(pb(s),9688,{name:e});const a=new Ju(s.get(1),s.get(3)),l=new ye(s.popFirst(5));return a.isEqual(t)||bs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function O4(n,e,t){let s;return s=n?n.toFirestore(e):e,s}/**
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
 */class D4{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yb extends Gb{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new k4(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Kb("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class k4 extends Yb{data(e={}){return super.data(e)}}/**
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
 */function M4(n){n=Ia(n,Ln);const e=Ia(n.firestore,Ed);return d4(Ub(e),n._key).then(t=>x4(e,n,t))}class P4 extends N4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ln(this.firestore,null,t)}}function VU(n,e,t){n=Ia(n,Ln);const s=Ia(n.firestore,Ed),a=O4(n.converter,e);return Qb(s,[A4(Fb(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Pi.none())])}function UU(n,e,t,...s){n=Ia(n,Ln);const a=Ia(n.firestore,Ed),l=Fb(a);let c;return c=typeof(e=Yt(e))=="string"||e instanceof Td?b4(l,"updateDoc",n._key,e,t,s):R4(l,"updateDoc",n._key,e),Qb(a,[c.toMutation(n._key,Pi.exists(!0))])}function Qb(n,e){return function(s,a){const l=new gr;return s.asyncQueue.enqueueAndForget(async()=>JV(await h4(s),a,l)),l.promise}(Ub(n),e)}function x4(n,e,t){const s=t.docs.get(e._key),a=new P4(n);return new Yb(n,a,e._key,s,new D4(t.hasPendingWrites,t.fromCache),e.converter)}function BU(...n){return new uy("arrayUnion",n)}(function(e,t=!0){(function(a){ol=a})(br),yr(new As("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new Ed(new yx(s.getProvider("auth-internal")),new Tx(c,s.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ge(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ju(g.options.projectId,y)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Xn(Z0,J0,e),Xn(Z0,J0,"esm2017")})();/**
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
 */const $b="firebasestorage.googleapis.com",L4="storageBucket",V4=2*60*1e3,U4=10*60*1e3;/**
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
 */class Hi extends Fi{constructor(e,t,s=0){super(Xm(e),`Firebase Storage: ${t} (${Xm(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Hi.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Bi;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Bi||(Bi={}));function Xm(n){return"storage/"+n}function B4(){const n="An unknown error occurred, please check the error payload for server response.";return new Hi(Bi.UNKNOWN,n)}function z4(){return new Hi(Bi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function F4(){return new Hi(Bi.CANCELED,"User canceled the upload/download.")}function H4(n){return new Hi(Bi.INVALID_URL,"Invalid URL '"+n+"'.")}function j4(n){return new Hi(Bi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function YS(n){return new Hi(Bi.INVALID_ARGUMENT,n)}function Wb(){return new Hi(Bi.APP_DELETED,"The Firebase app was deleted.")}function q4(n){return new Hi(Bi.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ui{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=ui.makeFromUrl(e,t)}catch{return new ui(e,"")}if(s.path==="")return s;throw j4(e)}static makeFromUrl(e,t){let s=null;const a="([A-Za-z0-9.\\-_]+)";function l(ue){ue.path.charAt(ue.path.length-1)==="/"&&(ue.path_=ue.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+a+c,"i"),p={bucket:1,path:3};function g(ue){ue.path_=decodeURIComponent(ue.path)}const y="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",O=new RegExp(`^https?://${T}/${y}/b/${a}/o${S}`,"i"),I={bucket:1,path:3},H=t===$b?"(?:storage.googleapis.com|storage.cloud.google.com)":t,B="([^?#]*)",Q=new RegExp(`^https?://${H}/${a}/${B}`,"i"),te=[{regex:d,indices:p,postModify:l},{regex:O,indices:I,postModify:g},{regex:Q,indices:{bucket:1,path:2},postModify:g}];for(let ue=0;ue<te.length;ue++){const ce=te[ue],Ee=ce.regex.exec(e);if(Ee){const M=Ee[ce.indices.bucket];let R=Ee[ce.indices.path];R||(R=""),s=new ui(M,R),ce.postModify(s);break}}if(s==null)throw H4(e);return s}}class G4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function K4(n,e,t){let s=1,a=null,l=null,c=!1,d=0;function p(){return d===2}let g=!1;function y(...B){g||(g=!0,e.apply(null,B))}function T(B){a=setTimeout(()=>{a=null,n(O,p())},B)}function S(){l&&clearTimeout(l)}function O(B,...Q){if(g){S();return}if(B){S(),y.call(null,B,...Q);return}if(p()||c){S(),y.call(null,B,...Q);return}s<64&&(s*=2);let te;d===1?(d=2,te=0):te=(s+Math.random())*1e3,T(te)}let I=!1;function H(B){I||(I=!0,S(),!g&&(a!==null?(B||(d=2),clearTimeout(a),T(0)):B||(d=1)))}return T(0),l=setTimeout(()=>{c=!0,H(!0)},t),H}function Y4(n){n(!1)}/**
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
 */function Q4(n){return n!==void 0}function QS(n,e,t,s){if(s<e)throw YS(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw YS(`Invalid value for '${n}'. Expected ${t} or less.`)}function $4(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const a=e(s)+"="+e(n[s]);t=t+a+"&"}return t=t.slice(0,-1),t}var Kf;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Kf||(Kf={}));/**
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
 */function W4(n,e){const t=n>=500&&n<600,a=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||a||l}/**
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
 */class X4{constructor(e,t,s,a,l,c,d,p,g,y,T,S=!0,O=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=a,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=y,this.connectionFactory_=T,this.retry=S,this.isUsingEmulator=O,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,H)=>{this.resolve_=I,this.reject_=H,this.start_()})}start_(){const e=(s,a)=>{if(a){s(!1,new tf(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===Kf.NO_ERROR,p=l.getStatus();if(!d||W4(p,this.additionalRetryCodes_)&&this.retry){const y=l.getErrorCode()===Kf.ABORT;s(!1,new tf(!1,null,y));return}const g=this.successCodes_.indexOf(p)!==-1;s(!0,new tf(g,l))})},t=(s,a)=>{const l=this.resolve_,c=this.reject_,d=a.connection;if(a.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());Q4(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=B4();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(a.canceled){const p=this.appDelete_?Wb():F4();c(p)}else{const p=z4();c(p)}};this.canceled_?t(!1,new tf(!1,null,!0)):this.backoffId_=K4(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Y4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tf{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function Z4(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function J4(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eU(n,e){e&&(n["X-Firebase-GMPID"]=e)}function tU(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function nU(n,e,t,s,a,l,c=!0,d=!1){const p=$4(n.urlParams),g=n.url+p,y=Object.assign({},n.headers);return eU(y,e),Z4(y,t),J4(y,l),tU(y,s),new X4(g,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,a,c,d)}/**
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
 */function iU(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function sU(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Yf{constructor(e,t){this._service=e,t instanceof ui?this._location=t:this._location=ui.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Yf(e,t)}get root(){const e=new ui(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sU(this._location.path)}get storage(){return this._service}get parent(){const e=iU(this._location.path);if(e===null)return null;const t=new ui(this._location.bucket,e);return new Yf(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw q4(e)}}function $S(n,e){const t=e==null?void 0:e[L4];return t==null?null:ui.makeFromBucketSpec(t,n)}function rU(n,e,t,s={}){n.host=`${e}:${t}`;const a=tl(e);a&&(Wg(`https://${n.host}`),Xg("Storage",!0)),n._isUsingEmulator=!0,n._protocol=a?"https":"http";const{mockUserToken:l}=s;l&&(n._overrideAuthToken=typeof l=="string"?l:AA(l,n.app.options.projectId))}class aU{constructor(e,t,s,a,l,c=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=a,this._firebaseVersion=l,this._isUsingEmulator=c,this._bucket=null,this._host=$b,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=V4,this._maxUploadRetryTime=U4,this._requests=new Set,a!=null?this._bucket=ui.makeFromBucketSpec(a,this._host):this._bucket=$S(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ui.makeFromBucketSpec(this._url,e):this._bucket=$S(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){QS("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){QS("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yf(this,e)}_makeRequest(e,t,s,a,l=!0){if(this._deleted)return new G4(Wb());{const c=nU(e,this._appId,s,a,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[s,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,a).getPromise()}}const WS="@firebase/storage",XS="0.13.12";/**
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
 */const Xb="storage";function oU(n=t_(),e){n=Yt(n);const s=Jf(n,Xb).getImmediate({identifier:e}),a=EA("storage");return a&&lU(s,...a),s}function lU(n,e,t,s={}){rU(n,e,t,s)}function uU(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),a=n.getProvider("app-check-internal");return new aU(t,s,a,e,br)}function cU(){yr(new As(Xb,uU,"PUBLIC").setMultipleInstances(!0)),Xn(WS,XS,""),Xn(WS,XS,"esm2017")}cU();const hU={apiKey:"AIzaSyDWN5GCnrhUqKZlOt8Rxb0n748lhPf9B58",authDomain:"to-do-list-9cf11.firebaseapp.com",databaseURL:"https://to-do-list-9cf11-default-rtdb.firebaseio.com",projectId:"to-do-list-9cf11",storageBucket:"to-do-list-9cf11.firebasestorage.app",messagingSenderId:"44862500438",appId:"1:44862500438:web:ccb0f012d9c8e7cfe215f7",measurementId:"G-HB8NT8L1FD"},fU={apiKey:"AIzaSyC_SdildU9oD7BID8i4GdReOYM0_qlguN0",authDomain:"databased-react.firebaseapp.com",databaseURL:"https://databased-react-default-rtdb.firebaseio.com",projectId:"databased-react",storageBucket:"databased-react.appspot.com",messagingSenderId:"82890993147",appId:"1:82890993147:web:77b68d26108894eeeaef5e",measurementId:"G-Y0JTK4KL1P"},Zb=e_(hU,"FIRST_APP"),dU=y4(Zb),Jb=Ck(Zb),pU=e_(fU,"SECOND_APP");oU(pU);const mU="_Signing_Out_Wrapper_1ge6g_3",gU="_Hide_Signing_Out_Wrapper_1ge6g_3",_U="_Signing_Out_Box_1ge6g_24",yU="_Top_1ge6g_38",vU="_Options_1ge6g_83",Cu={Signing_Out_Wrapper:mU,Hide_Signing_Out_Wrapper:gU,Signing_Out_Box:_U,Top:yU,Options:vU},EU=()=>{const{isSigningOut:n,setIsSigningOut:e,setLoading:t,user:s,setUser:a,userData:l}=Y.useContext(Tc),c=async()=>{t(!0);try{await _2(Jb),a(null),t(!1),e(!1)}catch(d){t(!1),e(!1),console.log(d)}};if(n)return se.jsx("div",{className:n?Cu.Signing_Out_Wrapper:Cu.Hide_Signing_Out_Wrapper,children:se.jsxs("div",{className:Cu.Signing_Out_Box,children:[se.jsxs("div",{className:Cu.Top,children:[l!=null&&l.profPic?se.jsx("div",{style:{backgroundImage:`url(${l.profPic})`}}):se.jsx("i",{className:"fa fa-user"}),se.jsx("h3",{children:"Would You Like To Sign Out?"})]}),se.jsxs("div",{className:Cu.Options,children:[se.jsx(tg,{content:"No",func:()=>{e(!1)}}),se.jsx(tg,{content:"Yes",func:()=>{c()}})]})]})})},TU="_makeUserSignInWrapper_k8p8e_1",SU="_hideMakeUserSignInWrapper_k8p8e_2",AU="_makeUserSignInBox_k8p8e_23",wU="_Images_k8p8e_48",RU="_Buttons_k8p8e_82",bU="_hidePromptButton_k8p8e_105",ar={makeUserSignInWrapper:TU,hideMakeUserSignInWrapper:SU,makeUserSignInBox:AU,Images:wU,Buttons:RU,hidePromptButton:bU},CU=()=>{const{showMakeUserSignIn:n,setShowMakeUserSignIn:e,setPage:t,user:s}=Y.useContext(Tc);function a(){e(!1),t(1);let l=window.location.href;l.toLowerCase();let c=l.search("/Acad/");l=l.slice(0,c+6).concat("#Home"),window.location.href=l}return se.jsx(se.Fragment,{children:se.jsx("div",{className:n&&!s?ar.makeUserSignInWrapper:ar.hideMakeUserSignInWrapper,children:se.jsxs("div",{className:ar.makeUserSignInBox,children:[se.jsx(ms,{className:ar.hidePromptButton,to:"/AcadComponent/",onClick:()=>{a()},children:se.jsx("i",{className:"fa fa-close"})}),se.jsxs("div",{className:ar.Images,children:[se.jsx("img",{src:"./cat.png"}),se.jsx("img",{src:"./!.png"})]}),se.jsx("h1",{children:"You're not Signed In !"}),se.jsx("p",{children:"Create an account, log in and get free access to the advanced To-Do List Web Application"}),se.jsxs("div",{className:ar.Buttons,children:[se.jsx(ms,{className:ar.Links,to:"/AcadComponent/SignUp",onClick:()=>{e(!1)},children:"Sign Up"}),se.jsx(ms,{className:ar.Links,to:"/AcadComponent/SignIn",onClick:()=>{e(!1)},children:"Sign In"})]})]})})})},eC=Y.lazy(()=>Na(()=>import("./Home-Md9ngyRk.js"),__vite__mapDeps([0,1]))),tC=Y.lazy(()=>Na(()=>import("./Tasks-D60NyUag.js"),__vite__mapDeps([2,3]))),nC=Y.lazy(()=>Na(()=>import("./Folders-BsxaAS-Q.js"),__vite__mapDeps([4,5]))),iC=Y.lazy(()=>Na(()=>import("./Contacts-bDplbI7s.js"),[])),IU=Y.lazy(()=>Na(()=>import("./Dashboard-IIJU55C0.js"),[])),NU=Y.lazy(()=>Na(()=>import("./SignIn-BoR45Arc.js"),__vite__mapDeps([6,7]))),OU=Y.lazy(()=>Na(()=>import("./SignUp-C24LRbzW.js"),__vite__mapDeps([8,9]))),Zm=[{path:"/AcadComponent/",element:se.jsx(eC,{})},{path:"/AcadComponent/Tasks",element:se.jsx(tC,{})},{path:"/AcadComponent/Folders",element:se.jsx(nC,{})},{path:"/AcadComponent/Contacts",element:se.jsx(iC,{})},{path:"/AcadComponent/Dashboard",element:se.jsx(IU,{})},{path:"/AcadComponent/SignIn",element:se.jsx(NU,{})},{path:"/AcadComponent/SignUp",element:se.jsx(OU,{})},{path:"*",element:se.jsx(DN,{})}],Tc=Y.createContext();function DU(){const n=jg(),[e,t]=Y.useState(!1),[s,a]=Y.useState(!1),[l,c]=Y.useState(!1),[d,p]=Y.useState(!1),[g,y]=Y.useState(!1),[T,S]=Y.useState(!1),[O,I]=Y.useState(!1),[H,B]=Y.useState(!1),[Q,X]=Y.useState(!1),[te,ue]=Y.useState(""),[ce,Ee]=Y.useState(),[M,R]=Y.useState({}),[b,k]=Y.useState(JSON.parse(localStorage.getItem("Changes"))?JSON.parse(localStorage.getItem("Changes")):null),[x,V]=Y.useState([{name:"Home",ind:!1,icon:se.jsx("span",{className:"material-icons",children:"home"}),page:se.jsx(eC,{}),path:"/AcadComponent/"},{name:"Tasks",ind:!1,icon:se.jsx("span",{className:"fa fa-book"}),page:se.jsx(tC,{}),path:"/AcadComponent/Tasks"},{name:"Folders",ind:!1,icon:se.jsx("span",{className:"material-icons",children:"folder"}),page:se.jsx(nC,{}),path:"/AcadComponent/Folders"},{name:"Contacts",ind:!1,icon:se.jsx("span",{className:"material-icons",children:"phone"}),page:se.jsx(iC,{}),path:"/AcadComponent/Contacts"}]);ce!=null&&ce.uid||g2(Jb,G=>{(G==null?void 0:G.uid)!=null&&(Ee(G),N(G.uid))});const N=async G=>{const ae=_4(dU,"Users",G);try{const xe=(await M4(ae)).data();R(xe)}catch(de){console.log(de.code)}},Nt={navigation:n,showSignUp:e,setShowSignUp:t,showLogin:s,setShowLogin:a,showMakeUserSignIn:l,setShowMakeUserSignIn:c,hideSideBar:d,setHideSideBar:p,hideSaveChanges:g,setHideSaveChanges:y,loading:T,setLoading:S,isSigningOut:O,setIsSigningOut:I,continueAs:H,setContinueAs:B,saveChanges:Q,setSaveChanges:X,prevPage:te,setPrevPage:ue,user:ce,setUser:Ee,userData:M,setUserData:R,pages:x,setPages:V,changes:b,setChanges:k,pagination:G=>{ct(G)}};function ct(G){console.log(G),V((ae,de)=>ae.map((xe,D)=>G==D?{...xe,ind:!0}:{...xe,ind:!1}))}return se.jsx(se.Fragment,{children:se.jsx(Tc.Provider,{value:Nt,children:se.jsxs(_N,{children:[se.jsx(CN,{}),se.jsx(YI,{children:Zm==null?void 0:Zm.map(G=>se.jsx(uA,{path:G.path,element:G.element},G.path))}),se.jsx(EU,{}),se.jsx(CU,{}),se.jsx(ON,{})]})})})}V1.createRoot(document.getElementById("root")).render(se.jsx(Y.StrictMode,{children:se.jsx(DU,{})}));export{tg as B,lr as G,ms as L,dU as a,BU as b,Tc as c,_4 as d,jg as e,Jb as f,M4 as g,PU as h,kU as i,se as j,VU as k,Y as r,MU as s,UU as u};
