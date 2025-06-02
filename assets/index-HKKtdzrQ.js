const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-CioniXEv.js","assets/Home-bHuyDgxl.css","assets/Tasks-D-T7qjJ9.js","assets/Tasks-CshlCajz.css","assets/Folders-0pdkv9et.js","assets/Folders-CYRofmE6.css","assets/SignIn-TSWYT-61.js","assets/SignIn-vviFU_5i.css","assets/SignUp-VqetYe-M.js","assets/SignUp-CrEc0M8t.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Tm={exports:{}},_u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mT;function yI(){if(mT)return _u;mT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return _u.Fragment=e,_u.jsx=t,_u.jsxs=t,_u}var gT;function vI(){return gT||(gT=1,Tm.exports=yI()),Tm.exports}var de=vI(),Sm={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _T;function EI(){if(_T)return Ce;_T=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,H={};function B(O,ee,ae){this.props=O,this.context=ee,this.refs=H,this.updater=ae||D}B.prototype.isReactComponent={},B.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Y(){}Y.prototype=B.prototype;function X(O,ee,ae){this.props=O,this.context=ee,this.refs=H,this.updater=ae||D}var te=X.prototype=new Y;te.constructor=X,I(te,B.prototype),te.isPureReactComponent=!0;var le=Array.isArray,ce={H:null,A:null,T:null,S:null,V:null},fe=Object.prototype.hasOwnProperty;function k(O,ee,ae,ie,ge,De){return ae=De.ref,{$$typeof:n,type:O,key:ee,ref:ae!==void 0?ae:null,props:De}}function w(O,ee){return k(O.type,ee,void 0,void 0,void 0,O.props)}function b(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function M(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return ee[ae]})}var x=/\/+/g;function V(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?M(""+O.key):ee.toString(36)}function N(){}function Kt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(ee){O.status==="pending"&&(O.status="fulfilled",O.value=ee)},function(ee){O.status==="pending"&&(O.status="rejected",O.reason=ee)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function mt(O,ee,ae,ie,ge){var De=typeof O;(De==="undefined"||De==="boolean")&&(O=null);var Re=!1;if(O===null)Re=!0;else switch(De){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(O.$$typeof){case n:case e:Re=!0;break;case y:return Re=O._init,mt(Re(O._payload),ee,ae,ie,ge)}}if(Re)return ge=ge(O),Re=ie===""?"."+V(O,0):ie,le(ge)?(ae="",Re!=null&&(ae=Re.replace(x,"$&/")+"/"),mt(ge,ee,ae,"",function(fi){return fi})):ge!=null&&(b(ge)&&(ge=w(ge,ae+(ge.key==null||O&&O.key===ge.key?"":(""+ge.key).replace(x,"$&/")+"/")+Re)),ee.push(ge)),1;Re=0;var Vt=ie===""?".":ie+":";if(le(O))for(var rt=0;rt<O.length;rt++)ie=O[rt],De=Vt+V(ie,rt),Re+=mt(ie,ee,ae,De,ge);else if(rt=S(O),typeof rt=="function")for(O=rt.call(O),rt=0;!(ie=O.next()).done;)ie=ie.value,De=Vt+V(ie,rt++),Re+=mt(ie,ee,ae,De,ge);else if(De==="object"){if(typeof O.then=="function")return mt(Kt(O),ee,ae,ie,ge);throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Re}function Q(O,ee,ae){if(O==null)return O;var ie=[],ge=0;return mt(O,ie,"","",function(De){return ee.call(ae,De,ge++)}),ie}function re(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var me=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ge(){}return Ce.Children={map:Q,forEach:function(O,ee,ae){Q(O,function(){ee.apply(this,arguments)},ae)},count:function(O){var ee=0;return Q(O,function(){ee++}),ee},toArray:function(O){return Q(O,function(ee){return ee})||[]},only:function(O){if(!b(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ce.Component=B,Ce.Fragment=t,Ce.Profiler=a,Ce.PureComponent=X,Ce.StrictMode=s,Ce.Suspense=p,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ce,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(O){return ce.H.useMemoCache(O)}},Ce.cache=function(O){return function(){return O.apply(null,arguments)}},Ce.cloneElement=function(O,ee,ae){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ie=I({},O.props),ge=O.key,De=void 0;if(ee!=null)for(Re in ee.ref!==void 0&&(De=void 0),ee.key!==void 0&&(ge=""+ee.key),ee)!fe.call(ee,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&ee.ref===void 0||(ie[Re]=ee[Re]);var Re=arguments.length-2;if(Re===1)ie.children=ae;else if(1<Re){for(var Vt=Array(Re),rt=0;rt<Re;rt++)Vt[rt]=arguments[rt+2];ie.children=Vt}return k(O.type,ge,void 0,void 0,De,ie)},Ce.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},Ce.createElement=function(O,ee,ae){var ie,ge={},De=null;if(ee!=null)for(ie in ee.key!==void 0&&(De=""+ee.key),ee)fe.call(ee,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(ge[ie]=ee[ie]);var Re=arguments.length-2;if(Re===1)ge.children=ae;else if(1<Re){for(var Vt=Array(Re),rt=0;rt<Re;rt++)Vt[rt]=arguments[rt+2];ge.children=Vt}if(O&&O.defaultProps)for(ie in Re=O.defaultProps,Re)ge[ie]===void 0&&(ge[ie]=Re[ie]);return k(O,De,void 0,void 0,null,ge)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(O){return{$$typeof:d,render:O}},Ce.isValidElement=b,Ce.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:re}},Ce.memo=function(O,ee){return{$$typeof:g,type:O,compare:ee===void 0?null:ee}},Ce.startTransition=function(O){var ee=ce.T,ae={};ce.T=ae;try{var ie=O(),ge=ce.S;ge!==null&&ge(ae,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(Ge,me)}catch(De){me(De)}finally{ce.T=ee}},Ce.unstable_useCacheRefresh=function(){return ce.H.useCacheRefresh()},Ce.use=function(O){return ce.H.use(O)},Ce.useActionState=function(O,ee,ae){return ce.H.useActionState(O,ee,ae)},Ce.useCallback=function(O,ee){return ce.H.useCallback(O,ee)},Ce.useContext=function(O){return ce.H.useContext(O)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(O,ee){return ce.H.useDeferredValue(O,ee)},Ce.useEffect=function(O,ee,ae){var ie=ce.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(O,ee)},Ce.useId=function(){return ce.H.useId()},Ce.useImperativeHandle=function(O,ee,ae){return ce.H.useImperativeHandle(O,ee,ae)},Ce.useInsertionEffect=function(O,ee){return ce.H.useInsertionEffect(O,ee)},Ce.useLayoutEffect=function(O,ee){return ce.H.useLayoutEffect(O,ee)},Ce.useMemo=function(O,ee){return ce.H.useMemo(O,ee)},Ce.useOptimistic=function(O,ee){return ce.H.useOptimistic(O,ee)},Ce.useReducer=function(O,ee,ae){return ce.H.useReducer(O,ee,ae)},Ce.useRef=function(O){return ce.H.useRef(O)},Ce.useState=function(O){return ce.H.useState(O)},Ce.useSyncExternalStore=function(O,ee,ae){return ce.H.useSyncExternalStore(O,ee,ae)},Ce.useTransition=function(){return ce.H.useTransition()},Ce.version="19.1.0",Ce}var yT;function Pg(){return yT||(yT=1,Sm.exports=EI()),Sm.exports}var K=Pg(),Am={exports:{}},yu={},Rm={exports:{}},wm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vT;function TI(){return vT||(vT=1,function(n){function e(Q,re){var me=Q.length;Q.push(re);e:for(;0<me;){var Ge=me-1>>>1,O=Q[Ge];if(0<a(O,re))Q[Ge]=re,Q[me]=O,me=Ge;else break e}}function t(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var re=Q[0],me=Q.pop();if(me!==re){Q[0]=me;e:for(var Ge=0,O=Q.length,ee=O>>>1;Ge<ee;){var ae=2*(Ge+1)-1,ie=Q[ae],ge=ae+1,De=Q[ge];if(0>a(ie,me))ge<O&&0>a(De,ie)?(Q[Ge]=De,Q[ge]=me,Ge=ge):(Q[Ge]=ie,Q[ae]=me,Ge=ae);else if(ge<O&&0>a(De,me))Q[Ge]=De,Q[ge]=me,Ge=ge;else break e}}return re}function a(Q,re){var me=Q.sortIndex-re.sortIndex;return me!==0?me:Q.id-re.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],y=1,T=null,S=3,D=!1,I=!1,H=!1,B=!1,Y=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function le(Q){for(var re=t(g);re!==null;){if(re.callback===null)s(g);else if(re.startTime<=Q)s(g),re.sortIndex=re.expirationTime,e(p,re);else break;re=t(g)}}function ce(Q){if(H=!1,le(Q),!I)if(t(p)!==null)I=!0,fe||(fe=!0,V());else{var re=t(g);re!==null&&mt(ce,re.startTime-Q)}}var fe=!1,k=-1,w=5,b=-1;function M(){return B?!0:!(n.unstable_now()-b<w)}function x(){if(B=!1,fe){var Q=n.unstable_now();b=Q;var re=!0;try{e:{I=!1,H&&(H=!1,X(k),k=-1),D=!0;var me=S;try{t:{for(le(Q),T=t(p);T!==null&&!(T.expirationTime>Q&&M());){var Ge=T.callback;if(typeof Ge=="function"){T.callback=null,S=T.priorityLevel;var O=Ge(T.expirationTime<=Q);if(Q=n.unstable_now(),typeof O=="function"){T.callback=O,le(Q),re=!0;break t}T===t(p)&&s(p),le(Q)}else s(p);T=t(p)}if(T!==null)re=!0;else{var ee=t(g);ee!==null&&mt(ce,ee.startTime-Q),re=!1}}break e}finally{T=null,S=me,D=!1}re=void 0}}finally{re?V():fe=!1}}}var V;if(typeof te=="function")V=function(){te(x)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,Kt=N.port2;N.port1.onmessage=x,V=function(){Kt.postMessage(null)}}else V=function(){Y(x,0)};function mt(Q,re){k=Y(function(){Q(n.unstable_now())},re)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Q){Q.callback=null},n.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<Q?Math.floor(1e3/Q):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(Q){switch(S){case 1:case 2:case 3:var re=3;break;default:re=S}var me=S;S=re;try{return Q()}finally{S=me}},n.unstable_requestPaint=function(){B=!0},n.unstable_runWithPriority=function(Q,re){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var me=S;S=Q;try{return re()}finally{S=me}},n.unstable_scheduleCallback=function(Q,re,me){var Ge=n.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Ge+me:Ge):me=Ge,Q){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=me+O,Q={id:y++,callback:re,priorityLevel:Q,startTime:me,expirationTime:O,sortIndex:-1},me>Ge?(Q.sortIndex=me,e(g,Q),t(p)===null&&Q===t(g)&&(H?(X(k),k=-1):H=!0,mt(ce,me-Ge))):(Q.sortIndex=O,e(p,Q),I||D||(I=!0,fe||(fe=!0,V()))),Q},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(Q){var re=S;return function(){var me=S;S=re;try{return Q.apply(this,arguments)}finally{S=me}}}}(wm)),wm}var ET;function SI(){return ET||(ET=1,Rm.exports=TI()),Rm.exports}var bm={exports:{}},an={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TT;function AI(){if(TT)return an;TT=1;var n=Pg();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return an.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,an.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},an.flushSync=function(p){var g=c.T,y=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=y,s.d.f()}},an.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},an.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},an.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:S,fetchPriority:D}):y==="script"&&s.d.X(p,{crossOrigin:T,integrity:S,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},an.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},an.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},an.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},an.requestFormReset=function(p){s.d.r(p)},an.unstable_batchedUpdates=function(p,g){return p(g)},an.useFormState=function(p,g,y){return c.H.useFormState(p,g,y)},an.useFormStatus=function(){return c.H.useHostTransitionStatus()},an.version="19.1.0",an}var ST;function RI(){if(ST)return bm.exports;ST=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),bm.exports=AI(),bm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AT;function wI(){if(AT)return yu;AT=1;var n=SI(),e=Pg(),t=RI();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,A=f.child;A;){if(A===o){E=!0,o=f,u=m;break}if(A===u){E=!0,u=f,o=m;break}A=A.sibling}if(!E){for(A=m.child;A;){if(A===o){E=!0,o=m,u=f;break}if(A===u){E=!0,u=m,o=f;break}A=A.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),te=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),x=Symbol.iterator;function V(i){return i===null||typeof i!="object"?null:(i=x&&i[x]||i["@@iterator"],typeof i=="function"?i:null)}var N=Symbol.for("react.client.reference");function Kt(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===N?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case I:return"Fragment";case B:return"Profiler";case H:return"StrictMode";case ce:return"Suspense";case fe:return"SuspenseList";case b:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case D:return"Portal";case te:return(i.displayName||"Context")+".Provider";case X:return(i._context.displayName||"Context")+".Consumer";case le:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case k:return r=i.displayName||null,r!==null?r:Kt(i.type)||"Memo";case w:r=i._payload,i=i._init;try{return Kt(i(r))}catch{}}return null}var mt=Array.isArray,Q=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},Ge=[],O=-1;function ee(i){return{current:i}}function ae(i){0>O||(i.current=Ge[O],Ge[O]=null,O--)}function ie(i,r){O++,Ge[O]=i.current,i.current=r}var ge=ee(null),De=ee(null),Re=ee(null),Vt=ee(null);function rt(i,r){switch(ie(Re,r),ie(De,i),ie(ge,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?jE(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=jE(r),i=qE(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ae(ge),ie(ge,i)}function fi(){ae(ge),ae(De),ae(Re)}function Is(i){i.memoizedState!==null&&ie(Vt,i);var r=ge.current,o=qE(r,i.type);r!==o&&(ie(De,i),ie(ge,o))}function Hi(i){De.current===i&&(ae(ge),ae(De)),Vt.current===i&&(ae(Vt),fu._currentValue=me)}var Cr=Object.prototype.hasOwnProperty,Ir=n.unstable_scheduleCallback,Nr=n.unstable_cancelCallback,ul=n.unstable_shouldYield,_c=n.unstable_requestPaint,xn=n.unstable_now,Td=n.unstable_getCurrentPriorityLevel,cl=n.unstable_ImmediatePriority,Ma=n.unstable_UserBlockingPriority,Dr=n.unstable_NormalPriority,Sd=n.unstable_LowPriority,ka=n.unstable_IdlePriority,hl=n.log,yc=n.unstable_setDisableYieldValue,gt=null,We=null;function An(i){if(typeof hl=="function"&&yc(i),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(gt,i)}catch{}}var sn=Math.clz32?Math.clz32:Or,vc=Math.log,Ad=Math.LN2;function Or(i){return i>>>=0,i===0?32:31-(vc(i)/Ad|0)|0}var Mr=256,kr=4194304;function Jn(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Pa(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var A=u&134217727;return A!==0?(u=A&~m,u!==0?f=Jn(u):(E&=A,E!==0?f=Jn(E):o||(o=A&~i,o!==0&&(f=Jn(o))))):(A=u&~m,A!==0?f=Jn(A):E!==0?f=Jn(E):o||(o=u&~i,o!==0&&(f=Jn(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Pr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function fl(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dl(){var i=Mr;return Mr<<=1,(Mr&4194048)===0&&(Mr=256),i}function pl(){var i=kr;return kr<<=1,(kr&62914560)===0&&(kr=4194304),i}function ji(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function qi(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function ml(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var A=i.entanglements,C=i.expirationTimes,F=i.hiddenUpdates;for(o=E&~o;0<o;){var $=31-sn(o),Z=1<<$;A[$]=0,C[$]=-1;var j=F[$];if(j!==null)for(F[$]=null,$=0;$<j.length;$++){var q=j[$];q!==null&&(q.lane&=-536870913)}o&=~Z}u!==0&&di(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function di(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-sn(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function gl(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-sn(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function Ns(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function xa(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Ds(){var i=re.p;return i!==0?i:(i=window.event,i===void 0?32:uT(i.type))}function Ec(i,r){var o=re.p;try{return re.p=i,r()}finally{re.p=o}}var ct=Math.random().toString(36).slice(2),Nt="__reactFiber$"+ct,Rt="__reactProps$"+ct,Ln="__reactContainer$"+ct,_l="__reactEvents$"+ct,Rd="__reactListeners$"+ct,Os="__reactHandles$"+ct,Tc="__reactResources$"+ct,xr="__reactMarker$"+ct;function Ms(i){delete i[Nt],delete i[Rt],delete i[_l],delete i[Rd],delete i[Os]}function Gi(i){var r=i[Nt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Ln]||o[Nt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=QE(i);i!==null;){if(o=i[Nt])return o;i=QE(i)}return r}i=o,o=i.parentNode}return null}function pi(i){if(i=i[Nt]||i[Ln]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function mi(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function pn(i){var r=i[Tc];return r||(r=i[Tc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Et(i){i[xr]=!0}var yl=new Set,La={};function ei(i,r){Ki(i,r),Ki(i+"Capture",r)}function Ki(i,r){for(La[i]=r,i=0;i<r.length;i++)yl.add(r[i])}var Sc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ac={},Lr={};function Rc(i){return Cr.call(Lr,i)?!0:Cr.call(Ac,i)?!1:Sc.test(i)?Lr[i]=!0:(Ac[i]=!0,!1)}function ks(i,r,o){if(Rc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function gi(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function Yt(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var Vr,wc;function Yi(i){if(Vr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Vr=r&&r[1]||"",wc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vr+i+wc}var Va=!1;function Ua(i,r){if(!i||Va)return"";Va=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(q){var j=q}Reflect.construct(i,[],Z)}else{try{Z.call()}catch(q){j=q}i.call(Z.prototype)}}else{try{throw Error()}catch(q){j=q}(Z=i())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(q){if(q&&j&&typeof q.stack=="string")return[q.stack,j.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],A=m[1];if(E&&A){var C=E.split(`
`),F=A.split(`
`);for(f=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;f<F.length&&!F[f].includes("DetermineComponentFrameRoot");)f++;if(u===C.length||f===F.length)for(u=C.length-1,f=F.length-1;1<=u&&0<=f&&C[u]!==F[f];)f--;for(;1<=u&&0<=f;u--,f--)if(C[u]!==F[f]){if(u!==1||f!==1)do if(u--,f--,0>f||C[u]!==F[f]){var $=`
`+C[u].replace(" at new "," at ");return i.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",i.displayName)),$}while(1<=u&&0<=f);break}}}finally{Va=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?Yi(o):""}function vl(i){switch(i.tag){case 26:case 27:case 5:return Yi(i.type);case 16:return Yi("Lazy");case 13:return Yi("Suspense");case 19:return Yi("SuspenseList");case 0:case 15:return Ua(i.type,!1);case 11:return Ua(i.type.render,!1);case 1:return Ua(i.type,!0);case 31:return Yi("Activity");default:return""}}function Ba(i){try{var r="";do r+=vl(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function mn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function El(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function wd(i){var r=El(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function za(i){i._valueTracker||(i._valueTracker=wd(i))}function Tl(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=El(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function Ur(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var bd=/[\n"\\]/g;function wt(i){return i.replace(bd,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Rn(i,r,o,u,f,m,E,A){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+mn(r)):i.value!==""+mn(r)&&(i.value=""+mn(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?Ps(i,E,mn(r)):o!=null?Ps(i,E,mn(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?i.name=""+mn(A):i.removeAttribute("name")}function Br(i,r,o,u,f,m,E,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+mn(o):"",r=r!=null?""+mn(r):o,A||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=A?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function Ps(i,r,o){r==="number"&&Ur(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function Qi(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+mn(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function Je(i,r,o){if(r!=null&&(r=""+mn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+mn(o):""}function zr(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(mt(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=mn(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function Vn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var Fr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||Fr.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Sl(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&bc(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&bc(i,m,r[m])}function Al(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Id=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fa(i){return Id.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var $i=null;function Un(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Wi=null,Xi=null;function Rl(i){var r=pi(i);if(r&&(i=r.stateNode)){var o=i[Rt]||null;e:switch(i=r.stateNode,r.type){case"input":if(Rn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+wt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Rt]||null;if(!f)throw Error(s(90));Rn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Tl(u)}break e;case"textarea":Je(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Qi(i,!!o.multiple,r,!1)}}}var _i=!1;function Cc(i,r,o){if(_i)return i(r,o);_i=!0;try{var u=i(r);return u}finally{if(_i=!1,(Wi!==null||Xi!==null)&&(Eh(),Wi&&(r=Wi,i=Xi,Xi=Wi=null,Rl(r),i)))for(r=0;r<i.length;r++)Rl(i[r])}}function Hr(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Rt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bn=!1;if(ti)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){Bn=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{Bn=!1}var yi=null,xs=null,Zi=null;function wl(){if(Zi)return Zi;var i,r=xs,o=r.length,u,f="value"in yi?yi.value:yi.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return Zi=f.slice(i,1<u?1-u:void 0)}function vi(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Ei(){return!0}function bl(){return!1}function Ut(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(o=i[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ei:bl,this.isPropagationStopped=bl,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ei)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ei)},persist:function(){},isPersistent:Ei}),r}var Ye={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ha=Ut(Ye),qr=y({},Ye,{view:0,detail:0}),Ic=Ut(qr),ja,qa,Ti,Gr=y({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ti&&(Ti&&i.type==="mousemove"?(ja=i.screenX-Ti.screenX,qa=i.screenY-Ti.screenY):qa=ja=0,Ti=i),ja)},movementY:function(i){return"movementY"in i?i.movementY:qa}}),zn=Ut(Gr),Nc=y({},Gr,{dataTransfer:0}),Nd=Ut(Nc),Kr=y({},qr,{relatedTarget:0}),Ga=Ut(Kr),Cl=y({},Ye,{animationName:0,elapsedTime:0,pseudoElement:0}),Ka=Ut(Cl),Dc=y({},Ye,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Ya=Ut(Dc),Dd=y({},Ye,{data:0}),Il=Ut(Dd),Yr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nl(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=Mc[i])?!!r[i]:!1}function Qr(){return Nl}var kc=y({},qr,{key:function(i){if(i.key){var r=Yr[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=vi(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Oc[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qr,charCode:function(i){return i.type==="keypress"?vi(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?vi(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Qa=Ut(kc),Pc=y({},Gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dl=Ut(Pc),Ji=y({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qr}),xc=Ut(Ji),Lc=y({},Ye,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vc=Ut(Lc),Uc=y({},Gr,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),$a=Ut(Uc),gn=y({},Ye,{newState:0,oldState:0}),Bc=Ut(gn),zc=[9,13,27,32],Si=ti&&"CompositionEvent"in window,h=null;ti&&"documentMode"in document&&(h=document.documentMode);var _=ti&&"TextEvent"in window&&!h,v=ti&&(!Si||h&&8<h&&11>=h),R=" ",U=!1;function G(i,r){switch(i){case"keyup":return zc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function se(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ve=!1;function Dt(i,r){switch(i){case"compositionend":return se(r);case"keypress":return r.which!==32?null:(U=!0,R);case"textInput":return i=r.data,i===R&&U?null:i;default:return null}}function Ue(i,r){if(Ve)return i==="compositionend"||!Si&&G(i,r)?(i=wl(),Zi=xs=yi=null,Ve=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var Bt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ot(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Bt[i.type]:r==="textarea"}function es(i,r,o,u){Wi?Xi?Xi.push(u):Xi=[u]:Wi=u,r=bh(r,"onChange"),0<r.length&&(o=new Ha("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var Qt=null,Ai=null;function Ol(i){UE(i,0)}function Fc(i){var r=mi(i);if(Tl(r))return i}function ry(i,r){if(i==="change")return r}var ay=!1;if(ti){var Od;if(ti){var Md="oninput"in document;if(!Md){var oy=document.createElement("div");oy.setAttribute("oninput","return;"),Md=typeof oy.oninput=="function"}Od=Md}else Od=!1;ay=Od&&(!document.documentMode||9<document.documentMode)}function ly(){Qt&&(Qt.detachEvent("onpropertychange",uy),Ai=Qt=null)}function uy(i){if(i.propertyName==="value"&&Fc(Ai)){var r=[];es(r,Ai,i,Un(i)),Cc(Ol,r)}}function Qb(i,r,o){i==="focusin"?(ly(),Qt=r,Ai=o,Qt.attachEvent("onpropertychange",uy)):i==="focusout"&&ly()}function $b(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Fc(Ai)}function Wb(i,r){if(i==="click")return Fc(r)}function Xb(i,r){if(i==="input"||i==="change")return Fc(r)}function Zb(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var wn=typeof Object.is=="function"?Object.is:Zb;function Ml(i,r){if(wn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Cr.call(r,f)||!wn(i[f],r[f]))return!1}return!0}function cy(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function hy(i,r){var o=cy(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=cy(o)}}function fy(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?fy(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function dy(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Ur(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=Ur(i.document)}return r}function kd(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var Jb=ti&&"documentMode"in document&&11>=document.documentMode,Wa=null,Pd=null,kl=null,xd=!1;function py(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;xd||Wa==null||Wa!==Ur(u)||(u=Wa,"selectionStart"in u&&kd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),kl&&Ml(kl,u)||(kl=u,u=bh(Pd,"onSelect"),0<u.length&&(r=new Ha("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=Wa)))}function $r(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var Xa={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionrun:$r("Transition","TransitionRun"),transitionstart:$r("Transition","TransitionStart"),transitioncancel:$r("Transition","TransitionCancel"),transitionend:$r("Transition","TransitionEnd")},Ld={},my={};ti&&(my=document.createElement("div").style,"AnimationEvent"in window||(delete Xa.animationend.animation,delete Xa.animationiteration.animation,delete Xa.animationstart.animation),"TransitionEvent"in window||delete Xa.transitionend.transition);function Wr(i){if(Ld[i])return Ld[i];if(!Xa[i])return i;var r=Xa[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in my)return Ld[i]=r[o];return i}var gy=Wr("animationend"),_y=Wr("animationiteration"),yy=Wr("animationstart"),eC=Wr("transitionrun"),tC=Wr("transitionstart"),nC=Wr("transitioncancel"),vy=Wr("transitionend"),Ey=new Map,Vd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vd.push("scrollEnd");function ni(i,r){Ey.set(i,r),ei(r,[i])}var Ty=new WeakMap;function Fn(i,r){if(typeof i=="object"&&i!==null){var o=Ty.get(i);return o!==void 0?o:(r={value:i,source:r,stack:Ba(r)},Ty.set(i,r),r)}return{value:i,source:r,stack:Ba(r)}}var Hn=[],Za=0,Ud=0;function Hc(){for(var i=Za,r=Ud=Za=0;r<i;){var o=Hn[r];Hn[r++]=null;var u=Hn[r];Hn[r++]=null;var f=Hn[r];Hn[r++]=null;var m=Hn[r];if(Hn[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&Sy(o,f,m)}}function jc(i,r,o,u){Hn[Za++]=i,Hn[Za++]=r,Hn[Za++]=o,Hn[Za++]=u,Ud|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function Bd(i,r,o,u){return jc(i,r,o,u),qc(i)}function Ja(i,r){return jc(i,null,null,r),qc(i)}function Sy(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-sn(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function qc(i){if(50<su)throw su=0,Gp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var eo={};function iC(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(i,r,o,u){return new iC(i,r,o,u)}function zd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function ts(i,r){var o=i.alternate;return o===null?(o=bn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Ay(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function Gc(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")zd(i)&&(E=1);else if(typeof i=="string")E=rI(i,o,ge.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case b:return i=bn(31,o,r,f),i.elementType=b,i.lanes=m,i;case I:return Xr(o.children,f,m,r);case H:E=8,f|=24;break;case B:return i=bn(12,o,r,f|2),i.elementType=B,i.lanes=m,i;case ce:return i=bn(13,o,r,f),i.elementType=ce,i.lanes=m,i;case fe:return i=bn(19,o,r,f),i.elementType=fe,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Y:case te:E=10;break e;case X:E=9;break e;case le:E=11;break e;case k:E=14;break e;case w:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=bn(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function Xr(i,r,o,u){return i=bn(7,i,u,r),i.lanes=o,i}function Fd(i,r,o){return i=bn(6,i,null,r),i.lanes=o,i}function Hd(i,r,o){return r=bn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var to=[],no=0,Kc=null,Yc=0,jn=[],qn=0,Zr=null,ns=1,is="";function Jr(i,r){to[no++]=Yc,to[no++]=Kc,Kc=i,Yc=r}function Ry(i,r,o){jn[qn++]=ns,jn[qn++]=is,jn[qn++]=Zr,Zr=i;var u=ns;i=is;var f=32-sn(u)-1;u&=~(1<<f),o+=1;var m=32-sn(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,ns=1<<32-sn(r)+f|o<<f|u,is=m+i}else ns=1<<m|o<<f|u,is=i}function jd(i){i.return!==null&&(Jr(i,1),Ry(i,1,0))}function qd(i){for(;i===Kc;)Kc=to[--no],to[no]=null,Yc=to[--no],to[no]=null;for(;i===Zr;)Zr=jn[--qn],jn[qn]=null,is=jn[--qn],jn[qn]=null,ns=jn[--qn],jn[qn]=null}var _n=null,_t=null,Ke=!1,ea=null,Ri=!1,Gd=Error(s(519));function ta(i){var r=Error(s(418,""));throw Ll(Fn(r,i)),Gd}function wy(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[Nt]=i,r[Rt]=u,o){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(o=0;o<au.length;o++)ke(au[o],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":ke("invalid",r),Br(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),za(r);break;case"select":ke("invalid",r);break;case"textarea":ke("invalid",r),zr(r,u.value,u.defaultValue,u.children),za(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||HE(r.textContent,o)?(u.popover!=null&&(ke("beforetoggle",r),ke("toggle",r)),u.onScroll!=null&&ke("scroll",r),u.onScrollEnd!=null&&ke("scrollend",r),u.onClick!=null&&(r.onclick=Ch),r=!0):r=!1,r||ta(i)}function by(i){for(_n=i.return;_n;)switch(_n.tag){case 5:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:_n=_n.return}}function Pl(i){if(i!==_n)return!1;if(!Ke)return by(i),Ke=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||om(i.type,i.memoizedProps)),o=!o),o&&_t&&ta(i),by(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){_t=si(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}_t=null}}else r===27?(r=_t,Xs(i.type)?(i=hm,hm=null,_t=i):_t=r):_t=_n?si(i.stateNode.nextSibling):null;return!0}function xl(){_t=_n=null,Ke=!1}function Cy(){var i=ea;return i!==null&&(En===null?En=i:En.push.apply(En,i),ea=null),i}function Ll(i){ea===null?ea=[i]:ea.push(i)}var Kd=ee(null),na=null,ss=null;function Ls(i,r,o){ie(Kd,r._currentValue),r._currentValue=o}function rs(i){i._currentValue=Kd.current,ae(Kd)}function Yd(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function Qd(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var C=0;C<r.length;C++)if(A.context===r[C]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),Yd(m.return,o,i),u||(E=null);break e}m=A.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),Yd(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Vl(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var A=f.type;wn(f.pendingProps.value,E.value)||(i!==null?i.push(A):i=[A])}}else if(f===Vt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(fu):i=[fu])}f=f.return}i!==null&&Qd(r,i,o,u),r.flags|=262144}function Qc(i){for(i=i.firstContext;i!==null;){if(!wn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ia(i){na=i,ss=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function rn(i){return Iy(na,i)}function $c(i,r){return na===null&&ia(i),Iy(i,r)}function Iy(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},ss===null){if(i===null)throw Error(s(308));ss=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else ss=ss.next=r;return o}var sC=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},rC=n.unstable_scheduleCallback,aC=n.unstable_NormalPriority,Mt={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $d(){return{controller:new sC,data:new Map,refCount:0}}function Ul(i){i.refCount--,i.refCount===0&&rC(aC,function(){i.controller.abort()})}var Bl=null,Wd=0,io=0,so=null;function oC(i,r){if(Bl===null){var o=Bl=[];Wd=0,io=Zp(),so={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Wd++,r.then(Ny,Ny),r}function Ny(){if(--Wd===0&&Bl!==null){so!==null&&(so.status="fulfilled");var i=Bl;Bl=null,io=0,so=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function lC(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Dy=Q.S;Q.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&oC(i,r),Dy!==null&&Dy(i,r)};var sa=ee(null);function Xd(){var i=sa.current;return i!==null?i:at.pooledCache}function Wc(i,r){r===null?ie(sa,sa.current):ie(sa,r.pool)}function Oy(){var i=Xd();return i===null?null:{parent:Mt._currentValue,pool:i}}var zl=Error(s(460)),My=Error(s(474)),Xc=Error(s(542)),Zd={then:function(){}};function ky(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Zc(){}function Py(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(Zc,Zc),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Ly(i),i;default:if(typeof r.status=="string")r.then(Zc,Zc);else{if(i=at,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Ly(i),i}throw Fl=r,zl}}var Fl=null;function xy(){if(Fl===null)throw Error(s(459));var i=Fl;return Fl=null,i}function Ly(i){if(i===zl||i===Xc)throw Error(s(483))}var Vs=!1;function Jd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ep(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Us(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Bs(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(Xe&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=qc(i),Sy(i,null,o),r}return jc(i,u,r,o),qc(i)}function Hl(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,gl(i,o)}}function tp(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var np=!1;function jl(){if(np){var i=so;if(i!==null)throw i}}function ql(i,r,o,u){np=!1;var f=i.updateQueue;Vs=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var C=A,F=C.next;C.next=null,E===null?m=F:E.next=F,E=C;var $=i.alternate;$!==null&&($=$.updateQueue,A=$.lastBaseUpdate,A!==E&&(A===null?$.firstBaseUpdate=F:A.next=F,$.lastBaseUpdate=C))}if(m!==null){var Z=f.baseState;E=0,$=F=C=null,A=m;do{var j=A.lane&-536870913,q=j!==A.lane;if(q?(Be&j)===j:(u&j)===j){j!==0&&j===io&&(np=!0),$!==null&&($=$.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Se=i,_e=A;j=r;var nt=o;switch(_e.tag){case 1:if(Se=_e.payload,typeof Se=="function"){Z=Se.call(nt,Z,j);break e}Z=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=_e.payload,j=typeof Se=="function"?Se.call(nt,Z,j):Se,j==null)break e;Z=y({},Z,j);break e;case 2:Vs=!0}}j=A.callback,j!==null&&(i.flags|=64,q&&(i.flags|=8192),q=f.callbacks,q===null?f.callbacks=[j]:q.push(j))}else q={lane:j,tag:A.tag,payload:A.payload,callback:A.callback,next:null},$===null?(F=$=q,C=Z):$=$.next=q,E|=j;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;q=A,A=q.next,q.next=null,f.lastBaseUpdate=q,f.shared.pending=null}}while(!0);$===null&&(C=Z),f.baseState=C,f.firstBaseUpdate=F,f.lastBaseUpdate=$,m===null&&(f.shared.lanes=0),Ys|=E,i.lanes=E,i.memoizedState=Z}}function Vy(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Uy(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)Vy(o[i],r)}var ro=ee(null),Jc=ee(0);function By(i,r){i=fs,ie(Jc,i),ie(ro,r),fs=i|r.baseLanes}function ip(){ie(Jc,fs),ie(ro,ro.current)}function sp(){fs=Jc.current,ae(ro),ae(Jc)}var zs=0,Ie=null,et=null,bt=null,eh=!1,ao=!1,ra=!1,th=0,Gl=0,oo=null,uC=0;function Tt(){throw Error(s(321))}function rp(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!wn(i[o],r[o]))return!1;return!0}function ap(i,r,o,u,f,m){return zs=m,Ie=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Q.H=i===null||i.memoizedState===null?Sv:Av,ra=!1,m=o(u,f),ra=!1,ao&&(m=Fy(r,o,u,f)),zy(i),m}function zy(i){Q.H=oh;var r=et!==null&&et.next!==null;if(zs=0,bt=et=Ie=null,eh=!1,Gl=0,oo=null,r)throw Error(s(300));i===null||zt||(i=i.dependencies,i!==null&&Qc(i)&&(zt=!0))}function Fy(i,r,o,u){Ie=i;var f=0;do{if(ao&&(oo=null),Gl=0,ao=!1,25<=f)throw Error(s(301));if(f+=1,bt=et=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}Q.H=gC,m=r(o,u)}while(ao);return m}function cC(){var i=Q.H,r=i.useState()[0];return r=typeof r.then=="function"?Kl(r):r,i=i.useState()[0],(et!==null?et.memoizedState:null)!==i&&(Ie.flags|=1024),r}function op(){var i=th!==0;return th=0,i}function lp(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function up(i){if(eh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}eh=!1}zs=0,bt=et=Ie=null,ao=!1,Gl=th=0,oo=null}function yn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?Ie.memoizedState=bt=i:bt=bt.next=i,bt}function Ct(){if(et===null){var i=Ie.alternate;i=i!==null?i.memoizedState:null}else i=et.next;var r=bt===null?Ie.memoizedState:bt.next;if(r!==null)bt=r,et=i;else{if(i===null)throw Ie.alternate===null?Error(s(467)):Error(s(310));et=i,i={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},bt===null?Ie.memoizedState=bt=i:bt=bt.next=i}return bt}function cp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Kl(i){var r=Gl;return Gl+=1,oo===null&&(oo=[]),i=Py(oo,i,r),r=Ie,(bt===null?r.memoizedState:bt.next)===null&&(r=r.alternate,Q.H=r===null||r.memoizedState===null?Sv:Av),i}function nh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Kl(i);if(i.$$typeof===te)return rn(i)}throw Error(s(438,String(i)))}function hp(i){var r=null,o=Ie.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ie.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=cp(),Ie.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=M;return r.index++,o}function as(i,r){return typeof r=="function"?r(i):r}function ih(i){var r=Ct();return fp(r,et,i)}function fp(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var A=E=null,C=null,F=r,$=!1;do{var Z=F.lane&-536870913;if(Z!==F.lane?(Be&Z)===Z:(zs&Z)===Z){var j=F.revertLane;if(j===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),Z===io&&($=!0);else if((zs&j)===j){F=F.next,j===io&&($=!0);continue}else Z={lane:0,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},C===null?(A=C=Z,E=m):C=C.next=Z,Ie.lanes|=j,Ys|=j;Z=F.action,ra&&o(m,Z),m=F.hasEagerState?F.eagerState:o(m,Z)}else j={lane:Z,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},C===null?(A=C=j,E=m):C=C.next=j,Ie.lanes|=Z,Ys|=Z;F=F.next}while(F!==null&&F!==r);if(C===null?E=m:C.next=A,!wn(m,i.memoizedState)&&(zt=!0,$&&(o=so,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=C,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function dp(i){var r=Ct(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);wn(m,r.memoizedState)||(zt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Hy(i,r,o){var u=Ie,f=Ct(),m=Ke;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!wn((et||f).memoizedState,o);E&&(f.memoizedState=o,zt=!0),f=f.queue;var A=Gy.bind(null,u,f,i);if(Yl(2048,8,A,[i]),f.getSnapshot!==r||E||bt!==null&&bt.memoizedState.tag&1){if(u.flags|=2048,lo(9,sh(),qy.bind(null,u,f,o,r),null),at===null)throw Error(s(349));m||(zs&124)!==0||jy(u,r,o)}return o}function jy(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Ie.updateQueue,r===null?(r=cp(),Ie.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function qy(i,r,o,u){r.value=o,r.getSnapshot=u,Ky(r)&&Yy(i)}function Gy(i,r,o){return o(function(){Ky(r)&&Yy(i)})}function Ky(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!wn(i,o)}catch{return!0}}function Yy(i){var r=Ja(i,2);r!==null&&On(r,i,2)}function pp(i){var r=yn();if(typeof i=="function"){var o=i;if(i=o(),ra){An(!0);try{o()}finally{An(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:i},r}function Qy(i,r,o,u){return i.baseState=o,fp(i,et,typeof u=="function"?u:as)}function hC(i,r,o,u,f){if(ah(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};Q.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,$y(r,m)):(m.next=o.next,r.pending=o.next=m)}}function $y(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=Q.T,E={};Q.T=E;try{var A=o(f,u),C=Q.S;C!==null&&C(E,A),Wy(i,r,A)}catch(F){mp(i,r,F)}finally{Q.T=m}}else try{m=o(f,u),Wy(i,r,m)}catch(F){mp(i,r,F)}}function Wy(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Xy(i,r,u)},function(u){return mp(i,r,u)}):Xy(i,r,o)}function Xy(i,r,o){r.status="fulfilled",r.value=o,Zy(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,$y(i,o)))}function mp(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Zy(r),r=r.next;while(r!==u)}i.action=null}function Zy(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function Jy(i,r){return r}function ev(i,r){if(Ke){var o=at.formState;if(o!==null){e:{var u=Ie;if(Ke){if(_t){t:{for(var f=_t,m=Ri;f.nodeType!==8;){if(!m){f=null;break t}if(f=si(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){_t=si(f.nextSibling),u=f.data==="F!";break e}}ta(u)}u=!1}u&&(r=o[0])}}return o=yn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jy,lastRenderedState:r},o.queue=u,o=vv.bind(null,Ie,u),u.dispatch=o,u=pp(!1),m=Ep.bind(null,Ie,!1,u.queue),u=yn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=hC.bind(null,Ie,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function tv(i){var r=Ct();return nv(r,et,i)}function nv(i,r,o){if(r=fp(i,r,Jy)[0],i=ih(as)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Kl(r)}catch(E){throw E===zl?Xc:E}else u=r;r=Ct();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(Ie.flags|=2048,lo(9,sh(),fC.bind(null,f,o),null)),[u,m,i]}function fC(i,r){i.action=r}function iv(i){var r=Ct(),o=et;if(o!==null)return nv(r,o,i);Ct(),r=r.memoizedState,o=Ct();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function lo(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=Ie.updateQueue,r===null&&(r=cp(),Ie.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function sh(){return{destroy:void 0,resource:void 0}}function sv(){return Ct().memoizedState}function rh(i,r,o,u){var f=yn();u=u===void 0?null:u,Ie.flags|=i,f.memoizedState=lo(1|r,sh(),o,u)}function Yl(i,r,o,u){var f=Ct();u=u===void 0?null:u;var m=f.memoizedState.inst;et!==null&&u!==null&&rp(u,et.memoizedState.deps)?f.memoizedState=lo(r,m,o,u):(Ie.flags|=i,f.memoizedState=lo(1|r,m,o,u))}function rv(i,r){rh(8390656,8,i,r)}function av(i,r){Yl(2048,8,i,r)}function ov(i,r){return Yl(4,2,i,r)}function lv(i,r){return Yl(4,4,i,r)}function uv(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function cv(i,r,o){o=o!=null?o.concat([i]):null,Yl(4,4,uv.bind(null,r,i),o)}function gp(){}function hv(i,r){var o=Ct();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&rp(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function fv(i,r){var o=Ct();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&rp(r,u[1]))return u[0];if(u=i(),ra){An(!0);try{i()}finally{An(!1)}}return o.memoizedState=[u,r],u}function _p(i,r,o){return o===void 0||(zs&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=mE(),Ie.lanes|=i,Ys|=i,o)}function dv(i,r,o,u){return wn(o,r)?o:ro.current!==null?(i=_p(i,o,u),wn(i,r)||(zt=!0),i):(zs&42)===0?(zt=!0,i.memoizedState=o):(i=mE(),Ie.lanes|=i,Ys|=i,r)}function pv(i,r,o,u,f){var m=re.p;re.p=m!==0&&8>m?m:8;var E=Q.T,A={};Q.T=A,Ep(i,!1,r,o);try{var C=f(),F=Q.S;if(F!==null&&F(A,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var $=lC(C,u);Ql(i,r,$,Dn(i))}else Ql(i,r,u,Dn(i))}catch(Z){Ql(i,r,{then:function(){},status:"rejected",reason:Z},Dn())}finally{re.p=m,Q.T=E}}function dC(){}function yp(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=mv(i).queue;pv(i,f,r,me,o===null?dC:function(){return gv(i),o(u)})}function mv(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:me},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function gv(i){var r=mv(i).next.queue;Ql(i,r,{},Dn())}function vp(){return rn(fu)}function _v(){return Ct().memoizedState}function yv(){return Ct().memoizedState}function pC(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=Dn();i=Us(o);var u=Bs(r,i,o);u!==null&&(On(u,r,o),Hl(u,r,o)),r={cache:$d()},i.payload=r;return}r=r.return}}function mC(i,r,o){var u=Dn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},ah(i)?Ev(r,o):(o=Bd(i,r,o,u),o!==null&&(On(o,i,u),Tv(o,r,u)))}function vv(i,r,o){var u=Dn();Ql(i,r,o,u)}function Ql(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(ah(i))Ev(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,A=m(E,o);if(f.hasEagerState=!0,f.eagerState=A,wn(A,E))return jc(i,r,f,0),at===null&&Hc(),!1}catch{}finally{}if(o=Bd(i,r,f,u),o!==null)return On(o,i,u),Tv(o,r,u),!0}return!1}function Ep(i,r,o,u){if(u={lane:2,revertLane:Zp(),action:u,hasEagerState:!1,eagerState:null,next:null},ah(i)){if(r)throw Error(s(479))}else r=Bd(i,o,u,2),r!==null&&On(r,i,2)}function ah(i){var r=i.alternate;return i===Ie||r!==null&&r===Ie}function Ev(i,r){ao=eh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function Tv(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,gl(i,o)}}var oh={readContext:rn,use:nh,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useLayoutEffect:Tt,useInsertionEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useSyncExternalStore:Tt,useId:Tt,useHostTransitionStatus:Tt,useFormState:Tt,useActionState:Tt,useOptimistic:Tt,useMemoCache:Tt,useCacheRefresh:Tt},Sv={readContext:rn,use:nh,useCallback:function(i,r){return yn().memoizedState=[i,r===void 0?null:r],i},useContext:rn,useEffect:rv,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,rh(4194308,4,uv.bind(null,r,i),o)},useLayoutEffect:function(i,r){return rh(4194308,4,i,r)},useInsertionEffect:function(i,r){rh(4,2,i,r)},useMemo:function(i,r){var o=yn();r=r===void 0?null:r;var u=i();if(ra){An(!0);try{i()}finally{An(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=yn();if(o!==void 0){var f=o(r);if(ra){An(!0);try{o(r)}finally{An(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=mC.bind(null,Ie,i),[u.memoizedState,i]},useRef:function(i){var r=yn();return i={current:i},r.memoizedState=i},useState:function(i){i=pp(i);var r=i.queue,o=vv.bind(null,Ie,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:gp,useDeferredValue:function(i,r){var o=yn();return _p(o,i,r)},useTransition:function(){var i=pp(!1);return i=pv.bind(null,Ie,i.queue,!0,!1),yn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Ie,f=yn();if(Ke){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),at===null)throw Error(s(349));(Be&124)!==0||jy(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,rv(Gy.bind(null,u,m,i),[i]),u.flags|=2048,lo(9,sh(),qy.bind(null,u,m,o,r),null),o},useId:function(){var i=yn(),r=at.identifierPrefix;if(Ke){var o=is,u=ns;o=(u&~(1<<32-sn(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=th++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=uC++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:vp,useFormState:ev,useActionState:ev,useOptimistic:function(i){var r=yn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Ep.bind(null,Ie,!0,o),o.dispatch=r,[i,r]},useMemoCache:hp,useCacheRefresh:function(){return yn().memoizedState=pC.bind(null,Ie)}},Av={readContext:rn,use:nh,useCallback:hv,useContext:rn,useEffect:av,useImperativeHandle:cv,useInsertionEffect:ov,useLayoutEffect:lv,useMemo:fv,useReducer:ih,useRef:sv,useState:function(){return ih(as)},useDebugValue:gp,useDeferredValue:function(i,r){var o=Ct();return dv(o,et.memoizedState,i,r)},useTransition:function(){var i=ih(as)[0],r=Ct().memoizedState;return[typeof i=="boolean"?i:Kl(i),r]},useSyncExternalStore:Hy,useId:_v,useHostTransitionStatus:vp,useFormState:tv,useActionState:tv,useOptimistic:function(i,r){var o=Ct();return Qy(o,et,i,r)},useMemoCache:hp,useCacheRefresh:yv},gC={readContext:rn,use:nh,useCallback:hv,useContext:rn,useEffect:av,useImperativeHandle:cv,useInsertionEffect:ov,useLayoutEffect:lv,useMemo:fv,useReducer:dp,useRef:sv,useState:function(){return dp(as)},useDebugValue:gp,useDeferredValue:function(i,r){var o=Ct();return et===null?_p(o,i,r):dv(o,et.memoizedState,i,r)},useTransition:function(){var i=dp(as)[0],r=Ct().memoizedState;return[typeof i=="boolean"?i:Kl(i),r]},useSyncExternalStore:Hy,useId:_v,useHostTransitionStatus:vp,useFormState:iv,useActionState:iv,useOptimistic:function(i,r){var o=Ct();return et!==null?Qy(o,et,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:hp,useCacheRefresh:yv},uo=null,$l=0;function lh(i){var r=$l;return $l+=1,uo===null&&(uo=[]),Py(uo,i,r)}function Wl(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function uh(i,r){throw r.$$typeof===T?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function Rv(i){var r=i._init;return r(i._payload)}function wv(i){function r(L,P){if(i){var z=L.deletions;z===null?(L.deletions=[P],L.flags|=16):z.push(P)}}function o(L,P){if(!i)return null;for(;P!==null;)r(L,P),P=P.sibling;return null}function u(L){for(var P=new Map;L!==null;)L.key!==null?P.set(L.key,L):P.set(L.index,L),L=L.sibling;return P}function f(L,P){return L=ts(L,P),L.index=0,L.sibling=null,L}function m(L,P,z){return L.index=z,i?(z=L.alternate,z!==null?(z=z.index,z<P?(L.flags|=67108866,P):z):(L.flags|=67108866,P)):(L.flags|=1048576,P)}function E(L){return i&&L.alternate===null&&(L.flags|=67108866),L}function A(L,P,z,W){return P===null||P.tag!==6?(P=Fd(z,L.mode,W),P.return=L,P):(P=f(P,z),P.return=L,P)}function C(L,P,z,W){var he=z.type;return he===I?$(L,P,z.props.children,W,z.key):P!==null&&(P.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===w&&Rv(he)===P.type)?(P=f(P,z.props),Wl(P,z),P.return=L,P):(P=Gc(z.type,z.key,z.props,null,L.mode,W),Wl(P,z),P.return=L,P)}function F(L,P,z,W){return P===null||P.tag!==4||P.stateNode.containerInfo!==z.containerInfo||P.stateNode.implementation!==z.implementation?(P=Hd(z,L.mode,W),P.return=L,P):(P=f(P,z.children||[]),P.return=L,P)}function $(L,P,z,W,he){return P===null||P.tag!==7?(P=Xr(z,L.mode,W,he),P.return=L,P):(P=f(P,z),P.return=L,P)}function Z(L,P,z){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Fd(""+P,L.mode,z),P.return=L,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case S:return z=Gc(P.type,P.key,P.props,null,L.mode,z),Wl(z,P),z.return=L,z;case D:return P=Hd(P,L.mode,z),P.return=L,P;case w:var W=P._init;return P=W(P._payload),Z(L,P,z)}if(mt(P)||V(P))return P=Xr(P,L.mode,z,null),P.return=L,P;if(typeof P.then=="function")return Z(L,lh(P),z);if(P.$$typeof===te)return Z(L,$c(L,P),z);uh(L,P)}return null}function j(L,P,z,W){var he=P!==null?P.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return he!==null?null:A(L,P,""+z,W);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return z.key===he?C(L,P,z,W):null;case D:return z.key===he?F(L,P,z,W):null;case w:return he=z._init,z=he(z._payload),j(L,P,z,W)}if(mt(z)||V(z))return he!==null?null:$(L,P,z,W,null);if(typeof z.then=="function")return j(L,P,lh(z),W);if(z.$$typeof===te)return j(L,P,$c(L,z),W);uh(L,z)}return null}function q(L,P,z,W,he){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return L=L.get(z)||null,A(P,L,""+W,he);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return L=L.get(W.key===null?z:W.key)||null,C(P,L,W,he);case D:return L=L.get(W.key===null?z:W.key)||null,F(P,L,W,he);case w:var Oe=W._init;return W=Oe(W._payload),q(L,P,z,W,he)}if(mt(W)||V(W))return L=L.get(z)||null,$(P,L,W,he,null);if(typeof W.then=="function")return q(L,P,z,lh(W),he);if(W.$$typeof===te)return q(L,P,z,$c(P,W),he);uh(P,W)}return null}function Se(L,P,z,W){for(var he=null,Oe=null,pe=P,Ee=P=0,Ht=null;pe!==null&&Ee<z.length;Ee++){pe.index>Ee?(Ht=pe,pe=null):Ht=pe.sibling;var qe=j(L,pe,z[Ee],W);if(qe===null){pe===null&&(pe=Ht);break}i&&pe&&qe.alternate===null&&r(L,pe),P=m(qe,P,Ee),Oe===null?he=qe:Oe.sibling=qe,Oe=qe,pe=Ht}if(Ee===z.length)return o(L,pe),Ke&&Jr(L,Ee),he;if(pe===null){for(;Ee<z.length;Ee++)pe=Z(L,z[Ee],W),pe!==null&&(P=m(pe,P,Ee),Oe===null?he=pe:Oe.sibling=pe,Oe=pe);return Ke&&Jr(L,Ee),he}for(pe=u(pe);Ee<z.length;Ee++)Ht=q(pe,L,Ee,z[Ee],W),Ht!==null&&(i&&Ht.alternate!==null&&pe.delete(Ht.key===null?Ee:Ht.key),P=m(Ht,P,Ee),Oe===null?he=Ht:Oe.sibling=Ht,Oe=Ht);return i&&pe.forEach(function(nr){return r(L,nr)}),Ke&&Jr(L,Ee),he}function _e(L,P,z,W){if(z==null)throw Error(s(151));for(var he=null,Oe=null,pe=P,Ee=P=0,Ht=null,qe=z.next();pe!==null&&!qe.done;Ee++,qe=z.next()){pe.index>Ee?(Ht=pe,pe=null):Ht=pe.sibling;var nr=j(L,pe,qe.value,W);if(nr===null){pe===null&&(pe=Ht);break}i&&pe&&nr.alternate===null&&r(L,pe),P=m(nr,P,Ee),Oe===null?he=nr:Oe.sibling=nr,Oe=nr,pe=Ht}if(qe.done)return o(L,pe),Ke&&Jr(L,Ee),he;if(pe===null){for(;!qe.done;Ee++,qe=z.next())qe=Z(L,qe.value,W),qe!==null&&(P=m(qe,P,Ee),Oe===null?he=qe:Oe.sibling=qe,Oe=qe);return Ke&&Jr(L,Ee),he}for(pe=u(pe);!qe.done;Ee++,qe=z.next())qe=q(pe,L,Ee,qe.value,W),qe!==null&&(i&&qe.alternate!==null&&pe.delete(qe.key===null?Ee:qe.key),P=m(qe,P,Ee),Oe===null?he=qe:Oe.sibling=qe,Oe=qe);return i&&pe.forEach(function(_I){return r(L,_I)}),Ke&&Jr(L,Ee),he}function nt(L,P,z,W){if(typeof z=="object"&&z!==null&&z.type===I&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case S:e:{for(var he=z.key;P!==null;){if(P.key===he){if(he=z.type,he===I){if(P.tag===7){o(L,P.sibling),W=f(P,z.props.children),W.return=L,L=W;break e}}else if(P.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===w&&Rv(he)===P.type){o(L,P.sibling),W=f(P,z.props),Wl(W,z),W.return=L,L=W;break e}o(L,P);break}else r(L,P);P=P.sibling}z.type===I?(W=Xr(z.props.children,L.mode,W,z.key),W.return=L,L=W):(W=Gc(z.type,z.key,z.props,null,L.mode,W),Wl(W,z),W.return=L,L=W)}return E(L);case D:e:{for(he=z.key;P!==null;){if(P.key===he)if(P.tag===4&&P.stateNode.containerInfo===z.containerInfo&&P.stateNode.implementation===z.implementation){o(L,P.sibling),W=f(P,z.children||[]),W.return=L,L=W;break e}else{o(L,P);break}else r(L,P);P=P.sibling}W=Hd(z,L.mode,W),W.return=L,L=W}return E(L);case w:return he=z._init,z=he(z._payload),nt(L,P,z,W)}if(mt(z))return Se(L,P,z,W);if(V(z)){if(he=V(z),typeof he!="function")throw Error(s(150));return z=he.call(z),_e(L,P,z,W)}if(typeof z.then=="function")return nt(L,P,lh(z),W);if(z.$$typeof===te)return nt(L,P,$c(L,z),W);uh(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,P!==null&&P.tag===6?(o(L,P.sibling),W=f(P,z),W.return=L,L=W):(o(L,P),W=Fd(z,L.mode,W),W.return=L,L=W),E(L)):o(L,P)}return function(L,P,z,W){try{$l=0;var he=nt(L,P,z,W);return uo=null,he}catch(pe){if(pe===zl||pe===Xc)throw pe;var Oe=bn(29,pe,null,L.mode);return Oe.lanes=W,Oe.return=L,Oe}finally{}}}var co=wv(!0),bv=wv(!1),Gn=ee(null),wi=null;function Fs(i){var r=i.alternate;ie(kt,kt.current&1),ie(Gn,i),wi===null&&(r===null||ro.current!==null||r.memoizedState!==null)&&(wi=i)}function Cv(i){if(i.tag===22){if(ie(kt,kt.current),ie(Gn,i),wi===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(wi=i)}}else Hs()}function Hs(){ie(kt,kt.current),ie(Gn,Gn.current)}function os(i){ae(Gn),wi===i&&(wi=null),ae(kt)}var kt=ee(0);function ch(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||cm(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Tp(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:y({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Sp={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=Dn(),f=Us(u);f.payload=r,o!=null&&(f.callback=o),r=Bs(i,f,u),r!==null&&(On(r,i,u),Hl(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=Dn(),f=Us(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Bs(i,f,u),r!==null&&(On(r,i,u),Hl(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=Dn(),u=Us(o);u.tag=2,r!=null&&(u.callback=r),r=Bs(i,u,o),r!==null&&(On(r,i,o),Hl(r,i,o))}};function Iv(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!Ml(o,u)||!Ml(f,m):!0}function Nv(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&Sp.enqueueReplaceState(r,r.state,null)}function aa(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=y({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var hh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function Dv(i){hh(i)}function Ov(i){console.error(i)}function Mv(i){hh(i)}function fh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function kv(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Ap(i,r,o){return o=Us(o),o.tag=3,o.payload={element:null},o.callback=function(){fh(i,r)},o}function Pv(i){return i=Us(i),i.tag=3,i}function xv(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){kv(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){kv(r,o,u),typeof f!="function"&&(Qs===null?Qs=new Set([this]):Qs.add(this));var A=u.stack;this.componentDidCatch(u.value,{componentStack:A!==null?A:""})})}function _C(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Vl(r,o,f,!0),o=Gn.current,o!==null){switch(o.tag){case 13:return wi===null?Yp():o.alternate===null&&yt===0&&(yt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Zd?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),$p(i,u,f)),!1;case 22:return o.flags|=65536,u===Zd?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),$p(i,u,f)),!1}throw Error(s(435,o.tag))}return $p(i,u,f),Yp(),!1}if(Ke)return r=Gn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Gd&&(i=Error(s(422),{cause:u}),Ll(Fn(i,o)))):(u!==Gd&&(r=Error(s(423),{cause:u}),Ll(Fn(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=Fn(u,o),f=Ap(i.stateNode,u,f),tp(i,f),yt!==4&&(yt=2)),!1;var m=Error(s(520),{cause:u});if(m=Fn(m,o),iu===null?iu=[m]:iu.push(m),yt!==4&&(yt=2),r===null)return!0;u=Fn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=Ap(o.stateNode,u,i),tp(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Qs===null||!Qs.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Pv(f),xv(f,i,o,u),tp(o,f),!1}o=o.return}while(o!==null);return!1}var Lv=Error(s(461)),zt=!1;function $t(i,r,o,u){r.child=i===null?bv(r,null,o,u):co(r,i.child,o,u)}function Vv(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var A in u)A!=="ref"&&(E[A]=u[A])}else E=u;return ia(r),u=ap(i,r,o,E,m,f),A=op(),i!==null&&!zt?(lp(i,r,f),ls(i,r,f)):(Ke&&A&&jd(r),r.flags|=1,$t(i,r,u,f),r.child)}function Uv(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!zd(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,Bv(i,r,m,u,f)):(i=Gc(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!Op(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Ml,o(E,u)&&i.ref===r.ref)return ls(i,r,f)}return r.flags|=1,i=ts(m,u),i.ref=r.ref,i.return=r,r.child=i}function Bv(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(Ml(m,u)&&i.ref===r.ref)if(zt=!1,r.pendingProps=u=m,Op(i,f))(i.flags&131072)!==0&&(zt=!0);else return r.lanes=i.lanes,ls(i,r,f)}return Rp(i,r,o,u,f)}function zv(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return Fv(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&Wc(r,m!==null?m.cachePool:null),m!==null?By(r,m):ip(),Cv(r);else return r.lanes=r.childLanes=536870912,Fv(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(Wc(r,m.cachePool),By(r,m),Hs(),r.memoizedState=null):(i!==null&&Wc(r,null),ip(),Hs());return $t(i,r,f,o),r.child}function Fv(i,r,o,u){var f=Xd();return f=f===null?null:{parent:Mt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&Wc(r,null),ip(),Cv(r),i!==null&&Vl(i,r,u,!0),null}function dh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function Rp(i,r,o,u,f){return ia(r),o=ap(i,r,o,u,void 0,f),u=op(),i!==null&&!zt?(lp(i,r,f),ls(i,r,f)):(Ke&&u&&jd(r),r.flags|=1,$t(i,r,o,f),r.child)}function Hv(i,r,o,u,f,m){return ia(r),r.updateQueue=null,o=Fy(r,u,o,f),zy(i),u=op(),i!==null&&!zt?(lp(i,r,m),ls(i,r,m)):(Ke&&u&&jd(r),r.flags|=1,$t(i,r,o,m),r.child)}function jv(i,r,o,u,f){if(ia(r),r.stateNode===null){var m=eo,E=o.contextType;typeof E=="object"&&E!==null&&(m=rn(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Sp,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},Jd(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?rn(E):eo,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Tp(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Sp.enqueueReplaceState(m,m.state,null),ql(r,u,m,f),jl(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var A=r.memoizedProps,C=aa(o,A);m.props=C;var F=m.context,$=o.contextType;E=eo,typeof $=="object"&&$!==null&&(E=rn($));var Z=o.getDerivedStateFromProps;$=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,$||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||F!==E)&&Nv(r,m,u,E),Vs=!1;var j=r.memoizedState;m.state=j,ql(r,u,m,f),jl(),F=r.memoizedState,A||j!==F||Vs?(typeof Z=="function"&&(Tp(r,o,Z,u),F=r.memoizedState),(C=Vs||Iv(r,o,C,u,j,F,E))?($||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=F),m.props=u,m.state=F,m.context=E,u=C):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,ep(i,r),E=r.memoizedProps,$=aa(o,E),m.props=$,Z=r.pendingProps,j=m.context,F=o.contextType,C=eo,typeof F=="object"&&F!==null&&(C=rn(F)),A=o.getDerivedStateFromProps,(F=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Z||j!==C)&&Nv(r,m,u,C),Vs=!1,j=r.memoizedState,m.state=j,ql(r,u,m,f),jl();var q=r.memoizedState;E!==Z||j!==q||Vs||i!==null&&i.dependencies!==null&&Qc(i.dependencies)?(typeof A=="function"&&(Tp(r,o,A,u),q=r.memoizedState),($=Vs||Iv(r,o,$,u,j,q,C)||i!==null&&i.dependencies!==null&&Qc(i.dependencies))?(F||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,q,C),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,q,C)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&j===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&j===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=q),m.props=u,m.state=q,m.context=C,u=$):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&j===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&j===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,dh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=co(r,i.child,null,f),r.child=co(r,null,o,f)):$t(i,r,o,f),r.memoizedState=m.state,i=r.child):i=ls(i,r,f),i}function qv(i,r,o,u){return xl(),r.flags|=256,$t(i,r,o,u),r.child}var wp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bp(i){return{baseLanes:i,cachePool:Oy()}}function Cp(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=Kn),i}function Gv(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(kt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(Ke){if(f?Fs(r):Hs(),Ke){var A=_t,C;if(C=A){e:{for(C=A,A=Ri;C.nodeType!==8;){if(!A){A=null;break e}if(C=si(C.nextSibling),C===null){A=null;break e}}A=C}A!==null?(r.memoizedState={dehydrated:A,treeContext:Zr!==null?{id:ns,overflow:is}:null,retryLane:536870912,hydrationErrors:null},C=bn(18,null,null,0),C.stateNode=A,C.return=r,r.child=C,_n=r,_t=null,C=!0):C=!1}C||ta(r)}if(A=r.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return cm(A)?r.lanes=32:r.lanes=536870912,null;os(r)}return A=u.children,u=u.fallback,f?(Hs(),f=r.mode,A=ph({mode:"hidden",children:A},f),u=Xr(u,f,o,null),A.return=r,u.return=r,A.sibling=u,r.child=A,f=r.child,f.memoizedState=bp(o),f.childLanes=Cp(i,E,o),r.memoizedState=wp,u):(Fs(r),Ip(r,A))}if(C=i.memoizedState,C!==null&&(A=C.dehydrated,A!==null)){if(m)r.flags&256?(Fs(r),r.flags&=-257,r=Np(i,r,o)):r.memoizedState!==null?(Hs(),r.child=i.child,r.flags|=128,r=null):(Hs(),f=u.fallback,A=r.mode,u=ph({mode:"visible",children:u.children},A),f=Xr(f,A,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,co(r,i.child,null,o),u=r.child,u.memoizedState=bp(o),u.childLanes=Cp(i,E,o),r.memoizedState=wp,r=f);else if(Fs(r),cm(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var F=E.dgst;E=F,u=Error(s(419)),u.stack="",u.digest=E,Ll({value:u,source:null,stack:null}),r=Np(i,r,o)}else if(zt||Vl(i,r,o,!1),E=(o&i.childLanes)!==0,zt||E){if(E=at,E!==null&&(u=o&-o,u=(u&42)!==0?1:Ns(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==C.retryLane))throw C.retryLane=u,Ja(i,u),On(E,i,u),Lv;A.data==="$?"||Yp(),r=Np(i,r,o)}else A.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=C.treeContext,_t=si(A.nextSibling),_n=r,Ke=!0,ea=null,Ri=!1,i!==null&&(jn[qn++]=ns,jn[qn++]=is,jn[qn++]=Zr,ns=i.id,is=i.overflow,Zr=r),r=Ip(r,u.children),r.flags|=4096);return r}return f?(Hs(),f=u.fallback,A=r.mode,C=i.child,F=C.sibling,u=ts(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&65011712,F!==null?f=ts(F,f):(f=Xr(f,A,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,A=i.child.memoizedState,A===null?A=bp(o):(C=A.cachePool,C!==null?(F=Mt._currentValue,C=C.parent!==F?{parent:F,pool:F}:C):C=Oy(),A={baseLanes:A.baseLanes|o,cachePool:C}),f.memoizedState=A,f.childLanes=Cp(i,E,o),r.memoizedState=wp,u):(Fs(r),o=i.child,i=o.sibling,o=ts(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function Ip(i,r){return r=ph({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function ph(i,r){return i=bn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function Np(i,r,o){return co(r,i.child,null,o),i=Ip(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function Kv(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),Yd(i.return,r,o)}function Dp(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function Yv(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if($t(i,r,u.children,o),u=kt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Kv(i,o,r);else if(i.tag===19)Kv(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(ie(kt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&ch(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),Dp(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&ch(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}Dp(r,!0,o,null,m);break;case"together":Dp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ls(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),Ys|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(Vl(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=ts(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=ts(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function Op(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&Qc(i)))}function yC(i,r,o){switch(r.tag){case 3:rt(r,r.stateNode.containerInfo),Ls(r,Mt,i.memoizedState.cache),xl();break;case 27:case 5:Is(r);break;case 4:rt(r,r.stateNode.containerInfo);break;case 10:Ls(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Fs(r),r.flags|=128,null):(o&r.child.childLanes)!==0?Gv(i,r,o):(Fs(r),i=ls(i,r,o),i!==null?i.sibling:null);Fs(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Vl(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return Yv(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(kt,kt.current),u)break;return null;case 22:case 23:return r.lanes=0,zv(i,r,o);case 24:Ls(r,Mt,i.memoizedState.cache)}return ls(i,r,o)}function Qv(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)zt=!0;else{if(!Op(i,o)&&(r.flags&128)===0)return zt=!1,yC(i,r,o);zt=(i.flags&131072)!==0}else zt=!1,Ke&&(r.flags&1048576)!==0&&Ry(r,Yc,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")zd(u)?(i=aa(u,i),r.tag=1,r=jv(null,r,u,i,o)):(r.tag=0,r=Rp(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===le){r.tag=11,r=Vv(null,r,u,i,o);break e}else if(f===k){r.tag=14,r=Uv(null,r,u,i,o);break e}}throw r=Kt(u)||u,Error(s(306,r,""))}}return r;case 0:return Rp(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=aa(u,r.pendingProps),jv(i,r,u,f,o);case 3:e:{if(rt(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,ep(i,r),ql(r,u,null,o);var E=r.memoizedState;if(u=E.cache,Ls(r,Mt,u),u!==m.cache&&Qd(r,[Mt],o,!0),jl(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=qv(i,r,u,o);break e}else if(u!==f){f=Fn(Error(s(424)),r),Ll(f),r=qv(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(_t=si(i.firstChild),_n=r,Ke=!0,ea=null,Ri=!0,o=bv(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(xl(),u===f){r=ls(i,r,o);break e}$t(i,r,u,o)}r=r.child}return r;case 26:return dh(i,r),i===null?(o=ZE(r.type,null,r.pendingProps,null))?r.memoizedState=o:Ke||(o=r.type,i=r.pendingProps,u=Ih(Re.current).createElement(o),u[Nt]=r,u[Rt]=i,Xt(u,o,i),Et(u),r.stateNode=u):r.memoizedState=ZE(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Is(r),i===null&&Ke&&(u=r.stateNode=$E(r.type,r.pendingProps,Re.current),_n=r,Ri=!0,f=_t,Xs(r.type)?(hm=f,_t=si(u.firstChild)):_t=f),$t(i,r,r.pendingProps.children,o),dh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Ke&&((f=u=_t)&&(u=KC(u,r.type,r.pendingProps,Ri),u!==null?(r.stateNode=u,_n=r,_t=si(u.firstChild),Ri=!1,f=!0):f=!1),f||ta(r)),Is(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,om(f,m)?u=null:E!==null&&om(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=ap(i,r,cC,null,null,o),fu._currentValue=f),dh(i,r),$t(i,r,u,o),r.child;case 6:return i===null&&Ke&&((i=o=_t)&&(o=YC(o,r.pendingProps,Ri),o!==null?(r.stateNode=o,_n=r,_t=null,i=!0):i=!1),i||ta(r)),null;case 13:return Gv(i,r,o);case 4:return rt(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=co(r,null,u,o):$t(i,r,u,o),r.child;case 11:return Vv(i,r,r.type,r.pendingProps,o);case 7:return $t(i,r,r.pendingProps,o),r.child;case 8:return $t(i,r,r.pendingProps.children,o),r.child;case 12:return $t(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Ls(r,r.type,u.value),$t(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ia(r),f=rn(f),u=u(f),r.flags|=1,$t(i,r,u,o),r.child;case 14:return Uv(i,r,r.type,r.pendingProps,o);case 15:return Bv(i,r,r.type,r.pendingProps,o);case 19:return Yv(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=ph(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=ts(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return zv(i,r,o);case 24:return ia(r),u=rn(Mt),i===null?(f=Xd(),f===null&&(f=at,m=$d(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},Jd(r),Ls(r,Mt,f)):((i.lanes&o)!==0&&(ep(i,r),ql(r,null,null,o),jl()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Ls(r,Mt,u)):(u=m.cache,Ls(r,Mt,u),u!==f.cache&&Qd(r,[Mt],o,!0))),$t(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function us(i){i.flags|=4}function $v(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!iT(r)){if(r=Gn.current,r!==null&&((Be&4194048)===Be?wi!==null:(Be&62914560)!==Be&&(Be&536870912)===0||r!==wi))throw Fl=Zd,My;i.flags|=8192}}function mh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?pl():536870912,i.lanes|=r,mo|=r)}function Xl(i,r){if(!Ke)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function ft(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function vC(i,r,o){var u=r.pendingProps;switch(qd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(r),null;case 1:return ft(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),rs(Mt),fi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Pl(r)?us(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Cy())),ft(r),null;case 26:return o=r.memoizedState,i===null?(us(r),o!==null?(ft(r),$v(r,o)):(ft(r),r.flags&=-16777217)):o?o!==i.memoizedState?(us(r),ft(r),$v(r,o)):(ft(r),r.flags&=-16777217):(i.memoizedProps!==u&&us(r),ft(r),r.flags&=-16777217),null;case 27:Hi(r),o=Re.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&us(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return ft(r),null}i=ge.current,Pl(r)?wy(r):(i=$E(f,u,o),r.stateNode=i,us(r))}return ft(r),null;case 5:if(Hi(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&us(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return ft(r),null}if(i=ge.current,Pl(r))wy(r);else{switch(f=Ih(Re.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[Nt]=r,i[Rt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(Xt(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&us(r)}}return ft(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&us(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=Re.current,Pl(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=_n,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[Nt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||HE(i.nodeValue,o)),i||ta(r)}else i=Ih(i).createTextNode(u),i[Nt]=r,r.stateNode=i}return ft(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=Pl(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Nt]=r}else xl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;ft(r),f=!1}else f=Cy(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(os(r),r):(os(r),null)}if(os(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),mh(r,r.updateQueue),ft(r),null;case 4:return fi(),i===null&&nm(r.stateNode.containerInfo),ft(r),null;case 10:return rs(r.type),ft(r),null;case 19:if(ae(kt),f=r.memoizedState,f===null)return ft(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)Xl(f,!1);else{if(yt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=ch(i),m!==null){for(r.flags|=128,Xl(f,!1),i=m.updateQueue,r.updateQueue=i,mh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)Ay(o,i),o=o.sibling;return ie(kt,kt.current&1|2),r.child}i=i.sibling}f.tail!==null&&xn()>yh&&(r.flags|=128,u=!0,Xl(f,!1),r.lanes=4194304)}else{if(!u)if(i=ch(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,mh(r,i),Xl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Ke)return ft(r),null}else 2*xn()-f.renderingStartTime>yh&&o!==536870912&&(r.flags|=128,u=!0,Xl(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=xn(),r.sibling=null,i=kt.current,ie(kt,u?i&1|2:i&1),r):(ft(r),null);case 22:case 23:return os(r),sp(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(ft(r),r.subtreeFlags&6&&(r.flags|=8192)):ft(r),o=r.updateQueue,o!==null&&mh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&ae(sa),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),rs(Mt),ft(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function EC(i,r){switch(qd(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return rs(Mt),fi(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Hi(r),null;case 13:if(os(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));xl()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return ae(kt),null;case 4:return fi(),null;case 10:return rs(r.type),null;case 22:case 23:return os(r),sp(),i!==null&&ae(sa),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return rs(Mt),null;case 25:return null;default:return null}}function Wv(i,r){switch(qd(r),r.tag){case 3:rs(Mt),fi();break;case 26:case 27:case 5:Hi(r);break;case 4:fi();break;case 13:os(r);break;case 19:ae(kt);break;case 10:rs(r.type);break;case 22:case 23:os(r),sp(),i!==null&&ae(sa);break;case 24:rs(Mt)}}function Zl(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(A){st(r,r.return,A)}}function js(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,f=r;var C=o,F=A;try{F()}catch($){st(f,C,$)}}}u=u.next}while(u!==m)}}catch($){st(r,r.return,$)}}function Xv(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Uy(r,o)}catch(u){st(i,i.return,u)}}}function Zv(i,r,o){o.props=aa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){st(i,r,u)}}function Jl(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){st(i,r,f)}}function bi(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){st(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){st(i,r,f)}else o.current=null}function Jv(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){st(i,i.return,f)}}function Mp(i,r,o){try{var u=i.stateNode;FC(u,i.type,o,r),u[Rt]=r}catch(f){st(i,i.return,f)}}function eE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Xs(i.type)||i.tag===4}function kp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||eE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Xs(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Pp(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Ch));else if(u!==4&&(u===27&&Xs(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(Pp(i,r,o),i=i.sibling;i!==null;)Pp(i,r,o),i=i.sibling}function gh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&Xs(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(gh(i,r,o),i=i.sibling;i!==null;)gh(i,r,o),i=i.sibling}function tE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);Xt(r,u,o),r[Nt]=i,r[Rt]=o}catch(m){st(i,i.return,m)}}var cs=!1,St=!1,xp=!1,nE=typeof WeakSet=="function"?WeakSet:Set,Ft=null;function TC(i,r){if(i=i.containerInfo,rm=Ph,i=dy(i),kd(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,A=-1,C=-1,F=0,$=0,Z=i,j=null;t:for(;;){for(var q;Z!==o||f!==0&&Z.nodeType!==3||(A=E+f),Z!==m||u!==0&&Z.nodeType!==3||(C=E+u),Z.nodeType===3&&(E+=Z.nodeValue.length),(q=Z.firstChild)!==null;)j=Z,Z=q;for(;;){if(Z===i)break t;if(j===o&&++F===f&&(A=E),j===m&&++$===u&&(C=E),(q=Z.nextSibling)!==null)break;Z=j,j=Z.parentNode}Z=q}o=A===-1||C===-1?null:{start:A,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(am={focusedElem:i,selectionRange:o},Ph=!1,Ft=r;Ft!==null;)if(r=Ft,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,Ft=i;else for(;Ft!==null;){switch(r=Ft,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Se=aa(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(Se,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(_e){st(o,o.return,_e)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)um(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":um(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,Ft=i;break}Ft=r.return}}function iE(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:qs(i,o),u&4&&Zl(5,o);break;case 1:if(qs(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){st(o,o.return,E)}else{var f=aa(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){st(o,o.return,E)}}u&64&&Xv(o),u&512&&Jl(o,o.return);break;case 3:if(qs(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Uy(i,r)}catch(E){st(o,o.return,E)}}break;case 27:r===null&&u&4&&tE(o);case 26:case 5:qs(i,o),r===null&&u&4&&Jv(o),u&512&&Jl(o,o.return);break;case 12:qs(i,o);break;case 13:qs(i,o),u&4&&aE(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=DC.bind(null,o),QC(i,o))));break;case 22:if(u=o.memoizedState!==null||cs,!u){r=r!==null&&r.memoizedState!==null||St,f=cs;var m=St;cs=u,(St=r)&&!m?Gs(i,o,(o.subtreeFlags&8772)!==0):qs(i,o),cs=f,St=m}break;case 30:break;default:qs(i,o)}}function sE(i){var r=i.alternate;r!==null&&(i.alternate=null,sE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Ms(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var ht=null,vn=!1;function hs(i,r,o){for(o=o.child;o!==null;)rE(i,r,o),o=o.sibling}function rE(i,r,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(gt,o)}catch{}switch(o.tag){case 26:St||bi(o,r),hs(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:St||bi(o,r);var u=ht,f=vn;Xs(o.type)&&(ht=o.stateNode,vn=!1),hs(i,r,o),lu(o.stateNode),ht=u,vn=f;break;case 5:St||bi(o,r);case 6:if(u=ht,f=vn,ht=null,hs(i,r,o),ht=u,vn=f,ht!==null)if(vn)try{(ht.nodeType===9?ht.body:ht.nodeName==="HTML"?ht.ownerDocument.body:ht).removeChild(o.stateNode)}catch(m){st(o,r,m)}else try{ht.removeChild(o.stateNode)}catch(m){st(o,r,m)}break;case 18:ht!==null&&(vn?(i=ht,YE(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),gu(i)):YE(ht,o.stateNode));break;case 4:u=ht,f=vn,ht=o.stateNode.containerInfo,vn=!0,hs(i,r,o),ht=u,vn=f;break;case 0:case 11:case 14:case 15:St||js(2,o,r),St||js(4,o,r),hs(i,r,o);break;case 1:St||(bi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Zv(o,r,u)),hs(i,r,o);break;case 21:hs(i,r,o);break;case 22:St=(u=St)||o.memoizedState!==null,hs(i,r,o),St=u;break;default:hs(i,r,o)}}function aE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{gu(i)}catch(o){st(r,r.return,o)}}function SC(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new nE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new nE),r;default:throw Error(s(435,i.tag))}}function Lp(i,r){var o=SC(i);r.forEach(function(u){var f=OC.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function Cn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,A=E;e:for(;A!==null;){switch(A.tag){case 27:if(Xs(A.type)){ht=A.stateNode,vn=!1;break e}break;case 5:ht=A.stateNode,vn=!1;break e;case 3:case 4:ht=A.stateNode.containerInfo,vn=!0;break e}A=A.return}if(ht===null)throw Error(s(160));rE(m,E,f),ht=null,vn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)oE(r,i),r=r.sibling}var ii=null;function oE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Cn(r,i),In(i),u&4&&(js(3,i,i.return),Zl(3,i),js(5,i,i.return));break;case 1:Cn(r,i),In(i),u&512&&(St||o===null||bi(o,o.return)),u&64&&cs&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=ii;if(Cn(r,i),In(i),u&512&&(St||o===null||bi(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[xr]||m[Nt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),Xt(m,u,o),m[Nt]=i,Et(m),u=m;break e;case"link":var E=tT("link","href",f).get(u+(o.href||""));if(E){for(var A=0;A<E.length;A++)if(m=E[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(A,1);break t}}m=f.createElement(u),Xt(m,u,o),f.head.appendChild(m);break;case"meta":if(E=tT("meta","content",f).get(u+(o.content||""))){for(A=0;A<E.length;A++)if(m=E[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(A,1);break t}}m=f.createElement(u),Xt(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Nt]=i,Et(m),u=m}i.stateNode=u}else nT(f,i.type,i.stateNode);else i.stateNode=eT(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?nT(f,i.type,i.stateNode):eT(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&Mp(i,i.memoizedProps,o.memoizedProps)}break;case 27:Cn(r,i),In(i),u&512&&(St||o===null||bi(o,o.return)),o!==null&&u&4&&Mp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Cn(r,i),In(i),u&512&&(St||o===null||bi(o,o.return)),i.flags&32){f=i.stateNode;try{Vn(f,"")}catch(q){st(i,i.return,q)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,Mp(i,f,o!==null?o.memoizedProps:f)),u&1024&&(xp=!0);break;case 6:if(Cn(r,i),In(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(q){st(i,i.return,q)}}break;case 3:if(Oh=null,f=ii,ii=Nh(r.containerInfo),Cn(r,i),ii=f,In(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{gu(r.containerInfo)}catch(q){st(i,i.return,q)}xp&&(xp=!1,lE(i));break;case 4:u=ii,ii=Nh(i.stateNode.containerInfo),Cn(r,i),In(i),ii=u;break;case 12:Cn(r,i),In(i);break;case 13:Cn(r,i),In(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Hp=xn()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Lp(i,u)));break;case 22:f=i.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,F=cs,$=St;if(cs=F||f,St=$||C,Cn(r,i),St=$,cs=F,In(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||C||cs||St||oa(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){C=o=r;try{if(m=C.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=C.stateNode;var Z=C.memoizedProps.style,j=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;A.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(q){st(C,C.return,q)}}}else if(r.tag===6){if(o===null){C=r;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(q){st(C,C.return,q)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Lp(i,o))));break;case 19:Cn(r,i),In(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Lp(i,u)));break;case 30:break;case 21:break;default:Cn(r,i),In(i)}}function In(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(eE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=kp(i);gh(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(Vn(E,""),o.flags&=-33);var A=kp(i);gh(i,A,E);break;case 3:case 4:var C=o.stateNode.containerInfo,F=kp(i);Pp(i,F,C);break;default:throw Error(s(161))}}catch($){st(i,i.return,$)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function lE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;lE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function qs(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)iE(i,r.alternate,r),r=r.sibling}function oa(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:js(4,r,r.return),oa(r);break;case 1:bi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&Zv(r,r.return,o),oa(r);break;case 27:lu(r.stateNode);case 26:case 5:bi(r,r.return),oa(r);break;case 22:r.memoizedState===null&&oa(r);break;case 30:oa(r);break;default:oa(r)}i=i.sibling}}function Gs(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:Gs(f,m,o),Zl(4,m);break;case 1:if(Gs(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(F){st(u,u.return,F)}if(u=m,f=u.updateQueue,f!==null){var A=u.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)Vy(C[f],A)}catch(F){st(u,u.return,F)}}o&&E&64&&Xv(m),Jl(m,m.return);break;case 27:tE(m);case 26:case 5:Gs(f,m,o),o&&u===null&&E&4&&Jv(m),Jl(m,m.return);break;case 12:Gs(f,m,o);break;case 13:Gs(f,m,o),o&&E&4&&aE(f,m);break;case 22:m.memoizedState===null&&Gs(f,m,o),Jl(m,m.return);break;case 30:break;default:Gs(f,m,o)}r=r.sibling}}function Vp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&Ul(o))}function Up(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Ul(i))}function Ci(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)uE(i,r,o,u),r=r.sibling}function uE(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Ci(i,r,o,u),f&2048&&Zl(9,r);break;case 1:Ci(i,r,o,u);break;case 3:Ci(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Ul(i)));break;case 12:if(f&2048){Ci(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,A=m.onPostCommit;typeof A=="function"&&A(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){st(r,r.return,C)}}else Ci(i,r,o,u);break;case 13:Ci(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Ci(i,r,o,u):eu(i,r):m._visibility&2?Ci(i,r,o,u):(m._visibility|=2,ho(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&Vp(E,r);break;case 24:Ci(i,r,o,u),f&2048&&Up(r.alternate,r);break;default:Ci(i,r,o,u)}}function ho(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,A=o,C=u,F=E.flags;switch(E.tag){case 0:case 11:case 15:ho(m,E,A,C,f),Zl(8,E);break;case 23:break;case 22:var $=E.stateNode;E.memoizedState!==null?$._visibility&2?ho(m,E,A,C,f):eu(m,E):($._visibility|=2,ho(m,E,A,C,f)),f&&F&2048&&Vp(E.alternate,E);break;case 24:ho(m,E,A,C,f),f&&F&2048&&Up(E.alternate,E);break;default:ho(m,E,A,C,f)}r=r.sibling}}function eu(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:eu(o,u),f&2048&&Vp(u.alternate,u);break;case 24:eu(o,u),f&2048&&Up(u.alternate,u);break;default:eu(o,u)}r=r.sibling}}var tu=8192;function fo(i){if(i.subtreeFlags&tu)for(i=i.child;i!==null;)cE(i),i=i.sibling}function cE(i){switch(i.tag){case 26:fo(i),i.flags&tu&&i.memoizedState!==null&&oI(ii,i.memoizedState,i.memoizedProps);break;case 5:fo(i);break;case 3:case 4:var r=ii;ii=Nh(i.stateNode.containerInfo),fo(i),ii=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=tu,tu=16777216,fo(i),tu=r):fo(i));break;default:fo(i)}}function hE(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function nu(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Ft=u,dE(u,i)}hE(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)fE(i),i=i.sibling}function fE(i){switch(i.tag){case 0:case 11:case 15:nu(i),i.flags&2048&&js(9,i,i.return);break;case 3:nu(i);break;case 12:nu(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,_h(i)):nu(i);break;default:nu(i)}}function _h(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Ft=u,dE(u,i)}hE(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:js(8,r,r.return),_h(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,_h(r));break;default:_h(r)}i=i.sibling}}function dE(i,r){for(;Ft!==null;){var o=Ft;switch(o.tag){case 0:case 11:case 15:js(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Ul(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Ft=u;else e:for(o=i;Ft!==null;){u=Ft;var f=u.sibling,m=u.return;if(sE(u),u===o){Ft=null;break e}if(f!==null){f.return=m,Ft=f;break e}Ft=m}}}var AC={getCacheForType:function(i){var r=rn(Mt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},RC=typeof WeakMap=="function"?WeakMap:Map,Xe=0,at=null,Me=null,Be=0,Ze=0,Nn=null,Ks=!1,po=!1,Bp=!1,fs=0,yt=0,Ys=0,la=0,zp=0,Kn=0,mo=0,iu=null,En=null,Fp=!1,Hp=0,yh=1/0,vh=null,Qs=null,Wt=0,$s=null,go=null,_o=0,jp=0,qp=null,pE=null,su=0,Gp=null;function Dn(){if((Xe&2)!==0&&Be!==0)return Be&-Be;if(Q.T!==null){var i=io;return i!==0?i:Zp()}return Ds()}function mE(){Kn===0&&(Kn=(Be&536870912)===0||Ke?dl():536870912);var i=Gn.current;return i!==null&&(i.flags|=32),Kn}function On(i,r,o){(i===at&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)&&(yo(i,0),Ws(i,Be,Kn,!1)),qi(i,o),((Xe&2)===0||i!==at)&&(i===at&&((Xe&2)===0&&(la|=o),yt===4&&Ws(i,Be,Kn,!1)),Ii(i))}function gE(i,r,o){if((Xe&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Pr(i,r),f=u?CC(i,r):Qp(i,r,!0),m=u;do{if(f===0){po&&!u&&Ws(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!wC(o)){f=Qp(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var A=i;f=iu;var C=A.current.memoizedState.isDehydrated;if(C&&(yo(A,E).flags|=256),E=Qp(A,E,!1),E!==2){if(Bp&&!C){A.errorRecoveryDisabledLanes|=m,la|=m,f=4;break e}m=En,En=f,m!==null&&(En===null?En=m:En.push.apply(En,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){yo(i,0),Ws(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Ws(u,r,Kn,!Ks);break e;case 2:En=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=Hp+300-xn(),10<f)){if(Ws(u,r,Kn,!Ks),Pa(u,0,!0)!==0)break e;u.timeoutHandle=GE(_E.bind(null,u,o,En,vh,Fp,r,Kn,la,mo,Ks,m,2,-0,0),f);break e}_E(u,o,En,vh,Fp,r,Kn,la,mo,Ks,m,0,-0,0)}}break}while(!0);Ii(i)}function _E(i,r,o,u,f,m,E,A,C,F,$,Z,j,q){if(i.timeoutHandle=-1,Z=r.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(hu={stylesheets:null,count:0,unsuspend:aI},cE(r),Z=lI(),Z!==null)){i.cancelPendingCommit=Z(RE.bind(null,i,r,m,o,u,f,E,A,C,$,1,j,q)),Ws(i,m,E,!F);return}RE(i,r,m,o,u,f,E,A,C)}function wC(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!wn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ws(i,r,o,u){r&=~zp,r&=~la,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-sn(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&di(i,o,r)}function Eh(){return(Xe&6)===0?(ru(0),!1):!0}function Kp(){if(Me!==null){if(Ze===0)var i=Me.return;else i=Me,ss=na=null,up(i),uo=null,$l=0,i=Me;for(;i!==null;)Wv(i.alternate,i),i=i.return;Me=null}}function yo(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,jC(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),Kp(),at=i,Me=o=ts(i.current,null),Be=r,Ze=0,Nn=null,Ks=!1,po=Pr(i,r),Bp=!1,mo=Kn=zp=la=Ys=yt=0,En=iu=null,Fp=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-sn(u),m=1<<f;r|=i[f],u&=~m}return fs=r,Hc(),o}function yE(i,r){Ie=null,Q.H=oh,r===zl||r===Xc?(r=xy(),Ze=3):r===My?(r=xy(),Ze=4):Ze=r===Lv?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Nn=r,Me===null&&(yt=1,fh(i,Fn(r,i.current)))}function vE(){var i=Q.H;return Q.H=oh,i===null?oh:i}function EE(){var i=Q.A;return Q.A=AC,i}function Yp(){yt=4,Ks||(Be&4194048)!==Be&&Gn.current!==null||(po=!0),(Ys&134217727)===0&&(la&134217727)===0||at===null||Ws(at,Be,Kn,!1)}function Qp(i,r,o){var u=Xe;Xe|=2;var f=vE(),m=EE();(at!==i||Be!==r)&&(vh=null,yo(i,r)),r=!1;var E=yt;e:do try{if(Ze!==0&&Me!==null){var A=Me,C=Nn;switch(Ze){case 8:Kp(),E=6;break e;case 3:case 2:case 9:case 6:Gn.current===null&&(r=!0);var F=Ze;if(Ze=0,Nn=null,vo(i,A,C,F),o&&po){E=0;break e}break;default:F=Ze,Ze=0,Nn=null,vo(i,A,C,F)}}bC(),E=yt;break}catch($){yE(i,$)}while(!0);return r&&i.shellSuspendCounter++,ss=na=null,Xe=u,Q.H=f,Q.A=m,Me===null&&(at=null,Be=0,Hc()),E}function bC(){for(;Me!==null;)TE(Me)}function CC(i,r){var o=Xe;Xe|=2;var u=vE(),f=EE();at!==i||Be!==r?(vh=null,yh=xn()+500,yo(i,r)):po=Pr(i,r);e:do try{if(Ze!==0&&Me!==null){r=Me;var m=Nn;t:switch(Ze){case 1:Ze=0,Nn=null,vo(i,r,m,1);break;case 2:case 9:if(ky(m)){Ze=0,Nn=null,SE(r);break}r=function(){Ze!==2&&Ze!==9||at!==i||(Ze=7),Ii(i)},m.then(r,r);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:ky(m)?(Ze=0,Nn=null,SE(r)):(Ze=0,Nn=null,vo(i,r,m,7));break;case 5:var E=null;switch(Me.tag){case 26:E=Me.memoizedState;case 5:case 27:var A=Me;if(!E||iT(E)){Ze=0,Nn=null;var C=A.sibling;if(C!==null)Me=C;else{var F=A.return;F!==null?(Me=F,Th(F)):Me=null}break t}}Ze=0,Nn=null,vo(i,r,m,5);break;case 6:Ze=0,Nn=null,vo(i,r,m,6);break;case 8:Kp(),yt=6;break e;default:throw Error(s(462))}}IC();break}catch($){yE(i,$)}while(!0);return ss=na=null,Q.H=u,Q.A=f,Xe=o,Me!==null?0:(at=null,Be=0,Hc(),yt)}function IC(){for(;Me!==null&&!ul();)TE(Me)}function TE(i){var r=Qv(i.alternate,i,fs);i.memoizedProps=i.pendingProps,r===null?Th(i):Me=r}function SE(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=Hv(o,r,r.pendingProps,r.type,void 0,Be);break;case 11:r=Hv(o,r,r.pendingProps,r.type.render,r.ref,Be);break;case 5:up(r);default:Wv(o,r),r=Me=Ay(r,fs),r=Qv(o,r,fs)}i.memoizedProps=i.pendingProps,r===null?Th(i):Me=r}function vo(i,r,o,u){ss=na=null,up(r),uo=null,$l=0;var f=r.return;try{if(_C(i,f,r,o,Be)){yt=1,fh(i,Fn(o,i.current)),Me=null;return}}catch(m){if(f!==null)throw Me=f,m;yt=1,fh(i,Fn(o,i.current)),Me=null;return}r.flags&32768?(Ke||u===1?i=!0:po||(Be&536870912)!==0?i=!1:(Ks=i=!0,(u===2||u===9||u===3||u===6)&&(u=Gn.current,u!==null&&u.tag===13&&(u.flags|=16384))),AE(r,i)):Th(r)}function Th(i){var r=i;do{if((r.flags&32768)!==0){AE(r,Ks);return}i=r.return;var o=vC(r.alternate,r,fs);if(o!==null){Me=o;return}if(r=r.sibling,r!==null){Me=r;return}Me=r=i}while(r!==null);yt===0&&(yt=5)}function AE(i,r){do{var o=EC(i.alternate,i);if(o!==null){o.flags&=32767,Me=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){Me=i;return}Me=i=o}while(i!==null);yt=6,Me=null}function RE(i,r,o,u,f,m,E,A,C){i.cancelPendingCommit=null;do Sh();while(Wt!==0);if((Xe&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=Ud,ml(i,o,m,E,A,C),i===at&&(Me=at=null,Be=0),go=r,$s=i,_o=o,jp=m,qp=f,pE=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,MC(Dr,function(){return NE(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=Q.T,Q.T=null,f=re.p,re.p=2,E=Xe,Xe|=4;try{TC(i,r,o)}finally{Xe=E,re.p=f,Q.T=u}}Wt=1,wE(),bE(),CE()}}function wE(){if(Wt===1){Wt=0;var i=$s,r=go,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=Q.T,Q.T=null;var u=re.p;re.p=2;var f=Xe;Xe|=4;try{oE(r,i);var m=am,E=dy(i.containerInfo),A=m.focusedElem,C=m.selectionRange;if(E!==A&&A&&A.ownerDocument&&fy(A.ownerDocument.documentElement,A)){if(C!==null&&kd(A)){var F=C.start,$=C.end;if($===void 0&&($=F),"selectionStart"in A)A.selectionStart=F,A.selectionEnd=Math.min($,A.value.length);else{var Z=A.ownerDocument||document,j=Z&&Z.defaultView||window;if(j.getSelection){var q=j.getSelection(),Se=A.textContent.length,_e=Math.min(C.start,Se),nt=C.end===void 0?_e:Math.min(C.end,Se);!q.extend&&_e>nt&&(E=nt,nt=_e,_e=E);var L=hy(A,_e),P=hy(A,nt);if(L&&P&&(q.rangeCount!==1||q.anchorNode!==L.node||q.anchorOffset!==L.offset||q.focusNode!==P.node||q.focusOffset!==P.offset)){var z=Z.createRange();z.setStart(L.node,L.offset),q.removeAllRanges(),_e>nt?(q.addRange(z),q.extend(P.node,P.offset)):(z.setEnd(P.node,P.offset),q.addRange(z))}}}}for(Z=[],q=A;q=q.parentNode;)q.nodeType===1&&Z.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Z.length;A++){var W=Z[A];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}Ph=!!rm,am=rm=null}finally{Xe=f,re.p=u,Q.T=o}}i.current=r,Wt=2}}function bE(){if(Wt===2){Wt=0;var i=$s,r=go,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=Q.T,Q.T=null;var u=re.p;re.p=2;var f=Xe;Xe|=4;try{iE(i,r.alternate,r)}finally{Xe=f,re.p=u,Q.T=o}}Wt=3}}function CE(){if(Wt===4||Wt===3){Wt=0,_c();var i=$s,r=go,o=_o,u=pE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Wt=5:(Wt=0,go=$s=null,IE(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(Qs=null),xa(o),r=r.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(gt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=Q.T,f=re.p,re.p=2,Q.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var A=u[E];m(A.value,{componentStack:A.stack})}}finally{Q.T=r,re.p=f}}(_o&3)!==0&&Sh(),Ii(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===Gp?su++:(su=0,Gp=i):su=0,ru(0)}}function IE(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,Ul(r)))}function Sh(i){return wE(),bE(),CE(),NE()}function NE(){if(Wt!==5)return!1;var i=$s,r=jp;jp=0;var o=xa(_o),u=Q.T,f=re.p;try{re.p=32>o?32:o,Q.T=null,o=qp,qp=null;var m=$s,E=_o;if(Wt=0,go=$s=null,_o=0,(Xe&6)!==0)throw Error(s(331));var A=Xe;if(Xe|=4,fE(m.current),uE(m,m.current,E,o),Xe=A,ru(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(gt,m)}catch{}return!0}finally{re.p=f,Q.T=u,IE(i,r)}}function DE(i,r,o){r=Fn(o,r),r=Ap(i.stateNode,r,2),i=Bs(i,r,2),i!==null&&(qi(i,2),Ii(i))}function st(i,r,o){if(i.tag===3)DE(i,i,o);else for(;r!==null;){if(r.tag===3){DE(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Qs===null||!Qs.has(u))){i=Fn(o,i),o=Pv(2),u=Bs(r,o,2),u!==null&&(xv(o,u,r,i),qi(u,2),Ii(u));break}}r=r.return}}function $p(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new RC;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(Bp=!0,f.add(o),i=NC.bind(null,i,r,o),r.then(i,i))}function NC(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,at===i&&(Be&o)===o&&(yt===4||yt===3&&(Be&62914560)===Be&&300>xn()-Hp?(Xe&2)===0&&yo(i,0):zp|=o,mo===Be&&(mo=0)),Ii(i)}function OE(i,r){r===0&&(r=pl()),i=Ja(i,r),i!==null&&(qi(i,r),Ii(i))}function DC(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),OE(i,o)}function OC(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),OE(i,o)}function MC(i,r){return Ir(i,r)}var Ah=null,Eo=null,Wp=!1,Rh=!1,Xp=!1,ua=0;function Ii(i){i!==Eo&&i.next===null&&(Eo===null?Ah=Eo=i:Eo=Eo.next=i),Rh=!0,Wp||(Wp=!0,PC())}function ru(i,r){if(!Xp&&Rh){Xp=!0;do for(var o=!1,u=Ah;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,A=u.pingedLanes;m=(1<<31-sn(42|i)+1)-1,m&=f&~(E&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,xE(u,m))}else m=Be,m=Pa(u,u===at?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Pr(u,m)||(o=!0,xE(u,m));u=u.next}while(o);Xp=!1}}function kC(){ME()}function ME(){Rh=Wp=!1;var i=0;ua!==0&&(HC()&&(i=ua),ua=0);for(var r=xn(),o=null,u=Ah;u!==null;){var f=u.next,m=kE(u,r);m===0?(u.next=null,o===null?Ah=f:o.next=f,f===null&&(Eo=o)):(o=u,(i!==0||(m&3)!==0)&&(Rh=!0)),u=f}ru(i)}function kE(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-sn(m),A=1<<E,C=f[E];C===-1?((A&o)===0||(A&u)!==0)&&(f[E]=fl(A,r)):C<=r&&(i.expiredLanes|=A),m&=~A}if(r=at,o=Be,o=Pa(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&Nr(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Pr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&Nr(u),xa(o)){case 2:case 8:o=Ma;break;case 32:o=Dr;break;case 268435456:o=ka;break;default:o=Dr}return u=PE.bind(null,i),o=Ir(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&Nr(u),i.callbackPriority=2,i.callbackNode=null,2}function PE(i,r){if(Wt!==0&&Wt!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Sh()&&i.callbackNode!==o)return null;var u=Be;return u=Pa(i,i===at?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(gE(i,u,r),kE(i,xn()),i.callbackNode!=null&&i.callbackNode===o?PE.bind(null,i):null)}function xE(i,r){if(Sh())return null;gE(i,r,!0)}function PC(){qC(function(){(Xe&6)!==0?Ir(cl,kC):ME()})}function Zp(){return ua===0&&(ua=dl()),ua}function LE(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Fa(""+i)}function VE(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function xC(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=LE((f[Rt]||null).action),E=u.submitter;E&&(r=(r=E[Rt]||null)?LE(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var A=new Ha("action","action",null,u,f);i.push({event:A,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(ua!==0){var C=E?VE(f,E):new FormData(f);yp(o,{pending:!0,data:C,method:f.method,action:m},null,C)}}else typeof m=="function"&&(A.preventDefault(),C=E?VE(f,E):new FormData(f),yp(o,{pending:!0,data:C,method:f.method,action:m},m,C))},currentTarget:f}]})}}for(var Jp=0;Jp<Vd.length;Jp++){var em=Vd[Jp],LC=em.toLowerCase(),VC=em[0].toUpperCase()+em.slice(1);ni(LC,"on"+VC)}ni(gy,"onAnimationEnd"),ni(_y,"onAnimationIteration"),ni(yy,"onAnimationStart"),ni("dblclick","onDoubleClick"),ni("focusin","onFocus"),ni("focusout","onBlur"),ni(eC,"onTransitionRun"),ni(tC,"onTransitionStart"),ni(nC,"onTransitionCancel"),ni(vy,"onTransitionEnd"),Ki("onMouseEnter",["mouseout","mouseover"]),Ki("onMouseLeave",["mouseout","mouseover"]),Ki("onPointerEnter",["pointerout","pointerover"]),Ki("onPointerLeave",["pointerout","pointerover"]),ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ei("onBeforeInput",["compositionend","keypress","textInput","paste"]),ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var au="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(au));function UE(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var A=u[E],C=A.instance,F=A.currentTarget;if(A=A.listener,C!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=F;try{m(f)}catch($){hh($)}f.currentTarget=null,m=C}else for(E=0;E<u.length;E++){if(A=u[E],C=A.instance,F=A.currentTarget,A=A.listener,C!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=F;try{m(f)}catch($){hh($)}f.currentTarget=null,m=C}}}}function ke(i,r){var o=r[_l];o===void 0&&(o=r[_l]=new Set);var u=i+"__bubble";o.has(u)||(BE(r,i,2,!1),o.add(u))}function tm(i,r,o){var u=0;r&&(u|=4),BE(o,i,u,r)}var wh="_reactListening"+Math.random().toString(36).slice(2);function nm(i){if(!i[wh]){i[wh]=!0,yl.forEach(function(o){o!=="selectionchange"&&(UC.has(o)||tm(o,!1,i),tm(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[wh]||(r[wh]=!0,tm("selectionchange",!1,r))}}function BE(i,r,o,u){switch(uT(r)){case 2:var f=hI;break;case 8:f=fI;break;default:f=gm}o=f.bind(null,r,o,i),f=void 0,!Bn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function im(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var A=u.stateNode.containerInfo;if(A===f)break;if(E===4)for(E=u.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;A!==null;){if(E=Gi(A),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){u=m=E;continue e}A=A.parentNode}}u=u.return}Cc(function(){var F=m,$=Un(o),Z=[];e:{var j=Ey.get(i);if(j!==void 0){var q=Ha,Se=i;switch(i){case"keypress":if(vi(o)===0)break e;case"keydown":case"keyup":q=Qa;break;case"focusin":Se="focus",q=Ga;break;case"focusout":Se="blur",q=Ga;break;case"beforeblur":case"afterblur":q=Ga;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=zn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Nd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=xc;break;case gy:case _y:case yy:q=Ka;break;case vy:q=Vc;break;case"scroll":case"scrollend":q=Ic;break;case"wheel":q=$a;break;case"copy":case"cut":case"paste":q=Ya;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Dl;break;case"toggle":case"beforetoggle":q=Bc}var _e=(r&4)!==0,nt=!_e&&(i==="scroll"||i==="scrollend"),L=_e?j!==null?j+"Capture":null:j;_e=[];for(var P=F,z;P!==null;){var W=P;if(z=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||z===null||L===null||(W=Hr(P,L),W!=null&&_e.push(ou(P,W,z))),nt)break;P=P.return}0<_e.length&&(j=new q(j,Se,null,o,$),Z.push({event:j,listeners:_e}))}}if((r&7)===0){e:{if(j=i==="mouseover"||i==="pointerover",q=i==="mouseout"||i==="pointerout",j&&o!==$i&&(Se=o.relatedTarget||o.fromElement)&&(Gi(Se)||Se[Ln]))break e;if((q||j)&&(j=$.window===$?$:(j=$.ownerDocument)?j.defaultView||j.parentWindow:window,q?(Se=o.relatedTarget||o.toElement,q=F,Se=Se?Gi(Se):null,Se!==null&&(nt=l(Se),_e=Se.tag,Se!==nt||_e!==5&&_e!==27&&_e!==6)&&(Se=null)):(q=null,Se=F),q!==Se)){if(_e=zn,W="onMouseLeave",L="onMouseEnter",P="mouse",(i==="pointerout"||i==="pointerover")&&(_e=Dl,W="onPointerLeave",L="onPointerEnter",P="pointer"),nt=q==null?j:mi(q),z=Se==null?j:mi(Se),j=new _e(W,P+"leave",q,o,$),j.target=nt,j.relatedTarget=z,W=null,Gi($)===F&&(_e=new _e(L,P+"enter",Se,o,$),_e.target=z,_e.relatedTarget=nt,W=_e),nt=W,q&&Se)t:{for(_e=q,L=Se,P=0,z=_e;z;z=To(z))P++;for(z=0,W=L;W;W=To(W))z++;for(;0<P-z;)_e=To(_e),P--;for(;0<z-P;)L=To(L),z--;for(;P--;){if(_e===L||L!==null&&_e===L.alternate)break t;_e=To(_e),L=To(L)}_e=null}else _e=null;q!==null&&zE(Z,j,q,_e,!1),Se!==null&&nt!==null&&zE(Z,nt,Se,_e,!0)}}e:{if(j=F?mi(F):window,q=j.nodeName&&j.nodeName.toLowerCase(),q==="select"||q==="input"&&j.type==="file")var he=ry;else if(Ot(j))if(ay)he=Xb;else{he=$b;var Oe=Qb}else q=j.nodeName,!q||q.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?F&&Al(F.elementType)&&(he=ry):he=Wb;if(he&&(he=he(i,F))){es(Z,he,o,$);break e}Oe&&Oe(i,j,F),i==="focusout"&&F&&j.type==="number"&&F.memoizedProps.value!=null&&Ps(j,"number",j.value)}switch(Oe=F?mi(F):window,i){case"focusin":(Ot(Oe)||Oe.contentEditable==="true")&&(Wa=Oe,Pd=F,kl=null);break;case"focusout":kl=Pd=Wa=null;break;case"mousedown":xd=!0;break;case"contextmenu":case"mouseup":case"dragend":xd=!1,py(Z,o,$);break;case"selectionchange":if(Jb)break;case"keydown":case"keyup":py(Z,o,$)}var pe;if(Si)e:{switch(i){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Ve?G(i,o)&&(Ee="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Ee="onCompositionStart");Ee&&(v&&o.locale!=="ko"&&(Ve||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Ve&&(pe=wl()):(yi=$,xs="value"in yi?yi.value:yi.textContent,Ve=!0)),Oe=bh(F,Ee),0<Oe.length&&(Ee=new Il(Ee,i,null,o,$),Z.push({event:Ee,listeners:Oe}),pe?Ee.data=pe:(pe=se(o),pe!==null&&(Ee.data=pe)))),(pe=_?Dt(i,o):Ue(i,o))&&(Ee=bh(F,"onBeforeInput"),0<Ee.length&&(Oe=new Il("onBeforeInput","beforeinput",null,o,$),Z.push({event:Oe,listeners:Ee}),Oe.data=pe)),xC(Z,i,F,o,$)}UE(Z,r)})}function ou(i,r,o){return{instance:i,listener:r,currentTarget:o}}function bh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Hr(i,o),f!=null&&u.unshift(ou(i,f,m)),f=Hr(i,r),f!=null&&u.push(ou(i,f,m))),i.tag===3)return u;i=i.return}return[]}function To(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function zE(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var A=o,C=A.alternate,F=A.stateNode;if(A=A.tag,C!==null&&C===u)break;A!==5&&A!==26&&A!==27||F===null||(C=F,f?(F=Hr(o,m),F!=null&&E.unshift(ou(o,F,C))):f||(F=Hr(o,m),F!=null&&E.push(ou(o,F,C)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var BC=/\r\n?/g,zC=/\u0000|\uFFFD/g;function FE(i){return(typeof i=="string"?i:""+i).replace(BC,`
`).replace(zC,"")}function HE(i,r){return r=FE(r),FE(i)===r}function Ch(){}function tt(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Vn(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Vn(i,""+u);break;case"className":gi(i,"class",u);break;case"tabIndex":gi(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":gi(i,o,u);break;case"style":Sl(i,u,m);break;case"data":if(r!=="object"){gi(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Fa(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&tt(i,r,"name",f.name,f,null),tt(i,r,"formEncType",f.formEncType,f,null),tt(i,r,"formMethod",f.formMethod,f,null),tt(i,r,"formTarget",f.formTarget,f,null)):(tt(i,r,"encType",f.encType,f,null),tt(i,r,"method",f.method,f,null),tt(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Fa(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Ch);break;case"onScroll":u!=null&&ke("scroll",i);break;case"onScrollEnd":u!=null&&ke("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=Fa(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":ke("beforetoggle",i),ke("toggle",i),ks(i,"popover",u);break;case"xlinkActuate":Yt(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Yt(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Yt(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Yt(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Yt(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Yt(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Yt(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Yt(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Yt(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":ks(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Cd.get(o)||o,ks(i,o,u))}}function sm(i,r,o,u,f,m){switch(o){case"style":Sl(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?Vn(i,u):(typeof u=="number"||typeof u=="bigint")&&Vn(i,""+u);break;case"onScroll":u!=null&&ke("scroll",i);break;case"onScrollEnd":u!=null&&ke("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Ch);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!La.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Rt]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):ks(i,o,u)}}}function Xt(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",i),ke("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:tt(i,r,m,E,o,null)}}f&&tt(i,r,"srcSet",o.srcSet,o,null),u&&tt(i,r,"src",o.src,o,null);return;case"input":ke("invalid",i);var A=m=E=f=null,C=null,F=null;for(u in o)if(o.hasOwnProperty(u)){var $=o[u];if($!=null)switch(u){case"name":f=$;break;case"type":E=$;break;case"checked":C=$;break;case"defaultChecked":F=$;break;case"value":m=$;break;case"defaultValue":A=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,r));break;default:tt(i,r,u,$,o,null)}}Br(i,m,A,C,F,E,f,!1),za(i);return;case"select":ke("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":E=A;break;case"multiple":u=A;default:tt(i,r,f,A,o,null)}r=m,o=E,i.multiple=!!u,r!=null?Qi(i,!!u,r,!1):o!=null&&Qi(i,!!u,o,!0);return;case"textarea":ke("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(A=o[E],A!=null))switch(E){case"value":u=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:tt(i,r,E,A,o,null)}zr(i,u,f,m),za(i);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:tt(i,r,C,u,o,null)}return;case"dialog":ke("beforetoggle",i),ke("toggle",i),ke("cancel",i),ke("close",i);break;case"iframe":case"object":ke("load",i);break;case"video":case"audio":for(u=0;u<au.length;u++)ke(au[u],i);break;case"image":ke("error",i),ke("load",i);break;case"details":ke("toggle",i);break;case"embed":case"source":case"link":ke("error",i),ke("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in o)if(o.hasOwnProperty(F)&&(u=o[F],u!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:tt(i,r,F,u,o,null)}return;default:if(Al(r)){for($ in o)o.hasOwnProperty($)&&(u=o[$],u!==void 0&&sm(i,r,$,u,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(u=o[A],u!=null&&tt(i,r,A,u,o,null))}function FC(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,A=null,C=null,F=null,$=null;for(q in o){var Z=o[q];if(o.hasOwnProperty(q)&&Z!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":C=Z;default:u.hasOwnProperty(q)||tt(i,r,q,null,u,Z)}}for(var j in u){var q=u[j];if(Z=o[j],u.hasOwnProperty(j)&&(q!=null||Z!=null))switch(j){case"type":m=q;break;case"name":f=q;break;case"checked":F=q;break;case"defaultChecked":$=q;break;case"value":E=q;break;case"defaultValue":A=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:q!==Z&&tt(i,r,j,q,u,Z)}}Rn(i,E,A,C,F,$,m,f);return;case"select":q=E=A=j=null;for(m in o)if(C=o[m],o.hasOwnProperty(m)&&C!=null)switch(m){case"value":break;case"multiple":q=C;default:u.hasOwnProperty(m)||tt(i,r,m,null,u,C)}for(f in u)if(m=u[f],C=o[f],u.hasOwnProperty(f)&&(m!=null||C!=null))switch(f){case"value":j=m;break;case"defaultValue":A=m;break;case"multiple":E=m;default:m!==C&&tt(i,r,f,m,u,C)}r=A,o=E,u=q,j!=null?Qi(i,!!o,j,!1):!!u!=!!o&&(r!=null?Qi(i,!!o,r,!0):Qi(i,!!o,o?[]:"",!1));return;case"textarea":q=j=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!u.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:tt(i,r,A,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":j=f;break;case"defaultValue":q=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&tt(i,r,E,f,u,m)}Je(i,j,q);return;case"option":for(var Se in o)if(j=o[Se],o.hasOwnProperty(Se)&&j!=null&&!u.hasOwnProperty(Se))switch(Se){case"selected":i.selected=!1;break;default:tt(i,r,Se,null,u,j)}for(C in u)if(j=u[C],q=o[C],u.hasOwnProperty(C)&&j!==q&&(j!=null||q!=null))switch(C){case"selected":i.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:tt(i,r,C,j,u,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in o)j=o[_e],o.hasOwnProperty(_e)&&j!=null&&!u.hasOwnProperty(_e)&&tt(i,r,_e,null,u,j);for(F in u)if(j=u[F],q=o[F],u.hasOwnProperty(F)&&j!==q&&(j!=null||q!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,r));break;default:tt(i,r,F,j,u,q)}return;default:if(Al(r)){for(var nt in o)j=o[nt],o.hasOwnProperty(nt)&&j!==void 0&&!u.hasOwnProperty(nt)&&sm(i,r,nt,void 0,u,j);for($ in u)j=u[$],q=o[$],!u.hasOwnProperty($)||j===q||j===void 0&&q===void 0||sm(i,r,$,j,u,q);return}}for(var L in o)j=o[L],o.hasOwnProperty(L)&&j!=null&&!u.hasOwnProperty(L)&&tt(i,r,L,null,u,j);for(Z in u)j=u[Z],q=o[Z],!u.hasOwnProperty(Z)||j===q||j==null&&q==null||tt(i,r,Z,j,u,q)}var rm=null,am=null;function Ih(i){return i.nodeType===9?i:i.ownerDocument}function jE(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qE(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function om(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var lm=null;function HC(){var i=window.event;return i&&i.type==="popstate"?i===lm?!1:(lm=i,!0):(lm=null,!1)}var GE=typeof setTimeout=="function"?setTimeout:void 0,jC=typeof clearTimeout=="function"?clearTimeout:void 0,KE=typeof Promise=="function"?Promise:void 0,qC=typeof queueMicrotask=="function"?queueMicrotask:typeof KE<"u"?function(i){return KE.resolve(null).then(i).catch(GC)}:GE;function GC(i){setTimeout(function(){throw i})}function Xs(i){return i==="head"}function YE(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&lu(E.documentElement),o&2&&lu(E.body),o&4)for(o=E.head,lu(o),E=o.firstChild;E;){var A=E.nextSibling,C=E.nodeName;E[xr]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=A}}if(f===0){i.removeChild(m),gu(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);gu(r)}function um(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":um(o),Ms(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function KC(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[xr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=si(i.nextSibling),i===null)break}return null}function YC(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=si(i.nextSibling),i===null))return null;return i}function cm(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function QC(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function si(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var hm=null;function QE(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function $E(i,r,o){switch(r=Ih(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function lu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Ms(i)}var Yn=new Map,WE=new Set;function Nh(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var ds=re.d;re.d={f:$C,r:WC,D:XC,C:ZC,L:JC,m:eI,X:nI,S:tI,M:iI};function $C(){var i=ds.f(),r=Eh();return i||r}function WC(i){var r=pi(i);r!==null&&r.tag===5&&r.type==="form"?gv(r):ds.r(i)}var So=typeof document>"u"?null:document;function XE(i,r,o){var u=So;if(u&&typeof r=="string"&&r){var f=wt(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),WE.has(f)||(WE.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),Xt(r,"link",i),Et(r),u.head.appendChild(r)))}}function XC(i){ds.D(i),XE("dns-prefetch",i,null)}function ZC(i,r){ds.C(i,r),XE("preconnect",i,r)}function JC(i,r,o){ds.L(i,r,o);var u=So;if(u&&i&&r){var f='link[rel="preload"][as="'+wt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+wt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+wt(o.imageSizes)+'"]')):f+='[href="'+wt(i)+'"]';var m=f;switch(r){case"style":m=Ao(i);break;case"script":m=Ro(i)}Yn.has(m)||(i=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),Yn.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(uu(m))||r==="script"&&u.querySelector(cu(m))||(r=u.createElement("link"),Xt(r,"link",i),Et(r),u.head.appendChild(r)))}}function eI(i,r){ds.m(i,r);var o=So;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+wt(u)+'"][href="'+wt(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ro(i)}if(!Yn.has(m)&&(i=y({rel:"modulepreload",href:i},r),Yn.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(cu(m)))return}u=o.createElement("link"),Xt(u,"link",i),Et(u),o.head.appendChild(u)}}}function tI(i,r,o){ds.S(i,r,o);var u=So;if(u&&i){var f=pn(u).hoistableStyles,m=Ao(i);r=r||"default";var E=f.get(m);if(!E){var A={loading:0,preload:null};if(E=u.querySelector(uu(m)))A.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":r},o),(o=Yn.get(m))&&fm(i,o);var C=E=u.createElement("link");Et(C),Xt(C,"link",i),C._p=new Promise(function(F,$){C.onload=F,C.onerror=$}),C.addEventListener("load",function(){A.loading|=1}),C.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Dh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:A},f.set(m,E)}}}function nI(i,r){ds.X(i,r);var o=So;if(o&&i){var u=pn(o).hoistableScripts,f=Ro(i),m=u.get(f);m||(m=o.querySelector(cu(f)),m||(i=y({src:i,async:!0},r),(r=Yn.get(f))&&dm(i,r),m=o.createElement("script"),Et(m),Xt(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function iI(i,r){ds.M(i,r);var o=So;if(o&&i){var u=pn(o).hoistableScripts,f=Ro(i),m=u.get(f);m||(m=o.querySelector(cu(f)),m||(i=y({src:i,async:!0,type:"module"},r),(r=Yn.get(f))&&dm(i,r),m=o.createElement("script"),Et(m),Xt(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function ZE(i,r,o,u){var f=(f=Re.current)?Nh(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Ao(o.href),o=pn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Ao(o.href);var m=pn(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(uu(i)))&&!m._p&&(E.instance=m,E.state.loading=5),Yn.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Yn.set(i,o),m||sI(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Ro(o),o=pn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Ao(i){return'href="'+wt(i)+'"'}function uu(i){return'link[rel="stylesheet"]['+i+"]"}function JE(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function sI(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),Xt(r,"link",o),Et(r),i.head.appendChild(r))}function Ro(i){return'[src="'+wt(i)+'"]'}function cu(i){return"script[async]"+i}function eT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+wt(o.href)+'"]');if(u)return r.instance=u,Et(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),Et(u),Xt(u,"style",f),Dh(u,o.precedence,i),r.instance=u;case"stylesheet":f=Ao(o.href);var m=i.querySelector(uu(f));if(m)return r.state.loading|=4,r.instance=m,Et(m),m;u=JE(o),(f=Yn.get(f))&&fm(u,f),m=(i.ownerDocument||i).createElement("link"),Et(m);var E=m;return E._p=new Promise(function(A,C){E.onload=A,E.onerror=C}),Xt(m,"link",u),r.state.loading|=4,Dh(m,o.precedence,i),r.instance=m;case"script":return m=Ro(o.src),(f=i.querySelector(cu(m)))?(r.instance=f,Et(f),f):(u=o,(f=Yn.get(m))&&(u=y({},o),dm(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),Et(f),Xt(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Dh(u,o.precedence,i));return r.instance}function Dh(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var A=u[E];if(A.dataset.precedence===r)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function fm(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function dm(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var Oh=null;function tT(i,r,o){if(Oh===null){var u=new Map,f=Oh=new Map;f.set(o,u)}else f=Oh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[xr]||m[Nt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var A=u.get(E);A?A.push(m):u.set(E,[m])}}return u}function nT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function rI(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function iT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var hu=null;function aI(){}function oI(i,r,o){if(hu===null)throw Error(s(475));var u=hu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Ao(o.href),m=i.querySelector(uu(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=Mh.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,Et(m);return}m=i.ownerDocument||i,o=JE(o),(f=Yn.get(f))&&fm(o,f),m=m.createElement("link"),Et(m);var E=m;E._p=new Promise(function(A,C){E.onload=A,E.onerror=C}),Xt(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=Mh.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function lI(){if(hu===null)throw Error(s(475));var i=hu;return i.stylesheets&&i.count===0&&pm(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&pm(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function Mh(){if(this.count--,this.count===0){if(this.stylesheets)pm(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var kh=null;function pm(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,kh=new Map,r.forEach(uI,i),kh=null,Mh.call(i))}function uI(i,r){if(!(r.state.loading&4)){var o=kh.get(i);if(o)var u=o.get(null);else{o=new Map,kh.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=Mh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var fu={$$typeof:te,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function cI(i,r,o,u,f,m,E,A){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ji(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ji(0),this.hiddenUpdates=ji(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function sT(i,r,o,u,f,m,E,A,C,F,$,Z){return i=new cI(i,r,o,E,A,C,F,Z),r=1,m===!0&&(r|=24),m=bn(3,null,null,r),i.current=m,m.stateNode=i,r=$d(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},Jd(m),i}function rT(i){return i?(i=eo,i):eo}function aT(i,r,o,u,f,m){f=rT(f),u.context===null?u.context=f:u.pendingContext=f,u=Us(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Bs(i,u,r),o!==null&&(On(o,i,r),Hl(o,i,r))}function oT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function mm(i,r){oT(i,r),(i=i.alternate)&&oT(i,r)}function lT(i){if(i.tag===13){var r=Ja(i,67108864);r!==null&&On(r,i,67108864),mm(i,67108864)}}var Ph=!0;function hI(i,r,o,u){var f=Q.T;Q.T=null;var m=re.p;try{re.p=2,gm(i,r,o,u)}finally{re.p=m,Q.T=f}}function fI(i,r,o,u){var f=Q.T;Q.T=null;var m=re.p;try{re.p=8,gm(i,r,o,u)}finally{re.p=m,Q.T=f}}function gm(i,r,o,u){if(Ph){var f=_m(u);if(f===null)im(i,r,u,xh,o),cT(i,u);else if(pI(f,i,r,o,u))u.stopPropagation();else if(cT(i,u),r&4&&-1<dI.indexOf(i)){for(;f!==null;){var m=pi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Jn(m.pendingLanes);if(E!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var C=1<<31-sn(E);A.entanglements[1]|=C,E&=~C}Ii(m),(Xe&6)===0&&(yh=xn()+500,ru(0))}}break;case 13:A=Ja(m,2),A!==null&&On(A,m,2),Eh(),mm(m,2)}if(m=_m(u),m===null&&im(i,r,u,xh,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else im(i,r,u,null,o)}}function _m(i){return i=Un(i),ym(i)}var xh=null;function ym(i){if(xh=null,i=Gi(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return xh=i,null}function uT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Td()){case cl:return 2;case Ma:return 8;case Dr:case Sd:return 32;case ka:return 268435456;default:return 32}default:return 32}}var vm=!1,Zs=null,Js=null,er=null,du=new Map,pu=new Map,tr=[],dI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cT(i,r){switch(i){case"focusin":case"focusout":Zs=null;break;case"dragenter":case"dragleave":Js=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":du.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":pu.delete(r.pointerId)}}function mu(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=pi(r),r!==null&&lT(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function pI(i,r,o,u,f){switch(r){case"focusin":return Zs=mu(Zs,i,r,o,u,f),!0;case"dragenter":return Js=mu(Js,i,r,o,u,f),!0;case"mouseover":return er=mu(er,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return du.set(m,mu(du.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,pu.set(m,mu(pu.get(m)||null,i,r,o,u,f)),!0}return!1}function hT(i){var r=Gi(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Ec(i.priority,function(){if(o.tag===13){var u=Dn();u=Ns(u);var f=Ja(o,u);f!==null&&On(f,o,u),mm(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Lh(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=_m(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);$i=u,o.target.dispatchEvent(u),$i=null}else return r=pi(o),r!==null&&lT(r),i.blockedOn=o,!1;r.shift()}return!0}function fT(i,r,o){Lh(i)&&o.delete(r)}function mI(){vm=!1,Zs!==null&&Lh(Zs)&&(Zs=null),Js!==null&&Lh(Js)&&(Js=null),er!==null&&Lh(er)&&(er=null),du.forEach(fT),pu.forEach(fT)}function Vh(i,r){i.blockedOn===r&&(i.blockedOn=null,vm||(vm=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,mI)))}var Uh=null;function dT(i){Uh!==i&&(Uh=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Uh===i&&(Uh=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(ym(u||o)===null)continue;break}var m=pi(o);m!==null&&(i.splice(r,3),r-=3,yp(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function gu(i){function r(C){return Vh(C,i)}Zs!==null&&Vh(Zs,i),Js!==null&&Vh(Js,i),er!==null&&Vh(er,i),du.forEach(r),pu.forEach(r);for(var o=0;o<tr.length;o++){var u=tr[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<tr.length&&(o=tr[0],o.blockedOn===null);)hT(o),o.blockedOn===null&&tr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Rt]||null;if(typeof m=="function")E||dT(o);else if(E){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Rt]||null)A=E.formAction;else if(ym(f)!==null)continue}else A=E.action;typeof A=="function"?o[u+1]=A:(o.splice(u,3),u-=3),dT(o)}}}function Em(i){this._internalRoot=i}Bh.prototype.render=Em.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Dn();aT(o,u,i,r,null,null)},Bh.prototype.unmount=Em.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;aT(i.current,2,null,i,null,null),Eh(),r[Ln]=null}};function Bh(i){this._internalRoot=i}Bh.prototype.unstable_scheduleHydration=function(i){if(i){var r=Ds();i={blockedOn:null,target:i,priority:r};for(var o=0;o<tr.length&&r!==0&&r<tr[o].priority;o++);tr.splice(o,0,i),o===0&&hT(i)}};var pT=e.version;if(pT!=="19.1.0")throw Error(s(527,pT,"19.1.0"));re.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var gI={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zh.isDisabled&&zh.supportsFiber)try{gt=zh.inject(gI),We=zh}catch{}}return yu.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=Dv,m=Ov,E=Mv,A=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks)),r=sT(i,1,!1,null,null,o,u,f,m,E,A,null),i[Ln]=r.current,nm(i),new Em(r)},yu.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=Dv,E=Ov,A=Mv,C=null,F=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(F=o.formState)),r=sT(i,1,!0,r,o??null,u,f,m,E,A,C,F),r.context=rT(null),o=r.current,u=Dn(),u=Ns(u),f=Us(u),f.callback=null,Bs(o,f,u),o=u,r.current.lanes=o,qi(r,o),Ii(r),i[Ln]=r.current,nm(i),new Bh(r)},yu.version="19.1.0",yu}var RT;function bI(){if(RT)return Am.exports;RT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Am.exports=wI(),Am.exports}var CI=bI();const II="modulepreload",NI=function(n){return"/AcadComponent/"+n},wT={},Aa=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){let c=function(g){return Promise.all(g.map(y=>Promise.resolve(y).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=c(t.map(g=>{if(g=NI(g),g in wT)return;wT[g]=!0;const y=g.endsWith(".css"),T=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${T}`))return;const S=document.createElement("link");if(S.rel=y?"stylesheet":II,y||(S.as="script"),S.crossOrigin="",S.href=g,p&&S.setAttribute("nonce",p),document.head.appendChild(S),y)return new Promise((D,I)=>{S.addEventListener("load",D),S.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${g}`)))})}))}function l(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return a.then(c=>{for(const d of c||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})},DI="_navBarWrapper_9uva4_71",OI="_left_9uva4_105",MI="_title_9uva4_113",kI="_mid_9uva4_131",PI="_Links_9uva4_143",xI="_content_9uva4_161",LI="_ind_9uva4_173",VI="_indicator_9uva4_183",UI="_right_9uva4_211",BI="_authButts_9uva4_211",zI="_HamburgerButt_9uva4_213",FI="_sidebar_9uva4_291",HI="_hideSideBar_9uva4_301",jI="_signOut_9uva4_441",qI="_signUp_9uva4_443",GI="_indicated_9uva4_603",KI="_indication_9uva4_629",je={navBarWrapper:DI,left:OI,title:MI,mid:kI,Links:PI,content:xI,ind:LI,indicator:VI,right:UI,authButts:BI,HamburgerButt:zI,sidebar:FI,hideSideBar:HI,signOut:jI,signUp:qI,indicated:GI,indication:KI};var vu={},bT;function YI(){if(bT)return vu;bT=1,Object.defineProperty(vu,"__esModule",{value:!0}),vu.parse=c,vu.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function c(S,D){const I=new l,H=S.length;if(H<2)return I;const B=(D==null?void 0:D.decode)||y;let Y=0;do{const X=S.indexOf("=",Y);if(X===-1)break;const te=S.indexOf(";",Y),le=te===-1?H:te;if(X>le){Y=S.lastIndexOf(";",X-1)+1;continue}const ce=d(S,Y,X),fe=p(S,X,ce),k=S.slice(ce,fe);if(I[k]===void 0){let w=d(S,X+1,le),b=p(S,le,w);const M=B(S.slice(w,b));I[k]=M}Y=le+1}while(Y<H);return I}function d(S,D,I){do{const H=S.charCodeAt(D);if(H!==32&&H!==9)return D}while(++D<I);return I}function p(S,D,I){for(;D>I;){const H=S.charCodeAt(--D);if(H!==32&&H!==9)return D+1}return I}function g(S,D,I){const H=(I==null?void 0:I.encode)||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const B=H(D);if(!e.test(B))throw new TypeError(`argument val is invalid: ${D}`);let Y=S+"="+B;if(!I)return Y;if(I.maxAge!==void 0){if(!Number.isInteger(I.maxAge))throw new TypeError(`option maxAge is invalid: ${I.maxAge}`);Y+="; Max-Age="+I.maxAge}if(I.domain){if(!t.test(I.domain))throw new TypeError(`option domain is invalid: ${I.domain}`);Y+="; Domain="+I.domain}if(I.path){if(!s.test(I.path))throw new TypeError(`option path is invalid: ${I.path}`);Y+="; Path="+I.path}if(I.expires){if(!T(I.expires)||!Number.isFinite(I.expires.valueOf()))throw new TypeError(`option expires is invalid: ${I.expires}`);Y+="; Expires="+I.expires.toUTCString()}if(I.httpOnly&&(Y+="; HttpOnly"),I.secure&&(Y+="; Secure"),I.partitioned&&(Y+="; Partitioned"),I.priority)switch(typeof I.priority=="string"?I.priority.toLowerCase():void 0){case"low":Y+="; Priority=Low";break;case"medium":Y+="; Priority=Medium";break;case"high":Y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${I.priority}`)}if(I.sameSite)switch(typeof I.sameSite=="string"?I.sameSite.toLowerCase():I.sameSite){case!0:case"strict":Y+="; SameSite=Strict";break;case"lax":Y+="; SameSite=Lax";break;case"none":Y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${I.sameSite}`)}return Y}function y(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function T(S){return a.call(S)==="[object Date]"}return vu}YI();var CT="popstate";function QI(n={}){function e(s,a){let{pathname:l,search:c,hash:d}=s.location;return $m("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:Fu(a)}return WI(e,t,null,n)}function dt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function xi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $I(){return Math.random().toString(36).substring(2,10)}function IT(n,e){return{usr:n.state,key:n.key,idx:e}}function $m(n,e,t=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Wo(e):e,state:t,key:e&&e.key||s||$I()}}function Fu({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Wo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substring(s),n=n.substring(0,s)),n&&(e.pathname=n)}return e}function WI(n,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,d="POP",p=null,g=y();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function y(){return(c.state||{idx:null}).idx}function T(){d="POP";let B=y(),Y=B==null?null:B-g;g=B,p&&p({action:d,location:H.location,delta:Y})}function S(B,Y){d="PUSH";let X=$m(H.location,B,Y);g=y()+1;let te=IT(X,g),le=H.createHref(X);try{c.pushState(te,"",le)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;a.location.assign(le)}l&&p&&p({action:d,location:H.location,delta:1})}function D(B,Y){d="REPLACE";let X=$m(H.location,B,Y);g=y();let te=IT(X,g),le=H.createHref(X);c.replaceState(te,"",le),l&&p&&p({action:d,location:H.location,delta:0})}function I(B){return XI(B)}let H={get action(){return d},get location(){return n(a,c)},listen(B){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(CT,T),p=B,()=>{a.removeEventListener(CT,T),p=null}},createHref(B){return e(a,B)},createURL:I,encodeLocation(B){let Y=I(B);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:S,replace:D,go(B){return c.go(B)}};return H}function XI(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),dt(t,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:Fu(n);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function YS(n,e,t="/"){return ZI(n,e,t,!1)}function ZI(n,e,t,s){let a=typeof e=="string"?Wo(e):e,l=Es(a.pathname||"/",t);if(l==null)return null;let c=QS(n);JI(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=c1(l);d=l1(c[p],g,s)}return d}function QS(n,e=[],t=[],s=""){let a=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(dt(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let g=_s([s,p.relativePath]),y=t.concat(p);l.children&&l.children.length>0&&(dt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),QS(l.children,e,y,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:a1(g,l.index),routesMeta:y})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let p of $S(l.path))a(l,c,p)}),e}function $S(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=$S(s.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function JI(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:o1(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var e1=/^:[\w-]+$/,t1=3,n1=2,i1=1,s1=10,r1=-2,NT=n=>n==="*";function a1(n,e){let t=n.split("/"),s=t.length;return t.some(NT)&&(s+=r1),e&&(s+=n1),t.filter(a=>!NT(a)).reduce((a,l)=>a+(e1.test(l)?t1:l===""?i1:s1),s)}function o1(n,e){return n.length===e.length&&n.slice(0,-1).every((s,a)=>s===e[a])?n[n.length-1]-e[e.length-1]:0}function l1(n,e,t=!1){let{routesMeta:s}=n,a={},l="/",c=[];for(let d=0;d<s.length;++d){let p=s[d],g=d===s.length-1,y=l==="/"?e:e.slice(l.length)||"/",T=cf({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},y),S=p.route;if(!T&&g&&t&&!s[s.length-1].route.index&&(T=cf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!T)return null;Object.assign(a,T.params),c.push({params:a,pathname:_s([l,T.pathname]),pathnameBase:p1(_s([l,T.pathnameBase])),route:S}),T.pathnameBase!=="/"&&(l=_s([l,T.pathnameBase]))}return c}function cf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=u1(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:s.reduce((g,{paramName:y,isOptional:T},S)=>{if(y==="*"){let I=d[S]||"";c=l.slice(0,l.length-I.length).replace(/(.)\/+$/,"$1")}const D=d[S];return T&&!D?g[y]=void 0:g[y]=(D||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:n}}function u1(n,e=!1,t=!0){xi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(s.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function c1(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xi(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Es(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}function h1(n,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof n=="string"?Wo(n):n;return{pathname:t?t.startsWith("/")?t:f1(t,e):e,search:m1(s),hash:g1(a)}}function f1(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Cm(n,e,t,s){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function d1(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function WS(n){let e=d1(n);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function XS(n,e,t,s=!1){let a;typeof n=="string"?a=Wo(n):(a={...n},dt(!a.pathname||!a.pathname.includes("?"),Cm("?","pathname","search",a)),dt(!a.pathname||!a.pathname.includes("#"),Cm("#","pathname","hash",a)),dt(!a.search||!a.search.includes("#"),Cm("#","search","hash",a)));let l=n===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!s&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),T-=1;a.pathname=S.join("/")}d=T>=0?e[T]:"/"}let p=h1(a,d),g=c&&c!=="/"&&c.endsWith("/"),y=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(g||y)&&(p.pathname+="/"),p}var _s=n=>n.join("/").replace(/\/\/+/g,"/"),p1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),m1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,g1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function _1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var ZS=["POST","PUT","PATCH","DELETE"];new Set(ZS);var y1=["GET",...ZS];new Set(y1);var Xo=K.createContext(null);Xo.displayName="DataRouter";var jf=K.createContext(null);jf.displayName="DataRouterState";var JS=K.createContext({isTransitioning:!1});JS.displayName="ViewTransition";var v1=K.createContext(new Map);v1.displayName="Fetchers";var E1=K.createContext(null);E1.displayName="Await";var Bi=K.createContext(null);Bi.displayName="Navigation";var tc=K.createContext(null);tc.displayName="Location";var bs=K.createContext({outlet:null,matches:[],isDataRoute:!1});bs.displayName="Route";var xg=K.createContext(null);xg.displayName="RouteError";function T1(n,{relative:e}={}){dt(nc(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=K.useContext(Bi),{hash:a,pathname:l,search:c}=ic(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:_s([t,l])),s.createHref({pathname:d,search:c,hash:a})}function nc(){return K.useContext(tc)!=null}function Ra(){return dt(nc(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(tc).location}var eA="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function tA(n){K.useContext(Bi).static||K.useLayoutEffect(n)}function S1(){let{isDataRoute:n}=K.useContext(bs);return n?x1():A1()}function A1(){dt(nc(),"useNavigate() may be used only in the context of a <Router> component.");let n=K.useContext(Xo),{basename:e,navigator:t}=K.useContext(Bi),{matches:s}=K.useContext(bs),{pathname:a}=Ra(),l=JSON.stringify(WS(s)),c=K.useRef(!1);return tA(()=>{c.current=!0}),K.useCallback((p,g={})=>{if(xi(c.current,eA),!c.current)return;if(typeof p=="number"){t.go(p);return}let y=XS(p,JSON.parse(l),a,g.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:_s([e,y.pathname])),(g.replace?t.replace:t.push)(y,g.state,g)},[e,t,l,a,n])}K.createContext(null);function ic(n,{relative:e}={}){let{matches:t}=K.useContext(bs),{pathname:s}=Ra(),a=JSON.stringify(WS(t));return K.useMemo(()=>XS(n,JSON.parse(a),s,e==="path"),[n,a,s,e])}function R1(n,e){return nA(n,e)}function nA(n,e,t,s){var Y;dt(nc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=K.useContext(Bi),{matches:l}=K.useContext(bs),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",g=c?c.pathnameBase:"/",y=c&&c.route;{let X=y&&y.path||"";iA(p,!y||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let T=Ra(),S;if(e){let X=typeof e=="string"?Wo(e):e;dt(g==="/"||((Y=X.pathname)==null?void 0:Y.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${X.pathname}" was given in the \`location\` prop.`),S=X}else S=T;let D=S.pathname||"/",I=D;if(g!=="/"){let X=g.replace(/^\//,"").split("/");I="/"+D.replace(/^\//,"").split("/").slice(X.length).join("/")}let H=YS(n,{pathname:I});xi(y||H!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),xi(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=N1(H&&H.map(X=>Object.assign({},X,{params:Object.assign({},d,X.params),pathname:_s([g,a.encodeLocation?a.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?g:_s([g,a.encodeLocation?a.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),l,t,s);return e&&B?K.createElement(tc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},B):B}function w1(){let n=P1(),e=_1(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:l},"ErrorBoundary")," or"," ",K.createElement("code",{style:l},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),t?K.createElement("pre",{style:a},t):null,c)}var b1=K.createElement(w1,null),C1=class extends K.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?K.createElement(bs.Provider,{value:this.props.routeContext},K.createElement(xg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function I1({routeContext:n,match:e,children:t}){let s=K.useContext(Xo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),K.createElement(bs.Provider,{value:n},t)}function N1(n,e=[],t=null,s=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,l=t==null?void 0:t.errors;if(l!=null){let p=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);dt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:y,errors:T}=t,S=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||S){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,g,y)=>{let T,S=!1,D=null,I=null;t&&(T=l&&g.route.id?l[g.route.id]:void 0,D=g.route.errorElement||b1,c&&(d<0&&y===0?(iA("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,I=null):d===y&&(S=!0,I=g.route.hydrateFallbackElement||null)));let H=e.concat(a.slice(0,y+1)),B=()=>{let Y;return T?Y=D:S?Y=I:g.route.Component?Y=K.createElement(g.route.Component,null):g.route.element?Y=g.route.element:Y=p,K.createElement(I1,{match:g,routeContext:{outlet:p,matches:H,isDataRoute:t!=null},children:Y})};return t&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?K.createElement(C1,{location:t.location,revalidation:t.revalidation,component:D,error:T,children:B(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):B()},null)}function Lg(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function D1(n){let e=K.useContext(Xo);return dt(e,Lg(n)),e}function O1(n){let e=K.useContext(jf);return dt(e,Lg(n)),e}function M1(n){let e=K.useContext(bs);return dt(e,Lg(n)),e}function Vg(n){let e=M1(n),t=e.matches[e.matches.length-1];return dt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function k1(){return Vg("useRouteId")}function P1(){var s;let n=K.useContext(xg),e=O1("useRouteError"),t=Vg("useRouteError");return n!==void 0?n:(s=e.errors)==null?void 0:s[t]}function x1(){let{router:n}=D1("useNavigate"),e=Vg("useNavigate"),t=K.useRef(!1);return tA(()=>{t.current=!0}),K.useCallback(async(a,l={})=>{xi(t.current,eA),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...l}))},[n,e])}var DT={};function iA(n,e,t){!e&&!DT[n]&&(DT[n]=!0,xi(!1,t))}K.memo(L1);function L1({routes:n,future:e,state:t}){return nA(n,void 0,t,e)}function sA(n){dt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function V1({basename:n="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1}){dt(!nc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=K.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof t=="string"&&(t=Wo(t));let{pathname:p="/",search:g="",hash:y="",state:T=null,key:S="default"}=t,D=K.useMemo(()=>{let I=Es(p,c);return I==null?null:{location:{pathname:I,search:g,hash:y,state:T,key:S},navigationType:s}},[c,p,g,y,T,S,s]);return xi(D!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:K.createElement(Bi.Provider,{value:d},K.createElement(tc.Provider,{children:e,value:D}))}function U1({children:n,location:e}){return R1(Wm(n),e)}function Wm(n,e=[]){let t=[];return K.Children.forEach(n,(s,a)=>{if(!K.isValidElement(s))return;let l=[...e,a];if(s.type===K.Fragment){t.push.apply(t,Wm(s.props.children,l));return}dt(s.type===sA,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),dt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Wm(s.props.children,l)),t.push(c)}),t}var Xh="get",Zh="application/x-www-form-urlencoded";function qf(n){return n!=null&&typeof n.tagName=="string"}function B1(n){return qf(n)&&n.tagName.toLowerCase()==="button"}function z1(n){return qf(n)&&n.tagName.toLowerCase()==="form"}function F1(n){return qf(n)&&n.tagName.toLowerCase()==="input"}function H1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function j1(n,e){return n.button===0&&(!e||e==="_self")&&!H1(n)}var Fh=null;function q1(){if(Fh===null)try{new FormData(document.createElement("form"),0),Fh=!1}catch{Fh=!0}return Fh}var G1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Im(n){return n!=null&&!G1.has(n)?(xi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zh}"`),null):n}function K1(n,e){let t,s,a,l,c;if(z1(n)){let d=n.getAttribute("action");s=d?Es(d,e):null,t=n.getAttribute("method")||Xh,a=Im(n.getAttribute("enctype"))||Zh,l=new FormData(n)}else if(B1(n)||F1(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(s=p?Es(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Xh,a=Im(n.getAttribute("formenctype"))||Im(d.getAttribute("enctype"))||Zh,l=new FormData(d,n),!q1()){let{name:g,type:y,value:T}=n;if(y==="image"){let S=g?`${g}.`:"";l.append(`${S}x`,"0"),l.append(`${S}y`,"0")}else g&&l.append(g,T)}}else{if(qf(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Xh,s=null,a=Zh,c=n}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}function Ug(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function Y1(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Q1(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function $1(n,e,t){let s=await Promise.all(n.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await Y1(l,t);return c.links?c.links():[]}return[]}));return J1(s.flat(1).filter(Q1).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function OT(n,e,t,s,a,l){let c=(p,g)=>t[g]?p.route.id!==t[g].route.id:!0,d=(p,g)=>{var y;return t[g].pathname!==p.pathname||((y=t[g].route.path)==null?void 0:y.endsWith("*"))&&t[g].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?e.filter((p,g)=>{var T;let y=s.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function W1(n,e,{includeHydrateFallback:t}={}){return X1(n.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function X1(n){return[...new Set(n)]}function Z1(n){let e={},t=Object.keys(n).sort();for(let s of t)e[s]=n[s];return e}function J1(n,e){let t=new Set;return new Set(e),n.reduce((s,a)=>{let l=JSON.stringify(Z1(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var eN=new Set([100,101,204,205]);function tN(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Es(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function rA(){let n=K.useContext(Xo);return Ug(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function nN(){let n=K.useContext(jf);return Ug(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Bg=K.createContext(void 0);Bg.displayName="FrameworkContext";function aA(){let n=K.useContext(Bg);return Ug(n,"You must render this element inside a <HydratedRouter> element"),n}function iN(n,e){let t=K.useContext(Bg),[s,a]=K.useState(!1),[l,c]=K.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:y,onTouchStart:T}=e,S=K.useRef(null);K.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let H=Y=>{Y.forEach(X=>{c(X.isIntersecting)})},B=new IntersectionObserver(H,{threshold:.5});return S.current&&B.observe(S.current),()=>{B.disconnect()}}},[n]),K.useEffect(()=>{if(s){let H=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(H)}}},[s]);let D=()=>{a(!0)},I=()=>{a(!1),c(!1)};return t?n!=="intent"?[l,S,{}]:[l,S,{onFocus:Eu(d,D),onBlur:Eu(p,I),onMouseEnter:Eu(g,D),onMouseLeave:Eu(y,I),onTouchStart:Eu(T,D)}]:[!1,S,{}]}function Eu(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function sN({page:n,...e}){let{router:t}=rA(),s=K.useMemo(()=>YS(t.routes,n,t.basename),[t.routes,n,t.basename]);return s?K.createElement(aN,{page:n,matches:s,...e}):null}function rN(n){let{manifest:e,routeModules:t}=aA(),[s,a]=K.useState([]);return K.useEffect(()=>{let l=!1;return $1(n,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[n,e,t]),s}function aN({page:n,matches:e,...t}){let s=Ra(),{manifest:a,routeModules:l}=aA(),{basename:c}=rA(),{loaderData:d,matches:p}=nN(),g=K.useMemo(()=>OT(n,e,p,a,s,"data"),[n,e,p,a,s]),y=K.useMemo(()=>OT(n,e,p,a,s,"assets"),[n,e,p,a,s]),T=K.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let I=new Set,H=!1;if(e.forEach(Y=>{var te;let X=a.routes[Y.route.id];!X||!X.hasLoader||(!g.some(le=>le.route.id===Y.route.id)&&Y.route.id in d&&((te=l[Y.route.id])!=null&&te.shouldRevalidate)||X.hasClientLoader?H=!0:I.add(Y.route.id))}),I.size===0)return[];let B=tN(n,c);return H&&I.size>0&&B.searchParams.set("_routes",e.filter(Y=>I.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[B.pathname+B.search]},[c,d,s,a,g,e,n,l]),S=K.useMemo(()=>W1(y,a),[y,a]),D=rN(y);return K.createElement(K.Fragment,null,T.map(I=>K.createElement("link",{key:I,rel:"prefetch",as:"fetch",href:I,...t})),S.map(I=>K.createElement("link",{key:I,rel:"modulepreload",href:I,...t})),D.map(({key:I,link:H})=>K.createElement("link",{key:I,...H})))}function oN(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var oA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{oA&&(window.__reactRouterVersion="7.6.1")}catch{}function lN({basename:n,children:e,window:t}){let s=K.useRef();s.current==null&&(s.current=QI({window:t,v5Compat:!0}));let a=s.current,[l,c]=K.useState({action:a.action,location:a.location}),d=K.useCallback(p=>{K.startTransition(()=>c(p))},[c]);return K.useLayoutEffect(()=>a.listen(d),[a,d]),K.createElement(V1,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:a})}var lA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fa=K.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:y,viewTransition:T,...S},D){let{basename:I}=K.useContext(Bi),H=typeof g=="string"&&lA.test(g),B,Y=!1;if(typeof g=="string"&&H&&(B=g,oA))try{let b=new URL(window.location.href),M=g.startsWith("//")?new URL(b.protocol+g):new URL(g),x=Es(M.pathname,I);M.origin===b.origin&&x!=null?g=x+M.search+M.hash:Y=!0}catch{xi(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=T1(g,{relative:a}),[te,le,ce]=iN(s,S),fe=fN(g,{replace:c,state:d,target:p,preventScrollReset:y,relative:a,viewTransition:T});function k(b){e&&e(b),b.defaultPrevented||fe(b)}let w=K.createElement("a",{...S,...ce,href:B||X,onClick:Y||l?e:k,ref:oN(D,le),target:p,"data-discover":!H&&t==="render"?"true":void 0});return te&&!H?K.createElement(K.Fragment,null,w,K.createElement(sN,{page:X})):w});fa.displayName="Link";var uN=K.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...g},y){let T=ic(c,{relative:g.relative}),S=Ra(),D=K.useContext(jf),{navigator:I,basename:H}=K.useContext(Bi),B=D!=null&&_N(T)&&d===!0,Y=I.encodeLocation?I.encodeLocation(T).pathname:T.pathname,X=S.pathname,te=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;t||(X=X.toLowerCase(),te=te?te.toLowerCase():null,Y=Y.toLowerCase()),te&&H&&(te=Es(te,H)||te);const le=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let ce=X===Y||!a&&X.startsWith(Y)&&X.charAt(le)==="/",fe=te!=null&&(te===Y||!a&&te.startsWith(Y)&&te.charAt(Y.length)==="/"),k={isActive:ce,isPending:fe,isTransitioning:B},w=ce?e:void 0,b;typeof s=="function"?b=s(k):b=[s,ce?"active":null,fe?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let M=typeof l=="function"?l(k):l;return K.createElement(fa,{...g,"aria-current":w,className:b,ref:y,style:M,to:c,viewTransition:d},typeof p=="function"?p(k):p)});uN.displayName="NavLink";var cN=K.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=Xh,action:d,onSubmit:p,relative:g,preventScrollReset:y,viewTransition:T,...S},D)=>{let I=mN(),H=gN(d,{relative:g}),B=c.toLowerCase()==="get"?"get":"post",Y=typeof d=="string"&&lA.test(d),X=te=>{if(p&&p(te),te.defaultPrevented)return;te.preventDefault();let le=te.nativeEvent.submitter,ce=(le==null?void 0:le.getAttribute("formmethod"))||c;I(le||te.currentTarget,{fetcherKey:e,method:ce,navigate:t,replace:a,state:l,relative:g,preventScrollReset:y,viewTransition:T})};return K.createElement("form",{ref:D,method:B,action:H,onSubmit:s?p:X,...S,"data-discover":!Y&&n==="render"?"true":void 0})});cN.displayName="Form";function hN(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function uA(n){let e=K.useContext(Xo);return dt(e,hN(n)),e}function fN(n,{target:e,replace:t,state:s,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=S1(),p=Ra(),g=ic(n,{relative:l});return K.useCallback(y=>{if(j1(y,e)){y.preventDefault();let T=t!==void 0?t:Fu(p)===Fu(g);d(n,{replace:T,state:s,preventScrollReset:a,relative:l,viewTransition:c})}},[p,d,g,t,s,e,n,a,l,c])}var dN=0,pN=()=>`__${String(++dN)}__`;function mN(){let{router:n}=uA("useSubmit"),{basename:e}=K.useContext(Bi),t=k1();return K.useCallback(async(s,a={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=K1(s,e);if(a.navigate===!1){let y=a.fetcherKey||pN();await n.fetch(y,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function gN(n,{relative:e}={}){let{basename:t}=K.useContext(Bi),s=K.useContext(bs);dt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...ic(n||".",{relative:e})},c=Ra();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(y=>y==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let y=d.toString();l.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:_s([t,l.pathname])),Fu(l)}function _N(n,e={}){let t=K.useContext(JS);dt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=uA("useViewTransitionState"),a=ic(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Es(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Es(t.nextLocation.pathname,s)||t.nextLocation.pathname;return cf(a.pathname,c)!=null||cf(a.pathname,l)!=null}[...eN];const yN=({className:n,content:e,func:t,submit:s,icon:a,change:l,element:c})=>de.jsxs("button",{className:`${n}`,onSubmit:d=>{s(d)},onClick:()=>{t()},children:[a,e,c]}),vN=()=>{const{pages:n,setPages:e,user:t,setPrevPage:s,setHideSideBar:a,hideSideBar:l}=K.useContext(sy);function c(d){e(p=>p.map((g,y)=>y==d?{...g,ind:!0}:{...g,ind:!1}))}return K.useEffect(()=>{console.log(l)},[l]),de.jsxs(de.Fragment,{children:[de.jsxs("div",{className:je.navBarWrapper,children:[de.jsxs("div",{className:je.left,children:[de.jsx("img",{src:"./web-icon.png"}),de.jsx("h1",{className:je.title,children:"Acad"})]}),de.jsx("div",{className:je.mid,children:de.jsx("ul",{children:n==null?void 0:n.map((d,p)=>de.jsxs(fa,{to:d.path,className:d.ind?`${je.ind} ${je.Links}`:`${je.notInd} ${je.Links}`,onClick:()=>{c(p),s(d.path)},children:[de.jsxs("span",{className:je.content,children:[d.icon,d.name]}),de.jsx("span",{className:je.indicator})]},d.name))})}),t!=null&&t.uid?de.jsxs("div",{className:je.right,children:[de.jsx("button",{className:je.authButts,children:de.jsx(fa,{to:"/AcadComponent/Dashboard",className:je.Links,children:"Account"})}),de.jsx("button",{className:`${je.authButts} ${je.signOut}`,children:"Log Out"}),de.jsx("button",{className:je.HamburgerButt,onClick:()=>{a(!1)},children:de.jsx("i",{className:"fa fa-list-ul"})})]}):de.jsxs("div",{className:je.right,children:[de.jsx("button",{className:je.authButts,children:de.jsx(fa,{to:"/AcadComponent/SignIn",className:je.Links,children:"Sign In"})}),de.jsx("button",{className:`${je.authButts} ${je.signUp}`,children:de.jsx(fa,{to:"/AcadComponent/SignUp",className:je.Links,children:"Sign Up"})}),de.jsx("button",{className:je.HamburgerButt,onClick:()=>{a(!1)},children:de.jsx("i",{className:"fa fa-list-ul"})})]})]}),de.jsx("div",{className:l==!1?je.sidebar:je.hideSideBar,children:de.jsxs("ul",{className:l==!1?je.NavLinks:je.hideNavLinks,children:[de.jsx(yN,{className:je.HamburgerButt,func:()=>{a(!l)},content:de.jsx("i",{className:"fa fa-list-ul"})}),n.map((d,p)=>de.jsxs(fa,{to:d.path,onClick:()=>{c(d),s(d.path)},className:d.ind?`${je.Links} ${je.indicated}`:`${je.Links} ${je.notIndicated}`,children:[d.icon,de.jsxs("span",{children:[d.name,de.jsx("span",{className:je.indication})]})]},d.path))]})})]})},EN="_loadingWrapper_c5yrr_15",TN="_loadingBar_c5yrr_49",MT={loadingWrapper:EN,loadingBar:TN},SN=()=>{const{loading:n}=K.useContext(sy);if(n)return de.jsxs("div",{className:MT.loadingWrapper,children:[de.jsx("div",{className:MT.loadingBar}),"Loading..."]})},AN=()=>de.jsx("div",{children:"PageNotFound"}),RN=()=>{};var kT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=function(n,e){if(!n)throw Zo(e)},Zo=function(n){return new Error("Firebase Database ("+cA.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},wN=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},zg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,y=l>>2,T=(l&3)<<4|d>>4;let S=(d&15)<<2|g>>6,D=g&63;p||(D=64,c||(S=64)),s.push(t[y],t[T],t[S],t[D])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(hA(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wN(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new bN;const S=l<<2|d>>4;if(s.push(S),g!==64){const D=d<<4&240|g>>2;if(s.push(D),T!==64){const I=g<<6&192|T;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fA=function(n){const e=hA(n);return zg.encodeByteArray(e,!0)},hf=function(n){return fA(n).replace(/\./g,"")},ff=function(n){try{return zg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(n){return dA(void 0,n)}function dA(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!IN(t)||(n[t]=dA(n[t],e[t]));return n}function IN(n){return n!=="__proto__"}/**
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
 */function NN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const DN=()=>NN().__FIREBASE_DEFAULTS__,ON=()=>{if(typeof process>"u"||typeof kT>"u")return;const n=kT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},MN=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ff(n[1]);return e&&JSON.parse(e)},Gf=()=>{try{return RN()||DN()||ON()||MN()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pA=n=>{var e,t;return(t=(e=Gf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},mA=n=>{const e=pA(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},gA=()=>{var n;return(n=Gf())===null||n===void 0?void 0:n.config},_A=n=>{var e;return(e=Gf())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Jo(n){return n.endsWith(".cloudworkstations.dev")}async function Hg(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function yA(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[hf(JSON.stringify(t)),hf(JSON.stringify(c)),""].join(".")}const Ou={};function kN(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ou))Ou[e]?n.emulator.push(e):n.prod.push(e);return n}function PN(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let PT=!1;function jg(n,e){if(typeof window>"u"||typeof document>"u"||!Jo(window.location.host)||Ou[n]===e||Ou[n]||PT)return;Ou[n]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",l=kN().prod.length>0;function c(){const S=document.getElementById(s);S&&S.remove()}function d(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,D){S.setAttribute("width","24"),S.setAttribute("id",D),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{PT=!0,c()},S}function y(S,D){S.setAttribute("id",D),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=PN(s),D=t("text"),I=document.getElementById(D)||document.createElement("span"),H=t("learnmore"),B=document.getElementById(H)||document.createElement("a"),Y=t("preprendIcon"),X=document.getElementById(Y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const te=S.element;d(te),y(B,H);const le=g();p(X,Y),te.append(X,I,B,le),document.body.appendChild(te)}l?(I.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",D)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function xN(){var n;const e=(n=Gf())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function LN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VN(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function vA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UN(){const n=dn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function BN(){return cA.NODE_ADMIN===!0}function zN(){return!xN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function FN(){try{return typeof indexedDB=="object"}catch{return!1}}function HN(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN="FirebaseError";class zi extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=jN,Object.setPrototypeOf(this,zi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sc.prototype.create)}}class sc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?qN(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new zi(a,d,s)}}function qN(n,e){return n.replace(GN,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const GN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(n){return JSON.parse(n)}function Jt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=Hu(ff(l[0])||""),t=Hu(ff(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},KN=function(n){const e=EA(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},YN=function(n){const e=EA(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Uo(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Xm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function df(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function mr(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(xT(l)&&xT(c)){if(!mr(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function xT(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function wu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function bu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const S=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(S<<1|S>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,y;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):T<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const S=(a<<5|a>>>27)+g+p+y+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=S}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function $N(n,e){const t=new WN(n,e);return t.subscribe.bind(t)}class WN{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");XN(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Nm),a.error===void 0&&(a.error=Nm),a.complete===void 0&&(a.complete=Nm);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XN(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Nm(){}function ZN(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,oe(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Kf=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function tn(n){return n&&n._delegate?n._delegate:n}class Ts{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ca="[DEFAULT]";/**
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
 */class eD{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Fg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nD(e))try{this.getOrInitializeService({instanceIdentifier:ca})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=ca){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ca){return this.instances.has(e)}getOptions(e=ca){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tD(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ca){return this.component?this.component.multipleInstances?e:ca:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tD(n){return n===ca?void 0:n}function nD(n){return n.instantiationMode==="EAGER"}/**
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
 */class iD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new eD(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const sD={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},rD=Pe.INFO,aD={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},oD=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=aD[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yf{constructor(e){this.name=e,this._logLevel=rD,this._logHandler=oD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const lD=(n,e)=>e.some(t=>n instanceof t);let LT,VT;function uD(){return LT||(LT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cD(){return VT||(VT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TA=new WeakMap,Zm=new WeakMap,SA=new WeakMap,Dm=new WeakMap,Gg=new WeakMap;function hD(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(ur(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&TA.set(t,n)}).catch(()=>{}),Gg.set(e,n),e}function fD(n){if(Zm.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Zm.set(n,e)}let Jm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||SA.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ur(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function dD(n){Jm=n(Jm)}function pD(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Om(this),e,...t);return SA.set(s,e.sort?e.sort():[e]),ur(s)}:cD().includes(n)?function(...e){return n.apply(Om(this),e),ur(TA.get(this))}:function(...e){return ur(n.apply(Om(this),e))}}function mD(n){return typeof n=="function"?pD(n):(n instanceof IDBTransaction&&fD(n),lD(n,uD())?new Proxy(n,Jm):n)}function ur(n){if(n instanceof IDBRequest)return hD(n);if(Dm.has(n))return Dm.get(n);const e=mD(n);return e!==n&&(Dm.set(n,e),Gg.set(e,n)),e}const Om=n=>Gg.get(n);function gD(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=ur(c);return s&&c.addEventListener("upgradeneeded",p=>{s(ur(c.result),p.oldVersion,p.newVersion,ur(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const _D=["get","getKey","getAll","getAllKeys","count"],yD=["put","add","delete","clear"],Mm=new Map;function UT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Mm.get(e))return Mm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=yD.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||_D.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return Mm.set(e,l),l}dD(n=>({...n,get:(e,t,s)=>UT(e,t)||n.get(e,t,s),has:(e,t)=>!!UT(e,t)||n.has(e,t)}));/**
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
 */class vD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ED(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function ED(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eg="@firebase/app",BT="0.13.0";/**
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
 */const Ss=new Yf("@firebase/app"),TD="@firebase/app-compat",SD="@firebase/analytics-compat",AD="@firebase/analytics",RD="@firebase/app-check-compat",wD="@firebase/app-check",bD="@firebase/auth",CD="@firebase/auth-compat",ID="@firebase/database",ND="@firebase/data-connect",DD="@firebase/database-compat",OD="@firebase/functions",MD="@firebase/functions-compat",kD="@firebase/installations",PD="@firebase/installations-compat",xD="@firebase/messaging",LD="@firebase/messaging-compat",VD="@firebase/performance",UD="@firebase/performance-compat",BD="@firebase/remote-config",zD="@firebase/remote-config-compat",FD="@firebase/storage",HD="@firebase/storage-compat",jD="@firebase/firestore",qD="@firebase/ai",GD="@firebase/firestore-compat",KD="firebase",YD="11.8.0";/**
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
 */const tg="[DEFAULT]",QD={[eg]:"fire-core",[TD]:"fire-core-compat",[AD]:"fire-analytics",[SD]:"fire-analytics-compat",[wD]:"fire-app-check",[RD]:"fire-app-check-compat",[bD]:"fire-auth",[CD]:"fire-auth-compat",[ID]:"fire-rtdb",[ND]:"fire-data-connect",[DD]:"fire-rtdb-compat",[OD]:"fire-fn",[MD]:"fire-fn-compat",[kD]:"fire-iid",[PD]:"fire-iid-compat",[xD]:"fire-fcm",[LD]:"fire-fcm-compat",[VD]:"fire-perf",[UD]:"fire-perf-compat",[BD]:"fire-rc",[zD]:"fire-rc-compat",[FD]:"fire-gcs",[HD]:"fire-gcs-compat",[jD]:"fire-fst",[GD]:"fire-fst-compat",[qD]:"fire-vertex","fire-js":"fire-js",[KD]:"fire-js-all"};/**
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
 */const pf=new Map,$D=new Map,ng=new Map;function zT(n,e){try{n.container.addComponent(e)}catch(t){Ss.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gr(n){const e=n.name;if(ng.has(e))return Ss.debug(`There were multiple attempts to register component ${e}.`),!1;ng.set(e,n);for(const t of pf.values())zT(t,n);for(const t of $D.values())zT(t,n);return!0}function Qf(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Sn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const WD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cr=new sc("app","Firebase",WD);/**
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
 */class XD{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
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
 */const Rr=YD;function Kg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:tg,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw cr.create("bad-app-name",{appName:String(a)});if(t||(t=gA()),!t)throw cr.create("no-options");const l=pf.get(a);if(l){if(mr(t,l.options)&&mr(s,l.config))return l;throw cr.create("duplicate-app",{appName:a})}const c=new iD(a);for(const p of ng.values())c.addComponent(p);const d=new XD(t,s,c);return pf.set(a,d),d}function Yg(n=tg){const e=pf.get(n);if(!e&&n===tg&&gA())return Kg();if(!e)throw cr.create("no-app",{appName:n});return e}function $n(n,e,t){var s;let a=(s=QD[n])!==null&&s!==void 0?s:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ss.warn(d.join(" "));return}gr(new Ts(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const ZD="firebase-heartbeat-database",JD=1,ju="firebase-heartbeat-store";let km=null;function AA(){return km||(km=gD(ZD,JD,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ju)}catch(t){console.warn(t)}}}}).catch(n=>{throw cr.create("idb-open",{originalErrorMessage:n.message})})),km}async function eO(n){try{const t=(await AA()).transaction(ju),s=await t.objectStore(ju).get(RA(n));return await t.done,s}catch(e){if(e instanceof zi)Ss.warn(e.message);else{const t=cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ss.warn(t.message)}}}async function FT(n,e){try{const s=(await AA()).transaction(ju,"readwrite");await s.objectStore(ju).put(e,RA(n)),await s.done}catch(t){if(t instanceof zi)Ss.warn(t.message);else{const s=cr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ss.warn(s.message)}}}function RA(n){return`${n.name}!${n.options.appId}`}/**
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
 */const tO=1024,nO=30;class iO{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rO(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=HT();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>nO){const c=aO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ss.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=HT(),{heartbeatsToSend:s,unsentEntries:a}=sO(this._heartbeatsCache.heartbeats),l=hf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ss.warn(t),""}}}function HT(){return new Date().toISOString().substring(0,10)}function sO(n,e=tO){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),jT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),jT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class rO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return FN()?HN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await eO(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return FT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return FT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function jT(n){return hf(JSON.stringify({version:2,heartbeats:n})).length}function aO(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function oO(n){gr(new Ts("platform-logger",e=>new vD(e),"PRIVATE")),gr(new Ts("heartbeat",e=>new iO(e),"PRIVATE")),$n(eg,BT,n),$n(eg,BT,"esm2017"),$n("fire-js","")}oO("");function Qg(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(t[s[a]]=n[s[a]]);return t}function wA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lO=wA,bA=new sc("auth","Firebase",wA());/**
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
 */const mf=new Yf("@firebase/auth");function uO(n,...e){mf.logLevel<=Pe.WARN&&mf.warn(`Auth (${Rr}): ${n}`,...e)}function Jh(n,...e){mf.logLevel<=Pe.ERROR&&mf.error(`Auth (${Rr}): ${n}`,...e)}/**
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
 */function Xn(n,...e){throw Wg(n,...e)}function ci(n,...e){return Wg(n,...e)}function $g(n,e,t){const s=Object.assign(Object.assign({},lO()),{[e]:t});return new sc("auth","Firebase",s).create(e,{appName:n.name})}function hr(n){return $g(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cO(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Xn(n,"argument-error"),$g(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wg(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return bA.create(n,...e)}function Te(n,e,...t){if(!n)throw Wg(e,...t)}function ps(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Jh(e),new Error(e)}function As(n,e){n||ps(e)}/**
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
 */function ig(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function hO(){return qT()==="http:"||qT()==="https:"}function qT(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function fO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hO()||VN()||"connection"in navigator)?navigator.onLine:!0}function dO(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class rc{constructor(e,t){this.shortDelay=e,this.longDelay=t,As(t>e,"Short delay should be less than long delay!"),this.isMobile=qg()||vA()}get(){return fO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xg(n,e){As(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class CA{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ps("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ps("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ps("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gO=new rc(3e4,6e4);function wa(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function wr(n,e,t,s,a={}){return IA(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=el(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:p},l);return LN()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Jo(n.emulatorConfig.host)&&(g.credentials="include"),CA.fetch()(await NA(n,n.config.apiHost,t,d),g)})}async function IA(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},pO),e);try{const a=new yO(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Hh(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hh(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Hh(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Hh(n,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw $g(n,y,g);Xn(n,y)}}catch(a){if(a instanceof zi)throw a;Xn(n,"network-request-failed",{message:String(a)})}}async function $f(n,e,t,s,a={}){const l=await wr(n,e,t,s,a);return"mfaPendingCredential"in l&&Xn(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function NA(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?Xg(n.config,a):`${n.config.apiScheme}://${a}`;return mO.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function _O(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ci(this.auth,"network-request-failed")),gO.get())})}}function Hh(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=ci(n,e,s);return a.customData._tokenResponse=t,a}function GT(n){return n!==void 0&&n.enterprise!==void 0}class vO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _O(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function EO(n,e){return wr(n,"GET","/v2/recaptchaConfig",wa(n,e))}/**
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
 */async function TO(n,e){return wr(n,"POST","/v1/accounts:delete",e)}async function gf(n,e){return wr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Mu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SO(n,e=!1){const t=tn(n),s=await t.getIdToken(e),a=Zg(s);Te(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:Mu(Pm(a.auth_time)),issuedAtTime:Mu(Pm(a.iat)),expirationTime:Mu(Pm(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Pm(n){return Number(n)*1e3}function Zg(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Jh("JWT malformed, contained fewer than 3 sections"),null;try{const a=ff(t);return a?JSON.parse(a):(Jh("Failed to decode base64 JWT payload"),null)}catch(a){return Jh("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function KT(n){const e=Zg(n);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qu(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof zi&&AO(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function AO({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class RO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mu(this.lastLoginAt),this.creationTime=Mu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _f(n){var e;const t=n.auth,s=await n.getIdToken(),a=await qu(n,gf(t,{idToken:s}));Te(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?DA(l.providerUserInfo):[],d=bO(n.providerData,c),p=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),y=p?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new sg(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(n,T)}async function wO(n){const e=tn(n);await _f(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bO(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function DA(n){return n.map(e=>{var{providerId:t}=e,s=Qg(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function CO(n,e){const t=await IA(n,{},async()=>{const s=el({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await NA(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",CA.fetch()(c,{method:"POST",headers:d,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function IO(n,e){return wr(n,"POST","/v2/accounts:revokeToken",wa(n,e))}/**
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
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):KT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=KT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await CO(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new Mo;return s&&(Te(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Te(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Te(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return ps("not implemented")}}/**
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
 */function ir(n,e){Te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ai{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=Qg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new sg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await qu(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return SO(this,e)}reload(){return wO(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ai(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await _f(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(hr(this.auth));const e=await this.getIdToken();return await qu(this,TO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,d,p,g,y;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,D=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,I=(c=t.photoURL)!==null&&c!==void 0?c:void 0,H=(d=t.tenantId)!==null&&d!==void 0?d:void 0,B=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,Y=(g=t.createdAt)!==null&&g!==void 0?g:void 0,X=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:te,emailVerified:le,isAnonymous:ce,providerData:fe,stsTokenManager:k}=t;Te(te&&k,e,"internal-error");const w=Mo.fromJSON(this.name,k);Te(typeof te=="string",e,"internal-error"),ir(T,e.name),ir(S,e.name),Te(typeof le=="boolean",e,"internal-error"),Te(typeof ce=="boolean",e,"internal-error"),ir(D,e.name),ir(I,e.name),ir(H,e.name),ir(B,e.name),ir(Y,e.name),ir(X,e.name);const b=new ai({uid:te,auth:e,email:S,emailVerified:le,displayName:T,isAnonymous:ce,photoURL:I,phoneNumber:D,tenantId:H,stsTokenManager:w,createdAt:Y,lastLoginAt:X});return fe&&Array.isArray(fe)&&(b.providerData=fe.map(M=>Object.assign({},M))),B&&(b._redirectEventId=B),b}static async _fromIdTokenResponse(e,t,s=!1){const a=new Mo;a.updateFromServerResponse(t);const l=new ai({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await _f(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Te(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?DA(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new Mo;d.updateFromIdToken(s);const p=new ai({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new sg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
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
 */const YT=new Map;function ms(n){As(n instanceof Function,"Expected a class definition");let e=YT.get(n);return e?(As(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,YT.set(n,e),e)}/**
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
 */class OA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}OA.type="NONE";const QT=OA;/**
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
 */function ef(n,e,t){return`firebase:${n}:${e}:${t}`}class ko{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=ef(this.userKey,a.apiKey,l),this.fullPersistenceKey=ef("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await gf(this.auth,{idToken:e}).catch(()=>{});return t?ai._fromGetAccountInfoResponse(this.auth,t,e):null}return ai._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ko(ms(QT),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||ms(QT);const c=ef(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const S=await gf(e,{idToken:y}).catch(()=>{});if(!S)break;T=await ai._fromGetAccountInfoResponse(e,S,y)}else T=ai._fromJSON(e,y);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new ko(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new ko(l,e,s))}}/**
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
 */function $T(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(MA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(VA(e))return"Blackberry";if(UA(e))return"Webos";if(kA(e))return"Safari";if((e.includes("chrome/")||PA(e))&&!e.includes("edge/"))return"Chrome";if(LA(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function MA(n=dn()){return/firefox\//i.test(n)}function kA(n=dn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function PA(n=dn()){return/crios\//i.test(n)}function xA(n=dn()){return/iemobile/i.test(n)}function LA(n=dn()){return/android/i.test(n)}function VA(n=dn()){return/blackberry/i.test(n)}function UA(n=dn()){return/webos/i.test(n)}function Jg(n=dn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function NO(n=dn()){var e;return Jg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DO(){return UN()&&document.documentMode===10}function BA(n=dn()){return Jg(n)||LA(n)||UA(n)||VA(n)||/windows phone/i.test(n)||xA(n)}/**
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
 */function zA(n,e=[]){let t;switch(n){case"Browser":t=$T(dn());break;case"Worker":t=`${$T(dn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Rr}/${s}`}/**
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
 */class OO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function MO(n,e={}){return wr(n,"GET","/v2/passwordPolicy",wa(n,e))}/**
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
 */const kO=6;class PO{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:kO,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class xO{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new WT(this),this.idTokenSubscription=new WT(this),this.beforeStateQueue=new OO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ms(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await ko.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gf(this,{idToken:e}),s=await ai._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Sn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _f(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(hr(this));const t=e?tn(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(hr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ms(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MO(this),t=new PO(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new sc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await IO(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ms(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await ko.create(this,[ms(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&uO(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ba(n){return tn(n)}class WT{constructor(e){this.auth=e,this.observer=null,this.addObserver=$N(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LO(n){Wf=n}function FA(n){return Wf.loadJS(n)}function VO(){return Wf.recaptchaEnterpriseScript}function UO(){return Wf.gapiScript}function BO(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class zO{constructor(){this.enterprise=new FO}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class FO{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const HO="recaptcha-enterprise",HA="NO_RECAPTCHA";class jO{constructor(e){this.type=HO,this.auth=ba(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{EO(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new vO(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;GT(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(HA)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zO().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(d=>{if(!t&&GT(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=VO();p.length!==0&&(p+=d),FA(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function XT(n,e,t,s=!1,a=!1){const l=new jO(n);let c;if(a)c=HA;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function ZT(n,e,t,s,a){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await XT(n,e,t,t==="getOobCode");return s(n,c)}else return s(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await XT(n,e,t,t==="getOobCode");return s(n,d)}else return Promise.reject(c)})}/**
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
 */function qO(n,e){const t=Qf(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(mr(l,e??{}))return a;Xn(a,"already-initialized")}return t.initialize({options:e})}function GO(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ms);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function KO(n,e,t){const s=ba(n);Te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=jA(e),{host:c,port:d}=YO(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Te(mr(g,s.config.emulator)&&mr(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,Jo(c)?(Hg(`${l}//${c}${p}`),jg("Auth",!0)):QO()}function jA(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function YO(n){const e=jA(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:JT(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:JT(c)}}}function JT(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function QO(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class e_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ps("not implemented")}_getIdTokenResponse(e){return ps("not implemented")}_linkToIdToken(e,t){return ps("not implemented")}_getReauthenticationResolver(e){return ps("not implemented")}}async function $O(n,e){return wr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function WO(n,e){return $f(n,"POST","/v1/accounts:signInWithPassword",wa(n,e))}/**
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
 */async function XO(n,e){return $f(n,"POST","/v1/accounts:signInWithEmailLink",wa(n,e))}async function ZO(n,e){return $f(n,"POST","/v1/accounts:signInWithEmailLink",wa(n,e))}/**
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
 */class Gu extends e_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Gu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Gu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ZT(e,t,"signInWithPassword",WO);case"emailLink":return XO(e,{email:this._email,oobCode:this._password});default:Xn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ZT(e,s,"signUpPassword",$O);case"emailLink":return ZO(e,{idToken:t,email:this._email,oobCode:this._password});default:Xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Po(n,e){return $f(n,"POST","/v1/accounts:signInWithIdp",wa(n,e))}/**
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
 */const JO="http://localhost";class ga extends e_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ga(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=Qg(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new ga(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Po(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Po(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Po(e,t)}buildRequest(){const e={requestUri:JO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=el(t)}return e}}/**
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
 */function e2(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function t2(n){const e=wu(bu(n)).link,t=e?wu(bu(e)).deep_link_id:null,s=wu(bu(n)).deep_link_id;return(s?wu(bu(s)).link:null)||s||t||e||n}class t_{constructor(e){var t,s,a,l,c,d;const p=wu(bu(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,y=(s=p.oobCode)!==null&&s!==void 0?s:null,T=e2((a=p.mode)!==null&&a!==void 0?a:null);Te(g&&y&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=y,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=t2(e);try{return new t_(t)}catch{return null}}}/**
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
 */class tl{constructor(){this.providerId=tl.PROVIDER_ID}static credential(e,t){return Gu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=t_.parseLink(t);return Te(s,"argument-error"),Gu._fromEmailAndCode(e,s.code,s.tenantId)}}tl.PROVIDER_ID="password";tl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";tl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class n_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ac extends n_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends ac{constructor(){super("facebook.com")}static credential(e){return ga._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class rr extends ac{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ga._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return rr.credential(t,s)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
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
 */class ar extends ac{constructor(){super("github.com")}static credential(e){return ga._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
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
 */class or extends ac{constructor(){super("twitter.com")}static credential(e,t){return ga._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return or.credential(t,s)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
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
 */class Bo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await ai._fromIdTokenResponse(e,s,a),c=e0(s);return new Bo({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=e0(s);return new Bo({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function e0(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class yf extends zi{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,yf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new yf(e,t,s,a)}}function qA(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?yf._fromErrorAndOperation(n,l,e,s):l})}async function n2(n,e,t=!1){const s=await qu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Bo._forOperation(n,"link",s)}/**
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
 */async function i2(n,e,t=!1){const{auth:s}=n;if(Sn(s.app))return Promise.reject(hr(s));const a="reauthenticate";try{const l=await qu(n,qA(s,a,e,n),t);Te(l.idToken,s,"internal-error");const c=Zg(l.idToken);Te(c,s,"internal-error");const{sub:d}=c;return Te(n.uid===d,s,"user-mismatch"),Bo._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Xn(s,"user-mismatch"),l}}/**
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
 */async function GA(n,e,t=!1){if(Sn(n.app))return Promise.reject(hr(n));const s="signIn",a=await qA(n,s,e),l=await Bo._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}async function s2(n,e){return GA(ba(n),e)}/**
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
 */async function r2(n){const e=ba(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function uU(n,e,t){return Sn(n.app)?Promise.reject(hr(n)):s2(tn(n),tl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&r2(n),s})}function a2(n,e,t,s){return tn(n).onIdTokenChanged(e,t,s)}function o2(n,e,t){return tn(n).beforeAuthStateChanged(e,t)}function l2(n,e,t,s){return tn(n).onAuthStateChanged(e,t,s)}const vf="__sak";/**
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
 */class KA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vf,"1"),this.storage.removeItem(vf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const u2=1e3,c2=10;class YA extends KA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=BA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);DO()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,c2):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},u2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}YA.type="LOCAL";const h2=YA;/**
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
 */class QA extends KA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}QA.type="SESSION";const $A=QA;/**
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
 */function f2(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Xf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Xf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await f2(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xf.receivers=[];/**
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
 */function i_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class d2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=i_("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const S=T;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Mi(){return window}function p2(n){Mi().location.href=n}/**
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
 */function WA(){return typeof Mi().WorkerGlobalScope<"u"&&typeof Mi().importScripts=="function"}async function m2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function g2(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function _2(){return WA()?self:null}/**
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
 */const XA="firebaseLocalStorageDb",y2=1,Ef="firebaseLocalStorage",ZA="fbase_key";class oc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zf(n,e){return n.transaction([Ef],e?"readwrite":"readonly").objectStore(Ef)}function v2(){const n=indexedDB.deleteDatabase(XA);return new oc(n).toPromise()}function rg(){const n=indexedDB.open(XA,y2);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Ef,{keyPath:ZA})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Ef)?e(s):(s.close(),await v2(),e(await rg()))})})}async function t0(n,e,t){const s=Zf(n,!0).put({[ZA]:e,value:t});return new oc(s).toPromise()}async function E2(n,e){const t=Zf(n,!1).get(e),s=await new oc(t).toPromise();return s===void 0?null:s.value}function n0(n,e){const t=Zf(n,!0).delete(e);return new oc(t).toPromise()}const T2=800,S2=3;class JA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>S2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return WA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xf._getInstance(_2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await m2(),!this.activeServiceWorker)return;this.sender=new d2(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||g2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rg();return await t0(e,vf,"1"),await n0(e,vf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>t0(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>E2(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>n0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Zf(a,!1).getAll();return new oc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),T2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}JA.type="LOCAL";const A2=JA;new rc(3e4,6e4);/**
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
 */function eR(n,e){return e?ms(e):(Te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class s_ extends e_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Po(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Po(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Po(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function R2(n){return GA(n.auth,new s_(n),n.bypassAuthState)}function w2(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),i2(t,new s_(n),n.bypassAuthState)}async function b2(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),n2(t,new s_(n),n.bypassAuthState)}/**
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
 */class tR{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return R2;case"linkViaPopup":case"linkViaRedirect":return b2;case"reauthViaPopup":case"reauthViaRedirect":return w2;default:Xn(this.auth,"internal-error")}}resolve(e){As(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){As(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const C2=new rc(2e3,1e4);async function cU(n,e,t){if(Sn(n.app))return Promise.reject(ci(n,"operation-not-supported-in-this-environment"));const s=ba(n);cO(n,e,n_);const a=eR(s,t);return new da(s,"signInViaPopup",e,a).executeNotNull()}class da extends tR{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,da.currentPopupAction&&da.currentPopupAction.cancel(),da.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){As(this.filter.length===1,"Popup operations only handle one event");const e=i_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ci(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ci(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,da.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ci(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,C2.get())};e()}}da.currentPopupAction=null;/**
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
 */const I2="pendingRedirect",tf=new Map;class N2 extends tR{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=tf.get(this.auth._key());if(!e){try{const s=await D2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}tf.set(this.auth._key(),e)}return this.bypassAuthState||tf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function D2(n,e){const t=k2(e),s=M2(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function O2(n,e){tf.set(n._key(),e)}function M2(n){return ms(n._redirectPersistence)}function k2(n){return ef(I2,n.config.apiKey,n.name)}async function P2(n,e,t=!1){if(Sn(n.app))return Promise.reject(hr(n));const s=ba(n),a=eR(s,e),c=await new N2(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const x2=10*60*1e3;class L2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!V2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!nR(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(ci(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=x2&&this.cachedEventUids.clear(),this.cachedEventUids.has(i0(e))}saveEventToCache(e){this.cachedEventUids.add(i0(e)),this.lastProcessedEventTime=Date.now()}}function i0(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function nR({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function V2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nR(n);default:return!1}}/**
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
 */async function U2(n,e={}){return wr(n,"GET","/v1/projects",e)}/**
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
 */const B2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,z2=/^https?/;async function F2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await U2(n);for(const t of e)try{if(H2(t))return}catch{}Xn(n,"unauthorized-domain")}function H2(n){const e=ig(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!z2.test(t))return!1;if(B2.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const j2=new rc(3e4,6e4);function s0(){const n=Mi().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function q2(n){return new Promise((e,t)=>{var s,a,l;function c(){s0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{s0(),t(ci(n,"network-request-failed"))},timeout:j2.get()})}if(!((a=(s=Mi().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Mi().gapi)===null||l===void 0)&&l.load)c();else{const d=BO("iframefcb");return Mi()[d]=()=>{gapi.load?c():t(ci(n,"network-request-failed"))},FA(`${UO()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw nf=null,e})}let nf=null;function G2(n){return nf=nf||q2(n),nf}/**
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
 */const K2=new rc(5e3,15e3),Y2="__/auth/iframe",Q2="emulator/auth/iframe",$2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},W2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function X2(n){const e=n.config;Te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xg(e,Q2):`https://${n.config.authDomain}/${Y2}`,s={apiKey:e.apiKey,appName:n.name,v:Rr},a=W2.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${el(s).slice(1)}`}async function Z2(n){const e=await G2(n),t=Mi().gapi;return Te(t,n,"internal-error"),e.open({where:document.body,url:X2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$2,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=ci(n,"network-request-failed"),d=Mi().setTimeout(()=>{l(c)},K2.get());function p(){Mi().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const J2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eM=500,tM=600,nM="_blank",iM="http://localhost";class r0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sM(n,e,t,s=eM,a=tM){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p=Object.assign(Object.assign({},J2),{width:s.toString(),height:a.toString(),top:l,left:c}),g=dn().toLowerCase();t&&(d=PA(g)?nM:t),MA(g)&&(e=e||iM,p.scrollbars="yes");const y=Object.entries(p).reduce((S,[D,I])=>`${S}${D}=${I},`,"");if(NO(g)&&d!=="_self")return rM(e||"",d),new r0(null);const T=window.open(e||"",d,y);Te(T,n,"popup-blocked");try{T.focus()}catch{}return new r0(T)}function rM(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const aM="__/auth/handler",oM="emulator/auth/handler",lM=encodeURIComponent("fac");async function a0(n,e,t,s,a,l){Te(n.config.authDomain,n,"auth-domain-config-required"),Te(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Rr,eventId:a};if(e instanceof n_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Xm(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof ac){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),g=p?`#${lM}=${encodeURIComponent(p)}`:"";return`${uM(n)}?${el(d).slice(1)}${g}`}function uM({config:n}){return n.emulator?Xg(n,oM):`https://${n.authDomain}/${aM}`}/**
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
 */const xm="webStorageSupport";class cM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$A,this._completeRedirectFn=P2,this._overrideRedirectResult=O2}async _openPopup(e,t,s,a){var l;As((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await a0(e,t,s,ig(),a);return sM(e,c,i_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await a0(e,t,s,ig(),a);return p2(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(As(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Z2(e),s=new L2(e);return t.register("authEvent",a=>(Te(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xm,{type:xm},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[xm];c!==void 0&&t(!!c),Xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=F2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return BA()||kA()||Jg()}}const hM=cM;var o0="@firebase/auth",l0="1.10.6";/**
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
 */class fM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dM(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pM(n){gr(new Ts("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Te(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zA(n)},g=new xO(s,a,l,p);return GO(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),gr(new Ts("auth-internal",e=>{const t=ba(e.getProvider("auth").getImmediate());return(s=>new fM(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(o0,l0,dM(n)),$n(o0,l0,"esm2017")}/**
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
 */const mM=5*60,gM=_A("authIdTokenMaxAge")||mM;let u0=null;const _M=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>gM)return;const a=t==null?void 0:t.token;u0!==a&&(u0=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function yM(n=Yg()){const e=Qf(n,"auth");if(e.isInitialized())return e.getImmediate();const t=qO(n,{popupRedirectResolver:hM,persistence:[A2,h2,$A]}),s=_A("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=_M(l.toString());o2(t,c,()=>c(t.currentUser)),a2(t,d=>c(d))}}const a=pA("auth");return a&&KO(t,`http://${a}`),t}function vM(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}LO({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=ci("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",vM().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pM("Browser");var EM="firebase",TM="11.8.1";/**
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
 */$n(EM,TM,"app");var c0={};const h0="@firebase/database",f0="1.0.19";/**
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
 */let iR="";function SM(n){iR=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Jt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Hu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Cs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new AM(e)}}catch{}return new RM},pa=sR("localStorage"),wM=sR("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new Yf("@firebase/database"),bM=function(){let n=1;return function(){return n++}}(),rR=function(n){const e=JN(n),t=new QN;t.update(e);const s=t.digest();return zg.encodeByteArray(s)},lc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=lc.apply(null,s):typeof s=="object"?e+=Jt(s):e+=s,e+=" "}return e};let ku=null,d0=!0;const CM=function(n,e){oe(!0,"Can't turn on custom loggers persistently."),xo.logLevel=Pe.VERBOSE,ku=xo.log.bind(xo)},un=function(...n){if(d0===!0&&(d0=!1,ku===null&&wM.get("logging_enabled")===!0&&CM()),ku){const e=lc.apply(null,n);ku(e)}},uc=function(n){return function(...e){un(n,...e)}},ag=function(...n){const e="FIREBASE INTERNAL ERROR: "+lc(...n);xo.error(e)},_a=function(...n){const e=`FIREBASE FATAL ERROR: ${lc(...n)}`;throw xo.error(e),new Error(e)},Pn=function(...n){const e="FIREBASE WARNING: "+lc(...n);xo.warn(e)},IM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},aR=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},NM=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},zo="[MIN_NAME]",ya="[MAX_NAME]",nl=function(n,e){if(n===e)return 0;if(n===zo||e===ya)return-1;if(e===zo||n===ya)return 1;{const t=p0(n),s=p0(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},DM=function(n,e){return n===e?0:n<e?-1:1},Tu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Jt(e))},r_=function(n){if(typeof n!="object"||n===null)return Jt(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Jt(e[s]),t+=":",t+=r_(n[e[s]]);return t+="}",t},oR=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function Zn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const lR=function(n){oe(!aR(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let T="";for(p=0;p<64;p+=8){let S=parseInt(y.substr(p,8),2).toString(16);S.length===1&&(S="0"+S),T=T+S}return T.toLowerCase()},OM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},MM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},kM=new RegExp("^-?(0*)\\d{1,10}$"),PM=-2147483648,xM=2147483647,p0=function(n){if(kM.test(n)){const e=Number(n);if(e>=PM&&e<=xM)return e}return null},cc=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Pn("Exception was thrown by user callback.",t),e},Math.floor(0))}},LM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class VM{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Sn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Pn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(un("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="5",uR="v",cR="s",hR="r",fR="f",dR=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pR="ls",mR="p",og="ac",gR="websocket",_R="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pa.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function zM(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function yR(n,e,t){oe(typeof e=="string","typeof type must == string"),oe(typeof t=="object","typeof params must == object");let s;if(e===gR)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===_R)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zM(n)&&(t.ns=n.namespace);const a=[];return Zn(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(){this.counters_={}}incrementCounter(e,t=1){Cs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return CN(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm={},Vm={};function o_(n){const e=n.toString();return Lm[e]||(Lm[e]=new FM),Lm[e]}function HM(n,e){const t=n.toString();return Vm[t]||(Vm[t]=e()),Vm[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&cc(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="start",qM="close",GM="pLPCommand",KM="pRTLPCB",vR="id",ER="pw",TR="ser",YM="cb",QM="seg",$M="ts",WM="d",XM="dframe",SR=1870,AR=30,ZM=SR-AR,JM=25e3,ek=3e4;class Do{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=uc(e),this.stats_=o_(t),this.urlFn=p=>(this.appCheckToken&&(p[og]=this.appCheckToken),yR(t,_R,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new jM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ek)),NM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new l_((...l)=>{const[c,d,p,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===m0)this.id=d,this.password=p;else if(c===qM)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[m0]="t",s[TR]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[YM]=this.scriptTagHolder.uniqueCallbackIdentifier),s[uR]=a_,this.transportSessionId&&(s[cR]=this.transportSessionId),this.lastSessionId&&(s[pR]=this.lastSessionId),this.applicationId&&(s[mR]=this.applicationId),this.appCheckToken&&(s[og]=this.appCheckToken),typeof location<"u"&&location.hostname&&dR.test(location.hostname)&&(s[hR]=fR);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Do.forceAllow_=!0}static forceDisallow(){Do.forceDisallow_=!0}static isAvailable(){return Do.forceAllow_?!0:!Do.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!OM()&&!MM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=fA(t),a=oR(s,ZM);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[XM]="t",s[vR]=e,s[ER]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Jt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class l_{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bM(),window[GM+this.uniqueCallbackIdentifier]=e,window[KM+this.uniqueCallbackIdentifier]=t,this.myIFrame=l_.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){un("frame writing exception"),d.stack&&un(d.stack),un(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||un("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[vR]=this.myID,e[ER]=this.myPW,e[TR]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+AR+s.length<=SR;){const c=this.pendingSegs.shift();s=s+"&"+QM+a+"="+c.seg+"&"+$M+a+"="+c.ts+"&"+WM+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(JM)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{un("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=16384,nk=45e3;let Tf=null;typeof MozWebSocket<"u"?Tf=MozWebSocket:typeof WebSocket<"u"&&(Tf=WebSocket);class ri{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=uc(this.connId),this.stats_=o_(t),this.connURL=ri.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[uR]=a_,typeof location<"u"&&location.hostname&&dR.test(location.hostname)&&(c[hR]=fR),t&&(c[cR]=t),s&&(c[pR]=s),a&&(c[og]=a),l&&(c[mR]=l),yR(e,gR,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pa.set("previous_websocket_failure",!0);try{let s;BN(),this.mySock=new Tf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){ri.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Tf!==null&&!ri.forceDisallow_}static previouslyFailed(){return pa.isInMemoryStorage||pa.get("previous_websocket_failure")===!0}markConnectionHealthy(){pa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Hu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(oe(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=oR(t,tk);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ri.responsesRequiredToBeHealthy=2;ri.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{static get ALL_TRANSPORTS(){return[Do,ri]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ri&&ri.isAvailable();let s=t&&!ri.previouslyFailed();if(e.webSocketOnly&&(t||Pn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ri];else{const a=this.transports_=[];for(const l of Ku.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Ku.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ku.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=6e4,sk=5e3,rk=10*1024,ak=100*1024,Um="t",g0="d",ok="s",_0="r",lk="e",y0="o",v0="a",E0="n",T0="p",uk="h";class ck{constructor(e,t,s,a,l,c,d,p,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=uc("c:"+this.id+":"),this.transportManager_=new Ku(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Pu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ak?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Um in e){const t=e[Um];t===v0?this.upgradeIfSecondaryHealthy_():t===_0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===y0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Tu("t",e),s=Tu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:T0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:v0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:E0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Tu("t",e),s=Tu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Tu(Um,e);if(g0 in e){const s=e[g0];if(t===uk){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===E0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===ok?this.onConnectionShutdown_(s):t===_0?this.onReset_(s):t===lk?ag("Server Error: "+s):t===y0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ag("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),a_!==s&&Pn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Pu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ik))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:T0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.allowedEvents_=e,this.listeners_={},oe(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){oe(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends wR{static getInstance(){return new Sf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return oe(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=32,A0=768;class ut{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function it(){return new ut("")}function Fe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function _r(n){return n.pieces_.length-n.pieceNum_}function lt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ut(n.pieces_,e)}function bR(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function hk(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function CR(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function IR(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ut(e,0)}function Gt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof ut)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new ut(t,0)}function Le(n){return n.pieceNum_>=n.pieces_.length}function Qn(n,e){const t=Fe(n),s=Fe(e);if(t===null)return e;if(t===s)return Qn(lt(n),lt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function NR(n,e){if(_r(n)!==_r(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function oi(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(_r(n)>_r(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class fk{constructor(e,t){this.errorPrefix_=t,this.parts_=CR(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Kf(this.parts_[s]);DR(this)}}function dk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Kf(e),DR(n)}function pk(n){const e=n.parts_.pop();n.byteLength_-=Kf(e),n.parts_.length>0&&(n.byteLength_-=1)}function DR(n){if(n.byteLength_>A0)throw new Error(n.errorPrefix_+"has a key path longer than "+A0+" bytes ("+n.byteLength_+").");if(n.parts_.length>S0)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+S0+") or object contains a cycle "+ha(n))}function ha(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_ extends wR{static getInstance(){return new u_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return oe(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=1e3,mk=60*5*1e3,R0=30*1e3,gk=1.3,_k=3e4,yk="server_kill",w0=3;class ys extends RR{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=ys.nextPersistentConnectionId_++,this.log_=uc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Su,this.maxReconnectDelay_=mk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");u_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(Jt(l)),oe(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Fg,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),oe(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;ys.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Cs(e,"w")){const s=Uo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Pn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||YN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=R0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=KN(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Jt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ag("Unrecognized action received from server: "+Jt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){oe(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Su,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Su,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_k&&(this.reconnectDelay_=Su),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+ys.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){oe(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,S]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?un("getToken() completed but was canceled"):(un("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=S&&S.token,d=new ck(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,D=>{Pn(D+" ("+this.repoInfo_.toString()+")"),this.interrupt(yk)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Pn(T),p())}}}interrupt(e){un("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){un("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xm(this.interruptReasons_)&&(this.reconnectDelay_=Su,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>r_(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new ut(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){un("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=w0&&(this.reconnectDelay_=R0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){un("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=w0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+iR.replace(/\./g,"-")]=1,qg()?e["framework.cordova"]=1:vA()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sf.getInstance().currentlyOnline();return Xm(this.interruptReasons_)&&e}}ys.nextPersistentConnectionId_=0;ys.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new He(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new He(zo,e),a=new He(zo,t);return this.compare(s,a)!==0}minPost(){return He.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jh;class OR extends Jf{static get __EMPTY_NODE(){return jh}static set __EMPTY_NODE(e){jh=e}compare(e,t){return nl(e.name,t.name)}isDefinedOn(e){throw Zo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return He.MIN}maxPost(){return new He(ya,jh)}makePost(e,t){return oe(typeof e=="string","KeyIndex indexValue must always be a string."),new He(e,jh)}toString(){return".key"}}const Lo=new OR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qh=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Mn=class Cu{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Cu.RED,this.left=a??Di.EMPTY_NODE,this.right=l??Di.EMPTY_NODE}copy(e,t,s,a,l){return new Cu(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Di.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Di.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Cu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Cu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Mn.RED=!0;Mn.BLACK=!1;class vk{copy(e,t,s,a,l){return this}insert(e,t,s){return new Mn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Di=class sf{constructor(e,t=sf.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new sf(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Mn.BLACK,null,null))}remove(e){return new sf(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Mn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qh(this.root_,null,this.comparator_,!0,e)}};Di.EMPTY_NODE=new vk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(n,e){return nl(n.name,e.name)}function c_(n,e){return nl(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lg;function Tk(n){lg=n}const MR=function(n){return typeof n=="number"?"number:"+lR(n):"string:"+n},kR=function(n){if(n.isLeafNode()){const e=n.val();oe(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Cs(e,".sv"),"Priority must be a string or number.")}else oe(n===lg||n.isEmpty(),"priority of unexpected type.");oe(n===lg||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b0;class jt{static set __childrenNodeConstructor(e){b0=e}static get __childrenNodeConstructor(){return b0}constructor(e,t=jt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,oe(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),kR(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new jt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:jt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Le(e)?this:Fe(e)===".priority"?this.priorityNode_:jt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:jt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Fe(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(oe(s!==".priority"||_r(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,jt.__childrenNodeConstructor.EMPTY_NODE.updateChild(lt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+MR(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=lR(this.value_):e+=this.value_,this.lazyHash_=rR(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===jt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof jt.__childrenNodeConstructor?-1:(oe(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=jt.VALUE_TYPE_ORDER.indexOf(t),l=jt.VALUE_TYPE_ORDER.indexOf(s);return oe(a>=0,"Unknown leaf type: "+t),oe(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}jt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PR,xR;function Sk(n){PR=n}function Ak(n){xR=n}class Rk extends Jf{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?nl(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return He.MIN}maxPost(){return new He(ya,new jt("[PRIORITY-POST]",xR))}makePost(e,t){const s=PR(e);return new He(t,new jt("[PRIORITY-POST]",s))}toString(){return".priority"}}const fn=new Rk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=Math.log(2);class bk{constructor(e){const t=l=>parseInt(Math.log(l)/wk,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Af=function(n,e,t,s){n.sort(e);const a=function(p,g){const y=g-p;let T,S;if(y===0)return null;if(y===1)return T=n[p],S=t?t(T):T,new Mn(S,T.node,Mn.BLACK,null,null);{const D=parseInt(y/2,10)+p,I=a(p,D),H=a(D+1,g);return T=n[D],S=t?t(T):T,new Mn(S,T.node,Mn.BLACK,I,H)}},l=function(p){let g=null,y=null,T=n.length;const S=function(I,H){const B=T-I,Y=T;T-=I;const X=a(B+1,Y),te=n[B],le=t?t(te):te;D(new Mn(le,te.node,H,null,X))},D=function(I){g?(g.left=I,g=I):(y=I,g=I)};for(let I=0;I<p.count;++I){const H=p.nextBitIsOne(),B=Math.pow(2,p.count-(I+1));H?S(B,Mn.BLACK):(S(B,Mn.BLACK),S(B,Mn.RED))}return y},c=new bk(n.length),d=l(c);return new Di(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bm;const wo={};class gs{static get Default(){return oe(wo&&fn,"ChildrenNode.ts has not been loaded"),Bm=Bm||new gs({".priority":wo},{".priority":fn}),Bm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Uo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Di?t:null}hasIndex(e){return Cs(this.indexSet_,e.toString())}addIndex(e,t){oe(e!==Lo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(He.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=Af(s,e.getCompare()):d=wo;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const y=Object.assign({},this.indexes_);return y[p]=d,new gs(y,g)}addToIndexes(e,t){const s=df(this.indexes_,(a,l)=>{const c=Uo(this.indexSet_,l);if(oe(c,"Missing index implementation for "+l),a===wo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(He.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),Af(d,c.getCompare())}else return wo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new He(e.name,d))),p.insert(e,e.node)}});return new gs(s,this.indexSet_)}removeFromIndexes(e,t){const s=df(this.indexes_,a=>{if(a===wo)return a;{const l=t.get(e.name);return l?a.remove(new He(e.name,l)):a}});return new gs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Au;class Qe{static get EMPTY_NODE(){return Au||(Au=new Qe(new Di(c_),null,gs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&kR(this.priorityNode_),this.children_.isEmpty()&&oe(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Au}updatePriority(e){return this.children_.isEmpty()?this:new Qe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Au:t}}getChild(e){const t=Fe(e);return t===null?this:this.getImmediateChild(t).getChild(lt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(oe(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new He(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Au:this.priorityNode_;return new Qe(a,c,l)}}updateChild(e,t){const s=Fe(e);if(s===null)return t;{oe(Fe(e)!==".priority"||_r(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(lt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(fn,(c,d)=>{t[c]=d.val(e),s++,l&&Qe.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+MR(this.getPriority().val())+":"),this.forEachChild(fn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":rR(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new He(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new He(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new He(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,He.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,He.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===hc?-1:0}withIndex(e){if(e===Lo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Qe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Lo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(fn),a=t.getIterator(fn);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Lo?null:this.indexMap_.get(e.toString())}}Qe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ck extends Qe{constructor(){super(new Di(c_),Qe.EMPTY_NODE,gs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Qe.EMPTY_NODE}isEmpty(){return!1}}const hc=new Ck;Object.defineProperties(He,{MIN:{value:new He(zo,Qe.EMPTY_NODE)},MAX:{value:new He(ya,hc)}});OR.__EMPTY_NODE=Qe.EMPTY_NODE;jt.__childrenNodeConstructor=Qe;Tk(hc);Ak(hc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=!0;function cn(n,e=null){if(n===null)return Qe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),oe(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new jt(t,cn(e))}if(!(n instanceof Array)&&Ik){const t=[];let s=!1;if(Zn(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=cn(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new He(c,p)))}}),t.length===0)return Qe.EMPTY_NODE;const l=Af(t,Ek,c=>c.name,c_);if(s){const c=Af(t,fn.getCompare());return new Qe(l,cn(e),new gs({".priority":c},{".priority":fn}))}else return new Qe(l,cn(e),gs.Default)}else{let t=Qe.EMPTY_NODE;return Zn(n,(s,a)=>{if(Cs(n,s)&&s.substring(0,1)!=="."){const l=cn(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(cn(e))}}Sk(cn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk extends Jf{constructor(e){super(),this.indexPath_=e,oe(!Le(e)&&Fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?nl(e.name,t.name):l}makePost(e,t){const s=cn(e),a=Qe.EMPTY_NODE.updateChild(this.indexPath_,s);return new He(t,a)}maxPost(){const e=Qe.EMPTY_NODE.updateChild(this.indexPath_,hc);return new He(ya,e)}toString(){return CR(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk extends Jf{compare(e,t){const s=e.node.compareTo(t.node);return s===0?nl(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return He.MIN}maxPost(){return He.MAX}makePost(e,t){const s=cn(e);return new He(t,s)}toString(){return".value"}}const Ok=new Dk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(n){return{type:"value",snapshotNode:n}}function kk(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Pk(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function C0(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function xk(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return oe(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return oe(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zo}hasEnd(){return this.endSet_}getIndexEndValue(){return oe(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return oe(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ya}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return oe(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fn}copy(){const e=new h_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function I0(n){const e={};if(n.isDefault())return e;let t;if(n.index_===fn?t="$priority":n.index_===Ok?t="$value":n.index_===Lo?t="$key":(oe(n.index_ instanceof Nk,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Jt(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Jt(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Jt(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Jt(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Jt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function N0(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==fn&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf extends RR{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(oe(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=uc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=Rf.getListenId_(e,s),d={};this.listens_[c]=d;const p=I0(e._queryParams);this.restRequest_(l+".json",p,(g,y)=>{let T=y;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),Uo(this.listens_,c)===d){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",a(S,null)}})}unlisten(e,t){const s=Rf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=I0(e._queryParams),s=e._path.toString(),a=new Fg;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+el(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=Hu(d.responseText)}catch{Pn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&Pn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(){this.rootNode_=Qe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(){return{value:null,children:new Map}}function LR(n,e,t){if(Le(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Fe(e);n.children.has(s)||n.children.set(s,wf());const a=n.children.get(s);e=lt(e),LR(a,e,t)}}function ug(n,e,t){n.value!==null?t(e,n.value):Vk(n,(s,a)=>{const l=new ut(e.toString()+"/"+s);ug(a,l,t)})}function Vk(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Zn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=10*1e3,Bk=30*1e3,zk=5*60*1e3;class Fk{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Uk(e);const s=D0+(Bk-D0)*Math.random();Pu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Zn(e,(a,l)=>{l>0&&Cs(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Pu(this.reportStats_.bind(this),Math.floor(Math.random()*2*zk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Oi||(Oi={}));function VR(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function UR(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function BR(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Oi.ACK_USER_WRITE,this.source=VR()}operationForChild(e){if(Le(this.path)){if(this.affectedTree.value!=null)return oe(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ut(e));return new bf(it(),t,this.revert)}}else return oe(Fe(this.path)===e,"operationForChild called for unrelated child."),new bf(lt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Oi.OVERWRITE}operationForChild(e){return Le(this.path)?new va(this.source,it(),this.snap.getImmediateChild(e)):new va(this.source,lt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Oi.MERGE}operationForChild(e){if(Le(this.path)){const t=this.children.subtree(new ut(e));return t.isEmpty()?null:t.value?new va(this.source,it(),t.value):new Yu(this.source,it(),t)}else return oe(Fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yu(this.source,lt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Le(e))return this.isFullyInitialized()&&!this.filtered_;const t=Fe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Hk(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(xk(c.childName,c.snapshotNode))}),Ru(n,a,"child_removed",e,s,t),Ru(n,a,"child_added",e,s,t),Ru(n,a,"child_moved",l,s,t),Ru(n,a,"child_changed",e,s,t),Ru(n,a,"value",e,s,t),a}function Ru(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>qk(n,d,p)),c.forEach(d=>{const p=jk(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function jk(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function qk(n,e,t){if(e.childName==null||t.childName==null)throw Zo("Should only compare child_ events.");const s=new He(e.childName,e.snapshotNode),a=new He(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(n,e){return{eventCache:n,serverCache:e}}function xu(n,e,t,s){return zR(new f_(e,t,s),n.serverCache)}function FR(n,e,t,s){return zR(n.eventCache,new f_(e,t,s))}function cg(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ea(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zm;const Gk=()=>(zm||(zm=new Di(DM)),zm);class ot{static fromObject(e){let t=new ot(null);return Zn(e,(s,a)=>{t=t.set(new ut(s),a)}),t}constructor(e,t=Gk()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:it(),value:this.value};if(Le(e))return null;{const s=Fe(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(lt(e),t);return l!=null?{path:Gt(new ut(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Le(e))return this;{const t=Fe(e),s=this.children.get(t);return s!==null?s.subtree(lt(e)):new ot(null)}}set(e,t){if(Le(e))return new ot(t,this.children);{const s=Fe(e),l=(this.children.get(s)||new ot(null)).set(lt(e),t),c=this.children.insert(s,l);return new ot(this.value,c)}}remove(e){if(Le(e))return this.children.isEmpty()?new ot(null):new ot(null,this.children);{const t=Fe(e),s=this.children.get(t);if(s){const a=s.remove(lt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ot(null):new ot(this.value,l)}else return this}}get(e){if(Le(e))return this.value;{const t=Fe(e),s=this.children.get(t);return s?s.get(lt(e)):null}}setTree(e,t){if(Le(e))return t;{const s=Fe(e),l=(this.children.get(s)||new ot(null)).setTree(lt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new ot(this.value,c)}}fold(e){return this.fold_(it(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Gt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,it(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Le(e))return null;{const l=Fe(e),c=this.children.get(l);return c?c.findOnPath_(lt(e),Gt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,it(),t)}foreachOnPath_(e,t,s){if(Le(e))return this;{this.value&&s(t,this.value);const a=Fe(e),l=this.children.get(a);return l?l.foreachOnPath_(lt(e),Gt(t,a),s):new ot(null)}}foreach(e){this.foreach_(it(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Gt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.writeTree_=e}static empty(){return new hi(new ot(null))}}function Lu(n,e,t){if(Le(e))return new hi(new ot(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=Qn(a,e);return l=l.updateChild(c,t),new hi(n.writeTree_.set(a,l))}else{const a=new ot(t),l=n.writeTree_.setTree(e,a);return new hi(l)}}}function O0(n,e,t){let s=n;return Zn(t,(a,l)=>{s=Lu(s,Gt(e,a),l)}),s}function M0(n,e){if(Le(e))return hi.empty();{const t=n.writeTree_.setTree(e,new ot(null));return new hi(t)}}function hg(n,e){return Ca(n,e)!=null}function Ca(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Qn(t.path,e)):null}function k0(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(fn,(s,a)=>{e.push(new He(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new He(s,a.value))}),e}function fr(n,e){if(Le(e))return n;{const t=Ca(n,e);return t!=null?new hi(new ot(t)):new hi(n.writeTree_.subtree(e))}}function fg(n){return n.writeTree_.isEmpty()}function Fo(n,e){return HR(it(),n.writeTree_,e)}function HR(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(oe(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=HR(Gt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Gt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(n,e){return QR(e,n)}function Kk(n,e,t,s,a){oe(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=Lu(n.visibleWrites,e,t)),n.lastWriteId=s}function Yk(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Qk(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);oe(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&$k(d,s.path)?a=!1:oi(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return Wk(n),!0;if(s.snap)n.visibleWrites=M0(n.visibleWrites,s.path);else{const d=s.children;Zn(d,p=>{n.visibleWrites=M0(n.visibleWrites,Gt(s.path,p))})}return!0}else return!1}function $k(n,e){if(n.snap)return oi(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&oi(Gt(n.path,t),e))return!0;return!1}function Wk(n){n.visibleWrites=qR(n.allWrites,Xk,it()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Xk(n){return n.visible}function qR(n,e,t){let s=hi.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)oi(t,c)?(d=Qn(t,c),s=Lu(s,d,l.snap)):oi(c,t)&&(d=Qn(c,t),s=Lu(s,it(),l.snap.getChild(d)));else if(l.children){if(oi(t,c))d=Qn(t,c),s=O0(s,d,l.children);else if(oi(c,t))if(d=Qn(c,t),Le(d))s=O0(s,it(),l.children);else{const p=Uo(l.children,Fe(d));if(p){const g=p.getChild(lt(d));s=Lu(s,it(),g)}}}else throw Zo("WriteRecord should have .snap or .children")}}return s}function GR(n,e,t,s,a){if(!s&&!a){const l=Ca(n.visibleWrites,e);if(l!=null)return l;{const c=fr(n.visibleWrites,e);if(fg(c))return t;if(t==null&&!hg(c,it()))return null;{const d=t||Qe.EMPTY_NODE;return Fo(c,d)}}}else{const l=fr(n.visibleWrites,e);if(!a&&fg(l))return t;if(!a&&t==null&&!hg(l,it()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(oi(g.path,e)||oi(e,g.path))},d=qR(n.allWrites,c,e),p=t||Qe.EMPTY_NODE;return Fo(d,p)}}}function Zk(n,e,t){let s=Qe.EMPTY_NODE;const a=Ca(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(fn,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=fr(n.visibleWrites,e);return t.forEachChild(fn,(c,d)=>{const p=Fo(fr(l,new ut(c)),d);s=s.updateImmediateChild(c,p)}),k0(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=fr(n.visibleWrites,e);return k0(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function Jk(n,e,t,s,a){oe(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Gt(e,t);if(hg(n.visibleWrites,l))return null;{const c=fr(n.visibleWrites,l);return fg(c)?a.getChild(t):Fo(c,a.getChild(t))}}function eP(n,e,t,s){const a=Gt(e,t),l=Ca(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=fr(n.visibleWrites,a);return Fo(c,s.getNode().getImmediateChild(t))}else return null}function tP(n,e){return Ca(n.visibleWrites,e)}function nP(n,e,t,s,a,l,c){let d;const p=fr(n.visibleWrites,e),g=Ca(p,it());if(g!=null)d=g;else if(t!=null)d=Fo(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],T=c.getCompare(),S=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let D=S.getNext();for(;D&&y.length<a;)T(D,s)!==0&&y.push(D),D=S.getNext();return y}else return[]}function iP(){return{visibleWrites:hi.empty(),allWrites:[],lastWriteId:-1}}function dg(n,e,t,s){return GR(n.writeTree,n.treePath,e,t,s)}function KR(n,e){return Zk(n.writeTree,n.treePath,e)}function P0(n,e,t,s){return Jk(n.writeTree,n.treePath,e,t,s)}function Cf(n,e){return tP(n.writeTree,Gt(n.treePath,e))}function sP(n,e,t,s,a,l){return nP(n.writeTree,n.treePath,e,t,s,a,l)}function d_(n,e,t){return eP(n.writeTree,n.treePath,e,t)}function YR(n,e){return QR(Gt(n.treePath,e),n.writeTree)}function QR(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;oe(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),oe(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,C0(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,Pk(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,kk(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,C0(s,e.snapshotNode,a.oldSnap));else throw Zo("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const $R=new aP;class p_{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new f_(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return d_(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ea(this.viewCache_),l=sP(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function oP(n,e){oe(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),oe(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function lP(n,e,t,s,a){const l=new rP;let c,d;if(t.type===Oi.OVERWRITE){const g=t;g.source.fromUser?c=pg(n,e,g.path,g.snap,s,a,l):(oe(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Le(g.path),c=If(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===Oi.MERGE){const g=t;g.source.fromUser?c=cP(n,e,g.path,g.children,s,a,l):(oe(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=mg(n,e,g.path,g.children,s,a,d,l))}else if(t.type===Oi.ACK_USER_WRITE){const g=t;g.revert?c=dP(n,e,g.path,s,a,l):c=hP(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Oi.LISTEN_COMPLETE)c=fP(n,e,t.path,s,l);else throw Zo("Unknown operation type: "+t.type);const p=l.getChanges();return uP(e,c,p),{viewCache:c,changes:p}}function uP(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=cg(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(Mk(cg(e)))}}function WR(n,e,t,s,a,l){const c=e.eventCache;if(Cf(s,t)!=null)return e;{let d,p;if(Le(t))if(oe(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ea(e),y=g instanceof Qe?g:Qe.EMPTY_NODE,T=KR(s,y);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=dg(s,Ea(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Fe(t);if(g===".priority"){oe(_r(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const T=P0(s,t,y,p);T!=null?d=n.filter.updatePriority(y,T):d=c.getNode()}else{const y=lt(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const S=P0(s,t,c.getNode(),p);S!=null?T=c.getNode().getImmediateChild(g).updateChild(y,S):T=c.getNode().getImmediateChild(g)}else T=d_(s,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,y,a,l):d=c.getNode()}}return xu(e,d,c.isFullyInitialized()||Le(t),n.filter.filtersNodes())}}function If(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const y=c?n.filter:n.filter.getIndexedFilter();if(Le(t))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const D=p.getNode().updateChild(t,s);g=y.updateFullNode(p.getNode(),D,null)}else{const D=Fe(t);if(!p.isCompleteForPath(t)&&_r(t)>1)return e;const I=lt(t),B=p.getNode().getImmediateChild(D).updateChild(I,s);D===".priority"?g=y.updatePriority(p.getNode(),B):g=y.updateChild(p.getNode(),D,B,I,$R,null)}const T=FR(e,g,p.isFullyInitialized()||Le(t),y.filtersNodes()),S=new p_(a,T,l);return WR(n,T,t,a,S,d)}function pg(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const y=new p_(a,e,l);if(Le(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=xu(e,g,!0,n.filter.filtersNodes());else{const T=Fe(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=xu(e,g,d.isFullyInitialized(),d.isFiltered());else{const S=lt(t),D=d.getNode().getImmediateChild(T);let I;if(Le(S))I=s;else{const H=y.getCompleteChild(T);H!=null?bR(S)===".priority"&&H.getChild(IR(S)).isEmpty()?I=H:I=H.updateChild(S,s):I=Qe.EMPTY_NODE}if(D.equals(I))p=e;else{const H=n.filter.updateChild(d.getNode(),T,I,S,y,c);p=xu(e,H,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function x0(n,e){return n.eventCache.isCompleteForChild(e)}function cP(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const y=Gt(t,p);x0(e,Fe(y))&&(d=pg(n,d,y,g,a,l,c))}),s.foreach((p,g)=>{const y=Gt(t,p);x0(e,Fe(y))||(d=pg(n,d,y,g,a,l,c))}),d}function L0(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function mg(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Le(t)?g=s:g=new ot(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((T,S)=>{if(y.hasChild(T)){const D=e.serverCache.getNode().getImmediateChild(T),I=L0(n,D,S);p=If(n,p,new ut(T),I,a,l,c,d)}}),g.children.inorderTraversal((T,S)=>{const D=!e.serverCache.isCompleteForChild(T)&&S.value===null;if(!y.hasChild(T)&&!D){const I=e.serverCache.getNode().getImmediateChild(T),H=L0(n,I,S);p=If(n,p,new ut(T),H,a,l,c,d)}}),p}function hP(n,e,t,s,a,l,c){if(Cf(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Le(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return If(n,e,t,p.getNode().getChild(t),a,l,d,c);if(Le(t)){let g=new ot(null);return p.getNode().forEachChild(Lo,(y,T)=>{g=g.set(new ut(y),T)}),mg(n,e,t,g,a,l,d,c)}else return e}else{let g=new ot(null);return s.foreach((y,T)=>{const S=Gt(t,y);p.isCompleteForPath(S)&&(g=g.set(y,p.getNode().getChild(S)))}),mg(n,e,t,g,a,l,d,c)}}function fP(n,e,t,s,a){const l=e.serverCache,c=FR(e,l.getNode(),l.isFullyInitialized()||Le(t),l.isFiltered());return WR(n,c,t,s,$R,a)}function dP(n,e,t,s,a,l){let c;if(Cf(s,t)!=null)return e;{const d=new p_(s,e,a),p=e.eventCache.getNode();let g;if(Le(t)||Fe(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=dg(s,Ea(e));else{const T=e.serverCache.getNode();oe(T instanceof Qe,"serverChildren would be complete if leaf node"),y=KR(s,T)}y=y,g=n.filter.updateFullNode(p,y,l)}else{const y=Fe(t);let T=d_(s,y,e.serverCache);T==null&&e.serverCache.isCompleteForChild(y)&&(T=p.getImmediateChild(y)),T!=null?g=n.filter.updateChild(p,y,T,lt(t),d,l):e.eventCache.getNode().hasChild(y)?g=n.filter.updateChild(p,y,Qe.EMPTY_NODE,lt(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=dg(s,Ea(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||Cf(s,it())!=null,xu(e,g,c,n.filter.filtersNodes())}}function pP(n,e){const t=Ea(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Le(e)&&!t.getImmediateChild(Fe(e)).isEmpty())?t.getChild(e):null}function V0(n,e,t,s){e.type===Oi.MERGE&&e.source.queryId!==null&&(oe(Ea(n.viewCache_),"We should always have a full cache before handling merges"),oe(cg(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=lP(n.processor_,a,e,t,s);return oP(n.processor_,l.viewCache),oe(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,mP(n,l.changes,l.viewCache.eventCache.getNode())}function mP(n,e,t,s){const a=n.eventRegistrations_;return Hk(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let U0;function gP(n){oe(!U0,"__referenceConstructor has already been defined"),U0=n}function m_(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return oe(l!=null,"SyncTree gave us an op for an invalid query."),V0(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(V0(c,e,t,s));return l}}function g_(n,e){let t=null;for(const s of n.views.values())t=t||pP(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let B0;function _P(n){oe(!B0,"__referenceConstructor has already been defined"),B0=n}class z0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ot(null),this.pendingWriteTree_=iP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yP(n,e,t,s,a){return Kk(n.pendingWriteTree_,e,t,s,a),a?td(n,new va(VR(),e,t)):[]}function Oo(n,e,t=!1){const s=Yk(n.pendingWriteTree_,e);if(Qk(n.pendingWriteTree_,e)){let l=new ot(null);return s.snap!=null?l=l.set(it(),!0):Zn(s.children,c=>{l=l.set(new ut(c),!0)}),td(n,new bf(s.path,l,t))}else return[]}function ed(n,e,t){return td(n,new va(UR(),e,t))}function vP(n,e,t){const s=ot.fromObject(t);return td(n,new Yu(UR(),e,s))}function EP(n,e,t,s){const a=ew(n,s);if(a!=null){const l=tw(a),c=l.path,d=l.queryId,p=Qn(c,e),g=new va(BR(d),p,t);return nw(n,c,g)}else return[]}function TP(n,e,t,s){const a=ew(n,s);if(a){const l=tw(a),c=l.path,d=l.queryId,p=Qn(c,e),g=ot.fromObject(t),y=new Yu(BR(d),p,g);return nw(n,c,y)}else return[]}function XR(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=Qn(c,e),g=g_(d,p);if(g)return g});return GR(a,e,l,t,!0)}function td(n,e){return ZR(e,n.syncPointTree_,null,jR(n.pendingWriteTree_,it()))}function ZR(n,e,t,s){if(Le(n.path))return JR(n,e,t,s);{const a=e.get(it());t==null&&a!=null&&(t=g_(a,it()));let l=[];const c=Fe(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,y=YR(s,c);l=l.concat(ZR(d,p,g,y))}return a&&(l=l.concat(m_(a,n,s,t))),l}}function JR(n,e,t,s){const a=e.get(it());t==null&&a!=null&&(t=g_(a,it()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=YR(s,c),y=n.operationForChild(c);y&&(l=l.concat(JR(y,d,p,g)))}),a&&(l=l.concat(m_(a,n,s,t))),l}function ew(n,e){return n.tagToQueryMap.get(e)}function tw(n){const e=n.indexOf("$");return oe(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ut(n.substr(0,e))}}function nw(n,e,t){const s=n.syncPointTree_.get(e);oe(s,"Missing sync point for query tag that we're tracking");const a=jR(n.pendingWriteTree_,e);return m_(s,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new __(t)}node(){return this.node_}}class y_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Gt(this.path_,e);return new y_(this.syncTree_,t)}node(){return XR(this.syncTree_,this.path_)}}const SP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},F0=function(n,e,t){if(!n||typeof n!="object")return n;if(oe(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return AP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return RP(n[".sv"],e);oe(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},AP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:oe(!1,"Unexpected server value: "+n)}},RP=function(n,e,t){n.hasOwnProperty("increment")||oe(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&oe(!1,"Unexpected increment value: "+s);const a=e.node();if(oe(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},wP=function(n,e,t,s){return v_(e,new y_(t,n),s)},bP=function(n,e,t){return v_(n,new __(e),t)};function v_(n,e,t){const s=n.getPriority().val(),a=F0(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=F0(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new jt(d,cn(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new jt(a))),c.forEachChild(fn,(d,p)=>{const g=v_(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function T_(n,e){let t=e instanceof ut?e:new ut(e),s=n,a=Fe(t);for(;a!==null;){const l=Uo(s.node.children,a)||{children:{},childCount:0};s=new E_(a,s,l),t=lt(t),a=Fe(t)}return s}function il(n){return n.node.value}function iw(n,e){n.node.value=e,gg(n)}function sw(n){return n.node.childCount>0}function CP(n){return il(n)===void 0&&!sw(n)}function nd(n,e){Zn(n.node.children,(t,s)=>{e(new E_(t,n,s))})}function rw(n,e,t,s){t&&e(n),nd(n,a=>{rw(a,e,!0)})}function IP(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function fc(n){return new ut(n.parent===null?n.name:fc(n.parent)+"/"+n.name)}function gg(n){n.parent!==null&&NP(n.parent,n.name,n)}function NP(n,e,t){const s=CP(t),a=Cs(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,gg(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,gg(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=/[\[\].#$\/\u0000-\u001F\u007F]/,OP=/[\[\].#$\u0000-\u001F\u007F]/,Fm=10*1024*1024,aw=function(n){return typeof n=="string"&&n.length!==0&&!DP.test(n)},MP=function(n){return typeof n=="string"&&n.length!==0&&!OP.test(n)},kP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),MP(n)},ow=function(n,e,t){const s=t instanceof ut?new fk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ha(s));if(typeof e=="function")throw new Error(n+"contains a function "+ha(s)+" with contents = "+e.toString());if(aR(e))throw new Error(n+"contains "+e.toString()+" "+ha(s));if(typeof e=="string"&&e.length>Fm/3&&Kf(e)>Fm)throw new Error(n+"contains a string greater than "+Fm+" utf8 bytes "+ha(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Zn(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!aw(c)))throw new Error(n+" contains an invalid key ("+c+") "+ha(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dk(s,c),ow(n,d,s),pk(s)}),a&&l)throw new Error(n+' contains ".value" child '+ha(s)+" in addition to actual children.")}},PP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!aw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!kP(t))throw new Error(ZN(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function LP(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!NR(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function Ia(n,e,t){LP(n,t),VP(n,s=>oi(s,e)||oi(e,s))}function VP(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(UP(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function UP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();ku&&un("event: "+t.toString()),cc(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP="repo_interrupt",zP=25;class FP{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wf(),this.transactionQueueTree_=new E_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function HP(n,e,t){if(n.stats_=o_(n.repoInfo_),n.forceRestClient_||LM())n.server_=new Rf(n.repoInfo_,(s,a,l,c)=>{H0(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>j0(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Jt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new ys(n.repoInfo_,e,(s,a,l,c)=>{H0(n,s,a,l,c)},s=>{j0(n,s)},s=>{qP(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=HM(n.repoInfo_,()=>new Fk(n.stats_,n.server_)),n.infoData_=new Lk,n.infoSyncTree_=new z0({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=ed(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),S_(n,"connected",!1),n.serverSyncTree_=new z0({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);Ia(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function jP(n){const t=n.infoData_.getNode(new ut(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function lw(n){return SP({timestamp:jP(n)})}function H0(n,e,t,s,a){n.dataUpdateCount++;const l=new ut(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=df(t,g=>cn(g));c=TP(n.serverSyncTree_,l,p,a)}else{const p=cn(t);c=EP(n.serverSyncTree_,l,p,a)}else if(s){const p=df(t,g=>cn(g));c=vP(n.serverSyncTree_,l,p)}else{const p=cn(t);c=ed(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=R_(n,l)),Ia(n.eventQueue_,d,c)}function j0(n,e){S_(n,"connected",e),e===!1&&KP(n)}function qP(n,e){Zn(e,(t,s)=>{S_(n,t,s)})}function S_(n,e,t){const s=new ut("/.info/"+e),a=cn(t);n.infoData_.updateSnapshot(s,a);const l=ed(n.infoSyncTree_,s,a);Ia(n.eventQueue_,s,l)}function GP(n){return n.nextWriteId_++}function KP(n){uw(n,"onDisconnectEvents");const e=lw(n),t=wf();ug(n.onDisconnect_,it(),(a,l)=>{const c=wP(a,l,n.serverSyncTree_,e);LR(t,a,c)});let s=[];ug(t,it(),(a,l)=>{s=s.concat(ed(n.serverSyncTree_,a,l));const c=WP(n,a);R_(n,c)}),n.onDisconnect_=wf(),Ia(n.eventQueue_,it(),s)}function YP(n){n.persistentConnection_&&n.persistentConnection_.interrupt(BP)}function uw(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),un(t,...e)}function cw(n,e,t){return XR(n.serverSyncTree_,e,t)||Qe.EMPTY_NODE}function A_(n,e=n.transactionQueueTree_){if(e||id(n,e),il(e)){const t=fw(n,e);oe(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&QP(n,fc(e),t)}else sw(e)&&nd(e,t=>{A_(n,t)})}function QP(n,e,t){const s=t.map(g=>g.currentWriteId),a=cw(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];oe(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=Qn(e,y.path);l=l.updateChild(T,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{uw(n,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const T=[];for(let S=0;S<t.length;S++)t[S].status=2,y=y.concat(Oo(n.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&T.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();id(n,T_(n.transactionQueueTree_,e)),A_(n,n.transactionQueueTree_),Ia(n.eventQueue_,e,y);for(let S=0;S<T.length;S++)cc(T[S])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Pn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}R_(n,e)}},c)}function R_(n,e){const t=hw(n,e),s=fc(t),a=fw(n,t);return $P(n,a,s),s}function $P(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=Qn(t,p.path);let y=!1,T;if(oe(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,T=p.abortReason,a=a.concat(Oo(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=zP)y=!0,T="maxretry",a=a.concat(Oo(n.serverSyncTree_,p.currentWriteId,!0));else{const S=cw(n,p.path,c);p.currentInputSnapshot=S;const D=e[d].update(S.val());if(D!==void 0){ow("transaction failed: Data returned ",D,p.path);let I=cn(D);typeof D=="object"&&D!=null&&Cs(D,".priority")||(I=I.updatePriority(S.getPriority()));const B=p.currentWriteId,Y=lw(n),X=bP(I,S,Y);p.currentOutputSnapshotRaw=I,p.currentOutputSnapshotResolved=X,p.currentWriteId=GP(n),c.splice(c.indexOf(B),1),a=a.concat(yP(n.serverSyncTree_,p.path,X,p.currentWriteId,p.applyLocally)),a=a.concat(Oo(n.serverSyncTree_,B,!0))}else y=!0,T="nodata",a=a.concat(Oo(n.serverSyncTree_,p.currentWriteId,!0))}Ia(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,function(S){setTimeout(S,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}id(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)cc(s[d]);A_(n,n.transactionQueueTree_)}function hw(n,e){let t,s=n.transactionQueueTree_;for(t=Fe(e);t!==null&&il(s)===void 0;)s=T_(s,t),e=lt(e),t=Fe(e);return s}function fw(n,e){const t=[];return dw(n,e,t),t.sort((s,a)=>s.order-a.order),t}function dw(n,e,t){const s=il(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);nd(e,a=>{dw(n,a,t)})}function id(n,e){const t=il(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,iw(e,t.length>0?t:void 0)}nd(e,s=>{id(n,s)})}function WP(n,e){const t=fc(hw(n,e)),s=T_(n.transactionQueueTree_,e);return IP(s,a=>{Hm(n,a)}),Hm(n,s),rw(s,a=>{Hm(n,a)}),t}function Hm(n,e){const t=il(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(oe(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(oe(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Oo(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?iw(e,void 0):t.length=l+1,Ia(n.eventQueue_,fc(e),a);for(let c=0;c<s.length;c++)cc(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function ZP(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Pn(`Invalid query segment '${t}' in query '${n}'`)}return e}const q0=function(n,e){const t=JP(n),s=t.namespace;t.domain==="firebase.com"&&_a(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&_a("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||IM();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new BM(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new ut(t.pathString)}},JP=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let y=n.indexOf("/");y===-1&&(y=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(y,T)),y<T&&(a=XP(n.substring(y,T)));const S=ZP(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const D=e.slice(0,g);if(D.toLowerCase()==="localhost")t="localhost";else if(D.split(".").length<=2)t=D;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),t=e.substring(I+1),l=s}"ns"in S&&(l=S.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
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
 */class w_{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Le(this._path)?null:bR(this._path)}get ref(){return new sl(this._repo,this._path)}get _queryIdentifier(){const e=N0(this._queryParams),t=r_(e);return t==="{}"?"default":t}get _queryObject(){return N0(this._queryParams)}isEqual(e){if(e=tn(e),!(e instanceof w_))return!1;const t=this._repo===e._repo,s=NR(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+hk(this._path)}}class sl extends w_{constructor(e,t){super(e,t,new h_,!1)}get parent(){const e=IR(this._path);return e===null?null:new sl(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}gP(sl);_P(sl);/**
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
 */const ex="FIREBASE_DATABASE_EMULATOR_HOST",_g={};let tx=!1;function nx(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||_a("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),un("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=q0(l,a),d=c.repoInfo,p;typeof process<"u"&&c0&&(p=c0[ex]),p?(l=`http://${p}?ns=${d.namespace}`,c=q0(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new UM(n.name,n.options,e);PP("Invalid Firebase Database URL",c),Le(c.path)||_a("Database URL must point to the root of a Firebase Database (not including a child path).");const y=sx(d,n,g,new VM(n,t));return new rx(y,n)}function ix(n,e){const t=_g[e];(!t||t[n.key]!==n)&&_a(`Database ${e}(${n.repoInfo_}) has already been deleted.`),YP(n),delete t[n.key]}function sx(n,e,t,s){let a=_g[e.name];a||(a={},_g[e.name]=a);let l=a[n.toURLString()];return l&&_a("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new FP(n,tx,t,s),a[n.toURLString()]=l,l}class rx{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(HP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new sl(this._repo,it())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ix(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_a("Cannot call "+e+" on a deleted database.")}}/**
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
 */function ax(n){SM(Rr),gr(new Ts("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return nx(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),$n(h0,f0,n),$n(h0,f0,"esm2017")}ys.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ys.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};ax();var G0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,pw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,w){function b(){}b.prototype=w.prototype,k.D=w.prototype,k.prototype=new b,k.prototype.constructor=k,k.C=function(M,x,V){for(var N=Array(arguments.length-2),Kt=2;Kt<arguments.length;Kt++)N[Kt-2]=arguments[Kt];return w.prototype[x].apply(M,N)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(k,w,b){b||(b=0);var M=Array(16);if(typeof w=="string")for(var x=0;16>x;++x)M[x]=w.charCodeAt(b++)|w.charCodeAt(b++)<<8|w.charCodeAt(b++)<<16|w.charCodeAt(b++)<<24;else for(x=0;16>x;++x)M[x]=w[b++]|w[b++]<<8|w[b++]<<16|w[b++]<<24;w=k.g[0],b=k.g[1],x=k.g[2];var V=k.g[3],N=w+(V^b&(x^V))+M[0]+3614090360&4294967295;w=b+(N<<7&4294967295|N>>>25),N=V+(x^w&(b^x))+M[1]+3905402710&4294967295,V=w+(N<<12&4294967295|N>>>20),N=x+(b^V&(w^b))+M[2]+606105819&4294967295,x=V+(N<<17&4294967295|N>>>15),N=b+(w^x&(V^w))+M[3]+3250441966&4294967295,b=x+(N<<22&4294967295|N>>>10),N=w+(V^b&(x^V))+M[4]+4118548399&4294967295,w=b+(N<<7&4294967295|N>>>25),N=V+(x^w&(b^x))+M[5]+1200080426&4294967295,V=w+(N<<12&4294967295|N>>>20),N=x+(b^V&(w^b))+M[6]+2821735955&4294967295,x=V+(N<<17&4294967295|N>>>15),N=b+(w^x&(V^w))+M[7]+4249261313&4294967295,b=x+(N<<22&4294967295|N>>>10),N=w+(V^b&(x^V))+M[8]+1770035416&4294967295,w=b+(N<<7&4294967295|N>>>25),N=V+(x^w&(b^x))+M[9]+2336552879&4294967295,V=w+(N<<12&4294967295|N>>>20),N=x+(b^V&(w^b))+M[10]+4294925233&4294967295,x=V+(N<<17&4294967295|N>>>15),N=b+(w^x&(V^w))+M[11]+2304563134&4294967295,b=x+(N<<22&4294967295|N>>>10),N=w+(V^b&(x^V))+M[12]+1804603682&4294967295,w=b+(N<<7&4294967295|N>>>25),N=V+(x^w&(b^x))+M[13]+4254626195&4294967295,V=w+(N<<12&4294967295|N>>>20),N=x+(b^V&(w^b))+M[14]+2792965006&4294967295,x=V+(N<<17&4294967295|N>>>15),N=b+(w^x&(V^w))+M[15]+1236535329&4294967295,b=x+(N<<22&4294967295|N>>>10),N=w+(x^V&(b^x))+M[1]+4129170786&4294967295,w=b+(N<<5&4294967295|N>>>27),N=V+(b^x&(w^b))+M[6]+3225465664&4294967295,V=w+(N<<9&4294967295|N>>>23),N=x+(w^b&(V^w))+M[11]+643717713&4294967295,x=V+(N<<14&4294967295|N>>>18),N=b+(V^w&(x^V))+M[0]+3921069994&4294967295,b=x+(N<<20&4294967295|N>>>12),N=w+(x^V&(b^x))+M[5]+3593408605&4294967295,w=b+(N<<5&4294967295|N>>>27),N=V+(b^x&(w^b))+M[10]+38016083&4294967295,V=w+(N<<9&4294967295|N>>>23),N=x+(w^b&(V^w))+M[15]+3634488961&4294967295,x=V+(N<<14&4294967295|N>>>18),N=b+(V^w&(x^V))+M[4]+3889429448&4294967295,b=x+(N<<20&4294967295|N>>>12),N=w+(x^V&(b^x))+M[9]+568446438&4294967295,w=b+(N<<5&4294967295|N>>>27),N=V+(b^x&(w^b))+M[14]+3275163606&4294967295,V=w+(N<<9&4294967295|N>>>23),N=x+(w^b&(V^w))+M[3]+4107603335&4294967295,x=V+(N<<14&4294967295|N>>>18),N=b+(V^w&(x^V))+M[8]+1163531501&4294967295,b=x+(N<<20&4294967295|N>>>12),N=w+(x^V&(b^x))+M[13]+2850285829&4294967295,w=b+(N<<5&4294967295|N>>>27),N=V+(b^x&(w^b))+M[2]+4243563512&4294967295,V=w+(N<<9&4294967295|N>>>23),N=x+(w^b&(V^w))+M[7]+1735328473&4294967295,x=V+(N<<14&4294967295|N>>>18),N=b+(V^w&(x^V))+M[12]+2368359562&4294967295,b=x+(N<<20&4294967295|N>>>12),N=w+(b^x^V)+M[5]+4294588738&4294967295,w=b+(N<<4&4294967295|N>>>28),N=V+(w^b^x)+M[8]+2272392833&4294967295,V=w+(N<<11&4294967295|N>>>21),N=x+(V^w^b)+M[11]+1839030562&4294967295,x=V+(N<<16&4294967295|N>>>16),N=b+(x^V^w)+M[14]+4259657740&4294967295,b=x+(N<<23&4294967295|N>>>9),N=w+(b^x^V)+M[1]+2763975236&4294967295,w=b+(N<<4&4294967295|N>>>28),N=V+(w^b^x)+M[4]+1272893353&4294967295,V=w+(N<<11&4294967295|N>>>21),N=x+(V^w^b)+M[7]+4139469664&4294967295,x=V+(N<<16&4294967295|N>>>16),N=b+(x^V^w)+M[10]+3200236656&4294967295,b=x+(N<<23&4294967295|N>>>9),N=w+(b^x^V)+M[13]+681279174&4294967295,w=b+(N<<4&4294967295|N>>>28),N=V+(w^b^x)+M[0]+3936430074&4294967295,V=w+(N<<11&4294967295|N>>>21),N=x+(V^w^b)+M[3]+3572445317&4294967295,x=V+(N<<16&4294967295|N>>>16),N=b+(x^V^w)+M[6]+76029189&4294967295,b=x+(N<<23&4294967295|N>>>9),N=w+(b^x^V)+M[9]+3654602809&4294967295,w=b+(N<<4&4294967295|N>>>28),N=V+(w^b^x)+M[12]+3873151461&4294967295,V=w+(N<<11&4294967295|N>>>21),N=x+(V^w^b)+M[15]+530742520&4294967295,x=V+(N<<16&4294967295|N>>>16),N=b+(x^V^w)+M[2]+3299628645&4294967295,b=x+(N<<23&4294967295|N>>>9),N=w+(x^(b|~V))+M[0]+4096336452&4294967295,w=b+(N<<6&4294967295|N>>>26),N=V+(b^(w|~x))+M[7]+1126891415&4294967295,V=w+(N<<10&4294967295|N>>>22),N=x+(w^(V|~b))+M[14]+2878612391&4294967295,x=V+(N<<15&4294967295|N>>>17),N=b+(V^(x|~w))+M[5]+4237533241&4294967295,b=x+(N<<21&4294967295|N>>>11),N=w+(x^(b|~V))+M[12]+1700485571&4294967295,w=b+(N<<6&4294967295|N>>>26),N=V+(b^(w|~x))+M[3]+2399980690&4294967295,V=w+(N<<10&4294967295|N>>>22),N=x+(w^(V|~b))+M[10]+4293915773&4294967295,x=V+(N<<15&4294967295|N>>>17),N=b+(V^(x|~w))+M[1]+2240044497&4294967295,b=x+(N<<21&4294967295|N>>>11),N=w+(x^(b|~V))+M[8]+1873313359&4294967295,w=b+(N<<6&4294967295|N>>>26),N=V+(b^(w|~x))+M[15]+4264355552&4294967295,V=w+(N<<10&4294967295|N>>>22),N=x+(w^(V|~b))+M[6]+2734768916&4294967295,x=V+(N<<15&4294967295|N>>>17),N=b+(V^(x|~w))+M[13]+1309151649&4294967295,b=x+(N<<21&4294967295|N>>>11),N=w+(x^(b|~V))+M[4]+4149444226&4294967295,w=b+(N<<6&4294967295|N>>>26),N=V+(b^(w|~x))+M[11]+3174756917&4294967295,V=w+(N<<10&4294967295|N>>>22),N=x+(w^(V|~b))+M[2]+718787259&4294967295,x=V+(N<<15&4294967295|N>>>17),N=b+(V^(x|~w))+M[9]+3951481745&4294967295,k.g[0]=k.g[0]+w&4294967295,k.g[1]=k.g[1]+(x+(N<<21&4294967295|N>>>11))&4294967295,k.g[2]=k.g[2]+x&4294967295,k.g[3]=k.g[3]+V&4294967295}s.prototype.u=function(k,w){w===void 0&&(w=k.length);for(var b=w-this.blockSize,M=this.B,x=this.h,V=0;V<w;){if(x==0)for(;V<=b;)a(this,k,V),V+=this.blockSize;if(typeof k=="string"){for(;V<w;)if(M[x++]=k.charCodeAt(V++),x==this.blockSize){a(this,M),x=0;break}}else for(;V<w;)if(M[x++]=k[V++],x==this.blockSize){a(this,M),x=0;break}}this.h=x,this.o+=w},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var w=1;w<k.length-8;++w)k[w]=0;var b=8*this.o;for(w=k.length-8;w<k.length;++w)k[w]=b&255,b/=256;for(this.u(k),k=Array(16),w=b=0;4>w;++w)for(var M=0;32>M;M+=8)k[b++]=this.g[w]>>>M&255;return k};function l(k,w){var b=d;return Object.prototype.hasOwnProperty.call(b,k)?b[k]:b[k]=w(k)}function c(k,w){this.h=w;for(var b=[],M=!0,x=k.length-1;0<=x;x--){var V=k[x]|0;M&&V==w||(b[x]=V,M=!1)}this.g=b}var d={};function p(k){return-128<=k&&128>k?l(k,function(w){return new c([w|0],0>w?-1:0)}):new c([k|0],0>k?-1:0)}function g(k){if(isNaN(k)||!isFinite(k))return T;if(0>k)return B(g(-k));for(var w=[],b=1,M=0;k>=b;M++)w[M]=k/b|0,b*=4294967296;return new c(w,0)}function y(k,w){if(k.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k.charAt(0)=="-")return B(y(k.substring(1),w));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=g(Math.pow(w,8)),M=T,x=0;x<k.length;x+=8){var V=Math.min(8,k.length-x),N=parseInt(k.substring(x,x+V),w);8>V?(V=g(Math.pow(w,V)),M=M.j(V).add(g(N))):(M=M.j(b),M=M.add(g(N)))}return M}var T=p(0),S=p(1),D=p(16777216);n=c.prototype,n.m=function(){if(H(this))return-B(this).m();for(var k=0,w=1,b=0;b<this.g.length;b++){var M=this.i(b);k+=(0<=M?M:4294967296+M)*w,w*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(I(this))return"0";if(H(this))return"-"+B(this).toString(k);for(var w=g(Math.pow(k,6)),b=this,M="";;){var x=le(b,w).g;b=Y(b,x.j(w));var V=((0<b.g.length?b.g[0]:b.h)>>>0).toString(k);if(b=x,I(b))return V+M;for(;6>V.length;)V="0"+V;M=V+M}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function I(k){if(k.h!=0)return!1;for(var w=0;w<k.g.length;w++)if(k.g[w]!=0)return!1;return!0}function H(k){return k.h==-1}n.l=function(k){return k=Y(this,k),H(k)?-1:I(k)?0:1};function B(k){for(var w=k.g.length,b=[],M=0;M<w;M++)b[M]=~k.g[M];return new c(b,~k.h).add(S)}n.abs=function(){return H(this)?B(this):this},n.add=function(k){for(var w=Math.max(this.g.length,k.g.length),b=[],M=0,x=0;x<=w;x++){var V=M+(this.i(x)&65535)+(k.i(x)&65535),N=(V>>>16)+(this.i(x)>>>16)+(k.i(x)>>>16);M=N>>>16,V&=65535,N&=65535,b[x]=N<<16|V}return new c(b,b[b.length-1]&-2147483648?-1:0)};function Y(k,w){return k.add(B(w))}n.j=function(k){if(I(this)||I(k))return T;if(H(this))return H(k)?B(this).j(B(k)):B(B(this).j(k));if(H(k))return B(this.j(B(k)));if(0>this.l(D)&&0>k.l(D))return g(this.m()*k.m());for(var w=this.g.length+k.g.length,b=[],M=0;M<2*w;M++)b[M]=0;for(M=0;M<this.g.length;M++)for(var x=0;x<k.g.length;x++){var V=this.i(M)>>>16,N=this.i(M)&65535,Kt=k.i(x)>>>16,mt=k.i(x)&65535;b[2*M+2*x]+=N*mt,X(b,2*M+2*x),b[2*M+2*x+1]+=V*mt,X(b,2*M+2*x+1),b[2*M+2*x+1]+=N*Kt,X(b,2*M+2*x+1),b[2*M+2*x+2]+=V*Kt,X(b,2*M+2*x+2)}for(M=0;M<w;M++)b[M]=b[2*M+1]<<16|b[2*M];for(M=w;M<2*w;M++)b[M]=0;return new c(b,0)};function X(k,w){for(;(k[w]&65535)!=k[w];)k[w+1]+=k[w]>>>16,k[w]&=65535,w++}function te(k,w){this.g=k,this.h=w}function le(k,w){if(I(w))throw Error("division by zero");if(I(k))return new te(T,T);if(H(k))return w=le(B(k),w),new te(B(w.g),B(w.h));if(H(w))return w=le(k,B(w)),new te(B(w.g),w.h);if(30<k.g.length){if(H(k)||H(w))throw Error("slowDivide_ only works with positive integers.");for(var b=S,M=w;0>=M.l(k);)b=ce(b),M=ce(M);var x=fe(b,1),V=fe(M,1);for(M=fe(M,2),b=fe(b,2);!I(M);){var N=V.add(M);0>=N.l(k)&&(x=x.add(b),V=N),M=fe(M,1),b=fe(b,1)}return w=Y(k,x.j(w)),new te(x,w)}for(x=T;0<=k.l(w);){for(b=Math.max(1,Math.floor(k.m()/w.m())),M=Math.ceil(Math.log(b)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),V=g(b),N=V.j(w);H(N)||0<N.l(k);)b-=M,V=g(b),N=V.j(w);I(V)&&(V=S),x=x.add(V),k=Y(k,N)}return new te(x,k)}n.A=function(k){return le(this,k).h},n.and=function(k){for(var w=Math.max(this.g.length,k.g.length),b=[],M=0;M<w;M++)b[M]=this.i(M)&k.i(M);return new c(b,this.h&k.h)},n.or=function(k){for(var w=Math.max(this.g.length,k.g.length),b=[],M=0;M<w;M++)b[M]=this.i(M)|k.i(M);return new c(b,this.h|k.h)},n.xor=function(k){for(var w=Math.max(this.g.length,k.g.length),b=[],M=0;M<w;M++)b[M]=this.i(M)^k.i(M);return new c(b,this.h^k.h)};function ce(k){for(var w=k.g.length+1,b=[],M=0;M<w;M++)b[M]=k.i(M)<<1|k.i(M-1)>>>31;return new c(b,k.h)}function fe(k,w){var b=w>>5;w%=32;for(var M=k.g.length-b,x=[],V=0;V<M;V++)x[V]=0<w?k.i(V+b)>>>w|k.i(V+b+1)<<32-w:k.i(V+b);return new c(x,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,pw=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,dr=c}).apply(typeof G0<"u"?G0:typeof self<"u"?self:typeof window<"u"?window:{});var Gh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mw,Iu,gw,rf,yg,_w,yw,vw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gh=="object"&&Gh];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var R=0;R<h.length-1;R++){var U=h[R];if(!(U in v))break e;v=v[U]}h=h[h.length-1],R=v[h],_=_(R),_!=R&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,R=!1,U={next:function(){if(!R&&v<h.length){var G=v++;return{value:_(G,h[G]),done:!1}}return R=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var R=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,R),h.apply(_,U)}}return function(){return h.apply(_,arguments)}}function S(h,_,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,S.apply(null,arguments)}function D(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var R=v.slice();return R.push.apply(R,arguments),h.apply(this,R)}}function I(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(R,U,G){for(var se=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)se[Ve-2]=arguments[Ve];return _.prototype[U].apply(R,se)}}function H(h){const _=h.length;if(0<_){const v=Array(_);for(let R=0;R<_;R++)v[R]=h[R];return v}return[]}function B(h,_){for(let v=1;v<arguments.length;v++){const R=arguments[v];if(p(R)){const U=h.length||0,G=R.length||0;h.length=U+G;for(let se=0;se<G;se++)h[U+se]=R[se]}else h.push(R)}}class Y{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function X(h){return/^[\s\xa0]*$/.test(h)}function te(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function le(h){return le[" "](h),h}le[" "]=function(){};var ce=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function fe(h,_,v){for(const R in h)_.call(v,h[R],R,h)}function k(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function w(h){const _={};for(const v in h)_[v]=h[v];return _}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(h,_){let v,R;for(let U=1;U<arguments.length;U++){R=arguments[U];for(v in R)h[v]=R[v];for(let G=0;G<b.length;G++)v=b[G],Object.prototype.hasOwnProperty.call(R,v)&&(h[v]=R[v])}}function x(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function V(h){d.setTimeout(()=>{throw h},0)}function N(){var h=Ge;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Kt{constructor(){this.h=this.g=null}add(_,v){const R=mt.get();R.set(_,v),this.h?this.h.next=R:this.g=R,this.h=R}}var mt=new Y(()=>new Q,h=>h.reset());class Q{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let re,me=!1,Ge=new Kt,O=()=>{const h=d.Promise.resolve(void 0);re=()=>{h.then(ee)}};var ee=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(v){V(v)}var _=mt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}me=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h}();function De(h,_){if(ie.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,R=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ce){e:{try{le(_.nodeName);var U=!0;break e}catch{}U=!1}U||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,R?(this.clientX=R.clientX!==void 0?R.clientX:R.pageX,this.clientY=R.clientY!==void 0?R.clientY:R.pageY,this.screenX=R.screenX||0,this.screenY=R.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Re[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&De.aa.h.call(this)}}I(De,ie);var Re={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Vt="closure_listenable_"+(1e6*Math.random()|0),rt=0;function fi(h,_,v,R,U){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!R,this.ha=U,this.key=++rt,this.da=this.fa=!1}function Is(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Hi(h){this.src=h,this.g={},this.h=0}Hi.prototype.add=function(h,_,v,R,U){var G=h.toString();h=this.g[G],h||(h=this.g[G]=[],this.h++);var se=Ir(h,_,R,U);return-1<se?(_=h[se],v||(_.fa=!1)):(_=new fi(_,this.src,G,!!R,U),_.fa=v,h.push(_)),_};function Cr(h,_){var v=_.type;if(v in h.g){var R=h.g[v],U=Array.prototype.indexOf.call(R,_,void 0),G;(G=0<=U)&&Array.prototype.splice.call(R,U,1),G&&(Is(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Ir(h,_,v,R){for(var U=0;U<h.length;++U){var G=h[U];if(!G.da&&G.listener==_&&G.capture==!!v&&G.ha==R)return U}return-1}var Nr="closure_lm_"+(1e6*Math.random()|0),ul={};function _c(h,_,v,R,U){if(Array.isArray(_)){for(var G=0;G<_.length;G++)_c(h,_[G],v,R,U);return null}return v=yc(v),h&&h[Vt]?h.K(_,v,g(R)?!!R.capture:!1,U):xn(h,_,v,!1,R,U)}function xn(h,_,v,R,U,G){if(!_)throw Error("Invalid event type");var se=g(U)?!!U.capture:!!U,Ve=ka(h);if(Ve||(h[Nr]=Ve=new Hi(h)),v=Ve.add(_,v,R,se,G),v.proxy)return v;if(R=Td(),v.proxy=R,R.src=h,R.listener=v,h.addEventListener)ge||(U=se),U===void 0&&(U=!1),h.addEventListener(_.toString(),R,U);else if(h.attachEvent)h.attachEvent(Dr(_.toString()),R);else if(h.addListener&&h.removeListener)h.addListener(R);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Td(){function h(v){return _.call(h.src,h.listener,v)}const _=Sd;return h}function cl(h,_,v,R,U){if(Array.isArray(_))for(var G=0;G<_.length;G++)cl(h,_[G],v,R,U);else R=g(R)?!!R.capture:!!R,v=yc(v),h&&h[Vt]?(h=h.i,_=String(_).toString(),_ in h.g&&(G=h.g[_],v=Ir(G,v,R,U),-1<v&&(Is(G[v]),Array.prototype.splice.call(G,v,1),G.length==0&&(delete h.g[_],h.h--)))):h&&(h=ka(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Ir(_,v,R,U)),(v=-1<h?_[h]:null)&&Ma(v))}function Ma(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Vt])Cr(_.i,h);else{var v=h.type,R=h.proxy;_.removeEventListener?_.removeEventListener(v,R,h.capture):_.detachEvent?_.detachEvent(Dr(v),R):_.addListener&&_.removeListener&&_.removeListener(R),(v=ka(_))?(Cr(v,h),v.h==0&&(v.src=null,_[Nr]=null)):Is(h)}}}function Dr(h){return h in ul?ul[h]:ul[h]="on"+h}function Sd(h,_){if(h.da)h=!0;else{_=new De(_,this);var v=h.listener,R=h.ha||h.src;h.fa&&Ma(h),h=v.call(R,_)}return h}function ka(h){return h=h[Nr],h instanceof Hi?h:null}var hl="__closure_events_fn_"+(1e9*Math.random()>>>0);function yc(h){return typeof h=="function"?h:(h[hl]||(h[hl]=function(_){return h.handleEvent(_)}),h[hl])}function gt(){ae.call(this),this.i=new Hi(this),this.M=this,this.F=null}I(gt,ae),gt.prototype[Vt]=!0,gt.prototype.removeEventListener=function(h,_,v,R){cl(this,h,_,v,R)};function We(h,_){var v,R=h.F;if(R)for(v=[];R;R=R.F)v.push(R);if(h=h.M,R=_.type||_,typeof _=="string")_=new ie(_,h);else if(_ instanceof ie)_.target=_.target||h;else{var U=_;_=new ie(R,h),M(_,U)}if(U=!0,v)for(var G=v.length-1;0<=G;G--){var se=_.g=v[G];U=An(se,R,!0,_)&&U}if(se=_.g=h,U=An(se,R,!0,_)&&U,U=An(se,R,!1,_)&&U,v)for(G=0;G<v.length;G++)se=_.g=v[G],U=An(se,R,!1,_)&&U}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],R=0;R<v.length;R++)Is(v[R]);delete h.g[_],h.h--}}this.F=null},gt.prototype.K=function(h,_,v,R){return this.i.add(String(h),_,!1,v,R)},gt.prototype.L=function(h,_,v,R){return this.i.add(String(h),_,!0,v,R)};function An(h,_,v,R){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var U=!0,G=0;G<_.length;++G){var se=_[G];if(se&&!se.da&&se.capture==v){var Ve=se.listener,Dt=se.ha||se.src;se.fa&&Cr(h.i,se),U=Ve.call(Dt,R)!==!1&&U}}return U&&!R.defaultPrevented}function sn(h,_,v){if(typeof h=="function")v&&(h=S(h,v));else if(h&&typeof h.handleEvent=="function")h=S(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function vc(h){h.g=sn(()=>{h.g=null,h.i&&(h.i=!1,vc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Ad extends ae{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:vc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Or(h){ae.call(this),this.h=h,this.g={}}I(Or,ae);var Mr=[];function kr(h){fe(h.g,function(_,v){this.g.hasOwnProperty(v)&&Ma(_)},h),h.g={}}Or.prototype.N=function(){Or.aa.N.call(this),kr(this)},Or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jn=d.JSON.stringify,Pa=d.JSON.parse,Pr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function fl(){}fl.prototype.h=null;function dl(h){return h.h||(h.h=h.i())}function pl(){}var ji={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qi(){ie.call(this,"d")}I(qi,ie);function ml(){ie.call(this,"c")}I(ml,ie);var di={},gl=null;function Ns(){return gl=gl||new gt}di.La="serverreachability";function xa(h){ie.call(this,di.La,h)}I(xa,ie);function Ds(h){const _=Ns();We(_,new xa(_))}di.STAT_EVENT="statevent";function Ec(h,_){ie.call(this,di.STAT_EVENT,h),this.stat=_}I(Ec,ie);function ct(h){const _=Ns();We(_,new Ec(_,h))}di.Ma="timingevent";function Nt(h,_){ie.call(this,di.Ma,h),this.size=_}I(Nt,ie);function Rt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Ln(){this.g=!0}Ln.prototype.xa=function(){this.g=!1};function _l(h,_,v,R,U,G){h.info(function(){if(h.g)if(G)for(var se="",Ve=G.split("&"),Dt=0;Dt<Ve.length;Dt++){var Ue=Ve[Dt].split("=");if(1<Ue.length){var Bt=Ue[0];Ue=Ue[1];var Ot=Bt.split("_");se=2<=Ot.length&&Ot[1]=="type"?se+(Bt+"="+Ue+"&"):se+(Bt+"=redacted&")}}else se=null;else se=G;return"XMLHTTP REQ ("+R+") [attempt "+U+"]: "+_+`
`+v+`
`+se})}function Rd(h,_,v,R,U,G,se){h.info(function(){return"XMLHTTP RESP ("+R+") [ attempt "+U+"]: "+_+`
`+v+`
`+G+" "+se})}function Os(h,_,v,R){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+xr(h,v)+(R?" "+R:"")})}function Tc(h,_){h.info(function(){return"TIMEOUT: "+_})}Ln.prototype.info=function(){};function xr(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var R=v[h];if(!(2>R.length)){var U=R[1];if(Array.isArray(U)&&!(1>U.length)){var G=U[0];if(G!="noop"&&G!="stop"&&G!="close")for(var se=1;se<U.length;se++)U[se]=""}}}}return Jn(v)}catch{return _}}var Ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pi;function mi(){}I(mi,fl),mi.prototype.g=function(){return new XMLHttpRequest},mi.prototype.i=function(){return{}},pi=new mi;function pn(h,_,v,R){this.j=h,this.i=_,this.l=v,this.R=R||1,this.U=new Or(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Et}function Et(){this.i=null,this.g="",this.h=!1}var yl={},La={};function ei(h,_,v){h.L=1,h.v=zr(Rn(_)),h.m=v,h.P=!0,Ki(h,null)}function Ki(h,_){h.F=Date.now(),Lr(h),h.A=Rn(h.v);var v=h.A,R=h.R;Array.isArray(R)||(R=[String(R)]),Rl(v.i,"t",R),h.C=0,v=h.j.J,h.h=new Et,h.g=Vc(h.j,v?_:null,!h.m),0<h.O&&(h.M=new Ad(S(h.Y,h,h.g),h.O)),_=h.U,v=h.g,R=h.ca;var U="readystatechange";Array.isArray(U)||(U&&(Mr[0]=U.toString()),U=Mr);for(var G=0;G<U.length;G++){var se=_c(v,U[G],R||_.handleEvent,!1,_.h||_);if(!se)break;_.g[se.key]=se}_=h.H?w(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Ds(),_l(h.i,h.u,h.A,h.l,h.R,h.m)}pn.prototype.ca=function(h){h=h.target;const _=this.M;_&&zn(h)==3?_.j():this.Y(h)},pn.prototype.Y=function(h){try{if(h==this.g)e:{const Ot=zn(this.g);var _=this.g.Ba();const es=this.g.Z();if(!(3>Ot)&&(Ot!=3||this.g&&(this.h.h||this.g.oa()||Nc(this.g)))){this.J||Ot!=4||_==7||(_==8||0>=es?Ds(3):Ds(2)),ks(this);var v=this.g.Z();this.X=v;t:if(Sc(this)){var R=Nc(this.g);h="";var U=R.length,G=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),gi(this);var se="";break t}this.h.i=new d.TextDecoder}for(_=0;_<U;_++)this.h.h=!0,h+=this.h.i.decode(R[_],{stream:!(G&&_==U-1)});R.length=0,this.h.g+=h,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=v==200,Rd(this.i,this.u,this.A,this.l,this.R,Ot,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,Dt=this.g;if((Ve=Dt.g?Dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(Ve)){var Ue=Ve;break t}}Ue=null}if(v=Ue)Os(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vr(this,v);else{this.o=!1,this.s=3,ct(12),Yt(this),gi(this);break e}}if(this.P){v=!0;let Qt;for(;!this.J&&this.C<se.length;)if(Qt=Ac(this,se),Qt==La){Ot==4&&(this.s=4,ct(14),v=!1),Os(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==yl){this.s=4,ct(15),Os(this.i,this.l,se,"[Invalid Chunk]"),v=!1;break}else Os(this.i,this.l,Qt,null),Vr(this,Qt);if(Sc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ot!=4||se.length!=0||this.h.h||(this.s=1,ct(16),v=!1),this.o=this.o&&v,!v)Os(this.i,this.l,se,"[Invalid Chunked Response]"),Yt(this),gi(this);else if(0<se.length&&!this.W){this.W=!0;var Bt=this.j;Bt.g==this&&Bt.ba&&!Bt.M&&(Bt.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),Qr(Bt),Bt.M=!0,ct(11))}}else Os(this.i,this.l,se,null),Vr(this,se);Ot==4&&Yt(this),this.o&&!this.J&&(Ot==4?Pc(this.j,this):(this.o=!1,Lr(this)))}else Nd(this.g),v==400&&0<se.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),Yt(this),gi(this)}}}catch{}finally{}};function Sc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Ac(h,_){var v=h.C,R=_.indexOf(`
`,v);return R==-1?La:(v=Number(_.substring(v,R)),isNaN(v)?yl:(R+=1,R+v>_.length?La:(_=_.slice(R,R+v),h.C=R+v,_)))}pn.prototype.cancel=function(){this.J=!0,Yt(this)};function Lr(h){h.S=Date.now()+h.I,Rc(h,h.I)}function Rc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Rt(S(h.ba,h),_)}function ks(h){h.B&&(d.clearTimeout(h.B),h.B=null)}pn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Tc(this.i,this.A),this.L!=2&&(Ds(),ct(17)),Yt(this),this.s=2,gi(this)):Rc(this,this.S-h)};function gi(h){h.j.G==0||h.J||Pc(h.j,h)}function Yt(h){ks(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,kr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Vr(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||vl(v.h,h))){if(!h.K&&vl(v.h,h)&&v.G==3){try{var R=v.Da.g.parse(_)}catch{R=null}if(Array.isArray(R)&&R.length==3){var U=R;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)Qa(v),Ka(v);else break e;Nl(v),ct(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=Rt(S(v.Za,v),6e3));if(1>=Ua(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ji(v,11)}else if((h.K||v.g==h)&&Qa(v),!X(_))for(U=v.Da.g.parse(_),_=0;_<U.length;_++){let Ue=U[_];if(v.T=Ue[0],Ue=Ue[1],v.G==2)if(Ue[0]=="c"){v.K=Ue[1],v.ia=Ue[2];const Bt=Ue[3];Bt!=null&&(v.la=Bt,v.j.info("VER="+v.la));const Ot=Ue[4];Ot!=null&&(v.Aa=Ot,v.j.info("SVER="+v.Aa));const es=Ue[5];es!=null&&typeof es=="number"&&0<es&&(R=1.5*es,v.L=R,v.j.info("backChannelRequestTimeoutMs_="+R)),R=v;const Qt=h.g;if(Qt){const Ai=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ai){var G=R.h;G.g||Ai.indexOf("spdy")==-1&&Ai.indexOf("quic")==-1&&Ai.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(Ba(G,G.h),G.h=null))}if(R.D){const Ol=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ol&&(R.ya=Ol,Je(R.I,R.D,Ol))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),R=v;var se=h;if(R.qa=Lc(R,R.J?R.ia:null,R.W),se.K){mn(R.h,se);var Ve=se,Dt=R.L;Dt&&(Ve.I=Dt),Ve.B&&(ks(Ve),Lr(Ve)),R.g=se}else Mc(R);0<v.i.length&&Ya(v)}else Ue[0]!="stop"&&Ue[0]!="close"||Ji(v,7);else v.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?Ji(v,7):Cl(v):Ue[0]!="noop"&&v.l&&v.l.ta(Ue),v.v=0)}}Ds(4)}catch{}}var wc=class{constructor(h,_){this.g=h,this.map=_}};function Yi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Va(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Ua(h){return h.h?1:h.g?h.g.size:0}function vl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Ba(h,_){h.g?h.g.add(_):h.h=_}function mn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Yi.prototype.cancel=function(){if(this.i=El(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function El(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return H(h.i)}function wd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,R=0;R<v;R++)_.push(h[R]);return _}_=[],v=0;for(R in h)_[v++]=h[R];return _}function za(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const R in h)_[v++]=R;return _}}}function Tl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=za(h),R=wd(h),U=R.length,G=0;G<U;G++)_.call(void 0,R[G],v&&v[G],h)}var Ur=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bd(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var R=h[v].indexOf("="),U=null;if(0<=R){var G=h[v].substring(0,R);U=h[v].substring(R+1)}else G=h[v];_(G,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function wt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof wt){this.h=h.h,Br(this,h.j),this.o=h.o,this.g=h.g,Ps(this,h.s),this.l=h.l;var _=h.i,v=new $i;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),Qi(this,v),this.m=h.m}else h&&(_=String(h).match(Ur))?(this.h=!1,Br(this,_[1]||"",!0),this.o=Vn(_[2]||""),this.g=Vn(_[3]||"",!0),Ps(this,_[4]),this.l=Vn(_[5]||"",!0),Qi(this,_[6]||"",!0),this.m=Vn(_[7]||"")):(this.h=!1,this.i=new $i(null,this.h))}wt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Fr(_,Sl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Fr(_,Sl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(Fr(v,v.charAt(0)=="/"?Cd:Al,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",Fr(v,Fa)),h.join("")};function Rn(h){return new wt(h)}function Br(h,_,v){h.j=v?Vn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Ps(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Qi(h,_,v){_ instanceof $i?(h.i=_,Cc(h.i,h.h)):(v||(_=Fr(_,Id)),h.i=new $i(_,h.h))}function Je(h,_,v){h.i.set(_,v)}function zr(h){return Je(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Vn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Fr(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,bc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function bc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Sl=/[#\/\?@]/g,Al=/[#\?:]/g,Cd=/[#\?]/g,Id=/[#\?@]/g,Fa=/#/g;function $i(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Un(h){h.g||(h.g=new Map,h.h=0,h.i&&bd(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=$i.prototype,n.add=function(h,_){Un(this),this.i=null,h=_i(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function Wi(h,_){Un(h),_=_i(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Xi(h,_){return Un(h),_=_i(h,_),h.g.has(_)}n.forEach=function(h,_){Un(this),this.g.forEach(function(v,R){v.forEach(function(U){h.call(_,U,R,this)},this)},this)},n.na=function(){Un(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let R=0;R<_.length;R++){const U=h[R];for(let G=0;G<U.length;G++)v.push(_[R])}return v},n.V=function(h){Un(this);let _=[];if(typeof h=="string")Xi(this,h)&&(_=_.concat(this.g.get(_i(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return Un(this),this.i=null,h=_i(this,h),Xi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Rl(h,_,v){Wi(h,_),0<v.length&&(h.i=null,h.g.set(_i(h,_),H(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var R=_[v];const G=encodeURIComponent(String(R)),se=this.V(R);for(R=0;R<se.length;R++){var U=G;se[R]!==""&&(U+="="+encodeURIComponent(String(se[R]))),h.push(U)}}return this.i=h.join("&")};function _i(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Cc(h,_){_&&!h.j&&(Un(h),h.i=null,h.g.forEach(function(v,R){var U=R.toLowerCase();R!=U&&(Wi(this,R),Rl(this,U,v))},h)),h.j=_}function Hr(h,_){const v=new Ln;if(d.Image){const R=new Image;R.onload=D(Bn,v,"TestLoadImage: loaded",!0,_,R),R.onerror=D(Bn,v,"TestLoadImage: error",!1,_,R),R.onabort=D(Bn,v,"TestLoadImage: abort",!1,_,R),R.ontimeout=D(Bn,v,"TestLoadImage: timeout",!1,_,R),d.setTimeout(function(){R.ontimeout&&R.ontimeout()},1e4),R.src=h}else _(!1)}function ti(h,_){const v=new Ln,R=new AbortController,U=setTimeout(()=>{R.abort(),Bn(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:R.signal}).then(G=>{clearTimeout(U),G.ok?Bn(v,"TestPingServer: ok",!0,_):Bn(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(U),Bn(v,"TestPingServer: error",!1,_)})}function Bn(h,_,v,R,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),R(v)}catch{}}function jr(){this.g=new Pr}function yi(h,_,v){const R=v||"";try{Tl(h,function(U,G){let se=U;g(U)&&(se=Jn(U)),_.push(R+G+"="+encodeURIComponent(se))})}catch(U){throw _.push(R+"type="+encodeURIComponent("_badmap")),U}}function xs(h){this.l=h.Ub||null,this.j=h.eb||!1}I(xs,fl),xs.prototype.g=function(){return new Zi(this.l,this.j)},xs.prototype.i=function(h){return function(){return h}}({});function Zi(h,_){gt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Zi,gt),n=Zi.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ei(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ei(this)),this.g&&(this.readyState=3,Ei(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function wl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?vi(this):Ei(this),this.readyState==3&&wl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,vi(this))},n.Qa=function(h){this.g&&(this.response=h,vi(this))},n.ga=function(){this.g&&vi(this)};function vi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ei(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Ei(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function bl(h){let _="";return fe(h,function(v,R){_+=R,_+=":",_+=v,_+=`\r
`}),_}function Ut(h,_,v){e:{for(R in v){var R=!1;break e}R=!0}R||(v=bl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):Je(h,_,v))}function Ye(h){gt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Ye,gt);var Ha=/^https?$/i,qr=["POST","PUT"];n=Ye.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,R){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pi.g(),this.v=this.o?dl(this.o):dl(pi),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(G){Ic(this,G);return}if(h=v||"",v=new Map(this.headers),R)if(Object.getPrototypeOf(R)===Object.prototype)for(var U in R)v.set(U,R[U]);else if(typeof R.keys=="function"&&typeof R.get=="function")for(const G of R.keys())v.set(G,R.get(G));else throw Error("Unknown input type for opt_headers: "+String(R));R=Array.from(v.keys()).find(G=>G.toLowerCase()=="content-type"),U=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(qr,_,void 0))||R||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,se]of v)this.g.setRequestHeader(G,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gr(this),this.u=!0,this.g.send(h),this.u=!1}catch(G){Ic(this,G)}};function Ic(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,ja(h),Ti(h)}function ja(h){h.A||(h.A=!0,We(h,"complete"),We(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,We(this,"complete"),We(this,"abort"),Ti(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ti(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?qa(this):this.bb())},n.bb=function(){qa(this)};function qa(h){if(h.h&&typeof c<"u"&&(!h.v[1]||zn(h)!=4||h.Z()!=2)){if(h.u&&zn(h)==4)sn(h.Ea,0,h);else if(We(h,"readystatechange"),zn(h)==4){h.h=!1;try{const se=h.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var R;if(R=se===0){var U=String(h.D).match(Ur)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),R=!Ha.test(U?U.toLowerCase():"")}v=R}if(v)We(h,"complete"),We(h,"success");else{h.m=6;try{var G=2<zn(h)?h.g.statusText:""}catch{G=""}h.l=G+" ["+h.Z()+"]",ja(h)}}finally{Ti(h)}}}}function Ti(h,_){if(h.g){Gr(h);const v=h.g,R=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||We(h,"ready");try{v.onreadystatechange=R}catch{}}}function Gr(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function zn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Pa(_)}};function Nc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Nd(h){const _={};h=(h.g&&2<=zn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let R=0;R<h.length;R++){if(X(h[R]))continue;var v=x(h[R]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const G=_[U]||[];_[U]=G,G.push(v)}k(_,function(R){return R.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kr(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function Ga(h){this.Aa=0,this.i=[],this.j=new Ln,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kr("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kr("baseRetryDelayMs",5e3,h),this.cb=Kr("retryDelaySeedMs",1e4,h),this.Wa=Kr("forwardChannelMaxRetries",2,h),this.wa=Kr("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Yi(h&&h.concurrentRequestLimit),this.Da=new jr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ga.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,R){ct(0),this.W=h,this.H=_||{},v&&R!==void 0&&(this.H.OSID=v,this.H.OAID=R),this.F=this.X,this.I=Lc(this,null,this.W),Ya(this)};function Cl(h){if(Dc(h),h.G==3){var _=h.U++,v=Rn(h.I);if(Je(v,"SID",h.K),Je(v,"RID",_),Je(v,"TYPE","terminate"),Yr(h,v),_=new pn(h,h.j,_),_.L=2,_.v=zr(Rn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=Vc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Lr(_)}xc(h)}function Ka(h){h.g&&(Qr(h),h.g.cancel(),h.g=null)}function Dc(h){Ka(h),h.u&&(d.clearTimeout(h.u),h.u=null),Qa(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Ya(h){if(!Va(h.h)&&!h.s){h.s=!0;var _=h.Ga;re||O(),me||(re(),me=!0),Ge.add(_,h),h.B=0}}function Dd(h,_){return Ua(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Rt(S(h.Ga,h,_),Dl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const U=new pn(this,this.j,h);let G=this.o;if(this.S&&(G?(G=w(G),M(G,this.S)):G=this.S),this.m!==null||this.O||(U.H=G,G=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var R=this.i[v];if("__data__"in R.map&&(R=R.map.__data__,typeof R=="string")){R=R.length;break t}R=void 0}if(R===void 0)break;if(_+=R,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=Oc(this,U,_),v=Rn(this.I),Je(v,"RID",h),Je(v,"CVER",22),this.D&&Je(v,"X-HTTP-Session-Id",this.D),Yr(this,v),G&&(this.O?_="headers="+encodeURIComponent(String(bl(G)))+"&"+_:this.m&&Ut(v,this.m,G)),Ba(this.h,U),this.Ua&&Je(v,"TYPE","init"),this.P?(Je(v,"$req",_),Je(v,"SID","null"),U.T=!0,ei(U,v,null)):ei(U,v,_),this.G=2}}else this.G==3&&(h?Il(this,h):this.i.length==0||Va(this.h)||Il(this))};function Il(h,_){var v;_?v=_.l:v=h.U++;const R=Rn(h.I);Je(R,"SID",h.K),Je(R,"RID",v),Je(R,"AID",h.T),Yr(h,R),h.m&&h.o&&Ut(R,h.m,h.o),v=new pn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Oc(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Ba(h.h,v),ei(v,R,_)}function Yr(h,_){h.H&&fe(h.H,function(v,R){Je(_,R,v)}),h.l&&Tl({},function(v,R){Je(_,R,v)})}function Oc(h,_,v){v=Math.min(h.i.length,v);var R=h.l?S(h.l.Na,h.l,h):null;e:{var U=h.i;let G=-1;for(;;){const se=["count="+v];G==-1?0<v?(G=U[0].g,se.push("ofs="+G)):G=0:se.push("ofs="+G);let Ve=!0;for(let Dt=0;Dt<v;Dt++){let Ue=U[Dt].g;const Bt=U[Dt].map;if(Ue-=G,0>Ue)G=Math.max(0,U[Dt].g-100),Ve=!1;else try{yi(Bt,se,"req"+Ue+"_")}catch{R&&R(Bt)}}if(Ve){R=se.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,R}function Mc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;re||O(),me||(re(),me=!0),Ge.add(_,h),h.v=0}}function Nl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Rt(S(h.Fa,h),Dl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,kc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Rt(S(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Ka(this),kc(this))};function Qr(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function kc(h){h.g=new pn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Rn(h.qa);Je(_,"RID","rpc"),Je(_,"SID",h.K),Je(_,"AID",h.T),Je(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Je(_,"TO",h.ja),Je(_,"TYPE","xmlhttp"),Yr(h,_),h.m&&h.o&&Ut(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=zr(Rn(_)),v.m=null,v.P=!0,Ki(v,h)}n.Za=function(){this.C!=null&&(this.C=null,Ka(this),Nl(this),ct(19))};function Qa(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Pc(h,_){var v=null;if(h.g==_){Qa(h),Qr(h),h.g=null;var R=2}else if(vl(h.h,_))v=_.D,mn(h.h,_),R=1;else return;if(h.G!=0){if(_.o)if(R==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var U=h.B;R=Ns(),We(R,new Nt(R,v)),Ya(h)}else Mc(h);else if(U=_.s,U==3||U==0&&0<_.X||!(R==1&&Dd(h,_)||R==2&&Nl(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),U){case 1:Ji(h,5);break;case 4:Ji(h,10);break;case 3:Ji(h,6);break;default:Ji(h,2)}}}function Dl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function Ji(h,_){if(h.j.info("Error code "+_),_==2){var v=S(h.fb,h),R=h.Xa;const U=!R;R=new wt(R||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Br(R,"https"),zr(R),U?Hr(R.toString(),v):ti(R.toString(),v)}else ct(2);h.G=0,h.l&&h.l.sa(_),xc(h),Dc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function xc(h){if(h.G=0,h.ka=[],h.l){const _=El(h.h);(_.length!=0||h.i.length!=0)&&(B(h.ka,_),B(h.ka,h.i),h.h.i.length=0,H(h.i),h.i.length=0),h.l.ra()}}function Lc(h,_,v){var R=v instanceof wt?Rn(v):new wt(v);if(R.g!="")_&&(R.g=_+"."+R.g),Ps(R,R.s);else{var U=d.location;R=U.protocol,_=_?_+"."+U.hostname:U.hostname,U=+U.port;var G=new wt(null);R&&Br(G,R),_&&(G.g=_),U&&Ps(G,U),v&&(G.l=v),R=G}return v=h.D,_=h.ya,v&&_&&Je(R,v,_),Je(R,"VER",h.la),Yr(h,R),R}function Vc(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ye(new xs({eb:v})):new Ye(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uc(){}n=Uc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function $a(){}$a.prototype.g=function(h,_){return new gn(h,_)};function gn(h,_){gt.call(this),this.g=new Ga(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!X(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!X(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Si(this)}I(gn,gt),gn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gn.prototype.close=function(){Cl(this.g)},gn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=Jn(h),h=v);_.i.push(new wc(_.Ya++,h)),_.G==3&&Ya(_)},gn.prototype.N=function(){this.g.l=null,delete this.j,Cl(this.g),delete this.g,gn.aa.N.call(this)};function Bc(h){qi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}I(Bc,qi);function zc(){ml.call(this),this.status=1}I(zc,ml);function Si(h){this.g=h}I(Si,Uc),Si.prototype.ua=function(){We(this.g,"a")},Si.prototype.ta=function(h){We(this.g,new Bc(h))},Si.prototype.sa=function(h){We(this.g,new zc)},Si.prototype.ra=function(){We(this.g,"b")},$a.prototype.createWebChannel=$a.prototype.g,gn.prototype.send=gn.prototype.o,gn.prototype.open=gn.prototype.m,gn.prototype.close=gn.prototype.close,vw=function(){return new $a},yw=function(){return Ns()},_w=di,yg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ms.NO_ERROR=0,Ms.TIMEOUT=8,Ms.HTTP_ERROR=6,rf=Ms,Gi.COMPLETE="complete",gw=Gi,pl.EventType=ji,ji.OPEN="a",ji.CLOSE="b",ji.ERROR="c",ji.MESSAGE="d",gt.prototype.listen=gt.prototype.K,Iu=pl,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,mw=Ye}).apply(typeof Gh<"u"?Gh:typeof self<"u"?self:typeof window<"u"?window:{});const K0="@firebase/firestore",Y0="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let rl="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Yf("@firebase/firestore");function bo(){return Ta.logLevel}function ue(n,...e){if(Ta.logLevel<=Pe.DEBUG){const t=e.map(b_);Ta.debug(`Firestore (${rl}): ${n}`,...t)}}function Rs(n,...e){if(Ta.logLevel<=Pe.ERROR){const t=e.map(b_);Ta.error(`Firestore (${rl}): ${n}`,...t)}}function Ho(n,...e){if(Ta.logLevel<=Pe.WARN){const t=e.map(b_);Ta.warn(`Firestore (${rl}): ${n}`,...t)}}function b_(n){if(typeof n=="string")return n;try{/**
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
 */function Ae(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Ew(n,s,t)}function Ew(n,e,t){let s=`FIRESTORE (${rl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Rs(s),new Error(s)}function $e(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||Ew(e,a,s)}function be(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends zi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ox{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ln.UNAUTHENTICATED))}shutdown(){}}class lx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ux{constructor(e){this.t=e,this.currentUser=ln.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$e(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new pr,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new pr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($e(typeof s.accessToken=="string",31837,{l:s}),new Tw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string",2055,{h:e}),new ln(e)}}class cx{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=ln.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class hx{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new cx(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ln.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Q0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fx{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$e(this.o===void 0,3512);const s=l=>{l.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ue("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Q0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?($e(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Q0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function dx(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function Sw(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=dx(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Ne(n,e){return n<e?-1:n>e?1:0}function vg(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),a=e.codePointAt(t);if(s!==a){if(s<128&&a<128)return Ne(s,a);{const l=Sw(),c=px(l.encode($0(n,t)),l.encode($0(e,t)));return c!==0?c:Ne(s,a)}}t+=s>65535?2:1}return Ne(n.length,e.length)}function $0(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function px(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ne(n[t],e[t]);return Ne(n.length,e.length)}function jo(n,e,t){return n.length===e.length&&n.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=-62135596800,X0=1e6;class xt{static now(){return xt.fromMillis(Date.now())}static fromDate(e){return xt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*X0);return new xt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ye(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ye(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<W0)throw new ye(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/X0}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-W0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new xt(0,0))}static max(){return new we(new xt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="__name__";class Ni{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ae(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ae(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ni.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ni?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Ni.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ne(e.length,t.length)}static compareSegments(e,t){const s=Ni.isNumericId(e),a=Ni.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Ni.extractNumericId(e).compare(Ni.extractNumericId(t)):vg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class vt extends Ni{construct(e,t,s){return new vt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ye(ne.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new vt(t)}static emptyPath(){return new vt([])}}const mx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class en extends Ni{construct(e,t,s){return new en(e,t,s)}static isValidIdentifier(e){return mx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),en.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Z0}static keyField(){return new en([Z0])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new ye(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ye(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ye(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new ye(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new en(t)}static emptyPath(){return new en([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(vt.fromString(e))}static fromName(e){return new ve(vt.fromString(e).popFirst(5))}static empty(){return new ve(vt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&vt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return vt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new vt(e.slice()))}}/**
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
 */const Qu=-1;function gx(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=we.fromTimestamp(s===1e9?new xt(t+1,0):new xt(t,s));return new yr(a,ve.empty(),e)}function _x(n){return new yr(n.readTime,n.key,Qu)}class yr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new yr(we.min(),ve.empty(),Qu)}static max(){return new yr(we.max(),ve.empty(),Qu)}}function yx(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:Ne(n.largestBatchId,e.largestBatchId))}/**
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
 */const vx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ex{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al(n){if(n.code!==ne.FAILED_PRECONDITION||n.message!==vx)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof J?t:J.resolve(t)}catch(t){return J.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):J.reject(t)}static resolve(e){return new J((t,s)=>{t(e)})}static reject(e){return new J((t,s)=>{s(e)})}static waitFor(e){return new J((t,s)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},p=>s(p))}),c=!0,l===a&&t()})}static or(e){let t=J.resolve(!1);for(const s of e)t=t.next(a=>a?J.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new J((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next(y=>{c[g]=y,++d,d===l&&s(c)},y=>a(y))}})}static doWhile(e,t){return new J((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function Tx(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ol(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class sd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}sd.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=-1;function rd(n){return n==null}function Nf(n){return n===0&&1/n==-1/0}function Sx(n){return typeof n=="number"&&Number.isInteger(n)&&!Nf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="";function Ax(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=J0(e)),e=Rx(n.get(t),e);return J0(e)}function Rx(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case Rw:t+="";break;default:t+=l}}return t}function J0(n){return n+Rw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function br(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ww(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){this.comparator=e,this.root=t||Zt.EMPTY}insert(e,t){return new pt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Zt.BLACK,null,null))}remove(e){return new pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Zt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kh(this.root,e,this.comparator,!0)}}class Kh{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Zt{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Zt.RED,this.left=a??Zt.EMPTY,this.right=l??Zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Zt(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Zt.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}}Zt.EMPTY=null,Zt.RED=!0,Zt.BLACK=!1;Zt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Zt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.comparator=e,this.data=new pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tS(this.data.getIterator())}getIteratorFrom(e){return new tS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Lt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Lt(this.comparator);return t.data=e,t}}class tS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class li{constructor(e){this.fields=e,e.sort(en.comparator)}static empty(){return new li([])}unionWith(e){let t=new Lt(en.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new li(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return jo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class bw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new bw("Invalid base64 string: "+l):l}}(e);return new nn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new nn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nn.EMPTY_BYTE_STRING=new nn("");const wx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(n){if($e(!!n,39018),typeof n=="string"){let e=0;const t=wx.exec(n);if($e(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:At(n.seconds),nanos:At(n.nanos)}}function At(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Er(n){return typeof n=="string"?nn.fromBase64String(n):nn.fromUint8Array(n)}/**
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
 */const Cw="server_timestamp",Iw="__type__",Nw="__previous_value__",Dw="__local_write_time__";function I_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Iw])===null||t===void 0?void 0:t.stringValue)===Cw}function ad(n){const e=n.mapValue.fields[Nw];return I_(e)?ad(e):e}function $u(n){const e=vr(n.mapValue.fields[Dw].timestampValue);return new xt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,t,s,a,l,c,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const Df="(default)";class Wu{constructor(e,t){this.projectId=e,this.database=t||Df}static empty(){return new Wu("","")}get isDefaultDatabase(){return this.database===Df}isEqual(e){return e instanceof Wu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ow="__type__",Cx="__max__",Yh={mapValue:{}},Mw="__vector__",Of="value";function Tr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?I_(n)?4:Nx(n)?9007199254740991:Ix(n)?10:11:Ae(28295,{value:n})}function Li(n,e){if(n===e)return!0;const t=Tr(n);if(t!==Tr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return $u(n).isEqual($u(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=vr(a.timestampValue),d=vr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,l){return Er(a.bytesValue).isEqual(Er(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,l){return At(a.geoPointValue.latitude)===At(l.geoPointValue.latitude)&&At(a.geoPointValue.longitude)===At(l.geoPointValue.longitude)}(n,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return At(a.integerValue)===At(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=At(a.doubleValue),d=At(l.doubleValue);return c===d?Nf(c)===Nf(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return jo(n.arrayValue.values||[],e.arrayValue.values||[],Li);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(eS(c)!==eS(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Li(c[p],d[p])))return!1;return!0}(n,e);default:return Ae(52216,{left:n})}}function Xu(n,e){return(n.values||[]).find(t=>Li(t,e))!==void 0}function qo(n,e){if(n===e)return 0;const t=Tr(n),s=Tr(e);if(t!==s)return Ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=At(l.integerValue||l.doubleValue),p=At(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return nS(n.timestampValue,e.timestampValue);case 4:return nS($u(n),$u(e));case 5:return vg(n.stringValue,e.stringValue);case 6:return function(l,c){const d=Er(l),p=Er(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=Ne(d[g],p[g]);if(y!==0)return y}return Ne(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Ne(At(l.latitude),At(c.latitude));return d!==0?d:Ne(At(l.longitude),At(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return iS(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,g,y;const T=l.fields||{},S=c.fields||{},D=(d=T[Of])===null||d===void 0?void 0:d.arrayValue,I=(p=S[Of])===null||p===void 0?void 0:p.arrayValue,H=Ne(((g=D==null?void 0:D.values)===null||g===void 0?void 0:g.length)||0,((y=I==null?void 0:I.values)===null||y===void 0?void 0:y.length)||0);return H!==0?H:iS(D,I)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===Yh.mapValue&&c===Yh.mapValue)return 0;if(l===Yh.mapValue)return 1;if(c===Yh.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let T=0;T<p.length&&T<y.length;++T){const S=vg(p[T],y[T]);if(S!==0)return S;const D=qo(d[p[T]],g[y[T]]);if(D!==0)return D}return Ne(p.length,y.length)}(n.mapValue,e.mapValue);default:throw Ae(23264,{Pe:t})}}function nS(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ne(n,e);const t=vr(n),s=vr(e),a=Ne(t.seconds,s.seconds);return a!==0?a:Ne(t.nanos,s.nanos)}function iS(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=qo(t[a],s[a]);if(l)return l}return Ne(t.length,s.length)}function Go(n){return Eg(n)}function Eg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=vr(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Er(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ve.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Eg(l);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${Eg(t.fields[c])}`;return a+"}"}(n.mapValue):Ae(61005,{value:n})}function af(n){switch(Tr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ad(n);return e?16+af(e):16;case 5:return 2*n.stringValue.length;case 6:return Er(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+af(l),0)}(n.arrayValue);case 10:case 11:return function(s){let a=0;return br(s.fields,(l,c)=>{a+=l.length+af(c)}),a}(n.mapValue);default:throw Ae(13486,{value:n})}}function Tg(n){return!!n&&"integerValue"in n}function N_(n){return!!n&&"arrayValue"in n}function sS(n){return!!n&&"nullValue"in n}function rS(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function of(n){return!!n&&"mapValue"in n}function Ix(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ow])===null||t===void 0?void 0:t.stringValue)===Mw}function Vu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return br(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Vu(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Nx(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Cx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.value=e}static empty(){return new kn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!of(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vu(t)}setAll(e){let t=en.emptyPath(),s={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Vu(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());of(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Li(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];of(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){br(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new kn(Vu(this.value))}}function kw(n){const e=[];return br(n.fields,(t,s)=>{const a=new en([t]);if(of(s)){const l=kw(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new li(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new hn(e,0,we.min(),we.min(),we.min(),kn.empty(),0)}static newFoundDocument(e,t,s,a){return new hn(e,1,t,we.min(),s,a,0)}static newNoDocument(e,t){return new hn(e,2,t,we.min(),we.min(),kn.empty(),0)}static newUnknownDocument(e,t){return new hn(e,3,t,we.min(),we.min(),kn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof hn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mf{constructor(e,t){this.position=e,this.inclusive=t}}function aS(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=ve.comparator(ve.fromName(c.referenceValue),t.key):s=qo(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function oS(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Li(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class kf{constructor(e,t="asc"){this.field=e,this.dir=t}}function Dx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Pw{}class Pt extends Pw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Mx(e,t,s):t==="array-contains"?new xx(e,s):t==="in"?new Lx(e,s):t==="not-in"?new Vx(e,s):t==="array-contains-any"?new Ux(e,s):new Pt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new kx(e,s):new Px(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(qo(t,this.value)):t!==null&&Tr(this.value)===Tr(t)&&this.matchesComparison(qo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vi extends Pw{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Vi(e,t)}matches(e){return xw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function xw(n){return n.op==="and"}function Lw(n){return Ox(n)&&xw(n)}function Ox(n){for(const e of n.filters)if(e instanceof Vi)return!1;return!0}function Sg(n){if(n instanceof Pt)return n.field.canonicalString()+n.op.toString()+Go(n.value);if(Lw(n))return n.filters.map(e=>Sg(e)).join(",");{const e=n.filters.map(t=>Sg(t)).join(",");return`${n.op}(${e})`}}function Vw(n,e){return n instanceof Pt?function(s,a){return a instanceof Pt&&s.op===a.op&&s.field.isEqual(a.field)&&Li(s.value,a.value)}(n,e):n instanceof Vi?function(s,a){return a instanceof Vi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,c,d)=>l&&Vw(c,a.filters[d]),!0):!1}(n,e):void Ae(19439)}function Uw(n){return n instanceof Pt?function(t){return`${t.field.canonicalString()} ${t.op} ${Go(t.value)}`}(n):n instanceof Vi?function(t){return t.op.toString()+" {"+t.getFilters().map(Uw).join(" ,")+"}"}(n):"Filter"}class Mx extends Pt{constructor(e,t,s){super(e,t,s),this.key=ve.fromName(s.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class kx extends Pt{constructor(e,t){super(e,"in",t),this.keys=Bw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Px extends Pt{constructor(e,t){super(e,"not-in",t),this.keys=Bw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Bw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ve.fromName(s.referenceValue))}class xx extends Pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return N_(t)&&Xu(t.arrayValue,this.value)}}class Lx extends Pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xu(this.value.arrayValue,t)}}class Vx extends Pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Xu(this.value.arrayValue,t)}}class Ux extends Pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!N_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Xu(this.value.arrayValue,s))}}/**
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
 */class Bx{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Ie=null}}function lS(n,e=null,t=[],s=[],a=null,l=null,c=null){return new Bx(n,e,t,s,a,l,c)}function D_(n){const e=be(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Sg(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),rd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Go(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Go(s)).join(",")),e.Ie=t}return e.Ie}function O_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Dx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Vw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!oS(n.startAt,e.startAt)&&oS(n.endAt,e.endAt)}function Ag(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function zx(n,e,t,s,a,l,c,d){return new od(n,e,t,s,a,l,c,d)}function M_(n){return new od(n)}function uS(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Fx(n){return n.collectionGroup!==null}function Uu(n){const e=be(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Lt(en.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new kf(l,s))}),t.has(en.keyField().canonicalString())||e.Ee.push(new kf(en.keyField(),s))}return e.Ee}function ki(n){const e=be(n);return e.de||(e.de=Hx(e,Uu(n))),e.de}function Hx(n,e){if(n.limitType==="F")return lS(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new kf(a.field,l)});const t=n.endAt?new Mf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Mf(n.startAt.position,n.startAt.inclusive):null;return lS(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Rg(n,e,t){return new od(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ld(n,e){return O_(ki(n),ki(e))&&n.limitType===e.limitType}function zw(n){return`${D_(ki(n))}|lt:${n.limitType}`}function Co(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>Uw(a)).join(", ")}]`),rd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>Go(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>Go(a)).join(",")),`Target(${s})`}(ki(n))}; limitType=${n.limitType})`}function ud(n,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ve.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(n,e)&&function(s,a){for(const l of Uu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(n,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(n,e)&&function(s,a){return!(s.startAt&&!function(c,d,p){const g=aS(c,d,p);return c.inclusive?g<=0:g<0}(s.startAt,Uu(s),a)||s.endAt&&!function(c,d,p){const g=aS(c,d,p);return c.inclusive?g>=0:g>0}(s.endAt,Uu(s),a))}(n,e)}function jx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Fw(n){return(e,t)=>{let s=!1;for(const a of Uu(n)){const l=qx(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function qx(n,e,t){const s=n.field.isKeyField()?ve.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?qo(p,g):Ae(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Ae(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return ww(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx=new pt(ve.comparator);function ws(){return Gx}const Hw=new pt(ve.comparator);function Nu(...n){let e=Hw;for(const t of n)e=e.insert(t.key,t);return e}function jw(n){let e=Hw;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ma(){return Bu()}function qw(){return Bu()}function Bu(){return new Na(n=>n.toString(),(n,e)=>n.isEqual(e))}const Kx=new pt(ve.comparator),Yx=new Lt(ve.comparator);function xe(...n){let e=Yx;for(const t of n)e=e.add(t);return e}const Qx=new Lt(Ne);function $x(){return Qx}/**
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
 */function k_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nf(e)?"-0":e}}function Gw(n){return{integerValue:""+n}}function Wx(n,e){return Sx(e)?Gw(e):k_(n,e)}/**
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
 */class cd{constructor(){this._=void 0}}function Xx(n,e,t){return n instanceof Pf?function(a,l){const c={fields:{[Iw]:{stringValue:Cw},[Dw]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&I_(l)&&(l=ad(l)),l&&(c.fields[Nw]=l),{mapValue:c}}(t,e):n instanceof Ko?Yw(n,e):n instanceof Zu?Qw(n,e):function(a,l){const c=Kw(a,l),d=cS(c)+cS(a.Re);return Tg(c)&&Tg(a.Re)?Gw(d):k_(a.serializer,d)}(n,e)}function Zx(n,e,t){return n instanceof Ko?Yw(n,e):n instanceof Zu?Qw(n,e):t}function Kw(n,e){return n instanceof xf?function(s){return Tg(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class Pf extends cd{}class Ko extends cd{constructor(e){super(),this.elements=e}}function Yw(n,e){const t=$w(e);for(const s of n.elements)t.some(a=>Li(a,s))||t.push(s);return{arrayValue:{values:t}}}class Zu extends cd{constructor(e){super(),this.elements=e}}function Qw(n,e){let t=$w(e);for(const s of n.elements)t=t.filter(a=>!Li(a,s));return{arrayValue:{values:t}}}class xf extends cd{constructor(e,t){super(),this.serializer=e,this.Re=t}}function cS(n){return At(n.integerValue||n.doubleValue)}function $w(n){return N_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,t){this.field=e,this.transform=t}}function eL(n,e){return n.field.isEqual(e.field)&&function(s,a){return s instanceof Ko&&a instanceof Ko||s instanceof Zu&&a instanceof Zu?jo(s.elements,a.elements,Li):s instanceof xf&&a instanceof xf?Li(s.Re,a.Re):s instanceof Pf&&a instanceof Pf}(n.transform,e.transform)}class tL{constructor(e,t){this.version=e,this.transformResults=t}}class vs{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new vs}static exists(e){return new vs(void 0,e)}static updateTime(e){return new vs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class hd{}function Ww(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Zw(n.key,vs.none()):new fd(n.key,n.data,vs.none());{const t=n.data,s=kn.empty();let a=new Lt(en.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Da(n.key,s,new li(a.toArray()),vs.none())}}function nL(n,e,t){n instanceof fd?function(a,l,c){const d=a.value.clone(),p=fS(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Da?function(a,l,c){if(!lf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=fS(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(Xw(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function zu(n,e,t,s){return n instanceof fd?function(l,c,d,p){if(!lf(l.precondition,c))return d;const g=l.value.clone(),y=dS(l.fieldTransforms,p,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,e,t,s):n instanceof Da?function(l,c,d,p){if(!lf(l.precondition,c))return d;const g=dS(l.fieldTransforms,p,c),y=c.data;return y.setAll(Xw(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,s):function(l,c,d){return lf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function iL(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=Kw(s.transform,a||null);l!=null&&(t===null&&(t=kn.empty()),t.set(s.field,l))}return t||null}function hS(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&jo(s,a,(l,c)=>eL(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class fd extends hd{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Da extends hd{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Xw(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function fS(n,e,t){const s=new Map;$e(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,Zx(c,d,t[a]))}return s}function dS(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,Xx(l,c,e))}return s}class Zw extends hd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sL extends hd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&nL(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=zu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=zu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=qw();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=Ww(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),xe())}isEqual(e){return this.batchId===e.batchId&&jo(this.mutations,e.mutations,(t,s)=>hS(t,s))&&jo(this.baseMutations,e.baseMutations,(t,s)=>hS(t,s))}}class P_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){$e(e.mutations.length===s.length,58842,{fe:e.mutations.length,ge:s.length});let a=function(){return Kx}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new P_(e,t,s,a)}}/**
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
 */class aL{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class oL{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It,ze;function lL(n){switch(n){case ne.OK:return Ae(64938);case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0;default:return Ae(15467,{code:n})}}function Jw(n){if(n===void 0)return Rs("GRPC error has no .code"),ne.UNKNOWN;switch(n){case It.OK:return ne.OK;case It.CANCELLED:return ne.CANCELLED;case It.UNKNOWN:return ne.UNKNOWN;case It.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case It.INTERNAL:return ne.INTERNAL;case It.UNAVAILABLE:return ne.UNAVAILABLE;case It.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case It.NOT_FOUND:return ne.NOT_FOUND;case It.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case It.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case It.ABORTED:return ne.ABORTED;case It.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case It.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case It.DATA_LOSS:return ne.DATA_LOSS;default:return Ae(39323,{code:n})}}(ze=It||(It={}))[ze.OK=0]="OK",ze[ze.CANCELLED=1]="CANCELLED",ze[ze.UNKNOWN=2]="UNKNOWN",ze[ze.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ze[ze.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ze[ze.NOT_FOUND=5]="NOT_FOUND",ze[ze.ALREADY_EXISTS=6]="ALREADY_EXISTS",ze[ze.PERMISSION_DENIED=7]="PERMISSION_DENIED",ze[ze.UNAUTHENTICATED=16]="UNAUTHENTICATED",ze[ze.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ze[ze.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ze[ze.ABORTED=10]="ABORTED",ze[ze.OUT_OF_RANGE=11]="OUT_OF_RANGE",ze[ze.UNIMPLEMENTED=12]="UNIMPLEMENTED",ze[ze.INTERNAL=13]="INTERNAL",ze[ze.UNAVAILABLE=14]="UNAVAILABLE",ze[ze.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const uL=new dr([4294967295,4294967295],0);function pS(n){const e=Sw().encode(n),t=new pw;return t.update(e),new Uint8Array(t.digest())}function mS(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new dr([t,s],0),new dr([a,l],0)]}class x_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Du(`Invalid padding: ${t}`);if(s<0)throw new Du(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Du(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Du(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=dr.fromNumber(this.pe)}we(e,t,s){let a=e.add(t.multiply(dr.fromNumber(s)));return a.compare(uL)===1&&(a=new dr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=pS(e),[s,a]=mS(t);for(let l=0;l<this.hashCount;l++){const c=this.we(s,a,l);if(!this.Se(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new x_(l,a,t);return s.forEach(d=>c.insert(d)),c}insert(e){if(this.pe===0)return;const t=pS(e),[s,a]=mS(t);for(let l=0;l<this.hashCount;l++){const c=this.we(s,a,l);this.be(c)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Du extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,dc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new dd(we.min(),a,new pt(Ne),ws(),xe())}}class dc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new dc(s,t,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t,s,a){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=a}}class eb{constructor(e,t){this.targetId=e,this.Ce=t}}class tb{constructor(e,t,s=nn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class gS{constructor(){this.Fe=0,this.Me=_S(),this.xe=nn.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=xe(),t=xe(),s=xe();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Ae(38017,{changeType:l})}}),new dc(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=_S()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,$e(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class cL{constructor(e){this.ze=e,this.je=new Map,this.He=ws(),this.Je=Qh(),this.Ye=Qh(),this.Ze=new pt(Ne)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:Ae(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,s=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(Ag(l))if(s===0){const c=new ve(l.path);this.tt(t,c,hn.newNoDocument(c,we.min()))}else $e(s===1,20013,{expectedCount:s});else{const c=this.ut(t);if(c!==s){const d=this.ct(e),p=d?this.lt(d,e,c):1;if(p!==0){this.st(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Er(s).toUint8Array()}catch(p){if(p instanceof bw)return Ho("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new x_(c,a,l)}catch(p){return Ho(p instanceof Du?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.pe===0?null:d}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let a=0;return s.forEach(l=>{const c=this.ze.Pt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,c)=>{const d=this._t(c);if(d){if(l.current&&Ag(d.target)){const p=new ve(d.target.path);this.Et(p).has(c)||this.dt(c,p)||this.tt(c,p,hn.newNoDocument(p,e))}l.Le&&(t.set(c,l.qe()),l.Qe())}});let s=xe();this.Ye.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this._t(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(l))}),this.He.forEach((l,c)=>c.setReadTime(e));const a=new dd(e,t,this.Ze,this.He,s);return this.He=ws(),this.Je=Qh(),this.Ye=Qh(),this.Ze=new pt(Ne),a}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new gS,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Lt(Ne),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Lt(Ne),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new gS),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Qh(){return new pt(ve.comparator)}function _S(){return new pt(ve.comparator)}const hL={asc:"ASCENDING",desc:"DESCENDING"},fL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dL={and:"AND",or:"OR"};class pL{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wg(n,e){return n.useProto3Json||rd(e)?e:{value:e}}function Lf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nb(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mL(n,e){return Lf(n,e.toTimestamp())}function Pi(n){return $e(!!n,49232),we.fromTimestamp(function(t){const s=vr(t);return new xt(s.seconds,s.nanos)}(n))}function L_(n,e){return bg(n,e).canonicalString()}function bg(n,e){const t=function(a){return new vt(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ib(n){const e=vt.fromString(n);return $e(lb(e),10190,{key:e.toString()}),e}function Cg(n,e){return L_(n.databaseId,e.path)}function jm(n,e){const t=ib(e);if(t.get(1)!==n.databaseId.projectId)throw new ye(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ye(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(rb(t))}function sb(n,e){return L_(n.databaseId,e)}function gL(n){const e=ib(n);return e.length===4?vt.emptyPath():rb(e)}function Ig(n){return new vt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function rb(n){return $e(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function yS(n,e,t){return{name:Cg(n,e),fields:t.value.mapValue.fields}}function _L(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ae(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,y){return g.useProto3Json?($e(y===void 0||typeof y=="string",58123),nn.fromBase64String(y||"")):($e(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),nn.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const y=g.code===void 0?ne.UNKNOWN:Jw(g.code);return new ye(y,g.message||"")}(c);t=new tb(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=jm(n,s.document.name),l=Pi(s.document.updateTime),c=s.document.createTime?Pi(s.document.createTime):we.min(),d=new kn({mapValue:{fields:s.document.fields}}),p=hn.newFoundDocument(a,l,c,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new uf(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=jm(n,s.document),l=s.readTime?Pi(s.readTime):we.min(),c=hn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new uf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=jm(n,s.document),l=s.removedTargetIds||[];t=new uf([],l,a,null)}else{if(!("filter"in e))return Ae(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new oL(a,l),d=s.targetId;t=new eb(d,c)}}return t}function yL(n,e){let t;if(e instanceof fd)t={update:yS(n,e.key,e.value)};else if(e instanceof Zw)t={delete:Cg(n,e.key)};else if(e instanceof Da)t={update:yS(n,e.key,e.data),updateMask:CL(e.fieldMask)};else{if(!(e instanceof sL))return Ae(16599,{ft:e.type});t={verify:Cg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,c){const d=c.transform;if(d instanceof Pf)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Ko)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Zu)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof xf)return{fieldPath:c.field.canonicalString(),increment:d.Re};throw Ae(20930,{transform:c.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:mL(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ae(27497)}(n,e.precondition)),t}function vL(n,e){return n&&n.length>0?($e(e!==void 0,14353),n.map(t=>function(a,l){let c=a.updateTime?Pi(a.updateTime):Pi(l);return c.isEqual(we.min())&&(c=Pi(l)),new tL(c,a.transformResults||[])}(t,e))):[]}function EL(n,e){return{documents:[sb(n,e.path)]}}function TL(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=sb(n,a);const l=function(g){if(g.length!==0)return ob(Vi.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(y=>function(S){return{field:Io(S.field),direction:RL(S.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=wg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:t,parent:a}}function SL(n){let e=gL(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){$e(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(T){const S=ab(T);return S instanceof Vi&&Lw(S)?S.getFilters():[S]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(S=>function(I){return new kf(No(I.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(S))}(t.orderBy));let d=null;t.limit&&(d=function(T){let S;return S=typeof T=="object"?T.value:T,rd(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(T){const S=!!T.before,D=T.values||[];return new Mf(D,S)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const S=!T.before,D=T.values||[];return new Mf(D,S)}(t.endAt)),zx(e,a,c,l,d,"F",p,g)}function AL(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ab(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=No(t.unaryFilter.field);return Pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=No(t.unaryFilter.field);return Pt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=No(t.unaryFilter.field);return Pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=No(t.unaryFilter.field);return Pt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}}(n):n.fieldFilter!==void 0?function(t){return Pt.create(No(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Vi.create(t.compositeFilter.filters.map(s=>ab(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}}(t.compositeFilter.op))}(n):Ae(30097,{filter:n})}function RL(n){return hL[n]}function wL(n){return fL[n]}function bL(n){return dL[n]}function Io(n){return{fieldPath:n.canonicalString()}}function No(n){return en.fromServerFormat(n.fieldPath)}function ob(n){return n instanceof Pt?function(t){if(t.op==="=="){if(rS(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NAN"}};if(sS(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(rS(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NOT_NAN"}};if(sS(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Io(t.field),op:wL(t.op),value:t.value}}}(n):n instanceof Vi?function(t){const s=t.getFilters().map(a=>ob(a));return s.length===1?s[0]:{compositeFilter:{op:bL(t.op),filters:s}}}(n):Ae(54877,{filter:n})}function CL(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function lb(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t,s,a,l=we.min(),c=we.min(),d=nn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(e){this.wt=e}}function NL(n){const e=SL({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Rg(e,e.limit,"L"):e}/**
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
 */class DL{constructor(){this.Cn=new OL}addToCollectionParentIndex(e,t){return this.Cn.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(yr.min())}updateCollectionGroup(e,t,s){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class OL{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Lt(vt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Lt(vt.comparator)).toArray()}}/**
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
 */const vS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ub=41943040;class Tn{static withCacheSize(e){return new Tn(e,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn.DEFAULT_COLLECTION_PERCENTILE=10,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tn.DEFAULT=new Tn(ub,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tn.DISABLED=new Tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Yo(0)}static lr(){return new Yo(-1)}}/**
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
 */const ES="LruGarbageCollector",ML=1048576;function TS([n,e],[t,s]){const a=Ne(n,t);return a===0?Ne(e,s):a}class kL{constructor(e){this.Er=e,this.buffer=new Lt(TS),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();TS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class PL{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ue(ES,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ol(t)?ue(ES,"Ignoring IndexedDB error during garbage collection: ",t):await al(t)}await this.mr(3e5)})}}class xL{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return J.resolve(sd.le);const s=new kL(t);return this.gr.forEachTarget(e,a=>s.Rr(a.sequenceNumber)).next(()=>this.gr.yr(e,a=>s.Rr(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(vS)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vS):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,a,l,c,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(s=T,d=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(g=Date.now(),bo()<=Pe.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function LL(n,e){return new xL(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(){this.changes=new Na(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,hn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?J.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class UL{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&zu(s.mutation,a,li.empty(),xt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,xe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=xe()){const a=ma();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let c=Nu();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const s=ma();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,xe()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,s,a){let l=ws();const c=Bu(),d=function(){return Bu()}();return t.forEach((p,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Da)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),zu(y.mutation,g,y.mutation.getFieldMask(),xt.now())):c.set(g.key,li.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,y)=>c.set(g,y)),t.forEach((g,y)=>{var T;return d.set(g,new UL(y,(T=c.get(g))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const s=Bu();let a=new pt((c,d)=>c-d),l=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let y=s.get(p)||li.empty();y=d.applyToLocalView(g,y),s.set(p,y);const T=(a.get(d.batchId)||xe()).add(p);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,T=qw();y.forEach(S=>{if(!l.has(S)){const D=Ww(t.get(S),s.get(S));D!==null&&T.set(S,D),l=l.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return J.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(c){return ve.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Fx(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):J.resolve(ma());let d=Qu,p=l;return c.next(g=>J.forEach(g,(y,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(y)?J.resolve():this.remoteDocumentCache.getEntry(e,y).next(S=>{p=p.insert(y,S)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,xe())).next(y=>({batchId:d,changes:jw(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next(s=>{let a=Nu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Nu();return this.indexManager.getCollectionParents(e,l).next(d=>J.forEach(d,p=>{const g=function(T,S){return new od(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next(y=>{y.forEach((T,S)=>{c=c.insert(T,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(c=>{l.forEach((p,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,hn.newInvalidDocument(y)))});let d=Nu();return c.forEach((p,g)=>{const y=l.get(p);y!==void 0&&zu(y.mutation,g,li.empty(),xt.now()),ud(t,g)&&(d=d.insert(p,g))}),d})}}/**
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
 */class zL{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return J.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Pi(a.createTime)}}(t)),J.resolve()}getNamedQuery(e,t){return J.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(a){return{name:a.name,query:NL(a.bundledQuery),readTime:Pi(a.readTime)}}(t)),J.resolve()}}/**
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
 */class FL{constructor(){this.overlays=new pt(ve.comparator),this.Qr=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ma();return J.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.bt(e,t,l)}),J.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Qr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(s)),J.resolve()}getOverlaysForCollection(e,t,s){const a=ma(),l=t.length+1,c=new ve(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return J.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new pt((g,y)=>g-y);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=ma(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=ma(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,y)=>d.set(g,y)),!(d.size()>=a)););return J.resolve(d)}bt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.Qr.get(a.largestBatchId).delete(s.key);this.Qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new aL(t,s));let l=this.Qr.get(t);l===void 0&&(l=xe(),this.Qr.set(t,l)),this.Qr.set(t,l.add(s.key))}}/**
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
 */class HL{constructor(){this.sessionToken=nn.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.$r=new Lt(qt.Ur),this.Kr=new Lt(qt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new qt(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new qt(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new ve(new vt([])),s=new qt(t,e),a=new qt(t,e+1),l=[];return this.Kr.forEachInRange([s,a],c=>{this.zr(c),l.push(c.key)}),l}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new ve(new vt([])),s=new qt(t,e),a=new qt(t,e+1);let l=xe();return this.Kr.forEachInRange([s,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new qt(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class qt{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return ve.comparator(e.key,t.key)||Ne(e.Zr,t.Zr)}static Wr(e,t){return Ne(e.Zr,t.Zr)||ve.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Lt(qt.Ur)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new rL(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Xr=this.Xr.add(new qt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(c)}lookupMutationBatch(e,t){return J.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ti(s),l=a<0?0:a;return J.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?C_:this.nr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new qt(t,0),a=new qt(t,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([s,a],c=>{const d=this.ei(c.Zr);l.push(d)}),J.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Lt(Ne);return t.forEach(a=>{const l=new qt(a,0),c=new qt(a,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,c],d=>{s=s.add(d.Zr)})}),J.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;ve.isDocumentKey(l)||(l=l.child(""));const c=new qt(new ve(l),0);let d=new Lt(Ne);return this.Xr.forEachWhile(p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Zr)),!0)},c),J.resolve(this.ni(d))}ni(e){const t=[];return e.forEach(s=>{const a=this.ei(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){$e(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return J.forEach(t.mutations,a=>{const l=new qt(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new qt(t,0),a=this.Xr.firstAfterOrEqual(s);return J.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e){this.ii=e,this.docs=function(){return new pt(ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return J.resolve(s?s.document.mutableCopy():hn.newInvalidDocument(t))}getEntries(e,t){let s=ws();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():hn.newInvalidDocument(a))}),J.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=ws();const c=t.path,d=new ve(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||yx(_x(y),s)<=0||(a.has(y.key)||ud(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return J.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Ae(9500)}si(e,t){return J.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new GL(this)}getSize(e){return J.resolve(this.size)}}class GL extends VL{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Br.addEntry(e,a)):this.Br.removeEntry(s)}),J.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e){this.persistence=e,this.oi=new Na(t=>D_(t),O_),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this._i=0,this.ai=new V_,this.targetCount=0,this.ui=Yo.cr()}forEachTarget(e,t){return this.oi.forEach((s,a)=>t(a)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),J.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new Yo(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.Tr(t),J.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.oi.forEach((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.oi.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),J.waitFor(l).next(()=>a)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return J.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),J.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),J.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),J.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return J.resolve(s)}containsKey(e,t){return J.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,t){this.ci={},this.overlays={},this.li=new sd(0),this.hi=!1,this.hi=!0,this.Pi=new HL,this.referenceDelegate=e(this),this.Ti=new KL(this),this.indexManager=new DL,this.remoteDocumentCache=function(a){return new qL(a)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new IL(t),this.Ei=new zL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new FL,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new jL(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){ue("MemoryPersistence","Starting transaction:",e);const a=new YL(this.li.next());return this.referenceDelegate.di(),s(a).next(l=>this.referenceDelegate.Ai(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ri(e,t){return J.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class YL extends Ex{constructor(e){super(),this.currentSequenceNumber=e}}class U_{constructor(e){this.persistence=e,this.Vi=new V_,this.mi=null}static fi(e){return new U_(e)}get gi(){if(this.mi)return this.mi;throw Ae(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),J.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),J.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(a=>this.gi.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.gi.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.gi,s=>{const a=ve.fromPath(s);return this.pi(e,a).next(l=>{l||t.removeEntry(a,we.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return J.or([()=>J.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Vf{constructor(e,t){this.persistence=e,this.yi=new Na(s=>Ax(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=LL(this,t)}static fi(e,t){return new Vf(e,t)}di(){}Ai(e){return J.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}Sr(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return J.forEach(this.yi,(s,a)=>this.Dr(e,s,a).next(l=>l?J.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.si(e,c=>this.Dr(e,c,t).next(d=>{d||(s++,l.removeEntry(c,we.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),J.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),J.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),J.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=af(e.data.value)),t}Dr(e,t,s){return J.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.yi.get(t);return J.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.ds=s,this.As=a}static Rs(e,t){let s=xe(),a=xe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new B_(e,t.fromCache,s,a)}}/**
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
 */class QL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $L{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return zN()?8:Tx(dn())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ws(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Ss(e,t,a,s).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new QL;return this.bs(e,t,c).next(d=>{if(l.result=d,this.fs)return this.Ds(e,t,c,d.size)})}).next(()=>l.result)}Ds(e,t,s,a){return s.documentReadCount<this.gs?(bo()<=Pe.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Co(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),J.resolve()):(bo()<=Pe.DEBUG&&ue("QueryEngine","Query:",Co(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ps*a?(bo()<=Pe.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Co(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ki(t))):J.resolve())}ws(e,t){if(uS(t))return J.resolve(null);let s=ki(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Rg(t,null,"F"),s=ki(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const c=xe(...l);return this.ys.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,s).next(p=>{const g=this.vs(t,d);return this.Cs(t,g,c,p.readTime)?this.ws(e,Rg(t,null,"F")):this.Fs(e,g,t,p)}))})))}Ss(e,t,s,a){return uS(t)||a.isEqual(we.min())?J.resolve(null):this.ys.getDocuments(e,s).next(l=>{const c=this.vs(t,l);return this.Cs(t,c,s,a)?J.resolve(null):(bo()<=Pe.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Co(t)),this.Fs(e,c,t,gx(a,Qu)).next(d=>d))})}vs(e,t){let s=new Lt(Fw(e));return t.forEach((a,l)=>{ud(e,l)&&(s=s.add(l))}),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}bs(e,t,s){return bo()<=Pe.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Co(t)),this.ys.getDocumentsMatchingQuery(e,t,yr.min(),s)}Fs(e,t,s,a){return this.ys.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */const z_="LocalStore",WL=3e8;class XL{constructor(e,t,s,a){this.persistence=e,this.Ms=t,this.serializer=a,this.xs=new pt(Ne),this.Os=new Na(l=>D_(l),O_),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BL(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function ZL(n,e,t,s){return new XL(n,e,t,s)}async function hb(n,e){const t=be(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const c=[],d=[];let p=xe();for(const g of a){c.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(s,p).next(g=>({ks:g,removedBatchIds:c,addedBatchIds:d}))})})}function JL(n,e){const t=be(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),l=t.Bs.newChangeBuffer({trackRemovals:!0});return function(d,p,g,y){const T=g.batch,S=T.keys();let D=J.resolve();return S.forEach(I=>{D=D.next(()=>y.getEntry(p,I)).next(H=>{const B=g.docVersions.get(I);$e(B!==null,48541),H.version.compareTo(B)<0&&(T.applyToRemoteDocument(H,g),H.isValidDocument()&&(H.setReadTime(g.commitVersion),y.addEntry(H)))})}),D.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let p=xe();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function fb(n){const e=be(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function eV(n,e){const t=be(n),s=e.snapshotVersion;let a=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});a=t.xs;const d=[];e.targetChanges.forEach((y,T)=>{const S=a.get(T);if(!S)return;d.push(t.Ti.removeMatchingKeys(l,y.removedDocuments,T).next(()=>t.Ti.addMatchingKeys(l,y.addedDocuments,T)));let D=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?D=D.withResumeToken(nn.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):y.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(y.resumeToken,s)),a=a.insert(T,D),function(H,B,Y){return H.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=WL?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(S,D,y)&&d.push(t.Ti.updateTargetData(l,D))});let p=ws(),g=xe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),d.push(tV(l,c,e.documentUpdates).next(y=>{p=y.qs,g=y.Qs})),!s.isEqual(we.min())){const y=t.Ti.getLastRemoteSnapshotVersion(l).next(T=>t.Ti.setTargetsMetadata(l,l.currentSequenceNumber,s));d.push(y)}return J.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(t.xs=a,l))}function tV(n,e,t){let s=xe(),a=xe();return t.forEach(l=>s=s.add(l)),e.getEntries(n,s).next(l=>{let c=ws();return t.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ue(z_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{qs:c,Qs:a}})}function nV(n,e){const t=be(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=C_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function iV(n,e){const t=be(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.Ti.getTargetData(s,e).next(l=>l?(a=l,J.resolve(a)):t.Ti.allocateTargetId(s).next(c=>(a=new lr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.xs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function Ng(n,e,t){const s=be(n),a=s.xs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,c=>s.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!ol(c))throw c;ue(z_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.xs=s.xs.remove(e),s.Os.delete(a.target)}function SS(n,e,t){const s=be(n);let a=we.min(),l=xe();return s.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,y){const T=be(p),S=T.Os.get(y);return S!==void 0?J.resolve(T.xs.get(S)):T.Ti.getTargetData(g,y)}(s,c,ki(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>s.Ms.getDocumentsMatchingQuery(c,e,t?a:we.min(),t?l:xe())).next(d=>(sV(s,jx(e),d),{documents:d,$s:l})))}function sV(n,e,t){let s=n.Ns.get(e)||we.min();t.forEach((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),n.Ns.set(e,s)}class AS{constructor(){this.activeTargetIds=$x()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rV{constructor(){this.xo=new AS,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new AS,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aV{No(e){}shutdown(){}}/**
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
 */const RS="ConnectivityMonitor";class wS{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ue(RS,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ue(RS,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $h=null;function Dg(){return $h===null?$h=function(){return 268435456+Math.round(2147483648*Math.random())}():$h++,"0x"+$h.toString(16)}/**
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
 */const qm="RestConnection",oV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class lV{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${a}`,this.Go=this.databaseId.database===Df?`project_id=${s}`:`project_id=${s}&database_id=${a}`}zo(e,t,s,a,l){const c=Dg(),d=this.jo(e,t.toUriEncodedString());ue(qm,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,a,l);const{host:g}=new URL(d),y=Jo(g);return this.Jo(e,d,p,s,y).then(T=>(ue(qm,`Received RPC '${e}' ${c}: `,T),T),T=>{throw Ho(qm,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T})}Yo(e,t,s,a,l,c){return this.zo(e,t,s,a,l)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}jo(e,t){const s=oV[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="WebChannelConnection";class cV extends lV{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=Dg();return new Promise((d,p)=>{const g=new mw;g.setWithCredentials(!0),g.listenOnce(gw.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case rf.NO_ERROR:const T=g.getResponseJson();ue(on,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case rf.TIMEOUT:ue(on,`RPC '${e}' ${c} timed out`),p(new ye(ne.DEADLINE_EXCEEDED,"Request time out"));break;case rf.HTTP_ERROR:const S=g.getStatus();if(ue(on,`RPC '${e}' ${c} failed with status:`,S,"response text:",g.getResponseText()),S>0){let D=g.getResponseJson();Array.isArray(D)&&(D=D[0]);const I=D==null?void 0:D.error;if(I&&I.status&&I.message){const H=function(Y){const X=Y.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(X)>=0?X:ne.UNKNOWN}(I.status);p(new ye(H,I.message))}else p(new ye(ne.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ye(ne.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ue(on,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(a);ue(on,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,s,15)})}T_(e,t,s){const a=Dg(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=vw(),d=yw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const y=l.join("");ue(on,`Creating RPC '${e}' stream ${a}: ${y}`,p);const T=c.createWebChannel(y,p);let S=!1,D=!1;const I=new uV({Zo:B=>{D?ue(on,`Not sending because RPC '${e}' stream ${a} is closed:`,B):(S||(ue(on,`Opening RPC '${e}' stream ${a} transport.`),T.open(),S=!0),ue(on,`RPC '${e}' stream ${a} sending:`,B),T.send(B))},Xo:()=>T.close()}),H=(B,Y,X)=>{B.listen(Y,te=>{try{X(te)}catch(le){setTimeout(()=>{throw le},0)}})};return H(T,Iu.EventType.OPEN,()=>{D||(ue(on,`RPC '${e}' stream ${a} transport opened.`),I.__())}),H(T,Iu.EventType.CLOSE,()=>{D||(D=!0,ue(on,`RPC '${e}' stream ${a} transport closed`),I.u_())}),H(T,Iu.EventType.ERROR,B=>{D||(D=!0,Ho(on,`RPC '${e}' stream ${a} transport errored. Name:`,B.name,"Message:",B.message),I.u_(new ye(ne.UNAVAILABLE,"The operation could not be completed")))}),H(T,Iu.EventType.MESSAGE,B=>{var Y;if(!D){const X=B.data[0];$e(!!X,16349);const te=X,le=(te==null?void 0:te.error)||((Y=te[0])===null||Y===void 0?void 0:Y.error);if(le){ue(on,`RPC '${e}' stream ${a} received error:`,le);const ce=le.status;let fe=function(b){const M=It[b];if(M!==void 0)return Jw(M)}(ce),k=le.message;fe===void 0&&(fe=ne.INTERNAL,k="Unknown error status: "+ce+" with message "+le.message),D=!0,I.u_(new ye(fe,k)),T.close()}else ue(on,`RPC '${e}' stream ${a} received:`,X),I.c_(X)}}),H(d,_w.STAT_EVENT,B=>{B.stat===yg.PROXY?ue(on,`RPC '${e}' stream ${a} detected buffering proxy`):B.stat===yg.NOPROXY&&ue(on,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{I.a_()},0),I}}function Gm(){return typeof document<"u"?document:null}/**
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
 */function pd(n){return new pL(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,t,s=1e3,a=1.5,l=6e4){this.xi=e,this.timerId=t,this.I_=s,this.E_=a,this.d_=l,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),s=Math.max(0,Date.now()-this.V_),a=Math.max(0,t-s);a>0&&ue("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,a,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS="PersistentStream";class pb{constructor(e,t,s,a,l,c,d,p){this.xi=e,this.y_=s,this.w_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new db(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===ne.RESOURCE_EXHAUSTED?(Rs(t.toString()),Rs("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.S_===t&&this.K_(s,a)},s=>{e(()=>{const a=new ye(ne.UNKNOWN,"Fetching auth token failed: "+s.message);return this.W_(a)})})}K_(e,t){const s=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(a=>{s(()=>this.W_(a))}),this.stream.onMessage(a=>{s(()=>++this.v_==1?this.z_(a):this.onNext(a))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return ue(bS,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(ue(bS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hV extends pb{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=_L(this.serializer,e),s=function(l){if(!("targetChange"in l))return we.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?we.min():c.readTime?Pi(c.readTime):we.min()}(e);return this.listener.j_(t,s)}H_(e){const t={};t.database=Ig(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=Ag(p)?{documents:EL(l,p)}:{query:TL(l,p).gt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=nb(l,c.resumeToken);const g=wg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(we.min())>0){d.readTime=Lf(l,c.snapshotVersion.toTimestamp());const g=wg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const s=AL(this.serializer,e);s&&(t.labels=s),this.L_(t)}J_(e){const t={};t.database=Ig(this.serializer),t.removeTarget=e,this.L_(t)}}class fV extends pb{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return $e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){$e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=vL(e.writeResults,e.commitTime),s=Pi(e.commitTime);return this.listener.ea(s,t)}ta(){const e={};e.database=Ig(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>yL(this.serializer,s))};this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{}class pV extends dV{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.na=!1}ra(){if(this.na)throw new ye(ne.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,a){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.zo(e,bg(t,s),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ye(ne.UNKNOWN,l.toString())})}Yo(e,t,s,a,l){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Yo(e,bg(t,s),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ye(ne.UNKNOWN,c.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class mV{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Rs(t),this.oa=!1):ue("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="RemoteStore";class gV{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=l,this.Ea.No(c=>{s.enqueueAndForget(async()=>{Oa(this)&&(ue(Sa,"Restarting streams for network reachability change."),await async function(p){const g=be(p);g.Ta.add(4),await pc(g),g.da.set("Unknown"),g.Ta.delete(4),await md(g)}(this))})}),this.da=new mV(s,a)}}async function md(n){if(Oa(n))for(const e of n.Ia)await e(!0)}async function pc(n){for(const e of n.Ia)await e(!1)}function mb(n,e){const t=be(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),q_(t)?j_(t):ll(t).M_()&&H_(t,e))}function F_(n,e){const t=be(n),s=ll(t);t.Pa.delete(e),s.M_()&&gb(t,e),t.Pa.size===0&&(s.M_()?s.N_():Oa(t)&&t.da.set("Unknown"))}function H_(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ll(n).H_(e)}function gb(n,e){n.Aa.Ke(e),ll(n).J_(e)}function j_(n){n.Aa=new cL({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),ll(n).start(),n.da._a()}function q_(n){return Oa(n)&&!ll(n).F_()&&n.Pa.size>0}function Oa(n){return be(n).Ta.size===0}function _b(n){n.Aa=void 0}async function _V(n){n.da.set("Online")}async function yV(n){n.Pa.forEach((e,t)=>{H_(n,e)})}async function vV(n,e){_b(n),q_(n)?(n.da.ca(e),j_(n)):n.da.set("Unknown")}async function EV(n,e,t){if(n.da.set("Online"),e instanceof tb&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Pa.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Pa.delete(d),a.Aa.removeTarget(d))}(n,e)}catch(s){ue(Sa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Uf(n,s)}else if(e instanceof uf?n.Aa.Xe(e):e instanceof eb?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(we.min()))try{const s=await fb(n.localStore);t.compareTo(s)>=0&&await function(l,c){const d=l.Aa.It(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Pa.get(g);y&&l.Pa.set(g,y.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const y=l.Pa.get(p);if(!y)return;l.Pa.set(p,y.withResumeToken(nn.EMPTY_BYTE_STRING,y.snapshotVersion)),gb(l,p);const T=new lr(y.target,p,g,y.sequenceNumber);H_(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(s){ue(Sa,"Failed to raise snapshot:",s),await Uf(n,s)}}async function Uf(n,e,t){if(!ol(e))throw e;n.Ta.add(1),await pc(n),n.da.set("Offline"),t||(t=()=>fb(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ue(Sa,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await md(n)})}function yb(n,e){return e().catch(t=>Uf(n,t,e))}async function gd(n){const e=be(n),t=Sr(e);let s=e.ha.length>0?e.ha[e.ha.length-1].batchId:C_;for(;TV(e);)try{const a=await nV(e.localStore,s);if(a===null){e.ha.length===0&&t.N_();break}s=a.batchId,SV(e,a)}catch(a){await Uf(e,a)}vb(e)&&Eb(e)}function TV(n){return Oa(n)&&n.ha.length<10}function SV(n,e){n.ha.push(e);const t=Sr(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function vb(n){return Oa(n)&&!Sr(n).F_()&&n.ha.length>0}function Eb(n){Sr(n).start()}async function AV(n){Sr(n).ta()}async function RV(n){const e=Sr(n);for(const t of n.ha)e.Z_(t.mutations)}async function wV(n,e,t){const s=n.ha.shift(),a=P_.from(s,e,t);await yb(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await gd(n)}async function bV(n,e){e&&Sr(n).Y_&&await async function(s,a){if(function(c){return lL(c)&&c!==ne.ABORTED}(a.code)){const l=s.ha.shift();Sr(s).O_(),await yb(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a)),await gd(s)}}(n,e),vb(n)&&Eb(n)}async function CS(n,e){const t=be(n);t.asyncQueue.verifyOperationInProgress(),ue(Sa,"RemoteStore received new credentials");const s=Oa(t);t.Ta.add(3),await pc(t),s&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await md(t)}async function CV(n,e){const t=be(n);e?(t.Ta.delete(2),await md(t)):e||(t.Ta.add(2),await pc(t),t.da.set("Unknown"))}function ll(n){return n.Ra||(n.Ra=function(t,s,a){const l=be(t);return l.ra(),new hV(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{e_:_V.bind(null,n),n_:yV.bind(null,n),i_:vV.bind(null,n),j_:EV.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),q_(n)?j_(n):n.da.set("Unknown")):(await n.Ra.stop(),_b(n))})),n.Ra}function Sr(n){return n.Va||(n.Va=function(t,s,a){const l=be(t);return l.ra(),new fV(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:AV.bind(null,n),i_:bV.bind(null,n),X_:RV.bind(null,n),ea:wV.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await gd(n)):(await n.Va.stop(),n.ha.length>0&&(ue(Sa,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new G_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function K_(n,e){if(Rs("AsyncQueue",`${e}: ${n}`),ol(n))return new ye(ne.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{static emptySet(e){return new Vo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ve.comparator(t.key,s.key):(t,s)=>ve.comparator(t.key,s.key),this.keyedMap=Nu(),this.sortedSet=new pt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Vo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(){this.ma=new pt(ve.comparator)}track(e){const t=e.doc.key,s=this.ma.get(t);s?e.type!==0&&s.type===3?this.ma=this.ma.insert(t,e):e.type===3&&s.type!==1?this.ma=this.ma.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ma=this.ma.remove(t):e.type===1&&s.type===2?this.ma=this.ma.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):Ae(63341,{Vt:e,fa:s}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,s)=>{e.push(s)}),e}}class Qo{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new Qo(e,t,Vo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ld(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class NV{constructor(){this.queries=NS(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,s){const a=be(t),l=a.queries;a.queries=NS(),l.forEach((c,d)=>{for(const p of d.ya)p.onError(s)})})(this,new ye(ne.ABORTED,"Firestore shutting down"))}}function NS(){return new Na(n=>zw(n),ld)}async function DV(n,e){const t=be(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.wa()&&e.Sa()&&(s=2):(l=new IV,s=e.Sa()?0:1);try{switch(s){case 0:l.pa=await t.onListen(a,!0);break;case 1:l.pa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=K_(c,`Initialization of query '${Co(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.ya.push(e),e.Da(t.onlineState),l.pa&&e.va(l.pa)&&Y_(t)}async function OV(n,e){const t=be(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.ya.indexOf(e);c>=0&&(l.ya.splice(c,1),l.ya.length===0?a=e.Sa()?0:1:!l.wa()&&e.Sa()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function MV(n,e){const t=be(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.ya)d.va(a)&&(s=!0);c.pa=a}}s&&Y_(t)}function kV(n,e,t){const s=be(n),a=s.queries.get(e);if(a)for(const l of a.ya)l.onError(t);s.queries.delete(e)}function Y_(n){n.ba.forEach(e=>{e.next()})}var Og,DS;(DS=Og||(Og={})).Ca="default",DS.Cache="cache";class PV{constructor(e,t,s){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=s||{}}va(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new Qo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const s=t!=="Offline";return(!this.options.La||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=Qo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Og.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.key=e}}class Sb{constructor(e){this.key=e}}class xV{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=xe(),this.mutatedKeys=xe(),this.Ha=Fw(e),this.Ja=new Vo(this.Ha)}get Ya(){return this.Ga}Za(e,t){const s=t?t.Xa:new IS,a=t?t.Ja:this.Ja;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,T)=>{const S=a.get(y),D=ud(this.query,T)?T:null,I=!!S&&this.mutatedKeys.has(S.key),H=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let B=!1;S&&D?S.data.isEqual(D.data)?I!==H&&(s.track({type:3,doc:D}),B=!0):this.eu(S,D)||(s.track({type:2,doc:D}),B=!0,(p&&this.Ha(D,p)>0||g&&this.Ha(D,g)<0)&&(d=!0)):!S&&D?(s.track({type:0,doc:D}),B=!0):S&&!D&&(s.track({type:1,doc:S}),B=!0,(p||g)&&(d=!0)),B&&(D?(c=c.add(D),l=H?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{Ja:c,Xa:s,Cs:d,mutatedKeys:l}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const c=e.Xa.ga();c.sort((y,T)=>function(D,I){const H=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{Vt:B})}};return H(D)-H(I)}(y.type,T.type)||this.Ha(y.doc,T.doc)),this.tu(s),a=a!=null&&a;const d=t&&!a?this.nu():[],p=this.ja.size===0&&this.current&&!a?1:0,g=p!==this.za;return this.za=p,c.length!==0||g?{snapshot:new Qo(this.query,e.Ja,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),ru:d}:{ru:d}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new IS,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=xe(),this.Ja.forEach(s=>{this.iu(s.key)&&(this.ja=this.ja.add(s.key))});const t=[];return e.forEach(s=>{this.ja.has(s)||t.push(new Sb(s))}),this.ja.forEach(s=>{e.has(s)||t.push(new Tb(s))}),t}su(e){this.Ga=e.$s,this.ja=xe();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return Qo.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Q_="SyncEngine";class LV{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class VV{constructor(e){this.key=e,this._u=!1}}class UV{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.au={},this.uu=new Na(d=>zw(d),ld),this.cu=new Map,this.lu=new Set,this.hu=new pt(ve.comparator),this.Pu=new Map,this.Tu=new V_,this.Iu={},this.Eu=new Map,this.du=Yo.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function BV(n,e,t=!0){const s=Ib(n);let a;const l=s.uu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.ou()):a=await Ab(s,e,t,!0),a}async function zV(n,e){const t=Ib(n);await Ab(t,e,!0,!1)}async function Ab(n,e,t,s){const a=await iV(n.localStore,ki(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await FV(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&mb(n.remoteStore,a),d}async function FV(n,e,t,s,a){n.Ru=(T,S,D)=>async function(H,B,Y,X){let te=B.view.Za(Y);te.Cs&&(te=await SS(H.localStore,B.query,!1).then(({documents:k})=>B.view.Za(k,te)));const le=X&&X.targetChanges.get(B.targetId),ce=X&&X.targetMismatches.get(B.targetId)!=null,fe=B.view.applyChanges(te,H.isPrimaryClient,le,ce);return MS(H,B.targetId,fe.ru),fe.snapshot}(n,T,S,D);const l=await SS(n.localStore,e,!0),c=new xV(e,l.$s),d=c.Za(l.documents),p=dc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);MS(n,t,g.ru);const y=new LV(e,t,c);return n.uu.set(e,y),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),g.snapshot}async function HV(n,e,t){const s=be(n),a=s.uu.get(e),l=s.cu.get(a.targetId);if(l.length>1)return s.cu.set(a.targetId,l.filter(c=>!ld(c,e))),void s.uu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Ng(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&F_(s.remoteStore,a.targetId),Mg(s,a.targetId)}).catch(al)):(Mg(s,a.targetId),await Ng(s.localStore,a.targetId,!0))}async function jV(n,e){const t=be(n),s=t.uu.get(e),a=t.cu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),F_(t.remoteStore,s.targetId))}async function qV(n,e,t){const s=XV(n);try{const a=await function(c,d){const p=be(c),g=xt.now(),y=d.reduce((D,I)=>D.add(I.key),xe());let T,S;return p.persistence.runTransaction("Locally write mutations","readwrite",D=>{let I=ws(),H=xe();return p.Bs.getEntries(D,y).next(B=>{I=B,I.forEach((Y,X)=>{X.isValidDocument()||(H=H.add(Y))})}).next(()=>p.localDocuments.getOverlayedDocuments(D,I)).next(B=>{T=B;const Y=[];for(const X of d){const te=iL(X,T.get(X.key).overlayedDocument);te!=null&&Y.push(new Da(X.key,te,kw(te.value.mapValue),vs.exists(!0)))}return p.mutationQueue.addMutationBatch(D,g,Y,d)}).next(B=>{S=B;const Y=B.applyToLocalDocumentSet(T,H);return p.documentOverlayCache.saveOverlays(D,B.batchId,Y)})}).then(()=>({batchId:S.batchId,changes:jw(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let g=c.Iu[c.currentUser.toKey()];g||(g=new pt(Ne)),g=g.insert(d,p),c.Iu[c.currentUser.toKey()]=g}(s,a.batchId,t),await mc(s,a.changes),await gd(s.remoteStore)}catch(a){const l=K_(a,"Failed to persist write");t.reject(l)}}async function Rb(n,e){const t=be(n);try{const s=await eV(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Pu.get(l);c&&($e(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c._u=!0:a.modifiedDocuments.size>0?$e(c._u,14607):a.removedDocuments.size>0&&($e(c._u,42227),c._u=!1))}),await mc(t,s,e)}catch(s){await al(s)}}function OS(n,e,t){const s=be(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.uu.forEach((l,c)=>{const d=c.view.Da(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=be(c);p.onlineState=d;let g=!1;p.queries.forEach((y,T)=>{for(const S of T.ya)S.Da(d)&&(g=!0)}),g&&Y_(p)}(s.eventManager,e),a.length&&s.au.j_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function GV(n,e,t){const s=be(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Pu.get(e),l=a&&a.key;if(l){let c=new pt(ve.comparator);c=c.insert(l,hn.newNoDocument(l,we.min()));const d=xe().add(l),p=new dd(we.min(),new Map,new pt(Ne),c,d);await Rb(s,p),s.hu=s.hu.remove(l),s.Pu.delete(e),$_(s)}else await Ng(s.localStore,e,!1).then(()=>Mg(s,e,t)).catch(al)}async function KV(n,e){const t=be(n),s=e.batch.batchId;try{const a=await JL(t.localStore,e);bb(t,s,null),wb(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await mc(t,a)}catch(a){await al(a)}}async function YV(n,e,t){const s=be(n);try{const a=await function(c,d){const p=be(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next(T=>($e(T!==null,37113),y=T.keys(),p.mutationQueue.removeMutationBatch(g,T))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>p.localDocuments.getDocuments(g,y))})}(s.localStore,e);bb(s,e,t),wb(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await mc(s,a)}catch(a){await al(a)}}function wb(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function bb(n,e,t){const s=be(n);let a=s.Iu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Iu[s.currentUser.toKey()]=a}}function Mg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.cu.get(e))n.uu.delete(s),t&&n.au.Vu(s,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(s=>{n.Tu.containsKey(s)||Cb(n,s)})}function Cb(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(F_(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),$_(n))}function MS(n,e,t){for(const s of t)s instanceof Tb?(n.Tu.addReference(s.key,e),QV(n,s)):s instanceof Sb?(ue(Q_,"Document no longer in limbo: "+s.key),n.Tu.removeReference(s.key,e),n.Tu.containsKey(s.key)||Cb(n,s.key)):Ae(19791,{mu:s})}function QV(n,e){const t=e.key,s=t.path.canonicalString();n.hu.get(t)||n.lu.has(s)||(ue(Q_,"New document in limbo: "+t),n.lu.add(s),$_(n))}function $_(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new ve(vt.fromString(e)),s=n.du.next();n.Pu.set(s,new VV(t)),n.hu=n.hu.insert(t,s),mb(n.remoteStore,new lr(ki(M_(t.path)),s,"TargetPurposeLimboResolution",sd.le))}}async function mc(n,e,t){const s=be(n),a=[],l=[],c=[];s.uu.isEmpty()||(s.uu.forEach((d,p)=>{c.push(s.Ru(p,e,t).then(g=>{var y;if((g||t)&&s.isPrimaryClient){const T=g?!g.fromCache:(y=t==null?void 0:t.targetChanges.get(p.targetId))===null||y===void 0?void 0:y.current;s.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(g){a.push(g);const T=B_.Rs(p.targetId,g);l.push(T)}}))}),await Promise.all(c),s.au.j_(a),await async function(p,g){const y=be(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>J.forEach(g,S=>J.forEach(S.ds,D=>y.persistence.referenceDelegate.addReference(T,S.targetId,D)).next(()=>J.forEach(S.As,D=>y.persistence.referenceDelegate.removeReference(T,S.targetId,D)))))}catch(T){if(!ol(T))throw T;ue(z_,"Failed to update sequence numbers: "+T)}for(const T of g){const S=T.targetId;if(!T.fromCache){const D=y.xs.get(S),I=D.snapshotVersion,H=D.withLastLimboFreeSnapshotVersion(I);y.xs=y.xs.insert(S,H)}}}(s.localStore,l))}async function $V(n,e){const t=be(n);if(!t.currentUser.isEqual(e)){ue(Q_,"User change. New user:",e.toKey());const s=await hb(t.localStore,e);t.currentUser=e,function(l,c){l.Eu.forEach(d=>{d.forEach(p=>{p.reject(new ye(ne.CANCELLED,c))})}),l.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await mc(t,s.ks)}}function WV(n,e){const t=be(n),s=t.Pu.get(e);if(s&&s._u)return xe().add(s.key);{let a=xe();const l=t.cu.get(e);if(!l)return a;for(const c of l){const d=t.uu.get(c);a=a.unionWith(d.view.Ya)}return a}}function Ib(n){const e=be(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GV.bind(null,e),e.au.j_=MV.bind(null,e.eventManager),e.au.Vu=kV.bind(null,e.eventManager),e}function XV(n){const e=be(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YV.bind(null,e),e}class Bf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pd(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return ZL(this.persistence,new $L,e.initialUser,this.serializer)}yu(e){return new cb(U_.fi,this.serializer)}pu(e){return new rV}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bf.provider={build:()=>new Bf};class ZV extends Bf{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){$e(this.persistence.referenceDelegate instanceof Vf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new PL(s,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?Tn.withCacheSize(this.cacheSizeBytes):Tn.DEFAULT;return new cb(s=>Vf.fi(s,t),this.serializer)}}class kg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>OS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=$V.bind(null,this.syncEngine),await CV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NV}()}createDatastore(e){const t=pd(e.databaseInfo.databaseId),s=function(l){return new cV(l)}(e.databaseInfo);return function(l,c,d,p){return new pV(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,c,d){return new gV(s,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>OS(this.syncEngine,t,0),function(){return wS.C()?new wS:new aV}())}createSyncEngine(e,t){return function(a,l,c,d,p,g,y){const T=new UV(a,l,c,d,p,g);return y&&(T.Au=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=be(a);ue(Sa,"RemoteStore shutting down."),l.Ta.add(5),await pc(l),l.Ea.shutdown(),l.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}kg.provider={build:()=>new kg};/**
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
 */class JV{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Rs("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="FirestoreClient";class e4{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=ln.UNAUTHENTICATED,this.clientId=Aw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async c=>{ue(Ar,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(ue(Ar,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=K_(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Km(n,e){n.asyncQueue.verifyOperationInProgress(),ue(Ar,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async a=>{s.isEqual(a)||(await hb(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function kS(n,e){n.asyncQueue.verifyOperationInProgress();const t=await t4(n);ue(Ar,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>CS(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,a)=>CS(e.remoteStore,a)),n._onlineComponents=e}async function t4(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue(Ar,"Using user provided OfflineComponentProvider");try{await Km(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===ne.FAILED_PRECONDITION||a.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Ho("Error using user provided cache. Falling back to memory cache: "+t),await Km(n,new Bf)}}else ue(Ar,"Using default OfflineComponentProvider"),await Km(n,new ZV(void 0));return n._offlineComponents}async function Nb(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue(Ar,"Using user provided OnlineComponentProvider"),await kS(n,n._uninitializedComponentsProvider._online)):(ue(Ar,"Using default OnlineComponentProvider"),await kS(n,new kg))),n._onlineComponents}function n4(n){return Nb(n).then(e=>e.syncEngine)}async function i4(n){const e=await Nb(n),t=e.eventManager;return t.onListen=BV.bind(null,e.syncEngine),t.onUnlisten=HV.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zV.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=jV.bind(null,e.syncEngine),t}function s4(n,e,t={}){const s=new pr;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const y=new JV({next:S=>{y.Cu(),c.enqueueAndForget(()=>OV(l,T));const D=S.docs.has(d);!D&&S.fromCache?g.reject(new ye(ne.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&S.fromCache&&p&&p.source==="server"?g.reject(new ye(ne.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),T=new PV(M_(d.path),y,{includeMetadataChanges:!0,La:!0});return DV(l,T)}(await i4(n),n.asyncQueue,e,t,s)),s.promise}/**
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
 */function Db(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const PS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r4(n,e,t){if(!t)throw new ye(ne.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function a4(n,e,t,s){if(e===!0&&s===!0)throw new ye(ne.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function xS(n){if(!ve.isDocumentKey(n))throw new ye(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function W_(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ae(12329,{type:typeof n})}function Ju(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ye(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=W_(n);throw new ye(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const Ob="firestore.googleapis.com",LS=!0;class VS{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ob,this.ssl=LS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:LS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ub;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ML)throw new ye(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}a4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Db((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ye(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ye(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ye(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class X_{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new VS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new VS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new ox;switch(s.type){case"firstParty":return new hx(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ye(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=PS.get(t);s&&(ue("ComponentProvider","Removing Datastore"),PS.delete(t),s.terminate())}(this),Promise.resolve()}}function o4(n,e,t,s={}){var a;n=Ju(n,X_);const l=Jo(e),c=n._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;l&&(Hg(`https://${p}`),jg("Firestore",!0)),c.host!==Ob&&c.host!==p&&Ho("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:s});if(!mr(g,d)&&(n._setSettings(g),s.mockUserToken)){let y,T;if(typeof s.mockUserToken=="string")y=s.mockUserToken,T=ln.MOCK_USER;else{y=yA(s.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new ye(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new ln(S)}n._authCredentials=new lx(new Tw(y,T))}}/**
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
 */class Z_{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Z_(this.firestore,e,this._query)}}class Wn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ec(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wn(this.firestore,e,this._key)}}class ec extends Z_{constructor(e,t,s){super(e,t,M_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wn(this.firestore,null,new ve(e))}withConverter(e){return new ec(this.firestore,e,this._path)}}function dU(n,e,...t){if(n=tn(n),arguments.length===1&&(e=Aw.newId()),r4("doc","path",e),n instanceof X_){const s=vt.fromString(e,...t);return xS(s),new Wn(n,null,new ve(s))}{if(!(n instanceof Wn||n instanceof ec))throw new ye(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(vt.fromString(e,...t));return xS(s),new Wn(n.firestore,n instanceof ec?n.converter:null,new ve(s))}}/**
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
 */const US="AsyncQueue";class BS{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new db(this,"async_queue_retry"),this.ec=()=>{const s=Gm();s&&ue(US,"Visibility state changed to "+s.visibilityState),this.C_.p_()},this.tc=e;const t=Gm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=Gm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new pr;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!ol(e))throw e;ue(US,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(s=>{throw this.Ju=s,this.Yu=!1,Rs("INTERNAL UNHANDLED ERROR: ",zS(s)),s}).then(s=>(this.Yu=!1,s))));return this.tc=t,t}enqueueAfterDelay(e,t,s){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const a=G_.createAndSchedule(this,e,t,s,l=>this.oc(l));return this.Hu.push(a),a}nc(){this.Ju&&Ae(47125,{_c:zS(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function zS(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class J_ extends X_{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new BS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new BS(e),this._firestoreClient=void 0,await e}}}function l4(n,e){const t=typeof n=="object"?n:Yg(),s=typeof n=="string"?n:Df,a=Qf(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=mA("firestore");l&&o4(a,...l)}return a}function Mb(n){if(n._terminated)throw new ye(ne.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||u4(n),n._firestoreClient}function u4(n){var e,t,s;const a=n._freezeSettings(),l=function(d,p,g,y){return new bx(d,p,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,Db(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new e4(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class $o{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $o(nn.fromBase64String(e))}catch(t){throw new ye(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $o(nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class _d{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ye(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new en(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ye(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ye(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
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
 */class ty{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4=/^__.*__$/;class kb{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Da(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Pb(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{hc:n})}}class vd{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Pc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new vd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:s,Ec:!1});return a.dc(e),a}Ac(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Tc({path:s,Ec:!1});return a.Pc(),a}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return zf(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(Pb(this.hc)&&c4.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class h4{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||pd(e)}gc(e,t,s,a=!1){return new vd({hc:e,methodName:t,fc:s,path:en.emptyPath(),Ec:!1,mc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function f4(n){const e=n._freezeSettings(),t=pd(n._databaseId);return new h4(n._databaseId,!!e.ignoreUndefinedProperties,t)}class Ed extends yd{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ed}}function d4(n,e,t){return new vd({hc:3,fc:e.settings.fc,methodName:n._methodName,Ec:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ny extends yd{constructor(e,t){super(e),this.yc=t}_toFieldTransform(e){const t=d4(this,e,!0),s=this.yc.map(l=>gc(l,t)),a=new Ko(s);return new Jx(e.path,a)}isEqual(e){return e instanceof ny&&mr(this.yc,e.yc)}}function p4(n,e,t,s){const a=n.gc(1,e,t);Lb("Data must be an object, but it was:",a,s);const l=[],c=kn.empty();br(s,(p,g)=>{const y=iy(e,p,t);g=tn(g);const T=a.Ac(y);if(g instanceof Ed)l.push(y);else{const S=gc(g,T);S!=null&&(l.push(y),c.set(y,S))}});const d=new li(l);return new kb(c,d,a.fieldTransforms)}function m4(n,e,t,s,a,l){const c=n.gc(1,e,t),d=[FS(e,s,t)],p=[a];if(l.length%2!=0)throw new ye(ne.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)d.push(FS(e,l[S])),p.push(l[S+1]);const g=[],y=kn.empty();for(let S=d.length-1;S>=0;--S)if(!y4(g,d[S])){const D=d[S];let I=p[S];I=tn(I);const H=c.Ac(D);if(I instanceof Ed)g.push(D);else{const B=gc(I,H);B!=null&&(g.push(D),y.set(D,B))}}const T=new li(g);return new kb(y,T,c.fieldTransforms)}function gc(n,e){if(xb(n=tn(n)))return Lb("Unsupported field value:",e,n),g4(n,e);if(n instanceof yd)return function(s,a){if(!Pb(a.hc))throw a.Vc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Vc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(s,a){const l=[];let c=0;for(const d of s){let p=gc(d,a.Rc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(s,a){if((s=tn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Wx(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=xt.fromDate(s);return{timestampValue:Lf(a.serializer,l)}}if(s instanceof xt){const l=new xt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Lf(a.serializer,l)}}if(s instanceof ey)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof $o)return{bytesValue:nb(a.serializer,s._byteString)};if(s instanceof Wn){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Vc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:L_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof ty)return function(c,d){return{mapValue:{fields:{[Ow]:{stringValue:Mw},[Of]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Vc("VectorValues must only contain numeric values.");return k_(d.serializer,g)})}}}}}}(s,a);throw a.Vc(`Unsupported field value: ${W_(s)}`)}(n,e)}function g4(n,e){const t={};return ww(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(n,(s,a)=>{const l=gc(a,e.Ic(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function xb(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof xt||n instanceof ey||n instanceof $o||n instanceof Wn||n instanceof yd||n instanceof ty)}function Lb(n,e,t){if(!xb(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const s=W_(t);throw s==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+s)}}function FS(n,e,t){if((e=tn(e))instanceof _d)return e._internalPath;if(typeof e=="string")return iy(n,e);throw zf("Field path arguments must be of type string or ",n,!1,void 0,t)}const _4=new RegExp("[~\\*/\\[\\]]");function iy(n,e,t){if(e.search(_4)>=0)throw zf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _d(...e.split("."))._internalPath}catch{throw zf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function zf(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new ye(ne.INVALID_ARGUMENT,d+n+p)}function y4(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Vb{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Wn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new v4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ub("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class v4 extends Vb{data(){return super.data()}}function Ub(n,e){return typeof e=="string"?iy(n,e):e instanceof _d?e._internalPath:e._delegate._internalPath}class E4{convertValue(e,t="none"){switch(Tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return At(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return br(e,(a,l)=>{s[a]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[Of].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(c=>At(c.doubleValue));return new ty(l)}convertGeoPoint(e){return new ey(At(e.latitude),At(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ad(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp($u(e));default:return null}}convertTimestamp(e){const t=vr(e);return new xt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=vt.fromString(e);$e(lb(s),9688,{name:e});const a=new Wu(s.get(1),s.get(3)),l=new ve(s.popFirst(5));return a.isEqual(t)||Rs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class T4{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bb extends Vb{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new S4(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ub("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class S4 extends Bb{data(e={}){return super.data(e)}}/**
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
 */function pU(n){n=Ju(n,Wn);const e=Ju(n.firestore,J_);return s4(Mb(e),n._key).then(t=>w4(e,n,t))}class A4 extends E4{constructor(e){super(),this.firestore=e}convertBytes(e){return new $o(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Wn(this.firestore,null,t)}}function mU(n,e,t,...s){n=Ju(n,Wn);const a=Ju(n.firestore,J_),l=f4(a);let c;return c=typeof(e=tn(e))=="string"||e instanceof _d?m4(l,"updateDoc",n._key,e,t,s):p4(l,"updateDoc",n._key,e),R4(a,[c.toMutation(n._key,vs.exists(!0))])}function R4(n,e){return function(s,a){const l=new pr;return s.asyncQueue.enqueueAndForget(async()=>qV(await n4(s),a,l)),l.promise}(Mb(n),e)}function w4(n,e,t){const s=t.docs.get(e._key),a=new A4(n);return new Bb(n,a,e._key,s,new T4(t.hasPendingWrites,t.fromCache),e.converter)}function gU(...n){return new ny("arrayUnion",n)}(function(e,t=!0){(function(a){rl=a})(Rr),gr(new Ts("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new J_(new ux(s.getProvider("auth-internal")),new fx(c,s.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ye(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wu(g.options.projectId,y)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),$n(K0,Y0,e),$n(K0,Y0,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="firebasestorage.googleapis.com",b4="storageBucket",C4=2*60*1e3,I4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends zi{constructor(e,t,s=0){super(Ym(e),`Firebase Storage: ${t} (${Ym(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fi.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ym(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ui;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ui||(Ui={}));function Ym(n){return"storage/"+n}function N4(){const n="An unknown error occurred, please check the error payload for server response.";return new Fi(Ui.UNKNOWN,n)}function D4(){return new Fi(Ui.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function O4(){return new Fi(Ui.CANCELED,"User canceled the upload/download.")}function M4(n){return new Fi(Ui.INVALID_URL,"Invalid URL '"+n+"'.")}function k4(n){return new Fi(Ui.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function HS(n){return new Fi(Ui.INVALID_ARGUMENT,n)}function Fb(){return new Fi(Ui.APP_DELETED,"The Firebase app was deleted.")}function P4(n){return new Fi(Ui.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=ui.makeFromUrl(e,t)}catch{return new ui(e,"")}if(s.path==="")return s;throw k4(e)}static makeFromUrl(e,t){let s=null;const a="([A-Za-z0-9.\\-_]+)";function l(le){le.path.charAt(le.path.length-1)==="/"&&(le.path_=le.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+a+c,"i"),p={bucket:1,path:3};function g(le){le.path_=decodeURIComponent(le.path)}const y="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",D=new RegExp(`^https?://${T}/${y}/b/${a}/o${S}`,"i"),I={bucket:1,path:3},H=t===zb?"(?:storage.googleapis.com|storage.cloud.google.com)":t,B="([^?#]*)",Y=new RegExp(`^https?://${H}/${a}/${B}`,"i"),te=[{regex:d,indices:p,postModify:l},{regex:D,indices:I,postModify:g},{regex:Y,indices:{bucket:1,path:2},postModify:g}];for(let le=0;le<te.length;le++){const ce=te[le],fe=ce.regex.exec(e);if(fe){const k=fe[ce.indices.bucket];let w=fe[ce.indices.path];w||(w=""),s=new ui(k,w),ce.postModify(s);break}}if(s==null)throw M4(e);return s}}class x4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L4(n,e,t){let s=1,a=null,l=null,c=!1,d=0;function p(){return d===2}let g=!1;function y(...B){g||(g=!0,e.apply(null,B))}function T(B){a=setTimeout(()=>{a=null,n(D,p())},B)}function S(){l&&clearTimeout(l)}function D(B,...Y){if(g){S();return}if(B){S(),y.call(null,B,...Y);return}if(p()||c){S(),y.call(null,B,...Y);return}s<64&&(s*=2);let te;d===1?(d=2,te=0):te=(s+Math.random())*1e3,T(te)}let I=!1;function H(B){I||(I=!0,S(),!g&&(a!==null?(B||(d=2),clearTimeout(a),T(0)):B||(d=1)))}return T(0),l=setTimeout(()=>{c=!0,H(!0)},t),H}function V4(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U4(n){return n!==void 0}function jS(n,e,t,s){if(s<e)throw HS(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw HS(`Invalid value for '${n}'. Expected ${t} or less.`)}function B4(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const a=e(s)+"="+e(n[s]);t=t+a+"&"}return t=t.slice(0,-1),t}var Ff;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ff||(Ff={}));/**
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
 */function z4(n,e){const t=n>=500&&n<600,a=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||a||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F4{constructor(e,t,s,a,l,c,d,p,g,y,T,S=!0,D=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=a,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=y,this.connectionFactory_=T,this.retry=S,this.isUsingEmulator=D,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,H)=>{this.resolve_=I,this.reject_=H,this.start_()})}start_(){const e=(s,a)=>{if(a){s(!1,new Wh(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===Ff.NO_ERROR,p=l.getStatus();if(!d||z4(p,this.additionalRetryCodes_)&&this.retry){const y=l.getErrorCode()===Ff.ABORT;s(!1,new Wh(!1,null,y));return}const g=this.successCodes_.indexOf(p)!==-1;s(!0,new Wh(g,l))})},t=(s,a)=>{const l=this.resolve_,c=this.reject_,d=a.connection;if(a.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());U4(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=N4();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(a.canceled){const p=this.appDelete_?Fb():O4();c(p)}else{const p=D4();c(p)}};this.canceled_?t(!1,new Wh(!1,null,!0)):this.backoffId_=L4(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&V4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wh{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function H4(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function j4(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function q4(n,e){e&&(n["X-Firebase-GMPID"]=e)}function G4(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function K4(n,e,t,s,a,l,c=!0,d=!1){const p=B4(n.urlParams),g=n.url+p,y=Object.assign({},n.headers);return q4(y,e),H4(y,t),j4(y,l),G4(y,s),new F4(g,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,a,c,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y4(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Q4(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Hf{constructor(e,t){this._service=e,t instanceof ui?this._location=t:this._location=ui.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Hf(e,t)}get root(){const e=new ui(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Q4(this._location.path)}get storage(){return this._service}get parent(){const e=Y4(this._location.path);if(e===null)return null;const t=new ui(this._location.bucket,e);return new Hf(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw P4(e)}}function qS(n,e){const t=e==null?void 0:e[b4];return t==null?null:ui.makeFromBucketSpec(t,n)}function $4(n,e,t,s={}){n.host=`${e}:${t}`;const a=Jo(e);a&&(Hg(`https://${n.host}`),jg("Storage",!0)),n._isUsingEmulator=!0,n._protocol=a?"https":"http";const{mockUserToken:l}=s;l&&(n._overrideAuthToken=typeof l=="string"?l:yA(l,n.app.options.projectId))}class W4{constructor(e,t,s,a,l,c=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=a,this._firebaseVersion=l,this._isUsingEmulator=c,this._bucket=null,this._host=zb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=C4,this._maxUploadRetryTime=I4,this._requests=new Set,a!=null?this._bucket=ui.makeFromBucketSpec(a,this._host):this._bucket=qS(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ui.makeFromBucketSpec(this._url,e):this._bucket=qS(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){jS("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){jS("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hf(this,e)}_makeRequest(e,t,s,a,l=!0){if(this._deleted)return new x4(Fb());{const c=K4(e,this._appId,s,a,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[s,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,a).getPromise()}}const GS="@firebase/storage",KS="0.13.12";/**
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
 */const Hb="storage";function X4(n=Yg(),e){n=tn(n);const s=Qf(n,Hb).getImmediate({identifier:e}),a=mA("storage");return a&&Z4(s,...a),s}function Z4(n,e,t,s={}){$4(n,e,t,s)}function J4(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),a=n.getProvider("app-check-internal");return new W4(t,s,a,e,Rr)}function eU(){gr(new Ts(Hb,J4,"PUBLIC").setMultipleInstances(!0)),$n(GS,KS,""),$n(GS,KS,"esm2017")}eU();const tU={apiKey:"AIzaSyDWN5GCnrhUqKZlOt8Rxb0n748lhPf9B58",authDomain:"to-do-list-9cf11.firebaseapp.com",databaseURL:"https://to-do-list-9cf11-default-rtdb.firebaseio.com",projectId:"to-do-list-9cf11",storageBucket:"to-do-list-9cf11.firebasestorage.app",messagingSenderId:"44862500438",appId:"1:44862500438:web:ccb0f012d9c8e7cfe215f7",measurementId:"G-HB8NT8L1FD"},nU={apiKey:"AIzaSyC_SdildU9oD7BID8i4GdReOYM0_qlguN0",authDomain:"databased-react.firebaseapp.com",databaseURL:"https://databased-react-default-rtdb.firebaseio.com",projectId:"databased-react",storageBucket:"databased-react.appspot.com",messagingSenderId:"82890993147",appId:"1:82890993147:web:77b68d26108894eeeaef5e",measurementId:"G-Y0JTK4KL1P"},jb=Kg(tU,"FIRST_APP"),_U=l4(jb),iU=yM(jb),sU=Kg(nU,"SECOND_APP");X4(sU);const qb=K.lazy(()=>Aa(()=>import("./Home-CioniXEv.js"),__vite__mapDeps([0,1]))),Gb=K.lazy(()=>Aa(()=>import("./Tasks-D-T7qjJ9.js"),__vite__mapDeps([2,3]))),Kb=K.lazy(()=>Aa(()=>import("./Folders-0pdkv9et.js"),__vite__mapDeps([4,5]))),Yb=K.lazy(()=>Aa(()=>import("./Contacts-NnV7X8OG.js"),[])),rU=K.lazy(()=>Aa(()=>import("./Dashboard-MXLPwtmM.js"),[])),aU=K.lazy(()=>Aa(()=>import("./SignIn-TSWYT-61.js"),__vite__mapDeps([6,7]))),oU=K.lazy(()=>Aa(()=>import("./SignUp-VqetYe-M.js"),__vite__mapDeps([8,9]))),Qm=[{path:"/AcadComponent/",element:de.jsx(qb,{})},{path:"/AcadComponent/Tasks",element:de.jsx(Gb,{})},{path:"/AcadComponent/Folders",element:de.jsx(Kb,{})},{path:"/AcadComponent/Contacts",element:de.jsx(Yb,{})},{path:"/AcadComponent/Dashboard",element:de.jsx(rU,{})},{path:"/AcadComponent/SignIn",element:de.jsx(aU,{})},{path:"/AcadComponent/SignUp",element:de.jsx(oU,{})},{path:"*",element:de.jsx(AN,{})}],sy=K.createContext();function lU(){const[n,e]=K.useState(!1),[t,s]=K.useState(!1),[a,l]=K.useState(!1),[c,d]=K.useState(!1),[p,g]=K.useState(!1),[y,T]=K.useState(!1),[S,D]=K.useState(""),[I,H]=K.useState(),[B,Y]=K.useState([]),[X,te]=K.useState([{name:"Home",ind:!1,icon:de.jsx("span",{className:"material-icons",children:"home"}),page:de.jsx(qb,{}),path:"/AcadComponent/"},{name:"Tasks",ind:!1,icon:de.jsx("span",{className:"fa fa-book"}),page:de.jsx(Gb,{}),path:"/AcadComponent/Tasks"},{name:"Folders",ind:!1,icon:de.jsx("span",{className:"material-icons",children:"folder"}),page:de.jsx(Kb,{}),path:"/AcadComponent/Folders"},{name:"Contacts",ind:!1,icon:de.jsx("span",{className:"material-icons",children:"phone"}),page:de.jsx(Yb,{}),path:"/AcadComponent/Contacts"}]);I!=null&&I.uid||l2(iU,fe=>{(fe==null?void 0:fe.uid)!=null&&H(fe)});const le={showSignUp:n,setShowSignUp:e,showLogin:t,setShowLogin:s,showMakeUserSignIn:a,setShowMakeUserSignIn:l,hideSideBar:c,setHideSideBar:d,hideSaveChanges:p,setHideSaveChanges:g,loading:y,setLoading:T,prevPage:S,setPrevPage:D,user:I,setUser:H,userData:B,setUserData:Y,pages:X,setPages:te,pagination:fe=>{ce(fe),console.log(fe)}};function ce(fe){console.log(fe),te((k,w)=>k.map((b,M)=>fe==M?{...b,ind:!0}:{...b,ind:!1}))}return K.useEffect(()=>{console.log(S)},[S]),de.jsx(de.Fragment,{children:de.jsx(sy.Provider,{value:le,children:de.jsxs(lN,{children:[de.jsx(vN,{}),de.jsx(U1,{children:Qm==null?void 0:Qm.map(fe=>de.jsx(sA,{path:fe.path,element:fe.element},fe.path))}),de.jsx(SN,{})]})})})}CI.createRoot(document.getElementById("root")).render(de.jsx(K.StrictMode,{children:de.jsx(lU,{})}));export{yN as B,rr as G,fa as L,_U as a,gU as b,sy as c,dU as d,iU as e,cU as f,pU as g,de as j,K as r,uU as s,mU as u};
