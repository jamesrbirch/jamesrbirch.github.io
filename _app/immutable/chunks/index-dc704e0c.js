function g(){}const K=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function L(){return Object.create(null)}function $(t){t.forEach(W)}function O(t){return typeof t=="function"}function Ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Pt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function ft(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zt(t,e,n){t.$$.on_destroy.push(_t(e,n))}function Bt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Rt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)l[u]=e.dirty[u]|r[u];return l}return e.dirty|r}return e.dirty}function Tt(t,e,n,i,r,l){if(r){const s=Q(e,n,i,l);t.p(s,r)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const U=typeof window<"u";let V=U?()=>window.performance.now():()=>Date.now(),F=U?t=>requestAnimationFrame(t):g;const x=new Set;function X(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&F(X)}function Y(t){let e;return x.size===0&&F(X),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let P=!1;function dt(){P=!0}function ht(){P=!1}function mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:mt(1,r,_=>e[n[_]].claim_order,o))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const l=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);l.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<l.length&&s[c].claim_order>=l[o].claim_order;)o++;const f=o<l.length?l[o]:null;t.insertBefore(s[c],f)}}function yt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=et("style");return xt(Z(t),e),e.sheet}function xt(t,e){return yt(t.head||t,e),e.sheet}function $t(t,e){if(P){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){P&&!n?$t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function Lt(){return H(" ")}function Gt(){return H("")}function Jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bt(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){wt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function vt(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||l.push(u.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Kt(t,e,n){return vt(t,e,n,et)}function Et(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Wt(t){return Et(t," ")}function Qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ut(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Vt(t,e){return new t(e)}const M=new Map;let q=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:gt(e),rules:{}};return M.set(t,n),n}function it(t,e,n,i,r,l,s,u=0){const c=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=c){const k=e+(n-e)*l(m);o+=m*100+`%{${s(k,1-k)}}
`}const f=o+`100% {${s(n,1-n)}}
}`,a=`__svelte_${kt(f)}_${u}`,_=Z(t),{stylesheet:d,rules:h}=M.get(_)||At(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,q+=1,a}function R(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),q-=r,q||Ct())}function Ct(){F(()=>{q||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),M.clear())})}let E;function v(t){E=t}function rt(){if(!E)throw new Error("Function called outside component initialization");return E}function Xt(t){rt().$$.on_mount.push(t)}function Yt(t){rt().$$.after_update.push(t)}const w=[],G=[],S=[],J=[],st=Promise.resolve();let T=!1;function ct(){T||(T=!0,st.then(ot))}function Zt(){return ct(),st}function N(t){S.push(t)}const B=new Set;let C=0;function ot(){const t=E;do{for(;C<w.length;){const e=w[C];C++,v(e),St(e.$$)}for(v(null),w.length=0,C=0;G.length;)G.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];B.has(n)||(B.add(n),n())}S.length=0}while(w.length);for(;J.length;)J.pop()();T=!1,B.clear(),v(t)}function St(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let b;function lt(){return b||(b=Promise.resolve(),b.then(()=>{b=null})),b}function D(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const j=new Set;let y;function te(){y={r:0,c:[],p:y}}function ee(){y.r||$(y.c),y=y.p}function jt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function ne(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),y.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ut={duration:0};function ie(t,e,n){let i=e(t,n),r=!1,l,s,u=0;function c(){l&&R(t,l)}function o(){const{delay:a=0,duration:_=300,easing:d=K,tick:h=g,css:p}=i||ut;p&&(l=it(t,0,1,_,a,d,p,u++)),h(0,1);const m=V()+a,k=m+_;s&&s.abort(),r=!0,N(()=>D(t,!0,"start")),s=Y(z=>{if(r){if(z>=k)return h(1,0),D(t,!0,"end"),c(),r=!1;if(z>=m){const I=d((z-m)/_);h(I,1-I)}}return r})}let f=!1;return{start(){f||(f=!0,R(t),O(i)?(i=i(),lt().then(o)):o())},invalidate(){f=!1},end(){r&&(c(),r=!1)}}}function re(t,e,n){let i=e(t,n),r=!0,l;const s=y;s.r+=1;function u(){const{delay:c=0,duration:o=300,easing:f=K,tick:a=g,css:_}=i||ut;_&&(l=it(t,1,0,o,c,f,_));const d=V()+c,h=d+o;N(()=>D(t,!1,"start")),Y(p=>{if(r){if(p>=h)return a(0,1),D(t,!1,"end"),--s.r||$(s.c),!1;if(p>=d){const m=f((p-d)/o);a(1-m,m)}}return r})}return O(i)?lt().then(()=>{i=i(),u()}):u(),{end(c){c&&i.tick&&i.tick(1,0),r&&(l&&R(t,l),r=!1)}}}function se(t){t&&t.c()}function ce(t,e){t&&t.l(e)}function Mt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||N(()=>{const s=t.$$.on_mount.map(W).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...s):$(s),t.$$.on_mount=[]}),l.forEach(N)}function qt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(w.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function oe(t,e,n,i,r,l,s,u=[-1]){const c=E;v(t);const o=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:r,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:L(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return o.ctx&&r(o.ctx[a],o.ctx[a]=h)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](h),f&&Dt(t,a)),_}):[],o.update(),f=!0,$(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){dt();const a=bt(e.target);o.fragment&&o.fragment.l(a),a.forEach(tt)}else o.fragment&&o.fragment.c();e.intro&&jt(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),ht(),ot()}v(c)}class le{$destroy(){qt(this,1),this.$destroy=g}$on(e,n){if(!O(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Zt as A,g as B,$t as C,K as D,Bt as E,Tt as F,Ft as G,Rt as H,N as I,ie as J,re as K,zt as L,It as M,Pt as N,le as S,Lt as a,Ht as b,Wt as c,ee as d,Gt as e,jt as f,te as g,tt as h,oe as i,Yt as j,et as k,Kt as l,bt as m,Jt as n,Xt as o,Ut as p,H as q,Et as r,Ot as s,ne as t,Qt as u,Vt as v,se as w,ce as x,Mt as y,qt as z};