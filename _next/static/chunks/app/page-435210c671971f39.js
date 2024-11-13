(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7685:(e,s,t)=>{Promise.resolve().then(t.bind(t,6873))},6873:(e,s,t)=>{"use strict";t.d(s,{default:()=>g});var a=t(5155),l=t(2115);let r=l.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:s,className:"rounded-lg border bg-card text-card-foreground shadow-sm ".concat(t),...l})});r.displayName="Card";let n=l.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:s,className:"flex flex-col space-y-1.5 p-6 ".concat(t),...l})});n.displayName="CardHeader";let i=l.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)("h3",{ref:s,className:"text-2xl font-semibold leading-none tracking-tight ".concat(t),...l})});i.displayName="CardTitle";let c=l.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:s,className:"p-6 pt-0 ".concat(t),...l})});c.displayName="CardContent";let d=l.forwardRef((e,s)=>{let{value:t,onValueChange:l,min:r=0,max:n=100,step:i=1,className:c=""}=e,d=(t[0]-r)/(n-r)*100;return(0,a.jsx)("div",{ref:s,className:"relative flex w-full touch-none select-none items-center ".concat(c),children:(0,a.jsxs)("div",{className:"relative w-full h-2 bg-gray-200 rounded-full",children:[(0,a.jsx)("div",{className:"absolute h-full bg-blue-500 rounded-full",style:{width:"".concat(d,"%")}}),(0,a.jsx)("input",{type:"range",value:t[0],min:r,max:n,step:i,onChange:e=>l([Number(e.target.value)]),className:"absolute w-full h-full opacity-0 cursor-pointer"})]})})});d.displayName="Slider";let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u=function(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return s.filter((e,s,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===s).join(" ").trim()};var x={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let m=(0,l.forwardRef)((e,s)=>{let{color:t="currentColor",size:a=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:c,iconNode:d,...o}=e;return(0,l.createElement)("svg",{ref:s,...x,width:a,height:a,stroke:t,strokeWidth:n?24*Number(r)/Number(a):r,className:u("lucide",i),...o},[...d.map(e=>{let[s,t]=e;return(0,l.createElement)(s,t)}),...Array.isArray(c)?c:[c]])}),h=(e,s)=>{let t=(0,l.forwardRef)((t,a)=>{let{className:r,...n}=t;return(0,l.createElement)(m,{ref:a,iconNode:s,className:u("lucide-".concat(o(e)),r),...n})});return t.displayName="".concat(e),t},f=h("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]),p=h("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]),b=h("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),g=()=>{let[e,s]=(0,l.useState)(0),[t,o]=(0,l.useState)(!1),[u,x]=(0,l.useState)(1),[m,h]=(0,l.useState)(1),[g,N]=(0,l.useState)(100),[j,w]=(0,l.useState)(100),[y,v]=(0,l.useState)(0),[k,M]=(0,l.useState)(null),[S,C]=(0,l.useState)(null),[T,A]=(0,l.useState)(null),[E,R]=(0,l.useState)(null),[P,z]=(0,l.useState)(null),[_,L]=(0,l.useState)(null),F=async()=>{let e=new Audio("/demo-music.mp3");e.loop=!0;let s=new AudioContext,t=s.createMediaElementSource(e),a=s.createGain(),l=s.createGain(),r=s.createChannelMerger(2);a.gain.setValueAtTime(.9,s.currentTime),l.gain.setValueAtTime(.9,s.currentTime);let n=s.createStereoPanner(),i=s.createStereoPanner();n.pan.value=-1,i.pan.value=1,t.connect(n),t.connect(i),n.connect(a),i.connect(l),a.connect(r,0,0),l.connect(r,0,1),r.connect(s.destination),M(s),C(t),A(e),R(a),z(l),L(r);try{await e.play()}catch(e){console.error("播放失败:",e)}},I=async()=>{if(!k){await F(),o(!0);return}T&&("suspended"===k.state?(k.resume(),T.play(),o(!0)):"running"===k.state&&(k.suspend(),T.pause(),o(!1)))};return(0,l.useEffect)(()=>{let s=e=>Math.pow(Math.abs(e)/90,1.5),t=100+300*s(Math.max(0,e)),a=100+300*s(Math.max(0,-e));N(Math.round(t)),w(Math.round(a));let l=e=>Math.pow(e,1.2),r=l(5/t/.05),n=l(5/a/.05);x(r),h(n),v(e)},[e]),(0,l.useEffect)(()=>{if(E&&P&&k){let e=k.currentTime,s=.1+.8*u,t=.1+.8*m;E.gain.setTargetAtTime(s,e,.1),P.gain.setTargetAtTime(t,e,.1)}},[u,m,E,P,k]),(0,l.useEffect)(()=>()=>{T&&(T.pause(),T.src=""),k&&k.close()},[k,T]),(0,a.jsxs)(r,{className:"w-full max-w-6xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl",children:[(0,a.jsx)(n,{className:"border-b py-8",children:(0,a.jsx)(i,{className:"text-center text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent",children:"耳机空间音频物理模拟"})}),(0,a.jsx)(c,{className:"p-6",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center space-y-6",children:[(0,a.jsxs)("div",{className:"w-full max-w-md space-y-3",children:[(0,a.jsxs)("label",{className:"text-base font-medium flex items-center justify-between",children:[(0,a.jsx)("span",{children:"音源方位角度"}),(0,a.jsxs)("span",{className:"text-blue-600 font-mono text-lg",children:[e,"\xb0"]})]}),(0,a.jsx)(d,{value:[e],onValueChange:e=>{s(e[0])},min:-90,max:90,step:1,className:"w-full h-3"})]}),(0,a.jsxs)("div",{className:"relative w-[min(100%,24rem)] h-[min(100%,24rem)] bg-gray-50 rounded-full shadow-inner",children:[(0,a.jsx)("div",{className:"absolute top-1/2 left-1/2 w-48 h-48 border-6 border-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2",children:(0,a.jsxs)("div",{className:"relative w-full h-full",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-blue-100 rounded-full"}),(0,a.jsx)("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("span",{className:"absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm text-blue-600 whitespace-nowrap",children:"人脸朝向"}),(0,a.jsx)("div",{className:"w-10 h-10 border-t-[6px] border-r-[6px] border-blue-500 transform -rotate-45"})]})}),(0,a.jsxs)("div",{className:"absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2",children:[(0,a.jsx)("div",{className:"w-4 h-8 bg-green-500 rounded-l-full transition-all duration-300",style:{opacity:u}}),(0,a.jsx)("div",{className:"absolute top-1/2 left-1/2 w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 glow-red",children:(0,a.jsxs)("span",{className:"absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm whitespace-nowrap font-medium",children:["左声源 (",Math.round(100*u),"%)"]})})]}),(0,a.jsxs)("div",{className:"absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2",children:[(0,a.jsx)("div",{className:"w-4 h-8 bg-green-500 rounded-r-full transition-all duration-300",style:{opacity:m}}),(0,a.jsx)("div",{className:"absolute top-1/2 right-1/2 w-4 h-4 bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/2 glow-red",children:(0,a.jsxs)("span",{className:"absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm whitespace-nowrap font-medium",children:["右声源 (",Math.round(100*m),"%)"]})})]})]})}),(0,a.jsx)("div",{className:"absolute inset-[0px] border-2 border-dashed border-yellow-200 rounded-full"}),(0,a.jsx)("div",{className:"absolute top-1/2 left-1/2 w-6 h-6 bg-yellow-500 rounded-full transform -translate-y-1/2 transition-all duration-500 ease-out",style:{transform:"\n                    translate(-50%, -50%)\n                    translate(".concat(188*Math.sin(y*Math.PI/180),"px, \n                             ").concat(-188*Math.cos(y*Math.PI/180),"px)\n                  "),boxShadow:"0 0 20px rgba(234, 179, 8, 0.6)"},children:(0,a.jsxs)("span",{className:"absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm whitespace-nowrap font-medium",children:["感知声源 (",y,"\xb0)"]})})]}),(0,a.jsxs)("div",{className:"flex justify-center space-x-6 mt-4",children:[(0,a.jsx)("button",{className:"p-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg transition-all duration-300 hover:scale-105",onClick:I,children:t?(0,a.jsx)(f,{size:32}):(0,a.jsx)(p,{size:32})}),(0,a.jsx)("button",{className:"p-4 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white shadow-lg transition-all duration-300 hover:scale-105",onClick:()=>{if(s(0),o(!1),k&&T){let e=k.currentTime;E&&P&&(E.gain.setTargetAtTime(0,e,.1),P.gain.setTargetAtTime(0,e,.1)),k.suspend(),T.pause(),T.currentTime=0}},children:(0,a.jsx)(b,{size:32})})]})]}),(0,a.jsxs)("div",{className:"w-full max-w-md mx-auto space-y-6",children:[(0,a.jsxs)("div",{className:"bg-blue-50 p-4 rounded-xl shadow-sm space-y-4",children:[(0,a.jsx)("h3",{className:"text-base font-semibold text-blue-800",children:"电路参数"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-6",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("span",{className:"text-xs text-blue-700",children:"左声道电阻"}),(0,a.jsxs)("span",{className:"text-xs font-mono text-blue-900",children:[g,"Ω"]})]}),(0,a.jsx)("div",{className:"w-full h-2 bg-blue-100 rounded-full",children:(0,a.jsx)("div",{className:"h-full bg-blue-500 rounded-full transition-all duration-300",style:{width:"".concat((g-100)/300*100,"%")}})})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("span",{className:"text-xs text-blue-700",children:"右声道电阻"}),(0,a.jsxs)("span",{className:"text-xs font-mono text-blue-900",children:[j,"Ω"]})]}),(0,a.jsx)("div",{className:"w-full h-2 bg-blue-100 rounded-full",children:(0,a.jsx)("div",{className:"h-full bg-blue-500 rounded-full transition-all duration-300",style:{width:"".concat((j-100)/300*100,"%")}})})]})]})]}),(0,a.jsxs)("div",{className:"bg-green-50 p-4 rounded-xl shadow-sm space-y-4",children:[(0,a.jsx)("h3",{className:"text-base font-semibold text-green-800",children:"音量参"}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-6",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("span",{className:"text-xs text-green-700",children:"左耳音量"}),(0,a.jsxs)("span",{className:"text-sm font-mono text-green-900",children:[Math.round(100*u),"%"]}),(0,a.jsxs)("span",{className:"text-xs text-green-600",children:[(5/g).toFixed(2),"mA"]})]}),(0,a.jsx)("div",{className:"w-full h-2 bg-green-100 rounded-full",children:(0,a.jsx)("div",{className:"h-full bg-green-500 rounded-full transition-all duration-300",style:{width:"".concat(100*u,"%")}})})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("span",{className:"text-xs text-green-700",children:"右耳音量"}),(0,a.jsxs)("span",{className:"text-sm font-mono text-green-900",children:[Math.round(100*m),"%"]}),(0,a.jsxs)("span",{className:"text-xs text-green-600",children:[(5/j).toFixed(2),"mA"]})]}),(0,a.jsx)("div",{className:"w-full h-2 bg-green-100 rounded-full",children:(0,a.jsx)("div",{className:"h-full bg-green-500 rounded-full transition-all duration-300",style:{width:"".concat(100*m,"%")}})})]})]})]}),(0,a.jsxs)("div",{className:"bg-yellow-50 p-4 rounded-xl shadow-sm space-y-3",children:[(0,a.jsx)("h3",{className:"text-base font-semibold text-yellow-800",children:"声学参数"}),(0,a.jsxs)("div",{className:"space-y-4 text-base",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("span",{className:"text-yellow-700",children:"双耳强度差(ILD)"}),(0,a.jsxs)("span",{className:"font-mono text-yellow-900",children:[((m-u)*100).toFixed(1),"%"]})]}),(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("span",{className:"text-yellow-700",children:"实际声源角度"}),(0,a.jsxs)("span",{className:"font-mono text-yellow-900",children:[e,"\xb0"]})]}),(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("span",{className:"text-yellow-700",children:"感知声源角度"}),(0,a.jsxs)("span",{className:"font-mono text-yellow-900",children:[y,"\xb0"]})]})]})]})]})]})})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[441,517,358],()=>s(7685)),_N_E=e.O()}]);