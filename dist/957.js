/*! For license information please see 957.js.LICENSE.txt */
"use strict";(self.webpackChunkcheckout=self.webpackChunkcheckout||[]).push([[957,418],{418:function(r){var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(r){return e[r]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(r){n[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(r,c){for(var a,i,f=o(r),u=1;u<arguments.length;u++){for(var l in a=Object(arguments[u]))t.call(a,l)&&(f[l]=a[l]);if(e){i=e(a);for(var s=0;s<i.length;s++)n.call(a,i[s])&&(f[i[s]]=a[i[s]])}}return f}},251:function(r,e,t){t(418);var n=t(950),o=60103;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),c("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};e.jsx=function(r,e,t){var n,c={},u=null,l=null;for(n in void 0!==t&&(u=""+t),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(l=e.ref),e)i.call(e,n)&&!f.hasOwnProperty(n)&&(c[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps)void 0===c[n]&&(c[n]=e[n]);return{$$typeof:o,type:r,key:u,ref:l,props:c,_owner:a.current}}},893:function(r,e,t){r.exports=t(251)},957:function(r,e,t){t.r(e);var n=t(893),o=function(){return o=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},o.apply(this,arguments)};e.default=function(){return(0,n.jsx)("div",o({className:"App"},{children:(0,n.jsx)("h1",{children:"Checkout Page"},void 0)}),void 0)}}}]);