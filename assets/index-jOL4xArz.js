const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-PGlVgkVC.js","assets/Home-bHuyDgxl.css","assets/Tasks-BeplW4JM.js","assets/Tasks-CLwjvKey.css","assets/Folders-CWtVAjB0.js","assets/Folders-CYRofmE6.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var hm={exports:{}},pu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JE;function zC(){if(JE)return pu;JE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:i,type:s,key:c,ref:a!==void 0?a:null,props:l}}return pu.Fragment=e,pu.jsx=t,pu.jsxs=t,pu}var eT;function jC(){return eT||(eT=1,hm.exports=zC()),hm.exports}var K=jC(),fm={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tT;function HC(){if(tT)return Ce;tT=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function S(x){return x===null||typeof x!="object"?null:(x=T&&x[T]||x["@@iterator"],typeof x=="function"?x:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,q={};function H(x,te,oe){this.props=x,this.context=te,this.refs=q,this.updater=oe||O}H.prototype.isReactComponent={},H.prototype.setState=function(x,te){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,te,"setState")},H.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function $(){}$.prototype=H.prototype;function Z(x,te,oe){this.props=x,this.context=te,this.refs=q,this.updater=oe||O}var ie=Z.prototype=new $;ie.constructor=Z,N(ie,H.prototype),ie.isPureReactComponent=!0;var le=Array.isArray,se={H:null,A:null,T:null,S:null,V:null},fe=Object.prototype.hasOwnProperty;function D(x,te,oe,ne,he,we){return oe=we.ref,{$$typeof:i,type:x,key:te,ref:oe!==void 0?oe:null,props:we}}function R(x,te){return D(x.type,te,void 0,void 0,void 0,x.props)}function b(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function M(x){var te={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(oe){return te[oe]})}var P=/\/+/g;function V(x,te){return typeof x=="object"&&x!==null&&x.key!=null?M(""+x.key):te.toString(36)}function I(){}function Rt(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(I,I):(x.status="pending",x.then(function(te){x.status==="pending"&&(x.status="fulfilled",x.value=te)},function(te){x.status==="pending"&&(x.status="rejected",x.reason=te)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function st(x,te,oe,ne,he){var we=typeof x;(we==="undefined"||we==="boolean")&&(x=null);var ge=!1;if(x===null)ge=!0;else switch(we){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(x.$$typeof){case i:case e:ge=!0;break;case y:return ge=x._init,st(ge(x._payload),te,oe,ne,he)}}if(ge)return he=he(x),ge=ne===""?"."+V(x,0):ne,le(he)?(oe="",ge!=null&&(oe=ge.replace(P,"$&/")+"/"),st(he,te,oe,"",function(ci){return ci})):he!=null&&(b(he)&&(he=R(he,oe+(he.key==null||x&&x.key===he.key?"":(""+he.key).replace(P,"$&/")+"/")+ge)),te.push(he)),1;ge=0;var rt=ne===""?".":ne+":";if(le(x))for(var Xe=0;Xe<x.length;Xe++)ne=x[Xe],we=rt+V(ne,Xe),ge+=st(ne,te,oe,we,he);else if(Xe=S(x),typeof Xe=="function")for(x=Xe.call(x),Xe=0;!(ne=x.next()).done;)ne=ne.value,we=rt+V(ne,Xe++),ge+=st(ne,te,oe,we,he);else if(we==="object"){if(typeof x.then=="function")return st(Rt(x),te,oe,ne,he);throw te=String(x),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return ge}function Q(x,te,oe){if(x==null)return x;var ne=[],he=0;return st(x,ne,"","",function(we){return te.call(oe,we,he++)}),ne}function ae(x){if(x._status===-1){var te=x._result;te=te(),te.then(function(oe){(x._status===0||x._status===-1)&&(x._status=1,x._result=oe)},function(oe){(x._status===0||x._status===-1)&&(x._status=2,x._result=oe)}),x._status===-1&&(x._status=0,x._result=te)}if(x._status===1)return x._result.default;throw x._result}var me=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function He(){}return Ce.Children={map:Q,forEach:function(x,te,oe){Q(x,function(){te.apply(this,arguments)},oe)},count:function(x){var te=0;return Q(x,function(){te++}),te},toArray:function(x){return Q(x,function(te){return te})||[]},only:function(x){if(!b(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Ce.Component=H,Ce.Fragment=t,Ce.Profiler=a,Ce.PureComponent=Z,Ce.StrictMode=s,Ce.Suspense=m,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=se,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(x){return se.H.useMemoCache(x)}},Ce.cache=function(x){return function(){return x.apply(null,arguments)}},Ce.cloneElement=function(x,te,oe){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var ne=N({},x.props),he=x.key,we=void 0;if(te!=null)for(ge in te.ref!==void 0&&(we=void 0),te.key!==void 0&&(he=""+te.key),te)!fe.call(te,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&te.ref===void 0||(ne[ge]=te[ge]);var ge=arguments.length-2;if(ge===1)ne.children=oe;else if(1<ge){for(var rt=Array(ge),Xe=0;Xe<ge;Xe++)rt[Xe]=arguments[Xe+2];ne.children=rt}return D(x.type,he,void 0,void 0,we,ne)},Ce.createContext=function(x){return x={$$typeof:c,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:l,_context:x},x},Ce.createElement=function(x,te,oe){var ne,he={},we=null;if(te!=null)for(ne in te.key!==void 0&&(we=""+te.key),te)fe.call(te,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(he[ne]=te[ne]);var ge=arguments.length-2;if(ge===1)he.children=oe;else if(1<ge){for(var rt=Array(ge),Xe=0;Xe<ge;Xe++)rt[Xe]=arguments[Xe+2];he.children=rt}if(x&&x.defaultProps)for(ne in ge=x.defaultProps,ge)he[ne]===void 0&&(he[ne]=ge[ne]);return D(x,we,void 0,void 0,null,he)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(x){return{$$typeof:d,render:x}},Ce.isValidElement=b,Ce.lazy=function(x){return{$$typeof:y,_payload:{_status:-1,_result:x},_init:ae}},Ce.memo=function(x,te){return{$$typeof:g,type:x,compare:te===void 0?null:te}},Ce.startTransition=function(x){var te=se.T,oe={};se.T=oe;try{var ne=x(),he=se.S;he!==null&&he(oe,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(He,me)}catch(we){me(we)}finally{se.T=te}},Ce.unstable_useCacheRefresh=function(){return se.H.useCacheRefresh()},Ce.use=function(x){return se.H.use(x)},Ce.useActionState=function(x,te,oe){return se.H.useActionState(x,te,oe)},Ce.useCallback=function(x,te){return se.H.useCallback(x,te)},Ce.useContext=function(x){return se.H.useContext(x)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(x,te){return se.H.useDeferredValue(x,te)},Ce.useEffect=function(x,te,oe){var ne=se.H;if(typeof oe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ne.useEffect(x,te)},Ce.useId=function(){return se.H.useId()},Ce.useImperativeHandle=function(x,te,oe){return se.H.useImperativeHandle(x,te,oe)},Ce.useInsertionEffect=function(x,te){return se.H.useInsertionEffect(x,te)},Ce.useLayoutEffect=function(x,te){return se.H.useLayoutEffect(x,te)},Ce.useMemo=function(x,te){return se.H.useMemo(x,te)},Ce.useOptimistic=function(x,te){return se.H.useOptimistic(x,te)},Ce.useReducer=function(x,te,oe){return se.H.useReducer(x,te,oe)},Ce.useRef=function(x){return se.H.useRef(x)},Ce.useState=function(x){return se.H.useState(x)},Ce.useSyncExternalStore=function(x,te,oe){return se.H.useSyncExternalStore(x,te,oe)},Ce.useTransition=function(){return se.H.useTransition()},Ce.version="19.1.0",Ce}var nT;function Ig(){return nT||(nT=1,fm.exports=HC()),fm.exports}var j=Ig(),dm={exports:{}},mu={},pm={exports:{}},mm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iT;function FC(){return iT||(iT=1,function(i){function e(Q,ae){var me=Q.length;Q.push(ae);e:for(;0<me;){var He=me-1>>>1,x=Q[He];if(0<a(x,ae))Q[He]=ae,Q[me]=x,me=He;else break e}}function t(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var ae=Q[0],me=Q.pop();if(me!==ae){Q[0]=me;e:for(var He=0,x=Q.length,te=x>>>1;He<te;){var oe=2*(He+1)-1,ne=Q[oe],he=oe+1,we=Q[he];if(0>a(ne,me))he<x&&0>a(we,ne)?(Q[He]=we,Q[he]=me,He=he):(Q[He]=ne,Q[oe]=me,He=oe);else if(he<x&&0>a(we,me))Q[He]=we,Q[he]=me,He=he;else break e}}return ae}function a(Q,ae){var me=Q.sortIndex-ae.sortIndex;return me!==0?me:Q.id-ae.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var m=[],g=[],y=1,T=null,S=3,O=!1,N=!1,q=!1,H=!1,$=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;function le(Q){for(var ae=t(g);ae!==null;){if(ae.callback===null)s(g);else if(ae.startTime<=Q)s(g),ae.sortIndex=ae.expirationTime,e(m,ae);else break;ae=t(g)}}function se(Q){if(q=!1,le(Q),!N)if(t(m)!==null)N=!0,fe||(fe=!0,V());else{var ae=t(g);ae!==null&&st(se,ae.startTime-Q)}}var fe=!1,D=-1,R=5,b=-1;function M(){return H?!0:!(i.unstable_now()-b<R)}function P(){if(H=!1,fe){var Q=i.unstable_now();b=Q;var ae=!0;try{e:{N=!1,q&&(q=!1,Z(D),D=-1),O=!0;var me=S;try{t:{for(le(Q),T=t(m);T!==null&&!(T.expirationTime>Q&&M());){var He=T.callback;if(typeof He=="function"){T.callback=null,S=T.priorityLevel;var x=He(T.expirationTime<=Q);if(Q=i.unstable_now(),typeof x=="function"){T.callback=x,le(Q),ae=!0;break t}T===t(m)&&s(m),le(Q)}else s(m);T=t(m)}if(T!==null)ae=!0;else{var te=t(g);te!==null&&st(se,te.startTime-Q),ae=!1}}break e}finally{T=null,S=me,O=!1}ae=void 0}}finally{ae?V():fe=!1}}}var V;if(typeof ie=="function")V=function(){ie(P)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Rt=I.port2;I.port1.onmessage=P,V=function(){Rt.postMessage(null)}}else V=function(){$(P,0)};function st(Q,ae){D=$(function(){Q(i.unstable_now())},ae)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Q){Q.callback=null},i.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Q?Math.floor(1e3/Q):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_next=function(Q){switch(S){case 1:case 2:case 3:var ae=3;break;default:ae=S}var me=S;S=ae;try{return Q()}finally{S=me}},i.unstable_requestPaint=function(){H=!0},i.unstable_runWithPriority=function(Q,ae){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var me=S;S=Q;try{return ae()}finally{S=me}},i.unstable_scheduleCallback=function(Q,ae,me){var He=i.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?He+me:He):me=He,Q){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=me+x,Q={id:y++,callback:ae,priorityLevel:Q,startTime:me,expirationTime:x,sortIndex:-1},me>He?(Q.sortIndex=me,e(g,Q),t(m)===null&&Q===t(g)&&(q?(Z(D),D=-1):q=!0,st(se,me-He))):(Q.sortIndex=x,e(m,Q),N||O||(N=!0,fe||(fe=!0,V()))),Q},i.unstable_shouldYield=M,i.unstable_wrapCallback=function(Q){var ae=S;return function(){var me=S;S=ae;try{return Q.apply(this,arguments)}finally{S=me}}}}(mm)),mm}var sT;function qC(){return sT||(sT=1,pm.exports=FC()),pm.exports}var gm={exports:{}},sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rT;function GC(){if(rT)return sn;rT=1;var i=Ig();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:m,containerInfo:g,implementation:y}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,sn.createPortal=function(m,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(m,g,null,y)},sn.flushSync=function(m){var g=c.T,y=s.p;try{if(c.T=null,s.p=2,m)return m()}finally{c.T=g,s.p=y,s.d.f()}},sn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},sn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},sn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,O=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:S,fetchPriority:O}):y==="script"&&s.d.X(m,{crossOrigin:T,integrity:S,fetchPriority:O,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},sn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},sn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin);s.d.L(m,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},sn.preloadModule=function(m,g){if(typeof m=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},sn.requestFormReset=function(m){s.d.r(m)},sn.unstable_batchedUpdates=function(m,g){return m(g)},sn.useFormState=function(m,g,y){return c.H.useFormState(m,g,y)},sn.useFormStatus=function(){return c.H.useHostTransitionStatus()},sn.version="19.1.0",sn}var aT;function KC(){if(aT)return gm.exports;aT=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),gm.exports=GC(),gm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oT;function YC(){if(oT)return mu;oT=1;var i=qC(),e=Ig(),t=KC();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function c(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(s(188))}function m(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(s(188));return r!==n?null:n}for(var o=n,u=r;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return d(f),n;if(p===u)return d(f),r;p=p.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=p;else{for(var E=!1,A=f.child;A;){if(A===o){E=!0,o=f,u=p;break}if(A===u){E=!0,u=f,o=p;break}A=A.sibling}if(!E){for(A=p.child;A;){if(A===o){E=!0,o=p,u=f;break}if(A===u){E=!0,u=p,o=f;break}A=A.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?n:r}function g(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=g(n),r!==null)return r;n=n.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),Z=Symbol.for("react.consumer"),ie=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=P&&n[P]||n["@@iterator"],typeof n=="function"?n:null)}var I=Symbol.for("react.client.reference");function Rt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===I?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case H:return"Profiler";case q:return"StrictMode";case se:return"Suspense";case fe:return"SuspenseList";case b:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case O:return"Portal";case ie:return(n.displayName||"Context")+".Provider";case Z:return(n._context.displayName||"Context")+".Consumer";case le:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case D:return r=n.displayName||null,r!==null?r:Rt(n.type)||"Memo";case R:r=n._payload,n=n._init;try{return Rt(n(r))}catch{}}return null}var st=Array.isArray,Q=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},He=[],x=-1;function te(n){return{current:n}}function oe(n){0>x||(n.current=He[x],He[x]=null,x--)}function ne(n,r){x++,He[x]=n.current,n.current=r}var he=te(null),we=te(null),ge=te(null),rt=te(null);function Xe(n,r){switch(ne(ge,r),ne(we,n),ne(he,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?CE(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=CE(r),n=IE(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}oe(he),ne(he,n)}function ci(){oe(he),oe(we),oe(ge)}function Cs(n){n.memoizedState!==null&&ne(rt,n);var r=he.current,o=IE(r,n.type);r!==o&&(ne(we,n),ne(he,o))}function ji(n){we.current===n&&(oe(he),oe(we)),rt.current===n&&(oe(rt),uu._currentValue=me)}var wr=Object.prototype.hasOwnProperty,Rr=i.unstable_scheduleCallback,br=i.unstable_cancelCallback,al=i.unstable_shouldYield,_c=i.unstable_requestPaint,Pn=i.unstable_now,hd=i.unstable_getCurrentPriorityLevel,ol=i.unstable_ImmediatePriority,Ia=i.unstable_UserBlockingPriority,Cr=i.unstable_NormalPriority,fd=i.unstable_LowPriority,Na=i.unstable_IdlePriority,ll=i.log,yc=i.unstable_setDisableYieldValue,gt=null,Qe=null;function wn(n){if(typeof ll=="function"&&yc(n),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(gt,n)}catch{}}var tn=Math.clz32?Math.clz32:Ir,vc=Math.log,dd=Math.LN2;function Ir(n){return n>>>=0,n===0?32:31-(vc(n)/dd|0)|0}var Nr=256,Or=4194304;function Zn(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Oa(n,r,o){var u=n.pendingLanes;if(u===0)return 0;var f=0,p=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var A=u&134217727;return A!==0?(u=A&~p,u!==0?f=Zn(u):(E&=A,E!==0?f=Zn(E):o||(o=A&~n,o!==0&&(f=Zn(o))))):(A=u&~p,A!==0?f=Zn(A):E!==0?f=Zn(E):o||(o=u&~n,o!==0&&(f=Zn(o)))),f===0?0:r!==0&&r!==f&&(r&p)===0&&(p=f&-f,o=r&-r,p>=o||p===32&&(o&4194048)!==0)?r:f}function Dr(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function ul(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cl(){var n=Nr;return Nr<<=1,(Nr&4194048)===0&&(Nr=256),n}function hl(){var n=Or;return Or<<=1,(Or&62914560)===0&&(Or=4194304),n}function Hi(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Fi(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function fl(n,r,o,u,f,p){var E=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var A=n.entanglements,C=n.expirationTimes,z=n.hiddenUpdates;for(o=E&~o;0<o;){var W=31-tn(o),J=1<<W;A[W]=0,C[W]=-1;var F=z[W];if(F!==null)for(z[W]=null,W=0;W<F.length;W++){var G=F[W];G!==null&&(G.lane&=-536870913)}o&=~J}u!==0&&hi(n,u,0),p!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=p&~(E&~r))}function hi(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-tn(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function dl(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-tn(o),f=1<<u;f&r|n[u]&r&&(n[u]|=r),o&=~f}}function Is(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Da(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Ns(){var n=ae.p;return n!==0?n:(n=window.event,n===void 0?32:YE(n.type))}function Ec(n,r){var o=ae.p;try{return ae.p=n,r()}finally{ae.p=o}}var ht=Math.random().toString(36).slice(2),Dt="__reactFiber$"+ht,bt="__reactProps$"+ht,Ln="__reactContainer$"+ht,pl="__reactEvents$"+ht,pd="__reactListeners$"+ht,Os="__reactHandles$"+ht,Tc="__reactResources$"+ht,xr="__reactMarker$"+ht;function Ds(n){delete n[Dt],delete n[bt],delete n[pl],delete n[pd],delete n[Os]}function qi(n){var r=n[Dt];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Ln]||o[Dt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=xE(n);n!==null;){if(o=n[Dt])return o;n=xE(n)}return r}n=o,o=n.parentNode}return null}function fi(n){if(n=n[Dt]||n[Ln]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function di(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function dn(n){var r=n[Tc];return r||(r=n[Tc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Et(n){n[xr]=!0}var ml=new Set,xa={};function Jn(n,r){Gi(n,r),Gi(n+"Capture",r)}function Gi(n,r){for(xa[n]=r,n=0;n<r.length;n++)ml.add(r[n])}var Sc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ac={},Mr={};function wc(n){return wr.call(Mr,n)?!0:wr.call(Ac,n)?!1:Sc.test(n)?Mr[n]=!0:(Ac[n]=!0,!1)}function xs(n,r,o){if(wc(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function pi(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function Kt(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}var kr,Rc;function Ki(n){if(kr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);kr=r&&r[1]||"",Rc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kr+n+Rc}var Ma=!1;function ka(n,r){if(!n||Ma)return"";Ma=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(G){var F=G}Reflect.construct(n,[],J)}else{try{J.call()}catch(G){F=G}n.call(J.prototype)}}else{try{throw Error()}catch(G){F=G}(J=n())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(G){if(G&&F&&typeof G.stack=="string")return[G.stack,F.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),E=p[0],A=p[1];if(E&&A){var C=E.split(`
`),z=A.split(`
`);for(f=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;f<z.length&&!z[f].includes("DetermineComponentFrameRoot");)f++;if(u===C.length||f===z.length)for(u=C.length-1,f=z.length-1;1<=u&&0<=f&&C[u]!==z[f];)f--;for(;1<=u&&0<=f;u--,f--)if(C[u]!==z[f]){if(u!==1||f!==1)do if(u--,f--,0>f||C[u]!==z[f]){var W=`
`+C[u].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=u&&0<=f);break}}}finally{Ma=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Ki(o):""}function gl(n){switch(n.tag){case 26:case 27:case 5:return Ki(n.type);case 16:return Ki("Lazy");case 13:return Ki("Suspense");case 19:return Ki("SuspenseList");case 0:case 15:return ka(n.type,!1);case 11:return ka(n.type.render,!1);case 1:return ka(n.type,!0);case 31:return Ki("Activity");default:return""}}function Pa(n){try{var r="";do r+=gl(n),n=n.return;while(n);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function pn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function _l(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function md(n){var r=_l(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,p.call(this,E)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function La(n){n._valueTracker||(n._valueTracker=md(n))}function yl(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=_l(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Pr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var gd=/[\n"\\]/g;function Ct(n){return n.replace(gd,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Rn(n,r,o,u,f,p,E,A){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),r!=null?E==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+pn(r)):n.value!==""+pn(r)&&(n.value=""+pn(r)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),r!=null?Ms(n,E,pn(r)):o!=null?Ms(n,E,pn(o)):u!=null&&n.removeAttribute("value"),f==null&&p!=null&&(n.defaultChecked=!!p),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?n.name=""+pn(A):n.removeAttribute("name")}function Lr(n,r,o,u,f,p,E,A){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(n.type=p),r!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||r!=null))return;o=o!=null?""+pn(o):"",r=r!=null?""+pn(r):o,A||r===n.value||(n.value=r),n.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=A?n.checked:!!u,n.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function Ms(n,r,o){r==="number"&&Pr(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Yi(n,r,o,u){if(n=n.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=r.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+pn(o),r=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function Ze(n,r,o){if(r!=null&&(r=""+pn(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+pn(o):""}function Vr(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(st(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=pn(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function Vn(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Ur=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bc(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||Ur.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function vl(n,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&bc(n,f,u)}else for(var p in r)r.hasOwnProperty(p)&&bc(n,p,r[p])}function El(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _d=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Va(n){return yd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Qi=null;function Un(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var $i=null,Wi=null;function Tl(n){var r=fi(n);if(r&&(n=r.stateNode)){var o=n[bt]||null;e:switch(n=r.stateNode,r.type){case"input":if(Rn(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ct(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var f=u[bt]||null;if(!f)throw Error(s(90));Rn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&yl(u)}break e;case"textarea":Ze(n,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Yi(n,!!o.multiple,r,!1)}}}var mi=!1;function Cc(n,r,o){if(mi)return n(r,o);mi=!0;try{var u=n(r);return u}finally{if(mi=!1,($i!==null||Wi!==null)&&(Eh(),$i&&(r=$i,n=Wi,Wi=$i=null,Tl(r),n)))for(r=0;r<n.length;r++)Tl(n[r])}}function Br(n,r){var o=n.stateNode;if(o===null)return null;var u=o[bt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bn=!1;if(ei)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){Bn=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{Bn=!1}var gi=null,ks=null,Xi=null;function Sl(){if(Xi)return Xi;var n,r=ks,o=r.length,u,f="value"in gi?gi.value:gi.textContent,p=f.length;for(n=0;n<o&&r[n]===f[n];n++);var E=o-n;for(u=1;u<=E&&r[o-u]===f[p-u];u++);return Xi=f.slice(n,1<u?1-u:void 0)}function _i(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function yi(){return!0}function Al(){return!1}function Ut(n){function r(o,u,f,p,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(o=n[A],this[A]=o?o(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?yi:Al,this.isPropagationStopped=Al,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),r}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ua=Ut(Ke),jr=y({},Ke,{view:0,detail:0}),Ic=Ut(jr),Ba,za,vi,Hr=y({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vi&&(vi&&n.type==="mousemove"?(Ba=n.screenX-vi.screenX,za=n.screenY-vi.screenY):za=Ba=0,vi=n),Ba)},movementY:function(n){return"movementY"in n?n.movementY:za}}),zn=Ut(Hr),Nc=y({},Hr,{dataTransfer:0}),vd=Ut(Nc),Fr=y({},jr,{relatedTarget:0}),ja=Ut(Fr),wl=y({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),Ha=Ut(wl),Oc=y({},Ke,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Fa=Ut(Oc),Ed=y({},Ke,{data:0}),Rl=Ut(Ed),qr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=xc[n])?!!r[n]:!1}function Gr(){return bl}var Mc=y({},jr,{key:function(n){if(n.key){var r=qr[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=_i(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Dc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gr,charCode:function(n){return n.type==="keypress"?_i(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_i(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),qa=Ut(Mc),kc=y({},Hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cl=Ut(kc),Zi=y({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gr}),Pc=Ut(Zi),Lc=y({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vc=Ut(Lc),Uc=y({},Hr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ga=Ut(Uc),mn=y({},Ke,{newState:0,oldState:0}),Bc=Ut(mn),zc=[9,13,27,32],Ei=ei&&"CompositionEvent"in window,h=null;ei&&"documentMode"in document&&(h=document.documentMode);var _=ei&&"TextEvent"in window&&!h,v=ei&&(!Ei||h&&8<h&&11>=h),w=" ",U=!1;function Y(n,r){switch(n){case"keyup":return zc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function re(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Pe=!1;function xt(n,r){switch(n){case"compositionend":return re(r);case"keypress":return r.which!==32?null:(U=!0,w);case"textInput":return n=r.data,n===w&&U?null:n;default:return null}}function Le(n,r){if(Pe)return n==="compositionend"||!Ei&&Y(n,r)?(n=Sl(),Xi=ks=gi=null,Pe=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var Bt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mt(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Bt[n.type]:r==="textarea"}function Ji(n,r,o,u){$i?Wi?Wi.push(u):Wi=[u]:$i=u,r=bh(r,"onChange"),0<r.length&&(o=new Ua("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Yt=null,Ti=null;function Il(n){SE(n,0)}function jc(n){var r=di(n);if(yl(r))return n}function F_(n,r){if(n==="change")return r}var q_=!1;if(ei){var Td;if(ei){var Sd="oninput"in document;if(!Sd){var G_=document.createElement("div");G_.setAttribute("oninput","return;"),Sd=typeof G_.oninput=="function"}Td=Sd}else Td=!1;q_=Td&&(!document.documentMode||9<document.documentMode)}function K_(){Yt&&(Yt.detachEvent("onpropertychange",Y_),Ti=Yt=null)}function Y_(n){if(n.propertyName==="value"&&jc(Ti)){var r=[];Ji(r,Ti,n,Un(n)),Cc(Il,r)}}function gb(n,r,o){n==="focusin"?(K_(),Yt=r,Ti=o,Yt.attachEvent("onpropertychange",Y_)):n==="focusout"&&K_()}function _b(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return jc(Ti)}function yb(n,r){if(n==="click")return jc(r)}function vb(n,r){if(n==="input"||n==="change")return jc(r)}function Eb(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var bn=typeof Object.is=="function"?Object.is:Eb;function Nl(n,r){if(bn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!wr.call(r,f)||!bn(n[f],r[f]))return!1}return!0}function Q_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function $_(n,r){var o=Q_(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Q_(o)}}function W_(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?W_(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function X_(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Pr(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Pr(n.document)}return r}function Ad(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var Tb=ei&&"documentMode"in document&&11>=document.documentMode,Ka=null,wd=null,Ol=null,Rd=!1;function Z_(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Rd||Ka==null||Ka!==Pr(u)||(u=Ka,"selectionStart"in u&&Ad(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ol&&Nl(Ol,u)||(Ol=u,u=bh(wd,"onSelect"),0<u.length&&(r=new Ua("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=Ka)))}function Kr(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Ya={animationend:Kr("Animation","AnimationEnd"),animationiteration:Kr("Animation","AnimationIteration"),animationstart:Kr("Animation","AnimationStart"),transitionrun:Kr("Transition","TransitionRun"),transitionstart:Kr("Transition","TransitionStart"),transitioncancel:Kr("Transition","TransitionCancel"),transitionend:Kr("Transition","TransitionEnd")},bd={},J_={};ei&&(J_=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function Yr(n){if(bd[n])return bd[n];if(!Ya[n])return n;var r=Ya[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in J_)return bd[n]=r[o];return n}var ey=Yr("animationend"),ty=Yr("animationiteration"),ny=Yr("animationstart"),Sb=Yr("transitionrun"),Ab=Yr("transitionstart"),wb=Yr("transitioncancel"),iy=Yr("transitionend"),sy=new Map,Cd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cd.push("scrollEnd");function ti(n,r){sy.set(n,r),Jn(r,[n])}var ry=new WeakMap;function jn(n,r){if(typeof n=="object"&&n!==null){var o=ry.get(n);return o!==void 0?o:(r={value:n,source:r,stack:Pa(r)},ry.set(n,r),r)}return{value:n,source:r,stack:Pa(r)}}var Hn=[],Qa=0,Id=0;function Hc(){for(var n=Qa,r=Id=Qa=0;r<n;){var o=Hn[r];Hn[r++]=null;var u=Hn[r];Hn[r++]=null;var f=Hn[r];Hn[r++]=null;var p=Hn[r];if(Hn[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}p!==0&&ay(o,f,p)}}function Fc(n,r,o,u){Hn[Qa++]=n,Hn[Qa++]=r,Hn[Qa++]=o,Hn[Qa++]=u,Id|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Nd(n,r,o,u){return Fc(n,r,o,u),qc(n)}function $a(n,r){return Fc(n,null,null,r),qc(n)}function ay(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,p=n.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(n=p.stateNode,n===null||n._visibility&1||(f=!0)),n=p,p=p.return;return n.tag===3?(p=n.stateNode,f&&r!==null&&(f=31-tn(o),n=p.hiddenUpdates,u=n[f],u===null?n[f]=[r]:u.push(r),r.lane=o|536870912),p):null}function qc(n){if(50<tu)throw tu=0,Pp=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var Wa={};function Rb(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(n,r,o,u){return new Rb(n,r,o,u)}function Od(n){return n=n.prototype,!(!n||!n.isReactComponent)}function es(n,r){var o=n.alternate;return o===null?(o=Cn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function oy(n,r){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Gc(n,r,o,u,f,p){var E=0;if(u=n,typeof n=="function")Od(n)&&(E=1);else if(typeof n=="string")E=CC(n,o,he.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case b:return n=Cn(31,o,r,f),n.elementType=b,n.lanes=p,n;case N:return Qr(o.children,f,p,r);case q:E=8,f|=24;break;case H:return n=Cn(12,o,r,f|2),n.elementType=H,n.lanes=p,n;case se:return n=Cn(13,o,r,f),n.elementType=se,n.lanes=p,n;case fe:return n=Cn(19,o,r,f),n.elementType=fe,n.lanes=p,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case $:case ie:E=10;break e;case Z:E=9;break e;case le:E=11;break e;case D:E=14;break e;case R:E=16,u=null;break e}E=29,o=Error(s(130,n===null?"null":typeof n,"")),u=null}return r=Cn(E,o,r,f),r.elementType=n,r.type=u,r.lanes=p,r}function Qr(n,r,o,u){return n=Cn(7,n,u,r),n.lanes=o,n}function Dd(n,r,o){return n=Cn(6,n,null,r),n.lanes=o,n}function xd(n,r,o){return r=Cn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Xa=[],Za=0,Kc=null,Yc=0,Fn=[],qn=0,$r=null,ts=1,ns="";function Wr(n,r){Xa[Za++]=Yc,Xa[Za++]=Kc,Kc=n,Yc=r}function ly(n,r,o){Fn[qn++]=ts,Fn[qn++]=ns,Fn[qn++]=$r,$r=n;var u=ts;n=ns;var f=32-tn(u)-1;u&=~(1<<f),o+=1;var p=32-tn(r)+f;if(30<p){var E=f-f%5;p=(u&(1<<E)-1).toString(32),u>>=E,f-=E,ts=1<<32-tn(r)+f|o<<f|u,ns=p+n}else ts=1<<p|o<<f|u,ns=n}function Md(n){n.return!==null&&(Wr(n,1),ly(n,1,0))}function kd(n){for(;n===Kc;)Kc=Xa[--Za],Xa[Za]=null,Yc=Xa[--Za],Xa[Za]=null;for(;n===$r;)$r=Fn[--qn],Fn[qn]=null,ns=Fn[--qn],Fn[qn]=null,ts=Fn[--qn],Fn[qn]=null}var gn=null,_t=null,Ge=!1,Xr=null,Si=!1,Pd=Error(s(519));function Zr(n){var r=Error(s(418,""));throw Ml(jn(r,n)),Pd}function uy(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[Dt]=n,r[bt]=u,o){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(o=0;o<iu.length;o++)xe(iu[o],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":xe("invalid",r),Lr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),La(r);break;case"select":xe("invalid",r);break;case"textarea":xe("invalid",r),Vr(r,u.value,u.defaultValue,u.children),La(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||bE(r.textContent,o)?(u.popover!=null&&(xe("beforetoggle",r),xe("toggle",r)),u.onScroll!=null&&xe("scroll",r),u.onScrollEnd!=null&&xe("scrollend",r),u.onClick!=null&&(r.onclick=Ch),r=!0):r=!1,r||Zr(n)}function cy(n){for(gn=n.return;gn;)switch(gn.tag){case 5:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:gn=gn.return}}function Dl(n){if(n!==gn)return!1;if(!Ge)return cy(n),Ge=!0,!1;var r=n.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Xp(n.type,n.memoizedProps)),o=!o),o&&_t&&Zr(n),cy(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(r===0){_t=ii(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;n=n.nextSibling}_t=null}}else r===27?(r=_t,Ws(n.type)?(n=tm,tm=null,_t=n):_t=r):_t=gn?ii(n.stateNode.nextSibling):null;return!0}function xl(){_t=gn=null,Ge=!1}function hy(){var n=Xr;return n!==null&&(En===null?En=n:En.push.apply(En,n),Xr=null),n}function Ml(n){Xr===null?Xr=[n]:Xr.push(n)}var Ld=te(null),Jr=null,is=null;function Ps(n,r,o){ne(Ld,r._currentValue),r._currentValue=o}function ss(n){n._currentValue=Ld.current,oe(Ld)}function Vd(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Ud(n,r,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var p=f.dependencies;if(p!==null){var E=f.child;p=p.firstContext;e:for(;p!==null;){var A=p;p=f;for(var C=0;C<r.length;C++)if(A.context===r[C]){p.lanes|=o,A=p.alternate,A!==null&&(A.lanes|=o),Vd(p.return,o,n),u||(E=null);break e}p=A.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,p=E.alternate,p!==null&&(p.lanes|=o),Vd(E,o,n),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===n){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function kl(n,r,o,u){n=null;for(var f=r,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var A=f.type;bn(f.pendingProps.value,E.value)||(n!==null?n.push(A):n=[A])}}else if(f===rt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(uu):n=[uu])}f=f.return}n!==null&&Ud(r,n,o,u),r.flags|=262144}function Qc(n){for(n=n.firstContext;n!==null;){if(!bn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ea(n){Jr=n,is=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function nn(n){return fy(Jr,n)}function $c(n,r){return Jr===null&&ea(n),fy(n,r)}function fy(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},is===null){if(n===null)throw Error(s(308));is=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else is=is.next=r;return o}var bb=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},Cb=i.unstable_scheduleCallback,Ib=i.unstable_NormalPriority,kt={$$typeof:ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bd(){return{controller:new bb,data:new Map,refCount:0}}function Pl(n){n.refCount--,n.refCount===0&&Cb(Ib,function(){n.controller.abort()})}var Ll=null,zd=0,Ja=0,eo=null;function Nb(n,r){if(Ll===null){var o=Ll=[];zd=0,Ja=Hp(),eo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return zd++,r.then(dy,dy),r}function dy(){if(--zd===0&&Ll!==null){eo!==null&&(eo.status="fulfilled");var n=Ll;Ll=null,Ja=0,eo=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function Ob(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var py=Q.S;Q.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&Nb(n,r),py!==null&&py(n,r)};var ta=te(null);function jd(){var n=ta.current;return n!==null?n:at.pooledCache}function Wc(n,r){r===null?ne(ta,ta.current):ne(ta,r.pool)}function my(){var n=jd();return n===null?null:{parent:kt._currentValue,pool:n}}var Vl=Error(s(460)),gy=Error(s(474)),Xc=Error(s(542)),Hd={then:function(){}};function _y(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Zc(){}function yy(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then(Zc,Zc),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Ey(n),n;default:if(typeof r.status=="string")r.then(Zc,Zc);else{if(n=at,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Ey(n),n}throw Ul=r,Vl}}var Ul=null;function vy(){if(Ul===null)throw Error(s(459));var n=Ul;return Ul=null,n}function Ey(n){if(n===Vl||n===Xc)throw Error(s(483))}var Ls=!1;function Fd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qd(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Vs(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Us(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,($e&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=qc(n),ay(n,null,o),r}return Fc(n,u,r,o),qc(n)}function Bl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,dl(n,o)}}function Gd(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?f=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?f=p=r:p=p.next=r}else f=p=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var Kd=!1;function zl(){if(Kd){var n=eo;if(n!==null)throw n}}function jl(n,r,o,u){Kd=!1;var f=n.updateQueue;Ls=!1;var p=f.firstBaseUpdate,E=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var C=A,z=C.next;C.next=null,E===null?p=z:E.next=z,E=C;var W=n.alternate;W!==null&&(W=W.updateQueue,A=W.lastBaseUpdate,A!==E&&(A===null?W.firstBaseUpdate=z:A.next=z,W.lastBaseUpdate=C))}if(p!==null){var J=f.baseState;E=0,W=z=C=null,A=p;do{var F=A.lane&-536870913,G=F!==A.lane;if(G?(Ve&F)===F:(u&F)===F){F!==0&&F===Ja&&(Kd=!0),W!==null&&(W=W.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ae=n,ye=A;F=r;var tt=o;switch(ye.tag){case 1:if(Ae=ye.payload,typeof Ae=="function"){J=Ae.call(tt,J,F);break e}J=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=ye.payload,F=typeof Ae=="function"?Ae.call(tt,J,F):Ae,F==null)break e;J=y({},J,F);break e;case 2:Ls=!0}}F=A.callback,F!==null&&(n.flags|=64,G&&(n.flags|=8192),G=f.callbacks,G===null?f.callbacks=[F]:G.push(F))}else G={lane:F,tag:A.tag,payload:A.payload,callback:A.callback,next:null},W===null?(z=W=G,C=J):W=W.next=G,E|=F;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;G=A,A=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);W===null&&(C=J),f.baseState=C,f.firstBaseUpdate=z,f.lastBaseUpdate=W,p===null&&(f.shared.lanes=0),Ks|=E,n.lanes=E,n.memoizedState=J}}function Ty(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function Sy(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Ty(o[n],r)}var to=te(null),Jc=te(0);function Ay(n,r){n=hs,ne(Jc,n),ne(to,r),hs=n|r.baseLanes}function Yd(){ne(Jc,hs),ne(to,to.current)}function Qd(){hs=Jc.current,oe(to),oe(Jc)}var Bs=0,Ie=null,Je=null,It=null,eh=!1,no=!1,na=!1,th=0,Hl=0,io=null,Db=0;function Tt(){throw Error(s(321))}function $d(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!bn(n[o],r[o]))return!1;return!0}function Wd(n,r,o,u,f,p){return Bs=p,Ie=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Q.H=n===null||n.memoizedState===null?av:ov,na=!1,p=o(u,f),na=!1,no&&(p=Ry(r,o,u,f)),wy(n),p}function wy(n){Q.H=oh;var r=Je!==null&&Je.next!==null;if(Bs=0,It=Je=Ie=null,eh=!1,Hl=0,io=null,r)throw Error(s(300));n===null||zt||(n=n.dependencies,n!==null&&Qc(n)&&(zt=!0))}function Ry(n,r,o,u){Ie=n;var f=0;do{if(no&&(io=null),Hl=0,no=!1,25<=f)throw Error(s(301));if(f+=1,It=Je=null,n.updateQueue!=null){var p=n.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}Q.H=Ub,p=r(o,u)}while(no);return p}function xb(){var n=Q.H,r=n.useState()[0];return r=typeof r.then=="function"?Fl(r):r,n=n.useState()[0],(Je!==null?Je.memoizedState:null)!==n&&(Ie.flags|=1024),r}function Xd(){var n=th!==0;return th=0,n}function Zd(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function Jd(n){if(eh){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}eh=!1}Bs=0,It=Je=Ie=null,no=!1,Hl=th=0,io=null}function yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?Ie.memoizedState=It=n:It=It.next=n,It}function Nt(){if(Je===null){var n=Ie.alternate;n=n!==null?n.memoizedState:null}else n=Je.next;var r=It===null?Ie.memoizedState:It.next;if(r!==null)It=r,Je=n;else{if(n===null)throw Ie.alternate===null?Error(s(467)):Error(s(310));Je=n,n={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},It===null?Ie.memoizedState=It=n:It=It.next=n}return It}function ep(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fl(n){var r=Hl;return Hl+=1,io===null&&(io=[]),n=yy(io,n,r),r=Ie,(It===null?r.memoizedState:It.next)===null&&(r=r.alternate,Q.H=r===null||r.memoizedState===null?av:ov),n}function nh(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Fl(n);if(n.$$typeof===ie)return nn(n)}throw Error(s(438,String(n)))}function tp(n){var r=null,o=Ie.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ie.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=ep(),Ie.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=M;return r.index++,o}function rs(n,r){return typeof r=="function"?r(n):r}function ih(n){var r=Nt();return np(r,Je,n)}function np(n,r,o){var u=n.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=n.baseQueue,p=u.pending;if(p!==null){if(f!==null){var E=f.next;f.next=p.next,p.next=E}r.baseQueue=f=p,u.pending=null}if(p=n.baseState,f===null)n.memoizedState=p;else{r=f.next;var A=E=null,C=null,z=r,W=!1;do{var J=z.lane&-536870913;if(J!==z.lane?(Ve&J)===J:(Bs&J)===J){var F=z.revertLane;if(F===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),J===Ja&&(W=!0);else if((Bs&F)===F){z=z.next,F===Ja&&(W=!0);continue}else J={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(A=C=J,E=p):C=C.next=J,Ie.lanes|=F,Ks|=F;J=z.action,na&&o(p,J),p=z.hasEagerState?z.eagerState:o(p,J)}else F={lane:J,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(A=C=F,E=p):C=C.next=F,Ie.lanes|=J,Ks|=J;z=z.next}while(z!==null&&z!==r);if(C===null?E=p:C.next=A,!bn(p,n.memoizedState)&&(zt=!0,W&&(o=eo,o!==null)))throw o;n.memoizedState=p,n.baseState=E,n.baseQueue=C,u.lastRenderedState=p}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function ip(n){var r=Nt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,p=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do p=n(p,E.action),E=E.next;while(E!==f);bn(p,r.memoizedState)||(zt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function by(n,r,o){var u=Ie,f=Nt(),p=Ge;if(p){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!bn((Je||f).memoizedState,o);E&&(f.memoizedState=o,zt=!0),f=f.queue;var A=Ny.bind(null,u,f,n);if(ql(2048,8,A,[n]),f.getSnapshot!==r||E||It!==null&&It.memoizedState.tag&1){if(u.flags|=2048,so(9,sh(),Iy.bind(null,u,f,o,r),null),at===null)throw Error(s(349));p||(Bs&124)!==0||Cy(u,r,o)}return o}function Cy(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Ie.updateQueue,r===null?(r=ep(),Ie.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Iy(n,r,o,u){r.value=o,r.getSnapshot=u,Oy(r)&&Dy(n)}function Ny(n,r,o){return o(function(){Oy(r)&&Dy(n)})}function Oy(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!bn(n,o)}catch{return!0}}function Dy(n){var r=$a(n,2);r!==null&&xn(r,n,2)}function sp(n){var r=yn();if(typeof n=="function"){var o=n;if(n=o(),na){wn(!0);try{o()}finally{wn(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:n},r}function xy(n,r,o,u){return n.baseState=o,np(n,Je,typeof u=="function"?u:rs)}function Mb(n,r,o,u,f){if(ah(n))throw Error(s(485));if(n=r.action,n!==null){var p={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){p.listeners.push(E)}};Q.T!==null?o(!0):p.isTransition=!1,u(p),o=r.pending,o===null?(p.next=r.pending=p,My(r,p)):(p.next=o.next,r.pending=o.next=p)}}function My(n,r){var o=r.action,u=r.payload,f=n.state;if(r.isTransition){var p=Q.T,E={};Q.T=E;try{var A=o(f,u),C=Q.S;C!==null&&C(E,A),ky(n,r,A)}catch(z){rp(n,r,z)}finally{Q.T=p}}else try{p=o(f,u),ky(n,r,p)}catch(z){rp(n,r,z)}}function ky(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Py(n,r,u)},function(u){return rp(n,r,u)}):Py(n,r,o)}function Py(n,r,o){r.status="fulfilled",r.value=o,Ly(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,My(n,o)))}function rp(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Ly(r),r=r.next;while(r!==u)}n.action=null}function Ly(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Vy(n,r){return r}function Uy(n,r){if(Ge){var o=at.formState;if(o!==null){e:{var u=Ie;if(Ge){if(_t){t:{for(var f=_t,p=Si;f.nodeType!==8;){if(!p){f=null;break t}if(f=ii(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){_t=ii(f.nextSibling),u=f.data==="F!";break e}}Zr(u)}u=!1}u&&(r=o[0])}}return o=yn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vy,lastRenderedState:r},o.queue=u,o=iv.bind(null,Ie,u),u.dispatch=o,u=sp(!1),p=cp.bind(null,Ie,!1,u.queue),u=yn(),f={state:r,dispatch:null,action:n,pending:null},u.queue=f,o=Mb.bind(null,Ie,f,p,o),f.dispatch=o,u.memoizedState=n,[r,o,!1]}function By(n){var r=Nt();return zy(r,Je,n)}function zy(n,r,o){if(r=np(n,r,Vy)[0],n=ih(rs)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Fl(r)}catch(E){throw E===Vl?Xc:E}else u=r;r=Nt();var f=r.queue,p=f.dispatch;return o!==r.memoizedState&&(Ie.flags|=2048,so(9,sh(),kb.bind(null,f,o),null)),[u,p,n]}function kb(n,r){n.action=r}function jy(n){var r=Nt(),o=Je;if(o!==null)return zy(r,o,n);Nt(),r=r.memoizedState,o=Nt();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function so(n,r,o,u){return n={tag:n,create:o,deps:u,inst:r,next:null},r=Ie.updateQueue,r===null&&(r=ep(),Ie.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function sh(){return{destroy:void 0,resource:void 0}}function Hy(){return Nt().memoizedState}function rh(n,r,o,u){var f=yn();u=u===void 0?null:u,Ie.flags|=n,f.memoizedState=so(1|r,sh(),o,u)}function ql(n,r,o,u){var f=Nt();u=u===void 0?null:u;var p=f.memoizedState.inst;Je!==null&&u!==null&&$d(u,Je.memoizedState.deps)?f.memoizedState=so(r,p,o,u):(Ie.flags|=n,f.memoizedState=so(1|r,p,o,u))}function Fy(n,r){rh(8390656,8,n,r)}function qy(n,r){ql(2048,8,n,r)}function Gy(n,r){return ql(4,2,n,r)}function Ky(n,r){return ql(4,4,n,r)}function Yy(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Qy(n,r,o){o=o!=null?o.concat([n]):null,ql(4,4,Yy.bind(null,r,n),o)}function ap(){}function $y(n,r){var o=Nt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&$d(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Wy(n,r){var o=Nt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&$d(r,u[1]))return u[0];if(u=n(),na){wn(!0);try{n()}finally{wn(!1)}}return o.memoizedState=[u,r],u}function op(n,r,o){return o===void 0||(Bs&1073741824)!==0?n.memoizedState=r:(n.memoizedState=o,n=Jv(),Ie.lanes|=n,Ks|=n,o)}function Xy(n,r,o,u){return bn(o,r)?o:to.current!==null?(n=op(n,o,u),bn(n,r)||(zt=!0),n):(Bs&42)===0?(zt=!0,n.memoizedState=o):(n=Jv(),Ie.lanes|=n,Ks|=n,r)}function Zy(n,r,o,u,f){var p=ae.p;ae.p=p!==0&&8>p?p:8;var E=Q.T,A={};Q.T=A,cp(n,!1,r,o);try{var C=f(),z=Q.S;if(z!==null&&z(A,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var W=Ob(C,u);Gl(n,r,W,Dn(n))}else Gl(n,r,u,Dn(n))}catch(J){Gl(n,r,{then:function(){},status:"rejected",reason:J},Dn())}finally{ae.p=p,Q.T=E}}function Pb(){}function lp(n,r,o,u){if(n.tag!==5)throw Error(s(476));var f=Jy(n).queue;Zy(n,f,r,me,o===null?Pb:function(){return ev(n),o(u)})}function Jy(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:me},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function ev(n){var r=Jy(n).next.queue;Gl(n,r,{},Dn())}function up(){return nn(uu)}function tv(){return Nt().memoizedState}function nv(){return Nt().memoizedState}function Lb(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=Dn();n=Vs(o);var u=Us(r,n,o);u!==null&&(xn(u,r,o),Bl(u,r,o)),r={cache:Bd()},n.payload=r;return}r=r.return}}function Vb(n,r,o){var u=Dn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},ah(n)?sv(r,o):(o=Nd(n,r,o,u),o!==null&&(xn(o,n,u),rv(o,r,u)))}function iv(n,r,o){var u=Dn();Gl(n,r,o,u)}function Gl(n,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(ah(n))sv(r,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var E=r.lastRenderedState,A=p(E,o);if(f.hasEagerState=!0,f.eagerState=A,bn(A,E))return Fc(n,r,f,0),at===null&&Hc(),!1}catch{}finally{}if(o=Nd(n,r,f,u),o!==null)return xn(o,n,u),rv(o,r,u),!0}return!1}function cp(n,r,o,u){if(u={lane:2,revertLane:Hp(),action:u,hasEagerState:!1,eagerState:null,next:null},ah(n)){if(r)throw Error(s(479))}else r=Nd(n,o,u,2),r!==null&&xn(r,n,2)}function ah(n){var r=n.alternate;return n===Ie||r!==null&&r===Ie}function sv(n,r){no=eh=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function rv(n,r,o){if((o&4194048)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,dl(n,o)}}var oh={readContext:nn,use:nh,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useLayoutEffect:Tt,useInsertionEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useSyncExternalStore:Tt,useId:Tt,useHostTransitionStatus:Tt,useFormState:Tt,useActionState:Tt,useOptimistic:Tt,useMemoCache:Tt,useCacheRefresh:Tt},av={readContext:nn,use:nh,useCallback:function(n,r){return yn().memoizedState=[n,r===void 0?null:r],n},useContext:nn,useEffect:Fy,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,rh(4194308,4,Yy.bind(null,r,n),o)},useLayoutEffect:function(n,r){return rh(4194308,4,n,r)},useInsertionEffect:function(n,r){rh(4,2,n,r)},useMemo:function(n,r){var o=yn();r=r===void 0?null:r;var u=n();if(na){wn(!0);try{n()}finally{wn(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=yn();if(o!==void 0){var f=o(r);if(na){wn(!0);try{o(r)}finally{wn(!1)}}}else f=r;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=Vb.bind(null,Ie,n),[u.memoizedState,n]},useRef:function(n){var r=yn();return n={current:n},r.memoizedState=n},useState:function(n){n=sp(n);var r=n.queue,o=iv.bind(null,Ie,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:ap,useDeferredValue:function(n,r){var o=yn();return op(o,n,r)},useTransition:function(){var n=sp(!1);return n=Zy.bind(null,Ie,n.queue,!0,!1),yn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=Ie,f=yn();if(Ge){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),at===null)throw Error(s(349));(Ve&124)!==0||Cy(u,r,o)}f.memoizedState=o;var p={value:o,getSnapshot:r};return f.queue=p,Fy(Ny.bind(null,u,p,n),[n]),u.flags|=2048,so(9,sh(),Iy.bind(null,u,p,o,r),null),o},useId:function(){var n=yn(),r=at.identifierPrefix;if(Ge){var o=ns,u=ts;o=(u&~(1<<32-tn(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=th++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=Db++,r="«"+r+"r"+o.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:up,useFormState:Uy,useActionState:Uy,useOptimistic:function(n){var r=yn();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=cp.bind(null,Ie,!0,o),o.dispatch=r,[n,r]},useMemoCache:tp,useCacheRefresh:function(){return yn().memoizedState=Lb.bind(null,Ie)}},ov={readContext:nn,use:nh,useCallback:$y,useContext:nn,useEffect:qy,useImperativeHandle:Qy,useInsertionEffect:Gy,useLayoutEffect:Ky,useMemo:Wy,useReducer:ih,useRef:Hy,useState:function(){return ih(rs)},useDebugValue:ap,useDeferredValue:function(n,r){var o=Nt();return Xy(o,Je.memoizedState,n,r)},useTransition:function(){var n=ih(rs)[0],r=Nt().memoizedState;return[typeof n=="boolean"?n:Fl(n),r]},useSyncExternalStore:by,useId:tv,useHostTransitionStatus:up,useFormState:By,useActionState:By,useOptimistic:function(n,r){var o=Nt();return xy(o,Je,n,r)},useMemoCache:tp,useCacheRefresh:nv},Ub={readContext:nn,use:nh,useCallback:$y,useContext:nn,useEffect:qy,useImperativeHandle:Qy,useInsertionEffect:Gy,useLayoutEffect:Ky,useMemo:Wy,useReducer:ip,useRef:Hy,useState:function(){return ip(rs)},useDebugValue:ap,useDeferredValue:function(n,r){var o=Nt();return Je===null?op(o,n,r):Xy(o,Je.memoizedState,n,r)},useTransition:function(){var n=ip(rs)[0],r=Nt().memoizedState;return[typeof n=="boolean"?n:Fl(n),r]},useSyncExternalStore:by,useId:tv,useHostTransitionStatus:up,useFormState:jy,useActionState:jy,useOptimistic:function(n,r){var o=Nt();return Je!==null?xy(o,Je,n,r):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:tp,useCacheRefresh:nv},ro=null,Kl=0;function lh(n){var r=Kl;return Kl+=1,ro===null&&(ro=[]),yy(ro,n,r)}function Yl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function uh(n,r){throw r.$$typeof===T?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function lv(n){var r=n._init;return r(n._payload)}function uv(n){function r(L,k){if(n){var B=L.deletions;B===null?(L.deletions=[k],L.flags|=16):B.push(k)}}function o(L,k){if(!n)return null;for(;k!==null;)r(L,k),k=k.sibling;return null}function u(L){for(var k=new Map;L!==null;)L.key!==null?k.set(L.key,L):k.set(L.index,L),L=L.sibling;return k}function f(L,k){return L=es(L,k),L.index=0,L.sibling=null,L}function p(L,k,B){return L.index=B,n?(B=L.alternate,B!==null?(B=B.index,B<k?(L.flags|=67108866,k):B):(L.flags|=67108866,k)):(L.flags|=1048576,k)}function E(L){return n&&L.alternate===null&&(L.flags|=67108866),L}function A(L,k,B,X){return k===null||k.tag!==6?(k=Dd(B,L.mode,X),k.return=L,k):(k=f(k,B),k.return=L,k)}function C(L,k,B,X){var pe=B.type;return pe===N?W(L,k,B.props.children,X,B.key):k!==null&&(k.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===R&&lv(pe)===k.type)?(k=f(k,B.props),Yl(k,B),k.return=L,k):(k=Gc(B.type,B.key,B.props,null,L.mode,X),Yl(k,B),k.return=L,k)}function z(L,k,B,X){return k===null||k.tag!==4||k.stateNode.containerInfo!==B.containerInfo||k.stateNode.implementation!==B.implementation?(k=xd(B,L.mode,X),k.return=L,k):(k=f(k,B.children||[]),k.return=L,k)}function W(L,k,B,X,pe){return k===null||k.tag!==7?(k=Qr(B,L.mode,X,pe),k.return=L,k):(k=f(k,B),k.return=L,k)}function J(L,k,B){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Dd(""+k,L.mode,B),k.return=L,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return B=Gc(k.type,k.key,k.props,null,L.mode,B),Yl(B,k),B.return=L,B;case O:return k=xd(k,L.mode,B),k.return=L,k;case R:var X=k._init;return k=X(k._payload),J(L,k,B)}if(st(k)||V(k))return k=Qr(k,L.mode,B,null),k.return=L,k;if(typeof k.then=="function")return J(L,lh(k),B);if(k.$$typeof===ie)return J(L,$c(L,k),B);uh(L,k)}return null}function F(L,k,B,X){var pe=k!==null?k.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return pe!==null?null:A(L,k,""+B,X);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case S:return B.key===pe?C(L,k,B,X):null;case O:return B.key===pe?z(L,k,B,X):null;case R:return pe=B._init,B=pe(B._payload),F(L,k,B,X)}if(st(B)||V(B))return pe!==null?null:W(L,k,B,X,null);if(typeof B.then=="function")return F(L,k,lh(B),X);if(B.$$typeof===ie)return F(L,k,$c(L,B),X);uh(L,B)}return null}function G(L,k,B,X,pe){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return L=L.get(B)||null,A(k,L,""+X,pe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return L=L.get(X.key===null?B:X.key)||null,C(k,L,X,pe);case O:return L=L.get(X.key===null?B:X.key)||null,z(k,L,X,pe);case R:var Ne=X._init;return X=Ne(X._payload),G(L,k,B,X,pe)}if(st(X)||V(X))return L=L.get(B)||null,W(k,L,X,pe,null);if(typeof X.then=="function")return G(L,k,B,lh(X),pe);if(X.$$typeof===ie)return G(L,k,B,$c(k,X),pe);uh(k,X)}return null}function Ae(L,k,B,X){for(var pe=null,Ne=null,_e=k,ve=k=0,Ht=null;_e!==null&&ve<B.length;ve++){_e.index>ve?(Ht=_e,_e=null):Ht=_e.sibling;var qe=F(L,_e,B[ve],X);if(qe===null){_e===null&&(_e=Ht);break}n&&_e&&qe.alternate===null&&r(L,_e),k=p(qe,k,ve),Ne===null?pe=qe:Ne.sibling=qe,Ne=qe,_e=Ht}if(ve===B.length)return o(L,_e),Ge&&Wr(L,ve),pe;if(_e===null){for(;ve<B.length;ve++)_e=J(L,B[ve],X),_e!==null&&(k=p(_e,k,ve),Ne===null?pe=_e:Ne.sibling=_e,Ne=_e);return Ge&&Wr(L,ve),pe}for(_e=u(_e);ve<B.length;ve++)Ht=G(_e,L,ve,B[ve],X),Ht!==null&&(n&&Ht.alternate!==null&&_e.delete(Ht.key===null?ve:Ht.key),k=p(Ht,k,ve),Ne===null?pe=Ht:Ne.sibling=Ht,Ne=Ht);return n&&_e.forEach(function(tr){return r(L,tr)}),Ge&&Wr(L,ve),pe}function ye(L,k,B,X){if(B==null)throw Error(s(151));for(var pe=null,Ne=null,_e=k,ve=k=0,Ht=null,qe=B.next();_e!==null&&!qe.done;ve++,qe=B.next()){_e.index>ve?(Ht=_e,_e=null):Ht=_e.sibling;var tr=F(L,_e,qe.value,X);if(tr===null){_e===null&&(_e=Ht);break}n&&_e&&tr.alternate===null&&r(L,_e),k=p(tr,k,ve),Ne===null?pe=tr:Ne.sibling=tr,Ne=tr,_e=Ht}if(qe.done)return o(L,_e),Ge&&Wr(L,ve),pe;if(_e===null){for(;!qe.done;ve++,qe=B.next())qe=J(L,qe.value,X),qe!==null&&(k=p(qe,k,ve),Ne===null?pe=qe:Ne.sibling=qe,Ne=qe);return Ge&&Wr(L,ve),pe}for(_e=u(_e);!qe.done;ve++,qe=B.next())qe=G(_e,L,ve,qe.value,X),qe!==null&&(n&&qe.alternate!==null&&_e.delete(qe.key===null?ve:qe.key),k=p(qe,k,ve),Ne===null?pe=qe:Ne.sibling=qe,Ne=qe);return n&&_e.forEach(function(BC){return r(L,BC)}),Ge&&Wr(L,ve),pe}function tt(L,k,B,X){if(typeof B=="object"&&B!==null&&B.type===N&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case S:e:{for(var pe=B.key;k!==null;){if(k.key===pe){if(pe=B.type,pe===N){if(k.tag===7){o(L,k.sibling),X=f(k,B.props.children),X.return=L,L=X;break e}}else if(k.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===R&&lv(pe)===k.type){o(L,k.sibling),X=f(k,B.props),Yl(X,B),X.return=L,L=X;break e}o(L,k);break}else r(L,k);k=k.sibling}B.type===N?(X=Qr(B.props.children,L.mode,X,B.key),X.return=L,L=X):(X=Gc(B.type,B.key,B.props,null,L.mode,X),Yl(X,B),X.return=L,L=X)}return E(L);case O:e:{for(pe=B.key;k!==null;){if(k.key===pe)if(k.tag===4&&k.stateNode.containerInfo===B.containerInfo&&k.stateNode.implementation===B.implementation){o(L,k.sibling),X=f(k,B.children||[]),X.return=L,L=X;break e}else{o(L,k);break}else r(L,k);k=k.sibling}X=xd(B,L.mode,X),X.return=L,L=X}return E(L);case R:return pe=B._init,B=pe(B._payload),tt(L,k,B,X)}if(st(B))return Ae(L,k,B,X);if(V(B)){if(pe=V(B),typeof pe!="function")throw Error(s(150));return B=pe.call(B),ye(L,k,B,X)}if(typeof B.then=="function")return tt(L,k,lh(B),X);if(B.$$typeof===ie)return tt(L,k,$c(L,B),X);uh(L,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,k!==null&&k.tag===6?(o(L,k.sibling),X=f(k,B),X.return=L,L=X):(o(L,k),X=Dd(B,L.mode,X),X.return=L,L=X),E(L)):o(L,k)}return function(L,k,B,X){try{Kl=0;var pe=tt(L,k,B,X);return ro=null,pe}catch(_e){if(_e===Vl||_e===Xc)throw _e;var Ne=Cn(29,_e,null,L.mode);return Ne.lanes=X,Ne.return=L,Ne}finally{}}}var ao=uv(!0),cv=uv(!1),Gn=te(null),Ai=null;function zs(n){var r=n.alternate;ne(Pt,Pt.current&1),ne(Gn,n),Ai===null&&(r===null||to.current!==null||r.memoizedState!==null)&&(Ai=n)}function hv(n){if(n.tag===22){if(ne(Pt,Pt.current),ne(Gn,n),Ai===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(Ai=n)}}else js()}function js(){ne(Pt,Pt.current),ne(Gn,Gn.current)}function as(n){oe(Gn),Ai===n&&(Ai=null),oe(Pt)}var Pt=te(0);function ch(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||em(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function hp(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:y({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var fp={enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Dn(),f=Vs(u);f.payload=r,o!=null&&(f.callback=o),r=Us(n,f,u),r!==null&&(xn(r,n,u),Bl(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Dn(),f=Vs(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Us(n,f,u),r!==null&&(xn(r,n,u),Bl(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Dn(),u=Vs(o);u.tag=2,r!=null&&(u.callback=r),r=Us(n,u,o),r!==null&&(xn(r,n,o),Bl(r,n,o))}};function fv(n,r,o,u,f,p,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,E):r.prototype&&r.prototype.isPureReactComponent?!Nl(o,u)||!Nl(f,p):!0}function dv(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&fp.enqueueReplaceState(r,r.state,null)}function ia(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=y({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var hh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function pv(n){hh(n)}function mv(n){console.error(n)}function gv(n){hh(n)}function fh(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function _v(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function dp(n,r,o){return o=Vs(o),o.tag=3,o.payload={element:null},o.callback=function(){fh(n,r)},o}function yv(n){return n=Vs(n),n.tag=3,n}function vv(n,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var p=u.value;n.payload=function(){return f(p)},n.callback=function(){_v(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){_v(r,o,u),typeof f!="function"&&(Ys===null?Ys=new Set([this]):Ys.add(this));var A=u.stack;this.componentDidCatch(u.value,{componentStack:A!==null?A:""})})}function Bb(n,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&kl(r,o,f,!0),o=Gn.current,o!==null){switch(o.tag){case 13:return Ai===null?Vp():o.alternate===null&&yt===0&&(yt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Hd?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Bp(n,u,f)),!1;case 22:return o.flags|=65536,u===Hd?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Bp(n,u,f)),!1}throw Error(s(435,o.tag))}return Bp(n,u,f),Vp(),!1}if(Ge)return r=Gn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Pd&&(n=Error(s(422),{cause:u}),Ml(jn(n,o)))):(u!==Pd&&(r=Error(s(423),{cause:u}),Ml(jn(r,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=jn(u,o),f=dp(n.stateNode,u,f),Gd(n,f),yt!==4&&(yt=2)),!1;var p=Error(s(520),{cause:u});if(p=jn(p,o),eu===null?eu=[p]:eu.push(p),yt!==4&&(yt=2),r===null)return!0;u=jn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=dp(o.stateNode,u,n),Gd(o,n),!1;case 1:if(r=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ys===null||!Ys.has(p))))return o.flags|=65536,f&=-f,o.lanes|=f,f=yv(f),vv(f,n,o,u),Gd(o,f),!1}o=o.return}while(o!==null);return!1}var Ev=Error(s(461)),zt=!1;function Qt(n,r,o,u){r.child=n===null?cv(r,null,o,u):ao(r,n.child,o,u)}function Tv(n,r,o,u,f){o=o.render;var p=r.ref;if("ref"in u){var E={};for(var A in u)A!=="ref"&&(E[A]=u[A])}else E=u;return ea(r),u=Wd(n,r,o,E,p,f),A=Xd(),n!==null&&!zt?(Zd(n,r,f),os(n,r,f)):(Ge&&A&&Md(r),r.flags|=1,Qt(n,r,u,f),r.child)}function Sv(n,r,o,u,f){if(n===null){var p=o.type;return typeof p=="function"&&!Od(p)&&p.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=p,Av(n,r,p,u,f)):(n=Gc(o.type,null,u,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!Tp(n,f)){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:Nl,o(E,u)&&n.ref===r.ref)return os(n,r,f)}return r.flags|=1,n=es(p,u),n.ref=r.ref,n.return=r,r.child=n}function Av(n,r,o,u,f){if(n!==null){var p=n.memoizedProps;if(Nl(p,u)&&n.ref===r.ref)if(zt=!1,r.pendingProps=u=p,Tp(n,f))(n.flags&131072)!==0&&(zt=!0);else return r.lanes=n.lanes,os(n,r,f)}return pp(n,r,o,u,f)}function wv(n,r,o){var u=r.pendingProps,f=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=p!==null?p.baseLanes|o:o,n!==null){for(f=r.child=n.child,p=0;f!==null;)p=p|f.lanes|f.childLanes,f=f.sibling;r.childLanes=p&~u}else r.childLanes=0,r.child=null;return Rv(n,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Wc(r,p!==null?p.cachePool:null),p!==null?Ay(r,p):Yd(),hv(r);else return r.lanes=r.childLanes=536870912,Rv(n,r,p!==null?p.baseLanes|o:o,o)}else p!==null?(Wc(r,p.cachePool),Ay(r,p),js(),r.memoizedState=null):(n!==null&&Wc(r,null),Yd(),js());return Qt(n,r,f,o),r.child}function Rv(n,r,o,u){var f=jd();return f=f===null?null:{parent:kt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},n!==null&&Wc(r,null),Yd(),hv(r),n!==null&&kl(n,r,u,!0),null}function dh(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(n===null||n.ref!==o)&&(r.flags|=4194816)}}function pp(n,r,o,u,f){return ea(r),o=Wd(n,r,o,u,void 0,f),u=Xd(),n!==null&&!zt?(Zd(n,r,f),os(n,r,f)):(Ge&&u&&Md(r),r.flags|=1,Qt(n,r,o,f),r.child)}function bv(n,r,o,u,f,p){return ea(r),r.updateQueue=null,o=Ry(r,u,o,f),wy(n),u=Xd(),n!==null&&!zt?(Zd(n,r,p),os(n,r,p)):(Ge&&u&&Md(r),r.flags|=1,Qt(n,r,o,p),r.child)}function Cv(n,r,o,u,f){if(ea(r),r.stateNode===null){var p=Wa,E=o.contextType;typeof E=="object"&&E!==null&&(p=nn(E)),p=new o(u,p),r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=fp,r.stateNode=p,p._reactInternals=r,p=r.stateNode,p.props=u,p.state=r.memoizedState,p.refs={},Fd(r),E=o.contextType,p.context=typeof E=="object"&&E!==null?nn(E):Wa,p.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(hp(r,o,E,u),p.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(E=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),E!==p.state&&fp.enqueueReplaceState(p,p.state,null),jl(r,u,p,f),zl(),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){p=r.stateNode;var A=r.memoizedProps,C=ia(o,A);p.props=C;var z=p.context,W=o.contextType;E=Wa,typeof W=="object"&&W!==null&&(E=nn(W));var J=o.getDerivedStateFromProps;W=typeof J=="function"||typeof p.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,W||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(A||z!==E)&&dv(r,p,u,E),Ls=!1;var F=r.memoizedState;p.state=F,jl(r,u,p,f),zl(),z=r.memoizedState,A||F!==z||Ls?(typeof J=="function"&&(hp(r,o,J,u),z=r.memoizedState),(C=Ls||fv(r,o,C,u,F,z,E))?(W||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=z),p.props=u,p.state=z,p.context=E,u=C):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{p=r.stateNode,qd(n,r),E=r.memoizedProps,W=ia(o,E),p.props=W,J=r.pendingProps,F=p.context,z=o.contextType,C=Wa,typeof z=="object"&&z!==null&&(C=nn(z)),A=o.getDerivedStateFromProps,(z=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E!==J||F!==C)&&dv(r,p,u,C),Ls=!1,F=r.memoizedState,p.state=F,jl(r,u,p,f),zl();var G=r.memoizedState;E!==J||F!==G||Ls||n!==null&&n.dependencies!==null&&Qc(n.dependencies)?(typeof A=="function"&&(hp(r,o,A,u),G=r.memoizedState),(W=Ls||fv(r,o,W,u,F,G,C)||n!==null&&n.dependencies!==null&&Qc(n.dependencies))?(z||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,G,C),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,G,C)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||E===n.memoizedProps&&F===n.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&F===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=G),p.props=u,p.state=G,p.context=C,u=W):(typeof p.componentDidUpdate!="function"||E===n.memoizedProps&&F===n.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&F===n.memoizedState||(r.flags|=1024),u=!1)}return p=u,dh(n,r),u=(r.flags&128)!==0,p||u?(p=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),r.flags|=1,n!==null&&u?(r.child=ao(r,n.child,null,f),r.child=ao(r,null,o,f)):Qt(n,r,o,f),r.memoizedState=p.state,n=r.child):n=os(n,r,f),n}function Iv(n,r,o,u){return xl(),r.flags|=256,Qt(n,r,o,u),r.child}var mp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gp(n){return{baseLanes:n,cachePool:my()}}function _p(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=Kn),n}function Nv(n,r,o){var u=r.pendingProps,f=!1,p=(r.flags&128)!==0,E;if((E=p)||(E=n!==null&&n.memoizedState===null?!1:(Pt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,n===null){if(Ge){if(f?zs(r):js(),Ge){var A=_t,C;if(C=A){e:{for(C=A,A=Si;C.nodeType!==8;){if(!A){A=null;break e}if(C=ii(C.nextSibling),C===null){A=null;break e}}A=C}A!==null?(r.memoizedState={dehydrated:A,treeContext:$r!==null?{id:ts,overflow:ns}:null,retryLane:536870912,hydrationErrors:null},C=Cn(18,null,null,0),C.stateNode=A,C.return=r,r.child=C,gn=r,_t=null,C=!0):C=!1}C||Zr(r)}if(A=r.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return em(A)?r.lanes=32:r.lanes=536870912,null;as(r)}return A=u.children,u=u.fallback,f?(js(),f=r.mode,A=ph({mode:"hidden",children:A},f),u=Qr(u,f,o,null),A.return=r,u.return=r,A.sibling=u,r.child=A,f=r.child,f.memoizedState=gp(o),f.childLanes=_p(n,E,o),r.memoizedState=mp,u):(zs(r),yp(r,A))}if(C=n.memoizedState,C!==null&&(A=C.dehydrated,A!==null)){if(p)r.flags&256?(zs(r),r.flags&=-257,r=vp(n,r,o)):r.memoizedState!==null?(js(),r.child=n.child,r.flags|=128,r=null):(js(),f=u.fallback,A=r.mode,u=ph({mode:"visible",children:u.children},A),f=Qr(f,A,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,ao(r,n.child,null,o),u=r.child,u.memoizedState=gp(o),u.childLanes=_p(n,E,o),r.memoizedState=mp,r=f);else if(zs(r),em(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var z=E.dgst;E=z,u=Error(s(419)),u.stack="",u.digest=E,Ml({value:u,source:null,stack:null}),r=vp(n,r,o)}else if(zt||kl(n,r,o,!1),E=(o&n.childLanes)!==0,zt||E){if(E=at,E!==null&&(u=o&-o,u=(u&42)!==0?1:Is(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==C.retryLane))throw C.retryLane=u,$a(n,u),xn(E,n,u),Ev;A.data==="$?"||Vp(),r=vp(n,r,o)}else A.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=C.treeContext,_t=ii(A.nextSibling),gn=r,Ge=!0,Xr=null,Si=!1,n!==null&&(Fn[qn++]=ts,Fn[qn++]=ns,Fn[qn++]=$r,ts=n.id,ns=n.overflow,$r=r),r=yp(r,u.children),r.flags|=4096);return r}return f?(js(),f=u.fallback,A=r.mode,C=n.child,z=C.sibling,u=es(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&65011712,z!==null?f=es(z,f):(f=Qr(f,A,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,A=n.child.memoizedState,A===null?A=gp(o):(C=A.cachePool,C!==null?(z=kt._currentValue,C=C.parent!==z?{parent:z,pool:z}:C):C=my(),A={baseLanes:A.baseLanes|o,cachePool:C}),f.memoizedState=A,f.childLanes=_p(n,E,o),r.memoizedState=mp,u):(zs(r),o=n.child,n=o.sibling,o=es(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(E=r.deletions,E===null?(r.deletions=[n],r.flags|=16):E.push(n)),r.child=o,r.memoizedState=null,o)}function yp(n,r){return r=ph({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function ph(n,r){return n=Cn(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function vp(n,r,o){return ao(r,n.child,null,o),n=yp(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Ov(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Vd(n.return,r,o)}function Ep(n,r,o,u,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function Dv(n,r,o){var u=r.pendingProps,f=u.revealOrder,p=u.tail;if(Qt(n,r,u.children,o),u=Pt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ov(n,o,r);else if(n.tag===19)Ov(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(ne(Pt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)n=o.alternate,n!==null&&ch(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),Ep(r,!1,f,o,p);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&ch(n)===null){r.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Ep(r,!0,o,null,p);break;case"together":Ep(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function os(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Ks|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(kl(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,o=es(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=es(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function Tp(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Qc(n)))}function zb(n,r,o){switch(r.tag){case 3:Xe(r,r.stateNode.containerInfo),Ps(r,kt,n.memoizedState.cache),xl();break;case 27:case 5:Cs(r);break;case 4:Xe(r,r.stateNode.containerInfo);break;case 10:Ps(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(zs(r),r.flags|=128,null):(o&r.child.childLanes)!==0?Nv(n,r,o):(zs(r),n=os(n,r,o),n!==null?n.sibling:null);zs(r);break;case 19:var f=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(kl(n,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return Dv(n,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ne(Pt,Pt.current),u)break;return null;case 22:case 23:return r.lanes=0,wv(n,r,o);case 24:Ps(r,kt,n.memoizedState.cache)}return os(n,r,o)}function xv(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)zt=!0;else{if(!Tp(n,o)&&(r.flags&128)===0)return zt=!1,zb(n,r,o);zt=(n.flags&131072)!==0}else zt=!1,Ge&&(r.flags&1048576)!==0&&ly(r,Yc,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")Od(u)?(n=ia(u,n),r.tag=1,r=Cv(null,r,u,n,o)):(r.tag=0,r=pp(null,r,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===le){r.tag=11,r=Tv(null,r,u,n,o);break e}else if(f===D){r.tag=14,r=Sv(null,r,u,n,o);break e}}throw r=Rt(u)||u,Error(s(306,r,""))}}return r;case 0:return pp(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=ia(u,r.pendingProps),Cv(n,r,u,f,o);case 3:e:{if(Xe(r,r.stateNode.containerInfo),n===null)throw Error(s(387));u=r.pendingProps;var p=r.memoizedState;f=p.element,qd(n,r),jl(r,u,null,o);var E=r.memoizedState;if(u=E.cache,Ps(r,kt,u),u!==p.cache&&Ud(r,[kt],o,!0),zl(),u=E.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){r=Iv(n,r,u,o);break e}else if(u!==f){f=jn(Error(s(424)),r),Ml(f),r=Iv(n,r,u,o);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(_t=ii(n.firstChild),gn=r,Ge=!0,Xr=null,Si=!0,o=cv(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(xl(),u===f){r=os(n,r,o);break e}Qt(n,r,u,o)}r=r.child}return r;case 26:return dh(n,r),n===null?(o=LE(r.type,null,r.pendingProps,null))?r.memoizedState=o:Ge||(o=r.type,n=r.pendingProps,u=Ih(ge.current).createElement(o),u[Dt]=r,u[bt]=n,Wt(u,o,n),Et(u),r.stateNode=u):r.memoizedState=LE(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Cs(r),n===null&&Ge&&(u=r.stateNode=ME(r.type,r.pendingProps,ge.current),gn=r,Si=!0,f=_t,Ws(r.type)?(tm=f,_t=ii(u.firstChild)):_t=f),Qt(n,r,r.pendingProps.children,o),dh(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Ge&&((f=u=_t)&&(u=pC(u,r.type,r.pendingProps,Si),u!==null?(r.stateNode=u,gn=r,_t=ii(u.firstChild),Si=!1,f=!0):f=!1),f||Zr(r)),Cs(r),f=r.type,p=r.pendingProps,E=n!==null?n.memoizedProps:null,u=p.children,Xp(f,p)?u=null:E!==null&&Xp(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=Wd(n,r,xb,null,null,o),uu._currentValue=f),dh(n,r),Qt(n,r,u,o),r.child;case 6:return n===null&&Ge&&((n=o=_t)&&(o=mC(o,r.pendingProps,Si),o!==null?(r.stateNode=o,gn=r,_t=null,n=!0):n=!1),n||Zr(r)),null;case 13:return Nv(n,r,o);case 4:return Xe(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=ao(r,null,u,o):Qt(n,r,u,o),r.child;case 11:return Tv(n,r,r.type,r.pendingProps,o);case 7:return Qt(n,r,r.pendingProps,o),r.child;case 8:return Qt(n,r,r.pendingProps.children,o),r.child;case 12:return Qt(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Ps(r,r.type,u.value),Qt(n,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ea(r),f=nn(f),u=u(f),r.flags|=1,Qt(n,r,u,o),r.child;case 14:return Sv(n,r,r.type,r.pendingProps,o);case 15:return Av(n,r,r.type,r.pendingProps,o);case 19:return Dv(n,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},n===null?(o=ph(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=es(n.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return wv(n,r,o);case 24:return ea(r),u=nn(kt),n===null?(f=jd(),f===null&&(f=at,p=Bd(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=o),f=p),r.memoizedState={parent:u,cache:f},Fd(r),Ps(r,kt,f)):((n.lanes&o)!==0&&(qd(n,r),jl(r,null,null,o),zl()),f=n.memoizedState,p=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Ps(r,kt,u)):(u=p.cache,Ps(r,kt,u),u!==f.cache&&Ud(r,[kt],o,!0))),Qt(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function ls(n){n.flags|=4}function Mv(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!jE(r)){if(r=Gn.current,r!==null&&((Ve&4194048)===Ve?Ai!==null:(Ve&62914560)!==Ve&&(Ve&536870912)===0||r!==Ai))throw Ul=Hd,gy;n.flags|=8192}}function mh(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?hl():536870912,n.lanes|=r,co|=r)}function Ql(n,r){if(!Ge)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function dt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function jb(n,r,o){var u=r.pendingProps;switch(kd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(r),null;case 1:return dt(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),ss(kt),ci(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Dl(r)?ls(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,hy())),dt(r),null;case 26:return o=r.memoizedState,n===null?(ls(r),o!==null?(dt(r),Mv(r,o)):(dt(r),r.flags&=-16777217)):o?o!==n.memoizedState?(ls(r),dt(r),Mv(r,o)):(dt(r),r.flags&=-16777217):(n.memoizedProps!==u&&ls(r),dt(r),r.flags&=-16777217),null;case 27:ji(r),o=ge.current;var f=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&ls(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return dt(r),null}n=he.current,Dl(r)?uy(r):(n=ME(f,u,o),r.stateNode=n,ls(r))}return dt(r),null;case 5:if(ji(r),o=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&ls(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return dt(r),null}if(n=he.current,Dl(r))uy(r);else{switch(f=Ih(ge.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[Dt]=r,n[bt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=n;e:switch(Wt(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ls(r)}}return dt(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&ls(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(n=ge.current,Dl(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,f=gn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[Dt]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||bE(n.nodeValue,o)),n||Zr(r)}else n=Ih(n).createTextNode(u),n[Dt]=r,r.stateNode=n}return dt(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Dl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Dt]=r}else xl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;dt(r),f=!1}else f=hy(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(as(r),r):(as(r),null)}if(as(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==f&&(u.flags|=2048)}return o!==n&&o&&(r.child.flags|=8192),mh(r,r.updateQueue),dt(r),null;case 4:return ci(),n===null&&Kp(r.stateNode.containerInfo),dt(r),null;case 10:return ss(r.type),dt(r),null;case 19:if(oe(Pt),f=r.memoizedState,f===null)return dt(r),null;if(u=(r.flags&128)!==0,p=f.rendering,p===null)if(u)Ql(f,!1);else{if(yt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(p=ch(n),p!==null){for(r.flags|=128,Ql(f,!1),n=p.updateQueue,r.updateQueue=n,mh(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)oy(o,n),o=o.sibling;return ne(Pt,Pt.current&1|2),r.child}n=n.sibling}f.tail!==null&&Pn()>yh&&(r.flags|=128,u=!0,Ql(f,!1),r.lanes=4194304)}else{if(!u)if(n=ch(p),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,mh(r,n),Ql(f,!0),f.tail===null&&f.tailMode==="hidden"&&!p.alternate&&!Ge)return dt(r),null}else 2*Pn()-f.renderingStartTime>yh&&o!==536870912&&(r.flags|=128,u=!0,Ql(f,!1),r.lanes=4194304);f.isBackwards?(p.sibling=r.child,r.child=p):(n=f.last,n!==null?n.sibling=p:r.child=p,f.last=p)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Pn(),r.sibling=null,n=Pt.current,ne(Pt,u?n&1|2:n&1),r):(dt(r),null);case 22:case 23:return as(r),Qd(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(dt(r),r.subtreeFlags&6&&(r.flags|=8192)):dt(r),o=r.updateQueue,o!==null&&mh(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&oe(ta),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),ss(kt),dt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function Hb(n,r){switch(kd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ss(kt),ci(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return ji(r),null;case 13:if(as(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));xl()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return oe(Pt),null;case 4:return ci(),null;case 10:return ss(r.type),null;case 22:case 23:return as(r),Qd(),n!==null&&oe(ta),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return ss(kt),null;case 25:return null;default:return null}}function kv(n,r){switch(kd(r),r.tag){case 3:ss(kt),ci();break;case 26:case 27:case 5:ji(r);break;case 4:ci();break;case 13:as(r);break;case 19:oe(Pt);break;case 10:ss(r.type);break;case 22:case 23:as(r),Qd(),n!==null&&oe(ta);break;case 24:ss(kt)}}function $l(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var p=o.create,E=o.inst;u=p(),E.destroy=u}o=o.next}while(o!==f)}}catch(A){it(r,r.return,A)}}function Hs(n,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var p=f.next;u=p;do{if((u.tag&n)===n){var E=u.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,f=r;var C=o,z=A;try{z()}catch(W){it(f,C,W)}}}u=u.next}while(u!==p)}}catch(W){it(r,r.return,W)}}function Pv(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{Sy(r,o)}catch(u){it(n,n.return,u)}}}function Lv(n,r,o){o.props=ia(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){it(n,r,u)}}function Wl(n,r){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(f){it(n,r,f)}}function wi(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){it(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){it(n,r,f)}else o.current=null}function Vv(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){it(n,n.return,f)}}function Sp(n,r,o){try{var u=n.stateNode;uC(u,n.type,o,r),u[bt]=r}catch(f){it(n,n.return,f)}}function Uv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ws(n.type)||n.tag===4}function Ap(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Uv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ws(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wp(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(n),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Ch));else if(u!==4&&(u===27&&Ws(n.type)&&(o=n.stateNode,r=null),n=n.child,n!==null))for(wp(n,r,o),n=n.sibling;n!==null;)wp(n,r,o),n=n.sibling}function gh(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(u===27&&Ws(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(gh(n,r,o),n=n.sibling;n!==null;)gh(n,r,o),n=n.sibling}function Bv(n){var r=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);Wt(r,u,o),r[Dt]=n,r[bt]=o}catch(p){it(n,n.return,p)}}var us=!1,St=!1,Rp=!1,zv=typeof WeakSet=="function"?WeakSet:Set,jt=null;function Fb(n,r){if(n=n.containerInfo,$p=kh,n=X_(n),Ad(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,A=-1,C=-1,z=0,W=0,J=n,F=null;t:for(;;){for(var G;J!==o||f!==0&&J.nodeType!==3||(A=E+f),J!==p||u!==0&&J.nodeType!==3||(C=E+u),J.nodeType===3&&(E+=J.nodeValue.length),(G=J.firstChild)!==null;)F=J,J=G;for(;;){if(J===n)break t;if(F===o&&++z===f&&(A=E),F===p&&++W===u&&(C=E),(G=J.nextSibling)!==null)break;J=F,F=J.parentNode}J=G}o=A===-1||C===-1?null:{start:A,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(Wp={focusedElem:n,selectionRange:o},kh=!1,jt=r;jt!==null;)if(r=jt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,jt=n;else for(;jt!==null;){switch(r=jt,p=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&p!==null){n=void 0,o=r,f=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var Ae=ia(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(Ae,p),u.__reactInternalSnapshotBeforeUpdate=n}catch(ye){it(o,o.return,ye)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)Jp(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Jp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,jt=n;break}jt=r.return}}function jv(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Fs(n,o),u&4&&$l(5,o);break;case 1:if(Fs(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(E){it(o,o.return,E)}else{var f=ia(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(E){it(o,o.return,E)}}u&64&&Pv(o),u&512&&Wl(o,o.return);break;case 3:if(Fs(n,o),u&64&&(n=o.updateQueue,n!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Sy(n,r)}catch(E){it(o,o.return,E)}}break;case 27:r===null&&u&4&&Bv(o);case 26:case 5:Fs(n,o),r===null&&u&4&&Vv(o),u&512&&Wl(o,o.return);break;case 12:Fs(n,o);break;case 13:Fs(n,o),u&4&&qv(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=Zb.bind(null,o),gC(n,o))));break;case 22:if(u=o.memoizedState!==null||us,!u){r=r!==null&&r.memoizedState!==null||St,f=us;var p=St;us=u,(St=r)&&!p?qs(n,o,(o.subtreeFlags&8772)!==0):Fs(n,o),us=f,St=p}break;case 30:break;default:Fs(n,o)}}function Hv(n){var r=n.alternate;r!==null&&(n.alternate=null,Hv(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Ds(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ft=null,vn=!1;function cs(n,r,o){for(o=o.child;o!==null;)Fv(n,r,o),o=o.sibling}function Fv(n,r,o){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(gt,o)}catch{}switch(o.tag){case 26:St||wi(o,r),cs(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:St||wi(o,r);var u=ft,f=vn;Ws(o.type)&&(ft=o.stateNode,vn=!1),cs(n,r,o),ru(o.stateNode),ft=u,vn=f;break;case 5:St||wi(o,r);case 6:if(u=ft,f=vn,ft=null,cs(n,r,o),ft=u,vn=f,ft!==null)if(vn)try{(ft.nodeType===9?ft.body:ft.nodeName==="HTML"?ft.ownerDocument.body:ft).removeChild(o.stateNode)}catch(p){it(o,r,p)}else try{ft.removeChild(o.stateNode)}catch(p){it(o,r,p)}break;case 18:ft!==null&&(vn?(n=ft,DE(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),du(n)):DE(ft,o.stateNode));break;case 4:u=ft,f=vn,ft=o.stateNode.containerInfo,vn=!0,cs(n,r,o),ft=u,vn=f;break;case 0:case 11:case 14:case 15:St||Hs(2,o,r),St||Hs(4,o,r),cs(n,r,o);break;case 1:St||(wi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Lv(o,r,u)),cs(n,r,o);break;case 21:cs(n,r,o);break;case 22:St=(u=St)||o.memoizedState!==null,cs(n,r,o),St=u;break;default:cs(n,r,o)}}function qv(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{du(n)}catch(o){it(r,r.return,o)}}function qb(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new zv),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new zv),r;default:throw Error(s(435,n.tag))}}function bp(n,r){var o=qb(n);r.forEach(function(u){var f=Jb.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function In(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],p=n,E=r,A=E;e:for(;A!==null;){switch(A.tag){case 27:if(Ws(A.type)){ft=A.stateNode,vn=!1;break e}break;case 5:ft=A.stateNode,vn=!1;break e;case 3:case 4:ft=A.stateNode.containerInfo,vn=!0;break e}A=A.return}if(ft===null)throw Error(s(160));Fv(p,E,f),ft=null,vn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Gv(r,n),r=r.sibling}var ni=null;function Gv(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:In(r,n),Nn(n),u&4&&(Hs(3,n,n.return),$l(3,n),Hs(5,n,n.return));break;case 1:In(r,n),Nn(n),u&512&&(St||o===null||wi(o,o.return)),u&64&&us&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=ni;if(In(r,n),Nn(n),u&512&&(St||o===null||wi(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":p=f.getElementsByTagName("title")[0],(!p||p[xr]||p[Dt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(u),f.head.insertBefore(p,f.querySelector("head > title"))),Wt(p,u,o),p[Dt]=n,Et(p),u=p;break e;case"link":var E=BE("link","href",f).get(u+(o.href||""));if(E){for(var A=0;A<E.length;A++)if(p=E[A],p.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(A,1);break t}}p=f.createElement(u),Wt(p,u,o),f.head.appendChild(p);break;case"meta":if(E=BE("meta","content",f).get(u+(o.content||""))){for(A=0;A<E.length;A++)if(p=E[A],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(A,1);break t}}p=f.createElement(u),Wt(p,u,o),f.head.appendChild(p);break;default:throw Error(s(468,u))}p[Dt]=n,Et(p),u=p}n.stateNode=u}else zE(f,n.type,n.stateNode);else n.stateNode=UE(f,u,n.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?zE(f,n.type,n.stateNode):UE(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Sp(n,n.memoizedProps,o.memoizedProps)}break;case 27:In(r,n),Nn(n),u&512&&(St||o===null||wi(o,o.return)),o!==null&&u&4&&Sp(n,n.memoizedProps,o.memoizedProps);break;case 5:if(In(r,n),Nn(n),u&512&&(St||o===null||wi(o,o.return)),n.flags&32){f=n.stateNode;try{Vn(f,"")}catch(G){it(n,n.return,G)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,Sp(n,f,o!==null?o.memoizedProps:f)),u&1024&&(Rp=!0);break;case 6:if(In(r,n),Nn(n),u&4){if(n.stateNode===null)throw Error(s(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(G){it(n,n.return,G)}}break;case 3:if(Dh=null,f=ni,ni=Nh(r.containerInfo),In(r,n),ni=f,Nn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{du(r.containerInfo)}catch(G){it(n,n.return,G)}Rp&&(Rp=!1,Kv(n));break;case 4:u=ni,ni=Nh(n.stateNode.containerInfo),In(r,n),Nn(n),ni=u;break;case 12:In(r,n),Nn(n);break;case 13:In(r,n),Nn(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(xp=Pn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,bp(n,u)));break;case 22:f=n.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,z=us,W=St;if(us=z||f,St=W||C,In(r,n),St=W,us=z,Nn(n),u&8192)e:for(r=n.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||C||us||St||sa(n)),o=null,r=n;;){if(r.tag===5||r.tag===26){if(o===null){C=o=r;try{if(p=C.stateNode,f)E=p.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=C.stateNode;var J=C.memoizedProps.style,F=J!=null&&J.hasOwnProperty("display")?J.display:null;A.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(G){it(C,C.return,G)}}}else if(r.tag===6){if(o===null){C=r;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(G){it(C,C.return,G)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,bp(n,o))));break;case 19:In(r,n),Nn(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,bp(n,u)));break;case 30:break;case 21:break;default:In(r,n),Nn(n)}}function Nn(n){var r=n.flags;if(r&2){try{for(var o,u=n.return;u!==null;){if(Uv(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,p=Ap(n);gh(n,p,f);break;case 5:var E=o.stateNode;o.flags&32&&(Vn(E,""),o.flags&=-33);var A=Ap(n);gh(n,A,E);break;case 3:case 4:var C=o.stateNode.containerInfo,z=Ap(n);wp(n,z,C);break;default:throw Error(s(161))}}catch(W){it(n,n.return,W)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Kv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Kv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Fs(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)jv(n,r.alternate,r),r=r.sibling}function sa(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Hs(4,r,r.return),sa(r);break;case 1:wi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&Lv(r,r.return,o),sa(r);break;case 27:ru(r.stateNode);case 26:case 5:wi(r,r.return),sa(r);break;case 22:r.memoizedState===null&&sa(r);break;case 30:sa(r);break;default:sa(r)}n=n.sibling}}function qs(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=n,p=r,E=p.flags;switch(p.tag){case 0:case 11:case 15:qs(f,p,o),$l(4,p);break;case 1:if(qs(f,p,o),u=p,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(z){it(u,u.return,z)}if(u=p,f=u.updateQueue,f!==null){var A=u.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)Ty(C[f],A)}catch(z){it(u,u.return,z)}}o&&E&64&&Pv(p),Wl(p,p.return);break;case 27:Bv(p);case 26:case 5:qs(f,p,o),o&&u===null&&E&4&&Vv(p),Wl(p,p.return);break;case 12:qs(f,p,o);break;case 13:qs(f,p,o),o&&E&4&&qv(f,p);break;case 22:p.memoizedState===null&&qs(f,p,o),Wl(p,p.return);break;case 30:break;default:qs(f,p,o)}r=r.sibling}}function Cp(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Pl(o))}function Ip(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Pl(n))}function Ri(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Yv(n,r,o,u),r=r.sibling}function Yv(n,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Ri(n,r,o,u),f&2048&&$l(9,r);break;case 1:Ri(n,r,o,u);break;case 3:Ri(n,r,o,u),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Pl(n)));break;case 12:if(f&2048){Ri(n,r,o,u),n=r.stateNode;try{var p=r.memoizedProps,E=p.id,A=p.onPostCommit;typeof A=="function"&&A(E,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(C){it(r,r.return,C)}}else Ri(n,r,o,u);break;case 13:Ri(n,r,o,u);break;case 23:break;case 22:p=r.stateNode,E=r.alternate,r.memoizedState!==null?p._visibility&2?Ri(n,r,o,u):Xl(n,r):p._visibility&2?Ri(n,r,o,u):(p._visibility|=2,oo(n,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&Cp(E,r);break;case 24:Ri(n,r,o,u),f&2048&&Ip(r.alternate,r);break;default:Ri(n,r,o,u)}}function oo(n,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var p=n,E=r,A=o,C=u,z=E.flags;switch(E.tag){case 0:case 11:case 15:oo(p,E,A,C,f),$l(8,E);break;case 23:break;case 22:var W=E.stateNode;E.memoizedState!==null?W._visibility&2?oo(p,E,A,C,f):Xl(p,E):(W._visibility|=2,oo(p,E,A,C,f)),f&&z&2048&&Cp(E.alternate,E);break;case 24:oo(p,E,A,C,f),f&&z&2048&&Ip(E.alternate,E);break;default:oo(p,E,A,C,f)}r=r.sibling}}function Xl(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,f=u.flags;switch(u.tag){case 22:Xl(o,u),f&2048&&Cp(u.alternate,u);break;case 24:Xl(o,u),f&2048&&Ip(u.alternate,u);break;default:Xl(o,u)}r=r.sibling}}var Zl=8192;function lo(n){if(n.subtreeFlags&Zl)for(n=n.child;n!==null;)Qv(n),n=n.sibling}function Qv(n){switch(n.tag){case 26:lo(n),n.flags&Zl&&n.memoizedState!==null&&NC(ni,n.memoizedState,n.memoizedProps);break;case 5:lo(n);break;case 3:case 4:var r=ni;ni=Nh(n.stateNode.containerInfo),lo(n),ni=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=Zl,Zl=16777216,lo(n),Zl=r):lo(n));break;default:lo(n)}}function $v(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Jl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];jt=u,Xv(u,n)}$v(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wv(n),n=n.sibling}function Wv(n){switch(n.tag){case 0:case 11:case 15:Jl(n),n.flags&2048&&Hs(9,n,n.return);break;case 3:Jl(n);break;case 12:Jl(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,_h(n)):Jl(n);break;default:Jl(n)}}function _h(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];jt=u,Xv(u,n)}$v(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Hs(8,r,r.return),_h(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,_h(r));break;default:_h(r)}n=n.sibling}}function Xv(n,r){for(;jt!==null;){var o=jt;switch(o.tag){case 0:case 11:case 15:Hs(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Pl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,jt=u;else e:for(o=n;jt!==null;){u=jt;var f=u.sibling,p=u.return;if(Hv(u),u===o){jt=null;break e}if(f!==null){f.return=p,jt=f;break e}jt=p}}}var Gb={getCacheForType:function(n){var r=nn(kt),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o}},Kb=typeof WeakMap=="function"?WeakMap:Map,$e=0,at=null,De=null,Ve=0,We=0,On=null,Gs=!1,uo=!1,Np=!1,hs=0,yt=0,Ks=0,ra=0,Op=0,Kn=0,co=0,eu=null,En=null,Dp=!1,xp=0,yh=1/0,vh=null,Ys=null,$t=0,Qs=null,ho=null,fo=0,Mp=0,kp=null,Zv=null,tu=0,Pp=null;function Dn(){if(($e&2)!==0&&Ve!==0)return Ve&-Ve;if(Q.T!==null){var n=Ja;return n!==0?n:Hp()}return Ns()}function Jv(){Kn===0&&(Kn=(Ve&536870912)===0||Ge?cl():536870912);var n=Gn.current;return n!==null&&(n.flags|=32),Kn}function xn(n,r,o){(n===at&&(We===2||We===9)||n.cancelPendingCommit!==null)&&(po(n,0),$s(n,Ve,Kn,!1)),Fi(n,o),(($e&2)===0||n!==at)&&(n===at&&(($e&2)===0&&(ra|=o),yt===4&&$s(n,Ve,Kn,!1)),bi(n))}function eE(n,r,o){if(($e&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&n.expiredLanes)===0||Dr(n,r),f=u?$b(n,r):Up(n,r,!0),p=u;do{if(f===0){uo&&!u&&$s(n,r,0,!1);break}else{if(o=n.current.alternate,p&&!Yb(o)){f=Up(n,r,!1),p=!1;continue}if(f===2){if(p=r,n.errorRecoveryDisabledLanes&p)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var A=n;f=eu;var C=A.current.memoizedState.isDehydrated;if(C&&(po(A,E).flags|=256),E=Up(A,E,!1),E!==2){if(Np&&!C){A.errorRecoveryDisabledLanes|=p,ra|=p,f=4;break e}p=En,En=f,p!==null&&(En===null?En=p:En.push.apply(En,p))}f=E}if(p=!1,f!==2)continue}}if(f===1){po(n,0),$s(n,r,0,!0);break}e:{switch(u=n,p=f,p){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:$s(u,r,Kn,!Gs);break e;case 2:En=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=xp+300-Pn(),10<f)){if($s(u,r,Kn,!Gs),Oa(u,0,!0)!==0)break e;u.timeoutHandle=NE(tE.bind(null,u,o,En,vh,Dp,r,Kn,ra,co,Gs,p,2,-0,0),f);break e}tE(u,o,En,vh,Dp,r,Kn,ra,co,Gs,p,0,-0,0)}}break}while(!0);bi(n)}function tE(n,r,o,u,f,p,E,A,C,z,W,J,F,G){if(n.timeoutHandle=-1,J=r.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(lu={stylesheets:null,count:0,unsuspend:IC},Qv(r),J=OC(),J!==null)){n.cancelPendingCommit=J(lE.bind(null,n,r,p,o,u,f,E,A,C,W,1,F,G)),$s(n,p,E,!z);return}lE(n,r,p,o,u,f,E,A,C)}function Yb(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!bn(p(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function $s(n,r,o,u){r&=~Op,r&=~ra,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var f=r;0<f;){var p=31-tn(f),E=1<<p;u[p]=-1,f&=~E}o!==0&&hi(n,o,r)}function Eh(){return($e&6)===0?(nu(0),!1):!0}function Lp(){if(De!==null){if(We===0)var n=De.return;else n=De,is=Jr=null,Jd(n),ro=null,Kl=0,n=De;for(;n!==null;)kv(n.alternate,n),n=n.return;De=null}}function po(n,r){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,hC(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Lp(),at=n,De=o=es(n.current,null),Ve=r,We=0,On=null,Gs=!1,uo=Dr(n,r),Np=!1,co=Kn=Op=ra=Ks=yt=0,En=eu=null,Dp=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var f=31-tn(u),p=1<<f;r|=n[f],u&=~p}return hs=r,Hc(),o}function nE(n,r){Ie=null,Q.H=oh,r===Vl||r===Xc?(r=vy(),We=3):r===gy?(r=vy(),We=4):We=r===Ev?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,On=r,De===null&&(yt=1,fh(n,jn(r,n.current)))}function iE(){var n=Q.H;return Q.H=oh,n===null?oh:n}function sE(){var n=Q.A;return Q.A=Gb,n}function Vp(){yt=4,Gs||(Ve&4194048)!==Ve&&Gn.current!==null||(uo=!0),(Ks&134217727)===0&&(ra&134217727)===0||at===null||$s(at,Ve,Kn,!1)}function Up(n,r,o){var u=$e;$e|=2;var f=iE(),p=sE();(at!==n||Ve!==r)&&(vh=null,po(n,r)),r=!1;var E=yt;e:do try{if(We!==0&&De!==null){var A=De,C=On;switch(We){case 8:Lp(),E=6;break e;case 3:case 2:case 9:case 6:Gn.current===null&&(r=!0);var z=We;if(We=0,On=null,mo(n,A,C,z),o&&uo){E=0;break e}break;default:z=We,We=0,On=null,mo(n,A,C,z)}}Qb(),E=yt;break}catch(W){nE(n,W)}while(!0);return r&&n.shellSuspendCounter++,is=Jr=null,$e=u,Q.H=f,Q.A=p,De===null&&(at=null,Ve=0,Hc()),E}function Qb(){for(;De!==null;)rE(De)}function $b(n,r){var o=$e;$e|=2;var u=iE(),f=sE();at!==n||Ve!==r?(vh=null,yh=Pn()+500,po(n,r)):uo=Dr(n,r);e:do try{if(We!==0&&De!==null){r=De;var p=On;t:switch(We){case 1:We=0,On=null,mo(n,r,p,1);break;case 2:case 9:if(_y(p)){We=0,On=null,aE(r);break}r=function(){We!==2&&We!==9||at!==n||(We=7),bi(n)},p.then(r,r);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:_y(p)?(We=0,On=null,aE(r)):(We=0,On=null,mo(n,r,p,7));break;case 5:var E=null;switch(De.tag){case 26:E=De.memoizedState;case 5:case 27:var A=De;if(!E||jE(E)){We=0,On=null;var C=A.sibling;if(C!==null)De=C;else{var z=A.return;z!==null?(De=z,Th(z)):De=null}break t}}We=0,On=null,mo(n,r,p,5);break;case 6:We=0,On=null,mo(n,r,p,6);break;case 8:Lp(),yt=6;break e;default:throw Error(s(462))}}Wb();break}catch(W){nE(n,W)}while(!0);return is=Jr=null,Q.H=u,Q.A=f,$e=o,De!==null?0:(at=null,Ve=0,Hc(),yt)}function Wb(){for(;De!==null&&!al();)rE(De)}function rE(n){var r=xv(n.alternate,n,hs);n.memoizedProps=n.pendingProps,r===null?Th(n):De=r}function aE(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=bv(o,r,r.pendingProps,r.type,void 0,Ve);break;case 11:r=bv(o,r,r.pendingProps,r.type.render,r.ref,Ve);break;case 5:Jd(r);default:kv(o,r),r=De=oy(r,hs),r=xv(o,r,hs)}n.memoizedProps=n.pendingProps,r===null?Th(n):De=r}function mo(n,r,o,u){is=Jr=null,Jd(r),ro=null,Kl=0;var f=r.return;try{if(Bb(n,f,r,o,Ve)){yt=1,fh(n,jn(o,n.current)),De=null;return}}catch(p){if(f!==null)throw De=f,p;yt=1,fh(n,jn(o,n.current)),De=null;return}r.flags&32768?(Ge||u===1?n=!0:uo||(Ve&536870912)!==0?n=!1:(Gs=n=!0,(u===2||u===9||u===3||u===6)&&(u=Gn.current,u!==null&&u.tag===13&&(u.flags|=16384))),oE(r,n)):Th(r)}function Th(n){var r=n;do{if((r.flags&32768)!==0){oE(r,Gs);return}n=r.return;var o=jb(r.alternate,r,hs);if(o!==null){De=o;return}if(r=r.sibling,r!==null){De=r;return}De=r=n}while(r!==null);yt===0&&(yt=5)}function oE(n,r){do{var o=Hb(n.alternate,n);if(o!==null){o.flags&=32767,De=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){De=n;return}De=n=o}while(n!==null);yt=6,De=null}function lE(n,r,o,u,f,p,E,A,C){n.cancelPendingCommit=null;do Sh();while($t!==0);if(($e&6)!==0)throw Error(s(327));if(r!==null){if(r===n.current)throw Error(s(177));if(p=r.lanes|r.childLanes,p|=Id,fl(n,o,p,E,A,C),n===at&&(De=at=null,Ve=0),ho=r,Qs=n,fo=o,Mp=p,kp=f,Zv=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,eC(Cr,function(){return dE(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=Q.T,Q.T=null,f=ae.p,ae.p=2,E=$e,$e|=4;try{Fb(n,r,o)}finally{$e=E,ae.p=f,Q.T=u}}$t=1,uE(),cE(),hE()}}function uE(){if($t===1){$t=0;var n=Qs,r=ho,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=Q.T,Q.T=null;var u=ae.p;ae.p=2;var f=$e;$e|=4;try{Gv(r,n);var p=Wp,E=X_(n.containerInfo),A=p.focusedElem,C=p.selectionRange;if(E!==A&&A&&A.ownerDocument&&W_(A.ownerDocument.documentElement,A)){if(C!==null&&Ad(A)){var z=C.start,W=C.end;if(W===void 0&&(W=z),"selectionStart"in A)A.selectionStart=z,A.selectionEnd=Math.min(W,A.value.length);else{var J=A.ownerDocument||document,F=J&&J.defaultView||window;if(F.getSelection){var G=F.getSelection(),Ae=A.textContent.length,ye=Math.min(C.start,Ae),tt=C.end===void 0?ye:Math.min(C.end,Ae);!G.extend&&ye>tt&&(E=tt,tt=ye,ye=E);var L=$_(A,ye),k=$_(A,tt);if(L&&k&&(G.rangeCount!==1||G.anchorNode!==L.node||G.anchorOffset!==L.offset||G.focusNode!==k.node||G.focusOffset!==k.offset)){var B=J.createRange();B.setStart(L.node,L.offset),G.removeAllRanges(),ye>tt?(G.addRange(B),G.extend(k.node,k.offset)):(B.setEnd(k.node,k.offset),G.addRange(B))}}}}for(J=[],G=A;G=G.parentNode;)G.nodeType===1&&J.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<J.length;A++){var X=J[A];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}kh=!!$p,Wp=$p=null}finally{$e=f,ae.p=u,Q.T=o}}n.current=r,$t=2}}function cE(){if($t===2){$t=0;var n=Qs,r=ho,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=Q.T,Q.T=null;var u=ae.p;ae.p=2;var f=$e;$e|=4;try{jv(n,r.alternate,r)}finally{$e=f,ae.p=u,Q.T=o}}$t=3}}function hE(){if($t===4||$t===3){$t=0,_c();var n=Qs,r=ho,o=fo,u=Zv;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?$t=5:($t=0,ho=Qs=null,fE(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Ys=null),Da(o),r=r.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(gt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=Q.T,f=ae.p,ae.p=2,Q.T=null;try{for(var p=n.onRecoverableError,E=0;E<u.length;E++){var A=u[E];p(A.value,{componentStack:A.stack})}}finally{Q.T=r,ae.p=f}}(fo&3)!==0&&Sh(),bi(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===Pp?tu++:(tu=0,Pp=n):tu=0,nu(0)}}function fE(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Pl(r)))}function Sh(n){return uE(),cE(),hE(),dE()}function dE(){if($t!==5)return!1;var n=Qs,r=Mp;Mp=0;var o=Da(fo),u=Q.T,f=ae.p;try{ae.p=32>o?32:o,Q.T=null,o=kp,kp=null;var p=Qs,E=fo;if($t=0,ho=Qs=null,fo=0,($e&6)!==0)throw Error(s(331));var A=$e;if($e|=4,Wv(p.current),Yv(p,p.current,E,o),$e=A,nu(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(gt,p)}catch{}return!0}finally{ae.p=f,Q.T=u,fE(n,r)}}function pE(n,r,o){r=jn(o,r),r=dp(n.stateNode,r,2),n=Us(n,r,2),n!==null&&(Fi(n,2),bi(n))}function it(n,r,o){if(n.tag===3)pE(n,n,o);else for(;r!==null;){if(r.tag===3){pE(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ys===null||!Ys.has(u))){n=jn(o,n),o=yv(2),u=Us(r,o,2),u!==null&&(vv(o,u,r,n),Fi(u,2),bi(u));break}}r=r.return}}function Bp(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new Kb;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(Np=!0,f.add(o),n=Xb.bind(null,n,r,o),r.then(n,n))}function Xb(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,at===n&&(Ve&o)===o&&(yt===4||yt===3&&(Ve&62914560)===Ve&&300>Pn()-xp?($e&2)===0&&po(n,0):Op|=o,co===Ve&&(co=0)),bi(n)}function mE(n,r){r===0&&(r=hl()),n=$a(n,r),n!==null&&(Fi(n,r),bi(n))}function Zb(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),mE(n,o)}function Jb(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),mE(n,o)}function eC(n,r){return Rr(n,r)}var Ah=null,go=null,zp=!1,wh=!1,jp=!1,aa=0;function bi(n){n!==go&&n.next===null&&(go===null?Ah=go=n:go=go.next=n),wh=!0,zp||(zp=!0,nC())}function nu(n,r){if(!jp&&wh){jp=!0;do for(var o=!1,u=Ah;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var p=0;else{var E=u.suspendedLanes,A=u.pingedLanes;p=(1<<31-tn(42|n)+1)-1,p&=f&~(E&~A),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(o=!0,vE(u,p))}else p=Ve,p=Oa(u,u===at?p:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(p&3)===0||Dr(u,p)||(o=!0,vE(u,p));u=u.next}while(o);jp=!1}}function tC(){gE()}function gE(){wh=zp=!1;var n=0;aa!==0&&(cC()&&(n=aa),aa=0);for(var r=Pn(),o=null,u=Ah;u!==null;){var f=u.next,p=_E(u,r);p===0?(u.next=null,o===null?Ah=f:o.next=f,f===null&&(go=o)):(o=u,(n!==0||(p&3)!==0)&&(wh=!0)),u=f}nu(n)}function _E(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes&-62914561;0<p;){var E=31-tn(p),A=1<<E,C=f[E];C===-1?((A&o)===0||(A&u)!==0)&&(f[E]=ul(A,r)):C<=r&&(n.expiredLanes|=A),p&=~A}if(r=at,o=Ve,o=Oa(n,n===r?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===r&&(We===2||We===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&br(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Dr(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&br(u),Da(o)){case 2:case 8:o=Ia;break;case 32:o=Cr;break;case 268435456:o=Na;break;default:o=Cr}return u=yE.bind(null,n),o=Rr(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&br(u),n.callbackPriority=2,n.callbackNode=null,2}function yE(n,r){if($t!==0&&$t!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Sh()&&n.callbackNode!==o)return null;var u=Ve;return u=Oa(n,n===at?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(eE(n,u,r),_E(n,Pn()),n.callbackNode!=null&&n.callbackNode===o?yE.bind(null,n):null)}function vE(n,r){if(Sh())return null;eE(n,r,!0)}function nC(){fC(function(){($e&6)!==0?Rr(ol,tC):gE()})}function Hp(){return aa===0&&(aa=cl()),aa}function EE(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Va(""+n)}function TE(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function iC(n,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var p=EE((f[bt]||null).action),E=u.submitter;E&&(r=(r=E[bt]||null)?EE(r.formAction):E.getAttribute("formAction"),r!==null&&(p=r,E=null));var A=new Ua("action","action",null,u,f);n.push({event:A,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(aa!==0){var C=E?TE(f,E):new FormData(f);lp(o,{pending:!0,data:C,method:f.method,action:p},null,C)}}else typeof p=="function"&&(A.preventDefault(),C=E?TE(f,E):new FormData(f),lp(o,{pending:!0,data:C,method:f.method,action:p},p,C))},currentTarget:f}]})}}for(var Fp=0;Fp<Cd.length;Fp++){var qp=Cd[Fp],sC=qp.toLowerCase(),rC=qp[0].toUpperCase()+qp.slice(1);ti(sC,"on"+rC)}ti(ey,"onAnimationEnd"),ti(ty,"onAnimationIteration"),ti(ny,"onAnimationStart"),ti("dblclick","onDoubleClick"),ti("focusin","onFocus"),ti("focusout","onBlur"),ti(Sb,"onTransitionRun"),ti(Ab,"onTransitionStart"),ti(wb,"onTransitionCancel"),ti(iy,"onTransitionEnd"),Gi("onMouseEnter",["mouseout","mouseover"]),Gi("onMouseLeave",["mouseout","mouseover"]),Gi("onPointerEnter",["pointerout","pointerover"]),Gi("onPointerLeave",["pointerout","pointerover"]),Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var iu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(iu));function SE(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var E=u.length-1;0<=E;E--){var A=u[E],C=A.instance,z=A.currentTarget;if(A=A.listener,C!==p&&f.isPropagationStopped())break e;p=A,f.currentTarget=z;try{p(f)}catch(W){hh(W)}f.currentTarget=null,p=C}else for(E=0;E<u.length;E++){if(A=u[E],C=A.instance,z=A.currentTarget,A=A.listener,C!==p&&f.isPropagationStopped())break e;p=A,f.currentTarget=z;try{p(f)}catch(W){hh(W)}f.currentTarget=null,p=C}}}}function xe(n,r){var o=r[pl];o===void 0&&(o=r[pl]=new Set);var u=n+"__bubble";o.has(u)||(AE(r,n,2,!1),o.add(u))}function Gp(n,r,o){var u=0;r&&(u|=4),AE(o,n,u,r)}var Rh="_reactListening"+Math.random().toString(36).slice(2);function Kp(n){if(!n[Rh]){n[Rh]=!0,ml.forEach(function(o){o!=="selectionchange"&&(aC.has(o)||Gp(o,!1,n),Gp(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Rh]||(r[Rh]=!0,Gp("selectionchange",!1,r))}}function AE(n,r,o,u){switch(YE(r)){case 2:var f=MC;break;case 8:f=kC;break;default:f=am}o=f.bind(null,r,o,n),f=void 0,!Bn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(r,o,{capture:!0,passive:f}):n.addEventListener(r,o,!0):f!==void 0?n.addEventListener(r,o,{passive:f}):n.addEventListener(r,o,!1)}function Yp(n,r,o,u,f){var p=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var A=u.stateNode.containerInfo;if(A===f)break;if(E===4)for(E=u.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;A!==null;){if(E=qi(A),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){u=p=E;continue e}A=A.parentNode}}u=u.return}Cc(function(){var z=p,W=Un(o),J=[];e:{var F=sy.get(n);if(F!==void 0){var G=Ua,Ae=n;switch(n){case"keypress":if(_i(o)===0)break e;case"keydown":case"keyup":G=qa;break;case"focusin":Ae="focus",G=ja;break;case"focusout":Ae="blur",G=ja;break;case"beforeblur":case"afterblur":G=ja;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=zn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Pc;break;case ey:case ty:case ny:G=Ha;break;case iy:G=Vc;break;case"scroll":case"scrollend":G=Ic;break;case"wheel":G=Ga;break;case"copy":case"cut":case"paste":G=Fa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Cl;break;case"toggle":case"beforetoggle":G=Bc}var ye=(r&4)!==0,tt=!ye&&(n==="scroll"||n==="scrollend"),L=ye?F!==null?F+"Capture":null:F;ye=[];for(var k=z,B;k!==null;){var X=k;if(B=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||B===null||L===null||(X=Br(k,L),X!=null&&ye.push(su(k,X,B))),tt)break;k=k.return}0<ye.length&&(F=new G(F,Ae,null,o,W),J.push({event:F,listeners:ye}))}}if((r&7)===0){e:{if(F=n==="mouseover"||n==="pointerover",G=n==="mouseout"||n==="pointerout",F&&o!==Qi&&(Ae=o.relatedTarget||o.fromElement)&&(qi(Ae)||Ae[Ln]))break e;if((G||F)&&(F=W.window===W?W:(F=W.ownerDocument)?F.defaultView||F.parentWindow:window,G?(Ae=o.relatedTarget||o.toElement,G=z,Ae=Ae?qi(Ae):null,Ae!==null&&(tt=l(Ae),ye=Ae.tag,Ae!==tt||ye!==5&&ye!==27&&ye!==6)&&(Ae=null)):(G=null,Ae=z),G!==Ae)){if(ye=zn,X="onMouseLeave",L="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(ye=Cl,X="onPointerLeave",L="onPointerEnter",k="pointer"),tt=G==null?F:di(G),B=Ae==null?F:di(Ae),F=new ye(X,k+"leave",G,o,W),F.target=tt,F.relatedTarget=B,X=null,qi(W)===z&&(ye=new ye(L,k+"enter",Ae,o,W),ye.target=B,ye.relatedTarget=tt,X=ye),tt=X,G&&Ae)t:{for(ye=G,L=Ae,k=0,B=ye;B;B=_o(B))k++;for(B=0,X=L;X;X=_o(X))B++;for(;0<k-B;)ye=_o(ye),k--;for(;0<B-k;)L=_o(L),B--;for(;k--;){if(ye===L||L!==null&&ye===L.alternate)break t;ye=_o(ye),L=_o(L)}ye=null}else ye=null;G!==null&&wE(J,F,G,ye,!1),Ae!==null&&tt!==null&&wE(J,tt,Ae,ye,!0)}}e:{if(F=z?di(z):window,G=F.nodeName&&F.nodeName.toLowerCase(),G==="select"||G==="input"&&F.type==="file")var pe=F_;else if(Mt(F))if(q_)pe=vb;else{pe=_b;var Ne=gb}else G=F.nodeName,!G||G.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?z&&El(z.elementType)&&(pe=F_):pe=yb;if(pe&&(pe=pe(n,z))){Ji(J,pe,o,W);break e}Ne&&Ne(n,F,z),n==="focusout"&&z&&F.type==="number"&&z.memoizedProps.value!=null&&Ms(F,"number",F.value)}switch(Ne=z?di(z):window,n){case"focusin":(Mt(Ne)||Ne.contentEditable==="true")&&(Ka=Ne,wd=z,Ol=null);break;case"focusout":Ol=wd=Ka=null;break;case"mousedown":Rd=!0;break;case"contextmenu":case"mouseup":case"dragend":Rd=!1,Z_(J,o,W);break;case"selectionchange":if(Tb)break;case"keydown":case"keyup":Z_(J,o,W)}var _e;if(Ei)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Pe?Y(n,o)&&(ve="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ve="onCompositionStart");ve&&(v&&o.locale!=="ko"&&(Pe||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Pe&&(_e=Sl()):(gi=W,ks="value"in gi?gi.value:gi.textContent,Pe=!0)),Ne=bh(z,ve),0<Ne.length&&(ve=new Rl(ve,n,null,o,W),J.push({event:ve,listeners:Ne}),_e?ve.data=_e:(_e=re(o),_e!==null&&(ve.data=_e)))),(_e=_?xt(n,o):Le(n,o))&&(ve=bh(z,"onBeforeInput"),0<ve.length&&(Ne=new Rl("onBeforeInput","beforeinput",null,o,W),J.push({event:Ne,listeners:ve}),Ne.data=_e)),iC(J,n,z,o,W)}SE(J,r)})}function su(n,r,o){return{instance:n,listener:r,currentTarget:o}}function bh(n,r){for(var o=r+"Capture",u=[];n!==null;){var f=n,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Br(n,o),f!=null&&u.unshift(su(n,f,p)),f=Br(n,r),f!=null&&u.push(su(n,f,p))),n.tag===3)return u;n=n.return}return[]}function _o(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function wE(n,r,o,u,f){for(var p=r._reactName,E=[];o!==null&&o!==u;){var A=o,C=A.alternate,z=A.stateNode;if(A=A.tag,C!==null&&C===u)break;A!==5&&A!==26&&A!==27||z===null||(C=z,f?(z=Br(o,p),z!=null&&E.unshift(su(o,z,C))):f||(z=Br(o,p),z!=null&&E.push(su(o,z,C)))),o=o.return}E.length!==0&&n.push({event:r,listeners:E})}var oC=/\r\n?/g,lC=/\u0000|\uFFFD/g;function RE(n){return(typeof n=="string"?n:""+n).replace(oC,`
`).replace(lC,"")}function bE(n,r){return r=RE(r),RE(n)===r}function Ch(){}function et(n,r,o,u,f,p){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Vn(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Vn(n,""+u);break;case"className":pi(n,"class",u);break;case"tabIndex":pi(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":pi(n,o,u);break;case"style":vl(n,u,p);break;case"data":if(r!=="object"){pi(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Va(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(r!=="input"&&et(n,r,"name",f.name,f,null),et(n,r,"formEncType",f.formEncType,f,null),et(n,r,"formMethod",f.formMethod,f,null),et(n,r,"formTarget",f.formTarget,f,null)):(et(n,r,"encType",f.encType,f,null),et(n,r,"method",f.method,f,null),et(n,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Va(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Ch);break;case"onScroll":u!=null&&xe("scroll",n);break;case"onScrollEnd":u!=null&&xe("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Va(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":xe("beforetoggle",n),xe("toggle",n),xs(n,"popover",u);break;case"xlinkActuate":Kt(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Kt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Kt(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Kt(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Kt(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Kt(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Kt(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Kt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Kt(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":xs(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=_d.get(o)||o,xs(n,o,u))}}function Qp(n,r,o,u,f,p){switch(o){case"style":vl(n,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Vn(n,u):(typeof u=="number"||typeof u=="bigint")&&Vn(n,""+u);break;case"onScroll":u!=null&&xe("scroll",n);break;case"onScrollEnd":u!=null&&xe("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Ch);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xa.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),p=n[bt]||null,p=p!=null?p[o]:null,typeof p=="function"&&n.removeEventListener(r,p,f),typeof u=="function")){typeof p!="function"&&p!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):xs(n,o,u)}}}function Wt(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",n),xe("load",n);var u=!1,f=!1,p;for(p in o)if(o.hasOwnProperty(p)){var E=o[p];if(E!=null)switch(p){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:et(n,r,p,E,o,null)}}f&&et(n,r,"srcSet",o.srcSet,o,null),u&&et(n,r,"src",o.src,o,null);return;case"input":xe("invalid",n);var A=p=E=f=null,C=null,z=null;for(u in o)if(o.hasOwnProperty(u)){var W=o[u];if(W!=null)switch(u){case"name":f=W;break;case"type":E=W;break;case"checked":C=W;break;case"defaultChecked":z=W;break;case"value":p=W;break;case"defaultValue":A=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,r));break;default:et(n,r,u,W,o,null)}}Lr(n,p,A,C,z,E,f,!1),La(n);return;case"select":xe("invalid",n),u=E=p=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":p=A;break;case"defaultValue":E=A;break;case"multiple":u=A;default:et(n,r,f,A,o,null)}r=p,o=E,n.multiple=!!u,r!=null?Yi(n,!!u,r,!1):o!=null&&Yi(n,!!u,o,!0);return;case"textarea":xe("invalid",n),p=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(A=o[E],A!=null))switch(E){case"value":u=A;break;case"defaultValue":f=A;break;case"children":p=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:et(n,r,E,A,o,null)}Vr(n,u,f,p),La(n);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:et(n,r,C,u,o,null)}return;case"dialog":xe("beforetoggle",n),xe("toggle",n),xe("cancel",n),xe("close",n);break;case"iframe":case"object":xe("load",n);break;case"video":case"audio":for(u=0;u<iu.length;u++)xe(iu[u],n);break;case"image":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"embed":case"source":case"link":xe("error",n),xe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in o)if(o.hasOwnProperty(z)&&(u=o[z],u!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:et(n,r,z,u,o,null)}return;default:if(El(r)){for(W in o)o.hasOwnProperty(W)&&(u=o[W],u!==void 0&&Qp(n,r,W,u,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(u=o[A],u!=null&&et(n,r,A,u,o,null))}function uC(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,E=null,A=null,C=null,z=null,W=null;for(G in o){var J=o[G];if(o.hasOwnProperty(G)&&J!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":C=J;default:u.hasOwnProperty(G)||et(n,r,G,null,u,J)}}for(var F in u){var G=u[F];if(J=o[F],u.hasOwnProperty(F)&&(G!=null||J!=null))switch(F){case"type":p=G;break;case"name":f=G;break;case"checked":z=G;break;case"defaultChecked":W=G;break;case"value":E=G;break;case"defaultValue":A=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:G!==J&&et(n,r,F,G,u,J)}}Rn(n,E,A,C,z,W,p,f);return;case"select":G=E=A=F=null;for(p in o)if(C=o[p],o.hasOwnProperty(p)&&C!=null)switch(p){case"value":break;case"multiple":G=C;default:u.hasOwnProperty(p)||et(n,r,p,null,u,C)}for(f in u)if(p=u[f],C=o[f],u.hasOwnProperty(f)&&(p!=null||C!=null))switch(f){case"value":F=p;break;case"defaultValue":A=p;break;case"multiple":E=p;default:p!==C&&et(n,r,f,p,u,C)}r=A,o=E,u=G,F!=null?Yi(n,!!o,F,!1):!!u!=!!o&&(r!=null?Yi(n,!!o,r,!0):Yi(n,!!o,o?[]:"",!1));return;case"textarea":G=F=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!u.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:et(n,r,A,null,u,f)}for(E in u)if(f=u[E],p=o[E],u.hasOwnProperty(E)&&(f!=null||p!=null))switch(E){case"value":F=f;break;case"defaultValue":G=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&et(n,r,E,f,u,p)}Ze(n,F,G);return;case"option":for(var Ae in o)if(F=o[Ae],o.hasOwnProperty(Ae)&&F!=null&&!u.hasOwnProperty(Ae))switch(Ae){case"selected":n.selected=!1;break;default:et(n,r,Ae,null,u,F)}for(C in u)if(F=u[C],G=o[C],u.hasOwnProperty(C)&&F!==G&&(F!=null||G!=null))switch(C){case"selected":n.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:et(n,r,C,F,u,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in o)F=o[ye],o.hasOwnProperty(ye)&&F!=null&&!u.hasOwnProperty(ye)&&et(n,r,ye,null,u,F);for(z in u)if(F=u[z],G=o[z],u.hasOwnProperty(z)&&F!==G&&(F!=null||G!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:et(n,r,z,F,u,G)}return;default:if(El(r)){for(var tt in o)F=o[tt],o.hasOwnProperty(tt)&&F!==void 0&&!u.hasOwnProperty(tt)&&Qp(n,r,tt,void 0,u,F);for(W in u)F=u[W],G=o[W],!u.hasOwnProperty(W)||F===G||F===void 0&&G===void 0||Qp(n,r,W,F,u,G);return}}for(var L in o)F=o[L],o.hasOwnProperty(L)&&F!=null&&!u.hasOwnProperty(L)&&et(n,r,L,null,u,F);for(J in u)F=u[J],G=o[J],!u.hasOwnProperty(J)||F===G||F==null&&G==null||et(n,r,J,F,u,G)}var $p=null,Wp=null;function Ih(n){return n.nodeType===9?n:n.ownerDocument}function CE(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function IE(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Xp(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Zp=null;function cC(){var n=window.event;return n&&n.type==="popstate"?n===Zp?!1:(Zp=n,!0):(Zp=null,!1)}var NE=typeof setTimeout=="function"?setTimeout:void 0,hC=typeof clearTimeout=="function"?clearTimeout:void 0,OE=typeof Promise=="function"?Promise:void 0,fC=typeof queueMicrotask=="function"?queueMicrotask:typeof OE<"u"?function(n){return OE.resolve(null).then(n).catch(dC)}:NE;function dC(n){setTimeout(function(){throw n})}function Ws(n){return n==="head"}function DE(n,r){var o=r,u=0,f=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(0<u&&8>u){o=u;var E=n.ownerDocument;if(o&1&&ru(E.documentElement),o&2&&ru(E.body),o&4)for(o=E.head,ru(o),E=o.firstChild;E;){var A=E.nextSibling,C=E.nodeName;E[xr]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=A}}if(f===0){n.removeChild(p),du(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=p}while(o);du(r)}function Jp(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Jp(o),Ds(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function pC(n,r,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[xr])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(p=n.getAttribute("rel"),p==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(p!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(p=n.getAttribute("src"),(p!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===p)return n}else return n;if(n=ii(n.nextSibling),n===null)break}return null}function mC(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=ii(n.nextSibling),n===null))return null;return n}function em(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function gC(n,r){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function ii(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var tm=null;function xE(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}function ME(n,r,o){switch(r=Ih(o),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function ru(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Ds(n)}var Yn=new Map,kE=new Set;function Nh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var fs=ae.d;ae.d={f:_C,r:yC,D:vC,C:EC,L:TC,m:SC,X:wC,S:AC,M:RC};function _C(){var n=fs.f(),r=Eh();return n||r}function yC(n){var r=fi(n);r!==null&&r.tag===5&&r.type==="form"?ev(r):fs.r(n)}var yo=typeof document>"u"?null:document;function PE(n,r,o){var u=yo;if(u&&typeof r=="string"&&r){var f=Ct(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),kE.has(f)||(kE.add(f),n={rel:n,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),Wt(r,"link",n),Et(r),u.head.appendChild(r)))}}function vC(n){fs.D(n),PE("dns-prefetch",n,null)}function EC(n,r){fs.C(n,r),PE("preconnect",n,r)}function TC(n,r,o){fs.L(n,r,o);var u=yo;if(u&&n&&r){var f='link[rel="preload"][as="'+Ct(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Ct(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Ct(o.imageSizes)+'"]')):f+='[href="'+Ct(n)+'"]';var p=f;switch(r){case"style":p=vo(n);break;case"script":p=Eo(n)}Yn.has(p)||(n=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),Yn.set(p,n),u.querySelector(f)!==null||r==="style"&&u.querySelector(au(p))||r==="script"&&u.querySelector(ou(p))||(r=u.createElement("link"),Wt(r,"link",n),Et(r),u.head.appendChild(r)))}}function SC(n,r){fs.m(n,r);var o=yo;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Ct(u)+'"][href="'+Ct(n)+'"]',p=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Eo(n)}if(!Yn.has(p)&&(n=y({rel:"modulepreload",href:n},r),Yn.set(p,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(ou(p)))return}u=o.createElement("link"),Wt(u,"link",n),Et(u),o.head.appendChild(u)}}}function AC(n,r,o){fs.S(n,r,o);var u=yo;if(u&&n){var f=dn(u).hoistableStyles,p=vo(n);r=r||"default";var E=f.get(p);if(!E){var A={loading:0,preload:null};if(E=u.querySelector(au(p)))A.loading=5;else{n=y({rel:"stylesheet",href:n,"data-precedence":r},o),(o=Yn.get(p))&&nm(n,o);var C=E=u.createElement("link");Et(C),Wt(C,"link",n),C._p=new Promise(function(z,W){C.onload=z,C.onerror=W}),C.addEventListener("load",function(){A.loading|=1}),C.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Oh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:A},f.set(p,E)}}}function wC(n,r){fs.X(n,r);var o=yo;if(o&&n){var u=dn(o).hoistableScripts,f=Eo(n),p=u.get(f);p||(p=o.querySelector(ou(f)),p||(n=y({src:n,async:!0},r),(r=Yn.get(f))&&im(n,r),p=o.createElement("script"),Et(p),Wt(p,"link",n),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function RC(n,r){fs.M(n,r);var o=yo;if(o&&n){var u=dn(o).hoistableScripts,f=Eo(n),p=u.get(f);p||(p=o.querySelector(ou(f)),p||(n=y({src:n,async:!0,type:"module"},r),(r=Yn.get(f))&&im(n,r),p=o.createElement("script"),Et(p),Wt(p,"link",n),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function LE(n,r,o,u){var f=(f=ge.current)?Nh(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=vo(o.href),o=dn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=vo(o.href);var p=dn(f).hoistableStyles,E=p.get(n);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(n,E),(p=f.querySelector(au(n)))&&!p._p&&(E.instance=p,E.state.loading=5),Yn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Yn.set(n,o),p||bC(f,n,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Eo(o),o=dn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function vo(n){return'href="'+Ct(n)+'"'}function au(n){return'link[rel="stylesheet"]['+n+"]"}function VE(n){return y({},n,{"data-precedence":n.precedence,precedence:null})}function bC(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),Wt(r,"link",o),Et(r),n.head.appendChild(r))}function Eo(n){return'[src="'+Ct(n)+'"]'}function ou(n){return"script[async]"+n}function UE(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+Ct(o.href)+'"]');if(u)return r.instance=u,Et(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),Et(u),Wt(u,"style",f),Oh(u,o.precedence,n),r.instance=u;case"stylesheet":f=vo(o.href);var p=n.querySelector(au(f));if(p)return r.state.loading|=4,r.instance=p,Et(p),p;u=VE(o),(f=Yn.get(f))&&nm(u,f),p=(n.ownerDocument||n).createElement("link"),Et(p);var E=p;return E._p=new Promise(function(A,C){E.onload=A,E.onerror=C}),Wt(p,"link",u),r.state.loading|=4,Oh(p,o.precedence,n),r.instance=p;case"script":return p=Eo(o.src),(f=n.querySelector(ou(p)))?(r.instance=f,Et(f),f):(u=o,(f=Yn.get(p))&&(u=y({},o),im(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),Et(f),Wt(f,"link",u),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Oh(u,o.precedence,n));return r.instance}function Oh(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,p=f,E=0;E<u.length;E++){var A=u[E];if(A.dataset.precedence===r)p=A;else if(p!==f)break}p?p.parentNode.insertBefore(n,p.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function nm(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function im(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Dh=null;function BE(n,r,o){if(Dh===null){var u=new Map,f=Dh=new Map;f.set(o,u)}else f=Dh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var p=o[f];if(!(p[xr]||p[Dt]||n==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var E=p.getAttribute(r)||"";E=n+E;var A=u.get(E);A?A.push(p):u.set(E,[p])}}return u}function zE(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function CC(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function jE(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var lu=null;function IC(){}function NC(n,r,o){if(lu===null)throw Error(s(475));var u=lu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=vo(o.href),p=n.querySelector(au(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=xh.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=p,Et(p);return}p=n.ownerDocument||n,o=VE(o),(f=Yn.get(f))&&nm(o,f),p=p.createElement("link"),Et(p);var E=p;E._p=new Promise(function(A,C){E.onload=A,E.onerror=C}),Wt(p,"link",o),r.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=xh.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function OC(){if(lu===null)throw Error(s(475));var n=lu;return n.stylesheets&&n.count===0&&sm(n,n.stylesheets),0<n.count?function(r){var o=setTimeout(function(){if(n.stylesheets&&sm(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(o)}}:null}function xh(){if(this.count--,this.count===0){if(this.stylesheets)sm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Mh=null;function sm(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Mh=new Map,r.forEach(DC,n),Mh=null,xh.call(n))}function DC(n,r){if(!(r.state.loading&4)){var o=Mh.get(n);if(o)var u=o.get(null);else{o=new Map,Mh.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var E=f[p];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),p=o.get(E)||u,p===u&&o.set(null,f),o.set(E,f),this.count++,u=xh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),p?p.parentNode.insertBefore(f,p.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var uu={$$typeof:ie,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function xC(n,r,o,u,f,p,E,A){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Hi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.hiddenUpdates=Hi(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function HE(n,r,o,u,f,p,E,A,C,z,W,J){return n=new xC(n,r,o,E,A,C,z,J),r=1,p===!0&&(r|=24),p=Cn(3,null,null,r),n.current=p,p.stateNode=n,r=Bd(),r.refCount++,n.pooledCache=r,r.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:r},Fd(p),n}function FE(n){return n?(n=Wa,n):Wa}function qE(n,r,o,u,f,p){f=FE(f),u.context===null?u.context=f:u.pendingContext=f,u=Vs(r),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=Us(n,u,r),o!==null&&(xn(o,n,r),Bl(o,n,r))}function GE(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function rm(n,r){GE(n,r),(n=n.alternate)&&GE(n,r)}function KE(n){if(n.tag===13){var r=$a(n,67108864);r!==null&&xn(r,n,67108864),rm(n,67108864)}}var kh=!0;function MC(n,r,o,u){var f=Q.T;Q.T=null;var p=ae.p;try{ae.p=2,am(n,r,o,u)}finally{ae.p=p,Q.T=f}}function kC(n,r,o,u){var f=Q.T;Q.T=null;var p=ae.p;try{ae.p=8,am(n,r,o,u)}finally{ae.p=p,Q.T=f}}function am(n,r,o,u){if(kh){var f=om(u);if(f===null)Yp(n,r,u,Ph,o),QE(n,u);else if(LC(f,n,r,o,u))u.stopPropagation();else if(QE(n,u),r&4&&-1<PC.indexOf(n)){for(;f!==null;){var p=fi(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var E=Zn(p.pendingLanes);if(E!==0){var A=p;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var C=1<<31-tn(E);A.entanglements[1]|=C,E&=~C}bi(p),($e&6)===0&&(yh=Pn()+500,nu(0))}}break;case 13:A=$a(p,2),A!==null&&xn(A,p,2),Eh(),rm(p,2)}if(p=om(u),p===null&&Yp(n,r,u,Ph,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else Yp(n,r,u,null,o)}}function om(n){return n=Un(n),lm(n)}var Ph=null;function lm(n){if(Ph=null,n=qi(n),n!==null){var r=l(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=c(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Ph=n,null}function YE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(hd()){case ol:return 2;case Ia:return 8;case Cr:case fd:return 32;case Na:return 268435456;default:return 32}default:return 32}}var um=!1,Xs=null,Zs=null,Js=null,cu=new Map,hu=new Map,er=[],PC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function QE(n,r){switch(n){case"focusin":case"focusout":Xs=null;break;case"dragenter":case"dragleave":Zs=null;break;case"mouseover":case"mouseout":Js=null;break;case"pointerover":case"pointerout":cu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":hu.delete(r.pointerId)}}function fu(n,r,o,u,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},r!==null&&(r=fi(r),r!==null&&KE(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function LC(n,r,o,u,f){switch(r){case"focusin":return Xs=fu(Xs,n,r,o,u,f),!0;case"dragenter":return Zs=fu(Zs,n,r,o,u,f),!0;case"mouseover":return Js=fu(Js,n,r,o,u,f),!0;case"pointerover":var p=f.pointerId;return cu.set(p,fu(cu.get(p)||null,n,r,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,hu.set(p,fu(hu.get(p)||null,n,r,o,u,f)),!0}return!1}function $E(n){var r=qi(n.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){n.blockedOn=r,Ec(n.priority,function(){if(o.tag===13){var u=Dn();u=Is(u);var f=$a(o,u);f!==null&&xn(f,o,u),rm(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Lh(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=om(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Qi=u,o.target.dispatchEvent(u),Qi=null}else return r=fi(o),r!==null&&KE(r),n.blockedOn=o,!1;r.shift()}return!0}function WE(n,r,o){Lh(n)&&o.delete(r)}function VC(){um=!1,Xs!==null&&Lh(Xs)&&(Xs=null),Zs!==null&&Lh(Zs)&&(Zs=null),Js!==null&&Lh(Js)&&(Js=null),cu.forEach(WE),hu.forEach(WE)}function Vh(n,r){n.blockedOn===r&&(n.blockedOn=null,um||(um=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,VC)))}var Uh=null;function XE(n){Uh!==n&&(Uh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Uh===n&&(Uh=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],f=n[r+2];if(typeof u!="function"){if(lm(u||o)===null)continue;break}var p=fi(o);p!==null&&(n.splice(r,3),r-=3,lp(p,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function du(n){function r(C){return Vh(C,n)}Xs!==null&&Vh(Xs,n),Zs!==null&&Vh(Zs,n),Js!==null&&Vh(Js,n),cu.forEach(r),hu.forEach(r);for(var o=0;o<er.length;o++){var u=er[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<er.length&&(o=er[0],o.blockedOn===null);)$E(o),o.blockedOn===null&&er.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],p=o[u+1],E=f[bt]||null;if(typeof p=="function")E||XE(o);else if(E){var A=null;if(p&&p.hasAttribute("formAction")){if(f=p,E=p[bt]||null)A=E.formAction;else if(lm(f)!==null)continue}else A=E.action;typeof A=="function"?o[u+1]=A:(o.splice(u,3),u-=3),XE(o)}}}function cm(n){this._internalRoot=n}Bh.prototype.render=cm.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Dn();qE(o,u,n,r,null,null)},Bh.prototype.unmount=cm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;qE(n.current,2,null,n,null,null),Eh(),r[Ln]=null}};function Bh(n){this._internalRoot=n}Bh.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ns();n={blockedOn:null,target:n,priority:r};for(var o=0;o<er.length&&r!==0&&r<er[o].priority;o++);er.splice(o,0,n),o===0&&$E(n)}};var ZE=e.version;if(ZE!=="19.1.0")throw Error(s(527,ZE,"19.1.0"));ae.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=m(r),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var UC={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zh.isDisabled&&zh.supportsFiber)try{gt=zh.inject(UC),Qe=zh}catch{}}return mu.createRoot=function(n,r){if(!a(n))throw Error(s(299));var o=!1,u="",f=pv,p=mv,E=gv,A=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks)),r=HE(n,1,!1,null,null,o,u,f,p,E,A,null),n[Ln]=r.current,Kp(n),new cm(r)},mu.hydrateRoot=function(n,r,o){if(!a(n))throw Error(s(299));var u=!1,f="",p=pv,E=mv,A=gv,C=null,z=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(z=o.formState)),r=HE(n,1,!0,r,o??null,u,f,p,E,A,C,z),r.context=FE(null),o=r.current,u=Dn(),u=Is(u),f=Vs(u),f.callback=null,Us(o,f,u),o=u,r.current.lanes=o,Fi(r,o),bi(r),n[Ln]=r.current,Kp(n),new Bh(r)},mu.version="19.1.0",mu}var lT;function QC(){if(lT)return dm.exports;lT=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),dm.exports=YC(),dm.exports}var $C=QC();const WC="modulepreload",XC=function(i){return"/AcadComponent/"+i},uT={},Ju=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){let c=function(g){return Promise.all(g.map(y=>Promise.resolve(y).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=c(t.map(g=>{if(g=XC(g),g in uT)return;uT[g]=!0;const y=g.endsWith(".css"),T=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${T}`))return;const S=document.createElement("link");if(S.rel=y?"stylesheet":WC,y||(S.as="script"),S.crossOrigin="",S.href=g,m&&S.setAttribute("nonce",m),document.head.appendChild(S),y)return new Promise((O,N)=>{S.addEventListener("load",O),S.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${g}`)))})}))}function l(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return a.then(c=>{for(const d of c||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})},ZC="_navBarWrapper_efeiq_71",JC="_left_efeiq_105",e1="_title_efeiq_113",t1="_mid_efeiq_129",n1="_Links_efeiq_141",i1="_content_efeiq_159",s1="_ind_efeiq_171",r1="_indicator_efeiq_181",a1="_right_efeiq_209",o1="_authButts_efeiq_209",l1="_HamburgerButt_efeiq_209",u1="_sidebar_efeiq_287",c1="_hideSideBar_efeiq_297",h1="_indicated_efeiq_541",f1="_indication_efeiq_563",ot={navBarWrapper:ZC,left:JC,title:e1,mid:t1,Links:n1,content:i1,ind:s1,indicator:r1,right:a1,authButts:o1,HamburgerButt:l1,sidebar:u1,hideSideBar:c1,indicated:h1,indication:f1};var gu={},cT;function d1(){if(cT)return gu;cT=1,Object.defineProperty(gu,"__esModule",{value:!0}),gu.parse=c,gu.serialize=g;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function c(S,O){const N=new l,q=S.length;if(q<2)return N;const H=(O==null?void 0:O.decode)||y;let $=0;do{const Z=S.indexOf("=",$);if(Z===-1)break;const ie=S.indexOf(";",$),le=ie===-1?q:ie;if(Z>le){$=S.lastIndexOf(";",Z-1)+1;continue}const se=d(S,$,Z),fe=m(S,Z,se),D=S.slice(se,fe);if(N[D]===void 0){let R=d(S,Z+1,le),b=m(S,le,R);const M=H(S.slice(R,b));N[D]=M}$=le+1}while($<q);return N}function d(S,O,N){do{const q=S.charCodeAt(O);if(q!==32&&q!==9)return O}while(++O<N);return N}function m(S,O,N){for(;O>N;){const q=S.charCodeAt(--O);if(q!==32&&q!==9)return O+1}return N}function g(S,O,N){const q=(N==null?void 0:N.encode)||encodeURIComponent;if(!i.test(S))throw new TypeError(`argument name is invalid: ${S}`);const H=q(O);if(!e.test(H))throw new TypeError(`argument val is invalid: ${O}`);let $=S+"="+H;if(!N)return $;if(N.maxAge!==void 0){if(!Number.isInteger(N.maxAge))throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);$+="; Max-Age="+N.maxAge}if(N.domain){if(!t.test(N.domain))throw new TypeError(`option domain is invalid: ${N.domain}`);$+="; Domain="+N.domain}if(N.path){if(!s.test(N.path))throw new TypeError(`option path is invalid: ${N.path}`);$+="; Path="+N.path}if(N.expires){if(!T(N.expires)||!Number.isFinite(N.expires.valueOf()))throw new TypeError(`option expires is invalid: ${N.expires}`);$+="; Expires="+N.expires.toUTCString()}if(N.httpOnly&&($+="; HttpOnly"),N.secure&&($+="; Secure"),N.partitioned&&($+="; Partitioned"),N.priority)switch(typeof N.priority=="string"?N.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${N.priority}`)}if(N.sameSite)switch(typeof N.sameSite=="string"?N.sameSite.toLowerCase():N.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${N.sameSite}`)}return $}function y(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function T(S){return a.call(S)==="[object Date]"}return gu}d1();var hT="popstate";function p1(i={}){function e(s,a){let{pathname:l,search:c,hash:d}=s.location;return zm("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:ju(a)}return g1(e,t,null,i)}function pt(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Mi(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function m1(){return Math.random().toString(36).substring(2,10)}function fT(i,e){return{usr:i.state,key:i.key,idx:e}}function zm(i,e,t=null,s){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?Qo(e):e,state:t,key:e&&e.key||s||m1()}}function ju({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function Qo(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function g1(i,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,d="POP",m=null,g=y();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function y(){return(c.state||{idx:null}).idx}function T(){d="POP";let H=y(),$=H==null?null:H-g;g=H,m&&m({action:d,location:q.location,delta:$})}function S(H,$){d="PUSH";let Z=zm(q.location,H,$);g=y()+1;let ie=fT(Z,g),le=q.createHref(Z);try{c.pushState(ie,"",le)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;a.location.assign(le)}l&&m&&m({action:d,location:q.location,delta:1})}function O(H,$){d="REPLACE";let Z=zm(q.location,H,$);g=y();let ie=fT(Z,g),le=q.createHref(Z);c.replaceState(ie,"",le),l&&m&&m({action:d,location:q.location,delta:0})}function N(H){return _1(H)}let q={get action(){return d},get location(){return i(a,c)},listen(H){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(hT,T),m=H,()=>{a.removeEventListener(hT,T),m=null}},createHref(H){return e(a,H)},createURL:N,encodeLocation(H){let $=N(H);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:S,replace:O,go(H){return c.go(H)}};return q}function _1(i,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),pt(t,"No window.location.(origin|href) available to create URL");let s=typeof i=="string"?i:ju(i);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function DS(i,e,t="/"){return y1(i,e,t,!1)}function y1(i,e,t,s){let a=typeof e=="string"?Qo(e):e,l=Es(a.pathname||"/",t);if(l==null)return null;let c=xS(i);v1(c);let d=null;for(let m=0;d==null&&m<c.length;++m){let g=O1(l);d=I1(c[m],g,s)}return d}function xS(i,e=[],t=[],s=""){let a=(l,c,d)=>{let m={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};m.relativePath.startsWith("/")&&(pt(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let g=_s([s,m.relativePath]),y=t.concat(m);l.children&&l.children.length>0&&(pt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),xS(l.children,e,y,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:b1(g,l.index),routesMeta:y})};return i.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let m of MS(l.path))a(l,c,m)}),e}function MS(i){let e=i.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=MS(s.join("/")),d=[];return d.push(...c.map(m=>m===""?l:[l,m].join("/"))),a&&d.push(...c),d.map(m=>i.startsWith("/")&&m===""?"/":m)}function v1(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:C1(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var E1=/^:[\w-]+$/,T1=3,S1=2,A1=1,w1=10,R1=-2,dT=i=>i==="*";function b1(i,e){let t=i.split("/"),s=t.length;return t.some(dT)&&(s+=R1),e&&(s+=S1),t.filter(a=>!dT(a)).reduce((a,l)=>a+(E1.test(l)?T1:l===""?A1:w1),s)}function C1(i,e){return i.length===e.length&&i.slice(0,-1).every((s,a)=>s===e[a])?i[i.length-1]-e[e.length-1]:0}function I1(i,e,t=!1){let{routesMeta:s}=i,a={},l="/",c=[];for(let d=0;d<s.length;++d){let m=s[d],g=d===s.length-1,y=l==="/"?e:e.slice(l.length)||"/",T=uf({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},y),S=m.route;if(!T&&g&&t&&!s[s.length-1].route.index&&(T=uf({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!T)return null;Object.assign(a,T.params),c.push({params:a,pathname:_s([l,T.pathname]),pathnameBase:k1(_s([l,T.pathnameBase])),route:S}),T.pathnameBase!=="/"&&(l=_s([l,T.pathnameBase]))}return c}function uf(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,s]=N1(i.path,i.caseSensitive,i.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:s.reduce((g,{paramName:y,isOptional:T},S)=>{if(y==="*"){let N=d[S]||"";c=l.slice(0,l.length-N.length).replace(/(.)\/+$/,"$1")}const O=d[S];return T&&!O?g[y]=void 0:g[y]=(O||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:i}}function N1(i,e=!1,t=!0){Mi(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,m)=>(s.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function O1(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mi(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function Es(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}function D1(i,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof i=="string"?Qo(i):i;return{pathname:t?t.startsWith("/")?t:x1(t,e):e,search:P1(s),hash:L1(a)}}function x1(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function _m(i,e,t,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function M1(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function kS(i){let e=M1(i);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function PS(i,e,t,s=!1){let a;typeof i=="string"?a=Qo(i):(a={...i},pt(!a.pathname||!a.pathname.includes("?"),_m("?","pathname","search",a)),pt(!a.pathname||!a.pathname.includes("#"),_m("#","pathname","hash",a)),pt(!a.search||!a.search.includes("#"),_m("#","search","hash",a)));let l=i===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!s&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),T-=1;a.pathname=S.join("/")}d=T>=0?e[T]:"/"}let m=D1(a,d),g=c&&c!=="/"&&c.endsWith("/"),y=(l||c===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(g||y)&&(m.pathname+="/"),m}var _s=i=>i.join("/").replace(/\/\/+/g,"/"),k1=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),P1=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,L1=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function V1(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var LS=["POST","PUT","PATCH","DELETE"];new Set(LS);var U1=["GET",...LS];new Set(U1);var $o=j.createContext(null);$o.displayName="DataRouter";var Uf=j.createContext(null);Uf.displayName="DataRouterState";var VS=j.createContext({isTransitioning:!1});VS.displayName="ViewTransition";var B1=j.createContext(new Map);B1.displayName="Fetchers";var z1=j.createContext(null);z1.displayName="Await";var Vi=j.createContext(null);Vi.displayName="Navigation";var ec=j.createContext(null);ec.displayName="Location";var Rs=j.createContext({outlet:null,matches:[],isDataRoute:!1});Rs.displayName="Route";var Ng=j.createContext(null);Ng.displayName="RouteError";function j1(i,{relative:e}={}){pt(tc(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=j.useContext(Vi),{hash:a,pathname:l,search:c}=nc(i,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:_s([t,l])),s.createHref({pathname:d,search:c,hash:a})}function tc(){return j.useContext(ec)!=null}function Sa(){return pt(tc(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(ec).location}var US="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function BS(i){j.useContext(Vi).static||j.useLayoutEffect(i)}function H1(){let{isDataRoute:i}=j.useContext(Rs);return i?tI():F1()}function F1(){pt(tc(),"useNavigate() may be used only in the context of a <Router> component.");let i=j.useContext($o),{basename:e,navigator:t}=j.useContext(Vi),{matches:s}=j.useContext(Rs),{pathname:a}=Sa(),l=JSON.stringify(kS(s)),c=j.useRef(!1);return BS(()=>{c.current=!0}),j.useCallback((m,g={})=>{if(Mi(c.current,US),!c.current)return;if(typeof m=="number"){t.go(m);return}let y=PS(m,JSON.parse(l),a,g.relative==="path");i==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:_s([e,y.pathname])),(g.replace?t.replace:t.push)(y,g.state,g)},[e,t,l,a,i])}j.createContext(null);function nc(i,{relative:e}={}){let{matches:t}=j.useContext(Rs),{pathname:s}=Sa(),a=JSON.stringify(kS(t));return j.useMemo(()=>PS(i,JSON.parse(a),s,e==="path"),[i,a,s,e])}function q1(i,e){return zS(i,e)}function zS(i,e,t,s){var $;pt(tc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=j.useContext(Vi),{matches:l}=j.useContext(Rs),c=l[l.length-1],d=c?c.params:{},m=c?c.pathname:"/",g=c?c.pathnameBase:"/",y=c&&c.route;{let Z=y&&y.path||"";jS(m,!y||Z.endsWith("*")||Z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z==="/"?"*":`${Z}/*`}">.`)}let T=Sa(),S;if(e){let Z=typeof e=="string"?Qo(e):e;pt(g==="/"||(($=Z.pathname)==null?void 0:$.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${Z.pathname}" was given in the \`location\` prop.`),S=Z}else S=T;let O=S.pathname||"/",N=O;if(g!=="/"){let Z=g.replace(/^\//,"").split("/");N="/"+O.replace(/^\//,"").split("/").slice(Z.length).join("/")}let q=DS(i,{pathname:N});Mi(y||q!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Mi(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=$1(q&&q.map(Z=>Object.assign({},Z,{params:Object.assign({},d,Z.params),pathname:_s([g,a.encodeLocation?a.encodeLocation(Z.pathname).pathname:Z.pathname]),pathnameBase:Z.pathnameBase==="/"?g:_s([g,a.encodeLocation?a.encodeLocation(Z.pathnameBase).pathname:Z.pathnameBase])})),l,t,s);return e&&H?j.createElement(ec.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},H):H}function G1(){let i=eI(),e=V1(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",i),c=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:l},"ErrorBoundary")," or"," ",j.createElement("code",{style:l},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),t?j.createElement("pre",{style:a},t):null,c)}var K1=j.createElement(G1,null),Y1=class extends j.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){console.error("React Router caught the following error during render",i,e)}render(){return this.state.error!==void 0?j.createElement(Rs.Provider,{value:this.props.routeContext},j.createElement(Ng.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Q1({routeContext:i,match:e,children:t}){let s=j.useContext($o);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(Rs.Provider,{value:i},t)}function $1(i,e=[],t=null,s=null){if(i==null){if(!t)return null;if(t.errors)i=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let a=i,l=t==null?void 0:t.errors;if(l!=null){let m=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);pt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,m+1))}let c=!1,d=-1;if(t)for(let m=0;m<a.length;m++){let g=a[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=m),g.route.id){let{loaderData:y,errors:T}=t,S=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||S){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((m,g,y)=>{let T,S=!1,O=null,N=null;t&&(T=l&&g.route.id?l[g.route.id]:void 0,O=g.route.errorElement||K1,c&&(d<0&&y===0?(jS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,N=null):d===y&&(S=!0,N=g.route.hydrateFallbackElement||null)));let q=e.concat(a.slice(0,y+1)),H=()=>{let $;return T?$=O:S?$=N:g.route.Component?$=j.createElement(g.route.Component,null):g.route.element?$=g.route.element:$=m,j.createElement(Q1,{match:g,routeContext:{outlet:m,matches:q,isDataRoute:t!=null},children:$})};return t&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?j.createElement(Y1,{location:t.location,revalidation:t.revalidation,component:O,error:T,children:H(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):H()},null)}function Og(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function W1(i){let e=j.useContext($o);return pt(e,Og(i)),e}function X1(i){let e=j.useContext(Uf);return pt(e,Og(i)),e}function Z1(i){let e=j.useContext(Rs);return pt(e,Og(i)),e}function Dg(i){let e=Z1(i),t=e.matches[e.matches.length-1];return pt(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function J1(){return Dg("useRouteId")}function eI(){var s;let i=j.useContext(Ng),e=X1("useRouteError"),t=Dg("useRouteError");return i!==void 0?i:(s=e.errors)==null?void 0:s[t]}function tI(){let{router:i}=W1("useNavigate"),e=Dg("useNavigate"),t=j.useRef(!1);return BS(()=>{t.current=!0}),j.useCallback(async(a,l={})=>{Mi(t.current,US),t.current&&(typeof a=="number"?i.navigate(a):await i.navigate(a,{fromRouteId:e,...l}))},[i,e])}var pT={};function jS(i,e,t){!e&&!pT[i]&&(pT[i]=!0,Mi(!1,t))}j.memo(nI);function nI({routes:i,future:e,state:t}){return zS(i,void 0,t,e)}function HS(i){pt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function iI({basename:i="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1}){pt(!tc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=i.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof t=="string"&&(t=Qo(t));let{pathname:m="/",search:g="",hash:y="",state:T=null,key:S="default"}=t,O=j.useMemo(()=>{let N=Es(m,c);return N==null?null:{location:{pathname:N,search:g,hash:y,state:T,key:S},navigationType:s}},[c,m,g,y,T,S,s]);return Mi(O!=null,`<Router basename="${c}"> is not able to match the URL "${m}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:j.createElement(Vi.Provider,{value:d},j.createElement(ec.Provider,{children:e,value:O}))}function sI({children:i,location:e}){return q1(jm(i),e)}function jm(i,e=[]){let t=[];return j.Children.forEach(i,(s,a)=>{if(!j.isValidElement(s))return;let l=[...e,a];if(s.type===j.Fragment){t.push.apply(t,jm(s.props.children,l));return}pt(s.type===HS,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),pt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=jm(s.props.children,l)),t.push(c)}),t}var Xh="get",Zh="application/x-www-form-urlencoded";function Bf(i){return i!=null&&typeof i.tagName=="string"}function rI(i){return Bf(i)&&i.tagName.toLowerCase()==="button"}function aI(i){return Bf(i)&&i.tagName.toLowerCase()==="form"}function oI(i){return Bf(i)&&i.tagName.toLowerCase()==="input"}function lI(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function uI(i,e){return i.button===0&&(!e||e==="_self")&&!lI(i)}var jh=null;function cI(){if(jh===null)try{new FormData(document.createElement("form"),0),jh=!1}catch{jh=!0}return jh}var hI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ym(i){return i!=null&&!hI.has(i)?(Mi(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zh}"`),null):i}function fI(i,e){let t,s,a,l,c;if(aI(i)){let d=i.getAttribute("action");s=d?Es(d,e):null,t=i.getAttribute("method")||Xh,a=ym(i.getAttribute("enctype"))||Zh,l=new FormData(i)}else if(rI(i)||oI(i)&&(i.type==="submit"||i.type==="image")){let d=i.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=i.getAttribute("formaction")||d.getAttribute("action");if(s=m?Es(m,e):null,t=i.getAttribute("formmethod")||d.getAttribute("method")||Xh,a=ym(i.getAttribute("formenctype"))||ym(d.getAttribute("enctype"))||Zh,l=new FormData(d,i),!cI()){let{name:g,type:y,value:T}=i;if(y==="image"){let S=g?`${g}.`:"";l.append(`${S}x`,"0"),l.append(`${S}y`,"0")}else g&&l.append(g,T)}}else{if(Bf(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Xh,s=null,a=Zh,c=i}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}function xg(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}async function dI(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pI(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function mI(i,e,t){let s=await Promise.all(i.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await dI(l,t);return c.links?c.links():[]}return[]}));return vI(s.flat(1).filter(pI).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function mT(i,e,t,s,a,l){let c=(m,g)=>t[g]?m.route.id!==t[g].route.id:!0,d=(m,g)=>{var y;return t[g].pathname!==m.pathname||((y=t[g].route.path)==null?void 0:y.endsWith("*"))&&t[g].params["*"]!==m.params["*"]};return l==="assets"?e.filter((m,g)=>c(m,g)||d(m,g)):l==="data"?e.filter((m,g)=>{var T;let y=s.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(c(m,g)||d(m,g))return!0;if(m.route.shouldRevalidate){let S=m.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(i,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function gI(i,e,{includeHydrateFallback:t}={}){return _I(i.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function _I(i){return[...new Set(i)]}function yI(i){let e={},t=Object.keys(i).sort();for(let s of t)e[s]=i[s];return e}function vI(i,e){let t=new Set;return new Set(e),i.reduce((s,a)=>{let l=JSON.stringify(yI(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var EI=new Set([100,101,204,205]);function TI(i,e){let t=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return t.pathname==="/"?t.pathname="_root.data":e&&Es(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function FS(){let i=j.useContext($o);return xg(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function SI(){let i=j.useContext(Uf);return xg(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Mg=j.createContext(void 0);Mg.displayName="FrameworkContext";function qS(){let i=j.useContext(Mg);return xg(i,"You must render this element inside a <HydratedRouter> element"),i}function AI(i,e){let t=j.useContext(Mg),[s,a]=j.useState(!1),[l,c]=j.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:g,onMouseLeave:y,onTouchStart:T}=e,S=j.useRef(null);j.useEffect(()=>{if(i==="render"&&c(!0),i==="viewport"){let q=$=>{$.forEach(Z=>{c(Z.isIntersecting)})},H=new IntersectionObserver(q,{threshold:.5});return S.current&&H.observe(S.current),()=>{H.disconnect()}}},[i]),j.useEffect(()=>{if(s){let q=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(q)}}},[s]);let O=()=>{a(!0)},N=()=>{a(!1),c(!1)};return t?i!=="intent"?[l,S,{}]:[l,S,{onFocus:_u(d,O),onBlur:_u(m,N),onMouseEnter:_u(g,O),onMouseLeave:_u(y,N),onTouchStart:_u(T,O)}]:[!1,S,{}]}function _u(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function wI({page:i,...e}){let{router:t}=FS(),s=j.useMemo(()=>DS(t.routes,i,t.basename),[t.routes,i,t.basename]);return s?j.createElement(bI,{page:i,matches:s,...e}):null}function RI(i){let{manifest:e,routeModules:t}=qS(),[s,a]=j.useState([]);return j.useEffect(()=>{let l=!1;return mI(i,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[i,e,t]),s}function bI({page:i,matches:e,...t}){let s=Sa(),{manifest:a,routeModules:l}=qS(),{basename:c}=FS(),{loaderData:d,matches:m}=SI(),g=j.useMemo(()=>mT(i,e,m,a,s,"data"),[i,e,m,a,s]),y=j.useMemo(()=>mT(i,e,m,a,s,"assets"),[i,e,m,a,s]),T=j.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let N=new Set,q=!1;if(e.forEach($=>{var ie;let Z=a.routes[$.route.id];!Z||!Z.hasLoader||(!g.some(le=>le.route.id===$.route.id)&&$.route.id in d&&((ie=l[$.route.id])!=null&&ie.shouldRevalidate)||Z.hasClientLoader?q=!0:N.add($.route.id))}),N.size===0)return[];let H=TI(i,c);return q&&N.size>0&&H.searchParams.set("_routes",e.filter($=>N.has($.route.id)).map($=>$.route.id).join(",")),[H.pathname+H.search]},[c,d,s,a,g,e,i,l]),S=j.useMemo(()=>gI(y,a),[y,a]),O=RI(y);return j.createElement(j.Fragment,null,T.map(N=>j.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...t})),S.map(N=>j.createElement("link",{key:N,rel:"modulepreload",href:N,...t})),O.map(({key:N,link:q})=>j.createElement("link",{key:N,...q})))}function CI(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var GS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{GS&&(window.__reactRouterVersion="7.6.1")}catch{}function II({basename:i,children:e,window:t}){let s=j.useRef();s.current==null&&(s.current=p1({window:t,v5Compat:!0}));let a=s.current,[l,c]=j.useState({action:a.action,location:a.location}),d=j.useCallback(m=>{j.startTransition(()=>c(m))},[c]);return j.useLayoutEffect(()=>a.listen(d),[a,d]),j.createElement(iI,{basename:i,children:e,location:l.location,navigationType:l.action,navigator:a})}var KS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Co=j.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,state:d,target:m,to:g,preventScrollReset:y,viewTransition:T,...S},O){let{basename:N}=j.useContext(Vi),q=typeof g=="string"&&KS.test(g),H,$=!1;if(typeof g=="string"&&q&&(H=g,GS))try{let b=new URL(window.location.href),M=g.startsWith("//")?new URL(b.protocol+g):new URL(g),P=Es(M.pathname,N);M.origin===b.origin&&P!=null?g=P+M.search+M.hash:$=!0}catch{Mi(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Z=j1(g,{relative:a}),[ie,le,se]=AI(s,S),fe=xI(g,{replace:c,state:d,target:m,preventScrollReset:y,relative:a,viewTransition:T});function D(b){e&&e(b),b.defaultPrevented||fe(b)}let R=j.createElement("a",{...S,...se,href:H||Z,onClick:$||l?e:D,ref:CI(O,le),target:m,"data-discover":!q&&t==="render"?"true":void 0});return ie&&!q?j.createElement(j.Fragment,null,R,j.createElement(wI,{page:Z})):R});Co.displayName="Link";var NI=j.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:d,children:m,...g},y){let T=nc(c,{relative:g.relative}),S=Sa(),O=j.useContext(Uf),{navigator:N,basename:q}=j.useContext(Vi),H=O!=null&&VI(T)&&d===!0,$=N.encodeLocation?N.encodeLocation(T).pathname:T.pathname,Z=S.pathname,ie=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;t||(Z=Z.toLowerCase(),ie=ie?ie.toLowerCase():null,$=$.toLowerCase()),ie&&q&&(ie=Es(ie,q)||ie);const le=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let se=Z===$||!a&&Z.startsWith($)&&Z.charAt(le)==="/",fe=ie!=null&&(ie===$||!a&&ie.startsWith($)&&ie.charAt($.length)==="/"),D={isActive:se,isPending:fe,isTransitioning:H},R=se?e:void 0,b;typeof s=="function"?b=s(D):b=[s,se?"active":null,fe?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let M=typeof l=="function"?l(D):l;return j.createElement(Co,{...g,"aria-current":R,className:b,ref:y,style:M,to:c,viewTransition:d},typeof m=="function"?m(D):m)});NI.displayName="NavLink";var OI=j.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=Xh,action:d,onSubmit:m,relative:g,preventScrollReset:y,viewTransition:T,...S},O)=>{let N=PI(),q=LI(d,{relative:g}),H=c.toLowerCase()==="get"?"get":"post",$=typeof d=="string"&&KS.test(d),Z=ie=>{if(m&&m(ie),ie.defaultPrevented)return;ie.preventDefault();let le=ie.nativeEvent.submitter,se=(le==null?void 0:le.getAttribute("formmethod"))||c;N(le||ie.currentTarget,{fetcherKey:e,method:se,navigate:t,replace:a,state:l,relative:g,preventScrollReset:y,viewTransition:T})};return j.createElement("form",{ref:O,method:H,action:q,onSubmit:s?m:Z,...S,"data-discover":!$&&i==="render"?"true":void 0})});OI.displayName="Form";function DI(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function YS(i){let e=j.useContext($o);return pt(e,DI(i)),e}function xI(i,{target:e,replace:t,state:s,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=H1(),m=Sa(),g=nc(i,{relative:l});return j.useCallback(y=>{if(uI(y,e)){y.preventDefault();let T=t!==void 0?t:ju(m)===ju(g);d(i,{replace:T,state:s,preventScrollReset:a,relative:l,viewTransition:c})}},[m,d,g,t,s,e,i,a,l,c])}var MI=0,kI=()=>`__${String(++MI)}__`;function PI(){let{router:i}=YS("useSubmit"),{basename:e}=j.useContext(Vi),t=J1();return j.useCallback(async(s,a={})=>{let{action:l,method:c,encType:d,formData:m,body:g}=fI(s,e);if(a.navigate===!1){let y=a.fetcherKey||kI();await i.fetch(y,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:m,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await i.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:m,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[i,e,t])}function LI(i,{relative:e}={}){let{basename:t}=j.useContext(Vi),s=j.useContext(Rs);pt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...nc(i||".",{relative:e})},c=Sa();if(i==null){l.search=c.search;let d=new URLSearchParams(l.search),m=d.getAll("index");if(m.some(y=>y==="")){d.delete("index"),m.filter(T=>T).forEach(T=>d.append("index",T));let y=d.toString();l.search=y?`?${y}`:""}}return(!i||i===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:_s([t,l.pathname])),ju(l)}function VI(i,e={}){let t=j.useContext(VS);pt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=YS("useViewTransitionState"),a=nc(i,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Es(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Es(t.nextLocation.pathname,s)||t.nextLocation.pathname;return uf(a.pathname,c)!=null||uf(a.pathname,l)!=null}[...EI];const lr=({className:i,content:e,func:t,submit:s,icon:a,change:l,element:c})=>K.jsxs("button",{className:`${i}`,onSubmit:d=>{s(d)},onClick:()=>{t()},children:[a,e,c]}),UI=()=>{const{pages:i,setPages:e,hideSideBar:t,setHideSideBar:s}=j.useContext(cd);function a(l){e(c=>c.map((d,m)=>m==l?{...d,ind:!0}:{...d,ind:!1}))}return j.useEffect(()=>{console.log(t)},[t]),K.jsxs(K.Fragment,{children:[K.jsxs("div",{className:ot.navBarWrapper,children:[K.jsxs("div",{className:ot.left,children:[K.jsx("img",{src:"./web-icon.png"}),K.jsx("h1",{className:ot.title,children:"Acad"})]}),K.jsx("div",{className:ot.mid,children:K.jsx("ul",{children:i==null?void 0:i.map((l,c)=>K.jsxs(Co,{to:l.path,className:l.ind?`${ot.ind} ${ot.Links}`:`${ot.notInd} ${ot.Links}`,onClick:()=>a(c),children:[K.jsxs("span",{className:ot.content,children:[l.icon,l.name]}),K.jsx("span",{className:ot.indicator})]},l.name))})}),K.jsxs("div",{className:ot.right,children:[K.jsx("button",{className:ot.authButts,children:K.jsx(Co,{to:"/Acad/SignIn",className:ot.Links,children:"Sign In"})}),K.jsx("button",{className:ot.authButts,children:K.jsx(Co,{to:"/Acad/SignUp",className:ot.Links,children:"Sign Up"})}),K.jsx("button",{className:ot.HamburgerButt,onClick:()=>{s(!1)},children:K.jsx("i",{className:"fa fa-list-ul"})})]})]}),K.jsx("div",{className:t==!1?ot.sidebar:ot.hideSideBar,children:K.jsxs("ul",{className:t==!1?ot.NavLinks:ot.hideNavLinks,children:[K.jsx(lr,{className:ot.HamburgerButt,func:()=>{s(!t)},content:K.jsx("i",{className:"fa fa-list-ul"})}),i.map((l,c)=>K.jsxs(Co,{to:l.path,onClick:()=>{a(l)},className:l.ind?`${ot.Links} ${ot.indicated}`:`${ot.Links} ${ot.notIndicated}`,children:[l.icon,K.jsxs("span",{children:[l.name,K.jsx("span",{className:ot.indication})]})]},l.path))]})})]})},BI="_signUpWrapper_iqkbo_10",zI="_goToStartingPage_iqkbo_21",jI="_topArc_iqkbo_33",HI="_form_iqkbo_46",FI="_userNameCon_iqkbo_53",qI="_passwordCon_iqkbo_54",GI="_moreActions_iqkbo_61",KI="_signInButton_iqkbo_117",YI="_otherPlatformsWrapper_iqkbo_133",QI="_iconsWrapper_iqkbo_144",$I="_wrapper_iqkbo_150",Xt={signUpWrapper:BI,goToStartingPage:zI,topArc:jI,form:HI,userNameCon:FI,passwordCon:qI,moreActions:GI,signInButton:KI,otherPlatformsWrapper:YI,iconsWrapper:QI,wrapper:$I},WI=()=>{};var gT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=function(i,e){if(!i)throw Wo(e)},Wo=function(i){return new Error("Firebase Database ("+QS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},XI=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],d=i[t++],m=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const l=i[t++],c=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},kg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,d=c?i[a+1]:0,m=a+2<i.length,g=m?i[a+2]:0,y=l>>2,T=(l&3)<<4|d>>4;let S=(d&15)<<2|g>>6,O=g&63;m||(O=64,c||(S=64)),s.push(t[y],t[T],t[S],t[O])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray($S(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):XI(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],d=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new ZI;const S=l<<2|d>>4;if(s.push(S),g!==64){const O=d<<4&240|g>>2;if(s.push(O),T!==64){const N=g<<6&192|T;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class ZI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WS=function(i){const e=$S(i);return kg.encodeByteArray(e,!0)},cf=function(i){return WS(i).replace(/\./g,"")},hf=function(i){try{return kg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(i){return XS(void 0,i)}function XS(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!eN(t)||(i[t]=XS(i[t],e[t]));return i}function eN(i){return i!=="__proto__"}/**
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
 */function tN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nN=()=>tN().__FIREBASE_DEFAULTS__,iN=()=>{if(typeof process>"u"||typeof gT>"u")return;const i=gT.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},sN=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&hf(i[1]);return e&&JSON.parse(e)},zf=()=>{try{return WI()||nN()||iN()||sN()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},ZS=i=>{var e,t;return(t=(e=zf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},JS=i=>{const e=ZS(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},eA=()=>{var i;return(i=zf())===null||i===void 0?void 0:i.config},tA=i=>{var e;return(e=zf())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Xo(i){return i.endsWith(".cloudworkstations.dev")}async function Lg(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function nA(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[cf(JSON.stringify(t)),cf(JSON.stringify(c)),""].join(".")}const Du={};function rN(){const i={prod:[],emulator:[]};for(const e of Object.keys(Du))Du[e]?i.emulator.push(e):i.prod.push(e);return i}function aN(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let _T=!1;function Vg(i,e){if(typeof window>"u"||typeof document>"u"||!Xo(window.location.host)||Du[i]===e||Du[i]||_T)return;Du[i]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",l=rN().prod.length>0;function c(){const S=document.getElementById(s);S&&S.remove()}function d(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function m(S,O){S.setAttribute("width","24"),S.setAttribute("id",O),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{_T=!0,c()},S}function y(S,O){S.setAttribute("id",O),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=aN(s),O=t("text"),N=document.getElementById(O)||document.createElement("span"),q=t("learnmore"),H=document.getElementById(q)||document.createElement("a"),$=t("preprendIcon"),Z=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ie=S.element;d(ie),y(H,q);const le=g();m(Z,$),ie.append(Z,N,H,le),document.body.appendChild(ie)}l?(N.innerText="Preview backend disconnected.",Z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ug(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function oN(){var i;const e=(i=zf())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uN(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function iA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cN(){const i=fn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function hN(){return QS.NODE_ADMIN===!0}function fN(){return!oN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dN(){try{return typeof indexedDB=="object"}catch{return!1}}function pN(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN="FirebaseError";class Ui extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=mN,Object.setPrototypeOf(this,Ui.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ic.prototype.create)}}class ic{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?gN(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Ui(a,d,s)}}function gN(i,e){return i.replace(_N,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const _N=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(i){return JSON.parse(i)}function Jt(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=function(i){let e={},t={},s={},a="";try{const l=i.split(".");e=Hu(hf(l[0])||""),t=Hu(hf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},yN=function(i){const e=sA(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},vN=function(i){const e=sA(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Vo(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Hm(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ff(i,e,t){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(t,i[a],a,i));return s}function ma(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=i[a],c=e[a];if(yT(l)&&yT(c)){if(!ma(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function yT(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ru(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function bu(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const S=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(S<<1|S>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],m=this.chain_[4],g,y;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):T<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const S=(a<<5|a>>>27)+g+m+y+s[T]&4294967295;m=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=S}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function TN(i,e){const t=new SN(i,e);return t.subscribe.bind(t)}class SN{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");AN(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=vm),a.error===void 0&&(a.error=vm),a.complete===void 0&&(a.complete=vm);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AN(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function vm(){}function wN(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,ce(s<i.length,"Surrogate pair missing trail surrogate.");const c=i.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},jf=function(i){let e=0;for(let t=0;t<i.length;t++){const s=i.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Bi(i){return i&&i._delegate?i._delegate:i}class Ts{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const la="[DEFAULT]";/**
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
 */class bN{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Pg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IN(e))try{this.getOrInitializeService({instanceIdentifier:la})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=la){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=la){return this.instances.has(e)}getOptions(e=la){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:CN(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=la){return this.component?this.component.multipleInstances?e:la:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CN(i){return i===la?void 0:i}function IN(i){return i.instantiationMode==="EAGER"}/**
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
 */class NN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bN(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Me||(Me={}));const ON={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},DN=Me.INFO,xN={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},MN=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=xN[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hf{constructor(e){this.name=e,this._logLevel=DN,this._logHandler=MN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ON[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const kN=(i,e)=>e.some(t=>i instanceof t);let vT,ET;function PN(){return vT||(vT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LN(){return ET||(ET=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rA=new WeakMap,Fm=new WeakMap,aA=new WeakMap,Em=new WeakMap,Bg=new WeakMap;function VN(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(ur(i.result)),a()},c=()=>{s(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&rA.set(t,i)}).catch(()=>{}),Bg.set(e,i),e}function UN(i){if(Fm.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});Fm.set(i,e)}let qm={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Fm.get(i);if(e==="objectStoreNames")return i.objectStoreNames||aA.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ur(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function BN(i){qm=i(qm)}function zN(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Tm(this),e,...t);return aA.set(s,e.sort?e.sort():[e]),ur(s)}:LN().includes(i)?function(...e){return i.apply(Tm(this),e),ur(rA.get(this))}:function(...e){return ur(i.apply(Tm(this),e))}}function jN(i){return typeof i=="function"?zN(i):(i instanceof IDBTransaction&&UN(i),kN(i,PN())?new Proxy(i,qm):i)}function ur(i){if(i instanceof IDBRequest)return VN(i);if(Em.has(i))return Em.get(i);const e=jN(i);return e!==i&&(Em.set(i,e),Bg.set(e,i)),e}const Tm=i=>Bg.get(i);function HN(i,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),d=ur(c);return s&&c.addEventListener("upgradeneeded",m=>{s(ur(c.result),m.oldVersion,m.newVersion,ur(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),d.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const FN=["get","getKey","getAll","getAllKeys","count"],qN=["put","add","delete","clear"],Sm=new Map;function TT(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Sm.get(e))return Sm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=qN.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||FN.includes(t)))return;const l=async function(c,...d){const m=this.transaction(c,a?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&m.done]))[0]};return Sm.set(e,l),l}BN(i=>({...i,get:(e,t,s)=>TT(e,t)||i.get(e,t,s),has:(e,t)=>!!TT(e,t)||i.has(e,t)}));/**
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
 */class GN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(KN(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function KN(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gm="@firebase/app",ST="0.13.0";/**
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
 */const Ss=new Hf("@firebase/app"),YN="@firebase/app-compat",QN="@firebase/analytics-compat",$N="@firebase/analytics",WN="@firebase/app-check-compat",XN="@firebase/app-check",ZN="@firebase/auth",JN="@firebase/auth-compat",eO="@firebase/database",tO="@firebase/data-connect",nO="@firebase/database-compat",iO="@firebase/functions",sO="@firebase/functions-compat",rO="@firebase/installations",aO="@firebase/installations-compat",oO="@firebase/messaging",lO="@firebase/messaging-compat",uO="@firebase/performance",cO="@firebase/performance-compat",hO="@firebase/remote-config",fO="@firebase/remote-config-compat",dO="@firebase/storage",pO="@firebase/storage-compat",mO="@firebase/firestore",gO="@firebase/ai",_O="@firebase/firestore-compat",yO="firebase",vO="11.8.0";/**
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
 */const Km="[DEFAULT]",EO={[Gm]:"fire-core",[YN]:"fire-core-compat",[$N]:"fire-analytics",[QN]:"fire-analytics-compat",[XN]:"fire-app-check",[WN]:"fire-app-check-compat",[ZN]:"fire-auth",[JN]:"fire-auth-compat",[eO]:"fire-rtdb",[tO]:"fire-data-connect",[nO]:"fire-rtdb-compat",[iO]:"fire-fn",[sO]:"fire-fn-compat",[rO]:"fire-iid",[aO]:"fire-iid-compat",[oO]:"fire-fcm",[lO]:"fire-fcm-compat",[uO]:"fire-perf",[cO]:"fire-perf-compat",[hO]:"fire-rc",[fO]:"fire-rc-compat",[dO]:"fire-gcs",[pO]:"fire-gcs-compat",[mO]:"fire-fst",[_O]:"fire-fst-compat",[gO]:"fire-vertex","fire-js":"fire-js",[yO]:"fire-js-all"};/**
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
 */const df=new Map,TO=new Map,Ym=new Map;function AT(i,e){try{i.container.addComponent(e)}catch(t){Ss.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function pr(i){const e=i.name;if(Ym.has(e))return Ss.debug(`There were multiple attempts to register component ${e}.`),!1;Ym.set(e,i);for(const t of df.values())AT(t,i);for(const t of TO.values())AT(t,i);return!0}function Ff(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Sn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const SO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cr=new ic("app","Firebase",SO);/**
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
 */class AO{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
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
 */const Sr=vO;function zg(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Km,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw cr.create("bad-app-name",{appName:String(a)});if(t||(t=eA()),!t)throw cr.create("no-options");const l=df.get(a);if(l){if(ma(t,l.options)&&ma(s,l.config))return l;throw cr.create("duplicate-app",{appName:a})}const c=new NN(a);for(const m of Ym.values())c.addComponent(m);const d=new AO(t,s,c);return df.set(a,d),d}function jg(i=Km){const e=df.get(i);if(!e&&i===Km&&eA())return zg();if(!e)throw cr.create("no-app",{appName:i});return e}function $n(i,e,t){var s;let a=(s=EO[i])!==null&&s!==void 0?s:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ss.warn(d.join(" "));return}pr(new Ts(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const wO="firebase-heartbeat-database",RO=1,Fu="firebase-heartbeat-store";let Am=null;function oA(){return Am||(Am=HN(wO,RO,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Fu)}catch(t){console.warn(t)}}}}).catch(i=>{throw cr.create("idb-open",{originalErrorMessage:i.message})})),Am}async function bO(i){try{const t=(await oA()).transaction(Fu),s=await t.objectStore(Fu).get(lA(i));return await t.done,s}catch(e){if(e instanceof Ui)Ss.warn(e.message);else{const t=cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ss.warn(t.message)}}}async function wT(i,e){try{const s=(await oA()).transaction(Fu,"readwrite");await s.objectStore(Fu).put(e,lA(i)),await s.done}catch(t){if(t instanceof Ui)Ss.warn(t.message);else{const s=cr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ss.warn(s.message)}}}function lA(i){return`${i.name}!${i.options.appId}`}/**
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
 */const CO=1024,IO=30;class NO{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new DO(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=RT();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>IO){const c=xO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ss.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=RT(),{heartbeatsToSend:s,unsentEntries:a}=OO(this._heartbeatsCache.heartbeats),l=cf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ss.warn(t),""}}}function RT(){return new Date().toISOString().substring(0,10)}function OO(i,e=CO){const t=[];let s=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),bT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),bT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class DO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dN()?pN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bO(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return wT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return wT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function bT(i){return cf(JSON.stringify({version:2,heartbeats:i})).length}function xO(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function MO(i){pr(new Ts("platform-logger",e=>new GN(e),"PRIVATE")),pr(new Ts("heartbeat",e=>new NO(e),"PRIVATE")),$n(Gm,ST,i),$n(Gm,ST,"esm2017"),$n("fire-js","")}MO("");var kO="firebase",PO="11.8.1";/**
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
 */$n(kO,PO,"app");var CT={};const IT="@firebase/database",NT="1.0.19";/**
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
 */let uA="";function LO(i){uA=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Jt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Hu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return bs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new VO(e)}}catch{}return new UO},ca=cA("localStorage"),BO=cA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new Hf("@firebase/database"),zO=function(){let i=1;return function(){return i++}}(),hA=function(i){const e=RN(i),t=new EN;t.update(e);const s=t.digest();return kg.encodeByteArray(s)},sc=function(...i){let e="";for(let t=0;t<i.length;t++){const s=i[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=sc.apply(null,s):typeof s=="object"?e+=Jt(s):e+=s,e+=" "}return e};let xu=null,OT=!0;const jO=function(i,e){ce(!0,"Can't turn on custom loggers persistently."),Oo.logLevel=Me.VERBOSE,xu=Oo.log.bind(Oo)},ln=function(...i){if(OT===!0&&(OT=!1,xu===null&&BO.get("logging_enabled")===!0&&jO()),xu){const e=sc.apply(null,i);xu(e)}},rc=function(i){return function(...e){ln(i,...e)}},Qm=function(...i){const e="FIREBASE INTERNAL ERROR: "+sc(...i);Oo.error(e)},ga=function(...i){const e=`FIREBASE FATAL ERROR: ${sc(...i)}`;throw Oo.error(e),new Error(e)},kn=function(...i){const e="FIREBASE WARNING: "+sc(...i);Oo.warn(e)},HO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&kn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fA=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},FO=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Uo="[MIN_NAME]",_a="[MAX_NAME]",Jo=function(i,e){if(i===e)return 0;if(i===Uo||e===_a)return-1;if(e===Uo||i===_a)return 1;{const t=DT(i),s=DT(e);return t!==null?s!==null?t-s===0?i.length-e.length:t-s:-1:s!==null?1:i<e?-1:1}},qO=function(i,e){return i===e?0:i<e?-1:1},yu=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+Jt(e))},Hg=function(i){if(typeof i!="object"||i===null)return Jt(i);const e=[];for(const s in i)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Jt(e[s]),t+=":",t+=Hg(i[e[s]]);return t+="}",t},dA=function(i,e){const t=i.length;if(t<=e)return[i];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(i.substring(a,t)):s.push(i.substring(a,a+e));return s};function Wn(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const pA=function(i){ce(!fA(i),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,m;i===0?(l=0,c=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(i)/Math.LN2),s),l=d+s,c=Math.round(i*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(i/Math.pow(2,1-s-t))));const g=[];for(m=t;m;m-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(m=e;m;m-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let T="";for(m=0;m<64;m+=8){let S=parseInt(y.substr(m,8),2).toString(16);S.length===1&&(S="0"+S),T=T+S}return T.toLowerCase()},GO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},KO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},YO=new RegExp("^-?(0*)\\d{1,10}$"),QO=-2147483648,$O=2147483647,DT=function(i){if(YO.test(i)){const e=Number(i);if(e>=QO&&e<=$O)return e}return null},ac=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw kn("Exception was thrown by user callback.",t),e},Math.floor(0))}},WO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Mu=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class XO{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Sn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){kn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ln("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',kn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="5",mA="v",gA="s",_A="r",yA="f",vA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,EA="ls",TA="p",$m="ac",SA="websocket",AA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e,t,s,a,l=!1,c="",d=!1,m=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ca.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ca.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function eD(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function wA(i,e,t){ce(typeof e=="string","typeof type must == string"),ce(typeof t=="object","typeof params must == object");let s;if(e===SA)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===AA)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eD(i)&&(t.ns=i.namespace);const a=[];return Wn(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(){this.counters_={}}incrementCounter(e,t=1){bs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return JI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm={},Rm={};function qg(i){const e=i.toString();return wm[e]||(wm[e]=new tD),wm[e]}function nD(i,e){const t=i.toString();return Rm[t]||(Rm[t]=e()),Rm[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&ac(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="start",sD="close",rD="pLPCommand",aD="pRTLPCB",RA="id",bA="pw",CA="ser",oD="cb",lD="seg",uD="ts",cD="d",hD="dframe",IA=1870,NA=30,fD=IA-NA,dD=25e3,pD=3e4;class Io{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=rc(e),this.stats_=qg(t),this.urlFn=m=>(this.appCheckToken&&(m[$m]=this.appCheckToken),wA(t,AA,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new iD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pD)),FO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gg((...l)=>{const[c,d,m,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===xT)this.id=d,this.password=m;else if(c===sD)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[xT]="t",s[CA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[oD]=this.scriptTagHolder.uniqueCallbackIdentifier),s[mA]=Fg,this.transportSessionId&&(s[gA]=this.transportSessionId),this.lastSessionId&&(s[EA]=this.lastSessionId),this.applicationId&&(s[TA]=this.applicationId),this.appCheckToken&&(s[$m]=this.appCheckToken),typeof location<"u"&&location.hostname&&vA.test(location.hostname)&&(s[_A]=yA);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Io.forceAllow_=!0}static forceDisallow(){Io.forceDisallow_=!0}static isAvailable(){return Io.forceAllow_?!0:!Io.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!GO()&&!KO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=WS(t),a=dA(s,fD);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[hD]="t",s[RA]=e,s[bA]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Jt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Gg{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zO(),window[rD+this.uniqueCallbackIdentifier]=e,window[aD+this.uniqueCallbackIdentifier]=t,this.myIFrame=Gg.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){ln("frame writing exception"),d.stack&&ln(d.stack),ln(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ln("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[RA]=this.myID,e[bA]=this.myPW,e[CA]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+NA+s.length<=IA;){const c=this.pendingSegs.shift();s=s+"&"+lD+a+"="+c.seg+"&"+uD+a+"="+c.ts+"&"+cD+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(dD)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ln("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=16384,gD=45e3;let pf=null;typeof MozWebSocket<"u"?pf=MozWebSocket:typeof WebSocket<"u"&&(pf=WebSocket);class si{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=rc(this.connId),this.stats_=qg(t),this.connURL=si.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[mA]=Fg,typeof location<"u"&&location.hostname&&vA.test(location.hostname)&&(c[_A]=yA),t&&(c[gA]=t),s&&(c[EA]=s),a&&(c[$m]=a),l&&(c[TA]=l),wA(e,SA,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ca.set("previous_websocket_failure",!0);try{let s;hN(),this.mySock=new pf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){si.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&pf!==null&&!si.forceDisallow_}static previouslyFailed(){return ca.isInMemoryStorage||ca.get("previous_websocket_failure")===!0}markConnectionHealthy(){ca.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Hu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ce(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=dA(t,mD);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gD))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}si.responsesRequiredToBeHealthy=2;si.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{static get ALL_TRANSPORTS(){return[Io,si]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=si&&si.isAvailable();let s=t&&!si.previouslyFailed();if(e.webSocketOnly&&(t||kn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[si];else{const a=this.transports_=[];for(const l of qu.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);qu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=6e4,yD=5e3,vD=10*1024,ED=100*1024,bm="t",MT="d",TD="s",kT="r",SD="e",PT="o",LT="a",VT="n",UT="p",AD="h";class wD{constructor(e,t,s,a,l,c,d,m,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=rc("c:"+this.id+":"),this.transportManager_=new qu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Mu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ED?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bm in e){const t=e[bm];t===LT?this.upgradeIfSecondaryHealthy_():t===kT?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===PT&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=yu("t",e),s=yu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:UT,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:LT,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:VT,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=yu("t",e),s=yu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=yu(bm,e);if(MT in e){const s=e[MT];if(t===AD){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===VT){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===TD?this.onConnectionShutdown_(s):t===kT?this.onReset_(s):t===SD?Qm("Server Error: "+s):t===PT?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Fg!==s&&kn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Mu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_D))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Mu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:UT,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ca.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.allowedEvents_=e,this.listeners_={},ce(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ce(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf extends DA{static getInstance(){return new mf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ug()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ce(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=32,zT=768;class ct{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function nt(){return new ct("")}function Be(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function mr(i){return i.pieces_.length-i.pieceNum_}function ut(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new ct(i.pieces_,e)}function xA(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function RD(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function MA(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function kA(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new ct(e,0)}function Gt(i,e){const t=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)t.push(i.pieces_[s]);if(e instanceof ct)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new ct(t,0)}function ke(i){return i.pieceNum_>=i.pieces_.length}function Qn(i,e){const t=Be(i),s=Be(e);if(t===null)return e;if(t===s)return Qn(ut(i),ut(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function PA(i,e){if(mr(i)!==mr(e))return!1;for(let t=i.pieceNum_,s=e.pieceNum_;t<=i.pieces_.length;t++,s++)if(i.pieces_[t]!==e.pieces_[s])return!1;return!0}function ri(i,e){let t=i.pieceNum_,s=e.pieceNum_;if(mr(i)>mr(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class bD{constructor(e,t){this.errorPrefix_=t,this.parts_=MA(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=jf(this.parts_[s]);LA(this)}}function CD(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=jf(e),LA(i)}function ID(i){const e=i.parts_.pop();i.byteLength_-=jf(e),i.parts_.length>0&&(i.byteLength_-=1)}function LA(i){if(i.byteLength_>zT)throw new Error(i.errorPrefix_+"has a key path longer than "+zT+" bytes ("+i.byteLength_+").");if(i.parts_.length>BT)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+BT+") or object contains a cycle "+ua(i))}function ua(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg extends DA{static getInstance(){return new Kg}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ce(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=1e3,ND=60*5*1e3,jT=30*1e3,OD=1.3,DD=3e4,xD="server_kill",HT=3;class ys extends OA{constructor(e,t,s,a,l,c,d,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=m,this.id=ys.nextPersistentConnectionId_++,this.log_=rc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vu,this.maxReconnectDelay_=ND,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Kg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(Jt(l)),ce(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Pg,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),ce(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ce(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const m=d.d,g=d.s;ys.warnOnListenWarnings_(m,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&bs(e,"w")){const s=Vo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();kn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=yN(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),ce(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Jt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Qm("Unrecognized action received from server: "+Jt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ce(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>DD&&(this.reconnectDelay_=vu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*OD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+ys.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const m=function(){d?d.close():(c=!0,s())},g=function(T){ce(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:m,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,S]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?ln("getToken() completed but was canceled"):(ln("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=S&&S.token,d=new wD(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,O=>{kn(O+" ("+this.repoInfo_.toString()+")"),this.interrupt(xD)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&kn(T),m())}}}interrupt(e){ln("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ln("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hm(this.interruptReasons_)&&(this.reconnectDelay_=vu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Hg(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new ct(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){ln("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=HT&&(this.reconnectDelay_=jT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ln("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=HT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+uA.replace(/\./g,"-")]=1,Ug()?e["framework.cordova"]=1:iA()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mf.getInstance().currentlyOnline();return Hm(this.interruptReasons_)&&e}}ys.nextPersistentConnectionId_=0;ys.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ze(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ze(Uo,e),a=new ze(Uo,t);return this.compare(s,a)!==0}minPost(){return ze.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh;class VA extends qf{static get __EMPTY_NODE(){return Hh}static set __EMPTY_NODE(e){Hh=e}compare(e,t){return Jo(e.name,t.name)}isDefinedOn(e){throw Wo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ze.MIN}maxPost(){return new ze(_a,Hh)}makePost(e,t){return ce(typeof e=="string","KeyIndex indexValue must always be a string."),new ze(e,Hh)}toString(){return".key"}}const Do=new VA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fh=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Mn=class Cu{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Cu.RED,this.left=a??Ni.EMPTY_NODE,this.right=l??Ni.EMPTY_NODE}copy(e,t,s,a,l){return new Cu(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ni.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Ni.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Cu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Cu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Mn.RED=!0;Mn.BLACK=!1;class MD{copy(e,t,s,a,l){return this}insert(e,t,s){return new Mn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Ni=class Jh{constructor(e,t=Jh.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Jh(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Mn.BLACK,null,null))}remove(e){return new Jh(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Mn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Fh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Fh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Fh(this.root_,null,this.comparator_,!0,e)}};Ni.EMPTY_NODE=new MD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(i,e){return Jo(i.name,e.name)}function Yg(i,e){return Jo(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wm;function PD(i){Wm=i}const UA=function(i){return typeof i=="number"?"number:"+pA(i):"string:"+i},BA=function(i){if(i.isLeafNode()){const e=i.val();ce(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bs(e,".sv"),"Priority must be a string or number.")}else ce(i===Wm||i.isEmpty(),"priority of unexpected type.");ce(i===Wm||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FT;class Ft{static set __childrenNodeConstructor(e){FT=e}static get __childrenNodeConstructor(){return FT}constructor(e,t=Ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ce(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),BA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ft(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ke(e)?this:Be(e)===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Be(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(ce(s!==".priority"||mr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(ut(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+UA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=pA(this.value_):e+=this.value_,this.lazyHash_=hA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ft.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ft.__childrenNodeConstructor?-1:(ce(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Ft.VALUE_TYPE_ORDER.indexOf(t),l=Ft.VALUE_TYPE_ORDER.indexOf(s);return ce(a>=0,"Unknown leaf type: "+t),ce(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zA,jA;function LD(i){zA=i}function VD(i){jA=i}class UD extends qf{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Jo(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ze.MIN}maxPost(){return new ze(_a,new Ft("[PRIORITY-POST]",jA))}makePost(e,t){const s=zA(e);return new ze(t,new Ft("[PRIORITY-POST]",s))}toString(){return".priority"}}const hn=new UD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD=Math.log(2);class zD{constructor(e){const t=l=>parseInt(Math.log(l)/BD,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gf=function(i,e,t,s){i.sort(e);const a=function(m,g){const y=g-m;let T,S;if(y===0)return null;if(y===1)return T=i[m],S=t?t(T):T,new Mn(S,T.node,Mn.BLACK,null,null);{const O=parseInt(y/2,10)+m,N=a(m,O),q=a(O+1,g);return T=i[O],S=t?t(T):T,new Mn(S,T.node,Mn.BLACK,N,q)}},l=function(m){let g=null,y=null,T=i.length;const S=function(N,q){const H=T-N,$=T;T-=N;const Z=a(H+1,$),ie=i[H],le=t?t(ie):ie;O(new Mn(le,ie.node,q,null,Z))},O=function(N){g?(g.left=N,g=N):(y=N,g=N)};for(let N=0;N<m.count;++N){const q=m.nextBitIsOne(),H=Math.pow(2,m.count-(N+1));q?S(H,Mn.BLACK):(S(H,Mn.BLACK),S(H,Mn.RED))}return y},c=new zD(i.length),d=l(c);return new Ni(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cm;const To={};class ps{static get Default(){return ce(To&&hn,"ChildrenNode.ts has not been loaded"),Cm=Cm||new ps({".priority":To},{".priority":hn}),Cm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Vo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ni?t:null}hasIndex(e){return bs(this.indexSet_,e.toString())}addIndex(e,t){ce(e!==Do,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(ze.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=gf(s,e.getCompare()):d=To;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const y=Object.assign({},this.indexes_);return y[m]=d,new ps(y,g)}addToIndexes(e,t){const s=ff(this.indexes_,(a,l)=>{const c=Vo(this.indexSet_,l);if(ce(c,"Missing index implementation for "+l),a===To)if(c.isDefinedOn(e.node)){const d=[],m=t.getIterator(ze.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&d.push(g),g=m.getNext();return d.push(e),gf(d,c.getCompare())}else return To;else{const d=t.get(e.name);let m=a;return d&&(m=m.remove(new ze(e.name,d))),m.insert(e,e.node)}});return new ps(s,this.indexSet_)}removeFromIndexes(e,t){const s=ff(this.indexes_,a=>{if(a===To)return a;{const l=t.get(e.name);return l?a.remove(new ze(e.name,l)):a}});return new ps(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu;class Ye{static get EMPTY_NODE(){return Eu||(Eu=new Ye(new Ni(Yg),null,ps.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&BA(this.priorityNode_),this.children_.isEmpty()&&ce(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Eu}updatePriority(e){return this.children_.isEmpty()?this:new Ye(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Eu:t}}getChild(e){const t=Be(e);return t===null?this:this.getImmediateChild(t).getChild(ut(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ce(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ze(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Eu:this.priorityNode_;return new Ye(a,c,l)}}updateChild(e,t){const s=Be(e);if(s===null)return t;{ce(Be(e)!==".priority"||mr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(ut(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(hn,(c,d)=>{t[c]=d.val(e),s++,l&&Ye.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+UA(this.getPriority().val())+":"),this.forEachChild(hn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":hA(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new ze(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ze(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ze(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,ze.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,ze.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===oc?-1:0}withIndex(e){if(e===Do||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ye(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Do||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(hn),a=t.getIterator(hn);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Do?null:this.indexMap_.get(e.toString())}}Ye.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jD extends Ye{constructor(){super(new Ni(Yg),Ye.EMPTY_NODE,ps.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ye.EMPTY_NODE}isEmpty(){return!1}}const oc=new jD;Object.defineProperties(ze,{MIN:{value:new ze(Uo,Ye.EMPTY_NODE)},MAX:{value:new ze(_a,oc)}});VA.__EMPTY_NODE=Ye.EMPTY_NODE;Ft.__childrenNodeConstructor=Ye;PD(oc);VD(oc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=!0;function un(i,e=null){if(i===null)return Ye.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),ce(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new Ft(t,un(e))}if(!(i instanceof Array)&&HD){const t=[];let s=!1;if(Wn(i,(c,d)=>{if(c.substring(0,1)!=="."){const m=un(d);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),t.push(new ze(c,m)))}}),t.length===0)return Ye.EMPTY_NODE;const l=gf(t,kD,c=>c.name,Yg);if(s){const c=gf(t,hn.getCompare());return new Ye(l,un(e),new ps({".priority":c},{".priority":hn}))}else return new Ye(l,un(e),ps.Default)}else{let t=Ye.EMPTY_NODE;return Wn(i,(s,a)=>{if(bs(i,s)&&s.substring(0,1)!=="."){const l=un(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(un(e))}}LD(un);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD extends qf{constructor(e){super(),this.indexPath_=e,ce(!ke(e)&&Be(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Jo(e.name,t.name):l}makePost(e,t){const s=un(e),a=Ye.EMPTY_NODE.updateChild(this.indexPath_,s);return new ze(t,a)}maxPost(){const e=Ye.EMPTY_NODE.updateChild(this.indexPath_,oc);return new ze(_a,e)}toString(){return MA(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD extends qf{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Jo(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ze.MIN}maxPost(){return ze.MAX}makePost(e,t){const s=un(e);return new ze(t,s)}toString(){return".value"}}const GD=new qD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(i){return{type:"value",snapshotNode:i}}function YD(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function QD(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function qT(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function $D(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=hn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ce(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ce(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Uo}hasEnd(){return this.endSet_}getIndexEndValue(){return ce(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ce(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_a}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ce(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===hn}copy(){const e=new Qg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function GT(i){const e={};if(i.isDefault())return e;let t;if(i.index_===hn?t="$priority":i.index_===GD?t="$value":i.index_===Do?t="$key":(ce(i.index_ instanceof FD,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=Jt(t),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=Jt(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+Jt(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=Jt(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+Jt(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function KT(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==hn&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f extends OA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ce(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=rc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=_f.getListenId_(e,s),d={};this.listens_[c]=d;const m=GT(e._queryParams);this.restRequest_(l+".json",m,(g,y)=>{let T=y;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),Vo(this.listens_,c)===d){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",a(S,null)}})}unlisten(e,t){const s=_f.getListenId_(e,t);delete this.listens_[s]}get(e){const t=GT(e._queryParams),s=e._path.toString(),a=new Pg;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Zo(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let m=null;if(d.status>=200&&d.status<300){try{m=Hu(d.responseText)}catch{kn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,m)}else d.status!==401&&d.status!==404&&kn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(){this.rootNode_=Ye.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(){return{value:null,children:new Map}}function HA(i,e,t){if(ke(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const s=Be(e);i.children.has(s)||i.children.set(s,yf());const a=i.children.get(s);e=ut(e),HA(a,e,t)}}function Xm(i,e,t){i.value!==null?t(e,i.value):XD(i,(s,a)=>{const l=new ct(e.toString()+"/"+s);Xm(a,l,t)})}function XD(i,e){i.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Wn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=10*1e3,JD=30*1e3,e2=5*60*1e3;class t2{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ZD(e);const s=YT+(JD-YT)*Math.random();Mu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Wn(e,(a,l)=>{l>0&&bs(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Mu(this.reportStats_.bind(this),Math.floor(Math.random()*2*e2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oi;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Oi||(Oi={}));function FA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function GA(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Oi.ACK_USER_WRITE,this.source=FA()}operationForChild(e){if(ke(this.path)){if(this.affectedTree.value!=null)return ce(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new vf(nt(),t,this.revert)}}else return ce(Be(this.path)===e,"operationForChild called for unrelated child."),new vf(ut(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Oi.OVERWRITE}operationForChild(e){return ke(this.path)?new ya(this.source,nt(),this.snap.getImmediateChild(e)):new ya(this.source,ut(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Oi.MERGE}operationForChild(e){if(ke(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new ya(this.source,nt(),t.value):new Gu(this.source,nt(),t)}else return ce(Be(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gu(this.source,ut(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ke(e))return this.isFullyInitialized()&&!this.filtered_;const t=Be(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function n2(i,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&i.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push($D(c.childName,c.snapshotNode))}),Tu(i,a,"child_removed",e,s,t),Tu(i,a,"child_added",e,s,t),Tu(i,a,"child_moved",l,s,t),Tu(i,a,"child_changed",e,s,t),Tu(i,a,"value",e,s,t),a}function Tu(i,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,m)=>s2(i,d,m)),c.forEach(d=>{const m=i2(i,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(m,i.query_))})})}function i2(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function s2(i,e,t){if(e.childName==null||t.childName==null)throw Wo("Should only compare child_ events.");const s=new ze(e.childName,e.snapshotNode),a=new ze(t.childName,t.snapshotNode);return i.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(i,e){return{eventCache:i,serverCache:e}}function ku(i,e,t,s){return KA(new $g(e,t,s),i.serverCache)}function YA(i,e,t,s){return KA(i.eventCache,new $g(e,t,s))}function Zm(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function va(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Im;const r2=()=>(Im||(Im=new Ni(qO)),Im);class lt{static fromObject(e){let t=new lt(null);return Wn(e,(s,a)=>{t=t.set(new ct(s),a)}),t}constructor(e,t=r2()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:nt(),value:this.value};if(ke(e))return null;{const s=Be(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(ut(e),t);return l!=null?{path:Gt(new ct(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ke(e))return this;{const t=Be(e),s=this.children.get(t);return s!==null?s.subtree(ut(e)):new lt(null)}}set(e,t){if(ke(e))return new lt(t,this.children);{const s=Be(e),l=(this.children.get(s)||new lt(null)).set(ut(e),t),c=this.children.insert(s,l);return new lt(this.value,c)}}remove(e){if(ke(e))return this.children.isEmpty()?new lt(null):new lt(null,this.children);{const t=Be(e),s=this.children.get(t);if(s){const a=s.remove(ut(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new lt(null):new lt(this.value,l)}else return this}}get(e){if(ke(e))return this.value;{const t=Be(e),s=this.children.get(t);return s?s.get(ut(e)):null}}setTree(e,t){if(ke(e))return t;{const s=Be(e),l=(this.children.get(s)||new lt(null)).setTree(ut(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new lt(this.value,c)}}fold(e){return this.fold_(nt(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Gt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,nt(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(ke(e))return null;{const l=Be(e),c=this.children.get(l);return c?c.findOnPath_(ut(e),Gt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,nt(),t)}foreachOnPath_(e,t,s){if(ke(e))return this;{this.value&&s(t,this.value);const a=Be(e),l=this.children.get(a);return l?l.foreachOnPath_(ut(e),Gt(t,a),s):new lt(null)}}foreach(e){this.foreach_(nt(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Gt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.writeTree_=e}static empty(){return new li(new lt(null))}}function Pu(i,e,t){if(ke(e))return new li(new lt(t));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=Qn(a,e);return l=l.updateChild(c,t),new li(i.writeTree_.set(a,l))}else{const a=new lt(t),l=i.writeTree_.setTree(e,a);return new li(l)}}}function QT(i,e,t){let s=i;return Wn(t,(a,l)=>{s=Pu(s,Gt(e,a),l)}),s}function $T(i,e){if(ke(e))return li.empty();{const t=i.writeTree_.setTree(e,new lt(null));return new li(t)}}function Jm(i,e){return Aa(i,e)!=null}function Aa(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild(Qn(t.path,e)):null}function WT(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(hn,(s,a)=>{e.push(new ze(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new ze(s,a.value))}),e}function hr(i,e){if(ke(e))return i;{const t=Aa(i,e);return t!=null?new li(new lt(t)):new li(i.writeTree_.subtree(e))}}function eg(i){return i.writeTree_.isEmpty()}function Bo(i,e){return QA(nt(),i.writeTree_,e)}function QA(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ce(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=QA(Gt(i,a),l,t)}),!t.getChild(i).isEmpty()&&s!==null&&(t=t.updateChild(Gt(i,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(i,e){return ew(e,i)}function a2(i,e,t,s,a){ce(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(i.visibleWrites=Pu(i.visibleWrites,e,t)),i.lastWriteId=s}function o2(i,e){for(let t=0;t<i.allWrites.length;t++){const s=i.allWrites[t];if(s.writeId===e)return s}return null}function l2(i,e){const t=i.allWrites.findIndex(d=>d.writeId===e);ce(t>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[t];i.allWrites.splice(t,1);let a=s.visible,l=!1,c=i.allWrites.length-1;for(;a&&c>=0;){const d=i.allWrites[c];d.visible&&(c>=t&&u2(d,s.path)?a=!1:ri(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return c2(i),!0;if(s.snap)i.visibleWrites=$T(i.visibleWrites,s.path);else{const d=s.children;Wn(d,m=>{i.visibleWrites=$T(i.visibleWrites,Gt(s.path,m))})}return!0}else return!1}function u2(i,e){if(i.snap)return ri(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&ri(Gt(i.path,t),e))return!0;return!1}function c2(i){i.visibleWrites=WA(i.allWrites,h2,nt()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function h2(i){return i.visible}function WA(i,e,t){let s=li.empty();for(let a=0;a<i.length;++a){const l=i[a];if(e(l)){const c=l.path;let d;if(l.snap)ri(t,c)?(d=Qn(t,c),s=Pu(s,d,l.snap)):ri(c,t)&&(d=Qn(c,t),s=Pu(s,nt(),l.snap.getChild(d)));else if(l.children){if(ri(t,c))d=Qn(t,c),s=QT(s,d,l.children);else if(ri(c,t))if(d=Qn(c,t),ke(d))s=QT(s,nt(),l.children);else{const m=Vo(l.children,Be(d));if(m){const g=m.getChild(ut(d));s=Pu(s,nt(),g)}}}else throw Wo("WriteRecord should have .snap or .children")}}return s}function XA(i,e,t,s,a){if(!s&&!a){const l=Aa(i.visibleWrites,e);if(l!=null)return l;{const c=hr(i.visibleWrites,e);if(eg(c))return t;if(t==null&&!Jm(c,nt()))return null;{const d=t||Ye.EMPTY_NODE;return Bo(c,d)}}}else{const l=hr(i.visibleWrites,e);if(!a&&eg(l))return t;if(!a&&t==null&&!Jm(l,nt()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(ri(g.path,e)||ri(e,g.path))},d=WA(i.allWrites,c,e),m=t||Ye.EMPTY_NODE;return Bo(d,m)}}}function f2(i,e,t){let s=Ye.EMPTY_NODE;const a=Aa(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(hn,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=hr(i.visibleWrites,e);return t.forEachChild(hn,(c,d)=>{const m=Bo(hr(l,new ct(c)),d);s=s.updateImmediateChild(c,m)}),WT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=hr(i.visibleWrites,e);return WT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function d2(i,e,t,s,a){ce(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Gt(e,t);if(Jm(i.visibleWrites,l))return null;{const c=hr(i.visibleWrites,l);return eg(c)?a.getChild(t):Bo(c,a.getChild(t))}}function p2(i,e,t,s){const a=Gt(e,t),l=Aa(i.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=hr(i.visibleWrites,a);return Bo(c,s.getNode().getImmediateChild(t))}else return null}function m2(i,e){return Aa(i.visibleWrites,e)}function g2(i,e,t,s,a,l,c){let d;const m=hr(i.visibleWrites,e),g=Aa(m,nt());if(g!=null)d=g;else if(t!=null)d=Bo(m,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],T=c.getCompare(),S=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let O=S.getNext();for(;O&&y.length<a;)T(O,s)!==0&&y.push(O),O=S.getNext();return y}else return[]}function _2(){return{visibleWrites:li.empty(),allWrites:[],lastWriteId:-1}}function tg(i,e,t,s){return XA(i.writeTree,i.treePath,e,t,s)}function ZA(i,e){return f2(i.writeTree,i.treePath,e)}function XT(i,e,t,s){return d2(i.writeTree,i.treePath,e,t,s)}function Ef(i,e){return m2(i.writeTree,Gt(i.treePath,e))}function y2(i,e,t,s,a,l){return g2(i.writeTree,i.treePath,e,t,s,a,l)}function Wg(i,e,t){return p2(i.writeTree,i.treePath,e,t)}function JA(i,e){return ew(Gt(i.treePath,e),i.writeTree)}function ew(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;ce(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ce(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,qT(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,QD(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,YD(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,qT(s,e.snapshotNode,a.oldSnap));else throw Wo("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const tw=new E2;class Xg{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new $g(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wg(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:va(this.viewCache_),l=y2(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function T2(i,e){ce(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),ce(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function S2(i,e,t,s,a){const l=new v2;let c,d;if(t.type===Oi.OVERWRITE){const g=t;g.source.fromUser?c=ng(i,e,g.path,g.snap,s,a,l):(ce(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!ke(g.path),c=Tf(i,e,g.path,g.snap,s,a,d,l))}else if(t.type===Oi.MERGE){const g=t;g.source.fromUser?c=w2(i,e,g.path,g.children,s,a,l):(ce(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=ig(i,e,g.path,g.children,s,a,d,l))}else if(t.type===Oi.ACK_USER_WRITE){const g=t;g.revert?c=C2(i,e,g.path,s,a,l):c=R2(i,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Oi.LISTEN_COMPLETE)c=b2(i,e,t.path,s,l);else throw Wo("Unknown operation type: "+t.type);const m=l.getChanges();return A2(e,c,m),{viewCache:c,changes:m}}function A2(i,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=Zm(i);(t.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(KD(Zm(e)))}}function nw(i,e,t,s,a,l){const c=e.eventCache;if(Ef(s,t)!=null)return e;{let d,m;if(ke(t))if(ce(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=va(e),y=g instanceof Ye?g:Ye.EMPTY_NODE,T=ZA(s,y);d=i.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=tg(s,va(e));d=i.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Be(t);if(g===".priority"){ce(mr(t)===1,"Can't have a priority with additional path components");const y=c.getNode();m=e.serverCache.getNode();const T=XT(s,t,y,m);T!=null?d=i.filter.updatePriority(y,T):d=c.getNode()}else{const y=ut(t);let T;if(c.isCompleteForChild(g)){m=e.serverCache.getNode();const S=XT(s,t,c.getNode(),m);S!=null?T=c.getNode().getImmediateChild(g).updateChild(y,S):T=c.getNode().getImmediateChild(g)}else T=Wg(s,g,e.serverCache);T!=null?d=i.filter.updateChild(c.getNode(),g,T,y,a,l):d=c.getNode()}}return ku(e,d,c.isFullyInitialized()||ke(t),i.filter.filtersNodes())}}function Tf(i,e,t,s,a,l,c,d){const m=e.serverCache;let g;const y=c?i.filter:i.filter.getIndexedFilter();if(ke(t))g=y.updateFullNode(m.getNode(),s,null);else if(y.filtersNodes()&&!m.isFiltered()){const O=m.getNode().updateChild(t,s);g=y.updateFullNode(m.getNode(),O,null)}else{const O=Be(t);if(!m.isCompleteForPath(t)&&mr(t)>1)return e;const N=ut(t),H=m.getNode().getImmediateChild(O).updateChild(N,s);O===".priority"?g=y.updatePriority(m.getNode(),H):g=y.updateChild(m.getNode(),O,H,N,tw,null)}const T=YA(e,g,m.isFullyInitialized()||ke(t),y.filtersNodes()),S=new Xg(a,T,l);return nw(i,T,t,a,S,d)}function ng(i,e,t,s,a,l,c){const d=e.eventCache;let m,g;const y=new Xg(a,e,l);if(ke(t))g=i.filter.updateFullNode(e.eventCache.getNode(),s,c),m=ku(e,g,!0,i.filter.filtersNodes());else{const T=Be(t);if(T===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),m=ku(e,g,d.isFullyInitialized(),d.isFiltered());else{const S=ut(t),O=d.getNode().getImmediateChild(T);let N;if(ke(S))N=s;else{const q=y.getCompleteChild(T);q!=null?xA(S)===".priority"&&q.getChild(kA(S)).isEmpty()?N=q:N=q.updateChild(S,s):N=Ye.EMPTY_NODE}if(O.equals(N))m=e;else{const q=i.filter.updateChild(d.getNode(),T,N,S,y,c);m=ku(e,q,d.isFullyInitialized(),i.filter.filtersNodes())}}}return m}function ZT(i,e){return i.eventCache.isCompleteForChild(e)}function w2(i,e,t,s,a,l,c){let d=e;return s.foreach((m,g)=>{const y=Gt(t,m);ZT(e,Be(y))&&(d=ng(i,d,y,g,a,l,c))}),s.foreach((m,g)=>{const y=Gt(t,m);ZT(e,Be(y))||(d=ng(i,d,y,g,a,l,c))}),d}function JT(i,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function ig(i,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;ke(t)?g=s:g=new lt(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((T,S)=>{if(y.hasChild(T)){const O=e.serverCache.getNode().getImmediateChild(T),N=JT(i,O,S);m=Tf(i,m,new ct(T),N,a,l,c,d)}}),g.children.inorderTraversal((T,S)=>{const O=!e.serverCache.isCompleteForChild(T)&&S.value===null;if(!y.hasChild(T)&&!O){const N=e.serverCache.getNode().getImmediateChild(T),q=JT(i,N,S);m=Tf(i,m,new ct(T),q,a,l,c,d)}}),m}function R2(i,e,t,s,a,l,c){if(Ef(a,t)!=null)return e;const d=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(ke(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return Tf(i,e,t,m.getNode().getChild(t),a,l,d,c);if(ke(t)){let g=new lt(null);return m.getNode().forEachChild(Do,(y,T)=>{g=g.set(new ct(y),T)}),ig(i,e,t,g,a,l,d,c)}else return e}else{let g=new lt(null);return s.foreach((y,T)=>{const S=Gt(t,y);m.isCompleteForPath(S)&&(g=g.set(y,m.getNode().getChild(S)))}),ig(i,e,t,g,a,l,d,c)}}function b2(i,e,t,s,a){const l=e.serverCache,c=YA(e,l.getNode(),l.isFullyInitialized()||ke(t),l.isFiltered());return nw(i,c,t,s,tw,a)}function C2(i,e,t,s,a,l){let c;if(Ef(s,t)!=null)return e;{const d=new Xg(s,e,a),m=e.eventCache.getNode();let g;if(ke(t)||Be(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=tg(s,va(e));else{const T=e.serverCache.getNode();ce(T instanceof Ye,"serverChildren would be complete if leaf node"),y=ZA(s,T)}y=y,g=i.filter.updateFullNode(m,y,l)}else{const y=Be(t);let T=Wg(s,y,e.serverCache);T==null&&e.serverCache.isCompleteForChild(y)&&(T=m.getImmediateChild(y)),T!=null?g=i.filter.updateChild(m,y,T,ut(t),d,l):e.eventCache.getNode().hasChild(y)?g=i.filter.updateChild(m,y,Ye.EMPTY_NODE,ut(t),d,l):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=tg(s,va(e)),c.isLeafNode()&&(g=i.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||Ef(s,nt())!=null,ku(e,g,c,i.filter.filtersNodes())}}function I2(i,e){const t=va(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!ke(e)&&!t.getImmediateChild(Be(e)).isEmpty())?t.getChild(e):null}function e0(i,e,t,s){e.type===Oi.MERGE&&e.source.queryId!==null&&(ce(va(i.viewCache_),"We should always have a full cache before handling merges"),ce(Zm(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,l=S2(i.processor_,a,e,t,s);return T2(i.processor_,l.viewCache),ce(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=l.viewCache,N2(i,l.changes,l.viewCache.eventCache.getNode())}function N2(i,e,t,s){const a=i.eventRegistrations_;return n2(i.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t0;function O2(i){ce(!t0,"__referenceConstructor has already been defined"),t0=i}function Zg(i,e,t,s){const a=e.source.queryId;if(a!==null){const l=i.views.get(a);return ce(l!=null,"SyncTree gave us an op for an invalid query."),e0(l,e,t,s)}else{let l=[];for(const c of i.views.values())l=l.concat(e0(c,e,t,s));return l}}function Jg(i,e){let t=null;for(const s of i.views.values())t=t||I2(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n0;function D2(i){ce(!n0,"__referenceConstructor has already been defined"),n0=i}class i0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new lt(null),this.pendingWriteTree_=_2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function x2(i,e,t,s,a){return a2(i.pendingWriteTree_,e,t,s,a),a?Kf(i,new ya(FA(),e,t)):[]}function No(i,e,t=!1){const s=o2(i.pendingWriteTree_,e);if(l2(i.pendingWriteTree_,e)){let l=new lt(null);return s.snap!=null?l=l.set(nt(),!0):Wn(s.children,c=>{l=l.set(new ct(c),!0)}),Kf(i,new vf(s.path,l,t))}else return[]}function Gf(i,e,t){return Kf(i,new ya(qA(),e,t))}function M2(i,e,t){const s=lt.fromObject(t);return Kf(i,new Gu(qA(),e,s))}function k2(i,e,t,s){const a=aw(i,s);if(a!=null){const l=ow(a),c=l.path,d=l.queryId,m=Qn(c,e),g=new ya(GA(d),m,t);return lw(i,c,g)}else return[]}function P2(i,e,t,s){const a=aw(i,s);if(a){const l=ow(a),c=l.path,d=l.queryId,m=Qn(c,e),g=lt.fromObject(t),y=new Gu(GA(d),m,g);return lw(i,c,y)}else return[]}function iw(i,e,t){const a=i.pendingWriteTree_,l=i.syncPointTree_.findOnPath(e,(c,d)=>{const m=Qn(c,e),g=Jg(d,m);if(g)return g});return XA(a,e,l,t,!0)}function Kf(i,e){return sw(e,i.syncPointTree_,null,$A(i.pendingWriteTree_,nt()))}function sw(i,e,t,s){if(ke(i.path))return rw(i,e,t,s);{const a=e.get(nt());t==null&&a!=null&&(t=Jg(a,nt()));let l=[];const c=Be(i.path),d=i.operationForChild(c),m=e.children.get(c);if(m&&d){const g=t?t.getImmediateChild(c):null,y=JA(s,c);l=l.concat(sw(d,m,g,y))}return a&&(l=l.concat(Zg(a,i,s,t))),l}}function rw(i,e,t,s){const a=e.get(nt());t==null&&a!=null&&(t=Jg(a,nt()));let l=[];return e.children.inorderTraversal((c,d)=>{const m=t?t.getImmediateChild(c):null,g=JA(s,c),y=i.operationForChild(c);y&&(l=l.concat(rw(y,d,m,g)))}),a&&(l=l.concat(Zg(a,i,s,t))),l}function aw(i,e){return i.tagToQueryMap.get(e)}function ow(i){const e=i.indexOf("$");return ce(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new ct(i.substr(0,e))}}function lw(i,e,t){const s=i.syncPointTree_.get(e);ce(s,"Missing sync point for query tag that we're tracking");const a=$A(i.pendingWriteTree_,e);return Zg(s,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new e_(t)}node(){return this.node_}}class t_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Gt(this.path_,e);return new t_(this.syncTree_,t)}node(){return iw(this.syncTree_,this.path_)}}const L2=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},s0=function(i,e,t){if(!i||typeof i!="object")return i;if(ce(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return V2(i[".sv"],e,t);if(typeof i[".sv"]=="object")return U2(i[".sv"],e);ce(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},V2=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:ce(!1,"Unexpected server value: "+i)}},U2=function(i,e,t){i.hasOwnProperty("increment")||ce(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&ce(!1,"Unexpected increment value: "+s);const a=e.node();if(ce(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},B2=function(i,e,t,s){return n_(e,new t_(t,i),s)},z2=function(i,e,t){return n_(i,new e_(e),t)};function n_(i,e,t){const s=i.getPriority().val(),a=s0(s,e.getImmediateChild(".priority"),t);let l;if(i.isLeafNode()){const c=i,d=s0(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Ft(d,un(a)):i}else{const c=i;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Ft(a))),c.forEachChild(hn,(d,m)=>{const g=n_(m,e.getImmediateChild(d),t);g!==m&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function s_(i,e){let t=e instanceof ct?e:new ct(e),s=i,a=Be(t);for(;a!==null;){const l=Vo(s.node.children,a)||{children:{},childCount:0};s=new i_(a,s,l),t=ut(t),a=Be(t)}return s}function el(i){return i.node.value}function uw(i,e){i.node.value=e,sg(i)}function cw(i){return i.node.childCount>0}function j2(i){return el(i)===void 0&&!cw(i)}function Yf(i,e){Wn(i.node.children,(t,s)=>{e(new i_(t,i,s))})}function hw(i,e,t,s){t&&e(i),Yf(i,a=>{hw(a,e,!0)})}function H2(i,e,t){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function lc(i){return new ct(i.parent===null?i.name:lc(i.parent)+"/"+i.name)}function sg(i){i.parent!==null&&F2(i.parent,i.name,i)}function F2(i,e,t){const s=j2(t),a=bs(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,sg(i)):!s&&!a&&(i.node.children[e]=t.node,i.node.childCount++,sg(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2=/[\[\].#$\/\u0000-\u001F\u007F]/,G2=/[\[\].#$\u0000-\u001F\u007F]/,Nm=10*1024*1024,fw=function(i){return typeof i=="string"&&i.length!==0&&!q2.test(i)},K2=function(i){return typeof i=="string"&&i.length!==0&&!G2.test(i)},Y2=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),K2(i)},dw=function(i,e,t){const s=t instanceof ct?new bD(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+ua(s));if(typeof e=="function")throw new Error(i+"contains a function "+ua(s)+" with contents = "+e.toString());if(fA(e))throw new Error(i+"contains "+e.toString()+" "+ua(s));if(typeof e=="string"&&e.length>Nm/3&&jf(e)>Nm)throw new Error(i+"contains a string greater than "+Nm+" utf8 bytes "+ua(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Wn(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!fw(c)))throw new Error(i+" contains an invalid key ("+c+") "+ua(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);CD(s,c),dw(i,d,s),ID(s)}),a&&l)throw new Error(i+' contains ".value" child '+ua(s)+" in addition to actual children.")}},Q2=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Y2(t))throw new Error(wN(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function W2(i,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!PA(l,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&i.eventLists_.push(t)}function wa(i,e,t){W2(i,t),X2(i,s=>ri(s,e)||ri(e,s))}function X2(i,e){i.recursionDepth_++;let t=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const l=a.path;e(l)?(Z2(i.eventLists_[s]),i.eventLists_[s]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function Z2(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const s=t.getEventRunner();xu&&ln("event: "+t.toString()),ac(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2="repo_interrupt",ex=25;class tx{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yf(),this.transactionQueueTree_=new i_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nx(i,e,t){if(i.stats_=qg(i.repoInfo_),i.forceRestClient_||WO())i.server_=new _f(i.repoInfo_,(s,a,l,c)=>{r0(i,s,a,l,c)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>a0(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Jt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new ys(i.repoInfo_,e,(s,a,l,c)=>{r0(i,s,a,l,c)},s=>{a0(i,s)},s=>{sx(i,s)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=nD(i.repoInfo_,()=>new t2(i.stats_,i.server_)),i.infoData_=new WD,i.infoSyncTree_=new i0({startListening:(s,a,l,c)=>{let d=[];const m=i.infoData_.getNode(s._path);return m.isEmpty()||(d=Gf(i.infoSyncTree_,s._path,m),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),r_(i,"connected",!1),i.serverSyncTree_=new i0({startListening:(s,a,l,c)=>(i.server_.listen(s,l,a,(d,m)=>{const g=c(d,m);wa(i.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function ix(i){const t=i.infoData_.getNode(new ct(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function pw(i){return L2({timestamp:ix(i)})}function r0(i,e,t,s,a){i.dataUpdateCount++;const l=new ct(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const m=ff(t,g=>un(g));c=P2(i.serverSyncTree_,l,m,a)}else{const m=un(t);c=k2(i.serverSyncTree_,l,m,a)}else if(s){const m=ff(t,g=>un(g));c=M2(i.serverSyncTree_,l,m)}else{const m=un(t);c=Gf(i.serverSyncTree_,l,m)}let d=l;c.length>0&&(d=o_(i,l)),wa(i.eventQueue_,d,c)}function a0(i,e){r_(i,"connected",e),e===!1&&ax(i)}function sx(i,e){Wn(e,(t,s)=>{r_(i,t,s)})}function r_(i,e,t){const s=new ct("/.info/"+e),a=un(t);i.infoData_.updateSnapshot(s,a);const l=Gf(i.infoSyncTree_,s,a);wa(i.eventQueue_,s,l)}function rx(i){return i.nextWriteId_++}function ax(i){mw(i,"onDisconnectEvents");const e=pw(i),t=yf();Xm(i.onDisconnect_,nt(),(a,l)=>{const c=B2(a,l,i.serverSyncTree_,e);HA(t,a,c)});let s=[];Xm(t,nt(),(a,l)=>{s=s.concat(Gf(i.serverSyncTree_,a,l));const c=cx(i,a);o_(i,c)}),i.onDisconnect_=yf(),wa(i.eventQueue_,nt(),s)}function ox(i){i.persistentConnection_&&i.persistentConnection_.interrupt(J2)}function mw(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),ln(t,...e)}function gw(i,e,t){return iw(i.serverSyncTree_,e,t)||Ye.EMPTY_NODE}function a_(i,e=i.transactionQueueTree_){if(e||Qf(i,e),el(e)){const t=yw(i,e);ce(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&lx(i,lc(e),t)}else cw(e)&&Yf(e,t=>{a_(i,t)})}function lx(i,e,t){const s=t.map(g=>g.currentWriteId),a=gw(i,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];ce(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=Qn(e,y.path);l=l.updateChild(T,y.currentOutputSnapshotRaw)}const d=l.val(!0),m=e;i.server_.put(m.toString(),d,g=>{mw(i,"transaction put response",{path:m.toString(),status:g});let y=[];if(g==="ok"){const T=[];for(let S=0;S<t.length;S++)t[S].status=2,y=y.concat(No(i.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&T.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();Qf(i,s_(i.transactionQueueTree_,e)),a_(i,i.transactionQueueTree_),wa(i.eventQueue_,e,y);for(let S=0;S<T.length;S++)ac(T[S])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{kn("transaction at "+m.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}o_(i,e)}},c)}function o_(i,e){const t=_w(i,e),s=lc(t),a=yw(i,t);return ux(i,a,s),s}function ux(i,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const m=e[d],g=Qn(t,m.path);let y=!1,T;if(ce(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)y=!0,T=m.abortReason,a=a.concat(No(i.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=ex)y=!0,T="maxretry",a=a.concat(No(i.serverSyncTree_,m.currentWriteId,!0));else{const S=gw(i,m.path,c);m.currentInputSnapshot=S;const O=e[d].update(S.val());if(O!==void 0){dw("transaction failed: Data returned ",O,m.path);let N=un(O);typeof O=="object"&&O!=null&&bs(O,".priority")||(N=N.updatePriority(S.getPriority()));const H=m.currentWriteId,$=pw(i),Z=z2(N,S,$);m.currentOutputSnapshotRaw=N,m.currentOutputSnapshotResolved=Z,m.currentWriteId=rx(i),c.splice(c.indexOf(H),1),a=a.concat(x2(i.serverSyncTree_,m.path,Z,m.currentWriteId,m.applyLocally)),a=a.concat(No(i.serverSyncTree_,H,!0))}else y=!0,T="nodata",a=a.concat(No(i.serverSyncTree_,m.currentWriteId,!0))}wa(i.eventQueue_,t,a),a=[],y&&(e[d].status=2,function(S){setTimeout(S,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Qf(i,i.transactionQueueTree_);for(let d=0;d<s.length;d++)ac(s[d]);a_(i,i.transactionQueueTree_)}function _w(i,e){let t,s=i.transactionQueueTree_;for(t=Be(e);t!==null&&el(s)===void 0;)s=s_(s,t),e=ut(e),t=Be(e);return s}function yw(i,e){const t=[];return vw(i,e,t),t.sort((s,a)=>s.order-a.order),t}function vw(i,e,t){const s=el(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Yf(e,a=>{vw(i,a,t)})}function Qf(i,e){const t=el(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,uw(e,t.length>0?t:void 0)}Yf(e,s=>{Qf(i,s)})}function cx(i,e){const t=lc(_w(i,e)),s=s_(i.transactionQueueTree_,e);return H2(s,a=>{Om(i,a)}),Om(i,s),hw(s,a=>{Om(i,a)}),t}function Om(i,e){const t=el(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(ce(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(ce(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(No(i.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?uw(e,void 0):t.length=l+1,wa(i.eventQueue_,lc(e),a);for(let c=0;c<s.length;c++)ac(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(i){let e="";const t=i.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function fx(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):kn(`Invalid query segment '${t}' in query '${i}'`)}return e}const o0=function(i,e){const t=dx(i),s=t.namespace;t.domain==="firebase.com"&&ga(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ga("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||HO();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new JO(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new ct(t.pathString)}},dx=function(i){let e="",t="",s="",a="",l="",c=!0,d="https",m=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(d=i.substring(0,g-1),i=i.substring(g+2));let y=i.indexOf("/");y===-1&&(y=i.length);let T=i.indexOf("?");T===-1&&(T=i.length),e=i.substring(0,Math.min(y,T)),y<T&&(a=hx(i.substring(y,T)));const S=fx(i.substring(Math.min(i.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const O=e.slice(0,g);if(O.toLowerCase()==="localhost")t="localhost";else if(O.split(".").length<=2)t=O;else{const N=e.indexOf(".");s=e.substring(0,N).toLowerCase(),t=e.substring(N+1),l=s}"ns"in S&&(l=S.ns)}return{host:e,port:m,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
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
 */class l_{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return ke(this._path)?null:xA(this._path)}get ref(){return new tl(this._repo,this._path)}get _queryIdentifier(){const e=KT(this._queryParams),t=Hg(e);return t==="{}"?"default":t}get _queryObject(){return KT(this._queryParams)}isEqual(e){if(e=Bi(e),!(e instanceof l_))return!1;const t=this._repo===e._repo,s=PA(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+RD(this._path)}}class tl extends l_{constructor(e,t){super(e,t,new Qg,!1)}get parent(){const e=kA(this._path);return e===null?null:new tl(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}O2(tl);D2(tl);/**
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
 */const px="FIREBASE_DATABASE_EMULATOR_HOST",rg={};let mx=!1;function gx(i,e,t,s,a){let l=s||i.options.databaseURL;l===void 0&&(i.options.projectId||ga("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ln("Using default host for project ",i.options.projectId),l=`${i.options.projectId}-default-rtdb.firebaseio.com`);let c=o0(l,a),d=c.repoInfo,m;typeof process<"u"&&CT&&(m=CT[px]),m?(l=`http://${m}?ns=${d.namespace}`,c=o0(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new ZO(i.name,i.options,e);Q2("Invalid Firebase Database URL",c),ke(c.path)||ga("Database URL must point to the root of a Firebase Database (not including a child path).");const y=yx(d,i,g,new XO(i,t));return new vx(y,i)}function _x(i,e){const t=rg[e];(!t||t[i.key]!==i)&&ga(`Database ${e}(${i.repoInfo_}) has already been deleted.`),ox(i),delete t[i.key]}function yx(i,e,t,s){let a=rg[e.name];a||(a={},rg[e.name]=a);let l=a[i.toURLString()];return l&&ga("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new tx(i,mx,t,s),a[i.toURLString()]=l,l}class vx{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new tl(this._repo,nt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_x(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ga("Cannot call "+e+" on a deleted database.")}}/**
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
 */function Ex(i){LO(Sr),pr(new Ts("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return gx(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),$n(IT,NT,i),$n(IT,NT,"esm2017")}ys.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};ys.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};Ex();function u_(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(t[s[a]]=i[s[a]]);return t}function Ew(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tx=Ew,Tw=new ic("auth","Firebase",Ew());/**
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
 */const Sf=new Hf("@firebase/auth");function Sx(i,...e){Sf.logLevel<=Me.WARN&&Sf.warn(`Auth (${Sr}): ${i}`,...e)}function ef(i,...e){Sf.logLevel<=Me.ERROR&&Sf.error(`Auth (${Sr}): ${i}`,...e)}/**
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
 */function Xn(i,...e){throw h_(i,...e)}function ui(i,...e){return h_(i,...e)}function c_(i,e,t){const s=Object.assign(Object.assign({},Tx()),{[e]:t});return new ic("auth","Firebase",s).create(e,{appName:i.name})}function fr(i){return c_(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ax(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Xn(i,"argument-error"),c_(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function h_(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Tw.create(i,...e)}function Se(i,e,...t){if(!i)throw h_(e,...t)}function ms(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ef(e),new Error(e)}function As(i,e){i||ms(e)}/**
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
 */function ag(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function wx(){return l0()==="http:"||l0()==="https:"}function l0(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function Rx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wx()||uN()||"connection"in navigator)?navigator.onLine:!0}function bx(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class uc{constructor(e,t){this.shortDelay=e,this.longDelay=t,As(t>e,"Short delay should be less than long delay!"),this.isMobile=Ug()||iA()}get(){return Rx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function f_(i,e){As(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Sw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ms("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ms("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ms("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Cx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ix=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Nx=new uc(3e4,6e4);function Ra(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Ar(i,e,t,s,a={}){return Aw(i,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=Zo(Object.assign({key:i.config.apiKey},c)).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:m},l);return lN()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Xo(i.emulatorConfig.host)&&(g.credentials="include"),Sw.fetch()(await ww(i,i.config.apiHost,t,d),g)})}async function Aw(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},Cx),e);try{const a=new Dx(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw qh(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[m,g]=d.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw qh(i,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw qh(i,"email-already-in-use",c);if(m==="USER_DISABLED")throw qh(i,"user-disabled",c);const y=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw c_(i,y,g);Xn(i,y)}}catch(a){if(a instanceof Ui)throw a;Xn(i,"network-request-failed",{message:String(a)})}}async function $f(i,e,t,s,a={}){const l=await Ar(i,e,t,s,a);return"mfaPendingCredential"in l&&Xn(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function ww(i,e,t,s){const a=`${e}${t}?${s}`,l=i,c=l.config.emulator?f_(i.config,a):`${i.config.apiScheme}://${a}`;return Ix.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function Ox(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Dx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ui(this.auth,"network-request-failed")),Nx.get())})}}function qh(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=ui(i,e,s);return a.customData._tokenResponse=t,a}function u0(i){return i!==void 0&&i.enterprise!==void 0}class xx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ox(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Mx(i,e){return Ar(i,"GET","/v2/recaptchaConfig",Ra(i,e))}/**
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
 */async function kx(i,e){return Ar(i,"POST","/v1/accounts:delete",e)}async function Af(i,e){return Ar(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Lu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Px(i,e=!1){const t=Bi(i),s=await t.getIdToken(e),a=d_(s);Se(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:Lu(Dm(a.auth_time)),issuedAtTime:Lu(Dm(a.iat)),expirationTime:Lu(Dm(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Dm(i){return Number(i)*1e3}function d_(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return ef("JWT malformed, contained fewer than 3 sections"),null;try{const a=hf(t);return a?JSON.parse(a):(ef("Failed to decode base64 JWT payload"),null)}catch(a){return ef("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function c0(i){const e=d_(i);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ku(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ui&&Lx(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Lx({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Vx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class og{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lu(this.lastLoginAt),this.creationTime=Lu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wf(i){var e;const t=i.auth,s=await i.getIdToken(),a=await Ku(i,Af(t,{idToken:s}));Se(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Rw(l.providerUserInfo):[],d=Bx(i.providerData,c),m=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!(d!=null&&d.length),y=m?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new og(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(i,T)}async function Ux(i){const e=Bi(i);await wf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bx(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function Rw(i){return i.map(e=>{var{providerId:t}=e,s=u_(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function zx(i,e){const t=await Aw(i,{},async()=>{const s=Zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await ww(i,a,"/v1/token",`key=${l}`),d=await i._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Sw.fetch()(c,{method:"POST",headers:d,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jx(i,e){return Ar(i,"POST","/v2/accounts:revokeToken",Ra(i,e))}/**
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
 */class xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):c0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=c0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await zx(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new xo;return s&&(Se(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Se(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Se(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xo,this.toJSON())}_performRefresh(){return ms("not implemented")}}/**
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
 */function nr(i,e){Se(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ai{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=u_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new og(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ku(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Px(this,e)}reload(){return Ux(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ai(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await wf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(fr(this.auth));const e=await this.getIdToken();return await Ku(this,kx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,d,m,g,y;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,O=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,N=(c=t.photoURL)!==null&&c!==void 0?c:void 0,q=(d=t.tenantId)!==null&&d!==void 0?d:void 0,H=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,$=(g=t.createdAt)!==null&&g!==void 0?g:void 0,Z=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ie,emailVerified:le,isAnonymous:se,providerData:fe,stsTokenManager:D}=t;Se(ie&&D,e,"internal-error");const R=xo.fromJSON(this.name,D);Se(typeof ie=="string",e,"internal-error"),nr(T,e.name),nr(S,e.name),Se(typeof le=="boolean",e,"internal-error"),Se(typeof se=="boolean",e,"internal-error"),nr(O,e.name),nr(N,e.name),nr(q,e.name),nr(H,e.name),nr($,e.name),nr(Z,e.name);const b=new ai({uid:ie,auth:e,email:S,emailVerified:le,displayName:T,isAnonymous:se,photoURL:N,phoneNumber:O,tenantId:q,stsTokenManager:R,createdAt:$,lastLoginAt:Z});return fe&&Array.isArray(fe)&&(b.providerData=fe.map(M=>Object.assign({},M))),H&&(b._redirectEventId=H),b}static async _fromIdTokenResponse(e,t,s=!1){const a=new xo;a.updateFromServerResponse(t);const l=new ai({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await wf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Se(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?Rw(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new xo;d.updateFromIdToken(s);const m=new ai({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new og(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,g),m}}/**
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
 */const h0=new Map;function gs(i){As(i instanceof Function,"Expected a class definition");let e=h0.get(i);return e?(As(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,h0.set(i,e),e)}/**
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
 */class bw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}bw.type="NONE";const f0=bw;/**
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
 */function tf(i,e,t){return`firebase:${i}:${e}:${t}`}class Mo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=tf(this.userKey,a.apiKey,l),this.fullPersistenceKey=tf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Af(this.auth,{idToken:e}).catch(()=>{});return t?ai._fromGetAccountInfoResponse(this.auth,t,e):null}return ai._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Mo(gs(f0),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||gs(f0);const c=tf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const S=await Af(e,{idToken:y}).catch(()=>{});if(!S)break;T=await ai._fromGetAccountInfoResponse(e,S,y)}else T=ai._fromJSON(e,y);g!==l&&(d=T),l=g;break}}catch{}const m=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new Mo(l,e,s):(l=m[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Mo(l,e,s))}}/**
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
 */function d0(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ow(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xw(e))return"Blackberry";if(Mw(e))return"Webos";if(Iw(e))return"Safari";if((e.includes("chrome/")||Nw(e))&&!e.includes("edge/"))return"Chrome";if(Dw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Cw(i=fn()){return/firefox\//i.test(i)}function Iw(i=fn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nw(i=fn()){return/crios\//i.test(i)}function Ow(i=fn()){return/iemobile/i.test(i)}function Dw(i=fn()){return/android/i.test(i)}function xw(i=fn()){return/blackberry/i.test(i)}function Mw(i=fn()){return/webos/i.test(i)}function p_(i=fn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Hx(i=fn()){var e;return p_(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Fx(){return cN()&&document.documentMode===10}function kw(i=fn()){return p_(i)||Dw(i)||Mw(i)||xw(i)||/windows phone/i.test(i)||Ow(i)}/**
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
 */function Pw(i,e=[]){let t;switch(i){case"Browser":t=d0(fn());break;case"Worker":t=`${d0(fn())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Sr}/${s}`}/**
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
 */class qx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const m=e(l);c(m)}catch(m){d(m)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Gx(i,e={}){return Ar(i,"GET","/v2/passwordPolicy",Ra(i,e))}/**
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
 */const Kx=6;class Yx{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:Kx,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,d;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(c=m.containsNumericCharacter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(d=m.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),m}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class Qx{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new p0(this),this.idTokenSubscription=new p0(this),this.beforeStateQueue=new qx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gs(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await Mo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Af(this,{idToken:e}),s=await ai._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Sn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===d)&&(m!=null&&m.user)&&(a=m.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wf(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(fr(this));const t=e?Bi(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Gx(this),t=new Yx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ic("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await jx(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gs(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await Mo.create(this,[gs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,a);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Sx(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ba(i){return Bi(i)}class p0{constructor(e){this.auth=e,this.observer=null,this.addObserver=TN(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $x(i){Wf=i}function Lw(i){return Wf.loadJS(i)}function Wx(){return Wf.recaptchaEnterpriseScript}function Xx(){return Wf.gapiScript}function Zx(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class Jx{constructor(){this.enterprise=new eM}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class eM{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const tM="recaptcha-enterprise",Vw="NO_RECAPTCHA";class nM{constructor(e){this.type=tM,this.auth=ba(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{Mx(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new xx(m);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(m=>{d(m)})})}function a(l,c,d){const m=window.grecaptcha;u0(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(Vw)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Jx().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(d=>{if(!t&&u0(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let m=Wx();m.length!==0&&(m+=d),Lw(m).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function m0(i,e,t,s=!1,a=!1){const l=new nM(i);let c;if(a)c=Vw;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const m=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const m=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function g0(i,e,t,s,a){var l;if(!((l=i._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await m0(i,e,t,t==="getOobCode");return s(i,c)}else return s(i,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await m0(i,e,t,t==="getOobCode");return s(i,d)}else return Promise.reject(c)})}/**
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
 */function iM(i,e){const t=Ff(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(ma(l,e??{}))return a;Xn(a,"already-initialized")}return t.initialize({options:e})}function sM(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(gs);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function rM(i,e,t){const s=ba(i);Se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=Uw(e),{host:c,port:d}=aM(e),m=d===null?"":`:${d}`,g={url:`${l}//${c}${m}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Se(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Se(ma(g,s.config.emulator)&&ma(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,Xo(c)?(Lg(`${l}//${c}${m}`),Vg("Auth",!0)):oM()}function Uw(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function aM(i){const e=Uw(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:_0(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:_0(c)}}}function _0(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function oM(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class m_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ms("not implemented")}_getIdTokenResponse(e){return ms("not implemented")}_linkToIdToken(e,t){return ms("not implemented")}_getReauthenticationResolver(e){return ms("not implemented")}}async function lM(i,e){return Ar(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function uM(i,e){return $f(i,"POST","/v1/accounts:signInWithPassword",Ra(i,e))}/**
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
 */async function cM(i,e){return $f(i,"POST","/v1/accounts:signInWithEmailLink",Ra(i,e))}async function hM(i,e){return $f(i,"POST","/v1/accounts:signInWithEmailLink",Ra(i,e))}/**
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
 */class Yu extends m_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Yu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Yu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return g0(e,t,"signInWithPassword",uM);case"emailLink":return cM(e,{email:this._email,oobCode:this._password});default:Xn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return g0(e,s,"signUpPassword",lM);case"emailLink":return hM(e,{idToken:t,email:this._email,oobCode:this._password});default:Xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ko(i,e){return $f(i,"POST","/v1/accounts:signInWithIdp",Ra(i,e))}/**
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
 */const fM="http://localhost";class Ea extends m_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ea(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=u_(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new Ea(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return ko(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ko(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ko(e,t)}buildRequest(){const e={requestUri:fM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zo(t)}return e}}/**
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
 */function dM(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pM(i){const e=Ru(bu(i)).link,t=e?Ru(bu(e)).deep_link_id:null,s=Ru(bu(i)).deep_link_id;return(s?Ru(bu(s)).link:null)||s||t||e||i}class g_{constructor(e){var t,s,a,l,c,d;const m=Ru(bu(e)),g=(t=m.apiKey)!==null&&t!==void 0?t:null,y=(s=m.oobCode)!==null&&s!==void 0?s:null,T=dM((a=m.mode)!==null&&a!==void 0?a:null);Se(g&&y&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=y,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=m.lang)!==null&&c!==void 0?c:null,this.tenantId=(d=m.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=pM(e);try{return new g_(t)}catch{return null}}}/**
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
 */class nl{constructor(){this.providerId=nl.PROVIDER_ID}static credential(e,t){return Yu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=g_.parseLink(t);return Se(s,"argument-error"),Yu._fromEmailAndCode(e,s.code,s.tenantId)}}nl.PROVIDER_ID="password";nl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class __{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cc extends __{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ir extends cc{constructor(){super("facebook.com")}static credential(e){return Ea._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
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
 */class ds extends cc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ea._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ds.credential(t,s)}catch{return null}}}ds.GOOGLE_SIGN_IN_METHOD="google.com";ds.PROVIDER_ID="google.com";/**
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
 */class sr extends cc{constructor(){super("github.com")}static credential(e){return Ea._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
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
 */class rr extends cc{constructor(){super("twitter.com")}static credential(e,t){return Ea._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return rr.credential(t,s)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
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
 */class zo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await ai._fromIdTokenResponse(e,s,a),c=y0(s);return new zo({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=y0(s);return new zo({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function y0(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Rf extends Ui{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Rf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Rf(e,t,s,a)}}function Bw(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Rf._fromErrorAndOperation(i,l,e,s):l})}async function mM(i,e,t=!1){const s=await Ku(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return zo._forOperation(i,"link",s)}/**
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
 */async function gM(i,e,t=!1){const{auth:s}=i;if(Sn(s.app))return Promise.reject(fr(s));const a="reauthenticate";try{const l=await Ku(i,Bw(s,a,e,i),t);Se(l.idToken,s,"internal-error");const c=d_(l.idToken);Se(c,s,"internal-error");const{sub:d}=c;return Se(i.uid===d,s,"user-mismatch"),zo._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Xn(s,"user-mismatch"),l}}/**
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
 */async function zw(i,e,t=!1){if(Sn(i.app))return Promise.reject(fr(i));const s="signIn",a=await Bw(i,s,e),l=await zo._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(l.user),l}async function _M(i,e){return zw(ba(i),e)}/**
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
 */async function yM(i){const e=ba(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function vM(i,e,t){return Sn(i.app)?Promise.reject(fr(i)):_M(Bi(i),nl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&yM(i),s})}function EM(i,e,t,s){return Bi(i).onIdTokenChanged(e,t,s)}function TM(i,e,t){return Bi(i).beforeAuthStateChanged(e,t)}const bf="__sak";/**
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
 */class jw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bf,"1"),this.storage.removeItem(bf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const SM=1e3,AM=10;class Hw extends jw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,m)=>{this.notifyListeners(c,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);Fx()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,AM):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},SM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hw.type="LOCAL";const wM=Hw;/**
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
 */class Fw extends jw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fw.type="SESSION";const qw=Fw;/**
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
 */function RM(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Xf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Xf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),m=await RM(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xf.receivers=[];/**
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
 */function y_(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class bM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,m)=>{const g=y_("",20);a.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const S=T;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(y),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Di(){return window}function CM(i){Di().location.href=i}/**
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
 */function Gw(){return typeof Di().WorkerGlobalScope<"u"&&typeof Di().importScripts=="function"}async function IM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NM(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function OM(){return Gw()?self:null}/**
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
 */const Kw="firebaseLocalStorageDb",DM=1,Cf="firebaseLocalStorage",Yw="fbase_key";class hc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zf(i,e){return i.transaction([Cf],e?"readwrite":"readonly").objectStore(Cf)}function xM(){const i=indexedDB.deleteDatabase(Kw);return new hc(i).toPromise()}function lg(){const i=indexedDB.open(Kw,DM);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Cf,{keyPath:Yw})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Cf)?e(s):(s.close(),await xM(),e(await lg()))})})}async function v0(i,e,t){const s=Zf(i,!0).put({[Yw]:e,value:t});return new hc(s).toPromise()}async function MM(i,e){const t=Zf(i,!1).get(e),s=await new hc(t).toPromise();return s===void 0?null:s.value}function E0(i,e){const t=Zf(i,!0).delete(e);return new hc(t).toPromise()}const kM=800,PM=3;class Qw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>PM)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xf._getInstance(OM()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await IM(),!this.activeServiceWorker)return;this.sender=new bM(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lg();return await v0(e,bf,"1"),await E0(e,bf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>v0(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>MM(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>E0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Zf(a,!1).getAll();return new hc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qw.type="LOCAL";const LM=Qw;new uc(3e4,6e4);/**
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
 */function $w(i,e){return e?gs(e):(Se(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class v_ extends m_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ko(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ko(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ko(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function VM(i){return zw(i.auth,new v_(i),i.bypassAuthState)}function UM(i){const{auth:e,user:t}=i;return Se(t,e,"internal-error"),gM(t,new v_(i),i.bypassAuthState)}async function BM(i){const{auth:e,user:t}=i;return Se(t,e,"internal-error"),mM(t,new v_(i),i.bypassAuthState)}/**
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
 */class Ww{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VM;case"linkViaPopup":case"linkViaRedirect":return BM;case"reauthViaPopup":case"reauthViaRedirect":return UM;default:Xn(this.auth,"internal-error")}}resolve(e){As(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){As(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zM=new uc(2e3,1e4);async function jM(i,e,t){if(Sn(i.app))return Promise.reject(ui(i,"operation-not-supported-in-this-environment"));const s=ba(i);Ax(i,e,__);const a=$w(s,t);return new ha(s,"signInViaPopup",e,a).executeNotNull()}class ha extends Ww{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,ha.currentPopupAction&&ha.currentPopupAction.cancel(),ha.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){As(this.filter.length===1,"Popup operations only handle one event");const e=y_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ui(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ui(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ha.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ui(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zM.get())};e()}}ha.currentPopupAction=null;/**
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
 */const HM="pendingRedirect",nf=new Map;class FM extends Ww{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=nf.get(this.auth._key());if(!e){try{const s=await qM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}nf.set(this.auth._key(),e)}return this.bypassAuthState||nf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qM(i,e){const t=YM(e),s=KM(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function GM(i,e){nf.set(i._key(),e)}function KM(i){return gs(i._redirectPersistence)}function YM(i){return tf(HM,i.config.apiKey,i.name)}async function QM(i,e,t=!1){if(Sn(i.app))return Promise.reject(fr(i));const s=ba(i),a=$w(s,e),c=await new FM(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const $M=10*60*1e3;class WM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XM(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Xw(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(ui(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$M&&this.cachedEventUids.clear(),this.cachedEventUids.has(T0(e))}saveEventToCache(e){this.cachedEventUids.add(T0(e)),this.lastProcessedEventTime=Date.now()}}function T0(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Xw({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XM(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xw(i);default:return!1}}/**
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
 */async function ZM(i,e={}){return Ar(i,"GET","/v1/projects",e)}/**
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
 */const JM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ek=/^https?/;async function tk(i){if(i.config.emulator)return;const{authorizedDomains:e}=await ZM(i);for(const t of e)try{if(nk(t))return}catch{}Xn(i,"unauthorized-domain")}function nk(i){const e=ag(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!ek.test(t))return!1;if(JM.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const ik=new uc(3e4,6e4);function S0(){const i=Di().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function sk(i){return new Promise((e,t)=>{var s,a,l;function c(){S0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{S0(),t(ui(i,"network-request-failed"))},timeout:ik.get()})}if(!((a=(s=Di().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Di().gapi)===null||l===void 0)&&l.load)c();else{const d=Zx("iframefcb");return Di()[d]=()=>{gapi.load?c():t(ui(i,"network-request-failed"))},Lw(`${Xx()}?onload=${d}`).catch(m=>t(m))}}).catch(e=>{throw sf=null,e})}let sf=null;function rk(i){return sf=sf||sk(i),sf}/**
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
 */const ak=new uc(5e3,15e3),ok="__/auth/iframe",lk="emulator/auth/iframe",uk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ck=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hk(i){const e=i.config;Se(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?f_(e,lk):`https://${i.config.authDomain}/${ok}`,s={apiKey:e.apiKey,appName:i.name,v:Sr},a=ck.get(i.config.apiHost);a&&(s.eid=a);const l=i._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Zo(s).slice(1)}`}async function fk(i){const e=await rk(i),t=Di().gapi;return Se(t,i,"internal-error"),e.open({where:document.body,url:hk(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uk,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=ui(i,"network-request-failed"),d=Di().setTimeout(()=>{l(c)},ak.get());function m(){Di().clearTimeout(d),a(s)}s.ping(m).then(m,()=>{l(c)})}))}/**
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
 */const dk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pk=500,mk=600,gk="_blank",_k="http://localhost";class A0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yk(i,e,t,s=pk,a=mk){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const m=Object.assign(Object.assign({},dk),{width:s.toString(),height:a.toString(),top:l,left:c}),g=fn().toLowerCase();t&&(d=Nw(g)?gk:t),Cw(g)&&(e=e||_k,m.scrollbars="yes");const y=Object.entries(m).reduce((S,[O,N])=>`${S}${O}=${N},`,"");if(Hx(g)&&d!=="_self")return vk(e||"",d),new A0(null);const T=window.open(e||"",d,y);Se(T,i,"popup-blocked");try{T.focus()}catch{}return new A0(T)}function vk(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Ek="__/auth/handler",Tk="emulator/auth/handler",Sk=encodeURIComponent("fac");async function w0(i,e,t,s,a,l){Se(i.config.authDomain,i,"auth-domain-config-required"),Se(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Sr,eventId:a};if(e instanceof __){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",Hm(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof cc){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}i.tenantId&&(c.tid=i.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const m=await i._getAppCheckToken(),g=m?`#${Sk}=${encodeURIComponent(m)}`:"";return`${Ak(i)}?${Zo(d).slice(1)}${g}`}function Ak({config:i}){return i.emulator?f_(i,Tk):`https://${i.authDomain}/${Ek}`}/**
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
 */const xm="webStorageSupport";class wk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qw,this._completeRedirectFn=QM,this._overrideRedirectResult=GM}async _openPopup(e,t,s,a){var l;As((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await w0(e,t,s,ag(),a);return yk(e,c,y_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await w0(e,t,s,ag(),a);return CM(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(As(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await fk(e),s=new WM(e);return t.register("authEvent",a=>(Se(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xm,{type:xm},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[xm];c!==void 0&&t(!!c),Xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kw()||Iw()||p_()}}const Rk=wk;var R0="@firebase/auth",b0="1.10.6";/**
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
 */class bk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ck(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ik(i){pr(new Ts("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Se(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:c,authDomain:d,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pw(i)},g=new Qx(s,a,l,m);return sM(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),pr(new Ts("auth-internal",e=>{const t=ba(e.getProvider("auth").getImmediate());return(s=>new bk(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(R0,b0,Ck(i)),$n(R0,b0,"esm2017")}/**
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
 */const Nk=5*60,Ok=tA("authIdTokenMaxAge")||Nk;let C0=null;const Dk=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Ok)return;const a=t==null?void 0:t.token;C0!==a&&(C0=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function xk(i=jg()){const e=Ff(i,"auth");if(e.isInitialized())return e.getImmediate();const t=iM(i,{popupRedirectResolver:Rk,persistence:[LM,wM,qw]}),s=tA("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=Dk(l.toString());TM(t,c,()=>c(t.currentUser)),EM(t,d=>c(d))}}const a=ZS("auth");return a&&rM(t,`http://${a}`),t}function Mk(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}$x({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const l=ui("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",Mk().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ik("Browser");var I0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,Zw;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function b(){}b.prototype=R.prototype,D.D=R.prototype,D.prototype=new b,D.prototype.constructor=D,D.C=function(M,P,V){for(var I=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)I[Rt-2]=arguments[Rt];return R.prototype[P].apply(M,I)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,R,b){b||(b=0);var M=Array(16);if(typeof R=="string")for(var P=0;16>P;++P)M[P]=R.charCodeAt(b++)|R.charCodeAt(b++)<<8|R.charCodeAt(b++)<<16|R.charCodeAt(b++)<<24;else for(P=0;16>P;++P)M[P]=R[b++]|R[b++]<<8|R[b++]<<16|R[b++]<<24;R=D.g[0],b=D.g[1],P=D.g[2];var V=D.g[3],I=R+(V^b&(P^V))+M[0]+3614090360&4294967295;R=b+(I<<7&4294967295|I>>>25),I=V+(P^R&(b^P))+M[1]+3905402710&4294967295,V=R+(I<<12&4294967295|I>>>20),I=P+(b^V&(R^b))+M[2]+606105819&4294967295,P=V+(I<<17&4294967295|I>>>15),I=b+(R^P&(V^R))+M[3]+3250441966&4294967295,b=P+(I<<22&4294967295|I>>>10),I=R+(V^b&(P^V))+M[4]+4118548399&4294967295,R=b+(I<<7&4294967295|I>>>25),I=V+(P^R&(b^P))+M[5]+1200080426&4294967295,V=R+(I<<12&4294967295|I>>>20),I=P+(b^V&(R^b))+M[6]+2821735955&4294967295,P=V+(I<<17&4294967295|I>>>15),I=b+(R^P&(V^R))+M[7]+4249261313&4294967295,b=P+(I<<22&4294967295|I>>>10),I=R+(V^b&(P^V))+M[8]+1770035416&4294967295,R=b+(I<<7&4294967295|I>>>25),I=V+(P^R&(b^P))+M[9]+2336552879&4294967295,V=R+(I<<12&4294967295|I>>>20),I=P+(b^V&(R^b))+M[10]+4294925233&4294967295,P=V+(I<<17&4294967295|I>>>15),I=b+(R^P&(V^R))+M[11]+2304563134&4294967295,b=P+(I<<22&4294967295|I>>>10),I=R+(V^b&(P^V))+M[12]+1804603682&4294967295,R=b+(I<<7&4294967295|I>>>25),I=V+(P^R&(b^P))+M[13]+4254626195&4294967295,V=R+(I<<12&4294967295|I>>>20),I=P+(b^V&(R^b))+M[14]+2792965006&4294967295,P=V+(I<<17&4294967295|I>>>15),I=b+(R^P&(V^R))+M[15]+1236535329&4294967295,b=P+(I<<22&4294967295|I>>>10),I=R+(P^V&(b^P))+M[1]+4129170786&4294967295,R=b+(I<<5&4294967295|I>>>27),I=V+(b^P&(R^b))+M[6]+3225465664&4294967295,V=R+(I<<9&4294967295|I>>>23),I=P+(R^b&(V^R))+M[11]+643717713&4294967295,P=V+(I<<14&4294967295|I>>>18),I=b+(V^R&(P^V))+M[0]+3921069994&4294967295,b=P+(I<<20&4294967295|I>>>12),I=R+(P^V&(b^P))+M[5]+3593408605&4294967295,R=b+(I<<5&4294967295|I>>>27),I=V+(b^P&(R^b))+M[10]+38016083&4294967295,V=R+(I<<9&4294967295|I>>>23),I=P+(R^b&(V^R))+M[15]+3634488961&4294967295,P=V+(I<<14&4294967295|I>>>18),I=b+(V^R&(P^V))+M[4]+3889429448&4294967295,b=P+(I<<20&4294967295|I>>>12),I=R+(P^V&(b^P))+M[9]+568446438&4294967295,R=b+(I<<5&4294967295|I>>>27),I=V+(b^P&(R^b))+M[14]+3275163606&4294967295,V=R+(I<<9&4294967295|I>>>23),I=P+(R^b&(V^R))+M[3]+4107603335&4294967295,P=V+(I<<14&4294967295|I>>>18),I=b+(V^R&(P^V))+M[8]+1163531501&4294967295,b=P+(I<<20&4294967295|I>>>12),I=R+(P^V&(b^P))+M[13]+2850285829&4294967295,R=b+(I<<5&4294967295|I>>>27),I=V+(b^P&(R^b))+M[2]+4243563512&4294967295,V=R+(I<<9&4294967295|I>>>23),I=P+(R^b&(V^R))+M[7]+1735328473&4294967295,P=V+(I<<14&4294967295|I>>>18),I=b+(V^R&(P^V))+M[12]+2368359562&4294967295,b=P+(I<<20&4294967295|I>>>12),I=R+(b^P^V)+M[5]+4294588738&4294967295,R=b+(I<<4&4294967295|I>>>28),I=V+(R^b^P)+M[8]+2272392833&4294967295,V=R+(I<<11&4294967295|I>>>21),I=P+(V^R^b)+M[11]+1839030562&4294967295,P=V+(I<<16&4294967295|I>>>16),I=b+(P^V^R)+M[14]+4259657740&4294967295,b=P+(I<<23&4294967295|I>>>9),I=R+(b^P^V)+M[1]+2763975236&4294967295,R=b+(I<<4&4294967295|I>>>28),I=V+(R^b^P)+M[4]+1272893353&4294967295,V=R+(I<<11&4294967295|I>>>21),I=P+(V^R^b)+M[7]+4139469664&4294967295,P=V+(I<<16&4294967295|I>>>16),I=b+(P^V^R)+M[10]+3200236656&4294967295,b=P+(I<<23&4294967295|I>>>9),I=R+(b^P^V)+M[13]+681279174&4294967295,R=b+(I<<4&4294967295|I>>>28),I=V+(R^b^P)+M[0]+3936430074&4294967295,V=R+(I<<11&4294967295|I>>>21),I=P+(V^R^b)+M[3]+3572445317&4294967295,P=V+(I<<16&4294967295|I>>>16),I=b+(P^V^R)+M[6]+76029189&4294967295,b=P+(I<<23&4294967295|I>>>9),I=R+(b^P^V)+M[9]+3654602809&4294967295,R=b+(I<<4&4294967295|I>>>28),I=V+(R^b^P)+M[12]+3873151461&4294967295,V=R+(I<<11&4294967295|I>>>21),I=P+(V^R^b)+M[15]+530742520&4294967295,P=V+(I<<16&4294967295|I>>>16),I=b+(P^V^R)+M[2]+3299628645&4294967295,b=P+(I<<23&4294967295|I>>>9),I=R+(P^(b|~V))+M[0]+4096336452&4294967295,R=b+(I<<6&4294967295|I>>>26),I=V+(b^(R|~P))+M[7]+1126891415&4294967295,V=R+(I<<10&4294967295|I>>>22),I=P+(R^(V|~b))+M[14]+2878612391&4294967295,P=V+(I<<15&4294967295|I>>>17),I=b+(V^(P|~R))+M[5]+4237533241&4294967295,b=P+(I<<21&4294967295|I>>>11),I=R+(P^(b|~V))+M[12]+1700485571&4294967295,R=b+(I<<6&4294967295|I>>>26),I=V+(b^(R|~P))+M[3]+2399980690&4294967295,V=R+(I<<10&4294967295|I>>>22),I=P+(R^(V|~b))+M[10]+4293915773&4294967295,P=V+(I<<15&4294967295|I>>>17),I=b+(V^(P|~R))+M[1]+2240044497&4294967295,b=P+(I<<21&4294967295|I>>>11),I=R+(P^(b|~V))+M[8]+1873313359&4294967295,R=b+(I<<6&4294967295|I>>>26),I=V+(b^(R|~P))+M[15]+4264355552&4294967295,V=R+(I<<10&4294967295|I>>>22),I=P+(R^(V|~b))+M[6]+2734768916&4294967295,P=V+(I<<15&4294967295|I>>>17),I=b+(V^(P|~R))+M[13]+1309151649&4294967295,b=P+(I<<21&4294967295|I>>>11),I=R+(P^(b|~V))+M[4]+4149444226&4294967295,R=b+(I<<6&4294967295|I>>>26),I=V+(b^(R|~P))+M[11]+3174756917&4294967295,V=R+(I<<10&4294967295|I>>>22),I=P+(R^(V|~b))+M[2]+718787259&4294967295,P=V+(I<<15&4294967295|I>>>17),I=b+(V^(P|~R))+M[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(P+(I<<21&4294967295|I>>>11))&4294967295,D.g[2]=D.g[2]+P&4294967295,D.g[3]=D.g[3]+V&4294967295}s.prototype.u=function(D,R){R===void 0&&(R=D.length);for(var b=R-this.blockSize,M=this.B,P=this.h,V=0;V<R;){if(P==0)for(;V<=b;)a(this,D,V),V+=this.blockSize;if(typeof D=="string"){for(;V<R;)if(M[P++]=D.charCodeAt(V++),P==this.blockSize){a(this,M),P=0;break}}else for(;V<R;)if(M[P++]=D[V++],P==this.blockSize){a(this,M),P=0;break}}this.h=P,this.o+=R},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;var b=8*this.o;for(R=D.length-8;R<D.length;++R)D[R]=b&255,b/=256;for(this.u(D),D=Array(16),R=b=0;4>R;++R)for(var M=0;32>M;M+=8)D[b++]=this.g[R]>>>M&255;return D};function l(D,R){var b=d;return Object.prototype.hasOwnProperty.call(b,D)?b[D]:b[D]=R(D)}function c(D,R){this.h=R;for(var b=[],M=!0,P=D.length-1;0<=P;P--){var V=D[P]|0;M&&V==R||(b[P]=V,M=!1)}this.g=b}var d={};function m(D){return-128<=D&&128>D?l(D,function(R){return new c([R|0],0>R?-1:0)}):new c([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return T;if(0>D)return H(g(-D));for(var R=[],b=1,M=0;D>=b;M++)R[M]=D/b|0,b*=4294967296;return new c(R,0)}function y(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return H(y(D.substring(1),R));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=g(Math.pow(R,8)),M=T,P=0;P<D.length;P+=8){var V=Math.min(8,D.length-P),I=parseInt(D.substring(P,P+V),R);8>V?(V=g(Math.pow(R,V)),M=M.j(V).add(g(I))):(M=M.j(b),M=M.add(g(I)))}return M}var T=m(0),S=m(1),O=m(16777216);i=c.prototype,i.m=function(){if(q(this))return-H(this).m();for(var D=0,R=1,b=0;b<this.g.length;b++){var M=this.i(b);D+=(0<=M?M:4294967296+M)*R,R*=4294967296}return D},i.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(N(this))return"0";if(q(this))return"-"+H(this).toString(D);for(var R=g(Math.pow(D,6)),b=this,M="";;){var P=le(b,R).g;b=$(b,P.j(R));var V=((0<b.g.length?b.g[0]:b.h)>>>0).toString(D);if(b=P,N(b))return V+M;for(;6>V.length;)V="0"+V;M=V+M}},i.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function N(D){if(D.h!=0)return!1;for(var R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function q(D){return D.h==-1}i.l=function(D){return D=$(this,D),q(D)?-1:N(D)?0:1};function H(D){for(var R=D.g.length,b=[],M=0;M<R;M++)b[M]=~D.g[M];return new c(b,~D.h).add(S)}i.abs=function(){return q(this)?H(this):this},i.add=function(D){for(var R=Math.max(this.g.length,D.g.length),b=[],M=0,P=0;P<=R;P++){var V=M+(this.i(P)&65535)+(D.i(P)&65535),I=(V>>>16)+(this.i(P)>>>16)+(D.i(P)>>>16);M=I>>>16,V&=65535,I&=65535,b[P]=I<<16|V}return new c(b,b[b.length-1]&-2147483648?-1:0)};function $(D,R){return D.add(H(R))}i.j=function(D){if(N(this)||N(D))return T;if(q(this))return q(D)?H(this).j(H(D)):H(H(this).j(D));if(q(D))return H(this.j(H(D)));if(0>this.l(O)&&0>D.l(O))return g(this.m()*D.m());for(var R=this.g.length+D.g.length,b=[],M=0;M<2*R;M++)b[M]=0;for(M=0;M<this.g.length;M++)for(var P=0;P<D.g.length;P++){var V=this.i(M)>>>16,I=this.i(M)&65535,Rt=D.i(P)>>>16,st=D.i(P)&65535;b[2*M+2*P]+=I*st,Z(b,2*M+2*P),b[2*M+2*P+1]+=V*st,Z(b,2*M+2*P+1),b[2*M+2*P+1]+=I*Rt,Z(b,2*M+2*P+1),b[2*M+2*P+2]+=V*Rt,Z(b,2*M+2*P+2)}for(M=0;M<R;M++)b[M]=b[2*M+1]<<16|b[2*M];for(M=R;M<2*R;M++)b[M]=0;return new c(b,0)};function Z(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function ie(D,R){this.g=D,this.h=R}function le(D,R){if(N(R))throw Error("division by zero");if(N(D))return new ie(T,T);if(q(D))return R=le(H(D),R),new ie(H(R.g),H(R.h));if(q(R))return R=le(D,H(R)),new ie(H(R.g),R.h);if(30<D.g.length){if(q(D)||q(R))throw Error("slowDivide_ only works with positive integers.");for(var b=S,M=R;0>=M.l(D);)b=se(b),M=se(M);var P=fe(b,1),V=fe(M,1);for(M=fe(M,2),b=fe(b,2);!N(M);){var I=V.add(M);0>=I.l(D)&&(P=P.add(b),V=I),M=fe(M,1),b=fe(b,1)}return R=$(D,P.j(R)),new ie(P,R)}for(P=T;0<=D.l(R);){for(b=Math.max(1,Math.floor(D.m()/R.m())),M=Math.ceil(Math.log(b)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),V=g(b),I=V.j(R);q(I)||0<I.l(D);)b-=M,V=g(b),I=V.j(R);N(V)&&(V=S),P=P.add(V),D=$(D,I)}return new ie(P,D)}i.A=function(D){return le(this,D).h},i.and=function(D){for(var R=Math.max(this.g.length,D.g.length),b=[],M=0;M<R;M++)b[M]=this.i(M)&D.i(M);return new c(b,this.h&D.h)},i.or=function(D){for(var R=Math.max(this.g.length,D.g.length),b=[],M=0;M<R;M++)b[M]=this.i(M)|D.i(M);return new c(b,this.h|D.h)},i.xor=function(D){for(var R=Math.max(this.g.length,D.g.length),b=[],M=0;M<R;M++)b[M]=this.i(M)^D.i(M);return new c(b,this.h^D.h)};function se(D){for(var R=D.g.length+1,b=[],M=0;M<R;M++)b[M]=D.i(M)<<1|D.i(M-1)>>>31;return new c(b,D.h)}function fe(D,R){var b=R>>5;R%=32;for(var M=D.g.length-b,P=[],V=0;V<M;V++)P[V]=0<R?D.i(V+b)>>>R|D.i(V+b+1)<<32-R:D.i(V+b);return new c(P,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Zw=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,dr=c}).apply(typeof I0<"u"?I0:typeof self<"u"?self:typeof window<"u"?window:{});var Gh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jw,Iu,eR,rf,ug,tR,nR,iR;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gh=="object"&&Gh];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var w=0;w<h.length-1;w++){var U=h[w];if(!(U in v))break e;v=v[U]}h=h[h.length-1],w=v[h],_=_(w),_!=w&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,w=!1,U={next:function(){if(!w&&v<h.length){var Y=v++;return{value:_(Y,h[Y]),done:!1}}return w=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,w),h.apply(_,U)}}return function(){return h.apply(_,arguments)}}function S(h,_,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,S.apply(null,arguments)}function O(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var w=v.slice();return w.push.apply(w,arguments),h.apply(this,w)}}function N(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(w,U,Y){for(var re=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)re[Pe-2]=arguments[Pe];return _.prototype[U].apply(w,re)}}function q(h){const _=h.length;if(0<_){const v=Array(_);for(let w=0;w<_;w++)v[w]=h[w];return v}return[]}function H(h,_){for(let v=1;v<arguments.length;v++){const w=arguments[v];if(m(w)){const U=h.length||0,Y=w.length||0;h.length=U+Y;for(let re=0;re<Y;re++)h[U+re]=w[re]}else h.push(w)}}class ${constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function Z(h){return/^[\s\xa0]*$/.test(h)}function ie(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function le(h){return le[" "](h),h}le[" "]=function(){};var se=ie().indexOf("Gecko")!=-1&&!(ie().toLowerCase().indexOf("webkit")!=-1&&ie().indexOf("Edge")==-1)&&!(ie().indexOf("Trident")!=-1||ie().indexOf("MSIE")!=-1)&&ie().indexOf("Edge")==-1;function fe(h,_,v){for(const w in h)_.call(v,h[w],w,h)}function D(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function R(h){const _={};for(const v in h)_[v]=h[v];return _}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(h,_){let v,w;for(let U=1;U<arguments.length;U++){w=arguments[U];for(v in w)h[v]=w[v];for(let Y=0;Y<b.length;Y++)v=b[Y],Object.prototype.hasOwnProperty.call(w,v)&&(h[v]=w[v])}}function P(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function V(h){d.setTimeout(()=>{throw h},0)}function I(){var h=He;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Rt{constructor(){this.h=this.g=null}add(_,v){const w=st.get();w.set(_,v),this.h?this.h.next=w:this.g=w,this.h=w}}var st=new $(()=>new Q,h=>h.reset());class Q{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,me=!1,He=new Rt,x=()=>{const h=d.Promise.resolve(void 0);ae=()=>{h.then(te)}};var te=()=>{for(var h;h=I();){try{h.h.call(h.g)}catch(v){V(v)}var _=st;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}me=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ne(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ne.prototype.h=function(){this.defaultPrevented=!0};var he=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h}();function we(h,_){if(ne.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,w=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(se){e:{try{le(_.nodeName);var U=!0;break e}catch{}U=!1}U||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:ge[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&we.aa.h.call(this)}}N(we,ne);var ge={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var rt="closure_listenable_"+(1e6*Math.random()|0),Xe=0;function ci(h,_,v,w,U){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!w,this.ha=U,this.key=++Xe,this.da=this.fa=!1}function Cs(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function ji(h){this.src=h,this.g={},this.h=0}ji.prototype.add=function(h,_,v,w,U){var Y=h.toString();h=this.g[Y],h||(h=this.g[Y]=[],this.h++);var re=Rr(h,_,w,U);return-1<re?(_=h[re],v||(_.fa=!1)):(_=new ci(_,this.src,Y,!!w,U),_.fa=v,h.push(_)),_};function wr(h,_){var v=_.type;if(v in h.g){var w=h.g[v],U=Array.prototype.indexOf.call(w,_,void 0),Y;(Y=0<=U)&&Array.prototype.splice.call(w,U,1),Y&&(Cs(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Rr(h,_,v,w){for(var U=0;U<h.length;++U){var Y=h[U];if(!Y.da&&Y.listener==_&&Y.capture==!!v&&Y.ha==w)return U}return-1}var br="closure_lm_"+(1e6*Math.random()|0),al={};function _c(h,_,v,w,U){if(Array.isArray(_)){for(var Y=0;Y<_.length;Y++)_c(h,_[Y],v,w,U);return null}return v=yc(v),h&&h[rt]?h.K(_,v,g(w)?!!w.capture:!1,U):Pn(h,_,v,!1,w,U)}function Pn(h,_,v,w,U,Y){if(!_)throw Error("Invalid event type");var re=g(U)?!!U.capture:!!U,Pe=Na(h);if(Pe||(h[br]=Pe=new ji(h)),v=Pe.add(_,v,w,re,Y),v.proxy)return v;if(w=hd(),v.proxy=w,w.src=h,w.listener=v,h.addEventListener)he||(U=re),U===void 0&&(U=!1),h.addEventListener(_.toString(),w,U);else if(h.attachEvent)h.attachEvent(Cr(_.toString()),w);else if(h.addListener&&h.removeListener)h.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return v}function hd(){function h(v){return _.call(h.src,h.listener,v)}const _=fd;return h}function ol(h,_,v,w,U){if(Array.isArray(_))for(var Y=0;Y<_.length;Y++)ol(h,_[Y],v,w,U);else w=g(w)?!!w.capture:!!w,v=yc(v),h&&h[rt]?(h=h.i,_=String(_).toString(),_ in h.g&&(Y=h.g[_],v=Rr(Y,v,w,U),-1<v&&(Cs(Y[v]),Array.prototype.splice.call(Y,v,1),Y.length==0&&(delete h.g[_],h.h--)))):h&&(h=Na(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Rr(_,v,w,U)),(v=-1<h?_[h]:null)&&Ia(v))}function Ia(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[rt])wr(_.i,h);else{var v=h.type,w=h.proxy;_.removeEventListener?_.removeEventListener(v,w,h.capture):_.detachEvent?_.detachEvent(Cr(v),w):_.addListener&&_.removeListener&&_.removeListener(w),(v=Na(_))?(wr(v,h),v.h==0&&(v.src=null,_[br]=null)):Cs(h)}}}function Cr(h){return h in al?al[h]:al[h]="on"+h}function fd(h,_){if(h.da)h=!0;else{_=new we(_,this);var v=h.listener,w=h.ha||h.src;h.fa&&Ia(h),h=v.call(w,_)}return h}function Na(h){return h=h[br],h instanceof ji?h:null}var ll="__closure_events_fn_"+(1e9*Math.random()>>>0);function yc(h){return typeof h=="function"?h:(h[ll]||(h[ll]=function(_){return h.handleEvent(_)}),h[ll])}function gt(){oe.call(this),this.i=new ji(this),this.M=this,this.F=null}N(gt,oe),gt.prototype[rt]=!0,gt.prototype.removeEventListener=function(h,_,v,w){ol(this,h,_,v,w)};function Qe(h,_){var v,w=h.F;if(w)for(v=[];w;w=w.F)v.push(w);if(h=h.M,w=_.type||_,typeof _=="string")_=new ne(_,h);else if(_ instanceof ne)_.target=_.target||h;else{var U=_;_=new ne(w,h),M(_,U)}if(U=!0,v)for(var Y=v.length-1;0<=Y;Y--){var re=_.g=v[Y];U=wn(re,w,!0,_)&&U}if(re=_.g=h,U=wn(re,w,!0,_)&&U,U=wn(re,w,!1,_)&&U,v)for(Y=0;Y<v.length;Y++)re=_.g=v[Y],U=wn(re,w,!1,_)&&U}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],w=0;w<v.length;w++)Cs(v[w]);delete h.g[_],h.h--}}this.F=null},gt.prototype.K=function(h,_,v,w){return this.i.add(String(h),_,!1,v,w)},gt.prototype.L=function(h,_,v,w){return this.i.add(String(h),_,!0,v,w)};function wn(h,_,v,w){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var U=!0,Y=0;Y<_.length;++Y){var re=_[Y];if(re&&!re.da&&re.capture==v){var Pe=re.listener,xt=re.ha||re.src;re.fa&&wr(h.i,re),U=Pe.call(xt,w)!==!1&&U}}return U&&!w.defaultPrevented}function tn(h,_,v){if(typeof h=="function")v&&(h=S(h,v));else if(h&&typeof h.handleEvent=="function")h=S(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function vc(h){h.g=tn(()=>{h.g=null,h.i&&(h.i=!1,vc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class dd extends oe{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:vc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ir(h){oe.call(this),this.h=h,this.g={}}N(Ir,oe);var Nr=[];function Or(h){fe(h.g,function(_,v){this.g.hasOwnProperty(v)&&Ia(_)},h),h.g={}}Ir.prototype.N=function(){Ir.aa.N.call(this),Or(this)},Ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zn=d.JSON.stringify,Oa=d.JSON.parse,Dr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function ul(){}ul.prototype.h=null;function cl(h){return h.h||(h.h=h.i())}function hl(){}var Hi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fi(){ne.call(this,"d")}N(Fi,ne);function fl(){ne.call(this,"c")}N(fl,ne);var hi={},dl=null;function Is(){return dl=dl||new gt}hi.La="serverreachability";function Da(h){ne.call(this,hi.La,h)}N(Da,ne);function Ns(h){const _=Is();Qe(_,new Da(_))}hi.STAT_EVENT="statevent";function Ec(h,_){ne.call(this,hi.STAT_EVENT,h),this.stat=_}N(Ec,ne);function ht(h){const _=Is();Qe(_,new Ec(_,h))}hi.Ma="timingevent";function Dt(h,_){ne.call(this,hi.Ma,h),this.size=_}N(Dt,ne);function bt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Ln(){this.g=!0}Ln.prototype.xa=function(){this.g=!1};function pl(h,_,v,w,U,Y){h.info(function(){if(h.g)if(Y)for(var re="",Pe=Y.split("&"),xt=0;xt<Pe.length;xt++){var Le=Pe[xt].split("=");if(1<Le.length){var Bt=Le[0];Le=Le[1];var Mt=Bt.split("_");re=2<=Mt.length&&Mt[1]=="type"?re+(Bt+"="+Le+"&"):re+(Bt+"=redacted&")}}else re=null;else re=Y;return"XMLHTTP REQ ("+w+") [attempt "+U+"]: "+_+`
`+v+`
`+re})}function pd(h,_,v,w,U,Y,re){h.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+U+"]: "+_+`
`+v+`
`+Y+" "+re})}function Os(h,_,v,w){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+xr(h,v)+(w?" "+w:"")})}function Tc(h,_){h.info(function(){return"TIMEOUT: "+_})}Ln.prototype.info=function(){};function xr(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var w=v[h];if(!(2>w.length)){var U=w[1];if(Array.isArray(U)&&!(1>U.length)){var Y=U[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var re=1;re<U.length;re++)U[re]=""}}}}return Zn(v)}catch{return _}}var Ds={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fi;function di(){}N(di,ul),di.prototype.g=function(){return new XMLHttpRequest},di.prototype.i=function(){return{}},fi=new di;function dn(h,_,v,w){this.j=h,this.i=_,this.l=v,this.R=w||1,this.U=new Ir(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Et}function Et(){this.i=null,this.g="",this.h=!1}var ml={},xa={};function Jn(h,_,v){h.L=1,h.v=Vr(Rn(_)),h.m=v,h.P=!0,Gi(h,null)}function Gi(h,_){h.F=Date.now(),Mr(h),h.A=Rn(h.v);var v=h.A,w=h.R;Array.isArray(w)||(w=[String(w)]),Tl(v.i,"t",w),h.C=0,v=h.j.J,h.h=new Et,h.g=Vc(h.j,v?_:null,!h.m),0<h.O&&(h.M=new dd(S(h.Y,h,h.g),h.O)),_=h.U,v=h.g,w=h.ca;var U="readystatechange";Array.isArray(U)||(U&&(Nr[0]=U.toString()),U=Nr);for(var Y=0;Y<U.length;Y++){var re=_c(v,U[Y],w||_.handleEvent,!1,_.h||_);if(!re)break;_.g[re.key]=re}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Ns(),pl(h.i,h.u,h.A,h.l,h.R,h.m)}dn.prototype.ca=function(h){h=h.target;const _=this.M;_&&zn(h)==3?_.j():this.Y(h)},dn.prototype.Y=function(h){try{if(h==this.g)e:{const Mt=zn(this.g);var _=this.g.Ba();const Ji=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||Nc(this.g)))){this.J||Mt!=4||_==7||(_==8||0>=Ji?Ns(3):Ns(2)),xs(this);var v=this.g.Z();this.X=v;t:if(Sc(this)){var w=Nc(this.g);h="";var U=w.length,Y=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),pi(this);var re="";break t}this.h.i=new d.TextDecoder}for(_=0;_<U;_++)this.h.h=!0,h+=this.h.i.decode(w[_],{stream:!(Y&&_==U-1)});w.length=0,this.h.g+=h,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=v==200,pd(this.i,this.u,this.A,this.l,this.R,Mt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,xt=this.g;if((Pe=xt.g?xt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(Pe)){var Le=Pe;break t}}Le=null}if(v=Le)Os(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kr(this,v);else{this.o=!1,this.s=3,ht(12),Kt(this),pi(this);break e}}if(this.P){v=!0;let Yt;for(;!this.J&&this.C<re.length;)if(Yt=Ac(this,re),Yt==xa){Mt==4&&(this.s=4,ht(14),v=!1),Os(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==ml){this.s=4,ht(15),Os(this.i,this.l,re,"[Invalid Chunk]"),v=!1;break}else Os(this.i,this.l,Yt,null),kr(this,Yt);if(Sc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||re.length!=0||this.h.h||(this.s=1,ht(16),v=!1),this.o=this.o&&v,!v)Os(this.i,this.l,re,"[Invalid Chunked Response]"),Kt(this),pi(this);else if(0<re.length&&!this.W){this.W=!0;var Bt=this.j;Bt.g==this&&Bt.ba&&!Bt.M&&(Bt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Gr(Bt),Bt.M=!0,ht(11))}}else Os(this.i,this.l,re,null),kr(this,re);Mt==4&&Kt(this),this.o&&!this.J&&(Mt==4?kc(this.j,this):(this.o=!1,Mr(this)))}else vd(this.g),v==400&&0<re.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),Kt(this),pi(this)}}}catch{}finally{}};function Sc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Ac(h,_){var v=h.C,w=_.indexOf(`
`,v);return w==-1?xa:(v=Number(_.substring(v,w)),isNaN(v)?ml:(w+=1,w+v>_.length?xa:(_=_.slice(w,w+v),h.C=w+v,_)))}dn.prototype.cancel=function(){this.J=!0,Kt(this)};function Mr(h){h.S=Date.now()+h.I,wc(h,h.I)}function wc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=bt(S(h.ba,h),_)}function xs(h){h.B&&(d.clearTimeout(h.B),h.B=null)}dn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Tc(this.i,this.A),this.L!=2&&(Ns(),ht(17)),Kt(this),this.s=2,pi(this)):wc(this,this.S-h)};function pi(h){h.j.G==0||h.J||kc(h.j,h)}function Kt(h){xs(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Or(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function kr(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||gl(v.h,h))){if(!h.K&&gl(v.h,h)&&v.G==3){try{var w=v.Da.g.parse(_)}catch{w=null}if(Array.isArray(w)&&w.length==3){var U=w;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)qa(v),Ha(v);else break e;bl(v),ht(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=bt(S(v.Za,v),6e3));if(1>=ka(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Zi(v,11)}else if((h.K||v.g==h)&&qa(v),!Z(_))for(U=v.Da.g.parse(_),_=0;_<U.length;_++){let Le=U[_];if(v.T=Le[0],Le=Le[1],v.G==2)if(Le[0]=="c"){v.K=Le[1],v.ia=Le[2];const Bt=Le[3];Bt!=null&&(v.la=Bt,v.j.info("VER="+v.la));const Mt=Le[4];Mt!=null&&(v.Aa=Mt,v.j.info("SVER="+v.Aa));const Ji=Le[5];Ji!=null&&typeof Ji=="number"&&0<Ji&&(w=1.5*Ji,v.L=w,v.j.info("backChannelRequestTimeoutMs_="+w)),w=v;const Yt=h.g;if(Yt){const Ti=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ti){var Y=w.h;Y.g||Ti.indexOf("spdy")==-1&&Ti.indexOf("quic")==-1&&Ti.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(Pa(Y,Y.h),Y.h=null))}if(w.D){const Il=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Il&&(w.ya=Il,Ze(w.I,w.D,Il))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),w=v;var re=h;if(w.qa=Lc(w,w.J?w.ia:null,w.W),re.K){pn(w.h,re);var Pe=re,xt=w.L;xt&&(Pe.I=xt),Pe.B&&(xs(Pe),Mr(Pe)),w.g=re}else xc(w);0<v.i.length&&Fa(v)}else Le[0]!="stop"&&Le[0]!="close"||Zi(v,7);else v.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?Zi(v,7):wl(v):Le[0]!="noop"&&v.l&&v.l.ta(Le),v.v=0)}}Ns(4)}catch{}}var Rc=class{constructor(h,_){this.g=h,this.map=_}};function Ki(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ma(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function ka(h){return h.h?1:h.g?h.g.size:0}function gl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Pa(h,_){h.g?h.g.add(_):h.h=_}function pn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Ki.prototype.cancel=function(){if(this.i=_l(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function _l(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return q(h.i)}function md(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],v=h.length,w=0;w<v;w++)_.push(h[w]);return _}_=[],v=0;for(w in h)_[v++]=h[w];return _}function La(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const w in h)_[v++]=w;return _}}}function yl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=La(h),w=md(h),U=w.length,Y=0;Y<U;Y++)_.call(void 0,w[Y],v&&v[Y],h)}var Pr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gd(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var w=h[v].indexOf("="),U=null;if(0<=w){var Y=h[v].substring(0,w);U=h[v].substring(w+1)}else Y=h[v];_(Y,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Ct(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ct){this.h=h.h,Lr(this,h.j),this.o=h.o,this.g=h.g,Ms(this,h.s),this.l=h.l;var _=h.i,v=new Qi;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),Yi(this,v),this.m=h.m}else h&&(_=String(h).match(Pr))?(this.h=!1,Lr(this,_[1]||"",!0),this.o=Vn(_[2]||""),this.g=Vn(_[3]||"",!0),Ms(this,_[4]),this.l=Vn(_[5]||"",!0),Yi(this,_[6]||"",!0),this.m=Vn(_[7]||"")):(this.h=!1,this.i=new Qi(null,this.h))}Ct.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Ur(_,vl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Ur(_,vl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(Ur(v,v.charAt(0)=="/"?_d:El,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",Ur(v,Va)),h.join("")};function Rn(h){return new Ct(h)}function Lr(h,_,v){h.j=v?Vn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Ms(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Yi(h,_,v){_ instanceof Qi?(h.i=_,Cc(h.i,h.h)):(v||(_=Ur(_,yd)),h.i=new Qi(_,h.h))}function Ze(h,_,v){h.i.set(_,v)}function Vr(h){return Ze(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Vn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Ur(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,bc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function bc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var vl=/[#\/\?@]/g,El=/[#\?:]/g,_d=/[#\?]/g,yd=/[#\?@]/g,Va=/#/g;function Qi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Un(h){h.g||(h.g=new Map,h.h=0,h.i&&gd(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}i=Qi.prototype,i.add=function(h,_){Un(this),this.i=null,h=mi(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function $i(h,_){Un(h),_=mi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Wi(h,_){return Un(h),_=mi(h,_),h.g.has(_)}i.forEach=function(h,_){Un(this),this.g.forEach(function(v,w){v.forEach(function(U){h.call(_,U,w,this)},this)},this)},i.na=function(){Un(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let w=0;w<_.length;w++){const U=h[w];for(let Y=0;Y<U.length;Y++)v.push(_[w])}return v},i.V=function(h){Un(this);let _=[];if(typeof h=="string")Wi(this,h)&&(_=_.concat(this.g.get(mi(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},i.set=function(h,_){return Un(this),this.i=null,h=mi(this,h),Wi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},i.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Tl(h,_,v){$i(h,_),0<v.length&&(h.i=null,h.g.set(mi(h,_),q(v)),h.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var w=_[v];const Y=encodeURIComponent(String(w)),re=this.V(w);for(w=0;w<re.length;w++){var U=Y;re[w]!==""&&(U+="="+encodeURIComponent(String(re[w]))),h.push(U)}}return this.i=h.join("&")};function mi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Cc(h,_){_&&!h.j&&(Un(h),h.i=null,h.g.forEach(function(v,w){var U=w.toLowerCase();w!=U&&($i(this,w),Tl(this,U,v))},h)),h.j=_}function Br(h,_){const v=new Ln;if(d.Image){const w=new Image;w.onload=O(Bn,v,"TestLoadImage: loaded",!0,_,w),w.onerror=O(Bn,v,"TestLoadImage: error",!1,_,w),w.onabort=O(Bn,v,"TestLoadImage: abort",!1,_,w),w.ontimeout=O(Bn,v,"TestLoadImage: timeout",!1,_,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=h}else _(!1)}function ei(h,_){const v=new Ln,w=new AbortController,U=setTimeout(()=>{w.abort(),Bn(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:w.signal}).then(Y=>{clearTimeout(U),Y.ok?Bn(v,"TestPingServer: ok",!0,_):Bn(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(U),Bn(v,"TestPingServer: error",!1,_)})}function Bn(h,_,v,w,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),w(v)}catch{}}function zr(){this.g=new Dr}function gi(h,_,v){const w=v||"";try{yl(h,function(U,Y){let re=U;g(U)&&(re=Zn(U)),_.push(w+Y+"="+encodeURIComponent(re))})}catch(U){throw _.push(w+"type="+encodeURIComponent("_badmap")),U}}function ks(h){this.l=h.Ub||null,this.j=h.eb||!1}N(ks,ul),ks.prototype.g=function(){return new Xi(this.l,this.j)},ks.prototype.i=function(h){return function(){return h}}({});function Xi(h,_){gt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Xi,gt),i=Xi.prototype,i.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,yi(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,yi(this)),this.g&&(this.readyState=3,yi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?_i(this):yi(this),this.readyState==3&&Sl(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,_i(this))},i.Qa=function(h){this.g&&(this.response=h,_i(this))},i.ga=function(){this.g&&_i(this)};function _i(h){h.readyState=4,h.l=null,h.j=null,h.v=null,yi(h)}i.setRequestHeader=function(h,_){this.u.append(h,_)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function yi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Al(h){let _="";return fe(h,function(v,w){_+=w,_+=":",_+=v,_+=`\r
`}),_}function Ut(h,_,v){e:{for(w in v){var w=!1;break e}w=!0}w||(v=Al(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):Ze(h,_,v))}function Ke(h){gt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Ke,gt);var Ua=/^https?$/i,jr=["POST","PUT"];i=Ke.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,_,v,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fi.g(),this.v=this.o?cl(this.o):cl(fi),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Y){Ic(this,Y);return}if(h=v||"",v=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var U in w)v.set(U,w[U]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const Y of w.keys())v.set(Y,w.get(Y));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(v.keys()).find(Y=>Y.toLowerCase()=="content-type"),U=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(jr,_,void 0))||w||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,re]of v)this.g.setRequestHeader(Y,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hr(this),this.u=!0,this.g.send(h),this.u=!1}catch(Y){Ic(this,Y)}};function Ic(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Ba(h),vi(h)}function Ba(h){h.A||(h.A=!0,Qe(h,"complete"),Qe(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Qe(this,"complete"),Qe(this,"abort"),vi(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vi(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?za(this):this.bb())},i.bb=function(){za(this)};function za(h){if(h.h&&typeof c<"u"&&(!h.v[1]||zn(h)!=4||h.Z()!=2)){if(h.u&&zn(h)==4)tn(h.Ea,0,h);else if(Qe(h,"readystatechange"),zn(h)==4){h.h=!1;try{const re=h.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var w;if(w=re===0){var U=String(h.D).match(Pr)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),w=!Ua.test(U?U.toLowerCase():"")}v=w}if(v)Qe(h,"complete"),Qe(h,"success");else{h.m=6;try{var Y=2<zn(h)?h.g.statusText:""}catch{Y=""}h.l=Y+" ["+h.Z()+"]",Ba(h)}}finally{vi(h)}}}}function vi(h,_){if(h.g){Hr(h);const v=h.g,w=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Qe(h,"ready");try{v.onreadystatechange=w}catch{}}}function Hr(h){h.I&&(d.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function zn(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Oa(_)}};function Nc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function vd(h){const _={};h=(h.g&&2<=zn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<h.length;w++){if(Z(h[w]))continue;var v=P(h[w]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Y=_[U]||[];_[U]=Y,Y.push(v)}D(_,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fr(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function ja(h){this.Aa=0,this.i=[],this.j=new Ln,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fr("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fr("baseRetryDelayMs",5e3,h),this.cb=Fr("retryDelaySeedMs",1e4,h),this.Wa=Fr("forwardChannelMaxRetries",2,h),this.wa=Fr("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Ki(h&&h.concurrentRequestLimit),this.Da=new zr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=ja.prototype,i.la=8,i.G=1,i.connect=function(h,_,v,w){ht(0),this.W=h,this.H=_||{},v&&w!==void 0&&(this.H.OSID=v,this.H.OAID=w),this.F=this.X,this.I=Lc(this,null,this.W),Fa(this)};function wl(h){if(Oc(h),h.G==3){var _=h.U++,v=Rn(h.I);if(Ze(v,"SID",h.K),Ze(v,"RID",_),Ze(v,"TYPE","terminate"),qr(h,v),_=new dn(h,h.j,_),_.L=2,_.v=Vr(Rn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=Vc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Mr(_)}Pc(h)}function Ha(h){h.g&&(Gr(h),h.g.cancel(),h.g=null)}function Oc(h){Ha(h),h.u&&(d.clearTimeout(h.u),h.u=null),qa(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Fa(h){if(!Ma(h.h)&&!h.s){h.s=!0;var _=h.Ga;ae||x(),me||(ae(),me=!0),He.add(_,h),h.B=0}}function Ed(h,_){return ka(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=bt(S(h.Ga,h,_),Cl(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const U=new dn(this,this.j,h);let Y=this.o;if(this.S&&(Y?(Y=R(Y),M(Y,this.S)):Y=this.S),this.m!==null||this.O||(U.H=Y,Y=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var w=this.i[v];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(_+=w,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=Dc(this,U,_),v=Rn(this.I),Ze(v,"RID",h),Ze(v,"CVER",22),this.D&&Ze(v,"X-HTTP-Session-Id",this.D),qr(this,v),Y&&(this.O?_="headers="+encodeURIComponent(String(Al(Y)))+"&"+_:this.m&&Ut(v,this.m,Y)),Pa(this.h,U),this.Ua&&Ze(v,"TYPE","init"),this.P?(Ze(v,"$req",_),Ze(v,"SID","null"),U.T=!0,Jn(U,v,null)):Jn(U,v,_),this.G=2}}else this.G==3&&(h?Rl(this,h):this.i.length==0||Ma(this.h)||Rl(this))};function Rl(h,_){var v;_?v=_.l:v=h.U++;const w=Rn(h.I);Ze(w,"SID",h.K),Ze(w,"RID",v),Ze(w,"AID",h.T),qr(h,w),h.m&&h.o&&Ut(w,h.m,h.o),v=new dn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Dc(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Pa(h.h,v),Jn(v,w,_)}function qr(h,_){h.H&&fe(h.H,function(v,w){Ze(_,w,v)}),h.l&&yl({},function(v,w){Ze(_,w,v)})}function Dc(h,_,v){v=Math.min(h.i.length,v);var w=h.l?S(h.l.Na,h.l,h):null;e:{var U=h.i;let Y=-1;for(;;){const re=["count="+v];Y==-1?0<v?(Y=U[0].g,re.push("ofs="+Y)):Y=0:re.push("ofs="+Y);let Pe=!0;for(let xt=0;xt<v;xt++){let Le=U[xt].g;const Bt=U[xt].map;if(Le-=Y,0>Le)Y=Math.max(0,U[xt].g-100),Pe=!1;else try{gi(Bt,re,"req"+Le+"_")}catch{w&&w(Bt)}}if(Pe){w=re.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,w}function xc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ae||x(),me||(ae(),me=!0),He.add(_,h),h.v=0}}function bl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=bt(S(h.Fa,h),Cl(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,Mc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=bt(S(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),Ha(this),Mc(this))};function Gr(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Mc(h){h.g=new dn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Rn(h.qa);Ze(_,"RID","rpc"),Ze(_,"SID",h.K),Ze(_,"AID",h.T),Ze(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Ze(_,"TO",h.ja),Ze(_,"TYPE","xmlhttp"),qr(h,_),h.m&&h.o&&Ut(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=Vr(Rn(_)),v.m=null,v.P=!0,Gi(v,h)}i.Za=function(){this.C!=null&&(this.C=null,Ha(this),bl(this),ht(19))};function qa(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function kc(h,_){var v=null;if(h.g==_){qa(h),Gr(h),h.g=null;var w=2}else if(gl(h.h,_))v=_.D,pn(h.h,_),w=1;else return;if(h.G!=0){if(_.o)if(w==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var U=h.B;w=Is(),Qe(w,new Dt(w,v)),Fa(h)}else xc(h);else if(U=_.s,U==3||U==0&&0<_.X||!(w==1&&Ed(h,_)||w==2&&bl(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),U){case 1:Zi(h,5);break;case 4:Zi(h,10);break;case 3:Zi(h,6);break;default:Zi(h,2)}}}function Cl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function Zi(h,_){if(h.j.info("Error code "+_),_==2){var v=S(h.fb,h),w=h.Xa;const U=!w;w=new Ct(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Lr(w,"https"),Vr(w),U?Br(w.toString(),v):ei(w.toString(),v)}else ht(2);h.G=0,h.l&&h.l.sa(_),Pc(h),Oc(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function Pc(h){if(h.G=0,h.ka=[],h.l){const _=_l(h.h);(_.length!=0||h.i.length!=0)&&(H(h.ka,_),H(h.ka,h.i),h.h.i.length=0,q(h.i),h.i.length=0),h.l.ra()}}function Lc(h,_,v){var w=v instanceof Ct?Rn(v):new Ct(v);if(w.g!="")_&&(w.g=_+"."+w.g),Ms(w,w.s);else{var U=d.location;w=U.protocol,_=_?_+"."+U.hostname:U.hostname,U=+U.port;var Y=new Ct(null);w&&Lr(Y,w),_&&(Y.g=_),U&&Ms(Y,U),v&&(Y.l=v),w=Y}return v=h.D,_=h.ya,v&&_&&Ze(w,v,_),Ze(w,"VER",h.la),qr(h,w),w}function Vc(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ke(new ks({eb:v})):new Ke(h.pa),_.Ha(h.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uc(){}i=Uc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ga(){}Ga.prototype.g=function(h,_){return new mn(h,_)};function mn(h,_){gt.call(this),this.g=new ja(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!Z(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!Z(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ei(this)}N(mn,gt),mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){wl(this.g)},mn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=Zn(h),h=v);_.i.push(new Rc(_.Ya++,h)),_.G==3&&Fa(_)},mn.prototype.N=function(){this.g.l=null,delete this.j,wl(this.g),delete this.g,mn.aa.N.call(this)};function Bc(h){Fi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}N(Bc,Fi);function zc(){fl.call(this),this.status=1}N(zc,fl);function Ei(h){this.g=h}N(Ei,Uc),Ei.prototype.ua=function(){Qe(this.g,"a")},Ei.prototype.ta=function(h){Qe(this.g,new Bc(h))},Ei.prototype.sa=function(h){Qe(this.g,new zc)},Ei.prototype.ra=function(){Qe(this.g,"b")},Ga.prototype.createWebChannel=Ga.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,iR=function(){return new Ga},nR=function(){return Is()},tR=hi,ug={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ds.NO_ERROR=0,Ds.TIMEOUT=8,Ds.HTTP_ERROR=6,rf=Ds,qi.COMPLETE="complete",eR=qi,hl.EventType=Hi,Hi.OPEN="a",Hi.CLOSE="b",Hi.ERROR="c",Hi.MESSAGE="d",gt.prototype.listen=gt.prototype.K,Iu=hl,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Jw=Ke}).apply(typeof Gh<"u"?Gh:typeof self<"u"?self:typeof window<"u"?window:{});const N0="@firebase/firestore",O0="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}on.UNAUTHENTICATED=new on(null),on.GOOGLE_CREDENTIALS=new on("google-credentials-uid"),on.FIRST_PARTY=new on("first-party-uid"),on.MOCK_USER=new on("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Hf("@firebase/firestore");function Ao(){return Ta.logLevel}function de(i,...e){if(Ta.logLevel<=Me.DEBUG){const t=e.map(E_);Ta.debug(`Firestore (${il}): ${i}`,...t)}}function ws(i,...e){if(Ta.logLevel<=Me.ERROR){const t=e.map(E_);Ta.error(`Firestore (${il}): ${i}`,...t)}}function jo(i,...e){if(Ta.logLevel<=Me.WARN){const t=e.map(E_);Ta.warn(`Firestore (${il}): ${i}`,...t)}}function E_(i){if(typeof i=="string")return i;try{/**
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
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,sR(i,s,t)}function sR(i,e,t){let s=`FIRESTORE (${il}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw ws(s),new Error(s)}function mt(i,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,i||sR(e,a,s)}function je(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ee extends Ui{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(on.UNAUTHENTICATED))}shutdown(){}}class Pk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Lk{constructor(e){this.t=e,this.currentUser=on.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){mt(this.o===void 0,42304);let s=this.i;const a=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let l=new da;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new da,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const m=l;e.enqueueRetryable(async()=>{await m.promise,await a(this.currentUser)})},d=m=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(m=>d(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?d(m):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new da)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(mt(typeof s.accessToken=="string",31837,{l:s}),new rR(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return mt(e===null||typeof e=="string",2055,{h:e}),new on(e)}}class Vk{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=on.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Uk{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Vk(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(on.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bk{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){mt(this.o===void 0,3512);const s=l=>{l.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,de("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new D0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(mt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new D0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function zk(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function aR(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=zk(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Oe(i,e){return i<e?-1:i>e?1:0}function cg(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),a=e.codePointAt(t);if(s!==a){if(s<128&&a<128)return Oe(s,a);{const l=aR(),c=jk(l.encode(x0(i,t)),l.encode(x0(e,t)));return c!==0?c:Oe(s,a)}}t+=s>65535?2:1}return Oe(i.length,e.length)}function x0(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function jk(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Oe(i[t],e[t]);return Oe(i.length,e.length)}function Ho(i,e,t){return i.length===e.length&&i.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=-62135596800,k0=1e6;class An{static now(){return An.fromMillis(Date.now())}static fromDate(e){return An.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*k0);return new An(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ee(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ee(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<M0)throw new Ee(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ee(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/k0}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-M0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new An(0,0))}static max(){return new Re(new An(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="__name__";class Ci{constructor(e,t,s){t===void 0?t=0:t>e.length&&be(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&be(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ci.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Ci.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Oe(e.length,t.length)}static compareSegments(e,t){const s=Ci.isNumericId(e),a=Ci.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Ci.extractNumericId(e).compare(Ci.extractNumericId(t)):cg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class vt extends Ci{construct(e,t,s){return new vt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new Ee(ue.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new vt(t)}static emptyPath(){return new vt([])}}const Hk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _n extends Ci{construct(e,t,s){return new _n(e,t,s)}static isValidIdentifier(e){return Hk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===P0}static keyField(){return new _n([P0])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new Ee(ue.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new Ee(ue.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new Ee(ue.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new Ee(ue.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _n(t)}static emptyPath(){return new _n([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.path=e}static fromPath(e){return new Te(vt.fromString(e))}static fromName(e){return new Te(vt.fromString(e).popFirst(5))}static empty(){return new Te(vt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&vt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return vt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Te(new vt(e.slice()))}}/**
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
 */const Qu=-1;function Fk(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=Re.fromTimestamp(s===1e9?new An(t+1,0):new An(t,s));return new gr(a,Te.empty(),e)}function qk(i){return new gr(i.readTime,i.key,Qu)}class gr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new gr(Re.min(),Te.empty(),Qu)}static max(){return new gr(Re.max(),Te.empty(),Qu)}}function Gk(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=Te.comparator(i.documentKey,e.documentKey),t!==0?t:Oe(i.largestBatchId,e.largestBatchId))}/**
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
 */const Kk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jf(i){if(i.code!==ue.FAILED_PRECONDITION||i.message!==Kk)throw i;de("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&be(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ee?t:ee.resolve(t)}catch(t){return ee.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.reject(t)}static resolve(e){return new ee((t,s)=>{t(e)})}static reject(e){return new ee((t,s)=>{s(e)})}static waitFor(e){return new ee((t,s)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},m=>s(m))}),c=!0,l===a&&t()})}static or(e){let t=ee.resolve(!1);for(const s of e)t=t.next(a=>a?ee.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new ee((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let m=0;m<l;m++){const g=m;t(e[g]).next(y=>{c[g]=y,++d,d===l&&s(c)},y=>a(y))}})}static doWhile(e,t){return new ee((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function Qk(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function sl(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class ed{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}ed.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=-1;function td(i){return i==null}function hg(i){return i===0&&1/i==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR="";function Wk(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=L0(e)),e=Xk(i.get(t),e);return L0(e)}function Xk(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case lR:t+="";break;default:t+=l}}return t}function L0(i){return i+lR+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function fc(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Zk(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t){this.comparator=e,this.root=t||Zt.EMPTY}insert(e,t){return new wt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Zt.BLACK,null,null))}remove(e){return new wt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Zt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kh(this.root,e,this.comparator,!0)}}class Kh{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Zt{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Zt.RED,this.left=a??Zt.EMPTY,this.right=l??Zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Zt(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Zt.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw be(43730,{key:this.key,value:this.value});if(this.right.isRed())throw be(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw be(27949);return e+(this.isRed()?0:1)}}Zt.EMPTY=null,Zt.RED=!0,Zt.BLACK=!1;Zt.EMPTY=new class{constructor(){this.size=0}get key(){throw be(57766)}get value(){throw be(16141)}get color(){throw be(16727)}get left(){throw be(29726)}get right(){throw be(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Zt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.comparator=e,this.data=new wt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new U0(this.data.getIterator())}getIteratorFrom(e){return new U0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Vt(this.comparator);return t.data=e,t}}class U0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ar{constructor(e){this.fields=e,e.sort(_n.comparator)}static empty(){return new ar([])}unionWith(e){let t=new Vt(_n.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ar(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ho(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class uR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class en{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new uR("Invalid base64 string: "+l):l}}(e);return new en(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new en(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");const Jk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(i){if(mt(!!i,39018),typeof i=="string"){let e=0;const t=Jk.exec(i);if(mt(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:At(i.seconds),nanos:At(i.nanos)}}function At(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function yr(i){return typeof i=="string"?en.fromBase64String(i):en.fromUint8Array(i)}/**
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
 */const cR="server_timestamp",hR="__type__",fR="__previous_value__",dR="__local_write_time__";function T_(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[hR])===null||t===void 0?void 0:t.stringValue)===cR}function nd(i){const e=i.mapValue.fields[fR];return T_(e)?nd(e):e}function $u(i){const e=_r(i.mapValue.fields[dR].timestampValue);return new An(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,t,s,a,l,c,d,m,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=y}}const If="(default)";class Wu{constructor(e,t){this.projectId=e,this.database=t||If}static empty(){return new Wu("","")}get isDefaultDatabase(){return this.database===If}isEqual(e){return e instanceof Wu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const tP="__type__",nP="__max__",Yh={mapValue:{}},iP="__vector__",fg="value";function vr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?T_(i)?4:rP(i)?9007199254740991:sP(i)?10:11:be(28295,{value:i})}function ki(i,e){if(i===e)return!0;const t=vr(i);if(t!==vr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return $u(i).isEqual($u(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=_r(a.timestampValue),d=_r(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return yr(a.bytesValue).isEqual(yr(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return At(a.geoPointValue.latitude)===At(l.geoPointValue.latitude)&&At(a.geoPointValue.longitude)===At(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return At(a.integerValue)===At(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=At(a.doubleValue),d=At(l.doubleValue);return c===d?hg(c)===hg(d):isNaN(c)&&isNaN(d)}return!1}(i,e);case 9:return Ho(i.arrayValue.values||[],e.arrayValue.values||[],ki);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(V0(c)!==V0(d))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(d[m]===void 0||!ki(c[m],d[m])))return!1;return!0}(i,e);default:return be(52216,{left:i})}}function Xu(i,e){return(i.values||[]).find(t=>ki(t,e))!==void 0}function Fo(i,e){if(i===e)return 0;const t=vr(i),s=vr(e);if(t!==s)return Oe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(i.booleanValue,e.booleanValue);case 2:return function(l,c){const d=At(l.integerValue||l.doubleValue),m=At(c.integerValue||c.doubleValue);return d<m?-1:d>m?1:d===m?0:isNaN(d)?isNaN(m)?0:-1:1}(i,e);case 3:return B0(i.timestampValue,e.timestampValue);case 4:return B0($u(i),$u(e));case 5:return cg(i.stringValue,e.stringValue);case 6:return function(l,c){const d=yr(l),m=yr(c);return d.compareTo(m)}(i.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),m=c.split("/");for(let g=0;g<d.length&&g<m.length;g++){const y=Oe(d[g],m[g]);if(y!==0)return y}return Oe(d.length,m.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Oe(At(l.latitude),At(c.latitude));return d!==0?d:Oe(At(l.longitude),At(c.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return z0(i.arrayValue,e.arrayValue);case 10:return function(l,c){var d,m,g,y;const T=l.fields||{},S=c.fields||{},O=(d=T[fg])===null||d===void 0?void 0:d.arrayValue,N=(m=S[fg])===null||m===void 0?void 0:m.arrayValue,q=Oe(((g=O==null?void 0:O.values)===null||g===void 0?void 0:g.length)||0,((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0);return q!==0?q:z0(O,N)}(i.mapValue,e.mapValue);case 11:return function(l,c){if(l===Yh.mapValue&&c===Yh.mapValue)return 0;if(l===Yh.mapValue)return 1;if(c===Yh.mapValue)return-1;const d=l.fields||{},m=Object.keys(d),g=c.fields||{},y=Object.keys(g);m.sort(),y.sort();for(let T=0;T<m.length&&T<y.length;++T){const S=cg(m[T],y[T]);if(S!==0)return S;const O=Fo(d[m[T]],g[y[T]]);if(O!==0)return O}return Oe(m.length,y.length)}(i.mapValue,e.mapValue);default:throw be(23264,{Pe:t})}}function B0(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Oe(i,e);const t=_r(i),s=_r(e),a=Oe(t.seconds,s.seconds);return a!==0?a:Oe(t.nanos,s.nanos)}function z0(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=Fo(t[a],s[a]);if(l)return l}return Oe(t.length,s.length)}function qo(i){return dg(i)}function dg(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=_r(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return yr(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return Te.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=dg(l);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${dg(t.fields[c])}`;return a+"}"}(i.mapValue):be(61005,{value:i})}function af(i){switch(vr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=nd(i);return e?16+af(e):16;case 5:return 2*i.stringValue.length;case 6:return yr(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+af(l),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return fc(s.fields,(l,c)=>{a+=l.length+af(c)}),a}(i.mapValue);default:throw be(13486,{value:i})}}function pg(i){return!!i&&"integerValue"in i}function S_(i){return!!i&&"arrayValue"in i}function j0(i){return!!i&&"nullValue"in i}function H0(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Mm(i){return!!i&&"mapValue"in i}function sP(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[tP])===null||t===void 0?void 0:t.stringValue)===iP}function Vu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return fc(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Vu(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vu(i.arrayValue.values[t]);return e}return Object.assign({},i)}function rP(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===nP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.value=e}static empty(){return new Ii({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Mm(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vu(t)}setAll(e){let t=_n.emptyPath(),s={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const m=this.getFieldsMap(t);this.applyChanges(m,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Vu(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Mm(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ki(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Mm(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){fc(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new Ii(Vu(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new cn(e,0,Re.min(),Re.min(),Re.min(),Ii.empty(),0)}static newFoundDocument(e,t,s,a){return new cn(e,1,t,Re.min(),s,a,0)}static newNoDocument(e,t){return new cn(e,2,t,Re.min(),Re.min(),Ii.empty(),0)}static newUnknownDocument(e,t){return new cn(e,3,t,Re.min(),Re.min(),Ii.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ii.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ii.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nf{constructor(e,t){this.position=e,this.inclusive=t}}function F0(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?s=Te.comparator(Te.fromName(c.referenceValue),t.key):s=Fo(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function q0(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ki(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Of{constructor(e,t="asc"){this.field=e,this.dir=t}}function aP(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class pR{}class Lt extends pR{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new lP(e,t,s):t==="array-contains"?new hP(e,s):t==="in"?new fP(e,s):t==="not-in"?new dP(e,s):t==="array-contains-any"?new pP(e,s):new Lt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new uP(e,s):new cP(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Fo(t,this.value)):t!==null&&vr(this.value)===vr(t)&&this.matchesComparison(Fo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pi extends pR{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Pi(e,t)}matches(e){return mR(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function mR(i){return i.op==="and"}function gR(i){return oP(i)&&mR(i)}function oP(i){for(const e of i.filters)if(e instanceof Pi)return!1;return!0}function mg(i){if(i instanceof Lt)return i.field.canonicalString()+i.op.toString()+qo(i.value);if(gR(i))return i.filters.map(e=>mg(e)).join(",");{const e=i.filters.map(t=>mg(t)).join(",");return`${i.op}(${e})`}}function _R(i,e){return i instanceof Lt?function(s,a){return a instanceof Lt&&s.op===a.op&&s.field.isEqual(a.field)&&ki(s.value,a.value)}(i,e):i instanceof Pi?function(s,a){return a instanceof Pi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,c,d)=>l&&_R(c,a.filters[d]),!0):!1}(i,e):void be(19439)}function yR(i){return i instanceof Lt?function(t){return`${t.field.canonicalString()} ${t.op} ${qo(t.value)}`}(i):i instanceof Pi?function(t){return t.op.toString()+" {"+t.getFilters().map(yR).join(" ,")+"}"}(i):"Filter"}class lP extends Lt{constructor(e,t,s){super(e,t,s),this.key=Te.fromName(s.referenceValue)}matches(e){const t=Te.comparator(e.key,this.key);return this.matchesComparison(t)}}class uP extends Lt{constructor(e,t){super(e,"in",t),this.keys=vR("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class cP extends Lt{constructor(e,t){super(e,"not-in",t),this.keys=vR("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vR(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>Te.fromName(s.referenceValue))}class hP extends Lt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return S_(t)&&Xu(t.arrayValue,this.value)}}class fP extends Lt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xu(this.value.arrayValue,t)}}class dP extends Lt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Xu(this.value.arrayValue,t)}}class pP extends Lt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!S_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Xu(this.value.arrayValue,s))}}/**
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
 */class mP{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Ie=null}}function G0(i,e=null,t=[],s=[],a=null,l=null,c=null){return new mP(i,e,t,s,a,l,c)}function A_(i){const e=je(i);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>mg(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),td(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>qo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>qo(s)).join(",")),e.Ie=t}return e.Ie}function w_(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!aP(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!_R(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!q0(i.startAt,e.startAt)&&q0(i.endAt,e.endAt)}function gg(i){return Te.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=m,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function gP(i,e,t,s,a,l,c,d){return new id(i,e,t,s,a,l,c,d)}function R_(i){return new id(i)}function K0(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function _P(i){return i.collectionGroup!==null}function Uu(i){const e=je(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Vt(_n.comparator);return c.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new Of(l,s))}),t.has(_n.keyField().canonicalString())||e.Ee.push(new Of(_n.keyField(),s))}return e.Ee}function xi(i){const e=je(i);return e.de||(e.de=yP(e,Uu(i))),e.de}function yP(i,e){if(i.limitType==="F")return G0(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Of(a.field,l)});const t=i.endAt?new Nf(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Nf(i.startAt.position,i.startAt.inclusive):null;return G0(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function _g(i,e,t){return new id(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function sd(i,e){return w_(xi(i),xi(e))&&i.limitType===e.limitType}function ER(i){return`${A_(xi(i))}|lt:${i.limitType}`}function wo(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>yR(a)).join(", ")}]`),td(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>qo(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>qo(a)).join(",")),`Target(${s})`}(xi(i))}; limitType=${i.limitType})`}function rd(i,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):Te.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(i,e)&&function(s,a){for(const l of Uu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(c,d,m){const g=F0(c,d,m);return c.inclusive?g<=0:g<0}(s.startAt,Uu(s),a)||s.endAt&&!function(c,d,m){const g=F0(c,d,m);return c.inclusive?g>=0:g>0}(s.endAt,Uu(s),a))}(i,e)}function vP(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function TR(i){return(e,t)=>{let s=!1;for(const a of Uu(i)){const l=EP(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function EP(i,e,t){const s=i.field.isKeyField()?Te.comparator(e.key,t.key):function(l,c,d){const m=c.data.field(l),g=d.data.field(l);return m!==null&&g!==null?Fo(m,g):be(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return be(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){fc(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return Zk(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=new wt(Te.comparator);function Er(){return TP}const SR=new wt(Te.comparator);function Nu(...i){let e=SR;for(const t of i)e=e.insert(t.key,t);return e}function SP(i){let e=SR;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function fa(){return Bu()}function AR(){return Bu()}function Bu(){return new Ca(i=>i.toString(),(i,e)=>i.isEqual(e))}const AP=new Vt(Te.comparator);function Fe(...i){let e=AP;for(const t of i)e=e.add(t);return e}const wP=new Vt(Oe);function RP(){return wP}/**
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
 */function bP(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hg(e)?"-0":e}}function CP(i){return{integerValue:""+i}}/**
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
 */class ad{constructor(){this._=void 0}}function IP(i,e,t){return i instanceof yg?function(a,l){const c={fields:{[hR]:{stringValue:cR},[dR]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&T_(l)&&(l=nd(l)),l&&(c.fields[fR]=l),{mapValue:c}}(t,e):i instanceof Df?wR(i,e):i instanceof xf?RR(i,e):function(a,l){const c=OP(a,l),d=Y0(c)+Y0(a.Re);return pg(c)&&pg(a.Re)?CP(d):bP(a.serializer,d)}(i,e)}function NP(i,e,t){return i instanceof Df?wR(i,e):i instanceof xf?RR(i,e):t}function OP(i,e){return i instanceof vg?function(s){return pg(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class yg extends ad{}class Df extends ad{constructor(e){super(),this.elements=e}}function wR(i,e){const t=bR(e);for(const s of i.elements)t.some(a=>ki(a,s))||t.push(s);return{arrayValue:{values:t}}}class xf extends ad{constructor(e){super(),this.elements=e}}function RR(i,e){let t=bR(e);for(const s of i.elements)t=t.filter(a=>!ki(a,s));return{arrayValue:{values:t}}}class vg extends ad{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Y0(i){return At(i.integerValue||i.doubleValue)}function bR(i){return S_(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function DP(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof Df&&a instanceof Df||s instanceof xf&&a instanceof xf?Ho(s.elements,a.elements,ki):s instanceof vg&&a instanceof vg?ki(s.Re,a.Re):s instanceof yg&&a instanceof yg}(i.transform,e.transform)}class pa{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pa}static exists(e){return new pa(void 0,e)}static updateTime(e){return new pa(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function of(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class b_{}function CR(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new MP(i.key,pa.none()):new C_(i.key,i.data,pa.none());{const t=i.data,s=Ii.empty();let a=new Vt(_n.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new od(i.key,s,new ar(a.toArray()),pa.none())}}function xP(i,e,t){i instanceof C_?function(a,l,c){const d=a.value.clone(),m=$0(a.fieldTransforms,l,c.transformResults);d.setAll(m),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(i,e,t):i instanceof od?function(a,l,c){if(!of(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=$0(a.fieldTransforms,l,c.transformResults),m=l.data;m.setAll(IR(a)),m.setAll(d),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()}(i,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function zu(i,e,t,s){return i instanceof C_?function(l,c,d,m){if(!of(l.precondition,c))return d;const g=l.value.clone(),y=W0(l.fieldTransforms,m,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(i,e,t,s):i instanceof od?function(l,c,d,m){if(!of(l.precondition,c))return d;const g=W0(l.fieldTransforms,m,c),y=c.data;return y.setAll(IR(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(i,e,t,s):function(l,c,d){return of(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(i,e,t)}function Q0(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Ho(s,a,(l,c)=>DP(l,c))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class C_ extends b_{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class od extends b_{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function IR(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function $0(i,e,t){const s=new Map;mt(i.length===t.length,32656,{Ve:t.length,me:i.length});for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,NP(c,d,t[a]))}return s}function W0(i,e,t){const s=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);s.set(a.field,IP(l,c,e))}return s}class MP extends b_{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&xP(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=zu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=zu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=AR();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const m=CR(c,d);m!==null&&s.set(a.key,m),c.isValidDocument()||c.convertToNoDocument(Re.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Fe())}isEqual(e){return this.batchId===e.batchId&&Ho(this.mutations,e.mutations,(t,s)=>Q0(t,s))&&Ho(this.baseMutations,e.baseMutations,(t,s)=>Q0(t,s))}}/**
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
 */class PP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class LP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot,Ue;function NR(i){if(i===void 0)return ws("GRPC error has no .code"),ue.UNKNOWN;switch(i){case Ot.OK:return ue.OK;case Ot.CANCELLED:return ue.CANCELLED;case Ot.UNKNOWN:return ue.UNKNOWN;case Ot.DEADLINE_EXCEEDED:return ue.DEADLINE_EXCEEDED;case Ot.RESOURCE_EXHAUSTED:return ue.RESOURCE_EXHAUSTED;case Ot.INTERNAL:return ue.INTERNAL;case Ot.UNAVAILABLE:return ue.UNAVAILABLE;case Ot.UNAUTHENTICATED:return ue.UNAUTHENTICATED;case Ot.INVALID_ARGUMENT:return ue.INVALID_ARGUMENT;case Ot.NOT_FOUND:return ue.NOT_FOUND;case Ot.ALREADY_EXISTS:return ue.ALREADY_EXISTS;case Ot.PERMISSION_DENIED:return ue.PERMISSION_DENIED;case Ot.FAILED_PRECONDITION:return ue.FAILED_PRECONDITION;case Ot.ABORTED:return ue.ABORTED;case Ot.OUT_OF_RANGE:return ue.OUT_OF_RANGE;case Ot.UNIMPLEMENTED:return ue.UNIMPLEMENTED;case Ot.DATA_LOSS:return ue.DATA_LOSS;default:return be(39323,{code:i})}}(Ue=Ot||(Ot={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const VP=new dr([4294967295,4294967295],0);function X0(i){const e=aR().encode(i),t=new Zw;return t.update(e),new Uint8Array(t.digest())}function Z0(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new dr([t,s],0),new dr([a,l],0)]}class I_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ou(`Invalid padding: ${t}`);if(s<0)throw new Ou(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ou(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ou(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=dr.fromNumber(this.pe)}we(e,t,s){let a=e.add(t.multiply(dr.fromNumber(s)));return a.compare(VP)===1&&(a=new dr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=X0(e),[s,a]=Z0(t);for(let l=0;l<this.hashCount;l++){const c=this.we(s,a,l);if(!this.Se(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new I_(l,a,t);return s.forEach(d=>c.insert(d)),c}insert(e){if(this.pe===0)return;const t=X0(e),[s,a]=Z0(t);for(let l=0;l<this.hashCount;l++){const c=this.we(s,a,l);this.be(c)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ou extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,dc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ld(Re.min(),a,new wt(Oe),Er(),Fe())}}class dc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new dc(s,t,Fe(),Fe(),Fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t,s,a){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=a}}class OR{constructor(e,t){this.targetId=e,this.Ce=t}}class DR{constructor(e,t,s=en.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class J0{constructor(){this.Fe=0,this.Me=eS(),this.xe=en.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Fe(),t=Fe(),s=Fe();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:be(38017,{changeType:l})}}),new dc(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=eS()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,mt(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class UP{constructor(e){this.ze=e,this.je=new Map,this.He=Er(),this.Je=Qh(),this.Ye=Qh(),this.Ze=new wt(Oe)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:be(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,s=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(gg(l))if(s===0){const c=new Te(l.path);this.tt(t,c,cn.newNoDocument(c,Re.min()))}else mt(s===1,20013,{expectedCount:s});else{const c=this.ut(t);if(c!==s){const d=this.ct(e),m=d?this.lt(d,e,c):1;if(m!==0){this.st(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=yr(s).toUint8Array()}catch(m){if(m instanceof uR)return jo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{d=new I_(c,a,l)}catch(m){return jo(m instanceof Ou?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return d.pe===0?null:d}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let a=0;return s.forEach(l=>{const c=this.ze.Pt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,c)=>{const d=this._t(c);if(d){if(l.current&&gg(d.target)){const m=new Te(d.target.path);this.Et(m).has(c)||this.dt(c,m)||this.tt(c,m,cn.newNoDocument(m,e))}l.Le&&(t.set(c,l.qe()),l.Qe())}});let s=Fe();this.Ye.forEach((l,c)=>{let d=!0;c.forEachWhile(m=>{const g=this._t(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(l))}),this.He.forEach((l,c)=>c.setReadTime(e));const a=new ld(e,t,this.Ze,this.He,s);return this.He=Er(),this.Je=Qh(),this.Ye=Qh(),this.Ze=new wt(Oe),a}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new J0,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Vt(Oe),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Vt(Oe),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||de("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new J0),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Qh(){return new wt(Te.comparator)}function eS(){return new wt(Te.comparator)}const BP={asc:"ASCENDING",desc:"DESCENDING"},zP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jP={and:"AND",or:"OR"};class HP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Eg(i,e){return i.useProto3Json||td(e)?e:{value:e}}function FP(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qP(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function Po(i){return mt(!!i,49232),Re.fromTimestamp(function(t){const s=_r(t);return new An(s.seconds,s.nanos)}(i))}function GP(i,e){return Tg(i,e).canonicalString()}function Tg(i,e){const t=function(a){return new vt(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function xR(i){const e=vt.fromString(i);return mt(VR(e),10190,{key:e.toString()}),e}function km(i,e){const t=xR(e);if(t.get(1)!==i.databaseId.projectId)throw new Ee(ue.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new Ee(ue.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new Te(kR(t))}function MR(i,e){return GP(i.databaseId,e)}function KP(i){const e=xR(i);return e.length===4?vt.emptyPath():kR(e)}function tS(i){return new vt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function kR(i){return mt(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function YP(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:be(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,y){return g.useProto3Json?(mt(y===void 0||typeof y=="string",58123),en.fromBase64String(y||"")):(mt(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),en.fromUint8Array(y||new Uint8Array))}(i,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const y=g.code===void 0?ue.UNKNOWN:NR(g.code);return new Ee(y,g.message||"")}(c);t=new DR(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=km(i,s.document.name),l=Po(s.document.updateTime),c=s.document.createTime?Po(s.document.createTime):Re.min(),d=new Ii({mapValue:{fields:s.document.fields}}),m=cn.newFoundDocument(a,l,c,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new lf(g,y,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=km(i,s.document),l=s.readTime?Po(s.readTime):Re.min(),c=cn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new lf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=km(i,s.document),l=s.removedTargetIds||[];t=new lf([],l,a,null)}else{if(!("filter"in e))return be(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new LP(a,l),d=s.targetId;t=new OR(d,c)}}return t}function QP(i,e){return{documents:[MR(i,e.path)]}}function $P(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=MR(i,a);const l=function(g){if(g.length!==0)return LR(Pi.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(y=>function(S){return{field:Ro(S.field),direction:ZP(S.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Eg(i,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:t,parent:a}}function WP(i){let e=KP(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){mt(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(T){const S=PR(T);return S instanceof Pi&&gR(S)?S.getFilters():[S]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(S=>function(N){return new Of(bo(N.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(S))}(t.orderBy));let d=null;t.limit&&(d=function(T){let S;return S=typeof T=="object"?T.value:T,td(S)?null:S}(t.limit));let m=null;t.startAt&&(m=function(T){const S=!!T.before,O=T.values||[];return new Nf(O,S)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const S=!T.before,O=T.values||[];return new Nf(O,S)}(t.endAt)),gP(e,a,c,l,d,"F",m,g)}function XP(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function PR(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=bo(t.unaryFilter.field);return Lt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=bo(t.unaryFilter.field);return Lt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=bo(t.unaryFilter.field);return Lt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=bo(t.unaryFilter.field);return Lt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return be(61313);default:return be(60726)}}(i):i.fieldFilter!==void 0?function(t){return Lt.create(bo(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return be(58110);default:return be(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Pi.create(t.compositeFilter.filters.map(s=>PR(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return be(1026)}}(t.compositeFilter.op))}(i):be(30097,{filter:i})}function ZP(i){return BP[i]}function JP(i){return zP[i]}function eL(i){return jP[i]}function Ro(i){return{fieldPath:i.canonicalString()}}function bo(i){return _n.fromServerFormat(i.fieldPath)}function LR(i){return i instanceof Lt?function(t){if(t.op==="=="){if(H0(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NAN"}};if(j0(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(H0(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NAN"}};if(j0(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ro(t.field),op:JP(t.op),value:t.value}}}(i):i instanceof Pi?function(t){const s=t.getFilters().map(a=>LR(a));return s.length===1?s[0]:{compositeFilter:{op:eL(t.op),filters:s}}}(i):be(54877,{filter:i})}function VR(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,s,a,l=Re.min(),c=Re.min(),d=en.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=m}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e){this.wt=e}}function nL(i){const e=WP({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?_g(e,e.limit,"L"):e}/**
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
 */class iL{constructor(){this.Cn=new sL}addToCollectionParentIndex(e,t){return this.Cn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(gr.min())}updateCollectionGroup(e,t,s){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}}class sL{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Vt(vt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Vt(vt.comparator)).toArray()}}/**
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
 */const nS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},UR=41943040;class Tn{static withCacheSize(e){return new Tn(e,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn.DEFAULT_COLLECTION_PERCENTILE=10,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tn.DEFAULT=new Tn(UR,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tn.DISABLED=new Tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Go(0)}static lr(){return new Go(-1)}}/**
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
 */const iS="LruGarbageCollector",rL=1048576;function sS([i,e],[t,s]){const a=Oe(i,t);return a===0?Oe(e,s):a}class aL{constructor(e){this.Er=e,this.buffer=new Vt(sS),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();sS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class oL{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){de(iS,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){sl(t)?de(iS,"Ignoring IndexedDB error during garbage collection: ",t):await Jf(t)}await this.mr(3e5)})}}class lL{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return ee.resolve(ed.le);const s=new aL(t);return this.gr.forEachTarget(e,a=>s.Rr(a.sequenceNumber)).next(()=>this.gr.yr(e,a=>s.Rr(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(nS)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nS):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,a,l,c,d,m,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(s=T,d=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(g=Date.now(),Ao()<=Me.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(m-d)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-y}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function uL(i,e){return new lL(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(){this.changes=new Ca(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,cn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ee.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hL{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&zu(s.mutation,a,ar.empty(),An.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Fe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Fe()){const a=fa();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let c=Nu();return l.forEach((d,m)=>{c=c.insert(d,m.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const s=fa();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Fe()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,s,a){let l=Er();const c=Bu(),d=function(){return Bu()}();return t.forEach((m,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof od)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),zu(y.mutation,g,y.mutation.getFieldMask(),An.now())):c.set(g.key,ar.empty())}),this.recalculateAndSaveOverlays(e,l).next(m=>(m.forEach((g,y)=>c.set(g,y)),t.forEach((g,y)=>{var T;return d.set(g,new hL(y,(T=c.get(g))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const s=Bu();let a=new wt((c,d)=>c-d),l=Fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let y=s.get(m)||ar.empty();y=d.applyToLocalView(g,y),s.set(m,y);const T=(a.get(d.batchId)||Fe()).add(m);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const m=d.getNext(),g=m.key,y=m.value,T=AR();y.forEach(S=>{if(!l.has(S)){const O=CR(t.get(S),s.get(S));O!==null&&T.set(S,O),l=l.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return ee.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(c){return Te.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_P(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):ee.resolve(fa());let d=Qu,m=l;return c.next(g=>ee.forEach(g,(y,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(y)?ee.resolve():this.remoteDocumentCache.getEntry(e,y).next(S=>{m=m.insert(y,S)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,m,g,Fe())).next(y=>({batchId:d,changes:SP(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Te(t)).next(s=>{let a=Nu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Nu();return this.indexManager.getCollectionParents(e,l).next(d=>ee.forEach(d,m=>{const g=function(T,S){return new id(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next(y=>{y.forEach((T,S)=>{c=c.insert(T,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(c=>{l.forEach((m,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,cn.newInvalidDocument(y)))});let d=Nu();return c.forEach((m,g)=>{const y=l.get(m);y!==void 0&&zu(y.mutation,g,ar.empty(),An.now()),rd(t,g)&&(d=d.insert(m,g))}),d})}}/**
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
 */class dL{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return ee.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Po(a.createTime)}}(t)),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(a){return{name:a.name,query:nL(a.bundledQuery),readTime:Po(a.readTime)}}(t)),ee.resolve()}}/**
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
 */class pL{constructor(){this.overlays=new wt(Te.comparator),this.Qr=new Map}getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){const s=fa();return ee.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.bt(e,t,l)}),ee.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Qr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(s)),ee.resolve()}getOverlaysForCollection(e,t,s){const a=fa(),l=t.length+1,c=new Te(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const m=d.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&m.largestBatchId>s&&a.set(m.getKey(),m)}return ee.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new wt((g,y)=>g-y);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=fa(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=fa(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,y)=>d.set(g,y)),!(d.size()>=a)););return ee.resolve(d)}bt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.Qr.get(a.largestBatchId).delete(s.key);this.Qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new PP(t,s));let l=this.Qr.get(t);l===void 0&&(l=Fe(),this.Qr.set(t,l)),this.Qr.set(t,l.add(s.key))}}/**
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
 */class mL{constructor(){this.sessionToken=en.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.$r=new Vt(qt.Ur),this.Kr=new Vt(qt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new qt(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new qt(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new Te(new vt([])),s=new qt(t,e),a=new qt(t,e+1),l=[];return this.Kr.forEachInRange([s,a],c=>{this.zr(c),l.push(c.key)}),l}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new Te(new vt([])),s=new qt(t,e),a=new qt(t,e+1);let l=Fe();return this.Kr.forEachInRange([s,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new qt(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class qt{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return Te.comparator(e.key,t.key)||Oe(e.Zr,t.Zr)}static Wr(e,t){return Oe(e.Zr,t.Zr)||Te.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Vt(qt.Ur)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new kP(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Xr=this.Xr.add(new qt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ee.resolve(c)}lookupMutationBatch(e,t){return ee.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ti(s),l=a<0?0:a;return ee.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?$k:this.nr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new qt(t,0),a=new qt(t,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([s,a],c=>{const d=this.ei(c.Zr);l.push(d)}),ee.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Vt(Oe);return t.forEach(a=>{const l=new qt(a,0),c=new qt(a,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,c],d=>{s=s.add(d.Zr)})}),ee.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;Te.isDocumentKey(l)||(l=l.child(""));const c=new qt(new Te(l),0);let d=new Vt(Oe);return this.Xr.forEachWhile(m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(m.Zr)),!0)},c),ee.resolve(this.ni(d))}ni(e){const t=[];return e.forEach(s=>{const a=this.ei(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){mt(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return ee.forEach(t.mutations,a=>{const l=new qt(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new qt(t,0),a=this.Xr.firstAfterOrEqual(s);return ee.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e){this.ii=e,this.docs=function(){return new wt(Te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ee.resolve(s?s.document.mutableCopy():cn.newInvalidDocument(t))}getEntries(e,t){let s=Er();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():cn.newInvalidDocument(a))}),ee.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Er();const c=t.path,d=new Te(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(d);for(;m.hasNext();){const{key:g,value:{document:y}}=m.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||Gk(qk(y),s)<=0||(a.has(y.key)||rd(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return ee.resolve(l)}getAllFromCollectionGroup(e,t,s,a){be(9500)}si(e,t){return ee.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new yL(this)}getSize(e){return ee.resolve(this.size)}}class yL extends cL{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Br.addEntry(e,a)):this.Br.removeEntry(s)}),ee.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(e){this.persistence=e,this.oi=new Ca(t=>A_(t),w_),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this._i=0,this.ai=new N_,this.targetCount=0,this.ui=Go.cr()}forEachTarget(e,t){return this.oi.forEach((s,a)=>t(a)),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),ee.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new Go(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.Tr(t),ee.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.oi.forEach((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.oi.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),ee.waitFor(l).next(()=>a)}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return ee.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),ee.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),ee.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),ee.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return ee.resolve(s)}containsKey(e,t){return ee.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,t){this.ci={},this.overlays={},this.li=new ed(0),this.hi=!1,this.hi=!0,this.Pi=new mL,this.referenceDelegate=e(this),this.Ti=new vL(this),this.indexManager=new iL,this.remoteDocumentCache=function(a){return new _L(a)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new tL(t),this.Ei=new dL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new pL,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new gL(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){de("MemoryPersistence","Starting transaction:",e);const a=new EL(this.li.next());return this.referenceDelegate.di(),s(a).next(l=>this.referenceDelegate.Ai(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ri(e,t){return ee.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class EL extends Yk{constructor(e){super(),this.currentSequenceNumber=e}}class O_{constructor(e){this.persistence=e,this.Vi=new N_,this.mi=null}static fi(e){return new O_(e)}get gi(){if(this.mi)return this.mi;throw be(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),ee.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),ee.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(a=>this.gi.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.gi.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.gi,s=>{const a=Te.fromPath(s);return this.pi(e,a).next(l=>{l||t.removeEntry(a,Re.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return ee.or([()=>ee.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Mf{constructor(e,t){this.persistence=e,this.yi=new Ca(s=>Wk(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=uL(this,t)}static fi(e,t){return new Mf(e,t)}di(){}Ai(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}Sr(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return ee.forEach(this.yi,(s,a)=>this.Dr(e,s,a).next(l=>l?ee.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.si(e,c=>this.Dr(e,c,t).next(d=>{d||(s++,l.removeEntry(c,Re.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),ee.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=af(e.data.value)),t}Dr(e,t,s){return ee.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.yi.get(t);return ee.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.ds=s,this.As=a}static Rs(e,t){let s=Fe(),a=Fe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new D_(e,t.fromCache,s,a)}}/**
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
 */class TL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class SL{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return fN()?8:Qk(fn())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ws(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Ss(e,t,a,s).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new TL;return this.bs(e,t,c).next(d=>{if(l.result=d,this.fs)return this.Ds(e,t,c,d.size)})}).next(()=>l.result)}Ds(e,t,s,a){return s.documentReadCount<this.gs?(Ao()<=Me.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",wo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),ee.resolve()):(Ao()<=Me.DEBUG&&de("QueryEngine","Query:",wo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ps*a?(Ao()<=Me.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",wo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xi(t))):ee.resolve())}ws(e,t){if(K0(t))return ee.resolve(null);let s=xi(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=_g(t,null,"F"),s=xi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const c=Fe(...l);return this.ys.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,s).next(m=>{const g=this.vs(t,d);return this.Cs(t,g,c,m.readTime)?this.ws(e,_g(t,null,"F")):this.Fs(e,g,t,m)}))})))}Ss(e,t,s,a){return K0(t)||a.isEqual(Re.min())?ee.resolve(null):this.ys.getDocuments(e,s).next(l=>{const c=this.vs(t,l);return this.Cs(t,c,s,a)?ee.resolve(null):(Ao()<=Me.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),wo(t)),this.Fs(e,c,t,Fk(a,Qu)).next(d=>d))})}vs(e,t){let s=new Vt(TR(e));return t.forEach((a,l)=>{rd(e,l)&&(s=s.add(l))}),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}bs(e,t,s){return Ao()<=Me.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",wo(t)),this.ys.getDocumentsMatchingQuery(e,t,gr.min(),s)}Fs(e,t,s,a){return this.ys.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */const x_="LocalStore",AL=3e8;class wL{constructor(e,t,s,a){this.persistence=e,this.Ms=t,this.serializer=a,this.xs=new wt(Oe),this.Os=new Ca(l=>A_(l),w_),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fL(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function RL(i,e,t,s){return new wL(i,e,t,s)}async function zR(i,e){const t=je(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const c=[],d=[];let m=Fe();for(const g of a){c.push(g.batchId);for(const y of g.mutations)m=m.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)m=m.add(y.key)}return t.localDocuments.getDocuments(s,m).next(g=>({ks:g,removedBatchIds:c,addedBatchIds:d}))})})}function jR(i){const e=je(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function bL(i,e){const t=je(i),s=e.snapshotVersion;let a=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});a=t.xs;const d=[];e.targetChanges.forEach((y,T)=>{const S=a.get(T);if(!S)return;d.push(t.Ti.removeMatchingKeys(l,y.removedDocuments,T).next(()=>t.Ti.addMatchingKeys(l,y.addedDocuments,T)));let O=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?O=O.withResumeToken(en.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):y.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(y.resumeToken,s)),a=a.insert(T,O),function(q,H,$){return q.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=AL?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(S,O,y)&&d.push(t.Ti.updateTargetData(l,O))});let m=Er(),g=Fe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),d.push(CL(l,c,e.documentUpdates).next(y=>{m=y.qs,g=y.Qs})),!s.isEqual(Re.min())){const y=t.Ti.getLastRemoteSnapshotVersion(l).next(T=>t.Ti.setTargetsMetadata(l,l.currentSequenceNumber,s));d.push(y)}return ee.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,m,g)).next(()=>m)}).then(l=>(t.xs=a,l))}function CL(i,e,t){let s=Fe(),a=Fe();return t.forEach(l=>s=s.add(l)),e.getEntries(i,s).next(l=>{let c=Er();return t.forEach((d,m)=>{const g=l.get(d);m.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),m.isNoDocument()&&m.version.isEqual(Re.min())?(e.removeEntry(d,m.readTime),c=c.insert(d,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),c=c.insert(d,m)):de(x_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",m.version)}),{qs:c,Qs:a}})}function IL(i,e){const t=je(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.Ti.getTargetData(s,e).next(l=>l?(a=l,ee.resolve(a)):t.Ti.allocateTargetId(s).next(c=>(a=new or(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.xs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function Sg(i,e,t){const s=je(i),a=s.xs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,c=>s.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!sl(c))throw c;de(x_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.xs=s.xs.remove(e),s.Os.delete(a.target)}function rS(i,e,t){const s=je(i);let a=Re.min(),l=Fe();return s.persistence.runTransaction("Execute query","readwrite",c=>function(m,g,y){const T=je(m),S=T.Os.get(y);return S!==void 0?ee.resolve(T.xs.get(S)):T.Ti.getTargetData(g,y)}(s,c,xi(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(c,d.targetId).next(m=>{l=m})}).next(()=>s.Ms.getDocumentsMatchingQuery(c,e,t?a:Re.min(),t?l:Fe())).next(d=>(NL(s,vP(e),d),{documents:d,$s:l})))}function NL(i,e,t){let s=i.Ns.get(e)||Re.min();t.forEach((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),i.Ns.set(e,s)}class aS{constructor(){this.activeTargetIds=RP()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OL{constructor(){this.xo=new aS,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new aS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class DL{No(e){}shutdown(){}}/**
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
 */const oS="ConnectivityMonitor";class lS{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){de(oS,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){de(oS,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $h=null;function Ag(){return $h===null?$h=function(){return 268435456+Math.round(2147483648*Math.random())}():$h++,"0x"+$h.toString(16)}/**
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
 */const Pm="RestConnection",xL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ML{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${a}`,this.Go=this.databaseId.database===If?`project_id=${s}`:`project_id=${s}&database_id=${a}`}zo(e,t,s,a,l){const c=Ag(),d=this.jo(e,t.toUriEncodedString());de(Pm,`Sending RPC '${e}' ${c}:`,d,s);const m={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(m,a,l);const{host:g}=new URL(d),y=Xo(g);return this.Jo(e,d,m,s,y).then(T=>(de(Pm,`Received RPC '${e}' ${c}: `,T),T),T=>{throw jo(Pm,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T})}Yo(e,t,s,a,l,c){return this.zo(e,t,s,a,l)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+il}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}jo(e,t){const s=xL[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="WebChannelConnection";class PL extends ML{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=Ag();return new Promise((d,m)=>{const g=new Jw;g.setWithCredentials(!0),g.listenOnce(eR.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case rf.NO_ERROR:const T=g.getResponseJson();de(rn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case rf.TIMEOUT:de(rn,`RPC '${e}' ${c} timed out`),m(new Ee(ue.DEADLINE_EXCEEDED,"Request time out"));break;case rf.HTTP_ERROR:const S=g.getStatus();if(de(rn,`RPC '${e}' ${c} failed with status:`,S,"response text:",g.getResponseText()),S>0){let O=g.getResponseJson();Array.isArray(O)&&(O=O[0]);const N=O==null?void 0:O.error;if(N&&N.status&&N.message){const q=function($){const Z=$.toLowerCase().replace(/_/g,"-");return Object.values(ue).indexOf(Z)>=0?Z:ue.UNKNOWN}(N.status);m(new Ee(q,N.message))}else m(new Ee(ue.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new Ee(ue.UNAVAILABLE,"Connection failed."));break;default:be(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{de(rn,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(a);de(rn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,s,15)})}T_(e,t,s){const a=Ag(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=iR(),d=nR(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Ho(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const y=l.join("");de(rn,`Creating RPC '${e}' stream ${a}: ${y}`,m);const T=c.createWebChannel(y,m);let S=!1,O=!1;const N=new kL({Zo:H=>{O?de(rn,`Not sending because RPC '${e}' stream ${a} is closed:`,H):(S||(de(rn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),S=!0),de(rn,`RPC '${e}' stream ${a} sending:`,H),T.send(H))},Xo:()=>T.close()}),q=(H,$,Z)=>{H.listen($,ie=>{try{Z(ie)}catch(le){setTimeout(()=>{throw le},0)}})};return q(T,Iu.EventType.OPEN,()=>{O||(de(rn,`RPC '${e}' stream ${a} transport opened.`),N.__())}),q(T,Iu.EventType.CLOSE,()=>{O||(O=!0,de(rn,`RPC '${e}' stream ${a} transport closed`),N.u_())}),q(T,Iu.EventType.ERROR,H=>{O||(O=!0,jo(rn,`RPC '${e}' stream ${a} transport errored. Name:`,H.name,"Message:",H.message),N.u_(new Ee(ue.UNAVAILABLE,"The operation could not be completed")))}),q(T,Iu.EventType.MESSAGE,H=>{var $;if(!O){const Z=H.data[0];mt(!!Z,16349);const ie=Z,le=(ie==null?void 0:ie.error)||(($=ie[0])===null||$===void 0?void 0:$.error);if(le){de(rn,`RPC '${e}' stream ${a} received error:`,le);const se=le.status;let fe=function(b){const M=Ot[b];if(M!==void 0)return NR(M)}(se),D=le.message;fe===void 0&&(fe=ue.INTERNAL,D="Unknown error status: "+se+" with message "+le.message),O=!0,N.u_(new Ee(fe,D)),T.close()}else de(rn,`RPC '${e}' stream ${a} received:`,Z),N.c_(Z)}}),q(d,tR.STAT_EVENT,H=>{H.stat===ug.PROXY?de(rn,`RPC '${e}' stream ${a} detected buffering proxy`):H.stat===ug.NOPROXY&&de(rn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{N.a_()},0),N}}function Lm(){return typeof document<"u"?document:null}/**
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
 */function HR(i){return new HP(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,t,s=1e3,a=1.5,l=6e4){this.xi=e,this.timerId=t,this.I_=s,this.E_=a,this.d_=l,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),s=Math.max(0,Date.now()-this.V_),a=Math.max(0,t-s);a>0&&de("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,a,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="PersistentStream";class LL{constructor(e,t,s,a,l,c,d,m){this.xi=e,this.y_=s,this.w_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=m,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new FR(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===ue.RESOURCE_EXHAUSTED?(ws(t.toString()),ws("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===ue.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.S_===t&&this.K_(s,a)},s=>{e(()=>{const a=new Ee(ue.UNKNOWN,"Fetching auth token failed: "+s.message);return this.W_(a)})})}K_(e,t){const s=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(a=>{s(()=>this.W_(a))}),this.stream.onMessage(a=>{s(()=>++this.v_==1?this.z_(a):this.onNext(a))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return de(uS,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(de(uS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VL extends LL{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=YP(this.serializer,e),s=function(l){if(!("targetChange"in l))return Re.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Re.min():c.readTime?Po(c.readTime):Re.min()}(e);return this.listener.j_(t,s)}H_(e){const t={};t.database=tS(this.serializer),t.addTarget=function(l,c){let d;const m=c.target;if(d=gg(m)?{documents:QP(l,m)}:{query:$P(l,m).gt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=qP(l,c.resumeToken);const g=Eg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Re.min())>0){d.readTime=FP(l,c.snapshotVersion.toTimestamp());const g=Eg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const s=XP(this.serializer,e);s&&(t.labels=s),this.L_(t)}J_(e){const t={};t.database=tS(this.serializer),t.removeTarget=e,this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{}class BL extends UL{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.na=!1}ra(){if(this.na)throw new Ee(ue.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,a){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.zo(e,Tg(t,s),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ue.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Ee(ue.UNKNOWN,l.toString())})}Yo(e,t,s,a,l){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Yo(e,Tg(t,s),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ue.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new Ee(ue.UNKNOWN,c.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class zL{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(ws(t),this.oa=!1):de("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="RemoteStore";class jL{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=l,this.Ea.No(c=>{s.enqueueAndForget(async()=>{mc(this)&&(de(Ko,"Restarting streams for network reachability change."),await async function(m){const g=je(m);g.Ta.add(4),await pc(g),g.da.set("Unknown"),g.Ta.delete(4),await ud(g)}(this))})}),this.da=new zL(s,a)}}async function ud(i){if(mc(i))for(const e of i.Ia)await e(!0)}async function pc(i){for(const e of i.Ia)await e(!1)}function qR(i,e){const t=je(i);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),L_(t)?P_(t):rl(t).M_()&&k_(t,e))}function M_(i,e){const t=je(i),s=rl(t);t.Pa.delete(e),s.M_()&&GR(t,e),t.Pa.size===0&&(s.M_()?s.N_():mc(t)&&t.da.set("Unknown"))}function k_(i,e){if(i.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}rl(i).H_(e)}function GR(i,e){i.Aa.Ke(e),rl(i).J_(e)}function P_(i){i.Aa=new UP({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>i.Pa.get(e)||null,Pt:()=>i.datastore.serializer.databaseId}),rl(i).start(),i.da._a()}function L_(i){return mc(i)&&!rl(i).F_()&&i.Pa.size>0}function mc(i){return je(i).Ta.size===0}function KR(i){i.Aa=void 0}async function HL(i){i.da.set("Online")}async function FL(i){i.Pa.forEach((e,t)=>{k_(i,e)})}async function qL(i,e){KR(i),L_(i)?(i.da.ca(e),P_(i)):i.da.set("Unknown")}async function GL(i,e,t){if(i.da.set("Online"),e instanceof DR&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Pa.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Pa.delete(d),a.Aa.removeTarget(d))}(i,e)}catch(s){de(Ko,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await cS(i,s)}else if(e instanceof lf?i.Aa.Xe(e):e instanceof OR?i.Aa.ot(e):i.Aa.nt(e),!t.isEqual(Re.min()))try{const s=await jR(i.localStore);t.compareTo(s)>=0&&await function(l,c){const d=l.Aa.It(c);return d.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const y=l.Pa.get(g);y&&l.Pa.set(g,y.withResumeToken(m.resumeToken,c))}}),d.targetMismatches.forEach((m,g)=>{const y=l.Pa.get(m);if(!y)return;l.Pa.set(m,y.withResumeToken(en.EMPTY_BYTE_STRING,y.snapshotVersion)),GR(l,m);const T=new or(y.target,m,g,y.sequenceNumber);k_(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(i,t)}catch(s){de(Ko,"Failed to raise snapshot:",s),await cS(i,s)}}async function cS(i,e,t){if(!sl(e))throw e;i.Ta.add(1),await pc(i),i.da.set("Offline"),t||(t=()=>jR(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{de(Ko,"Retrying IndexedDB access"),await t(),i.Ta.delete(1),await ud(i)})}async function hS(i,e){const t=je(i);t.asyncQueue.verifyOperationInProgress(),de(Ko,"RemoteStore received new credentials");const s=mc(t);t.Ta.add(3),await pc(t),s&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await ud(t)}async function KL(i,e){const t=je(i);e?(t.Ta.delete(2),await ud(t)):e||(t.Ta.add(2),await pc(t),t.da.set("Unknown"))}function rl(i){return i.Ra||(i.Ra=function(t,s,a){const l=je(t);return l.ra(),new VL(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{e_:HL.bind(null,i),n_:FL.bind(null,i),i_:qL.bind(null,i),j_:GL.bind(null,i)}),i.Ia.push(async e=>{e?(i.Ra.O_(),L_(i)?P_(i):i.da.set("Unknown")):(await i.Ra.stop(),KR(i))})),i.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new da,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new V_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ee(ue.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function YR(i,e){if(ws("AsyncQueue",`${e}: ${i}`),sl(i))return new Ee(ue.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{static emptySet(e){return new Lo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Te.comparator(t.key,s.key):(t,s)=>Te.comparator(t.key,s.key),this.keyedMap=Nu(),this.sortedSet=new wt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Lo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Lo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(){this.ma=new wt(Te.comparator)}track(e){const t=e.doc.key,s=this.ma.get(t);s?e.type!==0&&s.type===3?this.ma=this.ma.insert(t,e):e.type===3&&s.type!==1?this.ma=this.ma.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ma=this.ma.remove(t):e.type===1&&s.type===2?this.ma=this.ma.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):be(63341,{Vt:e,fa:s}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,s)=>{e.push(s)}),e}}class Yo{constructor(e,t,s,a,l,c,d,m,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new Yo(e,t,Lo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class QL{constructor(){this.queries=dS(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,s){const a=je(t),l=a.queries;a.queries=dS(),l.forEach((c,d)=>{for(const m of d.ya)m.onError(s)})})(this,new Ee(ue.ABORTED,"Firestore shutting down"))}}function dS(){return new Ca(i=>ER(i),sd)}async function $L(i,e){const t=je(i);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.wa()&&e.Sa()&&(s=2):(l=new YL,s=e.Sa()?0:1);try{switch(s){case 0:l.pa=await t.onListen(a,!0);break;case 1:l.pa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=YR(c,`Initialization of query '${wo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.ya.push(e),e.Da(t.onlineState),l.pa&&e.va(l.pa)&&U_(t)}async function WL(i,e){const t=je(i),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.ya.indexOf(e);c>=0&&(l.ya.splice(c,1),l.ya.length===0?a=e.Sa()?0:1:!l.wa()&&e.Sa()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function XL(i,e){const t=je(i);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.ya)d.va(a)&&(s=!0);c.pa=a}}s&&U_(t)}function ZL(i,e,t){const s=je(i),a=s.queries.get(e);if(a)for(const l of a.ya)l.onError(t);s.queries.delete(e)}function U_(i){i.ba.forEach(e=>{e.next()})}var wg,pS;(pS=wg||(wg={})).Ca="default",pS.Cache="cache";class JL{constructor(e,t,s){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=s||{}}va(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new Yo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const s=t!=="Offline";return(!this.options.La||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=Yo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==wg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.key=e}}class $R{constructor(e){this.key=e}}class e4{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Fe(),this.mutatedKeys=Fe(),this.Ha=TR(e),this.Ja=new Lo(this.Ha)}get Ya(){return this.Ga}Za(e,t){const s=t?t.Xa:new fS,a=t?t.Ja:this.Ja;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,T)=>{const S=a.get(y),O=rd(this.query,T)?T:null,N=!!S&&this.mutatedKeys.has(S.key),q=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let H=!1;S&&O?S.data.isEqual(O.data)?N!==q&&(s.track({type:3,doc:O}),H=!0):this.eu(S,O)||(s.track({type:2,doc:O}),H=!0,(m&&this.Ha(O,m)>0||g&&this.Ha(O,g)<0)&&(d=!0)):!S&&O?(s.track({type:0,doc:O}),H=!0):S&&!O&&(s.track({type:1,doc:S}),H=!0,(m||g)&&(d=!0)),H&&(O?(c=c.add(O),l=q?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{Ja:c,Xa:s,Cs:d,mutatedKeys:l}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const c=e.Xa.ga();c.sort((y,T)=>function(O,N){const q=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be(20277,{Vt:H})}};return q(O)-q(N)}(y.type,T.type)||this.Ha(y.doc,T.doc)),this.tu(s),a=a!=null&&a;const d=t&&!a?this.nu():[],m=this.ja.size===0&&this.current&&!a?1:0,g=m!==this.za;return this.za=m,c.length!==0||g?{snapshot:new Yo(this.query,e.Ja,l,c,e.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),ru:d}:{ru:d}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new fS,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Fe(),this.Ja.forEach(s=>{this.iu(s.key)&&(this.ja=this.ja.add(s.key))});const t=[];return e.forEach(s=>{this.ja.has(s)||t.push(new $R(s))}),this.ja.forEach(s=>{e.has(s)||t.push(new QR(s))}),t}su(e){this.Ga=e.$s,this.ja=Fe();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return Yo.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const B_="SyncEngine";class t4{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class n4{constructor(e){this.key=e,this._u=!1}}class i4{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.au={},this.uu=new Ca(d=>ER(d),sd),this.cu=new Map,this.lu=new Set,this.hu=new wt(Te.comparator),this.Pu=new Map,this.Tu=new N_,this.Iu={},this.Eu=new Map,this.du=Go.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function s4(i,e,t=!0){const s=eb(i);let a;const l=s.uu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.ou()):a=await WR(s,e,t,!0),a}async function r4(i,e){const t=eb(i);await WR(t,e,!0,!1)}async function WR(i,e,t,s){const a=await IL(i.localStore,xi(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await a4(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&qR(i.remoteStore,a),d}async function a4(i,e,t,s,a){i.Ru=(T,S,O)=>async function(q,H,$,Z){let ie=H.view.Za($);ie.Cs&&(ie=await rS(q.localStore,H.query,!1).then(({documents:D})=>H.view.Za(D,ie)));const le=Z&&Z.targetChanges.get(H.targetId),se=Z&&Z.targetMismatches.get(H.targetId)!=null,fe=H.view.applyChanges(ie,q.isPrimaryClient,le,se);return gS(q,H.targetId,fe.ru),fe.snapshot}(i,T,S,O);const l=await rS(i.localStore,e,!0),c=new e4(e,l.$s),d=c.Za(l.documents),m=dc.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),g=c.applyChanges(d,i.isPrimaryClient,m);gS(i,t,g.ru);const y=new t4(e,t,c);return i.uu.set(e,y),i.cu.has(t)?i.cu.get(t).push(e):i.cu.set(t,[e]),g.snapshot}async function o4(i,e,t){const s=je(i),a=s.uu.get(e),l=s.cu.get(a.targetId);if(l.length>1)return s.cu.set(a.targetId,l.filter(c=>!sd(c,e))),void s.uu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Sg(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&M_(s.remoteStore,a.targetId),Rg(s,a.targetId)}).catch(Jf)):(Rg(s,a.targetId),await Sg(s.localStore,a.targetId,!0))}async function l4(i,e){const t=je(i),s=t.uu.get(e),a=t.cu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),M_(t.remoteStore,s.targetId))}async function XR(i,e){const t=je(i);try{const s=await bL(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Pu.get(l);c&&(mt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c._u=!0:a.modifiedDocuments.size>0?mt(c._u,14607):a.removedDocuments.size>0&&(mt(c._u,42227),c._u=!1))}),await JR(t,s,e)}catch(s){await Jf(s)}}function mS(i,e,t){const s=je(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.uu.forEach((l,c)=>{const d=c.view.Da(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const m=je(c);m.onlineState=d;let g=!1;m.queries.forEach((y,T)=>{for(const S of T.ya)S.Da(d)&&(g=!0)}),g&&U_(m)}(s.eventManager,e),a.length&&s.au.j_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function u4(i,e,t){const s=je(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Pu.get(e),l=a&&a.key;if(l){let c=new wt(Te.comparator);c=c.insert(l,cn.newNoDocument(l,Re.min()));const d=Fe().add(l),m=new ld(Re.min(),new Map,new wt(Oe),c,d);await XR(s,m),s.hu=s.hu.remove(l),s.Pu.delete(e),z_(s)}else await Sg(s.localStore,e,!1).then(()=>Rg(s,e,t)).catch(Jf)}function Rg(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.cu.get(e))i.uu.delete(s),t&&i.au.Vu(s,t);i.cu.delete(e),i.isPrimaryClient&&i.Tu.Hr(e).forEach(s=>{i.Tu.containsKey(s)||ZR(i,s)})}function ZR(i,e){i.lu.delete(e.path.canonicalString());const t=i.hu.get(e);t!==null&&(M_(i.remoteStore,t),i.hu=i.hu.remove(e),i.Pu.delete(t),z_(i))}function gS(i,e,t){for(const s of t)s instanceof QR?(i.Tu.addReference(s.key,e),c4(i,s)):s instanceof $R?(de(B_,"Document no longer in limbo: "+s.key),i.Tu.removeReference(s.key,e),i.Tu.containsKey(s.key)||ZR(i,s.key)):be(19791,{mu:s})}function c4(i,e){const t=e.key,s=t.path.canonicalString();i.hu.get(t)||i.lu.has(s)||(de(B_,"New document in limbo: "+t),i.lu.add(s),z_(i))}function z_(i){for(;i.lu.size>0&&i.hu.size<i.maxConcurrentLimboResolutions;){const e=i.lu.values().next().value;i.lu.delete(e);const t=new Te(vt.fromString(e)),s=i.du.next();i.Pu.set(s,new n4(t)),i.hu=i.hu.insert(t,s),qR(i.remoteStore,new or(xi(R_(t.path)),s,"TargetPurposeLimboResolution",ed.le))}}async function JR(i,e,t){const s=je(i),a=[],l=[],c=[];s.uu.isEmpty()||(s.uu.forEach((d,m)=>{c.push(s.Ru(m,e,t).then(g=>{var y;if((g||t)&&s.isPrimaryClient){const T=g?!g.fromCache:(y=t==null?void 0:t.targetChanges.get(m.targetId))===null||y===void 0?void 0:y.current;s.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(g){a.push(g);const T=D_.Rs(m.targetId,g);l.push(T)}}))}),await Promise.all(c),s.au.j_(a),await async function(m,g){const y=je(m);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>ee.forEach(g,S=>ee.forEach(S.ds,O=>y.persistence.referenceDelegate.addReference(T,S.targetId,O)).next(()=>ee.forEach(S.As,O=>y.persistence.referenceDelegate.removeReference(T,S.targetId,O)))))}catch(T){if(!sl(T))throw T;de(x_,"Failed to update sequence numbers: "+T)}for(const T of g){const S=T.targetId;if(!T.fromCache){const O=y.xs.get(S),N=O.snapshotVersion,q=O.withLastLimboFreeSnapshotVersion(N);y.xs=y.xs.insert(S,q)}}}(s.localStore,l))}async function h4(i,e){const t=je(i);if(!t.currentUser.isEqual(e)){de(B_,"User change. New user:",e.toKey());const s=await zR(t.localStore,e);t.currentUser=e,function(l,c){l.Eu.forEach(d=>{d.forEach(m=>{m.reject(new Ee(ue.CANCELLED,c))})}),l.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await JR(t,s.ks)}}function f4(i,e){const t=je(i),s=t.Pu.get(e);if(s&&s._u)return Fe().add(s.key);{let a=Fe();const l=t.cu.get(e);if(!l)return a;for(const c of l){const d=t.uu.get(c);a=a.unionWith(d.view.Ya)}return a}}function eb(i){const e=je(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=XR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=f4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=u4.bind(null,e),e.au.j_=XL.bind(null,e.eventManager),e.au.Vu=ZL.bind(null,e.eventManager),e}class kf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=HR(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return RL(this.persistence,new SL,e.initialUser,this.serializer)}yu(e){return new BR(O_.fi,this.serializer)}pu(e){return new OL}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kf.provider={build:()=>new kf};class d4 extends kf{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){mt(this.persistence.referenceDelegate instanceof Mf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new oL(s,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?Tn.withCacheSize(this.cacheSizeBytes):Tn.DEFAULT;return new BR(s=>Mf.fi(s,t),this.serializer)}}class bg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>mS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=h4.bind(null,this.syncEngine),await KL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new QL}()}createDatastore(e){const t=HR(e.databaseInfo.databaseId),s=function(l){return new PL(l)}(e.databaseInfo);return function(l,c,d,m){return new BL(l,c,d,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,c,d){return new jL(s,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>mS(this.syncEngine,t,0),function(){return lS.C()?new lS:new DL}())}createSyncEngine(e,t){return function(a,l,c,d,m,g,y){const T=new i4(a,l,c,d,m,g);return y&&(T.Au=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=je(a);de(Ko,"RemoteStore shutting down."),l.Ta.add(5),await pc(l),l.Ea.shutdown(),l.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}bg.provider={build:()=>new bg};/**
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
 */class p4{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):ws("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="FirestoreClient";class m4{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=on.UNAUTHENTICATED,this.clientId=oR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async c=>{de(Tr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(de(Tr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new da;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=YR(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Vm(i,e){i.asyncQueue.verifyOperationInProgress(),de(Tr,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await zR(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function _S(i,e){i.asyncQueue.verifyOperationInProgress();const t=await g4(i);de(Tr,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>hS(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>hS(e.remoteStore,a)),i._onlineComponents=e}async function g4(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){de(Tr,"Using user provided OfflineComponentProvider");try{await Vm(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===ue.FAILED_PRECONDITION||a.code===ue.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;jo("Error using user provided cache. Falling back to memory cache: "+t),await Vm(i,new kf)}}else de(Tr,"Using default OfflineComponentProvider"),await Vm(i,new d4(void 0));return i._offlineComponents}async function _4(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(de(Tr,"Using user provided OnlineComponentProvider"),await _S(i,i._uninitializedComponentsProvider._online)):(de(Tr,"Using default OnlineComponentProvider"),await _S(i,new bg))),i._onlineComponents}async function y4(i){const e=await _4(i),t=e.eventManager;return t.onListen=s4.bind(null,e.syncEngine),t.onUnlisten=o4.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=r4.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=l4.bind(null,e.syncEngine),t}function v4(i,e,t={}){const s=new da;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,d,m,g){const y=new p4({next:S=>{y.Cu(),c.enqueueAndForget(()=>WL(l,T));const O=S.docs.has(d);!O&&S.fromCache?g.reject(new Ee(ue.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&S.fromCache&&m&&m.source==="server"?g.reject(new Ee(ue.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),T=new JL(R_(d.path),y,{includeMetadataChanges:!0,La:!0});return $L(l,T)}(await y4(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function tb(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const yS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E4(i,e,t){if(!t)throw new Ee(ue.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function T4(i,e,t,s){if(e===!0&&s===!0)throw new Ee(ue.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function vS(i){if(!Te.isDocumentKey(i))throw new Ee(ue.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function S4(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":be(12329,{type:typeof i})}function Cg(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new Ee(ue.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=S4(i);throw new Ee(ue.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */const nb="firestore.googleapis.com",ES=!0;class TS{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Ee(ue.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nb,this.ssl=ES}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ES;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=UR;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<rL)throw new Ee(ue.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}T4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new Ee(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new Ee(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new Ee(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class j_{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new TS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ee(ue.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ee(ue.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new TS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new kk;switch(s.type){case"firstParty":return new Uk(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Ee(ue.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=yS.get(t);s&&(de("ComponentProvider","Removing Datastore"),yS.delete(t),s.terminate())}(this),Promise.resolve()}}function A4(i,e,t,s={}){var a;i=Cg(i,j_);const l=Xo(e),c=i._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:i._getEmulatorOptions()}),m=`${e}:${t}`;l&&(Lg(`https://${m}`),Vg("Firestore",!0)),c.host!==nb&&c.host!==m&&jo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:m,ssl:l,emulatorOptions:s});if(!ma(g,d)&&(i._setSettings(g),s.mockUserToken)){let y,T;if(typeof s.mockUserToken=="string")y=s.mockUserToken,T=on.MOCK_USER;else{y=nA(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new Ee(ue.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new on(S)}i._authCredentials=new Pk(new rR(y,T))}}/**
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
 */class H_{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new H_(this.firestore,e,this._query)}}class vs{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vs(this.firestore,e,this._key)}}class Zu extends H_{constructor(e,t,s){super(e,t,R_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vs(this.firestore,null,new Te(e))}withConverter(e){return new Zu(this.firestore,e,this._path)}}function w4(i,e,...t){if(i=Bi(i),arguments.length===1&&(e=oR.newId()),E4("doc","path",e),i instanceof j_){const s=vt.fromString(e,...t);return vS(s),new vs(i,null,new Te(s))}{if(!(i instanceof vs||i instanceof Zu))throw new Ee(ue.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(vt.fromString(e,...t));return vS(s),new vs(i.firestore,i instanceof Zu?i.converter:null,new Te(s))}}/**
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
 */const SS="AsyncQueue";class AS{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new FR(this,"async_queue_retry"),this.ec=()=>{const s=Lm();s&&de(SS,"Visibility state changed to "+s.visibilityState),this.C_.p_()},this.tc=e;const t=Lm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=Lm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new da;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!sl(e))throw e;de(SS,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(s=>{throw this.Ju=s,this.Yu=!1,ws("INTERNAL UNHANDLED ERROR: ",wS(s)),s}).then(s=>(this.Yu=!1,s))));return this.tc=t,t}enqueueAfterDelay(e,t,s){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const a=V_.createAndSchedule(this,e,t,s,l=>this.oc(l));return this.Hu.push(a),a}nc(){this.Ju&&be(47125,{_c:wS(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function wS(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class ib extends j_{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new AS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new AS(e),this._firestoreClient=void 0,await e}}}function R4(i,e){const t=typeof i=="object"?i:jg(),s=typeof i=="string"?i:If,a=Ff(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=JS("firestore");l&&A4(a,...l)}return a}function b4(i){if(i._terminated)throw new Ee(ue.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||C4(i),i._firestoreClient}function C4(i){var e,t,s;const a=i._freezeSettings(),l=function(d,m,g,y){return new eP(d,m,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,tb(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new m4(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(d){const m=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(m),_online:m}}(i._componentsProvider))}/**
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
 */class Pf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pf(en.fromBase64String(e))}catch(t){throw new Ee(ue.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pf(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class sb{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Ee(ue.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _n(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ee(ue.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ee(ue.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
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
 */class N4{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}}const O4=new RegExp("[~\\*/\\[\\]]");function D4(i,e,t){if(e.search(O4)>=0)throw RS(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new sb(...e.split("."))._internalPath}catch{throw RS(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function RS(i,e,t,s,a){let l=`Function ${e}() called with invalid data`;l+=". ";let c="";return new Ee(ue.INVALID_ARGUMENT,l+i+c)}/**
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
 */class rb{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new vs(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new x4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ab("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class x4 extends rb{data(){return super.data()}}function ab(i,e){return typeof e=="string"?D4(i,e):e instanceof sb?e._internalPath:e._delegate._internalPath}class M4{convertValue(e,t="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return At(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw be(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return fc(e,(a,l)=>{s[a]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[fg].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(c=>At(c.doubleValue));return new N4(l)}convertGeoPoint(e){return new I4(At(e.latitude),At(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=nd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp($u(e));default:return null}}convertTimestamp(e){const t=_r(e);return new An(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=vt.fromString(e);mt(VR(s),9688,{name:e});const a=new Wu(s.get(1),s.get(3)),l=new Te(s.popFirst(5));return a.isEqual(t)||ws(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class k4{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ob extends rb{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new P4(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ab("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class P4 extends ob{data(e={}){return super.data(e)}}/**
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
 */function L4(i){i=Cg(i,vs);const e=Cg(i.firestore,ib);return v4(b4(e),i._key).then(t=>U4(e,i,t))}class V4 extends M4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vs(this.firestore,null,t)}}function U4(i,e,t){const s=t.docs.get(e._key),a=new V4(i);return new ob(i,a,e._key,s,new k4(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){il=a})(Sr),pr(new Ts("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new ib(new Lk(s.getProvider("auth-internal")),new Bk(c,s.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new Ee(ue.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wu(g.options.projectId,y)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),$n(N0,O0,e),$n(N0,O0,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="firebasestorage.googleapis.com",B4="storageBucket",z4=2*60*1e3,j4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Ui{constructor(e,t,s=0){super(Um(e),`Firebase Storage: ${t} (${Um(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,zi.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Um(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Li;(function(i){i.UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Li||(Li={}));function Um(i){return"storage/"+i}function H4(){const i="An unknown error occurred, please check the error payload for server response.";return new zi(Li.UNKNOWN,i)}function F4(){return new zi(Li.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function q4(){return new zi(Li.CANCELED,"User canceled the upload/download.")}function G4(i){return new zi(Li.INVALID_URL,"Invalid URL '"+i+"'.")}function K4(i){return new zi(Li.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}function bS(i){return new zi(Li.INVALID_ARGUMENT,i)}function ub(){return new zi(Li.APP_DELETED,"The Firebase app was deleted.")}function Y4(i){return new zi(Li.INVALID_ROOT_OPERATION,"The operation '"+i+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=oi.makeFromUrl(e,t)}catch{return new oi(e,"")}if(s.path==="")return s;throw K4(e)}static makeFromUrl(e,t){let s=null;const a="([A-Za-z0-9.\\-_]+)";function l(le){le.path.charAt(le.path.length-1)==="/"&&(le.path_=le.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+a+c,"i"),m={bucket:1,path:3};function g(le){le.path_=decodeURIComponent(le.path)}const y="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",O=new RegExp(`^https?://${T}/${y}/b/${a}/o${S}`,"i"),N={bucket:1,path:3},q=t===lb?"(?:storage.googleapis.com|storage.cloud.google.com)":t,H="([^?#]*)",$=new RegExp(`^https?://${q}/${a}/${H}`,"i"),ie=[{regex:d,indices:m,postModify:l},{regex:O,indices:N,postModify:g},{regex:$,indices:{bucket:1,path:2},postModify:g}];for(let le=0;le<ie.length;le++){const se=ie[le],fe=se.regex.exec(e);if(fe){const D=fe[se.indices.bucket];let R=fe[se.indices.path];R||(R=""),s=new oi(D,R),se.postModify(s);break}}if(s==null)throw G4(e);return s}}class Q4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $4(i,e,t){let s=1,a=null,l=null,c=!1,d=0;function m(){return d===2}let g=!1;function y(...H){g||(g=!0,e.apply(null,H))}function T(H){a=setTimeout(()=>{a=null,i(O,m())},H)}function S(){l&&clearTimeout(l)}function O(H,...$){if(g){S();return}if(H){S(),y.call(null,H,...$);return}if(m()||c){S(),y.call(null,H,...$);return}s<64&&(s*=2);let ie;d===1?(d=2,ie=0):ie=(s+Math.random())*1e3,T(ie)}let N=!1;function q(H){N||(N=!0,S(),!g&&(a!==null?(H||(d=2),clearTimeout(a),T(0)):H||(d=1)))}return T(0),l=setTimeout(()=>{c=!0,q(!0)},t),q}function W4(i){i(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X4(i){return i!==void 0}function CS(i,e,t,s){if(s<e)throw bS(`Invalid value for '${i}'. Expected ${e} or greater.`);if(s>t)throw bS(`Invalid value for '${i}'. Expected ${t} or less.`)}function Z4(i){const e=encodeURIComponent;let t="?";for(const s in i)if(i.hasOwnProperty(s)){const a=e(s)+"="+e(i[s]);t=t+a+"&"}return t=t.slice(0,-1),t}var Lf;(function(i){i[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT"})(Lf||(Lf={}));/**
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
 */function J4(i,e){const t=i>=500&&i<600,a=[408,429].indexOf(i)!==-1,l=e.indexOf(i)!==-1;return t||a||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,t,s,a,l,c,d,m,g,y,T,S=!0,O=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=a,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=m,this.timeout_=g,this.progressCallback_=y,this.connectionFactory_=T,this.retry=S,this.isUsingEmulator=O,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,q)=>{this.resolve_=N,this.reject_=q,this.start_()})}start_(){const e=(s,a)=>{if(a){s(!1,new Wh(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const m=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,g)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===Lf.NO_ERROR,m=l.getStatus();if(!d||J4(m,this.additionalRetryCodes_)&&this.retry){const y=l.getErrorCode()===Lf.ABORT;s(!1,new Wh(!1,null,y));return}const g=this.successCodes_.indexOf(m)!==-1;s(!0,new Wh(g,l))})},t=(s,a)=>{const l=this.resolve_,c=this.reject_,d=a.connection;if(a.wasSuccessCode)try{const m=this.callback_(d,d.getResponse());X4(m)?l(m):l()}catch(m){c(m)}else if(d!==null){const m=H4();m.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,m)):c(m)}else if(a.canceled){const m=this.appDelete_?ub():q4();c(m)}else{const m=F4();c(m)}};this.canceled_?t(!1,new Wh(!1,null,!0)):this.backoffId_=$4(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&W4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wh{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function tV(i,e){e!==null&&e.length>0&&(i.Authorization="Firebase "+e)}function nV(i,e){i["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function iV(i,e){e&&(i["X-Firebase-GMPID"]=e)}function sV(i,e){e!==null&&(i["X-Firebase-AppCheck"]=e)}function rV(i,e,t,s,a,l,c=!0,d=!1){const m=Z4(i.urlParams),g=i.url+m,y=Object.assign({},i.headers);return iV(y,e),tV(y,t),nV(y,l),sV(y,s),new eV(g,i.method,y,i.body,i.successCodes,i.additionalRetryCodes,i.handler,i.errorHandler,i.timeout,i.progressCallback,a,c,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aV(i){if(i.length===0)return null;const e=i.lastIndexOf("/");return e===-1?"":i.slice(0,e)}function oV(i){const e=i.lastIndexOf("/",i.length-2);return e===-1?i:i.slice(e+1)}/**
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
 */class Vf{constructor(e,t){this._service=e,t instanceof oi?this._location=t:this._location=oi.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Vf(e,t)}get root(){const e=new oi(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return oV(this._location.path)}get storage(){return this._service}get parent(){const e=aV(this._location.path);if(e===null)return null;const t=new oi(this._location.bucket,e);return new Vf(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Y4(e)}}function IS(i,e){const t=e==null?void 0:e[B4];return t==null?null:oi.makeFromBucketSpec(t,i)}function lV(i,e,t,s={}){i.host=`${e}:${t}`;const a=Xo(e);a&&(Lg(`https://${i.host}`),Vg("Storage",!0)),i._isUsingEmulator=!0,i._protocol=a?"https":"http";const{mockUserToken:l}=s;l&&(i._overrideAuthToken=typeof l=="string"?l:nA(l,i.app.options.projectId))}class uV{constructor(e,t,s,a,l,c=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=a,this._firebaseVersion=l,this._isUsingEmulator=c,this._bucket=null,this._host=lb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=z4,this._maxUploadRetryTime=j4,this._requests=new Set,a!=null?this._bucket=oi.makeFromBucketSpec(a,this._host):this._bucket=IS(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=oi.makeFromBucketSpec(this._url,e):this._bucket=IS(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){CS("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){CS("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vf(this,e)}_makeRequest(e,t,s,a,l=!0){if(this._deleted)return new Q4(ub());{const c=rV(e,this._appId,s,a,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[s,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,a).getPromise()}}const NS="@firebase/storage",OS="0.13.12";/**
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
 */const cb="storage";function cV(i=jg(),e){i=Bi(i);const s=Ff(i,cb).getImmediate({identifier:e}),a=JS("storage");return a&&hV(s,...a),s}function hV(i,e,t,s={}){lV(i,e,t,s)}function fV(i,{instanceIdentifier:e}){const t=i.getProvider("app").getImmediate(),s=i.getProvider("auth-internal"),a=i.getProvider("app-check-internal");return new uV(t,s,a,e,Sr)}function dV(){pr(new Ts(cb,fV,"PUBLIC").setMultipleInstances(!0)),$n(NS,OS,""),$n(NS,OS,"esm2017")}dV();const pV={apiKey:"AIzaSyDWN5GCnrhUqKZlOt8Rxb0n748lhPf9B58",authDomain:"to-do-list-9cf11.firebaseapp.com",databaseURL:"https://to-do-list-9cf11-default-rtdb.firebaseio.com",projectId:"to-do-list-9cf11",storageBucket:"to-do-list-9cf11.firebasestorage.app",messagingSenderId:"44862500438",appId:"1:44862500438:web:ccb0f012d9c8e7cfe215f7",measurementId:"G-HB8NT8L1FD"},mV={apiKey:"AIzaSyC_SdildU9oD7BID8i4GdReOYM0_qlguN0",authDomain:"databased-react.firebaseapp.com",databaseURL:"https://databased-react-default-rtdb.firebaseio.com",projectId:"databased-react",storageBucket:"databased-react.appspot.com",messagingSenderId:"82890993147",appId:"1:82890993147:web:77b68d26108894eeeaef5e",measurementId:"G-Y0JTK4KL1P"},hb=zg(pV,"FIRST_APP"),gV=R4(hb),Su=xk(hb),_V=zg(mV,"SECOND_APP");cV(_V);function yV(){const{setPage:i,setUser:e,setShowSignInPrompt:t,setShowSignUpPrompt:s,setLoading:a,setContinueAs:l,getAccountInformation:c}=j.useContext(cd),[d,m]=j.useState(!1),[g,y]=j.useState(),T=j.useRef(null),S=j.useRef(null),O=j.useRef(null),N=j.useRef(null),q=()=>{const se=O==null?void 0:O.current.value,fe=N==null?void 0:N.current.value,D=T.current,R=S.current;return{email:se,pass:fe,warning1:D,warning2:R}},H=()=>{const se=q();se.email&&(se.email=""),se.pass&&(se.pass=""),se.warning1.innerText="",se.warning2.innerText=""},$=se=>{const fe=q();return(se==null?void 0:se.target.value)==""||fe.email==""?T.current.textContent="The input field is blank!":T.current.textContent="",!1},Z=se=>{const fe=q();return(se==null?void 0:se.target.value)==""||fe.pass==""?S.current.textContent="The input field is blank!":S.current.textContent="",!1},ie=async()=>{$(),Z();{a(!0);try{await vM(Su,O.current.value,N.current.value),H(),e(Su.currentUser),t(!1),l(!0),c()}catch(se){console.log(se.code),se.code=="auth/invalid-email"&&(T.current.textContent="Invalid email/Email doesn't exist."),se.code=="auth/invalid-credential"&&(S.current.textContent="Password does not match."),se.code=="auth/network-request-failed"&&alert("Network Error, unable to sign in. Please try again.")}a(!1)}},le=async()=>{var fe;const se=new ds;a(!0);try{await jM(Su,se),H(),e(Su.currentUser);const D=w4(gV,"Users",(fe=Su.currentUser)==null?void 0:fe.uid);(await L4(D)).exists()?t(!1):s(!0),l(!0),c()}catch(D){console.log(D)}a(!1)};return K.jsx(K.Fragment,{children:K.jsxs("div",{className:Xt.signUpWrapper,children:[K.jsx(lr,{func:()=>{t(!1),H(),i(1)},content:"X",className:Xt.goToStartingPage}),K.jsx("div",{className:Xt.topArc,children:"SIGN IN"}),K.jsxs("div",{className:Xt.form,children:[K.jsxs("div",{className:Xt.userNameCon,children:[K.jsx("h3",{children:"Username :"}),K.jsx("input",{className:"emailInput",ref:O,onInput:se=>{$(se)}}),K.jsx("span",{ref:T})]}),K.jsxs("div",{className:Xt.passwordCon,children:[K.jsx("h3",{children:"Password :"}),K.jsx("input",{type:d?"text":"password",ref:N,onInput:se=>{Z(se)},className:Xt.Password}),K.jsx("span",{ref:S}),K.jsx("img",{src:d?"./password/visible.png":"./password/unsee.png",className:Xt.seePassword,onClick:()=>{m(!d)}})]}),K.jsxs("div",{className:Xt.moreActions,children:[K.jsx("span",{className:Xt.forgotPass,children:"Forgot Password"}),K.jsx("span",{className:Xt.createAcc,onClick:()=>{t(!1),s(!0)},children:"Doesn't Have An Account?"})]}),K.jsx(lr,{className:Xt.signInButton,func:()=>{ie()},content:"SIGN IN"})]}),K.jsxs("div",{className:Xt.otherPlatformsWrapper,children:[K.jsxs("div",{className:Xt.iconsWrapper,children:[K.jsx("div",{className:Xt.wrapper,onClick:()=>{le()},children:K.jsx("img",{src:"./platforms/GG.png "})}),K.jsx("div",{className:Xt.wrapper,children:K.jsx("img",{src:"./platforms/facebook.png"})}),K.jsx("div",{className:Xt.wrapper,children:K.jsx("img",{src:"./platforms/Instagram.png"})})]}),K.jsx("h3",{children:"SIGN IN WITH DIFFERENT PLATFORMS"})]})]})})}const vV="_hide_1h5us_1",EV="_formOne_1h5us_4",oa={hide:vV,formOne:EV},TV=()=>{const{indicated:i,show:e,showConfirm:t,setShowConfirm:s,setShow:a,passwordInput:l,confirmPasswordInput:c,emailInput:d,passWarning:m,confirmWarning:g,emailWarning:y}=j.useContext(gc);return K.jsxs("div",{className:i==0?oa.formOne:oa.hide,children:[K.jsxs("div",{className:oa.email,children:[K.jsx("h4",{children:"Email"}),K.jsx("input",{type:"text",ref:d}),K.jsx("span",{ref:y})]}),K.jsxs("div",{className:oa.password,children:[K.jsx("h4",{children:"Password"}),K.jsx("input",{type:e?"text":"password",ref:l}),K.jsx("img",{src:e?"./password/visible.png":"./password/unsee.png",className:oa.see_password,onClick:()=>{a(!e)}}),K.jsx("span",{ref:m})]}),K.jsxs("div",{className:oa.confirm,children:[K.jsx("h4",{children:"Confirm Password"}),K.jsx("input",{type:t?"text":"password",ref:c}),K.jsx("img",{src:t?"./password/visible.png":"./password/unsee.png",className:oa.see_confirm,onClick:()=>{s(!t)}}),K.jsx("span",{ref:g})]})]})},SV="_hide_p08ld_1",AV="_formTwo_p08ld_6",wV="_top_p08ld_16",RV="_notIndicated_p08ld_41",bV="_indicated_p08ld_46",Au={hide:SV,formTwo:AV,top:wV,notIndicated:RV,indicated:bV},CV=()=>{const{indicated:i,usageOptions:e,handleUsageOptions:t,usingAsInput:s}=j.useContext(gc);return K.jsxs("div",{className:i==1?Au.formTwo:Au.hide,children:[K.jsx("h3",{children:"I am using the Web Application as?"}),K.jsx("div",{children:K.jsxs("div",{className:Au.top,children:[e.map((a,l)=>K.jsx(lr,{content:a.content,className:a.isIndicated?Au.indicated:Au.notIndicated,func:()=>{t(l)}},a.content)),K.jsx("h3",{children:"What is your purpose?"}),K.jsx("textarea",{type:"text",placeholder:"Other reason...",ref:s})]})})]})},IV="_hide_a52m3_1",NV="_formThree_a52m3_5",wu={hide:IV,formThree:NV},OV=()=>{const{indicated:i,schoolInput:e,schoolWarning:t,grSecInput:s,grSecWarning:a,nickNameInput:l,nameWarning:c}=j.useContext(gc);return K.jsxs("div",{className:i==2?wu.formThree:wu.hide,children:[K.jsxs("div",{className:wu.username,children:[K.jsx("h4",{children:"Name"}),K.jsx("input",{type:"text",ref:l}),K.jsx("span",{ref:c})]}),K.jsxs("div",{className:wu.password,children:[K.jsx("h4",{children:"School"}),K.jsx("input",{type:"text",ref:e}),K.jsx("span",{ref:t})]}),K.jsxs("div",{className:wu.confirm,children:[K.jsx("h4",{children:"Grade & Section"}),K.jsx("input",{type:"text",ref:s}),K.jsx("span",{ref:a})]})]})},DV="_hide_z324w_8",xV="_formFour_z324w_12",MV="_wrapper_z324w_43",kV="_IndicatedButt_z324w_63",PV="_notIndicatedButt_z324w_73",So={hide:DV,formFour:xV,wrapper:MV,IndicatedButt:kV,notIndicatedButt:PV},LV=()=>{const{indicated:i,subjects:e,handleSubjects:t}=j.useContext(gc);if(e!=null)return K.jsx("div",{className:i==3?So.formFour:So.hide,children:K.jsxs("div",{className:So.wrapper,children:[K.jsx("h4",{children:"What is your favorite subject?"}),K.jsx("div",{className:So.buttons,children:e.map((s,a)=>K.jsx(lr,{func:()=>{t(a)},className:s.testClass==!0?So.IndicatedButt:So.notIndicatedButt,content:e[a].content},s+a.toString()))})]})})},VV="_signUpWrapper_rhwx8_12",UV="_forms_rhwx8_27",BV="_toBottom_rhwx8_38",zV="_bottom_rhwx8_57",jV="_buttons_rhwx8_63",HV="_indicator_rhwx8_85",FV="_indicated_rhwx8_99",qV="_notIndicated_rhwx8_103",GV="_goToStartingPage_rhwx8_130",an={signUpWrapper:VV,forms:UV,toBottom:BV,bottom:zV,buttons:jV,indicator:HV,indicated:FV,notIndicated:qV,goToStartingPage:GV},gc=j.createContext(),KV=()=>{const{setShowSignInPrompt:i,showSignUpPrompt:e,setShowSignUpPrompt:t,setLoading:s,setContinueAs:a,setUser:l,setPage:c}=j.useContext(cd),d=j.useRef(null),m=j.useRef(null),g=j.useRef(null),y=j.useRef(null),T=j.useRef(null),S=j.useRef(null),O=j.useRef(null),N=j.useRef(null),q=j.useRef(null),H=j.useRef(null),$=j.useRef(null),Z=j.useRef(null),ie=j.useRef(null),[le,se]=j.useState(!1),[fe,D]=j.useState(!1),[R,b]=j.useState(0),[M,P]=j.useState([]),[V,I]=j.useState([]),[Rt,st]=j.useState([{content:"As a Student",isIndicated:!1},{content:"As a Teacher",isIndicated:!1},{content:"As a Employee",isIndicated:!1},{content:"I Am Just Using It.",isIndicated:!1}]),[Q,ae]=j.useState([{content:"TLE",testClass:!1},{content:"Mathematics",testClass:!1},{content:"Science",testClass:!1},{content:"English",testClass:!1},{content:"Colloquium",testClass:!1},{content:"Filipino",testClass:!1},{content:"Mapeh",testClass:!1},{content:"AP",testClass:!1},{content:"ESP",testClass:!1}]),me=async ne=>{},He=ne=>{let he=Rt;for(let we in he)if(we==ne){he=he[ne].content;break}P(he),st(we=>we.map((ge,rt)=>ne==rt?{...ge,isIndicated:!0}:{...ge,isIndicated:!1}))},x=ne=>{let he=Q,we=[];he=he.map((ge,rt)=>ne==rt?{...ge,testClass:ge.testClass!=!0}:{...ge});for(let ge in he)he[ge].testClass==!0&&we.push(he[ge]);I([...we]),ae(ge=>ge.map((rt,Xe)=>ne==Xe?{...rt,testClass:rt.testClass!=!0}:{...rt}))};function te(){d.current.value="",m.current.value="",g.current.value="",y.current.value="",T.current.value="",S.current.value="",O.current.value="",N.current.value="",q.current.value="",H.current.value="",$.current.value="",Z.current.value="",ie.current.value="",ae(ne=>ne.map(he=>({...he,testClass:!1}))),st(ne=>ne.map(he=>({...he,isIndicated:!1}))),P(null),I([]),b(0)}const oe={passwordInput:d,passWarning:m,emailInput:g,emailWarning:y,confirmPasswordInput:T,confirmWarning:S,nickNameInput:O,nameWarning:N,schoolInput:q,schoolWarning:H,grSecInput:$,grSecWarning:Z,usingAsInput:ie,show:le,setShow:se,showConfirm:fe,setShowConfirm:D,indicated:R,setIndication:b,usage:M,setUsage:P,selectedSubjects:V,setSelectedSubjects:I,usageOptions:Rt,setUsageOptions:st,subjects:Q,setSubjects:ae,handleUsageOptions:He,handleSubjects:x};return K.jsx(K.Fragment,{children:K.jsx(gc.Provider,{value:oe,children:K.jsxs("div",{className:an.signUpWrapper,children:[K.jsx(lr,{func:()=>{t(!1),te(),c(1)},content:"X",className:an.goToStartingPage}),K.jsxs("form",{onSubmit:ne=>{ne.preventDefault()},className:an.forms,children:[K.jsx("header",{children:"SIGN UP"}),K.jsxs("div",{className:an.toBottom,children:[K.jsx(TV,{}),K.jsx(CV,{}),K.jsx(OV,{}),K.jsx(LV,{}),K.jsxs("div",{className:an.bottom,children:[K.jsxs("div",{className:an.buttons,children:[K.jsx(lr,{content:"BACK",func:()=>{me()}}),K.jsx(lr,{content:R==3||R==0?"SUBMIT":"NEXT",func:()=>{R==3||R==0,me()}})]}),K.jsxs("div",{className:an.indicator,children:[K.jsx("div",{className:R==0?an.indicated:an.notIndicated}),K.jsx("div",{className:R==1?an.indicated:an.notIndicated}),K.jsx("div",{className:R==2?an.indicated:an.notIndicated}),K.jsx("div",{className:R==3?an.indicated:an.notIndicated})]}),K.jsxs("h4",{id:an.SignUp,onClick:()=>{i(!0),t(!1),te()},children:[" ",K.jsx("a",{children:"Already Have an Account?"})," "]})]})]})]})]})})})},YV=()=>K.jsx("div",{children:"Loading"}),QV=()=>K.jsx("div",{children:"SaveChanges"}),$V=()=>K.jsx("div",{children:"PageNotFound"}),fb=j.lazy(()=>Ju(()=>import("./Home-PGlVgkVC.js"),__vite__mapDeps([0,1]))),db=j.lazy(()=>Ju(()=>import("./Tasks-BeplW4JM.js"),__vite__mapDeps([2,3]))),pb=j.lazy(()=>Ju(()=>import("./Folders-CWtVAjB0.js"),__vite__mapDeps([4,5]))),mb=j.lazy(()=>Ju(()=>import("./Contacts-CWWJZnRt.js"),[])),WV=j.lazy(()=>Ju(()=>import("./Dashboard-BGHzCO3J.js"),[])),Bm=[{path:"/AcadComponent/",element:K.jsx(fb,{})},{path:"/AcadComponent/Tasks",element:K.jsx(db,{})},{path:"/AcadComponent/Folders",element:K.jsx(pb,{})},{path:"/AcadComponent/Contacts",element:K.jsx(mb,{})},{path:"/AcadComponent/Dashboard",element:K.jsx(WV,{})},{path:"/AcadComponent/SignIn",element:K.jsx(yV,{})},{path:"/AcadComponent/SignUp",element:K.jsx(KV,{})},{path:"*",element:K.jsx($V,{})}],cd=j.createContext();function XV(){const[i,e]=j.useState(!1),[t,s]=j.useState(!1),[a,l]=j.useState(!1),[c,d]=j.useState(!1),[m,g]=j.useState(!1),[y,T]=j.useState(!1),[S,O]=j.useState(!1),[N,q]=j.useState(),[H,$]=j.useState([]),[Z,ie]=j.useState([{name:"Home",ind:!1,icon:K.jsx("span",{className:"material-icons",children:"home"}),page:K.jsx(fb,{}),path:"/Acad/"},{name:"Tasks",ind:!1,icon:K.jsx("span",{className:"fa fa-book"}),page:K.jsx(db,{}),path:"/Acad/Tasks"},{name:"Folders",ind:!1,icon:K.jsx("span",{className:"material-icons",children:"folder"}),page:K.jsx(pb,{}),path:"/Acad/Folders"},{name:"Contacts",ind:!1,icon:K.jsx("span",{className:"material-icons",children:"phone"}),page:K.jsx(mb,{}),path:"/Acad/Contacts"}]),le={showSignUp:i,setShowSignUp:e,showLogin:t,setShowLogin:s,showMakeUserSignIn:a,setShowMakeUserSignIn:l,hideNavbar:c,setHideNavbar:d,hideSideBar:m,setHideSideBar:g,hideSaveChanges:y,setHideSaveChanges:T,loading:S,setLoading:O,user:N,setUser:q,userData:H,setUserData:$,pages:Z,setPages:ie,pagination:fe=>{se(fe),console.log(fe)}};function se(fe){console.log(fe),ie((D,R)=>D.map((b,M)=>fe==M?{...b,ind:!0}:{...b,ind:!1}))}return K.jsx(K.Fragment,{children:K.jsx(cd.Provider,{value:le,children:K.jsxs(II,{children:[K.jsx(UI,{}),K.jsx(sI,{children:Bm==null?void 0:Bm.map(fe=>K.jsx(HS,{path:fe.path,element:fe.element},fe.path))}),K.jsx(YV,{}),K.jsx(QV,{})]})})})}$C.createRoot(document.getElementById("root")).render(K.jsx(j.StrictMode,{children:K.jsx(XV,{})}));export{lr as B,Co as L,gV as a,cd as c,w4 as d,L4 as g,K as j,j as r};
