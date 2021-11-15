var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function l(t,e,n,o){if(t){const r=u(t,e,n,o);return t[0](r)}}function u(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function a(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function f(t,e,n,o,r,s){if(r){const i=u(e,n,o,s);t.p(i,r)}}function d(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function p(t){return null==t?"":t}const $="undefined"!=typeof window;let m=$?()=>window.performance.now():()=>Date.now(),g=$?t=>requestAnimationFrame(t):t;const h=new Set;function y(t){h.forEach((e=>{e.c(t)||(h.delete(e),e.f())})),0!==h.size&&g(y)}function v(t){let e;return 0===h.size&&g(y),{promise:new Promise((n=>{h.add(e={c:t,f:n})})),abort(){h.delete(e)}}}function b(t,e){t.appendChild(e)}function x(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function _(t){const e=E("style");return function(t,e){b(t.head||t,e)}(x(t),e),e}function w(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function E(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function C(){return S(" ")}function R(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function M(t,e){t.value=null==e?"":e}function N(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}const T=new Set;let q,z=0;function D(t,e,n,o,r,s,i,c=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*s(t);u+=100*t+`%{${i(o,1-o)}}\n`}const a=u+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${c}`,d=x(t);T.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=_(t).sheet),$=d.__svelte_rules||(d.__svelte_rules={});$[f]||($[f]=!0,p.insertRule(`@keyframes ${f} ${a}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,z+=1,f}function L(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),z-=r,z||g((()=>{z||(T.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),T.clear())})))}function O(t){q=t}function V(){const t=function(){if(!q)throw new Error("Function called outside component initialization");return q}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=N(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}const I=[],P=[],U=[],F=[],H=Promise.resolve();let B=!1;function G(t){U.push(t)}let X=!1;const J=new Set;function K(){if(!X){X=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];O(e),Q(e.$$)}for(O(null),I.length=0;P.length;)P.pop()();for(let t=0;t<U.length;t+=1){const e=U[t];J.has(e)||(J.add(e),e())}U.length=0}while(I.length);for(;F.length;)F.pop()();B=!1,X=!1,J.clear()}}function Q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}let W;function Y(){return W||(W=Promise.resolve(),W.then((()=>{W=null}))),W}function Z(t,e,n){t.dispatchEvent(N(`${e?"intro":"outro"}${n}`))}const tt=new Set;let et;function nt(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function ot(t,e,n,o){if(t&&t.o){if(tt.has(t))return;tt.add(t),et.c.push((()=>{tt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const rt={duration:0};function st(t,e){ot(t,1,1,(()=>{e.delete(t.key)}))}function it(t){t&&t.c()}function ct(t,e,o,i){const{fragment:c,on_mount:l,on_destroy:u,after_update:a}=t.$$;c&&c.m(e,o),i||G((()=>{const e=l.map(n).filter(s);u?u.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(G)}function lt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){-1===t.$$.dirty[0]&&(I.push(t),B||(B=!0,H.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function at(e,n,s,i,c,l,u,a=[-1]){const f=q;O(e);const d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:n.target||f.$$.root};u&&u(d.root);let p=!1;if(d.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&ut(e,t)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(k)}else d.fragment&&d.fragment.c();n.intro&&nt(e.$$.fragment),ct(e,n.target,n.anchor,n.customElement),K()}O(f)}class ft{$destroy(){lt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var dt,pt=new Uint8Array(16);function $t(){if(!dt&&!(dt="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return dt(pt)}var mt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function gt(t){return"string"==typeof t&&mt.test(t)}for(var ht=[],yt=0;yt<256;++yt)ht.push((yt+256).toString(16).substr(1));function vt(t,e,n){var o=(t=t||{}).random||(t.rng||$t)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=o[r];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(ht[t[e+0]]+ht[t[e+1]]+ht[t[e+2]]+ht[t[e+3]]+"-"+ht[t[e+4]]+ht[t[e+5]]+"-"+ht[t[e+6]]+ht[t[e+7]]+"-"+ht[t[e+8]]+ht[t[e+9]]+"-"+ht[t[e+10]]+ht[t[e+11]]+ht[t[e+12]]+ht[t[e+13]]+ht[t[e+14]]+ht[t[e+15]]).toLowerCase();if(!gt(n))throw TypeError("Stringified UUID is invalid");return n}(o)}const bt=[];const xt=function(e,n=t){let o;const r=new Set;function s(t){if(i(e,t)&&(e=t,o)){const t=!bt.length;for(const t of r)t[1](),bt.push(t,e);if(t){for(let t=0;t<bt.length;t+=2)bt[t][0](bt[t+1]);bt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const l=[i,c];return r.add(l),1===r.size&&(o=n(s)||t),i(e),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}([{id:1,rating:10,text:"Amazing I'm absolutely in love with the product!"},{id:2,rating:9,text:"Great quality for a reasonable price. Love it!"},{id:3,rating:7,text:"I love the selection of products and quality, but delivery takes quite a long time"}]);function _t(t){let e,n;const o=t[1].default,r=l(o,t,t[0],null);return{c(){e=E("div"),r&&r.c(),A(e,"class","card svelte-1s1u6qb")},m(t,o){w(t,e,o),r&&r.m(e,null),n=!0},p(t,[e]){r&&r.p&&(!n||1&e)&&f(r,o,t,t[0],n?a(o,t[0],e,null):d(t[0]),null)},i(t){n||(nt(r,t),n=!0)},o(t){ot(r,t),n=!1},d(t){t&&k(e),r&&r.d(t)}}}function wt(t,e,n){let{$$slots:o={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,o]}class kt extends ft{constructor(t){super(),at(this,t,wt,_t,i,{})}}function Et(t){let e,n,o;const r=t[4].default,s=l(r,t,t[3],null);return{c(){e=E("button"),s&&s.c(),A(e,"type",t[1]),e.disabled=t[2],A(e,"class",n=p(t[0])+" svelte-uj1x2m")},m(t,n){w(t,e,n),s&&s.m(e,null),o=!0},p(t,[i]){s&&s.p&&(!o||8&i)&&f(s,r,t,t[3],o?a(r,t[3],i,null):d(t[3]),null),(!o||2&i)&&A(e,"type",t[1]),(!o||4&i)&&(e.disabled=t[2]),(!o||1&i&&n!==(n=p(t[0])+" svelte-uj1x2m"))&&A(e,"class",n)},i(t){o||(nt(s,t),o=!0)},o(t){ot(s,t),o=!1},d(t){t&&k(e),s&&s.d(t)}}}function St(t,e,n){let{$$slots:o={},$$scope:r}=e,{style:s="primary"}=e,{type:i="button"}=e,{disabled:c=!1}=e;return t.$$set=t=>{"style"in t&&n(0,s=t.style),"type"in t&&n(1,i=t.type),"disabled"in t&&n(2,c=t.disabled),"$$scope"in t&&n(3,r=t.$$scope)},[s,i,c,r,o]}class Ct extends ft{constructor(t){super(),at(this,t,St,Et,i,{style:0,type:1,disabled:2})}}function Rt(t,e,n){const o=t.slice();return o[4]=e[n],o}function At(t){let e,n,o,r,s,i,c,l,u,a,f,d,p=t[4]+"";return{c(){e=E("li"),n=E("input"),i=C(),c=E("label"),l=S(p),a=C(),A(n,"type","radio"),A(n,"id",o=`num${t[4].toString()}`),A(n,"name","rating"),n.value=r=t[4].toString(),n.checked=s=t[0]===t[4],A(n,"class","svelte-1ln87nt"),A(c,"for",u=`num${t[4].toString()}`),A(c,"class","svelte-1ln87nt"),A(e,"class","svelte-1ln87nt")},m(o,r){w(o,e,r),b(e,n),b(e,i),b(e,c),b(c,l),b(e,a),f||(d=R(n,"change",t[2]),f=!0)},p(t,e){1&e&&s!==(s=t[0]===t[4])&&(n.checked=s)},d(t){t&&k(e),f=!1,d()}}}function jt(e){let n,o=e[1],r=[];for(let t=0;t<o.length;t+=1)r[t]=At(Rt(e,o,t));return{c(){n=E("ul");for(let t=0;t<r.length;t+=1)r[t].c();A(n,"class","rating svelte-1ln87nt")},m(t,e){w(t,n,e);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(t,[e]){if(7&e){let s;for(o=t[1],s=0;s<o.length;s+=1){const i=Rt(t,o,s);r[s]?r[s].p(i,e):(r[s]=At(i),r[s].c(),r[s].m(n,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=o.length}},i:t,o:t,d(t){t&&k(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t)}}}function Mt(t,e,n){const o=[...Array(10).keys()].map((t=>t+1));let r=10;const s=V();return[r,o,t=>{n(0,r=t.currentTarget.value),s("rating-select",r)}]}class Nt extends ft{constructor(t){super(),at(this,t,Mt,jt,i,{})}}function Tt(t){let e;return{c(){e=S("Send")},m(t,n){w(t,e,n)},d(t){t&&k(e)}}}function qt(t){let e,n;return{c(){e=E("div"),n=S(t[2]),A(e,"class","message svelte-1lhaphf")},m(t,o){w(t,e,o),b(e,n)},p(t,e){4&e&&j(n,t[2])},d(t){t&&k(e)}}}function zt(t){let e,n,o,s,i,c,l,u,a,f,d,p,$;s=new Nt({}),s.$on("rating-select",t[3]),a=new Ct({props:{disabled:t[1],type:"submit",$$slots:{default:[Tt]},$$scope:{ctx:t}}});let m=t[2]&&qt(t);return{c(){e=E("header"),e.innerHTML='<h2 class="svelte-1lhaphf">How would you rate your service with us?</h2>',n=C(),o=E("form"),it(s.$$.fragment),i=C(),c=E("div"),l=E("input"),u=C(),it(a.$$.fragment),f=C(),m&&m.c(),A(e,"class","svelte-1lhaphf"),A(l,"type","text"),A(l,"placeholder","Tell us something that keeps you coming back"),A(l,"class","svelte-1lhaphf"),A(c,"class","input-group svelte-1lhaphf")},m(r,g){var h;w(r,e,g),w(r,n,g),w(r,o,g),ct(s,o,null),b(o,i),b(o,c),b(c,l),M(l,t[0]),b(c,u),ct(a,c,null),b(o,f),m&&m.m(o,null),d=!0,p||($=[R(l,"input",t[4]),R(l,"input",t[6]),R(o,"submit",(h=t[5],function(t){return t.preventDefault(),h.call(this,t)}))],p=!0)},p(t,e){1&e&&l.value!==t[0]&&M(l,t[0]);const n={};2&e&&(n.disabled=t[1]),256&e&&(n.$$scope={dirty:e,ctx:t}),a.$set(n),t[2]?m?m.p(t,e):(m=qt(t),m.c(),m.m(o,null)):m&&(m.d(1),m=null)},i(t){d||(nt(s.$$.fragment,t),nt(a.$$.fragment,t),d=!0)},o(t){ot(s.$$.fragment,t),ot(a.$$.fragment,t),d=!1},d(t){t&&k(e),t&&k(n),t&&k(o),lt(s),lt(a),m&&m.d(),p=!1,r($)}}}function Dt(t){let e,n;return e=new kt({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){it(e.$$.fragment)},m(t,o){ct(e,t,o),n=!0},p(t,[n]){const o={};263&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}function Lt(t,e,n){let o,r="",s=10,i=!0;return[r,i,o,t=>s=t.detail,()=>{r.trim().length<=10?(n(2,o="Text must be at least 10 characters"),n(1,i=!0)):(n(2,o=null),n(1,i=!1))},()=>{if(r.trim().length>10){const t={id:vt(),text:r,rating:+s};xt.update((e=>[t,...e])),s=10,n(0,r="")}},function(){r=this.value,n(0,r)}]}class Ot extends ft{constructor(t){super(),at(this,t,Lt,Dt,i,{})}}function Vt(t){const e=t-1;return e*e*e+1}function It(t,{delay:n=0,duration:o=400,easing:r=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*s}}function Pt(t,{delay:e=0,duration:n=400,easing:o=Vt,start:r=0,opacity:s=0}={}){const i=getComputedStyle(t),c=+i.opacity,l="none"===i.transform?"":i.transform,u=1-r,a=c*(1-s);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${l} scale(${1-u*e});\n\t\t\topacity: ${c-a*e}\n\t\t`}}function Ut(t){let e,n,o,r,s,i,c,l,u,a=t[0].rating+"",f=t[0].text+"";return{c(){e=E("div"),n=S(a),o=C(),r=E("button"),r.textContent="X",s=C(),i=E("p"),c=S(f),A(e,"class","num-display svelte-1uxvg34"),A(r,"class","close svelte-1uxvg34"),A(i,"class","text-display")},m(a,f){w(a,e,f),b(e,n),w(a,o,f),w(a,r,f),w(a,s,f),w(a,i,f),b(i,c),l||(u=R(r,"click",t[2]),l=!0)},p(t,e){1&e&&a!==(a=t[0].rating+"")&&j(n,a),1&e&&f!==(f=t[0].text+"")&&j(c,f)},d(t){t&&k(e),t&&k(o),t&&k(r),t&&k(s),t&&k(i),l=!1,u()}}}function Ft(t){let e,n;return e=new kt({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){it(e.$$.fragment)},m(t,o){ct(e,t,o),n=!0},p(t,[n]){const o={};9&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}function Ht(t,e,n){let{item:o}=e;const r=t=>{xt.update((e=>e.filter((e=>e.id!=t))))};return t.$$set=t=>{"item"in t&&n(0,o=t.item)},[o,r,()=>r(o.id)]}class Bt extends ft{constructor(t){super(),at(this,t,Ht,Ft,i,{item:0})}}function Gt(t,e,n){const o=t.slice();return o[1]=e[n],o}function Xt(n,o){let i,c,l,u,a,f;return c=new Bt({props:{item:o[1]}}),{key:n,first:null,c(){i=E("div"),it(c.$$.fragment),l=C(),this.first=i},m(t,e){w(t,i,e),ct(c,i,null),b(i,l),f=!0},p(t,e){o=t;const n={};1&e&&(n.item=o[1]),c.$set(n)},i(n){f||(nt(c.$$.fragment,n),G((()=>{a&&a.end(1),u=function(n,o,r){let i,c,l=o(n,r),u=!1,a=0;function f(){i&&L(n,i)}function d(){const{delay:o=0,duration:r=300,easing:s=e,tick:d=t,css:p}=l||rt;p&&(i=D(n,0,1,r,o,s,p,a++)),d(0,1);const $=m()+o,g=$+r;c&&c.abort(),u=!0,G((()=>Z(n,!0,"start"))),c=v((t=>{if(u){if(t>=g)return d(1,0),Z(n,!0,"end"),f(),u=!1;if(t>=$){const e=s((t-$)/r);d(e,1-e)}}return u}))}let p=!1;return{start(){p||(p=!0,L(n),s(l)?(l=l(),Y().then(d)):d())},invalidate(){p=!1},end(){u&&(f(),u=!1)}}}(i,Pt,{}),u.start()})),f=!0)},o(n){ot(c.$$.fragment,n),u&&u.invalidate(),a=function(n,o,i){let c,l=o(n,i),u=!0;const a=et;function f(){const{delay:o=0,duration:s=300,easing:i=e,tick:f=t,css:d}=l||rt;d&&(c=D(n,1,0,s,o,i,d));const p=m()+o,$=p+s;G((()=>Z(n,!1,"start"))),v((t=>{if(u){if(t>=$)return f(0,1),Z(n,!1,"end"),--a.r||r(a.c),!1;if(t>=p){const e=i((t-p)/s);f(1-e,e)}}return u}))}return a.r+=1,s(l)?Y().then((()=>{l=l(),f()})):f(),{end(t){t&&l.tick&&l.tick(1,0),u&&(c&&L(n,c),u=!1)}}}(i,It,{duration:500}),f=!1},d(t){t&&k(i),lt(c),t&&a&&a.end()}}}function Jt(t){let e,n,o=[],s=new Map,i=t[0];const c=t=>t[1].id;for(let e=0;e<i.length;e+=1){let n=Gt(t,i,e),r=c(n);s.set(r,o[e]=Xt(r,n))}return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=S("")},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);w(t,e,r),n=!0},p(t,[n]){1&n&&(i=t[0],et={r:0,c:[],p:et},o=function(t,e,n,o,r,s,i,c,l,u,a,f){let d=t.length,p=s.length,$=d;const m={};for(;$--;)m[t[$].key]=$;const g=[],h=new Map,y=new Map;for($=p;$--;){const t=f(r,s,$),c=n(t);let l=i.get(c);l?o&&l.p(t,e):(l=u(c,t),l.c()),h.set(c,g[$]=l),c in m&&y.set(c,Math.abs($-m[c]))}const v=new Set,b=new Set;function x(t){nt(t,1),t.m(c,a),i.set(t.key,t),a=t.first,p--}for(;d&&p;){const e=g[p-1],n=t[d-1],o=e.key,r=n.key;e===n?(a=e.first,d--,p--):h.has(r)?!i.has(o)||v.has(o)?x(e):b.has(r)?d--:y.get(o)>y.get(r)?(b.add(o),x(e)):(v.add(r),d--):(l(n,i),d--)}for(;d--;){const e=t[d];h.has(e.key)||l(e,i)}for(;p;)x(g[p-1]);return g}(o,n,c,1,t,i,s,e.parentNode,st,Xt,e,Gt),et.r||r(et.c),et=et.p)},i(t){if(!n){for(let t=0;t<i.length;t+=1)nt(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)ot(o[t]);n=!1},d(t){for(let e=0;e<o.length;e+=1)o[e].d(t);t&&k(e)}}}function Kt(t,e,n){let o;return c(t,xt,(t=>n(0,o=t))),[o]}class Qt extends ft{constructor(t){super(),at(this,t,Kt,Jt,i,{})}}function Wt(e){let n,o,r,s,i,c,l,u,a=(e[1]>0?e[0]:"Not Available")+"";return{c(){n=E("div"),o=E("h4"),r=S(e[1]),s=S(" Reviews"),i=C(),c=E("h4"),l=S("Ratings Average: "),u=S(a),A(n,"class","feedback-stats svelte-e1d7fg")},m(t,e){w(t,n,e),b(n,o),b(o,r),b(o,s),b(n,i),b(n,c),b(c,l),b(c,u)},p(t,[e]){2&e&&j(r,t[1]),3&e&&a!==(a=(t[1]>0?t[0]:"Not Available")+"")&&j(u,a)},i:t,o:t,d(t){t&&k(n)}}}function Yt(t,e,n){let o,r,s;return c(t,xt,(t=>n(2,s=t))),t.$$.update=()=>{4&t.$$.dirty&&n(1,o=s.length),4&t.$$.dirty&&n(0,r=Math.round(s.reduce(((t,{rating:e})=>t+e),0)/s.length*100)/100)},[r,o,s]}class Zt extends ft{constructor(t){super(),at(this,t,Yt,Wt,i,{})}}function te(e){let n,o,r,s,i,c,l;return o=new Ot({}),s=new Zt({}),c=new Qt({}),{c(){n=E("main"),it(o.$$.fragment),r=C(),it(s.$$.fragment),i=C(),it(c.$$.fragment),A(n,"class","container")},m(t,e){w(t,n,e),ct(o,n,null),b(n,r),ct(s,n,null),b(n,i),ct(c,n,null),l=!0},p:t,i(t){l||(nt(o.$$.fragment,t),nt(s.$$.fragment,t),nt(c.$$.fragment,t),l=!0)},o(t){ot(o.$$.fragment,t),ot(s.$$.fragment,t),ot(c.$$.fragment,t),l=!1},d(t){t&&k(n),lt(o),lt(s),lt(c)}}}return new class extends ft{constructor(t){super(),at(this,t,null,te,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
