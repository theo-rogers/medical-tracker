(this["webpackJsonpmedical-app"]=this["webpackJsonpmedical-app"]||[]).push([[0],{553:function(e,t,a){},554:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),r=a.n(n),i=a(47),s=a.n(i),l=(a(318),a(37)),o=a.n(l),j=a(64),d=a(30),b=a(56),h=a.n(b),O=a(75),u=a(23),x=a(566),p=a(567),m=a(190),v="localhost:3001/api";"production"===m.a.NODE_ENV&&(v=m.a.DATABASE_URL),console.log(v);var f,g,k,D,y=a(302),H=a(36),C=a(19),S={patients:{}},w=Object(n.createContext)([S,function(){return S}]),T=function(e){var t=e.reducer,a=e.children,r=Object(n.useReducer)(t,S),i=Object(d.a)(r,2),s=i[0],l=i[1];return Object(c.jsx)(w.Provider,{value:[s,l],children:a})},I=function(){return Object(n.useContext)(w)},N=a(577),L=a(578),R=a(67),A=a(572),E=a(575),F=a(569),_=a(576),P=a(20),V=a(568),M=a(571),B=function(e){var t=e.name,a=e.label,n=e.options;return Object(c.jsxs)(V.a.Field,{children:[Object(c.jsx)("label",{children:a}),Object(c.jsx)(P.b,{as:"select",name:t,className:"ui dropdown",children:n.map((function(e){return Object(c.jsx)("option",{value:e.value,children:e.label||e.value},e.value)}))})]})},Y=function(e){var t=e.field,a=e.label,n=e.placeholder;return Object(c.jsxs)(V.a.Field,{children:[Object(c.jsx)("label",{children:a}),Object(c.jsx)(P.b,Object(C.a)({placeholder:n},t)),Object(c.jsx)("div",{style:{color:"red"},children:Object(c.jsx)(P.a,{name:t.name})})]})};!function(e){e.Male="male",e.Female="female",e.Other="other"}(f||(f={})),function(e){e.Hospital="Hospital",e.OccupationalHealthcare="OccupationalHealthcare",e.HealthCheck="HealthCheck"}(g||(g={})),function(e){e[e.Healthy=0]="Healthy",e[e.LowRisk=1]="LowRisk",e[e.HighRisk=2]="HighRisk",e[e.CriticalRisk=3]="CriticalRisk"}(k||(k={})),function(e){e[e.Healthy=0]="Healthy",e[e.LowRisk=1]="LowRisk",e[e.HighRisk=2]="HighRisk",e[e.CriticalRisk=3]="CriticalRisk"}(D||(D={}));var z=a(141),G=a(580),q=["The patient is in great shape","The patient has a low risk of getting sick","The patient has a high risk of getting sick","The patient has a diagnosed condition"],J=function(e){var t=e.rating,a=e.showText,n=e.disabled,r=e.label,i=e.field,s=e.form,l=(e.children,Object(z.a)(e,["rating","showText","disabled","label","field","form","children"]));if(n)return Object(c.jsx)(G.a,{icon:"heart",disabled:!0,rating:t,maxRating:4});if(i&&s){var o=i.name,j=i.value,d=s.setFieldValue;return Object(c.jsxs)(V.a.Field,{className:"health-bar",children:[Object(c.jsx)("label",{children:r}),Object(c.jsx)(G.a,Object(C.a)({rating:j,icon:"heart",maxRating:4,onRate:function(e,t){var a=t.rating;return d(o,a)}},l)),a?Object(c.jsx)("p",{children:q[t]}):null]})}return Object(c.jsx)(c.Fragment,{})},U=a(290),$=a.n(U),K=(a(440),function(e){var t=e.label,a=e.field,n=e.form,r=(e.children,Object(z.a)(e,["label","field","form","children"]));if(a&&n){var i=a.name,s=a.value,l=n.setFieldValue,o=(n.isValid,new Date(s));return function(e){var t=new Date(e);return t instanceof Date&&!isNaN(t.getTime())}(s)||(o=new Date),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(V.a.Field,{children:[Object(c.jsx)("label",{children:t}),Object(c.jsx)("div",{children:Object(c.jsx)($.a,Object(C.a)({selected:o,dateFormat:"MMMM d, yyyy",className:"form-control",onChange:function(e){return l(i,e.toISOString().split("T")[0])}},r))})]})})}return Object(c.jsx)(c.Fragment,{})}),Q=[{value:f.Male,label:"Male"},{value:f.Female,label:"Female"},{value:f.Other,label:"Other"}],W=function(e){var t=e.onSubmit,a=e.onCancel;return Object(c.jsx)(P.d,{initialValues:{name:"",ssn:"",dateOfBirth:(new Date).toISOString().split("T")[0],occupation:"",gender:f.Other,healthRating:3},onSubmit:t,validate:function(e){var t="Field is required",a={};return e.name||(a.name=t),e.ssn||(a.ssn=t),e.dateOfBirth||(a.dateOfBirth=t),e.occupation||(a.occupation=t),e.healthRating||(a.healthRating=t),a},children:function(e){var t=e.isValid,n=e.dirty;return Object(c.jsxs)(P.c,{className:"form ui",children:[Object(c.jsx)(P.b,{label:"Name",placeholder:"Name",name:"name",component:Y}),Object(c.jsx)(P.b,{label:"Social Security Number",placeholder:"SSN",name:"ssn",component:Y}),Object(c.jsx)(P.b,{label:"Date of Birth",name:"DateOfBirth",component:K}),Object(c.jsx)(P.b,{label:"Occupation",placeholder:"Occupation",name:"occupation",component:Y}),Object(c.jsx)(B,{label:"Gender",name:"gender",options:Q}),Object(c.jsx)(P.b,{maxRating:4,label:"Health Rating",name:"healthRating",showText:!0,component:J}),Object(c.jsxs)(_.a,{children:[Object(c.jsx)(_.a.Column,{floated:"left",width:5,children:Object(c.jsx)(E.a,{type:"button",onClick:a,color:"red",children:"Cancel"})}),Object(c.jsx)(_.a.Column,{floated:"right",width:5,children:Object(c.jsx)(E.a,{type:"submit",floated:"right",color:"green",disabled:!n||!t,children:"Add"})})]})]})}})},X=function(e){var t=e.modalOpen,a=e.onClose,n=e.onSubmit,r=e.error;return Object(c.jsxs)(F.a,{inverted:!0,open:t,onClose:a,centered:!1,closeIcon:!0,children:[Object(c.jsx)(F.a.Header,{children:"Add a new patient"}),Object(c.jsxs)(F.a.Content,{children:[r&&Object(c.jsx)(N.a,{inverted:!0,color:"red",children:"Error: ".concat(r)}),Object(c.jsx)(W,{onSubmit:n,onCancel:a})]})]})},Z=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(L.a,{as:"h2",icon:!0,textAlign:"center",children:[Object(c.jsx)(R.a,{name:"user md",circular:!0}),Object(c.jsx)(L.a.Content,{children:"Patient Health Portal"})]})})},ee=function(){var e=I(),t=Object(d.a)(e,2),a=t[0].patients,n=t[1],i=r.a.useState(!1),s=Object(d.a)(i,2),l=s[0],b=s[1],u=r.a.useState(),x=Object(d.a)(u,2),p=x[0],m=x[1],f=function(){b(!1),m(void 0)},g=function(){var e=Object(j.a)(o.a.mark((function e(t){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat(v,"/patients"),t);case 3:a=e.sent,c=a.data,n({type:"ADD_PATIENT",payload:c}),f(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.response.data),m(e.t0.response.data.error);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(Z,{}),Object(c.jsxs)(N.a,{placeholder:!0,children:[Object(c.jsx)(N.a,{textAlign:"center",children:Object(c.jsxs)(L.a,{as:"h3",children:[Object(c.jsx)(R.a,{name:"users"}),Object(c.jsx)(L.a.Content,{children:"Current Patients"})]})}),Object(c.jsxs)(A.a,{striped:!0,children:[Object(c.jsx)(A.a.Header,{children:Object(c.jsxs)(A.a.Row,{children:[Object(c.jsx)(A.a.HeaderCell,{children:"Name"}),Object(c.jsx)(A.a.HeaderCell,{children:"Gender"}),Object(c.jsx)(A.a.HeaderCell,{children:"Occupation"}),Object(c.jsx)(A.a.HeaderCell,{children:"Health Rating"})]})}),Object(c.jsx)(A.a.Body,{children:Object.values(a).map((function(e){return Object(c.jsxs)(A.a.Row,{children:[Object(c.jsx)(A.a.Cell,{children:Object(c.jsx)(O.b,{to:"/patient/"+e.id,children:e.name})}),Object(c.jsx)(A.a.Cell,{children:e.gender}),Object(c.jsx)(A.a.Cell,{children:e.occupation}),Object(c.jsx)(A.a.Cell,{children:Object(c.jsx)(J,{disabled:!0,showText:!1,rating:e.healthRating})})]},e.id)}))})]}),Object(c.jsx)(X,{modalOpen:l,onSubmit:g,error:p,onClose:f}),Object(c.jsx)(E.a,{onClick:function(){return b(!0)},children:"Add New Patient"})]})]})},te=a(574),ae=a(573),ce=a(147),ne=function(e){var t=e.entry,a=I(),n=Object(d.a)(a,1)[0].diagnosisData,r=function(){var e;return Object(c.jsx)("div",{children:Object(c.jsxs)(ae.a,{celled:!0,verticalAlign:"middle",children:[Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsx)(ae.a.Header,{children:Object(c.jsx)(ce.a,{icon:"info",color:"teal",content:"Description",ribbon:!0})}),t.description]}),Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsx)(ae.a.Header,{children:Object(c.jsx)(ce.a,{icon:"calendar alternate",color:"teal",content:"Date",ribbon:!0})}),t.date]}),Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsx)(ae.a.Header,{children:Object(c.jsx)(ce.a,{icon:"user md",color:"teal",content:"Specialist",ribbon:!0})}),t.specialist]}),Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsx)(ae.a.Header,{children:Object(c.jsx)(ce.a,{icon:"code",color:"teal",content:"Diagnosis Codes",ribbon:!0})}),Object(c.jsx)(ae.a,{celled:!0,verticalAlign:"middle",children:null===(e=t.diagnosisCodes)||void 0===e?void 0:e.map((function(e){if(n){var t=Object.values(n).find((function(t){return t.code===e}));if(t)return Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsxs)(ae.a.Header,{className:"diagnosis-code",children:[Object(c.jsx)(ae.a.Icon,{name:"plus"}),e]}),Object(c.jsx)(ae.a.Description,{children:t.name})]},Object(te.a)())}return Object(c.jsx)(ae.a.Item,{children:e},Object(te.a)())}))})]})]})})};switch(t.type){case"HealthCheck":return Object(c.jsxs)(x.a,{fluid:!0,children:[Object(c.jsx)(L.a,{size:"medium",icon:"first aid",color:"black",content:"Health Check"}),Object(c.jsx)(r,{}),Object(c.jsx)(ae.a,{children:Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsx)(ae.a.Header,{children:Object(c.jsx)(ce.a,{icon:"heart outline",color:"teal",content:"Health Check Rating",ribbon:!0})}),function(e){switch(e){case 0:return Object(c.jsxs)(ce.a,{icon:"heart",size:"large",children:[Object(c.jsx)(R.a,{name:"heart",color:"green"})," ",D[0]," "]});case 1:return Object(c.jsxs)(ce.a,{icon:"heart",size:"large",children:[Object(c.jsx)(R.a,{name:"heart",color:"yellow"})," ",D[1]," "]});case 2:return Object(c.jsxs)(ce.a,{icon:"heart",size:"large",children:[Object(c.jsx)(R.a,{name:"heart",color:"orange"}),"     ",D[2]," "]});case 3:return Object(c.jsxs)(ce.a,{icon:"heart",size:"large",children:[Object(c.jsx)(R.a,{name:"heart",color:"red"})," ",D[3]," "]})}}(t.healthCheckRating)]})}),Object(c.jsx)("br",{})]},Object(te.a)());case"Hospital":return Object(c.jsxs)(x.a,{fluid:!0,children:[Object(c.jsx)(L.a,{size:"medium",icon:"hospital",color:"black",content:"Hospital Visit"}),Object(c.jsx)(r,{}),Object(c.jsxs)(ae.a,{celled:!0,verticalAlign:"middle",children:[Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsx)(ae.a.Header,{children:Object(c.jsx)(ce.a,{icon:"calendar check",color:"teal",content:"Discharge Date",ribbon:!0})}),t.discharge.date]}),Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsx)(ae.a.Header,{children:Object(c.jsx)(ce.a,{icon:"stethoscope",color:"teal",content:"Discharge Criteria",ribbon:!0})}),t.discharge.criteria]})]}),Object(c.jsx)("br",{})]},Object(te.a)());case"OccupationalHealthcare":return Object(c.jsxs)(x.a,{fluid:!0,children:[Object(c.jsx)(L.a,{size:"medium",icon:"clipboard check",color:"black",content:"Occupational Healthcare"}),Object(c.jsx)(r,{}),Object(c.jsxs)(ae.a,{celled:!0,verticalAlign:"middle",children:[Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsx)(ae.a.Header,{children:Object(c.jsx)(ce.a,{icon:"briefcase",color:"teal",content:"Employer",ribbon:!0})}),t.employerName]}),t.sickLeave&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsx)(ae.a.Header,{children:Object(c.jsx)(ce.a,{icon:"calendar plus outline",color:"teal",content:"Sick Leave Start Date",ribbon:!0})}),t.sickLeave.startDate]}),Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsx)(ae.a.Header,{children:Object(c.jsx)(ce.a,{icon:"calendar times outline",color:"teal",content:"Sick Leave End Date",ribbon:!0})}),t.sickLeave.endDate]})]})]}),Object(c.jsx)("br",{})]},Object(te.a)());default:throw new Error("invalid entry type")}},re=function(e){var t=e.name,a=e.label,n=e.options;return Object(c.jsxs)(V.a.Field,{children:[Object(c.jsx)("label",{children:a}),Object(c.jsx)(P.b,{as:"select",name:t,className:"ui dropdown",children:n.map((function(e){return Object(c.jsx)("option",{value:e.value,children:e.label||e.value},e.value)}))})]})},ie=function(e){var t=e.name,a=e.label,n=e.options;return Object(c.jsxs)(V.a.Field,{children:[Object(c.jsx)("label",{children:a}),Object(c.jsx)(M.a,{clearable:!0,options:n,selection:!0,name:t,className:"ui dropdown"})]})},se=function(e){var t=e.field,a=e.label,n=e.placeholder;return Object(c.jsxs)(V.a.Field,{children:[Object(c.jsx)("label",{children:a}),Object(c.jsx)(P.b,Object(C.a)({placeholder:n},t)),Object(c.jsx)("div",{style:{color:"red"},children:Object(c.jsx)(P.a,{name:t.name})})]})},le=function(e){var t=e.diagnoses,a=e.setFieldValue,n=e.setFieldTouched,r="diagnosisCodes",i=t.map((function(e){return{key:e.code,text:"".concat(e.name," (").concat(e.code,")"),value:e.code}}));return Object(c.jsxs)(V.a.Field,{children:[Object(c.jsx)("label",{children:"Diagnoses"}),Object(c.jsx)(M.a,{fluid:!0,multiple:!0,search:!0,selection:!0,options:i,onChange:function(e,t){n(r,!0),a(r,t.value)}}),Object(c.jsx)(P.a,{name:r})]})},oe=[{value:g.Hospital,label:"Hospital"},{value:g.OccupationalHealthcare,label:"OccupationalHealthcare"},{value:g.HealthCheck,label:"HealthCheck"}],je=[{value:k.Healthy,text:"Healthy"},{value:k.LowRisk,text:"Low Risk"},{value:k.HighRisk,text:"High Risk"},{value:k.CriticalRisk,text:"Critical Risk"}],de=function(e){var t=e.onSubmit,a=e.onCancel,n=I(),r=Object(d.a)(n,1)[0].diagnosisData;if(!r)throw new Error("diagnoses data does not exist");var i={type:g.HealthCheck,specialist:"",diagnosisCodes:[""],description:""},s={healthCheckRating:k.Healthy},l={discharge:{date:(new Date).toISOString().split("T")[0],criteria:""}},o={employerName:"",sickLeave:{startDate:(new Date).toISOString().split("T")[0],endDate:(new Date).toISOString().split("T")[0]}};function j(e){if(!/^\d{4}-\d{2}-\d{2}$/.exec(e))return!1;var t=new Date(e),a=t.getTime();return!(!a&&0!==a)&&t.toISOString().slice(0,10)===e}return Object(c.jsx)(P.d,{initialValues:Object(C.a)(Object(C.a)(Object(C.a)(Object(C.a)({},i),s),l),o),onSubmit:t,validate:function(e){var t="Field is required",a="Date format must match YYYY-MM-DD ",c={};return e.specialist||(c.specialist=t),e.description||(c.description=t),e.type!==g.Hospital||e.discharge.criteria||(c.discharge||(c.discharge={}),c.discharge.criteria=t),e.type!==g.Hospital||e.discharge.date||(c.discharge||(c.discharge={}),c.discharge.date=t),e.type===g.Hospital&&e.discharge.date&&!j(e.discharge.date)&&(c.discharge||(c.discharge={}),c.discharge.date=a),e.type!==g.OccupationalHealthcare||e.employerName||(c.employerName=t),e.type!==g.OccupationalHealthcare||e.sickLeave.startDate||(c.sickLeave||(c.sickLeave={}),c.sickLeave.startDate=t),e.type===g.OccupationalHealthcare&&e.sickLeave.startDate&&!j(e.sickLeave.startDate)&&(c.sickLeave||(c.sickLeave={}),c.sickLeave.startDate=a),e.type!==g.OccupationalHealthcare||e.sickLeave.endDate||(c.sickLeave||(c.sickLeave={}),c.sickLeave.endDate=t),e.type===g.OccupationalHealthcare&&e.sickLeave.endDate&&!j(e.sickLeave.endDate)&&(c.sickLeave||(c.sickLeave={}),c.sickLeave.endDate=a),c},children:function(e){var t=e.isValid,n=e.dirty,i=e.setFieldValue,s=e.setFieldTouched,l=e.values.type;return Object(c.jsxs)(P.c,{className:"form ui",children:[Object(c.jsx)(re,{label:"Entry Type",name:"type",options:oe}),Object(c.jsx)(P.b,{label:"Specialist",placeholder:"Specialist",name:"specialist",component:se}),Object(c.jsx)(le,{setFieldValue:i,setFieldTouched:s,diagnoses:Object.values(r)}),Object(c.jsx)(P.b,{label:"Description",placeholder:"Description",name:"description",component:se}),l===g.HealthCheck&&Object(c.jsx)(ie,{label:"Health Check Rating",name:"healthCheckRating",options:je}),l===g.Hospital&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(P.b,{label:"Discharge Criteria",placeholder:"Discharge Criteria",name:"discharge.criteria",component:se}),Object(c.jsx)(P.b,{label:"Discharge Date",placeholder:"YYYY-MM-DD",name:"discharge.date",component:K})]}),l===g.OccupationalHealthcare&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(P.b,{label:"Employer Name",placeholder:"Employer",name:"employerName",component:se}),Object(c.jsx)(P.b,{label:"Sick Leave Start Date",name:"sickLeave.startDate",component:K}),Object(c.jsx)(P.b,{label:"Sick Leave End Date",name:"sickLeave.endDate",component:K})]}),Object(c.jsxs)(_.a,{children:[Object(c.jsx)(_.a.Column,{floated:"left",width:5,children:Object(c.jsx)(E.a,{type:"button",onClick:a,color:"red",children:"Cancel"})}),Object(c.jsx)(_.a.Column,{floated:"right",width:5,children:Object(c.jsx)(E.a,{type:"submit",floated:"right",color:"green",disabled:!n||!t,children:"Add"})})]})]})}})},be=function(e){var t=e.modalOpen,a=e.onClose,n=e.onSubmit,r=e.error;return Object(c.jsxs)(F.a,{open:t,onClose:a,centered:!1,closeIcon:!0,children:[Object(c.jsx)(F.a.Header,{children:"Add a new entry"}),Object(c.jsxs)(F.a.Content,{children:[r&&Object(c.jsx)(N.a,{inverted:!0,color:"red",children:"Error: ".concat(r)}),Object(c.jsx)(de,{onSubmit:n,onCancel:a})]})]})},he=function(e){var t=e.patient;return Object(c.jsx)("div",{children:Object(c.jsxs)(L.a,{as:"h2",icon:!0,textAlign:"center",children:[Object(c.jsx)(R.a,{name:"user",circular:!0}),Object(c.jsx)(L.a.Content,{children:t.name})]})})},Oe=function(){var e=Object(u.f)().id,t=I(),a=Object(d.a)(t,2),i=a[0].patientDetails,s=a[1],l=r.a.useState(!1),b=Object(d.a)(l,2),p=b[0],m=b[1],f=r.a.useState(),g=Object(d.a)(f,2),k=g[0],D=g[1];Object(n.useEffect)((function(){C()}),[s,e]);var y=function(){m(!1),D(void 0)},H=function(){var t=Object(j.a)(o.a.mark((function t(a){var c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.post("".concat(v,"/patients/").concat(e,"/entries"),a);case 3:c=t.sent,n=c.data,s({type:"ADD_ENTRY",payload:n,targetId:e}),y(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0.response.data),D(t.t0.response.data.error);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(j.a)(o.a.mark((function t(){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("".concat(v,"/patients/").concat(e));case 3:if(a=t.sent,!(c=a.data)){t.next=9;break}s({type:"SET_PATIENT_DETAILS",payload:c}),t.next=10;break;case 9:return t.abrupt("return",void 0);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}(),S=function(){if(i&&i.entries){var e=i.entries;return Object.values(e).map((function(e){return Object(c.jsx)(ne,{entry:e},Object(te.a)())}))}};return Object(c.jsx)("div",{children:i?function(){if(i)return Object(c.jsxs)(x.a,{className:"Patients",children:[Object(c.jsx)(he,{patient:i}),Object(c.jsx)(E.a,{as:O.b,to:"/",primary:!0,children:"Home"}),Object(c.jsxs)(ae.a,{celled:!0,verticalAlign:"middle",children:[Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsx)(ae.a.Header,{children:Object(c.jsx)(ce.a,{icon:"id badge outline",color:"olive",content:"Patient ID",ribbon:!0})}),i.id]}),Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsx)(ae.a.Header,{children:Object(c.jsx)(ce.a,{icon:"hashtag",color:"olive",content:"SSN",ribbon:!0})}),i.ssn]}),Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsx)(ae.a.Header,{children:Object(c.jsx)(ce.a,{icon:"warehouse",color:"olive",content:"Occupation",ribbon:!0})}),i.occupation]}),Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsx)(ae.a.Header,{children:Object(c.jsx)(ce.a,{icon:"venus mars",color:"olive",content:"Gender",ribbon:!0})}),i.gender]}),Object(c.jsxs)(ae.a.Item,{children:[Object(c.jsx)(ae.a.Header,{children:Object(c.jsx)(ce.a,{icon:"birthday cake",color:"olive",content:"Date of Birth",ribbon:!0})}),i.dateOfBirth]})]}),Object(c.jsx)(x.a,{className:"Entries_Divider",children:Object(c.jsx)(L.a,{textAlign:"center",floated:"right",size:"large",color:"black",content:"Entries"})}),Object(c.jsx)(x.a,{children:i.entries?S():Object(c.jsx)("p",{children:"No Entries"})}),Object(c.jsx)(be,{modalOpen:p,onSubmit:H,error:k,onClose:y}),Object(c.jsx)(E.a,{onClick:function(){return m(!0)},children:"Add New Entry"})]})}():Object(c.jsx)("p",{children:"Loading"})})},ue=(a(553),function(){var e=I(),t=Object(d.a)(e,2)[1];return r.a.useEffect((function(){h.a.get("".concat(v,"/ping")),function(){var e=Object(j.a)(o.a.mark((function e(){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(v,"/patients"));case 3:a=e.sent,c=a.data,t({type:"SET_PATIENT_LIST",payload:c}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[t]),r.a.useEffect((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(v,"/diagnosis"));case 3:if(a=e.sent,!(c=a.data)){e.next=9;break}t({type:"SET_DIAGNOSIS_DATA",payload:c}),e.next=10;break;case 9:return e.abrupt("return",void 0);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(O.a,{children:Object(c.jsxs)(x.a,{children:[Object(c.jsx)(p.a,{hidden:!0}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/patient/:id",render:function(){return Object(c.jsx)(Oe,{})}}),Object(c.jsx)(u.a,{path:"/",render:function(){return Object(c.jsx)(ee,{})}})]})]})})})}),xe=document.getElementById("root");s.a.render(Object(c.jsx)(T,{reducer:function(e,t){switch(t.type){case"SET_PATIENT_LIST":return Object(C.a)(Object(C.a)({},e),{},{patients:Object(C.a)(Object(C.a)({},t.payload.reduce((function(e,t){return Object(C.a)(Object(C.a)({},e),{},Object(H.a)({},t.id,t))}),{})),e.patients)});case"ADD_PATIENT":return Object(C.a)(Object(C.a)({},e),{},{patients:Object(C.a)(Object(C.a)({},e.patients),{},Object(H.a)({},t.payload.id,t.payload))});case"SET_PATIENT_DETAILS":return Object(C.a)(Object(C.a)({},e),{},{patientDetails:Object(C.a)({},t.payload)});case"SET_DIAGNOSIS_DATA":return Object(C.a)(Object(C.a)({},e),{},{diagnosisData:Object(y.a)(t.payload)});case"ADD_ENTRY":if(!e.patientDetails)throw new Error("Patient details not populated");var a=e.patientDetails.entries?e.patientDetails.entries:[];return Object(C.a)(Object(C.a)({},e),{},{patientDetails:Object(C.a)(Object(C.a)({},e.patientDetails),{},{entries:a.concat(t.payload)})});default:return e}},children:Object(c.jsx)(ue,{})}),xe)}},[[554,1,2]]]);
//# sourceMappingURL=main.c7061096.chunk.js.map