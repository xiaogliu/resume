!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=4)}([function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0),n(1),n(2),n(3);const o=(t,e=document)=>e.querySelector(t);function r(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}function i(t,e){r(t,e)&&(t.className=t.className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)")," "))}function a(t,e){r(t,e)||(t.className+=" "+e)}function c(){return!!navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile|Windows Phone/i)}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],u=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function d(t,e,n,o){if("string"==typeof t&&(t=document.getElementById(t)),t&&"naturalWidth"in t){var r=t.naturalWidth,i=t.naturalHeight;if("string"==typeof e&&(e=document.getElementById(e)),e&&"getContext"in e){e.style.width=r+"px",e.style.height=i+"px",e.width=r,e.height=i;var a=e.getContext("2d");a.clearRect(0,0,r,i),a.drawImage(t,0,0),isNaN(n)||n<1||(o?function(t,e,n,o,r,i){if(!(isNaN(i)||i<1)){i|=0;var a=f(t,e,n,o,r);a=function(t,e,n,o,r,i){var a,c,s,d,f,p,b,v,m,y,h,x,w,S,E,M,C,L,T,I,P,j,N,O,R,H=t.data,q=2*i+1,A=o-1,B=r-1,_=i+1,D=_*(_+1)/2,$=new g,W=$;for(s=1;s<q;s++)W=W.next=new g,s===_&&(R=W);W.next=$;var Y=null,k=null;b=p=0;var F=l[i],G=u[i];for(c=0;c<r;c++){for(M=C=L=T=v=m=y=h=0,x=_*(I=H[p]),w=_*(P=H[p+1]),S=_*(j=H[p+2]),E=_*(N=H[p+3]),v+=D*I,m+=D*P,y+=D*j,h+=D*N,W=$,s=0;s<_;s++)W.r=I,W.g=P,W.b=j,W.a=N,W=W.next;for(s=1;s<_;s++)d=p+((A<s?A:s)<<2),v+=(W.r=I=H[d])*(O=_-s),m+=(W.g=P=H[d+1])*O,y+=(W.b=j=H[d+2])*O,h+=(W.a=N=H[d+3])*O,M+=I,C+=P,L+=j,T+=N,W=W.next;for(Y=$,k=R,a=0;a<o;a++)H[p+3]=N=h*F>>G,0!==N?(N=255/N,H[p]=(v*F>>G)*N,H[p+1]=(m*F>>G)*N,H[p+2]=(y*F>>G)*N):H[p]=H[p+1]=H[p+2]=0,v-=x,m-=w,y-=S,h-=E,x-=Y.r,w-=Y.g,S-=Y.b,E-=Y.a,d=b+((d=a+i+1)<A?d:A)<<2,v+=M+=Y.r=H[d],m+=C+=Y.g=H[d+1],y+=L+=Y.b=H[d+2],h+=T+=Y.a=H[d+3],Y=Y.next,x+=I=k.r,w+=P=k.g,S+=j=k.b,E+=N=k.a,M-=I,C-=P,L-=j,T-=N,k=k.next,p+=4;b+=o}for(a=0;a<o;a++){for(C=L=T=M=m=y=h=v=0,x=_*(I=H[p=a<<2]),w=_*(P=H[p+1]),S=_*(j=H[p+2]),E=_*(N=H[p+3]),v+=D*I,m+=D*P,y+=D*j,h+=D*N,W=$,s=0;s<_;s++)W.r=I,W.g=P,W.b=j,W.a=N,W=W.next;for(f=o,s=1;s<=i;s++)p=f+a<<2,v+=(W.r=I=H[p])*(O=_-s),m+=(W.g=P=H[p+1])*O,y+=(W.b=j=H[p+2])*O,h+=(W.a=N=H[p+3])*O,M+=I,C+=P,L+=j,T+=N,W=W.next,s<B&&(f+=o);for(p=a,Y=$,k=R,c=0;c<r;c++)H[3+(d=p<<2)]=N=h*F>>G,N>0?(N=255/N,H[d]=(v*F>>G)*N,H[d+1]=(m*F>>G)*N,H[d+2]=(y*F>>G)*N):H[d]=H[d+1]=H[d+2]=0,v-=x,m-=w,y-=S,h-=E,x-=Y.r,w-=Y.g,S-=Y.b,E-=Y.a,d=a+((d=c+_)<B?d:B)*o<<2,v+=M+=Y.r=H[d],m+=C+=Y.g=H[d+1],y+=L+=Y.b=H[d+2],h+=T+=Y.a=H[d+3],Y=Y.next,x+=I=k.r,w+=P=k.g,S+=j=k.b,E+=N=k.a,M-=I,C-=P,L-=j,T-=N,k=k.next,p+=o}return t}(a,0,0,o,r,i),t.getContext("2d").putImageData(a,e,n)}}(e,0,0,r,i,n):function(t,e,n,o,r,i){if(!(isNaN(i)||i<1)){i|=0;var a=f(t,e,n,o,r);a=function(t,e,n,o,r,i){var a,c,s,d,f,p,b,v,m,y,h,x,w,S,E,M,C,L,T,I,P,j=t.data,N=2*i+1,O=o-1,R=r-1,H=i+1,q=H*(H+1)/2,A=new g,B=A;for(s=1;s<N;s++)B=B.next=new g,s===H&&(P=B);B.next=A;var _=null,D=null;b=p=0;var $=l[i],W=u[i];for(c=0;c<r;c++){for(S=E=M=v=m=y=0,h=H*(C=j[p]),x=H*(L=j[p+1]),w=H*(T=j[p+2]),v+=q*C,m+=q*L,y+=q*T,B=A,s=0;s<H;s++)B.r=C,B.g=L,B.b=T,B=B.next;for(s=1;s<H;s++)d=p+((O<s?O:s)<<2),v+=(B.r=C=j[d])*(I=H-s),m+=(B.g=L=j[d+1])*I,y+=(B.b=T=j[d+2])*I,S+=C,E+=L,M+=T,B=B.next;for(_=A,D=P,a=0;a<o;a++)j[p]=v*$>>W,j[p+1]=m*$>>W,j[p+2]=y*$>>W,v-=h,m-=x,y-=w,h-=_.r,x-=_.g,w-=_.b,d=b+((d=a+i+1)<O?d:O)<<2,v+=S+=_.r=j[d],m+=E+=_.g=j[d+1],y+=M+=_.b=j[d+2],_=_.next,h+=C=D.r,x+=L=D.g,w+=T=D.b,S-=C,E-=L,M-=T,D=D.next,p+=4;b+=o}for(a=0;a<o;a++){for(E=M=S=m=y=v=0,h=H*(C=j[p=a<<2]),x=H*(L=j[p+1]),w=H*(T=j[p+2]),v+=q*C,m+=q*L,y+=q*T,B=A,s=0;s<H;s++)B.r=C,B.g=L,B.b=T,B=B.next;for(f=o,s=1;s<=i;s++)p=f+a<<2,v+=(B.r=C=j[p])*(I=H-s),m+=(B.g=L=j[p+1])*I,y+=(B.b=T=j[p+2])*I,S+=C,E+=L,M+=T,B=B.next,s<R&&(f+=o);for(p=a,_=A,D=P,c=0;c<r;c++)j[d=p<<2]=v*$>>W,j[d+1]=m*$>>W,j[d+2]=y*$>>W,v-=h,m-=x,y-=w,h-=_.r,x-=_.g,w-=_.b,d=a+((d=c+H)<R?d:R)*o<<2,v+=S+=_.r=j[d],m+=E+=_.g=j[d+1],y+=M+=_.b=j[d+2],_=_.next,h+=C=D.r,x+=L=D.g,w+=T=D.b,S-=C,E-=L,M-=T,D=D.next,p+=o}return t}(a,0,0,o,r,i),t.getContext("2d").putImageData(a,e,n)}}(e,0,0,r,i,n))}}}function f(t,e,n,o,r){if("string"==typeof t&&(t=document.getElementById(t)),!(t&&"object"===s(t)&&"getContext"in t))throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");var i=t.getContext("2d");try{return i.getImageData(e,n,o,r)}catch(t){throw new Error("unable to access image data: "+t)}}var g=function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.r=0,this.g=0,this.b=0,this.a=0,this.next=null};new class{constructor(t){this.options={seletor:".p-load-image-container",width:4,height:3,radius:30,...t};const{width:e,height:n}=this.options;this.imgRatio=(n/e*100).toFixed(2),this.init()}init(){document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(this.options.seletor);Array.prototype.slice.apply(t).forEach(t=>{if(c())if(r(t,"avatar-img")){const e=t.querySelector("img"),n=`\n            <div style="padding-bottom: ${this.imgRatio}%;"></div>\n            <canvas></canvas>\n          `;t.innerHTML=t.innerHTML+n;const o=t.querySelector("canvas"),r=new Image;r.src=e.src,r.onload=()=>{d(e,o,this.options.radius),a(o,"loaded")}}else{const e=`\n            <div style="padding-bottom: ${this.imgRatio}%;"></div>\n          `;t.innerHTML=t.innerHTML+e}else{const e=t.querySelector("img"),n=`\n            <div style="padding-bottom: ${this.imgRatio}%;"></div>\n            <canvas></canvas>\n          `;t.innerHTML=t.innerHTML+n;const o=t.querySelector("canvas"),r=new Image;r.src=e.src,r.onload=()=>{d(e,o,this.options.radius),a(o,"loaded")}}const e=new Image;e.src=t.dataset.large,e.onload=()=>{a(e,"loaded")},t.appendChild(e)})})}}({width:300,height:300}),document.addEventListener("DOMContentLoaded",()=>{const t=o("body"),e=o(".nav-about"),n=o(".nav-project");c()&&t.setAttribute("id","mobileVersion"),window.addEventListener("load",()=>{const t=function(t){let e=t.offsetTop,n=t.offsetParent;for(;null!==n;)e+=n.offsetTop,n=n.offsetParent;return e}(o("#project"));window.addEventListener("scroll",()=>{console.log(window.scrollY,t,2999),window.scrollY>t-70?(i(e,"nav-active"),a(n,"nav-active")):(a(e,"nav-active"),i(n,"nav-active"))})})})}]);
//# sourceMappingURL=index.db16fea2.js.map