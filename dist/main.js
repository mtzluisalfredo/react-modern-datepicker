(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactModernDatepicker"] = factory(require("react"));
	else
		root["ReactModernDatepicker"] = factory(root["React"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__787__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 484:
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",D={};D[v]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(v=i),i||!r&&v},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var v=this.$locale().weekStart||0,D=(y<v?y+7:y)-v;return $(r?m-D:m+(6-D),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,v=O.m(this,M);return v=(l={},l[c]=v/12,l[f]=v,l[h]=v/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?v:O.a(v)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[v],w.Ls=D,w.p={},w}));

/***/ }),

/***/ 285:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)};var a=function(e){return function(t){this[e]=+t}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],h=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,a("seconds")],ss:[r,a("seconds")],m:[r,a("minutes")],mm:[r,a("minutes")],H:[r,a("hours")],h:[r,a("hours")],HH:[r,a("hours")],hh:[r,a("hours")],D:[r,a("day")],DD:[n,a("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,a("month")],MM:[n,a("month")],MMM:[i,function(e){var t=h("months"),n=(h("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=h("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:f,ZZ:f};function c(n){var r,i;r=n,i=o&&o.formats;for(var s=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),a=s.length,f=0;f<a;f+=1){var h=s[f],u=d[h],c=u&&u[0],l=u&&u[1];s[f]=l?{regex:c,parser:l}:h.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<a;n+=1){var i=s[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,f=i.parser,h=e.slice(r),u=o.exec(h)[0];f.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,s=e.args;this.$u=r;var a=s[1];if("string"==typeof a){var f=!0===s[2],h=!0===s[3],u=f||h,d=s[2];h&&(d=s[2]),o=this.$locale(),!f&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=c(t)(e),i=r.year,o=r.month,s=r.day,a=r.hours,f=r.minutes,h=r.seconds,u=r.milliseconds,d=r.zone,l=new Date,m=s||(i||o?1:l.getDate()),M=i||l.getFullYear(),Y=0;i&&!o||(Y=o>0?o-1:l.getMonth());var p=a||0,v=f||0,D=h||0,g=u||0;return d?new Date(Date.UTC(M,Y,m,p,v,D,g+60*d.offset*1e3)):n?new Date(Date.UTC(M,Y,m,p,v,D,g)):new Date(M,Y,m,p,v,D,g)}catch(e){return new Date("")}}(t,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){s[1]=a[m-1];var M=n.apply(this,s);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===l&&(this.$d=new Date(""))}else i.call(this,e)}}}));

/***/ }),

/***/ 607:
/***/ (function(module) {

!function(e,i){ true?module.exports=i():0}(this,(function(){"use strict";return function(e,i,t){i.prototype.isBetween=function(e,i,s,f){var n=t(e),o=t(i),r="("===(f=f||"()")[0],u=")"===f[1];return(r?this.isAfter(n,s):!this.isBefore(n,s))&&(u?this.isBefore(o,s):!this.isAfter(o,s))||(r?this.isBefore(n,s):!this.isAfter(n,s))&&(u?this.isAfter(o,s):!this.isBefore(o,s))}}}));

/***/ }),

/***/ 212:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";return function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}}}));

/***/ }),

/***/ 412:
/***/ (function(module) {

!function(e,i){ true?module.exports=i():0}(this,(function(){"use strict";return function(e,i){i.prototype.isSameOrBefore=function(e,i){return this.isSame(e,i)||this.isBefore(e,i)}}}));

/***/ }),

/***/ 703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(414);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(703)();
}


/***/ }),

/***/ 414:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 921:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}__webpack_unused_export__=l;__webpack_unused_export__=m;__webpack_unused_export__=k;__webpack_unused_export__=h;__webpack_unused_export__=c;exports.ForwardRef=n;__webpack_unused_export__=e;__webpack_unused_export__=t;__webpack_unused_export__=r;__webpack_unused_export__=d;
__webpack_unused_export__=g;__webpack_unused_export__=f;__webpack_unused_export__=p;__webpack_unused_export__=function(a){return A(a)||z(a)===l};__webpack_unused_export__=A;__webpack_unused_export__=function(a){return z(a)===k};__webpack_unused_export__=function(a){return z(a)===h};__webpack_unused_export__=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};__webpack_unused_export__=function(a){return z(a)===n};__webpack_unused_export__=function(a){return z(a)===e};__webpack_unused_export__=function(a){return z(a)===t};
__webpack_unused_export__=function(a){return z(a)===r};__webpack_unused_export__=function(a){return z(a)===d};__webpack_unused_export__=function(a){return z(a)===g};__webpack_unused_export__=function(a){return z(a)===f};__webpack_unused_export__=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};__webpack_unused_export__=z;


/***/ }),

/***/ 864:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(921);
} else {}


/***/ }),

/***/ 427:
/***/ ((module) => {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		0
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ 746:
/***/ ((module) => {

!function(e){ true?module.exports=e(null):0}(function e(a){"use strict";var r=/^\0+/g,c=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,k=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,N="-webkit-",S="-moz-",F="-ms-",W=59,q=125,B=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,re=0,ce=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,pe=1,ke=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Ne=0,Se=1,Fe=2,We=3,qe=0,Be=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(c,"");if(Te.trim().length>0){switch(C){case M:case K:case W:case J:case I:break;default:Te+=s.charAt(R)}C=W}}if(1===$e)switch(C){case B:case q:case W:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=W;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case W:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case B:je=ze}}switch(C){case B:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case B:y++;break;case q:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s)}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++}if(Ue=s.substring(je,R),g===re)g=(Te=Te.replace(r,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(c,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(We,Ue,f,a,pe,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(Be>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+N+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue=""}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1)}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case q:case W:if((je=(Te=(we>0?Te.replace(c,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Se,Te,a,e,pe,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case re:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2))}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R)}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case W:case B:case q:break;default:if(z>0)$e=1}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*qe>0)Pe(Ne,Te,a,e,pe,be,Ve.length,t,i,t);be=1,pe++;break;case W:case q:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" "}break;case re:Re="\\0";break;case ce:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+ke===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)ke=w;case 8:if(m===le)ke=m}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1}u++}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==W)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0")}we=1}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0"}break;case K:case M:switch(w){case re:case B:case q:case W:case U:case ce:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0"}}if(Te+=Re,C!==M&&C!==K)$=C}}m=w,w=C,R++}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,r,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(r=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=r.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" "}switch(d){case P:r=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:r=a+r+Ee;break;case V:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(Ce>0){r=a+r.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)r=a+Ee+r}break;case U:a="";default:if(h>1&&r.indexOf(":")>0)r=a+r.replace(v,"$1"+Ee+"$2");else r=a+r+Ee}n+=r}i[s]=n.replace(c,"").trim()}return i}(a):a,ye>0)if(void 0!==(n=Pe(Fe,Ve,f,e,pe,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*ke!=0){if(2===Ae&&!Le(Ve,2))ke=0;switch(ke){case le:Ve=Ve.replace(k,":"+S+"$1")+Ve;break;case ne:Ve=Ve.replace(p,"::"+N+"input-$1")+Ve.replace(p,"::"+S+"$1")+Ve.replace(p,":"+F+"input-$1")+Ve}ke=0}}return Ye+Ve+Xe}function Ie(e,a,r){var c=a.trim().split(o),s=c,t=c.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],r,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",c[f],r,i).trim()}return s}function Je(e,a,r,c){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+c){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(r*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,r,c){var l,o=0,h=e+";",u=2*a+3*r+4*c;if(944===u)return function(e){var a=e.length,r=e.indexOf(":",9)+1,c=e.substring(0,r).trim(),s=e.substring(r,a-1).trim();switch(e.charCodeAt(9)*Be){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,r=0,a=t.length;i<a;r=0,++i){for(var l=t[i],o=l.split(n);l=o[r];){var h=l.charCodeAt(0);if(1===Be&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De}}o[r++]=l}s+=(0===i?"":",")+o.join(" ")}}if(s=c+s+";",1===Ae||2===Ae&&Le(s,1))return N+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?N+h+h:h;case 951:return 116===h.charCodeAt(3)?N+h+h:h;case 963:return 110===h.charCodeAt(5)?N+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return N+h+h;case 978:return N+h+S+h+h;case 1019:case 983:return N+h+S+h+F+h+h;case 883:if(h.charCodeAt(8)===Q)return N+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+N+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return N+"box-"+h.replace("-grow","")+N+h+F+h.replace("grow","positive")+h;case 115:return N+h+F+h.replace("shrink","negative")+h;case 98:return N+h+F+h.replace("basis","preferred-size")+h}return N+h+F+h+h;case 964:return N+h+F+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),N+"box-pack"+l+N+h+F+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+N)+h.replace(s,":"+S)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return N+h+F+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,N+l)+";"+h;break;case 207:case 102:h=h.replace(l,N+(u>102?"inline-":"")+"box")+";"+h.replace(l,N+l)+";"+h.replace(l,F+l+"box")+";"+h}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),N+h+N+"box-"+l+F+"flex-"+l+h;case 115:return N+h+F+"flex-item-"+h.replace(y,"")+h;default:return N+h+F+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,r,c).replace(":fill-available",":stretch");else return h.replace(l,N+l)+h.replace(l,S+l.replace("fill-",""))+h;break;case 962:if(h=N+h+(102===h.charCodeAt(5)?F+h:"")+h,r+c===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+N+"$2")+h}return h}function Le(e,a){var r=e.indexOf(1===a?":":"{"),c=e.substring(0,3!==a?r:10),s=e.substring(r+1,e.length-1);return Oe(2!==a?c:c.replace(O,"$1"),s,a)}function Me(e,a){var r=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return r!==a+";"?r.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,r,c,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,r,c,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o}if(u!==a)return u}function Qe(e,a,r,c){for(var s=a+1;s<r;++s)switch(c.charCodeAt(s)){case Z:if(e===T)if(c.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var r=e[a];switch(a){case"keyframe":Be=0|r;break;case"global":Ce=0|r;break;case"cascade":ge=0|r;break;case"compress":we=0|r;break;case"semicolon":ve=0|r;break;case"preserve":me=0|r;break;case"prefix":if(Oe=null,!r)Ae=0;else if("function"!=typeof r)Ae=1;else Ae=2,Oe=r}}return Re}function Te(a,r){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(Be>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,r,f,f,pe,be,0,0,0,0))&&"string"==typeof i)r=i;var n=He(xe,f,r,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,pe,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",ke=0,pe=1,be=1,we*t==0?n:n.replace(c,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:if("function"==typeof a)$e[ye++]=a;else if("object"==typeof a)for(var r=0,c=a.length;r<c;++r)e(a[r]);else qe=0|!!a}return e},Te.set=Re,void 0!==a)Re(a);return Te});
//# sourceMappingURL=stylis.min.js.map

/***/ }),

