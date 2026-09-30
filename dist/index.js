"use strict";var s=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=s(function(f,v){
var q=require('@stdlib/ndarray-base-numel-dimension/dist'),i=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),a=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/blas-ext-base-gcuevery/dist').ndarray;function c(t){var r=t[1],e=t[0];return o(q(e,0),a(e),i(e,0),u(e),a(r),i(r,0),u(r)),r}v.exports=c
});var d=n();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
