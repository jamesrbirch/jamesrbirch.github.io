import{S as Ye,i as We,s as Xe,a as Ze,e as U,c as Qe,b as F,g as Z,t as D,d as Q,f as V,h as C,j as xe,o as Ee,k as et,l as tt,m as nt,n as be,p as H,q as rt,r as at,u as ot,v as J,w as G,x as ae,y as K,z as M,A as Ce}from"./chunks/index-dc704e0c.js";import{g as Fe,f as Je,s as X,a as ke,b as st,i as it}from"./chunks/singletons-8a2c3409.js";import{_ as Y}from"./chunks/preload-helper-aa6bc0ce.js";function lt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ct(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(r,e){const n=new URL(r);for(const o of ft){let s=n[o];Object.defineProperty(n,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return n[Symbol.for("nodejs.util.inspect.custom")]=(o,s,l)=>l(r,s),pt(n),n}function pt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const pe=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ue.delete(o)}return pe(r,e)};const ue=new Map;function ht(r,e,n){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(s+=`[data-hash="${dt(n.body)}"]`);const l=document.querySelector(s);if(l!=null&&l.textContent){const{body:t,...c}=JSON.parse(l.textContent),f=l.getAttribute("data-ttl");return f&&ue.set(e,{body:t,init:c,ttl:1e3*Number(f)}),Promise.resolve(new Response(t,c))}return pe(r,n)}function mt(r,e){const n=ue.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);ue.delete(r)}return pe(r,e)}const _t=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function gt(r){const e=[],n=[];let o=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(wt).map((l,t,c)=>{const f=decodeURIComponent(l),d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(d)return e.push(d[1]),n.push(d[2]),"(?:/(.*))?";const g=t===c.length-1;return f&&"/"+f.split(/\[(.+?)\]/).map((y,T)=>{if(T%2){const E=_t.exec(y);if(!E)throw new Error(`Invalid param: ${y}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,B,z,q]=E;return e.push(z),n.push(q),B?"(.*?)":"([^/]+?)"}return g&&y.includes(".")&&(o=!1),y.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:n}}function wt(r){return!/^\([^)]+\)$/.test(r)}function yt(r,e,n,o){const s={};for(let l=0;l<e.length;l+=1){const t=e[l],c=n[l],f=r[l+1]||"";if(c){const d=o[c];if(!d)throw new Error(`Missing "${c}" param matcher`);if(!d(f))return}s[t]=f}return s}function bt(r,e,n,o){const s=new Set(e);return Object.entries(n).map(([c,[f,d,g]])=>{const{pattern:y,names:T,types:E}=gt(c),B={id:c,exec:z=>{const q=y.exec(z);if(q)return yt(q,T,E,o)},errors:[1,...g||[]].map(z=>r[z]),layouts:[0,...d||[]].map(t),leaf:l(f)};return B.errors.length=B.layouts.length=Math.max(B.errors.length,B.layouts.length),B});function l(c){const f=c<0;return f&&(c=~c),[f,r[c]]}function t(c){return c===void 0?c:[s.has(c),r[c]]}}function vt(r){let e,n,o;var s=r[0][0];function l(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=J(s,l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&ae(e.$$.fragment,t),n=U()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const f={};if(c&4&&(f.data=t[2]),c&2&&(f.form=t[1]),s!==(s=t[0][0])){if(e){Z();const d=e;D(d.$$.fragment,1,0,()=>{M(d,1)}),Q()}s?(e=J(s,l(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function Et(r){let e,n,o;var s=r[0][0];function l(t){return{props:{data:t[2],$$slots:{default:[Ot]},$$scope:{ctx:t}}}}return s&&(e=J(s,l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&ae(e.$$.fragment,t),n=U()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const f={};if(c&4&&(f.data=t[2]),c&1051&&(f.$$scope={dirty:c,ctx:t}),s!==(s=t[0][0])){if(e){Z();const d=e;D(d.$$.fragment,1,0,()=>{M(d,1)}),Q()}s?(e=J(s,l(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function kt(r){let e,n,o;var s=r[0][1];function l(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=J(s,l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&ae(e.$$.fragment,t),n=U()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const f={};if(c&8&&(f.data=t[3]),c&2&&(f.form=t[1]),s!==(s=t[0][1])){if(e){Z();const d=e;D(d.$$.fragment,1,0,()=>{M(d,1)}),Q()}s?(e=J(s,l(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function $t(r){let e,n,o;var s=r[0][1];function l(t){return{props:{data:t[3],$$slots:{default:[Rt]},$$scope:{ctx:t}}}}return s&&(e=J(s,l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&ae(e.$$.fragment,t),n=U()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const f={};if(c&8&&(f.data=t[3]),c&1043&&(f.$$scope={dirty:c,ctx:t}),s!==(s=t[0][1])){if(e){Z();const d=e;D(d.$$.fragment,1,0,()=>{M(d,1)}),Q()}s?(e=J(s,l(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function Rt(r){let e,n,o;var s=r[0][2];function l(t){return{props:{data:t[4],form:t[1]}}}return s&&(e=J(s,l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&ae(e.$$.fragment,t),n=U()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const f={};if(c&16&&(f.data=t[4]),c&2&&(f.form=t[1]),s!==(s=t[0][2])){if(e){Z();const d=e;D(d.$$.fragment,1,0,()=>{M(d,1)}),Q()}s?(e=J(s,l(t)),G(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&D(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function Ot(r){let e,n,o,s;const l=[$t,kt],t=[];function c(f,d){return f[0][2]?0:1}return e=c(r),n=t[e]=l[e](r),{c(){n.c(),o=U()},l(f){n.l(f),o=U()},m(f,d){t[e].m(f,d),F(f,o,d),s=!0},p(f,d){let g=e;e=c(f),e===g?t[e].p(f,d):(Z(),D(t[g],1,1,()=>{t[g]=null}),Q(),n=t[e],n?n.p(f,d):(n=t[e]=l[e](f),n.c()),V(n,1),n.m(o.parentNode,o))},i(f){s||(V(n),s=!0)},o(f){D(n),s=!1},d(f){t[e].d(f),f&&C(o)}}}function Ge(r){let e,n=r[6]&&Ke(r);return{c(){e=et("div"),n&&n.c(),this.h()},l(o){e=tt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=nt(e);n&&n.l(s),s.forEach(C),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(o,s){F(o,e,s),n&&n.m(e,null)},p(o,s){o[6]?n?n.p(o,s):(n=Ke(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&C(e),n&&n.d()}}}function Ke(r){let e;return{c(){e=rt(r[7])},l(n){e=at(n,r[7])},m(n,o){F(n,e,o)},p(n,o){o&128&&ot(e,n[7])},d(n){n&&C(e)}}}function It(r){let e,n,o,s,l;const t=[Et,vt],c=[];function f(g,y){return g[0][1]?0:1}e=f(r),n=c[e]=t[e](r);let d=r[5]&&Ge(r);return{c(){n.c(),o=Ze(),d&&d.c(),s=U()},l(g){n.l(g),o=Qe(g),d&&d.l(g),s=U()},m(g,y){c[e].m(g,y),F(g,o,y),d&&d.m(g,y),F(g,s,y),l=!0},p(g,[y]){let T=e;e=f(g),e===T?c[e].p(g,y):(Z(),D(c[T],1,1,()=>{c[T]=null}),Q(),n=c[e],n?n.p(g,y):(n=c[e]=t[e](g),n.c()),V(n,1),n.m(o.parentNode,o)),g[5]?d?d.p(g,y):(d=Ge(g),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null)},i(g){l||(V(n),l=!0)},o(g){D(n),l=!1},d(g){c[e].d(g),g&&C(o),d&&d.d(g),g&&C(s)}}}function St(r,e,n){let{stores:o}=e,{page:s}=e,{components:l}=e,{form:t}=e,{data_0:c=null}=e,{data_1:f=null}=e,{data_2:d=null}=e;xe(o.page.notify);let g=!1,y=!1,T=null;return Ee(()=>{const E=o.page.subscribe(()=>{g&&(n(6,y=!0),n(7,T=document.title||"untitled page"))});return n(5,g=!0),E}),r.$$set=E=>{"stores"in E&&n(8,o=E.stores),"page"in E&&n(9,s=E.page),"components"in E&&n(0,l=E.components),"form"in E&&n(1,t=E.form),"data_0"in E&&n(2,c=E.data_0),"data_1"in E&&n(3,f=E.data_1),"data_2"in E&&n(4,d=E.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(s)},[l,t,c,f,d,g,y,T,o,s]}class Lt extends Ye{constructor(e){super(),We(this,e,St,It,Xe,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const At={},de=[()=>Y(()=>import("./chunks/0-5b9f0fc3.js"),["chunks\\0-5b9f0fc3.js","chunks\\_layout-66c404dd.js","components\\pages\\_layout.svelte-fe009da5.js","assets\\vsc-dark-plus-409bb2fd.css","chunks\\index-dc704e0c.js"],import.meta.url),()=>Y(()=>import("./chunks/1-63c94460.js"),["chunks\\1-63c94460.js","components\\error.svelte-634dacb3.js","chunks\\index-dc704e0c.js","chunks\\singletons-8a2c3409.js"],import.meta.url),()=>Y(()=>import("./chunks/2-e85d0777.js"),["chunks\\2-e85d0777.js","components\\pages\\blog\\_slug_\\_layout.svelte-95e463f1.js","assets\\_layout-3e83edec.css","assets\\vsc-dark-plus-409bb2fd.css","chunks\\index-dc704e0c.js"],import.meta.url),()=>Y(()=>import("./chunks/3-a40f2f38.js"),["chunks\\3-a40f2f38.js","components\\pages\\_page.svelte-5d9ebbc9.js","assets\\_page-94c382f3.css","chunks\\index-dc704e0c.js"],import.meta.url),()=>Y(()=>import("./chunks/4-2ab5f5cb.js"),["chunks\\4-2ab5f5cb.js","components\\pages\\about\\_page.svelte-f888684e.js","chunks\\index-dc704e0c.js"],import.meta.url),()=>Y(()=>import("./chunks/5-8811e637.js"),["chunks\\5-8811e637.js","chunks\\_page-69b2005d.js","components\\pages\\blog\\_page.svelte-fe0b8217.js","assets\\_page-1d5e15cd.css","chunks\\index-dc704e0c.js"],import.meta.url),()=>Y(()=>import("./chunks/6-46eacc31.js"),["chunks\\6-46eacc31.js","chunks\\_page-270afd77.js","chunks\\preload-helper-aa6bc0ce.js","components\\pages\\blog\\_slug_\\_page.svelte-478b8816.js","assets\\_page-2c531ec5.css","chunks\\index-dc704e0c.js"],import.meta.url),()=>Y(()=>import("./chunks/7-2d10d76c.js"),["chunks\\7-2d10d76c.js","components\\pages\\contact\\_page.svelte-f601d722.js","chunks\\index-dc704e0c.js"],import.meta.url),()=>Y(()=>import("./chunks/8-1a8e94d5.js"),["chunks\\8-1a8e94d5.js","components\\pages\\uses\\_page.md-b23dcd16.js","chunks\\index-dc704e0c.js"],import.meta.url)],Nt=[],jt={"":[3],about:[4],blog:[5],contact:[7],uses:[8],"blog/[slug]":[6,[2]]},Pt={handleError:({error:r})=>{console.error(r)}};class $e{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,n){this.status=e,this.location=n}}const Tt="/__data.json";async function Ut(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,s])=>[o,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Dt=-1,Vt=-2,qt=-3,Bt=-4,Ct=-5,Ft=-6;function Jt(r){const e=JSON.parse(r);if(typeof e=="number")return s(e);const n=e,o=Array(n.length);function s(l){if(l===Dt)return;if(l===qt)return NaN;if(l===Bt)return 1/0;if(l===Ct)return-1/0;if(l===Ft)return-0;if(l in o)return o[l];const t=n[l];if(!t||typeof t!="object")o[l]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":o[l]=new Date(t[1]);break;case"Set":const f=new Set;o[l]=f;for(let y=1;y<t.length;y+=1)f.add(s(t[y]));break;case"Map":const d=new Map;o[l]=d;for(let y=1;y<t.length;y+=2)d.set(s(t[y]),s(t[y+1]));break;case"RegExp":o[l]=new RegExp(t[1],t[2]);break;case"Object":o[l]=Object(t[1]);break;case"BigInt":o[l]=BigInt(t[1]);break;case"null":const g=Object.create(null);o[l]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=s(t[y+1]);break}else{const c=new Array(t.length);o[l]=c;for(let f=0;f<t.length;f+=1){const d=t[f];d!==Vt&&(c[f]=s(d))}}else{const c={};o[l]=c;for(const f in t){const d=t[f];c[f]=s(d)}}return o[l]}return s(0)}const He="sveltekit:scroll",W="sveltekit:index",le=bt(de,Nt,jt,At),Re=de[0],Oe=de[1];Re();Oe();let re={};try{re=JSON.parse(sessionStorage[He])}catch{}function ve(r){re[r]=ke()}function Gt({target:r,base:e,trailing_slash:n}){var Ve;const o=[];let s=null;const l={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},c=!1,f=!1,d=!0,g=!1,y=!1,T,E=(Ve=history.state)==null?void 0:Ve[W];E||(E=Date.now(),history.replaceState({...history.state,[W]:E},"",location.href));const B=re[E];B&&(history.scrollRestoration="manual",scrollTo(B.x,B.y));let z=!1,q,Ie,oe;async function Se(){oe=oe||Promise.resolve(),await oe,oe=null;const a=new URL(location.href),p=ge(a,!0);s=null,await Ae(p,a,[])}async function he(a,{noscroll:p=!1,replaceState:h=!1,keepfocus:i=!1,state:u={}},m,_){return typeof a=="string"&&(a=new URL(a,Fe(document))),we({url:a,scroll:p?ke():null,keepfocus:i,redirect_chain:m,details:{state:u,replaceState:h},nav_token:_,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Le(a){const p=ge(a,!1);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s={id:p.id,promise:Pe(p)},s.promise}async function Ae(a,p,h,i,u={},m){var $,k;Ie=u;let _=a&&await Pe(a);if(_||(_=await De(p,null,ne(new Error(`Not found: ${p.pathname}`),{url:p,params:{},routeId:null}),404)),p=(a==null?void 0:a.url)||p,Ie!==u)return!1;if(_.type==="redirect")if(h.length>10||h.includes(p.pathname))_=await se({status:500,error:ne(new Error("Redirect loop"),{url:p,params:{},routeId:null}),url:p,routeId:null});else return he(new URL(_.location,p).href,{},[...h,p.pathname],u),!1;else((k=($=_.props)==null?void 0:$.page)==null?void 0:k.status)>=400&&await X.updated.check()&&await ie(p);if(o.length=0,y=!1,g=!0,i&&i.details){const{details:b}=i,v=b.replaceState?0:1;b.state[W]=E+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",p)}if(s=null,f){t=_.state,_.props.page&&(_.props.page.url=p);const b=fe();T.$set(_.props),b()}else Ne(_);if(i){const{scroll:b,keepfocus:v}=i;if(!v){const O=document.body,S=O.getAttribute("tabindex");O.tabIndex=-1,O.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),S!==null?O.setAttribute("tabindex",S):O.removeAttribute("tabindex")}if(await Ce(),d){const O=p.hash&&document.getElementById(p.hash.slice(1));b?scrollTo(b.x,b.y):O?O.scrollIntoView():scrollTo(0,0)}}else await Ce();d=!0,_.props.page&&(q=_.props.page),m&&m(),g=!1}function Ne(a){var u,m;t=a.state;const p=document.querySelector("style[data-sveltekit]");p&&p.remove(),q=a.props.page;const h=fe();T=new Lt({target:r,props:{...a.props,stores:X},hydrate:!0}),h();const i={from:null,to:ce("to",{params:t.params,routeId:(m=(u=t.route)==null?void 0:u.id)!=null?m:null,url:new URL(location.href)}),type:"load"};l.after_navigate.forEach(_=>_(i)),f=!0}async function ee({url:a,params:p,branch:h,status:i,error:u,route:m,form:_}){var S;const $=h.filter(Boolean),k={type:"loaded",state:{url:a,params:p,branch:h,error:u,route:m},props:{components:$.map(L=>L.node.component)}};_!==void 0&&(k.props.form=_);let b={},v=!q;for(let L=0;L<$.length;L+=1){const j=$[L];b={...b,...j.data},(v||!t.branch.some(P=>P===j))&&(k.props[`data_${L}`]=b,v=v||Object.keys((S=j.data)!=null?S:{}).length>0)}if(v||(v=Object.keys(q.data).length!==Object.keys(b).length),!t.url||a.href!==t.url.href||t.error!==u||_!==void 0||v){k.props.page={error:u,params:p,routeId:m&&m.id,status:i,url:a,form:_,data:v?b:q.data};const L=(j,P)=>{Object.defineProperty(k.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${P}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return k}async function me({loader:a,parent:p,url:h,params:i,routeId:u,server_data_node:m}){var b,v,O,S,L;let _=null;const $={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if((b=k.shared)!=null&&b.load){let j=function(...I){for(const w of I){const{href:R}=new URL(w,h);$.dependencies.add(R)}};const P={routeId:u,params:new Proxy(i,{get:(I,w)=>($.params.add(w),I[w])}),data:(v=m==null?void 0:m.data)!=null?v:null,url:ut(h,()=>{$.url=!0}),async fetch(I,w){let R;I instanceof Request?(R=I.url,w={body:I.method==="GET"||I.method==="HEAD"?void 0:await I.blob(),cache:I.cache,credentials:I.credentials,headers:I.headers,integrity:I.integrity,keepalive:I.keepalive,method:I.method,mode:I.mode,redirect:I.redirect,referrer:I.referrer,referrerPolicy:I.referrerPolicy,signal:I.signal,...w}):R=I;const N=new URL(R,h).href;return j(N),f?mt(N,w):ht(R,N,w)},setHeaders:()=>{},depends:j,parent(){return $.parent=!0,p()}};Object.defineProperties(P,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(O=await k.shared.load.call(null,P))!=null?O:null,_=_?await Ut(_):null}return{node:k,loader:a,server:m,shared:(S=k.shared)!=null&&S.load?{type:"data",data:_,uses:$}:null,data:(L=_!=null?_:m==null?void 0:m.data)!=null?L:null}}function je(a,p,h,i){if(y)return!0;if(!h)return!1;if(h.parent&&p||h.url&&a)return!0;for(const u of h.params)if(i[u]!==t.params[u])return!0;for(const u of h.dependencies)if(o.some(m=>m(new URL(u))))return!0;return!1}function _e(a,p){var h,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((h=a.uses.dependencies)!=null?h:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&p!=null?p:null}async function Pe({id:a,invalidating:p,url:h,params:i,route:u}){var I;if((s==null?void 0:s.id)===a)return s.promise;const{errors:m,layouts:_,leaf:$}=u,k=[..._,$];m.forEach(w=>w==null?void 0:w().catch(()=>{})),k.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let b=null;const v=t.url?a!==t.url.pathname+t.url.search:!1,O=k.reduce((w,R,N)=>{var te;const A=t.branch[N],x=!!(R!=null&&R[0])&&((A==null?void 0:A.loader)!==R[1]||je(v,w.some(Boolean),(te=A.server)==null?void 0:te.uses,i));return w.push(x),w},[]);if(O.some(Boolean)){try{b=await ze(h,O)}catch(w){return se({status:500,error:ne(w,{url:h,params:i,routeId:u.id}),url:h,routeId:u.id})}if(b.type==="redirect")return b}const S=b==null?void 0:b.nodes;let L=!1;const j=k.map(async(w,R)=>{var te;if(!w)return;const N=t.branch[R],A=S==null?void 0:S[R];if((!A||A.type==="skip")&&w[1]===(N==null?void 0:N.loader)&&!je(v,L,(te=N.shared)==null?void 0:te.uses,i))return N;if(L=!0,(A==null?void 0:A.type)==="error")throw A;return me({loader:w[1],url:h,params:i,routeId:u.id,parent:async()=>{var Be;const qe={};for(let ye=0;ye<R;ye+=1)Object.assign(qe,(Be=await j[ye])==null?void 0:Be.data);return qe},server_data_node:_e(A===void 0&&w[0]?{type:"skip"}:A!=null?A:null,N==null?void 0:N.server)})});for(const w of j)w.catch(()=>{});const P=[];for(let w=0;w<k.length;w+=1)if(k[w])try{P.push(await j[w])}catch(R){if(R instanceof Me)return{type:"redirect",location:R.location};let N=500,A;S!=null&&S.includes(R)?(N=(I=R.status)!=null?I:N,A=R.error):R instanceof $e?(N=R.status,A=R.body):A=ne(R,{params:i,url:h,routeId:u.id});const x=await Te(w,P,m);return x?await ee({url:h,params:i,branch:P.slice(0,x.idx).concat(x.node),status:N,error:A,route:u}):await De(h,u.id,A,N)}else P.push(void 0);return await ee({url:h,params:i,branch:P,status:200,error:null,route:u,form:p?void 0:null})}async function Te(a,p,h){for(;a--;)if(h[a]){let i=a;for(;!p[i];)i-=1;try{return{idx:i+1,node:{node:await h[a](),loader:h[a],data:{},server:null,shared:null}}}catch{continue}}}async function se({status:a,error:p,url:h,routeId:i}){var b;const u={},m=await Re();let _=null;if(m.server)try{const v=await ze(h,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;_=(b=v.nodes[0])!=null?b:null}catch{(h.origin!==location.origin||h.pathname!==location.pathname||c)&&await ie(h)}const $=await me({loader:Re,url:h,params:u,routeId:i,parent:()=>Promise.resolve({}),server_data_node:_e(_)}),k={node:await Oe(),loader:Oe,shared:null,server:null,data:null};return await ee({url:h,params:u,branch:[$,k],status:a,error:p,route:null})}function ge(a,p){if(Ue(a))return;const h=decodeURI(a.pathname.slice(e.length)||"/");for(const i of le){const u=i.exec(h);if(u){const m=new URL(a.origin+lt(a.pathname,n)+a.search+a.hash);return{id:m.pathname+m.search,invalidating:p,route:i,params:ct(u),url:m}}}}function Ue(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function we({url:a,scroll:p,keepfocus:h,redirect_chain:i,details:u,type:m,delta:_,nav_token:$,accepted:k,blocked:b}){var j,P,I,w;let v=!1;const O=ge(a,!1),S={from:ce("from",{params:t.params,routeId:(P=(j=t.route)==null?void 0:j.id)!=null?P:null,url:t.url}),to:ce("to",{params:(I=O==null?void 0:O.params)!=null?I:null,routeId:(w=O==null?void 0:O.route.id)!=null?w:null,url:a}),type:m};_!==void 0&&(S.delta=_);const L={...S,cancel:()=>{v=!0}};if(l.before_navigate.forEach(R=>R(L)),v){b();return}ve(E),k(),f&&X.navigating.set(S),await Ae(O,a,i,{scroll:p,keepfocus:h,details:u},$,()=>{l.after_navigate.forEach(R=>R(S)),X.navigating.set(null)})}async function De(a,p,h,i){return a.origin===location.origin&&a.pathname===location.pathname&&!c?await se({status:i,error:h,url:a,routeId:p}):await ie(a)}function ie(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Ee(()=>(l.after_navigate.push(a),()=>{const p=l.after_navigate.indexOf(a);l.after_navigate.splice(p,1)}))},before_navigate:a=>{Ee(()=>(l.before_navigate.push(a),()=>{const p=l.before_navigate.indexOf(a);l.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(g||!f)&&(d=!1)},goto:(a,p={})=>he(a,p,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")o.push(a);else{const{href:p}=new URL(a,location.href);o.push(h=>h.href===p)}return Se()},invalidateAll:()=>(y=!0,Se()),prefetch:async a=>{const p=new URL(a,Fe(document));await Le(p)},prefetch_routes:async a=>{const h=(a?le.filter(i=>a.some(u=>i.exec(u))):le).map(i=>Promise.all([...i.layouts,i.leaf].map(u=>u==null?void 0:u[1]())));await Promise.all(h)},apply_action:async a=>{if(a.type==="error"){const p=new URL(location.href),{branch:h,route:i}=t;if(!i)return;const u=await Te(t.branch.length,h,i.errors);if(u){const m=await ee({url:p,params:t.params,branch:h.slice(0,u.idx).concat(u.node),status:500,error:a.error,route:i});t=m.state;const _=fe();T.$set(m.props),_()}}else if(a.type==="redirect")he(a.location,{},[]);else{const p={form:a.data,page:{...q,form:a.data,status:a.status}},h=fe();T.$set(p),h()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var _,$;let u=!1;const m={from:ce("from",{params:t.params,routeId:($=(_=t.route)==null?void 0:_.id)!=null?$:null,url:t.url}),to:null,type:"unload",cancel:()=>u=!0};l.before_navigate.forEach(k=>k(m)),u?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ve(E);try{sessionStorage[He]=JSON.stringify(re)}catch{}}});const a=i=>{const{url:u,options:m}=Je(i);if(u&&m.prefetch){if(Ue(u))return;Le(u)}};let p;const h=i=>{clearTimeout(p),p=setTimeout(()=>{var u;(u=i.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",h),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:u,url:m,options:_}=Je(i);if(!u||!m)return;const $=u instanceof SVGAElement;if(!$&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:"))return;const k=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||k.includes("external")||_.reload||($?u.target.baseVal:u.target))return;const[b,v]=m.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){z=!0,ve(E),t.url=m,X.page.set({...q,url:m}),X.page.notify();return}we({url:m,scroll:_.noscroll?ke():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[W]===E)return;const u=i.state[W]-E;we({url:new URL(location.href),scroll:re[i.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{E=i.state[W]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}}),addEventListener("hashchange",()=>{z&&(z=!1,history.replaceState({...history.state,[W]:++E},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&X.navigating.set(null)})},_hydrate:async({status:a,error:p,node_ids:h,params:i,routeId:u,data:m,form:_})=>{var b;c=!0;const $=new URL(location.href);let k;try{const v=h.map(async(O,S)=>{const L=m[S];return me({loader:de[O],url:$,params:i,routeId:u,parent:async()=>{const j={};for(let P=0;P<S;P+=1)Object.assign(j,(await v[P]).data);return j},server_data_node:_e(L)})});k=await ee({url:$,params:i,branch:await Promise.all(v),status:a,error:p,form:_,route:(b=le.find(O=>O.id===u))!=null?b:null})}catch(v){if(v instanceof Me){await ie(new URL(v.location,location.href));return}k=await se({status:v instanceof $e?v.status:500,error:ne(v,{url:$,params:i,routeId:u}),url:$,routeId:u})}Ne(k)}}}async function ze(r,e){const n=new URL(r);n.pathname=r.pathname.replace(/\/$/,"")+Tt;const o=await pe(n.href,{headers:{"x-sveltekit-invalidated":e.map(l=>l?"1":"").join(",")}}),s=await o.text();if(!o.ok)throw new Error(JSON.parse(s));return Jt(s)}function ne(r,e){var n;return r instanceof $e?r.body:(n=Pt.handleError({error:r,event:e}))!=null?n:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Kt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ce(r,e){for(const n of Kt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return e}function fe(){return()=>{}}async function Yt({env:r,hydrate:e,paths:n,target:o,trailing_slash:s}){st(n);const l=Gt({target:o,base:n.base,trailing_slash:s});it({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{Yt as start};