/***/ 787:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lib)
});

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/customParseFormat.js
var customParseFormat = __webpack_require__(285);
var customParseFormat_default = /*#__PURE__*/__webpack_require__.n(customParseFormat);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/isBetween.js
var isBetween = __webpack_require__(607);
var isBetween_default = /*#__PURE__*/__webpack_require__.n(isBetween);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/isSameOrAfter.js
var isSameOrAfter = __webpack_require__(212);
var isSameOrAfter_default = /*#__PURE__*/__webpack_require__.n(isSameOrAfter);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/isSameOrBefore.js
var isSameOrBefore = __webpack_require__(412);
var isSameOrBefore_default = /*#__PURE__*/__webpack_require__.n(isSameOrBefore);
// EXTERNAL MODULE: ./node_modules/stylis/stylis.min.js
var stylis_min = __webpack_require__(746);
var stylis_min_default = /*#__PURE__*/__webpack_require__.n(stylis_min);
// EXTERNAL MODULE: ./node_modules/stylis-rule-sheet/index.js
var stylis_rule_sheet = __webpack_require__(427);
var stylis_rule_sheet_default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet);
;// CONCATENATED MODULE: ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const unitless_browser_esm = (unitlessKeys);

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(864);
;// CONCATENATED MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ const memoize_one_esm = (memoizeOne);

;// CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const memoize_browser_esm = (memoize);

;// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize_browser_esm(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const is_prop_valid_browser_esm = (index);

;// CONCATENATED MODULE: ./node_modules/is-what/dist/index.esm.js
/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isUndefined(payload) {
    return getType(payload) === 'Undefined';
}
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
function isNull(payload) {
    return getType(payload) === 'Null';
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isPlainObject(payload) {
    if (getType(payload) !== 'Object')
        return false;
    return payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype;
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isObject(payload) {
    return isPlainObject(payload);
}
/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is { [K in any]: never }}
 */
function isEmptyObject(payload) {
    return isPlainObject(payload) && Object.keys(payload).length === 0;
}
/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isFullObject(payload) {
    return isPlainObject(payload) && Object.keys(payload).length > 0;
}
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isAnyObject(payload) {
    return getType(payload) === 'Object';
}
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
function isObjectLike(payload) {
    return isAnyObject(payload);
}
/**
 * Returns whether the payload is a function (regular or async)
 *
 * @param {*} payload
 * @returns {payload is AnyFunction}
 */
function isFunction(payload) {
    return typeof payload === 'function';
}
/**
 * Returns whether the payload is an array
 *
 * @param {any} payload
 * @returns {payload is any[]}
 */
function index_esm_isArray(payload) {
    return getType(payload) === 'Array';
}
/**
 * Returns whether the payload is a an array with at least 1 item
 *
 * @param {*} payload
 * @returns {payload is any[]}
 */
function isFullArray(payload) {
    return index_esm_isArray(payload) && payload.length > 0;
}
/**
 * Returns whether the payload is a an empty array
 *
 * @param {*} payload
 * @returns {payload is []}
 */
function isEmptyArray(payload) {
    return index_esm_isArray(payload) && payload.length === 0;
}
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isString(payload) {
    return getType(payload) === 'String';
}
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isFullString(payload) {
    return isString(payload) && payload !== '';
}
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isEmptyString(payload) {
    return payload === '';
}
/**
 * Returns whether the payload is a number (but not NaN)
 *
 * This will return `false` for `NaN`!!
 *
 * @param {*} payload
 * @returns {payload is number}
 */
function isNumber(payload) {
    return getType(payload) === 'Number' && !isNaN(payload);
}
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
function isBoolean(payload) {
    return getType(payload) === 'Boolean';
}
/**
 * Returns whether the payload is a regular expression (RegExp)
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
function isRegExp(payload) {
    return getType(payload) === 'RegExp';
}
/**
 * Returns whether the payload is a Map
 *
 * @param {*} payload
 * @returns {payload is Map<any, any>}
 */
function isMap(payload) {
    return getType(payload) === 'Map';
}
/**
 * Returns whether the payload is a WeakMap
 *
 * @param {*} payload
 * @returns {payload is WeakMap<any, any>}
 */
function isWeakMap(payload) {
    return getType(payload) === 'WeakMap';
}
/**
 * Returns whether the payload is a Set
 *
 * @param {*} payload
 * @returns {payload is Set<any>}
 */
function isSet(payload) {
    return getType(payload) === 'Set';
}
/**
 * Returns whether the payload is a WeakSet
 *
 * @param {*} payload
 * @returns {payload is WeakSet<any>}
 */
function isWeakSet(payload) {
    return getType(payload) === 'WeakSet';
}
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
function isSymbol(payload) {
    return getType(payload) === 'Symbol';
}
/**
 * Returns whether the payload is a Date, and that the date is valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
function isDate(payload) {
    return getType(payload) === 'Date' && !isNaN(payload);
}
/**
 * Returns whether the payload is a Blob
 *
 * @param {*} payload
 * @returns {payload is Blob}
 */
function isBlob(payload) {
    return getType(payload) === 'Blob';
}
/**
 * Returns whether the payload is a File
 *
 * @param {*} payload
 * @returns {payload is File}
 */
function isFile(payload) {
    return getType(payload) === 'File';
}
/**
 * Returns whether the payload is a Promise
 *
 * @param {*} payload
 * @returns {payload is Promise<any>}
 */
function isPromise(payload) {
    return getType(payload) === 'Promise';
}
/**
 * Returns whether the payload is an Error
 *
 * @param {*} payload
 * @returns {payload is Error}
 */
function isError(payload) {
    return getType(payload) === 'Error';
}
/**
 * Returns whether the payload is literally the value `NaN` (it's `NaN` and also a `number`)
 *
 * @param {*} payload
 * @returns {payload is typeof NaN}
 */
function isNaNValue(payload) {
    return getType(payload) === 'Number' && isNaN(payload);
}
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */
function isPrimitive(payload) {
    return (isBoolean(payload) ||
        isNull(payload) ||
        isUndefined(payload) ||
        isNumber(payload) ||
        isString(payload) ||
        isSymbol(payload));
}
/**
 * Returns true whether the payload is null or undefined
 *
 * @param {*} payload
 * @returns {(payload is null | undefined)}
 */
var isNullOrUndefined = isOneOf(isNull, isUndefined);
function isOneOf(a, b, c, d, e) {
    return function (value) {
        return a(value) || b(value) || (!!c && c(value)) || (!!d && d(value)) || (!!e && e(value));
    };
}
/**
 * Does a generic check to check that the given payload is of a given type.
 * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
 * It will, however, differentiate between object and null
 *
 * @template T
 * @param {*} payload
 * @param {T} type
 * @throws {TypeError} Will throw type error if type is an invalid type
 * @returns {payload is T}
 */
function isType(payload, type) {
    if (!(type instanceof Function)) {
        throw new TypeError('Type must be a function');
    }
    if (!Object.prototype.hasOwnProperty.call(type, 'prototype')) {
        throw new TypeError('Type is not a class');
    }
    // Classes usually have names (as functions usually have names)
    var name = type.name;
    return getType(payload) === name || Boolean(payload && payload.constructor === type);
}



;// CONCATENATED MODULE: ./node_modules/merge-anything/dist/index.esm.js


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function assignProp(carry, key, newVal, originalObject) {
    var propType = originalObject.propertyIsEnumerable(key)
        ? 'enumerable'
        : 'nonenumerable';
    if (propType === 'enumerable')
        carry[key] = newVal;
    if (propType === 'nonenumerable') {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function mergeRecursively(origin, newComer, extensions) {
    // work directly on newComer if its not an object
    if (!isPlainObject(newComer)) {
        // extend merge rules
        if (extensions && index_esm_isArray(extensions)) {
            extensions.forEach(function (extend) {
                newComer = extend(origin, newComer);
            });
        }
        return newComer;
    }
    // define newObject to merge all values upon
    var newObject = {};
    if (isPlainObject(origin)) {
        var props_1 = Object.getOwnPropertyNames(origin);
        var symbols_1 = Object.getOwnPropertySymbols(origin);
        newObject = __spreadArrays(props_1, symbols_1).reduce(function (carry, key) {
            // @ts-ignore
            var targetVal = origin[key];
            if ((!isSymbol(key) && !Object.getOwnPropertyNames(newComer).includes(key)) ||
                (isSymbol(key) && !Object.getOwnPropertySymbols(newComer).includes(key))) {
                assignProp(carry, key, targetVal, origin);
            }
            return carry;
        }, {});
    }
    var props = Object.getOwnPropertyNames(newComer);
    var symbols = Object.getOwnPropertySymbols(newComer);
    var result = __spreadArrays(props, symbols).reduce(function (carry, key) {
        // re-define the origin and newComer as targetVal and newVal
        var newVal = newComer[key];
        var targetVal = (isPlainObject(origin))
            // @ts-ignore
            ? origin[key]
            : undefined;
        // extend merge rules
        if (extensions && index_esm_isArray(extensions)) {
            extensions.forEach(function (extend) {
                newVal = extend(targetVal, newVal);
            });
        }
        // When newVal is an object do the merge recursively
        if (targetVal !== undefined && isPlainObject(newVal)) {
            newVal = mergeRecursively(targetVal, newVal, extensions);
        }
        assignProp(carry, key, newVal, newComer);
        return carry;
    }, newObject);
    return result;
}
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 *
 * @param {(IConfig | any)} origin
 * @param {...any[]} newComers
 * @returns the result
 */
function merge(origin) {
    var newComers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        newComers[_i - 1] = arguments[_i];
    }
    var extensions = null;
    var base = origin;
    if (isPlainObject(origin) && origin.extensions && Object.keys(origin).length === 1) {
        base = {};
        extensions = origin.extensions;
    }
    return newComers.reduce(function (result, newComer) {
        return mergeRecursively(result, newComer, extensions);
    }, base);
}

function concatArrays(originVal, newVal) {
    if (isArray(originVal) && isArray(newVal)) {
        // concat logic
        return originVal.concat(newVal);
    }
    return newVal; // always return newVal as fallback!!
}

/* harmony default export */ const index_esm = (merge);


;// CONCATENATED MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js










// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var styled_components_browser_esm_isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function styled_components_browser_esm_isFunction(test) {
  return typeof test === 'function';
}

// 

function getComponentName(target) {
  return ( false) || target.displayName || target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 

var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';

var SC_VERSION_ATTR = 'data-styled-version';

var SC_STREAM_ATTR = 'data-styled-streamed';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "production" !== 'production';

// Shared empty execution context when generating static styles
var STATIC_EXECUTION_CONTEXT = {};

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  false ? 0 : {};

/**
 * super basic version of sprintf
 */
function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (true) {
      var _this = possibleConstructorReturn(this, _Error.call(this, 'An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#' + code + ' for more information.' + (interpolations.length > 0 ? ' Additional arguments: ' + interpolations.join(', ') : '')));
    } else { var _this; }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new (stylis_min_default())({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new (stylis_min_default())({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];

// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylis_rule_sheet_default()(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if (
  // the first self-ref is always untouched
  offset > 0 &&
  // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 &&
  // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};

/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

  return stylis(prefix || !selector ? '' : selector, cssStr);
}

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : 0;
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = tag.ownerDocument.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = tag.ownerDocument.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var targetDocument = document;
  if (target) targetDocument = target.ownerDocument;else if (tagEl) targetDocument = tagEl.ownerDocument;

  var el = targetDocument.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.4.1");

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(targetDocument.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.4.1" + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.4.1", _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    // $FlowFixMe
    if (el.isConnected === false) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(targetDocument, id) {
  return targetDocument.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(el.ownerDocument, id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(el.ownerDocument, id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;

    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }

  /* remove old HTMLStyleElements, since they have been rehydrated */
  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {

  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.4.1" + '"]');

    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (!extractedSize) return this;

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);

    rehydrate(tag, els, extracted);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);

    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;

    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.cloneElement)(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

// 

var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;

    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in unitless_browser_esm)) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 

/**
 * It's falsish not falsy because 0 is allowed.
 */
var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);

  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (styled_components_browser_esm_isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));

        return rules;
      } else if (styled_components_browser_esm_isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ':', obj[key], ';');

        return rules;
      }
      rules.push(hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';');
    }
    return rules;
  });

  return prevKey ? [prevKey + ' {'].concat(rules, ['}']) : rules;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);

      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }

  /* Handle other components */
  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }

  /* Either execute or defer the function */
  if (styled_components_browser_esm_isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if (false) {}

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }

  /* Handle objects */
  return styled_components_browser_esm_isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 

