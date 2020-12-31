var Client;Client=(()=>{"use strict";var e={817:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"body{font-family:sans-serif;max-width:350px;text-align:center}.title{font-weight:500;text-align:center}h2{font-size:1.5em;font-weight:500}.travel-planner{max-width:100%;padding:15px;background:#467bdd;color:#fff;border-radius:.7rem}#create-plan{line-height:38px}label{display:flex;align-items:center;font-size:1.125rem;margin:10px}input{margin:10px auto;display:block;width:85%;height:2.375rem;padding:.375rem .75rem;color:#333;background-color:#fffefe;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;box-shadow:0 5px 25px rgba(0,0,0,.2)}#submit-btn{box-shadow:0 5px 25px rgba(0,0,0,.2);background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);background-color:#f9f9f9;border-radius:11px;border:1px solid #467bdd;display:inline-block;cursor:pointer;color:#666;font-family:Arial;font-size:19px;font-weight:bold;padding:6px 24px;text-decoration:none;margin:25px auto}#submit-btn:hover{background:#467bdd;color:#f9f9f9}.results{background-color:beige;padding:25px;border-radius:15px}#print-btn{box-shadow:0 5px 25px rgba(0,0,0,.2);background:#467bdd;border:1px solid #2e6da4;border-radius:4px;color:#fff;font-size:1.2em;margin:15px}#delete-btn{box-shadow:0 5px 25px rgba(0,0,0,.2);background-color:#e7404b;font-size:1.2em;color:#fff;border:1px solid #d12c37;border-radius:4px;margin:15px}.main-img{max-width:250px;text-align:center}",""]);const a=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],r=0;r<e.length;r++){var d=e[r],l=t.base?d[0]+t.base:d[0],c=n[l]||0,s="".concat(l," ").concat(c);n[l]=c+1;var u=i(s),f={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:s,updater:b(f,t),references:1}),o.push(s)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=n.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,s=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function b(e,t){var n,o,r;if(t.singleton){var a=m++;n=p||(p=l(t)),o=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0)}else n=l(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=i(n[o]);a[r].references--}for(var l=d(e,t),c=0;c<n.length;c++){var s=i(n[c]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=l}}}},389:(e,t,n)=>{async function o(e){e.preventDefault();let t=document.getElementById("loc-input").value;console.log("The place is ",t);let n=document.getElementById("start-date").value;console.log("The department date is ",n);let o=document.getElementById("return-date").value;console.log("The return date is ",o);const a=new Date,i=new Date(n),d=new Date(o),l=Math.abs(d-i),c=Math.ceil(l/864e5);console.log(c+" trip days");const s=Math.abs(i-a),u=Math.ceil(s/864e5);console.log(u+" days to depart"),fetch("http://localhost:3010/geoNames",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Orign":"*"},body:JSON.stringify({formPlace:t})}).then((async function(){const e=await fetch("http://localhost:3010/geoNames"),t=await e.json();console.log(`Returning the ${e} `),console.log(`Api json: ${t}`),Client.updateUI(t)})).then((e=>r(e)))}function r(e){document.getElementById("planner-results").style.display="flex";const t=document.getElementById("city"),n=document.getElementById("country");t.innerHTML=e.city,n.innerHTML=e.country,getElementById("departure").innerHTML=e.startDate,getElementById("days").innerHTML=e.toTripDays}n.r(t),n.d(t,{handleSubmit:()=>o,updateUI:()=>r});var a=n(379),i=n.n(a),d=n(817);i()(d.Z,{insert:"head",singleton:!1}),d.Z.locals}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(389)})();