!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=4)}([function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0),n(1),n(2),n(3);const o=(t,e=document)=>e.querySelector(t);function r(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}function a(t,e){r(t,e)&&(t.className=t.className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)")," "))}function i(t,e){r(t,e)||(t.className+=" "+e)}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],l=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function u(t,e,n,o){if("string"==typeof t&&(t=document.getElementById(t)),t&&"naturalWidth"in t){var r=t.naturalWidth,a=t.naturalHeight;if("string"==typeof e&&(e=document.getElementById(e)),e&&"getContext"in e){e.style.width=r+"px",e.style.height=a+"px",e.width=r,e.height=a;var i=e.getContext("2d");i.clearRect(0,0,r,a),i.drawImage(t,0,0),isNaN(n)||n<1||(o?function(t,e,n,o,r,a){if(!(isNaN(a)||a<1)){a|=0;var i=f(t,e,n,o,r);i=function(t,e,n,o,r,a){var i,c,u,f,g,p,v,y,b,h,m,x,w,S,E,C,M,I,P,j,L,N,O,T,q,B=t.data,R=2*a+1,_=o-1,A=r-1,D=a+1,H=D*(D+1)/2,W=new d,$=W;for(u=1;u<R;u++)$=$.next=new d,u===D&&(q=$);$.next=W;var Y=null,k=null;v=p=0;var F=s[a],G=l[a];for(c=0;c<r;c++){for(C=M=I=P=y=b=h=m=0,x=D*(j=B[p]),w=D*(L=B[p+1]),S=D*(N=B[p+2]),E=D*(O=B[p+3]),y+=H*j,b+=H*L,h+=H*N,m+=H*O,$=W,u=0;u<D;u++)$.r=j,$.g=L,$.b=N,$.a=O,$=$.next;for(u=1;u<D;u++)f=p+((_<u?_:u)<<2),y+=($.r=j=B[f])*(T=D-u),b+=($.g=L=B[f+1])*T,h+=($.b=N=B[f+2])*T,m+=($.a=O=B[f+3])*T,C+=j,M+=L,I+=N,P+=O,$=$.next;for(Y=W,k=q,i=0;i<o;i++)B[p+3]=O=m*F>>G,0!==O?(O=255/O,B[p]=(y*F>>G)*O,B[p+1]=(b*F>>G)*O,B[p+2]=(h*F>>G)*O):B[p]=B[p+1]=B[p+2]=0,y-=x,b-=w,h-=S,m-=E,x-=Y.r,w-=Y.g,S-=Y.b,E-=Y.a,f=v+((f=i+a+1)<_?f:_)<<2,y+=C+=Y.r=B[f],b+=M+=Y.g=B[f+1],h+=I+=Y.b=B[f+2],m+=P+=Y.a=B[f+3],Y=Y.next,x+=j=k.r,w+=L=k.g,S+=N=k.b,E+=O=k.a,C-=j,M-=L,I-=N,P-=O,k=k.next,p+=4;v+=o}for(i=0;i<o;i++){for(M=I=P=C=b=h=m=y=0,x=D*(j=B[p=i<<2]),w=D*(L=B[p+1]),S=D*(N=B[p+2]),E=D*(O=B[p+3]),y+=H*j,b+=H*L,h+=H*N,m+=H*O,$=W,u=0;u<D;u++)$.r=j,$.g=L,$.b=N,$.a=O,$=$.next;for(g=o,u=1;u<=a;u++)p=g+i<<2,y+=($.r=j=B[p])*(T=D-u),b+=($.g=L=B[p+1])*T,h+=($.b=N=B[p+2])*T,m+=($.a=O=B[p+3])*T,C+=j,M+=L,I+=N,P+=O,$=$.next,u<A&&(g+=o);for(p=i,Y=W,k=q,c=0;c<r;c++)B[3+(f=p<<2)]=O=m*F>>G,O>0?(O=255/O,B[f]=(y*F>>G)*O,B[f+1]=(b*F>>G)*O,B[f+2]=(h*F>>G)*O):B[f]=B[f+1]=B[f+2]=0,y-=x,b-=w,h-=S,m-=E,x-=Y.r,w-=Y.g,S-=Y.b,E-=Y.a,f=i+((f=c+D)<A?f:A)*o<<2,y+=C+=Y.r=B[f],b+=M+=Y.g=B[f+1],h+=I+=Y.b=B[f+2],m+=P+=Y.a=B[f+3],Y=Y.next,x+=j=k.r,w+=L=k.g,S+=N=k.b,E+=O=k.a,C-=j,M-=L,I-=N,P-=O,k=k.next,p+=o}return t}(i,0,0,o,r,a),t.getContext("2d").putImageData(i,e,n)}}(e,0,0,r,a,n):function(t,e,n,o,r,a){if(!(isNaN(a)||a<1)){a|=0;var i=f(t,e,n,o,r);i=function(t,e,n,o,r,a){var i,c,u,f,g,p,v,y,b,h,m,x,w,S,E,C,M,I,P,j,L,N=t.data,O=2*a+1,T=o-1,q=r-1,B=a+1,R=B*(B+1)/2,_=new d,A=_;for(u=1;u<O;u++)A=A.next=new d,u===B&&(L=A);A.next=_;var D=null,H=null;v=p=0;var W=s[a],$=l[a];for(c=0;c<r;c++){for(S=E=C=y=b=h=0,m=B*(M=N[p]),x=B*(I=N[p+1]),w=B*(P=N[p+2]),y+=R*M,b+=R*I,h+=R*P,A=_,u=0;u<B;u++)A.r=M,A.g=I,A.b=P,A=A.next;for(u=1;u<B;u++)f=p+((T<u?T:u)<<2),y+=(A.r=M=N[f])*(j=B-u),b+=(A.g=I=N[f+1])*j,h+=(A.b=P=N[f+2])*j,S+=M,E+=I,C+=P,A=A.next;for(D=_,H=L,i=0;i<o;i++)N[p]=y*W>>$,N[p+1]=b*W>>$,N[p+2]=h*W>>$,y-=m,b-=x,h-=w,m-=D.r,x-=D.g,w-=D.b,f=v+((f=i+a+1)<T?f:T)<<2,y+=S+=D.r=N[f],b+=E+=D.g=N[f+1],h+=C+=D.b=N[f+2],D=D.next,m+=M=H.r,x+=I=H.g,w+=P=H.b,S-=M,E-=I,C-=P,H=H.next,p+=4;v+=o}for(i=0;i<o;i++){for(E=C=S=b=h=y=0,m=B*(M=N[p=i<<2]),x=B*(I=N[p+1]),w=B*(P=N[p+2]),y+=R*M,b+=R*I,h+=R*P,A=_,u=0;u<B;u++)A.r=M,A.g=I,A.b=P,A=A.next;for(g=o,u=1;u<=a;u++)p=g+i<<2,y+=(A.r=M=N[p])*(j=B-u),b+=(A.g=I=N[p+1])*j,h+=(A.b=P=N[p+2])*j,S+=M,E+=I,C+=P,A=A.next,u<q&&(g+=o);for(p=i,D=_,H=L,c=0;c<r;c++)N[f=p<<2]=y*W>>$,N[f+1]=b*W>>$,N[f+2]=h*W>>$,y-=m,b-=x,h-=w,m-=D.r,x-=D.g,w-=D.b,f=i+((f=c+B)<q?f:q)*o<<2,y+=S+=D.r=N[f],b+=E+=D.g=N[f+1],h+=C+=D.b=N[f+2],D=D.next,m+=M=H.r,x+=I=H.g,w+=P=H.b,S-=M,E-=I,C-=P,H=H.next,p+=o}return t}(i,0,0,o,r,a),t.getContext("2d").putImageData(i,e,n)}}(e,0,0,r,a,n))}}}function f(t,e,n,o,r){if("string"==typeof t&&(t=document.getElementById(t)),!(t&&"object"===c(t)&&"getContext"in t))throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");var a=t.getContext("2d");try{return a.getImageData(e,n,o,r)}catch(t){throw new Error("unable to access image data: "+t)}}var d=function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.r=0,this.g=0,this.b=0,this.a=0,this.next=null};new class{constructor(t){this.options={seletor:".p-load-image-container",width:4,height:3,radius:30,...t};const{width:e,height:n}=this.options;this.imgRatio=(n/e*100).toFixed(2),this.init()}init(){document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(this.options.seletor);Array.prototype.slice.apply(t).forEach(t=>{if(navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile|Windows Phone/i)){if(r(t,"avatar-img")){const e=t.querySelector("img"),n=`\n            <div style="padding-bottom: ${this.imgRatio}%;"></div>\n            <canvas></canvas>\n          `;t.innerHTML=t.innerHTML+n;const o=t.querySelector("canvas"),r=new Image;r.src=e.src,r.onload=()=>{u(e,o,this.options.radius),i(o,"loaded")}}}else{const e=t.querySelector("img"),n="\n            <canvas></canvas>\n          ";t.innerHTML=t.innerHTML+n;const o=t.querySelector("canvas"),r=new Image;r.src=e.src,r.onload=()=>{u(e,o,this.options.radius),i(o,"loaded")}}const e=new Image;e.src=t.dataset.large,e.onload=()=>{i(e,"loaded")},t.appendChild(e)})})}}({width:300,height:300}),document.addEventListener("DOMContentLoaded",()=>{const t=o(".nav-about"),e=o(".nav-project");window.addEventListener("load",()=>{const n=function(t){let e=t.offsetTop,n=t.offsetParent;for(;null!==n;)e+=n.offsetTop,n=n.offsetParent;return e}(o("#project"));window.addEventListener("scroll",()=>{console.log(window.scrollY,n,2999),window.scrollY>n-70?(a(t,"nav-active"),i(e,"nav-active")):(i(t,"nav-active"),a(e,"nav-active"))})})})}]);
//# sourceMappingURL=index.d0e403a4.js.map