function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (styled_components_browser_esm_isFunction(styles) || styled_components_browser_esm_isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
}

// 

function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!(0,react_is.isValidElementType)(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }

  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments
  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };

  /* If config methods are called, wrap up a new template function and merge options */
  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };

  /* Modify/inject new props at runtime */
  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

// 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}

// 

function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (styled_components_browser_esm_isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (styled_components_browser_esm_isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return styled_components_browser_esm_isFunction(x) || hasFunctionObjectKey(x);
  })) return false;

  return true;
}

// 

/* combines hashStr (murmurhash) and nameGenerator for convenience */
var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.isStatic =  true && isStaticRules(rules, attrs);
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function styled_components_browser_esm_escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function isTag(target) {
  return typeof target === 'string' && ( false ? 0 : true);
}

// 

function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[react_is.ForwardRef] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);

var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;


function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
    // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));

    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      key = keys[i];

      if (
      // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
      // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

// 
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
});

// 

var ThemeContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext)();

var ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = memoize_one_esm(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;

    return external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(
      ThemeContext.Consumer,
      null,
      this.renderInner
    );
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);

    return external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(
      ThemeContext.Provider,
      { value: context },
      this.props.children
    );
  };

  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (styled_components_browser_esm_isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if (false) {}

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_.Component);

// 

var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }

  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        var renderedHtml = chunk.toString();

        /* prepend style html to chunk, unless the start of the chunk is a closing tag in which case append right after that */
        if (CLOSING_TAG_R.test(renderedHtml)) {
          var endOfClosingTag = renderedHtml.indexOf('>');

          this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
        } else this.push(html + renderedHtml);

        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.seal();
    });

    readableStream.on('error', function (err) {
      _this.seal();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var StyleSheetContext = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createContext)();
var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = memoize_one_esm(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;


    return external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(
      StyleSheetContext.Provider,
      { value: this.getContext(sheet, target) },
       false ? 0 : children
    );
  };

  return StyleSheetManager;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_.Component);
 false ? 0 : void 0;

// 

var identifiers = {};

/* We depend on components having unique IDs */
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : styled_components_browser_esm_escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
}

// $FlowFixMe

var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};

    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (false) {}
    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(
      StyleSheetConsumer,
      null,
      this.renderOuter
    );
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;

    this.styleSheet = styleSheet;

    // No need to subscribe a static component to theme changes, it won't change anything
    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();

    return external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(
      ThemeConsumer,
      null,
      this.renderInner
    );
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target;


    var generatedClassName = void 0;
    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps) || EMPTY_OBJECT, this.props);
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);

    var propsForElement = {};
    var computedProps = _extends({}, this.props, this.attrs);

    var key = void 0;
    // eslint-disable-next-line guard-for-in
    for (key in computedProps) {
      if (false) {}

      if (key === 'forwardedComponent' || key === 'as') {
        continue;
      } else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (key === 'forwardedAs') propsForElement.as = computedProps[key];else if (!isTargetTag || is_prop_valid_browser_esm(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, this.props.className, this.attrs.className).filter(Boolean).join(' ');

    return (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.createElement)(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, { theme: theme });

    if (!attrs.length) return context;

    this.attrs = {};

    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (styled_components_browser_esm_isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }

      /* eslint-disable guard-for-in */
      // $FlowFixMe
      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (styled_components_browser_esm_isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (false) {}

            attr = attr(context);

            if (false) {}
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */
    });

    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);

    if (false) {}

    return className;
  };

  return StyledComponent;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_.Component);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);

  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;


  var styledComponentId = options.displayName && options.componentId ? styled_components_browser_esm_escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

  // fold the underlying StyledComponent attrs up (implicit extend)
  var finalAttrs =
  // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */
  var WrappedStyledComponent = void 0;
  var forwardRef = function forwardRef(props, ref) {
    return external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(ParentComponent, _extends({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  WrappedStyledComponent = external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(forwardRef);
  WrappedStyledComponent.displayName = displayName;

  // $FlowFixMe
  WrappedStyledComponent.attrs = finalAttrs;
  // $FlowFixMe
  WrappedStyledComponent.componentStyle = componentStyle;

  // $FlowFixMe
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;

  // $FlowFixMe
  WrappedStyledComponent.styledComponentId = styledComponentId;

  // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

  // $FlowFixMe
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);


    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : styled_components_browser_esm_escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  // $FlowFixMe
  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get$$1() {
      return this._foldedDefaultProps;
    },
    set: function set$$1(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? index_esm(target.defaultProps, obj) : obj;
    }
  });

  if (false) {}

  // $FlowFixMe
  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
};

// Shorthands for all valid HTML Elements
domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);

    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');

    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };

  // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}();

// 

// place our cache into shared context so it'll persist between HMRs
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent(props) {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;


      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }

      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */
      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */
      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if (false) {}

      return React.createElement(
        StyleSheetConsumer,
        null,
        function (styleSheet) {
          _this2.styleSheet = styleSheet || StyleSheet.master;

          var globalStyle = _this2.state.globalStyle;


          if (globalStyle.isStatic) {
            globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);

            return null;
          } else {
            return React.createElement(
              ThemeConsumer,
              null,
              function (theme) {
                // $FlowFixMe
                var defaultProps = _this2.constructor.defaultProps;


                var context = _extends({}, _this2.props);

                if (typeof theme !== 'undefined') {
                  context.theme = determineTheme(_this2.props, theme, defaultProps);
                }

                globalStyle.renderStyles(context, _this2.styleSheet);

                return null;
              }
            );
          }
        }
      );
    };

    return GlobalStyleComponent;
  }(React.Component);

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;


  return GlobalStyleComponent;
}

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if (false) {}

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));

  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));

  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
}

// 

var withTheme = (function (Component$$1) {
  var WithTheme = React.forwardRef(function (props, ref) {
    return React.createElement(
      ThemeConsumer,
      null,
      function (theme) {
        // $FlowFixMe
        var defaultProps = Component$$1.defaultProps;

        var themeProp = determineTheme(props, theme, defaultProps);

        if (false) {}

        return React.createElement(Component$$1, _extends({}, props, { theme: themeProp, ref: ref }));
      }
    );
  });

  hoistNonReactStatics(WithTheme, Component$$1);

  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';

  return WithTheme;
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if (false) {}

/* Warning if there are several instances of styled-components */
if (false) {}

//

/* harmony default export */ const styled_components_browser_esm = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

;// CONCATENATED MODULE: ./lib/elements/Label.js
function Label_extends() { Label_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Label_extends.apply(this, arguments); }




var DLabel = /*#__PURE__*/styled_components_browser_esm.label.withConfig({
  displayName: "Label__DLabel",
  componentId: "sc-1yy87qc-0"
})(["font-size:15px;color:#000;"]);

var Label = function Label(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(DLabel, Label_extends({}, props, {
    className: props.className
  }));
};

Label.propTypes = {
  className: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object])
};
/* harmony default export */ const elements_Label = (Label);
;// CONCATENATED MODULE: ./lib/elements/Input.js
function Input_extends() { Input_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Input_extends.apply(this, arguments); }




var DInput = /*#__PURE__*/styled_components_browser_esm.input.withConfig({
  displayName: "Input__DInput",
  componentId: "sc-12thhga-0"
})(["width:100%;padding:5px;color:black;background:white;border:", ";border-radius:3px;box-sizing:border-box;&:focus{outline:none;}"], function (props) {
  return !props.showBorder ? 'none' : '1px solid';
});

var Input = function Input(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(DInput, Input_extends({}, props, {
    className: props.className
  }));
};

Input.propTypes = {
  className: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object])
};
/* harmony default export */ const elements_Input = (Input);
;// CONCATENATED MODULE: ./lib/elements/Icon.js
function Icon_extends() { Icon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Icon_extends.apply(this, arguments); }




