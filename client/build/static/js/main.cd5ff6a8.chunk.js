(this["webpackJsonpachieve-it"]=this["webpackJsonpachieve-it"]||[]).push([[0],{100:function(e,t,a){e.exports=a(139)},137:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),o=a.n(r),c=a(189),i=a(88),s=a.n(i),m=a(176),d=a(140);function u(){var e=Object(m.a)((function(e){return{root:{flexGrow:1,background:"linear-gradient(45deg, #3f51b5 30%, #32408f 90%)",textAlign:"center"},title:{flexGrow:1},footer:{background:"linear-gradient(45deg, #3f51b5 10%, #32408f 90%)",color:"black",height:48,paddingTop:"10px",fontSize:14}}}))();return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{className:e.root},l.a.createElement(d.a,{className:e.footer},"ACHIEVE 2 BELIEVE",l.a.createElement(s.a,{style:{fontSize:14}})," 2020")))}var g=a(10),b=a(180),E=a(181),h=a(182),p=a(25),f=a(17),v=a.n(f),y=a(13),k=Object(m.a)((function(e){return{root:{flexGrow:1},nav:{background:"linear-gradient(45deg, #3f51b5 10%, #32408f 90%)"},title:{flexGrow:1},btns:{background:"linear-gradient(45deg, #3f51b5 10%, #32408f 90%)",color:"black",height:35,fontSize:20},btn1:{background:"linear-gradient(45deg, #32408f 10%,  #3f51b5 90%)",color:"black",height:35,fontSize:20}}}));function S(){var e=k(),t=Object(n.useState)(!1),a=Object(g.a)(t,2),r=a[0],o=a[1];return l.a.createElement("div",{className:e.root},r?l.a.createElement(y.a,{to:{pathname:"/login"}}):null,l.a.createElement(b.a,{className:e.nav,position:"static"},l.a.createElement(E.a,null,l.a.createElement(d.a,{variant:"h6",className:e.title},l.a.createElement(p.b,{style:{textDecoration:"none"},to:"/dashboard"},l.a.createElement(h.a,{className:e.btn1},"Achieve 2 Believe"))),l.a.createElement(p.b,{style:{textDecoration:"none"},to:"/"},l.a.createElement(h.a,{className:e.btns},"Log In")),l.a.createElement(p.b,{style:{textDecoration:"none"},to:"/logout"},l.a.createElement(h.a,{className:e.btns,onClick:function(){v()({method:"GET",withCredentials:!0,url:"/logout"}).then((function(e){o(!0)}))}},"Log Out")))))}var O=a(94),j=a(188),w=a(57),x=a(58),N=a(63),C=a(62),G=a(90),A=a(64),T=a(91),D=a(92),z=0,P=(new Date).toISOString().replace(/T.*$/,"");F(),F();function F(){return String(z++)}var B=function(e){Object(N.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={weekendsVisible:!0,currentEvents:[],event:[]},e.handleWeekendsToggle=function(){e.setState({weekendsVisible:!e.state.weekendsVisible})},e.handleDateSelect=function(t){var a=prompt("Please enter a new title for your event"),n=t.view.calendar;n.unselect(),a&&(n.addEvent({id:F(),title:a,start:t.startStr,end:t.endStr,allDay:t.allDay}),v.a.post("/dashboard/goals",a).then((function(e){console.log(e.data.goal)})).catch((function(e){console.log(e)})),e.setState({id:"",title:"",start:"",end:"",allDay:""}))},e.handleEventClick=function(e,t){var a=e.event._def.extendedProps._id.id;console.log(e.event._def.extendedProps._id),window.confirm("Are you sure you want to delete the event '".concat(e.event.title,"'"))&&(e.event.remove(),v.a.delete("/dashboard/goals",{params:{id:a}}).then((function(e){console.log(e.data.goal)})))},e.handleEvents=function(t){e.setState({currentEvents:t})},e}return Object(x.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("/dashboard/goals").then((function(t){e.setState({event:t.data.goals}),console.log({event:t.data.goals})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"cal-app"},this.renderSidebar(),l.a.createElement("div",{className:"cal-app-main"},l.a.createElement(G.a,{plugins:[A.b,T.a,D.a],headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},initialView:"dayGridMonth",editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:!0,weekends:this.state.weekendsVisible,initialEvents:this.state.event,events:this.state.event,select:this.handleDateSelect,eventContent:V,eventClick:this.handleEventClick,eventsSet:this.handleEvents})))}},{key:"renderSidebar",value:function(){return l.a.createElement("div",{className:"cal-app-sidebar"},l.a.createElement("div",{className:"cal-app-sidebar-section"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:this.state.weekendsVisible,onChange:this.handleWeekendsToggle}),"toggle weekends")))}}]),a}(l.a.Component);function V(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,e.timeText),l.a.createElement("i",null,e.event.title))}var W=a(73),I=Object(n.createContext)(),L=function(e){Object(N.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={isAuthenticated:!1,user:null},e.toggleUser=function(){e.setState({isAuthenticated:!e.state.isAuthenticated})},e}return Object(x.a)(a,[{key:"render",value:function(){return l.a.createElement(I.Provider,{value:Object(W.a)(Object(W.a)({},this.state),{},{toggleUser:this.toggleUser})},this.props.children)}}]),a}(n.Component),M=a(183),U=a(184),_=a(192),q=a(193),R=a(194),J=a(190),H=Object(m.a)((function(e){return{root:{minWidth:275,justifyContent:"center"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:20,fontweight:"bold",fontsyle:"italic",alignItems:"center"},pos:{marginBottom:12},btns:{background:"linear-gradient(45deg, #3f51b5 30%, #32408f 90%)",color:"black",height:48,padding:"0 8px",fontSize:18},body:{justifyContent:"center"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));function Y(e){var t=H(),a=Object(n.useState)(""),r=Object(g.a)(a,2),o=r[0],c=r[1],i=Object(n.useState)(""),s=Object(g.a)(i,2),m=s[0],u=s[1],b=Object(n.useState)(""),E=Object(g.a)(b,2),p=E[0],f=E[1];return l.a.createElement(M.a,{className:t.root},l.a.createElement(U.a,null,l.a.createElement(d.a,{className:t.title,color:"textSecondary",gutterBottom:!0},"Create your Goal"),l.a.createElement("div",{className:t.body},l.a.createElement("form",null,l.a.createElement(d.a,{variant:"h5",component:"h2"},l.a.createElement(_.a,{variant:"outlined"},l.a.createElement(q.a,{htmlFor:"component-outlined"},"goal"),l.a.createElement(R.a,{id:"component-outlined",onChange:function(e){return c(e.target.value)},label:"goal"})))),l.a.createElement("form",null,l.a.createElement(d.a,{variant:"h5",component:"h2"},l.a.createElement(_.a,{variant:"outlined"},l.a.createElement(q.a,{htmlFor:"component-outlined"},"task"),l.a.createElement(R.a,{id:"component-outlined",onChange:function(e){return u(e.target.value)},label:"task"})))),l.a.createElement("br",null),l.a.createElement(J.a,{id:"datetime-local",label:"goal date",type:"datetime-local",defaultValue:Date.now,className:t.textField,onChange:function(e){return f(e.target.value)},InputLabelProps:{shrink:!0}}),l.a.createElement("br",null),l.a.createElement(h.a,{className:t.btns,onClick:function(){v()({method:"POST",data:{title:o,task:m,start:p},withCredentials:!0,url:"/dashboard"}).then((function(t){return e.getGoals()})),window.location.reload(!0)}},"Set Goal"))))}var $=a(185),K=a(191),Q=a(186),X=a(187),Z=Object(m.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function ee(e){var t=Z();return l.a.createElement(M.a,{className:t.root,variant:"outlined"},l.a.createElement(U.a,null,l.a.createElement(d.a,{variant:"h5",component:"h2"},e.title),l.a.createElement(d.a,{variant:"body2",component:"p"},e.task,l.a.createElement("br",null)),l.a.createElement(d.a,{className:t.pos,color:"textSecondary"},e.start)),l.a.createElement($.a,null,l.a.createElement(h.a,{size:"small"},"Edit Goal"),l.a.createElement(_.a,{component:"fieldset"},l.a.createElement(Q.a,{"aria-label":"position",row:!0},l.a.createElement(X.a,{value:"end",control:l.a.createElement(K.a,{color:"primary"}),label:"Goal Achieved",labelPlacement:"end"})))))}var te=Object(m.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",fontSize:22}}}));function ae(){var e=te(),t=Object(n.useState)([]),a=Object(g.a)(t,2),r=a[0],o=a[1],c=function(){v()({method:"GET",withCredentials:!0,url:"/dashboard/goals"}).then((function(e){console.log(e.data),o(e.data.goals)})).catch((function(e){console.log(e)}))};return Object(n.useEffect)(c,[]),l.a.createElement("div",{className:e.root},l.a.createElement(j.a,{container:!0,spacing:3},l.a.createElement(j.a,{item:!0,xs:12},l.a.createElement(O.a,{className:e.paper},"Welcome To Achieve 2 Believe, an application to keep yourself accountable and organized in terms of your goals and dreams",l.a.createElement("hr",null))),l.a.createElement(I.Provider,{value:{}},l.a.createElement(j.a,{item:!0,xs:12,sm:6},l.a.createElement(O.a,{className:e.paper},l.a.createElement(B,null))),l.a.createElement(j.a,{item:!0,xs:12,sm:6},l.a.createElement(O.a,{className:e.paper},"Your Goals"),l.a.createElement(O.a,{className:e.paper},l.a.createElement(Y,{getGoals:c})),r.map((function(t){return l.a.createElement(ee,{className:e.paper,key:t._id,title:t.title,task:t.task,start:t.start})}))))))}var ne=a(195),le=(a(137),a(61)),re=Object(m.a)({root:{minWidth:275,textAlign:"center",justifyContent:"center"},title:{fontSize:22,padding:30},btns:{background:"linear-gradient(45deg, #3f51b5 30%, #32408f 90%)",color:"black",height:35,fontSize:20},images:{flexDirection:"column"},body:{paddingTop:20},form:{padding:20,paddingRight:0}});var oe=function(){var e=re(),t=(Object(le.a)().register,Object(n.useState)("")),a=Object(g.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(""),i=Object(g.a)(c,2),s=i[0],m=i[1],u=Object(n.useState)(!1),b=Object(g.a)(u,2),E=b[0],f=b[1],k=Object(n.useState)(!1),S=Object(g.a)(k,2),O=S[0],j=S[1];return l.a.createElement(M.a,{className:e.root},E?l.a.createElement(y.a,{to:{pathname:"/dashboard/goals"}}):null,l.a.createElement(U.a,null,l.a.createElement(d.a,{className:e.title,color:"textSecondary"},"Welcome back to Achieve 2 Believe!!! Login to check in on your goals!"),l.a.createElement("form",{className:e.form},l.a.createElement(_.a,{variant:"outlined"},l.a.createElement(q.a,{htmlFor:"component-outlined"},"username"),l.a.createElement(R.a,{name:"username",type:"text",label:"username",onChange:function(e){return o(e.target.value)}})),l.a.createElement(_.a,{variant:"outlined"},l.a.createElement(q.a,{htmlFor:"component-outlined"},"password"),l.a.createElement(R.a,{name:"password",type:O?"text":"password",label:"password",onChange:function(e){return m(e.target.value)}})),l.a.createElement(ne.a,{className:"togglePassword",onClick:function(){j(!O)}})),l.a.createElement(h.a,{className:e.btns,onClick:function(){v()({method:"POST",data:{username:r,password:s},url:"/login"}).then((function(e){return f(!0)}))}},"Submit"," "),l.a.createElement("div",{className:e.body},"Not already a member?"," ",l.a.createElement(p.b,{style:{textDecoration:"none"},to:"/Signup"},l.a.createElement(h.a,{className:e.btns},"Sign Up")))))},ce=Object(m.a)({root:{minWidth:275,justifyContent:"center"},card:{textAlign:"center"},title:{fontSize:20,fontweight:"bold",fontsyle:"italic"},btns:{background:"linear-gradient(45deg, #3f51b5 30%, #32408f 90%)",color:"black",height:35,fontSize:20},images:{flexDirection:"column"},body:{paddingTop:20},form:{padding:20,paddingRight:0}});function ie(){var e=ce(),t=Object(le.a)().register,a=Object(n.useState)(""),r=Object(g.a)(a,2),o=r[0],c=r[1],i=Object(n.useState)(""),s=Object(g.a)(i,2),m=s[0],u=s[1],b=Object(n.useState)(!1),E=Object(g.a)(b,2),p=E[0],f=E[1],k=Object(n.useState)(!1),S=Object(g.a)(k,2),O=S[0],j=S[1];return l.a.createElement(M.a,{className:e.root},p?l.a.createElement(y.a,{to:{pathname:"/"}}):null,l.a.createElement(U.a,{className:e.card},l.a.createElement(d.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Signup"),l.a.createElement("form",null,l.a.createElement(d.a,{variant:"h5",component:"h2"},l.a.createElement(_.a,{variant:"outlined"},l.a.createElement(q.a,{htmlFor:"component-outlined"},"Username"),l.a.createElement(R.a,{name:"username",id:"component-outlined",ref:t({required:"This is required."}),onChange:function(e){return c(e.target.value)},label:"username"})),l.a.createElement(_.a,{variant:"outlined"},l.a.createElement(q.a,{htmlFor:"component-outlined"},"Password"),l.a.createElement(R.a,{name:"password",id:"component-outlined",type:O?"text":"password",onChange:function(e){return u(e.target.value)},label:"password",ref:t({required:"This is required."})})),l.a.createElement(ne.a,{className:"togglePassword",onClick:function(){j(!O)}}),l.a.createElement(h.a,{className:e.btns,onClick:function(){v()({method:"POST",data:{username:o,password:m},withCredentials:!0,url:"/signup"}).then((function(e){return f(!0)}))}},"Submit"," "," ")))))}var se=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,l.a.createElement(c.a,null),l.a.createElement(S,null),l.a.createElement(y.b,{path:"/dashboard/",component:ae}),l.a.createElement(y.b,{exact:!0,path:"/signup",component:ie}),l.a.createElement(y.b,{exact:!0,path:"/",component:oe}),l.a.createElement(u,null)))))};o.a.render(l.a.createElement(L,null,l.a.createElement(se,null)),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.cd5ff6a8.chunk.js.map