(window.webpackJsonp=window.webpackJsonp||[]).push([[27,5,7],{"0859ebb7226e21a9a718":function(e,t,r){"use strict";function n(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function a(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function i(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return a(r.overflowY,t)||a(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function o(e,t,r,n,a,i,o,u){return i<e&&o>t||i>e&&o<t?0:i<=e&&u<=r||o>=t&&u>=r?i-e-n:o>t&&u<r||i<e&&u>r?o-t+a:0}var u=function(e,t){var r=window,a=t.scrollMode,u=t.block,c=t.inline,l=t.boundary,s=t.skipOverflowHiddenElements,f="function"==typeof l?l:function(e){return e!==l};if(!n(e))throw new TypeError("Invalid target");for(var d=document.scrollingElement||document.documentElement,p=[],v=e;n(v)&&f(v);){if((v=v.parentElement)===d){p.push(v);break}null!=v&&v===document.body&&i(v)&&!i(document.documentElement)||null!=v&&i(v,s)&&p.push(v)}for(var b=r.visualViewport?r.visualViewport.width:innerWidth,m=r.visualViewport?r.visualViewport.height:innerHeight,h=window.scrollX||pageXOffset,y=window.scrollY||pageYOffset,g=e.getBoundingClientRect(),O=g.height,E=g.width,S=g.top,j=g.right,T=g.bottom,w=g.left,R="start"===u||"nearest"===u?S:"end"===u?T:S+O/2,A="center"===c?w+E/2:"end"===c?j:w,C=[],k=0;k<p.length;k++){var I=p[k],_=I.getBoundingClientRect(),F=_.height,P=_.width,M=_.top,D=_.right,V=_.bottom,U=_.left;if("if-needed"===a&&S>=0&&w>=0&&T<=m&&j<=b&&S>=M&&T<=V&&w>=U&&j<=D)return C;var x=getComputedStyle(I),L=parseInt(x.borderLeftWidth,10),B=parseInt(x.borderTopWidth,10),N=parseInt(x.borderRightWidth,10),W=parseInt(x.borderBottomWidth,10),H=0,$=0,G="offsetWidth"in I?I.offsetWidth-I.clientWidth-L-N:0,K="offsetHeight"in I?I.offsetHeight-I.clientHeight-B-W:0;if(d===I)H="start"===u?R:"end"===u?R-m:"nearest"===u?o(y,y+m,m,B,W,y+R,y+R+O,O):R-m/2,$="start"===c?A:"center"===c?A-b/2:"end"===c?A-b:o(h,h+b,b,L,N,h+A,h+A+E,E),H=Math.max(0,H+y),$=Math.max(0,$+h);else{H="start"===u?R-M-B:"end"===u?R-V+W+K:"nearest"===u?o(M,V,F,B,W+K,R,R+O,O):R-(M+F/2)+K/2,$="start"===c?A-U-L:"center"===c?A-(U+P/2)+G/2:"end"===c?A-D+N+G:o(U,D,P,L,N+G,A,A+E,E);var Y=I.scrollLeft,z=I.scrollTop;R+=z-(H=Math.max(0,Math.min(z+H,I.scrollHeight-F+K))),A+=Y-($=Math.max(0,Math.min(Y+$,I.scrollWidth-P+G)))}C.push({el:I,top:H,left:$})}return C};function c(e){return e===Object(e)&&0!==Object.keys(e).length}t.a=function(e,t){var r=e.isConnected||e.ownerDocument.documentElement.contains(e);if(c(t)&&"function"===typeof t.behavior)return t.behavior(r?u(e,t):[]);if(r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:c(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach(function(e){var n=e.el,a=e.top,i=e.left;n.scroll&&r?n.scroll({top:a,left:i,behavior:t}):(n.scrollTop=a,n.scrollLeft=i)})}(u(e,n),n.behavior)}}},"42993e61ed154f509e4c":function(e,t,r){"use strict";r.d(t,"a",function(){return m});var n=r("103be25b8913a0141218"),a=r("238fef99c154a7dfd239"),i=r("8af190b70a6bc55c6f1b"),o=r.n(i),u=r("3dd92536abd125670ac4"),c=(r("8a2d1b95e05b6a321e74"),r("f1c990499b5bad8f3731")),l=r("eafcfe49e6bd3eeab38b"),s=r("94e6ee3d100feb72fb84");o.a.Component;o.a.Component;var f=function(e,t){return"function"===typeof e?e(t):e},d=function(e,t){return"string"===typeof e?Object(u.c)(e,null,null,t):e},p=function(e){return e},v=o.a.forwardRef;"undefined"===typeof v&&(v=p);var b=v(function(e,t){var r=e.innerRef,n=e.navigate,a=e.onClick,i=Object(l.a)(e,["innerRef","navigate","onClick"]),u=i.target,s=Object(c.a)({},i,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||u&&"_self"!==u||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return s.ref=p!==v&&t||r,o.a.createElement("a",s)});var m=v(function(e,t){var r=e.component,a=void 0===r?b:r,i=e.replace,u=e.to,m=e.innerRef,h=Object(l.a)(e,["component","replace","to","innerRef"]);return o.a.createElement(n.e.Consumer,null,function(e){e||Object(s.a)(!1);var r=e.history,n=d(f(u,e.location),e.location),l=n?r.createHref(n):"",b=Object(c.a)({},h,{href:l,navigate:function(){var t=f(u,e.location);(i?r.replace:r.push)(t)}});return p!==v?b.ref=t||m:b.innerRef=m,o.a.createElement(a,b)})}),h=function(e){return e},y=o.a.forwardRef;"undefined"===typeof y&&(y=h);y(function(e,t){var r=e["aria-current"],a=void 0===r?"page":r,i=e.activeClassName,u=void 0===i?"active":i,p=e.activeStyle,v=e.className,b=e.exact,g=e.isActive,O=e.location,E=e.sensitive,S=e.strict,j=e.style,T=e.to,w=e.innerRef,R=Object(l.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.a.createElement(n.e.Consumer,null,function(e){e||Object(s.a)(!1);var r=O||e.location,i=d(f(T,r),r),l=i.pathname,A=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),C=A?Object(n.f)(r.pathname,{path:A,exact:b,sensitive:E,strict:S}):null,k=!!(g?g(C,r):C),I=k?function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(function(e){return e}).join(" ")}(v,u):v,_=k?Object(c.a)({},j,{},p):j,F=Object(c.a)({"aria-current":k&&a||null,className:I,style:_,to:i},R);return h!==y?F.ref=t||w:F.innerRef=w,o.a.createElement(m,F)})})},"4f2f694003b9708555f5":function(e,t,r){"use strict";r("2bef2847a697d49723f5")},"52e8e6aa382925faf3bf":function(e,t,r){"use strict";r.d(t,"a",function(){return u});var n=r("98bae3dbabd51089d613"),a=r("8af190b70a6bc55c6f1b"),i=r("814ca641c7926b201342"),o=r("c4ebd3259ab3503eb095");const u=e=>{var{name:t,showValidateSuccess:r,showInitialErrorAfterTouched:u=!1,children:c,validate:l}=e,s=Object(n.a)(e,["name","showValidateSuccess","showInitialErrorAfterTouched","children","validate"]);return a.createElement(i.b,{name:t,validate:l},({form:{errors:e={},touched:n={},initialErrors:l={}}})=>{const f=Object(i.d)(e,t,void 0),d=Object(i.d)(l,t,void 0);let p=Object(i.d)(n,t,!1);Array.isArray(p)&&(p=p.reduce((e,t)=>e||t,!1));const v=void 0!==f&&p,b=void 0!==d,m=!f&&p,h=v||b&&(!p||u);return a.createElement(o.a.Item,Object.assign({validateStatus:v||b&&!p?"error":m&&r?"success":void 0,hasFeedback:m,help:h&&a.createElement(a.Fragment,null,v&&a.createElement("li",null,f),b&&(!p||u)&&a.createElement("li",null,d))},s),c)})};t.b=u},"6ff8ed390c31c6d93349":function(e,t,r){"use strict";var n=r("98bae3dbabd51089d613"),a=r("814ca641c7926b201342"),i=r("8af190b70a6bc55c6f1b");t.a=(e=>{var{fast:t,children:r}=e,o=Object(n.a)(e,["fast","children"]);return t?i.createElement(a.a,Object.assign({},o),r):i.createElement(a.b,Object.assign({},o),r)})},"814ca641c7926b201342":function(e,t,r){"use strict";var n=r("8af190b70a6bc55c6f1b"),a=r("ecab4188101df42db36a"),i=r.n(a),o=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===u}(e)}(e)};var u="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function c(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function l(e,t,r){return e.concat(t).map(function(e){return c(e,r)})}function s(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||l,r.isMergeableObject=r.isMergeableObject||o;var n=Array.isArray(t);return n===Array.isArray(e)?n?r.arrayMerge(e,t,r):function(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(t){n[t]=c(e[t],r)}),Object.keys(t).forEach(function(a){r.isMergeableObject(t[a])&&e[a]?n[a]=s(e[a],t[a],r):n[a]=c(t[a],r)}),n}(e,t,r):c(t,r)}s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,r){return s(e,r,t)},{})};var f=s,d=r("368eeccd09bffdd9f296"),p=r("dacd60df02c69f39ae75"),v=r("4ddad71c7ec3cdfad48e"),b=r("162256d3465eb2e86779"),m=r("5ef9de3df8d92ea0e41c"),h=r.n(m),y=r("1cc4d86532e67673c78d");function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function E(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",function(){return Z}),r.d(t,"b",function(){return G}),r.d(t,"c",function(){return N}),r.d(t,"d",function(){return I});var j=function(e){return Array.isArray(e)&&0===e.length},T=function(e){return"function"===typeof e},w=function(e){return null!==e&&"object"===typeof e},R=function(e){return String(Math.floor(Number(e)))===e},A=function(e){return"[object String]"===Object.prototype.toString.call(e)},C=function(e){return 0===n.Children.count(e)},k=function(e){return w(e)&&T(e.then)};function I(e,t,r,n){void 0===n&&(n=0);for(var a=Object(v.a)(t);e&&n<a.length;)e=e[a[n++]];return void 0===e?r:e}function _(e,t,r){for(var n=Object(p.a)(e),a=n,i=0,o=Object(v.a)(t);i<o.length-1;i++){var u=o[i],c=I(e,o.slice(0,i+1));if(c&&(w(c)||Array.isArray(c)))a=a[u]=Object(p.a)(c);else{var l=o[i+1];a=a[u]=R(l)&&Number(l)>=0?[]:{}}}return(0===i?e:a)[o[i]]===r?e:(void 0===r?delete a[o[i]]:a[o[i]]=r,0===i&&void 0===r&&delete n[o[i]],n)}function F(e,t,r,n){void 0===r&&(r=new WeakMap),void 0===n&&(n={});for(var a=0,i=Object.keys(e);a<i.length;a++){var o=i[a],u=e[o];w(u)?r.get(u)||(r.set(u,!0),n[o]=Array.isArray(u)?[]:{},F(u,t,r,n[o])):n[o]=t}return n}var P=Object(n.createContext)(void 0);P.displayName="FormikContext";var M=P.Provider,D=P.Consumer;function V(){var e=Object(n.useContext)(P);return e||Object(b.a)(!1),e}function U(e,t){switch(t.type){case"SET_VALUES":return g({},e,{values:t.payload});case"SET_TOUCHED":return g({},e,{touched:t.payload});case"SET_ERRORS":return i()(e.errors,t.payload)?e:g({},e,{errors:t.payload});case"SET_STATUS":return g({},e,{status:t.payload});case"SET_ISSUBMITTING":return g({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return g({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return g({},e,{values:_(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return g({},e,{touched:_(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return g({},e,{errors:_(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return g({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return g({},e,{touched:F(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":case"SUBMIT_SUCCESS":return g({},e,{isSubmitting:!1});default:return e}}var x={},L={};function B(e){var t=e.validateOnChange,r=void 0===t||t,a=e.validateOnBlur,o=void 0===a||a,u=e.validateOnMount,c=void 0!==u&&u,l=e.isInitialValid,s=e.enableReinitialize,p=void 0!==s&&s,v=e.onSubmit,b=E(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),m=g({validateOnChange:r,validateOnBlur:o,validateOnMount:c,onSubmit:v},b),h=Object(n.useRef)(m.initialValues),y=Object(n.useRef)(m.initialErrors||x),O=Object(n.useRef)(m.initialTouched||L),S=Object(n.useRef)(m.initialStatus),j=Object(n.useRef)(!1),R=Object(n.useRef)({});Object(n.useEffect)(function(){return j.current=!0,function(){j.current=!1}},[]);var C=Object(n.useReducer)(U,{values:m.initialValues,errors:m.initialErrors||x,touched:m.initialTouched||L,status:m.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),F=C[0],P=C[1],M=Object(n.useCallback)(function(e,t){return new Promise(function(r,n){var a=m.validate(e,t);null==a?r(x):k(a)?a.then(function(e){r(e||x)},function(e){n(e)}):r(a)})},[m.validate]),D=Object(n.useCallback)(function(e,t){var r=m.validationSchema,n=T(r)?r(t):r,a=t&&n.validateAt?n.validateAt(t,e):function(e,t,r,n){void 0===r&&(r=!1);void 0===n&&(n={});var a=function e(t){var r=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var a=String(n);!0===Array.isArray(t[a])?r[a]=t[a].map(function(t){return!0===Array.isArray(t)||Object(d.a)(t)?e(t):""!==t?t:void 0}):Object(d.a)(t[a])?r[a]=e(t[a]):r[a]=""!==t[a]?t[a]:void 0}return r}(e);return t[r?"validateSync":"validate"](a,{abortEarly:!1,context:n})}(e,n);return new Promise(function(e,t){a.then(function(){e(x)},function(r){"ValidationError"===r.name?e(function(e){var t={};if(e.inner){if(0===e.inner.length)return _(t,e.path,e.message);for(var r=e.inner,n=Array.isArray(r),a=0,r=n?r:r[Symbol.iterator]();;){var i;if(n){if(a>=r.length)break;i=r[a++]}else{if((a=r.next()).done)break;i=a.value}var o=i;I(t,o.path)||(t=_(t,o.path,o.message))}}return t}(r)):t(r)})})},[m.validationSchema]),V=Object(n.useCallback)(function(e,t){return new Promise(function(r){return r(R.current[e].validate(t))})},[]),B=Object(n.useCallback)(function(e){var t=Object.keys(R.current).filter(function(e){return T(R.current[e].validate)}),r=t.length>0?t.map(function(t){return V(t,I(e,t))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(r).then(function(e){return e.reduce(function(e,r,n){return"DO_NOT_DELETE_YOU_WILL_BE_FIRED"===r?e:(r&&(e=_(e,t[n],r)),e)},{})})},[V]),N=Object(n.useCallback)(function(e){return Promise.all([B(e),m.validationSchema?D(e):{},m.validate?M(e):{}]).then(function(e){var t=e[0],r=e[1],n=e[2];return f.all([t,r,n],{arrayMerge:W})})},[m.validate,m.validationSchema,B,M,D]),H=$(function(e){return void 0===e&&(e=F.values),P({type:"SET_ISVALIDATING",payload:!0}),N(e).then(function(e){return j.current&&(P({type:"SET_ISVALIDATING",payload:!1}),P({type:"SET_ERRORS",payload:e})),e})});Object(n.useEffect)(function(){c&&!0===j.current&&i()(h.current,m.initialValues)&&H(h.current)},[c,H]);var G=Object(n.useCallback)(function(e){var t=e&&e.values?e.values:h.current,r=e&&e.errors?e.errors:y.current?y.current:m.initialErrors||{},n=e&&e.touched?e.touched:O.current?O.current:m.initialTouched||{},a=e&&e.status?e.status:S.current?S.current:m.initialStatus;h.current=t,y.current=r,O.current=n,S.current=a;var i=function(){P({type:"RESET_FORM",payload:{isSubmitting:!!e&&!!e.isSubmitting,errors:r,touched:n,status:a,values:t,isValidating:!!e&&!!e.isValidating,submitCount:e&&e.submitCount&&"number"===typeof e.submitCount?e.submitCount:0}})};if(m.onReset){var o=m.onReset(F.values,se);k(o)?o.then(i):i()}else i()},[m.initialErrors,m.initialStatus,m.initialTouched]);Object(n.useEffect)(function(){!0!==j.current||i()(h.current,m.initialValues)||(p&&(h.current=m.initialValues,G()),c&&H(h.current))},[p,m.initialValues,G,c,H]),Object(n.useEffect)(function(){p&&!0===j.current&&!i()(y.current,m.initialErrors)&&(y.current=m.initialErrors||x,P({type:"SET_ERRORS",payload:m.initialErrors||x}))},[p,m.initialErrors]),Object(n.useEffect)(function(){p&&!0===j.current&&!i()(O.current,m.initialTouched)&&(O.current=m.initialTouched||L,P({type:"SET_TOUCHED",payload:m.initialTouched||L}))},[p,m.initialTouched]),Object(n.useEffect)(function(){p&&!0===j.current&&!i()(S.current,m.initialStatus)&&(S.current=m.initialStatus,P({type:"SET_STATUS",payload:m.initialStatus}))},[p,m.initialStatus,m.initialTouched]);var K=$(function(e){if(R.current[e]&&T(R.current[e].validate)){var t=I(F.values,e),r=R.current[e].validate(t);return k(r)?(P({type:"SET_ISVALIDATING",payload:!0}),r.then(function(e){return e}).then(function(t){P({type:"SET_FIELD_ERROR",payload:{field:e,value:t}}),P({type:"SET_ISVALIDATING",payload:!1})})):(P({type:"SET_FIELD_ERROR",payload:{field:e,value:r}}),Promise.resolve(r))}return m.validationSchema?(P({type:"SET_ISVALIDATING",payload:!0}),D(F.values,e).then(function(e){return e}).then(function(t){P({type:"SET_FIELD_ERROR",payload:{field:e,value:t[e]}}),P({type:"SET_ISVALIDATING",payload:!1})})):Promise.resolve()}),Y=Object(n.useCallback)(function(e,t){var r=t.validate;R.current[e]={validate:r}},[]),z=Object(n.useCallback)(function(e){delete R.current[e]},[]),X=$(function(e,t){return P({type:"SET_TOUCHED",payload:e}),(void 0===t?o:t)?H(F.values):Promise.resolve()}),J=Object(n.useCallback)(function(e){P({type:"SET_ERRORS",payload:e})},[]),q=$(function(e,t){var n=T(e)?e(F.values):e;return P({type:"SET_VALUES",payload:n}),(void 0===t?r:t)?H(n):Promise.resolve()}),Q=Object(n.useCallback)(function(e,t){P({type:"SET_FIELD_ERROR",payload:{field:e,value:t}})},[]),Z=$(function(e,t,n){return P({type:"SET_FIELD_VALUE",payload:{field:e,value:t}}),(void 0===n?r:n)?H(_(F.values,e,t)):Promise.resolve()}),ee=Object(n.useCallback)(function(e,t){var r,n=t,a=e;if(!A(e)){e.persist&&e.persist();var i=e.target?e.target:e.currentTarget,o=i.type,u=i.name,c=i.id,l=i.value,s=i.checked,f=(i.outerHTML,i.options),d=i.multiple;n=t||(u||c),a=/number|range/.test(o)?(r=parseFloat(l),isNaN(r)?"":r):/checkbox/.test(o)?function(e,t,r){if("boolean"===typeof e)return Boolean(t);var n=[],a=!1,i=-1;if(Array.isArray(e))n=e,i=e.indexOf(r),a=i>=0;else if(!r||"true"==r||"false"==r)return Boolean(t);if(t&&r&&!a)return n.concat(r);if(!a)return n;return n.slice(0,i).concat(n.slice(i+1))}(I(F.values,n),s,l):f&&d?function(e){return Array.from(e).filter(function(e){return e.selected}).map(function(e){return e.value})}(f):l}n&&Z(n,a)},[Z,F.values]),te=$(function(e){if(A(e))return function(t){return ee(t,e)};ee(e)}),re=$(function(e,t,r){return void 0===t&&(t=!0),P({type:"SET_FIELD_TOUCHED",payload:{field:e,value:t}}),(void 0===r?o:r)?H(F.values):Promise.resolve()}),ne=Object(n.useCallback)(function(e,t){e.persist&&e.persist();var r=e.target,n=r.name,a=r.id,i=(r.outerHTML,t||(n||a));re(i,!0)},[re]),ae=$(function(e){if(A(e))return function(t){return ne(t,e)};ne(e)}),ie=Object(n.useCallback)(function(e){T(e)?P({type:"SET_FORMIK_STATE",payload:e}):P({type:"SET_FORMIK_STATE",payload:function(){return e}})},[]),oe=Object(n.useCallback)(function(e){P({type:"SET_STATUS",payload:e})},[]),ue=Object(n.useCallback)(function(e){P({type:"SET_ISSUBMITTING",payload:e})},[]),ce=$(function(){return P({type:"SUBMIT_ATTEMPT"}),H().then(function(e){var t=e instanceof Error;if(!t&&0===Object.keys(e).length){var r;try{if(void 0===(r=fe()))return}catch(e){throw e}return Promise.resolve(r).then(function(e){return j.current&&P({type:"SUBMIT_SUCCESS"}),e}).catch(function(e){if(j.current)throw P({type:"SUBMIT_FAILURE"}),e})}if(j.current&&(P({type:"SUBMIT_FAILURE"}),t))throw e})}),le=$(function(e){e&&e.preventDefault&&T(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&T(e.stopPropagation)&&e.stopPropagation(),ce().catch(function(e){console.warn("Warning: An unhandled error was caught from submitForm()",e)})}),se={resetForm:G,validateForm:H,validateField:K,setErrors:J,setFieldError:Q,setFieldTouched:re,setFieldValue:Z,setStatus:oe,setSubmitting:ue,setTouched:X,setValues:q,setFormikState:ie,submitForm:ce},fe=$(function(){return v(F.values,se)}),de=$(function(e){e&&e.preventDefault&&T(e.preventDefault)&&e.preventDefault(),e&&e.stopPropagation&&T(e.stopPropagation)&&e.stopPropagation(),G()}),pe=Object(n.useCallback)(function(e){return{value:I(F.values,e),error:I(F.errors,e),touched:!!I(F.touched,e),initialValue:I(h.current,e),initialTouched:!!I(O.current,e),initialError:I(y.current,e)}},[F.errors,F.touched,F.values]),ve=Object(n.useCallback)(function(e){return{setValue:function(t,r){return Z(e,t,r)},setTouched:function(t,r){return re(e,t,r)},setError:function(t){return Q(e,t)}}},[Z,re,Q]),be=Object(n.useCallback)(function(e){var t=w(e),r=t?e.name:e,n=I(F.values,r),a={name:r,value:n,onChange:te,onBlur:ae};if(t){var i=e.type,o=e.value,u=e.as,c=e.multiple;"checkbox"===i?void 0===o?a.checked=!!n:(a.checked=!(!Array.isArray(n)||!~n.indexOf(o)),a.value=o):"radio"===i?(a.checked=n===o,a.value=o):"select"===u&&c&&(a.value=a.value||[],a.multiple=!0)}return a},[ae,te,F.values]),me=Object(n.useMemo)(function(){return!i()(h.current,F.values)},[h.current,F.values]),he=Object(n.useMemo)(function(){return"undefined"!==typeof l?me?F.errors&&0===Object.keys(F.errors).length:!1!==l&&T(l)?l(m):l:F.errors&&0===Object.keys(F.errors).length},[l,me,F.errors,m]);return g({},F,{initialValues:h.current,initialErrors:y.current,initialTouched:O.current,initialStatus:S.current,handleBlur:ae,handleChange:te,handleReset:de,handleSubmit:le,resetForm:G,setErrors:J,setFormikState:ie,setFieldTouched:re,setFieldValue:Z,setFieldError:Q,setStatus:oe,setSubmitting:ue,setTouched:X,setValues:q,submitForm:ce,validateForm:H,validateField:K,isValid:he,dirty:me,unregisterField:z,registerField:Y,getFieldProps:be,getFieldMeta:pe,getFieldHelpers:ve,validateOnBlur:o,validateOnChange:r,validateOnMount:c})}function N(e){var t=B(e),r=e.component,a=e.children,i=e.render,o=e.innerRef;return Object(n.useImperativeHandle)(o,function(){return t}),Object(n.createElement)(M,{value:t},r?Object(n.createElement)(r,t):i?i(t):a?T(a)?a(t):C(a)?null:n.Children.only(a):null)}function W(e,t,r){var n=e.slice();return t.forEach(function(t,a){if("undefined"===typeof n[a]){var i=!1!==r.clone&&r.isMergeableObject(t);n[a]=i?f(Array.isArray(t)?[]:{},t,r):t}else r.isMergeableObject(t)?n[a]=f(e[a],t,r):-1===e.indexOf(t)&&n.push(t)}),n}var H="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?n.useLayoutEffect:n.useEffect;function $(e){var t=Object(n.useRef)(e);return H(function(){t.current=e}),Object(n.useCallback)(function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.current.apply(void 0,r)},[])}function G(e){var t=e.validate,r=e.name,a=e.render,i=e.children,o=e.as,u=e.component,c=E(e,["validate","name","render","children","as","component"]),l=E(V(),["validate","validationSchema"]);var s=l.registerField,f=l.unregisterField;Object(n.useEffect)(function(){return s(r,{validate:t}),function(){f(r)}},[s,f,r,t]);var d=l.getFieldProps(g({name:r},c)),p=l.getFieldMeta(r),v={field:d,form:l};if(a)return a(g({},v,{meta:p}));if(T(i))return i(g({},v,{meta:p}));if(u){if("string"===typeof u){var b=c.innerRef,m=E(c,["innerRef"]);return Object(n.createElement)(u,g({ref:b},d,m),i)}return Object(n.createElement)(u,g({field:d,form:l},c),i)}var h=o||"input";if("string"===typeof h){var y=c.innerRef,O=E(c,["innerRef"]);return Object(n.createElement)(h,g({ref:y},d,O),i)}return Object(n.createElement)(h,g({},d,c),i)}function K(e){var t=function(t){return Object(n.createElement)(D,null,function(r){return r||Object(b.a)(!1),Object(n.createElement)(e,Object.assign({},t,{formik:r}))})},r=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+r+")",h()(t,e)}Object(n.forwardRef)(function(e,t){var r=e.action,a=E(e,["action"]),i=null!=r?r:"#",o=V(),u=o.handleReset,c=o.handleSubmit;return Object(n.createElement)("form",Object.assign({onSubmit:c,ref:t,onReset:u,action:i},a))}).displayName="Form";var Y=function(e,t,r){var n=q(e),a=n[t];return n.splice(t,1),n.splice(r,0,a),n},z=function(e,t,r){var n=q(e),a=n[t];return n[t]=n[r],n[r]=a,n},X=function(e,t,r){var n=q(e);return n.splice(t,0,r),n},J=function(e,t,r){var n=q(e);return n[t]=r,n},q=function(e){if(e){if(Array.isArray(e))return[].concat(e);var t=Object.keys(e).map(function(e){return parseInt(e)}).reduce(function(e,t){return t>e?t:e},0);return Array.from(g({},e,{length:t+1}))}return[]},Q=function(e){function t(t){var r;return(r=e.call(this,t)||this).updateArrayField=function(e,t,n){var a=r.props,i=a.name;(0,a.formik.setFormikState)(function(r){var a="function"===typeof n?n:e,o="function"===typeof t?t:e,u=_(r.values,i,e(I(r.values,i))),c=n?a(I(r.errors,i)):void 0,l=t?o(I(r.touched,i)):void 0;return j(c)&&(c=void 0),j(l)&&(l=void 0),g({},r,{values:u,errors:n?_(r.errors,i,c):r.errors,touched:t?_(r.touched,i,l):r.touched})})},r.push=function(e){return r.updateArrayField(function(t){return[].concat(q(t),[Object(y.a)(e)])},!1,!1)},r.handlePush=function(e){return function(){return r.push(e)}},r.swap=function(e,t){return r.updateArrayField(function(r){return z(r,e,t)},!0,!0)},r.handleSwap=function(e,t){return function(){return r.swap(e,t)}},r.move=function(e,t){return r.updateArrayField(function(r){return Y(r,e,t)},!0,!0)},r.handleMove=function(e,t){return function(){return r.move(e,t)}},r.insert=function(e,t){return r.updateArrayField(function(r){return X(r,e,t)},function(t){return X(t,e,null)},function(t){return X(t,e,null)})},r.handleInsert=function(e,t){return function(){return r.insert(e,t)}},r.replace=function(e,t){return r.updateArrayField(function(r){return J(r,e,t)},!1,!1)},r.handleReplace=function(e,t){return function(){return r.replace(e,t)}},r.unshift=function(e){var t=-1;return r.updateArrayField(function(r){var n=r?[e].concat(r):[e];return t<0&&(t=n.length),n},function(e){var r=e?[null].concat(e):[null];return t<0&&(t=r.length),r},function(e){var r=e?[null].concat(e):[null];return t<0&&(t=r.length),r}),t},r.handleUnshift=function(e){return function(){return r.unshift(e)}},r.handleRemove=function(e){return function(){return r.remove(e)}},r.handlePop=function(){return function(){return r.pop()}},r.remove=r.remove.bind(S(r)),r.pop=r.pop.bind(S(r)),r}O(t,e);var r=t.prototype;return r.componentDidUpdate=function(e){this.props.validateOnChange&&this.props.formik.validateOnChange&&!i()(I(e.formik.values,e.name),I(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(e){var t;return this.updateArrayField(function(r){var n=r?q(r):[];return t||(t=n[e]),T(n.splice)&&n.splice(e,1),n},!0,!0),t},r.pop=function(){var e;return this.updateArrayField(function(t){var r=t;return e||(e=r&&r.pop&&r.pop()),r},!0,!0),e},r.render=function(){var e={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},t=this.props,r=t.component,a=t.render,i=t.children,o=t.name,u=g({},e,{form:E(t.formik,["validate","validationSchema"]),name:o});return r?Object(n.createElement)(r,u):a?a(u):i?"function"===typeof i?i(u):C(i)?null:n.Children.only(i):null},t}(n.Component);Q.defaultProps={validateOnChange:!0};n.Component;var Z=K(function(e){function t(t){var r;r=e.call(this,t)||this;var n=t.render,a=t.children,i=t.component,o=t.as;t.name;return n&&Object(b.a)(!1),i&&n&&Object(b.a)(!1),o&&a&&T(a)&&Object(b.a)(!1),i&&a&&T(a)&&Object(b.a)(!1),n&&a&&!C(a)&&Object(b.a)(!1),r}O(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return this.props.shouldUpdate?this.props.shouldUpdate(e,this.props):e.name!==this.props.name||I(e.formik.values,this.props.name)!==I(this.props.formik.values,this.props.name)||I(e.formik.errors,this.props.name)!==I(this.props.formik.errors,this.props.name)||I(e.formik.touched,this.props.name)!==I(this.props.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(e).length||e.formik.isSubmitting!==this.props.formik.isSubmitting},r.componentDidMount=function(){this.props.formik.registerField(this.props.name,{validate:this.props.validate})},r.componentDidUpdate=function(e){this.props.name!==e.name&&(this.props.formik.unregisterField(e.name),this.props.formik.registerField(this.props.name,{validate:this.props.validate})),this.props.validate!==e.validate&&this.props.formik.registerField(this.props.name,{validate:this.props.validate})},r.componentWillUnmount=function(){this.props.formik.unregisterField(this.props.name)},r.render=function(){var e=this.props,t=e.name,r=e.render,a=e.as,i=e.children,o=e.component,u=e.formik,c=E(e,["validate","name","render","as","children","component","shouldUpdate","formik"]),l=E(u,["validate","validationSchema"]),s=u.getFieldProps(g({name:t},c)),f={field:s,meta:{value:I(u.values,t),error:I(u.errors,t),touched:!!I(u.touched,t),initialValue:I(u.initialValues,t),initialTouched:!!I(u.initialTouched,t),initialError:I(u.initialErrors,t)},form:l};if(r)return r(f);if(T(i))return i(f);if(o){if("string"===typeof o){var d=c.innerRef,p=E(c,["innerRef"]);return Object(n.createElement)(o,g({ref:d},s,p),i)}return Object(n.createElement)(o,g({field:s,form:u},c),i)}var v=a||"input";if("string"===typeof v){var b=c.innerRef,m=E(c,["innerRef"]);return Object(n.createElement)(v,g({ref:b},s,m),i)}return Object(n.createElement)(v,g({},s,c),i)},t}(n.Component))},"83414d0d3fc7f2a18a26":function(e,t,r){"use strict";var n=r("98bae3dbabd51089d613"),a=r("8ca0435fe92d5e05db5b"),i=r("8af190b70a6bc55c6f1b"),o=r("6ff8ed390c31c6d93349");const u=i.forwardRef((e,t)=>{var{name:r,validate:u,fast:c,onChange:l,onBlur:s}=e,f=Object(n.a)(e,["name","validate","fast","onChange","onBlur"]);return i.createElement(o.a,{name:r,validate:u,fast:c},({field:{value:e,onChange:n,onBlur:o}})=>i.createElement(a.a,Object.assign({ref:t,name:r,value:e,onChange:e=>{n(e),l&&l(e)},onBlur:e=>{o(e),s&&s(e)}},f)))});u.Password=i.forwardRef((e,t)=>{var{name:r,validate:u,fast:c,onChange:l,onBlur:s}=e,f=Object(n.a)(e,["name","validate","fast","onChange","onBlur"]);return i.createElement(o.a,{name:r,validate:u,fast:c},({field:{value:e,onChange:n,onBlur:o}})=>i.createElement(a.a.Password,Object.assign({ref:t,name:r,value:e,onChange:e=>{n(e),l&&l(e)},onBlur:e=>{o(e),s&&s(e)}},f)))}),u.TextArea=i.forwardRef((e,t)=>{var{name:r,validate:u,fast:c,onChange:l,onBlur:s}=e,f=Object(n.a)(e,["name","validate","fast","onChange","onBlur"]);return i.createElement(o.a,{name:r,validate:u,fast:c},({field:{value:e,onChange:n,onBlur:o}})=>i.createElement(a.a.TextArea,Object.assign({ref:t,name:r,value:e,onChange:e=>{n(e),l&&l(e)},onBlur:e=>{o(e),s&&s(e)}},f)))}),t.a=u},"8c3363bcf53f0eb27dd6":function(e,t,r){"use strict";r("b28d1f103e4a5b2e8ef8")},"8cc063d46cc7c33fdc4d":function(e,t,r){"use strict";r.r(t);r("8c3363bcf53f0eb27dd6");var n,a=r("e4b3a65b30b871887323"),i=(r("db4e82fe008cf1fe097e"),r("d853cbe64a0df0683fb5")),o=(r("4f2f694003b9708555f5"),r("83414d0d3fc7f2a18a26")),u=(r("44d31a554aec3455a02d"),r("9a9f7ee98b00fb7bb7c2")),c=r("7aa8db87e3c9e814f06d"),l=r("8113359511cd270e25e9"),s=r("9b138a15514959aa8913"),f=r("fc43733ec9d3f066c334"),d=(r("c39b656df4667e561d17"),r("2c0c894138ff0b3088fe"),r("c4ebd3259ab3503eb095")),p=r("8af190b70a6bc55c6f1b"),v=r("814ca641c7926b201342");r("8a2d1b95e05b6a321e74");function b(e,t,r,a){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&i)for(var u in i)void 0===t[u]&&(t[u]=i[u]);else t||(t=i||{});if(1===o)t.children=a;else if(o>1){for(var c=new Array(o),l=0;l<o;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}d.a.Item,b(o.a,{name:"phone",placeholder:"Phone"}),d.a.Item,b(o.a.Password,{name:"password",placeholder:"Password"});var m,h=r("42993e61ed154f509e4c"),y=r("1f7eb4558e149d7a2535"),g=r("a79467e5f9517820f402");function O(e,t,r,n){m||(m="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var o in a)void 0===t[o]&&(t[o]=a[o]);else t||(t=a||{});if(1===i)t.children=n;else if(i>1){for(var u=new Array(i),c=0;c<i;c++)u[c]=arguments[c+3];t.children=u}return{$$typeof:m,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}r.d(t,"Register",function(){return C});var E=Object(f.a)(function(e){return{root:{height:"100vh"},paper:{margin:"auto",display:"flex",flexDirection:"column",alignItems:"center",width:350,border:"1px solid #eee",borderRadius:5,padding:10},form:{width:"90%",marginTop:e.spacing(1)}}}),S=O(c.a,{}),j=O(i.a.Item,{name:"phone"},void 0,O(o.a,{name:"phone",placeholder:"Phone Number"})),T=O(i.a.Item,{name:"email"},void 0,O(o.a,{name:"email",type:"email",placeholder:"Email Address"})),w=O(i.a.Item,{name:"password"},void 0,O(o.a.Password,{name:"password",placeholder:"Password"})),R=O(l.a,{item:!0,xs:!0},void 0,O(h.a,{to:"/login"},void 0,"Login Instead")),A=O(l.a,{item:!0},void 0,O(h.a,{to:"/register"},void 0,"Don't Have Account? Sign Up"));function C(e){var t=E(),r=Object(p.useContext)(g.a),n=(r.user,r.signup);return O("div",{},void 0,O(s.a,{maxWidth:"xs",style:{margin:"auto"}},void 0,O(l.a,{container:!0,direction:"column",alignItems:"center",component:"main",className:t.root},void 0,S,O("div",{className:t.paper},void 0,O(u.a.Title,{level:4,style:{color:"#fea73c",fontWeight:400}},void 0,"FavePOS"),O(u.a.Title,{level:4,style:{fontWeight:400,textTransform:"italics"}},void 0,"Get started on FavePOS"),O("div",{className:t.form,noValidate:!0},void 0,O(v.c,{initialValues:{email:"",password:"",username:"",phone:"",role:"user"},onSubmit:function(e,t){n(e),t.setSubmitting(!1)}},void 0,function(e){var t=e.submitForm,r=e.isSubmitting;return O(i.a,{layout:"vertical"},void 0,O(i.a.Item,{name:"username"},void 0,O(o.a,{name:"username",placeholder:"Username",style:{textTransform:"capitalize"}})),j,T,w,O(a.a,{style:{width:"100%",borderRadius:50,color:"white",backgroundColor:"#fea73c",borderColor:"#fea73c"},disabled:r,onClick:t},void 0,"Get Started"))}),O(l.a,{container:!0,direction:"column",alignItems:"center",spacing:1,style:{marginTop:10}},void 0,R,A))))))}t.default=Object(y.d)(p.memo)(C)},"98bae3dbabd51089d613":function(e,t,r){"use strict";r.d(t,"a",function(){return n});function n(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r}},c39b656df4667e561d17:function(e,t,r){"use strict";r("8af190b70a6bc55c6f1b");var n,a=r("42993e61ed154f509e4c"),i=r("85b71a27cbcf93ff4854");function o(e,t,r,a){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&i)for(var u in i)void 0===t[u]&&(t[u]=i[u]);else t||(t=i||{});if(1===o)t.children=a;else if(o>1){for(var c=new Array(o),l=0;l<o;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}t.a=function(){return o(i.a,{variant:"body2",color:"textSecondary",align:"center"},void 0,"Copyright \xa9 ",o(a.a,{color:"inherit",to:"/",style:{textDecoration:"none",color:"#000"}},void 0,"FavePOS")," ",(new Date).getFullYear(),"."," All Rights Reserved")}},d853cbe64a0df0683fb5:function(e,t,r){"use strict";var n=r("8af190b70a6bc55c6f1b"),a=r("814ca641c7926b201342"),i=r("c4ebd3259ab3503eb095"),o=r("52e8e6aa382925faf3bf");function u(e){return n.createElement(a.b,null,({form:{handleReset:t,handleSubmit:r}})=>n.createElement(i.a,Object.assign({onReset:t,onSubmitCapture:r},e)))}u.Item=o.a;t.a=u},db4e82fe008cf1fe097e:function(e,t,r){"use strict";r("501bc7434ef93f928f1c")},e4b3a65b30b871887323:function(e,t,r){"use strict";var n=r("98bae3dbabd51089d613"),a=r("2688cdc98aed61204a0c"),i=r("814ca641c7926b201342"),o=r("8af190b70a6bc55c6f1b");t.a=(e=>{var{children:t}=e,r=Object(n.a)(e,["children"]);return o.createElement(i.b,null,({form:{isSubmitting:e,isValid:n,dirty:i,submitCount:u}})=>o.createElement(a.a,Object.assign({loading:e,type:"primary",htmlType:"submit",disabled:!n&&(i||u>0)},r),t))})},ecab4188101df42db36a:function(e,t,r){"use strict";var n=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!==typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var u,c,l,s=n(t),f=n(r);if(s&&f){if((c=t.length)!=r.length)return!1;for(u=c;0!==u--;)if(!e(t[u],r[u]))return!1;return!0}if(s!=f)return!1;var d=t instanceof Date,p=r instanceof Date;if(d!=p)return!1;if(d&&p)return t.getTime()==r.getTime();var v=t instanceof RegExp,b=r instanceof RegExp;if(v!=b)return!1;if(v&&b)return t.toString()==r.toString();var m=a(t);if((c=m.length)!==a(r).length)return!1;for(u=c;0!==u--;)if(!i.call(r,m[u]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(u=c;0!==u--;)if(("_owner"!==(l=m[u])||!t.$$typeof)&&!e(t[l],r[l]))return!1;return!0}return t!==t&&r!==r}(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-2146828260===e.number)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}}}]);