var Img = /*#__PURE__*/styled_components_browser_esm.img.withConfig({
  displayName: "Icon__Img",
  componentId: "sc-1yw6gqm-0"
})(["width:22px;height:22px;position:absolute;cursor:pointer;bottom:3px;margin:auto;right:10px;"]);

var Icon = function Icon(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(Img, Icon_extends({}, props, {
    className: props.className,
    src: props.icon
  }));
};

Icon.propTypes = {
  className: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  icon: (prop_types_default()).string.isRequired
};
/* harmony default export */ const elements_Icon = (Icon);
;// CONCATENATED MODULE: ./lib/elements/Container.js

var Container = /*#__PURE__*/styled_components_browser_esm.div.withConfig({
  displayName: "Container",
  componentId: "sc-crzztr-0"
})(["width:100%;position:relative;font-family:'Open Sans',sans-serif;"]);
/* harmony default export */ const elements_Container = (Container);
;// CONCATENATED MODULE: ./lib/elements/CalendarContainer.js

var CalendarContainer = /*#__PURE__*/styled_components_browser_esm.div.attrs({
  // we can define static props
  tabIndex: '1'
}).withConfig({
  displayName: "CalendarContainer",
  componentId: "sc-1gorc7r-0"
})(["width:100%;user-select:none;height:315px;max-width:325px;min-width:315px;max-height:315px;position:absolute;top:100%;background-color:", ";border:solid 1px #f4f4f4;border-radius:6px;&:focus{outline:none;}"], function (props) {
  return props.secondaryColor;
});
/* harmony default export */ const elements_CalendarContainer = (CalendarContainer);
;// CONCATENATED MODULE: ./lib/elements/CalendarHeading.js

var CalendarHeading = /*#__PURE__*/styled_components_browser_esm.div.withConfig({
  displayName: "CalendarHeading",
  componentId: "sc-15iv79b-0"
})(["width:100%;height:64px;max-width:325px;max-height:64px;position:relative;background-color:", ";border-bottom:solid 1px #f4f4f4;border-radius:6px;"], function (props) {
  return props.secondaryColor;
});
/* harmony default export */ const elements_CalendarHeading = (CalendarHeading);
;// CONCATENATED MODULE: ./lib/elements/SingleArrow.js

var SingleArrow = /*#__PURE__*/styled_components_browser_esm.span.withConfig({
  displayName: "SingleArrow",
  componentId: "sc-f35t5r-0"
})(["width:22px;height:22px;border-radius:11.3px;background-color:", ";display:inline-block;position:absolute;top:0;cursor:pointer;bottom:0;margin:auto;color:#b8c2cb;font-weight:bold;opacity:0.4;border-radius:50%;border:", ";", ":40px;&:after{content:'';display:inline-block;margin-top:1px;margin-left:", ";width:5px;height:5px;border-top:", ";border-right:", ";-moz-transform:", ";-webkit-transform:", ";transform:", ";position:absolute;top:0;right:0;left:0;bottom:0;margin:auto;}"], function (props) {
  return props.secondaryColor;
}, function (props) {
  return '2px solid ' + props.primaryTextColor;
}, function (props) {
  return props.left ? 'left' : 'right';
}, function (props) {
  return props.left ? '8px' : '6px';
}, function (props) {
  return '2px solid ' + props.primaryTextColor;
}, function (props) {
  return '2px solid ' + props.primaryTextColor;
}, function (props) {
  return props.left ? 'rotate(-135deg)' : 'rotate(45deg)';
}, function (props) {
  return props.left ? 'rotate(-135deg)' : 'rotate(45deg)';
}, function (props) {
  return props.left ? 'rotate(-135deg)' : 'rotate(45deg)';
});
/* harmony default export */ const elements_SingleArrow = (SingleArrow);
;// CONCATENATED MODULE: ./lib/elements/DateEditor.js








dayjs_min_default().extend((customParseFormat_default()));
dayjs_min_default().extend((isBetween_default()));
dayjs_min_default().extend((isSameOrAfter_default()));
dayjs_min_default().extend((isSameOrBefore_default()));
var Span = /*#__PURE__*/styled_components_browser_esm.span.withConfig({
  displayName: "DateEditor__Span",
  componentId: "sc-st1fz1-0"
})(["font-size:1.5em;text-align:center;color:", ";font-size:20px;font-weight:600;margin-right:10px;line-height:64px;cursor:pointer;opacity:0.4;"], function (props) {
  return props.primaryTextColor;
});
var SelectedSpan = /*#__PURE__*/styled_components_browser_esm(Span).withConfig({
  displayName: "DateEditor__SelectedSpan",
  componentId: "sc-st1fz1-1"
})(["color:", ";opacity:1;"], function (props) {
  return props.primaryTextColor;
});
var Wrapper = /*#__PURE__*/styled_components_browser_esm.div.withConfig({
  displayName: "DateEditor__Wrapper",
  componentId: "sc-st1fz1-2"
})(["min-width:170px;background:", ";text-align:center;border-radius:6px;"], function (props) {
  return props.secondaryColor;
});

var DateEditor = function DateEditor(props) {
  var onDateClick = props.onDateClick,
      onMonthClick = props.onMonthClick,
      onYearClick = props.onYearClick,
      date = props.date,
      format = props.format,
      viewFor = props.viewFor,
      maxDate = props.maxDate,
      minDate = props.minDate,
      primaryTextColor = props.primaryTextColor;

  var _date = dayjs_min_default()(date || dayjs_min_default()().format(format || 'DD-MM-YYYY'), format || 'DD-MM-YYYY');

  var _minDate = dayjs_min_default()(minDate, format || 'DD-MM-YYYY');

  var _maxDate = dayjs_min_default()(maxDate, format || 'DD-MM-YYYY');

  var defaultDate = _date.isBetween(minDate ? _minDate.clone().subtract(1, 'day') : _date.clone().subtract(1, 'day'), maxDate ? _maxDate.clone().add(1, 'day') : _date.clone().add(1, 'day')) ? _date : maxDate && _maxDate.isSameOrAfter(_date) ? _date : minDate && _minDate.isSameOrBefore(_date) ? _minDate : maxDate ? _maxDate.clone().subtract(1, 'day') : minDate ? _minDate.clone().add(1, 'day') : _date;
  var day = date ? dayjs_min_default()(date, format || 'DD-MM-YYYY').format('DD') : defaultDate.format('DD');
  var month = date ? dayjs_min_default()(date, format || 'DD-MM-YYYY').format('MMM') : defaultDate.format('MMM');
  var year = date ? dayjs_min_default()(date, format || 'DD-MM-YYYY').format('YYYY') : defaultDate.format('YYYY');
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(Wrapper, null, viewFor === 'date' ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(SelectedSpan, {
    onClick: onDateClick,
    primaryTextColor: primaryTextColor
  }, day) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(Span, {
    onClick: onDateClick,
    primaryTextColor: primaryTextColor
  }, day), viewFor === 'month' ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(SelectedSpan, {
    onClick: onMonthClick,
    primaryTextColor: primaryTextColor
  }, month) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(Span, {
    onClick: onMonthClick,
    primaryTextColor: primaryTextColor
  }, month), viewFor === 'year' ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(SelectedSpan, {
    onClick: onYearClick,
    primaryTextColor: primaryTextColor
  }, year) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(Span, {
    onClick: onYearClick,
    primaryTextColor: primaryTextColor
  }, year));
};

DateEditor.propTypes = {
  date: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  format: (prop_types_default()).string,
  maxDate: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  minDate: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  onDateClick: (prop_types_default()).func,
  onMonthClick: (prop_types_default()).func,
  onYearClick: (prop_types_default()).func,
  primaryTextColor: (prop_types_default()).string,
  secondaryColor: (prop_types_default()).string,
  viewFor: (prop_types_default()).string
};
/* harmony default export */ const elements_DateEditor = (DateEditor);
;// CONCATENATED MODULE: ./lib/elements/Wrapper.js

var fadeinout = /*#__PURE__*/keyframes(["0%{opacity:0;}50%{opacity:1;}"]);
var Wrapper_Wrapper = /*#__PURE__*/styled_components_browser_esm.div.withConfig({
  displayName: "Wrapper",
  componentId: "sc-1f69782-0"
})(["width:100%;height:250px;max-width:280px;background:", ";text-align:center;box-sizing:border-box;margin:0 auto;animation:", " .5s linear 1 forwards;"], function (props) {
  return props.secondaryColor;
}, fadeinout);
/* harmony default export */ const elements_Wrapper = (Wrapper_Wrapper);
;// CONCATENATED MODULE: ./lib/elements/Span.js

var Span_Span = /*#__PURE__*/styled_components_browser_esm.span.withConfig({
  displayName: "Span",
  componentId: "sc-1r2petn-0"
})(["font-size:14px;text-align:center;color:#222222;width:40px;height:40px;margin:15px;display:inline-block;line-height:40px;cursor:pointer;overflow:auto;"]);
/* harmony default export */ const elements_Span = (Span_Span);
;// CONCATENATED MODULE: ./lib/elements/Header.js

var Header = /*#__PURE__*/styled_components_browser_esm.div.withConfig({
  displayName: "Header",
  componentId: "sc-169yovh-0"
})(["width:100%;text-align:left;"]);
/* harmony default export */ const elements_Header = (Header);
;// CONCATENATED MODULE: ./lib/elements/DateView.js











dayjs_min_default().extend((customParseFormat_default()));
dayjs_min_default().extend((isBetween_default()));
dayjs_min_default().extend((isSameOrAfter_default()));
dayjs_min_default().extend((isSameOrBefore_default()));
var DSpan = /*#__PURE__*/styled_components_browser_esm(elements_Span).withConfig({
  displayName: "DateView__DSpan",
  componentId: "sc-sepxv7-0"
})(["height:30px;line-height:30px;margin:0;pointer-events:", ";cursor:", ";background-color:", ";color:", ";opacity:", ";"], function (props) {
  return props.isMax || props.isMin ? 'none' : 'auto';
}, function (props) {
  return props.isMax || props.isMin ? 'default' : 'pointer';
}, function (props) {
  return props.isMax || props.isMin ? "#eee" : props.secondaryColor;
}, function (props) {
  return props.primaryTextColor;
}, function (props) {
  return props.isMax || props.isMin ? '0.4' : '1';
});
var DateView_SelectedSpan = /*#__PURE__*/styled_components_browser_esm(elements_Span).withConfig({
  displayName: "DateView__SelectedSpan",
  componentId: "sc-sepxv7-1"
})(["background-color:", ";color:", ";height:30px;line-height:30px;margin:0;opacity:", ";"], function (props) {
  return props.primaryColor;
}, function (props) {
  return props.isMax || props.isMin ? props.primaryTextColor : props.secondaryTextColor;
}, function (props) {
  return props.isMax || props.isMin ? '0.4' : '1';
});
var HeadSpan = /*#__PURE__*/styled_components_browser_esm(elements_Span).withConfig({
  displayName: "DateView__HeadSpan",
  componentId: "sc-sepxv7-2"
})(["color:#b8c2cb;font-weight:600;margin:0;color:", ";opacity:0.4;"], function (props) {
  return props.primaryTextColor;
});
var Body = /*#__PURE__*/styled_components_browser_esm.div.withConfig({
  displayName: "DateView__Body",
  componentId: "sc-sepxv7-3"
})(["width:100%;text-align:left;height:30px;"]);

