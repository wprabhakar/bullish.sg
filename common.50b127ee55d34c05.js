"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{4850:(M,w,p)=>{p.d(w,{c:()=>l});var e=p(7205),h=p(7683),v=p(3139);
/*!
     * (C) Ionic http://ionicframework.com - MIT License
     */const l=(u,s)=>{let t,o;const a=(d,f,_)=>{if("undefined"==typeof document)return;const E=document.elementFromPoint(d,f);E&&s(E)?E!==t&&(m(),c(E,_)):m()},c=(d,f)=>{t=d,o||(o=t);const _=t;(0,e.c)(()=>_.classList.add("ion-activated")),f()},m=(d=!1)=>{if(!t)return;const f=t;(0,e.c)(()=>f.classList.remove("ion-activated")),d&&o!==t&&t.click(),t=void 0};return(0,v.createGesture)({el:u,gestureName:"buttonActiveDrag",threshold:0,onStart:d=>a(d.currentX,d.currentY,h.a),onMove:d=>a(d.currentX,d.currentY,h.b),onEnd:()=>{m(!0),(0,h.h)(),o=void 0}})}},8685:(M,w,p)=>{p.d(w,{g:()=>e});
/*!
     * (C) Ionic http://ionicframework.com - MIT License
     */
const e=(s,t,o,a,c)=>v(s[1],t[1],o[1],a[1],c).map(m=>h(s[0],t[0],o[0],a[0],m)),h=(s,t,o,a,c)=>c*(3*t*Math.pow(c-1,2)+c*(-3*o*c+3*o+a*c))-s*Math.pow(c-1,3),v=(s,t,o,a,c)=>u((a-=c)-3*(o-=c)+3*(t-=c)-(s-=c),3*o-6*t+3*s,3*t-3*s,s).filter(d=>d>=0&&d<=1),u=(s,t,o,a)=>{if(0===s)return((s,t,o)=>{const a=t*t-4*s*o;return a<0?[]:[(-t+Math.sqrt(a))/(2*s),(-t-Math.sqrt(a))/(2*s)]})(t,o,a);const c=(3*(o/=s)-(t/=s)*t)/3,m=(2*t*t*t-9*t*o+27*(a/=s))/27;if(0===c)return[Math.pow(-m,1/3)];if(0===m)return[Math.sqrt(-c),-Math.sqrt(-c)];const d=Math.pow(m/2,2)+Math.pow(c/3,3);if(0===d)return[Math.pow(m/2,.5)-t/3];if(d>0)return[Math.pow(-m/2+Math.sqrt(d),1/3)-Math.pow(m/2+Math.sqrt(d),1/3)-t/3];const f=Math.sqrt(Math.pow(-c/3,3)),_=Math.acos(-m/(2*Math.sqrt(Math.pow(-c/3,3)))),E=2*Math.pow(f,1/3);return[E*Math.cos(_/3)-t/3,E*Math.cos((_+2*Math.PI)/3)-t/3,E*Math.cos((_+4*Math.PI)/3)-t/3]}},5062:(M,w,p)=>{p.d(w,{i:()=>e});
/*!
     * (C) Ionic http://ionicframework.com - MIT License
     */
const e=h=>h&&""!==h.dir?"rtl"===h.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},1112:(M,w,p)=>{p.r(w),p.d(w,{startFocusVisible:()=>l});
/*!
     * (C) Ionic http://ionicframework.com - MIT License
     */
const e="ion-focused",v=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],l=u=>{let s=[],t=!0;const o=u?u.shadowRoot:document,a=u||document.body,c=C=>{s.forEach(g=>g.classList.remove(e)),C.forEach(g=>g.classList.add(e)),s=C},m=()=>{t=!1,c([])},d=C=>{t=v.includes(C.key),t||c([])},f=C=>{if(t&&C.composedPath){const g=C.composedPath().filter(i=>!!i.classList&&i.classList.contains("ion-focusable"));c(g)}},_=()=>{o.activeElement===a&&c([])};return o.addEventListener("keydown",d),o.addEventListener("focusin",f),o.addEventListener("focusout",_),o.addEventListener("touchstart",m),o.addEventListener("mousedown",m),{destroy:()=>{o.removeEventListener("keydown",d),o.removeEventListener("focusin",f),o.removeEventListener("focusout",_),o.removeEventListener("touchstart",m),o.removeEventListener("mousedown",m)},setFocus:c}}},1878:(M,w,p)=>{p.d(w,{C:()=>u,a:()=>v,d:()=>l});var e=p(5861),h=p(3756);
/*!
     * (C) Ionic http://ionicframework.com - MIT License
     */const v=function(){var s=(0,e.Z)(function*(t,o,a,c,m,d){var f;if(t)return t.attachViewToDom(o,a,m,c);if(!(d||"string"==typeof a||a instanceof HTMLElement))throw new Error("framework delegate is missing");const _="string"==typeof a?null===(f=o.ownerDocument)||void 0===f?void 0:f.createElement(a):a;return c&&c.forEach(E=>_.classList.add(E)),m&&Object.assign(_,m),o.appendChild(_),yield new Promise(E=>(0,h.c)(_,E)),_});return function(o,a,c,m,d,f){return s.apply(this,arguments)}}(),l=(s,t)=>{if(t){if(s)return s.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},u=()=>{let s,t;return{attachViewToDom:function(){var c=(0,e.Z)(function*(m,d,f={},_=[]){var E,C;if(s=m,d){const i="string"==typeof d?null===(E=s.ownerDocument)||void 0===E?void 0:E.createElement(d):d;_.forEach(n=>i.classList.add(n)),Object.assign(i,f),s.appendChild(i),yield new Promise(n=>(0,h.c)(i,n))}else if(s.children.length>0){const i=null===(C=s.ownerDocument)||void 0===C?void 0:C.createElement("div");_.forEach(n=>i.classList.add(n)),i.append(...s.children),s.appendChild(i)}const g=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),s.parentNode.insertBefore(t,s),g.appendChild(s),s});return function(d,f){return c.apply(this,arguments)}}(),removeViewFromDom:()=>(s&&t&&(t.parentNode.insertBefore(s,t),t.remove()),Promise.resolve())}}},7683:(M,w,p)=>{p.d(w,{a:()=>v,b:()=>l,c:()=>h,d:()=>s,h:()=>u});
/*!
     * (C) Ionic http://ionicframework.com - MIT License
     */
const e={getEngine(){var t;const o=window;return o.TapticEngine||(null===(t=o.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&o.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const o=this.getEngine();if(!o)return;const a=this.isCapacitor()?t.style.toUpperCase():t.style;o.impact({style:a})},notification(t){const o=this.getEngine();if(!o)return;const a=this.isCapacitor()?t.style.toUpperCase():t.style;o.notification({style:a})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},h=()=>{e.selection()},v=()=>{e.selectionStart()},l=()=>{e.selectionChanged()},u=()=>{e.selectionEnd()},s=t=>{e.impact(t)}},8935:(M,w,p)=>{p.d(w,{I:()=>u,a:()=>c,b:()=>s,c:()=>f,d:()=>E,f:()=>m,g:()=>a,i:()=>o,p:()=>_,r:()=>C,s:()=>d});var e=p(5861),h=p(3756),v=p(4147);
/*!
     * (C) Ionic http://ionicframework.com - MIT License
     */const u="ion-content",s=".ion-content-scroll-host",t=`${u}, ${s}`,o=g=>g&&"ION-CONTENT"===g.tagName,a=function(){var g=(0,e.Z)(function*(i){return o(i)?(yield new Promise(n=>(0,h.c)(i,n)),i.getScrollElement()):i});return function(n){return g.apply(this,arguments)}}(),c=g=>g.querySelector(s)||g.querySelector(t),m=g=>g.closest(t),d=(g,i)=>o(g)?g.scrollToTop(i):Promise.resolve(g.scrollTo({top:0,left:0,behavior:i>0?"smooth":"auto"})),f=(g,i,n,r)=>o(g)?g.scrollByPoint(i,n,r):Promise.resolve(g.scrollBy({top:n,left:i,behavior:r>0?"smooth":"auto"})),_=g=>(0,v.a)(g,u),E=g=>{if(o(g)){const n=g.scrollY;return g.scrollY=!1,n}return g.style.setProperty("overflow","hidden"),!0},C=(g,i)=>{o(g)?g.scrollY=i:g.style.removeProperty("overflow")}},9358:(M,w,p)=>{p.d(w,{a:()=>e,b:()=>d,c:()=>t,d:()=>f,e:()=>x,f:()=>s,g:()=>_,h:()=>v,i:()=>h,j:()=>n,k:()=>r,l:()=>o,m:()=>c,n:()=>E,o:()=>a,p:()=>u,q:()=>l,r:()=>i,s:()=>y,t:()=>m,u:()=>C,v:()=>g});
/*!
     * (C) Ionic http://ionicframework.com - MIT License
     */
const e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8439:(M,w,p)=>{p.d(w,{s:()=>e});
/*!
     * (C) Ionic http://ionicframework.com - MIT License
     */
const e=o=>{try{if(o instanceof class t{constructor(a){this.value=a}})return o.value;if(!l()||"string"!=typeof o||""===o)return o;const a=document.createDocumentFragment(),c=document.createElement("div");a.appendChild(c),c.innerHTML=o,s.forEach(_=>{const E=a.querySelectorAll(_);for(let C=E.length-1;C>=0;C--){const g=E[C];g.parentNode?g.parentNode.removeChild(g):a.removeChild(g);const i=v(g);for(let n=0;n<i.length;n++)h(i[n])}});const m=v(a);for(let _=0;_<m.length;_++)h(m[_]);const d=document.createElement("div");d.appendChild(a);const f=d.querySelector("div");return null!==f?f.innerHTML:d.innerHTML}catch(a){return console.error(a),""}},h=o=>{if(o.nodeType&&1!==o.nodeType)return;for(let c=o.attributes.length-1;c>=0;c--){const m=o.attributes.item(c),d=m.name;if(!u.includes(d.toLowerCase())){o.removeAttribute(d);continue}const f=m.value;null!=f&&f.toLowerCase().includes("javascript:")&&o.removeAttribute(d)}const a=v(o);for(let c=0;c<a.length;c++)h(a[c])},v=o=>null!=o.children?o.children:o.childNodes,l=()=>{var o;const a=window,c=null===(o=null==a?void 0:a.Ionic)||void 0===o?void 0:o.config;return!c||(c.get?c.get("sanitizerEnabled",!0):!0===c.sanitizerEnabled||void 0===c.sanitizerEnabled)},u=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},1316:(M,w,p)=>{p.r(w),p.d(w,{KEYBOARD_DID_CLOSE:()=>h,KEYBOARD_DID_OPEN:()=>e,copyVisualViewport:()=>i,keyboardDidClose:()=>_,keyboardDidOpen:()=>d,keyboardDidResize:()=>f,resetKeyboardAssist:()=>t,setKeyboardClose:()=>m,setKeyboardOpen:()=>c,startKeyboardAssist:()=>o,trackViewportChanges:()=>g});
/*!
     * (C) Ionic http://ionicframework.com - MIT License
     */
const e="ionKeyboardDidShow",h="ionKeyboardDidHide";let l={},u={},s=!1;const t=()=>{l={},u={},s=!1},o=n=>{a(n),n.visualViewport&&(u=i(n.visualViewport),n.visualViewport.onresize=()=>{g(n),d()||f(n)?c(n):_(n)&&m(n)})},a=n=>{n.addEventListener("keyboardDidShow",r=>c(n,r)),n.addEventListener("keyboardDidHide",()=>m(n))},c=(n,r)=>{E(n,r),s=!0},m=n=>{C(n),s=!1},d=()=>!s&&l.width===u.width&&(l.height-u.height)*u.scale>150,f=n=>s&&!_(n),_=n=>s&&u.height===n.innerHeight,E=(n,r)=>{const x=new CustomEvent(e,{detail:{keyboardHeight:r?r.keyboardHeight:n.innerHeight-u.height}});n.dispatchEvent(x)},C=n=>{const r=new CustomEvent(h);n.dispatchEvent(r)},g=n=>{l=Object.assign({},u),u=i(n.visualViewport)},i=n=>({width:Math.round(n.width),height:Math.round(n.height),offsetTop:n.offsetTop,offsetLeft:n.offsetLeft,pageTop:n.pageTop,pageLeft:n.pageLeft,scale:n.scale})},7741:(M,w,p)=>{p.d(w,{S:()=>h});
/*!
     * (C) Ionic http://ionicframework.com - MIT License
     */
const h={bubbles:{dur:1e3,circles:9,fn:(v,l,u)=>{const s=v*l/u-v+"ms",t=2*Math.PI*l/u;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(v,l,u)=>{const s=l/u,t=v*s-v+"ms",o=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(v,l)=>({r:6,style:{left:9-9*l+"px","animation-delay":-110*l+"ms"}})},lines:{dur:1e3,lines:8,fn:(v,l,u)=>({y1:14,y2:26,style:{transform:`rotate(${360/u*l+(l<u/2?180:-180)}deg)`,"animation-delay":v*l/u-v+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(v,l,u)=>({y1:12,y2:20,style:{transform:`rotate(${360/u*l+(l<u/2?180:-180)}deg)`,"animation-delay":v*l/u-v+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(v,l,u)=>({y1:17,y2:29,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":v*l/u-v+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(v,l,u)=>({y1:12,y2:20,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":v*l/u-v+"ms"}})}}},6546:(M,w,p)=>{p.r(w),p.d(w,{createSwipeBackGesture:()=>u});var e=p(3756),h=p(5062),v=p(3139);
/*!
     * (C) Ionic http://ionicframework.com - MIT License
     */p(3509);const u=(s,t,o,a,c)=>{const m=s.ownerDocument.defaultView,d=(0,h.i)(s),_=n=>d?-n.deltaX:n.deltaX;return(0,v.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:n=>(n=>{const{startX:y}=n;return d?y>=m.innerWidth-50:y<=50})(n)&&t(),onStart:o,onMove:n=>{const y=_(n)/m.innerWidth;a(y)},onEnd:n=>{const r=_(n),y=m.innerWidth,x=r/y,k=(n=>d?-n.velocityX:n.velocityX)(n),T=k>=0&&(k>.2||r>y/2),O=(T?1-x:x)*y;let b=0;if(O>5){const L=O/Math.abs(k);b=Math.min(L,540)}c(T,x<=0?.01:(0,e.l)(0,x,.9999),b)}})}},6955:(M,w,p)=>{p.d(w,{V:()=>l});var e=p(655),h=p(1223),v=p(849);let l=(()=>{class u{constructor(t){this.storage=t,this._storage=null,this.init()}init(){return(0,e.mG)(this,void 0,void 0,function*(){const t=yield this.storage.create();this._storage=t})}set(t,o){var a;null===(a=this._storage)||void 0===a||a.set(t,o)}get(t){var o;return null===(o=this._storage)||void 0===o?void 0:o.get(t)}remove(t){var o;return null===(o=this._storage)||void 0===o?void 0:o.remove(t)}getBots(){var t=[];return new Promise((a,c)=>{this.storage.forEach((m,d,f)=>{t.push(m)}).then(m=>{a(t)})})}deleteOne(){return(0,e.mG)(this,void 0,void 0,function*(){yield this.storage.forEach((t,o,a)=>(0,e.mG)(this,void 0,void 0,function*(){yield this.storage.remove(o)}))})}}return u.\u0275fac=function(t){return new(t||u)(h.LFG(v.K))},u.\u0275prov=h.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},5449:(M,w,p)=>{p.d(w,{u:()=>g});var e=p(1223),h=p(2382),v=p(9808),l=p(877);function u(i,n){if(1&i&&e._UZ(0,"ion-input",10),2&i){const r=e.oxw(2).$implicit;e.Q6J("type",r.type)("formControlName",r.name)("value",r.value)}}function s(i,n){if(1&i&&e._UZ(0,"ion-input",11),2&i){const r=e.oxw(2).$implicit;e.Q6J("type",r.type)("formControlName",r.name)("value",r.value)}}function t(i,n){if(1&i&&e._UZ(0,"ion-textarea",12),2&i){const r=e.oxw(2).$implicit;e.Q6J("formControlName",r.name)("value",r.value)}}function o(i,n){if(1&i&&e._UZ(0,"ion-checkbox",13),2&i){const r=e.oxw(2).$implicit;e.Q6J("formControlName",r.name)("checked",r.value)}}function a(i,n){if(1&i&&(e.TgZ(0,"div")(1,"ion-select-option",15),e._uU(2),e.qZA()()),2&i){const r=n.$implicit,y=e.oxw(3).$implicit;e.xp6(1),e.s9C("value",r),e.xp6(1),e.Oqu(y.options[r])}}function c(i,n){if(1&i&&(e.TgZ(0,"ion-select",14),e.YNc(1,a,3,2,"div",1),e.qZA()),2&i){const r=e.oxw(2).$implicit,y=e.oxw();e.Q6J("formControlName",r.name)("value",r.value),e.xp6(1),e.Q6J("ngForOf",y.keys(r.options))}}function m(i,n){if(1&i&&e._UZ(0,"ion-toggle",13),2&i){const r=e.oxw(2).$implicit;e.Q6J("formControlName",r.name)("checked",r.value)}}function d(i,n){if(1&i&&(e.TgZ(0,"ion-range",16),e._UZ(1,"ion-icon",17)(2,"ion-icon",18),e.qZA()),2&i){const r=e.oxw(2).$implicit;e.Q6J("min",r.options.min)("max",r.options.max)("formControlName",r.name),e.xp6(1),e.Q6J("name",r.options.icon),e.xp6(1),e.Q6J("name",r.options.icon)}}const f=function(){return["password","email","number","search","tel","url"]},_=function(){return["text"]};function E(i,n){if(1&i&&(e.TgZ(0,"div")(1,"ion-item")(2,"ion-label"),e._uU(3),e.qZA(),e.YNc(4,u,1,3,"ion-input",4),e.YNc(5,s,1,3,"ion-input",5),e.YNc(6,t,1,2,"ion-textarea",6),e.YNc(7,o,1,2,"ion-checkbox",7),e.YNc(8,c,2,3,"ion-select",8),e.YNc(9,m,1,2,"ion-toggle",7),e.YNc(10,d,3,5,"ion-range",9),e.qZA()()),2&i){const r=e.oxw().$implicit;e.xp6(3),e.Oqu(r.label),e.xp6(1),e.Q6J("ngIf",e.DdM(8,f).includes(r.type)),e.xp6(1),e.Q6J("ngIf",e.DdM(9,_).includes(r.type)),e.xp6(1),e.Q6J("ngIf","textarea"===r.type),e.xp6(1),e.Q6J("ngIf","checkbox"===r.type),e.xp6(1),e.Q6J("ngIf","select"===r.type),e.xp6(1),e.Q6J("ngIf","toggle"===r.type),e.xp6(1),e.Q6J("ngIf","range"===r.type)}}function C(i,n){if(1&i&&(e.TgZ(0,"span"),e.YNc(1,E,11,10,"div",3),e.qZA()),2&i){const r=n.$implicit;e.xp6(1),e.Q6J("ngIf",!r.hidden)}}let g=(()=>{class i{constructor(r){this.fb=r,this.formSubmission=new e.vpe,this.myForm=this.fb.group({})}ngOnChanges(r){r.jsonFormData.firstChange||this.createForm(this.jsonFormData.controls)}createForm(r){for(const y of r){const x=[];for(const[k,D]of Object.entries(y.validators))switch(k){case"min":x.push(h.kI.min(D));break;case"max":x.push(h.kI.max(D));break;case"required":D&&x.push(h.kI.required);break;case"requiredTrue":D&&x.push(h.kI.requiredTrue);break;case"email":D&&x.push(h.kI.email);break;case"minLength":x.push(h.kI.minLength(D));break;case"maxLength":x.push(h.kI.maxLength(D));break;case"pattern":x.push(h.kI.pattern(D));break;case"nullValidator":D&&x.push(h.kI.nullValidator)}this.myForm.addControl(y.name,this.fb.control(y.value,x))}}keys(r){return Object.keys(r)}onSubmit(){this.formSubmission.emit(this.myForm.value)}}return i.\u0275fac=function(r){return new(r||i)(e.Y36(h.qu))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-json-form"]],inputs:{jsonFormData:"jsonFormData"},outputs:{formSubmission:"formSubmission"},features:[e.TTD],decls:4,vars:2,consts:[[3,"formGroup","ngSubmit"],[4,"ngFor","ngForOf"],["type","submit"],[4,"ngIf"],[3,"type","formControlName","value",4,"ngIf"],["oninput","this.value = this.value.toUpperCase()",3,"type","formControlName","value",4,"ngIf"],[3,"formControlName","value",4,"ngIf"],[3,"formControlName","checked",4,"ngIf"],["okText","Okay","cancelText","Dismiss",3,"formControlName","value",4,"ngIf"],[3,"min","max","formControlName",4,"ngIf"],[3,"type","formControlName","value"],["oninput","this.value = this.value.toUpperCase()",3,"type","formControlName","value"],[3,"formControlName","value"],[3,"formControlName","checked"],["okText","Okay","cancelText","Dismiss",3,"formControlName","value"],[3,"value"],[3,"min","max","formControlName"],["size","small","slot","start",3,"name"],["slot","end",3,"name"]],template:function(r,y){1&r&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return y.onSubmit()}),e.YNc(1,C,2,1,"span",1),e.TgZ(2,"ion-button",2),e._uU(3,"Submit"),e.qZA()()),2&r&&(e.Q6J("formGroup",y.myForm),e.xp6(1),e.Q6J("ngForOf",null==y.jsonFormData?null:y.jsonFormData.controls))},dependencies:[v.sg,v.O5,h._Y,h.JJ,h.JL,h.sg,h.u,l.YG,l.nz,l.gu,l.pK,l.Ie,l.Q$,l.I_,l.t9,l.n0,l.g2,l.ho,l.w,l.QI,l.j9],changeDetection:0}),i})()}}]);