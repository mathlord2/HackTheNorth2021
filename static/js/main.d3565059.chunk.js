(this["webpackJsonpapp-template"]=this["webpackJsonpapp-template"]||[]).push([[0],{164:function(t,e){},271:function(t,e,n){},272:function(t,e,n){},296:function(t,e){},297:function(t,e){},298:function(t,e){},299:function(t,e){},300:function(t,e){},306:function(t,e){},307:function(t,e){},315:function(t,e){},316:function(t,e,n){},319:function(t,e,n){"use strict";n.r(e);var i=n(7),a=n.n(i),r=n(225),o=n.n(r),s=(n(271),n(272),n(273),n(156)),u=n(37),l=n(12),c=n(159),h=(n(303),n(249)),d="#1c47be",f="5px 5px 40px #444444",p=n(20),b=function(t){return Object(p.jsxs)("div",{style:{margin:"15px 0px"},children:[Object(p.jsx)(h.a,{style:{position:"absolute",marginLeft:"10px",fontSize:"20px"}}),Object(p.jsx)("input",{type:"file",id:"button",hidden:!0,onChange:t.onChange,accept:t.accept}),Object(p.jsx)("label",{htmlFor:"button",style:{padding:"10px",paddingLeft:"35px",border:"3px solid "+d,borderRadius:"15px",textAlign:"left",width:t.width,height:t.height,marginRight:"20px",boxShadow:f,cursor:"pointer"},children:t.text}),Object(p.jsx)("span",{id:"file-chosen",children:t.file?t.file.name:"No file chosen"})]})},g=function(t){return Object(p.jsx)("button",{onClick:t.onClick,style:{borderRadius:"20px",backgroundColor:t.background?t.background:d,boxShadow:f,color:"white",fontSize:t.size,padding:t.padding?t.padding:"10px 20px",border:"none",margin:t.margin?t.margin:0},disabled:t.disabled,children:t.text})},m=function(t){return Object(p.jsx)("input",{placeholder:t.placeholder,value:t.value,onChange:t.onChange,type:t.type,style:{padding:"10px",border:"3px solid "+d,borderRadius:"15px",textAlign:"left",width:t.width,height:t.height,marginRight:t.margin,boxShadow:f}})},y=n(8),w=n.n(y),x=n(21),v=n(38),j=n(13);function O(t,e,n,i,a,r,o,s){r||(r={}),t.save(),t.beginPath(),t.arc(e,n,i,s||0,o||2*Math.PI,!1),t.fillStyle=a||"red",t.globalAlpha=r.alpha||1,r.glow&&(t.shadowBlur=r.glowWidth||100),r.glowColor&&(t.shadowColor=r.glowColor||"aqua"),(r.fill||void 0===r.fill)&&t.fill(),t.shadowBlur=0,t.lineWidth=r.outlineWidth||1,t.strokeStyle=r.outlineColor||"black",r.outline&&t.stroke(),t.closePath(),t.restore()}function A(t,e,n,i,a,r,o,s,u){t.beginPath(),t.lineWidth=o,t.moveTo(e,n),t.lineTo(i,a),t.globalAlpha=u||1,t.strokeStyle=r||"black",t.lineCap=s||"default",t.stroke(),t.globalAlpha=1,t.closePath()}function k(t,e,n,i,a,r,o){o||(o={}),t.save(),t.translate(e,n),t.beginPath(),t.rect(0,0,i,a),t.fillStyle=r||"black",t.globalAlpha=o.alpha||1,(void 0===o.fill||o.fill)&&t.fill(),t.strokeStyle=o.outlineColor||"black",t.lineWidth=o.outlineWidth||1,o.outline&&t.stroke(),t.closePath(),t.restore()}function C(t,e,n,i,a,r,o,s,u){var l={};a instanceof Object&&(l=a),t.beginPath(),t.font=l.font||a||"20px Arial",t.fillStyle=l.color||r||"red",t.textAlign=l.align||o||"default",t.globalAlpha=u||1,t.textBaseline=l.baseline||s||"default",t.fillText(e,n,i),t.globalAlpha=1,t.closePath()}var S=n(14),I=n(15),W=function(){function t(e,n){Object(S.a)(this,t),this.rows=e,this.cols=n,this.data=[];for(var i=0;i<this.rows;i++){this.data[i]=[];for(var a=0;a<this.cols;a++)this.data[i][a]=0}}return Object(I.a)(t,[{key:"multiply",value:function(e){if(e instanceof t)for(var n=0;n<this.rows;n++)for(var i=0;i<this.cols;i++)this.data[n][i]*=e.data[n][i];else for(n=0;n<this.rows;n++)for(i=0;i<this.cols;i++)this.data[n][i]*=e}},{key:"add",value:function(e){if(e instanceof t)for(var n=0;n<this.rows;n++)for(var i=0;i<this.cols;i++)this.data[n][i]+=e.data[n][i];else for(n=0;n<this.rows;n++)for(i=0;i<this.cols;i++)this.data[n][i]+=e}},{key:"subtract",value:function(e){if(e instanceof t)for(var n=0;n<this.rows;n++)for(var i=0;i<this.cols;i++)this.data[n][i]-=e.data[n][i];else for(n=0;n<this.rows;n++)for(i=0;i<this.cols;i++)this.data[n][i]-=e}},{key:"toArray",value:function(){for(var t=[],e=0;e<this.rows;e++)for(var n=0;n<this.cols;n++)t.push(this.data[e][n]);return t}},{key:"randomize",value:function(){for(var t=0;t<this.rows;t++)for(var e=0;e<this.cols;e++)this.data[t][e]=2*Math.random()-1}},{key:"product",value:function(e){if(e instanceof t){if(this.cols!==e.rows)return;for(var n=new t(this.rows,e.cols),i=e,a=0;a<n.rows;a++)for(var r=0;r<n.cols;r++){for(var o=0,s=0;s<this.cols;s++)o+=this.data[a][s]*i.data[s][r];n.data[a][r]=o}return n}}},{key:"map",value:function(t){for(var e=0;e<this.rows;e++)for(var n=0;n<this.cols;n++)this.data[e][n]=t(this.data[e][n],e,n)}},{key:"print",value:function(){console.table(this.data)}},{key:"serialize",value:function(){return JSON.stringify(this)}}],[{key:"multiply",value:function(e,n){if(e.cols===n.rows){var i=new t(e.rows,n.cols);return i.map((function(t,i,a){for(var r=0,o=0;o<e.cols;o++)r+=e.data[i][o]*n.data[o][a];return r})),i}console.log("Cols of A don't match Rows of B")}},{key:"subtract",value:function(e,n){if(e.rows===n.rows&&e.cols===n.cols){var i=new t(e.rows,e.cols);return i.map((function(t,i,a){return e.data[i][a]-n.data[i][a]})),i}console.log("Columns and Rows of A must match Columns and Rows of B.")}},{key:"fromArray",value:function(e){for(var n=new t(e.length,1),i=0;i<e.length;i++)n.data[i][0]=e[i];return n}},{key:"from2DArray",value:function(e){for(var n=new t(e.length,e[0].length),i=0;i<e.length;i++)for(var a=0;a<e[i].length;a++)n.data[i][a]=e[i][a];return n}},{key:"transpose",value:function(e){for(var n=new t(e.cols,e.rows),i=0;i<e.rows;i++)for(var a=0;a<e.cols;a++)n.data[a][i]=e.data[i][a];return n}},{key:"map",value:function(e,n){for(var i=new t(e.rows,e.cols),a=0;a<e.rows;a++)for(var r=0;r<e.cols;r++){var o=e.data[a][r];i.data[a][r]=n(o)}return i}},{key:"deserialize",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var n=new t(e.rows,e.cols);return n.data=e.data,n}}]),t}();function E(t){return 1/(1+Math.exp(-t))}function B(t){return t*(1-t)}var R=function(){function t(e,n,i){if(Object(S.a)(this,t),e instanceof t){var a=e;this.numInput=a.numInput,this.numHidden=a.numHidden,this.numOutput=a.numOutput,this.inputWeights=a.inputWeights.copy(),this.hiddenWeights=a.hiddenWeights.copy(),this.hiddenBias=a.hiddenBias.copy(),this.outputBias=a.outputBias.copy()}else this.numInput=e,this.numHidden=n,this.numOutput=i,this.inputWeights=new W(this.numHidden,this.numInput),this.hiddenWeights=new W(this.numOutput,this.numHidden),this.inputWeights.randomize(),this.hiddenWeights.randomize(),this.hiddenBias=new W(this.numHidden,1),this.outputBias=new W(this.numOutput,1),this.hiddenBias.randomize(),this.outputBias.randomize();this.lr=1}return Object(I.a)(t,[{key:"feedForward",value:function(t){var e=W.fromArray(t),n=W.multiply(this.inputWeights,e);n.add(this.hiddenBias),n.map(E);var i=W.multiply(this.hiddenWeights,n);return i.add(this.outputBias),i.map(E),i.toArray()}},{key:"train",value:function(t,e){var n=W.fromArray(t),i=W.multiply(this.inputWeights,n);i.add(this.hiddenBias),i.map(E);var a=W.multiply(this.hiddenWeights,i);a.add(this.outputBias),a.map(E);var r=W.fromArray(e),o=W.subtract(r,a),s=W.map(a,B);s.multiply(o),s.multiply(this.lr);var u=W.transpose(i),l=W.multiply(s,u);this.hiddenWeights.add(l),this.outputBias.add(s);var c=W.transpose(this.hiddenWeights),h=W.multiply(c,o),d=W.map(i,B);d.multiply(h),d.multiply(this.lr);var f=W.transpose(n),p=W.multiply(d,f);this.inputWeights.add(p),this.hiddenBias.add(d)}},{key:"serialize",value:function(){return JSON.stringify(this)}},{key:"copy",value:function(){return new t(this)}},{key:"mutate",value:function(t){function e(e){return Math.random()<t?2*Math.random()-1:e}this.inputWeights.map(e),this.hiddenWeights.map(e),this.hiddenBias.map(e),this.outputBias.map(e)}}],[{key:"deserialize",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var n=new t(e.input_nodes,e.hidden_nodes,e.output_nodes);return n.inputWeights=W.deserialize(e.inputWeights),n.hiddenWeights=W.deserialize(e.hiddenWeights),n.hiddenBias=W.deserialize(e.hiddenBias),n.outputBias=W.deserialize(e.outputBias),n.lr=e.lr,n}}]),t}(),N=n(154),H=n.n(N),M=n(226),D=n.n(M),F=n(148),Y=n(247),z=n.n(Y),L=a.a.forwardRef((function(t,e){return Object(p.jsx)("canvas",{ref:e,style:{position:"absolute",right:0,zIndex:15}})})),T=new R(10,64,3);D.a.getJSON("./models/scene (3).json",(function(t){T=R.deserialize(t),console.log("Loaded Neural Network")}));var U=function(t){var e=Object(i.useRef)(),n=Object(i.useRef)(),a=Object(i.useState)(t.videoOn),r=Object(l.a)(a,2),o=r[0],s=r[1],u=Object(i.useRef)({});Object(i.useEffect)((function(){return s(t.videoOn),f(),function(){return cancelAnimationFrame(u.current)}}),[t.videoOn]);var c={height:300,width:500,facingMode:"environment"},h=[],d="waiting";var f=function(){var e=Object(j.a)(w.a.mark((function e(){var i,a,r,s,l,f,p,b,g,m,y,S,I,W,E,B,R,N;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N=function(){u.current=requestAnimationFrame(N),E=Date.now(),window.delta=E-B,window.delta>R&&(B=E-window.delta%R,o&&setTimeout((function(){return I()}),1e3))},W=function(){return(W=Object(j.a)(w.a.mark((function e(){var n,o,u,c,m,j,C,I,W,E,B,R,N,M,D,F,Y,z,L,U,J;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.estimatePoses(b);case 2:if(n=e.sent,!p){e.next=28;break}if(g.clearRect(0,0,p.width,p.height),n[0]){e.next=7;break}return e.abrupt("return");case 7:o=n[0].keypoints,u={},r=[],j=Object(v.a)(o);try{for(j.s();!(C=j.n()).done;)"left_ear"===(I=C.value).name?((c={x:I.x,y:I.y}).x=(p.width-c.x-(p.width-i))*(p.width/i),c.y=c.y*(p.height/a)):"right_ear"===I.name&&((m={x:I.x,y:I.y}).x=(p.width-m.x-(p.width-i))*(p.width/i),m.y=m.y*(p.height/a))}catch(w){j.e(w)}finally{j.f()}W=Math.abs(m.x-c.x)+50,E=Math.abs(m.y-c.y)+100,k(g,c.x-25,Math.min(c.y,m.y)-50,W,E,"blue",{fill:!1,outline:!0,outlineWidth:5,outlineColor:"blue"}),B=Object(v.a)(o);try{for(B.s();!(R=B.n()).done;)N=R.value,["nose","left_ear","right_ear","left_eye","right_eye"].includes(N.name)&&(r.push((N.x-c.x+25)/W),r.push((N.y-c.y+50)/E),N.x=(p.width-N.x-(p.width-i))*(p.width/i),N.y=N.y*(p.height/a),u[N.name]=N)}catch(w){B.e(w)}finally{B.f()}for("collecting"===d&&h.push(r),M=0,D=Object.keys(u);M<D.length;M++)F=D[M],S[F]?(S[F].x=u[F].x,S[F].y=u[F].y):S[F]=H()({x:u[F].x,y:u[F].y},50);for(Y=T.feedForward(r),f=Y.indexOf(Math.max.apply(Math,Object(x.a)(Y))),0===s&&f>0&&Date.now()-l>400&&(1===f?t.increment():2===f&&t.decrement(),l=Date.now()),s=f,A(g,S.left_ear.x,S.left_ear.y,S.left_eye.x,S.left_eye.y,"lime",4),A(g,S.left_eye.x,S.left_eye.y,S.nose.x,S.nose.y,"lime",4),A(g,S.nose.x,S.nose.y,S.right_eye.x,S.right_eye.y,"lime",4),A(g,S.right_eye.x,S.right_eye.y,S.right_ear.x,S.right_ear.y,"lime",4),z=0,L=Object.keys(S);z<L.length;z++)U=L[z],J=S[U],O(g,J.x,J.y,5),u[J.name]=J;case 28:case"end":return e.stop()}}),e)})))).apply(this,arguments)},I=function(){return W.apply(this,arguments)},i=500,a=300,r=[],0,s=void 0,l=Date.now(),!1,!1,f=0,p=n.current,b=document.getElementById("webcam"),g=p.getContext("2d"),m={modelType:F.c.modelType.SINGLEPOSE_THUNDER},e.next=18,F.b(F.a.MoveNet,m);case 18:y=e.sent,p.width=c.width,p.height=c.height,H()(0),S={},C(g,"Wait for face markers before starting.",20,20,"20px Helvetica","orange","left","top"),1e3,B=Date.now(),R=1,window.delta=0,[],N();case 30:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{style:{position:"absolute",right:0,top:100,zIndex:10},children:[Object(p.jsx)(z.a,{id:"webcam",audio:!1,ref:e,style:{transform:"rotateY(180deg)"},videoConstraints:c}),Object(p.jsx)(L,{id:"canvas",ref:n})]})},J=(n(316),{cMapUrl:"cmaps/",cMapPacked:SVGComponentTransferFunctionElement}),Q=new(window.SpeechRecognition||window.webkitSpeechRecognition);Q.continuous=!0,Q.interimResults=!0,Q.lang="en-US";var P=function(t){var e=Object(i.useState)(null),n=Object(l.a)(e,2),a=n[0],r=n[1],o=Object(i.useState)(1),s=Object(l.a)(o,2),u=s[0],h=s[1],d=Object(i.useState)(1),f=Object(l.a)(d,2),y=f[0],w=f[1],x=Object(i.useState)(!1),v=Object(l.a)(x,2),j=v[0],O=v[1],A=Object(i.useState)(""),k=Object(l.a)(A,2),C=k[0],S=k[1],I=Object(i.useRef)({});I.current=u;var W=Object(i.useRef)({});W.current=y;var E=Object(i.useRef)({});E.current=C,Object(i.useEffect)((function(){B()}),[j]);var B=function(){j?(Q.start(),Q.onend=function(){Q.start()}):(Q.stop(),Q.onend=function(){console.log("Stopped Mic.")}),Q.onresult=function(t){var e=Array.from(t.results).map((function(t){return t[0]})).map((function(t){return t.transcript})).join(""),n=t.results.length,i=t.results[n-1][0].transcript.trim();e!==E.current&&(S(e),R(i)),Q.onerror=function(t){console.log(t.error)}}},R=function(t){["forward","next","right"].includes(t.toLowerCase().trim())&&I.current!==W.current?h((function(t){return t+1})):["backward","previous","back","left"].includes(t.toLowerCase().trim())&&1!==I.current&&h((function(t){return t-1}))};return Object(p.jsxs)("div",{className:"page",children:[Object(p.jsx)("div",{style:{padding:"5vh 0px"}}),Object(p.jsx)(b,{text:"Open Document",size:"18px",onChange:function(t){h(1),r(t.target.files[0])},file:a,accept:".pdf"}),a&&Object(p.jsx)(g,{text:j?"Turn off camera":"Turn on camera",margin:"10px 0px",onClick:function(){O(!j)}}),a&&Object(p.jsxs)("div",{style:{marginTop:"5vh"},children:[Object(p.jsxs)("div",{style:{display:"inline-block",margin:"5px 0px"},children:[1!==u&&Object(p.jsx)(g,{onClick:function(){return h(u-1)},text:"Left"}),Object(p.jsx)(m,{type:"number",value:u,onChange:function(t){1<=parseInt(t.target.value)&&parseInt(t.target.value)<=y&&h(parseInt(t.target.value))}}),u!==y&&Object(p.jsx)(g,{onClick:function(){return h(u+1)},text:"Right"})]}),Object(p.jsx)(c.a,{file:a,onLoadSuccess:function(t){var e=t.numPages;w(e)},options:J,children:Object(p.jsx)(c.b,{pageNumber:u,className:"pdf"})}),j&&Object(p.jsx)(U,{increment:function(){I.current<y&&h((function(t){return t+1}))},decrement:function(){I.current>1&&h((function(t){return t-1}))},videoOn:j})]})]})};var q=function(){return Object(p.jsxs)(s.a,{children:[Object(p.jsx)("ul",{className:"navbar",children:Object(p.jsx)("li",{id:"logo",children:Object(p.jsxs)(s.b,{exact:!0,to:"/",className:"link",activeClassName:"activeLink",children:[Object(p.jsx)("img",{src:"data:image/png;base64,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",alt:"Logo"})," Home"]})})}),Object(p.jsx)(u.c,{children:Object(p.jsx)(u.a,{exact:!0,path:"/",children:Object(p.jsx)(P,{})})})]})},G=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,320)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),i(t),a(t),r(t),o(t)}))};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root")),G()}},[[319,1,2]]]);
//# sourceMappingURL=main.d3565059.chunk.js.map