var DateView = function DateView(props) {
  var date = props.date,
      format = props.format,
      onDateChange = props.onDateChange,
      maxDate = props.maxDate,
      minDate = props.minDate,
      primaryColor = props.primaryColor,
      secondaryColor = props.secondaryColor,
      primaryTextColor = props.primaryTextColor,
      secondaryTextColor = props.secondaryTextColor;

  var _date = dayjs_min_default()(date || dayjs_min_default()().format(format || 'DD-MM-YYYY'), format || 'DD-MM-YYYY');

  var _minDate = dayjs_min_default()(minDate, format || 'DD-MM-YYYY');

  var _maxDate = dayjs_min_default()(maxDate, format || 'DD-MM-YYYY');

  var defaultDate = _date.isBetween(minDate ? _minDate.clone().subtract(1, 'day') : _date.clone().subtract(1, 'day'), maxDate ? _maxDate.clone().add(1, 'day') : _date.clone().add(1, 'day')) ? _date : maxDate && _maxDate.isSameOrAfter(_date) ? _date : minDate && _minDate.isSameOrBefore(_date) ? _minDate : maxDate ? _maxDate.clone().subtract(1, 'day') : minDate ? _minDate.clone().add(1, 'day') : _date;
  var mainDate = date ? dayjs_min_default()(date, format || 'DD-MM-YYYY') : defaultDate;
  var endDate = maxDate ? dayjs_min_default()(maxDate, format || 'DD-MM-YYYY') : null;
  var startDate = minDate ? dayjs_min_default()(minDate, format || 'DD-MM-YYYY') : null;
  var currentDate = mainDate.get('date');
  var days = mainDate.daysInMonth(5);
  var daysToAdd = Number(mainDate.startOf('month').format('d'));
  var daysArray = [];

  for (var i = 1; i <= days; i++) {
    daysArray[i - 1] = {
      d: i,
      isMax: endDate ? mainDate.startOf('day').date(i).isAfter(endDate) : false,
      isMin: startDate ? mainDate.startOf('day').date(i).isBefore(startDate) : false
    };
  }

  var extraDaysArray = [];

  for (var _i = 0; _i < daysToAdd; _i++) {
    extraDaysArray[_i] = 0;
  }

  var totalDays = extraDaysArray.concat(daysArray);
  var d = [];
  var chunk = 7;

  for (var _i2 = 0, j = totalDays.length; _i2 < j; _i2 += chunk) {
    d.push(totalDays.slice(_i2, _i2 + chunk));
  }

  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_Wrapper, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_Header, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(HeadSpan, {
    primaryTextColor: primaryTextColor
  }, "S"), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(HeadSpan, {
    primaryTextColor: primaryTextColor
  }, "M"), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(HeadSpan, {
    primaryTextColor: primaryTextColor
  }, "T"), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(HeadSpan, {
    primaryTextColor: primaryTextColor
  }, "W"), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(HeadSpan, {
    primaryTextColor: primaryTextColor
  }, "T"), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(HeadSpan, {
    primaryTextColor: primaryTextColor
  }, "F"), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(HeadSpan, {
    primaryTextColor: primaryTextColor
  }, "S")), d.map(function (week, k) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(Body, {
      key: k
    }, week.map(function (day, i) {
      return currentDate === day.d && !d.isMax ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(DateView_SelectedSpan, {
        isMax: day.isMax,
        isMin: day.isMin,
        key: i,
        onClick: function onClick() {
          return !d.isMax && !day.isMin && onDateChange(day.d);
        },
        primaryColor: primaryColor,
        primaryTextColor: primaryTextColor,
        secondaryTextColor: secondaryTextColor
      }, day ? day.d : '') : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(DSpan, {
        isMax: day.isMax,
        isMin: day.isMin,
        key: i,
        onClick: function onClick() {
          return day && !d.isMax && !day.isMin && onDateChange(day.d);
        },
        primaryColor: primaryColor,
        primaryTextColor: primaryTextColor,
        secondaryColor: secondaryColor
      }, day ? day.d : '');
    }));
  }));
};

DateView.propTypes = {
  date: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  format: (prop_types_default()).string,
  maxDate: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  minDate: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  onDateChange: (prop_types_default()).func,
  primaryColor: (prop_types_default()).string,
  primaryTextColor: (prop_types_default()).string,
  secondaryColor: (prop_types_default()).string,
  secondaryTextColor: (prop_types_default()).string
};
/* harmony default export */ const elements_DateView = (DateView);
;// CONCATENATED MODULE: ./lib/elements/MonthView.js











dayjs_min_default().extend((customParseFormat_default()));
dayjs_min_default().extend((isBetween_default()));
dayjs_min_default().extend((isSameOrAfter_default()));
dayjs_min_default().extend((isSameOrBefore_default()));
var YSpan = /*#__PURE__*/styled_components_browser_esm(elements_Span).withConfig({
  displayName: "MonthView__YSpan",
  componentId: "sc-1p1ywwz-0"
})(["margin:5px 15px;pointer-events:", ";cursor:", ";background-color:", ";color:", ";opacity:", ";width:60px;"], function (props) {
  return props.isMax || props.isMin ? 'none' : 'auto';
}, function (props) {
  return props.isMax || props.isMin ? 'default' : 'pointer';
}, function (props) {
  return props.isMax || props.isMin ? '#eee' : props.secondaryColor;
}, function (props) {
  return props.primaryTextColor;
}, function (props) {
  return props.isMax || props.isMin ? '0.4' : '1';
});
var MonthView_SelectedSpan = /*#__PURE__*/styled_components_browser_esm(elements_Span).withConfig({
  displayName: "MonthView__SelectedSpan",
  componentId: "sc-1p1ywwz-1"
})(["background-color:", ";color:", ";margin:5px 15px;width:60px;"], function (props) {
  return props.primaryColor;
}, function (props) {
  return props.isMax || props.isMin ? props.primaryTextColor : props.secondaryTextColor;
});

var MonthView = function MonthView(props) {
  var date = props.date,
      format = props.format,
      onMonthChange = props.onMonthChange,
      maxDate = props.maxDate,
      minDate = props.minDate,
      primaryColor = props.primaryColor,
      secondaryColor = props.secondaryColor,
      primaryTextColor = props.primaryTextColor,
      secondaryTextColor = props.secondaryTextColor;

  var _date = dayjs_min_default()(date || dayjs_min_default()().format(format || 'DD-MM-YYYY'), format || 'DD-MM-YYYY');

  var _minDate = dayjs_min_default()(minDate, format || 'DD-MM-YYYY');

  var _maxDate = dayjs_min_default()(maxDate, format || 'DD-MM-YYYY');

  var defaultDate = _date.isBetween(minDate ? _minDate.clone().subtract(1, 'day') : _date.clone().subtract(1, 'day'), maxDate ? _maxDate.clone().add(1, 'day') : _date.clone().add(1, 'day')) ? _date : maxDate && _maxDate.isSameOrAfter(_date) ? _date : minDate && _minDate.isSameOrBefore(_date) ? _minDate : maxDate ? _maxDate.clone().subtract(1, 'day') : minDate ? _minDate.clone().add(1, 'day') : _date;
  var mainDate = date ? dayjs_min_default()(date, format || 'DD-MM-YYYY') : defaultDate;
  var endDate = maxDate ? dayjs_min_default()(maxDate, format || 'DD-MM-YYYY') : null;
  var startDate = minDate ? dayjs_min_default()(minDate, format || 'DD-MM-YYYY') : null;
  var currentMonth = mainDate.format('MMM');
  var rawMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var months = [];

  for (var i = 0; i < rawMonths.length; i++) {
    months.push({
      m: rawMonths[i],
      isMax: endDate ? mainDate.month(i).isAfter(endDate) : false,
      isMin: startDate ? mainDate.month(i).isBefore(startDate) : false
    });
  }

  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_Wrapper, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_Header, null, months.map(function (month, k) {
    return currentMonth === month.m ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(MonthView_SelectedSpan, {
      isMax: month.isMax,
      isMin: month.isMin,
      key: k,
      onClick: function onClick() {
        return !month.isMax && !month.isMin && onMonthChange(k);
      },
      primaryColor: primaryColor,
      primaryTextColor: primaryTextColor,
      secondaryTextColor: secondaryTextColor
    }, month.m) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(YSpan, {
      isMax: month.isMax,
      isMin: month.isMin,
      key: k,
      onClick: function onClick() {
        return !month.isMax && !month.isMin && onMonthChange(k);
      },
      primaryTextColor: primaryTextColor,
      secondaryColor: secondaryColor,
      secondaryTextColor: secondaryTextColor
    }, month.m);
  })));
};

MonthView.propTypes = {
  date: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  format: (prop_types_default()).string,
  maxDate: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  minDate: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  onMonthChange: (prop_types_default()).func,
  primaryColor: (prop_types_default()).string,
  primaryTextColor: (prop_types_default()).string,
  secondaryColor: (prop_types_default()).string,
  secondaryTextColor: (prop_types_default()).string
};
/* harmony default export */ const elements_MonthView = (MonthView);
;// CONCATENATED MODULE: ./lib/elements/YearView.js











