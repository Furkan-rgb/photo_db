(this.webpackJsonpphoto_db=this.webpackJsonpphoto_db||[]).push([[0],{95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),c=n.n(r),i=n(14),s=n.n(i),o=n(10),l=n(50),u=(n(97),n(98),n(88),l.a.initializeApp({apiKey:"AIzaSyDWXRfh9yAdeUc94EGY35pIw3gWc0gl0Wg",authDomain:"photodb-f65f0.firebaseapp.com",projectId:"photodb-f65f0",storageBucket:"photodb-f65f0.appspot.com",messagingSenderId:"1093378767797",appId:"1:1093378767797:web:e29681d7866b005b1df7fc"})),d=l.a.storage(),j=l.a.firestore(),p=l.a.firestore.FieldValue.serverTimestamp,b=u.auth(),m=c.a.createContext();function h(){return Object(r.useContext)(m)}function f(e){var t=e.children,n=Object(r.useState)(),c=Object(o.a)(n,2),i=c[0],s=c[1],l=Object(r.useState)(!0),u=Object(o.a)(l,2),d=u[0],j=u[1];Object(r.useEffect)((function(){return b.onAuthStateChanged((function(e){s(e),j(!1)}))}),[]);var p={currentUser:i,signup:function(e,t){return b.createUserWithEmailAndPassword(e,t)},login:function(e,t){return b.signInWithEmailAndPassword(e,t)},logout:function(){return b.signOut()},resetPassword:function(e){return b.sendPasswordResetEmail(e)},updateEmail:function(e){return b.currentUser.updateEmail(e)},updatePassword:function(e){return b.currentUser.updatePassword(e)},deleteAccount:function(){return b.currentUser.delete()},updateDisplayName:function(e){return b.currentUser.updateProfile({displayName:e})}};return Object(a.jsx)(m.Provider,{value:p,children:!d&&t})}var O=n(18),x=n.n(O),g=n(28),v=n(133),w=n(135),y=n(73),N=n(146),S=n(137),k=n(147),P=n(130),R=n(15),C=n(22),F=Object(P.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)},width:"80%"},container:{height:"100vh"},card:{width:"100%",marginBottom:10,paddingBottom:5},inputField:{width:"100%",maxWidth:350}}}));function I(){var e=F(),t=Object(r.useRef)(),n=Object(r.useRef)(),c=Object(r.useRef)(),i=Object(r.useRef)(),s=h().signup,l=Object(r.useState)(""),u=Object(o.a)(l,2),d=u[0],p=u[1],b=Object(r.useState)(!1),m=Object(o.a)(b,2),f=m[0],O=m[1],P=Object(R.g)(),I=j.collection("accounts");function U(){return(U=Object(g.a)(x.a.mark((function e(a){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.current.value===c.current.value){e.next=3;break}return e.abrupt("return",p("Passwords do not match"));case 3:return e.prev=3,p(""),O(!0),e.next=8,s(t.current.value,n.current.value);case 8:return r=e.sent,e.next=11,r.user.updateProfile({displayName:i.current.value});case 11:return console.log(r),e.next=14,I.doc(r.user.uid).set({userID:r.user.uid,userName:r.user.displayName});case 14:P.push("/"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),p(e.t0.message);case 20:O(!1);case 21:case"end":return e.stop()}}),e,null,[[3,17]])})))).apply(this,arguments)}return Object(a.jsx)(v.a,{container:!0,className:e.container,justify:"center",alignItems:"center",children:Object(a.jsxs)(v.a,{item:!0,xs:12,sm:6,children:[Object(a.jsx)(w.a,{className:e.card,children:Object(a.jsxs)(v.a,{container:!0,justify:"center",direction:"column",alignItems:"center",children:[Object(a.jsx)(y.a,{align:"center",variant:"h3",component:"h2",children:"Sign up"}),d&&Object(a.jsx)(k.a,{severity:"error",children:d}),Object(a.jsxs)("form",{onSubmit:function(e){return U.apply(this,arguments)},align:"center",className:e.root,children:[Object(a.jsxs)(v.a,{item:!0,children:[Object(a.jsx)(N.a,{className:e.inputField,required:!0,id:"display-name",label:"Display Name",inputRef:i,textalign:"center"}),Object(a.jsx)(N.a,{className:e.inputField,required:!0,id:"email-input",label:"Email",inputRef:t,textalign:"center"})]}),Object(a.jsx)(v.a,{item:!0,children:Object(a.jsx)(N.a,{className:e.inputField,required:!0,id:"password-input",label:"Password",type:"password",autoComplete:"current-password",inputRef:n})}),Object(a.jsx)(v.a,{item:!0,children:Object(a.jsx)(N.a,{className:e.inputField,required:!0,id:"password-confirm",label:"Password-confirm",type:"password",autoComplete:"current-password",inputRef:c})}),Object(a.jsx)(S.a,{disabled:f,variant:"contained",color:"primary",type:"submit",children:"Sign Up"})]})]})}),Object(a.jsxs)(y.a,{align:"center",variant:"subtitle1",component:"h2",children:["Already have an account? ",Object(a.jsx)(C.b,{to:"/login",children:"Log in"})]})]})})}var U=n(136),E=n(138),A=n(139),D=n(140),W=n(141),B=function(e){var t=Object(r.useState)(0),n=Object(o.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(null),s=Object(o.a)(i,2),l=s[0],u=s[1],b=Object(r.useState)(null),m=Object(o.a)(b,2),f=m[0],O=m[1],v=h().currentUser;return Object(r.useEffect)((function(){var t=d.ref(e.name),n=j.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){u(e)}),Object(g.a)(x.a.mark((function e(){var a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:a=e.sent,r=p(),n.add({url:a,createdAt:r,userID:v.uid}),O(a);case 6:case"end":return e.stop()}}),e)}))))}),[e,v]),{progress:a,url:f,error:l}},L=function(e){var t=e.file,n=e.setFile,c=B(t),i=c.url,s=c.progress;return console.log(s,i),Object(r.useEffect)((function(){i&&n(null)}),[i,n]),Object(a.jsx)("div",{className:"progress-bar",style:{width:s+"%"}})},q=n(30),T=function(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){var t=j.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(q.a)(Object(q.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:a}},z=function(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){var t=j.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(q.a)(Object(q.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs2:a}},V=function(){var e=T("images").docs,t=z("accounts").docs2;return console.log(t),Object(a.jsx)(v.a,{container:!0,justify:"center",children:e&&e.map((function(e){return Object(a.jsx)(v.a,{className:"img-item",item:!0,xs:12,md:6,lg:4,children:t&&t.filter((function(t){return e.userID===t.userID})).map((function(t){return Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:e.url,alt:"uploaded pic"}),Object(a.jsxs)(y.a,{variant:"subtitle1",children:[" By ",t.userName," "]})]})}))},e.id)}))})},_=n(149),J=n(142),G=n(143),H=n(144),K=n(145),M=Object(P.a)((function(e){return{internalCardContainer:{"& > *":{margin:e.spacing(0)},padding:5},mainContainer:{width:"100%"},input:{display:"none"},info:{width:"100%"},card:{width:"100%",maxWidth:600,marginTop:5,marginBottom:5},button:{paddingTop:5,paddingBottom:10},icon:{fontSize:"2em"}}}));function X(){var e=M(),t=Object(r.useState)(""),n=Object(o.a)(t,2),i=n[0],s=n[1],l=Object(R.g)(),u=h(),d=u.currentUser,j=u.logout,p=u.deleteAccount,b=c.a.useState(!1),m=Object(o.a)(b,2),f=m[0],O=m[1],N=function(){O(!1)};function P(){return(P=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(""),e.prev=1,e.next=4,j();case 4:l.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),s("Failed to logout");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function F(){return(F=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(""),e.prev=1,e.next=4,p();case 4:l.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),s(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}var I=Object(r.useState)(null),B=Object(o.a)(I,2),q=B[0],T=B[1],z=["image/png","image/jpeg"];return Object(a.jsxs)(v.a,{container:!0,justify:"center",children:[Object(a.jsx)(v.a,{item:!0,xs:12,sm:8,align:"center",children:Object(a.jsx)(w.a,{className:e.card,align:"center",children:Object(a.jsxs)(v.a,{container:!0,direction:"column",className:e.internalCardContainer,children:[Object(a.jsxs)(v.a,{item:!0,align:"center",children:[Object(a.jsx)(y.a,{align:"center",variant:"h2",children:"Storygram"}),Object(a.jsxs)(y.a,{variant:"h5",children:[d.displayName," "]})]}),Object(a.jsxs)(v.a,{item:!0,className:e.info,children:[i&&Object(a.jsx)(k.a,{severity:"error",children:i}),q&&Object(a.jsxs)(k.a,{severity:"info",children:["Selected image: ",q.name]})]}),q&&Object(a.jsx)(L,{align:"left",file:q,setFile:T}),Object(a.jsxs)(v.a,{container:!0,direction:"row",children:[Object(a.jsxs)(v.a,{item:!0,align:"center",className:e.button,xs:6,sm:3,children:[Object(a.jsx)("input",{accept:"image/*",className:e.input,id:"icon-button-file",type:"file",onChange:function(e){var t=e.target.files[0];t&&z.includes(t.type)?(T(t),s("")):(T(null),s("Please select an image file (png or jpeg)"))}}),Object(a.jsx)("label",{htmlFor:"icon-button-file",children:Object(a.jsx)(U.a,{color:"primary","aria-label":"upload picture",component:"span",children:Object(a.jsx)(E.a,{className:e.icon})})}),Object(a.jsx)(y.a,{children:"Upload an image"})]}),Object(a.jsxs)(v.a,{item:!0,align:"center",className:e.button,xs:6,sm:3,children:[Object(a.jsx)(U.a,{color:"primary","aria-label":"account",component:C.b,to:"./UpdateProfile",children:Object(a.jsx)(A.a,{className:e.icon})}),Object(a.jsx)(y.a,{children:"Update account"})]}),Object(a.jsxs)(v.a,{item:!0,align:"center",className:e.button,xs:6,sm:3,children:[Object(a.jsx)(U.a,{color:"primary","aria-label":"log out",onClick:function(){return P.apply(this,arguments)},component:"span",children:Object(a.jsx)(D.a,{className:e.icon})}),Object(a.jsx)(y.a,{children:"Log out"})]}),Object(a.jsxs)(v.a,{item:!0,align:"center",className:e.button,xs:6,sm:3,children:[Object(a.jsx)(U.a,{color:"secondary","aria-label":"log out",onClick:function(){O(!0)},component:"span",children:Object(a.jsx)(W.a,{className:e.icon})}),Object(a.jsx)(y.a,{children:"Delete Account"}),Object(a.jsxs)(_.a,{open:f,onClose:N,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(a.jsx)(J.a,{id:"alert-dialog-title",children:"Are you sure you want to delete your account?"}),Object(a.jsx)(G.a,{children:Object(a.jsx)(H.a,{id:"alert-dialog-description",children:"Deleting your account can not be undone."})}),Object(a.jsxs)(K.a,{children:[Object(a.jsx)(S.a,{onClick:N,color:"primary",children:"Cancel"}),Object(a.jsx)(S.a,{onClick:function(){return F.apply(this,arguments)},color:"primary",autoFocus:!0,children:"Delete"})]})]})]})]})]})})}),Object(a.jsx)(v.a,{item:!0,align:"center",children:Object(a.jsx)(V,{})})]})}var Y=Object(P.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)},width:"80%"},container:{height:"100vh"},card:{width:"100%",marginBottom:10,paddingBottom:5},inputField:{width:"100%",maxWidth:350}}}));function $(){var e=Y(),t=Object(r.useRef)(),n=Object(r.useRef)(),c=h().login,i=Object(r.useState)(""),s=Object(o.a)(i,2),l=s[0],u=s[1],d=Object(r.useState)(!1),j=Object(o.a)(d,2),p=j[0],b=j[1],m=Object(R.g)();function f(){return(f=Object(g.a)(x.a.mark((function e(a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,u(""),b(!0),e.next=6,c(t.current.value,n.current.value);case 6:m.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),u("Failed to log in");case 12:b(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(a.jsx)(v.a,{container:!0,className:e.container,justify:"center",alignItems:"center",children:Object(a.jsxs)(v.a,{item:!0,xs:12,sm:6,children:[Object(a.jsx)(w.a,{className:e.card,children:Object(a.jsxs)(v.a,{container:!0,justify:"center",direction:"column",alignItems:"center",children:[Object(a.jsx)(y.a,{align:"center",variant:"h3",component:"h2",children:"Login"}),l&&Object(a.jsx)(k.a,{severity:"error",children:l}),Object(a.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},align:"center",className:e.root,children:[Object(a.jsx)(v.a,{item:!0,children:Object(a.jsx)(N.a,{className:e.inputField,required:!0,id:"email-input",label:"Email",inputRef:t,textalign:"center"})}),Object(a.jsx)(v.a,{item:!0,children:Object(a.jsx)(N.a,{className:e.inputField,required:!0,id:"password-input",label:"Password",type:"password",autoComplete:"current-password",inputRef:n})}),Object(a.jsx)(S.a,{disabled:p,variant:"contained",color:"primary",type:"submit",children:"Login"}),Object(a.jsx)(y.a,{children:Object(a.jsx)(C.b,{to:"/forgot-password",children:"Forgot password?"})})]})]})}),Object(a.jsxs)(y.a,{align:"center",variant:"subtitle1",component:"h2",children:["Need an account? ",Object(a.jsx)(C.b,{to:"/signup",children:"Sign up"})]})]})})}var Q=Object(P.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)},width:"80%"},container:{height:"100vh"},card:{width:"100%",marginBottom:10,paddingBottom:5},inputField:{width:"100%",maxWidth:350}}}));function Z(){var e=Q(),t=Object(r.useRef)(),n=h().resetPassword,c=Object(r.useState)(""),i=Object(o.a)(c,2),s=i[0],l=i[1],u=Object(r.useState)(""),d=Object(o.a)(u,2),j=d[0],p=d[1],b=Object(r.useState)(!1),m=Object(o.a)(b,2),f=m[0],O=m[1];function P(){return(P=Object(g.a)(x.a.mark((function e(a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,p(""),l(""),O(!0),e.next=7,n(t.current.value);case 7:p("Check your email"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),l("Failed to reset password");case 13:O(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(a.jsx)(v.a,{container:!0,className:e.container,justify:"center",alignItems:"center",children:Object(a.jsxs)(v.a,{item:!0,xs:12,sm:6,children:[Object(a.jsx)(w.a,{className:e.card,children:Object(a.jsxs)(v.a,{container:!0,justify:"center",direction:"column",alignItems:"center",children:[Object(a.jsx)(y.a,{align:"center",variant:"h3",component:"h2",children:"Reset Password"}),s&&Object(a.jsx)(k.a,{severity:"error",children:s}),j&&Object(a.jsx)(k.a,{severity:"success",children:j}),Object(a.jsxs)("form",{onSubmit:function(e){return P.apply(this,arguments)},align:"center",className:e.root,children:[Object(a.jsx)(v.a,{item:!0,children:Object(a.jsx)(N.a,{className:e.inputField,required:!0,id:"email-input",label:"Email",inputRef:t,textalign:"center"})}),Object(a.jsx)(S.a,{disabled:f,variant:"contained",color:"primary",type:"submit",children:"Reset Password"}),Object(a.jsx)(y.a,{children:Object(a.jsx)(C.b,{to:"/login",children:"Login"})})]})]})}),Object(a.jsxs)(y.a,{align:"center",variant:"subtitle1",component:"h2",children:["Need an account? ",Object(a.jsx)(C.b,{to:"/signup",children:"Sign up"})]})]})})}var ee=Object(P.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)},width:"80%"},container:{height:"100vh"},card:{width:"100%",marginBottom:10,paddingBottom:5},inputField:{width:"100%",maxWidth:350}}}));function te(){var e=ee(),t=Object(r.useRef)(),n=Object(r.useRef)(),c=Object(r.useRef)(),i=Object(r.useRef)(),s=h(),l=s.currentUser,u=s.updatePassword,d=s.updateEmail,p=s.updateDisplayName,b=Object(r.useState)(""),m=Object(o.a)(b,2),f=m[0],O=m[1],x=Object(r.useState)(!1),g=Object(o.a)(x,2),P=g[0],F=g[1],I=Object(R.g)(),U=j.collection("accounts");return Object(a.jsx)(v.a,{container:!0,className:e.container,justify:"center",alignItems:"center",children:Object(a.jsxs)(v.a,{item:!0,xs:12,sm:6,children:[Object(a.jsx)(w.a,{className:e.card,children:Object(a.jsxs)(v.a,{container:!0,justify:"center",direction:"column",alignItems:"center",children:[Object(a.jsx)(y.a,{align:"center",variant:"h3",component:"h2",children:"Update Profile"}),f&&Object(a.jsx)(k.a,{severity:"error",children:f}),Object(a.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),n.current.value!==c.current.value)return O("Passwords do not match");var a=[];F(!0),O(""),t.current.value!==l.email&&a.push(d(t.current.value)),i.current.value!==l.displayName&&(a.push(p(i.current.value)),a.push(U.doc(l.uid).update({userName:i.current.value}))),n.current.value&&a.push(u(n.current.value)),Promise.all(a).then((function(){I.push("/")})).catch((function(e){O(e.message)})).finally((function(){F(!1)}))},align:"center",className:e.root,children:[Object(a.jsxs)(v.a,{item:!0,children:[Object(a.jsx)(N.a,{className:e.inputField,id:"display-name",label:"Display Name",inputRef:i,textalign:"center",defaultValue:l.displayName,placeholder:"Leave empty to keep the same",InputLabelProps:{shrink:!0}}),Object(a.jsx)(N.a,{className:e.inputField,required:!0,id:"email-input",label:"Email",inputRef:t,textalign:"center",defaultValue:l.email})]}),Object(a.jsx)(v.a,{item:!0,children:Object(a.jsx)(N.a,{className:e.inputField,id:"password-input",label:"Password",type:"password",autoComplete:"current-password",inputRef:n,placeholder:"Leave empty to keep the same",InputLabelProps:{shrink:!0}})}),Object(a.jsx)(v.a,{item:!0,children:Object(a.jsx)(N.a,{className:e.inputField,id:"password-confirm",label:"Password-confirm",type:"password",autoComplete:"current-password",inputRef:c,placeholder:"Leave empty to keep the same",InputLabelProps:{shrink:!0}})}),Object(a.jsx)(S.a,{disabled:P,variant:"contained",color:"primary",type:"submit",children:"Update"})]})]})}),Object(a.jsx)(y.a,{align:"center",variant:"subtitle1",component:"h2",children:Object(a.jsx)(C.b,{to:"/",children:"Cancel"})})]})})}var ne=n(71);function ae(e){var t=e.component,n=Object(ne.a)(e,["component"]),r=h().currentUser;return Object(a.jsx)(R.b,Object(q.a)(Object(q.a)({},n),{},{render:function(e){return r?Object(a.jsx)(t,Object(q.a)({},e)):Object(a.jsx)(R.a,{to:"/login"})}}))}var re=Object(P.a)((function(e){return{container:{minHeight:"100vh",width:"100vw"}}}));var ce=function(){var e=re();return Object(a.jsx)(v.a,{container:!0,className:e.container,children:Object(a.jsx)(C.a,{basename:"/storygram",children:Object(a.jsx)(f,{children:Object(a.jsxs)(R.d,{children:[Object(a.jsx)(ae,{exact:!0,path:"/",component:X}),Object(a.jsx)(ae,{exact:!0,path:"/UpdateProfile",component:te}),Object(a.jsx)(R.b,{path:"/signup",component:I}),Object(a.jsx)(R.b,{path:"/login",component:$}),Object(a.jsx)(R.b,{path:"/forgot-password",component:Z})]})})})})},ie=(n(95),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function se(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(ce,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/storygram",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/storygram","/service-worker.js");ie?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):se(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):se(t,e)}))}}()}},[[96,1,2]]]);
//# sourceMappingURL=main.556efdaf.chunk.js.map