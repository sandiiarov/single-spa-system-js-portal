define("app1",["react","react-router-dom","components","react-dom","single-spa-react"],function(__WEBPACK_EXTERNAL_MODULE__0__,__WEBPACK_EXTERNAL_MODULE__1__,__WEBPACK_EXTERNAL_MODULE__2__,__WEBPACK_EXTERNAL_MODULE__3__,__WEBPACK_EXTERNAL_MODULE__4__){return function(e){function t(t){for(var n,o,a=t[0],u=t[1],c=0,l=[];c<a.length;c++)o=a[c],r[o]&&l.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(i&&i(t);l.length;)l.shift()()}var n={},r={0:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=a);var u,c=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=function(e){return o.p+""+({}[e]||e)+"."+{1:"a5e56bf701f6ef854f40",2:"962f6599b51631f0c545"}[e]+".js"}(e),u=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");u.type=o,u.request=a,n[1](u)}r[e]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:i})},12e4);i.onerror=i.onload=u,c.appendChild(i)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/packages/app1/latest/",o.oe=function(e){throw console.error(e),e};var a=window.webpackJsonpapp1=window.webpackJsonpapp1||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var i=u;return o(o.s=8)}([function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE__0__},function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE__1__},function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE__2__},function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE__3__},function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE__4__},function(e,t,n){"use strict";(function(e){var r=n(0),o=n.n(r),a=n(6),u=n(1),c=n(7);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}console.log(o.a.version);var l=o.a.lazy(function(){return n.e(1).then(n.bind(null,11))}),p=o.a.lazy(function(){return n.e(2).then(n.bind(null,12))});function f(){var e=i(o.a.useState(0),2),t=e[0],n=e[1];return o.a.createElement("div",null,o.a.createElement("p",null,"You clicked ",t," times"),o.a.createElement("button",{onClick:function(){return n(t+1)}},"Click me"))}t.a=Object(a.hot)(e)(function(){return o.a.createElement(u.BrowserRouter,null,o.a.createElement("div",{style:{padding:20}},o.a.createElement(f,null),o.a.createElement(u.Switch,null,o.a.createElement(u.Redirect,{exact:!0,from:"/app1",to:"/app1/1"})),o.a.createElement(u.Route,{path:"/app1/:page",component:c.a}),o.a.createElement(o.a.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(u.Route,{exact:!0,path:"/app1/1",component:function(){return o.a.createElement(l,null)}}),o.a.createElement(u.Route,{exact:!0,path:"/app1/2",component:function(){return o.a.createElement(p,null)}}))))})}).call(this,n(9)(e))},function(module,exports,__webpack_require__){"use strict";var evalAllowed=!1;try{eval("evalAllowed = true")}catch(e){}var platformSupported=!!Object.setPrototypeOf&&evalAllowed;module.exports=__webpack_require__(10)},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2);t.a=function(e){var t=e.match,n=e.history;return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.Button,{disabled:"1"===t.params.page,size:"large",onClick:function(){return n.push("/app1/1")}},"Structure"),o.a.createElement(a.Button,{disabled:"2"===t.params.page,size:"large",onClick:function(){return n.push("/app1/2")}},"Page 2"))}},function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",function(){return f}),n.d(t,"mount",function(){return s}),n.d(t,"unmount",function(){return _});var r=n(0),o=n.n(r),a=n(3),u=n.n(a),c=n(4),i=n.n(c),l=n(5),p=i()({React:o.a,ReactDOM:u.a,rootComponent:l.a,suppressComponentDidCatchWarning:!0,domElementGetter:function(){return document.getElementById("app1")}}),f=p.bootstrap,s=p.mount,_=p.unmount},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&"object"==typeof e&&"default"in e?e.default:e}(n(0)),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.Children.only(this.props.children)},t}(r.Component);t.AppContainer=u,t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e}}])});