dayjs_min_default().extend((customParseFormat_default()));
dayjs_min_default().extend((isBetween_default()));
dayjs_min_default().extend((isSameOrAfter_default()));
dayjs_min_default().extend((isSameOrBefore_default()));
var YearView_YSpan = /*#__PURE__*/styled_components_browser_esm(elements_Span).withConfig({
  displayName: "YearView__YSpan",
  componentId: "sc-13uw4f7-0"
})(["margin:5px 15px;pointer-events:", ";cursor:", ";background-color:", ";color:", ";opacity:", ";"], function (props) {
  return props.isMax || props.isMin ? 'none' : 'auto';
}, function (props) {
  return props.isMax || props.isMin ? 'default' : 'pointer';
}, function (props) {
  return props.isMax || props.isMin ? '#eee' : props.secondaryColor;
}, function (props) {
  return props.primaryTextColor;
}, function (props) {
  return props.isMax || props.isMin ? '0.4' : '1';
});
var YearView_SelectedSpan = /*#__PURE__*/styled_components_browser_esm(elements_Span).withConfig({
  displayName: "YearView__SelectedSpan",
  componentId: "sc-13uw4f7-1"
})(["background-color:", ";color:", ";margin:5px 15px;"], function (props) {
  return props.primaryColor;
}, function (props) {
  return props.isMax || props.isMin ? props.primaryTextColor : props.secondaryTextColor;
});

var getYears = function getYears(year, main, end, start) {
  var startYear = year;
  var endYear = year + 15;
  var years = [];

  for (var i = startYear; i <= endYear; i++) {
    years.push({
      y: i,
      isMax: end ? main.year(i).isAfter(end) : false,
      isMin: start ? main.year(i).isBefore(start) : false
    });
  }

  return years;
};

var YearView = function YearView(props) {
  var date = props.date,
      format = props.format,
      onYearChange = props.onYearChange,
      yearBlock = props.yearBlock,
      maxDate = props.maxDate,
      minDate = props.minDate,
      primaryColor = props.primaryColor,
      secondaryColor = props.secondaryColor,
      primaryTextColor = props.primaryTextColor,
      secondaryTextColor = props.secondaryTextColor;

  var _date = dayjs_min_default()(date || dayjs_min_default()().format(format || 'DD-MM-YYYY'), format || 'DD-MM-YYYY');

  var _minDate = dayjs_min_default()(minDate, format || 'DD-MM-YYYY');

  var _maxDate = dayjs_min_default()(maxDate, format || 'DD-MM-YYYY');

  var defaultDate = _date.isBetween(minDate ? _minDate.clone().subtract(1, 'day') : _date.clone().subtract(1, 'day'), maxDate ? _maxDate.clone().add(1, 'day') : _date.clone().add(1, 'day')) ? _date : maxDate && _maxDate.isSameOrAfter(_date) ? _date : minDate && _minDate.isSameOrBefore(_date) ? _minDate : maxDate ? _maxDate.clone().subtract(1, 'day') : minDate ? _minDate.clone().add(1, 'day') : _date;
  var mainDate = date ? dayjs_min_default()(date, format || 'DD-MM-YYYY') : defaultDate;
  var endDate = maxDate ? dayjs_min_default()(maxDate, format || 'DD-MM-YYYY') : null;
  var startDate = minDate ? dayjs_min_default()(minDate, format || 'DD-MM-YYYY') : null;
  var currentYear = mainDate.get('year');
  var years = getYears(yearBlock, mainDate, endDate, startDate);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_Wrapper, null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_Header, null, years.map(function (year, k) {
    return currentYear === year.y ? /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(YearView_SelectedSpan, {
      isMax: year.isMax,
      isMin: year.isMin,
      key: k,
      onClick: function onClick() {
        return !year.isMax && !year.isMin && onYearChange(year.y);
      },
      primaryColor: primaryColor,
      primaryTextColor: primaryTextColor,
      secondaryTextColor: secondaryTextColor
    }, year.y) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(YearView_YSpan, {
      isMax: year.isMax,
      isMin: year.isMin,
      key: k,
      onClick: function onClick() {
        return !year.isMax && !year.isMin && onYearChange(year.y);
      },
      primaryTextColor: primaryTextColor,
      secondaryColor: secondaryColor,
      secondaryTextColor: secondaryTextColor
    }, year.y);
  })));
};

YearView.propTypes = {
  date: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  format: (prop_types_default()).string,
  maxDate: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  minDate: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  onYearChange: (prop_types_default()).func,
  primaryColor: (prop_types_default()).string,
  primaryTextColor: (prop_types_default()).string,
  secondaryColor: (prop_types_default()).string,
  secondaryTextColor: (prop_types_default()).string,
  yearBlock: (prop_types_default()).number
};
/* harmony default export */ const elements_YearView = (YearView);
;// CONCATENATED MODULE: ./lib/elements/CalendarBody.js







var CalendarBody = function CalendarBody(props) {
  var viewFor = props.viewFor,
      date = props.date,
      format = props.format,
      onChange = props.onChange,
      yearBlock = props.yearBlock,
      maxDate = props.maxDate,
      minDate = props.minDate,
      primaryColor = props.primaryColor,
      secondaryColor = props.secondaryColor,
      primaryTextColor = props.primaryTextColor,
      secondaryTextColor = props.secondaryTextColor;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_Wrapper, {
    secondaryColor: secondaryColor
  }, viewFor === 'date' && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_DateView, {
    date: date,
    format: format,
    maxDate: maxDate,
    minDate: minDate,
    onDateChange: function onDateChange(value) {
      return onChange(value, 'date');
    },
    primaryColor: primaryColor,
    primaryTextColor: primaryTextColor,
    secondaryColor: secondaryColor,
    secondaryTextColor: secondaryTextColor
  }), viewFor === 'month' && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_MonthView, {
    date: date,
    format: format,
    maxDate: maxDate,
    minDate: minDate,
    onMonthChange: function onMonthChange(value) {
      return onChange(value, 'month');
    },
    primaryColor: primaryColor,
    primaryTextColor: primaryTextColor,
    secondaryColor: secondaryColor,
    secondaryTextColor: secondaryTextColor
  }), viewFor === 'year' && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_YearView, {
    date: date,
    format: format,
    maxDate: maxDate,
    minDate: minDate,
    onYearChange: function onYearChange(value) {
      return onChange(value, 'year');
    },
    primaryColor: primaryColor,
    primaryTextColor: primaryTextColor,
    secondaryColor: secondaryColor,
    secondaryTextColor: secondaryTextColor,
    yearBlock: yearBlock
  }));
};

