import{s as j,l as w,j as k,k as p,o as B,b as v,e as D,h as E,d as F,m as O,i as P,p as T,q as S}from"../chunks/scheduler.Dc8tTJBu.js";import{S as I,i as M,t as m,a as u,g as h,c as C,b as d,d as _,m as $,e as b,f as q}from"../chunks/index.CUkUO2Ml.js";import{S as g,T as R,C as V}from"../chunks/slideObject.sSBwR6TN.js";import"../chunks/entry.CHzrKy0Y.js";import{O as z}from"../chunks/OpenFileButton.DpYLMTcY.js";import{C as G,S as H}from"../chunks/SaveFileButton.C-aOrtSI.js";function J(o){let s,a,e,t=o[0]&&A(o),n=o[0]&&o[1]&&N(o);return{c(){t&&t.c(),s=v(),a=D("div"),n&&n.c(),this.h()},l(l){t&&t.l(l),s=E(l),a=F(l,"DIV",{class:!0});var i=O(a);n&&n.l(i),i.forEach(p),this.h()},h(){P(a,"class","w-full bg-gray-700 text-white py-2 px-1 min-h-screen ")},m(l,i){t&&t.m(l,i),k(l,s,i),k(l,a,i),n&&n.m(a,null),e=!0},p(l,i){l[0]?t?(t.p(l,i),i&1&&m(t,1)):(t=A(l),t.c(),m(t,1),t.m(s.parentNode,s)):t&&(h(),u(t,1,1,()=>{t=null}),C()),l[0]&&l[1]?n?(n.p(l,i),i&3&&m(n,1)):(n=N(l),n.c(),m(n,1),n.m(a,null)):n&&(h(),u(n,1,1,()=>{n=null}),C())},i(l){e||(m(t),m(n),e=!0)},o(l){u(t),u(n),e=!1},d(l){l&&(p(s),p(a)),t&&t.d(l),n&&n.d()}}}function A(o){let s,a;return s=new R({props:{$$slots:{default:[K]},$$scope:{ctx:o}}}),{c(){d(s.$$.fragment)},l(e){_(s.$$.fragment,e)},m(e,t){$(s,e,t),a=!0},p(e,t){const n={};t&65&&(n.$$scope={dirty:t,ctx:e}),s.$set(n)},i(e){a||(m(s.$$.fragment,e),a=!0)},o(e){u(s.$$.fragment,e),a=!1},d(e){b(s,e)}}}function K(o){let s,a,e,t,n,l;return s=new G({props:{callback:o[2],title:"New ",icon:"🎉"}}),e=new z({props:{callback:o[3],importAccept:".js",regexReplaceFilter:/export\s+const\s+\w+\s*=\s*/}}),n=new H({props:{content:o[0],PreTextToAdd:"export const Slide"}}),{c(){d(s.$$.fragment),a=v(),d(e.$$.fragment),t=v(),d(n.$$.fragment)},l(i){_(s.$$.fragment,i),a=E(i),_(e.$$.fragment,i),t=E(i),_(n.$$.fragment,i)},m(i,r){$(s,i,r),k(i,a,r),$(e,i,r),k(i,t,r),$(n,i,r),l=!0},p(i,r){const f={};r&1&&(f.content=i[0]),n.$set(f)},i(i){l||(m(s.$$.fragment,i),m(e.$$.fragment,i),m(n.$$.fragment,i),l=!0)},o(i){u(s.$$.fragment,i),u(e.$$.fragment,i),u(n.$$.fragment,i),l=!1},d(i){i&&(p(a),p(t)),b(s,i),b(e,i),b(n,i)}}}function N(o){let s,a,e,t;function n(r){o[4](r)}function l(r){o[5](r)}let i={assets:o[1],showAddToolbar:Q,slideStartTime:o[0].startTime,slideEndTime:o[0].endTime};return o[0].items!==void 0&&(i.items=o[0].items),o[0].slideExtra!==void 0&&(i.slideExtra=o[0].slideExtra),s=new V({props:i}),T.push(()=>q(s,"items",n)),T.push(()=>q(s,"slideExtra",l)),{c(){d(s.$$.fragment)},l(r){_(s.$$.fragment,r)},m(r,f){$(s,r,f),t=!0},p(r,f){const c={};f&2&&(c.assets=r[1]),f&1&&(c.slideStartTime=r[0].startTime),f&1&&(c.slideEndTime=r[0].endTime),!a&&f&1&&(a=!0,c.items=r[0].items,S(()=>a=!1)),!e&&f&1&&(e=!0,c.slideExtra=r[0].slideExtra,S(()=>e=!1)),s.$set(c)},i(r){t||(m(s.$$.fragment,r),t=!0)},o(r){u(s.$$.fragment,r),t=!1},d(r){b(s,r)}}}function L(o){let s,a,e=g&&J(o);return{c(){e&&e.c(),s=w()},l(t){e&&e.l(t),s=w()},m(t,n){e&&e.m(t,n),k(t,s,n),a=!0},p(t,[n]){g&&e.p(t,n)},i(t){a||(m(e),a=!0)},o(t){u(e),a=!1},d(t){t&&p(s),e&&e.d(t)}}}let Q=!0;function U(o,s,a){let e=null,t=null;function n(){a(0,e=g.Canvas.getNewSlide())}function l(f){a(0,e=f)}B(async()=>{a(1,t=await g.loadAssets()),a(0,e=g.Canvas.getDemoSlide())});function i(f){o.$$.not_equal(e.items,f)&&(e.items=f,a(0,e))}function r(f){o.$$.not_equal(e.slideExtra,f)&&(e.slideExtra=f,a(0,e))}return[e,t,n,l,i,r]}class ee extends I{constructor(s){super(),M(this,s,U,L,j,{})}}export{ee as component};