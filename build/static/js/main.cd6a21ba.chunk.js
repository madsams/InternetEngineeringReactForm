(this["webpackJsonpform-react"]=this["webpackJsonpform-react"]||[]).push([[0],{128:function(e,t,n){e.exports=n(168)},135:function(e,t,n){},168:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o);n(133),n(134),n(135),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i,l=n(217),u=n(68),s=n(115),m=Object(s.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:u.a.A400},background:{default:"#fff"}}}),f=n(218),E=n(42),d=n(77),O=n(11),b=n(201),g=n(204),v=n(205),p=n(71),R=n(110),_=n.n(R),S=function(e){var t=e.text,n=e.isHome,a=Object(O.f)();return r.a.createElement(b.a,{position:"sticky"},r.a.createElement(g.a,null,!n&&r.a.createElement(v.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:a.goBack},r.a.createElement(_.a,null)),r.a.createElement(p.a,null,t)))};!function(e){e.forms="/api/forms"}(i||(i={}));var h,j=i,T=n(51),M=n.n(T),C={showCloseButton:!1,closeOnToastrClick:!0};!function(e){e.LIGHT="light",e.MESSAGE="message",e.INFO="info",e.SUCCESS="success",e.WARNING="warning",e.ERROR="error"}(h||(h={}));var F=function(e,t,n){return T.toastr[n](e,t,C)},I=n(14),L=n(47),N=n.n(L),y=n(69),D=n(111),G=n.n(D).a.create({baseURL:"http://localhost:3001",timeout:7e3,params:{},headers:{Accept:"application/json","Content-Type":"application/json"}});G.interceptors.request.use(function(){var e=Object(y.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(">>>>>>>>>>>>",t),e.abrupt("return",Promise.resolve(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),G.interceptors.response.use((function(e){return console.log("<<<<<<<<<<<",e),Promise.resolve(e)}),function(){var e=Object(y.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("<<<<<<error<<<<<",t.response?Object(I.a)({},t.response):Object(I.a)({},t)),e.abrupt("return",Promise.reject(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var A,k=function(e){return function(){var t=Object(y.a)(N.a.mark((function t(n){var a,r,o,c,i,l,u,s,m,f,E,d,O,b,g,v,p,R,_,S,j,T,M,C,I,L,y;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.method,r=e.data,o=void 0===r?{}:r,c=e.params,i=void 0===c?{}:c,l=e.url,u=e.timeout,s=void 0===u?7e3:u,m=e.headers,f=e.toastTitle,E=void 0===f?"":f,d=e.successToastMessage,O=e.failToastMessage,b=void 0===O?"\u0644\u0637\u0641\u0627 \u0627\u062a\u0635\u0627\u0644 \u062e\u0648\u062f \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f":O,g=e.errorCodes,v=void 0===g?[]:g,p=e.resolve,R=e.reject,_=e.pendingAction,S=e.errorAction,j=e.successAction,T=e.callback,_&&n(_()),t.prev=2,t.next=5,G.request({url:l,method:a,headers:m,data:o,timeout:s,params:i});case 5:M=t.sent,p&&p(M),j&&n(j(M.data.data)),d&&F(E,d,h.SUCCESS),t.next=17;break;case 11:t.prev=11,t.t0=t.catch(2),C=!t.t0.config,I=!t.t0.response,"ECONNABORTED"===t.t0.code?S&&n(S(b)):C||(L=!1,I||(y=t.t0.response.status,v.forEach((function(e){y!==e.code||L||(e.toastMessage&&F(E,e.toastMessage,h.ERROR),e.action&&e.action(t.t0),L=!0)}))),L||(R?R(t.t0):(S&&n(S(b)),F(E,b,h.ERROR))));case 17:T&&T();case 18:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()};!function(e){e.GET_FORM_DETAIL_SUCCESS="GET_FORM_DETAIL_SUCCESS",e.GET_FORM_DETAIL_PENDING="GET_FORM_DETAIL_PENDING",e.GET_FORM_DETAIL_ERROR="GET_FORM_DETAIL_ERROR",e.SUBMIT_FORM_SUCCESS="SUBMIT_FORM_SUCCESS",e.SUBMIT_FORM_PENDING="SUBMIT_FORM_PENDING",e.SUBMIT_FORM_ERROR="SUBMIT_FORM_ERROR"}(A||(A={}));var B,U=A,x=function(e){return{type:U.GET_FORM_DETAIL_SUCCESS,payload:e}},w=function(){return{type:U.GET_FORM_DETAIL_PENDING}},P=function(){return{type:U.GET_FORM_DETAIL_ERROR}},q=function(){return{type:U.SUBMIT_FORM_SUCCESS}},W=function(){return{type:U.SUBMIT_FORM_PENDING}},H=function(){return{type:U.SUBMIT_FORM_ERROR}},z=n(206),J=function(e){var t=e.isLoading,n=e.children;return t?r.a.createElement(z.a,null):r.a.createElement(r.a.Fragment,null,n)},K=n(207),$=function(e){var t=e.children;return r.a.createElement("div",{className:"flex-1 justify-content-center bg-light"},r.a.createElement(K.a,{maxWidth:"md",className:"mt-4"},t))},Q=n(208),V=function(e){var t=e.isLoading,n=e.children,a=e.onClick,o=e.className,c=e.color,i=void 0===c?"primary":c;return t?r.a.createElement(z.a,null):r.a.createElement(Q.a,{color:i,variant:"contained",className:"m-1 mt-5 align-self-start col-5 "+o,onClick:a},n)},X=n(67),Y=n(36),Z=n(46);!function(e){e.Text="Text",e.Number="Number",e.Location="Location",e.Date="Date"}(B||(B={}));var ee=n(224),te=function(e){var t=e.name,n=e.required,a=e.title,o=e.isNumber,c=e.value,i=e.onBlur,l=e.onChange;return r.a.createElement(ee.a,{id:t,required:n,label:a,value:c,type:o?"number":void 0,onBlur:i,onChange:function(e){return l(e.target.value)}})},ne=n(213),ae=n(223),re=n(222),oe=n(112),ce=n.n(oe),ie=n(214),le=n(70),ue={width:"100vw",height:"100vh"},se=function(e){var t=e.lat,n=e.lng,a=e.onClick,o=e.defaultCenter;return r.a.createElement(le.b,{googleMapsApiKey:"AIzaSyDjs0u02-62FMwrtxMxci5pc6PIubSyW28"},r.a.createElement(le.a,{mapContainerStyle:ue,center:o,onClick:function(e){var t=e.latLng;return a(t.lat(),t.lng())},zoom:12},r.a.createElement(le.c,{position:{lat:t,lng:n}})))},me=Object(ne.a)((function(e){return Object(ae.a)({appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}})})),fe=r.a.forwardRef((function(e,t){return r.a.createElement(ie.a,Object.assign({direction:"up",ref:t},e))})),Ee={lat:35.8037,lng:51.394},de=function(e){var t=e.save,n=e.open,o=e.onClose,c=me(),i=Object(a.useState)(Ee.lat),l=Object(Y.a)(i,2),u=l[0],s=l[1],m=Object(a.useState)(Ee.lng),f=Object(Y.a)(m,2),E=f[0],d=f[1];return r.a.createElement(re.a,{fullScreen:!0,open:n,onClose:o,TransitionComponent:fe},r.a.createElement(b.a,{className:c.appBar},r.a.createElement(g.a,null,r.a.createElement(v.a,{edge:"start",color:"inherit",onClick:o,"aria-label":"close"},r.a.createElement(ce.a,null)),r.a.createElement(p.a,{variant:"h6",className:c.title},"Location"),r.a.createElement(Q.a,{autoFocus:!0,color:"inherit",onClick:function(){t({lat:u,lng:E}),o()}},"save"))),r.a.createElement(se,{lat:u,lng:E,onClick:function(e,t){s(e),d(t)},defaultCenter:Ee}))},Oe=function(e){var t=e.name,n=e.title,a=e.value,o=e.required,c=e.onBlur,i=e.onChange,l=r.a.useState(!1),u=Object(Y.a)(l,2),s=u[0],m=u[1],f=function(){return m(!0)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a,{required:o,InputLabelProps:{shrink:!!a},label:n,id:t,value:a&&"(".concat(a.lat," ").concat(a.lng,")"),onClick:function(){f(),c()}}),r.a.createElement(de,{save:i,onClose:function(){return m(!1)},open:s}))},be=n(18),ge=n(219),ve=n(114),pe=function(e){var t=e.name,n=e.required,a=e.title,o=e.value,c=e.onChange,i=e.onBlur;return r.a.createElement(be.a,{utils:ve.a},r.a.createElement(ge.a,{required:n,disableToolbar:!0,variant:"inline",format:"yyyy/MM/dd",id:t,label:a,value:o,onBlur:i,invalidDateMessage:"Date Format is ".concat("yyyy/MM/dd"),minDate:new Date("0000-00-00"),onChange:function(e){c(e)},KeyboardButtonProps:{"aria-label":"change date"}}))},Re=n(211),_e=n(226),Se=n(220),he=n(215),je=function(e){var t=e.name,n=e.title,a=e.value,o=e.required,c=e.onChange,i=e.onBlur,l=e.options;return r.a.createElement(Re.a,null,r.a.createElement(_e.a,{id:t+"label"},n),r.a.createElement(Se.a,{required:o,labelId:t+"label",id:t,value:a,onBlur:i,onChange:function(e){return c(e.target.value)}},l.map((function(e){return r.a.createElement(he.a,{key:e.value,value:e.value,button:!1},e.label)}))))},Te=function(e){var t=Object.assign({},e);if(t.options)return r.a.createElement(je,Object.assign({},t,{options:t.options}));switch(t.type){case B.Date:return r.a.createElement(pe,Object.assign({},t,{value:t.value}));case B.Location:return r.a.createElement(Oe,Object.assign({},t,{value:t.value}));case B.Text:return r.a.createElement(te,Object.assign({},t,{value:t.value}));case B.Number:return r.a.createElement(te,Object.assign({},t,{value:t.value,isNumber:!0}));default:return null}},Me=function(e){var t=e.touched,n=e.error;return t&&n?r.a.createElement(p.a,{variant:"caption",color:"error"},"* ",n):null},Ce=function(e){var t=e.error,n=e.touched,a=Object(X.a)(e,["error","touched"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Te,a),r.a.createElement(Me,{error:t,touched:n}))};function Fe(e,t){return e.reduce((function(e,n){return Object(I.a)(Object(I.a)({},e),{},Object(Z.a)({},n.name,t))}),{})}var Ie,Le=function(e){var t=e.fields,n=e.submitForm,o=e.submitIsLoading,c=Object(a.useState)(Fe(t,null)),i=Object(Y.a)(c,2),l=i[0],u=i[1],s=Object(a.useState)(Fe(t,null)),m=Object(Y.a)(s,2),f=m[0],E=m[1],d=Object(a.useState)(Fe(t,!1)),O=Object(Y.a)(d,2),b=O[0],g=O[1],v=function(e){return function(t){return E((function(n){return Object(I.a)(Object(I.a)({},n),{},Object(Z.a)({},e,t))}))}},p=function(e){return function(){return g((function(t){return Object(I.a)(Object(I.a)({},t),{},Object(Z.a)({},e,!0))}))}},R=function(e){return function(t){u((function(n){return Object(I.a)(Object(I.a)({},n),{},Object(Z.a)({},e,t))})),v(e)(null)}};Object(a.useEffect)((function(){console.log(f),console.log(b),console.log(l)}),[l,b,f]);var _=function(){u(Fe(t,null)),E(Fe(t,null)),g(Fe(t,!1))};return r.a.createElement("div",{className:"flex-1 flex-column"},t.map((function(e){var t=e.name,n=Object(X.a)(e,["name"]);return r.a.createElement(Ce,Object.assign({},n,{name:t,key:t,touched:b[t],value:l[t],error:f[t],onBlur:p(t),onChange:R(t)}))})),r.a.createElement(V,{onClick:function(){var e=!0;t.filter((function(e){return e.required})).map((function(e){return e.name})).filter((function(e){return!l[e]})).forEach((function(t){e=!1,p(t)(),v(t)("required")})),e&&n(l,_)},isLoading:o},"Submit"))},Ne={getFormDetail:function(e){return function(t){t(k({method:"get",url:"".concat(j.forms,"/").concat(e),successAction:x,errorAction:P,pendingAction:w}))}},submitForm:function(e,t,n){return function(a){a(k({url:"".concat(j.forms,"/").concat(e),method:"post",data:t,successAction:q,errorAction:H,pendingAction:W,callback:n}))}}},ye=Object(E.connect)((function(e){return{formDetailIsLoading:e.formDetail.isLoading,submitFormIsLoading:e.submitForm.isLoading,formTitle:e.formDetail.title,formId:e.formDetail.id,formFields:e.formDetail.fields}}),Ne)((function(e){var t=e.formDetailIsLoading,n=e.submitFormIsLoading,o=e.formTitle,c=e.formId,i=e.formFields,l=e.getFormDetail,u=e.submitForm,s=Object(O.g)().id;Object(a.useEffect)((function(){l(s)}),[l,s]);return r.a.createElement($,null,r.a.createElement(J,{isLoading:t||n},r.a.createElement(K.a,{maxWidth:"xs",className:"d-flex flex-column align-items-stretch ml-0"},r.a.createElement(p.a,{variant:"h5"},"".concat(o,' "').concat(c,'"')),r.a.createElement(Le,{fields:i,submitForm:function(e,t){return u(s,e,t)},submitIsLoading:n}))))})),De=function(){var e=Object(O.g)().id;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{text:"Form ".concat(e)}),r.a.createElement(ye,null))},Ge=n(212),Ae=n(170),ke=n(216),Be=function(e){var t=e.item;return r.a.createElement(Ae.a,{button:!0,component:"a",href:"/form/".concat(t.id)},r.a.createElement(ke.a,{className:"position-absolute"},r.a.createElement(p.a,{variant:"overline"},t.id,":")),r.a.createElement(ke.a,null,r.a.createElement(p.a,{className:"text-center"},t.title)))},Ue=function(e){var t=e.data;return r.a.createElement(Ge.a,{component:"nav",className:"border"},t.map((function(e){return r.a.createElement(Be,{key:e.id,item:e})})))};!function(e){e.GET_FORMS_SUCCESS="GET_FORMS_SUCCESS",e.GET_FORMS_ERROR="GET_FORMS_ERROR",e.GET_FORMS_PENDING="GET_FORMS_PENDING"}(Ie||(Ie={}));var xe=Ie,we=function(e){return{type:xe.GET_FORMS_SUCCESS,payload:e}},Pe=function(){return{type:xe.GET_FORMS_PENDING}},qe=function(){return{type:xe.GET_FORMS_ERROR}},We={getForms:function(){return function(e){e(k({method:"get",url:j.forms,successAction:we,errorAction:qe,pendingAction:Pe}))}}},He=Object(E.connect)((function(e){return{formsData:e.formsList.data,formsIsLoading:e.formsList.isLoading}}),We)((function(e){var t=e.getForms,n=e.formsData,o=e.formsIsLoading;return Object(a.useEffect)((function(){t()}),[t]),r.a.createElement($,null,r.a.createElement("div",{className:"flex-1 flex-column align-items-center m-2"},r.a.createElement(p.a,{variant:"h4"},"List of forms"),r.a.createElement("br",null),r.a.createElement(p.a,{variant:"subtitle1"},"Click on one of them to be redirected to the relevant form"),r.a.createElement("br",null)),r.a.createElement(J,{isLoading:o},r.a.createElement(Ue,{data:n})))})),ze=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{text:"Home",isHome:!0}),r.a.createElement(He,null))},Je=function(){return r.a.createElement(d.a,null,r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/form/:id",component:De}),r.a.createElement(O.a,{path:"/",component:ze})))},Ke=n(53),$e=n(113),Qe={isLoading:!1,data:[]},Ve={isLoading:!1,title:"",id:0,fields:[]},Xe={isLoading:!1},Ye=Object(Ke.c)({formsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe.GET_FORMS_PENDING:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0});case xe.GET_FORMS_ERROR:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1});case xe.GET_FORMS_SUCCESS:return{data:t.payload,isLoading:!1};default:return e}},formDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.GET_FORM_DETAIL_PENDING:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0});case U.GET_FORM_DETAIL_ERROR:return Object(I.a)(Object(I.a)({},e),{},{isLoading:!1});case U.GET_FORM_DETAIL_SUCCESS:return Object(I.a)(Object(I.a)({},t.payload),{},{isLoading:!1});default:return e}},submitForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.SUBMIT_FORM_PENDING:return{isLoading:!0};case U.SUBMIT_FORM_ERROR:case U.SUBMIT_FORM_SUCCESS:return{isLoading:!1};default:return e}},toastr:T.reducer}),Ze=Object(Ke.d)(Ye,Object(Ke.a)($e.a));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{theme:m},r.a.createElement(f.a,null),r.a.createElement(E.Provider,{store:Ze},r.a.createElement(Je,null),r.a.createElement(M.a,{timeOut:3e3,position:"top-right",getState:function(e){return e.toastr},transitionIn:"fadeIn",transitionOut:"fadeOut",closeOnToastrClick:!0})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[128,1,2]]]);
//# sourceMappingURL=main.cd6a21ba.chunk.js.map