CalendarBody.propTypes = {
  date: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  format: (prop_types_default()).string,
  maxDate: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  minDate: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  onChange: (prop_types_default()).func,
  primaryColor: (prop_types_default()).string,
  primaryTextColor: (prop_types_default()).string,
  secondaryColor: (prop_types_default()).string,
  secondaryTextColor: (prop_types_default()).string,
  viewFor: (prop_types_default()).string,
  yearBlock: (prop_types_default()).number
};
/* harmony default export */ const elements_CalendarBody = (CalendarBody);
;// CONCATENATED MODULE: ./lib/components/ModernDatepicker.js
function ModernDatepicker_typeof(obj) { "@babel/helpers - typeof"; return ModernDatepicker_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ModernDatepicker_typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (ModernDatepicker_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

















dayjs_min_default().extend((customParseFormat_default()));
dayjs_min_default().extend((isBetween_default()));
dayjs_min_default().extend((isSameOrAfter_default()));
dayjs_min_default().extend((isSameOrBefore_default()));

var ModernDatepicker = /*#__PURE__*/function (_Component) {
  _inherits(ModernDatepicker, _Component);

  var _super = _createSuper(ModernDatepicker);

  function ModernDatepicker(props) {
    var _this;

    _classCallCheck(this, ModernDatepicker);

    _this = _super.call(this, props);
    _this.isInstanceOfDate = props.date && Object.prototype.toString.call(props.date) === '[object Date]' && props.date instanceof Date && typeof props.date.getMonth === 'function';
    _this.isMaxInstanceOfDate = props.maxDate && Object.prototype.toString.call(props.maxDate) === '[object Date]' && props.maxDate instanceof Date && typeof props.maxDate.getMonth === 'function';
    _this.isMinInstanceOfDate = props.minDate && Object.prototype.toString.call(props.minDate) === '[object Date]' && props.minDate instanceof Date && typeof props.minDate.getMonth === 'function';
    _this.state = {
      showContainer: false,
      setViewFor: 'date',
      textDate: '',
      dateToEdit: props.date ? _this.isInstanceOfDate ? dayjs_min_default()(props.date).format(props.format || 'DD-MM-YYYY') : dayjs_min_default()(props.date, props.format || 'DD-MM-YYYY').format(props.format || 'DD-MM-YYYY') : '',
      isValid: props.date ? _this.isInstanceOfDate ? dayjs_min_default()(props.date).isValid() : dayjs_min_default()(props.date, props.format || 'DD-MM-YYYY').isValid() : true,
      isMaxValid: props.maxDate ? _this.isMaxInstanceOfDate ? dayjs_min_default()(props.maxDate).isValid() : dayjs_min_default()(props.maxDate, props.format || 'DD-MM-YYYY').isValid() : true,
      isMinValid: props.minDate ? _this.isMinInstanceOfDate ? dayjs_min_default()(props.minDate).isValid() : dayjs_min_default()(props.minDate, props.format || 'DD-MM-YYYY').isValid() : true
    };
    _this.state.yearBlock = dayjs_min_default()(_this.state.dateToEdit || dayjs_min_default()().format(props.format || 'DD-MM-YYYY'), props.format || 'DD-MM-YYYY').get('year') - 8;
    _this.handleDateChange = _this.handleDateChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ModernDatepicker, [{
    key: "checkDateInstance",
    value: function checkDateInstance() {
      var isInstanceOfDate = this.props.date && Object.prototype.toString.call(this.props.date) === '[object Date]' && this.props.date instanceof Date && typeof this.props.date.getMonth === 'function',
          isMaxInstanceOfDate = this.props.maxDate && Object.prototype.toString.call(this.props.maxDate) === '[object Date]' && this.props.maxDate instanceof Date && typeof this.props.maxDate.getMonth === 'function',
          isMinInstanceOfDate = this.props.minDate && Object.prototype.toString.call(this.props.minDate) === '[object Date]' && this.props.minDate instanceof Date && typeof this.props.minDate.getMonth === 'function';
      return [isInstanceOfDate, isMaxInstanceOfDate, isMinInstanceOfDate];
    }
  }, {
    key: "handleDateChange",
    value: function handleDateChange(value, unit) {
      var _this2 = this;

      var _this$props = this.props,
          format = _this$props.format,
          onChange = _this$props.onChange,
          maxDate = _this$props.maxDate,
          minDate = _this$props.minDate;
      var yearBlock = this.state.yearBlock;

      var _this$checkDateInstan = this.checkDateInstance(),
          _this$checkDateInstan2 = _slicedToArray(_this$checkDateInstan, 3),
          isMaxInstanceOfDate = _this$checkDateInstan2[1],
          isMinInstanceOfDate = _this$checkDateInstan2[2];

      var _date = dayjs_min_default()(this.state.dateToEdit || dayjs_min_default()().format(format || 'DD-MM-YYYY'), format || 'DD-MM-YYYY');

      var _minDate = isMinInstanceOfDate ? dayjs_min_default()(minDate) : dayjs_min_default()(minDate, format || 'DD-MM-YYYY');

      var _maxDate = isMaxInstanceOfDate ? dayjs_min_default()(maxDate) : dayjs_min_default()(maxDate, format || 'DD-MM-YYYY');

      var defaultDate = _date.isBetween(minDate ? _minDate.clone().subtract(1, 'day') : _date.clone().subtract(1, 'day'), maxDate ? _maxDate.clone().add(1, 'day') : _date.clone().add(1, 'day')) ? _date : maxDate && _maxDate.isSameOrAfter(_date) ? _date : minDate && _minDate.isSameOrBefore(_date) ? _minDate : maxDate ? _maxDate.clone().subtract(1, 'day') : minDate ? _minDate.clone().add(1, 'day') : _date;
      var date = dayjs_min_default()(this.state.dateToEdit || defaultDate.format(format || 'DD-MM-YYYY'), format || 'DD-MM-YYYY').set(unit, value);
      var year = date.get('year');
      var newYearBlock = this.getNewYearBlock(yearBlock, year);
      var dateToEdit = date.format(format || 'DD-MM-YYYY');
      this.setState({
        dateToEdit: dateToEdit,
        textDate: dateToEdit,
        yearBlock: newYearBlock
      }, function () {
        onChange(dateToEdit);

        if (unit === 'date') {
          _this2.toggleCalendar(false);
        }
      });
    }
  }, {
    key: "addDate",
    value: function addDate(value, unit) {
      var _this$props2 = this.props,
          format = _this$props2.format,
          onChange = _this$props2.onChange,
          maxDate = _this$props2.maxDate,
          minDate = _this$props2.minDate;
      var _this$state = this.state,
          yearBlock = _this$state.yearBlock,
          dateToEdit = _this$state.dateToEdit;
      var firstDateToBeSet = false,
          lastDateToBeSet = false;

      var _this$checkDateInstan3 = this.checkDateInstance(),
          _this$checkDateInstan4 = _slicedToArray(_this$checkDateInstan3, 3),
          isMaxInstanceOfDate = _this$checkDateInstan4[1],
          isMinInstanceOfDate = _this$checkDateInstan4[2];

      var _date = dayjs_min_default()(this.state.dateToEdit || dayjs_min_default()().format(format || 'DD-MM-YYYY'), format || 'DD-MM-YYYY');

      var _minDate = isMinInstanceOfDate ? dayjs_min_default()(minDate) : dayjs_min_default()(minDate, format || 'DD-MM-YYYY');

      var _maxDate = isMaxInstanceOfDate ? dayjs_min_default()(maxDate) : dayjs_min_default()(maxDate, format || 'DD-MM-YYYY');

      var defaultDate = _date.isBetween(minDate ? _minDate.clone().subtract(1, 'day') : _date.clone().subtract(1, 'day'), maxDate ? _maxDate.clone().add(1, 'day') : _date.clone().add(1, 'day')) ? _date : maxDate && _maxDate.isSameOrAfter(_date) ? _date : minDate && _minDate.isSameOrBefore(_date) ? _minDate : maxDate ? _maxDate.clone().subtract(1, 'day') : minDate ? _minDate.clone().add(1, 'day') : _date;
      var date = dayjs_min_default()(dateToEdit || defaultDate, format || 'DD-MM-YYYY').clone().add(value, unit);
      var endDate = maxDate ? isMaxInstanceOfDate ? dayjs_min_default()(maxDate) : dayjs_min_default()(maxDate, format || 'DD-MM-YYYY') : null;
      var startDate = minDate ? isMinInstanceOfDate ? dayjs_min_default()(minDate) : dayjs_min_default()(minDate, format || 'DD-MM-YYYY') : null;

      if (maxDate && date.isAfter(endDate) || minDate && date.isBefore(startDate)) {
        if (maxDate && date.isAfter(endDate) && _maxDate.get('year') === date.get('year') && _maxDate.get('month') === date.get('month')) {
          firstDateToBeSet = true;
        } else if (minDate && date.isBefore(startDate) && _minDate.get('year') === date.get('year') && _minDate.get('month') === date.get('month')) {
          lastDateToBeSet = true;
        } else {
          return;
        }
      }

      var year = date.get('year');
      var newYearBlock = this.getNewYearBlock(yearBlock, year);
      var newDateToEdit = date.format(format || 'DD-MM-YYYY');

      if (firstDateToBeSet) {
        newDateToEdit = date.startOf('month').format(format || 'DD-MM-YYYY');
      } else if (lastDateToBeSet) {
        newDateToEdit = date.endOf('month').format(format || 'DD-MM-YYYY');
      } else {
        newDateToEdit = date.format(format || 'DD-MM-YYYY');
      }

      this.setState({
        dateToEdit: newDateToEdit,
        textDate: newDateToEdit,
        yearBlock: newYearBlock
      });
      onChange(newDateToEdit);
    }
  }, {
    key: "subDate",
    value: function subDate(value, unit) {
      var _this$props3 = this.props,
          format = _this$props3.format,
          onChange = _this$props3.onChange,
          maxDate = _this$props3.maxDate,
          minDate = _this$props3.minDate;
      var _this$state2 = this.state,
          yearBlock = _this$state2.yearBlock,
          dateToEdit = _this$state2.dateToEdit;
      var firstDateToBeSet = false,
          lastDateToBeSet = false;

      var _this$checkDateInstan5 = this.checkDateInstance(),
          _this$checkDateInstan6 = _slicedToArray(_this$checkDateInstan5, 3),
          isMaxInstanceOfDate = _this$checkDateInstan6[1],
          isMinInstanceOfDate = _this$checkDateInstan6[2];

      var _date = dayjs_min_default()(this.state.dateToEdit || dayjs_min_default()().format(format || 'DD-MM-YYYY'), format || 'DD-MM-YYYY');

      var _minDate = isMinInstanceOfDate ? dayjs_min_default()(minDate) : dayjs_min_default()(minDate, format || 'DD-MM-YYYY');

      var _maxDate = isMaxInstanceOfDate ? dayjs_min_default()(maxDate) : dayjs_min_default()(maxDate, format || 'DD-MM-YYYY');

      var defaultDate = _date.isBetween(minDate ? _minDate.clone().subtract(1, 'day') : _date.clone().subtract(1, 'day'), maxDate ? _maxDate.clone().add(1, 'day') : _date.clone().add(1, 'day')) ? _date : maxDate && _maxDate.isSameOrAfter(_date) ? _date : minDate && _minDate.isSameOrBefore(_date) ? _minDate : maxDate ? _maxDate.clone().subtract(1, 'day') : minDate ? _minDate.clone().add(1, 'day') : _date;
      var date = dayjs_min_default()(dateToEdit || defaultDate, format || 'DD-MM-YYYY').clone().subtract(value, unit);
      var endDate = maxDate ? isMaxInstanceOfDate ? dayjs_min_default()(maxDate) : dayjs_min_default()(maxDate, format || 'DD-MM-YYYY') : null;
      var startDate = minDate ? isMinInstanceOfDate ? dayjs_min_default()(minDate) : dayjs_min_default()(minDate, format || 'DD-MM-YYYY') : null;

      if (maxDate && date.isAfter(endDate) || minDate && date.isBefore(startDate)) {
        if (maxDate && date.isAfter(endDate) && _maxDate.get('year') === date.get('year') && _maxDate.get('month') === date.get('month')) {
          firstDateToBeSet = true;
        } else if (minDate && date.isBefore(startDate) && _minDate.get('year') === date.get('year') && _minDate.get('month') === date.get('month')) {
          lastDateToBeSet = true;
        } else {
          return;
        }
      }

      var year = date.get('year');
      var newYearBlock = this.getNewYearBlock(yearBlock, year);
      var newDateToEdit = date.format(format || 'DD-MM-YYYY');

      if (firstDateToBeSet) {
        newDateToEdit = date.startOf('month').format(format || 'DD-MM-YYYY');
      } else if (lastDateToBeSet) {
        newDateToEdit = date.endOf('month').format(format || 'DD-MM-YYYY');
      } else {
        newDateToEdit = date.format(format || 'DD-MM-YYYY');
      }

      this.setState({
        dateToEdit: newDateToEdit,
        textDate: newDateToEdit,
        yearBlock: newYearBlock
      });
      onChange(newDateToEdit);
    }
  }, {
    key: "getNewYearBlock",
    value: function getNewYearBlock(yearBlock, value) {
      var newYearBlock;
      var year = value;

      if (year < yearBlock) {
        newYearBlock = year - 15;
      } else if (year > yearBlock + 15) {
        newYearBlock = year;
      } else {
        newYearBlock = yearBlock;
      }

      return newYearBlock;
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var _this3 = this;

      var currentTarget = e.currentTarget;
      setTimeout(function () {
        if (!currentTarget.contains(document.activeElement)) {
          _this3.toggleCalendar(false);
        }
      }, 0);
    }
  }, {
    key: "toggleCalendar",
    value: function toggleCalendar(bool, e) {
      var _this$props4 = this.props,
          date = _this$props4.date,
          format = _this$props4.format,
          onFocus = _this$props4.onFocus,
          onBlur = _this$props4.onBlur;

      if (bool && onFocus) {
        onFocus(e);
      } else if (!bool && onBlur) {
        onBlur();
      }

      var _this$checkDateInstan7 = this.checkDateInstance(),
          _this$checkDateInstan8 = _slicedToArray(_this$checkDateInstan7, 1),
          isInstanceOfDate = _this$checkDateInstan8[0];

      var dateToEdit = bool ? date ? isInstanceOfDate ? dayjs_min_default()(date).format(format || 'DD-MM-YYYY') : dayjs_min_default()(date, format || 'DD-MM-YYYY').format(format || 'DD-MM-YYYY') : '' : this.state.dateToEdit;
      this.setState({
        showContainer: bool,
        setViewFor: bool ? 'date' : this.state.setViewFor,
        dateToEdit: dateToEdit,
        textDate: dateToEdit,
        isValid: date ? isInstanceOfDate ? dayjs_min_default()(date).isValid() : dayjs_min_default()(date, format || 'DD-MM-YYYY').isValid() : this.state.isValid
      });
    }
  }, {
    key: "openViewFor",
    value: function openViewFor(setViewFor) {
      this.setState({
        setViewFor: setViewFor
      });
    }
  }, {
    key: "onDateEnter",
    value: function onDateEnter(e) {
      e.preventDefault();
      var _this$props5 = this.props,
          format = _this$props5.format,
          onChange = _this$props5.onChange,
          maxDate = _this$props5.maxDate,
          minDate = _this$props5.minDate;
      var yearBlock = this.state.yearBlock;
      var textDate = e.target.value;

      var _this$checkDateInstan9 = this.checkDateInstance(),
          _this$checkDateInstan10 = _slicedToArray(_this$checkDateInstan9, 3),
          isMaxInstanceOfDate = _this$checkDateInstan10[1],
          isMinInstanceOfDate = _this$checkDateInstan10[2];

      var _date = dayjs_min_default()(textDate, format || 'DD-MM-YYYY');

      var _minDate = isMinInstanceOfDate ? dayjs_min_default()(minDate) : dayjs_min_default()(minDate, format || 'DD-MM-YYYY');

      var _maxDate = isMaxInstanceOfDate ? dayjs_min_default()(maxDate) : dayjs_min_default()(maxDate, format || 'DD-MM-YYYY');

      if (_date.isValid() && _date.isBetween(minDate ? _minDate.clone().subtract(1, 'day') : _date.clone().subtract(1, 'day'), maxDate ? _maxDate.clone().add(1, 'day') : _date.clone().add(1, 'day'))) {
        var date = dayjs_min_default()(textDate, format || 'DD-MM-YYYY').format(format || 'DD-MM-YYYY');
        var year = dayjs_min_default()(textDate, format || 'DD-MM-YYYY').get('year');
        var newYearBlock = this.getNewYearBlock(yearBlock, year);
        this.setState({
          dateToEdit: date,
          yearBlock: newYearBlock
        }, function () {
          onChange(date);
        });
      }

      this.setState({
        textDate: textDate
      });
    }
  }, {
    key: "checkAndReturnDate",
    value: function checkAndReturnDate() {
      var _this$state3 = this.state,
          isValid = _this$state3.isValid,
          isMaxValid = _this$state3.isMaxValid,
          isMinValid = _this$state3.isMinValid;
      var _this$props6 = this.props,
          format = _this$props6.format,
          date = _this$props6.date,
          maxDate = _this$props6.maxDate,
          minDate = _this$props6.minDate;

      var _this$checkDateInstan11 = this.checkDateInstance(),
          _this$checkDateInstan12 = _slicedToArray(_this$checkDateInstan11, 3),
          isInstanceOfDate = _this$checkDateInstan12[0],
          isMaxInstanceOfDate = _this$checkDateInstan12[1],
          isMinInstanceOfDate = _this$checkDateInstan12[2];

      var currentDate = date ? isInstanceOfDate ? dayjs_min_default()(date) : dayjs_min_default()(date, format || 'DD-MM-YYYY') : '';
      var startDate = minDate ? isMinInstanceOfDate ? dayjs_min_default()(minDate) : dayjs_min_default()(minDate, format || 'DD-MM-YYYY') : null;
      var endDate = maxDate ? isMaxInstanceOfDate ? dayjs_min_default()(maxDate) : dayjs_min_default()(maxDate, format || 'DD-MM-YYYY') : null;

      if (!isValid || !isMaxValid || !isMinValid) {
        return 'Invalid date';
      } else if (startDate && endDate && !endDate.startOf('day').isAfter(startDate)) {
        return 'Invalid max/min date';
      } else if (currentDate && startDate && !startDate.startOf('day').isSameOrBefore(currentDate)) {
        return 'Invalid min date';
      } else if (currentDate && endDate && !endDate.startOf('day').isSameOrAfter(currentDate)) {
        return 'Invalid max date';
      } else if (date) {
        return isInstanceOfDate ? dayjs_min_default()(date).format(format || 'DD-MM-YYYY') : dayjs_min_default()(date, format || 'DD-MM-YYYY').format(format || 'DD-MM-YYYY');
      } else {
        return '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state4 = this.state,
          showContainer = _this$state4.showContainer,
          setViewFor = _this$state4.setViewFor,
          dateToEdit = _this$state4.dateToEdit,
          isValid = _this$state4.isValid,
          yearBlock = _this$state4.yearBlock,
          textDate = _this$state4.textDate;
      console.log('TCL ~ ModernDatepicker ~ setViewFor', setViewFor);
      var _this$props7 = this.props,
          allowEdit = _this$props7.allowEdit,
          format = _this$props7.format,
          placeholder = _this$props7.placeholder,
          showBorder = _this$props7.showBorder,
          className = _this$props7.className,
          id = _this$props7.id,
          icon = _this$props7.icon,
          iconClass = _this$props7.iconClass,
          maxDate = _this$props7.maxDate,
          minDate = _this$props7.minDate,
          label = _this$props7.label,
          labelClass = _this$props7.labelClass,
          lang = _this$props7.lang,
          _this$props7$primaryC = _this$props7.primaryColor,
          primaryColor = _this$props7$primaryC === void 0 ? '#00b9f5' : _this$props7$primaryC,
          _this$props7$secondar = _this$props7.secondaryColor,
          secondaryColor = _this$props7$secondar === void 0 ? 'white' : _this$props7$secondar,
          _this$props7$primaryT = _this$props7.primaryTextColor,
          primaryTextColor = _this$props7$primaryT === void 0 ? 'black' : _this$props7$primaryT,
          _this$props7$secondar2 = _this$props7.secondaryTextColor,
          secondaryTextColor = _this$props7$secondar2 === void 0 ? 'white' : _this$props7$secondar2;

      var _this$checkDateInstan13 = this.checkDateInstance(),
          _this$checkDateInstan14 = _slicedToArray(_this$checkDateInstan13, 3),
          isMaxInstanceOfDate = _this$checkDateInstan14[1],
          isMinInstanceOfDate = _this$checkDateInstan14[2];

      var _minDate = minDate ? isMinInstanceOfDate ? dayjs_min_default()(minDate).format(format || 'DD-MM-YYYY') : dayjs_min_default()(minDate, format || 'DD-MM-YYYY').format(format || 'DD-MM-YYYY') : null;

      var _maxDate = maxDate ? isMaxInstanceOfDate ? dayjs_min_default()(maxDate).format(format || 'DD-MM-YYYY') : dayjs_min_default()(maxDate, format || 'DD-MM-YYYY').format(format || 'DD-MM-YYYY') : null;

      var value = this.checkAndReturnDate();
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_Container, {
        onBlur: function onBlur(e) {
          return _this4.onBlur(e);
        }
      }, label && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_Label, {
        className: labelClass,
        htmlFor: id
      }, label), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_Input, {
        className: className,
        id: id,
        onChange: function onChange(e) {
          return allowEdit && _this4.onDateEnter(e);
        },
        onFocus: function onFocus(e) {
          return _this4.toggleCalendar(true, e);
        },
        placeholder: placeholder,
        showBorder: showBorder,
        type: "text",
        value: allowEdit ? isValid ? textDate : value : value
      }), icon && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_Icon, {
        className: iconClass,
        icon: icon,
        onClick: function onClick() {
          return _this4.toggleCalendar(true);
        }
      }), showContainer && isValid && (this.checkAndReturnDate() === '' || dayjs_min_default()(this.checkAndReturnDate(), format || 'DD-MM-YYYY').isValid()) && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_CalendarContainer, {
        secondaryColor: secondaryColor
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_CalendarHeading, {
        secondaryColor: secondaryColor
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_SingleArrow, {
        left: true,
        onClick: function onClick() {
          if (setViewFor === 'year') {
            _this4.subDate(1, 'year');
          } else {
            _this4.subDate(1, 'month');
          }
        },
        primaryTextColor: primaryTextColor,
        secondaryColor: secondaryColor
      }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_DateEditor, {
        date: dateToEdit,
        format: format,
        lang: lang,
        maxDate: _maxDate,
        minDate: _minDate,
        onDateClick: function onDateClick() {
          return _this4.openViewFor('date');
        },
        onMonthClick: function onMonthClick() {
          return _this4.openViewFor('month');
        },
        onYearClick: function onYearClick() {
          return _this4.openViewFor('year');
        },
        primaryTextColor: primaryTextColor,
        secondaryColor: secondaryColor,
        viewFor: setViewFor
      }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_SingleArrow, {
        onClick: function onClick() {
          if (setViewFor === 'year') {
            _this4.addDate(1, 'year');
          } else {
            _this4.addDate(1, 'month');
          }
        },
        primaryTextColor: primaryTextColor,
        secondaryColor: secondaryColor
      })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createElement(elements_CalendarBody, {
        date: dateToEdit,
        format: format,
        maxDate: _maxDate,
        minDate: _minDate,
        onChange: function onChange(value, unit) {
          return _this4.handleDateChange(value, unit);
        },
        primaryColor: primaryColor,
        primaryTextColor: primaryTextColor,
        secondaryColor: secondaryColor,
        secondaryTextColor: secondaryTextColor,
        viewFor: setViewFor,
        yearBlock: yearBlock
      })));
    }
  }]);

  return ModernDatepicker;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_.Component);

ModernDatepicker.propTypes = {
  className: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  date: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  format: (prop_types_default()).string,
  iconClass: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  id: (prop_types_default()).string,
  label: (prop_types_default()).string,
  labelClass: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  lang: (prop_types_default()).string,
  maxDate: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  minDate: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]),
  onBlur: (prop_types_default()).func,
  onChange: (prop_types_default()).func,
  onFocus: (prop_types_default()).func,
  placeholder: (prop_types_default()).string,
  primaryColor: (prop_types_default()).string,
  primaryTextColor: (prop_types_default()).string,
  secondaryColor: (prop_types_default()).string,
  secondaryTextColor: (prop_types_default()).string,
  showBorder: (prop_types_default()).bool
};
/* harmony default export */ const components_ModernDatepicker = (ModernDatepicker);
;// CONCATENATED MODULE: ./lib/index.js

/* harmony default export */ const lib = (components_ModernDatepicker);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});